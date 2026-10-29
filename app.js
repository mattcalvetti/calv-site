const $=s=>document.querySelector(s);
const SIGB=SIGNALS.map((s,i)=>({id:"sig"+i,sec:"Signal",title:s.title,body:s.why,why:"Read through the "+s.lens.toLowerCase()+" lens.",lens:s.lens,src:s.src,when:s.d,url:s.u,urlLab:"View the original ↗"}));
// boot
const lines=["Kernel: specialised, not general.","Loading board… "+BLOCKS.length+" blocks","Allocating threads… ok","Inference path: one opinion","Ready_"];
const bl=$("#bootlog"),RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
if(RM)bl.textContent=lines.join("\n")+"\n";else{let i=0;const t=setInterval(()=>{bl.textContent+=lines[i++]+"\n";if(i>=lines.length)clearInterval(t)},280);}
const eb=$("#enter");if(eb){eb.addEventListener("click",()=>unlock());setTimeout(()=>eb.focus(),50)}
document.addEventListener("keydown",e=>{if(!unlocked&&e.key==="Enter"){e.preventDefault();unlock()}});
let unlocked=false;
function unlock(){
 if(unlocked)return;
 unlocked=true;
 try{sessionStorage.setItem("calv-unlocked","1")}catch(e){}
 $("#boot")?.remove();$("#desk").hidden=false;
 render();restoreLocation();
}


// board
const DZ='<svg width="0" height="0" style="position:absolute"><defs><pattern id="dz" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="4" fill="#fff"/><rect width="1" height="1"/><rect x="2" y="2" width="1" height="1"/></pattern></defs></svg>';
// Native video: self-hosted MP4 in /video/ or a direct file URL. 1-bit poster + play button; plays in place, never links out.
function vplayer(v){const has=!!v.src;
 return `<div class="frame vp${has?' ready':''}" ${has?`data-src="${v.src}" role="button" tabindex="0" aria-label="Play ${v.t}"`:''}>${v.poster?`<img class="poster" src="${v.poster}" alt="">`:`<svg viewBox="0 0 160 90" preserveAspectRatio="none"><rect width="160" height="90" fill="url(#dz)"/></svg>`}<span class="play" aria-hidden="true"><svg viewBox="0 0 40 40" width="56" height="56"><rect x="1" y="1" width="38" height="38" rx="6" fill="#fff" stroke="#000" stroke-width="2"/><polygon points="15,11 15,29 29,20" fill="#000"/></svg></span><span class="fl">${has?"play":"video coming"}</span></div>`}
function playV(fr){const v=document.createElement("video");v.src=fr.dataset.src;v.controls=true;v.autoplay=true;v.playsInline=true;v.preload="metadata";fr.innerHTML="";fr.classList.add("playing");fr.removeAttribute("role");fr.append(v);v.play().catch(()=>{})}
document.addEventListener("click",e=>{const fr=e.target.closest(".vp.ready:not(.playing)");if(fr)playV(fr)});
document.addEventListener("keydown",e=>{const fr=e.target.closest&&e.target.closest(".vp.ready:not(.playing)");if(fr&&(e.key==="Enter"||e.key===" ")){e.preventDefault();playV(fr)}});
const card=b=>{const el=document.createElement("div");el.className="win blk";el.id="b-"+b.id;
 el.innerHTML=`<div class="tb"><span>${b.id}</span></div><div class="wb">${b.ph?'<span class="ph">PLACEHOLDER</span>':''}<h3>${b.title}</h3><div class="small">${b.body}</div><div class="why">↳ ${b.why}</div><div class="more">Tap for my read ▸</div></div>`;
 el.tabIndex=0;el.setAttribute("role","button");el.setAttribute("aria-label",b.title);el.onkeydown=e=>{if(e.target===el&&(e.key==="Enter"||e.key===" ")){e.preventDefault();open(b)}};el.onclick=e=>{if(!e.target.closest("a"))open(b)};el.onmouseenter=()=>focus(b.id,1);el.onmouseleave=()=>focus(b.id,0);return el};
