document.body.classList.add("is-loading");
window.addEventListener("load",()=>setTimeout(()=>{document.querySelector(".loader")?.classList.add("done");document.body.classList.remove("is-loading")},1250));
const items=document.querySelectorAll(".reveal");
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -50px"});
items.forEach((el,i)=>{el.style.transitionDelay=Math.min(i*45,240)+"ms";io.observe(el)});
const dot=document.querySelector(".cursor-dot"),ring=document.querySelector(".cursor-ring");
if(matchMedia("(pointer:fine)").matches&&dot&&ring){let x=innerWidth/2,y=innerHeight/2,rx=x,ry=y;addEventListener("mousemove",e=>{x=e.clientX;y=e.clientY;dot.style.left=x+"px";dot.style.top=y+"px"});(function f(){rx+=(x-rx)*.14;ry+=(y-ry)*.14;ring.style.left=rx+"px";ring.style.top=ry+"px";requestAnimationFrame(f)})();document.querySelectorAll("a").forEach(a=>{a.onmouseenter=()=>{ring.style.width="48px";ring.style.height="48px";ring.style.opacity=".6"};a.onmouseleave=()=>{ring.style.width="32px";ring.style.height="32px";ring.style.opacity=".35"}})}
const hero=document.querySelector(".hero"),img=document.querySelector(".hero__visual img");
if(hero&&img&&matchMedia("(pointer:fine)").matches){hero.onmousemove=e=>{const x=(e.clientX/innerWidth-.5)*7,y=(e.clientY/innerHeight-.5)*5;img.style.transform=`scale(1.03) translate(${x}px,${y}px)`};hero.onmouseleave=()=>img.style.transform="scale(1)"}
