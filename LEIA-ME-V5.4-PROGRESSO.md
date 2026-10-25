# V5.4 — Progresso consistente (24/10/2026)

## Correção implementada
- Nota da avaliação e conclusão do módulo são indicadores distintos.
- Cada um dos oito módulos recebe ✔ somente após nota >= 67% e atividade de >= 180 caracteres.
- A ordem das operações agora não altera o resultado.
- Ao autenticar, a plataforma recupera os registros existentes e reconhece módulos cujos requisitos já estão armazenados no Supabase, sincronizando a atualização (sem apagar avaliações ou textos).
- A tela de cada módulo e a navegação lateral deixam visível o requisito pendente.
- Mensagens de gravação são exibidas como sucesso apenas depois de a API confirmar o salvamento; falhas de sincronização são informadas.

## O que o estudante deve fazer
1. Entre com sua conta (Google ou e-mail/senha).
2. Na navegação, procure a mensagem de nota e atividade.
3. Se houver avaliação suficiente e texto válido em uma conta antiga, o ✔ será restaurado automaticamente na próxima entrada.
4. Se houver nota 100% e não houver ✔, entre em **Atividade**, escreva ao menos 180 caracteres e clique **Salvar atividade**.
5. Visite **Meu painel** para consultar o total e a porcentagem geral.

**Atenção:** avaliação 100% = três respostas corretas; não equivale a curso concluído. A conclusão demonstrativa não valida automaticamente carga horária, qualidade semântica da resposta ou emissão de certificado.

## Publicação
Para corrigir apenas o progresso, basta substituir `profissional.html` na branch do GitHub Pages. O ZIP contém todos os arquivos; não é necessário recriar alunos, tabelas ou credenciais. O projeto compartilhado do Supabase não sofreu alterações de esquema. Teste em aba anônima após publicação e confirme que a conta com avaliações e atividade recebe o ✔ esperado.

## QA
- Compilação de JavaScript com Node.js.
- Integridade dos arquivos ZIP.
- Testes de interface em navegador com API de autenticação simulada, caso disponíveis.
- Não foi realizada alteração direta nos estados dos usuários no banco de produção.
