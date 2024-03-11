import{a as y,i as p,S as b}from"./assets/vendor-527658dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const L="42733452-f5a48a9f7be4f5b128e192710",S="https://pixabay.com",w="/api/";async function g(e,t=1,s=15){const a=new URLSearchParams({key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s});try{return(await y.get(`${S}${w}`,{params:a})).data.hits}catch(r){throw console.error(r),r}}const q="/goit-js-hw-12/assets/Error-7962080a.svg";function P({webformatURL:e,largeImageURL:t,tags:s,likes:a,views:r,comments:o,downloads:l}){return`
    <li class="gallery-item">
      <a href="${t}" class="gallery-link">
        <img src="${e}" alt="${s}" class="gallery__image" />
        <ul class="info">
          <li class="info-item">
            <p>Likes</p> ${a}
          </li>
          <li class="info-item">
            <p>Views</p> ${r}
          </li>
          <li class="info-item">
            <p>Comments</p> ${o}
          </li>
          <li class="info-item">
            <p>Downloads</p> ${l}
          </li>
        </ul>
      </a>
    </li>
  `}function m(e){const t=document.querySelector(".gallery"),s=e.map(P).join("");t.insertAdjacentHTML("beforeend",s)}function u(e){document.querySelector(".loader").classList.toggle("is-hidden",!e)}function n(e){document.querySelector(".load-more").classList.toggle("is-hidden",e)}const i=e=>{const t={position:"topRight",iconUrl:q,timeout:1e4,backgroundColor:"#ef4040",progressBarColor:"#b51b1b",title:"Error",titleColor:"#fafafb",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5"};p.error({...t,message:e})},h=new b(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".form-search"),v=document.querySelector(".gallery"),B=document.querySelector(".load-more");let f=1,c="";d.addEventListener("submit",async e=>{if(e.preventDefault(),v.innerHTML="",f=1,c=e.currentTarget.elements.searchQuery.value.trim(),!c){i("Please enter a search query.");return}u(!0),n(!0);try{const t=await g(c,f);t.length===0?i("Sorry, there are no images matching <br> your search query. Please try again!"):(m(t),h.refresh(),t.length<15?n(!0):n(!1))}catch(t){i(t.message)}finally{u(!1),d.reset()}});B.addEventListener("click",async()=>{f+=1,u(!0);try{const e=await g(c,f);e.length===0?(i("We’re sorry, but you’ve reached the end of search results."),n(!0)):(m(e),h.refresh(),e.length<15?n(!0):(i("We’re sorry, but you’ve reached the end of search results."),n(!1)))}catch(e){i(e.message)}finally{E(),u(!1)}});function E(){const{height:e}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
