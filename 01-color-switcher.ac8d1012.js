!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},n=!1,e=null;t.btnStart.addEventListener("click",(function(){if(n)return;t.btnStart.disabled=!0,n=!0,e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(e),n=!1,t.btnStart.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.ac8d1012.js.map
