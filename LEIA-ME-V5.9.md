# Inteligência Artificial Estendida — V5.9

## Conteúdo
- `profissional.html` — arquivo principal do curso, atualizado para V5.9.

## Melhorias desta versão
- Cadastro com nome completo, senha e confirmação de senha.
- Validação de e-mail e senha (10 a 128 caracteres) no cadastro.
- Metadado `full_name` enviado ao Supabase Auth.
- Fluxo PKCE para confirmação de cadastro e recuperação de senha.
- Recuperação de senha com compatibilidade para links antigos que retornam `access_token` no fragmento.
- Reenvio de confirmação de e-mail pela API de Auth do Supabase.
- Mensagens mais claras para erros frequentes de autenticação.
- Endereço oficial de retorno preservado: `https://onsitelimavirtual.github.io/Curso_IA_Estendida/profissional.html`.
- Login Google, controle de licenças, demonstração, progresso, avaliação e certificação preservados no arquivo-base.

## Publicação
1. Faça backup do `profissional.html` atualmente publicado.
2. Substitua apenas `profissional.html` na branch que publica o GitHub Pages deste curso.
3. No Supabase Authentication > URL Configuration, mantenha a URL oficial acima em Site URL ou Redirect URLs, conforme a configuração do projeto. Preserve as demais URLs autorizadas.
4. Não altere nem publique chaves secretas. O arquivo contém apenas a chave pública `sb_publishable` já existente no projeto.

## Testes pendentes no ambiente real
A validação estática de sintaxe JavaScript foi concluída. Ainda é necessário testar no projeto Supabase real:
- Cadastro de uma conta de teste e recebimento do e-mail de confirmação.
- Confirmação no mesmo navegador e criação da sessão.
- Reenvio de confirmação.
- Recuperação de senha, abertura do link e atualização da senha.
- Login Google e retorno ao endereço oficial.
- Verificação de licença, progresso e certificação com contas de teste.

A V5.9 não altera banco de dados, Edge Functions, políticas RLS, templates de e-mail nem configuração do provedor Google.


## Correção emergencial V5.9
Corrigida a função de geração PKCE que chamava a si própria recursivamente, causando `Maximum call stack size exceeded`. A função agora gera verifier aleatório e challenge SHA-256 usando Web Crypto.
