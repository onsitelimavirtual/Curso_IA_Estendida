# QA — Inteligência Artificial Estendida V5.4

## Diagnóstico fundamentado
Na V5.3, a nota `scores[i]` e a conclusão `done[i]` são armazenadas separadamente. A avaliação assinala `done` somente quando já existe atividade salva. Salvar uma atividade depois da avaliação não atualizava o flag de conclusão.

Na inspeção agregada do Supabase (sem nomes ou e-mails), havia três contas com estado salvo. Uma delas apresentava oito notas 100%, cinco atividades escritas de comprimento superior a 180 caracteres e zero `done=true`.

## Correção entregue
- Critério: `scores[i] >= 67` **e** atividade escrita de ao menos 180 caracteres.
- A conclusão demonstrativa é reconhecida ao salvar a prova ou a atividade, independentemente da ordem.
- No login, o software reconhece os módulos completos com dados anteriores e envia somente a atualização de estado da própria conta ao Supabase.
- Nenhuma conclusão antiga é desfeita.
- A navegação mostra `✓` apenas para módulos concluídos e exibe pendências de atividade separadamente da nota do questionário.
- Salvar não declara sucesso em caso de falha de sincronização.

## Testes realmente executados
1. `node --check` no JavaScript: **PASSOU**.
2. Integridade do ZIP (`unzip -t`): **PASSOU**.
3. Unidade: avaliação 100% sem atividade não conclui: **PASSOU**.
4. Unidade: avaliação antes da atividade: **PASSOU**.
5. Unidade: atividade antes da avaliação: **PASSOU**.
6. Unidade: oito avaliações + cinco atividades válidas reconhecem cinco módulos: **PASSOU**.
7. Unidade: conclusões antigas já verdadeiras são preservadas: **PASSOU**.
8. Navegador Chromium, cenário demonstrativo "prova depois atividade" e atualização 0% → 13%: **PASSOU**; sem erros JavaScript no cenário.

## Limites de QA
Não houve validação end-to-end completa de login Google real nem operação em produção. A segunda sequência e o fluxo autenticado em navegador automatizado foram limitados pelo ambiente de execução. Os testes de unidade exercitaram a lógica desses cenários. Nenhum registro real foi alterado diretamente no Supabase.

## Publicação
Substitua `profissional.html` na branch do GitHub Pages. Para quem publica arquivos completos, utilize o ZIP V5.4. Teste primeiro com conta comum em sessão nova e confirme progressos recuperados, sincronização e retorno após sair/entrar. Certificados permanecem sujeitos à revisão administrativa.
