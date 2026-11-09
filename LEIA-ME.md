# IA Estendida — V5.10 Cadastro ajustado

## Conteúdo
- `profissional.html`: arquivo principal com ajuste no tratamento da resposta do cadastro Supabase.

## Ajustes
- Aceita resposta de autenticação com sessão em `data.session` ou diretamente em `data`.
- Quando recebe `access_token` e `user`, salva a sessão e inicia o carregamento do curso.
- Se a conta foi criada, mas a carga dos dados do curso falhar, informa a situação sem apagar a sessão válida.
- Quando não há sessão, não afirma que o aluno já está conectado; informa que a confirmação pode ser necessária conforme a configuração do Supabase.
- Preserva o envio de `full_name`, PKCE, login Google, recuperação e reenvio de confirmação, controle de licença, progresso e certificação.

## Publicação
1. Faça backup do `profissional.html` atualmente publicado.
2. Substitua somente `profissional.html` pela versão deste pacote na branch do GitHub Pages.
3. Não altere a configuração global de autenticação do Supabase nesta etapa.
4. Não publique nem compartilhe senhas, `service_role`, `sb_secret` ou API keys privadas.

## Validação realizada
- Sintaxe JavaScript validada localmente com Node.js.
- O teste de sintaxe não substitui testes reais no Supabase.

## Testes necessários
1. Cadastro com e-mail de teste ainda não registrado, com confirmação desligada: deve receber sessão e entrar.
2. Cadastro com confirmação ligada: deve informar que precisa confirmar o e-mail.
3. Login por e-mail e senha.
4. Login Google.
5. Recuperação de senha e retorno ao mesmo endereço oficial.
6. Verificar se o acesso/licença, progresso e certificação continuam respeitando as regras do banco.
