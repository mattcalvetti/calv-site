const $=s=>document.querySelector(s);
const SIGB=SIGNALS.map((s,i)=>({id:"sig"+i,sec:"Signal",title:s.title,body:s.why,why:"Read through the "+s.lens.toLowerCase()+" lens.",lens:s.lens,src:s.src,when:s.d,url:s.u,urlLab:"View the original ↗"}));
// boot
const lines=["Kernel: specialised, not general.","Loading board… "+BLOCKS.length+" blocks","Allocating threads… ok","Inference path: one opinion","Ready_"];
const bl=$("#bootlog"),RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
if(RM)bl.textContent=lines.join("\n")+"\n";else{let i=0;const t=setInterval(()=>{bl.textContent+=lines[i++]+"\n";if(i>=lines.length)clearInterval(t)},280);}
// v12: passkey gate is PARKED (not wired up). Landing shows a plain Enter button. Kept for a future hosted-auth swap; see README.
// Unlock gate. NOTE: this is a LOCAL-DEVICE gate, NOT access control. There is no server,
// so the WebAuthn assertion is never verified and anyone can bypass it ("Enter without passkey").
// Real approved-email gating needs a hosted auth service (e.g. Clerk / Supabase / Auth0).
const KEY="calv-passkey-id";let ring={style:{}},nopk={},fmsg={};
const rnd=n=>crypto.getRandomValues(new Uint8Array(n));
const b64=u=>btoa(String.fromCharCode(...new Uint8Array(u))),unb64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
const fallback=m=>{fmsg.textContent=m||"";nopk.hidden=false};
let busy=false;
async function passkey(){
 if(busy)return;busy=true;ring.style.clipPath="inset(0 0 0 0)";
 try{
  if(!window.PublicKeyCredential||!(await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()))return fallback("No Touch ID on this device.");
  const id=localStorage.getItem(KEY);
  if(id){
   await navigator.credentials.get({publicKey:{challenge:rnd(32),rpId:location.hostname,userVerification:"required",timeout:60000,allowCredentials:[{type:"public-key",id:unb64(id)}]}});
  }else{
   const c=await navigator.credentials.create({publicKey:{challenge:rnd(32),rp:{name:"Calv",id:location.hostname},
    user:{id:rnd(16),name:"visitor",displayName:"Visitor"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],
    authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:60000,attestation:"none"}});
   localStorage.setItem(KEY,b64(c.rawId));
  }
  unlock();
 }catch(e){fallback(e&&e.name==="NotAllowedError"?"Cancelled.":"Couldn't use a passkey.")}
 finally{busy=false;ring.style.clipPath="inset(100% 0 0 0)"}
}
const eb=$("#enter");if(eb){eb.addEventListener("click",()=>unlock());setTimeout(()=>eb.focus(),50)}
document.addEventListener("keydown",e=>{if(!unlocked&&e.key==="Enter"){e.preventDefault();unlock()}});
let unlocked=false;
function unlock(){/* local gate only; see note above */if(unlocked)return;unlocked=true;try{sessionStorage.setItem("calv-unlocked","1")}catch(e){}const bt=$("#boot");if(bt)bt.remove();$("#desk").hidden=false;render();}

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
 el.onclick=()=>open(b);el.onmouseenter=()=>focus(b.id,1);el.onmouseleave=()=>focus(b.id,0);return el};
