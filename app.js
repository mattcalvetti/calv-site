const $=s=>document.querySelector(s);
// boot
const lines=["Kernel: specialised, not general.","Loading board… "+BLOCKS.length+" blocks","Allocating threads… ok","Inference path: one opinion","Awaiting authorised fingerprint_"];
let i=0;const bl=$("#bootlog");const t=setInterval(()=>{bl.textContent+=lines[i++]+"\n";if(i>=lines.length)clearInterval(t)},280);
let hold=0,ht;const f=$("#finger"),ring=$("#ring");
const start=e=>{e.preventDefault();ht=setInterval(()=>{hold+=4;ring.style.clipPath=`inset(${100-hold}% 0 0 0)`;if(hold>=100){clearInterval(ht);unlock()}},30)};
const stop=()=>{clearInterval(ht);if(hold<100){hold=0;ring.style.clipPath="inset(100% 0 0 0)"}};
f.addEventListener("pointerdown",start);["pointerup","pointerleave"].forEach(ev=>f.addEventListener(ev,stop));
function unlock(){/* TODO: replace with passkey (Clerk/Supabase) check against allowlisted emails */$("#boot").remove();$("#desk").hidden=false;render();}

// board
const card=b=>{const el=document.createElement("div");el.className="win blk";el.id="b-"+b.id;
 el.innerHTML=`<div class="tb"><i class="cb"></i><span>${b.id}</span></div><div class="wb">${b.ph?'<span class="ph">PLACEHOLDER</span>':''}<h3>${b.title}</h3><div class="small">${b.body}</div><div class="why">↳ ${b.why}</div><div class="more">Tap for my read ▸</div></div>`;
 el.onclick=()=>open(b);el.onmouseenter=()=>focus(b.id,1);el.onmouseleave=()=>focus(b.id,0);return el};
function render(){const L=$("#colL"),R=$("#colR");
 BLOCKS.forEach(b=>{if(b.sec==="Things I'm interested in")L.append(card(b));else if(b.sec==="Things I've worked on")R.append(card(b));
  else if(b.sec!=="Path")$("#gCos").append(card(b))});
 draw();window.onresize=draw;
 const tl=$("#timeline");TL.map(T).filter(Boolean).forEach(b=>{const r=document.createElement("div");r.className="tl";r.innerHTML=`<div class="yr">${b.when||""}</div><div class="ln"></div><div class="body"><b>${b.title}</b> <small>· ${b.sec}</small><div class="small">${b.why}</div></div>`;r.onclick=()=>open(b);tl.append(r)});}
function draw(){const svg=$("#threads"),G=$("#cols").getBoundingClientRect();svg.innerHTML="";const NS="http://www.w3.org/2000/svg";
 THREADS.forEach(([f,t,lab])=>{const A=$("#b-"+f).getBoundingClientRect(),C=$("#b-"+t).getBoundingClientRect();
  const x1=A.right-G.left,y1=A.top+A.height/2-G.top,x2=C.left-G.left,y2=C.top+C.height/2-G.top,mx=(x1+x2)/2;
  const g=document.createElementNS(NS,"g");g.dataset.k=f+" "+t;
  g.innerHTML=`<path d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="4 3"/><path class="hit" d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}" fill="none" stroke="transparent" stroke-width="12"/><circle cx="${x1}" cy="${y1}" r="4"/><rect x="${x2-6}" y="${y2-4}" width="8" height="8"/><g class="lab"><rect x="${mx-90}" y="${(y1+y2)/2-11}" width="180" height="20" fill="#fff" stroke="#000" stroke-width="1.5"/><text x="${mx}" y="${(y1+y2)/2+4}" text-anchor="middle">${lab}</text></g>`;
  g.onmouseenter=()=>g.classList.add("on");g.onmouseleave=()=>g.classList.remove("on");svg.append(g)})}
function focus(id,on){const rel=new Set([id]);THREADS.forEach(([f,t])=>{if(f===id)rel.add(t);if(t===id)rel.add(f)});
 document.querySelectorAll("#cols .blk").forEach(e=>e.classList.toggle("dim",on&&!rel.has(e.id.slice(2))));
 document.querySelectorAll("#threads > g").forEach(g=>{const hit=g.dataset.k.split(" ").includes(id);g.classList.toggle("on",on&&hit);g.classList.toggle("dimt",on&&!hit)})}
const T=id=>BLOCKS.find(y=>y.id===id);
let PATH=[];
const KIND=b=>b.sec==="Things I'm interested in"?"Interested":b.sec==="Things I've worked on"?"Worked on":b.sec==="Path"?"Path":"Cosign";
function nbrs(b){const m=new Map();THREADS.forEach(x=>{if(x[0]===b.id)m.set(x[1],x[2]);if(x[1]===b.id)m.set(x[0],x[2])});
 (b.links||[]).forEach(id=>{if(T(id)&&!m.has(id))m.set(id,"")});BLOCKS.forEach(o=>{if((o.links||[]).includes(b.id)&&!m.has(o.id))m.set(o.id,"")});return [...m]}
