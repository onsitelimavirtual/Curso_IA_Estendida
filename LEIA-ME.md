# Inteligência Artificial Estendida — V5.7 (HTML + certificado fiel ao modelo aprovado)

## Como publicar

Extraia o ZIP e envie **todos os arquivos da pasta raiz** para a branch publicada do repositório GitHub Pages do curso. Os arquivos `profissional.html`, `certificado-padrao.js`, `certificado-arte-premium.png` e `qr-local.js` devem permanecer **juntos, na mesma pasta**. Não envie apenas `profissional.html`, pois isso impediria o certificado de ser montado.

A página de acesso permanece em `https://onsitelimavirtual.github.io/Curso_IA_Estendida/profissional.html`. Esta versão não depende de `painel.limavirtual.online`.

## Alterações no certificado

- Usa a arte azul-marinho/dourado aprovada como base, com nome do aluno, data, emissor, responsável, código e QR Code inseridos dinamicamente a partir do registro real.
- Emissão permanece sob a autorização do Supabase; a mudança não cria/edita certificados no banco.
- Impressão ou salvamento em PDF: **A4 paisagem, uma única página**. Para minimizar cortes no Chrome Android, a impressão usa uma imagem única na proporção correta de A4.
- QR Code gerado no navegador (offline, sem fornecedor pago) aponta ao `verificar-certificado.html?codigo=<código-emitido>`.
- Exibe "Lima Virtual Cursos" como emissor e "Nailson Rodrigues de Lima" como responsável, sem assinatura digital ou chancela governamental.
- Documento só é montado com dados de emissão completos e carga horária igual a 80 horas.

## Limites importantes

- Uma imagem isolada não confirma autenticidade: somente o **registro no Supabase** pode validar um código de certificado.
- Não confundir `certificado-premium-modelo.html` e `certificado-modelo-previa-sem-validade.jpg` com um certificado real: ambos são ilustrativos, marcados como **sem validade**.
- A implementação foi testada com dados fictícios em navegador e PDF local. Ainda exige validação com um certificado efetivamente emitido após publicar no GitHub Pages e em aparelhos Android dos alunos.
- Os campos textuais fixos da arte aprovada (nome do curso, matriz resumida, descrição do percurso de 80h e nota de curso livre) não devem ser reaproveitados para cursos de outra duração sem adaptar a arte e o código.

© 2026 Nailson Rodrigues de Lima.
