import{i as u,S as f}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const m="42733452-f5a48a9f7be4f5b128e192710",p="https://pixabay.com",d="/api/";function g(o){const t=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}${d}?${t}`).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>e.hits).catch(e=>{throw console.error(e),e})}const h="/goit-js-hw-12/assets/Error-7962080a.svg";function y({webformatURL:o,largeImageURL:t,tags:e,likes:a,views:r,comments:s,downloads:i}){return`
    <li class="gallery-item">
      <a href="${t}" class="gallery-link">
        <img src="${o}" alt="${e}" class="gallery__image" />
        <ul class="info">
          <li class="info-item">
            <p>Likes</p> ${a}
          </li>
          <li class="info-item">
            <p>Views</p> ${r}
          </li>
          <li class="info-item">
            <p>Comments</p> ${s}
          </li>
          <li class="info-item">
            <p>Downloads</p> ${i}
          </li>
        </ul>
      </a>
    </li>
  `}function b(o){const t=document.querySelector(".gallery"),e=o.map(y).join("");t.innerHTML=e}function l(o){document.querySelector(".loader").classList.toggle("is-hidden",!o)}const n=o=>{const t={position:"topRight",iconUrl:h,timeout:1e4,backgroundColor:"#ef4040",progressBarColor:"#b51b1b",title:"Error",titleColor:"#fafafb",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5"};u.error({...t,message:o})},L=new f(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".form-search"),S=document.querySelector(".gallery");c.addEventListener("submit",o=>{o.preventDefault(),S.innerHTML="";const t=o.currentTarget.elements.searchQuery.value.trim();if(!t){n("Please enter a search query.");return}l(!0),g(t).then(e=>{e.length===0?n("Sorry, there are no images matching <br> your search query. Please try again!"):(b(e),L.refresh())}).catch(e=>{n(e.message)}).finally(()=>{l(!1),c.reset()})});
//# sourceMappingURL=commonHelpers.js.map