function render(){const L=$("#colL"),R=$("#colR");
 BLOCKS.forEach(b=>{if(b.sec==="Things I'm interested in")L.append(card(b));else if(b.sec==="Things I've worked on")R.append(card(b));
});
 const vt=v=>`<div class="win wt vtile${v.spot?' spot':''}"><div class="tb"><span>${v.c}</span></div><div class="wb">${vplayer(v)}<div class="vt"><h3>${v.t}</h3><div class="vmeta">${v.c} · ${v.date}</div><div class="small v1">${v.d}</div>${(v.x||v.m||v.u)?`<details class="vmore"><summary>more</summary>${v.x?`<p class="small">${v.x}</p>`:''}<p class="small muted">${v.m?v.m+' on LinkedIn. ':''}${v.u?`<a href="${v.u}" target="_blank" rel="noopener">View on LinkedIn ↗</a>`:''}</p></details>`:''}<a href="#" class="small onb" data-board="videos">On the Board ▸</a></div></div></div>`;
 $("#gVid").innerHTML=DZ+`<div class="spotw">${VIDEOS.filter(v=>v.spot).map(vt).join("")}</div><div class="wgrid">${VIDEOS.filter(v=>!v.spot).map(vt).join("")}</div>`;
 $("#gPlat").innerHTML=`<div class="win plat"><div class="tb"><span>kindling.team</span></div><div class="wb"><a class="pimg" href="${PLATFORM.u}" target="_blank" rel="noopener"><img src="${PLATFORM.img}" alt="The Kindling product home screen" loading="lazy"></a><div class="ptx"><h3>The Kindling platform</h3><div class="vmeta">Kindling · launching 2026</div><p class="small">${PLATFORM.line}</p><ol class="flow">${PLATFORM.flow.map(([k,v])=>`<li><b>${k}</b><span>${v}</span></li>`).join("")}</ol><p class="small plinks"><a href="${PLATFORM.u}" target="_blank" rel="noopener">Visit kindling.team ↗</a> · <a href="#" data-board="platform,harness,agentsw">On the Board ▸</a></p></div></div></div>`;
 $("#gProg").innerHTML=INPROG.map(p=>`<div class="win wt prog"><div class="tb"><span>${p.k}</span></div><div class="wb">${p.img?`<figure class="mood"><img src="${p.img}" alt="${p.t} moodboard" loading="lazy"><figcaption>${p.cap}</figcaption></figure>`:`<div class="frame blank"><span class="fl">in development</span></div>`}<h3>${p.t}</h3><div class="small">${p.d}</div></div></div>`).join("");

 draw();window.onresize=draw;
 const tl=$("#timeline");TL.map(T).filter(Boolean).forEach(b=>{const r=document.createElement("div");r.className="tl";r.innerHTML=`<div class="yr">${b.when||""}</div><div class="ln"></div><div class="body"><b>${b.title}</b> <small>· ${b.sec}</small><div class="small">${b.why}</div><span class="op">open ▸</span></div>`;r.tabIndex=0;r.onkeydown=e=>{if(e.key==="Enter")open(b)};r.onclick=()=>open(b);tl.append(r)});}
