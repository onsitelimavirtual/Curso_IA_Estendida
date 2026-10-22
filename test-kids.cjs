const assert=require('node:assert/strict');const C=require('./kids-core.js');
let n=0;function test(name,fn){fn();n++;console.log('OK',name)}
test('quatro modelos válidos',()=>Object.values(C.examples).forEach(g=>assert.equal(C.validGame(g),true)));
test('duplicidade no quiz rejeitada',()=>assert.equal(C.validGame({...C.examples.quiz,options:['a','a','b']}),false));
test('resposta fora do índice rejeitada',()=>assert.equal(C.validGame({...C.examples.quiz,answer:7}),false));
test('pares duplicados rejeitados',()=>assert.equal(C.validGame({...C.examples.pairs,pairs:[['a','b'],['a','c']]}),false));
test('sequência duplicada rejeitada',()=>assert.equal(C.validGame({...C.examples.sequence,items:['a','a','b']}),false));
test('ordenação correta e incorreta',()=>{assert.equal(C.scoreSequence(['a','b'],['a','b']),true);assert.equal(C.scoreSequence(['b','a'],['a','b']),false)});
test('pares corretos e incorretos',()=>{assert.equal(C.scorePairs({0:'B',1:'D'},[['A','B'],['C','D']]),true);assert.equal(C.scorePairs({0:'D',1:'B'},[['A','B'],['C','D']]),false)});
test('robô chega à estrela',()=>assert.equal(C.simulateRobot(C.examples.robot,['direita','direita','baixo']).success,true));
test('robô é bloqueado por obstáculo',()=>assert.match(C.simulateRobot(C.examples.robot,['direita','baixo']).reason,/obstáculo/));
test('robô não sai do tabuleiro',()=>assert.match(C.simulateRobot(C.examples.robot,['esquerda']).reason,/fora/));
test('caminho inconclusivo não é acerto',()=>assert.equal(C.simulateRobot(C.examples.robot,['direita']).success,false));
test('importação rejeita faixa etária inválida',()=>assert.equal(C.validProject({title:'Teste',age:4,topic:'math',games:[]}),false));
test('importação rejeita jogos inválidos',()=>assert.equal(C.validProject({title:'Teste',age:7,topic:'math',games:[{type:'script',title:'código'}]}),false));
test('importação aceita projeto legítimo',()=>assert.equal(C.validProject({title:'Meu jogo',age:9,topic:'math',games:[C.examples.quiz]}),true));
test('limite de 16 atividades',()=>assert.equal(C.validProject({title:'Meu jogo',age:9,topic:'math',games:Array(17).fill(C.examples.quiz)}),false));
console.log(`RESULTADO ${n}/${n}`);
