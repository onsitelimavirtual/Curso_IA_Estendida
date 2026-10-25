# QA da versão 5.7 — certificado fiel ao modelo

- [x] Arquivo `profissional.html` modificado para usar a arte original aprovada e um único PNG produzido a partir dos dados da emissão.
- [x] Texto de nome variável testado, mantendo alinhamento horizontal.
- [x] QR Code de demonstração gerado com a URL correta para verificação; decodificado localmente com OpenCV.
- [x] PDF local testado com Chromium: **1 página**, orientação **A4 horizontal** (843 × 596 pontos, por aproximação do formato A4).
- [x] Sintaxe do JavaScript verificada, sem depender de serviços pagos.
- [x] Documentos com dados ausentes são recusados pelo gerador; não há emissão local fictícia.
- [x] Emissor e código são obtidos exclusivamente do objeto de emissão.
- [ ] Login Google e impressão real Android não testados após publicação.
- [ ] Processo real Supabase e leitura do QR de um certificado efetivamente emitido precisam de teste de produção.

**Importante:** o PDF de teste com pessoa fictícia não constitui certificado emitido e não foi incluído na aplicação.
