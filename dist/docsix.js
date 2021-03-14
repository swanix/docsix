/*!
 * Docsix - v0.1.0
 * https://github.com/swanix/docsix
 * @license MIT
 * Based on Docsify@4
 * https://cdn.jsdelivr.net/npm/docsify
*/
!function(){function o(n){var r=Object.create(null);return function(e){var t=c(e)?e:JSON.stringify(e);return r[t]||(r[t]=n(e))}}var i=o(function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}),l=Object.prototype.hasOwnProperty,d=Object.assign||function(e){for(var t=arguments,n=1;n<arguments.length;n++){var r=Object(t[n]);for(var i in r)l.call(r,i)&&(e[i]=r[i])}return e};function c(e){return"string"==typeof e||"number"==typeof e}function h(){}function r(e){return"function"==typeof e}var a=document.currentScript;function s(){var e=d({el:"#app",repo:"",maxLevel:6,subMaxLevel:0,loadSidebar:null,loadNavbar:null,homepage:"README.md",coverpage:"",basePath:"",auto2top:!1,name:"",themeColor:"",nameLink:window.location.pathname,autoHeader:!1,executeScript:null,noEmoji:!1,ga:"",ext:".md",mergeNavbar:!1,formatUpdated:"",externalLinkTarget:"_blank",cornerExternalLinkTarget:"_blank",externalLinkRel:"noopener",routerMode:"hash",noCompileLinks:[],relativePath:!1,topMargin:0},window.$docsify),t=a||[].slice.call(document.getElementsByTagName("script")).filter(function(e){return/docsify\./.test(e.src)})[0];if(t)for(var n in e)if(l.call(e,n)){var r=t.getAttribute("data-"+i(n));c(r)&&(e[n]=""===r||r)}return!0===e.loadSidebar&&(e.loadSidebar="_sidebar"+e.ext),!0===e.loadNavbar&&(e.loadNavbar="_navbar"+e.ext),!0===e.coverpage&&(e.coverpage="_coverpage"+e.ext),!0===e.repo&&(e.repo=""),!0===e.name&&(e.name=""),window.$docsify=e}var g=document.body.clientWidth<=600,u=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/),n={};function m(e,t){if(void 0===t&&(t=!1),"string"==typeof e){if(void 0!==window.Vue)return b(e);e=t?b(e):n[e]||(n[e]=b(e))}return e}var p=document,v=p.body,f=p.head;function b(e,t){return t?e.querySelector(t):p.querySelector(e)}function y(e,t){return[].slice.call(t?e.querySelectorAll(t):p.querySelectorAll(e))}function k(e,t){return e=p.createElement(e),t&&(e.innerHTML=t),e}function w(e,t){return e.appendChild(t)}function x(e,t){return e.insertBefore(t,e.children[0])}function _(e,t,n){r(t)?window.addEventListener(e,t):e.addEventListener(t,n)}function S(e,t,n){r(t)?window.removeEventListener(e,t):e.removeEventListener(t,n)}function A(e,t,n){e&&e.classList[n?t:"toggle"](n||t)}var $,E,e=Object.freeze({__proto__:null,getNode:m,$:p,body:v,head:f,find:b,findAll:y,create:k,appendTo:w,before:x,on:_,off:S,toggleClass:A,style:function(e){w(f,k("style",e))}});function C(e){var t,n=e.loaded,r=e.total,i=e.step;$||function(){var e=k("div");e.classList.add("progress"),w(v,e),$=e}(),t=i?80<(t=parseInt($.style.width||0,10)+i)?80:t:Math.floor(n/r*100),$.style.opacity=1,$.style.width=95<=t?"100%":t+"%",95<=t&&(clearTimeout(E),E=setTimeout(function(e){$.style.opacity=0,$.style.width="0%"},200))}var F={};function L(a,e,t){void 0===e&&(e=!1),void 0===t&&(t={});function n(){s.addEventListener.apply(s,arguments)}var s=new XMLHttpRequest,r=F[a];if(r)return{then:function(e){return e(r.content,r.opt)},abort:h};for(var i in s.open("GET",a),t)l.call(t,i)&&s.setRequestHeader(i,t[i]);return s.send(),{then:function(r,i){if(void 0===i&&(i=h),e){var t=setInterval(function(e){return C({step:Math.floor(5*Math.random()+1)})},500);n("progress",C),n("loadend",function(e){C(e),clearInterval(t)})}n("error",i),n("load",function(e){var t=e.target;if(400<=t.status)i(t);else{var n=F[a]={content:t.response,opt:{updatedAt:s.getResponseHeader("last-modified")}};r(n.content,n.opt)}})},abort:function(e){return 4!==s.readyState&&s.abort()}}}function T(e,t){e.innerHTML=e.innerHTML.replace(/var\(\s*--theme-color.*?\)/g,t)}function R(e,t,r,i){void 0===i&&(i=h);var a=e._hooks[t],s=function(t){var e=a[t];if(t>=a.length)i(r);else if("function"==typeof e)if(2===e.length)e(r,function(e){r=e,s(t+1)});else{var n=e(r);r=void 0===n?r:n,s(t+1)}else s(t+1)};s(0)}var O=p.title;function P(){var e=m("section.cover");if(e){var t=e.getBoundingClientRect().height;window.pageYOffset>=t||e.classList.contains("hidden")?A(v,"add","sticky"):A(v,"remove","sticky")}}function z(e,t,r,n){var i=[];null!=(t=m(t))&&(i=y(t,"a"));var a,s=decodeURI(e.toURL(e.getCurrentPath()));return i.sort(function(e,t){return t.href.length-e.href.length}).forEach(function(e){var t=e.getAttribute("href"),n=r?e.parentNode:e;0!==s.indexOf(t)||a?A(n,"remove","active"):(a=e,A(n,"add","active"))}),n&&(p.title=a?a.title||a.innerText+" - "+O:O),a}var j=decodeURIComponent,N=encodeURIComponent;function M(e){var n={};return(e=e.trim().replace(/^(\?|#|&)/,""))&&e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("=");n[t[0]]=t[1]&&j(t[1])}),n}function q(e,t){void 0===t&&(t=[]);var n=[];for(var r in e)-1<t.indexOf(r)||n.push(e[r]?(N(r)+"="+N(e[r])).toLowerCase():N(r));return n.length?"?"+n.join("&"):""}var H=o(function(e){return/(:|(\/{2}))/g.test(e)}),I=o(function(e){if(/\/$/g.test(e))return e;var t=e.match(/(\S*\/)[^/]+$/);return t?t[1]:""}),B=o(function(e){return e.replace(/^\/+/,"/").replace(/([^:])\/{2,}/g,"$1/")}),Z=o(function(e){for(var t=e.replace(/^\//,"").split("/"),n=[],r=0,i=t.length;r<i;r++){var a=t[r];".."===a?n.pop():"."!==a&&n.push(a)}return"/"+n.join("/")});function D(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return B(e.join("/"))}var U=o(function(e){return e.replace("#","?id=")});function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=(function(e,t,n){return t&&Y(e.prototype,t),n&&Y(e,n),e}(W,[{key:"getIntermediateValue",value:function(e){return this.decimal?e:Math.round(e)}},{key:"getFinalValue",value:function(){return this.end}}]),W);function W(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,W),this.start=e.start,this.end=e.end,this.decimal=e.decimal}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=(function(e,t,n){return t&&G(e.prototype,t),n&&G(e,n),e}(X,[{key:"begin",value:function(){return this.isRunning||this.next===this.end||(this.frame=window.requestAnimationFrame(this._tick.bind(this))),this}},{key:"stop",value:function(){return window.cancelAnimationFrame(this.frame),this.isRunning=!1,this.frame=null,this.timeStart=null,this.next=null,this}},{key:"on",value:function(e,t){return this.events[e]=this.events[e]||[],this.events[e].push(t),this}},{key:"_emit",value:function(e,t){var n=this,r=this.events[e];r&&r.forEach(function(e){return e.call(n,t)})}},{key:"_tick",value:function(e){this.isRunning=!0;var t=this.next||this.start;this.timeStart||(this.timeStart=e),this.timeElapsed=e-this.timeStart,this.next=this.ease(this.timeElapsed,this.start,this.end-this.start,this.duration),this._shouldTick(t)?(this._emit("tick",this.tweener.getIntermediateValue(this.next)),this.frame=window.requestAnimationFrame(this._tick.bind(this))):(this._emit("tick",this.tweener.getFinalValue()),this._emit("done",null))}},{key:"_shouldTick",value:function(e){return{up:this.next<this.end&&e<=this.next,down:this.next>this.end&&e>=this.next}[this.direction]}},{key:"_defaultEase",value:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}}]),X);function X(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,X),this.duration=e.duration||1e3,this.ease=e.easing||this._defaultEase,this.tweener=e.tweener||new t(e),this.start=this.tweener.start,this.end=this.tweener.end,this.frame=null,this.next=null,this.isRunning=!1,this.events={},this.direction=this.start<this.end?"up":"down"}var Q={},J=!1,K=null,ee=!0,te=0;function ne(e){if(ee){for(var t,n=m(".sidebar"),r=y(".anchor"),i=b(n,".sidebar-nav"),a=b(n,"li.active"),s=document.documentElement,o=(s&&s.scrollTop||document.body.scrollTop)-te,l=0,c=r.length;l<c;l+=1){var u=r[l];if(u.offsetTop>o){t=t||u;break}t=u}if(t){var h=Q[re(decodeURIComponent(e),t.getAttribute("data-id"))];if(h&&h!==a&&(a&&a.classList.remove("active"),h.classList.add("active"),a=h,!J&&v.classList.contains("sticky"))){var p=n.clientHeight,d=a.offsetTop+a.clientHeight+40,g=d-0<p,f=a.offsetTop>=i.scrollTop&&d<=i.scrollTop+p?i.scrollTop:g?0:d-p;n.scrollTop=f}}}}function re(e,t){return e+"?id="+t}function ie(e,t){if(t){var n=s().topMargin,r=b("#"+t);r&&function(e,t){void 0===t&&(t=0),K&&K.stop(),ee=!1,K=new V({start:window.pageYOffset,end:e.getBoundingClientRect().top+window.pageYOffset-t,duration:500}).on("tick",function(e){return window.scrollTo(0,e)}).on("done",function(){ee=!0,K=null}).begin()}(r,n);var i=Q[re(e,t)],a=b(m(".sidebar"),"li.active");a&&a.classList.remove("active"),i&&i.classList.add("active")}}var ae=p.scrollingElement||p.documentElement;function se(e,t){if(void 0===t&&(t='<ul class="app-sub-sidebar">{inner}</ul>'),!e||!e.length)return"";var n="";return e.forEach(function(e){n+='<li><a class="section-link" href="'+e.slug+'">'+e.title+"</a></li>",e.children&&(n+=se(e.children,t))}),t.replace("{inner}",n)}function oe(e,t){return'<p class="'+e+'">'+t.slice(5).trim()+"</p>"}function le(e,r){var i=[],a={};return e.forEach(function(e){var t=e.level||1,n=t-1;r<t||(a[n]?a[n].children=(a[n].children||[]).concat(e):i.push(e),a[t]=e)}),i}var ce={},ue=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;function he(e){return e.toLowerCase()}function pe(e){if("string"!=typeof e)return"";var t=e.trim().replace(/[A-Z]+/g,he).replace(/<[^>\d]+>/g,"").replace(ue,"").replace(/\s/g,"-").replace(/-+/g,"-").replace(/^(\d)/,"_$1"),n=ce[t];return n=l.call(ce,t)?n+1:0,(ce[t]=n)&&(t=t+"-"+n),t}function de(e,t){return'<img class="emoji" src="https://github.githubassets.com/images/icons/emoji/'+t+'.png" alt="'+t+'" />'}function ge(e){void 0===e&&(e="");var r={};return{str:e=e&&e.replace(/^'/,"").replace(/'$/,"").replace(/(?:^|\s):([\w-]+:?)=?([\w-]+)?/g,function(e,t,n){return-1===t.indexOf(":")?(r[t]=n&&n.replace(/&quot;/g,"")||!0,""):e}).trim(),config:r}}pe.clear=function(){ce={}};var fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function me(e,t){return e(t={exports:{}},t.exports),t.exports}var ve,be=me(function(e){var c=function(c){var u=/\blang(?:uage)?-([\w-]+)\b/i,t=0,T={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof R?new R(e.type,T.util.encode(e.content),e.alias):Array.isArray(e)?e.map(T.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function n(e,r){var i,t,a=T.util.type(e);switch(r=r||{},a){case"Object":if(t=T.util.objId(e),r[t])return r[t];for(var s in i={},r[t]=i,e)e.hasOwnProperty(s)&&(i[s]=n(e[s],r));return i;case"Array":return t=T.util.objId(e),r[t]?r[t]:(i=[],r[t]=i,e.forEach(function(e,t){i[t]=n(e,r)}),i);default:return e}},getLanguage:function(e){for(;e&&!u.test(e.className);)e=e.parentElement;return e?(e.className.match(u)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var t=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(t){var n=document.getElementsByTagName("script");for(var r in n)if(n[r].src==t)return n[r]}return null}}},languages:{extend:function(e,t){var n=T.util.clone(T.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(n,e,t,r){var i=(r=r||T.languages)[n],a={};for(var s in i)if(i.hasOwnProperty(s)){if(s==e)for(var o in t)t.hasOwnProperty(o)&&(a[o]=t[o]);t.hasOwnProperty(s)||(a[s]=i[s])}var l=r[n];return r[n]=a,T.languages.DFS(T.languages,function(e,t){t===l&&e!=n&&(this[e]=a)}),a},DFS:function e(t,n,r,i){i=i||{};var a=T.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],r||s);var o=t[s],l=T.util.type(o);"Object"!==l||i[a(o)]?"Array"!==l||i[a(o)]||(i[a(o)]=!0,e(o,n,s,i)):(i[a(o)]=!0,e(o,n,null,i))}}},plugins:{},highlightAll:function(e,t){T.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};T.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),T.hooks.run("before-all-elements-highlight",r);for(var i,a=0;i=r.elements[a++];)T.highlightElement(i,!0===t,r.callback)},highlightElement:function(e,t,n){var r=T.util.getLanguage(e),i=T.languages[r];e.className=e.className.replace(u,"").replace(/\s+/g," ")+" language-"+r;var a=e.parentNode;a&&"pre"===a.nodeName.toLowerCase()&&(a.className=a.className.replace(u,"").replace(/\s+/g," ")+" language-"+r);var s={element:e,language:r,grammar:i,code:e.textContent};function o(e){s.highlightedCode=e,T.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,T.hooks.run("after-highlight",s),T.hooks.run("complete",s),n&&n.call(s.element)}if(T.hooks.run("before-sanity-check",s),!s.code)return T.hooks.run("complete",s),void(n&&n.call(s.element));if(T.hooks.run("before-highlight",s),s.grammar)if(t&&c.Worker){var l=new Worker(T.filename);l.onmessage=function(e){o(e.data)},l.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else o(T.highlight(s.code,s.grammar,s.language));else o(T.util.encode(s.code))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};return T.hooks.run("before-tokenize",r),r.tokens=T.tokenize(r.code,r.grammar),T.hooks.run("after-tokenize",r),R.stringify(T.util.encode(r.tokens),r.language)},matchGrammar:function(e,t,n,r,i,a,s){for(var o in n)if(n.hasOwnProperty(o)&&n[o]){var l=n[o];l=Array.isArray(l)?l:[l];for(var c=0;c<l.length;++c){if(s&&s==o+","+c)return;var u=l[c],h=u.inside,p=!!u.lookbehind,d=!!u.greedy,g=0,f=u.alias;if(d&&!u.pattern.global){var m=u.pattern.toString().match(/[imsuy]*$/)[0];u.pattern=RegExp(u.pattern.source,m+"g")}u=u.pattern||u;for(var v=r,b=i;v<t.length;b+=t[v].length,++v){var y=t[v];if(t.length>e.length)return;if(!(y instanceof R)){if(d&&v!=t.length-1){if(u.lastIndex=b,!(A=u.exec(e)))break;for(var k=A.index+(p&&A[1]?A[1].length:0),w=A.index+A[0].length,x=v,_=b,S=t.length;x<S&&(_<w||!t[x].type&&!t[x-1].greedy);++x)(_+=t[x].length)<=k&&(++v,b=_);if(t[v]instanceof R)continue;$=x-v,y=e.slice(b,_),A.index-=b}else{u.lastIndex=0;var A=u.exec(y),$=1}if(A){p&&(g=A[1]?A[1].length:0);w=(k=A.index+g)+(A=A[0].slice(g)).length;var E=y.slice(0,k),C=y.slice(w),F=[v,$];E&&(++v,b+=E.length,F.push(E));var L=new R(o,h?T.tokenize(A,h):A,f,A,d);if(F.push(L),C&&F.push(C),Array.prototype.splice.apply(t,F),1!=$&&T.matchGrammar(e,t,n,v,b,!0,o+","+c),a)break}else if(a)break}}}}},tokenize:function(e,t){var n=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return T.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=T.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=T.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:R};function R(e,t,n,r,i){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!i}if(c.Prism=T,R.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return R.stringify(e,t)}).join("");var n={type:e.type,content:R.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var r=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,r)}T.hooks.run("wrap",n);var i=Object.keys(n.attributes).map(function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(i?" "+i:"")+">"+n.content+"</"+n.tag+">"},!c.document)return c.addEventListener&&(T.disableWorkerMessageHandler||c.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,r=t.code,i=t.immediateClose;c.postMessage(T.highlight(r,T.languages[n],n)),i&&c.close()},!1)),T;var e=T.util.currentScript();if(e&&(T.filename=e.src,e.hasAttribute("data-manual")&&(T.manual=!0)),!T.manual){function n(){T.manual||T.highlightAll()}var r=document.readyState;"loading"===r||"interactive"===r&&e&&e.defer?document.addEventListener("DOMContentLoaded",n):window.requestAnimationFrame?window.requestAnimationFrame(n):window.setTimeout(n,16)}return T}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=c),void 0!==fe&&(fe.Prism=c),c.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},c.languages.markup.tag.inside["attr-value"].inside.entity=c.languages.markup.entity,c.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(c.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:c.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+t]={pattern:/[\s\S]+/,inside:c.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:r},c.languages.insertBefore("markup","cdata",i)}}),c.languages.xml=c.languages.extend("markup",{}),c.languages.html=c.languages.markup,c.languages.mathml=c.languages.markup,c.languages.svg=c.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(c),c.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},c.languages.javascript=c.languages.extend("clike",{"class-name":[c.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),c.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,c.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:c.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:c.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:c.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:c.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),c.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:c.languages.javascript}},string:/[\s\S]+/}}}),c.languages.markup&&c.languages.markup.tag.addInlined("script","javascript"),c.languages.js=c.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var t,n=e.getAttribute("data-src"),r=e,i=/\blang(?:uage)?-([\w-]+)\b/i;r&&!i.test(r.className);)r=r.parentNode;if(r&&(t=(e.className.match(i)||[,""])[1]),!t){var a=(n.match(/\.(\w+)$/)||[,""])[1];t=l[a]||a}var s=document.createElement("code");s.className="language-"+t,e.textContent="",s.textContent="Loading…",e.appendChild(s);var o=new XMLHttpRequest;o.open("GET",n,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?(s.textContent=o.responseText,c.highlightElement(s),e.setAttribute("data-src-loaded","")):400<=o.status?s.textContent="✖ Error "+o.status+" while fetching file: "+o.statusText:s.textContent="✖ Error: File does not exist or is empty")},o.send(null)}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))});function ye(e,t){return"___"+e.toUpperCase()+t+"___"}ve=Prism,Object.defineProperties(ve.languages["markup-templating"]={},{buildPlaceholders:{value:function(r,i,e,a){if(r.language===i){var s=r.tokenStack=[];r.code=r.code.replace(e,function(e){if("function"==typeof a&&!a(e))return e;for(var t,n=s.length;-1!==r.code.indexOf(t=ye(i,n));)++n;return s[n]=e,t}),r.grammar=ve.languages.markup}}},tokenizePlaceholders:{value:function(d,g){if(d.language===g&&d.tokenStack){d.grammar=ve.languages[g];var f=0,m=Object.keys(d.tokenStack);!function e(t){for(var n=0;n<t.length&&!(f>=m.length);n++){var r=t[n];if("string"==typeof r||r.content&&"string"==typeof r.content){var i=m[f],a=d.tokenStack[i],s="string"==typeof r?r:r.content,o=ye(g,i),l=s.indexOf(o);if(-1<l){++f;var c=s.substring(0,l),u=new ve.Token(g,ve.tokenize(a,d.grammar),"language-"+g,a),h=s.substring(l+o.length),p=[];c&&p.push.apply(p,e([c])),p.push(u),h&&p.push.apply(p,e([h])),"string"==typeof r?t.splice.apply(t,[n,1].concat(p)):r.content=p}}else r.content&&e(r.content)}return t}(d.tokens)}}}});var ke=me(function(v,e){!function(){var y={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:h,table:h,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/};function l(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||m.defaults,this.rules=y.normal,this.options.pedantic?this.rules=y.pedantic:this.options.gfm&&(this.rules=y.gfm)}y._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,y._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,y.def=e(y.def).replace("label",y._label).replace("title",y._title).getRegex(),y.bullet=/(?:[*+-]|\d{1,9}\.)/,y.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,y.item=e(y.item,"gm").replace(/bull/g,y.bullet).getRegex(),y.list=e(y.list).replace(/bull/g,y.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+y.def.source+")").getRegex(),y._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",y._comment=/<!--(?!-?>)[\s\S]*?-->/,y.html=e(y.html,"i").replace("comment",y._comment).replace("tag",y._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),y.paragraph=e(y._paragraph).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} +").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",y._tag).getRegex(),y.blockquote=e(y.blockquote).replace("paragraph",y.paragraph).getRegex(),y.normal=d({},y),y.gfm=d({},y.normal,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),y.pedantic=d({},y.normal,{html:e("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",y._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:h,paragraph:e(y.normal._paragraph).replace("hr",y.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",y.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()}),l.rules=y,l.lex=function(e,t){return new l(t).lex(e)},l.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},l.prototype.token=function(e,t){var n,r,i,a,s,o,l,c,u,h,p,d,g,f,m,v;for(e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),1<i[0].length&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e)){var b=this.tokens[this.tokens.length-1];e=e.substring(i[0].length),b&&"paragraph"===b.type?b.text+="\n"+i[0].trimRight():(i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?i:x(i,"\n")}))}else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2]?i[2].trim():i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if((i=this.rules.nptable.exec(e))&&(o={type:"table",header:w(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/\n$/,"").split("\n"):[]}).header.length===o.align.length){for(e=e.substring(i[0].length),p=0;p<o.align.length;p++)/^ *-+: *$/.test(o.align[p])?o.align[p]="right":/^ *:-+: *$/.test(o.align[p])?o.align[p]="center":/^ *:-+ *$/.test(o.align[p])?o.align[p]="left":o.align[p]=null;for(p=0;p<o.cells.length;p++)o.cells[p]=w(o.cells[p],o.header.length);this.tokens.push(o)}else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),l={type:"list_start",ordered:f=1<(a=i[2]).length,start:f?+a:"",loose:!1},this.tokens.push(l),n=!(c=[]),g=(i=i[0].match(this.rules.item)).length,p=0;p<g;p++)h=(o=i[p]).length,~(o=o.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(h-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+h+"}","gm"),"")),p!==g-1&&(s=y.bullet.exec(i[p+1])[0],(1<a.length?1===s.length:1<s.length||this.options.smartLists&&s!==a)&&(e=i.slice(p+1).join("\n")+e,p=g-1)),r=n||/\n\n(?!\s*$)/.test(o),p!==g-1&&(n="\n"===o.charAt(o.length-1),r=r||n),r&&(l.loose=!0),v=void 0,(m=/^\[[ xX]\] /.test(o))&&(v=" "!==o[1],o=o.replace(/^\[[ xX]\] +/,"")),u={type:"list_item_start",task:m,checked:v,loose:r},c.push(u),this.tokens.push(u),this.token(o,!1),this.tokens.push({type:"list_item_end"});if(l.loose)for(g=c.length,p=0;p<g;p++)c[p].loose=!0;this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):k(i[0]):i[0]});else if(t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),i[3]&&(i[3]=i[3].substring(1,i[3].length-1)),d=i[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[d]||(this.tokens.links[d]={href:i[2],title:i[3]});else if((i=this.rules.table.exec(e))&&(o={type:"table",header:w(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/\n$/,"").split("\n"):[]}).header.length===o.align.length){for(e=e.substring(i[0].length),p=0;p<o.align.length;p++)/^ *-+: *$/.test(o.align[p])?o.align[p]="right":/^ *:-+: *$/.test(o.align[p])?o.align[p]="center":/^ *:-+ *$/.test(o.align[p])?o.align[p]="left":o.align[p]=null;for(p=0;p<o.cells.length;p++)o.cells[p]=w(o.cells[p].replace(/^ *\| *| *\| *$/g,""),o.header.length);this.tokens.push(o)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2].charAt(0)?1:2,text:i[1]});else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var n={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:h,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:h,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/};function u(e,t){if(this.options=t||m.defaults,this.links=e,this.rules=n.normal,this.renderer=this.options.renderer||new r,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=n.pedantic:this.options.gfm&&(this.options.breaks?this.rules=n.breaks:this.rules=n.gfm)}function r(e){this.options=e||m.defaults}function i(){}function c(e){this.tokens=[],this.token=null,this.options=e||m.defaults,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new t}function t(){this.seen={}}function k(e,t){if(t){if(k.escapeTest.test(e))return e.replace(k.escapeReplace,function(e){return k.replacements[e]})}else if(k.escapeTestNoEncode.test(e))return e.replace(k.escapeReplaceNoEncode,function(e){return k.replacements[e]});return e}function p(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function e(n,e){return n=n.source||n,e=e||"",{replace:function(e,t){return t=(t=t.source||t).replace(/(^|[^\[])\^/g,"$1"),n=n.replace(e,t),this},getRegex:function(){return new RegExp(n,e)}}}function a(e,t,n){if(e){try{var r=decodeURIComponent(p(n)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!o.test(n)&&(n=function(e,t){s[" "+e]||(/^[^:]+:\/*[^/]*$/.test(e)?s[" "+e]=e+"/":s[" "+e]=x(e,"/",!0));return e=s[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}n._punctuation="!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~",n.em=e(n.em).replace(/punctuation/g,n._punctuation).getRegex(),n._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,n._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,n._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,n.autolink=e(n.autolink).replace("scheme",n._scheme).replace("email",n._email).getRegex(),n._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,n.tag=e(n.tag).replace("comment",y._comment).replace("attribute",n._attribute).getRegex(),n._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,n._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,n._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,n.link=e(n.link).replace("label",n._label).replace("href",n._href).replace("title",n._title).getRegex(),n.reflink=e(n.reflink).replace("label",n._label).getRegex(),n.normal=d({},n),n.pedantic=d({},n.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:e(/^!?\[(label)\]\((.*?)\)/).replace("label",n._label).getRegex(),reflink:e(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",n._label).getRegex()}),n.gfm=d({},n.normal,{escape:e(n.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),n.gfm.url=e(n.gfm.url,"i").replace("email",n.gfm._extended_email).getRegex(),n.breaks=d({},n.gfm,{br:e(n.br).replace("{2,}","*").getRegex(),text:e(n.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),u.rules=n,u.output=function(e,t,n){return new u(t,n).output(e)},u.prototype.output=function(e){for(var t,n,r,i,a,s,o="";e;)if(a=this.rules.escape.exec(e))e=e.substring(a[0].length),o+=k(a[1]);else if(a=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(a[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(a[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(a[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0])&&(this.inRawBlock=!1),e=e.substring(a[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):k(a[0]):a[0];else if(a=this.rules.link.exec(e)){var l=g(a[2],"()");if(-1<l){var c=4+a[1].length+l;a[2]=a[2].substring(0,l),a[0]=a[0].substring(0,c).trim(),a[3]=""}e=e.substring(a[0].length),this.inLink=!0,r=a[2],i=this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))?(r=t[1],t[3]):"":a[3]?a[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),o+=this.outputLink(a,{href:u.escapes(r),title:u.escapes(i)}),this.inLink=!1}else if((a=this.rules.reflink.exec(e))||(a=this.rules.nolink.exec(e))){if(e=e.substring(a[0].length),t=(a[2]||a[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){o+=a[0].charAt(0),e=a[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(a,t),this.inLink=!1}else if(a=this.rules.strong.exec(e))e=e.substring(a[0].length),o+=this.renderer.strong(this.output(a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.em.exec(e))e=e.substring(a[0].length),o+=this.renderer.em(this.output(a[6]||a[5]||a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.code.exec(e))e=e.substring(a[0].length),o+=this.renderer.codespan(k(a[2].trim(),!0));else if(a=this.rules.br.exec(e))e=e.substring(a[0].length),o+=this.renderer.br();else if(a=this.rules.del.exec(e))e=e.substring(a[0].length),o+=this.renderer.del(this.output(a[1]));else if(a=this.rules.autolink.exec(e))e=e.substring(a[0].length),r="@"===a[2]?"mailto:"+(n=k(this.mangle(a[1]))):n=k(a[1]),o+=this.renderer.link(r,null,n);else if(this.inLink||!(a=this.rules.url.exec(e))){if(a=this.rules.text.exec(e))e=e.substring(a[0].length),this.inRawBlock?o+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):k(a[0]):a[0]):o+=this.renderer.text(k(this.smartypants(a[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{if("@"===a[2])r="mailto:"+(n=k(a[0]));else{for(;s=a[0],a[0]=this.rules._backpedal.exec(a[0])[0],s!==a[0];);n=k(a[0]),r="www."===a[1]?"http://"+n:n}e=e.substring(a[0].length),o+=this.renderer.link(r,null,n)}return o},u.escapes=function(e){return e?e.replace(u.rules._escapes,"$1"):e},u.prototype.outputLink=function(e,t){var n=t.href,r=t.title?k(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,k(e[1]))},u.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},u.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),.5<Math.random()&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},r.prototype.code=function(e,t,n){var r=(t||"").match(/\S*/)[0];if(this.options.highlight){var i=this.options.highlight(e,r);null!=i&&i!==e&&(n=!0,e=i)}return r?'<pre><code class="'+this.options.langPrefix+k(r,!0)+'">'+(n?e:k(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:k(e,!0))+"</code></pre>"},r.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},r.prototype.html=function(e){return e},r.prototype.heading=function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},r.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},r.prototype.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},r.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},r.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},r.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},r.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n"+(t=t&&"<tbody>"+t+"</tbody>")+"</table>\n"},r.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},r.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},r.prototype.strong=function(e){return"<strong>"+e+"</strong>"},r.prototype.em=function(e){return"<em>"+e+"</em>"},r.prototype.codespan=function(e){return"<code>"+e+"</code>"},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(e){return"<del>"+e+"</del>"},r.prototype.link=function(e,t,n){if(null===(e=a(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<a href="'+k(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>"},r.prototype.image=function(e,t,n){if(null===(e=a(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},r.prototype.text=function(e){return e},i.prototype.strong=i.prototype.em=i.prototype.codespan=i.prototype.del=i.prototype.text=function(e){return e},i.prototype.link=i.prototype.image=function(e,t,n){return""+n},i.prototype.br=function(){return""},c.parse=function(e,t){return new c(t).parse(e)},c.prototype.parse=function(e){this.inline=new u(e.links,this.options),this.inlineText=new u(e.links,d({},this.options,{renderer:new i})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},c.prototype.next=function(){return this.token=this.tokens.pop(),this.token},c.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},c.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},c.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,p(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,i="",a="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});a+=this.renderer.tablerow(n)}return this.renderer.table(i,a);case"blockquote_start":for(a="";"blockquote_end"!==this.next().type;)a+=this.tok();return this.renderer.blockquote(a);case"list_start":a="";for(var s=this.token.ordered,o=this.token.start;"list_end"!==this.next().type;)a+=this.tok();return this.renderer.list(a,s,o);case"list_item_start":a="";var l=this.token.loose,c=this.token.checked,u=this.token.task;for(this.token.task&&(a+=this.renderer.checkbox(c));"list_item_end"!==this.next().type;)a+=l||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(a,u,c);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var h='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(h);console.log(h)}},t.prototype.slug=function(e){var t=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t))for(var n=t;this.seen[n]++,t=n+"-"+this.seen[n],this.seen.hasOwnProperty(t););return this.seen[t]=0,t},k.escapeTest=/[&<>"']/,k.escapeReplace=/[&<>"']/g,k.replacements={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},k.escapeTestNoEncode=/[<>"']|&(?!#?\w+;)/,k.escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;)/g;var s={},o=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function h(){}function d(e){for(var t,n,r=arguments,i=1;i<arguments.length;i++)for(n in t=r[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function w(e,t){var n=e.replace(/\|/g,function(e,t,n){for(var r=!1,i=t;0<=--i&&"\\"===n[i];)r=!r;return r?"|":" |"}).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function x(e,t,n){if(0===e.length)return"";for(var r=0;r<e.length;){var i=e.charAt(e.length-r-1);if(i!==t||n){if(i===t||!n)break;r++}else r++}return e.substr(0,e.length-r)}function g(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=0,r=0;r<e.length;r++)if("\\"===e[r])r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&--n<0)return r;return-1}function f(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function m(e,n,r){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(r||"function"==typeof n){r||(r=n,n=null),f(n=d({},m.defaults,n||{}));var i,a,s=n.highlight,t=0;try{i=l.lex(e,n)}catch(e){return r(e)}a=i.length;function o(t){if(t)return n.highlight=s,r(t);var e;try{e=c.parse(i,n)}catch(e){t=e}return n.highlight=s,t?r(t):r(null,e)}if(!s||s.length<3)return o();if(delete n.highlight,!a)return o();for(;t<i.length;t++)!function(n){"code"!==n.type?--a||o():s(n.text,n.lang,function(e,t){return e?o(e):null==t||t===n.text?--a||o():(n.text=t,n.escaped=!0,void(--a||o()))})}(i[t])}else try{return f(n=n&&d({},m.defaults,n)),c.parse(l.lex(e,n),n)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(n||m.defaults).silent)return"<p>An error occurred:</p><pre>"+k(e.message+"",!0)+"</pre>";throw e}}h.exec=h,m.options=m.setOptions=function(e){return d(m.defaults,e),m},m.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new r,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}},m.defaults=m.getDefaults(),m.Parser=c,m.parser=c.parse,m.Renderer=r,m.TextRenderer=i,m.Lexer=l,m.lexer=l.lex,m.InlineLexer=u,m.inlineLexer=u.output,m.Slugger=t,m.parse=m,v.exports=m}()}),we={},xe={markdown:function(e){return{url:e}},mermaid:function(e){return{url:e}},iframe:function(e,t){return{html:'<iframe src="'+e+'" '+(t||"width=100% height=400")+"></iframe>"}},video:function(e,t){return{html:'<video src="'+e+'" '+(t||"controls")+">Not Support</video>"}},audio:function(e,t){return{html:'<audio src="'+e+'" '+(t||"controls")+">Not Support</audio>"}},code:function(e,t){var n=e.match(/\.(\w+)$/);return"md"===(n=t||n&&n[1])&&(n="markdown"),{url:e,lang:n}}},_e=function(i,e){var a=this;this.config=i,this.router=e,this.cacheTree={},this.toc=[],this.cacheTOC={},this.linkTarget=i.externalLinkTarget||"_blank",this.linkRel="_blank"===this.linkTarget?i.externalLinkRel||"noopener":"",this.contentBase=e.getBasePath();var s,t=this._initRenderer();this.heading=t.heading;var n=i.markdown||{};s=r(n)?n(ke,t):(ke.setOptions(d(n,{renderer:d(t,n.renderer)})),ke),this._marked=s,this.compile=function(n){var r=!0,e=o(function(e){r=!1;var t="";return n?(t=c(n)?s(n):s.parser(n),t=i.noEmoji?t:function(e){return e.replace(/<(pre|template|code)[^>]*?>[\s\S]+?<\/(pre|template|code)>/g,function(e){return e.replace(/:/g,"__colon__")}).replace(/:(\w+?):/gi,window.emojify||de).replace(/__colon__/g,":")}(t),pe.clear(),t):n})(n),t=a.router.parse().file;return r?a.toc=a.cacheTOC[t]:a.cacheTOC[t]=[].concat(a.toc),e}};_e.prototype.compileEmbed=function(e,t){var n,r=ge(t),i=r.str,a=r.config;if(t=i,a.include){var s;if(H(e)||(e=D(this.contentBase,I(this.router.getCurrentPath()),e)),a.type&&(s=xe[a.type]))(n=s.call(this,e,t)).type=a.type;else{var o="code";/\.(md|markdown)/.test(e)?o="markdown":/\.mmd/.test(e)?o="mermaid":/\.html?/.test(e)?o="iframe":/\.(mp4|ogg)/.test(e)?o="video":/\.mp3/.test(e)&&(o="audio"),(n=xe[o].call(this,e,t)).type=o}return n.fragment=a.fragment,n}},_e.prototype._matchNotCompileLink=function(e){for(var t=this.config.noCompileLinks||[],n=0;n<t.length;n++){var r=t[n];if((we[r]||(we[r]=new RegExp("^"+r+"$"))).test(e))return e}},_e.prototype._initRenderer=function(){var e=new ke.Renderer,t=this.linkTarget,l=this.router,n=this.contentBase,c=this,r={};return r.heading=e.heading=function(e,t){var n=ge(e),r=n.str,i=n.config,a={level:t,title:r};/{docsify-ignore}/g.test(r)&&(r=r.replace("{docsify-ignore}",""),a.title=r,a.ignoreSubHeading=!0),/{docsify-ignore-all}/g.test(r)&&(r=r.replace("{docsify-ignore-all}",""),a.title=r,a.ignoreAllSubs=!0);var s=pe(i.id||r),o=l.toURL(l.getCurrentPath(),{id:s});return a.slug=o,c.toc.push(a),"<h"+t+' id="'+s+'"><a href="'+o+'" data-id="'+s+'" class="anchor"><span>'+r+"</span></a></h"+t+">"},r.code=function(e){return e.renderer.code=function(e,t){void 0===t&&(t="");var n=be.languages[t]||be.languages.markup;return'<pre v-pre data-lang="'+t+'"><code class="lang-'+t+'">'+be.highlight(e.replace(/@DOCSIFY_QM@/g,"`"),n)+"</code></pre>"}}({renderer:e}),r.link=function(e){var t=e.renderer,o=e.router,l=e.linkTarget,c=e.compilerClass;return t.link=function(e,t,n){void 0===t&&(t="");var r=[],i=ge(t),a=i.str,s=i.config;return t=a,H(e)||c._matchNotCompileLink(e)||s.ignore?(!H(e)&&e.startsWith("./")&&(e=document.URL.replace(/\/(?!.*\/).*/,"/").replace("#/./","")+e),r.push(0===e.indexOf("mailto:")?"":'target="'+l+'"')):(e===c.config.homepage&&(e="README"),e=o.toURL(e,null,o.getCurrentPath())),s.target&&r.push('target="'+s.target+'"'),s.disabled&&(r.push("disabled"),e="javascript:void(0)"),s.class&&r.push('class="'+s.class+'"'),s.id&&r.push('id="'+s.id+'"'),t&&r.push('title="'+t+'"'),'<a href="'+e+'" '+r.join(" ")+">"+n+"</a>"}}({renderer:e,router:l,linkTarget:t,compilerClass:c}),r.paragraph=function(e){return e.renderer.paragraph=function(e){return/^!&gt;/.test(e)?oe("tip",e):/^\?&gt;/.test(e)?oe("warn",e):"<p>"+e+"</p>"}}({renderer:e}),r.image=function(e){var t=e.renderer,h=e.contentBase,p=e.router;return t.image=function(e,t,n){var r=e,i=[],a=ge(t),s=a.str,o=a.config;if(t=s,o["no-zoom"]&&i.push("data-no-zoom"),t&&i.push('title="'+t+'"'),o.size){var l=o.size.split("x"),c=l[0],u=l[1];u?i.push('width="'+c+'" height="'+u+'"'):i.push('width="'+c+'" height="'+c+'"')}return o.class&&i.push('class="'+o.class+'"'),o.id&&i.push('id="'+o.id+'"'),H(e)||(r=D(h,I(p.getCurrentPath()),e)),0<i.length?'<img src="'+r+'" data-origin="'+e+'" alt="'+n+'" '+i.join(" ")+" />":'<img src="'+r+'" data-origin="'+e+'" alt="'+n+'"'+i+">"}}({renderer:e,contentBase:n,router:l}),r.list=function(e){return e.renderer.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+" "+[/<li class="task-list-item">/.test(e.split('class="task-list"')[0])?'class="task-list"':"",n&&1<n?'start="'+n+'"':""].join(" ").trim()+">"+e+"</"+r+">"}}({renderer:e}),r.listitem=function(e){return e.renderer.listitem=function(e){return/^(<input.*type="checkbox"[^>]*>)/.test(e)?'<li class="task-list-item"><label>'+e+"</label></li>":"<li>"+e+"</li>"}}({renderer:e}),e.origin=r,e},_e.prototype.sidebar=function(e,t){var n=this.toc,r=this.router.getCurrentPath(),i="";if(e)i=this.compile(e);else{for(var a=0;a<n.length;a++)if(n[a].ignoreSubHeading){var s=n[a].level;n.splice(a,1);for(var o=a;s<n[o].level&&o<n.length;o++)n.splice(o,1)&&o--&&a++;a--}var l=this.cacheTree[r]||le(n,t);i=se(l,"<ul>{inner}</ul>"),this.cacheTree[r]=l}return i},_e.prototype.subSidebar=function(e){if(e){var t=this.router.getCurrentPath(),n=this.cacheTree,r=this.toc;r[0]&&r[0].ignoreAllSubs&&r.splice(0),r[0]&&1===r[0].level&&r.shift();for(var i=0;i<r.length;i++)r[i].ignoreSubHeading&&r.splice(i,1)&&i--;var a=n[t]||le(r,e);return n[t]=a,this.toc=[],se(a)}this.toc=[]},_e.prototype.header=function(e,t){return this.heading(e,t)},_e.prototype.article=function(e){return this.compile(e)},_e.prototype.cover=function(e){var t=this.toc.slice(),n=this.compile(e);return this.toc=t.slice(),n};var Se=function(e){var t=function(e){var t=e.match(/^[ \t]*(?=\S)/gm);return t?Math.min.apply(Math,t.map(function(e){return e.length})):0}(e);if(0===t)return e;var n=new RegExp("^[ \\t]{"+t+"}","gm");return e.replace(n,"")},Ae={};function $e(e,i){var s=e.compiler,a=e.raw;void 0===a&&(a="");var t=e.fetch,n=Ae[a];if(n){var r=n.slice();return r.links=n.links,i(r)}var o=s._marked,l=o.lexer(a),c=[],u=o.InlineLexer.rules.link,h=l.links;l.forEach(function(e,a){"paragraph"===e.type&&(e.text=e.text.replace(new RegExp(u.source,"g"),function(e,t,n,r){var i=s.compileEmbed(n,r);return i&&c.push({index:a,embed:i}),e}))});var p=0;!function(e,s){var t,n=e.embedTokens,o=e.compile,l=(e.fetch,0),c=1;if(!n.length)return s({});for(;t=n[l++];){var r=function(a){return function(e){var t;if(e)if("markdown"===a.embed.type){var n=a.embed.url.split("/");n.pop(),n=n.join("/"),e=e.replace(/\[([^[\]]+)\]\(([^)]+)\)/g,function(e){var t=e.indexOf("(");return e.substring(t).startsWith("(.")?e.substring(0,t)+"("+window.location.protocol+"//"+window.location.host+n+"/"+e.substring(t+1,e.length-1)+")":e}),t=o.lexer(e)}else if("code"===a.embed.type){if(a.embed.fragment){var r=a.embed.fragment,i=new RegExp("(?:###|\\/\\/\\/)\\s*\\["+r+"\\]([\\s\\S]*)(?:###|\\/\\/\\/)\\s*\\["+r+"\\]");e=Se((e.match(i)||[])[1]||"").trim()}t=o.lexer("```"+a.embed.lang+"\n"+e.replace(/`/g,"@DOCSIFY_QM@")+"\n```\n")}else"mermaid"===a.embed.type?(t=[{type:"html",text:'<div class="mermaid">\n'+e+"\n</div>"}]).links={}:(t=[{type:"html",text:e}]).links={};s({token:a,embedToken:t}),++c>=l&&s({})}}(t);t.embed.url?L(t.embed.url).then(r):r(t.embed.html)}}({compile:o,embedTokens:c,fetch:t},function(e){var t=e.embedToken,n=e.token;if(n){var r=n.index+p;d(h,t.links),l=l.slice(0,r).concat(t,l.slice(r+1)),p+=t.length-1}else Ae[a]=l.concat(),l.links=Ae[a].links=h,i(l)})}var Ee=/([^{]*?)\w(?=\})/g,Ce={YYYY:"getFullYear",YY:"getYear",MM:function(e){return e.getMonth()+1},DD:"getDate",HH:"getHours",mm:"getMinutes",ss:"getSeconds",fff:"getMilliseconds"};function Fe(){var e=y(".markdown-section>script").filter(function(e){return!/template/.test(e.type)})[0];if(!e)return!1;var t=e.innerText.trim();if(!t)return!1;setTimeout(function(e){window.__EXECUTE_RESULT__=new Function(t)()},0)}function Le(e,t,n){return t="function"==typeof n?n(t):"string"==typeof n?function(r,i){var a=[],s=0;return r.replace(Ee,function(t,e,n){a.push(r.substring(s,n-1)),s=n+=t.length+1,a.push(i&&i[t]||function(e){return("00"+("string"==typeof Ce[t]?e[Ce[t]]():Ce[t](e))).slice(-t.length)})}),s!==r.length&&a.push(r.substring(s)),function(e){for(var t="",n=0,r=e||new Date;n<a.length;n++)t+="string"==typeof a[n]?a[n]:a[n](r);return t}}(n)(new Date(t)):t,e.replace(/{docsify-updated}/g,t)}function Te(e){e=e||"<h1>404 - Not found</h1>",this._renderTo(".markdown-section",e),this.config.loadSidebar||this._renderSidebar(),!1===this.config.executeScript||void 0===window.Vue||Fe()?this.config.executeScript&&Fe():setTimeout(function(e){var t=window.__EXECUTE_RESULT__;t&&t.$destroy&&t.$destroy(),window.__EXECUTE_RESULT__=(new window.Vue).$mount("#main")},0)}function Re(e){var t=e.config;e.compiler=new _e(t,e.router),window.__current_docsify_compiler__=e.compiler;var n=t.el||"#app",r=b("nav")||k("nav"),i=b(n),a="",s=v;if(i){if(t.repo&&(a+=function(e,t){return e?(/\/\//.test(e)||(e="https://github.com/"+e),'<a href="'+(e=e.replace(/^git\+/,""))+'" target="'+(t=t||"_blank")+'" class="github-corner" aria-label="View source on Github"><svg viewBox="0 0 250 250" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>'):""}(t.repo,t.cornerExternalLinkTarge)),t.coverpage&&(a+=function(){var e=", 100%, 85%";return'<section class="cover show" style="background: '+("linear-gradient(to left bottom, hsl("+Math.floor(255*Math.random())+e+") 0%,hsl("+Math.floor(255*Math.random())+e+") 100%)")+'"><div class="cover-main">\x3c!--cover--\x3e</div><div class="mask"></div></section>'}()),t.logo){var o=/^data:image/.test(t.logo),l=/(?:http[s]?:)?\/\//.test(t.logo),c=/^\./.test(t.logo);o||l||c||(t.logo=D(e.router.getBasePath(),t.logo))}a+=function(e){var t=e.name?e.name:"",n='<button class="sidebar-toggle" aria-label="Menu"><div class="sidebar-toggle-button"><span></span><span></span><span></span></div></button><aside class="sidebar">'+(e.name?'<h1 class="app-name"><a class="app-name-link" data-nosearch>'+(e.logo?'<img alt="'+t+'" src='+e.logo+">":t)+"</a></h1>":"")+'<div class="sidebar-nav">\x3c!--sidebar--\x3e</div></aside>';return(g?n+"<main>":"<main>"+n)+'<section class="content"><article class="markdown-section" id="main">\x3c!--main--\x3e</article></section></main>'}(t),e._renderTo(i,a,!0)}else e.rendered=!0;t.mergeNavbar&&g?s=b(".sidebar"):(r.classList.add("app-nav"),t.repo||r.classList.add("no-badge")),t.loadNavbar&&x(s,r),t.themeColor&&(p.head.appendChild(k("div",function(e){return"<style>:root{--theme-color: "+e+";}</style>"}(t.themeColor)).firstElementChild),function(n){if(!(window.CSS&&window.CSS.supports&&window.CSS.supports("(--v:red)"))){var e=y("style:not(.inserted),link");[].forEach.call(e,function(e){if("STYLE"===e.nodeName)T(e,n);else if("LINK"===e.nodeName){var t=e.getAttribute("href");if(!/\.css$/.test(t))return;L(t).then(function(e){var t=k("style",e);f.appendChild(t),T(t,n)})}})}}(t.themeColor)),e._updateRender(),A(v,"ready")}var Oe={};function Pe(e){this.config=e}function ze(e){var t=location.href.indexOf("#");location.replace(location.href.slice(0,0<=t?t:0)+"#"+e)}Pe.prototype.getBasePath=function(){return this.config.basePath},Pe.prototype.getFile=function(e,t){void 0===e&&(e=this.getCurrentPath());var n=this.config,r=this.getBasePath(),i="string"==typeof n.ext?n.ext:".md";return e=(e=function(e,t){return new RegExp("\\.("+t.replace(/^\./,"")+"|html)$","g").test(e)?e:/\/$/g.test(e)?e+"README"+t:""+e+t}(e=n.alias?function e(t,n,r){var i=Object.keys(n).filter(function(e){return(Oe[e]||(Oe[e]=new RegExp("^"+e+"$"))).test(t)&&t!==r})[0];return i?e(t.replace(Oe[i],n[i]),n,t):t}(e,n.alias):e,i))==="/README"+i&&n.homepage||e,e=H(e)?e:D(r,e),t&&(e=e.replace(new RegExp("^"+r),"")),e},Pe.prototype.onchange=function(e){void 0===e&&(e=h),e()},Pe.prototype.getCurrentPath=function(){},Pe.prototype.normalize=function(){},Pe.prototype.parse=function(){},Pe.prototype.toURL=function(e,t,n){var r=n&&"#"===e[0],i=this.parse(U(e));if(i.query=d({},i.query,t),e=(e=i.path+q(i.query)).replace(/\.md(\?)|\.md$/,"$1"),r){var a=n.indexOf("?");e=(0<a?n.substring(0,a):n)+e}if(this.config.relativePath&&0!==e.indexOf("/")){var s=n.substring(0,n.lastIndexOf("/")+1);return B(Z(s+e))}return B("/"+e)};var je=function(r){function e(e){r.call(this,e),this.mode="hash"}return r&&(e.__proto__=r),((e.prototype=Object.create(r&&r.prototype)).constructor=e).prototype.getBasePath=function(){var e=window.location.pathname||"",t=this.config.basePath;return/^(\/|https?:)/g.test(t)?t:B(e+"/"+t)},e.prototype.getCurrentPath=function(){var e=location.href,t=e.indexOf("#");return-1===t?"":e.slice(t+1)},e.prototype.onchange=function(n){void 0===n&&(n=h);var r=!1;_("click",function(e){var t="A"===e.target.tagName?e.target:e.target.parentNode;"A"!==t.tagName||/_blank/.test(t.target)||(r=!0)}),_("hashchange",function(e){var t=r?"navigate":"history";r=!1,n({event:e,source:t})})},e.prototype.normalize=function(){var e=this.getCurrentPath();if("/"===(e=U(e)).charAt(0))return ze(e);ze("/"+e)},e.prototype.parse=function(e){void 0===e&&(e=location.href);var t="",n=e.indexOf("#");0<=n&&(e=e.slice(n+1));var r=e.indexOf("?");return 0<=r&&(t=e.slice(r+1),e=e.slice(0,r)),{path:e,file:this.getFile(e,!0),query:M(t)}},e.prototype.toURL=function(e,t,n){return"#"+r.prototype.toURL.call(this,e,t,n)},e}(Pe),Ne=function(t){function e(e){t.call(this,e),this.mode="history"}return t&&(e.__proto__=t),((e.prototype=Object.create(t&&t.prototype)).constructor=e).prototype.getCurrentPath=function(){var e=this.getBasePath(),t=window.location.pathname;return e&&0===t.indexOf(e)&&(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash},e.prototype.onchange=function(r){void 0===r&&(r=h),_("click",function(e){var t="A"===e.target.tagName?e.target:e.target.parentNode;if("A"===t.tagName&&!/_blank/.test(t.target)){e.preventDefault();var n=t.href;window.history.pushState({key:n},"",n),r({event:e,source:"navigate"})}}),_("popstate",function(e){r({event:e,source:"history"})})},e.prototype.parse=function(e){void 0===e&&(e=location.href);var t="",n=e.indexOf("?");0<=n&&(t=e.slice(n+1),e=e.slice(0,n));var r=D(location.origin),i=e.indexOf(r);return-1<i&&(e=e.slice(i+r.length)),{path:e,file:this.getFile(e),query:M(t)}},e}(Pe);var Me={};function qe(e){e.router.normalize(),e.route=e.router.parse(),v.setAttribute("data-page",e.route.file)}function He(e){!function(e){function t(e){return v.classList.toggle("close")}null!=(e=m(e))&&(_(e,"click",function(e){e.stopPropagation(),t()}),g&&_(v,"click",function(e){return v.classList.contains("close")&&t()}))}("button.sidebar-toggle",e.router),function(e){null!=(e=m(e))&&_(e,"click",function(e){var t=e.target;"A"===t.nodeName&&t.nextSibling&&t.nextSibling.classList.contains("app-sub-sidebar")&&A(t.parentNode,"collapse")})}(".sidebar",e.router),e.config.coverpage?g||_("scroll",P):v.classList.add("sticky")}function Ie(t,n,r,i,a,e){t=e?t:t.replace(/\/$/,""),(t=I(t))&&L(a.router.getFile(t+r)+n,!1,a.config.requestHeaders).then(i,function(e){return Ie(t,n,r,i,a)})}var Be=Object.freeze({__proto__:null,cached:o,hyphenate:i,hasOwn:l,merge:d,isPrimitive:c,noop:h,isFn:r,inBrowser:!0,isMobile:g,supportsPushState:u,parseQuery:M,stringifyQuery:q,isAbsolutePath:H,getParentPath:I,cleanPath:B,resolvePath:Z,getPath:D,replaceSlug:U});function Ze(){this._init()}var De,Ue,Ye,We=Ze.prototype;function Ge(e,t,n){return Ye&&Ye.abort&&Ye.abort(),Ye=L(e,!0,n)}We._init=function(){var e=this;e.config=s(),function(n){n._hooks={},n._lifecycle={},["init","mounted","beforeEach","afterEach","doneEach","ready"].forEach(function(e){var t=n._hooks[e]=[];n._lifecycle[e]=function(e){return t.push(e)}})}(e),function(t){[].concat(t.config.plugins).forEach(function(e){return r(e)&&e(t._lifecycle,t)})}(e),R(e,"init"),function(t){var e,n=t.config;e="history"===(n.routerMode||"hash")&&u?new Ne(n):new je(n),t.router=e,qe(t),Me=t.route,e.onchange(function(e){qe(t),t._updateRender(),Me.path!==t.route.path?(t.$fetch(h,t.$resetEvents.bind(t,e.source)),Me=t.route):t.$resetEvents(e.source)})}(e),Re(e),He(e),function(t){var e=t.config.loadSidebar;if(t.rendered){var n=z(t.router,".sidebar-nav",!0,!0);e&&n&&(n.parentNode.innerHTML+=window.__SUB_SIDEBAR__),t._bindEventOnRendered(n),t.$resetEvents(),R(t,"doneEach"),R(t,"ready")}else t.$fetch(function(e){return R(t,"ready")})}(e),R(e,"mounted")},We.route={},(De=We)._renderTo=function(e,t,n){var r=m(e);r&&(r[n?"outerHTML":"innerHTML"]=t)},De._renderSidebar=function(e){var t=this.config,n=t.maxLevel,r=t.subMaxLevel,i=t.loadSidebar;if(t.hideSidebar)return document.querySelector("aside.sidebar").remove(),document.querySelector("button.sidebar-toggle").remove(),document.querySelector("section.content").style.right="unset",document.querySelector("section.content").style.left="unset",document.querySelector("section.content").style.position="relative",document.querySelector("section.content").style.width="100%",null;this._renderTo(".sidebar-nav",this.compiler.sidebar(e,n));var a=z(this.router,".sidebar-nav",!0,!0);i&&a?a.parentNode.innerHTML+=this.compiler.subSidebar(r)||"":this.compiler.subSidebar(),this._bindEventOnRendered(a)},De._bindEventOnRendered=function(e){var t=this.config.autoHeader;if(function(e){var t=b(".cover.show");te=t?t.offsetHeight:0;var n=m(".sidebar"),r=[];null!=n&&(r=y(n,"li"));for(var i=0,a=r.length;i<a;i+=1){var s=r[i],o=s.querySelector("a");if(o){var l=o.getAttribute("href");if("/"!==l){var c=e.parse(l),u=c.query.id,h=c.path;u&&(l=re(h,u))}l&&(Q[decodeURIComponent(l)]=s)}}if(!g){var p=e.getCurrentPath();S("scroll",function(){return ne(p)}),_("scroll",function(){return ne(p)}),_(n,"mouseover",function(){J=!0}),_(n,"mouseleave",function(){J=!1})}}(this.router),t&&e){var n=m("#main"),r=n.children[0];r&&"H1"!==r.tagName&&x(n,k("div",this.compiler.header(e.innerText,1)).children[0])}},De._renderNav=function(e){e&&this._renderTo("nav",this.compiler.compile(e)),this.config.loadNavbar&&z(this.router,"nav")},De._renderMain=function(r,i,a){var s=this;if(void 0===i&&(i={}),!r)return Te.call(this,r);R(this,"beforeEach",r,function(e){function t(){i.updatedAt&&(n=Le(n,i.updatedAt,s.config.formatUpdated)),R(s,"afterEach",n,function(e){return Te.call(s,e)})}var n;s.isHTML?(n=s.result=r,t(),a()):$e({compiler:s.compiler,raw:e},function(e){n=s.compiler.compile(e),t(),a()})})},De._renderCover=function(e,t){var n=m(".cover");if(A(m("main"),t?"add":"remove","hidden"),e){A(n,"add","show");var r=this.coverIsHTML?e:this.compiler.cover(e),i=r.trim().match('<p><img.*?data-origin="(.*?)"[^a]+alt="(.*?)">([^<]*?)</p>$');if(i){if("color"===i[2])n.style.background=i[1]+(i[3]||"");else{var a=i[1];A(n,"add","has-mask"),H(i[1])||(a=D(this.router.getBasePath(),i[1])),n.style.backgroundImage="url("+a+")",n.style.backgroundSize="cover",n.style.backgroundPosition="center center"}r=r.replace(i[0],"")}this._renderTo(".cover-main",r),P()}else A(n,"remove","show")},De._updateRender=function(){!function(e){var t=m(".app-name-link"),n=e.config.nameLink,r=e.route.path;if(t)if(c(e.config.nameLink))t.setAttribute("href",n);else if("object"==typeof n){var i=Object.keys(n).filter(function(e){return-1<r.indexOf(e)})[0];t.setAttribute("href",n[i])}}(this)},(Ue=We)._loadSideAndNav=function(e,t,n,r){var i=this;return function(){if(!n)return r();Ie(e,t,n,function(e){i._renderSidebar(e),r()},i,!0)}},Ue._fetch=function(n){var r=this;void 0===n&&(n=h);var e=this.route,i=e.path,a=q(e.query,["id"]),t=this.config,s=t.loadNavbar,o=t.requestHeaders,l=t.loadSidebar,c=this.router.getFile(i),u=Ge(c+a,0,o);this.isHTML=/\.html$/g.test(c),u.then(function(e,t){return r._renderMain(e,t,r._loadSideAndNav(i,a,l,n))},function(e){r._fetchFallbackPage(c,a,n)||r._fetch404(c,a,n)}),s&&Ie(i,a,s,function(e){return r._renderNav(e)},this,!0)},Ue._fetchCover=function(){var t=this,e=this.config,n=e.coverpage,r=e.requestHeaders,i=this.route.query,a=I(this.route.path);if(n){var s=null,o=this.route.path;if("string"==typeof n)"/"===o&&(s=n);else if(Array.isArray(n))s=-1<n.indexOf(o)&&"_coverpage";else{var l=n[o];s=!0===l?"_coverpage":l}var c=Boolean(s)&&this.config.onlyCover;return s?(s=this.router.getFile(a+s),this.coverIsHTML=/\.html$/g.test(s),L(s+q(i,["id"]),!1,r).then(function(e){return t._renderCover(e,c)})):this._renderCover(null,c),c}},Ue.$fetch=function(e,t){var n=this;function r(){R(n,"doneEach"),e()}void 0===e&&(e=h),void 0===t&&(t=this.$resetEvents.bind(this)),this._fetchCover()?r():this._fetch(function(){t(),r()})},Ue._fetchFallbackPage=function(n,r,i){var a=this;void 0===i&&(i=h);var e=this.config,t=e.requestHeaders,s=e.fallbackLanguages,o=e.loadSidebar;if(!s)return!1;var l=n.split("/")[1];if(-1===s.indexOf(l))return!1;var c=n.replace(new RegExp("^/"+l),"");return Ge(c+r,0,t).then(function(e,t){return a._renderMain(e,t,a._loadSideAndNav(n,r,o,i))},function(){return a._fetch404(n,r,i)}),!0},Ue._fetch404=function(e,t,n){var r=this;void 0===n&&(n=h);var i=this.config,a=i.loadSidebar,s=i.requestHeaders,o=i.notFoundPage,l=this._loadSideAndNav(e,t,a,n);if(o){var c=function(t,e){var n,r,i=e.notFoundPage,a="_404"+(e.ext||".md");switch(typeof i){case"boolean":r=a;break;case"string":r=i;break;case"object":r=(n=Object.keys(i).sort(function(e,t){return t.length-e.length}).find(function(e){return t.match(new RegExp("^"+e))}))&&i[n]||a}return r}(e,this.config);return Ge(this.router.getFile(c),0,s).then(function(e,t){return r._renderMain(e,t,l)},function(){return r._renderMain(null,{},l)}),!0}return this._renderMain(null,{},l),!1},We.$resetEvents=function(e){var t=this,n=this.config.auto2top;"history"!==e&&(t.route.query.id&&ie(t.route.path,t.route.query.id),"navigate"===e&&n&&function(e){void 0===e&&(e=0),ae.scrollTop=!0===e?0:Number(e)}(n)),this.config.loadNavbar&&z(this.router,"nav")},window.Docsify={util:Be,dom:e,get:L,slugify:pe,version:"4.11.3"},window.DocsifyCompiler=_e,window.marked=ke,window.Prism=be,function(e){var t=document.readyState;if("complete"===t||"interactive"===t)return setTimeout(e,0);document.addEventListener("DOMContentLoaded",e)}(function(e){return new Ze})}();

/*
 * Docsix - v0.1.0
 * https://github.com/swanix/docsix
 * @license MIT
*/

"use strict";

const menuGlobalTemplate = `
<div class="menu-global-sections">
    ${menuItems.map(item => `
      <a class="menu-global-item" href="${item.link}">
        <span class="menu-global-item-icon">${item.icon}</span>
        ${item.name ? `<span class="menu-global-item-text">${item.name}</span>`:` `}
      </a>
    `).join('')}
</div>
`;

const menuGlobalStyles = /*html*/ `
<style>

:root {
  --primary: #000000;
  --body-bg: #F7F7F7;

  /* Menu Global */
  --menu-global-bg: var(--sidebar-bg-menu-global, black);
  --menu-global-width: 68px;
  --menu-global-item-height: 72px;
  --menu-global-font-size: 12px;
  --menu-global-font: 'Roboto', sans-serif;
  --menu-global-item-icon-size: 24px;
  --menu-global-item-text: rgba(255,255,255,0.9);
  --menu-global-item-radius: 8px; 
  /* Hover */
  --menu-global-item-text-hover: rgba(255,255,255,0.9);
  --menu-global-item-bg-hover: rgba(255,255,255,0.12);
  /* Active */
  --menu-global-item-text-active: rgba(255,255,255,1);
  --menu-global-item-icon-active: rgba(255,255,255,1);
  --menu-global-item-bg-active: var(--sidebar-bg, #262626);
}

/* Docsify */

.sidebar {
  left: 68px;
  transform: translateX(0px);
}

main > .content {
  margin-left: calc(var(--sidebar-width) + 74px);
}

.sidebar-toggle .sidebar-toggle-button {
  left: 68px;
  display: none;
}

/* Navigation menu */

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

body {
  overscroll-behavior: none;
} 

#menu-global {
  position: fixed;
  left: 0;
  top: 0;
  width: var(--menu-global-width);
  height: 100vh;
  overflow: auto;
  z-index: 9999;
  background: var(--menu-global-bg);
}

@media (max-width: 700px) {
  .content {
    padding: 80px 40px;
    overflow: auto;
  }
  #menu-global {
    display: none;
  }
  .menu-container {
    display: none;
  }
}

@media (max-width: 600px) {
  .content {
    padding: 80px 20px;
    overflow: auto;
  }
}


#menu-global .menu-global-item {
  width: var(--menu-global-width);
  height: var(--menu-global-item-height);
  font-size: var(--menu-global-font-size);
  font-family: var(--menu-global-font);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--menu-global-item-text);
  text-decoration: none;
  transition: 0.3s;
  font-weight: 400;
}

#menu-global .menu-global-item:hover {
  color: var(--menu-global-item-text-hover);
  background: var(--menu-global-item-bg-hover);
  border-top-left-radius: var(--menu-global-item-radius);
  border-bottom-left-radius: var(--menu-global-item-radius);
}

#menu-global .menu-global-item.active {
  color: var(--menu-global-item-text-active);
  border-top-left-radius: var(--menu-global-item-radius);
  border-bottom-left-radius: var(--menu-global-item-radius);
  background: var(--menu-global-item-bg-active);
  background-image: linear-gradient(to bottom, var(--sidebar-bg-overlay, rgba(0,0,0, 0.1)), var(--sidebar-bg-overlay, rgba(0,0,0, 0.1)));
}

#menu-global .menu-global-item-icon {
  font-size: var(--menu-global-item-icon-size);
  font-family: var(--menu-global-font);
  color: var(--menu-global-item-text);
}

#menu-global .menu-global-item-icon {
  height: 32px;
}

#menu-global .active .menu-global-item-icon {
  color: var(--menu-global-item-icon-active);
}

#menu-global .menu-global-item-text {
  margin-top: 5px;
}

#menu-global .menu-global-sections {
  list-style: none;
  padding: 0;
  margin: 0;
}
  
</style>
`;

function createMenu() {
  let menuGlobal = document.createElement('div');
  menuGlobal.id = "menu-global";
  menuGlobal.innerHTML = menuGlobalTemplate + menuGlobalStyles;

  document.body.insertAdjacentElement("afterbegin", menuGlobal);
  addMenuActiveClass();
}

function addMenuActiveClass() {
  let sectionPathname = window.location.pathname;
  let menuLink = document.getElementsByClassName('menu-global-item');

  for (let i = 0; i < menuLink.length; i++) {
    if(menuLink[i].pathname === sectionPathname) {
      menuLink[i].classList.add("active");
    }
  } 
};

function initMenu() {
  let sectionLocation = window.location.hostname;
  if(sectionLocation !== 'localhost') {
    createMenu();
  }
};


document.addEventListener('DOMContentLoaded', function() {
  initMenu();
});
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var componentQuery = createCommonjsModule(function (module, exports) {
function one(selector, el) {
  return el.querySelector(selector);
}

exports = module.exports = function (selector, el) {
  el = el || document;
  return one(selector, el);
};

exports.all = function (selector, el) {
  el = el || document;
  return el.querySelectorAll(selector);
};

exports.engine = function (obj) {
  if (!obj.one) throw new Error('.one callback required');
  if (!obj.all) throw new Error('.all callback required');
  one = obj.one;
  exports.all = obj.all;
  return exports;
};
});

var componentQuery_1 = componentQuery.all;
var componentQuery_2 = componentQuery.engine;

/**
 * Module dependencies.
 */

try {
  var query$1 = componentQuery;
} catch (err) {
  var query$1 = componentQuery;
}

/**
 * Element prototype.
 */

var proto = Element.prototype;

/**
 * Vendor function.
 */

var vendor = proto.matches || proto.webkitMatchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector;

/**
 * Expose `match()`.
 */

var componentMatchesSelector = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (!el || el.nodeType !== 1) return false;
  if (vendor) return vendor.call(el, selector);
  var nodes = query$1.all(selector, el.parentNode);
  for (var i = 0; i < nodes.length; ++i) {
    if (nodes[i] == el) return true;
  }
  return false;
}

/**
 * Module Dependencies
 */

try {
  var matches = componentMatchesSelector;
} catch (err) {
  var matches = componentMatchesSelector;
}

/**
 * Export `closest`
 */

var componentClosest = closest;

/**
 * Closest
 *
 * @param {Element} el
 * @param {String} selector
 * @param {Element} scope (optional)
 */

function closest(el, selector, scope) {
  scope = scope || document.documentElement;

  // walk up the dom
  while (el && el !== scope) {
    if (matches(el, selector)) return el;
    el = el.parentNode;
  }

  // check scope for match
  return matches(el, selector) ? el : null;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".docsify-pagination-container{display:flex;flex-wrap:wrap;justify-content:space-between;overflow:hidden;margin:5em 0 1em;border-top:1px solid rgba(0,0,0,.07)}.pagination-item{margin-top:2.5em}.pagination-item a,.pagination-item a:hover{text-decoration:none}.pagination-item a{color:currentColor}.pagination-item a:hover .pagination-item-title{text-decoration:underline}.pagination-item:not(:last-child) a .pagination-item-label,.pagination-item:not(:last-child) a .pagination-item-subtitle,.pagination-item:not(:last-child) a .pagination-item-title{opacity:.3;transition:all .2s}.pagination-item:last-child .pagination-item-label,.pagination-item:not(:last-child) a:hover .pagination-item-label{opacity:.6}.pagination-item:not(:last-child) a:hover .pagination-item-title{opacity:1}.pagination-item-label{font-size:.8em}.pagination-item-label>*{line-height:1;vertical-align:middle}.pagination-item-label svg{height:.8em;width:auto;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1px}.pagination-item--next{margin-left:auto;text-align:right}.pagination-item--next svg{margin-left:.5em}.pagination-item--previous svg{margin-right:.5em}.pagination-item-title{font-size:1.6em}.pagination-item-subtitle{text-transform:uppercase;opacity:.3}";
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * constants
 */
var ROUTER_MODE = {
  HASH: 'hash',
  HISTORY: 'history'
};
var DEFAULT_OPTIONS = function DEFAULT_OPTIONS(config) {
  return {
    previousText: 'PREVIOUS',
    nextText: 'NEXT',
    crossChapter: false,
    crossChapterText: false,
    routerMode: config.routerMode || ROUTER_MODE.HASH
  };
};
var CONTAINER_CLASSNAME = 'docsify-pagination-container';

/**
 * basic utilities
 */
function toArray(elements) {
  return Array.prototype.slice.call(elements);
}
function findChapter(element) {
  var container = componentClosest(element, 'div > ul > li');
  return componentQuery('p', container);
}
function findHyperlink(element) {
  return element.href ? element : componentQuery('a', element);
}
function isALinkTo(path, element) {
  if (arguments.length === 1) {
    return function (element) {
      return isALinkTo(path, element);
    };
  }
  return decodeURIComponent(element.getAttribute('href').split('?')[0]) === decodeURIComponent(path);
}

/**
 * core renderer
 */

var Link = function () {
  function Link(element) {
    classCallCheck(this, Link);

    if (!element) {
      return;
    }
    this.chapter = findChapter(element);
    this.hyperlink = findHyperlink(element);
  }

  createClass(Link, [{
    key: 'toJSON',
    value: function toJSON() {
      if (!this.hyperlink) {
        return;
      }
      return {
        name: this.hyperlink.innerText,
        href: this.hyperlink.getAttribute('href'),
        chapterName: this.chapter && this.chapter.innerText || ''
      };
    }
  }]);
  return Link;
}();

function pagination(vm, _ref) {
  var crossChapter = _ref.crossChapter,
      routerMode = _ref.routerMode;

  try {
    var path = routerMode === ROUTER_MODE.HISTORY ? vm.route.path : '#' + vm.route.path;
    var all = toArray(componentQuery.all('.sidebar li a')).filter(function (element) {
      return !componentMatchesSelector(element, '.section-link');
    });
    var active = all.find(isALinkTo(path));
    var group = toArray((componentClosest(active, 'ul') || {}).children).filter(function (element) {
      return element.tagName.toUpperCase() === 'LI';
    });
    var index = crossChapter ? all.findIndex(isALinkTo(path)) : group.findIndex(function (item) {
      var hyperlink = findHyperlink(item);
      return hyperlink && isALinkTo(path, hyperlink);
    });

    var links = crossChapter ? all : group;

    return {
      prev: new Link(links[index - 1]).toJSON(),
      next: new Link(links[index + 1]).toJSON()
    };
  } catch (error) {
    return {};
  }
}

var template = {
  container: function container() {
    return '<div class="' + CONTAINER_CLASSNAME + '"></div>';
  },
  inner: function inner(data, options) {
    return [data.prev && '\n        <div class="pagination-item pagination-item--previous">\n          <a href="' + data.prev.href + '">\n            <div class="pagination-item-label">\n              <svg class="icon" width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">\n                <polyline fill="none" vector-effect="non-scaling-stroke" points="8,2 2,8 8,14"/>\n              </svg>\n              <span>' + options.previousText + '</span>\n            </div>\n            <div class="pagination-item-title">' + data.prev.name + '</div>\n      ', data.prev && options.crossChapterText && '<div class="pagination-item-subtitle">' + data.prev.chapterName + '</div>', data.prev && '</a>\n        </div>\n      ', data.next && '\n        <div class="pagination-item pagination-item--next">\n          <a href="' + data.next.href + '">\n            <div class="pagination-item-label">\n              <span>' + options.nextText + '</span>\n              <svg width="10" height="16" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">\n                <polyline fill="none" vector-effect="non-scaling-stroke" points="2,2 8,8 2,14"/>\n              </svg>\n            </div>\n            <div class="pagination-item-title">' + data.next.name + '</div>\n      ', data.next && options.crossChapterText && '<div class="pagination-item-subtitle">' + data.next.chapterName + '</div>', data.next && '</a>\n        </div>\n      '].filter(Boolean).join('');
  }
};

/**
 * installation
 */
function install(hook, vm) {
  var options = _extends({}, DEFAULT_OPTIONS(vm.config), vm.config.pagination || {});

  function render() {
    var container = componentQuery('.' + CONTAINER_CLASSNAME);
    if (!container) {
      return;
    }
    container.innerHTML = template.inner(pagination(vm, options), options);
  }

  hook.afterEach(function (html) {
    return html + template.container();
  });
  hook.doneEach(function () {
    return render();
  });
}

window.$docsify = window.$docsify || {};

window.$docsify.plugins = [install].concat(window.$docsify.plugins || []);

})));

