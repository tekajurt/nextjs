"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[715],{9585:function(r,e,n){var t=n(7294),o=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;e.Z="undefined"!=typeof document||o?t.useLayoutEffect:t.useEffect},80:function(r,e,n){n.d(e,{Z:function(){return c}});var t=n(7294);n(2092),n(2029);var o=n(8146);n(6454),n(8833),n(9585),new WeakMap;var i=n(861),a=n(5893);let u=["onKeyDown"],f=t.forwardRef((r,e)=>{var n;let{onKeyDown:t}=r,f=function(r,e){if(null==r)return{};var n,t,o={},i=Object.keys(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(o[n]=r[n]);return o}(r,u),[c]=(0,i.FT)(Object.assign({tagName:"a"},f)),s=(0,o.Z)(r=>{c.onKeyDown(r),null==t||t(r)});return(n=f.href)&&"#"!==n.trim()&&"button"!==f.role?(0,a.jsx)("a",Object.assign({ref:e},f,{onKeyDown:t})):(0,a.jsx)("a",Object.assign({ref:e},f,c,{onKeyDown:s}))});f.displayName="Anchor";var c=f},1143:function(r){r.exports=function(r,e,n,t,o,i,a,u){if(!r){var f;if(void 0===e)f=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,t,o,i,a,u],s=0;(f=Error(e.replace(/%s/g,function(){return c[s++]}))).name="Invariant Violation"}throw f.framesToPop=1,f}}},5446:function(r,e,n){function t(){return(t=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}n.d(e,{Ch:function(){return f}});var o=n(3366),i=n(7294);function a(r){return"default"+r.charAt(0).toUpperCase()+r.substr(1)}function u(r){var e=function(r,e){if("object"!=typeof r||null===r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var t=n.call(r,e||"default");if("object"!=typeof t)return t;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(r,"string");return"symbol"==typeof e?e:String(e)}function f(r,e){return Object.keys(e).reduce(function(n,f){var c,s,l,v,p,d,g,y,b=n[a(f)],h=n[f],m=(0,o.Z)(n,[a(f),f].map(u)),j=e[f],w=(c=r[j],s=(0,i.useRef)(void 0!==h),v=(l=(0,i.useState)(b))[0],p=l[1],d=void 0!==h,g=s.current,s.current=d,!d&&g&&v!==b&&p(b),[d?h:v,(0,i.useCallback)(function(r){for(var e=arguments.length,n=Array(e>1?e-1:0),t=1;t<e;t++)n[t-1]=arguments[t];c&&c.apply(void 0,[r].concat(n)),p(r)},[c])]),O=w[0],k=w[1];return t({},m,((y={})[f]=O,y[j]=k,y))},r)}n(1143)}}]);