function render(){const L=$("#colL"),R=$("#colR");
 BLOCKS.forEach(b=>{if(b.sec==="Things I'm interested in")L.append(card(b));else if(b.sec==="Things I've worked on")R.append(card(b));
});
 const vt=v=>`<div class="win wt vtile${v.spot?' spot':''}"><div class="tb"><span>${v.c}</span></div><div class="wb">${vplayer(v)}<div class="vt"><h3>${v.t}</h3><div class="vmeta">${v.c} · ${v.date}</div><div class="small v1">${v.d}</div>${(v.x||v.m||v.u)?`<details class="vmore"><summary>more</summary>${v.x?`<p class="small">${v.x}</p>`:''}<p class="small muted">${v.m?v.m+' on LinkedIn. ':''}${v.u?`<a href="${v.u}" target="_blank" rel="noopener">View on LinkedIn ↗</a>`:''}</p></details>`:''}<a href="#" class="small onb" data-board="videos">On the Board ▸</a></div></div></div>`;
 $("#gHeo").innerHTML=DZ+`<div class="spotw">${VIDEOS.filter(v=>v.spot).map(vt).join("")}</div>`;
 $("#gVid").innerHTML=`<div class="wgrid">${VIDEOS.filter(v=>!v.spot).map(vt).join("")}</div>`;
 $("#gSA").innerHTML=SA.map(s=>`<div class="win wt vtile satile"><div class="tb"><span>${s.c}</span></div><div class="wb"><div class="frame yt" data-yt="${s.yt}" role="button" tabindex="0" aria-label="Play ${s.t}"><img class="poster" src="https://i.ytimg.com/vi/${s.yt}/hqdefault.jpg" alt="" loading="lazy"><span class="play" aria-hidden="true"><svg viewBox="0 0 40 40" width="44" height="44"><rect x="1" y="1" width="38" height="38" rx="6" fill="#fff" stroke="#000" stroke-width="2"/><polygon points="15,11 15,29 29,20" fill="#000"/></svg></span></div><div class="vt"><h3>${s.c}</h3><div class="vmeta">${s.date} · ${s.v} views on YouTube${s.xv?` · ${s.xv} on <a href="${s.x}" target="_blank" rel="noopener">X</a>`:''}</div><div class="small v1">${s.t}</div></div></div></div>`).join("");
 $("#gPlat").innerHTML=`<div class="win plat"><div class="tb"><span>kindling.team</span></div><div class="wb"><a class="pimg" href="${PLATFORM.u}" target="_blank" rel="noopener"><img src="${PLATFORM.img}" alt="The Kindling product home screen" loading="lazy"></a><div class="ptx"><h3>The Kindling platform</h3><div class="vmeta">Kindling · launching soon</div><p class="small">${PLATFORM.line}</p><ol class="flow">${PLATFORM.flow.map(([k,v])=>`<li><b>${k}</b><span>${v}</span></li>`).join("")}</ol><p class="small plinks"><a href="${PLATFORM.u}" target="_blank" rel="noopener">Visit kindling.team ↗</a> · <a href="#" data-board="platform,harness,agentsw">On the Board ▸</a></p></div></div></div>`;
 $("#gProg").innerHTML=INPROG.map(p=>`<div class="win wt prog"><div class="tb"><span>${p.k}</span></div><div class="wb"><div class="phead">${p.logo?`<img class="plogo" src="${p.logo}" alt="${p.t.split(" ").pop()} logo">`:"<span></span>"}${p.raise?(p.rsrc?`<a class="praise" href="${p.rsrc}" target="_blank" rel="noopener">${p.raise}</a>`:`<span class="praise">${p.raise}</span>`):""}</div>${p.img?`<figure class="mood"><img src="${p.img}" alt="${p.t} moodboard" loading="lazy"><figcaption>${p.cap}</figcaption></figure>`:`<div class="frame blank"><span class="fl">in development</span></div>`}<h3>${p.t}</h3><div class="small">${p.d}</div></div></div>`).join("");

 draw();window.onresize=draw;
 const tl=$("#timeline");const MO={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};const pd=s=>{const m=/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\w* (\d{4})/.exec(s||"");return m?+m[2]*12+MO[m[1]]:null};
 const pend=SA.slice().sort((x,y)=>pd(y.date)-pd(x.date));const saRow=s=>{const r=document.createElement("div");r.className="tl tlsa";r.innerHTML=`<div class="yr">${s.date}</div><div class="ln"></div><div class="body"><div class="frame yt mini" data-yt="${s.yt}" role="button" tabindex="0" aria-label="Play ${s.t}"><img class="poster" src="https://i.ytimg.com/vi/${s.yt}/mqdefault.jpg" alt="" loading="lazy"><span class="play" aria-hidden="true"><svg viewBox="0 0 40 40" width="28" height="28"><rect x="1" y="1" width="38" height="38" rx="6" fill="#fff" stroke="#000" stroke-width="2"/><polygon points="15,11 15,29 29,20" fill="#000"/></svg></span></div><div><b>Sachin &amp; Adam · ${s.c}</b> <small>· episode</small><div class="small">${s.t}</div><div class="small muted">${s.v} views on YouTube. I was a sounding board alongside Tom.</div></div></div>`;tl.append(r)};
 TL.map(T).filter(Boolean).forEach(b=>{const bd=pd(b.when);if(bd!==null)while(pend.length&&pd(pend[0].date)>=bd)saRow(pend.shift());const r=document.createElement("div");r.className="tl";r.innerHTML=`<div class="yr">${b.when||""}</div><div class="ln"></div><div class="body"><b>${b.title}</b> <small>· ${b.sec}</small><div class="small">${b.why}</div><span class="op">open ▸</span></div>`;r.tabIndex=0;r.onkeydown=e=>{if(e.key==="Enter")open(b)};r.onclick=()=>open(b);tl.append(r)});pend.forEach(saRow);}
