# IA Estendida 3.7 — Google OAuth + Aulas enriquecidas

## Atualização preservadora
Esta versão parte do pacote original 3.6 existente. Mantém a página inicial, Kids Creator, termos, ícones, copyright © Nailson Lima, autenticação por e-mail e senha, bancos de progresso, avaliações, certificados supervisionados e ferramentas anteriores. Atualiza `profissional.html`, ajusta apenas o título/rodapé de `index.html` para 3.7 e acrescenta estes documentos de instrução.

## Google OAuth (sem Brevo para este método)
1. Abra https://console.cloud.google.com/auth/overview e crie ou selecione um projeto Google Cloud.
2. Em Google Auth Platform > Branding, configure nome do app e e-mail de suporte. Em Audience, use **External**. Enquanto Testing, adicione seu e-mail como usuário de teste.
3. Em Data Access, mantenha apenas openid, userinfo.email e userinfo.profile; não solicite escopos adicionais.
4. Em Clients, crie um OAuth Client ID do tipo **Web application**.
5. Em **Authorized JavaScript origins**, informe a **origem** do site efetivamente publicado (ex.: `https://onsitelimavirtual.github.io` ou `https://motoforce.github.io`, sem caminho). Não cadastre origens de que não precise.
6. Em **Authorized redirect URIs**, cadastre EXATAMENTE `https://piagfpnjiwpngbikkkfp.supabase.co/auth/v1/callback` (confira o valor exibido no próprio Supabase antes de salvar).
7. Copie Client ID e Client Secret para o painel **Supabase > Authentication > Providers > Google**: https://supabase.com/dashboard/project/piagfpnjiwpngbikkkfp/auth/providers . Habilite o provedor e salve. O secret fica SOMENTE no painel Supabase. Nunca envie esse segredo ao GitHub ou insira no HTML.
8. No Supabase **Authentication > URL Configuration**: https://supabase.com/dashboard/project/piagfpnjiwpngbikkkfp/auth/url-configuration, adicione em Redirect URLs a URL EXATA do `profissional.html` publicado (ex.: `https://onsitelimavirtual.github.io/Curso_IA_Estendida/profissional.html`). Mantenha URLs existentes para outros aplicativos.
9. Publique os arquivos deste ZIP no mesmo repositório/pasta usado pelo curso (GitHub Pages). Substitua os arquivos da versão anterior sem apagar outros arquivos fora deste pacote.
10. Entre em `profissional.html`, configure a URL e a **chave pública** do Supabase caso já não apareçam (o aplicativo preserva a configuração do mesmo navegador/origem). Clique **Entrar / cadastrar > Entrar com Google**.
11. Confirme que Google retorna ao curso, o e-mail aparece na barra, as aulas e o progresso são exibidos; saia e entre novamente para verificar persistência.

## Restrições e segurança
- O login Google usa código de autorização OAuth com **PKCE S256** e troca o código por sessão via Supabase, com verificação da identidade no endpoint `/auth/v1/user`.
- A senha Google nunca é coletada pelo aplicativo; o Client Secret é guardado no painel do Supabase.
- O login Google **não depende de SMTP Brevo**. Recuperação de senhas antigas por e-mail continua sujeita às limitações do provedor de e-mail do Supabase.
- Contas existentes de e-mail confirmado com mesmo e-mail normalmente são associadas automaticamente pelo Supabase; valide com conta de teste antes de migrar alunos e verifique o UUID/perfil/progresso. Não transfira progresso manualmente sem verificar titularidade.
- O certificado permanece sujeito à aprovação humana, e 80 horas são carga curricular **proposta**, não aferição automática de tempo.
- Esta versão não configura o provedor Google remotamente porque Client ID/Secret precisam de ação do responsável pelo Google Cloud e Supabase. Não publicamos segredo algum.

## Conteúdo pedagógico
- Oito módulos mantidos e 24 aulas preservadas.
- Tab **Leitura e mapas**: textos originais aprofundados, mapas conceituais SVG autorais, aplicações, roteiros, leituras oficiais, sugestões de vídeo e exportação de texto por módulo.
- Sugestões de vídeo são **links de busca no YouTube**, sem baixar, incorporar, editar nem redistribuir material de terceiros. Confira autoria e direitos antes de usar.
- A proposta curricular de horas não foi alterada, e atividades/avaliações existentes permanecem intactas.

## Publicação e testes
Veja `QA-3.7.md`. Não declare Google OAuth homologado até habilitar o provedor, publicar em HTTPS e executar o ciclo real de login.
