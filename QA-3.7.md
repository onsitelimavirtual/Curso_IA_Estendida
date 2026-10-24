# QA — IA Estendida 3.7

## Verificações automáticas realizadas durante a geração
- Estrutura das 8 unidades e 24 aulas mantida; novas seções por módulo.
- JavaScript analisável com `node --check`.
- Nenhuma senha privada, token de serviço ou segredo OAuth inserido nos arquivos.
- O projeto mantém os arquivos `kids.html`, `index.html` e documentos contratuais e imagens da versão 3.6.

## Testes de aceite na publicação (pendentes do Google Cloud)
- A: clicar login Google inicia OAuth com `provider=google` e desafio PKCE S256; ao finalizar retorna à URL permitida com sessão Supabase validada.
- B: cancelamento no Google exibe falha, não autentica ninguém nem perde progresso previamente salvo.
- C: perfil aluno não acessa Administração, e conta administrador mantém o próprio perfil.
- D: com dois alunos distintos, cada conta vê só seu progresso (RLS/RPC).
- E: login por e-mail e senha anterior continua funcional.
- F: após logoff, login Google ou senha não carrega dados locais de outra conta.
- G: 8 seções de Leitura e mapas exibem conteúdo, diagrama original, links externos com `noopener noreferrer` e exportação TXT.
- H: verificar links e conteúdo com internet e sem internet; links externos naturalmente exigem rede.
- I: recuperação de senha por e-mail continua limitada enquanto sem SMTP; não disfarçar erro como sucesso.

**Limite de evidência:** validação estática não comprova OAuth real nem qualidade das aulas com alunos. Testes de integração e revisão pedagógica são necessários.
