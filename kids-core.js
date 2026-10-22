'use strict';
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.KidsCore=api;})(typeof globalThis!=='undefined'?globalThis:this,()=>{
const types=['quiz','pairs','sequence','robot'];const ages=[7,9,11];const topics=['math','port','science','logic'];
const examples={
 quiz:{type:'quiz',title:'Quanto é 3 + 4?',options:['6','7','9'],answer:1,explain:'Conte 3 objetos e depois mais 4: são 7.'},
 pairs:{type:'pairs',title:'Combine cada palavra com seu par',pairs:[['Cachorro','Animal'],['Rosa','Flor'],['Azul','Cor']]},
 sequence:{type:'sequence',title:'Coloque os passos na ordem',items:['Abrir o caderno','Escrever a atividade','Conferir a resposta']},
 robot:{type:'robot',title:'Leve o robozinho até a estrela',size:4,start:[0,0],goal:[2,1],walls:[[1,1]],commands:['direita','direita','baixo']}
};
function clean(s,n){return typeof s==='string'?s.trim().slice(0,n):''}
function unique(items){return new Set(items).size===items.length}
function validGame(g){if(!g||typeof g!=='object'||!types.includes(g.type)||clean(g.title,100).length<4||g.title.length>100)return false;
 if(g.type==='quiz')return Array.isArray(g.options)&&g.options.length===3&&g.options.every(x=>clean(x,65).length>0&&x.length<=65)&&unique(g.options)&&Number.isInteger(g.answer)&&g.answer>=0&&g.answer<3&&typeof g.explain==='string'&&g.explain.length<=180;
 if(g.type==='pairs')return Array.isArray(g.pairs)&&g.pairs.length>=2&&g.pairs.length<=5&&g.pairs.every(x=>Array.isArray(x)&&x.length===2&&x.every(y=>clean(y,42).length>0&&y.length<=42))&&unique(g.pairs.map(x=>x[0]))&&unique(g.pairs.map(x=>x[1]));
 if(g.type==='sequence')return Array.isArray(g.items)&&g.items.length>=3&&g.items.length<=6&&g.items.every(x=>clean(x,65).length>0&&x.length<=65)&&unique(g.items);
 if(g.type==='robot')return g.size===4&&Array.isArray(g.start)&&Array.isArray(g.goal)&&Array.isArray(g.walls)&&Array.isArray(g.commands)&&g.commands.length<=20&&g.commands.every(x=>['cima','baixo','esquerda','direita'].includes(x))&&[g.start,g.goal,...g.walls].every(p=>Array.isArray(p)&&p.length===2&&p.every(v=>Number.isInteger(v)&&v>=0&&v<4))&&unique([g.start,g.goal,...g.walls].map(x=>x.join(',')));
 return false;}
function validProject(p){return !!p&&typeof p==='object'&&ages.includes(p.age)&&topics.includes(p.topic)&&typeof p.title==='string'&&p.title.length<=55&&p.title.trim().length>0&&Array.isArray(p.games)&&p.games.length<=16&&p.games.every(validGame)}
function simulateRobot(game,commands){let [x,y]=game.start;const trace=[[x,y]];for(const c of commands){let nx=x+(c==='direita'?1:c==='esquerda'?-1:0),ny=y+(c==='baixo'?1:c==='cima'?-1:0);if(nx<0||ny<0||nx>=4||ny>=4)return {success:false,reason:'A saída ficou fora do tabuleiro.',trace};if(game.walls.some(w=>w[0]===nx&&w[1]===ny))return {success:false,reason:'O robô encontrou um obstáculo.',trace};x=nx;y=ny;trace.push([x,y]);}return {success:x===game.goal[0]&&y===game.goal[1],reason:x===game.goal[0]&&y===game.goal[1]?'Muito bem! Você criou um caminho.':'O robô ainda não chegou à estrela.',trace};}
function scoreSequence(answer,correct){return answer.length===correct.length&&answer.every((x,i)=>x===correct[i]);}
function scorePairs(answer,pairs){return pairs.length===Object.keys(answer).length&&pairs.every((p,i)=>answer[i]===p[1]);}
return {examples,validGame,validProject,simulateRobot,scorePairs,scoreSequence,clean};});