function draw(){if($("#board").hidden)return;const svg=$("#threads"),G=$("#cols").getBoundingClientRect();svg.innerHTML="";const NS="http://www.w3.org/2000/svg";
 THREADS.forEach(([f,t,lab])=>{const A=$("#b-"+f).getBoundingClientRect(),C=$("#b-"+t).getBoundingClientRect();
  const x1=A.right-G.left,y1=A.top+A.height/2-G.top,x2=C.left-G.left,y2=C.top+C.height/2-G.top,mx=(x1+x2)/2;
  const g=document.createElementNS(NS,"g");g.dataset.k=f+" "+t;
  g.innerHTML=`<path d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4 3"/><path class="hit" d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}" fill="none" stroke="transparent" stroke-width="12"/><circle cx="${x1}" cy="${y1}" r="4"/><rect x="${x2-6}" y="${y2-4}" width="8" height="8"/><g class="lab"><rect x="${mx-90}" y="${(y1+y2)/2-11}" width="180" height="20" fill="#fff" stroke="#000" stroke-width="1.5"/><text x="${mx}" y="${(y1+y2)/2+4}" text-anchor="middle">${lab}</text></g>`;
  g.onmouseenter=()=>g.classList.add("on");g.onmouseleave=()=>g.classList.remove("on");svg.append(g)})}
function focus(id,on){const rel=new Set([id]);THREADS.forEach(([f,t])=>{if(f===id)rel.add(t);if(t===id)rel.add(f)});
 document.querySelectorAll("#cols .blk").forEach(e=>e.classList.toggle("dim",on&&!rel.has(e.id.slice(2))));
 document.querySelectorAll("#threads > g").forEach(g=>{const hit=g.dataset.k.split(" ").includes(id);g.classList.toggle("on",on&&hit);g.classList.toggle("dimt",on&&!hit)})}
const T=id=>BLOCKS.find(y=>y.id===id)||SIGB.find(y=>y.id===id);
const KIND=b=>b.sec==="Signal"?"Signal":b.sec==="Things I'm interested in"?"Interested":b.sec==="Things I've worked on"?"Worked on":b.sec==="Path"?"Path":"Cosign";
function nbrs(b){const m=new Map();if(b.sec==="Signal"){if(LENS_CARD[b.lens])m.set(LENS_CARD[b.lens],b.lens+" lens");SIGB.filter(o=>o.lens===b.lens&&o.id!==b.id).forEach(o=>m.set(o.id,"same lens"));return [...m]}
 const l0=Object.keys(LENS_CARD).find(k=>LENS_CARD[k]===b.id);if(l0)SIGB.filter(o=>o.lens===l0).forEach(o=>m.set(o.id,l0+" lens"));THREADS.forEach(x=>{if(x[0]===b.id)m.set(x[1],x[2]);if(x[1]===b.id)m.set(x[0],x[2])});
 (b.links||[]).forEach(id=>{if(T(id)&&!m.has(id))m.set(id,"")});BLOCKS.forEach(o=>{if((o.links||[]).includes(b.id)&&!m.has(o.id))m.set(o.id,"")});return [...m]}
