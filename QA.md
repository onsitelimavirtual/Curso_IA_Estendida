# QA técnico e pedagógico — IA Estendida 3.3

## Execução verificável
* `node --check kids-core.js` e `node --check kids.js`: aprovados.
* `node test-kids.cjs`: 15/15 aprovados. Casos: quatro modelos válidos, duplicidades, limites, correções, rota do robô e importações inválidas.
* Empacotamento: validado em ZIP com teste de CRC.

## Critérios de aceite para implantação
1. Concluir ao menos uma atividade de cada tipo com um erro e um acerto.
2. Confirmar controles pelo teclado, foco visível, contraste, zoom de 200%, leitor de tela e toque no Android, iOS e desktop.
3. Testar importação de arquivo malformado, grande e legítimo; conferir preservação de dados quando inválido.
4. Testar exportação, reinício, persistência, limpeza de dados e navegação em modo offline.
5. Testar desempenho, acessibilidade WCAG 2.2 AA, segurança no navegador e validação dos textos livres.
6. Avaliar materiais com professores dos anos iniciais e estudantes das diferentes faixas etárias; revisar linguagem, clareza, progressão de dificuldade e relação com a BNCC.

## BNCC: correspondência preliminar, não homologação
* Quiz de Matemática: raciocínio numérico e resolução de problemas; selecionar habilidades por ano e conteúdo específico da questão.
* Pares de Português/Ciências: categorização, vocabulário e associação de informações; selecionar habilidades por ano/assunto.
* Sequência: ordenação temporal, sequências lógicas e planejamento de processos.
* Robô: pensamento computacional, algoritmos, depuração e decomposição; analisar referência curricular de Computação complementar à BNCC.

**Não foram atribuídos códigos EF de modo automático**: cada projeto é editável e a habilidade precisa corresponder ao conteúdo que o aluno efetivamente cria. O mapeamento final depende de curadoria pedagógica e validação da secretaria/rede quando aplicável. Não há certificação de conformidade do MEC.

## Riscos residuais
* O código JS no navegador não é fronteira de confiança para relatórios ou notas e não deve emitir certificação oficial.
* LocalStorage é acessível a qualquer pessoa com acesso ao perfil do navegador; não indicado para dados sensíveis.
* Programação visual usa comandos, não blocos por arraste; recursos mais avançados podem ser acrescentados em futura edição.
* A versão Professional foi preservada, sem rehomologação integral neste ciclo.
