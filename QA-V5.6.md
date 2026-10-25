# QA V5.6 — Certificado premium

## Resultados realmente executados
- JavaScript principal do curso: verificação de sintaxe Node.js aprovada.
- QR Code local: gerado no Chromium, SVG presente no certificado, sem exceções JS.
- Leitura de QR Code real: OpenCV decodificou o SVG e também o QR Code do PDF renderizado a 300 DPI; aponta para `verificar-certificado.html?codigo=...`.
- PDF: renderização Chromium/Playwright com paisagem A4, sem elementos duplicados; 1 página (verificado por PyMuPDF).
- Layout: tela e PDF renderizados e visualmente inspecionados; espaços separados para QR Code, autenticação, emissão e responsável.
- Dados dinâmicos: HTML montado com informações simuladas em ambiente local, sem criar nem alterar certificados no Supabase.
- Prévia: identificada `SEM VALIDADE` e diferenciada de documento emitido.
- Nenhuma imagem de assinatura manuscrita, selo gov.br ou alegação de assinatura digital.

## Testes que exigem publicação
- Impressão no Chrome para Android (selecionar A4/Paisagem se necessário).
- Login Google e consulta real ao Supabase do usuário; clique de QR no celular.
- Emissão aprovada e consulta pública de autenticidade com código efetivo.

## Arquivos críticos na raiz do GitHub Pages
`profissional.html`, `qr-local.js`, `certificado-premium.css`, `certificado-ia.svg`, `certificado-academico.svg`, `verificar-certificado.html`.
