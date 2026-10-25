# Certificado Premium V5.6 – implementação integrada

- Aplicação: `profissional.html` abre o certificado emitido a partir da função `my_course_certificate` já existente.
- Arquivos adicionados: `certificado-premium.css`, `certificado-ia.svg`, `certificado-academico.svg`, `qr-local.js`.
- A emissão depende de aprovação administrativa no Supabase; **não** foi afrouxada nem automatizada.
- QR Code é calculado no dispositivo com biblioteca JS local, apontando para `verificar-certificado.html?codigo=...`. Não use um QR Code estático de imagem gerada por IA.
- Impressão: no Chrome para Android, selecionar explicitamente **A4 / Paisagem / Sem cabeçalho e rodapé** se o diálogo ignorar o `@page`. PDF de apenas uma folha nas configurações corretas.
- O certificado não contém nome comercial gov.br, não declara assinatura digital, não exibe a imagem pessoal de assinatura e não menciona OpenAI/ChatGPT.
- A arte de referência produzida com IA não é usada no documento final para evitar nomes/QR Codes fictícios.
- `certificado-premium-modelo.html` é um exemplo VISUAL sem validade, diferente de uma emissão real.
- Para publicar: enviar todos os arquivos da raiz do ZIP ao diretório correspondente no GitHub Pages, substituindo anteriores; o QR Code não funcionará se `qr-local.js` não for publicado.
