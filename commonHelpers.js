import{i as l,S as f}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function p(){const r=`https://pixabay.com/api/?key=42659935-3ef7103821fe0025c24926046&q=${document.querySelector(".text").value}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>(t.hits.length===0?l.show({message:"Sorry, there are no images matching your search query. Please try again ",color:"red",position:"topRight"}):t.hits,t)).catch(t=>{throw console.error("Error:",t),t})}function h(i){return Array.from(i).map(({webformatURL:s,largeImageURL:r,tags:t,likes:e,views:o,comments:n,downloads:u})=>`
     <li class="gallery-item">
            <a class="gallery-link" href="${r}">
                <img 
                    class="gallery-image" 
                    src="${s}" 
                    alt="${t}" 
                />
            </a>
             <ul class="info">
        <li class="info-likes">
        <p class = "info-h2">
        Likes
        </p>
        <p class="info-p">
        ${e}
        </p>
        
        
        </li>
        <li class="info-Views">
        <p class = "info-h2">
        Views
        </p>
        <p class="info-p">
          ${o}
        </p>
        </li>
        <li class="info-comments">
        <p class = "info-h2">
        Comments
        </p>
        <p class="info-p">
          ${n}
        </p>
        </li>
        <li class="info-downloads">
         <p class = "info-h2">
        Downloads
        </p>
        <p class="info-p">
          ${u}
        </p>
       </li>
        </ul>
        </li>    
    `).join("")}const a=document.querySelector(".gallery"),m=document.querySelector(".form"),c=document.querySelector(".loader");m.addEventListener("submit",function(i){if(i.preventDefault(),c.classList.remove("is-hiden"),a.innerHTML=null,document.querySelector(".text").value===""){l.show({message:"Please, write your request ",color:"red",position:"topRight"});return}p().then(r=>{if(r.hits.length===0)l.show({message:"Sorry, there are no images matching your search query. Please try again ",color:"red",position:"topRight"});else{const t=r.hits;a.insertAdjacentHTML("afterbegin",h(t)),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}}).catch(r=>console.error("Error:",r)).finally(()=>{c.classList.add("is-hiden")})});
//# sourceMappingURL=commonHelpers.js.map
