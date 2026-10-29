// Archived prototype: intentionally not loaded by index.html.
// Preserve for a future hosted-auth integration; not production authentication.
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
