(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(()=>{const l=document.querySelector("[data-menu-open]"),n=document.querySelector("[data-menu-close]"),r=document.querySelector("[data-menu-backdrop]"),c=document.querySelector("[data-menu-nav-links]");l.addEventListener("click",o),n.addEventListener("click",o),c.addEventListener("click",t),r.addEventListener("click",e);function e(i){i.target===i.currentTarget&&o()}function t(i){var s;((s=i.target)==null?void 0:s.tagName)==="A"&&o()}function o(){r.classList.toggle("is-open-mobile-menu")}})();
