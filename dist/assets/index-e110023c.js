(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $p={exports:{}},Yo={},Bp={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ts=Symbol.for("react.element"),Uv=Symbol.for("react.portal"),zv=Symbol.for("react.fragment"),$v=Symbol.for("react.strict_mode"),Bv=Symbol.for("react.profiler"),Wv=Symbol.for("react.provider"),Hv=Symbol.for("react.context"),Kv=Symbol.for("react.forward_ref"),Gv=Symbol.for("react.suspense"),qv=Symbol.for("react.memo"),Yv=Symbol.for("react.lazy"),Ad=Symbol.iterator;function Xv(e){return e===null||typeof e!="object"?null:(e=Ad&&e[Ad]||e["@@iterator"],typeof e=="function"?e:null)}var Wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hp=Object.assign,Kp={};function Ur(e,t,n){this.props=e,this.context=t,this.refs=Kp,this.updater=n||Wp}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gp(){}Gp.prototype=Ur.prototype;function $c(e,t,n){this.props=e,this.context=t,this.refs=Kp,this.updater=n||Wp}var Bc=$c.prototype=new Gp;Bc.constructor=$c;Hp(Bc,Ur.prototype);Bc.isPureReactComponent=!0;var Rd=Array.isArray,qp=Object.prototype.hasOwnProperty,Wc={current:null},Yp={key:!0,ref:!0,__self:!0,__source:!0};function Xp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)qp.call(t,r)&&!Yp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ts,type:e,key:s,ref:o,props:i,_owner:Wc.current}}function Qv(e,t){return{$$typeof:ts,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ts}function Jv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Dd=/\/+/g;function wa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jv(""+e.key):t.toString(36)}function Bs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ts:case Uv:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+wa(o,0):r,Rd(i)?(n="",e!=null&&(n=e.replace(Dd,"$&/")+"/"),Bs(i,t,n,"",function(d){return d})):i!=null&&(Hc(i)&&(i=Qv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dd,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Rd(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+wa(s,a);o+=Bs(s,t,n,l,i)}else if(l=Xv(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+wa(s,a++),o+=Bs(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ws(e,t,n){if(e==null)return e;var r=[],i=0;return Bs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Zv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},Ws={transition:null},ex={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:Ws,ReactCurrentOwner:Wc};function Qp(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:ws,forEach:function(e,t,n){ws(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ws(e,function(){t++}),t},toArray:function(e){return ws(e,function(t){return t})||[]},only:function(e){if(!Hc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Ur;F.Fragment=zv;F.Profiler=Bv;F.PureComponent=$c;F.StrictMode=$v;F.Suspense=Gv;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ex;F.act=Qp;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hp({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Wc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)qp.call(t,l)&&!Yp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var d=0;d<l;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:ts,type:e.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:Hv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wv,_context:e},e.Consumer=e};F.createElement=Xp;F.createFactory=function(e){var t=Xp.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Kv,render:e}};F.isValidElement=Hc;F.lazy=function(e){return{$$typeof:Yv,_payload:{_status:-1,_result:e},_init:Zv}};F.memo=function(e,t){return{$$typeof:qv,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Ws.transition;Ws.transition={};try{e()}finally{Ws.transition=t}};F.unstable_act=Qp;F.useCallback=function(e,t){return Te.current.useCallback(e,t)};F.useContext=function(e){return Te.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};F.useEffect=function(e,t){return Te.current.useEffect(e,t)};F.useId=function(){return Te.current.useId()};F.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Te.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};F.useRef=function(e){return Te.current.useRef(e)};F.useState=function(e){return Te.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Te.current.useTransition()};F.version="18.3.1";Bp.exports=F;var w=Bp.exports;const Cn=zp(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tx=w,nx=Symbol.for("react.element"),rx=Symbol.for("react.fragment"),ix=Object.prototype.hasOwnProperty,sx=tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ox={key:!0,ref:!0,__self:!0,__source:!0};function Jp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)ix.call(t,r)&&!ox.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:nx,type:e,key:s,ref:o,props:i,_owner:sx.current}}Yo.Fragment=rx;Yo.jsx=Jp;Yo.jsxs=Jp;$p.exports=Yo;var c=$p.exports,vl={},Zp={exports:{}},Ve={},em={exports:{}},tm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,D){var _=I.length;I.push(D);e:for(;0<_;){var P=_-1>>>1,O=I[P];if(0<i(O,D))I[P]=D,I[_]=O,_=P;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var D=I[0],_=I.pop();if(_!==D){I[0]=_;e:for(var P=0,O=I.length,Ee=O>>>1;P<Ee;){var at=2*(P+1)-1,Qn=I[at],lt=at+1,xs=I[lt];if(0>i(Qn,_))lt<O&&0>i(xs,Qn)?(I[P]=xs,I[lt]=_,P=lt):(I[P]=Qn,I[at]=_,P=at);else if(lt<O&&0>i(xs,_))I[P]=xs,I[lt]=_,P=lt;else break e}}return D}function i(I,D){var _=I.sortIndex-D.sortIndex;return _!==0?_:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],d=[],f=1,h=null,u=3,p=!1,m=!1,g=!1,b=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var D=n(d);D!==null;){if(D.callback===null)r(d);else if(D.startTime<=I)r(d),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(d)}}function k(I){if(g=!1,x(I),!m)if(n(l)!==null)m=!0,Wt(S);else{var D=n(d);D!==null&&W(k,D.startTime-I)}}function S(I,D){m=!1,g&&(g=!1,y(T),T=-1),p=!0;var _=u;try{for(x(D),h=n(l);h!==null&&(!(h.expirationTime>D)||I&&!$());){var P=h.callback;if(typeof P=="function"){h.callback=null,u=h.priorityLevel;var O=P(h.expirationTime<=D);D=e.unstable_now(),typeof O=="function"?h.callback=O:h===n(l)&&r(l),x(D)}else r(l);h=n(l)}if(h!==null)var Ee=!0;else{var at=n(d);at!==null&&W(k,at.startTime-D),Ee=!1}return Ee}finally{h=null,u=_,p=!1}}var C=!1,E=null,T=-1,R=5,A=-1;function $(){return!(e.unstable_now()-A<R)}function xe(){if(E!==null){var I=e.unstable_now();A=I;var D=!0;try{D=E(!0,I)}finally{D?Re():(C=!1,E=null)}}else C=!1}var Re;if(typeof v=="function")Re=function(){v(xe)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,De=ot.port2;ot.port1.onmessage=xe,Re=function(){De.postMessage(null)}}else Re=function(){b(xe,0)};function Wt(I){E=I,C||(C=!0,Re())}function W(I,D){T=b(function(){I(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,Wt(S))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(u){case 1:case 2:case 3:var D=3;break;default:D=u}var _=u;u=D;try{return I()}finally{u=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var _=u;u=I;try{return D()}finally{u=_}},e.unstable_scheduleCallback=function(I,D,_){var P=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?P+_:P):_=P,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=_+O,I={id:f++,callback:D,priorityLevel:I,startTime:_,expirationTime:O,sortIndex:-1},_>P?(I.sortIndex=_,t(d,I),n(l)===null&&I===n(d)&&(g?(y(T),T=-1):g=!0,W(k,_-P))):(I.sortIndex=O,t(l,I),m||p||(m=!0,Wt(S))),I},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(I){var D=u;return function(){var _=u;u=D;try{return I.apply(this,arguments)}finally{u=_}}}})(tm);em.exports=tm;var ax=em.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx=w,Fe=ax;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nm=new Set,Ni={};function Gn(e,t){Nr(e,t),Nr(e+"Capture",t)}function Nr(e,t){for(Ni[e]=t,e=0;e<t.length;e++)nm.add(t[e])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=Object.prototype.hasOwnProperty,cx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Md={},Ld={};function ux(e){return xl.call(Ld,e)?!0:xl.call(Md,e)?!1:cx.test(e)?Ld[e]=!0:(Md[e]=!0,!1)}function dx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fx(e,t,n,r){if(t===null||typeof t>"u"||dx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kc=/[\-:]([a-z])/g;function Gc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Kc,Gc);he[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Kc,Gc);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Kc,Gc);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function qc(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fx(t,n,i,r)&&(n=null),r||i===null?ux(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $t=lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bs=Symbol.for("react.element"),Zn=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),Yc=Symbol.for("react.strict_mode"),wl=Symbol.for("react.profiler"),rm=Symbol.for("react.provider"),im=Symbol.for("react.context"),Xc=Symbol.for("react.forward_ref"),bl=Symbol.for("react.suspense"),kl=Symbol.for("react.suspense_list"),Qc=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),sm=Symbol.for("react.offscreen"),Od=Symbol.iterator;function Xr(e){return e===null||typeof e!="object"?null:(e=Od&&e[Od]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,ba;function ai(e){if(ba===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ba=t&&t[1]||""}return`
`+ba+e}var ka=!1;function Sa(e,t){if(!e||ka)return"";ka=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{ka=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ai(e):""}function hx(e){switch(e.tag){case 5:return ai(e.type);case 16:return ai("Lazy");case 13:return ai("Suspense");case 19:return ai("SuspenseList");case 0:case 2:case 15:return e=Sa(e.type,!1),e;case 11:return e=Sa(e.type.render,!1),e;case 1:return e=Sa(e.type,!0),e;default:return""}}function Sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case er:return"Fragment";case Zn:return"Portal";case wl:return"Profiler";case Yc:return"StrictMode";case bl:return"Suspense";case kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case im:return(e.displayName||"Context")+".Consumer";case rm:return(e._context.displayName||"Context")+".Provider";case Xc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qc:return t=e.displayName||null,t!==null?t:Sl(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return Sl(e(t))}catch{}}return null}function px(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sl(t);case 8:return t===Yc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function om(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mx(e){var t=om(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ks(e){e._valueTracker||(e._valueTracker=mx(e))}function am(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=om(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tl(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lm(e,t){t=t.checked,t!=null&&qc(e,"checked",t,!1)}function Cl(e,t){lm(e,t);var n=pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?El(e,t.type,n):t.hasOwnProperty("defaultValue")&&El(e,t.type,pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function El(e,t,n){(t!=="number"||fo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var li=Array.isArray;function yr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ud(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(li(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pn(n)}}function cm(e,t){var n=pn(t.value),r=pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function um(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?um(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ss,dm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ss=Ss||document.createElement("div"),Ss.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ss.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gx=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(e){gx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fi[t]=fi[e]})});function fm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fi.hasOwnProperty(e)&&fi[e]?(""+t).trim():t+"px"}function hm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var yx=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pl(e,t){if(t){if(yx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jl=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,vr=null,xr=null;function $d(e){if(e=is(e)){if(typeof Al!="function")throw Error(N(280));var t=e.stateNode;t&&(t=ea(t),Al(e.stateNode,e.type,t))}}function pm(e){vr?xr?xr.push(e):xr=[e]:vr=e}function mm(){if(vr){var e=vr,t=xr;if(xr=vr=null,$d(e),t)for(e=0;e<t.length;e++)$d(t[e])}}function gm(e,t){return e(t)}function ym(){}var Ta=!1;function vm(e,t,n){if(Ta)return e(t,n);Ta=!0;try{return gm(e,t,n)}finally{Ta=!1,(vr!==null||xr!==null)&&(ym(),mm())}}function Ii(e,t){var n=e.stateNode;if(n===null)return null;var r=ea(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Rl=!1;if(At)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Rl=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Rl=!1}function vx(e,t,n,r,i,s,o,a,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var hi=!1,ho=null,po=!1,Dl=null,xx={onError:function(e){hi=!0,ho=e}};function wx(e,t,n,r,i,s,o,a,l){hi=!1,ho=null,vx.apply(xx,arguments)}function bx(e,t,n,r,i,s,o,a,l){if(wx.apply(this,arguments),hi){if(hi){var d=ho;hi=!1,ho=null}else throw Error(N(198));po||(po=!0,Dl=d)}}function qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bd(e){if(qn(e)!==e)throw Error(N(188))}function kx(e){var t=e.alternate;if(!t){if(t=qn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bd(i),e;if(s===r)return Bd(i),t;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function wm(e){return e=kx(e),e!==null?bm(e):null}function bm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bm(e);if(t!==null)return t;e=e.sibling}return null}var km=Fe.unstable_scheduleCallback,Wd=Fe.unstable_cancelCallback,Sx=Fe.unstable_shouldYield,Tx=Fe.unstable_requestPaint,re=Fe.unstable_now,Cx=Fe.unstable_getCurrentPriorityLevel,Zc=Fe.unstable_ImmediatePriority,Sm=Fe.unstable_UserBlockingPriority,mo=Fe.unstable_NormalPriority,Ex=Fe.unstable_LowPriority,Tm=Fe.unstable_IdlePriority,Xo=null,ft=null;function _x(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Xo,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:Ix,Nx=Math.log,Px=Math.LN2;function Ix(e){return e>>>=0,e===0?32:31-(Nx(e)/Px|0)|0}var Ts=64,Cs=4194304;function ci(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function go(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ci(a):(s&=o,s!==0&&(r=ci(s)))}else o=n&~i,o!==0?r=ci(o):s!==0&&(r=ci(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),i=1<<n,r|=e[n],t&=~i;return r}function jx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ax(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-rt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=jx(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Ml(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cm(){var e=Ts;return Ts<<=1,!(Ts&4194240)&&(Ts=64),e}function Ca(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ns(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function Rx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-rt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function eu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Em(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _m,tu,Nm,Pm,Im,Ll=!1,Es=[],rn=null,sn=null,on=null,ji=new Map,Ai=new Map,Xt=[],Dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hd(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(t.pointerId)}}function Jr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=is(t),t!==null&&tu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Mx(e,t,n,r,i){switch(t){case"focusin":return rn=Jr(rn,e,t,n,r,i),!0;case"dragenter":return sn=Jr(sn,e,t,n,r,i),!0;case"mouseover":return on=Jr(on,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ji.set(s,Jr(ji.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ai.set(s,Jr(Ai.get(s)||null,e,t,n,r,i)),!0}return!1}function jm(e){var t=jn(e.target);if(t!==null){var n=qn(t);if(n!==null){if(t=n.tag,t===13){if(t=xm(n),t!==null){e.blockedOn=t,Im(e.priority,function(){Nm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ol(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jl=r,n.target.dispatchEvent(r),jl=null}else return t=is(n),t!==null&&tu(t),e.blockedOn=n,!1;t.shift()}return!0}function Kd(e,t,n){Hs(e)&&n.delete(t)}function Lx(){Ll=!1,rn!==null&&Hs(rn)&&(rn=null),sn!==null&&Hs(sn)&&(sn=null),on!==null&&Hs(on)&&(on=null),ji.forEach(Kd),Ai.forEach(Kd)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ll||(Ll=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,Lx)))}function Ri(e){function t(i){return Zr(i,e)}if(0<Es.length){Zr(Es[0],e);for(var n=1;n<Es.length;n++){var r=Es[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&Zr(rn,e),sn!==null&&Zr(sn,e),on!==null&&Zr(on,e),ji.forEach(t),Ai.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)jm(n),n.blockedOn===null&&Xt.shift()}var wr=$t.ReactCurrentBatchConfig,yo=!0;function Ox(e,t,n,r){var i=U,s=wr.transition;wr.transition=null;try{U=1,nu(e,t,n,r)}finally{U=i,wr.transition=s}}function Fx(e,t,n,r){var i=U,s=wr.transition;wr.transition=null;try{U=4,nu(e,t,n,r)}finally{U=i,wr.transition=s}}function nu(e,t,n,r){if(yo){var i=Ol(e,t,n,r);if(i===null)Ma(e,t,r,vo,n),Hd(e,r);else if(Mx(i,e,t,n,r))r.stopPropagation();else if(Hd(e,r),t&4&&-1<Dx.indexOf(e)){for(;i!==null;){var s=is(i);if(s!==null&&_m(s),s=Ol(e,t,n,r),s===null&&Ma(e,t,r,vo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ma(e,t,r,null,n)}}var vo=null;function Ol(e,t,n,r){if(vo=null,e=Jc(r),e=jn(e),e!==null)if(t=qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vo=e,null}function Am(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cx()){case Zc:return 1;case Sm:return 4;case mo:case Ex:return 16;case Tm:return 536870912;default:return 16}default:return 16}}var tn=null,ru=null,Ks=null;function Rm(){if(Ks)return Ks;var e,t=ru,n=t.length,r,i="value"in tn?tn.value:tn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ks=i.slice(e,1<r?1-r:void 0)}function Gs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _s(){return!0}function Gd(){return!1}function Ue(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_s:Gd,this.isPropagationStopped=Gd,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_s)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_s)},persist:function(){},isPersistent:_s}),t}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=Ue(zr),rs=Z({},zr,{view:0,detail:0}),Vx=Ue(rs),Ea,_a,ei,Qo=Z({},rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(Ea=e.screenX-ei.screenX,_a=e.screenY-ei.screenY):_a=Ea=0,ei=e),Ea)},movementY:function(e){return"movementY"in e?e.movementY:_a}}),qd=Ue(Qo),Ux=Z({},Qo,{dataTransfer:0}),zx=Ue(Ux),$x=Z({},rs,{relatedTarget:0}),Na=Ue($x),Bx=Z({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wx=Ue(Bx),Hx=Z({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kx=Ue(Hx),Gx=Z({},zr,{data:0}),Yd=Ue(Gx),qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xx[e])?!!t[e]:!1}function su(){return Qx}var Jx=Z({},rs,{key:function(e){if(e.key){var t=qx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?Gs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zx=Ue(Jx),e1=Z({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xd=Ue(e1),t1=Z({},rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),n1=Ue(t1),r1=Z({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),i1=Ue(r1),s1=Z({},Qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),o1=Ue(s1),a1=[9,13,27,32],ou=At&&"CompositionEvent"in window,pi=null;At&&"documentMode"in document&&(pi=document.documentMode);var l1=At&&"TextEvent"in window&&!pi,Dm=At&&(!ou||pi&&8<pi&&11>=pi),Qd=String.fromCharCode(32),Jd=!1;function Mm(e,t){switch(e){case"keyup":return a1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function c1(e,t){switch(e){case"compositionend":return Lm(t);case"keypress":return t.which!==32?null:(Jd=!0,Qd);case"textInput":return e=t.data,e===Qd&&Jd?null:e;default:return null}}function u1(e,t){if(tr)return e==="compositionend"||!ou&&Mm(e,t)?(e=Rm(),Ks=ru=tn=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dm&&t.locale!=="ko"?null:t.data;default:return null}}var d1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!d1[e.type]:t==="textarea"}function Om(e,t,n,r){pm(r),t=xo(t,"onChange"),0<t.length&&(n=new iu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mi=null,Di=null;function f1(e){qm(e,0)}function Jo(e){var t=ir(e);if(am(t))return e}function h1(e,t){if(e==="change")return t}var Fm=!1;if(At){var Pa;if(At){var Ia="oninput"in document;if(!Ia){var ef=document.createElement("div");ef.setAttribute("oninput","return;"),Ia=typeof ef.oninput=="function"}Pa=Ia}else Pa=!1;Fm=Pa&&(!document.documentMode||9<document.documentMode)}function tf(){mi&&(mi.detachEvent("onpropertychange",Vm),Di=mi=null)}function Vm(e){if(e.propertyName==="value"&&Jo(Di)){var t=[];Om(t,Di,e,Jc(e)),vm(f1,t)}}function p1(e,t,n){e==="focusin"?(tf(),mi=t,Di=n,mi.attachEvent("onpropertychange",Vm)):e==="focusout"&&tf()}function m1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jo(Di)}function g1(e,t){if(e==="click")return Jo(t)}function y1(e,t){if(e==="input"||e==="change")return Jo(t)}function v1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:v1;function Mi(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xl.call(t,i)||!st(e[i],t[i]))return!1}return!0}function nf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rf(e,t){var n=nf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nf(n)}}function Um(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Um(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zm(){for(var e=window,t=fo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fo(e.document)}return t}function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function x1(e){var t=zm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Um(n.ownerDocument.documentElement,n)){if(r!==null&&au(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=rf(n,s);var o=rf(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var w1=At&&"documentMode"in document&&11>=document.documentMode,nr=null,Fl=null,gi=null,Vl=!1;function sf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vl||nr==null||nr!==fo(r)||(r=nr,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gi&&Mi(gi,r)||(gi=r,r=xo(Fl,"onSelect"),0<r.length&&(t=new iu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nr)))}function Ns(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rr={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionend:Ns("Transition","TransitionEnd")},ja={},$m={};At&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Zo(e){if(ja[e])return ja[e];if(!rr[e])return e;var t=rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $m)return ja[e]=t[n];return e}var Bm=Zo("animationend"),Wm=Zo("animationiteration"),Hm=Zo("animationstart"),Km=Zo("transitionend"),Gm=new Map,of="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,t){Gm.set(e,t),Gn(t,[e])}for(var Aa=0;Aa<of.length;Aa++){var Ra=of[Aa],b1=Ra.toLowerCase(),k1=Ra[0].toUpperCase()+Ra.slice(1);vn(b1,"on"+k1)}vn(Bm,"onAnimationEnd");vn(Wm,"onAnimationIteration");vn(Hm,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(Km,"onTransitionEnd");Nr("onMouseEnter",["mouseout","mouseover"]);Nr("onMouseLeave",["mouseout","mouseover"]);Nr("onPointerEnter",["pointerout","pointerover"]);Nr("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function af(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bx(r,t,void 0,e),e.currentTarget=null}function qm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,d=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;af(i,a,d),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,d=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;af(i,a,d),s=l}}}if(po)throw e=Dl,po=!1,Dl=null,e}function H(e,t){var n=t[Wl];n===void 0&&(n=t[Wl]=new Set);var r=e+"__bubble";n.has(r)||(Ym(t,e,2,!1),n.add(r))}function Da(e,t,n){var r=0;t&&(r|=4),Ym(n,e,r,t)}var Ps="_reactListening"+Math.random().toString(36).slice(2);function Li(e){if(!e[Ps]){e[Ps]=!0,nm.forEach(function(n){n!=="selectionchange"&&(S1.has(n)||Da(n,!1,e),Da(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ps]||(t[Ps]=!0,Da("selectionchange",!1,t))}}function Ym(e,t,n,r){switch(Am(t)){case 1:var i=Ox;break;case 4:i=Fx;break;default:i=nu}n=i.bind(null,t,n,e),i=void 0,!Rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ma(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=jn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}vm(function(){var d=s,f=Jc(n),h=[];e:{var u=Gm.get(e);if(u!==void 0){var p=iu,m=e;switch(e){case"keypress":if(Gs(n)===0)break e;case"keydown":case"keyup":p=Zx;break;case"focusin":m="focus",p=Na;break;case"focusout":m="blur",p=Na;break;case"beforeblur":case"afterblur":p=Na;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=n1;break;case Bm:case Wm:case Hm:p=Wx;break;case Km:p=i1;break;case"scroll":p=Vx;break;case"wheel":p=o1;break;case"copy":case"cut":case"paste":p=Kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xd}var g=(t&4)!==0,b=!g&&e==="scroll",y=g?u!==null?u+"Capture":null:u;g=[];for(var v=d,x;v!==null;){x=v;var k=x.stateNode;if(x.tag===5&&k!==null&&(x=k,y!==null&&(k=Ii(v,y),k!=null&&g.push(Oi(v,k,x)))),b)break;v=v.return}0<g.length&&(u=new p(u,m,null,n,f),h.push({event:u,listeners:g}))}}if(!(t&7)){e:{if(u=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",u&&n!==jl&&(m=n.relatedTarget||n.fromElement)&&(jn(m)||m[Rt]))break e;if((p||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=d,m=m?jn(m):null,m!==null&&(b=qn(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=d),p!==m)){if(g=qd,k="onMouseLeave",y="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(g=Xd,k="onPointerLeave",y="onPointerEnter",v="pointer"),b=p==null?u:ir(p),x=m==null?u:ir(m),u=new g(k,v+"leave",p,n,f),u.target=b,u.relatedTarget=x,k=null,jn(f)===d&&(g=new g(y,v+"enter",m,n,f),g.target=x,g.relatedTarget=b,k=g),b=k,p&&m)t:{for(g=p,y=m,v=0,x=g;x;x=Jn(x))v++;for(x=0,k=y;k;k=Jn(k))x++;for(;0<v-x;)g=Jn(g),v--;for(;0<x-v;)y=Jn(y),x--;for(;v--;){if(g===y||y!==null&&g===y.alternate)break t;g=Jn(g),y=Jn(y)}g=null}else g=null;p!==null&&lf(h,u,p,g,!1),m!==null&&b!==null&&lf(h,b,m,g,!0)}}e:{if(u=d?ir(d):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var S=h1;else if(Zd(u))if(Fm)S=y1;else{S=m1;var C=p1}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(S=g1);if(S&&(S=S(e,d))){Om(h,S,n,f);break e}C&&C(e,u,d),e==="focusout"&&(C=u._wrapperState)&&C.controlled&&u.type==="number"&&El(u,"number",u.value)}switch(C=d?ir(d):window,e){case"focusin":(Zd(C)||C.contentEditable==="true")&&(nr=C,Fl=d,gi=null);break;case"focusout":gi=Fl=nr=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,sf(h,n,f);break;case"selectionchange":if(w1)break;case"keydown":case"keyup":sf(h,n,f)}var E;if(ou)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else tr?Mm(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Dm&&n.locale!=="ko"&&(tr||T!=="onCompositionStart"?T==="onCompositionEnd"&&tr&&(E=Rm()):(tn=f,ru="value"in tn?tn.value:tn.textContent,tr=!0)),C=xo(d,T),0<C.length&&(T=new Yd(T,e,null,n,f),h.push({event:T,listeners:C}),E?T.data=E:(E=Lm(n),E!==null&&(T.data=E)))),(E=l1?c1(e,n):u1(e,n))&&(d=xo(d,"onBeforeInput"),0<d.length&&(f=new Yd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:d}),f.data=E))}qm(h,t)})}function Oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ii(e,n),s!=null&&r.unshift(Oi(e,s,i)),s=Ii(e,t),s!=null&&r.push(Oi(e,s,i))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lf(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,d=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&d!==null&&(a=d,i?(l=Ii(n,s),l!=null&&o.unshift(Oi(n,l,a))):i||(l=Ii(n,s),l!=null&&o.push(Oi(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var T1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function cf(e){return(typeof e=="string"?e:""+e).replace(T1,`
`).replace(C1,"")}function Is(e,t,n){if(t=cf(t),cf(e)!==t&&n)throw Error(N(425))}function wo(){}var Ul=null,zl=null;function $l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bl=typeof setTimeout=="function"?setTimeout:void 0,E1=typeof clearTimeout=="function"?clearTimeout:void 0,uf=typeof Promise=="function"?Promise:void 0,_1=typeof queueMicrotask=="function"?queueMicrotask:typeof uf<"u"?function(e){return uf.resolve(null).then(e).catch(N1)}:Bl;function N1(e){setTimeout(function(){throw e})}function La(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ri(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ri(t)}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $r=Math.random().toString(36).slice(2),dt="__reactFiber$"+$r,Fi="__reactProps$"+$r,Rt="__reactContainer$"+$r,Wl="__reactEvents$"+$r,P1="__reactListeners$"+$r,I1="__reactHandles$"+$r;function jn(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[dt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function is(e){return e=e[dt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function ea(e){return e[Fi]||null}var Hl=[],sr=-1;function xn(e){return{current:e}}function K(e){0>sr||(e.current=Hl[sr],Hl[sr]=null,sr--)}function B(e,t){sr++,Hl[sr]=e.current,e.current=t}var mn={},ve=xn(mn),Ie=xn(!1),zn=mn;function Pr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function bo(){K(Ie),K(ve)}function ff(e,t,n){if(ve.current!==mn)throw Error(N(168));B(ve,t),B(Ie,n)}function Xm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,px(e)||"Unknown",i));return Z({},n,r)}function ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,zn=ve.current,B(ve,e),B(Ie,Ie.current),!0}function hf(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Xm(e,t,zn),r.__reactInternalMemoizedMergedChildContext=e,K(Ie),K(ve),B(ve,e)):K(Ie),B(Ie,n)}var St=null,ta=!1,Oa=!1;function Qm(e){St===null?St=[e]:St.push(e)}function j1(e){ta=!0,Qm(e)}function wn(){if(!Oa&&St!==null){Oa=!0;var e=0,t=U;try{var n=St;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,ta=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),km(Zc,wn),i}finally{U=t,Oa=!1}}return null}var or=[],ar=0,So=null,To=0,Be=[],We=0,$n=null,Et=1,_t="";function En(e,t){or[ar++]=To,or[ar++]=So,So=e,To=t}function Jm(e,t,n){Be[We++]=Et,Be[We++]=_t,Be[We++]=$n,$n=e;var r=Et;e=_t;var i=32-rt(r)-1;r&=~(1<<i),n+=1;var s=32-rt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Et=1<<32-rt(t)+i|n<<i|r,_t=s+e}else Et=1<<s|n<<i|r,_t=e}function lu(e){e.return!==null&&(En(e,1),Jm(e,1,0))}function cu(e){for(;e===So;)So=or[--ar],or[ar]=null,To=or[--ar],or[ar]=null;for(;e===$n;)$n=Be[--We],Be[We]=null,_t=Be[--We],Be[We]=null,Et=Be[--We],Be[We]=null}var Oe=null,Le=null,G=!1,tt=null;function Zm(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,Le=an(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$n!==null?{id:Et,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,Le=null,!0):!1;default:return!1}}function Kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gl(e){if(G){var t=Le;if(t){var n=t;if(!pf(e,t)){if(Kl(e))throw Error(N(418));t=an(n.nextSibling);var r=Oe;t&&pf(e,t)?Zm(r,n):(e.flags=e.flags&-4097|2,G=!1,Oe=e)}}else{if(Kl(e))throw Error(N(418));e.flags=e.flags&-4097|2,G=!1,Oe=e}}}function mf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function js(e){if(e!==Oe)return!1;if(!G)return mf(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$l(e.type,e.memoizedProps)),t&&(t=Le)){if(Kl(e))throw eg(),Error(N(418));for(;t;)Zm(e,t),t=an(t.nextSibling)}if(mf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=an(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Oe?an(e.stateNode.nextSibling):null;return!0}function eg(){for(var e=Le;e;)e=an(e.nextSibling)}function Ir(){Le=Oe=null,G=!1}function uu(e){tt===null?tt=[e]:tt.push(e)}var A1=$t.ReactCurrentBatchConfig;function ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function As(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gf(e){var t=e._init;return t(e._payload)}function tg(e){function t(y,v){if(e){var x=y.deletions;x===null?(y.deletions=[v],y.flags|=16):x.push(v)}}function n(y,v){if(!e)return null;for(;v!==null;)t(y,v),v=v.sibling;return null}function r(y,v){for(y=new Map;v!==null;)v.key!==null?y.set(v.key,v):y.set(v.index,v),v=v.sibling;return y}function i(y,v){return y=dn(y,v),y.index=0,y.sibling=null,y}function s(y,v,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<v?(y.flags|=2,v):x):(y.flags|=2,v)):(y.flags|=1048576,v)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,v,x,k){return v===null||v.tag!==6?(v=Wa(x,y.mode,k),v.return=y,v):(v=i(v,x),v.return=y,v)}function l(y,v,x,k){var S=x.type;return S===er?f(y,v,x.props.children,k,x.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qt&&gf(S)===v.type)?(k=i(v,x.props),k.ref=ti(y,v,x),k.return=y,k):(k=eo(x.type,x.key,x.props,null,y.mode,k),k.ref=ti(y,v,x),k.return=y,k)}function d(y,v,x,k){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Ha(x,y.mode,k),v.return=y,v):(v=i(v,x.children||[]),v.return=y,v)}function f(y,v,x,k,S){return v===null||v.tag!==7?(v=On(x,y.mode,k,S),v.return=y,v):(v=i(v,x),v.return=y,v)}function h(y,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Wa(""+v,y.mode,x),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bs:return x=eo(v.type,v.key,v.props,null,y.mode,x),x.ref=ti(y,null,v),x.return=y,x;case Zn:return v=Ha(v,y.mode,x),v.return=y,v;case qt:var k=v._init;return h(y,k(v._payload),x)}if(li(v)||Xr(v))return v=On(v,y.mode,x,null),v.return=y,v;As(y,v)}return null}function u(y,v,x,k){var S=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(y,v,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case bs:return x.key===S?l(y,v,x,k):null;case Zn:return x.key===S?d(y,v,x,k):null;case qt:return S=x._init,u(y,v,S(x._payload),k)}if(li(x)||Xr(x))return S!==null?null:f(y,v,x,k,null);As(y,x)}return null}function p(y,v,x,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return y=y.get(x)||null,a(v,y,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case bs:return y=y.get(k.key===null?x:k.key)||null,l(v,y,k,S);case Zn:return y=y.get(k.key===null?x:k.key)||null,d(v,y,k,S);case qt:var C=k._init;return p(y,v,x,C(k._payload),S)}if(li(k)||Xr(k))return y=y.get(x)||null,f(v,y,k,S,null);As(v,k)}return null}function m(y,v,x,k){for(var S=null,C=null,E=v,T=v=0,R=null;E!==null&&T<x.length;T++){E.index>T?(R=E,E=null):R=E.sibling;var A=u(y,E,x[T],k);if(A===null){E===null&&(E=R);break}e&&E&&A.alternate===null&&t(y,E),v=s(A,v,T),C===null?S=A:C.sibling=A,C=A,E=R}if(T===x.length)return n(y,E),G&&En(y,T),S;if(E===null){for(;T<x.length;T++)E=h(y,x[T],k),E!==null&&(v=s(E,v,T),C===null?S=E:C.sibling=E,C=E);return G&&En(y,T),S}for(E=r(y,E);T<x.length;T++)R=p(E,y,T,x[T],k),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?T:R.key),v=s(R,v,T),C===null?S=R:C.sibling=R,C=R);return e&&E.forEach(function($){return t(y,$)}),G&&En(y,T),S}function g(y,v,x,k){var S=Xr(x);if(typeof S!="function")throw Error(N(150));if(x=S.call(x),x==null)throw Error(N(151));for(var C=S=null,E=v,T=v=0,R=null,A=x.next();E!==null&&!A.done;T++,A=x.next()){E.index>T?(R=E,E=null):R=E.sibling;var $=u(y,E,A.value,k);if($===null){E===null&&(E=R);break}e&&E&&$.alternate===null&&t(y,E),v=s($,v,T),C===null?S=$:C.sibling=$,C=$,E=R}if(A.done)return n(y,E),G&&En(y,T),S;if(E===null){for(;!A.done;T++,A=x.next())A=h(y,A.value,k),A!==null&&(v=s(A,v,T),C===null?S=A:C.sibling=A,C=A);return G&&En(y,T),S}for(E=r(y,E);!A.done;T++,A=x.next())A=p(E,y,T,A.value,k),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?T:A.key),v=s(A,v,T),C===null?S=A:C.sibling=A,C=A);return e&&E.forEach(function(xe){return t(y,xe)}),G&&En(y,T),S}function b(y,v,x,k){if(typeof x=="object"&&x!==null&&x.type===er&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case bs:e:{for(var S=x.key,C=v;C!==null;){if(C.key===S){if(S=x.type,S===er){if(C.tag===7){n(y,C.sibling),v=i(C,x.props.children),v.return=y,y=v;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qt&&gf(S)===C.type){n(y,C.sibling),v=i(C,x.props),v.ref=ti(y,C,x),v.return=y,y=v;break e}n(y,C);break}else t(y,C);C=C.sibling}x.type===er?(v=On(x.props.children,y.mode,k,x.key),v.return=y,y=v):(k=eo(x.type,x.key,x.props,null,y.mode,k),k.ref=ti(y,v,x),k.return=y,y=k)}return o(y);case Zn:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(y,v.sibling),v=i(v,x.children||[]),v.return=y,y=v;break e}else{n(y,v);break}else t(y,v);v=v.sibling}v=Ha(x,y.mode,k),v.return=y,y=v}return o(y);case qt:return C=x._init,b(y,v,C(x._payload),k)}if(li(x))return m(y,v,x,k);if(Xr(x))return g(y,v,x,k);As(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(y,v.sibling),v=i(v,x),v.return=y,y=v):(n(y,v),v=Wa(x,y.mode,k),v.return=y,y=v),o(y)):n(y,v)}return b}var jr=tg(!0),ng=tg(!1),Co=xn(null),Eo=null,lr=null,du=null;function fu(){du=lr=Eo=null}function hu(e){var t=Co.current;K(Co),e._currentValue=t}function ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function br(e,t){Eo=e,du=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(du!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(Eo===null)throw Error(N(308));lr=e,Eo.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var An=null;function pu(e){An===null?An=[e]:An.push(e)}function rg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yt=!1;function mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ig(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Dt(e,n)}return i=r.interleaved,i===null?(t.next=t,pu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Dt(e,n)}function qs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eu(e,n)}}function yf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _o(e,t,n,r){var i=e.updateQueue;Yt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,d=l.next;l.next=null,o===null?s=d:o.next=d,o=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=d:a.next=d,f.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,f=d=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((r&u)===u){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,g=a;switch(u=t,p=n,g.tag){case 1:if(m=g.payload,typeof m=="function"){h=m.call(p,h,u);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,u=typeof m=="function"?m.call(p,h,u):m,u==null)break e;h=Z({},h,u);break e;case 2:Yt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,u=i.effects,u===null?i.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(d=f=p,l=h):f=f.next=p,o|=u;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;u=a,a=u.next,u.next=null,i.lastBaseUpdate=u,i.shared.pending=null}}while(1);if(f===null&&(l=h),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Wn|=o,e.lanes=o,e.memoizedState=h}}function vf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var ss={},ht=xn(ss),Vi=xn(ss),Ui=xn(ss);function Rn(e){if(e===ss)throw Error(N(174));return e}function gu(e,t){switch(B(Ui,t),B(Vi,e),B(ht,ss),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nl(t,e)}K(ht),B(ht,t)}function Ar(){K(ht),K(Vi),K(Ui)}function sg(e){Rn(Ui.current);var t=Rn(ht.current),n=Nl(t,e.type);t!==n&&(B(Vi,e),B(ht,n))}function yu(e){Vi.current===e&&(K(ht),K(Vi))}var Y=xn(0);function No(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fa=[];function vu(){for(var e=0;e<Fa.length;e++)Fa[e]._workInProgressVersionPrimary=null;Fa.length=0}var Ys=$t.ReactCurrentDispatcher,Va=$t.ReactCurrentBatchConfig,Bn=0,Q=null,oe=null,le=null,Po=!1,yi=!1,zi=0,R1=0;function pe(){throw Error(N(321))}function xu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function wu(e,t,n,r,i,s){if(Bn=s,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ys.current=e===null||e.memoizedState===null?O1:F1,e=n(r,i),yi){s=0;do{if(yi=!1,zi=0,25<=s)throw Error(N(301));s+=1,le=oe=null,t.updateQueue=null,Ys.current=V1,e=n(r,i)}while(yi)}if(Ys.current=Io,t=oe!==null&&oe.next!==null,Bn=0,le=oe=Q=null,Po=!1,t)throw Error(N(300));return e}function bu(){var e=zi!==0;return zi=0,e}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Q.memoizedState=le=e:le=le.next=e,le}function Ye(){if(oe===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=le===null?Q.memoizedState:le.next;if(t!==null)le=t,oe=e;else{if(e===null)throw Error(N(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},le===null?Q.memoizedState=le=e:le=le.next=e}return le}function $i(e,t){return typeof t=="function"?t(e):t}function Ua(e){var t=Ye(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,d=s;do{var f=d.lane;if((Bn&f)===f)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Q.lanes|=f,Wn|=f}d=d.next}while(d!==null&&d!==s);l===null?o=r:l.next=a,st(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Q.lanes|=s,Wn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function za(e){var t=Ye(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);st(s,t.memoizedState)||(Ne=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function og(){}function ag(e,t){var n=Q,r=Ye(),i=t(),s=!st(r.memoizedState,i);if(s&&(r.memoizedState=i,Ne=!0),r=r.queue,ku(ug.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Bi(9,cg.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(N(349));Bn&30||lg(n,t,i)}return i}function lg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cg(e,t,n,r){t.value=n,t.getSnapshot=r,dg(t)&&fg(e)}function ug(e,t,n){return n(function(){dg(t)&&fg(e)})}function dg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function fg(e){var t=Dt(e,1);t!==null&&it(t,e,1,-1)}function xf(e){var t=ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},t.queue=e,e=e.dispatch=L1.bind(null,Q,e),[t.memoizedState,e]}function Bi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hg(){return Ye().memoizedState}function Xs(e,t,n,r){var i=ut();Q.flags|=e,i.memoizedState=Bi(1|t,n,void 0,r===void 0?null:r)}function na(e,t,n,r){var i=Ye();r=r===void 0?null:r;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,r!==null&&xu(r,o.deps)){i.memoizedState=Bi(t,n,s,r);return}}Q.flags|=e,i.memoizedState=Bi(1|t,n,s,r)}function wf(e,t){return Xs(8390656,8,e,t)}function ku(e,t){return na(2048,8,e,t)}function pg(e,t){return na(4,2,e,t)}function mg(e,t){return na(4,4,e,t)}function gg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yg(e,t,n){return n=n!=null?n.concat([e]):null,na(4,4,gg.bind(null,t,e),n)}function Su(){}function vg(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xg(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wg(e,t,n){return Bn&21?(st(n,t)||(n=Cm(),Q.lanes|=n,Wn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function D1(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Va.transition;Va.transition={};try{e(!1),t()}finally{U=n,Va.transition=r}}function bg(){return Ye().memoizedState}function M1(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kg(e))Sg(t,n);else if(n=rg(e,t,n,r),n!==null){var i=ke();it(n,e,r,i),Tg(n,t,r)}}function L1(e,t,n){var r=un(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kg(e))Sg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,st(a,o)){var l=t.interleaved;l===null?(i.next=i,pu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=rg(e,t,i,r),n!==null&&(i=ke(),it(n,e,r,i),Tg(n,t,r))}}function kg(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Sg(e,t){yi=Po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eu(e,n)}}var Io={readContext:qe,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},O1={readContext:qe,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:wf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xs(4194308,4,gg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xs(4,2,e,t)},useMemo:function(e,t){var n=ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=M1.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:xf,useDebugValue:Su,useDeferredValue:function(e){return ut().memoizedState=e},useTransition:function(){var e=xf(!1),t=e[0];return e=D1.bind(null,e[1]),ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=ut();if(G){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ce===null)throw Error(N(349));Bn&30||lg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,wf(ug.bind(null,r,s,e),[e]),r.flags|=2048,Bi(9,cg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=ut(),t=ce.identifierPrefix;if(G){var n=_t,r=Et;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=R1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},F1={readContext:qe,useCallback:vg,useContext:qe,useEffect:ku,useImperativeHandle:yg,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:xg,useReducer:Ua,useRef:hg,useState:function(){return Ua($i)},useDebugValue:Su,useDeferredValue:function(e){var t=Ye();return wg(t,oe.memoizedState,e)},useTransition:function(){var e=Ua($i)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:og,useSyncExternalStore:ag,useId:bg,unstable_isNewReconciler:!1},V1={readContext:qe,useCallback:vg,useContext:qe,useEffect:ku,useImperativeHandle:yg,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:xg,useReducer:za,useRef:hg,useState:function(){return za($i)},useDebugValue:Su,useDeferredValue:function(e){var t=Ye();return oe===null?t.memoizedState=e:wg(t,oe.memoizedState,e)},useTransition:function(){var e=za($i)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:og,useSyncExternalStore:ag,useId:bg,unstable_isNewReconciler:!1};function Ze(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ra={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=un(e),s=It(r,i);s.payload=t,n!=null&&(s.callback=n),t=ln(e,s,i),t!==null&&(it(t,e,i,r),qs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=un(e),s=It(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ln(e,s,i),t!==null&&(it(t,e,i,r),qs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=un(e),i=It(n,r);i.tag=2,t!=null&&(i.callback=t),t=ln(e,i,r),t!==null&&(it(t,e,r,n),qs(t,e,r))}};function bf(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Mi(n,r)||!Mi(i,s):!0}function Cg(e,t,n){var r=!1,i=mn,s=t.contextType;return typeof s=="object"&&s!==null?s=qe(s):(i=je(t)?zn:ve.current,r=t.contextTypes,s=(r=r!=null)?Pr(e,i):mn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ra,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function kf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ra.enqueueReplaceState(t,t.state,null)}function Xl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},mu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=qe(s):(s=je(t)?zn:ve.current,i.context=Pr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Yl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ra.enqueueReplaceState(i,i.state,null),_o(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t){try{var n="",r=t;do n+=hx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function $a(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var U1=typeof WeakMap=="function"?WeakMap:Map;function Eg(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ao||(Ao=!0,ac=r),Ql(e,t)},n}function _g(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ql(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ql(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Sf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new U1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ew.bind(null,e,t,n),t.then(e,e))}function Tf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,ln(n,t,1))),n.lanes|=1),e)}var z1=$t.ReactCurrentOwner,Ne=!1;function we(e,t,n,r){t.child=e===null?ng(t,null,n,r):jr(t,e.child,n,r)}function Ef(e,t,n,r,i){n=n.render;var s=t.ref;return br(t,i),r=wu(e,t,n,r,s,i),n=bu(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(G&&n&&lu(t),t.flags|=1,we(e,t,r,i),t.child)}function _f(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!ju(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Ng(e,t,s,r,i)):(e=eo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mi,n(o,r)&&e.ref===t.ref)return Mt(e,t,i)}return t.flags|=1,e=dn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Ng(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Mi(s,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,Mt(e,t,i)}return Jl(e,t,n,r,i)}function Pg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(ur,Me),Me|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(ur,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,B(ur,Me),Me|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,B(ur,Me),Me|=r;return we(e,t,i,n),t.child}function Ig(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jl(e,t,n,r,i){var s=je(n)?zn:ve.current;return s=Pr(t,s),br(t,i),n=wu(e,t,n,r,s,i),r=bu(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(G&&r&&lu(t),t.flags|=1,we(e,t,n,i),t.child)}function Nf(e,t,n,r,i){if(je(n)){var s=!0;ko(t)}else s=!1;if(br(t,i),t.stateNode===null)Qs(e,t),Cg(t,n,r),Xl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=qe(d):(d=je(n)?zn:ve.current,d=Pr(t,d));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==d)&&kf(t,o,r,d),Yt=!1;var u=t.memoizedState;o.state=u,_o(t,r,o,i),l=t.memoizedState,a!==r||u!==l||Ie.current||Yt?(typeof f=="function"&&(Yl(t,n,f,r),l=t.memoizedState),(a=Yt||bf(t,n,a,r,u,l,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ig(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Ze(t.type,a),o.props=d,h=t.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qe(l):(l=je(n)?zn:ve.current,l=Pr(t,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||u!==l)&&kf(t,o,r,l),Yt=!1,u=t.memoizedState,o.state=u,_o(t,r,o,i);var m=t.memoizedState;a!==h||u!==m||Ie.current||Yt?(typeof p=="function"&&(Yl(t,n,p,r),m=t.memoizedState),(d=Yt||bf(t,n,d,r,u,m,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=l,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),r=!1)}return Zl(e,t,n,r,s,i)}function Zl(e,t,n,r,i,s){Ig(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&hf(t,n,!1),Mt(e,t,s);r=t.stateNode,z1.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=jr(t,e.child,null,s),t.child=jr(t,null,a,s)):we(e,t,a,s),t.memoizedState=r.state,i&&hf(t,n,!0),t.child}function jg(e){var t=e.stateNode;t.pendingContext?ff(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ff(e,t.context,!1),gu(e,t.containerInfo)}function Pf(e,t,n,r,i){return Ir(),uu(i),t.flags|=256,we(e,t,n,r),t.child}var ec={dehydrated:null,treeContext:null,retryLane:0};function tc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ag(e,t,n){var r=t.pendingProps,i=Y.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(Y,i&1),e===null)return Gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=oa(o,r,0,null),e=On(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=tc(n),t.memoizedState=ec,e):Tu(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $1(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=dn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=dn(a,s):(s=On(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?tc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=ec,r}return s=e.child,e=s.sibling,r=dn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Tu(e,t){return t=oa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rs(e,t,n,r){return r!==null&&uu(r),jr(t,e.child,null,n),e=Tu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $1(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=$a(Error(N(422))),Rs(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=oa({mode:"visible",children:r.children},i,0,null),s=On(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&jr(t,e.child,null,o),t.child.memoizedState=tc(o),t.memoizedState=ec,s);if(!(t.mode&1))return Rs(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=$a(s,r,void 0),Rs(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ne||a){if(r=ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dt(e,i),it(r,e,i,-1))}return Iu(),r=$a(Error(N(421))),Rs(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=tw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Le=an(i.nextSibling),Oe=t,G=!0,tt=null,e!==null&&(Be[We++]=Et,Be[We++]=_t,Be[We++]=$n,Et=e.id,_t=e.overflow,$n=t),t=Tu(t,r.children),t.flags|=4096,t)}function If(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ql(e.return,t,n)}function Ba(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Rg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(we(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&If(e,n,t);else if(e.tag===19)If(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&No(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ba(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&No(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ba(t,!0,n,null,s);break;case"together":Ba(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function B1(e,t,n){switch(t.tag){case 3:jg(t),Ir();break;case 5:sg(t);break;case 1:je(t.type)&&ko(t);break;case 4:gu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Co,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Ag(e,t,n):(B(Y,Y.current&1),e=Mt(e,t,n),e!==null?e.sibling:null);B(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Pg(e,t,n)}return Mt(e,t,n)}var Dg,nc,Mg,Lg;Dg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nc=function(){};Mg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Rn(ht.current);var s=null;switch(n){case"input":i=Tl(e,i),r=Tl(e,r),s=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),s=[];break;case"textarea":i=_l(e,i),r=_l(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wo)}Pl(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ni.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var l=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&l!==a&&(l!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ni.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&H("scroll",e),s||a===l||(s=[])):(s=s||[]).push(d,l))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};Lg=function(e,t,n,r){n!==r&&(t.flags|=4)};function ni(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function W1(e,t,n){var r=t.pendingProps;switch(cu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return je(t.type)&&bo(),me(t),null;case 3:return r=t.stateNode,Ar(),K(Ie),K(ve),vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(js(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tt!==null&&(uc(tt),tt=null))),nc(e,t),me(t),null;case 5:yu(t);var i=Rn(Ui.current);if(n=t.type,e!==null&&t.stateNode!=null)Mg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return me(t),null}if(e=Rn(ht.current),js(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[dt]=t,r[Fi]=s,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<ui.length;i++)H(ui[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Fd(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":Ud(r,s),H("invalid",r)}Pl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Is(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Is(r.textContent,a,e),i=["children",""+a]):Ni.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":ks(r),Vd(r,s,!0);break;case"textarea":ks(r),zd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=um(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[dt]=t,e[Fi]=r,Dg(e,t,!1,!1),t.stateNode=e;e:{switch(o=Il(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<ui.length;i++)H(ui[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Fd(e,r),i=Tl(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),H("invalid",e);break;case"textarea":Ud(e,r),i=_l(e,r),H("invalid",e);break;default:i=r}Pl(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hm(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dm(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pi(e,l):typeof l=="number"&&Pi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ni.hasOwnProperty(s)?l!=null&&s==="onScroll"&&H("scroll",e):l!=null&&qc(e,s,l,o))}switch(n){case"input":ks(e),Vd(e,r,!1);break;case"textarea":ks(e),zd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?yr(e,!!r.multiple,s,!1):r.defaultValue!=null&&yr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Lg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Rn(Ui.current),Rn(ht.current),js(t)){if(r=t.stateNode,n=t.memoizedProps,r[dt]=t,(s=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:Is(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Is(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=t,t.stateNode=r}return me(t),null;case 13:if(K(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Le!==null&&t.mode&1&&!(t.flags&128))eg(),Ir(),t.flags|=98560,s=!1;else if(s=js(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(N(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[dt]=t}else Ir(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),s=!1}else tt!==null&&(uc(tt),tt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ae===0&&(ae=3):Iu())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Ar(),nc(e,t),e===null&&Li(t.stateNode.containerInfo),me(t),null;case 10:return hu(t.type._context),me(t),null;case 17:return je(t.type)&&bo(),me(t),null;case 19:if(K(Y),s=t.memoizedState,s===null)return me(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)ni(s,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=No(e),o!==null){for(t.flags|=128,ni(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Y,Y.current&1|2),t.child}e=e.sibling}s.tail!==null&&re()>Dr&&(t.flags|=128,r=!0,ni(s,!1),t.lanes=4194304)}else{if(!r)if(e=No(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ni(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!G)return me(t),null}else 2*re()-s.renderingStartTime>Dr&&n!==1073741824&&(t.flags|=128,r=!0,ni(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=re(),t.sibling=null,n=Y.current,B(Y,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Pu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function H1(e,t){switch(cu(t),t.tag){case 1:return je(t.type)&&bo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ar(),K(Ie),K(ve),vu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yu(t),null;case 13:if(K(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Y),null;case 4:return Ar(),null;case 10:return hu(t.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var Ds=!1,ge=!1,K1=typeof WeakSet=="function"?WeakSet:Set,j=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function rc(e,t,n){try{n()}catch(r){te(e,t,r)}}var jf=!1;function G1(e,t){if(Ul=yo,e=zm(),au(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,d=0,f=0,h=e,u=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===e)break t;if(u===n&&++d===i&&(a=o),u===s&&++f===r&&(l=o),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zl={focusedElem:e,selectionRange:n},yo=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,b=m.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:Ze(t.type,g),b);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(k){te(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return m=jf,jf=!1,m}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&rc(t,n,s)}i=i.next}while(i!==r)}}function ia(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ic(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Og(e){var t=e.alternate;t!==null&&(e.alternate=null,Og(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dt],delete t[Fi],delete t[Wl],delete t[P1],delete t[I1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fg(e){return e.tag===5||e.tag===3||e.tag===4}function Af(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wo));else if(r!==4&&(e=e.child,e!==null))for(sc(e,t,n),e=e.sibling;e!==null;)sc(e,t,n),e=e.sibling}function oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oc(e,t,n),e=e.sibling;e!==null;)oc(e,t,n),e=e.sibling}var ue=null,et=!1;function Ht(e,t,n){for(n=n.child;n!==null;)Vg(e,t,n),n=n.sibling}function Vg(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Xo,n)}catch{}switch(n.tag){case 5:ge||cr(n,t);case 6:var r=ue,i=et;ue=null,Ht(e,t,n),ue=r,et=i,ue!==null&&(et?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(et?(e=ue,n=n.stateNode,e.nodeType===8?La(e.parentNode,n):e.nodeType===1&&La(e,n),Ri(e)):La(ue,n.stateNode));break;case 4:r=ue,i=et,ue=n.stateNode.containerInfo,et=!0,Ht(e,t,n),ue=r,et=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rc(n,t,o),i=i.next}while(i!==r)}Ht(e,t,n);break;case 1:if(!ge&&(cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){te(n,t,a)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,Ht(e,t,n),ge=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function Rf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new K1),t.forEach(function(r){var i=nw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,et=!1;break e;case 3:ue=a.stateNode.containerInfo,et=!0;break e;case 4:ue=a.stateNode.containerInfo,et=!0;break e}a=a.return}if(ue===null)throw Error(N(160));Vg(s,o,i),ue=null,et=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){te(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ug(t,e),t=t.sibling}function Ug(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),ct(e),r&4){try{vi(3,e,e.return),ia(3,e)}catch(g){te(e,e.return,g)}try{vi(5,e,e.return)}catch(g){te(e,e.return,g)}}break;case 1:Qe(t,e),ct(e),r&512&&n!==null&&cr(n,n.return);break;case 5:if(Qe(t,e),ct(e),r&512&&n!==null&&cr(n,n.return),e.flags&32){var i=e.stateNode;try{Pi(i,"")}catch(g){te(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lm(i,s),Il(a,o);var d=Il(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?hm(i,h):f==="dangerouslySetInnerHTML"?dm(i,h):f==="children"?Pi(i,h):qc(i,f,h,d)}switch(a){case"input":Cl(i,s);break;case"textarea":cm(i,s);break;case"select":var u=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?yr(i,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?yr(i,!!s.multiple,s.defaultValue,!0):yr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fi]=s}catch(g){te(e,e.return,g)}}break;case 6:if(Qe(t,e),ct(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(g){te(e,e.return,g)}}break;case 3:if(Qe(t,e),ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ri(t.containerInfo)}catch(g){te(e,e.return,g)}break;case 4:Qe(t,e),ct(e);break;case 13:Qe(t,e),ct(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_u=re())),r&4&&Rf(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(d=ge)||f,Qe(t,e),ge=d):Qe(t,e),ct(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(j=e,f=e.child;f!==null;){for(h=j=f;j!==null;){switch(u=j,p=u.child,u.tag){case 0:case 11:case 14:case 15:vi(4,u,u.return);break;case 1:cr(u,u.return);var m=u.stateNode;if(typeof m.componentWillUnmount=="function"){r=u,n=u.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){te(r,n,g)}}break;case 5:cr(u,u.return);break;case 22:if(u.memoizedState!==null){Mf(h);continue}}p!==null?(p.return=u,j=p):Mf(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fm("display",o))}catch(g){te(e,e.return,g)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(g){te(e,e.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Qe(t,e),ct(e),r&4&&Rf(e);break;case 21:break;default:Qe(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fg(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pi(i,""),r.flags&=-33);var s=Af(e);oc(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Af(e);sc(e,a,o);break;default:throw Error(N(161))}}catch(l){te(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function q1(e,t,n){j=e,zg(e)}function zg(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ds;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ge;a=Ds;var d=ge;if(Ds=o,(ge=l)&&!d)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?Lf(i):l!==null?(l.return=o,j=l):Lf(i);for(;s!==null;)j=s,zg(s),s=s.sibling;j=i,Ds=a,ge=d}Df(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):Df(e)}}function Df(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||ia(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&vf(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vf(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ri(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ge||t.flags&512&&ic(t)}catch(u){te(t,t.return,u)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Mf(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Lf(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ia(4,t)}catch(l){te(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){te(t,i,l)}}var s=t.return;try{ic(t)}catch(l){te(t,s,l)}break;case 5:var o=t.return;try{ic(t)}catch(l){te(t,o,l)}}}catch(l){te(t,t.return,l)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var Y1=Math.ceil,jo=$t.ReactCurrentDispatcher,Cu=$t.ReactCurrentOwner,Ke=$t.ReactCurrentBatchConfig,V=0,ce=null,se=null,fe=0,Me=0,ur=xn(0),ae=0,Wi=null,Wn=0,sa=0,Eu=0,xi=null,_e=null,_u=0,Dr=1/0,bt=null,Ao=!1,ac=null,cn=null,Ms=!1,nn=null,Ro=0,wi=0,lc=null,Js=-1,Zs=0;function ke(){return V&6?re():Js!==-1?Js:Js=re()}function un(e){return e.mode&1?V&2&&fe!==0?fe&-fe:A1.transition!==null?(Zs===0&&(Zs=Cm()),Zs):(e=U,e!==0||(e=window.event,e=e===void 0?16:Am(e.type)),e):1}function it(e,t,n,r){if(50<wi)throw wi=0,lc=null,Error(N(185));ns(e,n,r),(!(V&2)||e!==ce)&&(e===ce&&(!(V&2)&&(sa|=n),ae===4&&Qt(e,fe)),Ae(e,r),n===1&&V===0&&!(t.mode&1)&&(Dr=re()+500,ta&&wn()))}function Ae(e,t){var n=e.callbackNode;Ax(e,t);var r=go(e,e===ce?fe:0);if(r===0)n!==null&&Wd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wd(n),t===1)e.tag===0?j1(Of.bind(null,e)):Qm(Of.bind(null,e)),_1(function(){!(V&6)&&wn()}),n=null;else{switch(Em(r)){case 1:n=Zc;break;case 4:n=Sm;break;case 16:n=mo;break;case 536870912:n=Tm;break;default:n=mo}n=Yg(n,$g.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $g(e,t){if(Js=-1,Zs=0,V&6)throw Error(N(327));var n=e.callbackNode;if(kr()&&e.callbackNode!==n)return null;var r=go(e,e===ce?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Do(e,r);else{t=r;var i=V;V|=2;var s=Wg();(ce!==e||fe!==t)&&(bt=null,Dr=re()+500,Ln(e,t));do try{J1();break}catch(a){Bg(e,a)}while(1);fu(),jo.current=s,V=i,se!==null?t=0:(ce=null,fe=0,t=ae)}if(t!==0){if(t===2&&(i=Ml(e),i!==0&&(r=i,t=cc(e,i))),t===1)throw n=Wi,Ln(e,0),Qt(e,r),Ae(e,re()),n;if(t===6)Qt(e,r);else{if(i=e.current.alternate,!(r&30)&&!X1(i)&&(t=Do(e,r),t===2&&(s=Ml(e),s!==0&&(r=s,t=cc(e,s))),t===1))throw n=Wi,Ln(e,0),Qt(e,r),Ae(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:_n(e,_e,bt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=_u+500-re(),10<t)){if(go(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Bl(_n.bind(null,e,_e,bt),t);break}_n(e,_e,bt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-rt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Y1(r/1960))-r,10<r){e.timeoutHandle=Bl(_n.bind(null,e,_e,bt),r);break}_n(e,_e,bt);break;case 5:_n(e,_e,bt);break;default:throw Error(N(329))}}}return Ae(e,re()),e.callbackNode===n?$g.bind(null,e):null}function cc(e,t){var n=xi;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=Do(e,t),e!==2&&(t=_e,_e=n,t!==null&&uc(t)),e}function uc(e){_e===null?_e=e:_e.push.apply(_e,e)}function X1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!st(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~Eu,t&=~sa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function Of(e){if(V&6)throw Error(N(327));kr();var t=go(e,0);if(!(t&1))return Ae(e,re()),null;var n=Do(e,t);if(e.tag!==0&&n===2){var r=Ml(e);r!==0&&(t=r,n=cc(e,r))}if(n===1)throw n=Wi,Ln(e,0),Qt(e,t),Ae(e,re()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,_e,bt),Ae(e,re()),null}function Nu(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Dr=re()+500,ta&&wn())}}function Hn(e){nn!==null&&nn.tag===0&&!(V&6)&&kr();var t=V;V|=1;var n=Ke.transition,r=U;try{if(Ke.transition=null,U=1,e)return e()}finally{U=r,Ke.transition=n,V=t,!(V&6)&&wn()}}function Pu(){Me=ur.current,K(ur)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,E1(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(cu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bo();break;case 3:Ar(),K(Ie),K(ve),vu();break;case 5:yu(r);break;case 4:Ar();break;case 13:K(Y);break;case 19:K(Y);break;case 10:hu(r.type._context);break;case 22:case 23:Pu()}n=n.return}if(ce=e,se=e=dn(e.current,null),fe=Me=t,ae=0,Wi=null,Eu=sa=Wn=0,_e=xi=null,An!==null){for(t=0;t<An.length;t++)if(n=An[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}An=null}return e}function Bg(e,t){do{var n=se;try{if(fu(),Ys.current=Io,Po){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Po=!1}if(Bn=0,le=oe=Q=null,yi=!1,zi=0,Cu.current=null,n===null||n.return===null){ae=1,Wi=t,se=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Tf(o);if(p!==null){p.flags&=-257,Cf(p,o,a,s,t),p.mode&1&&Sf(s,d,t),t=p,l=d;var m=t.updateQueue;if(m===null){var g=new Set;g.add(l),t.updateQueue=g}else m.add(l);break e}else{if(!(t&1)){Sf(s,d,t),Iu();break e}l=Error(N(426))}}else if(G&&a.mode&1){var b=Tf(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Cf(b,o,a,s,t),uu(Rr(l,a));break e}}s=l=Rr(l,a),ae!==4&&(ae=2),xi===null?xi=[s]:xi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=Eg(s,l,t);yf(s,y);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(cn===null||!cn.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var k=_g(s,a,t);yf(s,k);break e}}s=s.return}while(s!==null)}Kg(n)}catch(S){t=S,se===n&&n!==null&&(se=n=n.return);continue}break}while(1)}function Wg(){var e=jo.current;return jo.current=Io,e===null?Io:e}function Iu(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(Wn&268435455)&&!(sa&268435455)||Qt(ce,fe)}function Do(e,t){var n=V;V|=2;var r=Wg();(ce!==e||fe!==t)&&(bt=null,Ln(e,t));do try{Q1();break}catch(i){Bg(e,i)}while(1);if(fu(),V=n,jo.current=r,se!==null)throw Error(N(261));return ce=null,fe=0,ae}function Q1(){for(;se!==null;)Hg(se)}function J1(){for(;se!==null&&!Sx();)Hg(se)}function Hg(e){var t=qg(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?Kg(e):se=t,Cu.current=null}function Kg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=H1(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,se=null;return}}else if(n=W1(n,t,Me),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ae===0&&(ae=5)}function _n(e,t,n){var r=U,i=Ke.transition;try{Ke.transition=null,U=1,Z1(e,t,n,r)}finally{Ke.transition=i,U=r}return null}function Z1(e,t,n,r){do kr();while(nn!==null);if(V&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Rx(e,s),e===ce&&(se=ce=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ms||(Ms=!0,Yg(mo,function(){return kr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ke.transition,Ke.transition=null;var o=U;U=1;var a=V;V|=4,Cu.current=null,G1(e,n),Ug(n,e),x1(zl),yo=!!Ul,zl=Ul=null,e.current=n,q1(n),Tx(),V=a,U=o,Ke.transition=s}else e.current=n;if(Ms&&(Ms=!1,nn=e,Ro=i),s=e.pendingLanes,s===0&&(cn=null),_x(n.stateNode),Ae(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ao)throw Ao=!1,e=ac,ac=null,e;return Ro&1&&e.tag!==0&&kr(),s=e.pendingLanes,s&1?e===lc?wi++:(wi=0,lc=e):wi=0,wn(),null}function kr(){if(nn!==null){var e=Em(Ro),t=Ke.transition,n=U;try{if(Ke.transition=null,U=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,Ro=0,V&6)throw Error(N(331));var i=V;for(V|=4,j=e.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var d=a[l];for(j=d;j!==null;){var f=j;switch(f.tag){case 0:case 11:case 15:vi(8,f,s)}var h=f.child;if(h!==null)h.return=f,j=h;else for(;j!==null;){f=j;var u=f.sibling,p=f.return;if(Og(f),f===d){j=null;break}if(u!==null){u.return=p,j=u;break}j=p}}}var m=s.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(g!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vi(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,j=y;break e}j=s.return}}var v=e.current;for(j=v;j!==null;){o=j;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,j=x;else e:for(o=v;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ia(9,a)}}catch(S){te(a,a.return,S)}if(a===o){j=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,j=k;break e}j=a.return}}if(V=i,wn(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Xo,e)}catch{}r=!0}return r}finally{U=n,Ke.transition=t}}return!1}function Ff(e,t,n){t=Rr(n,t),t=Eg(e,t,1),e=ln(e,t,1),t=ke(),e!==null&&(ns(e,1,t),Ae(e,t))}function te(e,t,n){if(e.tag===3)Ff(e,e,n);else for(;t!==null;){if(t.tag===3){Ff(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=Rr(n,e),e=_g(t,e,1),t=ln(t,e,1),e=ke(),t!==null&&(ns(t,1,e),Ae(t,e));break}}t=t.return}}function ew(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(fe&n)===n&&(ae===4||ae===3&&(fe&130023424)===fe&&500>re()-_u?Ln(e,0):Eu|=n),Ae(e,t)}function Gg(e,t){t===0&&(e.mode&1?(t=Cs,Cs<<=1,!(Cs&130023424)&&(Cs=4194304)):t=1);var n=ke();e=Dt(e,t),e!==null&&(ns(e,t,n),Ae(e,n))}function tw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gg(e,n)}function nw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Gg(e,n)}var qg;qg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,B1(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,G&&t.flags&1048576&&Jm(t,To,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qs(e,t),e=t.pendingProps;var i=Pr(t,ve.current);br(t,n),i=wu(null,t,r,e,i,n);var s=bu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(s=!0,ko(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mu(t),i.updater=ra,t.stateNode=i,i._reactInternals=t,Xl(t,r,e,n),t=Zl(null,t,r,!0,s,n)):(t.tag=0,G&&s&&lu(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=iw(r),e=Ze(r,e),i){case 0:t=Jl(null,t,r,e,n);break e;case 1:t=Nf(null,t,r,e,n);break e;case 11:t=Ef(null,t,r,e,n);break e;case 14:t=_f(null,t,r,Ze(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Jl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Nf(e,t,r,i,n);case 3:e:{if(jg(t),e===null)throw Error(N(387));r=t.pendingProps,s=t.memoizedState,i=s.element,ig(e,t),_o(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Rr(Error(N(423)),t),t=Pf(e,t,r,n,i);break e}else if(r!==i){i=Rr(Error(N(424)),t),t=Pf(e,t,r,n,i);break e}else for(Le=an(t.stateNode.containerInfo.firstChild),Oe=t,G=!0,tt=null,n=ng(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ir(),r===i){t=Mt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return sg(t),e===null&&Gl(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,$l(r,i)?o=null:s!==null&&$l(r,s)&&(t.flags|=32),Ig(e,t),we(e,t,o,n),t.child;case 6:return e===null&&Gl(t),null;case 13:return Ag(e,t,n);case 4:return gu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jr(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Ef(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,B(Co,r._currentValue),r._currentValue=o,s!==null)if(st(s.value,o)){if(s.children===i.children&&!Ie.current){t=Mt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=It(-1,n&-n),l.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?l.next=l:(l.next=f.next,f.next=l),d.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ql(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ql(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,br(t,n),i=qe(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=Ze(r,t.pendingProps),i=Ze(r.type,i),_f(e,t,r,i,n);case 15:return Ng(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Qs(e,t),t.tag=1,je(r)?(e=!0,ko(t)):e=!1,br(t,n),Cg(t,r,i),Xl(t,r,i,n),Zl(null,t,r,!0,e,n);case 19:return Rg(e,t,n);case 22:return Pg(e,t,n)}throw Error(N(156,t.tag))};function Yg(e,t){return km(e,t)}function rw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new rw(e,t,n,r)}function ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function iw(e){if(typeof e=="function")return ju(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xc)return 11;if(e===Qc)return 14}return 2}function dn(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function eo(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")ju(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case er:return On(n.children,i,s,t);case Yc:o=8,i|=8;break;case wl:return e=He(12,n,t,i|2),e.elementType=wl,e.lanes=s,e;case bl:return e=He(13,n,t,i),e.elementType=bl,e.lanes=s,e;case kl:return e=He(19,n,t,i),e.elementType=kl,e.lanes=s,e;case sm:return oa(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rm:o=10;break e;case im:o=9;break e;case Xc:o=11;break e;case Qc:o=14;break e;case qt:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=He(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function On(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function oa(e,t,n,r){return e=He(22,e,r,t),e.elementType=sm,e.lanes=n,e.stateNode={isHidden:!1},e}function Wa(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function Ha(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ca(0),this.expirationTimes=Ca(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ca(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Au(e,t,n,r,i,s,o,a,l){return e=new sw(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=He(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mu(s),e}function ow(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xg(e){if(!e)return mn;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(je(n))return Xm(e,n,t)}return t}function Qg(e,t,n,r,i,s,o,a,l){return e=Au(n,r,!0,e,i,s,o,a,l),e.context=Xg(null),n=e.current,r=ke(),i=un(n),s=It(r,i),s.callback=t??null,ln(n,s,i),e.current.lanes=i,ns(e,i,r),Ae(e,r),e}function aa(e,t,n,r){var i=t.current,s=ke(),o=un(i);return n=Xg(n),t.context===null?t.context=n:t.pendingContext=n,t=It(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ln(i,t,o),e!==null&&(it(e,i,o,s),qs(e,i,o)),o}function Mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ru(e,t){Vf(e,t),(e=e.alternate)&&Vf(e,t)}function aw(){return null}var Jg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Du(e){this._internalRoot=e}la.prototype.render=Du.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));aa(e,t,null,null)};la.prototype.unmount=Du.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){aa(null,e,null,null)}),t[Rt]=null}};function la(e){this._internalRoot=e}la.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&jm(e)}};function Mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uf(){}function lw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Mo(o);s.call(d)}}var o=Qg(t,r,e,0,null,!1,!1,"",Uf);return e._reactRootContainer=o,e[Rt]=o.current,Li(e.nodeType===8?e.parentNode:e),Hn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=Mo(l);a.call(d)}}var l=Au(e,0,!1,null,null,!1,!1,"",Uf);return e._reactRootContainer=l,e[Rt]=l.current,Li(e.nodeType===8?e.parentNode:e),Hn(function(){aa(t,l,n,r)}),l}function ua(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Mo(o);a.call(l)}}aa(t,o,e,i)}else o=lw(n,t,e,i,r);return Mo(o)}_m=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ci(t.pendingLanes);n!==0&&(eu(t,n|1),Ae(t,re()),!(V&6)&&(Dr=re()+500,wn()))}break;case 13:Hn(function(){var r=Dt(e,1);if(r!==null){var i=ke();it(r,e,1,i)}}),Ru(e,1)}};tu=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=ke();it(t,e,134217728,n)}Ru(e,134217728)}};Nm=function(e){if(e.tag===13){var t=un(e),n=Dt(e,t);if(n!==null){var r=ke();it(n,e,t,r)}Ru(e,t)}};Pm=function(){return U};Im=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Al=function(e,t,n){switch(t){case"input":if(Cl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ea(r);if(!i)throw Error(N(90));am(r),Cl(r,i)}}}break;case"textarea":cm(e,n);break;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}};gm=Nu;ym=Hn;var cw={usingClientEntryPoint:!1,Events:[is,ir,ea,pm,mm,Nu]},ri={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uw={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wm(e),e===null?null:e.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||aw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{Xo=Ls.inject(uw),ft=Ls}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cw;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mu(t))throw Error(N(200));return ow(e,t,null,n)};Ve.createRoot=function(e,t){if(!Mu(e))throw Error(N(299));var n=!1,r="",i=Jg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Au(e,1,!1,null,null,n,!1,r,i),e[Rt]=t.current,Li(e.nodeType===8?e.parentNode:e),new Du(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=wm(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return Hn(e)};Ve.hydrate=function(e,t,n){if(!ca(t))throw Error(N(200));return ua(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!Mu(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Jg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Qg(t,null,e,1,n??null,i,!1,s,o),e[Rt]=t.current,Li(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new la(t)};Ve.render=function(e,t,n){if(!ca(t))throw Error(N(200));return ua(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!ca(e))throw Error(N(40));return e._reactRootContainer?(Hn(function(){ua(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};Ve.unstable_batchedUpdates=Nu;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ca(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return ua(e,t,n,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426";function Zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zg)}catch(e){console.error(e)}}Zg(),Zp.exports=Ve;var dw=Zp.exports,zf=dw;vl.createRoot=zf.createRoot,vl.hydrateRoot=zf.hydrateRoot;const fw="modulepreload",hw=function(e){return"/"+e},$f={},pw=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=hw(s),s in $f)return;$f[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const h=i[f];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const d=document.createElement("link");if(d.rel=o?"stylesheet":fw,o||(d.as="script",d.crossOrigin=""),d.href=s,document.head.appendChild(d),o)return new Promise((f,h)=>{d.addEventListener("load",f),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var Lu={};Object.defineProperty(Lu,"__esModule",{value:!0});Lu.parse=bw;Lu.serialize=kw;const mw=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,gw=/^[\u0021-\u003A\u003C-\u007E]*$/,yw=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,vw=/^[\u0020-\u003A\u003D-\u007E]*$/,xw=Object.prototype.toString,ww=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function bw(e,t){const n=new ww,r=e.length;if(r<2)return n;const i=(t==null?void 0:t.decode)||Sw;let s=0;do{const o=e.indexOf("=",s);if(o===-1)break;const a=e.indexOf(";",s),l=a===-1?r:a;if(o>l){s=e.lastIndexOf(";",o-1)+1;continue}const d=Bf(e,s,o),f=Wf(e,o,d),h=e.slice(d,f);if(n[h]===void 0){let u=Bf(e,o+1,l),p=Wf(e,l,u);const m=i(e.slice(u,p));n[h]=m}s=l+1}while(s<r);return n}function Bf(e,t,n){do{const r=e.charCodeAt(t);if(r!==32&&r!==9)return t}while(++t<n);return n}function Wf(e,t,n){for(;t>n;){const r=e.charCodeAt(--t);if(r!==32&&r!==9)return t+1}return n}function kw(e,t,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!mw.test(e))throw new TypeError(`argument name is invalid: ${e}`);const i=r(t);if(!gw.test(i))throw new TypeError(`argument val is invalid: ${t}`);let s=e+"="+i;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!yw.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!vw.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!Tw(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function Sw(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function Tw(e){return xw.call(e)==="[object Date]"}var Hf="popstate";function Cw(e={}){function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return dc("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Hi(i)}return _w(t,n,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ew(){return Math.random().toString(36).substring(2,10)}function Kf(e,t){return{usr:e.state,key:e.key,idx:t}}function dc(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Br(t):t,state:n,key:t&&t.key||r||Ew()}}function Hi({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function _w(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",l=null,d=f();d==null&&(d=0,o.replaceState({...o.state,idx:d},""));function f(){return(o.state||{idx:null}).idx}function h(){a="POP";let b=f(),y=b==null?null:b-d;d=b,l&&l({action:a,location:g.location,delta:y})}function u(b,y){a="PUSH";let v=dc(g.location,b,y);n&&n(v,b),d=f()+1;let x=Kf(v,d),k=g.createHref(v);try{o.pushState(x,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(k)}s&&l&&l({action:a,location:g.location,delta:1})}function p(b,y){a="REPLACE";let v=dc(g.location,b,y);n&&n(v,b),d=f();let x=Kf(v,d),k=g.createHref(v);o.replaceState(x,"",k),s&&l&&l({action:a,location:g.location,delta:0})}function m(b){return Nw(b)}let g={get action(){return a},get location(){return e(i,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Hf,h),l=b,()=>{i.removeEventListener(Hf,h),l=null}},createHref(b){return t(i,b)},createURL:m,encodeLocation(b){let y=m(b);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:u,replace:p,go(b){return o.go(b)}};return g}function Nw(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),J(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Hi(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function ey(e,t,n="/"){return Pw(e,t,n,!1)}function Pw(e,t,n,r){let i=typeof t=="string"?Br(t):t,s=Lt(i.pathname||"/",n);if(s==null)return null;let o=ty(e);Iw(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let d=zw(s);a=Vw(o[l],d,r)}return a}function ty(e,t=[],n=[],r=""){let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(J(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let d=jt([r,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(J(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),ty(s.children,t,f,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:Ow(d,s.index),routesMeta:f})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of ny(s.path))i(s,o,l)}),t}function ny(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=ny(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Iw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Fw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var jw=/^:[\w-]+$/,Aw=3,Rw=2,Dw=1,Mw=10,Lw=-2,Gf=e=>e==="*";function Ow(e,t){let n=e.split("/"),r=n.length;return n.some(Gf)&&(r+=Lw),t&&(r+=Rw),n.filter(i=>!Gf(i)).reduce((i,s)=>i+(jw.test(s)?Aw:s===""?Dw:Mw),r)}function Fw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Vw(e,t,n=!1){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],d=a===r.length-1,f=s==="/"?t:t.slice(s.length)||"/",h=Lo({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},f),u=l.route;if(!h&&d&&n&&!r[r.length-1].route.index&&(h=Lo({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:jt([s,h.pathname]),pathnameBase:Hw(jt([s,h.pathnameBase])),route:u}),h.pathnameBase!=="/"&&(s=jt([s,h.pathnameBase]))}return o}function Lo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Uw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,{paramName:f,isOptional:h},u)=>{if(f==="*"){let m=a[u]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}const p=a[u];return h&&!p?d[f]=void 0:d[f]=(p||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:e}}function Uw(e,t=!1,n=!0){xt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function zw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Lt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function $w(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Br(e):e;return{pathname:n?n.startsWith("/")?n:Bw(n,t):t,search:Kw(r),hash:Gw(i)}}function Bw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ka(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ww(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ry(e){let t=Ww(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function iy(e,t,n,r=!1){let i;typeof e=="string"?i=Br(e):(i={...e},J(!i.pathname||!i.pathname.includes("?"),Ka("?","pathname","search",i)),J(!i.pathname||!i.pathname.includes("#"),Ka("#","pathname","hash",i)),J(!i.search||!i.search.includes("#"),Ka("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let u=o.split("/");for(;u[0]==="..";)u.shift(),h-=1;i.pathname=u.join("/")}a=h>=0?t[h]:"/"}let l=$w(i,a),d=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(d||f)&&(l.pathname+="/"),l}var jt=e=>e.join("/").replace(/\/\/+/g,"/"),Hw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var sy=["POST","PUT","PATCH","DELETE"];new Set(sy);var Yw=["GET",...sy];new Set(Yw);var Wr=w.createContext(null);Wr.displayName="DataRouter";var da=w.createContext(null);da.displayName="DataRouterState";var oy=w.createContext({isTransitioning:!1});oy.displayName="ViewTransition";var Xw=w.createContext(new Map);Xw.displayName="Fetchers";var Qw=w.createContext(null);Qw.displayName="Await";var wt=w.createContext(null);wt.displayName="Navigation";var os=w.createContext(null);os.displayName="Location";var Bt=w.createContext({outlet:null,matches:[],isDataRoute:!1});Bt.displayName="Route";var Ou=w.createContext(null);Ou.displayName="RouteError";function Jw(e,{relative:t}={}){J(as(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=w.useContext(wt),{hash:i,pathname:s,search:o}=ls(e,{relative:t}),a=s;return n!=="/"&&(a=s==="/"?n:jt([n,s])),r.createHref({pathname:a,search:o,hash:i})}function as(){return w.useContext(os)!=null}function bn(){return J(as(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(os).location}var ay="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ly(e){w.useContext(wt).static||w.useLayoutEffect(e)}function Zw(){let{isDataRoute:e}=w.useContext(Bt);return e?fb():eb()}function eb(){J(as(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(Wr),{basename:t,navigator:n}=w.useContext(wt),{matches:r}=w.useContext(Bt),{pathname:i}=bn(),s=JSON.stringify(ry(r)),o=w.useRef(!1);return ly(()=>{o.current=!0}),w.useCallback((l,d={})=>{if(xt(o.current,ay),!o.current)return;if(typeof l=="number"){n.go(l);return}let f=iy(l,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:jt([t,f.pathname])),(d.replace?n.replace:n.push)(f,d.state,d)},[t,n,s,i,e])}w.createContext(null);function ls(e,{relative:t}={}){let{matches:n}=w.useContext(Bt),{pathname:r}=bn(),i=JSON.stringify(ry(n));return w.useMemo(()=>iy(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function tb(e,t){return cy(e,t)}function cy(e,t,n,r){var y;J(as(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=w.useContext(wt),{matches:s}=w.useContext(Bt),o=s[s.length-1],a=o?o.params:{},l=o?o.pathname:"/",d=o?o.pathnameBase:"/",f=o&&o.route;{let v=f&&f.path||"";uy(l,!f||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let h=bn(),u;if(t){let v=typeof t=="string"?Br(t):t;J(d==="/"||((y=v.pathname)==null?void 0:y.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${v.pathname}" was given in the \`location\` prop.`),u=v}else u=h;let p=u.pathname||"/",m=p;if(d!=="/"){let v=d.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(v.length).join("/")}let g=ey(e,{pathname:m});xt(f||g!=null,`No routes matched location "${u.pathname}${u.search}${u.hash}" `),xt(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${u.pathname}${u.search}${u.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=ob(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:jt([d,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?d:jt([d,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r);return t&&b?w.createElement(os.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...u},navigationType:"POP"}},b):b}function nb(){let e=db(),t=qw(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:s},"ErrorBoundary")," or"," ",w.createElement("code",{style:s},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,o)}var rb=w.createElement(nb,null),ib=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?w.createElement(Bt.Provider,{value:this.props.routeContext},w.createElement(Ou.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function sb({routeContext:e,match:t,children:n}){let r=w.useContext(Wr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(Bt.Provider,{value:e},n)}function ob(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,s=n==null?void 0:n.errors;if(s!=null){let l=i.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);J(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,l+1))}let o=!1,a=-1;if(n)for(let l=0;l<i.length;l++){let d=i[l];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(a=l),d.route.id){let{loaderData:f,errors:h}=n,u=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!h||h[d.route.id]===void 0);if(d.route.lazy||u){o=!0,a>=0?i=i.slice(0,a+1):i=[i[0]];break}}}return i.reduceRight((l,d,f)=>{let h,u=!1,p=null,m=null;n&&(h=s&&d.route.id?s[d.route.id]:void 0,p=d.route.errorElement||rb,o&&(a<0&&f===0?(uy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,m=null):a===f&&(u=!0,m=d.route.hydrateFallbackElement||null)));let g=t.concat(i.slice(0,f+1)),b=()=>{let y;return h?y=p:u?y=m:d.route.Component?y=w.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=l,w.createElement(sb,{match:d,routeContext:{outlet:l,matches:g,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?w.createElement(ib,{location:n.location,revalidation:n.revalidation,component:p,error:h,children:b(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):b()},null)}function Fu(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ab(e){let t=w.useContext(Wr);return J(t,Fu(e)),t}function lb(e){let t=w.useContext(da);return J(t,Fu(e)),t}function cb(e){let t=w.useContext(Bt);return J(t,Fu(e)),t}function Vu(e){let t=cb(e),n=t.matches[t.matches.length-1];return J(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function ub(){return Vu("useRouteId")}function db(){var r;let e=w.useContext(Ou),t=lb("useRouteError"),n=Vu("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function fb(){let{router:e}=ab("useNavigate"),t=Vu("useNavigate"),n=w.useRef(!1);return ly(()=>{n.current=!0}),w.useCallback(async(i,s={})=>{xt(n.current,ay),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...s}))},[e,t])}var qf={};function uy(e,t,n){!t&&!qf[e]&&(qf[e]=!0,xt(!1,n))}w.memo(hb);function hb({routes:e,future:t,state:n}){return cy(e,void 0,n,t)}function Nn(e){J(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function pb({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){J(!as(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),a=w.useMemo(()=>({basename:o,navigator:i,static:s,future:{}}),[o,i,s]);typeof n=="string"&&(n=Br(n));let{pathname:l="/",search:d="",hash:f="",state:h=null,key:u="default"}=n,p=w.useMemo(()=>{let m=Lt(l,o);return m==null?null:{location:{pathname:m,search:d,hash:f,state:h,key:u},navigationType:r}},[o,l,d,f,h,u,r]);return xt(p!=null,`<Router basename="${o}"> is not able to match the URL "${l}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:w.createElement(wt.Provider,{value:a},w.createElement(os.Provider,{children:t,value:p}))}function mb({children:e,location:t}){return tb(fc(e),t)}function fc(e,t=[]){let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let s=[...t,i];if(r.type===w.Fragment){n.push.apply(n,fc(r.props.children,s));return}J(r.type===Nn,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),J(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=fc(r.props.children,s)),n.push(o)}),n}var to="get",no="application/x-www-form-urlencoded";function fa(e){return e!=null&&typeof e.tagName=="string"}function gb(e){return fa(e)&&e.tagName.toLowerCase()==="button"}function yb(e){return fa(e)&&e.tagName.toLowerCase()==="form"}function vb(e){return fa(e)&&e.tagName.toLowerCase()==="input"}function xb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wb(e,t){return e.button===0&&(!t||t==="_self")&&!xb(e)}var Os=null;function bb(){if(Os===null)try{new FormData(document.createElement("form"),0),Os=!1}catch{Os=!0}return Os}var kb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ga(e){return e!=null&&!kb.has(e)?(xt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${no}"`),null):e}function Sb(e,t){let n,r,i,s,o;if(yb(e)){let a=e.getAttribute("action");r=a?Lt(a,t):null,n=e.getAttribute("method")||to,i=Ga(e.getAttribute("enctype"))||no,s=new FormData(e)}else if(gb(e)||vb(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(r=l?Lt(l,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||to,i=Ga(e.getAttribute("formenctype"))||Ga(a.getAttribute("enctype"))||no,s=new FormData(a,e),!bb()){let{name:d,type:f,value:h}=e;if(f==="image"){let u=d?`${d}.`:"";s.append(`${u}x`,"0"),s.append(`${u}y`,"0")}else d&&s.append(d,h)}}else{if(fa(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=to,r=null,i=no,o=e}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}function Uu(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function Tb(e,t){if(e.id in t)return t[e.id];try{let n=await pw(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Cb(e){return e!=null&&typeof e.page=="string"}function Eb(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function _b(e,t,n){let r=await Promise.all(e.map(async i=>{let s=t.routes[i.route.id];if(s){let o=await Tb(s,n);return o.links?o.links():[]}return[]}));return jb(r.flat(1).filter(Eb).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Yf(e,t,n,r,i,s){let o=(l,d)=>n[d]?l.route.id!==n[d].route.id:!0,a=(l,d)=>{var f;return n[d].pathname!==l.pathname||((f=n[d].route.path)==null?void 0:f.endsWith("*"))&&n[d].params["*"]!==l.params["*"]};return s==="assets"?t.filter((l,d)=>o(l,d)||a(l,d)):s==="data"?t.filter((l,d)=>{var h;let f=r.routes[l.route.id];if(!f||!f.hasLoader)return!1;if(o(l,d)||a(l,d))return!0;if(l.route.shouldRevalidate){let u=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((h=n[0])==null?void 0:h.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof u=="boolean")return u}return!0}):[]}function Nb(e,t,{includeHydrateFallback:n}={}){return Pb(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function Pb(e){return[...new Set(e)]}function Ib(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function jb(e,t){let n=new Set,r=new Set(t);return e.reduce((i,s)=>{if(t&&!Cb(s)&&s.as==="script"&&s.href&&r.has(s.href))return i;let a=JSON.stringify(Ib(s));return n.has(a)||(n.add(a),i.push({key:a,link:s})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ab=new Set([100,101,204,205]);function Rb(e,t){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":t&&Lt(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function dy(){let e=w.useContext(Wr);return Uu(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Db(){let e=w.useContext(da);return Uu(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var zu=w.createContext(void 0);zu.displayName="FrameworkContext";function fy(){let e=w.useContext(zu);return Uu(e,"You must render this element inside a <HydratedRouter> element"),e}function Mb(e,t){let n=w.useContext(zu),[r,i]=w.useState(!1),[s,o]=w.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:d,onMouseLeave:f,onTouchStart:h}=t,u=w.useRef(null);w.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let g=y=>{y.forEach(v=>{o(v.isIntersecting)})},b=new IntersectionObserver(g,{threshold:.5});return u.current&&b.observe(u.current),()=>{b.disconnect()}}},[e]),w.useEffect(()=>{if(r){let g=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(g)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e!=="intent"?[s,u,{}]:[s,u,{onFocus:ii(a,p),onBlur:ii(l,m),onMouseEnter:ii(d,p),onMouseLeave:ii(f,m),onTouchStart:ii(h,p)}]:[!1,u,{}]}function ii(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Lb({page:e,...t}){let{router:n}=dy(),r=w.useMemo(()=>ey(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?w.createElement(Fb,{page:e,matches:r,...t}):null}function Ob(e){let{manifest:t,routeModules:n}=fy(),[r,i]=w.useState([]);return w.useEffect(()=>{let s=!1;return _b(e,t,n).then(o=>{s||i(o)}),()=>{s=!0}},[e,t,n]),r}function Fb({page:e,matches:t,...n}){let r=bn(),{manifest:i,routeModules:s}=fy(),{basename:o}=dy(),{loaderData:a,matches:l}=Db(),d=w.useMemo(()=>Yf(e,t,l,i,r,"data"),[e,t,l,i,r]),f=w.useMemo(()=>Yf(e,t,l,i,r,"assets"),[e,t,l,i,r]),h=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let m=new Set,g=!1;if(t.forEach(y=>{var x;let v=i.routes[y.route.id];!v||!v.hasLoader||(!d.some(k=>k.route.id===y.route.id)&&y.route.id in a&&((x=s[y.route.id])!=null&&x.shouldRevalidate)||v.hasClientLoader?g=!0:m.add(y.route.id))}),m.size===0)return[];let b=Rb(e,o);return g&&m.size>0&&b.searchParams.set("_routes",t.filter(y=>m.has(y.route.id)).map(y=>y.route.id).join(",")),[b.pathname+b.search]},[o,a,r,i,d,t,e,s]),u=w.useMemo(()=>Nb(f,i),[f,i]),p=Ob(f);return w.createElement(w.Fragment,null,h.map(m=>w.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...n})),u.map(m=>w.createElement("link",{key:m,rel:"modulepreload",href:m,...n})),p.map(({key:m,link:g})=>w.createElement("link",{key:m,...g})))}function Vb(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var hy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{hy&&(window.__reactRouterVersion="7.6.3")}catch{}function Ub({basename:e,children:t,window:n}){let r=w.useRef();r.current==null&&(r.current=Cw({window:n,v5Compat:!0}));let i=r.current,[s,o]=w.useState({action:i.action,location:i.location}),a=w.useCallback(l=>{w.startTransition(()=>o(l))},[o]);return w.useLayoutEffect(()=>i.listen(a),[i,a]),w.createElement(pb,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:i})}var py=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$u=w.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:a,target:l,to:d,preventScrollReset:f,viewTransition:h,...u},p){let{basename:m}=w.useContext(wt),g=typeof d=="string"&&py.test(d),b,y=!1;if(typeof d=="string"&&g&&(b=d,hy))try{let R=new URL(window.location.href),A=d.startsWith("//")?new URL(R.protocol+d):new URL(d),$=Lt(A.pathname,m);A.origin===R.origin&&$!=null?d=$+A.search+A.hash:y=!0}catch{xt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=Jw(d,{relative:i}),[x,k,S]=Mb(r,u),C=Wb(d,{replace:o,state:a,target:l,preventScrollReset:f,relative:i,viewTransition:h});function E(R){t&&t(R),R.defaultPrevented||C(R)}let T=w.createElement("a",{...u,...S,href:b||v,onClick:y||s?t:E,ref:Vb(p,k),target:l,"data-discover":!g&&n==="render"?"true":void 0});return x&&!g?w.createElement(w.Fragment,null,T,w.createElement(Lb,{page:v})):T});$u.displayName="Link";var zb=w.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:a,children:l,...d},f){let h=ls(o,{relative:d.relative}),u=bn(),p=w.useContext(da),{navigator:m,basename:g}=w.useContext(wt),b=p!=null&&Yb(h)&&a===!0,y=m.encodeLocation?m.encodeLocation(h).pathname:h.pathname,v=u.pathname,x=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(v=v.toLowerCase(),x=x?x.toLowerCase():null,y=y.toLowerCase()),x&&g&&(x=Lt(x,g)||x);const k=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let S=v===y||!i&&v.startsWith(y)&&v.charAt(k)==="/",C=x!=null&&(x===y||!i&&x.startsWith(y)&&x.charAt(y.length)==="/"),E={isActive:S,isPending:C,isTransitioning:b},T=S?t:void 0,R;typeof r=="function"?R=r(E):R=[r,S?"active":null,C?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let A=typeof s=="function"?s(E):s;return w.createElement($u,{...d,"aria-current":T,className:R,ref:f,style:A,to:o,viewTransition:a},typeof l=="function"?l(E):l)});zb.displayName="NavLink";var $b=w.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:s,method:o=to,action:a,onSubmit:l,relative:d,preventScrollReset:f,viewTransition:h,...u},p)=>{let m=Gb(),g=qb(a,{relative:d}),b=o.toLowerCase()==="get"?"get":"post",y=typeof a=="string"&&py.test(a),v=x=>{if(l&&l(x),x.defaultPrevented)return;x.preventDefault();let k=x.nativeEvent.submitter,S=(k==null?void 0:k.getAttribute("formmethod"))||o;m(k||x.currentTarget,{fetcherKey:t,method:S,navigate:n,replace:i,state:s,relative:d,preventScrollReset:f,viewTransition:h})};return w.createElement("form",{ref:p,method:b,action:g,onSubmit:r?l:v,...u,"data-discover":!y&&e==="render"?"true":void 0})});$b.displayName="Form";function Bb(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function my(e){let t=w.useContext(Wr);return J(t,Bb(e)),t}function Wb(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let a=Zw(),l=bn(),d=ls(e,{relative:s});return w.useCallback(f=>{if(wb(f,t)){f.preventDefault();let h=n!==void 0?n:Hi(l)===Hi(d);a(e,{replace:h,state:r,preventScrollReset:i,relative:s,viewTransition:o})}},[l,a,d,n,r,t,e,i,s,o])}var Hb=0,Kb=()=>`__${String(++Hb)}__`;function Gb(){let{router:e}=my("useSubmit"),{basename:t}=w.useContext(wt),n=ub();return w.useCallback(async(r,i={})=>{let{action:s,method:o,encType:a,formData:l,body:d}=Sb(r,t);if(i.navigate===!1){let f=i.fetcherKey||Kb();await e.fetch(f,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:d,formMethod:i.method||o,formEncType:i.encType||a,flushSync:i.flushSync})}else await e.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:d,formMethod:i.method||o,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function qb(e,{relative:t}={}){let{basename:n}=w.useContext(wt),r=w.useContext(Bt);J(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...ls(e||".",{relative:t})},o=bn();if(e==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(f=>f==="")){a.delete("index"),l.filter(h=>h).forEach(h=>a.append("index",h));let f=a.toString();s.search=f?`?${f}`:""}}return(!e||e===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:jt([n,s.pathname])),Hi(s)}function Yb(e,t={}){let n=w.useContext(oy);J(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=my("useViewTransitionState"),i=ls(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Lt(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Lt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Lo(i.pathname,o)!=null||Lo(i.pathname,s)!=null}[...Ab];/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qb=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),Xf=e=>{const t=Qb(e);return t.charAt(0).toUpperCase()+t.slice(1)},gy=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),Jb=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>w.createElement("svg",{ref:l,...Zb,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:gy("lucide",i),...!s&&!Jb(a)&&{"aria-hidden":"true"},...a},[...o.map(([d,f])=>w.createElement(d,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=(e,t)=>{const n=w.forwardRef(({className:r,...i},s)=>w.createElement(e2,{ref:s,iconNode:t,className:gy(`lucide-${Xb(Xf(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Xf(e),n};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],n2=Xe("calendar",t2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],i2=Xe("camera",r2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],o2=Xe("chart-column",s2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],l2=Xe("chevron-down",a2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],u2=Xe("file-text",c2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],f2=Xe("menu",d2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],p2=Xe("moon",h2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],g2=Xe("music-2",m2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],v2=Xe("power",y2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],w2=Xe("shield",x2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],k2=Xe("sun",b2);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],T2=Xe("timer",S2),C2=()=>{const[e,t]=w.useState(null),n=[{question:"How does LyncX work?",answer:"Simply type '/' on any tab to bring up the command bar. Then type what you want to do - like 'note' for adding notes to a website, 'history' to find past pages, or 'timer' to set focus timers."},{question:"Is my browsing private with LyncX?",answer:"Yes, your browsing history never leaves your browser. Everything stays completely private on your device.",subQuestion:"How does AI analyze the data then?",subAnswer:"The AI simply picks the most appropriate function for what you're trying to do. All analysis and calculations happen locally on your computer - nothing is sent to our servers."},{question:"Can I turn off data features?",answer:"Absolutely! LyncX is completely modular. You can turn data features off in the settings."},{question:"Can I download my data?",answer:"Yes! There's a download feature right in the settings where you can export all your network data in CSV - super handy for your next data science project :)"},{question:"How can I request new features or integrations?",answer:"We'd love to hear your ideas! Send us a message at service@lyncx.ai and we'll consider adding it."},{question:"Is LyncX free?",answer:"Yes, LyncX is completely free for now! We're focused on building something amazing for you first. If we ever introduce paid features, we'll never charge you without clear notice and your explicit consent."}];return c.jsx("section",{className:"pt-8 sm:pt-24 pb-0 bg-[var(--bg)]",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-8",children:[c.jsx("div",{className:"text-center mb-8 sm:mb-16",children:c.jsx("h2",{className:"text-3xl sm:text-5xl font-semibold tracking-tight mb-6 text-[var(--text)]",children:"Frequently asked questions"})}),c.jsx("div",{className:"mb-8 sm:mb-16",children:n.map((r,i)=>c.jsxs("div",{className:"border-b border-[var(--border)] last:border-b-0",children:[c.jsxs("button",{className:"w-full py-4 sm:py-6 text-left flex items-center justify-between hover:opacity-70 transition-opacity",onClick:()=>t(e===i?null:i),children:[c.jsx("h3",{className:"text-lg sm:text-xl font-medium text-[var(--text)] pr-4",children:r.question}),c.jsx(l2,{className:`w-5 h-5 text-[var(--muted-text)] transition-transform duration-300 flex-shrink-0 ${e===i?"rotate-180":""}`})]}),c.jsx("div",{className:`overflow-hidden transition-all duration-300 ease-in-out ${e===i?"max-h-96 opacity-100 pb-4 sm:pb-6":"max-h-0 opacity-0"}`,children:c.jsxs("div",{children:[c.jsx("p",{className:"text-[var(--muted-text)] leading-relaxed mb-1 text-sm font-medium whitespace-pre-line",style:{fontFamily:"system-ui"},children:r.answer}),r.subQuestion&&c.jsxs("div",{className:"mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[var(--border)]",children:[c.jsx("p",{className:"text-sm font-semibold text-[var(--text)] mb-2",children:r.subQuestion}),c.jsx("p",{className:"text-sm text-[var(--muted-text)] leading-relaxed font-medium",style:{fontFamily:"system-ui"},children:r.subAnswer})]})]})})]},i))})]})})},E2=()=>c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden",children:c.jsx("h1",{className:"text-[20rem] font-black text-[var(--border)] select-none leading-none tracking-tighter",style:{fontFamily:"system-ui",opacity:.3},children:"LYNCX"})}),c.jsx("footer",{className:"relative z-10 bg-[var(--bg)]/90 backdrop-blur-sm pt-16 pb-8",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-8 text-center",children:[c.jsxs("div",{className:"mb-16",children:[c.jsx("h2",{className:"text-4xl font-semibold tracking-tight mb-6 text-[var(--text)]",children:"Meet the next chapter of browsing"}),c.jsx("p",{className:"text-xl text-[var(--muted-text)] mb-8 font-medium",children:"Because your workflow shouldn’t live in 10 tabs."}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[c.jsx("button",{className:"px-8 py-4 bg-[var(--accent-color)] text-white rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-95",children:"Install Free"}),c.jsx("button",{className:"px-8 py-4 border-2 border-[var(--accent-color)] text-[var(--accent-color)] rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-[var(--accent-color)] hover:text-white",children:"Watch Demo"})]})]}),c.jsx("div",{className:"border-t border-[var(--border)] pt-12",children:c.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-6",children:[c.jsx("div",{className:"text-2xl font-bold tracking-tight text-[var(--text)]",children:"LyncX"}),c.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[c.jsx("span",{className:"text-[var(--muted-text)] text-sm",children:"service@lyncx.ai"}),c.jsx("span",{className:"text-[var(--muted-text)] text-sm",children:"© 2025 LyncXAI. All rights reserved."})]})]})})]})})]}),_2=()=>{const e=[{id:"1",time:"9:00 AM",title:"Team standup meeting"},{id:"2",time:"10:30 AM",title:"Call with Joseph"},{id:"3",time:"4:00 PM",title:"Finish reviewing John's PR"},{id:"4",time:"7:00 PM",title:"Dinner @tindia"}];return c.jsxs("div",{className:"flow-demo-container",children:[c.jsxs("div",{className:"flow-demo-header",children:[c.jsx("div",{className:"flow-demo-header-left",children:c.jsx("h1",{className:"flow-demo-title",children:"What's next?"})}),c.jsxs("div",{className:"flow-demo-header-right",children:[c.jsx("button",{className:"flow-demo-minimize-btn",children:"−"}),c.jsx("button",{className:"flow-demo-close-btn",children:"×"})]})]}),c.jsxs("div",{className:"flow-demo-main-container",children:[c.jsxs("div",{className:"flow-demo-view-selector",children:[c.jsx("button",{className:"demo-view-btn",children:"Yesterday"}),c.jsx("button",{className:"demo-view-btn active",children:"Today"}),c.jsx("button",{className:"demo-view-btn",children:"Tomorrow"})]}),e.map(t=>c.jsxs("div",{className:"flow-demo-item",children:[c.jsx("div",{className:"demo-event-time",children:t.time}),c.jsx("span",{className:"demo-task-title",children:t.title}),c.jsx("button",{className:"demo-task-delete-btn",children:"×"})]},t.id)),c.jsxs("div",{className:"flow-demo-add",children:[c.jsx("span",{className:"demo-add-icon",children:"+"}),c.jsx("input",{type:"text",placeholder:"Add event for today...",className:"flow-demo-add-input",readOnly:!0}),c.jsx("input",{type:"text",placeholder:"9:00 AM",className:"flow-demo-time-input",readOnly:!0})]})]}),c.jsx("style",{children:`
                .flow-demo-container {
                    width: 100%;
                    max-width: 320px;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                }
                
                @media (max-width: 640px) {
                    .flow-demo-container {
                        max-width: 280px;
                        margin: 0 auto;
                        transform: scale(0.95);
                    }
                }
                
                .flow-demo-header {
                    background: rgba(255, 251, 235, 0.98);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(205, 133, 63, 0.35);
                    border-radius: 12px;
                    padding: 12px 16px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    box-shadow: 0 8px 24px rgba(160, 82, 45, 0.15);
                    margin-bottom: 2px;
                }
                
                .flow-demo-title {
                    margin: 0;
                    font-size: 14px;
                    font-weight: 600;
                    color: rgba(101, 67, 33, 0.95);
                }
                
                .flow-demo-header-right {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                
                .flow-demo-minimize-btn,
                .flow-demo-close-btn {
                    width: 24px;
                    height: 24px;
                    background: rgba(218, 165, 32, 0.12);
                    border: none;
                    border-radius: 6px;
                    color: rgba(160, 82, 45, 0.75);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: bold;
                }
                
                .flow-demo-main-container {
                    background: rgba(255, 251, 235, 0.98);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(205, 133, 63, 0.35);
                    border-radius: 12px;
                    box-shadow: 0 8px 24px rgba(160, 82, 45, 0.15);
                }
                
                .flow-demo-view-selector {
                    display: flex;
                    background: rgba(218, 165, 32, 0.08);
                    border-bottom: 1px solid rgba(205, 133, 63, 0.1);
                    padding: 8px;
                    gap: 4px;
                }
                
                .demo-view-btn {
                    flex: 1;
                    padding: 6px 12px;
                    border: none;
                    border-radius: 6px;
                    background: transparent;
                    color: rgba(160, 82, 45, 0.7);
                    font-size: 12px;
                    font-weight: 600;
                    cursor: pointer;
                }
                
                .demo-view-btn.active {
                    background: rgba(218, 165, 32, 0.25);
                    color: rgba(101, 67, 33, 0.95);
                    box-shadow: 0 2px 4px rgba(160, 82, 45, 0.1);
                }
                
                .flow-demo-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 10px 16px;
                    border-bottom: 1px solid rgba(205, 133, 63, 0.1);
                }
                
                .demo-event-time {
                    font-size: 11px;
                    color: rgba(160, 82, 45, 0.8);
                    font-weight: 600;
                    min-width: 60px;
                    flex-shrink: 0;
                }
                
                .demo-task-title {
                    flex: 1;
                    font-size: 13px;
                    color: rgba(101, 67, 33, 0.95);
                    font-weight: 500;
                    line-height: 1.4;
                }
                
                .demo-task-delete-btn {
                    width: 20px;
                    height: 20px;
                    background: rgba(239, 68, 68, 0.1);
                    border: none;
                    border-radius: 6px;
                    color: rgba(239, 68, 68, 0.7);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    opacity: 0.7;
                }
                
                .flow-demo-add {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 16px;
                    background: rgba(255, 248, 220, 0.6);
                    border-top: 1px solid rgba(205, 133, 63, 0.1);
                }
                
                .demo-add-icon {
                    color: rgba(160, 82, 45, 0.6);
                    font-size: 12px;
                    font-weight: bold;
                }
                
                .flow-demo-add-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    background: none;
                    font-size: 13px;
                    color: rgba(101, 67, 33, 1);
                    font-weight: 500;
                }
                
                .flow-demo-time-input {
                    border: none;
                    outline: none;
                    background: rgba(218, 165, 32, 0.15);
                    color: rgba(101, 67, 33, 0.9);
                    font-size: 10px;
                    font-weight: 600;
                    padding: 4px 6px;
                    border-radius: 6px;
                    width: 60px;
                    text-align: center;
                }
            `})]})},N2=()=>{const e=`Thoughts on this climate tech article:

- Really interesting take on carbon capture being overhyped
- The 2030 timeline feels way too optimistic given current progress
- Author is clearly pro-nuclear but makes solid points about baseload power
- Need to fact-check that Sweden renewable energy stat (claimed 90%?)

Key insight: "technological solutions alone won't solve behavioral problems"

This reminds me of that paper I bookmarked about consumer behavior vs policy changes...

Questions to explore:
- What's the actual cost per ton for direct air capture?
- How does this compare to the Nature study from last month?

Follow up: look into that MIT research they cited`;return c.jsxs("div",{className:"notepad-demo-modal",children:[c.jsxs("div",{className:"notepad-demo-header",children:[c.jsxs("div",{className:"notepad-demo-header-left",children:[c.jsx("div",{className:"demo-drag-handle",children:"≡"}),c.jsx("div",{className:"notepad-demo-icon",children:"📝"}),c.jsx("h1",{className:"notepad-demo-title",children:"Notes"})]}),c.jsxs("div",{className:"notepad-demo-header-right",children:[c.jsx("button",{className:"notepad-demo-minimize-btn",children:"−"}),c.jsx("button",{className:"notepad-demo-close-btn",children:"×"})]})]}),c.jsxs("div",{className:"notepad-demo-domain-header",children:[c.jsxs("div",{className:"demo-domain-selector",children:[c.jsx("h2",{className:"demo-domain-title",children:"The Atlantic"}),c.jsx("div",{className:"demo-domain-count",children:"7 notes"})]}),c.jsx("div",{className:"demo-status-indicator",children:c.jsx("div",{className:"demo-saved-icon",children:"✓"})})]}),c.jsx("div",{className:"notepad-demo-search-section",children:c.jsxs("div",{className:"notepad-demo-search-wrapper",children:[c.jsx("span",{className:"demo-search-icon",children:"🔍"}),c.jsx("input",{type:"text",placeholder:"Search notes...",className:"notepad-demo-search-input",readOnly:!0})]})}),c.jsx("div",{className:"notepad-demo-tabs-section",children:c.jsxs("div",{className:"demo-domain-tabs",children:[c.jsx("button",{className:"demo-domain-tab active",children:"theatlantic"}),c.jsx("button",{className:"demo-domain-tab",children:"instagram"}),c.jsx("button",{className:"demo-domain-tab",children:"canva"})]})}),c.jsx("div",{className:"notepad-demo-editor",children:c.jsx("textarea",{value:e,className:"notepad-demo-textarea",readOnly:!0})}),c.jsxs("div",{className:"notepad-demo-footer",children:[c.jsxs("div",{className:"demo-footer-stats",children:[c.jsx("span",{className:"demo-word-count",children:"125 words"}),c.jsx("span",{className:"demo-char-count",children:"678 characters"})]}),c.jsx("div",{className:"demo-footer-status",children:"Saved"})]}),c.jsx("style",{children:`
                .notepad-demo-modal {
                    width: 100%;
                    max-width: 380px;
                    height: 500px;
                    background: rgba(255, 251, 235, 0.98);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(205, 133, 63, 0.35);
                    border-radius: 14px;
                    overflow: hidden;
                    box-shadow: 0 8px 24px rgba(160, 82, 45, 0.15);
                    display: flex;
                    flex-direction: column;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                }
                
                .notepad-demo-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 16px;
                    border-bottom: 1px solid rgba(205, 133, 63, 0.35);
                }
                
                .notepad-demo-header-left {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .demo-drag-handle {
                    color: rgba(160, 82, 45, 0.6);
                    font-size: 12px;
                }
                
                .notepad-demo-icon {
                    width: 22px;
                    height: 22px;
                    background: rgba(218, 165, 32, 0.15);
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                }
                
                .notepad-demo-title {
                    margin: 0;
                    font-size: 14px;
                    font-weight: 600;
                    color: rgba(101, 67, 33, 0.9);
                }
                
                .notepad-demo-header-right {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                
                .notepad-demo-minimize-btn,
                .notepad-demo-close-btn {
                    width: 26px;
                    height: 26px;
                    background: rgba(218, 165, 32, 0.12);
                    border: none;
                    border-radius: 6px;
                    color: rgba(160, 82, 45, 0.75);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                }
                
                .notepad-demo-domain-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 12px 16px 8px;
                    background: rgba(218, 165, 32, 0.08);
                }
                
                .demo-domain-title {
                    margin: 0;
                    font-size: 16px;
                    font-weight: 700;
                    color: rgba(101, 67, 33, 0.9);
                }
                
                .demo-domain-count {
                    background: rgba(218, 165, 32, 0.15);
                    color: rgba(160, 82, 45, 0.8);
                    font-size: 10px;
                    font-weight: 600;
                    padding: 2px 6px;
                    border-radius: 6px;
                    margin-left: 8px;
                }
                
                .demo-saved-icon {
                    color: rgba(34, 197, 94, 0.8);
                    font-size: 14px;
                }
                
                .notepad-demo-search-section {
                    padding: 10px 16px;
                    background: rgba(218, 165, 32, 0.05);
                    border-bottom: 1px solid rgba(205, 133, 63, 0.1);
                }
                
                .notepad-demo-search-wrapper {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255, 248, 220, 0.8);
                    border: 1px solid rgba(205, 133, 63, 0.2);
                    border-radius: 8px;
                    padding: 8px 10px;
                }
                
                .demo-search-icon {
                    font-size: 12px;
                }
                
                .notepad-demo-search-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    background: none;
                    font-size: 13px;
                    color: rgba(101, 67, 33, 0.9);
                }
                
                .notepad-demo-tabs-section {
                    padding: 8px 16px;
                    background: rgba(218, 165, 32, 0.05);
                    border-bottom: 1px solid rgba(205, 133, 63, 0.1);
                }
                
                .demo-domain-tabs {
                    display: flex;
                    gap: 4px;
                }
                
                .demo-domain-tab {
                    padding: 6px 10px;
                    border: none;
                    background: rgba(255, 248, 220, 0.6);
                    border-radius: 6px;
                    font-size: 11px;
                    font-weight: 500;
                    color: rgba(160, 82, 45, 0.7);
                    cursor: pointer;
                }
                
                .demo-domain-tab.active {
                    background: rgba(218, 165, 32, 0.25);
                    color: rgba(101, 67, 33, 0.95);
                    font-weight: 600;
                    box-shadow: 0 2px 4px rgba(160, 82, 45, 0.1);
                }
                
                .notepad-demo-editor {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                
                .notepad-demo-textarea {
                    flex: 1;
                    background: rgba(255, 251, 235, 0.98);
                    border: none;
                    outline: none;
                    padding: 20px;
                    font-size: 14px;
                    line-height: 1.6;
                    color: rgba(101, 67, 33, 0.9);
                    resize: none;
                    font-family: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
                }
                
                .notepad-demo-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 16px;
                    background: rgba(218, 165, 32, 0.08);
                    border-top: 1px solid rgba(205, 133, 63, 0.1);
                }
                
                .demo-footer-stats {
                    display: flex;
                    gap: 12px;
                    font-size: 10px;
                    color: rgba(160, 82, 45, 0.6);
                    font-weight: 500;
                }
                
                .demo-footer-status {
                    font-size: 10px;
                    color: rgba(160, 82, 45, 0.7);
                    font-weight: 600;
                }
            `})]})},P2=()=>c.jsxs("div",{className:"timebar-demo-container",children:[c.jsx("div",{className:"timebar-demo stage-warning",children:c.jsxs("div",{className:"timebar-demo-content",children:[c.jsx("span",{className:"timebar-demo-icon",children:"⏱"}),c.jsx("span",{className:"timebar-demo-domain",children:"canva.com"}),c.jsx("span",{className:"timebar-demo-time",children:"15:23"}),c.jsx("button",{className:"timebar-demo-close-btn",children:"×"})]})}),c.jsx("style",{children:`
                .timebar-demo-container {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                }
                
                .timebar-demo {
                    backdrop-filter: blur(20px);
                    border-radius: 12px;
                    overflow: visible;
                    min-width: 180px;
                    height: 36px;
                }
                
                .timebar-demo.stage-warning {
                    background: rgba(225, 227, 184, 0.95);
                    border: 1px solid rgba(225, 227, 184, 0.4);
                    box-shadow: 0 8px 16px rgba(225, 227, 184, 0.15);
                }
                
                .timebar-demo-content {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 0 12px;
                    height: 100%;
                }
                
                .timebar-demo-icon {
                    flex-shrink: 0;
                    font-size: 12px;
                }
                
                .timebar-demo-domain {
                    flex: 1;
                    font-size: 11px;
                    font-weight: 600;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: rgba(101, 67, 33, 0.85);
                }
                
                .timebar-demo-time {
                    font-size: 12px;
                    font-weight: 700;
                    flex-shrink: 0;
                    color: rgba(101, 67, 33, 0.95);
                }
                
                .timebar-demo-close-btn {
                    width: 18px;
                    height: 18px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    background: rgba(101, 67, 33, 0.1);
                    color: rgba(101, 67, 33, 0.7);
                    font-size: 10px;
                }
            `})]}),I2=()=>c.jsxs("div",{className:"analytics-demo-container",children:[c.jsxs("div",{className:"analytics-demo-header",children:[c.jsx("div",{className:"analytics-demo-icon",children:"👁"}),c.jsxs("div",{className:"analytics-demo-content",children:[c.jsx("div",{className:"analytics-demo-reading",children:"5min read"}),c.jsx("div",{className:"analytics-demo-progress",children:"75% read"})]}),c.jsxs("div",{className:"analytics-demo-time",children:[c.jsx("div",{className:"analytics-demo-clock",children:"🕒"}),c.jsx("div",{className:"analytics-demo-spent",children:"3:45"})]})]}),c.jsx("style",{children:`
                .analytics-demo-container {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                }
                
                .analytics-demo-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background: rgba(255, 251, 235, 0.98);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(205, 133, 63, 0.35);
                    border-radius: 12px;
                    padding: 10px 14px;
                    box-shadow: 0 4px 12px rgba(160, 82, 45, 0.15);
                    min-width: 200px;
                    max-width: 100%;
                }
                
                .analytics-demo-icon {
                    font-size: 16px;
                    flex-shrink: 0;
                }
                
                .analytics-demo-content {
                    flex: 1;
                    min-width: 0;
                }
                
                .analytics-demo-reading {
                    font-size: 11px;
                    font-weight: 600;
                    color: rgba(101, 67, 33, 0.9);
                    line-height: 1.2;
                }
                
                .analytics-demo-progress {
                    font-size: 10px;
                    color: rgba(160, 82, 45, 0.7);
                    font-weight: 500;
                    margin-top: 1px;
                }
                
                .analytics-demo-time {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    flex-shrink: 0;
                }
                
                .analytics-demo-clock {
                    font-size: 12px;
                }
                
                .analytics-demo-spent {
                    font-size: 11px;
                    font-weight: 600;
                    color: rgba(101, 67, 33, 0.85);
                    font-variant-numeric: tabular-nums;
                }
            `})]}),j2=()=>c.jsxs("div",{className:"limit-demo-modal",children:[c.jsx("button",{className:"limit-demo-close-btn",children:"×"}),c.jsxs("div",{className:"limit-demo-header",children:[c.jsx("div",{className:"limit-demo-header-icon",children:"⏰"}),c.jsx("h1",{className:"limit-demo-modal-title",children:"Daily Focus Time"}),c.jsx("p",{className:"limit-demo-modal-subtitle",children:"Set a limit for youtube.com"})]}),c.jsxs("div",{className:"limit-demo-value-section",children:[c.jsx("div",{className:"limit-demo-value-display",children:c.jsx("span",{className:"limit-demo-value-number",children:"2h"})}),c.jsx("div",{className:"limit-demo-value-description",children:"You'll get a reminder when you reach this limit"})]}),c.jsx("div",{className:"limit-demo-slider-section",children:c.jsxs("div",{className:"limit-demo-slider-container",children:[c.jsx("div",{className:"limit-demo-time-slider"}),c.jsxs("div",{className:"limit-demo-slider-labels",children:[c.jsx("span",{children:"Off"}),c.jsx("span",{children:"6 hours"})]})]})}),c.jsx("div",{className:"limit-demo-action-section",children:c.jsxs("button",{className:"limit-demo-save-button",children:[c.jsx("span",{children:"⚡"}),c.jsx("span",{children:"Set Limit"})]})}),c.jsx("style",{children:`
                .limit-demo-modal {
                    position: relative;
                    width: 100%;
                    max-width: 320px;
                    height: 400px;
                    margin: 0 auto;
                    background: rgba(255, 251, 235, 0.98);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(205, 133, 63, 0.35);
                    border-radius: 16px;
                    padding: 24px;
                    box-shadow: 0 20px 40px rgba(160, 82, 45, 0.15);
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                    display: flex;
                    flex-direction: column;
                }
                
                .limit-demo-close-btn {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    background: rgba(218, 165, 32, 0.12);
                    border: none;
                    border-radius: 8px;
                    width: 32px;
                    height: 32px;
                    cursor: pointer;
                    color: rgba(160, 82, 45, 0.75);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                }
                
                .limit-demo-header {
                    text-align: center;
                    margin-bottom: 32px;
                }
                
                .limit-demo-header-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    background: rgba(218, 165, 32, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 16px;
                    font-size: 20px;
                }
                
                .limit-demo-modal-title {
                    margin: 0 0 8px 0;
                    font-size: 20px;
                    font-weight: 600;
                    color: rgba(101, 67, 33, 0.95);
                    line-height: 1.2;
                }
                
                .limit-demo-modal-subtitle {
                    margin: 0;
                    font-size: 14px;
                    color: rgba(160, 82, 45, 0.7);
                    line-height: 1.4;
                }
                
                .limit-demo-value-section {
                    text-align: center;
                    margin-bottom: 32px;
                }
                
                .limit-demo-value-display {
                    display: inline-flex;
                    align-items: baseline;
                    gap: 6px;
                    background: rgba(218, 165, 32, 0.15);
                    padding: 16px 24px;
                    border-radius: 12px;
                    margin-bottom: 12px;
                    border: 1px solid rgba(205, 133, 63, 0.3);
                }
                
                .limit-demo-value-number {
                    font-size: 28px;
                    font-weight: 700;
                    color: rgba(101, 67, 33, 0.95);
                    line-height: 1;
                }
                
                .limit-demo-value-description {
                    font-size: 12px;
                    color: rgba(160, 82, 45, 0.6);
                    font-style: italic;
                }
                
                .limit-demo-slider-section {
                    margin-bottom: 32px;
                }
                
                .limit-demo-slider-container {
                    padding: 0 8px;
                }
                
                .limit-demo-time-slider {
                    width: 100%;
                    height: 8px;
                    border-radius: 4px;
                    background: linear-gradient(to right, rgba(218, 165, 32, 0.8) 0%, rgba(218, 165, 32, 0.8) 33%, rgba(218, 165, 32, 0.2) 33%, rgba(218, 165, 32, 0.2) 100%);
                    margin-bottom: 12px;
                    position: relative;
                }
                
                .limit-demo-time-slider::after {
                    content: '';
                    position: absolute;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: rgba(218, 165, 32, 0.9);
                    border: 3px solid rgba(255, 251, 235, 0.9);
                    box-shadow: 0 2px 8px rgba(160, 82, 45, 0.2);
                    top: -8px;
                    left: calc(33% - 12px);
                }
                
                .limit-demo-slider-labels {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                    color: rgba(160, 82, 45, 0.6);
                    font-weight: 500;
                }
                
                .limit-demo-action-section {
                    text-align: center;
                }
                
                .limit-demo-save-button {
                    background: linear-gradient(135deg, rgba(218, 165, 32, 0.9), rgba(205, 133, 63, 0.9));
                    border: none;
                    border-radius: 12px;
                    color: rgba(101, 67, 33, 0.95);
                    font-size: 14px;
                    font-weight: 600;
                    padding: 14px 32px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    justify-content: center;
                    margin: 0 auto;
                    box-shadow: 0 4px 12px rgba(160, 82, 45, 0.3);
                }
            `})]}),A2=()=>c.jsxs("div",{className:"youtube-demo-container",children:[c.jsxs("div",{className:"youtube-demo-player",children:[c.jsx("button",{className:"youtube-demo-minimize-btn",children:"−"}),c.jsx("button",{className:"youtube-demo-close-btn",children:"×"}),c.jsx("div",{className:"youtube-demo-header",children:c.jsx("div",{className:"youtube-demo-video-title",children:"YT: Rolling In the Deep"})}),c.jsx("div",{className:"youtube-demo-video",children:c.jsxs("div",{className:"youtube-demo-thumbnail",children:[c.jsx("div",{className:"youtube-demo-play-overlay",children:"▶"}),c.jsx("div",{className:"youtube-demo-duration",children:"3:21"})]})})]}),c.jsx("style",{children:`
                .youtube-demo-container {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                    display: flex;
                    justify-content: center;
                }
                
                .youtube-demo-player {
                    position: relative;
                    background: rgba(255, 251, 235, 0.98);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(205, 133, 63, 0.35);
                    border-radius: 14px;
                    padding: 16px;
                    box-shadow: 0 8px 24px rgba(160, 82, 45, 0.15);
                    width: 100%;
                    max-width: 320px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                
                .youtube-demo-minimize-btn {
                    position: absolute;
                    top: 12px;
                    right: 44px;
                    width: 24px;
                    height: 24px;
                    background: rgba(218, 165, 32, 0.12);
                    border: none;
                    border-radius: 6px;
                    color: rgba(160, 82, 45, 0.75);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: bold;
                    transition: all 0.2s ease;
                }
                
                .youtube-demo-close-btn {
                    position: absolute;
                    top: 12px;
                    right: 16px;
                    width: 24px;
                    height: 24px;
                    background: rgba(218, 165, 32, 0.12);
                    border: none;
                    border-radius: 6px;
                    color: rgba(160, 82, 45, 0.75);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: bold;
                    transition: all 0.2s ease;
                }
                
                .youtube-demo-minimize-btn:hover,
                .youtube-demo-close-btn:hover {
                    background: rgba(218, 165, 32, 0.25);
                    color: rgba(160, 82, 45, 1);
                    transform: scale(1.05);
                }
                
                .youtube-demo-header {
                    display: flex;
                    align-items: center;
                    padding-right: 80px;
                    margin-top: 0px;
                }
                
                .youtube-demo-video-title {
                    font-size: 14px;
                    font-weight: 600;
                    color: rgba(101, 67, 33, 0.95);
                    line-height: 1.2;
                    flex: 1;
                }
                
                .youtube-demo-video {
                    position: relative;
                    width: 100%;
                    height: 162px;
                    border-radius: 8px;
                    overflow: hidden;
                    background: linear-gradient(135deg, rgba(218, 165, 32, 0.3), rgba(205, 133, 63, 0.5));
                }
                
                .youtube-demo-thumbnail {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(218, 165, 32, 0.6), rgba(205, 133, 63, 0.8));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .youtube-demo-play-overlay {
                    color: rgba(255, 251, 235, 0.9);
                    font-size: 32px;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                }
                
                .youtube-demo-duration {
                    position: absolute;
                    bottom: 8px;
                    right: 8px;
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-size: 11px;
                    font-weight: 600;
                    font-variant-numeric: tabular-nums;
                }
            `})]}),R2=()=>{const e=[{id:"1",content:"clip16@rtrel.com",type:"text",timestamp:"",preview:"clip16@rtel.com"},{id:"2",content:"https://arxiv.org/abs/2508.15726",type:"text",timestamp:"",preview:"https://arxiv.org/abs/2508.15726"},{id:"3",content:"rgba(255, 251, 235, 0.98)",type:"text",timestamp:"",preview:"rgba(255, 251, 235, 0.98)"},{id:"4",content:"https://docs.google.com/spreadsheets/d/1abc123",type:"text",timestamp:"",preview:"https://docs.google.com/spreadsheets/d/1abc123"}];return c.jsxs("div",{className:"clipboard-demo-container",children:[c.jsxs("div",{className:"clipboard-demo-modal",children:[c.jsx("button",{className:"clipboard-demo-minimize-btn",children:"−"}),c.jsx("button",{className:"clipboard-demo-close-btn",children:"×"}),c.jsx("div",{className:"clipboard-demo-header",children:c.jsxs("div",{className:"clipboard-demo-header-left",children:[c.jsx("div",{className:"clipboard-demo-icon",children:"📋"}),c.jsx("h1",{className:"clipboard-demo-title",children:"Clipboard"})]})}),c.jsxs("div",{className:"clipboard-demo-search",children:[c.jsx("span",{className:"clipboard-demo-search-icon",children:"🔍"}),c.jsx("input",{type:"text",placeholder:"Search clipboard...",className:"clipboard-demo-search-input",readOnly:!0})]}),c.jsx("div",{className:"clipboard-demo-items",children:e.map(t=>c.jsx("div",{className:"clipboard-demo-item",children:c.jsx("div",{className:"clipboard-demo-preview",children:t.preview})},t.id))}),c.jsxs("div",{className:"clipboard-demo-footer",children:[c.jsx("button",{className:"clipboard-demo-copy-all-btn",children:"Copy All"}),c.jsx("button",{className:"clipboard-demo-clear-btn",children:"Clear All"})]})]}),c.jsx("style",{children:`
                .clipboard-demo-container {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                    display: flex;
                    justify-content: center;
                }
                
                .clipboard-demo-modal {
                    position: relative;
                    width: 100%;
                    max-width: 320px;
                    background: rgba(255, 251, 235, 0.98);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(205, 133, 63, 0.35);
                    border-radius: 14px;
                    overflow: hidden;
                    box-shadow: 0 8px 24px rgba(160, 82, 45, 0.15);
                    display: flex;
                    flex-direction: column;
                }
                
                .clipboard-demo-minimize-btn {
                    position: absolute;
                    top: 16px;
                    right: 48px;
                    width: 24px;
                    height: 24px;
                    background: rgba(218, 165, 32, 0.12);
                    border: none;
                    border-radius: 6px;
                    color: rgba(160, 82, 45, 0.75);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: bold;
                    transition: all 0.2s ease;
                    z-index: 10;
                }
                
                .clipboard-demo-close-btn {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    width: 24px;
                    height: 24px;
                    background: rgba(218, 165, 32, 0.12);
                    border: none;
                    border-radius: 6px;
                    color: rgba(160, 82, 45, 0.75);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: bold;
                    transition: all 0.2s ease;
                    z-index: 10;
                }
                
                .clipboard-demo-minimize-btn:hover,
                .clipboard-demo-close-btn:hover {
                    background: rgba(218, 165, 32, 0.25);
                    color: rgba(160, 82, 45, 1);
                    transform: scale(1.05);
                }
                
                .clipboard-demo-header {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 12px 16px;
                    border-bottom: 1px solid rgba(205, 133, 63, 0.2);
                }
                
                .clipboard-demo-header-left {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .clipboard-demo-icon {
                    width: 24px;
                    height: 24px;
                    background: rgba(218, 165, 32, 0.15);
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                }
                
                .clipboard-demo-title {
                    margin: 0;
                    font-size: 16px;
                    font-weight: 600;
                    color: rgba(101, 67, 33, 0.95);
                }
                
                .clipboard-demo-count {
                    background: rgba(218, 165, 32, 0.15);
                    color: rgba(160, 82, 45, 0.8);
                    font-size: 11px;
                    font-weight: 600;
                    padding: 4px 8px;
                    border-radius: 8px;
                }
                
                .clipboard-demo-search {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: rgba(218, 165, 32, 0.05);
                    border-bottom: 1px solid rgba(205, 133, 63, 0.1);
                }
                
                .clipboard-demo-search-icon {
                    font-size: 12px;
                    opacity: 0.6;
                }
                
                .clipboard-demo-search-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    background: none;
                    font-size: 13px;
                    color: rgba(101, 67, 33, 0.9);
                    placeholder: rgba(160, 82, 45, 0.5);
                }
                
                .clipboard-demo-items {
                    flex: 1;
                    max-height: 160px;
                    overflow-y: auto;
                }
                
                .clipboard-demo-item {
                    padding: 2px 16px;
                    border-bottom: 1px solid rgba(205, 133, 63, 0.1);
                }
                
                .clipboard-demo-item:hover {
                    background: rgba(218, 165, 32, 0.05);
                }
                
                .clipboard-demo-preview {
                    font-size: 11px;
                    color: rgba(101, 67, 33, 0.8);
                    line-height: 1.2;
                    font-family: "SF Mono", Monaco, "Cascadia Code", monospace;
                    background: rgba(218, 165, 32, 0.08);
                    padding: 4px 6px;
                    border-radius: 6px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                
                .clipboard-demo-preview:hover {
                    background: rgba(218, 165, 32, 0.12);
                }
                
                .clipboard-demo-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 8px 16px;
                    background: rgba(218, 165, 32, 0.08);
                    border-top: 1px solid rgba(205, 133, 63, 0.1);
                    gap: 8px;
                }
                
                .clipboard-demo-copy-all-btn {
                    font-size: 11px;
                    font-weight: 600;
                    padding: 4px 8px;
                    border: none;
                    background: rgba(218, 165, 32, 0.15);
                    color: rgba(160, 82, 45, 0.8);
                    border-radius: 5px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                
                .clipboard-demo-copy-all-btn:hover {
                    background: rgba(218, 165, 32, 0.25);
                    transform: scale(1.05);
                }
                
                .clipboard-demo-clear-btn {
                    font-size: 11px;
                    font-weight: 600;
                    padding: 4px 8px;
                    border: none;
                    background: rgba(239, 68, 68, 0.1);
                    color: rgba(239, 68, 68, 0.8);
                    border-radius: 5px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                
                .clipboard-demo-clear-btn:hover {
                    background: rgba(239, 68, 68, 0.2);
                    transform: scale(1.05);
                }
            `})]})},D2=()=>c.jsxs("div",{className:"hover-navbar-demo",children:[c.jsx("div",{className:"hover-navbar-demo-container",children:c.jsxs("div",{className:"hover-navbar-demo-content",children:[c.jsxs("div",{className:"hover-navbar-demo-section",children:[c.jsx("div",{className:"hover-navbar-demo-item",children:c.jsx(i2,{size:18,strokeWidth:2,className:"demo-nav-icon"})}),c.jsx("div",{className:"hover-navbar-demo-item",children:c.jsx(o2,{size:18,strokeWidth:2,className:"demo-nav-icon"})})]}),c.jsx("div",{className:"hover-navbar-demo-separator"}),c.jsxs("div",{className:"hover-navbar-demo-section",children:[c.jsx("div",{className:"hover-navbar-demo-item",children:c.jsx(n2,{size:18,strokeWidth:2,className:"demo-nav-icon"})}),c.jsx("div",{className:"hover-navbar-demo-item",children:c.jsx("div",{className:"demo-linkx-logo",children:"/x"})}),c.jsx("div",{className:"hover-navbar-demo-item",children:c.jsx(u2,{size:18,strokeWidth:2,className:"demo-nav-icon"})})]}),c.jsx("div",{className:"hover-navbar-demo-separator"}),c.jsxs("div",{className:"hover-navbar-demo-section",children:[c.jsx("div",{className:"hover-navbar-demo-item",children:c.jsx(T2,{size:18,strokeWidth:2,className:"demo-nav-icon"})}),c.jsx("div",{className:"hover-navbar-demo-item",children:c.jsx(w2,{size:18,strokeWidth:2,className:"demo-nav-icon"})})]})]})}),c.jsx("style",{children:`
                .hover-navbar-demo {
                    height: 400px;
                    display: flex;
                    align-items: center;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
                }
                
                
                
                .hover-navbar-demo-container {
                    width: 52px;
                    height: auto;
                    max-height: 350px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(198, 131, 70, 0.2);
                    border-radius: 0 12px 12px 0;
                    box-shadow: 
                        2px 0 12px rgba(0, 0, 0, 0.15),
                        0 0 20px rgba(198, 131, 70, 0.3),
                        inset 0 0 0 1px rgba(255, 255, 255, 0.8);
                    display: flex;
                    flex-direction: column;
                    padding: 16px 0;
                    align-items: center;
                    gap: 8px;
                    position: relative;
                    transition: all 0.3s ease;
                }
                
                @media (max-width: 768px) {
                    .hover-navbar-demo-container {
                        width: 44px;
                        max-height: 300px;
                        padding: 12px 0;
                        gap: 6px;
                    }
                    
                    .hover-navbar-demo-item {
                        width: 32px !important;
                        height: 32px !important;
                    }
                    
                    .demo-nav-icon {
                        font-size: 14px !important;
                    }
                    
                }
                
                
                .hover-navbar-demo-content {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    width: 100%;
                    align-items: center;
                }
                
                .hover-navbar-demo-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                }
                
                .hover-navbar-demo-item {
                    width: 36px;
                    height: 36px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    background: transparent;
                    transition: background 0.2s ease;
                }
                
                .hover-navbar-demo-item:hover {
                    background: rgba(0, 0, 0, 0.1);
                }
                
                .demo-nav-icon {
                    opacity: 0.8;
                    color: #374151;
                }
                
                .demo-linkx-logo {
                    width: 27px;                    /* size * 1.5 = 18 * 1.5 */
                    height: 27px;                   /* size * 1.5 = 18 * 1.5 */
                    background-color: #c68346;     /* Primary button color */
                    border-radius: 5.4px;          /* size * 0.3 = 18 * 0.3 */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 15.3px;             /* size * 0.85 = 18 * 0.85 */
                    letter-spacing: 1.1px;
                    font-weight: bold;
                    color: #FFFFFF;
                    line-height: 1;
                    font-family: Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
                }
                
                .hover-navbar-demo-separator {
                    width: 20px;
                    height: 1px;
                    background: rgba(0, 0, 0, 0.2);
                    align-self: center;
                }
            `})]}),M2=()=>{const[e,t]=Cn.useState(!1),[n,r]=Cn.useState(new Set),[i,s]=Cn.useState(!1),o=Cn.useRef(null),a=Cn.useRef(null);return Cn.useEffect(()=>{const l=window.innerWidth<768,d=new IntersectionObserver(([f])=>{console.log("ModularDemo intersection:",f.isIntersecting,"mobile:",l),t(f.isIntersecting),f.isIntersecting?(s(!0),l&&setTimeout(()=>{console.log("Hiding navbar on mobile after 1 second"),s(!1)},1e3),["flow","notes","youtube","timebar","analytics","limit","clipboard"].forEach((u,p)=>{setTimeout(()=>{r(m=>{const g=new Set([...m,u]);return console.log("Adding component:",u,"total visible:",g.size),g})},p*(l?100:200))})):(r(new Set),s(!1))},{threshold:l?.1:.3,rootMargin:l?"0px 0px -50px 0px":"0px 0px -100px 0px"});return o.current&&d.observe(o.current),()=>d.disconnect()},[]),c.jsxs("section",{ref:o,className:"min-h-screen flex items-center justify-center relative bg-[var(--bg)] py-8 sm:py-16",children:[c.jsx("div",{ref:a,className:`fixed left-0 top-1/2 transform -translate-y-1/2 z-10 transition-all duration-700 ease-out ${e&&i?"translate-x-0 opacity-100":"-translate-x-full opacity-0"}`,children:c.jsx(D2,{})}),c.jsxs("div",{className:"w-full max-w-7xl mx-auto px-4 sm:px-8",children:[c.jsxs("div",{className:"text-center mb-12 sm:mb-16",children:[c.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 text-[var(--text)]",children:["Not a fan of"," ",c.jsx("span",{className:"font-semibold text-[var(--accent-color)]",children:"typing?"})]}),c.jsxs("p",{className:"text-lg sm:text-xl text-[var(--muted-text)] max-w-3xl mx-auto leading-relaxed px-4",children:["Use the"," ",c.jsx("span",{className:"font-semibold text-[var(--accent-color)]",children:"sidebar"})," ","to open tools on any website."]})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start",children:[c.jsxs("div",{className:"space-y-6 lg:col-span-1",children:[c.jsx("div",{className:"text-center",children:c.jsx("h3",{className:"text-lg font-semibold text-[var(--text)] mb-4",children:"Calendar & Notes"})}),c.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[c.jsx("div",{className:`w-full max-w-sm transition-opacity duration-700 ${n.has("flow")?"opacity-100":"opacity-0"}`,children:c.jsx(_2,{})}),c.jsx("div",{className:`w-full max-w-sm transition-opacity duration-700 ${n.has("notes")?"opacity-100":"opacity-0"}`,children:c.jsx(N2,{})})]})]}),c.jsxs("div",{className:"space-y-6 lg:col-span-1",children:[c.jsx("div",{className:"text-center",children:c.jsx("h3",{className:"text-lg font-semibold text-[var(--text)] mb-4",children:"Quick Access"})}),c.jsxs("div",{className:"flex flex-col items-center space-y-6 sm:space-y-8",children:[c.jsx("div",{className:`w-full max-w-sm transition-opacity duration-700 ${n.has("youtube")?"opacity-100":"opacity-0"}`,children:c.jsx(A2,{})}),c.jsx("div",{className:"space-y-6 w-full max-w-sm",children:c.jsxs("div",{children:[c.jsx("div",{className:"text-center",children:c.jsx("h4",{className:"text-base font-semibold text-[var(--text)] mb-4",children:"Timers and Page Analytics"})}),c.jsxs("div",{className:`transition-opacity duration-700 space-y-2 ${n.has("timebar")?"opacity-100":"opacity-0"}`,children:[c.jsx(P2,{}),c.jsx(I2,{})]})]})}),c.jsx("div",{className:"w-full max-w-sm mx-auto mt-6 sm:mt-8",children:c.jsxs("div",{className:"text-center py-6 sm:py-8 px-4 sm:px-6 bg-gradient-to-br from-[var(--bg)] to-[rgba(255,251,235,0.5)] rounded-2xl border border-[rgba(205,133,63,0.2)]",children:[c.jsx("h4",{className:"text-lg sm:text-xl font-semibold text-[var(--text)] mb-3 leading-tight",children:"Works on every website"}),c.jsxs("p",{className:"text-sm text-[var(--muted-text)] leading-relaxed",children:["•",c.jsxs("span",{className:"font-medium text-[var(--accent-color)]",children:[" ","Draggable"]})," ","•",c.jsxs("span",{className:"font-medium text-[var(--accent-color)]",children:[" ","Lightweight"]})," ","•",c.jsxs("span",{className:"font-medium text-[var(--accent-color)]",children:[" ","Unobtrusive"]})]})]})})]})]}),c.jsxs("div",{className:"space-y-6 lg:col-span-1",children:[c.jsx("div",{className:"text-center",children:c.jsx("h3",{className:"text-lg font-semibold text-[var(--text)] mb-4",children:"Focus Tools"})}),c.jsxs("div",{className:"flex flex-col items-center space-y-10 sm:space-y-14",children:[c.jsx("div",{className:`w-full max-w-sm transition-opacity duration-700 ${n.has("limit")?"opacity-100":"opacity-0"}`,children:c.jsx(j2,{})}),c.jsx("div",{className:`w-full max-w-sm transition-opacity duration-700 ${n.has("clipboard")?"opacity-100":"opacity-0"}`,children:c.jsx(R2,{})})]})]})]}),c.jsx("div",{className:"text-center mt-16",children:c.jsxs("p",{className:"text-lg text-[var(--muted-text)]",children:["Don't want any overhead? You can"," ",c.jsx("span",{className:"font-medium text-[var(--accent-color)]",children:"disable all visual components and use the command bar."})]})})]})]})},Qf=["todo call Ciro @3pm","slack #front-end check out this implementation!","yt hello by adele","gmail sara@gmail.com quick coffee tomorrow?","chat is this relevant to the new feature?","remember quarterly metrics data for meeting","translate can we check in at 11am? to spanish"],Jf=["rgba(255, 165, 0, 0.5)","rgba(112, 66, 192, 0.7)","rgba(255, 61, 0, 0.6)","rgba(66, 133, 244, 0.5)","rgba(0, 172, 193,0.6)","rgba(255, 193, 7, 0.6)","rgba(66, 165, 245, 0.8)"],L2=({commandBarRef:e,className:t="",style:n={},onCommandChange:r,scrollProgress:i=0,browserRef:s})=>{const[o,a]=w.useState(0),[l,d]=w.useState(!1),[f,h]=w.useState(!1);w.useEffect(()=>{const E=()=>{h(window.innerWidth<768)};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]),w.useEffect(()=>{const E=setInterval(()=>{d(!0),setTimeout(()=>{const T=(o+1)%Qf.length;a(T),d(!1),r==null||r(T)},100)},1400);return()=>clearInterval(E)},[o,r]),w.useEffect(()=>{r==null||r(o)},[]);const[u,p]=w.useState(0),[m,g]=w.useState(0);w.useEffect(()=>{if(!e.current||!(s!=null&&s.current))return;setTimeout(()=>{if(f){p(200),g(0);return}const T=window.scrollY;window.scrollTo(0,0);const R=e.current.getBoundingClientRect(),A=s.current.getBoundingClientRect(),$=A.bottom-130,xe=R.top,Re=$-xe,ot=A.left+A.width/2,De=R.left+R.width/2,Wt=ot-De,W=window.innerWidth-R.width-50,I=Math.max(-R.left+50,Math.min(Wt,W-R.left));window.scrollTo(0,T),p(Re),g(I)},100)},[f]);const b=Math.min(i,1),y=`translate(${b*m}px, ${b*u}px)`,v=Math.max(0,1-i*1.5),x=12+i*24,k=i,[S,C]=w.useState(!1);return w.useEffect(()=>{i>=1&&!S?setTimeout(()=>C(!0),200):i<1&&S&&C(!1)},[i,S]),c.jsx("div",{ref:e,className:`rounded-2xl p-4 sm:p-6 mt-12 sm:mt-20 w-[95vw] max-w-[400px] sm:max-w-[500px] lg:max-w-[30vw] relative z-50 ${t}`,style:{transform:y,transition:i===0?"transform 0.1s ease-out":"none",backgroundColor:`rgba(255, 255, 255, ${.8*v})`,backdropFilter:v>0?"blur(8px)":"none",border:v>0?"1px solid var(--border)":"none",boxShadow:v>0?"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)":"none",...n},children:c.jsxs("div",{className:"flex items-center gap-0 px-3 sm:px-4 py-3 sm:py-4 border border-[var(--border)]",style:{borderRadius:`${x}px`,transform:S?"scale(0)":"scale(1)",transition:"transform 0.2s ease-in-out",background:i===0?"var(--bg)":`linear-gradient(rgba(255, 255, 255, ${k}), rgba(255, 255, 255, ${k})), var(--bg)`},children:[c.jsx("span",{className:"text-[var(--muted-text)] text-base sm:text-lg font-bold",children:"/"}),c.jsx("span",{className:`text-[var(--muted-text)] font-mono text-sm sm:text-lg transition-opacity duration-300 flex-1 overflow-hidden whitespace-nowrap ${l?"opacity-50":"opacity-100"}`,style:{textOverflow:"ellipsis"},children:Qf[o]}),c.jsx("div",{className:"ml-auto w-2 h-4 bg-[var(--accent-color)] rounded-sm animate-pulse flex-shrink-0"})]})})},O2="/assets/visualization.png",F2="/assets/videos/email.mp4",V2="/assets/videos/leetcode.mp4",U2="/assets/videos/reddit.mp4",z2="/assets/videos/session.mp4",$2="/assets/videos/help.mp4",B2="/assets/videos/yt.mp4",W2=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1);return w.useEffect(()=>{const i=()=>{t(window.scrollY>100)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),c.jsxs("header",{className:`fixed top-0 left-0 right-0 bg-[var(--bg)]/95 backdrop-blur-sm z-50 border-b border-[var(--border)] transition-all duration-300 ${e?"shadow-sm":""}`,children:[c.jsxs("nav",{className:"max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6",children:[c.jsx("div",{className:"text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)]",children:"LyncX"}),c.jsxs("div",{className:"hidden md:flex gap-10 items-center",children:[c.jsx("a",{href:"/privacy",className:"text-sm font-medium text-[var(--muted-text)] hover:text-[var(--text)] transition-colors duration-200",children:"Privacy"}),c.jsx("button",{className:"text-sm font-semibold bg-[var(--accent-color)] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200 hover:shadow-md",children:"Get Started"})]}),c.jsx("button",{onClick:()=>r(!n),className:"md:hidden p-2 rounded-lg text-[var(--text)] hover:bg-[var(--border)] transition-colors duration-200","aria-label":"Toggle mobile menu",children:c.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n?c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]}),n&&c.jsx("div",{className:"md:hidden border-t border-[var(--border)] bg-[var(--bg)]/98 backdrop-blur-sm",children:c.jsx("div",{className:"px-4 py-6 space-y-4",children:c.jsx("a",{href:"/privacy",className:"block text-base font-medium text-[var(--muted-text)] hover:text-[var(--text)] transition-colors duration-200 py-2",onClick:()=>r(!1),children:"Privacy"})})})]})},H2=({commandBarRef:e,onCommandChange:t,scrollProgress:n,browserRef:r})=>{const[i,s]=w.useState(0),[o,a]=w.useState({r:225,g:226,b:168,a:1}),[l,d]=w.useState(!1);w.useEffect(()=>{const m=()=>{d(window.innerWidth<768)};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]);const f=m=>{s(m),t(m)},[h]=w.useState({enabled:!0,leftPosition:0,topPosition:46,height:1e3,width:80,translateY:-450,perspective:1500,scaleX:1.2,rotateY:45,colorCenter:{r:225,g:226,b:168},opacity:.7,gradient1:5,gradient2:30,gradient3:60}),p=(()=>{const g=(Jf[i]||Jf[0]).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);return g?{r:Number(g[1]),g:Number(g[2]),b:Number(g[3]),a:g[4]?Number(g[4]):1}:{r:225,g:226,b:168,a:1}})();return w.useEffect(()=>{const g=Date.now(),b=o,y=()=>{const v=Date.now()-g,x=Math.min(v/800,1),k=1-Math.pow(1-x,3);a({r:Math.round(b.r+(p.r-b.r)*k),g:Math.round(b.g+(p.g-b.g)*k),b:Math.round(b.b+(p.b-b.b)*k),a:b.a+(p.a-b.a)*k}),x<1&&requestAnimationFrame(y)};y()},[i]),c.jsxs("section",{className:"min-h-screen flex items-center pt-20 relative",children:[h.enabled&&!l&&c.jsx("div",{className:"absolute z-10 pointer-events-none",style:{left:`${h.leftPosition}%`,top:`${h.topPosition}%`,height:`${h.height}px`,width:`${h.width}%`,transformOrigin:"right center",transform:`translateY(${h.translateY}px) perspective(${h.perspective}px) scaleX(${h.scaleX}) rotateY(${h.rotateY}deg)`,background:`radial-gradient(ellipse at 95% center, rgba(${o.r}, ${o.g}, ${o.b}, ${o.a*h.opacity*(1-n*2)}) ${h.gradient1}%, rgba(${o.r}, ${o.g}, ${o.b}, ${o.a*h.opacity*.5*(1-n*2)}) ${h.gradient2}%, rgba(${o.r}, ${o.g}, ${o.b}, ${o.a*h.opacity*.125*(1-n*2)}) ${h.gradient3}%, transparent)`,clipPath:"polygon(95% 48%, 0% 0%, 0% 100%, 95% 52%)"}}),h.enabled&&l&&c.jsx("div",{className:"absolute inset-0 z-10 pointer-events-none",style:{background:`linear-gradient(to top, rgba(${o.r}, ${o.g}, ${o.b}, ${o.a*.3*(1-n*2)}) 0%, rgba(${o.r}, ${o.g}, ${o.b}, ${o.a*.15*(1-n*2)}) 30%, transparent 60%)`}}),c.jsx("div",{className:"w-full max-w-6xl mx-auto px-8 relative z-30",children:c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start",children:[c.jsxs("div",{children:[c.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight text-[var(--text)] tracking-tight",children:["A command bar for"," ",c.jsx("span",{className:"font-semibold text-[var(--accent-color)]",children:"everything"})]}),c.jsx("p",{className:"text-lg sm:text-xl mb-8 sm:mb-12 leading-relaxed text-[var(--muted-text)] font-medium",children:"LyncX lets you type what you want to do, without having to open another tab"}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[c.jsx("button",{className:"px-6 sm:px-8 py-3 sm:py-4 bg-[var(--accent-color)] text-white rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-95 min-h-[44px]",children:"Install Free"}),c.jsx("button",{className:"px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--accent-color)] text-[var(--accent-color)] rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-[var(--accent-color)] hover:text-white min-h-[44px]",children:"Watch Demo"})]})]}),c.jsx("div",{className:"flex justify-center items-start self-start w-full",children:c.jsx(L2,{commandBarRef:e,onCommandChange:f,scrollProgress:n,browserRef:r})})]})})]})},K2=({lyncxRef:e,helpSectionRef:t})=>{const[n,r]=w.useState(!1);w.useEffect(()=>{const s=()=>{if(t.current){const o=t.current.getBoundingClientRect(),a=window.innerHeight;o.top<a*.5&&o.bottom>0?r(!0):r(!1)}};return window.addEventListener("scroll",s,{passive:!0}),s(),()=>window.removeEventListener("scroll",s)},[t]);const i=["/gmail","/slack","/todo","/translate","/timer","/block","/limit","/remember","/recall","/ss","/yt","/chat","/lyncx","/visualize","/cal","/new","/group","/arrange","/history","/next","/view","/close","/switch","/sessions","/clip"];return c.jsx("section",{ref:t,className:"flex items-center justify-center pt-12 sm:pt-24 pb-12 sm:pb-44",children:c.jsxs("div",{className:"w-full max-w-6xl mx-auto px-8",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsxs("h2",{className:"text-4xl md:text-5xl font-light mb-6 text-[var(--text)]",children:["Available"," ",c.jsx("span",{className:"font-semibold text-[var(--accent-color)]",children:"Commands"})]}),c.jsxs("p",{className:"text-xl text-[var(--muted-text)] max-w-2xl mx-auto leading-relaxed",children:["Press"," ",c.jsxs("span",{className:"relative inline-block",children:[c.jsx("span",{className:"text-[var(--text)] font-mono font-semibold",children:"Cmd+Cmd"}),c.jsx("span",{className:"absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-color)]/40 rounded-full"})]})," ","to open command bar"]})]}),c.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 relative",children:i.map((s,o)=>{const a=()=>o===12?{background:"linear-gradient(135deg, #16162a 0%, #0f0f1f 50%, #16162a 100%)",borderColor:"#16162a",boxShadow:"0 0 20px rgba(22, 22, 42, 0.5), 0 0 40px rgba(22, 22, 42, 0.3), 0 0 60px rgba(22, 22, 42, 0.2)",animation:"glow 2s ease-in-out infinite alternate",transformOrigin:"center center",willChange:"box-shadow"}:n?{transform:"translate(0px, 0px) scale(1)",opacity:1,transition:`all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${o*50}ms`,zIndex:5}:{transform:"translate(0px, 0px) scale(0.1)",opacity:0,zIndex:1,transition:`all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${(i.length-1-o)*30}ms`};return c.jsx("div",{ref:o===12?e:void 0,className:`${o===12?"z-10 p-5":"bg-white/80 shadow-sm hover:shadow-md border-[var(--border)] p-4"} backdrop-blur-sm border rounded-xl text-center`,style:a(),children:c.jsx("span",{className:`text-sm font-mono ${o===12?"text-white font-semibold":"text-[var(--muted-text)]"}`,children:s})},o)})}),c.jsx("div",{className:"text-center mt-8",children:c.jsx("span",{className:"text-sm text-[var(--muted-text)] opacity-90",children:"+more"})})]})})},G2=()=>c.jsx("section",{className:"py-8 flex items-center justify-center relative z-10",children:c.jsx("div",{className:"w-full max-w-6xl mx-auto px-8 text-center",children:c.jsxs("p",{className:"text-2xl md:text-3xl font-light leading-relaxed text-[var(--text)]",children:["All your essentials in one single bar, so you",c.jsx("br",{})," ",c.jsx("span",{className:"text-[var(--accent-color)] font-medium",children:"move faster"}),","," ",c.jsx("span",{className:"text-[var(--accent-color)] font-medium",children:"stay focused"}),", and"," ",c.jsx("span",{className:"text-[var(--accent-color)] font-medium",children:"stay on top of what matters"}),"."]})})}),q2=({browserRef:e,scrollProgress:t})=>{const[n,r]=w.useState("reddit"),i=w.useRef({}),s={reddit:U2,leetcode:V2,email:F2,session:z2,help:$2,yt:B2};return w.useEffect(()=>{const o=i.current[n];o&&(t>=1?(o.play().catch(console.error),Object.entries(i.current).forEach(([a,l])=>{a!==n&&l&&l.pause()})):Object.values(i.current).forEach(a=>{a&&a.pause()}))},[t,n]),c.jsx("section",{className:"py-8 flex flex-col items-center justify-center relative z-10",children:c.jsxs("div",{className:"w-full max-w-6xl mx-auto px-8",children:[c.jsx("div",{ref:e,className:"relative bg-white/40 backdrop-blur-sm rounded-xl sm:rounded-3xl border-2 border-[var(--border)] shadow-xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[600px] w-full",children:c.jsx("div",{className:"absolute inset-0 bg-gray-900 rounded-xl sm:rounded-3xl overflow-hidden",children:Object.entries(s).map(([o,a])=>c.jsx("video",{ref:l=>i.current[o]=l,className:`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${n===o?"opacity-100":"opacity-0"}`,muted:!0,loop:!0,playsInline:!0,preload:"auto",src:a},o))})}),c.jsxs("div",{className:"flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-6 px-4",children:[c.jsx("div",{className:"flex gap-2",children:["reddit","leetcode"].map(o=>c.jsx("button",{onClick:()=>r(o),className:`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-medium transition-all duration-200 cursor-pointer ${n===o?"bg-[var(--accent-color)] text-white border border-[var(--accent-color)]":"border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white"}`,children:o},o))}),c.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:["yt","session","email","help"].map(o=>c.jsxs("button",{onClick:()=>r(o),className:`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-medium transition-all duration-200 cursor-pointer ${n===o?"bg-[var(--accent-color)] text-white border border-[var(--accent-color)]":"border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white"}`,children:["/",o]},o))})]})]})})},Zf=({color:e})=>c.jsx("svg",{className:"card__bg",width:"648px",height:"648px",viewBox:"0 0 648 648",style:{color:e},children:c.jsx("g",{fill:"none",stroke:"currentColor",strokeWidth:"12",opacity:"0.15",children:c.jsx("path",{d:"M 371.646 -16.266 C 328.554 21.003 255.465 49.043 214.417 88.552 C 204.914 97.698 201.122 117.816 203.936 130.48 C 204.954 135.063 223.705 151.184 228.393 151.444 C 247.225 152.49 268.217 141.879 286.044 135.721 C 300.864 130.601 356.726 98.89 368.152 88.552 C 384.788 73.5 419.727 21.192 443.272 20.42 C 466.201 19.668 488.552 28.981 486.946 51.866 C 484.611 85.14 405.888 122.024 397.85 125.239 C 379.675 132.509 315.118 176.349 300.019 181.142 C 278.43 187.996 171.305 238.027 191.707 270.238 C 199.694 282.848 245.401 287.141 251.104 285.961 C 272.473 281.54 312.575 264.398 329.718 256.263 C 349.247 246.995 369.945 239.359 387.368 226.564 C 407.616 211.695 436.166 193.291 460.741 170.661 C 481.974 151.109 503.703 120.367 507.91 114.757 C 521.283 96.926 532.568 77.618 544.597 58.854 C 548.202 53.231 566.334 18.673 595.259 15.179 C 614.89 12.808 637.386 23.453 635.44 43.131 C 620.486 194.344 475.403 251.2 355.923 287.708 C 322.634 297.88 289.732 309.309 256.345 319.154 C 244.287 322.709 231.584 323.914 219.658 327.889 C 180.191 341.045 142.564 353.262 162.008 415.238 C 167.355 432.282 247.011 426.256 258.092 422.226 C 279.039 414.609 326.614 401.1 347.188 392.527 C 354.656 389.415 361.4 384.754 368.152 380.298 C 390.53 365.529 413.129 351.02 434.537 334.877 C 453.303 320.726 468.437 302.193 486.946 287.708 C 517.369 263.898 550.649 243.076 581.283 219.576 C 606.25 200.423 655.973 142.746 680.862 123.492 C 686.867 118.846 759.061 175.106 719.294 203.853 C 670.087 239.425 565.388 323.141 514.898 352.346 C 492.125 365.519 417.408 399.066 394.356 411.744 C 370.813 424.693 337.524 440.083 312.248 457.165 C 286.069 474.857 285.912 495.194 296.525 499.093 C 325.501 509.737 358.468 501.038 389.115 497.346 C 407.223 495.164 424.116 487.063 441.525 481.623 C 488.901 466.818 494.222 458.543 539.356 427.467 C 558.379 414.369 577.623 401.591 597.006 389.033 C 618.971 374.802 641.049 360.738 663.391 347.106 C 675.414 339.77 673.133 397.859 651.163 415.238 C 633.929 428.871 605.25 440.426 586.524 451.924 C 572.056 460.808 508.422 486.1 528.874 516.563 C 547.527 544.346 603.523 534.311 621.465 527.044 C 649.531 515.676 662.009 508.054 682.609 490.358"})})}),Y2=({color:e})=>c.jsx("svg",{className:"card__bg",width:"648px",height:"648px",viewBox:"0 0 648 648",style:{color:e},children:c.jsxs("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",opacity:"0.15",children:[c.jsx("path",{strokeWidth:"6",d:"M 453.754 -21.507 C 426.967 6.445 420.959 57.037 331.465 60.601 C 234.771 64.452 225.579 0.318 214.418 -28.495"}),c.jsx("path",{strokeWidth:"6",d:"M 156.767 -33.735 C 167.249 11.104 188.994 80.565 217.912 111.263 C 239.879 134.581 286.462 149.302 307.007 147.95"}),c.jsx("path",{strokeWidth:"6",d:"M 307.007 128.398 C 331.812 142.719 401.333 127.174 443.273 102.193 C 482.243 78.981 545.369 8.9 555.079 -28.829"}),c.jsx("path",{strokeWidth:"6",d:"M 68.545 -23.06 C 69.207 -20.985 69.087 78.639 108.725 135.914 C 148.883 193.94 180.333 225.897 241.496 225.01"}),c.jsx("path",{strokeWidth:"8",d:"M 289.538 242.287 C 349.575 238.65 410.797 237.601 509.657 175.902 C 594.584 122.899 644.472 14.236 663.391 -28.494"}),c.jsx("path",{strokeWidth:"6",d:"M -2.208 -47.265 C 0.121 58.718 67.059 227.084 132.309 281.167 C 179.791 320.523 209.414 320.27 289.537 300.383"}),c.jsx("path",{strokeWidth:"9",d:"M 279.055 313.722 C 311.054 325.465 444.581 310.019 502.669 285.771 C 635.523 230.313 649.997 179.204 658.147 173.963"}),c.jsx("path",{strokeWidth:"6",d:"M -40.642 217.539 C -33.11 240.221 37.621 309.223 86.887 336.334 C 137.474 364.172 230.737 391.311 284.496 376.743"}),c.jsx("path",{strokeWidth:"8",d:"M 255.671 376.584 C 304.19 396.955 402.82 394.656 501.796 360.633 C 566.99 338.222 659.371 264.987 690.471 247.08"})]})}),X2=({color:e})=>c.jsx("svg",{className:"card__bg",width:"316px",height:"316px",viewBox:"0 0 316 316",style:{color:e},children:c.jsxs("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"8",opacity:"0.15",children:[c.jsx("path",{d:"M 38.058 7.993 C 28.089 11.316 0.838 21.446 -9.778 21.446"}),c.jsx("path",{d:"M 54.502 25.931 C 36.784 32.374 9.564 33.659 -9.031 34.9"}),c.jsx("path",{d:"M 40.3 44.617 C 32.596 47.185 20.108 49.102 12.645 49.102 C 11.724 49.102 -11.273 49.849 -11.273 49.849"}),c.jsx("path",{d:"M 70.197 55.828 C 44.513 59.371 10.302 63.302 -15.01 63.302"}),c.jsx("path",{d:"M 38.805 78.251 C 29.458 78.251 19.421 80.494 10.403 80.494 C 9.638 80.494 -11.273 81.241 -11.273 81.241"}),c.jsx("path",{d:"M 146.436 76.009 C 98.755 87.302 33.852 89.444 -15.011 93.2"}),c.jsx("path",{d:"M 92.62 96.191 C 64.188 99.928 19.045 106.654 -12.021 106.654"}),c.jsx("path",{d:"M 127.002 110.623 C 86.185 118.524 29.402 125.223 -11.273 121.835"}),c.jsx("path",{d:"M 123.265 126.33 C 81.9 132.793 33.25 138.54 -9.031 141.279"}),c.jsx("path",{d:"M 129.245 137.299 C 105.14 140.135 80.943 144.406 56.743 146.268 C 35.936 147.869 15.883 150.753 -5.294 150.753"}),c.jsx("path",{d:"M 144.193 148.51 C 104.716 148.51 68.301 160.469 28.341 160.469 C 18.874 160.469 8.423 162.712 -0.062 162.712 C -0.691 162.712 -9.031 162.712 -9.031 162.712"}),c.jsx("path",{d:"M 138.214 168.691 C 86.225 174.993 43.197 175.802 -9.03 179.156"}),c.jsx("path",{d:"M 138.961 185.135 C 108.316 187.377 77.638 189.2 47.027 191.862 C 27.053 193.599 12.579 197.094 -7.535 197.094"}),c.jsx("path",{d:"M 192.029 200.083 C 138.506 205.436 85.211 206.11 31.331 206.81 C 14.889 207.024 5.881 207.212 -10.526 208.305"}),c.jsx("path",{d:"M 148.678 215.032 C 110.861 217.395 72.943 217.687 35.068 218.769 C 17.607 219.268 6.926 222.506 -10.526 222.506"}),c.jsx("path",{d:"M 187.545 234.465 C 164.527 234.465 142.438 237.455 120.275 237.455 C 75.157 237.455 32.388 235.96 -11.273 235.96"})]})}),Q2=({pattern:e,color:t})=>{switch(e){case"curves":return c.jsx(Zf,{color:t});case"circles":return c.jsx(Y2,{color:t});case"grass":return c.jsx(X2,{color:t});default:return c.jsx(Zf,{color:t})}},qa=({title:e,value:t,subtitle:n,description:r,color:i,backgroundPattern:s,icon:o,showOverlay:a,overlayContent:l})=>c.jsxs("div",{className:"relative w-full h-full rounded-xl overflow-hidden p-5 flex flex-col justify-between transition-transform duration-300 hover:scale-105",style:{backgroundColor:i},children:[c.jsx("div",{className:"absolute inset-0 pointer-events-none",children:c.jsx(Q2,{pattern:s,color:"rgba(255,255,255,0.1)"})}),c.jsxs("div",{className:"relative z-10 flex justify-between items-start gap-3",children:[c.jsx("div",{className:"text-sm font-medium uppercase tracking-wide text-white/90",children:e}),c.jsx("div",{className:"flex-shrink-0 opacity-80",children:o})]}),c.jsxs("div",{className:"relative z-10 text-white",children:[c.jsx("div",{className:"text-4xl font-light leading-none mb-2 font-nunito",children:t}),n&&c.jsx("div",{className:"text-sm font-normal mb-3 text-white/80",children:n}),c.jsx("div",{className:"text-xs leading-relaxed text-white/85",children:r})]}),a&&l&&c.jsx("div",{className:"absolute top-12 left-5 right-5 bottom-5 z-20 text-white overflow-hidden",children:l})]}),J2=({activeTab:e})=>{const[t]=w.useState(!0),n=[{domain:"github.com",time:2400},{domain:"youtube.com",time:1800},{domain:"stackoverflow.com",time:1200},{domain:"twitter.com",time:700},{domain:"linkedin.com",time:500},{domain:"reddit.com",time:400},{domain:"medium.com",time:300},{domain:"gmail.com",time:200},{domain:"discord.com",time:150},{domain:"notion.so",time:100}],r=o=>{const a=Math.round(o/6e4);if(a<60)return`${a}m`;const l=Math.floor(a/60),d=a%60;return d>0?`${l}h ${d}m`:`${l}h`},i={ai:"hsl(32, 62%, 47%)",domains:"hsl(158, 43%, 33%)",activity:"hsl(262, 44%, 53%)"},s=()=>{var o,a;switch(e){case"ai":return c.jsx(qa,{title:"AI Insights",value:"92%",subtitle:"productivity score",description:"Your browsing patterns show strong focus on development work with minimal distractions",color:i.ai,backgroundPattern:"curves",icon:c.jsx("div",{className:"w-6 h-6 bg-white/20 rounded-full"})});case"domains":return c.jsx(qa,{title:"Top Domains",value:((o=n[0])==null?void 0:o.domain.split(".")[0])||"github",subtitle:r(((a=n[0])==null?void 0:a.time)||2400),description:`Also: ${n.slice(1,3).map(l=>l.domain.split(".")[0]).join(", ")}`,color:i.domains,backgroundPattern:"circles",icon:c.jsx("div",{className:"w-6 h-6 bg-white/20 rounded-full"}),showOverlay:t,overlayContent:c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"auto auto",gap:"0.1rem",justifyItems:"center",alignItems:"start",height:"30%",marginTop:"10px"},children:n.slice(0,8).map(l=>c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.2rem"},title:`${l.domain} - ${r(l.time)}`,children:[c.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px"},children:c.jsx("img",{src:`https://www.google.com/s2/favicons?domain=${l.domain}&sz=24`,alt:l.domain,style:{width:"24px",height:"24px",borderRadius:"3px"},onError:d=>{const f=d.target;f.style.display="none";const h=f.parentElement;h&&!h.querySelector(".fallback-icon")&&(h.innerHTML='<div class="fallback-icon" style="width: 24px; height: 24px; background-color: white; border-radius: 4px; opacity: 0.6;"></div>')}})}),c.jsx("span",{style:{color:"white",fontSize:"0.6rem",fontWeight:"500",textAlign:"center",lineHeight:"1",opacity:.85},children:r(l.time)})]},l.domain))})});case"activity":return c.jsx(qa,{title:"Browsing Activity",value:"23 tabs",subtitle:"147 pages visited",description:"Average 18m per tab • Today's session",color:i.activity,backgroundPattern:"grass",icon:c.jsx("div",{className:"w-6 h-6 bg-white/20 rounded-full"})});default:return null}};return c.jsxs("div",{className:"w-full h-full",children:[s(),c.jsx("style",{children:`
                .card__bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }
            `})]})},Z2=({transitionTextRef:e})=>c.jsx("section",{ref:e,className:"py-6 sm:py-12 flex items-center justify-center relative overflow-hidden",children:c.jsx("div",{className:"w-full max-w-4xl mx-auto px-8 text-center",children:c.jsxs("p",{className:"transition-text text-2xl md:text-3xl font-light leading-relaxed text-[var(--text)]",children:["When focus slips, LyncX"," ",c.jsx("span",{className:"text-[var(--accent-color)] font-medium",children:"helps you see the patterns behind it"})]})})}),ek=({dataCardRef:e,lyncxCardRef:t,viewCardRef:n,animationSpaceRef:r})=>{const[i,s]=w.useState("ai");return c.jsx("section",{ref:r,className:"w-full flex items-center justify-center relative bg-[var(--bg)] py-16",children:c.jsxs("div",{className:"relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 px-4",children:[c.jsxs("div",{className:"flex flex-col items-center text-center relative",children:[c.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-[var(--text)] mb-2",children:"/data"}),c.jsx("p",{className:"text-[var(--muted-text)] text-sm mb-6 max-w-80",children:"See where you spend your time and learn more about your browsing habits."}),c.jsxs("div",{ref:e,className:"bg-white/10 backdrop-blur-sm rounded-xl border-2 border-[var(--border)] w-[320px] h-[320px] sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex flex-col relative",children:[c.jsxs("div",{className:"absolute top-4 right-4 flex gap-2 z-20",children:[c.jsx("button",{onClick:()=>s("ai"),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${i==="ai"?"bg-[var(--accent-color)] text-white":"bg-white/20 text-[var(--muted-text)] hover:bg-white/30"}`,children:"AI"}),c.jsx("button",{onClick:()=>s("domains"),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${i==="domains"?"bg-[var(--accent-color)] text-white":"bg-white/20 text-[var(--muted-text)] hover:bg-white/30"}`,children:"domains"}),c.jsx("button",{onClick:()=>s("activity"),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${i==="activity"?"bg-[var(--accent-color)] text-white":"bg-white/20 text-[var(--muted-text)] hover:bg-white/30"}`,children:"activity"})]}),c.jsx(J2,{activeTab:i})]})]}),c.jsxs("div",{className:"flex flex-col items-center text-center",children:[c.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-[var(--text)] mb-2",children:"/visualize"}),c.jsxs("p",{className:"text-[var(--muted-text)] text-sm mb-6",children:["Visualize all your links.",c.jsx("br",{}),"Click on any node and see how you ended up there."]}),c.jsx("div",{ref:t,className:"backdrop-blur-sm rounded-xl border-2 w-[320px] h-[320px] sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative overflow-hidden",style:{backgroundColor:"#16162a",borderColor:"#16162a"},children:c.jsx("div",{className:"absolute inset-0 z-0 rounded-xl",style:{backgroundImage:`url(${O2})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})})]}),c.jsxs("div",{className:"flex flex-col items-center text-center",children:[c.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-[var(--text)] mb-2",children:"/download"}),c.jsx("p",{className:"text-[var(--muted-text)] text-sm mb-6 max-w-80",children:"You can download your data, already standardized for R or Python."}),c.jsxs("div",{ref:n,className:"backdrop-blur-sm rounded-xl border-2 w-[320px] h-[320px] sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex flex-col items-center justify-center gap-6",style:{backgroundColor:"#1e3a8a",borderColor:"#1e3a8a"},children:[c.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-blue-300",children:[c.jsx("path",{d:"M12 5v14"}),c.jsx("path",{d:"M19 12l-7 7-7-7"})]}),c.jsx("div",{className:"text-2xl font-bold text-white",children:".CSV"})]})]})]})})},tk=()=>{const e=w.useRef(null),t=w.useRef(null),n=w.useRef(null),r=w.useRef(null),i=w.useRef(null),s=w.useRef(null),o=w.useRef(null),a=w.useRef(null),l=w.useRef(null),[d,f]=w.useState(0);return w.useEffect(()=>{let h=0;const u=()=>{if(!e.current||!t.current)return 0;const m=window.scrollY;window.scrollTo(0,0);const g=e.current.getBoundingClientRect(),y=t.current.getBoundingClientRect().bottom-g.top;return window.scrollTo(0,m),y},p=()=>{const m=window.scrollY;h===0&&(h=u(),console.log("Animation end calculated:",h));const g=h*.6;if(m<=0)f(0);else if(m>=g)f(1);else{const b=m/g;f(Math.min(Math.max(b,0),1))}};return setTimeout(()=>{h=u(),p()},100),window.addEventListener("scroll",p,{passive:!0}),()=>window.removeEventListener("scroll",p)},[]),w.useEffect(()=>{const h=document.createElement("style");return h.textContent=`
            @keyframes glow {
                from {
                    box-shadow: 0 0 20px rgba(22, 22, 42, 0.5), 0 0 40px rgba(22, 22, 42, 0.3), 0 0 60px rgba(22, 22, 42, 0.2);
                }
                to {
                    box-shadow: 0 0 40px rgba(22, 22, 42, 0.6), 0 0 80px rgba(22, 22, 42, 0.4), 0 0 120px rgba(22, 22, 42, 0.3);
                }
            }
        `,document.head.appendChild(h),()=>{document.head.contains(h)&&document.head.removeChild(h)}},[]),c.jsxs("div",{className:"min-h-screen",style:{background:"var(--bg)",fontFamily:'"Nunito", sans-serif',overflowX:"hidden"},children:[c.jsx(W2,{}),c.jsx(H2,{commandBarRef:e,onCommandChange:()=>{},scrollProgress:d,browserRef:t}),c.jsx(G2,{}),c.jsx(q2,{browserRef:t,scrollProgress:d}),c.jsx(K2,{lyncxRef:n,helpSectionRef:r}),c.jsx(Z2,{transitionTextRef:i}),c.jsx(ek,{dataCardRef:s,lyncxCardRef:o,viewCardRef:a,animationSpaceRef:l}),c.jsx(M2,{}),c.jsx(C2,{}),c.jsx(E2,{})]})},nk=()=>c.jsxs("div",{className:"min-h-screen bg-[var(--bg)]",children:[c.jsx("header",{className:"fixed top-0 left-0 right-0 bg-[var(--bg)]/95 backdrop-blur-sm z-50 border-b border-[var(--border)]",children:c.jsxs("nav",{className:"max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6",children:[c.jsx("a",{href:"/",className:"text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)]",children:"LyncX"}),c.jsx("a",{href:"/",className:"text-sm font-medium text-[var(--muted-text)] hover:text-[var(--text)] transition-colors duration-200",children:"Back to Home"})]})}),c.jsx("main",{className:"pt-24 pb-16",children:c.jsxs("div",{className:"max-w-4xl mx-auto px-8",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsxs("h1",{className:"text-4xl md:text-5xl font-light mb-6 text-[var(--text)]",children:["Privacy"," ",c.jsx("span",{className:"font-semibold text-[var(--accent-color)]",children:"Policy"})]}),c.jsx("p",{className:"text-xl text-[var(--muted-text)] max-w-3xl mx-auto leading-relaxed",children:"We're committed to transparency about how LyncX works and what data we handle."}),c.jsx("p",{className:"text-sm text-[var(--muted-text)] mt-4",children:"Last updated: August 24, 2025"})]}),c.jsxs("div",{className:"space-y-12",children:[c.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-8",children:[c.jsx("h2",{className:"text-2xl font-semibold text-[var(--text)] mb-6",children:"What We Store"}),c.jsx("div",{className:"space-y-4",children:c.jsxs("div",{className:"border-l-4 border-[var(--accent-color)] pl-6",children:[c.jsx("h3",{className:"text-lg font-medium text-[var(--text)] mb-2",children:"Only 2 Types of Data"}),c.jsxs("ul",{className:"space-y-2 text-[var(--muted-text)]",children:[c.jsxs("li",{children:[c.jsx("strong",{children:"Settings Data:"})," Your preferences and customizations"]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Notes:"})," Your saved notes are backed up so you never lose them"]})]})]})})]}),c.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-8",children:[c.jsx("h2",{className:"text-2xl font-semibold text-[var(--text)] mb-6",children:"Everything Else Stays Local"}),c.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4 mb-6",children:c.jsx("p",{className:"text-green-800 text-sm",children:"All your data including browsing history, tab sessions, analytics, and usage patterns stay completely local on your device. Nothing is ever transmitted to our servers except your chosen notes and settings for backup."})}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-medium text-[var(--text)] mb-3",children:"Processed on Your Device Only"}),c.jsxs("ul",{className:"space-y-1 text-[var(--muted-text)] text-sm",children:[c.jsx("li",{children:"• Browsing history analysis"}),c.jsx("li",{children:"• Time tracking and productivity metrics"}),c.jsx("li",{children:"• Domain statistics and insights"}),c.jsx("li",{children:"• Tab organization and session management"}),c.jsx("li",{children:"• All AI processing and analytics"})]})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-medium text-[var(--text)] mb-3",children:"Complete Privacy"}),c.jsx("p",{className:"text-[var(--muted-text)] text-sm",children:"LyncX operates entirely offline for all core features. Your browsing patterns, productivity data, and usage analytics never leave your device. Only your explicit notes and settings sync for backup purposes."})]})]})]}),c.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-8",children:[c.jsx("h2",{className:"text-2xl font-semibold text-[var(--text)] mb-6",children:"Chrome Extension Permissions"}),c.jsx("p",{className:"text-[var(--muted-text)] mb-6",children:"Here's exactly why LyncX needs each permission and how we use them:"}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-4 text-sm",children:[c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"Tabs & Windows"}),c.jsx("p",{className:"text-[var(--muted-text)] mt-1",children:"Manage, organize, and switch between your browser tabs and windows"})]}),c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"History"}),c.jsx("p",{className:"text-[var(--muted-text)] mt-1",children:"Access your browsing history for local analysis and search features"})]}),c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"Storage"}),c.jsx("p",{className:"text-[var(--muted-text)] mt-1",children:"Save your settings, notes, and preferences locally in your browser"})]}),c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"Active Tab"}),c.jsx("p",{className:"text-[var(--muted-text)] mt-1",children:"Work with the page you're currently viewing"})]}),c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"Web Navigation"}),c.jsx("p",{className:"text-[var(--muted-text)] mt-1",children:"Track page changes for time tracking and productivity features"})]}),c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"Idle Detection"}),c.jsx("p",{className:"text-[var(--muted-text)] mt-1",children:"Detect when you're away to pause timers and track active time"})]})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"Downloads"}),c.jsx("p",{className:"text-[var(--muted-text)] mt-1",children:"Help you save screenshots, export data, and manage file downloads"})]}),c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"Context Menus"}),c.jsx("p",{className:"text-[var(--muted-text)] mt-1",children:"Add helpful options to your right-click menu"})]}),c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"Notifications"}),c.jsx("p",{className:"text-[var(--muted-text)] mt-1",children:"Show you timer alerts and important updates"})]}),c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"Clipboard"}),c.jsx("p",{className:"text-[var(--muted-text)] mt-1",children:"Copy links, text, and data when you use copy commands"})]}),c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"Identity & Email"}),c.jsx("p",{className:"text-[var(--muted-text)] mt-1",children:"Sign you in with Google for Gmail and Calendar integration"})]}),c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"Sessions"}),c.jsx("p",{className:"text-[var(--muted-text)] mt-1",children:"Save and restore your tab sessions"})]})]})]})]}),c.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-8",children:[c.jsx("h2",{className:"text-2xl font-semibold text-[var(--text)] mb-6",children:"External Services"}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"Google Services"}),c.jsx("p",{className:"text-[var(--muted-text)] text-sm mt-2",children:"Gmail, Calendar, and authentication. We only access what you explicitly authorize."})]}),c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"Spotify API"}),c.jsx("p",{className:"text-[var(--muted-text)] text-sm mt-2",children:"Control music playback and access your playlists when you use music commands."})]})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"Slack Integration"}),c.jsx("p",{className:"text-[var(--muted-text)] text-sm mt-2",children:"Send messages and check status when you use Slack commands."})]}),c.jsxs("div",{className:"border border-[var(--border)] rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-[var(--text)]",children:"OpenAI API"}),c.jsx("p",{className:"text-[var(--muted-text)] text-sm mt-2",children:"Powers chat and AI features. Only processes text you explicitly choose to analyze."})]})]})]})]}),c.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-8",children:[c.jsx("h2",{className:"text-2xl font-semibold text-[var(--text)] mb-6",children:"AI Features"}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("p",{className:"text-[var(--muted-text)]",children:["We use ",c.jsx("strong",{children:"OpenAI's API"})," to power our chat and AI analysis features. When you use these features:"]}),c.jsxs("ul",{className:"space-y-2 text-[var(--muted-text)] ml-4",children:[c.jsx("li",{children:"• Only the content you choose to analyze is sent to OpenAI"}),c.jsx("li",{children:"• We follow OpenAI's data usage policies and privacy standards"}),c.jsx("li",{children:"• No browsing history or sensitive data is included in AI requests"})]})]})]}),c.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-8",children:[c.jsx("h2",{className:"text-2xl font-semibold text-[var(--text)] mb-6",children:"Security & Transparency"}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:[c.jsx("h4",{className:"font-medium text-yellow-800 mb-2",children:"Early Stage Transparency"}),c.jsx("p",{className:"text-yellow-700 text-sm",children:"LyncX is in active development. While we've implemented strong security measures and follow best practices, as with any software, there's always room for improvement. We're committed to continuous security updates and welcome your feedback to make LyncX even more secure."})]}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("h4",{className:"font-medium text-[var(--text)] mb-2",children:"What We Do"}),c.jsxs("ul",{className:"space-y-1 text-[var(--muted-text)] text-sm",children:[c.jsx("li",{children:"• Use secure authentication methods"}),c.jsx("li",{children:"• Follow OAuth 2.0 standards"}),c.jsx("li",{children:"• Regular security reviews"}),c.jsx("li",{children:"• Minimal data collection principle"})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-medium text-[var(--text)] mb-2",children:"Your Control"}),c.jsxs("ul",{className:"space-y-1 text-[var(--muted-text)] text-sm",children:[c.jsx("li",{children:"• Pause or reset data features"}),c.jsx("li",{children:"• Export your browsing data"}),c.jsx("li",{children:"• Contact us with concerns"}),c.jsx("li",{children:"• Full uninstall removes all data"})]})]})]})]})]}),c.jsxs("div",{className:"bg-white/5 backdrop-blur-sm rounded-xl border border-[var(--border)] p-8",children:[c.jsx("h2",{className:"text-2xl font-semibold text-[var(--text)] mb-6",children:"Contact & Updates"}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[c.jsxs("div",{children:[c.jsx("h4",{className:"font-medium text-[var(--text)] mb-3",children:"Have Questions?"}),c.jsx("p",{className:"text-[var(--muted-text)] text-sm mb-3",children:"We're here to help with any privacy concerns or questions about how LyncX handles your data."}),c.jsx("a",{href:"mailto:privacy@lyncx.ai",className:"inline-flex items-center text-[var(--accent-color)] hover:underline text-sm",children:"privacy@lyncx.ai"})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-medium text-[var(--text)] mb-3",children:"Policy Updates"}),c.jsx("p",{className:"text-[var(--muted-text)] text-sm",children:"We'll notify you of any significant changes to this privacy policy. The current version is always available on this page."})]})]})]})]}),c.jsx("div",{className:"text-center mt-12 pt-8 border-t border-[var(--border)]",children:c.jsx("p",{className:"text-[var(--muted-text)] text-sm max-w-2xl mx-auto",children:"LyncX is designed to be powerful while keeping your personal data personal."})})]})})]}),rk=()=>{};/**
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
 */const yy=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ik=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},vy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,d=l?e[i+2]:0,f=s>>2,h=(s&3)<<4|a>>4;let u=(a&15)<<2|d>>6,p=d&63;l||(p=64,o||(u=64)),r.push(n[f],n[h],n[u],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(yy(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ik(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const d=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||d==null||h==null)throw new sk;const u=s<<2|a>>4;if(r.push(u),d!==64){const p=a<<4&240|d>>2;if(r.push(p),h!==64){const m=d<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class sk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ok=function(e){const t=yy(e);return vy.encodeByteArray(t,!0)},xy=function(e){return ok(e).replace(/\./g,"")},wy=function(e){try{return vy.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ak(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lk=()=>ak().__FIREBASE_DEFAULTS__,ck=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},uk=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&wy(e[1]);return t&&JSON.parse(t)},Bu=()=>{try{return rk()||lk()||ck()||uk()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},dk=e=>{var t,n;return(n=(t=Bu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},by=()=>{var e;return(e=Bu())===null||e===void 0?void 0:e.config},ky=e=>{var t;return(t=Bu())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class fk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hk(e){return(await fetch(e,{credentials:"include"})).ok}const bi={};function pk(){const e={prod:[],emulator:[]};for(const t of Object.keys(bi))bi[t]?e.emulator.push(t):e.prod.push(t);return e}function mk(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let eh=!1;function gk(e,t){if(typeof window>"u"||typeof document>"u"||!ha(window.location.host)||bi[e]===t||bi[e]||eh)return;bi[e]=t;function n(u){return`__firebase__banner__${u}`}const r="__firebase__banner",s=pk().prod.length>0;function o(){const u=document.getElementById(r);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,p){u.setAttribute("width","24"),u.setAttribute("id",p),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function d(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{eh=!0,o()},u}function f(u,p){u.setAttribute("id",p),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function h(){const u=mk(r),p=n("text"),m=document.getElementById(p)||document.createElement("span"),g=n("learnmore"),b=document.getElementById(g)||document.createElement("a"),y=n("preprendIcon"),v=document.getElementById(y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const x=u.element;a(x),f(b,g);const k=d();l(v,y),x.append(v,m,b,k),document.body.appendChild(x)}s?(m.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,m.innerText="Preview backend running in this workspace."),m.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function vk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xk(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function wk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bk(){const e=Se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function kk(){try{return typeof indexedDB=="object"}catch{return!1}}function Sk(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Tk="FirebaseError";class kn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Tk,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Ck(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kn(i,a,r)}}function Ck(e,t){return e.replace(Ek,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Ek=/\{\$([^}]+)}/g;function _k(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Mr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(th(s)&&th(o)){if(!Mr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function th(e){return e!==null&&typeof e=="object"}/**
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
 */function us(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Nk(e,t){const n=new Pk(e,t);return n.subscribe.bind(n)}class Pk{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ik(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ya),i.error===void 0&&(i.error=Ya),i.complete===void 0&&(i.complete=Ya);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ik(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ya(){}/**
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
 */function Yn(e){return e&&e._delegate?e._delegate:e}class Lr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Pn="[DEFAULT]";/**
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
 */class jk{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new fk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Rk(t))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Pn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Pn){return this.instances.has(t)}getOptions(t=Pn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ak(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Pn){return this.component?this.component.multipleInstances?t:Pn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ak(e){return e===Pn?void 0:e}function Rk(e){return e.instantiationMode==="EAGER"}/**
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
 */class Dk{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new jk(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(z||(z={}));const Mk={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Lk=z.INFO,Ok={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Fk=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Ok[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Sy{constructor(t){this.name=t,this._logLevel=Lk,this._logHandler=Fk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Mk[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const Vk=(e,t)=>t.some(n=>e instanceof n);let nh,rh;function Uk(){return nh||(nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zk(){return rh||(rh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ty=new WeakMap,hc=new WeakMap,Cy=new WeakMap,Xa=new WeakMap,Wu=new WeakMap;function $k(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(fn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ty.set(n,e)}).catch(()=>{}),Wu.set(t,e),t}function Bk(e){if(hc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});hc.set(e,t)}let pc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return hc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Cy.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Wk(e){pc=e(pc)}function Hk(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Qa(this),t,...n);return Cy.set(r,t.sort?t.sort():[t]),fn(r)}:zk().includes(e)?function(...t){return e.apply(Qa(this),t),fn(Ty.get(this))}:function(...t){return fn(e.apply(Qa(this),t))}}function Kk(e){return typeof e=="function"?Hk(e):(e instanceof IDBTransaction&&Bk(e),Vk(e,Uk())?new Proxy(e,pc):e)}function fn(e){if(e instanceof IDBRequest)return $k(e);if(Xa.has(e))return Xa.get(e);const t=Kk(e);return t!==e&&(Xa.set(e,t),Wu.set(t,e)),t}const Qa=e=>Wu.get(e);function Gk(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=fn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fn(o.result),l.oldVersion,l.newVersion,fn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const qk=["get","getKey","getAll","getAllKeys","count"],Yk=["put","add","delete","clear"],Ja=new Map;function ih(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ja.get(t))return Ja.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Yk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&l.done]))[0]};return Ja.set(t,s),s}Wk(e=>({...e,get:(t,n,r)=>ih(t,n)||e.get(t,n,r),has:(t,n)=>!!ih(t,n)||e.has(t,n)}));/**
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
 */class Xk{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qk(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const mc="@firebase/app",sh="0.13.2";/**
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
 */const Ot=new Sy("@firebase/app"),Jk="@firebase/app-compat",Zk="@firebase/analytics-compat",eS="@firebase/analytics",tS="@firebase/app-check-compat",nS="@firebase/app-check",rS="@firebase/auth",iS="@firebase/auth-compat",sS="@firebase/database",oS="@firebase/data-connect",aS="@firebase/database-compat",lS="@firebase/functions",cS="@firebase/functions-compat",uS="@firebase/installations",dS="@firebase/installations-compat",fS="@firebase/messaging",hS="@firebase/messaging-compat",pS="@firebase/performance",mS="@firebase/performance-compat",gS="@firebase/remote-config",yS="@firebase/remote-config-compat",vS="@firebase/storage",xS="@firebase/storage-compat",wS="@firebase/firestore",bS="@firebase/ai",kS="@firebase/firestore-compat",SS="firebase",TS="11.10.0";/**
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
 */const gc="[DEFAULT]",CS={[mc]:"fire-core",[Jk]:"fire-core-compat",[eS]:"fire-analytics",[Zk]:"fire-analytics-compat",[nS]:"fire-app-check",[tS]:"fire-app-check-compat",[rS]:"fire-auth",[iS]:"fire-auth-compat",[sS]:"fire-rtdb",[oS]:"fire-data-connect",[aS]:"fire-rtdb-compat",[lS]:"fire-fn",[cS]:"fire-fn-compat",[uS]:"fire-iid",[dS]:"fire-iid-compat",[fS]:"fire-fcm",[hS]:"fire-fcm-compat",[pS]:"fire-perf",[mS]:"fire-perf-compat",[gS]:"fire-rc",[yS]:"fire-rc-compat",[vS]:"fire-gcs",[xS]:"fire-gcs-compat",[wS]:"fire-fst",[kS]:"fire-fst-compat",[bS]:"fire-vertex","fire-js":"fire-js",[SS]:"fire-js-all"};/**
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
 */const Oo=new Map,ES=new Map,yc=new Map;function oh(e,t){try{e.container.addComponent(t)}catch(n){Ot.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ki(e){const t=e.name;if(yc.has(t))return Ot.debug(`There were multiple attempts to register component ${t}.`),!1;yc.set(t,e);for(const n of Oo.values())oh(n,e);for(const n of ES.values())oh(n,e);return!0}function Ey(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Tt(e){return e==null?!1:e.settings!==void 0}/**
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
 */const _S={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hn=new cs("app","Firebase",_S);/**
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
 */class NS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
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
 */const ds=TS;function _y(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:gc,automaticDataCollectionEnabled:!0},t),i=r.name;if(typeof i!="string"||!i)throw hn.create("bad-app-name",{appName:String(i)});if(n||(n=by()),!n)throw hn.create("no-options");const s=Oo.get(i);if(s){if(Mr(n,s.options)&&Mr(r,s.config))return s;throw hn.create("duplicate-app",{appName:i})}const o=new Dk(i);for(const l of yc.values())o.addComponent(l);const a=new NS(n,r,o);return Oo.set(i,a),a}function PS(e=gc){const t=Oo.get(e);if(!t&&e===gc&&by())return _y();if(!t)throw hn.create("no-app",{appName:e});return t}function Sr(e,t,n){var r;let i=(r=CS[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ot.warn(a.join(" "));return}Ki(new Lr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const IS="firebase-heartbeat-database",jS=1,Gi="firebase-heartbeat-store";let Za=null;function Ny(){return Za||(Za=Gk(IS,jS,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Gi)}catch(n){console.warn(n)}}}}).catch(e=>{throw hn.create("idb-open",{originalErrorMessage:e.message})})),Za}async function AS(e){try{const n=(await Ny()).transaction(Gi),r=await n.objectStore(Gi).get(Py(e));return await n.done,r}catch(t){if(t instanceof kn)Ot.warn(t.message);else{const n=hn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ot.warn(n.message)}}}async function ah(e,t){try{const r=(await Ny()).transaction(Gi,"readwrite");await r.objectStore(Gi).put(t,Py(e)),await r.done}catch(n){if(n instanceof kn)Ot.warn(n.message);else{const r=hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ot.warn(r.message)}}}function Py(e){return`${e.name}!${e.options.appId}`}/**
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
 */const RS=1024,DS=30;class MS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lh();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>DS){const o=FS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ot.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lh(),{heartbeatsToSend:r,unsentEntries:i}=LS(this._heartbeatsCache.heartbeats),s=xy(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ot.warn(n),""}}}function lh(){return new Date().toISOString().substring(0,10)}function LS(e,t=RS){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ch(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ch(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kk()?Sk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ah(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ah(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ch(e){return xy(JSON.stringify({version:2,heartbeats:e})).length}function FS(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function VS(e){Ki(new Lr("platform-logger",t=>new Xk(t),"PRIVATE")),Ki(new Lr("heartbeat",t=>new MS(t),"PRIVATE")),Sr(mc,sh,e),Sr(mc,sh,"esm2017"),Sr("fire-js","")}VS("");var US="firebase",zS="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sr(US,zS,"app");function Hu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Iy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $S=Iy,jy=new cs("auth","Firebase",Iy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Sy("@firebase/auth");function BS(e,...t){Fo.logLevel<=z.WARN&&Fo.warn(`Auth (${ds}): ${e}`,...t)}function ro(e,...t){Fo.logLevel<=z.ERROR&&Fo.error(`Auth (${ds}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e,...t){throw Ku(e,...t)}function pt(e,...t){return Ku(e,...t)}function Ay(e,t,n){const r=Object.assign(Object.assign({},$S()),{[t]:n});return new cs("auth","Firebase",r).create(t,{appName:e.name})}function Fn(e){return Ay(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ku(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return jy.create(e,...t)}function L(e,t,...n){if(!e)throw Ku(t,...n)}function Nt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ro(t),new Error(t)}function Vt(e,t){e||Nt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function WS(){return uh()==="http:"||uh()==="https:"}function uh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WS()||xk()||"connection"in navigator)?navigator.onLine:!0}function KS(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t,n){this.shortDelay=t,this.longDelay=n,Vt(n>t,"Short delay should be less than long delay!"),this.isMobile=yk()||wk()}get(){return HS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(e,t){Vt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YS=new fs(3e4,6e4);function qu(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Hr(e,t,n,r,i={}){return Dy(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=us(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const d=Object.assign({method:t,headers:l},s);return vk()||(d.referrerPolicy="no-referrer"),e.emulatorConfig&&ha(e.emulatorConfig.host)&&(d.credentials="include"),Ry.fetch()(await My(e,e.config.apiHost,n,a),d)})}async function Dy(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},GS),t);try{const i=new QS(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fs(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,d]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fs(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Fs(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Fs(e,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ay(e,f,d);Ft(e,f)}}catch(i){if(i instanceof kn)throw i;Ft(e,"network-request-failed",{message:String(i)})}}async function XS(e,t,n,r,i={}){const s=await Hr(e,t,n,r,i);return"mfaPendingCredential"in s&&Ft(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function My(e,t,n,r){const i=`${t}${n}?${r}`,s=e,o=s.config.emulator?Gu(e.config,i):`${e.config.apiScheme}://${i}`;return qS.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class QS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),YS.get())})}}function Fs(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(e,t){return Hr(e,"POST","/v1/accounts:delete",t)}async function Vo(e,t){return Hr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ZS(e,t=!1){const n=Yn(e),r=await n.getIdToken(t),i=Yu(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ki(el(i.auth_time)),issuedAtTime:ki(el(i.iat)),expirationTime:ki(el(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function el(e){return Number(e)*1e3}function Yu(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ro("JWT malformed, contained fewer than 3 sections"),null;try{const i=wy(n);return i?JSON.parse(i):(ro("Failed to decode base64 JWT payload"),null)}catch(i){return ro("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dh(e){const t=Yu(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof kn&&eT(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function eT({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ki(this.lastLoginAt),this.creationTime=ki(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Uo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await qi(e,Vo(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Ly(s.providerUserInfo):[],a=rT(e.providerData,o),l=e.isAnonymous,d=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?d:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xc(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,h)}async function nT(e){const t=Yn(e);await Uo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function rT(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Ly(e){return e.map(t=>{var{providerId:n}=t,r=Hu(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(e,t){const n=await Dy(e,{},async()=>{const r=us({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=await My(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return e.emulatorConfig&&ha(e.emulatorConfig.host)&&(l.credentials="include"),Ry.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sT(e,t){return Hr(e,"POST","/v2/accounts:revokeToken",qu(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):dh(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){L(t.length!==0,"internal-error");const n=dh(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await iT(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Tr;return r&&(L(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Tr,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class nt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Hu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await qi(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return ZS(this,t)}reload(){return nT(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new nt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(Fn(this.auth));const t=await this.getIdToken();return await qi(this,JS(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,d,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,u=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(d=n.createdAt)!==null&&d!==void 0?d:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:k,isAnonymous:S,providerData:C,stsTokenManager:E}=n;L(x&&E,t,"internal-error");const T=Tr.fromJSON(this.name,E);L(typeof x=="string",t,"internal-error"),Kt(h,t.name),Kt(u,t.name),L(typeof k=="boolean",t,"internal-error"),L(typeof S=="boolean",t,"internal-error"),Kt(p,t.name),Kt(m,t.name),Kt(g,t.name),Kt(b,t.name),Kt(y,t.name),Kt(v,t.name);const R=new nt({uid:x,auth:t,email:u,emailVerified:k,displayName:h,isAnonymous:S,photoURL:m,phoneNumber:p,tenantId:g,stsTokenManager:T,createdAt:y,lastLoginAt:v});return C&&Array.isArray(C)&&(R.providerData=C.map(A=>Object.assign({},A))),b&&(R._redirectEventId=b),R}static async _fromIdTokenResponse(t,n,r=!1){const i=new Tr;i.updateFromServerResponse(n);const s=new nt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Uo(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ly(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Tr;a.updateFromIdToken(r);const l=new nt({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new xc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new Map;function Pt(e){Vt(e instanceof Function,"Expected a class definition");let t=fh.get(e);return t?(Vt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,fh.set(e,t),t)}/**
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
 */class Oy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Oy.type="NONE";const hh=Oy;/**
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
 */function io(e,t,n){return`firebase:${e}:${t}:${n}`}class Cr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=io(this.userKey,i.apiKey,s),this.fullPersistenceKey=io("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Vo(this.auth,{idToken:t}).catch(()=>{});return n?nt._fromGetAccountInfoResponse(this.auth,n,t):null}return nt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Cr(Pt(hh),t,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Pt(hh);const o=io(r,t.config.apiKey,t.name);let a=null;for(const d of n)try{const f=await d._get(o);if(f){let h;if(typeof f=="string"){const u=await Vo(t,{idToken:f}).catch(()=>{});if(!u)break;h=await nt._fromGetAccountInfoResponse(t,u,f)}else h=nt._fromJSON(t,f);d!==s&&(a=h),s=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Cr(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new Cr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(zy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Fy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(By(t))return"Blackberry";if(Wy(t))return"Webos";if(Vy(t))return"Safari";if((t.includes("chrome/")||Uy(t))&&!t.includes("edge/"))return"Chrome";if($y(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fy(e=Se()){return/firefox\//i.test(e)}function Vy(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Uy(e=Se()){return/crios\//i.test(e)}function zy(e=Se()){return/iemobile/i.test(e)}function $y(e=Se()){return/android/i.test(e)}function By(e=Se()){return/blackberry/i.test(e)}function Wy(e=Se()){return/webos/i.test(e)}function Xu(e=Se()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function oT(e=Se()){var t;return Xu(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function aT(){return bk()&&document.documentMode===10}function Hy(e=Se()){return Xu(e)||$y(e)||Wy(e)||By(e)||/windows phone/i.test(e)||zy(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(e,t=[]){let n;switch(e){case"Browser":n=ph(Se());break;case"Worker":n=`${ph(Se())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
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
 */class lT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function cT(e,t={}){return Hr(e,"GET","/v2/passwordPolicy",qu(e,t))}/**
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
 */const uT=6;class dT{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:uT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mh(this),this.idTokenSubscription=new mh(this),this.beforeStateQueue=new lT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Pt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Cr.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Vo(this,{idToken:t}),r=await nt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Uo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=KS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Tt(this.app))return Promise.reject(Fn(this));const n=t?Yn(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Tt(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await cT(this),n=new dT(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new cs("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sT(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Pt(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Cr.create(this,[Pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ky(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;if(Tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&BS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pa(e){return Yn(e)}class mh{constructor(t){this.auth=t,this.observer=null,this.addObserver=Nk(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hT(e){Qu=e}function pT(e){return Qu.loadJS(e)}function mT(){return Qu.gapiScript}function gT(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(e,t){const n=Ey(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Mr(s,t??{}))return i;Ft(i,"already-initialized")}return n.initialize({options:t})}function vT(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function xT(e,t,n){const r=pa(e);L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Gy(t),{host:o,port:a}=wT(t),l=a===null?"":`:${a}`,d={url:`${s}//${o}${l}/`},f=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(Mr(d,r.config.emulator)&&Mr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ha(o)?(hk(`${s}//${o}${l}`),gk("Auth",!0)):i||bT()}function Gy(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function wT(e){const t=Gy(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:gh(o)}}}function gh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function bT(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Nt("not implemented")}_getIdTokenResponse(t){return Nt("not implemented")}_linkToIdToken(t,n){return Nt("not implemented")}_getReauthenticationResolver(t){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(e,t){return XS(e,"POST","/v1/accounts:signInWithIdp",qu(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="http://localhost";class Kn extends qy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Kn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Hu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Kn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Er(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Er(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Er(t,n)}buildRequest(){const t={requestUri:kT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=us(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hs extends Yy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends hs{constructor(){super("facebook.com")}static credential(t){return Kn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jt.credential(t.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends hs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Kn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends hs{constructor(){super("github.com")}static credential(t){return Kn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Zt.credentialFromTaggedObject(t)}static credentialFromError(t){return Zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Zt.credential(t.oauthAccessToken)}catch{return null}}}Zt.GITHUB_SIGN_IN_METHOD="github.com";Zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends hs{constructor(){super("twitter.com")}static credential(t,n){return Kn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return en.credential(n,r)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await nt._fromIdTokenResponse(t,r,i),o=yh(r);return new Or({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=yh(r);return new Or({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function yh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends kn{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zo.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new zo(t,n,r,i)}}function Xy(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zo._fromErrorAndOperation(e,s,t,r):s})}async function ST(e,t,n=!1){const r=await qi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Or._forOperation(e,"link",r)}/**
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
 */async function TT(e,t,n=!1){const{auth:r}=e;if(Tt(r.app))return Promise.reject(Fn(r));const i="reauthenticate";try{const s=await qi(e,Xy(r,i,t,e),n);L(s.idToken,r,"internal-error");const o=Yu(s.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(e.uid===a,r,"user-mismatch"),Or._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(e,t,n=!1){if(Tt(e.app))return Promise.reject(Fn(e));const r="signIn",i=await Xy(e,r,t),s=await Or._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function CT(e,t){return Qy(pa(e),t)}function ET(e,t,n,r){return Yn(e).onIdTokenChanged(t,n,r)}function _T(e,t,n){return Yn(e).beforeAuthStateChanged(t,n)}function NT(e,t,n,r){return Yn(e).onAuthStateChanged(t,n,r)}const $o="__sak";/**
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
 */class Jy{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=1e3,IT=10;class Zy extends Jy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);aT()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,IT):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},PT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Zy.type="LOCAL";const jT=Zy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0 extends Jy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}e0.type="SESSION";const t0=e0;/**
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
 */function AT(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ma{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new ma(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async d=>d(n.origin,s)),l=await AT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ma.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class RT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const d=Ju("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const u=h;if(u.data.eventId===d)switch(u.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(u.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return window}function DT(e){mt().location.href=e}/**
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
 */function n0(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function MT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LT(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function OT(){return n0()?self:null}/**
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
 */const r0="firebaseLocalStorageDb",FT=1,Bo="firebaseLocalStorage",i0="fbase_key";class ps{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ga(e,t){return e.transaction([Bo],t?"readwrite":"readonly").objectStore(Bo)}function VT(){const e=indexedDB.deleteDatabase(r0);return new ps(e).toPromise()}function wc(){const e=indexedDB.open(r0,FT);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Bo,{keyPath:i0})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Bo)?t(r):(r.close(),await VT(),t(await wc()))})})}async function vh(e,t,n){const r=ga(e,!0).put({[i0]:t,value:n});return new ps(r).toPromise()}async function UT(e,t){const n=ga(e,!1).get(t),r=await new ps(n).toPromise();return r===void 0?null:r.value}function xh(e,t){const n=ga(e,!0).delete(t);return new ps(n).toPromise()}const zT=800,$T=3;class s0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>$T)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ma._getInstance(OT()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await MT(),!this.activeServiceWorker)return;this.sender=new RT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||LT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await wc();return await vh(t,$o,"1"),await xh(t,$o),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vh(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>UT(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>xh(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=ga(i,!1).getAll();return new ps(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s0.type="LOCAL";const BT=s0;new fs(3e4,6e4);/**
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
 */function WT(e,t){return t?Pt(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Zu extends qy{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Er(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Er(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Er(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function HT(e){return Qy(e.auth,new Zu(e),e.bypassAuthState)}function KT(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),TT(n,new Zu(e),e.bypassAuthState)}async function GT(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),ST(n,new Zu(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return HT;case"linkViaPopup":case"linkViaRedirect":return GT;case"reauthViaPopup":case"reauthViaRedirect":return KT;default:Ft(this.auth,"internal-error")}}resolve(t){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=new fs(2e3,1e4);class dr extends o0{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,dr.currentPopupAction&&dr.currentPopupAction.cancel(),dr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const t=Ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,qT.get())};t()}}dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="pendingRedirect",so=new Map;class XT extends o0{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=so.get(this.auth._key());if(!t){try{const r=await QT(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}so.set(this.auth._key(),t)}return this.bypassAuthState||so.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QT(e,t){const n=eC(t),r=ZT(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function JT(e,t){so.set(e._key(),t)}function ZT(e){return Pt(e._redirectPersistence)}function eC(e){return io(YT,e.config.apiKey,e.name)}async function tC(e,t,n=!1){if(Tt(e.app))return Promise.reject(Fn(e));const r=pa(e),i=WT(r,t),o=await new XT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=10*60*1e3;class rC{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!iC(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!a0(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=nC&&this.cachedEventUids.clear(),this.cachedEventUids.has(wh(t))}saveEventToCache(t){this.cachedEventUids.add(wh(t)),this.lastProcessedEventTime=Date.now()}}function wh(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function a0({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function iC(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a0(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(e,t={}){return Hr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aC=/^https?/;async function lC(e){if(e.config.emulator)return;const{authorizedDomains:t}=await sC(e);for(const n of t)try{if(cC(n))return}catch{}Ft(e,"unauthorized-domain")}function cC(e){const t=vc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aC.test(n))return!1;if(oC.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const uC=new fs(3e4,6e4);function bh(){const e=mt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function dC(e){return new Promise((t,n)=>{var r,i,s;function o(){bh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bh(),n(pt(e,"network-request-failed"))},timeout:uC.get()})}if(!((i=(r=mt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=mt().gapi)===null||s===void 0)&&s.load)o();else{const a=gT("iframefcb");return mt()[a]=()=>{gapi.load?o():n(pt(e,"network-request-failed"))},pT(`${mT()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw oo=null,t})}let oo=null;function fC(e){return oo=oo||dC(e),oo}/**
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
 */const hC=new fs(5e3,15e3),pC="__/auth/iframe",mC="emulator/auth/iframe",gC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vC(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Gu(t,mC):`https://${e.config.authDomain}/${pC}`,r={apiKey:t.apiKey,appName:e.name,v:ds},i=yC.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${us(r).slice(1)}`}async function xC(e){const t=await fC(e),n=mt().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:vC(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pt(e,"network-request-failed"),a=mt().setTimeout(()=>{s(o)},hC.get());function l(){mt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const wC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bC=500,kC=600,SC="_blank",TC="http://localhost";class kh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CC(e,t,n,r=bC,i=kC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},wC),{width:r.toString(),height:i.toString(),top:s,left:o}),d=Se().toLowerCase();n&&(a=Uy(d)?SC:n),Fy(d)&&(t=t||TC,l.scrollbars="yes");const f=Object.entries(l).reduce((u,[p,m])=>`${u}${p}=${m},`,"");if(oT(d)&&a!=="_self")return EC(t||"",a),new kh(null);const h=window.open(t||"",a,f);L(h,e,"popup-blocked");try{h.focus()}catch{}return new kh(h)}function EC(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _C="__/auth/handler",NC="emulator/auth/handler",PC=encodeURIComponent("fac");async function Sh(e,t,n,r,i,s){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ds,eventId:i};if(t instanceof Yy){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",_k(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,h]of Object.entries(s||{}))o[f]=h}if(t instanceof hs){const f=t.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await e._getAppCheckToken(),d=l?`#${PC}=${encodeURIComponent(l)}`:"";return`${IC(e)}?${us(a).slice(1)}${d}`}function IC({config:e}){return e.emulator?Gu(e,NC):`https://${e.authDomain}/${_C}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="webStorageSupport";class jC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t0,this._completeRedirectFn=tC,this._overrideRedirectResult=JT}async _openPopup(t,n,r,i){var s;Vt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Sh(t,n,r,vc(),i);return CC(t,o,Ju())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Sh(t,n,r,vc(),i);return DT(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await xC(t),r=new rC(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(tl,{type:tl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[tl];o!==void 0&&n(!!o),Ft(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lC(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hy()||Vy()||Xu()}}const AC=jC;var Th="@firebase/auth",Ch="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MC(e){Ki(new Lr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ky(e)},d=new fT(r,i,s,l);return vT(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ki(new Lr("auth-internal",t=>{const n=pa(t.getProvider("auth").getImmediate());return(r=>new RC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sr(Th,Ch,DC(e)),Sr(Th,Ch,"esm2017")}/**
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
 */const LC=5*60,OC=ky("authIdTokenMaxAge")||LC;let Eh=null;const FC=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>OC)return;const i=n==null?void 0:n.token;Eh!==i&&(Eh=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VC(e=PS()){const t=Ey(e,"auth");if(t.isInitialized())return t.getImmediate();const n=yT(e,{popupRedirectResolver:AC,persistence:[BT,jT,t0]}),r=ky("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=FC(s.toString());_T(n,o,()=>o(n.currentUser)),ET(n,a=>o(a))}}const i=dk("auth");return i&&xT(n,`http://${i}`),n}function UC(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}hT({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=pt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",UC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MC("Browser");const zC={apiKey:"AIzaSyAlQbwqFDB0XMZv8du485VBsqVxU3S-vpY",authDomain:"lyncx.ai",projectId:"linkx-b2c62",storageBucket:"linkx-b2c62.firebasestorage.app",messagingSenderId:"606602321768",appId:"1:606602321768:web:764410dd29bbb76e47c0dd",measurementId:"G-ZEQRBXMSSB"},$C="606602321768-s9h4rdbjtieqnc3lh411h0v15q30kjq5.apps.googleusercontent.com",BC=_y(zC),si=VC(BC);function WC(){const[e,t]=w.useState(!1),[n,r]=w.useState(null),[i,s]=w.useState(!1),o=bn();w.useEffect(()=>{const f=new URLSearchParams(o.search).get("source"),h=new URLSearchParams(window.location.hash.substring(1)),u=h.get("access_token"),p=h.get("id_token"),m=h.get("error"),g=h.get("state"),b=f==="extension";if(s(b),console.log("🔍 Auth page params:",{source:f,isFromExtension:b,accessToken:u?"YES":"NO",idToken:p?"YES":"NO",error:m||"NO",state:g||"NO"}),u&&p&&b){console.log("🔄 Detected OAuth callback for extension"),a(u,p);return}else if(m&&b){console.log("❌ OAuth error detected:",m),r(`OAuth error: ${m}`),t(!1);return}else b&&!u&&!p&&console.log("🔄 Extension auth page loaded, waiting for user action");const y=NT(si,v=>{v&&(console.log("✅ User signed in:",v.email),!window.location.hash.includes("access_token")&&!i&&(window.location.href="/"))});return()=>y()},[o,i]);const a=async(d,f)=>{t(!0),console.log("🔄 Processing OAuth callback..."),console.log("✅ Got access token and ID token from OAuth");try{let h;if(si.currentUser)console.log("✅ User already signed in to Firebase:",si.currentUser.email),h=si.currentUser;else try{console.log("🔄 Signing in to Firebase...");const p=Ct.credential(f),m=await CT(si,p);console.log("✅ Firebase sign-in successful:",m.user.email),h=m.user}catch(p){console.error("⚠️ Firebase sign-in error (continuing anyway):",p);try{const m=f.split(".")[1],g=JSON.parse(atob(m));console.log("✅ Extracted user info from ID token:",g.email),h={uid:g.sub,email:g.email,displayName:g.name,photoURL:g.picture}}catch(m){throw console.error("❌ Failed to decode ID token:",m),new Error("Failed to extract user information")}}const u={user:{uid:h.uid,email:h.email,displayName:h.displayName,photoURL:h.photoURL},accessToken:d,timestamp:Date.now()};console.log("🔄 Storing OAuth data immediately..."),localStorage.setItem("lyncx_oauth_complete",JSON.stringify(u)),localStorage.setItem("lyncx_should_redirect","true"),console.log("✅ OAuth data stored successfully"),window.dispatchEvent(new CustomEvent("lyncx_auth_complete",{detail:u})),console.log("✅ Event dispatched"),console.log("✅ Content script will handle extension tab opening"),window.history.replaceState(null,"",window.location.pathname+window.location.search),console.log("✅ OAuth callback completed successfully")}catch(h){console.error("❌ OAuth callback error:",h),r(h instanceof Error?h.message:"OAuth callback failed")}finally{t(!1)}},l=async()=>{t(!0),r(null);try{const d=["openid","email","profile","https://www.googleapis.com/auth/calendar.readonly","https://www.googleapis.com/auth/calendar.events","https://www.googleapis.com/auth/gmail.send","https://www.googleapis.com/auth/gmail.readonly","https://www.googleapis.com/auth/contacts.readonly","https://www.googleapis.com/auth/youtube.readonly"],f=i?window.location.href.split("#")[0]:window.location.href.split("?")[0],u=`https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams({client_id:$C,response_type:"token id_token",scope:d.join(" "),redirect_uri:f,nonce:Math.random().toString(36).substring(2),state:"oauth_"+Math.random().toString(36).substring(2),include_granted_scopes:"true",prompt:"consent"}).toString()}`;console.log("🔗 Generated OAuth URL:",u),console.log("🔗 Redirect URI:",window.location.href.split("?")[0]),window.location.href=u}catch(d){console.error("Sign in error:",d);let f="Sign in failed. Please try again.";d.code==="auth/popup-blocked"?f="Popup was blocked. Please allow popups and try again.":d.code==="auth/popup-closed-by-user"&&(f="Sign in was cancelled."),r(f)}finally{t(!1)}};return i?c.jsxs("div",{className:"login-page",children:[c.jsxs("div",{className:"login-container",children:[c.jsx("div",{className:"hero-section",children:c.jsxs("div",{className:"hero-header",children:[c.jsxs("div",{className:"logo-section",children:[c.jsx("div",{className:"logo-icon",children:"🔗"}),c.jsx("h1",{className:"logo-text",children:"LyncX"})]}),c.jsxs("h2",{className:"hero-title",children:["Browse with",c.jsx("span",{className:"hero-accent",children:"intention"})]}),c.jsx("p",{className:"hero-description",children:"Organize your browsing. Navigate with speed. Track what matters."})]})}),c.jsx("div",{className:"login-section",children:c.jsxs("div",{className:"login-card",children:[c.jsxs("div",{className:"login-header",children:[c.jsx("h3",{className:"login-title",children:"Welcome back"}),c.jsx("p",{className:"login-subtitle",children:"Connect with Google to get started"})]}),c.jsx("button",{onClick:l,disabled:e,className:"google-button",children:e?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"spinner"}),c.jsx("span",{children:"Connecting..."})]}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"google-icon",children:"G"}),c.jsx("span",{children:"Continue with Google"}),c.jsx("svg",{className:"arrow-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:c.jsx("path",{d:"M5 12H19M19 12L12 5M19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),n&&c.jsx("div",{className:"error-message",children:n})]})})]}),c.jsx("style",{children:`
                    .login-page {
                        min-height: 100vh;
                        background: #fffbf0;
                        font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 20px;
                    }

                    .login-container {
                        max-width: 1200px;
                        width: 100%;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 80px;
                        align-items: center;
                        transform: translateY(-10vh);
                    }

                    /* Hero Section */
                    .hero-section {
                        display: flex;
                        flex-direction: column;
                        gap: 40px;
                    }

                    .hero-header {
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                    }

                    .logo-section {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        margin-bottom: 16px;
                    }

                    .logo-icon {
                        width: 32px;
                        height: 32px;
                        background: #c68346;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 18px;
                    }

                    .logo-text {
                        font-size: 32px;
                        font-weight: 600;
                        color: #2d1810;
                        margin: 0;
                        font-family: "Nunito", sans-serif;
                    }

                    .hero-title {
                        font-size: 48px;
                        font-weight: 600;
                        color: #2d1810;
                        line-height: 1.1;
                        margin: 0;
                        font-family: "Nunito", sans-serif;
                    }

                    .hero-accent {
                        display: block;
                        color: #c68346;
                    }

                    .hero-description {
                        font-size: 18px;
                        color: #8b4513;
                        line-height: 1.6;
                        margin: 0;
                        max-width: 600px;
                        font-family: "Nunito", sans-serif;
                    }

                    /* Login Section */
                    .login-section {
                        display: flex;
                        justify-content: center;
                    }

                    .login-card {
                        width: 100%;
                        max-width: 400px;
                        background: white;
                        backdrop-filter: blur(20px);
                        border-radius: 16px;
                        border: 1px solid #e5e5e5;
                        padding: 32px;
                        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
                    }

                    .login-header {
                        text-align: center;
                        margin-bottom: 32px;
                    }

                    .login-title {
                        font-size: 24px;
                        font-weight: 600;
                        color: #2d1810;
                        margin: 0 0 8px 0;
                        font-family: "Nunito", sans-serif;
                    }

                    .login-subtitle {
                        font-size: 15px;
                        color: #8b4513;
                        margin: 0;
                        line-height: 1.5;
                        font-family: "Nunito", sans-serif;
                    }

                    .google-button {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 12px;
                        background: #c68346;
                        border: 1px solid #c68346;
                        color: white;
                        font-size: 15px;
                        font-weight: 500;
                        padding: 16px 24px;
                        border-radius: 12px;
                        cursor: pointer;
                        transition: all 0.2s ease;
                        margin-bottom: 0;
                        font-family: "Nunito", sans-serif;
                    }

                    .google-button:hover:not(:disabled) {
                        background: #b07139;
                        border-color: #b07139;
                        transform: translateY(-1px);
                        box-shadow: 0 4px 16px rgba(198, 131, 70, 0.3);
                    }

                    .google-button:disabled {
                        opacity: 0.6;
                        cursor: not-allowed;
                    }

                    .google-icon {
                        width: 20px;
                        height: 20px;
                        background: white;
                        color: #c68346;
                        border-radius: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                        font-weight: 700;
                    }

                    .spinner {
                        width: 16px;
                        height: 16px;
                        border: 2px solid rgba(255, 255, 255, 0.3);
                        border-top: 2px solid white;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                    }

                    .arrow-icon {
                        transition: transform 0.2s ease;
                        color: white;
                    }

                    .google-button:hover .arrow-icon {
                        transform: translateX(2px);
                        color: white;
                    }

                    .error-message {
                        margin-top: 16px;
                        padding: 12px;
                        background: #fef2f2;
                        border: 1px solid #fecaca;
                        border-radius: 8px;
                        color: #dc2626;
                        font-size: 14px;
                        text-align: center;
                    }

                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }

                    /* Responsive */
                    @media (max-width: 968px) {
                        .login-container {
                            grid-template-columns: 1fr;
                            gap: 48px;
                            text-align: center;
                        }

                        .hero-title {
                            font-size: 40px;
                        }

                        .hero-description {
                            max-width: 100%;
                        }
                    }

                    @media (max-width: 640px) {
                        .login-page {
                            padding: 16px;
                        }

                        .hero-title {
                            font-size: 32px;
                        }

                        .hero-description {
                            font-size: 16px;
                        }

                        .login-card {
                            padding: 24px;
                        }
                    }
                `})]}):c.jsx("div",{className:"min-h-screen bg-gray-100 flex items-center justify-center",children:c.jsxs("div",{className:"bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl text-center",children:[c.jsx("div",{className:"text-4xl mb-4",children:"🔒"}),c.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Authentication Required"}),c.jsx("p",{className:"text-gray-600 mb-6",children:"This page is for extension authentication only. Please use the LyncX extension to sign in."}),c.jsx("a",{href:"/",className:"inline-block bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors",children:"Go to Homepage"})]})})}const l0=w.createContext({});function HC(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const ed=typeof window<"u",KC=ed?w.useLayoutEffect:w.useEffect,td=w.createContext(null);function nd(e,t){e.indexOf(t)===-1&&e.push(t)}function rd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Ut=(e,t,n)=>n>t?t:n<e?e:n;let id=()=>{};const zt={},c0=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function u0(e){return typeof e=="object"&&e!==null}const d0=e=>/^0[^.\s]+$/u.test(e);function sd(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ge=e=>e,GC=(e,t)=>n=>t(e(n)),ms=(...e)=>e.reduce(GC),Yi=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class od{constructor(){this.subscriptions=[]}add(t){return nd(this.subscriptions,t),()=>rd(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const gt=e=>e*1e3,yt=e=>e/1e3;function f0(e,t){return t?e*(1e3/t):0}const h0=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,qC=1e-7,YC=12;function XC(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=h0(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>qC&&++a<YC);return o}function gs(e,t,n,r){if(e===t&&n===r)return Ge;const i=s=>XC(s,0,1,e,n);return s=>s===0||s===1?s:h0(i(s),t,r)}const p0=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,m0=e=>t=>1-e(1-t),g0=gs(.33,1.53,.69,.99),ad=m0(g0),y0=p0(ad),v0=e=>(e*=2)<1?.5*ad(e):.5*(2-Math.pow(2,-10*(e-1))),ld=e=>1-Math.sin(Math.acos(e)),x0=m0(ld),w0=p0(ld),QC=gs(.42,0,1,1),JC=gs(0,0,.58,1),b0=gs(.42,0,.58,1),ZC=e=>Array.isArray(e)&&typeof e[0]!="number",k0=e=>Array.isArray(e)&&typeof e[0]=="number",eE={linear:Ge,easeIn:QC,easeInOut:b0,easeOut:JC,circIn:ld,circInOut:w0,circOut:x0,backIn:ad,backInOut:y0,backOut:g0,anticipate:v0},tE=e=>typeof e=="string",_h=e=>{if(k0(e)){id(e.length===4);const[t,n,r,i]=e;return gs(t,n,r,i)}else if(tE(e))return eE[e];return e},Vs=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],Nh={value:null,addProjectionMetrics:null};function nE(e,t){let n=new Set,r=new Set,i=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function d(h){o.has(h)&&(f.schedule(h),e()),l++,h(a)}const f={schedule:(h,u=!1,p=!1)=>{const g=p&&i?n:r;return u&&o.add(h),g.has(h)||g.add(h),h},cancel:h=>{r.delete(h),o.delete(h)},process:h=>{if(a=h,i){s=!0;return}i=!0,[n,r]=[r,n],n.forEach(d),t&&Nh.value&&Nh.value.frameloop[t].push(l),l=0,n.clear(),i=!1,s&&(s=!1,f.process(h))}};return f}const rE=40;function S0(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Vs.reduce((x,k)=>(x[k]=nE(s,t?k:void 0),x),{}),{setup:a,read:l,resolveKeyframes:d,preUpdate:f,update:h,preRender:u,render:p,postRender:m}=o,g=()=>{const x=zt.useManualTiming?i.timestamp:performance.now();n=!1,zt.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(x-i.timestamp,rE),1)),i.timestamp=x,i.isProcessing=!0,a.process(i),l.process(i),d.process(i),f.process(i),h.process(i),u.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},b=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:Vs.reduce((x,k)=>{const S=o[k];return x[k]=(C,E=!1,T=!1)=>(n||b(),S.schedule(C,E,T)),x},{}),cancel:x=>{for(let k=0;k<Vs.length;k++)o[Vs[k]].cancel(x)},state:i,steps:o}}const{schedule:q,cancel:gn,state:de,steps:nl}=S0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ge,!0);let ao;function iE(){ao=void 0}const Pe={now:()=>(ao===void 0&&Pe.set(de.isProcessing||zt.useManualTiming?de.timestamp:performance.now()),ao),set:e=>{ao=e,queueMicrotask(iE)}},T0=e=>t=>typeof t=="string"&&t.startsWith(e),cd=T0("--"),sE=T0("var(--"),ud=e=>sE(e)?oE.test(e.split("/*")[0].trim()):!1,oE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Kr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Xi={...Kr,transform:e=>Ut(0,1,e)},Us={...Kr,default:1},Si=e=>Math.round(e*1e5)/1e5,dd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function aE(e){return e==null}const lE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,fd=(e,t)=>n=>!!(typeof n=="string"&&lE.test(n)&&n.startsWith(e)||t&&!aE(n)&&Object.prototype.hasOwnProperty.call(n,t)),C0=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(dd);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},cE=e=>Ut(0,255,e),rl={...Kr,transform:e=>Math.round(cE(e))},Dn={test:fd("rgb","red"),parse:C0("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+rl.transform(e)+", "+rl.transform(t)+", "+rl.transform(n)+", "+Si(Xi.transform(r))+")"};function uE(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const bc={test:fd("#"),parse:uE,transform:Dn.transform},ys=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Gt=ys("deg"),vt=ys("%"),M=ys("px"),dE=ys("vh"),fE=ys("vw"),Ph=(()=>({...vt,parse:e=>vt.parse(e)/100,transform:e=>vt.transform(e*100)}))(),fr={test:fd("hsl","hue"),parse:C0("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+vt.transform(Si(t))+", "+vt.transform(Si(n))+", "+Si(Xi.transform(r))+")"},ie={test:e=>Dn.test(e)||bc.test(e)||fr.test(e),parse:e=>Dn.test(e)?Dn.parse(e):fr.test(e)?fr.parse(e):bc.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Dn.transform(e):fr.transform(e),getAnimatableNone:e=>{const t=ie.parse(e);return t.alpha=0,ie.transform(t)}},hE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function pE(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(dd))==null?void 0:t.length)||0)+(((n=e.match(hE))==null?void 0:n.length)||0)>0}const E0="number",_0="color",mE="var",gE="var(",Ih="${}",yE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Qi(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=t.replace(yE,l=>(ie.test(l)?(r.color.push(s),i.push(_0),n.push(ie.parse(l))):l.startsWith(gE)?(r.var.push(s),i.push(mE),n.push(l)):(r.number.push(s),i.push(E0),n.push(parseFloat(l))),++s,Ih)).split(Ih);return{values:n,split:a,indexes:r,types:i}}function N0(e){return Qi(e).values}function P0(e){const{split:t,types:n}=Qi(e),r=t.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=t[o],i[o]!==void 0){const a=n[o];a===E0?s+=Si(i[o]):a===_0?s+=ie.transform(i[o]):s+=i[o]}return s}}const vE=e=>typeof e=="number"?0:ie.test(e)?ie.getAnimatableNone(e):e;function xE(e){const t=N0(e);return P0(e)(t.map(vE))}const yn={test:pE,parse:N0,createTransformer:P0,getAnimatableNone:xE};function il(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function wE({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=il(l,a,e+1/3),s=il(l,a,e),o=il(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function Wo(e,t){return n=>n>0?t:e}const X=(e,t,n)=>e+(t-e)*n,sl=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},bE=[bc,Dn,fr],kE=e=>bE.find(t=>t.test(e));function jh(e){const t=kE(e);if(!t)return!1;let n=t.parse(e);return t===fr&&(n=wE(n)),n}const Ah=(e,t)=>{const n=jh(e),r=jh(t);if(!n||!r)return Wo(e,t);const i={...n};return s=>(i.red=sl(n.red,r.red,s),i.green=sl(n.green,r.green,s),i.blue=sl(n.blue,r.blue,s),i.alpha=X(n.alpha,r.alpha,s),Dn.transform(i))},kc=new Set(["none","hidden"]);function SE(e,t){return kc.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function TE(e,t){return n=>X(e,t,n)}function hd(e){return typeof e=="number"?TE:typeof e=="string"?ud(e)?Wo:ie.test(e)?Ah:_E:Array.isArray(e)?I0:typeof e=="object"?ie.test(e)?Ah:CE:Wo}function I0(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>hd(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function CE(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=hd(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function EE(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const s=t.types[i],o=e.indexes[s][r[s]],a=e.values[o]??0;n[i]=a,r[s]++}return n}const _E=(e,t)=>{const n=yn.createTransformer(t),r=Qi(e),i=Qi(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?kc.has(e)&&!i.values.length||kc.has(t)&&!r.values.length?SE(e,t):ms(I0(EE(r,i),i.values),n):Wo(e,t)};function j0(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?X(e,t,n):hd(e)(e,t)}const NE=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>q.update(t,n),stop:()=>gn(t),now:()=>de.isProcessing?de.timestamp:Pe.now()}},A0=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=Math.round(e(s/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Ho=2e4;function pd(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Ho;)t+=n,r=e.next(t);return t>=Ho?1/0:t}function PE(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(pd(r),Ho);return{type:"keyframes",ease:s=>r.next(i*s).value/t,duration:yt(i)}}const IE=5;function R0(e,t,n){const r=Math.max(t-IE,0);return f0(n-e(r),t-r)}const ee={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ol=.001;function jE({duration:e=ee.duration,bounce:t=ee.bounce,velocity:n=ee.velocity,mass:r=ee.mass}){let i,s,o=1-t;o=Ut(ee.minDamping,ee.maxDamping,o),e=Ut(ee.minDuration,ee.maxDuration,yt(e)),o<1?(i=d=>{const f=d*o,h=f*e,u=f-n,p=Sc(d,o),m=Math.exp(-h);return ol-u/p*m},s=d=>{const h=d*o*e,u=h*n+n,p=Math.pow(o,2)*Math.pow(d,2)*e,m=Math.exp(-h),g=Sc(Math.pow(d,2),o);return(-i(d)+ol>0?-1:1)*((u-p)*m)/g}):(i=d=>{const f=Math.exp(-d*e),h=(d-n)*e+1;return-ol+f*h},s=d=>{const f=Math.exp(-d*e),h=(n-d)*(e*e);return f*h});const a=5/e,l=RE(i,s,a);if(e=gt(e),isNaN(l))return{stiffness:ee.stiffness,damping:ee.damping,duration:e};{const d=Math.pow(l,2)*r;return{stiffness:d,damping:o*2*Math.sqrt(r*d),duration:e}}}const AE=12;function RE(e,t,n){let r=n;for(let i=1;i<AE;i++)r=r-e(r)/t(r);return r}function Sc(e,t){return e*Math.sqrt(1-t*t)}const DE=["duration","bounce"],ME=["stiffness","damping","mass"];function Rh(e,t){return t.some(n=>e[n]!==void 0)}function LE(e){let t={velocity:ee.velocity,stiffness:ee.stiffness,damping:ee.damping,mass:ee.mass,isResolvedFromDuration:!1,...e};if(!Rh(e,ME)&&Rh(e,DE))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Ut(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ee.mass,stiffness:i,damping:s}}else{const n=jE(e);t={...t,...n,mass:ee.mass},t.isResolvedFromDuration=!0}return t}function Ko(e=ee.visualDuration,t=ee.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:d,mass:f,duration:h,velocity:u,isResolvedFromDuration:p}=LE({...n,velocity:-yt(n.velocity||0)}),m=u||0,g=d/(2*Math.sqrt(l*f)),b=o-s,y=yt(Math.sqrt(l/f)),v=Math.abs(b)<5;r||(r=v?ee.restSpeed.granular:ee.restSpeed.default),i||(i=v?ee.restDelta.granular:ee.restDelta.default);let x;if(g<1){const S=Sc(y,g);x=C=>{const E=Math.exp(-g*y*C);return o-E*((m+g*y*b)/S*Math.sin(S*C)+b*Math.cos(S*C))}}else if(g===1)x=S=>o-Math.exp(-y*S)*(b+(m+y*b)*S);else{const S=y*Math.sqrt(g*g-1);x=C=>{const E=Math.exp(-g*y*C),T=Math.min(S*C,300);return o-E*((m+g*y*b)*Math.sinh(T)+S*b*Math.cosh(T))/S}}const k={calculatedDuration:p&&h||null,next:S=>{const C=x(S);if(p)a.done=S>=h;else{let E=S===0?m:0;g<1&&(E=S===0?gt(m):R0(x,S,C));const T=Math.abs(E)<=r,R=Math.abs(o-C)<=i;a.done=T&&R}return a.value=a.done?o:C,a},toString:()=>{const S=Math.min(pd(k),Ho),C=A0(E=>k.next(S*E).value,S,30);return S+"ms "+C},toTransition:()=>{}};return k}Ko.applyToOptions=e=>{const t=PE(e,100,Ko);return e.ease=t.ease,e.duration=gt(t.duration),e.type="keyframes",e};function Tc({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:d=.5,restSpeed:f}){const h=e[0],u={done:!1,value:h},p=T=>a!==void 0&&T<a||l!==void 0&&T>l,m=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let g=n*t;const b=h+g,y=o===void 0?b:o(b);y!==b&&(g=y-h);const v=T=>-g*Math.exp(-T/r),x=T=>y+v(T),k=T=>{const R=v(T),A=x(T);u.done=Math.abs(R)<=d,u.value=u.done?y:A};let S,C;const E=T=>{p(u.value)&&(S=T,C=Ko({keyframes:[u.value,m(u.value)],velocity:R0(x,T,u.value),damping:i,stiffness:s,restDelta:d,restSpeed:f}))};return E(0),{calculatedDuration:null,next:T=>{let R=!1;return!C&&S===void 0&&(R=!0,k(T),E(T)),S!==void 0&&T>=S?C.next(T-S):(!R&&k(T),u)}}}function OE(e,t,n){const r=[],i=n||zt.mix||j0,s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Ge:t;a=ms(l,a)}r.push(a)}return r}function FE(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(id(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=OE(t,r,i),l=a.length,d=f=>{if(o&&f<e[0])return t[0];let h=0;if(l>1)for(;h<e.length-2&&!(f<e[h+1]);h++);const u=Yi(e[h],e[h+1],f);return a[h](u)};return n?f=>d(Ut(e[0],e[s-1],f)):d}function VE(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Yi(0,t,r);e.push(X(n,1,i))}}function UE(e){const t=[0];return VE(t,e.length-1),t}function zE(e,t){return e.map(n=>n*t)}function $E(e,t){return e.map(()=>t||b0).splice(0,e.length-1)}function Ti({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=ZC(r)?r.map(_h):_h(r),s={done:!1,value:t[0]},o=zE(n&&n.length===t.length?n:UE(t),e),a=FE(o,t,{ease:Array.isArray(i)?i:$E(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}const BE=e=>e!==null;function md(e,{repeat:t,repeatType:n="loop"},r,i=1){const s=e.filter(BE),a=i<0||t&&n!=="loop"&&t%2===1?0:s.length-1;return!a||r===void 0?s[a]:r}const WE={decay:Tc,inertia:Tc,tween:Ti,keyframes:Ti,spring:Ko};function D0(e){typeof e.type=="string"&&(e.type=WE[e.type])}class gd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const HE=e=>e/100;class yd extends gd{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==Pe.now()&&this.tick(Pe.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;D0(t);const{type:n=Ti,repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=t;let{keyframes:a}=t;const l=n||Ti;l!==Ti&&typeof a[0]!="number"&&(this.mixKeyframes=ms(HE,j0(a[0],a[1])),a=[0,100]);const d=l({...t,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...a].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=pd(d));const{calculatedDuration:f}=d;this.calculatedDuration=f,this.resolvedDuration=f+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=d}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:d=0,keyframes:f,repeat:h,repeatType:u,repeatDelay:p,type:m,onUpdate:g,finalKeyframe:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const y=this.currentTime-d*(this.playbackSpeed>=0?1:-1),v=this.playbackSpeed>=0?y<0:y>i;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let x=this.currentTime,k=r;if(h){const T=Math.min(this.currentTime,i)/a;let R=Math.floor(T),A=T%1;!A&&T>=1&&(A=1),A===1&&R--,R=Math.min(R,h+1),!!(R%2)&&(u==="reverse"?(A=1-A,p&&(A-=p/a)):u==="mirror"&&(k=o)),x=Ut(0,1,A)*a}const S=v?{done:!1,value:f[0]}:k.next(x);s&&(S.value=s(S.value));let{done:C}=S;!v&&l!==null&&(C=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return E&&m!==Tc&&(S.value=md(f,this.options,b,this.speed)),g&&g(S.value),E&&this.finish(),S}then(t,n){return this.finished.then(t,n)}get duration(){return yt(this.calculatedDuration)}get time(){return yt(this.currentTime)}set time(t){var n;t=gt(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Pe.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=yt(this.currentTime))}play(){var i,s;if(this.isStopped)return;const{driver:t=NE,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),(s=(i=this.options).onPlay)==null||s.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Pe.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function KE(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Mn=e=>e*180/Math.PI,Cc=e=>{const t=Mn(Math.atan2(e[1],e[0]));return Ec(t)},GE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Cc,rotateZ:Cc,skewX:e=>Mn(Math.atan(e[1])),skewY:e=>Mn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Ec=e=>(e=e%360,e<0&&(e+=360),e),Dh=Cc,Mh=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Lh=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),qE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Mh,scaleY:Lh,scale:e=>(Mh(e)+Lh(e))/2,rotateX:e=>Ec(Mn(Math.atan2(e[6],e[5]))),rotateY:e=>Ec(Mn(Math.atan2(-e[2],e[0]))),rotateZ:Dh,rotate:Dh,skewX:e=>Mn(Math.atan(e[4])),skewY:e=>Mn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function _c(e){return e.includes("scale")?1:0}function Nc(e,t){if(!e||e==="none")return _c(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=qE,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=GE,i=a}if(!i)return _c(t);const s=r[t],o=i[1].split(",").map(XE);return typeof s=="function"?s(o):o[s]}const YE=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Nc(n,t)};function XE(e){return parseFloat(e.trim())}const Gr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qr=(()=>new Set(Gr))(),Oh=e=>e===Kr||e===M,QE=new Set(["x","y","z"]),JE=Gr.filter(e=>!QE.has(e));function ZE(e){const t=[];return JE.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Vn={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Nc(t,"x"),y:(e,{transform:t})=>Nc(t,"y")};Vn.translateX=Vn.x;Vn.translateY=Vn.y;const Un=new Set;let Pc=!1,Ic=!1,jc=!1;function M0(){if(Ic){const e=Array.from(Un).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=ZE(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))==null||a.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ic=!1,Pc=!1,Un.forEach(e=>e.complete(jc)),Un.clear()}function L0(){Un.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ic=!0)})}function e3(){jc=!0,L0(),M0(),jc=!1}class vd{constructor(t,n,r,i,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Un.add(this),Pc||(Pc=!0,q.read(L0),q.resolveKeyframes(M0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const s=i==null?void 0:i.get(),o=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const a=r.readValue(n,o);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=o),i&&s===void 0&&i.set(t[0])}KE(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Un.delete(this)}cancel(){this.state==="scheduled"&&(Un.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const t3=e=>e.startsWith("--");function n3(e,t,n){t3(t)?e.style.setProperty(t,n):e.style[t]=n}const r3=sd(()=>window.ScrollTimeline!==void 0),i3={};function s3(e,t){const n=sd(e);return()=>i3[t]??n()}const O0=s3(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),di=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Fh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:di([0,.65,.55,1]),circOut:di([.55,0,1,.45]),backIn:di([.31,.01,.66,-.59]),backOut:di([.33,1.53,.69,.99])};function F0(e,t){if(e)return typeof e=="function"?O0()?A0(e,t):"ease-out":k0(e)?di(e):Array.isArray(e)?e.map(n=>F0(n,t)||Fh.easeOut):Fh[e]}function o3(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},d=void 0){const f={[t]:n};l&&(f.offset=l);const h=F0(a,i);Array.isArray(h)&&(f.easing=h);const u={delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return d&&(u.pseudoElement=d),e.animate(f,u)}function V0(e){return typeof e=="function"&&"applyToOptions"in e}function a3({type:e,...t}){return V0(e)&&O0()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class l3 extends gd{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=t;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=t,id(typeof t.type!="string");const d=a3(t);this.animation=o3(n,r,i,d,s),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const f=md(i,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(f):n3(n,r,f),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return yt(Number(t))}get time(){return yt(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=gt(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&r3()?(this.animation.timeline=t,Ge):n(this)}}const U0={anticipate:v0,backInOut:y0,circInOut:w0};function c3(e){return e in U0}function u3(e){typeof e.ease=="string"&&c3(e.ease)&&(e.ease=U0[e.ease])}const Vh=10;class d3 extends l3{constructor(t){u3(t),D0(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:s,...o}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new yd({...o,autoplay:!1}),l=gt(this.finishedTime??this.time);n.setWithVelocity(a.sample(l-Vh).value,a.sample(l).value,Vh),a.stop()}}const Uh=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(yn.test(e)||e==="0")&&!e.startsWith("url("));function f3(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function h3(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=Uh(i,t),a=Uh(s,t);return!o||!a?!1:f3(e)||(n==="spring"||V0(n))&&r}function Ac(e){e.duration=0,e.type}const p3=new Set(["opacity","clipPath","filter","transform"]),m3=sd(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function g3(e){var f;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:s,type:o}=e;if(!(((f=t==null?void 0:t.owner)==null?void 0:f.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:d}=t.owner.getProps();return m3()&&n&&p3.has(n)&&(n!=="transform"||!d)&&!l&&!r&&i!=="mirror"&&s!==0&&o!=="inertia"}const y3=40;class v3 extends gd{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:d,element:f,...h}){var m;super(),this.stop=()=>{var g,b;this._animation&&(this._animation.stop(),(g=this.stopTimeline)==null||g.call(this)),(b=this.keyframeResolver)==null||b.cancel()},this.createdAt=Pe.now();const u={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,name:l,motionValue:d,element:f,...h},p=(f==null?void 0:f.KeyframeResolver)||vd;this.keyframeResolver=new p(a,(g,b,y)=>this.onKeyframesResolved(g,b,u,!y),l,d,f),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(t,n,r,i){this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:d,onUpdate:f}=r;this.resolvedAt=Pe.now(),h3(t,s,o,a)||((zt.instantAnimations||!l)&&(f==null||f(md(t,r,n))),t[0]=t[t.length-1],Ac(r),r.repeat=0);const u={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>y3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},p=!d&&g3(u)?new d3({...u,element:u.motionValue.owner.current}):new yd(u);p.finished.then(()=>this.notifyFinished()).catch(Ge),this.pendingTimeline&&(this.stopTimeline=p.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),e3()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const x3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function w3(e){const t=x3.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function z0(e,t,n=1){const[r,i]=w3(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return c0(o)?parseFloat(o):o}return ud(i)?z0(i,t,n+1):i}function xd(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const $0=new Set(["width","height","top","left","right","bottom",...Gr]),b3={test:e=>e==="auto",parse:e=>e},B0=e=>t=>t.test(e),W0=[Kr,M,vt,Gt,fE,dE,b3],zh=e=>W0.find(B0(e));function k3(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||d0(e):!0}const S3=new Set(["brightness","contrast","saturate","opacity"]);function T3(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(dd)||[];if(!r)return e;const i=n.replace(r,"");let s=S3.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const C3=/\b([a-z-]*)\(.*?\)/gu,Rc={...yn,getAnimatableNone:e=>{const t=e.match(C3);return t?t.map(T3).join(" "):e}},$h={...Kr,transform:Math.round},E3={rotate:Gt,rotateX:Gt,rotateY:Gt,rotateZ:Gt,scale:Us,scaleX:Us,scaleY:Us,scaleZ:Us,skew:Gt,skewX:Gt,skewY:Gt,distance:M,translateX:M,translateY:M,translateZ:M,x:M,y:M,z:M,perspective:M,transformPerspective:M,opacity:Xi,originX:Ph,originY:Ph,originZ:M},wd={borderWidth:M,borderTopWidth:M,borderRightWidth:M,borderBottomWidth:M,borderLeftWidth:M,borderRadius:M,radius:M,borderTopLeftRadius:M,borderTopRightRadius:M,borderBottomRightRadius:M,borderBottomLeftRadius:M,width:M,maxWidth:M,height:M,maxHeight:M,top:M,right:M,bottom:M,left:M,padding:M,paddingTop:M,paddingRight:M,paddingBottom:M,paddingLeft:M,margin:M,marginTop:M,marginRight:M,marginBottom:M,marginLeft:M,backgroundPositionX:M,backgroundPositionY:M,...E3,zIndex:$h,fillOpacity:Xi,strokeOpacity:Xi,numOctaves:$h},_3={...wd,color:ie,backgroundColor:ie,outlineColor:ie,fill:ie,stroke:ie,borderColor:ie,borderTopColor:ie,borderRightColor:ie,borderBottomColor:ie,borderLeftColor:ie,filter:Rc,WebkitFilter:Rc},H0=e=>_3[e];function K0(e,t){let n=H0(e);return n!==Rc&&(n=yn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const N3=new Set(["auto","none","0"]);function P3(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!N3.has(s)&&Qi(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=K0(n,i)}class I3 extends vd{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let d=t[l];if(typeof d=="string"&&(d=d.trim(),ud(d))){const f=z0(d,n.current);f!==void 0&&(t[l]=f),l===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!$0.has(r)||t.length!==2)return;const[i,s]=t,o=zh(i),a=zh(s);if(o!==a)if(Oh(o)&&Oh(a))for(let l=0;l<t.length;l++){const d=t[l];typeof d=="string"&&(t[l]=parseFloat(d))}else Vn[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||k3(t[i]))&&r.push(i);r.length&&P3(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Vn[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const s=r.length-1,o=r[s];r[s]=Vn[n](t.measureViewportBox(),window.getComputedStyle(t.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,d])=>{t.getValue(l).set(d)}),this.resolveNoneKeyframes()}}function j3(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;t&&(r=t.current);const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const G0=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function A3(e){return u0(e)&&"offsetHeight"in e}const Bh=30,R3=e=>!isNaN(parseFloat(e));class D3{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var s;const i=Pe.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Pe.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=R3(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new od);const r=this.events[t].add(n);return t==="change"?()=>{r(),q.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Pe.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Bh)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Bh);return f0(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Fr(e,t){return new D3(e,t)}const{schedule:bd,cancel:UP}=S0(queueMicrotask,!1),Je={x:!1,y:!1};function q0(){return Je.x||Je.y}function M3(e){return e==="x"||e==="y"?Je[e]?null:(Je[e]=!0,()=>{Je[e]=!1}):Je.x||Je.y?null:(Je.x=Je.y=!0,()=>{Je.x=Je.y=!1})}function Y0(e,t){const n=j3(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Wh(e){return!(e.pointerType==="touch"||q0())}function L3(e,t,n={}){const[r,i,s]=Y0(e,n),o=a=>{if(!Wh(a))return;const{target:l}=a,d=t(l,a);if(typeof d!="function"||!l)return;const f=h=>{Wh(h)&&(d(h),l.removeEventListener("pointerleave",f))};l.addEventListener("pointerleave",f,i)};return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const X0=(e,t)=>t?e===t?!0:X0(e,t.parentElement):!1,kd=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,O3=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function F3(e){return O3.has(e.tagName)||e.tabIndex!==-1}const lo=new WeakSet;function Hh(e){return t=>{t.key==="Enter"&&e(t)}}function al(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const V3=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Hh(()=>{if(lo.has(n))return;al(n,"down");const i=Hh(()=>{al(n,"up")}),s=()=>al(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Kh(e){return kd(e)&&!q0()}function U3(e,t,n={}){const[r,i,s]=Y0(e,n),o=a=>{const l=a.currentTarget;if(!Kh(a))return;lo.add(l);const d=t(l,a),f=(p,m)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",u),lo.has(l)&&lo.delete(l),Kh(p)&&typeof d=="function"&&d(p,{success:m})},h=p=>{f(p,l===window||l===document||n.useGlobalTarget||X0(l,p.target))},u=p=>{f(p,!1)};window.addEventListener("pointerup",h,i),window.addEventListener("pointercancel",u,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),A3(a)&&(a.addEventListener("focus",d=>V3(d,i)),!F3(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function Q0(e){return u0(e)&&"ownerSVGElement"in e}function z3(e){return Q0(e)&&e.tagName==="svg"}const ye=e=>!!(e&&e.getVelocity),$3=[...W0,ie,yn],B3=e=>$3.find(B0(e)),J0=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function W3(e=!0){const t=w.useContext(td);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=w.useId();w.useEffect(()=>{if(e)return i(s)},[e]);const o=w.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,o]:[!0]}const Z0=w.createContext({strict:!1}),Gh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Vr={};for(const e in Gh)Vr[e]={isEnabled:t=>Gh[e].some(n=>!!t[n])};function H3(e){for(const t in e)Vr[t]={...Vr[t],...e[t]}}const K3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Go(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||K3.has(e)}let ev=e=>!Go(e);function G3(e){typeof e=="function"&&(ev=t=>t.startsWith("on")?!Go(t):e(t))}try{G3(require("@emotion/is-prop-valid").default)}catch{}function q3(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(ev(i)||n===!0&&Go(i)||!t&&!Go(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const ya=w.createContext({});function va(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Ji(e){return typeof e=="string"||Array.isArray(e)}const Sd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Td=["initial",...Sd];function xa(e){return va(e.animate)||Td.some(t=>Ji(e[t]))}function tv(e){return!!(xa(e)||e.variants)}function Y3(e,t){if(xa(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ji(n)?n:void 0,animate:Ji(r)?r:void 0}}return e.inherit!==!1?t:{}}function X3(e){const{initial:t,animate:n}=Y3(e,w.useContext(ya));return w.useMemo(()=>({initial:t,animate:n}),[qh(t),qh(n)])}function qh(e){return Array.isArray(e)?e.join(" "):e}const Zi={};function Q3(e){for(const t in e)Zi[t]=e[t],cd(t)&&(Zi[t].isCSSVariable=!0)}function nv(e,{layout:t,layoutId:n}){return qr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Zi[e]||e==="opacity")}const J3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Z3=Gr.length;function e_(e,t,n){let r="",i=!0;for(let s=0;s<Z3;s++){const o=Gr[s],a=e[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const d=G0(a,wd[o]);if(!l){i=!1;const f=J3[o]||o;r+=`${f}(${d}) `}n&&(t[o]=d)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Cd(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,a=!1;for(const l in t){const d=t[l];if(qr.has(l)){o=!0;continue}else if(cd(l)){i[l]=d;continue}else{const f=G0(d,wd[l]);l.startsWith("origin")?(a=!0,s[l]=f):r[l]=f}}if(t.transform||(o||n?r.transform=e_(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:d="50%",originZ:f=0}=s;r.transformOrigin=`${l} ${d} ${f}`}}const Ed=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function rv(e,t,n){for(const r in t)!ye(t[r])&&!nv(r,n)&&(e[r]=t[r])}function t_({transformTemplate:e},t){return w.useMemo(()=>{const n=Ed();return Cd(n,t,e),Object.assign({},n.vars,n.style)},[t])}function n_(e,t){const n=e.style||{},r={};return rv(r,n,e),Object.assign(r,t_(e,t)),r}function r_(e,t){const n={},r=n_(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const i_={offset:"stroke-dashoffset",array:"stroke-dasharray"},s_={offset:"strokeDashoffset",array:"strokeDasharray"};function o_(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?i_:s_;e[s.offset]=M.transform(-r);const o=M.transform(t),a=M.transform(n);e[s.array]=`${o} ${a}`}function iv(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:s=1,pathOffset:o=0,...a},l,d,f){if(Cd(e,a,d),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:u}=e;h.transform&&(u.transform=h.transform,delete h.transform),(u.transform||h.transformOrigin)&&(u.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),u.transform&&(u.transformBox=(f==null?void 0:f.transformBox)??"fill-box",delete h.transformBox),t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),i!==void 0&&o_(h,i,s,o,!1)}const sv=()=>({...Ed(),attrs:{}}),ov=e=>typeof e=="string"&&e.toLowerCase()==="svg";function a_(e,t,n,r){const i=w.useMemo(()=>{const s=sv();return iv(s,t,ov(r),e.transformTemplate,e.style),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};rv(s,e.style,e),i.style={...s,...i.style}}return i}const l_=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _d(e){return typeof e!="string"||e.includes("-")?!1:!!(l_.indexOf(e)>-1||/[A-Z]/u.test(e))}function c_(e,t,n,{latestValues:r},i,s=!1){const a=(_d(e)?a_:r_)(t,r,i,e),l=q3(t,typeof e=="string",s),d=e!==w.Fragment?{...l,...a,ref:n}:{},{children:f}=t,h=w.useMemo(()=>ye(f)?f.get():f,[f]);return w.createElement(e,{...d,children:h})}function Yh(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Nd(e,t,n,r){if(typeof t=="function"){const[i,s]=Yh(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=Yh(r);t=t(n!==void 0?n:e.custom,i,s)}return t}function co(e){return ye(e)?e.get():e}function u_({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:d_(n,r,i,e),renderState:t()}}function d_(e,t,n,r){const i={},s=r(e,{});for(const u in s)i[u]=co(s[u]);let{initial:o,animate:a}=e;const l=xa(e),d=tv(e);t&&d&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let f=n?n.initial===!1:!1;f=f||o===!1;const h=f?a:o;if(h&&typeof h!="boolean"&&!va(h)){const u=Array.isArray(h)?h:[h];for(let p=0;p<u.length;p++){const m=Nd(e,u[p]);if(m){const{transitionEnd:g,transition:b,...y}=m;for(const v in y){let x=y[v];if(Array.isArray(x)){const k=f?x.length-1:0;x=x[k]}x!==null&&(i[v]=x)}for(const v in g)i[v]=g[v]}}}return i}const av=e=>(t,n)=>{const r=w.useContext(ya),i=w.useContext(td),s=()=>u_(e,t,r,i);return n?s():HC(s)};function Pd(e,t,n){var s;const{style:r}=e,i={};for(const o in r)(ye(r[o])||t.style&&ye(t.style[o])||nv(o,e)||((s=n==null?void 0:n.getValue(o))==null?void 0:s.liveStyle)!==void 0)&&(i[o]=r[o]);return i}const f_=av({scrapeMotionValuesFromProps:Pd,createRenderState:Ed});function lv(e,t,n){const r=Pd(e,t,n);for(const i in e)if(ye(e[i])||ye(t[i])){const s=Gr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}const h_=av({scrapeMotionValuesFromProps:lv,createRenderState:sv}),p_=Symbol.for("motionComponentSymbol");function hr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function m_(e,t,n){return w.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):hr(n)&&(n.current=r))},[t])}const Id=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),g_="framerAppearId",cv="data-"+Id(g_),uv=w.createContext({});function y_(e,t,n,r,i){var g,b;const{visualElement:s}=w.useContext(ya),o=w.useContext(Z0),a=w.useContext(td),l=w.useContext(J0).reducedMotion,d=w.useRef(null);r=r||o.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:s,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:l}));const f=d.current,h=w.useContext(uv);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&v_(d.current,n,i,h);const u=w.useRef(!1);w.useInsertionEffect(()=>{f&&u.current&&f.update(n,a)});const p=n[cv],m=w.useRef(!!p&&!((g=window.MotionHandoffIsComplete)!=null&&g.call(window,p))&&((b=window.MotionHasOptimisedAnimation)==null?void 0:b.call(window,p)));return KC(()=>{f&&(u.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),m.current&&f.animationState&&f.animationState.animateChanges())}),w.useEffect(()=>{f&&(!m.current&&f.animationState&&f.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)==null||y.call(window,p)}),m.current=!1),f.enteringChildren=void 0)}),f}function v_(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:d,layoutCrossfade:f}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:dv(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&hr(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,crossfade:f,layoutScroll:l,layoutRoot:d})}function dv(e){if(e)return e.options.allowProjection!==!1?e.projection:dv(e.parent)}function ll(e,{forwardMotionProps:t=!1}={},n,r){n&&H3(n);const i=_d(e)?h_:f_;function s(a,l){let d;const f={...w.useContext(J0),...a,layoutId:x_(a)},{isStatic:h}=f,u=X3(a),p=i(a,h);if(!h&&ed){w_();const m=b_(f);d=m.MeasureLayout,u.visualElement=y_(e,p,f,r,m.ProjectionNode)}return c.jsxs(ya.Provider,{value:u,children:[d&&u.visualElement?c.jsx(d,{visualElement:u.visualElement,...f}):null,c_(e,a,m_(p,u.visualElement,l),p,h,t)]})}s.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const o=w.forwardRef(s);return o[p_]=e,o}function x_({layoutId:e}){const t=w.useContext(l0).id;return t&&e!==void 0?t+"-"+e:e}function w_(e,t){w.useContext(Z0).strict}function b_(e){const{drag:t,layout:n}=Vr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function k_(e,t){if(typeof Proxy>"u")return ll;const n=new Map,r=(s,o)=>ll(s,o,e,t),i=(s,o)=>r(s,o);return new Proxy(i,{get:(s,o)=>o==="create"?r:(n.has(o)||n.set(o,ll(o,void 0,e,t)),n.get(o))})}function fv({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function S_({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function T_(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function cl(e){return e===void 0||e===1}function Dc({scale:e,scaleX:t,scaleY:n}){return!cl(e)||!cl(t)||!cl(n)}function In(e){return Dc(e)||hv(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function hv(e){return Xh(e.x)||Xh(e.y)}function Xh(e){return e&&e!=="0%"}function qo(e,t,n){const r=e-n,i=t*r;return n+i}function Qh(e,t,n,r,i){return i!==void 0&&(e=qo(e,i,r)),qo(e,n,r)+t}function Mc(e,t=0,n=1,r,i){e.min=Qh(e.min,t,n,r,i),e.max=Qh(e.max,t,n,r,i)}function pv(e,{x:t,y:n}){Mc(e.x,t.translate,t.scale,t.originPoint),Mc(e.y,n.translate,n.scale,n.originPoint)}const Jh=.999999999999,Zh=1.0000000000001;function C_(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&mr(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,pv(e,o)),r&&In(s.latestValues)&&mr(e,s.latestValues))}t.x<Zh&&t.x>Jh&&(t.x=1),t.y<Zh&&t.y>Jh&&(t.y=1)}function pr(e,t){e.min=e.min+t,e.max=e.max+t}function ep(e,t,n,r,i=.5){const s=X(e.min,e.max,i);Mc(e,t,n,s,r)}function mr(e,t){ep(e.x,t.x,t.scaleX,t.scale,t.originX),ep(e.y,t.y,t.scaleY,t.scale,t.originY)}function mv(e,t){return fv(T_(e.getBoundingClientRect(),t))}function E_(e,t,n){const r=mv(e,n),{scroll:i}=t;return i&&(pr(r.x,i.offset.x),pr(r.y,i.offset.y)),r}const tp=()=>({translate:0,scale:1,origin:0,originPoint:0}),gr=()=>({x:tp(),y:tp()}),np=()=>({min:0,max:0}),ne=()=>({x:np(),y:np()}),Lc={current:null},gv={current:!1};function __(){if(gv.current=!0,!!ed)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Lc.current=e.matches;e.addEventListener("change",t),t()}else Lc.current=!1}const N_=new WeakMap;function P_(e,t,n){for(const r in t){const i=t[r],s=n[r];if(ye(i))e.addValue(r,i);else if(ye(s))e.addValue(r,Fr(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,Fr(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const rp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class I_{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=vd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const u=Pe.now();this.renderScheduledAt<u&&(this.renderScheduledAt=u,q.render(this.render,!1,!0))};const{latestValues:l,renderState:d}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=xa(n),this.isVariantNode=tv(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const u in h){const p=h[u];l[u]!==void 0&&ye(p)&&p.set(l[u])}}mount(t){var n;this.current=t,N_.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),gv.current||__(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Lc.current,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),gn(this.notifyUpdate),gn(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=qr.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&q.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Vr){const n=Vr[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ne()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<rp.length;r++){const i=rp[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=P_(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Fr(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(c0(r)||d0(r))?r=parseFloat(r):!B3(r)&&yn.test(n)&&(r=K0(t,n)),this.setBaseTarget(t,ye(r)?r.get():r)),ye(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var s;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=Nd(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(r=o[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!ye(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new od),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){bd.render(this.render)}}class yv extends I_{constructor(){super(...arguments),this.KeyframeResolver=I3}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ye(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function vv(e,{style:t,vars:n},r,i){const s=e.style;let o;for(o in t)s[o]=t[o];i==null||i.applyProjectionStyles(s,r);for(o in n)s.setProperty(o,n[o])}function j_(e){return window.getComputedStyle(e)}class A_ extends yv{constructor(){super(...arguments),this.type="html",this.renderInstance=vv}readValueFromInstance(t,n){var r;if(qr.has(n))return(r=this.projection)!=null&&r.isProjecting?_c(n):YE(t,n);{const i=j_(t),s=(cd(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return mv(t,n)}build(t,n,r){Cd(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Pd(t,n,r)}}const xv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function R_(e,t,n,r){vv(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(xv.has(i)?i:Id(i),t.attrs[i])}class D_ extends yv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ne}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(qr.has(n)){const r=H0(n);return r&&r.default||0}return n=xv.has(n)?n:Id(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return lv(t,n,r)}build(t,n,r){iv(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){R_(t,n,r,i)}mount(t){this.isSVGTag=ov(t.tagName),super.mount(t)}}const M_=(e,t)=>_d(e)?new D_(t):new A_(t,{allowProjection:e!==w.Fragment});function _r(e,t,n){const r=e.getProps();return Nd(r,t,n!==void 0?n:r.custom,e)}const Oc=e=>Array.isArray(e);function L_(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Fr(n))}function O_(e){return Oc(e)?e[e.length-1]||0:e}function F_(e,t){const n=_r(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=O_(s[o]);L_(e,o,a)}}function V_(e){return!!(ye(e)&&e.add)}function Fc(e,t){const n=e.getValue("willChange");if(V_(n))return n.add(t);if(!n&&zt.WillChange){const r=new zt.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function wv(e){return e.props[cv]}const U_=e=>e!==null;function z_(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(U_),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const $_={type:"spring",stiffness:500,damping:25,restSpeed:10},B_=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),W_={type:"keyframes",duration:.8},H_={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},K_=(e,{keyframes:t})=>t.length>2?W_:qr.has(e)?e.startsWith("scale")?B_(t[1]):$_:H_;function G_({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:d,...f}){return!!Object.keys(f).length}const jd=(e,t,n,r={},i,s)=>o=>{const a=xd(r,e)||{},l=a.delay||r.delay||0;let{elapsed:d=0}=r;d=d-gt(l);const f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-d,onUpdate:u=>{t.set(u),a.onUpdate&&a.onUpdate(u)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:i};G_(a)||Object.assign(f,K_(e,f)),f.duration&&(f.duration=gt(f.duration)),f.repeatDelay&&(f.repeatDelay=gt(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let h=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(Ac(f),f.delay===0&&(h=!0)),(zt.instantAnimations||zt.skipAnimations)&&(h=!0,Ac(f),f.delay=0),f.allowFlatten=!a.type&&!a.ease,h&&!s&&t.get()!==void 0){const u=z_(f.keyframes,a);if(u!==void 0){q.update(()=>{f.onUpdate(u),f.onComplete()});return}}return a.isSync?new yd(f):new v3(f)};function q_({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function bv(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:o,...a}=t;r&&(s=r);const l=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in a){const h=e.getValue(f,e.latestValues[f]??null),u=a[f];if(u===void 0||d&&q_(d,f))continue;const p={delay:n,...xd(s||{},f)},m=h.get();if(m!==void 0&&!h.isAnimating&&!Array.isArray(u)&&u===m&&!p.velocity)continue;let g=!1;if(window.MotionHandoffAnimation){const y=wv(e);if(y){const v=window.MotionHandoffAnimation(y,f,q);v!==null&&(p.startTime=v,g=!0)}}Fc(e,f),h.start(jd(f,h,u,e.shouldReduceMotion&&$0.has(f)?{type:!1}:p,e,g));const b=h.animation;b&&l.push(b)}return o&&Promise.all(l).then(()=>{q.update(()=>{o&&F_(e,o)})}),l}function kv(e,t,n,r=0,i=1){const s=Array.from(e).sort((d,f)=>d.sortNodePosition(f)).indexOf(t),o=e.size,a=(o-1)*r;return typeof n=="function"?n(s,o):i===1?s*r:a-s*r}function Vc(e,t,n={}){var l;const r=_r(e,t,n.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(bv(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:f=0,staggerChildren:h,staggerDirection:u}=i;return Y_(e,t,d,f,h,u,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[d,f]=a==="beforeChildren"?[s,o]:[o,s];return d().then(()=>f())}else return Promise.all([s(),o(n.delay)])}function Y_(e,t,n=0,r=0,i=0,s=1,o){const a=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),a.push(Vc(l,t,{...o,delay:n+(typeof r=="function"?0:r)+kv(e.variantChildren,l,r,i,s)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(a)}function X_(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>Vc(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=Vc(e,t,n);else{const i=typeof t=="function"?_r(e,t,n.custom):t;r=Promise.all(bv(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}function Sv(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const Q_=Td.length;function Tv(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Tv(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<Q_;n++){const r=Td[n],i=e.props[r];(Ji(i)||i===!1)&&(t[r]=i)}return t}const J_=[...Sd].reverse(),Z_=Sd.length;function eN(e){return t=>Promise.all(t.map(({animation:n,options:r})=>X_(e,n,r)))}function tN(e){let t=eN(e),n=ip(),r=!0;const i=l=>(d,f)=>{var u;const h=_r(e,f,l==="exit"?(u=e.presenceContext)==null?void 0:u.custom:void 0);if(h){const{transition:p,transitionEnd:m,...g}=h;d={...d,...g,...m}}return d};function s(l){t=l(e)}function o(l){const{props:d}=e,f=Tv(e.parent)||{},h=[],u=new Set;let p={},m=1/0;for(let b=0;b<Z_;b++){const y=J_[b],v=n[y],x=d[y]!==void 0?d[y]:f[y],k=Ji(x),S=y===l?v.isActive:null;S===!1&&(m=b);let C=x===f[y]&&x!==d[y]&&k;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),v.protectedKeys={...p},!v.isActive&&S===null||!x&&!v.prevProp||va(x)||typeof x=="boolean")continue;const E=nN(v.prevProp,x);let T=E||y===l&&v.isActive&&!C&&k||b>m&&k,R=!1;const A=Array.isArray(x)?x:[x];let $=A.reduce(i(y),{});S===!1&&($={});const{prevResolvedValues:xe={}}=v,Re={...xe,...$},ot=W=>{T=!0,u.has(W)&&(R=!0,u.delete(W)),v.needsAnimating[W]=!0;const I=e.getValue(W);I&&(I.liveStyle=!1)};for(const W in Re){const I=$[W],D=xe[W];if(p.hasOwnProperty(W))continue;let _=!1;Oc(I)&&Oc(D)?_=!Sv(I,D):_=I!==D,_?I!=null?ot(W):u.add(W):I!==void 0&&u.has(W)?ot(W):v.protectedKeys[W]=!0}v.prevProp=x,v.prevResolvedValues=$,v.isActive&&(p={...p,...$}),r&&e.blockInitialAnimation&&(T=!1);const De=C&&E;T&&(!De||R)&&h.push(...A.map(W=>{const I={type:y};if(typeof W=="string"&&r&&!De&&e.manuallyAnimateOnMount&&e.parent){const{parent:D}=e,_=_r(D,W);if(D.enteringChildren&&_){const{delayChildren:P}=_.transition||{};I.delay=kv(D.enteringChildren,e,P)}}return{animation:W,options:I}}))}if(u.size){const b={};if(typeof d.initial!="boolean"){const y=_r(e,Array.isArray(d.initial)?d.initial[0]:d.initial);y&&y.transition&&(b.transition=y.transition)}u.forEach(y=>{const v=e.getBaseTarget(y),x=e.getValue(y);x&&(x.liveStyle=!0),b[y]=v??null}),h.push({animation:b})}let g=!!h.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(g=!1),r=!1,g?t(h):Promise.resolve()}function a(l,d){var h;if(n[l].isActive===d)return Promise.resolve();(h=e.variantChildren)==null||h.forEach(u=>{var p;return(p=u.animationState)==null?void 0:p.setActive(l,d)}),n[l].isActive=d;const f=o(l);for(const u in n)n[u].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=ip(),r=!0}}}function nN(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Sv(t,e):!1}function Tn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ip(){return{animate:Tn(!0),whileInView:Tn(),whileHover:Tn(),whileTap:Tn(),whileDrag:Tn(),whileFocus:Tn(),exit:Tn()}}class Sn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class rN extends Sn{constructor(t){super(t),t.animationState||(t.animationState=tN(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();va(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let iN=0;class sN extends Sn{constructor(){super(...arguments),this.id=iN++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const oN={animation:{Feature:rN},exit:{Feature:sN}};function es(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function vs(e){return{point:{x:e.pageX,y:e.pageY}}}const aN=e=>t=>kd(t)&&e(t,vs(t));function Ci(e,t,n,r){return es(e,t,aN(n),r)}const Cv=1e-4,lN=1-Cv,cN=1+Cv,Ev=.01,uN=0-Ev,dN=0+Ev;function be(e){return e.max-e.min}function fN(e,t,n){return Math.abs(e-t)<=n}function sp(e,t,n,r=.5){e.origin=r,e.originPoint=X(t.min,t.max,e.origin),e.scale=be(n)/be(t),e.translate=X(n.min,n.max,e.origin)-e.originPoint,(e.scale>=lN&&e.scale<=cN||isNaN(e.scale))&&(e.scale=1),(e.translate>=uN&&e.translate<=dN||isNaN(e.translate))&&(e.translate=0)}function Ei(e,t,n,r){sp(e.x,t.x,n.x,r?r.originX:void 0),sp(e.y,t.y,n.y,r?r.originY:void 0)}function op(e,t,n){e.min=n.min+t.min,e.max=e.min+be(t)}function hN(e,t,n){op(e.x,t.x,n.x),op(e.y,t.y,n.y)}function ap(e,t,n){e.min=t.min-n.min,e.max=e.min+be(t)}function _i(e,t,n){ap(e.x,t.x,n.x),ap(e.y,t.y,n.y)}function $e(e){return[e("x"),e("y")]}const _v=({current:e})=>e?e.ownerDocument.defaultView:null,lp=(e,t)=>Math.abs(e-t);function pN(e,t){const n=lp(e.x,t.x),r=lp(e.y,t.y);return Math.sqrt(n**2+r**2)}class Nv{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=dl(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,m=pN(u.offset,{x:0,y:0})>=this.distanceThreshold;if(!p&&!m)return;const{point:g}=u,{timestamp:b}=de;this.history.push({...g,timestamp:b});const{onStart:y,onMove:v}=this.handlers;p||(y&&y(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,u)},this.handlePointerMove=(u,p)=>{this.lastMoveEvent=u,this.lastMoveEventInfo=ul(p,this.transformPagePoint),q.update(this.updatePoint,!0)},this.handlePointerUp=(u,p)=>{this.end();const{onEnd:m,onSessionEnd:g,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=dl(u.type==="pointercancel"?this.lastMoveEventInfo:ul(p,this.transformPagePoint),this.history);this.startEvent&&m&&m(u,y),g&&g(u,y)},!kd(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=o,this.contextWindow=i||window;const a=vs(t),l=ul(a,this.transformPagePoint),{point:d}=l,{timestamp:f}=de;this.history=[{...d,timestamp:f}];const{onSessionStart:h}=n;h&&h(t,dl(l,this.history)),this.removeListeners=ms(Ci(this.contextWindow,"pointermove",this.handlePointerMove),Ci(this.contextWindow,"pointerup",this.handlePointerUp),Ci(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),gn(this.updatePoint)}}function ul(e,t){return t?{point:t(e.point)}:e}function cp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function dl({point:e},t){return{point:e,delta:cp(e,Pv(t)),offset:cp(e,mN(t)),velocity:gN(t,.1)}}function mN(e){return e[0]}function Pv(e){return e[e.length-1]}function gN(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Pv(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>gt(t)));)n--;if(!r)return{x:0,y:0};const s=yt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function yN(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?X(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?X(n,e,r.max):Math.min(e,n)),e}function up(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function vN(e,{top:t,left:n,bottom:r,right:i}){return{x:up(e.x,n,i),y:up(e.y,t,r)}}function dp(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function xN(e,t){return{x:dp(e.x,t.x),y:dp(e.y,t.y)}}function wN(e,t){let n=.5;const r=be(e),i=be(t);return i>r?n=Yi(t.min,t.max-r,e.min):r>i&&(n=Yi(e.min,e.max-i,t.min)),Ut(0,1,n)}function bN(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Uc=.35;function kN(e=Uc){return e===!1?e=0:e===!0&&(e=Uc),{x:fp(e,"left","right"),y:fp(e,"top","bottom")}}function fp(e,t,n){return{min:hp(e,t),max:hp(e,n)}}function hp(e,t){return typeof e=="number"?e:e[t]||0}const SN=new WeakMap;class TN{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ne(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=h=>{const{dragSnapToOrigin:u}=this.getProps();u?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(vs(h).point)},o=(h,u)=>{const{drag:p,dragPropagation:m,onDragStart:g}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=M3(p),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=u,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),$e(y=>{let v=this.getAxisMotionValue(y).get()||0;if(vt.test(v)){const{projection:x}=this.visualElement;if(x&&x.layout){const k=x.layout.layoutBox[y];k&&(v=be(k)*(parseFloat(v)/100))}}this.originPoint[y]=v}),g&&q.postRender(()=>g(h,u)),Fc(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},a=(h,u)=>{this.latestPointerEvent=h,this.latestPanInfo=u;const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:g,onDrag:b}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:y}=u;if(m&&this.currentDirection===null){this.currentDirection=CN(y),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",u.point,y),this.updateAxis("y",u.point,y),this.visualElement.render(),b&&b(h,u)},l=(h,u)=>{this.latestPointerEvent=h,this.latestPanInfo=u,this.stop(h,u),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>$e(h=>{var u;return this.getAnimationState(h)==="paused"&&((u=this.getAxisMotionValue(h).animation)==null?void 0:u.play())}),{dragSnapToOrigin:f}=this.getProps();this.panSession=new Nv(t,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:r,contextWindow:_v(this.visualElement)})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!i||!r)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&q.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!zs(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=yN(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,i=this.constraints;t&&hr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=vN(r.layoutBox,t):this.constraints=!1,this.elastic=kN(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&$e(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=bN(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!hr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=E_(r,i.root,this.visualElement.getTransformPagePoint());let o=xN(i.layout.layoutBox,s);if(n){const a=n(S_(o));this.hasMutatedConstraints=!!a,a&&(o=fv(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},d=$e(f=>{if(!zs(f,n,this.currentDirection))return;let h=l&&l[f]||{};o&&(h={min:0,max:0});const u=i?200:1e6,p=i?40:1e7,m={type:"inertia",velocity:r?t[f]:0,bounceStiffness:u,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(f,m)});return Promise.all(d).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Fc(this.visualElement,t),r.start(jd(t,r,0,n,this.visualElement,!1))}stopAnimation(){$e(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){$e(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){$e(n=>{const{drag:r}=this.getProps();if(!zs(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(t[n]-X(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!hr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};$e(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=wN({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),$e(o=>{if(!zs(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:d}=this.constraints[o];a.set(X(l,d,i[o]))})}addListeners(){if(!this.visualElement.current)return;SN.set(this.visualElement,this);const t=this.visualElement.current,n=Ci(t,"pointerdown",l=>{const{drag:d,dragListener:f=!0}=this.getProps();d&&f&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();hr(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),q.read(r);const o=es(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:d})=>{this.isDragging&&d&&($e(f=>{const h=this.getAxisMotionValue(f);h&&(this.originPoint[f]+=l[f].translate,h.set(h.get()+l[f].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Uc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function zs(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function CN(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class EN extends Sn{constructor(t){super(t),this.removeGroupControls=Ge,this.removeListeners=Ge,this.controls=new TN(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ge}unmount(){this.removeGroupControls(),this.removeListeners()}}const pp=e=>(t,n)=>{e&&q.postRender(()=>e(t,n))};class _N extends Sn{constructor(){super(...arguments),this.removePointerDownListener=Ge}onPointerDown(t){this.session=new Nv(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:_v(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:pp(t),onStart:pp(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&q.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Ci(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const uo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function mp(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const oi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(M.test(e))e=parseFloat(e);else return e;const n=mp(e,t.target.x),r=mp(e,t.target.y);return`${n}% ${r}%`}},NN={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=yn.parse(e);if(i.length>5)return r;const s=yn.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const d=X(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=d),typeof i[3+o]=="number"&&(i[3+o]/=d),s(i)}};let fl=!1;class PN extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;Q3(IN),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),fl&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),uo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,{projection:o}=r;return o&&(o.isPresent=s,fl=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==s?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||q.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),bd.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;fl=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Iv(e){const[t,n]=W3(),r=w.useContext(l0);return c.jsx(PN,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(uv),isPresent:t,safeToRemove:n})}const IN={borderRadius:{...oi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:oi,borderTopRightRadius:oi,borderBottomLeftRadius:oi,borderBottomRightRadius:oi,boxShadow:NN};function jN(e,t,n){const r=ye(e)?e:Fr(e);return r.start(jd("",r,t,n)),r.animation}const AN=(e,t)=>e.depth-t.depth;class RN{constructor(){this.children=[],this.isDirty=!1}add(t){nd(this.children,t),this.isDirty=!0}remove(t){rd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(AN),this.isDirty=!1,this.children.forEach(t)}}function DN(e,t){const n=Pe.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(gn(r),e(s-t))};return q.setup(r,!0),()=>gn(r)}const jv=["TopLeft","TopRight","BottomLeft","BottomRight"],MN=jv.length,gp=e=>typeof e=="string"?parseFloat(e):e,yp=e=>typeof e=="number"||M.test(e);function LN(e,t,n,r,i,s){i?(e.opacity=X(0,n.opacity??1,ON(r)),e.opacityExit=X(t.opacity??1,0,FN(r))):s&&(e.opacity=X(t.opacity??1,n.opacity??1,r));for(let o=0;o<MN;o++){const a=`border${jv[o]}Radius`;let l=vp(t,a),d=vp(n,a);if(l===void 0&&d===void 0)continue;l||(l=0),d||(d=0),l===0||d===0||yp(l)===yp(d)?(e[a]=Math.max(X(gp(l),gp(d),r),0),(vt.test(d)||vt.test(l))&&(e[a]+="%")):e[a]=d}(t.rotate||n.rotate)&&(e.rotate=X(t.rotate||0,n.rotate||0,r))}function vp(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const ON=Av(0,.5,x0),FN=Av(.5,.95,Ge);function Av(e,t,n){return r=>r<e?0:r>t?1:n(Yi(e,t,r))}function xp(e,t){e.min=t.min,e.max=t.max}function ze(e,t){xp(e.x,t.x),xp(e.y,t.y)}function wp(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function bp(e,t,n,r,i){return e-=t,e=qo(e,1/n,r),i!==void 0&&(e=qo(e,1/i,r)),e}function VN(e,t=0,n=1,r=.5,i,s=e,o=e){if(vt.test(t)&&(t=parseFloat(t),t=X(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=X(s.min,s.max,r);e===s&&(a-=t),e.min=bp(e.min,t,n,a,i),e.max=bp(e.max,t,n,a,i)}function kp(e,t,[n,r,i],s,o){VN(e,t[n],t[r],t[i],t.scale,s,o)}const UN=["x","scaleX","originX"],zN=["y","scaleY","originY"];function Sp(e,t,n,r){kp(e.x,t,UN,n?n.x:void 0,r?r.x:void 0),kp(e.y,t,zN,n?n.y:void 0,r?r.y:void 0)}function Tp(e){return e.translate===0&&e.scale===1}function Rv(e){return Tp(e.x)&&Tp(e.y)}function Cp(e,t){return e.min===t.min&&e.max===t.max}function $N(e,t){return Cp(e.x,t.x)&&Cp(e.y,t.y)}function Ep(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Dv(e,t){return Ep(e.x,t.x)&&Ep(e.y,t.y)}function _p(e){return be(e.x)/be(e.y)}function Np(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class BN{constructor(){this.members=[]}add(t){nd(this.members,t),t.scheduleRender()}remove(t){if(rd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function WN(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:f,rotateX:h,rotateY:u,skewX:p,skewY:m}=n;d&&(r=`perspective(${d}px) ${r}`),f&&(r+=`rotate(${f}deg) `),h&&(r+=`rotateX(${h}deg) `),u&&(r+=`rotateY(${u}deg) `),p&&(r+=`skewX(${p}deg) `),m&&(r+=`skewY(${m}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const hl=["","X","Y","Z"],HN=1e3;let KN=0;function pl(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Mv(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=wv(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",q,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Mv(r)}function Lv({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=KN++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(YN),this.nodes.forEach(ZN),this.nodes.forEach(eP),this.nodes.forEach(XN)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new RN)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new od),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Q0(o)&&!z3(o),this.instance=o;const{layoutId:a,layout:l,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),e){let f,h=0;const u=()=>this.root.updateBlockedByResize=!1;q.read(()=>{h=window.innerWidth}),e(o,()=>{const p=window.innerWidth;p!==h&&(h=p,this.root.updateBlockedByResize=!0,f&&f(),f=DN(u,250),uo.hasAnimatedSinceResize&&(uo.hasAnimatedSinceResize=!1,this.nodes.forEach(jp)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&d&&(a||l)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:u,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||d.getDefaultTransition()||sP,{onLayoutAnimationStart:g,onLayoutAnimationComplete:b}=d.getProps(),y=!this.targetLayout||!Dv(this.targetLayout,p),v=!h&&u;if(this.options.layoutRoot||this.resumeFrom||v||h&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const x={...xd(m,"layout"),onPlay:g,onComplete:b};(d.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x),this.setAnimationOrigin(f,v)}else h||jp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),gn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(tP),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Mv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const h=this.path[f];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Pp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ip);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(JN),this.nodes.forEach(GN),this.nodes.forEach(qN)):this.nodes.forEach(Ip),this.clearAllSnapshots();const a=Pe.now();de.delta=Ut(0,1e3/60,a-de.timestamp),de.timestamp=a,de.isProcessing=!0,nl.update.process(de),nl.preRender.process(de),nl.render.process(de),de.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,bd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(QN),this.sharedNodes.forEach(nP)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,q.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){q.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!be(this.snapshot.measuredBox.x)&&!be(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ne(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Rv(this.projectionDelta),l=this.getTransformTemplate(),d=l?l(this.latestValues,""):void 0,f=d!==this.prevTransformTemplateValue;o&&this.instance&&(a||In(this.latestValues)||f)&&(i(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),oP(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:o}=this.options;if(!o)return ne();const a=o.measureViewportBox();if(!(((d=this.scroll)==null?void 0:d.wasRoot)||this.path.some(aP))){const{scroll:f}=this.root;f&&(pr(a.x,f.offset.x),pr(a.y,f.offset.y))}return a}removeElementScroll(o){var l;const a=ne();if(ze(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let d=0;d<this.path.length;d++){const f=this.path[d],{scroll:h,options:u}=f;f!==this.root&&h&&u.layoutScroll&&(h.wasRoot&&ze(a,o),pr(a.x,h.offset.x),pr(a.y,h.offset.y))}return a}applyTransform(o,a=!1){const l=ne();ze(l,o);for(let d=0;d<this.path.length;d++){const f=this.path[d];!a&&f.options.layoutScroll&&f.scroll&&f!==f.root&&mr(l,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),In(f.latestValues)&&mr(l,f.latestValues)}return In(this.latestValues)&&mr(l,this.latestValues),l}removeTransform(o){const a=ne();ze(a,o);for(let l=0;l<this.path.length;l++){const d=this.path[l];if(!d.instance||!In(d.latestValues))continue;Dc(d.latestValues)&&d.updateSnapshot();const f=ne(),h=d.measurePageBox();ze(f,h),Sp(a,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,f)}return In(this.latestValues)&&Sp(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==de.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var u;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(u=this.parent)!=null&&u.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=de.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ne(),this.relativeTargetOrigin=ne(),_i(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),ze(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ne(),this.targetWithTransforms=ne()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),hN(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ze(this.target,this.layout.layoutBox),pv(this.target,this.targetDelta)):ze(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ne(),this.relativeTargetOrigin=ne(),_i(this.relativeTargetOrigin,this.target,p.target),ze(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Dc(this.parent.latestValues)||hv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var m;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===de.timestamp&&(l=!1),l)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;ze(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,u=this.treeScale.y;C_(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=ne());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(wp(this.prevProjectionDelta.x,this.projectionDelta.x),wp(this.prevProjectionDelta.y,this.projectionDelta.y)),Ei(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==u||!Np(this.projectionDelta.x,this.prevProjectionDelta.x)||!Np(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=gr(),this.projectionDelta=gr(),this.projectionDeltaWithTransform=gr()}setAnimationOrigin(o,a=!1){const l=this.snapshot,d=l?l.latestValues:{},f={...this.latestValues},h=gr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const u=ne(),p=l?l.source:void 0,m=this.layout?this.layout.source:void 0,g=p!==m,b=this.getStack(),y=!b||b.members.length<=1,v=!!(g&&!y&&this.options.crossfade===!0&&!this.path.some(iP));this.animationProgress=0;let x;this.mixTargetDelta=k=>{const S=k/1e3;Ap(h.x,o.x,S),Ap(h.y,o.y,S),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(_i(u,this.layout.layoutBox,this.relativeParent.layout.layoutBox),rP(this.relativeTarget,this.relativeTargetOrigin,u,S),x&&$N(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=ne()),ze(x,this.relativeTarget)),g&&(this.animationValues=f,LN(f,d,this.latestValues,S,v,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,d;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(d=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||d.stop(),this.pendingAnimation&&(gn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=q.update(()=>{uo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Fr(0)),this.currentAnimation=jN(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),o.onUpdate&&o.onUpdate(f)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(HN),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:d,latestValues:f}=o;if(!(!a||!l||!d)){if(this!==o&&this.layout&&d&&Ov(this.options.animationType,this.layout.layoutBox,d.layoutBox)){l=this.target||ne();const h=be(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const u=be(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+u}ze(a,l),mr(a,f),Ei(this.projectionDeltaWithTransform,this.layoutCorrected,a,f)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new BN),this.sharedNodes.get(o).add(a);const d=a.options.initialPromotionConfig;a.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const d=this.getStack();d&&d.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const d={};l.z&&pl("z",o,d,this.animationValues);for(let f=0;f<hl.length;f++)pl(`rotate${hl[f]}`,o,d,this.animationValues),pl(`skew${hl[f]}`,o,d,this.animationValues);o.render();for(const f in d)o.setStaticValue(f,d[f]),this.animationValues&&(this.animationValues[f]=d[f]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=co(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=co(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!In(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const f=d.animationValues||d.latestValues;this.applyTransformsToTarget();let h=WN(this.projectionDeltaWithTransform,this.treeScale,f);l&&(h=l(f,h)),o.transform=h;const{x:u,y:p}=this.projectionDelta;o.transformOrigin=`${u.origin*100}% ${p.origin*100}% 0`,d.animationValues?o.opacity=d===this?f.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:o.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const m in Zi){if(f[m]===void 0)continue;const{correct:g,applyTo:b,isCSSVariable:y}=Zi[m],v=h==="none"?f[m]:g(f[m],d);if(b){const x=b.length;for(let k=0;k<x;k++)o[b[k]]=v}else y?this.options.visualElement.renderState.vars[m]=v:o[m]=v}this.options.layoutId&&(o.pointerEvents=d===this?co(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Pp),this.root.sharedNodes.clear()}}}function GN(e){e.updateLayout()}function qN(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=t.source!==e.layout.source;s==="size"?$e(h=>{const u=o?t.measuredBox[h]:t.layoutBox[h],p=be(u);u.min=r[h].min,u.max=u.min+p}):Ov(s,t.layoutBox,r)&&$e(h=>{const u=o?t.measuredBox[h]:t.layoutBox[h],p=be(r[h]);u.max=u.min+p,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+p)});const a=gr();Ei(a,r,t.layoutBox);const l=gr();o?Ei(l,e.applyTransform(i,!0),t.measuredBox):Ei(l,r,t.layoutBox);const d=!Rv(a);let f=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:u,layout:p}=h;if(u&&p){const m=ne();_i(m,t.layoutBox,u.layoutBox);const g=ne();_i(g,r,p.layoutBox),Dv(m,g)||(f=!0),h.options.layoutRoot&&(e.relativeTarget=g,e.relativeTargetOrigin=m,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:d,hasRelativeLayoutChanged:f})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function YN(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function XN(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function QN(e){e.clearSnapshot()}function Pp(e){e.clearMeasurements()}function Ip(e){e.isLayoutDirty=!1}function JN(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function jp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function ZN(e){e.resolveTargetDelta()}function eP(e){e.calcProjection()}function tP(e){e.resetSkewAndRotation()}function nP(e){e.removeLeadSnapshot()}function Ap(e,t,n){e.translate=X(t.translate,0,n),e.scale=X(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Rp(e,t,n,r){e.min=X(t.min,n.min,r),e.max=X(t.max,n.max,r)}function rP(e,t,n,r){Rp(e.x,t.x,n.x,r),Rp(e.y,t.y,n.y,r)}function iP(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const sP={duration:.45,ease:[.4,0,.1,1]},Dp=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Mp=Dp("applewebkit/")&&!Dp("chrome/")?Math.round:Ge;function Lp(e){e.min=Mp(e.min),e.max=Mp(e.max)}function oP(e){Lp(e.x),Lp(e.y)}function Ov(e,t,n){return e==="position"||e==="preserve-aspect"&&!fN(_p(t),_p(n),.2)}function aP(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const lP=Lv({attachResizeListener:(e,t)=>es(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ml={current:void 0},Fv=Lv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ml.current){const e=new lP({});e.mount(window),e.setOptions({layoutScroll:!0}),ml.current=e}return ml.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),cP={pan:{Feature:_N},drag:{Feature:EN,ProjectionNode:Fv,MeasureLayout:Iv}};function Op(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&q.postRender(()=>s(t,vs(t)))}class uP extends Sn{mount(){const{current:t}=this.node;t&&(this.unmount=L3(t,(n,r)=>(Op(this.node,r,"Start"),i=>Op(this.node,i,"End"))))}unmount(){}}class dP extends Sn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ms(es(this.node.current,"focus",()=>this.onFocus()),es(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Fp(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&q.postRender(()=>s(t,vs(t)))}class fP extends Sn{mount(){const{current:t}=this.node;t&&(this.unmount=U3(t,(n,r)=>(Fp(this.node,r,"Start"),(i,{success:s})=>Fp(this.node,i,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const zc=new WeakMap,gl=new WeakMap,hP=e=>{const t=zc.get(e.target);t&&t(e)},pP=e=>{e.forEach(hP)};function mP({root:e,...t}){const n=e||document;gl.has(n)||gl.set(n,{});const r=gl.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(pP,{root:e,...t})),r[i]}function gP(e,t,n){const r=mP(t);return zc.set(e,n),r.observe(e),()=>{zc.delete(e),r.unobserve(e)}}const yP={some:0,all:1};class vP extends Sn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:yP[i]},a=l=>{const{isIntersecting:d}=l;if(this.isInView===d||(this.isInView=d,s&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:f,onViewportLeave:h}=this.node.getProps(),u=d?f:h;u&&u(l)};return gP(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(xP(t,n))&&this.startObserver()}unmount(){}}function xP({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const wP={inView:{Feature:vP},tap:{Feature:fP},focus:{Feature:dP},hover:{Feature:uP}},bP={layout:{ProjectionNode:Fv,MeasureLayout:Iv}},kP={...oN,...wP,...cP,...bP},$s=k_(kP,M_),SP=({onLockStateChange:e,isPowerOn:t,onPowerStateChange:n,isPlaying:r,isDarkMode:i=!1,isAuthenticated:s=!1})=>{const[,o]=w.useState(!1),[a,l]=w.useState(0),d=()=>{o(!0),setTimeout(()=>{if(o(!1),s)n(!0);else{const f=!t;n(f),e(!f)}},300)};return w.useEffect(()=>{let f;if(r){const h=()=>{l(u=>(u+.5)%360),f=requestAnimationFrame(h)};f=requestAnimationFrame(h)}return()=>{f&&cancelAnimationFrame(f)}},[r]),c.jsxs("div",{className:"relative w-72 h-72",children:[c.jsx("div",{className:`absolute inset-0 rounded-full backdrop-blur-md border transition-all duration-500 ${i?"bg-slate-900/20 border-slate-700/30":"bg-white/20 border-orange-200/40"} ${t?"shadow-2xl shadow-orange-500/20":"shadow-lg"}`}),c.jsx("div",{className:`absolute inset-6 rounded-full backdrop-blur-md border transition-all duration-300 ${i?"bg-slate-900/30 border-slate-700/40":"bg-white/40 border-orange-200/50"} ${t?"shadow-xl shadow-orange-400/15":"shadow-lg"}`}),c.jsxs("div",{className:`absolute inset-12 rounded-full border transition-all duration-300 ${i?"bg-slate-900/60 border-slate-700/50":"bg-white/70 border-orange-200/60"} ${t?"shadow-2xl border-orange-300/70":"shadow-lg"} hover:shadow-xl`,children:[c.jsx($s.button,{className:`absolute top-1/2 left-1/2 w-24 h-24 rounded-full border transition-all duration-300 focus:outline-none flex items-center justify-center ${t?"bg-[#c68346] text-white border-orange-400/60 shadow-xl shadow-orange-500/30":i?"bg-slate-800 text-slate-400 border-slate-700/50 hover:bg-slate-700":"bg-[#fbc28c] text-gray-600 border-orange-200/50 hover:bg-gray-50"}`,style:{x:"-50%",y:"-50%"},onClick:d,transition:{duration:.1},children:c.jsx(v2,{size:32,className:"transition-all duration-300"})}),(t||s)&&c.jsx($s.div,{className:"absolute w-3 h-3 rounded-full bg-[#c68346] shadow-lg",style:{top:"20px",left:"calc(50% - 6px)",transformOrigin:"center 64px",rotate:a,boxShadow:"0 0 12px rgba(198, 131, 70, 0.6)"}})]}),(t||s)&&c.jsx($s.div,{className:"absolute inset-0 rounded-full bg-orange-500/5 backdrop-blur-sm pointer-events-none",initial:{scale:1,opacity:0},animate:r?{scale:1,opacity:.6}:{scale:1,opacity:0},transition:{duration:.8,ease:"easeInOut"}}),(t||s)&&r&&c.jsx($s.div,{className:"absolute inset-0 rounded-full bg-orange-500/3 backdrop-blur-sm pointer-events-none",initial:{scale:1,opacity:0},animate:{scale:[1,1.02,1],opacity:[0,.4,0]},transition:{duration:3,repeat:1/0,ease:"easeInOut",delay:.5}})]})},kt={card:e=>`
    rounded-2xl backdrop-blur-md border transition-all duration-300 ease-out
    ${e?"bg-slate-900/50 border-slate-700/50":"bg-white/70 border-gray-200/50"} 
    shadow-lg hover:shadow-xl
  `.trim(),button:e=>`
    p-3 rounded-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 
    backdrop-blur-md border group
    ${e?"bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50":"bg-white/50 border-gray-200/50 hover:bg-white/70"}
    shadow-lg hover:shadow-xl
  `.trim(),primaryButton:`
    p-2 rounded-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 group 
    bg-[#c68346] text-white shadow-lg hover:shadow-orange-500/25
    border border-orange-400/30
  `.trim(),text:{primary:e=>e?"text-slate-100":"text-gray-900",secondary:e=>e?"text-slate-200":"text-gray-800",muted:e=>e?"text-slate-400":"text-gray-600",subtle:e=>e?"text-slate-500":"text-gray-500",accent:"text-[#c68346]"},background:{page:e=>e?"bg-slate-900":"bg-orange-50",glass:e=>e?"bg-slate-900/50":"bg-white/70",hover:e=>e?"bg-slate-900/30":"bg-white/50",active:e=>e?"bg-slate-800/50":"bg-white/90"}},TP=({title:e,tracks:t,currentTrack:n,onTrackSelect:r,playlists:i=[],onPlaylistSelect:s,showBackButton:o=!1,onBackClick:a,isDarkMode:l=!1})=>{const d=w.useRef(null),[f,h]=w.useState(!1),[u,p]=w.useState(n),m=()=>{d.current&&d.current.scrollTo({top:0,behavior:"smooth"})},g=()=>{h(!0),m()},b=x=>{s&&s(x),h(!1),m()},y=()=>{h(!1),m()},v=x=>{p(x),r(x)};return c.jsxs("div",{className:"h-72 w-full overflow-hidden relative flex flex-col",children:[c.jsxs("div",{className:"flex justify-between items-center mb-1 pt-4 px-6",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[o&&c.jsx("button",{onClick:a,className:`${kt.text.muted(l)} hover:${kt.text.primary(l)} focus:outline-none transition-colors duration-300`,"aria-label":"Back to albums",children:"←"}),c.jsx("h3",{className:`text-lg font-semibold ${kt.text.primary(l)}`,children:f?"Playlists":e})]}),i.length>0&&c.jsx("button",{onClick:f?y:g,className:`p-2 rounded-lg backdrop-blur-md border transition-all duration-300 hover:scale-110 active:scale-95 ${l?"bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 text-slate-300":"bg-white/50 border-gray-200/50 hover:bg-white/70 text-gray-700"} shadow-lg hover:shadow-xl`,children:c.jsx(f2,{className:"w-4 h-4"})})]}),c.jsx("div",{ref:d,className:"flex-1 overflow-y-auto hide-scrollbar px-6 pb-4 mb-4",children:f?c.jsx("ul",{className:"space-y-0",children:i.sort((x,k)=>k.trackCount-x.trackCount).map(x=>c.jsx("li",{className:"h-10",children:c.jsx("button",{onClick:()=>b(x),className:`w-full h-full text-left px-3 py-1 rounded text-sm transition-colors ${l?"hover:bg-slate-800/30":"hover:bg-white/40"}`,children:c.jsxs("div",{className:"flex items-center h-full",children:[c.jsx("span",{className:`font-medium truncate ${kt.text.primary(l)}`,children:x.name}),c.jsxs("span",{className:`text-xs ml-1 flex-shrink-0 ${kt.text.subtle(l)}`,children:["(",x.trackCount," ",x.trackCount===1?"track":"tracks",")"]})]})})},x.id))}):c.jsx("ul",{className:"space-y-0",children:t.map(x=>c.jsx("li",{className:"h-10",children:c.jsx("button",{className:`w-full h-full text-left px-3 py-1 rounded text-sm transition-colors ${x.id===u?"bg-[#c68346] text-white":l?"hover:bg-slate-800/30":"hover:bg-white/40"}`,onClick:()=>v(x.id),children:c.jsxs("div",{className:"flex justify-between items-center h-full",children:[c.jsx("span",{className:`font-medium truncate ${x.id===u?"text-white":kt.text.primary(l)}`,children:x.name}),c.jsx("span",{className:`text-xs truncate ml-2 ${x.id===u?"text-orange-100":kt.text.subtle(l)}`,children:x.artist.split(" ")[0]})]})})},x.id))})})]})};var Vv={exports:{}};(function(e){var t=function(){var n="https://api.spotify.com/v1",r=null,i=null,s=function(u,p){return u.abort=p,u},o=function(u,p){var m;if(i!==null){var g=i.defer();u(function(b){g.resolve(b)},function(b){g.reject(b)}),m=g.promise}else window.Promise&&(m=new window.Promise(u));return m?new s(m,p):null},a=function(){var u=Array.prototype.slice.call(arguments),p=u[0],m=u.slice(1);return p=p||{},m.forEach(function(g){for(var b in g)g.hasOwnProperty(b)&&(p[b]=g[b])}),p},l=function(u,p){var m="";for(var g in p)if(p.hasOwnProperty(g)){var b=p[g];m+=encodeURIComponent(g)+"="+encodeURIComponent(b)+"&"}return m.length>0&&(m=m.substring(0,m.length-1),u=u+"?"+m),u},d=function(u,p){var m=new XMLHttpRequest,g=function(b,y){function v(C){b&&b(C),p&&p(null,C)}function x(){y&&y(m),p&&p(m,null)}var k=u.type||"GET";if(m.open(k,l(u.url,u.params)),r&&m.setRequestHeader("Authorization","Bearer "+r),m.onreadystatechange=function(){if(m.readyState===4){var C=null;try{C=m.responseText?JSON.parse(m.responseText):""}catch(E){console.error(E)}m.status>=200&&m.status<300?v(C):x()}},k==="GET")m.send(null);else{var S=null;u.postData&&(u.contentType==="image/jpeg"?(S=u.postData,m.setRequestHeader("Content-Type",u.contentType)):(S=JSON.stringify(u.postData),m.setRequestHeader("Content-Type","application/json"))),m.send(S)}};return p?(g(),null):o(g,function(){m.abort()})},f=function(u,p,m,g){var b={},y=null;typeof p=="object"?(b=p,y=m):typeof p=="function"&&(y=p);var v=u.type||"GET";return v!=="GET"&&u.postData&&!g?u.postData=a(u.postData,b):u.params=a(u.params,b),d(u,y)},h=function(){};return h.prototype={constructor:t},h.prototype.getGeneric=function(u,p){var m={url:u};return f(m,p)},h.prototype.getMe=function(u,p){var m={url:n+"/me"};return f(m,u,p)},h.prototype.getMySavedTracks=function(u,p){var m={url:n+"/me/tracks"};return f(m,u,p)},h.prototype.addToMySavedTracks=function(u,p,m){var g={url:n+"/me/tracks",type:"PUT",postData:u};return f(g,p,m)},h.prototype.removeFromMySavedTracks=function(u,p,m){var g={url:n+"/me/tracks",type:"DELETE",postData:u};return f(g,p,m)},h.prototype.containsMySavedTracks=function(u,p,m){var g={url:n+"/me/tracks/contains",params:{ids:u.join(",")}};return f(g,p,m)},h.prototype.getMySavedAlbums=function(u,p){var m={url:n+"/me/albums"};return f(m,u,p)},h.prototype.addToMySavedAlbums=function(u,p,m){var g={url:n+"/me/albums",type:"PUT",postData:u};return f(g,p,m)},h.prototype.removeFromMySavedAlbums=function(u,p,m){var g={url:n+"/me/albums",type:"DELETE",postData:u};return f(g,p,m)},h.prototype.containsMySavedAlbums=function(u,p,m){var g={url:n+"/me/albums/contains",params:{ids:u.join(",")}};return f(g,p,m)},h.prototype.getMyTopArtists=function(u,p){var m={url:n+"/me/top/artists"};return f(m,u,p)},h.prototype.getMyTopTracks=function(u,p){var m={url:n+"/me/top/tracks"};return f(m,u,p)},h.prototype.getMyRecentlyPlayedTracks=function(u,p){var m={url:n+"/me/player/recently-played"};return f(m,u,p)},h.prototype.followUsers=function(u,p){var m={url:n+"/me/following/",type:"PUT",params:{ids:u.join(","),type:"user"}};return f(m,p)},h.prototype.followArtists=function(u,p){var m={url:n+"/me/following/",type:"PUT",params:{ids:u.join(","),type:"artist"}};return f(m,p)},h.prototype.followPlaylist=function(u,p,m){var g={url:n+"/playlists/"+u+"/followers",type:"PUT",postData:{}};return f(g,p,m)},h.prototype.unfollowUsers=function(u,p){var m={url:n+"/me/following/",type:"DELETE",params:{ids:u.join(","),type:"user"}};return f(m,p)},h.prototype.unfollowArtists=function(u,p){var m={url:n+"/me/following/",type:"DELETE",params:{ids:u.join(","),type:"artist"}};return f(m,p)},h.prototype.unfollowPlaylist=function(u,p){var m={url:n+"/playlists/"+u+"/followers",type:"DELETE"};return f(m,p)},h.prototype.isFollowingUsers=function(u,p){var m={url:n+"/me/following/contains",type:"GET",params:{ids:u.join(","),type:"user"}};return f(m,p)},h.prototype.isFollowingArtists=function(u,p){var m={url:n+"/me/following/contains",type:"GET",params:{ids:u.join(","),type:"artist"}};return f(m,p)},h.prototype.areFollowingPlaylist=function(u,p,m){var g={url:n+"/playlists/"+u+"/followers/contains",type:"GET",params:{ids:p.join(",")}};return f(g,m)},h.prototype.getFollowedArtists=function(u,p){var m={url:n+"/me/following",type:"GET",params:{type:"artist"}};return f(m,u,p)},h.prototype.getUser=function(u,p,m){var g={url:n+"/users/"+encodeURIComponent(u)};return f(g,p,m)},h.prototype.getUserPlaylists=function(u,p,m){var g;return typeof u=="string"?g={url:n+"/users/"+encodeURIComponent(u)+"/playlists"}:(g={url:n+"/me/playlists"},m=p,p=u),f(g,p,m)},h.prototype.getPlaylist=function(u,p,m){var g={url:n+"/playlists/"+u};return f(g,p,m)},h.prototype.getPlaylistTracks=function(u,p,m){var g={url:n+"/playlists/"+u+"/tracks"};return f(g,p,m)},h.prototype.getPlaylistCoverImage=function(u,p){var m={url:n+"/playlists/"+u+"/images"};return f(m,p)},h.prototype.createPlaylist=function(u,p,m){var g={url:n+"/users/"+encodeURIComponent(u)+"/playlists",type:"POST",postData:p};return f(g,p,m)},h.prototype.changePlaylistDetails=function(u,p,m){var g={url:n+"/playlists/"+u,type:"PUT",postData:p};return f(g,p,m)},h.prototype.addTracksToPlaylist=function(u,p,m,g){var b={url:n+"/playlists/"+u+"/tracks",type:"POST",postData:{uris:p}};return f(b,m,g,!0)},h.prototype.replaceTracksInPlaylist=function(u,p,m){var g={url:n+"/playlists/"+u+"/tracks",type:"PUT",postData:{uris:p}};return f(g,{},m)},h.prototype.reorderTracksInPlaylist=function(u,p,m,g,b){var y={url:n+"/playlists/"+u+"/tracks",type:"PUT",postData:{range_start:p,insert_before:m}};return f(y,g,b)},h.prototype.removeTracksFromPlaylist=function(u,p,m){var g=p.map(function(y){return typeof y=="string"?{uri:y}:y}),b={url:n+"/playlists/"+u+"/tracks",type:"DELETE",postData:{tracks:g}};return f(b,{},m)},h.prototype.removeTracksFromPlaylistWithSnapshotId=function(u,p,m,g){var b=p.map(function(v){return typeof v=="string"?{uri:v}:v}),y={url:n+"/playlists/"+u+"/tracks",type:"DELETE",postData:{tracks:b,snapshot_id:m}};return f(y,{},g)},h.prototype.removeTracksFromPlaylistInPositions=function(u,p,m,g){var b={url:n+"/playlists/"+u+"/tracks",type:"DELETE",postData:{positions:p,snapshot_id:m}};return f(b,{},g)},h.prototype.uploadCustomPlaylistCoverImage=function(u,p,m){var g={url:n+"/playlists/"+u+"/images",type:"PUT",postData:p.replace(/^data:image\/jpeg;base64,/,""),contentType:"image/jpeg"};return f(g,{},m)},h.prototype.getAlbum=function(u,p,m){var g={url:n+"/albums/"+u};return f(g,p,m)},h.prototype.getAlbumTracks=function(u,p,m){var g={url:n+"/albums/"+u+"/tracks"};return f(g,p,m)},h.prototype.getAlbums=function(u,p,m){var g={url:n+"/albums/",params:{ids:u.join(",")}};return f(g,p,m)},h.prototype.getTrack=function(u,p,m){var g={};return g.url=n+"/tracks/"+u,f(g,p,m)},h.prototype.getTracks=function(u,p,m){var g={url:n+"/tracks/",params:{ids:u.join(",")}};return f(g,p,m)},h.prototype.getArtist=function(u,p,m){var g={url:n+"/artists/"+u};return f(g,p,m)},h.prototype.getArtists=function(u,p,m){var g={url:n+"/artists/",params:{ids:u.join(",")}};return f(g,p,m)},h.prototype.getArtistAlbums=function(u,p,m){var g={url:n+"/artists/"+u+"/albums"};return f(g,p,m)},h.prototype.getArtistTopTracks=function(u,p,m,g){var b={url:n+"/artists/"+u+"/top-tracks",params:{country:p}};return f(b,m,g)},h.prototype.getArtistRelatedArtists=function(u,p,m){var g={url:n+"/artists/"+u+"/related-artists"};return f(g,p,m)},h.prototype.getFeaturedPlaylists=function(u,p){var m={url:n+"/browse/featured-playlists"};return f(m,u,p)},h.prototype.getNewReleases=function(u,p){var m={url:n+"/browse/new-releases"};return f(m,u,p)},h.prototype.getCategories=function(u,p){var m={url:n+"/browse/categories"};return f(m,u,p)},h.prototype.getCategory=function(u,p,m){var g={url:n+"/browse/categories/"+u};return f(g,p,m)},h.prototype.getCategoryPlaylists=function(u,p,m){var g={url:n+"/browse/categories/"+u+"/playlists"};return f(g,p,m)},h.prototype.search=function(u,p,m,g){var b={url:n+"/search/",params:{q:u,type:p.join(",")}};return f(b,m,g)},h.prototype.searchAlbums=function(u,p,m){return this.search(u,["album"],p,m)},h.prototype.searchArtists=function(u,p,m){return this.search(u,["artist"],p,m)},h.prototype.searchTracks=function(u,p,m){return this.search(u,["track"],p,m)},h.prototype.searchPlaylists=function(u,p,m){return this.search(u,["playlist"],p,m)},h.prototype.searchShows=function(u,p,m){return this.search(u,["show"],p,m)},h.prototype.searchEpisodes=function(u,p,m){return this.search(u,["episode"],p,m)},h.prototype.getAudioFeaturesForTrack=function(u,p){var m={};return m.url=n+"/audio-features/"+u,f(m,{},p)},h.prototype.getAudioFeaturesForTracks=function(u,p){var m={url:n+"/audio-features",params:{ids:u}};return f(m,{},p)},h.prototype.getAudioAnalysisForTrack=function(u,p){var m={};return m.url=n+"/audio-analysis/"+u,f(m,{},p)},h.prototype.getRecommendations=function(u,p){var m={url:n+"/recommendations"};return f(m,u,p)},h.prototype.getAvailableGenreSeeds=function(u){var p={url:n+"/recommendations/available-genre-seeds"};return f(p,{},u)},h.prototype.getMyDevices=function(u){var p={url:n+"/me/player/devices"};return f(p,{},u)},h.prototype.getMyCurrentPlaybackState=function(u,p){var m={url:n+"/me/player"};return f(m,u,p)},h.prototype.getMyCurrentPlayingTrack=function(u,p){var m={url:n+"/me/player/currently-playing"};return f(m,u,p)},h.prototype.transferMyPlayback=function(u,p,m){var g=p||{};g.device_ids=u;var b={type:"PUT",url:n+"/me/player",postData:g};return f(b,p,m)},h.prototype.play=function(u,p){u=u||{};var m="device_id"in u?{device_id:u.device_id}:null,g={};["context_uri","uris","offset","position_ms"].forEach(function(v){v in u&&(g[v]=u[v])});var b={type:"PUT",url:n+"/me/player/play",params:m,postData:g},y=typeof u=="function"?u:{};return f(b,y,p)},h.prototype.queue=function(u,p,m){p=p||{};var g="device_id"in p?{uri:u,device_id:p.device_id}:{uri:u},b={type:"POST",url:n+"/me/player/queue",params:g};return f(b,p,m)},h.prototype.pause=function(u,p){u=u||{};var m="device_id"in u?{device_id:u.device_id}:null,g={type:"PUT",url:n+"/me/player/pause",params:m};return f(g,u,p)},h.prototype.skipToNext=function(u,p){u=u||{};var m="device_id"in u?{device_id:u.device_id}:null,g={type:"POST",url:n+"/me/player/next",params:m};return f(g,u,p)},h.prototype.skipToPrevious=function(u,p){u=u||{};var m="device_id"in u?{device_id:u.device_id}:null,g={type:"POST",url:n+"/me/player/previous",params:m};return f(g,u,p)},h.prototype.seek=function(u,p,m){p=p||{};var g={position_ms:u};"device_id"in p&&(g.device_id=p.device_id);var b={type:"PUT",url:n+"/me/player/seek",params:g};return f(b,p,m)},h.prototype.setRepeat=function(u,p,m){p=p||{};var g={state:u};"device_id"in p&&(g.device_id=p.device_id);var b={type:"PUT",url:n+"/me/player/repeat",params:g};return f(b,p,m)},h.prototype.setVolume=function(u,p,m){p=p||{};var g={volume_percent:u};"device_id"in p&&(g.device_id=p.device_id);var b={type:"PUT",url:n+"/me/player/volume",params:g};return f(b,p,m)},h.prototype.setShuffle=function(u,p,m){p=p||{};var g={state:u};"device_id"in p&&(g.device_id=p.device_id);var b={type:"PUT",url:n+"/me/player/shuffle",params:g};return f(b,p,m)},h.prototype.getShow=function(u,p,m){var g={};return g.url=n+"/shows/"+u,f(g,p,m)},h.prototype.getShows=function(u,p,m){var g={url:n+"/shows/",params:{ids:u.join(",")}};return f(g,p,m)},h.prototype.getMySavedShows=function(u,p){var m={url:n+"/me/shows"};return f(m,u,p)},h.prototype.addToMySavedShows=function(u,p,m){var g={url:n+"/me/shows",type:"PUT",postData:u};return f(g,p,m)},h.prototype.removeFromMySavedShows=function(u,p,m){var g={url:n+"/me/shows",type:"DELETE",postData:u};return f(g,p,m)},h.prototype.containsMySavedShows=function(u,p,m){var g={url:n+"/me/shows/contains",params:{ids:u.join(",")}};return f(g,p,m)},h.prototype.getShowEpisodes=function(u,p,m){var g={url:n+"/shows/"+u+"/episodes"};return f(g,p,m)},h.prototype.getEpisode=function(u,p,m){var g={};return g.url=n+"/episodes/"+u,f(g,p,m)},h.prototype.getEpisodes=function(u,p,m){var g={url:n+"/episodes/",params:{ids:u.join(",")}};return f(g,p,m)},h.prototype.getAccessToken=function(){return r},h.prototype.setAccessToken=function(u){r=u},h.prototype.setPromiseImplementation=function(u){var p=!1;try{var m=new u(function(g){g()});typeof m.then=="function"&&typeof m.catch=="function"&&(p=!0)}catch(g){console.error(g)}if(p)i=u;else throw new Error("Unsupported implementation of Promises/A+")},h}();e.exports=t})(Vv);var CP=Vv.exports;const EP=zp(CP),_P="https://accounts.spotify.com/authorize",NP="10a750cb31ec4fdc8340f04df8438d4f",PP="https://lyncx.ai/play",IP=["user-read-currently-playing","user-read-playback-state","user-modify-playback-state","user-library-read","playlist-read-private","playlist-read-collaborative","streaming","user-read-email","user-read-private"],Xn=new EP,Vp=e=>new Promise(t=>setTimeout(t,e)),Yr=async(e,t=5)=>{let n;for(let r=0;r<=t;r++)try{return await e()}catch(i){if(n=i,i.status===429){const s=parseInt(i.getResponseHeader("Retry-After"))||1;console.log(`Rate limited. Waiting for ${s} seconds before retrying.`),await Vp(s*1e3)}else{if(i.status===401)throw console.log("Token expired (401), clearing localStorage and stopping retries"),localStorage.removeItem("spotify_token"),i;if(r<t){const s=Math.pow(2,r)*1e3;console.log(`Request failed. Retrying in ${s/1e3} seconds.`),await Vp(s)}else throw i}}throw n},jP=()=>`${_P}?client_id=${NP}&redirect_uri=${PP}&scope=${IP.join("%20")}&response_type=token&show_dialog=true`,AP=e=>{Xn.setAccessToken(e)},RP=async()=>{try{return(await Yr(()=>Xn.getUserPlaylists())).items.map(t=>({id:t.id,name:t.name,trackCount:t.tracks.total}))}catch(e){return console.error("Failed to fetch user playlists:",e),[]}},DP=async e=>{try{return(await Yr(()=>Xn.getPlaylistTracks(e,{fields:"items(track(id,name,artists,album(images)))",limit:15,offset:0}))).items.filter(n=>"track"in n&&n.track!==null&&"artists"in n.track&&"album"in n.track).map(n=>{var i;const r=n.track;return{id:r.id,name:r.name,artist:r==null?void 0:r.artists.map(s=>s.name).join(", "),albumArt:((i=r.album.images[0])==null?void 0:i.url)||""}})}catch(t){return console.error(`Failed to fetch tracks for playlist ${e}:`,t),[]}},yl=e=>Yr(()=>Xn.play({uris:[`spotify:track:${e}`]})),MP=()=>Yr(()=>Xn.pause()),LP=()=>Yr(()=>Xn.play()),OP=e=>Yr(()=>Xn.transferMyPlayback([e])),Up=()=>{const[e,t]=w.useState(null),[,n]=w.useState(!0),[r,i]=w.useState(!1),[s,o]=w.useState(!1),[a,l]=w.useState([]),[d,f]=w.useState(""),[h,u]=w.useState(null),[p]=w.useState(1),[m,g]=w.useState(null),[b,y]=w.useState(null),[v,x]=w.useState(!1),[k,S]=w.useState([]),[C,E]=w.useState(null),[T,R]=w.useState(!1),[A,$]=w.useState(!1),[xe,Re]=w.useState(null);w.useEffect(()=>{if(!e)return;(async()=>{try{const P=await fetch("https://api.spotify.com/v1/me",{headers:{Authorization:`Bearer ${e}`}});if(P.ok){const O=await P.json();console.log("API call successful:",O)}else P.status===401?(console.log("Token expired, clearing and requiring re-auth"),localStorage.removeItem("spotify_token"),t(null),o(!1)):console.error("API call failed:",P.statusText)}catch(P){console.error("Error making API call:",P)}})()},[e]),w.useEffect(()=>{const _=window.location.hash.substring(1).split("&").reduce((at,Qn)=>{if(Qn){const lt=Qn.split("=");at[lt[0]]=decodeURIComponent(lt[1])}return at},{});let P=_.token;P||(P=_.access_token);const O=localStorage.getItem("spotify_token"),Ee=P||O;Ee&&(t(Ee),AP(Ee),o(!0),n(!1),P?(localStorage.setItem("spotify_token",P),console.log("🎵 Token received from extension and saved to localStorage")):console.log("🎵 Using existing token from localStorage"),_.track&&(console.log("🎵 Track ID received from extension:",_.track),Re(_.track))),window.location.hash&&(window.location.hash="")},[]),w.useEffect(()=>{if(!e)return;(async()=>{try{const P=await RP();S(P),P.length>0&&E(P[0])}catch(P){console.error("Error fetching user playlists:",P)}})()},[e]),w.useEffect(()=>{if(!e||!C)return;(async()=>{x(!0),y(null);let P=3;for(;P>0;)try{const O=await DP(C.id);if(O.length>0){l(O),f(O[0].id);break}else throw new Error("No tracks fetched")}catch(O){console.error("Error fetching top tracks:",O),P--,P===0?y("Failed to fetch top tracks. Please try again later."):await new Promise(Ee=>setTimeout(Ee,5e3))}x(!1)})()},[e,C]);const ot=w.useCallback(()=>{if(!e)return;const _=new window.Spotify.Player({name:"Web Playback SDK",getOAuthToken:P=>{P(e)},volume:p});_.addListener("ready",({device_id:P})=>{console.log("Ready with Device ID",P),OP(P)}),_.addListener("not_ready",({device_id:P})=>{console.log("Device ID has gone offline",P),i(!1)}),_.addListener("player_state_changed",P=>{if(console.log("🎵 Player state changed"),P&&P.track_window&&P.track_window.current_track){const O=P.track_window.current_track;console.log("🎵 Now playing:",O.name,"by",O.artists.map(Ee=>Ee.name).join(", ")),i(!P.paused),f(O.id),u({id:O.id,name:O.name,artist:O.artists.map(Ee=>Ee.name).join(", "),album:O.album.name})}else console.log("🎵 Playback stopped"),i(!1),u(null)}),_.addListener("initialization_error",({message:P})=>{console.error("🎵 Initialization Error:",P),y("Failed to initialize player: "+P)}),_.addListener("authentication_error",({message:P})=>{console.error("🎵 Authentication Error:",P),y("Authentication failed: "+P),localStorage.removeItem("spotify_token"),t(null),o(!1)}),_.addListener("account_error",({message:P})=>{console.error("🎵 Account Error:",P),y("Account error: "+P)}),_.addListener("playback_error",({message:P})=>{console.error("🎵 Playback Error:",P),y("Playback error: "+P),i(!1)}),_.connect().then(P=>{P&&(console.log("✅ Web Playback SDK connected to Spotify"),g(_))})},[e,p]);w.useEffect(()=>{if(!e)return;const _=document.createElement("script");return _.src="https://sdk.scdn.co/spotify-player.js",_.async=!0,document.body.appendChild(_),window.onSpotifyWebPlaybackSDKReady=ot,()=>{document.body.removeChild(_)}},[e,ot]),w.useEffect(()=>{xe&&m&&e&&(console.log("🎵 Playing pending track from extension:",xe),yl(xe).then(()=>{console.log("✅ Track playback initiated"),Re(null)}).catch(_=>{console.error("❌ Error playing pending track:",_),Re(null)}))},[xe,m,e]);const De=w.useCallback(async()=>{if(m)try{const _=await m.getCurrentState();if(_&&_.track_window&&_.track_window.current_track){const P=_.track_window.current_track;console.log("🎵 Updating track info:",P.name,"by",P.artists.map(O=>O.name).join(", ")),i(!_.paused),f(P.id),u({id:P.id,name:P.name,artist:P.artists.map(O=>O.name).join(", "),album:P.album.name})}else console.log("🎵 No active playback found"),i(!1),u(null)}catch(_){console.error("🎵 Error getting player state:",_)}},[m]);w.useEffect(()=>{if(m&&e){const _=setTimeout(()=>De(),1e3);return()=>clearTimeout(_)}},[m,e,De]),w.useEffect(()=>{if(!m||!e)return;const _=()=>{document.hidden||(console.log("🎵 Tab became visible, checking for missed playback..."),De())};return document.addEventListener("visibilitychange",_),window.addEventListener("focus",De),()=>{document.removeEventListener("visibilitychange",_),window.removeEventListener("focus",De)}},[m,e,De]);const Wt=w.useCallback(_=>{!_||!a.some(P=>P.id===_)||e&&yl(_).then(()=>{console.log("✅ Track playback initiated from track list")}).catch(P=>{console.error("Error playing track:",P),y("Failed to play track. Please try again.")})},[e,a]),W=w.useCallback(_=>{if(console.log("🎵 Power button clicked. Auth state:",!!e,"Power state:",_,"Is playing:",r),!e){console.log("🎵 No token, starting OAuth flow"),o(_),_&&(window.location.href=jP());return}if(o(!0),!h&&a.length>0){console.log("🎵 No current track, starting playback with first track");const P=a[0];yl(P.id).then(()=>{console.log("✅ Started playback with first track:",P.name)}).catch(O=>{console.error("❌ Error starting playback:",O),y("Failed to start playback. Please try again.")});return}m&&r?(console.log("🎵 Pausing playback via Web Playback SDK"),m.pause()):m&&!r?(console.log("🎵 Resuming playback via Web Playback SDK"),m.resume()):(console.log("🎵 Using Spotify Web API for playback control (player not ready)"),r?MP():LP())},[e,m,r,h,a]),I=w.useCallback(_=>{n(_)},[]),D=w.useCallback(()=>{R(_=>!_)},[]);return c.jsxs("div",{className:`min-h-screen h-screen w-full transition-all duration-700 ease-out ${T?"bg-slate-900":"bg-orange-50"} ${s?"":"power-off"}`,children:[c.jsx("button",{onClick:D,className:`fixed top-6 right-6 z-50 p-2 rounded-full transition-all duration-300 ease-out hover:scale-105 active:scale-95 ${T?"bg-slate-800/30 text-slate-300 hover:bg-slate-700/40":"bg-white/30 text-gray-600 hover:bg-white/50"} backdrop-blur-sm shadow-md hover:shadow-lg`,children:T?c.jsx(k2,{size:16}):c.jsx(p2,{size:16})}),e&&c.jsx("button",{onClick:()=>$(!0),className:`fixed top-6 right-16 z-50 p-2 rounded-full transition-all duration-300 ease-out hover:scale-105 active:scale-95 ${T?"bg-slate-800/30 text-slate-300 hover:bg-slate-700/40":"bg-white/30 text-gray-600 hover:bg-white/50"} backdrop-blur-sm shadow-md hover:shadow-lg`,children:c.jsx(g2,{size:16})}),c.jsx("div",{className:"min-h-screen flex items-start justify-center px-6 pt-64",children:c.jsxs("div",{className:"flex flex-col items-center space-y-8",children:[c.jsx(SP,{onLockStateChange:I,isPowerOn:s,onPowerStateChange:W,isPlaying:r,isDarkMode:T,isAuthenticated:!!e}),e&&h&&c.jsx("div",{className:"text-center max-w-md transition-all duration-300",children:c.jsxs("div",{className:"space-y-0.5",children:[c.jsx("div",{className:`text-lg font-semibold truncate ${kt.text.primary(T)}`,children:h.name}),c.jsxs("div",{className:`text-sm ${kt.text.muted(T)}`,children:["by ",h.artist]})]})})]})}),A&&e&&c.jsxs("div",{className:"fixed inset-0 z-40 flex items-start justify-end p-6",children:[c.jsx("div",{className:"absolute inset-0 bg-black/30 backdrop-blur-sm",onClick:()=>$(!1)}),c.jsx("div",{className:"relative w-96 mt-16 max-h-[80vh]",children:v?c.jsxs("div",{className:`text-center py-8 rounded-2xl backdrop-blur-md border transition-all duration-300 ${T?"bg-slate-900/90 border-slate-700/50 text-slate-200":"bg-white/90 border-gray-200/50 text-gray-800"} shadow-2xl`,children:[c.jsx("div",{className:"text-lg font-medium mb-2",children:"Loading..."}),c.jsx("div",{className:`text-sm ${T?"text-slate-400":"text-gray-600"}`,children:"Fetching your music"})]}):b?c.jsxs("div",{className:`text-center py-8 rounded-2xl backdrop-blur-md border transition-all duration-300 ${T?"bg-slate-900/90 border-slate-700/50":"bg-white/90 border-gray-200/50"} shadow-2xl`,children:[c.jsx("div",{className:"text-red-500 font-medium mb-2",children:"Error"}),c.jsx("div",{className:`text-sm ${T?"text-slate-400":"text-gray-600"}`,children:b})]}):c.jsx("div",{className:`rounded-2xl backdrop-blur-md border transition-all duration-300 ${T?"bg-slate-900/90 border-slate-700/50":"bg-white/90 border-gray-200/50"} shadow-2xl overflow-hidden`,children:c.jsx(TP,{title:(C==null?void 0:C.name)||"Playlist",tracks:a,currentTrack:d,onTrackSelect:Wt,playlists:k,selectedPlaylist:C,onPlaylistSelect:E,isDarkMode:T})})})]})]})},FP=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState("🔍"),i=["🔍","🗂️","📁","🔗","⚡","🎯"];return w.useEffect(()=>{t(!0);const s=setInterval(()=>{r(o=>{const a=i.indexOf(o);return i[(a+1)%i.length]})},2e3);return()=>clearInterval(s)},[]),c.jsxs("div",{className:"not-found-container",children:[c.jsxs("div",{className:`content-wrapper ${e?"mounted":""}`,children:[c.jsxs("div",{className:"main-content",children:[c.jsx("div",{className:"emoji-container",children:c.jsx("span",{className:"rotating-emoji",children:n})}),c.jsxs("div",{className:"text-content",children:[c.jsx("h2",{className:"error-title",children:"Page not found"}),c.jsx("p",{className:"error-description",children:"The page you're looking for has wandered off into the digital wilderness. Let's get you back on track."})]}),c.jsxs("div",{className:"action-section",children:[c.jsxs($u,{to:"/",className:"primary-button",children:[c.jsx("span",{children:"Take me home"}),c.jsx("svg",{className:"arrow-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:c.jsx("path",{d:"M5 12H19M19 12L12 5M19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),c.jsx("button",{onClick:()=>window.history.back(),className:"secondary-button",children:"Go back"})]})]}),c.jsx("div",{className:"decoration-dots",children:[...Array(5)].map((s,o)=>c.jsx("div",{className:`dot dot-${o+1}`},o))})]}),c.jsx("style",{children:`
                .not-found-container {
                    min-height: 100vh;
                    background: #fffbf0;
                    font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    position: relative;
                    overflow: hidden;
                }

                .content-wrapper {
                    max-width: 600px;
                    width: 100%;
                    text-align: center;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .content-wrapper.mounted {
                    opacity: 1;
                    transform: translateY(0);
                }


                /* Main Content */
                .main-content {
                    background: white;
                    border-radius: 1rem;
                    border: 1px solid #e5e5e5;
                    padding: 3rem 2rem;
                    box-shadow: 0 4px 20px rgba(45, 24, 16, 0.08);
                    position: relative;
                }

                .emoji-container {
                    margin-bottom: 2rem;
                }

                .rotating-emoji {
                    font-size: 4rem;
                    display: inline-block;
                    animation: gentle-bounce 2s infinite ease-in-out;
                    transition: transform 0.5s ease;
                }

                @keyframes gentle-bounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0) scale(1);
                    }
                    40% {
                        transform: translateY(-10px) scale(1.1);
                    }
                    60% {
                        transform: translateY(-5px) scale(1.05);
                    }
                }

                /* Text Content */
                .text-content {
                    margin-bottom: 2.5rem;
                }

                .error-title {
                    font-size: 3rem;
                    font-weight: 600;
                    color: #2d1810;
                    margin: 0 0 1rem 0;
                    line-height: 1.1;
                }

                .error-description {
                    font-size: 1.125rem;
                    color: #8b4513;
                    line-height: 1.6;
                    margin: 0;
                    max-width: 480px;
                    margin-left: auto;
                    margin-right: auto;
                }

                /* Action Section */
                .action-section {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 2.5rem;
                    flex-wrap: wrap;
                }

                .primary-button {
                    background: #c68346;
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 0.75rem;
                    font-size: 1.125rem;
                    font-weight: 600;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: all 0.2s ease;
                    border: none;
                    cursor: pointer;
                }

                .primary-button:hover {
                    background: #b07139;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(198, 131, 70, 0.25);
                }

                .primary-button .arrow-icon {
                    transition: transform 0.2s ease;
                }

                .primary-button:hover .arrow-icon {
                    transform: translateX(4px);
                }

                .secondary-button {
                    border: 2px solid #c68346;
                    color: #c68346;
                    background: transparent;
                    padding: 1rem 2rem;
                    border-radius: 0.75rem;
                    font-size: 1.125rem;
                    font-weight: 600;
                    transition: all 0.2s ease;
                    cursor: pointer;
                    font-family: inherit;
                }

                .secondary-button:hover {
                    background: #c68346;
                    color: white;
                    transform: translateY(-2px);
                }


                /* Decorative Elements */
                .decoration-dots {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: -1;
                }

                .dot {
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    background: rgba(198, 131, 70, 0.15);
                    border-radius: 50%;
                    animation: float 6s infinite ease-in-out;
                }

                .dot-1 { top: 15%; left: 10%; animation-delay: 0s; }
                .dot-2 { top: 25%; right: 15%; animation-delay: 1s; }
                .dot-3 { bottom: 30%; left: 15%; animation-delay: 2s; }
                .dot-4 { bottom: 20%; right: 10%; animation-delay: 3s; }
                .dot-5 { top: 60%; left: 8%; animation-delay: 4s; }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: translateY(-20px) scale(1.2);
                        opacity: 0.7;
                    }
                }

                /* Responsive Design */
                @media (max-width: 640px) {
                    .not-found-container {
                        padding: 1rem;
                    }
                    
                    .main-content {
                        padding: 2rem 1.5rem;
                    }

                    .error-title {
                        font-size: 2.25rem;
                    }

                    .action-section {
                        flex-direction: column;
                        gap: 0.75rem;
                    }

                    .primary-button,
                    .secondary-button {
                        width: 100%;
                        justify-content: center;
                    }

                }
            `})]})},VP=()=>c.jsx(Ub,{children:c.jsx("div",{className:"min-h-screen",style:{background:"#fffbf0",fontFamily:'"Nunito", sans-serif'},children:c.jsxs(mb,{children:[c.jsx(Nn,{path:"/",element:c.jsx(tk,{})}),c.jsx(Nn,{path:"/privacy",element:c.jsx(nk,{})}),c.jsx(Nn,{path:"/auth",element:c.jsx(WC,{})}),c.jsx(Nn,{path:"/play",element:c.jsx(Up,{})}),c.jsx(Nn,{path:"/player",element:c.jsx(Up,{})}),c.jsx(Nn,{path:"*",element:c.jsx(FP,{})})]})})});vl.createRoot(document.getElementById("root")).render(c.jsx(Cn.StrictMode,{children:c.jsx(VP,{})}));
