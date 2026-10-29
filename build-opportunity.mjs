// Encrypts the private Opportunity content with the passcode (PBKDF2-SHA256 -> AES-GCM).
// Usage: PAGE_PASSCODE=... node build-opportunity.mjs <plaintext.html> opportunity/index.html
// The plaintext source is kept off the repo. Only the encrypted output is committed.
import {readFileSync, writeFileSync} from 'node:fs';
import {webcrypto as wc} from 'node:crypto';
const [src, out] = process.argv.slice(2);
const pass = (process.env.PAGE_PASSCODE || '').trim().toLowerCase();
if (!pass) { console.error('PAGE_PASSCODE not set'); process.exit(1); }
let html = readFileSync(src, 'utf8');
const oS = html.indexOf('<div id="opp"'), oE = html.indexOf('</main>', oS);
const tS = html.indexOf('<dialog id="stack"'), tE = html.indexOf('<script src="site-header.js', tS);
const gS = html.indexOf('<script>\n// Light client-side gate'), gE = html.indexOf('</script>', gS) + 9;
if ([oS, oE, tS, tE, gS].some(i => i < 0)) { console.error('markers missing'); process.exit(1); }
const payload = JSON.stringify({opp: html.slice(oS, oE), tail: html.slice(tS, tE)});
const ITER = 600000, salt = wc.getRandomValues(new Uint8Array(16)), iv = wc.getRandomValues(new Uint8Array(12));
const base = await wc.subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
const key = await wc.subtle.deriveKey({name: 'PBKDF2', salt, iterations: ITER, hash: 'SHA-256'}, base, {name: 'AES-GCM', length: 256}, false, ['encrypt']);
const ct = new Uint8Array(await wc.subtle.encrypt({name: 'AES-GCM', iv}, key, new TextEncoder().encode(payload)));
const b64 = a => Buffer.from(a).toString('base64');
const blob = JSON.stringify({i: ITER, s: b64(salt), v: b64(iv), c: b64(ct)});
const gate = `<script id="opp-data" type="application/json">${blob}</script>
<script>
// Gate: the private content is AES-GCM encrypted. The passcode derives the key (PBKDF2-SHA256).
(()=>{const D=JSON.parse(document.getElementById("opp-data").textContent),u=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
async function keyFrom(p){const b=await crypto.subtle.importKey("raw",new TextEncoder().encode(p),"PBKDF2",false,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:u(D.s),iterations:D.i,hash:"SHA-256"},b,{name:"AES-GCM",length:256},true,["decrypt"])}
async function open(k){const pt=await crypto.subtle.decrypt({name:"AES-GCM",iv:u(D.v)},k,u(D.c));const p=JSON.parse(new TextDecoder().decode(pt));
 document.getElementById("main").insertAdjacentHTML("beforeend",p.opp);
 const t=document.createElement("template");t.innerHTML=p.tail;const frag=t.content;const scripts=[...frag.querySelectorAll("script")];scripts.forEach(s=>s.remove());
 document.getElementById("desk").after(frag);scripts.forEach(s=>{const n=document.createElement("script");n.textContent=s.textContent;document.body.appendChild(n)});
 document.getElementById("gate").hidden=true;document.getElementById("opp").hidden=false}
(async()=>{try{const r=sessionStorage.getItem("opp-k");if(r){const k=await crypto.subtle.importKey("raw",u(r),"AES-GCM",true,["decrypt"]);await open(k)}}catch(e){try{sessionStorage.removeItem("opp-k")}catch(_){}}})();
document.getElementById("gform").addEventListener("submit",async e=>{e.preventDefault();const m=document.getElementById("gmsg");m.textContent="Unlocking…";
 try{const k=await keyFrom(document.getElementById("gpass").value.trim().toLowerCase());await open(k);m.textContent="";
  try{const raw=new Uint8Array(await crypto.subtle.exportKey("raw",k));sessionStorage.setItem("opp-k",btoa(String.fromCharCode(...raw)))}catch(_){}}
 catch(_){m.textContent="That passcode didn't work."}});})();
</script>`;
html = html.slice(0, oS) + html.slice(oE, tS) + html.slice(tE, gS) + gate + html.slice(gE);
writeFileSync(out, html);
console.log('built', out, html.length, 'bytes');
