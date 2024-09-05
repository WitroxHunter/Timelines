function t0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function n0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var r0={exports:{}},Ac={},i0={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dl=Symbol.for("react.element"),XI=Symbol.for("react.portal"),JI=Symbol.for("react.fragment"),ZI=Symbol.for("react.strict_mode"),eS=Symbol.for("react.profiler"),tS=Symbol.for("react.provider"),nS=Symbol.for("react.context"),rS=Symbol.for("react.forward_ref"),iS=Symbol.for("react.suspense"),sS=Symbol.for("react.memo"),oS=Symbol.for("react.lazy"),ng=Symbol.iterator;function aS(t){return t===null||typeof t!="object"?null:(t=ng&&t[ng]||t["@@iterator"],typeof t=="function"?t:null)}var s0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o0=Object.assign,a0={};function To(t,e,n){this.props=t,this.context=e,this.refs=a0,this.updater=n||s0}To.prototype.isReactComponent={};To.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};To.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function l0(){}l0.prototype=To.prototype;function Df(t,e,n){this.props=t,this.context=e,this.refs=a0,this.updater=n||s0}var bf=Df.prototype=new l0;bf.constructor=Df;o0(bf,To.prototype);bf.isPureReactComponent=!0;var rg=Array.isArray,u0=Object.prototype.hasOwnProperty,Of={current:null},c0={key:!0,ref:!0,__self:!0,__source:!0};function d0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)u0.call(e,r)&&!c0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:dl,type:t,key:s,ref:o,props:i,_owner:Of.current}}function lS(t,e){return{$$typeof:dl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mf(t){return typeof t=="object"&&t!==null&&t.$$typeof===dl}function uS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ig=/\/+/g;function Rd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?uS(""+t.key):e.toString(36)}function hu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case dl:case XI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Rd(o,0):r,rg(i)?(n="",t!=null&&(n=t.replace(ig,"$&/")+"/"),hu(i,e,n,"",function(c){return c})):i!=null&&(Mf(i)&&(i=lS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ig,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Rd(s,l);o+=hu(s,e,n,u,i)}else if(u=aS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Rd(s,l++),o+=hu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Hl(t,e,n){if(t==null)return t;var r=[],i=0;return hu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function cS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},fu={transition:null},dS={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:fu,ReactCurrentOwner:Of};function h0(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:Hl,forEach:function(t,e,n){Hl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Hl(t,function(){e++}),e},toArray:function(t){return Hl(t,function(e){return e})||[]},only:function(t){if(!Mf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};me.Component=To;me.Fragment=JI;me.Profiler=eS;me.PureComponent=Df;me.StrictMode=ZI;me.Suspense=iS;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dS;me.act=h0;me.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=o0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Of.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)u0.call(e,u)&&!c0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:dl,type:t.type,key:i,ref:s,props:r,_owner:o}};me.createContext=function(t){return t={$$typeof:nS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tS,_context:t},t.Consumer=t};me.createElement=d0;me.createFactory=function(t){var e=d0.bind(null,t);return e.type=t,e};me.createRef=function(){return{current:null}};me.forwardRef=function(t){return{$$typeof:rS,render:t}};me.isValidElement=Mf;me.lazy=function(t){return{$$typeof:oS,_payload:{_status:-1,_result:t},_init:cS}};me.memo=function(t,e){return{$$typeof:sS,type:t,compare:e===void 0?null:e}};me.startTransition=function(t){var e=fu.transition;fu.transition={};try{t()}finally{fu.transition=e}};me.unstable_act=h0;me.useCallback=function(t,e){return qt.current.useCallback(t,e)};me.useContext=function(t){return qt.current.useContext(t)};me.useDebugValue=function(){};me.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};me.useEffect=function(t,e){return qt.current.useEffect(t,e)};me.useId=function(){return qt.current.useId()};me.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};me.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};me.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};me.useMemo=function(t,e){return qt.current.useMemo(t,e)};me.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};me.useRef=function(t){return qt.current.useRef(t)};me.useState=function(t){return qt.current.useState(t)};me.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};me.useTransition=function(){return qt.current.useTransition()};me.version="18.3.1";i0.exports=me;var F=i0.exports;const Pc=n0(F),hS=t0({__proto__:null,default:Pc},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fS=F,pS=Symbol.for("react.element"),mS=Symbol.for("react.fragment"),gS=Object.prototype.hasOwnProperty,yS=fS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vS={key:!0,ref:!0,__self:!0,__source:!0};function f0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)gS.call(e,r)&&!vS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:pS,type:t,key:s,ref:o,props:i,_owner:yS.current}}Ac.Fragment=mS;Ac.jsx=f0;Ac.jsxs=f0;r0.exports=Ac;var w=r0.exports,ph={},p0={exports:{}},mn={},m0={exports:{}},g0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,ee){var ne=K.length;K.push(ee);e:for(;0<ne;){var ve=ne-1>>>1,fe=K[ve];if(0<i(fe,ee))K[ve]=ee,K[ne]=fe,ne=ve;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var ee=K[0],ne=K.pop();if(ne!==ee){K[0]=ne;e:for(var ve=0,fe=K.length,ke=fe>>>1;ve<ke;){var Qe=2*(ve+1)-1,ot=K[Qe],tt=Qe+1,Pt=K[tt];if(0>i(ot,ne))tt<fe&&0>i(Pt,ot)?(K[ve]=Pt,K[tt]=ne,ve=tt):(K[ve]=ot,K[Qe]=ne,ve=Qe);else if(tt<fe&&0>i(Pt,ne))K[ve]=Pt,K[tt]=ne,ve=tt;else break e}}return ee}function i(K,ee){var ne=K.sortIndex-ee.sortIndex;return ne!==0?ne:K.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],h=1,p=null,m=3,T=!1,C=!1,k=!1,O=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(K){for(var ee=n(c);ee!==null;){if(ee.callback===null)r(c);else if(ee.startTime<=K)r(c),ee.sortIndex=ee.expirationTime,e(u,ee);else break;ee=n(c)}}function V(K){if(k=!1,A(K),!C)if(n(u)!==null)C=!0,rn(z);else{var ee=n(c);ee!==null&&Ie(V,ee.startTime-K)}}function z(K,ee){C=!1,k&&(k=!1,I(y),y=-1),T=!0;var ne=m;try{for(A(ee),p=n(u);p!==null&&(!(p.expirationTime>ee)||K&&!P());){var ve=p.callback;if(typeof ve=="function"){p.callback=null,m=p.priorityLevel;var fe=ve(p.expirationTime<=ee);ee=t.unstable_now(),typeof fe=="function"?p.callback=fe:p===n(u)&&r(u),A(ee)}else r(u);p=n(u)}if(p!==null)var ke=!0;else{var Qe=n(c);Qe!==null&&Ie(V,Qe.startTime-ee),ke=!1}return ke}finally{p=null,m=ne,T=!1}}var N=!1,E=null,y=-1,v=5,R=-1;function P(){return!(t.unstable_now()-R<v)}function b(){if(E!==null){var K=t.unstable_now();R=K;var ee=!0;try{ee=E(!0,K)}finally{ee?S():(N=!1,E=null)}}else N=!1}var S;if(typeof _=="function")S=function(){_(b)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,yt=Te.port2;Te.port1.onmessage=b,S=function(){yt.postMessage(null)}}else S=function(){O(b,0)};function rn(K){E=K,N||(N=!0,S())}function Ie(K,ee){y=O(function(){K(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){C||T||(C=!0,rn(z))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(K){switch(m){case 1:case 2:case 3:var ee=3;break;default:ee=m}var ne=m;m=ee;try{return K()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,ee){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ne=m;m=K;try{return ee()}finally{m=ne}},t.unstable_scheduleCallback=function(K,ee,ne){var ve=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ve+ne:ve):ne=ve,K){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ne+fe,K={id:h++,callback:ee,priorityLevel:K,startTime:ne,expirationTime:fe,sortIndex:-1},ne>ve?(K.sortIndex=ne,e(c,K),n(u)===null&&K===n(c)&&(k?(I(y),y=-1):k=!0,Ie(V,ne-ve))):(K.sortIndex=fe,e(u,K),C||T||(C=!0,rn(z))),K},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(K){var ee=m;return function(){var ne=m;m=ee;try{return K.apply(this,arguments)}finally{m=ne}}}})(g0);m0.exports=g0;var _S=m0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wS=F,pn=_S;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y0=new Set,ba={};function fs(t,e){ro(t,e),ro(t+"Capture",e)}function ro(t,e){for(ba[t]=e,t=0;t<e.length;t++)y0.add(e[t])}var Rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mh=Object.prototype.hasOwnProperty,ES=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sg={},og={};function TS(t){return mh.call(og,t)?!0:mh.call(sg,t)?!1:ES.test(t)?og[t]=!0:(sg[t]=!0,!1)}function IS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function SS(t,e,n,r){if(e===null||typeof e>"u"||IS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Rt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Rt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Rt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Rt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Rt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Rt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Rt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Rt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Rt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lf=/[\-:]([a-z])/g;function Vf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lf,Vf);Rt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lf,Vf);Rt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lf,Vf);Rt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Rt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Rt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ff(t,e,n,r){var i=Rt.hasOwnProperty(e)?Rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(SS(e,n,i,r)&&(n=null),r||i===null?TS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dr=wS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wl=Symbol.for("react.element"),Os=Symbol.for("react.portal"),Ms=Symbol.for("react.fragment"),jf=Symbol.for("react.strict_mode"),gh=Symbol.for("react.profiler"),v0=Symbol.for("react.provider"),_0=Symbol.for("react.context"),Uf=Symbol.for("react.forward_ref"),yh=Symbol.for("react.suspense"),vh=Symbol.for("react.suspense_list"),zf=Symbol.for("react.memo"),Qr=Symbol.for("react.lazy"),w0=Symbol.for("react.offscreen"),ag=Symbol.iterator;function qo(t){return t===null||typeof t!="object"?null:(t=ag&&t[ag]||t["@@iterator"],typeof t=="function"?t:null)}var Ke=Object.assign,Ad;function oa(t){if(Ad===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ad=e&&e[1]||""}return`
`+Ad+t}var Pd=!1;function Cd(t,e){if(!t||Pd)return"";Pd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Pd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oa(t):""}function RS(t){switch(t.tag){case 5:return oa(t.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 2:case 15:return t=Cd(t.type,!1),t;case 11:return t=Cd(t.type.render,!1),t;case 1:return t=Cd(t.type,!0),t;default:return""}}function _h(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ms:return"Fragment";case Os:return"Portal";case gh:return"Profiler";case jf:return"StrictMode";case yh:return"Suspense";case vh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _0:return(t.displayName||"Context")+".Consumer";case v0:return(t._context.displayName||"Context")+".Provider";case Uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zf:return e=t.displayName||null,e!==null?e:_h(t.type)||"Memo";case Qr:e=t._payload,t=t._init;try{return _h(t(e))}catch{}}return null}function AS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _h(e);case 8:return e===jf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function E0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function PS(t){var e=E0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ql(t){t._valueTracker||(t._valueTracker=PS(t))}function T0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=E0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wh(t,e){var n=e.checked;return Ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function I0(t,e){e=e.checked,e!=null&&Ff(t,"checked",e,!1)}function Eh(t,e){I0(t,e);var n=mi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Th(t,e.type,n):e.hasOwnProperty("defaultValue")&&Th(t,e.type,mi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ug(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Th(t,e,n){(e!=="number"||Ou(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function qs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ih(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(aa(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mi(n)}}function S0(t,e){var n=mi(e.value),r=mi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function R0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?R0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Kl,A0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Kl=Kl||document.createElement("div"),Kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CS=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(t){CS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ya[e]=ya[t]})});function P0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ya.hasOwnProperty(t)&&ya[t]?(""+e).trim():e+"px"}function C0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=P0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var kS=Ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rh(t,e){if(e){if(kS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function Ah(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ph=null;function Bf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ch=null,Ks=null,Gs=null;function hg(t){if(t=pl(t)){if(typeof Ch!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Dc(e),Ch(t.stateNode,t.type,e))}}function k0(t){Ks?Gs?Gs.push(t):Gs=[t]:Ks=t}function x0(){if(Ks){var t=Ks,e=Gs;if(Gs=Ks=null,hg(t),e)for(t=0;t<e.length;t++)hg(e[t])}}function N0(t,e){return t(e)}function D0(){}var kd=!1;function b0(t,e,n){if(kd)return t(e,n);kd=!0;try{return N0(t,e,n)}finally{kd=!1,(Ks!==null||Gs!==null)&&(D0(),x0())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var r=Dc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var kh=!1;if(Rr)try{var Ko={};Object.defineProperty(Ko,"passive",{get:function(){kh=!0}}),window.addEventListener("test",Ko,Ko),window.removeEventListener("test",Ko,Ko)}catch{kh=!1}function xS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var va=!1,Mu=null,Lu=!1,xh=null,NS={onError:function(t){va=!0,Mu=t}};function DS(t,e,n,r,i,s,o,l,u){va=!1,Mu=null,xS.apply(NS,arguments)}function bS(t,e,n,r,i,s,o,l,u){if(DS.apply(this,arguments),va){if(va){var c=Mu;va=!1,Mu=null}else throw Error(H(198));Lu||(Lu=!0,xh=c)}}function ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function O0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fg(t){if(ps(t)!==t)throw Error(H(188))}function OS(t){var e=t.alternate;if(!e){if(e=ps(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fg(i),t;if(s===r)return fg(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function M0(t){return t=OS(t),t!==null?L0(t):null}function L0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=L0(t);if(e!==null)return e;t=t.sibling}return null}var V0=pn.unstable_scheduleCallback,pg=pn.unstable_cancelCallback,MS=pn.unstable_shouldYield,LS=pn.unstable_requestPaint,et=pn.unstable_now,VS=pn.unstable_getCurrentPriorityLevel,$f=pn.unstable_ImmediatePriority,F0=pn.unstable_UserBlockingPriority,Vu=pn.unstable_NormalPriority,FS=pn.unstable_LowPriority,j0=pn.unstable_IdlePriority,Cc=null,Xn=null;function jS(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Cc,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:BS,US=Math.log,zS=Math.LN2;function BS(t){return t>>>=0,t===0?32:31-(US(t)/zS|0)|0}var Gl=64,Ql=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=la(l):(s&=o,s!==0&&(r=la(s)))}else o=n&~i,o!==0?r=la(o):s!==0&&(r=la(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-zn(e),i=1<<n,r|=t[n],e&=~i;return r}function $S(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=$S(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function U0(){var t=Gl;return Gl<<=1,!(Gl&4194240)&&(Gl=64),t}function xd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function hl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function WS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-zn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Hf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-zn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ne=0;function z0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var B0,Wf,$0,H0,W0,Dh=!1,Yl=[],si=null,oi=null,ai=null,La=new Map,Va=new Map,Xr=[],qS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mg(t,e){switch(t){case"focusin":case"focusout":si=null;break;case"dragenter":case"dragleave":oi=null;break;case"mouseover":case"mouseout":ai=null;break;case"pointerover":case"pointerout":La.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(e.pointerId)}}function Go(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=pl(e),e!==null&&Wf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function KS(t,e,n,r,i){switch(e){case"focusin":return si=Go(si,t,e,n,r,i),!0;case"dragenter":return oi=Go(oi,t,e,n,r,i),!0;case"mouseover":return ai=Go(ai,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return La.set(s,Go(La.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Va.set(s,Go(Va.get(s)||null,t,e,n,r,i)),!0}return!1}function q0(t){var e=zi(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=O0(n),e!==null){t.blockedOn=e,W0(t.priority,function(){$0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ph=r,n.target.dispatchEvent(r),Ph=null}else return e=pl(n),e!==null&&Wf(e),t.blockedOn=n,!1;e.shift()}return!0}function gg(t,e,n){pu(t)&&n.delete(e)}function GS(){Dh=!1,si!==null&&pu(si)&&(si=null),oi!==null&&pu(oi)&&(oi=null),ai!==null&&pu(ai)&&(ai=null),La.forEach(gg),Va.forEach(gg)}function Qo(t,e){t.blockedOn===e&&(t.blockedOn=null,Dh||(Dh=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,GS)))}function Fa(t){function e(i){return Qo(i,t)}if(0<Yl.length){Qo(Yl[0],t);for(var n=1;n<Yl.length;n++){var r=Yl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(si!==null&&Qo(si,t),oi!==null&&Qo(oi,t),ai!==null&&Qo(ai,t),La.forEach(e),Va.forEach(e),n=0;n<Xr.length;n++)r=Xr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xr.length&&(n=Xr[0],n.blockedOn===null);)q0(n),n.blockedOn===null&&Xr.shift()}var Qs=Dr.ReactCurrentBatchConfig,ju=!0;function QS(t,e,n,r){var i=Ne,s=Qs.transition;Qs.transition=null;try{Ne=1,qf(t,e,n,r)}finally{Ne=i,Qs.transition=s}}function YS(t,e,n,r){var i=Ne,s=Qs.transition;Qs.transition=null;try{Ne=4,qf(t,e,n,r)}finally{Ne=i,Qs.transition=s}}function qf(t,e,n,r){if(ju){var i=bh(t,e,n,r);if(i===null)Ud(t,e,r,Uu,n),mg(t,r);else if(KS(i,t,e,n,r))r.stopPropagation();else if(mg(t,r),e&4&&-1<qS.indexOf(t)){for(;i!==null;){var s=pl(i);if(s!==null&&B0(s),s=bh(t,e,n,r),s===null&&Ud(t,e,r,Uu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ud(t,e,r,null,n)}}var Uu=null;function bh(t,e,n,r){if(Uu=null,t=Bf(r),t=zi(t),t!==null)if(e=ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=O0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Uu=t,null}function K0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VS()){case $f:return 1;case F0:return 4;case Vu:case FS:return 16;case j0:return 536870912;default:return 16}default:return 16}}var ni=null,Kf=null,mu=null;function G0(){if(mu)return mu;var t,e=Kf,n=e.length,r,i="value"in ni?ni.value:ni.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return mu=i.slice(t,1<r?1-r:void 0)}function gu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xl(){return!0}function yg(){return!1}function gn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xl:yg,this.isPropagationStopped=yg,this}return Ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),e}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gf=gn(Io),fl=Ke({},Io,{view:0,detail:0}),XS=gn(fl),Nd,Dd,Yo,kc=Ke({},fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(Nd=t.screenX-Yo.screenX,Dd=t.screenY-Yo.screenY):Dd=Nd=0,Yo=t),Nd)},movementY:function(t){return"movementY"in t?t.movementY:Dd}}),vg=gn(kc),JS=Ke({},kc,{dataTransfer:0}),ZS=gn(JS),e1=Ke({},fl,{relatedTarget:0}),bd=gn(e1),t1=Ke({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),n1=gn(t1),r1=Ke({},Io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),i1=gn(r1),s1=Ke({},Io,{data:0}),_g=gn(s1),o1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=l1[t])?!!e[t]:!1}function Qf(){return u1}var c1=Ke({},fl,{key:function(t){if(t.key){var e=o1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qf,charCode:function(t){return t.type==="keypress"?gu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d1=gn(c1),h1=Ke({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wg=gn(h1),f1=Ke({},fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qf}),p1=gn(f1),m1=Ke({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),g1=gn(m1),y1=Ke({},kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),v1=gn(y1),_1=[9,13,27,32],Yf=Rr&&"CompositionEvent"in window,_a=null;Rr&&"documentMode"in document&&(_a=document.documentMode);var w1=Rr&&"TextEvent"in window&&!_a,Q0=Rr&&(!Yf||_a&&8<_a&&11>=_a),Eg=" ",Tg=!1;function Y0(t,e){switch(t){case"keyup":return _1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function E1(t,e){switch(t){case"compositionend":return X0(e);case"keypress":return e.which!==32?null:(Tg=!0,Eg);case"textInput":return t=e.data,t===Eg&&Tg?null:t;default:return null}}function T1(t,e){if(Ls)return t==="compositionend"||!Yf&&Y0(t,e)?(t=G0(),mu=Kf=ni=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Q0&&e.locale!=="ko"?null:e.data;default:return null}}var I1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ig(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!I1[t.type]:e==="textarea"}function J0(t,e,n,r){k0(r),e=zu(e,"onChange"),0<e.length&&(n=new Gf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wa=null,ja=null;function S1(t){u_(t,0)}function xc(t){var e=js(t);if(T0(e))return t}function R1(t,e){if(t==="change")return e}var Z0=!1;if(Rr){var Od;if(Rr){var Md="oninput"in document;if(!Md){var Sg=document.createElement("div");Sg.setAttribute("oninput","return;"),Md=typeof Sg.oninput=="function"}Od=Md}else Od=!1;Z0=Od&&(!document.documentMode||9<document.documentMode)}function Rg(){wa&&(wa.detachEvent("onpropertychange",e_),ja=wa=null)}function e_(t){if(t.propertyName==="value"&&xc(ja)){var e=[];J0(e,ja,t,Bf(t)),b0(S1,e)}}function A1(t,e,n){t==="focusin"?(Rg(),wa=e,ja=n,wa.attachEvent("onpropertychange",e_)):t==="focusout"&&Rg()}function P1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xc(ja)}function C1(t,e){if(t==="click")return xc(e)}function k1(t,e){if(t==="input"||t==="change")return xc(e)}function x1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:x1;function Ua(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mh.call(e,i)||!Hn(t[i],e[i]))return!1}return!0}function Ag(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pg(t,e){var n=Ag(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ag(n)}}function t_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?t_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function n_(){for(var t=window,e=Ou();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ou(t.document)}return e}function Xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function N1(t){var e=n_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&t_(n.ownerDocument.documentElement,n)){if(r!==null&&Xf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pg(n,s);var o=Pg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var D1=Rr&&"documentMode"in document&&11>=document.documentMode,Vs=null,Oh=null,Ea=null,Mh=!1;function Cg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mh||Vs==null||Vs!==Ou(r)||(r=Vs,"selectionStart"in r&&Xf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ea&&Ua(Ea,r)||(Ea=r,r=zu(Oh,"onSelect"),0<r.length&&(e=new Gf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vs)))}function Jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fs={animationend:Jl("Animation","AnimationEnd"),animationiteration:Jl("Animation","AnimationIteration"),animationstart:Jl("Animation","AnimationStart"),transitionend:Jl("Transition","TransitionEnd")},Ld={},r_={};Rr&&(r_=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Nc(t){if(Ld[t])return Ld[t];if(!Fs[t])return t;var e=Fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in r_)return Ld[t]=e[n];return t}var i_=Nc("animationend"),s_=Nc("animationiteration"),o_=Nc("animationstart"),a_=Nc("transitionend"),l_=new Map,kg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ti(t,e){l_.set(t,e),fs(e,[t])}for(var Vd=0;Vd<kg.length;Vd++){var Fd=kg[Vd],b1=Fd.toLowerCase(),O1=Fd[0].toUpperCase()+Fd.slice(1);Ti(b1,"on"+O1)}Ti(i_,"onAnimationEnd");Ti(s_,"onAnimationIteration");Ti(o_,"onAnimationStart");Ti("dblclick","onDoubleClick");Ti("focusin","onFocus");Ti("focusout","onBlur");Ti(a_,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function xg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bS(r,e,void 0,t),t.currentTarget=null}function u_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;xg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;xg(i,l,c),s=u}}}if(Lu)throw t=xh,Lu=!1,xh=null,t}function je(t,e){var n=e[Uh];n===void 0&&(n=e[Uh]=new Set);var r=t+"__bubble";n.has(r)||(c_(e,t,2,!1),n.add(r))}function jd(t,e,n){var r=0;e&&(r|=4),c_(n,t,r,e)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function za(t){if(!t[Zl]){t[Zl]=!0,y0.forEach(function(n){n!=="selectionchange"&&(M1.has(n)||jd(n,!1,t),jd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zl]||(e[Zl]=!0,jd("selectionchange",!1,e))}}function c_(t,e,n,r){switch(K0(e)){case 1:var i=QS;break;case 4:i=YS;break;default:i=qf}n=i.bind(null,e,n,t),i=void 0,!kh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ud(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=zi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}b0(function(){var c=s,h=Bf(n),p=[];e:{var m=l_.get(t);if(m!==void 0){var T=Gf,C=t;switch(t){case"keypress":if(gu(n)===0)break e;case"keydown":case"keyup":T=d1;break;case"focusin":C="focus",T=bd;break;case"focusout":C="blur",T=bd;break;case"beforeblur":case"afterblur":T=bd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=vg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=ZS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=p1;break;case i_:case s_:case o_:T=n1;break;case a_:T=g1;break;case"scroll":T=XS;break;case"wheel":T=v1;break;case"copy":case"cut":case"paste":T=i1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=wg}var k=(e&4)!==0,O=!k&&t==="scroll",I=k?m!==null?m+"Capture":null:m;k=[];for(var _=c,A;_!==null;){A=_;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,I!==null&&(V=Ma(_,I),V!=null&&k.push(Ba(_,V,A)))),O)break;_=_.return}0<k.length&&(m=new T(m,C,null,n,h),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&n!==Ph&&(C=n.relatedTarget||n.fromElement)&&(zi(C)||C[Ar]))break e;if((T||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,T?(C=n.relatedTarget||n.toElement,T=c,C=C?zi(C):null,C!==null&&(O=ps(C),C!==O||C.tag!==5&&C.tag!==6)&&(C=null)):(T=null,C=c),T!==C)){if(k=vg,V="onMouseLeave",I="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=wg,V="onPointerLeave",I="onPointerEnter",_="pointer"),O=T==null?m:js(T),A=C==null?m:js(C),m=new k(V,_+"leave",T,n,h),m.target=O,m.relatedTarget=A,V=null,zi(h)===c&&(k=new k(I,_+"enter",C,n,h),k.target=A,k.relatedTarget=O,V=k),O=V,T&&C)t:{for(k=T,I=C,_=0,A=k;A;A=ks(A))_++;for(A=0,V=I;V;V=ks(V))A++;for(;0<_-A;)k=ks(k),_--;for(;0<A-_;)I=ks(I),A--;for(;_--;){if(k===I||I!==null&&k===I.alternate)break t;k=ks(k),I=ks(I)}k=null}else k=null;T!==null&&Ng(p,m,T,k,!1),C!==null&&O!==null&&Ng(p,O,C,k,!0)}}e:{if(m=c?js(c):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var z=R1;else if(Ig(m))if(Z0)z=k1;else{z=P1;var N=A1}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=C1);if(z&&(z=z(t,c))){J0(p,z,n,h);break e}N&&N(t,m,c),t==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&Th(m,"number",m.value)}switch(N=c?js(c):window,t){case"focusin":(Ig(N)||N.contentEditable==="true")&&(Vs=N,Oh=c,Ea=null);break;case"focusout":Ea=Oh=Vs=null;break;case"mousedown":Mh=!0;break;case"contextmenu":case"mouseup":case"dragend":Mh=!1,Cg(p,n,h);break;case"selectionchange":if(D1)break;case"keydown":case"keyup":Cg(p,n,h)}var E;if(Yf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ls?Y0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Q0&&n.locale!=="ko"&&(Ls||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ls&&(E=G0()):(ni=h,Kf="value"in ni?ni.value:ni.textContent,Ls=!0)),N=zu(c,y),0<N.length&&(y=new _g(y,t,null,n,h),p.push({event:y,listeners:N}),E?y.data=E:(E=X0(n),E!==null&&(y.data=E)))),(E=w1?E1(t,n):T1(t,n))&&(c=zu(c,"onBeforeInput"),0<c.length&&(h=new _g("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=E))}u_(p,e)})}function Ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ma(t,n),s!=null&&r.unshift(Ba(t,s,i)),s=Ma(t,e),s!=null&&r.push(Ba(t,s,i))),t=t.return}return r}function ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ng(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ma(n,s),u!=null&&o.unshift(Ba(n,u,l))):i||(u=Ma(n,s),u!=null&&o.push(Ba(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var L1=/\r\n?/g,V1=/\u0000|\uFFFD/g;function Dg(t){return(typeof t=="string"?t:""+t).replace(L1,`
`).replace(V1,"")}function eu(t,e,n){if(e=Dg(e),Dg(t)!==e&&n)throw Error(H(425))}function Bu(){}var Lh=null,Vh=null;function Fh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jh=typeof setTimeout=="function"?setTimeout:void 0,F1=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,j1=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(t){return bg.resolve(null).then(t).catch(U1)}:jh;function U1(t){setTimeout(function(){throw t})}function zd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Fa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fa(e)}function li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Og(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var So=Math.random().toString(36).slice(2),Yn="__reactFiber$"+So,$a="__reactProps$"+So,Ar="__reactContainer$"+So,Uh="__reactEvents$"+So,z1="__reactListeners$"+So,B1="__reactHandles$"+So;function zi(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ar]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Og(t);t!==null;){if(n=t[Yn])return n;t=Og(t)}return e}t=n,n=t.parentNode}return null}function pl(t){return t=t[Yn]||t[Ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Dc(t){return t[$a]||null}var zh=[],Us=-1;function Ii(t){return{current:t}}function Ue(t){0>Us||(t.current=zh[Us],zh[Us]=null,Us--)}function Me(t,e){Us++,zh[Us]=t.current,t.current=e}var gi={},jt=Ii(gi),Jt=Ii(!1),Ji=gi;function io(t,e){var n=t.type.contextTypes;if(!n)return gi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Zt(t){return t=t.childContextTypes,t!=null}function $u(){Ue(Jt),Ue(jt)}function Mg(t,e,n){if(jt.current!==gi)throw Error(H(168));Me(jt,e),Me(Jt,n)}function d_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,AS(t)||"Unknown",i));return Ke({},n,r)}function Hu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gi,Ji=jt.current,Me(jt,t),Me(Jt,Jt.current),!0}function Lg(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=d_(t,e,Ji),r.__reactInternalMemoizedMergedChildContext=t,Ue(Jt),Ue(jt),Me(jt,t)):Ue(Jt),Me(Jt,n)}var mr=null,bc=!1,Bd=!1;function h_(t){mr===null?mr=[t]:mr.push(t)}function $1(t){bc=!0,h_(t)}function Si(){if(!Bd&&mr!==null){Bd=!0;var t=0,e=Ne;try{var n=mr;for(Ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mr=null,bc=!1}catch(i){throw mr!==null&&(mr=mr.slice(t+1)),V0($f,Si),i}finally{Ne=e,Bd=!1}}return null}var zs=[],Bs=0,Wu=null,qu=0,_n=[],wn=0,Zi=null,yr=1,vr="";function Vi(t,e){zs[Bs++]=qu,zs[Bs++]=Wu,Wu=t,qu=e}function f_(t,e,n){_n[wn++]=yr,_n[wn++]=vr,_n[wn++]=Zi,Zi=t;var r=yr;t=vr;var i=32-zn(r)-1;r&=~(1<<i),n+=1;var s=32-zn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yr=1<<32-zn(e)+i|n<<i|r,vr=s+t}else yr=1<<s|n<<i|r,vr=t}function Jf(t){t.return!==null&&(Vi(t,1),f_(t,1,0))}function Zf(t){for(;t===Wu;)Wu=zs[--Bs],zs[Bs]=null,qu=zs[--Bs],zs[Bs]=null;for(;t===Zi;)Zi=_n[--wn],_n[wn]=null,vr=_n[--wn],_n[wn]=null,yr=_n[--wn],_n[wn]=null}var hn=null,cn=null,ze=!1,Un=null;function p_(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,cn=li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zi!==null?{id:yr,overflow:vr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,cn=null,!0):!1;default:return!1}}function Bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $h(t){if(ze){var e=cn;if(e){var n=e;if(!Vg(t,e)){if(Bh(t))throw Error(H(418));e=li(n.nextSibling);var r=hn;e&&Vg(t,e)?p_(r,n):(t.flags=t.flags&-4097|2,ze=!1,hn=t)}}else{if(Bh(t))throw Error(H(418));t.flags=t.flags&-4097|2,ze=!1,hn=t}}}function Fg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function tu(t){if(t!==hn)return!1;if(!ze)return Fg(t),ze=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fh(t.type,t.memoizedProps)),e&&(e=cn)){if(Bh(t))throw m_(),Error(H(418));for(;e;)p_(t,e),e=li(e.nextSibling)}if(Fg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=hn?li(t.stateNode.nextSibling):null;return!0}function m_(){for(var t=cn;t;)t=li(t.nextSibling)}function so(){cn=hn=null,ze=!1}function ep(t){Un===null?Un=[t]:Un.push(t)}var H1=Dr.ReactCurrentBatchConfig;function Xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function nu(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jg(t){var e=t._init;return e(t._payload)}function g_(t){function e(I,_){if(t){var A=I.deletions;A===null?(I.deletions=[_],I.flags|=16):A.push(_)}}function n(I,_){if(!t)return null;for(;_!==null;)e(I,_),_=_.sibling;return null}function r(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function i(I,_){return I=hi(I,_),I.index=0,I.sibling=null,I}function s(I,_,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<_?(I.flags|=2,_):A):(I.flags|=2,_)):(I.flags|=1048576,_)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,_,A,V){return _===null||_.tag!==6?(_=Qd(A,I.mode,V),_.return=I,_):(_=i(_,A),_.return=I,_)}function u(I,_,A,V){var z=A.type;return z===Ms?h(I,_,A.props.children,V,A.key):_!==null&&(_.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Qr&&jg(z)===_.type)?(V=i(_,A.props),V.ref=Xo(I,_,A),V.return=I,V):(V=Iu(A.type,A.key,A.props,null,I.mode,V),V.ref=Xo(I,_,A),V.return=I,V)}function c(I,_,A,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=Yd(A,I.mode,V),_.return=I,_):(_=i(_,A.children||[]),_.return=I,_)}function h(I,_,A,V,z){return _===null||_.tag!==7?(_=Yi(A,I.mode,V,z),_.return=I,_):(_=i(_,A),_.return=I,_)}function p(I,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Qd(""+_,I.mode,A),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wl:return A=Iu(_.type,_.key,_.props,null,I.mode,A),A.ref=Xo(I,null,_),A.return=I,A;case Os:return _=Yd(_,I.mode,A),_.return=I,_;case Qr:var V=_._init;return p(I,V(_._payload),A)}if(aa(_)||qo(_))return _=Yi(_,I.mode,A,null),_.return=I,_;nu(I,_)}return null}function m(I,_,A,V){var z=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return z!==null?null:l(I,_,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Wl:return A.key===z?u(I,_,A,V):null;case Os:return A.key===z?c(I,_,A,V):null;case Qr:return z=A._init,m(I,_,z(A._payload),V)}if(aa(A)||qo(A))return z!==null?null:h(I,_,A,V,null);nu(I,A)}return null}function T(I,_,A,V,z){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(A)||null,l(_,I,""+V,z);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Wl:return I=I.get(V.key===null?A:V.key)||null,u(_,I,V,z);case Os:return I=I.get(V.key===null?A:V.key)||null,c(_,I,V,z);case Qr:var N=V._init;return T(I,_,A,N(V._payload),z)}if(aa(V)||qo(V))return I=I.get(A)||null,h(_,I,V,z,null);nu(_,V)}return null}function C(I,_,A,V){for(var z=null,N=null,E=_,y=_=0,v=null;E!==null&&y<A.length;y++){E.index>y?(v=E,E=null):v=E.sibling;var R=m(I,E,A[y],V);if(R===null){E===null&&(E=v);break}t&&E&&R.alternate===null&&e(I,E),_=s(R,_,y),N===null?z=R:N.sibling=R,N=R,E=v}if(y===A.length)return n(I,E),ze&&Vi(I,y),z;if(E===null){for(;y<A.length;y++)E=p(I,A[y],V),E!==null&&(_=s(E,_,y),N===null?z=E:N.sibling=E,N=E);return ze&&Vi(I,y),z}for(E=r(I,E);y<A.length;y++)v=T(E,I,y,A[y],V),v!==null&&(t&&v.alternate!==null&&E.delete(v.key===null?y:v.key),_=s(v,_,y),N===null?z=v:N.sibling=v,N=v);return t&&E.forEach(function(P){return e(I,P)}),ze&&Vi(I,y),z}function k(I,_,A,V){var z=qo(A);if(typeof z!="function")throw Error(H(150));if(A=z.call(A),A==null)throw Error(H(151));for(var N=z=null,E=_,y=_=0,v=null,R=A.next();E!==null&&!R.done;y++,R=A.next()){E.index>y?(v=E,E=null):v=E.sibling;var P=m(I,E,R.value,V);if(P===null){E===null&&(E=v);break}t&&E&&P.alternate===null&&e(I,E),_=s(P,_,y),N===null?z=P:N.sibling=P,N=P,E=v}if(R.done)return n(I,E),ze&&Vi(I,y),z;if(E===null){for(;!R.done;y++,R=A.next())R=p(I,R.value,V),R!==null&&(_=s(R,_,y),N===null?z=R:N.sibling=R,N=R);return ze&&Vi(I,y),z}for(E=r(I,E);!R.done;y++,R=A.next())R=T(E,I,y,R.value,V),R!==null&&(t&&R.alternate!==null&&E.delete(R.key===null?y:R.key),_=s(R,_,y),N===null?z=R:N.sibling=R,N=R);return t&&E.forEach(function(b){return e(I,b)}),ze&&Vi(I,y),z}function O(I,_,A,V){if(typeof A=="object"&&A!==null&&A.type===Ms&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Wl:e:{for(var z=A.key,N=_;N!==null;){if(N.key===z){if(z=A.type,z===Ms){if(N.tag===7){n(I,N.sibling),_=i(N,A.props.children),_.return=I,I=_;break e}}else if(N.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Qr&&jg(z)===N.type){n(I,N.sibling),_=i(N,A.props),_.ref=Xo(I,N,A),_.return=I,I=_;break e}n(I,N);break}else e(I,N);N=N.sibling}A.type===Ms?(_=Yi(A.props.children,I.mode,V,A.key),_.return=I,I=_):(V=Iu(A.type,A.key,A.props,null,I.mode,V),V.ref=Xo(I,_,A),V.return=I,I=V)}return o(I);case Os:e:{for(N=A.key;_!==null;){if(_.key===N)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(I,_.sibling),_=i(_,A.children||[]),_.return=I,I=_;break e}else{n(I,_);break}else e(I,_);_=_.sibling}_=Yd(A,I.mode,V),_.return=I,I=_}return o(I);case Qr:return N=A._init,O(I,_,N(A._payload),V)}if(aa(A))return C(I,_,A,V);if(qo(A))return k(I,_,A,V);nu(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(I,_.sibling),_=i(_,A),_.return=I,I=_):(n(I,_),_=Qd(A,I.mode,V),_.return=I,I=_),o(I)):n(I,_)}return O}var oo=g_(!0),y_=g_(!1),Ku=Ii(null),Gu=null,$s=null,tp=null;function np(){tp=$s=Gu=null}function rp(t){var e=Ku.current;Ue(Ku),t._currentValue=e}function Hh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ys(t,e){Gu=t,tp=$s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xt=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(tp!==t)if(t={context:t,memoizedValue:e,next:null},$s===null){if(Gu===null)throw Error(H(308));$s=t,Gu.dependencies={lanes:0,firstContext:t}}else $s=$s.next=t;return e}var Bi=null;function ip(t){Bi===null?Bi=[t]:Bi.push(t)}function v_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ip(e)):(n.next=i.next,i.next=n),e.interleaved=n,Pr(t,r)}function Pr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yr=!1;function sp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function __(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ui(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Pr(t,n)}return i=r.interleaved,i===null?(e.next=e,ip(r)):(e.next=i.next,i.next=e),r.interleaved=e,Pr(t,n)}function yu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hf(t,n)}}function Ug(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qu(t,e,n,r){var i=t.updateQueue;Yr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,h=c=u=null,l=s;do{var m=l.lane,T=l.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,k=l;switch(m=e,T=n,k.tag){case 1:if(C=k.payload,typeof C=="function"){p=C.call(T,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=k.payload,m=typeof C=="function"?C.call(T,p,m):C,m==null)break e;p=Ke({},p,m);break e;case 2:Yr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else T={eventTime:T,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=T,u=p):h=h.next=T,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=p}}function zg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var ml={},Jn=Ii(ml),Ha=Ii(ml),Wa=Ii(ml);function $i(t){if(t===ml)throw Error(H(174));return t}function op(t,e){switch(Me(Wa,e),Me(Ha,t),Me(Jn,ml),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sh(e,t)}Ue(Jn),Me(Jn,e)}function ao(){Ue(Jn),Ue(Ha),Ue(Wa)}function w_(t){$i(Wa.current);var e=$i(Jn.current),n=Sh(e,t.type);e!==n&&(Me(Ha,t),Me(Jn,n))}function ap(t){Ha.current===t&&(Ue(Jn),Ue(Ha))}var We=Ii(0);function Yu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $d=[];function lp(){for(var t=0;t<$d.length;t++)$d[t]._workInProgressVersionPrimary=null;$d.length=0}var vu=Dr.ReactCurrentDispatcher,Hd=Dr.ReactCurrentBatchConfig,es=0,qe=null,ut=null,mt=null,Xu=!1,Ta=!1,qa=0,W1=0;function Dt(){throw Error(H(321))}function up(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function cp(t,e,n,r,i,s){if(es=s,qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vu.current=t===null||t.memoizedState===null?Q1:Y1,t=n(r,i),Ta){s=0;do{if(Ta=!1,qa=0,25<=s)throw Error(H(301));s+=1,mt=ut=null,e.updateQueue=null,vu.current=X1,t=n(r,i)}while(Ta)}if(vu.current=Ju,e=ut!==null&&ut.next!==null,es=0,mt=ut=qe=null,Xu=!1,e)throw Error(H(300));return t}function dp(){var t=qa!==0;return qa=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?qe.memoizedState=mt=t:mt=mt.next=t,mt}function An(){if(ut===null){var t=qe.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var e=mt===null?qe.memoizedState:mt.next;if(e!==null)mt=e,ut=t;else{if(t===null)throw Error(H(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},mt===null?qe.memoizedState=mt=t:mt=mt.next=t}return mt}function Ka(t,e){return typeof e=="function"?e(t):e}function Wd(t){var e=An(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=ut,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var h=c.lane;if((es&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,qe.lanes|=h,ts|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Hn(r,e.memoizedState)||(Xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,qe.lanes|=s,ts|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qd(t){var e=An(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Hn(s,e.memoizedState)||(Xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function E_(){}function T_(t,e){var n=qe,r=An(),i=e(),s=!Hn(r.memoizedState,i);if(s&&(r.memoizedState=i,Xt=!0),r=r.queue,hp(R_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||mt!==null&&mt.memoizedState.tag&1){if(n.flags|=2048,Ga(9,S_.bind(null,n,r,i,e),void 0,null),gt===null)throw Error(H(349));es&30||I_(n,e,i)}return i}function I_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function S_(t,e,n,r){e.value=n,e.getSnapshot=r,A_(e)&&P_(t)}function R_(t,e,n){return n(function(){A_(e)&&P_(t)})}function A_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function P_(t){var e=Pr(t,1);e!==null&&Bn(e,t,1,-1)}function Bg(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:t},e.queue=t,t=t.dispatch=G1.bind(null,qe,t),[e.memoizedState,t]}function Ga(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function C_(){return An().memoizedState}function _u(t,e,n,r){var i=Qn();qe.flags|=t,i.memoizedState=Ga(1|e,n,void 0,r===void 0?null:r)}function Oc(t,e,n,r){var i=An();r=r===void 0?null:r;var s=void 0;if(ut!==null){var o=ut.memoizedState;if(s=o.destroy,r!==null&&up(r,o.deps)){i.memoizedState=Ga(e,n,s,r);return}}qe.flags|=t,i.memoizedState=Ga(1|e,n,s,r)}function $g(t,e){return _u(8390656,8,t,e)}function hp(t,e){return Oc(2048,8,t,e)}function k_(t,e){return Oc(4,2,t,e)}function x_(t,e){return Oc(4,4,t,e)}function N_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function D_(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4,4,N_.bind(null,e,t),n)}function fp(){}function b_(t,e){var n=An();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&up(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function O_(t,e){var n=An();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&up(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function M_(t,e,n){return es&21?(Hn(n,e)||(n=U0(),qe.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xt=!0),t.memoizedState=n)}function q1(t,e){var n=Ne;Ne=n!==0&&4>n?n:4,t(!0);var r=Hd.transition;Hd.transition={};try{t(!1),e()}finally{Ne=n,Hd.transition=r}}function L_(){return An().memoizedState}function K1(t,e,n){var r=di(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},V_(t))F_(e,n);else if(n=v_(t,e,n,r),n!==null){var i=Wt();Bn(n,t,r,i),j_(n,e,r)}}function G1(t,e,n){var r=di(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(V_(t))F_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Hn(l,o)){var u=e.interleaved;u===null?(i.next=i,ip(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=v_(t,e,i,r),n!==null&&(i=Wt(),Bn(n,t,r,i),j_(n,e,r))}}function V_(t){var e=t.alternate;return t===qe||e!==null&&e===qe}function F_(t,e){Ta=Xu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function j_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hf(t,n)}}var Ju={readContext:Rn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},Q1={readContext:Rn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:$g,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_u(4194308,4,N_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _u(4194308,4,t,e)},useInsertionEffect:function(t,e){return _u(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=K1.bind(null,qe,t),[r.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:Bg,useDebugValue:fp,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=Bg(!1),e=t[0];return t=q1.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=qe,i=Qn();if(ze){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),gt===null)throw Error(H(349));es&30||I_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$g(R_.bind(null,r,s,t),[t]),r.flags|=2048,Ga(9,S_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=gt.identifierPrefix;if(ze){var n=vr,r=yr;n=(r&~(1<<32-zn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=W1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Y1={readContext:Rn,useCallback:b_,useContext:Rn,useEffect:hp,useImperativeHandle:D_,useInsertionEffect:k_,useLayoutEffect:x_,useMemo:O_,useReducer:Wd,useRef:C_,useState:function(){return Wd(Ka)},useDebugValue:fp,useDeferredValue:function(t){var e=An();return M_(e,ut.memoizedState,t)},useTransition:function(){var t=Wd(Ka)[0],e=An().memoizedState;return[t,e]},useMutableSource:E_,useSyncExternalStore:T_,useId:L_,unstable_isNewReconciler:!1},X1={readContext:Rn,useCallback:b_,useContext:Rn,useEffect:hp,useImperativeHandle:D_,useInsertionEffect:k_,useLayoutEffect:x_,useMemo:O_,useReducer:qd,useRef:C_,useState:function(){return qd(Ka)},useDebugValue:fp,useDeferredValue:function(t){var e=An();return ut===null?e.memoizedState=t:M_(e,ut.memoizedState,t)},useTransition:function(){var t=qd(Ka)[0],e=An().memoizedState;return[t,e]},useMutableSource:E_,useSyncExternalStore:T_,useId:L_,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=Ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mc={isMounted:function(t){return(t=t._reactInternals)?ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Wt(),i=di(t),s=Tr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ui(t,s,i),e!==null&&(Bn(e,t,i,r),yu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Wt(),i=di(t),s=Tr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ui(t,s,i),e!==null&&(Bn(e,t,i,r),yu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),r=di(t),i=Tr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ui(t,i,r),e!==null&&(Bn(e,t,r,n),yu(e,t,r))}};function Hg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ua(n,r)||!Ua(i,s):!0}function U_(t,e,n){var r=!1,i=gi,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(i=Zt(e)?Ji:jt.current,r=e.contextTypes,s=(r=r!=null)?io(t,i):gi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function qh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},sp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rn(s):(s=Zt(e)?Ji:jt.current,i.context=io(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mc.enqueueReplaceState(i,i.state,null),Qu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function lo(t,e){try{var n="",r=e;do n+=RS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var J1=typeof WeakMap=="function"?WeakMap:Map;function z_(t,e,n){n=Tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ec||(ec=!0,rf=r),Kh(t,e)},n}function B_(t,e,n){n=Tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Kh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kh(t,e),typeof r!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new J1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=hR.bind(null,t,e,n),e.then(t,t))}function Kg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tr(-1,1),e.tag=2,ui(n,e,1))),n.lanes|=1),t)}var Z1=Dr.ReactCurrentOwner,Xt=!1;function Ht(t,e,n,r){e.child=t===null?y_(e,null,n,r):oo(e,t.child,n,r)}function Qg(t,e,n,r,i){n=n.render;var s=e.ref;return Ys(e,i),r=cp(t,e,n,r,s,i),n=dp(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cr(t,e,i)):(ze&&n&&Jf(e),e.flags|=1,Ht(t,e,r,i),e.child)}function Yg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ep(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$_(t,e,s,r,i)):(t=Iu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(o,r)&&t.ref===e.ref)return Cr(t,e,i)}return e.flags|=1,t=hi(s,r),t.ref=e.ref,t.return=e,e.child=t}function $_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ua(s,r)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Xt=!0);else return e.lanes=t.lanes,Cr(t,e,i)}return Gh(t,e,n,r,i)}function H_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Ws,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Me(Ws,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Me(Ws,ln),ln|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Me(Ws,ln),ln|=r;return Ht(t,e,i,n),e.child}function W_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gh(t,e,n,r,i){var s=Zt(n)?Ji:jt.current;return s=io(e,s),Ys(e,i),n=cp(t,e,n,r,s,i),r=dp(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cr(t,e,i)):(ze&&r&&Jf(e),e.flags|=1,Ht(t,e,n,i),e.child)}function Xg(t,e,n,r,i){if(Zt(n)){var s=!0;Hu(e)}else s=!1;if(Ys(e,i),e.stateNode===null)wu(t,e),U_(e,n,r),qh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rn(c):(c=Zt(n)?Ji:jt.current,c=io(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Wg(e,o,r,c),Yr=!1;var m=e.memoizedState;o.state=m,Qu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Jt.current||Yr?(typeof h=="function"&&(Wh(e,n,h,r),u=e.memoizedState),(l=Yr||Hg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,__(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Vn(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Rn(u):(u=Zt(n)?Ji:jt.current,u=io(e,u));var T=n.getDerivedStateFromProps;(h=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Wg(e,o,r,u),Yr=!1,m=e.memoizedState,o.state=m,Qu(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||Jt.current||Yr?(typeof T=="function"&&(Wh(e,n,T,r),C=e.memoizedState),(c=Yr||Hg(e,n,c,r,m,C,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Qh(t,e,n,r,s,i)}function Qh(t,e,n,r,i,s){W_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Lg(e,n,!1),Cr(t,e,s);r=e.stateNode,Z1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=oo(e,t.child,null,s),e.child=oo(e,null,l,s)):Ht(t,e,l,s),e.memoizedState=r.state,i&&Lg(e,n,!0),e.child}function q_(t){var e=t.stateNode;e.pendingContext?Mg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mg(t,e.context,!1),op(t,e.containerInfo)}function Jg(t,e,n,r,i){return so(),ep(i),e.flags|=256,Ht(t,e,n,r),e.child}var Yh={dehydrated:null,treeContext:null,retryLane:0};function Xh(t){return{baseLanes:t,cachePool:null,transitions:null}}function K_(t,e,n){var r=e.pendingProps,i=We.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Me(We,i&1),t===null)return $h(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fc(o,r,0,null),t=Yi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xh(n),e.memoizedState=Yh,t):pp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return eR(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=hi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=hi(l,s):(s=Yi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Xh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yh,r}return s=t.child,t=s.sibling,r=hi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function pp(t,e){return e=Fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ru(t,e,n,r){return r!==null&&ep(r),oo(e,t.child,null,n),t=pp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kd(Error(H(422))),ru(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Fc({mode:"visible",children:r.children},i,0,null),s=Yi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&oo(e,t.child,null,o),e.child.memoizedState=Xh(o),e.memoizedState=Yh,s);if(!(e.mode&1))return ru(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(H(419)),r=Kd(s,r,void 0),ru(t,e,o,r)}if(l=(o&t.childLanes)!==0,Xt||l){if(r=gt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Pr(t,i),Bn(r,t,i,-1))}return wp(),r=Kd(Error(H(421))),ru(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=fR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,cn=li(i.nextSibling),hn=e,ze=!0,Un=null,t!==null&&(_n[wn++]=yr,_n[wn++]=vr,_n[wn++]=Zi,yr=t.id,vr=t.overflow,Zi=e),e=pp(e,r.children),e.flags|=4096,e)}function Zg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hh(t.return,e,n)}function Gd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function G_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ht(t,e,r.children,n),r=We.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zg(t,n,e);else if(t.tag===19)Zg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Me(We,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gd(e,!0,n,null,s);break;case"together":Gd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tR(t,e,n){switch(e.tag){case 3:q_(e),so();break;case 5:w_(e);break;case 1:Zt(e.type)&&Hu(e);break;case 4:op(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Me(Ku,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Me(We,We.current&1),e.flags|=128,null):n&e.child.childLanes?K_(t,e,n):(Me(We,We.current&1),t=Cr(t,e,n),t!==null?t.sibling:null);Me(We,We.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return G_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(We,We.current),r)break;return null;case 22:case 23:return e.lanes=0,H_(t,e,n)}return Cr(t,e,n)}var Q_,Jh,Y_,X_;Q_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jh=function(){};Y_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$i(Jn.current);var s=null;switch(n){case"input":i=wh(t,i),r=wh(t,r),s=[];break;case"select":i=Ke({},i,{value:void 0}),r=Ke({},r,{value:void 0}),s=[];break;case"textarea":i=Ih(t,i),r=Ih(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bu)}Rh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ba.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ba.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&je("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};X_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Jo(t,e){if(!ze)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nR(t,e,n){var r=e.pendingProps;switch(Zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(e),null;case 1:return Zt(e.type)&&$u(),bt(e),null;case 3:return r=e.stateNode,ao(),Ue(Jt),Ue(jt),lp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(tu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(af(Un),Un=null))),Jh(t,e),bt(e),null;case 5:ap(e);var i=$i(Wa.current);if(n=e.type,t!==null&&e.stateNode!=null)Y_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return bt(e),null}if(t=$i(Jn.current),tu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yn]=e,r[$a]=s,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<ua.length;i++)je(ua[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":lg(r,s),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},je("invalid",r);break;case"textarea":cg(r,s),je("invalid",r)}Rh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&eu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&eu(r.textContent,l,t),i=["children",""+l]):ba.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&je("scroll",r)}switch(n){case"input":ql(r),ug(r,s,!0);break;case"textarea":ql(r),dg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Bu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=R0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yn]=e,t[$a]=r,Q_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ah(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<ua.length;i++)je(ua[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":lg(t,r),i=wh(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ke({},r,{value:void 0}),je("invalid",t);break;case"textarea":cg(t,r),i=Ih(t,r),je("invalid",t);break;default:i=r}Rh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?C0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&A0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Oa(t,u):typeof u=="number"&&Oa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ba.hasOwnProperty(s)?u!=null&&s==="onScroll"&&je("scroll",t):u!=null&&Ff(t,s,u,o))}switch(n){case"input":ql(t),ug(t,r,!1);break;case"textarea":ql(t),dg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qs(t,!!r.multiple,s,!1):r.defaultValue!=null&&qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Bu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return bt(e),null;case 6:if(t&&e.stateNode!=null)X_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=$i(Wa.current),$i(Jn.current),tu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yn]=e,(s=r.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:eu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&eu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=e,e.stateNode=r}return bt(e),null;case 13:if(Ue(We),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ze&&cn!==null&&e.mode&1&&!(e.flags&128))m_(),so(),e.flags|=98560,s=!1;else if(s=tu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[Yn]=e}else so(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;bt(e),s=!1}else Un!==null&&(af(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||We.current&1?dt===0&&(dt=3):wp())),e.updateQueue!==null&&(e.flags|=4),bt(e),null);case 4:return ao(),Jh(t,e),t===null&&za(e.stateNode.containerInfo),bt(e),null;case 10:return rp(e.type._context),bt(e),null;case 17:return Zt(e.type)&&$u(),bt(e),null;case 19:if(Ue(We),s=e.memoizedState,s===null)return bt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Jo(s,!1);else{if(dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yu(t),o!==null){for(e.flags|=128,Jo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Me(We,We.current&1|2),e.child}t=t.sibling}s.tail!==null&&et()>uo&&(e.flags|=128,r=!0,Jo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ze)return bt(e),null}else 2*et()-s.renderingStartTime>uo&&n!==1073741824&&(e.flags|=128,r=!0,Jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=et(),e.sibling=null,n=We.current,Me(We,r?n&1|2:n&1),e):(bt(e),null);case 22:case 23:return _p(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ln&1073741824&&(bt(e),e.subtreeFlags&6&&(e.flags|=8192)):bt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function rR(t,e){switch(Zf(e),e.tag){case 1:return Zt(e.type)&&$u(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ao(),Ue(Jt),Ue(jt),lp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ap(e),null;case 13:if(Ue(We),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));so()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ue(We),null;case 4:return ao(),null;case 10:return rp(e.type._context),null;case 22:case 23:return _p(),null;case 24:return null;default:return null}}var iu=!1,Lt=!1,iR=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Xe(t,e,r)}else n.current=null}function Zh(t,e,n){try{n()}catch(r){Xe(t,e,r)}}var ey=!1;function sR(t,e){if(Lh=ju,t=n_(),Xf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,h=0,p=t,m=null;t:for(;;){for(var T;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(T=p.firstChild)!==null;)m=p,p=T;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++h===r&&(u=o),(T=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vh={focusedElem:t,selectionRange:n},ju=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var k=C.memoizedProps,O=C.memoizedState,I=e.stateNode,_=I.getSnapshotBeforeUpdate(e.elementType===e.type?k:Vn(e.type,k),O);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(V){Xe(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return C=ey,ey=!1,C}function Ia(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zh(e,n,s)}i=i.next}while(i!==r)}}function Lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ef(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function J_(t){var e=t.alternate;e!==null&&(t.alternate=null,J_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[$a],delete e[Uh],delete e[z1],delete e[B1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z_(t){return t.tag===5||t.tag===3||t.tag===4}function ty(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bu));else if(r!==4&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}function nf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nf(t,e,n),t=t.sibling;t!==null;)nf(t,e,n),t=t.sibling}var wt=null,Fn=!1;function qr(t,e,n){for(n=n.child;n!==null;)ew(t,e,n),n=n.sibling}function ew(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Cc,n)}catch{}switch(n.tag){case 5:Lt||Hs(n,e);case 6:var r=wt,i=Fn;wt=null,qr(t,e,n),wt=r,Fn=i,wt!==null&&(Fn?(t=wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(Fn?(t=wt,n=n.stateNode,t.nodeType===8?zd(t.parentNode,n):t.nodeType===1&&zd(t,n),Fa(t)):zd(wt,n.stateNode));break;case 4:r=wt,i=Fn,wt=n.stateNode.containerInfo,Fn=!0,qr(t,e,n),wt=r,Fn=i;break;case 0:case 11:case 14:case 15:if(!Lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zh(n,e,o),i=i.next}while(i!==r)}qr(t,e,n);break;case 1:if(!Lt&&(Hs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Xe(n,e,l)}qr(t,e,n);break;case 21:qr(t,e,n);break;case 22:n.mode&1?(Lt=(r=Lt)||n.memoizedState!==null,qr(t,e,n),Lt=r):qr(t,e,n);break;default:qr(t,e,n)}}function ny(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iR),e.forEach(function(r){var i=pR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:wt=l.stateNode,Fn=!1;break e;case 3:wt=l.stateNode.containerInfo,Fn=!0;break e;case 4:wt=l.stateNode.containerInfo,Fn=!0;break e}l=l.return}if(wt===null)throw Error(H(160));ew(s,o,i),wt=null,Fn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tw(e,t),e=e.sibling}function tw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Gn(t),r&4){try{Ia(3,t,t.return),Lc(3,t)}catch(k){Xe(t,t.return,k)}try{Ia(5,t,t.return)}catch(k){Xe(t,t.return,k)}}break;case 1:Ln(e,t),Gn(t),r&512&&n!==null&&Hs(n,n.return);break;case 5:if(Ln(e,t),Gn(t),r&512&&n!==null&&Hs(n,n.return),t.flags&32){var i=t.stateNode;try{Oa(i,"")}catch(k){Xe(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&I0(i,s),Ah(l,o);var c=Ah(l,s);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?C0(i,p):h==="dangerouslySetInnerHTML"?A0(i,p):h==="children"?Oa(i,p):Ff(i,h,p,c)}switch(l){case"input":Eh(i,s);break;case"textarea":S0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?qs(i,!!s.multiple,T,!1):m!==!!s.multiple&&(s.defaultValue!=null?qs(i,!!s.multiple,s.defaultValue,!0):qs(i,!!s.multiple,s.multiple?[]:"",!1))}i[$a]=s}catch(k){Xe(t,t.return,k)}}break;case 6:if(Ln(e,t),Gn(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Xe(t,t.return,k)}}break;case 3:if(Ln(e,t),Gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(k){Xe(t,t.return,k)}break;case 4:Ln(e,t),Gn(t);break;case 13:Ln(e,t),Gn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yp=et())),r&4&&ny(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Lt=(c=Lt)||h,Ln(e,t),Lt=c):Ln(e,t),Gn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Q=t,h=t.child;h!==null;){for(p=Q=h;Q!==null;){switch(m=Q,T=m.child,m.tag){case 0:case 11:case 14:case 15:Ia(4,m,m.return);break;case 1:Hs(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(k){Xe(r,n,k)}}break;case 5:Hs(m,m.return);break;case 22:if(m.memoizedState!==null){iy(p);continue}}T!==null?(T.return=m,Q=T):iy(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=P0("display",o))}catch(k){Xe(t,t.return,k)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Xe(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ln(e,t),Gn(t),r&4&&ny(t);break;case 21:break;default:Ln(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z_(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Oa(i,""),r.flags&=-33);var s=ty(t);nf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ty(t);tf(t,l,o);break;default:throw Error(H(161))}}catch(u){Xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oR(t,e,n){Q=t,nw(t)}function nw(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||iu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Lt;l=iu;var c=Lt;if(iu=o,(Lt=u)&&!c)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?sy(i):u!==null?(u.return=o,Q=u):sy(i);for(;s!==null;)Q=s,nw(s),s=s.sibling;Q=i,iu=l,Lt=c}ry(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):ry(t)}}function ry(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Lt||Lc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Fa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Lt||e.flags&512&&ef(e)}catch(m){Xe(e,e.return,m)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function iy(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function sy(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lc(4,e)}catch(u){Xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Xe(e,i,u)}}var s=e.return;try{ef(e)}catch(u){Xe(e,s,u)}break;case 5:var o=e.return;try{ef(e)}catch(u){Xe(e,o,u)}}}catch(u){Xe(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var aR=Math.ceil,Zu=Dr.ReactCurrentDispatcher,mp=Dr.ReactCurrentOwner,In=Dr.ReactCurrentBatchConfig,Se=0,gt=null,st=null,It=0,ln=0,Ws=Ii(0),dt=0,Qa=null,ts=0,Vc=0,gp=0,Sa=null,Qt=null,yp=0,uo=1/0,pr=null,ec=!1,rf=null,ci=null,su=!1,ri=null,tc=0,Ra=0,sf=null,Eu=-1,Tu=0;function Wt(){return Se&6?et():Eu!==-1?Eu:Eu=et()}function di(t){return t.mode&1?Se&2&&It!==0?It&-It:H1.transition!==null?(Tu===0&&(Tu=U0()),Tu):(t=Ne,t!==0||(t=window.event,t=t===void 0?16:K0(t.type)),t):1}function Bn(t,e,n,r){if(50<Ra)throw Ra=0,sf=null,Error(H(185));hl(t,n,r),(!(Se&2)||t!==gt)&&(t===gt&&(!(Se&2)&&(Vc|=n),dt===4&&Jr(t,It)),en(t,r),n===1&&Se===0&&!(e.mode&1)&&(uo=et()+500,bc&&Si()))}function en(t,e){var n=t.callbackNode;HS(t,e);var r=Fu(t,t===gt?It:0);if(r===0)n!==null&&pg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pg(n),e===1)t.tag===0?$1(oy.bind(null,t)):h_(oy.bind(null,t)),j1(function(){!(Se&6)&&Si()}),n=null;else{switch(z0(r)){case 1:n=$f;break;case 4:n=F0;break;case 16:n=Vu;break;case 536870912:n=j0;break;default:n=Vu}n=cw(n,rw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rw(t,e){if(Eu=-1,Tu=0,Se&6)throw Error(H(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var r=Fu(t,t===gt?It:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nc(t,r);else{e=r;var i=Se;Se|=2;var s=sw();(gt!==t||It!==e)&&(pr=null,uo=et()+500,Qi(t,e));do try{cR();break}catch(l){iw(t,l)}while(!0);np(),Zu.current=s,Se=i,st!==null?e=0:(gt=null,It=0,e=dt)}if(e!==0){if(e===2&&(i=Nh(t),i!==0&&(r=i,e=of(t,i))),e===1)throw n=Qa,Qi(t,0),Jr(t,r),en(t,et()),n;if(e===6)Jr(t,r);else{if(i=t.current.alternate,!(r&30)&&!lR(i)&&(e=nc(t,r),e===2&&(s=Nh(t),s!==0&&(r=s,e=of(t,s))),e===1))throw n=Qa,Qi(t,0),Jr(t,r),en(t,et()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Fi(t,Qt,pr);break;case 3:if(Jr(t,r),(r&130023424)===r&&(e=yp+500-et(),10<e)){if(Fu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jh(Fi.bind(null,t,Qt,pr),e);break}Fi(t,Qt,pr);break;case 4:if(Jr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-zn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=et()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aR(r/1960))-r,10<r){t.timeoutHandle=jh(Fi.bind(null,t,Qt,pr),r);break}Fi(t,Qt,pr);break;case 5:Fi(t,Qt,pr);break;default:throw Error(H(329))}}}return en(t,et()),t.callbackNode===n?rw.bind(null,t):null}function of(t,e){var n=Sa;return t.current.memoizedState.isDehydrated&&(Qi(t,e).flags|=256),t=nc(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&af(e)),t}function af(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function lR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jr(t,e){for(e&=~gp,e&=~Vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),r=1<<n;t[n]=-1,e&=~r}}function oy(t){if(Se&6)throw Error(H(327));Xs();var e=Fu(t,0);if(!(e&1))return en(t,et()),null;var n=nc(t,e);if(t.tag!==0&&n===2){var r=Nh(t);r!==0&&(e=r,n=of(t,r))}if(n===1)throw n=Qa,Qi(t,0),Jr(t,e),en(t,et()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fi(t,Qt,pr),en(t,et()),null}function vp(t,e){var n=Se;Se|=1;try{return t(e)}finally{Se=n,Se===0&&(uo=et()+500,bc&&Si())}}function ns(t){ri!==null&&ri.tag===0&&!(Se&6)&&Xs();var e=Se;Se|=1;var n=In.transition,r=Ne;try{if(In.transition=null,Ne=1,t)return t()}finally{Ne=r,In.transition=n,Se=e,!(Se&6)&&Si()}}function _p(){ln=Ws.current,Ue(Ws)}function Qi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,F1(n)),st!==null)for(n=st.return;n!==null;){var r=n;switch(Zf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$u();break;case 3:ao(),Ue(Jt),Ue(jt),lp();break;case 5:ap(r);break;case 4:ao();break;case 13:Ue(We);break;case 19:Ue(We);break;case 10:rp(r.type._context);break;case 22:case 23:_p()}n=n.return}if(gt=t,st=t=hi(t.current,null),It=ln=e,dt=0,Qa=null,gp=Vc=ts=0,Qt=Sa=null,Bi!==null){for(e=0;e<Bi.length;e++)if(n=Bi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Bi=null}return t}function iw(t,e){do{var n=st;try{if(np(),vu.current=Ju,Xu){for(var r=qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xu=!1}if(es=0,mt=ut=qe=null,Ta=!1,qa=0,mp.current=null,n===null||n.return===null){dt=1,Qa=e,st=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=It,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var T=Kg(o);if(T!==null){T.flags&=-257,Gg(T,o,l,s,e),T.mode&1&&qg(s,c,e),e=T,u=c;var C=e.updateQueue;if(C===null){var k=new Set;k.add(u),e.updateQueue=k}else C.add(u);break e}else{if(!(e&1)){qg(s,c,e),wp();break e}u=Error(H(426))}}else if(ze&&l.mode&1){var O=Kg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Gg(O,o,l,s,e),ep(lo(u,l));break e}}s=u=lo(u,l),dt!==4&&(dt=2),Sa===null?Sa=[s]:Sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=z_(s,u,e);Ug(s,I);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(ci===null||!ci.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=B_(s,l,e);Ug(s,V);break e}}s=s.return}while(s!==null)}aw(n)}catch(z){e=z,st===n&&n!==null&&(st=n=n.return);continue}break}while(!0)}function sw(){var t=Zu.current;return Zu.current=Ju,t===null?Ju:t}function wp(){(dt===0||dt===3||dt===2)&&(dt=4),gt===null||!(ts&268435455)&&!(Vc&268435455)||Jr(gt,It)}function nc(t,e){var n=Se;Se|=2;var r=sw();(gt!==t||It!==e)&&(pr=null,Qi(t,e));do try{uR();break}catch(i){iw(t,i)}while(!0);if(np(),Se=n,Zu.current=r,st!==null)throw Error(H(261));return gt=null,It=0,dt}function uR(){for(;st!==null;)ow(st)}function cR(){for(;st!==null&&!MS();)ow(st)}function ow(t){var e=uw(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?aw(t):st=e,mp.current=null}function aw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rR(n,e),n!==null){n.flags&=32767,st=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{dt=6,st=null;return}}else if(n=nR(n,e,ln),n!==null){st=n;return}if(e=e.sibling,e!==null){st=e;return}st=e=t}while(e!==null);dt===0&&(dt=5)}function Fi(t,e,n){var r=Ne,i=In.transition;try{In.transition=null,Ne=1,dR(t,e,n,r)}finally{In.transition=i,Ne=r}return null}function dR(t,e,n,r){do Xs();while(ri!==null);if(Se&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(WS(t,s),t===gt&&(st=gt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||su||(su=!0,cw(Vu,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=Ne;Ne=1;var l=Se;Se|=4,mp.current=null,sR(t,n),tw(n,t),N1(Vh),ju=!!Lh,Vh=Lh=null,t.current=n,oR(n),LS(),Se=l,Ne=o,In.transition=s}else t.current=n;if(su&&(su=!1,ri=t,tc=i),s=t.pendingLanes,s===0&&(ci=null),jS(n.stateNode),en(t,et()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ec)throw ec=!1,t=rf,rf=null,t;return tc&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===sf?Ra++:(Ra=0,sf=t):Ra=0,Si(),null}function Xs(){if(ri!==null){var t=z0(tc),e=In.transition,n=Ne;try{if(In.transition=null,Ne=16>t?16:t,ri===null)var r=!1;else{if(t=ri,ri=null,tc=0,Se&6)throw Error(H(331));var i=Se;for(Se|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Q=c;Q!==null;){var h=Q;switch(h.tag){case 0:case 11:case 15:Ia(8,h,s)}var p=h.child;if(p!==null)p.return=h,Q=p;else for(;Q!==null;){h=Q;var m=h.sibling,T=h.return;if(J_(h),h===c){Q=null;break}if(m!==null){m.return=T,Q=m;break}Q=T}}}var C=s.alternate;if(C!==null){var k=C.child;if(k!==null){C.child=null;do{var O=k.sibling;k.sibling=null,k=O}while(k!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ia(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,Q=I;break e}Q=s.return}}var _=t.current;for(Q=_;Q!==null;){o=Q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,Q=A;else e:for(o=_;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Lc(9,l)}}catch(z){Xe(l,l.return,z)}if(l===o){Q=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,Q=V;break e}Q=l.return}}if(Se=i,Si(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Cc,t)}catch{}r=!0}return r}finally{Ne=n,In.transition=e}}return!1}function ay(t,e,n){e=lo(n,e),e=z_(t,e,1),t=ui(t,e,1),e=Wt(),t!==null&&(hl(t,1,e),en(t,e))}function Xe(t,e,n){if(t.tag===3)ay(t,t,n);else for(;e!==null;){if(e.tag===3){ay(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ci===null||!ci.has(r))){t=lo(n,t),t=B_(e,t,1),e=ui(e,t,1),t=Wt(),e!==null&&(hl(e,1,t),en(e,t));break}}e=e.return}}function hR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,gt===t&&(It&n)===n&&(dt===4||dt===3&&(It&130023424)===It&&500>et()-yp?Qi(t,0):gp|=n),en(t,e)}function lw(t,e){e===0&&(t.mode&1?(e=Ql,Ql<<=1,!(Ql&130023424)&&(Ql=4194304)):e=1);var n=Wt();t=Pr(t,e),t!==null&&(hl(t,e,n),en(t,n))}function fR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lw(t,n)}function pR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),lw(t,n)}var uw;uw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Xt=!1,tR(t,e,n);Xt=!!(t.flags&131072)}else Xt=!1,ze&&e.flags&1048576&&f_(e,qu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wu(t,e),t=e.pendingProps;var i=io(e,jt.current);Ys(e,n),i=cp(null,e,r,t,i,n);var s=dp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(r)?(s=!0,Hu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sp(e),i.updater=Mc,e.stateNode=i,i._reactInternals=e,qh(e,r,t,n),e=Qh(null,e,r,!0,s,n)):(e.tag=0,ze&&s&&Jf(e),Ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=gR(r),t=Vn(r,t),i){case 0:e=Gh(null,e,r,t,n);break e;case 1:e=Xg(null,e,r,t,n);break e;case 11:e=Qg(null,e,r,t,n);break e;case 14:e=Yg(null,e,r,Vn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Gh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Xg(t,e,r,i,n);case 3:e:{if(q_(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,__(t,e),Qu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=lo(Error(H(423)),e),e=Jg(t,e,r,n,i);break e}else if(r!==i){i=lo(Error(H(424)),e),e=Jg(t,e,r,n,i);break e}else for(cn=li(e.stateNode.containerInfo.firstChild),hn=e,ze=!0,Un=null,n=y_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),r===i){e=Cr(t,e,n);break e}Ht(t,e,r,n)}e=e.child}return e;case 5:return w_(e),t===null&&$h(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Fh(r,i)?o=null:s!==null&&Fh(r,s)&&(e.flags|=32),W_(t,e),Ht(t,e,o,n),e.child;case 6:return t===null&&$h(e),null;case 13:return K_(t,e,n);case 4:return op(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=oo(e,null,r,n):Ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Qg(t,e,r,i,n);case 7:return Ht(t,e,e.pendingProps,n),e.child;case 8:return Ht(t,e,e.pendingProps.children,n),e.child;case 12:return Ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Me(Ku,r._currentValue),r._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===i.children&&!Jt.current){e=Cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Tr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Hh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Hh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ys(e,n),i=Rn(i),r=r(i),e.flags|=1,Ht(t,e,r,n),e.child;case 14:return r=e.type,i=Vn(r,e.pendingProps),i=Vn(r.type,i),Yg(t,e,r,i,n);case 15:return $_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),wu(t,e),e.tag=1,Zt(r)?(t=!0,Hu(e)):t=!1,Ys(e,n),U_(e,r,i),qh(e,r,i,n),Qh(null,e,r,!0,t,n);case 19:return G_(t,e,n);case 22:return H_(t,e,n)}throw Error(H(156,e.tag))};function cw(t,e){return V0(t,e)}function mR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,r){return new mR(t,e,n,r)}function Ep(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gR(t){if(typeof t=="function")return Ep(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uf)return 11;if(t===zf)return 14}return 2}function hi(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Iu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ep(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ms:return Yi(n.children,i,s,e);case jf:o=8,i|=8;break;case gh:return t=En(12,n,e,i|2),t.elementType=gh,t.lanes=s,t;case yh:return t=En(13,n,e,i),t.elementType=yh,t.lanes=s,t;case vh:return t=En(19,n,e,i),t.elementType=vh,t.lanes=s,t;case w0:return Fc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v0:o=10;break e;case _0:o=9;break e;case Uf:o=11;break e;case zf:o=14;break e;case Qr:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=En(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yi(t,e,n,r){return t=En(7,t,r,e),t.lanes=n,t}function Fc(t,e,n,r){return t=En(22,t,r,e),t.elementType=w0,t.lanes=n,t.stateNode={isHidden:!1},t}function Qd(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function Yd(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xd(0),this.expirationTimes=xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tp(t,e,n,r,i,s,o,l,u){return t=new yR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sp(s),t}function vR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function dw(t){if(!t)return gi;t=t._reactInternals;e:{if(ps(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(Zt(n))return d_(t,n,e)}return e}function hw(t,e,n,r,i,s,o,l,u){return t=Tp(n,r,!0,t,i,s,o,l,u),t.context=dw(null),n=t.current,r=Wt(),i=di(n),s=Tr(r,i),s.callback=e??null,ui(n,s,i),t.current.lanes=i,hl(t,i,r),en(t,r),t}function jc(t,e,n,r){var i=e.current,s=Wt(),o=di(i);return n=dw(n),e.context===null?e.context=n:e.pendingContext=n,e=Tr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ui(i,e,o),t!==null&&(Bn(t,i,o,s),yu(t,i,o)),o}function rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ly(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ip(t,e){ly(t,e),(t=t.alternate)&&ly(t,e)}function _R(){return null}var fw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sp(t){this._internalRoot=t}Uc.prototype.render=Sp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));jc(t,e,null,null)};Uc.prototype.unmount=Sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){jc(null,t,null,null)}),e[Ar]=null}};function Uc(t){this._internalRoot=t}Uc.prototype.unstable_scheduleHydration=function(t){if(t){var e=H0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xr.length&&e!==0&&e<Xr[n].priority;n++);Xr.splice(n,0,t),n===0&&q0(t)}};function Rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uy(){}function wR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=rc(o);s.call(c)}}var o=hw(e,r,t,0,null,!1,!1,"",uy);return t._reactRootContainer=o,t[Ar]=o.current,za(t.nodeType===8?t.parentNode:t),ns(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=rc(u);l.call(c)}}var u=Tp(t,0,!1,null,null,!1,!1,"",uy);return t._reactRootContainer=u,t[Ar]=u.current,za(t.nodeType===8?t.parentNode:t),ns(function(){jc(e,u,n,r)}),u}function Bc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=rc(o);l.call(u)}}jc(e,o,t,i)}else o=wR(n,e,t,i,r);return rc(o)}B0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(Hf(e,n|1),en(e,et()),!(Se&6)&&(uo=et()+500,Si()))}break;case 13:ns(function(){var r=Pr(t,1);if(r!==null){var i=Wt();Bn(r,t,1,i)}}),Ip(t,1)}};Wf=function(t){if(t.tag===13){var e=Pr(t,134217728);if(e!==null){var n=Wt();Bn(e,t,134217728,n)}Ip(t,134217728)}};$0=function(t){if(t.tag===13){var e=di(t),n=Pr(t,e);if(n!==null){var r=Wt();Bn(n,t,e,r)}Ip(t,e)}};H0=function(){return Ne};W0=function(t,e){var n=Ne;try{return Ne=t,e()}finally{Ne=n}};Ch=function(t,e,n){switch(e){case"input":if(Eh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Dc(r);if(!i)throw Error(H(90));T0(r),Eh(r,i)}}}break;case"textarea":S0(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};N0=vp;D0=ns;var ER={usingClientEntryPoint:!1,Events:[pl,js,Dc,k0,x0,vp]},Zo={findFiberByHostInstance:zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TR={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=M0(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||_R,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{Cc=ou.inject(TR),Xn=ou}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ER;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rp(e))throw Error(H(200));return vR(t,e,null,n)};mn.createRoot=function(t,e){if(!Rp(t))throw Error(H(299));var n=!1,r="",i=fw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Tp(t,1,!1,null,null,n,!1,r,i),t[Ar]=e.current,za(t.nodeType===8?t.parentNode:t),new Sp(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=M0(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return ns(t)};mn.hydrate=function(t,e,n){if(!zc(e))throw Error(H(200));return Bc(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!Rp(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=fw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hw(e,null,t,1,n??null,i,!1,s,o),t[Ar]=e.current,za(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Uc(e)};mn.render=function(t,e,n){if(!zc(e))throw Error(H(200));return Bc(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!zc(t))throw Error(H(40));return t._reactRootContainer?(ns(function(){Bc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ar]=null})}),!0):!1};mn.unstable_batchedUpdates=vp;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zc(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return Bc(t,e,n,!1,r)};mn.version="18.3.1-next-f1338f8080-20240426";function pw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pw)}catch(t){console.error(t)}}pw(),p0.exports=mn;var Ap=p0.exports;const IR=n0(Ap),SR=t0({__proto__:null,default:IR},[Ap]);var cy=Ap;ph.createRoot=cy.createRoot,ph.hydrateRoot=cy.hydrateRoot;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function He(){return He=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},He.apply(this,arguments)}var rt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rt||(rt={}));const dy="popstate";function RR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Ya("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:rs(i)}return PR(e,n,null,t)}function he(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function co(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function AR(){return Math.random().toString(36).substr(2,8)}function hy(t,e){return{usr:t.state,key:t.key,idx:e}}function Ya(t,e,n,r){return n===void 0&&(n=null),He({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ri(e):e,{state:n,key:e&&e.key||r||AR()})}function rs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ri(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function PR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=rt.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(He({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){l=rt.Pop;let O=h(),I=O==null?null:O-c;c=O,u&&u({action:l,location:k.location,delta:I})}function m(O,I){l=rt.Push;let _=Ya(k.location,O,I);c=h()+1;let A=hy(_,c),V=k.createHref(_);try{o.pushState(A,"",V)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(V)}s&&u&&u({action:l,location:k.location,delta:1})}function T(O,I){l=rt.Replace;let _=Ya(k.location,O,I);c=h();let A=hy(_,c),V=k.createHref(_);o.replaceState(A,"",V),s&&u&&u({action:l,location:k.location,delta:0})}function C(O){let I=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof O=="string"?O:rs(O);return _=_.replace(/ $/,"%20"),he(I,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,I)}let k={get action(){return l},get location(){return t(i,o)},listen(O){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(dy,p),u=O,()=>{i.removeEventListener(dy,p),u=null}},createHref(O){return e(i,O)},createURL:C,encodeLocation(O){let I=C(O);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:T,go(O){return o.go(O)}};return k}var Oe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Oe||(Oe={}));const CR=new Set(["lazy","caseSensitive","path","id","index","children"]);function kR(t){return t.index===!0}function Xa(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],l=typeof i.id=="string"?i.id:o.join("-");if(he(i.index!==!0||!i.children,"Cannot specify children on an index route"),he(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),kR(i)){let u=He({},i,e(i),{id:l});return r[l]=u,u}else{let u=He({},i,e(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=Xa(i.children,e,o,r)),u}})}function Ui(t,e,n){return n===void 0&&(n="/"),Su(t,e,n,!1)}function Su(t,e,n,r){let i=typeof e=="string"?Ri(e):e,s=Ro(i.pathname||"/",n);if(s==null)return null;let o=mw(t);NR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=BR(s);l=UR(o[u],c,r)}return l}function xR(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function mw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(he(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ir([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(he(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),mw(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:FR(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of gw(s.path))i(s,o,u)}),e}function gw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=gw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function NR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:jR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const DR=/^:[\w-]+$/,bR=3,OR=2,MR=1,LR=10,VR=-2,fy=t=>t==="*";function FR(t,e){let n=t.split("/"),r=n.length;return n.some(fy)&&(r+=VR),e&&(r+=OR),n.filter(i=>!fy(i)).reduce((i,s)=>i+(DR.test(s)?bR:s===""?MR:LR),r)}function jR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UR(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",p=py({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=py({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Ir([s,p.pathname]),pathnameBase:WR(Ir([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Ir([s,p.pathnameBase]))}return o}function py(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:m,isOptional:T}=h;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const C=l[p];return T&&!C?c[m]=void 0:c[m]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function zR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),co(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function BR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return co(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ro(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function $R(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ri(t):t;return{pathname:n?n.startsWith("/")?n:HR(n,e):e,search:qR(r),hash:KR(i)}}function HR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $c(t,e){let n=yw(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Hc(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ri(t):(i=He({},t),he(!i.pathname||!i.pathname.includes("?"),Xd("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),Xd("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),Xd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=$R(i,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Ir=t=>t.join("/").replace(/\/\/+/g,"/"),WR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,KR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Pp{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Wc(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const vw=["post","put","patch","delete"],GR=new Set(vw),QR=["get",...vw],YR=new Set(QR),XR=new Set([301,302,303,307,308]),JR=new Set([307,308]),Jd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ZR={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ea={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Cp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eA=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),_w="remix-router-transitions";function tA(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;he(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let x=t.detectErrorBoundary;i=D=>({hasErrorBoundary:x(D)})}else i=eA;let s={},o=Xa(t.routes,i,void 0,s),l,u=t.basename||"/",c=t.unstable_dataStrategy||oA,h=t.unstable_patchRoutesOnMiss,p=He({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),m=null,T=new Set,C=null,k=null,O=null,I=t.hydrationData!=null,_=Ui(o,t.history.location,u),A=null;if(_==null&&!h){let x=$t(404,{pathname:t.history.location.pathname}),{matches:D,route:L}=Sy(o);_=D,A={[L.id]:x}}_&&h&&cr(_,o,t.history.location.pathname).active&&(_=null);let V;if(!_)V=!1,_=[];else if(_.some(x=>x.route.lazy))V=!1;else if(!_.some(x=>x.route.loader))V=!0;else if(p.v7_partialHydration){let x=t.hydrationData?t.hydrationData.loaderData:null,D=t.hydrationData?t.hydrationData.errors:null,L=U=>U.route.loader?typeof U.route.loader=="function"&&U.route.loader.hydrate===!0?!1:x&&x[U.route.id]!==void 0||D&&D[U.route.id]!==void 0:!0;if(D){let U=_.findIndex(G=>D[G.route.id]!==void 0);V=_.slice(0,U+1).every(L)}else V=_.every(L)}else V=t.hydrationData!=null;let z,N={historyAction:t.history.action,location:t.history.location,matches:_,initialized:V,navigation:Jd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||A,fetchers:new Map,blockers:new Map},E=rt.Pop,y=!1,v,R=!1,P=new Map,b=null,S=!1,Te=!1,yt=[],rn=[],Ie=new Map,K=0,ee=-1,ne=new Map,ve=new Set,fe=new Map,ke=new Map,Qe=new Set,ot=new Map,tt=new Map,Pt=new Map,Wn=!1;function de(){if(m=t.history.listen(x=>{let{action:D,location:L,delta:U}=x;if(Wn){Wn=!1;return}co(tt.size===0||U!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let G=Oo({currentLocation:N.location,nextLocation:L,historyAction:D});if(G&&U!=null){Wn=!0,t.history.go(U*-1),Ni(G,{state:"blocked",location:L,proceed(){Ni(G,{state:"proceeding",proceed:void 0,reset:void 0,location:L}),t.history.go(U)},reset(){let X=new Map(N.blockers);X.set(G,ea),De({blockers:X})}});return}return Bt(D,L)}),n){_A(e,P);let x=()=>wA(e,P);e.addEventListener("pagehide",x),b=()=>e.removeEventListener("pagehide",x)}return N.initialized||Bt(rt.Pop,N.location,{initialHydration:!0}),z}function xe(){m&&m(),b&&b(),T.clear(),v&&v.abort(),N.fetchers.forEach((x,D)=>Es(D)),N.blockers.forEach((x,D)=>Is(D))}function Gt(x){return T.add(x),()=>T.delete(x)}function De(x,D){D===void 0&&(D={}),N=He({},N,x);let L=[],U=[];p.v7_fetcherPersist&&N.fetchers.forEach((G,X)=>{G.state==="idle"&&(Qe.has(X)?U.push(X):L.push(X))}),[...T].forEach(G=>G(N,{deletedFetchers:U,unstable_viewTransitionOpts:D.viewTransitionOpts,unstable_flushSync:D.flushSync===!0})),p.v7_fetcherPersist&&(L.forEach(G=>N.fetchers.delete(G)),U.forEach(G=>Es(G)))}function Be(x,D,L){var U,G;let{flushSync:X}=L===void 0?{}:L,ie=N.actionData!=null&&N.navigation.formMethod!=null&&jn(N.navigation.formMethod)&&N.navigation.state==="loading"&&((U=x.state)==null?void 0:U._isRedirect)!==!0,W;D.actionData?Object.keys(D.actionData).length>0?W=D.actionData:W=null:ie?W=N.actionData:W=null;let ae=D.loaderData?Ty(N.loaderData,D.loaderData,D.matches||[],D.errors):N.loaderData,Z=N.blockers;Z.size>0&&(Z=new Map(Z),Z.forEach((_e,Pe)=>Z.set(Pe,ea)));let J=y===!0||N.navigation.formMethod!=null&&jn(N.navigation.formMethod)&&((G=x.state)==null?void 0:G._isRedirect)!==!0;l&&(o=l,l=void 0),S||E===rt.Pop||(E===rt.Push?t.history.push(x,x.state):E===rt.Replace&&t.history.replace(x,x.state));let pe;if(E===rt.Pop){let _e=P.get(N.location.pathname);_e&&_e.has(x.pathname)?pe={currentLocation:N.location,nextLocation:x}:P.has(x.pathname)&&(pe={currentLocation:x,nextLocation:N.location})}else if(R){let _e=P.get(N.location.pathname);_e?_e.add(x.pathname):(_e=new Set([x.pathname]),P.set(N.location.pathname,_e)),pe={currentLocation:N.location,nextLocation:x}}De(He({},D,{actionData:W,loaderData:ae,historyAction:E,location:x,initialized:!0,navigation:Jd,revalidation:"idle",restoreScrollPosition:Lo(x,D.matches||N.matches),preventScrollReset:J,blockers:Z}),{viewTransitionOpts:pe,flushSync:X===!0}),E=rt.Pop,y=!1,R=!1,S=!1,Te=!1,yt=[],rn=[]}async function zt(x,D){if(typeof x=="number"){t.history.go(x);return}let L=lf(N.location,N.matches,u,p.v7_prependBasename,x,p.v7_relativeSplatPath,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:U,submission:G,error:X}=my(p.v7_normalizeFormMethod,!1,L,D),ie=N.location,W=Ya(N.location,U,D&&D.state);W=He({},W,t.history.encodeLocation(W));let ae=D&&D.replace!=null?D.replace:void 0,Z=rt.Push;ae===!0?Z=rt.Replace:ae===!1||G!=null&&jn(G.formMethod)&&G.formAction===N.location.pathname+N.location.search&&(Z=rt.Replace);let J=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,pe=(D&&D.unstable_flushSync)===!0,_e=Oo({currentLocation:ie,nextLocation:W,historyAction:Z});if(_e){Ni(_e,{state:"blocked",location:W,proceed(){Ni(_e,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),zt(x,D)},reset(){let Pe=new Map(N.blockers);Pe.set(_e,ea),De({blockers:Pe})}});return}return await Bt(Z,W,{submission:G,pendingError:X,preventScrollReset:J,replace:D&&D.replace,enableViewTransition:D&&D.unstable_viewTransition,flushSync:pe})}function Nn(){if(lt(),De({revalidation:"loading"}),N.navigation.state!=="submitting"){if(N.navigation.state==="idle"){Bt(N.historyAction,N.location,{startUninterruptedRevalidation:!0});return}Bt(E||N.historyAction,N.navigation.location,{overrideNavigation:N.navigation})}}async function Bt(x,D,L){v&&v.abort(),v=null,E=x,S=(L&&L.startUninterruptedRevalidation)===!0,Ss(N.location,N.matches),y=(L&&L.preventScrollReset)===!0,R=(L&&L.enableViewTransition)===!0;let U=l||o,G=L&&L.overrideNavigation,X=Ui(U,D,u),ie=(L&&L.flushSync)===!0,W=cr(X,U,D.pathname);if(W.active&&W.matches&&(X=W.matches),!X){let{error:we,notFoundMatches:Ze,route:$e}=lr(D.pathname);Be(D,{matches:Ze,loaderData:{},errors:{[$e.id]:we}},{flushSync:ie});return}if(N.initialized&&!Te&&hA(N.location,D)&&!(L&&L.submission&&jn(L.submission.formMethod))){Be(D,{matches:X},{flushSync:ie});return}v=new AbortController;let ae=xs(t.history,D,v.signal,L&&L.submission),Z;if(L&&L.pendingError)Z=[Aa(X).route.id,{type:Oe.error,error:L.pendingError}];else if(L&&L.submission&&jn(L.submission.formMethod)){let we=await jr(ae,D,L.submission,X,W.active,{replace:L.replace,flushSync:ie});if(we.shortCircuited)return;if(we.pendingActionResult){let[Ze,$e]=we.pendingActionResult;if(un($e)&&Wc($e.error)&&$e.error.status===404){v=null,Be(D,{matches:we.matches,loaderData:{},errors:{[Ze]:$e.error}});return}}X=we.matches||X,Z=we.pendingActionResult,G=Zd(D,L.submission),ie=!1,W.active=!1,ae=xs(t.history,ae.url,ae.signal)}let{shortCircuited:J,matches:pe,loaderData:_e,errors:Pe}=await ki(ae,D,X,W.active,G,L&&L.submission,L&&L.fetcherSubmission,L&&L.replace,L&&L.initialHydration===!0,ie,Z);J||(v=null,Be(D,He({matches:pe||X},Iy(Z),{loaderData:_e,errors:Pe})))}async function jr(x,D,L,U,G,X){X===void 0&&(X={}),lt();let ie=yA(D,L);if(De({navigation:ie},{flushSync:X.flushSync===!0}),G){let Z=await bi(U,D.pathname,x.signal);if(Z.type==="aborted")return{shortCircuited:!0};if(Z.type==="error"){let{error:J,notFoundMatches:pe,route:_e}=zr(D.pathname,Z);return{matches:pe,pendingActionResult:[_e.id,{type:Oe.error,error:J}]}}else if(Z.matches)U=Z.matches;else{let{notFoundMatches:J,error:pe,route:_e}=lr(D.pathname);return{matches:J,pendingActionResult:[_e.id,{type:Oe.error,error:pe}]}}}let W,ae=ca(U,D);if(!ae.route.action&&!ae.route.lazy)W={type:Oe.error,error:$t(405,{method:x.method,pathname:D.pathname,routeId:ae.route.id})};else if(W=(await Ur("action",x,[ae],U))[0],x.signal.aborted)return{shortCircuited:!0};if(Wi(W)){let Z;return X&&X.replace!=null?Z=X.replace:Z=_y(W.response.headers.get("Location"),new URL(x.url),u)===N.location.pathname+N.location.search,await ar(x,W,{submission:L,replace:Z}),{shortCircuited:!0}}if(Hi(W))throw $t(400,{type:"defer-action"});if(un(W)){let Z=Aa(U,ae.route.id);return(X&&X.replace)!==!0&&(E=rt.Push),{matches:U,pendingActionResult:[Z.route.id,W]}}return{matches:U,pendingActionResult:[ae.route.id,W]}}async function ki(x,D,L,U,G,X,ie,W,ae,Z,J){let pe=G||Zd(D,X),_e=X||ie||Py(pe),Pe=!S&&(!p.v7_partialHydration||!ae);if(U){if(Pe){let Ve=Dn(J);De(He({navigation:pe},Ve!==void 0?{actionData:Ve}:{}),{flushSync:Z})}let ce=await bi(L,D.pathname,x.signal);if(ce.type==="aborted")return{shortCircuited:!0};if(ce.type==="error"){let{error:Ve,notFoundMatches:kt,route:Ce}=zr(D.pathname,ce);return{matches:kt,loaderData:{},errors:{[Ce.id]:Ve}}}else if(ce.matches)L=ce.matches;else{let{error:Ve,notFoundMatches:kt,route:Ce}=lr(D.pathname);return{matches:kt,loaderData:{},errors:{[Ce.id]:Ve}}}}let we=l||o,[Ze,$e]=gy(t.history,N,L,_e,D,p.v7_partialHydration&&ae===!0,p.unstable_skipActionErrorRevalidation,Te,yt,rn,Qe,fe,ve,we,u,J);if(Di(ce=>!(L&&L.some(Ve=>Ve.route.id===ce))||Ze&&Ze.some(Ve=>Ve.route.id===ce)),ee=++K,Ze.length===0&&$e.length===0){let ce=Ts();return Be(D,He({matches:L,loaderData:{},errors:J&&un(J[1])?{[J[0]]:J[1].error}:null},Iy(J),ce?{fetchers:new Map(N.fetchers)}:{}),{flushSync:Z}),{shortCircuited:!0}}if(Pe){let ce={};if(!U){ce.navigation=pe;let Ve=Dn(J);Ve!==void 0&&(ce.actionData=Ve)}$e.length>0&&(ce.fetchers=or($e)),De(ce,{flushSync:Z})}$e.forEach(ce=>{Ie.has(ce.key)&&bn(ce.key),ce.controller&&Ie.set(ce.key,ce.controller)});let Br=()=>$e.forEach(ce=>bn(ce.key));v&&v.signal.addEventListener("abort",Br);let{loaderResults:qn,fetcherResults:On}=await at(N.matches,L,Ze,$e,x);if(x.signal.aborted)return{shortCircuited:!0};v&&v.signal.removeEventListener("abort",Br),$e.forEach(ce=>Ie.delete(ce.key));let dr=Ry([...qn,...On]);if(dr){if(dr.idx>=Ze.length){let ce=$e[dr.idx-Ze.length].key;ve.add(ce)}return await ar(x,dr.result,{replace:W}),{shortCircuited:!0}}let{loaderData:Kn,errors:Ct}=Ey(N,L,Ze,qn,J,$e,On,ot);ot.forEach((ce,Ve)=>{ce.subscribe(kt=>{(kt||ce.done)&&ot.delete(Ve)})}),p.v7_partialHydration&&ae&&N.errors&&Object.entries(N.errors).filter(ce=>{let[Ve]=ce;return!Ze.some(kt=>kt.route.id===Ve)}).forEach(ce=>{let[Ve,kt]=ce;Ct=Object.assign(Ct||{},{[Ve]:kt})});let vn=Ts(),$r=Nl(ee),Rs=vn||$r||$e.length>0;return He({matches:L,loaderData:Kn,errors:Ct},Rs?{fetchers:new Map(N.fetchers)}:{})}function Dn(x){if(x&&!un(x[1]))return{[x[0]]:x[1].data};if(N.actionData)return Object.keys(N.actionData).length===0?null:N.actionData}function or(x){return x.forEach(D=>{let L=N.fetchers.get(D.key),U=ta(void 0,L?L.data:void 0);N.fetchers.set(D.key,U)}),new Map(N.fetchers)}function _s(x,D,L,U){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Ie.has(x)&&bn(x);let G=(U&&U.unstable_flushSync)===!0,X=l||o,ie=lf(N.location,N.matches,u,p.v7_prependBasename,L,p.v7_relativeSplatPath,D,U==null?void 0:U.relative),W=Ui(X,ie,u),ae=cr(W,X,ie);if(ae.active&&ae.matches&&(W=ae.matches),!W){yn(x,D,$t(404,{pathname:ie}),{flushSync:G});return}let{path:Z,submission:J,error:pe}=my(p.v7_normalizeFormMethod,!0,ie,U);if(pe){yn(x,D,pe,{flushSync:G});return}let _e=ca(W,Z);if(y=(U&&U.preventScrollReset)===!0,J&&jn(J.formMethod)){xl(x,D,Z,_e,W,ae.active,G,J);return}fe.set(x,{routeId:D,path:Z}),ws(x,D,Z,_e,W,ae.active,G,J)}async function xl(x,D,L,U,G,X,ie,W){lt(),fe.delete(x);function ae(Ce){if(!Ce.route.action&&!Ce.route.lazy){let on=$t(405,{method:W.formMethod,pathname:L,routeId:D});return yn(x,D,on,{flushSync:ie}),!0}return!1}if(!X&&ae(U))return;let Z=N.fetchers.get(x);sn(x,vA(W,Z),{flushSync:ie});let J=new AbortController,pe=xs(t.history,L,J.signal,W);if(X){let Ce=await bi(G,L,pe.signal);if(Ce.type==="aborted")return;if(Ce.type==="error"){let{error:on}=zr(L,Ce);yn(x,D,on,{flushSync:ie});return}else if(Ce.matches){if(G=Ce.matches,U=ca(G,L),ae(U))return}else{yn(x,D,$t(404,{pathname:L}),{flushSync:ie});return}}Ie.set(x,J);let _e=K,we=(await Ur("action",pe,[U],G))[0];if(pe.signal.aborted){Ie.get(x)===J&&Ie.delete(x);return}if(p.v7_fetcherPersist&&Qe.has(x)){if(Wi(we)||un(we)){sn(x,Gr(void 0));return}}else{if(Wi(we))if(Ie.delete(x),ee>_e){sn(x,Gr(void 0));return}else return ve.add(x),sn(x,ta(W)),ar(pe,we,{fetcherSubmission:W});if(un(we)){yn(x,D,we.error);return}}if(Hi(we))throw $t(400,{type:"defer-action"});let Ze=N.navigation.location||N.location,$e=xs(t.history,Ze,J.signal),Br=l||o,qn=N.navigation.state!=="idle"?Ui(Br,N.navigation.location,u):N.matches;he(qn,"Didn't find any matches after fetcher action");let On=++K;ne.set(x,On);let dr=ta(W,we.data);N.fetchers.set(x,dr);let[Kn,Ct]=gy(t.history,N,qn,W,Ze,!1,p.unstable_skipActionErrorRevalidation,Te,yt,rn,Qe,fe,ve,Br,u,[U.route.id,we]);Ct.filter(Ce=>Ce.key!==x).forEach(Ce=>{let on=Ce.key,Vo=N.fetchers.get(on),bl=ta(void 0,Vo?Vo.data:void 0);N.fetchers.set(on,bl),Ie.has(on)&&bn(on),Ce.controller&&Ie.set(on,Ce.controller)}),De({fetchers:new Map(N.fetchers)});let vn=()=>Ct.forEach(Ce=>bn(Ce.key));J.signal.addEventListener("abort",vn);let{loaderResults:$r,fetcherResults:Rs}=await at(N.matches,qn,Kn,Ct,$e);if(J.signal.aborted)return;J.signal.removeEventListener("abort",vn),ne.delete(x),Ie.delete(x),Ct.forEach(Ce=>Ie.delete(Ce.key));let ce=Ry([...$r,...Rs]);if(ce){if(ce.idx>=Kn.length){let Ce=Ct[ce.idx-Kn.length].key;ve.add(Ce)}return ar($e,ce.result)}let{loaderData:Ve,errors:kt}=Ey(N,N.matches,Kn,$r,void 0,Ct,Rs,ot);if(N.fetchers.has(x)){let Ce=Gr(we.data);N.fetchers.set(x,Ce)}Nl(On),N.navigation.state==="loading"&&On>ee?(he(E,"Expected pending action"),v&&v.abort(),Be(N.navigation.location,{matches:qn,loaderData:Ve,errors:kt,fetchers:new Map(N.fetchers)})):(De({errors:kt,loaderData:Ty(N.loaderData,Ve,qn,kt),fetchers:new Map(N.fetchers)}),Te=!1)}async function ws(x,D,L,U,G,X,ie,W){let ae=N.fetchers.get(x);sn(x,ta(W,ae?ae.data:void 0),{flushSync:ie});let Z=new AbortController,J=xs(t.history,L,Z.signal);if(X){let we=await bi(G,L,J.signal);if(we.type==="aborted")return;if(we.type==="error"){let{error:Ze}=zr(L,we);yn(x,D,Ze,{flushSync:ie});return}else if(we.matches)G=we.matches,U=ca(G,L);else{yn(x,D,$t(404,{pathname:L}),{flushSync:ie});return}}Ie.set(x,Z);let pe=K,Pe=(await Ur("loader",J,[U],G))[0];if(Hi(Pe)&&(Pe=await Sw(Pe,J.signal,!0)||Pe),Ie.get(x)===Z&&Ie.delete(x),!J.signal.aborted){if(Qe.has(x)){sn(x,Gr(void 0));return}if(Wi(Pe))if(ee>pe){sn(x,Gr(void 0));return}else{ve.add(x),await ar(J,Pe);return}if(un(Pe)){yn(x,D,Pe.error);return}he(!Hi(Pe),"Unhandled fetcher deferred data"),sn(x,Gr(Pe.data))}}async function ar(x,D,L){let{submission:U,fetcherSubmission:G,replace:X}=L===void 0?{}:L;D.response.headers.has("X-Remix-Revalidate")&&(Te=!0);let ie=D.response.headers.get("Location");he(ie,"Expected a Location header on the redirect Response"),ie=_y(ie,new URL(x.url),u);let W=Ya(N.location,ie,{_isRedirect:!0});if(n){let Pe=!1;if(D.response.headers.has("X-Remix-Reload-Document"))Pe=!0;else if(Cp.test(ie)){const we=t.history.createURL(ie);Pe=we.origin!==e.location.origin||Ro(we.pathname,u)==null}if(Pe){X?e.location.replace(ie):e.location.assign(ie);return}}v=null;let ae=X===!0?rt.Replace:rt.Push,{formMethod:Z,formAction:J,formEncType:pe}=N.navigation;!U&&!G&&Z&&J&&pe&&(U=Py(N.navigation));let _e=U||G;if(JR.has(D.response.status)&&_e&&jn(_e.formMethod))await Bt(ae,W,{submission:He({},_e,{formAction:ie}),preventScrollReset:y});else{let Pe=Zd(W,U);await Bt(ae,W,{overrideNavigation:Pe,fetcherSubmission:G,preventScrollReset:y})}}async function Ur(x,D,L,U){try{let G=await aA(c,x,D,L,U,s,i);return await Promise.all(G.map((X,ie)=>{if(pA(X)){let W=X.result;return{type:Oe.redirect,response:cA(W,D,L[ie].route.id,U,u,p.v7_relativeSplatPath)}}return uA(X)}))}catch(G){return L.map(()=>({type:Oe.error,error:G}))}}async function at(x,D,L,U,G){let[X,...ie]=await Promise.all([L.length?Ur("loader",G,L,D):[],...U.map(W=>{if(W.matches&&W.match&&W.controller){let ae=xs(t.history,W.path,W.controller.signal);return Ur("loader",ae,[W.match],W.matches).then(Z=>Z[0])}else return Promise.resolve({type:Oe.error,error:$t(404,{pathname:W.path})})})]);return await Promise.all([Ay(x,L,X,X.map(()=>G.signal),!1,N.loaderData),Ay(x,U.map(W=>W.match),ie,U.map(W=>W.controller?W.controller.signal:null),!0)]),{loaderResults:X,fetcherResults:ie}}function lt(){Te=!0,yt.push(...Di()),fe.forEach((x,D)=>{Ie.has(D)&&(rn.push(D),bn(D))})}function sn(x,D,L){L===void 0&&(L={}),N.fetchers.set(x,D),De({fetchers:new Map(N.fetchers)},{flushSync:(L&&L.flushSync)===!0})}function yn(x,D,L,U){U===void 0&&(U={});let G=Aa(N.matches,D);Es(x),De({errors:{[G.route.id]:L},fetchers:new Map(N.fetchers)},{flushSync:(U&&U.flushSync)===!0})}function Do(x){return p.v7_fetcherPersist&&(ke.set(x,(ke.get(x)||0)+1),Qe.has(x)&&Qe.delete(x)),N.fetchers.get(x)||ZR}function Es(x){let D=N.fetchers.get(x);Ie.has(x)&&!(D&&D.state==="loading"&&ne.has(x))&&bn(x),fe.delete(x),ne.delete(x),ve.delete(x),Qe.delete(x),N.fetchers.delete(x)}function xi(x){if(p.v7_fetcherPersist){let D=(ke.get(x)||0)-1;D<=0?(ke.delete(x),Qe.add(x)):ke.set(x,D)}else Es(x);De({fetchers:new Map(N.fetchers)})}function bn(x){let D=Ie.get(x);he(D,"Expected fetch controller: "+x),D.abort(),Ie.delete(x)}function bo(x){for(let D of x){let L=Do(D),U=Gr(L.data);N.fetchers.set(D,U)}}function Ts(){let x=[],D=!1;for(let L of ve){let U=N.fetchers.get(L);he(U,"Expected fetcher: "+L),U.state==="loading"&&(ve.delete(L),x.push(L),D=!0)}return bo(x),D}function Nl(x){let D=[];for(let[L,U]of ne)if(U<x){let G=N.fetchers.get(L);he(G,"Expected fetcher: "+L),G.state==="loading"&&(bn(L),ne.delete(L),D.push(L))}return bo(D),D.length>0}function _d(x,D){let L=N.blockers.get(x)||ea;return tt.get(x)!==D&&tt.set(x,D),L}function Is(x){N.blockers.delete(x),tt.delete(x)}function Ni(x,D){let L=N.blockers.get(x)||ea;he(L.state==="unblocked"&&D.state==="blocked"||L.state==="blocked"&&D.state==="blocked"||L.state==="blocked"&&D.state==="proceeding"||L.state==="blocked"&&D.state==="unblocked"||L.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+L.state+" -> "+D.state);let U=new Map(N.blockers);U.set(x,D),De({blockers:U})}function Oo(x){let{currentLocation:D,nextLocation:L,historyAction:U}=x;if(tt.size===0)return;tt.size>1&&co(!1,"A router only supports one blocker at a time");let G=Array.from(tt.entries()),[X,ie]=G[G.length-1],W=N.blockers.get(X);if(!(W&&W.state==="proceeding")&&ie({currentLocation:D,nextLocation:L,historyAction:U}))return X}function lr(x){let D=$t(404,{pathname:x}),L=l||o,{matches:U,route:G}=Sy(L);return Di(),{notFoundMatches:U,route:G,error:D}}function zr(x,D){let L=D.partialMatches,U=L[L.length-1].route,G=$t(400,{type:"route-discovery",routeId:U.id,pathname:x,message:D.error!=null&&"message"in D.error?D.error:String(D.error)});return{notFoundMatches:L,route:U,error:G}}function Di(x){let D=[];return ot.forEach((L,U)=>{(!x||x(U))&&(L.cancel(),D.push(U),ot.delete(U))}),D}function ur(x,D,L){if(C=x,O=D,k=L||null,!I&&N.navigation===Jd){I=!0;let U=Lo(N.location,N.matches);U!=null&&De({restoreScrollPosition:U})}return()=>{C=null,O=null,k=null}}function Mo(x,D){return k&&k(x,D.map(U=>xR(U,N.loaderData)))||x.key}function Ss(x,D){if(C&&O){let L=Mo(x,D);C[L]=O()}}function Lo(x,D){if(C){let L=Mo(x,D),U=C[L];if(typeof U=="number")return U}return null}function cr(x,D,L){if(h)if(x){let U=x[x.length-1].route;if(U.path&&(U.path==="*"||U.path.endsWith("/*")))return{active:!0,matches:Su(D,L,u,!0)}}else return{active:!0,matches:Su(D,L,u,!0)||[]};return{active:!1,matches:null}}async function bi(x,D,L){let U=x,G=U.length>0?U[U.length-1].route:null;for(;;){let X=l==null,ie=l||o;try{await sA(h,D,U,ie,s,i,Pt,L)}catch(J){return{type:"error",error:J,partialMatches:U}}finally{X&&(o=[...o])}if(L.aborted)return{type:"aborted"};let W=Ui(ie,D,u),ae=!1;if(W){let J=W[W.length-1].route;if(J.index)return{type:"success",matches:W};if(J.path&&J.path.length>0)if(J.path==="*")ae=!0;else return{type:"success",matches:W}}let Z=Su(ie,D,u,!0);if(!Z||U.map(J=>J.route.id).join("-")===Z.map(J=>J.route.id).join("-"))return{type:"success",matches:ae?W:null};if(U=Z,G=U[U.length-1].route,G.path==="*")return{type:"success",matches:U}}}function vt(x){s={},l=Xa(x,i,void 0,s)}function Dl(x,D){let L=l==null;Ew(x,D,l||o,s,i),L&&(o=[...o],De({}))}return z={get basename(){return u},get future(){return p},get state(){return N},get routes(){return o},get window(){return e},initialize:de,subscribe:Gt,enableScrollRestoration:ur,navigate:zt,fetch:_s,revalidate:Nn,createHref:x=>t.history.createHref(x),encodeLocation:x=>t.history.encodeLocation(x),getFetcher:Do,deleteFetcher:xi,dispose:xe,getBlocker:_d,deleteBlocker:Is,patchRoutes:Dl,_internalFetchControllers:Ie,_internalActiveDeferreds:ot,_internalSetRoutes:vt},z}function nA(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function lf(t,e,n,r,i,s,o,l){let u,c;if(o){u=[];for(let p of e)if(u.push(p),p.route.id===o){c=p;break}}else u=e,c=e[e.length-1];let h=Hc(i||".",$c(u,s),Ro(t.pathname,n)||t.pathname,l==="path");return i==null&&(h.search=t.search,h.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!kp(h.search)&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(h.pathname=h.pathname==="/"?n:Ir([n,h.pathname])),rs(h)}function my(t,e,n,r){if(!r||!nA(r))return{path:n};if(r.formMethod&&!gA(r.formMethod))return{path:n,error:$t(405,{method:r.formMethod})};let i=()=>({path:n,error:$t(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=Tw(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!jn(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((T,C)=>{let[k,O]=C;return""+T+k+"="+O+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!jn(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}he(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=uf(r.formData),c=r.formData;else if(r.body instanceof FormData)u=uf(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=wy(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=wy(u)}catch{return i()}let h={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(jn(h.formMethod))return{path:n,submission:h};let p=Ri(n);return e&&p.search&&kp(p.search)&&u.append("index",""),p.search="?"+u,{path:rs(p),submission:h}}function rA(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function gy(t,e,n,r,i,s,o,l,u,c,h,p,m,T,C,k){let O=k?un(k[1])?k[1].error:k[1].data:void 0,I=t.createURL(e.location),_=t.createURL(i),A=k&&un(k[1])?k[0]:void 0,V=A?rA(n,A):n,z=k?k[1].statusCode:void 0,N=o&&z&&z>=400,E=V.filter((v,R)=>{let{route:P}=v;if(P.lazy)return!0;if(P.loader==null)return!1;if(s)return typeof P.loader!="function"||P.loader.hydrate?!0:e.loaderData[P.id]===void 0&&(!e.errors||e.errors[P.id]===void 0);if(iA(e.loaderData,e.matches[R],v)||u.some(Te=>Te===v.route.id))return!0;let b=e.matches[R],S=v;return yy(v,He({currentUrl:I,currentParams:b.params,nextUrl:_,nextParams:S.params},r,{actionResult:O,unstable_actionStatus:z,defaultShouldRevalidate:N?!1:l||I.pathname+I.search===_.pathname+_.search||I.search!==_.search||ww(b,S)}))}),y=[];return p.forEach((v,R)=>{if(s||!n.some(yt=>yt.route.id===v.routeId)||h.has(R))return;let P=Ui(T,v.path,C);if(!P){y.push({key:R,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let b=e.fetchers.get(R),S=ca(P,v.path),Te=!1;m.has(R)?Te=!1:c.includes(R)?Te=!0:b&&b.state!=="idle"&&b.data===void 0?Te=l:Te=yy(S,He({currentUrl:I,currentParams:e.matches[e.matches.length-1].params,nextUrl:_,nextParams:n[n.length-1].params},r,{actionResult:O,unstable_actionStatus:z,defaultShouldRevalidate:N?!1:l})),Te&&y.push({key:R,routeId:v.routeId,path:v.path,matches:P,match:S,controller:new AbortController})}),[E,y]}function iA(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function ww(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function yy(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function sA(t,e,n,r,i,s,o,l){let u=[e,...n.map(c=>c.route.id)].join("-");try{let c=o.get(u);c||(c=t({path:e,matches:n,patch:(h,p)=>{l.aborted||Ew(h,p,r,i,s)}}),o.set(u,c)),c&&fA(c)&&await c}finally{o.delete(u)}}function Ew(t,e,n,r,i){if(t){var s;let o=r[t];he(o,"No route found to patch children into: routeId = "+t);let l=Xa(e,i,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...l):o.children=l}else{let o=Xa(e,i,["patch",String(n.length||"0")],r);n.push(...o)}}async function vy(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];he(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";co(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!CR.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,He({},e(i),{lazy:void 0}))}function oA(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function aA(t,e,n,r,i,s,o,l){let u=r.reduce((p,m)=>p.add(m.route.id),new Set),c=new Set,h=await t({matches:i.map(p=>{let m=u.has(p.route.id);return He({},p,{shouldLoad:m,resolve:C=>(c.add(p.route.id),m?lA(e,n,p,s,o,C,l):Promise.resolve({type:Oe.data,result:void 0}))})}),request:n,params:i[0].params,context:l});return i.forEach(p=>he(c.has(p.route.id),'`match.resolve()` was not called for route id "'+p.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),h.filter((p,m)=>u.has(i[m].route.id))}async function lA(t,e,n,r,i,s,o){let l,u,c=h=>{let p,m=new Promise((k,O)=>p=O);u=()=>p(),e.signal.addEventListener("abort",u);let T=k=>typeof h!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):h({request:e,params:n.params,context:o},...k!==void 0?[k]:[]),C;return s?C=s(k=>T(k)):C=(async()=>{try{return{type:"data",result:await T()}}catch(k){return{type:"error",result:k}}})(),Promise.race([C,m])};try{let h=n.route[t];if(n.route.lazy)if(h){let p,[m]=await Promise.all([c(h).catch(T=>{p=T}),vy(n.route,i,r)]);if(p!==void 0)throw p;l=m}else if(await vy(n.route,i,r),h=n.route[t],h)l=await c(h);else if(t==="action"){let p=new URL(e.url),m=p.pathname+p.search;throw $t(405,{method:e.method,pathname:m,routeId:n.route.id})}else return{type:Oe.data,result:void 0};else if(h)l=await c(h);else{let p=new URL(e.url),m=p.pathname+p.search;throw $t(404,{pathname:m})}he(l.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(h){return{type:Oe.error,result:h}}finally{u&&e.signal.removeEventListener("abort",u)}return l}async function uA(t){let{result:e,type:n,status:r}=t;if(Iw(e)){let o;try{let l=e.headers.get("Content-Type");l&&/\bapplication\/json\b/.test(l)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(l){return{type:Oe.error,error:l}}return n===Oe.error?{type:Oe.error,error:new Pp(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:Oe.data,data:o,statusCode:e.status,headers:e.headers}}if(n===Oe.error)return{type:Oe.error,error:e,statusCode:Wc(e)?e.status:r};if(mA(e)){var i,s;return{type:Oe.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:Oe.data,data:e,statusCode:r}}function cA(t,e,n,r,i,s){let o=t.headers.get("Location");if(he(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Cp.test(o)){let l=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=lf(new URL(e.url),l,i,!0,o,s),t.headers.set("Location",o)}return t}function _y(t,e,n){if(Cp.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Ro(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function xs(t,e,n,r){let i=t.createURL(Tw(e)).toString(),s={signal:n};if(r&&jn(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=uf(r.formData):s.body=r.formData}return new Request(i,s)}function uf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function wy(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function dA(t,e,n,r,i,s){let o={},l=null,u,c=!1,h={},p=r&&un(r[1])?r[1].error:void 0;return n.forEach((m,T)=>{let C=e[T].route.id;if(he(!Wi(m),"Cannot handle redirect results in processLoaderData"),un(m)){let k=m.error;p!==void 0&&(k=p,p=void 0),l=l||{};{let O=Aa(t,C);l[O.route.id]==null&&(l[O.route.id]=k)}o[C]=void 0,c||(c=!0,u=Wc(m.error)?m.error.status:500),m.headers&&(h[C]=m.headers)}else Hi(m)?(i.set(C,m.deferredData),o[C]=m.deferredData.data,m.statusCode!=null&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(h[C]=m.headers)):(o[C]=m.data,m.statusCode&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(h[C]=m.headers))}),p!==void 0&&r&&(l={[r[0]]:p},o[r[0]]=void 0),{loaderData:o,errors:l,statusCode:u||200,loaderHeaders:h}}function Ey(t,e,n,r,i,s,o,l){let{loaderData:u,errors:c}=dA(e,n,r,i,l);for(let h=0;h<s.length;h++){let{key:p,match:m,controller:T}=s[h];he(o!==void 0&&o[h]!==void 0,"Did not find corresponding fetcher result");let C=o[h];if(!(T&&T.signal.aborted))if(un(C)){let k=Aa(t.matches,m==null?void 0:m.route.id);c&&c[k.route.id]||(c=He({},c,{[k.route.id]:C.error})),t.fetchers.delete(p)}else if(Wi(C))he(!1,"Unhandled fetcher revalidation redirect");else if(Hi(C))he(!1,"Unhandled fetcher deferred data");else{let k=Gr(C.data);t.fetchers.set(p,k)}}return{loaderData:u,errors:c}}function Ty(t,e,n,r){let i=He({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Iy(t){return t?un(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Aa(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Sy(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function $t(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,l="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(l="Bad Request",s==="route-discovery"?u='Unable to match URL "'+n+'" - the `children()` function for '+("route `"+r+"` threw the following error:\n"+o):i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(l="Not Found",u='No route matches URL "'+n+'"'):t===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Pp(t||500,l,new Error(u),!0)}function Ry(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Wi(n))return{result:n,idx:e}}}function Tw(t){let e=typeof t=="string"?Ri(t):t;return rs(He({},e,{hash:""}))}function hA(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function fA(t){return typeof t=="object"&&t!=null&&"then"in t}function pA(t){return Iw(t.result)&&XR.has(t.result.status)}function Hi(t){return t.type===Oe.deferred}function un(t){return t.type===Oe.error}function Wi(t){return(t&&t.type)===Oe.redirect}function mA(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function Iw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function gA(t){return YR.has(t.toLowerCase())}function jn(t){return GR.has(t.toLowerCase())}async function Ay(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let l=n[o],u=e[o];if(!u)continue;let c=t.find(p=>p.route.id===u.route.id),h=c!=null&&!ww(c,u)&&(s&&s[u.route.id])!==void 0;if(Hi(l)&&(i||h)){let p=r[o];he(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await Sw(l,p,i).then(m=>{m&&(n[o]=m||n[o])})}}}async function Sw(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Oe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Oe.error,error:i}}return{type:Oe.data,data:t.deferredData.data}}}function kp(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function ca(t,e){let n=typeof e=="string"?Ri(e).search:e.search;if(t[t.length-1].route.index&&kp(n||""))return t[t.length-1];let r=yw(t);return r[r.length-1]}function Py(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Zd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function yA(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function ta(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function vA(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Gr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function _A(t,e){try{let n=t.sessionStorage.getItem(_w);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function wA(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(_w,JSON.stringify(n))}catch(r){co(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ic(){return ic=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ic.apply(this,arguments)}const qc=F.createContext(null),Rw=F.createContext(null),Ai=F.createContext(null),xp=F.createContext(null),br=F.createContext({outlet:null,matches:[],isDataRoute:!1}),Aw=F.createContext(null);function EA(t,e){let{relative:n}=e===void 0?{}:e;Ao()||he(!1);let{basename:r,navigator:i}=F.useContext(Ai),{hash:s,pathname:o,search:l}=Cw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ir([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Ao(){return F.useContext(xp)!=null}function gl(){return Ao()||he(!1),F.useContext(xp).location}function Pw(t){F.useContext(Ai).static||F.useLayoutEffect(t)}function Np(){let{isDataRoute:t}=F.useContext(br);return t?OA():TA()}function TA(){Ao()||he(!1);let t=F.useContext(qc),{basename:e,future:n,navigator:r}=F.useContext(Ai),{matches:i}=F.useContext(br),{pathname:s}=gl(),o=JSON.stringify($c(i,n.v7_relativeSplatPath)),l=F.useRef(!1);return Pw(()=>{l.current=!0}),F.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Hc(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Ir([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,s,t])}function IA(){let{matches:t}=F.useContext(br),e=t[t.length-1];return e?e.params:{}}function Cw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=F.useContext(Ai),{matches:i}=F.useContext(br),{pathname:s}=gl(),o=JSON.stringify($c(i,r.v7_relativeSplatPath));return F.useMemo(()=>Hc(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function SA(t,e,n,r){Ao()||he(!1);let{navigator:i}=F.useContext(Ai),{matches:s}=F.useContext(br),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=gl(),h;h=c;let p=h.pathname||"/",m=p;if(u!=="/"){let k=u.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let T=Ui(t,{pathname:m});return kA(T&&T.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Ir([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Ir([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r)}function RA(){let t=bA(),e=Wc(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:i},n):null,null)}const AA=F.createElement(RA,null);class PA extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(br.Provider,{value:this.props.routeContext},F.createElement(Aw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CA(t){let{routeContext:e,match:n,children:r}=t,i=F.useContext(qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(br.Provider,{value:e},r)}function kA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);h>=0||he(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:m,errors:T}=n,C=p.route.loader&&m[p.route.id]===void 0&&(!T||T[p.route.id]===void 0);if(p.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,p,m)=>{let T,C=!1,k=null,O=null;n&&(T=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||AA,u&&(c<0&&m===0?(MA("route-fallback"),C=!0,O=null):c===m&&(C=!0,O=p.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),_=()=>{let A;return T?A=k:C?A=O:p.route.Component?A=F.createElement(p.route.Component,null):p.route.element?A=p.route.element:A=h,F.createElement(CA,{match:p,routeContext:{outlet:h,matches:I,isDataRoute:n!=null},children:A})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?F.createElement(PA,{location:n.location,revalidation:n.revalidation,component:k,error:T,children:_(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):_()},null)}var kw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(kw||{}),sc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(sc||{});function xA(t){let e=F.useContext(qc);return e||he(!1),e}function NA(t){let e=F.useContext(Rw);return e||he(!1),e}function DA(t){let e=F.useContext(br);return e||he(!1),e}function xw(t){let e=DA(),n=e.matches[e.matches.length-1];return n.route.id||he(!1),n.route.id}function bA(){var t;let e=F.useContext(Aw),n=NA(sc.UseRouteError),r=xw(sc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function OA(){let{router:t}=xA(kw.UseNavigateStable),e=xw(sc.UseNavigateStable),n=F.useRef(!1);return Pw(()=>{n.current=!0}),F.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ic({fromRouteId:e},s)))},[t,e])}const Cy={};function MA(t,e,n){Cy[t]||(Cy[t]=!0)}function Kc(t){let{to:e,replace:n,state:r,relative:i}=t;Ao()||he(!1);let{future:s,static:o}=F.useContext(Ai),{matches:l}=F.useContext(br),{pathname:u}=gl(),c=Np(),h=Hc(e,$c(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(h);return F.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function LA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=rt.Pop,navigator:s,static:o=!1,future:l}=t;Ao()&&he(!1);let u=e.replace(/^\/*/,"/"),c=F.useMemo(()=>({basename:u,navigator:s,static:o,future:ic({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ri(r));let{pathname:h="/",search:p="",hash:m="",state:T=null,key:C="default"}=r,k=F.useMemo(()=>{let O=Ro(h,u);return O==null?null:{location:{pathname:O,search:p,hash:m,state:T,key:C},navigationType:i}},[u,h,p,m,T,C,i]);return k==null?null:F.createElement(Ai.Provider,{value:c},F.createElement(xp.Provider,{children:n,value:k}))}new Promise(()=>{});function VA(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:F.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:F.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:F.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ja.apply(this,arguments)}function FA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function jA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function UA(t,e){return t.button===0&&(!e||e==="_self")&&!jA(t)}const zA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],BA="6";try{window.__reactRouterVersion=BA}catch{}function $A(t,e){return tA({basename:void 0,future:Ja({},void 0,{v7_prependBasename:!0}),history:RR({window:void 0}),hydrationData:HA(),routes:t,mapRouteProperties:VA,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function HA(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Ja({},e,{errors:WA(e.errors)})),e}function WA(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Pp(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const qA=F.createContext({isTransitioning:!1}),KA=F.createContext(new Map),GA="startTransition",ky=hS[GA],QA="flushSync",xy=SR[QA];function YA(t){ky?ky(t):t()}function na(t){xy?xy(t):t()}let XA=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function JA(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=F.useState(n.state),[o,l]=F.useState(),[u,c]=F.useState({isTransitioning:!1}),[h,p]=F.useState(),[m,T]=F.useState(),[C,k]=F.useState(),O=F.useRef(new Map),{v7_startTransition:I}=r||{},_=F.useCallback(E=>{I?YA(E):E()},[I]),A=F.useCallback((E,y)=>{let{deletedFetchers:v,unstable_flushSync:R,unstable_viewTransitionOpts:P}=y;v.forEach(S=>O.current.delete(S)),E.fetchers.forEach((S,Te)=>{S.data!==void 0&&O.current.set(Te,S.data)});let b=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!P||b){R?na(()=>s(E)):_(()=>s(E));return}if(R){na(()=>{m&&(h&&h.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:P.currentLocation,nextLocation:P.nextLocation})});let S=n.window.document.startViewTransition(()=>{na(()=>s(E))});S.finished.finally(()=>{na(()=>{p(void 0),T(void 0),l(void 0),c({isTransitioning:!1})})}),na(()=>T(S));return}m?(h&&h.resolve(),m.skipTransition(),k({state:E,currentLocation:P.currentLocation,nextLocation:P.nextLocation})):(l(E),c({isTransitioning:!0,flushSync:!1,currentLocation:P.currentLocation,nextLocation:P.nextLocation}))},[n.window,m,h,O,_]);F.useLayoutEffect(()=>n.subscribe(A),[n,A]),F.useEffect(()=>{u.isTransitioning&&!u.flushSync&&p(new XA)},[u]),F.useEffect(()=>{if(h&&o&&n.window){let E=o,y=h.promise,v=n.window.document.startViewTransition(async()=>{_(()=>s(E)),await y});v.finished.finally(()=>{p(void 0),T(void 0),l(void 0),c({isTransitioning:!1})}),T(v)}},[_,o,h,n.window]),F.useEffect(()=>{h&&o&&i.location.key===o.location.key&&h.resolve()},[h,m,i.location,o]),F.useEffect(()=>{!u.isTransitioning&&C&&(l(C.state),c({isTransitioning:!0,flushSync:!1,currentLocation:C.currentLocation,nextLocation:C.nextLocation}),k(void 0))},[u.isTransitioning,C]),F.useEffect(()=>{},[]);let V=F.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:E=>n.navigate(E),push:(E,y,v)=>n.navigate(E,{state:y,preventScrollReset:v==null?void 0:v.preventScrollReset}),replace:(E,y,v)=>n.navigate(E,{replace:!0,state:y,preventScrollReset:v==null?void 0:v.preventScrollReset})}),[n]),z=n.basename||"/",N=F.useMemo(()=>({router:n,navigator:V,static:!1,basename:z}),[n,V,z]);return F.createElement(F.Fragment,null,F.createElement(qc.Provider,{value:N},F.createElement(Rw.Provider,{value:i},F.createElement(KA.Provider,{value:O.current},F.createElement(qA.Provider,{value:u},F.createElement(LA,{basename:z,location:i.location,navigationType:i.historyAction,navigator:V,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?F.createElement(ZA,{routes:n.routes,future:n.future,state:i}):e))))),null)}function ZA(t){let{routes:e,future:n,state:r}=t;return SA(e,void 0,r,n)}const eP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,is=F.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:h,unstable_viewTransition:p}=e,m=FA(e,zA),{basename:T}=F.useContext(Ai),C,k=!1;if(typeof c=="string"&&tP.test(c)&&(C=c,eP))try{let A=new URL(window.location.href),V=c.startsWith("//")?new URL(A.protocol+c):new URL(c),z=Ro(V.pathname,T);V.origin===A.origin&&z!=null?c=z+V.search+V.hash:k=!0}catch{}let O=EA(c,{relative:i}),I=nP(c,{replace:o,state:l,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:p});function _(A){r&&r(A),A.defaultPrevented||I(A)}return F.createElement("a",Ja({},m,{href:C||O,onClick:k||s?r:_,ref:n,target:u}))});var Ny;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ny||(Ny={}));var Dy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dy||(Dy={}));function nP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Np(),c=gl(),h=Cw(t,{relative:o});return F.useCallback(p=>{if(UA(p,n)){p.preventDefault();let m=r!==void 0?r:rs(c)===rs(h);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,h,r,i,n,t,s,o,l])}const Gc="/Timelines/assets/Logo-1QK56hxG.png";function rP(){return w.jsx(w.Fragment,{children:w.jsxs("div",{className:"header",children:[w.jsxs("div",{className:"header-logo",children:[w.jsx("img",{src:Gc,style:{width:24}}),"Lifelines"]}),w.jsxs("div",{children:[w.jsx(is,{to:"/Timelines/login",children:w.jsx("button",{className:"header-sign-in-button",children:"Log in"})}),w.jsx(is,{to:"/Timelines/sign-up",children:w.jsx("button",{className:"header-sign-up-button",children:"Sign up"})})]})]})})}function iP(){return w.jsx(w.Fragment,{children:w.jsx("div",{className:"footer",children:"Lifelines ©2024"})})}var by={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Dw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(m=64)),r.push(n[h],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new oP;const m=s<<2|l>>4;if(r.push(m),c!==64){const T=l<<4&240|c>>2;if(r.push(T),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aP=function(t){const e=Nw(t);return Dw.encodeByteArray(e,!0)},oc=function(t){return aP(t).replace(/\./g,"")},bw=function(t){try{return Dw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ac(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lP(n)||(t[n]=ac(t[n],e[n]));return t}function lP(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=()=>uP().__FIREBASE_DEFAULTS__,dP=()=>{if(typeof process>"u"||typeof by>"u")return;const t=by.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bw(t[1]);return e&&JSON.parse(e)},Qc=()=>{try{return cP()||dP()||hP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ow=t=>{var e,n;return(n=(e=Qc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fP=t=>{const e=Ow(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Mw=()=>{var t;return(t=Qc())===null||t===void 0?void 0:t.config},Lw=t=>{var e;return(e=Qc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[oc(JSON.stringify(n)),oc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function yP(){var t;const e=(t=Qc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vw(){return typeof window<"u"||Fw()}function Fw(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function jw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _P(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wP(){return!yP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uw(){try{return typeof indexedDB=="object"}catch{return!1}}function zw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function EP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=TP,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}}class Or{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?IP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new xn(i,l,r)}}function IP(t,e){return t.replace(SP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const SP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function RP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Za(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(My(s)&&My(o)){if(!Za(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function My(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function da(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ha(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Bw(t,e){const n=new AP(t,e);return n.subscribe.bind(n)}class AP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=eh),i.error===void 0&&(i.error=eh),i.complete===void 0&&(i.complete=eh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function eh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=1e3,kP=2,xP=4*60*60*1e3,NP=.5;function Ly(t,e=CP,n=kP){const r=e*Math.pow(n,t),i=Math.round(NP*r*(Math.random()-.5)*2);return Math.min(xP,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){return t&&t._delegate?t._delegate:t}class Pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OP(e))try{this.getOrInitializeService({instanceIdentifier:ji})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ji){return this.instances.has(e)}getOptions(e=ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ji){return this.component?this.component.multipleInstances?e:ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bP(t){return t===ji?void 0:t}function OP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=[];var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Hw={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},MP=ge.INFO,LP={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},VP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=LP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vl{constructor(e){this.name=e,this._logLevel=MP,this._logHandler=VP,this._userLogHandler=null,Dp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}function FP(t){Dp.forEach(e=>{e.setLogLevel(t)})}function jP(t,e){for(const n of Dp){let r=null;e&&e.level&&(r=Hw[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const l=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:ge[s].toLowerCase(),message:l,args:o,type:i.name})}}}const UP=(t,e)=>e.some(n=>t instanceof n);let Vy,Fy;function zP(){return Vy||(Vy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BP(){return Fy||(Fy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ww=new WeakMap,cf=new WeakMap,qw=new WeakMap,th=new WeakMap,bp=new WeakMap;function $P(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ww.set(n,t)}).catch(()=>{}),bp.set(e,t),e}function HP(t){if(cf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cf.set(t,e)}let df={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WP(t){df=t(df)}function qP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nh(this),e,...n);return qw.set(r,e.sort?e.sort():[e]),fi(r)}:BP().includes(t)?function(...e){return t.apply(nh(this),e),fi(Ww.get(this))}:function(...e){return fi(t.apply(nh(this),e))}}function KP(t){return typeof t=="function"?qP(t):(t instanceof IDBTransaction&&HP(t),UP(t,zP())?new Proxy(t,df):t)}function fi(t){if(t instanceof IDBRequest)return $P(t);if(th.has(t))return th.get(t);const e=KP(t);return e!==t&&(th.set(t,e),bp.set(e,t)),e}const nh=t=>bp.get(t);function Kw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=fi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(fi(o.result),u.oldVersion,u.newVersion,fi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const GP=["get","getKey","getAll","getAllKeys","count"],QP=["put","add","delete","clear"],rh=new Map;function jy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rh.get(e))return rh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=QP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return rh.set(e,s),s}WP(t=>({...t,get:(e,n,r)=>jy(e,n)||t.get(e,n,r),has:(e,n)=>!!jy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lc="@firebase/app",hf="0.10.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new vl("@firebase/app"),JP="@firebase/app-compat",ZP="@firebase/analytics-compat",eC="@firebase/analytics",tC="@firebase/app-check-compat",nC="@firebase/app-check",rC="@firebase/auth",iC="@firebase/auth-compat",sC="@firebase/database",oC="@firebase/database-compat",aC="@firebase/functions",lC="@firebase/functions-compat",uC="@firebase/installations",cC="@firebase/installations-compat",dC="@firebase/messaging",hC="@firebase/messaging-compat",fC="@firebase/performance",pC="@firebase/performance-compat",mC="@firebase/remote-config",gC="@firebase/remote-config-compat",yC="@firebase/storage",vC="@firebase/storage-compat",_C="@firebase/firestore",wC="@firebase/vertexai-preview",EC="@firebase/firestore-compat",TC="firebase",IC="10.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi="[DEFAULT]",SC={[lc]:"fire-core",[JP]:"fire-core-compat",[eC]:"fire-analytics",[ZP]:"fire-analytics-compat",[nC]:"fire-app-check",[tC]:"fire-app-check-compat",[rC]:"fire-auth",[iC]:"fire-auth-compat",[sC]:"fire-rtdb",[oC]:"fire-rtdb-compat",[aC]:"fire-fn",[lC]:"fire-fn-compat",[uC]:"fire-iid",[cC]:"fire-iid-compat",[dC]:"fire-fcm",[hC]:"fire-fcm-compat",[fC]:"fire-perf",[pC]:"fire-perf-compat",[mC]:"fire-rc",[gC]:"fire-rc-compat",[yC]:"fire-gcs",[vC]:"fire-gcs-compat",[_C]:"fire-fst",[EC]:"fire-fst-compat",[wC]:"fire-vertex","fire-js":"fire-js",[TC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Map,ho=new Map,fo=new Map;function el(t,e){try{t.container.addComponent(e)}catch(n){ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gw(t,e){t.container.addOrOverwriteComponent(e)}function Cn(t){const e=t.name;if(fo.has(e))return ss.debug(`There were multiple attempts to register component ${e}.`),!1;fo.set(e,t);for(const n of vi.values())el(n,t);for(const n of ho.values())el(n,t);return!0}function Mr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function RC(t,e,n=yi){Mr(t,e).clearInstance(n)}function Qw(t){return t.options!==void 0}function Tn(t){return t.settings!==void 0}function AC(){fo.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sn=new Or("app","Firebase",PC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yw=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC extends Yw{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const l=e;super(l.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,Ft(lc,hf,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Op(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Sn.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=IC;function Yc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Sn.create("bad-app-name",{appName:String(i)});if(n||(n=Mw()),!n)throw Sn.create("no-options");const s=vi.get(i);if(s){if(Za(n,s.options)&&Za(r,s.config))return s;throw Sn.create("duplicate-app",{appName:i})}const o=new $w(i);for(const u of fo.values())o.addComponent(u);const l=new Yw(n,r,o);return vi.set(i,l),l}function kC(t,e){if(Vw()&&!Fw())throw Sn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;Qw(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((h,p)=>Math.imul(31,h)+p.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Sn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=ho.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const l=new $w(s);for(const c of fo.values())l.addComponent(c);const u=new CC(n,e,s,l);return ho.set(s,u),u}function Xc(t=yi){const e=vi.get(t);if(!e&&t===yi&&Mw())return Yc();if(!e)throw Sn.create("no-app",{appName:t});return e}function xC(){return Array.from(vi.values())}async function Op(t){let e=!1;const n=t.name;vi.has(n)?(e=!0,vi.delete(n)):ho.has(n)&&t.decRefCount()<=0&&(ho.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Ft(t,e,n){var r;let i=(r=SC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ss.warn(l.join(" "));return}Cn(new Pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Xw(t,e){if(t!==null&&typeof t!="function")throw Sn.create("invalid-log-argument");jP(t,e)}function Jw(t){FP(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="firebase-heartbeat-database",DC=1,tl="firebase-heartbeat-store";let ih=null;function Zw(){return ih||(ih=Kw(NC,DC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(tl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sn.create("idb-open",{originalErrorMessage:t.message})})),ih}async function bC(t){try{const n=(await Zw()).transaction(tl),r=await n.objectStore(tl).get(eE(t));return await n.done,r}catch(e){if(e instanceof xn)ss.warn(e.message);else{const n=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ss.warn(n.message)}}}async function Uy(t,e){try{const r=(await Zw()).transaction(tl,"readwrite");await r.objectStore(tl).put(e,eE(t)),await r.done}catch(n){if(n instanceof xn)ss.warn(n.message);else{const r=Sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ss.warn(r.message)}}}function eE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=1024,MC=30*24*60*60*1e3;class LC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=MC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zy(),{heartbeatsToSend:r,unsentEntries:i}=VC(this._heartbeatsCache.heartbeats),s=oc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zy(){return new Date().toISOString().substring(0,10)}function VC(t,e=OC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),By(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),By(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uw()?zw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function By(t){return oc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t){Cn(new Pn("platform-logger",e=>new YP(e),"PRIVATE")),Cn(new Pn("heartbeat",e=>new LC(e),"PRIVATE")),Ft(lc,hf,t),Ft(lc,hf,"esm2017"),Ft("fire-js","")}jC("");const UC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:xn,SDK_VERSION:Pi,_DEFAULT_ENTRY_NAME:yi,_addComponent:el,_addOrOverwriteComponent:Gw,_apps:vi,_clearComponents:AC,_components:fo,_getProvider:Mr,_isFirebaseApp:Qw,_isFirebaseServerApp:Tn,_registerComponent:Cn,_removeServiceInstance:RC,_serverApps:ho,deleteApp:Op,getApp:Xc,getApps:xC,initializeApp:Yc,initializeServerApp:kC,onLog:Xw,registerVersion:Ft,setLogLevel:Jw},Symbol.toStringTag,{value:"Module"}));var zC="firebase",BC="10.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(zC,BC,"app");const tE="@firebase/installations",Mp="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=1e4,rE=`w:${Mp}`,iE="FIS_v2",$C="https://firebaseinstallations.googleapis.com/v1",HC=60*60*1e3,WC="installations",qC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},os=new Or(WC,qC,KC);function sE(t){return t instanceof xn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE({projectId:t}){return`${$C}/projects/${t}/installations`}function aE(t){return{token:t.token,requestStatus:2,expiresIn:QC(t.expiresIn),creationTime:Date.now()}}async function lE(t,e){const r=(await e.json()).error;return os.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function uE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function GC(t,{refreshToken:e}){const n=uE(t);return n.append("Authorization",YC(e)),n}async function cE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function QC(t){return Number(t.replace("s","000"))}function YC(t){return`${iE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=oE(t),i=uE(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:iE,appId:t.appId,sdkVersion:rE},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await cE(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:aE(c.authToken)}}else throw await lE("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=/^[cdef][\w-]{21}$/,ff="";function e2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=t2(t);return ZC.test(n)?n:ff}catch{return ff}}function t2(t){return JC(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=new Map;function fE(t,e){const n=Jc(t);pE(n,e),n2(n,e)}function pE(t,e){const n=hE.get(t);if(n)for(const r of n)r(e)}function n2(t,e){const n=r2();n&&n.postMessage({key:t,fid:e}),i2()}let qi=null;function r2(){return!qi&&"BroadcastChannel"in self&&(qi=new BroadcastChannel("[Firebase] FID Change"),qi.onmessage=t=>{pE(t.data.key,t.data.fid)}),qi}function i2(){hE.size===0&&qi&&(qi.close(),qi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2="firebase-installations-database",o2=1,as="firebase-installations-store";let sh=null;function Lp(){return sh||(sh=Kw(s2,o2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(as)}}})),sh}async function uc(t,e){const n=Jc(t),i=(await Lp()).transaction(as,"readwrite"),s=i.objectStore(as),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&fE(t,e.fid),e}async function mE(t){const e=Jc(t),r=(await Lp()).transaction(as,"readwrite");await r.objectStore(as).delete(e),await r.done}async function Zc(t,e){const n=Jc(t),i=(await Lp()).transaction(as,"readwrite"),s=i.objectStore(as),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&fE(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(t){let e;const n=await Zc(t.appConfig,r=>{const i=a2(r),s=l2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===ff?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function a2(t){const e=t||{fid:e2(),registrationStatus:0};return gE(e)}function l2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(os.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=u2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:c2(t)}:{installationEntry:e}}async function u2(t,e){try{const n=await XC(t,e);return uc(t.appConfig,n)}catch(n){throw sE(n)&&n.customData.serverCode===409?await mE(t.appConfig):await uc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function c2(t){let e=await $y(t.appConfig);for(;e.registrationStatus===1;)await dE(100),e=await $y(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Vp(t);return r||n}return e}function $y(t){return Zc(t,e=>{if(!e)throw os.create("installation-not-found");return gE(e)})}function gE(t){return d2(t)?{fid:t.fid,registrationStatus:0}:t}function d2(t){return t.registrationStatus===1&&t.registrationTime+nE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h2({appConfig:t,heartbeatServiceProvider:e},n){const r=f2(t,n),i=GC(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:rE,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await cE(()=>fetch(r,l));if(u.ok){const c=await u.json();return aE(c)}else throw await lE("Generate Auth Token",u)}function f2(t,{fid:e}){return`${oE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fp(t,e=!1){let n;const r=await Zc(t.appConfig,s=>{if(!yE(s))throw os.create("not-registered");const o=s.authToken;if(!e&&g2(o))return s;if(o.requestStatus===1)return n=p2(t,e),s;{if(!navigator.onLine)throw os.create("app-offline");const l=v2(s);return n=m2(t,l),l}});return n?await n:r.authToken}async function p2(t,e){let n=await Hy(t.appConfig);for(;n.authToken.requestStatus===1;)await dE(100),n=await Hy(t.appConfig);const r=n.authToken;return r.requestStatus===0?Fp(t,e):r}function Hy(t){return Zc(t,e=>{if(!yE(e))throw os.create("not-registered");const n=e.authToken;return _2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function m2(t,e){try{const n=await h2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await uc(t.appConfig,r),n}catch(n){if(sE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await mE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await uc(t.appConfig,r)}throw n}}function yE(t){return t!==void 0&&t.registrationStatus===2}function g2(t){return t.requestStatus===2&&!y2(t)}function y2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+HC}function v2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function _2(t){return t.requestStatus===1&&t.requestTime+nE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Vp(e);return r?r.catch(console.error):Fp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E2(t,e=!1){const n=t;return await T2(n),(await Fp(n,e)).token}async function T2(t){const{registrationPromise:e}=await Vp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(t){if(!t||!t.options)throw oh("App Configuration");if(!t.name)throw oh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw oh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function oh(t){return os.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="installations",S2="installations-internal",R2=t=>{const e=t.getProvider("app").getImmediate(),n=I2(e),r=Mr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},A2=t=>{const e=t.getProvider("app").getImmediate(),n=Mr(e,vE).getImmediate();return{getId:()=>w2(n),getToken:i=>E2(n,i)}};function P2(){Cn(new Pn(vE,R2,"PUBLIC")),Cn(new Pn(S2,A2,"PRIVATE"))}P2();Ft(tE,Mp);Ft(tE,Mp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="analytics",C2="firebase_id",k2="origin",x2=60*1e3,N2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",jp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new vl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},fn=new Or("analytics","Analytics",D2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b2(t){if(!t.startsWith(jp)){const e=fn.create("invalid-gtag-resource",{gtagURL:t});return tn.warn(e.message),""}return t}function _E(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function O2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function M2(t,e){const n=O2("firebase-js-sdk-policy",{createScriptURL:b2}),r=document.createElement("script"),i=`${jp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function L2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function V2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await _E(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){tn.error(l)}t("config",i,s)}async function F2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await _E(n);for(const u of o){const c=l.find(p=>p.measurementId===u),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){tn.error(s)}}function j2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await F2(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await V2(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){tn.error(l)}}return i}function U2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=j2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function z2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(jp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2=30,$2=1e3;class H2{constructor(e={},n=$2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const wE=new H2;function W2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function q2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:W2(r)},s=N2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw fn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function K2(t,e=wE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw fn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw fn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Y2;return setTimeout(async()=>{l.abort()},x2),EE({appId:r,apiKey:i,measurementId:s},o,l,e)}async function EE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=wE){var s;const{appId:o,measurementId:l}=t;try{await G2(r,e)}catch(u){if(l)return tn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await q2(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!Q2(c)){if(i.deleteThrottleMetadata(o),l)return tn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ly(n,i.intervalMillis,B2):Ly(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,p),tn.debug(`Calling attemptFetch again in ${h} millis`),EE(t,p,r,i)}}function G2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(fn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Q2(t){if(!(t instanceof xn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Y2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function X2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J2(){if(Uw())try{await zw()}catch(t){return tn.warn(fn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return tn.warn(fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Z2(t,e,n,r,i,s,o){var l;const u=K2(t);u.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&tn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>tn.error(T)),e.push(u);const c=J2().then(T=>{if(T)return r.getId()}),[h,p]=await Promise.all([u,c]);z2(s)||M2(s,h.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[k2]="firebase",m.update=!0,p!=null&&(m[C2]=p),i("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.app=e}_delete(){return delete Pa[this.app.options.appId],Promise.resolve()}}let Pa={},Wy=[];const qy={};let ah="dataLayer",tk="gtag",Ky,TE,Gy=!1;function nk(){const t=[];if(jw()&&t.push("This is a browser extension environment."),EP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=fn.create("invalid-analytics-context",{errorInfo:e});tn.warn(n.message)}}function rk(t,e,n){nk();const r=t.options.appId;if(!r)throw fn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)tn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw fn.create("no-api-key");if(Pa[r]!=null)throw fn.create("already-exists",{id:r});if(!Gy){L2(ah);const{wrappedGtag:s,gtagCore:o}=U2(Pa,Wy,qy,ah,tk);TE=s,Ky=o,Gy=!0}return Pa[r]=Z2(t,Wy,qy,e,Ky,ah,n),new ek(t)}function ik(t=Xc()){t=ft(t);const e=Mr(t,cc);return e.isInitialized()?e.getImmediate():sk(t)}function sk(t,e={}){const n=Mr(t,cc);if(n.isInitialized()){const i=n.getImmediate();if(Za(e,n.getOptions()))return i;throw fn.create("already-initialized")}return n.initialize({options:e})}function ok(t,e,n,r){t=ft(t),X2(TE,Pa[t.app.options.appId],e,n,r).catch(i=>tn.error(i))}const Qy="@firebase/analytics",Yy="0.10.5";function ak(){Cn(new Pn(cc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return rk(r,i,n)},"PUBLIC")),Cn(new Pn("analytics-internal",t,"PRIVATE")),Ft(Qy,Yy),Ft(Qy,Yy,"esm2017");function t(e){try{const n=e.getProvider(cc).getImmediate();return{logEvent:(r,i,s)=>ok(n,r,i,s)}}catch(n){throw fn.create("interop-component-reg-failed",{reason:n})}}}ak();function Up(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function IE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lk=IE,SE=new Or("auth","Firebase",IE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new vl("@firebase/auth");function uk(t,...e){dc.logLevel<=ge.WARN&&dc.warn(`Auth (${Pi}): ${t}`,...e)}function Ru(t,...e){dc.logLevel<=ge.ERROR&&dc.error(`Auth (${Pi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,...e){throw Bp(t,...e)}function $n(t,...e){return Bp(t,...e)}function zp(t,e,n){const r=Object.assign(Object.assign({},lk()),{[e]:n});return new Or("auth","Firebase",r).create(e,{appName:t.name})}function Sr(t){return zp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ck(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&kn(t,"argument-error"),zp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return SE.create(t,...e)}function se(t,e,...n){if(!t)throw Bp(e,...n)}function _r(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ru(e),new Error(e)}function kr(t,e){t||_r(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dk(){return Xy()==="http:"||Xy()==="https:"}function Xy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dk()||jw()||"connection"in navigator)?navigator.onLine:!0}function fk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n){this.shortDelay=e,this.longDelay=n,kr(n>e,"Short delay should be less than long delay!"),this.isMobile=gP()||vP()}get(){return hk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t,e){kr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=new _l(3e4,6e4);function Lr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vr(t,e,n,r,i={}){return AE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=yl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),RE.fetch()(PE(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function AE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pk),e);try{const i=new yk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw au(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw au(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw au(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw au(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw zp(t,h,c);kn(t,h)}}catch(i){if(i instanceof xn)throw i;kn(t,"network-request-failed",{message:String(i)})}}async function wl(t,e,n,r,i={}){const s=await Vr(t,e,n,r,i);return"mfaPendingCredential"in s&&kn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function PE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$p(t.config,i):`${t.config.apiScheme}://${i}`}function gk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($n(this.auth,"network-request-failed")),mk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function au(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$n(t,e,r);return i.customData._tokenResponse=n,i}function Jy(t){return t!==void 0&&t.enterprise!==void 0}class vk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return gk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _k(t,e){return Vr(t,"GET","/v2/recaptchaConfig",Lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(t,e){return Vr(t,"POST","/v1/accounts:delete",e)}async function CE(t,e){return Vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ek(t,e=!1){const n=ft(t),r=await n.getIdToken(e),i=Hp(r);se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ca(lh(i.auth_time)),issuedAtTime:Ca(lh(i.iat)),expirationTime:Ca(lh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function lh(t){return Number(t)*1e3}function Hp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ru("JWT malformed, contained fewer than 3 sections"),null;try{const i=bw(n);return i?JSON.parse(i):(Ru("Failed to decode base64 JWT payload"),null)}catch(i){return Ru("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zy(t){const e=Hp(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&Tk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Tk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ca(this.lastLoginAt),this.creationTime=Ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await nl(t,CE(n,{idToken:r}));se(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?kE(s.providerUserInfo):[],l=Rk(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new mf(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function Sk(t){const e=ft(t);await hc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kE(t){return t.map(e=>{var{providerId:n}=e,r=Up(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(t,e){const n=await AE(t,{},async()=>{const r=yl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=PE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",RE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Pk(t,e){return Vr(t,"POST","/v2/accounts:revokeToken",Lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=Zy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ak(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Js;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(se(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Js,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Up(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ik(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new mf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await nl(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ek(this,e)}reload(){return Sk(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(Sr(this.auth));const e=await this.getIdToken();return await nl(this,wk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:A,emailVerified:V,isAnonymous:z,providerData:N,stsTokenManager:E}=n;se(A&&E,e,"internal-error");const y=Js.fromJSON(this.name,E);se(typeof A=="string",e,"internal-error"),Kr(p,e.name),Kr(m,e.name),se(typeof V=="boolean",e,"internal-error"),se(typeof z=="boolean",e,"internal-error"),Kr(T,e.name),Kr(C,e.name),Kr(k,e.name),Kr(O,e.name),Kr(I,e.name),Kr(_,e.name);const v=new wr({uid:A,auth:e,email:m,emailVerified:V,displayName:p,isAnonymous:z,photoURL:C,phoneNumber:T,tenantId:k,stsTokenManager:y,createdAt:I,lastLoginAt:_});return N&&Array.isArray(N)&&(v.providerData=N.map(R=>Object.assign({},R))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Js;i.updateFromServerResponse(n);const s=new wr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];se(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?kE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Js;l.updateFromIdToken(r);const u=new wr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new mf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=new Map;function Er(t){kr(t instanceof Function,"Expected a class definition");let e=ev.get(t);return e?(kr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ev.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xE.type="NONE";const tv=xE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t,e,n){return`firebase:${t}:${e}:${n}`}class Zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Au(this.userKey,i.apiKey,s),this.fullPersistenceKey=Au("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zs(Er(tv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Er(tv);const o=Au(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(o);if(h){const p=wr._fromJSON(e,h);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Zs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Zs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(NE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ME(e))return"Blackberry";if(LE(e))return"Webos";if(Wp(e))return"Safari";if((e.includes("chrome/")||DE(e))&&!e.includes("edge/"))return"Chrome";if(OE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function NE(t=At()){return/firefox\//i.test(t)}function Wp(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function DE(t=At()){return/crios\//i.test(t)}function bE(t=At()){return/iemobile/i.test(t)}function OE(t=At()){return/android/i.test(t)}function ME(t=At()){return/blackberry/i.test(t)}function LE(t=At()){return/webos/i.test(t)}function ed(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ck(t=At()){var e;return ed(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kk(){return _P()&&document.documentMode===10}function VE(t=At()){return ed(t)||OE(t)||LE(t)||ME(t)||/windows phone/i.test(t)||bE(t)}function xk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t,e=[]){let n;switch(t){case"Browser":n=nv(At());break;case"Worker":n=`${nv(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(t,e={}){return Vr(t,"GET","/v2/passwordPolicy",Lr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=6;class Ok{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:bk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rv(this),this.idTokenSubscription=new rv(this),this.beforeStateQueue=new Nk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=SE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await CE(this,{idToken:e}),r=await wr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(Sr(this));const n=e?ft(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(Sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(Sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dk(this),n=new Ok(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Or("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Er(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[Er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=FE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fr(t){return ft(t)}class rv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bw(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let td={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lk(t){td=t}function jE(t){return td.loadJS(t)}function Vk(){return td.recaptchaEnterpriseScript}function Fk(){return td.gapiScript}function jk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Uk="recaptcha-enterprise",zk="NO_RECAPTCHA";class Bk{constructor(e){this.type=Uk,this.auth=Fr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{_k(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new vk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Jy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(zk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Jy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Vk();u.length!==0&&(u+=l),jE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function iv(t,e,n,r=!1){const i=new Bk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function fc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await iv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await iv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t,e){const n=Mr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Za(s,e??{}))return i;kn(i,"already-initialized")}return n.initialize({options:e})}function Hk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Wk(t,e,n){const r=Fr(t);se(r._canInitEmulator,r,"emulator-config-failed"),se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=UE(e),{host:o,port:l}=qk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Kk()}function UE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qk(t){const e=UE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:sv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:sv(o)}}}function sv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Kk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,n){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}async function Gk(t,e){return Vr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(t,e){return wl(t,"POST","/v1/accounts:signInWithPassword",Lr(t,e))}async function Yk(t,e){return Vr(t,"POST","/v1/accounts:sendOobCode",Lr(t,e))}async function Xk(t,e){return Yk(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(t,e){return wl(t,"POST","/v1/accounts:signInWithEmailLink",Lr(t,e))}async function Zk(t,e){return wl(t,"POST","/v1/accounts:signInWithEmailLink",Lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends qp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new rl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new rl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(e,n,"signInWithPassword",Qk);case"emailLink":return Jk(e,{email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(e,r,"signUpPassword",Gk);case"emailLink":return Zk(e,{idToken:n,email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t,e){return wl(t,"POST","/v1/accounts:signInWithIdp",Lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex="http://localhost";class ls extends qp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Up(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ls(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return eo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,eo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,eo(e,n)}buildRequest(){const e={requestUri:ex,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nx(t){const e=da(ha(t)).link,n=e?da(ha(e)).deep_link_id:null,r=da(ha(t)).deep_link_id;return(r?da(ha(r)).link:null)||r||n||e||t}class Kp{constructor(e){var n,r,i,s,o,l;const u=da(ha(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=tx((i=u.mode)!==null&&i!==void 0?i:null);se(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=nx(e);try{return new Kp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.providerId=Po.PROVIDER_ID}static credential(e,n){return rl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kp.parseLink(n);return se(r,"argument-error"),rl._fromEmailAndCode(e,r.code,r.tenantId)}}Po.PROVIDER_ID="password";Po.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Po.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends Gp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends El{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends El{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends El{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.GITHUB_SIGN_IN_METHOD="github.com";ei.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends El{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ti.credential(n,r)}catch{return null}}}ti.TWITTER_SIGN_IN_METHOD="twitter.com";ti.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(t,e){return wl(t,"POST","/v1/accounts:signUp",Lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await wr._fromIdTokenResponse(e,r,i),o=ov(r);return new us({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ov(r);return new us({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ov(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends xn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pc(e,n,r,i)}}function zE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pc._fromErrorAndOperation(t,s,e,r):s})}async function ix(t,e,n=!1){const r=await nl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t,e,n=!1){const{auth:r}=t;if(Tn(r.app))return Promise.reject(Sr(r));const i="reauthenticate";try{const s=await nl(t,zE(r,i,e,t),n);se(s.idToken,r,"internal-error");const o=Hp(s.idToken);se(o,r,"internal-error");const{sub:l}=o;return se(t.uid===l,r,"user-mismatch"),us._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&kn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(t,e,n=!1){if(Tn(t.app))return Promise.reject(Sr(t));const r="signIn",i=await zE(t,r,e),s=await us._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ox(t,e){return BE(Fr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $E(t){const e=Fr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ax(t,e,n){const r=Fr(t);await fc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Xk)}async function lx(t,e,n){if(Tn(t.app))return Promise.reject(Sr(t));const r=Fr(t),o=await fc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rx).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&$E(t),u}),l=await us._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function ux(t,e,n){return Tn(t.app)?Promise.reject(Sr(t)):ox(ft(t),Po.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$E(t),r})}function cx(t,e,n,r){return ft(t).onIdTokenChanged(e,n,r)}function dx(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function hx(t,e,n,r){return ft(t).onAuthStateChanged(e,n,r)}function fx(t){return ft(t).signOut()}const mc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mc,"1"),this.storage.removeItem(mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(){const t=At();return Wp(t)||ed(t)}const mx=1e3,gx=10;class WE extends HE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=px()&&xk(),this.fallbackToPolling=VE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}WE.type="LOCAL";const yx=WE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE extends HE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qE.type="SESSION";const KE=qE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new nd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await vx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Qp("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){return window}function wx(t){Zn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function Ex(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ix(){return GE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="firebaseLocalStorageDb",Sx=1,gc="firebaseLocalStorage",YE="fbase_key";class Tl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rd(t,e){return t.transaction([gc],e?"readwrite":"readonly").objectStore(gc)}function Rx(){const t=indexedDB.deleteDatabase(QE);return new Tl(t).toPromise()}function gf(){const t=indexedDB.open(QE,Sx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gc,{keyPath:YE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gc)?e(r):(r.close(),await Rx(),e(await gf()))})})}async function av(t,e,n){const r=rd(t,!0).put({[YE]:e,value:n});return new Tl(r).toPromise()}async function Ax(t,e){const n=rd(t,!1).get(e),r=await new Tl(n).toPromise();return r===void 0?null:r.value}function lv(t,e){const n=rd(t,!0).delete(e);return new Tl(n).toPromise()}const Px=800,Cx=3;class XE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Cx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nd._getInstance(Ix()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ex(),!this.activeServiceWorker)return;this.sender=new _x(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gf();return await av(e,mc,"1"),await lv(e,mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>av(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ax(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=rd(i,!1).getAll();return new Tl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Px)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XE.type="LOCAL";const kx=XE;new _l(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(t,e){return e?Er(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp extends qp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return eo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xx(t){return BE(t.auth,new Yp(t),t.bypassAuthState)}function Nx(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),sx(n,new Yp(t),t.bypassAuthState)}async function Dx(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),ix(n,new Yp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xx;case"linkViaPopup":case"linkViaRedirect":return Dx;case"reauthViaPopup":case"reauthViaRedirect":return Nx;default:kn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=new _l(2e3,1e4);async function Ox(t,e,n){if(Tn(t.app))return Promise.reject($n(t,"operation-not-supported-in-this-environment"));const r=Fr(t);ck(t,e,Gp);const i=JE(r,n);return new Ki(r,"signInViaPopup",e,i).executeNotNull()}class Ki extends ZE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ki.currentPopupAction&&Ki.currentPopupAction.cancel(),Ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=Qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bx.get())};e()}}Ki.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx="pendingRedirect",Pu=new Map;class Lx extends ZE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pu.get(this.auth._key());if(!e){try{const r=await Vx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pu.set(this.auth._key(),e)}return this.bypassAuthState||Pu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vx(t,e){const n=Ux(e),r=jx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Fx(t,e){Pu.set(t._key(),e)}function jx(t){return Er(t._redirectPersistence)}function Ux(t){return Au(Mx,t.config.apiKey,t.name)}async function zx(t,e,n=!1){if(Tn(t.app))return Promise.reject(Sr(t));const r=Fr(t),i=JE(r,e),o=await new Lx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=10*60*1e3;class $x{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!eT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bx&&this.cachedEventUids.clear(),this.cachedEventUids.has(uv(e))}saveEventToCache(e){this.cachedEventUids.add(uv(e)),this.lastProcessedEventTime=Date.now()}}function uv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wx(t,e={}){return Vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kx=/^https?/;async function Gx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wx(t);for(const n of e)try{if(Qx(n))return}catch{}kn(t,"unauthorized-domain")}function Qx(t){const e=pf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Kx.test(n))return!1;if(qx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=new _l(3e4,6e4);function cv(){const t=Zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xx(t){return new Promise((e,n)=>{var r,i,s;function o(){cv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cv(),n($n(t,"network-request-failed"))},timeout:Yx.get()})}if(!((i=(r=Zn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Zn().gapi)===null||s===void 0)&&s.load)o();else{const l=jk("iframefcb");return Zn()[l]=()=>{gapi.load?o():n($n(t,"network-request-failed"))},jE(`${Fk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Cu=null,e})}let Cu=null;function Jx(t){return Cu=Cu||Xx(t),Cu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx=new _l(5e3,15e3),eN="__/auth/iframe",tN="emulator/auth/iframe",nN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iN(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$p(e,tN):`https://${t.config.authDomain}/${eN}`,r={apiKey:e.apiKey,appName:t.name,v:Pi},i=rN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yl(r).slice(1)}`}async function sN(t){const e=await Jx(t),n=Zn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:iN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=$n(t,"network-request-failed"),l=Zn().setTimeout(()=>{s(o)},Zx.get());function u(){Zn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aN=500,lN=600,uN="_blank",cN="http://localhost";class dv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dN(t,e,n,r=aN,i=lN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},oN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=At().toLowerCase();n&&(l=DE(c)?uN:n),NE(c)&&(e=e||cN,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[T,C])=>`${m}${T}=${C},`,"");if(Ck(c)&&l!=="_self")return hN(e||"",l),new dv(null);const p=window.open(e||"",l,h);se(p,t,"popup-blocked");try{p.focus()}catch{}return new dv(p)}function hN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="__/auth/handler",pN="emulator/auth/handler",mN=encodeURIComponent("fac");async function hv(t,e,n,r,i,s){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pi,eventId:i};if(e instanceof Gp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",RP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof El){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await t._getAppCheckToken(),c=u?`#${mN}=${encodeURIComponent(u)}`:"";return`${gN(t)}?${yl(l).slice(1)}${c}`}function gN({config:t}){return t.emulator?$p(t,pN):`https://${t.authDomain}/${fN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="webStorageSupport";class yN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KE,this._completeRedirectFn=zx,this._overrideRedirectResult=Fx}async _openPopup(e,n,r,i){var s;kr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await hv(e,n,r,pf(),i);return dN(e,o,Qp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await hv(e,n,r,pf(),i);return wx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sN(e),r=new $x(e);return n.register("authEvent",i=>(se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uh,{type:uh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[uh];o!==void 0&&n(!!o),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return VE()||Wp()||ed()}}const vN=yN;var fv="@firebase/auth",pv="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EN(t){Cn(new Pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:FE(t)},c=new Mk(r,i,s,u);return Hk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cn(new Pn("auth-internal",e=>{const n=Fr(e.getProvider("auth").getImmediate());return(r=>new _N(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(fv,pv,wN(t)),Ft(fv,pv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=5*60,IN=Lw("authIdTokenMaxAge")||TN;let mv=null;const SN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>IN)return;const i=n==null?void 0:n.token;mv!==i&&(mv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function RN(t=Xc()){const e=Mr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$k(t,{popupRedirectResolver:vN,persistence:[kx,yx,KE]}),r=Lw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=SN(s.toString());dx(n,o,()=>o(n.currentUser)),cx(n,l=>o(l))}}const i=Ow("auth");return i&&Wk(n,`http://${i}`),n}function AN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Lk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=$n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",AN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EN("Browser");var gv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xi,tT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(R,P,b){for(var S=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)S[Te-2]=arguments[Te];return y.prototype[P].apply(R,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,v){v||(v=0);var R=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)R[P]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(P=0;16>P;++P)R[P]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],P=E.g[2];var b=E.g[3],S=y+(b^v&(P^b))+R[0]+3614090360&4294967295;y=v+(S<<7&4294967295|S>>>25),S=b+(P^y&(v^P))+R[1]+3905402710&4294967295,b=y+(S<<12&4294967295|S>>>20),S=P+(v^b&(y^v))+R[2]+606105819&4294967295,P=b+(S<<17&4294967295|S>>>15),S=v+(y^P&(b^y))+R[3]+3250441966&4294967295,v=P+(S<<22&4294967295|S>>>10),S=y+(b^v&(P^b))+R[4]+4118548399&4294967295,y=v+(S<<7&4294967295|S>>>25),S=b+(P^y&(v^P))+R[5]+1200080426&4294967295,b=y+(S<<12&4294967295|S>>>20),S=P+(v^b&(y^v))+R[6]+2821735955&4294967295,P=b+(S<<17&4294967295|S>>>15),S=v+(y^P&(b^y))+R[7]+4249261313&4294967295,v=P+(S<<22&4294967295|S>>>10),S=y+(b^v&(P^b))+R[8]+1770035416&4294967295,y=v+(S<<7&4294967295|S>>>25),S=b+(P^y&(v^P))+R[9]+2336552879&4294967295,b=y+(S<<12&4294967295|S>>>20),S=P+(v^b&(y^v))+R[10]+4294925233&4294967295,P=b+(S<<17&4294967295|S>>>15),S=v+(y^P&(b^y))+R[11]+2304563134&4294967295,v=P+(S<<22&4294967295|S>>>10),S=y+(b^v&(P^b))+R[12]+1804603682&4294967295,y=v+(S<<7&4294967295|S>>>25),S=b+(P^y&(v^P))+R[13]+4254626195&4294967295,b=y+(S<<12&4294967295|S>>>20),S=P+(v^b&(y^v))+R[14]+2792965006&4294967295,P=b+(S<<17&4294967295|S>>>15),S=v+(y^P&(b^y))+R[15]+1236535329&4294967295,v=P+(S<<22&4294967295|S>>>10),S=y+(P^b&(v^P))+R[1]+4129170786&4294967295,y=v+(S<<5&4294967295|S>>>27),S=b+(v^P&(y^v))+R[6]+3225465664&4294967295,b=y+(S<<9&4294967295|S>>>23),S=P+(y^v&(b^y))+R[11]+643717713&4294967295,P=b+(S<<14&4294967295|S>>>18),S=v+(b^y&(P^b))+R[0]+3921069994&4294967295,v=P+(S<<20&4294967295|S>>>12),S=y+(P^b&(v^P))+R[5]+3593408605&4294967295,y=v+(S<<5&4294967295|S>>>27),S=b+(v^P&(y^v))+R[10]+38016083&4294967295,b=y+(S<<9&4294967295|S>>>23),S=P+(y^v&(b^y))+R[15]+3634488961&4294967295,P=b+(S<<14&4294967295|S>>>18),S=v+(b^y&(P^b))+R[4]+3889429448&4294967295,v=P+(S<<20&4294967295|S>>>12),S=y+(P^b&(v^P))+R[9]+568446438&4294967295,y=v+(S<<5&4294967295|S>>>27),S=b+(v^P&(y^v))+R[14]+3275163606&4294967295,b=y+(S<<9&4294967295|S>>>23),S=P+(y^v&(b^y))+R[3]+4107603335&4294967295,P=b+(S<<14&4294967295|S>>>18),S=v+(b^y&(P^b))+R[8]+1163531501&4294967295,v=P+(S<<20&4294967295|S>>>12),S=y+(P^b&(v^P))+R[13]+2850285829&4294967295,y=v+(S<<5&4294967295|S>>>27),S=b+(v^P&(y^v))+R[2]+4243563512&4294967295,b=y+(S<<9&4294967295|S>>>23),S=P+(y^v&(b^y))+R[7]+1735328473&4294967295,P=b+(S<<14&4294967295|S>>>18),S=v+(b^y&(P^b))+R[12]+2368359562&4294967295,v=P+(S<<20&4294967295|S>>>12),S=y+(v^P^b)+R[5]+4294588738&4294967295,y=v+(S<<4&4294967295|S>>>28),S=b+(y^v^P)+R[8]+2272392833&4294967295,b=y+(S<<11&4294967295|S>>>21),S=P+(b^y^v)+R[11]+1839030562&4294967295,P=b+(S<<16&4294967295|S>>>16),S=v+(P^b^y)+R[14]+4259657740&4294967295,v=P+(S<<23&4294967295|S>>>9),S=y+(v^P^b)+R[1]+2763975236&4294967295,y=v+(S<<4&4294967295|S>>>28),S=b+(y^v^P)+R[4]+1272893353&4294967295,b=y+(S<<11&4294967295|S>>>21),S=P+(b^y^v)+R[7]+4139469664&4294967295,P=b+(S<<16&4294967295|S>>>16),S=v+(P^b^y)+R[10]+3200236656&4294967295,v=P+(S<<23&4294967295|S>>>9),S=y+(v^P^b)+R[13]+681279174&4294967295,y=v+(S<<4&4294967295|S>>>28),S=b+(y^v^P)+R[0]+3936430074&4294967295,b=y+(S<<11&4294967295|S>>>21),S=P+(b^y^v)+R[3]+3572445317&4294967295,P=b+(S<<16&4294967295|S>>>16),S=v+(P^b^y)+R[6]+76029189&4294967295,v=P+(S<<23&4294967295|S>>>9),S=y+(v^P^b)+R[9]+3654602809&4294967295,y=v+(S<<4&4294967295|S>>>28),S=b+(y^v^P)+R[12]+3873151461&4294967295,b=y+(S<<11&4294967295|S>>>21),S=P+(b^y^v)+R[15]+530742520&4294967295,P=b+(S<<16&4294967295|S>>>16),S=v+(P^b^y)+R[2]+3299628645&4294967295,v=P+(S<<23&4294967295|S>>>9),S=y+(P^(v|~b))+R[0]+4096336452&4294967295,y=v+(S<<6&4294967295|S>>>26),S=b+(v^(y|~P))+R[7]+1126891415&4294967295,b=y+(S<<10&4294967295|S>>>22),S=P+(y^(b|~v))+R[14]+2878612391&4294967295,P=b+(S<<15&4294967295|S>>>17),S=v+(b^(P|~y))+R[5]+4237533241&4294967295,v=P+(S<<21&4294967295|S>>>11),S=y+(P^(v|~b))+R[12]+1700485571&4294967295,y=v+(S<<6&4294967295|S>>>26),S=b+(v^(y|~P))+R[3]+2399980690&4294967295,b=y+(S<<10&4294967295|S>>>22),S=P+(y^(b|~v))+R[10]+4293915773&4294967295,P=b+(S<<15&4294967295|S>>>17),S=v+(b^(P|~y))+R[1]+2240044497&4294967295,v=P+(S<<21&4294967295|S>>>11),S=y+(P^(v|~b))+R[8]+1873313359&4294967295,y=v+(S<<6&4294967295|S>>>26),S=b+(v^(y|~P))+R[15]+4264355552&4294967295,b=y+(S<<10&4294967295|S>>>22),S=P+(y^(b|~v))+R[6]+2734768916&4294967295,P=b+(S<<15&4294967295|S>>>17),S=v+(b^(P|~y))+R[13]+1309151649&4294967295,v=P+(S<<21&4294967295|S>>>11),S=y+(P^(v|~b))+R[4]+4149444226&4294967295,y=v+(S<<6&4294967295|S>>>26),S=b+(v^(y|~P))+R[11]+3174756917&4294967295,b=y+(S<<10&4294967295|S>>>22),S=P+(y^(b|~v))+R[2]+718787259&4294967295,P=b+(S<<15&4294967295|S>>>17),S=v+(b^(P|~y))+R[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(P+(S<<21&4294967295|S>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,R=this.B,P=this.h,b=0;b<y;){if(P==0)for(;b<=v;)i(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<y;)if(R[P++]=E.charCodeAt(b++),P==this.blockSize){i(this,R),P=0;break}}else for(;b<y;)if(R[P++]=E[b++],P==this.blockSize){i(this,R),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var R=0;32>R;R+=8)E[v++]=this.g[y]>>>R&255;return E};function s(E,y){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function o(E,y){this.h=y;for(var v=[],R=!0,P=E.length-1;0<=P;P--){var b=E[P]|0;R&&b==y||(v[P]=b,R=!1)}this.g=v}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return O(c(-E));for(var y=[],v=1,R=0;E>=v;R++)y[R]=E/v|0,v*=4294967296;return new o(y,0)}function h(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return O(h(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=c(Math.pow(y,8)),R=p,P=0;P<E.length;P+=8){var b=Math.min(8,E.length-P),S=parseInt(E.substring(P,P+b),y);8>b?(b=c(Math.pow(y,b)),R=R.j(b).add(c(S))):(R=R.j(v),R=R.add(c(S)))}return R}var p=u(0),m=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var R=this.i(v);E+=(0<=R?R:4294967296+R)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(k(this))return"-"+O(this).toString(E);for(var y=c(Math.pow(E,6)),v=this,R="";;){var P=V(v,y).g;v=I(v,P.j(y));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=P,C(v))return b+R;for(;6>b.length;)b="0"+b;R=b+R}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=I(this,E),k(E)?-1:C(E)?0:1};function O(E){for(var y=E.g.length,v=[],R=0;R<y;R++)v[R]=~E.g[R];return new o(v,~E.h).add(m)}t.abs=function(){return k(this)?O(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],R=0,P=0;P<=y;P++){var b=R+(this.i(P)&65535)+(E.i(P)&65535),S=(b>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);R=S>>>16,b&=65535,S&=65535,v[P]=S<<16|b}return new o(v,v[v.length-1]&-2147483648?-1:0)};function I(E,y){return E.add(O(y))}t.j=function(E){if(C(this)||C(E))return p;if(k(this))return k(E)?O(this).j(O(E)):O(O(this).j(E));if(k(E))return O(this.j(O(E)));if(0>this.l(T)&&0>E.l(T))return c(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],R=0;R<2*y;R++)v[R]=0;for(R=0;R<this.g.length;R++)for(var P=0;P<E.g.length;P++){var b=this.i(R)>>>16,S=this.i(R)&65535,Te=E.i(P)>>>16,yt=E.i(P)&65535;v[2*R+2*P]+=S*yt,_(v,2*R+2*P),v[2*R+2*P+1]+=b*yt,_(v,2*R+2*P+1),v[2*R+2*P+1]+=S*Te,_(v,2*R+2*P+1),v[2*R+2*P+2]+=b*Te,_(v,2*R+2*P+2)}for(R=0;R<y;R++)v[R]=v[2*R+1]<<16|v[2*R];for(R=y;R<2*y;R++)v[R]=0;return new o(v,0)};function _(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function A(E,y){this.g=E,this.h=y}function V(E,y){if(C(y))throw Error("division by zero");if(C(E))return new A(p,p);if(k(E))return y=V(O(E),y),new A(O(y.g),O(y.h));if(k(y))return y=V(E,O(y)),new A(O(y.g),y.h);if(30<E.g.length){if(k(E)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,R=y;0>=R.l(E);)v=z(v),R=z(R);var P=N(v,1),b=N(R,1);for(R=N(R,2),v=N(v,2);!C(R);){var S=b.add(R);0>=S.l(E)&&(P=P.add(v),b=S),R=N(R,1),v=N(v,1)}return y=I(E,P.j(y)),new A(P,y)}for(P=p;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),R=Math.ceil(Math.log(v)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),b=c(v),S=b.j(y);k(S)||0<S.l(E);)v-=R,b=c(v),S=b.j(y);C(b)&&(b=m),P=P.add(b),E=I(E,S)}return new A(P,E)}t.A=function(E){return V(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],R=0;R<y;R++)v[R]=this.i(R)&E.i(R);return new o(v,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],R=0;R<y;R++)v[R]=this.i(R)|E.i(R);return new o(v,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],R=0;R<y;R++)v[R]=this.i(R)^E.i(R);return new o(v,this.h^E.h)};function z(E){for(var y=E.g.length+1,v=[],R=0;R<y;R++)v[R]=E.i(R)<<1|E.i(R-1)>>>31;return new o(v,E.h)}function N(E,y){var v=y>>5;y%=32;for(var R=E.g.length-v,P=[],b=0;b<R;b++)P[b]=0<y?E.i(b+v)>>>y|E.i(b+v+1)<<32-y:E.i(b+v);return new o(P,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Xi=o}).apply(typeof gv<"u"?gv:typeof self<"u"?self:typeof window<"u"?window:{});var lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nT,rT,fa,iT,ku,yf,sT,oT,aT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof lu=="object"&&lu];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var M=a[g];if(!(M in f))break e;f=f[M]}a=a[a.length-1],g=f[a],d=d(g),d!=g&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var f=0,g=!1,M={next:function(){if(!g&&f<a.length){var j=f++;return{value:d(j,a[j]),done:!1}}return g=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,g),a.apply(d,M)}}return function(){return a.apply(d,arguments)}}function m(a,d,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function T(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,M,j){for(var q=Array(arguments.length-2),be=2;be<arguments.length;be++)q[be-2]=arguments[be];return d.prototype[M].apply(g,q)}}function k(a){const d=a.length;if(0<d){const f=Array(d);for(let g=0;g<d;g++)f[g]=a[g];return f}return[]}function O(a,d){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const M=a.length||0,j=g.length||0;a.length=M+j;for(let q=0;q<j;q++)a[M+q]=g[q]}else a.push(g)}}class I{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function _(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var z=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function N(a,d,f){for(const g in a)d.call(f,a[g],g,a)}function E(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function y(a){const d={};for(const f in a)d[f]=a[f];return d}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,d){let f,g;for(let M=1;M<arguments.length;M++){g=arguments[M];for(f in g)a[f]=g[f];for(let j=0;j<v.length;j++)f=v[j],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function P(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function b(a){l.setTimeout(()=>{throw a},0)}function S(){var a=ee;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Te{constructor(){this.h=this.g=null}add(d,f){const g=yt.get();g.set(d,f),this.h?this.h.next=g:this.g=g,this.h=g}}var yt=new I(()=>new rn,a=>a.reset());class rn{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,K=!1,ee=new Te,ne=()=>{const a=l.Promise.resolve(void 0);Ie=()=>{a.then(ve)}};var ve=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(f){b(f)}var d=yt;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}K=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var Qe=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return a}();function ot(a,d){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(z){e:{try{V(d.nodeName);var M=!0;break e}catch{}M=!1}M||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:tt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ot.aa.h.call(this)}}C(ot,ke);var tt={2:"touch",3:"pen",4:"mouse"};ot.prototype.h=function(){ot.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Pt="closure_listenable_"+(1e6*Math.random()|0),Wn=0;function de(a,d,f,g,M){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!g,this.ha=M,this.key=++Wn,this.da=this.fa=!1}function xe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Gt(a){this.src=a,this.g={},this.h=0}Gt.prototype.add=function(a,d,f,g,M){var j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);var q=Be(a,d,g,M);return-1<q?(d=a[q],f||(d.fa=!1)):(d=new de(d,this.src,j,!!g,M),d.fa=f,a.push(d)),d};function De(a,d){var f=d.type;if(f in a.g){var g=a.g[f],M=Array.prototype.indexOf.call(g,d,void 0),j;(j=0<=M)&&Array.prototype.splice.call(g,M,1),j&&(xe(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Be(a,d,f,g){for(var M=0;M<a.length;++M){var j=a[M];if(!j.da&&j.listener==d&&j.capture==!!f&&j.ha==g)return M}return-1}var zt="closure_lm_"+(1e6*Math.random()|0),Nn={};function Bt(a,d,f,g,M){if(Array.isArray(d)){for(var j=0;j<d.length;j++)Bt(a,d[j],f,g,M);return null}return f=Ur(f),a&&a[Pt]?a.K(d,f,c(g)?!!g.capture:!!g,M):jr(a,d,f,!1,g,M)}function jr(a,d,f,g,M,j){if(!d)throw Error("Invalid event type");var q=c(M)?!!M.capture:!!M,be=ws(a);if(be||(a[zt]=be=new Gt(a)),f=be.add(d,f,g,q,j),f.proxy)return f;if(g=ki(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Qe||(M=q),M===void 0&&(M=!1),a.addEventListener(d.toString(),g,M);else if(a.attachEvent)a.attachEvent(_s(d.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function ki(){function a(f){return d.call(a.src,a.listener,f)}const d=xl;return a}function Dn(a,d,f,g,M){if(Array.isArray(d))for(var j=0;j<d.length;j++)Dn(a,d[j],f,g,M);else g=c(g)?!!g.capture:!!g,f=Ur(f),a&&a[Pt]?(a=a.i,d=String(d).toString(),d in a.g&&(j=a.g[d],f=Be(j,f,g,M),-1<f&&(xe(j[f]),Array.prototype.splice.call(j,f,1),j.length==0&&(delete a.g[d],a.h--)))):a&&(a=ws(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Be(d,f,g,M)),(f=-1<a?d[a]:null)&&or(f))}function or(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Pt])De(d.i,a);else{var f=a.type,g=a.proxy;d.removeEventListener?d.removeEventListener(f,g,a.capture):d.detachEvent?d.detachEvent(_s(f),g):d.addListener&&d.removeListener&&d.removeListener(g),(f=ws(d))?(De(f,a),f.h==0&&(f.src=null,d[zt]=null)):xe(a)}}}function _s(a){return a in Nn?Nn[a]:Nn[a]="on"+a}function xl(a,d){if(a.da)a=!0;else{d=new ot(d,this);var f=a.listener,g=a.ha||a.src;a.fa&&or(a),a=f.call(g,d)}return a}function ws(a){return a=a[zt],a instanceof Gt?a:null}var ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ur(a){return typeof a=="function"?a:(a[ar]||(a[ar]=function(d){return a.handleEvent(d)}),a[ar])}function at(){fe.call(this),this.i=new Gt(this),this.M=this,this.F=null}C(at,fe),at.prototype[Pt]=!0,at.prototype.removeEventListener=function(a,d,f,g){Dn(this,a,d,f,g)};function lt(a,d){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=d.type||d,typeof d=="string")d=new ke(d,a);else if(d instanceof ke)d.target=d.target||a;else{var M=d;d=new ke(g,a),R(d,M)}if(M=!0,f)for(var j=f.length-1;0<=j;j--){var q=d.g=f[j];M=sn(q,g,!0,d)&&M}if(q=d.g=a,M=sn(q,g,!0,d)&&M,M=sn(q,g,!1,d)&&M,f)for(j=0;j<f.length;j++)q=d.g=f[j],M=sn(q,g,!1,d)&&M}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],g=0;g<f.length;g++)xe(f[g]);delete a.g[d],a.h--}}this.F=null},at.prototype.K=function(a,d,f,g){return this.i.add(String(a),d,!1,f,g)},at.prototype.L=function(a,d,f,g){return this.i.add(String(a),d,!0,f,g)};function sn(a,d,f,g){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var M=!0,j=0;j<d.length;++j){var q=d[j];if(q&&!q.da&&q.capture==f){var be=q.listener,_t=q.ha||q.src;q.fa&&De(a.i,q),M=be.call(_t,g)!==!1&&M}}return M&&!g.defaultPrevented}function yn(a,d,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Do(a){a.g=yn(()=>{a.g=null,a.i&&(a.i=!1,Do(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Es extends fe{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Do(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(a){fe.call(this),this.h=a,this.g={}}C(xi,fe);var bn=[];function bo(a){N(a.g,function(d,f){this.g.hasOwnProperty(f)&&or(d)},a),a.g={}}xi.prototype.N=function(){xi.aa.N.call(this),bo(this)},xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ts=l.JSON.stringify,Nl=l.JSON.parse,_d=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Is(){}Is.prototype.h=null;function Ni(a){return a.h||(a.h=a.i())}function Oo(){}var lr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zr(){ke.call(this,"d")}C(zr,ke);function Di(){ke.call(this,"c")}C(Di,ke);var ur={},Mo=null;function Ss(){return Mo=Mo||new at}ur.La="serverreachability";function Lo(a){ke.call(this,ur.La,a)}C(Lo,ke);function cr(a){const d=Ss();lt(d,new Lo(d))}ur.STAT_EVENT="statevent";function bi(a,d){ke.call(this,ur.STAT_EVENT,a),this.stat=d}C(bi,ke);function vt(a){const d=Ss();lt(d,new bi(d,a))}ur.Ma="timingevent";function Dl(a,d){ke.call(this,ur.Ma,a),this.size=d}C(Dl,ke);function x(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function D(){this.g=!0}D.prototype.xa=function(){this.g=!1};function L(a,d,f,g,M,j){a.info(function(){if(a.g)if(j)for(var q="",be=j.split("&"),_t=0;_t<be.length;_t++){var Re=be[_t].split("=");if(1<Re.length){var xt=Re[0];Re=Re[1];var Nt=xt.split("_");q=2<=Nt.length&&Nt[1]=="type"?q+(xt+"="+Re+"&"):q+(xt+"=redacted&")}}else q=null;else q=j;return"XMLHTTP REQ ("+g+") [attempt "+M+"]: "+d+`
`+f+`
`+q})}function U(a,d,f,g,M,j,q){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+M+"]: "+d+`
`+f+`
`+j+" "+q})}function G(a,d,f,g){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+ie(a,f)+(g?" "+g:"")})}function X(a,d){a.info(function(){return"TIMEOUT: "+d})}D.prototype.info=function(){};function ie(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var M=g[1];if(Array.isArray(M)&&!(1>M.length)){var j=M[0];if(j!="noop"&&j!="stop"&&j!="close")for(var q=1;q<M.length;q++)M[q]=""}}}}return Ts(f)}catch{return d}}var W={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ae={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Z;function J(){}C(J,Is),J.prototype.g=function(){return new XMLHttpRequest},J.prototype.i=function(){return{}},Z=new J;function pe(a,d,f,g){this.j=a,this.i=d,this.l=f,this.R=g||1,this.U=new xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _e}function _e(){this.i=null,this.g="",this.h=!1}var Pe={},we={};function Ze(a,d,f){a.L=1,a.v=Ll(hr(d)),a.m=f,a.P=!0,$e(a,null)}function $e(a,d){a.F=Date.now(),On(a),a.A=hr(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Om(f.i,"t",g),a.C=0,f=a.j.J,a.h=new _e,a.g=Jm(a.j,f?d:null,!a.m),0<a.O&&(a.M=new Es(m(a.Y,a,a.g),a.O)),d=a.U,f=a.g,g=a.ca;var M="readystatechange";Array.isArray(M)||(M&&(bn[0]=M.toString()),M=bn);for(var j=0;j<M.length;j++){var q=Bt(f,M[j],g||d.handleEvent,!1,d.h||d);if(!q)break;d.g[q.key]=q}d=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),cr(),L(a.i,a.u,a.A,a.l,a.R,a.m)}pe.prototype.ca=function(a){a=a.target;const d=this.M;d&&fr(a)==3?d.j():this.Y(a)},pe.prototype.Y=function(a){try{if(a==this.g)e:{const Nt=fr(this.g);var d=this.g.Ba();const Cs=this.g.Z();if(!(3>Nt)&&(Nt!=3||this.g&&(this.h.h||this.g.oa()||zm(this.g)))){this.J||Nt!=4||d==7||(d==8||0>=Cs?cr(3):cr(2)),Kn(this);var f=this.g.Z();this.X=f;t:if(Br(this)){var g=zm(this.g);a="";var M=g.length,j=fr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vn(this),Ct(this);var q="";break t}this.h.i=new l.TextDecoder}for(d=0;d<M;d++)this.h.h=!0,a+=this.h.i.decode(g[d],{stream:!(j&&d==M-1)});g.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,U(this.i,this.u,this.A,this.l,this.R,Nt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var be,_t=this.g;if((be=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(be)){var Re=be;break t}}Re=null}if(f=Re)G(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$r(this,f);else{this.o=!1,this.s=3,vt(12),vn(this),Ct(this);break e}}if(this.P){f=!0;let Mn;for(;!this.J&&this.C<q.length;)if(Mn=qn(this,q),Mn==we){Nt==4&&(this.s=4,vt(14),f=!1),G(this.i,this.l,null,"[Incomplete Response]");break}else if(Mn==Pe){this.s=4,vt(15),G(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else G(this.i,this.l,Mn,null),$r(this,Mn);if(Br(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Nt!=4||q.length!=0||this.h.h||(this.s=1,vt(16),f=!1),this.o=this.o&&f,!f)G(this.i,this.l,q,"[Invalid Chunked Response]"),vn(this),Ct(this);else if(0<q.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Id(xt),xt.M=!0,vt(11))}}else G(this.i,this.l,q,null),$r(this,q);Nt==4&&vn(this),this.o&&!this.J&&(Nt==4?Gm(this.j,this):(this.o=!1,On(this)))}else QI(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),vn(this),Ct(this)}}}catch{}finally{}};function Br(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function qn(a,d){var f=a.C,g=d.indexOf(`
`,f);return g==-1?we:(f=Number(d.substring(f,g)),isNaN(f)?Pe:(g+=1,g+f>d.length?we:(d=d.slice(g,g+f),a.C=g+f,d)))}pe.prototype.cancel=function(){this.J=!0,vn(this)};function On(a){a.S=Date.now()+a.I,dr(a,a.I)}function dr(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=x(m(a.ba,a),d)}function Kn(a){a.B&&(l.clearTimeout(a.B),a.B=null)}pe.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(X(this.i,this.A),this.L!=2&&(cr(),vt(17)),vn(this),this.s=2,Ct(this)):dr(this,this.S-a)};function Ct(a){a.j.G==0||a.J||Gm(a.j,a)}function vn(a){Kn(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,bo(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function $r(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||Ce(f.h,a))){if(!a.K&&Ce(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var M=g;if(M[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)zl(f),jl(f);else break e;Td(f),vt(18)}}else f.za=M[1],0<f.za-f.T&&37500>M[2]&&f.F&&f.v==0&&!f.C&&(f.C=x(m(f.Za,f),6e3));if(1>=kt(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Mi(f,11)}else if((a.K||f.g==a)&&zl(f),!_(d))for(M=f.Da.g.parse(d),d=0;d<M.length;d++){let Re=M[d];if(f.T=Re[0],Re=Re[1],f.G==2)if(Re[0]=="c"){f.K=Re[1],f.ia=Re[2];const xt=Re[3];xt!=null&&(f.la=xt,f.j.info("VER="+f.la));const Nt=Re[4];Nt!=null&&(f.Aa=Nt,f.j.info("SVER="+f.Aa));const Cs=Re[5];Cs!=null&&typeof Cs=="number"&&0<Cs&&(g=1.5*Cs,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Mn=a.g;if(Mn){const $l=Mn.g?Mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($l){var j=g.h;j.g||$l.indexOf("spdy")==-1&&$l.indexOf("quic")==-1&&$l.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(on(j,j.h),j.h=null))}if(g.D){const Sd=Mn.g?Mn.g.getResponseHeader("X-HTTP-Session-Id"):null;Sd&&(g.ya=Sd,Fe(g.I,g.D,Sd))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var q=a;if(g.qa=Xm(g,g.J?g.ia:null,g.W),q.K){Vo(g.h,q);var be=q,_t=g.L;_t&&(be.I=_t),be.B&&(Kn(be),On(be)),g.g=q}else qm(g);0<f.i.length&&Ul(f)}else Re[0]!="stop"&&Re[0]!="close"||Mi(f,7);else f.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Mi(f,7):Ed(f):Re[0]!="noop"&&f.l&&f.l.ta(Re),f.v=0)}}cr(4)}catch{}}var Rs=class{constructor(a,d){this.g=a,this.map=d}};function ce(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ve(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function kt(a){return a.h?1:a.g?a.g.size:0}function Ce(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function on(a,d){a.g?a.g.add(d):a.h=d}function Vo(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}ce.prototype.cancel=function(){if(this.i=bl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function bl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return k(a.i)}function OI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],f=a.length,g=0;g<f;g++)d.push(a[g]);return d}d=[],f=0;for(g in a)d[f++]=a[g];return d}function MI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const g in a)d[f++]=g;return d}}}function Cm(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=MI(a),g=OI(a),M=g.length,j=0;j<M;j++)d.call(void 0,g[j],f&&f[j],a)}var km=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LI(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),M=null;if(0<=g){var j=a[f].substring(0,g);M=a[f].substring(g+1)}else j=a[f];d(j,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Oi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Oi){this.h=a.h,Ol(this,a.j),this.o=a.o,this.g=a.g,Ml(this,a.s),this.l=a.l;var d=a.i,f=new Uo;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),xm(this,f),this.m=a.m}else a&&(d=String(a).match(km))?(this.h=!1,Ol(this,d[1]||"",!0),this.o=Fo(d[2]||""),this.g=Fo(d[3]||"",!0),Ml(this,d[4]),this.l=Fo(d[5]||"",!0),xm(this,d[6]||"",!0),this.m=Fo(d[7]||"")):(this.h=!1,this.i=new Uo(null,this.h))}Oi.prototype.toString=function(){var a=[],d=this.j;d&&a.push(jo(d,Nm,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(jo(d,Nm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(jo(f,f.charAt(0)=="/"?jI:FI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",jo(f,zI)),a.join("")};function hr(a){return new Oi(a)}function Ol(a,d,f){a.j=f?Fo(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ml(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function xm(a,d,f){d instanceof Uo?(a.i=d,BI(a.i,a.h)):(f||(d=jo(d,UI)),a.i=new Uo(d,a.h))}function Fe(a,d,f){a.i.set(d,f)}function Ll(a){return Fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Fo(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function jo(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,VI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function VI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Nm=/[#\/\?@]/g,FI=/[#\?:]/g,jI=/[#\?]/g,UI=/[#\?@]/g,zI=/#/g;function Uo(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Hr(a){a.g||(a.g=new Map,a.h=0,a.i&&LI(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=Uo.prototype,t.add=function(a,d){Hr(this),this.i=null,a=As(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Dm(a,d){Hr(a),d=As(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function bm(a,d){return Hr(a),d=As(a,d),a.g.has(d)}t.forEach=function(a,d){Hr(this),this.g.forEach(function(f,g){f.forEach(function(M){a.call(d,M,g,this)},this)},this)},t.na=function(){Hr(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let g=0;g<d.length;g++){const M=a[g];for(let j=0;j<M.length;j++)f.push(d[g])}return f},t.V=function(a){Hr(this);let d=[];if(typeof a=="string")bm(this,a)&&(d=d.concat(this.g.get(As(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return Hr(this),this.i=null,a=As(this,a),bm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Om(a,d,f){Dm(a,d),0<f.length&&(a.i=null,a.g.set(As(a,d),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var g=d[f];const j=encodeURIComponent(String(g)),q=this.V(g);for(g=0;g<q.length;g++){var M=j;q[g]!==""&&(M+="="+encodeURIComponent(String(q[g]))),a.push(M)}}return this.i=a.join("&")};function As(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function BI(a,d){d&&!a.j&&(Hr(a),a.i=null,a.g.forEach(function(f,g){var M=g.toLowerCase();g!=M&&(Dm(this,g),Om(this,M,f))},a)),a.j=d}function $I(a,d){const f=new D;if(l.Image){const g=new Image;g.onload=T(Wr,f,"TestLoadImage: loaded",!0,d,g),g.onerror=T(Wr,f,"TestLoadImage: error",!1,d,g),g.onabort=T(Wr,f,"TestLoadImage: abort",!1,d,g),g.ontimeout=T(Wr,f,"TestLoadImage: timeout",!1,d,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else d(!1)}function HI(a,d){const f=new D,g=new AbortController,M=setTimeout(()=>{g.abort(),Wr(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:g.signal}).then(j=>{clearTimeout(M),j.ok?Wr(f,"TestPingServer: ok",!0,d):Wr(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(M),Wr(f,"TestPingServer: error",!1,d)})}function Wr(a,d,f,g,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),g(f)}catch{}}function WI(){this.g=new _d}function qI(a,d,f){const g=f||"";try{Cm(a,function(M,j){let q=M;c(M)&&(q=Ts(M)),d.push(g+j+"="+encodeURIComponent(q))})}catch(M){throw d.push(g+"type="+encodeURIComponent("_badmap")),M}}function zo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(zo,Is),zo.prototype.g=function(){return new Vl(this.l,this.j)},zo.prototype.i=function(a){return function(){return a}}({});function Vl(a,d){at.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Vl,at),t=Vl.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,$o(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$o(this)),this.g&&(this.readyState=3,$o(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Bo(this):$o(this),this.readyState==3&&Mm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Bo(this))},t.Qa=function(a){this.g&&(this.response=a,Bo(this))},t.ga=function(){this.g&&Bo(this)};function Bo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,$o(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function $o(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Vl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Lm(a){let d="";return N(a,function(f,g){d+=g,d+=":",d+=f,d+=`\r
`}),d}function wd(a,d,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Lm(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Fe(a,d,f))}function Ye(a){at.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ye,at);var KI=/^https?$/i,GI=["POST","PUT"];t=Ye.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Z.g(),this.v=this.o?Ni(this.o):Ni(Z),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(j){Vm(this,j);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var M in g)f.set(M,g[M]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const j of g.keys())f.set(j,g.get(j));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(j=>j.toLowerCase()=="content-type"),M=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(GI,d,void 0))||g||M||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,q]of f)this.g.setRequestHeader(j,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Um(this),this.u=!0,this.g.send(a),this.u=!1}catch(j){Vm(this,j)}};function Vm(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Fm(a),Fl(a)}function Fm(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,lt(this,"complete"),lt(this,"abort"),Fl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fl(this,!0)),Ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?jm(this):this.bb())},t.bb=function(){jm(this)};function jm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fr(a)!=4||a.Z()!=2)){if(a.u&&fr(a)==4)yn(a.Ea,0,a);else if(lt(a,"readystatechange"),fr(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var g;if(g=q===0){var M=String(a.D).match(km)[1]||null;!M&&l.self&&l.self.location&&(M=l.self.location.protocol.slice(0,-1)),g=!KI.test(M?M.toLowerCase():"")}f=g}if(f)lt(a,"complete"),lt(a,"success");else{a.m=6;try{var j=2<fr(a)?a.g.statusText:""}catch{j=""}a.l=j+" ["+a.Z()+"]",Fm(a)}}finally{Fl(a)}}}}function Fl(a,d){if(a.g){Um(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||lt(a,"ready");try{f.onreadystatechange=g}catch{}}}function Um(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Nl(d)}};function zm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function QI(a){const d={};a=(a.g&&2<=fr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var f=P(a[g]);const M=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const j=d[M]||[];d[M]=j,j.push(f)}E(d,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ho(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function Bm(a){this.Aa=0,this.i=[],this.j=new D,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ho("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ho("baseRetryDelayMs",5e3,a),this.cb=Ho("retryDelaySeedMs",1e4,a),this.Wa=Ho("forwardChannelMaxRetries",2,a),this.wa=Ho("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ce(a&&a.concurrentRequestLimit),this.Da=new WI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Bm.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,g){vt(0),this.W=a,this.H=d||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Xm(this,null,this.W),Ul(this)};function Ed(a){if($m(a),a.G==3){var d=a.U++,f=hr(a.I);if(Fe(f,"SID",a.K),Fe(f,"RID",d),Fe(f,"TYPE","terminate"),Wo(a,f),d=new pe(a,a.j,d),d.L=2,d.v=Ll(hr(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=Jm(d.j,null),d.g.ea(d.v)),d.F=Date.now(),On(d)}Ym(a)}function jl(a){a.g&&(Id(a),a.g.cancel(),a.g=null)}function $m(a){jl(a),a.u&&(l.clearTimeout(a.u),a.u=null),zl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ul(a){if(!Ve(a.h)&&!a.s){a.s=!0;var d=a.Ga;Ie||ne(),K||(Ie(),K=!0),ee.add(d,a),a.B=0}}function YI(a,d){return kt(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=x(m(a.Ga,a,d),Qm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const M=new pe(this,this.j,a);let j=this.o;if(this.S&&(j?(j=y(j),R(j,this.S)):j=this.S),this.m!==null||this.O||(M.H=j,j=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Wm(this,M,d),f=hr(this.I),Fe(f,"RID",a),Fe(f,"CVER",22),this.D&&Fe(f,"X-HTTP-Session-Id",this.D),Wo(this,f),j&&(this.O?d="headers="+encodeURIComponent(String(Lm(j)))+"&"+d:this.m&&wd(f,this.m,j)),on(this.h,M),this.Ua&&Fe(f,"TYPE","init"),this.P?(Fe(f,"$req",d),Fe(f,"SID","null"),M.T=!0,Ze(M,f,null)):Ze(M,f,d),this.G=2}}else this.G==3&&(a?Hm(this,a):this.i.length==0||Ve(this.h)||Hm(this))};function Hm(a,d){var f;d?f=d.l:f=a.U++;const g=hr(a.I);Fe(g,"SID",a.K),Fe(g,"RID",f),Fe(g,"AID",a.T),Wo(a,g),a.m&&a.o&&wd(g,a.m,a.o),f=new pe(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Wm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),on(a.h,f),Ze(f,g,d)}function Wo(a,d){a.H&&N(a.H,function(f,g){Fe(d,g,f)}),a.l&&Cm({},function(f,g){Fe(d,g,f)})}function Wm(a,d,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var M=a.i;let j=-1;for(;;){const q=["count="+f];j==-1?0<f?(j=M[0].g,q.push("ofs="+j)):j=0:q.push("ofs="+j);let be=!0;for(let _t=0;_t<f;_t++){let Re=M[_t].g;const xt=M[_t].map;if(Re-=j,0>Re)j=Math.max(0,M[_t].g-100),be=!1;else try{qI(xt,q,"req"+Re+"_")}catch{g&&g(xt)}}if(be){g=q.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,g}function qm(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Ie||ne(),K||(Ie(),K=!0),ee.add(d,a),a.v=0}}function Td(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=x(m(a.Fa,a),Qm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Km(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=x(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),jl(this),Km(this))};function Id(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Km(a){a.g=new pe(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=hr(a.qa);Fe(d,"RID","rpc"),Fe(d,"SID",a.K),Fe(d,"AID",a.T),Fe(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Fe(d,"TO",a.ja),Fe(d,"TYPE","xmlhttp"),Wo(a,d),a.m&&a.o&&wd(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ll(hr(d)),f.m=null,f.P=!0,$e(f,a)}t.Za=function(){this.C!=null&&(this.C=null,jl(this),Td(this),vt(19))};function zl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Gm(a,d){var f=null;if(a.g==d){zl(a),Id(a),a.g=null;var g=2}else if(Ce(a.h,d))f=d.D,Vo(a.h,d),g=1;else return;if(a.G!=0){if(d.o)if(g==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var M=a.B;g=Ss(),lt(g,new Dl(g,f)),Ul(a)}else qm(a);else if(M=d.s,M==3||M==0&&0<d.X||!(g==1&&YI(a,d)||g==2&&Td(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),M){case 1:Mi(a,5);break;case 4:Mi(a,10);break;case 3:Mi(a,6);break;default:Mi(a,2)}}}function Qm(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function Mi(a,d){if(a.j.info("Error code "+d),d==2){var f=m(a.fb,a),g=a.Xa;const M=!g;g=new Oi(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ol(g,"https"),Ll(g),M?$I(g.toString(),f):HI(g.toString(),f)}else vt(2);a.G=0,a.l&&a.l.sa(d),Ym(a),$m(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Ym(a){if(a.G=0,a.ka=[],a.l){const d=bl(a.h);(d.length!=0||a.i.length!=0)&&(O(a.ka,d),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Xm(a,d,f){var g=f instanceof Oi?hr(f):new Oi(f);if(g.g!="")d&&(g.g=d+"."+g.g),Ml(g,g.s);else{var M=l.location;g=M.protocol,d=d?d+"."+M.hostname:M.hostname,M=+M.port;var j=new Oi(null);g&&Ol(j,g),d&&(j.g=d),M&&Ml(j,M),f&&(j.l=f),g=j}return f=a.D,d=a.ya,f&&d&&Fe(g,f,d),Fe(g,"VER",a.la),Wo(a,g),g}function Jm(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Ye(new zo({eb:f})):new Ye(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zm(){}t=Zm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Bl(){}Bl.prototype.g=function(a,d){return new an(a,d)};function an(a,d){at.call(this),this.g=new Bm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!_(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!_(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ps(this)}C(an,at),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){Ed(this.g)},an.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ts(a),a=f);d.i.push(new Rs(d.Ya++,a)),d.G==3&&Ul(d)},an.prototype.N=function(){this.g.l=null,delete this.j,Ed(this.g),delete this.g,an.aa.N.call(this)};function eg(a){zr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}C(eg,zr);function tg(){Di.call(this),this.status=1}C(tg,Di);function Ps(a){this.g=a}C(Ps,Zm),Ps.prototype.ua=function(){lt(this.g,"a")},Ps.prototype.ta=function(a){lt(this.g,new eg(a))},Ps.prototype.sa=function(a){lt(this.g,new tg)},Ps.prototype.ra=function(){lt(this.g,"b")},Bl.prototype.createWebChannel=Bl.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,aT=function(){return new Bl},oT=function(){return Ss()},sT=ur,yf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},W.NO_ERROR=0,W.TIMEOUT=8,W.HTTP_ERROR=6,ku=W,ae.COMPLETE="complete",iT=ae,Oo.EventType=lr,lr.OPEN="a",lr.CLOSE="b",lr.ERROR="c",lr.MESSAGE="d",at.prototype.listen=at.prototype.K,fa=Oo,rT=zo,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,nT=Ye}).apply(typeof lu<"u"?lu:typeof self<"u"?self:typeof window<"u"?window:{});const yv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new vl("@firebase/firestore");function ra(){return cs.logLevel}function Y(t,...e){if(cs.logLevel<=ge.DEBUG){const n=e.map(Xp);cs.debug(`Firestore (${Co}): ${t}`,...n)}}function xr(t,...e){if(cs.logLevel<=ge.ERROR){const n=e.map(Xp);cs.error(`Firestore (${Co}): ${t}`,...n)}}function po(t,...e){if(cs.logLevel<=ge.WARN){const n=e.map(Xp);cs.warn(`Firestore (${Co}): ${t}`,...n)}}function Xp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+t;throw xr(e),new Error(e)}function Le(t,e){t||oe()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Mt.UNAUTHENTICATED))}shutdown(){}}class CN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kN{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new pi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new lT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new Mt(e)}}class xN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class NN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new DN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ON(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function mo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ht(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new ht(0,0))}static max(){return new le(new ht(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return il.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof il?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Je extends il{construct(e,n,r){return new Je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Je(n)}static emptyPath(){return new Je([])}}const MN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends il{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return MN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new te($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new te($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new te($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new te($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Je.fromString(e))}static fromName(e){return new re(Je.fromString(e).popFirst(5))}static empty(){return new re(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Je(e.slice()))}}function LN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=le.fromTimestamp(r===1e9?new ht(n+1,0):new ht(n,r));return new _i(i,re.empty(),e)}function VN(t){return new _i(t.readTime,t.key,-1)}class _i{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _i(le.min(),re.empty(),-1)}static max(){return new _i(le.max(),re.empty(),-1)}}function FN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==jN)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++l,l===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function zN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Sl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Jp.oe=-1;function id(t){return t==null}function yc(t){return t===0&&1/t==-1/0}function BN(t){return typeof t=="number"&&Number.isInteger(t)&&!yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uu(this.root,e,this.comparator,!1)}getReverseIterator(){return new uu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uu(this.root,e,this.comparator,!0)}}class uu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Et.RED,this.left=i??Et.EMPTY,this.right=s??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _v(this.data.getIterator())}getIteratorFrom(e){return new _v(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new St(this.comparator);return n.data=e,n}}class _v{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new dn([])}unionWith(e){let n=new St(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dT("Invalid base64 string: "+s):s}}(e);return new Ut(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const $N=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(t){if(Le(!!t),typeof t=="string"){let e=0;const n=$N.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ds(t){return typeof t=="string"?Ut.fromBase64String(t):Ut.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function em(t){const e=t.mapValue.fields.__previous_value__;return Zp(e)?em(e):e}function sl(t){const e=wi(t.mapValue.fields.__local_write_time__.timestampValue);return new ht(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class ol{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ol("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ol&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zp(t)?4:WN(t)?9007199254740991:10:oe()}function ir(t,e){if(t===e)return!0;const n=hs(t);if(n!==hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sl(t).isEqual(sl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=wi(i.timestampValue),l=wi(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ds(i.bytesValue).isEqual(ds(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return it(i.geoPointValue.latitude)===it(s.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return it(i.integerValue)===it(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=it(i.doubleValue),l=it(s.doubleValue);return o===l?yc(o)===yc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return mo(t.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(vv(o)!==vv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!ir(o[u],l[u])))return!1;return!0}(t,e);default:return oe()}}function al(t,e){return(t.values||[]).find(n=>ir(n,e))!==void 0}function go(t,e){if(t===e)return 0;const n=hs(t),r=hs(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=it(s.integerValue||s.doubleValue),u=it(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return wv(t.timestampValue,e.timestampValue);case 4:return wv(sl(t),sl(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ds(s),u=ds(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=Ae(l[c],u[c]);if(h!==0)return h}return Ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Ae(it(s.latitude),it(o.latitude));return l!==0?l:Ae(it(s.longitude),it(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const h=go(l[c],u[c]);if(h)return h}return Ae(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===cu.mapValue&&o===cu.mapValue)return 0;if(s===cu.mapValue)return 1;if(o===cu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const m=Ae(u[p],h[p]);if(m!==0)return m;const T=go(l[u[p]],c[h[p]]);if(T!==0)return T}return Ae(u.length,h.length)}(t.mapValue,e.mapValue);default:throw oe()}}function wv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=wi(t),r=wi(e),i=Ae(n.seconds,r.seconds);return i!==0?i:Ae(n.nanos,r.nanos)}function yo(t){return vf(t)}function vf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ds(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=vf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${vf(n.fields[o])}`;return i+"}"}(t.mapValue):oe()}function _f(t){return!!t&&"integerValue"in t}function tm(t){return!!t&&"arrayValue"in t}function Ev(t){return!!t&&"nullValue"in t}function Tv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xu(t){return!!t&&"mapValue"in t}function ka(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ka(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ka(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ka(n)}setAll(e){let n=Tt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ka(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ms(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Yt(ka(this.value))}}function hT(t){const e=[];return ms(t.fields,(n,r)=>{const i=new Tt([n]);if(xu(r)){const s=hT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Vt(e,0,le.min(),le.min(),le.min(),Yt.empty(),0)}static newFoundDocument(e,n,r,i){return new Vt(e,1,n,le.min(),r,i,0)}static newNoDocument(e,n){return new Vt(e,2,n,le.min(),le.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,le.min(),le.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n){this.position=e,this.inclusive=n}}function Iv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=go(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ir(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n="asc"){this.field=e,this.dir=n}}function qN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{}class ct extends fT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new GN(e,n,r):n==="array-contains"?new XN(e,r):n==="in"?new JN(e,r):n==="not-in"?new ZN(e,r):n==="array-contains-any"?new eD(e,r):new ct(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new QN(e,r):new YN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(go(n,this.value)):n!==null&&hs(this.value)===hs(n)&&this.matchesComparison(go(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sr extends fT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new sr(e,n)}matches(e){return pT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pT(t){return t.op==="and"}function mT(t){return KN(t)&&pT(t)}function KN(t){for(const e of t.filters)if(e instanceof sr)return!1;return!0}function wf(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+yo(t.value);if(mT(t))return t.filters.map(e=>wf(e)).join(",");{const e=t.filters.map(n=>wf(n)).join(",");return`${t.op}(${e})`}}function gT(t,e){return t instanceof ct?function(r,i){return i instanceof ct&&r.op===i.op&&r.field.isEqual(i.field)&&ir(r.value,i.value)}(t,e):t instanceof sr?function(r,i){return i instanceof sr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&gT(o,i.filters[l]),!0):!1}(t,e):void oe()}function yT(t){return t instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${yo(n.value)}`}(t):t instanceof sr?function(n){return n.op.toString()+" {"+n.getFilters().map(yT).join(" ,")+"}"}(t):"Filter"}class GN extends ct{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class QN extends ct{constructor(e,n){super(e,"in",n),this.keys=vT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class YN extends ct{constructor(e,n){super(e,"not-in",n),this.keys=vT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class XN extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tm(n)&&al(n.arrayValue,this.value)}}class JN extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&al(this.value.arrayValue,n)}}class ZN extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!al(this.value.arrayValue,n)}}class eD extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>al(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Rv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new tD(t,e,n,r,i,s,o)}function nm(t){const e=ue(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),id(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yo(r)).join(",")),e.ue=n}return e.ue}function rm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sv(t.startAt,e.startAt)&&Sv(t.endAt,e.endAt)}function Ef(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nD(t,e,n,r,i,s,o,l){return new sd(t,e,n,r,i,s,o,l)}function od(t){return new sd(t)}function Av(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rD(t){return t.collectionGroup!==null}function xa(t){const e=ue(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new St(Tt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new _c(s,r))}),n.has(Tt.keyField().canonicalString())||e.ce.push(new _c(Tt.keyField(),r))}return e.ce}function er(t){const e=ue(t);return e.le||(e.le=iD(e,xa(t))),e.le}function iD(t,e){if(t.limitType==="F")return Rv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _c(i.field,s)});const n=t.endAt?new vc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vc(t.startAt.position,t.startAt.inclusive):null;return Rv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Tf(t,e,n){return new sd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ad(t,e){return rm(er(t),er(e))&&t.limitType===e.limitType}function _T(t){return`${nm(er(t))}|lt:${t.limitType}`}function Ns(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>yT(i)).join(", ")}]`),id(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>yo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>yo(i)).join(",")),`Target(${r})`}(er(t))}; limitType=${t.limitType})`}function ld(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):re.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of xa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Iv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,xa(r),i)||r.endAt&&!function(o,l,u){const c=Iv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,xa(r),i))}(t,e)}function sD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wT(t){return(e,n)=>{let r=!1;for(const i of xa(t)){const s=oD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function oD(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?go(u,c):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return cT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=new Ge(re.comparator);function Nr(){return aD}const ET=new Ge(re.comparator);function pa(...t){let e=ET;for(const n of t)e=e.insert(n.key,n);return e}function TT(t){let e=ET;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gi(){return Na()}function IT(){return Na()}function Na(){return new ko(t=>t.toString(),(t,e)=>t.isEqual(e))}const lD=new Ge(re.comparator),uD=new St(re.comparator);function ye(...t){let e=uD;for(const n of t)e=e.add(n);return e}const cD=new St(Ae);function dD(){return cD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yc(e)?"-0":e}}function RT(t){return{integerValue:""+t}}function hD(t,e){return BN(e)?RT(e):ST(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this._=void 0}}function fD(t,e,n){return t instanceof wc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zp(s)&&(s=em(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ll?PT(t,e):t instanceof ul?CT(t,e):function(i,s){const o=AT(i,s),l=Pv(o)+Pv(i.Pe);return _f(o)&&_f(i.Pe)?RT(l):ST(i.serializer,l)}(t,e)}function pD(t,e,n){return t instanceof ll?PT(t,e):t instanceof ul?CT(t,e):n}function AT(t,e){return t instanceof Ec?function(r){return _f(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class wc extends ud{}class ll extends ud{constructor(e){super(),this.elements=e}}function PT(t,e){const n=kT(e);for(const r of t.elements)n.some(i=>ir(i,r))||n.push(r);return{arrayValue:{values:n}}}class ul extends ud{constructor(e){super(),this.elements=e}}function CT(t,e){let n=kT(e);for(const r of t.elements)n=n.filter(i=>!ir(i,r));return{arrayValue:{values:n}}}class Ec extends ud{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Pv(t){return it(t.integerValue||t.doubleValue)}function kT(t){return tm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function mD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ll&&i instanceof ll||r instanceof ul&&i instanceof ul?mo(r.elements,i.elements,ir):r instanceof Ec&&i instanceof Ec?ir(r.Pe,i.Pe):r instanceof wc&&i instanceof wc}(t.transform,e.transform)}class gD{constructor(e,n){this.version=e,this.transformResults=n}}class tr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tr}static exists(e){return new tr(void 0,e)}static updateTime(e){return new tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cd{}function xT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new DT(t.key,tr.none()):new Rl(t.key,t.data,tr.none());{const n=t.data,r=Yt.empty();let i=new St(Tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ci(t.key,r,new dn(i.toArray()),tr.none())}}function yD(t,e,n){t instanceof Rl?function(i,s,o){const l=i.value.clone(),u=kv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ci?function(i,s,o){if(!Nu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=kv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(NT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Da(t,e,n,r){return t instanceof Rl?function(s,o,l,u){if(!Nu(s.precondition,o))return l;const c=s.value.clone(),h=xv(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ci?function(s,o,l,u){if(!Nu(s.precondition,o))return l;const c=xv(s.fieldTransforms,u,o),h=o.data;return h.setAll(NT(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Nu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function vD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=AT(r.transform,i||null);s!=null&&(n===null&&(n=Yt.empty()),n.set(r.field,s))}return n||null}function Cv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&mo(r,i,(s,o)=>mD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Rl extends cd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ci extends cd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function NT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kv(t,e,n){const r=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,pD(o,l,n[i]))}return r}function xv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,fD(s,o,e))}return r}class DT extends cd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _D extends cd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&yD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=IT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=xT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&mo(this.mutations,e.mutations,(n,r)=>Cv(n,r))&&mo(this.baseMutations,e.baseMutations,(n,r)=>Cv(n,r))}}class im{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Le(e.mutations.length===r.length);let i=function(){return lD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new im(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,Ee;function ID(t){switch(t){default:return oe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function bT(t){if(t===void 0)return xr("GRPC error has no .code"),$.UNKNOWN;switch(t){case nt.OK:return $.OK;case nt.CANCELLED:return $.CANCELLED;case nt.UNKNOWN:return $.UNKNOWN;case nt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case nt.INTERNAL:return $.INTERNAL;case nt.UNAVAILABLE:return $.UNAVAILABLE;case nt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case nt.NOT_FOUND:return $.NOT_FOUND;case nt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case nt.ABORTED:return $.ABORTED;case nt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case nt.DATA_LOSS:return $.DATA_LOSS;default:return oe()}}(Ee=nt||(nt={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD=new Xi([4294967295,4294967295],0);function Nv(t){const e=SD().encode(t),n=new tT;return n.update(e),new Uint8Array(n.digest())}function Dv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Xi([n,r],0),new Xi([i,s],0)]}class sm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ma(`Invalid padding: ${n}`);if(r<0)throw new ma(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ma(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ma(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Xi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Xi.fromNumber(r)));return i.compare(RD)===1&&(i=new Xi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Nv(e),[r,i]=Dv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new sm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Nv(e),[r,i]=Dv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Al.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dd(le.min(),i,new Ge(Ae),Nr(),ye())}}class Al{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Al(r,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class OT{constructor(e,n){this.targetId=e,this.me=n}}class MT{constructor(e,n,r=Ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class bv{constructor(){this.fe=0,this.ge=Mv(),this.pe=Ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ye(),n=ye(),r=ye();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:oe()}}),new Al(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Mv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class AD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Nr(),this.qe=Ov(),this.Qe=new Ge(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Ef(s))if(r===0){const o=new re(s.path);this.Ue(n,o,Vt.newNoDocument(o,le.min()))}else Le(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ds(r).toUint8Array()}catch(u){if(u instanceof dT)return po("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new sm(o,i,s)}catch(u){return po(u instanceof ma?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Ef(l.target)){const u=new re(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Vt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ye();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new dd(e,n,this.Qe,this.ke,r);return this.ke=Nr(),this.qe=Ov(),this.Qe=new Ge(Ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new bv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new St(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ov(){return new Ge(re.comparator)}function Mv(){return new Ge(re.comparator)}const PD={asc:"ASCENDING",desc:"DESCENDING"},CD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kD={and:"AND",or:"OR"};class xD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function If(t,e){return t.useProto3Json||id(e)?e:{value:e}}function Tc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function LT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ND(t,e){return Tc(t,e.toTimestamp())}function nr(t){return Le(!!t),le.fromTimestamp(function(n){const r=wi(n);return new ht(r.seconds,r.nanos)}(t))}function om(t,e){return Sf(t,e).canonicalString()}function Sf(t,e){const n=function(i){return new Je(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function VT(t){const e=Je.fromString(t);return Le(BT(e)),e}function Rf(t,e){return om(t.databaseId,e.path)}function ch(t,e){const n=VT(e);if(n.get(1)!==t.databaseId.projectId)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(jT(n))}function FT(t,e){return om(t.databaseId,e)}function DD(t){const e=VT(t);return e.length===4?Je.emptyPath():jT(e)}function Af(t){return new Je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jT(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lv(t,e,n){return{name:Rf(t,e),fields:n.value.mapValue.fields}}function bD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Le(h===void 0||typeof h=="string"),Ut.fromBase64String(h||"")):(Le(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Ut.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const h=c.code===void 0?$.UNKNOWN:bT(c.code);return new te(h,c.message||"")}(o);n=new MT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ch(t,r.document.name),s=nr(r.document.updateTime),o=r.document.createTime?nr(r.document.createTime):le.min(),l=new Yt({mapValue:{fields:r.document.fields}}),u=Vt.newFoundDocument(i,s,o,l),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Du(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ch(t,r.document),s=r.readTime?nr(r.readTime):le.min(),o=Vt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Du([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ch(t,r.document),s=r.removedTargetIds||[];n=new Du([],s,i,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new TD(i,s),l=r.targetId;n=new OT(l,o)}}return n}function OD(t,e){let n;if(e instanceof Rl)n={update:Lv(t,e.key,e.value)};else if(e instanceof DT)n={delete:Rf(t,e.key)};else if(e instanceof Ci)n={update:Lv(t,e.key,e.data),updateMask:$D(e.fieldMask)};else{if(!(e instanceof _D))return oe();n={verify:Rf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof wc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ll)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ul)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ec)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ND(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:oe()}(t,e.precondition)),n}function MD(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?nr(i.updateTime):nr(s);return o.isEqual(le.min())&&(o=nr(s)),new gD(o,i.transformResults||[])}(n,e))):[]}function LD(t,e){return{documents:[FT(t,e.path)]}}function VD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=FT(t,i);const s=function(c){if(c.length!==0)return zT(sr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Ds(m.field),direction:UD(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=If(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function FD(t){let e=DD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Le(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(p){const m=UT(p);return m instanceof sr&&mT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new _c(bs(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,id(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,T=p.values||[];return new vc(T,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,T=p.values||[];return new vc(T,m)}(n.endAt)),nD(e,i,o,s,l,"F",u,c)}function jD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function UT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=bs(n.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=bs(n.unaryFilter.field);return ct.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=bs(n.unaryFilter.field);return ct.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=bs(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(n){return ct.create(bs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sr.create(n.compositeFilter.filters.map(r=>UT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return oe()}}(n.compositeFilter.op))}(t):oe()}function UD(t){return PD[t]}function zD(t){return CD[t]}function BD(t){return kD[t]}function Ds(t){return{fieldPath:t.canonicalString()}}function bs(t){return Tt.fromServerFormat(t.fieldPath)}function zT(t){return t instanceof ct?function(n){if(n.op==="=="){if(Tv(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NAN"}};if(Ev(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Tv(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NAN"}};if(Ev(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ds(n.field),op:zD(n.op),value:n.value}}}(t):t instanceof sr?function(n){const r=n.getFilters().map(i=>zT(i));return r.length===1?r[0]:{compositeFilter:{op:BD(n.op),filters:r}}}(t):oe()}function $D(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function BT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,r,i,s=le.min(),o=le.min(),l=Ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.ct=e}}function WD(t){const e=FD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Tf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(){this._n=new KD}addToCollectionParentIndex(e,n){return this._n.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(_i.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(_i.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class KD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new St(Je.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new St(Je.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new vo(0)}static Ln(){return new vo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(){this.changes=new ko(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Da(r.mutation,i,dn.empty(),ht.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const i=Gi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=pa();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Gi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Nr();const o=Na(),l=function(){return Na()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ci)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Da(h.mutation,c,h.mutation.getFieldMask(),ht.now())):o.set(c.key,dn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return l.set(c,new QD(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Na();let i=new Ge((o,l)=>o-l),s=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||dn.empty();h=l.applyToLocalView(c,h),r.set(u,h);const p=(i.get(l.batchId)||ye()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,p=IT();h.forEach(m=>{if(!s.has(m)){const T=xT(n.get(m),r.get(m));T!==null&&p.set(m,T),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(Gi());let l=-1,u=s;return o.next(c=>B.forEach(c,(h,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(h)?B.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ye())).next(h=>({batchId:l,changes:TT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let i=pa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=pa();return this.indexManager.getCollectionParents(e,s).next(l=>B.forEach(l,u=>{const c=function(p,m){return new sd(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Vt.newInvalidDocument(h)))});let l=pa();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Da(h.mutation,c,dn.empty(),ht.now()),ld(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return B.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:nr(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:WD(i.bundledQuery),readTime:nr(i.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(){this.overlays=new Ge(re.comparator),this.hr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gi();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=Gi(),s=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ge((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Gi(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=Gi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=i)););return B.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ED(n,r));let s=this.hr.get(n);s===void 0&&(s=ye(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.Pr=new St(pt.Ir),this.Tr=new St(pt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new pt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new pt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new re(new Je([])),r=new pt(n,e),i=new pt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new re(new Je([])),r=new pt(n,e),i=new pt(n,e+1);let s=ye();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new pt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return re.comparator(e.key,n.key)||Ae(e.pr,n.pr)}static Er(e,n){return Ae(e.pr,n.pr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new St(pt.Ir)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new pt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new pt(n,0),i=new pt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const l=this.Sr(o.pr);s.push(l)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new St(Ae);return n.forEach(i=>{const s=new pt(i,0),o=new pt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],l=>{r=r.add(l.pr)})}),B.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;re.isDocumentKey(s)||(s=s.child(""));const o=new pt(new re(s),0);let l=new St(Ae);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.pr)),!0)},o),B.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return B.forEach(n.mutations,i=>{const s=new pt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new pt(n,0),i=this.wr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.vr=e,this.docs=function(){return new Ge(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let r=Nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Vt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Nr();const o=n.path,l=new re(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||FN(VN(h),r)<=0||(i.has(h.key)||ld(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){oe()}Fr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tb(this)}getSize(e){return B.resolve(this.size)}}class tb extends GD{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.persistence=e,this.Mr=new ko(n=>nm(n),rm),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Or=0,this.Nr=new am,this.targetCount=0,this.Lr=vo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),B.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new vo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.qn(n),B.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n){this.Br={},this.overlays={},this.kr=new Jp(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new nb(this),this.indexManager=new qD,this.remoteDocumentCache=function(i){return new eb(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new HD(n),this.$r=new XD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new ZD(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new ib(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return B.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class ib extends UN{constructor(e){super(),this.currentSequenceNumber=e}}class lm{constructor(e){this.persistence=e,this.zr=new am,this.jr=null}static Hr(e){return new lm(e)}get Jr(){if(this.jr)return this.jr;throw oe()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),B.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Jr,r=>{const i=re.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,le.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return B.or([()=>B.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ye(),i=ye();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new um(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return wP()?8:zN(At())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new sb;return this.Ji(e,n,o).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,n,o,l.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(ra()<=ge.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Ns(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),B.resolve()):(ra()<=ge.DEBUG&&Y("QueryEngine","Query:",Ns(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ra()<=ge.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Ns(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,er(n))):B.resolve())}ji(e,n){if(Av(n))return B.resolve(null);let r=er(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Tf(n,null,"F"),r=er(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ye(...s);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,l);return this.Xi(n,c,o,u.readTime)?this.ji(e,Tf(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return Av(n)||i.isEqual(le.min())?B.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?B.resolve(null):(ra()<=ge.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ns(n)),this.es(e,o,n,LN(i,-1)).next(l=>l))})}Zi(e,n){let r=new St(wT(e));return n.forEach((i,s)=>{ld(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return ra()<=ge.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Ns(n)),this.zi.getDocumentsMatchingQuery(e,n,_i.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ge(Ae),this.rs=new ko(s=>nm(s),rm),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YD(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function lb(t,e,n,r){return new ab(t,e,n,r)}async function $T(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ye();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:l}))})})}function ub(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const p=c.batch,m=p.keys();let T=B.resolve();return m.forEach(C=>{T=T.next(()=>h.getEntry(u,C)).next(k=>{const O=c.docVersions.get(C);Le(O!==null),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),h.addEntry(k)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ye();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function HT(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function cb(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];e.targetChanges.forEach((h,p)=>{const m=i.get(p);if(!m)return;l.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,p)));let T=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Ut.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):h.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(h.resumeToken,r)),i=i.insert(p,T),function(k,O,I){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,T,h)&&l.push(n.Qr.updateTargetData(s,T))});let u=Nr(),c=ye();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),l.push(db(s,o,e.documentUpdates).next(h=>{u=h.cs,c=h.ls})),!r.isEqual(le.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(p=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(h)}return B.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function db(t,e,n){let r=ye(),i=ye();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Nr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(le.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Y("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function hb(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fb(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new ii(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Pf(t,e,n){const r=ue(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sl(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Vv(t,e,n){const r=ue(t);let i=le.min(),s=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const p=ue(u),m=p.rs.get(h);return m!==void 0?B.resolve(p.ns.get(m)):p.Qr.getTargetData(c,h)}(r,o,er(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:le.min(),n?s:ye())).next(l=>(pb(r,sD(e),l),{documents:l,hs:s})))}function pb(t,e,n){let r=t.ss.get(e)||le.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Fv{constructor(){this.activeTargetIds=dD()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mb{constructor(){this.no=new Fv,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Fv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du=null;function dh(){return du===null?du=function(){return 268435456+Math.round(2147483648*Math.random())}():du++,"0x"+du.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="WebChannelConnection";class _b extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const l=dh(),u=this.vo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(h=>(Y("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw po("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",u,"request:",i),h})}xo(n,r,i,s,o,l){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Co}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=yb[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=dh();return new Promise((o,l)=>{const u=new nT;u.setWithCredentials(!0),u.listenOnce(iT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ku.NO_ERROR:const h=u.getResponseJson();Y(Ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case ku.TIMEOUT:Y(Ot,`RPC '${e}' ${s} timed out`),l(new te($.DEADLINE_EXCEEDED,"Request time out"));break;case ku.HTTP_ERROR:const p=u.getStatus();if(Y(Ot,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const C=function(O){const I=O.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(I)>=0?I:$.UNKNOWN}(T.status);l(new te(C,T.message))}else l(new te($.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new te($.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{Y(Ot,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Y(Ot,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=dh(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=aT(),l=oT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new rT({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");Y(Ot,`Creating RPC '${e}' stream ${i}: ${h}`,u);const p=o.createWebChannel(h,u);let m=!1,T=!1;const C=new vb({lo:O=>{T?Y(Ot,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(m||(Y(Ot,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),Y(Ot,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},ho:()=>p.close()}),k=(O,I,_)=>{O.listen(I,A=>{try{_(A)}catch(V){setTimeout(()=>{throw V},0)}})};return k(p,fa.EventType.OPEN,()=>{T||(Y(Ot,`RPC '${e}' stream ${i} transport opened.`),C.mo())}),k(p,fa.EventType.CLOSE,()=>{T||(T=!0,Y(Ot,`RPC '${e}' stream ${i} transport closed`),C.po())}),k(p,fa.EventType.ERROR,O=>{T||(T=!0,po(Ot,`RPC '${e}' stream ${i} transport errored:`,O),C.po(new te($.UNAVAILABLE,"The operation could not be completed")))}),k(p,fa.EventType.MESSAGE,O=>{var I;if(!T){const _=O.data[0];Le(!!_);const A=_,V=A.error||((I=A[0])===null||I===void 0?void 0:I.error);if(V){Y(Ot,`RPC '${e}' stream ${i} received error:`,V);const z=V.status;let N=function(v){const R=nt[v];if(R!==void 0)return bT(R)}(z),E=V.message;N===void 0&&(N=$.INTERNAL,E="Unknown error status: "+z+" with message "+V.message),T=!0,C.po(new te(N,E)),p.close()}else Y(Ot,`RPC '${e}' stream ${i} received:`,_),C.yo(_)}}),k(l,sT.STAT_EVENT,O=>{O.stat===yf.PROXY?Y(Ot,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===yf.NOPROXY&&Y(Ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function hh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t){return new xD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n,r,i,s,o,l,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new WT(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(xr(n.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new te($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wb extends qT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=bD(this.serializer,e),r=function(s){if(!("targetChange"in s))return le.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?nr(o.readTime):le.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Af(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Ef(u)?{documents:LD(s,u)}:{query:VD(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=LT(s,o.resumeToken);const c=If(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(le.min())>0){l.readTime=Tc(s,o.snapshotVersion.toTimestamp());const c=If(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=jD(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Af(this.serializer),n.removeTarget=e,this.i_(n)}}class Eb extends qT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=MD(e.writeResults,e.commitTime),r=nr(e.commitTime);return this.listener.A_(r,n)}return Le(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Af(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>OD(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Sf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new te($.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,Sf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te($.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Ib{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(xr(n),this.y_=!1):Y("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{gs(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ue(u);c.M_.add(4),await Pl(c),c.N_.set("Unknown"),c.M_.delete(4),await fd(c)}(this))})}),this.N_=new Ib(r,i)}}async function fd(t){if(gs(t))for(const e of t.x_)await e(!0)}async function Pl(t){for(const e of t.x_)await e(!1)}function KT(t,e){const n=ue(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),fm(n)?hm(n):xo(n).Xo()&&dm(n,e))}function cm(t,e){const n=ue(t),r=xo(n);n.F_.delete(e),r.Xo()&&GT(n,e),n.F_.size===0&&(r.Xo()?r.n_():gs(n)&&n.N_.set("Unknown"))}function dm(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xo(t).P_(e)}function GT(t,e){t.L_.xe(e),xo(t).I_(e)}function hm(t){t.L_=new AD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),xo(t).start(),t.N_.w_()}function fm(t){return gs(t)&&!xo(t).Zo()&&t.F_.size>0}function gs(t){return ue(t).M_.size===0}function QT(t){t.L_=void 0}async function Rb(t){t.N_.set("Online")}async function Ab(t){t.F_.forEach((e,n)=>{dm(t,e)})}async function Pb(t,e){QT(t),fm(t)?(t.N_.D_(e),hm(t)):t.N_.set("Unknown")}async function Cb(t,e,n){if(t.N_.set("Online"),e instanceof MT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.F_.delete(l),i.L_.removeTarget(l))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ic(t,r)}else if(e instanceof Du?t.L_.Ke(e):e instanceof OT?t.L_.He(e):t.L_.We(e),!n.isEqual(le.min()))try{const r=await HT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.L_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const h=s.F_.get(u);if(!h)return;s.F_.set(u,h.withResumeToken(Ut.EMPTY_BYTE_STRING,h.snapshotVersion)),GT(s,u);const p=new ii(h.target,u,c,h.sequenceNumber);dm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await Ic(t,r)}}async function Ic(t,e,n){if(!Sl(e))throw e;t.M_.add(1),await Pl(t),t.N_.set("Offline"),n||(n=()=>HT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await fd(t)})}function YT(t,e){return e().catch(n=>Ic(t,n,e))}async function pd(t){const e=ue(t),n=Ei(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;kb(e);)try{const i=await hb(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,xb(e,i)}catch(i){await Ic(e,i)}XT(e)&&JT(e)}function kb(t){return gs(t)&&t.v_.length<10}function xb(t,e){t.v_.push(e);const n=Ei(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function XT(t){return gs(t)&&!Ei(t).Zo()&&t.v_.length>0}function JT(t){Ei(t).start()}async function Nb(t){Ei(t).V_()}async function Db(t){const e=Ei(t);for(const n of t.v_)e.d_(n.mutations)}async function bb(t,e,n){const r=t.v_.shift(),i=im.from(r,e,n);await YT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await pd(t)}async function Ob(t,e){e&&Ei(t).E_&&await async function(r,i){if(function(o){return ID(o)&&o!==$.ABORTED}(i.code)){const s=r.v_.shift();Ei(r).t_(),await YT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await pd(r)}}(t,e),XT(t)&&JT(t)}async function Uv(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=gs(n);n.M_.add(3),await Pl(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await fd(n)}async function Mb(t,e){const n=ue(t);e?(n.M_.delete(2),await fd(n)):e||(n.M_.add(2),await Pl(n),n.N_.set("Unknown"))}function xo(t){return t.B_||(t.B_=function(n,r,i){const s=ue(n);return s.f_(),new wb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:Rb.bind(null,t),To:Ab.bind(null,t),Ao:Pb.bind(null,t),h_:Cb.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),fm(t)?hm(t):t.N_.set("Unknown")):(await t.B_.stop(),QT(t))})),t.B_}function Ei(t){return t.k_||(t.k_=function(n,r,i){const s=ue(n);return s.f_(),new Eb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:Nb.bind(null,t),Ao:Ob.bind(null,t),R_:Db.bind(null,t),A_:bb.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await pd(t)):(await t.k_.stop(),t.v_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new pm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mm(t,e){if(xr("AsyncQueue",`${e}: ${t}`),Sl(t))return new te($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=pa(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new to(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof to)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new to;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(){this.q_=new Ge(re.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):oe():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class _o{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new _o(e,n,to.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ad(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class Vb{constructor(){this.queries=new ko(e=>_T(e),ad),this.onlineState="Unknown",this.z_=new Set}}async function ZT(t,e){const n=ue(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new Lb,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=mm(o,`Initialization of query '${Ns(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&gm(n)}async function eI(t,e){const n=ue(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Fb(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.U_)l.H_(i)&&(r=!0);o.K_=i}}r&&gm(n)}function jb(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function gm(t){t.z_.forEach(e=>{e.next()})}var Cf,Bv;(Bv=Cf||(Cf={})).J_="default",Bv.Cache="cache";class tI{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _o(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=_o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Cf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.key=e}}class rI{constructor(e){this.key=e}}class Ub{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ye(),this.mutatedKeys=ye(),this.Ia=wT(e),this.Ta=new to(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new zv,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const m=i.get(h),T=ld(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),k=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let O=!1;m&&T?m.data.isEqual(T.data)?C!==k&&(r.track({type:3,doc:T}),O=!0):this.Ra(m,T)||(r.track({type:2,doc:T}),O=!0,(u&&this.Ia(T,u)>0||c&&this.Ia(T,c)<0)&&(l=!0)):!m&&T?(r.track({type:0,doc:T}),O=!0):m&&!T&&(r.track({type:1,doc:m}),O=!0,(u||c)&&(l=!0)),O&&(T?(o=o.add(T),s=k?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,p)=>function(T,C){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return k(T)-k(C)}(h.type,p.type)||this.Ia(h.doc,p.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new _o(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new zv,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ye(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new rI(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new nI(r))}),n}pa(e){this.la=e.hs,this.Pa=ye();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return _o.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class zb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Bb{constructor(e){this.key=e,this.wa=!1}}class $b{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ko(l=>_T(l),ad),this.Da=new Map,this.Ca=new Set,this.va=new Ge(re.comparator),this.Fa=new Map,this.Ma=new am,this.xa={},this.Oa=new Map,this.Na=vo.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Hb(t,e,n=!0){const r=uI(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await iI(r,e,n,!0),i}async function Wb(t,e){const n=uI(t);await iI(n,e,!0,!1)}async function iI(t,e,n,r){const i=await fb(t.localStore,er(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await qb(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&KT(t.remoteStore,i),l}async function qb(t,e,n,r,i){t.Ba=(p,m,T)=>async function(k,O,I,_){let A=O.view.da(I);A.Xi&&(A=await Vv(k.localStore,O.query,!1).then(({documents:E})=>O.view.da(E,A)));const V=_&&_.targetChanges.get(O.targetId),z=_&&_.targetMismatches.get(O.targetId)!=null,N=O.view.applyChanges(A,k.isPrimaryClient,V,z);return Hv(k,O.targetId,N.fa),N.snapshot}(t,p,m,T);const s=await Vv(t.localStore,e,!0),o=new Ub(e,s.hs),l=o.da(s.documents),u=Al.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Hv(t,n,c.fa);const h=new zb(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function Kb(t,e,n){const r=ue(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!ad(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Pf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&cm(r.remoteStore,i.targetId),kf(r,i.targetId)}).catch(Il)):(kf(r,i.targetId),await Pf(r.localStore,i.targetId,!0))}async function Gb(t,e){const n=ue(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cm(n.remoteStore,r.targetId))}async function Qb(t,e,n){const r=nO(t);try{const i=await function(o,l){const u=ue(o),c=ht.now(),h=l.reduce((T,C)=>T.add(C.key),ye());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let C=Nr(),k=ye();return u.os.getEntries(T,h).next(O=>{C=O,C.forEach((I,_)=>{_.isValidDocument()||(k=k.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,C)).next(O=>{p=O;const I=[];for(const _ of l){const A=vD(_,p.get(_.key).overlayedDocument);A!=null&&I.push(new Ci(_.key,A,hT(A.value.mapValue),tr.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,I,l)}).next(O=>{m=O;const I=O.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(T,O.batchId,I)})}).then(()=>({batchId:m.batchId,changes:TT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Ge(Ae)),c=c.insert(l,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Cl(r,i.changes),await pd(r.remoteStore)}catch(i){const s=mm(i,"Failed to persist write");n.reject(s)}}async function sI(t,e){const n=ue(t);try{const r=await cb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Le(o.wa):i.removedDocuments.size>0&&(Le(o.wa),o.wa=!1))}),await Cl(n,r,e)}catch(r){await Il(r)}}function $v(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ue(o);u.onlineState=l;let c=!1;u.queries.forEach((h,p)=>{for(const m of p.U_)m.j_(l)&&(c=!0)}),c&&gm(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Yb(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Ge(re.comparator);o=o.insert(s,Vt.newNoDocument(s,le.min()));const l=ye().add(s),u=new dd(le.min(),new Map,new Ge(Ae),o,l);await sI(r,u),r.va=r.va.remove(s),r.Fa.delete(e),ym(r)}else await Pf(r.localStore,e,!1).then(()=>kf(r,e,n)).catch(Il)}async function Xb(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await ub(n.localStore,e);aI(n,r,null),oI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cl(n,i)}catch(i){await Il(i)}}async function Jb(t,e,n){const r=ue(t);try{const i=await function(o,l){const u=ue(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(Le(p!==null),h=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);aI(r,e,n),oI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Cl(r,i)}catch(i){await Il(i)}}function oI(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function aI(t,e,n){const r=ue(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function kf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||lI(t,r)})}function lI(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(cm(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),ym(t))}function Hv(t,e,n){for(const r of n)r instanceof nI?(t.Ma.addReference(r.key,e),Zb(t,r)):r instanceof rI?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||lI(t,r.key)):oe()}function Zb(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.Ca.add(r),ym(t))}function ym(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new re(Je.fromString(e)),r=t.Na.next();t.Fa.set(r,new Bb(n)),t.va=t.va.insert(n,r),KT(t.remoteStore,new ii(er(od(n.path)),r,"TargetPurposeLimboResolution",Jp.oe))}}async function Cl(t,e,n){const r=ue(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{o.push(r.Ba(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=um.Ki(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const h=ue(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(c,m=>B.forEach(m.qi,T=>h.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>B.forEach(m.Qi,T=>h.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!Sl(p))throw p;Y("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const T=h.ns.get(m),C=T.snapshotVersion,k=T.withLastLimboFreeSnapshotVersion(C);h.ns=h.ns.insert(m,k)}}}(r.localStore,s))}async function eO(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await $T(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(l=>{l.forEach(u=>{u.reject(new te($.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cl(n,r.us)}}function tO(t,e){const n=ue(t),r=n.Fa.get(e);if(r&&r.wa)return ye().add(r.key);{let i=ye();const s=n.Da.get(e);if(!s)return i;for(const o of s){const l=n.ba.get(o);i=i.unionWith(l.view.Ea)}return i}}function uI(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Yb.bind(null,e),e.Sa.h_=Fb.bind(null,e.eventManager),e.Sa.ka=jb.bind(null,e.eventManager),e}function nO(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Jb.bind(null,e),e}class Wv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=hd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return lb(this.persistence,new ob,e.initialUser,this.serializer)}createPersistence(e){return new rb(lm.Hr,this.serializer)}createSharedClientState(e){return new mb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$v(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eO.bind(null,this.syncEngine),await Mb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Vb}()}createDatastore(e){const n=hd(e.databaseInfo.databaseId),r=function(s){return new _b(s)}(e.databaseInfo);return function(s,o,l,u){return new Tb(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Sb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>$v(this.syncEngine,n,0),function(){return jv.D()?new jv:new gb}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,h){const p=new $b(i,s,o,l,u,c);return h&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=ue(r);Y("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Pl(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Mt.UNAUTHENTICATED,this.clientId=uT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fh(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $T(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oO(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Uv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Uv(e.remoteStore,i)),t._onlineComponents=e}function sO(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function oO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await fh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!sO(n))throw n;po("Error using user provided cache. Falling back to memory cache: "+n),await fh(t,new Wv)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await fh(t,new Wv);return t._offlineComponents}async function dI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await qv(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await qv(t,new rO))),t._onlineComponents}function aO(t){return dI(t).then(e=>e.syncEngine)}async function xf(t){const e=await dI(t),n=e.eventManager;return n.onListen=Hb.bind(null,e.syncEngine),n.onUnlisten=Kb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Wb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Gb.bind(null,e.syncEngine),n}function lO(t,e,n={}){const r=new pi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new cI({next:m=>{o.enqueueAndForget(()=>eI(s,p));const T=m.docs.has(l);!T&&m.fromCache?c.reject(new te($.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&u&&u.source==="server"?c.reject(new te($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new tI(od(l.path),h,{includeMetadataChanges:!0,ra:!0});return ZT(s,p)}(await xf(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t,e,n){if(!n)throw new te($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cO(t,e,n,r){if(e===!0&&r===!0)throw new te($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gv(t){if(!re.isDocumentKey(t))throw new te($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function rr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vm(t);throw new te($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _m{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new te($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new te($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PN;switch(r.type){case"firstParty":return new NN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kv.get(n);r&&(Y("ComponentProvider","Removing Datastore"),Kv.delete(n),r.terminate())}(this),Promise.resolve()}}function dO(t,e,n,r={}){var i;const s=(t=rr(t,_m))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&po("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Mt.MOCK_USER;else{l=mP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new te($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Mt(c)}t._authCredentials=new CN(new lT(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new md(this.firestore,e,this._query)}}class nn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nn(this.firestore,e,this._key)}}class cl extends md{constructor(e,n,r){super(e,n,od(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nn(this.firestore,null,new re(e))}withConverter(e){return new cl(this.firestore,e,this._path)}}function ys(t,e,...n){if(t=ft(t),arguments.length===1&&(e=uT.newId()),uO("doc","path",e),t instanceof _m){const r=Je.fromString(e,...n);return Gv(r),new nn(t,null,new re(r))}{if(!(t instanceof nn||t instanceof cl))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Je.fromString(e,...n));return Gv(r),new nn(t.firestore,t instanceof cl?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new WT(this,"async_queue_retry"),this.hu=()=>{const n=hh();n&&Y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=hh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=hh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new pi;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Sl(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw xr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=pm.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&oe()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Yv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class wo extends _m{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new hO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fI(this),this._firestoreClient.terminate()}}function fO(t,e){const n=typeof t=="object"?t:Xc(),r=typeof t=="string"?t:"(default)",i=Mr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=fP("firestore");s&&dO(i,...s)}return i}function wm(t){return t._firestoreClient||fI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fI(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,h){return new HN(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,hI(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new iO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Eo(Ut.fromBase64String(e))}catch(n){throw new te($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Eo(Ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=/^__.*__$/;class mO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ci(e,this.data,this.fieldMask,n,this.fieldTransforms):new Rl(e,this.data,n,this.fieldTransforms)}}class pI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ci(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class Im{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Im(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Sc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(mI(this.fu)&&pO.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class gO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hd(e)}Fu(e,n,r,i=!1){return new Im({fu:e,methodName:n,vu:r,path:Tt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gI(t){const e=t._freezeSettings(),n=hd(t._databaseId);return new gO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yO(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Sm("Data must be an object, but it was:",o,r);const l=yI(r,o);let u,c;if(s.merge)u=new dn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const m=Nf(e,p,n);if(!o.contains(m))throw new te($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);_I(h,m)||h.push(m)}u=new dn(h),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new mO(new Yt(l),u,c)}class kl extends Em{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kl}}function vO(t,e,n,r){const i=t.Fu(1,e,n);Sm("Data must be an object, but it was:",i,r);const s=[],o=Yt.empty();ms(r,(u,c)=>{const h=Rm(e,u,n);c=ft(c);const p=i.Su(h);if(c instanceof kl)s.push(h);else{const m=yd(c,p);m!=null&&(s.push(h),o.set(h,m))}});const l=new dn(s);return new pI(o,l,i.fieldTransforms)}function _O(t,e,n,r,i,s){const o=t.Fu(1,e,n),l=[Nf(e,r,n)],u=[i];if(s.length%2!=0)throw new te($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Nf(e,s[m])),u.push(s[m+1]);const c=[],h=Yt.empty();for(let m=l.length-1;m>=0;--m)if(!_I(c,l[m])){const T=l[m];let C=u[m];C=ft(C);const k=o.Su(T);if(C instanceof kl)c.push(T);else{const O=yd(C,k);O!=null&&(c.push(T),h.set(T,O))}}const p=new dn(c);return new pI(h,p,o.fieldTransforms)}function yd(t,e){if(vI(t=ft(t)))return Sm("Unsupported field value:",e,t),yI(t,e);if(t instanceof Em)return function(r,i){if(!mI(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=yd(l,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ht.fromDate(r);return{timestampValue:Tc(i.serializer,s)}}if(r instanceof ht){const s=new ht(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tc(i.serializer,s)}}if(r instanceof Tm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Eo)return{bytesValue:LT(i.serializer,r._byteString)};if(r instanceof nn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:om(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${vm(r)}`)}(t,e)}function yI(t,e){const n={};return cT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,(r,i)=>{const s=yd(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function vI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ht||t instanceof Tm||t instanceof Eo||t instanceof nn||t instanceof Em)}function Sm(t,e,n){if(!vI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=vm(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Nf(t,e,n){if((e=ft(e))instanceof gd)return e._internalPath;if(typeof e=="string")return Rm(t,e);throw Sc("Field path arguments must be of type string or ",t,!1,void 0,n)}const wO=new RegExp("[~\\*/\\[\\]]");function Rm(t,e,n){if(e.search(wO)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gd(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new te($.INVALID_ARGUMENT,l+t+u)}function _I(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(EI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EO extends wI{data(){return super.data()}}function EI(t,e){return typeof e=="string"?Rm(t,e):e instanceof gd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class IO{convertValue(e,n="none"){switch(hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Tm(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=em(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(sl(e));default:return null}}convertTimestamp(e){const n=wi(e);return new ht(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Je.fromString(e);Le(BT(r));const i=new ol(r.get(1),r.get(3)),s=new re(r.popFirst(5));return i.isEqual(n)||xr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class TI extends wI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(EI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bu extends TI{data(e={}){return super.data(e)}}class RO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ga(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bu(this._firestore,this._userDataWriter,r.key,r,new ga(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new bu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ga(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new bu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ga(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:AO(l.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(t){t=rr(t,nn);const e=rr(t.firestore,wo);return lO(wm(e),t._key).then(n=>PI(e,t,n))}class II extends IO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Eo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nn(this.firestore,null,n)}}function SI(t,e,n){t=rr(t,nn);const r=rr(t.firestore,wo),i=SO(t.converter,e,n);return AI(r,[yO(gI(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,tr.none())])}function Am(t,e,n,...r){t=rr(t,nn);const i=rr(t.firestore,wo),s=gI(i);let o;return o=typeof(e=ft(e))=="string"||e instanceof gd?_O(s,"updateDoc",t._key,e,n,r):vO(s,"updateDoc",t._key,e),AI(i,[o.toMutation(t._key,tr.exists(!0))])}function RI(t,...e){var n,r,i;t=ft(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Yv(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Yv(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,h;if(t instanceof nn)c=rr(t.firestore,wo),h=od(t._key.path),u={next:p=>{e[o]&&e[o](PI(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=rr(t,md);c=rr(p.firestore,wo),h=p._query;const m=new II(c);u={next:T=>{e[o]&&e[o](new RO(c,m,p,T))},error:e[o+1],complete:e[o+2]},TO(t._query)}return function(m,T,C,k){const O=new cI(k),I=new tI(T,O,C);return m.asyncQueue.enqueueAndForget(async()=>ZT(await xf(m),I)),()=>{O.$a(),m.asyncQueue.enqueueAndForget(async()=>eI(await xf(m),I))}}(wm(c),h,l,u)}function AI(t,e){return function(r,i){const s=new pi;return r.asyncQueue.enqueueAndForget(async()=>Qb(await aO(r),i,s)),s.promise}(wm(t),e)}function PI(t,e,n){const r=n.docs.get(e._key),i=new II(t);return new TI(t,i,e._key,r,new ga(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CO(){return new kl("deleteField")}(function(e,n=!0){(function(i){Co=i})(Pi),Cn(new Pn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new wo(new kN(r.getProvider("auth-internal")),new bN(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new te($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ol(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ft(yv,"4.6.4",e),Ft(yv,"4.6.4","esm2017")})();var Li={BASE_URL:"/Timelines",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const kO={apiKey:Li.VITE_FIREBASE_API_KEY,authDomain:Li.VITE_FIREBASE_AUTH_DOMAIN,projectId:Li.VITE_FIREBASE_PROJECT_ID,storageBucket:Li.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:Li.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:Li.VITE_FIREBASE_APP_ID,measurementId:Li.VITE_FIREBASE_MEASUREMENT_ID},Pm=Yc(kO);ik(Pm);const No=RN(Pm),vs=fO(Pm),CI=Pc.createContext();function vd(){return F.useContext(CI)}function xO({children:t}){const[e,n]=F.useState(null),[r,i]=F.useState(!1),[s,o]=F.useState(!1),[l,u]=F.useState(!1),[c,h]=F.useState(!0);F.useEffect(()=>hx(No,p),[]);async function p(T){if(T){n({...T});const C=T.providerData.some(k=>k.providerId==="password");o(C),i(!0)}else n(null),i(!1);h(!1)}const m={userLoggedIn:r,isEmailUser:s,isGoogleUser:l,currentUser:e,setCurrentUser:n};return w.jsx(CI.Provider,{value:m,children:!c&&t})}function NO(){const{userLoggedIn:t}=vd();return t?w.jsx(Kc,{to:"/Timelines/app"}):w.jsx(w.Fragment,{children:w.jsxs("div",{className:"main",children:[w.jsx(rP,{}),w.jsx("div",{className:"content",children:"Dashboard"}),w.jsx(iP,{})]})})}const DO="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-home'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M5%2012l-2%200l9%20-9l9%209l-2%200'%20/%3e%3cpath%20d='M5%2012v7a2%202%200%200%200%202%202h10a2%202%200%200%200%202%20-2v-7'%20/%3e%3cpath%20d='M9%2021v-6a2%202%200%200%201%202%20-2h2a2%202%200%200%201%202%202v6'%20/%3e%3c/svg%3e";function kI({children:t}){return w.jsx(w.Fragment,{children:w.jsx("div",{className:"app-header",children:t})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n){this._delegate=e,this.firebase=n,el(e,new Pn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Op(this._delegate)))}_getService(e,n=yi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=yi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){el(this._delegate,e)}_addOrOverwriteComponent(e){Gw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Xv=new Or("app-compat","Firebase",OO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Ft,setLogLevel:Jw,onLog:Xw,apps:null,SDK_VERSION:Pi,INTERNAL:{registerComponent:l,removeApp:r,useAsService:u,modularAPIs:UC}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||yi,!Oy(e,c))throw Xv.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,h={}){const p=Yc(c,h);if(Oy(e,p.name))return e[p.name];const m=new t(p,n);return e[p.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function l(c){const h=c.name,p=h.replace("-compat","");if(Cn(c)&&c.type==="PUBLIC"){const m=(T=i())=>{if(typeof T[p]!="function")throw Xv.create("invalid-app-argument",{appName:h});return T[p]()};c.serviceProps!==void 0&&ac(m,c.serviceProps),n[p]=m,t.prototype[p]=function(...T){return this._getService.bind(this,h).apply(this,c.multipleInstances?T:[])}}return c.type==="PUBLIC"?n[p]:null}function u(c,h){return h==="serverAuth"?null:h}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(){const t=MO(bO);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:xI,extendNamespace:e,createSubscribe:Bw,ErrorFactory:Or,deepExtend:ac});function e(n){ac(t,n)}return t}const LO=xI();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=new vl("@firebase/app-compat"),VO="@firebase/app-compat",FO="0.2.36";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(t){Ft(VO,FO,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Vw()&&self.firebase!==void 0){Jv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Jv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const UO=LO;jO();var zO="firebase",BO="10.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */UO.registerVersion(zO,BO,"app-compat");const $O=(t,e)=>{t.strokeStyle="#555555",t.lineWidth=2;const n=0;t.beginPath(),t.moveTo(0,n),t.lineTo(e,n),t.stroke()},Zv=(t,e,n)=>{t.strokeStyle="#555555",t.lineWidth=2,t.beginPath(),t.moveTo(e,-5),t.lineTo(e,5),t.stroke(),t.beginPath(),t.moveTo(e,0),t.lineTo(e+n,0),t.stroke()},e0=(t,e,n,r,i=!1)=>{const c=`${e.getDate()}-${e.getMonth()+1}-${e.getFullYear()}`;t.font="12px 'Source Sans 3'";const p=t.measureText(c).width+2*7,m=20;i?n=r+10:n=0-p-10,t.fillStyle="white",t.beginPath(),t.moveTo(n+5,-10),t.lineTo(n+p-5,-10),t.arc(n+p-5,-5,5,-Math.PI/2,0),t.lineTo(n+p,-10+m-5),t.arc(n+p-5,-10+m-5,5,0,Math.PI/2),t.lineTo(n+5,-10+m),t.arc(n+5,-10+m-5,5,Math.PI/2,Math.PI),t.lineTo(n,-5),t.arc(n+5,-5,5,Math.PI,1.5*Math.PI),t.closePath(),t.fill(),t.fillStyle="black";const T=n+7;t.fillText(c,T,4)},HO=(t,e,n=!1,r)=>{t.fillStyle=n?"blue":"red",t.beginPath(),t.arc(r,0,5,0,2*Math.PI),t.fill()},WO="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-edit'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M7%207h-1a2%202%200%200%200%20-2%202v9a2%202%200%200%200%202%202h9a2%202%200%200%200%202%20-2v-1'%20/%3e%3cpath%20d='M20.385%206.585a2.1%202.1%200%200%200%20-2.97%20-2.97l-8.415%208.385v3h3l8.385%20-8.415z'%20/%3e%3cpath%20d='M16%205l3%203'%20/%3e%3c/svg%3e",NI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-plus'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M12%205l0%2014'%20/%3e%3cpath%20d='M5%2012l14%200'%20/%3e%3c/svg%3e",qO="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-pin'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M15%204.5l-4%204l-4%201.5l-1.5%201.5l7%207l1.5%20-1.5l1.5%20-4l4%20-4'%20/%3e%3cpath%20d='M9%2015l-4.5%204.5'%20/%3e%3cpath%20d='M14.5%204l5.5%205.5'%20/%3e%3c/svg%3e",no="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-calendar-event'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M4%205m0%202a2%202%200%200%201%202%20-2h12a2%202%200%200%201%202%202v12a2%202%200%200%201%20-2%202h-12a2%202%200%200%201%20-2%20-2z'%20/%3e%3cpath%20d='M16%203l0%204'%20/%3e%3cpath%20d='M8%203l0%204'%20/%3e%3cpath%20d='M4%2011l16%200'%20/%3e%3cpath%20d='M8%2015h2v2h-2z'%20/%3e%3c/svg%3e";function KO({isOpen:t,toggleModal:e,point:n,children:r}){if(!t)return null;const i=`${n.date.getDate()}-${n.date.getMonth()+1}-${n.date.getFullYear()}`;return w.jsx("div",{className:"modal-overlay",onClick:e,children:w.jsxs("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:[w.jsx("h2",{children:n.label}),w.jsx("p",{children:n.description}),w.jsx("p",{children:i}),r]})})}function Rc({isOpen:t,toggleModal:e,children:n}){return t?w.jsx("div",{className:"modal-overlay",onClick:e,children:w.jsx("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:n})}):null}const GO=Pc.memo(({onSingleEventClick:t,onLongEventClick:e})=>{const[n,r]=F.useState(!1),i=F.useRef(null),s=F.useCallback(()=>{r(l=>!l)},[]),o=F.useCallback(l=>{i.current&&!i.current.contains(l.target)&&r(!1)},[]);return F.useEffect(()=>(document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}),[o]),w.jsxs("div",{className:"add-button-dropdown",ref:i,children:[w.jsxs("button",{className:"add-button",onClick:s,children:[w.jsx("img",{src:NI}),w.jsx("div",{children:"Add"})]}),n&&w.jsx("div",{className:"dropdown-menu",children:w.jsxs("ul",{children:[w.jsxs("li",{onClick:()=>{s(),t()},children:[w.jsx("img",{src:qO}),"Single event"]}),w.jsxs("li",{onClick:()=>{s(),e()},children:[w.jsx("img",{src:no}),"Long event"]})]})})]})}),QO=async(t,e,n,r,i)=>{if(!t||!e){alert("Please fill in all fields.");return}const s=r.uid,o=`point_${Date.now()}`,l={title:t,date:e,description:n};try{const u=ys(vs,"users",s);await Am(u,{[`timelines.${i}.points.${o}`]:l}),console.log("New point added successfully"),setTimelineData(c=>({...c,points:{...c.points,[o]:l}}))}catch(u){console.error("Error adding point: ",u)}};function YO({timelineData:t,currentUser:e,timelineId:n}){const r=F.useRef(null),i=new Date(t.startDate),s=new Date(t.endDate),o=Object.values(t.points).map(de=>({date:new Date(de.date),label:de.title,description:de.description})),c=(s-i)/(1e3*60*60*24)*10,[h,p]=F.useState({x:(window.innerWidth-c)/2,y:window.innerHeight/2}),[m,T]=F.useState(1),[C,k]=F.useState(!1),[O,I]=F.useState(null),[_,A]=F.useState(null),V=de=>{const xe=s-i;return(de-i)/xe*c};F.useEffect(()=>{const de=r.current,xe=de.getContext("2d");de.width=window.innerWidth,de.height=window.innerHeight;const Gt=()=>{xe.clearRect(0,0,de.width,de.height),xe.save(),xe.translate(h.x,h.y),xe.scale(m,m),Zv(xe,-6,6),Zv(xe,c+6,-6),$O(xe,c),o.forEach(zt=>{HO(xe,zt,_===zt,V(zt.date))});const Be=65;e0(xe,i,0-Be,c),e0(xe,s,c+Be-60,c,!0),xe.restore()},De=Be=>{const zt=de.getBoundingClientRect(),Nn=Be.clientX-zt.left,Bt=Be.clientY-zt.top,jr=(Nn-h.x)/m,ki=(Bt-h.y)/m;let Dn=null;o.forEach(or=>{const _s=V(or.date);Math.sqrt(Math.pow(jr-_s,2)+Math.pow(ki-0,2))<=5&&(Dn=or)}),Dn?(console.log("Point clicked:",Dn),I(Dn)):I(null)};return de.addEventListener("click",De),Gt(),()=>{de.removeEventListener("click",De)}},[h,m,c,_,o,i,s]);const z=()=>{k(!0)},N=()=>{k(!1)},E=de=>{if(C)p(xe=>({x:xe.x+de.movementX,y:xe.y}));else{const xe=r.current.getBoundingClientRect(),Gt=de.clientX-xe.left,De=de.clientY-xe.top,Be=(Gt-h.x)/m,zt=(De-h.y)/m;let Nn=!1,Bt=null;o.forEach(jr=>{const ki=V(jr.date);Math.sqrt(Math.pow(Be-ki,2)+Math.pow(zt-0,2))<=5&&(Nn=!0,Bt=jr)}),A(Bt),r.current.style.cursor=Nn?"pointer":"grab"}},y=F.useCallback(de=>{const xe=de.deltaY>0?.9:1.1,Gt=r.current.getBoundingClientRect();de.clientX-Gt.left;const De=Gt.width/2;p(Be=>({x:De-(De-Be.x)*xe,y:Be.y})),T(Be=>Math.max(.1,Be*xe))},[]),[v,R]=F.useState(!1),[P,b]=F.useState(!1);F.useState(!1);const[S,Te]=F.useState(""),[yt,rn]=F.useState(""),[Ie,K]=F.useState(""),[ee,ne]=F.useState(""),[ve,fe]=F.useState(""),[ke,Qe]=F.useState(""),[ot,tt]=F.useState(""),Pt=()=>{R(!v),v||(Te(""),rn(""),K(""))},Wn=()=>{b(!P),P||(ne(""),fe(""),Qe(""),tt(""))};return w.jsxs("div",{className:"canvas-box",style:{overflow:"hidden",position:"relative"},children:[w.jsxs("div",{className:"opened-timeline-file-name",children:[w.jsx("div",{children:t.title}),w.jsx("img",{src:WO})]}),w.jsx("canvas",{className:"canvas",ref:r,onMouseDown:z,onMouseUp:N,onMouseMove:E,onWheel:y,style:{cursor:C?"grabbing":"grab"}}),w.jsx(GO,{onSingleEventClick:Pt,onLongEventClick:Wn}),w.jsx(KO,{isOpen:!!O,point:O,toggleModal:()=>I(null)}),w.jsxs(Rc,{isOpen:v,toggleModal:Pt,children:[w.jsx("h1",{children:"Add Single Event"}),w.jsxs("div",{className:"modal-grid",children:[w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Title"}),w.jsx("input",{className:"modal-input",type:"text",name:"title",value:S,onChange:de=>Te(de.target.value)})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Starting date"}),w.jsxs("div",{className:"modal-input-container",children:[w.jsx("img",{src:no,className:"modal-input-image"}),w.jsx("input",{className:"modal-input",type:"date",name:"date",value:yt,onChange:de=>rn(de.target.value)})]})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Description"}),w.jsx("textarea",{className:"modal-input",name:"desc",value:Ie,onChange:de=>K(de.target.value)})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("button",{className:"modal-button",onClick:Pt,children:"Cancel"}),w.jsx("button",{className:"modal-button proceed-button",onClick:()=>{QO(S,yt,Ie,e,n),Pt()},children:"Proceed"})]})]})]}),w.jsxs(Rc,{isOpen:P,toggleModal:Wn,children:[w.jsx("h1",{children:"Add Long Event"}),w.jsxs("div",{className:"modal-grid",children:[w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Title"}),w.jsx("input",{className:"modal-input",type:"text",name:"longEventTitle",value:ee,onChange:de=>ne(de.target.value)})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Starting date"}),w.jsxs("div",{className:"modal-input-container",children:[w.jsx("img",{src:no,className:"modal-input-image"}),w.jsx("input",{className:"modal-input",type:"date",name:"longEventStartDate",value:ve,onChange:de=>fe(de.target.value)})]})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Ending Date"}),w.jsxs("div",{className:"modal-input-container",children:[w.jsx("img",{src:no,className:"modal-input-image"}),w.jsx("input",{className:"modal-input",type:"date",name:"longEventEndDate",value:ke,onChange:de=>Qe(de.target.value)})]})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Description"}),w.jsx("textarea",{className:"modal-input",name:"longEventDesc",value:ot,onChange:de=>tt(de.target.value)})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("button",{className:"modal-button",onClick:Wn,children:"Cancel"}),w.jsx("button",{className:"modal-button proceed-button",onClick:()=>{Wn()},children:"Proceed"})]})]})]})]})}const ia=(t,{children:e})=>{const[n,r]=F.useState(!1),i=F.useRef(null),s=()=>{r(!n)},o=l=>{i.current&&!i.current.contains(l.target)&&r(!1)};return F.useEffect(()=>(document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}),[]),w.jsxs("div",{className:"header-button-dropdown",ref:i,children:[w.jsx("button",{onClick:s,children:t.buttonName}),n&&w.jsx("div",{className:"header-dropdown-menu",children:w.jsx("ul",{children:t.children})})]})};function XO(){const{timelineId:t}=IA(),[e,n]=F.useState(null),{currentUser:r}=vd();return F.useEffect(()=>{if(r){const i=ys(vs,"users",r.uid),s=RI(i,o=>{if(o.exists()){const u=o.data().timelines[t];u?n(u):console.error("No such timeline!")}else console.error("No such user document!")});return()=>s()}},[r,t]),e?r?w.jsx(w.Fragment,{children:w.jsxs("div",{className:"main horizontal-gradient",children:[w.jsx(kI,{children:w.jsxs("div",{className:"header-option-buttons",children:[w.jsx(is,{to:"/Timelines/app",style:{display:"flex"},children:w.jsx("button",{children:w.jsx("img",{src:DO})})}),w.jsxs(ia,{buttonName:"File",children:[w.jsx("li",{children:"New file"}),w.jsx("div",{className:"dropdown-line-divider"}),w.jsx("li",{children:"Open file"}),w.jsx("li",{children:"Open recent"}),w.jsx("div",{className:"dropdown-line-divider"}),w.jsx("li",{children:"Save file"}),w.jsx("li",{children:"Save file as"}),w.jsx("div",{className:"dropdown-line-divider"}),w.jsx("li",{children:"Export image"}),w.jsx("div",{className:"dropdown-line-divider"}),w.jsx("li",{children:"Close file"})]}),w.jsxs(ia,{buttonName:"Edit",children:[w.jsx("li",{children:"Undo"}),w.jsx("li",{children:"Redo"}),w.jsx("div",{className:"dropdown-line-divider"}),w.jsx("li",{children:"Cut"}),w.jsx("li",{children:"Copy"}),w.jsx("li",{children:"Paste"}),w.jsx("div",{className:"dropdown-line-divider"}),w.jsx("li",{children:"Find event"}),w.jsx("div",{className:"dropdown-line-divider"}),w.jsx("li",{children:"Change background"})]}),w.jsx(ia,{buttonName:"View",children:w.jsx("li",{children:"Fit to whole screen"})}),w.jsxs(ia,{buttonName:"Text",children:[w.jsx("li",{children:"Change font"}),w.jsx("li",{children:"Change text size"})]}),w.jsx(ia,{buttonName:"Colors",children:w.jsx("li",{children:"Change color palette"})})]})}),w.jsx(YO,{timelineData:e,currentUser:r,timelineId:t})]})}):w.jsx(Kc,{to:"/Timelines/login"}):w.jsx("div",{children:"Loading timeline..."})}function sa(){return w.jsx(w.Fragment,{children:w.jsx("div",{className:"error-page",children:"Error"})})}const JO=async(t,e,n)=>{const r=await lx(No,t,e),i=r.user;return await SI(ys(vs,"users",i.uid),{email:i.email,nickname:n,timelines:{},createdAt:new Date},{merge:!0}),r},ZO=(t,e)=>ux(No,t,e),DI=async()=>{const t=new gr,n=(await Ox(No,t)).user,r=ys(vs,"users",n.uid);return(await PO(r)).exists()||await SI(r,{email:n.email,nickname:n.displayName||n.email,createdAt:new Date,timelines:{}}),n},eM=t=>ax(No,t),bI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%3e%3cpath%20d='M22.56%2012.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26%201.37-1.04%202.53-2.21%203.31v2.77h3.57c2.08-1.92%203.28-4.74%203.28-8.09z'%20fill='%234285F4'/%3e%3cpath%20d='M12%2023c2.97%200%205.46-.98%207.28-2.66l-3.57-2.77c-.98.66-2.23%201.06-3.71%201.06-2.86%200-5.29-1.93-6.16-4.53H2.18v2.84C3.99%2020.53%207.7%2023%2012%2023z'%20fill='%2334A853'/%3e%3cpath%20d='M5.84%2014.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43%208.55%201%2010.22%201%2012s.43%203.45%201.18%204.93l2.85-2.22.81-.62z'%20fill='%23FBBC05'/%3e%3cpath%20d='M12%205.38c1.62%200%203.06.56%204.21%201.64l3.15-3.15C17.45%202.09%2014.97%201%2012%201%207.7%201%203.99%203.47%202.18%207.07l3.66%202.84c.87-2.6%203.3-4.53%206.16-4.53z'%20fill='%23EA4335'/%3e%3cpath%20d='M1%201h22v22H1z'%20fill='none'/%3e%3c/svg%3e";function tM(){const[t,e]=F.useState(""),[n,r]=F.useState(""),[i,s]=F.useState(""),[o,l]=F.useState(""),[u,c]=F.useState(""),[h,p]=F.useState(!1),m=Np(),T=async k=>{if(k.preventDefault(),i!==o){c("Passwords do not match");return}if(t==""||t==null){c("Nickname field is empty");return}console.log("Email:",n),console.log("Password:",i);try{await JO(n,i,t),m("/Timelines/login")}catch(O){console.error("Error creating user:",O),c(O.message)}},C=async k=>{if(k.preventDefault(),!h){p(!0);try{await DI(),m("/Timelines/app")}catch(O){c(O.message),p(!1)}}};return w.jsx(w.Fragment,{children:w.jsxs("div",{className:"main-signup",children:[w.jsx("img",{src:Gc,className:"logo",alt:"Logo"}),w.jsx("h1",{children:"Create account"}),w.jsxs("form",{onSubmit:T,children:[w.jsx("div",{className:"input-box",children:w.jsx("input",{placeholder:"Nickname",type:"text",value:t,onChange:k=>e(k.target.value)})}),w.jsx("div",{className:"input-box",children:w.jsx("input",{placeholder:"Email",type:"email",value:n,onChange:k=>r(k.target.value)})}),w.jsx("div",{className:"input-box",children:w.jsx("input",{placeholder:"Password",type:"password",value:i,onChange:k=>s(k.target.value)})}),w.jsx("div",{className:"input-box",children:w.jsx("input",{placeholder:"Repeat password",type:"password",value:o,onChange:k=>l(k.target.value)})}),w.jsxs("p",{children:[u&&w.jsx("p",{className:"error",children:u}),"Already have an account?",w.jsx(is,{to:"/Timelines/login",children:w.jsx("span",{className:"blue-font",children:" Log in"})})]}),w.jsx("input",{type:"submit",className:"submit-button",value:"Submit"}),w.jsxs("div",{className:"divider",children:[w.jsx("div",{className:"divider-line"}),w.jsx("div",{children:"OR"}),w.jsx("div",{className:"divider-line"})]}),w.jsxs("button",{className:"button-google",onClick:C,disabled:h,children:[w.jsx("img",{src:bI,alt:"google"}),h?"Signing in with Google...":"Sign Up with Google"]})]})]})})}function nM(){const{userLoggedIn:t}=vd(),[e,n]=F.useState(""),[r,i]=F.useState(""),[s,o]=F.useState(!1),[l,u]=F.useState(!1),[c,h]=F.useState(""),[p,m]=F.useState(""),T=async O=>{if(O.preventDefault(),!s){o(!0);try{await ZO(e,r)}catch(I){h(I.message),o(!1)}}},C=async O=>{if(O.preventDefault(),!l){u(!0);try{await DI()}catch(I){h(I.message),u(!1)}}},k=async O=>{if(O.preventDefault(),e)try{await eM(e),m("Password reset email sent!")}catch(I){h(I.message)}else h("Please enter your email address.")};return t?w.jsx(Kc,{to:"/Timelines/app"}):w.jsx(w.Fragment,{children:w.jsxs("div",{className:"main-login",children:[w.jsx("img",{src:Gc,className:"logo",alt:"Logo"}),w.jsx("h1",{children:"Welcome back"}),c&&w.jsx("p",{style:{color:"red",marginBottom:5},children:c}),p&&w.jsx("p",{style:{color:"green",marginBottom:5},children:p}),w.jsxs("form",{onSubmit:T,children:[w.jsx("div",{className:"input-box",children:w.jsx("input",{type:"email",value:e,placeholder:"Email",onChange:O=>n(O.target.value),required:!0})}),w.jsx("div",{className:"input-box",children:w.jsx("input",{type:"password",value:r,placeholder:"Password",onChange:O=>i(O.target.value),required:!0})}),w.jsx("p",{children:w.jsx("span",{className:"blue-font",onClick:k,style:{cursor:"pointer"},children:"I don't remember my password"})}),w.jsx("button",{className:"submit-button",type:"submit",disabled:s,children:s?"Signing in...":"Continue"}),w.jsxs("p",{children:["Don't have an account?",w.jsx("span",{className:"blue-font",children:w.jsx(is,{to:"/Timelines/sign-up",children:" Sign Up"})})]}),w.jsxs("div",{className:"divider",children:[w.jsx("div",{className:"divider-line"}),w.jsx("div",{children:"OR"}),w.jsx("div",{className:"divider-line"})]}),w.jsxs("button",{className:"button-google",onClick:C,disabled:l,children:[w.jsx("img",{src:bI,alt:"google"}),l?"Signing in with Google...":"Continue with Google"]})]})]})})}const rM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20class='icon%20icon-tabler%20icons-tabler-filled%20icon-tabler-caret-down'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M18%209c.852%200%201.297%20.986%20.783%201.623l-.076%20.084l-6%206a1%201%200%200%201%20-1.32%20.083l-.094%20-.083l-6%20-6l-.083%20-.094l-.054%20-.077l-.054%20-.096l-.017%20-.036l-.027%20-.067l-.032%20-.108l-.01%20-.053l-.01%20-.06l-.004%20-.057v-.118l.005%20-.058l.009%20-.06l.01%20-.052l.032%20-.108l.027%20-.067l.07%20-.132l.065%20-.09l.073%20-.081l.094%20-.083l.077%20-.054l.096%20-.054l.036%20-.017l.067%20-.027l.108%20-.032l.053%20-.01l.06%20-.01l.057%20-.004l12.059%20-.002z'%20/%3e%3c/svg%3e",iM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-settings-2'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M19.875%206.27a2.225%202.225%200%200%201%201.125%201.948v7.284c0%20.809%20-.443%201.555%20-1.158%201.948l-6.75%204.27a2.269%202.269%200%200%201%20-2.184%200l-6.75%20-4.27a2.225%202.225%200%200%201%20-1.158%20-1.948v-7.285c0%20-.809%20.443%20-1.554%201.158%20-1.947l6.75%20-3.98a2.33%202.33%200%200%201%202.25%200l6.75%203.98h-.033z'%20/%3e%3cpath%20d='M12%2012m-3%200a3%203%200%201%200%206%200a3%203%200%201%200%20-6%200'%20/%3e%3c/svg%3e",sM="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-trash'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M4%207l16%200'%20/%3e%3cpath%20d='M10%2011l0%206'%20/%3e%3cpath%20d='M14%2011l0%206'%20/%3e%3cpath%20d='M5%207l1%2012a2%202%200%200%200%202%202h8a2%202%200%200%200%202%20-2l1%20-12'%20/%3e%3cpath%20d='M9%207v-3a1%201%200%200%201%201%20-1h4a1%201%200%200%201%201%201v3'%20/%3e%3c/svg%3e",oM=async(t,e,n,r,i)=>{if(!t||!e||!n){alert("Please fill in all fields.");return}const s=r.uid,o=`timeline_${Date.now()}`,l={title:t,startDate:e,endDate:n,periods:{},points:{}};try{const u=ys(vs,"users",s);await Am(u,{[`timelines.${o}`]:l}),console.log("New timeline added successfully"),i()}catch(u){console.error("Error adding timeline: ",u)}},aM=async(t,e,n)=>{if(!t||!e){alert("Missing information to delete timeline.");return}const r=e.uid;try{const i=ys(vs,"users",r);await Am(i,{[`timelines.${t}`]:CO()}),console.log("Timeline deleted successfully"),n()}catch(i){console.error("Error deleting timeline: ",i)}},lM=async()=>{try{await fx(No)}catch(t){console.error("Error logging out: ",t)}},uM=({fileName:t,timelineId:e,edited:n,currentUser:r})=>{const[i,s]=F.useState(!1),o=()=>{s(!i)};return w.jsxs("div",{className:"timeline-button-box",children:[w.jsx(is,{to:`/Timelines/app/${e}`,children:w.jsx("button",{className:"timeline-button"})}),w.jsxs("div",{className:"timeline-button-flex-wrapper",children:[w.jsxs(is,{to:`/Timelines/app/${e}`,children:[w.jsx("div",{className:"timeline-file-name",children:t}),w.jsxs("div",{className:"timeline-edited",children:["Edited ",n," ago"]})]}),w.jsxs("div",{style:{display:"flex",gap:5},children:[w.jsx("div",{className:"timeline-button-subbutton settings-button",children:w.jsx("img",{src:iM})}),w.jsx("div",{className:"timeline-button-subbutton trash-button",onClick:o,children:w.jsx("img",{src:sM})})]})]}),w.jsxs(Rc,{isOpen:i,toggleModal:o,children:[w.jsx("h1",{children:"Delete Timeline?"}),w.jsx("div",{className:"modal-grid",children:w.jsxs("div",{className:"modal-input-box",children:[w.jsx("button",{className:"modal-button",onClick:o,children:"Cancel"}),w.jsx("button",{className:"modal-button proceed-button",onClick:()=>aM(e,r,o),children:"Proceed"})]})})]})]})},cM=({onClick:t})=>w.jsxs("button",{onClick:t,className:"add-timeline-button",children:[w.jsx("div",{className:"add-timeline-icon",children:w.jsx("img",{src:NI,alt:"plus icon"})}),w.jsx("div",{children:"Create a new file"})]});function dM(){const{currentUser:t}=vd(),[e,n]=F.useState(null),[r,i]=F.useState(!1),[s,o]=F.useState(""),[l,u]=F.useState(""),[c,h]=F.useState("");if(F.useEffect(()=>{if(t){const m=ys(vs,"users",t.uid),T=RI(m,C=>{C.exists()&&n(C.data())});return()=>T()}},[t]),!t)return w.jsx(Kc,{to:"/Timelines/login"});if(!e)return w.jsx("div",{children:"Loading..."});const p=()=>{i(!r),r||(o(""),u(""),h(""))};return w.jsxs("div",{className:"main",children:[w.jsxs(kI,{children:[w.jsxs("div",{className:"header-logo",children:[w.jsx("img",{src:Gc,style:{width:24},alt:"Logo"}),w.jsx("div",{children:"Timelines"})]}),w.jsx("button",{onClick:lM,children:"Log Out"})]}),w.jsxs("div",{className:"dashboard-wrapper",children:[w.jsxs("div",{className:"dashboard-user",children:[w.jsx("h3",{children:"User panel"}),w.jsxs("h5",{children:["Welcome"," ",w.jsx("label",{className:"username",children:e&&e.nickname||t.email})]})]}),w.jsxs("div",{className:"dashboard-timelines",children:[w.jsx("div",{className:"dashboard-advertisement"}),w.jsx("h1",{children:"My Timelines"}),w.jsxs("div",{className:"timelines-box",children:[w.jsx(cM,{onClick:p}),Object.keys(e.timelines||{}).map(m=>w.jsx(uM,{timelineId:m,fileName:e.timelines[m].title,edited:"Just now",currentUser:t},m))]})]})]}),w.jsxs(Rc,{isOpen:r,toggleModal:p,children:[w.jsx("h1",{children:"Add new timeline"}),w.jsxs("div",{className:"modal-grid",children:[w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Title"}),w.jsx("input",{className:"modal-input",type:"text",name:"title",value:s,onChange:m=>o(m.target.value)})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Starting date"}),w.jsxs("div",{className:"modal-input-container",children:[w.jsx("img",{src:no,className:"modal-input-image"}),w.jsx("input",{className:"modal-input",type:"date",name:"start-date",value:l,onChange:m=>u(m.target.value)})]})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Ending date"}),w.jsxs("div",{className:"modal-input-container",children:[w.jsx("img",{src:no,className:"modal-input-image"}),w.jsx("input",{className:"modal-input",type:"date",name:"end-date",value:c,onChange:m=>h(m.target.value)})]})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Visibility"}),w.jsxs("div",{className:"modal-input-container",children:[w.jsx("img",{src:rM,className:"modal-input-image"}),w.jsxs("select",{className:"modal-input",name:"visibility",children:[w.jsx("option",{value:"public",children:"Public"}),w.jsx("option",{value:"private",children:"Private"})]})]})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Thumbnail"}),w.jsx("input",{className:"modal-input",type:"file",name:"thumbnail"})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("button",{className:"modal-button",onClick:p,children:"Cancel"}),w.jsx("button",{className:"modal-button proceed-button",onClick:()=>oM(s,l,c,t,p),children:"Proceed"})]})]})]})]})}const hM=$A([{path:"/Timelines",element:w.jsx(NO,{}),errorElement:w.jsx(sa,{})},{path:"/Timelines/sign-up",element:w.jsx(tM,{}),errorElement:w.jsx(sa,{})},{path:"/Timelines/login",element:w.jsx(nM,{}),errorElement:w.jsx(sa,{})},{path:"/Timelines/app",element:w.jsx(dM,{}),errorElement:w.jsx(sa,{})},{path:"/Timelines/app/:timelineId",element:w.jsx(XO,{}),errorElement:w.jsx(sa,{})}]);ph.createRoot(document.getElementById("root")).render(w.jsx(Pc.StrictMode,{children:w.jsx(xO,{children:w.jsx(JA,{router:hM})})}));
