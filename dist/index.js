!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.bekit=n():t.bekit=n()}(this,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=22)}([function(t,n,e){var r=e(1),o=e(6),i=e(7),u=e(14),c=e(19),a=e(20),s=Object.prototype.hasOwnProperty,l=i(function(t,n){if(c(n)||u(n))o(n,a(n),t);else for(var e in n)s.call(n,e)&&r(t,e,n[e])});t.exports=l},function(t,n,e){var r=e(2),o=e(5),i=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var u=t[n];i.call(t,n)&&o(u,e)&&(void 0!==e||n in t)||r(t,n,e)}},function(t,n,e){var r=e(3);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},function(t,n,e){var r=e(4),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,n){t.exports=function(t,n){return null==t?void 0:t[n]}},function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},function(t,n,e){var r=e(1),o=e(2);t.exports=function(t,n,e,i){var u=!e;e||(e={});for(var c=-1,a=n.length;++c<a;){var s=n[c],l=i?i(e[s],t[s],s,e,t):void 0;void 0===l&&(l=t[s]),u?o(e,s,l):r(e,s,l)}return e}},function(t,n,e){var r=e(8),o=e(13);t.exports=function(t){return r(function(n,e){var r=-1,i=e.length,u=i>1?e[i-1]:void 0,c=i>2?e[2]:void 0;for(u=t.length>3&&"function"==typeof u?(i--,u):void 0,c&&o(e[0],e[1],c)&&(u=i<3?void 0:u,i=1),n=Object(n);++r<i;){var a=e[r];a&&t(n,a,r,u)}return n})}},function(t,n,e){var r=e(9),o=e(10),i=e(12);t.exports=function(t,n){return i(o(t,n,r),t+"")}},function(t,n){t.exports=function(t){return t}},function(t,n,e){var r=e(11),o=Math.max;t.exports=function(t,n,e){return n=o(void 0===n?t.length-1:n,0),function(){for(var i=arguments,u=-1,c=o(i.length-n,0),a=Array(c);++u<c;)a[u]=i[n+u];u=-1;for(var s=Array(n+1);++u<n;)s[u]=i[u];return s[n]=e(a),r(t,this,s)}}},function(t,n){t.exports=function(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)}},function(t,n){t.exports=function(t){return t}},function(t,n){t.exports=function(){return!1}},function(t,n,e){var r=e(15),o=e(18);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,n,e){var r=e(16),o=e(17),i="[object AsyncFunction]",u="[object Function]",c="[object GeneratorFunction]",a="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var n=r(t);return n==u||n==c||n==i||n==a}},function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},function(t,n){var e=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=e}},function(t,n){t.exports=function(){return!1}},function(t,n,e){var r=e(21)(Object.keys,Object);t.exports=r},function(t,n){t.exports=function(t,n){return function(e){return t(n(e))}}},function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"default",function(){return a});var o={};e.r(o),e.d(o,"default",function(){return s});var i={};e.r(i),e.d(i,"Url",function(){return p}),e.d(i,"Ua",function(){return P}),e.d(i,"Factory",function(){return d}),e.d(i,"Time",function(){return S}),e.d(i,"Dom",function(){return w}),e.d(i,"Ls",function(){return O});var u={};e.r(u),e.d(u,"toast",function(){return j}),e.d(u,"messageBox",function(){return F}),e.d(u,"alert",function(){return k}),e.d(u,"confirm",function(){return A}),e.d(u,"prompt",function(){return L});var c={};e.r(c),e.d(c,"vueNotice",function(){return N});var a={},s={},l=e(0),f=e.n(l),p=function(){function t(n){var e={protocol:/\s(.+)\:\/\//,host:/(?:\s|\:\/\/)([^\:\/\r\n]+?)[\?\#\s\/]/,path:/[\w\s](\/.*?)[\?\#\s]/,params:/\?(.+?)[\#\/\s]/,hash:/\#(\w+)\s$/};for(var r in n=decodeURI(" "+n+" "),e){var o=e[r];this[r]="params"===r?o.exec(n)&&t.parseParams(o.exec(n)[1]):o.exec(n)&&o.exec(n)[1]}this.protocol=this.protocol||location.protocol.slice(0,-1),this.host=this.host||location.host,this.getFullPath()}return t.parseParams=function(t){return t.split("&").reduce(function(t,n){var e=n.split("=");return t[e[0]]=e[1],t},{})},t.stringifyParams=function(t){return t?Object.keys(t).map(function(n){return n+"="+t[n]}).join("&"):""},t.prototype.addParams=function(t){return this.params=f()({},this.params,t),this.getFullPath(),this},t.prototype.removeParams=function(t){var n=this;return this.params?("string"==typeof t&&(t=[t]),t.forEach(function(t){delete n.params[t]}),Object.keys(this.params).length||(this.params=null),this.getFullPath(),this):this},t.prototype.replaceParams=function(t){return this.addParams(t)},t.prototype.toString=function(){var n=this.protocol+"://",e=this.host,r=this.path||"",o=t.stringifyParams(this.params);return n+e+r+(o=o?"?"+o:"")+(this.hash?"#"+this.hash:"")},t.prototype.getFullPath=function(){var t=new RegExp(this.protocol+"://"+this.host);return this.fullPath=this.toString().replace(t,"")},t}(),d=function(){function t(){}return t.getSingle=function(t){var n;return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return void 0===n?n=t.apply(void 0,e):n}},t.getCache=function(t){var n={};return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var o=e.join(",");return o in n?n[o]:n[o]=t.apply(void 0,e)}},t.before=function(t,n){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return n.apply(void 0,e),t.apply(void 0,e)}},t.after=function(t,n){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var o=t.apply(void 0,e);return n.apply(void 0,e),o}},t}(),h=d.getSingle,v=navigator.userAgent;function g(){return/DealEase/i.test(v)}function m(){return/MicroMessenger/i.test(v)}function y(){return/iPhone|iPad|iPod/i.test(v)}function b(){return/Android/i.test(v)}function x(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(v)}function _(){return m()?"wx":g()?"yx":""}var C,P=function(){function t(){}return t.isDealEase=h(g),t.isWx=h(m),t.isIOS=h(y),t.isAndroid=h(b),t.isMob=h(x),t.getEnv=h(_),t}(),S=function(){function t(){}return t.format=function(t,n){var e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r={yyyy:t.getFullYear(),M:t.getMonth()+1,d:t.getDate(),Day:t.getDay(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds()},o={yy:r.yyyy%100,MM:Math.floor(r.M/10).toString()+r.M%10,dd:Math.floor(r.d/10).toString()+r.d%10,DD:e[r.Day],DC:["日","一","二","三","四","五","六"][r.Day],D:e[r.Day].slice(0,3),hh:Math.floor(r.h/10).toString()+r.h%10,mm:Math.floor(r.m/10).toString()+r.m%10,ss:Math.floor(r.s/10).toString()+r.s%10};return Object.keys(o).forEach(function(t){r[t]=o[t]}),n.replace(/(yyyy|yy|MM|M|dd|d|DD|DC|D|hh|h|mm|m|ss|s)/g,function(t,n){return r[n]})},t}(),w=function(){function t(){}return t.createElement=function(t,n){var e=document.createElement(t);for(var r in n)e.setAttribute(r,n[r]);return e},t.getElement=function(t){var n=t;return"string"==typeof n?document.querySelector(n):n},t.getDoc=function(){return"BackCompat"===document.compatMode?this.getDoc=function(){return document.body}:this.getDoc=function(){return document.documentElement},this.getDoc()},t.getViewPort=function(){var t=this.getDoc();return this.getViewPort=function(){return{width:t.clientWidth,height:t.clientHeight}},this.getViewPort()},t.getDocumentPort=function(){var t=this.getViewPort(),n=this.getDoc();return{width:Math.max(n.scrollWidth,t.width),height:Math.max(n.scrollHeight,t.height)}},t.getScroll=function(){var t=document.documentElement.scrollTop,n=document.documentElement.scrollLeft;return{top:0===t?document.body.scrollTop:t,left:0===n?document.body.scrollLeft:n}},t.isTopped=function(t){return this.getElement(t).getBoundingClientRect().top<0},t.isClient=function(t){var n=this.getElement(t).getBoundingClientRect();return n.top<this.getViewPort().height&&n.bottom>0},t.scrollTo=function(t,n){void 0===n&&(n=-30);var e=this.getElement(t).getBoundingClientRect(),r=this.getScroll().top;window.scrollTo(0,e.top+r+n)},t}(),D=function(){function t(t){var n=this.constructor;void 0===t&&(t={}),this.config=f()({},n.defaultConfig,t)}return t.prototype.set=function(t,n,e){return this._set(t,n,e,!1)},t.prototype.setSync=function(t,n,e){return this._set(t,n,e,!0)},t.prototype.get=function(t,n){var e=this;void 0===n&&(n=null);var r=this._getFullKey(t);return this._getValue(r).then(function(r){return r?e._getData(t,r):n})},t.prototype.getSync=function(t,n){void 0===n&&(n=null);var e=this._getFullKey(t),r=this._getValue(e,!0);return r?this._getData(t,r):n},t.prototype.getOrSet=function(t,n){var e=this;return n="function"==typeof n?n():n,this.get(t,null).then(function(r){return null===r?e.set(t,n).then(function(){return n}):r})},t.prototype.getOrSetSync=function(t,n){n="function"==typeof n?n():n;var e=this.getSync(t,null);return null===e?(this.setSync(t,n),n):e},t.prototype._set=function(t,n,e,r){void 0===r&&(r=!1);var o=this._getFullKey(t),i={$v:n};if(e){var u=Math.floor(+new Date/1e3);i.$ex=u+e}return this._setValue(o,i,r)},t.prototype._getData=function(t,n){return Math.floor(+new Date/1e3)>n.$ex?(this.remove(t),null):n.$v},t.prototype._getFullKey=function(t){return this.config.prefix+t},t.prototype._getOriginKey=function(t){var n=this.config.prefix.length;return t.substring(n)},t.defaultConfig={prefix:"cache|"},t}(),M=(C=function(t,n){return(C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}C(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),O=function(t){function n(n){var e=t.call(this,n)||this;return e.gcDoing=!1,e}return M(n,t),n.prototype.remove=function(t){var n=this;return"string"==typeof t&&(t=[t]),t.forEach(function(t){localStorage.removeItem(n._getFullKey(t))}),Promise.resolve()},n.prototype._setValue=function(t,n,e){void 0===e&&(e=!1),this._whetherDoGc()&&this._gc();try{localStorage.setItem(t,JSON.stringify(n))}catch(r){return this._isQuotaExceeded(r)?confirm("您的本地存储空间已满，会影响您的正常使用，是否清理空间后重试？")?(this._clear(),this._setValue(t,n)):!e&&Promise.resolve(!1):e?r:Promise.reject(r)}return!!e||Promise.resolve(!0)},n.prototype._getValue=function(t,n){void 0===n&&(n=!1),this._whetherDoGc()&&this._gc();var e=localStorage.getItem(t);if(!e)return n?null:Promise.resolve(null);var r=JSON.parse(e);return n?r:Promise.resolve(r)},n.prototype._whetherDoGc=function(){return Math.random()<this.config.gcRate&&!this.gcDoing},n.prototype._gc=function(){this.gcDoing=!0;for(var t=localStorage.length,n=0;n<t;n++){var e=localStorage.key(n);e&&~e.indexOf(this.config.prefix)&&this.get(this._getOriginKey(e))}this.gcDoing=!1},n.prototype._isQuotaExceeded=function(t){var n=!1;if(t&&t.code)switch(t.code){case 22:n=!0;break;case 1014:"NS_ERROR_DOM_QUOTA_REACHED"===t.name&&(n=!0)}return n},n.prototype._clear=function(){localStorage.clear()},n.defaultConfig={prefix:"#|",gcRate:.1},n}(D),B=w.createElement;var j=function(t){var n={message:"",type:"info",iconClass:"",duration:2500,timeWait:200};"string"==typeof t?f()(n,{message:t}):f()(n,t);var e=B("div",{class:"b-toast"}),r=B("i",{class:"bicon"}),o=B("div");n.iconClass&&(r.className=n.iconClass),e.classList.add("b-toast-"+n.type),o.innerHTML=n.message,e.appendChild(r),e.appendChild(o),document.body.appendChild(e),setTimeout(function(){e.classList.add("active")},50),setTimeout(function(){e.classList.remove("active")},n.duration),setTimeout(function(){e.parentNode.removeChild(e)},n.duration+n.timeWait)},T=w.createElement;function E(t,n,e){if(!t.inputPattern)return!0;var r=t.inputPattern.test(n.value);return e.innerHTML=r?"":t.inputErrorMessage,r}var F=function(t){var n={title:"",message:"",showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"确定",cancelButtonClass:"",confirmButtonClass:"",showInput:!1,inputPattern:null,inputErrorMessage:"格式不正确"};f()(n,t);var e=T("div",{class:"b-confirm-mask"}),r=T("div",{class:"b-confirm"});e.appendChild(r),r.appendChild(function(t){var n=T("div",{class:"b-confirm-header"});if(t.title){var e=T("div",{class:"b-confirm-title"});e.innerText=t.title,n.appendChild(e)}return n}(n));var o=T("div",{class:"b-confirm-content"});if(r.appendChild(o),n.message){var i=T("div",{class:"b-confirm-message"});i.innerText=n.message,o.appendChild(i)}var u=T("input",{class:"b-confirm-input"}),c=T("div",{class:"b-confirm-input-error"});if(n.showInput){var a=T("div",{class:"b-confirm-input-container"});a.appendChild(u),a.appendChild(c),u.addEventListener("input",function(t){var e=t.currentTarget;E(n,e,c)}),o.appendChild(a)}var s=T("div",{class:"b-confirm-footer"});r.appendChild(s);var l=T("button",{class:"b-btn b-btn-cancel"});n.showCancelButton&&(l.innerText=n.cancelButtonText,n.cancelButtonClass&&(l.className=n.cancelButtonClass),s.appendChild(l));var p=T("button",{class:"b-btn b-btn-confirm"});p.innerText=n.confirmButtonText,n.confirmButtonClass&&(p.className=n.confirmButtonClass),s.appendChild(p);var d=new Promise(function(t,r){p.addEventListener("click",function(){if(n.showInput){var r=u;E(n,r,c)&&(e.parentNode.removeChild(e),t({value:r.value,action:"confirm"}))}else e.parentNode.removeChild(e),t("confirm")}),l.addEventListener("click",function(){e.parentNode.removeChild(e),r("cancel")})});return document.body.appendChild(e),d};var k=function(t,n,e){var r={showCancelButton:!1,confirmButtonText:"确定",comfirmButtonClass:""};return f()(r,e,{title:n,message:t}),F(r)};var A=function(t,n,e){var r={showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"确定",cancelButtonClass:"",comfirmButtonClass:""};return f()(r,e,{title:n,message:t}),F(r)};var L=function(t,n,e){var r={showCancelButton:!0,showInput:!0,cancelButtonText:"取消",confirmButtonText:"确定",cancelButtonClass:"",comfirmButtonClass:""};return f()(r,e,{title:n,message:t}),F(r)},N={install:function(t,n){t.prototype.$toast=j,t.prototype.$messageBox=F,t.prototype.$alert=k,t.prototype.$confirm=A,t.prototype.$prompt=L}};e.d(n,"helper",function(){return R}),e.d(n,"filter",function(){return V}),e.d(n,"handler",function(){return I}),e.d(n,"notice",function(){return $}),e.d(n,"plugin",function(){return K});var R=i,V=r,I=o,$=u,K=c}])});