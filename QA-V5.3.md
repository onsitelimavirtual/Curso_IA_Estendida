# Auditoria e QA — Inteligência Artificial Estendida V5.3

**Data:** 24/10/2026.

## Achados da V5.2 e correções

| Problema | Correção |
|---|---|
| `index.html` anunciava 3.7 | Título, rodapé e descrição atualizados para V5.3 |
| `profissional.html` com V5 e V5.2 | Título, rodapé e comentários harmonizados para V5.3 |
| Antigos manuais 3.7, 5.0, 5.1 coexistiam | Consolidados em um LEIA-ME único; instruções para excluí-los no GitHub |
| `Configurar` exposto a visitantes em versões antigas | V5.3 não contém botão de configuração pública; somente a conexão publishable já incorporada |
| Administração não explicitada na barra superior | Botão novo `Administração`, oculto por padrão, só revelado após sessão e retorno `true` de `is_course_admin()` |
| Risco de conteúdo administrativo visível após logout | Estado `admin=false` ao sair; navegação renderizada novamente |
| Ilustrações referenciadas pelo certificado estavam ausentes | Criados `decoracao-certificado-globo.svg` e `decoracao-certificado-tecnologia.svg` |
| Mensagens legais indicavam Supabase hipotético | Textos compatibilizados com integração atual |

## Testes concluídos
- Node.js `--check` nos scripts embutidos nas páginas HTML: **aprovado**.
- Análise de caminhos relativos em HTML para os arquivos do pacote: **sem referências ausentes**.
- Análise de arquivos SVG por parser XML: **aprovado**.
- Currículo inspecionado a partir do JavaScript: **8 módulos e 24 aulas preservados**.
- Chave incorporada inspecionada: **publishable**, sem service_role no código.
- Verificação estática de acesso administrativo: menu e botão condicionados a `user && admin`; `admin` só se torna verdadeiro após retorno `true` do RPC; visão admin contém verificação adicional.
- Endpoint OAuth e URLs do curso mantidos no código da V5.2; endereço oficial preservado.

## Não homologado nesta sessão
- Teste visual em navegador automatizado: o Chromium do ambiente bloqueou todas as navegações por política do navegador (`ERR_BLOCKED_BY_ADMINISTRATOR`), inclusive página de teste.
- Login Google real, confirmação de contas reais, contas aluno/admin distintas e suas permissões em produção.
- Sincronização real do progresso em sessão renovada e certificação/QR por conta real.
- Imagem final impressa do certificado com dados reais.

## Teste obrigatório após publicação
1. Abrir `profissional.html?v=5.3` em janela anônima sem login: **não** mostrar `Configurar` ou `Administração`.
2. Autenticar com conta Google comum: deve aparecer curso e progresso, **sem Administração**.
3. Sair: não deve exibir Administração.
4. Entrar com conta administradora: após validação no Supabase, mostrar Administração; verificar solicitação permitida.
5. Abrir em segundo celular: conectar sem solicitar URL nem chave Supabase.
6. Conferir aulas e apostila, laboratório, Write and Back, exportações e prévia do certificado.
7. Testar links e relatório de QR Code somente com certificados verdadeiros.

**Observação:** o arquivo local está corrigido; a página publicada só muda depois de atualizar os arquivos no GitHub.
