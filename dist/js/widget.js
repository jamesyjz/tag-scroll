var Zepto=function(){function t(t){return null==t?String(t):U[J.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return O.call(t,function(t){return null!=t})}function u(t){return t.length>0?E.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in A?A[t]:A[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||L[c(t)]?e:e+"px"}function h(t){var e,n;return _[t]||(e=P.createElement(t),P.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),_[t]=n),_[t]}function p(t){return"children"in t?N.call(t.children):E.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for($ in e)n&&(o(e[$])||G(e[$]))?(o(e[$])&&!o(t[$])&&(t[$]={}),G(e[$])&&!G(t[$])&&(t[$]=[]),d(t[$],e[$],n)):e[$]!==w&&(t[$]=e[$])}function m(t,e){return null==e?E(t):E(t).filter(e)}function v(t,n,r,i){return e(n)?n.call(t,r,i):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",r=n&&n.baseVal!==w;return e===w?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function b(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?E.parseJSON(t):t):t}catch(e){return t}}function x(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)x(t.childNodes[n],e)}var w,$,E,C,j,T,S=[],N=S.slice,O=S.filter,P=window.document,_={},A={},L={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},M=/^\s*<(\w+|!)[^>]*>/,Z=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,D=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,k=/^(?:body|html)$/i,z=/([A-Z])/g,R=["val","css","html","text","data","width","height","offset"],F=["after","prepend","before","append"],q=P.createElement("table"),H=P.createElement("tr"),I={tr:P.createElement("tbody"),tbody:q,thead:q,tfoot:q,td:H,th:H,"*":P.createElement("div")},V=/complete|loaded|interactive/,B=/^[\w-]*$/,U={},J=U.toString,X={},W=P.createElement("div"),Y={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},G=Array.isArray||function(t){return t instanceof Array};return X.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=W).appendChild(t),r=~X.qsa(i,e).indexOf(t),o&&W.removeChild(t),r},j=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},T=function(t){return O.call(t,function(e,n){return t.indexOf(e)==n})},X.fragment=function(t,e,n){var r,i,a;return Z.test(t)&&(r=E(P.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(D,"<$1></$2>")),e===w&&(e=M.test(t)&&RegExp.$1),e in I||(e="*"),a=I[e],a.innerHTML=""+t,r=E.each(N.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(i=E(r),E.each(n,function(t,e){R.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},X.Z=function(t,e){return t=t||[],t.__proto__=E.fn,t.selector=e||"",t},X.isZ=function(t){return t instanceof X.Z},X.init=function(t,n){var r;if(!t)return X.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&M.test(t))r=X.fragment(t,RegExp.$1,n),t=null;else{if(n!==w)return E(n).find(t);r=X.qsa(P,t)}else{if(e(t))return E(P).ready(t);if(X.isZ(t))return t;if(G(t))r=s(t);else if(i(t))r=[t],t=null;else if(M.test(t))r=X.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return E(n).find(t);r=X.qsa(P,t)}}return X.Z(r,t)},E=function(t,e){return X.init(t,e)},E.extend=function(t){var e,n=N.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},X.qsa=function(t,e){var n,i="#"==e[0],o=!i&&"."==e[0],a=i||o?e.slice(1):e,s=B.test(a);return r(t)&&s&&i?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:N.call(s&&!i?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},E.contains=P.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},E.type=t,E.isFunction=e,E.isWindow=n,E.isArray=G,E.isPlainObject=o,E.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},E.inArray=function(t,e,n){return S.indexOf.call(e,t,n)},E.camelCase=j,E.trim=function(t){return null==t?"":String.prototype.trim.call(t)},E.uuid=0,E.support={},E.expr={},E.map=function(t,e){var n,r,i,o=[];if(a(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return u(o)},E.each=function(t,e){var n,r;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},E.grep=function(t,e){return O.call(t,e)},window.JSON&&(E.parseJSON=JSON.parse),E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){U["[object "+e+"]"]=e.toLowerCase()}),E.fn={forEach:S.forEach,reduce:S.reduce,push:S.push,sort:S.sort,indexOf:S.indexOf,concat:S.concat,map:function(t){return E(E.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return E(N.apply(this,arguments))},ready:function(t){return V.test(P.readyState)&&P.body?t(E):P.addEventListener("DOMContentLoaded",function(){t(E)},!1),this},get:function(t){return t===w?N.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return S.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):E(O.call(this,function(e){return X.matches(e,t)}))},add:function(t,e){return E(T(this.concat(E(t,e))))},is:function(t){return this.length>0&&X.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):a(t)&&e(t.item)?N.call(t):E(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return E(n)},has:function(t){return this.filter(function(){return i(t)?E.contains(this,t):E(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:E(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:E(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?E(t).filter(function(){var t=this;return S.some.call(n,function(e){return E.contains(e,t)})}):1==this.length?E(X.qsa(this[0],t)):this.map(function(){return X.qsa(this,t)}):E()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=E(t));n&&!(i?i.indexOf(n)>=0:X.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return E(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=E.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(T(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return N.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return O.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return E.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=E(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){E(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){E(this[0]).before(t=E(t));for(var e;(e=t.children()).length;)t=e.first();E(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=E(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){E(this).replaceWith(E(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=E(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return E(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return E(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;E(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for($ in t)g(this,$,t[$]);else g(this,t,v(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:w},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){g(this,t)},this)})},prop:function(t,e){return t=Y[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(z,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?b(r):w},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?E(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=E(this),r=v(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r,i=this[0];if(!i)return;if(r=getComputedStyle(i,""),"string"==typeof e)return i.style[j(e)]||r.getPropertyValue(e);if(G(e)){var o={};return E.each(e,function(t,e){o[e]=i.style[j(e)]||r.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for($ in e)e[$]||0===e[$]?a+=c($)+":"+f($,e[$])+";":this.each(function(){this.style.removeProperty(c($))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(E(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?S.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){C=[];var n=y(this),r=v(this,t,e,n);r.split(/\s+/g).forEach(function(t){E(this).hasClass(t)||C.push(t)},this),C.length&&y(this,n+(n?" ":"")+C.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===w)return y(this,"");C=y(this),v(this,t,e,C).split(/\s+/g).forEach(function(t){C=C.replace(l(t)," ")}),y(this,C.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=E(this),i=v(this,t,n,y(this));i.split(/\s+/g).forEach(function(t){(e===w?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=k.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(E(t).css("margin-top"))||0,n.left-=parseFloat(E(t).css("margin-left"))||0,r.top+=parseFloat(E(e[0]).css("border-top-width"))||0,r.left+=parseFloat(E(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||P.body;t&&!k.test(t.nodeName)&&"static"==E(t).css("position");)t=t.offsetParent;return t})}},E.fn.detach=E.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});E.fn[t]=function(i){var o,a=this[0];return i===w?n(a)?a["inner"+e]:r(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=E(this),a.css(t,v(this,i,e,a[t]()))})}}),F.forEach(function(e,n){var r=n%2;E.fn[e]=function(){var e,i,o=E.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:X.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=E.contains(P.documentElement,i);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!i)return E(t).remove();i.insertBefore(t,e),s&&x(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},E.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return E(t)[e](this),this}}),X.Z.prototype=E.fn,X.uniq=T,X.deserializeValue=b,E.zepto=X,E}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=r(n),n.ns)var s=i(n.ns);return(v[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in b||!!e}function a(t){return x[t]||y&&b[t]||t}function s(n,i,s,u,l,h,p){var d=e(n),m=v[d]||(v[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var i=r(e);i.fn=s,i.sel=l,i.e in x&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}),i.del=h;var d=h||s;i.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(a(i.e),i.proxy,o(i,p))})}function u(t,r,i,s,u){var c=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,s).forEach(function(e){delete v[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(C,function(t,r){var i=n[t];e[t]=function(){return this[r]=w,i&&i.apply(n,arguments)},e[r]=$}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t)E.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var w=function(){return!0},$=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,C={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var a,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||i===!1||(i=r,r=n,n=f),(d(r)||r===!1)&&(i=r,r=f),i===!1&&(i=$),h.each(function(f,h){o&&(a=function(t){return u(h,t.type,i),i.apply(this,arguments)}),n&&(c=function(e){var r,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(r=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||i).apply(o,[r].concat(p.call(arguments,1)))):void 0}),s(h,e,i,r,n,c||a)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=$),i.each(function(){u(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in b&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(a,s){i=l(m(e)?t.Event(e):e),i._args=r,i.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),c(n)}}(Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||y,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,r,"ajaxSend",[t,e])}function a(t,e,r,i){var o=r.context,a="success";r.success.call(o,t,a,e),i&&i.resolveWith(o,[t,a,e]),n(r,o,"ajaxSuccess",[e,r,t]),u(a,e,r)}function s(t,e,r,i,o){var a=i.context;i.error.call(a,r,e,t),o&&o.rejectWith(a,[r,e,t]),n(i,a,"ajaxError",[r,i,t||e]),u(e,r,i)}function u(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==$?"json":x.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function d(e,n,r,i){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),i&&(n=r?i:i+"["+(s||"object"==o||"array"==o?n:"")+"]"),!i&&a?e.add(u.name,u.value):"array"==o||!r&&"object"==o?d(e,u,r,n):e.add(n,u)})}var m,v,g=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,$="application/json",E="text/html",C=/^\s*$/,j=y.createElement("a");j.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++g,l=y.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?a(r[0],p,e,n):s(null,u||"error",p,e,n),window[c]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:$,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,i=t.extend({},e||{}),u=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===i[m]&&(i[m]=t.ajaxSettings[m]);r(i),i.crossDomain||(n=y.createElement("a"),n.href=i.url,n.href=n.href,i.crossDomain=j.protocol+"//"+j.host!=n.protocol+"//"+n.host),i.url||(i.url=window.location.toString()),h(i);var p=i.dataType,d=/\?.+=\?/.test(i.url);if(d&&(p="jsonp"),i.cache!==!1&&(e&&e.cache===!0||"script"!=p&&"jsonp"!=p)||(i.url=f(i.url,"_="+Date.now())),"jsonp"==p)return d||(i.url=f(i.url,i.jsonp?i.jsonp+"=?":i.jsonp===!1?"":"callback=?")),t.ajaxJSONP(i,u);var g,b=i.accepts[p],x={},w=function(t,e){x[t.toLowerCase()]=[t,e]},$=/^([\w-]+:)\/\//.test(i.url)?RegExp.$1:window.location.protocol,E=i.xhr(),T=E.setRequestHeader;if(u&&u.promise(E),i.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",b||"*/*"),(b=i.mimeType||b)&&(b.indexOf(",")>-1&&(b=b.split(",",2)[0]),E.overrideMimeType&&E.overrideMimeType(b)),(i.contentType||i.contentType!==!1&&i.data&&"GET"!=i.type.toUpperCase())&&w("Content-Type",i.contentType||"application/x-www-form-urlencoded"),i.headers)for(v in i.headers)w(v,i.headers[v]);if(E.setRequestHeader=w,E.onreadystatechange=function(){if(4==E.readyState){E.onreadystatechange=c,clearTimeout(g);var e,n=!1;if(E.status>=200&&E.status<300||304==E.status||0==E.status&&"file:"==$){p=p||l(i.mimeType||E.getResponseHeader("content-type")),e=E.responseText;try{"script"==p?(1,eval)(e):"xml"==p?e=E.responseXML:"json"==p&&(e=C.test(e)?null:t.parseJSON(e))}catch(r){n=r}n?s(n,"parsererror",E,i,u):a(e,E,i,u)}else s(E.statusText||null,E.status?"error":"abort",E,i,u)}},o(E,i)===!1)return E.abort(),s(null,"abort",E,i,u),E;if(i.xhrFields)for(v in i.xhrFields)E[v]=i.xhrFields[v];var S="async"in i?i.async:!0;E.open(i.type,i.url,S,i.username,i.password);for(v in x)T.apply(E,x[v]);return i.timeout>0&&(g=setTimeout(function(){E.onreadystatechange=c,E.abort(),s(null,"timeout",E,i,u)},i.timeout)),E.send(i.data?i.data:null),E},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,a=e.split(/\s/),s=p(e,n,r),u=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(e){o.html(i?t("<div>").html(e.replace(b,"")).find(i):e),u&&u.apply(o,arguments)},t.ajax(s),this};var T=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},d(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(t,e){var n=t.documentElement,r="orientationchange"in window?"orientationchange":"resize",i=function(){var t=n.clientWidth,e=n.clientHeight;(t||e)&&(n.style.fontSize=50*(t/540)+"px")};t.addEventListener&&(e.addEventListener(r,i,!1),i())}(document,window);var region=[{name:"请选择",sub:["请选择"]},{name:"北京",sub:["请选择","东城区","西城区","崇文区","宣武区","朝阳区","海淀区","丰台区","石景山区","房山区","通州区","顺义区","昌平区","大兴区","怀柔区","平谷区","门头沟区","密云县","延庆县","其他"]},{name:"广东",sub:["请选择","广州","深圳","珠海","汕头","韶关","佛山","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","河源","阳江","清远","东莞","中山","潮州","揭阳","云浮","其他"]},{name:"上海",sub:["请选择","黄浦区","卢湾区","徐汇区","长宁区","静安区","普陀区","闸北区","虹口区","杨浦区","宝山区","闵行区","嘉定区","松江区","金山区","青浦区","南汇区","奉贤区","浦东新区","崇明县","其他"]},{name:"天津",sub:["请选择","和平区","河东区","河西区","南开区","河北区","红桥区","塘沽区","汉沽区","大港区","东丽区","西青区","北辰区","津南区","武清区","宝坻区","静海县","宁河县","蓟县","其他"]},{name:"重庆",sub:["请选择","渝中区","大渡口区","江北区","南岸区","北碚区","渝北区","巴南区","长寿区","双桥区","沙坪坝区","万盛区","万州区","涪陵区","黔江区","永川区","合川区","江津区","九龙坡区","南川区","綦江县","潼南县","荣昌县","璧山县","大足县","铜梁县","梁平县","开县","忠县","城口县","垫江县","武隆县","丰都县","奉节县","云阳县","巫溪县","巫山县","石柱土家族自治县","秀山土家族苗族自治县","酉阳土家族苗族自治县","彭水苗族土家族自治县","其他"]},{name:"辽宁",sub:["请选择","沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛","其他"]},{name:"江苏",sub:["请选择","南京","苏州","无锡","常州","镇江","南通","泰州","扬州","盐城","连云港","徐州","淮安","宿迁","其他"]},{name:"湖北",sub:["请选择","武汉","黄石","十堰","荆州","宜昌","襄樊","鄂州","荆门","孝感","黄冈","咸宁","随州","恩施土家族苗族自治州","仙桃","天门","潜江","神农架林区","其他"]},{name:"四川",sub:["请选择","成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","乐山","南充","眉山","宜宾","广安","达州","雅安","巴中","资阳","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝族自治州","其他"]},{name:"陕西",sub:["请选择","西安","铜川","宝鸡","咸阳","渭南","延安","汉中","榆林","安康","商洛","其他"]},{name:"河北",sub:["请选择","石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水","其他"]},{name:"山西",sub:["请选择","太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁","其他"]},{name:"河南",sub:["请选择","郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店","焦作","其他"]},{name:"吉林",sub:["请选择","长春","吉林","四平","辽源","通化","白山","松原","白城","延边朝鲜族自治州","其他"]},{name:"黑龙江",sub:["请选择","哈尔滨","齐齐哈尔","鹤岗","双鸭山","鸡西","大庆","伊春","牡丹江","佳木斯","七台河","黑河","绥化","大兴安岭地区","其他"]},{name:"内蒙古",sub:["请选择","呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","巴彦淖尔","乌兰察布","锡林郭勒盟","兴安盟","阿拉善盟","其他"]},{name:"山东",sub:["请选择","济南","青岛","淄博","枣庄","东营","烟台","潍坊","济宁","泰安","威海","日照","莱芜","临沂","德州","聊城","滨州","菏泽","其他"]},{name:"安徽",sub:["请选择","合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","巢湖","六安","亳州","池州","宣城","其他"]},{name:"浙江",sub:["请选择","杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水","其他"]},{name:"福建",sub:["请选择","福州","厦门","莆田","三明","泉州","漳州","南平","龙岩","宁德","其他"]},{name:"湖南",sub:["请选择","长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西土家族苗族自治州","其他"]},{name:"广西",sub:["请选择","南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","百色","贺州","河池","来宾","崇左","其他"]},{name:"江西",sub:["请选择","南昌","景德镇","萍乡","九江","新余","鹰潭","赣州","吉安","宜春","抚州","上饶","其他"]},{name:"贵州",sub:["请选择","贵阳","六盘水","遵义","安顺","铜仁地区","毕节地区","黔西南布依族苗族自治州","黔东南苗族侗族自治州","黔南布依族苗族自治州","其他"]},{name:"云南",sub:["请选择","昆明","曲靖","玉溪","保山","昭通","丽江","普洱","临沧","德宏傣族景颇族自治州","怒江傈僳族自治州","迪庆藏族自治州","大理白族自治州","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","西双版纳傣族自治州","其他"]},{name:"西藏",sub:["请选择","拉萨","那曲地区","昌都地区","林芝地区","山南地区","日喀则地区","阿里地区","其他"]},{name:"海南",sub:["请选择","海口","三亚","五指山","琼海","儋州","文昌","万宁","东方","澄迈县","定安县","屯昌县","临高县","白沙黎族自治县","昌江黎族自治县","乐东黎族自治县","陵水黎族自治县","保亭黎族苗族自治县","琼中黎族苗族自治县","其他"]},{name:"甘肃",sub:["请选择","兰州","嘉峪关","金昌","白银","天水","武威","酒泉","张掖","庆阳","平凉","定西","陇南","临夏回族自治州","甘南藏族自治州","其他"]},{name:"宁夏",sub:["请选择","银川","石嘴山","吴忠","固原","中卫","其他"]},{name:"青海",sub:["请选择","西宁","海东地区","海北藏族自治州","海南藏族自治州","黄南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州","其他"]},{name:"新疆",sub:["请选择","乌鲁木齐","克拉玛依","吐鲁番地区","哈密地区","和田地区","阿克苏地区","喀什地区","克孜勒苏柯尔克孜自治州","巴音郭楞蒙古自治州","昌吉回族自治州","博尔塔拉蒙古自治州","石河子","阿拉尔","图木舒克","五家渠","伊犁哈萨克自治州","其他"]},{name:"香港",sub:["请选择","中西区","湾仔区","东区","南区","深水埗区","油尖旺区","九龙城区","黄大仙区","观塘区","北区","大埔区","沙田区","西贡区","元朗区","屯门区","荃湾区","葵青区","离岛区","其他"]},{name:"澳门",sub:["请选择","花地玛堂区","圣安多尼堂区","大堂区","望德堂区","风顺堂区","嘉模堂区","圣方济各堂区","路凼","其他"]},{name:"台湾",sub:["请选择","台北市","高雄市","台北县","桃园县","新竹县","苗栗县","台中县","彰化县","南投县","云林县","嘉义县","台南县","高雄县","屏东县","宜兰县","花莲县","台东县","澎湖县","基隆市","新竹市","台中市","嘉义市","台南市","其他"]},{name:"海外",sub:["请选择","其他"]},{name:"其他",sub:[]}];(function(){var t=(navigator.userAgent.toLowerCase(),{errorMsg:{add:function(t,e){t.find(".error").length?t.find(".error").html(e):t.append('<div class="error">'+e+"</div>")},remove:function(t){t.find(".error").length&&t.find(".error").remove()}},msgBox:function(t,e){e?$("body").append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+t+"</div></div>"):$("body").append('<div class="ajaxpop msgbox"><div class="loading">'+t+"</div></div>")},formAddress:function(){var e=!0;if($(".input-name").val()?t.errorMsg.remove($(".input-name").parent()):(t.errorMsg.add($(".input-name").parent(),"用户名填写错误"),e=!1),$(".input-province").val()&&$(".input-city").val()&&$(".input-province")[0].selectedIndex&&$(".input-city")[0].selectedIndex?t.errorMsg.remove($(".input-province").parent()):(t.errorMsg.add($(".input-province").parent(),"地址不能为空"),e=!1),$(".input-phone").val()){var n=/^1\d{10}$/;n.test($(".input-phone").val())?t.errorMsg.remove($(".input-phone").parent()):(e=!1,t.errorMsg.add($(".input-phone").parent(),"手机号格式错误，请重新输入"))}else t.errorMsg.add($(".input-phone").parent(),"联系方式填写错误"),e=!1;return e?!0:!1}});this.Common=t}).call(this),$(document).ready(function(){for(var t="",e=0;e<region.length;e++)t=t+'<option name="'+region[e].name+'">'+region[e].name+"</option>";$(".input-province").html(t),$(".input-province").on("change",function(t){var e="",n=this.selectedIndex;0==n?($(this).removeClass("hasvalue"),$(".input-city").removeClass("hasvalue")):$(this).addClass("hasvalue");for(var r=0;r<region[n].sub.length;r++)e=e+'<option name="'+region[n].sub[r]+'">'+region[n].sub[r]+"</option>";$(".input-city").html(e)}),$(".input-city").on("change",function(){var t=this.selectedIndex;0==t?$(this).removeClass("hasvalue"):$(this).addClass("hasvalue")}),window.onload=function(){for(var t=[],e=0;e<$(".tg_item2 li").length;e++)t.push($(".tg_item2 li")[e].offsetTop+$(".tg_item2").offset().top);var n=4*window.innerHeight/5;$(window).on("scroll",function(e){if($(window).scrollTop()>$(".tg_item2").offset().top-n&&$(window).scrollTop()<$(".tg_item3").offset().top-n)for(var r=0;r<t.length;r++)$(window).scrollTop()>t[r]-n&&$(".tg_item2 li").eq(r).addClass("animated");else $(window).scrollTop()>$(".tg_item5").offset().top-n&&$(window).scrollTop()<$(".tg_item5").offset().top-n+$(".tg_item5").height()/2&&!$(".watch").hasClass("animated")?$(".watch").addClass("animated"):$(window).scrollTop()>$(".tg_item5").offset().top-n+$(".tg_item5").height()/2&&!$(".football").hasClass("animated")&&$(".football").addClass("animated")})},$(".btn-submit").on("click",function(){var t=!0;if(Common.formAddress()){
if(!t)return;t=!1;$(".input-name").val(),$(".input-phone").val(),$(".input-province").val(),$(".input-city").val();$(".tg_item6").addClass("done")}})});