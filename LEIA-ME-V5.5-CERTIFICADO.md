# Correção V5.5 — Certificado Premium

- **Impressão:** abre visualização dedicada, contendo somente certificado. Use o botão “Imprimir / Salvar PDF”; A4 paisagem; se possível, sem cabeçalhos e rodapés.
- **QR Code:** biblioteca incorporada `qr-local.js`, sem CDN. QR aponta ao verificador do curso e utiliza o código emitido pelo Supabase.
- **Link GitHub Pages:** texto do certificado mostra apenas domínio e botão “Abrir página de verificação”, sem URL longa e sem sobreposição.
- **Identificação:** substituído “instituição responsável” por “responsável pela oferta e avaliação do curso”; a identificação continua conforme o registro real emitido.
- **Referência a ChatGPT/OpenAI:** removida do certificado, inclusive da prévia ilustrativa renovada. Não foi removida do conteúdo didático, se fizer parte dos conteúdos das aulas.
- **Banco e autenticação:** nenhuma tabela, usuário, nota ou certificado existente foi alterado.
- **Publicação:** envie `profissional.html` E `qr-local.js` juntos na mesma pasta do repositório. Para visual da prévia atualizada, envie também `referencia-visual-certificado-premium.png`, `Modelo_Certificado_Premium_PREVIA_SEM_VALIDADE.pdf` e `certificado-premium-modelo.html` (já estão no ZIP).
- **QA:** veja `QA-V5.5-CERTIFICADO.md`.


## Identificação e autenticidade por QR Code
- **Emissor:** Lima Virtual Cursos (conforme dados de emissão registrados no Supabase).
- **Responsável:** Nailson Rodrigues de Lima (conforme registro do certificado).
- **Sem assinatura manuscrita:** a imagem de assinatura não é publicada ou processada; não há declaração de assinatura digital oficial ou gov.br.
- **Verificação:** QR Code local e código único direcionam ao verificador público do curso; apenas certificados válidos e não revogados devem aparecer como válidos.
- **Emissão:** permanece dependente da autorização do administrador e do registro de revisão. O QR Code valida o registro, mas não substitui assinatura digital ICP-Brasil nem chancela governamental.
- **Impressão:** utilize a visualização isolada em uma única página A4 paisagem; desative cabeçalhos e rodapés do navegador quando possível.