/*
 * docsify-copy-code
 * v2.1.0
 * https://github.com/jperasmus/docsify-copy-code
 * (c) 2017-2019 JP Erasmus <jperasmus11@gmail.com>
 * MIT license
 */
(function() {
    "use strict";
    function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function(obj) {
                return typeof obj;
            };
        } else {
            _typeof = function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }
        return _typeof(obj);
    }
    function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === "undefined") {
            return;
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        var style = document.createElement("style");
        style.type = "text/css";
        if (insertAt === "top") {
            if (head.firstChild) {
                head.insertBefore(style, head.firstChild);
            } else {
                head.appendChild(style);
            }
        } else {
            head.appendChild(style);
        }
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }
    var css = ".docsify-copy-code-button,.docsify-copy-code-button span{cursor:pointer;transition:all .25s ease}.docsify-copy-code-button{position:absolute;z-index:1;top:0;right:0;overflow:visible;padding:.65em .8em;border:0;border-radius:0;outline:0;font-size:1em;background:grey;background:var(--theme-color,grey);color:#fff;opacity:0}.docsify-copy-code-button span{border-radius:3px;background:inherit;pointer-events:none}.docsify-copy-code-button .error,.docsify-copy-code-button .success{position:absolute;z-index:-100;top:50%;left:0;padding:.5em .65em;font-size:.825em;opacity:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.docsify-copy-code-button.error .error,.docsify-copy-code-button.success .success{opacity:1;-webkit-transform:translate(-115%,-50%);transform:translate(-115%,-50%)}.docsify-copy-code-button:focus,pre:hover .docsify-copy-code-button{opacity:1}";
    styleInject(css);
    function docsifyCopyCode(hook, vm) {
        hook.doneEach(function() {
            var targetElms = Array.apply(null, document.querySelectorAll("pre[data-lang]"));
            var i18n = {
                buttonText: "Copy to clipboard",
                errorText: "Error",
                successText: "Copied"
            };
            if (vm.config.copyCode) {
                Object.keys(i18n).forEach(function(key) {
                    var textValue = vm.config.copyCode[key];
                    if (typeof textValue === "string") {
                        i18n[key] = textValue;
                    } else if (_typeof(textValue) === "object") {
                        Object.keys(textValue).some(function(match) {
                            var isMatch = location.href.indexOf(match) > -1;
                            i18n[key] = isMatch ? textValue[match] : i18n[key];
                            return isMatch;
                        });
                    }
                });
            }
            var template = [ '<button class="docsify-copy-code-button">', '<span class="label">'.concat(i18n.buttonText, "</span>"), '<span class="error">'.concat(i18n.errorText, "</span>"), '<span class="success">'.concat(i18n.successText, "</span>"), "</button>" ].join("");
            targetElms.forEach(function(elm) {
                elm.insertAdjacentHTML("beforeend", template);
            });
        });
        hook.mounted(function() {
            var listenerHost = document.querySelector(".content");
            listenerHost.addEventListener("click", function(evt) {
                var isCopyCodeButton = evt.target.classList.contains("docsify-copy-code-button");
                if (isCopyCodeButton) {
                    var buttonElm = evt.target.tagName === "BUTTON" ? evt.target : evt.target.parentNode;
                    var range = document.createRange();
                    var preElm = buttonElm.parentNode;
                    var codeElm = preElm.querySelector("code");
                    var selection = window.getSelection();
                    range.selectNode(codeElm);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    try {
                        var successful = document.execCommand("copy");
                        if (successful) {
                            buttonElm.classList.add("success");
                            setTimeout(function() {
                                buttonElm.classList.remove("success");
                            }, 1e3);
                        }
                    } catch (err) {
                        console.error("docsify-copy-code: ".concat(err));
                        buttonElm.classList.add("error");
                        setTimeout(function() {
                            buttonElm.classList.remove("error");
                        }, 1e3);
                    }
                    selection = window.getSelection();
                    if (typeof selection.removeRange === "function") {
                        selection.removeRange(range);
                    } else if (typeof selection.removeAllRanges === "function") {
                        selection.removeAllRanges();
                    }
                }
            });
        });
    }
    if (document.querySelector('link[href*="docsify-copy-code"]')) {
        console.warn("[Deprecation] Link to external docsify-copy-code stylesheet is no longer necessary.");
    }
    window.DocsifyCopyCodePlugin = {
        init: function init() {
            return function(hook, vm) {
                hook.ready(function() {
                    console.warn("[Deprecation] Manually initializing docsify-copy-code using window.DocsifyCopyCodePlugin.init() is no longer necessary.");
                });
            };
        }
    };
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = [ docsifyCopyCode ].concat(window.$docsify.plugins || []);
})();
//# sourceMappingURL=docsify-copy-code.js.map

