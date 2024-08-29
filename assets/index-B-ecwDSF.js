function Zv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function e_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var t_={exports:{}},Ac={},n_={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hl=Symbol.for("react.element"),YI=Symbol.for("react.portal"),XI=Symbol.for("react.fragment"),JI=Symbol.for("react.strict_mode"),ZI=Symbol.for("react.profiler"),eS=Symbol.for("react.provider"),tS=Symbol.for("react.context"),nS=Symbol.for("react.forward_ref"),rS=Symbol.for("react.suspense"),iS=Symbol.for("react.memo"),sS=Symbol.for("react.lazy"),ng=Symbol.iterator;function oS(t){return t===null||typeof t!="object"?null:(t=ng&&t[ng]||t["@@iterator"],typeof t=="function"?t:null)}var r_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i_=Object.assign,s_={};function So(t,e,n){this.props=t,this.context=e,this.refs=s_,this.updater=n||r_}So.prototype.isReactComponent={};So.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};So.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function o_(){}o_.prototype=So.prototype;function Nf(t,e,n){this.props=t,this.context=e,this.refs=s_,this.updater=n||r_}var Df=Nf.prototype=new o_;Df.constructor=Nf;i_(Df,So.prototype);Df.isPureReactComponent=!0;var rg=Array.isArray,a_=Object.prototype.hasOwnProperty,bf={current:null},l_={key:!0,ref:!0,__self:!0,__source:!0};function u_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)a_.call(e,r)&&!l_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:hl,type:t,key:s,ref:o,props:i,_owner:bf.current}}function aS(t,e){return{$$typeof:hl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Of(t){return typeof t=="object"&&t!==null&&t.$$typeof===hl}function lS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ig=/\/+/g;function Sd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lS(""+t.key):e.toString(36)}function hu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case hl:case YI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sd(o,0):r,rg(i)?(n="",t!=null&&(n=t.replace(ig,"$&/")+"/"),hu(i,e,n,"",function(c){return c})):i!=null&&(Of(i)&&(i=aS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ig,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Sd(s,l);o+=hu(s,e,n,u,i)}else if(u=oS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Sd(s,l++),o+=hu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Hl(t,e,n){if(t==null)return t;var r=[],i=0;return hu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},fu={transition:null},cS={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:fu,ReactCurrentOwner:bf};function c_(){throw Error("act(...) is not supported in production builds of React.")}ge.Children={map:Hl,forEach:function(t,e,n){Hl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Hl(t,function(){e++}),e},toArray:function(t){return Hl(t,function(e){return e})||[]},only:function(t){if(!Of(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ge.Component=So;ge.Fragment=XI;ge.Profiler=ZI;ge.PureComponent=Nf;ge.StrictMode=JI;ge.Suspense=rS;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cS;ge.act=c_;ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=i_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)a_.call(e,u)&&!l_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:hl,type:t.type,key:i,ref:s,props:r,_owner:o}};ge.createContext=function(t){return t={$$typeof:tS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eS,_context:t},t.Consumer=t};ge.createElement=u_;ge.createFactory=function(t){var e=u_.bind(null,t);return e.type=t,e};ge.createRef=function(){return{current:null}};ge.forwardRef=function(t){return{$$typeof:nS,render:t}};ge.isValidElement=Of;ge.lazy=function(t){return{$$typeof:sS,_payload:{_status:-1,_result:t},_init:uS}};ge.memo=function(t,e){return{$$typeof:iS,type:t,compare:e===void 0?null:e}};ge.startTransition=function(t){var e=fu.transition;fu.transition={};try{t()}finally{fu.transition=e}};ge.unstable_act=c_;ge.useCallback=function(t,e){return Kt.current.useCallback(t,e)};ge.useContext=function(t){return Kt.current.useContext(t)};ge.useDebugValue=function(){};ge.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};ge.useEffect=function(t,e){return Kt.current.useEffect(t,e)};ge.useId=function(){return Kt.current.useId()};ge.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};ge.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};ge.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};ge.useMemo=function(t,e){return Kt.current.useMemo(t,e)};ge.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};ge.useRef=function(t){return Kt.current.useRef(t)};ge.useState=function(t){return Kt.current.useState(t)};ge.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};ge.useTransition=function(){return Kt.current.useTransition()};ge.version="18.3.1";n_.exports=ge;var F=n_.exports;const Lf=e_(F),dS=Zv({__proto__:null,default:Lf},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hS=F,fS=Symbol.for("react.element"),pS=Symbol.for("react.fragment"),mS=Object.prototype.hasOwnProperty,gS=hS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yS={key:!0,ref:!0,__self:!0,__source:!0};function d_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mS.call(e,r)&&!yS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fS,type:t,key:s,ref:o,props:i,_owner:gS.current}}Ac.Fragment=pS;Ac.jsx=d_;Ac.jsxs=d_;t_.exports=Ac;var w=t_.exports,fh={},h_={exports:{}},yn={},f_={exports:{}},p_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,ee){var ne=K.length;K.push(ee);e:for(;0<ne;){var _e=ne-1>>>1,pe=K[_e];if(0<i(pe,ee))K[_e]=ee,K[ne]=pe,ne=_e;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var ee=K[0],ne=K.pop();if(ne!==ee){K[0]=ne;e:for(var _e=0,pe=K.length,Ne=pe>>>1;_e<Ne;){var Xe=2*(_e+1)-1,Je=K[Xe],Ze=Xe+1,ae=K[Ze];if(0>i(Je,ne))Ze<pe&&0>i(ae,Je)?(K[_e]=ae,K[Ze]=ne,_e=Ze):(K[_e]=Je,K[Xe]=ne,_e=Xe);else if(Ze<pe&&0>i(ae,ne))K[_e]=ae,K[Ze]=ne,_e=Ze;else break e}}return ee}function i(K,ee){var ne=K.sortIndex-ee.sortIndex;return ne!==0?ne:K.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],h=1,p=null,m=3,T=!1,C=!1,k=!1,O=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(K){for(var ee=n(c);ee!==null;){if(ee.callback===null)r(c);else if(ee.startTime<=K)r(c),ee.sortIndex=ee.expirationTime,e(u,ee);else break;ee=n(c)}}function V(K){if(k=!1,A(K),!C)if(n(u)!==null)C=!0,on(z);else{var ee=n(c);ee!==null&&Re(V,ee.startTime-K)}}function z(K,ee){C=!1,k&&(k=!1,S(y),y=-1),T=!0;var ne=m;try{for(A(ee),p=n(u);p!==null&&(!(p.expirationTime>ee)||K&&!P());){var _e=p.callback;if(typeof _e=="function"){p.callback=null,m=p.priorityLevel;var pe=_e(p.expirationTime<=ee);ee=t.unstable_now(),typeof pe=="function"?p.callback=pe:p===n(u)&&r(u),A(ee)}else r(u);p=n(u)}if(p!==null)var Ne=!0;else{var Xe=n(c);Xe!==null&&Re(V,Xe.startTime-ee),Ne=!1}return Ne}finally{p=null,m=ne,T=!1}}var N=!1,E=null,y=-1,v=5,R=-1;function P(){return!(t.unstable_now()-R<v)}function b(){if(E!==null){var K=t.unstable_now();R=K;var ee=!0;try{ee=E(!0,K)}finally{ee?I():(N=!1,E=null)}}else N=!1}var I;if(typeof _=="function")I=function(){_(b)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,_t=Ie.port2;Ie.port1.onmessage=b,I=function(){_t.postMessage(null)}}else I=function(){O(b,0)};function on(K){E=K,N||(N=!0,I())}function Re(K,ee){y=O(function(){K(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){C||T||(C=!0,on(z))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(K){switch(m){case 1:case 2:case 3:var ee=3;break;default:ee=m}var ne=m;m=ee;try{return K()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,ee){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ne=m;m=K;try{return ee()}finally{m=ne}},t.unstable_scheduleCallback=function(K,ee,ne){var _e=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?_e+ne:_e):ne=_e,K){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=ne+pe,K={id:h++,callback:ee,priorityLevel:K,startTime:ne,expirationTime:pe,sortIndex:-1},ne>_e?(K.sortIndex=ne,e(c,K),n(u)===null&&K===n(c)&&(k?(S(y),y=-1):k=!0,Re(V,ne-_e))):(K.sortIndex=pe,e(u,K),C||T||(C=!0,on(z))),K},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(K){var ee=m;return function(){var ne=m;m=ee;try{return K.apply(this,arguments)}finally{m=ne}}}})(p_);f_.exports=p_;var vS=f_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _S=F,gn=vS;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m_=new Set,Oa={};function gs(t,e){so(t,e),so(t+"Capture",e)}function so(t,e){for(Oa[t]=e,t=0;t<e.length;t++)m_.add(e[t])}var xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ph=Object.prototype.hasOwnProperty,wS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sg={},og={};function ES(t){return ph.call(og,t)?!0:ph.call(sg,t)?!1:wS.test(t)?og[t]=!0:(sg[t]=!0,!1)}function TS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IS(t,e,n,r){if(e===null||typeof e>"u"||TS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ct[t]=new Gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ct[e]=new Gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ct[t]=new Gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ct[t]=new Gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ct[t]=new Gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ct[t]=new Gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ct[t]=new Gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ct[t]=new Gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ct[t]=new Gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mf=/[\-:]([a-z])/g;function Vf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mf,Vf);Ct[e]=new Gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mf,Vf);Ct[e]=new Gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mf,Vf);Ct[e]=new Gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ct[t]=new Gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ct[t]=new Gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ff(t,e,n,r){var i=Ct.hasOwnProperty(e)?Ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IS(e,n,i,r)&&(n=null),r||i===null?ES(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vr=_S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wl=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Vs=Symbol.for("react.fragment"),jf=Symbol.for("react.strict_mode"),mh=Symbol.for("react.profiler"),g_=Symbol.for("react.provider"),y_=Symbol.for("react.context"),Uf=Symbol.for("react.forward_ref"),gh=Symbol.for("react.suspense"),yh=Symbol.for("react.suspense_list"),zf=Symbol.for("react.memo"),Jr=Symbol.for("react.lazy"),v_=Symbol.for("react.offscreen"),ag=Symbol.iterator;function Ko(t){return t===null||typeof t!="object"?null:(t=ag&&t[ag]||t["@@iterator"],typeof t=="function"?t:null)}var Qe=Object.assign,Rd;function aa(t){if(Rd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rd=e&&e[1]||""}return`
`+Rd+t}var Ad=!1;function Pd(t,e){if(!t||Ad)return"";Ad=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ad=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?aa(t):""}function SS(t){switch(t.tag){case 5:return aa(t.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return t=Pd(t.type,!1),t;case 11:return t=Pd(t.type.render,!1),t;case 1:return t=Pd(t.type,!0),t;default:return""}}function vh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vs:return"Fragment";case Ms:return"Portal";case mh:return"Profiler";case jf:return"StrictMode";case gh:return"Suspense";case yh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y_:return(t.displayName||"Context")+".Consumer";case g_:return(t._context.displayName||"Context")+".Provider";case Uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zf:return e=t.displayName||null,e!==null?e:vh(t.type)||"Memo";case Jr:e=t._payload,t=t._init;try{return vh(t(e))}catch{}}return null}function RS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vh(e);case 8:return e===jf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function __(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AS(t){var e=__(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ql(t){t._valueTracker||(t._valueTracker=AS(t))}function w_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=__(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _h(t,e){var n=e.checked;return Qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function E_(t,e){e=e.checked,e!=null&&Ff(t,"checked",e,!1)}function wh(t,e){E_(t,e);var n=vi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Eh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Eh(t,e.type,vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ug(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Eh(t,e,n){(e!=="number"||Ou(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var la=Array.isArray;function Gs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(la(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vi(n)}}function T_(t,e){var n=vi(e.value),r=vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function I_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ih(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?I_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Kl,S_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Kl=Kl||document.createElement("div"),Kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function La(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PS=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(t){PS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),va[e]=va[t]})});function R_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||va.hasOwnProperty(t)&&va[t]?(""+e).trim():e+"px"}function A_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=R_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var CS=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sh(t,e){if(e){if(CS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function Rh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ah=null;function Bf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ph=null,Qs=null,Ys=null;function hg(t){if(t=ml(t)){if(typeof Ph!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Nc(e),Ph(t.stateNode,t.type,e))}}function P_(t){Qs?Ys?Ys.push(t):Ys=[t]:Qs=t}function C_(){if(Qs){var t=Qs,e=Ys;if(Ys=Qs=null,hg(t),e)for(t=0;t<e.length;t++)hg(e[t])}}function k_(t,e){return t(e)}function x_(){}var Cd=!1;function N_(t,e,n){if(Cd)return t(e,n);Cd=!0;try{return k_(t,e,n)}finally{Cd=!1,(Qs!==null||Ys!==null)&&(x_(),C_())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var r=Nc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var Ch=!1;if(xr)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){Ch=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{Ch=!1}function kS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var _a=!1,Lu=null,Mu=!1,kh=null,xS={onError:function(t){_a=!0,Lu=t}};function NS(t,e,n,r,i,s,o,l,u){_a=!1,Lu=null,kS.apply(xS,arguments)}function DS(t,e,n,r,i,s,o,l,u){if(NS.apply(this,arguments),_a){if(_a){var c=Lu;_a=!1,Lu=null}else throw Error(H(198));Mu||(Mu=!0,kh=c)}}function ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fg(t){if(ys(t)!==t)throw Error(H(188))}function bS(t){var e=t.alternate;if(!e){if(e=ys(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fg(i),t;if(s===r)return fg(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function b_(t){return t=bS(t),t!==null?O_(t):null}function O_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=O_(t);if(e!==null)return e;t=t.sibling}return null}var L_=gn.unstable_scheduleCallback,pg=gn.unstable_cancelCallback,OS=gn.unstable_shouldYield,LS=gn.unstable_requestPaint,ot=gn.unstable_now,MS=gn.unstable_getCurrentPriorityLevel,$f=gn.unstable_ImmediatePriority,M_=gn.unstable_UserBlockingPriority,Vu=gn.unstable_NormalPriority,VS=gn.unstable_LowPriority,V_=gn.unstable_IdlePriority,Pc=null,tr=null;function FS(t){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(Pc,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:zS,jS=Math.log,US=Math.LN2;function zS(t){return t>>>=0,t===0?32:31-(jS(t)/US|0)|0}var Gl=64,Ql=4194304;function ua(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ua(l):(s&=o,s!==0&&(r=ua(s)))}else o=n&~i,o!==0?r=ua(o):s!==0&&(r=ua(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Hn(e),i=1<<n,r|=t[n],e&=~i;return r}function BS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $S(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Hn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=BS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function xh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function F_(){var t=Gl;return Gl<<=1,!(Gl&4194240)&&(Gl=64),t}function kd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function HS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Hn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Hf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Hn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var De=0;function j_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var U_,Wf,z_,B_,$_,Nh=!1,Yl=[],li=null,ui=null,ci=null,Va=new Map,Fa=new Map,ei=[],WS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mg(t,e){switch(t){case"focusin":case"focusout":li=null;break;case"dragenter":case"dragleave":ui=null;break;case"mouseover":case"mouseout":ci=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fa.delete(e.pointerId)}}function Qo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ml(e),e!==null&&Wf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qS(t,e,n,r,i){switch(e){case"focusin":return li=Qo(li,t,e,n,r,i),!0;case"dragenter":return ui=Qo(ui,t,e,n,r,i),!0;case"mouseover":return ci=Qo(ci,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Va.set(s,Qo(Va.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Fa.set(s,Qo(Fa.get(s)||null,t,e,n,r,i)),!0}return!1}function H_(t){var e=Hi(t.target);if(e!==null){var n=ys(e);if(n!==null){if(e=n.tag,e===13){if(e=D_(n),e!==null){t.blockedOn=e,$_(t.priority,function(){z_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ah=r,n.target.dispatchEvent(r),Ah=null}else return e=ml(n),e!==null&&Wf(e),t.blockedOn=n,!1;e.shift()}return!0}function gg(t,e,n){pu(t)&&n.delete(e)}function KS(){Nh=!1,li!==null&&pu(li)&&(li=null),ui!==null&&pu(ui)&&(ui=null),ci!==null&&pu(ci)&&(ci=null),Va.forEach(gg),Fa.forEach(gg)}function Yo(t,e){t.blockedOn===e&&(t.blockedOn=null,Nh||(Nh=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,KS)))}function ja(t){function e(i){return Yo(i,t)}if(0<Yl.length){Yo(Yl[0],t);for(var n=1;n<Yl.length;n++){var r=Yl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(li!==null&&Yo(li,t),ui!==null&&Yo(ui,t),ci!==null&&Yo(ci,t),Va.forEach(e),Fa.forEach(e),n=0;n<ei.length;n++)r=ei[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ei.length&&(n=ei[0],n.blockedOn===null);)H_(n),n.blockedOn===null&&ei.shift()}var Xs=Vr.ReactCurrentBatchConfig,ju=!0;function GS(t,e,n,r){var i=De,s=Xs.transition;Xs.transition=null;try{De=1,qf(t,e,n,r)}finally{De=i,Xs.transition=s}}function QS(t,e,n,r){var i=De,s=Xs.transition;Xs.transition=null;try{De=4,qf(t,e,n,r)}finally{De=i,Xs.transition=s}}function qf(t,e,n,r){if(ju){var i=Dh(t,e,n,r);if(i===null)jd(t,e,r,Uu,n),mg(t,r);else if(qS(i,t,e,n,r))r.stopPropagation();else if(mg(t,r),e&4&&-1<WS.indexOf(t)){for(;i!==null;){var s=ml(i);if(s!==null&&U_(s),s=Dh(t,e,n,r),s===null&&jd(t,e,r,Uu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else jd(t,e,r,null,n)}}var Uu=null;function Dh(t,e,n,r){if(Uu=null,t=Bf(r),t=Hi(t),t!==null)if(e=ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=D_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Uu=t,null}function W_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(MS()){case $f:return 1;case M_:return 4;case Vu:case VS:return 16;case V_:return 536870912;default:return 16}default:return 16}}var si=null,Kf=null,mu=null;function q_(){if(mu)return mu;var t,e=Kf,n=e.length,r,i="value"in si?si.value:si.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return mu=i.slice(t,1<r?1-r:void 0)}function gu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xl(){return!0}function yg(){return!1}function vn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xl:yg,this.isPropagationStopped=yg,this}return Qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),e}var Ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gf=vn(Ro),pl=Qe({},Ro,{view:0,detail:0}),YS=vn(pl),xd,Nd,Xo,Cc=Qe({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(xd=t.screenX-Xo.screenX,Nd=t.screenY-Xo.screenY):Nd=xd=0,Xo=t),xd)},movementY:function(t){return"movementY"in t?t.movementY:Nd}}),vg=vn(Cc),XS=Qe({},Cc,{dataTransfer:0}),JS=vn(XS),ZS=Qe({},pl,{relatedTarget:0}),Dd=vn(ZS),e1=Qe({},Ro,{animationName:0,elapsedTime:0,pseudoElement:0}),t1=vn(e1),n1=Qe({},Ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),r1=vn(n1),i1=Qe({},Ro,{data:0}),_g=vn(i1),s1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=a1[t])?!!e[t]:!1}function Qf(){return l1}var u1=Qe({},pl,{key:function(t){if(t.key){var e=s1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?o1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qf,charCode:function(t){return t.type==="keypress"?gu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),c1=vn(u1),d1=Qe({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wg=vn(d1),h1=Qe({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qf}),f1=vn(h1),p1=Qe({},Ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),m1=vn(p1),g1=Qe({},Cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),y1=vn(g1),v1=[9,13,27,32],Yf=xr&&"CompositionEvent"in window,wa=null;xr&&"documentMode"in document&&(wa=document.documentMode);var _1=xr&&"TextEvent"in window&&!wa,K_=xr&&(!Yf||wa&&8<wa&&11>=wa),Eg=" ",Tg=!1;function G_(t,e){switch(t){case"keyup":return v1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Q_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fs=!1;function w1(t,e){switch(t){case"compositionend":return Q_(e);case"keypress":return e.which!==32?null:(Tg=!0,Eg);case"textInput":return t=e.data,t===Eg&&Tg?null:t;default:return null}}function E1(t,e){if(Fs)return t==="compositionend"||!Yf&&G_(t,e)?(t=q_(),mu=Kf=si=null,Fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return K_&&e.locale!=="ko"?null:e.data;default:return null}}var T1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ig(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!T1[t.type]:e==="textarea"}function Y_(t,e,n,r){P_(r),e=zu(e,"onChange"),0<e.length&&(n=new Gf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ea=null,Ua=null;function I1(t){a0(t,0)}function kc(t){var e=zs(t);if(w_(e))return t}function S1(t,e){if(t==="change")return e}var X_=!1;if(xr){var bd;if(xr){var Od="oninput"in document;if(!Od){var Sg=document.createElement("div");Sg.setAttribute("oninput","return;"),Od=typeof Sg.oninput=="function"}bd=Od}else bd=!1;X_=bd&&(!document.documentMode||9<document.documentMode)}function Rg(){Ea&&(Ea.detachEvent("onpropertychange",J_),Ua=Ea=null)}function J_(t){if(t.propertyName==="value"&&kc(Ua)){var e=[];Y_(e,Ua,t,Bf(t)),N_(I1,e)}}function R1(t,e,n){t==="focusin"?(Rg(),Ea=e,Ua=n,Ea.attachEvent("onpropertychange",J_)):t==="focusout"&&Rg()}function A1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kc(Ua)}function P1(t,e){if(t==="click")return kc(e)}function C1(t,e){if(t==="input"||t==="change")return kc(e)}function k1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:k1;function za(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ph.call(e,i)||!Kn(t[i],e[i]))return!1}return!0}function Ag(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pg(t,e){var n=Ag(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ag(n)}}function Z_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Z_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e0(){for(var t=window,e=Ou();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ou(t.document)}return e}function Xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function x1(t){var e=e0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Z_(n.ownerDocument.documentElement,n)){if(r!==null&&Xf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pg(n,s);var o=Pg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var N1=xr&&"documentMode"in document&&11>=document.documentMode,js=null,bh=null,Ta=null,Oh=!1;function Cg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oh||js==null||js!==Ou(r)||(r=js,"selectionStart"in r&&Xf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ta&&za(Ta,r)||(Ta=r,r=zu(bh,"onSelect"),0<r.length&&(e=new Gf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=js)))}function Jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Us={animationend:Jl("Animation","AnimationEnd"),animationiteration:Jl("Animation","AnimationIteration"),animationstart:Jl("Animation","AnimationStart"),transitionend:Jl("Transition","TransitionEnd")},Ld={},t0={};xr&&(t0=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function xc(t){if(Ld[t])return Ld[t];if(!Us[t])return t;var e=Us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t0)return Ld[t]=e[n];return t}var n0=xc("animationend"),r0=xc("animationiteration"),i0=xc("animationstart"),s0=xc("transitionend"),o0=new Map,kg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ri(t,e){o0.set(t,e),gs(e,[t])}for(var Md=0;Md<kg.length;Md++){var Vd=kg[Md],D1=Vd.toLowerCase(),b1=Vd[0].toUpperCase()+Vd.slice(1);Ri(D1,"on"+b1)}Ri(n0,"onAnimationEnd");Ri(r0,"onAnimationIteration");Ri(i0,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(s0,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function xg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,DS(r,e,void 0,t),t.currentTarget=null}function a0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;xg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;xg(i,l,c),s=u}}}if(Mu)throw t=kh,Mu=!1,kh=null,t}function ze(t,e){var n=e[jh];n===void 0&&(n=e[jh]=new Set);var r=t+"__bubble";n.has(r)||(l0(e,t,2,!1),n.add(r))}function Fd(t,e,n){var r=0;e&&(r|=4),l0(n,t,r,e)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Ba(t){if(!t[Zl]){t[Zl]=!0,m_.forEach(function(n){n!=="selectionchange"&&(O1.has(n)||Fd(n,!1,t),Fd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zl]||(e[Zl]=!0,Fd("selectionchange",!1,e))}}function l0(t,e,n,r){switch(W_(e)){case 1:var i=GS;break;case 4:i=QS;break;default:i=qf}n=i.bind(null,e,n,t),i=void 0,!Ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function jd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Hi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}N_(function(){var c=s,h=Bf(n),p=[];e:{var m=o0.get(t);if(m!==void 0){var T=Gf,C=t;switch(t){case"keypress":if(gu(n)===0)break e;case"keydown":case"keyup":T=c1;break;case"focusin":C="focus",T=Dd;break;case"focusout":C="blur",T=Dd;break;case"beforeblur":case"afterblur":T=Dd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=vg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=JS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=f1;break;case n0:case r0:case i0:T=t1;break;case s0:T=m1;break;case"scroll":T=YS;break;case"wheel":T=y1;break;case"copy":case"cut":case"paste":T=r1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=wg}var k=(e&4)!==0,O=!k&&t==="scroll",S=k?m!==null?m+"Capture":null:m;k=[];for(var _=c,A;_!==null;){A=_;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,S!==null&&(V=Ma(_,S),V!=null&&k.push($a(_,V,A)))),O)break;_=_.return}0<k.length&&(m=new T(m,C,null,n,h),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&n!==Ah&&(C=n.relatedTarget||n.fromElement)&&(Hi(C)||C[Nr]))break e;if((T||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,T?(C=n.relatedTarget||n.toElement,T=c,C=C?Hi(C):null,C!==null&&(O=ys(C),C!==O||C.tag!==5&&C.tag!==6)&&(C=null)):(T=null,C=c),T!==C)){if(k=vg,V="onMouseLeave",S="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=wg,V="onPointerLeave",S="onPointerEnter",_="pointer"),O=T==null?m:zs(T),A=C==null?m:zs(C),m=new k(V,_+"leave",T,n,h),m.target=O,m.relatedTarget=A,V=null,Hi(h)===c&&(k=new k(S,_+"enter",C,n,h),k.target=A,k.relatedTarget=O,V=k),O=V,T&&C)t:{for(k=T,S=C,_=0,A=k;A;A=Ns(A))_++;for(A=0,V=S;V;V=Ns(V))A++;for(;0<_-A;)k=Ns(k),_--;for(;0<A-_;)S=Ns(S),A--;for(;_--;){if(k===S||S!==null&&k===S.alternate)break t;k=Ns(k),S=Ns(S)}k=null}else k=null;T!==null&&Ng(p,m,T,k,!1),C!==null&&O!==null&&Ng(p,O,C,k,!0)}}e:{if(m=c?zs(c):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var z=S1;else if(Ig(m))if(X_)z=C1;else{z=A1;var N=R1}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=P1);if(z&&(z=z(t,c))){Y_(p,z,n,h);break e}N&&N(t,m,c),t==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&Eh(m,"number",m.value)}switch(N=c?zs(c):window,t){case"focusin":(Ig(N)||N.contentEditable==="true")&&(js=N,bh=c,Ta=null);break;case"focusout":Ta=bh=js=null;break;case"mousedown":Oh=!0;break;case"contextmenu":case"mouseup":case"dragend":Oh=!1,Cg(p,n,h);break;case"selectionchange":if(N1)break;case"keydown":case"keyup":Cg(p,n,h)}var E;if(Yf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Fs?G_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(K_&&n.locale!=="ko"&&(Fs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Fs&&(E=q_()):(si=h,Kf="value"in si?si.value:si.textContent,Fs=!0)),N=zu(c,y),0<N.length&&(y=new _g(y,t,null,n,h),p.push({event:y,listeners:N}),E?y.data=E:(E=Q_(n),E!==null&&(y.data=E)))),(E=_1?w1(t,n):E1(t,n))&&(c=zu(c,"onBeforeInput"),0<c.length&&(h=new _g("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=E))}a0(p,e)})}function $a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ma(t,n),s!=null&&r.unshift($a(t,s,i)),s=Ma(t,e),s!=null&&r.push($a(t,s,i))),t=t.return}return r}function Ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ng(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ma(n,s),u!=null&&o.unshift($a(n,u,l))):i||(u=Ma(n,s),u!=null&&o.push($a(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var L1=/\r\n?/g,M1=/\u0000|\uFFFD/g;function Dg(t){return(typeof t=="string"?t:""+t).replace(L1,`
`).replace(M1,"")}function eu(t,e,n){if(e=Dg(e),Dg(t)!==e&&n)throw Error(H(425))}function Bu(){}var Lh=null,Mh=null;function Vh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fh=typeof setTimeout=="function"?setTimeout:void 0,V1=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,F1=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(t){return bg.resolve(null).then(t).catch(j1)}:Fh;function j1(t){setTimeout(function(){throw t})}function Ud(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ja(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ja(e)}function di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Og(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ao=Math.random().toString(36).slice(2),er="__reactFiber$"+Ao,Ha="__reactProps$"+Ao,Nr="__reactContainer$"+Ao,jh="__reactEvents$"+Ao,U1="__reactListeners$"+Ao,z1="__reactHandles$"+Ao;function Hi(t){var e=t[er];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nr]||n[er]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Og(t);t!==null;){if(n=t[er])return n;t=Og(t)}return e}t=n,n=t.parentNode}return null}function ml(t){return t=t[er]||t[Nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Nc(t){return t[Ha]||null}var Uh=[],Bs=-1;function Ai(t){return{current:t}}function Be(t){0>Bs||(t.current=Uh[Bs],Uh[Bs]=null,Bs--)}function Me(t,e){Bs++,Uh[Bs]=t.current,t.current=e}var _i={},zt=Ai(_i),en=Ai(!1),ts=_i;function oo(t,e){var n=t.type.contextTypes;if(!n)return _i;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function tn(t){return t=t.childContextTypes,t!=null}function $u(){Be(en),Be(zt)}function Lg(t,e,n){if(zt.current!==_i)throw Error(H(168));Me(zt,e),Me(en,n)}function u0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,RS(t)||"Unknown",i));return Qe({},n,r)}function Hu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_i,ts=zt.current,Me(zt,t),Me(en,en.current),!0}function Mg(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=u0(t,e,ts),r.__reactInternalMemoizedMergedChildContext=t,Be(en),Be(zt),Me(zt,t)):Be(en),Me(en,n)}var wr=null,Dc=!1,zd=!1;function c0(t){wr===null?wr=[t]:wr.push(t)}function B1(t){Dc=!0,c0(t)}function Pi(){if(!zd&&wr!==null){zd=!0;var t=0,e=De;try{var n=wr;for(De=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wr=null,Dc=!1}catch(i){throw wr!==null&&(wr=wr.slice(t+1)),L_($f,Pi),i}finally{De=e,zd=!1}}return null}var $s=[],Hs=0,Wu=null,qu=0,En=[],Tn=0,ns=null,Tr=1,Ir="";function Ui(t,e){$s[Hs++]=qu,$s[Hs++]=Wu,Wu=t,qu=e}function d0(t,e,n){En[Tn++]=Tr,En[Tn++]=Ir,En[Tn++]=ns,ns=t;var r=Tr;t=Ir;var i=32-Hn(r)-1;r&=~(1<<i),n+=1;var s=32-Hn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tr=1<<32-Hn(e)+i|n<<i|r,Ir=s+t}else Tr=1<<s|n<<i|r,Ir=t}function Jf(t){t.return!==null&&(Ui(t,1),d0(t,1,0))}function Zf(t){for(;t===Wu;)Wu=$s[--Hs],$s[Hs]=null,qu=$s[--Hs],$s[Hs]=null;for(;t===ns;)ns=En[--Tn],En[Tn]=null,Ir=En[--Tn],En[Tn]=null,Tr=En[--Tn],En[Tn]=null}var pn=null,hn=null,He=!1,$n=null;function h0(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=di(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ns!==null?{id:Tr,overflow:Ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function zh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bh(t){if(He){var e=hn;if(e){var n=e;if(!Vg(t,e)){if(zh(t))throw Error(H(418));e=di(n.nextSibling);var r=pn;e&&Vg(t,e)?h0(r,n):(t.flags=t.flags&-4097|2,He=!1,pn=t)}}else{if(zh(t))throw Error(H(418));t.flags=t.flags&-4097|2,He=!1,pn=t}}}function Fg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function tu(t){if(t!==pn)return!1;if(!He)return Fg(t),He=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vh(t.type,t.memoizedProps)),e&&(e=hn)){if(zh(t))throw f0(),Error(H(418));for(;e;)h0(t,e),e=di(e.nextSibling)}if(Fg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=di(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?di(t.stateNode.nextSibling):null;return!0}function f0(){for(var t=hn;t;)t=di(t.nextSibling)}function ao(){hn=pn=null,He=!1}function ep(t){$n===null?$n=[t]:$n.push(t)}var $1=Vr.ReactCurrentBatchConfig;function Jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function nu(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jg(t){var e=t._init;return e(t._payload)}function p0(t){function e(S,_){if(t){var A=S.deletions;A===null?(S.deletions=[_],S.flags|=16):A.push(_)}}function n(S,_){if(!t)return null;for(;_!==null;)e(S,_),_=_.sibling;return null}function r(S,_){for(S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function i(S,_){return S=mi(S,_),S.index=0,S.sibling=null,S}function s(S,_,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<_?(S.flags|=2,_):A):(S.flags|=2,_)):(S.flags|=1048576,_)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,_,A,V){return _===null||_.tag!==6?(_=Gd(A,S.mode,V),_.return=S,_):(_=i(_,A),_.return=S,_)}function u(S,_,A,V){var z=A.type;return z===Vs?h(S,_,A.props.children,V,A.key):_!==null&&(_.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Jr&&jg(z)===_.type)?(V=i(_,A.props),V.ref=Jo(S,_,A),V.return=S,V):(V=Iu(A.type,A.key,A.props,null,S.mode,V),V.ref=Jo(S,_,A),V.return=S,V)}function c(S,_,A,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=Qd(A,S.mode,V),_.return=S,_):(_=i(_,A.children||[]),_.return=S,_)}function h(S,_,A,V,z){return _===null||_.tag!==7?(_=Zi(A,S.mode,V,z),_.return=S,_):(_=i(_,A),_.return=S,_)}function p(S,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Gd(""+_,S.mode,A),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wl:return A=Iu(_.type,_.key,_.props,null,S.mode,A),A.ref=Jo(S,null,_),A.return=S,A;case Ms:return _=Qd(_,S.mode,A),_.return=S,_;case Jr:var V=_._init;return p(S,V(_._payload),A)}if(la(_)||Ko(_))return _=Zi(_,S.mode,A,null),_.return=S,_;nu(S,_)}return null}function m(S,_,A,V){var z=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return z!==null?null:l(S,_,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Wl:return A.key===z?u(S,_,A,V):null;case Ms:return A.key===z?c(S,_,A,V):null;case Jr:return z=A._init,m(S,_,z(A._payload),V)}if(la(A)||Ko(A))return z!==null?null:h(S,_,A,V,null);nu(S,A)}return null}function T(S,_,A,V,z){if(typeof V=="string"&&V!==""||typeof V=="number")return S=S.get(A)||null,l(_,S,""+V,z);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Wl:return S=S.get(V.key===null?A:V.key)||null,u(_,S,V,z);case Ms:return S=S.get(V.key===null?A:V.key)||null,c(_,S,V,z);case Jr:var N=V._init;return T(S,_,A,N(V._payload),z)}if(la(V)||Ko(V))return S=S.get(A)||null,h(_,S,V,z,null);nu(_,V)}return null}function C(S,_,A,V){for(var z=null,N=null,E=_,y=_=0,v=null;E!==null&&y<A.length;y++){E.index>y?(v=E,E=null):v=E.sibling;var R=m(S,E,A[y],V);if(R===null){E===null&&(E=v);break}t&&E&&R.alternate===null&&e(S,E),_=s(R,_,y),N===null?z=R:N.sibling=R,N=R,E=v}if(y===A.length)return n(S,E),He&&Ui(S,y),z;if(E===null){for(;y<A.length;y++)E=p(S,A[y],V),E!==null&&(_=s(E,_,y),N===null?z=E:N.sibling=E,N=E);return He&&Ui(S,y),z}for(E=r(S,E);y<A.length;y++)v=T(E,S,y,A[y],V),v!==null&&(t&&v.alternate!==null&&E.delete(v.key===null?y:v.key),_=s(v,_,y),N===null?z=v:N.sibling=v,N=v);return t&&E.forEach(function(P){return e(S,P)}),He&&Ui(S,y),z}function k(S,_,A,V){var z=Ko(A);if(typeof z!="function")throw Error(H(150));if(A=z.call(A),A==null)throw Error(H(151));for(var N=z=null,E=_,y=_=0,v=null,R=A.next();E!==null&&!R.done;y++,R=A.next()){E.index>y?(v=E,E=null):v=E.sibling;var P=m(S,E,R.value,V);if(P===null){E===null&&(E=v);break}t&&E&&P.alternate===null&&e(S,E),_=s(P,_,y),N===null?z=P:N.sibling=P,N=P,E=v}if(R.done)return n(S,E),He&&Ui(S,y),z;if(E===null){for(;!R.done;y++,R=A.next())R=p(S,R.value,V),R!==null&&(_=s(R,_,y),N===null?z=R:N.sibling=R,N=R);return He&&Ui(S,y),z}for(E=r(S,E);!R.done;y++,R=A.next())R=T(E,S,y,R.value,V),R!==null&&(t&&R.alternate!==null&&E.delete(R.key===null?y:R.key),_=s(R,_,y),N===null?z=R:N.sibling=R,N=R);return t&&E.forEach(function(b){return e(S,b)}),He&&Ui(S,y),z}function O(S,_,A,V){if(typeof A=="object"&&A!==null&&A.type===Vs&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Wl:e:{for(var z=A.key,N=_;N!==null;){if(N.key===z){if(z=A.type,z===Vs){if(N.tag===7){n(S,N.sibling),_=i(N,A.props.children),_.return=S,S=_;break e}}else if(N.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Jr&&jg(z)===N.type){n(S,N.sibling),_=i(N,A.props),_.ref=Jo(S,N,A),_.return=S,S=_;break e}n(S,N);break}else e(S,N);N=N.sibling}A.type===Vs?(_=Zi(A.props.children,S.mode,V,A.key),_.return=S,S=_):(V=Iu(A.type,A.key,A.props,null,S.mode,V),V.ref=Jo(S,_,A),V.return=S,S=V)}return o(S);case Ms:e:{for(N=A.key;_!==null;){if(_.key===N)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(S,_.sibling),_=i(_,A.children||[]),_.return=S,S=_;break e}else{n(S,_);break}else e(S,_);_=_.sibling}_=Qd(A,S.mode,V),_.return=S,S=_}return o(S);case Jr:return N=A._init,O(S,_,N(A._payload),V)}if(la(A))return C(S,_,A,V);if(Ko(A))return k(S,_,A,V);nu(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(S,_.sibling),_=i(_,A),_.return=S,S=_):(n(S,_),_=Gd(A,S.mode,V),_.return=S,S=_),o(S)):n(S,_)}return O}var lo=p0(!0),m0=p0(!1),Ku=Ai(null),Gu=null,Ws=null,tp=null;function np(){tp=Ws=Gu=null}function rp(t){var e=Ku.current;Be(Ku),t._currentValue=e}function $h(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){Gu=t,tp=Ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(tp!==t)if(t={context:t,memoizedValue:e,next:null},Ws===null){if(Gu===null)throw Error(H(308));Ws=t,Gu.dependencies={lanes:0,firstContext:t}}else Ws=Ws.next=t;return e}var Wi=null;function ip(t){Wi===null?Wi=[t]:Wi.push(t)}function g0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ip(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dr(t,r)}function Dr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zr=!1;function sp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dr(t,n)}return i=r.interleaved,i===null?(e.next=e,ip(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dr(t,n)}function yu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hf(t,n)}}function Ug(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qu(t,e,n,r){var i=t.updateQueue;Zr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,h=c=u=null,l=s;do{var m=l.lane,T=l.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,k=l;switch(m=e,T=n,k.tag){case 1:if(C=k.payload,typeof C=="function"){p=C.call(T,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=k.payload,m=typeof C=="function"?C.call(T,p,m):C,m==null)break e;p=Qe({},p,m);break e;case 2:Zr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else T={eventTime:T,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=T,u=p):h=h.next=T,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);is|=o,t.lanes=o,t.memoizedState=p}}function zg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var gl={},nr=Ai(gl),Wa=Ai(gl),qa=Ai(gl);function qi(t){if(t===gl)throw Error(H(174));return t}function op(t,e){switch(Me(qa,e),Me(Wa,t),Me(nr,gl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ih(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ih(e,t)}Be(nr),Me(nr,e)}function uo(){Be(nr),Be(Wa),Be(qa)}function v0(t){qi(qa.current);var e=qi(nr.current),n=Ih(e,t.type);e!==n&&(Me(Wa,t),Me(nr,n))}function ap(t){Wa.current===t&&(Be(nr),Be(Wa))}var Ke=Ai(0);function Yu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bd=[];function lp(){for(var t=0;t<Bd.length;t++)Bd[t]._workInProgressVersionPrimary=null;Bd.length=0}var vu=Vr.ReactCurrentDispatcher,$d=Vr.ReactCurrentBatchConfig,rs=0,Ge=null,dt=null,yt=null,Xu=!1,Ia=!1,Ka=0,H1=0;function Ot(){throw Error(H(321))}function up(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function cp(t,e,n,r,i,s){if(rs=s,Ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vu.current=t===null||t.memoizedState===null?G1:Q1,t=n(r,i),Ia){s=0;do{if(Ia=!1,Ka=0,25<=s)throw Error(H(301));s+=1,yt=dt=null,e.updateQueue=null,vu.current=Y1,t=n(r,i)}while(Ia)}if(vu.current=Ju,e=dt!==null&&dt.next!==null,rs=0,yt=dt=Ge=null,Xu=!1,e)throw Error(H(300));return t}function dp(){var t=Ka!==0;return Ka=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Ge.memoizedState=yt=t:yt=yt.next=t,yt}function Cn(){if(dt===null){var t=Ge.alternate;t=t!==null?t.memoizedState:null}else t=dt.next;var e=yt===null?Ge.memoizedState:yt.next;if(e!==null)yt=e,dt=t;else{if(t===null)throw Error(H(310));dt=t,t={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},yt===null?Ge.memoizedState=yt=t:yt=yt.next=t}return yt}function Ga(t,e){return typeof e=="function"?e(t):e}function Hd(t){var e=Cn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=dt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var h=c.lane;if((rs&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ge.lanes|=h,is|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Kn(r,e.memoizedState)||(Zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ge.lanes|=s,is|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wd(t){var e=Cn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function _0(){}function w0(t,e){var n=Ge,r=Cn(),i=e(),s=!Kn(r.memoizedState,i);if(s&&(r.memoizedState=i,Zt=!0),r=r.queue,hp(I0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,Qa(9,T0.bind(null,n,r,i,e),void 0,null),vt===null)throw Error(H(349));rs&30||E0(n,e,i)}return i}function E0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ge.updateQueue,e===null?(e={lastEffect:null,stores:null},Ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function T0(t,e,n,r){e.value=n,e.getSnapshot=r,S0(e)&&R0(t)}function I0(t,e,n){return n(function(){S0(e)&&R0(t)})}function S0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function R0(t){var e=Dr(t,1);e!==null&&Wn(e,t,1,-1)}function Bg(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},e.queue=t,t=t.dispatch=K1.bind(null,Ge,t),[e.memoizedState,t]}function Qa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ge.updateQueue,e===null?(e={lastEffect:null,stores:null},Ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function A0(){return Cn().memoizedState}function _u(t,e,n,r){var i=Zn();Ge.flags|=t,i.memoizedState=Qa(1|e,n,void 0,r===void 0?null:r)}function bc(t,e,n,r){var i=Cn();r=r===void 0?null:r;var s=void 0;if(dt!==null){var o=dt.memoizedState;if(s=o.destroy,r!==null&&up(r,o.deps)){i.memoizedState=Qa(e,n,s,r);return}}Ge.flags|=t,i.memoizedState=Qa(1|e,n,s,r)}function $g(t,e){return _u(8390656,8,t,e)}function hp(t,e){return bc(2048,8,t,e)}function P0(t,e){return bc(4,2,t,e)}function C0(t,e){return bc(4,4,t,e)}function k0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function x0(t,e,n){return n=n!=null?n.concat([t]):null,bc(4,4,k0.bind(null,e,t),n)}function fp(){}function N0(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&up(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function D0(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&up(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function b0(t,e,n){return rs&21?(Kn(n,e)||(n=F_(),Ge.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function W1(t,e){var n=De;De=n!==0&&4>n?n:4,t(!0);var r=$d.transition;$d.transition={};try{t(!1),e()}finally{De=n,$d.transition=r}}function O0(){return Cn().memoizedState}function q1(t,e,n){var r=pi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},L0(t))M0(e,n);else if(n=g0(t,e,n,r),n!==null){var i=qt();Wn(n,t,r,i),V0(n,e,r)}}function K1(t,e,n){var r=pi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(L0(t))M0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Kn(l,o)){var u=e.interleaved;u===null?(i.next=i,ip(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=g0(t,e,i,r),n!==null&&(i=qt(),Wn(n,t,r,i),V0(n,e,r))}}function L0(t){var e=t.alternate;return t===Ge||e!==null&&e===Ge}function M0(t,e){Ia=Xu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function V0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hf(t,n)}}var Ju={readContext:Pn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},G1={readContext:Pn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:$g,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_u(4194308,4,k0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _u(4194308,4,t,e)},useInsertionEffect:function(t,e){return _u(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=q1.bind(null,Ge,t),[r.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:Bg,useDebugValue:fp,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Bg(!1),e=t[0];return t=W1.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ge,i=Zn();if(He){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),vt===null)throw Error(H(349));rs&30||E0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$g(I0.bind(null,r,s,t),[t]),r.flags|=2048,Qa(9,T0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=vt.identifierPrefix;if(He){var n=Ir,r=Tr;n=(r&~(1<<32-Hn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=H1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Q1={readContext:Pn,useCallback:N0,useContext:Pn,useEffect:hp,useImperativeHandle:x0,useInsertionEffect:P0,useLayoutEffect:C0,useMemo:D0,useReducer:Hd,useRef:A0,useState:function(){return Hd(Ga)},useDebugValue:fp,useDeferredValue:function(t){var e=Cn();return b0(e,dt.memoizedState,t)},useTransition:function(){var t=Hd(Ga)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:_0,useSyncExternalStore:w0,useId:O0,unstable_isNewReconciler:!1},Y1={readContext:Pn,useCallback:N0,useContext:Pn,useEffect:hp,useImperativeHandle:x0,useInsertionEffect:P0,useLayoutEffect:C0,useMemo:D0,useReducer:Wd,useRef:A0,useState:function(){return Wd(Ga)},useDebugValue:fp,useDeferredValue:function(t){var e=Cn();return dt===null?e.memoizedState=t:b0(e,dt.memoizedState,t)},useTransition:function(){var t=Wd(Ga)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:_0,useSyncExternalStore:w0,useId:O0,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=Qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Oc={isMounted:function(t){return(t=t._reactInternals)?ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qt(),i=pi(t),s=Pr(r,i);s.payload=e,n!=null&&(s.callback=n),e=hi(t,s,i),e!==null&&(Wn(e,t,i,r),yu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qt(),i=pi(t),s=Pr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hi(t,s,i),e!==null&&(Wn(e,t,i,r),yu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),r=pi(t),i=Pr(n,r);i.tag=2,e!=null&&(i.callback=e),e=hi(t,i,r),e!==null&&(Wn(e,t,r,n),yu(e,t,r))}};function Hg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!za(n,r)||!za(i,s):!0}function F0(t,e,n){var r=!1,i=_i,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(i=tn(e)?ts:zt.current,r=e.contextTypes,s=(r=r!=null)?oo(t,i):_i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Oc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Oc.enqueueReplaceState(e,e.state,null)}function Wh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},sp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Pn(s):(s=tn(e)?ts:zt.current,i.context=oo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Oc.enqueueReplaceState(i,i.state,null),Qu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function co(t,e){try{var n="",r=e;do n+=SS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function qd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var X1=typeof WeakMap=="function"?WeakMap:Map;function j0(t,e,n){n=Pr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ec||(ec=!0,nf=r),qh(t,e)},n}function U0(t,e,n){n=Pr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qh(t,e),typeof r!="function"&&(fi===null?fi=new Set([this]):fi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new X1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dR.bind(null,t,e,n),e.then(t,t))}function Kg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pr(-1,1),e.tag=2,hi(n,e,1))),n.lanes|=1),t)}var J1=Vr.ReactCurrentOwner,Zt=!1;function Wt(t,e,n,r){e.child=t===null?m0(e,null,n,r):lo(e,t.child,n,r)}function Qg(t,e,n,r,i){n=n.render;var s=e.ref;return Js(e,i),r=cp(t,e,n,r,s,i),n=dp(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,br(t,e,i)):(He&&n&&Jf(e),e.flags|=1,Wt(t,e,r,i),e.child)}function Yg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ep(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,z0(t,e,s,r,i)):(t=Iu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:za,n(o,r)&&t.ref===e.ref)return br(t,e,i)}return e.flags|=1,t=mi(s,r),t.ref=e.ref,t.return=e,e.child=t}function z0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(za(s,r)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,br(t,e,i)}return Kh(t,e,n,r,i)}function B0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Ks,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Me(Ks,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Me(Ks,cn),cn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Me(Ks,cn),cn|=r;return Wt(t,e,i,n),e.child}function $0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kh(t,e,n,r,i){var s=tn(n)?ts:zt.current;return s=oo(e,s),Js(e,i),n=cp(t,e,n,r,s,i),r=dp(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,br(t,e,i)):(He&&r&&Jf(e),e.flags|=1,Wt(t,e,n,i),e.child)}function Xg(t,e,n,r,i){if(tn(n)){var s=!0;Hu(e)}else s=!1;if(Js(e,i),e.stateNode===null)wu(t,e),F0(e,n,r),Wh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pn(c):(c=tn(n)?ts:zt.current,c=oo(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Wg(e,o,r,c),Zr=!1;var m=e.memoizedState;o.state=m,Qu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||en.current||Zr?(typeof h=="function"&&(Hh(e,n,h,r),u=e.memoizedState),(l=Zr||Hg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,y0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Un(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pn(u):(u=tn(n)?ts:zt.current,u=oo(e,u));var T=n.getDerivedStateFromProps;(h=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Wg(e,o,r,u),Zr=!1,m=e.memoizedState,o.state=m,Qu(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||en.current||Zr?(typeof T=="function"&&(Hh(e,n,T,r),C=e.memoizedState),(c=Zr||Hg(e,n,c,r,m,C,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Gh(t,e,n,r,s,i)}function Gh(t,e,n,r,i,s){$0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mg(e,n,!1),br(t,e,s);r=e.stateNode,J1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=lo(e,t.child,null,s),e.child=lo(e,null,l,s)):Wt(t,e,l,s),e.memoizedState=r.state,i&&Mg(e,n,!0),e.child}function H0(t){var e=t.stateNode;e.pendingContext?Lg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lg(t,e.context,!1),op(t,e.containerInfo)}function Jg(t,e,n,r,i){return ao(),ep(i),e.flags|=256,Wt(t,e,n,r),e.child}var Qh={dehydrated:null,treeContext:null,retryLane:0};function Yh(t){return{baseLanes:t,cachePool:null,transitions:null}}function W0(t,e,n){var r=e.pendingProps,i=Ke.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Me(Ke,i&1),t===null)return Bh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vc(o,r,0,null),t=Zi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yh(n),e.memoizedState=Qh,t):pp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Z1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=mi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=mi(l,s):(s=Zi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Yh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qh,r}return s=t.child,t=s.sibling,r=mi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function pp(t,e){return e=Vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ru(t,e,n,r){return r!==null&&ep(r),lo(e,t.child,null,n),t=pp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Z1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=qd(Error(H(422))),ru(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Vc({mode:"visible",children:r.children},i,0,null),s=Zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&lo(e,t.child,null,o),e.child.memoizedState=Yh(o),e.memoizedState=Qh,s);if(!(e.mode&1))return ru(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(H(419)),r=qd(s,r,void 0),ru(t,e,o,r)}if(l=(o&t.childLanes)!==0,Zt||l){if(r=vt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dr(t,i),Wn(r,t,i,-1))}return wp(),r=qd(Error(H(421))),ru(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,hn=di(i.nextSibling),pn=e,He=!0,$n=null,t!==null&&(En[Tn++]=Tr,En[Tn++]=Ir,En[Tn++]=ns,Tr=t.id,Ir=t.overflow,ns=e),e=pp(e,r.children),e.flags|=4096,e)}function Zg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$h(t.return,e,n)}function Kd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function q0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Wt(t,e,r.children,n),r=Ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zg(t,n,e);else if(t.tag===19)Zg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Me(Ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Kd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Kd(e,!0,n,null,s);break;case"together":Kd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=mi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eR(t,e,n){switch(e.tag){case 3:H0(e),ao();break;case 5:v0(e);break;case 1:tn(e.type)&&Hu(e);break;case 4:op(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Me(Ku,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Me(Ke,Ke.current&1),e.flags|=128,null):n&e.child.childLanes?W0(t,e,n):(Me(Ke,Ke.current&1),t=br(t,e,n),t!==null?t.sibling:null);Me(Ke,Ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return q0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(Ke,Ke.current),r)break;return null;case 22:case 23:return e.lanes=0,B0(t,e,n)}return br(t,e,n)}var K0,Xh,G0,Q0;K0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xh=function(){};G0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,qi(nr.current);var s=null;switch(n){case"input":i=_h(t,i),r=_h(t,r),s=[];break;case"select":i=Qe({},i,{value:void 0}),r=Qe({},r,{value:void 0}),s=[];break;case"textarea":i=Th(t,i),r=Th(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bu)}Sh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ze("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Q0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zo(t,e){if(!He)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tR(t,e,n){var r=e.pendingProps;switch(Zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(e),null;case 1:return tn(e.type)&&$u(),Lt(e),null;case 3:return r=e.stateNode,uo(),Be(en),Be(zt),lp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(tu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(of($n),$n=null))),Xh(t,e),Lt(e),null;case 5:ap(e);var i=qi(qa.current);if(n=e.type,t!==null&&e.stateNode!=null)G0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Lt(e),null}if(t=qi(nr.current),tu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[er]=e,r[Ha]=s,t=(e.mode&1)!==0,n){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(i=0;i<ca.length;i++)ze(ca[i],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":lg(r,s),ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ze("invalid",r);break;case"textarea":cg(r,s),ze("invalid",r)}Sh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&eu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&eu(r.textContent,l,t),i=["children",""+l]):Oa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ze("scroll",r)}switch(n){case"input":ql(r),ug(r,s,!0);break;case"textarea":ql(r),dg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Bu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=I_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[er]=e,t[Ha]=r,K0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rh(n,r),n){case"dialog":ze("cancel",t),ze("close",t),i=r;break;case"iframe":case"object":case"embed":ze("load",t),i=r;break;case"video":case"audio":for(i=0;i<ca.length;i++)ze(ca[i],t);i=r;break;case"source":ze("error",t),i=r;break;case"img":case"image":case"link":ze("error",t),ze("load",t),i=r;break;case"details":ze("toggle",t),i=r;break;case"input":lg(t,r),i=_h(t,r),ze("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Qe({},r,{value:void 0}),ze("invalid",t);break;case"textarea":cg(t,r),i=Th(t,r),ze("invalid",t);break;default:i=r}Sh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?A_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&S_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&La(t,u):typeof u=="number"&&La(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ze("scroll",t):u!=null&&Ff(t,s,u,o))}switch(n){case"input":ql(t),ug(t,r,!1);break;case"textarea":ql(t),dg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Bu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Lt(e),null;case 6:if(t&&e.stateNode!=null)Q0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=qi(qa.current),qi(nr.current),tu(e)){if(r=e.stateNode,n=e.memoizedProps,r[er]=e,(s=r.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:eu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&eu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[er]=e,e.stateNode=r}return Lt(e),null;case 13:if(Be(Ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(He&&hn!==null&&e.mode&1&&!(e.flags&128))f0(),ao(),e.flags|=98560,s=!1;else if(s=tu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[er]=e}else ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Lt(e),s=!1}else $n!==null&&(of($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ke.current&1?ft===0&&(ft=3):wp())),e.updateQueue!==null&&(e.flags|=4),Lt(e),null);case 4:return uo(),Xh(t,e),t===null&&Ba(e.stateNode.containerInfo),Lt(e),null;case 10:return rp(e.type._context),Lt(e),null;case 17:return tn(e.type)&&$u(),Lt(e),null;case 19:if(Be(Ke),s=e.memoizedState,s===null)return Lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zo(s,!1);else{if(ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yu(t),o!==null){for(e.flags|=128,Zo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Me(Ke,Ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&ot()>ho&&(e.flags|=128,r=!0,Zo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!He)return Lt(e),null}else 2*ot()-s.renderingStartTime>ho&&n!==1073741824&&(e.flags|=128,r=!0,Zo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ot(),e.sibling=null,n=Ke.current,Me(Ke,r?n&1|2:n&1),e):(Lt(e),null);case 22:case 23:return _p(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?cn&1073741824&&(Lt(e),e.subtreeFlags&6&&(e.flags|=8192)):Lt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function nR(t,e){switch(Zf(e),e.tag){case 1:return tn(e.type)&&$u(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return uo(),Be(en),Be(zt),lp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ap(e),null;case 13:if(Be(Ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Be(Ke),null;case 4:return uo(),null;case 10:return rp(e.type._context),null;case 22:case 23:return _p(),null;case 24:return null;default:return null}}var iu=!1,Ft=!1,rR=typeof WeakSet=="function"?WeakSet:Set,Q=null;function qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){nt(t,e,r)}else n.current=null}function Jh(t,e,n){try{n()}catch(r){nt(t,e,r)}}var ey=!1;function iR(t,e){if(Lh=ju,t=e0(),Xf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,h=0,p=t,m=null;t:for(;;){for(var T;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(T=p.firstChild)!==null;)m=p,p=T;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++h===r&&(u=o),(T=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mh={focusedElem:t,selectionRange:n},ju=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var k=C.memoizedProps,O=C.memoizedState,S=e.stateNode,_=S.getSnapshotBeforeUpdate(e.elementType===e.type?k:Un(e.type,k),O);S.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(V){nt(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return C=ey,ey=!1,C}function Sa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jh(e,n,s)}i=i.next}while(i!==r)}}function Lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Y0(t){var e=t.alternate;e!==null&&(t.alternate=null,Y0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[er],delete e[Ha],delete e[jh],delete e[U1],delete e[z1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function X0(t){return t.tag===5||t.tag===3||t.tag===4}function ty(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||X0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ef(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bu));else if(r!==4&&(t=t.child,t!==null))for(ef(t,e,n),t=t.sibling;t!==null;)ef(t,e,n),t=t.sibling}function tf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}var It=null,zn=!1;function Qr(t,e,n){for(n=n.child;n!==null;)J0(t,e,n),n=n.sibling}function J0(t,e,n){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(Pc,n)}catch{}switch(n.tag){case 5:Ft||qs(n,e);case 6:var r=It,i=zn;It=null,Qr(t,e,n),It=r,zn=i,It!==null&&(zn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(zn?(t=It,n=n.stateNode,t.nodeType===8?Ud(t.parentNode,n):t.nodeType===1&&Ud(t,n),ja(t)):Ud(It,n.stateNode));break;case 4:r=It,i=zn,It=n.stateNode.containerInfo,zn=!0,Qr(t,e,n),It=r,zn=i;break;case 0:case 11:case 14:case 15:if(!Ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jh(n,e,o),i=i.next}while(i!==r)}Qr(t,e,n);break;case 1:if(!Ft&&(qs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){nt(n,e,l)}Qr(t,e,n);break;case 21:Qr(t,e,n);break;case 22:n.mode&1?(Ft=(r=Ft)||n.memoizedState!==null,Qr(t,e,n),Ft=r):Qr(t,e,n);break;default:Qr(t,e,n)}}function ny(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rR),e.forEach(function(r){var i=fR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:It=l.stateNode,zn=!1;break e;case 3:It=l.stateNode.containerInfo,zn=!0;break e;case 4:It=l.stateNode.containerInfo,zn=!0;break e}l=l.return}if(It===null)throw Error(H(160));J0(s,o,i),It=null,zn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){nt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Z0(e,t),e=e.sibling}function Z0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),Jn(t),r&4){try{Sa(3,t,t.return),Lc(3,t)}catch(k){nt(t,t.return,k)}try{Sa(5,t,t.return)}catch(k){nt(t,t.return,k)}}break;case 1:jn(e,t),Jn(t),r&512&&n!==null&&qs(n,n.return);break;case 5:if(jn(e,t),Jn(t),r&512&&n!==null&&qs(n,n.return),t.flags&32){var i=t.stateNode;try{La(i,"")}catch(k){nt(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&E_(i,s),Rh(l,o);var c=Rh(l,s);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?A_(i,p):h==="dangerouslySetInnerHTML"?S_(i,p):h==="children"?La(i,p):Ff(i,h,p,c)}switch(l){case"input":wh(i,s);break;case"textarea":T_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Gs(i,!!s.multiple,T,!1):m!==!!s.multiple&&(s.defaultValue!=null?Gs(i,!!s.multiple,s.defaultValue,!0):Gs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ha]=s}catch(k){nt(t,t.return,k)}}break;case 6:if(jn(e,t),Jn(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){nt(t,t.return,k)}}break;case 3:if(jn(e,t),Jn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ja(e.containerInfo)}catch(k){nt(t,t.return,k)}break;case 4:jn(e,t),Jn(t);break;case 13:jn(e,t),Jn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yp=ot())),r&4&&ny(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ft=(c=Ft)||h,jn(e,t),Ft=c):jn(e,t),Jn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Q=t,h=t.child;h!==null;){for(p=Q=h;Q!==null;){switch(m=Q,T=m.child,m.tag){case 0:case 11:case 14:case 15:Sa(4,m,m.return);break;case 1:qs(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(k){nt(r,n,k)}}break;case 5:qs(m,m.return);break;case 22:if(m.memoizedState!==null){iy(p);continue}}T!==null?(T.return=m,Q=T):iy(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=R_("display",o))}catch(k){nt(t,t.return,k)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){nt(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:jn(e,t),Jn(t),r&4&&ny(t);break;case 21:break;default:jn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(X0(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(La(i,""),r.flags&=-33);var s=ty(t);tf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ty(t);ef(t,l,o);break;default:throw Error(H(161))}}catch(u){nt(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sR(t,e,n){Q=t,ew(t)}function ew(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||iu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ft;l=iu;var c=Ft;if(iu=o,(Ft=u)&&!c)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?sy(i):u!==null?(u.return=o,Q=u):sy(i);for(;s!==null;)Q=s,ew(s),s=s.sibling;Q=i,iu=l,Ft=c}ry(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):ry(t)}}function ry(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ft||Lc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ja(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Ft||e.flags&512&&Zh(e)}catch(m){nt(e,e.return,m)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function iy(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function sy(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lc(4,e)}catch(u){nt(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){nt(e,i,u)}}var s=e.return;try{Zh(e)}catch(u){nt(e,s,u)}break;case 5:var o=e.return;try{Zh(e)}catch(u){nt(e,o,u)}}}catch(u){nt(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var oR=Math.ceil,Zu=Vr.ReactCurrentDispatcher,mp=Vr.ReactCurrentOwner,Rn=Vr.ReactCurrentBatchConfig,Se=0,vt=null,ct=null,At=0,cn=0,Ks=Ai(0),ft=0,Ya=null,is=0,Mc=0,gp=0,Ra=null,Xt=null,yp=0,ho=1/0,_r=null,ec=!1,nf=null,fi=null,su=!1,oi=null,tc=0,Aa=0,rf=null,Eu=-1,Tu=0;function qt(){return Se&6?ot():Eu!==-1?Eu:Eu=ot()}function pi(t){return t.mode&1?Se&2&&At!==0?At&-At:$1.transition!==null?(Tu===0&&(Tu=F_()),Tu):(t=De,t!==0||(t=window.event,t=t===void 0?16:W_(t.type)),t):1}function Wn(t,e,n,r){if(50<Aa)throw Aa=0,rf=null,Error(H(185));fl(t,n,r),(!(Se&2)||t!==vt)&&(t===vt&&(!(Se&2)&&(Mc|=n),ft===4&&ti(t,At)),nn(t,r),n===1&&Se===0&&!(e.mode&1)&&(ho=ot()+500,Dc&&Pi()))}function nn(t,e){var n=t.callbackNode;$S(t,e);var r=Fu(t,t===vt?At:0);if(r===0)n!==null&&pg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pg(n),e===1)t.tag===0?B1(oy.bind(null,t)):c0(oy.bind(null,t)),F1(function(){!(Se&6)&&Pi()}),n=null;else{switch(j_(r)){case 1:n=$f;break;case 4:n=M_;break;case 16:n=Vu;break;case 536870912:n=V_;break;default:n=Vu}n=lw(n,tw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tw(t,e){if(Eu=-1,Tu=0,Se&6)throw Error(H(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var r=Fu(t,t===vt?At:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nc(t,r);else{e=r;var i=Se;Se|=2;var s=rw();(vt!==t||At!==e)&&(_r=null,ho=ot()+500,Ji(t,e));do try{uR();break}catch(l){nw(t,l)}while(!0);np(),Zu.current=s,Se=i,ct!==null?e=0:(vt=null,At=0,e=ft)}if(e!==0){if(e===2&&(i=xh(t),i!==0&&(r=i,e=sf(t,i))),e===1)throw n=Ya,Ji(t,0),ti(t,r),nn(t,ot()),n;if(e===6)ti(t,r);else{if(i=t.current.alternate,!(r&30)&&!aR(i)&&(e=nc(t,r),e===2&&(s=xh(t),s!==0&&(r=s,e=sf(t,s))),e===1))throw n=Ya,Ji(t,0),ti(t,r),nn(t,ot()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:zi(t,Xt,_r);break;case 3:if(ti(t,r),(r&130023424)===r&&(e=yp+500-ot(),10<e)){if(Fu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Fh(zi.bind(null,t,Xt,_r),e);break}zi(t,Xt,_r);break;case 4:if(ti(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Hn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oR(r/1960))-r,10<r){t.timeoutHandle=Fh(zi.bind(null,t,Xt,_r),r);break}zi(t,Xt,_r);break;case 5:zi(t,Xt,_r);break;default:throw Error(H(329))}}}return nn(t,ot()),t.callbackNode===n?tw.bind(null,t):null}function sf(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&(Ji(t,e).flags|=256),t=nc(t,e),t!==2&&(e=Xt,Xt=n,e!==null&&of(e)),t}function of(t){Xt===null?Xt=t:Xt.push.apply(Xt,t)}function aR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ti(t,e){for(e&=~gp,e&=~Mc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),r=1<<n;t[n]=-1,e&=~r}}function oy(t){if(Se&6)throw Error(H(327));Zs();var e=Fu(t,0);if(!(e&1))return nn(t,ot()),null;var n=nc(t,e);if(t.tag!==0&&n===2){var r=xh(t);r!==0&&(e=r,n=sf(t,r))}if(n===1)throw n=Ya,Ji(t,0),ti(t,e),nn(t,ot()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zi(t,Xt,_r),nn(t,ot()),null}function vp(t,e){var n=Se;Se|=1;try{return t(e)}finally{Se=n,Se===0&&(ho=ot()+500,Dc&&Pi())}}function ss(t){oi!==null&&oi.tag===0&&!(Se&6)&&Zs();var e=Se;Se|=1;var n=Rn.transition,r=De;try{if(Rn.transition=null,De=1,t)return t()}finally{De=r,Rn.transition=n,Se=e,!(Se&6)&&Pi()}}function _p(){cn=Ks.current,Be(Ks)}function Ji(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,V1(n)),ct!==null)for(n=ct.return;n!==null;){var r=n;switch(Zf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$u();break;case 3:uo(),Be(en),Be(zt),lp();break;case 5:ap(r);break;case 4:uo();break;case 13:Be(Ke);break;case 19:Be(Ke);break;case 10:rp(r.type._context);break;case 22:case 23:_p()}n=n.return}if(vt=t,ct=t=mi(t.current,null),At=cn=e,ft=0,Ya=null,gp=Mc=is=0,Xt=Ra=null,Wi!==null){for(e=0;e<Wi.length;e++)if(n=Wi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Wi=null}return t}function nw(t,e){do{var n=ct;try{if(np(),vu.current=Ju,Xu){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xu=!1}if(rs=0,yt=dt=Ge=null,Ia=!1,Ka=0,mp.current=null,n===null||n.return===null){ft=1,Ya=e,ct=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=At,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var T=Kg(o);if(T!==null){T.flags&=-257,Gg(T,o,l,s,e),T.mode&1&&qg(s,c,e),e=T,u=c;var C=e.updateQueue;if(C===null){var k=new Set;k.add(u),e.updateQueue=k}else C.add(u);break e}else{if(!(e&1)){qg(s,c,e),wp();break e}u=Error(H(426))}}else if(He&&l.mode&1){var O=Kg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Gg(O,o,l,s,e),ep(co(u,l));break e}}s=u=co(u,l),ft!==4&&(ft=2),Ra===null?Ra=[s]:Ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=j0(s,u,e);Ug(s,S);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(fi===null||!fi.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=U0(s,l,e);Ug(s,V);break e}}s=s.return}while(s!==null)}sw(n)}catch(z){e=z,ct===n&&n!==null&&(ct=n=n.return);continue}break}while(!0)}function rw(){var t=Zu.current;return Zu.current=Ju,t===null?Ju:t}function wp(){(ft===0||ft===3||ft===2)&&(ft=4),vt===null||!(is&268435455)&&!(Mc&268435455)||ti(vt,At)}function nc(t,e){var n=Se;Se|=2;var r=rw();(vt!==t||At!==e)&&(_r=null,Ji(t,e));do try{lR();break}catch(i){nw(t,i)}while(!0);if(np(),Se=n,Zu.current=r,ct!==null)throw Error(H(261));return vt=null,At=0,ft}function lR(){for(;ct!==null;)iw(ct)}function uR(){for(;ct!==null&&!OS();)iw(ct)}function iw(t){var e=aw(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?sw(t):ct=e,mp.current=null}function sw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nR(n,e),n!==null){n.flags&=32767,ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ft=6,ct=null;return}}else if(n=tR(n,e,cn),n!==null){ct=n;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);ft===0&&(ft=5)}function zi(t,e,n){var r=De,i=Rn.transition;try{Rn.transition=null,De=1,cR(t,e,n,r)}finally{Rn.transition=i,De=r}return null}function cR(t,e,n,r){do Zs();while(oi!==null);if(Se&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(HS(t,s),t===vt&&(ct=vt=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||su||(su=!0,lw(Vu,function(){return Zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=De;De=1;var l=Se;Se|=4,mp.current=null,iR(t,n),Z0(n,t),x1(Mh),ju=!!Lh,Mh=Lh=null,t.current=n,sR(n),LS(),Se=l,De=o,Rn.transition=s}else t.current=n;if(su&&(su=!1,oi=t,tc=i),s=t.pendingLanes,s===0&&(fi=null),FS(n.stateNode),nn(t,ot()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ec)throw ec=!1,t=nf,nf=null,t;return tc&1&&t.tag!==0&&Zs(),s=t.pendingLanes,s&1?t===rf?Aa++:(Aa=0,rf=t):Aa=0,Pi(),null}function Zs(){if(oi!==null){var t=j_(tc),e=Rn.transition,n=De;try{if(Rn.transition=null,De=16>t?16:t,oi===null)var r=!1;else{if(t=oi,oi=null,tc=0,Se&6)throw Error(H(331));var i=Se;for(Se|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Q=c;Q!==null;){var h=Q;switch(h.tag){case 0:case 11:case 15:Sa(8,h,s)}var p=h.child;if(p!==null)p.return=h,Q=p;else for(;Q!==null;){h=Q;var m=h.sibling,T=h.return;if(Y0(h),h===c){Q=null;break}if(m!==null){m.return=T,Q=m;break}Q=T}}}var C=s.alternate;if(C!==null){var k=C.child;if(k!==null){C.child=null;do{var O=k.sibling;k.sibling=null,k=O}while(k!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,Q=S;break e}Q=s.return}}var _=t.current;for(Q=_;Q!==null;){o=Q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,Q=A;else e:for(o=_;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Lc(9,l)}}catch(z){nt(l,l.return,z)}if(l===o){Q=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,Q=V;break e}Q=l.return}}if(Se=i,Pi(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(Pc,t)}catch{}r=!0}return r}finally{De=n,Rn.transition=e}}return!1}function ay(t,e,n){e=co(n,e),e=j0(t,e,1),t=hi(t,e,1),e=qt(),t!==null&&(fl(t,1,e),nn(t,e))}function nt(t,e,n){if(t.tag===3)ay(t,t,n);else for(;e!==null;){if(e.tag===3){ay(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fi===null||!fi.has(r))){t=co(n,t),t=U0(e,t,1),e=hi(e,t,1),t=qt(),e!==null&&(fl(e,1,t),nn(e,t));break}}e=e.return}}function dR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,vt===t&&(At&n)===n&&(ft===4||ft===3&&(At&130023424)===At&&500>ot()-yp?Ji(t,0):gp|=n),nn(t,e)}function ow(t,e){e===0&&(t.mode&1?(e=Ql,Ql<<=1,!(Ql&130023424)&&(Ql=4194304)):e=1);var n=qt();t=Dr(t,e),t!==null&&(fl(t,e,n),nn(t,n))}function hR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ow(t,n)}function fR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),ow(t,n)}var aw;aw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,eR(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,He&&e.flags&1048576&&d0(e,qu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wu(t,e),t=e.pendingProps;var i=oo(e,zt.current);Js(e,n),i=cp(null,e,r,t,i,n);var s=dp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(r)?(s=!0,Hu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sp(e),i.updater=Oc,e.stateNode=i,i._reactInternals=e,Wh(e,r,t,n),e=Gh(null,e,r,!0,s,n)):(e.tag=0,He&&s&&Jf(e),Wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=mR(r),t=Un(r,t),i){case 0:e=Kh(null,e,r,t,n);break e;case 1:e=Xg(null,e,r,t,n);break e;case 11:e=Qg(null,e,r,t,n);break e;case 14:e=Yg(null,e,r,Un(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),Kh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),Xg(t,e,r,i,n);case 3:e:{if(H0(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,y0(t,e),Qu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=co(Error(H(423)),e),e=Jg(t,e,r,n,i);break e}else if(r!==i){i=co(Error(H(424)),e),e=Jg(t,e,r,n,i);break e}else for(hn=di(e.stateNode.containerInfo.firstChild),pn=e,He=!0,$n=null,n=m0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),r===i){e=br(t,e,n);break e}Wt(t,e,r,n)}e=e.child}return e;case 5:return v0(e),t===null&&Bh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vh(r,i)?o=null:s!==null&&Vh(r,s)&&(e.flags|=32),$0(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&Bh(e),null;case 13:return W0(t,e,n);case 4:return op(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=lo(e,null,r,n):Wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),Qg(t,e,r,i,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Me(Ku,r._currentValue),r._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===i.children&&!en.current){e=br(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Pr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),$h(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$h(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Js(e,n),i=Pn(i),r=r(i),e.flags|=1,Wt(t,e,r,n),e.child;case 14:return r=e.type,i=Un(r,e.pendingProps),i=Un(r.type,i),Yg(t,e,r,i,n);case 15:return z0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Un(r,i),wu(t,e),e.tag=1,tn(r)?(t=!0,Hu(e)):t=!1,Js(e,n),F0(e,r,i),Wh(e,r,i,n),Gh(null,e,r,!0,t,n);case 19:return q0(t,e,n);case 22:return B0(t,e,n)}throw Error(H(156,e.tag))};function lw(t,e){return L_(t,e)}function pR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,r){return new pR(t,e,n,r)}function Ep(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mR(t){if(typeof t=="function")return Ep(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uf)return 11;if(t===zf)return 14}return 2}function mi(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Iu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ep(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vs:return Zi(n.children,i,s,e);case jf:o=8,i|=8;break;case mh:return t=In(12,n,e,i|2),t.elementType=mh,t.lanes=s,t;case gh:return t=In(13,n,e,i),t.elementType=gh,t.lanes=s,t;case yh:return t=In(19,n,e,i),t.elementType=yh,t.lanes=s,t;case v_:return Vc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g_:o=10;break e;case y_:o=9;break e;case Uf:o=11;break e;case zf:o=14;break e;case Jr:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=In(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zi(t,e,n,r){return t=In(7,t,r,e),t.lanes=n,t}function Vc(t,e,n,r){return t=In(22,t,r,e),t.elementType=v_,t.lanes=n,t.stateNode={isHidden:!1},t}function Gd(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function Qd(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kd(0),this.expirationTimes=kd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tp(t,e,n,r,i,s,o,l,u){return t=new gR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sp(s),t}function yR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function uw(t){if(!t)return _i;t=t._reactInternals;e:{if(ys(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(tn(n))return u0(t,n,e)}return e}function cw(t,e,n,r,i,s,o,l,u){return t=Tp(n,r,!0,t,i,s,o,l,u),t.context=uw(null),n=t.current,r=qt(),i=pi(n),s=Pr(r,i),s.callback=e??null,hi(n,s,i),t.current.lanes=i,fl(t,i,r),nn(t,r),t}function Fc(t,e,n,r){var i=e.current,s=qt(),o=pi(i);return n=uw(n),e.context===null?e.context=n:e.pendingContext=n,e=Pr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hi(i,e,o),t!==null&&(Wn(t,i,o,s),yu(t,i,o)),o}function rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ly(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ip(t,e){ly(t,e),(t=t.alternate)&&ly(t,e)}function vR(){return null}var dw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sp(t){this._internalRoot=t}jc.prototype.render=Sp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));Fc(t,e,null,null)};jc.prototype.unmount=Sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ss(function(){Fc(null,t,null,null)}),e[Nr]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=B_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ei.length&&e!==0&&e<ei[n].priority;n++);ei.splice(n,0,t),n===0&&H_(t)}};function Rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uy(){}function _R(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=rc(o);s.call(c)}}var o=cw(e,r,t,0,null,!1,!1,"",uy);return t._reactRootContainer=o,t[Nr]=o.current,Ba(t.nodeType===8?t.parentNode:t),ss(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=rc(u);l.call(c)}}var u=Tp(t,0,!1,null,null,!1,!1,"",uy);return t._reactRootContainer=u,t[Nr]=u.current,Ba(t.nodeType===8?t.parentNode:t),ss(function(){Fc(e,u,n,r)}),u}function zc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=rc(o);l.call(u)}}Fc(e,o,t,i)}else o=_R(n,e,t,i,r);return rc(o)}U_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ua(e.pendingLanes);n!==0&&(Hf(e,n|1),nn(e,ot()),!(Se&6)&&(ho=ot()+500,Pi()))}break;case 13:ss(function(){var r=Dr(t,1);if(r!==null){var i=qt();Wn(r,t,1,i)}}),Ip(t,1)}};Wf=function(t){if(t.tag===13){var e=Dr(t,134217728);if(e!==null){var n=qt();Wn(e,t,134217728,n)}Ip(t,134217728)}};z_=function(t){if(t.tag===13){var e=pi(t),n=Dr(t,e);if(n!==null){var r=qt();Wn(n,t,e,r)}Ip(t,e)}};B_=function(){return De};$_=function(t,e){var n=De;try{return De=t,e()}finally{De=n}};Ph=function(t,e,n){switch(e){case"input":if(wh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nc(r);if(!i)throw Error(H(90));w_(r),wh(r,i)}}}break;case"textarea":T_(t,n);break;case"select":e=n.value,e!=null&&Gs(t,!!n.multiple,e,!1)}};k_=vp;x_=ss;var wR={usingClientEntryPoint:!1,Events:[ml,zs,Nc,P_,C_,vp]},ea={findFiberByHostInstance:Hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ER={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b_(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||vR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{Pc=ou.inject(ER),tr=ou}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wR;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rp(e))throw Error(H(200));return yR(t,e,null,n)};yn.createRoot=function(t,e){if(!Rp(t))throw Error(H(299));var n=!1,r="",i=dw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Tp(t,1,!1,null,null,n,!1,r,i),t[Nr]=e.current,Ba(t.nodeType===8?t.parentNode:t),new Sp(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=b_(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return ss(t)};yn.hydrate=function(t,e,n){if(!Uc(e))throw Error(H(200));return zc(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Rp(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=dw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cw(e,null,t,1,n??null,i,!1,s,o),t[Nr]=e.current,Ba(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jc(e)};yn.render=function(t,e,n){if(!Uc(e))throw Error(H(200));return zc(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Uc(t))throw Error(H(40));return t._reactRootContainer?(ss(function(){zc(null,null,t,!1,function(){t._reactRootContainer=null,t[Nr]=null})}),!0):!1};yn.unstable_batchedUpdates=vp;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Uc(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return zc(t,e,n,!1,r)};yn.version="18.3.1-next-f1338f8080-20240426";function hw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hw)}catch(t){console.error(t)}}hw(),h_.exports=yn;var Ap=h_.exports;const TR=e_(Ap),IR=Zv({__proto__:null,default:TR},[Ap]);var cy=Ap;fh.createRoot=cy.createRoot,fh.hydrateRoot=cy.hydrateRoot;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qe(){return qe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qe.apply(this,arguments)}var lt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(lt||(lt={}));const dy="popstate";function SR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Xa("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:os(i)}return AR(e,n,null,t)}function fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fo(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function RR(){return Math.random().toString(36).substr(2,8)}function hy(t,e){return{usr:t.state,key:t.key,idx:e}}function Xa(t,e,n,r){return n===void 0&&(n=null),qe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ci(e):e,{state:n,key:e&&e.key||r||RR()})}function os(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ci(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function AR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=lt.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(qe({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){l=lt.Pop;let O=h(),S=O==null?null:O-c;c=O,u&&u({action:l,location:k.location,delta:S})}function m(O,S){l=lt.Push;let _=Xa(k.location,O,S);c=h()+1;let A=hy(_,c),V=k.createHref(_);try{o.pushState(A,"",V)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(V)}s&&u&&u({action:l,location:k.location,delta:1})}function T(O,S){l=lt.Replace;let _=Xa(k.location,O,S);c=h();let A=hy(_,c),V=k.createHref(_);o.replaceState(A,"",V),s&&u&&u({action:l,location:k.location,delta:0})}function C(O){let S=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof O=="string"?O:os(O);return _=_.replace(/ $/,"%20"),fe(S,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,S)}let k={get action(){return l},get location(){return t(i,o)},listen(O){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(dy,p),u=O,()=>{i.removeEventListener(dy,p),u=null}},createHref(O){return e(i,O)},createURL:C,encodeLocation(O){let S=C(O);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:T,go(O){return o.go(O)}};return k}var Le;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Le||(Le={}));const PR=new Set(["lazy","caseSensitive","path","id","index","children"]);function CR(t){return t.index===!0}function Ja(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],l=typeof i.id=="string"?i.id:o.join("-");if(fe(i.index!==!0||!i.children,"Cannot specify children on an index route"),fe(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),CR(i)){let u=qe({},i,e(i),{id:l});return r[l]=u,u}else{let u=qe({},i,e(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=Ja(i.children,e,o,r)),u}})}function $i(t,e,n){return n===void 0&&(n="/"),Su(t,e,n,!1)}function Su(t,e,n,r){let i=typeof e=="string"?Ci(e):e,s=Po(i.pathname||"/",n);if(s==null)return null;let o=fw(t);xR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=zR(s);l=jR(o[u],c,r)}return l}function kR(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function fw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(fe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Cr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),fw(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:VR(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of pw(s.path))i(s,o,u)}),e}function pw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=pw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function xR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const NR=/^:[\w-]+$/,DR=3,bR=2,OR=1,LR=10,MR=-2,fy=t=>t==="*";function VR(t,e){let n=t.split("/"),r=n.length;return n.some(fy)&&(r+=MR),e&&(r+=bR),n.filter(i=>!fy(i)).reduce((i,s)=>i+(NR.test(s)?DR:s===""?OR:LR),r)}function FR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jR(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",p=py({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=py({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Cr([s,p.pathname]),pathnameBase:HR(Cr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Cr([s,p.pathnameBase]))}return o}function py(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=UR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:m,isOptional:T}=h;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const C=l[p];return T&&!C?c[m]=void 0:c[m]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function UR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),fo(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function zR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fo(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Po(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function BR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ci(t):t;return{pathname:n?n.startsWith("/")?n:$R(n,e):e,search:WR(r),hash:qR(i)}}function $R(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Bc(t,e){let n=mw(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $c(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ci(t):(i=qe({},t),fe(!i.pathname||!i.pathname.includes("?"),Yd("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),Yd("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),Yd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=BR(i,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Cr=t=>t.join("/").replace(/\/\/+/g,"/"),HR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),WR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Pp{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Hc(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const gw=["post","put","patch","delete"],KR=new Set(gw),GR=["get",...gw],QR=new Set(GR),YR=new Set([301,302,303,307,308]),XR=new Set([307,308]),Xd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},JR={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ta={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Cp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ZR=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),yw="remix-router-transitions";function eA(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;fe(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let x=t.detectErrorBoundary;i=D=>({hasErrorBoundary:x(D)})}else i=ZR;let s={},o=Ja(t.routes,i,void 0,s),l,u=t.basename||"/",c=t.unstable_dataStrategy||sA,h=t.unstable_patchRoutesOnMiss,p=qe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),m=null,T=new Set,C=null,k=null,O=null,S=t.hydrationData!=null,_=$i(o,t.history.location,u),A=null;if(_==null&&!h){let x=Ht(404,{pathname:t.history.location.pathname}),{matches:D,route:M}=Sy(o);_=D,A={[M.id]:x}}_&&h&&mr(_,o,t.history.location.pathname).active&&(_=null);let V;if(!_)V=!1,_=[];else if(_.some(x=>x.route.lazy))V=!1;else if(!_.some(x=>x.route.loader))V=!0;else if(p.v7_partialHydration){let x=t.hydrationData?t.hydrationData.loaderData:null,D=t.hydrationData?t.hydrationData.errors:null,M=U=>U.route.loader?typeof U.route.loader=="function"&&U.route.loader.hydrate===!0?!1:x&&x[U.route.id]!==void 0||D&&D[U.route.id]!==void 0:!0;if(D){let U=_.findIndex(G=>D[G.route.id]!==void 0);V=_.slice(0,U+1).every(M)}else V=_.every(M)}else V=t.hydrationData!=null;let z,N={historyAction:t.history.action,location:t.history.location,matches:_,initialized:V,navigation:Xd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||A,fetchers:new Map,blockers:new Map},E=lt.Pop,y=!1,v,R=!1,P=new Map,b=null,I=!1,Ie=!1,_t=[],on=[],Re=new Map,K=0,ee=-1,ne=new Map,_e=new Set,pe=new Map,Ne=new Map,Xe=new Set,Je=new Map,Ze=new Map,ae=new Map,be=!1;function bn(){if(m=t.history.listen(x=>{let{action:D,location:M,delta:U}=x;if(be){be=!1;return}fo(Ze.size===0||U!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let G=Lo({currentLocation:N.location,nextLocation:M,historyAction:D});if(G&&U!=null){be=!0,t.history.go(U*-1),Oi(G,{state:"blocked",location:M,proceed(){Oi(G,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),t.history.go(U)},reset(){let X=new Map(N.blockers);X.set(G,ta),Fe({blockers:X})}});return}return Ce(D,M)}),n){vA(e,P);let x=()=>_A(e,P);e.addEventListener("pagehide",x),b=()=>e.removeEventListener("pagehide",x)}return N.initialized||Ce(lt.Pop,N.location,{initialHydration:!0}),z}function an(){m&&m(),b&&b(),T.clear(),v&&v.abort(),N.fetchers.forEach((x,D)=>Is(D)),N.blockers.forEach((x,D)=>Rs(D))}function wt(x){return T.add(x),()=>T.delete(x)}function Fe(x,D){D===void 0&&(D={}),N=qe({},N,x);let M=[],U=[];p.v7_fetcherPersist&&N.fetchers.forEach((G,X)=>{G.state==="idle"&&(Xe.has(X)?U.push(X):M.push(X))}),[...T].forEach(G=>G(N,{deletedFetchers:U,unstable_viewTransitionOpts:D.viewTransitionOpts,unstable_flushSync:D.flushSync===!0})),p.v7_fetcherPersist&&(M.forEach(G=>N.fetchers.delete(G)),U.forEach(G=>Is(G)))}function $t(x,D,M){var U,G;let{flushSync:X}=M===void 0?{}:M,se=N.actionData!=null&&N.navigation.formMethod!=null&&Bn(N.navigation.formMethod)&&N.navigation.state==="loading"&&((U=x.state)==null?void 0:U._isRedirect)!==!0,W;D.actionData?Object.keys(D.actionData).length>0?W=D.actionData:W=null:se?W=N.actionData:W=null;let ue=D.loaderData?Ty(N.loaderData,D.loaderData,D.matches||[],D.errors):N.loaderData,Z=N.blockers;Z.size>0&&(Z=new Map(Z),Z.forEach((we,ke)=>Z.set(ke,ta)));let J=y===!0||N.navigation.formMethod!=null&&Bn(N.navigation.formMethod)&&((G=x.state)==null?void 0:G._isRedirect)!==!0;l&&(o=l,l=void 0),I||E===lt.Pop||(E===lt.Push?t.history.push(x,x.state):E===lt.Replace&&t.history.replace(x,x.state));let me;if(E===lt.Pop){let we=P.get(N.location.pathname);we&&we.has(x.pathname)?me={currentLocation:N.location,nextLocation:x}:P.has(x.pathname)&&(me={currentLocation:x,nextLocation:N.location})}else if(R){let we=P.get(N.location.pathname);we?we.add(x.pathname):(we=new Set([x.pathname]),P.set(N.location.pathname,we)),me={currentLocation:N.location,nextLocation:x}}Fe(qe({},D,{actionData:W,loaderData:ue,historyAction:E,location:x,initialized:!0,navigation:Xd,revalidation:"idle",restoreScrollPosition:Vo(x,D.matches||N.matches),preventScrollReset:J,blockers:Z}),{viewTransitionOpts:me,flushSync:X===!0}),E=lt.Pop,y=!1,R=!1,I=!1,Ie=!1,_t=[],on=[]}async function Gn(x,D){if(typeof x=="number"){t.history.go(x);return}let M=af(N.location,N.matches,u,p.v7_prependBasename,x,p.v7_relativeSplatPath,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:U,submission:G,error:X}=my(p.v7_normalizeFormMethod,!1,M,D),se=N.location,W=Xa(N.location,U,D&&D.state);W=qe({},W,t.history.encodeLocation(W));let ue=D&&D.replace!=null?D.replace:void 0,Z=lt.Push;ue===!0?Z=lt.Replace:ue===!1||G!=null&&Bn(G.formMethod)&&G.formAction===N.location.pathname+N.location.search&&(Z=lt.Replace);let J=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,me=(D&&D.unstable_flushSync)===!0,we=Lo({currentLocation:se,nextLocation:W,historyAction:Z});if(we){Oi(we,{state:"blocked",location:W,proceed(){Oi(we,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),Gn(x,D)},reset(){let ke=new Map(N.blockers);ke.set(we,ta),Fe({blockers:ke})}});return}return await Ce(Z,W,{submission:G,pendingError:X,preventScrollReset:J,replace:D&&D.replace,enableViewTransition:D&&D.unstable_viewTransition,flushSync:me})}function re(){if(it(),Fe({revalidation:"loading"}),N.navigation.state!=="submitting"){if(N.navigation.state==="idle"){Ce(N.historyAction,N.location,{startUninterruptedRevalidation:!0});return}Ce(E||N.historyAction,N.navigation.location,{overrideNavigation:N.navigation})}}async function Ce(x,D,M){v&&v.abort(),v=null,E=x,I=(M&&M.startUninterruptedRevalidation)===!0,As(N.location,N.matches),y=(M&&M.preventScrollReset)===!0,R=(M&&M.enableViewTransition)===!0;let U=l||o,G=M&&M.overrideNavigation,X=$i(U,D,u),se=(M&&M.flushSync)===!0,W=mr(X,U,D.pathname);if(W.active&&W.matches&&(X=W.matches),!X){let{error:Ee,notFoundMatches:st,route:We}=fr(D.pathname);$t(D,{matches:st,loaderData:{},errors:{[We.id]:Ee}},{flushSync:se});return}if(N.initialized&&!Ie&&dA(N.location,D)&&!(M&&M.submission&&Bn(M.submission.formMethod))){$t(D,{matches:X},{flushSync:se});return}v=new AbortController;let ue=Ds(t.history,D,v.signal,M&&M.submission),Z;if(M&&M.pendingError)Z=[Pa(X).route.id,{type:Le.error,error:M.pendingError}];else if(M&&M.submission&&Bn(M.submission.formMethod)){let Ee=await et(ue,D,M.submission,X,W.active,{replace:M.replace,flushSync:se});if(Ee.shortCircuited)return;if(Ee.pendingActionResult){let[st,We]=Ee.pendingActionResult;if(dn(We)&&Hc(We.error)&&We.error.status===404){v=null,$t(D,{matches:Ee.matches,loaderData:{},errors:{[st]:We.error}});return}}X=Ee.matches||X,Z=Ee.pendingActionResult,G=Jd(D,M.submission),se=!1,W.active=!1,ue=Ds(t.history,ue.url,ue.signal)}let{shortCircuited:J,matches:me,loaderData:we,errors:ke}=await cr(ue,D,X,W.active,G,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,se,Z);J||(v=null,$t(D,qe({matches:me||X},Iy(Z),{loaderData:we,errors:ke})))}async function et(x,D,M,U,G,X){X===void 0&&(X={}),it();let se=gA(D,M);if(Fe({navigation:se},{flushSync:X.flushSync===!0}),G){let Z=await Mi(U,D.pathname,x.signal);if(Z.type==="aborted")return{shortCircuited:!0};if(Z.type==="error"){let{error:J,notFoundMatches:me,route:we}=Hr(D.pathname,Z);return{matches:me,pendingActionResult:[we.id,{type:Le.error,error:J}]}}else if(Z.matches)U=Z.matches;else{let{notFoundMatches:J,error:me,route:we}=fr(D.pathname);return{matches:J,pendingActionResult:[we.id,{type:Le.error,error:me}]}}}let W,ue=da(U,D);if(!ue.route.action&&!ue.route.lazy)W={type:Le.error,error:Ht(405,{method:x.method,pathname:D.pathname,routeId:ue.route.id})};else if(W=(await Qt("action",x,[ue],U))[0],x.signal.aborted)return{shortCircuited:!0};if(Gi(W)){let Z;return X&&X.replace!=null?Z=X.replace:Z=_y(W.response.headers.get("Location"),new URL(x.url),u)===N.location.pathname+N.location.search,await Qn(x,W,{submission:M,replace:Z}),{shortCircuited:!0}}if(Ki(W))throw Ht(400,{type:"defer-action"});if(dn(W)){let Z=Pa(U,ue.route.id);return(X&&X.replace)!==!0&&(E=lt.Push),{matches:U,pendingActionResult:[Z.route.id,W]}}return{matches:U,pendingActionResult:[ue.route.id,W]}}async function cr(x,D,M,U,G,X,se,W,ue,Z,J){let me=G||Jd(D,X),we=X||se||Py(me),ke=!I&&(!p.v7_partialHydration||!ue);if(U){if(ke){let je=On(J);Fe(qe({navigation:me},je!==void 0?{actionData:je}:{}),{flushSync:Z})}let he=await Mi(M,D.pathname,x.signal);if(he.type==="aborted")return{shortCircuited:!0};if(he.type==="error"){let{error:je,notFoundMatches:Nt,route:xe}=Hr(D.pathname,he);return{matches:Nt,loaderData:{},errors:{[xe.id]:je}}}else if(he.matches)M=he.matches;else{let{error:je,notFoundMatches:Nt,route:xe}=fr(D.pathname);return{matches:Nt,loaderData:{},errors:{[xe.id]:je}}}}let Ee=l||o,[st,We]=gy(t.history,N,M,we,D,p.v7_partialHydration&&ue===!0,p.unstable_skipActionErrorRevalidation,Ie,_t,on,Xe,pe,_e,Ee,u,J);if(Li(he=>!(M&&M.some(je=>je.route.id===he))||st&&st.some(je=>je.route.id===he)),ee=++K,st.length===0&&We.length===0){let he=Ss();return $t(D,qe({matches:M,loaderData:{},errors:J&&dn(J[1])?{[J[0]]:J[1].error}:null},Iy(J),he?{fetchers:new Map(N.fetchers)}:{}),{flushSync:Z}),{shortCircuited:!0}}if(ke){let he={};if(!U){he.navigation=me;let je=On(J);je!==void 0&&(he.actionData=je)}We.length>0&&(he.fetchers=dr(We)),Fe(he,{flushSync:Z})}We.forEach(he=>{Re.has(he.key)&&Mn(he.key),he.controller&&Re.set(he.key,he.controller)});let Wr=()=>We.forEach(he=>Mn(he.key));v&&v.signal.addEventListener("abort",Wr);let{loaderResults:Yn,fetcherResults:Vn}=await $e(N.matches,M,st,We,x);if(x.signal.aborted)return{shortCircuited:!0};v&&v.signal.removeEventListener("abort",Wr),We.forEach(he=>Re.delete(he.key));let gr=Ry([...Yn,...Vn]);if(gr){if(gr.idx>=st.length){let he=We[gr.idx-st.length].key;_e.add(he)}return await Qn(x,gr.result,{replace:W}),{shortCircuited:!0}}let{loaderData:Xn,errors:xt}=Ey(N,M,st,Yn,J,We,Vn,Je);Je.forEach((he,je)=>{he.subscribe(Nt=>{(Nt||he.done)&&Je.delete(je)})}),p.v7_partialHydration&&ue&&N.errors&&Object.entries(N.errors).filter(he=>{let[je]=he;return!st.some(Nt=>Nt.route.id===je)}).forEach(he=>{let[je,Nt]=he;xt=Object.assign(xt||{},{[je]:Nt})});let wn=Ss(),qr=Nl(ee),Ps=wn||qr||We.length>0;return qe({matches:M,loaderData:Xn,errors:xt},Ps?{fetchers:new Map(N.fetchers)}:{})}function On(x){if(x&&!dn(x[1]))return{[x[0]]:x[1].data};if(N.actionData)return Object.keys(N.actionData).length===0?null:N.actionData}function dr(x){return x.forEach(D=>{let M=N.fetchers.get(D.key),U=na(void 0,M?M.data:void 0);N.fetchers.set(D.key,U)}),new Map(N.fetchers)}function hr(x,D,M,U){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Re.has(x)&&Mn(x);let G=(U&&U.unstable_flushSync)===!0,X=l||o,se=af(N.location,N.matches,u,p.v7_prependBasename,M,p.v7_relativeSplatPath,D,U==null?void 0:U.relative),W=$i(X,se,u),ue=mr(W,X,se);if(ue.active&&ue.matches&&(W=ue.matches),!W){_n(x,D,Ht(404,{pathname:se}),{flushSync:G});return}let{path:Z,submission:J,error:me}=my(p.v7_normalizeFormMethod,!0,se,U);if(me){_n(x,D,me,{flushSync:G});return}let we=da(W,Z);if(y=(U&&U.preventScrollReset)===!0,J&&Bn(J.formMethod)){Di(x,D,Z,we,W,ue.active,G,J);return}pe.set(x,{routeId:D,path:Z}),Ln(x,D,Z,we,W,ue.active,G,J)}async function Di(x,D,M,U,G,X,se,W){it(),pe.delete(x);function ue(xe){if(!xe.route.action&&!xe.route.lazy){let ln=Ht(405,{method:W.formMethod,pathname:M,routeId:D});return _n(x,D,ln,{flushSync:se}),!0}return!1}if(!X&&ue(U))return;let Z=N.fetchers.get(x);Yt(x,yA(W,Z),{flushSync:se});let J=new AbortController,me=Ds(t.history,M,J.signal,W);if(X){let xe=await Mi(G,M,me.signal);if(xe.type==="aborted")return;if(xe.type==="error"){let{error:ln}=Hr(M,xe);_n(x,D,ln,{flushSync:se});return}else if(xe.matches){if(G=xe.matches,U=da(G,M),ue(U))return}else{_n(x,D,Ht(404,{pathname:M}),{flushSync:se});return}}Re.set(x,J);let we=K,Ee=(await Qt("action",me,[U],G))[0];if(me.signal.aborted){Re.get(x)===J&&Re.delete(x);return}if(p.v7_fetcherPersist&&Xe.has(x)){if(Gi(Ee)||dn(Ee)){Yt(x,Xr(void 0));return}}else{if(Gi(Ee))if(Re.delete(x),ee>we){Yt(x,Xr(void 0));return}else return _e.add(x),Yt(x,na(W)),Qn(me,Ee,{fetcherSubmission:W});if(dn(Ee)){_n(x,D,Ee.error);return}}if(Ki(Ee))throw Ht(400,{type:"defer-action"});let st=N.navigation.location||N.location,We=Ds(t.history,st,J.signal),Wr=l||o,Yn=N.navigation.state!=="idle"?$i(Wr,N.navigation.location,u):N.matches;fe(Yn,"Didn't find any matches after fetcher action");let Vn=++K;ne.set(x,Vn);let gr=na(W,Ee.data);N.fetchers.set(x,gr);let[Xn,xt]=gy(t.history,N,Yn,W,st,!1,p.unstable_skipActionErrorRevalidation,Ie,_t,on,Xe,pe,_e,Wr,u,[U.route.id,Ee]);xt.filter(xe=>xe.key!==x).forEach(xe=>{let ln=xe.key,Fo=N.fetchers.get(ln),bl=na(void 0,Fo?Fo.data:void 0);N.fetchers.set(ln,bl),Re.has(ln)&&Mn(ln),xe.controller&&Re.set(ln,xe.controller)}),Fe({fetchers:new Map(N.fetchers)});let wn=()=>xt.forEach(xe=>Mn(xe.key));J.signal.addEventListener("abort",wn);let{loaderResults:qr,fetcherResults:Ps}=await $e(N.matches,Yn,Xn,xt,We);if(J.signal.aborted)return;J.signal.removeEventListener("abort",wn),ne.delete(x),Re.delete(x),xt.forEach(xe=>Re.delete(xe.key));let he=Ry([...qr,...Ps]);if(he){if(he.idx>=Xn.length){let xe=xt[he.idx-Xn.length].key;_e.add(xe)}return Qn(We,he.result)}let{loaderData:je,errors:Nt}=Ey(N,N.matches,Xn,qr,void 0,xt,Ps,Je);if(N.fetchers.has(x)){let xe=Xr(Ee.data);N.fetchers.set(x,xe)}Nl(Vn),N.navigation.state==="loading"&&Vn>ee?(fe(E,"Expected pending action"),v&&v.abort(),$t(N.navigation.location,{matches:Yn,loaderData:je,errors:Nt,fetchers:new Map(N.fetchers)})):(Fe({errors:Nt,loaderData:Ty(N.loaderData,je,Yn,Nt),fetchers:new Map(N.fetchers)}),Ie=!1)}async function Ln(x,D,M,U,G,X,se,W){let ue=N.fetchers.get(x);Yt(x,na(W,ue?ue.data:void 0),{flushSync:se});let Z=new AbortController,J=Ds(t.history,M,Z.signal);if(X){let Ee=await Mi(G,M,J.signal);if(Ee.type==="aborted")return;if(Ee.type==="error"){let{error:st}=Hr(M,Ee);_n(x,D,st,{flushSync:se});return}else if(Ee.matches)G=Ee.matches,U=da(G,M);else{_n(x,D,Ht(404,{pathname:M}),{flushSync:se});return}}Re.set(x,Z);let me=K,ke=(await Qt("loader",J,[U],G))[0];if(Ki(ke)&&(ke=await Tw(ke,J.signal,!0)||ke),Re.get(x)===Z&&Re.delete(x),!J.signal.aborted){if(Xe.has(x)){Yt(x,Xr(void 0));return}if(Gi(ke))if(ee>me){Yt(x,Xr(void 0));return}else{_e.add(x),await Qn(J,ke);return}if(dn(ke)){_n(x,D,ke.error);return}fe(!Ki(ke),"Unhandled fetcher deferred data"),Yt(x,Xr(ke.data))}}async function Qn(x,D,M){let{submission:U,fetcherSubmission:G,replace:X}=M===void 0?{}:M;D.response.headers.has("X-Remix-Revalidate")&&(Ie=!0);let se=D.response.headers.get("Location");fe(se,"Expected a Location header on the redirect Response"),se=_y(se,new URL(x.url),u);let W=Xa(N.location,se,{_isRedirect:!0});if(n){let ke=!1;if(D.response.headers.has("X-Remix-Reload-Document"))ke=!0;else if(Cp.test(se)){const Ee=t.history.createURL(se);ke=Ee.origin!==e.location.origin||Po(Ee.pathname,u)==null}if(ke){X?e.location.replace(se):e.location.assign(se);return}}v=null;let ue=X===!0?lt.Replace:lt.Push,{formMethod:Z,formAction:J,formEncType:me}=N.navigation;!U&&!G&&Z&&J&&me&&(U=Py(N.navigation));let we=U||G;if(XR.has(D.response.status)&&we&&Bn(we.formMethod))await Ce(ue,W,{submission:qe({},we,{formAction:se}),preventScrollReset:y});else{let ke=Jd(W,U);await Ce(ue,W,{overrideNavigation:ke,fetcherSubmission:G,preventScrollReset:y})}}async function Qt(x,D,M,U){try{let G=await oA(c,x,D,M,U,s,i);return await Promise.all(G.map((X,se)=>{if(fA(X)){let W=X.result;return{type:Le.redirect,response:uA(W,D,M[se].route.id,U,u,p.v7_relativeSplatPath)}}return lA(X)}))}catch(G){return M.map(()=>({type:Le.error,error:G}))}}async function $e(x,D,M,U,G){let[X,...se]=await Promise.all([M.length?Qt("loader",G,M,D):[],...U.map(W=>{if(W.matches&&W.match&&W.controller){let ue=Ds(t.history,W.path,W.controller.signal);return Qt("loader",ue,[W.match],W.matches).then(Z=>Z[0])}else return Promise.resolve({type:Le.error,error:Ht(404,{pathname:W.path})})})]);return await Promise.all([Ay(x,M,X,X.map(()=>G.signal),!1,N.loaderData),Ay(x,U.map(W=>W.match),se,U.map(W=>W.controller?W.controller.signal:null),!0)]),{loaderResults:X,fetcherResults:se}}function it(){Ie=!0,_t.push(...Li()),pe.forEach((x,D)=>{Re.has(D)&&(on.push(D),Mn(D))})}function Yt(x,D,M){M===void 0&&(M={}),N.fetchers.set(x,D),Fe({fetchers:new Map(N.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function _n(x,D,M,U){U===void 0&&(U={});let G=Pa(N.matches,D);Is(x),Fe({errors:{[G.route.id]:M},fetchers:new Map(N.fetchers)},{flushSync:(U&&U.flushSync)===!0})}function bo(x){return p.v7_fetcherPersist&&(Ne.set(x,(Ne.get(x)||0)+1),Xe.has(x)&&Xe.delete(x)),N.fetchers.get(x)||JR}function Is(x){let D=N.fetchers.get(x);Re.has(x)&&!(D&&D.state==="loading"&&ne.has(x))&&Mn(x),pe.delete(x),ne.delete(x),_e.delete(x),Xe.delete(x),N.fetchers.delete(x)}function bi(x){if(p.v7_fetcherPersist){let D=(Ne.get(x)||0)-1;D<=0?(Ne.delete(x),Xe.add(x)):Ne.set(x,D)}else Is(x);Fe({fetchers:new Map(N.fetchers)})}function Mn(x){let D=Re.get(x);fe(D,"Expected fetch controller: "+x),D.abort(),Re.delete(x)}function Oo(x){for(let D of x){let M=bo(D),U=Xr(M.data);N.fetchers.set(D,U)}}function Ss(){let x=[],D=!1;for(let M of _e){let U=N.fetchers.get(M);fe(U,"Expected fetcher: "+M),U.state==="loading"&&(_e.delete(M),x.push(M),D=!0)}return Oo(x),D}function Nl(x){let D=[];for(let[M,U]of ne)if(U<x){let G=N.fetchers.get(M);fe(G,"Expected fetcher: "+M),G.state==="loading"&&(Mn(M),ne.delete(M),D.push(M))}return Oo(D),D.length>0}function vd(x,D){let M=N.blockers.get(x)||ta;return Ze.get(x)!==D&&Ze.set(x,D),M}function Rs(x){N.blockers.delete(x),Ze.delete(x)}function Oi(x,D){let M=N.blockers.get(x)||ta;fe(M.state==="unblocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="proceeding"||M.state==="blocked"&&D.state==="unblocked"||M.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+D.state);let U=new Map(N.blockers);U.set(x,D),Fe({blockers:U})}function Lo(x){let{currentLocation:D,nextLocation:M,historyAction:U}=x;if(Ze.size===0)return;Ze.size>1&&fo(!1,"A router only supports one blocker at a time");let G=Array.from(Ze.entries()),[X,se]=G[G.length-1],W=N.blockers.get(X);if(!(W&&W.state==="proceeding")&&se({currentLocation:D,nextLocation:M,historyAction:U}))return X}function fr(x){let D=Ht(404,{pathname:x}),M=l||o,{matches:U,route:G}=Sy(M);return Li(),{notFoundMatches:U,route:G,error:D}}function Hr(x,D){let M=D.partialMatches,U=M[M.length-1].route,G=Ht(400,{type:"route-discovery",routeId:U.id,pathname:x,message:D.error!=null&&"message"in D.error?D.error:String(D.error)});return{notFoundMatches:M,route:U,error:G}}function Li(x){let D=[];return Je.forEach((M,U)=>{(!x||x(U))&&(M.cancel(),D.push(U),Je.delete(U))}),D}function pr(x,D,M){if(C=x,O=D,k=M||null,!S&&N.navigation===Xd){S=!0;let U=Vo(N.location,N.matches);U!=null&&Fe({restoreScrollPosition:U})}return()=>{C=null,O=null,k=null}}function Mo(x,D){return k&&k(x,D.map(U=>kR(U,N.loaderData)))||x.key}function As(x,D){if(C&&O){let M=Mo(x,D);C[M]=O()}}function Vo(x,D){if(C){let M=Mo(x,D),U=C[M];if(typeof U=="number")return U}return null}function mr(x,D,M){if(h)if(x){let U=x[x.length-1].route;if(U.path&&(U.path==="*"||U.path.endsWith("/*")))return{active:!0,matches:Su(D,M,u,!0)}}else return{active:!0,matches:Su(D,M,u,!0)||[]};return{active:!1,matches:null}}async function Mi(x,D,M){let U=x,G=U.length>0?U[U.length-1].route:null;for(;;){let X=l==null,se=l||o;try{await iA(h,D,U,se,s,i,ae,M)}catch(J){return{type:"error",error:J,partialMatches:U}}finally{X&&(o=[...o])}if(M.aborted)return{type:"aborted"};let W=$i(se,D,u),ue=!1;if(W){let J=W[W.length-1].route;if(J.index)return{type:"success",matches:W};if(J.path&&J.path.length>0)if(J.path==="*")ue=!0;else return{type:"success",matches:W}}let Z=Su(se,D,u,!0);if(!Z||U.map(J=>J.route.id).join("-")===Z.map(J=>J.route.id).join("-"))return{type:"success",matches:ue?W:null};if(U=Z,G=U[U.length-1].route,G.path==="*")return{type:"success",matches:U}}}function Et(x){s={},l=Ja(x,i,void 0,s)}function Dl(x,D){let M=l==null;_w(x,D,l||o,s,i),M&&(o=[...o],Fe({}))}return z={get basename(){return u},get future(){return p},get state(){return N},get routes(){return o},get window(){return e},initialize:bn,subscribe:wt,enableScrollRestoration:pr,navigate:Gn,fetch:hr,revalidate:re,createHref:x=>t.history.createHref(x),encodeLocation:x=>t.history.encodeLocation(x),getFetcher:bo,deleteFetcher:bi,dispose:an,getBlocker:vd,deleteBlocker:Rs,patchRoutes:Dl,_internalFetchControllers:Re,_internalActiveDeferreds:Je,_internalSetRoutes:Et},z}function tA(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function af(t,e,n,r,i,s,o,l){let u,c;if(o){u=[];for(let p of e)if(u.push(p),p.route.id===o){c=p;break}}else u=e,c=e[e.length-1];let h=$c(i||".",Bc(u,s),Po(t.pathname,n)||t.pathname,l==="path");return i==null&&(h.search=t.search,h.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!kp(h.search)&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(h.pathname=h.pathname==="/"?n:Cr([n,h.pathname])),os(h)}function my(t,e,n,r){if(!r||!tA(r))return{path:n};if(r.formMethod&&!mA(r.formMethod))return{path:n,error:Ht(405,{method:r.formMethod})};let i=()=>({path:n,error:Ht(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=ww(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Bn(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((T,C)=>{let[k,O]=C;return""+T+k+"="+O+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Bn(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}fe(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=lf(r.formData),c=r.formData;else if(r.body instanceof FormData)u=lf(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=wy(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=wy(u)}catch{return i()}let h={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Bn(h.formMethod))return{path:n,submission:h};let p=Ci(n);return e&&p.search&&kp(p.search)&&u.append("index",""),p.search="?"+u,{path:os(p),submission:h}}function nA(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function gy(t,e,n,r,i,s,o,l,u,c,h,p,m,T,C,k){let O=k?dn(k[1])?k[1].error:k[1].data:void 0,S=t.createURL(e.location),_=t.createURL(i),A=k&&dn(k[1])?k[0]:void 0,V=A?nA(n,A):n,z=k?k[1].statusCode:void 0,N=o&&z&&z>=400,E=V.filter((v,R)=>{let{route:P}=v;if(P.lazy)return!0;if(P.loader==null)return!1;if(s)return typeof P.loader!="function"||P.loader.hydrate?!0:e.loaderData[P.id]===void 0&&(!e.errors||e.errors[P.id]===void 0);if(rA(e.loaderData,e.matches[R],v)||u.some(Ie=>Ie===v.route.id))return!0;let b=e.matches[R],I=v;return yy(v,qe({currentUrl:S,currentParams:b.params,nextUrl:_,nextParams:I.params},r,{actionResult:O,unstable_actionStatus:z,defaultShouldRevalidate:N?!1:l||S.pathname+S.search===_.pathname+_.search||S.search!==_.search||vw(b,I)}))}),y=[];return p.forEach((v,R)=>{if(s||!n.some(_t=>_t.route.id===v.routeId)||h.has(R))return;let P=$i(T,v.path,C);if(!P){y.push({key:R,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let b=e.fetchers.get(R),I=da(P,v.path),Ie=!1;m.has(R)?Ie=!1:c.includes(R)?Ie=!0:b&&b.state!=="idle"&&b.data===void 0?Ie=l:Ie=yy(I,qe({currentUrl:S,currentParams:e.matches[e.matches.length-1].params,nextUrl:_,nextParams:n[n.length-1].params},r,{actionResult:O,unstable_actionStatus:z,defaultShouldRevalidate:N?!1:l})),Ie&&y.push({key:R,routeId:v.routeId,path:v.path,matches:P,match:I,controller:new AbortController})}),[E,y]}function rA(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function vw(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function yy(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function iA(t,e,n,r,i,s,o,l){let u=[e,...n.map(c=>c.route.id)].join("-");try{let c=o.get(u);c||(c=t({path:e,matches:n,patch:(h,p)=>{l.aborted||_w(h,p,r,i,s)}}),o.set(u,c)),c&&hA(c)&&await c}finally{o.delete(u)}}function _w(t,e,n,r,i){if(t){var s;let o=r[t];fe(o,"No route found to patch children into: routeId = "+t);let l=Ja(e,i,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...l):o.children=l}else{let o=Ja(e,i,["patch",String(n.length||"0")],r);n.push(...o)}}async function vy(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];fe(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";fo(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!PR.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,qe({},e(i),{lazy:void 0}))}function sA(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function oA(t,e,n,r,i,s,o,l){let u=r.reduce((p,m)=>p.add(m.route.id),new Set),c=new Set,h=await t({matches:i.map(p=>{let m=u.has(p.route.id);return qe({},p,{shouldLoad:m,resolve:C=>(c.add(p.route.id),m?aA(e,n,p,s,o,C,l):Promise.resolve({type:Le.data,result:void 0}))})}),request:n,params:i[0].params,context:l});return i.forEach(p=>fe(c.has(p.route.id),'`match.resolve()` was not called for route id "'+p.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),h.filter((p,m)=>u.has(i[m].route.id))}async function aA(t,e,n,r,i,s,o){let l,u,c=h=>{let p,m=new Promise((k,O)=>p=O);u=()=>p(),e.signal.addEventListener("abort",u);let T=k=>typeof h!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):h({request:e,params:n.params,context:o},...k!==void 0?[k]:[]),C;return s?C=s(k=>T(k)):C=(async()=>{try{return{type:"data",result:await T()}}catch(k){return{type:"error",result:k}}})(),Promise.race([C,m])};try{let h=n.route[t];if(n.route.lazy)if(h){let p,[m]=await Promise.all([c(h).catch(T=>{p=T}),vy(n.route,i,r)]);if(p!==void 0)throw p;l=m}else if(await vy(n.route,i,r),h=n.route[t],h)l=await c(h);else if(t==="action"){let p=new URL(e.url),m=p.pathname+p.search;throw Ht(405,{method:e.method,pathname:m,routeId:n.route.id})}else return{type:Le.data,result:void 0};else if(h)l=await c(h);else{let p=new URL(e.url),m=p.pathname+p.search;throw Ht(404,{pathname:m})}fe(l.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(h){return{type:Le.error,result:h}}finally{u&&e.signal.removeEventListener("abort",u)}return l}async function lA(t){let{result:e,type:n,status:r}=t;if(Ew(e)){let o;try{let l=e.headers.get("Content-Type");l&&/\bapplication\/json\b/.test(l)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(l){return{type:Le.error,error:l}}return n===Le.error?{type:Le.error,error:new Pp(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:Le.data,data:o,statusCode:e.status,headers:e.headers}}if(n===Le.error)return{type:Le.error,error:e,statusCode:Hc(e)?e.status:r};if(pA(e)){var i,s;return{type:Le.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:Le.data,data:e,statusCode:r}}function uA(t,e,n,r,i,s){let o=t.headers.get("Location");if(fe(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Cp.test(o)){let l=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=af(new URL(e.url),l,i,!0,o,s),t.headers.set("Location",o)}return t}function _y(t,e,n){if(Cp.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Po(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Ds(t,e,n,r){let i=t.createURL(ww(e)).toString(),s={signal:n};if(r&&Bn(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=lf(r.formData):s.body=r.formData}return new Request(i,s)}function lf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function wy(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function cA(t,e,n,r,i,s){let o={},l=null,u,c=!1,h={},p=r&&dn(r[1])?r[1].error:void 0;return n.forEach((m,T)=>{let C=e[T].route.id;if(fe(!Gi(m),"Cannot handle redirect results in processLoaderData"),dn(m)){let k=m.error;p!==void 0&&(k=p,p=void 0),l=l||{};{let O=Pa(t,C);l[O.route.id]==null&&(l[O.route.id]=k)}o[C]=void 0,c||(c=!0,u=Hc(m.error)?m.error.status:500),m.headers&&(h[C]=m.headers)}else Ki(m)?(i.set(C,m.deferredData),o[C]=m.deferredData.data,m.statusCode!=null&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(h[C]=m.headers)):(o[C]=m.data,m.statusCode&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(h[C]=m.headers))}),p!==void 0&&r&&(l={[r[0]]:p},o[r[0]]=void 0),{loaderData:o,errors:l,statusCode:u||200,loaderHeaders:h}}function Ey(t,e,n,r,i,s,o,l){let{loaderData:u,errors:c}=cA(e,n,r,i,l);for(let h=0;h<s.length;h++){let{key:p,match:m,controller:T}=s[h];fe(o!==void 0&&o[h]!==void 0,"Did not find corresponding fetcher result");let C=o[h];if(!(T&&T.signal.aborted))if(dn(C)){let k=Pa(t.matches,m==null?void 0:m.route.id);c&&c[k.route.id]||(c=qe({},c,{[k.route.id]:C.error})),t.fetchers.delete(p)}else if(Gi(C))fe(!1,"Unhandled fetcher revalidation redirect");else if(Ki(C))fe(!1,"Unhandled fetcher deferred data");else{let k=Xr(C.data);t.fetchers.set(p,k)}}return{loaderData:u,errors:c}}function Ty(t,e,n,r){let i=qe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Iy(t){return t?dn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Pa(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Sy(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Ht(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,l="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(l="Bad Request",s==="route-discovery"?u='Unable to match URL "'+n+'" - the `children()` function for '+("route `"+r+"` threw the following error:\n"+o):i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(l="Not Found",u='No route matches URL "'+n+'"'):t===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Pp(t||500,l,new Error(u),!0)}function Ry(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Gi(n))return{result:n,idx:e}}}function ww(t){let e=typeof t=="string"?Ci(t):t;return os(qe({},e,{hash:""}))}function dA(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function hA(t){return typeof t=="object"&&t!=null&&"then"in t}function fA(t){return Ew(t.result)&&YR.has(t.result.status)}function Ki(t){return t.type===Le.deferred}function dn(t){return t.type===Le.error}function Gi(t){return(t&&t.type)===Le.redirect}function pA(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function Ew(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function mA(t){return QR.has(t.toLowerCase())}function Bn(t){return KR.has(t.toLowerCase())}async function Ay(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let l=n[o],u=e[o];if(!u)continue;let c=t.find(p=>p.route.id===u.route.id),h=c!=null&&!vw(c,u)&&(s&&s[u.route.id])!==void 0;if(Ki(l)&&(i||h)){let p=r[o];fe(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await Tw(l,p,i).then(m=>{m&&(n[o]=m||n[o])})}}}async function Tw(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Le.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Le.error,error:i}}return{type:Le.data,data:t.deferredData.data}}}function kp(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function da(t,e){let n=typeof e=="string"?Ci(e).search:e.search;if(t[t.length-1].route.index&&kp(n||""))return t[t.length-1];let r=mw(t);return r[r.length-1]}function Py(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Jd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function gA(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function na(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function yA(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Xr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function vA(t,e){try{let n=t.sessionStorage.getItem(yw);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function _A(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(yw,JSON.stringify(n))}catch(r){fo(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ic(){return ic=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ic.apply(this,arguments)}const Wc=F.createContext(null),Iw=F.createContext(null),ki=F.createContext(null),xp=F.createContext(null),Fr=F.createContext({outlet:null,matches:[],isDataRoute:!1}),Sw=F.createContext(null);function wA(t,e){let{relative:n}=e===void 0?{}:e;Co()||fe(!1);let{basename:r,navigator:i}=F.useContext(ki),{hash:s,pathname:o,search:l}=Aw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Cr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Co(){return F.useContext(xp)!=null}function yl(){return Co()||fe(!1),F.useContext(xp).location}function Rw(t){F.useContext(ki).static||F.useLayoutEffect(t)}function Np(){let{isDataRoute:t}=F.useContext(Fr);return t?bA():EA()}function EA(){Co()||fe(!1);let t=F.useContext(Wc),{basename:e,future:n,navigator:r}=F.useContext(ki),{matches:i}=F.useContext(Fr),{pathname:s}=yl(),o=JSON.stringify(Bc(i,n.v7_relativeSplatPath)),l=F.useRef(!1);return Rw(()=>{l.current=!0}),F.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=$c(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Cr([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,s,t])}function TA(){let{matches:t}=F.useContext(Fr),e=t[t.length-1];return e?e.params:{}}function Aw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=F.useContext(ki),{matches:i}=F.useContext(Fr),{pathname:s}=yl(),o=JSON.stringify(Bc(i,r.v7_relativeSplatPath));return F.useMemo(()=>$c(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function IA(t,e,n,r){Co()||fe(!1);let{navigator:i}=F.useContext(ki),{matches:s}=F.useContext(Fr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=yl(),h;h=c;let p=h.pathname||"/",m=p;if(u!=="/"){let k=u.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let T=$i(t,{pathname:m});return CA(T&&T.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Cr([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Cr([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r)}function SA(){let t=DA(),e=Hc(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:i},n):null,null)}const RA=F.createElement(SA,null);class AA extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(Fr.Provider,{value:this.props.routeContext},F.createElement(Sw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PA(t){let{routeContext:e,match:n,children:r}=t,i=F.useContext(Wc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(Fr.Provider,{value:e},r)}function CA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);h>=0||fe(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:m,errors:T}=n,C=p.route.loader&&m[p.route.id]===void 0&&(!T||T[p.route.id]===void 0);if(p.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,p,m)=>{let T,C=!1,k=null,O=null;n&&(T=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||RA,u&&(c<0&&m===0?(OA("route-fallback"),C=!0,O=null):c===m&&(C=!0,O=p.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),_=()=>{let A;return T?A=k:C?A=O:p.route.Component?A=F.createElement(p.route.Component,null):p.route.element?A=p.route.element:A=h,F.createElement(PA,{match:p,routeContext:{outlet:h,matches:S,isDataRoute:n!=null},children:A})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?F.createElement(AA,{location:n.location,revalidation:n.revalidation,component:k,error:T,children:_(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):_()},null)}var Pw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Pw||{}),sc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(sc||{});function kA(t){let e=F.useContext(Wc);return e||fe(!1),e}function xA(t){let e=F.useContext(Iw);return e||fe(!1),e}function NA(t){let e=F.useContext(Fr);return e||fe(!1),e}function Cw(t){let e=NA(),n=e.matches[e.matches.length-1];return n.route.id||fe(!1),n.route.id}function DA(){var t;let e=F.useContext(Sw),n=xA(sc.UseRouteError),r=Cw(sc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function bA(){let{router:t}=kA(Pw.UseNavigateStable),e=Cw(sc.UseNavigateStable),n=F.useRef(!1);return Rw(()=>{n.current=!0}),F.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ic({fromRouteId:e},s)))},[t,e])}const Cy={};function OA(t,e,n){Cy[t]||(Cy[t]=!0)}function qc(t){let{to:e,replace:n,state:r,relative:i}=t;Co()||fe(!1);let{future:s,static:o}=F.useContext(ki),{matches:l}=F.useContext(Fr),{pathname:u}=yl(),c=Np(),h=$c(e,Bc(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(h);return F.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function LA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=lt.Pop,navigator:s,static:o=!1,future:l}=t;Co()&&fe(!1);let u=e.replace(/^\/*/,"/"),c=F.useMemo(()=>({basename:u,navigator:s,static:o,future:ic({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ci(r));let{pathname:h="/",search:p="",hash:m="",state:T=null,key:C="default"}=r,k=F.useMemo(()=>{let O=Po(h,u);return O==null?null:{location:{pathname:O,search:p,hash:m,state:T,key:C},navigationType:i}},[u,h,p,m,T,C,i]);return k==null?null:F.createElement(ki.Provider,{value:c},F.createElement(xp.Provider,{children:n,value:k}))}new Promise(()=>{});function MA(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:F.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:F.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:F.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Za.apply(this,arguments)}function VA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function FA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function jA(t,e){return t.button===0&&(!e||e==="_self")&&!FA(t)}const UA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],zA="6";try{window.__reactRouterVersion=zA}catch{}function BA(t,e){return eA({basename:void 0,future:Za({},void 0,{v7_prependBasename:!0}),history:SR({window:void 0}),hydrationData:$A(),routes:t,mapRouteProperties:MA,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function $A(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Za({},e,{errors:HA(e.errors)})),e}function HA(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Pp(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const WA=F.createContext({isTransitioning:!1}),qA=F.createContext(new Map),KA="startTransition",ky=dS[KA],GA="flushSync",xy=IR[GA];function QA(t){ky?ky(t):t()}function ra(t){xy?xy(t):t()}let YA=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function XA(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=F.useState(n.state),[o,l]=F.useState(),[u,c]=F.useState({isTransitioning:!1}),[h,p]=F.useState(),[m,T]=F.useState(),[C,k]=F.useState(),O=F.useRef(new Map),{v7_startTransition:S}=r||{},_=F.useCallback(E=>{S?QA(E):E()},[S]),A=F.useCallback((E,y)=>{let{deletedFetchers:v,unstable_flushSync:R,unstable_viewTransitionOpts:P}=y;v.forEach(I=>O.current.delete(I)),E.fetchers.forEach((I,Ie)=>{I.data!==void 0&&O.current.set(Ie,I.data)});let b=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!P||b){R?ra(()=>s(E)):_(()=>s(E));return}if(R){ra(()=>{m&&(h&&h.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:P.currentLocation,nextLocation:P.nextLocation})});let I=n.window.document.startViewTransition(()=>{ra(()=>s(E))});I.finished.finally(()=>{ra(()=>{p(void 0),T(void 0),l(void 0),c({isTransitioning:!1})})}),ra(()=>T(I));return}m?(h&&h.resolve(),m.skipTransition(),k({state:E,currentLocation:P.currentLocation,nextLocation:P.nextLocation})):(l(E),c({isTransitioning:!0,flushSync:!1,currentLocation:P.currentLocation,nextLocation:P.nextLocation}))},[n.window,m,h,O,_]);F.useLayoutEffect(()=>n.subscribe(A),[n,A]),F.useEffect(()=>{u.isTransitioning&&!u.flushSync&&p(new YA)},[u]),F.useEffect(()=>{if(h&&o&&n.window){let E=o,y=h.promise,v=n.window.document.startViewTransition(async()=>{_(()=>s(E)),await y});v.finished.finally(()=>{p(void 0),T(void 0),l(void 0),c({isTransitioning:!1})}),T(v)}},[_,o,h,n.window]),F.useEffect(()=>{h&&o&&i.location.key===o.location.key&&h.resolve()},[h,m,i.location,o]),F.useEffect(()=>{!u.isTransitioning&&C&&(l(C.state),c({isTransitioning:!0,flushSync:!1,currentLocation:C.currentLocation,nextLocation:C.nextLocation}),k(void 0))},[u.isTransitioning,C]),F.useEffect(()=>{},[]);let V=F.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:E=>n.navigate(E),push:(E,y,v)=>n.navigate(E,{state:y,preventScrollReset:v==null?void 0:v.preventScrollReset}),replace:(E,y,v)=>n.navigate(E,{replace:!0,state:y,preventScrollReset:v==null?void 0:v.preventScrollReset})}),[n]),z=n.basename||"/",N=F.useMemo(()=>({router:n,navigator:V,static:!1,basename:z}),[n,V,z]);return F.createElement(F.Fragment,null,F.createElement(Wc.Provider,{value:N},F.createElement(Iw.Provider,{value:i},F.createElement(qA.Provider,{value:O.current},F.createElement(WA.Provider,{value:u},F.createElement(LA,{basename:z,location:i.location,navigationType:i.historyAction,navigator:V,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?F.createElement(JA,{routes:n.routes,future:n.future,state:i}):e))))),null)}function JA(t){let{routes:e,future:n,state:r}=t;return IA(e,void 0,r,n)}const ZA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,as=F.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:h,unstable_viewTransition:p}=e,m=VA(e,UA),{basename:T}=F.useContext(ki),C,k=!1;if(typeof c=="string"&&eP.test(c)&&(C=c,ZA))try{let A=new URL(window.location.href),V=c.startsWith("//")?new URL(A.protocol+c):new URL(c),z=Po(V.pathname,T);V.origin===A.origin&&z!=null?c=z+V.search+V.hash:k=!0}catch{}let O=wA(c,{relative:i}),S=tP(c,{replace:o,state:l,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:p});function _(A){r&&r(A),A.defaultPrevented||S(A)}return F.createElement("a",Za({},m,{href:C||O,onClick:k||s?r:_,ref:n,target:u}))});var Ny;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ny||(Ny={}));var Dy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dy||(Dy={}));function tP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Np(),c=yl(),h=Aw(t,{relative:o});return F.useCallback(p=>{if(jA(p,n)){p.preventDefault();let m=r!==void 0?r:os(c)===os(h);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,h,r,i,n,t,s,o,l])}const Kc="/Timelines/assets/Logo-1QK56hxG.png";function nP(){return w.jsx(w.Fragment,{children:w.jsxs("div",{className:"header",children:[w.jsxs("div",{className:"header-logo",children:[w.jsx("img",{src:Kc,style:{width:24}}),"Lifelines"]}),w.jsxs("div",{children:[w.jsx(as,{to:"/Timelines/login",children:w.jsx("button",{className:"header-sign-in-button",children:"Log in"})}),w.jsx(as,{to:"/Timelines/sign-up",children:w.jsx("button",{className:"header-sign-up-button",children:"Sign up"})})]})]})})}function rP(){return w.jsx(w.Fragment,{children:w.jsx("div",{className:"footer",children:"Lifelines ©2024"})})}var by={};/**
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
 */const kw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},xw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(m=64)),r.push(n[h],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new sP;const m=s<<2|l>>4;if(r.push(m),c!==64){const T=l<<4&240|c>>2;if(r.push(T),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oP=function(t){const e=kw(t);return xw.encodeByteArray(e,!0)},oc=function(t){return oP(t).replace(/\./g,"")},Nw=function(t){try{return xw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ac(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!aP(n)||(t[n]=ac(t[n],e[n]));return t}function aP(t){return t!=="__proto__"}/**
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
 */function lP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uP=()=>lP().__FIREBASE_DEFAULTS__,cP=()=>{if(typeof process>"u"||typeof by>"u")return;const t=by.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nw(t[1]);return e&&JSON.parse(e)},Gc=()=>{try{return uP()||cP()||dP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dw=t=>{var e,n;return(n=(e=Gc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hP=t=>{const e=Dw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bw=()=>{var t;return(t=Gc())===null||t===void 0?void 0:t.config},Ow=t=>{var e;return(e=Gc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class fP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function pP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[oc(JSON.stringify(n)),oc(JSON.stringify(o)),""].join(".")}/**
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
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function gP(){var t;const e=(t=Gc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lw(){return typeof window<"u"||Mw()}function Mw(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Vw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vP(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _P(){return!gP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fw(){try{return typeof indexedDB=="object"}catch{return!1}}function jw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function wP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const EP="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EP,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?TP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,l,r)}}function TP(t,e){return t.replace(IP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IP=/\{\$([^}]+)}/g;/**
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
 */function Oy(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function SP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function el(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ly(s)&&Ly(o)){if(!el(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ly(t){return t!==null&&typeof t=="object"}/**
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
 */function vl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ha(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function fa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Uw(t,e){const n=new RP(t,e);return n.subscribe.bind(n)}class RP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zd),i.error===void 0&&(i.error=Zd),i.complete===void 0&&(i.complete=Zd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zd(){}/**
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
 */const PP=1e3,CP=2,kP=4*60*60*1e3,xP=.5;function My(t,e=PP,n=CP){const r=e*Math.pow(n,t),i=Math.round(xP*r*(Math.random()-.5)*2);return Math.min(kP,r+i)}/**
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
 */function mt(t){return t&&t._delegate?t._delegate:t}class kn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bi="[DEFAULT]";/**
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
 */class NP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bP(e))try{this.getOrInitializeService({instanceIdentifier:Bi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bi){return this.instances.has(e)}getOptions(e=Bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bi){return this.component?this.component.multipleInstances?e:Bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DP(t){return t===Bi?void 0:t}function bP(t){return t.instantiationMode==="EAGER"}/**
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
 */class zw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Dp=[];var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const Bw={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},OP=ye.INFO,LP={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},MP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=LP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _l{constructor(e){this.name=e,this._logLevel=OP,this._logHandler=MP,this._userLogHandler=null,Dp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}function VP(t){Dp.forEach(e=>{e.setLogLevel(t)})}function FP(t,e){for(const n of Dp){let r=null;e&&e.level&&(r=Bw[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const l=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:ye[s].toLowerCase(),message:l,args:o,type:i.name})}}}const jP=(t,e)=>e.some(n=>t instanceof n);let Vy,Fy;function UP(){return Vy||(Vy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zP(){return Fy||(Fy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $w=new WeakMap,uf=new WeakMap,Hw=new WeakMap,eh=new WeakMap,bp=new WeakMap;function BP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$w.set(n,t)}).catch(()=>{}),bp.set(e,t),e}function $P(t){if(uf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});uf.set(t,e)}let cf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return uf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HP(t){cf=t(cf)}function WP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(th(this),e,...n);return Hw.set(r,e.sort?e.sort():[e]),gi(r)}:zP().includes(t)?function(...e){return t.apply(th(this),e),gi($w.get(this))}:function(...e){return gi(t.apply(th(this),e))}}function qP(t){return typeof t=="function"?WP(t):(t instanceof IDBTransaction&&$P(t),jP(t,UP())?new Proxy(t,cf):t)}function gi(t){if(t instanceof IDBRequest)return BP(t);if(eh.has(t))return eh.get(t);const e=qP(t);return e!==t&&(eh.set(t,e),bp.set(e,t)),e}const th=t=>bp.get(t);function Ww(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=gi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(gi(o.result),u.oldVersion,u.newVersion,gi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const KP=["get","getKey","getAll","getAllKeys","count"],GP=["put","add","delete","clear"],nh=new Map;function jy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nh.get(e))return nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||KP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return nh.set(e,s),s}HP(t=>({...t,get:(e,n,r)=>jy(e,n)||t.get(e,n,r),has:(e,n)=>!!jy(e,n)||t.has(e,n)}));/**
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
 */class QP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lc="@firebase/app",df="0.10.6";/**
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
 */const ls=new _l("@firebase/app"),XP="@firebase/app-compat",JP="@firebase/analytics-compat",ZP="@firebase/analytics",eC="@firebase/app-check-compat",tC="@firebase/app-check",nC="@firebase/auth",rC="@firebase/auth-compat",iC="@firebase/database",sC="@firebase/database-compat",oC="@firebase/functions",aC="@firebase/functions-compat",lC="@firebase/installations",uC="@firebase/installations-compat",cC="@firebase/messaging",dC="@firebase/messaging-compat",hC="@firebase/performance",fC="@firebase/performance-compat",pC="@firebase/remote-config",mC="@firebase/remote-config-compat",gC="@firebase/storage",yC="@firebase/storage-compat",vC="@firebase/firestore",_C="@firebase/vertexai-preview",wC="@firebase/firestore-compat",EC="firebase",TC="10.12.3";/**
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
 */const wi="[DEFAULT]",IC={[lc]:"fire-core",[XP]:"fire-core-compat",[ZP]:"fire-analytics",[JP]:"fire-analytics-compat",[tC]:"fire-app-check",[eC]:"fire-app-check-compat",[nC]:"fire-auth",[rC]:"fire-auth-compat",[iC]:"fire-rtdb",[sC]:"fire-rtdb-compat",[oC]:"fire-fn",[aC]:"fire-fn-compat",[lC]:"fire-iid",[uC]:"fire-iid-compat",[cC]:"fire-fcm",[dC]:"fire-fcm-compat",[hC]:"fire-perf",[fC]:"fire-perf-compat",[pC]:"fire-rc",[mC]:"fire-rc-compat",[gC]:"fire-gcs",[yC]:"fire-gcs-compat",[vC]:"fire-fst",[wC]:"fire-fst-compat",[_C]:"fire-vertex","fire-js":"fire-js",[EC]:"fire-js-all"};/**
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
 */const Ei=new Map,po=new Map,mo=new Map;function tl(t,e){try{t.container.addComponent(e)}catch(n){ls.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qw(t,e){t.container.addOrOverwriteComponent(e)}function xn(t){const e=t.name;if(mo.has(e))return ls.debug(`There were multiple attempts to register component ${e}.`),!1;mo.set(e,t);for(const n of Ei.values())tl(n,t);for(const n of po.values())tl(n,t);return!0}function Ur(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function SC(t,e,n=wi){Ur(t,e).clearInstance(n)}function Kw(t){return t.options!==void 0}function Sn(t){return t.settings!==void 0}function RC(){mo.clear()}/**
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
 */const AC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},An=new jr("app","Firebase",AC);/**
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
 */let Gw=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}};/**
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
 */class PC extends Gw{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const l=e;super(l.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,Ut(lc,df,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Op(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw An.create("server-app-deleted")}}/**
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
 */const xi=TC;function Qc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw An.create("bad-app-name",{appName:String(i)});if(n||(n=bw()),!n)throw An.create("no-options");const s=Ei.get(i);if(s){if(el(n,s.options)&&el(r,s.config))return s;throw An.create("duplicate-app",{appName:i})}const o=new zw(i);for(const u of mo.values())o.addComponent(u);const l=new Gw(n,r,o);return Ei.set(i,l),l}function CC(t,e){if(Lw()&&!Mw())throw An.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;Kw(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((h,p)=>Math.imul(31,h)+p.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw An.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=po.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const l=new zw(s);for(const c of mo.values())l.addComponent(c);const u=new PC(n,e,s,l);return po.set(s,u),u}function Yc(t=wi){const e=Ei.get(t);if(!e&&t===wi&&bw())return Qc();if(!e)throw An.create("no-app",{appName:t});return e}function kC(){return Array.from(Ei.values())}async function Op(t){let e=!1;const n=t.name;Ei.has(n)?(e=!0,Ei.delete(n)):po.has(n)&&t.decRefCount()<=0&&(po.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Ut(t,e,n){var r;let i=(r=IC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ls.warn(l.join(" "));return}xn(new kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Qw(t,e){if(t!==null&&typeof t!="function")throw An.create("invalid-log-argument");FP(t,e)}function Yw(t){VP(t)}/**
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
 */const xC="firebase-heartbeat-database",NC=1,nl="firebase-heartbeat-store";let rh=null;function Xw(){return rh||(rh=Ww(xC,NC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(nl)}catch(n){console.warn(n)}}}}).catch(t=>{throw An.create("idb-open",{originalErrorMessage:t.message})})),rh}async function DC(t){try{const n=(await Xw()).transaction(nl),r=await n.objectStore(nl).get(Jw(t));return await n.done,r}catch(e){if(e instanceof Dn)ls.warn(e.message);else{const n=An.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ls.warn(n.message)}}}async function Uy(t,e){try{const r=(await Xw()).transaction(nl,"readwrite");await r.objectStore(nl).put(e,Jw(t)),await r.done}catch(n){if(n instanceof Dn)ls.warn(n.message);else{const r=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ls.warn(r.message)}}}function Jw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bC=1024,OC=30*24*60*60*1e3;class LC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=OC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zy(),{heartbeatsToSend:r,unsentEntries:i}=MC(this._heartbeatsCache.heartbeats),s=oc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zy(){return new Date().toISOString().substring(0,10)}function MC(t,e=bC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),By(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),By(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fw()?jw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await DC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function By(t){return oc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function FC(t){xn(new kn("platform-logger",e=>new QP(e),"PRIVATE")),xn(new kn("heartbeat",e=>new LC(e),"PRIVATE")),Ut(lc,df,t),Ut(lc,df,"esm2017"),Ut("fire-js","")}FC("");const jC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Dn,SDK_VERSION:xi,_DEFAULT_ENTRY_NAME:wi,_addComponent:tl,_addOrOverwriteComponent:qw,_apps:Ei,_clearComponents:RC,_components:mo,_getProvider:Ur,_isFirebaseApp:Kw,_isFirebaseServerApp:Sn,_registerComponent:xn,_removeServiceInstance:SC,_serverApps:po,deleteApp:Op,getApp:Yc,getApps:kC,initializeApp:Qc,initializeServerApp:CC,onLog:Qw,registerVersion:Ut,setLogLevel:Yw},Symbol.toStringTag,{value:"Module"}));var UC="firebase",zC="10.12.3";/**
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
 */Ut(UC,zC,"app");const Zw="@firebase/installations",Lp="0.6.8";/**
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
 */const eE=1e4,tE=`w:${Lp}`,nE="FIS_v2",BC="https://firebaseinstallations.googleapis.com/v1",$C=60*60*1e3,HC="installations",WC="Installations";/**
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
 */const qC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},us=new jr(HC,WC,qC);function rE(t){return t instanceof Dn&&t.code.includes("request-failed")}/**
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
 */function iE({projectId:t}){return`${BC}/projects/${t}/installations`}function sE(t){return{token:t.token,requestStatus:2,expiresIn:GC(t.expiresIn),creationTime:Date.now()}}async function oE(t,e){const r=(await e.json()).error;return us.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function aE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function KC(t,{refreshToken:e}){const n=aE(t);return n.append("Authorization",QC(e)),n}async function lE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function GC(t){return Number(t.replace("s","000"))}function QC(t){return`${nE} ${t}`}/**
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
 */async function YC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=iE(t),i=aE(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:nE,appId:t.appId,sdkVersion:tE},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await lE(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:sE(c.authToken)}}else throw await oE("Create Installation",u)}/**
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
 */function uE(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function XC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const JC=/^[cdef][\w-]{21}$/,hf="";function ZC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=e2(t);return JC.test(n)?n:hf}catch{return hf}}function e2(t){return XC(t).substr(0,22)}/**
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
 */function Xc(t){return`${t.appName}!${t.appId}`}/**
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
 */const cE=new Map;function dE(t,e){const n=Xc(t);hE(n,e),t2(n,e)}function hE(t,e){const n=cE.get(t);if(n)for(const r of n)r(e)}function t2(t,e){const n=n2();n&&n.postMessage({key:t,fid:e}),r2()}let Qi=null;function n2(){return!Qi&&"BroadcastChannel"in self&&(Qi=new BroadcastChannel("[Firebase] FID Change"),Qi.onmessage=t=>{hE(t.data.key,t.data.fid)}),Qi}function r2(){cE.size===0&&Qi&&(Qi.close(),Qi=null)}/**
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
 */const i2="firebase-installations-database",s2=1,cs="firebase-installations-store";let ih=null;function Mp(){return ih||(ih=Ww(i2,s2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(cs)}}})),ih}async function uc(t,e){const n=Xc(t),i=(await Mp()).transaction(cs,"readwrite"),s=i.objectStore(cs),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&dE(t,e.fid),e}async function fE(t){const e=Xc(t),r=(await Mp()).transaction(cs,"readwrite");await r.objectStore(cs).delete(e),await r.done}async function Jc(t,e){const n=Xc(t),i=(await Mp()).transaction(cs,"readwrite"),s=i.objectStore(cs),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&dE(t,l.fid),l}/**
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
 */async function Vp(t){let e;const n=await Jc(t.appConfig,r=>{const i=o2(r),s=a2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===hf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function o2(t){const e=t||{fid:ZC(),registrationStatus:0};return pE(e)}function a2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(us.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=l2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:u2(t)}:{installationEntry:e}}async function l2(t,e){try{const n=await YC(t,e);return uc(t.appConfig,n)}catch(n){throw rE(n)&&n.customData.serverCode===409?await fE(t.appConfig):await uc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function u2(t){let e=await $y(t.appConfig);for(;e.registrationStatus===1;)await uE(100),e=await $y(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Vp(t);return r||n}return e}function $y(t){return Jc(t,e=>{if(!e)throw us.create("installation-not-found");return pE(e)})}function pE(t){return c2(t)?{fid:t.fid,registrationStatus:0}:t}function c2(t){return t.registrationStatus===1&&t.registrationTime+eE<Date.now()}/**
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
 */async function d2({appConfig:t,heartbeatServiceProvider:e},n){const r=h2(t,n),i=KC(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:tE,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await lE(()=>fetch(r,l));if(u.ok){const c=await u.json();return sE(c)}else throw await oE("Generate Auth Token",u)}function h2(t,{fid:e}){return`${iE(t)}/${e}/authTokens:generate`}/**
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
 */async function Fp(t,e=!1){let n;const r=await Jc(t.appConfig,s=>{if(!mE(s))throw us.create("not-registered");const o=s.authToken;if(!e&&m2(o))return s;if(o.requestStatus===1)return n=f2(t,e),s;{if(!navigator.onLine)throw us.create("app-offline");const l=y2(s);return n=p2(t,l),l}});return n?await n:r.authToken}async function f2(t,e){let n=await Hy(t.appConfig);for(;n.authToken.requestStatus===1;)await uE(100),n=await Hy(t.appConfig);const r=n.authToken;return r.requestStatus===0?Fp(t,e):r}function Hy(t){return Jc(t,e=>{if(!mE(e))throw us.create("not-registered");const n=e.authToken;return v2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function p2(t,e){try{const n=await d2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await uc(t.appConfig,r),n}catch(n){if(rE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await fE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await uc(t.appConfig,r)}throw n}}function mE(t){return t!==void 0&&t.registrationStatus===2}function m2(t){return t.requestStatus===2&&!g2(t)}function g2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+$C}function y2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function v2(t){return t.requestStatus===1&&t.requestTime+eE<Date.now()}/**
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
 */async function _2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Vp(e);return r?r.catch(console.error):Fp(e).catch(console.error),n.fid}/**
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
 */async function w2(t,e=!1){const n=t;return await E2(n),(await Fp(n,e)).token}async function E2(t){const{registrationPromise:e}=await Vp(t);e&&await e}/**
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
 */function T2(t){if(!t||!t.options)throw sh("App Configuration");if(!t.name)throw sh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw sh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function sh(t){return us.create("missing-app-config-values",{valueName:t})}/**
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
 */const gE="installations",I2="installations-internal",S2=t=>{const e=t.getProvider("app").getImmediate(),n=T2(e),r=Ur(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},R2=t=>{const e=t.getProvider("app").getImmediate(),n=Ur(e,gE).getImmediate();return{getId:()=>_2(n),getToken:i=>w2(n,i)}};function A2(){xn(new kn(gE,S2,"PUBLIC")),xn(new kn(I2,R2,"PRIVATE"))}A2();Ut(Zw,Lp);Ut(Zw,Lp,"esm2017");/**
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
 */const cc="analytics",P2="firebase_id",C2="origin",k2=60*1e3,x2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",jp="https://www.googletagmanager.com/gtag/js";/**
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
 */const rn=new _l("@firebase/analytics");/**
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
 */const N2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},mn=new jr("analytics","Analytics",N2);/**
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
 */function D2(t){if(!t.startsWith(jp)){const e=mn.create("invalid-gtag-resource",{gtagURL:t});return rn.warn(e.message),""}return t}function yE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function b2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function O2(t,e){const n=b2("firebase-js-sdk-policy",{createScriptURL:D2}),r=document.createElement("script"),i=`${jp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function L2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function M2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await yE(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){rn.error(l)}t("config",i,s)}async function V2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await yE(n);for(const u of o){const c=l.find(p=>p.measurementId===u),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){rn.error(s)}}function F2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await V2(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await M2(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){rn.error(l)}}return i}function j2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=F2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function U2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(jp)&&n.src.includes(t))return n;return null}/**
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
 */const z2=30,B2=1e3;class $2{constructor(e={},n=B2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vE=new $2;function H2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function W2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:H2(r)},s=x2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw mn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function q2(t,e=vE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw mn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw mn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Q2;return setTimeout(async()=>{l.abort()},k2),_E({appId:r,apiKey:i,measurementId:s},o,l,e)}async function _E(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=vE){var s;const{appId:o,measurementId:l}=t;try{await K2(r,e)}catch(u){if(l)return rn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await W2(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!G2(c)){if(i.deleteThrottleMetadata(o),l)return rn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?My(n,i.intervalMillis,z2):My(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,p),rn.debug(`Calling attemptFetch again in ${h} millis`),_E(t,p,r,i)}}function K2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(mn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function G2(t){if(!(t instanceof Dn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Q2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Y2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function X2(){if(Fw())try{await jw()}catch(t){return rn.warn(mn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return rn.warn(mn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function J2(t,e,n,r,i,s,o){var l;const u=q2(t);u.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&rn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>rn.error(T)),e.push(u);const c=X2().then(T=>{if(T)return r.getId()}),[h,p]=await Promise.all([u,c]);U2(s)||O2(s,h.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[C2]="firebase",m.update=!0,p!=null&&(m[P2]=p),i("config",h.measurementId,m),h.measurementId}/**
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
 */class Z2{constructor(e){this.app=e}_delete(){return delete Ca[this.app.options.appId],Promise.resolve()}}let Ca={},Wy=[];const qy={};let oh="dataLayer",ek="gtag",Ky,wE,Gy=!1;function tk(){const t=[];if(Vw()&&t.push("This is a browser extension environment."),wP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=mn.create("invalid-analytics-context",{errorInfo:e});rn.warn(n.message)}}function nk(t,e,n){tk();const r=t.options.appId;if(!r)throw mn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)rn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw mn.create("no-api-key");if(Ca[r]!=null)throw mn.create("already-exists",{id:r});if(!Gy){L2(oh);const{wrappedGtag:s,gtagCore:o}=j2(Ca,Wy,qy,oh,ek);wE=s,Ky=o,Gy=!0}return Ca[r]=J2(t,Wy,qy,e,Ky,oh,n),new Z2(t)}function rk(t=Yc()){t=mt(t);const e=Ur(t,cc);return e.isInitialized()?e.getImmediate():ik(t)}function ik(t,e={}){const n=Ur(t,cc);if(n.isInitialized()){const i=n.getImmediate();if(el(e,n.getOptions()))return i;throw mn.create("already-initialized")}return n.initialize({options:e})}function sk(t,e,n,r){t=mt(t),Y2(wE,Ca[t.app.options.appId],e,n,r).catch(i=>rn.error(i))}const Qy="@firebase/analytics",Yy="0.10.5";function ok(){xn(new kn(cc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return nk(r,i,n)},"PUBLIC")),xn(new kn("analytics-internal",t,"PRIVATE")),Ut(Qy,Yy),Ut(Qy,Yy,"esm2017");function t(e){try{const n=e.getProvider(cc).getImmediate();return{logEvent:(r,i,s)=>sk(n,r,i,s)}}catch(n){throw mn.create("interop-component-reg-failed",{reason:n})}}}ok();function Up(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function EE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ak=EE,TE=new jr("auth","Firebase",EE());/**
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
 */const dc=new _l("@firebase/auth");function lk(t,...e){dc.logLevel<=ye.WARN&&dc.warn(`Auth (${xi}): ${t}`,...e)}function Ru(t,...e){dc.logLevel<=ye.ERROR&&dc.error(`Auth (${xi}): ${t}`,...e)}/**
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
 */function Nn(t,...e){throw Bp(t,...e)}function qn(t,...e){return Bp(t,...e)}function zp(t,e,n){const r=Object.assign(Object.assign({},ak()),{[e]:n});return new jr("auth","Firebase",r).create(e,{appName:t.name})}function kr(t){return zp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Nn(t,"argument-error"),zp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return TE.create(t,...e)}function oe(t,e,...n){if(!t)throw Bp(e,...n)}function Sr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ru(e),new Error(e)}function Or(t,e){t||Sr(e)}/**
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
 */function ff(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ck(){return Xy()==="http:"||Xy()==="https:"}function Xy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function dk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ck()||Vw()||"connection"in navigator)?navigator.onLine:!0}function hk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Or(n>e,"Short delay should be less than long delay!"),this.isMobile=mP()||yP()}get(){return dk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $p(t,e){Or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class IE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pk=new wl(3e4,6e4);function zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Br(t,e,n,r,i={}){return SE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=vl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),IE.fetch()(RE(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function SE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fk),e);try{const i=new gk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw au(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw au(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw au(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw au(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw zp(t,h,c);Nn(t,h)}}catch(i){if(i instanceof Dn)throw i;Nn(t,"network-request-failed",{message:String(i)})}}async function El(t,e,n,r,i={}){const s=await Br(t,e,n,r,i);return"mfaPendingCredential"in s&&Nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function RE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$p(t.config,i):`${t.config.apiScheme}://${i}`}function mk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qn(this.auth,"network-request-failed")),pk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function au(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qn(t,e,r);return i.customData._tokenResponse=n,i}function Jy(t){return t!==void 0&&t.enterprise!==void 0}class yk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function vk(t,e){return Br(t,"GET","/v2/recaptchaConfig",zr(t,e))}/**
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
 */async function _k(t,e){return Br(t,"POST","/v1/accounts:delete",e)}async function AE(t,e){return Br(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ka(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wk(t,e=!1){const n=mt(t),r=await n.getIdToken(e),i=Hp(r);oe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ka(ah(i.auth_time)),issuedAtTime:ka(ah(i.iat)),expirationTime:ka(ah(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ah(t){return Number(t)*1e3}function Hp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ru("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nw(n);return i?JSON.parse(i):(Ru("Failed to decode base64 JWT payload"),null)}catch(i){return Ru("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zy(t){const e=Hp(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&Ek(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ek({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Tk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ka(this.lastLoginAt),this.creationTime=ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await rl(t,AE(n,{idToken:r}));oe(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?PE(s.providerUserInfo):[],l=Sk(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new pf(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function Ik(t){const e=mt(t);await hc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function PE(t){return t.map(e=>{var{providerId:n}=e,r=Up(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Rk(t,e){const n=await SE(t,{},async()=>{const r=vl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=RE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",IE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ak(t,e){return Br(t,"POST","/v2/accounts:revokeToken",zr(t,e))}/**
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
 */class eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Zy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Rk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new eo;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(oe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(oe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new eo,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
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
 */function Yr(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Up(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await rl(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wk(this,e)}reload(){return Ik(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(kr(this.auth));const e=await this.getIdToken();return await rl(this,_k(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:A,emailVerified:V,isAnonymous:z,providerData:N,stsTokenManager:E}=n;oe(A&&E,e,"internal-error");const y=eo.fromJSON(this.name,E);oe(typeof A=="string",e,"internal-error"),Yr(p,e.name),Yr(m,e.name),oe(typeof V=="boolean",e,"internal-error"),oe(typeof z=="boolean",e,"internal-error"),Yr(T,e.name),Yr(C,e.name),Yr(k,e.name),Yr(O,e.name),Yr(S,e.name),Yr(_,e.name);const v=new Rr({uid:A,auth:e,email:m,emailVerified:V,displayName:p,isAnonymous:z,photoURL:C,phoneNumber:T,tenantId:k,stsTokenManager:y,createdAt:S,lastLoginAt:_});return N&&Array.isArray(N)&&(v.providerData=N.map(R=>Object.assign({},R))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new eo;i.updateFromServerResponse(n);const s=new Rr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];oe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?PE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new eo;l.updateFromIdToken(r);const u=new Rr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new pf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const ev=new Map;function Ar(t){Or(t instanceof Function,"Expected a class definition");let e=ev.get(t);return e?(Or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ev.set(t,e),e)}/**
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
 */class CE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}CE.type="NONE";const tv=CE;/**
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
 */function Au(t,e,n){return`firebase:${t}:${e}:${n}`}class to{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Au(this.userKey,i.apiKey,s),this.fullPersistenceKey=Au("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new to(Ar(tv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ar(tv);const o=Au(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(o);if(h){const p=Rr._fromJSON(e,h);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new to(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new to(s,e,r))}}/**
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
 */function nv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bE(e))return"Blackberry";if(OE(e))return"Webos";if(Wp(e))return"Safari";if((e.includes("chrome/")||xE(e))&&!e.includes("edge/"))return"Chrome";if(DE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kE(t=kt()){return/firefox\//i.test(t)}function Wp(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xE(t=kt()){return/crios\//i.test(t)}function NE(t=kt()){return/iemobile/i.test(t)}function DE(t=kt()){return/android/i.test(t)}function bE(t=kt()){return/blackberry/i.test(t)}function OE(t=kt()){return/webos/i.test(t)}function Zc(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Pk(t=kt()){var e;return Zc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ck(){return vP()&&document.documentMode===10}function LE(t=kt()){return Zc(t)||DE(t)||OE(t)||bE(t)||/windows phone/i.test(t)||NE(t)}function kk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ME(t,e=[]){let n;switch(t){case"Browser":n=nv(kt());break;case"Worker":n=`${nv(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xi}/${r}`}/**
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
 */class xk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Nk(t,e={}){return Br(t,"GET","/v2/passwordPolicy",zr(t,e))}/**
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
 */const Dk=6;class bk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Dk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ok{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rv(this),this.idTokenSubscription=new rv(this),this.beforeStateQueue=new xk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ar(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await to.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await AE(this,{idToken:e}),r=await Rr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(kr(this));const n=e?mt(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nk(this),n=new bk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ak(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ar(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await to.create(this,[Ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ME(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $r(t){return mt(t)}class rv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uw(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ed={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lk(t){ed=t}function VE(t){return ed.loadJS(t)}function Mk(){return ed.recaptchaEnterpriseScript}function Vk(){return ed.gapiScript}function Fk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jk="recaptcha-enterprise",Uk="NO_RECAPTCHA";class zk{constructor(e){this.type=jk,this.auth=$r(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{vk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new yk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Jy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Uk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Jy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Mk();u.length!==0&&(u+=l),VE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function iv(t,e,n,r=!1){const i=new zk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function fc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await iv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await iv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function Bk(t,e){const n=Ur(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(el(s,e??{}))return i;Nn(i,"already-initialized")}return n.initialize({options:e})}function $k(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ar);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Hk(t,e,n){const r=$r(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=FE(e),{host:o,port:l}=Wk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),qk()}function FE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Wk(t){const e=FE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:sv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:sv(o)}}}function sv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class qp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,n){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}async function Kk(t,e){return Br(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Gk(t,e){return El(t,"POST","/v1/accounts:signInWithPassword",zr(t,e))}async function Qk(t,e){return Br(t,"POST","/v1/accounts:sendOobCode",zr(t,e))}async function Yk(t,e){return Qk(t,e)}/**
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
 */async function Xk(t,e){return El(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}async function Jk(t,e){return El(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}/**
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
 */class il extends qp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new il(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new il(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(e,n,"signInWithPassword",Gk);case"emailLink":return Xk(e,{email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(e,r,"signUpPassword",Kk);case"emailLink":return Jk(e,{idToken:n,email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function no(t,e){return El(t,"POST","/v1/accounts:signInWithIdp",zr(t,e))}/**
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
 */const Zk="http://localhost";class ds extends qp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Up(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ds(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return no(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,no(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,no(e,n)}buildRequest(){const e={requestUri:Zk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vl(n)}return e}}/**
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
 */function ex(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tx(t){const e=ha(fa(t)).link,n=e?ha(fa(e)).deep_link_id:null,r=ha(fa(t)).deep_link_id;return(r?ha(fa(r)).link:null)||r||n||e||t}class Kp{constructor(e){var n,r,i,s,o,l;const u=ha(fa(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=ex((i=u.mode)!==null&&i!==void 0?i:null);oe(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=tx(e);try{return new Kp(n)}catch{return null}}}/**
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
 */class ko{constructor(){this.providerId=ko.PROVIDER_ID}static credential(e,n){return il._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kp.parseLink(n);return oe(r,"argument-error"),il._fromEmailAndCode(e,r.code,r.tenantId)}}ko.PROVIDER_ID="password";ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Tl extends Gp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ni extends Tl{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";ni.PROVIDER_ID="facebook.com";/**
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
 */class Er extends Tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ds._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.GOOGLE_SIGN_IN_METHOD="google.com";Er.PROVIDER_ID="google.com";/**
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
 */class ri extends Tl{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.GITHUB_SIGN_IN_METHOD="github.com";ri.PROVIDER_ID="github.com";/**
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
 */class ii extends Tl{constructor(){super("twitter.com")}static credential(e,n){return ds._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ii.credential(n,r)}catch{return null}}}ii.TWITTER_SIGN_IN_METHOD="twitter.com";ii.PROVIDER_ID="twitter.com";/**
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
 */async function nx(t,e){return El(t,"POST","/v1/accounts:signUp",zr(t,e))}/**
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
 */class hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Rr._fromIdTokenResponse(e,r,i),o=ov(r);return new hs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ov(r);return new hs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ov(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class pc extends Dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pc(e,n,r,i)}}function jE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pc._fromErrorAndOperation(t,s,e,r):s})}async function rx(t,e,n=!1){const r=await rl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hs._forOperation(t,"link",r)}/**
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
 */async function ix(t,e,n=!1){const{auth:r}=t;if(Sn(r.app))return Promise.reject(kr(r));const i="reauthenticate";try{const s=await rl(t,jE(r,i,e,t),n);oe(s.idToken,r,"internal-error");const o=Hp(s.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),hs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nn(r,"user-mismatch"),s}}/**
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
 */async function UE(t,e,n=!1){if(Sn(t.app))return Promise.reject(kr(t));const r="signIn",i=await jE(t,r,e),s=await hs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function sx(t,e){return UE($r(t),e)}/**
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
 */async function zE(t){const e=$r(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ox(t,e,n){const r=$r(t);await fc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Yk)}async function ax(t,e,n){if(Sn(t.app))return Promise.reject(kr(t));const r=$r(t),o=await fc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nx).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&zE(t),u}),l=await hs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function lx(t,e,n){return Sn(t.app)?Promise.reject(kr(t)):sx(mt(t),ko.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zE(t),r})}function ux(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function cx(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function dx(t,e,n,r){return mt(t).onAuthStateChanged(e,n,r)}function BE(t){return mt(t).signOut()}const mc="__sak";/**
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
 */class $E{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mc,"1"),this.storage.removeItem(mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function hx(){const t=kt();return Wp(t)||Zc(t)}const fx=1e3,px=10;class HE extends $E{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hx()&&kk(),this.fallbackToPolling=LE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ck()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,px):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}HE.type="LOCAL";const mx=HE;/**
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
 */class WE extends $E{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}WE.type="SESSION";const qE=WE;/**
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
 */function gx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class td{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new td(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await gx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}td.receivers=[];/**
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
 */class yx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Qp("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rr(){return window}function vx(t){rr().location.href=t}/**
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
 */function KE(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function _x(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ex(){return KE()?self:null}/**
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
 */const GE="firebaseLocalStorageDb",Tx=1,gc="firebaseLocalStorage",QE="fbase_key";class Il{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nd(t,e){return t.transaction([gc],e?"readwrite":"readonly").objectStore(gc)}function Ix(){const t=indexedDB.deleteDatabase(GE);return new Il(t).toPromise()}function mf(){const t=indexedDB.open(GE,Tx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gc,{keyPath:QE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gc)?e(r):(r.close(),await Ix(),e(await mf()))})})}async function av(t,e,n){const r=nd(t,!0).put({[QE]:e,value:n});return new Il(r).toPromise()}async function Sx(t,e){const n=nd(t,!1).get(e),r=await new Il(n).toPromise();return r===void 0?null:r.value}function lv(t,e){const n=nd(t,!0).delete(e);return new Il(n).toPromise()}const Rx=800,Ax=3;class YE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ax)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return KE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=td._getInstance(Ex()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _x(),!this.activeServiceWorker)return;this.sender=new yx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mf();return await av(e,mc,"1"),await lv(e,mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>av(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Sx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=nd(i,!1).getAll();return new Il(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}YE.type="LOCAL";const Px=YE;new wl(3e4,6e4);/**
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
 */function XE(t,e){return e?Ar(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yp extends qp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return no(e,this._buildIdpRequest())}_linkToIdToken(e,n){return no(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return no(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Cx(t){return UE(t.auth,new Yp(t),t.bypassAuthState)}function kx(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),ix(n,new Yp(t),t.bypassAuthState)}async function xx(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),rx(n,new Yp(t),t.bypassAuthState)}/**
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
 */class JE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cx;case"linkViaPopup":case"linkViaRedirect":return xx;case"reauthViaPopup":case"reauthViaRedirect":return kx;default:Nn(this.auth,"internal-error")}}resolve(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Nx=new wl(2e3,1e4);async function Dx(t,e,n){if(Sn(t.app))return Promise.reject(qn(t,"operation-not-supported-in-this-environment"));const r=$r(t);uk(t,e,Gp);const i=XE(r,n);return new Yi(r,"signInViaPopup",e,i).executeNotNull()}class Yi extends JE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yi.currentPopupAction&&Yi.currentPopupAction.cancel(),Yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Or(this.filter.length===1,"Popup operations only handle one event");const e=Qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nx.get())};e()}}Yi.currentPopupAction=null;/**
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
 */const bx="pendingRedirect",Pu=new Map;class Ox extends JE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pu.get(this.auth._key());if(!e){try{const r=await Lx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pu.set(this.auth._key(),e)}return this.bypassAuthState||Pu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Lx(t,e){const n=Fx(e),r=Vx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Mx(t,e){Pu.set(t._key(),e)}function Vx(t){return Ar(t._redirectPersistence)}function Fx(t){return Au(bx,t.config.apiKey,t.name)}async function jx(t,e,n=!1){if(Sn(t.app))return Promise.reject(kr(t));const r=$r(t),i=XE(r,e),o=await new Ox(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Ux=10*60*1e3;class zx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ZE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ux&&this.cachedEventUids.clear(),this.cachedEventUids.has(uv(e))}saveEventToCache(e){this.cachedEventUids.add(uv(e)),this.lastProcessedEventTime=Date.now()}}function uv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ZE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZE(t);default:return!1}}/**
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
 */async function $x(t,e={}){return Br(t,"GET","/v1/projects",e)}/**
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
 */const Hx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wx=/^https?/;async function qx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $x(t);for(const n of e)try{if(Kx(n))return}catch{}Nn(t,"unauthorized-domain")}function Kx(t){const e=ff(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Wx.test(n))return!1;if(Hx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Gx=new wl(3e4,6e4);function cv(){const t=rr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qx(t){return new Promise((e,n)=>{var r,i,s;function o(){cv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cv(),n(qn(t,"network-request-failed"))},timeout:Gx.get()})}if(!((i=(r=rr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rr().gapi)===null||s===void 0)&&s.load)o();else{const l=Fk("iframefcb");return rr()[l]=()=>{gapi.load?o():n(qn(t,"network-request-failed"))},VE(`${Vk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Cu=null,e})}let Cu=null;function Yx(t){return Cu=Cu||Qx(t),Cu}/**
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
 */const Xx=new wl(5e3,15e3),Jx="__/auth/iframe",Zx="emulator/auth/iframe",eN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nN(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$p(e,Zx):`https://${t.config.authDomain}/${Jx}`,r={apiKey:e.apiKey,appName:t.name,v:xi},i=tN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${vl(r).slice(1)}`}async function rN(t){const e=await Yx(t),n=rr().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:nN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qn(t,"network-request-failed"),l=rr().setTimeout(()=>{s(o)},Xx.get());function u(){rr().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const iN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sN=500,oN=600,aN="_blank",lN="http://localhost";class dv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uN(t,e,n,r=sN,i=oN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},iN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=kt().toLowerCase();n&&(l=xE(c)?aN:n),kE(c)&&(e=e||lN,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[T,C])=>`${m}${T}=${C},`,"");if(Pk(c)&&l!=="_self")return cN(e||"",l),new dv(null);const p=window.open(e||"",l,h);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new dv(p)}function cN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const dN="__/auth/handler",hN="emulator/auth/handler",fN=encodeURIComponent("fac");async function hv(t,e,n,r,i,s){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xi,eventId:i};if(e instanceof Gp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof Tl){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await t._getAppCheckToken(),c=u?`#${fN}=${encodeURIComponent(u)}`:"";return`${pN(t)}?${vl(l).slice(1)}${c}`}function pN({config:t}){return t.emulator?$p(t,hN):`https://${t.authDomain}/${dN}`}/**
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
 */const lh="webStorageSupport";class mN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qE,this._completeRedirectFn=jx,this._overrideRedirectResult=Mx}async _openPopup(e,n,r,i){var s;Or((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await hv(e,n,r,ff(),i);return uN(e,o,Qp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await hv(e,n,r,ff(),i);return vx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Or(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rN(e),r=new zx(e);return n.register("authEvent",i=>(oe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lh,{type:lh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[lh];o!==void 0&&n(!!o),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return LE()||Wp()||Zc()}}const gN=mN;var fv="@firebase/auth",pv="1.7.5";/**
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
 */class yN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _N(t){xn(new kn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ME(t)},c=new Ok(r,i,s,u);return $k(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xn(new kn("auth-internal",e=>{const n=$r(e.getProvider("auth").getImmediate());return(r=>new yN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(fv,pv,vN(t)),Ut(fv,pv,"esm2017")}/**
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
 */const wN=5*60,EN=Ow("authIdTokenMaxAge")||wN;let mv=null;const TN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>EN)return;const i=n==null?void 0:n.token;mv!==i&&(mv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function IN(t=Yc()){const e=Ur(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bk(t,{popupRedirectResolver:gN,persistence:[Px,mx,qE]}),r=Ow("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=TN(s.toString());cx(n,o,()=>o(n.currentUser)),ux(n,l=>o(l))}}const i=Dw("auth");return i&&Hk(n,`http://${i}`),n}function SN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Lk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=qn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",SN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_N("Browser");var gv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,eT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(R,P,b){for(var I=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)I[Ie-2]=arguments[Ie];return y.prototype[P].apply(R,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,v){v||(v=0);var R=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)R[P]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(P=0;16>P;++P)R[P]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],P=E.g[2];var b=E.g[3],I=y+(b^v&(P^b))+R[0]+3614090360&4294967295;y=v+(I<<7&4294967295|I>>>25),I=b+(P^y&(v^P))+R[1]+3905402710&4294967295,b=y+(I<<12&4294967295|I>>>20),I=P+(v^b&(y^v))+R[2]+606105819&4294967295,P=b+(I<<17&4294967295|I>>>15),I=v+(y^P&(b^y))+R[3]+3250441966&4294967295,v=P+(I<<22&4294967295|I>>>10),I=y+(b^v&(P^b))+R[4]+4118548399&4294967295,y=v+(I<<7&4294967295|I>>>25),I=b+(P^y&(v^P))+R[5]+1200080426&4294967295,b=y+(I<<12&4294967295|I>>>20),I=P+(v^b&(y^v))+R[6]+2821735955&4294967295,P=b+(I<<17&4294967295|I>>>15),I=v+(y^P&(b^y))+R[7]+4249261313&4294967295,v=P+(I<<22&4294967295|I>>>10),I=y+(b^v&(P^b))+R[8]+1770035416&4294967295,y=v+(I<<7&4294967295|I>>>25),I=b+(P^y&(v^P))+R[9]+2336552879&4294967295,b=y+(I<<12&4294967295|I>>>20),I=P+(v^b&(y^v))+R[10]+4294925233&4294967295,P=b+(I<<17&4294967295|I>>>15),I=v+(y^P&(b^y))+R[11]+2304563134&4294967295,v=P+(I<<22&4294967295|I>>>10),I=y+(b^v&(P^b))+R[12]+1804603682&4294967295,y=v+(I<<7&4294967295|I>>>25),I=b+(P^y&(v^P))+R[13]+4254626195&4294967295,b=y+(I<<12&4294967295|I>>>20),I=P+(v^b&(y^v))+R[14]+2792965006&4294967295,P=b+(I<<17&4294967295|I>>>15),I=v+(y^P&(b^y))+R[15]+1236535329&4294967295,v=P+(I<<22&4294967295|I>>>10),I=y+(P^b&(v^P))+R[1]+4129170786&4294967295,y=v+(I<<5&4294967295|I>>>27),I=b+(v^P&(y^v))+R[6]+3225465664&4294967295,b=y+(I<<9&4294967295|I>>>23),I=P+(y^v&(b^y))+R[11]+643717713&4294967295,P=b+(I<<14&4294967295|I>>>18),I=v+(b^y&(P^b))+R[0]+3921069994&4294967295,v=P+(I<<20&4294967295|I>>>12),I=y+(P^b&(v^P))+R[5]+3593408605&4294967295,y=v+(I<<5&4294967295|I>>>27),I=b+(v^P&(y^v))+R[10]+38016083&4294967295,b=y+(I<<9&4294967295|I>>>23),I=P+(y^v&(b^y))+R[15]+3634488961&4294967295,P=b+(I<<14&4294967295|I>>>18),I=v+(b^y&(P^b))+R[4]+3889429448&4294967295,v=P+(I<<20&4294967295|I>>>12),I=y+(P^b&(v^P))+R[9]+568446438&4294967295,y=v+(I<<5&4294967295|I>>>27),I=b+(v^P&(y^v))+R[14]+3275163606&4294967295,b=y+(I<<9&4294967295|I>>>23),I=P+(y^v&(b^y))+R[3]+4107603335&4294967295,P=b+(I<<14&4294967295|I>>>18),I=v+(b^y&(P^b))+R[8]+1163531501&4294967295,v=P+(I<<20&4294967295|I>>>12),I=y+(P^b&(v^P))+R[13]+2850285829&4294967295,y=v+(I<<5&4294967295|I>>>27),I=b+(v^P&(y^v))+R[2]+4243563512&4294967295,b=y+(I<<9&4294967295|I>>>23),I=P+(y^v&(b^y))+R[7]+1735328473&4294967295,P=b+(I<<14&4294967295|I>>>18),I=v+(b^y&(P^b))+R[12]+2368359562&4294967295,v=P+(I<<20&4294967295|I>>>12),I=y+(v^P^b)+R[5]+4294588738&4294967295,y=v+(I<<4&4294967295|I>>>28),I=b+(y^v^P)+R[8]+2272392833&4294967295,b=y+(I<<11&4294967295|I>>>21),I=P+(b^y^v)+R[11]+1839030562&4294967295,P=b+(I<<16&4294967295|I>>>16),I=v+(P^b^y)+R[14]+4259657740&4294967295,v=P+(I<<23&4294967295|I>>>9),I=y+(v^P^b)+R[1]+2763975236&4294967295,y=v+(I<<4&4294967295|I>>>28),I=b+(y^v^P)+R[4]+1272893353&4294967295,b=y+(I<<11&4294967295|I>>>21),I=P+(b^y^v)+R[7]+4139469664&4294967295,P=b+(I<<16&4294967295|I>>>16),I=v+(P^b^y)+R[10]+3200236656&4294967295,v=P+(I<<23&4294967295|I>>>9),I=y+(v^P^b)+R[13]+681279174&4294967295,y=v+(I<<4&4294967295|I>>>28),I=b+(y^v^P)+R[0]+3936430074&4294967295,b=y+(I<<11&4294967295|I>>>21),I=P+(b^y^v)+R[3]+3572445317&4294967295,P=b+(I<<16&4294967295|I>>>16),I=v+(P^b^y)+R[6]+76029189&4294967295,v=P+(I<<23&4294967295|I>>>9),I=y+(v^P^b)+R[9]+3654602809&4294967295,y=v+(I<<4&4294967295|I>>>28),I=b+(y^v^P)+R[12]+3873151461&4294967295,b=y+(I<<11&4294967295|I>>>21),I=P+(b^y^v)+R[15]+530742520&4294967295,P=b+(I<<16&4294967295|I>>>16),I=v+(P^b^y)+R[2]+3299628645&4294967295,v=P+(I<<23&4294967295|I>>>9),I=y+(P^(v|~b))+R[0]+4096336452&4294967295,y=v+(I<<6&4294967295|I>>>26),I=b+(v^(y|~P))+R[7]+1126891415&4294967295,b=y+(I<<10&4294967295|I>>>22),I=P+(y^(b|~v))+R[14]+2878612391&4294967295,P=b+(I<<15&4294967295|I>>>17),I=v+(b^(P|~y))+R[5]+4237533241&4294967295,v=P+(I<<21&4294967295|I>>>11),I=y+(P^(v|~b))+R[12]+1700485571&4294967295,y=v+(I<<6&4294967295|I>>>26),I=b+(v^(y|~P))+R[3]+2399980690&4294967295,b=y+(I<<10&4294967295|I>>>22),I=P+(y^(b|~v))+R[10]+4293915773&4294967295,P=b+(I<<15&4294967295|I>>>17),I=v+(b^(P|~y))+R[1]+2240044497&4294967295,v=P+(I<<21&4294967295|I>>>11),I=y+(P^(v|~b))+R[8]+1873313359&4294967295,y=v+(I<<6&4294967295|I>>>26),I=b+(v^(y|~P))+R[15]+4264355552&4294967295,b=y+(I<<10&4294967295|I>>>22),I=P+(y^(b|~v))+R[6]+2734768916&4294967295,P=b+(I<<15&4294967295|I>>>17),I=v+(b^(P|~y))+R[13]+1309151649&4294967295,v=P+(I<<21&4294967295|I>>>11),I=y+(P^(v|~b))+R[4]+4149444226&4294967295,y=v+(I<<6&4294967295|I>>>26),I=b+(v^(y|~P))+R[11]+3174756917&4294967295,b=y+(I<<10&4294967295|I>>>22),I=P+(y^(b|~v))+R[2]+718787259&4294967295,P=b+(I<<15&4294967295|I>>>17),I=v+(b^(P|~y))+R[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(P+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,R=this.B,P=this.h,b=0;b<y;){if(P==0)for(;b<=v;)i(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<y;)if(R[P++]=E.charCodeAt(b++),P==this.blockSize){i(this,R),P=0;break}}else for(;b<y;)if(R[P++]=E[b++],P==this.blockSize){i(this,R),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var R=0;32>R;R+=8)E[v++]=this.g[y]>>>R&255;return E};function s(E,y){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function o(E,y){this.h=y;for(var v=[],R=!0,P=E.length-1;0<=P;P--){var b=E[P]|0;R&&b==y||(v[P]=b,R=!1)}this.g=v}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return O(c(-E));for(var y=[],v=1,R=0;E>=v;R++)y[R]=E/v|0,v*=4294967296;return new o(y,0)}function h(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return O(h(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=c(Math.pow(y,8)),R=p,P=0;P<E.length;P+=8){var b=Math.min(8,E.length-P),I=parseInt(E.substring(P,P+b),y);8>b?(b=c(Math.pow(y,b)),R=R.j(b).add(c(I))):(R=R.j(v),R=R.add(c(I)))}return R}var p=u(0),m=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var R=this.i(v);E+=(0<=R?R:4294967296+R)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(k(this))return"-"+O(this).toString(E);for(var y=c(Math.pow(E,6)),v=this,R="";;){var P=V(v,y).g;v=S(v,P.j(y));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=P,C(v))return b+R;for(;6>b.length;)b="0"+b;R=b+R}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=S(this,E),k(E)?-1:C(E)?0:1};function O(E){for(var y=E.g.length,v=[],R=0;R<y;R++)v[R]=~E.g[R];return new o(v,~E.h).add(m)}t.abs=function(){return k(this)?O(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],R=0,P=0;P<=y;P++){var b=R+(this.i(P)&65535)+(E.i(P)&65535),I=(b>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);R=I>>>16,b&=65535,I&=65535,v[P]=I<<16|b}return new o(v,v[v.length-1]&-2147483648?-1:0)};function S(E,y){return E.add(O(y))}t.j=function(E){if(C(this)||C(E))return p;if(k(this))return k(E)?O(this).j(O(E)):O(O(this).j(E));if(k(E))return O(this.j(O(E)));if(0>this.l(T)&&0>E.l(T))return c(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],R=0;R<2*y;R++)v[R]=0;for(R=0;R<this.g.length;R++)for(var P=0;P<E.g.length;P++){var b=this.i(R)>>>16,I=this.i(R)&65535,Ie=E.i(P)>>>16,_t=E.i(P)&65535;v[2*R+2*P]+=I*_t,_(v,2*R+2*P),v[2*R+2*P+1]+=b*_t,_(v,2*R+2*P+1),v[2*R+2*P+1]+=I*Ie,_(v,2*R+2*P+1),v[2*R+2*P+2]+=b*Ie,_(v,2*R+2*P+2)}for(R=0;R<y;R++)v[R]=v[2*R+1]<<16|v[2*R];for(R=y;R<2*y;R++)v[R]=0;return new o(v,0)};function _(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function A(E,y){this.g=E,this.h=y}function V(E,y){if(C(y))throw Error("division by zero");if(C(E))return new A(p,p);if(k(E))return y=V(O(E),y),new A(O(y.g),O(y.h));if(k(y))return y=V(E,O(y)),new A(O(y.g),y.h);if(30<E.g.length){if(k(E)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,R=y;0>=R.l(E);)v=z(v),R=z(R);var P=N(v,1),b=N(R,1);for(R=N(R,2),v=N(v,2);!C(R);){var I=b.add(R);0>=I.l(E)&&(P=P.add(v),b=I),R=N(R,1),v=N(v,1)}return y=S(E,P.j(y)),new A(P,y)}for(P=p;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),R=Math.ceil(Math.log(v)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),b=c(v),I=b.j(y);k(I)||0<I.l(E);)v-=R,b=c(v),I=b.j(y);C(b)&&(b=m),P=P.add(b),E=S(E,I)}return new A(P,E)}t.A=function(E){return V(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],R=0;R<y;R++)v[R]=this.i(R)&E.i(R);return new o(v,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],R=0;R<y;R++)v[R]=this.i(R)|E.i(R);return new o(v,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],R=0;R<y;R++)v[R]=this.i(R)^E.i(R);return new o(v,this.h^E.h)};function z(E){for(var y=E.g.length+1,v=[],R=0;R<y;R++)v[R]=E.i(R)<<1|E.i(R-1)>>>31;return new o(v,E.h)}function N(E,y){var v=y>>5;y%=32;for(var R=E.g.length-v,P=[],b=0;b<R;b++)P[b]=0<y?E.i(b+v)>>>y|E.i(b+v+1)<<32-y:E.i(b+v);return new o(P,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,eT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,es=o}).apply(typeof gv<"u"?gv:typeof self<"u"?self:typeof window<"u"?window:{});var lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tT,nT,pa,rT,ku,gf,iT,sT,oT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof lu=="object"&&lu];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var L=a[g];if(!(L in f))break e;f=f[L]}a=a[a.length-1],g=f[a],d=d(g),d!=g&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var f=0,g=!1,L={next:function(){if(!g&&f<a.length){var j=f++;return{value:d(j,a[j]),done:!1}}return g=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,g),a.apply(d,L)}}return function(){return a.apply(d,arguments)}}function m(a,d,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function T(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,L,j){for(var q=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)q[Oe-2]=arguments[Oe];return d.prototype[L].apply(g,q)}}function k(a){const d=a.length;if(0<d){const f=Array(d);for(let g=0;g<d;g++)f[g]=a[g];return f}return[]}function O(a,d){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const L=a.length||0,j=g.length||0;a.length=L+j;for(let q=0;q<j;q++)a[L+q]=g[q]}else a.push(g)}}class S{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function _(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var z=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function N(a,d,f){for(const g in a)d.call(f,a[g],g,a)}function E(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function y(a){const d={};for(const f in a)d[f]=a[f];return d}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,d){let f,g;for(let L=1;L<arguments.length;L++){g=arguments[L];for(f in g)a[f]=g[f];for(let j=0;j<v.length;j++)f=v[j],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function P(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function b(a){l.setTimeout(()=>{throw a},0)}function I(){var a=ee;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Ie{constructor(){this.h=this.g=null}add(d,f){const g=_t.get();g.set(d,f),this.h?this.h.next=g:this.g=g,this.h=g}}var _t=new S(()=>new on,a=>a.reset());class on{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,K=!1,ee=new Ie,ne=()=>{const a=l.Promise.resolve(void 0);Re=()=>{a.then(_e)}};var _e=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){b(f)}var d=_t;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}K=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var Xe=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return a}();function Je(a,d){if(Ne.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(z){e:{try{V(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ze[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Je.aa.h.call(this)}}C(Je,Ne);var Ze={2:"touch",3:"pen",4:"mouse"};Je.prototype.h=function(){Je.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ae="closure_listenable_"+(1e6*Math.random()|0),be=0;function bn(a,d,f,g,L){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!g,this.ha=L,this.key=++be,this.da=this.fa=!1}function an(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function wt(a){this.src=a,this.g={},this.h=0}wt.prototype.add=function(a,d,f,g,L){var j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);var q=$t(a,d,g,L);return-1<q?(d=a[q],f||(d.fa=!1)):(d=new bn(d,this.src,j,!!g,L),d.fa=f,a.push(d)),d};function Fe(a,d){var f=d.type;if(f in a.g){var g=a.g[f],L=Array.prototype.indexOf.call(g,d,void 0),j;(j=0<=L)&&Array.prototype.splice.call(g,L,1),j&&(an(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function $t(a,d,f,g){for(var L=0;L<a.length;++L){var j=a[L];if(!j.da&&j.listener==d&&j.capture==!!f&&j.ha==g)return L}return-1}var Gn="closure_lm_"+(1e6*Math.random()|0),re={};function Ce(a,d,f,g,L){if(Array.isArray(d)){for(var j=0;j<d.length;j++)Ce(a,d[j],f,g,L);return null}return f=Qt(f),a&&a[ae]?a.K(d,f,c(g)?!!g.capture:!!g,L):et(a,d,f,!1,g,L)}function et(a,d,f,g,L,j){if(!d)throw Error("Invalid event type");var q=c(L)?!!L.capture:!!L,Oe=Ln(a);if(Oe||(a[Gn]=Oe=new wt(a)),f=Oe.add(d,f,g,q,j),f.proxy)return f;if(g=cr(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Xe||(L=q),L===void 0&&(L=!1),a.addEventListener(d.toString(),g,L);else if(a.attachEvent)a.attachEvent(hr(d.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function cr(){function a(f){return d.call(a.src,a.listener,f)}const d=Di;return a}function On(a,d,f,g,L){if(Array.isArray(d))for(var j=0;j<d.length;j++)On(a,d[j],f,g,L);else g=c(g)?!!g.capture:!!g,f=Qt(f),a&&a[ae]?(a=a.i,d=String(d).toString(),d in a.g&&(j=a.g[d],f=$t(j,f,g,L),-1<f&&(an(j[f]),Array.prototype.splice.call(j,f,1),j.length==0&&(delete a.g[d],a.h--)))):a&&(a=Ln(a))&&(d=a.g[d.toString()],a=-1,d&&(a=$t(d,f,g,L)),(f=-1<a?d[a]:null)&&dr(f))}function dr(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[ae])Fe(d.i,a);else{var f=a.type,g=a.proxy;d.removeEventListener?d.removeEventListener(f,g,a.capture):d.detachEvent?d.detachEvent(hr(f),g):d.addListener&&d.removeListener&&d.removeListener(g),(f=Ln(d))?(Fe(f,a),f.h==0&&(f.src=null,d[Gn]=null)):an(a)}}}function hr(a){return a in re?re[a]:re[a]="on"+a}function Di(a,d){if(a.da)a=!0;else{d=new Je(d,this);var f=a.listener,g=a.ha||a.src;a.fa&&dr(a),a=f.call(g,d)}return a}function Ln(a){return a=a[Gn],a instanceof wt?a:null}var Qn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qt(a){return typeof a=="function"?a:(a[Qn]||(a[Qn]=function(d){return a.handleEvent(d)}),a[Qn])}function $e(){pe.call(this),this.i=new wt(this),this.M=this,this.F=null}C($e,pe),$e.prototype[ae]=!0,$e.prototype.removeEventListener=function(a,d,f,g){On(this,a,d,f,g)};function it(a,d){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=d.type||d,typeof d=="string")d=new Ne(d,a);else if(d instanceof Ne)d.target=d.target||a;else{var L=d;d=new Ne(g,a),R(d,L)}if(L=!0,f)for(var j=f.length-1;0<=j;j--){var q=d.g=f[j];L=Yt(q,g,!0,d)&&L}if(q=d.g=a,L=Yt(q,g,!0,d)&&L,L=Yt(q,g,!1,d)&&L,f)for(j=0;j<f.length;j++)q=d.g=f[j],L=Yt(q,g,!1,d)&&L}$e.prototype.N=function(){if($e.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],g=0;g<f.length;g++)an(f[g]);delete a.g[d],a.h--}}this.F=null},$e.prototype.K=function(a,d,f,g){return this.i.add(String(a),d,!1,f,g)},$e.prototype.L=function(a,d,f,g){return this.i.add(String(a),d,!0,f,g)};function Yt(a,d,f,g){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,j=0;j<d.length;++j){var q=d[j];if(q&&!q.da&&q.capture==f){var Oe=q.listener,Tt=q.ha||q.src;q.fa&&Fe(a.i,q),L=Oe.call(Tt,g)!==!1&&L}}return L&&!g.defaultPrevented}function _n(a,d,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function bo(a){a.g=_n(()=>{a.g=null,a.i&&(a.i=!1,bo(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Is extends pe{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:bo(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bi(a){pe.call(this),this.h=a,this.g={}}C(bi,pe);var Mn=[];function Oo(a){N(a.g,function(d,f){this.g.hasOwnProperty(f)&&dr(d)},a),a.g={}}bi.prototype.N=function(){bi.aa.N.call(this),Oo(this)},bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ss=l.JSON.stringify,Nl=l.JSON.parse,vd=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Rs(){}Rs.prototype.h=null;function Oi(a){return a.h||(a.h=a.i())}function Lo(){}var fr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hr(){Ne.call(this,"d")}C(Hr,Ne);function Li(){Ne.call(this,"c")}C(Li,Ne);var pr={},Mo=null;function As(){return Mo=Mo||new $e}pr.La="serverreachability";function Vo(a){Ne.call(this,pr.La,a)}C(Vo,Ne);function mr(a){const d=As();it(d,new Vo(d))}pr.STAT_EVENT="statevent";function Mi(a,d){Ne.call(this,pr.STAT_EVENT,a),this.stat=d}C(Mi,Ne);function Et(a){const d=As();it(d,new Mi(d,a))}pr.Ma="timingevent";function Dl(a,d){Ne.call(this,pr.Ma,a),this.size=d}C(Dl,Ne);function x(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function D(){this.g=!0}D.prototype.xa=function(){this.g=!1};function M(a,d,f,g,L,j){a.info(function(){if(a.g)if(j)for(var q="",Oe=j.split("&"),Tt=0;Tt<Oe.length;Tt++){var Ae=Oe[Tt].split("=");if(1<Ae.length){var Dt=Ae[0];Ae=Ae[1];var bt=Dt.split("_");q=2<=bt.length&&bt[1]=="type"?q+(Dt+"="+Ae+"&"):q+(Dt+"=redacted&")}}else q=null;else q=j;return"XMLHTTP REQ ("+g+") [attempt "+L+"]: "+d+`
`+f+`
`+q})}function U(a,d,f,g,L,j,q){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+L+"]: "+d+`
`+f+`
`+j+" "+q})}function G(a,d,f,g){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+se(a,f)+(g?" "+g:"")})}function X(a,d){a.info(function(){return"TIMEOUT: "+d})}D.prototype.info=function(){};function se(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var L=g[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var q=1;q<L.length;q++)L[q]=""}}}}return Ss(f)}catch{return d}}var W={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ue={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Z;function J(){}C(J,Rs),J.prototype.g=function(){return new XMLHttpRequest},J.prototype.i=function(){return{}},Z=new J;function me(a,d,f,g){this.j=a,this.i=d,this.l=f,this.R=g||1,this.U=new bi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new we}function we(){this.i=null,this.g="",this.h=!1}var ke={},Ee={};function st(a,d,f){a.L=1,a.v=Ml(yr(d)),a.m=f,a.P=!0,We(a,null)}function We(a,d){a.F=Date.now(),Vn(a),a.A=yr(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Om(f.i,"t",g),a.C=0,f=a.j.J,a.h=new we,a.g=Jm(a.j,f?d:null,!a.m),0<a.O&&(a.M=new Is(m(a.Y,a,a.g),a.O)),d=a.U,f=a.g,g=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(Mn[0]=L.toString()),L=Mn);for(var j=0;j<L.length;j++){var q=Ce(f,L[j],g||d.handleEvent,!1,d.h||d);if(!q)break;d.g[q.key]=q}d=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),mr(),M(a.i,a.u,a.A,a.l,a.R,a.m)}me.prototype.ca=function(a){a=a.target;const d=this.M;d&&vr(a)==3?d.j():this.Y(a)},me.prototype.Y=function(a){try{if(a==this.g)e:{const bt=vr(this.g);var d=this.g.Ba();const xs=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||zm(this.g)))){this.J||bt!=4||d==7||(d==8||0>=xs?mr(3):mr(2)),Xn(this);var f=this.g.Z();this.X=f;t:if(Wr(this)){var g=zm(this.g);a="";var L=g.length,j=vr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),xt(this);var q="";break t}this.h.i=new l.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,a+=this.h.i.decode(g[d],{stream:!(j&&d==L-1)});g.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,U(this.i,this.u,this.A,this.l,this.R,bt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,Tt=this.g;if((Oe=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(Oe)){var Ae=Oe;break t}}Ae=null}if(f=Ae)G(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qr(this,f);else{this.o=!1,this.s=3,Et(12),wn(this),xt(this);break e}}if(this.P){f=!0;let Fn;for(;!this.J&&this.C<q.length;)if(Fn=Yn(this,q),Fn==Ee){bt==4&&(this.s=4,Et(14),f=!1),G(this.i,this.l,null,"[Incomplete Response]");break}else if(Fn==ke){this.s=4,Et(15),G(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else G(this.i,this.l,Fn,null),qr(this,Fn);if(Wr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||q.length!=0||this.h.h||(this.s=1,Et(16),f=!1),this.o=this.o&&f,!f)G(this.i,this.l,q,"[Invalid Chunked Response]"),wn(this),xt(this);else if(0<q.length&&!this.W){this.W=!0;var Dt=this.j;Dt.g==this&&Dt.ba&&!Dt.M&&(Dt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Td(Dt),Dt.M=!0,Et(11))}}else G(this.i,this.l,q,null),qr(this,q);bt==4&&wn(this),this.o&&!this.J&&(bt==4?Gm(this.j,this):(this.o=!1,Vn(this)))}else GI(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),wn(this),xt(this)}}}catch{}finally{}};function Wr(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Yn(a,d){var f=a.C,g=d.indexOf(`
`,f);return g==-1?Ee:(f=Number(d.substring(f,g)),isNaN(f)?ke:(g+=1,g+f>d.length?Ee:(d=d.slice(g,g+f),a.C=g+f,d)))}me.prototype.cancel=function(){this.J=!0,wn(this)};function Vn(a){a.S=Date.now()+a.I,gr(a,a.I)}function gr(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=x(m(a.ba,a),d)}function Xn(a){a.B&&(l.clearTimeout(a.B),a.B=null)}me.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(X(this.i,this.A),this.L!=2&&(mr(),Et(17)),wn(this),this.s=2,xt(this)):gr(this,this.S-a)};function xt(a){a.j.G==0||a.J||Gm(a.j,a)}function wn(a){Xn(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Oo(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function qr(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||xe(f.h,a))){if(!a.K&&xe(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var L=g;if(L[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)zl(f),jl(f);else break e;Ed(f),Et(18)}}else f.za=L[1],0<f.za-f.T&&37500>L[2]&&f.F&&f.v==0&&!f.C&&(f.C=x(m(f.Za,f),6e3));if(1>=Nt(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Fi(f,11)}else if((a.K||f.g==a)&&zl(f),!_(d))for(L=f.Da.g.parse(d),d=0;d<L.length;d++){let Ae=L[d];if(f.T=Ae[0],Ae=Ae[1],f.G==2)if(Ae[0]=="c"){f.K=Ae[1],f.ia=Ae[2];const Dt=Ae[3];Dt!=null&&(f.la=Dt,f.j.info("VER="+f.la));const bt=Ae[4];bt!=null&&(f.Aa=bt,f.j.info("SVER="+f.Aa));const xs=Ae[5];xs!=null&&typeof xs=="number"&&0<xs&&(g=1.5*xs,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Fn=a.g;if(Fn){const $l=Fn.g?Fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($l){var j=g.h;j.g||$l.indexOf("spdy")==-1&&$l.indexOf("quic")==-1&&$l.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(ln(j,j.h),j.h=null))}if(g.D){const Id=Fn.g?Fn.g.getResponseHeader("X-HTTP-Session-Id"):null;Id&&(g.ya=Id,Ue(g.I,g.D,Id))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var q=a;if(g.qa=Xm(g,g.J?g.ia:null,g.W),q.K){Fo(g.h,q);var Oe=q,Tt=g.L;Tt&&(Oe.I=Tt),Oe.B&&(Xn(Oe),Vn(Oe)),g.g=q}else qm(g);0<f.i.length&&Ul(f)}else Ae[0]!="stop"&&Ae[0]!="close"||Fi(f,7);else f.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?Fi(f,7):wd(f):Ae[0]!="noop"&&f.l&&f.l.ta(Ae),f.v=0)}}mr(4)}catch{}}var Ps=class{constructor(a,d){this.g=a,this.map=d}};function he(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function je(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Nt(a){return a.h?1:a.g?a.g.size:0}function xe(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function ln(a,d){a.g?a.g.add(d):a.h=d}function Fo(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}he.prototype.cancel=function(){if(this.i=bl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function bl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return k(a.i)}function bI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],f=a.length,g=0;g<f;g++)d.push(a[g]);return d}d=[],f=0;for(g in a)d[f++]=a[g];return d}function OI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const g in a)d[f++]=g;return d}}}function Cm(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=OI(a),g=bI(a),L=g.length,j=0;j<L;j++)d.call(void 0,g[j],f&&f[j],a)}var km=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LI(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),L=null;if(0<=g){var j=a[f].substring(0,g);L=a[f].substring(g+1)}else j=a[f];d(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Vi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vi){this.h=a.h,Ol(this,a.j),this.o=a.o,this.g=a.g,Ll(this,a.s),this.l=a.l;var d=a.i,f=new zo;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),xm(this,f),this.m=a.m}else a&&(d=String(a).match(km))?(this.h=!1,Ol(this,d[1]||"",!0),this.o=jo(d[2]||""),this.g=jo(d[3]||"",!0),Ll(this,d[4]),this.l=jo(d[5]||"",!0),xm(this,d[6]||"",!0),this.m=jo(d[7]||"")):(this.h=!1,this.i=new zo(null,this.h))}Vi.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Uo(d,Nm,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Uo(d,Nm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Uo(f,f.charAt(0)=="/"?FI:VI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Uo(f,UI)),a.join("")};function yr(a){return new Vi(a)}function Ol(a,d,f){a.j=f?jo(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ll(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function xm(a,d,f){d instanceof zo?(a.i=d,zI(a.i,a.h)):(f||(d=Uo(d,jI)),a.i=new zo(d,a.h))}function Ue(a,d,f){a.i.set(d,f)}function Ml(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function jo(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Uo(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,MI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function MI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Nm=/[#\/\?@]/g,VI=/[#\?:]/g,FI=/[#\?]/g,jI=/[#\?@]/g,UI=/#/g;function zo(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Kr(a){a.g||(a.g=new Map,a.h=0,a.i&&LI(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=zo.prototype,t.add=function(a,d){Kr(this),this.i=null,a=Cs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Dm(a,d){Kr(a),d=Cs(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function bm(a,d){return Kr(a),d=Cs(a,d),a.g.has(d)}t.forEach=function(a,d){Kr(this),this.g.forEach(function(f,g){f.forEach(function(L){a.call(d,L,g,this)},this)},this)},t.na=function(){Kr(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let g=0;g<d.length;g++){const L=a[g];for(let j=0;j<L.length;j++)f.push(d[g])}return f},t.V=function(a){Kr(this);let d=[];if(typeof a=="string")bm(this,a)&&(d=d.concat(this.g.get(Cs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return Kr(this),this.i=null,a=Cs(this,a),bm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Om(a,d,f){Dm(a,d),0<f.length&&(a.i=null,a.g.set(Cs(a,d),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var g=d[f];const j=encodeURIComponent(String(g)),q=this.V(g);for(g=0;g<q.length;g++){var L=j;q[g]!==""&&(L+="="+encodeURIComponent(String(q[g]))),a.push(L)}}return this.i=a.join("&")};function Cs(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function zI(a,d){d&&!a.j&&(Kr(a),a.i=null,a.g.forEach(function(f,g){var L=g.toLowerCase();g!=L&&(Dm(this,g),Om(this,L,f))},a)),a.j=d}function BI(a,d){const f=new D;if(l.Image){const g=new Image;g.onload=T(Gr,f,"TestLoadImage: loaded",!0,d,g),g.onerror=T(Gr,f,"TestLoadImage: error",!1,d,g),g.onabort=T(Gr,f,"TestLoadImage: abort",!1,d,g),g.ontimeout=T(Gr,f,"TestLoadImage: timeout",!1,d,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else d(!1)}function $I(a,d){const f=new D,g=new AbortController,L=setTimeout(()=>{g.abort(),Gr(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:g.signal}).then(j=>{clearTimeout(L),j.ok?Gr(f,"TestPingServer: ok",!0,d):Gr(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),Gr(f,"TestPingServer: error",!1,d)})}function Gr(a,d,f,g,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),g(f)}catch{}}function HI(){this.g=new vd}function WI(a,d,f){const g=f||"";try{Cm(a,function(L,j){let q=L;c(L)&&(q=Ss(L)),d.push(g+j+"="+encodeURIComponent(q))})}catch(L){throw d.push(g+"type="+encodeURIComponent("_badmap")),L}}function Bo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Bo,Rs),Bo.prototype.g=function(){return new Vl(this.l,this.j)},Bo.prototype.i=function(a){return function(){return a}}({});function Vl(a,d){$e.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Vl,$e),t=Vl.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Ho(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$o(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ho(this)),this.g&&(this.readyState=3,Ho(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?$o(this):Ho(this),this.readyState==3&&Lm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,$o(this))},t.Qa=function(a){this.g&&(this.response=a,$o(this))},t.ga=function(){this.g&&$o(this)};function $o(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ho(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function Ho(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Vl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Mm(a){let d="";return N(a,function(f,g){d+=g,d+=":",d+=f,d+=`\r
`}),d}function _d(a,d,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Mm(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ue(a,d,f))}function tt(a){$e.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(tt,$e);var qI=/^https?$/i,KI=["POST","PUT"];t=tt.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Z.g(),this.v=this.o?Oi(this.o):Oi(Z),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(j){Vm(this,j);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var L in g)f.set(L,g[L]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const j of g.keys())f.set(j,g.get(j));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(j=>j.toLowerCase()=="content-type"),L=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(KI,d,void 0))||g||L||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,q]of f)this.g.setRequestHeader(j,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Um(this),this.u=!0,this.g.send(a),this.u=!1}catch(j){Vm(this,j)}};function Vm(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Fm(a),Fl(a)}function Fm(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,it(this,"complete"),it(this,"abort"),Fl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fl(this,!0)),tt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?jm(this):this.bb())},t.bb=function(){jm(this)};function jm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||vr(a)!=4||a.Z()!=2)){if(a.u&&vr(a)==4)_n(a.Ea,0,a);else if(it(a,"readystatechange"),vr(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var g;if(g=q===0){var L=String(a.D).match(km)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),g=!qI.test(L?L.toLowerCase():"")}f=g}if(f)it(a,"complete"),it(a,"success");else{a.m=6;try{var j=2<vr(a)?a.g.statusText:""}catch{j=""}a.l=j+" ["+a.Z()+"]",Fm(a)}}finally{Fl(a)}}}}function Fl(a,d){if(a.g){Um(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||it(a,"ready");try{f.onreadystatechange=g}catch{}}}function Um(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function vr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<vr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Nl(d)}};function zm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function GI(a){const d={};a=(a.g&&2<=vr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var f=P(a[g]);const L=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const j=d[L]||[];d[L]=j,j.push(f)}E(d,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wo(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function Bm(a){this.Aa=0,this.i=[],this.j=new D,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wo("baseRetryDelayMs",5e3,a),this.cb=Wo("retryDelaySeedMs",1e4,a),this.Wa=Wo("forwardChannelMaxRetries",2,a),this.wa=Wo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new he(a&&a.concurrentRequestLimit),this.Da=new HI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Bm.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,g){Et(0),this.W=a,this.H=d||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Xm(this,null,this.W),Ul(this)};function wd(a){if($m(a),a.G==3){var d=a.U++,f=yr(a.I);if(Ue(f,"SID",a.K),Ue(f,"RID",d),Ue(f,"TYPE","terminate"),qo(a,f),d=new me(a,a.j,d),d.L=2,d.v=Ml(yr(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=Jm(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Vn(d)}Ym(a)}function jl(a){a.g&&(Td(a),a.g.cancel(),a.g=null)}function $m(a){jl(a),a.u&&(l.clearTimeout(a.u),a.u=null),zl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ul(a){if(!je(a.h)&&!a.s){a.s=!0;var d=a.Ga;Re||ne(),K||(Re(),K=!0),ee.add(d,a),a.B=0}}function QI(a,d){return Nt(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=x(m(a.Ga,a,d),Qm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new me(this,this.j,a);let j=this.o;if(this.S&&(j?(j=y(j),R(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Wm(this,L,d),f=yr(this.I),Ue(f,"RID",a),Ue(f,"CVER",22),this.D&&Ue(f,"X-HTTP-Session-Id",this.D),qo(this,f),j&&(this.O?d="headers="+encodeURIComponent(String(Mm(j)))+"&"+d:this.m&&_d(f,this.m,j)),ln(this.h,L),this.Ua&&Ue(f,"TYPE","init"),this.P?(Ue(f,"$req",d),Ue(f,"SID","null"),L.T=!0,st(L,f,null)):st(L,f,d),this.G=2}}else this.G==3&&(a?Hm(this,a):this.i.length==0||je(this.h)||Hm(this))};function Hm(a,d){var f;d?f=d.l:f=a.U++;const g=yr(a.I);Ue(g,"SID",a.K),Ue(g,"RID",f),Ue(g,"AID",a.T),qo(a,g),a.m&&a.o&&_d(g,a.m,a.o),f=new me(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Wm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ln(a.h,f),st(f,g,d)}function qo(a,d){a.H&&N(a.H,function(f,g){Ue(d,g,f)}),a.l&&Cm({},function(f,g){Ue(d,g,f)})}function Wm(a,d,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var L=a.i;let j=-1;for(;;){const q=["count="+f];j==-1?0<f?(j=L[0].g,q.push("ofs="+j)):j=0:q.push("ofs="+j);let Oe=!0;for(let Tt=0;Tt<f;Tt++){let Ae=L[Tt].g;const Dt=L[Tt].map;if(Ae-=j,0>Ae)j=Math.max(0,L[Tt].g-100),Oe=!1;else try{WI(Dt,q,"req"+Ae+"_")}catch{g&&g(Dt)}}if(Oe){g=q.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,g}function qm(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Re||ne(),K||(Re(),K=!0),ee.add(d,a),a.v=0}}function Ed(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=x(m(a.Fa,a),Qm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Km(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=x(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),jl(this),Km(this))};function Td(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Km(a){a.g=new me(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=yr(a.qa);Ue(d,"RID","rpc"),Ue(d,"SID",a.K),Ue(d,"AID",a.T),Ue(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(d,"TO",a.ja),Ue(d,"TYPE","xmlhttp"),qo(a,d),a.m&&a.o&&_d(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ml(yr(d)),f.m=null,f.P=!0,We(f,a)}t.Za=function(){this.C!=null&&(this.C=null,jl(this),Ed(this),Et(19))};function zl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Gm(a,d){var f=null;if(a.g==d){zl(a),Td(a),a.g=null;var g=2}else if(xe(a.h,d))f=d.D,Fo(a.h,d),g=1;else return;if(a.G!=0){if(d.o)if(g==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var L=a.B;g=As(),it(g,new Dl(g,f)),Ul(a)}else qm(a);else if(L=d.s,L==3||L==0&&0<d.X||!(g==1&&QI(a,d)||g==2&&Ed(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),L){case 1:Fi(a,5);break;case 4:Fi(a,10);break;case 3:Fi(a,6);break;default:Fi(a,2)}}}function Qm(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function Fi(a,d){if(a.j.info("Error code "+d),d==2){var f=m(a.fb,a),g=a.Xa;const L=!g;g=new Vi(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ol(g,"https"),Ml(g),L?BI(g.toString(),f):$I(g.toString(),f)}else Et(2);a.G=0,a.l&&a.l.sa(d),Ym(a),$m(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Ym(a){if(a.G=0,a.ka=[],a.l){const d=bl(a.h);(d.length!=0||a.i.length!=0)&&(O(a.ka,d),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Xm(a,d,f){var g=f instanceof Vi?yr(f):new Vi(f);if(g.g!="")d&&(g.g=d+"."+g.g),Ll(g,g.s);else{var L=l.location;g=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var j=new Vi(null);g&&Ol(j,g),d&&(j.g=d),L&&Ll(j,L),f&&(j.l=f),g=j}return f=a.D,d=a.ya,f&&d&&Ue(g,f,d),Ue(g,"VER",a.la),qo(a,g),g}function Jm(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new tt(new Bo({eb:f})):new tt(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zm(){}t=Zm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Bl(){}Bl.prototype.g=function(a,d){return new un(a,d)};function un(a,d){$e.call(this),this.g=new Bm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!_(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!_(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new ks(this)}C(un,$e),un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){wd(this.g)},un.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ss(a),a=f);d.i.push(new Ps(d.Ya++,a)),d.G==3&&Ul(d)},un.prototype.N=function(){this.g.l=null,delete this.j,wd(this.g),delete this.g,un.aa.N.call(this)};function eg(a){Hr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}C(eg,Hr);function tg(){Li.call(this),this.status=1}C(tg,Li);function ks(a){this.g=a}C(ks,Zm),ks.prototype.ua=function(){it(this.g,"a")},ks.prototype.ta=function(a){it(this.g,new eg(a))},ks.prototype.sa=function(a){it(this.g,new tg)},ks.prototype.ra=function(){it(this.g,"b")},Bl.prototype.createWebChannel=Bl.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,oT=function(){return new Bl},sT=function(){return As()},iT=pr,gf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},W.NO_ERROR=0,W.TIMEOUT=8,W.HTTP_ERROR=6,ku=W,ue.COMPLETE="complete",rT=ue,Lo.EventType=fr,fr.OPEN="a",fr.CLOSE="b",fr.ERROR="c",fr.MESSAGE="d",$e.prototype.listen=$e.prototype.K,pa=Lo,nT=Bo,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,tT=tt}).apply(typeof lu<"u"?lu:typeof self<"u"?self:typeof window<"u"?window:{});const yv="@firebase/firestore";/**
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
 */class Vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
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
 */let xo="10.12.3";/**
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
 */const fs=new _l("@firebase/firestore");function ia(){return fs.logLevel}function Y(t,...e){if(fs.logLevel<=ye.DEBUG){const n=e.map(Xp);fs.debug(`Firestore (${xo}): ${t}`,...n)}}function Lr(t,...e){if(fs.logLevel<=ye.ERROR){const n=e.map(Xp);fs.error(`Firestore (${xo}): ${t}`,...n)}}function go(t,...e){if(fs.logLevel<=ye.WARN){const n=e.map(Xp);fs.warn(`Firestore (${xo}): ${t}`,...n)}}function Xp(t){if(typeof t=="string")return t;try{/**
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
 */function le(t="Unexpected state"){const e=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: `+t;throw Lr(e),new Error(e)}function Ve(t,e){t||le()}function de(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class aT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Vt.UNAUTHENTICATED))}shutdown(){}}class AN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PN{constructor(e){this.t=e,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new yi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new aT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new Vt(e)}}class CN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new CN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new xN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function DN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class lT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=DN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Pe(t,e){return t<e?-1:t>e?1:0}function yo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class pt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new pt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new pt(0,0))}static max(){return new ce(new pt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class sl{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class rt extends sl{construct(e,n,r){return new rt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new rt(n)}static emptyPath(){return new rt([])}}const bN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends sl{construct(e,n,r){return new Rt(e,n,r)}static isValidIdentifier(e){return bN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new te($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new te($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new te($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new te($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(n)}static emptyPath(){return new Rt([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(rt.fromString(e))}static fromName(e){return new ie(rt.fromString(e).popFirst(5))}static empty(){return new ie(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return rt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new rt(e.slice()))}}function ON(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ce.fromTimestamp(r===1e9?new pt(n+1,0):new pt(n,r));return new Ti(i,ie.empty(),e)}function LN(t){return new Ti(t.readTime,t.key,-1)}class Ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ti(ce.min(),ie.empty(),-1)}static max(){return new Ti(ce.max(),ie.empty(),-1)}}function MN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const VN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Sl(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==VN)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++l,l===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function jN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Rl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Jp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Jp.oe=-1;function rd(t){return t==null}function yc(t){return t===0&&1/t==-1/0}function UN(t){return typeof t=="number"&&Number.isInteger(t)&&!yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function vv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||St.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uu(this.root,e,this.comparator,!1)}getReverseIterator(){return new uu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uu(this.root,e,this.comparator,!0)}}class uu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??St.RED,this.left=i??St.EMPTY,this.right=s??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new St(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return St.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,i,s){return this}insert(e,n,r){return new St(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pt{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _v(this.data.getIterator())}getIteratorFrom(e){return new _v(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pt(this.comparator);return n.data=e,n}}class _v{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fn{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new fn([])}unionWith(e){let n=new Pt(Rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class cT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new cT("Invalid base64 string: "+s):s}}(e);return new Bt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const zN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=zN.exec(t);if(Ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ut(t.seconds),nanos:ut(t.nanos)}}function ut(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ps(t){return typeof t=="string"?Bt.fromBase64String(t):Bt.fromUint8Array(t)}/**
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
 */function Zp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function em(t){const e=t.mapValue.fields.__previous_value__;return Zp(e)?em(e):e}function ol(t){const e=Ii(t.mapValue.fields.__local_write_time__.timestampValue);return new pt(e.seconds,e.nanos)}/**
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
 */class BN{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class al{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new al("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof al&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const cu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ms(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zp(t)?4:$N(t)?9007199254740991:10:le()}function lr(t,e){if(t===e)return!0;const n=ms(t);if(n!==ms(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ol(t).isEqual(ol(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ii(i.timestampValue),l=Ii(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ps(i.bytesValue).isEqual(ps(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ut(i.geoPointValue.latitude)===ut(s.geoPointValue.latitude)&&ut(i.geoPointValue.longitude)===ut(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ut(i.integerValue)===ut(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ut(i.doubleValue),l=ut(s.doubleValue);return o===l?yc(o)===yc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return yo(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(vv(o)!==vv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!lr(o[u],l[u])))return!1;return!0}(t,e);default:return le()}}function ll(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function vo(t,e){if(t===e)return 0;const n=ms(t),r=ms(e);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ut(s.integerValue||s.doubleValue),u=ut(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return wv(t.timestampValue,e.timestampValue);case 4:return wv(ol(t),ol(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ps(s),u=ps(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=Pe(l[c],u[c]);if(h!==0)return h}return Pe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Pe(ut(s.latitude),ut(o.latitude));return l!==0?l:Pe(ut(s.longitude),ut(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const h=vo(l[c],u[c]);if(h)return h}return Pe(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===cu.mapValue&&o===cu.mapValue)return 0;if(s===cu.mapValue)return 1;if(o===cu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const m=Pe(u[p],h[p]);if(m!==0)return m;const T=vo(l[u[p]],c[h[p]]);if(T!==0)return T}return Pe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw le()}}function wv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=Ii(t),r=Ii(e),i=Pe(n.seconds,r.seconds);return i!==0?i:Pe(n.nanos,r.nanos)}function _o(t){return yf(t)}function yf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ii(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ps(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=yf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${yf(n.fields[o])}`;return i+"}"}(t.mapValue):le()}function vf(t){return!!t&&"integerValue"in t}function tm(t){return!!t&&"arrayValue"in t}function Ev(t){return!!t&&"nullValue"in t}function Tv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xu(t){return!!t&&"mapValue"in t}function xa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $N(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xa(n)}setAll(e){let n=Rt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=xa(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Jt(xa(this.value))}}function dT(t){const e=[];return vs(t.fields,(n,r)=>{const i=new Rt([n]);if(xu(r)){const s=dT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new fn(e)}/**
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
 */class jt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new jt(e,0,ce.min(),ce.min(),ce.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,i){return new jt(e,1,n,ce.min(),r,i,0)}static newNoDocument(e,n){return new jt(e,2,n,ce.min(),ce.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,ce.min(),ce.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vc{constructor(e,n){this.position=e,this.inclusive=n}}function Iv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=vo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class _c{constructor(e,n="asc"){this.field=e,this.dir=n}}function HN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class hT{}class ht extends hT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new qN(e,n,r):n==="array-contains"?new QN(e,r):n==="in"?new YN(e,r):n==="not-in"?new XN(e,r):n==="array-contains-any"?new JN(e,r):new ht(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new KN(e,r):new GN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vo(n,this.value)):n!==null&&ms(this.value)===ms(n)&&this.matchesComparison(vo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ur extends hT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ur(e,n)}matches(e){return fT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fT(t){return t.op==="and"}function pT(t){return WN(t)&&fT(t)}function WN(t){for(const e of t.filters)if(e instanceof ur)return!1;return!0}function _f(t){if(t instanceof ht)return t.field.canonicalString()+t.op.toString()+_o(t.value);if(pT(t))return t.filters.map(e=>_f(e)).join(",");{const e=t.filters.map(n=>_f(n)).join(",");return`${t.op}(${e})`}}function mT(t,e){return t instanceof ht?function(r,i){return i instanceof ht&&r.op===i.op&&r.field.isEqual(i.field)&&lr(r.value,i.value)}(t,e):t instanceof ur?function(r,i){return i instanceof ur&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&mT(o,i.filters[l]),!0):!1}(t,e):void le()}function gT(t){return t instanceof ht?function(n){return`${n.field.canonicalString()} ${n.op} ${_o(n.value)}`}(t):t instanceof ur?function(n){return n.op.toString()+" {"+n.getFilters().map(gT).join(" ,")+"}"}(t):"Filter"}class qN extends ht{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class KN extends ht{constructor(e,n){super(e,"in",n),this.keys=yT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GN extends ht{constructor(e,n){super(e,"not-in",n),this.keys=yT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class QN extends ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tm(n)&&ll(n.arrayValue,this.value)}}class YN extends ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ll(this.value.arrayValue,n)}}class XN extends ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ll(this.value.arrayValue,n)}}class JN extends ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ll(this.value.arrayValue,r))}}/**
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
 */class ZN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Rv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ZN(t,e,n,r,i,s,o)}function nm(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_f(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),rd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_o(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_o(r)).join(",")),e.ue=n}return e.ue}function rm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!HN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sv(t.startAt,e.startAt)&&Sv(t.endAt,e.endAt)}function wf(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class id{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eD(t,e,n,r,i,s,o,l){return new id(t,e,n,r,i,s,o,l)}function sd(t){return new id(t)}function Av(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tD(t){return t.collectionGroup!==null}function Na(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Pt(Rt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new _c(s,r))}),n.has(Rt.keyField().canonicalString())||e.ce.push(new _c(Rt.keyField(),r))}return e.ce}function ir(t){const e=de(t);return e.le||(e.le=nD(e,Na(t))),e.le}function nD(t,e){if(t.limitType==="F")return Rv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _c(i.field,s)});const n=t.endAt?new vc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vc(t.startAt.position,t.startAt.inclusive):null;return Rv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ef(t,e,n){return new id(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function od(t,e){return rm(ir(t),ir(e))&&t.limitType===e.limitType}function vT(t){return`${nm(ir(t))}|lt:${t.limitType}`}function bs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>gT(i)).join(", ")}]`),rd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>_o(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>_o(i)).join(",")),`Target(${r})`}(ir(t))}; limitType=${t.limitType})`}function ad(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ie.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Na(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Iv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Na(r),i)||r.endAt&&!function(o,l,u){const c=Iv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Na(r),i))}(t,e)}function rD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _T(t){return(e,n)=>{let r=!1;for(const i of Na(t)){const s=iD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iD(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?vo(u,c):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
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
 */class No{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return uT(this.inner)}size(){return this.innerSize}}/**
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
 */const sD=new Ye(ie.comparator);function Mr(){return sD}const wT=new Ye(ie.comparator);function ma(...t){let e=wT;for(const n of t)e=e.insert(n.key,n);return e}function ET(t){let e=wT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xi(){return Da()}function TT(){return Da()}function Da(){return new No(t=>t.toString(),(t,e)=>t.isEqual(e))}const oD=new Ye(ie.comparator),aD=new Pt(ie.comparator);function ve(...t){let e=aD;for(const n of t)e=e.add(n);return e}const lD=new Pt(Pe);function uD(){return lD}/**
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
 */function IT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yc(e)?"-0":e}}function ST(t){return{integerValue:""+t}}function cD(t,e){return UN(e)?ST(e):IT(t,e)}/**
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
 */class ld{constructor(){this._=void 0}}function dD(t,e,n){return t instanceof wc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zp(s)&&(s=em(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ul?AT(t,e):t instanceof cl?PT(t,e):function(i,s){const o=RT(i,s),l=Pv(o)+Pv(i.Pe);return vf(o)&&vf(i.Pe)?ST(l):IT(i.serializer,l)}(t,e)}function hD(t,e,n){return t instanceof ul?AT(t,e):t instanceof cl?PT(t,e):n}function RT(t,e){return t instanceof Ec?function(r){return vf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class wc extends ld{}class ul extends ld{constructor(e){super(),this.elements=e}}function AT(t,e){const n=CT(e);for(const r of t.elements)n.some(i=>lr(i,r))||n.push(r);return{arrayValue:{values:n}}}class cl extends ld{constructor(e){super(),this.elements=e}}function PT(t,e){let n=CT(e);for(const r of t.elements)n=n.filter(i=>!lr(i,r));return{arrayValue:{values:n}}}class Ec extends ld{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Pv(t){return ut(t.integerValue||t.doubleValue)}function CT(t){return tm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ul&&i instanceof ul||r instanceof cl&&i instanceof cl?yo(r.elements,i.elements,lr):r instanceof Ec&&i instanceof Ec?lr(r.Pe,i.Pe):r instanceof wc&&i instanceof wc}(t.transform,e.transform)}class pD{constructor(e,n){this.version=e,this.transformResults=n}}class sr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sr}static exists(e){return new sr(void 0,e)}static updateTime(e){return new sr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ud{}function kT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new NT(t.key,sr.none()):new Al(t.key,t.data,sr.none());{const n=t.data,r=Jt.empty();let i=new Pt(Rt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ni(t.key,r,new fn(i.toArray()),sr.none())}}function mD(t,e,n){t instanceof Al?function(i,s,o){const l=i.value.clone(),u=kv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ni?function(i,s,o){if(!Nu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=kv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(xT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ba(t,e,n,r){return t instanceof Al?function(s,o,l,u){if(!Nu(s.precondition,o))return l;const c=s.value.clone(),h=xv(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ni?function(s,o,l,u){if(!Nu(s.precondition,o))return l;const c=xv(s.fieldTransforms,u,o),h=o.data;return h.setAll(xT(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Nu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function gD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=RT(r.transform,i||null);s!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,s))}return n||null}function Cv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&yo(r,i,(s,o)=>fD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Al extends ud{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ni extends ud{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kv(t,e,n){const r=new Map;Ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,hD(o,l,n[i]))}return r}function xv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,dD(s,o,e))}return r}class NT extends ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yD extends ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&mD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ba(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ba(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=TT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=kT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&yo(this.mutations,e.mutations,(n,r)=>Cv(n,r))&&yo(this.baseMutations,e.baseMutations,(n,r)=>Cv(n,r))}}class im{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ve(e.mutations.length===r.length);let i=function(){return oD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new im(e,n,r,i)}}/**
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
 */class _D{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var at,Te;function ED(t){switch(t){default:return le();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function DT(t){if(t===void 0)return Lr("GRPC error has no .code"),$.UNKNOWN;switch(t){case at.OK:return $.OK;case at.CANCELLED:return $.CANCELLED;case at.UNKNOWN:return $.UNKNOWN;case at.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case at.INTERNAL:return $.INTERNAL;case at.UNAVAILABLE:return $.UNAVAILABLE;case at.UNAUTHENTICATED:return $.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case at.NOT_FOUND:return $.NOT_FOUND;case at.ALREADY_EXISTS:return $.ALREADY_EXISTS;case at.PERMISSION_DENIED:return $.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case at.ABORTED:return $.ABORTED;case at.OUT_OF_RANGE:return $.OUT_OF_RANGE;case at.UNIMPLEMENTED:return $.UNIMPLEMENTED;case at.DATA_LOSS:return $.DATA_LOSS;default:return le()}}(Te=at||(at={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function TD(){return new TextEncoder}/**
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
 */const ID=new es([4294967295,4294967295],0);function Nv(t){const e=TD().encode(t),n=new eT;return n.update(e),new Uint8Array(n.digest())}function Dv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new es([n,r],0),new es([i,s],0)]}class sm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ga(`Invalid padding: ${n}`);if(r<0)throw new ga(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ga(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ga(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=es.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(es.fromNumber(r)));return i.compare(ID)===1&&(i=new es([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Nv(e),[r,i]=Dv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new sm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Nv(e),[r,i]=Dv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ga extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Pl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cd(ce.min(),i,new Ye(Pe),Mr(),ve())}}class Pl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pl(r,n,ve(),ve(),ve())}}/**
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
 */class Du{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class bT{constructor(e,n){this.targetId=e,this.me=n}}class OT{constructor(e,n,r=Bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class bv{constructor(){this.fe=0,this.ge=Lv(),this.pe=Bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:le()}}),new Pl(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Lv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class SD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mr(),this.qe=Ov(),this.Qe=new Ye(Pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(wf(s))if(r===0){const o=new ie(s.path);this.Ue(n,o,jt.newNoDocument(o,ce.min()))}else Ve(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ps(r).toUint8Array()}catch(u){if(u instanceof cT)return go("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new sm(o,i,s)}catch(u){return go(u instanceof ga?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&wf(l.target)){const u=new ie(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,jt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ve();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new cd(e,n,this.Qe,this.ke,r);return this.ke=Mr(),this.qe=Ov(),this.Qe=new Ye(Pe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new bv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Pt(Pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ov(){return new Ye(ie.comparator)}function Lv(){return new Ye(ie.comparator)}const RD={asc:"ASCENDING",desc:"DESCENDING"},AD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PD={and:"AND",or:"OR"};class CD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tf(t,e){return t.useProto3Json||rd(e)?e:{value:e}}function Tc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function LT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kD(t,e){return Tc(t,e.toTimestamp())}function or(t){return Ve(!!t),ce.fromTimestamp(function(n){const r=Ii(n);return new pt(r.seconds,r.nanos)}(t))}function om(t,e){return If(t,e).canonicalString()}function If(t,e){const n=function(i){return new rt(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function MT(t){const e=rt.fromString(t);return Ve(zT(e)),e}function Sf(t,e){return om(t.databaseId,e.path)}function uh(t,e){const n=MT(e);if(n.get(1)!==t.databaseId.projectId)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(FT(n))}function VT(t,e){return om(t.databaseId,e)}function xD(t){const e=MT(t);return e.length===4?rt.emptyPath():FT(e)}function Rf(t){return new rt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function FT(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Mv(t,e,n){return{name:Sf(t,e),fields:n.value.mapValue.fields}}function ND(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Ve(h===void 0||typeof h=="string"),Bt.fromBase64String(h||"")):(Ve(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Bt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const h=c.code===void 0?$.UNKNOWN:DT(c.code);return new te(h,c.message||"")}(o);n=new OT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=uh(t,r.document.name),s=or(r.document.updateTime),o=r.document.createTime?or(r.document.createTime):ce.min(),l=new Jt({mapValue:{fields:r.document.fields}}),u=jt.newFoundDocument(i,s,o,l),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Du(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=uh(t,r.document),s=r.readTime?or(r.readTime):ce.min(),o=jt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Du([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=uh(t,r.document),s=r.removedTargetIds||[];n=new Du([],s,i,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new wD(i,s),l=r.targetId;n=new bT(l,o)}}return n}function DD(t,e){let n;if(e instanceof Al)n={update:Mv(t,e.key,e.value)};else if(e instanceof NT)n={delete:Sf(t,e.key)};else if(e instanceof Ni)n={update:Mv(t,e.key,e.data),updateMask:zD(e.fieldMask)};else{if(!(e instanceof yD))return le();n={verify:Sf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof wc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ul)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof cl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ec)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:kD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:le()}(t,e.precondition)),n}function bD(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?or(i.updateTime):or(s);return o.isEqual(ce.min())&&(o=or(s)),new pD(o,i.transformResults||[])}(n,e))):[]}function OD(t,e){return{documents:[VT(t,e.path)]}}function LD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=VT(t,i);const s=function(c){if(c.length!==0)return UT(ur.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Os(m.field),direction:FD(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Tf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function MD(t){let e=xD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ve(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(p){const m=jT(p);return m instanceof ur&&pT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new _c(Ls(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,rd(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,T=p.values||[];return new vc(T,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,T=p.values||[];return new vc(T,m)}(n.endAt)),eD(e,i,o,s,l,"F",u,c)}function VD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function jT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ls(n.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ls(n.unaryFilter.field);return ht.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ls(n.unaryFilter.field);return ht.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ls(n.unaryFilter.field);return ht.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return ht.create(Ls(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ur.create(n.compositeFilter.filters.map(r=>jT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function FD(t){return RD[t]}function jD(t){return AD[t]}function UD(t){return PD[t]}function Os(t){return{fieldPath:t.canonicalString()}}function Ls(t){return Rt.fromServerFormat(t.fieldPath)}function UT(t){return t instanceof ht?function(n){if(n.op==="=="){if(Tv(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NAN"}};if(Ev(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Tv(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NAN"}};if(Ev(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(n.field),op:jD(n.op),value:n.value}}}(t):t instanceof ur?function(n){const r=n.getFilters().map(i=>UT(i));return r.length===1?r[0]:{compositeFilter:{op:UD(n.op),filters:r}}}(t):le()}function zD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ai{constructor(e,n,r,i,s=ce.min(),o=ce.min(),l=Bt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ai(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class BD{constructor(e){this.ct=e}}function $D(t){const e=MD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ef(e,e.limit,"L"):e}/**
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
 */class HD{constructor(){this._n=new WD}addToCollectionParentIndex(e,n){return this._n.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Ti.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class WD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Pt(rt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pt(rt.comparator)).toArray()}}/**
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
 */class wo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new wo(0)}static Ln(){return new wo(-1)}}/**
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
 */class qD{constructor(){this.changes=new No(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class KD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class GD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ba(r.mutation,i,fn.empty(),pt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const i=Xi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ma();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Mr();const o=Da(),l=function(){return Da()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ni)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ba(h.mutation,c,h.mutation.getFieldMask(),pt.now())):o.set(c.key,fn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return l.set(c,new KD(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Da();let i=new Ye((o,l)=>o-l),s=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||fn.empty();h=l.applyToLocalView(c,h),r.set(u,h);const p=(i.get(l.batchId)||ve()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,p=TT();h.forEach(m=>{if(!s.has(m)){const T=kT(n.get(m),r.get(m));T!==null&&p.set(m,T),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(Xi());let l=-1,u=s;return o.next(c=>B.forEach(c,(h,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(h)?B.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ve())).next(h=>({batchId:l,changes:ET(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let i=ma();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ma();return this.indexManager.getCollectionParents(e,s).next(l=>B.forEach(l,u=>{const c=function(p,m){return new id(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,jt.newInvalidDocument(h)))});let l=ma();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&ba(h.mutation,c,fn.empty(),pt.now()),ad(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class QD{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return B.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:or(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:$D(i.bundledQuery),readTime:or(i.readTime)}}(n)),B.resolve()}}/**
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
 */class YD{constructor(){this.overlays=new Ye(ie.comparator),this.hr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xi();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=Xi(),s=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ye((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Xi(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=Xi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=i)););return B.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _D(n,r));let s=this.hr.get(n);s===void 0&&(s=ve(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class am{constructor(){this.Pr=new Pt(gt.Ir),this.Tr=new Pt(gt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new gt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new gt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ie(new rt([])),r=new gt(n,e),i=new gt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ie(new rt([])),r=new gt(n,e),i=new gt(n,e+1);let s=ve();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new gt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class gt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ie.comparator(e.key,n.key)||Pe(e.pr,n.pr)}static Er(e,n){return Pe(e.pr,n.pr)||ie.comparator(e.key,n.key)}}/**
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
 */class XD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Pt(gt.Ir)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new gt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new gt(n,0),i=new gt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const l=this.Sr(o.pr);s.push(l)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pt(Pe);return n.forEach(i=>{const s=new gt(i,0),o=new gt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],l=>{r=r.add(l.pr)})}),B.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ie.isDocumentKey(s)||(s=s.child(""));const o=new gt(new ie(s),0);let l=new Pt(Pe);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.pr)),!0)},o),B.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ve(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return B.forEach(n.mutations,i=>{const s=new gt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new gt(n,0),i=this.wr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class JD{constructor(e){this.vr=e,this.docs=function(){return new Ye(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(e,n){let r=Mr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():jt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Mr();const o=n.path,l=new ie(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||MN(LN(h),r)<=0||(i.has(h.key)||ad(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){le()}Fr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZD(this)}getSize(e){return B.resolve(this.size)}}class ZD extends qD{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class eb{constructor(e){this.persistence=e,this.Mr=new No(n=>nm(n),rm),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Or=0,this.Nr=new am,this.targetCount=0,this.Lr=wo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),B.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new wo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.qn(n),B.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Nr.containsKey(n))}}/**
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
 */class tb{constructor(e,n){this.Br={},this.overlays={},this.kr=new Jp(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new eb(this),this.indexManager=new HD,this.remoteDocumentCache=function(i){return new JD(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new BD(n),this.$r=new QD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new YD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new XD(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new nb(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return B.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class nb extends FN{constructor(e){super(),this.currentSequenceNumber=e}}class lm{constructor(e){this.persistence=e,this.zr=new am,this.jr=null}static Hr(e){return new lm(e)}get Jr(){if(this.jr)return this.jr;throw le()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),B.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Jr,r=>{const i=ie.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ce.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return B.or([()=>B.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class um{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ve(),i=ve();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new um(e,n.fromCache,r,i)}}/**
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
 */class rb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ib{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return _P()?8:jN(kt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new rb;return this.Ji(e,n,o).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,n,o,l.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(ia()<=ye.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",bs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),B.resolve()):(ia()<=ye.DEBUG&&Y("QueryEngine","Query:",bs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ia()<=ye.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",bs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ir(n))):B.resolve())}ji(e,n){if(Av(n))return B.resolve(null);let r=ir(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ef(n,null,"F"),r=ir(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ve(...s);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,l);return this.Xi(n,c,o,u.readTime)?this.ji(e,Ef(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return Av(n)||i.isEqual(ce.min())?B.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?B.resolve(null):(ia()<=ye.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bs(n)),this.es(e,o,n,ON(i,-1)).next(l=>l))})}Zi(e,n){let r=new Pt(_T(e));return n.forEach((i,s)=>{ad(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return ia()<=ye.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",bs(n)),this.zi.getDocumentsMatchingQuery(e,n,Ti.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class sb{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ye(Pe),this.rs=new No(s=>nm(s),rm),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GD(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function ob(t,e,n,r){return new sb(t,e,n,r)}async function BT(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ve();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:l}))})})}function ab(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const p=c.batch,m=p.keys();let T=B.resolve();return m.forEach(C=>{T=T.next(()=>h.getEntry(u,C)).next(k=>{const O=c.docVersions.get(C);Ve(O!==null),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),h.addEntry(k)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ve();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function $T(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function lb(t,e){const n=de(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];e.targetChanges.forEach((h,p)=>{const m=i.get(p);if(!m)return;l.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,p)));let T=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Bt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):h.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(h.resumeToken,r)),i=i.insert(p,T),function(k,O,S){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,T,h)&&l.push(n.Qr.updateTargetData(s,T))});let u=Mr(),c=ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),l.push(ub(s,o,e.documentUpdates).next(h=>{u=h.cs,c=h.ls})),!r.isEqual(ce.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(p=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(h)}return B.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function ub(t,e,n){let r=ve(),i=ve();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Mr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ce.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Y("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function cb(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function db(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new ai(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Af(t,e,n){const r=de(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Rl(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Vv(t,e,n){const r=de(t);let i=ce.min(),s=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const p=de(u),m=p.rs.get(h);return m!==void 0?B.resolve(p.ns.get(m)):p.Qr.getTargetData(c,h)}(r,o,ir(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ce.min(),n?s:ve())).next(l=>(hb(r,rD(e),l),{documents:l,hs:s})))}function hb(t,e,n){let r=t.ss.get(e)||ce.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Fv{constructor(){this.activeTargetIds=uD()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fb{constructor(){this.no=new Fv,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Fv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pb{io(e){}shutdown(){}}/**
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
 */let du=null;function ch(){return du===null?du=function(){return 268435456+Math.round(2147483648*Math.random())}():du++,"0x"+du.toString(16)}/**
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
 */const mb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gb{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Mt="WebChannelConnection";class yb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const l=ch(),u=this.vo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(h=>(Y("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw go("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",u,"request:",i),h})}xo(n,r,i,s,o,l){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=mb[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=ch();return new Promise((o,l)=>{const u=new tT;u.setWithCredentials(!0),u.listenOnce(rT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ku.NO_ERROR:const h=u.getResponseJson();Y(Mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case ku.TIMEOUT:Y(Mt,`RPC '${e}' ${s} timed out`),l(new te($.DEADLINE_EXCEEDED,"Request time out"));break;case ku.HTTP_ERROR:const p=u.getStatus();if(Y(Mt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const C=function(O){const S=O.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(S)>=0?S:$.UNKNOWN}(T.status);l(new te(C,T.message))}else l(new te($.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new te($.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{Y(Mt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Y(Mt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=ch(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=oT(),l=sT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new nT({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");Y(Mt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const p=o.createWebChannel(h,u);let m=!1,T=!1;const C=new gb({lo:O=>{T?Y(Mt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(m||(Y(Mt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),Y(Mt,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},ho:()=>p.close()}),k=(O,S,_)=>{O.listen(S,A=>{try{_(A)}catch(V){setTimeout(()=>{throw V},0)}})};return k(p,pa.EventType.OPEN,()=>{T||(Y(Mt,`RPC '${e}' stream ${i} transport opened.`),C.mo())}),k(p,pa.EventType.CLOSE,()=>{T||(T=!0,Y(Mt,`RPC '${e}' stream ${i} transport closed`),C.po())}),k(p,pa.EventType.ERROR,O=>{T||(T=!0,go(Mt,`RPC '${e}' stream ${i} transport errored:`,O),C.po(new te($.UNAVAILABLE,"The operation could not be completed")))}),k(p,pa.EventType.MESSAGE,O=>{var S;if(!T){const _=O.data[0];Ve(!!_);const A=_,V=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(V){Y(Mt,`RPC '${e}' stream ${i} received error:`,V);const z=V.status;let N=function(v){const R=at[v];if(R!==void 0)return DT(R)}(z),E=V.message;N===void 0&&(N=$.INTERNAL,E="Unknown error status: "+z+" with message "+V.message),T=!0,C.po(new te(N,E)),p.close()}else Y(Mt,`RPC '${e}' stream ${i} received:`,_),C.yo(_)}}),k(l,iT.STAT_EVENT,O=>{O.stat===gf.PROXY?Y(Mt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===gf.NOPROXY&&Y(Mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function dh(){return typeof document<"u"?document:null}/**
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
 */function dd(t){return new CD(t,!0)}/**
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
 */class HT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class WT{constructor(e,n,r,i,s,o,l,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new HT(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Lr(n.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new te($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vb extends WT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=ND(this.serializer,e),r=function(s){if(!("targetChange"in s))return ce.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?or(o.readTime):ce.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Rf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=wf(u)?{documents:OD(s,u)}:{query:LD(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=LT(s,o.resumeToken);const c=Tf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ce.min())>0){l.readTime=Tc(s,o.snapshotVersion.toTimestamp());const c=Tf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=VD(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Rf(this.serializer),n.removeTarget=e,this.i_(n)}}class _b extends WT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=bD(e.writeResults,e.commitTime),r=or(e.commitTime);return this.listener.A_(r,n)}return Ve(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Rf(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>DD(this.serializer,r))};this.i_(n)}}/**
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
 */class wb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,If(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new te($.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,If(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te($.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Eb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Lr(n),this.y_=!1):Y("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class Tb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{_s(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=de(u);c.M_.add(4),await Cl(c),c.N_.set("Unknown"),c.M_.delete(4),await hd(c)}(this))})}),this.N_=new Eb(r,i)}}async function hd(t){if(_s(t))for(const e of t.x_)await e(!0)}async function Cl(t){for(const e of t.x_)await e(!1)}function qT(t,e){const n=de(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),fm(n)?hm(n):Do(n).Xo()&&dm(n,e))}function cm(t,e){const n=de(t),r=Do(n);n.F_.delete(e),r.Xo()&&KT(n,e),n.F_.size===0&&(r.Xo()?r.n_():_s(n)&&n.N_.set("Unknown"))}function dm(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Do(t).P_(e)}function KT(t,e){t.L_.xe(e),Do(t).I_(e)}function hm(t){t.L_=new SD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Do(t).start(),t.N_.w_()}function fm(t){return _s(t)&&!Do(t).Zo()&&t.F_.size>0}function _s(t){return de(t).M_.size===0}function GT(t){t.L_=void 0}async function Ib(t){t.N_.set("Online")}async function Sb(t){t.F_.forEach((e,n)=>{dm(t,e)})}async function Rb(t,e){GT(t),fm(t)?(t.N_.D_(e),hm(t)):t.N_.set("Unknown")}async function Ab(t,e,n){if(t.N_.set("Online"),e instanceof OT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.F_.delete(l),i.L_.removeTarget(l))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ic(t,r)}else if(e instanceof Du?t.L_.Ke(e):e instanceof bT?t.L_.He(e):t.L_.We(e),!n.isEqual(ce.min()))try{const r=await $T(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.L_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const h=s.F_.get(u);if(!h)return;s.F_.set(u,h.withResumeToken(Bt.EMPTY_BYTE_STRING,h.snapshotVersion)),KT(s,u);const p=new ai(h.target,u,c,h.sequenceNumber);dm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await Ic(t,r)}}async function Ic(t,e,n){if(!Rl(e))throw e;t.M_.add(1),await Cl(t),t.N_.set("Offline"),n||(n=()=>$T(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await hd(t)})}function QT(t,e){return e().catch(n=>Ic(t,n,e))}async function fd(t){const e=de(t),n=Si(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;Pb(e);)try{const i=await cb(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,Cb(e,i)}catch(i){await Ic(e,i)}YT(e)&&XT(e)}function Pb(t){return _s(t)&&t.v_.length<10}function Cb(t,e){t.v_.push(e);const n=Si(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function YT(t){return _s(t)&&!Si(t).Zo()&&t.v_.length>0}function XT(t){Si(t).start()}async function kb(t){Si(t).V_()}async function xb(t){const e=Si(t);for(const n of t.v_)e.d_(n.mutations)}async function Nb(t,e,n){const r=t.v_.shift(),i=im.from(r,e,n);await QT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await fd(t)}async function Db(t,e){e&&Si(t).E_&&await async function(r,i){if(function(o){return ED(o)&&o!==$.ABORTED}(i.code)){const s=r.v_.shift();Si(r).t_(),await QT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await fd(r)}}(t,e),YT(t)&&XT(t)}async function Uv(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=_s(n);n.M_.add(3),await Cl(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await hd(n)}async function bb(t,e){const n=de(t);e?(n.M_.delete(2),await hd(n)):e||(n.M_.add(2),await Cl(n),n.N_.set("Unknown"))}function Do(t){return t.B_||(t.B_=function(n,r,i){const s=de(n);return s.f_(),new vb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:Ib.bind(null,t),To:Sb.bind(null,t),Ao:Rb.bind(null,t),h_:Ab.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),fm(t)?hm(t):t.N_.set("Unknown")):(await t.B_.stop(),GT(t))})),t.B_}function Si(t){return t.k_||(t.k_=function(n,r,i){const s=de(n);return s.f_(),new _b(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:kb.bind(null,t),Ao:Db.bind(null,t),R_:xb.bind(null,t),A_:Nb.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await fd(t)):(await t.k_.stop(),t.v_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class pm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new pm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mm(t,e){if(Lr("AsyncQueue",`${e}: ${t}`),Rl(t))return new te($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ro{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=ma(),this.sortedSet=new Ye(this.comparator)}static emptySet(e){return new ro(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ro)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ro;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class zv{constructor(){this.q_=new Ye(ie.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):le():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Eo{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Eo(e,n,ro.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&od(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Ob{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class Lb{constructor(){this.queries=new No(e=>vT(e),od),this.onlineState="Unknown",this.z_=new Set}}async function JT(t,e){const n=de(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new Ob,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=mm(o,`Initialization of query '${bs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&gm(n)}async function ZT(t,e){const n=de(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Mb(t,e){const n=de(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.U_)l.H_(i)&&(r=!0);o.K_=i}}r&&gm(n)}function Vb(t,e,n){const r=de(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function gm(t){t.z_.forEach(e=>{e.next()})}var Pf,Bv;(Bv=Pf||(Pf={})).J_="default",Bv.Cache="cache";class eI{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Eo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Pf.Cache}}/**
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
 */class tI{constructor(e){this.key=e}}class nI{constructor(e){this.key=e}}class Fb{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ve(),this.mutatedKeys=ve(),this.Ia=_T(e),this.Ta=new ro(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new zv,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const m=i.get(h),T=ad(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),k=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let O=!1;m&&T?m.data.isEqual(T.data)?C!==k&&(r.track({type:3,doc:T}),O=!0):this.Ra(m,T)||(r.track({type:2,doc:T}),O=!0,(u&&this.Ia(T,u)>0||c&&this.Ia(T,c)<0)&&(l=!0)):!m&&T?(r.track({type:0,doc:T}),O=!0):m&&!T&&(r.track({type:1,doc:m}),O=!0,(u||c)&&(l=!0)),O&&(T?(o=o.add(T),s=k?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,p)=>function(T,C){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return k(T)-k(C)}(h.type,p.type)||this.Ia(h.doc,p.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new Eo(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new zv,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ve(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new nI(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new tI(r))}),n}pa(e){this.la=e.hs,this.Pa=ve();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Eo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class jb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ub{constructor(e){this.key=e,this.wa=!1}}class zb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new No(l=>vT(l),od),this.Da=new Map,this.Ca=new Set,this.va=new Ye(ie.comparator),this.Fa=new Map,this.Ma=new am,this.xa={},this.Oa=new Map,this.Na=wo.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Bb(t,e,n=!0){const r=lI(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await rI(r,e,n,!0),i}async function $b(t,e){const n=lI(t);await rI(n,e,!0,!1)}async function rI(t,e,n,r){const i=await db(t.localStore,ir(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await Hb(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&qT(t.remoteStore,i),l}async function Hb(t,e,n,r,i){t.Ba=(p,m,T)=>async function(k,O,S,_){let A=O.view.da(S);A.Xi&&(A=await Vv(k.localStore,O.query,!1).then(({documents:E})=>O.view.da(E,A)));const V=_&&_.targetChanges.get(O.targetId),z=_&&_.targetMismatches.get(O.targetId)!=null,N=O.view.applyChanges(A,k.isPrimaryClient,V,z);return Hv(k,O.targetId,N.fa),N.snapshot}(t,p,m,T);const s=await Vv(t.localStore,e,!0),o=new Fb(e,s.hs),l=o.da(s.documents),u=Pl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Hv(t,n,c.fa);const h=new jb(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function Wb(t,e,n){const r=de(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!od(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Af(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&cm(r.remoteStore,i.targetId),Cf(r,i.targetId)}).catch(Sl)):(Cf(r,i.targetId),await Af(r.localStore,i.targetId,!0))}async function qb(t,e){const n=de(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cm(n.remoteStore,r.targetId))}async function Kb(t,e,n){const r=eO(t);try{const i=await function(o,l){const u=de(o),c=pt.now(),h=l.reduce((T,C)=>T.add(C.key),ve());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let C=Mr(),k=ve();return u.os.getEntries(T,h).next(O=>{C=O,C.forEach((S,_)=>{_.isValidDocument()||(k=k.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,C)).next(O=>{p=O;const S=[];for(const _ of l){const A=gD(_,p.get(_.key).overlayedDocument);A!=null&&S.push(new Ni(_.key,A,dT(A.value.mapValue),sr.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,S,l)}).next(O=>{m=O;const S=O.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(T,O.batchId,S)})}).then(()=>({batchId:m.batchId,changes:ET(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Ye(Pe)),c=c.insert(l,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await kl(r,i.changes),await fd(r.remoteStore)}catch(i){const s=mm(i,"Failed to persist write");n.reject(s)}}async function iI(t,e){const n=de(t);try{const r=await lb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Ve(o.wa):i.removedDocuments.size>0&&(Ve(o.wa),o.wa=!1))}),await kl(n,r,e)}catch(r){await Sl(r)}}function $v(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=de(o);u.onlineState=l;let c=!1;u.queries.forEach((h,p)=>{for(const m of p.U_)m.j_(l)&&(c=!0)}),c&&gm(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Gb(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Ye(ie.comparator);o=o.insert(s,jt.newNoDocument(s,ce.min()));const l=ve().add(s),u=new cd(ce.min(),new Map,new Ye(Pe),o,l);await iI(r,u),r.va=r.va.remove(s),r.Fa.delete(e),ym(r)}else await Af(r.localStore,e,!1).then(()=>Cf(r,e,n)).catch(Sl)}async function Qb(t,e){const n=de(t),r=e.batch.batchId;try{const i=await ab(n.localStore,e);oI(n,r,null),sI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await kl(n,i)}catch(i){await Sl(i)}}async function Yb(t,e,n){const r=de(t);try{const i=await function(o,l){const u=de(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(Ve(p!==null),h=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);oI(r,e,n),sI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await kl(r,i)}catch(i){await Sl(i)}}function sI(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function oI(t,e,n){const r=de(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Cf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||aI(t,r)})}function aI(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(cm(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),ym(t))}function Hv(t,e,n){for(const r of n)r instanceof tI?(t.Ma.addReference(r.key,e),Xb(t,r)):r instanceof nI?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||aI(t,r.key)):le()}function Xb(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.Ca.add(r),ym(t))}function ym(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ie(rt.fromString(e)),r=t.Na.next();t.Fa.set(r,new Ub(n)),t.va=t.va.insert(n,r),qT(t.remoteStore,new ai(ir(sd(n.path)),r,"TargetPurposeLimboResolution",Jp.oe))}}async function kl(t,e,n){const r=de(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{o.push(r.Ba(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=um.Ki(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const h=de(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(c,m=>B.forEach(m.qi,T=>h.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>B.forEach(m.Qi,T=>h.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!Rl(p))throw p;Y("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const T=h.ns.get(m),C=T.snapshotVersion,k=T.withLastLimboFreeSnapshotVersion(C);h.ns=h.ns.insert(m,k)}}}(r.localStore,s))}async function Jb(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await BT(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(l=>{l.forEach(u=>{u.reject(new te($.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await kl(n,r.us)}}function Zb(t,e){const n=de(t),r=n.Fa.get(e);if(r&&r.wa)return ve().add(r.key);{let i=ve();const s=n.Da.get(e);if(!s)return i;for(const o of s){const l=n.ba.get(o);i=i.unionWith(l.view.Ea)}return i}}function lI(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gb.bind(null,e),e.Sa.h_=Mb.bind(null,e.eventManager),e.Sa.ka=Vb.bind(null,e.eventManager),e}function eO(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yb.bind(null,e),e}class Wv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=dd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ob(this.persistence,new ib,e.initialUser,this.serializer)}createPersistence(e){return new tb(lm.Hr,this.serializer)}createSharedClientState(e){return new fb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$v(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jb.bind(null,this.syncEngine),await bb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Lb}()}createDatastore(e){const n=dd(e.databaseInfo.databaseId),r=function(s){return new yb(s)}(e.databaseInfo);return function(s,o,l,u){return new wb(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Tb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>$v(this.syncEngine,n,0),function(){return jv.D()?new jv:new pb}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,h){const p=new zb(i,s,o,l,u,c);return h&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=de(r);Y("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Cl(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class uI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Lr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class nO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Vt.UNAUTHENTICATED,this.clientId=lT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hh(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await BT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iO(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Uv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Uv(e.remoteStore,i)),t._onlineComponents=e}function rO(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function iO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await hh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!rO(n))throw n;go("Error using user provided cache. Falling back to memory cache: "+n),await hh(t,new Wv)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await hh(t,new Wv);return t._offlineComponents}async function cI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await qv(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await qv(t,new tO))),t._onlineComponents}function sO(t){return cI(t).then(e=>e.syncEngine)}async function kf(t){const e=await cI(t),n=e.eventManager;return n.onListen=Bb.bind(null,e.syncEngine),n.onUnlisten=Wb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$b.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qb.bind(null,e.syncEngine),n}function oO(t,e,n={}){const r=new yi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new uI({next:m=>{o.enqueueAndForget(()=>ZT(s,p));const T=m.docs.has(l);!T&&m.fromCache?c.reject(new te($.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&u&&u.source==="server"?c.reject(new te($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new eI(sd(l.path),h,{includeMetadataChanges:!0,ra:!0});return JT(s,p)}(await kf(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function dI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */function aO(t,e,n){if(!n)throw new te($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lO(t,e,n,r){if(e===!0&&r===!0)throw new te($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gv(t){if(!ie.isDocumentKey(t))throw new te($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function ar(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vm(t);throw new te($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Qv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _m{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new te($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new te($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new RN;switch(r.type){case"firstParty":return new kN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kv.get(n);r&&(Y("ComponentProvider","Removing Datastore"),Kv.delete(n),r.terminate())}(this),Promise.resolve()}}function uO(t,e,n,r={}){var i;const s=(t=ar(t,_m))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&go("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Vt.MOCK_USER;else{l=pP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new te($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Vt(c)}t._authCredentials=new AN(new aT(l,u))}}/**
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
 */class pd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pd(this.firestore,e,this._query)}}class sn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sn(this.firestore,e,this._key)}}class dl extends pd{constructor(e,n,r){super(e,n,sd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new sn(this.firestore,null,new ie(e))}withConverter(e){return new dl(this.firestore,e,this._path)}}function ws(t,e,...n){if(t=mt(t),arguments.length===1&&(e=lT.newId()),aO("doc","path",e),t instanceof _m){const r=rt.fromString(e,...n);return Gv(r),new sn(t,null,new ie(r))}{if(!(t instanceof sn||t instanceof dl))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(rt.fromString(e,...n));return Gv(r),new sn(t.firestore,t instanceof dl?t.converter:null,new ie(r))}}/**
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
 */class cO{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new HT(this,"async_queue_retry"),this.hu=()=>{const n=dh();n&&Y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=dh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=dh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new yi;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Rl(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Lr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=pm.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&le()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Yv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class To extends _m{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new cO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hI(this),this._firestoreClient.terminate()}}function dO(t,e){const n=typeof t=="object"?t:Yc(),r=typeof t=="string"?t:"(default)",i=Ur(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=hP("firestore");s&&uO(i,...s)}return i}function wm(t){return t._firestoreClient||hI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hI(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,h){return new BN(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,dI(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new nO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Io{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Io(Bt.fromBase64String(e))}catch(n){throw new te($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Io(Bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class md{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Tm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
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
 */const hO=/^__.*__$/;class fO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ni(e,this.data,this.fieldMask,n,this.fieldTransforms):new Al(e,this.data,n,this.fieldTransforms)}}class fI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ni(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function pI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class Im{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Im(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Sc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(pI(this.fu)&&hO.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class pO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dd(e)}Fu(e,n,r,i=!1){return new Im({fu:e,methodName:n,vu:r,path:Rt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mI(t){const e=t._freezeSettings(),n=dd(t._databaseId);return new pO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mO(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Sm("Data must be an object, but it was:",o,r);const l=gI(r,o);let u,c;if(s.merge)u=new fn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const m=xf(e,p,n);if(!o.contains(m))throw new te($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);vI(h,m)||h.push(m)}u=new fn(h),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new fO(new Jt(l),u,c)}class xl extends Em{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xl}}function gO(t,e,n,r){const i=t.Fu(1,e,n);Sm("Data must be an object, but it was:",i,r);const s=[],o=Jt.empty();vs(r,(u,c)=>{const h=Rm(e,u,n);c=mt(c);const p=i.Su(h);if(c instanceof xl)s.push(h);else{const m=gd(c,p);m!=null&&(s.push(h),o.set(h,m))}});const l=new fn(s);return new fI(o,l,i.fieldTransforms)}function yO(t,e,n,r,i,s){const o=t.Fu(1,e,n),l=[xf(e,r,n)],u=[i];if(s.length%2!=0)throw new te($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(xf(e,s[m])),u.push(s[m+1]);const c=[],h=Jt.empty();for(let m=l.length-1;m>=0;--m)if(!vI(c,l[m])){const T=l[m];let C=u[m];C=mt(C);const k=o.Su(T);if(C instanceof xl)c.push(T);else{const O=gd(C,k);O!=null&&(c.push(T),h.set(T,O))}}const p=new fn(c);return new fI(h,p,o.fieldTransforms)}function gd(t,e){if(yI(t=mt(t)))return Sm("Unsupported field value:",e,t),gI(t,e);if(t instanceof Em)return function(r,i){if(!pI(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=gd(l,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pt.fromDate(r);return{timestampValue:Tc(i.serializer,s)}}if(r instanceof pt){const s=new pt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tc(i.serializer,s)}}if(r instanceof Tm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Io)return{bytesValue:LT(i.serializer,r._byteString)};if(r instanceof sn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:om(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${vm(r)}`)}(t,e)}function gI(t,e){const n={};return uT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vs(t,(r,i)=>{const s=gd(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pt||t instanceof Tm||t instanceof Io||t instanceof sn||t instanceof Em)}function Sm(t,e,n){if(!yI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=vm(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function xf(t,e,n){if((e=mt(e))instanceof md)return e._internalPath;if(typeof e=="string")return Rm(t,e);throw Sc("Field path arguments must be of type string or ",t,!1,void 0,n)}const vO=new RegExp("[~\\*/\\[\\]]");function Rm(t,e,n){if(e.search(vO)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new md(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new te($.INVALID_ARGUMENT,l+t+u)}function vI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class _I{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _O(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _O extends _I{data(){return super.data()}}function wI(t,e){return typeof e=="string"?Rm(t,e):e instanceof md?e._internalPath:e._delegate._internalPath}/**
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
 */function wO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class EO{convertValue(e,n="none"){switch(ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Tm(ut(e.latitude),ut(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=em(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ol(e));default:return null}}convertTimestamp(e){const n=Ii(e);return new pt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=rt.fromString(e);Ve(zT(r));const i=new al(r.get(1),r.get(3)),s=new ie(r.popFirst(5));return i.isEqual(n)||Lr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function TO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ya{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class EI extends _I{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bu extends EI{data(e={}){return super.data(e)}}class IO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ya(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bu(this._firestore,this._userDataWriter,r.key,r,new ya(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new bu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ya(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new bu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ya(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:SO(l.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
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
 */function RO(t){t=ar(t,sn);const e=ar(t.firestore,To);return oO(wm(e),t._key).then(n=>AI(e,t,n))}class TI extends EO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Io(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new sn(this.firestore,null,n)}}function II(t,e,n){t=ar(t,sn);const r=ar(t.firestore,To),i=TO(t.converter,e,n);return RI(r,[mO(mI(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,sr.none())])}function Am(t,e,n,...r){t=ar(t,sn);const i=ar(t.firestore,To),s=mI(i);let o;return o=typeof(e=mt(e))=="string"||e instanceof md?yO(s,"updateDoc",t._key,e,n,r):gO(s,"updateDoc",t._key,e),RI(i,[o.toMutation(t._key,sr.exists(!0))])}function SI(t,...e){var n,r,i;t=mt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Yv(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Yv(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,h;if(t instanceof sn)c=ar(t.firestore,To),h=sd(t._key.path),u={next:p=>{e[o]&&e[o](AI(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=ar(t,pd);c=ar(p.firestore,To),h=p._query;const m=new TI(c);u={next:T=>{e[o]&&e[o](new IO(c,m,p,T))},error:e[o+1],complete:e[o+2]},wO(t._query)}return function(m,T,C,k){const O=new uI(k),S=new eI(T,O,C);return m.asyncQueue.enqueueAndForget(async()=>JT(await kf(m),S)),()=>{O.$a(),m.asyncQueue.enqueueAndForget(async()=>ZT(await kf(m),S))}}(wm(c),h,l,u)}function RI(t,e){return function(r,i){const s=new yi;return r.asyncQueue.enqueueAndForget(async()=>Kb(await sO(r),i,s)),s.promise}(wm(t),e)}function AI(t,e,n){const r=n.docs.get(e._key),i=new TI(t);return new EI(t,i,e._key,r,new ya(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function AO(){return new xl("deleteField")}(function(e,n=!0){(function(i){xo=i})(xi),xn(new kn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new To(new PN(r.getProvider("auth-internal")),new NN(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new te($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new al(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ut(yv,"4.6.4",e),Ut(yv,"4.6.4","esm2017")})();var ji={BASE_URL:"/Timelines",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const PO={apiKey:ji.VITE_FIREBASE_API_KEY,authDomain:ji.VITE_FIREBASE_AUTH_DOMAIN,projectId:ji.VITE_FIREBASE_PROJECT_ID,storageBucket:ji.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:ji.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:ji.VITE_FIREBASE_APP_ID,measurementId:ji.VITE_FIREBASE_MEASUREMENT_ID},Pm=Qc(PO);rk(Pm);const Es=IN(Pm),Ts=dO(Pm),PI=Lf.createContext();function yd(){return F.useContext(PI)}function CO({children:t}){const[e,n]=F.useState(null),[r,i]=F.useState(!1),[s,o]=F.useState(!1),[l,u]=F.useState(!1),[c,h]=F.useState(!0);F.useEffect(()=>dx(Es,p),[]);async function p(T){if(T){n({...T});const C=T.providerData.some(k=>k.providerId==="password");o(C),i(!0)}else n(null),i(!1);h(!1)}const m={userLoggedIn:r,isEmailUser:s,isGoogleUser:l,currentUser:e,setCurrentUser:n};return w.jsx(PI.Provider,{value:m,children:!c&&t})}function kO(){const{userLoggedIn:t}=yd();return t?w.jsx(qc,{to:"/Timelines/app"}):w.jsx(w.Fragment,{children:w.jsxs("div",{className:"main",children:[w.jsx(nP,{}),w.jsx("div",{className:"content",children:"Dashboard"}),w.jsx(rP,{})]})})}function CI({children:t}){return w.jsx(w.Fragment,{children:w.jsx("div",{className:"app-header",children:t})})}/**
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
 */class xO{constructor(e,n){this._delegate=e,this.firebase=n,tl(e,new kn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Op(this._delegate)))}_getService(e,n=wi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=wi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){tl(this._delegate,e)}_addOrOverwriteComponent(e){qw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const NO={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Xv=new jr("app-compat","Firebase",NO);/**
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
 */function DO(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Ut,setLogLevel:Yw,onLog:Qw,apps:null,SDK_VERSION:xi,INTERNAL:{registerComponent:l,removeApp:r,useAsService:u,modularAPIs:jC}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||wi,!Oy(e,c))throw Xv.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,h={}){const p=Qc(c,h);if(Oy(e,p.name))return e[p.name];const m=new t(p,n);return e[p.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function l(c){const h=c.name,p=h.replace("-compat","");if(xn(c)&&c.type==="PUBLIC"){const m=(T=i())=>{if(typeof T[p]!="function")throw Xv.create("invalid-app-argument",{appName:h});return T[p]()};c.serviceProps!==void 0&&ac(m,c.serviceProps),n[p]=m,t.prototype[p]=function(...T){return this._getService.bind(this,h).apply(this,c.multipleInstances?T:[])}}return c.type==="PUBLIC"?n[p]:null}function u(c,h){return h==="serverAuth"?null:h}return n}/**
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
 */function kI(){const t=DO(xO);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:kI,extendNamespace:e,createSubscribe:Uw,ErrorFactory:jr,deepExtend:ac});function e(n){ac(t,n)}return t}const bO=kI();/**
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
 */const Jv=new _l("@firebase/app-compat"),OO="@firebase/app-compat",LO="0.2.36";/**
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
 */function MO(t){Ut(OO,LO,t)}/**
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
 */if(Lw()&&self.firebase!==void 0){Jv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Jv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const VO=bO;MO();var FO="firebase",jO="10.12.3";/**
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
 */VO.registerVersion(FO,jO,"app-compat");const UO="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-edit'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M7%207h-1a2%202%200%200%200%20-2%202v9a2%202%200%200%200%202%202h9a2%202%200%200%200%202%20-2v-1'%20/%3e%3cpath%20d='M20.385%206.585a2.1%202.1%200%200%200%20-2.97%20-2.97l-8.415%208.385v3h3l8.385%20-8.415z'%20/%3e%3cpath%20d='M16%205l3%203'%20/%3e%3c/svg%3e",xI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-plus'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M12%205l0%2014'%20/%3e%3cpath%20d='M5%2012l14%200'%20/%3e%3c/svg%3e",zO="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-pin'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M15%204.5l-4%204l-4%201.5l-1.5%201.5l7%207l1.5%20-1.5l1.5%20-4l4%20-4'%20/%3e%3cpath%20d='M9%2015l-4.5%204.5'%20/%3e%3cpath%20d='M14.5%204l5.5%205.5'%20/%3e%3c/svg%3e",io="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-calendar-event'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M4%205m0%202a2%202%200%200%201%202%20-2h12a2%202%200%200%201%202%202v12a2%202%200%200%201%20-2%202h-12a2%202%200%200%201%20-2%20-2z'%20/%3e%3cpath%20d='M16%203l0%204'%20/%3e%3cpath%20d='M8%203l0%204'%20/%3e%3cpath%20d='M4%2011l16%200'%20/%3e%3cpath%20d='M8%2015h2v2h-2z'%20/%3e%3c/svg%3e";function BO({isOpen:t,toggleModal:e,point:n,children:r}){if(!t)return null;const i=`${n.date.getDate()}-${n.date.getMonth()+1}-${n.date.getFullYear()}`;return w.jsx("div",{className:"modal-overlay",onClick:e,children:w.jsxs("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:[w.jsx("h2",{children:n.label}),w.jsx("p",{children:n.description}),w.jsx("p",{children:i}),r]})})}function Rc({isOpen:t,toggleModal:e,children:n}){return t?w.jsx("div",{className:"modal-overlay",onClick:e,children:w.jsx("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:n})}):null}const $O=({onSingleEventClick:t,onLongEventClick:e})=>{const[n,r]=F.useState(!1),i=F.useRef(null),s=()=>{r(!n)},o=l=>{i.current&&!i.current.contains(l.target)&&r(!1)};return F.useEffect(()=>(document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}),[]),w.jsxs("div",{className:"add-button-dropdown",ref:i,children:[w.jsxs("button",{className:"add-button",onClick:s,children:[w.jsx("img",{src:xI}),w.jsx("div",{children:"Add"})]}),n&&w.jsx("div",{className:"dropdown-menu",children:w.jsxs("ul",{children:[w.jsxs("li",{onClick:()=>{s(),t()},children:[w.jsx("img",{src:zO}),"Single event"]}),w.jsxs("li",{onClick:()=>{s(),e()},children:[w.jsx("img",{src:io}),"Long event"]})]})})]})},HO=async(t,e,n,r,i)=>{if(!t||!e){alert("Please fill in all fields.");return}const s=r.uid,o=`point_${Date.now()}`,l={title:t,date:e,description:n};try{const u=ws(Ts,"users",s);await Am(u,{[`timelines.${i}.points.${o}`]:l}),console.log("New point added successfully"),setTimelineData(c=>({...c,points:{...c.points,[o]:l}}))}catch(u){console.error("Error adding point: ",u)}};function WO({timelineData:t,currentUser:e,timelineId:n}){const r=F.useRef(null),i=new Date(t.startDate),s=new Date(t.endDate),o=Object.values(t.points).map(ae=>({date:new Date(ae.date),label:ae.title,description:ae.description})),c=(s-i)/(1e3*60*60*24)*10,[h,p]=F.useState({x:(window.innerWidth-c)/2,y:window.innerHeight/2}),[m,T]=F.useState(1),[C,k]=F.useState(!1),[O,S]=F.useState(null),_=ae=>{const be=s-i;return(ae-i)/be*c};F.useEffect(()=>{const ae=r.current,be=ae.getContext("2d");ae.width=window.innerWidth,ae.height=window.innerHeight;const bn=()=>{be.clearRect(0,0,ae.width,ae.height),be.save(),be.translate(h.x,h.y),be.scale(m,m),an(be),o.forEach(Ce=>{const et=r.current.style.cursor==="pointer";$t(be,Ce,et)});const re=65;wt(be,i,0-re),wt(be,s,c+re-60,!0),Fe(be,0),Fe(be,c),be.restore()},an=re=>{re.strokeStyle="#555555",re.lineWidth=2;const Ce=0;re.beginPath(),re.moveTo(0,Ce),re.lineTo(c,Ce),re.stroke()},wt=(re,Ce,et,cr=!1)=>{const Ln=`${Ce.getDate()}-${Ce.getMonth()+1}-${Ce.getFullYear()}`;re.font="12px 'Source Sans 3'";const Qt=re.measureText(Ln).width+2*7,$e=20;cr?et=c+5:et=0-Qt-5,re.fillStyle="white",re.beginPath(),re.moveTo(et+5,-10),re.lineTo(et+Qt-5,-10),re.arc(et+Qt-5,-5,5,-Math.PI/2,0),re.lineTo(et+Qt,-10+$e-5),re.arc(et+Qt-5,-10+$e-5,5,0,Math.PI/2),re.lineTo(et+5,-10+$e),re.arc(et+5,-10+$e-5,5,Math.PI/2,Math.PI),re.lineTo(et,-5),re.arc(et+5,-5,5,Math.PI,1.5*Math.PI),re.closePath(),re.fill(),re.fillStyle="black";const it=et+7;re.fillText(Ln,it,4)},Fe=(re,Ce)=>{re.strokeStyle="#555555",re.lineWidth=2,re.beginPath(),re.moveTo(Ce,-5),re.lineTo(Ce,5),re.stroke()},$t=(re,Ce,et=!1)=>{const cr=_(Ce.date),On=0;re.fillStyle=et?"blue":"red",re.beginPath(),re.arc(cr,On,5,0,2*Math.PI),re.fill()},Gn=re=>{const Ce=ae.getBoundingClientRect(),et=re.clientX-Ce.left,cr=re.clientY-Ce.top,On=(et-h.x)/m,dr=(cr-h.y)/m;o.forEach(hr=>{const Di=_(hr.date),Ln=0;On>=Di-5&&On<=Di+5&&dr>=Ln-5&&dr<=Ln+5&&(console.log("Point clicked:",hr),S(hr))})};ae.addEventListener("click",Gn),bn()},[t,h,m,o]);const A=()=>{k(!0)},V=()=>{k(!1)},z=ae=>{if(C)p(be=>({x:be.x+ae.movementX,y:be.y}));else{const be=r.current.getBoundingClientRect(),bn=ae.clientX-be.left,an=ae.clientY-be.top,wt=(bn-h.x)/m,Fe=(an-h.y)/m;let $t="grab";o.forEach(Gn=>{const re=_(Gn.date),Ce=0;wt>=re-5&&wt<=re+5&&Fe>=Ce-5&&Fe<=Ce+5&&($t="pointer")}),r.current.style.cursor=$t}},N=ae=>{const be=ae.deltaY>0?.9:1.1,bn=r.current.getBoundingClientRect();ae.clientX-bn.left;const an=bn.width/2;p(wt=>({x:an-(an-wt.x)*be,y:wt.y})),T(wt=>Math.max(.1,wt*be))},[E,y]=F.useState(!1),[v,R]=F.useState(!1);F.useState(!1);const[P,b]=F.useState(""),[I,Ie]=F.useState(""),[_t,on]=F.useState(""),[Re,K]=F.useState(""),[ee,ne]=F.useState(""),[_e,pe]=F.useState(""),[Ne,Xe]=F.useState(""),Je=()=>{y(!E),E||(b(""),Ie(""),on(""))},Ze=()=>{R(!v),v||(K(""),ne(""),pe(""),Xe(""))};return w.jsxs("div",{className:"canvas-box",style:{overflow:"hidden",position:"relative"},children:[w.jsxs("div",{className:"opened-timeline-file-name",children:[w.jsx("div",{children:t.title}),w.jsx("img",{src:UO})]}),w.jsx("canvas",{className:"canvas",ref:r,onMouseDown:A,onMouseUp:V,onMouseMove:z,onWheel:N,style:{cursor:C?"grabbing":"grab"}}),w.jsx($O,{onSingleEventClick:Je,onLongEventClick:Ze}),w.jsx(BO,{isOpen:!!O,point:O,toggleModal:()=>S(null)}),w.jsxs(Rc,{isOpen:E,toggleModal:Je,children:[w.jsx("h1",{children:"Add Single Event"}),w.jsxs("div",{className:"modal-grid",children:[w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Title"}),w.jsx("input",{className:"modal-input",type:"text",name:"title",value:P,onChange:ae=>b(ae.target.value)})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Starting date"}),w.jsxs("div",{className:"modal-input-container",children:[w.jsx("img",{src:io,className:"modal-input-image"}),w.jsx("input",{className:"modal-input",type:"date",name:"date",value:I,onChange:ae=>Ie(ae.target.value)})]})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Description"}),w.jsx("textarea",{className:"modal-input",name:"desc",value:_t,onChange:ae=>on(ae.target.value)})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("button",{className:"modal-button",onClick:Je,children:"Cancel"}),w.jsx("button",{className:"modal-button proceed-button",onClick:()=>{HO(P,I,_t,e,n),Je()},children:"Proceed"})]})]})]}),w.jsxs(Rc,{isOpen:v,toggleModal:Ze,children:[w.jsx("h1",{children:"Add Long Event"}),w.jsxs("div",{className:"modal-grid",children:[w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Title"}),w.jsx("input",{className:"modal-input",type:"text",name:"longEventTitle",value:Re,onChange:ae=>K(ae.target.value)})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Starting date"}),w.jsxs("div",{className:"modal-input-container",children:[w.jsx("img",{src:io,className:"modal-input-image"}),w.jsx("input",{className:"modal-input",type:"date",name:"longEventStartDate",value:ee,onChange:ae=>ne(ae.target.value)})]})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Ending Date"}),w.jsxs("div",{className:"modal-input-container",children:[w.jsx("img",{src:io,className:"modal-input-image"}),w.jsx("input",{className:"modal-input",type:"date",name:"longEventEndDate",value:_e,onChange:ae=>pe(ae.target.value)})]})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Description"}),w.jsx("textarea",{className:"modal-input",name:"longEventDesc",value:Ne,onChange:ae=>Xe(ae.target.value)})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("button",{className:"modal-button",onClick:Ze,children:"Cancel"}),w.jsx("button",{className:"modal-button proceed-button",onClick:()=>{Ze()},children:"Proceed"})]})]})]})]})}const sa=(t,{children:e})=>{const[n,r]=F.useState(!1),i=F.useRef(null),s=()=>{r(!n)},o=l=>{i.current&&!i.current.contains(l.target)&&r(!1)};return F.useEffect(()=>(document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}),[]),w.jsxs("div",{className:"header-button-dropdown",ref:i,children:[w.jsx("button",{onClick:s,children:t.buttonName}),n&&w.jsx("div",{className:"header-dropdown-menu",children:w.jsx("ul",{children:t.children})})]})},qO=async()=>{try{await BE(Es)}catch(t){console.error("Error logging out: ",t)}};function KO(){const{timelineId:t}=TA(),[e,n]=F.useState(null),{currentUser:r}=yd();return F.useEffect(()=>{if(r){const i=ws(Ts,"users",r.uid),s=SI(i,o=>{if(o.exists()){const u=o.data().timelines[t];u?n(u):console.error("No such timeline!")}else console.error("No such user document!")});return()=>s()}},[r,t]),e?r?w.jsx(w.Fragment,{children:w.jsxs("div",{className:"main horizontal-gradient",children:[w.jsxs(CI,{children:[w.jsxs("div",{className:"header-option-buttons",children:[w.jsx(as,{to:"/Timelines/app",children:w.jsx("button",{children:"Dashboard"})}),w.jsxs(sa,{buttonName:"File",children:[w.jsx("li",{children:"New file"}),w.jsx("div",{className:"dropdown-line-divider"}),w.jsx("li",{children:"Open file"}),w.jsx("li",{children:"Open recent"}),w.jsx("div",{className:"dropdown-line-divider"}),w.jsx("li",{children:"Save file"}),w.jsx("li",{children:"Save file as"}),w.jsx("div",{className:"dropdown-line-divider"}),w.jsx("li",{children:"Export image"}),w.jsx("div",{className:"dropdown-line-divider"}),w.jsx("li",{children:"Close file"})]}),w.jsxs(sa,{buttonName:"Edit",children:[w.jsx("li",{children:"Undo"}),w.jsx("li",{children:"Redo"}),w.jsx("div",{className:"dropdown-line-divider"}),w.jsx("li",{children:"Cut"}),w.jsx("li",{children:"Copy"}),w.jsx("li",{children:"Paste"}),w.jsx("div",{className:"dropdown-line-divider"}),w.jsx("li",{children:"Find event"}),w.jsx("div",{className:"dropdown-line-divider"}),w.jsx("li",{children:"Change background"})]}),w.jsx(sa,{buttonName:"View",children:w.jsx("li",{children:"Fit to whole screen"})}),w.jsxs(sa,{buttonName:"Text",children:[w.jsx("li",{children:"Change font"}),w.jsx("li",{children:"Change text size"})]}),w.jsx(sa,{buttonName:"Colors",children:w.jsx("li",{children:"Change color palette"})})]}),w.jsx("button",{onClick:qO,className:"logout-button",children:"Log Out"})]}),w.jsx(WO,{timelineData:e,currentUser:r,timelineId:t})]})}):w.jsx(qc,{to:"/Timelines/login"}):w.jsx("div",{children:"Loading timeline..."})}function oa(){return w.jsx(w.Fragment,{children:w.jsx("div",{className:"error-page",children:"Error"})})}const GO=async(t,e,n)=>{const r=await ax(Es,t,e),i=r.user;return await II(ws(Ts,"users",i.uid),{email:i.email,nickname:n,timelines:{},createdAt:new Date},{merge:!0}),r},QO=(t,e)=>lx(Es,t,e),NI=async()=>{const t=new Er,n=(await Dx(Es,t)).user,r=ws(Ts,"users",n.uid);return(await RO(r)).exists()||await II(r,{email:n.email,nickname:n.displayName||n.email,createdAt:new Date,timelines:{}}),n},YO=t=>ox(Es,t),DI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%3e%3cpath%20d='M22.56%2012.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26%201.37-1.04%202.53-2.21%203.31v2.77h3.57c2.08-1.92%203.28-4.74%203.28-8.09z'%20fill='%234285F4'/%3e%3cpath%20d='M12%2023c2.97%200%205.46-.98%207.28-2.66l-3.57-2.77c-.98.66-2.23%201.06-3.71%201.06-2.86%200-5.29-1.93-6.16-4.53H2.18v2.84C3.99%2020.53%207.7%2023%2012%2023z'%20fill='%2334A853'/%3e%3cpath%20d='M5.84%2014.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43%208.55%201%2010.22%201%2012s.43%203.45%201.18%204.93l2.85-2.22.81-.62z'%20fill='%23FBBC05'/%3e%3cpath%20d='M12%205.38c1.62%200%203.06.56%204.21%201.64l3.15-3.15C17.45%202.09%2014.97%201%2012%201%207.7%201%203.99%203.47%202.18%207.07l3.66%202.84c.87-2.6%203.3-4.53%206.16-4.53z'%20fill='%23EA4335'/%3e%3cpath%20d='M1%201h22v22H1z'%20fill='none'/%3e%3c/svg%3e";function XO(){const[t,e]=F.useState(""),[n,r]=F.useState(""),[i,s]=F.useState(""),[o,l]=F.useState(""),[u,c]=F.useState(""),[h,p]=F.useState(!1),m=Np(),T=async k=>{if(k.preventDefault(),i!==o){c("Passwords do not match");return}if(t==""||t==null){c("Nickname field is empty");return}console.log("Email:",n),console.log("Password:",i);try{await GO(n,i,t),m("/Timelines/login")}catch(O){console.error("Error creating user:",O),c(O.message)}},C=async k=>{if(k.preventDefault(),!h){p(!0);try{await NI(),m("/Timelines/app")}catch(O){c(O.message),p(!1)}}};return w.jsx(w.Fragment,{children:w.jsxs("div",{className:"main-signup",children:[w.jsx("img",{src:Kc,className:"logo",alt:"Logo"}),w.jsx("h1",{children:"Create account"}),w.jsxs("form",{onSubmit:T,children:[w.jsx("div",{className:"input-box",children:w.jsx("input",{placeholder:"Nickname",type:"text",value:t,onChange:k=>e(k.target.value)})}),w.jsx("div",{className:"input-box",children:w.jsx("input",{placeholder:"Email",type:"email",value:n,onChange:k=>r(k.target.value)})}),w.jsx("div",{className:"input-box",children:w.jsx("input",{placeholder:"Password",type:"password",value:i,onChange:k=>s(k.target.value)})}),w.jsx("div",{className:"input-box",children:w.jsx("input",{placeholder:"Repeat password",type:"password",value:o,onChange:k=>l(k.target.value)})}),w.jsxs("p",{children:[u&&w.jsx("p",{className:"error",children:u}),"Already have an account?",w.jsx(as,{to:"/Timelines/login",children:w.jsx("span",{className:"blue-font",children:" Log in"})})]}),w.jsx("input",{type:"submit",className:"submit-button",value:"Submit"}),w.jsxs("div",{className:"divider",children:[w.jsx("div",{className:"divider-line"}),w.jsx("div",{children:"OR"}),w.jsx("div",{className:"divider-line"})]}),w.jsxs("button",{className:"button-google",onClick:C,disabled:h,children:[w.jsx("img",{src:DI,alt:"google"}),h?"Signing in with Google...":"Sign Up with Google"]})]})]})})}function JO(){const{userLoggedIn:t}=yd(),[e,n]=F.useState(""),[r,i]=F.useState(""),[s,o]=F.useState(!1),[l,u]=F.useState(!1),[c,h]=F.useState(""),[p,m]=F.useState(""),T=async O=>{if(O.preventDefault(),!s){o(!0);try{await QO(e,r)}catch(S){h(S.message),o(!1)}}},C=async O=>{if(O.preventDefault(),!l){u(!0);try{await NI()}catch(S){h(S.message),u(!1)}}},k=async O=>{if(O.preventDefault(),e)try{await YO(e),m("Password reset email sent!")}catch(S){h(S.message)}else h("Please enter your email address.")};return t?w.jsx(qc,{to:"/Timelines/app"}):w.jsx(w.Fragment,{children:w.jsxs("div",{className:"main-login",children:[w.jsx("img",{src:Kc,className:"logo",alt:"Logo"}),w.jsx("h1",{children:"Welcome back"}),c&&w.jsx("p",{style:{color:"red",marginBottom:5},children:c}),p&&w.jsx("p",{style:{color:"green",marginBottom:5},children:p}),w.jsxs("form",{onSubmit:T,children:[w.jsx("div",{className:"input-box",children:w.jsx("input",{type:"email",value:e,placeholder:"Email",onChange:O=>n(O.target.value),required:!0})}),w.jsx("div",{className:"input-box",children:w.jsx("input",{type:"password",value:r,placeholder:"Password",onChange:O=>i(O.target.value),required:!0})}),w.jsx("p",{children:w.jsx("span",{className:"blue-font",onClick:k,style:{cursor:"pointer"},children:"I don't remember my password"})}),w.jsx("button",{className:"submit-button",type:"submit",disabled:s,children:s?"Signing in...":"Continue"}),w.jsxs("p",{children:["Don't have an account?",w.jsx("span",{className:"blue-font",children:w.jsx(as,{to:"/Timelines/sign-up",children:" Sign Up"})})]}),w.jsxs("div",{className:"divider",children:[w.jsx("div",{className:"divider-line"}),w.jsx("div",{children:"OR"}),w.jsx("div",{className:"divider-line"})]}),w.jsxs("button",{className:"button-google",onClick:C,disabled:l,children:[w.jsx("img",{src:DI,alt:"google"}),l?"Signing in with Google...":"Continue with Google"]})]})]})})}const ZO="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%20class='icon%20icon-tabler%20icons-tabler-filled%20icon-tabler-caret-down'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M18%209c.852%200%201.297%20.986%20.783%201.623l-.076%20.084l-6%206a1%201%200%200%201%20-1.32%20.083l-.094%20-.083l-6%20-6l-.083%20-.094l-.054%20-.077l-.054%20-.096l-.017%20-.036l-.027%20-.067l-.032%20-.108l-.01%20-.053l-.01%20-.06l-.004%20-.057v-.118l.005%20-.058l.009%20-.06l.01%20-.052l.032%20-.108l.027%20-.067l.07%20-.132l.065%20-.09l.073%20-.081l.094%20-.083l.077%20-.054l.096%20-.054l.036%20-.017l.067%20-.027l.108%20-.032l.053%20-.01l.06%20-.01l.057%20-.004l12.059%20-.002z'%20/%3e%3c/svg%3e",eL="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-settings-2'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M19.875%206.27a2.225%202.225%200%200%201%201.125%201.948v7.284c0%20.809%20-.443%201.555%20-1.158%201.948l-6.75%204.27a2.269%202.269%200%200%201%20-2.184%200l-6.75%20-4.27a2.225%202.225%200%200%201%20-1.158%20-1.948v-7.285c0%20-.809%20.443%20-1.554%201.158%20-1.947l6.75%20-3.98a2.33%202.33%200%200%201%202.25%200l6.75%203.98h-.033z'%20/%3e%3cpath%20d='M12%2012m-3%200a3%203%200%201%200%206%200a3%203%200%201%200%20-6%200'%20/%3e%3c/svg%3e",tL="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-trash'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M4%207l16%200'%20/%3e%3cpath%20d='M10%2011l0%206'%20/%3e%3cpath%20d='M14%2011l0%206'%20/%3e%3cpath%20d='M5%207l1%2012a2%202%200%200%200%202%202h8a2%202%200%200%200%202%20-2l1%20-12'%20/%3e%3cpath%20d='M9%207v-3a1%201%200%200%201%201%20-1h4a1%201%200%200%201%201%201v3'%20/%3e%3c/svg%3e",nL=async(t,e,n,r,i)=>{if(!t||!e||!n){alert("Please fill in all fields.");return}const s=r.uid,o=`timeline_${Date.now()}`,l={title:t,startDate:e,endDate:n,periods:{},points:{}};try{const u=ws(Ts,"users",s);await Am(u,{[`timelines.${o}`]:l}),console.log("New timeline added successfully"),i()}catch(u){console.error("Error adding timeline: ",u)}},rL=async(t,e,n)=>{if(!t||!e){alert("Missing information to delete timeline.");return}const r=e.uid;try{const i=ws(Ts,"users",r);await Am(i,{[`timelines.${t}`]:AO()}),console.log("Timeline deleted successfully"),n()}catch(i){console.error("Error deleting timeline: ",i)}},iL=async()=>{try{await BE(Es)}catch(t){console.error("Error logging out: ",t)}},sL=({fileName:t,timelineId:e,edited:n,currentUser:r})=>{const[i,s]=F.useState(!1),o=()=>{s(!i)};return w.jsxs("div",{className:"timeline-button-box",children:[w.jsx(as,{to:`/Timelines/app/${e}`,children:w.jsx("button",{className:"timeline-button"})}),w.jsxs("div",{className:"timeline-button-flex-wrapper",children:[w.jsxs(as,{to:`/Timelines/app/${e}`,children:[w.jsx("div",{className:"timeline-file-name",children:t}),w.jsxs("div",{className:"timeline-edited",children:["Edited ",n," ago"]})]}),w.jsxs("div",{style:{display:"flex",gap:5},children:[w.jsx("div",{className:"timeline-button-subbutton settings-button",children:w.jsx("img",{src:eL})}),w.jsx("div",{className:"timeline-button-subbutton trash-button",onClick:o,children:w.jsx("img",{src:tL})})]})]}),w.jsxs(Rc,{isOpen:i,toggleModal:o,children:[w.jsx("h1",{children:"Delete Timeline?"}),w.jsx("div",{className:"modal-grid",children:w.jsxs("div",{className:"modal-input-box",children:[w.jsx("button",{className:"modal-button",onClick:o,children:"Cancel"}),w.jsx("button",{className:"modal-button proceed-button",onClick:()=>rL(e,r,o),children:"Proceed"})]})})]})]})},oL=({onClick:t})=>w.jsxs("button",{onClick:t,className:"add-timeline-button",children:[w.jsx("div",{className:"add-timeline-icon",children:w.jsx("img",{src:xI,alt:"plus icon"})}),w.jsx("div",{children:"Create a new file"})]});function aL(){const{currentUser:t}=yd(),[e,n]=F.useState(null),[r,i]=F.useState(!1),[s,o]=F.useState(""),[l,u]=F.useState(""),[c,h]=F.useState("");if(F.useEffect(()=>{if(t){const m=ws(Ts,"users",t.uid),T=SI(m,C=>{C.exists()&&n(C.data())});return()=>T()}},[t]),!t)return w.jsx(qc,{to:"/Timelines/login"});if(!e)return w.jsx("div",{children:"Loading..."});const p=()=>{i(!r),r||(o(""),u(""),h(""))};return w.jsxs("div",{className:"main",children:[w.jsxs(CI,{children:[w.jsxs("div",{className:"header-logo",children:[w.jsx("img",{src:Kc,style:{width:24},alt:"Logo"}),w.jsx("div",{children:"Timelines"})]}),w.jsx("button",{onClick:iL,children:"Log Out"})]}),w.jsxs("div",{className:"dashboard-wrapper",children:[w.jsxs("div",{className:"dashboard-user",children:[w.jsx("h3",{children:"User panel"}),w.jsxs("h5",{children:["Welcome"," ",w.jsx("label",{className:"username",children:e&&e.nickname||t.email})]})]}),w.jsxs("div",{className:"dashboard-timelines",children:[w.jsx("div",{className:"dashboard-advertisement"}),w.jsx("h1",{children:"My Timelines"}),w.jsxs("div",{className:"timelines-box",children:[w.jsx(oL,{onClick:p}),Object.keys(e.timelines||{}).map(m=>w.jsx(sL,{timelineId:m,fileName:e.timelines[m].title,edited:"Just now",currentUser:t},m))]})]})]}),w.jsxs(Rc,{isOpen:r,toggleModal:p,children:[w.jsx("h1",{children:"Add new timeline"}),w.jsxs("div",{className:"modal-grid",children:[w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Title"}),w.jsx("input",{className:"modal-input",type:"text",name:"title",value:s,onChange:m=>o(m.target.value)})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Starting date"}),w.jsxs("div",{className:"modal-input-container",children:[w.jsx("img",{src:io,className:"modal-input-image"}),w.jsx("input",{className:"modal-input",type:"date",name:"start-date",value:l,onChange:m=>u(m.target.value)})]})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Ending date"}),w.jsxs("div",{className:"modal-input-container",children:[w.jsx("img",{src:io,className:"modal-input-image"}),w.jsx("input",{className:"modal-input",type:"date",name:"end-date",value:c,onChange:m=>h(m.target.value)})]})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Visibility"}),w.jsxs("div",{className:"modal-input-container",children:[w.jsx("img",{src:ZO,className:"modal-input-image"}),w.jsxs("select",{className:"modal-input",name:"visibility",children:[w.jsx("option",{value:"public",children:"Public"}),w.jsx("option",{value:"private",children:"Private"})]})]})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("label",{children:"Thumbnail"}),w.jsx("input",{className:"modal-input",type:"file",name:"thumbnail"})]}),w.jsxs("div",{className:"modal-input-box",children:[w.jsx("button",{className:"modal-button",onClick:p,children:"Cancel"}),w.jsx("button",{className:"modal-button proceed-button",onClick:()=>nL(s,l,c,t,p),children:"Proceed"})]})]})]})]})}const lL=BA([{path:"/Timelines",element:w.jsx(kO,{}),errorElement:w.jsx(oa,{})},{path:"/Timelines/sign-up",element:w.jsx(XO,{}),errorElement:w.jsx(oa,{})},{path:"/Timelines/login",element:w.jsx(JO,{}),errorElement:w.jsx(oa,{})},{path:"/Timelines/app",element:w.jsx(aL,{}),errorElement:w.jsx(oa,{})},{path:"/Timelines/app/:timelineId",element:w.jsx(KO,{}),errorElement:w.jsx(oa,{})}]);fh.createRoot(document.getElementById("root")).render(w.jsx(Lf.StrictMode,{children:w.jsx(CO,{children:w.jsx(XA,{router:lL})})}));
