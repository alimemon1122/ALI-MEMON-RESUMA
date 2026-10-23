const EMAIL='here69636@gmail.com';
const W3F_KEY='9b9df1f3-5031-4b22-ad7b-7c13b1e5d050'; // Web3Forms access key yahan paste karein (e.g. 'abc123-...')
const P=[['index.html','Home'],['about.html','About'],['skills.html','Skills'],['projects.html','Projects'],['contact.html','Contact']];
const cur=document.body.dataset.page;
document.body.insertAdjacentHTML('afterbegin',`<header><div class="wrap"><a class="logo" href="index.html">Ali<b>.</b>Memon</a><button id="mb" aria-label="Menu">&#9776;</button><nav id="nv">${P.map(p=>`<a href="${p[0]}" class="${p[0]==cur?'on':''}">${p[1]}</a>`).join('')}</nav></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap">&copy; ${new Date().getFullYear()} Ali Memon &middot; Learn, Build, Grow</div></footer>`);
document.getElementById('mb').onclick=()=>document.getElementById('nv').classList.toggle('open');
requestAnimationFrame(()=>document.body.classList.add('in'));
addEventListener('pageshow',()=>document.body.classList.remove('out'));
document.addEventListener('click',e=>{const a=e.target.closest('a');if(!a||a.target||!/^[\w-]+\.html/.test(a.getAttribute('href')||''))return;e.preventDefault();document.body.classList.add('out');setTimeout(()=>location.href=a.href,320)});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;x.target.classList.add('show');const b=x.target.querySelector('.bar i');if(b)b.style.width=b.dataset.w+'%';io.unobserve(x.target)}),{threshold:.15});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)});
const t=document.getElementById('type');
if(t){const R=['Shopify Developer','Web Developer','Account Management','Sales & Lead Generation'];let r=0,c=0,d=0;(function f(){const w=R[r];c+=d?-1:1;t.textContent=w.slice(0,c);let s=d?35:75;if(!d&&c==w.length){d=1;s=1400}else if(d&&c==0){d=0;r=(r+1)%R.length;s=350}setTimeout(f,s)})()}
const F=document.getElementById('cf');
if(F)F.onsubmit=async e=>{e.preventDefault();const s=document.getElementById('st'),b=F.querySelector('button'),v=Object.fromEntries(new FormData(F));
if(v._honey)return;b.disabled=true;s.className='';s.textContent='Sending...';
const ctl=new AbortController(),to=setTimeout(()=>ctl.abort(),12000);
try{let r,j;
if(W3F_KEY){r=await fetch('https://api.web3forms.com/submit',{method:'POST',signal:ctl.signal,headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({access_key:W3F_KEY,name:v.name,email:v.email,message:v.message,subject:'Portfolio message from '+v.name})});j=await r.json();if(!(r.ok&&j.success))throw 0}
else{r=await fetch('https://formsubmit.co/ajax/'+EMAIL,{method:'POST',signal:ctl.signal,headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({name:v.name,email:v.email,message:v.message,_replyto:v.email,_subject:'Portfolio message from '+v.name,_template:'table',_captcha:'false'})});j=await r.json();if(!(r.ok&&String(j.success)!=='false'))throw 0}
s.className='ok';s.textContent='Message sent. I will reply to your email soon.';F.reset()}
catch(x){const body=encodeURIComponent('Name: '+v.name+'\nEmail: '+v.email+'\n\n'+v.message);s.className='er';s.innerHTML='Could not send from the form. <a href="mailto:'+EMAIL+'?subject='+encodeURIComponent('Portfolio message from '+v.name)+'&body='+body+'">Click here to send it by email instead</a>.'}
clearTimeout(to);b.disabled=false};
