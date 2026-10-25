# Inteligência Artificial Estendida — V5.4 consolidada

**Versão única vigente deste pacote: V5.4** — revisão de 24/10/2026. Autoria © Nailson Rodrigues de Lima.

## Publicação

Publique os arquivos deste diretório **na raiz da branch configurada em GitHub Pages** do repositório `onsitelimavirtual/Curso_IA_Estendida`, preservando os nomes. Faça backup antes da substituição e não combine arquivos de diferentes pacotes.

Página oficial: https://onsitelimavirtual.github.io/Curso_IA_Estendida/profissional.html

### Integrações existentes (preservadas)
- Supabase `piagfpnjiwpngbikkkfp`: URL e **chave pública publishable** configuradas no HTML profissional. Nunca publique `service_role`, `sb_secret` ou segredos Google no GitHub.
- Google OAuth: o provedor e o Client Secret permanecem no Supabase. O código redireciona somente para o endereço oficial acima.
- Banco: progresso por conta, solicitações de certificado, administração restrita a `is_course_admin()` e verificação de certificado. Nenhuma migração SQL nesta atualização.
- Write and Back: motor local incorporado no arquivo `write-and-back-lab.html`, sujeito aos termos próprios da ferramenta.

### Acesso do aluno e administrador
- **Visitante / aluno não autenticado:** `Entrar / cadastrar` e `Entrar com Google`, sem botão Configurar nem Administração.
- **Aluno autenticado comum:** módulos, progresso, certificado sujeito à aprovação. Sem configuração de chaves ou Administração.
- **Administrador autenticado:** a função `is_course_admin()` deve retornar booleano `true` para mostrar as opções Administração na parte superior e no menu de estudo. A autorização efetiva das operações também deve ocorrer no servidor.
- Nenhuma tela pública recebe credenciais Supabase: apenas chaves publicáveis no frontend.

### Arquivos centrais
- `index.html`: entrada da V5.4 e acesso aos dois ambientes.
- `profissional.html`: 8 módulos, 24 aulas, tutor, avaliações e OAuth.
- `kids.html`: ambiente Kids independente, local.
- `apostila-aplicativo.html`: apostila interativa (14 etapas).
- `Apostila_Pratica_IA_Estendida_14_Etapas.pdf`: material de apoio.
- `laboratorio-virtual.html`, `write-and-back-lab.html` e `exemplo-gestor-servicos.html`: laboratório, ferramenta autoral e exemplo.
- `certificado-premium-modelo.html`: prévia do certificado sem valor probatório; `verificar-certificado.html`: consulta de autenticidade; `decoracao-certificado-*.svg`: ilustrações originais.

### Remoção de arquivos antigos no repositório
Ao atualizar o GitHub Pages, **exclua ou arquive na branch pública** os antigos manuais, pois simplesmente enviar o ZIP não remove arquivos que já existem no repositório:
`LEIA-ME-3.7.md`, `QA-3.7.md`, `LEIA-ME-5.1-DOMINIO-OFICIAL.md`, `LEIA-ME-V5-PREMIUM.md`, `LEIA-ME-V5.2-ACESSO-AUTOMATICO.md`, `QA-V5-RESULTADOS.md`, `QA-V5.2-ACESSO-AUTOMATICO.md`, `QA-CORRECAO.md`, `QA-RODAPE.md`, `QA.md`.

Se a publicação exibir os botões antigos, teste em aba anônima e faça uma atualização forçada do navegador; a entrada do `index.html` agora utiliza `profissional.html?v=5.3`. **Não apague** `index.html`, `profissional.html`, os demais HTML da versão nova ou dados do Supabase.

### Configuração externa obrigatória
No Supabase Authentication → URL Configuration, o responsável do projeto deve manter URL de retorno oficial, preservar URLs ainda utilizadas por outros aplicativos e revisar qualquer dependência do domínio desativado. A atualização do HTML **não modifica configurações administrativas** do Supabase.

### Limites
- E-mail/senha ainda depende de serviço de entrega de mensagens/limites do Supabase. Login Google não depende do SMTP da Brevo.
- A emissão do certificado não é automática: requer instituição emissora habilitada, avaliação e evidências de carga horária. Não é diploma MEC nem chancela da OpenAI.
- Testes locais não substituem a validação real da publicação, da autenticação e de permissões entre contas.

Consulte `QA-V5.4.md` para verificações executadas e limitações.


## V5.4 — Correção de progresso
Veja `LEIA-ME-V5.4-PROGRESSO.md` e `QA-V5.4-RESULTADOS.md`. A plataforma mantém notas e redações, mas só marca ✓ quando ambas as exigências estão cumpridas. O sistema reconcilia os registros ao entrar e preserva a distinção entre conclusão demonstrativa e certificação institucional.
