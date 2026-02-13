import{a as y,i as n,S as p}from"./assets/vendor-B5nsgUv9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const e of r.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&a(e)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();y.defaults.baseURL="https://pixabay.com/api/";function f(l){return y.get("https://pixabay.com/api/",{params:{key:"54641961-e96e5217be963f5aab39f9ddc",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{const o=t.data.hits;return o.length===0&&n.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"сеnter",timeout:5e3}),o}).catch(t=>{throw n.error({title:"Error",message:t.message,position:"сеnter",timeout:5e3}),t})}const u=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function m(l){const t=document.querySelector(".gallery"),o=l.map(e=>`
<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img 
      class="gallery-image" 
      src="${e.webformatURL}" 
      alt="${e.tags}"
    />
  </a>
  <div class="info">
    <div class="info-titles">
      <p>Likes</p>
      <p>Views</p>
      <p>Comments</p>
      <p>Downloads</p>
    </div>
    <div class="info-values">
      <p>${e.likes}</p>
      <p>${e.views}</p>
      <p>${e.comments}</p>
      <p>${e.downloads}</p>
    </div>
  </div>
</li>
  `).join("");t.innerHTML=o,t.style.display="flex",t.style.flexWrap="wrap",t.style.gap="24px",t.style.justifyContent="center",t.style.alignItems="center",t.style.listStyle="none",t.style.maxWidth="1200px",t.style.margin="0 auto",t.querySelectorAll("li").forEach(e=>{e.style.flex="1 1 360px",e.style.height="200px",e.style.border="1px solid #808080",e.style.overflow="hidden",e.style.width="360px",e.style.display="flex",e.style.flexDirection="column"}),t.querySelectorAll("img").forEach(e=>{e.style.width="100%",e.style.height="160px",e.style.objectFit="cover",e.style.display="block"}),t.querySelectorAll(".info").forEach(e=>{e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.padding="4px",e.style.fontSize="12px";const i=e.querySelector(".info-titles"),c=e.querySelector(".info-values");i.style.display="flex",i.style.justifyContent="space-around",i.style.width="100%",i.style.fontWeight="bold",c.style.display="flex",c.style.justifyContent="space-around",c.style.width="100%"}),u.refresh()}function h(){const l=document.querySelector(".gallery");l.innerHTML="",u.refresh()}function g(){document.getElementById("loader").classList.remove("is-hidden")}function x(){document.getElementById("loader").classList.add("is-hidden")}const d=document.querySelector(".form"),w=d.querySelector('input[name="search-text"]');d.addEventListener("submit",async l=>{l.preventDefault();const t=w.value.trim();if(!t){n.warning({title:"Warning",message:"Please enter a search query!",position:"center"});return}h(),g();try{const o=await f(t);if(o.length===0){n.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3});return}m(o)}catch(o){console.error("Error fetching images:",o)}finally{x()}});
//# sourceMappingURL=index.js.map
