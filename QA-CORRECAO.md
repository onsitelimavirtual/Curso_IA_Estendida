# QA da correção V3.6

- Verificar que cada HTML incorpora data URIs PNG em lugar de caminhos relativos das imagens.
- Conferir que `kids.html` embute os dois scripts e CSS local.
- `node --check` nos arquivos JS e execução de `node test-kids.cjs`.
- ZIP: teste CRC.
- Teste manual pendente: abrir o `profissional.html` diretamente no Chrome Android com `content://`, conferir logomarca.
- Navegação entre arquivos `content://` não é garantida. Para navegação completa, publicação HTTPS.
