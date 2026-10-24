# QA EXECUTADO — IAE Estendida V5 Premium

Data: 24/10/2026. Escopo: revisão local dos artefatos desta entrega.

**Verificações executadas com resultado esperado**
- 14 capítulos e menu de apostila renderizados.
- Marcador de etapa muda contador de 0/14 para 1/14 na página em teste. Persistência entre sessões requer teste HTTPS no browser do usuário.
- Prompt local criado a partir de “agenda serviços” com 2.190 caracteres. A resposta é baseada em regras, não LLM.
- QA estático do exemplo identifica estrutura HTML, CSS, JS, mobile e conteúdo. Resultado heurístico; não comprova ausência de falhas.
- Editor mostra HTML real de gestor de serviços e prévia isolada sob iframe.
- Profissional mantém 8 entradas de módulo e o botão “Entrar com Google”.
- Atalhos da apostila/laboratório e montagem dinâmica de certificado executados em simulação, sem emitir registros.
- Scripts incorporados nos arquivos HTML verificados pelo Node.js sem erros de sintaxe.
- PDF da apostila gerado e renderizado em páginas para inspeção visual.

**Limitações importantes**
- O ambiente de QA restringe navegação HTTP e file:// em navegador automatizado; portanto a publicação real no GitHub Pages, fluxo completo de Google OAuth, download em dispositivo Android, impressão A4, envio real de certificados e scanner QR **não foram testados de ponta a ponta nesta entrega**.
- O certificado de exemplo em imagem é UMA PRÉVIA SEM VALIDADE. O programa só monta certificado mediante consulta a registro oficial de emissão; o emissor deve realizar revisão pedagógica, cadastrar instituição e autorizar legalmente a emissão.
- O Write and Back incorporado é a versão autoral standalone 4.0 encontrada na biblioteca disponível; melhorias posteriores não foram presumidas nem fabricadas.
- O script do QR depende de biblioteca externa hospedada em CDN; em ambiente sem rede o link/código textual permanece.
- As 80h são carga curricular proposta; conclusão automática de módulos não representa comprovação de frequência.

**Testes de aceitação pendentes na publicação**: entrar/sair por Google, ler 24 aulas e 8 mapas, transferir ideias para o Write and Back na mesma origem HTTPS, criar/editar/exportar aplicativo, QA móvel real, imprimir certificado válido, verificar QR em outro telefone.