function open(b,hop){if(!b)return;if(!hop)PATH=[];const k=PATH.indexOf(b.id);if(k>=0)PATH=PATH.slice(0,k+1);else PATH.push(b.id);if(PATH.length>6)PATH=PATH.slice(-6);
 $("#dt").textContent=b.title;const r=READS[b.id];
 const crumb=PATH.length>1?`<div class="crumb">${PATH.map((id,i)=>i<PATH.length-1?`<a href="#" data-hop="${id}">${T(id).title}</a>`:`<b>${T(id).title}</b>`).join(" → ")}</div>`:'';
 const strip=nbrs(b).map(([id,lab])=>{const o=T(id);return `<a href="#" class="hop" data-hop="${id}"><span class="k">${KIND(o)}</span>${o.title}${lab?`<i>${lab}</i>`:''}</a>`}).join("");
 $("#db").innerHTML=`${crumb}${b.ph?'<span class="ph">PLACEHOLDER</span>':''}<div class="bd">${b.body}</div>
 ${r?`<div class="read"><div class="rl">Matt's read</div><p>${r.t}</p></div>`:''}
 <p class="why">↳ ${b.why}</p>${b.embed?`<div class="embed win"><div class="tb"><span>linkedin.com · Matt C.</span></div><div class="wb small"><p>“Dialled concept for a couple of reasons: 1. Co-signs are pretty scattered &amp; require baseline follower hygiene/knowing what to look for… 2. Question count introduces scarcity… 3. Second order effect, gives the folk at a16z the ability to see who’s got their talent spotting eye in/tastemaker sense.”</p><p class="muted">Reposting the a16z Cosign launch · Aug 2026</p></div></div>`:''}
 ${b.imgs&&b.imgs.length?`<div class="imgslot">${b.imgs.length?b.imgs.map(u=>`<img src="${u}">`).join(""):''}</div>`:''}
 ${b.url?`<p><a href="${b.url}" ${b.url.startsWith("?")?'':'target="_blank" rel="noopener"'}>${b.urlLab||"Open original ↗"}</a></p>`:''}
 ${strip?`<div class="conn"><div class="rl">Connected to</div><div class="strip">${strip}</div></div>`:''}
 ${b.when?`<p class="small muted">When: ${b.when}</p>`:""}`;show("#detail");$("#detail").scrollTop=0;
 document.querySelectorAll(".blk").forEach(e=>e.classList.toggle("hi",e.id==="b-"+b.id))}
function show(s){document.querySelectorAll(".modal").forEach(m=>m.hidden=true);$(s).hidden=false}
document.addEventListener("click",e=>{const d=e.target.dataset;
 if(d.close!==undefined)e.target.closest(".modal").hidden=true;
 if(d.open){e.preventDefault();open(T(d.open))}
 if(d.hop){e.preventDefault();open(T(d.hop),1)}
 if(d.go){go(d.go);closeMenus()}
 if(d.act==="about"){show("#about");closeMenus()}
 const mt=e.target.closest(".mt");if(mt){const m=mt.parentElement,was=m.classList.contains("open");closeMenus();if(!was)m.classList.add("open")}
 else if(!e.target.closest(".dd"))closeMenus()});
const closeMenus=()=>document.querySelectorAll(".menu").forEach(m=>m.classList.remove("open"));
const VIEWS=["board","timeline","signals"];
function go(v){let drawer=null;if(v==="read")drawer="#dBeyond",v="board";if(v==="cos")drawer="#cosTop",v="board";if(v==="beyond")drawer="#dBeyond",v="board";
 VIEWS.forEach(x=>$("#"+x).hidden=x!==v);$(".thesis").hidden=v!=="board";$("#cosTop").hidden=v!=="board";
 document.querySelectorAll(".vw").forEach(s=>s.classList.toggle("on",s.dataset.go===v));
 if(v==="board")draw();if(drawer)setTimeout(()=>{const d=$(drawer);if(d.tagName==="DETAILS")d.open=true;d.scrollIntoView({behavior:"smooth"})},30)}
let ti=0;$("#cycle").onclick=e=>{e.preventDefault();ti=(ti+1)%THESES.length;$("#thesis").textContent=THESES[ti];e.target.textContent=`other options (${ti+1}/${THESES.length})`};
// beyond work
$("#gBeyond").innerHTML=BEYOND.map(g=>`<div class="win bw"><div class="tb"><span>${g.h}</span></div><div class="wb">${g.note?`<p class="small note">${g.note}</p>`:''}<ul>${g.items.map(x=>x.sub?`<li class="sub">${x.sub}</li>`:`<li>${x.u?`<a href="${x.u}" target="_blank" rel="noopener">${x.t}</a>`:`<b>${x.t}</b>`}${x.a?` <span class="muted">· ${x.a}</span>`:''}${x.chk?' <span class="dr">[check]</span>':''}</li>`).join("")}</ul></div></div>`).join("");
// embeds: hide static fallback once the LinkedIn iframe loads; X blockquote is its own fallback
document.querySelectorAll("iframe.li").forEach(f=>f.addEventListener("load",()=>{const fb=document.getElementById(f.dataset.fb);if(fb)fb.classList.add("hid")}));
setTimeout(()=>document.querySelectorAll("iframe.li").forEach(f=>{const fb=document.getElementById(f.dataset.fb);if(fb&&!fb.classList.contains("hid")){f.remove()}}),8000);
// signals
SIGNALS.forEach(s=>{const el=document.createElement("div");el.className="win blk";el.innerHTML=`<div class="tb"><span>${s.src}</span></div><div class="wb"><span class="ph">PLACEHOLDER</span><h3>${s.title.replace("[PLACEHOLDER] ","")}</h3><div class="small">${s.why}</div></div>`;$("#gSig").append(el)});
if(location.hash.startsWith("#open"))unlock();
const q=new URLSearchParams(location.search);if(q.get("about"))setTimeout(()=>show("#about"),80);if(q.get("v"))setTimeout(()=>go(q.get("v")),50);if(q.get("card"))setTimeout(()=>{q.get("card").split(",").forEach((c,i)=>open(T(c),i>0))},80);if(q.get("menu"))setTimeout(()=>$("#m"+q.get("menu")).classList.add("open"),80);
