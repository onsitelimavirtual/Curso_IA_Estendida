-- IA Estendida 2.0 • Supabase PostgreSQL
-- Executar no SQL Editor em um projeto próprio; revisar antes de publicar.
create extension if not exists pgcrypto;
create table if not exists public.iae_student_state (
 user_id uuid primary key references auth.users(id) on delete cascade,
 data jsonb not null default '{}'::jsonb,
 updated_at timestamptz not null default now()
);
create table if not exists public.iae_course_admins (
 user_id uuid primary key references auth.users(id) on delete cascade,
 created_at timestamptz not null default now()
);
create table if not exists public.iae_certificate_requests (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 full_name text not null check(length(trim(full_name)) between 5 and 180),
 status text not null default 'pending' check(status in ('pending','rejected','issued')),
 review_note text,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
create unique index if not exists iae_one_pending_request on public.iae_certificate_requests(user_id) where status='pending';
create table if not exists public.iae_certificates (
 id uuid primary key default gen_random_uuid(),
 request_id uuid not null unique references public.iae_certificate_requests(id),
 user_id uuid not null references auth.users(id),
 code text not null unique default upper(encode(gen_random_bytes(16),'hex')),
 full_name text not null,
 issuer_name text not null,
 signer_name text not null,
 hours int not null default 80 check(hours=80),
 issued_at timestamptz not null default now(),
 revoked_at timestamptz
);
create table if not exists public.iae_issuer_settings (
 singleton boolean primary key default true check(singleton),
 issuer_name text not null, signer_name text not null, enabled boolean not null default false
);
create table if not exists public.iae_audit (
 id bigint generated always as identity primary key,
 actor uuid,
 action text not null,
 item uuid,
 detail text,
 occurred_at timestamptz not null default now()
);
alter table public.iae_student_state enable row level security;
alter table public.iae_course_admins enable row level security;
alter table public.iae_certificate_requests enable row level security;
alter table public.iae_certificates enable row level security;
alter table public.iae_audit enable row level security;
alter table public.iae_issuer_settings enable row level security;
-- Sem políticas de acesso direto: uso exclusivo de funções controladas.
revoke all on public.iae_student_state,public.iae_course_admins,public.iae_certificate_requests,public.iae_certificates,public.iae_audit,public.iae_issuer_settings from anon,authenticated;
create or replace function public.is_course_admin() returns boolean language sql stable security definer set search_path='' as $$
 select auth.uid() is not null and exists(select 1 from public.iae_course_admins where user_id=auth.uid());
$$;
create or replace function public.get_student_state() returns jsonb language plpgsql security definer set search_path='' as $$
begin
 if auth.uid() is null then raise exception 'Acesso autenticado obrigatório'; end if;
 return coalesce((select data from public.iae_student_state where user_id=auth.uid()),'{}'::jsonb);
end $$;
create or replace function public.save_student_state(p_state jsonb) returns boolean language plpgsql security definer set search_path='' as $$
begin
 if auth.uid() is null then raise exception 'Acesso autenticado obrigatório'; end if;
 if p_state is null or jsonb_typeof(p_state)<>'object' or pg_column_size(p_state)>100000 then raise exception 'Estado inválido ou muito grande'; end if;
 insert into public.iae_student_state(user_id,data) values(auth.uid(),p_state)
 on conflict(user_id) do update set data=excluded.data,updated_at=now();
 insert into public.iae_audit(actor,action,detail) values(auth.uid(),'student_save','Progresso alterado pelo cliente; sujeito a verificação humana');
 return true;
end $$;
create or replace function public.request_course_certificate(p_full_name text) returns uuid language plpgsql security definer set search_path='' as $$
declare rid uuid; d jsonb; i int;
begin
 if auth.uid() is null then raise exception 'Acesso autenticado obrigatório'; end if;
 if length(trim(coalesce(p_full_name,''))) not between 5 and 180 then raise exception 'Nome inválido'; end if;
 select data into d from public.iae_student_state where user_id=auth.uid();
 if d is null then raise exception 'Percurso não encontrado'; end if;
 for i in 0..7 loop
  if coalesce(d->'done'->>(i::text),'false') <> 'true' then raise exception 'Percurso incompleto'; end if;
 end loop;
 if exists(select 1 from public.iae_certificate_requests where user_id=auth.uid() and status='pending') then raise exception 'Já existe solicitação pendente'; end if;
 insert into public.iae_certificate_requests(user_id,full_name) values(auth.uid(),trim(p_full_name)) returning id into rid;
 insert into public.iae_audit(actor,action,item) values(auth.uid(),'certificate_requested',rid);
 return rid;
end $$;
create or replace function public.admin_certificate_queue() returns table(id uuid,email text,full_name text,created_at timestamptz) language plpgsql security definer set search_path='' as $$
begin
 if not public.is_course_admin() then raise exception 'Permissão negada'; end if;
 return query select r.id,u.email::text,r.full_name,r.created_at from public.iae_certificate_requests r join auth.users u on u.id=r.user_id where r.status='pending' order by r.created_at asc;
end $$;
create or replace function public.admin_reject_certificate(p_request_id uuid,p_note text) returns boolean language plpgsql security definer set search_path='' as $$
begin
 if not public.is_course_admin() then raise exception 'Permissão negada'; end if;
 if length(trim(coalesce(p_note,'')))<15 then raise exception 'Justificativa insuficiente'; end if;
 update public.iae_certificate_requests set status='rejected',review_note=left(p_note,500),updated_at=now() where id=p_request_id and status='pending';
 if not found then raise exception 'Solicitação não encontrada'; end if;
 insert into public.iae_audit(actor,action,item,detail) values(auth.uid(),'certificate_rejected',p_request_id,left(p_note,500));
 return true;
end $$;
create or replace function public.admin_issue_certificate(p_request_id uuid,p_note text) returns boolean language plpgsql security definer set search_path='' as $$
declare r public.iae_certificate_requests%rowtype; issuer public.iae_issuer_settings%rowtype;
begin
 if not public.is_course_admin() then raise exception 'Permissão negada'; end if;
 if length(trim(coalesce(p_note,'')))<15 then raise exception 'Registre evidência de revisão'; end if;
 select * into issuer from public.iae_issuer_settings where singleton=true and enabled=true;
 if not found or length(trim(issuer.issuer_name))<5 or length(trim(issuer.signer_name))<5 then raise exception 'Emissor e representante ainda não habilitados'; end if;
 select * into r from public.iae_certificate_requests where id=p_request_id and status='pending' for update;
 if not found then raise exception 'Solicitação não encontrada'; end if;
 -- O gestor deve validar identidade, carga horária e trabalho fora deste fluxo.
 -- Emissor só habilitado após configuração administrativa explícita.
 insert into public.iae_certificates(request_id,user_id,full_name,issuer_name,signer_name)
 values(r.id,r.user_id,r.full_name,issuer.issuer_name,issuer.signer_name);
 update public.iae_certificate_requests set status='issued',review_note=left(p_note,500),updated_at=now() where id=r.id;
 insert into public.iae_audit(actor,action,item,detail) values(auth.uid(),'certificate_issued',r.id,left(p_note,500));
 return true;
end $$;
create or replace function public.my_course_certificate() returns jsonb language sql stable security definer set search_path='' as $$
 select to_jsonb(c) from public.iae_certificates c where c.user_id=auth.uid() and c.revoked_at is null order by issued_at desc limit 1;
$$;
create or replace function public.verify_course_certificate(p_code text) returns jsonb language sql stable security definer set search_path='' as $$
 select jsonb_build_object('code',c.code,'full_name',c.full_name,'issuer_name',c.issuer_name,'issued_at',c.issued_at,'hours',c.hours)
 from public.iae_certificates c where c.code=upper(trim(p_code)) and c.revoked_at is null limit 1;
$$;
revoke all on function public.is_course_admin(),public.get_student_state(),public.save_student_state(jsonb),public.request_course_certificate(text),public.admin_certificate_queue(),public.admin_reject_certificate(uuid,text),public.admin_issue_certificate(uuid,text),public.my_course_certificate(),public.verify_course_certificate(text) from public;
grant execute on function public.is_course_admin(),public.get_student_state(),public.save_student_state(jsonb),public.request_course_certificate(text),public.admin_certificate_queue(),public.admin_reject_certificate(uuid,text),public.admin_issue_certificate(uuid,text),public.my_course_certificate() to authenticated;
grant execute on function public.verify_course_certificate(text) to anon,authenticated;
-- Após registrar o primeiro usuário pelo aplicativo, atribua a função de administrador
-- manualmente no SQL Editor, usando o UUID correto de auth.users:
-- insert into public.iae_course_admins(user_id) values ('UUID-REAL-DA-CONTA');
-- ANTES de emissão real: configurar issuer_name/signer_name mediante atualização da
-- função de emissão, revisar documentação institucional e testes RLS.

-- Exemplo: só após revisão jurídica/institucional, cadastrar e habilitar emissor:
-- insert into public.iae_issuer_settings(singleton,issuer_name,signer_name,enabled)
-- values(true,'IDENTIFICAÇÃO LEGAL DO EMISSOR','RESPONSÁVEL AUTORIZADO',true);