function draw(){const svg=$("#threads"),G=$("#cols").getBoundingClientRect();svg.innerHTML="";const NS="http://www.w3.org/2000/svg";
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
// v11: stacked windows. "Connected to" opens a NEW window cascaded on top (classic Mac). Max 5; oldest closes.
let STACK=[];const MAXW=5;
function content(b){const r=READS[b.id];
 const strip=nbrs(b).map(([id,lab])=>{const o=T(id);return `<a href="#" class="hop" data-hop="${id}"><span class="k">${KIND(o)}</span>${o.title}${lab?`<i>${lab}</i>`:''}</a>`}).join("");
 return `${b.lens?`<span class="lens">${b.lens} lens</span>`:''}${b.ph?'<span class="ph">PLACEHOLDER</span>':''}<div class="bd">${b.body}</div>
 ${r?`<div class="read"><div class="rl">Matt's read</div><p>${r.t}</p></div>`:''}
 <p class="why">↳ ${b.why}</p>${b.ev&&b.ev.length?`<div class="ev"><div class="rl">Evidence</div>${b.ev.map(([l,u])=>`<a href="${u}" target="_blank" rel="noopener">${l}</a>`).join("")}</div>`:''}${b.embed?`<div class="embed win"><div class="tb"><span>linkedin.com · Matt C.</span></div><div class="wb small"><p>“Dialled concept for a couple of reasons: 1. Co-signs are pretty scattered &amp; require baseline follower hygiene/knowing what to look for… 2. Question count introduces scarcity… 3. Second order effect, gives the folk at a16z the ability to see who’s got their talent spotting eye in/tastemaker sense.”</p><p class="muted">Reposting the a16z Cosign launch · Aug 2026</p></div></div>`:''}
 ${b.imgs&&b.imgs.length?`<div class="photos">${b.imgs.map(u=>`<figure class="pf"><img src="${u}" alt="${b.title}" loading="lazy"></figure>`).join("")}</div>${b.imgCap?`<p class="small muted">${b.imgCap}</p>`:''}`:''}

 ${b.art?`<p><a class="artl" href="article.html">Read my article, Trust’s Biggest Accelerant ▸</a></p>`:''}${b.url?`<p><a href="${b.url}" ${b.url.startsWith("?")||!/^http/.test(b.url)?'':'target="_blank" rel="noopener"'}>${b.urlLab||"Open original ↗"}</a></p>`:''}
 ${strip?`<div class="conn"><div class="rl">Connected to · opens a new window</div><div class="strip">${strip}</div></div>`:''}
 ${b.when?`<p class="small muted">When: ${b.when}</p>`:""}`}
function open(b,hop){if(!b)return;
 if(!hop)STACK=[b.id];else{const k=STACK.indexOf(b.id);if(k>=0)STACK=STACK.slice(0,k+1);else STACK.push(b.id);if(STACK.length>MAXW)STACK=STACK.slice(-MAXW)}
 renderStack()}
function renderStack(){const st=$("#stack");document.querySelectorAll(".modal").forEach(m=>m.hidden=true);
 if(!STACK.length){st.hidden=true;st.innerHTML="";document.querySelectorAll(".blk").forEach(e=>e.classList.remove("hi"));return}
 st.hidden=false;const n=STACK.length;
 const trail=n>1?`<div class="crumb">${STACK.map((id,i)=>i<n-1?`<a href="#" data-to="${i}">${T(id).title}</a>`:`<b>${T(id).title}</b>`).join(" ▸ ")}</div>`:'';
 st.innerHTML=STACK.map((id,i)=>{const b=T(id),top=i===n-1;
  return `<div class="win swin${top?' top':''}" style="--i:${i}" data-to="${top?'':i}"><div class="tb"><i class="cb" data-pop="${i}" role="button" tabindex="0" aria-label="Close"></i><span>${b.title}</span>${n>1?`<em class="cnt">${i+1}/${n}</em>`:''}</div>
  <div class="wb">${top?`${n>1?`<button type="button" class="back txtbtn" data-pop="${i}">◂ Back to ${T(STACK[i-1]).title}</button>`:''}${trail}${content(b)}`:''}</div></div>`}).join("");
 const t=st.querySelector(".swin.top .wb");if(t)t.scrollTop=0;
 const cur=STACK[n-1];document.querySelectorAll(".blk").forEach(e=>e.classList.toggle("hi",e.id==="b-"+cur))}
function pop(i){STACK=STACK.slice(0,i);renderStack()}
function show(s){document.querySelectorAll(".modal").forEach(m=>m.hidden=true);STACK=[];renderStack();$(s).hidden=false}
document.addEventListener("click",e=>{const d=e.target.dataset;
 if(d.close!==undefined)e.target.closest(".modal").hidden=true;
 if(d.pop!==undefined){e.preventDefault();e.stopPropagation();pop(+d.pop);return}
 const tw=e.target.closest("[data-to]");if(tw&&tw.dataset.to!==""){e.preventDefault();STACK=STACK.slice(0,+tw.dataset.to+1);renderStack();return}
 const op=e.target.closest("[data-open]");if(op&&!e.target.closest("a[href]:not([href='#'])")){e.preventDefault();open(T(op.dataset.open))}
 if(d.hop){e.preventDefault();open(T(d.hop),1)}
 if(d.go){go(d.go);closeMenus()}
 if(d.act==="about"){show("#about");closeMenus()}
 if(d.act==="beyond"){show("#beyond");closeMenus()}
 const mt=e.target.closest(".mt");if(mt){const m=mt.parentElement,was=m.classList.contains("open");closeMenus();if(!was)m.classList.add("open")}
 else if(!e.target.closest(".dd"))closeMenus()});
const closeMenus=()=>document.querySelectorAll(".menu").forEach(m=>m.classList.remove("open"));
const VIEWS=["board","work","timeline","signals"];document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(STACK.length)pop(STACK.length-1);else document.querySelectorAll(".modal").forEach(m=>m.hidden=true)}});
function go(v){let drawer=null;if(v==="read"||v==="beyond"){show("#beyond");return}if(v==="cos")drawer="#cosTop",v="board";if(v==="interested")drawer="#board",v="board";
 VIEWS.forEach(x=>$("#"+x).hidden=x!==v);$("#intro").hidden=v!=="board";$("#cosTop").hidden=v!=="board";
 document.querySelectorAll(".vw").forEach(s=>s.classList.toggle("on",s.dataset.go===v));
 if(v==="board")draw();if(drawer)setTimeout(()=>{const d=$(drawer);if(d.tagName==="DETAILS")d.open=true;d.scrollIntoView({behavior:"smooth"})},30)}
// thesis (v11)
{const th=$("#thesis");if(th)th.textContent=THESES[THESIS_PICK]}
// beyond work
$("#gBeyond").innerHTML=BEYOND.map(g=>`<div class="win bw"><div class="tb"><span>${g.h}</span></div><div class="wb">${g.note?`<p class="small note">${g.note}</p>`:''}<ul>${g.items.map(x=>x.sub?`<li class="sub">${x.sub}</li>`:`<li>${x.u?`<a href="${x.u}" target="_blank" rel="noopener">${x.t}</a>`:`<b>${x.t}</b>`}${x.a?` <span class="muted">· ${x.a}</span>`:''}${x.chk?' <span class="dr">[check]</span>':''}</li>`).join("")}</ul></div></div>`).join("");
// embeds: hide static fallback once the LinkedIn iframe loads; X blockquote is its own fallback
document.querySelectorAll("iframe.li").forEach(f=>f.addEventListener("load",()=>{const fb=document.getElementById(f.dataset.fb);if(fb)fb.classList.add("hid")}));
setTimeout(()=>document.querySelectorAll("iframe.li").forEach(f=>{const fb=document.getElementById(f.dataset.fb);if(fb&&!fb.classList.contains("hid")){f.remove()}}),8000);
// signals
function sigCard(s){return `<div class="win blk sig" id="s-${s.id}" data-open="${s.id}" role="button" tabindex="0"><div class="tb"><span>${s.src}</span></div><div class="wb"><span class="lens">${s.lens} lens</span><h3>${s.title}</h3><div class="small">${s.body}</div><div class="small muted sd">${s.when}</div><div class="more">Open ▸</div></div></div>`}
$("#gSig").innerHTML=SIGB.map(sigCard).join("");
document.addEventListener("keydown",e=>{const c=e.target.closest&&e.target.closest(".sig[data-open]");if(c&&e.key==="Enter"){e.preventDefault();open(T(c.dataset.open))}});
if(location.hash.startsWith("#open")||sessionStorage.getItem("calv-unlocked"))unlock();
const q=new URLSearchParams(location.search);if(q.get("about"))setTimeout(()=>show("#about"),80);if(q.get("v"))setTimeout(()=>go(q.get("v")),50);if(q.get("card"))setTimeout(()=>{q.get("card").split(",").forEach((c,i)=>open(T(c),i>0))},80);if(q.get("menu"))setTimeout(()=>$("#m"+q.get("menu")).classList.add("open"),80);

// v20: cross-link to the Board. Switch view, scroll to the card(s), pulse them and their threads.
function showOnBoard(ids){ids=[].concat(ids);STACK=[];renderStack();go("board");
 setTimeout(()=>{const el=$("#b-"+ids[0]);if(!el)return;draw();el.scrollIntoView({behavior:"smooth",block:"center"});
  ids.forEach(id=>{const c=$("#b-"+id);if(c)c.classList.add("pulse")});focus(ids[0],1);
  setTimeout(()=>{ids.forEach(id=>{const c=$("#b-"+id);if(c)c.classList.remove("pulse")});focus(ids[0],0)},2600)},60)}
document.addEventListener("click",e=>{const l=e.target.closest("[data-board]");if(l){e.preventDefault();e.stopPropagation();showOnBoard(l.dataset.board.split(","))}},true);