// One detail dialog; STACK keeps the related-content trail.
let STACK=[];const MAXW=5;
function content(b){const r=READS[b.id];
 const strip=nbrs(b).map(([id,lab])=>{const o=T(id);return `<a href="#" class="hop" data-hop="${id}"><span class="k">${KIND(o)}</span>${o.title}${lab?`<i>${lab}</i>`:''}</a>`}).join("");
 return `${b.lens?`<span class="lens">${b.lens} lens</span>`:''}${b.ph?'<span class="ph">PLACEHOLDER</span>':''}<div class="bd">${b.body}</div>
 ${r?`<div class="read"><div class="rl">Matt's read</div><p>${r.t}</p></div>`:''}
 <p class="why">↳ ${b.why}</p>${b.ev&&b.ev.length?`<div class="ev"><div class="rl">Evidence</div>${b.ev.map(([l,u])=>`<a href="${u}" target="_blank" rel="noopener">${l}</a>`).join("")}</div>`:''}${b.embed?`<div class="embed win"><div class="tb"><span>linkedin.com · Matt C.</span></div><div class="wb small"><p>“Dialled concept for a couple of reasons: 1. Co-signs are pretty scattered &amp; require baseline follower hygiene/knowing what to look for… 2. Question count introduces scarcity… 3. Second order effect, gives the folk at a16z the ability to see who’s got their talent spotting eye in/tastemaker sense.”</p><p class="muted">Reposting the a16z Cosign launch · Aug 2026</p></div></div>`:''}
 ${b.imgs&&b.imgs.length?`<div class="photos">${b.imgs.map(u=>`<figure class="pf"><img src="${u}" alt="${b.title}" loading="lazy"></figure>`).join("")}</div>${b.imgCap?`<p class="small muted">${b.imgCap}</p>`:''}`:''}

 ${b.art?`<p><a class="artl" href="article.html">Read my article, Trust’s Biggest Accelerant ▸</a></p>`:''}${b.url?`<p><a href="${b.url}" ${b.url.startsWith("?")||!/^http/.test(b.url)?'':'target="_blank" rel="noopener"'}>${b.urlLab||"Open original ↗"}</a></p>`:''}
 ${strip?`<div class="conn"><div class="rl">Connected to · explore another card</div><div class="strip">${strip}</div></div>`:''}
 ${b.when?`<p class="small muted">When: ${b.when}</p>`:""}`}
function open(b,hop){if(!b)return;
 if(!hop)STACK=[b.id];else{const k=STACK.indexOf(b.id);if(k>=0)STACK=STACK.slice(0,k+1);else STACK.push(b.id);if(STACK.length>MAXW)STACK=STACK.slice(-MAXW)}
 renderStack()}
function renderStack(){
 const st=$("#stack");
 if(!STACK.length){if(st.open)st.close();st.innerHTML="";return}
 const n=STACK.length,b=T(STACK[n-1]);
 st.innerHTML=`<div class="win swin"><div class="tb"><button type="button" class="cb" data-pop="0" aria-label="Close details"></button><span id="detail-title">${b.title}</span></div>
 <div class="wb">${n>1?`<button type="button" class="back txtbtn" data-pop="${n-1}">◂ Back to ${T(STACK[n-2]).title}</button><nav class="crumb" aria-label="Related cards">${STACK.map((id,i)=>i<n-1?`<a href="#" data-to="${i}">${T(id).title}</a>`:`<b>${T(id).title}</b>`).join(" ▸ ")}</nav>`:''}${content(b)}</div></div>`;
 if(!st.open)st.showModal();
 st.querySelector(".cb").focus();
}
function pop(i){STACK=STACK.slice(0,i);renderStack()}
$("#stack").addEventListener("cancel",()=>{STACK=[]});
$("#stack").addEventListener("click",e=>{if(e.target===$("#stack"))pop(0)});
document.addEventListener("click",e=>{
 const control=e.target.closest("[data-pop],[data-to],[data-open],[data-hop],[data-go],[data-act]");
 if(!control)return;
 const d=control.dataset;
 if(d.go||d.act){
  if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  e.preventDefault();go(d.go||d.act, {anchor:d.anchor||""});return;
 }
 if(d.pop!==undefined){e.preventDefault();pop(+d.pop);return}
 if(d.to!==undefined){e.preventDefault();STACK=STACK.slice(0,+d.to+1);renderStack();return}
 if(d.hop){e.preventDefault();open(T(d.hop),true);return}
 if(d.open&&!e.target.closest("a[href]:not([href='#'])")){e.preventDefault();open(T(d.open))}
});
// thesis (v11)
{const th=$("#about .belief");if(th)th.textContent=THESES[THESIS_PICK]}
// beyond work
$("#gBeyond").innerHTML=BEYOND.map(g=>`<div class="win bw"><div class="tb"><span>${g.h}</span></div><div class="wb">${g.note?`<p class="small note">${g.note}</p>`:''}<ul>${g.items.map(x=>x.sub?`<li class="sub">${x.sub}</li>`:`<li>${x.u?`<a href="${x.u}" target="_blank" rel="noopener">${x.t}</a>`:`<b>${x.t}</b>`}${x.a?` <span class="muted">· ${x.a}</span>`:''}${x.chk?' <span class="dr">[check]</span>':''}</li>`).join("")}</ul></div></div>`).join("");
// embeds: hide static fallback once the LinkedIn iframe loads; X blockquote is its own fallback
document.querySelectorAll("iframe.li").forEach(f=>f.addEventListener("load",()=>{const fb=document.getElementById(f.dataset.fb);if(fb)fb.classList.add("hid")}));
setTimeout(()=>document.querySelectorAll("iframe.li").forEach(f=>{const fb=document.getElementById(f.dataset.fb);if(fb&&!fb.classList.contains("hid")){f.remove()}}),8000);
// signals
function sigCard(s){return `<div class="win blk sig" id="s-${s.id}" data-open="${s.id}" role="button" tabindex="0"><div class="tb"><span>${s.src}</span></div><div class="wb"><span class="lens">${s.lens} lens</span><h3>${s.title}</h3><div class="small">${s.body}</div><div class="small muted sd">${s.when}</div><div class="more">Open ▸</div></div></div>`}
$("#gSig").innerHTML=SIGB.map(sigCard).join("");
document.addEventListener("keydown",e=>{const c=e.target.closest&&e.target.closest(".sig[data-open]");if(c&&e.key==="Enter"){e.preventDefault();open(T(c.dataset.open))}});
let remembered=false;
try{remembered=sessionStorage.getItem("calv-unlocked")==="1"}catch(e){}
if(location.hash.startsWith("#open")||remembered)unlock();

// v20: cross-link to the Board. Switch view, scroll to the card(s), pulse them and their threads.
function showOnBoard(ids){ids=[].concat(ids);STACK=[];renderStack();go("board");
 setTimeout(()=>{const el=$("#b-"+ids[0]);if(!el)return;draw();el.scrollIntoView({behavior:RM?"instant":"smooth",block:"center"});
  ids.forEach(id=>{const c=$("#b-"+id);if(c)c.classList.add("pulse")});focus(ids[0],1);
  setTimeout(()=>{ids.forEach(id=>{const c=$("#b-"+id);if(c)c.classList.remove("pulse")});focus(ids[0],0)},2600)},60)}
document.addEventListener("click",e=>{const l=e.target.closest("[data-board]");if(l){e.preventDefault();e.stopPropagation();showOnBoard(l.dataset.board.split(","))}},true);

function playYT(fr){const f=document.createElement("iframe");f.src="https://www.youtube-nocookie.com/embed/"+fr.dataset.yt+"?autoplay=1&rel=0";f.allow="autoplay; encrypted-media; picture-in-picture; fullscreen";f.allowFullscreen=true;f.title="YouTube video";fr.innerHTML="";fr.classList.add("playing");fr.append(f)}
document.addEventListener("click",e=>{const fr=e.target.closest(".frame.yt:not(.playing)");if(fr)playYT(fr)});
document.addEventListener("keydown",e=>{const fr=e.target.closest&&e.target.closest(".frame.yt:not(.playing)");if(fr&&(e.key==="Enter"||e.key===" ")){e.preventDefault();playYT(fr)}});
