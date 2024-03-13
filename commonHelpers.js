import{a as p,i as b,S as L}from"./assets/vendor-527658dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const S="42733452-f5a48a9f7be4f5b128e192710",P="https://pixabay.com",w="/api/";async function m(e,t=1,s=15){const a=new URLSearchParams({key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s});try{return(await p.get(`${P}${w}`,{params:a})).data}catch(r){throw console.error(r),r}}const q="/goit-js-hw-12/assets/Error-7962080a.svg";function M({webformatURL:e,largeImageURL:t,tags:s,likes:a,views:r,comments:o,downloads:l}){return`
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
  `}function g(e){const t=document.querySelector(".gallery"),s=e.map(M).join("");t.insertAdjacentHTML("beforeend",s)}function f(e){document.querySelector(".loader").classList.toggle("is-hidden",!e)}function c(e){document.querySelector(".load-more").classList.toggle("is-hidden",e)}const i=e=>{const t={position:"topRight",iconUrl:q,timeout:1e4,backgroundColor:"#ef4040",progressBarColor:"#b51b1b",title:"Error",titleColor:"#fafafb",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5"};b.error({...t,message:e})},h=new L(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".form-search"),x=document.querySelector(".gallery"),v=document.querySelector(".load-more");let n=1,u="",y=15;d.addEventListener("submit",async e=>{if(e.preventDefault(),x.innerHTML="",n=1,u=e.currentTarget.elements.searchQuery.value.trim(),!u){i("Please enter a search query.");return}f(!0);try{const t=await m(u,n);if(t.hits.length===0){c(!0),console.log(123),i("Sorry, there are no images matching <br> your search query. Please try again!");return}g(t.hits),h.refresh(),Math.ceil(t.totalHits/y)===n?(c(!0),i("We're sorry, but you've reached the end of search results.")):c(!1)}catch(t){i(t.message)}finally{f(!1),d.reset()}});v.addEventListener("click",async()=>{n+=1,f(!0);try{const e=await m(u,n);g(e.hits),h.refresh(),Math.ceil(e.totalHits/y)===n&&(c(!0),i("We're sorry, but you've reached the end of search results."))}catch(e){i(e.message)}B(),f(!1)});function B(){const{height:e}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
