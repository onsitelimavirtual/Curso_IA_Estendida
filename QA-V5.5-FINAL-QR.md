# QA V5.5 Final QR

- A imagem de assinatura foi removida do HTML do curso e da visualização isolada de impressão.
- Não existe `assinatura-emissor.png` nem arquivo para preparar assinatura no pacote final.
- A identificação do responsável segue os dados efetivamente emitidos no Supabase, e não um nome fixo inserido para qualquer conta.
- O QR Code usa `qr-local.js`; contém a URL pública de verificação e o código do certificado, sem credenciais administrativas.
- O HTML mantém a impressão isolada em A4 paisagem e o certificado premium. A prévia é ilustrativa e sem validade.
- Não há alteração em bancos de dados, autenticação ou progresso dos alunos.
- **Pendente:** teste real da impressão pelo Chrome/Android e escaneamento por outro celular no domínio publicado.