/*
 * docsify-tabs
 * v1.4.2
 * https://jhildenbiddle.github.io/docsify-tabs/
 * (c) 2018-2020 John Hildenbiddle
 * MIT license
 */
!function(){"use strict";!function(t,a){void 0===a&&(a={});var o=a.insertAt;if(t&&"undefined"!=typeof document){var c=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css","top"===o&&c.firstChild?c.insertBefore(e,c.firstChild):c.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}}(':root{--docsifytabs-border-color:#ededed;--docsifytabs-border-px:1px;--docsifytabs-margin:1.5em 0;--docsifytabs-tab-background:#f8f8f8;--docsifytabs-tab-background--active:var(--docsifytabs-content-background);--docsifytabs-tab-color:#999;--docsifytabs-tab-color--active:inherit;--docsifytabs-tab-highlight-px:3px;--docsifytabs-tab-highlight-color:var(--theme-color,currentColor);--docsifytabs-tab-padding:0.6em 1em;--docsifytabs-content-background:inherit;--docsifytabs-content-padding:1.5rem}.docsify-tabs:before,.docsify-tabs__tab{z-index:1}.docsify-tabs__tab--active,.docsify-tabs__tab:focus{z-index:2}.docsify-tabs{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative}.docsify-tabs:before{content:"";-ms-flex-order:0;order:0;-ms-flex:1;flex:1 1}.docsify-tabs__tab{-ms-flex-order:-1;order:-1;position:relative;margin:0;font-size:inherit;appearance:none}.docsify-tabs__content{visibility:hidden;position:absolute;overflow:hidden;height:0;width:100%}.docsify-tabs__content :first-child{margin-top:0}.docsify-tabs__content :first-child~:last-child,.docsify-tabs__content :last-child{margin-bottom:0}.docsify-tabs__tab--active+.docsify-tabs__content{visibility:visible;position:relative;overflow:auto;height:auto}[class*=docsify-tabs--]{margin:1.5em 0;margin:var(--docsifytabs-margin)}[class*=docsify-tabs--] .docsify-tabs__tab{padding:.6em 1em;padding:var(--docsifytabs-tab-padding);background:#f8f8f8;background:var(--docsifytabs-tab-background);color:#999;color:var(--docsifytabs-tab-color)}[class*=docsify-tabs--] .docsify-tabs__tab--active{background:inherit;background:var(--docsifytabs-tab-background--active);color:inherit;color:var(--docsifytabs-tab-color--active)}[class*=docsify-tabs--] .docsify-tabs__content{padding:1.5rem;padding:var(--docsifytabs-content-padding);background:inherit;background:var(--docsifytabs-content-background)}.docsify-tabs--classic .docsify-tabs__content,.docsify-tabs--classic .docsify-tabs__tab,.docsify-tabs--classic:before{border-width:1px;border-color:#ededed;border:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color)}.docsify-tabs--classic:before{margin-right:1px;margin-right:var(--docsifytabs-border-px);border-top-width:0;border-left-width:0;border-right-width:0}.docsify-tabs--classic .docsify-tabs__tab:first-of-type{border-top-left-radius:var(--docsifytabs-border-radius-px)}.docsify-tabs--classic .docsify-tabs__tab:last-of-type{border-top-right-radius:var(--docsifytabs-border-radius-px)}.docsify-tabs--classic .docsify-tabs__tab~.docsify-tabs__tab{margin-left:-1px;margin-left:calc(0px - var(--docsifytabs-border-px))}.docsify-tabs--classic .docsify-tabs__tab--active{border-bottom-width:0;box-shadow:inset 0 3px 0 0 var(--theme-color,currentColor);box-shadow:inset 0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color)}.docsify-tabs--classic .docsify-tabs__content{margin-top:-1px;margin-top:calc(0px - var(--docsifytabs-border-px));border-top:0;border-radius:0;border-radius:0 var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px)}.docsify-tabs--material .docsify-tabs__tab{margin-bottom:2px;margin-bottom:calc(var(--docsifytabs-tab-highlight-px) - var(--docsifytabs-border-px));background:transparent;border:0}.docsify-tabs--material .docsify-tabs__tab--active{box-shadow:0 3px 0 0 var(--theme-color,currentColor);box-shadow:0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color);background:transparent}.docsify-tabs--material .docsify-tabs__content{border-width:1px 0;border-color:#ededed;border-left:0 solid var(--docsifytabs-border-color);border-bottom:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color);border-right:0 solid var(--docsifytabs-border-color);border-top:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color)}',{insertAt:"top"});var m="tabs:replace",g={tabsContainer:"content",tabBlock:"docsify-tabs",tabButton:"docsify-tabs__tab",tabButtonActive:"docsify-tabs__tab--active",tabContent:"docsify-tabs__content"},h={codeMarkup:/(```[\s\S]*?```)/gm,commentReplaceMarkup:new RegExp("\x3c!-- ".concat(m," (.*) --\x3e")),tabBlockMarkup:/[\r\n]*(\s*)(<!-+\s+tabs:\s*?start\s+-+>)[\r\n]+([\s|\S]*?)[\r\n\s]+(<!-+\s+tabs:\s*?end\s+-+>)/m,tabCommentMarkup:/[\r\n]*(\s*)<!-+\s+tab:\s*(.*)\s+-+>[\r\n]+([\s\S]*?)[\r\n]*\s*(?=<!-+\s+tabs?:)/m,tabHeadingMarkup:/[\r\n]*(\s*)#{1,6}\s*[*_]{2}\s*(.*[^\s])\s*[*_]{2}[\r\n]+([\s\S]*?)(?=#{1,6}\s*[*_]{2}|<!-+\s+tabs:\s*?end\s+-+>)/m},v={persist:!0,sync:!0,theme:"classic",tabComments:!0,tabHeadings:!0};function y(t,a){var o=1<arguments.length&&void 0!==a&&a;if(t.classList.contains(g.tabButton)){var c=t,e=c.getAttribute("data-tab"),s=document.querySelector(".".concat(g.tabsContainer)),r=c.parentNode,i=Array.apply(null,r.querySelectorAll(".".concat(g.tabButton))),n=r.offsetTop;if(i.forEach(function(t){return t.classList.remove(g.tabButtonActive)}),c.classList.add(g.tabButtonActive),!o){if(v.persist){var d=(s?Array.apply(null,s.querySelectorAll(".".concat(g.tabBlock))):[]).indexOf(r),b=JSON.parse(sessionStorage.getItem(window.location.href))||{};b[d]=e,sessionStorage.setItem(window.location.href,JSON.stringify(b))}if(v.sync){var f=s?Array.apply(null,s.querySelectorAll(".".concat(g.tabButton,'[data-tab="').concat(e,'"]'))):[],l=JSON.parse(sessionStorage.getItem("*"))||[];f.forEach(function(t){y(t,!0)}),window.scrollBy(0,0-(n-r.offsetTop)),0<l.indexOf(e)&&l.splice(l.indexOf(e),1),0!==l.indexOf(e)&&(l.unshift(e),sessionStorage.setItem("*",JSON.stringify(l)))}}}}function s(){var t=(window.location.hash.match(/(?:id=)([^&]+)/)||[])[1],a=t&&".".concat(g.tabBlock," #").concat(-1<t.indexOf("%")?decodeURIComponent(t):t);if(t&&document.querySelector(a)){var o,c=document.querySelector("#".concat(t));if(c.closest)o=c.closest(".".concat(g.tabContent));else for(o=c.parentNode;o!==document.body&&!o.classList.contains("".concat(g.tabContent));)o=o.parentNode;y(o.previousElementSibling)}}window&&(window.$docsify=window.$docsify||{},window.$docsify.tabs=window.$docsify.tabs||{},Object.keys(window.$docsify.tabs).forEach(function(t){Object.prototype.hasOwnProperty.call(v,t)&&(v[t]=window.$docsify.tabs[t])}),window.$docsify.tabs.version="1.4.2",(v.tabComments||v.tabHeadings)&&(window.$docsify.plugins=[].concat(function(t,a){var o=!1;t.beforeEach(function(t){return(o=h.tabBlockMarkup.test(t))&&(t=function(c){for(var t,a,o=c.match(h.codeMarkup)||[],e=o.map(function(t,a){var o="\x3c!-- ".concat(m," CODEBLOCK").concat(a," --\x3e");return c=c.replace(t,o),o}),s=v.theme?"".concat(g.tabBlock,"--").concat(v.theme):"";null!==(t=h.tabBlockMarkup.exec(c));){var r=t[0],i="",n="",d=v.tabComments&&h.tabCommentMarkup.test(r),b=v.tabHeadings&&h.tabHeadingMarkup.test(r),f=t[1],l=t[2],y=t[4];if(d||b)for(i="\x3c!-- ".concat(m,' <div class="').concat([g.tabBlock,s].join(" "),'"> --\x3e'),n="\n".concat(f,"\x3c!-- ").concat(m," </div> --\x3e");null!==(a=(v.tabComments?h.tabCommentMarkup.exec(r):null)||(v.tabHeadings?h.tabHeadingMarkup.exec(r):null));){var u=(a[2]||"[Tab]").trim(),p=(a[3]||"").trim();r=r.replace(a[0],["\n".concat(f,"\x3c!-- ").concat(m,' <button class="').concat(g.tabButton,'" data-tab="').concat(u.toLowerCase(),'">').concat(u,"</button> --\x3e"),"\n".concat(f,"\x3c!-- ").concat(m,' <div class="').concat(g.tabContent,'" data-tab-content="').concat(u.toLowerCase(),'"> --\x3e'),"\n\n".concat(f).concat(p),"\n\n".concat(f,"\x3c!-- ").concat(m," </div> --\x3e")].join(""))}r=(r=r.replace(l,i)).replace(y,n),c=c.replace(t[0],r)}return e.forEach(function(t,a){c=c.replace(t,o[a])}),c}(t)),t}),t.afterEach(function(t,a){o&&(t=function(t){for(var a;null!==(a=h.commentReplaceMarkup.exec(t));){var o=a[0],c=a[1]||"";t=t.replace(o,c)}return t}(t)),a(t)}),t.doneEach(function(){var t,a,c,e;o&&(t=document.querySelector(".".concat(g.tabsContainer)),a=t?Array.apply(null,t.querySelectorAll(".".concat(g.tabBlock))):[],c=JSON.parse(sessionStorage.getItem(window.location.href))||{},e=JSON.parse(sessionStorage.getItem("*"))||[],s(),a.forEach(function(a,t){var o=a.querySelector(".".concat(g.tabButtonActive));o||(v.sync&&e.length&&(o=e.map(function(t){return a.querySelector(".".concat(g.tabButton,'[data-tab="').concat(t,'"]'))}).filter(function(t){return t})[0]),!o&&v.persist&&(o=a.querySelector(".".concat(g.tabButton,'[data-tab="').concat(c[t],'"]'))),(o=o||a.querySelector(".".concat(g.tabButton)))&&o.classList.add(g.tabButtonActive))}))}),t.mounted(function(){var t=document.querySelector(".".concat(g.tabsContainer));t&&t.addEventListener("click",function(t){y(t.target)}),window.addEventListener("hashchange",s,!1)})},window.$docsify.plugins||[])))}();
//# sourceMappingURL=docsify-tabs.min.js.map
