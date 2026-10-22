# Inteligência Artificial Estendida 3.3 — Kids Creator

## Executar
Abra `index.html` e selecione **Kids Creator**, ou abra `kids.html` diretamente. HTML/CSS/JS, sem servidor para o modo infantil. Mantenha todos os arquivos juntos. `profissional.html` preserva a base anterior da formação profissional, que necessita configuração do Supabase para funcionalidades de contas e certificados.

## Capacidades Kids
* Quatro jogos reais: perguntas, associação de pares, ordenação com botões para mover itens e comandos visuais para navegar um robô até a estrela evitando obstáculos.
* Edição de conteúdo dos exemplos; importação/exportação JSON estritamente validada, máximo de 16 desafios e 100 KB por importação.
* Salvamento local, sumário local de tentativas, exclusão de dados, instruções curtas e dicas contextuais por tipo de jogo.
* Uso sem login infantil, anúncios, telemetria ou chat remoto. Projetos e números de tentativas ficam no navegador, não são criptografados. Os dados podem desaparecer ao limpar o armazenamento.
* Interface responsiva, foco visível, botões de tamanho mínimo, ordenação por toque/teclado e opção de movimento reduzido pelo sistema.

## Limites
As atividades são modelos editáveis; não há banco completo de currículo, tutoria por modelo generativo, certificação kids, autenticação supervisionada, relatório entre dispositivos, controle de acesso a espaço de responsáveis nem garantia de desenvolvimento infantil. O painel de resumo local é acessível no mesmo aparelho e NÃO constitui supervisão autenticada.

## Segurança e implantação
Para uso por escolas ou publicação dirigida a crianças, realizar revisão de privacidade, acessibilidade, segurança e adequação pedagógica, com responsáveis autorizados. A demonstração não solicita informações identificadoras; ainda assim, o campo de título é livre, por isso orientar a evitar dados pessoais. Para comercialização verificar requisitos legais vigentes aplicáveis, inclusive LGPD e legislação de proteção digital de menores. Os textos jurídicos são minutas que precisam de revisão.

## Testes
Executar `node test-kids.cjs` (Node.js necessário **somente para testes**, não para utilizar o aplicativo). Confira também `QA.md`.


## Identidade visual V3.4
Logomarca oficial incorporada nos cabeçalhos das páginas, ícone derivado no ambiente profissional e favicon PNG. Mantenha logo-ia-estendida.png, icone-ia-estendida.png e favicon.png na mesma pasta dos arquivos HTML ao publicar.


## Atualização visual V3.5
Consulte IDENTIDADE-VISUAL.md. Logotipo, emblema e favicon substituídos pelo tema microchip/placa de circuito.


## Correção V3.6 — Logomarca no Android
As imagens estão incorporadas diretamente no HTML (data URI), inclusive em profissional.html. Kids.html também incorpora CSS e scripts para funcionar como página avulsa. Em Android, `content://` pode impedir navegação entre páginas separadas, mesmo com as imagens corrigidas. Para navegação completa, extraia o ZIP e use servidor estático HTTPS (ex.: GitHub Pages). Não abra o HTML isolado do ZIP esperando acesso a todas as páginas.
