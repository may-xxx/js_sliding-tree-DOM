var e=document.querySelector(".tree"),r=!0,t=!1,n=void 0;try{for(var l,a=e.querySelectorAll("li")[Symbol.iterator]();!(r=(l=a.next()).done);r=!0){var o=l.value,i=document.createElement("span");o.prepend(i),i.append(i.nextSibling)}}catch(e){t=!0,n=e}finally{try{r||null==a.return||a.return()}finally{if(t)throw n}}e.onclick=function(e){if("SPAN"===e.target.tagName){var r=e.target.parentNode.querySelector("ul");r&&(r.hidden=!r.hidden)}};
//# sourceMappingURL=index.3a607345.js.map