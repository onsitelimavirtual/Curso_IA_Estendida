/* IAE V5.7 — Certificado fiel ao modelo premium. Dados reais apenas do Supabase. */
(function(global){'use strict';
const W=1491,H=1055,ART='certificado-arte-premium.png';
const imagePromise=new Promise((resolve,reject)=>{let i=new Image();i.onload=()=>resolve(i);i.onerror=()=>reject(new Error('Arte premium não carregou. Publique certificado-arte-premium.png na pasta do curso.'));i.src=ART;});
const NAVY='#0b2443';
function centered(ctx,str,cx,cy,max,fontSize,min=26){let s=fontSize;do{ctx.font='bold '+s+'px Georgia, "Times New Roman", serif';if(ctx.measureText(str).width<=max)break;s-=1;}while(s>min);ctx.fillText(str,cx,cy);}
function leftFit(ctx,str,x,y,max,size=18,min=12){let s=size;do{ctx.font='bold '+s+'px Georgia,"Times New Roman",serif';if(ctx.measureText(str).width<=max)break;s-=.5;}while(s>min);ctx.fillText(str,x,y);}
function canvasCertificate(data){
 const c=document.createElement('canvas');c.width=W;c.height=H;const ctx=c.getContext('2d',{alpha:false});
 const code=String(data.code||'').trim().toUpperCase(),name=String(data.full_name||'').trim(),emitter=String(data.issuer_name||'').trim(),signer=String(data.signer_name||'').trim();
 if(!code || !name || !emitter || !signer || !data.issued_at)throw new Error('Dados incompletos para certificado válido.');
 if(Number(data.hours)!==80)throw new Error('Carga horária incompatível com o certificado do curso.');
 return imagePromise.then(bg=>{
  ctx.drawImage(bg,0,0,W,H);ctx.fillStyle=NAVY;
  ctx.textAlign='center';ctx.textBaseline='alphabetic';
  centered(ctx,name,744,502,760,61,29);
  const dd=new Date(data.issued_at);if(Number.isNaN(+dd))throw new Error('Data de emissão inválida');
  const date=new Intl.DateTimeFormat('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric',timeZone:'America/Sao_Paulo'}).format(dd);
  ctx.strokeStyle='#a9792a';ctx.lineWidth=2.4;ctx.lineCap='round';ctx.lineJoin='round';
  function iconCalendar(x,y){ctx.strokeRect(x,y,30,28);ctx.beginPath();ctx.moveTo(x,y+9);ctx.lineTo(x+30,y+9);ctx.moveTo(x+7,y-4);ctx.lineTo(x+7,y+4);ctx.moveTo(x+22,y-4);ctx.lineTo(x+22,y+4);ctx.stroke();for(let r=0;r<2;r++)for(let c=0;c<3;c++)ctx.fillRect(x+5+c*8,y+13+r*8,3,3)}
  function iconDoc(x,y){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+20,y);ctx.lineTo(x+29,y+9);ctx.lineTo(x+29,y+33);ctx.lineTo(x,y+33);ctx.closePath();ctx.moveTo(x+20,y);ctx.lineTo(x+20,y+9);ctx.lineTo(x+29,y+9);ctx.moveTo(x+6,y+16);ctx.lineTo(x+23,y+16);ctx.moveTo(x+6,y+22);ctx.lineTo(x+23,y+22);ctx.stroke()}
  function iconUser(x,y){ctx.beginPath();ctx.arc(x+15,y+9,8,0,Math.PI*2);ctx.moveTo(x+2,y+34);ctx.lineTo(x+2,y+27);ctx.quadraticCurveTo(x+15,y+13,x+28,y+27);ctx.lineTo(x+28,y+34);ctx.closePath();ctx.stroke()}
  function iconShield(x,y){ctx.beginPath();ctx.moveTo(x+15,y);ctx.lineTo(x+29,y+5);ctx.lineTo(x+27,y+23);ctx.quadraticCurveTo(x+25,y+33,x+15,y+37);ctx.quadraticCurveTo(x+5,y+32,x+3,y+23);ctx.lineTo(x+1,y+5);ctx.closePath();ctx.moveTo(x+9,y+17);ctx.lineTo(x+14,y+23);ctx.lineTo(x+24,y+12);ctx.stroke()}
  iconCalendar(96,754);iconDoc(343,752);iconUser(641,752);iconShield(987,749);
  ctx.strokeStyle='#d0aa64';ctx.lineWidth=1.2;for(const x of [304,606,952]){ctx.beginPath();ctx.moveTo(x,747);ctx.lineTo(x,805);ctx.stroke()}
  ctx.textAlign='left';ctx.fillStyle='#634e34';ctx.font='16px Georgia,serif';
  ctx.fillText('Data de emissão',145,768);ctx.fillText('Emissor do certificado',394,768);
  ctx.fillText('Responsável pela emissão',699,768);ctx.fillText('Código de validação',1041,768);
  ctx.fillStyle=NAVY;leftFit(ctx,date,145,798,130,21,15);
  
  leftFit(ctx,emitter,394,798,180,18,12);leftFit(ctx,signer,699,798,234,18,11);
  leftFit(ctx,code,1041,798,340,15.9,11);
  // QR da URL de verificação: desenho no próprio certificado, sem serviço externo.
  const link=new URL('verificar-certificado.html',location.href);link.searchParams.set('codigo',code);
  const q=global.IAE_QR_MODEL(link.href),n=q.count;
  const px=1046,py=846,side=95,padding=3,step=(side-2*padding)/n;
  ctx.fillStyle='#fff';ctx.fillRect(1036,835,116,118);ctx.strokeStyle='#bc8d37';ctx.lineWidth=2;ctx.strokeRect(1041,838,107,109);ctx.fillStyle='#ffffff';ctx.fillRect(px,py,side,side);ctx.fillStyle='#07162b';
  for(let r=0;r<n;r++)for(let x=0;x<n;x++)if(q.dark(r,x))ctx.fillRect(px+padding+x*step,py+padding+r*step,step+.025,step+.025);
  return {canvas:c,url:link.href,code:code,alt:'Certificado de '+name+', emitido por '+emitter+', em '+date+', autenticação '+code};
 });
}
global.IAE_CERTIFICATE_RENDER=canvasCertificate;
})(window);
