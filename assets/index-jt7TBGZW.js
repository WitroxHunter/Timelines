function Xv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Jv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zv={exports:{}},Tc={},e_={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ll=Symbol.for("react.element"),GI=Symbol.for("react.portal"),QI=Symbol.for("react.fragment"),YI=Symbol.for("react.strict_mode"),XI=Symbol.for("react.profiler"),JI=Symbol.for("react.provider"),ZI=Symbol.for("react.context"),eS=Symbol.for("react.forward_ref"),tS=Symbol.for("react.suspense"),nS=Symbol.for("react.memo"),rS=Symbol.for("react.lazy"),eg=Symbol.iterator;function iS(t){return t===null||typeof t!="object"?null:(t=eg&&t[eg]||t["@@iterator"],typeof t=="function"?t:null)}var t_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},n_=Object.assign,r_={};function mo(t,e,n){this.props=t,this.context=e,this.refs=r_,this.updater=n||t_}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function i_(){}i_.prototype=mo.prototype;function Df(t,e,n){this.props=t,this.context=e,this.refs=r_,this.updater=n||t_}var xf=Df.prototype=new i_;xf.constructor=Df;n_(xf,mo.prototype);xf.isPureReactComponent=!0;var tg=Array.isArray,s_=Object.prototype.hasOwnProperty,Nf={current:null},o_={key:!0,ref:!0,__self:!0,__source:!0};function a_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)s_.call(e,r)&&!o_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ll,type:t,key:s,ref:o,props:i,_owner:Nf.current}}function sS(t,e){return{$$typeof:ll,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ll}function oS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ng=/\/+/g;function Th(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oS(""+t.key):e.toString(36)}function uu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ll:case GI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Th(o,0):r,tg(i)?(n="",t!=null&&(n=t.replace(ng,"$&/")+"/"),uu(i,e,n,"",function(c){return c})):i!=null&&(bf(i)&&(i=sS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ng,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",tg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Th(s,l);o+=uu(s,e,n,u,i)}else if(u=iS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Th(s,l++),o+=uu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zl(t,e,n){if(t==null)return t;var r=[],i=0;return uu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function aS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ht={current:null},cu={transition:null},lS={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:cu,ReactCurrentOwner:Nf};function l_(){throw Error("act(...) is not supported in production builds of React.")}ye.Children={map:zl,forEach:function(t,e,n){zl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zl(t,function(){e++}),e},toArray:function(t){return zl(t,function(e){return e})||[]},only:function(t){if(!bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ye.Component=mo;ye.Fragment=QI;ye.Profiler=XI;ye.PureComponent=Df;ye.StrictMode=YI;ye.Suspense=tS;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lS;ye.act=l_;ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=n_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)s_.call(e,u)&&!o_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ll,type:t.type,key:i,ref:s,props:r,_owner:o}};ye.createContext=function(t){return t={$$typeof:ZI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:JI,_context:t},t.Consumer=t};ye.createElement=a_;ye.createFactory=function(t){var e=a_.bind(null,t);return e.type=t,e};ye.createRef=function(){return{current:null}};ye.forwardRef=function(t){return{$$typeof:eS,render:t}};ye.isValidElement=bf;ye.lazy=function(t){return{$$typeof:rS,_payload:{_status:-1,_result:t},_init:aS}};ye.memo=function(t,e){return{$$typeof:nS,type:t,compare:e===void 0?null:e}};ye.startTransition=function(t){var e=cu.transition;cu.transition={};try{t()}finally{cu.transition=e}};ye.unstable_act=l_;ye.useCallback=function(t,e){return Ht.current.useCallback(t,e)};ye.useContext=function(t){return Ht.current.useContext(t)};ye.useDebugValue=function(){};ye.useDeferredValue=function(t){return Ht.current.useDeferredValue(t)};ye.useEffect=function(t,e){return Ht.current.useEffect(t,e)};ye.useId=function(){return Ht.current.useId()};ye.useImperativeHandle=function(t,e,n){return Ht.current.useImperativeHandle(t,e,n)};ye.useInsertionEffect=function(t,e){return Ht.current.useInsertionEffect(t,e)};ye.useLayoutEffect=function(t,e){return Ht.current.useLayoutEffect(t,e)};ye.useMemo=function(t,e){return Ht.current.useMemo(t,e)};ye.useReducer=function(t,e,n){return Ht.current.useReducer(t,e,n)};ye.useRef=function(t){return Ht.current.useRef(t)};ye.useState=function(t){return Ht.current.useState(t)};ye.useSyncExternalStore=function(t,e,n){return Ht.current.useSyncExternalStore(t,e,n)};ye.useTransition=function(){return Ht.current.useTransition()};ye.version="18.3.1";e_.exports=ye;var U=e_.exports;const Of=Jv(U),uS=Xv({__proto__:null,default:Of},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cS=U,hS=Symbol.for("react.element"),dS=Symbol.for("react.fragment"),fS=Object.prototype.hasOwnProperty,pS=cS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mS={key:!0,ref:!0,__self:!0,__source:!0};function u_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)fS.call(e,r)&&!mS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:hS,type:t,key:s,ref:o,props:i,_owner:pS.current}}Tc.Fragment=dS;Tc.jsx=u_;Tc.jsxs=u_;Zv.exports=Tc;var R=Zv.exports,hd={},c_={exports:{}},fn={},h_={exports:{}},d_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,te){var ne=G.length;G.push(te);e:for(;0<ne;){var me=ne-1>>>1,Q=G[me];if(0<i(Q,te))G[me]=te,G[ne]=Q,ne=me;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var te=G[0],ne=G.pop();if(ne!==te){G[0]=ne;e:for(var me=0,Q=G.length,le=Q>>>1;me<le;){var Ne=2*(me+1)-1,ze=G[Ne],Me=Ne+1,en=G[Me];if(0>i(ze,ne))Me<Q&&0>i(en,ze)?(G[me]=en,G[Me]=ne,me=Me):(G[me]=ze,G[Ne]=ne,me=Ne);else if(Me<Q&&0>i(en,ne))G[me]=en,G[Me]=ne,me=Me;else break e}}return te}function i(G,te){var ne=G.sortIndex-te.sortIndex;return ne!==0?ne:G.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,E=!1,C=!1,k=!1,O=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(G){for(var te=n(c);te!==null;){if(te.callback===null)r(c);else if(te.startTime<=G)r(c),te.sortIndex=te.expirationTime,e(u,te);else break;te=n(c)}}function V(G){if(k=!1,A(G),!C)if(n(u)!==null)C=!0,mn(z);else{var te=n(c);te!==null&&Ie(V,te.startTime-G)}}function z(G,te){C=!1,k&&(k=!1,I(y),y=-1),E=!0;var ne=m;try{for(A(te),p=n(u);p!==null&&(!(p.expirationTime>te)||G&&!P());){var me=p.callback;if(typeof me=="function"){p.callback=null,m=p.priorityLevel;var Q=me(p.expirationTime<=te);te=t.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(u)&&r(u),A(te)}else r(u);p=n(u)}if(p!==null)var le=!0;else{var Ne=n(c);Ne!==null&&Ie(V,Ne.startTime-te),le=!1}return le}finally{p=null,m=ne,E=!1}}var x=!1,w=null,y=-1,v=5,S=-1;function P(){return!(t.unstable_now()-S<v)}function b(){if(w!==null){var G=t.unstable_now();S=G;var te=!0;try{te=w(!0,G)}finally{te?T():(x=!1,w=null)}}else x=!1}var T;if(typeof _=="function")T=function(){_(b)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,yt=Re.port2;Re.port1.onmessage=b,T=function(){yt.postMessage(null)}}else T=function(){O(b,0)};function mn(G){w=G,x||(x=!0,T())}function Ie(G,te){y=O(function(){G(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){C||E||(C=!0,mn(z))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(G){switch(m){case 1:case 2:case 3:var te=3;break;default:te=m}var ne=m;m=te;try{return G()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,te){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ne=m;m=G;try{return te()}finally{m=ne}},t.unstable_scheduleCallback=function(G,te,ne){var me=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?me+ne:me):ne=me,G){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ne+Q,G={id:d++,callback:te,priorityLevel:G,startTime:ne,expirationTime:Q,sortIndex:-1},ne>me?(G.sortIndex=ne,e(c,G),n(u)===null&&G===n(c)&&(k?(I(y),y=-1):k=!0,Ie(V,ne-me))):(G.sortIndex=Q,e(u,G),C||E||(C=!0,mn(z))),G},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(G){var te=m;return function(){var ne=m;m=te;try{return G.apply(this,arguments)}finally{m=ne}}}})(d_);h_.exports=d_;var gS=h_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yS=U,dn=gS;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f_=new Set,Da={};function as(t,e){Qs(t,e),Qs(t+"Capture",e)}function Qs(t,e){for(Da[t]=e,t=0;t<e.length;t++)f_.add(e[t])}var Er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dd=Object.prototype.hasOwnProperty,vS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rg={},ig={};function _S(t){return dd.call(ig,t)?!0:dd.call(rg,t)?!1:vS.test(t)?ig[t]=!0:(rg[t]=!0,!1)}function wS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ES(t,e,n,r){if(e===null||typeof e>"u"||wS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Rt[t]=new Wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Rt[e]=new Wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Rt[t]=new Wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Rt[t]=new Wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Rt[t]=new Wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Rt[t]=new Wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Rt[t]=new Wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Rt[t]=new Wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Rt[t]=new Wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lf=/[\-:]([a-z])/g;function Mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lf,Mf);Rt[e]=new Wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lf,Mf);Rt[e]=new Wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lf,Mf);Rt[e]=new Wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Rt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Rt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vf(t,e,n,r){var i=Rt.hasOwnProperty(e)?Rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ES(e,n,i,r)&&(n=null),r||i===null?_S(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Cr=yS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bl=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),Cs=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),fd=Symbol.for("react.profiler"),p_=Symbol.for("react.provider"),m_=Symbol.for("react.context"),Uf=Symbol.for("react.forward_ref"),pd=Symbol.for("react.suspense"),md=Symbol.for("react.suspense_list"),jf=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),g_=Symbol.for("react.offscreen"),sg=Symbol.iterator;function $o(t){return t===null||typeof t!="object"?null:(t=sg&&t[sg]||t["@@iterator"],typeof t=="function"?t:null)}var Ke=Object.assign,Ih;function ra(t){if(Ih===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ih=e&&e[1]||""}return`
`+Ih+t}var Sh=!1;function Rh(t,e){if(!t||Sh)return"";Sh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Sh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ra(t):""}function TS(t){switch(t.tag){case 5:return ra(t.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return t=Rh(t.type,!1),t;case 11:return t=Rh(t.type.render,!1),t;case 1:return t=Rh(t.type,!0),t;default:return""}}function gd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cs:return"Fragment";case Ps:return"Portal";case fd:return"Profiler";case Ff:return"StrictMode";case pd:return"Suspense";case md:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case m_:return(t.displayName||"Context")+".Consumer";case p_:return(t._context.displayName||"Context")+".Provider";case Uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jf:return e=t.displayName||null,e!==null?e:gd(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return gd(t(e))}catch{}}return null}function IS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gd(e);case 8:return e===Ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ci(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function y_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SS(t){var e=y_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $l(t){t._valueTracker||(t._valueTracker=SS(t))}function v_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=y_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yd(t,e){var n=e.checked;return Ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function og(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ci(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function __(t,e){e=e.checked,e!=null&&Vf(t,"checked",e,!1)}function vd(t,e){__(t,e);var n=ci(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_d(t,e.type,n):e.hasOwnProperty("defaultValue")&&_d(t,e.type,ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ag(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _d(t,e,n){(e!=="number"||xu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ia=Array.isArray;function Us(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ci(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function wd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(ia(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ci(n)}}function w_(t,e){var n=ci(e.value),r=ci(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ug(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function E_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ed(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?E_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hl,T_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Hl=Hl||document.createElement("div"),Hl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Hl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RS=["Webkit","ms","Moz","O"];Object.keys(pa).forEach(function(t){RS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),pa[e]=pa[t]})});function I_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||pa.hasOwnProperty(t)&&pa[t]?(""+e).trim():e+"px"}function S_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=I_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var AS=Ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Td(t,e){if(e){if(AS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function Id(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sd=null;function zf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rd=null,js=null,zs=null;function cg(t){if(t=hl(t)){if(typeof Rd!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Pc(e),Rd(t.stateNode,t.type,e))}}function R_(t){js?zs?zs.push(t):zs=[t]:js=t}function A_(){if(js){var t=js,e=zs;if(zs=js=null,cg(t),e)for(t=0;t<e.length;t++)cg(e[t])}}function P_(t,e){return t(e)}function C_(){}var Ah=!1;function k_(t,e,n){if(Ah)return t(e,n);Ah=!0;try{return P_(t,e,n)}finally{Ah=!1,(js!==null||zs!==null)&&(C_(),A_())}}function Na(t,e){var n=t.stateNode;if(n===null)return null;var r=Pc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var Ad=!1;if(Er)try{var Ho={};Object.defineProperty(Ho,"passive",{get:function(){Ad=!0}}),window.addEventListener("test",Ho,Ho),window.removeEventListener("test",Ho,Ho)}catch{Ad=!1}function PS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ma=!1,Nu=null,bu=!1,Pd=null,CS={onError:function(t){ma=!0,Nu=t}};function kS(t,e,n,r,i,s,o,l,u){ma=!1,Nu=null,PS.apply(CS,arguments)}function DS(t,e,n,r,i,s,o,l,u){if(kS.apply(this,arguments),ma){if(ma){var c=Nu;ma=!1,Nu=null}else throw Error(H(198));bu||(bu=!0,Pd=c)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hg(t){if(ls(t)!==t)throw Error(H(188))}function xS(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hg(i),t;if(s===r)return hg(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function x_(t){return t=xS(t),t!==null?N_(t):null}function N_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=N_(t);if(e!==null)return e;t=t.sibling}return null}var b_=dn.unstable_scheduleCallback,dg=dn.unstable_cancelCallback,NS=dn.unstable_shouldYield,bS=dn.unstable_requestPaint,tt=dn.unstable_now,OS=dn.unstable_getCurrentPriorityLevel,Bf=dn.unstable_ImmediatePriority,O_=dn.unstable_UserBlockingPriority,Ou=dn.unstable_NormalPriority,LS=dn.unstable_LowPriority,L_=dn.unstable_IdlePriority,Ic=null,Gn=null;function MS(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(Ic,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:US,VS=Math.log,FS=Math.LN2;function US(t){return t>>>=0,t===0?32:31-(VS(t)/FS|0)|0}var Wl=64,ql=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=sa(l):(s&=o,s!==0&&(r=sa(s)))}else o=n&~i,o!==0?r=sa(o):s!==0&&(r=sa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Un(e),i=1<<n,r|=t[n],e&=~i;return r}function jS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Un(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=jS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Cd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function M_(){var t=Wl;return Wl<<=1,!(Wl&4194240)&&(Wl=64),t}function Ph(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ul(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function BS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $f(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var De=0;function V_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var F_,Hf,U_,j_,z_,kd=!1,Kl=[],ei=null,ti=null,ni=null,ba=new Map,Oa=new Map,qr=[],$S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fg(t,e){switch(t){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(e.pointerId)}}function Wo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=hl(e),e!==null&&Hf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function HS(t,e,n,r,i){switch(e){case"focusin":return ei=Wo(ei,t,e,n,r,i),!0;case"dragenter":return ti=Wo(ti,t,e,n,r,i),!0;case"mouseover":return ni=Wo(ni,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ba.set(s,Wo(ba.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Oa.set(s,Wo(Oa.get(s)||null,t,e,n,r,i)),!0}return!1}function B_(t){var e=Mi(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=D_(n),e!==null){t.blockedOn=e,z_(t.priority,function(){U_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sd=r,n.target.dispatchEvent(r),Sd=null}else return e=hl(n),e!==null&&Hf(e),t.blockedOn=n,!1;e.shift()}return!0}function pg(t,e,n){hu(t)&&n.delete(e)}function WS(){kd=!1,ei!==null&&hu(ei)&&(ei=null),ti!==null&&hu(ti)&&(ti=null),ni!==null&&hu(ni)&&(ni=null),ba.forEach(pg),Oa.forEach(pg)}function qo(t,e){t.blockedOn===e&&(t.blockedOn=null,kd||(kd=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,WS)))}function La(t){function e(i){return qo(i,t)}if(0<Kl.length){qo(Kl[0],t);for(var n=1;n<Kl.length;n++){var r=Kl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ei!==null&&qo(ei,t),ti!==null&&qo(ti,t),ni!==null&&qo(ni,t),ba.forEach(e),Oa.forEach(e),n=0;n<qr.length;n++)r=qr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qr.length&&(n=qr[0],n.blockedOn===null);)B_(n),n.blockedOn===null&&qr.shift()}var Bs=Cr.ReactCurrentBatchConfig,Mu=!0;function qS(t,e,n,r){var i=De,s=Bs.transition;Bs.transition=null;try{De=1,Wf(t,e,n,r)}finally{De=i,Bs.transition=s}}function KS(t,e,n,r){var i=De,s=Bs.transition;Bs.transition=null;try{De=4,Wf(t,e,n,r)}finally{De=i,Bs.transition=s}}function Wf(t,e,n,r){if(Mu){var i=Dd(t,e,n,r);if(i===null)Vh(t,e,r,Vu,n),fg(t,r);else if(HS(i,t,e,n,r))r.stopPropagation();else if(fg(t,r),e&4&&-1<$S.indexOf(t)){for(;i!==null;){var s=hl(i);if(s!==null&&F_(s),s=Dd(t,e,n,r),s===null&&Vh(t,e,r,Vu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vh(t,e,r,null,n)}}var Vu=null;function Dd(t,e,n,r){if(Vu=null,t=zf(r),t=Mi(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=D_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vu=t,null}function $_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OS()){case Bf:return 1;case O_:return 4;case Ou:case LS:return 16;case L_:return 536870912;default:return 16}default:return 16}}var Xr=null,qf=null,du=null;function H_(){if(du)return du;var t,e=qf,n=e.length,r,i="value"in Xr?Xr.value:Xr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return du=i.slice(t,1<r?1-r:void 0)}function fu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function mg(){return!1}function pn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gl:mg,this.isPropagationStopped=mg,this}return Ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kf=pn(go),cl=Ke({},go,{view:0,detail:0}),GS=pn(cl),Ch,kh,Ko,Sc=Ke({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ko&&(Ko&&t.type==="mousemove"?(Ch=t.screenX-Ko.screenX,kh=t.screenY-Ko.screenY):kh=Ch=0,Ko=t),Ch)},movementY:function(t){return"movementY"in t?t.movementY:kh}}),gg=pn(Sc),QS=Ke({},Sc,{dataTransfer:0}),YS=pn(QS),XS=Ke({},cl,{relatedTarget:0}),Dh=pn(XS),JS=Ke({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),ZS=pn(JS),e1=Ke({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t1=pn(e1),n1=Ke({},go,{data:0}),yg=pn(n1),r1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=s1[t])?!!e[t]:!1}function Gf(){return o1}var a1=Ke({},cl,{key:function(t){if(t.key){var e=r1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?i1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gf,charCode:function(t){return t.type==="keypress"?fu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l1=pn(a1),u1=Ke({},Sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vg=pn(u1),c1=Ke({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gf}),h1=pn(c1),d1=Ke({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),f1=pn(d1),p1=Ke({},Sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),m1=pn(p1),g1=[9,13,27,32],Qf=Er&&"CompositionEvent"in window,ga=null;Er&&"documentMode"in document&&(ga=document.documentMode);var y1=Er&&"TextEvent"in window&&!ga,W_=Er&&(!Qf||ga&&8<ga&&11>=ga),_g=" ",wg=!1;function q_(t,e){switch(t){case"keyup":return g1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function K_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function v1(t,e){switch(t){case"compositionend":return K_(e);case"keypress":return e.which!==32?null:(wg=!0,_g);case"textInput":return t=e.data,t===_g&&wg?null:t;default:return null}}function _1(t,e){if(ks)return t==="compositionend"||!Qf&&q_(t,e)?(t=H_(),du=qf=Xr=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return W_&&e.locale!=="ko"?null:e.data;default:return null}}var w1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!w1[t.type]:e==="textarea"}function G_(t,e,n,r){R_(r),e=Fu(e,"onChange"),0<e.length&&(n=new Kf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ya=null,Ma=null;function E1(t){s0(t,0)}function Rc(t){var e=Ns(t);if(v_(e))return t}function T1(t,e){if(t==="change")return e}var Q_=!1;if(Er){var xh;if(Er){var Nh="oninput"in document;if(!Nh){var Tg=document.createElement("div");Tg.setAttribute("oninput","return;"),Nh=typeof Tg.oninput=="function"}xh=Nh}else xh=!1;Q_=xh&&(!document.documentMode||9<document.documentMode)}function Ig(){ya&&(ya.detachEvent("onpropertychange",Y_),Ma=ya=null)}function Y_(t){if(t.propertyName==="value"&&Rc(Ma)){var e=[];G_(e,Ma,t,zf(t)),k_(E1,e)}}function I1(t,e,n){t==="focusin"?(Ig(),ya=e,Ma=n,ya.attachEvent("onpropertychange",Y_)):t==="focusout"&&Ig()}function S1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rc(Ma)}function R1(t,e){if(t==="click")return Rc(e)}function A1(t,e){if(t==="input"||t==="change")return Rc(e)}function P1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:P1;function Va(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!dd.call(e,i)||!Bn(t[i],e[i]))return!1}return!0}function Sg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rg(t,e){var n=Sg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sg(n)}}function X_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?X_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function J_(){for(var t=window,e=xu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xu(t.document)}return e}function Yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function C1(t){var e=J_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&X_(n.ownerDocument.documentElement,n)){if(r!==null&&Yf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Rg(n,s);var o=Rg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var k1=Er&&"documentMode"in document&&11>=document.documentMode,Ds=null,xd=null,va=null,Nd=!1;function Ag(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nd||Ds==null||Ds!==xu(r)||(r=Ds,"selectionStart"in r&&Yf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),va&&Va(va,r)||(va=r,r=Fu(xd,"onSelect"),0<r.length&&(e=new Kf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ds)))}function Ql(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:Ql("Animation","AnimationEnd"),animationiteration:Ql("Animation","AnimationIteration"),animationstart:Ql("Animation","AnimationStart"),transitionend:Ql("Transition","TransitionEnd")},bh={},Z_={};Er&&(Z_=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Ac(t){if(bh[t])return bh[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Z_)return bh[t]=e[n];return t}var e0=Ac("animationend"),t0=Ac("animationiteration"),n0=Ac("animationstart"),r0=Ac("transitionend"),i0=new Map,Pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yi(t,e){i0.set(t,e),as(e,[t])}for(var Oh=0;Oh<Pg.length;Oh++){var Lh=Pg[Oh],D1=Lh.toLowerCase(),x1=Lh[0].toUpperCase()+Lh.slice(1);yi(D1,"on"+x1)}yi(e0,"onAnimationEnd");yi(t0,"onAnimationIteration");yi(n0,"onAnimationStart");yi("dblclick","onDoubleClick");yi("focusin","onFocus");yi("focusout","onBlur");yi(r0,"onTransitionEnd");Qs("onMouseEnter",["mouseout","mouseover"]);Qs("onMouseLeave",["mouseout","mouseover"]);Qs("onPointerEnter",["pointerout","pointerover"]);Qs("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N1=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function Cg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,DS(r,e,void 0,t),t.currentTarget=null}function s0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Cg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Cg(i,l,c),s=u}}}if(bu)throw t=Pd,bu=!1,Pd=null,t}function Ue(t,e){var n=e[Vd];n===void 0&&(n=e[Vd]=new Set);var r=t+"__bubble";n.has(r)||(o0(e,t,2,!1),n.add(r))}function Mh(t,e,n){var r=0;e&&(r|=4),o0(n,t,r,e)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Fa(t){if(!t[Yl]){t[Yl]=!0,f_.forEach(function(n){n!=="selectionchange"&&(N1.has(n)||Mh(n,!1,t),Mh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yl]||(e[Yl]=!0,Mh("selectionchange",!1,e))}}function o0(t,e,n,r){switch($_(e)){case 1:var i=qS;break;case 4:i=KS;break;default:i=Wf}n=i.bind(null,e,n,t),i=void 0,!Ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Mi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}k_(function(){var c=s,d=zf(n),p=[];e:{var m=i0.get(t);if(m!==void 0){var E=Kf,C=t;switch(t){case"keypress":if(fu(n)===0)break e;case"keydown":case"keyup":E=l1;break;case"focusin":C="focus",E=Dh;break;case"focusout":C="blur",E=Dh;break;case"beforeblur":case"afterblur":E=Dh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=gg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=YS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=h1;break;case e0:case t0:case n0:E=ZS;break;case r0:E=f1;break;case"scroll":E=GS;break;case"wheel":E=m1;break;case"copy":case"cut":case"paste":E=t1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=vg}var k=(e&4)!==0,O=!k&&t==="scroll",I=k?m!==null?m+"Capture":null:m;k=[];for(var _=c,A;_!==null;){A=_;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,I!==null&&(V=Na(_,I),V!=null&&k.push(Ua(_,V,A)))),O)break;_=_.return}0<k.length&&(m=new E(m,C,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==Sd&&(C=n.relatedTarget||n.fromElement)&&(Mi(C)||C[Tr]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(C=n.relatedTarget||n.toElement,E=c,C=C?Mi(C):null,C!==null&&(O=ls(C),C!==O||C.tag!==5&&C.tag!==6)&&(C=null)):(E=null,C=c),E!==C)){if(k=gg,V="onMouseLeave",I="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=vg,V="onPointerLeave",I="onPointerEnter",_="pointer"),O=E==null?m:Ns(E),A=C==null?m:Ns(C),m=new k(V,_+"leave",E,n,d),m.target=O,m.relatedTarget=A,V=null,Mi(d)===c&&(k=new k(I,_+"enter",C,n,d),k.target=A,k.relatedTarget=O,V=k),O=V,E&&C)t:{for(k=E,I=C,_=0,A=k;A;A=Ts(A))_++;for(A=0,V=I;V;V=Ts(V))A++;for(;0<_-A;)k=Ts(k),_--;for(;0<A-_;)I=Ts(I),A--;for(;_--;){if(k===I||I!==null&&k===I.alternate)break t;k=Ts(k),I=Ts(I)}k=null}else k=null;E!==null&&kg(p,m,E,k,!1),C!==null&&O!==null&&kg(p,O,C,k,!0)}}e:{if(m=c?Ns(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var z=T1;else if(Eg(m))if(Q_)z=A1;else{z=S1;var x=I1}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=R1);if(z&&(z=z(t,c))){G_(p,z,n,d);break e}x&&x(t,m,c),t==="focusout"&&(x=m._wrapperState)&&x.controlled&&m.type==="number"&&_d(m,"number",m.value)}switch(x=c?Ns(c):window,t){case"focusin":(Eg(x)||x.contentEditable==="true")&&(Ds=x,xd=c,va=null);break;case"focusout":va=xd=Ds=null;break;case"mousedown":Nd=!0;break;case"contextmenu":case"mouseup":case"dragend":Nd=!1,Ag(p,n,d);break;case"selectionchange":if(k1)break;case"keydown":case"keyup":Ag(p,n,d)}var w;if(Qf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ks?q_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(W_&&n.locale!=="ko"&&(ks||y!=="onCompositionStart"?y==="onCompositionEnd"&&ks&&(w=H_()):(Xr=d,qf="value"in Xr?Xr.value:Xr.textContent,ks=!0)),x=Fu(c,y),0<x.length&&(y=new yg(y,t,null,n,d),p.push({event:y,listeners:x}),w?y.data=w:(w=K_(n),w!==null&&(y.data=w)))),(w=y1?v1(t,n):_1(t,n))&&(c=Fu(c,"onBeforeInput"),0<c.length&&(d=new yg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=w))}s0(p,e)})}function Ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Na(t,n),s!=null&&r.unshift(Ua(t,s,i)),s=Na(t,e),s!=null&&r.push(Ua(t,s,i))),t=t.return}return r}function Ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Na(n,s),u!=null&&o.unshift(Ua(n,u,l))):i||(u=Na(n,s),u!=null&&o.push(Ua(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var b1=/\r\n?/g,O1=/\u0000|\uFFFD/g;function Dg(t){return(typeof t=="string"?t:""+t).replace(b1,`
`).replace(O1,"")}function Xl(t,e,n){if(e=Dg(e),Dg(t)!==e&&n)throw Error(H(425))}function Uu(){}var bd=null,Od=null;function Ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Md=typeof setTimeout=="function"?setTimeout:void 0,L1=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,M1=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(t){return xg.resolve(null).then(t).catch(V1)}:Md;function V1(t){setTimeout(function(){throw t})}function Fh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),La(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);La(e)}function ri(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ng(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var yo=Math.random().toString(36).slice(2),Kn="__reactFiber$"+yo,ja="__reactProps$"+yo,Tr="__reactContainer$"+yo,Vd="__reactEvents$"+yo,F1="__reactListeners$"+yo,U1="__reactHandles$"+yo;function Mi(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tr]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ng(t);t!==null;){if(n=t[Kn])return n;t=Ng(t)}return e}t=n,n=t.parentNode}return null}function hl(t){return t=t[Kn]||t[Tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Pc(t){return t[ja]||null}var Fd=[],bs=-1;function vi(t){return{current:t}}function je(t){0>bs||(t.current=Fd[bs],Fd[bs]=null,bs--)}function Oe(t,e){bs++,Fd[bs]=t.current,t.current=e}var hi={},Ft=vi(hi),Qt=vi(!1),Ki=hi;function Ys(t,e){var n=t.type.contextTypes;if(!n)return hi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Yt(t){return t=t.childContextTypes,t!=null}function ju(){je(Qt),je(Ft)}function bg(t,e,n){if(Ft.current!==hi)throw Error(H(168));Oe(Ft,e),Oe(Qt,n)}function a0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,IS(t)||"Unknown",i));return Ke({},n,r)}function zu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hi,Ki=Ft.current,Oe(Ft,t),Oe(Qt,Qt.current),!0}function Og(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=a0(t,e,Ki),r.__reactInternalMemoizedMergedChildContext=t,je(Qt),je(Ft),Oe(Ft,t)):je(Qt),Oe(Qt,n)}var hr=null,Cc=!1,Uh=!1;function l0(t){hr===null?hr=[t]:hr.push(t)}function j1(t){Cc=!0,l0(t)}function _i(){if(!Uh&&hr!==null){Uh=!0;var t=0,e=De;try{var n=hr;for(De=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}hr=null,Cc=!1}catch(i){throw hr!==null&&(hr=hr.slice(t+1)),b_(Bf,_i),i}finally{De=e,Uh=!1}}return null}var Os=[],Ls=0,Bu=null,$u=0,vn=[],_n=0,Gi=null,fr=1,pr="";function Ni(t,e){Os[Ls++]=$u,Os[Ls++]=Bu,Bu=t,$u=e}function u0(t,e,n){vn[_n++]=fr,vn[_n++]=pr,vn[_n++]=Gi,Gi=t;var r=fr;t=pr;var i=32-Un(r)-1;r&=~(1<<i),n+=1;var s=32-Un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fr=1<<32-Un(e)+i|n<<i|r,pr=s+t}else fr=1<<s|n<<i|r,pr=t}function Xf(t){t.return!==null&&(Ni(t,1),u0(t,1,0))}function Jf(t){for(;t===Bu;)Bu=Os[--Ls],Os[Ls]=null,$u=Os[--Ls],Os[Ls]=null;for(;t===Gi;)Gi=vn[--_n],vn[_n]=null,pr=vn[--_n],vn[_n]=null,fr=vn[--_n],vn[_n]=null}var cn=null,ln=null,Be=!1,Fn=null;function c0(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,ln=ri(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gi!==null?{id:fr,overflow:pr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,ln=null,!0):!1;default:return!1}}function Ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jd(t){if(Be){var e=ln;if(e){var n=e;if(!Lg(t,e)){if(Ud(t))throw Error(H(418));e=ri(n.nextSibling);var r=cn;e&&Lg(t,e)?c0(r,n):(t.flags=t.flags&-4097|2,Be=!1,cn=t)}}else{if(Ud(t))throw Error(H(418));t.flags=t.flags&-4097|2,Be=!1,cn=t}}}function Mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function Jl(t){if(t!==cn)return!1;if(!Be)return Mg(t),Be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ld(t.type,t.memoizedProps)),e&&(e=ln)){if(Ud(t))throw h0(),Error(H(418));for(;e;)c0(t,e),e=ri(e.nextSibling)}if(Mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=ri(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=cn?ri(t.stateNode.nextSibling):null;return!0}function h0(){for(var t=ln;t;)t=ri(t.nextSibling)}function Xs(){ln=cn=null,Be=!1}function Zf(t){Fn===null?Fn=[t]:Fn.push(t)}var z1=Cr.ReactCurrentBatchConfig;function Go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function Zl(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vg(t){var e=t._init;return e(t._payload)}function d0(t){function e(I,_){if(t){var A=I.deletions;A===null?(I.deletions=[_],I.flags|=16):A.push(_)}}function n(I,_){if(!t)return null;for(;_!==null;)e(I,_),_=_.sibling;return null}function r(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function i(I,_){return I=ai(I,_),I.index=0,I.sibling=null,I}function s(I,_,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<_?(I.flags|=2,_):A):(I.flags|=2,_)):(I.flags|=1048576,_)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,_,A,V){return _===null||_.tag!==6?(_=qh(A,I.mode,V),_.return=I,_):(_=i(_,A),_.return=I,_)}function u(I,_,A,V){var z=A.type;return z===Cs?d(I,_,A.props.children,V,A.key):_!==null&&(_.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Hr&&Vg(z)===_.type)?(V=i(_,A.props),V.ref=Go(I,_,A),V.return=I,V):(V=wu(A.type,A.key,A.props,null,I.mode,V),V.ref=Go(I,_,A),V.return=I,V)}function c(I,_,A,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=Kh(A,I.mode,V),_.return=I,_):(_=i(_,A.children||[]),_.return=I,_)}function d(I,_,A,V,z){return _===null||_.tag!==7?(_=Wi(A,I.mode,V,z),_.return=I,_):(_=i(_,A),_.return=I,_)}function p(I,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=qh(""+_,I.mode,A),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Bl:return A=wu(_.type,_.key,_.props,null,I.mode,A),A.ref=Go(I,null,_),A.return=I,A;case Ps:return _=Kh(_,I.mode,A),_.return=I,_;case Hr:var V=_._init;return p(I,V(_._payload),A)}if(ia(_)||$o(_))return _=Wi(_,I.mode,A,null),_.return=I,_;Zl(I,_)}return null}function m(I,_,A,V){var z=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return z!==null?null:l(I,_,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Bl:return A.key===z?u(I,_,A,V):null;case Ps:return A.key===z?c(I,_,A,V):null;case Hr:return z=A._init,m(I,_,z(A._payload),V)}if(ia(A)||$o(A))return z!==null?null:d(I,_,A,V,null);Zl(I,A)}return null}function E(I,_,A,V,z){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(A)||null,l(_,I,""+V,z);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Bl:return I=I.get(V.key===null?A:V.key)||null,u(_,I,V,z);case Ps:return I=I.get(V.key===null?A:V.key)||null,c(_,I,V,z);case Hr:var x=V._init;return E(I,_,A,x(V._payload),z)}if(ia(V)||$o(V))return I=I.get(A)||null,d(_,I,V,z,null);Zl(_,V)}return null}function C(I,_,A,V){for(var z=null,x=null,w=_,y=_=0,v=null;w!==null&&y<A.length;y++){w.index>y?(v=w,w=null):v=w.sibling;var S=m(I,w,A[y],V);if(S===null){w===null&&(w=v);break}t&&w&&S.alternate===null&&e(I,w),_=s(S,_,y),x===null?z=S:x.sibling=S,x=S,w=v}if(y===A.length)return n(I,w),Be&&Ni(I,y),z;if(w===null){for(;y<A.length;y++)w=p(I,A[y],V),w!==null&&(_=s(w,_,y),x===null?z=w:x.sibling=w,x=w);return Be&&Ni(I,y),z}for(w=r(I,w);y<A.length;y++)v=E(w,I,y,A[y],V),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?y:v.key),_=s(v,_,y),x===null?z=v:x.sibling=v,x=v);return t&&w.forEach(function(P){return e(I,P)}),Be&&Ni(I,y),z}function k(I,_,A,V){var z=$o(A);if(typeof z!="function")throw Error(H(150));if(A=z.call(A),A==null)throw Error(H(151));for(var x=z=null,w=_,y=_=0,v=null,S=A.next();w!==null&&!S.done;y++,S=A.next()){w.index>y?(v=w,w=null):v=w.sibling;var P=m(I,w,S.value,V);if(P===null){w===null&&(w=v);break}t&&w&&P.alternate===null&&e(I,w),_=s(P,_,y),x===null?z=P:x.sibling=P,x=P,w=v}if(S.done)return n(I,w),Be&&Ni(I,y),z;if(w===null){for(;!S.done;y++,S=A.next())S=p(I,S.value,V),S!==null&&(_=s(S,_,y),x===null?z=S:x.sibling=S,x=S);return Be&&Ni(I,y),z}for(w=r(I,w);!S.done;y++,S=A.next())S=E(w,I,y,S.value,V),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?y:S.key),_=s(S,_,y),x===null?z=S:x.sibling=S,x=S);return t&&w.forEach(function(b){return e(I,b)}),Be&&Ni(I,y),z}function O(I,_,A,V){if(typeof A=="object"&&A!==null&&A.type===Cs&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Bl:e:{for(var z=A.key,x=_;x!==null;){if(x.key===z){if(z=A.type,z===Cs){if(x.tag===7){n(I,x.sibling),_=i(x,A.props.children),_.return=I,I=_;break e}}else if(x.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Hr&&Vg(z)===x.type){n(I,x.sibling),_=i(x,A.props),_.ref=Go(I,x,A),_.return=I,I=_;break e}n(I,x);break}else e(I,x);x=x.sibling}A.type===Cs?(_=Wi(A.props.children,I.mode,V,A.key),_.return=I,I=_):(V=wu(A.type,A.key,A.props,null,I.mode,V),V.ref=Go(I,_,A),V.return=I,I=V)}return o(I);case Ps:e:{for(x=A.key;_!==null;){if(_.key===x)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(I,_.sibling),_=i(_,A.children||[]),_.return=I,I=_;break e}else{n(I,_);break}else e(I,_);_=_.sibling}_=Kh(A,I.mode,V),_.return=I,I=_}return o(I);case Hr:return x=A._init,O(I,_,x(A._payload),V)}if(ia(A))return C(I,_,A,V);if($o(A))return k(I,_,A,V);Zl(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(I,_.sibling),_=i(_,A),_.return=I,I=_):(n(I,_),_=qh(A,I.mode,V),_.return=I,I=_),o(I)):n(I,_)}return O}var Js=d0(!0),f0=d0(!1),Hu=vi(null),Wu=null,Ms=null,ep=null;function tp(){ep=Ms=Wu=null}function np(t){var e=Hu.current;je(Hu),t._currentValue=e}function zd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){Wu=t,ep=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Gt=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(ep!==t)if(t={context:t,memoizedValue:e,next:null},Ms===null){if(Wu===null)throw Error(H(308));Ms=t,Wu.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return e}var Vi=null;function rp(t){Vi===null?Vi=[t]:Vi.push(t)}function p0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,rp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ir(t,r)}function Ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wr=!1;function ip(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ii(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ir(t,n)}return i=r.interleaved,i===null?(e.next=e,rp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ir(t,n)}function pu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$f(t,n)}}function Fg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qu(t,e,n,r){var i=t.updateQueue;Wr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,k=l;switch(m=e,E=n,k.tag){case 1:if(C=k.payload,typeof C=="function"){p=C.call(E,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=k.payload,m=typeof C=="function"?C.call(E,p,m):C,m==null)break e;p=Ke({},p,m);break e;case 2:Wr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=E,u=p):d=d.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yi|=o,t.lanes=o,t.memoizedState=p}}function Ug(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var dl={},Qn=vi(dl),za=vi(dl),Ba=vi(dl);function Fi(t){if(t===dl)throw Error(H(174));return t}function sp(t,e){switch(Oe(Ba,e),Oe(za,t),Oe(Qn,dl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ed(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ed(e,t)}je(Qn),Oe(Qn,e)}function Zs(){je(Qn),je(za),je(Ba)}function g0(t){Fi(Ba.current);var e=Fi(Qn.current),n=Ed(e,t.type);e!==n&&(Oe(za,t),Oe(Qn,n))}function op(t){za.current===t&&(je(Qn),je(za))}var We=vi(0);function Ku(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jh=[];function ap(){for(var t=0;t<jh.length;t++)jh[t]._workInProgressVersionPrimary=null;jh.length=0}var mu=Cr.ReactCurrentDispatcher,zh=Cr.ReactCurrentBatchConfig,Qi=0,qe=null,ut=null,mt=null,Gu=!1,_a=!1,$a=0,B1=0;function xt(){throw Error(H(321))}function lp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function up(t,e,n,r,i,s){if(Qi=s,qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,mu.current=t===null||t.memoizedState===null?q1:K1,t=n(r,i),_a){s=0;do{if(_a=!1,$a=0,25<=s)throw Error(H(301));s+=1,mt=ut=null,e.updateQueue=null,mu.current=G1,t=n(r,i)}while(_a)}if(mu.current=Qu,e=ut!==null&&ut.next!==null,Qi=0,mt=ut=qe=null,Gu=!1,e)throw Error(H(300));return t}function cp(){var t=$a!==0;return $a=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?qe.memoizedState=mt=t:mt=mt.next=t,mt}function Rn(){if(ut===null){var t=qe.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var e=mt===null?qe.memoizedState:mt.next;if(e!==null)mt=e,ut=t;else{if(t===null)throw Error(H(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},mt===null?qe.memoizedState=mt=t:mt=mt.next=t}return mt}function Ha(t,e){return typeof e=="function"?e(t):e}function Bh(t){var e=Rn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=ut,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Qi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,qe.lanes|=d,Yi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Bn(r,e.memoizedState)||(Gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,qe.lanes|=s,Yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $h(t){var e=Rn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Bn(s,e.memoizedState)||(Gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function y0(){}function v0(t,e){var n=qe,r=Rn(),i=e(),s=!Bn(r.memoizedState,i);if(s&&(r.memoizedState=i,Gt=!0),r=r.queue,hp(E0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||mt!==null&&mt.memoizedState.tag&1){if(n.flags|=2048,Wa(9,w0.bind(null,n,r,i,e),void 0,null),gt===null)throw Error(H(349));Qi&30||_0(n,e,i)}return i}function _0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w0(t,e,n,r){e.value=n,e.getSnapshot=r,T0(e)&&I0(t)}function E0(t,e,n){return n(function(){T0(e)&&I0(t)})}function T0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function I0(t){var e=Ir(t,1);e!==null&&jn(e,t,1,-1)}function jg(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},e.queue=t,t=t.dispatch=W1.bind(null,qe,t),[e.memoizedState,t]}function Wa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function S0(){return Rn().memoizedState}function gu(t,e,n,r){var i=qn();qe.flags|=t,i.memoizedState=Wa(1|e,n,void 0,r===void 0?null:r)}function kc(t,e,n,r){var i=Rn();r=r===void 0?null:r;var s=void 0;if(ut!==null){var o=ut.memoizedState;if(s=o.destroy,r!==null&&lp(r,o.deps)){i.memoizedState=Wa(e,n,s,r);return}}qe.flags|=t,i.memoizedState=Wa(1|e,n,s,r)}function zg(t,e){return gu(8390656,8,t,e)}function hp(t,e){return kc(2048,8,t,e)}function R0(t,e){return kc(4,2,t,e)}function A0(t,e){return kc(4,4,t,e)}function P0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function C0(t,e,n){return n=n!=null?n.concat([t]):null,kc(4,4,P0.bind(null,e,t),n)}function dp(){}function k0(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function D0(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function x0(t,e,n){return Qi&21?(Bn(n,e)||(n=M_(),qe.lanes|=n,Yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Gt=!0),t.memoizedState=n)}function $1(t,e){var n=De;De=n!==0&&4>n?n:4,t(!0);var r=zh.transition;zh.transition={};try{t(!1),e()}finally{De=n,zh.transition=r}}function N0(){return Rn().memoizedState}function H1(t,e,n){var r=oi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},b0(t))O0(e,n);else if(n=p0(t,e,n,r),n!==null){var i=$t();jn(n,t,r,i),L0(n,e,r)}}function W1(t,e,n){var r=oi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(b0(t))O0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Bn(l,o)){var u=e.interleaved;u===null?(i.next=i,rp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=p0(t,e,i,r),n!==null&&(i=$t(),jn(n,t,r,i),L0(n,e,r))}}function b0(t){var e=t.alternate;return t===qe||e!==null&&e===qe}function O0(t,e){_a=Gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function L0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$f(t,n)}}var Qu={readContext:Sn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},q1={readContext:Sn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:zg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gu(4194308,4,P0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gu(4194308,4,t,e)},useInsertionEffect:function(t,e){return gu(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=H1.bind(null,qe,t),[r.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:jg,useDebugValue:dp,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=jg(!1),e=t[0];return t=$1.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=qe,i=qn();if(Be){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),gt===null)throw Error(H(349));Qi&30||_0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,zg(E0.bind(null,r,s,t),[t]),r.flags|=2048,Wa(9,w0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=gt.identifierPrefix;if(Be){var n=pr,r=fr;n=(r&~(1<<32-Un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=B1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},K1={readContext:Sn,useCallback:k0,useContext:Sn,useEffect:hp,useImperativeHandle:C0,useInsertionEffect:R0,useLayoutEffect:A0,useMemo:D0,useReducer:Bh,useRef:S0,useState:function(){return Bh(Ha)},useDebugValue:dp,useDeferredValue:function(t){var e=Rn();return x0(e,ut.memoizedState,t)},useTransition:function(){var t=Bh(Ha)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:y0,useSyncExternalStore:v0,useId:N0,unstable_isNewReconciler:!1},G1={readContext:Sn,useCallback:k0,useContext:Sn,useEffect:hp,useImperativeHandle:C0,useInsertionEffect:R0,useLayoutEffect:A0,useMemo:D0,useReducer:$h,useRef:S0,useState:function(){return $h(Ha)},useDebugValue:dp,useDeferredValue:function(t){var e=Rn();return ut===null?e.memoizedState=t:x0(e,ut.memoizedState,t)},useTransition:function(){var t=$h(Ha)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:y0,useSyncExternalStore:v0,useId:N0,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=Ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dc={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=$t(),i=oi(t),s=vr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ii(t,s,i),e!==null&&(jn(e,t,i,r),pu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=$t(),i=oi(t),s=vr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ii(t,s,i),e!==null&&(jn(e,t,i,r),pu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),r=oi(t),i=vr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ii(t,i,r),e!==null&&(jn(e,t,r,n),pu(e,t,r))}};function Bg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Va(n,r)||!Va(i,s):!0}function M0(t,e,n){var r=!1,i=hi,s=e.contextType;return typeof s=="object"&&s!==null?s=Sn(s):(i=Yt(e)?Ki:Ft.current,r=e.contextTypes,s=(r=r!=null)?Ys(t,i):hi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $g(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dc.enqueueReplaceState(e,e.state,null)}function $d(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ip(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Sn(s):(s=Yt(e)?Ki:Ft.current,i.context=Ys(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dc.enqueueReplaceState(i,i.state,null),qu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function eo(t,e){try{var n="",r=e;do n+=TS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Q1=typeof WeakMap=="function"?WeakMap:Map;function V0(t,e,n){n=vr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xu||(Xu=!0,ef=r),Hd(t,e)},n}function F0(t,e,n){n=vr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Hd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hd(t,e),typeof r!="function"&&(si===null?si=new Set([this]):si.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Q1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=uR.bind(null,t,e,n),e.then(t,t))}function Wg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vr(-1,1),e.tag=2,ii(n,e,1))),n.lanes|=1),t)}var Y1=Cr.ReactCurrentOwner,Gt=!1;function Bt(t,e,n,r){e.child=t===null?f0(e,null,n,r):Js(e,t.child,n,r)}function Kg(t,e,n,r,i){n=n.render;var s=e.ref;return $s(e,i),r=up(t,e,n,r,s,i),n=cp(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sr(t,e,i)):(Be&&n&&Xf(e),e.flags|=1,Bt(t,e,r,i),e.child)}function Gg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!wp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,U0(t,e,s,r,i)):(t=wu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Va,n(o,r)&&t.ref===e.ref)return Sr(t,e,i)}return e.flags|=1,t=ai(s,r),t.ref=e.ref,t.return=e,e.child=t}function U0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Va(s,r)&&t.ref===e.ref)if(Gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Gt=!0);else return e.lanes=t.lanes,Sr(t,e,i)}return Wd(t,e,n,r,i)}function j0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(Fs,on),on|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Oe(Fs,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Oe(Fs,on),on|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Oe(Fs,on),on|=r;return Bt(t,e,i,n),e.child}function z0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wd(t,e,n,r,i){var s=Yt(n)?Ki:Ft.current;return s=Ys(e,s),$s(e,i),n=up(t,e,n,r,s,i),r=cp(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sr(t,e,i)):(Be&&r&&Xf(e),e.flags|=1,Bt(t,e,n,i),e.child)}function Qg(t,e,n,r,i){if(Yt(n)){var s=!0;zu(e)}else s=!1;if($s(e,i),e.stateNode===null)yu(t,e),M0(e,n,r),$d(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Sn(c):(c=Yt(n)?Ki:Ft.current,c=Ys(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&$g(e,o,r,c),Wr=!1;var m=e.memoizedState;o.state=m,qu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Qt.current||Wr?(typeof d=="function"&&(Bd(e,n,d,r),u=e.memoizedState),(l=Wr||Bg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,m0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ln(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Sn(u):(u=Yt(n)?Ki:Ft.current,u=Ys(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&$g(e,o,r,u),Wr=!1,m=e.memoizedState,o.state=m,qu(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||Qt.current||Wr?(typeof E=="function"&&(Bd(e,n,E,r),C=e.memoizedState),(c=Wr||Bg(e,n,c,r,m,C,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return qd(t,e,n,r,s,i)}function qd(t,e,n,r,i,s){z0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Og(e,n,!1),Sr(t,e,s);r=e.stateNode,Y1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Js(e,t.child,null,s),e.child=Js(e,null,l,s)):Bt(t,e,l,s),e.memoizedState=r.state,i&&Og(e,n,!0),e.child}function B0(t){var e=t.stateNode;e.pendingContext?bg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bg(t,e.context,!1),sp(t,e.containerInfo)}function Yg(t,e,n,r,i){return Xs(),Zf(i),e.flags|=256,Bt(t,e,n,r),e.child}var Kd={dehydrated:null,treeContext:null,retryLane:0};function Gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function $0(t,e,n){var r=e.pendingProps,i=We.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Oe(We,i&1),t===null)return jd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bc(o,r,0,null),t=Wi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gd(n),e.memoizedState=Kd,t):fp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return X1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ai(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ai(l,s):(s=Wi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kd,r}return s=t.child,t=s.sibling,r=ai(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function fp(t,e){return e=bc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function eu(t,e,n,r){return r!==null&&Zf(r),Js(e,t.child,null,n),t=fp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function X1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hh(Error(H(422))),eu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bc({mode:"visible",children:r.children},i,0,null),s=Wi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Js(e,t.child,null,o),e.child.memoizedState=Gd(o),e.memoizedState=Kd,s);if(!(e.mode&1))return eu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(H(419)),r=Hh(s,r,void 0),eu(t,e,o,r)}if(l=(o&t.childLanes)!==0,Gt||l){if(r=gt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ir(t,i),jn(r,t,i,-1))}return _p(),r=Hh(Error(H(421))),eu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ln=ri(i.nextSibling),cn=e,Be=!0,Fn=null,t!==null&&(vn[_n++]=fr,vn[_n++]=pr,vn[_n++]=Gi,fr=t.id,pr=t.overflow,Gi=e),e=fp(e,r.children),e.flags|=4096,e)}function Xg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zd(t.return,e,n)}function Wh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function H0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Bt(t,e,r.children,n),r=We.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xg(t,n,e);else if(t.tag===19)Xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Oe(We,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ku(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ku(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wh(e,!0,n,null,s);break;case"together":Wh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=ai(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ai(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function J1(t,e,n){switch(e.tag){case 3:B0(e),Xs();break;case 5:g0(e);break;case 1:Yt(e.type)&&zu(e);break;case 4:sp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Oe(Hu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Oe(We,We.current&1),e.flags|=128,null):n&e.child.childLanes?$0(t,e,n):(Oe(We,We.current&1),t=Sr(t,e,n),t!==null?t.sibling:null);Oe(We,We.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return H0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Oe(We,We.current),r)break;return null;case 22:case 23:return e.lanes=0,j0(t,e,n)}return Sr(t,e,n)}var W0,Qd,q0,K0;W0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qd=function(){};q0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fi(Qn.current);var s=null;switch(n){case"input":i=yd(t,i),r=yd(t,r),s=[];break;case"select":i=Ke({},i,{value:void 0}),r=Ke({},r,{value:void 0}),s=[];break;case"textarea":i=wd(t,i),r=wd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Uu)}Td(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Da.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Da.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ue("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};K0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qo(t,e){if(!Be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Z1(t,e,n){var r=e.pendingProps;switch(Jf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Yt(e.type)&&ju(),Nt(e),null;case 3:return r=e.stateNode,Zs(),je(Qt),je(Ft),ap(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Jl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(rf(Fn),Fn=null))),Qd(t,e),Nt(e),null;case 5:op(e);var i=Fi(Ba.current);if(n=e.type,t!==null&&e.stateNode!=null)q0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Nt(e),null}if(t=Fi(Qn.current),Jl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Kn]=e,r[ja]=s,t=(e.mode&1)!==0,n){case"dialog":Ue("cancel",r),Ue("close",r);break;case"iframe":case"object":case"embed":Ue("load",r);break;case"video":case"audio":for(i=0;i<oa.length;i++)Ue(oa[i],r);break;case"source":Ue("error",r);break;case"img":case"image":case"link":Ue("error",r),Ue("load",r);break;case"details":Ue("toggle",r);break;case"input":og(r,s),Ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ue("invalid",r);break;case"textarea":lg(r,s),Ue("invalid",r)}Td(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Xl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Xl(r.textContent,l,t),i=["children",""+l]):Da.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ue("scroll",r)}switch(n){case"input":$l(r),ag(r,s,!0);break;case"textarea":$l(r),ug(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Uu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=E_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Kn]=e,t[ja]=r,W0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Id(n,r),n){case"dialog":Ue("cancel",t),Ue("close",t),i=r;break;case"iframe":case"object":case"embed":Ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<oa.length;i++)Ue(oa[i],t);i=r;break;case"source":Ue("error",t),i=r;break;case"img":case"image":case"link":Ue("error",t),Ue("load",t),i=r;break;case"details":Ue("toggle",t),i=r;break;case"input":og(t,r),i=yd(t,r),Ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ke({},r,{value:void 0}),Ue("invalid",t);break;case"textarea":lg(t,r),i=wd(t,r),Ue("invalid",t);break;default:i=r}Td(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?S_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&T_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&xa(t,u):typeof u=="number"&&xa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Da.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ue("scroll",t):u!=null&&Vf(t,s,u,o))}switch(n){case"input":$l(t),ag(t,r,!1);break;case"textarea":$l(t),ug(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ci(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Us(t,!!r.multiple,s,!1):r.defaultValue!=null&&Us(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Uu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)K0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=Fi(Ba.current),Fi(Qn.current),Jl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kn]=e,(s=r.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:Xl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kn]=e,e.stateNode=r}return Nt(e),null;case 13:if(je(We),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Be&&ln!==null&&e.mode&1&&!(e.flags&128))h0(),Xs(),e.flags|=98560,s=!1;else if(s=Jl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[Kn]=e}else Xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else Fn!==null&&(rf(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||We.current&1?ht===0&&(ht=3):_p())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return Zs(),Qd(t,e),t===null&&Fa(e.stateNode.containerInfo),Nt(e),null;case 10:return np(e.type._context),Nt(e),null;case 17:return Yt(e.type)&&ju(),Nt(e),null;case 19:if(je(We),s=e.memoizedState,s===null)return Nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Qo(s,!1);else{if(ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ku(t),o!==null){for(e.flags|=128,Qo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Oe(We,We.current&1|2),e.child}t=t.sibling}s.tail!==null&&tt()>to&&(e.flags|=128,r=!0,Qo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ku(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Be)return Nt(e),null}else 2*tt()-s.renderingStartTime>to&&n!==1073741824&&(e.flags|=128,r=!0,Qo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=tt(),e.sibling=null,n=We.current,Oe(We,r?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return vp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?on&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function eR(t,e){switch(Jf(e),e.tag){case 1:return Yt(e.type)&&ju(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zs(),je(Qt),je(Ft),ap(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return op(e),null;case 13:if(je(We),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));Xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(We),null;case 4:return Zs(),null;case 10:return np(e.type._context),null;case 22:case 23:return vp(),null;case 24:return null;default:return null}}var tu=!1,Lt=!1,tR=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ye(t,e,r)}else n.current=null}function Yd(t,e,n){try{n()}catch(r){Ye(t,e,r)}}var Jg=!1;function nR(t,e){if(bd=Mu,t=J_(),Yf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)m=p,p=E;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(E=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Od={focusedElem:t,selectionRange:n},Mu=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var k=C.memoizedProps,O=C.memoizedState,I=e.stateNode,_=I.getSnapshotBeforeUpdate(e.elementType===e.type?k:Ln(e.type,k),O);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(V){Ye(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return C=Jg,Jg=!1,C}function wa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Yd(e,n,s)}i=i.next}while(i!==r)}}function xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G0(t){var e=t.alternate;e!==null&&(t.alternate=null,G0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[ja],delete e[Vd],delete e[F1],delete e[U1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Q0(t){return t.tag===5||t.tag===3||t.tag===4}function Zg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Uu));else if(r!==4&&(t=t.child,t!==null))for(Jd(t,e,n),t=t.sibling;t!==null;)Jd(t,e,n),t=t.sibling}function Zd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zd(t,e,n),t=t.sibling;t!==null;)Zd(t,e,n),t=t.sibling}var wt=null,Mn=!1;function zr(t,e,n){for(n=n.child;n!==null;)Y0(t,e,n),n=n.sibling}function Y0(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(Ic,n)}catch{}switch(n.tag){case 5:Lt||Vs(n,e);case 6:var r=wt,i=Mn;wt=null,zr(t,e,n),wt=r,Mn=i,wt!==null&&(Mn?(t=wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(Mn?(t=wt,n=n.stateNode,t.nodeType===8?Fh(t.parentNode,n):t.nodeType===1&&Fh(t,n),La(t)):Fh(wt,n.stateNode));break;case 4:r=wt,i=Mn,wt=n.stateNode.containerInfo,Mn=!0,zr(t,e,n),wt=r,Mn=i;break;case 0:case 11:case 14:case 15:if(!Lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yd(n,e,o),i=i.next}while(i!==r)}zr(t,e,n);break;case 1:if(!Lt&&(Vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ye(n,e,l)}zr(t,e,n);break;case 21:zr(t,e,n);break;case 22:n.mode&1?(Lt=(r=Lt)||n.memoizedState!==null,zr(t,e,n),Lt=r):zr(t,e,n);break;default:zr(t,e,n)}}function ey(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tR),e.forEach(function(r){var i=hR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:wt=l.stateNode,Mn=!1;break e;case 3:wt=l.stateNode.containerInfo,Mn=!0;break e;case 4:wt=l.stateNode.containerInfo,Mn=!0;break e}l=l.return}if(wt===null)throw Error(H(160));Y0(s,o,i),wt=null,Mn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ye(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)X0(e,t),e=e.sibling}function X0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Wn(t),r&4){try{wa(3,t,t.return),xc(3,t)}catch(k){Ye(t,t.return,k)}try{wa(5,t,t.return)}catch(k){Ye(t,t.return,k)}}break;case 1:On(e,t),Wn(t),r&512&&n!==null&&Vs(n,n.return);break;case 5:if(On(e,t),Wn(t),r&512&&n!==null&&Vs(n,n.return),t.flags&32){var i=t.stateNode;try{xa(i,"")}catch(k){Ye(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&__(i,s),Id(l,o);var c=Id(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?S_(i,p):d==="dangerouslySetInnerHTML"?T_(i,p):d==="children"?xa(i,p):Vf(i,d,p,c)}switch(l){case"input":vd(i,s);break;case"textarea":w_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Us(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?Us(i,!!s.multiple,s.defaultValue,!0):Us(i,!!s.multiple,s.multiple?[]:"",!1))}i[ja]=s}catch(k){Ye(t,t.return,k)}}break;case 6:if(On(e,t),Wn(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ye(t,t.return,k)}}break;case 3:if(On(e,t),Wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(k){Ye(t,t.return,k)}break;case 4:On(e,t),Wn(t);break;case 13:On(e,t),Wn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(gp=tt())),r&4&&ey(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Lt=(c=Lt)||d,On(e,t),Lt=c):On(e,t),Wn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Y=t,d=t.child;d!==null;){for(p=Y=d;Y!==null;){switch(m=Y,E=m.child,m.tag){case 0:case 11:case 14:case 15:wa(4,m,m.return);break;case 1:Vs(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(k){Ye(r,n,k)}}break;case 5:Vs(m,m.return);break;case 22:if(m.memoizedState!==null){ny(p);continue}}E!==null?(E.return=m,Y=E):ny(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=I_("display",o))}catch(k){Ye(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Ye(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:On(e,t),Wn(t),r&4&&ey(t);break;case 21:break;default:On(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Q0(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xa(i,""),r.flags&=-33);var s=Zg(t);Zd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Zg(t);Jd(t,l,o);break;default:throw Error(H(161))}}catch(u){Ye(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rR(t,e,n){Y=t,J0(t)}function J0(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||tu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Lt;l=tu;var c=Lt;if(tu=o,(Lt=u)&&!c)for(Y=i;Y!==null;)o=Y,u=o.child,o.tag===22&&o.memoizedState!==null?ry(i):u!==null?(u.return=o,Y=u):ry(i);for(;s!==null;)Y=s,J0(s),s=s.sibling;Y=i,tu=l,Lt=c}ty(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):ty(t)}}function ty(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Lt||xc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ug(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ug(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&La(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Lt||e.flags&512&&Xd(e)}catch(m){Ye(e,e.return,m)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function ny(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function ry(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xc(4,e)}catch(u){Ye(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ye(e,i,u)}}var s=e.return;try{Xd(e)}catch(u){Ye(e,s,u)}break;case 5:var o=e.return;try{Xd(e)}catch(u){Ye(e,o,u)}}}catch(u){Ye(e,e.return,u)}if(e===t){Y=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Y=l;break}Y=e.return}}var iR=Math.ceil,Yu=Cr.ReactCurrentDispatcher,pp=Cr.ReactCurrentOwner,Tn=Cr.ReactCurrentBatchConfig,Se=0,gt=null,ot=null,It=0,on=0,Fs=vi(0),ht=0,qa=null,Yi=0,Nc=0,mp=0,Ea=null,qt=null,gp=0,to=1/0,cr=null,Xu=!1,ef=null,si=null,nu=!1,Jr=null,Ju=0,Ta=0,tf=null,vu=-1,_u=0;function $t(){return Se&6?tt():vu!==-1?vu:vu=tt()}function oi(t){return t.mode&1?Se&2&&It!==0?It&-It:z1.transition!==null?(_u===0&&(_u=M_()),_u):(t=De,t!==0||(t=window.event,t=t===void 0?16:$_(t.type)),t):1}function jn(t,e,n,r){if(50<Ta)throw Ta=0,tf=null,Error(H(185));ul(t,n,r),(!(Se&2)||t!==gt)&&(t===gt&&(!(Se&2)&&(Nc|=n),ht===4&&Kr(t,It)),Xt(t,r),n===1&&Se===0&&!(e.mode&1)&&(to=tt()+500,Cc&&_i()))}function Xt(t,e){var n=t.callbackNode;zS(t,e);var r=Lu(t,t===gt?It:0);if(r===0)n!==null&&dg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&dg(n),e===1)t.tag===0?j1(iy.bind(null,t)):l0(iy.bind(null,t)),M1(function(){!(Se&6)&&_i()}),n=null;else{switch(V_(r)){case 1:n=Bf;break;case 4:n=O_;break;case 16:n=Ou;break;case 536870912:n=L_;break;default:n=Ou}n=ow(n,Z0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Z0(t,e){if(vu=-1,_u=0,Se&6)throw Error(H(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var r=Lu(t,t===gt?It:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Zu(t,r);else{e=r;var i=Se;Se|=2;var s=tw();(gt!==t||It!==e)&&(cr=null,to=tt()+500,Hi(t,e));do try{aR();break}catch(l){ew(t,l)}while(!0);tp(),Yu.current=s,Se=i,ot!==null?e=0:(gt=null,It=0,e=ht)}if(e!==0){if(e===2&&(i=Cd(t),i!==0&&(r=i,e=nf(t,i))),e===1)throw n=qa,Hi(t,0),Kr(t,r),Xt(t,tt()),n;if(e===6)Kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!sR(i)&&(e=Zu(t,r),e===2&&(s=Cd(t),s!==0&&(r=s,e=nf(t,s))),e===1))throw n=qa,Hi(t,0),Kr(t,r),Xt(t,tt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:bi(t,qt,cr);break;case 3:if(Kr(t,r),(r&130023424)===r&&(e=gp+500-tt(),10<e)){if(Lu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){$t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Md(bi.bind(null,t,qt,cr),e);break}bi(t,qt,cr);break;case 4:if(Kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=tt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iR(r/1960))-r,10<r){t.timeoutHandle=Md(bi.bind(null,t,qt,cr),r);break}bi(t,qt,cr);break;case 5:bi(t,qt,cr);break;default:throw Error(H(329))}}}return Xt(t,tt()),t.callbackNode===n?Z0.bind(null,t):null}function nf(t,e){var n=Ea;return t.current.memoizedState.isDehydrated&&(Hi(t,e).flags|=256),t=Zu(t,e),t!==2&&(e=qt,qt=n,e!==null&&rf(e)),t}function rf(t){qt===null?qt=t:qt.push.apply(qt,t)}function sR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Bn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kr(t,e){for(e&=~mp,e&=~Nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),r=1<<n;t[n]=-1,e&=~r}}function iy(t){if(Se&6)throw Error(H(327));Hs();var e=Lu(t,0);if(!(e&1))return Xt(t,tt()),null;var n=Zu(t,e);if(t.tag!==0&&n===2){var r=Cd(t);r!==0&&(e=r,n=nf(t,r))}if(n===1)throw n=qa,Hi(t,0),Kr(t,e),Xt(t,tt()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,bi(t,qt,cr),Xt(t,tt()),null}function yp(t,e){var n=Se;Se|=1;try{return t(e)}finally{Se=n,Se===0&&(to=tt()+500,Cc&&_i())}}function Xi(t){Jr!==null&&Jr.tag===0&&!(Se&6)&&Hs();var e=Se;Se|=1;var n=Tn.transition,r=De;try{if(Tn.transition=null,De=1,t)return t()}finally{De=r,Tn.transition=n,Se=e,!(Se&6)&&_i()}}function vp(){on=Fs.current,je(Fs)}function Hi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,L1(n)),ot!==null)for(n=ot.return;n!==null;){var r=n;switch(Jf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ju();break;case 3:Zs(),je(Qt),je(Ft),ap();break;case 5:op(r);break;case 4:Zs();break;case 13:je(We);break;case 19:je(We);break;case 10:np(r.type._context);break;case 22:case 23:vp()}n=n.return}if(gt=t,ot=t=ai(t.current,null),It=on=e,ht=0,qa=null,mp=Nc=Yi=0,qt=Ea=null,Vi!==null){for(e=0;e<Vi.length;e++)if(n=Vi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Vi=null}return t}function ew(t,e){do{var n=ot;try{if(tp(),mu.current=Qu,Gu){for(var r=qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gu=!1}if(Qi=0,mt=ut=qe=null,_a=!1,$a=0,pp.current=null,n===null||n.return===null){ht=1,qa=e,ot=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=It,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=Wg(o);if(E!==null){E.flags&=-257,qg(E,o,l,s,e),E.mode&1&&Hg(s,c,e),e=E,u=c;var C=e.updateQueue;if(C===null){var k=new Set;k.add(u),e.updateQueue=k}else C.add(u);break e}else{if(!(e&1)){Hg(s,c,e),_p();break e}u=Error(H(426))}}else if(Be&&l.mode&1){var O=Wg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),qg(O,o,l,s,e),Zf(eo(u,l));break e}}s=u=eo(u,l),ht!==4&&(ht=2),Ea===null?Ea=[s]:Ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=V0(s,u,e);Fg(s,I);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(si===null||!si.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=F0(s,l,e);Fg(s,V);break e}}s=s.return}while(s!==null)}rw(n)}catch(z){e=z,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(!0)}function tw(){var t=Yu.current;return Yu.current=Qu,t===null?Qu:t}function _p(){(ht===0||ht===3||ht===2)&&(ht=4),gt===null||!(Yi&268435455)&&!(Nc&268435455)||Kr(gt,It)}function Zu(t,e){var n=Se;Se|=2;var r=tw();(gt!==t||It!==e)&&(cr=null,Hi(t,e));do try{oR();break}catch(i){ew(t,i)}while(!0);if(tp(),Se=n,Yu.current=r,ot!==null)throw Error(H(261));return gt=null,It=0,ht}function oR(){for(;ot!==null;)nw(ot)}function aR(){for(;ot!==null&&!NS();)nw(ot)}function nw(t){var e=sw(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?rw(t):ot=e,pp.current=null}function rw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eR(n,e),n!==null){n.flags&=32767,ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ht=6,ot=null;return}}else if(n=Z1(n,e,on),n!==null){ot=n;return}if(e=e.sibling,e!==null){ot=e;return}ot=e=t}while(e!==null);ht===0&&(ht=5)}function bi(t,e,n){var r=De,i=Tn.transition;try{Tn.transition=null,De=1,lR(t,e,n,r)}finally{Tn.transition=i,De=r}return null}function lR(t,e,n,r){do Hs();while(Jr!==null);if(Se&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BS(t,s),t===gt&&(ot=gt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nu||(nu=!0,ow(Ou,function(){return Hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var o=De;De=1;var l=Se;Se|=4,pp.current=null,nR(t,n),X0(n,t),C1(Od),Mu=!!bd,Od=bd=null,t.current=n,rR(n),bS(),Se=l,De=o,Tn.transition=s}else t.current=n;if(nu&&(nu=!1,Jr=t,Ju=i),s=t.pendingLanes,s===0&&(si=null),MS(n.stateNode),Xt(t,tt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xu)throw Xu=!1,t=ef,ef=null,t;return Ju&1&&t.tag!==0&&Hs(),s=t.pendingLanes,s&1?t===tf?Ta++:(Ta=0,tf=t):Ta=0,_i(),null}function Hs(){if(Jr!==null){var t=V_(Ju),e=Tn.transition,n=De;try{if(Tn.transition=null,De=16>t?16:t,Jr===null)var r=!1;else{if(t=Jr,Jr=null,Ju=0,Se&6)throw Error(H(331));var i=Se;for(Se|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Y=c;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:wa(8,d,s)}var p=d.child;if(p!==null)p.return=d,Y=p;else for(;Y!==null;){d=Y;var m=d.sibling,E=d.return;if(G0(d),d===c){Y=null;break}if(m!==null){m.return=E,Y=m;break}Y=E}}}var C=s.alternate;if(C!==null){var k=C.child;if(k!==null){C.child=null;do{var O=k.sibling;k.sibling=null,k=O}while(k!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wa(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,Y=I;break e}Y=s.return}}var _=t.current;for(Y=_;Y!==null;){o=Y;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,Y=A;else e:for(o=_;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xc(9,l)}}catch(z){Ye(l,l.return,z)}if(l===o){Y=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,Y=V;break e}Y=l.return}}if(Se=i,_i(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(Ic,t)}catch{}r=!0}return r}finally{De=n,Tn.transition=e}}return!1}function sy(t,e,n){e=eo(n,e),e=V0(t,e,1),t=ii(t,e,1),e=$t(),t!==null&&(ul(t,1,e),Xt(t,e))}function Ye(t,e,n){if(t.tag===3)sy(t,t,n);else for(;e!==null;){if(e.tag===3){sy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(si===null||!si.has(r))){t=eo(n,t),t=F0(e,t,1),e=ii(e,t,1),t=$t(),e!==null&&(ul(e,1,t),Xt(e,t));break}}e=e.return}}function uR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,gt===t&&(It&n)===n&&(ht===4||ht===3&&(It&130023424)===It&&500>tt()-gp?Hi(t,0):mp|=n),Xt(t,e)}function iw(t,e){e===0&&(t.mode&1?(e=ql,ql<<=1,!(ql&130023424)&&(ql=4194304)):e=1);var n=$t();t=Ir(t,e),t!==null&&(ul(t,e,n),Xt(t,n))}function cR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),iw(t,n)}function hR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),iw(t,n)}var sw;sw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Gt=!1,J1(t,e,n);Gt=!!(t.flags&131072)}else Gt=!1,Be&&e.flags&1048576&&u0(e,$u,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yu(t,e),t=e.pendingProps;var i=Ys(e,Ft.current);$s(e,n),i=up(null,e,r,t,i,n);var s=cp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yt(r)?(s=!0,zu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ip(e),i.updater=Dc,e.stateNode=i,i._reactInternals=e,$d(e,r,t,n),e=qd(null,e,r,!0,s,n)):(e.tag=0,Be&&s&&Xf(e),Bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=fR(r),t=Ln(r,t),i){case 0:e=Wd(null,e,r,t,n);break e;case 1:e=Qg(null,e,r,t,n);break e;case 11:e=Kg(null,e,r,t,n);break e;case 14:e=Gg(null,e,r,Ln(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Wd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Qg(t,e,r,i,n);case 3:e:{if(B0(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,m0(t,e),qu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=eo(Error(H(423)),e),e=Yg(t,e,r,n,i);break e}else if(r!==i){i=eo(Error(H(424)),e),e=Yg(t,e,r,n,i);break e}else for(ln=ri(e.stateNode.containerInfo.firstChild),cn=e,Be=!0,Fn=null,n=f0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xs(),r===i){e=Sr(t,e,n);break e}Bt(t,e,r,n)}e=e.child}return e;case 5:return g0(e),t===null&&jd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ld(r,i)?o=null:s!==null&&Ld(r,s)&&(e.flags|=32),z0(t,e),Bt(t,e,o,n),e.child;case 6:return t===null&&jd(e),null;case 13:return $0(t,e,n);case 4:return sp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Js(e,null,r,n):Bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Kg(t,e,r,i,n);case 7:return Bt(t,e,e.pendingProps,n),e.child;case 8:return Bt(t,e,e.pendingProps.children,n),e.child;case 12:return Bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Oe(Hu,r._currentValue),r._currentValue=o,s!==null)if(Bn(s.value,o)){if(s.children===i.children&&!Qt.current){e=Sr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=vr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),zd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),zd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$s(e,n),i=Sn(i),r=r(i),e.flags|=1,Bt(t,e,r,n),e.child;case 14:return r=e.type,i=Ln(r,e.pendingProps),i=Ln(r.type,i),Gg(t,e,r,i,n);case 15:return U0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),yu(t,e),e.tag=1,Yt(r)?(t=!0,zu(e)):t=!1,$s(e,n),M0(e,r,i),$d(e,r,i,n),qd(null,e,r,!0,t,n);case 19:return H0(t,e,n);case 22:return j0(t,e,n)}throw Error(H(156,e.tag))};function ow(t,e){return b_(t,e)}function dR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,r){return new dR(t,e,n,r)}function wp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fR(t){if(typeof t=="function")return wp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uf)return 11;if(t===jf)return 14}return 2}function ai(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")wp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Cs:return Wi(n.children,i,s,e);case Ff:o=8,i|=8;break;case fd:return t=wn(12,n,e,i|2),t.elementType=fd,t.lanes=s,t;case pd:return t=wn(13,n,e,i),t.elementType=pd,t.lanes=s,t;case md:return t=wn(19,n,e,i),t.elementType=md,t.lanes=s,t;case g_:return bc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case p_:o=10;break e;case m_:o=9;break e;case Uf:o=11;break e;case jf:o=14;break e;case Hr:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=wn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wi(t,e,n,r){return t=wn(7,t,r,e),t.lanes=n,t}function bc(t,e,n,r){return t=wn(22,t,r,e),t.elementType=g_,t.lanes=n,t.stateNode={isHidden:!1},t}function qh(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function Kh(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ph(0),this.expirationTimes=Ph(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ph(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ep(t,e,n,r,i,s,o,l,u){return t=new pR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ip(s),t}function mR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function aw(t){if(!t)return hi;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(Yt(n))return a0(t,n,e)}return e}function lw(t,e,n,r,i,s,o,l,u){return t=Ep(n,r,!0,t,i,s,o,l,u),t.context=aw(null),n=t.current,r=$t(),i=oi(n),s=vr(r,i),s.callback=e??null,ii(n,s,i),t.current.lanes=i,ul(t,i,r),Xt(t,r),t}function Oc(t,e,n,r){var i=e.current,s=$t(),o=oi(i);return n=aw(n),e.context===null?e.context=n:e.pendingContext=n,e=vr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ii(i,e,o),t!==null&&(jn(t,i,o,s),pu(t,i,o)),o}function ec(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function oy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tp(t,e){oy(t,e),(t=t.alternate)&&oy(t,e)}function gR(){return null}var uw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ip(t){this._internalRoot=t}Lc.prototype.render=Ip.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));Oc(t,e,null,null)};Lc.prototype.unmount=Ip.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xi(function(){Oc(null,t,null,null)}),e[Tr]=null}};function Lc(t){this._internalRoot=t}Lc.prototype.unstable_scheduleHydration=function(t){if(t){var e=j_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qr.length&&e!==0&&e<qr[n].priority;n++);qr.splice(n,0,t),n===0&&B_(t)}};function Sp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ay(){}function yR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ec(o);s.call(c)}}var o=lw(e,r,t,0,null,!1,!1,"",ay);return t._reactRootContainer=o,t[Tr]=o.current,Fa(t.nodeType===8?t.parentNode:t),Xi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ec(u);l.call(c)}}var u=Ep(t,0,!1,null,null,!1,!1,"",ay);return t._reactRootContainer=u,t[Tr]=u.current,Fa(t.nodeType===8?t.parentNode:t),Xi(function(){Oc(e,u,n,r)}),u}function Vc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ec(o);l.call(u)}}Oc(e,o,t,i)}else o=yR(n,e,t,i,r);return ec(o)}F_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&($f(e,n|1),Xt(e,tt()),!(Se&6)&&(to=tt()+500,_i()))}break;case 13:Xi(function(){var r=Ir(t,1);if(r!==null){var i=$t();jn(r,t,1,i)}}),Tp(t,1)}};Hf=function(t){if(t.tag===13){var e=Ir(t,134217728);if(e!==null){var n=$t();jn(e,t,134217728,n)}Tp(t,134217728)}};U_=function(t){if(t.tag===13){var e=oi(t),n=Ir(t,e);if(n!==null){var r=$t();jn(n,t,e,r)}Tp(t,e)}};j_=function(){return De};z_=function(t,e){var n=De;try{return De=t,e()}finally{De=n}};Rd=function(t,e,n){switch(e){case"input":if(vd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pc(r);if(!i)throw Error(H(90));v_(r),vd(r,i)}}}break;case"textarea":w_(t,n);break;case"select":e=n.value,e!=null&&Us(t,!!n.multiple,e,!1)}};P_=yp;C_=Xi;var vR={usingClientEntryPoint:!1,Events:[hl,Ns,Pc,R_,A_,yp]},Yo={findFiberByHostInstance:Mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_R={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=x_(t),t===null?null:t.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||gR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{Ic=ru.inject(_R),Gn=ru}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vR;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sp(e))throw Error(H(200));return mR(t,e,null,n)};fn.createRoot=function(t,e){if(!Sp(t))throw Error(H(299));var n=!1,r="",i=uw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ep(t,1,!1,null,null,n,!1,r,i),t[Tr]=e.current,Fa(t.nodeType===8?t.parentNode:t),new Ip(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=x_(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return Xi(t)};fn.hydrate=function(t,e,n){if(!Mc(e))throw Error(H(200));return Vc(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!Sp(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=uw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lw(e,null,t,1,n??null,i,!1,s,o),t[Tr]=e.current,Fa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Lc(e)};fn.render=function(t,e,n){if(!Mc(e))throw Error(H(200));return Vc(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!Mc(t))throw Error(H(40));return t._reactRootContainer?(Xi(function(){Vc(null,null,t,!1,function(){t._reactRootContainer=null,t[Tr]=null})}),!0):!1};fn.unstable_batchedUpdates=yp;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mc(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return Vc(t,e,n,!1,r)};fn.version="18.3.1-next-f1338f8080-20240426";function cw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cw)}catch(t){console.error(t)}}cw(),c_.exports=fn;var Rp=c_.exports;const wR=Jv(Rp),ER=Xv({__proto__:null,default:wR},[Rp]);var ly=Rp;hd.createRoot=ly.createRoot,hd.hydrateRoot=ly.hydrateRoot;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function He(){return He=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},He.apply(this,arguments)}var it;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(it||(it={}));const uy="popstate";function TR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Ka("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ji(i)}return SR(e,n,null,t)}function pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function no(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function IR(){return Math.random().toString(36).substr(2,8)}function cy(t,e){return{usr:t.state,key:t.key,idx:e}}function Ka(t,e,n,r){return n===void 0&&(n=null),He({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?wi(e):e,{state:n,key:e&&e.key||r||IR()})}function Ji(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function wi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function SR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=it.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(He({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=it.Pop;let O=d(),I=O==null?null:O-c;c=O,u&&u({action:l,location:k.location,delta:I})}function m(O,I){l=it.Push;let _=Ka(k.location,O,I);c=d()+1;let A=cy(_,c),V=k.createHref(_);try{o.pushState(A,"",V)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(V)}s&&u&&u({action:l,location:k.location,delta:1})}function E(O,I){l=it.Replace;let _=Ka(k.location,O,I);c=d();let A=cy(_,c),V=k.createHref(_);o.replaceState(A,"",V),s&&u&&u({action:l,location:k.location,delta:0})}function C(O){let I=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof O=="string"?O:Ji(O);return _=_.replace(/ $/,"%20"),pe(I,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,I)}let k={get action(){return l},get location(){return t(i,o)},listen(O){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(uy,p),u=O,()=>{i.removeEventListener(uy,p),u=null}},createHref(O){return e(i,O)},createURL:C,encodeLocation(O){let I=C(O);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:E,go(O){return o.go(O)}};return k}var be;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(be||(be={}));const RR=new Set(["lazy","caseSensitive","path","id","index","children"]);function AR(t){return t.index===!0}function Ga(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],l=typeof i.id=="string"?i.id:o.join("-");if(pe(i.index!==!0||!i.children,"Cannot specify children on an index route"),pe(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),AR(i)){let u=He({},i,e(i),{id:l});return r[l]=u,u}else{let u=He({},i,e(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=Ga(i.children,e,o,r)),u}})}function Li(t,e,n){return n===void 0&&(n="/"),Eu(t,e,n,!1)}function Eu(t,e,n,r){let i=typeof e=="string"?wi(e):e,s=vo(i.pathname||"/",n);if(s==null)return null;let o=hw(t);CR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=UR(s);l=VR(o[u],c,r)}return l}function PR(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function hw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(pe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=_r([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),hw(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:LR(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of dw(s.path))i(s,o,u)}),e}function dw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=dw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function CR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:MR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const kR=/^:[\w-]+$/,DR=3,xR=2,NR=1,bR=10,OR=-2,hy=t=>t==="*";function LR(t,e){let n=t.split("/"),r=n.length;return n.some(hy)&&(r+=OR),e&&(r+=xR),n.filter(i=>!hy(i)).reduce((i,s)=>i+(kR.test(s)?DR:s===""?NR:bR),r)}function MR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function VR(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=dy({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=dy({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:_r([s,p.pathname]),pathnameBase:BR(_r([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=_r([s,p.pathnameBase]))}return o}function dy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=FR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const C=l[p];return E&&!C?c[m]=void 0:c[m]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function FR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),no(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function UR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return no(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function vo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function jR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?wi(t):t;return{pathname:n?n.startsWith("/")?n:zR(n,e):e,search:$R(r),hash:HR(i)}}function zR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Fc(t,e){let n=fw(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Uc(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=wi(t):(i=He({},t),pe(!i.pathname||!i.pathname.includes("?"),Gh("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),Gh("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),Gh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=jR(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const _r=t=>t.join("/").replace(/\/\/+/g,"/"),BR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$R=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,HR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Ap{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function jc(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const pw=["post","put","patch","delete"],WR=new Set(pw),qR=["get",...pw],KR=new Set(qR),GR=new Set([301,302,303,307,308]),QR=new Set([307,308]),Qh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},YR={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Xo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Pp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,XR=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),mw="remix-router-transitions";function JR(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;pe(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let D=t.detectErrorBoundary;i=N=>({hasErrorBoundary:D(N)})}else i=XR;let s={},o=Ga(t.routes,i,void 0,s),l,u=t.basename||"/",c=t.unstable_dataStrategy||rA,d=t.unstable_patchRoutesOnMiss,p=He({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),m=null,E=new Set,C=null,k=null,O=null,I=t.hydrationData!=null,_=Li(o,t.history.location,u),A=null;if(_==null&&!d){let D=zt(404,{pathname:t.history.location.pathname}),{matches:N,route:M}=Ty(o);_=N,A={[M.id]:D}}_&&d&&or(_,o,t.history.location.pathname).active&&(_=null);let V;if(!_)V=!1,_=[];else if(_.some(D=>D.route.lazy))V=!1;else if(!_.some(D=>D.route.loader))V=!0;else if(p.v7_partialHydration){let D=t.hydrationData?t.hydrationData.loaderData:null,N=t.hydrationData?t.hydrationData.errors:null,M=j=>j.route.loader?typeof j.route.loader=="function"&&j.route.loader.hydrate===!0?!1:D&&D[j.route.id]!==void 0||N&&N[j.route.id]!==void 0:!0;if(N){let j=_.findIndex(K=>N[K.route.id]!==void 0);V=_.slice(0,j+1).every(M)}else V=_.every(M)}else V=t.hydrationData!=null;let z,x={historyAction:t.history.action,location:t.history.location,matches:_,initialized:V,navigation:Qh,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||A,fetchers:new Map,blockers:new Map},w=it.Pop,y=!1,v,S=!1,P=new Map,b=null,T=!1,Re=!1,yt=[],mn=[],Ie=new Map,G=0,te=-1,ne=new Map,me=new Set,Q=new Map,le=new Map,Ne=new Set,ze=new Map,Me=new Map,en=new Map,fe=!1;function jt(){if(m=t.history.listen(D=>{let{action:N,location:M,delta:j}=D;if(fe){fe=!1;return}no(Me.size===0||j!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let K=xo({currentLocation:x.location,nextLocation:M,historyAction:N});if(K&&j!=null){fe=!0,t.history.go(j*-1),Ai(K,{state:"blocked",location:M,proceed(){Ai(K,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),t.history.go(j)},reset(){let J=new Map(x.blockers);J.set(K,Xo),nt({blockers:J})}});return}return tn(N,M)}),n){gA(e,P);let D=()=>yA(e,P);e.addEventListener("pagehide",D),b=()=>e.removeEventListener("pagehide",D)}return x.initialized||tn(it.Pop,x.location,{initialHydration:!0}),z}function Je(){m&&m(),b&&b(),E.clear(),v&&v.abort(),x.fetchers.forEach((D,N)=>ps(N)),x.blockers.forEach((D,N)=>gs(N))}function Ze(D){return E.add(D),()=>E.delete(D)}function nt(D,N){N===void 0&&(N={}),x=He({},x,D);let M=[],j=[];p.v7_fetcherPersist&&x.fetchers.forEach((K,J)=>{K.state==="idle"&&(Ne.has(J)?j.push(J):M.push(J))}),[...E].forEach(K=>K(x,{deletedFetchers:j,unstable_viewTransitionOpts:N.viewTransitionOpts,unstable_flushSync:N.flushSync===!0})),p.v7_fetcherPersist&&(M.forEach(K=>x.fetchers.delete(K)),j.forEach(K=>ps(K)))}function Dn(D,N,M){var j,K;let{flushSync:J}=M===void 0?{}:M,se=x.actionData!=null&&x.navigation.formMethod!=null&&Vn(x.navigation.formMethod)&&x.navigation.state==="loading"&&((j=D.state)==null?void 0:j._isRedirect)!==!0,W;N.actionData?Object.keys(N.actionData).length>0?W=N.actionData:W=null:se?W=x.actionData:W=null;let ue=N.loaderData?wy(x.loaderData,N.loaderData,N.matches||[],N.errors):x.loaderData,ee=x.blockers;ee.size>0&&(ee=new Map(ee),ee.forEach((we,Ce)=>ee.set(Ce,Xo)));let Z=y===!0||x.navigation.formMethod!=null&&Vn(x.navigation.formMethod)&&((K=D.state)==null?void 0:K._isRedirect)!==!0;l&&(o=l,l=void 0),T||w===it.Pop||(w===it.Push?t.history.push(D,D.state):w===it.Replace&&t.history.replace(D,D.state));let ge;if(w===it.Pop){let we=P.get(x.location.pathname);we&&we.has(D.pathname)?ge={currentLocation:x.location,nextLocation:D}:P.has(D.pathname)&&(ge={currentLocation:D,nextLocation:x.location})}else if(S){let we=P.get(x.location.pathname);we?we.add(D.pathname):(we=new Set([D.pathname]),P.set(x.location.pathname,we)),ge={currentLocation:x.location,nextLocation:D}}nt(He({},N,{actionData:W,loaderData:ue,historyAction:w,location:D,initialized:!0,navigation:Qh,revalidation:"idle",restoreScrollPosition:bo(D,N.matches||x.matches),preventScrollReset:Z,blockers:ee}),{viewTransitionOpts:ge,flushSync:J===!0}),w=it.Pop,y=!1,S=!1,T=!1,Re=!1,yt=[],mn=[]}async function Si(D,N){if(typeof D=="number"){t.history.go(D);return}let M=sf(x.location,x.matches,u,p.v7_prependBasename,D,p.v7_relativeSplatPath,N==null?void 0:N.fromRouteId,N==null?void 0:N.relative),{path:j,submission:K,error:J}=fy(p.v7_normalizeFormMethod,!1,M,N),se=x.location,W=Ka(x.location,j,N&&N.state);W=He({},W,t.history.encodeLocation(W));let ue=N&&N.replace!=null?N.replace:void 0,ee=it.Push;ue===!0?ee=it.Replace:ue===!1||K!=null&&Vn(K.formMethod)&&K.formAction===x.location.pathname+x.location.search&&(ee=it.Replace);let Z=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0,ge=(N&&N.unstable_flushSync)===!0,we=xo({currentLocation:se,nextLocation:W,historyAction:ee});if(we){Ai(we,{state:"blocked",location:W,proceed(){Ai(we,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),Si(D,N)},reset(){let Ce=new Map(x.blockers);Ce.set(we,Xo),nt({blockers:Ce})}});return}return await tn(ee,W,{submission:K,pendingError:J,preventScrollReset:Z,replace:N&&N.replace,enableViewTransition:N&&N.unstable_viewTransition,flushSync:ge})}function ds(){if(lt(),nt({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){tn(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}tn(w||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function tn(D,N,M){v&&v.abort(),v=null,w=D,T=(M&&M.startUninterruptedRevalidation)===!0,ys(x.location,x.matches),y=(M&&M.preventScrollReset)===!0,S=(M&&M.enableViewTransition)===!0;let j=l||o,K=M&&M.overrideNavigation,J=Li(j,N,u),se=(M&&M.flushSync)===!0,W=or(J,j,N.pathname);if(W.active&&W.matches&&(J=W.matches),!J){let{error:Ee,notFoundMatches:et,route:$e}=ir(N.pathname);Dn(N,{matches:et,loaderData:{},errors:{[$e.id]:Ee}},{flushSync:se});return}if(x.initialized&&!Re&&uA(x.location,N)&&!(M&&M.submission&&Vn(M.submission.formMethod))){Dn(N,{matches:J},{flushSync:se});return}v=new AbortController;let ue=Is(t.history,N,v.signal,M&&M.submission),ee;if(M&&M.pendingError)ee=[Ia(J).route.id,{type:be.error,error:M.pendingError}];else if(M&&M.submission&&Vn(M.submission.formMethod)){let Ee=await Ro(ue,N,M.submission,J,W.active,{replace:M.replace,flushSync:se});if(Ee.shortCircuited)return;if(Ee.pendingActionResult){let[et,$e]=Ee.pendingActionResult;if(an($e)&&jc($e.error)&&$e.error.status===404){v=null,Dn(N,{matches:Ee.matches,loaderData:{},errors:{[et]:$e.error}});return}}J=Ee.matches||J,ee=Ee.pendingActionResult,K=Yh(N,M.submission),se=!1,W.active=!1,ue=Is(t.history,ue.url,ue.signal)}let{shortCircuited:Z,matches:ge,loaderData:we,errors:Ce}=await Ao(ue,N,J,W.active,K,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,se,ee);Z||(v=null,Dn(N,He({matches:ge||J},Ey(ee),{loaderData:we,errors:Ce})))}async function Ro(D,N,M,j,K,J){J===void 0&&(J={}),lt();let se=pA(N,M);if(nt({navigation:se},{flushSync:J.flushSync===!0}),K){let ee=await Ci(j,N.pathname,D.signal);if(ee.type==="aborted")return{shortCircuited:!0};if(ee.type==="error"){let{error:Z,notFoundMatches:ge,route:we}=Mr(N.pathname,ee);return{matches:ge,pendingActionResult:[we.id,{type:be.error,error:Z}]}}else if(ee.matches)j=ee.matches;else{let{notFoundMatches:Z,error:ge,route:we}=ir(N.pathname);return{matches:Z,pendingActionResult:[we.id,{type:be.error,error:ge}]}}}let W,ue=aa(j,N);if(!ue.route.action&&!ue.route.lazy)W={type:be.error,error:zt(405,{method:D.method,pathname:N.pathname,routeId:ue.route.id})};else if(W=(await Lr("action",D,[ue],j))[0],D.signal.aborted)return{shortCircuited:!0};if(ji(W)){let ee;return J&&J.replace!=null?ee=J.replace:ee=yy(W.response.headers.get("Location"),new URL(D.url),u)===x.location.pathname+x.location.search,await rr(D,W,{submission:M,replace:ee}),{shortCircuited:!0}}if(Ui(W))throw zt(400,{type:"defer-action"});if(an(W)){let ee=Ia(j,ue.route.id);return(J&&J.replace)!==!0&&(w=it.Push),{matches:j,pendingActionResult:[ee.route.id,W]}}return{matches:j,pendingActionResult:[ue.route.id,W]}}async function Ao(D,N,M,j,K,J,se,W,ue,ee,Z){let ge=K||Yh(N,J),we=J||se||Ry(ge),Ce=!T&&(!p.v7_partialHydration||!ue);if(j){if(Ce){let Ve=fs(Z);nt(He({navigation:ge},Ve!==void 0?{actionData:Ve}:{}),{flushSync:ee})}let de=await Ci(M,N.pathname,D.signal);if(de.type==="aborted")return{shortCircuited:!0};if(de.type==="error"){let{error:Ve,notFoundMatches:Ct,route:ke}=Mr(N.pathname,de);return{matches:Ct,loaderData:{},errors:{[ke.id]:Ve}}}else if(de.matches)M=de.matches;else{let{error:Ve,notFoundMatches:Ct,route:ke}=ir(N.pathname);return{matches:Ct,loaderData:{},errors:{[ke.id]:Ve}}}}let Ee=l||o,[et,$e]=py(t.history,x,M,we,N,p.v7_partialHydration&&ue===!0,p.unstable_skipActionErrorRevalidation,Re,yt,mn,Ne,Q,me,Ee,u,Z);if(Pi(de=>!(M&&M.some(Ve=>Ve.route.id===de))||et&&et.some(Ve=>Ve.route.id===de)),te=++G,et.length===0&&$e.length===0){let de=ms();return Dn(N,He({matches:M,loaderData:{},errors:Z&&an(Z[1])?{[Z[0]]:Z[1].error}:null},Ey(Z),de?{fetchers:new Map(x.fetchers)}:{}),{flushSync:ee}),{shortCircuited:!0}}if(Ce){let de={};if(!j){de.navigation=ge;let Ve=fs(Z);Ve!==void 0&&(de.actionData=Ve)}$e.length>0&&(de.fetchers=Po($e)),nt(de,{flushSync:ee})}$e.forEach(de=>{Ie.has(de.key)&&xn(de.key),de.controller&&Ie.set(de.key,de.controller)});let Vr=()=>$e.forEach(de=>xn(de.key));v&&v.signal.addEventListener("abort",Vr);let{loaderResults:$n,fetcherResults:Nn}=await at(x.matches,M,et,$e,D);if(D.signal.aborted)return{shortCircuited:!0};v&&v.signal.removeEventListener("abort",Vr),$e.forEach(de=>Ie.delete(de.key));let ar=Iy([...$n,...Nn]);if(ar){if(ar.idx>=et.length){let de=$e[ar.idx-et.length].key;me.add(de)}return await rr(D,ar.result,{replace:W}),{shortCircuited:!0}}let{loaderData:Hn,errors:Pt}=_y(x,M,et,$n,Z,$e,Nn,ze);ze.forEach((de,Ve)=>{de.subscribe(Ct=>{(Ct||de.done)&&ze.delete(Ve)})}),p.v7_partialHydration&&ue&&x.errors&&Object.entries(x.errors).filter(de=>{let[Ve]=de;return!et.some(Ct=>Ct.route.id===Ve)}).forEach(de=>{let[Ve,Ct]=de;Pt=Object.assign(Pt||{},{[Ve]:Ct})});let yn=ms(),Fr=Cl(te),vs=yn||Fr||$e.length>0;return He({matches:M,loaderData:Hn,errors:Pt},vs?{fetchers:new Map(x.fetchers)}:{})}function fs(D){if(D&&!an(D[1]))return{[D[0]]:D[1].data};if(x.actionData)return Object.keys(x.actionData).length===0?null:x.actionData}function Po(D){return D.forEach(N=>{let M=x.fetchers.get(N.key),j=Jo(void 0,M?M.data:void 0);x.fetchers.set(N.key,j)}),new Map(x.fetchers)}function Pl(D,N,M,j){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Ie.has(D)&&xn(D);let K=(j&&j.unstable_flushSync)===!0,J=l||o,se=sf(x.location,x.matches,u,p.v7_prependBasename,M,p.v7_relativeSplatPath,N,j==null?void 0:j.relative),W=Li(J,se,u),ue=or(W,J,se);if(ue.active&&ue.matches&&(W=ue.matches),!W){gn(D,N,zt(404,{pathname:se}),{flushSync:K});return}let{path:ee,submission:Z,error:ge}=fy(p.v7_normalizeFormMethod,!0,se,j);if(ge){gn(D,N,ge,{flushSync:K});return}let we=aa(W,ee);if(y=(j&&j.preventScrollReset)===!0,Z&&Vn(Z.formMethod)){mh(D,N,ee,we,W,ue.active,K,Z);return}Q.set(D,{routeId:N,path:ee}),Co(D,N,ee,we,W,ue.active,K,Z)}async function mh(D,N,M,j,K,J,se,W){lt(),Q.delete(D);function ue(ke){if(!ke.route.action&&!ke.route.lazy){let rn=zt(405,{method:W.formMethod,pathname:M,routeId:N});return gn(D,N,rn,{flushSync:se}),!0}return!1}if(!J&&ue(j))return;let ee=x.fetchers.get(D);nn(D,mA(W,ee),{flushSync:se});let Z=new AbortController,ge=Is(t.history,M,Z.signal,W);if(J){let ke=await Ci(K,M,ge.signal);if(ke.type==="aborted")return;if(ke.type==="error"){let{error:rn}=Mr(M,ke);gn(D,N,rn,{flushSync:se});return}else if(ke.matches){if(K=ke.matches,j=aa(K,M),ue(j))return}else{gn(D,N,zt(404,{pathname:M}),{flushSync:se});return}}Ie.set(D,Z);let we=G,Ee=(await Lr("action",ge,[j],K))[0];if(ge.signal.aborted){Ie.get(D)===Z&&Ie.delete(D);return}if(p.v7_fetcherPersist&&Ne.has(D)){if(ji(Ee)||an(Ee)){nn(D,$r(void 0));return}}else{if(ji(Ee))if(Ie.delete(D),te>we){nn(D,$r(void 0));return}else return me.add(D),nn(D,Jo(W)),rr(ge,Ee,{fetcherSubmission:W});if(an(Ee)){gn(D,N,Ee.error);return}}if(Ui(Ee))throw zt(400,{type:"defer-action"});let et=x.navigation.location||x.location,$e=Is(t.history,et,Z.signal),Vr=l||o,$n=x.navigation.state!=="idle"?Li(Vr,x.navigation.location,u):x.matches;pe($n,"Didn't find any matches after fetcher action");let Nn=++G;ne.set(D,Nn);let ar=Jo(W,Ee.data);x.fetchers.set(D,ar);let[Hn,Pt]=py(t.history,x,$n,W,et,!1,p.unstable_skipActionErrorRevalidation,Re,yt,mn,Ne,Q,me,Vr,u,[j.route.id,Ee]);Pt.filter(ke=>ke.key!==D).forEach(ke=>{let rn=ke.key,Oo=x.fetchers.get(rn),Dl=Jo(void 0,Oo?Oo.data:void 0);x.fetchers.set(rn,Dl),Ie.has(rn)&&xn(rn),ke.controller&&Ie.set(rn,ke.controller)}),nt({fetchers:new Map(x.fetchers)});let yn=()=>Pt.forEach(ke=>xn(ke.key));Z.signal.addEventListener("abort",yn);let{loaderResults:Fr,fetcherResults:vs}=await at(x.matches,$n,Hn,Pt,$e);if(Z.signal.aborted)return;Z.signal.removeEventListener("abort",yn),ne.delete(D),Ie.delete(D),Pt.forEach(ke=>Ie.delete(ke.key));let de=Iy([...Fr,...vs]);if(de){if(de.idx>=Hn.length){let ke=Pt[de.idx-Hn.length].key;me.add(ke)}return rr($e,de.result)}let{loaderData:Ve,errors:Ct}=_y(x,x.matches,Hn,Fr,void 0,Pt,vs,ze);if(x.fetchers.has(D)){let ke=$r(Ee.data);x.fetchers.set(D,ke)}Cl(Nn),x.navigation.state==="loading"&&Nn>te?(pe(w,"Expected pending action"),v&&v.abort(),Dn(x.navigation.location,{matches:$n,loaderData:Ve,errors:Ct,fetchers:new Map(x.fetchers)})):(nt({errors:Ct,loaderData:wy(x.loaderData,Ve,$n,Ct),fetchers:new Map(x.fetchers)}),Re=!1)}async function Co(D,N,M,j,K,J,se,W){let ue=x.fetchers.get(D);nn(D,Jo(W,ue?ue.data:void 0),{flushSync:se});let ee=new AbortController,Z=Is(t.history,M,ee.signal);if(J){let Ee=await Ci(K,M,Z.signal);if(Ee.type==="aborted")return;if(Ee.type==="error"){let{error:et}=Mr(M,Ee);gn(D,N,et,{flushSync:se});return}else if(Ee.matches)K=Ee.matches,j=aa(K,M);else{gn(D,N,zt(404,{pathname:M}),{flushSync:se});return}}Ie.set(D,ee);let ge=G,Ce=(await Lr("loader",Z,[j],K))[0];if(Ui(Ce)&&(Ce=await ww(Ce,Z.signal,!0)||Ce),Ie.get(D)===ee&&Ie.delete(D),!Z.signal.aborted){if(Ne.has(D)){nn(D,$r(void 0));return}if(ji(Ce))if(te>ge){nn(D,$r(void 0));return}else{me.add(D),await rr(Z,Ce);return}if(an(Ce)){gn(D,N,Ce.error);return}pe(!Ui(Ce),"Unhandled fetcher deferred data"),nn(D,$r(Ce.data))}}async function rr(D,N,M){let{submission:j,fetcherSubmission:K,replace:J}=M===void 0?{}:M;N.response.headers.has("X-Remix-Revalidate")&&(Re=!0);let se=N.response.headers.get("Location");pe(se,"Expected a Location header on the redirect Response"),se=yy(se,new URL(D.url),u);let W=Ka(x.location,se,{_isRedirect:!0});if(n){let Ce=!1;if(N.response.headers.has("X-Remix-Reload-Document"))Ce=!0;else if(Pp.test(se)){const Ee=t.history.createURL(se);Ce=Ee.origin!==e.location.origin||vo(Ee.pathname,u)==null}if(Ce){J?e.location.replace(se):e.location.assign(se);return}}v=null;let ue=J===!0?it.Replace:it.Push,{formMethod:ee,formAction:Z,formEncType:ge}=x.navigation;!j&&!K&&ee&&Z&&ge&&(j=Ry(x.navigation));let we=j||K;if(QR.has(N.response.status)&&we&&Vn(we.formMethod))await tn(ue,W,{submission:He({},we,{formAction:se}),preventScrollReset:y});else{let Ce=Yh(W,j);await tn(ue,W,{overrideNavigation:Ce,fetcherSubmission:K,preventScrollReset:y})}}async function Lr(D,N,M,j){try{let K=await iA(c,D,N,M,j,s,i);return await Promise.all(K.map((J,se)=>{if(hA(J)){let W=J.result;return{type:be.redirect,response:aA(W,N,M[se].route.id,j,u,p.v7_relativeSplatPath)}}return oA(J)}))}catch(K){return M.map(()=>({type:be.error,error:K}))}}async function at(D,N,M,j,K){let[J,...se]=await Promise.all([M.length?Lr("loader",K,M,N):[],...j.map(W=>{if(W.matches&&W.match&&W.controller){let ue=Is(t.history,W.path,W.controller.signal);return Lr("loader",ue,[W.match],W.matches).then(ee=>ee[0])}else return Promise.resolve({type:be.error,error:zt(404,{pathname:W.path})})})]);return await Promise.all([Sy(D,M,J,J.map(()=>K.signal),!1,x.loaderData),Sy(D,j.map(W=>W.match),se,j.map(W=>W.controller?W.controller.signal:null),!0)]),{loaderResults:J,fetcherResults:se}}function lt(){Re=!0,yt.push(...Pi()),Q.forEach((D,N)=>{Ie.has(N)&&(mn.push(N),xn(N))})}function nn(D,N,M){M===void 0&&(M={}),x.fetchers.set(D,N),nt({fetchers:new Map(x.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function gn(D,N,M,j){j===void 0&&(j={});let K=Ia(x.matches,N);ps(D),nt({errors:{[K.route.id]:M},fetchers:new Map(x.fetchers)},{flushSync:(j&&j.flushSync)===!0})}function ko(D){return p.v7_fetcherPersist&&(le.set(D,(le.get(D)||0)+1),Ne.has(D)&&Ne.delete(D)),x.fetchers.get(D)||YR}function ps(D){let N=x.fetchers.get(D);Ie.has(D)&&!(N&&N.state==="loading"&&ne.has(D))&&xn(D),Q.delete(D),ne.delete(D),me.delete(D),Ne.delete(D),x.fetchers.delete(D)}function Ri(D){if(p.v7_fetcherPersist){let N=(le.get(D)||0)-1;N<=0?(le.delete(D),Ne.add(D)):le.set(D,N)}else ps(D);nt({fetchers:new Map(x.fetchers)})}function xn(D){let N=Ie.get(D);pe(N,"Expected fetch controller: "+D),N.abort(),Ie.delete(D)}function Do(D){for(let N of D){let M=ko(N),j=$r(M.data);x.fetchers.set(N,j)}}function ms(){let D=[],N=!1;for(let M of me){let j=x.fetchers.get(M);pe(j,"Expected fetcher: "+M),j.state==="loading"&&(me.delete(M),D.push(M),N=!0)}return Do(D),N}function Cl(D){let N=[];for(let[M,j]of ne)if(j<D){let K=x.fetchers.get(M);pe(K,"Expected fetcher: "+M),K.state==="loading"&&(xn(M),ne.delete(M),N.push(M))}return Do(N),N.length>0}function gh(D,N){let M=x.blockers.get(D)||Xo;return Me.get(D)!==N&&Me.set(D,N),M}function gs(D){x.blockers.delete(D),Me.delete(D)}function Ai(D,N){let M=x.blockers.get(D)||Xo;pe(M.state==="unblocked"&&N.state==="blocked"||M.state==="blocked"&&N.state==="blocked"||M.state==="blocked"&&N.state==="proceeding"||M.state==="blocked"&&N.state==="unblocked"||M.state==="proceeding"&&N.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+N.state);let j=new Map(x.blockers);j.set(D,N),nt({blockers:j})}function xo(D){let{currentLocation:N,nextLocation:M,historyAction:j}=D;if(Me.size===0)return;Me.size>1&&no(!1,"A router only supports one blocker at a time");let K=Array.from(Me.entries()),[J,se]=K[K.length-1],W=x.blockers.get(J);if(!(W&&W.state==="proceeding")&&se({currentLocation:N,nextLocation:M,historyAction:j}))return J}function ir(D){let N=zt(404,{pathname:D}),M=l||o,{matches:j,route:K}=Ty(M);return Pi(),{notFoundMatches:j,route:K,error:N}}function Mr(D,N){let M=N.partialMatches,j=M[M.length-1].route,K=zt(400,{type:"route-discovery",routeId:j.id,pathname:D,message:N.error!=null&&"message"in N.error?N.error:String(N.error)});return{notFoundMatches:M,route:j,error:K}}function Pi(D){let N=[];return ze.forEach((M,j)=>{(!D||D(j))&&(M.cancel(),N.push(j),ze.delete(j))}),N}function sr(D,N,M){if(C=D,O=N,k=M||null,!I&&x.navigation===Qh){I=!0;let j=bo(x.location,x.matches);j!=null&&nt({restoreScrollPosition:j})}return()=>{C=null,O=null,k=null}}function No(D,N){return k&&k(D,N.map(j=>PR(j,x.loaderData)))||D.key}function ys(D,N){if(C&&O){let M=No(D,N);C[M]=O()}}function bo(D,N){if(C){let M=No(D,N),j=C[M];if(typeof j=="number")return j}return null}function or(D,N,M){if(d)if(D){let j=D[D.length-1].route;if(j.path&&(j.path==="*"||j.path.endsWith("/*")))return{active:!0,matches:Eu(N,M,u,!0)}}else return{active:!0,matches:Eu(N,M,u,!0)||[]};return{active:!1,matches:null}}async function Ci(D,N,M){let j=D,K=j.length>0?j[j.length-1].route:null;for(;;){let J=l==null,se=l||o;try{await nA(d,N,j,se,s,i,en,M)}catch(Z){return{type:"error",error:Z,partialMatches:j}}finally{J&&(o=[...o])}if(M.aborted)return{type:"aborted"};let W=Li(se,N,u),ue=!1;if(W){let Z=W[W.length-1].route;if(Z.index)return{type:"success",matches:W};if(Z.path&&Z.path.length>0)if(Z.path==="*")ue=!0;else return{type:"success",matches:W}}let ee=Eu(se,N,u,!0);if(!ee||j.map(Z=>Z.route.id).join("-")===ee.map(Z=>Z.route.id).join("-"))return{type:"success",matches:ue?W:null};if(j=ee,K=j[j.length-1].route,K.path==="*")return{type:"success",matches:j}}}function vt(D){s={},l=Ga(D,i,void 0,s)}function kl(D,N){let M=l==null;yw(D,N,l||o,s,i),M&&(o=[...o],nt({}))}return z={get basename(){return u},get future(){return p},get state(){return x},get routes(){return o},get window(){return e},initialize:jt,subscribe:Ze,enableScrollRestoration:sr,navigate:Si,fetch:Pl,revalidate:ds,createHref:D=>t.history.createHref(D),encodeLocation:D=>t.history.encodeLocation(D),getFetcher:ko,deleteFetcher:Ri,dispose:Je,getBlocker:gh,deleteBlocker:gs,patchRoutes:kl,_internalFetchControllers:Ie,_internalActiveDeferreds:ze,_internalSetRoutes:vt},z}function ZR(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function sf(t,e,n,r,i,s,o,l){let u,c;if(o){u=[];for(let p of e)if(u.push(p),p.route.id===o){c=p;break}}else u=e,c=e[e.length-1];let d=Uc(i||".",Fc(u,s),vo(t.pathname,n)||t.pathname,l==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Cp(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:_r([n,d.pathname])),Ji(d)}function fy(t,e,n,r){if(!r||!ZR(r))return{path:n};if(r.formMethod&&!fA(r.formMethod))return{path:n,error:zt(405,{method:r.formMethod})};let i=()=>({path:n,error:zt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=vw(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Vn(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((E,C)=>{let[k,O]=C;return""+E+k+"="+O+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Vn(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}pe(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=of(r.formData),c=r.formData;else if(r.body instanceof FormData)u=of(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=vy(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=vy(u)}catch{return i()}let d={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Vn(d.formMethod))return{path:n,submission:d};let p=wi(n);return e&&p.search&&Cp(p.search)&&u.append("index",""),p.search="?"+u,{path:Ji(p),submission:d}}function eA(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function py(t,e,n,r,i,s,o,l,u,c,d,p,m,E,C,k){let O=k?an(k[1])?k[1].error:k[1].data:void 0,I=t.createURL(e.location),_=t.createURL(i),A=k&&an(k[1])?k[0]:void 0,V=A?eA(n,A):n,z=k?k[1].statusCode:void 0,x=o&&z&&z>=400,w=V.filter((v,S)=>{let{route:P}=v;if(P.lazy)return!0;if(P.loader==null)return!1;if(s)return typeof P.loader!="function"||P.loader.hydrate?!0:e.loaderData[P.id]===void 0&&(!e.errors||e.errors[P.id]===void 0);if(tA(e.loaderData,e.matches[S],v)||u.some(Re=>Re===v.route.id))return!0;let b=e.matches[S],T=v;return my(v,He({currentUrl:I,currentParams:b.params,nextUrl:_,nextParams:T.params},r,{actionResult:O,unstable_actionStatus:z,defaultShouldRevalidate:x?!1:l||I.pathname+I.search===_.pathname+_.search||I.search!==_.search||gw(b,T)}))}),y=[];return p.forEach((v,S)=>{if(s||!n.some(yt=>yt.route.id===v.routeId)||d.has(S))return;let P=Li(E,v.path,C);if(!P){y.push({key:S,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let b=e.fetchers.get(S),T=aa(P,v.path),Re=!1;m.has(S)?Re=!1:c.includes(S)?Re=!0:b&&b.state!=="idle"&&b.data===void 0?Re=l:Re=my(T,He({currentUrl:I,currentParams:e.matches[e.matches.length-1].params,nextUrl:_,nextParams:n[n.length-1].params},r,{actionResult:O,unstable_actionStatus:z,defaultShouldRevalidate:x?!1:l})),Re&&y.push({key:S,routeId:v.routeId,path:v.path,matches:P,match:T,controller:new AbortController})}),[w,y]}function tA(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function gw(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function my(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function nA(t,e,n,r,i,s,o,l){let u=[e,...n.map(c=>c.route.id)].join("-");try{let c=o.get(u);c||(c=t({path:e,matches:n,patch:(d,p)=>{l.aborted||yw(d,p,r,i,s)}}),o.set(u,c)),c&&cA(c)&&await c}finally{o.delete(u)}}function yw(t,e,n,r,i){if(t){var s;let o=r[t];pe(o,"No route found to patch children into: routeId = "+t);let l=Ga(e,i,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...l):o.children=l}else{let o=Ga(e,i,["patch",String(n.length||"0")],r);n.push(...o)}}async function gy(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];pe(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";no(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!RR.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,He({},e(i),{lazy:void 0}))}function rA(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function iA(t,e,n,r,i,s,o,l){let u=r.reduce((p,m)=>p.add(m.route.id),new Set),c=new Set,d=await t({matches:i.map(p=>{let m=u.has(p.route.id);return He({},p,{shouldLoad:m,resolve:C=>(c.add(p.route.id),m?sA(e,n,p,s,o,C,l):Promise.resolve({type:be.data,result:void 0}))})}),request:n,params:i[0].params,context:l});return i.forEach(p=>pe(c.has(p.route.id),'`match.resolve()` was not called for route id "'+p.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((p,m)=>u.has(i[m].route.id))}async function sA(t,e,n,r,i,s,o){let l,u,c=d=>{let p,m=new Promise((k,O)=>p=O);u=()=>p(),e.signal.addEventListener("abort",u);let E=k=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...k!==void 0?[k]:[]),C;return s?C=s(k=>E(k)):C=(async()=>{try{return{type:"data",result:await E()}}catch(k){return{type:"error",result:k}}})(),Promise.race([C,m])};try{let d=n.route[t];if(n.route.lazy)if(d){let p,[m]=await Promise.all([c(d).catch(E=>{p=E}),gy(n.route,i,r)]);if(p!==void 0)throw p;l=m}else if(await gy(n.route,i,r),d=n.route[t],d)l=await c(d);else if(t==="action"){let p=new URL(e.url),m=p.pathname+p.search;throw zt(405,{method:e.method,pathname:m,routeId:n.route.id})}else return{type:be.data,result:void 0};else if(d)l=await c(d);else{let p=new URL(e.url),m=p.pathname+p.search;throw zt(404,{pathname:m})}pe(l.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:be.error,result:d}}finally{u&&e.signal.removeEventListener("abort",u)}return l}async function oA(t){let{result:e,type:n,status:r}=t;if(_w(e)){let o;try{let l=e.headers.get("Content-Type");l&&/\bapplication\/json\b/.test(l)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(l){return{type:be.error,error:l}}return n===be.error?{type:be.error,error:new Ap(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:be.data,data:o,statusCode:e.status,headers:e.headers}}if(n===be.error)return{type:be.error,error:e,statusCode:jc(e)?e.status:r};if(dA(e)){var i,s;return{type:be.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:be.data,data:e,statusCode:r}}function aA(t,e,n,r,i,s){let o=t.headers.get("Location");if(pe(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Pp.test(o)){let l=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=sf(new URL(e.url),l,i,!0,o,s),t.headers.set("Location",o)}return t}function yy(t,e,n){if(Pp.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=vo(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Is(t,e,n,r){let i=t.createURL(vw(e)).toString(),s={signal:n};if(r&&Vn(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=of(r.formData):s.body=r.formData}return new Request(i,s)}function of(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function vy(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function lA(t,e,n,r,i,s){let o={},l=null,u,c=!1,d={},p=r&&an(r[1])?r[1].error:void 0;return n.forEach((m,E)=>{let C=e[E].route.id;if(pe(!ji(m),"Cannot handle redirect results in processLoaderData"),an(m)){let k=m.error;p!==void 0&&(k=p,p=void 0),l=l||{};{let O=Ia(t,C);l[O.route.id]==null&&(l[O.route.id]=k)}o[C]=void 0,c||(c=!0,u=jc(m.error)?m.error.status:500),m.headers&&(d[C]=m.headers)}else Ui(m)?(i.set(C,m.deferredData),o[C]=m.deferredData.data,m.statusCode!=null&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[C]=m.headers)):(o[C]=m.data,m.statusCode&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[C]=m.headers))}),p!==void 0&&r&&(l={[r[0]]:p},o[r[0]]=void 0),{loaderData:o,errors:l,statusCode:u||200,loaderHeaders:d}}function _y(t,e,n,r,i,s,o,l){let{loaderData:u,errors:c}=lA(e,n,r,i,l);for(let d=0;d<s.length;d++){let{key:p,match:m,controller:E}=s[d];pe(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let C=o[d];if(!(E&&E.signal.aborted))if(an(C)){let k=Ia(t.matches,m==null?void 0:m.route.id);c&&c[k.route.id]||(c=He({},c,{[k.route.id]:C.error})),t.fetchers.delete(p)}else if(ji(C))pe(!1,"Unhandled fetcher revalidation redirect");else if(Ui(C))pe(!1,"Unhandled fetcher deferred data");else{let k=$r(C.data);t.fetchers.set(p,k)}}return{loaderData:u,errors:c}}function wy(t,e,n,r){let i=He({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Ey(t){return t?an(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Ia(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Ty(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function zt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,l="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(l="Bad Request",s==="route-discovery"?u='Unable to match URL "'+n+'" - the `children()` function for '+("route `"+r+"` threw the following error:\n"+o):i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(l="Not Found",u='No route matches URL "'+n+'"'):t===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Ap(t||500,l,new Error(u),!0)}function Iy(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(ji(n))return{result:n,idx:e}}}function vw(t){let e=typeof t=="string"?wi(t):t;return Ji(He({},e,{hash:""}))}function uA(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function cA(t){return typeof t=="object"&&t!=null&&"then"in t}function hA(t){return _w(t.result)&&GR.has(t.result.status)}function Ui(t){return t.type===be.deferred}function an(t){return t.type===be.error}function ji(t){return(t&&t.type)===be.redirect}function dA(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function _w(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function fA(t){return KR.has(t.toLowerCase())}function Vn(t){return WR.has(t.toLowerCase())}async function Sy(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let l=n[o],u=e[o];if(!u)continue;let c=t.find(p=>p.route.id===u.route.id),d=c!=null&&!gw(c,u)&&(s&&s[u.route.id])!==void 0;if(Ui(l)&&(i||d)){let p=r[o];pe(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await ww(l,p,i).then(m=>{m&&(n[o]=m||n[o])})}}}async function ww(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:be.data,data:t.deferredData.unwrappedData}}catch(i){return{type:be.error,error:i}}return{type:be.data,data:t.deferredData.data}}}function Cp(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function aa(t,e){let n=typeof e=="string"?wi(e).search:e.search;if(t[t.length-1].route.index&&Cp(n||""))return t[t.length-1];let r=fw(t);return r[r.length-1]}function Ry(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Yh(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function pA(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Jo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function mA(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function $r(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function gA(t,e){try{let n=t.sessionStorage.getItem(mw);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function yA(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(mw,JSON.stringify(n))}catch(r){no(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tc(){return tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tc.apply(this,arguments)}const zc=U.createContext(null),Ew=U.createContext(null),Ei=U.createContext(null),kp=U.createContext(null),kr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),Tw=U.createContext(null);function vA(t,e){let{relative:n}=e===void 0?{}:e;_o()||pe(!1);let{basename:r,navigator:i}=U.useContext(Ei),{hash:s,pathname:o,search:l}=Sw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:_r([r,o])),i.createHref({pathname:u,search:l,hash:s})}function _o(){return U.useContext(kp)!=null}function fl(){return _o()||pe(!1),U.useContext(kp).location}function Iw(t){U.useContext(Ei).static||U.useLayoutEffect(t)}function Dp(){let{isDataRoute:t}=U.useContext(kr);return t?xA():_A()}function _A(){_o()||pe(!1);let t=U.useContext(zc),{basename:e,future:n,navigator:r}=U.useContext(Ei),{matches:i}=U.useContext(kr),{pathname:s}=fl(),o=JSON.stringify(Fc(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return Iw(()=>{l.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Uc(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:_r([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function wA(){let{matches:t}=U.useContext(kr),e=t[t.length-1];return e?e.params:{}}function Sw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(Ei),{matches:i}=U.useContext(kr),{pathname:s}=fl(),o=JSON.stringify(Fc(i,r.v7_relativeSplatPath));return U.useMemo(()=>Uc(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function EA(t,e,n,r){_o()||pe(!1);let{navigator:i}=U.useContext(Ei),{matches:s}=U.useContext(kr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=fl(),d;d=c;let p=d.pathname||"/",m=p;if(u!=="/"){let k=u.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let E=Li(t,{pathname:m});return AA(E&&E.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:_r([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:_r([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r)}function TA(){let t=DA(),e=jc(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const IA=U.createElement(TA,null);class SA extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(kr.Provider,{value:this.props.routeContext},U.createElement(Tw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RA(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(zc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(kr.Provider,{value:e},r)}function AA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||pe(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:E}=n,C=p.route.loader&&m[p.route.id]===void 0&&(!E||E[p.route.id]===void 0);if(p.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let E,C=!1,k=null,O=null;n&&(E=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||IA,u&&(c<0&&m===0?(NA("route-fallback"),C=!0,O=null):c===m&&(C=!0,O=p.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),_=()=>{let A;return E?A=k:C?A=O:p.route.Component?A=U.createElement(p.route.Component,null):p.route.element?A=p.route.element:A=d,U.createElement(RA,{match:p,routeContext:{outlet:d,matches:I,isDataRoute:n!=null},children:A})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?U.createElement(SA,{location:n.location,revalidation:n.revalidation,component:k,error:E,children:_(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):_()},null)}var Rw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Rw||{}),nc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(nc||{});function PA(t){let e=U.useContext(zc);return e||pe(!1),e}function CA(t){let e=U.useContext(Ew);return e||pe(!1),e}function kA(t){let e=U.useContext(kr);return e||pe(!1),e}function Aw(t){let e=kA(),n=e.matches[e.matches.length-1];return n.route.id||pe(!1),n.route.id}function DA(){var t;let e=U.useContext(Tw),n=CA(nc.UseRouteError),r=Aw(nc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function xA(){let{router:t}=PA(Rw.UseNavigateStable),e=Aw(nc.UseNavigateStable),n=U.useRef(!1);return Iw(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,tc({fromRouteId:e},s)))},[t,e])}const Ay={};function NA(t,e,n){Ay[t]||(Ay[t]=!0)}function Bc(t){let{to:e,replace:n,state:r,relative:i}=t;_o()||pe(!1);let{future:s,static:o}=U.useContext(Ei),{matches:l}=U.useContext(kr),{pathname:u}=fl(),c=Dp(),d=Uc(e,Fc(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return U.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function bA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=it.Pop,navigator:s,static:o=!1,future:l}=t;_o()&&pe(!1);let u=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:s,static:o,future:tc({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=wi(r));let{pathname:d="/",search:p="",hash:m="",state:E=null,key:C="default"}=r,k=U.useMemo(()=>{let O=vo(d,u);return O==null?null:{location:{pathname:O,search:p,hash:m,state:E,key:C},navigationType:i}},[u,d,p,m,E,C,i]);return k==null?null:U.createElement(Ei.Provider,{value:c},U.createElement(kp.Provider,{children:n,value:k}))}new Promise(()=>{});function OA(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:U.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:U.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:U.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qa(){return Qa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qa.apply(this,arguments)}function LA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function MA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function VA(t,e){return t.button===0&&(!e||e==="_self")&&!MA(t)}const FA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],UA="6";try{window.__reactRouterVersion=UA}catch{}function jA(t,e){return JR({basename:void 0,future:Qa({},void 0,{v7_prependBasename:!0}),history:TR({window:void 0}),hydrationData:zA(),routes:t,mapRouteProperties:OA,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function zA(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Qa({},e,{errors:BA(e.errors)})),e}function BA(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Ap(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const $A=U.createContext({isTransitioning:!1}),HA=U.createContext(new Map),WA="startTransition",Py=uS[WA],qA="flushSync",Cy=ER[qA];function KA(t){Py?Py(t):t()}function Zo(t){Cy?Cy(t):t()}let GA=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function QA(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=U.useState(n.state),[o,l]=U.useState(),[u,c]=U.useState({isTransitioning:!1}),[d,p]=U.useState(),[m,E]=U.useState(),[C,k]=U.useState(),O=U.useRef(new Map),{v7_startTransition:I}=r||{},_=U.useCallback(w=>{I?KA(w):w()},[I]),A=U.useCallback((w,y)=>{let{deletedFetchers:v,unstable_flushSync:S,unstable_viewTransitionOpts:P}=y;v.forEach(T=>O.current.delete(T)),w.fetchers.forEach((T,Re)=>{T.data!==void 0&&O.current.set(Re,T.data)});let b=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!P||b){S?Zo(()=>s(w)):_(()=>s(w));return}if(S){Zo(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:P.currentLocation,nextLocation:P.nextLocation})});let T=n.window.document.startViewTransition(()=>{Zo(()=>s(w))});T.finished.finally(()=>{Zo(()=>{p(void 0),E(void 0),l(void 0),c({isTransitioning:!1})})}),Zo(()=>E(T));return}m?(d&&d.resolve(),m.skipTransition(),k({state:w,currentLocation:P.currentLocation,nextLocation:P.nextLocation})):(l(w),c({isTransitioning:!0,flushSync:!1,currentLocation:P.currentLocation,nextLocation:P.nextLocation}))},[n.window,m,d,O,_]);U.useLayoutEffect(()=>n.subscribe(A),[n,A]),U.useEffect(()=>{u.isTransitioning&&!u.flushSync&&p(new GA)},[u]),U.useEffect(()=>{if(d&&o&&n.window){let w=o,y=d.promise,v=n.window.document.startViewTransition(async()=>{_(()=>s(w)),await y});v.finished.finally(()=>{p(void 0),E(void 0),l(void 0),c({isTransitioning:!1})}),E(v)}},[_,o,d,n.window]),U.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),U.useEffect(()=>{!u.isTransitioning&&C&&(l(C.state),c({isTransitioning:!0,flushSync:!1,currentLocation:C.currentLocation,nextLocation:C.nextLocation}),k(void 0))},[u.isTransitioning,C]),U.useEffect(()=>{},[]);let V=U.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:w=>n.navigate(w),push:(w,y,v)=>n.navigate(w,{state:y,preventScrollReset:v==null?void 0:v.preventScrollReset}),replace:(w,y,v)=>n.navigate(w,{replace:!0,state:y,preventScrollReset:v==null?void 0:v.preventScrollReset})}),[n]),z=n.basename||"/",x=U.useMemo(()=>({router:n,navigator:V,static:!1,basename:z}),[n,V,z]);return U.createElement(U.Fragment,null,U.createElement(zc.Provider,{value:x},U.createElement(Ew.Provider,{value:i},U.createElement(HA.Provider,{value:O.current},U.createElement($A.Provider,{value:u},U.createElement(bA,{basename:z,location:i.location,navigationType:i.historyAction,navigator:V,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?U.createElement(YA,{routes:n.routes,future:n.future,state:i}):e))))),null)}function YA(t){let{routes:e,future:n,state:r}=t;return EA(e,void 0,r,n)}const XA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",JA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ro=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,unstable_viewTransition:p}=e,m=LA(e,FA),{basename:E}=U.useContext(Ei),C,k=!1;if(typeof c=="string"&&JA.test(c)&&(C=c,XA))try{let A=new URL(window.location.href),V=c.startsWith("//")?new URL(A.protocol+c):new URL(c),z=vo(V.pathname,E);V.origin===A.origin&&z!=null?c=z+V.search+V.hash:k=!0}catch{}let O=vA(c,{relative:i}),I=ZA(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:p});function _(A){r&&r(A),A.defaultPrevented||I(A)}return U.createElement("a",Qa({},m,{href:C||O,onClick:k||s?r:_,ref:n,target:u}))});var ky;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ky||(ky={}));var Dy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dy||(Dy={}));function ZA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Dp(),c=fl(),d=Sw(t,{relative:o});return U.useCallback(p=>{if(VA(p,n)){p.preventDefault();let m=r!==void 0?r:Ji(c)===Ji(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}const $c="/Timelines/assets/Logo-1QK56hxG.png";function eP(){return R.jsx(R.Fragment,{children:R.jsxs("div",{className:"header",children:[R.jsxs("div",{className:"header-logo",children:[R.jsx("img",{src:$c,style:{width:24}}),"Lifelines"]}),R.jsxs("div",{children:[R.jsx(ro,{to:"/Timelines/login",children:R.jsx("button",{className:"header-sign-in-button",children:"Log in"})}),R.jsx(ro,{to:"/Timelines/sign-up",children:R.jsx("button",{className:"header-sign-up-button",children:"Sign up"})})]})]})})}function tP(){return R.jsx(R.Fragment,{children:R.jsx("div",{className:"footer",children:"Lifelines ©2024"})})}var xy={};/**
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
 */const Pw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Cw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[p],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new rP;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iP=function(t){const e=Pw(t);return Cw.encodeByteArray(e,!0)},rc=function(t){return iP(t).replace(/\./g,"")},kw=function(t){try{return Cw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ic(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!sP(n)||(t[n]=ic(t[n],e[n]));return t}function sP(t){return t!=="__proto__"}/**
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
 */function oP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aP=()=>oP().__FIREBASE_DEFAULTS__,lP=()=>{if(typeof process>"u"||typeof xy>"u")return;const t=xy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kw(t[1]);return e&&JSON.parse(e)},Hc=()=>{try{return aP()||lP()||uP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dw=t=>{var e,n;return(n=(e=Hc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cP=t=>{const e=Dw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xw=()=>{var t;return(t=Hc())===null||t===void 0?void 0:t.config},Nw=t=>{var e;return(e=Hc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class hP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function dP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[rc(JSON.stringify(n)),rc(JSON.stringify(o)),""].join(".")}/**
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
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function pP(){var t;const e=(t=Hc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bw(){return typeof window<"u"||Ow()}function Ow(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Lw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gP(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yP(){return!pP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mw(){try{return typeof indexedDB=="object"}catch{return!1}}function Vw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function vP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _P="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_P,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dr.prototype.create)}}class Dr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new kn(i,l,r)}}function wP(t,e){return t.replace(EP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const EP=/\{\$([^}]+)}/g;/**
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
 */function Ny(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function TP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ya(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(by(s)&&by(o)){if(!Ya(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function by(t){return t!==null&&typeof t=="object"}/**
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
 */function pl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function la(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ua(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Fw(t,e){const n=new IP(t,e);return n.subscribe.bind(n)}class IP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xh),i.error===void 0&&(i.error=Xh),i.complete===void 0&&(i.complete=Xh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xh(){}/**
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
 */const RP=1e3,AP=2,PP=4*60*60*1e3,CP=.5;function Oy(t,e=RP,n=AP){const r=e*Math.pow(n,t),i=Math.round(CP*r*(Math.random()-.5)*2);return Math.min(PP,r+i)}/**
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
 */function ft(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Oi="[DEFAULT]";/**
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
 */class kP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xP(e))try{this.getOrInitializeService({instanceIdentifier:Oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Oi){return this.instances.has(e)}getOptions(e=Oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Oi){return this.component?this.component.multipleInstances?e:Oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DP(t){return t===Oi?void 0:t}function xP(t){return t.instantiationMode==="EAGER"}/**
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
 */class Uw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const xp=[];var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const jw={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},NP=ve.INFO,bP={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},OP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=NP,this._logHandler=OP,this._userLogHandler=null,xp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}function LP(t){xp.forEach(e=>{e.setLogLevel(t)})}function MP(t,e){for(const n of xp){let r=null;e&&e.level&&(r=jw[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const l=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:ve[s].toLowerCase(),message:l,args:o,type:i.name})}}}const VP=(t,e)=>e.some(n=>t instanceof n);let Ly,My;function FP(){return Ly||(Ly=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UP(){return My||(My=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zw=new WeakMap,af=new WeakMap,Bw=new WeakMap,Jh=new WeakMap,Np=new WeakMap;function jP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(li(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zw.set(n,t)}).catch(()=>{}),Np.set(e,t),e}function zP(t){if(af.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});af.set(t,e)}let lf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return af.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return li(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BP(t){lf=t(lf)}function $P(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zh(this),e,...n);return Bw.set(r,e.sort?e.sort():[e]),li(r)}:UP().includes(t)?function(...e){return t.apply(Zh(this),e),li(zw.get(this))}:function(...e){return li(t.apply(Zh(this),e))}}function HP(t){return typeof t=="function"?$P(t):(t instanceof IDBTransaction&&zP(t),VP(t,FP())?new Proxy(t,lf):t)}function li(t){if(t instanceof IDBRequest)return jP(t);if(Jh.has(t))return Jh.get(t);const e=HP(t);return e!==t&&(Jh.set(t,e),Np.set(e,t)),e}const Zh=t=>Np.get(t);function $w(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=li(o);return r&&o.addEventListener("upgradeneeded",u=>{r(li(o.result),u.oldVersion,u.newVersion,li(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const WP=["get","getKey","getAll","getAllKeys","count"],qP=["put","add","delete","clear"],ed=new Map;function Vy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ed.get(e))return ed.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return ed.set(e,s),s}BP(t=>({...t,get:(e,n,r)=>Vy(e,n)||t.get(e,n,r),has:(e,n)=>!!Vy(e,n)||t.has(e,n)}));/**
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
 */class KP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sc="@firebase/app",uf="0.10.6";/**
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
 */const Zi=new ml("@firebase/app"),QP="@firebase/app-compat",YP="@firebase/analytics-compat",XP="@firebase/analytics",JP="@firebase/app-check-compat",ZP="@firebase/app-check",eC="@firebase/auth",tC="@firebase/auth-compat",nC="@firebase/database",rC="@firebase/database-compat",iC="@firebase/functions",sC="@firebase/functions-compat",oC="@firebase/installations",aC="@firebase/installations-compat",lC="@firebase/messaging",uC="@firebase/messaging-compat",cC="@firebase/performance",hC="@firebase/performance-compat",dC="@firebase/remote-config",fC="@firebase/remote-config-compat",pC="@firebase/storage",mC="@firebase/storage-compat",gC="@firebase/firestore",yC="@firebase/vertexai-preview",vC="@firebase/firestore-compat",_C="firebase",wC="10.12.3";/**
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
 */const di="[DEFAULT]",EC={[sc]:"fire-core",[QP]:"fire-core-compat",[XP]:"fire-analytics",[YP]:"fire-analytics-compat",[ZP]:"fire-app-check",[JP]:"fire-app-check-compat",[eC]:"fire-auth",[tC]:"fire-auth-compat",[nC]:"fire-rtdb",[rC]:"fire-rtdb-compat",[iC]:"fire-fn",[sC]:"fire-fn-compat",[oC]:"fire-iid",[aC]:"fire-iid-compat",[lC]:"fire-fcm",[uC]:"fire-fcm-compat",[cC]:"fire-perf",[hC]:"fire-perf-compat",[dC]:"fire-rc",[fC]:"fire-rc-compat",[pC]:"fire-gcs",[mC]:"fire-gcs-compat",[gC]:"fire-fst",[vC]:"fire-fst-compat",[yC]:"fire-vertex","fire-js":"fire-js",[_C]:"fire-js-all"};/**
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
 */const fi=new Map,io=new Map,so=new Map;function Xa(t,e){try{t.container.addComponent(e)}catch(n){Zi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hw(t,e){t.container.addOrOverwriteComponent(e)}function Pn(t){const e=t.name;if(so.has(e))return Zi.debug(`There were multiple attempts to register component ${e}.`),!1;so.set(e,t);for(const n of fi.values())Xa(n,t);for(const n of io.values())Xa(n,t);return!0}function xr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function TC(t,e,n=di){xr(t,e).clearInstance(n)}function Ww(t){return t.options!==void 0}function En(t){return t.settings!==void 0}function IC(){so.clear()}/**
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
 */const SC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},In=new Dr("app","Firebase",SC);/**
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
 */let qw=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}};/**
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
 */class RC extends qw{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const l=e;super(l.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,Vt(sc,uf,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){bp(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw In.create("server-app-deleted")}}/**
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
 */const Ti=wC;function Wc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:di,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw In.create("bad-app-name",{appName:String(i)});if(n||(n=xw()),!n)throw In.create("no-options");const s=fi.get(i);if(s){if(Ya(n,s.options)&&Ya(r,s.config))return s;throw In.create("duplicate-app",{appName:i})}const o=new Uw(i);for(const u of so.values())o.addComponent(u);const l=new qw(n,r,o);return fi.set(i,l),l}function AC(t,e){if(bw()&&!Ow())throw In.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;Ww(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,p)=>Math.imul(31,d)+p.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw In.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=io.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const l=new Uw(s);for(const c of so.values())l.addComponent(c);const u=new RC(n,e,s,l);return io.set(s,u),u}function qc(t=di){const e=fi.get(t);if(!e&&t===di&&xw())return Wc();if(!e)throw In.create("no-app",{appName:t});return e}function PC(){return Array.from(fi.values())}async function bp(t){let e=!1;const n=t.name;fi.has(n)?(e=!0,fi.delete(n)):io.has(n)&&t.decRefCount()<=0&&(io.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Vt(t,e,n){var r;let i=(r=EC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zi.warn(l.join(" "));return}Pn(new An(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Kw(t,e){if(t!==null&&typeof t!="function")throw In.create("invalid-log-argument");MP(t,e)}function Gw(t){LP(t)}/**
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
 */const CC="firebase-heartbeat-database",kC=1,Ja="firebase-heartbeat-store";let td=null;function Qw(){return td||(td=$w(CC,kC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ja)}catch(n){console.warn(n)}}}}).catch(t=>{throw In.create("idb-open",{originalErrorMessage:t.message})})),td}async function DC(t){try{const n=(await Qw()).transaction(Ja),r=await n.objectStore(Ja).get(Yw(t));return await n.done,r}catch(e){if(e instanceof kn)Zi.warn(e.message);else{const n=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zi.warn(n.message)}}}async function Fy(t,e){try{const r=(await Qw()).transaction(Ja,"readwrite");await r.objectStore(Ja).put(e,Yw(t)),await r.done}catch(n){if(n instanceof kn)Zi.warn(n.message);else{const r=In.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zi.warn(r.message)}}}function Yw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xC=1024,NC=30*24*60*60*1e3;class bC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=NC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uy(),{heartbeatsToSend:r,unsentEntries:i}=OC(this._heartbeatsCache.heartbeats),s=rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Uy(){return new Date().toISOString().substring(0,10)}function OC(t,e=xC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mw()?Vw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await DC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jy(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function MC(t){Pn(new An("platform-logger",e=>new KP(e),"PRIVATE")),Pn(new An("heartbeat",e=>new bC(e),"PRIVATE")),Vt(sc,uf,t),Vt(sc,uf,"esm2017"),Vt("fire-js","")}MC("");const VC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:kn,SDK_VERSION:Ti,_DEFAULT_ENTRY_NAME:di,_addComponent:Xa,_addOrOverwriteComponent:Hw,_apps:fi,_clearComponents:IC,_components:so,_getProvider:xr,_isFirebaseApp:Ww,_isFirebaseServerApp:En,_registerComponent:Pn,_removeServiceInstance:TC,_serverApps:io,deleteApp:bp,getApp:qc,getApps:PC,initializeApp:Wc,initializeServerApp:AC,onLog:Kw,registerVersion:Vt,setLogLevel:Gw},Symbol.toStringTag,{value:"Module"}));var FC="firebase",UC="10.12.3";/**
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
 */Vt(FC,UC,"app");const Xw="@firebase/installations",Op="0.6.8";/**
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
 */const Jw=1e4,Zw=`w:${Op}`,eE="FIS_v2",jC="https://firebaseinstallations.googleapis.com/v1",zC=60*60*1e3,BC="installations",$C="Installations";/**
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
 */const HC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},es=new Dr(BC,$C,HC);function tE(t){return t instanceof kn&&t.code.includes("request-failed")}/**
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
 */function nE({projectId:t}){return`${jC}/projects/${t}/installations`}function rE(t){return{token:t.token,requestStatus:2,expiresIn:qC(t.expiresIn),creationTime:Date.now()}}async function iE(t,e){const r=(await e.json()).error;return es.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function sE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function WC(t,{refreshToken:e}){const n=sE(t);return n.append("Authorization",KC(e)),n}async function oE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function qC(t){return Number(t.replace("s","000"))}function KC(t){return`${eE} ${t}`}/**
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
 */async function GC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=nE(t),i=sE(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:eE,appId:t.appId,sdkVersion:Zw},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await oE(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:rE(c.authToken)}}else throw await iE("Create Installation",u)}/**
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
 */function aE(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function QC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const YC=/^[cdef][\w-]{21}$/,cf="";function XC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=JC(t);return YC.test(n)?n:cf}catch{return cf}}function JC(t){return QC(t).substr(0,22)}/**
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
 */function Kc(t){return`${t.appName}!${t.appId}`}/**
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
 */const lE=new Map;function uE(t,e){const n=Kc(t);cE(n,e),ZC(n,e)}function cE(t,e){const n=lE.get(t);if(n)for(const r of n)r(e)}function ZC(t,e){const n=ek();n&&n.postMessage({key:t,fid:e}),tk()}let zi=null;function ek(){return!zi&&"BroadcastChannel"in self&&(zi=new BroadcastChannel("[Firebase] FID Change"),zi.onmessage=t=>{cE(t.data.key,t.data.fid)}),zi}function tk(){lE.size===0&&zi&&(zi.close(),zi=null)}/**
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
 */const nk="firebase-installations-database",rk=1,ts="firebase-installations-store";let nd=null;function Lp(){return nd||(nd=$w(nk,rk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ts)}}})),nd}async function oc(t,e){const n=Kc(t),i=(await Lp()).transaction(ts,"readwrite"),s=i.objectStore(ts),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&uE(t,e.fid),e}async function hE(t){const e=Kc(t),r=(await Lp()).transaction(ts,"readwrite");await r.objectStore(ts).delete(e),await r.done}async function Gc(t,e){const n=Kc(t),i=(await Lp()).transaction(ts,"readwrite"),s=i.objectStore(ts),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&uE(t,l.fid),l}/**
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
 */async function Mp(t){let e;const n=await Gc(t.appConfig,r=>{const i=ik(r),s=sk(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===cf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ik(t){const e=t||{fid:XC(),registrationStatus:0};return dE(e)}function sk(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(es.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ok(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ak(t)}:{installationEntry:e}}async function ok(t,e){try{const n=await GC(t,e);return oc(t.appConfig,n)}catch(n){throw tE(n)&&n.customData.serverCode===409?await hE(t.appConfig):await oc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ak(t){let e=await zy(t.appConfig);for(;e.registrationStatus===1;)await aE(100),e=await zy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Mp(t);return r||n}return e}function zy(t){return Gc(t,e=>{if(!e)throw es.create("installation-not-found");return dE(e)})}function dE(t){return lk(t)?{fid:t.fid,registrationStatus:0}:t}function lk(t){return t.registrationStatus===1&&t.registrationTime+Jw<Date.now()}/**
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
 */async function uk({appConfig:t,heartbeatServiceProvider:e},n){const r=ck(t,n),i=WC(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Zw,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await oE(()=>fetch(r,l));if(u.ok){const c=await u.json();return rE(c)}else throw await iE("Generate Auth Token",u)}function ck(t,{fid:e}){return`${nE(t)}/${e}/authTokens:generate`}/**
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
 */async function Vp(t,e=!1){let n;const r=await Gc(t.appConfig,s=>{if(!fE(s))throw es.create("not-registered");const o=s.authToken;if(!e&&fk(o))return s;if(o.requestStatus===1)return n=hk(t,e),s;{if(!navigator.onLine)throw es.create("app-offline");const l=mk(s);return n=dk(t,l),l}});return n?await n:r.authToken}async function hk(t,e){let n=await By(t.appConfig);for(;n.authToken.requestStatus===1;)await aE(100),n=await By(t.appConfig);const r=n.authToken;return r.requestStatus===0?Vp(t,e):r}function By(t){return Gc(t,e=>{if(!fE(e))throw es.create("not-registered");const n=e.authToken;return gk(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dk(t,e){try{const n=await uk(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await oc(t.appConfig,r),n}catch(n){if(tE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await oc(t.appConfig,r)}throw n}}function fE(t){return t!==void 0&&t.registrationStatus===2}function fk(t){return t.requestStatus===2&&!pk(t)}function pk(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+zC}function mk(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function gk(t){return t.requestStatus===1&&t.requestTime+Jw<Date.now()}/**
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
 */async function yk(t){const e=t,{installationEntry:n,registrationPromise:r}=await Mp(e);return r?r.catch(console.error):Vp(e).catch(console.error),n.fid}/**
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
 */async function vk(t,e=!1){const n=t;return await _k(n),(await Vp(n,e)).token}async function _k(t){const{registrationPromise:e}=await Mp(t);e&&await e}/**
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
 */function wk(t){if(!t||!t.options)throw rd("App Configuration");if(!t.name)throw rd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw rd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function rd(t){return es.create("missing-app-config-values",{valueName:t})}/**
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
 */const pE="installations",Ek="installations-internal",Tk=t=>{const e=t.getProvider("app").getImmediate(),n=wk(e),r=xr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ik=t=>{const e=t.getProvider("app").getImmediate(),n=xr(e,pE).getImmediate();return{getId:()=>yk(n),getToken:i=>vk(n,i)}};function Sk(){Pn(new An(pE,Tk,"PUBLIC")),Pn(new An(Ek,Ik,"PRIVATE"))}Sk();Vt(Xw,Op);Vt(Xw,Op,"esm2017");/**
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
 */const ac="analytics",Rk="firebase_id",Ak="origin",Pk=60*1e3,Ck="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Fp="https://www.googletagmanager.com/gtag/js";/**
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
 */const Jt=new ml("@firebase/analytics");/**
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
 */const kk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},hn=new Dr("analytics","Analytics",kk);/**
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
 */function Dk(t){if(!t.startsWith(Fp)){const e=hn.create("invalid-gtag-resource",{gtagURL:t});return Jt.warn(e.message),""}return t}function mE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function xk(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Nk(t,e){const n=xk("firebase-js-sdk-policy",{createScriptURL:Dk}),r=document.createElement("script"),i=`${Fp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function bk(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Ok(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await mE(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){Jt.error(l)}t("config",i,s)}async function Lk(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await mE(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Jt.error(s)}}function Mk(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await Lk(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await Ok(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Jt.error(l)}}return i}function Vk(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Mk(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Fk(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Fp)&&n.src.includes(t))return n;return null}/**
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
 */const Uk=30,jk=1e3;class zk{constructor(e={},n=jk){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gE=new zk;function Bk(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $k(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Bk(r)},s=Ck.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw hn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function Hk(t,e=gE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw hn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw hn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Kk;return setTimeout(async()=>{l.abort()},Pk),yE({appId:r,apiKey:i,measurementId:s},o,l,e)}async function yE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=gE){var s;const{appId:o,measurementId:l}=t;try{await Wk(r,e)}catch(u){if(l)return Jt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await $k(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!qk(c)){if(i.deleteThrottleMetadata(o),l)return Jt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Oy(n,i.intervalMillis,Uk):Oy(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),Jt.debug(`Calling attemptFetch again in ${d} millis`),yE(t,p,r,i)}}function Wk(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(hn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function qk(t){if(!(t instanceof kn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Kk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Gk(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function Qk(){if(Mw())try{await Vw()}catch(t){return Jt.warn(hn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Jt.warn(hn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Yk(t,e,n,r,i,s,o){var l;const u=Hk(t);u.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&Jt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>Jt.error(E)),e.push(u);const c=Qk().then(E=>{if(E)return r.getId()}),[d,p]=await Promise.all([u,c]);Fk(s)||Nk(s,d.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[Ak]="firebase",m.update=!0,p!=null&&(m[Rk]=p),i("config",d.measurementId,m),d.measurementId}/**
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
 */class Xk{constructor(e){this.app=e}_delete(){return delete Sa[this.app.options.appId],Promise.resolve()}}let Sa={},$y=[];const Hy={};let id="dataLayer",Jk="gtag",Wy,vE,qy=!1;function Zk(){const t=[];if(Lw()&&t.push("This is a browser extension environment."),vP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=hn.create("invalid-analytics-context",{errorInfo:e});Jt.warn(n.message)}}function e2(t,e,n){Zk();const r=t.options.appId;if(!r)throw hn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Jt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw hn.create("no-api-key");if(Sa[r]!=null)throw hn.create("already-exists",{id:r});if(!qy){bk(id);const{wrappedGtag:s,gtagCore:o}=Vk(Sa,$y,Hy,id,Jk);vE=s,Wy=o,qy=!0}return Sa[r]=Yk(t,$y,Hy,e,Wy,id,n),new Xk(t)}function t2(t=qc()){t=ft(t);const e=xr(t,ac);return e.isInitialized()?e.getImmediate():n2(t)}function n2(t,e={}){const n=xr(t,ac);if(n.isInitialized()){const i=n.getImmediate();if(Ya(e,n.getOptions()))return i;throw hn.create("already-initialized")}return n.initialize({options:e})}function r2(t,e,n,r){t=ft(t),Gk(vE,Sa[t.app.options.appId],e,n,r).catch(i=>Jt.error(i))}const Ky="@firebase/analytics",Gy="0.10.5";function i2(){Pn(new An(ac,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return e2(r,i,n)},"PUBLIC")),Pn(new An("analytics-internal",t,"PRIVATE")),Vt(Ky,Gy),Vt(Ky,Gy,"esm2017");function t(e){try{const n=e.getProvider(ac).getImmediate();return{logEvent:(r,i,s)=>r2(n,r,i,s)}}catch(n){throw hn.create("interop-component-reg-failed",{reason:n})}}}i2();function Up(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function _E(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const s2=_E,wE=new Dr("auth","Firebase",_E());/**
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
 */const lc=new ml("@firebase/auth");function o2(t,...e){lc.logLevel<=ve.WARN&&lc.warn(`Auth (${Ti}): ${t}`,...e)}function Tu(t,...e){lc.logLevel<=ve.ERROR&&lc.error(`Auth (${Ti}): ${t}`,...e)}/**
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
 */function Cn(t,...e){throw zp(t,...e)}function zn(t,...e){return zp(t,...e)}function jp(t,e,n){const r=Object.assign(Object.assign({},s2()),{[e]:n});return new Dr("auth","Firebase",r).create(e,{appName:t.name})}function wr(t){return jp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function a2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Cn(t,"argument-error"),jp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wE.create(t,...e)}function oe(t,e,...n){if(!t)throw zp(e,...n)}function mr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tu(e),new Error(e)}function Rr(t,e){t||mr(e)}/**
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
 */function hf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function l2(){return Qy()==="http:"||Qy()==="https:"}function Qy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function u2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(l2()||Lw()||"connection"in navigator)?navigator.onLine:!0}function c2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rr(n>e,"Short delay should be less than long delay!"),this.isMobile=fP()||mP()}get(){return u2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bp(t,e){Rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class EE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const h2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const d2=new gl(3e4,6e4);function Nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function br(t,e,n,r,i={}){return TE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=pl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),EE.fetch()(IE(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function TE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},h2),e);try{const i=new p2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw iu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw iu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw iu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw iu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jp(t,d,c);Cn(t,d)}}catch(i){if(i instanceof kn)throw i;Cn(t,"network-request-failed",{message:String(i)})}}async function yl(t,e,n,r,i={}){const s=await br(t,e,n,r,i);return"mfaPendingCredential"in s&&Cn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function IE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bp(t.config,i):`${t.config.apiScheme}://${i}`}function f2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class p2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zn(this.auth,"network-request-failed")),d2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function iu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=zn(t,e,r);return i.customData._tokenResponse=n,i}function Yy(t){return t!==void 0&&t.enterprise!==void 0}class m2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return f2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function g2(t,e){return br(t,"GET","/v2/recaptchaConfig",Nr(t,e))}/**
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
 */async function y2(t,e){return br(t,"POST","/v1/accounts:delete",e)}async function SE(t,e){return br(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ra(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function v2(t,e=!1){const n=ft(t),r=await n.getIdToken(e),i=$p(r);oe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ra(sd(i.auth_time)),issuedAtTime:Ra(sd(i.iat)),expirationTime:Ra(sd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sd(t){return Number(t)*1e3}function $p(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Tu("JWT malformed, contained fewer than 3 sections"),null;try{const i=kw(n);return i?JSON.parse(i):(Tu("Failed to decode base64 JWT payload"),null)}catch(i){return Tu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xy(t){const e=$p(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Za(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&_2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class w2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class df{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Za(t,SE(n,{idToken:r}));oe(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?RE(s.providerUserInfo):[],l=T2(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new df(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function E2(t){const e=ft(t);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function T2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function RE(t){return t.map(e=>{var{providerId:n}=e,r=Up(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function I2(t,e){const n=await TE(t,{},async()=>{const r=pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=IE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",EE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function S2(t,e){return br(t,"POST","/v2/accounts:revokeToken",Nr(t,e))}/**
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
 */class Ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Xy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await I2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ws;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(oe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(oe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ws,this.toJSON())}_performRefresh(){return mr("not implemented")}}/**
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
 */function Br(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Up(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new w2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new df(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Za(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return v2(this,e)}reload(){return E2(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(wr(this.auth));const e=await this.getIdToken();return await Za(this,y2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:A,emailVerified:V,isAnonymous:z,providerData:x,stsTokenManager:w}=n;oe(A&&w,e,"internal-error");const y=Ws.fromJSON(this.name,w);oe(typeof A=="string",e,"internal-error"),Br(p,e.name),Br(m,e.name),oe(typeof V=="boolean",e,"internal-error"),oe(typeof z=="boolean",e,"internal-error"),Br(E,e.name),Br(C,e.name),Br(k,e.name),Br(O,e.name),Br(I,e.name),Br(_,e.name);const v=new gr({uid:A,auth:e,email:m,emailVerified:V,displayName:p,isAnonymous:z,photoURL:C,phoneNumber:E,tenantId:k,stsTokenManager:y,createdAt:I,lastLoginAt:_});return x&&Array.isArray(x)&&(v.providerData=x.map(S=>Object.assign({},S))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ws;i.updateFromServerResponse(n);const s=new gr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];oe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?RE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ws;l.updateFromIdToken(r);const u=new gr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new df(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Jy=new Map;function yr(t){Rr(t instanceof Function,"Expected a class definition");let e=Jy.get(t);return e?(Rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jy.set(t,e),e)}/**
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
 */class AE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}AE.type="NONE";const Zy=AE;/**
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
 */function Iu(t,e,n){return`firebase:${t}:${e}:${n}`}class qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Iu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Iu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qs(yr(Zy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||yr(Zy);const o=Iu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=gr._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new qs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new qs(s,e,r))}}/**
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
 */function ev(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(PE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xE(e))return"Blackberry";if(NE(e))return"Webos";if(Hp(e))return"Safari";if((e.includes("chrome/")||CE(e))&&!e.includes("edge/"))return"Chrome";if(DE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function PE(t=At()){return/firefox\//i.test(t)}function Hp(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function CE(t=At()){return/crios\//i.test(t)}function kE(t=At()){return/iemobile/i.test(t)}function DE(t=At()){return/android/i.test(t)}function xE(t=At()){return/blackberry/i.test(t)}function NE(t=At()){return/webos/i.test(t)}function Qc(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function R2(t=At()){var e;return Qc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function A2(){return gP()&&document.documentMode===10}function bE(t=At()){return Qc(t)||DE(t)||NE(t)||xE(t)||/windows phone/i.test(t)||kE(t)}function P2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function OE(t,e=[]){let n;switch(t){case"Browser":n=ev(At());break;case"Worker":n=`${ev(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ti}/${r}`}/**
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
 */class C2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function k2(t,e={}){return br(t,"GET","/v2/passwordPolicy",Nr(t,e))}/**
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
 */const D2=6;class x2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:D2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class N2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tv(this),this.idTokenSubscription=new tv(this),this.beforeStateQueue=new C2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await SE(this,{idToken:e}),r=await gr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(En(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=c2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(wr(this));const n=e?ft(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await k2(this),n=new x2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await S2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yr(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[yr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=OE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&o2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Or(t){return ft(t)}class tv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fw(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function b2(t){Yc=t}function LE(t){return Yc.loadJS(t)}function O2(){return Yc.recaptchaEnterpriseScript}function L2(){return Yc.gapiScript}function M2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const V2="recaptcha-enterprise",F2="NO_RECAPTCHA";class U2{constructor(e){this.type=V2,this.auth=Or(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{g2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new m2(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Yy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(F2)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Yy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=O2();u.length!==0&&(u+=l),LE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function nv(t,e,n,r=!1){const i=new U2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function cc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await nv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await nv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function j2(t,e){const n=xr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ya(s,e??{}))return i;Cn(i,"already-initialized")}return n.initialize({options:e})}function z2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function B2(t,e,n){const r=Or(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ME(e),{host:o,port:l}=$2(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),H2()}function ME(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $2(t){const e=ME(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:rv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:rv(o)}}}function rv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function H2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mr("not implemented")}_getIdTokenResponse(e){return mr("not implemented")}_linkToIdToken(e,n){return mr("not implemented")}_getReauthenticationResolver(e){return mr("not implemented")}}async function W2(t,e){return br(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function q2(t,e){return yl(t,"POST","/v1/accounts:signInWithPassword",Nr(t,e))}async function K2(t,e){return br(t,"POST","/v1/accounts:sendOobCode",Nr(t,e))}async function G2(t,e){return K2(t,e)}/**
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
 */async function Q2(t,e){return yl(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}async function Y2(t,e){return yl(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}/**
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
 */class el extends Wp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new el(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new el(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cc(e,n,"signInWithPassword",q2);case"emailLink":return Q2(e,{email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cc(e,r,"signUpPassword",W2);case"emailLink":return Y2(e,{idToken:n,email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ks(t,e){return yl(t,"POST","/v1/accounts:signInWithIdp",Nr(t,e))}/**
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
 */const X2="http://localhost";class ns extends Wp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Up(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ns(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ks(e,n)}buildRequest(){const e={requestUri:X2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pl(n)}return e}}/**
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
 */function J2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Z2(t){const e=la(ua(t)).link,n=e?la(ua(e)).deep_link_id:null,r=la(ua(t)).deep_link_id;return(r?la(ua(r)).link:null)||r||n||e||t}class qp{constructor(e){var n,r,i,s,o,l;const u=la(ua(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=J2((i=u.mode)!==null&&i!==void 0?i:null);oe(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Z2(e);try{return new qp(n)}catch{return null}}}/**
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
 */class wo{constructor(){this.providerId=wo.PROVIDER_ID}static credential(e,n){return el._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qp.parseLink(n);return oe(r,"argument-error"),el._fromEmailAndCode(e,r.code,r.tenantId)}}wo.PROVIDER_ID="password";wo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Kp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vl extends Kp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gr extends vl{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gr.PROVIDER_ID="facebook.com";/**
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
 */class dr extends vl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";/**
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
 */class Qr extends vl{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
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
 */class Yr extends vl{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yr.credential(n,r)}catch{return null}}}Yr.TWITTER_SIGN_IN_METHOD="twitter.com";Yr.PROVIDER_ID="twitter.com";/**
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
 */async function eD(t,e){return yl(t,"POST","/v1/accounts:signUp",Nr(t,e))}/**
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
 */class rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gr._fromIdTokenResponse(e,r,i),o=iv(r);return new rs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=iv(r);return new rs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function iv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class hc extends kn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hc(e,n,r,i)}}function VE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(t,s,e,r):s})}async function tD(t,e,n=!1){const r=await Za(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rs._forOperation(t,"link",r)}/**
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
 */async function nD(t,e,n=!1){const{auth:r}=t;if(En(r.app))return Promise.reject(wr(r));const i="reauthenticate";try{const s=await Za(t,VE(r,i,e,t),n);oe(s.idToken,r,"internal-error");const o=$p(s.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),rs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Cn(r,"user-mismatch"),s}}/**
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
 */async function FE(t,e,n=!1){if(En(t.app))return Promise.reject(wr(t));const r="signIn",i=await VE(t,r,e),s=await rs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function rD(t,e){return FE(Or(t),e)}/**
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
 */async function UE(t){const e=Or(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function iD(t,e,n){const r=Or(t);await cc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",G2)}async function sD(t,e,n){if(En(t.app))return Promise.reject(wr(t));const r=Or(t),o=await cc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eD).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&UE(t),u}),l=await rs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function oD(t,e,n){return En(t.app)?Promise.reject(wr(t)):rD(ft(t),wo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&UE(t),r})}function aD(t,e,n,r){return ft(t).onIdTokenChanged(e,n,r)}function lD(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function uD(t,e,n,r){return ft(t).onAuthStateChanged(e,n,r)}function jE(t){return ft(t).signOut()}const dc="__sak";/**
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
 */class zE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function cD(){const t=At();return Hp(t)||Qc(t)}const hD=1e3,dD=10;class BE extends zE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cD()&&P2(),this.fallbackToPolling=bE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);A2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,dD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}BE.type="LOCAL";const fD=BE;/**
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
 */class $E extends zE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$E.type="SESSION";const HE=$E;/**
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
 */function pD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await pD(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xc.receivers=[];/**
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
 */function Gp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class mD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Gp("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Yn(){return window}function gD(t){Yn().location.href=t}/**
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
 */function WE(){return typeof Yn().WorkerGlobalScope<"u"&&typeof Yn().importScripts=="function"}async function yD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _D(){return WE()?self:null}/**
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
 */const qE="firebaseLocalStorageDb",wD=1,fc="firebaseLocalStorage",KE="fbase_key";class _l{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jc(t,e){return t.transaction([fc],e?"readwrite":"readonly").objectStore(fc)}function ED(){const t=indexedDB.deleteDatabase(qE);return new _l(t).toPromise()}function ff(){const t=indexedDB.open(qE,wD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fc,{keyPath:KE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fc)?e(r):(r.close(),await ED(),e(await ff()))})})}async function sv(t,e,n){const r=Jc(t,!0).put({[KE]:e,value:n});return new _l(r).toPromise()}async function TD(t,e){const n=Jc(t,!1).get(e),r=await new _l(n).toPromise();return r===void 0?null:r.value}function ov(t,e){const n=Jc(t,!0).delete(e);return new _l(n).toPromise()}const ID=800,SD=3;class GE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ff(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return WE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xc._getInstance(_D()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yD(),!this.activeServiceWorker)return;this.sender=new mD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ff();return await sv(e,dc,"1"),await ov(e,dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ov(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Jc(i,!1).getAll();return new _l(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ID)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}GE.type="LOCAL";const RD=GE;new gl(3e4,6e4);/**
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
 */function QE(t,e){return e?yr(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qp extends Wp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AD(t){return FE(t.auth,new Qp(t),t.bypassAuthState)}function PD(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),nD(n,new Qp(t),t.bypassAuthState)}async function CD(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),tD(n,new Qp(t),t.bypassAuthState)}/**
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
 */class YE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AD;case"linkViaPopup":case"linkViaRedirect":return CD;case"reauthViaPopup":case"reauthViaRedirect":return PD;default:Cn(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kD=new gl(2e3,1e4);async function DD(t,e,n){if(En(t.app))return Promise.reject(zn(t,"operation-not-supported-in-this-environment"));const r=Or(t);a2(t,e,Kp);const i=QE(r,n);return new Bi(r,"signInViaPopup",e,i).executeNotNull()}class Bi extends YE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Bi.currentPopupAction&&Bi.currentPopupAction.cancel(),Bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=Gp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kD.get())};e()}}Bi.currentPopupAction=null;/**
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
 */const xD="pendingRedirect",Su=new Map;class ND extends YE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Su.get(this.auth._key());if(!e){try{const r=await bD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Su.set(this.auth._key(),e)}return this.bypassAuthState||Su.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bD(t,e){const n=MD(e),r=LD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function OD(t,e){Su.set(t._key(),e)}function LD(t){return yr(t._redirectPersistence)}function MD(t){return Iu(xD,t.config.apiKey,t.name)}async function VD(t,e,n=!1){if(En(t.app))return Promise.reject(wr(t));const r=Or(t),i=QE(r,e),o=await new ND(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const FD=10*60*1e3;class UD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!XE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FD&&this.cachedEventUids.clear(),this.cachedEventUids.has(av(e))}saveEventToCache(e){this.cachedEventUids.add(av(e)),this.lastProcessedEventTime=Date.now()}}function av(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function XE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return XE(t);default:return!1}}/**
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
 */async function zD(t,e={}){return br(t,"GET","/v1/projects",e)}/**
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
 */const BD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$D=/^https?/;async function HD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zD(t);for(const n of e)try{if(WD(n))return}catch{}Cn(t,"unauthorized-domain")}function WD(t){const e=hf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$D.test(n))return!1;if(BD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const qD=new gl(3e4,6e4);function lv(){const t=Yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KD(t){return new Promise((e,n)=>{var r,i,s;function o(){lv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lv(),n(zn(t,"network-request-failed"))},timeout:qD.get()})}if(!((i=(r=Yn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yn().gapi)===null||s===void 0)&&s.load)o();else{const l=M2("iframefcb");return Yn()[l]=()=>{gapi.load?o():n(zn(t,"network-request-failed"))},LE(`${L2()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ru=null,e})}let Ru=null;function GD(t){return Ru=Ru||KD(t),Ru}/**
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
 */const QD=new gl(5e3,15e3),YD="__/auth/iframe",XD="emulator/auth/iframe",JD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ex(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bp(e,XD):`https://${t.config.authDomain}/${YD}`,r={apiKey:e.apiKey,appName:t.name,v:Ti},i=ZD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${pl(r).slice(1)}`}async function tx(t){const e=await GD(t),n=Yn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:ex(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=zn(t,"network-request-failed"),l=Yn().setTimeout(()=>{s(o)},QD.get());function u(){Yn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const nx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rx=500,ix=600,sx="_blank",ox="http://localhost";class uv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ax(t,e,n,r=rx,i=ix){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},nx),{width:r.toString(),height:i.toString(),top:s,left:o}),c=At().toLowerCase();n&&(l=CE(c)?sx:n),PE(c)&&(e=e||ox,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,C])=>`${m}${E}=${C},`,"");if(R2(c)&&l!=="_self")return lx(e||"",l),new uv(null);const p=window.open(e||"",l,d);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new uv(p)}function lx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ux="__/auth/handler",cx="emulator/auth/handler",hx=encodeURIComponent("fac");async function cv(t,e,n,r,i,s){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ti,eventId:i};if(e instanceof Kp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",TP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof vl){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${hx}=${encodeURIComponent(u)}`:"";return`${dx(t)}?${pl(l).slice(1)}${c}`}function dx({config:t}){return t.emulator?Bp(t,cx):`https://${t.authDomain}/${ux}`}/**
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
 */const od="webStorageSupport";class fx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=HE,this._completeRedirectFn=VD,this._overrideRedirectResult=OD}async _openPopup(e,n,r,i){var s;Rr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await cv(e,n,r,hf(),i);return ax(e,o,Gp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await cv(e,n,r,hf(),i);return gD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tx(e),r=new UD(e);return n.register("authEvent",i=>(oe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(od,{type:od},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[od];o!==void 0&&n(!!o),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bE()||Hp()||Qc()}}const px=fx;var hv="@firebase/auth",dv="1.7.5";/**
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
 */class mx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yx(t){Pn(new An("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OE(t)},c=new N2(r,i,s,u);return z2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pn(new An("auth-internal",e=>{const n=Or(e.getProvider("auth").getImmediate());return(r=>new mx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(hv,dv,gx(t)),Vt(hv,dv,"esm2017")}/**
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
 */const vx=5*60,_x=Nw("authIdTokenMaxAge")||vx;let fv=null;const wx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_x)return;const i=n==null?void 0:n.token;fv!==i&&(fv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ex(t=qc()){const e=xr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=j2(t,{popupRedirectResolver:px,persistence:[RD,fD,HE]}),r=Nw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=wx(s.toString());lD(n,o,()=>o(n.currentUser)),aD(n,l=>o(l))}}const i=Dw("auth");return i&&B2(n,`http://${i}`),n}function Tx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}b2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=zn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Tx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yx("Browser");var pv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qi,JE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function v(){}v.prototype=y.prototype,w.D=y.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(S,P,b){for(var T=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)T[Re-2]=arguments[Re];return y.prototype[P].apply(S,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,v){v||(v=0);var S=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)S[P]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(P=0;16>P;++P)S[P]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=w.g[0],v=w.g[1],P=w.g[2];var b=w.g[3],T=y+(b^v&(P^b))+S[0]+3614090360&4294967295;y=v+(T<<7&4294967295|T>>>25),T=b+(P^y&(v^P))+S[1]+3905402710&4294967295,b=y+(T<<12&4294967295|T>>>20),T=P+(v^b&(y^v))+S[2]+606105819&4294967295,P=b+(T<<17&4294967295|T>>>15),T=v+(y^P&(b^y))+S[3]+3250441966&4294967295,v=P+(T<<22&4294967295|T>>>10),T=y+(b^v&(P^b))+S[4]+4118548399&4294967295,y=v+(T<<7&4294967295|T>>>25),T=b+(P^y&(v^P))+S[5]+1200080426&4294967295,b=y+(T<<12&4294967295|T>>>20),T=P+(v^b&(y^v))+S[6]+2821735955&4294967295,P=b+(T<<17&4294967295|T>>>15),T=v+(y^P&(b^y))+S[7]+4249261313&4294967295,v=P+(T<<22&4294967295|T>>>10),T=y+(b^v&(P^b))+S[8]+1770035416&4294967295,y=v+(T<<7&4294967295|T>>>25),T=b+(P^y&(v^P))+S[9]+2336552879&4294967295,b=y+(T<<12&4294967295|T>>>20),T=P+(v^b&(y^v))+S[10]+4294925233&4294967295,P=b+(T<<17&4294967295|T>>>15),T=v+(y^P&(b^y))+S[11]+2304563134&4294967295,v=P+(T<<22&4294967295|T>>>10),T=y+(b^v&(P^b))+S[12]+1804603682&4294967295,y=v+(T<<7&4294967295|T>>>25),T=b+(P^y&(v^P))+S[13]+4254626195&4294967295,b=y+(T<<12&4294967295|T>>>20),T=P+(v^b&(y^v))+S[14]+2792965006&4294967295,P=b+(T<<17&4294967295|T>>>15),T=v+(y^P&(b^y))+S[15]+1236535329&4294967295,v=P+(T<<22&4294967295|T>>>10),T=y+(P^b&(v^P))+S[1]+4129170786&4294967295,y=v+(T<<5&4294967295|T>>>27),T=b+(v^P&(y^v))+S[6]+3225465664&4294967295,b=y+(T<<9&4294967295|T>>>23),T=P+(y^v&(b^y))+S[11]+643717713&4294967295,P=b+(T<<14&4294967295|T>>>18),T=v+(b^y&(P^b))+S[0]+3921069994&4294967295,v=P+(T<<20&4294967295|T>>>12),T=y+(P^b&(v^P))+S[5]+3593408605&4294967295,y=v+(T<<5&4294967295|T>>>27),T=b+(v^P&(y^v))+S[10]+38016083&4294967295,b=y+(T<<9&4294967295|T>>>23),T=P+(y^v&(b^y))+S[15]+3634488961&4294967295,P=b+(T<<14&4294967295|T>>>18),T=v+(b^y&(P^b))+S[4]+3889429448&4294967295,v=P+(T<<20&4294967295|T>>>12),T=y+(P^b&(v^P))+S[9]+568446438&4294967295,y=v+(T<<5&4294967295|T>>>27),T=b+(v^P&(y^v))+S[14]+3275163606&4294967295,b=y+(T<<9&4294967295|T>>>23),T=P+(y^v&(b^y))+S[3]+4107603335&4294967295,P=b+(T<<14&4294967295|T>>>18),T=v+(b^y&(P^b))+S[8]+1163531501&4294967295,v=P+(T<<20&4294967295|T>>>12),T=y+(P^b&(v^P))+S[13]+2850285829&4294967295,y=v+(T<<5&4294967295|T>>>27),T=b+(v^P&(y^v))+S[2]+4243563512&4294967295,b=y+(T<<9&4294967295|T>>>23),T=P+(y^v&(b^y))+S[7]+1735328473&4294967295,P=b+(T<<14&4294967295|T>>>18),T=v+(b^y&(P^b))+S[12]+2368359562&4294967295,v=P+(T<<20&4294967295|T>>>12),T=y+(v^P^b)+S[5]+4294588738&4294967295,y=v+(T<<4&4294967295|T>>>28),T=b+(y^v^P)+S[8]+2272392833&4294967295,b=y+(T<<11&4294967295|T>>>21),T=P+(b^y^v)+S[11]+1839030562&4294967295,P=b+(T<<16&4294967295|T>>>16),T=v+(P^b^y)+S[14]+4259657740&4294967295,v=P+(T<<23&4294967295|T>>>9),T=y+(v^P^b)+S[1]+2763975236&4294967295,y=v+(T<<4&4294967295|T>>>28),T=b+(y^v^P)+S[4]+1272893353&4294967295,b=y+(T<<11&4294967295|T>>>21),T=P+(b^y^v)+S[7]+4139469664&4294967295,P=b+(T<<16&4294967295|T>>>16),T=v+(P^b^y)+S[10]+3200236656&4294967295,v=P+(T<<23&4294967295|T>>>9),T=y+(v^P^b)+S[13]+681279174&4294967295,y=v+(T<<4&4294967295|T>>>28),T=b+(y^v^P)+S[0]+3936430074&4294967295,b=y+(T<<11&4294967295|T>>>21),T=P+(b^y^v)+S[3]+3572445317&4294967295,P=b+(T<<16&4294967295|T>>>16),T=v+(P^b^y)+S[6]+76029189&4294967295,v=P+(T<<23&4294967295|T>>>9),T=y+(v^P^b)+S[9]+3654602809&4294967295,y=v+(T<<4&4294967295|T>>>28),T=b+(y^v^P)+S[12]+3873151461&4294967295,b=y+(T<<11&4294967295|T>>>21),T=P+(b^y^v)+S[15]+530742520&4294967295,P=b+(T<<16&4294967295|T>>>16),T=v+(P^b^y)+S[2]+3299628645&4294967295,v=P+(T<<23&4294967295|T>>>9),T=y+(P^(v|~b))+S[0]+4096336452&4294967295,y=v+(T<<6&4294967295|T>>>26),T=b+(v^(y|~P))+S[7]+1126891415&4294967295,b=y+(T<<10&4294967295|T>>>22),T=P+(y^(b|~v))+S[14]+2878612391&4294967295,P=b+(T<<15&4294967295|T>>>17),T=v+(b^(P|~y))+S[5]+4237533241&4294967295,v=P+(T<<21&4294967295|T>>>11),T=y+(P^(v|~b))+S[12]+1700485571&4294967295,y=v+(T<<6&4294967295|T>>>26),T=b+(v^(y|~P))+S[3]+2399980690&4294967295,b=y+(T<<10&4294967295|T>>>22),T=P+(y^(b|~v))+S[10]+4293915773&4294967295,P=b+(T<<15&4294967295|T>>>17),T=v+(b^(P|~y))+S[1]+2240044497&4294967295,v=P+(T<<21&4294967295|T>>>11),T=y+(P^(v|~b))+S[8]+1873313359&4294967295,y=v+(T<<6&4294967295|T>>>26),T=b+(v^(y|~P))+S[15]+4264355552&4294967295,b=y+(T<<10&4294967295|T>>>22),T=P+(y^(b|~v))+S[6]+2734768916&4294967295,P=b+(T<<15&4294967295|T>>>17),T=v+(b^(P|~y))+S[13]+1309151649&4294967295,v=P+(T<<21&4294967295|T>>>11),T=y+(P^(v|~b))+S[4]+4149444226&4294967295,y=v+(T<<6&4294967295|T>>>26),T=b+(v^(y|~P))+S[11]+3174756917&4294967295,b=y+(T<<10&4294967295|T>>>22),T=P+(y^(b|~v))+S[2]+718787259&4294967295,P=b+(T<<15&4294967295|T>>>17),T=v+(b^(P|~y))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(P+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+P&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var v=y-this.blockSize,S=this.B,P=this.h,b=0;b<y;){if(P==0)for(;b<=v;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<y;)if(S[P++]=w.charCodeAt(b++),P==this.blockSize){i(this,S),P=0;break}}else for(;b<y;)if(S[P++]=w[b++],P==this.blockSize){i(this,S),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var v=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=v&255,v/=256;for(this.u(w),w=Array(16),y=v=0;4>y;++y)for(var S=0;32>S;S+=8)w[v++]=this.g[y]>>>S&255;return w};function s(w,y){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=y(w)}function o(w,y){this.h=y;for(var v=[],S=!0,P=w.length-1;0<=P;P--){var b=w[P]|0;S&&b==y||(v[P]=b,S=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return O(c(-w));for(var y=[],v=1,S=0;w>=v;S++)y[S]=w/v|0,v*=4294967296;return new o(y,0)}function d(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return O(d(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=c(Math.pow(y,8)),S=p,P=0;P<w.length;P+=8){var b=Math.min(8,w.length-P),T=parseInt(w.substring(P,P+b),y);8>b?(b=c(Math.pow(y,b)),S=S.j(b).add(c(T))):(S=S.j(v),S=S.add(c(T)))}return S}var p=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();for(var w=0,y=1,v=0;v<this.g.length;v++){var S=this.i(v);w+=(0<=S?S:4294967296+S)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(k(this))return"-"+O(this).toString(w);for(var y=c(Math.pow(w,6)),v=this,S="";;){var P=V(v,y).g;v=I(v,P.j(y));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=P,C(v))return b+S;for(;6>b.length;)b="0"+b;S=b+S}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=I(this,w),k(w)?-1:C(w)?0:1};function O(w){for(var y=w.g.length,v=[],S=0;S<y;S++)v[S]=~w.g[S];return new o(v,~w.h).add(m)}t.abs=function(){return k(this)?O(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],S=0,P=0;P<=y;P++){var b=S+(this.i(P)&65535)+(w.i(P)&65535),T=(b>>>16)+(this.i(P)>>>16)+(w.i(P)>>>16);S=T>>>16,b&=65535,T&=65535,v[P]=T<<16|b}return new o(v,v[v.length-1]&-2147483648?-1:0)};function I(w,y){return w.add(O(y))}t.j=function(w){if(C(this)||C(w))return p;if(k(this))return k(w)?O(this).j(O(w)):O(O(this).j(w));if(k(w))return O(this.j(O(w)));if(0>this.l(E)&&0>w.l(E))return c(this.m()*w.m());for(var y=this.g.length+w.g.length,v=[],S=0;S<2*y;S++)v[S]=0;for(S=0;S<this.g.length;S++)for(var P=0;P<w.g.length;P++){var b=this.i(S)>>>16,T=this.i(S)&65535,Re=w.i(P)>>>16,yt=w.i(P)&65535;v[2*S+2*P]+=T*yt,_(v,2*S+2*P),v[2*S+2*P+1]+=b*yt,_(v,2*S+2*P+1),v[2*S+2*P+1]+=T*Re,_(v,2*S+2*P+1),v[2*S+2*P+2]+=b*Re,_(v,2*S+2*P+2)}for(S=0;S<y;S++)v[S]=v[2*S+1]<<16|v[2*S];for(S=y;S<2*y;S++)v[S]=0;return new o(v,0)};function _(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function A(w,y){this.g=w,this.h=y}function V(w,y){if(C(y))throw Error("division by zero");if(C(w))return new A(p,p);if(k(w))return y=V(O(w),y),new A(O(y.g),O(y.h));if(k(y))return y=V(w,O(y)),new A(O(y.g),y.h);if(30<w.g.length){if(k(w)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,S=y;0>=S.l(w);)v=z(v),S=z(S);var P=x(v,1),b=x(S,1);for(S=x(S,2),v=x(v,2);!C(S);){var T=b.add(S);0>=T.l(w)&&(P=P.add(v),b=T),S=x(S,1),v=x(v,1)}return y=I(w,P.j(y)),new A(P,y)}for(P=p;0<=w.l(y);){for(v=Math.max(1,Math.floor(w.m()/y.m())),S=Math.ceil(Math.log(v)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),b=c(v),T=b.j(y);k(T)||0<T.l(w);)v-=S,b=c(v),T=b.j(y);C(b)&&(b=m),P=P.add(b),w=I(w,T)}return new A(P,w)}t.A=function(w){return V(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],S=0;S<y;S++)v[S]=this.i(S)&w.i(S);return new o(v,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],S=0;S<y;S++)v[S]=this.i(S)|w.i(S);return new o(v,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],S=0;S<y;S++)v[S]=this.i(S)^w.i(S);return new o(v,this.h^w.h)};function z(w){for(var y=w.g.length+1,v=[],S=0;S<y;S++)v[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(v,w.h)}function x(w,y){var v=y>>5;y%=32;for(var S=w.g.length-v,P=[],b=0;b<S;b++)P[b]=0<y?w.i(b+v)>>>y|w.i(b+v+1)<<32-y:w.i(b+v);return new o(P,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,JE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,qi=o}).apply(typeof pv<"u"?pv:typeof self<"u"?self:typeof window<"u"?window:{});var su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ZE,eT,ca,tT,Au,pf,nT,rT,iT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof su=="object"&&su];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var L=a[g];if(!(L in f))break e;f=f[L]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,L={next:function(){if(!g&&f<a.length){var F=f++;return{value:h(F,a[F]),done:!1}}return g=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,g),a.apply(h,L)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function E(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,L,F){for(var q=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)q[xe-2]=arguments[xe];return h.prototype[L].apply(g,q)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function O(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const L=a.length||0,F=g.length||0;a.length=L+F;for(let q=0;q<F;q++)a[L+q]=g[q]}else a.push(g)}}class I{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var z=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function x(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function w(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let f,g;for(let L=1;L<arguments.length;L++){g=arguments[L];for(f in g)a[f]=g[f];for(let F=0;F<v.length;F++)f=v[F],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function P(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function b(a){l.setTimeout(()=>{throw a},0)}function T(){var a=te;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Re{constructor(){this.h=this.g=null}add(h,f){const g=yt.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var yt=new I(()=>new mn,a=>a.reset());class mn{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,G=!1,te=new Re,ne=()=>{const a=l.Promise.resolve(void 0);Ie=()=>{a.then(me)}};var me=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){b(f)}var h=yt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}G=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var Ne=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function ze(a,h){if(le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(z){e:{try{V(h.nodeName);var L=!0;break e}catch{}L=!1}L||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Me[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ze.aa.h.call(this)}}C(ze,le);var Me={2:"touch",3:"pen",4:"mouse"};ze.prototype.h=function(){ze.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),fe=0;function jt(a,h,f,g,L){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=L,this.key=++fe,this.da=this.fa=!1}function Je(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ze(a){this.src=a,this.g={},this.h=0}Ze.prototype.add=function(a,h,f,g,L){var F=a.toString();a=this.g[F],a||(a=this.g[F]=[],this.h++);var q=Dn(a,h,g,L);return-1<q?(h=a[q],f||(h.fa=!1)):(h=new jt(h,this.src,F,!!g,L),h.fa=f,a.push(h)),h};function nt(a,h){var f=h.type;if(f in a.g){var g=a.g[f],L=Array.prototype.indexOf.call(g,h,void 0),F;(F=0<=L)&&Array.prototype.splice.call(g,L,1),F&&(Je(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Dn(a,h,f,g){for(var L=0;L<a.length;++L){var F=a[L];if(!F.da&&F.listener==h&&F.capture==!!f&&F.ha==g)return L}return-1}var Si="closure_lm_"+(1e6*Math.random()|0),ds={};function tn(a,h,f,g,L){if(Array.isArray(h)){for(var F=0;F<h.length;F++)tn(a,h[F],f,g,L);return null}return f=Lr(f),a&&a[en]?a.K(h,f,c(g)?!!g.capture:!!g,L):Ro(a,h,f,!1,g,L)}function Ro(a,h,f,g,L,F){if(!h)throw Error("Invalid event type");var q=c(L)?!!L.capture:!!L,xe=Co(a);if(xe||(a[Si]=xe=new Ze(a)),f=xe.add(h,f,g,q,F),f.proxy)return f;if(g=Ao(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Ne||(L=q),L===void 0&&(L=!1),a.addEventListener(h.toString(),g,L);else if(a.attachEvent)a.attachEvent(Pl(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Ao(){function a(f){return h.call(a.src,a.listener,f)}const h=mh;return a}function fs(a,h,f,g,L){if(Array.isArray(h))for(var F=0;F<h.length;F++)fs(a,h[F],f,g,L);else g=c(g)?!!g.capture:!!g,f=Lr(f),a&&a[en]?(a=a.i,h=String(h).toString(),h in a.g&&(F=a.g[h],f=Dn(F,f,g,L),-1<f&&(Je(F[f]),Array.prototype.splice.call(F,f,1),F.length==0&&(delete a.g[h],a.h--)))):a&&(a=Co(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Dn(h,f,g,L)),(f=-1<a?h[a]:null)&&Po(f))}function Po(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[en])nt(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Pl(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Co(h))?(nt(f,a),f.h==0&&(f.src=null,h[Si]=null)):Je(a)}}}function Pl(a){return a in ds?ds[a]:ds[a]="on"+a}function mh(a,h){if(a.da)a=!0;else{h=new ze(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Po(a),a=f.call(g,h)}return a}function Co(a){return a=a[Si],a instanceof Ze?a:null}var rr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lr(a){return typeof a=="function"?a:(a[rr]||(a[rr]=function(h){return a.handleEvent(h)}),a[rr])}function at(){Q.call(this),this.i=new Ze(this),this.M=this,this.F=null}C(at,Q),at.prototype[en]=!0,at.prototype.removeEventListener=function(a,h,f,g){fs(this,a,h,f,g)};function lt(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new le(h,a);else if(h instanceof le)h.target=h.target||a;else{var L=h;h=new le(g,a),S(h,L)}if(L=!0,f)for(var F=f.length-1;0<=F;F--){var q=h.g=f[F];L=nn(q,g,!0,h)&&L}if(q=h.g=a,L=nn(q,g,!0,h)&&L,L=nn(q,g,!1,h)&&L,f)for(F=0;F<f.length;F++)q=h.g=f[F],L=nn(q,g,!1,h)&&L}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Je(f[g]);delete a.g[h],a.h--}}this.F=null},at.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},at.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function nn(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var L=!0,F=0;F<h.length;++F){var q=h[F];if(q&&!q.da&&q.capture==f){var xe=q.listener,_t=q.ha||q.src;q.fa&&nt(a.i,q),L=xe.call(_t,g)!==!1&&L}}return L&&!g.defaultPrevented}function gn(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ko(a){a.g=gn(()=>{a.g=null,a.i&&(a.i=!1,ko(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ps extends Q{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ko(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(a){Q.call(this),this.h=a,this.g={}}C(Ri,Q);var xn=[];function Do(a){x(a.g,function(h,f){this.g.hasOwnProperty(f)&&Po(h)},a),a.g={}}Ri.prototype.N=function(){Ri.aa.N.call(this),Do(this)},Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ms=l.JSON.stringify,Cl=l.JSON.parse,gh=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function gs(){}gs.prototype.h=null;function Ai(a){return a.h||(a.h=a.i())}function xo(){}var ir={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mr(){le.call(this,"d")}C(Mr,le);function Pi(){le.call(this,"c")}C(Pi,le);var sr={},No=null;function ys(){return No=No||new at}sr.La="serverreachability";function bo(a){le.call(this,sr.La,a)}C(bo,le);function or(a){const h=ys();lt(h,new bo(h))}sr.STAT_EVENT="statevent";function Ci(a,h){le.call(this,sr.STAT_EVENT,a),this.stat=h}C(Ci,le);function vt(a){const h=ys();lt(h,new Ci(h,a))}sr.Ma="timingevent";function kl(a,h){le.call(this,sr.Ma,a),this.size=h}C(kl,le);function D(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function N(){this.g=!0}N.prototype.xa=function(){this.g=!1};function M(a,h,f,g,L,F){a.info(function(){if(a.g)if(F)for(var q="",xe=F.split("&"),_t=0;_t<xe.length;_t++){var Ae=xe[_t].split("=");if(1<Ae.length){var kt=Ae[0];Ae=Ae[1];var Dt=kt.split("_");q=2<=Dt.length&&Dt[1]=="type"?q+(kt+"="+Ae+"&"):q+(kt+"=redacted&")}}else q=null;else q=F;return"XMLHTTP REQ ("+g+") [attempt "+L+"]: "+h+`
`+f+`
`+q})}function j(a,h,f,g,L,F,q){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+L+"]: "+h+`
`+f+`
`+F+" "+q})}function K(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+se(a,f)+(g?" "+g:"")})}function J(a,h){a.info(function(){return"TIMEOUT: "+h})}N.prototype.info=function(){};function se(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var L=g[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var q=1;q<L.length;q++)L[q]=""}}}}return ms(f)}catch{return h}}var W={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ue={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ee;function Z(){}C(Z,gs),Z.prototype.g=function(){return new XMLHttpRequest},Z.prototype.i=function(){return{}},ee=new Z;function ge(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new Ri(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new we}function we(){this.i=null,this.g="",this.h=!1}var Ce={},Ee={};function et(a,h,f){a.L=1,a.v=bl(lr(h)),a.m=f,a.P=!0,$e(a,null)}function $e(a,h){a.F=Date.now(),Nn(a),a.A=lr(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Nm(f.i,"t",g),a.C=0,f=a.j.J,a.h=new we,a.g=Ym(a.j,f?h:null,!a.m),0<a.O&&(a.M=new ps(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(xn[0]=L.toString()),L=xn);for(var F=0;F<L.length;F++){var q=tn(f,L[F],g||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),or(),M(a.i,a.u,a.A,a.l,a.R,a.m)}ge.prototype.ca=function(a){a=a.target;const h=this.M;h&&ur(a)==3?h.j():this.Y(a)},ge.prototype.Y=function(a){try{if(a==this.g)e:{const Dt=ur(this.g);var h=this.g.Ba();const Es=this.g.Z();if(!(3>Dt)&&(Dt!=3||this.g&&(this.h.h||this.g.oa()||Um(this.g)))){this.J||Dt!=4||h==7||(h==8||0>=Es?or(3):or(2)),Hn(this);var f=this.g.Z();this.X=f;t:if(Vr(this)){var g=Um(this.g);a="";var L=g.length,F=ur(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),Pt(this);var q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<L;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(F&&h==L-1)});g.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,j(this.i,this.u,this.A,this.l,this.R,Dt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,_t=this.g;if((xe=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(xe)){var Ae=xe;break t}}Ae=null}if(f=Ae)K(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fr(this,f);else{this.o=!1,this.s=3,vt(12),yn(this),Pt(this);break e}}if(this.P){f=!0;let bn;for(;!this.J&&this.C<q.length;)if(bn=$n(this,q),bn==Ee){Dt==4&&(this.s=4,vt(14),f=!1),K(this.i,this.l,null,"[Incomplete Response]");break}else if(bn==Ce){this.s=4,vt(15),K(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else K(this.i,this.l,bn,null),Fr(this,bn);if(Vr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Dt!=4||q.length!=0||this.h.h||(this.s=1,vt(16),f=!1),this.o=this.o&&f,!f)K(this.i,this.l,q,"[Invalid Chunked Response]"),yn(this),Pt(this);else if(0<q.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),wh(kt),kt.M=!0,vt(11))}}else K(this.i,this.l,q,null),Fr(this,q);Dt==4&&yn(this),this.o&&!this.J&&(Dt==4?qm(this.j,this):(this.o=!1,Nn(this)))}else qI(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),yn(this),Pt(this)}}}catch{}finally{}};function Vr(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function $n(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Ee:(f=Number(h.substring(f,g)),isNaN(f)?Ce:(g+=1,g+f>h.length?Ee:(h=h.slice(g,g+f),a.C=g+f,h)))}ge.prototype.cancel=function(){this.J=!0,yn(this)};function Nn(a){a.S=Date.now()+a.I,ar(a,a.I)}function ar(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=D(m(a.ba,a),h)}function Hn(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ge.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(J(this.i,this.A),this.L!=2&&(or(),vt(17)),yn(this),this.s=2,Pt(this)):ar(this,this.S-a)};function Pt(a){a.j.G==0||a.J||qm(a.j,a)}function yn(a){Hn(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Do(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Fr(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||ke(f.h,a))){if(!a.K&&ke(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var L=g;if(L[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Fl(f),Ml(f);else break e;_h(f),vt(18)}}else f.za=L[1],0<f.za-f.T&&37500>L[2]&&f.F&&f.v==0&&!f.C&&(f.C=D(m(f.Za,f),6e3));if(1>=Ct(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Di(f,11)}else if((a.K||f.g==a)&&Fl(f),!_(h))for(L=f.Da.g.parse(h),h=0;h<L.length;h++){let Ae=L[h];if(f.T=Ae[0],Ae=Ae[1],f.G==2)if(Ae[0]=="c"){f.K=Ae[1],f.ia=Ae[2];const kt=Ae[3];kt!=null&&(f.la=kt,f.j.info("VER="+f.la));const Dt=Ae[4];Dt!=null&&(f.Aa=Dt,f.j.info("SVER="+f.Aa));const Es=Ae[5];Es!=null&&typeof Es=="number"&&0<Es&&(g=1.5*Es,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const bn=a.g;if(bn){const jl=bn.g?bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jl){var F=g.h;F.g||jl.indexOf("spdy")==-1&&jl.indexOf("quic")==-1&&jl.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(rn(F,F.h),F.h=null))}if(g.D){const Eh=bn.g?bn.g.getResponseHeader("X-HTTP-Session-Id"):null;Eh&&(g.ya=Eh,Fe(g.I,g.D,Eh))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var q=a;if(g.qa=Qm(g,g.J?g.ia:null,g.W),q.K){Oo(g.h,q);var xe=q,_t=g.L;_t&&(xe.I=_t),xe.B&&(Hn(xe),Nn(xe)),g.g=q}else Hm(g);0<f.i.length&&Vl(f)}else Ae[0]!="stop"&&Ae[0]!="close"||Di(f,7);else f.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?Di(f,7):vh(f):Ae[0]!="noop"&&f.l&&f.l.ta(Ae),f.v=0)}}or(4)}catch{}}var vs=class{constructor(a,h){this.g=a,this.map=h}};function de(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ve(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ct(a){return a.h?1:a.g?a.g.size:0}function ke(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function rn(a,h){a.g?a.g.add(h):a.h=h}function Oo(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}de.prototype.cancel=function(){if(this.i=Dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Dl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function xI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function NI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Am(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=NI(a),g=xI(a),L=g.length,F=0;F<L;F++)h.call(void 0,g[F],f&&f[F],a)}var Pm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bI(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),L=null;if(0<=g){var F=a[f].substring(0,g);L=a[f].substring(g+1)}else F=a[f];h(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ki(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ki){this.h=a.h,xl(this,a.j),this.o=a.o,this.g=a.g,Nl(this,a.s),this.l=a.l;var h=a.i,f=new Vo;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Cm(this,f),this.m=a.m}else a&&(h=String(a).match(Pm))?(this.h=!1,xl(this,h[1]||"",!0),this.o=Lo(h[2]||""),this.g=Lo(h[3]||"",!0),Nl(this,h[4]),this.l=Lo(h[5]||"",!0),Cm(this,h[6]||"",!0),this.m=Lo(h[7]||"")):(this.h=!1,this.i=new Vo(null,this.h))}ki.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Mo(h,km,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Mo(h,km,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Mo(f,f.charAt(0)=="/"?MI:LI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Mo(f,FI)),a.join("")};function lr(a){return new ki(a)}function xl(a,h,f){a.j=f?Lo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Nl(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Cm(a,h,f){h instanceof Vo?(a.i=h,UI(a.i,a.h)):(f||(h=Mo(h,VI)),a.i=new Vo(h,a.h))}function Fe(a,h,f){a.i.set(h,f)}function bl(a){return Fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Lo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Mo(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,OI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function OI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var km=/[#\/\?@]/g,LI=/[#\?:]/g,MI=/[#\?]/g,VI=/[#\?@]/g,FI=/#/g;function Vo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ur(a){a.g||(a.g=new Map,a.h=0,a.i&&bI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Vo.prototype,t.add=function(a,h){Ur(this),this.i=null,a=_s(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Dm(a,h){Ur(a),h=_s(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function xm(a,h){return Ur(a),h=_s(a,h),a.g.has(h)}t.forEach=function(a,h){Ur(this),this.g.forEach(function(f,g){f.forEach(function(L){a.call(h,L,g,this)},this)},this)},t.na=function(){Ur(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const L=a[g];for(let F=0;F<L.length;F++)f.push(h[g])}return f},t.V=function(a){Ur(this);let h=[];if(typeof a=="string")xm(this,a)&&(h=h.concat(this.g.get(_s(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Ur(this),this.i=null,a=_s(this,a),xm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Nm(a,h,f){Dm(a,h),0<f.length&&(a.i=null,a.g.set(_s(a,h),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const F=encodeURIComponent(String(g)),q=this.V(g);for(g=0;g<q.length;g++){var L=F;q[g]!==""&&(L+="="+encodeURIComponent(String(q[g]))),a.push(L)}}return this.i=a.join("&")};function _s(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function UI(a,h){h&&!a.j&&(Ur(a),a.i=null,a.g.forEach(function(f,g){var L=g.toLowerCase();g!=L&&(Dm(this,g),Nm(this,L,f))},a)),a.j=h}function jI(a,h){const f=new N;if(l.Image){const g=new Image;g.onload=E(jr,f,"TestLoadImage: loaded",!0,h,g),g.onerror=E(jr,f,"TestLoadImage: error",!1,h,g),g.onabort=E(jr,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=E(jr,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function zI(a,h){const f=new N,g=new AbortController,L=setTimeout(()=>{g.abort(),jr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(F=>{clearTimeout(L),F.ok?jr(f,"TestPingServer: ok",!0,h):jr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),jr(f,"TestPingServer: error",!1,h)})}function jr(a,h,f,g,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),g(f)}catch{}}function BI(){this.g=new gh}function $I(a,h,f){const g=f||"";try{Am(a,function(L,F){let q=L;c(L)&&(q=ms(L)),h.push(g+F+"="+encodeURIComponent(q))})}catch(L){throw h.push(g+"type="+encodeURIComponent("_badmap")),L}}function Fo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Fo,gs),Fo.prototype.g=function(){return new Ol(this.l,this.j)},Fo.prototype.i=function(a){return function(){return a}}({});function Ol(a,h){at.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ol,at),t=Ol.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,jo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Uo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,jo(this)),this.g&&(this.readyState=3,jo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function bm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Uo(this):jo(this),this.readyState==3&&bm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Uo(this))},t.Qa=function(a){this.g&&(this.response=a,Uo(this))},t.ga=function(){this.g&&Uo(this)};function Uo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,jo(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function jo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ol.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Om(a){let h="";return x(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function yh(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Om(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Fe(a,h,f))}function Qe(a){at.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Qe,at);var HI=/^https?$/i,WI=["POST","PUT"];t=Qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ee.g(),this.v=this.o?Ai(this.o):Ai(ee),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(F){Lm(this,F);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var L in g)f.set(L,g[L]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const F of g.keys())f.set(F,g.get(F));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(F=>F.toLowerCase()=="content-type"),L=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(WI,h,void 0))||g||L||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,q]of f)this.g.setRequestHeader(F,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fm(this),this.u=!0,this.g.send(a),this.u=!1}catch(F){Lm(this,F)}};function Lm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Mm(a),Ll(a)}function Mm(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,lt(this,"complete"),lt(this,"abort"),Ll(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ll(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Vm(this):this.bb())},t.bb=function(){Vm(this)};function Vm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ur(a)!=4||a.Z()!=2)){if(a.u&&ur(a)==4)gn(a.Ea,0,a);else if(lt(a,"readystatechange"),ur(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=q===0){var L=String(a.D).match(Pm)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),g=!HI.test(L?L.toLowerCase():"")}f=g}if(f)lt(a,"complete"),lt(a,"success");else{a.m=6;try{var F=2<ur(a)?a.g.statusText:""}catch{F=""}a.l=F+" ["+a.Z()+"]",Mm(a)}}finally{Ll(a)}}}}function Ll(a,h){if(a.g){Fm(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||lt(a,"ready");try{f.onreadystatechange=g}catch{}}}function Fm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function ur(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<ur(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Cl(h)}};function Um(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function qI(a){const h={};a=(a.g&&2<=ur(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var f=P(a[g]);const L=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const F=h[L]||[];h[L]=F,F.push(f)}w(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zo(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function jm(a){this.Aa=0,this.i=[],this.j=new N,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zo("baseRetryDelayMs",5e3,a),this.cb=zo("retryDelaySeedMs",1e4,a),this.Wa=zo("forwardChannelMaxRetries",2,a),this.wa=zo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new de(a&&a.concurrentRequestLimit),this.Da=new BI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=jm.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){vt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Qm(this,null,this.W),Vl(this)};function vh(a){if(zm(a),a.G==3){var h=a.U++,f=lr(a.I);if(Fe(f,"SID",a.K),Fe(f,"RID",h),Fe(f,"TYPE","terminate"),Bo(a,f),h=new ge(a,a.j,h),h.L=2,h.v=bl(lr(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ym(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Nn(h)}Gm(a)}function Ml(a){a.g&&(wh(a),a.g.cancel(),a.g=null)}function zm(a){Ml(a),a.u&&(l.clearTimeout(a.u),a.u=null),Fl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Vl(a){if(!Ve(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ie||ne(),G||(Ie(),G=!0),te.add(h,a),a.B=0}}function KI(a,h){return Ct(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=D(m(a.Ga,a,h),Km(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new ge(this,this.j,a);let F=this.o;if(this.S&&(F?(F=y(F),S(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=$m(this,L,h),f=lr(this.I),Fe(f,"RID",a),Fe(f,"CVER",22),this.D&&Fe(f,"X-HTTP-Session-Id",this.D),Bo(this,f),F&&(this.O?h="headers="+encodeURIComponent(String(Om(F)))+"&"+h:this.m&&yh(f,this.m,F)),rn(this.h,L),this.Ua&&Fe(f,"TYPE","init"),this.P?(Fe(f,"$req",h),Fe(f,"SID","null"),L.T=!0,et(L,f,null)):et(L,f,h),this.G=2}}else this.G==3&&(a?Bm(this,a):this.i.length==0||Ve(this.h)||Bm(this))};function Bm(a,h){var f;h?f=h.l:f=a.U++;const g=lr(a.I);Fe(g,"SID",a.K),Fe(g,"RID",f),Fe(g,"AID",a.T),Bo(a,g),a.m&&a.o&&yh(g,a.m,a.o),f=new ge(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=$m(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),rn(a.h,f),et(f,g,h)}function Bo(a,h){a.H&&x(a.H,function(f,g){Fe(h,g,f)}),a.l&&Am({},function(f,g){Fe(h,g,f)})}function $m(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var L=a.i;let F=-1;for(;;){const q=["count="+f];F==-1?0<f?(F=L[0].g,q.push("ofs="+F)):F=0:q.push("ofs="+F);let xe=!0;for(let _t=0;_t<f;_t++){let Ae=L[_t].g;const kt=L[_t].map;if(Ae-=F,0>Ae)F=Math.max(0,L[_t].g-100),xe=!1;else try{$I(kt,q,"req"+Ae+"_")}catch{g&&g(kt)}}if(xe){g=q.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Hm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ie||ne(),G||(Ie(),G=!0),te.add(h,a),a.v=0}}function _h(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=D(m(a.Fa,a),Km(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Wm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=D(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Ml(this),Wm(this))};function wh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Wm(a){a.g=new ge(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=lr(a.qa);Fe(h,"RID","rpc"),Fe(h,"SID",a.K),Fe(h,"AID",a.T),Fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Fe(h,"TO",a.ja),Fe(h,"TYPE","xmlhttp"),Bo(a,h),a.m&&a.o&&yh(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=bl(lr(h)),f.m=null,f.P=!0,$e(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ml(this),_h(this),vt(19))};function Fl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function qm(a,h){var f=null;if(a.g==h){Fl(a),wh(a),a.g=null;var g=2}else if(ke(a.h,h))f=h.D,Oo(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var L=a.B;g=ys(),lt(g,new kl(g,f)),Vl(a)}else Hm(a);else if(L=h.s,L==3||L==0&&0<h.X||!(g==1&&KI(a,h)||g==2&&_h(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),L){case 1:Di(a,5);break;case 4:Di(a,10);break;case 3:Di(a,6);break;default:Di(a,2)}}}function Km(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Di(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const L=!g;g=new ki(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||xl(g,"https"),bl(g),L?jI(g.toString(),f):zI(g.toString(),f)}else vt(2);a.G=0,a.l&&a.l.sa(h),Gm(a),zm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Gm(a){if(a.G=0,a.ka=[],a.l){const h=Dl(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Qm(a,h,f){var g=f instanceof ki?lr(f):new ki(f);if(g.g!="")h&&(g.g=h+"."+g.g),Nl(g,g.s);else{var L=l.location;g=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;var F=new ki(null);g&&xl(F,g),h&&(F.g=h),L&&Nl(F,L),f&&(F.l=f),g=F}return f=a.D,h=a.ya,f&&h&&Fe(g,f,h),Fe(g,"VER",a.la),Bo(a,g),g}function Ym(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Qe(new Fo({eb:f})):new Qe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xm(){}t=Xm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ul(){}Ul.prototype.g=function(a,h){return new sn(a,h)};function sn(a,h){at.call(this),this.g=new jm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ws(this)}C(sn,at),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){vh(this.g)},sn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ms(a),a=f);h.i.push(new vs(h.Ya++,a)),h.G==3&&Vl(h)},sn.prototype.N=function(){this.g.l=null,delete this.j,vh(this.g),delete this.g,sn.aa.N.call(this)};function Jm(a){Mr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(Jm,Mr);function Zm(){Pi.call(this),this.status=1}C(Zm,Pi);function ws(a){this.g=a}C(ws,Xm),ws.prototype.ua=function(){lt(this.g,"a")},ws.prototype.ta=function(a){lt(this.g,new Jm(a))},ws.prototype.sa=function(a){lt(this.g,new Zm)},ws.prototype.ra=function(){lt(this.g,"b")},Ul.prototype.createWebChannel=Ul.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,iT=function(){return new Ul},rT=function(){return ys()},nT=sr,pf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},W.NO_ERROR=0,W.TIMEOUT=8,W.HTTP_ERROR=6,Au=W,ue.COMPLETE="complete",tT=ue,xo.EventType=ir,ir.OPEN="a",ir.CLOSE="b",ir.ERROR="c",ir.MESSAGE="d",at.prototype.listen=at.prototype.K,ca=xo,eT=Fo,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,ZE=Qe}).apply(typeof su<"u"?su:typeof self<"u"?self:typeof window<"u"?window:{});const mv="@firebase/firestore";/**
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
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
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
 */let Eo="10.12.3";/**
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
 */const is=new ml("@firebase/firestore");function ea(){return is.logLevel}function X(t,...e){if(is.logLevel<=ve.DEBUG){const n=e.map(Yp);is.debug(`Firestore (${Eo}): ${t}`,...n)}}function Ar(t,...e){if(is.logLevel<=ve.ERROR){const n=e.map(Yp);is.error(`Firestore (${Eo}): ${t}`,...n)}}function oo(t,...e){if(is.logLevel<=ve.WARN){const n=e.map(Yp);is.warn(`Firestore (${Eo}): ${t}`,...n)}}function Yp(t){if(typeof t=="string")return t;try{/**
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
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Eo}) INTERNAL ASSERTION FAILED: `+t;throw Ar(e),new Error(e)}function Le(t,e){t||ae()}function he(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ui{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class sT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ix{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class Sx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Rx{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ui;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ui,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ui)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new sT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new Ot(e)}}class Ax{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Px{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ax(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new Cx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Dx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class oT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Dx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Pe(t,e){return t<e?-1:t>e?1:0}function ao(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class dt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new dt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new dt(0,0))}static max(){return new ce(new dt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class tl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Xe extends tl{construct(e,n,r){return new Xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Xe(n)}static emptyPath(){return new Xe([])}}const xx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends tl{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return xx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new re($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new re($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new re($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new re($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Xe.fromString(e))}static fromName(e){return new ie(Xe.fromString(e).popFirst(5))}static empty(){return new ie(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Xe(e.slice()))}}function Nx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ce.fromTimestamp(r===1e9?new dt(n+1,0):new dt(n,r));return new pi(i,ie.empty(),e)}function bx(t){return new pi(t.readTime,t.key,-1)}class pi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pi(ce.min(),ie.empty(),-1)}static max(){return new pi(ce.max(),ie.empty(),-1)}}function Ox(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const Lx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function wl(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==Lx)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Vx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function El(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Xp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xp.oe=-1;function Zc(t){return t==null}function pc(t){return t===0&&1/t==-1/0}function Fx(t){return typeof t=="number"&&Number.isInteger(t)&&!pc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function gv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function us(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function aT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ou(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ou(this.root,e,this.comparator,!1)}getReverseIterator(){return new ou(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ou(this.root,e,this.comparator,!0)}}class ou{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Et.RED,this.left=i??Et.EMPTY,this.right=s??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class St{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yv(this.data.getIterator())}getIteratorFrom(e){return new yv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new St(this.comparator);return n.data=e,n}}class yv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class un{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new un([])}unionWith(e){let n=new St(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ao(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lT("Invalid base64 string: "+s):s}}(e);return new Ut(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const Ux=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mi(t){if(Le(!!t),typeof t=="string"){let e=0;const n=Ux.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ss(t){return typeof t=="string"?Ut.fromBase64String(t):Ut.fromUint8Array(t)}/**
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
 */function Jp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zp(t){const e=t.mapValue.fields.__previous_value__;return Jp(e)?Zp(e):e}function nl(t){const e=mi(t.mapValue.fields.__local_write_time__.timestampValue);return new dt(e.seconds,e.nanos)}/**
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
 */class jx{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class rl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new rl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof rl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const au={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jp(t)?4:zx(t)?9007199254740991:10:ae()}function tr(t,e){if(t===e)return!0;const n=os(t);if(n!==os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return nl(t).isEqual(nl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mi(i.timestampValue),l=mi(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ss(i.bytesValue).isEqual(ss(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return st(i.geoPointValue.latitude)===st(s.geoPointValue.latitude)&&st(i.geoPointValue.longitude)===st(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return st(i.integerValue)===st(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=st(i.doubleValue),l=st(s.doubleValue);return o===l?pc(o)===pc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ao(t.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(gv(o)!==gv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!tr(o[u],l[u])))return!1;return!0}(t,e);default:return ae()}}function il(t,e){return(t.values||[]).find(n=>tr(n,e))!==void 0}function lo(t,e){if(t===e)return 0;const n=os(t),r=os(e);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=st(s.integerValue||s.doubleValue),u=st(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return vv(t.timestampValue,e.timestampValue);case 4:return vv(nl(t),nl(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ss(s),u=ss(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=Pe(l[c],u[c]);if(d!==0)return d}return Pe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Pe(st(s.latitude),st(o.latitude));return l!==0?l:Pe(st(s.longitude),st(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const d=lo(l[c],u[c]);if(d)return d}return Pe(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===au.mapValue&&o===au.mapValue)return 0;if(s===au.mapValue)return 1;if(o===au.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=Pe(u[p],d[p]);if(m!==0)return m;const E=lo(l[u[p]],c[d[p]]);if(E!==0)return E}return Pe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ae()}}function vv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=mi(t),r=mi(e),i=Pe(n.seconds,r.seconds);return i!==0?i:Pe(n.nanos,r.nanos)}function uo(t){return mf(t)}function mf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ss(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=mf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${mf(n.fields[o])}`;return i+"}"}(t.mapValue):ae()}function gf(t){return!!t&&"integerValue"in t}function em(t){return!!t&&"arrayValue"in t}function _v(t){return!!t&&"nullValue"in t}function wv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pu(t){return!!t&&"mapValue"in t}function Aa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return us(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Aa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Aa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Aa(n)}setAll(e){let n=Tt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Aa(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){us(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Kt(Aa(this.value))}}function uT(t){const e=[];return us(t.fields,(n,r)=>{const i=new Tt([n]);if(Pu(r)){const s=uT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new un(e)}/**
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
 */class Mt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Mt(e,0,ce.min(),ce.min(),ce.min(),Kt.empty(),0)}static newFoundDocument(e,n,r,i){return new Mt(e,1,n,ce.min(),r,i,0)}static newNoDocument(e,n){return new Mt(e,2,n,ce.min(),ce.min(),Kt.empty(),0)}static newUnknownDocument(e,n){return new Mt(e,3,n,ce.min(),ce.min(),Kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mc{constructor(e,n){this.position=e,this.inclusive=n}}function Ev(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=lo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class gc{constructor(e,n="asc"){this.field=e,this.dir=n}}function Bx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cT{}class ct extends cT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Hx(e,n,r):n==="array-contains"?new Kx(e,r):n==="in"?new Gx(e,r):n==="not-in"?new Qx(e,r):n==="array-contains-any"?new Yx(e,r):new ct(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Wx(e,r):new qx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(lo(n,this.value)):n!==null&&os(this.value)===os(n)&&this.matchesComparison(lo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nr extends cT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new nr(e,n)}matches(e){return hT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hT(t){return t.op==="and"}function dT(t){return $x(t)&&hT(t)}function $x(t){for(const e of t.filters)if(e instanceof nr)return!1;return!0}function yf(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+uo(t.value);if(dT(t))return t.filters.map(e=>yf(e)).join(",");{const e=t.filters.map(n=>yf(n)).join(",");return`${t.op}(${e})`}}function fT(t,e){return t instanceof ct?function(r,i){return i instanceof ct&&r.op===i.op&&r.field.isEqual(i.field)&&tr(r.value,i.value)}(t,e):t instanceof nr?function(r,i){return i instanceof nr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&fT(o,i.filters[l]),!0):!1}(t,e):void ae()}function pT(t){return t instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${uo(n.value)}`}(t):t instanceof nr?function(n){return n.op.toString()+" {"+n.getFilters().map(pT).join(" ,")+"}"}(t):"Filter"}class Hx extends ct{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class Wx extends ct{constructor(e,n){super(e,"in",n),this.keys=mT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qx extends ct{constructor(e,n){super(e,"not-in",n),this.keys=mT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class Kx extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return em(n)&&il(n.arrayValue,this.value)}}class Gx extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&il(this.value.arrayValue,n)}}class Qx extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(il(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!il(this.value.arrayValue,n)}}class Yx extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!em(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>il(this.value.arrayValue,r))}}/**
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
 */class Xx{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Iv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Xx(t,e,n,r,i,s,o)}function tm(t){const e=he(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Zc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>uo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>uo(r)).join(",")),e.ue=n}return e.ue}function nm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Bx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tv(t.startAt,e.startAt)&&Tv(t.endAt,e.endAt)}function vf(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class eh{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Jx(t,e,n,r,i,s,o,l){return new eh(t,e,n,r,i,s,o,l)}function th(t){return new eh(t)}function Sv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Zx(t){return t.collectionGroup!==null}function Pa(t){const e=he(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new St(Tt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new gc(s,r))}),n.has(Tt.keyField().canonicalString())||e.ce.push(new gc(Tt.keyField(),r))}return e.ce}function Xn(t){const e=he(t);return e.le||(e.le=eN(e,Pa(t))),e.le}function eN(t,e){if(t.limitType==="F")return Iv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new gc(i.field,s)});const n=t.endAt?new mc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new mc(t.startAt.position,t.startAt.inclusive):null;return Iv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function _f(t,e,n){return new eh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nh(t,e){return nm(Xn(t),Xn(e))&&t.limitType===e.limitType}function gT(t){return`${tm(Xn(t))}|lt:${t.limitType}`}function Ss(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>pT(i)).join(", ")}]`),Zc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>uo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>uo(i)).join(",")),`Target(${r})`}(Xn(t))}; limitType=${t.limitType})`}function rh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ie.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Pa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Ev(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Pa(r),i)||r.endAt&&!function(o,l,u){const c=Ev(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Pa(r),i))}(t,e)}function tN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yT(t){return(e,n)=>{let r=!1;for(const i of Pa(t)){const s=nN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function nN(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?lo(u,c):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
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
 */class To{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){us(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return aT(this.inner)}size(){return this.innerSize}}/**
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
 */const rN=new Ge(ie.comparator);function Pr(){return rN}const vT=new Ge(ie.comparator);function ha(...t){let e=vT;for(const n of t)e=e.insert(n.key,n);return e}function _T(t){let e=vT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $i(){return Ca()}function wT(){return Ca()}function Ca(){return new To(t=>t.toString(),(t,e)=>t.isEqual(e))}const iN=new Ge(ie.comparator),sN=new St(ie.comparator);function _e(...t){let e=sN;for(const n of t)e=e.add(n);return e}const oN=new St(Pe);function aN(){return oN}/**
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
 */function ET(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pc(e)?"-0":e}}function TT(t){return{integerValue:""+t}}function lN(t,e){return Fx(e)?TT(e):ET(t,e)}/**
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
 */class ih{constructor(){this._=void 0}}function uN(t,e,n){return t instanceof yc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jp(s)&&(s=Zp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof sl?ST(t,e):t instanceof ol?RT(t,e):function(i,s){const o=IT(i,s),l=Rv(o)+Rv(i.Pe);return gf(o)&&gf(i.Pe)?TT(l):ET(i.serializer,l)}(t,e)}function cN(t,e,n){return t instanceof sl?ST(t,e):t instanceof ol?RT(t,e):n}function IT(t,e){return t instanceof vc?function(r){return gf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class yc extends ih{}class sl extends ih{constructor(e){super(),this.elements=e}}function ST(t,e){const n=AT(e);for(const r of t.elements)n.some(i=>tr(i,r))||n.push(r);return{arrayValue:{values:n}}}class ol extends ih{constructor(e){super(),this.elements=e}}function RT(t,e){let n=AT(e);for(const r of t.elements)n=n.filter(i=>!tr(i,r));return{arrayValue:{values:n}}}class vc extends ih{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Rv(t){return st(t.integerValue||t.doubleValue)}function AT(t){return em(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof sl&&i instanceof sl||r instanceof ol&&i instanceof ol?ao(r.elements,i.elements,tr):r instanceof vc&&i instanceof vc?tr(r.Pe,i.Pe):r instanceof yc&&i instanceof yc}(t.transform,e.transform)}class dN{constructor(e,n){this.version=e,this.transformResults=n}}class Jn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jn}static exists(e){return new Jn(void 0,e)}static updateTime(e){return new Jn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sh{}function PT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kT(t.key,Jn.none()):new Tl(t.key,t.data,Jn.none());{const n=t.data,r=Kt.empty();let i=new St(Tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ii(t.key,r,new un(i.toArray()),Jn.none())}}function fN(t,e,n){t instanceof Tl?function(i,s,o){const l=i.value.clone(),u=Pv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ii?function(i,s,o){if(!Cu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Pv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(CT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ka(t,e,n,r){return t instanceof Tl?function(s,o,l,u){if(!Cu(s.precondition,o))return l;const c=s.value.clone(),d=Cv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ii?function(s,o,l,u){if(!Cu(s.precondition,o))return l;const c=Cv(s.fieldTransforms,u,o),d=o.data;return d.setAll(CT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Cu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function pN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=IT(r.transform,i||null);s!=null&&(n===null&&(n=Kt.empty()),n.set(r.field,s))}return n||null}function Av(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ao(r,i,(s,o)=>hN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tl extends sh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ii extends sh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function CT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pv(t,e,n){const r=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,cN(o,l,n[i]))}return r}function Cv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,uN(s,o,e))}return r}class kT extends sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mN extends sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&fN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ka(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ka(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=PT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&ao(this.mutations,e.mutations,(n,r)=>Av(n,r))&&ao(this.baseMutations,e.baseMutations,(n,r)=>Av(n,r))}}class rm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Le(e.mutations.length===r.length);let i=function(){return iN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new rm(e,n,r,i)}}/**
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
 */class yN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var rt,Te;function _N(t){switch(t){default:return ae();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function DT(t){if(t===void 0)return Ar("GRPC error has no .code"),$.UNKNOWN;switch(t){case rt.OK:return $.OK;case rt.CANCELLED:return $.CANCELLED;case rt.UNKNOWN:return $.UNKNOWN;case rt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case rt.INTERNAL:return $.INTERNAL;case rt.UNAVAILABLE:return $.UNAVAILABLE;case rt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case rt.NOT_FOUND:return $.NOT_FOUND;case rt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case rt.ABORTED:return $.ABORTED;case rt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case rt.DATA_LOSS:return $.DATA_LOSS;default:return ae()}}(Te=rt||(rt={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function wN(){return new TextEncoder}/**
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
 */const EN=new qi([4294967295,4294967295],0);function kv(t){const e=wN().encode(t),n=new JE;return n.update(e),new Uint8Array(n.digest())}function Dv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qi([n,r],0),new qi([i,s],0)]}class im{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new da(`Invalid padding: ${n}`);if(r<0)throw new da(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new da(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new da(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=qi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(qi.fromNumber(r)));return i.compare(EN)===1&&(i=new qi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=kv(e),[r,i]=Dv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new im(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=kv(e),[r,i]=Dv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class da extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class oh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Il.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new oh(ce.min(),i,new Ge(Pe),Pr(),_e())}}class Il{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Il(r,n,_e(),_e(),_e())}}/**
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
 */class ku{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class xT{constructor(e,n){this.targetId=e,this.me=n}}class NT{constructor(e,n,r=Ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class xv{constructor(){this.fe=0,this.ge=bv(),this.pe=Ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ae()}}),new Il(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=bv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class TN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Pr(),this.qe=Nv(),this.Qe=new Ge(Pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(vf(s))if(r===0){const o=new ie(s.path);this.Ue(n,o,Mt.newNoDocument(o,ce.min()))}else Le(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ss(r).toUint8Array()}catch(u){if(u instanceof lT)return oo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new im(o,i,s)}catch(u){return oo(u instanceof da?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&vf(l.target)){const u=new ie(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Mt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=_e();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new oh(e,n,this.Qe,this.ke,r);return this.ke=Pr(),this.qe=Nv(),this.Qe=new Ge(Pe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new xv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new St(Pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new xv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Nv(){return new Ge(ie.comparator)}function bv(){return new Ge(ie.comparator)}const IN={asc:"ASCENDING",desc:"DESCENDING"},SN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RN={and:"AND",or:"OR"};class AN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wf(t,e){return t.useProto3Json||Zc(e)?e:{value:e}}function _c(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function PN(t,e){return _c(t,e.toTimestamp())}function Zn(t){return Le(!!t),ce.fromTimestamp(function(n){const r=mi(n);return new dt(r.seconds,r.nanos)}(t))}function sm(t,e){return Ef(t,e).canonicalString()}function Ef(t,e){const n=function(i){return new Xe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function OT(t){const e=Xe.fromString(t);return Le(UT(e)),e}function Tf(t,e){return sm(t.databaseId,e.path)}function ad(t,e){const n=OT(e);if(n.get(1)!==t.databaseId.projectId)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(MT(n))}function LT(t,e){return sm(t.databaseId,e)}function CN(t){const e=OT(t);return e.length===4?Xe.emptyPath():MT(e)}function If(t){return new Xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function MT(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ov(t,e,n){return{name:Tf(t,e),fields:n.value.mapValue.fields}}function kN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Le(d===void 0||typeof d=="string"),Ut.fromBase64String(d||"")):(Le(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ut.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?$.UNKNOWN:DT(c.code);return new re(d,c.message||"")}(o);n=new NT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ad(t,r.document.name),s=Zn(r.document.updateTime),o=r.document.createTime?Zn(r.document.createTime):ce.min(),l=new Kt({mapValue:{fields:r.document.fields}}),u=Mt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new ku(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ad(t,r.document),s=r.readTime?Zn(r.readTime):ce.min(),o=Mt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ku([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ad(t,r.document),s=r.removedTargetIds||[];n=new ku([],s,i,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vN(i,s),l=r.targetId;n=new xT(l,o)}}return n}function DN(t,e){let n;if(e instanceof Tl)n={update:Ov(t,e.key,e.value)};else if(e instanceof kT)n={delete:Tf(t,e.key)};else if(e instanceof Ii)n={update:Ov(t,e.key,e.data),updateMask:UN(e.fieldMask)};else{if(!(e instanceof mN))return ae();n={verify:Tf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof yc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof sl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ol)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof vc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:PN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ae()}(t,e.precondition)),n}function xN(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Zn(i.updateTime):Zn(s);return o.isEqual(ce.min())&&(o=Zn(s)),new dN(o,i.transformResults||[])}(n,e))):[]}function NN(t,e){return{documents:[LT(t,e.path)]}}function bN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=LT(t,i);const s=function(c){if(c.length!==0)return FT(nr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Rs(m.field),direction:MN(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=wf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function ON(t){let e=CN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Le(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=VT(p);return m instanceof nr&&dT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new gc(As(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Zc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,E=p.values||[];return new mc(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,E=p.values||[];return new mc(E,m)}(n.endAt)),Jx(e,i,o,s,l,"F",u,c)}function LN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function VT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=As(n.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=As(n.unaryFilter.field);return ct.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=As(n.unaryFilter.field);return ct.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=As(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return ct.create(As(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nr.create(n.compositeFilter.filters.map(r=>VT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function MN(t){return IN[t]}function VN(t){return SN[t]}function FN(t){return RN[t]}function Rs(t){return{fieldPath:t.canonicalString()}}function As(t){return Tt.fromServerFormat(t.fieldPath)}function FT(t){return t instanceof ct?function(n){if(n.op==="=="){if(wv(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NAN"}};if(_v(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wv(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NOT_NAN"}};if(_v(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rs(n.field),op:VN(n.op),value:n.value}}}(t):t instanceof nr?function(n){const r=n.getFilters().map(i=>FT(i));return r.length===1?r[0]:{compositeFilter:{op:FN(n.op),filters:r}}}(t):ae()}function UN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function UT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Zr{constructor(e,n,r,i,s=ce.min(),o=ce.min(),l=Ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class jN{constructor(e){this.ct=e}}function zN(t){const e=ON({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_f(e,e.limit,"L"):e}/**
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
 */class BN{constructor(){this._n=new $N}addToCollectionParentIndex(e,n){return this._n.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(pi.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(pi.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class $N{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new St(Xe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new St(Xe.comparator)).toArray()}}/**
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
 */class co{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new co(0)}static Ln(){return new co(-1)}}/**
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
 */class HN{constructor(){this.changes=new To(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class WN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class qN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ka(r.mutation,i,un.empty(),dt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const i=$i();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ha();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$i();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Pr();const o=Ca(),l=function(){return Ca()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ii)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ka(d.mutation,c,d.mutation.getFieldMask(),dt.now())):o.set(c.key,un.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new WN(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ca();let i=new Ge((o,l)=>o-l),s=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||un.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||_e()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=wT();d.forEach(m=>{if(!s.has(m)){const E=PT(n.get(m),r.get(m));E!==null&&p.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Zx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve($i());let l=-1,u=s;return o.next(c=>B.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,_e())).next(d=>({batchId:l,changes:_T(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let i=ha();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ha();return this.indexManager.getCollectionParents(e,s).next(l=>B.forEach(l,u=>{const c=function(p,m){return new eh(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Mt.newInvalidDocument(d)))});let l=ha();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ka(d.mutation,c,un.empty(),dt.now()),rh(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class KN{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return B.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Zn(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:zN(i.bundledQuery),readTime:Zn(i.readTime)}}(n)),B.resolve()}}/**
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
 */class GN{constructor(){this.overlays=new Ge(ie.comparator),this.hr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$i();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=$i(),s=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ge((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=$i(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=$i(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return B.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new yN(n,r));let s=this.hr.get(n);s===void 0&&(s=_e(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class om{constructor(){this.Pr=new St(pt.Ir),this.Tr=new St(pt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new pt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new pt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ie(new Xe([])),r=new pt(n,e),i=new pt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ie(new Xe([])),r=new pt(n,e),i=new pt(n,e+1);let s=_e();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new pt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ie.comparator(e.key,n.key)||Pe(e.pr,n.pr)}static Er(e,n){return Pe(e.pr,n.pr)||ie.comparator(e.key,n.key)}}/**
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
 */class QN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new St(pt.Ir)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new pt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new pt(n,0),i=new pt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const l=this.Sr(o.pr);s.push(l)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new St(Pe);return n.forEach(i=>{const s=new pt(i,0),o=new pt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],l=>{r=r.add(l.pr)})}),B.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ie.isDocumentKey(s)||(s=s.child(""));const o=new pt(new ie(s),0);let l=new St(Pe);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.pr)),!0)},o),B.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return B.forEach(n.mutations,i=>{const s=new pt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new pt(n,0),i=this.wr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class YN{constructor(e){this.vr=e,this.docs=function(){return new Ge(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(n))}getEntries(e,n){let r=Pr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Mt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Pr();const o=n.path,l=new ie(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ox(bx(d),r)<=0||(i.has(d.key)||rh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ae()}Fr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new XN(this)}getSize(e){return B.resolve(this.size)}}class XN extends HN{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class JN{constructor(e){this.persistence=e,this.Mr=new To(n=>tm(n),nm),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Or=0,this.Nr=new om,this.targetCount=0,this.Lr=co.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),B.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new co(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.qn(n),B.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Nr.containsKey(n))}}/**
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
 */class ZN{constructor(e,n){this.Br={},this.overlays={},this.kr=new Xp(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new JN(this),this.indexManager=new BN,this.remoteDocumentCache=function(i){return new YN(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new jN(n),this.$r=new KN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new QN(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new eb(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return B.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class eb extends Mx{constructor(e){super(),this.currentSequenceNumber=e}}class am{constructor(e){this.persistence=e,this.zr=new om,this.jr=null}static Hr(e){return new am(e)}get Jr(){if(this.jr)return this.jr;throw ae()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),B.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Jr,r=>{const i=ie.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ce.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return B.or([()=>B.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class lm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=_e(),i=_e();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new lm(e,n.fromCache,r,i)}}/**
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
 */class tb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class nb{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return yP()?8:Vx(At())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new tb;return this.Ji(e,n,o).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,n,o,l.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(ea()<=ve.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),B.resolve()):(ea()<=ve.DEBUG&&X("QueryEngine","Query:",Ss(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ea()<=ve.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(n))):B.resolve())}ji(e,n){if(Sv(n))return B.resolve(null);let r=Xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=_f(n,null,"F"),r=Xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=_e(...s);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,l);return this.Xi(n,c,o,u.readTime)?this.ji(e,_f(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return Sv(n)||i.isEqual(ce.min())?B.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?B.resolve(null):(ea()<=ve.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ss(n)),this.es(e,o,n,Nx(i,-1)).next(l=>l))})}Zi(e,n){let r=new St(yT(e));return n.forEach((i,s)=>{rh(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return ea()<=ve.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Ss(n)),this.zi.getDocumentsMatchingQuery(e,n,pi.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class rb{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ge(Pe),this.rs=new To(s=>tm(s),nm),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qN(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function ib(t,e,n,r){return new rb(t,e,n,r)}async function jT(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=_e();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:l}))})})}function sb(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let E=B.resolve();return m.forEach(C=>{E=E.next(()=>d.getEntry(u,C)).next(k=>{const O=c.docVersions.get(C);Le(O!==null),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=_e();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function zT(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function ob(t,e){const n=he(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,p)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(Ut.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(p,E),function(k,O,I){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,E,d)&&l.push(n.Qr.updateTargetData(s,E))});let u=Pr(),c=_e();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(ab(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(ce.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(p=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return B.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function ab(t,e,n){let r=_e(),i=_e();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Pr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ce.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function lb(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ub(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Zr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Sf(t,e,n){const r=he(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!El(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Lv(t,e,n){const r=he(t);let i=ce.min(),s=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=he(u),m=p.rs.get(d);return m!==void 0?B.resolve(p.ns.get(m)):p.Qr.getTargetData(c,d)}(r,o,Xn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ce.min(),n?s:_e())).next(l=>(cb(r,tN(e),l),{documents:l,hs:s})))}function cb(t,e,n){let r=t.ss.get(e)||ce.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Mv{constructor(){this.activeTargetIds=aN()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hb{constructor(){this.no=new Mv,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Mv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class db{io(e){}shutdown(){}}/**
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
 */class Vv{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lu=null;function ld(){return lu===null?lu=function(){return 268435456+Math.round(2147483648*Math.random())}():lu++,"0x"+lu.toString(16)}/**
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
 */const fb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class pb{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const bt="WebChannelConnection";class mb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const l=ld(),u=this.vo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(X("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw oo("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,l){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Eo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=fb[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=ld();return new Promise((o,l)=>{const u=new ZE;u.setWithCredentials(!0),u.listenOnce(tT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Au.NO_ERROR:const d=u.getResponseJson();X(bt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Au.TIMEOUT:X(bt,`RPC '${e}' ${s} timed out`),l(new re($.DEADLINE_EXCEEDED,"Request time out"));break;case Au.HTTP_ERROR:const p=u.getStatus();if(X(bt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const C=function(O){const I=O.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(I)>=0?I:$.UNKNOWN}(E.status);l(new re(C,E.message))}else l(new re($.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new re($.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{X(bt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);X(bt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=ld(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iT(),l=rT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new eT({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");X(bt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,E=!1;const C=new pb({lo:O=>{E?X(bt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(m||(X(bt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),X(bt,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},ho:()=>p.close()}),k=(O,I,_)=>{O.listen(I,A=>{try{_(A)}catch(V){setTimeout(()=>{throw V},0)}})};return k(p,ca.EventType.OPEN,()=>{E||(X(bt,`RPC '${e}' stream ${i} transport opened.`),C.mo())}),k(p,ca.EventType.CLOSE,()=>{E||(E=!0,X(bt,`RPC '${e}' stream ${i} transport closed`),C.po())}),k(p,ca.EventType.ERROR,O=>{E||(E=!0,oo(bt,`RPC '${e}' stream ${i} transport errored:`,O),C.po(new re($.UNAVAILABLE,"The operation could not be completed")))}),k(p,ca.EventType.MESSAGE,O=>{var I;if(!E){const _=O.data[0];Le(!!_);const A=_,V=A.error||((I=A[0])===null||I===void 0?void 0:I.error);if(V){X(bt,`RPC '${e}' stream ${i} received error:`,V);const z=V.status;let x=function(v){const S=rt[v];if(S!==void 0)return DT(S)}(z),w=V.message;x===void 0&&(x=$.INTERNAL,w="Unknown error status: "+z+" with message "+V.message),E=!0,C.po(new re(x,w)),p.close()}else X(bt,`RPC '${e}' stream ${i} received:`,_),C.yo(_)}}),k(l,nT.STAT_EVENT,O=>{O.stat===pf.PROXY?X(bt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===pf.NOPROXY&&X(bt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function ud(){return typeof document<"u"?document:null}/**
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
 */function ah(t){return new AN(t,!0)}/**
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
 */class BT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class $T{constructor(e,n,r,i,s,o,l,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new BT(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Ar(n.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new re($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gb extends $T{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=kN(this.serializer,e),r=function(s){if(!("targetChange"in s))return ce.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?Zn(o.readTime):ce.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=If(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=vf(u)?{documents:NN(s,u)}:{query:bN(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=bT(s,o.resumeToken);const c=wf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ce.min())>0){l.readTime=_c(s,o.snapshotVersion.toTimestamp());const c=wf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=LN(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=If(this.serializer),n.removeTarget=e,this.i_(n)}}class yb extends $T{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=xN(e.writeResults,e.commitTime),r=Zn(e.commitTime);return this.listener.A_(r,n)}return Le(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=If(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>DN(this.serializer,r))};this.i_(n)}}/**
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
 */class vb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Ef(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new re($.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,Ef(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re($.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class _b{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Ar(n),this.y_=!1):X("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class wb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{cs(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=he(u);c.M_.add(4),await Sl(c),c.N_.set("Unknown"),c.M_.delete(4),await lh(c)}(this))})}),this.N_=new _b(r,i)}}async function lh(t){if(cs(t))for(const e of t.x_)await e(!0)}async function Sl(t){for(const e of t.x_)await e(!1)}function HT(t,e){const n=he(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),dm(n)?hm(n):Io(n).Xo()&&cm(n,e))}function um(t,e){const n=he(t),r=Io(n);n.F_.delete(e),r.Xo()&&WT(n,e),n.F_.size===0&&(r.Xo()?r.n_():cs(n)&&n.N_.set("Unknown"))}function cm(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Io(t).P_(e)}function WT(t,e){t.L_.xe(e),Io(t).I_(e)}function hm(t){t.L_=new TN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Io(t).start(),t.N_.w_()}function dm(t){return cs(t)&&!Io(t).Zo()&&t.F_.size>0}function cs(t){return he(t).M_.size===0}function qT(t){t.L_=void 0}async function Eb(t){t.N_.set("Online")}async function Tb(t){t.F_.forEach((e,n)=>{cm(t,e)})}async function Ib(t,e){qT(t),dm(t)?(t.N_.D_(e),hm(t)):t.N_.set("Unknown")}async function Sb(t,e,n){if(t.N_.set("Online"),e instanceof NT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.F_.delete(l),i.L_.removeTarget(l))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wc(t,r)}else if(e instanceof ku?t.L_.Ke(e):e instanceof xT?t.L_.He(e):t.L_.We(e),!n.isEqual(ce.min()))try{const r=await zT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.L_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(Ut.EMPTY_BYTE_STRING,d.snapshotVersion)),WT(s,u);const p=new Zr(d.target,u,c,d.sequenceNumber);cm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await wc(t,r)}}async function wc(t,e,n){if(!El(e))throw e;t.M_.add(1),await Sl(t),t.N_.set("Offline"),n||(n=()=>zT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await lh(t)})}function KT(t,e){return e().catch(n=>wc(t,n,e))}async function uh(t){const e=he(t),n=gi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;Rb(e);)try{const i=await lb(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,Ab(e,i)}catch(i){await wc(e,i)}GT(e)&&QT(e)}function Rb(t){return cs(t)&&t.v_.length<10}function Ab(t,e){t.v_.push(e);const n=gi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function GT(t){return cs(t)&&!gi(t).Zo()&&t.v_.length>0}function QT(t){gi(t).start()}async function Pb(t){gi(t).V_()}async function Cb(t){const e=gi(t);for(const n of t.v_)e.d_(n.mutations)}async function kb(t,e,n){const r=t.v_.shift(),i=rm.from(r,e,n);await KT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await uh(t)}async function Db(t,e){e&&gi(t).E_&&await async function(r,i){if(function(o){return _N(o)&&o!==$.ABORTED}(i.code)){const s=r.v_.shift();gi(r).t_(),await KT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await uh(r)}}(t,e),GT(t)&&QT(t)}async function Fv(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=cs(n);n.M_.add(3),await Sl(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await lh(n)}async function xb(t,e){const n=he(t);e?(n.M_.delete(2),await lh(n)):e||(n.M_.add(2),await Sl(n),n.N_.set("Unknown"))}function Io(t){return t.B_||(t.B_=function(n,r,i){const s=he(n);return s.f_(),new gb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:Eb.bind(null,t),To:Tb.bind(null,t),Ao:Ib.bind(null,t),h_:Sb.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),dm(t)?hm(t):t.N_.set("Unknown")):(await t.B_.stop(),qT(t))})),t.B_}function gi(t){return t.k_||(t.k_=function(n,r,i){const s=he(n);return s.f_(),new yb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:Pb.bind(null,t),Ao:Db.bind(null,t),R_:Cb.bind(null,t),A_:kb.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await uh(t)):(await t.k_.stop(),t.v_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class fm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new fm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pm(t,e){if(Ar("AsyncQueue",`${e}: ${t}`),El(t))return new re($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Gs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=ha(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new Gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Uv{constructor(){this.q_=new Ge(ie.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ae():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ho{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ho(e,n,Gs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Nb{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class bb{constructor(){this.queries=new To(e=>gT(e),nh),this.onlineState="Unknown",this.z_=new Set}}async function YT(t,e){const n=he(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new Nb,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=pm(o,`Initialization of query '${Ss(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&mm(n)}async function XT(t,e){const n=he(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ob(t,e){const n=he(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.U_)l.H_(i)&&(r=!0);o.K_=i}}r&&mm(n)}function Lb(t,e,n){const r=he(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function mm(t){t.z_.forEach(e=>{e.next()})}var Rf,jv;(jv=Rf||(Rf={})).J_="default",jv.Cache="cache";class JT{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ho(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Rf.Cache}}/**
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
 */class ZT{constructor(e){this.key=e}}class eI{constructor(e){this.key=e}}class Mb{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=_e(),this.mutatedKeys=_e(),this.Ia=yT(e),this.Ta=new Gs(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Uv,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),E=rh(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),k=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let O=!1;m&&E?m.data.isEqual(E.data)?C!==k&&(r.track({type:3,doc:E}),O=!0):this.Ra(m,E)||(r.track({type:2,doc:E}),O=!0,(u&&this.Ia(E,u)>0||c&&this.Ia(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),O=!0):m&&!E&&(r.track({type:1,doc:m}),O=!0,(u||c)&&(l=!0)),O&&(E?(o=o.add(E),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(E,C){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return k(E)-k(C)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new ho(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Uv,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=_e(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new eI(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new ZT(r))}),n}pa(e){this.la=e.hs,this.Pa=_e();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ho.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Vb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Fb{constructor(e){this.key=e,this.wa=!1}}class Ub{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new To(l=>gT(l),nh),this.Da=new Map,this.Ca=new Set,this.va=new Ge(ie.comparator),this.Fa=new Map,this.Ma=new om,this.xa={},this.Oa=new Map,this.Na=co.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function jb(t,e,n=!0){const r=oI(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await tI(r,e,n,!0),i}async function zb(t,e){const n=oI(t);await tI(n,e,!0,!1)}async function tI(t,e,n,r){const i=await ub(t.localStore,Xn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await Bb(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&HT(t.remoteStore,i),l}async function Bb(t,e,n,r,i){t.Ba=(p,m,E)=>async function(k,O,I,_){let A=O.view.da(I);A.Xi&&(A=await Lv(k.localStore,O.query,!1).then(({documents:w})=>O.view.da(w,A)));const V=_&&_.targetChanges.get(O.targetId),z=_&&_.targetMismatches.get(O.targetId)!=null,x=O.view.applyChanges(A,k.isPrimaryClient,V,z);return Bv(k,O.targetId,x.fa),x.snapshot}(t,p,m,E);const s=await Lv(t.localStore,e,!0),o=new Mb(e,s.hs),l=o.da(s.documents),u=Il.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Bv(t,n,c.fa);const d=new Vb(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function $b(t,e,n){const r=he(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!nh(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Sf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&um(r.remoteStore,i.targetId),Af(r,i.targetId)}).catch(wl)):(Af(r,i.targetId),await Sf(r.localStore,i.targetId,!0))}async function Hb(t,e){const n=he(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),um(n.remoteStore,r.targetId))}async function Wb(t,e,n){const r=Jb(t);try{const i=await function(o,l){const u=he(o),c=dt.now(),d=l.reduce((E,C)=>E.add(C.key),_e());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let C=Pr(),k=_e();return u.os.getEntries(E,d).next(O=>{C=O,C.forEach((I,_)=>{_.isValidDocument()||(k=k.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,C)).next(O=>{p=O;const I=[];for(const _ of l){const A=pN(_,p.get(_.key).overlayedDocument);A!=null&&I.push(new Ii(_.key,A,uT(A.value.mapValue),Jn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,I,l)}).next(O=>{m=O;const I=O.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(E,O.batchId,I)})}).then(()=>({batchId:m.batchId,changes:_T(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Ge(Pe)),c=c.insert(l,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Rl(r,i.changes),await uh(r.remoteStore)}catch(i){const s=pm(i,"Failed to persist write");n.reject(s)}}async function nI(t,e){const n=he(t);try{const r=await ob(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Le(o.wa):i.removedDocuments.size>0&&(Le(o.wa),o.wa=!1))}),await Rl(n,r,e)}catch(r){await wl(r)}}function zv(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=he(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.U_)m.j_(l)&&(c=!0)}),c&&mm(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qb(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Ge(ie.comparator);o=o.insert(s,Mt.newNoDocument(s,ce.min()));const l=_e().add(s),u=new oh(ce.min(),new Map,new Ge(Pe),o,l);await nI(r,u),r.va=r.va.remove(s),r.Fa.delete(e),gm(r)}else await Sf(r.localStore,e,!1).then(()=>Af(r,e,n)).catch(wl)}async function Kb(t,e){const n=he(t),r=e.batch.batchId;try{const i=await sb(n.localStore,e);iI(n,r,null),rI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Rl(n,i)}catch(i){await wl(i)}}async function Gb(t,e,n){const r=he(t);try{const i=await function(o,l){const u=he(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(Le(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);iI(r,e,n),rI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Rl(r,i)}catch(i){await wl(i)}}function rI(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function iI(t,e,n){const r=he(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Af(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||sI(t,r)})}function sI(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(um(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),gm(t))}function Bv(t,e,n){for(const r of n)r instanceof ZT?(t.Ma.addReference(r.key,e),Qb(t,r)):r instanceof eI?(X("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||sI(t,r.key)):ae()}function Qb(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(X("SyncEngine","New document in limbo: "+n),t.Ca.add(r),gm(t))}function gm(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ie(Xe.fromString(e)),r=t.Na.next();t.Fa.set(r,new Fb(n)),t.va=t.va.insert(n,r),HT(t.remoteStore,new Zr(Xn(th(n.path)),r,"TargetPurposeLimboResolution",Xp.oe))}}async function Rl(t,e,n){const r=he(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{o.push(r.Ba(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=lm.Ki(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=he(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(c,m=>B.forEach(m.qi,E=>d.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>B.forEach(m.Qi,E=>d.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!El(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const E=d.ns.get(m),C=E.snapshotVersion,k=E.withLastLimboFreeSnapshotVersion(C);d.ns=d.ns.insert(m,k)}}}(r.localStore,s))}async function Yb(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await jT(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(l=>{l.forEach(u=>{u.reject(new re($.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Rl(n,r.us)}}function Xb(t,e){const n=he(t),r=n.Fa.get(e);if(r&&r.wa)return _e().add(r.key);{let i=_e();const s=n.Da.get(e);if(!s)return i;for(const o of s){const l=n.ba.get(o);i=i.unionWith(l.view.Ea)}return i}}function oI(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qb.bind(null,e),e.Sa.h_=Ob.bind(null,e.eventManager),e.Sa.ka=Lb.bind(null,e.eventManager),e}function Jb(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gb.bind(null,e),e}class $v{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ah(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ib(this.persistence,new nb,e.initialUser,this.serializer)}createPersistence(e){return new ZN(am.Hr,this.serializer)}createSharedClientState(e){return new hb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yb.bind(null,this.syncEngine),await xb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bb}()}createDatastore(e){const n=ah(e.databaseInfo.databaseId),r=function(s){return new mb(s)}(e.databaseInfo);return function(s,o,l,u){return new vb(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new wb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>zv(this.syncEngine,n,0),function(){return Vv.D()?new Vv:new db}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new Ub(i,s,o,l,u,c);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=he(r);X("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Sl(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class aI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Ar("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class eO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ot.UNAUTHENTICATED,this.clientId=oT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ui;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cd(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nO(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Fv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Fv(e.remoteStore,i)),t._onlineComponents=e}function tO(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function nO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await cd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!tO(n))throw n;oo("Error using user provided cache. Falling back to memory cache: "+n),await cd(t,new $v)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await cd(t,new $v);return t._offlineComponents}async function lI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Hv(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Hv(t,new Zb))),t._onlineComponents}function rO(t){return lI(t).then(e=>e.syncEngine)}async function Pf(t){const e=await lI(t),n=e.eventManager;return n.onListen=jb.bind(null,e.syncEngine),n.onUnlisten=$b.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Hb.bind(null,e.syncEngine),n}function iO(t,e,n={}){const r=new ui;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new aI({next:m=>{o.enqueueAndForget(()=>XT(s,p));const E=m.docs.has(l);!E&&m.fromCache?c.reject(new re($.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new re($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new JT(th(l.path),d,{includeMetadataChanges:!0,ra:!0});return YT(s,p)}(await Pf(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function uI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Wv=new Map;/**
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
 */function sO(t,e,n){if(!n)throw new re($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oO(t,e,n,r){if(e===!0&&r===!0)throw new re($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qv(t){if(!ie.isDocumentKey(t))throw new re($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ym(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function er(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ym(t);throw new re($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Kv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new re($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ix;switch(r.type){case"firstParty":return new Px(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wv.get(n);r&&(X("ComponentProvider","Removing Datastore"),Wv.delete(n),r.terminate())}(this),Promise.resolve()}}function aO(t,e,n,r={}){var i;const s=(t=er(t,vm))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&oo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ot.MOCK_USER;else{l=dP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new re($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ot(c)}t._authCredentials=new Sx(new sT(l,u))}}/**
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
 */class ch{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ch(this.firestore,e,this._query)}}class Zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new al(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zt(this.firestore,e,this._key)}}class al extends ch{constructor(e,n,r){super(e,n,th(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zt(this.firestore,null,new ie(e))}withConverter(e){return new al(this.firestore,e,this._path)}}function Al(t,e,...n){if(t=ft(t),arguments.length===1&&(e=oT.newId()),sO("doc","path",e),t instanceof vm){const r=Xe.fromString(e,...n);return qv(r),new Zt(t,null,new ie(r))}{if(!(t instanceof Zt||t instanceof al))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Xe.fromString(e,...n));return qv(r),new Zt(t.firestore,t instanceof al?t.converter:null,new ie(r))}}/**
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
 */class lO{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new BT(this,"async_queue_retry"),this.hu=()=>{const n=ud();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=ud();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=ud();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new ui;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!El(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ar("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=fm.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ae()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Gv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class fo extends vm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new lO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cI(this),this._firestoreClient.terminate()}}function uO(t,e){const n=typeof t=="object"?t:qc(),r=typeof t=="string"?t:"(default)",i=xr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cP("firestore");s&&aO(i,...s)}return i}function _m(t){return t._firestoreClient||cI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cI(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new jx(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,uI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new eO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class po{constructor(e){this._byteString=e}static fromBase64String(e){try{return new po(Ut.fromBase64String(e))}catch(n){throw new re($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new po(Ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wm{constructor(e){this._methodName=e}}/**
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
 */class Em{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
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
 */const cO=/^__.*__$/;class hO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ii(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tl(e,this.data,n,this.fieldTransforms)}}class hI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ii(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function dI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class Tm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Tm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Ec(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(dI(this.fu)&&cO.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class dO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ah(e)}Fu(e,n,r,i=!1){return new Tm({fu:e,methodName:n,vu:r,path:Tt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fI(t){const e=t._freezeSettings(),n=ah(t._databaseId);return new dO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fO(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Im("Data must be an object, but it was:",o,r);const l=pI(r,o);let u,c;if(s.merge)u=new un(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Cf(e,p,n);if(!o.contains(m))throw new re($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);gI(d,m)||d.push(m)}u=new un(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new hO(new Kt(l),u,c)}class dh extends wm{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dh}}function pO(t,e,n,r){const i=t.Fu(1,e,n);Im("Data must be an object, but it was:",i,r);const s=[],o=Kt.empty();us(r,(u,c)=>{const d=Sm(e,u,n);c=ft(c);const p=i.Su(d);if(c instanceof dh)s.push(d);else{const m=fh(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new un(s);return new hI(o,l,i.fieldTransforms)}function mO(t,e,n,r,i,s){const o=t.Fu(1,e,n),l=[Cf(e,r,n)],u=[i];if(s.length%2!=0)throw new re($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Cf(e,s[m])),u.push(s[m+1]);const c=[],d=Kt.empty();for(let m=l.length-1;m>=0;--m)if(!gI(c,l[m])){const E=l[m];let C=u[m];C=ft(C);const k=o.Su(E);if(C instanceof dh)c.push(E);else{const O=fh(C,k);O!=null&&(c.push(E),d.set(E,O))}}const p=new un(c);return new hI(d,p,o.fieldTransforms)}function fh(t,e){if(mI(t=ft(t)))return Im("Unsupported field value:",e,t),pI(t,e);if(t instanceof wm)return function(r,i){if(!dI(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=fh(l,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=dt.fromDate(r);return{timestampValue:_c(i.serializer,s)}}if(r instanceof dt){const s=new dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_c(i.serializer,s)}}if(r instanceof Em)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof po)return{bytesValue:bT(i.serializer,r._byteString)};if(r instanceof Zt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${ym(r)}`)}(t,e)}function pI(t,e){const n={};return aT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):us(t,(r,i)=>{const s=fh(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function mI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof dt||t instanceof Em||t instanceof po||t instanceof Zt||t instanceof wm)}function Im(t,e,n){if(!mI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ym(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Cf(t,e,n){if((e=ft(e))instanceof hh)return e._internalPath;if(typeof e=="string")return Sm(t,e);throw Ec("Field path arguments must be of type string or ",t,!1,void 0,n)}const gO=new RegExp("[~\\*/\\[\\]]");function Sm(t,e,n){if(e.search(gO)>=0)throw Ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hh(...e.split("."))._internalPath}catch{throw Ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ec(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new re($.INVALID_ARGUMENT,l+t+u)}function gI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class yI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yO extends yI{data(){return super.data()}}function vI(t,e){return typeof e=="string"?Sm(t,e):e instanceof hh?e._internalPath:e._delegate._internalPath}/**
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
 */function vO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _O{convertValue(e,n="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return us(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Em(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(nl(e));default:return null}}convertTimestamp(e){const n=mi(e);return new dt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Xe.fromString(e);Le(UT(r));const i=new rl(r.get(1),r.get(3)),s=new ie(r.popFirst(5));return i.isEqual(n)||Ar(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function wO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class fa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _I extends yI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Du extends _I{data(e={}){return super.data(e)}}class EO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new fa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Du(this._firestore,this._userDataWriter,r.key,r,new fa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Du(i._firestore,i._userDataWriter,l.doc.key,l.doc,new fa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Du(i._firestore,i._userDataWriter,l.doc.key,l.doc,new fa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:TO(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
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
 */function IO(t){t=er(t,Zt);const e=er(t.firestore,fo);return iO(_m(e),t._key).then(n=>SI(e,t,n))}class wI extends _O{constructor(e){super(),this.firestore=e}convertBytes(e){return new po(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Zt(this.firestore,null,n)}}function EI(t,e,n){t=er(t,Zt);const r=er(t.firestore,fo),i=wO(t.converter,e,n);return II(r,[fO(fI(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Jn.none())])}function SO(t,e,n,...r){t=er(t,Zt);const i=er(t.firestore,fo),s=fI(i);let o;return o=typeof(e=ft(e))=="string"||e instanceof hh?mO(s,"updateDoc",t._key,e,n,r):pO(s,"updateDoc",t._key,e),II(i,[o.toMutation(t._key,Jn.exists(!0))])}function TI(t,...e){var n,r,i;t=ft(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Gv(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Gv(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(t instanceof Zt)c=er(t.firestore,fo),d=th(t._key.path),u={next:p=>{e[o]&&e[o](SI(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=er(t,ch);c=er(p.firestore,fo),d=p._query;const m=new wI(c);u={next:E=>{e[o]&&e[o](new EO(c,m,p,E))},error:e[o+1],complete:e[o+2]},vO(t._query)}return function(m,E,C,k){const O=new aI(k),I=new JT(E,O,C);return m.asyncQueue.enqueueAndForget(async()=>YT(await Pf(m),I)),()=>{O.$a(),m.asyncQueue.enqueueAndForget(async()=>XT(await Pf(m),I))}}(_m(c),d,l,u)}function II(t,e){return function(r,i){const s=new ui;return r.asyncQueue.enqueueAndForget(async()=>Wb(await rO(r),i,s)),s.promise}(_m(t),e)}function SI(t,e,n){const r=n.docs.get(e._key),i=new wI(t);return new _I(t,i,e._key,r,new fa(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Eo=i})(Ti),Pn(new An("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new fo(new Rx(r.getProvider("auth-internal")),new kx(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new re($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rl(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Vt(mv,"4.6.4",e),Vt(mv,"4.6.4","esm2017")})();var xi={BASE_URL:"/Timelines",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const RO={apiKey:xi.VITE_FIREBASE_API_KEY,authDomain:xi.VITE_FIREBASE_AUTH_DOMAIN,projectId:xi.VITE_FIREBASE_PROJECT_ID,storageBucket:xi.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:xi.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:xi.VITE_FIREBASE_APP_ID,measurementId:xi.VITE_FIREBASE_MEASUREMENT_ID},Rm=Wc(RO);t2(Rm);const hs=Ex(Rm),So=uO(Rm),RI=Of.createContext();function ph(){return U.useContext(RI)}function AO({children:t}){const[e,n]=U.useState(null),[r,i]=U.useState(!1),[s,o]=U.useState(!1),[l,u]=U.useState(!1),[c,d]=U.useState(!0);U.useEffect(()=>uD(hs,p),[]);async function p(E){if(E){n({...E});const C=E.providerData.some(k=>k.providerId==="password");o(C),i(!0)}else n(null),i(!1);d(!1)}const m={userLoggedIn:r,isEmailUser:s,isGoogleUser:l,currentUser:e,setCurrentUser:n};return R.jsx(RI.Provider,{value:m,children:!c&&t})}function PO(){const{userLoggedIn:t}=ph();return t?R.jsx(Bc,{to:"/Timelines/app"}):R.jsx(R.Fragment,{children:R.jsxs("div",{className:"main",children:[R.jsx(eP,{}),R.jsx("div",{className:"content",children:"Dashboard"}),R.jsx(tP,{})]})})}function AI({children:t}){return R.jsx(R.Fragment,{children:R.jsx("div",{className:"app-header",children:t})})}/**
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
 */class CO{constructor(e,n){this._delegate=e,this.firebase=n,Xa(e,new An("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),bp(this._delegate)))}_getService(e,n=di){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=di){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Xa(this._delegate,e)}_addOrOverwriteComponent(e){Hw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const kO={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Qv=new Dr("app-compat","Firebase",kO);/**
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
 */function DO(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Vt,setLogLevel:Gw,onLog:Kw,apps:null,SDK_VERSION:Ti,INTERNAL:{registerComponent:l,removeApp:r,useAsService:u,modularAPIs:VC}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||di,!Ny(e,c))throw Qv.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const p=Wc(c,d);if(Ny(e,p.name))return e[p.name];const m=new t(p,n);return e[p.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function l(c){const d=c.name,p=d.replace("-compat","");if(Pn(c)&&c.type==="PUBLIC"){const m=(E=i())=>{if(typeof E[p]!="function")throw Qv.create("invalid-app-argument",{appName:d});return E[p]()};c.serviceProps!==void 0&&ic(m,c.serviceProps),n[p]=m,t.prototype[p]=function(...E){return this._getService.bind(this,d).apply(this,c.multipleInstances?E:[])}}return c.type==="PUBLIC"?n[p]:null}function u(c,d){return d==="serverAuth"?null:d}return n}/**
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
 */function PI(){const t=DO(CO);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:PI,extendNamespace:e,createSubscribe:Fw,ErrorFactory:Dr,deepExtend:ic});function e(n){ic(t,n)}return t}const xO=PI();/**
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
 */const Yv=new ml("@firebase/app-compat"),NO="@firebase/app-compat",bO="0.2.36";/**
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
 */function OO(t){Vt(NO,bO,t)}/**
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
 */if(bw()&&self.firebase!==void 0){Yv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Yv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const LO=xO;OO();var MO="firebase",VO="10.12.3";/**
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
 */LO.registerVersion(MO,VO,"app-compat");const FO="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-edit'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M7%207h-1a2%202%200%200%200%20-2%202v9a2%202%200%200%200%202%202h9a2%202%200%200%200%202%20-2v-1'%20/%3e%3cpath%20d='M20.385%206.585a2.1%202.1%200%200%200%20-2.97%20-2.97l-8.415%208.385v3h3l8.385%20-8.415z'%20/%3e%3cpath%20d='M16%205l3%203'%20/%3e%3c/svg%3e",CI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-plus'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M12%205l0%2014'%20/%3e%3cpath%20d='M5%2012l14%200'%20/%3e%3c/svg%3e",UO="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-pin'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M15%204.5l-4%204l-4%201.5l-1.5%201.5l7%207l1.5%20-1.5l1.5%20-4l4%20-4'%20/%3e%3cpath%20d='M9%2015l-4.5%204.5'%20/%3e%3cpath%20d='M14.5%204l5.5%205.5'%20/%3e%3c/svg%3e",jO="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-calendar-event'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M4%205m0%202a2%202%200%200%201%202%20-2h12a2%202%200%200%201%202%202v12a2%202%200%200%201%20-2%202h-12a2%202%200%200%201%20-2%20-2z'%20/%3e%3cpath%20d='M16%203l0%204'%20/%3e%3cpath%20d='M8%203l0%204'%20/%3e%3cpath%20d='M4%2011l16%200'%20/%3e%3cpath%20d='M8%2015h2v2h-2z'%20/%3e%3c/svg%3e";function kf({isOpen:t,toggleModal:e,children:n}){return t?R.jsx("div",{className:"modal-overlay",onClick:e,children:R.jsx("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:n})}):null}const zO=({onSingleEventClick:t,onLongEventClick:e})=>{const[n,r]=U.useState(!1),i=U.useRef(null),s=()=>{r(!n)},o=l=>{i.current&&!i.current.contains(l.target)&&r(!1)};return U.useEffect(()=>(document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}),[]),R.jsxs("div",{className:"add-button-dropdown",ref:i,children:[R.jsxs("button",{className:"add-button",onClick:s,children:[R.jsx("img",{src:CI}),R.jsx("div",{children:"Add"})]}),n&&R.jsx("div",{className:"dropdown-menu",children:R.jsxs("ul",{children:[R.jsxs("li",{onClick:()=>{s(),t()},children:[R.jsx("img",{src:UO}),"Single event"]}),R.jsxs("li",{onClick:()=>{s(),e()},children:[R.jsx("img",{src:jO}),"Long event"]})]})})]})},BO=async(t,e,n,r,i)=>{if(!point||!e){alert("Please fill in all fields.");return}const s=r.uid,o=`point_${Date.now()}`,l={title:t,pointDate:e,pointDesc:n};try{const u=doc(So,"users",s);await updateDoc(u,{[`timelines.${i}.points.${o}`]:l}),console.log("New timeline added successfully"),toggleModal()}catch(u){console.error("Error adding timeline: ",u)}};function $O({timelineData:t,currentUser:e,timelineId:n}){const r=U.useRef(null),[i,s]=U.useState({x:80,y:window.innerHeight/2}),[o,l]=U.useState(.9),[u,c]=U.useState(!1),d=new Date(t.startDate),p=new Date(t.endDate),m=Object.values(t.points).map(Q=>({date:new Date(Q.date),label:Q.title})),E=Q=>{const le=p-d,Ne=Q-d,ze=window.innerWidth;return Ne/le*ze};U.useEffect(()=>{const Q=r.current,le=Q.getContext("2d");Q.width=window.innerWidth,Q.height=window.innerHeight;const Ne=()=>{le.clearRect(0,0,Q.width,Q.height),le.save(),le.translate(i.x,i.y),le.scale(o,o),ze(le),m.forEach(jt=>en(le,jt));const fe=65;Me(le,d,0-fe),Me(le,p,Q.width+fe-60,!0),le.restore()},ze=fe=>{fe.strokeStyle="white",fe.lineWidth=2;const jt=0;fe.beginPath(),fe.moveTo(0,jt),fe.lineTo(Q.width,jt),fe.stroke()},Me=(fe,jt,Je,Ze=!1)=>{Ze&&(Je-=60),fe.fillStyle="gray",fe.beginPath(),fe.moveTo(Je+(Ze?60:0)+5,-10),fe.lineTo(Je+(Ze?60:0)+60-5,-10),fe.arc(Je+(Ze?60:0)+60-5,-5,5,-Math.PI/2,0),fe.lineTo(Je+(Ze?60:0)+60,5),fe.arc(Je+(Ze?60:0)+60-5,5,5,0,Math.PI/2),fe.lineTo(Je+(Ze?60:0)+5,10),fe.arc(Je+(Ze?60:0)+5,5,5,Math.PI/2,Math.PI),fe.lineTo(Je+(Ze?60:0),-5),fe.arc(Je+(Ze?60:0)+5,-5,5,Math.PI,1.5*Math.PI),fe.closePath(),fe.fill();const tn=`${jt.getDate()}-${jt.getMonth()+1}-${jt.getFullYear()}`;fe.fillStyle="white",fe.font="12px 'Source Sans 3'";const Ro=fe.measureText(tn).width,Ao=Je+(Ze?60-Ro+53:5);fe.fillText(tn,Ao,4)},en=(fe,jt)=>{const Je=E(jt.date),Ze=0;fe.fillStyle="red",fe.beginPath(),fe.arc(Je,Ze,5,0,2*Math.PI),fe.fill(),fe.fillStyle="white",fe.font="12px 'Source Sans 3'",fe.fillText(jt.label,Je-20,Ze+20)};Ne()},[i,o]);const C=()=>{c(!0)},k=()=>{c(!1)},O=Q=>{u&&s(le=>({x:le.x+Q.movementX,y:le.y}))},I=Q=>{Q.preventDefault();const le=Q.deltaY>0?.9:1.1,Ne=r.current.getBoundingClientRect();Q.clientX-Ne.left;const ze=Ne.width/2;s(Me=>({x:ze-(ze-Me.x)*le,y:Me.y})),l(Me=>Math.max(.1,Me*le))},[_,A]=U.useState(!1),[V,z]=U.useState(!1),[x,w]=U.useState(""),[y,v]=U.useState(""),[S,P]=U.useState(""),[b,T]=U.useState(""),[Re,yt]=U.useState(""),[mn,Ie]=U.useState(""),[G,te]=U.useState(""),ne=()=>{A(!_),_||(w(""),v(""),P(""))},me=()=>{z(!V),V||(T(""),yt(""),Ie(""),te(""))};return R.jsxs("div",{className:"canvas-box",style:{overflow:"hidden",position:"relative"},children:[R.jsxs("div",{className:"opened-timeline-file-name",children:[R.jsx("div",{children:t.title}),R.jsx("img",{src:FO})]}),R.jsx("canvas",{className:"canvas",ref:r,onMouseDown:C,onMouseUp:k,onMouseMove:O,onWheel:I,style:{cursor:u?"grabbing":"grab"}}),R.jsx(zO,{onSingleEventClick:ne,onLongEventClick:me}),R.jsxs(kf,{isOpen:_,toggleModal:ne,children:[R.jsx("h2",{children:"Add Single Event"}),R.jsxs("div",{children:[R.jsx("label",{children:"Title:"}),R.jsx("input",{className:"modal-input",type:"text",name:"title",value:x,onChange:Q=>w(Q.target.value)})]}),R.jsxs("div",{children:[R.jsx("label",{children:"Date:"}),R.jsx("input",{className:"modal-input",type:"date",name:"date",value:y,onChange:Q=>v(Q.target.value)})]}),R.jsxs("div",{children:[R.jsx("label",{children:"Description:"}),R.jsx("textarea",{className:"modal-input",name:"desc",value:S,onChange:Q=>P(Q.target.value)})]}),R.jsx("button",{className:"modal-button",onClick:ne,children:"Cancel"}),R.jsx("button",{className:"modal-button float-right",onClick:()=>{BO(x,y,S,e,n),ne()},children:"Proceed"})]}),R.jsxs(kf,{isOpen:V,toggleModal:me,children:[R.jsx("h2",{children:"Add Long Event"}),R.jsxs("div",{children:[R.jsx("label",{children:"Title:"}),R.jsx("input",{className:"modal-input",type:"text",name:"longEventTitle",value:b,onChange:Q=>T(Q.target.value)})]}),R.jsxs("div",{children:[R.jsx("label",{children:"Start Date:"}),R.jsx("input",{className:"modal-input",type:"date",name:"longEventStartDate",value:Re,onChange:Q=>yt(Q.target.value)})]}),R.jsxs("div",{children:[R.jsx("label",{children:"End Date:"}),R.jsx("input",{className:"modal-input",type:"date",name:"longEventEndDate",value:mn,onChange:Q=>Ie(Q.target.value)})]}),R.jsxs("div",{children:[R.jsx("label",{children:"Description:"}),R.jsx("textarea",{className:"modal-input",name:"longEventDesc",value:G,onChange:Q=>te(Q.target.value)})]}),R.jsx("button",{className:"modal-button",onClick:me,children:"Cancel"}),R.jsx("button",{className:"modal-button float-right",onClick:()=>{me()},children:"Proceed"})]})]})}const ta=(t,{children:e})=>{const[n,r]=U.useState(!1),i=U.useRef(null),s=()=>{r(!n)},o=l=>{i.current&&!i.current.contains(l.target)&&r(!1)};return U.useEffect(()=>(document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}),[]),R.jsxs("div",{className:"header-button-dropdown",ref:i,children:[R.jsx("button",{onClick:s,children:t.buttonName}),n&&R.jsx("div",{className:"header-dropdown-menu",children:R.jsx("ul",{children:t.children})})]})},HO=async()=>{try{await jE(hs)}catch(t){console.error("Error logging out: ",t)}};function WO(){const{timelineId:t}=wA(),[e,n]=U.useState(null),{currentUser:r}=ph();return U.useEffect(()=>{if(r){const i=Al(So,"users",r.uid),s=TI(i,o=>{if(o.exists()){const u=o.data().timelines[t];u?n(u):console.error("No such timeline!")}else console.error("No such user document!")});return()=>s()}},[r,t]),e?r?R.jsx(R.Fragment,{children:R.jsxs("div",{className:"main horizontal-gradient",children:[R.jsxs(AI,{children:[R.jsxs("div",{className:"header-option-buttons",children:[R.jsx(ro,{to:"/Timelines/app",children:R.jsx("button",{children:"Dashboard"})}),R.jsxs(ta,{buttonName:"File",children:[R.jsx("li",{children:"New file"}),R.jsx("div",{className:"dropdown-line-divider"}),R.jsx("li",{children:"Open file"}),R.jsx("li",{children:"Open recent"}),R.jsx("div",{className:"dropdown-line-divider"}),R.jsx("li",{children:"Save file"}),R.jsx("li",{children:"Save file as"}),R.jsx("div",{className:"dropdown-line-divider"}),R.jsx("li",{children:"Export image"}),R.jsx("div",{className:"dropdown-line-divider"}),R.jsx("li",{children:"Close file"})]}),R.jsxs(ta,{buttonName:"Edit",children:[R.jsx("li",{children:"Undo"}),R.jsx("li",{children:"Redo"}),R.jsx("div",{className:"dropdown-line-divider"}),R.jsx("li",{children:"Cut"}),R.jsx("li",{children:"Copy"}),R.jsx("li",{children:"Paste"}),R.jsx("div",{className:"dropdown-line-divider"}),R.jsx("li",{children:"Find event"}),R.jsx("div",{className:"dropdown-line-divider"}),R.jsx("li",{children:"Change background"})]}),R.jsx(ta,{buttonName:"View",children:R.jsx("li",{children:"Fit to whole screen"})}),R.jsxs(ta,{buttonName:"Text",children:[R.jsx("li",{children:"Change font"}),R.jsx("li",{children:"Change text size"})]}),R.jsx(ta,{buttonName:"Colors",children:R.jsx("li",{children:"Change color palette"})})]}),R.jsx("button",{onClick:HO,className:"logout-button",children:"Log Out"})]}),R.jsx($O,{timelineData:e,currentUser:r,timelineId:t})]})}):R.jsx(Bc,{to:"/Timelines/login"}):R.jsx("div",{children:"Loading timeline..."})}function na(){return R.jsx(R.Fragment,{children:R.jsx("div",{className:"error-page",children:"Error"})})}const qO=async(t,e,n)=>{const r=await sD(hs,t,e),i=r.user;return await EI(Al(So,"users",i.uid),{email:i.email,nickname:n,timelines:{},createdAt:new Date},{merge:!0}),r},KO=(t,e)=>oD(hs,t,e),kI=async()=>{const t=new dr,n=(await DD(hs,t)).user,r=Al(So,"users",n.uid);return(await IO(r)).exists()||await EI(r,{email:n.email,nickname:n.displayName||n.email,createdAt:new Date,timelines:{}}),n},GO=t=>iD(hs,t),DI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%3e%3cpath%20d='M22.56%2012.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26%201.37-1.04%202.53-2.21%203.31v2.77h3.57c2.08-1.92%203.28-4.74%203.28-8.09z'%20fill='%234285F4'/%3e%3cpath%20d='M12%2023c2.97%200%205.46-.98%207.28-2.66l-3.57-2.77c-.98.66-2.23%201.06-3.71%201.06-2.86%200-5.29-1.93-6.16-4.53H2.18v2.84C3.99%2020.53%207.7%2023%2012%2023z'%20fill='%2334A853'/%3e%3cpath%20d='M5.84%2014.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43%208.55%201%2010.22%201%2012s.43%203.45%201.18%204.93l2.85-2.22.81-.62z'%20fill='%23FBBC05'/%3e%3cpath%20d='M12%205.38c1.62%200%203.06.56%204.21%201.64l3.15-3.15C17.45%202.09%2014.97%201%2012%201%207.7%201%203.99%203.47%202.18%207.07l3.66%202.84c.87-2.6%203.3-4.53%206.16-4.53z'%20fill='%23EA4335'/%3e%3cpath%20d='M1%201h22v22H1z'%20fill='none'/%3e%3c/svg%3e";function QO(){const[t,e]=U.useState(""),[n,r]=U.useState(""),[i,s]=U.useState(""),[o,l]=U.useState(""),[u,c]=U.useState(""),[d,p]=U.useState(!1),m=Dp(),E=async k=>{if(k.preventDefault(),i!==o){c("Passwords do not match");return}if(t==""||t==null){c("Nickname field is empty");return}console.log("Email:",n),console.log("Password:",i);try{await qO(n,i,t),m("/Timelines/login")}catch(O){console.error("Error creating user:",O),c(O.message)}},C=async k=>{if(k.preventDefault(),!d){p(!0);try{await kI(),m("/Timelines/app")}catch(O){c(O.message),p(!1)}}};return R.jsx(R.Fragment,{children:R.jsxs("div",{className:"main-signup",children:[R.jsx("img",{src:$c,className:"logo",alt:"Logo"}),R.jsx("h1",{children:"Create account"}),R.jsxs("form",{onSubmit:E,children:[R.jsx("div",{className:"input-box",children:R.jsx("input",{placeholder:"Nickname",type:"text",value:t,onChange:k=>e(k.target.value)})}),R.jsx("div",{className:"input-box",children:R.jsx("input",{placeholder:"Email",type:"email",value:n,onChange:k=>r(k.target.value)})}),R.jsx("div",{className:"input-box",children:R.jsx("input",{placeholder:"Password",type:"password",value:i,onChange:k=>s(k.target.value)})}),R.jsx("div",{className:"input-box",children:R.jsx("input",{placeholder:"Repeat password",type:"password",value:o,onChange:k=>l(k.target.value)})}),R.jsxs("p",{children:[u&&R.jsx("p",{className:"error",children:u}),"Already have an account?",R.jsx(ro,{to:"/Timelines/login",children:R.jsx("span",{className:"blue-font",children:" Log in"})})]}),R.jsx("input",{type:"submit",className:"submit-button",value:"Submit"}),R.jsxs("div",{className:"divider",children:[R.jsx("div",{className:"divider-line"}),R.jsx("div",{children:"OR"}),R.jsx("div",{className:"divider-line"})]}),R.jsxs("button",{className:"button-google",onClick:C,disabled:d,children:[R.jsx("img",{src:DI,alt:"google"}),d?"Signing in with Google...":"Sign Up with Google"]})]})]})})}function YO(){const{userLoggedIn:t}=ph(),[e,n]=U.useState(""),[r,i]=U.useState(""),[s,o]=U.useState(!1),[l,u]=U.useState(!1),[c,d]=U.useState(""),[p,m]=U.useState(""),E=async O=>{if(O.preventDefault(),!s){o(!0);try{await KO(e,r)}catch(I){d(I.message),o(!1)}}},C=async O=>{if(O.preventDefault(),!l){u(!0);try{await kI()}catch(I){d(I.message),u(!1)}}},k=async O=>{if(O.preventDefault(),e)try{await GO(e),m("Password reset email sent!")}catch(I){d(I.message)}else d("Please enter your email address.")};return t?R.jsx(Bc,{to:"/Timelines/app"}):R.jsx(R.Fragment,{children:R.jsxs("div",{className:"main-login",children:[R.jsx("img",{src:$c,className:"logo",alt:"Logo"}),R.jsx("h1",{children:"Welcome back"}),c&&R.jsx("p",{style:{color:"red",marginBottom:5},children:c}),p&&R.jsx("p",{style:{color:"green",marginBottom:5},children:p}),R.jsxs("form",{onSubmit:E,children:[R.jsx("div",{className:"input-box",children:R.jsx("input",{type:"email",value:e,placeholder:"Email",onChange:O=>n(O.target.value),required:!0})}),R.jsx("div",{className:"input-box",children:R.jsx("input",{type:"password",value:r,placeholder:"Password",onChange:O=>i(O.target.value),required:!0})}),R.jsx("p",{children:R.jsx("span",{className:"blue-font",onClick:k,style:{cursor:"pointer"},children:"I don't remember my password"})}),R.jsx("button",{className:"submit-button",type:"submit",disabled:s,children:s?"Signing in...":"Continue"}),R.jsxs("p",{children:["Don't have an account?",R.jsx("span",{className:"blue-font",children:R.jsx(ro,{to:"/Timelines/sign-up",children:" Sign Up"})})]}),R.jsxs("div",{className:"divider",children:[R.jsx("div",{className:"divider-line"}),R.jsx("div",{children:"OR"}),R.jsx("div",{className:"divider-line"})]}),R.jsxs("button",{className:"button-google",onClick:C,disabled:l,children:[R.jsx("img",{src:DI,alt:"google"}),l?"Signing in with Google...":"Continue with Google"]})]})]})})}const XO=async(t,e,n,r,i)=>{if(!t||!e||!n){alert("Please fill in all fields.");return}const s=r.uid,o=`timeline_${Date.now()}`,l={title:t,startDate:e,endDate:n,periods:{},points:{}};try{const u=Al(So,"users",s);await SO(u,{[`timelines.${o}`]:l}),console.log("New timeline added successfully"),i()}catch(u){console.error("Error adding timeline: ",u)}},JO=async()=>{try{await jE(hs)}catch(t){console.error("Error logging out: ",t)}},ZO=({fileName:t,timelineId:e,edited:n})=>R.jsx("div",{className:"timeline-button-box",children:R.jsxs(ro,{to:`/Timelines/app/${e}`,children:[R.jsx("button",{className:"timeline-button"}),R.jsx("div",{className:"timeline-file-name",children:t}),R.jsxs("div",{className:"timeline-edited",children:["Edited ",n," ago"]})]})}),eL=({onClick:t})=>R.jsxs("button",{onClick:t,className:"add-timeline-button",children:[R.jsx("div",{className:"add-timeline-icon",children:R.jsx("img",{src:CI,alt:"plus icon"})}),R.jsx("div",{children:"Create a new file"})]});function tL(){const{currentUser:t}=ph(),[e,n]=U.useState(null),[r,i]=U.useState(!1),[s,o]=U.useState(""),[l,u]=U.useState(""),[c,d]=U.useState("");if(U.useEffect(()=>{if(t){const m=Al(So,"users",t.uid),E=TI(m,C=>{C.exists()&&n(C.data())});return()=>E()}},[t]),!t)return R.jsx(Bc,{to:"/Timelines/login"});if(!e)return R.jsx("div",{children:"Loading..."});const p=()=>{i(!r),r||(o(""),u(""),d(""))};return R.jsxs("div",{className:"main",children:[R.jsxs(AI,{children:[R.jsxs("div",{className:"header-logo",children:[R.jsx("img",{src:$c,style:{width:24},alt:"Logo"}),R.jsx("div",{children:"Timelines"})]}),R.jsx("button",{onClick:JO,children:"Log Out"})]}),R.jsxs("div",{className:"dashboard-wrapper",children:[R.jsxs("div",{className:"dashboard-user",children:[R.jsx("h3",{children:"User panel"}),R.jsxs("h5",{children:["Welcome"," ",R.jsx("label",{className:"username",children:e&&e.nickname||t.email})]})]}),R.jsxs("div",{className:"dashboard-timelines",children:[R.jsx("div",{className:"dashboard-advertisement"}),R.jsx("h1",{children:"My Timelines"}),R.jsxs("div",{className:"timelines-box",children:[R.jsx(eL,{onClick:p}),Object.keys(e.timelines||{}).map(m=>R.jsx(ZO,{timelineId:m,fileName:e.timelines[m].title,edited:"Just now"},m))]})]})]}),R.jsxs(kf,{isOpen:r,toggleModal:p,children:[R.jsx("h2",{children:"New Timeline Settings"}),R.jsxs("div",{children:[R.jsx("label",{children:"Title:"}),R.jsx("input",{className:"modal-input",type:"text",name:"title",value:s,onChange:m=>o(m.target.value)})]}),R.jsxs("div",{children:[R.jsx("label",{children:"Starting date:"}),R.jsx("input",{className:"modal-input",type:"date",name:"start-date",value:l,onChange:m=>u(m.target.value)})]}),R.jsxs("div",{children:[R.jsx("label",{children:"Ending date:"}),R.jsx("input",{className:"modal-input",type:"date",name:"end-date",value:c,onChange:m=>d(m.target.value)})]}),R.jsx("button",{className:"modal-button",onClick:p,children:"Cancel"}),R.jsx("button",{className:"modal-button float-right",onClick:()=>XO(s,l,c,t,p),children:"Proceed"})]})]})}const nL=jA([{path:"/Timelines",element:R.jsx(PO,{}),errorElement:R.jsx(na,{})},{path:"/Timelines/sign-up",element:R.jsx(QO,{}),errorElement:R.jsx(na,{})},{path:"/Timelines/login",element:R.jsx(YO,{}),errorElement:R.jsx(na,{})},{path:"/Timelines/app",element:R.jsx(tL,{}),errorElement:R.jsx(na,{})},{path:"/Timelines/app/:timelineId",element:R.jsx(WO,{}),errorElement:R.jsx(na,{})}]);hd.createRoot(document.getElementById("root")).render(R.jsx(Of.StrictMode,{children:R.jsx(AO,{children:R.jsx(QA,{router:nL})})}));