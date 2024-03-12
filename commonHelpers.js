import{a as y,i as b,S as L}from"./assets/vendor-527658dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const S="42733452-f5a48a9f7be4f5b128e192710",w="https://pixabay.com",P="/api/";async function g(e,t=1,s=15){const a=new URLSearchParams({key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s});try{return(await y.get(`${w}${P}`,{params:a})).data.hits}catch(r){throw console.error(r),r}}const q="/goit-js-hw-12/assets/Error-7962080a.svg";function M({webformatURL:e,largeImageURL:t,tags:s,likes:a,views:r,comments:o,downloads:n}){return`
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
            <p>Downloads</p> ${n}
          </li>
        </ul>
      </a>
    </li>
  `}function h(e){const t=document.querySelector(".gallery"),s=e.map(M).join("");t.insertAdjacentHTML("beforeend",s)}function u(e){document.querySelector(".loader").classList.toggle("is-hidden",!e)}function f(e){document.querySelector(".load-more").classList.toggle("is-hidden",e)}const l=e=>{const t={position:"topRight",iconUrl:q,timeout:1e4,backgroundColor:"#ef4040",progressBarColor:"#b51b1b",title:"Error",titleColor:"#fafafb",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5"};b.error({...t,message:e})},p=new L(".gallery a",{captionsData:"alt",captionDelay:250}),m=document.querySelector(".form-search"),B=document.querySelector(".gallery"),E=document.querySelector(".load-more");let i=1,c="",d=0,$=15;m.addEventListener("submit",async e=>{if(e.preventDefault(),B.innerHTML="",i=1,c=e.currentTarget.elements.searchQuery.value.trim(),!c){l("Please enter a search query.");return}u(!0),f(!0);try{const t=await g(c,i);t.length===0?l("Sorry, there are no images matching <br> your search query. Please try again!"):(h(t),d=Math.ceil(t.totalHits/$),f(d===1),p.refresh())}catch(t){l(t.message)}u(!1),m.reset()});E.addEventListener("click",async()=>{if(!(i>=d)){i+=1,u(!0);try{const e=await g(c,i);e.length===0?(l("We’re sorry, but you’ve reached the end of search results."),f(!1)):(h(e),p.refresh(),f(i===d))}catch(e){l(e.message)}v(),u(!1)}});function v(){const{height:e}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
