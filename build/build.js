!function e(t,n,i){function o(a,s){if(!n[a]){if(!t[a]){var p="function"==typeof require&&require;if(!s&&p)return p(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t){t.exports=function(){return function(e){function t(t){var n=t.getAttribute("data-bespoke-backdrop");if(n){var i=document.createElement("div");return i.className=n,i.classList.add("bespoke-backdrop"),e.parent.appendChild(i),i}}function n(t){if(t){var n=r.indexOf(t),a=e.slide();i(t,"active"),i(t,"inactive"),i(t,"before"),i(t,"after"),n!==a?(o(t,"inactive"),o(t,a>n?"before":"after")):o(t,"active")}}function i(e,t){e.classList.remove("bespoke-backdrop-"+t)}function o(e,t){e.classList.add("bespoke-backdrop-"+t)}var r;r=e.slides.map(t),e.on("activate",function(){r.forEach(n)})}}},{}],2:[function(e,t){t.exports=function(e){return function(t){var n,i,o=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),r=function(){var e=n+1;return p(1)?(s(n,i+1),!1):(o[e]&&s(e,0),void 0)},a=function(){var e=n-1;return p(-1)?(s(n,i-1),!1):(o[e]&&s(e,o[e].length-1),void 0)},s=function(e,t){n=e,i=t,o.forEach(function(n,i){n.forEach(function(n,o){n.classList.add("bespoke-bullet"),e>i||i===e&&t>=o?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),i===e&&o===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},p=function(e){return void 0!==o[n][i+e]};t.on("next",r),t.on("prev",a),t.on("slide",function(e){s(e.index,0)}),s(0,0)}}},{}],3:[function(e,t){t.exports=function(){return function(e){var t=function(){var t=window.location.hash.slice(1),i=parseInt(t,10);t&&(i?n(i-1):e.slides.forEach(function(e,i){e.getAttribute("data-bespoke-hash")===t&&n(i)}))},n=function(t){var n=t>-1&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)};setTimeout(function(){t(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",t)},0)}}},{}],4:[function(e,t){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which&&!e.shiftKey||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||32==e.which&&e.shiftKey||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],5:[function(e,t){t.exports=function(e){return function(t){var n=document.createElement("div"),i=document.createElement("div"),o="vertical"===e?"height":"width";n.className="bespoke-progress-parent",i.className="bespoke-progress-bar",n.appendChild(i),t.parent.appendChild(n),t.on("activate",function(e){i.style[o]=100*e.index/(t.slides.length-1)+"%"})}}},{}],6:[function(e,t){t.exports=function(e){return function(t){var n=t.parent,i=t.slides[0],o=i.offsetHeight,r=i.offsetWidth,a="zoom"===e||"zoom"in n.style&&"transform"!==e,s=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},p=a?t.slides:t.slides.map(s),c=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,i){return i+e in n.style?i+e:t},e.toLowerCase())}("Transform"),l=a?function(e,t){t.style.zoom=e}:function(e,t){t.style[c]="scale("+e+")"},d=function(){var e=n.offsetWidth/r,t=n.offsetHeight/o;p.forEach(l.bind(null,Math.min(e,t)))};window.addEventListener("resize",d),d()}}},{}],7:[function(e,t,n){(function(i){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof i?o=i:"undefined"!=typeof self&&(o=self);var r=o;r=r.bespoke||(r.bespoke={}),r=r.themes||(r.themes={}),r.buildWars=e()}}(function(){return function t(n,i,o){function r(s,p){if(!i[s]){if(!n[s]){var c="function"==typeof e&&e;if(!p&&c)return c(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=i[s]={exports:{}};n[s][0].call(l.exports,function(e){var t=n[s][1][e];return r(t?t:e)},l,l.exports,t,n,i,o)}return i[s].exports}for(var a="function"==typeof e&&e,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(e,t){var n=e("bespoke-classes"),i=e("insert-css");t.exports=function(){var e='/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0}mark{background:#ff0;color:#000}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th,*{padding:0}*{box-sizing:border-box;margin:0}@media print{*{-webkit-print-color-adjust:exact}}@page{size:landscape;margin:0}article{transition:all .3s ease;display:none}article.bespoke-parent{display:block;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;-webkit-perspective:600px;perspective:600px}@media print{article.bespoke-parent{overflow:visible;position:static}}article.bespoke-parent.green{background:#00f3a5}article.bespoke-parent.white{background:#fff}.bespoke-slide{transition:-webkit-transform .6s ease,opacity .6s ease,background .6s ease;transition:transform .6s ease,opacity .6s ease,background .6s ease;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;width:640px;height:480px;position:absolute;top:50%;margin-top:-240px;left:50%;margin-left:-320px;background:0 0;padding:40px;border-radius:0}@media print{.bespoke-slide{zoom:1!important;height:743px;width:100%;page-break-before:always;position:static;margin:0}}.bespoke-before{-webkit-transform:translateX(640px) translateX(-320px) rotateY(-20deg) translateX(-320px);transform:translateX(640px) translateX(-320px) rotateY(-20deg) translateX(-320px)}.bespoke-after{-webkit-transform:translateX(-640px) translateX(320px) rotateY(20deg) translateX(320px);transform:translateX(-640px) translateX(320px) rotateY(20deg) translateX(320px)}@media print{.bespoke-after{-webkit-transform:none;transform:none}}.bespoke-inactive{opacity:0;pointer-events:none}@media print{.bespoke-inactive{opacity:1}}.bespoke-active{opacity:1;transition-delay:.2s}.bespoke-bullet{transition:all .3s ease}.bespoke-bullet-inactive{opacity:0}li.bespoke-bullet-inactive{-webkit-transform:translateX(-10px) translateZ(-10px) rotateY(20deg);transform:translateX(-10px) translateZ(-10px) rotateY(20deg)}@media print{.bespoke-bullet-inactive{opacity:1}}.bespoke-bullet-active{opacity:1}.bespoke-scale-parent{-webkit-perspective:600px;perspective:600px;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}@media print{.bespoke-scale-parent{-webkit-transform:none!important;transform:none!important}}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:5px}@media only screen and (min-width:1366px){.bespoke-progress-parent{height:10px}}@media print{.bespoke-progress-parent{display:none}}.bespoke-progress-bar{transition:width .6s ease;position:absolute;height:100%;background:#00c284}.emphatic,.emphatic .bespoke-slide{background:#00f3a5}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translateZ(0);transform:translateZ(0);transition:opacity .6s ease;opacity:0;z-index:-1}.bespoke-backdrop-active{opacity:1}pre{padding:26px!important;border-radius:8px;border:none!important;box-shadow:none!important}pre span{text-shadow:none!important}body{background:#303030;font-family:\'open sans\',helvetica,arial,sans-serif;font-weight:300;font-size:18px;color:#f0f0f0}body .gif{color:rgba(255,255,255,.8)}body .bespoke-slide.emphatic-text{color:rgba(0,0,0,.5)}h1{font-size:72px;font-weight:600;line-height:82px;letter-spacing:-2px;margin-bottom:16px;margin-top:0}h2{font-weight:300;font-size:42px;letter-spacing:-1px;margin-bottom:8px;color:#f0f0f0}.bespoke-slide.emphatic-text h2{color:rgba(0,0,0,.6)}h3{font-size:24px;font-weight:300;margin-bottom:24px;color:#e0e0e0}.bespoke-slide.emphatic-text h3{color:rgba(0,0,0,.5)}hr{visibility:hidden;height:20px}ul{list-style:none}li{margin-bottom:12px}p{margin:0 50px 12px;line-height:22px}blockquote{max-width:75%}small{font-size:75%}a{color:#00f3a5;text-decoration:none}a.black{color:#000}.bespoke-slide.emphatic-text a{color:rgba(0,0,0,.7)}.bespoke-slide.emphatic-text h1 a{color:#00f3a5}.avatar{display:block;margin:0 auto;width:120px;height:120px;border-radius:120px}.avatar--small{width:70px;height:70px}.logo,.gif{background-position:center;background-repeat:no-repeat}.gif{background-size:cover}';return i(e,{prepend:!0}),i("@import url('https://fonts.googleapis.com/css?family=Open+Sans:300italic,300,600,700');",{prepend:!0}),function(e){n()(e)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,o){var r=e.slides[e.slide()],a=o-e.slide(),s=a>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==r&&["inactive",s,s+"-"+Math.abs(a)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(o){e.slides.map(i),t(o.slide,"active"),n(o.slide,"inactive")})}}},{}],3:[function(e,t){var n={};t.exports=function(e,t){if(!n[e]){n[e]=!0;var i=document.createElement("style");i.setAttribute("type","text/css"),"textContent"in i?i.textContent=e:i.styleSheet.cssText=e;var o=document.getElementsByTagName("head")[0];t&&t.prepend?o.insertBefore(i,o.childNodes[0]):o.appendChild(i)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,t){t.exports=function(e){return function(t){var n,i,o="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+o],i=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),i=e.touches[0]["page"+o]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(i)>50&&t[i>0?"prev":"next"]()})}}},{}],9:[function(e,t){var n=function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),i=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),o=i[0],r={},a=function(e,t){i[e]&&(d("deactivate",u(o,t)),o=i[e],d("activate",u(o,t)))},s=function(e,t){return arguments.length?(d("slide",u(i[e],t))&&a(e,t),void 0):i.indexOf(o)},p=function(e,t){var n=i.indexOf(o)+e;d(e>0?"next":"prev",u(o,t))&&a(n,t)},c=function(e,t){return(r[e]||(r[e]=[])).push(t),l.bind(null,e,t)},l=function(e,t){r[e]=(r[e]||[]).filter(function(e){return e!==t})},d=function(e,t){return(r[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},u=function(e,t){return t=t||{},t.index=i.indexOf(e),t.slide=e,t},f={on:c,off:l,fire:d,slide:s,next:p.bind(null,1),prev:p.bind(null,-1),parent:n,slides:i};return(t||[]).forEach(function(e){e(f)}),a(0),f};t.exports={from:n}},{}],10:[function(e){var t=e("bespoke"),n=e("bespoke-theme-build-wars"),i=e("bespoke-keys"),o=e("bespoke-touch"),r=e("bespoke-bullets"),a=e("bespoke-backdrop"),s=e("bespoke-scale"),p=e("bespoke-hash"),c=e("bespoke-progress");t.from("article",[n(),i(),o(),r("li, .bullet"),a(),s(),p(),c()])},{bespoke:9,"bespoke-backdrop":1,"bespoke-bullets":2,"bespoke-hash":3,"bespoke-keys":4,"bespoke-progress":5,"bespoke-scale":6,"bespoke-theme-build-wars":7,"bespoke-touch":8}]},{},[10]);