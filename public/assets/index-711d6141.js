function u6(t,o){for(var i=0;i<o.length;i++){const l=o[i];if(typeof l!="string"&&!Array.isArray(l)){for(const d in l)if(d!=="default"&&!(d in t)){const h=Object.getOwnPropertyDescriptor(l,d);h&&Object.defineProperty(t,d,h.get?h:{enumerable:!0,get:()=>l[d]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))l(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(d){if(d.ep)return;d.ep=!0;const h=i(d);fetch(d.href,h)}})();var en=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function pM(t){if(t.__esModule)return t;var o=t.default;if(typeof o=="function"){var i=function l(){if(this instanceof l){var d=[null];d.push.apply(d,arguments);var h=Function.bind.apply(o,d);return new h}return o.apply(this,arguments)};i.prototype=o.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(t).forEach(function(l){var d=Object.getOwnPropertyDescriptor(t,l);Object.defineProperty(i,l,d.get?d:{enumerable:!0,get:function(){return t[l]}})}),i}var Zh={},h6={get exports(){return Zh},set exports(t){Zh=t}},bm={},R={},p6={get exports(){return R},set exports(t){R=t}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=Symbol.for("react.element"),f6=Symbol.for("react.portal"),g6=Symbol.for("react.fragment"),m6=Symbol.for("react.strict_mode"),b6=Symbol.for("react.profiler"),k6=Symbol.for("react.provider"),w6=Symbol.for("react.context"),v6=Symbol.for("react.forward_ref"),y6=Symbol.for("react.suspense"),C6=Symbol.for("react.memo"),A6=Symbol.for("react.lazy"),q2=Symbol.iterator;function _6(t){return t===null||typeof t!="object"?null:(t=q2&&t[q2]||t["@@iterator"],typeof t=="function"?t:null)}var fM={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gM=Object.assign,mM={};function au(t,o,i){this.props=t,this.context=o,this.refs=mM,this.updater=i||fM}au.prototype.isReactComponent={};au.prototype.setState=function(t,o){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,o,"setState")};au.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bM(){}bM.prototype=au.prototype;function Qv(t,o,i){this.props=t,this.context=o,this.refs=mM,this.updater=i||fM}var Zv=Qv.prototype=new bM;Zv.constructor=Qv;gM(Zv,au.prototype);Zv.isPureReactComponent=!0;var G2=Array.isArray,kM=Object.prototype.hasOwnProperty,Jv={current:null},wM={key:!0,ref:!0,__self:!0,__source:!0};function vM(t,o,i){var l,d={},h=null,f=null;if(o!=null)for(l in o.ref!==void 0&&(f=o.ref),o.key!==void 0&&(h=""+o.key),o)kM.call(o,l)&&!wM.hasOwnProperty(l)&&(d[l]=o[l]);var b=arguments.length-2;if(b===1)d.children=i;else if(1<b){for(var m=Array(b),v=0;v<b;v++)m[v]=arguments[v+2];d.children=m}if(t&&t.defaultProps)for(l in b=t.defaultProps,b)d[l]===void 0&&(d[l]=b[l]);return{$$typeof:Dp,type:t,key:h,ref:f,props:d,_owner:Jv.current}}function x6(t,o){return{$$typeof:Dp,type:t.type,key:o,ref:t.ref,props:t.props,_owner:t._owner}}function Xv(t){return typeof t=="object"&&t!==null&&t.$$typeof===Dp}function E6(t){var o={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(i){return o[i]})}var K2=/\/+/g;function pw(t,o){return typeof t=="object"&&t!==null&&t.key!=null?E6(""+t.key):o.toString(36)}function sg(t,o,i,l,d){var h=typeof t;(h==="undefined"||h==="boolean")&&(t=null);var f=!1;if(t===null)f=!0;else switch(h){case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case Dp:case f6:f=!0}}if(f)return f=t,d=d(f),t=l===""?"."+pw(f,0):l,G2(d)?(i="",t!=null&&(i=t.replace(K2,"$&/")+"/"),sg(d,o,i,"",function(v){return v})):d!=null&&(Xv(d)&&(d=x6(d,i+(!d.key||f&&f.key===d.key?"":(""+d.key).replace(K2,"$&/")+"/")+t)),o.push(d)),1;if(f=0,l=l===""?".":l+":",G2(t))for(var b=0;b<t.length;b++){h=t[b];var m=l+pw(h,b);f+=sg(h,o,i,m,d)}else if(m=_6(t),typeof m=="function")for(t=m.call(t),b=0;!(h=t.next()).done;)h=h.value,m=l+pw(h,b++),f+=sg(h,o,i,m,d);else if(h==="object")throw o=String(t),Error("Objects are not valid as a React child (found: "+(o==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return f}function Bf(t,o,i){if(t==null)return t;var l=[],d=0;return sg(t,l,"","",function(h){return o.call(i,h,d++)}),l}function S6(t){if(t._status===-1){var o=t._result;o=o(),o.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i)},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i)}),t._status===-1&&(t._status=0,t._result=o)}if(t._status===1)return t._result.default;throw t._result}var _o={current:null},ag={transition:null},D6={ReactCurrentDispatcher:_o,ReactCurrentBatchConfig:ag,ReactCurrentOwner:Jv};pt.Children={map:Bf,forEach:function(t,o,i){Bf(t,function(){o.apply(this,arguments)},i)},count:function(t){var o=0;return Bf(t,function(){o++}),o},toArray:function(t){return Bf(t,function(o){return o})||[]},only:function(t){if(!Xv(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pt.Component=au;pt.Fragment=g6;pt.Profiler=b6;pt.PureComponent=Qv;pt.StrictMode=m6;pt.Suspense=y6;pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D6;pt.cloneElement=function(t,o,i){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var l=gM({},t.props),d=t.key,h=t.ref,f=t._owner;if(o!=null){if(o.ref!==void 0&&(h=o.ref,f=Jv.current),o.key!==void 0&&(d=""+o.key),t.type&&t.type.defaultProps)var b=t.type.defaultProps;for(m in o)kM.call(o,m)&&!wM.hasOwnProperty(m)&&(l[m]=o[m]===void 0&&b!==void 0?b[m]:o[m])}var m=arguments.length-2;if(m===1)l.children=i;else if(1<m){b=Array(m);for(var v=0;v<m;v++)b[v]=arguments[v+2];l.children=b}return{$$typeof:Dp,type:t.type,key:d,ref:h,props:l,_owner:f}};pt.createContext=function(t){return t={$$typeof:w6,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:k6,_context:t},t.Consumer=t};pt.createElement=vM;pt.createFactory=function(t){var o=vM.bind(null,t);return o.type=t,o};pt.createRef=function(){return{current:null}};pt.forwardRef=function(t){return{$$typeof:v6,render:t}};pt.isValidElement=Xv;pt.lazy=function(t){return{$$typeof:A6,_payload:{_status:-1,_result:t},_init:S6}};pt.memo=function(t,o){return{$$typeof:C6,type:t,compare:o===void 0?null:o}};pt.startTransition=function(t){var o=ag.transition;ag.transition={};try{t()}finally{ag.transition=o}};pt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pt.useCallback=function(t,o){return _o.current.useCallback(t,o)};pt.useContext=function(t){return _o.current.useContext(t)};pt.useDebugValue=function(){};pt.useDeferredValue=function(t){return _o.current.useDeferredValue(t)};pt.useEffect=function(t,o){return _o.current.useEffect(t,o)};pt.useId=function(){return _o.current.useId()};pt.useImperativeHandle=function(t,o,i){return _o.current.useImperativeHandle(t,o,i)};pt.useInsertionEffect=function(t,o){return _o.current.useInsertionEffect(t,o)};pt.useLayoutEffect=function(t,o){return _o.current.useLayoutEffect(t,o)};pt.useMemo=function(t,o){return _o.current.useMemo(t,o)};pt.useReducer=function(t,o,i){return _o.current.useReducer(t,o,i)};pt.useRef=function(t){return _o.current.useRef(t)};pt.useState=function(t){return _o.current.useState(t)};pt.useSyncExternalStore=function(t,o,i){return _o.current.useSyncExternalStore(t,o,i)};pt.useTransition=function(){return _o.current.useTransition()};pt.version="18.2.0";(function(t){t.exports=pt})(p6);const mo=Yv(R),Wd=u6({__proto__:null,default:mo},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T6=R,I6=Symbol.for("react.element"),M6=Symbol.for("react.fragment"),P6=Object.prototype.hasOwnProperty,N6=T6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B6={key:!0,ref:!0,__self:!0,__source:!0};function yM(t,o,i){var l,d={},h=null,f=null;i!==void 0&&(h=""+i),o.key!==void 0&&(h=""+o.key),o.ref!==void 0&&(f=o.ref);for(l in o)P6.call(o,l)&&!B6.hasOwnProperty(l)&&(d[l]=o[l]);if(t&&t.defaultProps)for(l in o=t.defaultProps,o)d[l]===void 0&&(d[l]=o[l]);return{$$typeof:I6,type:t,key:h,ref:f,props:d,_owner:N6.current}}bm.Fragment=M6;bm.jsx=yM;bm.jsxs=yM;(function(t){t.exports=bm})(h6);const Mt=Zh.Fragment,T=Zh.jsx,ue=Zh.jsxs,R6=Object.freeze(Object.defineProperty({__proto__:null,Fragment:Mt,jsx:T,jsxs:ue},Symbol.toStringTag,{value:"Module"}));var m0={},Zl={},O6={get exports(){return Zl},set exports(t){Zl=t}},sr={},b0={},L6={get exports(){return b0},set exports(t){b0=t}},CM={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function o(oe,se){var re=oe.length;oe.push(se);e:for(;0<re;){var _e=re-1>>>1,Re=oe[_e];if(0<d(Re,se))oe[_e]=se,oe[re]=Re,re=_e;else break e}}function i(oe){return oe.length===0?null:oe[0]}function l(oe){if(oe.length===0)return null;var se=oe[0],re=oe.pop();if(re!==se){oe[0]=re;e:for(var _e=0,Re=oe.length,Ee=Re>>>1;_e<Ee;){var Le=2*(_e+1)-1,tt=oe[Le],Xe=Le+1,We=oe[Xe];if(0>d(tt,re))Xe<Re&&0>d(We,tt)?(oe[_e]=We,oe[Xe]=re,_e=Xe):(oe[_e]=tt,oe[Le]=re,_e=Le);else if(Xe<Re&&0>d(We,re))oe[_e]=We,oe[Xe]=re,_e=Xe;else break e}}return se}function d(oe,se){var re=oe.sortIndex-se.sortIndex;return re!==0?re:oe.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;t.unstable_now=function(){return h.now()}}else{var f=Date,b=f.now();t.unstable_now=function(){return f.now()-b}}var m=[],v=[],C=1,_=null,A=3,S=!1,M=!1,I=!1,U=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(oe){for(var se=i(v);se!==null;){if(se.callback===null)l(v);else if(se.startTime<=oe)l(v),se.sortIndex=se.expirationTime,o(m,se);else break;se=i(v)}}function q(oe){if(I=!1,L(oe),!M)if(i(m)!==null)M=!0,ve(K);else{var se=i(v);se!==null&&De(q,se.startTime-oe)}}function K(oe,se){M=!1,I&&(I=!1,N(F),F=-1),S=!0;var re=A;try{for(L(se),_=i(m);_!==null&&(!(_.expirationTime>se)||oe&&!ce());){var _e=_.callback;if(typeof _e=="function"){_.callback=null,A=_.priorityLevel;var Re=_e(_.expirationTime<=se);se=t.unstable_now(),typeof Re=="function"?_.callback=Re:_===i(m)&&l(m),L(se)}else l(m);_=i(m)}if(_!==null)var Ee=!0;else{var Le=i(v);Le!==null&&De(q,Le.startTime-se),Ee=!1}return Ee}finally{_=null,A=re,S=!1}}var J=!1,H=null,F=-1,X=5,ee=-1;function ce(){return!(t.unstable_now()-ee<X)}function ke(){if(H!==null){var oe=t.unstable_now();ee=oe;var se=!0;try{se=H(!0,oe)}finally{se?ge():(J=!1,H=null)}}else J=!1}var ge;if(typeof O=="function")ge=function(){O(ke)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=ke,ge=function(){he.postMessage(null)}}else ge=function(){U(ke,0)};function ve(oe){H=oe,J||(J=!0,ge())}function De(oe,se){F=U(function(){oe(t.unstable_now())},se)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(oe){oe.callback=null},t.unstable_continueExecution=function(){M||S||(M=!0,ve(K))},t.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<oe?Math.floor(1e3/oe):5},t.unstable_getCurrentPriorityLevel=function(){return A},t.unstable_getFirstCallbackNode=function(){return i(m)},t.unstable_next=function(oe){switch(A){case 1:case 2:case 3:var se=3;break;default:se=A}var re=A;A=se;try{return oe()}finally{A=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(oe,se){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var re=A;A=oe;try{return se()}finally{A=re}},t.unstable_scheduleCallback=function(oe,se,re){var _e=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?_e+re:_e):re=_e,oe){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=re+Re,oe={id:C++,callback:se,priorityLevel:oe,startTime:re,expirationTime:Re,sortIndex:-1},re>_e?(oe.sortIndex=re,o(v,oe),i(m)===null&&oe===i(v)&&(I?(N(F),F=-1):I=!0,De(q,re-_e))):(oe.sortIndex=Re,o(m,oe),M||S||(M=!0,ve(K))),oe},t.unstable_shouldYield=ce,t.unstable_wrapCallback=function(oe){var se=A;return function(){var re=A;A=se;try{return oe.apply(this,arguments)}finally{A=re}}}})(CM);(function(t){t.exports=CM})(L6);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AM=R,or=b0;function ye(t){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)o+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _M=new Set,Jh={};function sc(t,o){qd(t,o),qd(t+"Capture",o)}function qd(t,o){for(Jh[t]=o,t=0;t<o.length;t++)_M.add(o[t])}var gs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k0=Object.prototype.hasOwnProperty,z6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Y2={},Q2={};function j6(t){return k0.call(Q2,t)?!0:k0.call(Y2,t)?!1:z6.test(t)?Q2[t]=!0:(Y2[t]=!0,!1)}function F6(t,o,i,l){if(i!==null&&i.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $6(t,o,i,l){if(o===null||typeof o>"u"||F6(t,o,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function xo(t,o,i,l,d,h,f){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=i,this.propertyName=t,this.type=o,this.sanitizeURL=h,this.removeEmptyString=f}var io={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){io[t]=new xo(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var o=t[0];io[o]=new xo(o,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){io[t]=new xo(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){io[t]=new xo(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){io[t]=new xo(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){io[t]=new xo(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){io[t]=new xo(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){io[t]=new xo(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){io[t]=new xo(t,5,!1,t.toLowerCase(),null,!1,!1)});var ey=/[\-:]([a-z])/g;function ty(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var o=t.replace(ey,ty);io[o]=new xo(o,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var o=t.replace(ey,ty);io[o]=new xo(o,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var o=t.replace(ey,ty);io[o]=new xo(o,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){io[t]=new xo(t,1,!1,t.toLowerCase(),null,!1,!1)});io.xlinkHref=new xo("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){io[t]=new xo(t,1,!1,t.toLowerCase(),null,!0,!0)});function ny(t,o,i,l){var d=io.hasOwnProperty(o)?io[o]:null;(d!==null?d.type!==0:l||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&($6(o,i,d,l)&&(i=null),l||d===null?j6(o)&&(i===null?t.removeAttribute(o):t.setAttribute(o,""+i)):d.mustUseProperty?t[d.propertyName]=i===null?d.type===3?!1:"":i:(o=d.attributeName,l=d.attributeNamespace,i===null?t.removeAttribute(o):(d=d.type,i=d===3||d===4&&i===!0?"":""+i,l?t.setAttributeNS(l,o,i):t.setAttribute(o,i))))}var vs=AM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rf=Symbol.for("react.element"),vd=Symbol.for("react.portal"),yd=Symbol.for("react.fragment"),oy=Symbol.for("react.strict_mode"),w0=Symbol.for("react.profiler"),xM=Symbol.for("react.provider"),EM=Symbol.for("react.context"),ry=Symbol.for("react.forward_ref"),v0=Symbol.for("react.suspense"),y0=Symbol.for("react.suspense_list"),iy=Symbol.for("react.memo"),oa=Symbol.for("react.lazy"),SM=Symbol.for("react.offscreen"),Z2=Symbol.iterator;function hh(t){return t===null||typeof t!="object"?null:(t=Z2&&t[Z2]||t["@@iterator"],typeof t=="function"?t:null)}var gn=Object.assign,fw;function Dh(t){if(fw===void 0)try{throw Error()}catch(i){var o=i.stack.trim().match(/\n( *(at )?)/);fw=o&&o[1]||""}return`
`+fw+t}var gw=!1;function mw(t,o){if(!t||gw)return"";gw=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(v){var l=v}Reflect.construct(t,[],o)}else{try{o.call()}catch(v){l=v}t.call(o.prototype)}else{try{throw Error()}catch(v){l=v}t()}}catch(v){if(v&&l&&typeof v.stack=="string"){for(var d=v.stack.split(`
`),h=l.stack.split(`
`),f=d.length-1,b=h.length-1;1<=f&&0<=b&&d[f]!==h[b];)b--;for(;1<=f&&0<=b;f--,b--)if(d[f]!==h[b]){if(f!==1||b!==1)do if(f--,b--,0>b||d[f]!==h[b]){var m=`
`+d[f].replace(" at new "," at ");return t.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",t.displayName)),m}while(1<=f&&0<=b);break}}}finally{gw=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?Dh(t):""}function V6(t){switch(t.tag){case 5:return Dh(t.type);case 16:return Dh("Lazy");case 13:return Dh("Suspense");case 19:return Dh("SuspenseList");case 0:case 2:case 15:return t=mw(t.type,!1),t;case 11:return t=mw(t.type.render,!1),t;case 1:return t=mw(t.type,!0),t;default:return""}}function C0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yd:return"Fragment";case vd:return"Portal";case w0:return"Profiler";case oy:return"StrictMode";case v0:return"Suspense";case y0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case EM:return(t.displayName||"Context")+".Consumer";case xM:return(t._context.displayName||"Context")+".Provider";case ry:var o=t.render;return t=t.displayName,t||(t=o.displayName||o.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case iy:return o=t.displayName||null,o!==null?o:C0(t.type)||"Memo";case oa:o=t._payload,t=t._init;try{return C0(t(o))}catch{}}return null}function U6(t){var o=t.type;switch(t.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=o.render,t=t.displayName||t.name||"",o.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return C0(o);case 8:return o===oy?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Aa(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function DM(t){var o=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function H6(t){var o=DM(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,o),l=""+t[o];if(!t.hasOwnProperty(o)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var d=i.get,h=i.set;return Object.defineProperty(t,o,{configurable:!0,get:function(){return d.call(this)},set:function(f){l=""+f,h.call(this,f)}}),Object.defineProperty(t,o,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(f){l=""+f},stopTracking:function(){t._valueTracker=null,delete t[o]}}}}function Of(t){t._valueTracker||(t._valueTracker=H6(t))}function TM(t){if(!t)return!1;var o=t._valueTracker;if(!o)return!0;var i=o.getValue(),l="";return t&&(l=DM(t)?t.checked?"true":"false":t.value),t=l,t!==i?(o.setValue(t),!0):!1}function Eg(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function A0(t,o){var i=o.checked;return gn({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function J2(t,o){var i=o.defaultValue==null?"":o.defaultValue,l=o.checked!=null?o.checked:o.defaultChecked;i=Aa(o.value!=null?o.value:i),t._wrapperState={initialChecked:l,initialValue:i,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function IM(t,o){o=o.checked,o!=null&&ny(t,"checked",o,!1)}function _0(t,o){IM(t,o);var i=Aa(o.value),l=o.type;if(i!=null)l==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}o.hasOwnProperty("value")?x0(t,o.type,i):o.hasOwnProperty("defaultValue")&&x0(t,o.type,Aa(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(t.defaultChecked=!!o.defaultChecked)}function X2(t,o,i){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var l=o.type;if(!(l!=="submit"&&l!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+t._wrapperState.initialValue,i||o===t.value||(t.value=o),t.defaultValue=o}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function x0(t,o,i){(o!=="number"||Eg(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var Th=Array.isArray;function Nd(t,o,i,l){if(t=t.options,o){o={};for(var d=0;d<i.length;d++)o["$"+i[d]]=!0;for(i=0;i<t.length;i++)d=o.hasOwnProperty("$"+t[i].value),t[i].selected!==d&&(t[i].selected=d),d&&l&&(t[i].defaultSelected=!0)}else{for(i=""+Aa(i),o=null,d=0;d<t.length;d++){if(t[d].value===i){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}o!==null||t[d].disabled||(o=t[d])}o!==null&&(o.selected=!0)}}function E0(t,o){if(o.dangerouslySetInnerHTML!=null)throw Error(ye(91));return gn({},o,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function eD(t,o){var i=o.value;if(i==null){if(i=o.children,o=o.defaultValue,i!=null){if(o!=null)throw Error(ye(92));if(Th(i)){if(1<i.length)throw Error(ye(93));i=i[0]}o=i}o==null&&(o=""),i=o}t._wrapperState={initialValue:Aa(i)}}function MM(t,o){var i=Aa(o.value),l=Aa(o.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),o.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),l!=null&&(t.defaultValue=""+l)}function tD(t){var o=t.textContent;o===t._wrapperState.initialValue&&o!==""&&o!==null&&(t.value=o)}function PM(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function S0(t,o){return t==null||t==="http://www.w3.org/1999/xhtml"?PM(o):t==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lf,NM=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,i,l,d){MSApp.execUnsafeLocalFunction(function(){return t(o,i,l,d)})}:t}(function(t,o){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=o;else{for(Lf=Lf||document.createElement("div"),Lf.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Lf.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;o.firstChild;)t.appendChild(o.firstChild)}});function Xh(t,o){if(o){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=o;return}}t.textContent=o}var Rh={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W6=["Webkit","ms","Moz","O"];Object.keys(Rh).forEach(function(t){W6.forEach(function(o){o=o+t.charAt(0).toUpperCase()+t.substring(1),Rh[o]=Rh[t]})});function BM(t,o,i){return o==null||typeof o=="boolean"||o===""?"":i||typeof o!="number"||o===0||Rh.hasOwnProperty(t)&&Rh[t]?(""+o).trim():o+"px"}function RM(t,o){t=t.style;for(var i in o)if(o.hasOwnProperty(i)){var l=i.indexOf("--")===0,d=BM(i,o[i],l);i==="float"&&(i="cssFloat"),l?t.setProperty(i,d):t[i]=d}}var q6=gn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function D0(t,o){if(o){if(q6[t]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(ye(137,t));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(ye(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(ye(61))}if(o.style!=null&&typeof o.style!="object")throw Error(ye(62))}}function T0(t,o){if(t.indexOf("-")===-1)return typeof o.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var I0=null;function sy(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var M0=null,Bd=null,Rd=null;function nD(t){if(t=Mp(t)){if(typeof M0!="function")throw Error(ye(280));var o=t.stateNode;o&&(o=Cm(o),M0(t.stateNode,t.type,o))}}function OM(t){Bd?Rd?Rd.push(t):Rd=[t]:Bd=t}function LM(){if(Bd){var t=Bd,o=Rd;if(Rd=Bd=null,nD(t),o)for(t=0;t<o.length;t++)nD(o[t])}}function zM(t,o){return t(o)}function jM(){}var bw=!1;function FM(t,o,i){if(bw)return t(o,i);bw=!0;try{return zM(t,o,i)}finally{bw=!1,(Bd!==null||Rd!==null)&&(jM(),LM())}}function ep(t,o){var i=t.stateNode;if(i===null)return null;var l=Cm(i);if(l===null)return null;i=l[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(ye(231,o,typeof i));return i}var P0=!1;if(gs)try{var ph={};Object.defineProperty(ph,"passive",{get:function(){P0=!0}}),window.addEventListener("test",ph,ph),window.removeEventListener("test",ph,ph)}catch{P0=!1}function G6(t,o,i,l,d,h,f,b,m){var v=Array.prototype.slice.call(arguments,3);try{o.apply(i,v)}catch(C){this.onError(C)}}var Oh=!1,Sg=null,Dg=!1,N0=null,K6={onError:function(t){Oh=!0,Sg=t}};function Y6(t,o,i,l,d,h,f,b,m){Oh=!1,Sg=null,G6.apply(K6,arguments)}function Q6(t,o,i,l,d,h,f,b,m){if(Y6.apply(this,arguments),Oh){if(Oh){var v=Sg;Oh=!1,Sg=null}else throw Error(ye(198));Dg||(Dg=!0,N0=v)}}function ac(t){var o=t,i=t;if(t.alternate)for(;o.return;)o=o.return;else{t=o;do o=t,o.flags&4098&&(i=o.return),t=o.return;while(t)}return o.tag===3?i:null}function $M(t){if(t.tag===13){var o=t.memoizedState;if(o===null&&(t=t.alternate,t!==null&&(o=t.memoizedState)),o!==null)return o.dehydrated}return null}function oD(t){if(ac(t)!==t)throw Error(ye(188))}function Z6(t){var o=t.alternate;if(!o){if(o=ac(t),o===null)throw Error(ye(188));return o!==t?null:t}for(var i=t,l=o;;){var d=i.return;if(d===null)break;var h=d.alternate;if(h===null){if(l=d.return,l!==null){i=l;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===i)return oD(d),t;if(h===l)return oD(d),o;h=h.sibling}throw Error(ye(188))}if(i.return!==l.return)i=d,l=h;else{for(var f=!1,b=d.child;b;){if(b===i){f=!0,i=d,l=h;break}if(b===l){f=!0,l=d,i=h;break}b=b.sibling}if(!f){for(b=h.child;b;){if(b===i){f=!0,i=h,l=d;break}if(b===l){f=!0,l=h,i=d;break}b=b.sibling}if(!f)throw Error(ye(189))}}if(i.alternate!==l)throw Error(ye(190))}if(i.tag!==3)throw Error(ye(188));return i.stateNode.current===i?t:o}function VM(t){return t=Z6(t),t!==null?UM(t):null}function UM(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var o=UM(t);if(o!==null)return o;t=t.sibling}return null}var HM=or.unstable_scheduleCallback,rD=or.unstable_cancelCallback,J6=or.unstable_shouldYield,X6=or.unstable_requestPaint,Tn=or.unstable_now,e7=or.unstable_getCurrentPriorityLevel,ay=or.unstable_ImmediatePriority,WM=or.unstable_UserBlockingPriority,Tg=or.unstable_NormalPriority,t7=or.unstable_LowPriority,qM=or.unstable_IdlePriority,km=null,Ri=null;function n7(t){if(Ri&&typeof Ri.onCommitFiberRoot=="function")try{Ri.onCommitFiberRoot(km,t,void 0,(t.current.flags&128)===128)}catch{}}var Gr=Math.clz32?Math.clz32:i7,o7=Math.log,r7=Math.LN2;function i7(t){return t>>>=0,t===0?32:31-(o7(t)/r7|0)|0}var zf=64,jf=4194304;function Ih(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ig(t,o){var i=t.pendingLanes;if(i===0)return 0;var l=0,d=t.suspendedLanes,h=t.pingedLanes,f=i&268435455;if(f!==0){var b=f&~d;b!==0?l=Ih(b):(h&=f,h!==0&&(l=Ih(h)))}else f=i&~d,f!==0?l=Ih(f):h!==0&&(l=Ih(h));if(l===0)return 0;if(o!==0&&o!==l&&!(o&d)&&(d=l&-l,h=o&-o,d>=h||d===16&&(h&4194240)!==0))return o;if(l&4&&(l|=i&16),o=t.entangledLanes,o!==0)for(t=t.entanglements,o&=l;0<o;)i=31-Gr(o),d=1<<i,l|=t[i],o&=~d;return l}function s7(t,o){switch(t){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function a7(t,o){for(var i=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var f=31-Gr(h),b=1<<f,m=d[f];m===-1?(!(b&i)||b&l)&&(d[f]=s7(b,o)):m<=o&&(t.expiredLanes|=b),h&=~b}}function B0(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function GM(){var t=zf;return zf<<=1,!(zf&4194240)&&(zf=64),t}function kw(t){for(var o=[],i=0;31>i;i++)o.push(t);return o}function Tp(t,o,i){t.pendingLanes|=o,o!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,o=31-Gr(o),t[o]=i}function l7(t,o){var i=t.pendingLanes&~o;t.pendingLanes=o,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=o,t.mutableReadLanes&=o,t.entangledLanes&=o,o=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<i;){var d=31-Gr(i),h=1<<d;o[d]=0,l[d]=-1,t[d]=-1,i&=~h}}function ly(t,o){var i=t.entangledLanes|=o;for(t=t.entanglements;i;){var l=31-Gr(i),d=1<<l;d&o|t[l]&o&&(t[l]|=o),i&=~d}}var $t=0;function KM(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var YM,cy,QM,ZM,JM,R0=!1,Ff=[],ua=null,ha=null,pa=null,tp=new Map,np=new Map,ia=[],c7="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iD(t,o){switch(t){case"focusin":case"focusout":ua=null;break;case"dragenter":case"dragleave":ha=null;break;case"mouseover":case"mouseout":pa=null;break;case"pointerover":case"pointerout":tp.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":np.delete(o.pointerId)}}function fh(t,o,i,l,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:o,domEventName:i,eventSystemFlags:l,nativeEvent:h,targetContainers:[d]},o!==null&&(o=Mp(o),o!==null&&cy(o)),t):(t.eventSystemFlags|=l,o=t.targetContainers,d!==null&&o.indexOf(d)===-1&&o.push(d),t)}function d7(t,o,i,l,d){switch(o){case"focusin":return ua=fh(ua,t,o,i,l,d),!0;case"dragenter":return ha=fh(ha,t,o,i,l,d),!0;case"mouseover":return pa=fh(pa,t,o,i,l,d),!0;case"pointerover":var h=d.pointerId;return tp.set(h,fh(tp.get(h)||null,t,o,i,l,d)),!0;case"gotpointercapture":return h=d.pointerId,np.set(h,fh(np.get(h)||null,t,o,i,l,d)),!0}return!1}function XM(t){var o=Hl(t.target);if(o!==null){var i=ac(o);if(i!==null){if(o=i.tag,o===13){if(o=$M(i),o!==null){t.blockedOn=o,JM(t.priority,function(){QM(i)});return}}else if(o===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lg(t){if(t.blockedOn!==null)return!1;for(var o=t.targetContainers;0<o.length;){var i=O0(t.domEventName,t.eventSystemFlags,o[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var l=new i.constructor(i.type,i);I0=l,i.target.dispatchEvent(l),I0=null}else return o=Mp(i),o!==null&&cy(o),t.blockedOn=i,!1;o.shift()}return!0}function sD(t,o,i){lg(t)&&i.delete(o)}function u7(){R0=!1,ua!==null&&lg(ua)&&(ua=null),ha!==null&&lg(ha)&&(ha=null),pa!==null&&lg(pa)&&(pa=null),tp.forEach(sD),np.forEach(sD)}function gh(t,o){t.blockedOn===o&&(t.blockedOn=null,R0||(R0=!0,or.unstable_scheduleCallback(or.unstable_NormalPriority,u7)))}function op(t){function o(d){return gh(d,t)}if(0<Ff.length){gh(Ff[0],t);for(var i=1;i<Ff.length;i++){var l=Ff[i];l.blockedOn===t&&(l.blockedOn=null)}}for(ua!==null&&gh(ua,t),ha!==null&&gh(ha,t),pa!==null&&gh(pa,t),tp.forEach(o),np.forEach(o),i=0;i<ia.length;i++)l=ia[i],l.blockedOn===t&&(l.blockedOn=null);for(;0<ia.length&&(i=ia[0],i.blockedOn===null);)XM(i),i.blockedOn===null&&ia.shift()}var Od=vs.ReactCurrentBatchConfig,Mg=!0;function h7(t,o,i,l){var d=$t,h=Od.transition;Od.transition=null;try{$t=1,dy(t,o,i,l)}finally{$t=d,Od.transition=h}}function p7(t,o,i,l){var d=$t,h=Od.transition;Od.transition=null;try{$t=4,dy(t,o,i,l)}finally{$t=d,Od.transition=h}}function dy(t,o,i,l){if(Mg){var d=O0(t,o,i,l);if(d===null)Dw(t,o,l,Pg,i),iD(t,l);else if(d7(d,t,o,i,l))l.stopPropagation();else if(iD(t,l),o&4&&-1<c7.indexOf(t)){for(;d!==null;){var h=Mp(d);if(h!==null&&YM(h),h=O0(t,o,i,l),h===null&&Dw(t,o,l,Pg,i),h===d)break;d=h}d!==null&&l.stopPropagation()}else Dw(t,o,l,null,i)}}var Pg=null;function O0(t,o,i,l){if(Pg=null,t=sy(l),t=Hl(t),t!==null)if(o=ac(t),o===null)t=null;else if(i=o.tag,i===13){if(t=$M(o),t!==null)return t;t=null}else if(i===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;t=null}else o!==t&&(t=null);return Pg=t,null}function e5(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(e7()){case ay:return 1;case WM:return 4;case Tg:case t7:return 16;case qM:return 536870912;default:return 16}default:return 16}}var la=null,uy=null,cg=null;function t5(){if(cg)return cg;var t,o=uy,i=o.length,l,d="value"in la?la.value:la.textContent,h=d.length;for(t=0;t<i&&o[t]===d[t];t++);var f=i-t;for(l=1;l<=f&&o[i-l]===d[h-l];l++);return cg=d.slice(t,1<l?1-l:void 0)}function dg(t){var o=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&o===13&&(t=13)):t=o,t===10&&(t=13),32<=t||t===13?t:0}function $f(){return!0}function aD(){return!1}function ar(t){function o(i,l,d,h,f){this._reactName=i,this._targetInst=d,this.type=l,this.nativeEvent=h,this.target=f,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(i=t[b],this[b]=i?i(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?$f:aD,this.isPropagationStopped=aD,this}return gn(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=$f)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=$f)},persist:function(){},isPersistent:$f}),o}var lu={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hy=ar(lu),Ip=gn({},lu,{view:0,detail:0}),f7=ar(Ip),ww,vw,mh,wm=gn({},Ip,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:py,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mh&&(mh&&t.type==="mousemove"?(ww=t.screenX-mh.screenX,vw=t.screenY-mh.screenY):vw=ww=0,mh=t),ww)},movementY:function(t){return"movementY"in t?t.movementY:vw}}),lD=ar(wm),g7=gn({},wm,{dataTransfer:0}),m7=ar(g7),b7=gn({},Ip,{relatedTarget:0}),yw=ar(b7),k7=gn({},lu,{animationName:0,elapsedTime:0,pseudoElement:0}),w7=ar(k7),v7=gn({},lu,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),y7=ar(v7),C7=gn({},lu,{data:0}),cD=ar(C7),A7={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_7={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x7={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E7(t){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(t):(t=x7[t])?!!o[t]:!1}function py(){return E7}var S7=gn({},Ip,{key:function(t){if(t.key){var o=A7[t.key]||t.key;if(o!=="Unidentified")return o}return t.type==="keypress"?(t=dg(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_7[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:py,charCode:function(t){return t.type==="keypress"?dg(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dg(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D7=ar(S7),T7=gn({},wm,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dD=ar(T7),I7=gn({},Ip,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:py}),M7=ar(I7),P7=gn({},lu,{propertyName:0,elapsedTime:0,pseudoElement:0}),N7=ar(P7),B7=gn({},wm,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R7=ar(B7),O7=[9,13,27,32],fy=gs&&"CompositionEvent"in window,Lh=null;gs&&"documentMode"in document&&(Lh=document.documentMode);var L7=gs&&"TextEvent"in window&&!Lh,n5=gs&&(!fy||Lh&&8<Lh&&11>=Lh),uD=String.fromCharCode(32),hD=!1;function o5(t,o){switch(t){case"keyup":return O7.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r5(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cd=!1;function z7(t,o){switch(t){case"compositionend":return r5(o);case"keypress":return o.which!==32?null:(hD=!0,uD);case"textInput":return t=o.data,t===uD&&hD?null:t;default:return null}}function j7(t,o){if(Cd)return t==="compositionend"||!fy&&o5(t,o)?(t=t5(),cg=uy=la=null,Cd=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return n5&&o.locale!=="ko"?null:o.data;default:return null}}var F7={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pD(t){var o=t&&t.nodeName&&t.nodeName.toLowerCase();return o==="input"?!!F7[t.type]:o==="textarea"}function i5(t,o,i,l){OM(l),o=Ng(o,"onChange"),0<o.length&&(i=new hy("onChange","change",null,i,l),t.push({event:i,listeners:o}))}var zh=null,rp=null;function $7(t){m5(t,0)}function vm(t){var o=xd(t);if(TM(o))return t}function V7(t,o){if(t==="change")return o}var s5=!1;if(gs){var Cw;if(gs){var Aw="oninput"in document;if(!Aw){var fD=document.createElement("div");fD.setAttribute("oninput","return;"),Aw=typeof fD.oninput=="function"}Cw=Aw}else Cw=!1;s5=Cw&&(!document.documentMode||9<document.documentMode)}function gD(){zh&&(zh.detachEvent("onpropertychange",a5),rp=zh=null)}function a5(t){if(t.propertyName==="value"&&vm(rp)){var o=[];i5(o,rp,t,sy(t)),FM($7,o)}}function U7(t,o,i){t==="focusin"?(gD(),zh=o,rp=i,zh.attachEvent("onpropertychange",a5)):t==="focusout"&&gD()}function H7(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vm(rp)}function W7(t,o){if(t==="click")return vm(o)}function q7(t,o){if(t==="input"||t==="change")return vm(o)}function G7(t,o){return t===o&&(t!==0||1/t===1/o)||t!==t&&o!==o}var Qr=typeof Object.is=="function"?Object.is:G7;function ip(t,o){if(Qr(t,o))return!0;if(typeof t!="object"||t===null||typeof o!="object"||o===null)return!1;var i=Object.keys(t),l=Object.keys(o);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var d=i[l];if(!k0.call(o,d)||!Qr(t[d],o[d]))return!1}return!0}function mD(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bD(t,o){var i=mD(t);t=0;for(var l;i;){if(i.nodeType===3){if(l=t+i.textContent.length,t<=o&&l>=o)return{node:i,offset:o-t};t=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=mD(i)}}function l5(t,o){return t&&o?t===o?!0:t&&t.nodeType===3?!1:o&&o.nodeType===3?l5(t,o.parentNode):"contains"in t?t.contains(o):t.compareDocumentPosition?!!(t.compareDocumentPosition(o)&16):!1:!1}function c5(){for(var t=window,o=Eg();o instanceof t.HTMLIFrameElement;){try{var i=typeof o.contentWindow.location.href=="string"}catch{i=!1}if(i)t=o.contentWindow;else break;o=Eg(t.document)}return o}function gy(t){var o=t&&t.nodeName&&t.nodeName.toLowerCase();return o&&(o==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||o==="textarea"||t.contentEditable==="true")}function K7(t){var o=c5(),i=t.focusedElem,l=t.selectionRange;if(o!==i&&i&&i.ownerDocument&&l5(i.ownerDocument.documentElement,i)){if(l!==null&&gy(i)){if(o=l.start,t=l.end,t===void 0&&(t=o),"selectionStart"in i)i.selectionStart=o,i.selectionEnd=Math.min(t,i.value.length);else if(t=(o=i.ownerDocument||document)&&o.defaultView||window,t.getSelection){t=t.getSelection();var d=i.textContent.length,h=Math.min(l.start,d);l=l.end===void 0?h:Math.min(l.end,d),!t.extend&&h>l&&(d=l,l=h,h=d),d=bD(i,h);var f=bD(i,l);d&&f&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==f.node||t.focusOffset!==f.offset)&&(o=o.createRange(),o.setStart(d.node,d.offset),t.removeAllRanges(),h>l?(t.addRange(o),t.extend(f.node,f.offset)):(o.setEnd(f.node,f.offset),t.addRange(o)))}}for(o=[],t=i;t=t.parentNode;)t.nodeType===1&&o.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<o.length;i++)t=o[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Y7=gs&&"documentMode"in document&&11>=document.documentMode,Ad=null,L0=null,jh=null,z0=!1;function kD(t,o,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;z0||Ad==null||Ad!==Eg(l)||(l=Ad,"selectionStart"in l&&gy(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jh&&ip(jh,l)||(jh=l,l=Ng(L0,"onSelect"),0<l.length&&(o=new hy("onSelect","select",null,o,i),t.push({event:o,listeners:l}),o.target=Ad)))}function Vf(t,o){var i={};return i[t.toLowerCase()]=o.toLowerCase(),i["Webkit"+t]="webkit"+o,i["Moz"+t]="moz"+o,i}var _d={animationend:Vf("Animation","AnimationEnd"),animationiteration:Vf("Animation","AnimationIteration"),animationstart:Vf("Animation","AnimationStart"),transitionend:Vf("Transition","TransitionEnd")},_w={},d5={};gs&&(d5=document.createElement("div").style,"AnimationEvent"in window||(delete _d.animationend.animation,delete _d.animationiteration.animation,delete _d.animationstart.animation),"TransitionEvent"in window||delete _d.transitionend.transition);function ym(t){if(_w[t])return _w[t];if(!_d[t])return t;var o=_d[t],i;for(i in o)if(o.hasOwnProperty(i)&&i in d5)return _w[t]=o[i];return t}var u5=ym("animationend"),h5=ym("animationiteration"),p5=ym("animationstart"),f5=ym("transitionend"),g5=new Map,wD="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ta(t,o){g5.set(t,o),sc(o,[t])}for(var xw=0;xw<wD.length;xw++){var Ew=wD[xw],Q7=Ew.toLowerCase(),Z7=Ew[0].toUpperCase()+Ew.slice(1);Ta(Q7,"on"+Z7)}Ta(u5,"onAnimationEnd");Ta(h5,"onAnimationIteration");Ta(p5,"onAnimationStart");Ta("dblclick","onDoubleClick");Ta("focusin","onFocus");Ta("focusout","onBlur");Ta(f5,"onTransitionEnd");qd("onMouseEnter",["mouseout","mouseover"]);qd("onMouseLeave",["mouseout","mouseover"]);qd("onPointerEnter",["pointerout","pointerover"]);qd("onPointerLeave",["pointerout","pointerover"]);sc("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sc("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sc("onBeforeInput",["compositionend","keypress","textInput","paste"]);sc("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sc("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sc("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mh="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J7=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mh));function vD(t,o,i){var l=t.type||"unknown-event";t.currentTarget=i,Q6(l,o,void 0,t),t.currentTarget=null}function m5(t,o){o=(o&4)!==0;for(var i=0;i<t.length;i++){var l=t[i],d=l.event;l=l.listeners;e:{var h=void 0;if(o)for(var f=l.length-1;0<=f;f--){var b=l[f],m=b.instance,v=b.currentTarget;if(b=b.listener,m!==h&&d.isPropagationStopped())break e;vD(d,b,v),h=m}else for(f=0;f<l.length;f++){if(b=l[f],m=b.instance,v=b.currentTarget,b=b.listener,m!==h&&d.isPropagationStopped())break e;vD(d,b,v),h=m}}}if(Dg)throw t=N0,Dg=!1,N0=null,t}function rn(t,o){var i=o[U0];i===void 0&&(i=o[U0]=new Set);var l=t+"__bubble";i.has(l)||(b5(o,t,2,!1),i.add(l))}function Sw(t,o,i){var l=0;o&&(l|=4),b5(i,t,l,o)}var Uf="_reactListening"+Math.random().toString(36).slice(2);function sp(t){if(!t[Uf]){t[Uf]=!0,_M.forEach(function(i){i!=="selectionchange"&&(J7.has(i)||Sw(i,!1,t),Sw(i,!0,t))});var o=t.nodeType===9?t:t.ownerDocument;o===null||o[Uf]||(o[Uf]=!0,Sw("selectionchange",!1,o))}}function b5(t,o,i,l){switch(e5(o)){case 1:var d=h7;break;case 4:d=p7;break;default:d=dy}i=d.bind(null,o,i,t),d=void 0,!P0||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(o,i,{capture:!0,passive:d}):t.addEventListener(o,i,!0):d!==void 0?t.addEventListener(o,i,{passive:d}):t.addEventListener(o,i,!1)}function Dw(t,o,i,l,d){var h=l;if(!(o&1)&&!(o&2)&&l!==null)e:for(;;){if(l===null)return;var f=l.tag;if(f===3||f===4){var b=l.stateNode.containerInfo;if(b===d||b.nodeType===8&&b.parentNode===d)break;if(f===4)for(f=l.return;f!==null;){var m=f.tag;if((m===3||m===4)&&(m=f.stateNode.containerInfo,m===d||m.nodeType===8&&m.parentNode===d))return;f=f.return}for(;b!==null;){if(f=Hl(b),f===null)return;if(m=f.tag,m===5||m===6){l=h=f;continue e}b=b.parentNode}}l=l.return}FM(function(){var v=h,C=sy(i),_=[];e:{var A=g5.get(t);if(A!==void 0){var S=hy,M=t;switch(t){case"keypress":if(dg(i)===0)break e;case"keydown":case"keyup":S=D7;break;case"focusin":M="focus",S=yw;break;case"focusout":M="blur",S=yw;break;case"beforeblur":case"afterblur":S=yw;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=lD;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=m7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=M7;break;case u5:case h5:case p5:S=w7;break;case f5:S=N7;break;case"scroll":S=f7;break;case"wheel":S=R7;break;case"copy":case"cut":case"paste":S=y7;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=dD}var I=(o&4)!==0,U=!I&&t==="scroll",N=I?A!==null?A+"Capture":null:A;I=[];for(var O=v,L;O!==null;){L=O;var q=L.stateNode;if(L.tag===5&&q!==null&&(L=q,N!==null&&(q=ep(O,N),q!=null&&I.push(ap(O,q,L)))),U)break;O=O.return}0<I.length&&(A=new S(A,M,null,i,C),_.push({event:A,listeners:I}))}}if(!(o&7)){e:{if(A=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",A&&i!==I0&&(M=i.relatedTarget||i.fromElement)&&(Hl(M)||M[ms]))break e;if((S||A)&&(A=C.window===C?C:(A=C.ownerDocument)?A.defaultView||A.parentWindow:window,S?(M=i.relatedTarget||i.toElement,S=v,M=M?Hl(M):null,M!==null&&(U=ac(M),M!==U||M.tag!==5&&M.tag!==6)&&(M=null)):(S=null,M=v),S!==M)){if(I=lD,q="onMouseLeave",N="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(I=dD,q="onPointerLeave",N="onPointerEnter",O="pointer"),U=S==null?A:xd(S),L=M==null?A:xd(M),A=new I(q,O+"leave",S,i,C),A.target=U,A.relatedTarget=L,q=null,Hl(C)===v&&(I=new I(N,O+"enter",M,i,C),I.target=L,I.relatedTarget=U,q=I),U=q,S&&M)t:{for(I=S,N=M,O=0,L=I;L;L=ud(L))O++;for(L=0,q=N;q;q=ud(q))L++;for(;0<O-L;)I=ud(I),O--;for(;0<L-O;)N=ud(N),L--;for(;O--;){if(I===N||N!==null&&I===N.alternate)break t;I=ud(I),N=ud(N)}I=null}else I=null;S!==null&&yD(_,A,S,I,!1),M!==null&&U!==null&&yD(_,U,M,I,!0)}}e:{if(A=v?xd(v):window,S=A.nodeName&&A.nodeName.toLowerCase(),S==="select"||S==="input"&&A.type==="file")var K=V7;else if(pD(A))if(s5)K=q7;else{K=H7;var J=U7}else(S=A.nodeName)&&S.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(K=W7);if(K&&(K=K(t,v))){i5(_,K,i,C);break e}J&&J(t,A,v),t==="focusout"&&(J=A._wrapperState)&&J.controlled&&A.type==="number"&&x0(A,"number",A.value)}switch(J=v?xd(v):window,t){case"focusin":(pD(J)||J.contentEditable==="true")&&(Ad=J,L0=v,jh=null);break;case"focusout":jh=L0=Ad=null;break;case"mousedown":z0=!0;break;case"contextmenu":case"mouseup":case"dragend":z0=!1,kD(_,i,C);break;case"selectionchange":if(Y7)break;case"keydown":case"keyup":kD(_,i,C)}var H;if(fy)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Cd?o5(t,i)&&(F="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(F="onCompositionStart");F&&(n5&&i.locale!=="ko"&&(Cd||F!=="onCompositionStart"?F==="onCompositionEnd"&&Cd&&(H=t5()):(la=C,uy="value"in la?la.value:la.textContent,Cd=!0)),J=Ng(v,F),0<J.length&&(F=new cD(F,t,null,i,C),_.push({event:F,listeners:J}),H?F.data=H:(H=r5(i),H!==null&&(F.data=H)))),(H=L7?z7(t,i):j7(t,i))&&(v=Ng(v,"onBeforeInput"),0<v.length&&(C=new cD("onBeforeInput","beforeinput",null,i,C),_.push({event:C,listeners:v}),C.data=H))}m5(_,o)})}function ap(t,o,i){return{instance:t,listener:o,currentTarget:i}}function Ng(t,o){for(var i=o+"Capture",l=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=ep(t,i),h!=null&&l.unshift(ap(t,h,d)),h=ep(t,o),h!=null&&l.push(ap(t,h,d))),t=t.return}return l}function ud(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yD(t,o,i,l,d){for(var h=o._reactName,f=[];i!==null&&i!==l;){var b=i,m=b.alternate,v=b.stateNode;if(m!==null&&m===l)break;b.tag===5&&v!==null&&(b=v,d?(m=ep(i,h),m!=null&&f.unshift(ap(i,m,b))):d||(m=ep(i,h),m!=null&&f.push(ap(i,m,b)))),i=i.return}f.length!==0&&t.push({event:o,listeners:f})}var X7=/\r\n?/g,e$=/\u0000|\uFFFD/g;function CD(t){return(typeof t=="string"?t:""+t).replace(X7,`
`).replace(e$,"")}function Hf(t,o,i){if(o=CD(o),CD(t)!==o&&i)throw Error(ye(425))}function Bg(){}var j0=null,F0=null;function $0(t,o){return t==="textarea"||t==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var V0=typeof setTimeout=="function"?setTimeout:void 0,t$=typeof clearTimeout=="function"?clearTimeout:void 0,AD=typeof Promise=="function"?Promise:void 0,n$=typeof queueMicrotask=="function"?queueMicrotask:typeof AD<"u"?function(t){return AD.resolve(null).then(t).catch(o$)}:V0;function o$(t){setTimeout(function(){throw t})}function Tw(t,o){var i=o,l=0;do{var d=i.nextSibling;if(t.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"){if(l===0){t.removeChild(d),op(o);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=d}while(i);op(o)}function fa(t){for(;t!=null;t=t.nextSibling){var o=t.nodeType;if(o===1||o===3)break;if(o===8){if(o=t.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return t}function _D(t){t=t.previousSibling;for(var o=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(o===0)return t;o--}else i==="/$"&&o++}t=t.previousSibling}return null}var cu=Math.random().toString(36).slice(2),Pi="__reactFiber$"+cu,lp="__reactProps$"+cu,ms="__reactContainer$"+cu,U0="__reactEvents$"+cu,r$="__reactListeners$"+cu,i$="__reactHandles$"+cu;function Hl(t){var o=t[Pi];if(o)return o;for(var i=t.parentNode;i;){if(o=i[ms]||i[Pi]){if(i=o.alternate,o.child!==null||i!==null&&i.child!==null)for(t=_D(t);t!==null;){if(i=t[Pi])return i;t=_D(t)}return o}t=i,i=t.parentNode}return null}function Mp(t){return t=t[Pi]||t[ms],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xd(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ye(33))}function Cm(t){return t[lp]||null}var H0=[],Ed=-1;function Ia(t){return{current:t}}function sn(t){0>Ed||(t.current=H0[Ed],H0[Ed]=null,Ed--)}function tn(t,o){Ed++,H0[Ed]=t.current,t.current=o}var _a={},bo=Ia(_a),Bo=Ia(!1),Jl=_a;function Gd(t,o){var i=t.type.contextTypes;if(!i)return _a;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===o)return l.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in i)d[h]=o[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=o,t.__reactInternalMemoizedMaskedChildContext=d),d}function Ro(t){return t=t.childContextTypes,t!=null}function Rg(){sn(Bo),sn(bo)}function xD(t,o,i){if(bo.current!==_a)throw Error(ye(168));tn(bo,o),tn(Bo,i)}function k5(t,o,i){var l=t.stateNode;if(o=o.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var d in l)if(!(d in o))throw Error(ye(108,U6(t)||"Unknown",d));return gn({},i,l)}function Og(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_a,Jl=bo.current,tn(bo,t),tn(Bo,Bo.current),!0}function ED(t,o,i){var l=t.stateNode;if(!l)throw Error(ye(169));i?(t=k5(t,o,Jl),l.__reactInternalMemoizedMergedChildContext=t,sn(Bo),sn(bo),tn(bo,t)):sn(Bo),tn(Bo,i)}var ds=null,Am=!1,Iw=!1;function w5(t){ds===null?ds=[t]:ds.push(t)}function s$(t){Am=!0,w5(t)}function Ma(){if(!Iw&&ds!==null){Iw=!0;var t=0,o=$t;try{var i=ds;for($t=1;t<i.length;t++){var l=i[t];do l=l(!0);while(l!==null)}ds=null,Am=!1}catch(d){throw ds!==null&&(ds=ds.slice(t+1)),HM(ay,Ma),d}finally{$t=o,Iw=!1}}return null}var Sd=[],Dd=0,Lg=null,zg=0,vr=[],yr=0,Xl=null,us=1,hs="";function Ol(t,o){Sd[Dd++]=zg,Sd[Dd++]=Lg,Lg=t,zg=o}function v5(t,o,i){vr[yr++]=us,vr[yr++]=hs,vr[yr++]=Xl,Xl=t;var l=us;t=hs;var d=32-Gr(l)-1;l&=~(1<<d),i+=1;var h=32-Gr(o)+d;if(30<h){var f=d-d%5;h=(l&(1<<f)-1).toString(32),l>>=f,d-=f,us=1<<32-Gr(o)+d|i<<d|l,hs=h+t}else us=1<<h|i<<d|l,hs=t}function my(t){t.return!==null&&(Ol(t,1),v5(t,1,0))}function by(t){for(;t===Lg;)Lg=Sd[--Dd],Sd[Dd]=null,zg=Sd[--Dd],Sd[Dd]=null;for(;t===Xl;)Xl=vr[--yr],vr[yr]=null,hs=vr[--yr],vr[yr]=null,us=vr[--yr],vr[yr]=null}var tr=null,er=null,un=!1,Wr=null;function y5(t,o){var i=Cr(5,null,null,0);i.elementType="DELETED",i.stateNode=o,i.return=t,o=t.deletions,o===null?(t.deletions=[i],t.flags|=16):o.push(i)}function SD(t,o){switch(t.tag){case 5:var i=t.type;return o=o.nodeType!==1||i.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(t.stateNode=o,tr=t,er=fa(o.firstChild),!0):!1;case 6:return o=t.pendingProps===""||o.nodeType!==3?null:o,o!==null?(t.stateNode=o,tr=t,er=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(i=Xl!==null?{id:us,overflow:hs}:null,t.memoizedState={dehydrated:o,treeContext:i,retryLane:1073741824},i=Cr(18,null,null,0),i.stateNode=o,i.return=t,t.child=i,tr=t,er=null,!0):!1;default:return!1}}function W0(t){return(t.mode&1)!==0&&(t.flags&128)===0}function q0(t){if(un){var o=er;if(o){var i=o;if(!SD(t,o)){if(W0(t))throw Error(ye(418));o=fa(i.nextSibling);var l=tr;o&&SD(t,o)?y5(l,i):(t.flags=t.flags&-4097|2,un=!1,tr=t)}}else{if(W0(t))throw Error(ye(418));t.flags=t.flags&-4097|2,un=!1,tr=t}}}function DD(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tr=t}function Wf(t){if(t!==tr)return!1;if(!un)return DD(t),un=!0,!1;var o;if((o=t.tag!==3)&&!(o=t.tag!==5)&&(o=t.type,o=o!=="head"&&o!=="body"&&!$0(t.type,t.memoizedProps)),o&&(o=er)){if(W0(t))throw C5(),Error(ye(418));for(;o;)y5(t,o),o=fa(o.nextSibling)}if(DD(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ye(317));e:{for(t=t.nextSibling,o=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(o===0){er=fa(t.nextSibling);break e}o--}else i!=="$"&&i!=="$!"&&i!=="$?"||o++}t=t.nextSibling}er=null}}else er=tr?fa(t.stateNode.nextSibling):null;return!0}function C5(){for(var t=er;t;)t=fa(t.nextSibling)}function Kd(){er=tr=null,un=!1}function ky(t){Wr===null?Wr=[t]:Wr.push(t)}var a$=vs.ReactCurrentBatchConfig;function Ur(t,o){if(t&&t.defaultProps){o=gn({},o),t=t.defaultProps;for(var i in t)o[i]===void 0&&(o[i]=t[i]);return o}return o}var jg=Ia(null),Fg=null,Td=null,wy=null;function vy(){wy=Td=Fg=null}function yy(t){var o=jg.current;sn(jg),t._currentValue=o}function G0(t,o,i){for(;t!==null;){var l=t.alternate;if((t.childLanes&o)!==o?(t.childLanes|=o,l!==null&&(l.childLanes|=o)):l!==null&&(l.childLanes&o)!==o&&(l.childLanes|=o),t===i)break;t=t.return}}function Ld(t,o){Fg=t,wy=Td=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&o&&(No=!0),t.firstContext=null)}function xr(t){var o=t._currentValue;if(wy!==t)if(t={context:t,memoizedValue:o,next:null},Td===null){if(Fg===null)throw Error(ye(308));Td=t,Fg.dependencies={lanes:0,firstContext:t}}else Td=Td.next=t;return o}var Wl=null;function Cy(t){Wl===null?Wl=[t]:Wl.push(t)}function A5(t,o,i,l){var d=o.interleaved;return d===null?(i.next=i,Cy(o)):(i.next=d.next,d.next=i),o.interleaved=i,bs(t,l)}function bs(t,o){t.lanes|=o;var i=t.alternate;for(i!==null&&(i.lanes|=o),i=t,t=t.return;t!==null;)t.childLanes|=o,i=t.alternate,i!==null&&(i.childLanes|=o),i=t,t=t.return;return i.tag===3?i.stateNode:null}var ra=!1;function Ay(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _5(t,o){t=t.updateQueue,o.updateQueue===t&&(o.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ps(t,o){return{eventTime:t,lane:o,tag:0,payload:null,callback:null,next:null}}function ga(t,o,i){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,kt&2){var d=l.pending;return d===null?o.next=o:(o.next=d.next,d.next=o),l.pending=o,bs(t,i)}return d=l.interleaved,d===null?(o.next=o,Cy(l)):(o.next=d.next,d.next=o),l.interleaved=o,bs(t,i)}function ug(t,o,i){if(o=o.updateQueue,o!==null&&(o=o.shared,(i&4194240)!==0)){var l=o.lanes;l&=t.pendingLanes,i|=l,o.lanes=i,ly(t,i)}}function TD(t,o){var i=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var d=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var f={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};h===null?d=h=f:h=h.next=f,i=i.next}while(i!==null);h===null?d=h=o:h=h.next=o}else d=h=o;i={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=o:t.next=o,i.lastBaseUpdate=o}function $g(t,o,i,l){var d=t.updateQueue;ra=!1;var h=d.firstBaseUpdate,f=d.lastBaseUpdate,b=d.shared.pending;if(b!==null){d.shared.pending=null;var m=b,v=m.next;m.next=null,f===null?h=v:f.next=v,f=m;var C=t.alternate;C!==null&&(C=C.updateQueue,b=C.lastBaseUpdate,b!==f&&(b===null?C.firstBaseUpdate=v:b.next=v,C.lastBaseUpdate=m))}if(h!==null){var _=d.baseState;f=0,C=v=m=null,b=h;do{var A=b.lane,S=b.eventTime;if((l&A)===A){C!==null&&(C=C.next={eventTime:S,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var M=t,I=b;switch(A=o,S=i,I.tag){case 1:if(M=I.payload,typeof M=="function"){_=M.call(S,_,A);break e}_=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=I.payload,A=typeof M=="function"?M.call(S,_,A):M,A==null)break e;_=gn({},_,A);break e;case 2:ra=!0}}b.callback!==null&&b.lane!==0&&(t.flags|=64,A=d.effects,A===null?d.effects=[b]:A.push(b))}else S={eventTime:S,lane:A,tag:b.tag,payload:b.payload,callback:b.callback,next:null},C===null?(v=C=S,m=_):C=C.next=S,f|=A;if(b=b.next,b===null){if(b=d.shared.pending,b===null)break;A=b,b=A.next,A.next=null,d.lastBaseUpdate=A,d.shared.pending=null}}while(1);if(C===null&&(m=_),d.baseState=m,d.firstBaseUpdate=v,d.lastBaseUpdate=C,o=d.shared.interleaved,o!==null){d=o;do f|=d.lane,d=d.next;while(d!==o)}else h===null&&(d.shared.lanes=0);tc|=f,t.lanes=f,t.memoizedState=_}}function ID(t,o,i){if(t=o.effects,o.effects=null,t!==null)for(o=0;o<t.length;o++){var l=t[o],d=l.callback;if(d!==null){if(l.callback=null,l=i,typeof d!="function")throw Error(ye(191,d));d.call(l)}}}var x5=new AM.Component().refs;function K0(t,o,i,l){o=t.memoizedState,i=i(l,o),i=i==null?o:gn({},o,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var _m={isMounted:function(t){return(t=t._reactInternals)?ac(t)===t:!1},enqueueSetState:function(t,o,i){t=t._reactInternals;var l=Co(),d=ba(t),h=ps(l,d);h.payload=o,i!=null&&(h.callback=i),o=ga(t,h,d),o!==null&&(Kr(o,t,d,l),ug(o,t,d))},enqueueReplaceState:function(t,o,i){t=t._reactInternals;var l=Co(),d=ba(t),h=ps(l,d);h.tag=1,h.payload=o,i!=null&&(h.callback=i),o=ga(t,h,d),o!==null&&(Kr(o,t,d,l),ug(o,t,d))},enqueueForceUpdate:function(t,o){t=t._reactInternals;var i=Co(),l=ba(t),d=ps(i,l);d.tag=2,o!=null&&(d.callback=o),o=ga(t,d,l),o!==null&&(Kr(o,t,l,i),ug(o,t,l))}};function MD(t,o,i,l,d,h,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,f):o.prototype&&o.prototype.isPureReactComponent?!ip(i,l)||!ip(d,h):!0}function E5(t,o,i){var l=!1,d=_a,h=o.contextType;return typeof h=="object"&&h!==null?h=xr(h):(d=Ro(o)?Jl:bo.current,l=o.contextTypes,h=(l=l!=null)?Gd(t,d):_a),o=new o(i,h),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=_m,t.stateNode=o,o._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),o}function PD(t,o,i,l){t=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(i,l),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(i,l),o.state!==t&&_m.enqueueReplaceState(o,o.state,null)}function Y0(t,o,i,l){var d=t.stateNode;d.props=i,d.state=t.memoizedState,d.refs=x5,Ay(t);var h=o.contextType;typeof h=="object"&&h!==null?d.context=xr(h):(h=Ro(o)?Jl:bo.current,d.context=Gd(t,h)),d.state=t.memoizedState,h=o.getDerivedStateFromProps,typeof h=="function"&&(K0(t,o,h,i),d.state=t.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(o=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),o!==d.state&&_m.enqueueReplaceState(d,d.state,null),$g(t,i,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function bh(t,o,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(ye(309));var l=i.stateNode}if(!l)throw Error(ye(147,t));var d=l,h=""+t;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===h?o.ref:(o=function(f){var b=d.refs;b===x5&&(b=d.refs={}),f===null?delete b[h]:b[h]=f},o._stringRef=h,o)}if(typeof t!="string")throw Error(ye(284));if(!i._owner)throw Error(ye(290,t))}return t}function qf(t,o){throw t=Object.prototype.toString.call(o),Error(ye(31,t==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":t))}function ND(t){var o=t._init;return o(t._payload)}function S5(t){function o(N,O){if(t){var L=N.deletions;L===null?(N.deletions=[O],N.flags|=16):L.push(O)}}function i(N,O){if(!t)return null;for(;O!==null;)o(N,O),O=O.sibling;return null}function l(N,O){for(N=new Map;O!==null;)O.key!==null?N.set(O.key,O):N.set(O.index,O),O=O.sibling;return N}function d(N,O){return N=ka(N,O),N.index=0,N.sibling=null,N}function h(N,O,L){return N.index=L,t?(L=N.alternate,L!==null?(L=L.index,L<O?(N.flags|=2,O):L):(N.flags|=2,O)):(N.flags|=1048576,O)}function f(N){return t&&N.alternate===null&&(N.flags|=2),N}function b(N,O,L,q){return O===null||O.tag!==6?(O=Lw(L,N.mode,q),O.return=N,O):(O=d(O,L),O.return=N,O)}function m(N,O,L,q){var K=L.type;return K===yd?C(N,O,L.props.children,q,L.key):O!==null&&(O.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===oa&&ND(K)===O.type)?(q=d(O,L.props),q.ref=bh(N,O,L),q.return=N,q):(q=bg(L.type,L.key,L.props,null,N.mode,q),q.ref=bh(N,O,L),q.return=N,q)}function v(N,O,L,q){return O===null||O.tag!==4||O.stateNode.containerInfo!==L.containerInfo||O.stateNode.implementation!==L.implementation?(O=zw(L,N.mode,q),O.return=N,O):(O=d(O,L.children||[]),O.return=N,O)}function C(N,O,L,q,K){return O===null||O.tag!==7?(O=Ql(L,N.mode,q,K),O.return=N,O):(O=d(O,L),O.return=N,O)}function _(N,O,L){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Lw(""+O,N.mode,L),O.return=N,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Rf:return L=bg(O.type,O.key,O.props,null,N.mode,L),L.ref=bh(N,null,O),L.return=N,L;case vd:return O=zw(O,N.mode,L),O.return=N,O;case oa:var q=O._init;return _(N,q(O._payload),L)}if(Th(O)||hh(O))return O=Ql(O,N.mode,L,null),O.return=N,O;qf(N,O)}return null}function A(N,O,L,q){var K=O!==null?O.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return K!==null?null:b(N,O,""+L,q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Rf:return L.key===K?m(N,O,L,q):null;case vd:return L.key===K?v(N,O,L,q):null;case oa:return K=L._init,A(N,O,K(L._payload),q)}if(Th(L)||hh(L))return K!==null?null:C(N,O,L,q,null);qf(N,L)}return null}function S(N,O,L,q,K){if(typeof q=="string"&&q!==""||typeof q=="number")return N=N.get(L)||null,b(O,N,""+q,K);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case Rf:return N=N.get(q.key===null?L:q.key)||null,m(O,N,q,K);case vd:return N=N.get(q.key===null?L:q.key)||null,v(O,N,q,K);case oa:var J=q._init;return S(N,O,L,J(q._payload),K)}if(Th(q)||hh(q))return N=N.get(L)||null,C(O,N,q,K,null);qf(O,q)}return null}function M(N,O,L,q){for(var K=null,J=null,H=O,F=O=0,X=null;H!==null&&F<L.length;F++){H.index>F?(X=H,H=null):X=H.sibling;var ee=A(N,H,L[F],q);if(ee===null){H===null&&(H=X);break}t&&H&&ee.alternate===null&&o(N,H),O=h(ee,O,F),J===null?K=ee:J.sibling=ee,J=ee,H=X}if(F===L.length)return i(N,H),un&&Ol(N,F),K;if(H===null){for(;F<L.length;F++)H=_(N,L[F],q),H!==null&&(O=h(H,O,F),J===null?K=H:J.sibling=H,J=H);return un&&Ol(N,F),K}for(H=l(N,H);F<L.length;F++)X=S(H,N,F,L[F],q),X!==null&&(t&&X.alternate!==null&&H.delete(X.key===null?F:X.key),O=h(X,O,F),J===null?K=X:J.sibling=X,J=X);return t&&H.forEach(function(ce){return o(N,ce)}),un&&Ol(N,F),K}function I(N,O,L,q){var K=hh(L);if(typeof K!="function")throw Error(ye(150));if(L=K.call(L),L==null)throw Error(ye(151));for(var J=K=null,H=O,F=O=0,X=null,ee=L.next();H!==null&&!ee.done;F++,ee=L.next()){H.index>F?(X=H,H=null):X=H.sibling;var ce=A(N,H,ee.value,q);if(ce===null){H===null&&(H=X);break}t&&H&&ce.alternate===null&&o(N,H),O=h(ce,O,F),J===null?K=ce:J.sibling=ce,J=ce,H=X}if(ee.done)return i(N,H),un&&Ol(N,F),K;if(H===null){for(;!ee.done;F++,ee=L.next())ee=_(N,ee.value,q),ee!==null&&(O=h(ee,O,F),J===null?K=ee:J.sibling=ee,J=ee);return un&&Ol(N,F),K}for(H=l(N,H);!ee.done;F++,ee=L.next())ee=S(H,N,F,ee.value,q),ee!==null&&(t&&ee.alternate!==null&&H.delete(ee.key===null?F:ee.key),O=h(ee,O,F),J===null?K=ee:J.sibling=ee,J=ee);return t&&H.forEach(function(ke){return o(N,ke)}),un&&Ol(N,F),K}function U(N,O,L,q){if(typeof L=="object"&&L!==null&&L.type===yd&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case Rf:e:{for(var K=L.key,J=O;J!==null;){if(J.key===K){if(K=L.type,K===yd){if(J.tag===7){i(N,J.sibling),O=d(J,L.props.children),O.return=N,N=O;break e}}else if(J.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===oa&&ND(K)===J.type){i(N,J.sibling),O=d(J,L.props),O.ref=bh(N,J,L),O.return=N,N=O;break e}i(N,J);break}else o(N,J);J=J.sibling}L.type===yd?(O=Ql(L.props.children,N.mode,q,L.key),O.return=N,N=O):(q=bg(L.type,L.key,L.props,null,N.mode,q),q.ref=bh(N,O,L),q.return=N,N=q)}return f(N);case vd:e:{for(J=L.key;O!==null;){if(O.key===J)if(O.tag===4&&O.stateNode.containerInfo===L.containerInfo&&O.stateNode.implementation===L.implementation){i(N,O.sibling),O=d(O,L.children||[]),O.return=N,N=O;break e}else{i(N,O);break}else o(N,O);O=O.sibling}O=zw(L,N.mode,q),O.return=N,N=O}return f(N);case oa:return J=L._init,U(N,O,J(L._payload),q)}if(Th(L))return M(N,O,L,q);if(hh(L))return I(N,O,L,q);qf(N,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,O!==null&&O.tag===6?(i(N,O.sibling),O=d(O,L),O.return=N,N=O):(i(N,O),O=Lw(L,N.mode,q),O.return=N,N=O),f(N)):i(N,O)}return U}var Yd=S5(!0),D5=S5(!1),Pp={},Oi=Ia(Pp),cp=Ia(Pp),dp=Ia(Pp);function ql(t){if(t===Pp)throw Error(ye(174));return t}function _y(t,o){switch(tn(dp,o),tn(cp,t),tn(Oi,Pp),t=o.nodeType,t){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:S0(null,"");break;default:t=t===8?o.parentNode:o,o=t.namespaceURI||null,t=t.tagName,o=S0(o,t)}sn(Oi),tn(Oi,o)}function Qd(){sn(Oi),sn(cp),sn(dp)}function T5(t){ql(dp.current);var o=ql(Oi.current),i=S0(o,t.type);o!==i&&(tn(cp,t),tn(Oi,i))}function xy(t){cp.current===t&&(sn(Oi),sn(cp))}var pn=Ia(0);function Vg(t){for(var o=t;o!==null;){if(o.tag===13){var i=o.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Mw=[];function Ey(){for(var t=0;t<Mw.length;t++)Mw[t]._workInProgressVersionPrimary=null;Mw.length=0}var hg=vs.ReactCurrentDispatcher,Pw=vs.ReactCurrentBatchConfig,ec=0,fn=null,Vn=null,Qn=null,Ug=!1,Fh=!1,up=0,l$=0;function uo(){throw Error(ye(321))}function Sy(t,o){if(o===null)return!1;for(var i=0;i<o.length&&i<t.length;i++)if(!Qr(t[i],o[i]))return!1;return!0}function Dy(t,o,i,l,d,h){if(ec=h,fn=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,hg.current=t===null||t.memoizedState===null?h$:p$,t=i(l,d),Fh){h=0;do{if(Fh=!1,up=0,25<=h)throw Error(ye(301));h+=1,Qn=Vn=null,o.updateQueue=null,hg.current=f$,t=i(l,d)}while(Fh)}if(hg.current=Hg,o=Vn!==null&&Vn.next!==null,ec=0,Qn=Vn=fn=null,Ug=!1,o)throw Error(ye(300));return t}function Ty(){var t=up!==0;return up=0,t}function Ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qn===null?fn.memoizedState=Qn=t:Qn=Qn.next=t,Qn}function Er(){if(Vn===null){var t=fn.alternate;t=t!==null?t.memoizedState:null}else t=Vn.next;var o=Qn===null?fn.memoizedState:Qn.next;if(o!==null)Qn=o,Vn=t;else{if(t===null)throw Error(ye(310));Vn=t,t={memoizedState:Vn.memoizedState,baseState:Vn.baseState,baseQueue:Vn.baseQueue,queue:Vn.queue,next:null},Qn===null?fn.memoizedState=Qn=t:Qn=Qn.next=t}return Qn}function hp(t,o){return typeof o=="function"?o(t):o}function Nw(t){var o=Er(),i=o.queue;if(i===null)throw Error(ye(311));i.lastRenderedReducer=t;var l=Vn,d=l.baseQueue,h=i.pending;if(h!==null){if(d!==null){var f=d.next;d.next=h.next,h.next=f}l.baseQueue=d=h,i.pending=null}if(d!==null){h=d.next,l=l.baseState;var b=f=null,m=null,v=h;do{var C=v.lane;if((ec&C)===C)m!==null&&(m=m.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),l=v.hasEagerState?v.eagerState:t(l,v.action);else{var _={lane:C,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};m===null?(b=m=_,f=l):m=m.next=_,fn.lanes|=C,tc|=C}v=v.next}while(v!==null&&v!==h);m===null?f=l:m.next=b,Qr(l,o.memoizedState)||(No=!0),o.memoizedState=l,o.baseState=f,o.baseQueue=m,i.lastRenderedState=l}if(t=i.interleaved,t!==null){d=t;do h=d.lane,fn.lanes|=h,tc|=h,d=d.next;while(d!==t)}else d===null&&(i.lanes=0);return[o.memoizedState,i.dispatch]}function Bw(t){var o=Er(),i=o.queue;if(i===null)throw Error(ye(311));i.lastRenderedReducer=t;var l=i.dispatch,d=i.pending,h=o.memoizedState;if(d!==null){i.pending=null;var f=d=d.next;do h=t(h,f.action),f=f.next;while(f!==d);Qr(h,o.memoizedState)||(No=!0),o.memoizedState=h,o.baseQueue===null&&(o.baseState=h),i.lastRenderedState=h}return[h,l]}function I5(){}function M5(t,o){var i=fn,l=Er(),d=o(),h=!Qr(l.memoizedState,d);if(h&&(l.memoizedState=d,No=!0),l=l.queue,Iy(B5.bind(null,i,l,t),[t]),l.getSnapshot!==o||h||Qn!==null&&Qn.memoizedState.tag&1){if(i.flags|=2048,pp(9,N5.bind(null,i,l,d,o),void 0,null),Zn===null)throw Error(ye(349));ec&30||P5(i,o,d)}return d}function P5(t,o,i){t.flags|=16384,t={getSnapshot:o,value:i},o=fn.updateQueue,o===null?(o={lastEffect:null,stores:null},fn.updateQueue=o,o.stores=[t]):(i=o.stores,i===null?o.stores=[t]:i.push(t))}function N5(t,o,i,l){o.value=i,o.getSnapshot=l,R5(o)&&O5(t)}function B5(t,o,i){return i(function(){R5(o)&&O5(t)})}function R5(t){var o=t.getSnapshot;t=t.value;try{var i=o();return!Qr(t,i)}catch{return!0}}function O5(t){var o=bs(t,1);o!==null&&Kr(o,t,1,-1)}function BD(t){var o=Ti();return typeof t=="function"&&(t=t()),o.memoizedState=o.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hp,lastRenderedState:t},o.queue=t,t=t.dispatch=u$.bind(null,fn,t),[o.memoizedState,t]}function pp(t,o,i,l){return t={tag:t,create:o,destroy:i,deps:l,next:null},o=fn.updateQueue,o===null?(o={lastEffect:null,stores:null},fn.updateQueue=o,o.lastEffect=t.next=t):(i=o.lastEffect,i===null?o.lastEffect=t.next=t:(l=i.next,i.next=t,t.next=l,o.lastEffect=t)),t}function L5(){return Er().memoizedState}function pg(t,o,i,l){var d=Ti();fn.flags|=t,d.memoizedState=pp(1|o,i,void 0,l===void 0?null:l)}function xm(t,o,i,l){var d=Er();l=l===void 0?null:l;var h=void 0;if(Vn!==null){var f=Vn.memoizedState;if(h=f.destroy,l!==null&&Sy(l,f.deps)){d.memoizedState=pp(o,i,h,l);return}}fn.flags|=t,d.memoizedState=pp(1|o,i,h,l)}function RD(t,o){return pg(8390656,8,t,o)}function Iy(t,o){return xm(2048,8,t,o)}function z5(t,o){return xm(4,2,t,o)}function j5(t,o){return xm(4,4,t,o)}function F5(t,o){if(typeof o=="function")return t=t(),o(t),function(){o(null)};if(o!=null)return t=t(),o.current=t,function(){o.current=null}}function $5(t,o,i){return i=i!=null?i.concat([t]):null,xm(4,4,F5.bind(null,o,t),i)}function My(){}function V5(t,o){var i=Er();o=o===void 0?null:o;var l=i.memoizedState;return l!==null&&o!==null&&Sy(o,l[1])?l[0]:(i.memoizedState=[t,o],t)}function U5(t,o){var i=Er();o=o===void 0?null:o;var l=i.memoizedState;return l!==null&&o!==null&&Sy(o,l[1])?l[0]:(t=t(),i.memoizedState=[t,o],t)}function H5(t,o,i){return ec&21?(Qr(i,o)||(i=GM(),fn.lanes|=i,tc|=i,t.baseState=!0),o):(t.baseState&&(t.baseState=!1,No=!0),t.memoizedState=i)}function c$(t,o){var i=$t;$t=i!==0&&4>i?i:4,t(!0);var l=Pw.transition;Pw.transition={};try{t(!1),o()}finally{$t=i,Pw.transition=l}}function W5(){return Er().memoizedState}function d$(t,o,i){var l=ba(t);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},q5(t))G5(o,i);else if(i=A5(t,o,i,l),i!==null){var d=Co();Kr(i,t,l,d),K5(i,o,l)}}function u$(t,o,i){var l=ba(t),d={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(q5(t))G5(o,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=o.lastRenderedReducer,h!==null))try{var f=o.lastRenderedState,b=h(f,i);if(d.hasEagerState=!0,d.eagerState=b,Qr(b,f)){var m=o.interleaved;m===null?(d.next=d,Cy(o)):(d.next=m.next,m.next=d),o.interleaved=d;return}}catch{}finally{}i=A5(t,o,d,l),i!==null&&(d=Co(),Kr(i,t,l,d),K5(i,o,l))}}function q5(t){var o=t.alternate;return t===fn||o!==null&&o===fn}function G5(t,o){Fh=Ug=!0;var i=t.pending;i===null?o.next=o:(o.next=i.next,i.next=o),t.pending=o}function K5(t,o,i){if(i&4194240){var l=o.lanes;l&=t.pendingLanes,i|=l,o.lanes=i,ly(t,i)}}var Hg={readContext:xr,useCallback:uo,useContext:uo,useEffect:uo,useImperativeHandle:uo,useInsertionEffect:uo,useLayoutEffect:uo,useMemo:uo,useReducer:uo,useRef:uo,useState:uo,useDebugValue:uo,useDeferredValue:uo,useTransition:uo,useMutableSource:uo,useSyncExternalStore:uo,useId:uo,unstable_isNewReconciler:!1},h$={readContext:xr,useCallback:function(t,o){return Ti().memoizedState=[t,o===void 0?null:o],t},useContext:xr,useEffect:RD,useImperativeHandle:function(t,o,i){return i=i!=null?i.concat([t]):null,pg(4194308,4,F5.bind(null,o,t),i)},useLayoutEffect:function(t,o){return pg(4194308,4,t,o)},useInsertionEffect:function(t,o){return pg(4,2,t,o)},useMemo:function(t,o){var i=Ti();return o=o===void 0?null:o,t=t(),i.memoizedState=[t,o],t},useReducer:function(t,o,i){var l=Ti();return o=i!==void 0?i(o):o,l.memoizedState=l.baseState=o,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:o},l.queue=t,t=t.dispatch=d$.bind(null,fn,t),[l.memoizedState,t]},useRef:function(t){var o=Ti();return t={current:t},o.memoizedState=t},useState:BD,useDebugValue:My,useDeferredValue:function(t){return Ti().memoizedState=t},useTransition:function(){var t=BD(!1),o=t[0];return t=c$.bind(null,t[1]),Ti().memoizedState=t,[o,t]},useMutableSource:function(){},useSyncExternalStore:function(t,o,i){var l=fn,d=Ti();if(un){if(i===void 0)throw Error(ye(407));i=i()}else{if(i=o(),Zn===null)throw Error(ye(349));ec&30||P5(l,o,i)}d.memoizedState=i;var h={value:i,getSnapshot:o};return d.queue=h,RD(B5.bind(null,l,h,t),[t]),l.flags|=2048,pp(9,N5.bind(null,l,h,i,o),void 0,null),i},useId:function(){var t=Ti(),o=Zn.identifierPrefix;if(un){var i=hs,l=us;i=(l&~(1<<32-Gr(l)-1)).toString(32)+i,o=":"+o+"R"+i,i=up++,0<i&&(o+="H"+i.toString(32)),o+=":"}else i=l$++,o=":"+o+"r"+i.toString(32)+":";return t.memoizedState=o},unstable_isNewReconciler:!1},p$={readContext:xr,useCallback:V5,useContext:xr,useEffect:Iy,useImperativeHandle:$5,useInsertionEffect:z5,useLayoutEffect:j5,useMemo:U5,useReducer:Nw,useRef:L5,useState:function(){return Nw(hp)},useDebugValue:My,useDeferredValue:function(t){var o=Er();return H5(o,Vn.memoizedState,t)},useTransition:function(){var t=Nw(hp)[0],o=Er().memoizedState;return[t,o]},useMutableSource:I5,useSyncExternalStore:M5,useId:W5,unstable_isNewReconciler:!1},f$={readContext:xr,useCallback:V5,useContext:xr,useEffect:Iy,useImperativeHandle:$5,useInsertionEffect:z5,useLayoutEffect:j5,useMemo:U5,useReducer:Bw,useRef:L5,useState:function(){return Bw(hp)},useDebugValue:My,useDeferredValue:function(t){var o=Er();return Vn===null?o.memoizedState=t:H5(o,Vn.memoizedState,t)},useTransition:function(){var t=Bw(hp)[0],o=Er().memoizedState;return[t,o]},useMutableSource:I5,useSyncExternalStore:M5,useId:W5,unstable_isNewReconciler:!1};function Zd(t,o){try{var i="",l=o;do i+=V6(l),l=l.return;while(l);var d=i}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:o,stack:d,digest:null}}function Rw(t,o,i){return{value:t,source:null,stack:i??null,digest:o??null}}function Q0(t,o){try{console.error(o.value)}catch(i){setTimeout(function(){throw i})}}var g$=typeof WeakMap=="function"?WeakMap:Map;function Y5(t,o,i){i=ps(-1,i),i.tag=3,i.payload={element:null};var l=o.value;return i.callback=function(){qg||(qg=!0,sv=l),Q0(t,o)},i}function Q5(t,o,i){i=ps(-1,i),i.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=o.value;i.payload=function(){return l(d)},i.callback=function(){Q0(t,o)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(i.callback=function(){Q0(t,o),typeof l!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var f=o.stack;this.componentDidCatch(o.value,{componentStack:f!==null?f:""})}),i}function OD(t,o,i){var l=t.pingCache;if(l===null){l=t.pingCache=new g$;var d=new Set;l.set(o,d)}else d=l.get(o),d===void 0&&(d=new Set,l.set(o,d));d.has(i)||(d.add(i),t=T$.bind(null,t,o,i),o.then(t,t))}function LD(t){do{var o;if((o=t.tag===13)&&(o=t.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return t;t=t.return}while(t!==null);return null}function zD(t,o,i,l,d){return t.mode&1?(t.flags|=65536,t.lanes=d,t):(t===o?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(o=ps(-1,1),o.tag=2,ga(i,o,1))),i.lanes|=1),t)}var m$=vs.ReactCurrentOwner,No=!1;function yo(t,o,i,l){o.child=t===null?D5(o,null,i,l):Yd(o,t.child,i,l)}function jD(t,o,i,l,d){i=i.render;var h=o.ref;return Ld(o,d),l=Dy(t,o,i,l,h,d),i=Ty(),t!==null&&!No?(o.updateQueue=t.updateQueue,o.flags&=-2053,t.lanes&=~d,ks(t,o,d)):(un&&i&&my(o),o.flags|=1,yo(t,o,l,d),o.child)}function FD(t,o,i,l,d){if(t===null){var h=i.type;return typeof h=="function"&&!jy(h)&&h.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(o.tag=15,o.type=h,Z5(t,o,h,l,d)):(t=bg(i.type,null,l,o,o.mode,d),t.ref=o.ref,t.return=o,o.child=t)}if(h=t.child,!(t.lanes&d)){var f=h.memoizedProps;if(i=i.compare,i=i!==null?i:ip,i(f,l)&&t.ref===o.ref)return ks(t,o,d)}return o.flags|=1,t=ka(h,l),t.ref=o.ref,t.return=o,o.child=t}function Z5(t,o,i,l,d){if(t!==null){var h=t.memoizedProps;if(ip(h,l)&&t.ref===o.ref)if(No=!1,o.pendingProps=l=h,(t.lanes&d)!==0)t.flags&131072&&(No=!0);else return o.lanes=t.lanes,ks(t,o,d)}return Z0(t,o,i,l,d)}function J5(t,o,i){var l=o.pendingProps,d=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},tn(Md,Jo),Jo|=i;else{if(!(i&1073741824))return t=h!==null?h.baseLanes|i:i,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:t,cachePool:null,transitions:null},o.updateQueue=null,tn(Md,Jo),Jo|=t,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:i,tn(Md,Jo),Jo|=l}else h!==null?(l=h.baseLanes|i,o.memoizedState=null):l=i,tn(Md,Jo),Jo|=l;return yo(t,o,d,i),o.child}function X5(t,o){var i=o.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(o.flags|=512,o.flags|=2097152)}function Z0(t,o,i,l,d){var h=Ro(i)?Jl:bo.current;return h=Gd(o,h),Ld(o,d),i=Dy(t,o,i,l,h,d),l=Ty(),t!==null&&!No?(o.updateQueue=t.updateQueue,o.flags&=-2053,t.lanes&=~d,ks(t,o,d)):(un&&l&&my(o),o.flags|=1,yo(t,o,i,d),o.child)}function $D(t,o,i,l,d){if(Ro(i)){var h=!0;Og(o)}else h=!1;if(Ld(o,d),o.stateNode===null)fg(t,o),E5(o,i,l),Y0(o,i,l,d),l=!0;else if(t===null){var f=o.stateNode,b=o.memoizedProps;f.props=b;var m=f.context,v=i.contextType;typeof v=="object"&&v!==null?v=xr(v):(v=Ro(i)?Jl:bo.current,v=Gd(o,v));var C=i.getDerivedStateFromProps,_=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function";_||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b!==l||m!==v)&&PD(o,f,l,v),ra=!1;var A=o.memoizedState;f.state=A,$g(o,l,f,d),m=o.memoizedState,b!==l||A!==m||Bo.current||ra?(typeof C=="function"&&(K0(o,i,C,l),m=o.memoizedState),(b=ra||MD(o,i,b,l,A,m,v))?(_||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(o.flags|=4194308)):(typeof f.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=l,o.memoizedState=m),f.props=l,f.state=m,f.context=v,l=b):(typeof f.componentDidMount=="function"&&(o.flags|=4194308),l=!1)}else{f=o.stateNode,_5(t,o),b=o.memoizedProps,v=o.type===o.elementType?b:Ur(o.type,b),f.props=v,_=o.pendingProps,A=f.context,m=i.contextType,typeof m=="object"&&m!==null?m=xr(m):(m=Ro(i)?Jl:bo.current,m=Gd(o,m));var S=i.getDerivedStateFromProps;(C=typeof S=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b!==_||A!==m)&&PD(o,f,l,m),ra=!1,A=o.memoizedState,f.state=A,$g(o,l,f,d);var M=o.memoizedState;b!==_||A!==M||Bo.current||ra?(typeof S=="function"&&(K0(o,i,S,l),M=o.memoizedState),(v=ra||MD(o,i,v,l,A,M,m)||!1)?(C||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,M,m),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,M,m)),typeof f.componentDidUpdate=="function"&&(o.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof f.componentDidUpdate!="function"||b===t.memoizedProps&&A===t.memoizedState||(o.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&A===t.memoizedState||(o.flags|=1024),o.memoizedProps=l,o.memoizedState=M),f.props=l,f.state=M,f.context=m,l=v):(typeof f.componentDidUpdate!="function"||b===t.memoizedProps&&A===t.memoizedState||(o.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&A===t.memoizedState||(o.flags|=1024),l=!1)}return J0(t,o,i,l,h,d)}function J0(t,o,i,l,d,h){X5(t,o);var f=(o.flags&128)!==0;if(!l&&!f)return d&&ED(o,i,!1),ks(t,o,h);l=o.stateNode,m$.current=o;var b=f&&typeof i.getDerivedStateFromError!="function"?null:l.render();return o.flags|=1,t!==null&&f?(o.child=Yd(o,t.child,null,h),o.child=Yd(o,null,b,h)):yo(t,o,b,h),o.memoizedState=l.state,d&&ED(o,i,!0),o.child}function eP(t){var o=t.stateNode;o.pendingContext?xD(t,o.pendingContext,o.pendingContext!==o.context):o.context&&xD(t,o.context,!1),_y(t,o.containerInfo)}function VD(t,o,i,l,d){return Kd(),ky(d),o.flags|=256,yo(t,o,i,l),o.child}var X0={dehydrated:null,treeContext:null,retryLane:0};function ev(t){return{baseLanes:t,cachePool:null,transitions:null}}function tP(t,o,i){var l=o.pendingProps,d=pn.current,h=!1,f=(o.flags&128)!==0,b;if((b=f)||(b=t!==null&&t.memoizedState===null?!1:(d&2)!==0),b?(h=!0,o.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),tn(pn,d&1),t===null)return q0(o),t=o.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(o.mode&1?t.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(f=l.children,t=l.fallback,h?(l=o.mode,h=o.child,f={mode:"hidden",children:f},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=f):h=Dm(f,l,0,null),t=Ql(t,l,i,null),h.return=o,t.return=o,h.sibling=t,o.child=h,o.child.memoizedState=ev(i),o.memoizedState=X0,t):Py(o,f));if(d=t.memoizedState,d!==null&&(b=d.dehydrated,b!==null))return b$(t,o,f,l,b,d,i);if(h){h=l.fallback,f=o.mode,d=t.child,b=d.sibling;var m={mode:"hidden",children:l.children};return!(f&1)&&o.child!==d?(l=o.child,l.childLanes=0,l.pendingProps=m,o.deletions=null):(l=ka(d,m),l.subtreeFlags=d.subtreeFlags&14680064),b!==null?h=ka(b,h):(h=Ql(h,f,i,null),h.flags|=2),h.return=o,l.return=o,l.sibling=h,o.child=l,l=h,h=o.child,f=t.child.memoizedState,f=f===null?ev(i):{baseLanes:f.baseLanes|i,cachePool:null,transitions:f.transitions},h.memoizedState=f,h.childLanes=t.childLanes&~i,o.memoizedState=X0,l}return h=t.child,t=h.sibling,l=ka(h,{mode:"visible",children:l.children}),!(o.mode&1)&&(l.lanes=i),l.return=o,l.sibling=null,t!==null&&(i=o.deletions,i===null?(o.deletions=[t],o.flags|=16):i.push(t)),o.child=l,o.memoizedState=null,l}function Py(t,o){return o=Dm({mode:"visible",children:o},t.mode,0,null),o.return=t,t.child=o}function Gf(t,o,i,l){return l!==null&&ky(l),Yd(o,t.child,null,i),t=Py(o,o.pendingProps.children),t.flags|=2,o.memoizedState=null,t}function b$(t,o,i,l,d,h,f){if(i)return o.flags&256?(o.flags&=-257,l=Rw(Error(ye(422))),Gf(t,o,f,l)):o.memoizedState!==null?(o.child=t.child,o.flags|=128,null):(h=l.fallback,d=o.mode,l=Dm({mode:"visible",children:l.children},d,0,null),h=Ql(h,d,f,null),h.flags|=2,l.return=o,h.return=o,l.sibling=h,o.child=l,o.mode&1&&Yd(o,t.child,null,f),o.child.memoizedState=ev(f),o.memoizedState=X0,h);if(!(o.mode&1))return Gf(t,o,f,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var b=l.dgst;return l=b,h=Error(ye(419)),l=Rw(h,l,void 0),Gf(t,o,f,l)}if(b=(f&t.childLanes)!==0,No||b){if(l=Zn,l!==null){switch(f&-f){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(l.suspendedLanes|f)?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,bs(t,d),Kr(l,t,d,-1))}return zy(),l=Rw(Error(ye(421))),Gf(t,o,f,l)}return d.data==="$?"?(o.flags|=128,o.child=t.child,o=I$.bind(null,t),d._reactRetry=o,null):(t=h.treeContext,er=fa(d.nextSibling),tr=o,un=!0,Wr=null,t!==null&&(vr[yr++]=us,vr[yr++]=hs,vr[yr++]=Xl,us=t.id,hs=t.overflow,Xl=o),o=Py(o,l.children),o.flags|=4096,o)}function UD(t,o,i){t.lanes|=o;var l=t.alternate;l!==null&&(l.lanes|=o),G0(t.return,o,i)}function Ow(t,o,i,l,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:d}:(h.isBackwards=o,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=i,h.tailMode=d)}function nP(t,o,i){var l=o.pendingProps,d=l.revealOrder,h=l.tail;if(yo(t,o,l.children,i),l=pn.current,l&2)l=l&1|2,o.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=o.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&UD(t,i,o);else if(t.tag===19)UD(t,i,o);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===o)break e;for(;t.sibling===null;){if(t.return===null||t.return===o)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(tn(pn,l),!(o.mode&1))o.memoizedState=null;else switch(d){case"forwards":for(i=o.child,d=null;i!==null;)t=i.alternate,t!==null&&Vg(t)===null&&(d=i),i=i.sibling;i=d,i===null?(d=o.child,o.child=null):(d=i.sibling,i.sibling=null),Ow(o,!1,d,i,h);break;case"backwards":for(i=null,d=o.child,o.child=null;d!==null;){if(t=d.alternate,t!==null&&Vg(t)===null){o.child=d;break}t=d.sibling,d.sibling=i,i=d,d=t}Ow(o,!0,i,null,h);break;case"together":Ow(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function fg(t,o){!(o.mode&1)&&t!==null&&(t.alternate=null,o.alternate=null,o.flags|=2)}function ks(t,o,i){if(t!==null&&(o.dependencies=t.dependencies),tc|=o.lanes,!(i&o.childLanes))return null;if(t!==null&&o.child!==t.child)throw Error(ye(153));if(o.child!==null){for(t=o.child,i=ka(t,t.pendingProps),o.child=i,i.return=o;t.sibling!==null;)t=t.sibling,i=i.sibling=ka(t,t.pendingProps),i.return=o;i.sibling=null}return o.child}function k$(t,o,i){switch(o.tag){case 3:eP(o),Kd();break;case 5:T5(o);break;case 1:Ro(o.type)&&Og(o);break;case 4:_y(o,o.stateNode.containerInfo);break;case 10:var l=o.type._context,d=o.memoizedProps.value;tn(jg,l._currentValue),l._currentValue=d;break;case 13:if(l=o.memoizedState,l!==null)return l.dehydrated!==null?(tn(pn,pn.current&1),o.flags|=128,null):i&o.child.childLanes?tP(t,o,i):(tn(pn,pn.current&1),t=ks(t,o,i),t!==null?t.sibling:null);tn(pn,pn.current&1);break;case 19:if(l=(i&o.childLanes)!==0,t.flags&128){if(l)return nP(t,o,i);o.flags|=128}if(d=o.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),tn(pn,pn.current),l)break;return null;case 22:case 23:return o.lanes=0,J5(t,o,i)}return ks(t,o,i)}var oP,tv,rP,iP;oP=function(t,o){for(var i=o.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break;for(;i.sibling===null;){if(i.return===null||i.return===o)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};tv=function(){};rP=function(t,o,i,l){var d=t.memoizedProps;if(d!==l){t=o.stateNode,ql(Oi.current);var h=null;switch(i){case"input":d=A0(t,d),l=A0(t,l),h=[];break;case"select":d=gn({},d,{value:void 0}),l=gn({},l,{value:void 0}),h=[];break;case"textarea":d=E0(t,d),l=E0(t,l),h=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Bg)}D0(i,l);var f;i=null;for(v in d)if(!l.hasOwnProperty(v)&&d.hasOwnProperty(v)&&d[v]!=null)if(v==="style"){var b=d[v];for(f in b)b.hasOwnProperty(f)&&(i||(i={}),i[f]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(Jh.hasOwnProperty(v)?h||(h=[]):(h=h||[]).push(v,null));for(v in l){var m=l[v];if(b=d!=null?d[v]:void 0,l.hasOwnProperty(v)&&m!==b&&(m!=null||b!=null))if(v==="style")if(b){for(f in b)!b.hasOwnProperty(f)||m&&m.hasOwnProperty(f)||(i||(i={}),i[f]="");for(f in m)m.hasOwnProperty(f)&&b[f]!==m[f]&&(i||(i={}),i[f]=m[f])}else i||(h||(h=[]),h.push(v,i)),i=m;else v==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,b=b?b.__html:void 0,m!=null&&b!==m&&(h=h||[]).push(v,m)):v==="children"?typeof m!="string"&&typeof m!="number"||(h=h||[]).push(v,""+m):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(Jh.hasOwnProperty(v)?(m!=null&&v==="onScroll"&&rn("scroll",t),h||b===m||(h=[])):(h=h||[]).push(v,m))}i&&(h=h||[]).push("style",i);var v=h;(o.updateQueue=v)&&(o.flags|=4)}};iP=function(t,o,i,l){i!==l&&(o.flags|=4)};function kh(t,o){if(!un)switch(t.tailMode){case"hidden":o=t.tail;for(var i=null;o!==null;)o.alternate!==null&&(i=o),o=o.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?o||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ho(t){var o=t.alternate!==null&&t.alternate.child===t.child,i=0,l=0;if(o)for(var d=t.child;d!==null;)i|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)i|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=i,o}function w$(t,o,i){var l=o.pendingProps;switch(by(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ho(o),null;case 1:return Ro(o.type)&&Rg(),ho(o),null;case 3:return l=o.stateNode,Qd(),sn(Bo),sn(bo),Ey(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Wf(o)?o.flags|=4:t===null||t.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,Wr!==null&&(cv(Wr),Wr=null))),tv(t,o),ho(o),null;case 5:xy(o);var d=ql(dp.current);if(i=o.type,t!==null&&o.stateNode!=null)rP(t,o,i,l,d),t.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!l){if(o.stateNode===null)throw Error(ye(166));return ho(o),null}if(t=ql(Oi.current),Wf(o)){l=o.stateNode,i=o.type;var h=o.memoizedProps;switch(l[Pi]=o,l[lp]=h,t=(o.mode&1)!==0,i){case"dialog":rn("cancel",l),rn("close",l);break;case"iframe":case"object":case"embed":rn("load",l);break;case"video":case"audio":for(d=0;d<Mh.length;d++)rn(Mh[d],l);break;case"source":rn("error",l);break;case"img":case"image":case"link":rn("error",l),rn("load",l);break;case"details":rn("toggle",l);break;case"input":J2(l,h),rn("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},rn("invalid",l);break;case"textarea":eD(l,h),rn("invalid",l)}D0(i,h),d=null;for(var f in h)if(h.hasOwnProperty(f)){var b=h[f];f==="children"?typeof b=="string"?l.textContent!==b&&(h.suppressHydrationWarning!==!0&&Hf(l.textContent,b,t),d=["children",b]):typeof b=="number"&&l.textContent!==""+b&&(h.suppressHydrationWarning!==!0&&Hf(l.textContent,b,t),d=["children",""+b]):Jh.hasOwnProperty(f)&&b!=null&&f==="onScroll"&&rn("scroll",l)}switch(i){case"input":Of(l),X2(l,h,!0);break;case"textarea":Of(l),tD(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Bg)}l=d,o.updateQueue=l,l!==null&&(o.flags|=4)}else{f=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=PM(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=f.createElement(i,{is:l.is}):(t=f.createElement(i),i==="select"&&(f=t,l.multiple?f.multiple=!0:l.size&&(f.size=l.size))):t=f.createElementNS(t,i),t[Pi]=o,t[lp]=l,oP(t,o,!1,!1),o.stateNode=t;e:{switch(f=T0(i,l),i){case"dialog":rn("cancel",t),rn("close",t),d=l;break;case"iframe":case"object":case"embed":rn("load",t),d=l;break;case"video":case"audio":for(d=0;d<Mh.length;d++)rn(Mh[d],t);d=l;break;case"source":rn("error",t),d=l;break;case"img":case"image":case"link":rn("error",t),rn("load",t),d=l;break;case"details":rn("toggle",t),d=l;break;case"input":J2(t,l),d=A0(t,l),rn("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=gn({},l,{value:void 0}),rn("invalid",t);break;case"textarea":eD(t,l),d=E0(t,l),rn("invalid",t);break;default:d=l}D0(i,d),b=d;for(h in b)if(b.hasOwnProperty(h)){var m=b[h];h==="style"?RM(t,m):h==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&NM(t,m)):h==="children"?typeof m=="string"?(i!=="textarea"||m!=="")&&Xh(t,m):typeof m=="number"&&Xh(t,""+m):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Jh.hasOwnProperty(h)?m!=null&&h==="onScroll"&&rn("scroll",t):m!=null&&ny(t,h,m,f))}switch(i){case"input":Of(t),X2(t,l,!1);break;case"textarea":Of(t),tD(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Aa(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Nd(t,!!l.multiple,h,!1):l.defaultValue!=null&&Nd(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Bg)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return ho(o),null;case 6:if(t&&o.stateNode!=null)iP(t,o,t.memoizedProps,l);else{if(typeof l!="string"&&o.stateNode===null)throw Error(ye(166));if(i=ql(dp.current),ql(Oi.current),Wf(o)){if(l=o.stateNode,i=o.memoizedProps,l[Pi]=o,(h=l.nodeValue!==i)&&(t=tr,t!==null))switch(t.tag){case 3:Hf(l.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hf(l.nodeValue,i,(t.mode&1)!==0)}h&&(o.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[Pi]=o,o.stateNode=l}return ho(o),null;case 13:if(sn(pn),l=o.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(un&&er!==null&&o.mode&1&&!(o.flags&128))C5(),Kd(),o.flags|=98560,h=!1;else if(h=Wf(o),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(ye(318));if(h=o.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(ye(317));h[Pi]=o}else Kd(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;ho(o),h=!1}else Wr!==null&&(cv(Wr),Wr=null),h=!0;if(!h)return o.flags&65536?o:null}return o.flags&128?(o.lanes=i,o):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(o.child.flags|=8192,o.mode&1&&(t===null||pn.current&1?Un===0&&(Un=3):zy())),o.updateQueue!==null&&(o.flags|=4),ho(o),null);case 4:return Qd(),tv(t,o),t===null&&sp(o.stateNode.containerInfo),ho(o),null;case 10:return yy(o.type._context),ho(o),null;case 17:return Ro(o.type)&&Rg(),ho(o),null;case 19:if(sn(pn),h=o.memoizedState,h===null)return ho(o),null;if(l=(o.flags&128)!==0,f=h.rendering,f===null)if(l)kh(h,!1);else{if(Un!==0||t!==null&&t.flags&128)for(t=o.child;t!==null;){if(f=Vg(t),f!==null){for(o.flags|=128,kh(h,!1),l=f.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),o.subtreeFlags=0,l=i,i=o.child;i!==null;)h=i,t=l,h.flags&=14680066,f=h.alternate,f===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=f.childLanes,h.lanes=f.lanes,h.child=f.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=f.memoizedProps,h.memoizedState=f.memoizedState,h.updateQueue=f.updateQueue,h.type=f.type,t=f.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return tn(pn,pn.current&1|2),o.child}t=t.sibling}h.tail!==null&&Tn()>Jd&&(o.flags|=128,l=!0,kh(h,!1),o.lanes=4194304)}else{if(!l)if(t=Vg(f),t!==null){if(o.flags|=128,l=!0,i=t.updateQueue,i!==null&&(o.updateQueue=i,o.flags|=4),kh(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!un)return ho(o),null}else 2*Tn()-h.renderingStartTime>Jd&&i!==1073741824&&(o.flags|=128,l=!0,kh(h,!1),o.lanes=4194304);h.isBackwards?(f.sibling=o.child,o.child=f):(i=h.last,i!==null?i.sibling=f:o.child=f,h.last=f)}return h.tail!==null?(o=h.tail,h.rendering=o,h.tail=o.sibling,h.renderingStartTime=Tn(),o.sibling=null,i=pn.current,tn(pn,l?i&1|2:i&1),o):(ho(o),null);case 22:case 23:return Ly(),l=o.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(o.flags|=8192),l&&o.mode&1?Jo&1073741824&&(ho(o),o.subtreeFlags&6&&(o.flags|=8192)):ho(o),null;case 24:return null;case 25:return null}throw Error(ye(156,o.tag))}function v$(t,o){switch(by(o),o.tag){case 1:return Ro(o.type)&&Rg(),t=o.flags,t&65536?(o.flags=t&-65537|128,o):null;case 3:return Qd(),sn(Bo),sn(bo),Ey(),t=o.flags,t&65536&&!(t&128)?(o.flags=t&-65537|128,o):null;case 5:return xy(o),null;case 13:if(sn(pn),t=o.memoizedState,t!==null&&t.dehydrated!==null){if(o.alternate===null)throw Error(ye(340));Kd()}return t=o.flags,t&65536?(o.flags=t&-65537|128,o):null;case 19:return sn(pn),null;case 4:return Qd(),null;case 10:return yy(o.type._context),null;case 22:case 23:return Ly(),null;case 24:return null;default:return null}}var Kf=!1,go=!1,y$=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Id(t,o){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){An(t,o,l)}else i.current=null}function nv(t,o,i){try{i()}catch(l){An(t,o,l)}}var HD=!1;function C$(t,o){if(j0=Mg,t=c5(),gy(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var d=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var f=0,b=-1,m=-1,v=0,C=0,_=t,A=null;t:for(;;){for(var S;_!==i||d!==0&&_.nodeType!==3||(b=f+d),_!==h||l!==0&&_.nodeType!==3||(m=f+l),_.nodeType===3&&(f+=_.nodeValue.length),(S=_.firstChild)!==null;)A=_,_=S;for(;;){if(_===t)break t;if(A===i&&++v===d&&(b=f),A===h&&++C===l&&(m=f),(S=_.nextSibling)!==null)break;_=A,A=_.parentNode}_=S}i=b===-1||m===-1?null:{start:b,end:m}}else i=null}i=i||{start:0,end:0}}else i=null;for(F0={focusedElem:t,selectionRange:i},Mg=!1,Pe=o;Pe!==null;)if(o=Pe,t=o.child,(o.subtreeFlags&1028)!==0&&t!==null)t.return=o,Pe=t;else for(;Pe!==null;){o=Pe;try{var M=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var I=M.memoizedProps,U=M.memoizedState,N=o.stateNode,O=N.getSnapshotBeforeUpdate(o.elementType===o.type?I:Ur(o.type,I),U);N.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var L=o.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ye(163))}}catch(q){An(o,o.return,q)}if(t=o.sibling,t!==null){t.return=o.return,Pe=t;break}Pe=o.return}return M=HD,HD=!1,M}function $h(t,o,i){var l=o.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&nv(o,i,h)}d=d.next}while(d!==l)}}function Em(t,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&t)===t){var l=i.create;i.destroy=l()}i=i.next}while(i!==o)}}function ov(t){var o=t.ref;if(o!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof o=="function"?o(t):o.current=t}}function sP(t){var o=t.alternate;o!==null&&(t.alternate=null,sP(o)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(o=t.stateNode,o!==null&&(delete o[Pi],delete o[lp],delete o[U0],delete o[r$],delete o[i$])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function aP(t){return t.tag===5||t.tag===3||t.tag===4}function WD(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||aP(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rv(t,o,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,o?i.nodeType===8?i.parentNode.insertBefore(t,o):i.insertBefore(t,o):(i.nodeType===8?(o=i.parentNode,o.insertBefore(t,i)):(o=i,o.appendChild(t)),i=i._reactRootContainer,i!=null||o.onclick!==null||(o.onclick=Bg));else if(l!==4&&(t=t.child,t!==null))for(rv(t,o,i),t=t.sibling;t!==null;)rv(t,o,i),t=t.sibling}function iv(t,o,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,o?i.insertBefore(t,o):i.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(iv(t,o,i),t=t.sibling;t!==null;)iv(t,o,i),t=t.sibling}var no=null,Hr=!1;function Ys(t,o,i){for(i=i.child;i!==null;)lP(t,o,i),i=i.sibling}function lP(t,o,i){if(Ri&&typeof Ri.onCommitFiberUnmount=="function")try{Ri.onCommitFiberUnmount(km,i)}catch{}switch(i.tag){case 5:go||Id(i,o);case 6:var l=no,d=Hr;no=null,Ys(t,o,i),no=l,Hr=d,no!==null&&(Hr?(t=no,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):no.removeChild(i.stateNode));break;case 18:no!==null&&(Hr?(t=no,i=i.stateNode,t.nodeType===8?Tw(t.parentNode,i):t.nodeType===1&&Tw(t,i),op(t)):Tw(no,i.stateNode));break;case 4:l=no,d=Hr,no=i.stateNode.containerInfo,Hr=!0,Ys(t,o,i),no=l,Hr=d;break;case 0:case 11:case 14:case 15:if(!go&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var h=d,f=h.destroy;h=h.tag,f!==void 0&&(h&2||h&4)&&nv(i,o,f),d=d.next}while(d!==l)}Ys(t,o,i);break;case 1:if(!go&&(Id(i,o),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(b){An(i,o,b)}Ys(t,o,i);break;case 21:Ys(t,o,i);break;case 22:i.mode&1?(go=(l=go)||i.memoizedState!==null,Ys(t,o,i),go=l):Ys(t,o,i);break;default:Ys(t,o,i)}}function qD(t){var o=t.updateQueue;if(o!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new y$),o.forEach(function(l){var d=M$.bind(null,t,l);i.has(l)||(i.add(l),l.then(d,d))})}}function Vr(t,o){var i=o.deletions;if(i!==null)for(var l=0;l<i.length;l++){var d=i[l];try{var h=t,f=o,b=f;e:for(;b!==null;){switch(b.tag){case 5:no=b.stateNode,Hr=!1;break e;case 3:no=b.stateNode.containerInfo,Hr=!0;break e;case 4:no=b.stateNode.containerInfo,Hr=!0;break e}b=b.return}if(no===null)throw Error(ye(160));lP(h,f,d),no=null,Hr=!1;var m=d.alternate;m!==null&&(m.return=null),d.return=null}catch(v){An(d,o,v)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)cP(o,t),o=o.sibling}function cP(t,o){var i=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vr(o,t),Di(t),l&4){try{$h(3,t,t.return),Em(3,t)}catch(I){An(t,t.return,I)}try{$h(5,t,t.return)}catch(I){An(t,t.return,I)}}break;case 1:Vr(o,t),Di(t),l&512&&i!==null&&Id(i,i.return);break;case 5:if(Vr(o,t),Di(t),l&512&&i!==null&&Id(i,i.return),t.flags&32){var d=t.stateNode;try{Xh(d,"")}catch(I){An(t,t.return,I)}}if(l&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,f=i!==null?i.memoizedProps:h,b=t.type,m=t.updateQueue;if(t.updateQueue=null,m!==null)try{b==="input"&&h.type==="radio"&&h.name!=null&&IM(d,h),T0(b,f);var v=T0(b,h);for(f=0;f<m.length;f+=2){var C=m[f],_=m[f+1];C==="style"?RM(d,_):C==="dangerouslySetInnerHTML"?NM(d,_):C==="children"?Xh(d,_):ny(d,C,_,v)}switch(b){case"input":_0(d,h);break;case"textarea":MM(d,h);break;case"select":var A=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var S=h.value;S!=null?Nd(d,!!h.multiple,S,!1):A!==!!h.multiple&&(h.defaultValue!=null?Nd(d,!!h.multiple,h.defaultValue,!0):Nd(d,!!h.multiple,h.multiple?[]:"",!1))}d[lp]=h}catch(I){An(t,t.return,I)}}break;case 6:if(Vr(o,t),Di(t),l&4){if(t.stateNode===null)throw Error(ye(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(I){An(t,t.return,I)}}break;case 3:if(Vr(o,t),Di(t),l&4&&i!==null&&i.memoizedState.isDehydrated)try{op(o.containerInfo)}catch(I){An(t,t.return,I)}break;case 4:Vr(o,t),Di(t);break;case 13:Vr(o,t),Di(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Ry=Tn())),l&4&&qD(t);break;case 22:if(C=i!==null&&i.memoizedState!==null,t.mode&1?(go=(v=go)||C,Vr(o,t),go=v):Vr(o,t),Di(t),l&8192){if(v=t.memoizedState!==null,(t.stateNode.isHidden=v)&&!C&&t.mode&1)for(Pe=t,C=t.child;C!==null;){for(_=Pe=C;Pe!==null;){switch(A=Pe,S=A.child,A.tag){case 0:case 11:case 14:case 15:$h(4,A,A.return);break;case 1:Id(A,A.return);var M=A.stateNode;if(typeof M.componentWillUnmount=="function"){l=A,i=A.return;try{o=l,M.props=o.memoizedProps,M.state=o.memoizedState,M.componentWillUnmount()}catch(I){An(l,i,I)}}break;case 5:Id(A,A.return);break;case 22:if(A.memoizedState!==null){KD(_);continue}}S!==null?(S.return=A,Pe=S):KD(_)}C=C.sibling}e:for(C=null,_=t;;){if(_.tag===5){if(C===null){C=_;try{d=_.stateNode,v?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(b=_.stateNode,m=_.memoizedProps.style,f=m!=null&&m.hasOwnProperty("display")?m.display:null,b.style.display=BM("display",f))}catch(I){An(t,t.return,I)}}}else if(_.tag===6){if(C===null)try{_.stateNode.nodeValue=v?"":_.memoizedProps}catch(I){An(t,t.return,I)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===t)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===t)break e;for(;_.sibling===null;){if(_.return===null||_.return===t)break e;C===_&&(C=null),_=_.return}C===_&&(C=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:Vr(o,t),Di(t),l&4&&qD(t);break;case 21:break;default:Vr(o,t),Di(t)}}function Di(t){var o=t.flags;if(o&2){try{e:{for(var i=t.return;i!==null;){if(aP(i)){var l=i;break e}i=i.return}throw Error(ye(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(Xh(d,""),l.flags&=-33);var h=WD(t);iv(t,h,d);break;case 3:case 4:var f=l.stateNode.containerInfo,b=WD(t);rv(t,b,f);break;default:throw Error(ye(161))}}catch(m){An(t,t.return,m)}t.flags&=-3}o&4096&&(t.flags&=-4097)}function A$(t,o,i){Pe=t,dP(t)}function dP(t,o,i){for(var l=(t.mode&1)!==0;Pe!==null;){var d=Pe,h=d.child;if(d.tag===22&&l){var f=d.memoizedState!==null||Kf;if(!f){var b=d.alternate,m=b!==null&&b.memoizedState!==null||go;b=Kf;var v=go;if(Kf=f,(go=m)&&!v)for(Pe=d;Pe!==null;)f=Pe,m=f.child,f.tag===22&&f.memoizedState!==null?YD(d):m!==null?(m.return=f,Pe=m):YD(d);for(;h!==null;)Pe=h,dP(h),h=h.sibling;Pe=d,Kf=b,go=v}GD(t)}else d.subtreeFlags&8772&&h!==null?(h.return=d,Pe=h):GD(t)}}function GD(t){for(;Pe!==null;){var o=Pe;if(o.flags&8772){var i=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:go||Em(5,o);break;case 1:var l=o.stateNode;if(o.flags&4&&!go)if(i===null)l.componentDidMount();else{var d=o.elementType===o.type?i.memoizedProps:Ur(o.type,i.memoizedProps);l.componentDidUpdate(d,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=o.updateQueue;h!==null&&ID(o,h,l);break;case 3:var f=o.updateQueue;if(f!==null){if(i=null,o.child!==null)switch(o.child.tag){case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}ID(o,f,i)}break;case 5:var b=o.stateNode;if(i===null&&o.flags&4){i=b;var m=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&i.focus();break;case"img":m.src&&(i.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var v=o.alternate;if(v!==null){var C=v.memoizedState;if(C!==null){var _=C.dehydrated;_!==null&&op(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ye(163))}go||o.flags&512&&ov(o)}catch(A){An(o,o.return,A)}}if(o===t){Pe=null;break}if(i=o.sibling,i!==null){i.return=o.return,Pe=i;break}Pe=o.return}}function KD(t){for(;Pe!==null;){var o=Pe;if(o===t){Pe=null;break}var i=o.sibling;if(i!==null){i.return=o.return,Pe=i;break}Pe=o.return}}function YD(t){for(;Pe!==null;){var o=Pe;try{switch(o.tag){case 0:case 11:case 15:var i=o.return;try{Em(4,o)}catch(m){An(o,i,m)}break;case 1:var l=o.stateNode;if(typeof l.componentDidMount=="function"){var d=o.return;try{l.componentDidMount()}catch(m){An(o,d,m)}}var h=o.return;try{ov(o)}catch(m){An(o,h,m)}break;case 5:var f=o.return;try{ov(o)}catch(m){An(o,f,m)}}}catch(m){An(o,o.return,m)}if(o===t){Pe=null;break}var b=o.sibling;if(b!==null){b.return=o.return,Pe=b;break}Pe=o.return}}var _$=Math.ceil,Wg=vs.ReactCurrentDispatcher,Ny=vs.ReactCurrentOwner,Ar=vs.ReactCurrentBatchConfig,kt=0,Zn=null,Rn=null,ro=0,Jo=0,Md=Ia(0),Un=0,fp=null,tc=0,Sm=0,By=0,Vh=null,Po=null,Ry=0,Jd=1/0,cs=null,qg=!1,sv=null,ma=null,Yf=!1,ca=null,Gg=0,Uh=0,av=null,gg=-1,mg=0;function Co(){return kt&6?Tn():gg!==-1?gg:gg=Tn()}function ba(t){return t.mode&1?kt&2&&ro!==0?ro&-ro:a$.transition!==null?(mg===0&&(mg=GM()),mg):(t=$t,t!==0||(t=window.event,t=t===void 0?16:e5(t.type)),t):1}function Kr(t,o,i,l){if(50<Uh)throw Uh=0,av=null,Error(ye(185));Tp(t,i,l),(!(kt&2)||t!==Zn)&&(t===Zn&&(!(kt&2)&&(Sm|=i),Un===4&&sa(t,ro)),Oo(t,l),i===1&&kt===0&&!(o.mode&1)&&(Jd=Tn()+500,Am&&Ma()))}function Oo(t,o){var i=t.callbackNode;a7(t,o);var l=Ig(t,t===Zn?ro:0);if(l===0)i!==null&&rD(i),t.callbackNode=null,t.callbackPriority=0;else if(o=l&-l,t.callbackPriority!==o){if(i!=null&&rD(i),o===1)t.tag===0?s$(QD.bind(null,t)):w5(QD.bind(null,t)),n$(function(){!(kt&6)&&Ma()}),i=null;else{switch(KM(l)){case 1:i=ay;break;case 4:i=WM;break;case 16:i=Tg;break;case 536870912:i=qM;break;default:i=Tg}i=kP(i,uP.bind(null,t))}t.callbackPriority=o,t.callbackNode=i}}function uP(t,o){if(gg=-1,mg=0,kt&6)throw Error(ye(327));var i=t.callbackNode;if(zd()&&t.callbackNode!==i)return null;var l=Ig(t,t===Zn?ro:0);if(l===0)return null;if(l&30||l&t.expiredLanes||o)o=Kg(t,l);else{o=l;var d=kt;kt|=2;var h=pP();(Zn!==t||ro!==o)&&(cs=null,Jd=Tn()+500,Yl(t,o));do try{S$();break}catch(b){hP(t,b)}while(1);vy(),Wg.current=h,kt=d,Rn!==null?o=0:(Zn=null,ro=0,o=Un)}if(o!==0){if(o===2&&(d=B0(t),d!==0&&(l=d,o=lv(t,d))),o===1)throw i=fp,Yl(t,0),sa(t,l),Oo(t,Tn()),i;if(o===6)sa(t,l);else{if(d=t.current.alternate,!(l&30)&&!x$(d)&&(o=Kg(t,l),o===2&&(h=B0(t),h!==0&&(l=h,o=lv(t,h))),o===1))throw i=fp,Yl(t,0),sa(t,l),Oo(t,Tn()),i;switch(t.finishedWork=d,t.finishedLanes=l,o){case 0:case 1:throw Error(ye(345));case 2:Ll(t,Po,cs);break;case 3:if(sa(t,l),(l&130023424)===l&&(o=Ry+500-Tn(),10<o)){if(Ig(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){Co(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=V0(Ll.bind(null,t,Po,cs),o);break}Ll(t,Po,cs);break;case 4:if(sa(t,l),(l&4194240)===l)break;for(o=t.eventTimes,d=-1;0<l;){var f=31-Gr(l);h=1<<f,f=o[f],f>d&&(d=f),l&=~h}if(l=d,l=Tn()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*_$(l/1960))-l,10<l){t.timeoutHandle=V0(Ll.bind(null,t,Po,cs),l);break}Ll(t,Po,cs);break;case 5:Ll(t,Po,cs);break;default:throw Error(ye(329))}}}return Oo(t,Tn()),t.callbackNode===i?uP.bind(null,t):null}function lv(t,o){var i=Vh;return t.current.memoizedState.isDehydrated&&(Yl(t,o).flags|=256),t=Kg(t,o),t!==2&&(o=Po,Po=i,o!==null&&cv(o)),t}function cv(t){Po===null?Po=t:Po.push.apply(Po,t)}function x$(t){for(var o=t;;){if(o.flags&16384){var i=o.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var d=i[l],h=d.getSnapshot;d=d.value;try{if(!Qr(h(),d))return!1}catch{return!1}}}if(i=o.child,o.subtreeFlags&16384&&i!==null)i.return=o,o=i;else{if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function sa(t,o){for(o&=~By,o&=~Sm,t.suspendedLanes|=o,t.pingedLanes&=~o,t=t.expirationTimes;0<o;){var i=31-Gr(o),l=1<<i;t[i]=-1,o&=~l}}function QD(t){if(kt&6)throw Error(ye(327));zd();var o=Ig(t,0);if(!(o&1))return Oo(t,Tn()),null;var i=Kg(t,o);if(t.tag!==0&&i===2){var l=B0(t);l!==0&&(o=l,i=lv(t,l))}if(i===1)throw i=fp,Yl(t,0),sa(t,o),Oo(t,Tn()),i;if(i===6)throw Error(ye(345));return t.finishedWork=t.current.alternate,t.finishedLanes=o,Ll(t,Po,cs),Oo(t,Tn()),null}function Oy(t,o){var i=kt;kt|=1;try{return t(o)}finally{kt=i,kt===0&&(Jd=Tn()+500,Am&&Ma())}}function nc(t){ca!==null&&ca.tag===0&&!(kt&6)&&zd();var o=kt;kt|=1;var i=Ar.transition,l=$t;try{if(Ar.transition=null,$t=1,t)return t()}finally{$t=l,Ar.transition=i,kt=o,!(kt&6)&&Ma()}}function Ly(){Jo=Md.current,sn(Md)}function Yl(t,o){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,t$(i)),Rn!==null)for(i=Rn.return;i!==null;){var l=i;switch(by(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Rg();break;case 3:Qd(),sn(Bo),sn(bo),Ey();break;case 5:xy(l);break;case 4:Qd();break;case 13:sn(pn);break;case 19:sn(pn);break;case 10:yy(l.type._context);break;case 22:case 23:Ly()}i=i.return}if(Zn=t,Rn=t=ka(t.current,null),ro=Jo=o,Un=0,fp=null,By=Sm=tc=0,Po=Vh=null,Wl!==null){for(o=0;o<Wl.length;o++)if(i=Wl[o],l=i.interleaved,l!==null){i.interleaved=null;var d=l.next,h=i.pending;if(h!==null){var f=h.next;h.next=d,l.next=f}i.pending=l}Wl=null}return t}function hP(t,o){do{var i=Rn;try{if(vy(),hg.current=Hg,Ug){for(var l=fn.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Ug=!1}if(ec=0,Qn=Vn=fn=null,Fh=!1,up=0,Ny.current=null,i===null||i.return===null){Un=1,fp=o,Rn=null;break}e:{var h=t,f=i.return,b=i,m=o;if(o=ro,b.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var v=m,C=b,_=C.tag;if(!(C.mode&1)&&(_===0||_===11||_===15)){var A=C.alternate;A?(C.updateQueue=A.updateQueue,C.memoizedState=A.memoizedState,C.lanes=A.lanes):(C.updateQueue=null,C.memoizedState=null)}var S=LD(f);if(S!==null){S.flags&=-257,zD(S,f,b,h,o),S.mode&1&&OD(h,v,o),o=S,m=v;var M=o.updateQueue;if(M===null){var I=new Set;I.add(m),o.updateQueue=I}else M.add(m);break e}else{if(!(o&1)){OD(h,v,o),zy();break e}m=Error(ye(426))}}else if(un&&b.mode&1){var U=LD(f);if(U!==null){!(U.flags&65536)&&(U.flags|=256),zD(U,f,b,h,o),ky(Zd(m,b));break e}}h=m=Zd(m,b),Un!==4&&(Un=2),Vh===null?Vh=[h]:Vh.push(h),h=f;do{switch(h.tag){case 3:h.flags|=65536,o&=-o,h.lanes|=o;var N=Y5(h,m,o);TD(h,N);break e;case 1:b=m;var O=h.type,L=h.stateNode;if(!(h.flags&128)&&(typeof O.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(ma===null||!ma.has(L)))){h.flags|=65536,o&=-o,h.lanes|=o;var q=Q5(h,b,o);TD(h,q);break e}}h=h.return}while(h!==null)}gP(i)}catch(K){o=K,Rn===i&&i!==null&&(Rn=i=i.return);continue}break}while(1)}function pP(){var t=Wg.current;return Wg.current=Hg,t===null?Hg:t}function zy(){(Un===0||Un===3||Un===2)&&(Un=4),Zn===null||!(tc&268435455)&&!(Sm&268435455)||sa(Zn,ro)}function Kg(t,o){var i=kt;kt|=2;var l=pP();(Zn!==t||ro!==o)&&(cs=null,Yl(t,o));do try{E$();break}catch(d){hP(t,d)}while(1);if(vy(),kt=i,Wg.current=l,Rn!==null)throw Error(ye(261));return Zn=null,ro=0,Un}function E$(){for(;Rn!==null;)fP(Rn)}function S$(){for(;Rn!==null&&!J6();)fP(Rn)}function fP(t){var o=bP(t.alternate,t,Jo);t.memoizedProps=t.pendingProps,o===null?gP(t):Rn=o,Ny.current=null}function gP(t){var o=t;do{var i=o.alternate;if(t=o.return,o.flags&32768){if(i=v$(i,o),i!==null){i.flags&=32767,Rn=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Un=6,Rn=null;return}}else if(i=w$(i,o,Jo),i!==null){Rn=i;return}if(o=o.sibling,o!==null){Rn=o;return}Rn=o=t}while(o!==null);Un===0&&(Un=5)}function Ll(t,o,i){var l=$t,d=Ar.transition;try{Ar.transition=null,$t=1,D$(t,o,i,l)}finally{Ar.transition=d,$t=l}return null}function D$(t,o,i,l){do zd();while(ca!==null);if(kt&6)throw Error(ye(327));i=t.finishedWork;var d=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(ye(177));t.callbackNode=null,t.callbackPriority=0;var h=i.lanes|i.childLanes;if(l7(t,h),t===Zn&&(Rn=Zn=null,ro=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Yf||(Yf=!0,kP(Tg,function(){return zd(),null})),h=(i.flags&15990)!==0,i.subtreeFlags&15990||h){h=Ar.transition,Ar.transition=null;var f=$t;$t=1;var b=kt;kt|=4,Ny.current=null,C$(t,i),cP(i,t),K7(F0),Mg=!!j0,F0=j0=null,t.current=i,A$(i),X6(),kt=b,$t=f,Ar.transition=h}else t.current=i;if(Yf&&(Yf=!1,ca=t,Gg=d),h=t.pendingLanes,h===0&&(ma=null),n7(i.stateNode),Oo(t,Tn()),o!==null)for(l=t.onRecoverableError,i=0;i<o.length;i++)d=o[i],l(d.value,{componentStack:d.stack,digest:d.digest});if(qg)throw qg=!1,t=sv,sv=null,t;return Gg&1&&t.tag!==0&&zd(),h=t.pendingLanes,h&1?t===av?Uh++:(Uh=0,av=t):Uh=0,Ma(),null}function zd(){if(ca!==null){var t=KM(Gg),o=Ar.transition,i=$t;try{if(Ar.transition=null,$t=16>t?16:t,ca===null)var l=!1;else{if(t=ca,ca=null,Gg=0,kt&6)throw Error(ye(331));var d=kt;for(kt|=4,Pe=t.current;Pe!==null;){var h=Pe,f=h.child;if(Pe.flags&16){var b=h.deletions;if(b!==null){for(var m=0;m<b.length;m++){var v=b[m];for(Pe=v;Pe!==null;){var C=Pe;switch(C.tag){case 0:case 11:case 15:$h(8,C,h)}var _=C.child;if(_!==null)_.return=C,Pe=_;else for(;Pe!==null;){C=Pe;var A=C.sibling,S=C.return;if(sP(C),C===v){Pe=null;break}if(A!==null){A.return=S,Pe=A;break}Pe=S}}}var M=h.alternate;if(M!==null){var I=M.child;if(I!==null){M.child=null;do{var U=I.sibling;I.sibling=null,I=U}while(I!==null)}}Pe=h}}if(h.subtreeFlags&2064&&f!==null)f.return=h,Pe=f;else e:for(;Pe!==null;){if(h=Pe,h.flags&2048)switch(h.tag){case 0:case 11:case 15:$h(9,h,h.return)}var N=h.sibling;if(N!==null){N.return=h.return,Pe=N;break e}Pe=h.return}}var O=t.current;for(Pe=O;Pe!==null;){f=Pe;var L=f.child;if(f.subtreeFlags&2064&&L!==null)L.return=f,Pe=L;else e:for(f=O;Pe!==null;){if(b=Pe,b.flags&2048)try{switch(b.tag){case 0:case 11:case 15:Em(9,b)}}catch(K){An(b,b.return,K)}if(b===f){Pe=null;break e}var q=b.sibling;if(q!==null){q.return=b.return,Pe=q;break e}Pe=b.return}}if(kt=d,Ma(),Ri&&typeof Ri.onPostCommitFiberRoot=="function")try{Ri.onPostCommitFiberRoot(km,t)}catch{}l=!0}return l}finally{$t=i,Ar.transition=o}}return!1}function ZD(t,o,i){o=Zd(i,o),o=Y5(t,o,1),t=ga(t,o,1),o=Co(),t!==null&&(Tp(t,1,o),Oo(t,o))}function An(t,o,i){if(t.tag===3)ZD(t,t,i);else for(;o!==null;){if(o.tag===3){ZD(o,t,i);break}else if(o.tag===1){var l=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ma===null||!ma.has(l))){t=Zd(i,t),t=Q5(o,t,1),o=ga(o,t,1),t=Co(),o!==null&&(Tp(o,1,t),Oo(o,t));break}}o=o.return}}function T$(t,o,i){var l=t.pingCache;l!==null&&l.delete(o),o=Co(),t.pingedLanes|=t.suspendedLanes&i,Zn===t&&(ro&i)===i&&(Un===4||Un===3&&(ro&130023424)===ro&&500>Tn()-Ry?Yl(t,0):By|=i),Oo(t,o)}function mP(t,o){o===0&&(t.mode&1?(o=jf,jf<<=1,!(jf&130023424)&&(jf=4194304)):o=1);var i=Co();t=bs(t,o),t!==null&&(Tp(t,o,i),Oo(t,i))}function I$(t){var o=t.memoizedState,i=0;o!==null&&(i=o.retryLane),mP(t,i)}function M$(t,o){var i=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(i=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(ye(314))}l!==null&&l.delete(o),mP(t,i)}var bP;bP=function(t,o,i){if(t!==null)if(t.memoizedProps!==o.pendingProps||Bo.current)No=!0;else{if(!(t.lanes&i)&&!(o.flags&128))return No=!1,k$(t,o,i);No=!!(t.flags&131072)}else No=!1,un&&o.flags&1048576&&v5(o,zg,o.index);switch(o.lanes=0,o.tag){case 2:var l=o.type;fg(t,o),t=o.pendingProps;var d=Gd(o,bo.current);Ld(o,i),d=Dy(null,o,l,t,d,i);var h=Ty();return o.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Ro(l)?(h=!0,Og(o)):h=!1,o.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ay(o),d.updater=_m,o.stateNode=d,d._reactInternals=o,Y0(o,l,t,i),o=J0(null,o,l,!0,h,i)):(o.tag=0,un&&h&&my(o),yo(null,o,d,i),o=o.child),o;case 16:l=o.elementType;e:{switch(fg(t,o),t=o.pendingProps,d=l._init,l=d(l._payload),o.type=l,d=o.tag=N$(l),t=Ur(l,t),d){case 0:o=Z0(null,o,l,t,i);break e;case 1:o=$D(null,o,l,t,i);break e;case 11:o=jD(null,o,l,t,i);break e;case 14:o=FD(null,o,l,Ur(l.type,t),i);break e}throw Error(ye(306,l,""))}return o;case 0:return l=o.type,d=o.pendingProps,d=o.elementType===l?d:Ur(l,d),Z0(t,o,l,d,i);case 1:return l=o.type,d=o.pendingProps,d=o.elementType===l?d:Ur(l,d),$D(t,o,l,d,i);case 3:e:{if(eP(o),t===null)throw Error(ye(387));l=o.pendingProps,h=o.memoizedState,d=h.element,_5(t,o),$g(o,l,null,i);var f=o.memoizedState;if(l=f.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},o.updateQueue.baseState=h,o.memoizedState=h,o.flags&256){d=Zd(Error(ye(423)),o),o=VD(t,o,l,i,d);break e}else if(l!==d){d=Zd(Error(ye(424)),o),o=VD(t,o,l,i,d);break e}else for(er=fa(o.stateNode.containerInfo.firstChild),tr=o,un=!0,Wr=null,i=D5(o,null,l,i),o.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Kd(),l===d){o=ks(t,o,i);break e}yo(t,o,l,i)}o=o.child}return o;case 5:return T5(o),t===null&&q0(o),l=o.type,d=o.pendingProps,h=t!==null?t.memoizedProps:null,f=d.children,$0(l,d)?f=null:h!==null&&$0(l,h)&&(o.flags|=32),X5(t,o),yo(t,o,f,i),o.child;case 6:return t===null&&q0(o),null;case 13:return tP(t,o,i);case 4:return _y(o,o.stateNode.containerInfo),l=o.pendingProps,t===null?o.child=Yd(o,null,l,i):yo(t,o,l,i),o.child;case 11:return l=o.type,d=o.pendingProps,d=o.elementType===l?d:Ur(l,d),jD(t,o,l,d,i);case 7:return yo(t,o,o.pendingProps,i),o.child;case 8:return yo(t,o,o.pendingProps.children,i),o.child;case 12:return yo(t,o,o.pendingProps.children,i),o.child;case 10:e:{if(l=o.type._context,d=o.pendingProps,h=o.memoizedProps,f=d.value,tn(jg,l._currentValue),l._currentValue=f,h!==null)if(Qr(h.value,f)){if(h.children===d.children&&!Bo.current){o=ks(t,o,i);break e}}else for(h=o.child,h!==null&&(h.return=o);h!==null;){var b=h.dependencies;if(b!==null){f=h.child;for(var m=b.firstContext;m!==null;){if(m.context===l){if(h.tag===1){m=ps(-1,i&-i),m.tag=2;var v=h.updateQueue;if(v!==null){v=v.shared;var C=v.pending;C===null?m.next=m:(m.next=C.next,C.next=m),v.pending=m}}h.lanes|=i,m=h.alternate,m!==null&&(m.lanes|=i),G0(h.return,i,o),b.lanes|=i;break}m=m.next}}else if(h.tag===10)f=h.type===o.type?null:h.child;else if(h.tag===18){if(f=h.return,f===null)throw Error(ye(341));f.lanes|=i,b=f.alternate,b!==null&&(b.lanes|=i),G0(f,i,o),f=h.sibling}else f=h.child;if(f!==null)f.return=h;else for(f=h;f!==null;){if(f===o){f=null;break}if(h=f.sibling,h!==null){h.return=f.return,f=h;break}f=f.return}h=f}yo(t,o,d.children,i),o=o.child}return o;case 9:return d=o.type,l=o.pendingProps.children,Ld(o,i),d=xr(d),l=l(d),o.flags|=1,yo(t,o,l,i),o.child;case 14:return l=o.type,d=Ur(l,o.pendingProps),d=Ur(l.type,d),FD(t,o,l,d,i);case 15:return Z5(t,o,o.type,o.pendingProps,i);case 17:return l=o.type,d=o.pendingProps,d=o.elementType===l?d:Ur(l,d),fg(t,o),o.tag=1,Ro(l)?(t=!0,Og(o)):t=!1,Ld(o,i),E5(o,l,d),Y0(o,l,d,i),J0(null,o,l,!0,t,i);case 19:return nP(t,o,i);case 22:return J5(t,o,i)}throw Error(ye(156,o.tag))};function kP(t,o){return HM(t,o)}function P$(t,o,i,l){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cr(t,o,i,l){return new P$(t,o,i,l)}function jy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function N$(t){if(typeof t=="function")return jy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ry)return 11;if(t===iy)return 14}return 2}function ka(t,o){var i=t.alternate;return i===null?(i=Cr(t.tag,o,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=o,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,o=t.dependencies,i.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function bg(t,o,i,l,d,h){var f=2;if(l=t,typeof t=="function")jy(t)&&(f=1);else if(typeof t=="string")f=5;else e:switch(t){case yd:return Ql(i.children,d,h,o);case oy:f=8,d|=8;break;case w0:return t=Cr(12,i,o,d|2),t.elementType=w0,t.lanes=h,t;case v0:return t=Cr(13,i,o,d),t.elementType=v0,t.lanes=h,t;case y0:return t=Cr(19,i,o,d),t.elementType=y0,t.lanes=h,t;case SM:return Dm(i,d,h,o);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xM:f=10;break e;case EM:f=9;break e;case ry:f=11;break e;case iy:f=14;break e;case oa:f=16,l=null;break e}throw Error(ye(130,t==null?t:typeof t,""))}return o=Cr(f,i,o,d),o.elementType=t,o.type=l,o.lanes=h,o}function Ql(t,o,i,l){return t=Cr(7,t,l,o),t.lanes=i,t}function Dm(t,o,i,l){return t=Cr(22,t,l,o),t.elementType=SM,t.lanes=i,t.stateNode={isHidden:!1},t}function Lw(t,o,i){return t=Cr(6,t,null,o),t.lanes=i,t}function zw(t,o,i){return o=Cr(4,t.children!==null?t.children:[],t.key,o),o.lanes=i,o.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},o}function B$(t,o,i,l,d){this.tag=o,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kw(0),this.expirationTimes=kw(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kw(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Fy(t,o,i,l,d,h,f,b,m){return t=new B$(t,o,i,b,m),o===1?(o=1,h===!0&&(o|=8)):o=0,h=Cr(3,null,null,o),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ay(h),t}function R$(t,o,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vd,key:l==null?null:""+l,children:t,containerInfo:o,implementation:i}}function wP(t){if(!t)return _a;t=t._reactInternals;e:{if(ac(t)!==t||t.tag!==1)throw Error(ye(170));var o=t;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Ro(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(ye(171))}if(t.tag===1){var i=t.type;if(Ro(i))return k5(t,i,o)}return o}function vP(t,o,i,l,d,h,f,b,m){return t=Fy(i,l,!0,t,d,h,f,b,m),t.context=wP(null),i=t.current,l=Co(),d=ba(i),h=ps(l,d),h.callback=o??null,ga(i,h,d),t.current.lanes=d,Tp(t,d,l),Oo(t,l),t}function Tm(t,o,i,l){var d=o.current,h=Co(),f=ba(d);return i=wP(i),o.context===null?o.context=i:o.pendingContext=i,o=ps(h,f),o.payload={element:t},l=l===void 0?null:l,l!==null&&(o.callback=l),t=ga(d,o,f),t!==null&&(Kr(t,d,f,h),ug(t,d,f)),f}function Yg(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function JD(t,o){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<o?i:o}}function $y(t,o){JD(t,o),(t=t.alternate)&&JD(t,o)}function O$(){return null}var yP=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vy(t){this._internalRoot=t}Im.prototype.render=Vy.prototype.render=function(t){var o=this._internalRoot;if(o===null)throw Error(ye(409));Tm(t,o,null,null)};Im.prototype.unmount=Vy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var o=t.containerInfo;nc(function(){Tm(null,t,null,null)}),o[ms]=null}};function Im(t){this._internalRoot=t}Im.prototype.unstable_scheduleHydration=function(t){if(t){var o=ZM();t={blockedOn:null,target:t,priority:o};for(var i=0;i<ia.length&&o!==0&&o<ia[i].priority;i++);ia.splice(i,0,t),i===0&&XM(t)}};function Uy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function XD(){}function L$(t,o,i,l,d){if(d){if(typeof l=="function"){var h=l;l=function(){var v=Yg(f);h.call(v)}}var f=vP(o,l,t,0,null,!1,!1,"",XD);return t._reactRootContainer=f,t[ms]=f.current,sp(t.nodeType===8?t.parentNode:t),nc(),f}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var b=l;l=function(){var v=Yg(m);b.call(v)}}var m=Fy(t,0,!1,null,null,!1,!1,"",XD);return t._reactRootContainer=m,t[ms]=m.current,sp(t.nodeType===8?t.parentNode:t),nc(function(){Tm(o,m,i,l)}),m}function Pm(t,o,i,l,d){var h=i._reactRootContainer;if(h){var f=h;if(typeof d=="function"){var b=d;d=function(){var m=Yg(f);b.call(m)}}Tm(o,f,t,d)}else f=L$(i,o,t,d,l);return Yg(f)}YM=function(t){switch(t.tag){case 3:var o=t.stateNode;if(o.current.memoizedState.isDehydrated){var i=Ih(o.pendingLanes);i!==0&&(ly(o,i|1),Oo(o,Tn()),!(kt&6)&&(Jd=Tn()+500,Ma()))}break;case 13:nc(function(){var l=bs(t,1);if(l!==null){var d=Co();Kr(l,t,1,d)}}),$y(t,1)}};cy=function(t){if(t.tag===13){var o=bs(t,134217728);if(o!==null){var i=Co();Kr(o,t,134217728,i)}$y(t,134217728)}};QM=function(t){if(t.tag===13){var o=ba(t),i=bs(t,o);if(i!==null){var l=Co();Kr(i,t,o,l)}$y(t,o)}};ZM=function(){return $t};JM=function(t,o){var i=$t;try{return $t=t,o()}finally{$t=i}};M0=function(t,o,i){switch(o){case"input":if(_0(t,i),o=i.name,i.type==="radio"&&o!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<i.length;o++){var l=i[o];if(l!==t&&l.form===t.form){var d=Cm(l);if(!d)throw Error(ye(90));TM(l),_0(l,d)}}}break;case"textarea":MM(t,i);break;case"select":o=i.value,o!=null&&Nd(t,!!i.multiple,o,!1)}};zM=Oy;jM=nc;var z$={usingClientEntryPoint:!1,Events:[Mp,xd,Cm,OM,LM,Oy]},wh={findFiberByHostInstance:Hl,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},j$={bundleType:wh.bundleType,version:wh.version,rendererPackageName:wh.rendererPackageName,rendererConfig:wh.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vs.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=VM(t),t===null?null:t.stateNode},findFiberByHostInstance:wh.findFiberByHostInstance||O$,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qf.isDisabled&&Qf.supportsFiber)try{km=Qf.inject(j$),Ri=Qf}catch{}}sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z$;sr.createPortal=function(t,o){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uy(o))throw Error(ye(200));return R$(t,o,null,i)};sr.createRoot=function(t,o){if(!Uy(t))throw Error(ye(299));var i=!1,l="",d=yP;return o!=null&&(o.unstable_strictMode===!0&&(i=!0),o.identifierPrefix!==void 0&&(l=o.identifierPrefix),o.onRecoverableError!==void 0&&(d=o.onRecoverableError)),o=Fy(t,1,!1,null,null,i,!1,l,d),t[ms]=o.current,sp(t.nodeType===8?t.parentNode:t),new Vy(o)};sr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var o=t._reactInternals;if(o===void 0)throw typeof t.render=="function"?Error(ye(188)):(t=Object.keys(t).join(","),Error(ye(268,t)));return t=VM(o),t=t===null?null:t.stateNode,t};sr.flushSync=function(t){return nc(t)};sr.hydrate=function(t,o,i){if(!Mm(o))throw Error(ye(200));return Pm(null,t,o,!0,i)};sr.hydrateRoot=function(t,o,i){if(!Uy(t))throw Error(ye(405));var l=i!=null&&i.hydratedSources||null,d=!1,h="",f=yP;if(i!=null&&(i.unstable_strictMode===!0&&(d=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),o=vP(o,null,t,1,i??null,d,!1,h,f),t[ms]=o.current,sp(t),l)for(t=0;t<l.length;t++)i=l[t],d=i._getVersion,d=d(i._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[i,d]:o.mutableSourceEagerHydrationData.push(i,d);return new Im(o)};sr.render=function(t,o,i){if(!Mm(o))throw Error(ye(200));return Pm(null,t,o,!1,i)};sr.unmountComponentAtNode=function(t){if(!Mm(t))throw Error(ye(40));return t._reactRootContainer?(nc(function(){Pm(null,null,t,!1,function(){t._reactRootContainer=null,t[ms]=null})}),!0):!1};sr.unstable_batchedUpdates=Oy;sr.unstable_renderSubtreeIntoContainer=function(t,o,i,l){if(!Mm(i))throw Error(ye(200));if(t==null||t._reactInternals===void 0)throw Error(ye(38));return Pm(t,o,i,!1,l)};sr.version="18.2.0-next-9e3b772b8-20220608";(function(t){function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}o(),t.exports=sr})(O6);const Zf=Yv(Zl);var eT=Zl;m0.createRoot=eT.createRoot,m0.hydrateRoot=eT.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gp(){return gp=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},gp.apply(this,arguments)}var da;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(da||(da={}));const tT="popstate";function F$(t){t===void 0&&(t={});function o(l,d){let{pathname:h,search:f,hash:b}=l.location;return dv("",{pathname:h,search:f,hash:b},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function i(l,d){return typeof d=="string"?d:Qg(d)}return V$(o,i,null,t)}function On(t,o){if(t===!1||t===null||typeof t>"u")throw new Error(o)}function Hy(t,o){if(!t){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function $$(){return Math.random().toString(36).substr(2,8)}function nT(t,o){return{usr:t.state,key:t.key,idx:o}}function dv(t,o,i,l){return i===void 0&&(i=null),gp({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof o=="string"?du(o):o,{state:i,key:o&&o.key||l||$$()})}function Qg(t){let{pathname:o="/",search:i="",hash:l=""}=t;return i&&i!=="?"&&(o+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(o+=l.charAt(0)==="#"?l:"#"+l),o}function du(t){let o={};if(t){let i=t.indexOf("#");i>=0&&(o.hash=t.substr(i),t=t.substr(0,i));let l=t.indexOf("?");l>=0&&(o.search=t.substr(l),t=t.substr(0,l)),t&&(o.pathname=t)}return o}function V$(t,o,i,l){l===void 0&&(l={});let{window:d=document.defaultView,v5Compat:h=!1}=l,f=d.history,b=da.Pop,m=null,v=C();v==null&&(v=0,f.replaceState(gp({},f.state,{idx:v}),""));function C(){return(f.state||{idx:null}).idx}function _(){b=da.Pop;let U=C(),N=U==null?null:U-v;v=U,m&&m({action:b,location:I.location,delta:N})}function A(U,N){b=da.Push;let O=dv(I.location,U,N);i&&i(O,U),v=C()+1;let L=nT(O,v),q=I.createHref(O);try{f.pushState(L,"",q)}catch{d.location.assign(q)}h&&m&&m({action:b,location:I.location,delta:1})}function S(U,N){b=da.Replace;let O=dv(I.location,U,N);i&&i(O,U),v=C();let L=nT(O,v),q=I.createHref(O);f.replaceState(L,"",q),h&&m&&m({action:b,location:I.location,delta:0})}function M(U){let N=d.location.origin!=="null"?d.location.origin:d.location.href,O=typeof U=="string"?U:Qg(U);return On(N,"No window.location.(origin|href) available to create URL for href: "+O),new URL(O,N)}let I={get action(){return b},get location(){return t(d,f)},listen(U){if(m)throw new Error("A history only accepts one active listener");return d.addEventListener(tT,_),m=U,()=>{d.removeEventListener(tT,_),m=null}},createHref(U){return o(d,U)},createURL:M,encodeLocation(U){let N=M(U);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:A,replace:S,go(U){return f.go(U)}};return I}var oT;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(oT||(oT={}));function U$(t,o,i){i===void 0&&(i="/");let l=typeof o=="string"?du(o):o,d=Wy(l.pathname||"/",i);if(d==null)return null;let h=CP(t);H$(h);let f=null;for(let b=0;f==null&&b<h.length;++b)f=X$(h[b],n9(d));return f}function CP(t,o,i,l){o===void 0&&(o=[]),i===void 0&&(i=[]),l===void 0&&(l="");let d=(h,f,b)=>{let m={relativePath:b===void 0?h.path||"":b,caseSensitive:h.caseSensitive===!0,childrenIndex:f,route:h};m.relativePath.startsWith("/")&&(On(m.relativePath.startsWith(l),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(l.length));let v=wa([l,m.relativePath]),C=i.concat(m);h.children&&h.children.length>0&&(On(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),CP(h.children,o,C,v)),!(h.path==null&&!h.index)&&o.push({path:v,score:Z$(v,h.index),routesMeta:C})};return t.forEach((h,f)=>{var b;if(h.path===""||!((b=h.path)!=null&&b.includes("?")))d(h,f);else for(let m of AP(h.path))d(h,f,m)}),o}function AP(t){let o=t.split("/");if(o.length===0)return[];let[i,...l]=o,d=i.endsWith("?"),h=i.replace(/\?$/,"");if(l.length===0)return d?[h,""]:[h];let f=AP(l.join("/")),b=[];return b.push(...f.map(m=>m===""?h:[h,m].join("/"))),d&&b.push(...f),b.map(m=>t.startsWith("/")&&m===""?"/":m)}function H$(t){t.sort((o,i)=>o.score!==i.score?i.score-o.score:J$(o.routesMeta.map(l=>l.childrenIndex),i.routesMeta.map(l=>l.childrenIndex)))}const W$=/^:\w+$/,q$=3,G$=2,K$=1,Y$=10,Q$=-2,rT=t=>t==="*";function Z$(t,o){let i=t.split("/"),l=i.length;return i.some(rT)&&(l+=Q$),o&&(l+=G$),i.filter(d=>!rT(d)).reduce((d,h)=>d+(W$.test(h)?q$:h===""?K$:Y$),l)}function J$(t,o){return t.length===o.length&&t.slice(0,-1).every((l,d)=>l===o[d])?t[t.length-1]-o[o.length-1]:0}function X$(t,o){let{routesMeta:i}=t,l={},d="/",h=[];for(let f=0;f<i.length;++f){let b=i[f],m=f===i.length-1,v=d==="/"?o:o.slice(d.length)||"/",C=e9({path:b.relativePath,caseSensitive:b.caseSensitive,end:m},v);if(!C)return null;Object.assign(l,C.params);let _=b.route;h.push({params:l,pathname:wa([d,C.pathname]),pathnameBase:s9(wa([d,C.pathnameBase])),route:_}),C.pathnameBase!=="/"&&(d=wa([d,C.pathnameBase]))}return h}function e9(t,o){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,l]=t9(t.path,t.caseSensitive,t.end),d=o.match(i);if(!d)return null;let h=d[0],f=h.replace(/(.)\/+$/,"$1"),b=d.slice(1);return{params:l.reduce((v,C,_)=>{if(C==="*"){let A=b[_]||"";f=h.slice(0,h.length-A.length).replace(/(.)\/+$/,"$1")}return v[C]=o9(b[_]||"",C),v},{}),pathname:h,pathnameBase:f,pattern:t}}function t9(t,o,i){o===void 0&&(o=!1),i===void 0&&(i=!0),Hy(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let l=[],d="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(f,b)=>(l.push(b),"/([^\\/]+)"));return t.endsWith("*")?(l.push("*"),d+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?d+="\\/*$":t!==""&&t!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,o?void 0:"i"),l]}function n9(t){try{return decodeURI(t)}catch(o){return Hy(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+o+").")),t}}function o9(t,o){try{return decodeURIComponent(t)}catch(i){return Hy(!1,'The value for the URL param "'+o+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+i+").")),t}}function Wy(t,o){if(o==="/")return t;if(!t.toLowerCase().startsWith(o.toLowerCase()))return null;let i=o.endsWith("/")?o.length-1:o.length,l=t.charAt(i);return l&&l!=="/"?null:t.slice(i)||"/"}function r9(t,o){o===void 0&&(o="/");let{pathname:i,search:l="",hash:d=""}=typeof t=="string"?du(t):t;return{pathname:i?i.startsWith("/")?i:i9(i,o):o,search:a9(l),hash:l9(d)}}function i9(t,o){let i=o.replace(/\/+$/,"").split("/");return t.split("/").forEach(d=>{d===".."?i.length>1&&i.pop():d!=="."&&i.push(d)}),i.length>1?i.join("/"):"/"}function jw(t,o,i,l){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+o+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _P(t){return t.filter((o,i)=>i===0||o.route.path&&o.route.path.length>0)}function xP(t,o,i,l){l===void 0&&(l=!1);let d;typeof t=="string"?d=du(t):(d=gp({},t),On(!d.pathname||!d.pathname.includes("?"),jw("?","pathname","search",d)),On(!d.pathname||!d.pathname.includes("#"),jw("#","pathname","hash",d)),On(!d.search||!d.search.includes("#"),jw("#","search","hash",d)));let h=t===""||d.pathname==="",f=h?"/":d.pathname,b;if(l||f==null)b=i;else{let _=o.length-1;if(f.startsWith("..")){let A=f.split("/");for(;A[0]==="..";)A.shift(),_-=1;d.pathname=A.join("/")}b=_>=0?o[_]:"/"}let m=r9(d,b),v=f&&f!=="/"&&f.endsWith("/"),C=(h||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(v||C)&&(m.pathname+="/"),m}const wa=t=>t.join("/").replace(/\/\/+/g,"/"),s9=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),a9=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,l9=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function c9(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function d9(t,o){return t===o&&(t!==0||1/t===1/o)||t!==t&&o!==o}const u9=typeof Object.is=="function"?Object.is:d9,{useState:h9,useEffect:p9,useLayoutEffect:f9,useDebugValue:g9}=Wd;function m9(t,o,i){const l=o(),[{inst:d},h]=h9({inst:{value:l,getSnapshot:o}});return f9(()=>{d.value=l,d.getSnapshot=o,Fw(d)&&h({inst:d})},[t,l,o]),p9(()=>(Fw(d)&&h({inst:d}),t(()=>{Fw(d)&&h({inst:d})})),[t]),g9(l),l}function Fw(t){const o=t.getSnapshot,i=t.value;try{const l=o();return!u9(i,l)}catch{return!0}}function b9(t,o,i){return o()}const k9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",w9=!k9,v9=w9?b9:m9;"useSyncExternalStore"in Wd&&(t=>t.useSyncExternalStore)(Wd);const EP=R.createContext(null),qy=R.createContext(null),Np=R.createContext(null),Nm=R.createContext(null),lc=R.createContext({outlet:null,matches:[]}),SP=R.createContext(null);function uv(){return uv=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},uv.apply(this,arguments)}function y9(t,o){let{relative:i}=o===void 0?{}:o;uu()||On(!1);let{basename:l,navigator:d}=R.useContext(Np),{hash:h,pathname:f,search:b}=DP(t,{relative:i}),m=f;return l!=="/"&&(m=f==="/"?l:wa([l,f])),d.createHref({pathname:m,search:b,hash:h})}function uu(){return R.useContext(Nm)!=null}function Bm(){return uu()||On(!1),R.useContext(Nm).location}function ko(){uu()||On(!1);let{basename:t,navigator:o}=R.useContext(Np),{matches:i}=R.useContext(lc),{pathname:l}=Bm(),d=JSON.stringify(_P(i).map(b=>b.pathnameBase)),h=R.useRef(!1);return R.useEffect(()=>{h.current=!0}),R.useCallback(function(b,m){if(m===void 0&&(m={}),!h.current)return;if(typeof b=="number"){o.go(b);return}let v=xP(b,JSON.parse(d),l,m.relative==="path");t!=="/"&&(v.pathname=v.pathname==="/"?t:wa([t,v.pathname])),(m.replace?o.replace:o.push)(v,m.state,m)},[t,o,d,l])}function cc(){let{matches:t}=R.useContext(lc),o=t[t.length-1];return o?o.params:{}}function DP(t,o){let{relative:i}=o===void 0?{}:o,{matches:l}=R.useContext(lc),{pathname:d}=Bm(),h=JSON.stringify(_P(l).map(f=>f.pathnameBase));return R.useMemo(()=>xP(t,JSON.parse(h),d,i==="path"),[t,h,d,i])}function C9(t,o){uu()||On(!1);let{navigator:i}=R.useContext(Np),l=R.useContext(qy),{matches:d}=R.useContext(lc),h=d[d.length-1],f=h?h.params:{};h&&h.pathname;let b=h?h.pathnameBase:"/";h&&h.route;let m=Bm(),v;if(o){var C;let I=typeof o=="string"?du(o):o;b==="/"||(C=I.pathname)!=null&&C.startsWith(b)||On(!1),v=I}else v=m;let _=v.pathname||"/",A=b==="/"?_:_.slice(b.length)||"/",S=U$(t,{pathname:A}),M=E9(S&&S.map(I=>Object.assign({},I,{params:Object.assign({},f,I.params),pathname:wa([b,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?b:wa([b,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),d,l||void 0);return o&&M?R.createElement(Nm.Provider,{value:{location:uv({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:da.Pop}},M):M}function A9(){let t=I9(),o=c9(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,d={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},h=null;return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},o),i?R.createElement("pre",{style:d},i):null,h)}class _9 extends R.Component{constructor(o){super(o),this.state={location:o.location,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,i){return i.location!==o.location?{error:o.error,location:o.location}:{error:o.error||i.error,location:i.location}}componentDidCatch(o,i){console.error("React Router caught the following error during render",o,i)}render(){return this.state.error?R.createElement(lc.Provider,{value:this.props.routeContext},R.createElement(SP.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function x9(t){let{routeContext:o,match:i,children:l}=t,d=R.useContext(EP);return d&&d.static&&d.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=i.route.id),R.createElement(lc.Provider,{value:o},l)}function E9(t,o,i){if(o===void 0&&(o=[]),t==null)if(i!=null&&i.errors)t=i.matches;else return null;let l=t,d=i==null?void 0:i.errors;if(d!=null){let h=l.findIndex(f=>f.route.id&&(d==null?void 0:d[f.route.id]));h>=0||On(!1),l=l.slice(0,Math.min(l.length,h+1))}return l.reduceRight((h,f,b)=>{let m=f.route.id?d==null?void 0:d[f.route.id]:null,v=null;i&&(f.route.ErrorBoundary?v=R.createElement(f.route.ErrorBoundary,null):f.route.errorElement?v=f.route.errorElement:v=R.createElement(A9,null));let C=o.concat(l.slice(0,b+1)),_=()=>{let A=h;return m?A=v:f.route.Component?A=R.createElement(f.route.Component,null):f.route.element&&(A=f.route.element),R.createElement(x9,{match:f,routeContext:{outlet:h,matches:C},children:A})};return i&&(f.route.ErrorBoundary||f.route.errorElement||b===0)?R.createElement(_9,{location:i.location,component:v,error:m,children:_(),routeContext:{outlet:null,matches:C}}):_()},null)}var iT;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(iT||(iT={}));var Zg;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Zg||(Zg={}));function S9(t){let o=R.useContext(qy);return o||On(!1),o}function D9(t){let o=R.useContext(lc);return o||On(!1),o}function T9(t){let o=D9(),i=o.matches[o.matches.length-1];return i.route.id||On(!1),i.route.id}function I9(){var t;let o=R.useContext(SP),i=S9(Zg.UseRouteError),l=T9(Zg.UseRouteError);return o||((t=i.errors)==null?void 0:t[l])}function TP(t){let{to:o,replace:i,state:l,relative:d}=t;uu()||On(!1);let h=R.useContext(qy),f=ko();return R.useEffect(()=>{h&&h.navigation.state!=="idle"||f(o,{replace:i,state:l,relative:d})}),null}function xt(t){On(!1)}function M9(t){let{basename:o="/",children:i=null,location:l,navigationType:d=da.Pop,navigator:h,static:f=!1}=t;uu()&&On(!1);let b=o.replace(/^\/*/,"/"),m=R.useMemo(()=>({basename:b,navigator:h,static:f}),[b,h,f]);typeof l=="string"&&(l=du(l));let{pathname:v="/",search:C="",hash:_="",state:A=null,key:S="default"}=l,M=R.useMemo(()=>{let I=Wy(v,b);return I==null?null:{location:{pathname:I,search:C,hash:_,state:A,key:S},navigationType:d}},[b,v,C,_,A,S,d]);return M==null?null:R.createElement(Np.Provider,{value:m},R.createElement(Nm.Provider,{children:i,value:M}))}function dc(t){let{children:o,location:i}=t,l=R.useContext(EP),d=l&&!o?l.router.routes:hv(o);return C9(d,i)}var sT;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(sT||(sT={}));new Promise(()=>{});function hv(t,o){o===void 0&&(o=[]);let i=[];return R.Children.forEach(t,(l,d)=>{if(!R.isValidElement(l))return;if(l.type===R.Fragment){i.push.apply(i,hv(l.props.children,o));return}l.type!==xt&&On(!1),!l.props.index||!l.props.children||On(!1);let h=[...o,d],f={id:l.props.id||h.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(f.children=hv(l.props.children,h)),i.push(f)}),i}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pv(){return pv=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},pv.apply(this,arguments)}function P9(t,o){if(t==null)return{};var i={},l=Object.keys(t),d,h;for(h=0;h<l.length;h++)d=l[h],!(o.indexOf(d)>=0)&&(i[d]=t[d]);return i}function N9(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function B9(t,o){return t.button===0&&(!o||o==="_self")&&!N9(t)}const R9=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function O9(t){let{basename:o,children:i,window:l}=t,d=R.useRef();d.current==null&&(d.current=F$({window:l,v5Compat:!0}));let h=d.current,[f,b]=R.useState({action:h.action,location:h.location});return R.useLayoutEffect(()=>h.listen(b),[h]),R.createElement(M9,{basename:o,children:i,location:f.location,navigationType:f.action,navigator:h})}const L9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z9=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zr=R.forwardRef(function(o,i){let{onClick:l,relative:d,reloadDocument:h,replace:f,state:b,target:m,to:v,preventScrollReset:C}=o,_=P9(o,R9),{basename:A}=R.useContext(Np),S,M=!1;if(typeof v=="string"&&z9.test(v)&&(S=v,L9)){let O=new URL(window.location.href),L=v.startsWith("//")?new URL(O.protocol+v):new URL(v),q=Wy(L.pathname,A);L.origin===O.origin&&q!=null?v=q+L.search+L.hash:M=!0}let I=y9(v,{relative:d}),U=j9(v,{replace:f,state:b,target:m,preventScrollReset:C,relative:d});function N(O){l&&l(O),O.defaultPrevented||U(O)}return R.createElement("a",pv({},_,{href:S||I,onClick:M||h?l:N,ref:i,target:m}))});var aT;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(aT||(aT={}));var lT;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(lT||(lT={}));function j9(t,o){let{target:i,replace:l,state:d,preventScrollReset:h,relative:f}=o===void 0?{}:o,b=ko(),m=Bm(),v=DP(t,{relative:f});return R.useCallback(C=>{if(B9(C,i)){C.preventDefault();let _=l!==void 0?l:Qg(m)===Qg(v);b(t,{replace:_,state:d,preventScrollReset:h,relative:f})}},[m,b,v,l,d,i,t,h,f])}var fv={},F9={get exports(){return fv},set exports(t){fv=t}},IP={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd=R;function $9(t,o){return t===o&&(t!==0||1/t===1/o)||t!==t&&o!==o}var V9=typeof Object.is=="function"?Object.is:$9,U9=Xd.useState,H9=Xd.useEffect,W9=Xd.useLayoutEffect,q9=Xd.useDebugValue;function G9(t,o){var i=o(),l=U9({inst:{value:i,getSnapshot:o}}),d=l[0].inst,h=l[1];return W9(function(){d.value=i,d.getSnapshot=o,$w(d)&&h({inst:d})},[t,i,o]),H9(function(){return $w(d)&&h({inst:d}),t(function(){$w(d)&&h({inst:d})})},[t]),q9(i),i}function $w(t){var o=t.getSnapshot;t=t.value;try{var i=o();return!V9(t,i)}catch{return!0}}function K9(t,o){return o()}var Y9=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?K9:G9;IP.useSyncExternalStore=Xd.useSyncExternalStore!==void 0?Xd.useSyncExternalStore:Y9;(function(t){t.exports=IP})(F9);var gv={},Q9={get exports(){return gv},set exports(t){gv=t}},MP={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm=R,Z9=fv;function J9(t,o){return t===o&&(t!==0||1/t===1/o)||t!==t&&o!==o}var X9=typeof Object.is=="function"?Object.is:J9,eV=Z9.useSyncExternalStore,tV=Rm.useRef,nV=Rm.useEffect,oV=Rm.useMemo,rV=Rm.useDebugValue;MP.useSyncExternalStoreWithSelector=function(t,o,i,l,d){var h=tV(null);if(h.current===null){var f={hasValue:!1,value:null};h.current=f}else f=h.current;h=oV(function(){function m(S){if(!v){if(v=!0,C=S,S=l(S),d!==void 0&&f.hasValue){var M=f.value;if(d(M,S))return _=M}return _=S}if(M=_,X9(C,S))return M;var I=l(S);return d!==void 0&&d(M,I)?M:(C=S,_=I)}var v=!1,C,_,A=i===void 0?null:i;return[function(){return m(o())},A===null?void 0:function(){return m(A())}]},[o,i,l,d]);var b=eV(t,h[0],h[1]);return nV(function(){f.hasValue=!0,f.value=b},[b]),rV(b),b};(function(t){t.exports=MP})(Q9);function iV(t){t()}let PP=iV;const sV=t=>PP=t,aV=()=>PP,xa=R.createContext(null);function NP(){return R.useContext(xa)}const lV=()=>{throw new Error("uSES not initialized!")};let BP=lV;const cV=t=>{BP=t},dV=(t,o)=>t===o;function uV(t=xa){const o=t===xa?NP:()=>R.useContext(t);return function(l,d=dV){const{store:h,subscription:f,getServerState:b}=o(),m=BP(f.addNestedSub,h.getState,b||h.getState,l,d);return R.useDebugValue(m),m}}const it=uV();function G(){return G=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},G.apply(this,arguments)}function Se(t,o){if(t==null)return{};var i={},l=Object.keys(t),d,h;for(h=0;h<l.length;h++)d=l[h],!(o.indexOf(d)>=0)&&(i[d]=t[d]);return i}var mv={},hV={get exports(){return mv},set exports(t){mv=t}},Vt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jn=typeof Symbol=="function"&&Symbol.for,Gy=Jn?Symbol.for("react.element"):60103,Ky=Jn?Symbol.for("react.portal"):60106,Om=Jn?Symbol.for("react.fragment"):60107,Lm=Jn?Symbol.for("react.strict_mode"):60108,zm=Jn?Symbol.for("react.profiler"):60114,jm=Jn?Symbol.for("react.provider"):60109,Fm=Jn?Symbol.for("react.context"):60110,Yy=Jn?Symbol.for("react.async_mode"):60111,$m=Jn?Symbol.for("react.concurrent_mode"):60111,Vm=Jn?Symbol.for("react.forward_ref"):60112,Um=Jn?Symbol.for("react.suspense"):60113,pV=Jn?Symbol.for("react.suspense_list"):60120,Hm=Jn?Symbol.for("react.memo"):60115,Wm=Jn?Symbol.for("react.lazy"):60116,fV=Jn?Symbol.for("react.block"):60121,gV=Jn?Symbol.for("react.fundamental"):60117,mV=Jn?Symbol.for("react.responder"):60118,bV=Jn?Symbol.for("react.scope"):60119;function lr(t){if(typeof t=="object"&&t!==null){var o=t.$$typeof;switch(o){case Gy:switch(t=t.type,t){case Yy:case $m:case Om:case zm:case Lm:case Um:return t;default:switch(t=t&&t.$$typeof,t){case Fm:case Vm:case Wm:case Hm:case jm:return t;default:return o}}case Ky:return o}}}function RP(t){return lr(t)===$m}Vt.AsyncMode=Yy;Vt.ConcurrentMode=$m;Vt.ContextConsumer=Fm;Vt.ContextProvider=jm;Vt.Element=Gy;Vt.ForwardRef=Vm;Vt.Fragment=Om;Vt.Lazy=Wm;Vt.Memo=Hm;Vt.Portal=Ky;Vt.Profiler=zm;Vt.StrictMode=Lm;Vt.Suspense=Um;Vt.isAsyncMode=function(t){return RP(t)||lr(t)===Yy};Vt.isConcurrentMode=RP;Vt.isContextConsumer=function(t){return lr(t)===Fm};Vt.isContextProvider=function(t){return lr(t)===jm};Vt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gy};Vt.isForwardRef=function(t){return lr(t)===Vm};Vt.isFragment=function(t){return lr(t)===Om};Vt.isLazy=function(t){return lr(t)===Wm};Vt.isMemo=function(t){return lr(t)===Hm};Vt.isPortal=function(t){return lr(t)===Ky};Vt.isProfiler=function(t){return lr(t)===zm};Vt.isStrictMode=function(t){return lr(t)===Lm};Vt.isSuspense=function(t){return lr(t)===Um};Vt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Om||t===$m||t===zm||t===Lm||t===Um||t===pV||typeof t=="object"&&t!==null&&(t.$$typeof===Wm||t.$$typeof===Hm||t.$$typeof===jm||t.$$typeof===Fm||t.$$typeof===Vm||t.$$typeof===gV||t.$$typeof===mV||t.$$typeof===bV||t.$$typeof===fV)};Vt.typeOf=lr;(function(t){t.exports=Vt})(hV);var OP=mv,kV={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wV={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},LP={};LP[OP.ForwardRef]=kV;LP[OP.Memo]=wV;var cT={},vV={get exports(){return cT},set exports(t){cT=t}},Ut={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy=Symbol.for("react.element"),Zy=Symbol.for("react.portal"),qm=Symbol.for("react.fragment"),Gm=Symbol.for("react.strict_mode"),Km=Symbol.for("react.profiler"),Ym=Symbol.for("react.provider"),Qm=Symbol.for("react.context"),yV=Symbol.for("react.server_context"),Zm=Symbol.for("react.forward_ref"),Jm=Symbol.for("react.suspense"),Xm=Symbol.for("react.suspense_list"),eb=Symbol.for("react.memo"),tb=Symbol.for("react.lazy"),CV=Symbol.for("react.offscreen"),zP;zP=Symbol.for("react.module.reference");function Sr(t){if(typeof t=="object"&&t!==null){var o=t.$$typeof;switch(o){case Qy:switch(t=t.type,t){case qm:case Km:case Gm:case Jm:case Xm:return t;default:switch(t=t&&t.$$typeof,t){case yV:case Qm:case Zm:case tb:case eb:case Ym:return t;default:return o}}case Zy:return o}}}Ut.ContextConsumer=Qm;Ut.ContextProvider=Ym;Ut.Element=Qy;Ut.ForwardRef=Zm;Ut.Fragment=qm;Ut.Lazy=tb;Ut.Memo=eb;Ut.Portal=Zy;Ut.Profiler=Km;Ut.StrictMode=Gm;Ut.Suspense=Jm;Ut.SuspenseList=Xm;Ut.isAsyncMode=function(){return!1};Ut.isConcurrentMode=function(){return!1};Ut.isContextConsumer=function(t){return Sr(t)===Qm};Ut.isContextProvider=function(t){return Sr(t)===Ym};Ut.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qy};Ut.isForwardRef=function(t){return Sr(t)===Zm};Ut.isFragment=function(t){return Sr(t)===qm};Ut.isLazy=function(t){return Sr(t)===tb};Ut.isMemo=function(t){return Sr(t)===eb};Ut.isPortal=function(t){return Sr(t)===Zy};Ut.isProfiler=function(t){return Sr(t)===Km};Ut.isStrictMode=function(t){return Sr(t)===Gm};Ut.isSuspense=function(t){return Sr(t)===Jm};Ut.isSuspenseList=function(t){return Sr(t)===Xm};Ut.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===qm||t===Km||t===Gm||t===Jm||t===Xm||t===CV||typeof t=="object"&&t!==null&&(t.$$typeof===tb||t.$$typeof===eb||t.$$typeof===Ym||t.$$typeof===Qm||t.$$typeof===Zm||t.$$typeof===zP||t.getModuleId!==void 0)};Ut.typeOf=Sr;(function(t){t.exports=Ut})(vV);function AV(){const t=aV();let o=null,i=null;return{clear(){o=null,i=null},notify(){t(()=>{let l=o;for(;l;)l.callback(),l=l.next})},get(){let l=[],d=o;for(;d;)l.push(d),d=d.next;return l},subscribe(l){let d=!0,h=i={callback:l,next:null,prev:i};return h.prev?h.prev.next=h:o=h,function(){!d||o===null||(d=!1,h.next?h.next.prev=h.prev:i=h.prev,h.prev?h.prev.next=h.next:o=h.next)}}}}const dT={notify(){},get:()=>[]};function _V(t,o){let i,l=dT;function d(_){return m(),l.subscribe(_)}function h(){l.notify()}function f(){C.onStateChange&&C.onStateChange()}function b(){return!!i}function m(){i||(i=o?o.addNestedSub(f):t.subscribe(f),l=AV())}function v(){i&&(i(),i=void 0,l.clear(),l=dT)}const C={addNestedSub:d,notifyNestedSubs:h,handleChangeWrapper:f,isSubscribed:b,trySubscribe:m,tryUnsubscribe:v,getListeners:()=>l};return C}const xV=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",EV=xV?R.useLayoutEffect:R.useEffect;function SV({store:t,context:o,children:i,serverState:l}){const d=R.useMemo(()=>{const b=_V(t);return{store:t,subscription:b,getServerState:l?()=>l:void 0}},[t,l]),h=R.useMemo(()=>t.getState(),[t]);EV(()=>{const{subscription:b}=d;return b.onStateChange=b.notifyNestedSubs,b.trySubscribe(),h!==t.getState()&&b.notifyNestedSubs(),()=>{b.tryUnsubscribe(),b.onStateChange=void 0}},[d,h]);const f=o||xa;return mo.createElement(f.Provider,{value:d},i)}function jP(t=xa){const o=t===xa?NP:()=>R.useContext(t);return function(){const{store:l}=o();return l}}const DV=jP();function TV(t=xa){const o=t===xa?DV:jP(t);return function(){return o().dispatch}}const Pa=TV();cV(gv.useSyncExternalStoreWithSelector);sV(Zl.unstable_batchedUpdates);function qr(t){for(var o=arguments.length,i=Array(o>1?o-1:0),l=1;l<o;l++)i[l-1]=arguments[l];throw Error("[Immer] minified error nr: "+t+(i.length?" "+i.map(function(d){return"'"+d+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Ea(t){return!!t&&!!t[dn]}function ws(t){var o;return!!t&&(function(i){if(!i||typeof i!="object")return!1;var l=Object.getPrototypeOf(i);if(l===null)return!0;var d=Object.hasOwnProperty.call(l,"constructor")&&l.constructor;return d===Object||typeof d=="function"&&Function.toString.call(d)===zV}(t)||Array.isArray(t)||!!t[bT]||!!(!((o=t.constructor)===null||o===void 0)&&o[bT])||Jy(t)||Xy(t))}function oc(t,o,i){i===void 0&&(i=!1),hu(t)===0?(i?Object.keys:Fd)(t).forEach(function(l){i&&typeof l=="symbol"||o(l,t[l],t)}):t.forEach(function(l,d){return o(d,l,t)})}function hu(t){var o=t[dn];return o?o.i>3?o.i-4:o.i:Array.isArray(t)?1:Jy(t)?2:Xy(t)?3:0}function jd(t,o){return hu(t)===2?t.has(o):Object.prototype.hasOwnProperty.call(t,o)}function IV(t,o){return hu(t)===2?t.get(o):t[o]}function FP(t,o,i){var l=hu(t);l===2?t.set(o,i):l===3?t.add(i):t[o]=i}function $P(t,o){return t===o?t!==0||1/t==1/o:t!=t&&o!=o}function Jy(t){return OV&&t instanceof Map}function Xy(t){return LV&&t instanceof Set}function zl(t){return t.o||t.t}function eC(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var o=UP(t);delete o[dn];for(var i=Fd(o),l=0;l<i.length;l++){var d=i[l],h=o[d];h.writable===!1&&(h.writable=!0,h.configurable=!0),(h.get||h.set)&&(o[d]={configurable:!0,writable:!0,enumerable:h.enumerable,value:t[d]})}return Object.create(Object.getPrototypeOf(t),o)}function tC(t,o){return o===void 0&&(o=!1),nC(t)||Ea(t)||!ws(t)||(hu(t)>1&&(t.set=t.add=t.clear=t.delete=MV),Object.freeze(t),o&&oc(t,function(i,l){return tC(l,!0)},!0)),t}function MV(){qr(2)}function nC(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Li(t){var o=vv[t];return o||qr(18,t),o}function PV(t,o){vv[t]||(vv[t]=o)}function bv(){return mp}function Vw(t,o){o&&(Li("Patches"),t.u=[],t.s=[],t.v=o)}function Jg(t){kv(t),t.p.forEach(NV),t.p=null}function kv(t){t===mp&&(mp=t.l)}function uT(t){return mp={p:[],l:mp,h:t,m:!0,_:0}}function NV(t){var o=t[dn];o.i===0||o.i===1?o.j():o.O=!0}function Uw(t,o){o._=o.p.length;var i=o.p[0],l=t!==void 0&&t!==i;return o.h.g||Li("ES5").S(o,t,l),l?(i[dn].P&&(Jg(o),qr(4)),ws(t)&&(t=Xg(o,t),o.l||em(o,t)),o.u&&Li("Patches").M(i[dn].t,t,o.u,o.s)):t=Xg(o,i,[]),Jg(o),o.u&&o.v(o.u,o.s),t!==VP?t:void 0}function Xg(t,o,i){if(nC(o))return o;var l=o[dn];if(!l)return oc(o,function(b,m){return hT(t,l,o,b,m,i)},!0),o;if(l.A!==t)return o;if(!l.P)return em(t,l.t,!0),l.t;if(!l.I){l.I=!0,l.A._--;var d=l.i===4||l.i===5?l.o=eC(l.k):l.o,h=d,f=!1;l.i===3&&(h=new Set(d),d.clear(),f=!0),oc(h,function(b,m){return hT(t,l,d,b,m,i,f)}),em(t,d,!1),i&&t.u&&Li("Patches").N(l,i,t.u,t.s)}return l.o}function hT(t,o,i,l,d,h,f){if(Ea(d)){var b=Xg(t,d,h&&o&&o.i!==3&&!jd(o.R,l)?h.concat(l):void 0);if(FP(i,l,b),!Ea(b))return;t.m=!1}else f&&i.add(d);if(ws(d)&&!nC(d)){if(!t.h.D&&t._<1)return;Xg(t,d),o&&o.A.l||em(t,d)}}function em(t,o,i){i===void 0&&(i=!1),!t.l&&t.h.D&&t.m&&tC(o,i)}function Hw(t,o){var i=t[dn];return(i?zl(i):t)[o]}function pT(t,o){if(o in t)for(var i=Object.getPrototypeOf(t);i;){var l=Object.getOwnPropertyDescriptor(i,o);if(l)return l;i=Object.getPrototypeOf(i)}}function aa(t){t.P||(t.P=!0,t.l&&aa(t.l))}function Ww(t){t.o||(t.o=eC(t.t))}function wv(t,o,i){var l=Jy(o)?Li("MapSet").F(o,i):Xy(o)?Li("MapSet").T(o,i):t.g?function(d,h){var f=Array.isArray(d),b={i:f?1:0,A:h?h.A:bv(),P:!1,I:!1,R:{},l:h,t:d,k:null,o:null,j:null,C:!1},m=b,v=bp;f&&(m=[b],v=Ph);var C=Proxy.revocable(m,v),_=C.revoke,A=C.proxy;return b.k=A,b.j=_,A}(o,i):Li("ES5").J(o,i);return(i?i.A:bv()).p.push(l),l}function BV(t){return Ea(t)||qr(22,t),function o(i){if(!ws(i))return i;var l,d=i[dn],h=hu(i);if(d){if(!d.P&&(d.i<4||!Li("ES5").K(d)))return d.t;d.I=!0,l=fT(i,h),d.I=!1}else l=fT(i,h);return oc(l,function(f,b){d&&IV(d.t,f)===b||FP(l,f,o(b))}),h===3?new Set(l):l}(t)}function fT(t,o){switch(o){case 2:return new Map(t);case 3:return Array.from(t)}return eC(t)}function RV(){function t(h,f){var b=d[h];return b?b.enumerable=f:d[h]=b={configurable:!0,enumerable:f,get:function(){var m=this[dn];return bp.get(m,h)},set:function(m){var v=this[dn];bp.set(v,h,m)}},b}function o(h){for(var f=h.length-1;f>=0;f--){var b=h[f][dn];if(!b.P)switch(b.i){case 5:l(b)&&aa(b);break;case 4:i(b)&&aa(b)}}}function i(h){for(var f=h.t,b=h.k,m=Fd(b),v=m.length-1;v>=0;v--){var C=m[v];if(C!==dn){var _=f[C];if(_===void 0&&!jd(f,C))return!0;var A=b[C],S=A&&A[dn];if(S?S.t!==_:!$P(A,_))return!0}}var M=!!f[dn];return m.length!==Fd(f).length+(M?0:1)}function l(h){var f=h.k;if(f.length!==h.t.length)return!0;var b=Object.getOwnPropertyDescriptor(f,f.length-1);if(b&&!b.get)return!0;for(var m=0;m<f.length;m++)if(!f.hasOwnProperty(m))return!0;return!1}var d={};PV("ES5",{J:function(h,f){var b=Array.isArray(h),m=function(C,_){if(C){for(var A=Array(_.length),S=0;S<_.length;S++)Object.defineProperty(A,""+S,t(S,!0));return A}var M=UP(_);delete M[dn];for(var I=Fd(M),U=0;U<I.length;U++){var N=I[U];M[N]=t(N,C||!!M[N].enumerable)}return Object.create(Object.getPrototypeOf(_),M)}(b,h),v={i:b?5:4,A:f?f.A:bv(),P:!1,I:!1,R:{},l:f,t:h,k:m,o:null,O:!1,C:!1};return Object.defineProperty(m,dn,{value:v,writable:!0}),m},S:function(h,f,b){b?Ea(f)&&f[dn].A===h&&o(h.p):(h.u&&function m(v){if(v&&typeof v=="object"){var C=v[dn];if(C){var _=C.t,A=C.k,S=C.R,M=C.i;if(M===4)oc(A,function(L){L!==dn&&(_[L]!==void 0||jd(_,L)?S[L]||m(A[L]):(S[L]=!0,aa(C)))}),oc(_,function(L){A[L]!==void 0||jd(A,L)||(S[L]=!1,aa(C))});else if(M===5){if(l(C)&&(aa(C),S.length=!0),A.length<_.length)for(var I=A.length;I<_.length;I++)S[I]=!1;else for(var U=_.length;U<A.length;U++)S[U]=!0;for(var N=Math.min(A.length,_.length),O=0;O<N;O++)A.hasOwnProperty(O)||(S[O]=!0),S[O]===void 0&&m(A[O])}}}}(h.p[0]),o(h.p))},K:function(h){return h.i===4?i(h):l(h)}})}var gT,mp,oC=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",OV=typeof Map<"u",LV=typeof Set<"u",mT=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",VP=oC?Symbol.for("immer-nothing"):((gT={})["immer-nothing"]=!0,gT),bT=oC?Symbol.for("immer-draftable"):"__$immer_draftable",dn=oC?Symbol.for("immer-state"):"__$immer_state",zV=""+Object.prototype.constructor,Fd=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,UP=Object.getOwnPropertyDescriptors||function(t){var o={};return Fd(t).forEach(function(i){o[i]=Object.getOwnPropertyDescriptor(t,i)}),o},vv={},bp={get:function(t,o){if(o===dn)return t;var i=zl(t);if(!jd(i,o))return function(d,h,f){var b,m=pT(h,f);return m?"value"in m?m.value:(b=m.get)===null||b===void 0?void 0:b.call(d.k):void 0}(t,i,o);var l=i[o];return t.I||!ws(l)?l:l===Hw(t.t,o)?(Ww(t),t.o[o]=wv(t.A.h,l,t)):l},has:function(t,o){return o in zl(t)},ownKeys:function(t){return Reflect.ownKeys(zl(t))},set:function(t,o,i){var l=pT(zl(t),o);if(l!=null&&l.set)return l.set.call(t.k,i),!0;if(!t.P){var d=Hw(zl(t),o),h=d==null?void 0:d[dn];if(h&&h.t===i)return t.o[o]=i,t.R[o]=!1,!0;if($P(i,d)&&(i!==void 0||jd(t.t,o)))return!0;Ww(t),aa(t)}return t.o[o]===i&&(i!==void 0||o in t.o)||Number.isNaN(i)&&Number.isNaN(t.o[o])||(t.o[o]=i,t.R[o]=!0),!0},deleteProperty:function(t,o){return Hw(t.t,o)!==void 0||o in t.t?(t.R[o]=!1,Ww(t),aa(t)):delete t.R[o],t.o&&delete t.o[o],!0},getOwnPropertyDescriptor:function(t,o){var i=zl(t),l=Reflect.getOwnPropertyDescriptor(i,o);return l&&{writable:!0,configurable:t.i!==1||o!=="length",enumerable:l.enumerable,value:i[o]}},defineProperty:function(){qr(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){qr(12)}},Ph={};oc(bp,function(t,o){Ph[t]=function(){return arguments[0]=arguments[0][0],o.apply(this,arguments)}}),Ph.deleteProperty=function(t,o){return Ph.set.call(this,t,o,void 0)},Ph.set=function(t,o,i){return bp.set.call(this,t[0],o,i,t[0])};var jV=function(){function t(i){var l=this;this.g=mT,this.D=!0,this.produce=function(d,h,f){if(typeof d=="function"&&typeof h!="function"){var b=h;h=d;var m=l;return function(I){var U=this;I===void 0&&(I=b);for(var N=arguments.length,O=Array(N>1?N-1:0),L=1;L<N;L++)O[L-1]=arguments[L];return m.produce(I,function(q){var K;return(K=h).call.apply(K,[U,q].concat(O))})}}var v;if(typeof h!="function"&&qr(6),f!==void 0&&typeof f!="function"&&qr(7),ws(d)){var C=uT(l),_=wv(l,d,void 0),A=!0;try{v=h(_),A=!1}finally{A?Jg(C):kv(C)}return typeof Promise<"u"&&v instanceof Promise?v.then(function(I){return Vw(C,f),Uw(I,C)},function(I){throw Jg(C),I}):(Vw(C,f),Uw(v,C))}if(!d||typeof d!="object"){if((v=h(d))===void 0&&(v=d),v===VP&&(v=void 0),l.D&&tC(v,!0),f){var S=[],M=[];Li("Patches").M(d,v,S,M),f(S,M)}return v}qr(21,d)},this.produceWithPatches=function(d,h){if(typeof d=="function")return function(v){for(var C=arguments.length,_=Array(C>1?C-1:0),A=1;A<C;A++)_[A-1]=arguments[A];return l.produceWithPatches(v,function(S){return d.apply(void 0,[S].concat(_))})};var f,b,m=l.produce(d,h,function(v,C){f=v,b=C});return typeof Promise<"u"&&m instanceof Promise?m.then(function(v){return[v,f,b]}):[m,f,b]},typeof(i==null?void 0:i.useProxies)=="boolean"&&this.setUseProxies(i.useProxies),typeof(i==null?void 0:i.autoFreeze)=="boolean"&&this.setAutoFreeze(i.autoFreeze)}var o=t.prototype;return o.createDraft=function(i){ws(i)||qr(8),Ea(i)&&(i=BV(i));var l=uT(this),d=wv(this,i,void 0);return d[dn].C=!0,kv(l),d},o.finishDraft=function(i,l){var d=i&&i[dn],h=d.A;return Vw(h,l),Uw(void 0,h)},o.setAutoFreeze=function(i){this.D=i},o.setUseProxies=function(i){i&&!mT&&qr(20),this.g=i},o.applyPatches=function(i,l){var d;for(d=l.length-1;d>=0;d--){var h=l[d];if(h.path.length===0&&h.op==="replace"){i=h.value;break}}d>-1&&(l=l.slice(d+1));var f=Li("Patches").$;return Ea(i)?f(i,l):this.produce(i,function(b){return f(b,l)})},t}(),rr=new jV,HP=rr.produce;rr.produceWithPatches.bind(rr);rr.setAutoFreeze.bind(rr);rr.setUseProxies.bind(rr);rr.applyPatches.bind(rr);rr.createDraft.bind(rr);rr.finishDraft.bind(rr);function kp(t){return kp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},kp(t)}function FV(t,o){if(kp(t)!=="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var l=i.call(t,o||"default");if(kp(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(t)}function $V(t){var o=FV(t,"string");return kp(o)==="symbol"?o:String(o)}function VV(t,o,i){return o=$V(o),o in t?Object.defineProperty(t,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[o]=i,t}function kT(t,o){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);o&&(l=l.filter(function(d){return Object.getOwnPropertyDescriptor(t,d).enumerable})),i.push.apply(i,l)}return i}function wT(t){for(var o=1;o<arguments.length;o++){var i=arguments[o]!=null?arguments[o]:{};o%2?kT(Object(i),!0).forEach(function(l){VV(t,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):kT(Object(i)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(i,l))})}return t}function fo(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var vT=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),qw=function(){return Math.random().toString(36).substring(7).split("").join(".")},tm={INIT:"@@redux/INIT"+qw(),REPLACE:"@@redux/REPLACE"+qw(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+qw()}};function UV(t){if(typeof t!="object"||t===null)return!1;for(var o=t;Object.getPrototypeOf(o)!==null;)o=Object.getPrototypeOf(o);return Object.getPrototypeOf(t)===o}function WP(t,o,i){var l;if(typeof o=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(fo(0));if(typeof o=="function"&&typeof i>"u"&&(i=o,o=void 0),typeof i<"u"){if(typeof i!="function")throw new Error(fo(1));return i(WP)(t,o)}if(typeof t!="function")throw new Error(fo(2));var d=t,h=o,f=[],b=f,m=!1;function v(){b===f&&(b=f.slice())}function C(){if(m)throw new Error(fo(3));return h}function _(I){if(typeof I!="function")throw new Error(fo(4));if(m)throw new Error(fo(5));var U=!0;return v(),b.push(I),function(){if(U){if(m)throw new Error(fo(6));U=!1,v();var O=b.indexOf(I);b.splice(O,1),f=null}}}function A(I){if(!UV(I))throw new Error(fo(7));if(typeof I.type>"u")throw new Error(fo(8));if(m)throw new Error(fo(9));try{m=!0,h=d(h,I)}finally{m=!1}for(var U=f=b,N=0;N<U.length;N++){var O=U[N];O()}return I}function S(I){if(typeof I!="function")throw new Error(fo(10));d=I,A({type:tm.REPLACE})}function M(){var I,U=_;return I={subscribe:function(O){if(typeof O!="object"||O===null)throw new Error(fo(11));function L(){O.next&&O.next(C())}L();var q=U(L);return{unsubscribe:q}}},I[vT]=function(){return this},I}return A({type:tm.INIT}),l={dispatch:A,subscribe:_,getState:C,replaceReducer:S},l[vT]=M,l}function HV(t){Object.keys(t).forEach(function(o){var i=t[o],l=i(void 0,{type:tm.INIT});if(typeof l>"u")throw new Error(fo(12));if(typeof i(void 0,{type:tm.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(fo(13))})}function WV(t){for(var o=Object.keys(t),i={},l=0;l<o.length;l++){var d=o[l];typeof t[d]=="function"&&(i[d]=t[d])}var h=Object.keys(i),f;try{HV(i)}catch(b){f=b}return function(m,v){if(m===void 0&&(m={}),f)throw f;for(var C=!1,_={},A=0;A<h.length;A++){var S=h[A],M=i[S],I=m[S],U=M(I,v);if(typeof U>"u")throw v&&v.type,new Error(fo(14));_[S]=U,C=C||U!==I}return C=C||h.length!==Object.keys(m).length,C?_:m}}function nm(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return o.length===0?function(l){return l}:o.length===1?o[0]:o.reduce(function(l,d){return function(){return l(d.apply(void 0,arguments))}})}function qV(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return function(l){return function(){var d=l.apply(void 0,arguments),h=function(){throw new Error(fo(15))},f={getState:d.getState,dispatch:function(){return h.apply(void 0,arguments)}},b=o.map(function(m){return m(f)});return h=nm.apply(void 0,b)(d.dispatch),wT(wT({},d),{},{dispatch:h})}}}function qP(t){var o=function(l){var d=l.dispatch,h=l.getState;return function(f){return function(b){return typeof b=="function"?b(d,h,t):f(b)}}};return o}var GP=qP();GP.withExtraArgument=qP;const yT=GP;var GV=globalThis&&globalThis.__extends||function(){var t=function(o,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,d){l.__proto__=d}||function(l,d){for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(l[h]=d[h])},t(o,i)};return function(o,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");t(o,i);function l(){this.constructor=o}o.prototype=i===null?Object.create(i):(l.prototype=i.prototype,new l)}}(),KV=globalThis&&globalThis.__generator||function(t,o){var i={label:0,sent:function(){if(h[0]&1)throw h[1];return h[1]},trys:[],ops:[]},l,d,h,f;return f={next:b(0),throw:b(1),return:b(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function b(v){return function(C){return m([v,C])}}function m(v){if(l)throw new TypeError("Generator is already executing.");for(;i;)try{if(l=1,d&&(h=v[0]&2?d.return:v[0]?d.throw||((h=d.return)&&h.call(d),0):d.next)&&!(h=h.call(d,v[1])).done)return h;switch(d=0,h&&(v=[v[0]&2,h.value]),v[0]){case 0:case 1:h=v;break;case 4:return i.label++,{value:v[1],done:!1};case 5:i.label++,d=v[1],v=[0];continue;case 7:v=i.ops.pop(),i.trys.pop();continue;default:if(h=i.trys,!(h=h.length>0&&h[h.length-1])&&(v[0]===6||v[0]===2)){i=0;continue}if(v[0]===3&&(!h||v[1]>h[0]&&v[1]<h[3])){i.label=v[1];break}if(v[0]===6&&i.label<h[1]){i.label=h[1],h=v;break}if(h&&i.label<h[2]){i.label=h[2],i.ops.push(v);break}h[2]&&i.ops.pop(),i.trys.pop();continue}v=o.call(t,i)}catch(C){v=[6,C],d=0}finally{l=h=0}if(v[0]&5)throw v[1];return{value:v[0]?v[1]:void 0,done:!0}}},om=globalThis&&globalThis.__spreadArray||function(t,o){for(var i=0,l=o.length,d=t.length;i<l;i++,d++)t[d]=o[i];return t},YV=Object.defineProperty,QV=Object.defineProperties,ZV=Object.getOwnPropertyDescriptors,CT=Object.getOwnPropertySymbols,JV=Object.prototype.hasOwnProperty,XV=Object.prototype.propertyIsEnumerable,AT=function(t,o,i){return o in t?YV(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i},va=function(t,o){for(var i in o||(o={}))JV.call(o,i)&&AT(t,i,o[i]);if(CT)for(var l=0,d=CT(o);l<d.length;l++){var i=d[l];XV.call(o,i)&&AT(t,i,o[i])}return t},Gw=function(t,o){return QV(t,ZV(o))},e8=function(t,o,i){return new Promise(function(l,d){var h=function(m){try{b(i.next(m))}catch(v){d(v)}},f=function(m){try{b(i.throw(m))}catch(v){d(v)}},b=function(m){return m.done?l(m.value):Promise.resolve(m.value).then(h,f)};b((i=i.apply(t,o)).next())})},t8=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?nm:nm.apply(null,arguments)};function n8(t){if(typeof t!="object"||t===null)return!1;var o=Object.getPrototypeOf(t);if(o===null)return!0;for(var i=o;Object.getPrototypeOf(i)!==null;)i=Object.getPrototypeOf(i);return o===i}var o8=function(t){GV(o,t);function o(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];var d=t.apply(this,i)||this;return Object.setPrototypeOf(d,o.prototype),d}return Object.defineProperty(o,Symbol.species,{get:function(){return o},enumerable:!1,configurable:!0}),o.prototype.concat=function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return t.prototype.concat.apply(this,i)},o.prototype.prepend=function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return i.length===1&&Array.isArray(i[0])?new(o.bind.apply(o,om([void 0],i[0].concat(this)))):new(o.bind.apply(o,om([void 0],i.concat(this))))},o}(Array);function yv(t){return ws(t)?HP(t,function(){}):t}function r8(t){return typeof t=="boolean"}function i8(){return function(o){return s8(o)}}function s8(t){t===void 0&&(t={});var o=t.thunk,i=o===void 0?!0:o;t.immutableCheck,t.serializableCheck;var l=new o8;return i&&(r8(i)?l.push(yT):l.push(yT.withExtraArgument(i.extraArgument))),l}var a8=!0;function l8(t){var o=i8(),i=t||{},l=i.reducer,d=l===void 0?void 0:l,h=i.middleware,f=h===void 0?o():h,b=i.devTools,m=b===void 0?!0:b,v=i.preloadedState,C=v===void 0?void 0:v,_=i.enhancers,A=_===void 0?void 0:_,S;if(typeof d=="function")S=d;else if(n8(d))S=WV(d);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var M=f;typeof M=="function"&&(M=M(o));var I=qV.apply(void 0,M),U=nm;m&&(U=t8(va({trace:!a8},typeof m=="object"&&m)));var N=[I];Array.isArray(A)?N=om([I],A):typeof A=="function"&&(N=A(N));var O=U.apply(void 0,N);return WP(S,C,O)}function ya(t,o){function i(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];if(o){var h=o.apply(void 0,l);if(!h)throw new Error("prepareAction did not return an object");return va(va({type:t,payload:h.payload},"meta"in h&&{meta:h.meta}),"error"in h&&{error:h.error})}return{type:t,payload:l[0]}}return i.toString=function(){return""+t},i.type=t,i.match=function(l){return l.type===t},i}function KP(t){var o={},i=[],l,d={addCase:function(h,f){var b=typeof h=="string"?h:h.type;if(b in o)throw new Error("addCase cannot be called with two reducers for the same action type");return o[b]=f,d},addMatcher:function(h,f){return i.push({matcher:h,reducer:f}),d},addDefaultCase:function(h){return l=h,d}};return t(d),[o,i,l]}function c8(t){return typeof t=="function"}function d8(t,o,i,l){i===void 0&&(i=[]);var d=typeof o=="function"?KP(o):[o,i,l],h=d[0],f=d[1],b=d[2],m;if(c8(t))m=function(){return yv(t())};else{var v=yv(t);m=function(){return v}}function C(_,A){_===void 0&&(_=m());var S=om([h[A.type]],f.filter(function(M){var I=M.matcher;return I(A)}).map(function(M){var I=M.reducer;return I}));return S.filter(function(M){return!!M}).length===0&&(S=[b]),S.reduce(function(M,I){if(I)if(Ea(M)){var U=M,N=I(U,A);return N===void 0?M:N}else{if(ws(M))return HP(M,function(O){return I(O,A)});var N=I(M,A);if(N===void 0){if(M===null)return M;throw Error("A case reducer on a non-draftable value must not return undefined")}return N}return M},_)}return C.getInitialState=m,C}function u8(t,o){return t+"/"+o}function Na(t){var o=t.name;if(!o)throw new Error("`name` is a required option for createSlice");typeof process<"u";var i=typeof t.initialState=="function"?t.initialState:yv(t.initialState),l=t.reducers||{},d=Object.keys(l),h={},f={},b={};d.forEach(function(C){var _=l[C],A=u8(o,C),S,M;"reducer"in _?(S=_.reducer,M=_.prepare):S=_,h[C]=S,f[A]=S,b[C]=M?ya(A,M):ya(A)});function m(){var C=typeof t.extraReducers=="function"?KP(t.extraReducers):[t.extraReducers],_=C[0],A=_===void 0?{}:_,S=C[1],M=S===void 0?[]:S,I=C[2],U=I===void 0?void 0:I,N=va(va({},A),f);return d8(i,function(O){for(var L in N)O.addCase(L,N[L]);for(var q=0,K=M;q<K.length;q++){var J=K[q];O.addMatcher(J.matcher,J.reducer)}U&&O.addDefaultCase(U)})}var v;return{name:o,reducer:function(C,_){return v||(v=m()),v(C,_)},actions:b,caseReducers:h,getInitialState:function(){return v||(v=m()),v.getInitialState()}}}var h8="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",p8=function(t){t===void 0&&(t=21);for(var o="",i=t;i--;)o+=h8[Math.random()*64|0];return o},f8=["name","message","stack","code"],Kw=function(){function t(o,i){this.payload=o,this.meta=i}return t}(),_T=function(){function t(o,i){this.payload=o,this.meta=i}return t}(),g8=function(t){if(typeof t=="object"&&t!==null){for(var o={},i=0,l=f8;i<l.length;i++){var d=l[i];typeof t[d]=="string"&&(o[d]=t[d])}return o}return{message:String(t)}};(function(){function t(o,i,l){var d=ya(o+"/fulfilled",function(v,C,_,A){return{payload:v,meta:Gw(va({},A||{}),{arg:_,requestId:C,requestStatus:"fulfilled"})}}),h=ya(o+"/pending",function(v,C,_){return{payload:void 0,meta:Gw(va({},_||{}),{arg:C,requestId:v,requestStatus:"pending"})}}),f=ya(o+"/rejected",function(v,C,_,A,S){return{payload:A,error:(l&&l.serializeError||g8)(v||"Rejected"),meta:Gw(va({},S||{}),{arg:_,requestId:C,rejectedWithValue:!!A,requestStatus:"rejected",aborted:(v==null?void 0:v.name)==="AbortError",condition:(v==null?void 0:v.name)==="ConditionError"})}}),b=typeof AbortController<"u"?AbortController:function(){function v(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return v.prototype.abort=function(){},v}();function m(v){return function(C,_,A){var S=l!=null&&l.idGenerator?l.idGenerator(v):p8(),M=new b,I;function U(O){I=O,M.abort()}var N=function(){return e8(this,null,function(){var O,L,q,K,J,H,F;return KV(this,function(X){switch(X.label){case 0:return X.trys.push([0,4,,5]),K=(O=l==null?void 0:l.condition)==null?void 0:O.call(l,v,{getState:_,extra:A}),b8(K)?[4,K]:[3,2];case 1:K=X.sent(),X.label=2;case 2:if(K===!1||M.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return J=new Promise(function(ee,ce){return M.signal.addEventListener("abort",function(){return ce({name:"AbortError",message:I||"Aborted"})})}),C(h(S,v,(L=l==null?void 0:l.getPendingMeta)==null?void 0:L.call(l,{requestId:S,arg:v},{getState:_,extra:A}))),[4,Promise.race([J,Promise.resolve(i(v,{dispatch:C,getState:_,extra:A,requestId:S,signal:M.signal,abort:U,rejectWithValue:function(ee,ce){return new Kw(ee,ce)},fulfillWithValue:function(ee,ce){return new _T(ee,ce)}})).then(function(ee){if(ee instanceof Kw)throw ee;return ee instanceof _T?d(ee.payload,S,v,ee.meta):d(ee,S,v)})])];case 3:return q=X.sent(),[3,5];case 4:return H=X.sent(),q=H instanceof Kw?f(null,S,v,H.payload,H.meta):f(H,S,v),[3,5];case 5:return F=l&&!l.dispatchConditionRejection&&f.match(q)&&q.meta.condition,F||C(q),[2,q]}})})}();return Object.assign(N,{abort:U,requestId:S,arg:v,unwrap:function(){return N.then(m8)}})}}return Object.assign(m,{pending:h,rejected:f,fulfilled:d,typePrefix:o})}return t.withTypes=function(){return t},t})();function m8(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function b8(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var rC="listenerMiddleware";ya(rC+"/add");ya(rC+"/removeAll");ya(rC+"/remove");var xT;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);RV();const YP=Na({name:"application",initialState:{status:"checking",newApplicationSuccessMsg:null,newApplicationFailedMsg:null,totalPages:null,applicationsByVacancy:null,loadApplicationsByVacancyFailedMsg:null,applicationsByUser:null,removeApplicationSuccessMsg:null,removeApplicationFailedMsg:null},reducers:{onSendNewApplication:(t,{payload:o})=>{t.newApplicationSuccessMsg=o,t.status="completed"},onSendNewApplicationFailed:(t,{payload:o})=>{t.newApplicationFailedMsg=o,t.status="completed"},onLoading:t=>{t.status="loading"},onClearMessages:t=>{t.newApplicationFailedMsg=null,t.newApplicationSuccessMsg=null,t.loadApplicationsByVacancyFailedMsg=null,t.removeApplicationSuccessMsg=null,t.removeApplicationFailedMsg=null},onLoadApplicationsByVacancy:(t,{payload:o})=>{t.applicationsByVacancy=o.applications,t.totalPages=o.totalPages,t.status="completed"},onLoadApplicationFailed:(t,{payload:o})=>{t.loadApplicationsByVacancyFailedMsg=o,t.status="completed"},onLoadApplicationsByUser:(t,{payload:o})=>{t.applicationsByUser=o.applications,t.totalPages=o.totalPages,t.status="completed"},onDeleteApplicationSuccess:(t,{payload:o})=>{t.removeApplicationSuccessMsg=o,t.status="completed"},onDeleteApplicationFailed:(t,{payload:o})=>{t.removeApplicationFailedMsg=o,t.status="completed"}}}),{onSendNewApplication:k8,onSendNewApplicationFailed:w8,onLoading:v8,onClearMessages:y8,onLoadApplicationsByVacancy:C8,onLoadApplicationFailed:A8,onLoadApplicationsByUser:_8,onDeleteApplicationSuccess:x8,onDeleteApplicationFailed:E8}=YP.actions,QP=Na({name:"auth",initialState:{status:"not-authenticated",registerSucessMsg:null,registerFailedMsg:null,activateAccountSuccessMsg:null,activateAccountFailedMsg:null,recoverPasswordSuccessRequestMsg:null,recoverPasswordFailedRequestMsg:null,verifyCodeSuccessMsg:null,verifyCodeFailedMsg:null,updatePasswordMsg:null,updatePasswordMsgFailed:null,LoginFailed:null},reducers:{onLogin:t=>{t.status="authenticated"},onLoginFailed:(t,{payload:o})=>{t.LoginFailed=o,t.status="not-authenticated"},onRegister:(t,{payload:o})=>{t.registerSucessMsg=o.msg,t.status="not-authenticated"},onRegisterFailed:(t,{payload:o})=>{t.registerFailedMsg=o.msg,t.status="not-authenticated"},onActivateAccountSuccess:(t,{payload:o})=>{t.activateAccountSuccessMsg=o,t.status="not-authenticated"},onActivateAccountFailed:(t,{payload:o})=>{t.activateAccountFailedMsg=o,t.status="not-authenticated"},onRecoverPasswordRequestSuccess:(t,{payload:o})=>{t.recoverPasswordSuccessRequestMsg=o,t.status="not-authenticated"},onRecoverPasswordRequestFailed:(t,{payload:o})=>{t.recoverPasswordFailedRequestMsg=o,t.status="not-authenticated"},onVerifyCodeSuccess:(t,{payload:o})=>{t.verifyCodeSuccessMsg=o,t.status="not-authenticated"},onVerifyCodeFailed:(t,{payload:o})=>{t.verifyCodeFailedMsg=o,t.status="not-authenticated"},onUpdatePassword:(t,{payload:o})=>{t.updatePasswordMsg=o,t.status="not-authenticated"},onUpdatePasswordFailed:(t,{payload:o})=>{t.updatePasswordMsgFailed=o,t.status="not-authenticated"},onLogout:t=>{t.status="not-authenticated"},onChecking:t=>{t.status="checking"},onClearMessages:t=>{t.registerFailedMsg=null,t.registerSucessMsg=null,t.activateAccountFailedMsg=null,t.activateAccountSuccessMsg=null,t.recoverPasswordSuccessRequestMsg=null,t.recoverPasswordFailedRequestMsg=null,t.verifyCodeSuccessMsg=null,t.verifyCodeFailedMsg=null,t.updatePasswordMsg=null,t.updatePasswordMsgFailed=null,t.LoginFailed=null,t.status="not-authenticated"}}}),{onLogin:ET,onLoginFailed:S8,onRegister:D8,onRegisterFailed:T8,onActivateAccountSuccess:I8,onActivateAccountFailed:M8,onRecoverPasswordRequestSuccess:P8,onRecoverPasswordRequestFailed:N8,onVerifyCodeSuccess:B8,onVerifyCodeFailed:R8,onUpdatePassword:O8,onUpdatePasswordFailed:L8,onLogout:Yw,onChecking:z8,onClearMessages:j8}=QP.actions,ZP=Na({name:"categories",initialState:{status:"searching",categoriesWithMoreVacancies:null,allCategoriesForm:null,allCategories:null,totalPages:null},reducers:{onLoadAllCategories:(t,{payload:o})=>{t.allCategoriesForm=o,t.status="completed"},onLoadCategoriesFailed:(t,{payload:o})=>{t.status="completed"},onLoadCategoriesWithMoreVacancies:(t,{payload:o})=>{t.categoriesWithMoreVacancies=o,t.status="completed"},onLoadCategories:(t,{payload:o})=>{t.allCategories=o.categories,t.totalPages=o.totalPages,t.status="completed"}}}),{onLoadAllCategories:F8,onLoadCategoriesFailed:$8,onLoadCategoriesWithMoreVacancies:V8,onLoadCategories:U8}=ZP.actions,JP=Na({name:"message",initialState:{status:"searching",userConversations:null,conversationMessages:[],loadConversationFailedMsg:null,sendMessageSuccessMsg:null,sendMessageFailedMsg:null,totalPages:null,totalElements:null,successSendMessage:null,failedSendMessage:null},reducers:{onStartConversationSendMessage:(t,{payload:o})=>{t.sendMessageSuccessMsg=o,t.status="completed"},onStartConversationSendMessageFailed:(t,{payload:o})=>{t.sendMessageFailedMsg=o,t.status="completed"},onLoadUserConversations:(t,{payload:o})=>{t.userConversations=o.conversations,t.totalPages=o.totalPages,t.totalElements=o.totalConversations,t.status="completed"},onLoading:t=>{t.status="loading"},onClearMessages:t=>{t.sendMessageFailedMsg=null,t.sendMessageSuccessMsg=null,t.loadConversationFailedMsg=null,t.successSendMessage=null,t.failedSendMessage=null},onLoadConversationMessages:(t,{payload:o})=>{o.messages.forEach(i=>{t.conversationMessages.some(d=>d.id==i.id)||t.conversationMessages.push(i)}),t.totalPages=o.totalPages,t.totalElements=o.totalMessages,t.status="completed"},onLoadConversationMessagesFailed:(t,{payload:o})=>{t.loadConversationFailedMsg=o,t.status="completed"},onSendMessageSuccess:(t,{payload:o})=>{t.successSendMessage=o.msg,t.conversationMessages.unshift(o.message),t.status="completed"},onSendMessageFailed:(t,{payload:o})=>{t.failedSendMessage=o,t.status="completed"}}}),{onStartConversationSendMessage:H8,onStartConversationSendMessageFailed:W8,onLoadUserConversations:q8,onLoading:cie,onClearMessages:G8,onLoadConversationMessages:K8,onLoadConversationMessagesFailed:Y8,onSendMessageSuccess:Q8,onSendMessageFailed:Z8}=JP.actions,XP=Na({name:"salaries",initialState:{status:"searching",salaries:null},reducers:{onLoadAllSalaries:(t,{payload:o})=>{t.salaries=o,t.status="completed"},onLoadSalariesFailed:t=>{t.status="completed"}}}),{onLoadAllSalaries:J8,onLoadSalariesFailed:X8}=XP.actions,eN=Na({name:"status",initialState:{status:"searching",statuses:null},reducers:{onLoadStatus:(t,{payload:o})=>{t.statuses=o,t.status="completed"},onLoadStatusFailed:t=>{t.status="completed"}}}),{onLoadStatus:eU,onLoadStatusFailed:tU}=eN.actions,tN=Na({name:"user",initialState:{status:"searching",userDetails:null,updateUserInformationMsg:null,updateUserInformationFailedMsg:null},reducers:{onLoadUserDetails:(t,{payload:o})=>{t.userDetails=o,t.status="completed"},onLoadUserDetailsFailed:t=>{t.status="completed"},onLoading:t=>{t.status="searching"},onUpdateUserInformation:(t,{payload:o})=>{t.updateUserInformationMsg=o,t.status="completed"},onUpdateUserInformationFailed:(t,{payload:o})=>{t.updateUserInformationFailedMsg=o,t.status="completed"},onClearMessages:t=>{t.updateUserInformationMsg=null,t.updateUserInformationFailedMsg=null}}}),{onLoadUserDetails:nU,onLoadUserDetailsFailed:oU,onLoading:rU,onUpdateUserInformation:iU,onUpdateUserInformationFailed:sU,onClearMessages:aU}=tN.actions,nN=Na({name:"vacancies",initialState:{status:"searching",createVacancySuccessMsg:null,createVacancyFailedMsg:null,UpdateVacancyMsg:null,UpdateVacancyFailed:null,deleteVacancyMsg:null,deleteVacancyFailedMsg:null,vacancyDetails:null,myVacancies:null,totalPages:null,vacanciesOfPopularCategories:null,recentVacancies:null,vacanciesByCategory:null,loadVacanciesByCategoryFailedMsg:null,allVacancies:[]},reducers:{onCreateVacancySuccess:(t,{payload:o})=>{t.createVacancySuccessMsg=o,t.status="completed"},onCreateVacancyFailed:(t,{payload:o})=>{t.createVacancyFailedMsg=o,t.status="completed"},onLoading:t=>{t.status="loading"},onClearMessages:t=>{t.createVacancySuccessMsg=null,t.createVacancyFailedMsg=null,t.UpdateVacancyMsg=null,t.UpdateVacancyFailed=null,t.deleteVacancyMsg=null,t.deleteVacancyFailedMsg=null,t.loadVacanciesByCategoryFailedMsg=null},onUpdateVacancy:(t,{payload:o})=>{t.UpdateVacancyMsg=o,t.status="completed"},onUpdateVacancyFailed:(t,{payload:o})=>{t.UpdateVacancyFailed=o,t.status="completed"},onLoadVacancyDetails:(t,{payload:o})=>{t.vacancyDetails=o,t.status="completed"},onLoadVacancyDetailsFailed:t=>{t.status="completed"},onDeleteVacancy:(t,{payload:o})=>{t.deleteVacancyMsg=o,t.status="completed"},onDeleteVacancyFailed:(t,{payload:o})=>{t.deleteVacancyFailedMsg=o,t.status="completed"},onLoadMyVacancies:(t,{payload:o})=>{t.myVacancies=o.vacancies,t.totalPages=o.totalPages,t.status="completed"},onLoadMyVacanciesFailed:t=>{t.status="completed"},onLoadVacanciesOfPopularCategories:(t,{payload:o})=>{t.vacanciesOfPopularCategories=o,t.status="completed"},onLoadMostRecentVacancies:(t,{payload:o})=>{t.recentVacancies=o,t.status="completed"},onLoadvacanciesByCategory:(t,{payload:o})=>{t.vacanciesByCategory=o.vacancies,t.totalPages=o.totalPages,t.status="completed"},onLoadVacanciesByCategoryFailed:(t,{payload:o})=>{t.loadVacanciesByCategoryFailedMsg=o,t.status="completed"},onLoadAllVacancies:(t,{payload:o})=>{t.allVacancies=o.vacancies,t.totalPages=o.totalPages,t.status="completed"}}}),{onCreateVacancySuccess:lU,onCreateVacancyFailed:cU,onLoading:dU,onClearMessages:uU,onUpdateVacancy:hU,onUpdateVacancyFailed:pU,onLoadVacancyDetails:fU,onLoadVacancyDetailsFailed:gU,onDeleteVacancy:mU,onDeleteVacancyFailed:bU,onLoadMyVacancies:kU,onLoadMyVacanciesFailed:wU,onLoadVacanciesOfPopularCategories:vU,onLoadMostRecentVacancies:yU,onLoadvacanciesByCategory:CU,onLoadVacanciesByCategoryFailed:AU,onLoadAllVacancies:_U}=nN.actions,xU=l8({reducer:{application:YP.reducer,auth:QP.reducer,categories:ZP.reducer,salaries:XP.reducer,statuses:eN.reducer,user:tN.reducer,vacancies:nN.reducer,messages:JP.reducer},middleware:t=>t({serializableCheck:!1})});function oN(t,o){return function(){return t.apply(o,arguments)}}const{toString:rN}=Object.prototype,{getPrototypeOf:iC}=Object,sC=(t=>o=>{const i=rN.call(o);return t[i]||(t[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),ys=t=>(t=t.toLowerCase(),o=>sC(o)===t),nb=t=>o=>typeof o===t,{isArray:pu}=Array,wp=nb("undefined");function EU(t){return t!==null&&!wp(t)&&t.constructor!==null&&!wp(t.constructor)&&Sa(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const iN=ys("ArrayBuffer");function SU(t){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(t):o=t&&t.buffer&&iN(t.buffer),o}const DU=nb("string"),Sa=nb("function"),sN=nb("number"),aC=t=>t!==null&&typeof t=="object",TU=t=>t===!0||t===!1,kg=t=>{if(sC(t)!=="object")return!1;const o=iC(t);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},IU=ys("Date"),MU=ys("File"),PU=ys("Blob"),NU=ys("FileList"),BU=t=>aC(t)&&Sa(t.pipe),RU=t=>{const o="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||rN.call(t)===o||Sa(t.toString)&&t.toString()===o)},OU=ys("URLSearchParams"),LU=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Bp(t,o,{allOwnKeys:i=!1}={}){if(t===null||typeof t>"u")return;let l,d;if(typeof t!="object"&&(t=[t]),pu(t))for(l=0,d=t.length;l<d;l++)o.call(null,t[l],l,t);else{const h=i?Object.getOwnPropertyNames(t):Object.keys(t),f=h.length;let b;for(l=0;l<f;l++)b=h[l],o.call(null,t[b],b,t)}}function aN(t,o){o=o.toLowerCase();const i=Object.keys(t);let l=i.length,d;for(;l-- >0;)if(d=i[l],o===d.toLowerCase())return d;return null}const lN=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),cN=t=>!wp(t)&&t!==lN;function Cv(){const{caseless:t}=cN(this)&&this||{},o={},i=(l,d)=>{const h=t&&aN(o,d)||d;kg(o[h])&&kg(l)?o[h]=Cv(o[h],l):kg(l)?o[h]=Cv({},l):pu(l)?o[h]=l.slice():o[h]=l};for(let l=0,d=arguments.length;l<d;l++)arguments[l]&&Bp(arguments[l],i);return o}const zU=(t,o,i,{allOwnKeys:l}={})=>(Bp(o,(d,h)=>{i&&Sa(d)?t[h]=oN(d,i):t[h]=d},{allOwnKeys:l}),t),jU=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),FU=(t,o,i,l)=>{t.prototype=Object.create(o.prototype,l),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:o.prototype}),i&&Object.assign(t.prototype,i)},$U=(t,o,i,l)=>{let d,h,f;const b={};if(o=o||{},t==null)return o;do{for(d=Object.getOwnPropertyNames(t),h=d.length;h-- >0;)f=d[h],(!l||l(f,t,o))&&!b[f]&&(o[f]=t[f],b[f]=!0);t=i!==!1&&iC(t)}while(t&&(!i||i(t,o))&&t!==Object.prototype);return o},VU=(t,o,i)=>{t=String(t),(i===void 0||i>t.length)&&(i=t.length),i-=o.length;const l=t.indexOf(o,i);return l!==-1&&l===i},UU=t=>{if(!t)return null;if(pu(t))return t;let o=t.length;if(!sN(o))return null;const i=new Array(o);for(;o-- >0;)i[o]=t[o];return i},HU=(t=>o=>t&&o instanceof t)(typeof Uint8Array<"u"&&iC(Uint8Array)),WU=(t,o)=>{const l=(t&&t[Symbol.iterator]).call(t);let d;for(;(d=l.next())&&!d.done;){const h=d.value;o.call(t,h[0],h[1])}},qU=(t,o)=>{let i;const l=[];for(;(i=t.exec(o))!==null;)l.push(i);return l},GU=ys("HTMLFormElement"),KU=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,l,d){return l.toUpperCase()+d}),ST=(({hasOwnProperty:t})=>(o,i)=>t.call(o,i))(Object.prototype),YU=ys("RegExp"),dN=(t,o)=>{const i=Object.getOwnPropertyDescriptors(t),l={};Bp(i,(d,h)=>{o(d,h,t)!==!1&&(l[h]=d)}),Object.defineProperties(t,l)},QU=t=>{dN(t,(o,i)=>{if(Sa(t)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const l=t[i];if(Sa(l)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},ZU=(t,o)=>{const i={},l=d=>{d.forEach(h=>{i[h]=!0})};return pu(t)?l(t):l(String(t).split(o)),i},JU=()=>{},XU=(t,o)=>(t=+t,Number.isFinite(t)?t:o),Qw="abcdefghijklmnopqrstuvwxyz",DT="0123456789",uN={DIGIT:DT,ALPHA:Qw,ALPHA_DIGIT:Qw+Qw.toUpperCase()+DT},eH=(t=16,o=uN.ALPHA_DIGIT)=>{let i="";const{length:l}=o;for(;t--;)i+=o[Math.random()*l|0];return i};function tH(t){return!!(t&&Sa(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const nH=t=>{const o=new Array(10),i=(l,d)=>{if(aC(l)){if(o.indexOf(l)>=0)return;if(!("toJSON"in l)){o[d]=l;const h=pu(l)?[]:{};return Bp(l,(f,b)=>{const m=i(f,d+1);!wp(m)&&(h[b]=m)}),o[d]=void 0,h}}return l};return i(t,0)},pe={isArray:pu,isArrayBuffer:iN,isBuffer:EU,isFormData:RU,isArrayBufferView:SU,isString:DU,isNumber:sN,isBoolean:TU,isObject:aC,isPlainObject:kg,isUndefined:wp,isDate:IU,isFile:MU,isBlob:PU,isRegExp:YU,isFunction:Sa,isStream:BU,isURLSearchParams:OU,isTypedArray:HU,isFileList:NU,forEach:Bp,merge:Cv,extend:zU,trim:LU,stripBOM:jU,inherits:FU,toFlatObject:$U,kindOf:sC,kindOfTest:ys,endsWith:VU,toArray:UU,forEachEntry:WU,matchAll:qU,isHTMLForm:GU,hasOwnProperty:ST,hasOwnProp:ST,reduceDescriptors:dN,freezeMethods:QU,toObjectSet:ZU,toCamelCase:KU,noop:JU,toFiniteNumber:XU,findKey:aN,global:lN,isContextDefined:cN,ALPHABET:uN,generateString:eH,isSpecCompliantForm:tH,toJSONObject:nH};function bt(t,o,i,l,d){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",o&&(this.code=o),i&&(this.config=i),l&&(this.request=l),d&&(this.response=d)}pe.inherits(bt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:pe.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const hN=bt.prototype,pN={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{pN[t]={value:t}});Object.defineProperties(bt,pN);Object.defineProperty(hN,"isAxiosError",{value:!0});bt.from=(t,o,i,l,d,h)=>{const f=Object.create(hN);return pe.toFlatObject(t,f,function(m){return m!==Error.prototype},b=>b!=="isAxiosError"),bt.call(f,t.message,o,i,l,d),f.cause=t,f.name=t.name,h&&Object.assign(f,h),f};const oH=null;function Av(t){return pe.isPlainObject(t)||pe.isArray(t)}function fN(t){return pe.endsWith(t,"[]")?t.slice(0,-2):t}function TT(t,o,i){return t?t.concat(o).map(function(d,h){return d=fN(d),!i&&h?"["+d+"]":d}).join(i?".":""):o}function rH(t){return pe.isArray(t)&&!t.some(Av)}const iH=pe.toFlatObject(pe,{},null,function(o){return/^is[A-Z]/.test(o)});function ob(t,o,i){if(!pe.isObject(t))throw new TypeError("target must be an object");o=o||new FormData,i=pe.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(I,U){return!pe.isUndefined(U[I])});const l=i.metaTokens,d=i.visitor||C,h=i.dots,f=i.indexes,m=(i.Blob||typeof Blob<"u"&&Blob)&&pe.isSpecCompliantForm(o);if(!pe.isFunction(d))throw new TypeError("visitor must be a function");function v(M){if(M===null)return"";if(pe.isDate(M))return M.toISOString();if(!m&&pe.isBlob(M))throw new bt("Blob is not supported. Use a Buffer instead.");return pe.isArrayBuffer(M)||pe.isTypedArray(M)?m&&typeof Blob=="function"?new Blob([M]):Buffer.from(M):M}function C(M,I,U){let N=M;if(M&&!U&&typeof M=="object"){if(pe.endsWith(I,"{}"))I=l?I:I.slice(0,-2),M=JSON.stringify(M);else if(pe.isArray(M)&&rH(M)||(pe.isFileList(M)||pe.endsWith(I,"[]"))&&(N=pe.toArray(M)))return I=fN(I),N.forEach(function(L,q){!(pe.isUndefined(L)||L===null)&&o.append(f===!0?TT([I],q,h):f===null?I:I+"[]",v(L))}),!1}return Av(M)?!0:(o.append(TT(U,I,h),v(M)),!1)}const _=[],A=Object.assign(iH,{defaultVisitor:C,convertValue:v,isVisitable:Av});function S(M,I){if(!pe.isUndefined(M)){if(_.indexOf(M)!==-1)throw Error("Circular reference detected in "+I.join("."));_.push(M),pe.forEach(M,function(N,O){(!(pe.isUndefined(N)||N===null)&&d.call(o,N,pe.isString(O)?O.trim():O,I,A))===!0&&S(N,I?I.concat(O):[O])}),_.pop()}}if(!pe.isObject(t))throw new TypeError("data must be an object");return S(t),o}function IT(t){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(l){return o[l]})}function lC(t,o){this._pairs=[],t&&ob(t,this,o)}const gN=lC.prototype;gN.append=function(o,i){this._pairs.push([o,i])};gN.toString=function(o){const i=o?function(l){return o.call(this,l,IT)}:IT;return this._pairs.map(function(d){return i(d[0])+"="+i(d[1])},"").join("&")};function sH(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function mN(t,o,i){if(!o)return t;const l=i&&i.encode||sH,d=i&&i.serialize;let h;if(d?h=d(o,i):h=pe.isURLSearchParams(o)?o.toString():new lC(o,i).toString(l),h){const f=t.indexOf("#");f!==-1&&(t=t.slice(0,f)),t+=(t.indexOf("?")===-1?"?":"&")+h}return t}class aH{constructor(){this.handlers=[]}use(o,i,l){return this.handlers.push({fulfilled:o,rejected:i,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){pe.forEach(this.handlers,function(l){l!==null&&o(l)})}}const MT=aH,bN={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},lH=typeof URLSearchParams<"u"?URLSearchParams:lC,cH=typeof FormData<"u"?FormData:null,dH=typeof Blob<"u"?Blob:null,uH=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),hH=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Bi={isBrowser:!0,classes:{URLSearchParams:lH,FormData:cH,Blob:dH},isStandardBrowserEnv:uH,isStandardBrowserWebWorkerEnv:hH,protocols:["http","https","file","blob","url","data"]};function pH(t,o){return ob(t,new Bi.classes.URLSearchParams,Object.assign({visitor:function(i,l,d,h){return Bi.isNode&&pe.isBuffer(i)?(this.append(l,i.toString("base64")),!1):h.defaultVisitor.apply(this,arguments)}},o))}function fH(t){return pe.matchAll(/\w+|\[(\w*)]/g,t).map(o=>o[0]==="[]"?"":o[1]||o[0])}function gH(t){const o={},i=Object.keys(t);let l;const d=i.length;let h;for(l=0;l<d;l++)h=i[l],o[h]=t[h];return o}function kN(t){function o(i,l,d,h){let f=i[h++];const b=Number.isFinite(+f),m=h>=i.length;return f=!f&&pe.isArray(d)?d.length:f,m?(pe.hasOwnProp(d,f)?d[f]=[d[f],l]:d[f]=l,!b):((!d[f]||!pe.isObject(d[f]))&&(d[f]=[]),o(i,l,d[f],h)&&pe.isArray(d[f])&&(d[f]=gH(d[f])),!b)}if(pe.isFormData(t)&&pe.isFunction(t.entries)){const i={};return pe.forEachEntry(t,(l,d)=>{o(fH(l),d,i,0)}),i}return null}const mH={"Content-Type":void 0};function bH(t,o,i){if(pe.isString(t))try{return(o||JSON.parse)(t),pe.trim(t)}catch(l){if(l.name!=="SyntaxError")throw l}return(i||JSON.stringify)(t)}const rb={transitional:bN,adapter:["xhr","http"],transformRequest:[function(o,i){const l=i.getContentType()||"",d=l.indexOf("application/json")>-1,h=pe.isObject(o);if(h&&pe.isHTMLForm(o)&&(o=new FormData(o)),pe.isFormData(o))return d&&d?JSON.stringify(kN(o)):o;if(pe.isArrayBuffer(o)||pe.isBuffer(o)||pe.isStream(o)||pe.isFile(o)||pe.isBlob(o))return o;if(pe.isArrayBufferView(o))return o.buffer;if(pe.isURLSearchParams(o))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let b;if(h){if(l.indexOf("application/x-www-form-urlencoded")>-1)return pH(o,this.formSerializer).toString();if((b=pe.isFileList(o))||l.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return ob(b?{"files[]":o}:o,m&&new m,this.formSerializer)}}return h||d?(i.setContentType("application/json",!1),bH(o)):o}],transformResponse:[function(o){const i=this.transitional||rb.transitional,l=i&&i.forcedJSONParsing,d=this.responseType==="json";if(o&&pe.isString(o)&&(l&&!this.responseType||d)){const f=!(i&&i.silentJSONParsing)&&d;try{return JSON.parse(o)}catch(b){if(f)throw b.name==="SyntaxError"?bt.from(b,bt.ERR_BAD_RESPONSE,this,null,this.response):b}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Bi.classes.FormData,Blob:Bi.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};pe.forEach(["delete","get","head"],function(o){rb.headers[o]={}});pe.forEach(["post","put","patch"],function(o){rb.headers[o]=pe.merge(mH)});const cC=rb,kH=pe.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),wH=t=>{const o={};let i,l,d;return t&&t.split(`
`).forEach(function(f){d=f.indexOf(":"),i=f.substring(0,d).trim().toLowerCase(),l=f.substring(d+1).trim(),!(!i||o[i]&&kH[i])&&(i==="set-cookie"?o[i]?o[i].push(l):o[i]=[l]:o[i]=o[i]?o[i]+", "+l:l)}),o},PT=Symbol("internals");function vh(t){return t&&String(t).trim().toLowerCase()}function wg(t){return t===!1||t==null?t:pe.isArray(t)?t.map(wg):String(t)}function vH(t){const o=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=i.exec(t);)o[l[1]]=l[2];return o}function yH(t){return/^[-_a-zA-Z]+$/.test(t.trim())}function Zw(t,o,i,l,d){if(pe.isFunction(l))return l.call(this,o,i);if(d&&(o=i),!!pe.isString(o)){if(pe.isString(l))return o.indexOf(l)!==-1;if(pe.isRegExp(l))return l.test(o)}}function CH(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,i,l)=>i.toUpperCase()+l)}function AH(t,o){const i=pe.toCamelCase(" "+o);["get","set","has"].forEach(l=>{Object.defineProperty(t,l+i,{value:function(d,h,f){return this[l].call(this,o,d,h,f)},configurable:!0})})}class ib{constructor(o){o&&this.set(o)}set(o,i,l){const d=this;function h(b,m,v){const C=vh(m);if(!C)throw new Error("header name must be a non-empty string");const _=pe.findKey(d,C);(!_||d[_]===void 0||v===!0||v===void 0&&d[_]!==!1)&&(d[_||m]=wg(b))}const f=(b,m)=>pe.forEach(b,(v,C)=>h(v,C,m));return pe.isPlainObject(o)||o instanceof this.constructor?f(o,i):pe.isString(o)&&(o=o.trim())&&!yH(o)?f(wH(o),i):o!=null&&h(i,o,l),this}get(o,i){if(o=vh(o),o){const l=pe.findKey(this,o);if(l){const d=this[l];if(!i)return d;if(i===!0)return vH(d);if(pe.isFunction(i))return i.call(this,d,l);if(pe.isRegExp(i))return i.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,i){if(o=vh(o),o){const l=pe.findKey(this,o);return!!(l&&this[l]!==void 0&&(!i||Zw(this,this[l],l,i)))}return!1}delete(o,i){const l=this;let d=!1;function h(f){if(f=vh(f),f){const b=pe.findKey(l,f);b&&(!i||Zw(l,l[b],b,i))&&(delete l[b],d=!0)}}return pe.isArray(o)?o.forEach(h):h(o),d}clear(o){const i=Object.keys(this);let l=i.length,d=!1;for(;l--;){const h=i[l];(!o||Zw(this,this[h],h,o,!0))&&(delete this[h],d=!0)}return d}normalize(o){const i=this,l={};return pe.forEach(this,(d,h)=>{const f=pe.findKey(l,h);if(f){i[f]=wg(d),delete i[h];return}const b=o?CH(h):String(h).trim();b!==h&&delete i[h],i[b]=wg(d),l[b]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const i=Object.create(null);return pe.forEach(this,(l,d)=>{l!=null&&l!==!1&&(i[d]=o&&pe.isArray(l)?l.join(", "):l)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,i])=>o+": "+i).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...i){const l=new this(o);return i.forEach(d=>l.set(d)),l}static accessor(o){const l=(this[PT]=this[PT]={accessors:{}}).accessors,d=this.prototype;function h(f){const b=vh(f);l[b]||(AH(d,f),l[b]=!0)}return pe.isArray(o)?o.forEach(h):h(o),this}}ib.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);pe.freezeMethods(ib.prototype);pe.freezeMethods(ib);const fs=ib;function Jw(t,o){const i=this||cC,l=o||i,d=fs.from(l.headers);let h=l.data;return pe.forEach(t,function(b){h=b.call(i,h,d.normalize(),o?o.status:void 0)}),d.normalize(),h}function wN(t){return!!(t&&t.__CANCEL__)}function Rp(t,o,i){bt.call(this,t??"canceled",bt.ERR_CANCELED,o,i),this.name="CanceledError"}pe.inherits(Rp,bt,{__CANCEL__:!0});function _H(t,o,i){const l=i.config.validateStatus;!i.status||!l||l(i.status)?t(i):o(new bt("Request failed with status code "+i.status,[bt.ERR_BAD_REQUEST,bt.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}const xH=Bi.isStandardBrowserEnv?function(){return{write:function(i,l,d,h,f,b){const m=[];m.push(i+"="+encodeURIComponent(l)),pe.isNumber(d)&&m.push("expires="+new Date(d).toGMTString()),pe.isString(h)&&m.push("path="+h),pe.isString(f)&&m.push("domain="+f),b===!0&&m.push("secure"),document.cookie=m.join("; ")},read:function(i){const l=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return l?decodeURIComponent(l[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function EH(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function SH(t,o){return o?t.replace(/\/+$/,"")+"/"+o.replace(/^\/+/,""):t}function vN(t,o){return t&&!EH(o)?SH(t,o):o}const DH=Bi.isStandardBrowserEnv?function(){const o=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");let l;function d(h){let f=h;return o&&(i.setAttribute("href",f),f=i.href),i.setAttribute("href",f),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return l=d(window.location.href),function(f){const b=pe.isString(f)?d(f):f;return b.protocol===l.protocol&&b.host===l.host}}():function(){return function(){return!0}}();function TH(t){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return o&&o[1]||""}function IH(t,o){t=t||10;const i=new Array(t),l=new Array(t);let d=0,h=0,f;return o=o!==void 0?o:1e3,function(m){const v=Date.now(),C=l[h];f||(f=v),i[d]=m,l[d]=v;let _=h,A=0;for(;_!==d;)A+=i[_++],_=_%t;if(d=(d+1)%t,d===h&&(h=(h+1)%t),v-f<o)return;const S=C&&v-C;return S?Math.round(A*1e3/S):void 0}}function NT(t,o){let i=0;const l=IH(50,250);return d=>{const h=d.loaded,f=d.lengthComputable?d.total:void 0,b=h-i,m=l(b),v=h<=f;i=h;const C={loaded:h,total:f,progress:f?h/f:void 0,bytes:b,rate:m||void 0,estimated:m&&f&&v?(f-h)/m:void 0,event:d};C[o?"download":"upload"]=!0,t(C)}}const MH=typeof XMLHttpRequest<"u",PH=MH&&function(t){return new Promise(function(i,l){let d=t.data;const h=fs.from(t.headers).normalize(),f=t.responseType;let b;function m(){t.cancelToken&&t.cancelToken.unsubscribe(b),t.signal&&t.signal.removeEventListener("abort",b)}pe.isFormData(d)&&(Bi.isStandardBrowserEnv||Bi.isStandardBrowserWebWorkerEnv)&&h.setContentType(!1);let v=new XMLHttpRequest;if(t.auth){const S=t.auth.username||"",M=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";h.set("Authorization","Basic "+btoa(S+":"+M))}const C=vN(t.baseURL,t.url);v.open(t.method.toUpperCase(),mN(C,t.params,t.paramsSerializer),!0),v.timeout=t.timeout;function _(){if(!v)return;const S=fs.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),I={data:!f||f==="text"||f==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:S,config:t,request:v};_H(function(N){i(N),m()},function(N){l(N),m()},I),v=null}if("onloadend"in v?v.onloadend=_:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(_)},v.onabort=function(){v&&(l(new bt("Request aborted",bt.ECONNABORTED,t,v)),v=null)},v.onerror=function(){l(new bt("Network Error",bt.ERR_NETWORK,t,v)),v=null},v.ontimeout=function(){let M=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const I=t.transitional||bN;t.timeoutErrorMessage&&(M=t.timeoutErrorMessage),l(new bt(M,I.clarifyTimeoutError?bt.ETIMEDOUT:bt.ECONNABORTED,t,v)),v=null},Bi.isStandardBrowserEnv){const S=(t.withCredentials||DH(C))&&t.xsrfCookieName&&xH.read(t.xsrfCookieName);S&&h.set(t.xsrfHeaderName,S)}d===void 0&&h.setContentType(null),"setRequestHeader"in v&&pe.forEach(h.toJSON(),function(M,I){v.setRequestHeader(I,M)}),pe.isUndefined(t.withCredentials)||(v.withCredentials=!!t.withCredentials),f&&f!=="json"&&(v.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&v.addEventListener("progress",NT(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&v.upload&&v.upload.addEventListener("progress",NT(t.onUploadProgress)),(t.cancelToken||t.signal)&&(b=S=>{v&&(l(!S||S.type?new Rp(null,t,v):S),v.abort(),v=null)},t.cancelToken&&t.cancelToken.subscribe(b),t.signal&&(t.signal.aborted?b():t.signal.addEventListener("abort",b)));const A=TH(C);if(A&&Bi.protocols.indexOf(A)===-1){l(new bt("Unsupported protocol "+A+":",bt.ERR_BAD_REQUEST,t));return}v.send(d||null)})},vg={http:oH,xhr:PH};pe.forEach(vg,(t,o)=>{if(t){try{Object.defineProperty(t,"name",{value:o})}catch{}Object.defineProperty(t,"adapterName",{value:o})}});const NH={getAdapter:t=>{t=pe.isArray(t)?t:[t];const{length:o}=t;let i,l;for(let d=0;d<o&&(i=t[d],!(l=pe.isString(i)?vg[i.toLowerCase()]:i));d++);if(!l)throw l===!1?new bt(`Adapter ${i} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(pe.hasOwnProp(vg,i)?`Adapter '${i}' is not available in the build`:`Unknown adapter '${i}'`);if(!pe.isFunction(l))throw new TypeError("adapter is not a function");return l},adapters:vg};function Xw(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Rp(null,t)}function BT(t){return Xw(t),t.headers=fs.from(t.headers),t.data=Jw.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),NH.getAdapter(t.adapter||cC.adapter)(t).then(function(l){return Xw(t),l.data=Jw.call(t,t.transformResponse,l),l.headers=fs.from(l.headers),l},function(l){return wN(l)||(Xw(t),l&&l.response&&(l.response.data=Jw.call(t,t.transformResponse,l.response),l.response.headers=fs.from(l.response.headers))),Promise.reject(l)})}const RT=t=>t instanceof fs?t.toJSON():t;function eu(t,o){o=o||{};const i={};function l(v,C,_){return pe.isPlainObject(v)&&pe.isPlainObject(C)?pe.merge.call({caseless:_},v,C):pe.isPlainObject(C)?pe.merge({},C):pe.isArray(C)?C.slice():C}function d(v,C,_){if(pe.isUndefined(C)){if(!pe.isUndefined(v))return l(void 0,v,_)}else return l(v,C,_)}function h(v,C){if(!pe.isUndefined(C))return l(void 0,C)}function f(v,C){if(pe.isUndefined(C)){if(!pe.isUndefined(v))return l(void 0,v)}else return l(void 0,C)}function b(v,C,_){if(_ in o)return l(v,C);if(_ in t)return l(void 0,v)}const m={url:h,method:h,data:h,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:b,headers:(v,C)=>d(RT(v),RT(C),!0)};return pe.forEach(Object.keys(t).concat(Object.keys(o)),function(C){const _=m[C]||d,A=_(t[C],o[C],C);pe.isUndefined(A)&&_!==b||(i[C]=A)}),i}const yN="1.3.4",dC={};["object","boolean","number","function","string","symbol"].forEach((t,o)=>{dC[t]=function(l){return typeof l===t||"a"+(o<1?"n ":" ")+t}});const OT={};dC.transitional=function(o,i,l){function d(h,f){return"[Axios v"+yN+"] Transitional option '"+h+"'"+f+(l?". "+l:"")}return(h,f,b)=>{if(o===!1)throw new bt(d(f," has been removed"+(i?" in "+i:"")),bt.ERR_DEPRECATED);return i&&!OT[f]&&(OT[f]=!0,console.warn(d(f," has been deprecated since v"+i+" and will be removed in the near future"))),o?o(h,f,b):!0}};function BH(t,o,i){if(typeof t!="object")throw new bt("options must be an object",bt.ERR_BAD_OPTION_VALUE);const l=Object.keys(t);let d=l.length;for(;d-- >0;){const h=l[d],f=o[h];if(f){const b=t[h],m=b===void 0||f(b,h,t);if(m!==!0)throw new bt("option "+h+" must be "+m,bt.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new bt("Unknown option "+h,bt.ERR_BAD_OPTION)}}const _v={assertOptions:BH,validators:dC},Qs=_v.validators;class rm{constructor(o){this.defaults=o,this.interceptors={request:new MT,response:new MT}}request(o,i){typeof o=="string"?(i=i||{},i.url=o):i=o||{},i=eu(this.defaults,i);const{transitional:l,paramsSerializer:d,headers:h}=i;l!==void 0&&_v.assertOptions(l,{silentJSONParsing:Qs.transitional(Qs.boolean),forcedJSONParsing:Qs.transitional(Qs.boolean),clarifyTimeoutError:Qs.transitional(Qs.boolean)},!1),d!==void 0&&_v.assertOptions(d,{encode:Qs.function,serialize:Qs.function},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let f;f=h&&pe.merge(h.common,h[i.method]),f&&pe.forEach(["delete","get","head","post","put","patch","common"],M=>{delete h[M]}),i.headers=fs.concat(f,h);const b=[];let m=!0;this.interceptors.request.forEach(function(I){typeof I.runWhen=="function"&&I.runWhen(i)===!1||(m=m&&I.synchronous,b.unshift(I.fulfilled,I.rejected))});const v=[];this.interceptors.response.forEach(function(I){v.push(I.fulfilled,I.rejected)});let C,_=0,A;if(!m){const M=[BT.bind(this),void 0];for(M.unshift.apply(M,b),M.push.apply(M,v),A=M.length,C=Promise.resolve(i);_<A;)C=C.then(M[_++],M[_++]);return C}A=b.length;let S=i;for(_=0;_<A;){const M=b[_++],I=b[_++];try{S=M(S)}catch(U){I.call(this,U);break}}try{C=BT.call(this,S)}catch(M){return Promise.reject(M)}for(_=0,A=v.length;_<A;)C=C.then(v[_++],v[_++]);return C}getUri(o){o=eu(this.defaults,o);const i=vN(o.baseURL,o.url);return mN(i,o.params,o.paramsSerializer)}}pe.forEach(["delete","get","head","options"],function(o){rm.prototype[o]=function(i,l){return this.request(eu(l||{},{method:o,url:i,data:(l||{}).data}))}});pe.forEach(["post","put","patch"],function(o){function i(l){return function(h,f,b){return this.request(eu(b||{},{method:o,headers:l?{"Content-Type":"multipart/form-data"}:{},url:h,data:f}))}}rm.prototype[o]=i(),rm.prototype[o+"Form"]=i(!0)});const yg=rm;class uC{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(h){i=h});const l=this;this.promise.then(d=>{if(!l._listeners)return;let h=l._listeners.length;for(;h-- >0;)l._listeners[h](d);l._listeners=null}),this.promise.then=d=>{let h;const f=new Promise(b=>{l.subscribe(b),h=b}).then(d);return f.cancel=function(){l.unsubscribe(h)},f},o(function(h,f,b){l.reason||(l.reason=new Rp(h,f,b),i(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const i=this._listeners.indexOf(o);i!==-1&&this._listeners.splice(i,1)}static source(){let o;return{token:new uC(function(d){o=d}),cancel:o}}}const RH=uC;function OH(t){return function(i){return t.apply(null,i)}}function LH(t){return pe.isObject(t)&&t.isAxiosError===!0}const xv={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(xv).forEach(([t,o])=>{xv[o]=t});const zH=xv;function CN(t){const o=new yg(t),i=oN(yg.prototype.request,o);return pe.extend(i,yg.prototype,o,{allOwnKeys:!0}),pe.extend(i,o,null,{allOwnKeys:!0}),i.create=function(d){return CN(eu(t,d))},i}const Hn=CN(cC);Hn.Axios=yg;Hn.CanceledError=Rp;Hn.CancelToken=RH;Hn.isCancel=wN;Hn.VERSION=yN;Hn.toFormData=ob;Hn.AxiosError=bt;Hn.Cancel=Hn.CanceledError;Hn.all=function(o){return Promise.all(o)};Hn.spread=OH;Hn.isAxiosError=LH;Hn.mergeConfig=eu;Hn.AxiosHeaders=fs;Hn.formToJSON=t=>kN(pe.isHTMLForm(t)?new FormData(t):t);Hn.HttpStatusCode=zH;Hn.default=Hn;const jH=Hn,Dt=jH.create({baseURL:"https://jobsapp.online"});function Ev(t){this.message=t}Ev.prototype=new Error,Ev.prototype.name="InvalidCharacterError";var LT=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(t){var o=String(t).replace(/=+$/,"");if(o.length%4==1)throw new Ev("'atob' failed: The string to be decoded is not correctly encoded.");for(var i,l,d=0,h=0,f="";l=o.charAt(h++);~l&&(i=d%4?64*i+l:l,d++%4)?f+=String.fromCharCode(255&i>>(-2*d&6)):0)l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(l);return f};function FH(t){var o=t.replace(/-/g,"+").replace(/_/g,"/");switch(o.length%4){case 0:break;case 2:o+="==";break;case 3:o+="=";break;default:throw"Illegal base64url string!"}try{return function(i){return decodeURIComponent(LT(i).replace(/(.)/g,function(l,d){var h=d.charCodeAt(0).toString(16).toUpperCase();return h.length<2&&(h="0"+h),"%"+h}))}(o)}catch{return LT(o)}}function im(t){this.message=t}function zT(t,o){if(typeof t!="string")throw new im("Invalid token specified");var i=(o=o||{}).header===!0?0:1;try{return JSON.parse(FH(t.split(".")[i]))}catch(l){throw new im("Invalid token specified: "+l.message)}}im.prototype=new Error,im.prototype.name="InvalidTokenError";const uc=()=>{const t=Pa(),o=ko();return{startRegisterUser:async A=>{try{const{data:S}=await Dt.post("/api/auth/register",A);t(D8(S))}catch(S){const{response:M}=S;t(T8(M.data))}},startChecking:()=>{t(z8())},startClearingMessages:()=>{t(j8())},startVerifyingActivationCode:async A=>{try{const S=JSON.stringify({code:A}),{data:M}=await Dt.post("/api/auth/activate-account",S,{headers:{"Content-Type":"application/json"}});t(I8(M.msg)),o("/auth/login")}catch(S){t(M8(S.response.data.msg))}},startRequestUpdatePassword:async A=>{const S=JSON.stringify({email:A});try{const{data:M}=await Dt.post("/api/auth/recover-password-request",S,{headers:{"Content-Type":"application/json"}});t(P8(M.msg))}catch(M){t(N8(M.response.data.msg))}},startVerifyChangePasswordCode:async A=>{const S=JSON.stringify({code:A});try{const{data:M}=await Dt.post("/api/auth/validate-code",S,{headers:{"Content-Type":"application/json"}});t(B8(M.msg))}catch(M){t(R8(M.response.data.msg))}},startUpdatingUserPassword:async(A,S)=>{const M=JSON.stringify({code:A,newPassword:S});try{const{data:I}=await Dt.post("/api/auth/update-password",M,{headers:{"Content-Type":"application/json"}});t(O8(I.msg))}catch(I){t(L8(I.response.data.msg))}},startLoginUser:async(A,S)=>{const M=JSON.stringify({email:A,password:S});try{const{data:I}=await Dt.post("/api/auth/login",M,{headers:{"Content-Type":"application/json"}});localStorage.setItem("token",I.token);const U=zT(I.token),{id:N,email:O}=U;localStorage.setItem("userId",N),localStorage.setItem("email",O),t(ET()),o("/")}catch(I){t(S8(I.response.data.msg))}},startCheckingToken:async()=>{const A=localStorage.getItem("token");if(A==null||A==null)return localStorage.clear(),t(Yw());const S=zT(A),{exp:M}=S;if(Math.floor(new Date().getTime()/1e3)>M)return localStorage.clear(),o("/auth/login"),t(Yw());t(ET())},startLogout:()=>{localStorage.clear(),t(Yw())}}};var Sv={},$H={get exports(){return Sv},set exports(t){Sv=t}};/*!
* sweetalert2 v11.7.3
* Released under the MIT License.
*/(function(t,o){(function(i,l){t.exports=l()})(en,function(){var i={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const l="swal2-",d=E=>{const D={};for(const z in E)D[E[z]]=l+E[z];return D},h=d(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),f=d(["success","warning","info","question","error"]),b="SweetAlert2:",m=E=>{const D=[];for(let z=0;z<E.length;z++)D.indexOf(E[z])===-1&&D.push(E[z]);return D},v=E=>E.charAt(0).toUpperCase()+E.slice(1),C=E=>{console.warn(`${b} ${typeof E=="object"?E.join(" "):E}`)},_=E=>{console.error(`${b} ${E}`)},A=[],S=E=>{A.includes(E)||(A.push(E),C(E))},M=(E,D)=>{S(`"${E}" is deprecated and will be removed in the next major release. Please use "${D}" instead.`)},I=E=>typeof E=="function"?E():E,U=E=>E&&typeof E.toPromise=="function",N=E=>U(E)?E.toPromise():Promise.resolve(E),O=E=>E&&Promise.resolve(E)===E,L=()=>document.body.querySelector(`.${h.container}`),q=E=>{const D=L();return D?D.querySelector(E):null},K=E=>q(`.${E}`),J=()=>K(h.popup),H=()=>K(h.icon),F=()=>K(h["icon-content"]),X=()=>K(h.title),ee=()=>K(h["html-container"]),ce=()=>K(h.image),ke=()=>K(h["progress-steps"]),ge=()=>K(h["validation-message"]),fe=()=>q(`.${h.actions} .${h.confirm}`),he=()=>q(`.${h.actions} .${h.cancel}`),ve=()=>q(`.${h.actions} .${h.deny}`),De=()=>K(h["input-label"]),oe=()=>q(`.${h.loader}`),se=()=>K(h.actions),re=()=>K(h.footer),_e=()=>K(h["timer-progress-bar"]),Re=()=>K(h.close),Ee=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Le=()=>{const E=Array.from(J().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((z,Q)=>{const ae=parseInt(z.getAttribute("tabindex")),Oe=parseInt(Q.getAttribute("tabindex"));return ae>Oe?1:ae<Oe?-1:0}),D=Array.from(J().querySelectorAll(Ee)).filter(z=>z.getAttribute("tabindex")!=="-1");return m(E.concat(D)).filter(z=>Et(z))},tt=()=>wt(document.body,h.shown)&&!wt(document.body,h["toast-shown"])&&!wt(document.body,h["no-backdrop"]),Xe=()=>J()&&wt(J(),h.toast),We=()=>J().hasAttribute("data-loading"),Gt={previousBodyPadding:null},Ye=(E,D)=>{if(E.textContent="",D){const Q=new DOMParser().parseFromString(D,"text/html");Array.from(Q.querySelector("head").childNodes).forEach(ae=>{E.appendChild(ae)}),Array.from(Q.querySelector("body").childNodes).forEach(ae=>{ae instanceof HTMLVideoElement||ae instanceof HTMLAudioElement?E.appendChild(ae.cloneNode(!0)):E.appendChild(ae)})}},wt=(E,D)=>{if(!D)return!1;const z=D.split(/\s+/);for(let Q=0;Q<z.length;Q++)if(!E.classList.contains(z[Q]))return!1;return!0},je=(E,D)=>{Array.from(E.classList).forEach(z=>{!Object.values(h).includes(z)&&!Object.values(f).includes(z)&&!Object.values(D.showClass).includes(z)&&E.classList.remove(z)})},et=(E,D,z)=>{if(je(E,D),D.customClass&&D.customClass[z]){if(typeof D.customClass[z]!="string"&&!D.customClass[z].forEach){C(`Invalid type of customClass.${z}! Expected string or iterable object, got "${typeof D.customClass[z]}"`);return}Ke(E,D.customClass[z])}},xn=(E,D)=>{if(!D)return null;switch(D){case"select":case"textarea":case"file":return E.querySelector(`.${h.popup} > .${h[D]}`);case"checkbox":return E.querySelector(`.${h.popup} > .${h.checkbox} input`);case"radio":return E.querySelector(`.${h.popup} > .${h.radio} input:checked`)||E.querySelector(`.${h.popup} > .${h.radio} input:first-child`);case"range":return E.querySelector(`.${h.popup} > .${h.range} input`);default:return E.querySelector(`.${h.popup} > .${h.input}`)}},Ze=E=>{if(E.focus(),E.type!=="file"){const D=E.value;E.value="",E.value=D}},mn=(E,D,z)=>{!E||!D||(typeof D=="string"&&(D=D.split(/\s+/).filter(Boolean)),D.forEach(Q=>{Array.isArray(E)?E.forEach(ae=>{z?ae.classList.add(Q):ae.classList.remove(Q)}):z?E.classList.add(Q):E.classList.remove(Q)}))},Ke=(E,D)=>{mn(E,D,!0)},st=(E,D)=>{mn(E,D,!1)},an=(E,D)=>{const z=Array.from(E.children);for(let Q=0;Q<z.length;Q++){const ae=z[Q];if(ae instanceof HTMLElement&&wt(ae,D))return ae}},nn=(E,D,z)=>{z===`${parseInt(z)}`&&(z=parseInt(z)),z||parseInt(z)===0?E.style[D]=typeof z=="number"?`${z}px`:z:E.style.removeProperty(D)},vt=function(E){let D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";E.style.display=D},nt=E=>{E.style.display="none"},Nt=(E,D,z,Q)=>{const ae=E.querySelector(D);ae&&(ae.style[z]=Q)},Bt=function(E,D){let z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";D?vt(E,z):nt(E)},Et=E=>!!(E&&(E.offsetWidth||E.offsetHeight||E.getClientRects().length)),Mn=()=>!Et(fe())&&!Et(ve())&&!Et(he()),Qt=E=>E.scrollHeight>E.clientHeight,Zt=E=>{const D=window.getComputedStyle(E),z=parseFloat(D.getPropertyValue("animation-duration")||"0"),Q=parseFloat(D.getPropertyValue("transition-duration")||"0");return z>0||Q>0},ct=function(E){let D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const z=_e();Et(z)&&(D&&(z.style.transition="none",z.style.width="100%"),setTimeout(()=>{z.style.transition=`width ${E/1e3}s linear`,z.style.width="0%"},10))},me=()=>{const E=_e(),D=parseInt(window.getComputedStyle(E).width);E.style.removeProperty("transition"),E.style.width="100%";const z=parseInt(window.getComputedStyle(E).width),Q=D/z*100;E.style.width=`${Q}%`},dt=100,Me={},Xn=()=>{Me.previousActiveElement instanceof HTMLElement?(Me.previousActiveElement.focus(),Me.previousActiveElement=null):document.body&&document.body.focus()},Ui=E=>new Promise(D=>{if(!E)return D();const z=window.scrollX,Q=window.scrollY;Me.restoreFocusTimeout=setTimeout(()=>{Xn(),D()},dt),window.scrollTo(z,Q)}),hc=()=>typeof window>"u"||typeof document>"u",pc=`
 <div aria-labelledby="${h.title}" aria-describedby="${h["html-container"]}" class="${h.popup}" tabindex="-1">
   <button type="button" class="${h.close}"></button>
   <ul class="${h["progress-steps"]}"></ul>
   <div class="${h.icon}"></div>
   <img class="${h.image}" />
   <h2 class="${h.title}" id="${h.title}"></h2>
   <div class="${h["html-container"]}" id="${h["html-container"]}"></div>
   <input class="${h.input}" />
   <input type="file" class="${h.file}" />
   <div class="${h.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${h.select}"></select>
   <div class="${h.radio}"></div>
   <label for="${h.checkbox}" class="${h.checkbox}">
     <input type="checkbox" />
     <span class="${h.label}"></span>
   </label>
   <textarea class="${h.textarea}"></textarea>
   <div class="${h["validation-message"]}" id="${h["validation-message"]}"></div>
   <div class="${h.actions}">
     <div class="${h.loader}"></div>
     <button type="button" class="${h.confirm}"></button>
     <button type="button" class="${h.deny}"></button>
     <button type="button" class="${h.cancel}"></button>
   </div>
   <div class="${h.footer}"></div>
   <div class="${h["timer-progress-bar-container"]}">
     <div class="${h["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),ur=()=>{const E=L();return E?(E.remove(),st([document.documentElement,document.body],[h["no-backdrop"],h["toast-shown"],h["has-column"]]),!0):!1},on=()=>{Me.currentInstance.resetValidationMessage()},bn=()=>{const E=J(),D=an(E,h.input),z=an(E,h.file),Q=E.querySelector(`.${h.range} input`),ae=E.querySelector(`.${h.range} output`),Oe=an(E,h.select),Ot=E.querySelector(`.${h.checkbox} input`),eo=an(E,h.textarea);D.oninput=on,z.onchange=on,Oe.onchange=on,Ot.onchange=on,eo.oninput=on,Q.oninput=()=>{on(),ae.value=Q.value},Q.onchange=()=>{on(),ae.value=Q.value}},Jr=E=>typeof E=="string"?document.querySelector(E):E,Xr=E=>{const D=J();D.setAttribute("role",E.toast?"alert":"dialog"),D.setAttribute("aria-live",E.toast?"polite":"assertive"),E.toast||D.setAttribute("aria-modal","true")},fc=E=>{window.getComputedStyle(E).direction==="rtl"&&Ke(L(),h.rtl)},ja=E=>{const D=ur();if(hc()){_("SweetAlert2 requires document to initialize");return}const z=document.createElement("div");z.className=h.container,D&&Ke(z,h["no-transition"]),Ye(z,pc);const Q=Jr(E.target);Q.appendChild(z),Xr(E),fc(Q),bn()},Fa=(E,D)=>{E instanceof HTMLElement?D.appendChild(E):typeof E=="object"?ku(E,D):E&&Ye(D,E)},ku=(E,D)=>{E.jquery?gc(D,E):Ye(D,E.toString())},gc=(E,D)=>{if(E.textContent="",0 in D)for(let z=0;z in D;z++)E.appendChild(D[z].cloneNode(!0));else E.appendChild(D.cloneNode(!0))},Hi=(()=>{if(hc())return!1;const E=document.createElement("div"),D={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const z in D)if(Object.prototype.hasOwnProperty.call(D,z)&&typeof E.style[z]<"u")return D[z];return!1})(),wu=()=>{const E=document.createElement("div");E.className=h["scrollbar-measure"],document.body.appendChild(E);const D=E.getBoundingClientRect().width-E.clientWidth;return document.body.removeChild(E),D},kn=(E,D)=>{const z=se(),Q=oe();!D.showConfirmButton&&!D.showDenyButton&&!D.showCancelButton?nt(z):vt(z),et(z,D,"actions"),mc(z,Q,D),Ye(Q,D.loaderHtml),et(Q,D,"loader")};function mc(E,D,z){const Q=fe(),ae=ve(),Oe=he();ei(Q,"confirm",z),ei(ae,"deny",z),ei(Oe,"cancel",z),Wi(Q,ae,Oe,z),z.reverseButtons&&(z.toast?(E.insertBefore(Oe,Q),E.insertBefore(ae,Q)):(E.insertBefore(Oe,D),E.insertBefore(ae,D),E.insertBefore(Q,D)))}function Wi(E,D,z,Q){if(!Q.buttonsStyling){st([E,D,z],h.styled);return}Ke([E,D,z],h.styled),Q.confirmButtonColor&&(E.style.backgroundColor=Q.confirmButtonColor,Ke(E,h["default-outline"])),Q.denyButtonColor&&(D.style.backgroundColor=Q.denyButtonColor,Ke(D,h["default-outline"])),Q.cancelButtonColor&&(z.style.backgroundColor=Q.cancelButtonColor,Ke(z,h["default-outline"]))}function ei(E,D,z){Bt(E,z[`show${v(D)}Button`],"inline-block"),Ye(E,z[`${D}ButtonText`]),E.setAttribute("aria-label",z[`${D}ButtonAriaLabel`]),E.className=h[D],et(E,z,`${D}Button`),Ke(E,z[`${D}ButtonClass`])}const _s=(E,D)=>{const z=Re();Ye(z,D.closeButtonHtml),et(z,D,"closeButton"),Bt(z,D.showCloseButton),z.setAttribute("aria-label",D.closeButtonAriaLabel)},vu=(E,D)=>{const z=L();z&&(yu(z,D.backdrop),Cu(z,D.position),Au(z,D.grow),et(z,D,"container"))};function yu(E,D){typeof D=="string"?E.style.background=D:D||Ke([document.documentElement,document.body],h["no-backdrop"])}function Cu(E,D){D in h?Ke(E,h[D]):(C('The "position" parameter is not valid, defaulting to "center"'),Ke(E,h.center))}function Au(E,D){if(D&&typeof D=="string"){const z=`grow-${D}`;z in h&&Ke(E,h[z])}}const wo=["input","file","range","select","radio","checkbox","textarea"],xs=(E,D)=>{const z=J(),Q=i.innerParams.get(E),ae=!Q||D.input!==Q.input;wo.forEach(Oe=>{const Ot=an(z,h[Oe]);xu(Oe,D.inputAttributes),Ot.className=h[Oe],ae&&nt(Ot)}),D.input&&(ae&&_u(D),Eu(D))},_u=E=>{if(!En[E.input]){_(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${E.input}"`);return}const D=$a(E.input),z=En[E.input](D,E);vt(D),E.inputAutoFocus&&setTimeout(()=>{Ze(z)})},ti=E=>{for(let D=0;D<E.attributes.length;D++){const z=E.attributes[D].name;["type","value","style"].includes(z)||E.removeAttribute(z)}},xu=(E,D)=>{const z=xn(J(),E);if(z){ti(z);for(const Q in D)z.setAttribute(Q,D[Q])}},Eu=E=>{const D=$a(E.input);typeof E.customClass=="object"&&Ke(D,E.customClass.input)},So=(E,D)=>{(!E.placeholder||D.inputPlaceholder)&&(E.placeholder=D.inputPlaceholder)},hr=(E,D,z)=>{if(z.inputLabel){E.id=h.input;const Q=document.createElement("label"),ae=h["input-label"];Q.setAttribute("for",E.id),Q.className=ae,typeof z.customClass=="object"&&Ke(Q,z.customClass.inputLabel),Q.innerText=z.inputLabel,D.insertAdjacentElement("beforebegin",Q)}},$a=E=>an(J(),h[E]||h.input),qi=(E,D)=>{["string","number"].includes(typeof D)?E.value=`${D}`:O(D)||C(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof D}"`)},En={};En.text=En.email=En.password=En.number=En.tel=En.url=(E,D)=>(qi(E,D.inputValue),hr(E,E,D),So(E,D),E.type=D.input,E),En.file=(E,D)=>(hr(E,E,D),So(E,D),E),En.range=(E,D)=>{const z=E.querySelector("input"),Q=E.querySelector("output");return qi(z,D.inputValue),z.type=D.input,qi(Q,D.inputValue),hr(z,E,D),E},En.select=(E,D)=>{if(E.textContent="",D.inputPlaceholder){const z=document.createElement("option");Ye(z,D.inputPlaceholder),z.value="",z.disabled=!0,z.selected=!0,E.appendChild(z)}return hr(E,E,D),E},En.radio=E=>(E.textContent="",E),En.checkbox=(E,D)=>{const z=xn(J(),"checkbox");z.value="1",z.id=h.checkbox,z.checked=!!D.inputValue;const Q=E.querySelector("span");return Ye(Q,D.inputPlaceholder),z},En.textarea=(E,D)=>{qi(E,D.inputValue),So(E,D),hr(E,E,D);const z=Q=>parseInt(window.getComputedStyle(Q).marginLeft)+parseInt(window.getComputedStyle(Q).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const Q=parseInt(window.getComputedStyle(J()).width),ae=()=>{const Oe=E.offsetWidth+z(E);Oe>Q?J().style.width=`${Oe}px`:J().style.width=null};new MutationObserver(ae).observe(E,{attributes:!0,attributeFilter:["style"]})}}),E};const Tr=(E,D)=>{const z=ee();et(z,D,"htmlContainer"),D.html?(Fa(D.html,z),vt(z,"block")):D.text?(z.textContent=D.text,vt(z,"block")):nt(z),xs(E,D)},bc=(E,D)=>{const z=re();Bt(z,D.footer),D.footer&&Fa(D.footer,z),et(z,D,"footer")},kc=(E,D)=>{const z=i.innerParams.get(E),Q=H();if(z&&D.icon===z.icon){vc(Q,D),wc(Q,D);return}if(!D.icon&&!D.iconHtml){nt(Q);return}if(D.icon&&Object.keys(f).indexOf(D.icon)===-1){_(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${D.icon}"`),nt(Q);return}vt(Q),vc(Q,D),wc(Q,D),Ke(Q,D.showClass.icon)},wc=(E,D)=>{for(const z in f)D.icon!==z&&st(E,f[z]);Ke(E,f[D.icon]),yc(E,D),Su(),et(E,D,"icon")},Su=()=>{const E=J(),D=window.getComputedStyle(E).getPropertyValue("background-color"),z=E.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let Q=0;Q<z.length;Q++)z[Q].style.backgroundColor=D},Du=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Va=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,vc=(E,D)=>{let z=E.innerHTML,Q;D.iconHtml?Q=Vo(D.iconHtml):D.icon==="success"?(Q=Du,z=z.replace(/ style=".*?"/g,"")):D.icon==="error"?Q=Va:Q=Vo({question:"?",warning:"!",info:"i"}[D.icon]),z.trim()!==Q.trim()&&Ye(E,Q)},yc=(E,D)=>{if(D.iconColor){E.style.color=D.iconColor,E.style.borderColor=D.iconColor;for(const z of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Nt(E,z,"backgroundColor",D.iconColor);Nt(E,".swal2-success-ring","borderColor",D.iconColor)}},Vo=E=>`<div class="${h["icon-content"]}">${E}</div>`,ni=(E,D)=>{const z=ce();if(!D.imageUrl){nt(z);return}vt(z,""),z.setAttribute("src",D.imageUrl),z.setAttribute("alt",D.imageAlt),nn(z,"width",D.imageWidth),nn(z,"height",D.imageHeight),z.className=h.image,et(z,D,"image")},oi=(E,D)=>{const z=L(),Q=J();D.toast?(nn(z,"width",D.width),Q.style.width="100%",Q.insertBefore(oe(),H())):nn(Q,"width",D.width),nn(Q,"padding",D.padding),D.color&&(Q.style.color=D.color),D.background&&(Q.style.background=D.background),nt(ge()),Tu(Q,D)},Tu=(E,D)=>{E.className=`${h.popup} ${Et(E)?D.showClass.popup:""}`,D.toast?(Ke([document.documentElement,document.body],h["toast-shown"]),Ke(E,h.toast)):Ke(E,h.modal),et(E,D,"popup"),typeof D.customClass=="string"&&Ke(E,D.customClass),D.icon&&Ke(E,h[`icon-${D.icon}`])},Iu=(E,D)=>{const z=ke();if(!D.progressSteps||D.progressSteps.length===0){nt(z);return}vt(z),z.textContent="",D.currentProgressStep>=D.progressSteps.length&&C("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),D.progressSteps.forEach((Q,ae)=>{const Oe=Cc(Q);if(z.appendChild(Oe),ae===D.currentProgressStep&&Ke(Oe,h["active-progress-step"]),ae!==D.progressSteps.length-1){const Ot=Rt(D);z.appendChild(Ot)}})},Cc=E=>{const D=document.createElement("li");return Ke(D,h["progress-step"]),Ye(D,E),D},Rt=E=>{const D=document.createElement("li");return Ke(D,h["progress-step-line"]),E.progressStepsDistance&&nn(D,"width",E.progressStepsDistance),D},Mu=(E,D)=>{const z=X();Bt(z,D.title||D.titleText,"block"),D.title&&Fa(D.title,z),D.titleText&&(z.innerText=D.titleText),et(z,D,"title")},Es=(E,D)=>{oi(E,D),vu(E,D),Iu(E,D),kc(E,D),ni(E,D),Mu(E,D),_s(E,D),Tr(E,D),kn(E,D),bc(E,D),typeof D.didRender=="function"&&D.didRender(J())};function Ua(){const E=i.innerParams.get(this);if(!E)return;const D=i.domCache.get(this);nt(D.loader),Xe()?E.icon&&vt(H()):Do(D),st([D.popup,D.actions],h.loading),D.popup.removeAttribute("aria-busy"),D.popup.removeAttribute("data-loading"),D.confirmButton.disabled=!1,D.denyButton.disabled=!1,D.cancelButton.disabled=!1}const Do=E=>{const D=E.popup.getElementsByClassName(E.loader.getAttribute("data-button-to-replace"));D.length?vt(D[0],"inline-block"):Mn()&&nt(E.actions)};function Ss(E){const D=i.innerParams.get(E||this),z=i.domCache.get(E||this);return z?xn(z.popup,D.input):null}const ri=()=>Et(J()),Ha=()=>fe()&&fe().click(),Ds=()=>ve()&&ve().click(),Pu=()=>he()&&he().click(),Ir=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Ac=E=>{E.keydownTarget&&E.keydownHandlerAdded&&(E.keydownTarget.removeEventListener("keydown",E.keydownHandler,{capture:E.keydownListenerCapture}),E.keydownHandlerAdded=!1)},Wa=(E,D,z,Q)=>{Ac(D),z.toast||(D.keydownHandler=ae=>ii(E,ae,Q),D.keydownTarget=z.keydownListenerCapture?window:J(),D.keydownListenerCapture=z.keydownListenerCapture,D.keydownTarget.addEventListener("keydown",D.keydownHandler,{capture:D.keydownListenerCapture}),D.keydownHandlerAdded=!0)},Uo=(E,D)=>{const z=Le();if(z.length){E=E+D,E===z.length?E=0:E===-1&&(E=z.length-1),z[E].focus();return}J().focus()},Gi=["ArrowRight","ArrowDown"],Nu=["ArrowLeft","ArrowUp"],ii=(E,D,z)=>{const Q=i.innerParams.get(E);Q&&(D.isComposing||D.keyCode===229||(Q.stopKeydownPropagation&&D.stopPropagation(),D.key==="Enter"?si(E,D,Q):D.key==="Tab"?qa(D):[...Gi,...Nu].includes(D.key)?Ts(D.key):D.key==="Escape"&&Ga(D,Q,z)))},si=(E,D,z)=>{if(I(z.allowEnterKey)&&D.target&&E.getInput()&&D.target instanceof HTMLElement&&D.target.outerHTML===E.getInput().outerHTML){if(["textarea","file"].includes(z.input))return;Ha(),D.preventDefault()}},qa=E=>{const D=E.target,z=Le();let Q=-1;for(let ae=0;ae<z.length;ae++)if(D===z[ae]){Q=ae;break}E.shiftKey?Uo(Q,-1):Uo(Q,1),E.stopPropagation(),E.preventDefault()},Ts=E=>{const D=fe(),z=ve(),Q=he(),ae=[D,z,Q];if(document.activeElement instanceof HTMLElement&&!ae.includes(document.activeElement))return;const Oe=Gi.includes(E)?"nextElementSibling":"previousElementSibling";let Ot=document.activeElement;for(let eo=0;eo<se().children.length;eo++){if(Ot=Ot[Oe],!Ot)return;if(Ot instanceof HTMLButtonElement&&Et(Ot))break}Ot instanceof HTMLButtonElement&&Ot.focus()},Ga=(E,D,z)=>{I(D.allowEscapeKey)&&(E.preventDefault(),z(Ir.esc))};var Ki={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Ka=()=>{Array.from(document.body.children).forEach(D=>{D===L()||D.contains(L())||(D.hasAttribute("aria-hidden")&&D.setAttribute("data-previous-aria-hidden",D.getAttribute("aria-hidden")),D.setAttribute("aria-hidden","true"))})},Ho=()=>{Array.from(document.body.children).forEach(D=>{D.hasAttribute("data-previous-aria-hidden")?(D.setAttribute("aria-hidden",D.getAttribute("data-previous-aria-hidden")),D.removeAttribute("data-previous-aria-hidden")):D.removeAttribute("aria-hidden")})},Bu=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!wt(document.body,h.iosfix)){const D=document.body.scrollTop;document.body.style.top=`${D*-1}px`,Ke(document.body,h.iosfix),Qa(),Ya()}},Ya=()=>{const E=navigator.userAgent,D=!!E.match(/iPad/i)||!!E.match(/iPhone/i),z=!!E.match(/WebKit/i);D&&z&&!E.match(/CriOS/i)&&J().scrollHeight>window.innerHeight-44&&(L().style.paddingBottom="44px")},Qa=()=>{const E=L();let D;E.ontouchstart=z=>{D=_c(z)},E.ontouchmove=z=>{D&&(z.preventDefault(),z.stopPropagation())}},_c=E=>{const D=E.target,z=L();return xc(E)||Za(E)?!1:D===z||!Qt(z)&&D instanceof HTMLElement&&D.tagName!=="INPUT"&&D.tagName!=="TEXTAREA"&&!(Qt(ee())&&ee().contains(D))},xc=E=>E.touches&&E.touches.length&&E.touches[0].touchType==="stylus",Za=E=>E.touches&&E.touches.length>1,Ru=()=>{if(wt(document.body,h.iosfix)){const E=parseInt(document.body.style.top,10);st(document.body,h.iosfix),document.body.style.top="",document.body.scrollTop=E*-1}},Ec=()=>{Gt.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Gt.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Gt.previousBodyPadding+wu()}px`)},Ja=()=>{Gt.previousBodyPadding!==null&&(document.body.style.paddingRight=`${Gt.previousBodyPadding}px`,Gt.previousBodyPadding=null)};function Xa(E,D,z,Q){Xe()?Is(E,Q):(Ui(z).then(()=>Is(E,Q)),Ac(Me)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(D.setAttribute("style","display:none !important"),D.removeAttribute("class"),D.innerHTML=""):D.remove(),tt()&&(Ja(),Ru(),Ho()),ai()}function ai(){st([document.documentElement,document.body],[h.shown,h["height-auto"],h["no-backdrop"],h["toast-shown"]])}function li(E){E=nl(E);const D=Ki.swalPromiseResolve.get(this),z=tl(this);this.isAwaitingPromise()?E.isDismissed||(ci(this),D(E)):z&&D(E)}function el(){return!!i.awaitingPromise.get(this)}const tl=E=>{const D=J();if(!D)return!1;const z=i.innerParams.get(E);if(!z||wt(D,z.hideClass.popup))return!1;st(D,z.showClass.popup),Ke(D,z.hideClass.popup);const Q=L();return st(Q,z.showClass.backdrop),Ke(Q,z.hideClass.backdrop),ol(E,D,z),!0};function Ct(E){const D=Ki.swalPromiseReject.get(this);ci(this),D&&D(E)}const ci=E=>{E.isAwaitingPromise()&&(i.awaitingPromise.delete(E),i.innerParams.get(E)||E._destroy())},nl=E=>typeof E>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},E),ol=(E,D,z)=>{const Q=L(),ae=Hi&&Zt(D);typeof z.willClose=="function"&&z.willClose(D),ae?Yi(E,D,Q,z.returnFocus,z.didClose):Xa(E,Q,z.returnFocus,z.didClose)},Yi=(E,D,z,Q,ae)=>{Me.swalCloseEventFinishedCallback=Xa.bind(null,E,z,Q,ae),D.addEventListener(Hi,function(Oe){Oe.target===D&&(Me.swalCloseEventFinishedCallback(),delete Me.swalCloseEventFinishedCallback)})},Is=(E,D)=>{setTimeout(()=>{typeof D=="function"&&D.bind(E.params)(),E._destroy()})};function Wo(E,D,z){const Q=i.domCache.get(E);D.forEach(ae=>{Q[ae].disabled=z})}function Qi(E,D){if(E)if(E.type==="radio"){const Q=E.parentNode.parentNode.querySelectorAll("input");for(let ae=0;ae<Q.length;ae++)Q[ae].disabled=D}else E.disabled=D}function Zi(){Wo(this,["confirmButton","denyButton","cancelButton"],!1)}function rl(){Wo(this,["confirmButton","denyButton","cancelButton"],!0)}function il(){Qi(this.getInput(),!1)}function Sc(){Qi(this.getInput(),!0)}function Ms(E){const D=i.domCache.get(this),z=i.innerParams.get(this);Ye(D.validationMessage,E),D.validationMessage.className=h["validation-message"],z.customClass&&z.customClass.validationMessage&&Ke(D.validationMessage,z.customClass.validationMessage),vt(D.validationMessage);const Q=this.getInput();Q&&(Q.setAttribute("aria-invalid",!0),Q.setAttribute("aria-describedby",h["validation-message"]),Ze(Q),Ke(Q,h.inputerror))}function Dc(){const E=i.domCache.get(this);E.validationMessage&&nt(E.validationMessage);const D=this.getInput();D&&(D.removeAttribute("aria-invalid"),D.removeAttribute("aria-describedby"),st(D,h.inputerror))}const Mr={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Ou=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Ps={},sl=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Tc=E=>Object.prototype.hasOwnProperty.call(Mr,E),Ic=E=>Ou.indexOf(E)!==-1,qo=E=>Ps[E],al=E=>{Tc(E)||C(`Unknown parameter "${E}"`)},di=E=>{sl.includes(E)&&C(`The parameter "${E}" is incompatible with toasts`)},Lu=E=>{qo(E)&&M(E,qo(E))},ll=E=>{E.backdrop===!1&&E.allowOutsideClick&&C('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const D in E)al(D),E.toast&&di(D),Lu(D)};function Ns(E){const D=J(),z=i.innerParams.get(this);if(!D||wt(D,z.hideClass.popup)){C("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const Q=Mc(E),ae=Object.assign({},z,Q);Es(this,ae),i.innerParams.set(this,ae),Object.defineProperties(this,{params:{value:Object.assign({},this.params,E),writable:!1,enumerable:!0}})}const Mc=E=>{const D={};return Object.keys(E).forEach(z=>{Ic(z)?D[z]=E[z]:C(`Invalid parameter to update: ${z}`)}),D};function Pc(){const E=i.domCache.get(this),D=i.innerParams.get(this);if(!D){Bs(this);return}E.popup&&Me.swalCloseEventFinishedCallback&&(Me.swalCloseEventFinishedCallback(),delete Me.swalCloseEventFinishedCallback),typeof D.didDestroy=="function"&&D.didDestroy(),Nc(this)}const Nc=E=>{Bs(E),delete E.params,delete Me.keydownHandler,delete Me.keydownTarget,delete Me.currentInstance},Bs=E=>{E.isAwaitingPromise()?(Rs(i,E),i.awaitingPromise.set(E,!0)):(Rs(Ki,E),Rs(i,E))},Rs=(E,D)=>{for(const z in E)E[z].delete(D)};var cl=Object.freeze({__proto__:null,_destroy:Pc,close:li,closeModal:li,closePopup:li,closeToast:li,disableButtons:rl,disableInput:Sc,disableLoading:Ua,enableButtons:Zi,enableInput:il,getInput:Ss,handleAwaitingPromise:ci,hideLoading:Ua,isAwaitingPromise:el,rejectPromise:Ct,resetValidationMessage:Dc,showValidationMessage:Ms,update:Ns});const ui=E=>{let D=J();D||new Hc,D=J();const z=oe();Xe()?nt(H()):Bc(D,E),vt(z),D.setAttribute("data-loading","true"),D.setAttribute("aria-busy","true"),D.focus()},Bc=(E,D)=>{const z=se(),Q=oe();!D&&Et(fe())&&(D=fe()),vt(z),D&&(nt(D),Q.setAttribute("data-button-to-replace",D.className)),Q.parentNode.insertBefore(Q,D),Ke([E,z],h.loading)},Os=(E,D)=>{D.input==="select"||D.input==="radio"?zc(E,D):["text","email","number","tel","textarea"].includes(D.input)&&(U(D.inputValue)||O(D.inputValue))&&(ui(fe()),dl(E,D))},zu=(E,D)=>{const z=E.getInput();if(!z)return null;switch(D.input){case"checkbox":return Rc(z);case"radio":return Oc(z);case"file":return Lc(z);default:return D.inputAutoTrim?z.value.trim():z.value}},Rc=E=>E.checked?1:0,Oc=E=>E.checked?E.value:null,Lc=E=>E.files.length?E.getAttribute("multiple")!==null?E.files:E.files[0]:null,zc=(E,D)=>{const z=J(),Q=ae=>{jc[D.input](z,Ji(ae),D)};U(D.inputOptions)||O(D.inputOptions)?(ui(fe()),N(D.inputOptions).then(ae=>{E.hideLoading(),Q(ae)})):typeof D.inputOptions=="object"?Q(D.inputOptions):_(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof D.inputOptions}`)},dl=(E,D)=>{const z=E.getInput();nt(z),N(D.inputValue).then(Q=>{z.value=D.input==="number"?`${parseFloat(Q)||0}`:`${Q}`,vt(z),z.focus(),E.hideLoading()}).catch(Q=>{_(`Error in inputValue promise: ${Q}`),z.value="",vt(z),z.focus(),E.hideLoading()})},jc={select:(E,D,z)=>{const Q=an(E,h.select),ae=(Oe,Ot,eo)=>{const qn=document.createElement("option");qn.value=eo,Ye(qn,Ot),qn.selected=Xi(eo,z.inputValue),Oe.appendChild(qn)};D.forEach(Oe=>{const Ot=Oe[0],eo=Oe[1];if(Array.isArray(eo)){const qn=document.createElement("optgroup");qn.label=Ot,qn.disabled=!1,Q.appendChild(qn),eo.forEach($s=>ae(qn,$s[1],$s[0]))}else ae(Q,eo,Ot)}),Q.focus()},radio:(E,D,z)=>{const Q=an(E,h.radio);D.forEach(Oe=>{const Ot=Oe[0],eo=Oe[1],qn=document.createElement("input"),$s=document.createElement("label");qn.type="radio",qn.name=h.radio,qn.value=Ot,Xi(Ot,z.inputValue)&&(qn.checked=!0);const Wu=document.createElement("span");Ye(Wu,eo),Wu.className=h.label,$s.appendChild(qn),$s.appendChild(Wu),Q.appendChild($s)});const ae=Q.querySelectorAll("input");ae.length&&ae[0].focus()}},Ji=E=>{const D=[];return typeof Map<"u"&&E instanceof Map?E.forEach((z,Q)=>{let ae=z;typeof ae=="object"&&(ae=Ji(ae)),D.push([Q,ae])}):Object.keys(E).forEach(z=>{let Q=E[z];typeof Q=="object"&&(Q=Ji(Q)),D.push([z,Q])}),D},Xi=(E,D)=>D&&D.toString()===E.toString(),Ls=E=>{const D=i.innerParams.get(E);E.disableButtons(),D.input?ul(E,"confirm"):fl(E,!0)},zs=E=>{const D=i.innerParams.get(E);E.disableButtons(),D.returnInputValueOnDeny?ul(E,"deny"):js(E,!1)},At=(E,D)=>{E.disableButtons(),D(Ir.cancel)},ul=(E,D)=>{const z=i.innerParams.get(E);if(!z.input){_(`The "input" parameter is needed to be set when using returnInputValueOn${v(D)}`);return}const Q=zu(E,z);z.inputValidator?Fc(E,Q,D):E.getInput().checkValidity()?D==="deny"?js(E,Q):fl(E,Q):(E.enableButtons(),E.showValidationMessage(z.validationMessage))},Fc=(E,D,z)=>{const Q=i.innerParams.get(E);E.disableInput(),Promise.resolve().then(()=>N(Q.inputValidator(D,Q.validationMessage))).then(Oe=>{E.enableButtons(),E.enableInput(),Oe?E.showValidationMessage(Oe):z==="deny"?js(E,D):fl(E,D)})},js=(E,D)=>{const z=i.innerParams.get(E||void 0);z.showLoaderOnDeny&&ui(ve()),z.preDeny?(i.awaitingPromise.set(E||void 0,!0),Promise.resolve().then(()=>N(z.preDeny(D,z.validationMessage))).then(ae=>{ae===!1?(E.hideLoading(),ci(E)):E.close({isDenied:!0,value:typeof ae>"u"?D:ae})}).catch(ae=>pl(E||void 0,ae))):E.close({isDenied:!0,value:D})},hl=(E,D)=>{E.close({isConfirmed:!0,value:D})},pl=(E,D)=>{E.rejectPromise(D)},fl=(E,D)=>{const z=i.innerParams.get(E||void 0);z.showLoaderOnConfirm&&ui(),z.preConfirm?(E.resetValidationMessage(),i.awaitingPromise.set(E||void 0,!0),Promise.resolve().then(()=>N(z.preConfirm(D,z.validationMessage))).then(ae=>{Et(ge())||ae===!1?(E.hideLoading(),ci(E)):hl(E,typeof ae>"u"?D:ae)}).catch(ae=>pl(E||void 0,ae))):hl(E,D)},ju=(E,D,z)=>{i.innerParams.get(E).toast?Fu(E,D,z):(Go(D),$c(D),Vu(E,D,z))},Fu=(E,D,z)=>{D.popup.onclick=()=>{const Q=i.innerParams.get(E);Q&&($u(Q)||Q.timer||Q.input)||z(Ir.close)}},$u=E=>E.showConfirmButton||E.showDenyButton||E.showCancelButton||E.showCloseButton;let vo=!1;const Go=E=>{E.popup.onmousedown=()=>{E.container.onmouseup=function(D){E.container.onmouseup=void 0,D.target===E.container&&(vo=!0)}}},$c=E=>{E.container.onmousedown=()=>{E.popup.onmouseup=function(D){E.popup.onmouseup=void 0,(D.target===E.popup||E.popup.contains(D.target))&&(vo=!0)}}},Vu=(E,D,z)=>{D.container.onclick=Q=>{const ae=i.innerParams.get(E);if(vo){vo=!1;return}Q.target===D.container&&I(ae.allowOutsideClick)&&z(Ir.backdrop)}},es=E=>typeof E=="object"&&E.jquery,ts=E=>E instanceof Element||es(E),gl=E=>{const D={};return typeof E[0]=="object"&&!ts(E[0])?Object.assign(D,E[0]):["title","html","icon"].forEach((z,Q)=>{const ae=E[Q];typeof ae=="string"||ts(ae)?D[z]=ae:ae!==void 0&&_(`Unexpected type of ${z}! Expected "string" or "Element", got ${typeof ae}`)}),D};function ml(){const E=this;for(var D=arguments.length,z=new Array(D),Q=0;Q<D;Q++)z[Q]=arguments[Q];return new E(...z)}function hi(E){class D extends this{_main(Q,ae){return super._main(Q,Object.assign({},E,ae))}}return D}const Vc=()=>Me.timeout&&Me.timeout.getTimerLeft(),$=()=>{if(Me.timeout)return me(),Me.timeout.stop()},V=()=>{if(Me.timeout){const E=Me.timeout.start();return ct(E),E}},Z=()=>{const E=Me.timeout;return E&&(E.running?$():V())},ie=E=>{if(Me.timeout){const D=Me.timeout.increase(E);return ct(D,!0),D}},Ne=()=>Me.timeout&&Me.timeout.isRunning();let Fe=!1;const qe={};function Qe(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";qe[E]=this,Fe||(document.body.addEventListener("click",Jt),Fe=!0)}const Jt=E=>{for(let D=E.target;D&&D!==document;D=D.parentNode)for(const z in qe){const Q=D.getAttribute(z);if(Q){qe[z].fire({template:Q});return}}};var Kt=Object.freeze({__proto__:null,argsToParams:gl,bindClickHandler:Qe,clickCancel:Pu,clickConfirm:Ha,clickDeny:Ds,enableLoading:ui,fire:ml,getActions:se,getCancelButton:he,getCloseButton:Re,getConfirmButton:fe,getContainer:L,getDenyButton:ve,getFocusableElements:Le,getFooter:re,getHtmlContainer:ee,getIcon:H,getIconContent:F,getImage:ce,getInputLabel:De,getLoader:oe,getPopup:J,getProgressSteps:ke,getTimerLeft:Vc,getTimerProgressBar:_e,getTitle:X,getValidationMessage:ge,increaseTimer:ie,isDeprecatedParameter:qo,isLoading:We,isTimerRunning:Ne,isUpdatableParameter:Ic,isValidParameter:Tc,isVisible:ri,mixin:hi,resumeTimer:V,showLoading:ui,stopTimer:$,toggleTimer:Z});class Fs{constructor(D,z){this.callback=D,this.remaining=z,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(D){const z=this.running;return z&&this.stop(),this.remaining+=D,z&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Ko=["swal-title","swal-html","swal-footer"],To=E=>{const D=typeof E.template=="string"?document.querySelector(E.template):E.template;if(!D)return{};const z=D.content;return fr(z),Object.assign(Pr(z),pi(z),pr(z),ot(z),ao(z),jn(z),Wn(z,Ko))},Pr=E=>{const D={};return Array.from(E.querySelectorAll("swal-param")).forEach(Q=>{fi(Q,["name","value"]);const ae=Q.getAttribute("name"),Oe=Q.getAttribute("value");typeof Mr[ae]=="boolean"?D[ae]=Oe!=="false":typeof Mr[ae]=="object"?D[ae]=JSON.parse(Oe):D[ae]=Oe}),D},pi=E=>{const D={};return Array.from(E.querySelectorAll("swal-function-param")).forEach(Q=>{const ae=Q.getAttribute("name"),Oe=Q.getAttribute("value");D[ae]=new Function(`return ${Oe}`)()}),D},pr=E=>{const D={};return Array.from(E.querySelectorAll("swal-button")).forEach(Q=>{fi(Q,["type","color","aria-label"]);const ae=Q.getAttribute("type");D[`${ae}ButtonText`]=Q.innerHTML,D[`show${v(ae)}Button`]=!0,Q.hasAttribute("color")&&(D[`${ae}ButtonColor`]=Q.getAttribute("color")),Q.hasAttribute("aria-label")&&(D[`${ae}ButtonAriaLabel`]=Q.getAttribute("aria-label"))}),D},ot=E=>{const D={},z=E.querySelector("swal-image");return z&&(fi(z,["src","width","height","alt"]),z.hasAttribute("src")&&(D.imageUrl=z.getAttribute("src")),z.hasAttribute("width")&&(D.imageWidth=z.getAttribute("width")),z.hasAttribute("height")&&(D.imageHeight=z.getAttribute("height")),z.hasAttribute("alt")&&(D.imageAlt=z.getAttribute("alt"))),D},ao=E=>{const D={},z=E.querySelector("swal-icon");return z&&(fi(z,["type","color"]),z.hasAttribute("type")&&(D.icon=z.getAttribute("type")),z.hasAttribute("color")&&(D.iconColor=z.getAttribute("color")),D.iconHtml=z.innerHTML),D},jn=E=>{const D={},z=E.querySelector("swal-input");z&&(fi(z,["type","label","placeholder","value"]),D.input=z.getAttribute("type")||"text",z.hasAttribute("label")&&(D.inputLabel=z.getAttribute("label")),z.hasAttribute("placeholder")&&(D.inputPlaceholder=z.getAttribute("placeholder")),z.hasAttribute("value")&&(D.inputValue=z.getAttribute("value")));const Q=Array.from(E.querySelectorAll("swal-input-option"));return Q.length&&(D.inputOptions={},Q.forEach(ae=>{fi(ae,["value"]);const Oe=ae.getAttribute("value"),Ot=ae.innerHTML;D.inputOptions[Oe]=Ot})),D},Wn=(E,D)=>{const z={};for(const Q in D){const ae=D[Q],Oe=E.querySelector(ae);Oe&&(fi(Oe,[]),z[ae.replace(/^swal-/,"")]=Oe.innerHTML.trim())}return z},fr=E=>{const D=Ko.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(E.children).forEach(z=>{const Q=z.tagName.toLowerCase();D.includes(Q)||C(`Unrecognized element <${Q}>`)})},fi=(E,D)=>{Array.from(E.attributes).forEach(z=>{D.indexOf(z.name)===-1&&C([`Unrecognized attribute "${z.name}" on <${E.tagName.toLowerCase()}>.`,`${D.length?`Allowed attributes are: ${D.join(", ")}`:"To set the value, use HTML within the element."}`])})},Up=10,gi=E=>{const D=L(),z=J();typeof E.willOpen=="function"&&E.willOpen(z);const ae=window.getComputedStyle(document.body).overflowY;Rb(D,z,E),setTimeout(()=>{Hp(D,z)},Up),tt()&&(ns(D,E.scrollbarPadding,ae),Ka()),!Xe()&&!Me.previousActiveElement&&(Me.previousActiveElement=document.activeElement),typeof E.didOpen=="function"&&setTimeout(()=>E.didOpen(z)),st(D,h["no-transition"])},bl=E=>{const D=J();if(E.target!==D)return;const z=L();D.removeEventListener(Hi,bl),z.style.overflowY="auto"},Hp=(E,D)=>{Hi&&Zt(D)?(E.style.overflowY="hidden",D.addEventListener(Hi,bl)):E.style.overflowY="auto"},ns=(E,D,z)=>{Bu(),D&&z!=="hidden"&&Ec(),setTimeout(()=>{E.scrollTop=0})},Rb=(E,D,z)=>{Ke(E,z.showClass.backdrop),D.style.setProperty("opacity","0","important"),vt(D,"grid"),setTimeout(()=>{Ke(D,z.showClass.popup),D.style.removeProperty("opacity")},Up),Ke([document.documentElement,document.body],h.shown),z.heightAuto&&z.backdrop&&!z.toast&&Ke([document.documentElement,document.body],h["height-auto"])};var Uu={email:(E,D)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(E)?Promise.resolve():Promise.resolve(D||"Invalid email address"),url:(E,D)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(E)?Promise.resolve():Promise.resolve(D||"Invalid URL")};function Hu(E){E.inputValidator||Object.keys(Uu).forEach(D=>{E.input===D&&(E.inputValidator=Uu[D])})}function rt(E){(!E.target||typeof E.target=="string"&&!document.querySelector(E.target)||typeof E.target!="string"&&!E.target.appendChild)&&(C('Target parameter is not valid, defaulting to "body"'),E.target="body")}function Wp(E){Hu(E),E.showLoaderOnConfirm&&!E.preConfirm&&C(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),rt(E),typeof E.title=="string"&&(E.title=E.title.split(`
`).join("<br />")),ja(E)}let mt;class Nr{constructor(){if(typeof window>"u")return;mt=this;for(var D=arguments.length,z=new Array(D),Q=0;Q<D;Q++)z[Q]=arguments[Q];const ae=Object.freeze(this.constructor.argsToParams(z));Object.defineProperties(this,{params:{value:ae,writable:!1,enumerable:!0,configurable:!0}});const Oe=mt._main(mt.params);i.promise.set(this,Oe)}_main(D){let z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};ll(Object.assign({},z,D)),Me.currentInstance&&(Me.currentInstance._destroy(),tt()&&Ho()),Me.currentInstance=mt;const Q=Gp(D,z);Wp(Q),Object.freeze(Q),Me.timeout&&(Me.timeout.stop(),delete Me.timeout),clearTimeout(Me.restoreFocusTimeout);const ae=ln(mt);return Es(mt,Q),i.innerParams.set(mt,Q),qp(mt,ae,Q)}then(D){return i.promise.get(this).then(D)}finally(D){return i.promise.get(this).finally(D)}}const qp=(E,D,z)=>new Promise((Q,ae)=>{const Oe=Ot=>{E.close({isDismissed:!0,dismiss:Ot})};Ki.swalPromiseResolve.set(E,Q),Ki.swalPromiseReject.set(E,ae),D.confirmButton.onclick=()=>{Ls(E)},D.denyButton.onclick=()=>{zs(E)},D.cancelButton.onclick=()=>{At(E,Oe)},D.closeButton.onclick=()=>{Oe(Ir.close)},ju(E,D,Oe),Wa(E,Me,z,Oe),Os(E,z),gi(z),Uc(Me,z,Oe),Kp(D,z),setTimeout(()=>{D.container.scrollTop=0})}),Gp=(E,D)=>{const z=To(E),Q=Object.assign({},Mr,D,z,E);return Q.showClass=Object.assign({},Mr.showClass,Q.showClass),Q.hideClass=Object.assign({},Mr.hideClass,Q.hideClass),Q},ln=E=>{const D={popup:J(),container:L(),actions:se(),confirmButton:fe(),denyButton:ve(),cancelButton:he(),loader:oe(),closeButton:Re(),validationMessage:ge(),progressSteps:ke()};return i.domCache.set(E,D),D},Uc=(E,D,z)=>{const Q=_e();nt(Q),D.timer&&(E.timeout=new Fs(()=>{z("timer"),delete E.timeout},D.timer),D.timerProgressBar&&(vt(Q),et(Q,D,"timerProgressBar"),setTimeout(()=>{E.timeout&&E.timeout.running&&ct(D.timer)})))},Kp=(E,D)=>{if(!D.toast){if(!I(D.allowEnterKey)){Yt();return}Yp(E,D)||Uo(-1,1)}},Yp=(E,D)=>D.focusDeny&&Et(E.denyButton)?(E.denyButton.focus(),!0):D.focusCancel&&Et(E.cancelButton)?(E.cancelButton.focus(),!0):D.focusConfirm&&Et(E.confirmButton)?(E.confirmButton.focus(),!0):!1,Yt=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const E=new Date,D=localStorage.getItem("swal-initiation");D?(E.getTime()-Date.parse(D))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const z=document.createElement("audio");z.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",z.loop=!0,document.body.appendChild(z),setTimeout(()=>{z.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${E}`)}Object.assign(Nr.prototype,cl),Object.assign(Nr,Kt),Object.keys(cl).forEach(E=>{Nr[E]=function(){if(mt)return mt[E](...arguments)}}),Nr.DismissReason=Ir,Nr.version="11.7.3";const Hc=Nr;return Hc.default=Hc,Hc}),typeof en<"u"&&en.Sweetalert2&&(en.swal=en.sweetAlert=en.Swal=en.SweetAlert=en.Sweetalert2),typeof document<"u"&&function(i,l){var d=i.createElement("style");if(i.getElementsByTagName("head")[0].appendChild(d),d.styleSheet)d.styleSheet.disabled||(d.styleSheet.cssText=l);else try{d.innerHTML=l}catch{d.innerText=l}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')})($H);const Tt=Sv,VH={black:"#000",white:"#fff"},vp=VH,UH={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},jl=UH,HH={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},hd=HH,WH={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},pd=WH,qH={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},fd=qH,GH={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},gd=GH,KH={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},yh=KH,YH={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},QH=YH;function Vl(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function AN(t){if(!Vl(t))return t;const o={};return Object.keys(t).forEach(i=>{o[i]=AN(t[i])}),o}function _r(t,o,i={clone:!0}){const l=i.clone?G({},t):t;return Vl(t)&&Vl(o)&&Object.keys(o).forEach(d=>{d!=="__proto__"&&(Vl(o[d])&&d in t&&Vl(t[d])?l[d]=_r(t[d],o[d],i):i.clone?l[d]=Vl(o[d])?AN(o[d]):o[d]:l[d]=o[d])}),l}function Da(t){let o="https://mui.com/production-error/?code="+t;for(let i=1;i<arguments.length;i+=1)o+="&args[]="+encodeURIComponent(arguments[i]);return"Minified MUI error #"+t+"; visit "+o+" for the full message."}function Be(t){if(typeof t!="string")throw new Error(Da(7));return t.charAt(0).toUpperCase()+t.slice(1)}function Dv(...t){return t.reduce((o,i)=>i==null?o:function(...d){o.apply(this,d),i.apply(this,d)},()=>{})}function sb(t,o=166){let i;function l(...d){const h=()=>{t.apply(this,d)};clearTimeout(i),i=setTimeout(h,o)}return l.clear=()=>{clearTimeout(i)},l}function ZH(t,o){return()=>null}function Hh(t,o){return R.isValidElement(t)&&o.indexOf(t.type.muiName)!==-1}function Lo(t){return t&&t.ownerDocument||document}function ji(t){return Lo(t).defaultView||window}function JH(t,o){return()=>null}function sm(t,o){typeof t=="function"?t(o):t&&(t.current=o)}const XH=typeof window<"u"?R.useLayoutEffect:R.useEffect,Fi=XH;let jT=0;function eW(t){const[o,i]=R.useState(t),l=t||o;return R.useEffect(()=>{o==null&&(jT+=1,i(`mui-${jT}`))},[o]),l}const FT=Wd["useId"];function hC(t){if(FT!==void 0){const o=FT();return t??o}return eW(t)}function tW(t,o,i,l,d){return null}function Tv({controlled:t,default:o,name:i,state:l="value"}){const{current:d}=R.useRef(t!==void 0),[h,f]=R.useState(o),b=d?t:h,m=R.useCallback(v=>{d||f(v)},[]);return[b,m]}function Gl(t){const o=R.useRef(t);return Fi(()=>{o.current=t}),R.useCallback((...i)=>(0,o.current)(...i),[])}function Ln(...t){return R.useMemo(()=>t.every(o=>o==null)?null:o=>{t.forEach(i=>{sm(i,o)})},t)}let ab=!0,Iv=!1,$T;const nW={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function oW(t){const{type:o,tagName:i}=t;return!!(i==="INPUT"&&nW[o]&&!t.readOnly||i==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function rW(t){t.metaKey||t.altKey||t.ctrlKey||(ab=!0)}function e0(){ab=!1}function iW(){this.visibilityState==="hidden"&&Iv&&(ab=!0)}function sW(t){t.addEventListener("keydown",rW,!0),t.addEventListener("mousedown",e0,!0),t.addEventListener("pointerdown",e0,!0),t.addEventListener("touchstart",e0,!0),t.addEventListener("visibilitychange",iW,!0)}function aW(t){const{target:o}=t;try{return o.matches(":focus-visible")}catch{}return ab||oW(o)}function pC(){const t=R.useCallback(d=>{d!=null&&sW(d.ownerDocument)},[]),o=R.useRef(!1);function i(){return o.current?(Iv=!0,window.clearTimeout($T),$T=window.setTimeout(()=>{Iv=!1},100),o.current=!1,!0):!1}function l(d){return aW(d)?(o.current=!0,!0):!1}return{isFocusVisibleRef:o,onFocus:l,onBlur:i,ref:t}}function _N(t){const o=t.documentElement.clientWidth;return Math.abs(window.innerWidth-o)}function fC(t,o){const i=G({},o);return Object.keys(t).forEach(l=>{if(l.toString().match(/^(components|slots)$/))i[l]=G({},t[l],i[l]);else if(l.toString().match(/^(componentsProps|slotProps)$/)){const d=t[l]||{},h=o[l];i[l]={},!h||!Object.keys(h)?i[l]=d:!d||!Object.keys(d)?i[l]=h:(i[l]=G({},h),Object.keys(d).forEach(f=>{i[l][f]=fC(d[f],h[f])}))}else i[l]===void 0&&(i[l]=t[l])}),i}function Ge(t,o,i=void 0){const l={};return Object.keys(t).forEach(d=>{l[d]=t[d].reduce((h,f)=>{if(f){const b=o(f);b!==""&&h.push(b),i&&i[f]&&h.push(i[f])}return h},[]).join(" ")}),l}const VT=t=>t,lW=()=>{let t=VT;return{configure(o){t=o},generate(o){return t(o)},reset(){t=VT}}},cW=lW(),gC=cW,dW={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function Ve(t,o,i="Mui"){const l=dW[o];return l?`${i}-${l}`:`${gC.generate(t)}-${o}`}function Ue(t,o,i="Mui"){const l={};return o.forEach(d=>{l[d]=Ve(t,d,i)}),l}function xN(t){var o=Object.create(null);return function(i){return o[i]===void 0&&(o[i]=t(i)),o[i]}}var uW=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,hW=xN(function(t){return uW.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function pW(t){if(t.sheet)return t.sheet;for(var o=0;o<document.styleSheets.length;o++)if(document.styleSheets[o].ownerNode===t)return document.styleSheets[o]}function fW(t){var o=document.createElement("style");return o.setAttribute("data-emotion",t.key),t.nonce!==void 0&&o.setAttribute("nonce",t.nonce),o.appendChild(document.createTextNode("")),o.setAttribute("data-s",""),o}var gW=function(){function t(i){var l=this;this._insertTag=function(d){var h;l.tags.length===0?l.insertionPoint?h=l.insertionPoint.nextSibling:l.prepend?h=l.container.firstChild:h=l.before:h=l.tags[l.tags.length-1].nextSibling,l.container.insertBefore(d,h),l.tags.push(d)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var o=t.prototype;return o.hydrate=function(l){l.forEach(this._insertTag)},o.insert=function(l){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(fW(this));var d=this.tags[this.tags.length-1];if(this.isSpeedy){var h=pW(d);try{h.insertRule(l,h.cssRules.length)}catch{}}else d.appendChild(document.createTextNode(l));this.ctr++},o.flush=function(){this.tags.forEach(function(l){return l.parentNode&&l.parentNode.removeChild(l)}),this.tags=[],this.ctr=0},t}(),po="-ms-",am="-moz-",_t="-webkit-",EN="comm",mC="rule",bC="decl",mW="@import",SN="@keyframes",bW=Math.abs,lb=String.fromCharCode,kW=Object.assign;function wW(t,o){return oo(t,0)^45?(((o<<2^oo(t,0))<<2^oo(t,1))<<2^oo(t,2))<<2^oo(t,3):0}function DN(t){return t.trim()}function vW(t,o){return(t=o.exec(t))?t[0]:t}function St(t,o,i){return t.replace(o,i)}function Mv(t,o){return t.indexOf(o)}function oo(t,o){return t.charCodeAt(o)|0}function yp(t,o,i){return t.slice(o,i)}function Ii(t){return t.length}function kC(t){return t.length}function Jf(t,o){return o.push(t),t}function yW(t,o){return t.map(o).join("")}var cb=1,tu=1,TN=0,jo=0,Bn=0,fu="";function db(t,o,i,l,d,h,f){return{value:t,root:o,parent:i,type:l,props:d,children:h,line:cb,column:tu,length:f,return:""}}function Ch(t,o){return kW(db("",null,null,"",null,null,0),t,{length:-t.length},o)}function CW(){return Bn}function AW(){return Bn=jo>0?oo(fu,--jo):0,tu--,Bn===10&&(tu=1,cb--),Bn}function nr(){return Bn=jo<TN?oo(fu,jo++):0,tu++,Bn===10&&(tu=1,cb++),Bn}function zi(){return oo(fu,jo)}function Cg(){return jo}function Op(t,o){return yp(fu,t,o)}function Cp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function IN(t){return cb=tu=1,TN=Ii(fu=t),jo=0,[]}function MN(t){return fu="",t}function Ag(t){return DN(Op(jo-1,Pv(t===91?t+2:t===40?t+1:t)))}function _W(t){for(;(Bn=zi())&&Bn<33;)nr();return Cp(t)>2||Cp(Bn)>3?"":" "}function xW(t,o){for(;--o&&nr()&&!(Bn<48||Bn>102||Bn>57&&Bn<65||Bn>70&&Bn<97););return Op(t,Cg()+(o<6&&zi()==32&&nr()==32))}function Pv(t){for(;nr();)switch(Bn){case t:return jo;case 34:case 39:t!==34&&t!==39&&Pv(Bn);break;case 40:t===41&&Pv(t);break;case 92:nr();break}return jo}function EW(t,o){for(;nr()&&t+Bn!==47+10;)if(t+Bn===42+42&&zi()===47)break;return"/*"+Op(o,jo-1)+"*"+lb(t===47?t:nr())}function SW(t){for(;!Cp(zi());)nr();return Op(t,jo)}function DW(t){return MN(_g("",null,null,null,[""],t=IN(t),0,[0],t))}function _g(t,o,i,l,d,h,f,b,m){for(var v=0,C=0,_=f,A=0,S=0,M=0,I=1,U=1,N=1,O=0,L="",q=d,K=h,J=l,H=L;U;)switch(M=O,O=nr()){case 40:if(M!=108&&oo(H,_-1)==58){Mv(H+=St(Ag(O),"&","&\f"),"&\f")!=-1&&(N=-1);break}case 34:case 39:case 91:H+=Ag(O);break;case 9:case 10:case 13:case 32:H+=_W(M);break;case 92:H+=xW(Cg()-1,7);continue;case 47:switch(zi()){case 42:case 47:Jf(TW(EW(nr(),Cg()),o,i),m);break;default:H+="/"}break;case 123*I:b[v++]=Ii(H)*N;case 125*I:case 59:case 0:switch(O){case 0:case 125:U=0;case 59+C:S>0&&Ii(H)-_&&Jf(S>32?HT(H+";",l,i,_-1):HT(St(H," ","")+";",l,i,_-2),m);break;case 59:H+=";";default:if(Jf(J=UT(H,o,i,v,C,d,b,L,q=[],K=[],_),h),O===123)if(C===0)_g(H,o,J,J,q,h,_,b,K);else switch(A===99&&oo(H,3)===110?100:A){case 100:case 109:case 115:_g(t,J,J,l&&Jf(UT(t,J,J,0,0,d,b,L,d,q=[],_),K),d,K,_,b,l?q:K);break;default:_g(H,J,J,J,[""],K,0,b,K)}}v=C=S=0,I=N=1,L=H="",_=f;break;case 58:_=1+Ii(H),S=M;default:if(I<1){if(O==123)--I;else if(O==125&&I++==0&&AW()==125)continue}switch(H+=lb(O),O*I){case 38:N=C>0?1:(H+="\f",-1);break;case 44:b[v++]=(Ii(H)-1)*N,N=1;break;case 64:zi()===45&&(H+=Ag(nr())),A=zi(),C=_=Ii(L=H+=SW(Cg())),O++;break;case 45:M===45&&Ii(H)==2&&(I=0)}}return h}function UT(t,o,i,l,d,h,f,b,m,v,C){for(var _=d-1,A=d===0?h:[""],S=kC(A),M=0,I=0,U=0;M<l;++M)for(var N=0,O=yp(t,_+1,_=bW(I=f[M])),L=t;N<S;++N)(L=DN(I>0?A[N]+" "+O:St(O,/&\f/g,A[N])))&&(m[U++]=L);return db(t,o,i,d===0?mC:b,m,v,C)}function TW(t,o,i){return db(t,o,i,EN,lb(CW()),yp(t,2,-2),0)}function HT(t,o,i,l){return db(t,o,i,bC,yp(t,0,l),yp(t,l+1,-1),l)}function $d(t,o){for(var i="",l=kC(t),d=0;d<l;d++)i+=o(t[d],d,t,o)||"";return i}function IW(t,o,i,l){switch(t.type){case mW:case bC:return t.return=t.return||t.value;case EN:return"";case SN:return t.return=t.value+"{"+$d(t.children,l)+"}";case mC:t.value=t.props.join(",")}return Ii(i=$d(t.children,l))?t.return=t.value+"{"+i+"}":""}function MW(t){var o=kC(t);return function(i,l,d,h){for(var f="",b=0;b<o;b++)f+=t[b](i,l,d,h)||"";return f}}function PW(t){return function(o){o.root||(o=o.return)&&t(o)}}var WT=function(o){var i=new WeakMap;return function(l){if(i.has(l))return i.get(l);var d=o(l);return i.set(l,d),d}},NW=function(o,i,l){for(var d=0,h=0;d=h,h=zi(),d===38&&h===12&&(i[l]=1),!Cp(h);)nr();return Op(o,jo)},BW=function(o,i){var l=-1,d=44;do switch(Cp(d)){case 0:d===38&&zi()===12&&(i[l]=1),o[l]+=NW(jo-1,i,l);break;case 2:o[l]+=Ag(d);break;case 4:if(d===44){o[++l]=zi()===58?"&\f":"",i[l]=o[l].length;break}default:o[l]+=lb(d)}while(d=nr());return o},RW=function(o,i){return MN(BW(IN(o),i))},qT=new WeakMap,OW=function(o){if(!(o.type!=="rule"||!o.parent||o.length<1)){for(var i=o.value,l=o.parent,d=o.column===l.column&&o.line===l.line;l.type!=="rule";)if(l=l.parent,!l)return;if(!(o.props.length===1&&i.charCodeAt(0)!==58&&!qT.get(l))&&!d){qT.set(o,!0);for(var h=[],f=RW(i,h),b=l.props,m=0,v=0;m<f.length;m++)for(var C=0;C<b.length;C++,v++)o.props[v]=h[m]?f[m].replace(/&\f/g,b[C]):b[C]+" "+f[m]}}},LW=function(o){if(o.type==="decl"){var i=o.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(o.return="",o.value="")}};function PN(t,o){switch(wW(t,o)){case 5103:return _t+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return _t+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return _t+t+am+t+po+t+t;case 6828:case 4268:return _t+t+po+t+t;case 6165:return _t+t+po+"flex-"+t+t;case 5187:return _t+t+St(t,/(\w+).+(:[^]+)/,_t+"box-$1$2"+po+"flex-$1$2")+t;case 5443:return _t+t+po+"flex-item-"+St(t,/flex-|-self/,"")+t;case 4675:return _t+t+po+"flex-line-pack"+St(t,/align-content|flex-|-self/,"")+t;case 5548:return _t+t+po+St(t,"shrink","negative")+t;case 5292:return _t+t+po+St(t,"basis","preferred-size")+t;case 6060:return _t+"box-"+St(t,"-grow","")+_t+t+po+St(t,"grow","positive")+t;case 4554:return _t+St(t,/([^-])(transform)/g,"$1"+_t+"$2")+t;case 6187:return St(St(St(t,/(zoom-|grab)/,_t+"$1"),/(image-set)/,_t+"$1"),t,"")+t;case 5495:case 3959:return St(t,/(image-set\([^]*)/,_t+"$1$`$1");case 4968:return St(St(t,/(.+:)(flex-)?(.*)/,_t+"box-pack:$3"+po+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+_t+t+t;case 4095:case 3583:case 4068:case 2532:return St(t,/(.+)-inline(.+)/,_t+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ii(t)-1-o>6)switch(oo(t,o+1)){case 109:if(oo(t,o+4)!==45)break;case 102:return St(t,/(.+:)(.+)-([^]+)/,"$1"+_t+"$2-$3$1"+am+(oo(t,o+3)==108?"$3":"$2-$3"))+t;case 115:return~Mv(t,"stretch")?PN(St(t,"stretch","fill-available"),o)+t:t}break;case 4949:if(oo(t,o+1)!==115)break;case 6444:switch(oo(t,Ii(t)-3-(~Mv(t,"!important")&&10))){case 107:return St(t,":",":"+_t)+t;case 101:return St(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+_t+(oo(t,14)===45?"inline-":"")+"box$3$1"+_t+"$2$3$1"+po+"$2box$3")+t}break;case 5936:switch(oo(t,o+11)){case 114:return _t+t+po+St(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return _t+t+po+St(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return _t+t+po+St(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return _t+t+po+t+t}return t}var zW=function(o,i,l,d){if(o.length>-1&&!o.return)switch(o.type){case bC:o.return=PN(o.value,o.length);break;case SN:return $d([Ch(o,{value:St(o.value,"@","@"+_t)})],d);case mC:if(o.length)return yW(o.props,function(h){switch(vW(h,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return $d([Ch(o,{props:[St(h,/:(read-\w+)/,":"+am+"$1")]})],d);case"::placeholder":return $d([Ch(o,{props:[St(h,/:(plac\w+)/,":"+_t+"input-$1")]}),Ch(o,{props:[St(h,/:(plac\w+)/,":"+am+"$1")]}),Ch(o,{props:[St(h,/:(plac\w+)/,po+"input-$1")]})],d)}return""})}},jW=[zW],FW=function(o){var i=o.key;if(i==="css"){var l=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(l,function(I){var U=I.getAttribute("data-emotion");U.indexOf(" ")!==-1&&(document.head.appendChild(I),I.setAttribute("data-s",""))})}var d=o.stylisPlugins||jW,h={},f,b=[];f=o.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(I){for(var U=I.getAttribute("data-emotion").split(" "),N=1;N<U.length;N++)h[U[N]]=!0;b.push(I)});var m,v=[OW,LW];{var C,_=[IW,PW(function(I){C.insert(I)})],A=MW(v.concat(d,_)),S=function(U){return $d(DW(U),A)};m=function(U,N,O,L){C=O,S(U?U+"{"+N.styles+"}":N.styles),L&&(M.inserted[N.name]=!0)}}var M={key:i,sheet:new gW({key:i,container:f,nonce:o.nonce,speedy:o.speedy,prepend:o.prepend,insertionPoint:o.insertionPoint}),nonce:o.nonce,inserted:h,registered:{},insert:m};return M.sheet.hydrate(b),M},$W=!0;function VW(t,o,i){var l="";return i.split(" ").forEach(function(d){t[d]!==void 0?o.push(t[d]+";"):l+=d+" "}),l}var NN=function(o,i,l){var d=o.key+"-"+i.name;(l===!1||$W===!1)&&o.registered[d]===void 0&&(o.registered[d]=i.styles)},BN=function(o,i,l){NN(o,i,l);var d=o.key+"-"+i.name;if(o.inserted[i.name]===void 0){var h=i;do o.insert(i===h?"."+d:"",h,o.sheet,!0),h=h.next;while(h!==void 0)}};function UW(t){for(var o=0,i,l=0,d=t.length;d>=4;++l,d-=4)i=t.charCodeAt(l)&255|(t.charCodeAt(++l)&255)<<8|(t.charCodeAt(++l)&255)<<16|(t.charCodeAt(++l)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,o=(i&65535)*1540483477+((i>>>16)*59797<<16)^(o&65535)*1540483477+((o>>>16)*59797<<16);switch(d){case 3:o^=(t.charCodeAt(l+2)&255)<<16;case 2:o^=(t.charCodeAt(l+1)&255)<<8;case 1:o^=t.charCodeAt(l)&255,o=(o&65535)*1540483477+((o>>>16)*59797<<16)}return o^=o>>>13,o=(o&65535)*1540483477+((o>>>16)*59797<<16),((o^o>>>15)>>>0).toString(36)}var HW={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},WW=/[A-Z]|^ms/g,qW=/_EMO_([^_]+?)_([^]*?)_EMO_/g,RN=function(o){return o.charCodeAt(1)===45},GT=function(o){return o!=null&&typeof o!="boolean"},t0=xN(function(t){return RN(t)?t:t.replace(WW,"-$&").toLowerCase()}),KT=function(o,i){switch(o){case"animation":case"animationName":if(typeof i=="string")return i.replace(qW,function(l,d,h){return Mi={name:d,styles:h,next:Mi},d})}return HW[o]!==1&&!RN(o)&&typeof i=="number"&&i!==0?i+"px":i};function Ap(t,o,i){if(i==null)return"";if(i.__emotion_styles!==void 0)return i;switch(typeof i){case"boolean":return"";case"object":{if(i.anim===1)return Mi={name:i.name,styles:i.styles,next:Mi},i.name;if(i.styles!==void 0){var l=i.next;if(l!==void 0)for(;l!==void 0;)Mi={name:l.name,styles:l.styles,next:Mi},l=l.next;var d=i.styles+";";return d}return GW(t,o,i)}case"function":{if(t!==void 0){var h=Mi,f=i(t);return Mi=h,Ap(t,o,f)}break}}if(o==null)return i;var b=o[i];return b!==void 0?b:i}function GW(t,o,i){var l="";if(Array.isArray(i))for(var d=0;d<i.length;d++)l+=Ap(t,o,i[d])+";";else for(var h in i){var f=i[h];if(typeof f!="object")o!=null&&o[f]!==void 0?l+=h+"{"+o[f]+"}":GT(f)&&(l+=t0(h)+":"+KT(h,f)+";");else if(Array.isArray(f)&&typeof f[0]=="string"&&(o==null||o[f[0]]===void 0))for(var b=0;b<f.length;b++)GT(f[b])&&(l+=t0(h)+":"+KT(h,f[b])+";");else{var m=Ap(t,o,f);switch(h){case"animation":case"animationName":{l+=t0(h)+":"+m+";";break}default:l+=h+"{"+m+"}"}}}return l}var YT=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Mi,wC=function(o,i,l){if(o.length===1&&typeof o[0]=="object"&&o[0]!==null&&o[0].styles!==void 0)return o[0];var d=!0,h="";Mi=void 0;var f=o[0];f==null||f.raw===void 0?(d=!1,h+=Ap(l,i,f)):h+=f[0];for(var b=1;b<o.length;b++)h+=Ap(l,i,o[b]),d&&(h+=f[b]);YT.lastIndex=0;for(var m="",v;(v=YT.exec(h))!==null;)m+="-"+v[1];var C=UW(h)+m;return{name:C,styles:h,next:Mi}},KW=function(o){return o()},ON=Wd["useInsertionEffect"]?Wd["useInsertionEffect"]:!1,YW=ON||KW,QT=ON||R.useLayoutEffect,LN=R.createContext(typeof HTMLElement<"u"?FW({key:"css"}):null);LN.Provider;var zN=function(o){return R.forwardRef(function(i,l){var d=R.useContext(LN);return o(i,d,l)})},lm=R.createContext({}),QW=function(o,i){if(typeof i=="function"){var l=i(o);return l}return G({},o,i)},ZW=WT(function(t){return WT(function(o){return QW(t,o)})}),JW=function(o){var i=R.useContext(lm);return o.theme!==i&&(i=ZW(i)(o.theme)),R.createElement(lm.Provider,{value:i},o.children)},XW=zN(function(t,o){var i=t.styles,l=wC([i],void 0,R.useContext(lm)),d=R.useRef();return QT(function(){var h=o.key+"-global",f=new o.sheet.constructor({key:h,nonce:o.sheet.nonce,container:o.sheet.container,speedy:o.sheet.isSpeedy}),b=!1,m=document.querySelector('style[data-emotion="'+h+" "+l.name+'"]');return o.sheet.tags.length&&(f.before=o.sheet.tags[0]),m!==null&&(b=!0,m.setAttribute("data-emotion",h),f.hydrate([m])),d.current=[f,b],function(){f.flush()}},[o]),QT(function(){var h=d.current,f=h[0],b=h[1];if(b){h[1]=!1;return}if(l.next!==void 0&&BN(o,l.next,!0),f.tags.length){var m=f.tags[f.tags.length-1].nextElementSibling;f.before=m,f.flush()}o.insert("",l,f,!1)},[o,l.name]),null});function vC(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return wC(o)}var Lp=function(){var o=vC.apply(void 0,arguments),i="animation-"+o.name;return{name:i,styles:"@keyframes "+i+"{"+o.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},eq=hW,tq=function(o){return o!=="theme"},ZT=function(o){return typeof o=="string"&&o.charCodeAt(0)>96?eq:tq},JT=function(o,i,l){var d;if(i){var h=i.shouldForwardProp;d=o.__emotion_forwardProp&&h?function(f){return o.__emotion_forwardProp(f)&&h(f)}:h}return typeof d!="function"&&l&&(d=o.__emotion_forwardProp),d},nq=function(o){var i=o.cache,l=o.serialized,d=o.isStringTag;return NN(i,l,d),YW(function(){return BN(i,l,d)}),null},oq=function t(o,i){var l=o.__emotion_real===o,d=l&&o.__emotion_base||o,h,f;i!==void 0&&(h=i.label,f=i.target);var b=JT(o,i,l),m=b||ZT(d),v=!m("as");return function(){var C=arguments,_=l&&o.__emotion_styles!==void 0?o.__emotion_styles.slice(0):[];if(h!==void 0&&_.push("label:"+h+";"),C[0]==null||C[0].raw===void 0)_.push.apply(_,C);else{_.push(C[0][0]);for(var A=C.length,S=1;S<A;S++)_.push(C[S],C[0][S])}var M=zN(function(I,U,N){var O=v&&I.as||d,L="",q=[],K=I;if(I.theme==null){K={};for(var J in I)K[J]=I[J];K.theme=R.useContext(lm)}typeof I.className=="string"?L=VW(U.registered,q,I.className):I.className!=null&&(L=I.className+" ");var H=wC(_.concat(q),U.registered,K);L+=U.key+"-"+H.name,f!==void 0&&(L+=" "+f);var F=v&&b===void 0?ZT(O):m,X={};for(var ee in I)v&&ee==="as"||F(ee)&&(X[ee]=I[ee]);return X.className=L,X.ref=N,R.createElement(R.Fragment,null,R.createElement(nq,{cache:U,serialized:H,isStringTag:typeof O=="string"}),R.createElement(O,X))});return M.displayName=h!==void 0?h:"Styled("+(typeof d=="string"?d:d.displayName||d.name||"Component")+")",M.defaultProps=o.defaultProps,M.__emotion_real=M,M.__emotion_base=d,M.__emotion_styles=_,M.__emotion_forwardProp=b,Object.defineProperty(M,"toString",{value:function(){return"."+f}}),M.withComponent=function(I,U){return t(I,G({},i,U,{shouldForwardProp:JT(M,U,!0)})).apply(void 0,_)},M}};const rq=oq;var iq=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Nv=rq.bind();iq.forEach(function(t){Nv[t]=Nv(t)});const sq=Nv;function aq(t){return t==null||Object.keys(t).length===0}function lq(t){const{styles:o,defaultTheme:i={}}=t;return T(XW,{styles:typeof o=="function"?d=>o(aq(d)?i:d):o})}/**
 * @mui/styled-engine v5.11.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function jN(t,o){return sq(t,o)}const cq=(t,o)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=o(t.__emotion_styles))};function Wh(t,o){return o?_r(t,o,{clone:!1}):t}const yC={xs:0,sm:600,md:900,lg:1200,xl:1536},XT={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${yC[t]}px)`};function ir(t,o,i){const l=t.theme||{};if(Array.isArray(o)){const h=l.breakpoints||XT;return o.reduce((f,b,m)=>(f[h.up(h.keys[m])]=i(o[m]),f),{})}if(typeof o=="object"){const h=l.breakpoints||XT;return Object.keys(o).reduce((f,b)=>{if(Object.keys(h.values||yC).indexOf(b)!==-1){const m=h.up(b);f[m]=i(o[b],b)}else{const m=b;f[m]=o[m]}return f},{})}return i(o)}function dq(t={}){var o;return((o=t.keys)==null?void 0:o.reduce((l,d)=>{const h=t.up(d);return l[h]={},l},{}))||{}}function uq(t,o){return t.reduce((i,l)=>{const d=i[l];return(!d||Object.keys(d).length===0)&&delete i[l],i},o)}function hq(t,o){if(typeof t!="object")return{};const i={},l=Object.keys(o);return Array.isArray(t)?l.forEach((d,h)=>{h<t.length&&(i[d]=!0)}):l.forEach(d=>{t[d]!=null&&(i[d]=!0)}),i}function ub({values:t,breakpoints:o,base:i}){const l=i||hq(t,o),d=Object.keys(l);if(d.length===0)return t;let h;return d.reduce((f,b,m)=>(Array.isArray(t)?(f[b]=t[m]!=null?t[m]:t[h],h=m):typeof t=="object"?(f[b]=t[b]!=null?t[b]:t[h],h=b):f[b]=t,f),{})}function nu(t,o,i=!0){if(!o||typeof o!="string")return null;if(t&&t.vars&&i){const l=`vars.${o}`.split(".").reduce((d,h)=>d&&d[h]?d[h]:null,t);if(l!=null)return l}return o.split(".").reduce((l,d)=>l&&l[d]!=null?l[d]:null,t)}function cm(t,o,i,l=i){let d;return typeof t=="function"?d=t(i):Array.isArray(t)?d=t[i]||l:d=nu(t,i)||l,o&&(d=o(d,l,t)),d}function Pt(t){const{prop:o,cssProperty:i=t.prop,themeKey:l,transform:d}=t,h=f=>{if(f[o]==null)return null;const b=f[o],m=f.theme,v=nu(m,l)||{};return ir(f,b,_=>{let A=cm(v,d,_);return _===A&&typeof _=="string"&&(A=cm(v,d,`${o}${_==="default"?"":Be(_)}`,_)),i===!1?A:{[i]:A}})};return h.propTypes={},h.filterProps=[o],h}function hb(...t){const o=t.reduce((l,d)=>(d.filterProps.forEach(h=>{l[h]=d}),l),{}),i=l=>Object.keys(l).reduce((d,h)=>o[h]?Wh(d,o[h](l)):d,{});return i.propTypes={},i.filterProps=t.reduce((l,d)=>l.concat(d.filterProps),[]),i}function pq(t){const o={};return i=>(o[i]===void 0&&(o[i]=t(i)),o[i])}const fq={m:"margin",p:"padding"},gq={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},eI={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},mq=pq(t=>{if(t.length>2)if(eI[t])t=eI[t];else return[t];const[o,i]=t.split(""),l=fq[o],d=gq[i]||"";return Array.isArray(d)?d.map(h=>l+h):[l+d]}),CC=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],AC=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...CC,...AC];function zp(t,o,i,l){var d;const h=(d=nu(t,o,!1))!=null?d:i;return typeof h=="number"?f=>typeof f=="string"?f:h*f:Array.isArray(h)?f=>typeof f=="string"?f:h[f]:typeof h=="function"?h:()=>{}}function FN(t){return zp(t,"spacing",8)}function jp(t,o){if(typeof o=="string"||o==null)return o;const i=Math.abs(o),l=t(i);return o>=0?l:typeof l=="number"?-l:`-${l}`}function bq(t,o){return i=>t.reduce((l,d)=>(l[d]=jp(o,i),l),{})}function kq(t,o,i,l){if(o.indexOf(i)===-1)return null;const d=mq(i),h=bq(d,l),f=t[i];return ir(t,f,h)}function $N(t,o){const i=FN(t.theme);return Object.keys(t).map(l=>kq(t,o,l,i)).reduce(Wh,{})}function yn(t){return $N(t,CC)}yn.propTypes={};yn.filterProps=CC;function Cn(t){return $N(t,AC)}Cn.propTypes={};Cn.filterProps=AC;function Ni(t){return typeof t!="number"?t:`${t}px solid`}const wq=Pt({prop:"border",themeKey:"borders",transform:Ni}),vq=Pt({prop:"borderTop",themeKey:"borders",transform:Ni}),yq=Pt({prop:"borderRight",themeKey:"borders",transform:Ni}),Cq=Pt({prop:"borderBottom",themeKey:"borders",transform:Ni}),Aq=Pt({prop:"borderLeft",themeKey:"borders",transform:Ni}),_q=Pt({prop:"borderColor",themeKey:"palette"}),xq=Pt({prop:"borderTopColor",themeKey:"palette"}),Eq=Pt({prop:"borderRightColor",themeKey:"palette"}),Sq=Pt({prop:"borderBottomColor",themeKey:"palette"}),Dq=Pt({prop:"borderLeftColor",themeKey:"palette"}),pb=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const o=zp(t.theme,"shape.borderRadius",4),i=l=>({borderRadius:jp(o,l)});return ir(t,t.borderRadius,i)}return null};pb.propTypes={};pb.filterProps=["borderRadius"];hb(wq,vq,yq,Cq,Aq,_q,xq,Eq,Sq,Dq,pb);const fb=t=>{if(t.gap!==void 0&&t.gap!==null){const o=zp(t.theme,"spacing",8),i=l=>({gap:jp(o,l)});return ir(t,t.gap,i)}return null};fb.propTypes={};fb.filterProps=["gap"];const gb=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const o=zp(t.theme,"spacing",8),i=l=>({columnGap:jp(o,l)});return ir(t,t.columnGap,i)}return null};gb.propTypes={};gb.filterProps=["columnGap"];const mb=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const o=zp(t.theme,"spacing",8),i=l=>({rowGap:jp(o,l)});return ir(t,t.rowGap,i)}return null};mb.propTypes={};mb.filterProps=["rowGap"];const Tq=Pt({prop:"gridColumn"}),Iq=Pt({prop:"gridRow"}),Mq=Pt({prop:"gridAutoFlow"}),Pq=Pt({prop:"gridAutoColumns"}),Nq=Pt({prop:"gridAutoRows"}),Bq=Pt({prop:"gridTemplateColumns"}),Rq=Pt({prop:"gridTemplateRows"}),Oq=Pt({prop:"gridTemplateAreas"}),Lq=Pt({prop:"gridArea"});hb(fb,gb,mb,Tq,Iq,Mq,Pq,Nq,Bq,Rq,Oq,Lq);function Vd(t,o){return o==="grey"?o:t}const zq=Pt({prop:"color",themeKey:"palette",transform:Vd}),jq=Pt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Vd}),Fq=Pt({prop:"backgroundColor",themeKey:"palette",transform:Vd});hb(zq,jq,Fq);function Xo(t){return t<=1&&t!==0?`${t*100}%`:t}const $q=Pt({prop:"width",transform:Xo}),_C=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const o=i=>{var l,d,h;return{maxWidth:((l=t.theme)==null||(d=l.breakpoints)==null||(h=d.values)==null?void 0:h[i])||yC[i]||Xo(i)}};return ir(t,t.maxWidth,o)}return null};_C.filterProps=["maxWidth"];const Vq=Pt({prop:"minWidth",transform:Xo}),Uq=Pt({prop:"height",transform:Xo}),Hq=Pt({prop:"maxHeight",transform:Xo}),Wq=Pt({prop:"minHeight",transform:Xo});Pt({prop:"size",cssProperty:"width",transform:Xo});Pt({prop:"size",cssProperty:"height",transform:Xo});const qq=Pt({prop:"boxSizing"});hb($q,_C,Vq,Uq,Hq,Wq,qq);const n0=t=>o=>{if(o[t]!==void 0&&o[t]!==null){const i=l=>{var d;let h=(d=o.theme.typography)==null?void 0:d[l];if(typeof h=="object"&&(h=null),!h){var f,b;h=(f=o.theme.typography)==null?void 0:f[`${t}${o[t]==="default"||o[t]===t?"":Be((b=o[t])==null?void 0:b.toString())}`]}if(!h){var m,v,C;h=(m=(v=o.theme.typography)==null||(C=v[l])==null?void 0:C[t])!=null?m:l}return{[t]:h}};return ir(o,o[t],i)}return null},Gq={border:{themeKey:"borders",transform:Ni},borderTop:{themeKey:"borders",transform:Ni},borderRight:{themeKey:"borders",transform:Ni},borderBottom:{themeKey:"borders",transform:Ni},borderLeft:{themeKey:"borders",transform:Ni},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:pb},color:{themeKey:"palette",transform:Vd},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Vd},backgroundColor:{themeKey:"palette",transform:Vd},p:{style:Cn},pt:{style:Cn},pr:{style:Cn},pb:{style:Cn},pl:{style:Cn},px:{style:Cn},py:{style:Cn},padding:{style:Cn},paddingTop:{style:Cn},paddingRight:{style:Cn},paddingBottom:{style:Cn},paddingLeft:{style:Cn},paddingX:{style:Cn},paddingY:{style:Cn},paddingInline:{style:Cn},paddingInlineStart:{style:Cn},paddingInlineEnd:{style:Cn},paddingBlock:{style:Cn},paddingBlockStart:{style:Cn},paddingBlockEnd:{style:Cn},m:{style:yn},mt:{style:yn},mr:{style:yn},mb:{style:yn},ml:{style:yn},mx:{style:yn},my:{style:yn},margin:{style:yn},marginTop:{style:yn},marginRight:{style:yn},marginBottom:{style:yn},marginLeft:{style:yn},marginX:{style:yn},marginY:{style:yn},marginInline:{style:yn},marginInlineStart:{style:yn},marginInlineEnd:{style:yn},marginBlock:{style:yn},marginBlockStart:{style:yn},marginBlockEnd:{style:yn},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:fb},rowGap:{style:mb},columnGap:{style:gb},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Xo},maxWidth:{style:_C},minWidth:{transform:Xo},height:{transform:Xo},maxHeight:{transform:Xo},minHeight:{transform:Xo},boxSizing:{},fontFamily:{themeKey:"typography",style:n0("fontFamily")},fontSize:{themeKey:"typography",style:n0("fontSize")},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography",style:n0("fontWeight")},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},bb=Gq;function Kq(...t){const o=t.reduce((l,d)=>l.concat(Object.keys(d)),[]),i=new Set(o);return t.every(l=>i.size===Object.keys(l).length)}function Yq(t,o){return typeof t=="function"?t(o):t}function Qq(){function t(i,l,d,h){const f={[i]:l,theme:d},b=h[i];if(!b)return{[i]:l};const{cssProperty:m=i,themeKey:v,transform:C,style:_}=b;if(l==null)return null;const A=nu(d,v)||{};return _?_(f):ir(f,l,M=>{let I=cm(A,C,M);return M===I&&typeof M=="string"&&(I=cm(A,C,`${i}${M==="default"?"":Be(M)}`,M)),m===!1?I:{[m]:I}})}function o(i){var l;const{sx:d,theme:h={}}=i||{};if(!d)return null;const f=(l=h.unstable_sxConfig)!=null?l:bb;function b(m){let v=m;if(typeof m=="function")v=m(h);else if(typeof m!="object")return m;if(!v)return null;const C=dq(h.breakpoints),_=Object.keys(C);let A=C;return Object.keys(v).forEach(S=>{const M=Yq(v[S],h);if(M!=null)if(typeof M=="object")if(f[S])A=Wh(A,t(S,M,h,f));else{const I=ir({theme:h},M,U=>({[S]:U}));Kq(I,M)?A[S]=o({sx:M,theme:h}):A=Wh(A,I)}else A=Wh(A,t(S,M,h,f))}),uq(_,A)}return Array.isArray(d)?d.map(b):b(d)}return o}const VN=Qq();VN.filterProps=["sx"];const kb=VN,Zq=["sx"],Jq=t=>{var o,i;const l={systemProps:{},otherProps:{}},d=(o=t==null||(i=t.theme)==null?void 0:i.unstable_sxConfig)!=null?o:bb;return Object.keys(t).forEach(h=>{d[h]?l.systemProps[h]=t[h]:l.otherProps[h]=t[h]}),l};function xC(t){const{sx:o}=t,i=Se(t,Zq),{systemProps:l,otherProps:d}=Jq(i);let h;return Array.isArray(o)?h=[l,...o]:typeof o=="function"?h=(...f)=>{const b=o(...f);return Vl(b)?G({},l,b):l}:h=G({},l,o),G({},d,{sx:h})}function UN(t){var o,i,l="";if(typeof t=="string"||typeof t=="number")l+=t;else if(typeof t=="object")if(Array.isArray(t))for(o=0;o<t.length;o++)t[o]&&(i=UN(t[o]))&&(l&&(l+=" "),l+=i);else for(o in t)t[o]&&(l&&(l+=" "),l+=o);return l}function Te(){for(var t,o,i=0,l="";i<arguments.length;)(t=arguments[i++])&&(o=UN(t))&&(l&&(l+=" "),l+=o);return l}const Xq=["values","unit","step"],eG=t=>{const o=Object.keys(t).map(i=>({key:i,val:t[i]}))||[];return o.sort((i,l)=>i.val-l.val),o.reduce((i,l)=>G({},i,{[l.key]:l.val}),{})};function tG(t){const{values:o={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:i="px",step:l=5}=t,d=Se(t,Xq),h=eG(o),f=Object.keys(h);function b(A){return`@media (min-width:${typeof o[A]=="number"?o[A]:A}${i})`}function m(A){return`@media (max-width:${(typeof o[A]=="number"?o[A]:A)-l/100}${i})`}function v(A,S){const M=f.indexOf(S);return`@media (min-width:${typeof o[A]=="number"?o[A]:A}${i}) and (max-width:${(M!==-1&&typeof o[f[M]]=="number"?o[f[M]]:S)-l/100}${i})`}function C(A){return f.indexOf(A)+1<f.length?v(A,f[f.indexOf(A)+1]):b(A)}function _(A){const S=f.indexOf(A);return S===0?b(f[1]):S===f.length-1?m(f[S]):v(A,f[f.indexOf(A)+1]).replace("@media","@media not all and")}return G({keys:f,values:h,up:b,down:m,between:v,only:C,not:_,unit:i},d)}const nG={borderRadius:4},oG=nG;function rG(t=8){if(t.mui)return t;const o=FN({spacing:t}),i=(...l)=>(l.length===0?[1]:l).map(h=>{const f=o(h);return typeof f=="number"?`${f}px`:f}).join(" ");return i.mui=!0,i}const iG=["breakpoints","palette","spacing","shape"];function EC(t={},...o){const{breakpoints:i={},palette:l={},spacing:d,shape:h={}}=t,f=Se(t,iG),b=tG(i),m=rG(d);let v=_r({breakpoints:b,direction:"ltr",components:{},palette:G({mode:"light"},l),spacing:m,shape:G({},oG,h)},f);return v=o.reduce((C,_)=>_r(C,_),v),v.unstable_sxConfig=G({},bb,f==null?void 0:f.unstable_sxConfig),v.unstable_sx=function(_){return kb({sx:_,theme:this})},v}const sG=R.createContext(null),aG=sG;function lG(){return R.useContext(aG)}function cG(t){return Object.keys(t).length===0}function dG(t=null){const o=lG();return!o||cG(o)?t:o}const uG=EC();function SC(t=uG){return dG(t)}const hG=["className","component"];function pG(t={}){const{defaultTheme:o,defaultClassName:i="MuiBox-root",generateClassName:l}=t,d=jN("div",{shouldForwardProp:f=>f!=="theme"&&f!=="sx"&&f!=="as"})(kb);return R.forwardRef(function(b,m){const v=SC(o),C=xC(b),{className:_,component:A="div"}=C,S=Se(C,hG);return T(d,G({as:A,ref:m,className:Te(_,l?l(i):i),theme:v},S))})}const fG=["variant"];function tI(t){return t.length===0}function HN(t){const{variant:o}=t,i=Se(t,fG);let l=o||"";return Object.keys(i).sort().forEach(d=>{d==="color"?l+=tI(l)?t[d]:Be(t[d]):l+=`${tI(l)?d:Be(d)}${Be(t[d].toString())}`}),l}const gG=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],mG=["theme"],bG=["theme"];function Ah(t){return Object.keys(t).length===0}function kG(t){return typeof t=="string"&&t.charCodeAt(0)>96}const wG=(t,o)=>o.components&&o.components[t]&&o.components[t].styleOverrides?o.components[t].styleOverrides:null,vG=(t,o)=>{let i=[];o&&o.components&&o.components[t]&&o.components[t].variants&&(i=o.components[t].variants);const l={};return i.forEach(d=>{const h=HN(d.props);l[h]=d.style}),l},yG=(t,o,i,l)=>{var d,h;const{ownerState:f={}}=t,b=[],m=i==null||(d=i.components)==null||(h=d[l])==null?void 0:h.variants;return m&&m.forEach(v=>{let C=!0;Object.keys(v.props).forEach(_=>{f[_]!==v.props[_]&&t[_]!==v.props[_]&&(C=!1)}),C&&b.push(o[HN(v.props)])}),b};function qh(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const CG=EC();function AG(t={}){const{defaultTheme:o=CG,rootShouldForwardProp:i=qh,slotShouldForwardProp:l=qh}=t,d=h=>{const f=Ah(h.theme)?o:h.theme;return kb(G({},h,{theme:f}))};return d.__mui_systemSx=!0,(h,f={})=>{cq(h,L=>L.filter(q=>!(q!=null&&q.__mui_systemSx)));const{name:b,slot:m,skipVariantsResolver:v,skipSx:C,overridesResolver:_}=f,A=Se(f,gG),S=v!==void 0?v:m&&m!=="Root"||!1,M=C||!1;let I,U=qh;m==="Root"?U=i:m?U=l:kG(h)&&(U=void 0);const N=jN(h,G({shouldForwardProp:U,label:I},A)),O=(L,...q)=>{const K=q?q.map(X=>typeof X=="function"&&X.__emotion_real!==X?ee=>{let{theme:ce}=ee,ke=Se(ee,mG);return X(G({theme:Ah(ce)?o:ce},ke))}:X):[];let J=L;b&&_&&K.push(X=>{const ee=Ah(X.theme)?o:X.theme,ce=wG(b,ee);if(ce){const ke={};return Object.entries(ce).forEach(([ge,fe])=>{ke[ge]=typeof fe=="function"?fe(G({},X,{theme:ee})):fe}),_(X,ke)}return null}),b&&!S&&K.push(X=>{const ee=Ah(X.theme)?o:X.theme;return yG(X,vG(b,ee),ee,b)}),M||K.push(d);const H=K.length-q.length;if(Array.isArray(L)&&H>0){const X=new Array(H).fill("");J=[...L,...X],J.raw=[...L.raw,...X]}else typeof L=="function"&&L.__emotion_real!==L&&(J=X=>{let{theme:ee}=X,ce=Se(X,bG);return L(G({theme:Ah(ee)?o:ee},ce))});return N(J,...K)};return N.withConfig&&(O.withConfig=N.withConfig),O}}function _G(t){const{theme:o,name:i,props:l}=t;return!o||!o.components||!o.components[i]||!o.components[i].defaultProps?l:fC(o.components[i].defaultProps,l)}function xG({props:t,name:o,defaultTheme:i}){const l=SC(i);return _G({theme:l,name:o,props:t})}function DC(t,o=0,i=1){return Math.min(Math.max(o,t),i)}function EG(t){t=t.slice(1);const o=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let i=t.match(o);return i&&i[0].length===1&&(i=i.map(l=>l+l)),i?`rgb${i.length===4?"a":""}(${i.map((l,d)=>d<3?parseInt(l,16):Math.round(parseInt(l,16)/255*1e3)/1e3).join(", ")})`:""}function rc(t){if(t.type)return t;if(t.charAt(0)==="#")return rc(EG(t));const o=t.indexOf("("),i=t.substring(0,o);if(["rgb","rgba","hsl","hsla","color"].indexOf(i)===-1)throw new Error(Da(9,t));let l=t.substring(o+1,t.length-1),d;if(i==="color"){if(l=l.split(" "),d=l.shift(),l.length===4&&l[3].charAt(0)==="/"&&(l[3]=l[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(d)===-1)throw new Error(Da(10,d))}else l=l.split(",");return l=l.map(h=>parseFloat(h)),{type:i,values:l,colorSpace:d}}function wb(t){const{type:o,colorSpace:i}=t;let{values:l}=t;return o.indexOf("rgb")!==-1?l=l.map((d,h)=>h<3?parseInt(d,10):d):o.indexOf("hsl")!==-1&&(l[1]=`${l[1]}%`,l[2]=`${l[2]}%`),o.indexOf("color")!==-1?l=`${i} ${l.join(" ")}`:l=`${l.join(", ")}`,`${o}(${l})`}function SG(t){t=rc(t);const{values:o}=t,i=o[0],l=o[1]/100,d=o[2]/100,h=l*Math.min(d,1-d),f=(v,C=(v+i/30)%12)=>d-h*Math.max(Math.min(C-3,9-C,1),-1);let b="rgb";const m=[Math.round(f(0)*255),Math.round(f(8)*255),Math.round(f(4)*255)];return t.type==="hsla"&&(b+="a",m.push(o[3])),wb({type:b,values:m})}function nI(t){t=rc(t);let o=t.type==="hsl"||t.type==="hsla"?rc(SG(t)).values:t.values;return o=o.map(i=>(t.type!=="color"&&(i/=255),i<=.03928?i/12.92:((i+.055)/1.055)**2.4)),Number((.2126*o[0]+.7152*o[1]+.0722*o[2]).toFixed(3))}function DG(t,o){const i=nI(t),l=nI(o);return(Math.max(i,l)+.05)/(Math.min(i,l)+.05)}function _n(t,o){return t=rc(t),o=DC(o),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${o}`:t.values[3]=o,wb(t)}function Bv(t,o){if(t=rc(t),o=DC(o),t.type.indexOf("hsl")!==-1)t.values[2]*=1-o;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let i=0;i<3;i+=1)t.values[i]*=1-o;return wb(t)}function Rv(t,o){if(t=rc(t),o=DC(o),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*o;else if(t.type.indexOf("rgb")!==-1)for(let i=0;i<3;i+=1)t.values[i]+=(255-t.values[i])*o;else if(t.type.indexOf("color")!==-1)for(let i=0;i<3;i+=1)t.values[i]+=(1-t.values[i])*o;return wb(t)}function TG(t,o){return G({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},o)}const IG=["mode","contrastThreshold","tonalOffset"],oI={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:vp.white,default:vp.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},o0={text:{primary:vp.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:vp.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function rI(t,o,i,l){const d=l.light||l,h=l.dark||l*1.5;t[o]||(t.hasOwnProperty(i)?t[o]=t[i]:o==="light"?t.light=Rv(t.main,d):o==="dark"&&(t.dark=Bv(t.main,h)))}function MG(t="light"){return t==="dark"?{main:pd[200],light:pd[50],dark:pd[400]}:{main:pd[700],light:pd[400],dark:pd[800]}}function PG(t="light"){return t==="dark"?{main:hd[200],light:hd[50],dark:hd[400]}:{main:hd[500],light:hd[300],dark:hd[700]}}function NG(t="light"){return t==="dark"?{main:jl[500],light:jl[300],dark:jl[700]}:{main:jl[700],light:jl[400],dark:jl[800]}}function BG(t="light"){return t==="dark"?{main:fd[400],light:fd[300],dark:fd[700]}:{main:fd[700],light:fd[500],dark:fd[900]}}function RG(t="light"){return t==="dark"?{main:gd[400],light:gd[300],dark:gd[700]}:{main:gd[800],light:gd[500],dark:gd[900]}}function OG(t="light"){return t==="dark"?{main:yh[400],light:yh[300],dark:yh[700]}:{main:"#ed6c02",light:yh[500],dark:yh[900]}}function LG(t){const{mode:o="light",contrastThreshold:i=3,tonalOffset:l=.2}=t,d=Se(t,IG),h=t.primary||MG(o),f=t.secondary||PG(o),b=t.error||NG(o),m=t.info||BG(o),v=t.success||RG(o),C=t.warning||OG(o);function _(I){return DG(I,o0.text.primary)>=i?o0.text.primary:oI.text.primary}const A=({color:I,name:U,mainShade:N=500,lightShade:O=300,darkShade:L=700})=>{if(I=G({},I),!I.main&&I[N]&&(I.main=I[N]),!I.hasOwnProperty("main"))throw new Error(Da(11,U?` (${U})`:"",N));if(typeof I.main!="string")throw new Error(Da(12,U?` (${U})`:"",JSON.stringify(I.main)));return rI(I,"light",O,l),rI(I,"dark",L,l),I.contrastText||(I.contrastText=_(I.main)),I},S={dark:o0,light:oI};return _r(G({common:G({},vp),mode:o,primary:A({color:h,name:"primary"}),secondary:A({color:f,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:A({color:b,name:"error"}),warning:A({color:C,name:"warning"}),info:A({color:m,name:"info"}),success:A({color:v,name:"success"}),grey:QH,contrastThreshold:i,getContrastText:_,augmentColor:A,tonalOffset:l},S[o]),d)}const zG=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function jG(t){return Math.round(t*1e5)/1e5}const iI={textTransform:"uppercase"},sI='"Roboto", "Helvetica", "Arial", sans-serif';function FG(t,o){const i=typeof o=="function"?o(t):o,{fontFamily:l=sI,fontSize:d=14,fontWeightLight:h=300,fontWeightRegular:f=400,fontWeightMedium:b=500,fontWeightBold:m=700,htmlFontSize:v=16,allVariants:C,pxToRem:_}=i,A=Se(i,zG),S=d/14,M=_||(N=>`${N/v*S}rem`),I=(N,O,L,q,K)=>G({fontFamily:l,fontWeight:N,fontSize:M(O),lineHeight:L},l===sI?{letterSpacing:`${jG(q/O)}em`}:{},K,C),U={h1:I(h,96,1.167,-1.5),h2:I(h,60,1.2,-.5),h3:I(f,48,1.167,0),h4:I(f,34,1.235,.25),h5:I(f,24,1.334,0),h6:I(b,20,1.6,.15),subtitle1:I(f,16,1.75,.15),subtitle2:I(b,14,1.57,.1),body1:I(f,16,1.5,.15),body2:I(f,14,1.43,.15),button:I(b,14,1.75,.4,iI),caption:I(f,12,1.66,.4),overline:I(f,12,2.66,1,iI),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return _r(G({htmlFontSize:v,pxToRem:M,fontFamily:l,fontSize:d,fontWeightLight:h,fontWeightRegular:f,fontWeightMedium:b,fontWeightBold:m},U),A,{clone:!1})}const $G=.2,VG=.14,UG=.12;function cn(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${$G})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${VG})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${UG})`].join(",")}const HG=["none",cn(0,2,1,-1,0,1,1,0,0,1,3,0),cn(0,3,1,-2,0,2,2,0,0,1,5,0),cn(0,3,3,-2,0,3,4,0,0,1,8,0),cn(0,2,4,-1,0,4,5,0,0,1,10,0),cn(0,3,5,-1,0,5,8,0,0,1,14,0),cn(0,3,5,-1,0,6,10,0,0,1,18,0),cn(0,4,5,-2,0,7,10,1,0,2,16,1),cn(0,5,5,-3,0,8,10,1,0,3,14,2),cn(0,5,6,-3,0,9,12,1,0,3,16,2),cn(0,6,6,-3,0,10,14,1,0,4,18,3),cn(0,6,7,-4,0,11,15,1,0,4,20,3),cn(0,7,8,-4,0,12,17,2,0,5,22,4),cn(0,7,8,-4,0,13,19,2,0,5,24,4),cn(0,7,9,-4,0,14,21,2,0,5,26,4),cn(0,8,9,-5,0,15,22,2,0,6,28,5),cn(0,8,10,-5,0,16,24,2,0,6,30,5),cn(0,8,11,-5,0,17,26,2,0,6,32,5),cn(0,9,11,-5,0,18,28,2,0,7,34,6),cn(0,9,12,-6,0,19,29,2,0,7,36,6),cn(0,10,13,-6,0,20,31,3,0,8,38,7),cn(0,10,13,-6,0,21,33,3,0,8,40,7),cn(0,10,14,-6,0,22,35,3,0,8,42,7),cn(0,11,14,-7,0,23,36,3,0,9,44,8),cn(0,11,15,-7,0,24,38,3,0,9,46,8)],WG=HG,qG=["duration","easing","delay"],GG={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},KG={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function aI(t){return`${Math.round(t)}ms`}function YG(t){if(!t)return 0;const o=t/36;return Math.round((4+15*o**.25+o/5)*10)}function QG(t){const o=G({},GG,t.easing),i=G({},KG,t.duration);return G({getAutoHeightDuration:YG,create:(d=["all"],h={})=>{const{duration:f=i.standard,easing:b=o.easeInOut,delay:m=0}=h;return Se(h,qG),(Array.isArray(d)?d:[d]).map(v=>`${v} ${typeof f=="string"?f:aI(f)} ${b} ${typeof m=="string"?m:aI(m)}`).join(",")}},t,{easing:o,duration:i})}const ZG={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},JG=ZG,XG=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function TC(t={},...o){const{mixins:i={},palette:l={},transitions:d={},typography:h={}}=t,f=Se(t,XG);if(t.vars)throw new Error(Da(18));const b=LG(l),m=EC(t);let v=_r(m,{mixins:TG(m.breakpoints,i),palette:b,shadows:WG.slice(),typography:FG(b,h),transitions:QG(d),zIndex:G({},JG)});return v=_r(v,f),v=o.reduce((C,_)=>_r(C,_),v),v.unstable_sxConfig=G({},bb,f==null?void 0:f.unstable_sxConfig),v.unstable_sx=function(_){return kb({sx:_,theme:this})},v}const eK=TC(),vb=eK;function Ba(){return SC(vb)}function He({props:t,name:o}){return xG({props:t,name:o,defaultTheme:vb})}const Fo=t=>qh(t)&&t!=="classes",tK=qh,nK=AG({defaultTheme:vb,rootShouldForwardProp:Fo}),Ce=nK,oK=t=>{let o;return t<1?o=5.11916*t**2:o=4.5*Math.log(t+1)+2,(o/100).toFixed(2)},lI=oK;function ou(t){return typeof t=="string"}function rK(t,o,i){return t===void 0||ou(t)?o:G({},o,{ownerState:G({},o.ownerState,i)})}const iK={disableDefaultClasses:!1},sK=R.createContext(iK);function aK(t){const{disableDefaultClasses:o}=R.useContext(sK);return i=>o?"":t(i)}function lK(t,o=[]){if(t===void 0)return{};const i={};return Object.keys(t).filter(l=>l.match(/^on[A-Z]/)&&typeof t[l]=="function"&&!o.includes(l)).forEach(l=>{i[l]=t[l]}),i}function Ov(t,o){return typeof t=="function"?t(o):t}function cI(t){if(t===void 0)return{};const o={};return Object.keys(t).filter(i=>!(i.match(/^on[A-Z]/)&&typeof t[i]=="function")).forEach(i=>{o[i]=t[i]}),o}function cK(t){const{getSlotProps:o,additionalProps:i,externalSlotProps:l,externalForwardedProps:d,className:h}=t;if(!o){const S=Te(d==null?void 0:d.className,l==null?void 0:l.className,h,i==null?void 0:i.className),M=G({},i==null?void 0:i.style,d==null?void 0:d.style,l==null?void 0:l.style),I=G({},i,d,l);return S.length>0&&(I.className=S),Object.keys(M).length>0&&(I.style=M),{props:I,internalRef:void 0}}const f=lK(G({},d,l)),b=cI(l),m=cI(d),v=o(f),C=Te(v==null?void 0:v.className,i==null?void 0:i.className,h,d==null?void 0:d.className,l==null?void 0:l.className),_=G({},v==null?void 0:v.style,i==null?void 0:i.style,d==null?void 0:d.style,l==null?void 0:l.style),A=G({},v,i,m,b);return C.length>0&&(A.className=C),Object.keys(_).length>0&&(A.style=_),{props:A,internalRef:v.ref}}const dK=["elementType","externalSlotProps","ownerState"];function dI(t){var o;const{elementType:i,externalSlotProps:l,ownerState:d}=t,h=Se(t,dK),f=Ov(l,d),{props:b,internalRef:m}=cK(G({},h,{externalSlotProps:f})),v=Ln(m,f==null?void 0:f.ref,(o=t.additionalProps)==null?void 0:o.ref);return rK(i,G({},b,{ref:v}),d)}const uK=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function hK(t){const o=parseInt(t.getAttribute("tabindex")||"",10);return Number.isNaN(o)?t.contentEditable==="true"||(t.nodeName==="AUDIO"||t.nodeName==="VIDEO"||t.nodeName==="DETAILS")&&t.getAttribute("tabindex")===null?0:t.tabIndex:o}function pK(t){if(t.tagName!=="INPUT"||t.type!=="radio"||!t.name)return!1;const o=l=>t.ownerDocument.querySelector(`input[type="radio"]${l}`);let i=o(`[name="${t.name}"]:checked`);return i||(i=o(`[name="${t.name}"]`)),i!==t}function fK(t){return!(t.disabled||t.tagName==="INPUT"&&t.type==="hidden"||pK(t))}function gK(t){const o=[],i=[];return Array.from(t.querySelectorAll(uK)).forEach((l,d)=>{const h=hK(l);h===-1||!fK(l)||(h===0?o.push(l):i.push({documentOrder:d,tabIndex:h,node:l}))}),i.sort((l,d)=>l.tabIndex===d.tabIndex?l.documentOrder-d.documentOrder:l.tabIndex-d.tabIndex).map(l=>l.node).concat(o)}function mK(){return!0}function bK(t){const{children:o,disableAutoFocus:i=!1,disableEnforceFocus:l=!1,disableRestoreFocus:d=!1,getTabbable:h=gK,isEnabled:f=mK,open:b}=t,m=R.useRef(!1),v=R.useRef(null),C=R.useRef(null),_=R.useRef(null),A=R.useRef(null),S=R.useRef(!1),M=R.useRef(null),I=Ln(o.ref,M),U=R.useRef(null);R.useEffect(()=>{!b||!M.current||(S.current=!i)},[i,b]),R.useEffect(()=>{if(!b||!M.current)return;const L=Lo(M.current);return M.current.contains(L.activeElement)||(M.current.hasAttribute("tabIndex")||M.current.setAttribute("tabIndex","-1"),S.current&&M.current.focus()),()=>{d||(_.current&&_.current.focus&&(m.current=!0,_.current.focus()),_.current=null)}},[b]),R.useEffect(()=>{if(!b||!M.current)return;const L=Lo(M.current),q=H=>{const{current:F}=M;if(F!==null){if(!L.hasFocus()||l||!f()||m.current){m.current=!1;return}if(!F.contains(L.activeElement)){if(H&&A.current!==H.target||L.activeElement!==A.current)A.current=null;else if(A.current!==null)return;if(!S.current)return;let ce=[];if((L.activeElement===v.current||L.activeElement===C.current)&&(ce=h(M.current)),ce.length>0){var X,ee;const ke=!!((X=U.current)!=null&&X.shiftKey&&((ee=U.current)==null?void 0:ee.key)==="Tab"),ge=ce[0],fe=ce[ce.length-1];typeof ge!="string"&&typeof fe!="string"&&(ke?fe.focus():ge.focus())}else F.focus()}}},K=H=>{U.current=H,!(l||!f()||H.key!=="Tab")&&L.activeElement===M.current&&H.shiftKey&&(m.current=!0,C.current&&C.current.focus())};L.addEventListener("focusin",q),L.addEventListener("keydown",K,!0);const J=setInterval(()=>{L.activeElement&&L.activeElement.tagName==="BODY"&&q(null)},50);return()=>{clearInterval(J),L.removeEventListener("focusin",q),L.removeEventListener("keydown",K,!0)}},[i,l,d,f,b,h]);const N=L=>{_.current===null&&(_.current=L.relatedTarget),S.current=!0,A.current=L.target;const q=o.props.onFocus;q&&q(L)},O=L=>{_.current===null&&(_.current=L.relatedTarget),S.current=!0};return ue(R.Fragment,{children:[T("div",{tabIndex:b?0:-1,onFocus:O,ref:v,"data-testid":"sentinelStart"}),R.cloneElement(o,{ref:I,onFocus:N}),T("div",{tabIndex:b?0:-1,onFocus:O,ref:C,"data-testid":"sentinelEnd"})]})}function kK(t){return typeof t=="function"?t():t}const wK=R.forwardRef(function(o,i){const{children:l,container:d,disablePortal:h=!1}=o,[f,b]=R.useState(null),m=Ln(R.isValidElement(l)?l.ref:null,i);if(Fi(()=>{h||b(kK(d)||document.body)},[d,h]),Fi(()=>{if(f&&!h)return sm(i,f),()=>{sm(i,null)}},[i,f,h]),h){if(R.isValidElement(l)){const v={ref:m};return R.cloneElement(l,v)}return T(R.Fragment,{children:l})}return T(R.Fragment,{children:f&&Zl.createPortal(l,f)})}),vK=wK;function yK(t){const o=Lo(t);return o.body===t?ji(t).innerWidth>o.documentElement.clientWidth:t.scrollHeight>t.clientHeight}function Gh(t,o){o?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")}function uI(t){return parseInt(ji(t).getComputedStyle(t).paddingRight,10)||0}function CK(t){const i=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(t.tagName)!==-1,l=t.tagName==="INPUT"&&t.getAttribute("type")==="hidden";return i||l}function hI(t,o,i,l,d){const h=[o,i,...l];[].forEach.call(t.children,f=>{const b=h.indexOf(f)===-1,m=!CK(f);b&&m&&Gh(f,d)})}function r0(t,o){let i=-1;return t.some((l,d)=>o(l)?(i=d,!0):!1),i}function AK(t,o){const i=[],l=t.container;if(!o.disableScrollLock){if(yK(l)){const f=_N(Lo(l));i.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${uI(l)+f}px`;const b=Lo(l).querySelectorAll(".mui-fixed");[].forEach.call(b,m=>{i.push({value:m.style.paddingRight,property:"padding-right",el:m}),m.style.paddingRight=`${uI(m)+f}px`})}let h;if(l.parentNode instanceof DocumentFragment)h=Lo(l).body;else{const f=l.parentElement,b=ji(l);h=(f==null?void 0:f.nodeName)==="HTML"&&b.getComputedStyle(f).overflowY==="scroll"?f:l}i.push({value:h.style.overflow,property:"overflow",el:h},{value:h.style.overflowX,property:"overflow-x",el:h},{value:h.style.overflowY,property:"overflow-y",el:h}),h.style.overflow="hidden"}return()=>{i.forEach(({value:h,el:f,property:b})=>{h?f.style.setProperty(b,h):f.style.removeProperty(b)})}}function _K(t){const o=[];return[].forEach.call(t.children,i=>{i.getAttribute("aria-hidden")==="true"&&o.push(i)}),o}class xK{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(o,i){let l=this.modals.indexOf(o);if(l!==-1)return l;l=this.modals.length,this.modals.push(o),o.modalRef&&Gh(o.modalRef,!1);const d=_K(i);hI(i,o.mount,o.modalRef,d,!0);const h=r0(this.containers,f=>f.container===i);return h!==-1?(this.containers[h].modals.push(o),l):(this.containers.push({modals:[o],container:i,restore:null,hiddenSiblings:d}),l)}mount(o,i){const l=r0(this.containers,h=>h.modals.indexOf(o)!==-1),d=this.containers[l];d.restore||(d.restore=AK(d,i))}remove(o,i=!0){const l=this.modals.indexOf(o);if(l===-1)return l;const d=r0(this.containers,f=>f.modals.indexOf(o)!==-1),h=this.containers[d];if(h.modals.splice(h.modals.indexOf(o),1),this.modals.splice(l,1),h.modals.length===0)h.restore&&h.restore(),o.modalRef&&Gh(o.modalRef,i),hI(h.container,o.mount,o.modalRef,h.hiddenSiblings,!1),this.containers.splice(d,1);else{const f=h.modals[h.modals.length-1];f.modalRef&&Gh(f.modalRef,!1)}return l}isTopModal(o){return this.modals.length>0&&this.modals[this.modals.length-1]===o}}function EK(t){return Ve("MuiModal",t)}Ue("MuiModal",["root","hidden","backdrop"]);const SK=["children","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],DK=t=>{const{open:o,exited:i}=t;return Ge({root:["root",!o&&i&&"hidden"],backdrop:["backdrop"]},aK(EK))};function TK(t){return typeof t=="function"?t():t}function IK(t){return t?t.props.hasOwnProperty("in"):!1}const MK=new xK,PK=R.forwardRef(function(o,i){var l,d;const{children:h,closeAfterTransition:f=!1,component:b,container:m,disableAutoFocus:v=!1,disableEnforceFocus:C=!1,disableEscapeKeyDown:_=!1,disablePortal:A=!1,disableRestoreFocus:S=!1,disableScrollLock:M=!1,hideBackdrop:I=!1,keepMounted:U=!1,manager:N=MK,onBackdropClick:O,onClose:L,onKeyDown:q,open:K,onTransitionEnter:J,onTransitionExited:H,slotProps:F={},slots:X={}}=o,ee=Se(o,SK),[ce,ke]=R.useState(!K),ge=R.useRef({}),fe=R.useRef(null),he=R.useRef(null),ve=Ln(he,i),De=IK(h),oe=(l=o["aria-hidden"])!=null?l:!0,se=()=>Lo(fe.current),re=()=>(ge.current.modalRef=he.current,ge.current.mountNode=fe.current,ge.current),_e=()=>{N.mount(re(),{disableScrollLock:M}),he.current&&(he.current.scrollTop=0)},Re=Gl(()=>{const st=TK(m)||se().body;N.add(re(),st),he.current&&_e()}),Ee=R.useCallback(()=>N.isTopModal(re()),[N]),Le=Gl(st=>{fe.current=st,!(!st||!he.current)&&(K&&Ee()?_e():Gh(he.current,oe))}),tt=R.useCallback(()=>{N.remove(re(),oe)},[N,oe]);R.useEffect(()=>()=>{tt()},[tt]),R.useEffect(()=>{K?Re():(!De||!f)&&tt()},[K,tt,De,f,Re]);const Xe=G({},o,{closeAfterTransition:f,disableAutoFocus:v,disableEnforceFocus:C,disableEscapeKeyDown:_,disablePortal:A,disableRestoreFocus:S,disableScrollLock:M,exited:ce,hideBackdrop:I,keepMounted:U}),We=DK(Xe),Gt=()=>{ke(!1),J&&J()},Ye=()=>{ke(!0),H&&H(),f&&tt()},wt=st=>{st.target===st.currentTarget&&(O&&O(st),L&&L(st,"backdropClick"))},je=st=>{q&&q(st),!(st.key!=="Escape"||!Ee())&&(_||(st.stopPropagation(),L&&L(st,"escapeKeyDown")))},et={};h.props.tabIndex===void 0&&(et.tabIndex="-1"),De&&(et.onEnter=Dv(Gt,h.props.onEnter),et.onExited=Dv(Ye,h.props.onExited));const xn=(d=b??X.root)!=null?d:"div",Ze=dI({elementType:xn,externalSlotProps:F.root,externalForwardedProps:ee,additionalProps:{ref:ve,role:"presentation",onKeyDown:je},className:We.root,ownerState:Xe}),mn=X.backdrop,Ke=dI({elementType:mn,externalSlotProps:F.backdrop,additionalProps:{"aria-hidden":!0,onClick:wt,open:K},className:We.backdrop,ownerState:Xe});return!U&&!K&&(!De||ce)?null:T(vK,{ref:Le,container:m,disablePortal:A,children:ue(xn,G({},Ze,{children:[!I&&mn?T(mn,G({},Ke)):null,T(bK,{disableEnforceFocus:C,disableAutoFocus:v,disableRestoreFocus:S,isEnabled:Ee,open:K,children:R.cloneElement(h,et)})]}))})}),NK=PK,BK=["onChange","maxRows","minRows","style","value"];function Xf(t){return parseInt(t,10)||0}const RK={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function pI(t){return t==null||Object.keys(t).length===0||t.outerHeightStyle===0&&!t.overflow}const OK=R.forwardRef(function(o,i){const{onChange:l,maxRows:d,minRows:h=1,style:f,value:b}=o,m=Se(o,BK),{current:v}=R.useRef(b!=null),C=R.useRef(null),_=Ln(i,C),A=R.useRef(null),S=R.useRef(0),[M,I]=R.useState({outerHeightStyle:0}),U=R.useCallback(()=>{const K=C.current,H=ji(K).getComputedStyle(K);if(H.width==="0px")return{outerHeightStyle:0};const F=A.current;F.style.width=H.width,F.value=K.value||o.placeholder||"x",F.value.slice(-1)===`
`&&(F.value+=" ");const X=H.boxSizing,ee=Xf(H.paddingBottom)+Xf(H.paddingTop),ce=Xf(H.borderBottomWidth)+Xf(H.borderTopWidth),ke=F.scrollHeight;F.value="x";const ge=F.scrollHeight;let fe=ke;h&&(fe=Math.max(Number(h)*ge,fe)),d&&(fe=Math.min(Number(d)*ge,fe)),fe=Math.max(fe,ge);const he=fe+(X==="border-box"?ee+ce:0),ve=Math.abs(fe-ke)<=1;return{outerHeightStyle:he,overflow:ve}},[d,h,o.placeholder]),N=(K,J)=>{const{outerHeightStyle:H,overflow:F}=J;return S.current<20&&(H>0&&Math.abs((K.outerHeightStyle||0)-H)>1||K.overflow!==F)?(S.current+=1,{overflow:F,outerHeightStyle:H}):K},O=R.useCallback(()=>{const K=U();pI(K)||I(J=>N(J,K))},[U]),L=()=>{const K=U();pI(K)||Zl.flushSync(()=>{I(J=>N(J,K))})};R.useEffect(()=>{const K=sb(()=>{S.current=0,C.current&&L()});let J;const H=C.current,F=ji(H);return F.addEventListener("resize",K),typeof ResizeObserver<"u"&&(J=new ResizeObserver(K),J.observe(H)),()=>{K.clear(),F.removeEventListener("resize",K),J&&J.disconnect()}}),Fi(()=>{O()}),R.useEffect(()=>{S.current=0},[b]);const q=K=>{S.current=0,v||O(),l&&l(K)};return ue(R.Fragment,{children:[T("textarea",G({value:b,onChange:q,ref:_,rows:h,style:G({height:M.outerHeightStyle,overflow:M.overflow?"hidden":void 0},f)},m)),T("textarea",{"aria-hidden":!0,className:o.className,readOnly:!0,ref:A,tabIndex:-1,style:G({},RK.shadow,f,{padding:0})})]})}),LK=OK;function zK(t){return Ve("MuiSvgIcon",t)}Ue("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const jK=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],FK=t=>{const{color:o,fontSize:i,classes:l}=t,d={root:["root",o!=="inherit"&&`color${Be(o)}`,`fontSize${Be(i)}`]};return Ge(d,zK,l)},$K=Ce("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,i.color!=="inherit"&&o[`color${Be(i.color)}`],o[`fontSize${Be(i.fontSize)}`]]}})(({theme:t,ownerState:o})=>{var i,l,d,h,f,b,m,v,C,_,A,S,M,I,U,N,O;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(i=t.transitions)==null||(l=i.create)==null?void 0:l.call(i,"fill",{duration:(d=t.transitions)==null||(h=d.duration)==null?void 0:h.shorter}),fontSize:{inherit:"inherit",small:((f=t.typography)==null||(b=f.pxToRem)==null?void 0:b.call(f,20))||"1.25rem",medium:((m=t.typography)==null||(v=m.pxToRem)==null?void 0:v.call(m,24))||"1.5rem",large:((C=t.typography)==null||(_=C.pxToRem)==null?void 0:_.call(C,35))||"2.1875rem"}[o.fontSize],color:(A=(S=(t.vars||t).palette)==null||(M=S[o.color])==null?void 0:M.main)!=null?A:{action:(I=(t.vars||t).palette)==null||(U=I.action)==null?void 0:U.active,disabled:(N=(t.vars||t).palette)==null||(O=N.action)==null?void 0:O.disabled,inherit:void 0}[o.color]}}),WN=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiSvgIcon"}),{children:d,className:h,color:f="inherit",component:b="svg",fontSize:m="medium",htmlColor:v,inheritViewBox:C=!1,titleAccess:_,viewBox:A="0 0 24 24"}=l,S=Se(l,jK),M=G({},l,{color:f,component:b,fontSize:m,instanceFontSize:o.fontSize,inheritViewBox:C,viewBox:A}),I={};C||(I.viewBox=A);const U=FK(M);return ue($K,G({as:b,className:Te(U.root,h),focusable:"false",color:v,"aria-hidden":_?void 0:!0,role:_?"img":void 0,ref:i},I,S,{ownerState:M,children:[d,_?T("title",{children:_}):null]}))});WN.muiName="SvgIcon";const fI=WN;function Ra(t,o){function i(l,d){return T(fI,G({"data-testid":`${o}Icon`,ref:d},l,{children:t}))}return i.muiName=fI.muiName,R.memo(R.forwardRef(i))}const VK={configure:t=>{gC.configure(t)}},UK=Object.freeze(Object.defineProperty({__proto__:null,capitalize:Be,createChainedFunction:Dv,createSvgIcon:Ra,debounce:sb,deprecatedPropType:ZH,isMuiElement:Hh,ownerDocument:Lo,ownerWindow:ji,requirePropFactory:JH,setRef:sm,unstable_ClassNameGenerator:VK,unstable_useEnhancedEffect:Fi,unstable_useId:hC,unsupportedProp:tW,useControlled:Tv,useEventCallback:Gl,useForkRef:Ln,useIsFocusVisible:pC},Symbol.toStringTag,{value:"Module"}));function Lv(t,o){return Lv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,d){return l.__proto__=d,l},Lv(t,o)}function qN(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,Lv(t,o)}const gI={disabled:!1},dm=mo.createContext(null);var HK=function(o){return o.scrollTop},Nh="unmounted",Fl="exited",$l="entering",bd="entered",zv="exiting",Cs=function(t){qN(o,t);function o(l,d){var h;h=t.call(this,l,d)||this;var f=d,b=f&&!f.isMounting?l.enter:l.appear,m;return h.appearStatus=null,l.in?b?(m=Fl,h.appearStatus=$l):m=bd:l.unmountOnExit||l.mountOnEnter?m=Nh:m=Fl,h.state={status:m},h.nextCallback=null,h}o.getDerivedStateFromProps=function(d,h){var f=d.in;return f&&h.status===Nh?{status:Fl}:null};var i=o.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(d){var h=null;if(d!==this.props){var f=this.state.status;this.props.in?f!==$l&&f!==bd&&(h=$l):(f===$l||f===bd)&&(h=zv)}this.updateStatus(!1,h)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var d=this.props.timeout,h,f,b;return h=f=b=d,d!=null&&typeof d!="number"&&(h=d.exit,f=d.enter,b=d.appear!==void 0?d.appear:f),{exit:h,enter:f,appear:b}},i.updateStatus=function(d,h){if(d===void 0&&(d=!1),h!==null)if(this.cancelNextCallback(),h===$l){if(this.props.unmountOnExit||this.props.mountOnEnter){var f=this.props.nodeRef?this.props.nodeRef.current:Zf.findDOMNode(this);f&&HK(f)}this.performEnter(d)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Fl&&this.setState({status:Nh})},i.performEnter=function(d){var h=this,f=this.props.enter,b=this.context?this.context.isMounting:d,m=this.props.nodeRef?[b]:[Zf.findDOMNode(this),b],v=m[0],C=m[1],_=this.getTimeouts(),A=b?_.appear:_.enter;if(!d&&!f||gI.disabled){this.safeSetState({status:bd},function(){h.props.onEntered(v)});return}this.props.onEnter(v,C),this.safeSetState({status:$l},function(){h.props.onEntering(v,C),h.onTransitionEnd(A,function(){h.safeSetState({status:bd},function(){h.props.onEntered(v,C)})})})},i.performExit=function(){var d=this,h=this.props.exit,f=this.getTimeouts(),b=this.props.nodeRef?void 0:Zf.findDOMNode(this);if(!h||gI.disabled){this.safeSetState({status:Fl},function(){d.props.onExited(b)});return}this.props.onExit(b),this.safeSetState({status:zv},function(){d.props.onExiting(b),d.onTransitionEnd(f.exit,function(){d.safeSetState({status:Fl},function(){d.props.onExited(b)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(d,h){h=this.setNextCallback(h),this.setState(d,h)},i.setNextCallback=function(d){var h=this,f=!0;return this.nextCallback=function(b){f&&(f=!1,h.nextCallback=null,d(b))},this.nextCallback.cancel=function(){f=!1},this.nextCallback},i.onTransitionEnd=function(d,h){this.setNextCallback(h);var f=this.props.nodeRef?this.props.nodeRef.current:Zf.findDOMNode(this),b=d==null&&!this.props.addEndListener;if(!f||b){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var m=this.props.nodeRef?[this.nextCallback]:[f,this.nextCallback],v=m[0],C=m[1];this.props.addEndListener(v,C)}d!=null&&setTimeout(this.nextCallback,d)},i.render=function(){var d=this.state.status;if(d===Nh)return null;var h=this.props,f=h.children;h.in,h.mountOnEnter,h.unmountOnExit,h.appear,h.enter,h.exit,h.timeout,h.addEndListener,h.onEnter,h.onEntering,h.onEntered,h.onExit,h.onExiting,h.onExited,h.nodeRef;var b=Se(h,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return mo.createElement(dm.Provider,{value:null},typeof f=="function"?f(d,b):mo.cloneElement(mo.Children.only(f),b))},o}(mo.Component);Cs.contextType=dm;Cs.propTypes={};function md(){}Cs.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:md,onEntering:md,onEntered:md,onExit:md,onExiting:md,onExited:md};Cs.UNMOUNTED=Nh;Cs.EXITED=Fl;Cs.ENTERING=$l;Cs.ENTERED=bd;Cs.EXITING=zv;const IC=Cs;function WK(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function MC(t,o){var i=function(h){return o&&R.isValidElement(h)?o(h):h},l=Object.create(null);return t&&R.Children.map(t,function(d){return d}).forEach(function(d){l[d.key]=i(d)}),l}function qK(t,o){t=t||{},o=o||{};function i(C){return C in o?o[C]:t[C]}var l=Object.create(null),d=[];for(var h in t)h in o?d.length&&(l[h]=d,d=[]):d.push(h);var f,b={};for(var m in o){if(l[m])for(f=0;f<l[m].length;f++){var v=l[m][f];b[l[m][f]]=i(v)}b[m]=i(m)}for(f=0;f<d.length;f++)b[d[f]]=i(d[f]);return b}function Kl(t,o,i){return i[o]!=null?i[o]:t.props[o]}function GK(t,o){return MC(t.children,function(i){return R.cloneElement(i,{onExited:o.bind(null,i),in:!0,appear:Kl(i,"appear",t),enter:Kl(i,"enter",t),exit:Kl(i,"exit",t)})})}function KK(t,o,i){var l=MC(t.children),d=qK(o,l);return Object.keys(d).forEach(function(h){var f=d[h];if(R.isValidElement(f)){var b=h in o,m=h in l,v=o[h],C=R.isValidElement(v)&&!v.props.in;m&&(!b||C)?d[h]=R.cloneElement(f,{onExited:i.bind(null,f),in:!0,exit:Kl(f,"exit",t),enter:Kl(f,"enter",t)}):!m&&b&&!C?d[h]=R.cloneElement(f,{in:!1}):m&&b&&R.isValidElement(v)&&(d[h]=R.cloneElement(f,{onExited:i.bind(null,f),in:v.props.in,exit:Kl(f,"exit",t),enter:Kl(f,"enter",t)}))}}),d}var YK=Object.values||function(t){return Object.keys(t).map(function(o){return t[o]})},QK={component:"div",childFactory:function(o){return o}},PC=function(t){qN(o,t);function o(l,d){var h;h=t.call(this,l,d)||this;var f=h.handleExited.bind(WK(h));return h.state={contextValue:{isMounting:!0},handleExited:f,firstRender:!0},h}var i=o.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(d,h){var f=h.children,b=h.handleExited,m=h.firstRender;return{children:m?GK(d,b):KK(d,f,b),firstRender:!1}},i.handleExited=function(d,h){var f=MC(this.props.children);d.key in f||(d.props.onExited&&d.props.onExited(h),this.mounted&&this.setState(function(b){var m=G({},b.children);return delete m[d.key],{children:m}}))},i.render=function(){var d=this.props,h=d.component,f=d.childFactory,b=Se(d,["component","childFactory"]),m=this.state.contextValue,v=YK(this.state.children).map(f);return delete b.appear,delete b.enter,delete b.exit,h===null?mo.createElement(dm.Provider,{value:m},v):mo.createElement(dm.Provider,{value:m},mo.createElement(h,b,v))},o}(mo.Component);PC.propTypes={};PC.defaultProps=QK;const ZK=PC,NC=t=>t.scrollTop;function ru(t,o){var i,l;const{timeout:d,easing:h,style:f={}}=t;return{duration:(i=f.transitionDuration)!=null?i:typeof d=="number"?d:d[o.mode]||0,easing:(l=f.transitionTimingFunction)!=null?l:typeof h=="object"?h[o.mode]:h,delay:f.transitionDelay}}function JK(t){return Ve("MuiPaper",t)}Ue("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const XK=["className","component","elevation","square","variant"],eY=t=>{const{square:o,elevation:i,variant:l,classes:d}=t,h={root:["root",l,!o&&"rounded",l==="elevation"&&`elevation${i}`]};return Ge(h,JK,d)},tY=Ce("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,o[i.variant],!i.square&&o.rounded,i.variant==="elevation"&&o[`elevation${i.elevation}`]]}})(({theme:t,ownerState:o})=>{var i;return G({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!o.square&&{borderRadius:t.shape.borderRadius},o.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.divider}`},o.variant==="elevation"&&G({boxShadow:(t.vars||t).shadows[o.elevation]},!t.vars&&t.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${_n("#fff",lI(o.elevation))}, ${_n("#fff",lI(o.elevation))})`},t.vars&&{backgroundImage:(i=t.vars.overlays)==null?void 0:i[o.elevation]}))}),nY=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiPaper"}),{className:d,component:h="div",elevation:f=1,square:b=!1,variant:m="elevation"}=l,v=Se(l,XK),C=G({},l,{component:h,elevation:f,square:b,variant:m}),_=eY(C);return T(tY,G({as:h,ownerState:C,className:Te(_.root,d),ref:i},v))}),Oa=nY;function oY(t){const{className:o,classes:i,pulsate:l=!1,rippleX:d,rippleY:h,rippleSize:f,in:b,onExited:m,timeout:v}=t,[C,_]=R.useState(!1),A=Te(o,i.ripple,i.rippleVisible,l&&i.ripplePulsate),S={width:f,height:f,top:-(f/2)+h,left:-(f/2)+d},M=Te(i.child,C&&i.childLeaving,l&&i.childPulsate);return!b&&!C&&_(!0),R.useEffect(()=>{if(!b&&m!=null){const I=setTimeout(m,v);return()=>{clearTimeout(I)}}},[m,b,v]),T("span",{className:A,style:S,children:T("span",{className:M})})}const rY=Ue("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),wr=rY,iY=["center","classes","className"];let yb=t=>t,mI,bI,kI,wI;const jv=550,sY=80,aY=Lp(mI||(mI=yb`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),lY=Lp(bI||(bI=yb`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),cY=Lp(kI||(kI=yb`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),dY=Ce("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),uY=Ce(oY,{name:"MuiTouchRipple",slot:"Ripple"})(wI||(wI=yb`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),wr.rippleVisible,aY,jv,({theme:t})=>t.transitions.easing.easeInOut,wr.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,wr.child,wr.childLeaving,lY,jv,({theme:t})=>t.transitions.easing.easeInOut,wr.childPulsate,cY,({theme:t})=>t.transitions.easing.easeInOut),hY=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiTouchRipple"}),{center:d=!1,classes:h={},className:f}=l,b=Se(l,iY),[m,v]=R.useState([]),C=R.useRef(0),_=R.useRef(null);R.useEffect(()=>{_.current&&(_.current(),_.current=null)},[m]);const A=R.useRef(!1),S=R.useRef(null),M=R.useRef(null),I=R.useRef(null);R.useEffect(()=>()=>{clearTimeout(S.current)},[]);const U=R.useCallback(q=>{const{pulsate:K,rippleX:J,rippleY:H,rippleSize:F,cb:X}=q;v(ee=>[...ee,T(uY,{classes:{ripple:Te(h.ripple,wr.ripple),rippleVisible:Te(h.rippleVisible,wr.rippleVisible),ripplePulsate:Te(h.ripplePulsate,wr.ripplePulsate),child:Te(h.child,wr.child),childLeaving:Te(h.childLeaving,wr.childLeaving),childPulsate:Te(h.childPulsate,wr.childPulsate)},timeout:jv,pulsate:K,rippleX:J,rippleY:H,rippleSize:F},C.current)]),C.current+=1,_.current=X},[h]),N=R.useCallback((q={},K={},J=()=>{})=>{const{pulsate:H=!1,center:F=d||K.pulsate,fakeElement:X=!1}=K;if((q==null?void 0:q.type)==="mousedown"&&A.current){A.current=!1;return}(q==null?void 0:q.type)==="touchstart"&&(A.current=!0);const ee=X?null:I.current,ce=ee?ee.getBoundingClientRect():{width:0,height:0,left:0,top:0};let ke,ge,fe;if(F||q===void 0||q.clientX===0&&q.clientY===0||!q.clientX&&!q.touches)ke=Math.round(ce.width/2),ge=Math.round(ce.height/2);else{const{clientX:he,clientY:ve}=q.touches&&q.touches.length>0?q.touches[0]:q;ke=Math.round(he-ce.left),ge=Math.round(ve-ce.top)}if(F)fe=Math.sqrt((2*ce.width**2+ce.height**2)/3),fe%2===0&&(fe+=1);else{const he=Math.max(Math.abs((ee?ee.clientWidth:0)-ke),ke)*2+2,ve=Math.max(Math.abs((ee?ee.clientHeight:0)-ge),ge)*2+2;fe=Math.sqrt(he**2+ve**2)}q!=null&&q.touches?M.current===null&&(M.current=()=>{U({pulsate:H,rippleX:ke,rippleY:ge,rippleSize:fe,cb:J})},S.current=setTimeout(()=>{M.current&&(M.current(),M.current=null)},sY)):U({pulsate:H,rippleX:ke,rippleY:ge,rippleSize:fe,cb:J})},[d,U]),O=R.useCallback(()=>{N({},{pulsate:!0})},[N]),L=R.useCallback((q,K)=>{if(clearTimeout(S.current),(q==null?void 0:q.type)==="touchend"&&M.current){M.current(),M.current=null,S.current=setTimeout(()=>{L(q,K)});return}M.current=null,v(J=>J.length>0?J.slice(1):J),_.current=K},[]);return R.useImperativeHandle(i,()=>({pulsate:O,start:N,stop:L}),[O,N,L]),T(dY,G({className:Te(wr.root,h.root,f),ref:I},b,{children:T(ZK,{component:null,exit:!0,children:m})}))}),pY=hY;function fY(t){return Ve("MuiButtonBase",t)}const gY=Ue("MuiButtonBase",["root","disabled","focusVisible"]),mY=gY,bY=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],kY=t=>{const{disabled:o,focusVisible:i,focusVisibleClassName:l,classes:d}=t,f=Ge({root:["root",o&&"disabled",i&&"focusVisible"]},fY,d);return i&&l&&(f.root+=` ${l}`),f},wY=Ce("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${mY.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),vY=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiButtonBase"}),{action:d,centerRipple:h=!1,children:f,className:b,component:m="button",disabled:v=!1,disableRipple:C=!1,disableTouchRipple:_=!1,focusRipple:A=!1,LinkComponent:S="a",onBlur:M,onClick:I,onContextMenu:U,onDragLeave:N,onFocus:O,onFocusVisible:L,onKeyDown:q,onKeyUp:K,onMouseDown:J,onMouseLeave:H,onMouseUp:F,onTouchEnd:X,onTouchMove:ee,onTouchStart:ce,tabIndex:ke=0,TouchRippleProps:ge,touchRippleRef:fe,type:he}=l,ve=Se(l,bY),De=R.useRef(null),oe=R.useRef(null),se=Ln(oe,fe),{isFocusVisibleRef:re,onFocus:_e,onBlur:Re,ref:Ee}=pC(),[Le,tt]=R.useState(!1);v&&Le&&tt(!1),R.useImperativeHandle(d,()=>({focusVisible:()=>{tt(!0),De.current.focus()}}),[]);const[Xe,We]=R.useState(!1);R.useEffect(()=>{We(!0)},[]);const Gt=Xe&&!C&&!v;R.useEffect(()=>{Le&&A&&!C&&Xe&&oe.current.pulsate()},[C,A,Le,Xe]);function Ye(me,dt,Me=_){return Gl(Xn=>(dt&&dt(Xn),!Me&&oe.current&&oe.current[me](Xn),!0))}const wt=Ye("start",J),je=Ye("stop",U),et=Ye("stop",N),xn=Ye("stop",F),Ze=Ye("stop",me=>{Le&&me.preventDefault(),H&&H(me)}),mn=Ye("start",ce),Ke=Ye("stop",X),st=Ye("stop",ee),an=Ye("stop",me=>{Re(me),re.current===!1&&tt(!1),M&&M(me)},!1),nn=Gl(me=>{De.current||(De.current=me.currentTarget),_e(me),re.current===!0&&(tt(!0),L&&L(me)),O&&O(me)}),vt=()=>{const me=De.current;return m&&m!=="button"&&!(me.tagName==="A"&&me.href)},nt=R.useRef(!1),Nt=Gl(me=>{A&&!nt.current&&Le&&oe.current&&me.key===" "&&(nt.current=!0,oe.current.stop(me,()=>{oe.current.start(me)})),me.target===me.currentTarget&&vt()&&me.key===" "&&me.preventDefault(),q&&q(me),me.target===me.currentTarget&&vt()&&me.key==="Enter"&&!v&&(me.preventDefault(),I&&I(me))}),Bt=Gl(me=>{A&&me.key===" "&&oe.current&&Le&&!me.defaultPrevented&&(nt.current=!1,oe.current.stop(me,()=>{oe.current.pulsate(me)})),K&&K(me),I&&me.target===me.currentTarget&&vt()&&me.key===" "&&!me.defaultPrevented&&I(me)});let Et=m;Et==="button"&&(ve.href||ve.to)&&(Et=S);const Mn={};Et==="button"?(Mn.type=he===void 0?"button":he,Mn.disabled=v):(!ve.href&&!ve.to&&(Mn.role="button"),v&&(Mn["aria-disabled"]=v));const Qt=Ln(i,Ee,De),Zt=G({},l,{centerRipple:h,component:m,disabled:v,disableRipple:C,disableTouchRipple:_,focusRipple:A,tabIndex:ke,focusVisible:Le}),ct=kY(Zt);return ue(wY,G({as:Et,className:Te(ct.root,b),ownerState:Zt,onBlur:an,onClick:I,onContextMenu:je,onFocus:nn,onKeyDown:Nt,onKeyUp:Bt,onMouseDown:wt,onMouseLeave:Ze,onMouseUp:xn,onDragLeave:et,onTouchEnd:Ke,onTouchMove:st,onTouchStart:mn,ref:Qt,tabIndex:v?-1:ke,type:he},Mn,ve,{children:[f,Gt?T(pY,G({ref:se,center:h},ge)):null]}))}),gu=vY;function yY(t){return Ve("MuiAlert",t)}const CY=Ue("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),vI=CY;function AY(t){return Ve("MuiIconButton",t)}const _Y=Ue("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),xY=_Y,EY=["edge","children","className","color","disabled","disableFocusRipple","size"],SY=t=>{const{classes:o,disabled:i,color:l,edge:d,size:h}=t,f={root:["root",i&&"disabled",l!=="default"&&`color${Be(l)}`,d&&`edge${Be(d)}`,`size${Be(h)}`]};return Ge(f,AY,o)},DY=Ce(gu,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,i.color!=="default"&&o[`color${Be(i.color)}`],i.edge&&o[`edge${Be(i.edge)}`],o[`size${Be(i.size)}`]]}})(({theme:t,ownerState:o})=>G({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:_n(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.edge==="start"&&{marginLeft:o.size==="small"?-3:-12},o.edge==="end"&&{marginRight:o.size==="small"?-3:-12}),({theme:t,ownerState:o})=>{var i;const l=(i=(t.vars||t).palette)==null?void 0:i[o.color];return G({},o.color==="inherit"&&{color:"inherit"},o.color!=="inherit"&&o.color!=="default"&&G({color:l==null?void 0:l.main},!o.disableRipple&&{"&:hover":G({},l&&{backgroundColor:t.vars?`rgba(${l.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:_n(l.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),o.size==="small"&&{padding:5,fontSize:t.typography.pxToRem(18)},o.size==="large"&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${xY.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}),TY=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiIconButton"}),{edge:d=!1,children:h,className:f,color:b="default",disabled:m=!1,disableFocusRipple:v=!1,size:C="medium"}=l,_=Se(l,EY),A=G({},l,{edge:d,color:b,disabled:m,disableFocusRipple:v,size:C}),S=SY(A);return T(DY,G({className:Te(S.root,f),centerRipple:!0,focusRipple:!v,disabled:m,ref:i,ownerState:A},_,{children:h}))}),_p=TY,IY=Ra(T("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),MY=Ra(T("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),PY=Ra(T("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),NY=Ra(T("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),BY=Ra(T("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),RY=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],OY=t=>{const{variant:o,color:i,severity:l,classes:d}=t,h={root:["root",`${o}${Be(i||l)}`,`${o}`],icon:["icon"],message:["message"],action:["action"]};return Ge(h,yY,d)},LY=Ce(Oa,{name:"MuiAlert",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,o[i.variant],o[`${i.variant}${Be(i.color||i.severity)}`]]}})(({theme:t,ownerState:o})=>{const i=t.palette.mode==="light"?Bv:Rv,l=t.palette.mode==="light"?Rv:Bv,d=o.color||o.severity;return G({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},d&&o.variant==="standard"&&{color:t.vars?t.vars.palette.Alert[`${d}Color`]:i(t.palette[d].light,.6),backgroundColor:t.vars?t.vars.palette.Alert[`${d}StandardBg`]:l(t.palette[d].light,.9),[`& .${vI.icon}`]:t.vars?{color:t.vars.palette.Alert[`${d}IconColor`]}:{color:t.palette[d].main}},d&&o.variant==="outlined"&&{color:t.vars?t.vars.palette.Alert[`${d}Color`]:i(t.palette[d].light,.6),border:`1px solid ${(t.vars||t).palette[d].light}`,[`& .${vI.icon}`]:t.vars?{color:t.vars.palette.Alert[`${d}IconColor`]}:{color:t.palette[d].main}},d&&o.variant==="filled"&&G({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert[`${d}FilledColor`],backgroundColor:t.vars.palette.Alert[`${d}FilledBg`]}:{backgroundColor:t.palette.mode==="dark"?t.palette[d].dark:t.palette[d].main,color:t.palette.getContrastText(t.palette[d].main)}))}),zY=Ce("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(t,o)=>o.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),jY=Ce("div",{name:"MuiAlert",slot:"Message",overridesResolver:(t,o)=>o.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),yI=Ce("div",{name:"MuiAlert",slot:"Action",overridesResolver:(t,o)=>o.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),CI={success:T(IY,{fontSize:"inherit"}),warning:T(MY,{fontSize:"inherit"}),error:T(PY,{fontSize:"inherit"}),info:T(NY,{fontSize:"inherit"})},FY=R.forwardRef(function(o,i){var l,d,h,f,b,m;const v=He({props:o,name:"MuiAlert"}),{action:C,children:_,className:A,closeText:S="Close",color:M,components:I={},componentsProps:U={},icon:N,iconMapping:O=CI,onClose:L,role:q="alert",severity:K="success",slotProps:J={},slots:H={},variant:F="standard"}=v,X=Se(v,RY),ee=G({},v,{color:M,severity:K,variant:F}),ce=OY(ee),ke=(l=(d=H.closeButton)!=null?d:I.CloseButton)!=null?l:_p,ge=(h=(f=H.closeIcon)!=null?f:I.CloseIcon)!=null?h:BY,fe=(b=J.closeButton)!=null?b:U.closeButton,he=(m=J.closeIcon)!=null?m:U.closeIcon;return ue(LY,G({role:q,elevation:0,ownerState:ee,className:Te(ce.root,A),ref:i},X,{children:[N!==!1?T(zY,{ownerState:ee,className:ce.icon,children:N||O[K]||CI[K]}):null,T(jY,{ownerState:ee,className:ce.message,children:_}),C!=null?T(yI,{ownerState:ee,className:ce.action,children:C}):null,C==null&&L?T(yI,{ownerState:ee,className:ce.action,children:T(ke,G({size:"small","aria-label":S,title:S,color:"inherit",onClick:L},fe,{children:T(ge,G({fontSize:"small"},he))}))}):null]}))}),In=FY;function $Y(t){return Ve("MuiTypography",t)}Ue("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const VY=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],UY=t=>{const{align:o,gutterBottom:i,noWrap:l,paragraph:d,variant:h,classes:f}=t,b={root:["root",h,t.align!=="inherit"&&`align${Be(o)}`,i&&"gutterBottom",l&&"noWrap",d&&"paragraph"]};return Ge(b,$Y,f)},HY=Ce("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,i.variant&&o[i.variant],i.align!=="inherit"&&o[`align${Be(i.align)}`],i.noWrap&&o.noWrap,i.gutterBottom&&o.gutterBottom,i.paragraph&&o.paragraph]}})(({theme:t,ownerState:o})=>G({margin:0},o.variant&&t.typography[o.variant],o.align!=="inherit"&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16})),AI={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},WY={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},qY=t=>WY[t]||t,GY=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiTypography"}),d=qY(l.color),h=xC(G({},l,{color:d})),{align:f="inherit",className:b,component:m,gutterBottom:v=!1,noWrap:C=!1,paragraph:_=!1,variant:A="body1",variantMapping:S=AI}=h,M=Se(h,VY),I=G({},h,{align:f,color:d,className:b,component:m,gutterBottom:v,noWrap:C,paragraph:_,variant:A,variantMapping:S}),U=m||(_?"p":S[A]||AI[A])||"span",N=UY(I);return T(HY,G({as:U,ref:i,ownerState:I,className:Te(N.root,b)},M))}),Je=GY;function KY(t){return Ve("MuiAppBar",t)}Ue("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const YY=["className","color","enableColorOnDark","position"],QY=t=>{const{color:o,position:i,classes:l}=t,d={root:["root",`color${Be(o)}`,`position${Be(i)}`]};return Ge(d,KY,l)},eg=(t,o)=>t?`${t==null?void 0:t.replace(")","")}, ${o})`:o,ZY=Ce(Oa,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,o[`position${Be(i.position)}`],o[`color${Be(i.color)}`]]}})(({theme:t,ownerState:o})=>{const i=t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[900];return G({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},o.position==="fixed"&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},o.position==="absolute"&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},o.position==="sticky"&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},o.position==="static"&&{position:"static"},o.position==="relative"&&{position:"relative"},!t.vars&&G({},o.color==="default"&&{backgroundColor:i,color:t.palette.getContrastText(i)},o.color&&o.color!=="default"&&o.color!=="inherit"&&o.color!=="transparent"&&{backgroundColor:t.palette[o.color].main,color:t.palette[o.color].contrastText},o.color==="inherit"&&{color:"inherit"},t.palette.mode==="dark"&&!o.enableColorOnDark&&{backgroundColor:null,color:null},o.color==="transparent"&&G({backgroundColor:"transparent",color:"inherit"},t.palette.mode==="dark"&&{backgroundImage:"none"})),t.vars&&G({},o.color==="default"&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette.AppBar.defaultBg:eg(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":o.enableColorOnDark?t.vars.palette.text.primary:eg(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},o.color&&!o.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette[o.color].main:eg(t.vars.palette.AppBar.darkBg,t.vars.palette[o.color].main),"--AppBar-color":o.enableColorOnDark?t.vars.palette[o.color].contrastText:eg(t.vars.palette.AppBar.darkColor,t.vars.palette[o.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:o.color==="inherit"?"inherit":"var(--AppBar-color)"},o.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),JY=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiAppBar"}),{className:d,color:h="primary",enableColorOnDark:f=!1,position:b="fixed"}=l,m=Se(l,YY),v=G({},l,{color:h,position:b,enableColorOnDark:f}),C=QY(v);return T(ZY,G({square:!0,component:"header",ownerState:v,elevation:4,className:Te(C.root,d,b==="fixed"&&"mui-fixed"),ref:i},m))}),XY=JY;function mu({props:t,states:o,muiFormControl:i}){return o.reduce((l,d)=>(l[d]=t[d],i&&typeof t[d]>"u"&&(l[d]=i[d]),l),{})}const eQ=R.createContext(void 0),BC=eQ;function bu(){return R.useContext(BC)}function GN(t){return T(lq,G({},t,{defaultTheme:vb}))}function _I(t){return t!=null&&!(Array.isArray(t)&&t.length===0)}function RC(t,o=!1){return t&&(_I(t.value)&&t.value!==""||o&&_I(t.defaultValue)&&t.defaultValue!=="")}function tQ(t){return t.startAdornment}function nQ(t){return Ve("MuiInputBase",t)}const oQ=Ue("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),iu=oQ,rQ=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],Cb=(t,o)=>{const{ownerState:i}=t;return[o.root,i.formControl&&o.formControl,i.startAdornment&&o.adornedStart,i.endAdornment&&o.adornedEnd,i.error&&o.error,i.size==="small"&&o.sizeSmall,i.multiline&&o.multiline,i.color&&o[`color${Be(i.color)}`],i.fullWidth&&o.fullWidth,i.hiddenLabel&&o.hiddenLabel]},Ab=(t,o)=>{const{ownerState:i}=t;return[o.input,i.size==="small"&&o.inputSizeSmall,i.multiline&&o.inputMultiline,i.type==="search"&&o.inputTypeSearch,i.startAdornment&&o.inputAdornedStart,i.endAdornment&&o.inputAdornedEnd,i.hiddenLabel&&o.inputHiddenLabel]},iQ=t=>{const{classes:o,color:i,disabled:l,error:d,endAdornment:h,focused:f,formControl:b,fullWidth:m,hiddenLabel:v,multiline:C,readOnly:_,size:A,startAdornment:S,type:M}=t,I={root:["root",`color${Be(i)}`,l&&"disabled",d&&"error",m&&"fullWidth",f&&"focused",b&&"formControl",A==="small"&&"sizeSmall",C&&"multiline",S&&"adornedStart",h&&"adornedEnd",v&&"hiddenLabel",_&&"readOnly"],input:["input",l&&"disabled",M==="search"&&"inputTypeSearch",C&&"inputMultiline",A==="small"&&"inputSizeSmall",v&&"inputHiddenLabel",S&&"inputAdornedStart",h&&"inputAdornedEnd",_&&"readOnly"]};return Ge(I,nQ,o)},_b=Ce("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Cb})(({theme:t,ownerState:o})=>G({},t.typography.body1,{color:(t.vars||t).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${iu.disabled}`]:{color:(t.vars||t).palette.text.disabled,cursor:"default"}},o.multiline&&G({padding:"4px 0 5px"},o.size==="small"&&{paddingTop:1}),o.fullWidth&&{width:"100%"})),xb=Ce("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Ab})(({theme:t,ownerState:o})=>{const i=t.palette.mode==="light",l=G({color:"currentColor"},t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:i?.42:.5},{transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})}),d={opacity:"0 !important"},h=t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:i?.42:.5};return G({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${iu.formControl} &`]:{"&::-webkit-input-placeholder":d,"&::-moz-placeholder":d,"&:-ms-input-placeholder":d,"&::-ms-input-placeholder":d,"&:focus::-webkit-input-placeholder":h,"&:focus::-moz-placeholder":h,"&:focus:-ms-input-placeholder":h,"&:focus::-ms-input-placeholder":h},[`&.${iu.disabled}`]:{opacity:1,WebkitTextFillColor:(t.vars||t).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},o.size==="small"&&{paddingTop:1},o.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},o.type==="search"&&{MozAppearance:"textfield"})}),sQ=T(GN,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),aQ=R.forwardRef(function(o,i){var l;const d=He({props:o,name:"MuiInputBase"}),{"aria-describedby":h,autoComplete:f,autoFocus:b,className:m,components:v={},componentsProps:C={},defaultValue:_,disabled:A,disableInjectingGlobalStyles:S,endAdornment:M,fullWidth:I=!1,id:U,inputComponent:N="input",inputProps:O={},inputRef:L,maxRows:q,minRows:K,multiline:J=!1,name:H,onBlur:F,onChange:X,onClick:ee,onFocus:ce,onKeyDown:ke,onKeyUp:ge,placeholder:fe,readOnly:he,renderSuffix:ve,rows:De,slotProps:oe={},slots:se={},startAdornment:re,type:_e="text",value:Re}=d,Ee=Se(d,rQ),Le=O.value!=null?O.value:Re,{current:tt}=R.useRef(Le!=null),Xe=R.useRef(),We=R.useCallback(ct=>{},[]),Gt=Ln(Xe,L,O.ref,We),[Ye,wt]=R.useState(!1),je=bu(),et=mu({props:d,muiFormControl:je,states:["color","disabled","error","hiddenLabel","size","required","filled"]});et.focused=je?je.focused:Ye,R.useEffect(()=>{!je&&A&&Ye&&(wt(!1),F&&F())},[je,A,Ye,F]);const xn=je&&je.onFilled,Ze=je&&je.onEmpty,mn=R.useCallback(ct=>{RC(ct)?xn&&xn():Ze&&Ze()},[xn,Ze]);Fi(()=>{tt&&mn({value:Le})},[Le,mn,tt]);const Ke=ct=>{if(et.disabled){ct.stopPropagation();return}ce&&ce(ct),O.onFocus&&O.onFocus(ct),je&&je.onFocus?je.onFocus(ct):wt(!0)},st=ct=>{F&&F(ct),O.onBlur&&O.onBlur(ct),je&&je.onBlur?je.onBlur(ct):wt(!1)},an=(ct,...me)=>{if(!tt){const dt=ct.target||Xe.current;if(dt==null)throw new Error(Da(1));mn({value:dt.value})}O.onChange&&O.onChange(ct,...me),X&&X(ct,...me)};R.useEffect(()=>{mn(Xe.current)},[]);const nn=ct=>{Xe.current&&ct.currentTarget===ct.target&&Xe.current.focus(),ee&&ee(ct)};let vt=N,nt=O;J&&vt==="input"&&(De?nt=G({type:void 0,minRows:De,maxRows:De},nt):nt=G({type:void 0,maxRows:q,minRows:K},nt),vt=LK);const Nt=ct=>{mn(ct.animationName==="mui-auto-fill-cancel"?Xe.current:{value:"x"})};R.useEffect(()=>{je&&je.setAdornedStart(!!re)},[je,re]);const Bt=G({},d,{color:et.color||"primary",disabled:et.disabled,endAdornment:M,error:et.error,focused:et.focused,formControl:je,fullWidth:I,hiddenLabel:et.hiddenLabel,multiline:J,size:et.size,startAdornment:re,type:_e}),Et=iQ(Bt),Mn=se.root||v.Root||_b,Qt=oe.root||C.root||{},Zt=se.input||v.Input||xb;return nt=G({},nt,(l=oe.input)!=null?l:C.input),ue(R.Fragment,{children:[!S&&sQ,ue(Mn,G({},Qt,!ou(Mn)&&{ownerState:G({},Bt,Qt.ownerState)},{ref:i,onClick:nn},Ee,{className:Te(Et.root,Qt.className,m,he&&"MuiInputBase-readOnly"),children:[re,T(BC.Provider,{value:null,children:T(Zt,G({ownerState:Bt,"aria-invalid":et.error,"aria-describedby":h,autoComplete:f,autoFocus:b,defaultValue:_,disabled:et.disabled,id:U,onAnimationStart:Nt,name:H,placeholder:fe,readOnly:he,required:et.required,rows:De,value:Le,onKeyDown:ke,onKeyUp:ge,type:_e},nt,!ou(Zt)&&{as:vt,ownerState:G({},Bt,nt.ownerState)},{ref:Gt,className:Te(Et.input,nt.className,he&&"MuiInputBase-readOnly"),onBlur:st,onChange:an,onFocus:Ke}))}),M,ve?ve(G({},et,{startAdornment:re})):null]}))]})}),OC=aQ;function lQ(t){return Ve("MuiInput",t)}const cQ=G({},iu,Ue("MuiInput",["root","underline","input"])),_h=cQ;function dQ(t){return Ve("MuiOutlinedInput",t)}const uQ=G({},iu,Ue("MuiOutlinedInput",["root","notchedOutline","input"])),Zs=uQ;function hQ(t){return Ve("MuiFilledInput",t)}const pQ=G({},iu,Ue("MuiFilledInput",["root","underline","input"])),Rl=pQ,fQ=Ra(T("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),gQ=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],mQ={entering:{opacity:1},entered:{opacity:1}},bQ=R.forwardRef(function(o,i){const l=Ba(),d={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{addEndListener:h,appear:f=!0,children:b,easing:m,in:v,onEnter:C,onEntered:_,onEntering:A,onExit:S,onExited:M,onExiting:I,style:U,timeout:N=d,TransitionComponent:O=IC}=o,L=Se(o,gQ),q=R.useRef(null),K=Ln(q,b.ref,i),J=fe=>he=>{if(fe){const ve=q.current;he===void 0?fe(ve):fe(ve,he)}},H=J(A),F=J((fe,he)=>{NC(fe);const ve=ru({style:U,timeout:N,easing:m},{mode:"enter"});fe.style.webkitTransition=l.transitions.create("opacity",ve),fe.style.transition=l.transitions.create("opacity",ve),C&&C(fe,he)}),X=J(_),ee=J(I),ce=J(fe=>{const he=ru({style:U,timeout:N,easing:m},{mode:"exit"});fe.style.webkitTransition=l.transitions.create("opacity",he),fe.style.transition=l.transitions.create("opacity",he),S&&S(fe)}),ke=J(M);return T(O,G({appear:f,in:v,nodeRef:q,onEnter:F,onEntered:X,onEntering:H,onExit:ce,onExited:ke,onExiting:ee,addEndListener:fe=>{h&&h(q.current,fe)},timeout:N},L,{children:(fe,he)=>R.cloneElement(b,G({style:G({opacity:0,visibility:fe==="exited"&&!v?"hidden":void 0},mQ[fe],U,b.props.style),ref:K},he))}))}),KN=bQ;function kQ(t){return Ve("MuiBackdrop",t)}Ue("MuiBackdrop",["root","invisible"]);const wQ=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],vQ=t=>{const{classes:o,invisible:i}=t;return Ge({root:["root",i&&"invisible"]},kQ,o)},yQ=Ce("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,i.invisible&&o.invisible]}})(({ownerState:t})=>G({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},t.invisible&&{backgroundColor:"transparent"})),CQ=R.forwardRef(function(o,i){var l,d,h;const f=He({props:o,name:"MuiBackdrop"}),{children:b,className:m,component:v="div",components:C={},componentsProps:_={},invisible:A=!1,open:S,slotProps:M={},slots:I={},TransitionComponent:U=KN,transitionDuration:N}=f,O=Se(f,wQ),L=G({},f,{component:v,invisible:A}),q=vQ(L),K=(l=M.root)!=null?l:_.root;return T(U,G({in:S,timeout:N},O,{children:T(yQ,G({"aria-hidden":!0},K,{as:(d=(h=I.root)!=null?h:C.Root)!=null?d:v,className:Te(q.root,m,K==null?void 0:K.className),ownerState:G({},L,K==null?void 0:K.ownerState),classes:q,ref:i,children:b}))}))}),YN=CQ,AQ=TC(),_Q=pG({defaultTheme:AQ,defaultClassName:"MuiBox-root",generateClassName:gC.generate}),xp=_Q;function xQ(t){return Ve("MuiButton",t)}const EQ=Ue("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),tg=EQ,SQ=R.createContext({}),DQ=SQ,TQ=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],IQ=t=>{const{color:o,disableElevation:i,fullWidth:l,size:d,variant:h,classes:f}=t,b={root:["root",h,`${h}${Be(o)}`,`size${Be(d)}`,`${h}Size${Be(d)}`,o==="inherit"&&"colorInherit",i&&"disableElevation",l&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${Be(d)}`],endIcon:["endIcon",`iconSize${Be(d)}`]},m=Ge(b,xQ,f);return G({},f,m)},QN=t=>G({},t.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},t.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},t.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),MQ=Ce(gu,{shouldForwardProp:t=>Fo(t)||t==="classes",name:"MuiButton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,o[i.variant],o[`${i.variant}${Be(i.color)}`],o[`size${Be(i.size)}`],o[`${i.variant}Size${Be(i.size)}`],i.color==="inherit"&&o.colorInherit,i.disableElevation&&o.disableElevation,i.fullWidth&&o.fullWidth]}})(({theme:t,ownerState:o})=>{var i,l;return G({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":G({textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:_n(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="text"&&o.color!=="inherit"&&{backgroundColor:t.vars?`rgba(${t.vars.palette[o.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:_n(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="outlined"&&o.color!=="inherit"&&{border:`1px solid ${(t.vars||t).palette[o.color].main}`,backgroundColor:t.vars?`rgba(${t.vars.palette[o.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:_n(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="contained"&&{backgroundColor:(t.vars||t).palette.grey.A100,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},o.variant==="contained"&&o.color!=="inherit"&&{backgroundColor:(t.vars||t).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[o.color].main}}),"&:active":G({},o.variant==="contained"&&{boxShadow:(t.vars||t).shadows[8]}),[`&.${tg.focusVisible}`]:G({},o.variant==="contained"&&{boxShadow:(t.vars||t).shadows[6]}),[`&.${tg.disabled}`]:G({color:(t.vars||t).palette.action.disabled},o.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},o.variant==="contained"&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},o.variant==="text"&&{padding:"6px 8px"},o.variant==="text"&&o.color!=="inherit"&&{color:(t.vars||t).palette[o.color].main},o.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},o.variant==="outlined"&&o.color!=="inherit"&&{color:(t.vars||t).palette[o.color].main,border:t.vars?`1px solid rgba(${t.vars.palette[o.color].mainChannel} / 0.5)`:`1px solid ${_n(t.palette[o.color].main,.5)}`},o.variant==="contained"&&{color:t.vars?t.vars.palette.text.primary:(i=(l=t.palette).getContrastText)==null?void 0:i.call(l,t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],boxShadow:(t.vars||t).shadows[2]},o.variant==="contained"&&o.color!=="inherit"&&{color:(t.vars||t).palette[o.color].contrastText,backgroundColor:(t.vars||t).palette[o.color].main},o.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},o.size==="small"&&o.variant==="text"&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},o.size==="large"&&o.variant==="text"&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},o.size==="small"&&o.variant==="outlined"&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},o.size==="large"&&o.variant==="outlined"&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},o.size==="small"&&o.variant==="contained"&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},o.size==="large"&&o.variant==="contained"&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})},({ownerState:t})=>t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${tg.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${tg.disabled}`]:{boxShadow:"none"}}),PQ=Ce("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.startIcon,o[`iconSize${Be(i.size)}`]]}})(({ownerState:t})=>G({display:"inherit",marginRight:8,marginLeft:-4},t.size==="small"&&{marginLeft:-2},QN(t))),NQ=Ce("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.endIcon,o[`iconSize${Be(i.size)}`]]}})(({ownerState:t})=>G({display:"inherit",marginRight:-4,marginLeft:8},t.size==="small"&&{marginRight:-2},QN(t))),BQ=R.forwardRef(function(o,i){const l=R.useContext(DQ),d=fC(l,o),h=He({props:d,name:"MuiButton"}),{children:f,color:b="primary",component:m="button",className:v,disabled:C=!1,disableElevation:_=!1,disableFocusRipple:A=!1,endIcon:S,focusVisibleClassName:M,fullWidth:I=!1,size:U="medium",startIcon:N,type:O,variant:L="text"}=h,q=Se(h,TQ),K=G({},h,{color:b,component:m,disabled:C,disableElevation:_,disableFocusRipple:A,fullWidth:I,size:U,type:O,variant:L}),J=IQ(K),H=N&&T(PQ,{className:J.startIcon,ownerState:K,children:N}),F=S&&T(NQ,{className:J.endIcon,ownerState:K,children:S});return ue(MQ,G({ownerState:K,className:Te(l.className,J.root,v),component:m,disabled:C,focusRipple:!A,focusVisibleClassName:Te(J.focusVisible,M),ref:i,type:O},q,{classes:J,children:[H,f,F]}))}),It=BQ;function RQ(t){return Ve("MuiCard",t)}Ue("MuiCard",["root"]);const OQ=["className","raised"],LQ=t=>{const{classes:o}=t;return Ge({root:["root"]},RQ,o)},zQ=Ce(Oa,{name:"MuiCard",slot:"Root",overridesResolver:(t,o)=>o.root})(()=>({overflow:"hidden"})),jQ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiCard"}),{className:d,raised:h=!1}=l,f=Se(l,OQ),b=G({},l,{raised:h}),m=LQ(b);return T(zQ,G({className:Te(m.root,d),elevation:h?8:void 0,ref:i,ownerState:b},f))}),ZN=jQ;function FQ(t){return Ve("MuiCardActions",t)}Ue("MuiCardActions",["root","spacing"]);const $Q=["disableSpacing","className"],VQ=t=>{const{classes:o,disableSpacing:i}=t;return Ge({root:["root",!i&&"spacing"]},FQ,o)},UQ=Ce("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,!i.disableSpacing&&o.spacing]}})(({ownerState:t})=>G({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),HQ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiCardActions"}),{disableSpacing:d=!1,className:h}=l,f=Se(l,$Q),b=G({},l,{disableSpacing:d}),m=VQ(b);return T(UQ,G({className:Te(m.root,h),ownerState:b,ref:i},f))}),Fv=HQ;function WQ(t){return Ve("MuiCardContent",t)}Ue("MuiCardContent",["root"]);const qQ=["className","component"],GQ=t=>{const{classes:o}=t;return Ge({root:["root"]},WQ,o)},KQ=Ce("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,o)=>o.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),YQ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiCardContent"}),{className:d,component:h="div"}=l,f=Se(l,qQ),b=G({},l,{component:h}),m=GQ(b);return T(KQ,G({as:h,className:Te(m.root,d),ownerState:b,ref:i},f))}),JN=YQ;function QQ(t){return Ve("MuiCardHeader",t)}const ZQ=Ue("MuiCardHeader",["root","avatar","action","content","title","subheader"]),xI=ZQ,JQ=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],XQ=t=>{const{classes:o}=t;return Ge({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},QQ,o)},eZ=Ce("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(t,o)=>G({[`& .${xI.title}`]:o.title,[`& .${xI.subheader}`]:o.subheader},o.root)})({display:"flex",alignItems:"center",padding:16}),tZ=Ce("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(t,o)=>o.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),nZ=Ce("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(t,o)=>o.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),oZ=Ce("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(t,o)=>o.content})({flex:"1 1 auto"}),rZ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiCardHeader"}),{action:d,avatar:h,className:f,component:b="div",disableTypography:m=!1,subheader:v,subheaderTypographyProps:C,title:_,titleTypographyProps:A}=l,S=Se(l,JQ),M=G({},l,{component:b,disableTypography:m}),I=XQ(M);let U=_;U!=null&&U.type!==Je&&!m&&(U=T(Je,G({variant:h?"body2":"h5",className:I.title,component:"span",display:"block"},A,{children:U})));let N=v;return N!=null&&N.type!==Je&&!m&&(N=T(Je,G({variant:h?"body2":"body1",className:I.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:N}))),ue(eZ,G({className:Te(I.root,f),as:b,ref:i,ownerState:M},S,{children:[h&&T(tZ,{className:I.avatar,ownerState:M,children:h}),ue(oZ,{className:I.content,ownerState:M,children:[U,N]}),d&&T(nZ,{className:I.action,ownerState:M,children:d})]}))}),XN=rZ;function iZ(t){return Ve("MuiCardMedia",t)}Ue("MuiCardMedia",["root","media","img"]);const sZ=["children","className","component","image","src","style"],aZ=t=>{const{classes:o,isMediaComponent:i,isImageComponent:l}=t;return Ge({root:["root",i&&"media",l&&"img"]},iZ,o)},lZ=Ce("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t,{isMediaComponent:l,isImageComponent:d}=i;return[o.root,l&&o.media,d&&o.img]}})(({ownerState:t})=>G({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})),cZ=["video","audio","picture","iframe","img"],dZ=["picture","img"],uZ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiCardMedia"}),{children:d,className:h,component:f="div",image:b,src:m,style:v}=l,C=Se(l,sZ),_=cZ.indexOf(f)!==-1,A=!_&&b?G({backgroundImage:`url("${b}")`},v):v,S=G({},l,{component:f,isMediaComponent:_,isImageComponent:dZ.indexOf(f)!==-1}),M=aZ(S);return T(lZ,G({className:Te(M.root,h),as:f,role:!_&&b?"img":void 0,ref:i,style:A,ownerState:S,src:_?b||m:void 0},C,{children:d}))}),eB=uZ;function hZ(t){return Ve("MuiCircularProgress",t)}Ue("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const pZ=["className","color","disableShrink","size","style","thickness","value","variant"];let Eb=t=>t,EI,SI,DI,TI;const Js=44,fZ=Lp(EI||(EI=Eb`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),gZ=Lp(SI||(SI=Eb`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),mZ=t=>{const{classes:o,variant:i,color:l,disableShrink:d}=t,h={root:["root",i,`color${Be(l)}`],svg:["svg"],circle:["circle",`circle${Be(i)}`,d&&"circleDisableShrink"]};return Ge(h,hZ,o)},bZ=Ce("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,o[i.variant],o[`color${Be(i.color)}`]]}})(({ownerState:t,theme:o})=>G({display:"inline-block"},t.variant==="determinate"&&{transition:o.transitions.create("transform")},t.color!=="inherit"&&{color:(o.vars||o).palette[t.color].main}),({ownerState:t})=>t.variant==="indeterminate"&&vC(DI||(DI=Eb`
      animation: ${0} 1.4s linear infinite;
    `),fZ)),kZ=Ce("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,o)=>o.svg})({display:"block"}),wZ=Ce("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.circle,o[`circle${Be(i.variant)}`],i.disableShrink&&o.circleDisableShrink]}})(({ownerState:t,theme:o})=>G({stroke:"currentColor"},t.variant==="determinate"&&{transition:o.transitions.create("stroke-dashoffset")},t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&vC(TI||(TI=Eb`
      animation: ${0} 1.4s ease-in-out infinite;
    `),gZ)),vZ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiCircularProgress"}),{className:d,color:h="primary",disableShrink:f=!1,size:b=40,style:m,thickness:v=3.6,value:C=0,variant:_="indeterminate"}=l,A=Se(l,pZ),S=G({},l,{color:h,disableShrink:f,size:b,thickness:v,value:C,variant:_}),M=mZ(S),I={},U={},N={};if(_==="determinate"){const O=2*Math.PI*((Js-v)/2);I.strokeDasharray=O.toFixed(3),N["aria-valuenow"]=Math.round(C),I.strokeDashoffset=`${((100-C)/100*O).toFixed(3)}px`,U.transform="rotate(-90deg)"}return T(bZ,G({className:Te(M.root,d),style:G({width:b,height:b},U,m),ownerState:S,ref:i,role:"progressbar"},N,A,{children:T(kZ,{className:M.svg,ownerState:S,viewBox:`${Js/2} ${Js/2} ${Js} ${Js}`,children:T(wZ,{className:M.circle,style:I,ownerState:S,cx:Js,cy:Js,r:(Js-v)/2,fill:"none",strokeWidth:v})})}))}),Fp=vZ,yZ=(t,o)=>G({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},o&&!t.vars&&{colorScheme:t.palette.mode}),CZ=t=>G({color:(t.vars||t).palette.text.primary},t.typography.body1,{backgroundColor:(t.vars||t).palette.background.default,"@media print":{backgroundColor:(t.vars||t).palette.common.white}}),AZ=(t,o=!1)=>{var i,l;const d={};o&&t.colorSchemes&&Object.entries(t.colorSchemes).forEach(([b,m])=>{var v;d[t.getColorSchemeSelector(b).replace(/\s*&/,"")]={colorScheme:(v=m.palette)==null?void 0:v.mode}});let h=G({html:yZ(t,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:G({margin:0},CZ(t),{"&::backdrop":{backgroundColor:(t.vars||t).palette.background.default}})},d);const f=(i=t.components)==null||(l=i.MuiCssBaseline)==null?void 0:l.styleOverrides;return f&&(h=[h,f]),h};function tB(t){const o=He({props:t,name:"MuiCssBaseline"}),{children:i,enableColorScheme:l=!1}=o;return ue(R.Fragment,{children:[T(GN,{styles:d=>AZ(d,l)}),i]})}const _Z=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","slotProps","slots","theme"],xZ=Ce("div",{name:"MuiModal",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,!i.open&&i.exited&&o.hidden]}})(({theme:t,ownerState:o})=>G({position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0},!o.open&&o.exited&&{visibility:"hidden"})),EZ=Ce(YN,{name:"MuiModal",slot:"Backdrop",overridesResolver:(t,o)=>o.backdrop})({zIndex:-1}),SZ=R.forwardRef(function(o,i){var l,d,h,f,b,m;const v=He({name:"MuiModal",props:o}),{BackdropComponent:C=EZ,BackdropProps:_,classes:A,className:S,closeAfterTransition:M=!1,children:I,component:U,components:N={},componentsProps:O={},disableAutoFocus:L=!1,disableEnforceFocus:q=!1,disableEscapeKeyDown:K=!1,disablePortal:J=!1,disableRestoreFocus:H=!1,disableScrollLock:F=!1,hideBackdrop:X=!1,keepMounted:ee=!1,slotProps:ce,slots:ke,theme:ge}=v,fe=Se(v,_Z),[he,ve]=R.useState(!0),De={closeAfterTransition:M,disableAutoFocus:L,disableEnforceFocus:q,disableEscapeKeyDown:K,disablePortal:J,disableRestoreFocus:H,disableScrollLock:F,hideBackdrop:X,keepMounted:ee},oe=G({},v,De,{exited:he}),se=(l=(d=ke==null?void 0:ke.root)!=null?d:N.Root)!=null?l:xZ,re=(h=(f=ke==null?void 0:ke.backdrop)!=null?f:N.Backdrop)!=null?h:C,_e=(b=ce==null?void 0:ce.root)!=null?b:O.root,Re=(m=ce==null?void 0:ce.backdrop)!=null?m:O.backdrop;return T(NK,G({slots:{root:se,backdrop:re},slotProps:{root:()=>G({},Ov(_e,oe),!ou(se)&&{as:U,theme:ge},{className:Te(S,_e==null?void 0:_e.className,A==null?void 0:A.root,!oe.open&&oe.exited&&(A==null?void 0:A.hidden))}),backdrop:()=>G({},_,Ov(Re,oe),{className:Te(Re==null?void 0:Re.className,A==null?void 0:A.backdrop)})},onTransitionEnter:()=>ve(!1),onTransitionExited:()=>ve(!0),ref:i},fe,De,{children:I}))}),LC=SZ;function DZ(t){return Ve("MuiDialog",t)}const TZ=Ue("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),i0=TZ,IZ=R.createContext({}),nB=IZ,MZ=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],PZ=Ce(YN,{name:"MuiDialog",slot:"Backdrop",overrides:(t,o)=>o.backdrop})({zIndex:-1}),NZ=t=>{const{classes:o,scroll:i,maxWidth:l,fullWidth:d,fullScreen:h}=t,f={root:["root"],container:["container",`scroll${Be(i)}`],paper:["paper",`paperScroll${Be(i)}`,`paperWidth${Be(String(l))}`,d&&"paperFullWidth",h&&"paperFullScreen"]};return Ge(f,DZ,o)},BZ=Ce(LC,{name:"MuiDialog",slot:"Root",overridesResolver:(t,o)=>o.root})({"@media print":{position:"absolute !important"}}),RZ=Ce("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.container,o[`scroll${Be(i.scroll)}`]]}})(({ownerState:t})=>G({height:"100%","@media print":{height:"auto"},outline:0},t.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},t.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),OZ=Ce(Oa,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.paper,o[`scrollPaper${Be(i.scroll)}`],o[`paperWidth${Be(String(i.maxWidth))}`],i.fullWidth&&o.paperFullWidth,i.fullScreen&&o.paperFullScreen]}})(({theme:t,ownerState:o})=>G({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},o.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},o.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},o.maxWidth==="xs"&&{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`${t.breakpoints.values.xs}${t.breakpoints.unit}`,[`&.${i0.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.maxWidth&&o.maxWidth!=="xs"&&{maxWidth:`${t.breakpoints.values[o.maxWidth]}${t.breakpoints.unit}`,[`&.${i0.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[o.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${i0.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),LZ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiDialog"}),d=Ba(),h={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{"aria-describedby":f,"aria-labelledby":b,BackdropComponent:m,BackdropProps:v,children:C,className:_,disableEscapeKeyDown:A=!1,fullScreen:S=!1,fullWidth:M=!1,maxWidth:I="sm",onBackdropClick:U,onClose:N,open:O,PaperComponent:L=Oa,PaperProps:q={},scroll:K="paper",TransitionComponent:J=KN,transitionDuration:H=h,TransitionProps:F}=l,X=Se(l,MZ),ee=G({},l,{disableEscapeKeyDown:A,fullScreen:S,fullWidth:M,maxWidth:I,scroll:K}),ce=NZ(ee),ke=R.useRef(),ge=De=>{ke.current=De.target===De.currentTarget},fe=De=>{ke.current&&(ke.current=null,U&&U(De),N&&N(De,"backdropClick"))},he=hC(b),ve=R.useMemo(()=>({titleId:he}),[he]);return T(BZ,G({className:Te(ce.root,_),closeAfterTransition:!0,components:{Backdrop:PZ},componentsProps:{backdrop:G({transitionDuration:H,as:m},v)},disableEscapeKeyDown:A,onClose:N,open:O,ref:i,onClick:fe,ownerState:ee},X,{children:T(J,G({appear:!0,in:O,timeout:H,role:"presentation"},F,{children:T(RZ,{className:Te(ce.container),onMouseDown:ge,ownerState:ee,children:T(OZ,G({as:L,elevation:24,role:"dialog","aria-describedby":f,"aria-labelledby":he},q,{className:Te(ce.paper,q.className),ownerState:ee,children:T(nB.Provider,{value:ve,children:C})}))})}))}))}),$v=LZ;function zZ(t){return Ve("MuiDialogActions",t)}Ue("MuiDialogActions",["root","spacing"]);const jZ=["className","disableSpacing"],FZ=t=>{const{classes:o,disableSpacing:i}=t;return Ge({root:["root",!i&&"spacing"]},zZ,o)},$Z=Ce("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,!i.disableSpacing&&o.spacing]}})(({ownerState:t})=>G({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),VZ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiDialogActions"}),{className:d,disableSpacing:h=!1}=l,f=Se(l,jZ),b=G({},l,{disableSpacing:h}),m=FZ(b);return T($Z,G({className:Te(m.root,d),ownerState:b,ref:i},f))}),Vv=VZ;function UZ(t){return Ve("MuiDialogContent",t)}Ue("MuiDialogContent",["root","dividers"]);function HZ(t){return Ve("MuiDialogTitle",t)}const WZ=Ue("MuiDialogTitle",["root"]),qZ=WZ,GZ=["className","dividers"],KZ=t=>{const{classes:o,dividers:i}=t;return Ge({root:["root",i&&"dividers"]},UZ,o)},YZ=Ce("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,i.dividers&&o.dividers]}})(({theme:t,ownerState:o})=>G({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},o.dividers?{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}:{[`.${qZ.root} + &`]:{paddingTop:0}})),QZ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiDialogContent"}),{className:d,dividers:h=!1}=l,f=Se(l,GZ),b=G({},l,{dividers:h}),m=KZ(b);return T(YZ,G({className:Te(m.root,d),ownerState:b,ref:i},f))}),Uv=QZ;function ZZ(t){return Ve("MuiDialogContentText",t)}Ue("MuiDialogContentText",["root"]);const JZ=["children","className"],XZ=t=>{const{classes:o}=t,l=Ge({root:["root"]},ZZ,o);return G({},o,l)},eJ=Ce(Je,{shouldForwardProp:t=>Fo(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,o)=>o.root})({}),tJ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiDialogContentText"}),{className:d}=l,h=Se(l,JZ),f=XZ(h);return T(eJ,G({component:"p",variant:"body1",color:"text.secondary",ref:i,ownerState:h,className:Te(f.root,d)},l,{classes:f}))}),oB=tJ,nJ=["className","id"],oJ=t=>{const{classes:o}=t;return Ge({root:["root"]},HZ,o)},rJ=Ce(Je,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),iJ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiDialogTitle"}),{className:d,id:h}=l,f=Se(l,nJ),b=l,m=oJ(b),{titleId:v=h}=R.useContext(nB);return T(rJ,G({component:"h2",className:Te(m.root,d),ownerState:b,ref:i,variant:"h6",id:h??v},f))}),Hv=iJ;function sJ(t){return Ve("MuiDivider",t)}const aJ=Ue("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),II=aJ,lJ=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],cJ=t=>{const{absolute:o,children:i,classes:l,flexItem:d,light:h,orientation:f,textAlign:b,variant:m}=t;return Ge({root:["root",o&&"absolute",m,h&&"light",f==="vertical"&&"vertical",d&&"flexItem",i&&"withChildren",i&&f==="vertical"&&"withChildrenVertical",b==="right"&&f!=="vertical"&&"textAlignRight",b==="left"&&f!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",f==="vertical"&&"wrapperVertical"]},sJ,l)},dJ=Ce("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,i.absolute&&o.absolute,o[i.variant],i.light&&o.light,i.orientation==="vertical"&&o.vertical,i.flexItem&&o.flexItem,i.children&&o.withChildren,i.children&&i.orientation==="vertical"&&o.withChildrenVertical,i.textAlign==="right"&&i.orientation!=="vertical"&&o.textAlignRight,i.textAlign==="left"&&i.orientation!=="vertical"&&o.textAlignLeft]}})(({theme:t,ownerState:o})=>G({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},o.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},o.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:_n(t.palette.divider,.08)},o.variant==="inset"&&{marginLeft:72},o.variant==="middle"&&o.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},o.variant==="middle"&&o.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},o.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},o.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:t,ownerState:o})=>G({},o.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:t,ownerState:o})=>G({},o.children&&o.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(t.vars||t).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:t})=>G({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),uJ=Ce("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.wrapper,i.orientation==="vertical"&&o.wrapperVertical]}})(({theme:t,ownerState:o})=>G({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},o.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),hJ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiDivider"}),{absolute:d=!1,children:h,className:f,component:b=h?"div":"hr",flexItem:m=!1,light:v=!1,orientation:C="horizontal",role:_=b!=="hr"?"separator":void 0,textAlign:A="center",variant:S="fullWidth"}=l,M=Se(l,lJ),I=G({},l,{absolute:d,component:b,flexItem:m,light:v,orientation:C,role:_,textAlign:A,variant:S}),U=cJ(I);return T(dJ,G({as:b,className:Te(U.root,f),role:_,ref:i,ownerState:I},M,{children:h?T(uJ,{className:U.wrapper,ownerState:I,children:h}):null}))}),s0=hJ,pJ=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function fJ(t,o,i){const l=o.getBoundingClientRect(),d=i&&i.getBoundingClientRect(),h=ji(o);let f;if(o.fakeTransform)f=o.fakeTransform;else{const v=h.getComputedStyle(o);f=v.getPropertyValue("-webkit-transform")||v.getPropertyValue("transform")}let b=0,m=0;if(f&&f!=="none"&&typeof f=="string"){const v=f.split("(")[1].split(")")[0].split(",");b=parseInt(v[4],10),m=parseInt(v[5],10)}return t==="left"?d?`translateX(${d.right+b-l.left}px)`:`translateX(${h.innerWidth+b-l.left}px)`:t==="right"?d?`translateX(-${l.right-d.left-b}px)`:`translateX(-${l.left+l.width-b}px)`:t==="up"?d?`translateY(${d.bottom+m-l.top}px)`:`translateY(${h.innerHeight+m-l.top}px)`:d?`translateY(-${l.top-d.top+l.height-m}px)`:`translateY(-${l.top+l.height-m}px)`}function gJ(t){return typeof t=="function"?t():t}function ng(t,o,i){const l=gJ(i),d=fJ(t,o,l);d&&(o.style.webkitTransform=d,o.style.transform=d)}const mJ=R.forwardRef(function(o,i){const l=Ba(),d={enter:l.transitions.easing.easeOut,exit:l.transitions.easing.sharp},h={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{addEndListener:f,appear:b=!0,children:m,container:v,direction:C="down",easing:_=d,in:A,onEnter:S,onEntered:M,onEntering:I,onExit:U,onExited:N,onExiting:O,style:L,timeout:q=h,TransitionComponent:K=IC}=o,J=Se(o,pJ),H=R.useRef(null),F=Ln(m.ref,H,i),X=oe=>se=>{oe&&(se===void 0?oe(H.current):oe(H.current,se))},ee=X((oe,se)=>{ng(C,oe,v),NC(oe),S&&S(oe,se)}),ce=X((oe,se)=>{const re=ru({timeout:q,style:L,easing:_},{mode:"enter"});oe.style.webkitTransition=l.transitions.create("-webkit-transform",G({},re)),oe.style.transition=l.transitions.create("transform",G({},re)),oe.style.webkitTransform="none",oe.style.transform="none",I&&I(oe,se)}),ke=X(M),ge=X(O),fe=X(oe=>{const se=ru({timeout:q,style:L,easing:_},{mode:"exit"});oe.style.webkitTransition=l.transitions.create("-webkit-transform",se),oe.style.transition=l.transitions.create("transform",se),ng(C,oe,v),U&&U(oe)}),he=X(oe=>{oe.style.webkitTransition="",oe.style.transition="",N&&N(oe)}),ve=oe=>{f&&f(H.current,oe)},De=R.useCallback(()=>{H.current&&ng(C,H.current,v)},[C,v]);return R.useEffect(()=>{if(A||C==="down"||C==="right")return;const oe=sb(()=>{H.current&&ng(C,H.current,v)}),se=ji(H.current);return se.addEventListener("resize",oe),()=>{oe.clear(),se.removeEventListener("resize",oe)}},[C,A,v]),R.useEffect(()=>{A||De()},[A,De]),T(K,G({nodeRef:H,onEnter:ee,onEntered:ke,onEntering:ce,onExit:fe,onExited:he,onExiting:ge,addEndListener:ve,appear:b,in:A,timeout:q},J,{children:(oe,se)=>R.cloneElement(m,G({ref:F,style:G({visibility:oe==="exited"&&!A?"hidden":void 0},L,m.props.style)},se))}))}),bJ=mJ;function kJ(t){return Ve("MuiDrawer",t)}Ue("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const wJ=["BackdropProps"],vJ=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],rB=(t,o)=>{const{ownerState:i}=t;return[o.root,(i.variant==="permanent"||i.variant==="persistent")&&o.docked,o.modal]},yJ=t=>{const{classes:o,anchor:i,variant:l}=t,d={root:["root"],docked:[(l==="permanent"||l==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${Be(i)}`,l!=="temporary"&&`paperAnchorDocked${Be(i)}`]};return Ge(d,kJ,o)},CJ=Ce(LC,{name:"MuiDrawer",slot:"Root",overridesResolver:rB})(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer})),MI=Ce("div",{shouldForwardProp:Fo,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:rB})({flex:"0 0 auto"}),AJ=Ce(Oa,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.paper,o[`paperAnchor${Be(i.anchor)}`],i.variant!=="temporary"&&o[`paperAnchorDocked${Be(i.anchor)}`]]}})(({theme:t,ownerState:o})=>G({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},o.anchor==="left"&&{left:0},o.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="right"&&{right:0},o.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="left"&&o.variant!=="temporary"&&{borderRight:`1px solid ${(t.vars||t).palette.divider}`},o.anchor==="top"&&o.variant!=="temporary"&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`},o.anchor==="right"&&o.variant!=="temporary"&&{borderLeft:`1px solid ${(t.vars||t).palette.divider}`},o.anchor==="bottom"&&o.variant!=="temporary"&&{borderTop:`1px solid ${(t.vars||t).palette.divider}`})),iB={left:"right",right:"left",top:"down",bottom:"up"};function _J(t){return["left","right"].indexOf(t)!==-1}function xJ(t,o){return t.direction==="rtl"&&_J(o)?iB[o]:o}const EJ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiDrawer"}),d=Ba(),h={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{anchor:f="left",BackdropProps:b,children:m,className:v,elevation:C=16,hideBackdrop:_=!1,ModalProps:{BackdropProps:A}={},onClose:S,open:M=!1,PaperProps:I={},SlideProps:U,TransitionComponent:N=bJ,transitionDuration:O=h,variant:L="temporary"}=l,q=Se(l.ModalProps,wJ),K=Se(l,vJ),J=R.useRef(!1);R.useEffect(()=>{J.current=!0},[]);const H=xJ(d,f),X=G({},l,{anchor:f,elevation:C,open:M,variant:L},K),ee=yJ(X),ce=T(AJ,G({elevation:L==="temporary"?C:0,square:!0},I,{className:Te(ee.paper,I.className),ownerState:X,children:m}));if(L==="permanent")return T(MI,G({className:Te(ee.root,ee.docked,v),ownerState:X,ref:i},K,{children:ce}));const ke=T(N,G({in:M,direction:iB[H],timeout:O,appear:J.current},U,{children:ce}));return L==="persistent"?T(MI,G({className:Te(ee.root,ee.docked,v),ownerState:X,ref:i},K,{children:ke})):T(CJ,G({BackdropProps:G({},b,A,{transitionDuration:O}),className:Te(ee.root,ee.modal,v),open:M,ownerState:X,onClose:S,hideBackdrop:_,ref:i},K,q,{children:ke}))}),SJ=EJ;function DJ(t){return Ve("MuiFab",t)}const TJ=Ue("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),PI=TJ,IJ=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],MJ=t=>{const{color:o,variant:i,classes:l,size:d}=t,h={root:["root",i,`size${Be(d)}`,o==="inherit"?"colorInherit":o]},f=Ge(h,DJ,l);return G({},l,f)},PJ=Ce(gu,{name:"MuiFab",slot:"Root",shouldForwardProp:t=>Fo(t)||t==="classes",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,o[i.variant],o[`size${Be(i.size)}`],i.color==="inherit"&&o.colorInherit,o[Be(i.size)],o[i.color]]}})(({theme:t,ownerState:o})=>{var i,l;return G({},t.typography.button,{minHeight:36,transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(t.vars||t).zIndex.fab,boxShadow:(t.vars||t).shadows[6],"&:active":{boxShadow:(t.vars||t).shadows[12]},color:t.vars?t.vars.palette.text.primary:(i=(l=t.palette).getContrastText)==null?void 0:i.call(l,t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],"&:hover":{backgroundColor:(t.vars||t).palette.grey.A100,"@media (hover: none)":{backgroundColor:(t.vars||t).palette.grey[300]},textDecoration:"none"},[`&.${PI.focusVisible}`]:{boxShadow:(t.vars||t).shadows[6]}},o.size==="small"&&{width:40,height:40},o.size==="medium"&&{width:48,height:48},o.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},o.variant==="extended"&&o.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},o.variant==="extended"&&o.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},o.color==="inherit"&&{color:"inherit"})},({theme:t,ownerState:o})=>G({},o.color!=="inherit"&&o.color!=="default"&&(t.vars||t).palette[o.color]!=null&&{color:(t.vars||t).palette[o.color].contrastText,backgroundColor:(t.vars||t).palette[o.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[o.color].main}}}),({theme:t})=>({[`&.${PI.disabled}`]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}})),NJ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiFab"}),{children:d,className:h,color:f="default",component:b="button",disabled:m=!1,disableFocusRipple:v=!1,focusVisibleClassName:C,size:_="large",variant:A="circular"}=l,S=Se(l,IJ),M=G({},l,{color:f,component:b,disabled:m,disableFocusRipple:v,size:_,variant:A}),I=MJ(M);return T(PJ,G({className:Te(I.root,h),component:b,disabled:m,focusRipple:!v,focusVisibleClassName:Te(I.focusVisible,C),ownerState:M,ref:i},S,{classes:I,children:d}))}),zC=NJ,BJ=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],RJ=t=>{const{classes:o,disableUnderline:i}=t,d=Ge({root:["root",!i&&"underline"],input:["input"]},hQ,o);return G({},o,d)},OJ=Ce(_b,{shouldForwardProp:t=>Fo(t)||t==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[...Cb(t,o),!i.disableUnderline&&o.underline]}})(({theme:t,ownerState:o})=>{var i;const l=t.palette.mode==="light",d=l?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",h=l?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",f=l?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",b=l?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return G({position:"relative",backgroundColor:t.vars?t.vars.palette.FilledInput.bg:h,borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),"&:hover":{backgroundColor:t.vars?t.vars.palette.FilledInput.hoverBg:f,"@media (hover: none)":{backgroundColor:t.vars?t.vars.palette.FilledInput.bg:h}},[`&.${Rl.focused}`]:{backgroundColor:t.vars?t.vars.palette.FilledInput.bg:h},[`&.${Rl.disabled}`]:{backgroundColor:t.vars?t.vars.palette.FilledInput.disabledBg:b}},!o.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(i=(t.vars||t).palette[o.color||"primary"])==null?void 0:i.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Rl.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Rl.error}`]:{"&:before, &:after":{borderBottomColor:(t.vars||t).palette.error.main}},"&:before":{borderBottom:`1px solid ${t.vars?`rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})`:d}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:t.transitions.create("border-bottom-color",{duration:t.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Rl.disabled}, .${Rl.error}):before`]:{borderBottom:`1px solid ${(t.vars||t).palette.text.primary}`},[`&.${Rl.disabled}:before`]:{borderBottomStyle:"dotted"}},o.startAdornment&&{paddingLeft:12},o.endAdornment&&{paddingRight:12},o.multiline&&G({padding:"25px 12px 8px"},o.size==="small"&&{paddingTop:21,paddingBottom:4},o.hiddenLabel&&{paddingTop:16,paddingBottom:17}))}),LJ=Ce(xb,{name:"MuiFilledInput",slot:"Input",overridesResolver:Ab})(({theme:t,ownerState:o})=>G({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!t.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:t.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:t.palette.mode==="light"?null:"#fff",caretColor:t.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},t.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[t.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},o.size==="small"&&{paddingTop:21,paddingBottom:4},o.hiddenLabel&&{paddingTop:16,paddingBottom:17},o.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},o.startAdornment&&{paddingLeft:0},o.endAdornment&&{paddingRight:0},o.hiddenLabel&&o.size==="small"&&{paddingTop:8,paddingBottom:9})),sB=R.forwardRef(function(o,i){var l,d,h,f;const b=He({props:o,name:"MuiFilledInput"}),{components:m={},componentsProps:v,fullWidth:C=!1,inputComponent:_="input",multiline:A=!1,slotProps:S,slots:M={},type:I="text"}=b,U=Se(b,BJ),N=G({},b,{fullWidth:C,inputComponent:_,multiline:A,type:I}),O=RJ(b),L={root:{ownerState:N},input:{ownerState:N}},q=S??v?_r(S??v,L):L,K=(l=(d=M.root)!=null?d:m.Root)!=null?l:OJ,J=(h=(f=M.input)!=null?f:m.Input)!=null?h:LJ;return T(OC,G({slots:{root:K,input:J},componentsProps:q,fullWidth:C,inputComponent:_,multiline:A,ref:i,type:I},U,{classes:O}))});sB.muiName="Input";const aB=sB;function zJ(t){return Ve("MuiFormControl",t)}Ue("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const jJ=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],FJ=t=>{const{classes:o,margin:i,fullWidth:l}=t,d={root:["root",i!=="none"&&`margin${Be(i)}`,l&&"fullWidth"]};return Ge(d,zJ,o)},$J=Ce("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:t},o)=>G({},o.root,o[`margin${Be(t.margin)}`],t.fullWidth&&o.fullWidth)})(({ownerState:t})=>G({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},t.margin==="normal"&&{marginTop:16,marginBottom:8},t.margin==="dense"&&{marginTop:8,marginBottom:4},t.fullWidth&&{width:"100%"})),VJ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiFormControl"}),{children:d,className:h,color:f="primary",component:b="div",disabled:m=!1,error:v=!1,focused:C,fullWidth:_=!1,hiddenLabel:A=!1,margin:S="none",required:M=!1,size:I="medium",variant:U="outlined"}=l,N=Se(l,jJ),O=G({},l,{color:f,component:b,disabled:m,error:v,fullWidth:_,hiddenLabel:A,margin:S,required:M,size:I,variant:U}),L=FJ(O),[q,K]=R.useState(()=>{let ge=!1;return d&&R.Children.forEach(d,fe=>{if(!Hh(fe,["Input","Select"]))return;const he=Hh(fe,["Select"])?fe.props.input:fe;he&&tQ(he.props)&&(ge=!0)}),ge}),[J,H]=R.useState(()=>{let ge=!1;return d&&R.Children.forEach(d,fe=>{Hh(fe,["Input","Select"])&&RC(fe.props,!0)&&(ge=!0)}),ge}),[F,X]=R.useState(!1);m&&F&&X(!1);const ee=C!==void 0&&!m?C:F;let ce;const ke=R.useMemo(()=>({adornedStart:q,setAdornedStart:K,color:f,disabled:m,error:v,filled:J,focused:ee,fullWidth:_,hiddenLabel:A,size:I,onBlur:()=>{X(!1)},onEmpty:()=>{H(!1)},onFilled:()=>{H(!0)},onFocus:()=>{X(!0)},registerEffect:ce,required:M,variant:U}),[q,f,m,v,J,ee,_,A,ce,M,I,U]);return T(BC.Provider,{value:ke,children:T($J,G({as:b,ownerState:O,className:Te(L.root,h),ref:i},N,{children:d}))})}),UJ=VJ;function HJ(t){return Ve("MuiFormHelperText",t)}const WJ=Ue("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),NI=WJ;var BI;const qJ=["children","className","component","disabled","error","filled","focused","margin","required","variant"],GJ=t=>{const{classes:o,contained:i,size:l,disabled:d,error:h,filled:f,focused:b,required:m}=t,v={root:["root",d&&"disabled",h&&"error",l&&`size${Be(l)}`,i&&"contained",b&&"focused",f&&"filled",m&&"required"]};return Ge(v,HJ,o)},KJ=Ce("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,i.size&&o[`size${Be(i.size)}`],i.contained&&o.contained,i.filled&&o.filled]}})(({theme:t,ownerState:o})=>G({color:(t.vars||t).palette.text.secondary},t.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${NI.disabled}`]:{color:(t.vars||t).palette.text.disabled},[`&.${NI.error}`]:{color:(t.vars||t).palette.error.main}},o.size==="small"&&{marginTop:4},o.contained&&{marginLeft:14,marginRight:14})),YJ=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiFormHelperText"}),{children:d,className:h,component:f="p"}=l,b=Se(l,qJ),m=bu(),v=mu({props:l,muiFormControl:m,states:["variant","size","disabled","error","filled","focused","required"]}),C=G({},l,{component:f,contained:v.variant==="filled"||v.variant==="outlined",variant:v.variant,size:v.size,disabled:v.disabled,error:v.error,filled:v.filled,focused:v.focused,required:v.required}),_=GJ(C);return T(KJ,G({as:f,ownerState:C,className:Te(_.root,h),ref:i},b,{children:d===" "?BI||(BI=T("span",{className:"notranslate",children:"​"})):d}))}),QJ=YJ;function ZJ(t){return Ve("MuiFormLabel",t)}const JJ=Ue("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),Kh=JJ,XJ=["children","className","color","component","disabled","error","filled","focused","required"],eX=t=>{const{classes:o,color:i,focused:l,disabled:d,error:h,filled:f,required:b}=t,m={root:["root",`color${Be(i)}`,d&&"disabled",h&&"error",f&&"filled",l&&"focused",b&&"required"],asterisk:["asterisk",h&&"error"]};return Ge(m,ZJ,o)},tX=Ce("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:t},o)=>G({},o.root,t.color==="secondary"&&o.colorSecondary,t.filled&&o.filled)})(({theme:t,ownerState:o})=>G({color:(t.vars||t).palette.text.secondary},t.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${Kh.focused}`]:{color:(t.vars||t).palette[o.color].main},[`&.${Kh.disabled}`]:{color:(t.vars||t).palette.text.disabled},[`&.${Kh.error}`]:{color:(t.vars||t).palette.error.main}})),nX=Ce("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(t,o)=>o.asterisk})(({theme:t})=>({[`&.${Kh.error}`]:{color:(t.vars||t).palette.error.main}})),oX=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiFormLabel"}),{children:d,className:h,component:f="label"}=l,b=Se(l,XJ),m=bu(),v=mu({props:l,muiFormControl:m,states:["color","required","focused","disabled","error","filled"]}),C=G({},l,{color:v.color||"primary",component:f,disabled:v.disabled,error:v.error,filled:v.filled,focused:v.focused,required:v.required}),_=eX(C);return ue(tX,G({as:f,ownerState:C,className:Te(_.root,h),ref:i},b,{children:[d,v.required&&ue(nX,{ownerState:C,"aria-hidden":!0,className:_.asterisk,children:[" ","*"]})]}))}),rX=oX,iX=R.createContext(),RI=iX;function sX(t){return Ve("MuiGrid",t)}const aX=[0,1,2,3,4,5,6,7,8,9,10],lX=["column-reverse","column","row-reverse","row"],cX=["nowrap","wrap-reverse","wrap"],xh=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],dX=Ue("MuiGrid",["root","container","item","zeroMinWidth",...aX.map(t=>`spacing-xs-${t}`),...lX.map(t=>`direction-xs-${t}`),...cX.map(t=>`wrap-xs-${t}`),...xh.map(t=>`grid-xs-${t}`),...xh.map(t=>`grid-sm-${t}`),...xh.map(t=>`grid-md-${t}`),...xh.map(t=>`grid-lg-${t}`),...xh.map(t=>`grid-xl-${t}`)]),Ep=dX,uX=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Ud(t){const o=parseFloat(t);return`${o}${String(t).replace(String(o),"")||"px"}`}function hX({theme:t,ownerState:o}){let i;return t.breakpoints.keys.reduce((l,d)=>{let h={};if(o[d]&&(i=o[d]),!i)return l;if(i===!0)h={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")h={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const f=ub({values:o.columns,breakpoints:t.breakpoints.values}),b=typeof f=="object"?f[d]:f;if(b==null)return l;const m=`${Math.round(i/b*1e8)/1e6}%`;let v={};if(o.container&&o.item&&o.columnSpacing!==0){const C=t.spacing(o.columnSpacing);if(C!=="0px"){const _=`calc(${m} + ${Ud(C)})`;v={flexBasis:_,maxWidth:_}}}h=G({flexBasis:m,flexGrow:0,maxWidth:m},v)}return t.breakpoints.values[d]===0?Object.assign(l,h):l[t.breakpoints.up(d)]=h,l},{})}function pX({theme:t,ownerState:o}){const i=ub({values:o.direction,breakpoints:t.breakpoints.values});return ir({theme:t},i,l=>{const d={flexDirection:l};return l.indexOf("column")===0&&(d[`& > .${Ep.item}`]={maxWidth:"none"}),d})}function lB({breakpoints:t,values:o}){let i="";Object.keys(o).forEach(d=>{i===""&&o[d]!==0&&(i=d)});const l=Object.keys(t).sort((d,h)=>t[d]-t[h]);return l.slice(0,l.indexOf(i))}function fX({theme:t,ownerState:o}){const{container:i,rowSpacing:l}=o;let d={};if(i&&l!==0){const h=ub({values:l,breakpoints:t.breakpoints.values});let f;typeof h=="object"&&(f=lB({breakpoints:t.breakpoints.values,values:h})),d=ir({theme:t},h,(b,m)=>{var v;const C=t.spacing(b);return C!=="0px"?{marginTop:`-${Ud(C)}`,[`& > .${Ep.item}`]:{paddingTop:Ud(C)}}:(v=f)!=null&&v.includes(m)?{}:{marginTop:0,[`& > .${Ep.item}`]:{paddingTop:0}}})}return d}function gX({theme:t,ownerState:o}){const{container:i,columnSpacing:l}=o;let d={};if(i&&l!==0){const h=ub({values:l,breakpoints:t.breakpoints.values});let f;typeof h=="object"&&(f=lB({breakpoints:t.breakpoints.values,values:h})),d=ir({theme:t},h,(b,m)=>{var v;const C=t.spacing(b);return C!=="0px"?{width:`calc(100% + ${Ud(C)})`,marginLeft:`-${Ud(C)}`,[`& > .${Ep.item}`]:{paddingLeft:Ud(C)}}:(v=f)!=null&&v.includes(m)?{}:{width:"100%",marginLeft:0,[`& > .${Ep.item}`]:{paddingLeft:0}}})}return d}function mX(t,o,i={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[i[`spacing-xs-${String(t)}`]];const l=[];return o.forEach(d=>{const h=t[d];Number(h)>0&&l.push(i[`spacing-${d}-${String(h)}`])}),l}const bX=Ce("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t,{container:l,direction:d,item:h,spacing:f,wrap:b,zeroMinWidth:m,breakpoints:v}=i;let C=[];l&&(C=mX(f,v,o));const _=[];return v.forEach(A=>{const S=i[A];S&&_.push(o[`grid-${A}-${String(S)}`])}),[o.root,l&&o.container,h&&o.item,m&&o.zeroMinWidth,...C,d!=="row"&&o[`direction-xs-${String(d)}`],b!=="wrap"&&o[`wrap-xs-${String(b)}`],..._]}})(({ownerState:t})=>G({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),pX,fX,gX,hX);function kX(t,o){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const i=[];return o.forEach(l=>{const d=t[l];if(Number(d)>0){const h=`spacing-${l}-${String(d)}`;i.push(h)}}),i}const wX=t=>{const{classes:o,container:i,direction:l,item:d,spacing:h,wrap:f,zeroMinWidth:b,breakpoints:m}=t;let v=[];i&&(v=kX(h,m));const C=[];m.forEach(A=>{const S=t[A];S&&C.push(`grid-${A}-${String(S)}`)});const _={root:["root",i&&"container",d&&"item",b&&"zeroMinWidth",...v,l!=="row"&&`direction-xs-${String(l)}`,f!=="wrap"&&`wrap-xs-${String(f)}`,...C]};return Ge(_,sX,o)},vX=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiGrid"}),{breakpoints:d}=Ba(),h=xC(l),{className:f,columns:b,columnSpacing:m,component:v="div",container:C=!1,direction:_="row",item:A=!1,rowSpacing:S,spacing:M=0,wrap:I="wrap",zeroMinWidth:U=!1}=h,N=Se(h,uX),O=S||M,L=m||M,q=R.useContext(RI),K=C?b||12:q,J={},H=G({},N);d.keys.forEach(ee=>{N[ee]!=null&&(J[ee]=N[ee],delete H[ee])});const F=G({},h,{columns:K,container:C,direction:_,item:A,rowSpacing:O,columnSpacing:L,wrap:I,zeroMinWidth:U,spacing:M},J,{breakpoints:d.keys}),X=wX(F);return T(RI.Provider,{value:K,children:T(bX,G({ownerState:F,className:Te(X.root,f),as:v,ref:i},H))})}),ne=vX,yX=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Wv(t){return`scale(${t}, ${t**2})`}const CX={entering:{opacity:1,transform:Wv(1)},entered:{opacity:1,transform:"none"}},a0=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),cB=R.forwardRef(function(o,i){const{addEndListener:l,appear:d=!0,children:h,easing:f,in:b,onEnter:m,onEntered:v,onEntering:C,onExit:_,onExited:A,onExiting:S,style:M,timeout:I="auto",TransitionComponent:U=IC}=o,N=Se(o,yX),O=R.useRef(),L=R.useRef(),q=Ba(),K=R.useRef(null),J=Ln(K,h.ref,i),H=he=>ve=>{if(he){const De=K.current;ve===void 0?he(De):he(De,ve)}},F=H(C),X=H((he,ve)=>{NC(he);const{duration:De,delay:oe,easing:se}=ru({style:M,timeout:I,easing:f},{mode:"enter"});let re;I==="auto"?(re=q.transitions.getAutoHeightDuration(he.clientHeight),L.current=re):re=De,he.style.transition=[q.transitions.create("opacity",{duration:re,delay:oe}),q.transitions.create("transform",{duration:a0?re:re*.666,delay:oe,easing:se})].join(","),m&&m(he,ve)}),ee=H(v),ce=H(S),ke=H(he=>{const{duration:ve,delay:De,easing:oe}=ru({style:M,timeout:I,easing:f},{mode:"exit"});let se;I==="auto"?(se=q.transitions.getAutoHeightDuration(he.clientHeight),L.current=se):se=ve,he.style.transition=[q.transitions.create("opacity",{duration:se,delay:De}),q.transitions.create("transform",{duration:a0?se:se*.666,delay:a0?De:De||se*.333,easing:oe})].join(","),he.style.opacity=0,he.style.transform=Wv(.75),_&&_(he)}),ge=H(A),fe=he=>{I==="auto"&&(O.current=setTimeout(he,L.current||0)),l&&l(K.current,he)};return R.useEffect(()=>()=>{clearTimeout(O.current)},[]),T(U,G({appear:d,in:b,nodeRef:K,onEnter:X,onEntered:ee,onEntering:F,onExit:ke,onExited:ge,onExiting:ce,addEndListener:fe,timeout:I==="auto"?null:I},N,{children:(he,ve)=>R.cloneElement(h,G({style:G({opacity:0,transform:Wv(.75),visibility:he==="exited"&&!b?"hidden":void 0},CX[he],M,h.props.style),ref:J},ve))}))});cB.muiSupportAuto=!0;const AX=cB,_X=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],xX=t=>{const{classes:o,disableUnderline:i}=t,d=Ge({root:["root",!i&&"underline"],input:["input"]},lQ,o);return G({},o,d)},EX=Ce(_b,{shouldForwardProp:t=>Fo(t)||t==="classes",name:"MuiInput",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[...Cb(t,o),!i.disableUnderline&&o.underline]}})(({theme:t,ownerState:o})=>{let l=t.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return t.vars&&(l=`rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})`),G({position:"relative"},o.formControl&&{"label + &":{marginTop:16}},!o.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(t.vars||t).palette[o.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${_h.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${_h.error}`]:{"&:before, &:after":{borderBottomColor:(t.vars||t).palette.error.main}},"&:before":{borderBottom:`1px solid ${l}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:t.transitions.create("border-bottom-color",{duration:t.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${_h.disabled}, .${_h.error}):before`]:{borderBottom:`2px solid ${(t.vars||t).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${l}`}},[`&.${_h.disabled}:before`]:{borderBottomStyle:"dotted"}})}),SX=Ce(xb,{name:"MuiInput",slot:"Input",overridesResolver:Ab})({}),dB=R.forwardRef(function(o,i){var l,d,h,f;const b=He({props:o,name:"MuiInput"}),{disableUnderline:m,components:v={},componentsProps:C,fullWidth:_=!1,inputComponent:A="input",multiline:S=!1,slotProps:M,slots:I={},type:U="text"}=b,N=Se(b,_X),O=xX(b),q={root:{ownerState:{disableUnderline:m}}},K=M??C?_r(M??C,q):q,J=(l=(d=I.root)!=null?d:v.Root)!=null?l:EX,H=(h=(f=I.input)!=null?f:v.Input)!=null?h:SX;return T(OC,G({slots:{root:J,input:H},slotProps:K,fullWidth:_,inputComponent:A,multiline:S,ref:i,type:U},N,{classes:O}))});dB.muiName="Input";const uB=dB;function DX(t){return Ve("MuiInputLabel",t)}Ue("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const TX=["disableAnimation","margin","shrink","variant","className"],IX=t=>{const{classes:o,formControl:i,size:l,shrink:d,disableAnimation:h,variant:f,required:b}=t,v=Ge({root:["root",i&&"formControl",!h&&"animated",d&&"shrink",l==="small"&&"sizeSmall",f],asterisk:[b&&"asterisk"]},DX,o);return G({},o,v)},MX=Ce(rX,{shouldForwardProp:t=>Fo(t)||t==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[{[`& .${Kh.asterisk}`]:o.asterisk},o.root,i.formControl&&o.formControl,i.size==="small"&&o.sizeSmall,i.shrink&&o.shrink,!i.disableAnimation&&o.animated,o[i.variant]]}})(({theme:t,ownerState:o})=>G({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},o.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},o.size==="small"&&{transform:"translate(0, 17px) scale(1)"},o.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!o.disableAnimation&&{transition:t.transitions.create(["color","transform","max-width"],{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut})},o.variant==="filled"&&G({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},o.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},o.shrink&&G({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},o.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),o.variant==="outlined"&&G({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},o.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},o.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),PX=R.forwardRef(function(o,i){const l=He({name:"MuiInputLabel",props:o}),{disableAnimation:d=!1,shrink:h,className:f}=l,b=Se(l,TX),m=bu();let v=h;typeof v>"u"&&m&&(v=m.filled||m.focused||m.adornedStart);const C=mu({props:l,muiFormControl:m,states:["size","variant","required"]}),_=G({},l,{disableAnimation:d,formControl:m,shrink:v,size:C.size,variant:C.variant,required:C.required}),A=IX(_);return T(MX,G({"data-shrink":v,ownerState:_,ref:i,className:Te(A.root,f)},b,{classes:A}))}),NX=PX;function BX(t){return Ve("MuiLink",t)}const RX=Ue("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),OX=RX,hB={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},LX=t=>hB[t]||t,zX=({theme:t,ownerState:o})=>{const i=LX(o.color),l=nu(t,`palette.${i}`,!1)||o.color,d=nu(t,`palette.${i}Channel`);return"vars"in t&&d?`rgba(${d} / 0.4)`:_n(l,.4)},jX=zX,FX=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],$X=t=>{const{classes:o,component:i,focusVisible:l,underline:d}=t,h={root:["root",`underline${Be(d)}`,i==="button"&&"button",l&&"focusVisible"]};return Ge(h,BX,o)},VX=Ce(Je,{name:"MuiLink",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,o[`underline${Be(i.underline)}`],i.component==="button"&&o.button]}})(({theme:t,ownerState:o})=>G({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&G({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:jX({theme:t,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${OX.focusVisible}`]:{outline:"auto"}})),UX=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiLink"}),{className:d,color:h="primary",component:f="a",onBlur:b,onFocus:m,TypographyClasses:v,underline:C="always",variant:_="inherit",sx:A}=l,S=Se(l,FX),{isFocusVisibleRef:M,onBlur:I,onFocus:U,ref:N}=pC(),[O,L]=R.useState(!1),q=Ln(i,N),K=X=>{I(X),M.current===!1&&L(!1),b&&b(X)},J=X=>{U(X),M.current===!0&&L(!0),m&&m(X)},H=G({},l,{color:h,component:f,focusVisible:O,underline:C,variant:_}),F=$X(H);return T(VX,G({color:h,className:Te(F.root,d),classes:v,component:f,onBlur:K,onFocus:J,ref:q,ownerState:H,variant:_,sx:[...Object.keys(hB).includes(h)?[]:[{color:h}],...Array.isArray(A)?A:[A]]},S))}),HX=UX,WX=R.createContext({}),Yr=WX;function qX(t){return Ve("MuiList",t)}Ue("MuiList",["root","padding","dense","subheader"]);const GX=["children","className","component","dense","disablePadding","subheader"],KX=t=>{const{classes:o,disablePadding:i,dense:l,subheader:d}=t;return Ge({root:["root",!i&&"padding",l&&"dense",d&&"subheader"]},qX,o)},YX=Ce("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,!i.disablePadding&&o.padding,i.dense&&o.dense,i.subheader&&o.subheader]}})(({ownerState:t})=>G({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})),QX=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiList"}),{children:d,className:h,component:f="ul",dense:b=!1,disablePadding:m=!1,subheader:v}=l,C=Se(l,GX),_=R.useMemo(()=>({dense:b}),[b]),A=G({},l,{component:f,dense:b,disablePadding:m}),S=KX(A);return T(Yr.Provider,{value:_,children:ue(YX,G({as:f,className:Te(S.root,h),ref:i,ownerState:A},C,{children:[v,d]}))})}),xg=QX;function ZX(t){return Ve("MuiListItem",t)}const JX=Ue("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),kd=JX;function XX(t){return Ve("MuiListItemButton",t)}const eee=Ue("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),wd=eee,tee=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],nee=(t,o)=>{const{ownerState:i}=t;return[o.root,i.dense&&o.dense,i.alignItems==="flex-start"&&o.alignItemsFlexStart,i.divider&&o.divider,!i.disableGutters&&o.gutters]},oee=t=>{const{alignItems:o,classes:i,dense:l,disabled:d,disableGutters:h,divider:f,selected:b}=t,v=Ge({root:["root",l&&"dense",!h&&"gutters",f&&"divider",d&&"disabled",o==="flex-start"&&"alignItemsFlexStart",b&&"selected"]},XX,i);return G({},i,v)},ree=Ce(gu,{shouldForwardProp:t=>Fo(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:nee})(({theme:t,ownerState:o})=>G({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${wd.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:_n(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${wd.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:_n(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${wd.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:_n(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:_n(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${wd.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${wd.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},o.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},o.alignItems==="flex-start"&&{alignItems:"flex-start"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.dense&&{paddingTop:4,paddingBottom:4})),iee=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiListItemButton"}),{alignItems:d="center",autoFocus:h=!1,component:f="div",children:b,dense:m=!1,disableGutters:v=!1,divider:C=!1,focusVisibleClassName:_,selected:A=!1,className:S}=l,M=Se(l,tee),I=R.useContext(Yr),U=R.useMemo(()=>({dense:m||I.dense||!1,alignItems:d,disableGutters:v}),[d,I.dense,m,v]),N=R.useRef(null);Fi(()=>{h&&N.current&&N.current.focus()},[h]);const O=G({},l,{alignItems:d,dense:U.dense,disableGutters:v,divider:C,selected:A}),L=oee(O),q=Ln(N,i);return T(Yr.Provider,{value:U,children:T(ree,G({ref:q,href:M.href||M.to,component:(M.href||M.to)&&f==="div"?"button":f,focusVisibleClassName:Te(L.focusVisible,_),ownerState:O,className:Te(L.root,S)},M,{classes:L,children:b}))})}),Xs=iee;function see(t){return Ve("MuiListItemSecondaryAction",t)}Ue("MuiListItemSecondaryAction",["root","disableGutters"]);const aee=["className"],lee=t=>{const{disableGutters:o,classes:i}=t;return Ge({root:["root",o&&"disableGutters"]},see,i)},cee=Ce("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,i.disableGutters&&o.disableGutters]}})(({ownerState:t})=>G({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),pB=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiListItemSecondaryAction"}),{className:d}=l,h=Se(l,aee),f=R.useContext(Yr),b=G({},l,{disableGutters:f.disableGutters}),m=lee(b);return T(cee,G({className:Te(m.root,d),ownerState:b,ref:i},h))});pB.muiName="ListItemSecondaryAction";const dee=pB,uee=["className"],hee=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],pee=(t,o)=>{const{ownerState:i}=t;return[o.root,i.dense&&o.dense,i.alignItems==="flex-start"&&o.alignItemsFlexStart,i.divider&&o.divider,!i.disableGutters&&o.gutters,!i.disablePadding&&o.padding,i.button&&o.button,i.hasSecondaryAction&&o.secondaryAction]},fee=t=>{const{alignItems:o,button:i,classes:l,dense:d,disabled:h,disableGutters:f,disablePadding:b,divider:m,hasSecondaryAction:v,selected:C}=t;return Ge({root:["root",d&&"dense",!f&&"gutters",!b&&"padding",m&&"divider",h&&"disabled",i&&"button",o==="flex-start"&&"alignItemsFlexStart",v&&"secondaryAction",C&&"selected"],container:["container"]},ZX,l)},gee=Ce("div",{name:"MuiListItem",slot:"Root",overridesResolver:pee})(({theme:t,ownerState:o})=>G({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!o.disablePadding&&G({paddingTop:8,paddingBottom:8},o.dense&&{paddingTop:4,paddingBottom:4},!o.disableGutters&&{paddingLeft:16,paddingRight:16},!!o.secondaryAction&&{paddingRight:48}),!!o.secondaryAction&&{[`& > .${wd.root}`]:{paddingRight:48}},{[`&.${kd.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${kd.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:_n(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${kd.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:_n(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${kd.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},o.alignItems==="flex-start"&&{alignItems:"flex-start"},o.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},o.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${kd.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:_n(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:_n(t.palette.primary.main,t.palette.action.selectedOpacity)}}},o.hasSecondaryAction&&{paddingRight:48})),mee=Ce("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,o)=>o.container})({position:"relative"}),bee=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiListItem"}),{alignItems:d="center",autoFocus:h=!1,button:f=!1,children:b,className:m,component:v,components:C={},componentsProps:_={},ContainerComponent:A="li",ContainerProps:{className:S}={},dense:M=!1,disabled:I=!1,disableGutters:U=!1,disablePadding:N=!1,divider:O=!1,focusVisibleClassName:L,secondaryAction:q,selected:K=!1,slotProps:J={},slots:H={}}=l,F=Se(l.ContainerProps,uee),X=Se(l,hee),ee=R.useContext(Yr),ce=R.useMemo(()=>({dense:M||ee.dense||!1,alignItems:d,disableGutters:U}),[d,ee.dense,M,U]),ke=R.useRef(null);Fi(()=>{h&&ke.current&&ke.current.focus()},[h]);const ge=R.Children.toArray(b),fe=ge.length&&Hh(ge[ge.length-1],["ListItemSecondaryAction"]),he=G({},l,{alignItems:d,autoFocus:h,button:f,dense:ce.dense,disabled:I,disableGutters:U,disablePadding:N,divider:O,hasSecondaryAction:fe,selected:K}),ve=fee(he),De=Ln(ke,i),oe=H.root||C.Root||gee,se=J.root||_.root||{},re=G({className:Te(ve.root,se.className,m),disabled:I},X);let _e=v||"li";return f&&(re.component=v||"div",re.focusVisibleClassName=Te(kd.focusVisible,L),_e=gu),fe?(_e=!re.component&&!v?"div":_e,A==="li"&&(_e==="li"?_e="div":re.component==="li"&&(re.component="div")),T(Yr.Provider,{value:ce,children:ue(mee,G({as:A,className:Te(ve.container,S),ref:De,ownerState:he},F,{children:[T(oe,G({},se,!ou(oe)&&{as:_e,ownerState:G({},he,se.ownerState)},re,{children:ge})),ge.pop()]}))})):T(Yr.Provider,{value:ce,children:ue(oe,G({},se,{as:_e,ref:De},!ou(oe)&&{ownerState:G({},he,se.ownerState)},re,{children:[ge,q&&T(dee,{children:q})]}))})}),ea=bee;function kee(t){return Ve("MuiListItemIcon",t)}const wee=Ue("MuiListItemIcon",["root","alignItemsFlexStart"]),OI=wee,vee=["className"],yee=t=>{const{alignItems:o,classes:i}=t;return Ge({root:["root",o==="flex-start"&&"alignItemsFlexStart"]},kee,i)},Cee=Ce("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,i.alignItems==="flex-start"&&o.alignItemsFlexStart]}})(({theme:t,ownerState:o})=>G({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},o.alignItems==="flex-start"&&{marginTop:8})),Aee=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiListItemIcon"}),{className:d}=l,h=Se(l,vee),f=R.useContext(Yr),b=G({},l,{alignItems:f.alignItems}),m=yee(b);return T(Cee,G({className:Te(m.root,d),ownerState:b,ref:i},h))}),ta=Aee;function _ee(t){return Ve("MuiListItemText",t)}const xee=Ue("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),um=xee,Eee=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],See=t=>{const{classes:o,inset:i,primary:l,secondary:d,dense:h}=t;return Ge({root:["root",i&&"inset",h&&"dense",l&&d&&"multiline"],primary:["primary"],secondary:["secondary"]},_ee,o)},Dee=Ce("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[{[`& .${um.primary}`]:o.primary},{[`& .${um.secondary}`]:o.secondary},o.root,i.inset&&o.inset,i.primary&&i.secondary&&o.multiline,i.dense&&o.dense]}})(({ownerState:t})=>G({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),Tee=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiListItemText"}),{children:d,className:h,disableTypography:f=!1,inset:b=!1,primary:m,primaryTypographyProps:v,secondary:C,secondaryTypographyProps:_}=l,A=Se(l,Eee),{dense:S}=R.useContext(Yr);let M=m??d,I=C;const U=G({},l,{disableTypography:f,inset:b,primary:!!M,secondary:!!I,dense:S}),N=See(U);return M!=null&&M.type!==Je&&!f&&(M=T(Je,G({variant:S?"body2":"body1",className:N.primary,component:v!=null&&v.variant?void 0:"span",display:"block"},v,{children:M}))),I!=null&&I.type!==Je&&!f&&(I=T(Je,G({variant:"body2",className:N.secondary,color:"text.secondary",display:"block"},_,{children:I}))),ue(Dee,G({className:Te(N.root,h),ownerState:U,ref:i},A,{children:[M,I]}))}),na=Tee,Iee=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function l0(t,o,i){return t===o?t.firstChild:o&&o.nextElementSibling?o.nextElementSibling:i?null:t.firstChild}function LI(t,o,i){return t===o?i?t.firstChild:t.lastChild:o&&o.previousElementSibling?o.previousElementSibling:i?null:t.lastChild}function fB(t,o){if(o===void 0)return!0;let i=t.innerText;return i===void 0&&(i=t.textContent),i=i.trim().toLowerCase(),i.length===0?!1:o.repeating?i[0]===o.keys[0]:i.indexOf(o.keys.join(""))===0}function Eh(t,o,i,l,d,h){let f=!1,b=d(t,o,o?i:!1);for(;b;){if(b===t.firstChild){if(f)return!1;f=!0}const m=l?!1:b.disabled||b.getAttribute("aria-disabled")==="true";if(!b.hasAttribute("tabindex")||!fB(b,h)||m)b=d(t,b,i);else return b.focus(),!0}return!1}const Mee=R.forwardRef(function(o,i){const{actions:l,autoFocus:d=!1,autoFocusItem:h=!1,children:f,className:b,disabledItemsFocusable:m=!1,disableListWrap:v=!1,onKeyDown:C,variant:_="selectedMenu"}=o,A=Se(o,Iee),S=R.useRef(null),M=R.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Fi(()=>{d&&S.current.focus()},[d]),R.useImperativeHandle(l,()=>({adjustStyleForScrollbar:(L,q)=>{const K=!S.current.style.width;if(L.clientHeight<S.current.clientHeight&&K){const J=`${_N(Lo(L))}px`;S.current.style[q.direction==="rtl"?"paddingLeft":"paddingRight"]=J,S.current.style.width=`calc(100% + ${J})`}return S.current}}),[]);const I=L=>{const q=S.current,K=L.key,J=Lo(q).activeElement;if(K==="ArrowDown")L.preventDefault(),Eh(q,J,v,m,l0);else if(K==="ArrowUp")L.preventDefault(),Eh(q,J,v,m,LI);else if(K==="Home")L.preventDefault(),Eh(q,null,v,m,l0);else if(K==="End")L.preventDefault(),Eh(q,null,v,m,LI);else if(K.length===1){const H=M.current,F=K.toLowerCase(),X=performance.now();H.keys.length>0&&(X-H.lastTime>500?(H.keys=[],H.repeating=!0,H.previousKeyMatched=!0):H.repeating&&F!==H.keys[0]&&(H.repeating=!1)),H.lastTime=X,H.keys.push(F);const ee=J&&!H.repeating&&fB(J,H);H.previousKeyMatched&&(ee||Eh(q,J,!1,m,l0,H))?L.preventDefault():H.previousKeyMatched=!1}C&&C(L)},U=Ln(S,i);let N=-1;R.Children.forEach(f,(L,q)=>{R.isValidElement(L)&&(L.props.disabled||(_==="selectedMenu"&&L.props.selected||N===-1)&&(N=q),N===q&&(L.props.disabled||L.props.muiSkipListHighlight||L.type.muiSkipListHighlight)&&(N+=1,N>=f.length&&(N=-1)))});const O=R.Children.map(f,(L,q)=>{if(q===N){const K={};return h&&(K.autoFocus=!0),L.props.tabIndex===void 0&&_==="selectedMenu"&&(K.tabIndex=0),R.cloneElement(L,K)}return L});return T(xg,G({role:"menu",ref:U,className:b,onKeyDown:I,tabIndex:d?0:-1},A,{children:O}))}),Pee=Mee;function Nee(t){return Ve("MuiPopover",t)}Ue("MuiPopover",["root","paper"]);const Bee=["onEntering"],Ree=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function zI(t,o){let i=0;return typeof o=="number"?i=o:o==="center"?i=t.height/2:o==="bottom"&&(i=t.height),i}function jI(t,o){let i=0;return typeof o=="number"?i=o:o==="center"?i=t.width/2:o==="right"&&(i=t.width),i}function FI(t){return[t.horizontal,t.vertical].map(o=>typeof o=="number"?`${o}px`:o).join(" ")}function c0(t){return typeof t=="function"?t():t}const Oee=t=>{const{classes:o}=t;return Ge({root:["root"],paper:["paper"]},Nee,o)},Lee=Ce(LC,{name:"MuiPopover",slot:"Root",overridesResolver:(t,o)=>o.root})({}),zee=Ce(Oa,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,o)=>o.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),jee=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiPopover"}),{action:d,anchorEl:h,anchorOrigin:f={vertical:"top",horizontal:"left"},anchorPosition:b,anchorReference:m="anchorEl",children:v,className:C,container:_,elevation:A=8,marginThreshold:S=16,open:M,PaperProps:I={},transformOrigin:U={vertical:"top",horizontal:"left"},TransitionComponent:N=AX,transitionDuration:O="auto",TransitionProps:{onEntering:L}={}}=l,q=Se(l.TransitionProps,Bee),K=Se(l,Ree),J=R.useRef(),H=Ln(J,I.ref),F=G({},l,{anchorOrigin:f,anchorReference:m,elevation:A,marginThreshold:S,PaperProps:I,transformOrigin:U,TransitionComponent:N,transitionDuration:O,TransitionProps:q}),X=Oee(F),ee=R.useCallback(()=>{if(m==="anchorPosition")return b;const re=c0(h),Re=(re&&re.nodeType===1?re:Lo(J.current).body).getBoundingClientRect();return{top:Re.top+zI(Re,f.vertical),left:Re.left+jI(Re,f.horizontal)}},[h,f.horizontal,f.vertical,b,m]),ce=R.useCallback(re=>({vertical:zI(re,U.vertical),horizontal:jI(re,U.horizontal)}),[U.horizontal,U.vertical]),ke=R.useCallback(re=>{const _e={width:re.offsetWidth,height:re.offsetHeight},Re=ce(_e);if(m==="none")return{top:null,left:null,transformOrigin:FI(Re)};const Ee=ee();let Le=Ee.top-Re.vertical,tt=Ee.left-Re.horizontal;const Xe=Le+_e.height,We=tt+_e.width,Gt=ji(c0(h)),Ye=Gt.innerHeight-S,wt=Gt.innerWidth-S;if(Le<S){const je=Le-S;Le-=je,Re.vertical+=je}else if(Xe>Ye){const je=Xe-Ye;Le-=je,Re.vertical+=je}if(tt<S){const je=tt-S;tt-=je,Re.horizontal+=je}else if(We>wt){const je=We-wt;tt-=je,Re.horizontal+=je}return{top:`${Math.round(Le)}px`,left:`${Math.round(tt)}px`,transformOrigin:FI(Re)}},[h,m,ee,ce,S]),[ge,fe]=R.useState(M),he=R.useCallback(()=>{const re=J.current;if(!re)return;const _e=ke(re);_e.top!==null&&(re.style.top=_e.top),_e.left!==null&&(re.style.left=_e.left),re.style.transformOrigin=_e.transformOrigin,fe(!0)},[ke]),ve=(re,_e)=>{L&&L(re,_e),he()},De=()=>{fe(!1)};R.useEffect(()=>{M&&he()}),R.useImperativeHandle(d,()=>M?{updatePosition:()=>{he()}}:null,[M,he]),R.useEffect(()=>{if(!M)return;const re=sb(()=>{he()}),_e=ji(h);return _e.addEventListener("resize",re),()=>{re.clear(),_e.removeEventListener("resize",re)}},[h,M,he]);let oe=O;O==="auto"&&!N.muiSupportAuto&&(oe=void 0);const se=_||(h?Lo(c0(h)).body:void 0);return T(Lee,G({BackdropProps:{invisible:!0},className:Te(X.root,C),container:se,open:M,ref:i,ownerState:F},K,{children:T(N,G({appear:!0,in:M,onEntering:ve,onExited:De,timeout:oe},q,{children:T(zee,G({elevation:A},I,{ref:H,className:Te(X.paper,I.className)},ge?void 0:{style:G({},I.style,{opacity:0})},{ownerState:F,children:v}))}))}))}),Fee=jee;function $ee(t){return Ve("MuiMenu",t)}Ue("MuiMenu",["root","paper","list"]);const Vee=["onEntering"],Uee=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],Hee={vertical:"top",horizontal:"right"},Wee={vertical:"top",horizontal:"left"},qee=t=>{const{classes:o}=t;return Ge({root:["root"],paper:["paper"],list:["list"]},$ee,o)},Gee=Ce(Fee,{shouldForwardProp:t=>Fo(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,o)=>o.root})({}),Kee=Ce(Oa,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,o)=>o.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Yee=Ce(Pee,{name:"MuiMenu",slot:"List",overridesResolver:(t,o)=>o.list})({outline:0}),Qee=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiMenu"}),{autoFocus:d=!0,children:h,disableAutoFocusItem:f=!1,MenuListProps:b={},onClose:m,open:v,PaperProps:C={},PopoverClasses:_,transitionDuration:A="auto",TransitionProps:{onEntering:S}={},variant:M="selectedMenu"}=l,I=Se(l.TransitionProps,Vee),U=Se(l,Uee),N=Ba(),O=N.direction==="rtl",L=G({},l,{autoFocus:d,disableAutoFocusItem:f,MenuListProps:b,onEntering:S,PaperProps:C,transitionDuration:A,TransitionProps:I,variant:M}),q=qee(L),K=d&&!f&&v,J=R.useRef(null),H=(ee,ce)=>{J.current&&J.current.adjustStyleForScrollbar(ee,N),S&&S(ee,ce)},F=ee=>{ee.key==="Tab"&&(ee.preventDefault(),m&&m(ee,"tabKeyDown"))};let X=-1;return R.Children.map(h,(ee,ce)=>{R.isValidElement(ee)&&(ee.props.disabled||(M==="selectedMenu"&&ee.props.selected||X===-1)&&(X=ce))}),T(Gee,G({onClose:m,anchorOrigin:{vertical:"bottom",horizontal:O?"right":"left"},transformOrigin:O?Hee:Wee,PaperProps:G({as:Kee},C,{classes:G({},C.classes,{root:q.paper})}),className:q.root,open:v,ref:i,transitionDuration:A,TransitionProps:G({onEntering:H},I),ownerState:L},U,{classes:_,children:T(Yee,G({onKeyDown:F,actions:J,autoFocus:d&&(X===-1||f),autoFocusItem:K,variant:M},b,{className:Te(q.list,b.className),children:h}))}))}),Zee=Qee;function Jee(t){return Ve("MuiMenuItem",t)}const Xee=Ue("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Sh=Xee,ete=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],tte=(t,o)=>{const{ownerState:i}=t;return[o.root,i.dense&&o.dense,i.divider&&o.divider,!i.disableGutters&&o.gutters]},nte=t=>{const{disabled:o,dense:i,divider:l,disableGutters:d,selected:h,classes:f}=t,m=Ge({root:["root",i&&"dense",o&&"disabled",!d&&"gutters",l&&"divider",h&&"selected"]},Jee,f);return G({},f,m)},ote=Ce(gu,{shouldForwardProp:t=>Fo(t)||t==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:tte})(({theme:t,ownerState:o})=>G({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Sh.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:_n(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${Sh.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:_n(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${Sh.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:_n(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:_n(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${Sh.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${Sh.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${II.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${II.inset}`]:{marginLeft:52},[`& .${um.root}`]:{marginTop:0,marginBottom:0},[`& .${um.inset}`]:{paddingLeft:36},[`& .${OI.root}`]:{minWidth:36}},!o.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},o.dense&&G({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${OI.root} svg`]:{fontSize:"1.25rem"}}))),rte=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiMenuItem"}),{autoFocus:d=!1,component:h="li",dense:f=!1,divider:b=!1,disableGutters:m=!1,focusVisibleClassName:v,role:C="menuitem",tabIndex:_,className:A}=l,S=Se(l,ete),M=R.useContext(Yr),I=R.useMemo(()=>({dense:f||M.dense||!1,disableGutters:m}),[M.dense,f,m]),U=R.useRef(null);Fi(()=>{d&&U.current&&U.current.focus()},[d]);const N=G({},l,{dense:I.dense,divider:b,disableGutters:m}),O=nte(l),L=Ln(U,i);let q;return l.disabled||(q=_!==void 0?_:-1),T(Yr.Provider,{value:I,children:T(ote,G({ref:L,role:C,tabIndex:q,component:h,focusVisibleClassName:Te(O.focusVisible,v),className:Te(O.root,A)},S,{ownerState:N,classes:O}))})}),Ca=rte;function ite(t){return Ve("MuiNativeSelect",t)}const ste=Ue("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]),jC=ste,ate=["className","disabled","IconComponent","inputRef","variant"],lte=t=>{const{classes:o,variant:i,disabled:l,multiple:d,open:h}=t,f={select:["select",i,l&&"disabled",d&&"multiple"],icon:["icon",`icon${Be(i)}`,h&&"iconOpen",l&&"disabled"]};return Ge(f,ite,o)},gB=({ownerState:t,theme:o})=>G({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":G({},o.vars?{backgroundColor:`rgba(${o.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:o.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${jC.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(o.vars||o).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},t.variant==="filled"&&{"&&&":{paddingRight:32}},t.variant==="outlined"&&{borderRadius:(o.vars||o).shape.borderRadius,"&:focus":{borderRadius:(o.vars||o).shape.borderRadius},"&&&":{paddingRight:32}}),cte=Ce("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:Fo,overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.select,o[i.variant],{[`&.${jC.multiple}`]:o.multiple}]}})(gB),mB=({ownerState:t,theme:o})=>G({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(o.vars||o).palette.action.active,[`&.${jC.disabled}`]:{color:(o.vars||o).palette.action.disabled}},t.open&&{transform:"rotate(180deg)"},t.variant==="filled"&&{right:7},t.variant==="outlined"&&{right:7}),dte=Ce("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.icon,i.variant&&o[`icon${Be(i.variant)}`],i.open&&o.iconOpen]}})(mB),ute=R.forwardRef(function(o,i){const{className:l,disabled:d,IconComponent:h,inputRef:f,variant:b="standard"}=o,m=Se(o,ate),v=G({},o,{disabled:d,variant:b}),C=lte(v);return ue(R.Fragment,{children:[T(cte,G({ownerState:v,className:Te(C.select,l),disabled:d,ref:f||i},m)),o.multiple?null:T(dte,{as:h,ownerState:v,className:C.icon})]})}),hte=ute;var $I;const pte=["children","classes","className","label","notched"],fte=Ce("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),gte=Ce("legend")(({ownerState:t,theme:o})=>G({float:"unset",width:"auto",overflow:"hidden"},!t.withLabel&&{padding:0,lineHeight:"11px",transition:o.transitions.create("width",{duration:150,easing:o.transitions.easing.easeOut})},t.withLabel&&G({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:o.transitions.create("max-width",{duration:50,easing:o.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},t.notched&&{maxWidth:"100%",transition:o.transitions.create("max-width",{duration:100,easing:o.transitions.easing.easeOut,delay:50})})));function mte(t){const{className:o,label:i,notched:l}=t,d=Se(t,pte),h=i!=null&&i!=="",f=G({},t,{notched:l,withLabel:h});return T(fte,G({"aria-hidden":!0,className:o,ownerState:f},d,{children:T(gte,{ownerState:f,children:h?T("span",{children:i}):$I||($I=T("span",{className:"notranslate",children:"​"}))})}))}const bte=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],kte=t=>{const{classes:o}=t,l=Ge({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},dQ,o);return G({},o,l)},wte=Ce(_b,{shouldForwardProp:t=>Fo(t)||t==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:Cb})(({theme:t,ownerState:o})=>{const i=t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return G({position:"relative",borderRadius:(t.vars||t).shape.borderRadius,[`&:hover .${Zs.notchedOutline}`]:{borderColor:(t.vars||t).palette.text.primary},"@media (hover: none)":{[`&:hover .${Zs.notchedOutline}`]:{borderColor:t.vars?`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:i}},[`&.${Zs.focused} .${Zs.notchedOutline}`]:{borderColor:(t.vars||t).palette[o.color].main,borderWidth:2},[`&.${Zs.error} .${Zs.notchedOutline}`]:{borderColor:(t.vars||t).palette.error.main},[`&.${Zs.disabled} .${Zs.notchedOutline}`]:{borderColor:(t.vars||t).palette.action.disabled}},o.startAdornment&&{paddingLeft:14},o.endAdornment&&{paddingRight:14},o.multiline&&G({padding:"16.5px 14px"},o.size==="small"&&{padding:"8.5px 14px"}))}),vte=Ce(mte,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(t,o)=>o.notchedOutline})(({theme:t})=>{const o=t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:t.vars?`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:o}}),yte=Ce(xb,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:Ab})(({theme:t,ownerState:o})=>G({padding:"16.5px 14px"},!t.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:t.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:t.palette.mode==="light"?null:"#fff",caretColor:t.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},t.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[t.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},o.size==="small"&&{padding:"8.5px 14px"},o.multiline&&{padding:0},o.startAdornment&&{paddingLeft:0},o.endAdornment&&{paddingRight:0})),bB=R.forwardRef(function(o,i){var l,d,h,f,b;const m=He({props:o,name:"MuiOutlinedInput"}),{components:v={},fullWidth:C=!1,inputComponent:_="input",label:A,multiline:S=!1,notched:M,slots:I={},type:U="text"}=m,N=Se(m,bte),O=kte(m),L=bu(),q=mu({props:m,muiFormControl:L,states:["required"]}),K=G({},m,{color:q.color||"primary",disabled:q.disabled,error:q.error,focused:q.focused,formControl:L,fullWidth:C,hiddenLabel:q.hiddenLabel,multiline:S,size:q.size,type:U}),J=(l=(d=I.root)!=null?d:v.Root)!=null?l:wte,H=(h=(f=I.input)!=null?f:v.Input)!=null?h:yte;return T(OC,G({slots:{root:J,input:H},renderSuffix:F=>T(vte,{ownerState:K,className:O.notchedOutline,label:A!=null&&A!==""&&q.required?b||(b=ue(R.Fragment,{children:[A," ","*"]})):A,notched:typeof M<"u"?M:!!(F.startAdornment||F.filled||F.focused)}),fullWidth:C,inputComponent:_,multiline:S,ref:i,type:U},N,{classes:G({},O,{notchedOutline:null})}))});bB.muiName="Input";const kB=bB;function Cte(t){return Ve("MuiSelect",t)}const Ate=Ue("MuiSelect",["select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]),og=Ate;var VI;const _te=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],xte=Ce("div",{name:"MuiSelect",slot:"Select",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[{[`&.${og.select}`]:o.select},{[`&.${og.select}`]:o[i.variant]},{[`&.${og.multiple}`]:o.multiple}]}})(gB,{[`&.${og.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),Ete=Ce("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.icon,i.variant&&o[`icon${Be(i.variant)}`],i.open&&o.iconOpen]}})(mB),Ste=Ce("input",{shouldForwardProp:t=>tK(t)&&t!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(t,o)=>o.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function UI(t,o){return typeof o=="object"&&o!==null?t===o:String(t)===String(o)}function Dte(t){return t==null||typeof t=="string"&&!t.trim()}const Tte=t=>{const{classes:o,variant:i,disabled:l,multiple:d,open:h}=t,f={select:["select",i,l&&"disabled",d&&"multiple"],icon:["icon",`icon${Be(i)}`,h&&"iconOpen",l&&"disabled"],nativeInput:["nativeInput"]};return Ge(f,Cte,o)},Ite=R.forwardRef(function(o,i){const{"aria-describedby":l,"aria-label":d,autoFocus:h,autoWidth:f,children:b,className:m,defaultOpen:v,defaultValue:C,disabled:_,displayEmpty:A,IconComponent:S,inputRef:M,labelId:I,MenuProps:U={},multiple:N,name:O,onBlur:L,onChange:q,onClose:K,onFocus:J,onOpen:H,open:F,readOnly:X,renderValue:ee,SelectDisplayProps:ce={},tabIndex:ke,value:ge,variant:fe="standard"}=o,he=Se(o,_te),[ve,De]=Tv({controlled:ge,default:C,name:"Select"}),[oe,se]=Tv({controlled:F,default:v,name:"Select"}),re=R.useRef(null),_e=R.useRef(null),[Re,Ee]=R.useState(null),{current:Le}=R.useRef(F!=null),[tt,Xe]=R.useState(),We=Ln(i,M),Gt=R.useCallback(me=>{_e.current=me,me&&Ee(me)},[]),Ye=Re==null?void 0:Re.parentNode;R.useImperativeHandle(We,()=>({focus:()=>{_e.current.focus()},node:re.current,value:ve}),[ve]),R.useEffect(()=>{v&&oe&&Re&&!Le&&(Xe(f?null:Ye.clientWidth),_e.current.focus())},[Re,f]),R.useEffect(()=>{h&&_e.current.focus()},[h]),R.useEffect(()=>{if(!I)return;const me=Lo(_e.current).getElementById(I);if(me){const dt=()=>{getSelection().isCollapsed&&_e.current.focus()};return me.addEventListener("click",dt),()=>{me.removeEventListener("click",dt)}}},[I]);const wt=(me,dt)=>{me?H&&H(dt):K&&K(dt),Le||(Xe(f?null:Ye.clientWidth),se(me))},je=me=>{me.button===0&&(me.preventDefault(),_e.current.focus(),wt(!0,me))},et=me=>{wt(!1,me)},xn=R.Children.toArray(b),Ze=me=>{const dt=xn.map(Xn=>Xn.props.value).indexOf(me.target.value);if(dt===-1)return;const Me=xn[dt];De(Me.props.value),q&&q(me,Me)},mn=me=>dt=>{let Me;if(dt.currentTarget.hasAttribute("tabindex")){if(N){Me=Array.isArray(ve)?ve.slice():[];const Xn=ve.indexOf(me.props.value);Xn===-1?Me.push(me.props.value):Me.splice(Xn,1)}else Me=me.props.value;if(me.props.onClick&&me.props.onClick(dt),ve!==Me&&(De(Me),q)){const Xn=dt.nativeEvent||dt,Ui=new Xn.constructor(Xn.type,Xn);Object.defineProperty(Ui,"target",{writable:!0,value:{value:Me,name:O}}),q(Ui,me)}N||wt(!1,dt)}},Ke=me=>{X||[" ","ArrowUp","ArrowDown","Enter"].indexOf(me.key)!==-1&&(me.preventDefault(),wt(!0,me))},st=Re!==null&&oe,an=me=>{!st&&L&&(Object.defineProperty(me,"target",{writable:!0,value:{value:ve,name:O}}),L(me))};delete he["aria-invalid"];let nn,vt;const nt=[];let Nt=!1;(RC({value:ve})||A)&&(ee?nn=ee(ve):Nt=!0);const Bt=xn.map(me=>{if(!R.isValidElement(me))return null;let dt;if(N){if(!Array.isArray(ve))throw new Error(Da(2));dt=ve.some(Me=>UI(Me,me.props.value)),dt&&Nt&&nt.push(me.props.children)}else dt=UI(ve,me.props.value),dt&&Nt&&(vt=me.props.children);return R.cloneElement(me,{"aria-selected":dt?"true":"false",onClick:mn(me),onKeyUp:Me=>{Me.key===" "&&Me.preventDefault(),me.props.onKeyUp&&me.props.onKeyUp(Me)},role:"option",selected:dt,value:void 0,"data-value":me.props.value})});Nt&&(N?nt.length===0?nn=null:nn=nt.reduce((me,dt,Me)=>(me.push(dt),Me<nt.length-1&&me.push(", "),me),[]):nn=vt);let Et=tt;!f&&Le&&Re&&(Et=Ye.clientWidth);let Mn;typeof ke<"u"?Mn=ke:Mn=_?null:0;const Qt=ce.id||(O?`mui-component-select-${O}`:void 0),Zt=G({},o,{variant:fe,value:ve,open:st}),ct=Tte(Zt);return ue(R.Fragment,{children:[T(xte,G({ref:Gt,tabIndex:Mn,role:"button","aria-disabled":_?"true":void 0,"aria-expanded":st?"true":"false","aria-haspopup":"listbox","aria-label":d,"aria-labelledby":[I,Qt].filter(Boolean).join(" ")||void 0,"aria-describedby":l,onKeyDown:Ke,onMouseDown:_||X?null:je,onBlur:an,onFocus:J},ce,{ownerState:Zt,className:Te(ce.className,ct.select,m),id:Qt,children:Dte(nn)?VI||(VI=T("span",{className:"notranslate",children:"​"})):nn})),T(Ste,G({value:Array.isArray(ve)?ve.join(","):ve,name:O,ref:re,"aria-hidden":!0,onChange:Ze,tabIndex:-1,disabled:_,className:ct.nativeInput,autoFocus:h,ownerState:Zt},he)),T(Ete,{as:S,className:ct.icon,ownerState:Zt}),T(Zee,G({id:`menu-${O||""}`,anchorEl:Ye,open:st,onClose:et,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},U,{MenuListProps:G({"aria-labelledby":I,role:"listbox",disableListWrap:!0},U.MenuListProps),PaperProps:G({},U.PaperProps,{style:G({minWidth:Et},U.PaperProps!=null?U.PaperProps.style:null)}),children:Bt}))]})}),Mte=Ite;var HI,WI;const Pte=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],Nte=t=>{const{classes:o}=t;return o},FC={name:"MuiSelect",overridesResolver:(t,o)=>o.root,shouldForwardProp:t=>Fo(t)&&t!=="variant",slot:"Root"},Bte=Ce(uB,FC)(""),Rte=Ce(kB,FC)(""),Ote=Ce(aB,FC)(""),wB=R.forwardRef(function(o,i){const l=He({name:"MuiSelect",props:o}),{autoWidth:d=!1,children:h,classes:f={},className:b,defaultOpen:m=!1,displayEmpty:v=!1,IconComponent:C=fQ,id:_,input:A,inputProps:S,label:M,labelId:I,MenuProps:U,multiple:N=!1,native:O=!1,onClose:L,onOpen:q,open:K,renderValue:J,SelectDisplayProps:H,variant:F="outlined"}=l,X=Se(l,Pte),ee=O?hte:Mte,ce=bu(),ge=mu({props:l,muiFormControl:ce,states:["variant"]}).variant||F,fe=A||{standard:HI||(HI=T(Bte,{})),outlined:T(Rte,{label:M}),filled:WI||(WI=T(Ote,{}))}[ge],he=G({},l,{variant:ge,classes:f}),ve=Nte(he),De=Ln(i,fe.ref);return T(R.Fragment,{children:R.cloneElement(fe,G({inputComponent:ee,inputProps:G({children:h,IconComponent:C,variant:ge,type:void 0,multiple:N},O?{id:_}:{autoWidth:d,defaultOpen:m,displayEmpty:v,labelId:I,MenuProps:U,onClose:L,onOpen:q,open:K,renderValue:J,SelectDisplayProps:G({id:_},H)},S,{classes:S?_r(ve,S.classes):ve},A?A.props.inputProps:{})},N&&O&&ge==="outlined"?{notched:!0}:{},{ref:De,className:Te(fe.props.className,b)},!A&&{variant:ge},X))})});wB.muiName="Select";const Lte=wB;function zte(t){return Ve("MuiToolbar",t)}Ue("MuiToolbar",["root","gutters","regular","dense"]);const jte=["className","component","disableGutters","variant"],Fte=t=>{const{classes:o,disableGutters:i,variant:l}=t;return Ge({root:["root",!i&&"gutters",l]},zte,o)},$te=Ce("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[o.root,!i.disableGutters&&o.gutters,o[i.variant]]}})(({theme:t,ownerState:o})=>G({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},o.variant==="dense"&&{minHeight:48}),({theme:t,ownerState:o})=>o.variant==="regular"&&t.mixins.toolbar),Vte=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiToolbar"}),{className:d,component:h="div",disableGutters:f=!1,variant:b="regular"}=l,m=Se(l,jte),v=G({},l,{component:h,disableGutters:f,variant:b}),C=Fte(v);return T($te,G({as:h,className:Te(C.root,d),ref:i,ownerState:v},m))}),Ute=Vte;function Hte(t){return Ve("MuiTextField",t)}Ue("MuiTextField",["root"]);const Wte=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],qte={standard:uB,filled:aB,outlined:kB},Gte=t=>{const{classes:o}=t;return Ge({root:["root"]},Hte,o)},Kte=Ce(UJ,{name:"MuiTextField",slot:"Root",overridesResolver:(t,o)=>o.root})({}),Yte=R.forwardRef(function(o,i){const l=He({props:o,name:"MuiTextField"}),{autoComplete:d,autoFocus:h=!1,children:f,className:b,color:m="primary",defaultValue:v,disabled:C=!1,error:_=!1,FormHelperTextProps:A,fullWidth:S=!1,helperText:M,id:I,InputLabelProps:U,inputProps:N,InputProps:O,inputRef:L,label:q,maxRows:K,minRows:J,multiline:H=!1,name:F,onBlur:X,onChange:ee,onFocus:ce,placeholder:ke,required:ge=!1,rows:fe,select:he=!1,SelectProps:ve,type:De,value:oe,variant:se="outlined"}=l,re=Se(l,Wte),_e=G({},l,{autoFocus:h,color:m,disabled:C,error:_,fullWidth:S,multiline:H,required:ge,select:he,variant:se}),Re=Gte(_e),Ee={};se==="outlined"&&(U&&typeof U.shrink<"u"&&(Ee.notched=U.shrink),Ee.label=q),he&&((!ve||!ve.native)&&(Ee.id=void 0),Ee["aria-describedby"]=void 0);const Le=hC(I),tt=M&&Le?`${Le}-helper-text`:void 0,Xe=q&&Le?`${Le}-label`:void 0,We=qte[se],Gt=T(We,G({"aria-describedby":tt,autoComplete:d,autoFocus:h,defaultValue:v,fullWidth:S,multiline:H,name:F,rows:fe,maxRows:K,minRows:J,type:De,value:oe,id:Le,inputRef:L,onBlur:X,onChange:ee,onFocus:ce,placeholder:ke,inputProps:N},Ee,O));return ue(Kte,G({className:Te(Re.root,b),disabled:C,error:_,fullWidth:S,ref:i,required:ge,color:m,variant:se,ownerState:_e},re,{children:[q!=null&&q!==""&&T(NX,G({htmlFor:Le,id:Xe},U,{children:q})),he?T(Lte,G({"aria-describedby":tt,id:Le,labelId:Xe,value:oe,input:Gt},ve,{children:f})):Gt,M&&T(QJ,G({id:tt},A,{children:M}))]}))}),Ft=Yte;var $C={},Ao={},Qte={get exports(){return Ao},set exports(t){Ao=t}};(function(t){function o(i){return i&&i.__esModule?i:{default:i}}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports})(Qte);var d0={};const Zte=pM(UK);var qI;function cr(){return qI||(qI=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=Zte}(d0)),d0}const dr=pM(R6);var Jte=Ao;Object.defineProperty($C,"__esModule",{value:!0});var vB=$C.default=void 0,Xte=Jte(cr()),ene=dr,tne=(0,Xte.default)((0,ene.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");vB=$C.default=tne;var VC={},nne=Ao;Object.defineProperty(VC,"__esModule",{value:!0});var yB=VC.default=void 0,one=nne(cr()),rne=dr,ine=(0,one.default)((0,rne.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");yB=VC.default=ine;var UC={},sne=Ao;Object.defineProperty(UC,"__esModule",{value:!0});var CB=UC.default=void 0,ane=sne(cr()),lne=dr,cne=(0,ane.default)((0,lne.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");CB=UC.default=cne;var HC={},dne=Ao;Object.defineProperty(HC,"__esModule",{value:!0});var AB=HC.default=void 0,une=dne(cr()),hne=dr,pne=(0,une.default)((0,hne.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail");AB=HC.default=pne;var WC={},fne=Ao;Object.defineProperty(WC,"__esModule",{value:!0});var _B=WC.default=void 0,gne=fne(cr()),mne=dr,bne=(0,gne.default)((0,mne.jsx)("path",{d:"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"}),"Apps");_B=WC.default=bne;var qC={},kne=Ao;Object.defineProperty(qC,"__esModule",{value:!0});var xB=qC.default=void 0,wne=kne(cr()),u0=dr,vne=(0,wne.default)([(0,u0.jsx)("path",{d:"m12 2-5.5 9h11z"},"0"),(0,u0.jsx)("circle",{cx:"17.5",cy:"17.5",r:"4.5"},"1"),(0,u0.jsx)("path",{d:"M3 13.5h8v8H3z"},"2")],"Category");xB=qC.default=vne;var GC={},yne=Ao;Object.defineProperty(GC,"__esModule",{value:!0});var EB=GC.default=void 0,Cne=yne(cr()),Ane=dr,_ne=(0,Cne.default)((0,Ane.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}),"Work");EB=GC.default=_ne;var KC={},xne=Ao;Object.defineProperty(KC,"__esModule",{value:!0});var SB=KC.default=void 0,Ene=xne(cr()),Sne=dr,Dne=(0,Ene.default)((0,Sne.jsx)("path",{d:"M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"}),"Login");SB=KC.default=Dne;var YC={},Tne=Ao;Object.defineProperty(YC,"__esModule",{value:!0});var DB=YC.default=void 0,Ine=Tne(cr()),Mne=dr,Pne=(0,Ine.default)((0,Mne.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");DB=YC.default=Pne;var QC={},Nne=Ao;Object.defineProperty(QC,"__esModule",{value:!0});var TB=QC.default=void 0,Bne=Nne(cr()),Rne=dr,One=(0,Bne.default)((0,Rne.jsx)("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}),"Face");TB=QC.default=One;var ZC={},Lne=Ao;Object.defineProperty(ZC,"__esModule",{value:!0});var IB=ZC.default=void 0,zne=Lne(cr()),jne=dr,Fne=(0,zne.default)((0,jne.jsx)("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"ExitToApp");IB=ZC.default=Fne;const hm=240,GI=t=>({width:hm,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),overflowX:"hidden"}),KI=t=>({transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),overflowX:"hidden",width:`calc(${t.spacing(7)} + 1px)`,[t.breakpoints.up("sm")]:{width:`calc(${t.spacing(8)} + 1px)`}}),YI=Ce("div")(({theme:t})=>({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1),...t.mixins.toolbar})),$ne=Ce(XY,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:o})=>({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...o&&{marginLeft:hm,width:`calc(100% - ${hm}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}})),Vne=Ce(SJ,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:o})=>({width:hm,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",...o&&{...GI(t),"& .MuiDrawer-paper":GI(t)},...!o&&{...KI(t),"& .MuiDrawer-paper":KI(t)}})),zn=({children:t})=>{const o=Ba(),[i,l]=R.useState(!1),d=ko(),{startLogout:h}=uc(),{status:f}=it(N=>N.auth),b=()=>{l(!0)},m=()=>{l(!1)},v=()=>{d("/messages/my-conversations")},C=()=>{d("/application/applications-by-user")},_=()=>{d("/categories/all-categories")},A=()=>{d("/vacancy/all")},S=()=>{d("/auth/login")},M=()=>{d("/auth/register")},I=()=>{d("/my-profile")},U=()=>{h(),d("/")};return ue(xp,{sx:{display:"flex"},children:[T(tB,{}),T($ne,{position:"fixed",open:i,children:ue(Ute,{children:[T(_p,{color:"inherit","aria-label":"open drawer",onClick:b,edge:"start",sx:{marginRight:5,...i&&{display:"none"}},children:T(vB,{})}),T(Zr,{variant:"h6",component:"div",to:"/",style:{color:"white",textDecoration:"none",cursor:"pointer",fontSize:"20px"},children:"Jobs App"})]})}),ue(Vne,{variant:"permanent",open:i,children:[T(YI,{children:T(_p,{onClick:m,children:o.direction==="rtl"?T(CB,{}):T(yB,{})})}),T(s0,{}),f=="authenticated"?ue(Mt,{children:[ue(xg,{children:[T(ea,{disablePadding:!0,sx:{display:"block"},children:ue(Xs,{sx:{minHeight:48,justifyContent:i?"initial":"center",px:2.5},onClick:v,children:[T(ta,{sx:{minWidth:0,mr:i?3:"auto",justifyContent:"center"},children:T(AB,{})}),T(na,{primary:"Messages",sx:{opacity:i?1:0}})]})},"messages"),T(ea,{disablePadding:!0,sx:{display:"block"},children:ue(Xs,{sx:{minHeight:48,justifyContent:i?"initial":"center",px:2.5},onClick:C,children:[T(ta,{sx:{minWidth:0,mr:i?3:"auto",justifyContent:"center"},children:T(_B,{})}),T(na,{primary:"My Applications",sx:{opacity:i?1:0}})]})},"applications")]}),T(s0,{})]}):T(Mt,{}),ue(xg,{children:[T(ea,{disablePadding:!0,sx:{display:"block"},children:ue(Xs,{sx:{minHeight:48,justifyContent:i?"initial":"center",px:2.5},onClick:_,children:[T(ta,{sx:{minWidth:0,mr:i?3:"auto",justifyContent:"center"},children:T(xB,{})}),T(na,{primary:"Categories",sx:{opacity:i?1:0}})]})},"categories"),T(ea,{disablePadding:!0,sx:{display:"block"},children:ue(Xs,{sx:{minHeight:48,justifyContent:i?"initial":"center",px:2.5},onClick:A,children:[T(ta,{sx:{minWidth:0,mr:i?3:"auto",justifyContent:"center"},children:T(EB,{})}),T(na,{primary:"Find a Job",sx:{opacity:i?1:0}})]})},"find-job")]}),T(s0,{}),T(xg,{children:f=="authenticated"?ue(Mt,{children:[T(ea,{disablePadding:!0,sx:{display:"block"},children:ue(Xs,{sx:{minHeight:48,justifyContent:i?"initial":"center",px:2.5},onClick:I,children:[T(ta,{sx:{minWidth:0,mr:i?3:"auto",justifyContent:"center"},children:T(TB,{})}),T(na,{primary:"Profile",sx:{opacity:i?1:0}})]})},"my-profile"),T(ea,{disablePadding:!0,sx:{display:"block"},children:ue(Xs,{sx:{minHeight:48,justifyContent:i?"initial":"center",px:2.5},onClick:U,children:[T(ta,{sx:{minWidth:0,mr:i?3:"auto",justifyContent:"center"},children:T(IB,{})}),T(na,{primary:"Logout",sx:{opacity:i?1:0}})]})},"logout")]}):ue(Mt,{children:[T(ea,{disablePadding:!0,sx:{display:"block"},children:ue(Xs,{sx:{minHeight:48,justifyContent:i?"initial":"center",px:2.5},onClick:S,children:[T(ta,{sx:{minWidth:0,mr:i?3:"auto",justifyContent:"center"},children:T(SB,{})}),T(na,{primary:"Login",sx:{opacity:i?1:0}})]})},"login"),T(ea,{disablePadding:!0,sx:{display:"block"},children:ue(Xs,{sx:{minHeight:48,justifyContent:i?"initial":"center",px:2.5},onClick:M,children:[T(ta,{sx:{minWidth:0,mr:i?3:"auto",justifyContent:"center"},children:T(DB,{})}),T(na,{primary:"Create Account",sx:{opacity:i?1:0}})]})},"create-account")]})})]}),ue(xp,{component:"main",sx:{flexGrow:1,p:1},children:[T(YI,{}),t]})]})},Une=()=>{const{startChecking:t,startVerifyingActivationCode:o,startClearingMessages:i}=uc(),{status:l,activateAccountFailedMsg:d}=it(S=>S.auth),h={code:null},[f,b]=R.useState(h),[m,v]=R.useState(""),C=S=>{S.target.value.length<19?f.code="Invalid Code":f.code=null,v(S.target.value)},_=S=>{S.preventDefault(),f.code==null&&t()},A=()=>{f.code==null&&o(m)};return R.useEffect(()=>{d!=null&&(Tt.fire("Invalid Code",d,"error"),i())},[d]),T(zn,{children:T(ne,{container:!0,sx:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",maxWidth:1400,marginX:"auto"},children:ue(ne,{item:!0,sx:{backgroundColor:"white",boxShadow:3,padding:{xs:1,md:2},borderRadius:"10px",width:{xs:"100%",sm:"70%",md:"45%",lg:"35%"}},className:"animate__animated animate__fadeIn animate__faster",children:[T(ne,{item:!0,xs:12,sx:{display:"flex",justifyContent:"start",m:1},children:T(Je,{variant:"h6",sx:{color:"primary.main"},children:"Activate Account"})}),T("form",{onSubmit:_,children:ue(ne,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[T(ne,{item:!0,display:f.code==null?"none":"flex",sx:{justifyContent:"center",width:"100%",mb:2},children:T(In,{severity:"error",sx:{width:"100%"},children:f.code})}),T(ne,{item:!0,xs:12,sx:{marginY:2},children:T(Ft,{label:"Code",type:"text",variant:"outlined",fullWidth:!0,onChange:C,value:m})}),T(ne,{item:!0,xs:12,sx:{mb:2,display:"flex",justifyContent:"center"},children:T(It,{variant:"contained",onClick:A,disabled:l=="checking",type:"submit",children:"Send"})})]})})]})})})},Hne=()=>{const{startClearingMessages:t,startChecking:o,startLoginUser:i}=uc(),{activateAccountSuccessMsg:l,updatePasswordMsg:d,updatePasswordMsgFailed:h,status:f,LoginFailed:b}=it(L=>L.auth),m={email:null,password:null},[v,C]=R.useState(""),[_,A]=R.useState(""),[S,M]=R.useState(m),I=L=>{L.target.value.includes("@")?L.target.value.includes(".")?S.email=null:S.email="Email must have a domain":S.email="Email must contains the @ symbol",C(L.target.value)},U=L=>{L.target.value.length<8?S.password="password must have at least 8 characters":S.password=null,A(L.target.value)},N=L=>{L.preventDefault(),S.email==null&&S.password==null&&o()},O=()=>{S.email==null&&S.password==null&&i(v,_)};return R.useEffect(()=>{l!=null&&(Tt.fire("Account Activated",l,"success"),t())},[l]),R.useEffect(()=>{d!=null&&(Tt.fire("Password Updated",d,"success"),t())},[d]),R.useEffect(()=>{h!=null&&(Tt.fire("Password Update Failed",h,"error"),t())},[h]),R.useEffect(()=>{b!=null&&(Tt.fire("Login Failed",b,"error"),t())},[b]),T(zn,{children:T(ne,{container:!0,sx:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",maxWidth:1400,marginX:"auto"},children:ue(ne,{item:!0,sx:{backgroundColor:"white",boxShadow:3,padding:{xs:1,md:2},borderRadius:"10px",width:{xs:"100%",sm:"70%",md:"45%",lg:"35%"}},className:"animate__animated animate__fadeIn animate__faster",children:[T(ne,{item:!0,xs:12,sx:{display:"flex",justifyContent:"start",m:1},children:T(Je,{variant:"h6",sx:{color:"primary.main"},children:"Login"})}),T("form",{onSubmit:N,children:ue(ne,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[T(ne,{item:!0,display:S.email==null?"none":"flex",sx:{justifyContent:"center",width:"100%",mb:2},children:T(In,{severity:"error",sx:{width:"100%"},children:S.email})}),T(ne,{item:!0,xs:12,sx:{mb:2},children:T(Ft,{label:"Email",type:"email",variant:"outlined",fullWidth:!0,onChange:I,value:v})}),T(ne,{item:!0,display:S.password==null?"none":"flex",sx:{justifyContent:"center",width:"100%",mb:2},children:T(In,{severity:"error",sx:{width:"100%"},children:S.password})}),T(ne,{item:!0,xs:12,sx:{mb:2},children:T(Ft,{type:"password",label:"Password",variant:"outlined",fullWidth:!0,onChange:U,value:_})}),T(ne,{item:!0,xs:12,sx:{mb:2,display:"flex",justifyContent:"center"},children:T(It,{variant:"contained",onClick:O,type:"submit",disabled:f=="checking",children:"Sign In"})})]})}),ue(ne,{container:!0,sx:{display:"flex",justifyContent:"space-between"},children:[T(Zr,{style:{display:"block",cursor:"pointer",textDecoration:"none",color:"primary.main"},to:"/auth/register",children:"Create Account"}),T(Zr,{style:{display:"block",cursor:"pointer",textDecoration:"none",color:"primary.main"},to:"/auth/recover-password",children:"¿Forgot Password?"})]})]})})})},Wne=()=>{const{startRequestUpdatePassword:t,startChecking:o,startClearingMessages:i}=uc(),{status:l,recoverPasswordSuccessRequestMsg:d,recoverPasswordFailedRequestMsg:h}=it(M=>M.auth),f={email:null},[b,m]=R.useState(""),[v,C]=R.useState(f),_=M=>{M.target.value.includes("@")?M.target.value.includes(".")?v.email=null:v.email="Email must have a domain":v.email="Email must contains the @ symbol",m(M.target.value)},A=M=>{M.preventDefault(),v.email==null&&o()},S=()=>{v.email==null&&t(b)};return R.useEffect(()=>{d!=null&&(Tt.fire("Link Sent",d,"success"),i(),m(""))},[d]),R.useEffect(()=>{h!=null&&(Tt.fire("Send Link Failed",h,"error"),i())},[h]),T(zn,{children:T(ne,{container:!0,sx:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",maxWidth:1400,marginX:"auto"},children:ue(ne,{item:!0,sx:{backgroundColor:"white",boxShadow:3,padding:{xs:1,md:2},borderRadius:"10px",width:{xs:"100%",sm:"70%",md:"45%",lg:"35%"}},className:"animate__animated animate__fadeIn animate__faster",children:[T(ne,{item:!0,xs:12,sx:{display:"flex",justifyContent:"start",m:1},children:T(Je,{variant:"h6",sx:{color:"primary.main"},children:"Recover Password"})}),T("form",{onSubmit:A,children:ue(ne,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[T(ne,{item:!0,display:v.email==null?"none":"flex",sx:{justifyContent:"center",width:"100%",mb:2},children:T(In,{severity:"error",sx:{width:"100%"},children:v.email})}),T(ne,{item:!0,xs:12,sx:{marginY:2},children:T(Ft,{label:"Email",type:"email",variant:"outlined",fullWidth:!0,onChange:_,value:b})}),T(ne,{item:!0,xs:12,sx:{mb:2,display:"flex",justifyContent:"center"},children:T(It,{variant:"contained",onClick:S,disabled:l=="checking",type:"submit",children:"Send Link"})})]})})]})})})},MB=t=>/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(t),qne=()=>{const{registerSucessMsg:t,registerFailedMsg:o,status:i}=it(H=>H.auth),{startRegisterUser:l,startChecking:d,startClearingMessages:h}=uc(),f={name:null,email:null,password:null,passwordConfirmation:null},[b,m]=R.useState(""),[v,C]=R.useState(""),[_,A]=R.useState(""),[S,M]=R.useState(""),[I,U]=R.useState(f),N=H=>{H.target.value.length<3?I.name="The name is to short":MB(H.target.value)?I.name="The name cannot contains special characters":I.name=null,m(H.target.value)},O=H=>{H.target.value.includes("@")?H.target.value.includes(".")?I.email=null:I.email="Email must have a domain":I.email="Email must contains the @ symbol",C(H.target.value)},L=H=>{H.target.value.length<8?I.password="password must have at least 8 characters":I.password=null,A(H.target.value)},q=H=>{H.target.value!=_?I.passwordConfirmation="Passwords must be the same":I.passwordConfirmation=null,M(H.target.value)},K=H=>{H.preventDefault(),I.email==null&&I.password==null&&I.name==null&&I.passwordConfirmation==null&&d()},J=()=>{I.email==null&&I.password==null&&I.name==null&&I.passwordConfirmation==null&&l({name:b,email:v,password:_})};return R.useEffect(()=>{t!=null&&(m(""),C(""),A(""),M(""),Tt.fire("Success Registered","In the link that we have sent to your email, you can enter the code that we sent you to activate your account.","success"),h())},[t]),R.useEffect(()=>{o!=null&&(Tt.fire("Register Failed",o,"error"),h())},[o]),T(zn,{children:T(ne,{container:!0,sx:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",maxWidth:1400,marginX:"auto"},children:ue(ne,{item:!0,sx:{backgroundColor:"white",boxShadow:3,padding:{xs:1,md:2},borderRadius:"10px",width:{xs:"100%",sm:"70%",md:"45%",lg:"35%"}},className:"animate__animated animate__fadeIn animate__faster",children:[T(ne,{item:!0,xs:12,sx:{display:"flex",justifyContent:"start",m:1},children:T(Je,{variant:"h6",sx:{color:"primary.main"},children:"Create Account"})}),T("form",{onSubmit:K,children:ue(ne,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[T(ne,{item:!0,display:I.name==null?"none":"flex",sx:{justifyContent:"center",width:"100%",mb:2},children:T(In,{severity:"error",sx:{width:"100%"},children:I.name})}),T(ne,{item:!0,xs:12,sx:{mb:2},children:T(Ft,{label:"Full Name",type:"text",variant:"outlined",fullWidth:!0,onChange:N,value:b})}),T(ne,{item:!0,display:I.email==null?"none":"flex",sx:{justifyContent:"center",width:"100%",mb:2},children:T(In,{severity:"error",sx:{width:"100%"},children:I.email})}),T(ne,{item:!0,xs:12,sx:{mb:2},children:T(Ft,{label:"Email",type:"email",variant:"outlined",fullWidth:!0,onChange:O,value:v})}),T(ne,{item:!0,display:I.password==null?"none":"flex",sx:{justifyContent:"center",width:"100%",mb:2},children:T(In,{severity:"error",sx:{width:"100%"},children:I.password})}),T(ne,{item:!0,xs:12,sx:{mb:2},children:T(Ft,{type:"password",label:"Password",variant:"outlined",fullWidth:!0,onChange:L,value:_})}),T(ne,{item:!0,display:I.passwordConfirmation==null?"none":"flex",sx:{justifyContent:"center",width:"100%",mb:2},children:T(In,{severity:"error",sx:{width:"100%"},children:I.passwordConfirmation})}),T(ne,{item:!0,xs:12,sx:{mb:2},children:T(Ft,{type:"password",label:"Confirm Password",variant:"outlined",fullWidth:!0,onChange:q,value:S})}),T(ne,{item:!0,xs:12,sx:{mb:2,display:"flex",justifyContent:"center"},children:T(It,{variant:"contained",disabled:i=="checking",onClick:J,type:"submit",children:"Sign Up"})})]})}),ue(ne,{container:!0,sx:{display:"flex",justifyContent:"space-between"},children:[T(Zr,{style:{display:"block",cursor:"pointer",textDecoration:"none",color:"primary.main"},to:"/auth/login",children:"Sign In"}),T(Zr,{style:{display:"block",cursor:"pointer",textDecoration:"none",color:"primary.main"},to:"/auth/recover-password",children:"¿Forgot Password?"})]})]})})})},$o=()=>T(ne,{sx:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},children:T(Fp,{})}),Gne=()=>{const t=ko(),{code:o}=cc(),{startVerifyChangePasswordCode:i,startUpdatingUserPassword:l}=uc(),{verifyCodeSuccessMsg:d,verifyCodeFailedMsg:h,status:f}=it(O=>O.auth);R.useEffect(()=>{i(o)},[]);const b={password:null,passwordConfirmation:null},[m,v]=R.useState(""),[C,_]=R.useState(""),[A,S]=R.useState(b),M=O=>{O.target.value.length<8?A.password="password must have at least 8 characters":A.password=null,v(O.target.value)},I=O=>{O.target.value!=m?A.passwordConfirmation="Passwords must be the same":A.passwordConfirmation=null,_(O.target.value)},U=O=>{O.preventDefault(),A.password==null&&A.passwordConfirmation==null&&startChecking()},N=()=>{A.password==null&&A.passwordConfirmation==null&&(l(o,m),t("/auth/login"))};return T(zn,{children:T(ne,{container:!0,sx:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",maxWidth:1400,marginX:"auto"},children:h==null&&d==null?T($o,{}):d!=null&&h==null?ue(ne,{item:!0,sx:{backgroundColor:"white",boxShadow:3,padding:{xs:1,md:2},borderRadius:"10px",width:{xs:"100%",sm:"70%",md:"45%",lg:"35%"}},className:"animate__animated animate__fadeIn animate__faster",children:[T(ne,{item:!0,xs:12,sx:{display:"flex",justifyContent:"start",m:1},children:T(Je,{variant:"h6",sx:{color:"primary.main"},children:"Update Password"})}),T("form",{onSubmit:U,children:ue(ne,{container:!0,sx:{display:"flex",justifyContent:"center"},children:[T(ne,{item:!0,display:A.password==null?"none":"flex",sx:{justifyContent:"center",width:"100%",mb:2},children:T(In,{severity:"error",sx:{width:"100%"},children:A.password})}),T(ne,{item:!0,xs:12,sx:{mb:2},children:T(Ft,{type:"password",label:"New Password",variant:"outlined",fullWidth:!0,onChange:M,value:m})}),T(ne,{item:!0,display:A.passwordConfirmation==null?"none":"flex",sx:{justifyContent:"center",width:"100%",mb:2},children:T(In,{severity:"error",sx:{width:"100%"},children:A.passwordConfirmation})}),T(ne,{item:!0,xs:12,sx:{mb:2},children:T(Ft,{type:"password",label:"Confirm Password",variant:"outlined",fullWidth:!0,onChange:I,value:C})}),T(ne,{item:!0,xs:12,sx:{mb:2,display:"flex",justifyContent:"center"},children:T(It,{variant:"contained",disabled:f=="checking",onClick:N,type:"submit",children:"Update"})})]})})]}):T(ne,{sx:{display:"flex",justifyContent:"center"},children:T(In,{severity:"error",children:"Invalid Code"})})})})},Kne=()=>ue(dc,{children:[T(xt,{path:"login",element:T(Hne,{})}),T(xt,{path:"register",element:T(qne,{})}),T(xt,{path:"recover-password",element:T(Wne,{})}),T(xt,{path:"activate-account",element:T(Une,{})}),T(xt,{path:"update-password/:code",element:T(Gne,{})}),T(xt,{path:"/*",element:T(TP,{to:"login"})})]}),$p=()=>{const t=Pa();return{startLoadingAllCategories:async()=>{try{const{data:d}=await Dt.get("/api/categories/get-all-categories");t(F8(d.categories))}catch{t($8())}},startLoadingMostPopularCategories:async()=>{try{const{data:d}=await Dt.get("/api/categories/get-most-popular-categories");t(V8(d.categories))}catch(d){console.log(d)}},startLoadingCategories:async(d,h)=>{try{const{data:f}=await Dt.get(`/api/categories/get-categories?page=${d}&kword=${h}`);t(U8(f))}catch(f){console.log(f)}}}},ic=t=>{let o=new Date(t).toISOString().slice(0,10);const i=o.slice(8,10),l=o.slice(5,7),d=o.slice(0,4);o=l+"-"+i+"-"+d;const h={weekday:"long",year:"numeric",month:"long",day:"numeric"};return new Date(o).toLocaleDateString("en-US",h)},PB=({category:t})=>{const o="https://jobsapp.online";return ko(),ue(ZN,{sx:{maxWidth:350,margin:1,minWidth:350},children:[T(XN,{title:t.name,subheader:ic(t.updatedAt)}),T(eB,{component:"img",height:"194",image:o+"/"+t.coverImg,alt:"Company logo"}),T(JN,{children:T(Je,{variant:"body2",color:"text.secondary",children:t.description})}),T(Fv,{disableSpacing:!0,children:T(Zr,{to:`/vacancy/vacancies-by-category/${t.id}`,style:{textDecoration:"none",color:"#919191",display:"block",padding:2,margin:2},children:"View Related Jobs"})})]})},Yne=()=>{const{startLoadingMostPopularCategories:t}=$p();R.useEffect(()=>{t()},[]);const{categoriesWithMoreVacancies:o}=it(i=>i.categories);return T(Mt,{children:o!=null?ue(ne,{sx:{display:"flex",justifyContent:{xs:"center",lg:"space-between"},flexWrap:"wrap",margin:2,padding:1,maxWidth:1600},children:[T(ne,{sx:{display:"flex",justifyContent:{xs:"center",md:"start"},width:"100%",padding:3,margin:1},children:T(Je,{variant:"h4",children:"Categories with more opportunities"})}),o.map(i=>T(PB,{category:i},i.id))]}):T(ne,{sx:{display:"flex",minHeight:300,justifyContent:"center",alignItems:"center",width:"100%",marginY:4},children:T(Fp,{})})})},Vi=()=>{const t=Pa();return{startCreatingNewVacancy:async A=>{try{const{data:S}=await Dt.post("/api/vacancies/create-new",A,{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"multipart/form-data"}});t(lU(S.msg))}catch(S){t(cU(S.response.data.msg))}},startClearingMessages:()=>{t(uU())},startLoading:()=>{t(dU())},startLoadingVacancyDetails:async A=>{try{const{data:S}=await Dt.get(`/api/vacancies/vacancy-details/${A}`);t(fU(S.vacancy))}catch{t(gU())}},startEditingVacancy:async(A,S)=>{try{const{data:M}=await Dt.put(`/api/vacancies/update-vacancy/${S}`,A,{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"multipart/form-data"}});t(hU(M.msg))}catch(M){t(pU(M.response.data.msg))}},startDeletingVacancy:async A=>{try{const{data:S}=await Dt.delete(`/api/vacancies/remove-vacancy/${A}`,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});t(mU(S.msg))}catch(S){t(bU(S.response.data.msg))}},startLoadingMyVacancies:async A=>{try{const{data:S}=await Dt.get(`/api/vacancies/my-vacancies?page=${A??0}`,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});t(kU(S))}catch{t(wU())}},startLoadingVacanciesOfPopularCategories:async()=>{try{const{data:A}=await Dt.get("/api/vacancies/most-popular-category-vacancy");t(vU(A.vacancies))}catch(A){console.log(A)}},startLoadingMostRecentVacancies:async()=>{try{const{data:A}=await Dt.get("/api/vacancies/recent-vacancies");t(yU(A.vacancies))}catch(A){console.log(A)}},startloadingVacanciesByCategory:async(A,S)=>{try{const{data:M}=await Dt.get(`/api/vacancies/get-vacancies-by-category/${A}?page=${S}`);t(CU(M))}catch(M){t(AU(M.response.data.msg))}},startLoadingAllVacancies:async(A,S,M,I)=>{let U=`/api/vacancies/all-vacancies?page=${A}&kword=${S}`;try{M!=""&&(U=U+`&salaryId=${M}`),I!=""&&(U=U+`&categoryId=${I}`);const{data:N}=await Dt.get(U);t(_U(N))}catch(N){console.log(N)}}}};var JC={},Qne=Ao;Object.defineProperty(JC,"__esModule",{value:!0});var NB=JC.default=void 0,Zne=Qne(cr()),Jne=dr,Xne=(0,Zne.default)((0,Jne.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");NB=JC.default=Xne;var XC={},eoe=Ao;Object.defineProperty(XC,"__esModule",{value:!0});var BB=XC.default=void 0,toe=eoe(cr()),noe=dr,ooe=(0,toe.default)((0,noe.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");BB=XC.default=ooe;const Vp=({vacancy:t,userVacancy:o})=>{const{startClearingMessages:i,startDeletingVacancy:l}=Vi(),{deleteVacancyMsg:d,deleteVacancyFailedMsg:h}=it(M=>M.vacancies),f=ko(),b="https://jobsapp.online",m=()=>{f(`/vacancy/edit/${t.id}`)},[v,C]=R.useState(!1),_=()=>{C(!0)},A=()=>{C(!1)},S=()=>{+C(!1),l(t.id)};return R.useEffect(()=>{d!=null&&(Tt.fire("Vacancy Removed",d,"success"),i())},[d]),R.useEffect(()=>{h!=null&&(Tt.fire("Vacancy Removed Failed",h,"error"),i())},[h]),ue(ZN,{sx:{maxWidth:350,margin:1,minWidth:350},children:[T(XN,{title:t.name,subheader:ic(t.updatedAt)}),T(eB,{component:"img",height:"194",image:b+"/"+t.image,alt:"Company logo"}),T(JN,{children:T(Je,{variant:"body2",color:"text.secondary",children:t.description})}),o?ue(Fv,{disableSpacing:!0,sx:{display:"flex",flexWrap:"wrap"},children:[T(_p,{"aria-label":"edit vacancy",onClick:m,children:T(NB,{})}),T(_p,{"aria-label":"delete vacancy",onClick:_,children:T(BB,{})}),T(Zr,{style:{color:"#00296c",textAlign:"center",textDecoration:"none",display:"flex",justifyContent:"start",alignItems:"end",width:"100%",marginTop:3},to:`/application/applications-by-job/${t.id}`,children:"Applications"}),ue($v,{open:v,onClose:A,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[T(Hv,{id:"alert-dialog-title",children:"Do you want to remove this vacancy"}),T(Uv,{children:T(oB,{id:"alert-dialog-description",children:`After you have eliminated the vacancy ${t.name} you will not be able to recover it`})}),ue(Vv,{children:[T(It,{onClick:A,children:"Cancel"}),T(It,{onClick:S,autoFocus:!0,children:"Delete"})]})]})]}):T(Fv,{disableSpacing:!0,children:T(Zr,{to:`/vacancy/details/${t.id}`,style:{textDecoration:"none",color:"#919191",display:"block",padding:2,margin:2},children:"View Details"})})]})},roe=()=>{const{startLoadingVacanciesOfPopularCategories:t}=Vi();R.useEffect(()=>{t()},[]);const{vacanciesOfPopularCategories:o}=it(i=>i.vacancies);return T(Mt,{children:o!=null?ue(ne,{sx:{display:"flex",justifyContent:{xs:"center",lg:"space-between"},flexWrap:"wrap",margin:2,padding:1,maxWidth:1600},children:[T(ne,{sx:{display:"flex",justifyContent:{xs:"center",md:"start"},width:"100%",padding:3,margin:1},children:T(Je,{variant:"h4",children:"Find a job"})}),o.map(i=>T(Vp,{vacancy:i,userVacancy:!1},i.id))]}):T(ne,{sx:{display:"flex",minHeight:300,justifyContent:"center",alignItems:"center",width:"100%",marginY:4},children:T(Fp,{})})})},ioe=()=>{const{startLoadingMostRecentVacancies:t}=Vi();R.useEffect(()=>{t()},[]);const{recentVacancies:o}=it(i=>i.vacancies);return T(Mt,{children:o!=null?ue(ne,{sx:{display:"flex",justifyContent:{xs:"center",lg:"space-between"},flexWrap:"wrap",margin:2,padding:1,maxWidth:1600},children:[T(ne,{sx:{display:"flex",justifyContent:{xs:"center",md:"start"},width:"100%",padding:3,margin:1},children:T(Je,{variant:"h4",children:"Most Recent Jobs Added"})}),o.map(i=>T(Vp,{vacancy:i,userVacancy:!1},i.id))]}):T(ne,{sx:{display:"flex",minHeight:300,justifyContent:"center",alignItems:"center",width:"100%",marginY:4},children:T(Fp,{})})})},soe=()=>T(zn,{children:ue(ne,{container:!0,sx:{flexGrow:1,justifyContent:"center"},className:"animate__animated animate__faster animate__fadeIn",children:[T(Yne,{}),T(roe,{}),T(ioe,{})]})}),aoe=()=>ue(dc,{children:[T(xt,{path:"",element:T(soe,{})}),T(xt,{path:"*",element:T(TP,{to:""})})]}),loe=()=>{const t=ko();return ue(ne,{container:!0,sx:{display:"flex",justifyContent:{xs:"center",md:"start"},flexDirection:{xs:"column",md:"row"},marginY:{xs:2,md:3},padding:1},children:[T(It,{variant:"contained",size:"small",onClick:()=>{t("/update-information")},sx:{marginRight:{md:1},marginBottom:{xs:2,md:0}},children:"Update My Information"}),T(It,{variant:"contained",size:"small",onClick:()=>{t("/vacancy/add-new")},sx:{marginLeft:{md:1},marginBottom:{xs:2,md:0}},children:"¿Do You Want to Publish an Oportunity?"})]})},coe=({user:t})=>ue(ne,{container:!0,sx:{display:"flex",justifyContent:{xs:"center",md:"space-between"},flexDirection:{xs:"column",md:"row"},alignItems:"center"},children:[T(ne,{item:!0,sx:{display:"flex",justifyContent:{xs:"center"},flexDirection:{xs:"column",md:"row"},width:"50%"},children:T(xp,{component:"img",sx:{width:"50%",borderRadius:"100%",maxHeight:{xs:233,md:167},maxWidth:{xs:350,md:250},marginX:"auto",marginY:{xs:2,md:0}},alt:"User image",src:"https://jobsapp.online"+"/"+t.photo})}),ue(ne,{item:!0,sx:{display:"flex",justifyContent:{xs:"center",md:"start"},flexWrap:"wrap",flexDirection:{xs:"column",md:"row"},width:"50%"},children:[T(Je,{sx:{display:"block",width:"100%",textAlign:{xs:"center",md:"start"},fontWeight:600,marginY:{xs:1,md:0}},variant:"h6",children:t.name}),T(Je,{sx:{display:"block",width:"100%",textAlign:{xs:"center",md:"start"},fontWeight:600,color:"#919191",marginY:{xs:1,md:0}},variant:"body1",children:t.email})]})]});var eA={},tA={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Doctype=t.CDATA=t.Tag=t.Style=t.Script=t.Comment=t.Directive=t.Text=t.Root=t.isTag=t.ElementType=void 0;var o;(function(l){l.Root="root",l.Text="text",l.Directive="directive",l.Comment="comment",l.Script="script",l.Style="style",l.Tag="tag",l.CDATA="cdata",l.Doctype="doctype"})(o=t.ElementType||(t.ElementType={}));function i(l){return l.type===o.Tag||l.type===o.Script||l.type===o.Style}t.isTag=i,t.Root=o.Root,t.Text=o.Text,t.Directive=o.Directive,t.Comment=o.Comment,t.Script=o.Script,t.Style=o.Style,t.Tag=o.Tag,t.CDATA=o.CDATA,t.Doctype=o.Doctype})(tA);var lt={},La=en&&en.__extends||function(){var t=function(o,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,d){l.__proto__=d}||function(l,d){for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(l[h]=d[h])},t(o,i)};return function(o,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");t(o,i);function l(){this.constructor=o}o.prototype=i===null?Object.create(i):(l.prototype=i.prototype,new l)}}(),Yh=en&&en.__assign||function(){return Yh=Object.assign||function(t){for(var o,i=1,l=arguments.length;i<l;i++){o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(t[d]=o[d])}return t},Yh.apply(this,arguments)};Object.defineProperty(lt,"__esModule",{value:!0});lt.cloneNode=lt.hasChildren=lt.isDocument=lt.isDirective=lt.isComment=lt.isText=lt.isCDATA=lt.isTag=lt.Element=lt.Document=lt.CDATA=lt.NodeWithChildren=lt.ProcessingInstruction=lt.Comment=lt.Text=lt.DataNode=lt.Node=void 0;var zo=tA,nA=function(){function t(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.parent},set:function(o){this.parent=o},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"previousSibling",{get:function(){return this.prev},set:function(o){this.prev=o},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nextSibling",{get:function(){return this.next},set:function(o){this.next=o},enumerable:!1,configurable:!0}),t.prototype.cloneNode=function(o){return o===void 0&&(o=!1),oA(this,o)},t}();lt.Node=nA;var Sb=function(t){La(o,t);function o(i){var l=t.call(this)||this;return l.data=i,l}return Object.defineProperty(o.prototype,"nodeValue",{get:function(){return this.data},set:function(i){this.data=i},enumerable:!1,configurable:!0}),o}(nA);lt.DataNode=Sb;var RB=function(t){La(o,t);function o(){var i=t!==null&&t.apply(this,arguments)||this;return i.type=zo.ElementType.Text,i}return Object.defineProperty(o.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),o}(Sb);lt.Text=RB;var OB=function(t){La(o,t);function o(){var i=t!==null&&t.apply(this,arguments)||this;return i.type=zo.ElementType.Comment,i}return Object.defineProperty(o.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),o}(Sb);lt.Comment=OB;var LB=function(t){La(o,t);function o(i,l){var d=t.call(this,l)||this;return d.name=i,d.type=zo.ElementType.Directive,d}return Object.defineProperty(o.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),o}(Sb);lt.ProcessingInstruction=LB;var Db=function(t){La(o,t);function o(i){var l=t.call(this)||this;return l.children=i,l}return Object.defineProperty(o.prototype,"firstChild",{get:function(){var i;return(i=this.children[0])!==null&&i!==void 0?i:null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"childNodes",{get:function(){return this.children},set:function(i){this.children=i},enumerable:!1,configurable:!0}),o}(nA);lt.NodeWithChildren=Db;var zB=function(t){La(o,t);function o(){var i=t!==null&&t.apply(this,arguments)||this;return i.type=zo.ElementType.CDATA,i}return Object.defineProperty(o.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),o}(Db);lt.CDATA=zB;var jB=function(t){La(o,t);function o(){var i=t!==null&&t.apply(this,arguments)||this;return i.type=zo.ElementType.Root,i}return Object.defineProperty(o.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),o}(Db);lt.Document=jB;var FB=function(t){La(o,t);function o(i,l,d,h){d===void 0&&(d=[]),h===void 0&&(h=i==="script"?zo.ElementType.Script:i==="style"?zo.ElementType.Style:zo.ElementType.Tag);var f=t.call(this,d)||this;return f.name=i,f.attribs=l,f.type=h,f}return Object.defineProperty(o.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"tagName",{get:function(){return this.name},set:function(i){this.name=i},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"attributes",{get:function(){var i=this;return Object.keys(this.attribs).map(function(l){var d,h;return{name:l,value:i.attribs[l],namespace:(d=i["x-attribsNamespace"])===null||d===void 0?void 0:d[l],prefix:(h=i["x-attribsPrefix"])===null||h===void 0?void 0:h[l]}})},enumerable:!1,configurable:!0}),o}(Db);lt.Element=FB;function $B(t){return(0,zo.isTag)(t)}lt.isTag=$B;function VB(t){return t.type===zo.ElementType.CDATA}lt.isCDATA=VB;function UB(t){return t.type===zo.ElementType.Text}lt.isText=UB;function HB(t){return t.type===zo.ElementType.Comment}lt.isComment=HB;function WB(t){return t.type===zo.ElementType.Directive}lt.isDirective=WB;function qB(t){return t.type===zo.ElementType.Root}lt.isDocument=qB;function doe(t){return Object.prototype.hasOwnProperty.call(t,"children")}lt.hasChildren=doe;function oA(t,o){o===void 0&&(o=!1);var i;if(UB(t))i=new RB(t.data);else if(HB(t))i=new OB(t.data);else if($B(t)){var l=o?h0(t.children):[],d=new FB(t.name,Yh({},t.attribs),l);l.forEach(function(m){return m.parent=d}),t.namespace!=null&&(d.namespace=t.namespace),t["x-attribsNamespace"]&&(d["x-attribsNamespace"]=Yh({},t["x-attribsNamespace"])),t["x-attribsPrefix"]&&(d["x-attribsPrefix"]=Yh({},t["x-attribsPrefix"])),i=d}else if(VB(t)){var l=o?h0(t.children):[],h=new zB(l);l.forEach(function(v){return v.parent=h}),i=h}else if(qB(t)){var l=o?h0(t.children):[],f=new jB(l);l.forEach(function(v){return v.parent=f}),t["x-mode"]&&(f["x-mode"]=t["x-mode"]),i=f}else if(WB(t)){var b=new LB(t.name,t.data);t["x-name"]!=null&&(b["x-name"]=t["x-name"],b["x-publicId"]=t["x-publicId"],b["x-systemId"]=t["x-systemId"]),i=b}else throw new Error("Not implemented yet: ".concat(t.type));return i.startIndex=t.startIndex,i.endIndex=t.endIndex,t.sourceCodeLocation!=null&&(i.sourceCodeLocation=t.sourceCodeLocation),i}lt.cloneNode=oA;function h0(t){for(var o=t.map(function(l){return oA(l,!0)}),i=1;i<o.length;i++)o[i].prev=o[i-1],o[i-1].next=o[i];return o}(function(t){var o=en&&en.__createBinding||(Object.create?function(b,m,v,C){C===void 0&&(C=v);var _=Object.getOwnPropertyDescriptor(m,v);(!_||("get"in _?!m.__esModule:_.writable||_.configurable))&&(_={enumerable:!0,get:function(){return m[v]}}),Object.defineProperty(b,C,_)}:function(b,m,v,C){C===void 0&&(C=v),b[C]=m[v]}),i=en&&en.__exportStar||function(b,m){for(var v in b)v!=="default"&&!Object.prototype.hasOwnProperty.call(m,v)&&o(m,b,v)};Object.defineProperty(t,"__esModule",{value:!0}),t.DomHandler=void 0;var l=tA,d=lt;i(lt,t);var h={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},f=function(){function b(m,v,C){this.dom=[],this.root=new d.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof v=="function"&&(C=v,v=h),typeof m=="object"&&(v=m,m=void 0),this.callback=m??null,this.options=v??h,this.elementCB=C??null}return b.prototype.onparserinit=function(m){this.parser=m},b.prototype.onreset=function(){this.dom=[],this.root=new d.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},b.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},b.prototype.onerror=function(m){this.handleCallback(m)},b.prototype.onclosetag=function(){this.lastNode=null;var m=this.tagStack.pop();this.options.withEndIndices&&(m.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(m)},b.prototype.onopentag=function(m,v){var C=this.options.xmlMode?l.ElementType.Tag:void 0,_=new d.Element(m,v,void 0,C);this.addNode(_),this.tagStack.push(_)},b.prototype.ontext=function(m){var v=this.lastNode;if(v&&v.type===l.ElementType.Text)v.data+=m,this.options.withEndIndices&&(v.endIndex=this.parser.endIndex);else{var C=new d.Text(m);this.addNode(C),this.lastNode=C}},b.prototype.oncomment=function(m){if(this.lastNode&&this.lastNode.type===l.ElementType.Comment){this.lastNode.data+=m;return}var v=new d.Comment(m);this.addNode(v),this.lastNode=v},b.prototype.oncommentend=function(){this.lastNode=null},b.prototype.oncdatastart=function(){var m=new d.Text(""),v=new d.CDATA([m]);this.addNode(v),m.parent=v,this.lastNode=m},b.prototype.oncdataend=function(){this.lastNode=null},b.prototype.onprocessinginstruction=function(m,v){var C=new d.ProcessingInstruction(m,v);this.addNode(C)},b.prototype.handleCallback=function(m){if(typeof this.callback=="function")this.callback(m,this.dom);else if(m)throw m},b.prototype.addNode=function(m){var v=this.tagStack[this.tagStack.length-1],C=v.children[v.children.length-1];this.options.withStartIndices&&(m.startIndex=this.parser.startIndex),this.options.withEndIndices&&(m.endIndex=this.parser.endIndex),v.children.push(m),C&&(m.prev=C,C.next=m),m.parent=v,this.lastNode=null},b}();t.DomHandler=f,t.default=f})(eA);var QI="html",ZI="head",rg="body",uoe=/<([a-zA-Z]+[0-9]?)/,JI=/<head[^]*>/i,XI=/<body[^]*>/i,pm=function(){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},qv=function(){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},eM=typeof window=="object"&&window.DOMParser;if(typeof eM=="function"){var hoe=new eM,poe="text/html";qv=function(t,o){return o&&(t="<"+o+">"+t+"</"+o+">"),hoe.parseFromString(t,poe)},pm=qv}if(typeof document=="object"&&document.implementation){var ig=document.implementation.createHTMLDocument();pm=function(t,o){if(o){var i=ig.documentElement.querySelector(o);return i.innerHTML=t,ig}return ig.documentElement.innerHTML=t,ig}}var p0=typeof document=="object"?document.createElement("template"):{},Gv;p0.content&&(Gv=function(t){return p0.innerHTML=t,p0.content.childNodes});function foe(t){var o,i=t.match(uoe);i&&i[1]&&(o=i[1].toLowerCase());var l,d,h;switch(o){case QI:return l=qv(t),JI.test(t)||(d=l.querySelector(ZI),d&&d.parentNode.removeChild(d)),XI.test(t)||(d=l.querySelector(rg),d&&d.parentNode.removeChild(d)),l.querySelectorAll(QI);case ZI:case rg:return l=pm(t),h=l.querySelectorAll(o),XI.test(t)&&JI.test(t)?h[0].parentNode.childNodes:h;default:return Gv?Gv(t):(d=pm(t,rg).querySelector(rg),d.childNodes)}}var goe=foe,rA={},GB={};GB.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"];var Tb=eA,moe=GB,tM=moe.CASE_SENSITIVE_TAG_NAMES,boe=Tb.Comment,koe=Tb.Element,woe=Tb.ProcessingInstruction,voe=Tb.Text,KB={},f0;for(var g0=0,yoe=tM.length;g0<yoe;g0++)f0=tM[g0],KB[f0.toLowerCase()]=f0;function Coe(t){return KB[t]}function YB(t){for(var o={},i,l=0,d=t.length;l<d;l++)i=t[l],o[i.name]=i.value;return o}function Aoe(t){t=t.toLowerCase();var o=Coe(t);return o||t}function QB(t,o,i){o=o||null;for(var l=[],d,h=0,f=t.length;h<f;h++){var b=t[h],m;switch(b.nodeType){case 1:d=Aoe(b.nodeName),m=new koe(d,YB(b.attributes)),m.children=QB(d==="template"?b.content.childNodes:b.childNodes,m);break;case 3:m=new voe(b.nodeValue);break;case 8:m=new boe(b.nodeValue);break;default:continue}var v=l[h-1]||null;v&&(v.next=m),m.parent=o,m.prev=v,m.next=null,l.push(m)}return i&&(m=new woe(i.substring(0,i.indexOf(" ")).toLowerCase(),i),m.next=l[0]||null,m.parent=o,l.unshift(m),l[1]&&(l[1].prev=l[0])),l}rA.formatAttributes=YB;rA.formatDOM=QB;var _oe=goe,xoe=rA,Eoe=xoe.formatDOM,Soe=/<(![a-zA-Z\s]+)>/;function Doe(t){if(typeof t!="string")throw new TypeError("First argument must be a string");if(t==="")return[];var o=t.match(Soe),i;return o&&o[1]&&(i=o[1]),Eoe(_oe(t),null,i)}var Toe=Doe,Dr={},Ib={},Ioe=0;Ib.SAME=Ioe;var Moe=1;Ib.CAMELCASE=Moe;Ib.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};Object.defineProperty(Dr,"__esModule",{value:!0});function Poe(t,o){return Noe(t)||Boe(t,o)||Roe(t,o)||Ooe()}function Noe(t){if(Array.isArray(t))return t}function Boe(t,o){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var l=[],d=!0,h=!1,f,b;try{for(i=i.call(t);!(d=(f=i.next()).done)&&(l.push(f.value),!(o&&l.length===o));d=!0);}catch(m){h=!0,b=m}finally{try{!d&&i.return!=null&&i.return()}finally{if(h)throw b}}return l}}function Roe(t,o){if(t){if(typeof t=="string")return nM(t,o);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return nM(t,o)}}function nM(t,o){(o==null||o>t.length)&&(o=t.length);for(var i=0,l=new Array(o);i<o;i++)l[i]=t[i];return l}function Ooe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ZB=0,za=1,Mb=2,Pb=3,iA=4,JB=5,XB=6;function Loe(t){return so.hasOwnProperty(t)?so[t]:null}function Eo(t,o,i,l,d,h,f){this.acceptsBooleans=o===Mb||o===Pb||o===iA,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=i,this.propertyName=t,this.type=o,this.sanitizeURL=h,this.removeEmptyString=f}var so={},zoe=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];zoe.forEach(function(t){so[t]=new Eo(t,ZB,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var o=Poe(t,2),i=o[0],l=o[1];so[i]=new Eo(i,za,!1,l,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){so[t]=new Eo(t,Mb,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){so[t]=new Eo(t,Mb,!1,t,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(function(t){so[t]=new Eo(t,Pb,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){so[t]=new Eo(t,Pb,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){so[t]=new Eo(t,iA,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){so[t]=new Eo(t,XB,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){so[t]=new Eo(t,JB,!1,t.toLowerCase(),null,!1,!1)});var sA=/[\-\:]([a-z])/g,aA=function(o){return o[1].toUpperCase()};["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(function(t){var o=t.replace(sA,aA);so[o]=new Eo(o,za,!1,t,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(function(t){var o=t.replace(sA,aA);so[o]=new Eo(o,za,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var o=t.replace(sA,aA);so[o]=new Eo(o,za,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){so[t]=new Eo(t,za,!1,t.toLowerCase(),null,!1,!1)});var joe="xlinkHref";so[joe]=new Eo("xlinkHref",za,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){so[t]=new Eo(t,za,!1,t.toLowerCase(),null,!0,!0)});var lA=Ib,Foe=lA.CAMELCASE,$oe=lA.SAME,oM=lA.possibleStandardNames,Voe=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",Uoe=Voe+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",Hoe=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+Uoe+"]*$")),Woe=Object.keys(oM).reduce(function(t,o){var i=oM[o];return i===$oe?t[o]=o:i===Foe?t[o.toLowerCase()]=o:t[o]=i,t},{});Dr.BOOLEAN=Pb;Dr.BOOLEANISH_STRING=Mb;Dr.NUMERIC=JB;Dr.OVERLOADED_BOOLEAN=iA;Dr.POSITIVE_NUMERIC=XB;Dr.RESERVED=ZB;Dr.STRING=za;Dr.getPropertyInfo=Loe;Dr.isCustomAttribute=Hoe;Dr.possibleStandardNames=Woe;var eR={},fm={},qoe={get exports(){return fm},set exports(t){fm=t}},rM=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Goe=/\n/g,Koe=/^\s*/,Yoe=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Qoe=/^:\s*/,Zoe=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Joe=/^[;\s]*/,Xoe=/^\s+|\s+$/g,ere=`
`,iM="/",sM="*",Ul="",tre="comment",nre="declaration",ore=function(t,o){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];o=o||{};var i=1,l=1;function d(M){var I=M.match(Goe);I&&(i+=I.length);var U=M.lastIndexOf(ere);l=~U?M.length-U:l+M.length}function h(){var M={line:i,column:l};return function(I){return I.position=new f(M),v(),I}}function f(M){this.start=M,this.end={line:i,column:l},this.source=o.source}f.prototype.content=t;function b(M){var I=new Error(o.source+":"+i+":"+l+": "+M);if(I.reason=M,I.filename=o.source,I.line=i,I.column=l,I.source=t,!o.silent)throw I}function m(M){var I=M.exec(t);if(I){var U=I[0];return d(U),t=t.slice(U.length),I}}function v(){m(Koe)}function C(M){var I;for(M=M||[];I=_();)I!==!1&&M.push(I);return M}function _(){var M=h();if(!(iM!=t.charAt(0)||sM!=t.charAt(1))){for(var I=2;Ul!=t.charAt(I)&&(sM!=t.charAt(I)||iM!=t.charAt(I+1));)++I;if(I+=2,Ul===t.charAt(I-1))return b("End of comment missing");var U=t.slice(2,I-2);return l+=2,d(U),t=t.slice(I),l+=2,M({type:tre,comment:U})}}function A(){var M=h(),I=m(Yoe);if(I){if(_(),!m(Qoe))return b("property missing ':'");var U=m(Zoe),N=M({type:nre,property:aM(I[0].replace(rM,Ul)),value:U?aM(U[0].replace(rM,Ul)):Ul});return m(Joe),N}}function S(){var M=[];C(M);for(var I;I=A();)I!==!1&&(M.push(I),C(M));return M}return v(),S()};function aM(t){return t?t.replace(Xoe,Ul):Ul}var rre=ore;function tR(t,o){var i=null;if(!t||typeof t!="string")return i;for(var l,d=rre(t),h=typeof o=="function",f,b,m=0,v=d.length;m<v;m++)l=d[m],f=l.property,b=l.value,h?o(f,b,l):b&&(i||(i={}),i[f]=b);return i}qoe.exports=tR;fm.default=tR;var Nb={};Nb.__esModule=!0;Nb.camelCase=void 0;var ire=/^--[a-zA-Z0-9-]+$/,sre=/-([a-z])/g,are=/^[^-]+$/,lre=/^-(webkit|moz|ms|o|khtml)-/,cre=/^-(ms)-/,dre=function(t){return!t||are.test(t)||ire.test(t)},ure=function(t,o){return o.toUpperCase()},lM=function(t,o){return"".concat(o,"-")},hre=function(t,o){return o===void 0&&(o={}),dre(t)?t:(t=t.toLowerCase(),o.reactCompat?t=t.replace(cre,lM):t=t.replace(lre,lM),t.replace(sre,ure))};Nb.camelCase=hre;(function(t){var o=en&&en.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};t.__esModule=!0;var i=o(fm),l=Nb;function d(h,f){var b={};return!h||typeof h!="string"||(0,i.default)(h,function(m,v){m&&v&&(b[(0,l.camelCase)(m,f)]=v)}),b}t.default=d})(eR);var pre=R,fre=eR.default;function gre(t,o){if(!t||typeof t!="object")throw new TypeError("First argument must be an object");var i,l,d=typeof o=="function",h={},f={};for(i in t){if(l=t[i],d&&(h=o(i,l),h&&h.length===2)){f[h[0]]=h[1];continue}typeof l=="string"&&(f[l]=i)}return f}function mre(t,o){if(t.indexOf("-")===-1)return o&&typeof o.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bre={reactCompat:!0};function kre(t,o){if(t!=null)try{o.style=fre(t,bre)}catch{o.style={}}}var wre=pre.version.split(".")[0]>=16,nR=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);function vre(t){return!nR.has(t.name)}var oR={PRESERVE_CUSTOM_ATTRIBUTES:wre,invertObject:gre,isCustomComponent:mre,setStyleProp:kre,canTextBeChildOfNode:vre,elementsWithNoTextChildren:nR},Bh=Dr,cM=oR,yre=["checked","value"],Cre=["input","select","textarea"],Are={reset:!0,submit:!0},rR=function(o,i){o=o||{};var l,d,h,f,b,m={},v=o.type&&Are[o.type];for(l in o){if(h=o[l],Bh.isCustomAttribute(l)){m[l]=h;continue}if(d=l.toLowerCase(),f=dM(d),f){switch(b=Bh.getPropertyInfo(f),yre.indexOf(f)!==-1&&Cre.indexOf(i)!==-1&&!v&&(f=dM("default"+d)),m[f]=h,b&&b.type){case Bh.BOOLEAN:m[f]=!0;break;case Bh.OVERLOADED_BOOLEAN:h===""&&(m[f]=!0);break}continue}cM.PRESERVE_CUSTOM_ATTRIBUTES&&(m[l]=h)}return cM.setStyleProp(o.style,m),m};function dM(t){return Bh.possibleStandardNames[t]}var _re=R,xre=rR,gm=oR,Ere=gm.setStyleProp,Sre=gm.canTextBeChildOfNode;function iR(t,o){o=o||{};for(var i=o.library||_re,l=i.cloneElement,d=i.createElement,h=i.isValidElement,f=[],b,m,v=typeof o.replace=="function",C,_,A,S=o.trim,M=0,I=t.length;M<I;M++){if(b=t[M],v&&(C=o.replace(b),h(C))){I>1&&(C=l(C,{key:C.key||M})),f.push(C);continue}if(b.type==="text"){if(m=!b.data.trim().length,m&&b.parent&&!Sre(b.parent)||S&&m)continue;f.push(b.data);continue}switch(_=b.attribs,Dre(b)?Ere(_.style,_):_&&(_=xre(_,b.name)),A=null,b.type){case"script":case"style":b.children[0]&&(_.dangerouslySetInnerHTML={__html:b.children[0].data});break;case"tag":b.name==="textarea"&&b.children[0]?_.defaultValue=b.children[0].data:b.children&&b.children.length&&(A=iR(b.children,o));break;default:continue}I>1&&(_.key=M),f.push(d(b.name,_,A))}return f.length===1?f[0]:f}function Dre(t){return gm.PRESERVE_CUSTOM_ATTRIBUTES&&t.type==="tag"&&gm.isCustomComponent(t.name,t.attribs)}var Tre=iR,Bb=eA,Pd=Toe,Ire=rR,sR=Tre;Pd=typeof Pd.default=="function"?Pd.default:Pd;var Mre={lowerCaseAttributeNames:!1};function $i(t,o){if(typeof t!="string")throw new TypeError("First argument must be a string");return t===""?[]:(o=o||{},sR(Pd(t,o.htmlparser2||Mre),o))}$i.domToReact=sR;$i.htmlToDOM=Pd;$i.attributesToProps=Ire;$i.Comment=Bb.Comment;$i.Element=Bb.Element;$i.ProcessingInstruction=Bb.ProcessingInstruction;$i.Text=Bb.Text;var As=$i;$i.default=$i;As.domToReact;As.htmlToDOM;As.attributesToProps;As.Comment;As.Element;As.ProcessingInstruction;As.Text;const Pre=({user:t})=>ue(ne,{sx:{display:"flex",justifyContent:"center",flexWrap:"wrap",margin:2,padding:3},children:[T(Je,{variant:"h3",sx:{display:"block",width:"100%",textAlign:"center"},children:"About Yourself"}),T(ne,{sx:{width:"100%",marginY:2,textAlign:"center"},children:As(t.description)})]}),Nre=()=>{const[t,o]=R.useState(0),{startLoadingMyVacancies:i}=Vi();R.useEffect(()=>{i(t)},[t]);const{myVacancies:l,totalPages:d}=it(f=>f.vacancies),h=()=>{const f=m=>{o(m.target.innerHTML.slice(0,1)-1)},b=[];for(let m=0;m<d;m++)b.push(m);return T(ne,{item:!0,sx:{width:"100%",display:"flex",justifyContent:"center",flexDirection:"row",marginY:2},children:b.map(m=>T(It,{variant:"contained",sx:{color:"white",backgroundColor:"primary.main",marginX:1},onClick:f,disabled:m==t,children:m+1},m))})};return T(Mt,{children:l==null?T($o,{}):T(Mt,{children:l.length>0?ue(ne,{container:!0,sx:{display:"flex",justifyContent:"space-between",boxShadow:3,borderRadius:"10px"},children:[T(ne,{item:!0,sx:{display:"flex",justifyContent:{xs:"center",md:"space-between"},flexWrap:"wrap",marginX:2},children:l.map(f=>T(Vp,{vacancy:f,userVacancy:!0},f.id))}),T(h,{})]}):T(ne,{container:!0,sx:{display:"flex",justifyContent:"center",boxShadow:3,borderRadius:"10px"},children:T(In,{severity:"info",sx:{marginY:4},children:"You don't have vacancies yet"})})})})},aR=()=>{const t=Pa();return{startLoadingUserInformation:async()=>{try{const{data:h}=await Dt.get("/api/users/my-information",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});t(nU(h.user))}catch{t(oU())}},startLoading:()=>{t(rU())},startupdateMyInformation:async h=>{try{const{data:f}=await Dt.put("/api/users/update-information",h,{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"multipart/form-data"}});t(iU(f.msg))}catch(f){t(sU(f.response.data.msg))}},startClearingMessages:()=>{t(aU())}}},Bre=()=>{const{startLoadingUserInformation:t,startClearingMessages:o}=aR(),{startClearingMessages:i}=Vi(),{createVacancySuccessMsg:l,createVacancyFailedMsg:d,UpdateVacancyMsg:h,UpdateVacancyFailed:f}=it(C=>C.vacancies),{userDetails:b,updateUserInformationMsg:m,updateUserInformationFailedMsg:v}=it(C=>C.user);return R.useEffect(()=>{t()},[]),R.useEffect(()=>{l!=null&&(Tt.fire("Vacancy Created",l,"success"),i())},[l]),R.useEffect(()=>{d!=null&&(Tt.fire("Vacancy Create Failed",d,"error"),i())},[d]),R.useEffect(()=>{h!=null&&(Tt.fire("Vacancy Updated",h,"success"),i())},[h]),R.useEffect(()=>{f!=null&&(Tt.fire("Update Vacancy Failed",f,"error"),i())},[f]),R.useEffect(()=>{m!=null&&(Tt.fire("Information Updated",m,"success"),o())},[m]),R.useEffect(()=>{v!=null&&(Tt.fire("Update Information Failed",v,"error"),o())},[v]),T(zn,{children:b==null?T($o,{}):ue(ne,{container:!0,sx:{display:"flex",justifyContent:"center",margin:2,padding:3,maxWidth:1200,marginX:"auto"},className:"animate__animated animate__faster animate__fadeIn",children:[T(coe,{user:b}),T(loe,{}),T(Pre,{user:b}),T(Nre,{})]})})},cA=Ra(T("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddCircle");var su={},Rre={get exports(){return su},set exports(t){su=t}};/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(t,o){(function(i,l){t.exports=l(R)})(self,i=>(()=>{var l={703:(b,m,v)=>{var C=v(414);function _(){}function A(){}A.resetWarningCache=_,b.exports=function(){function S(U,N,O,L,q,K){if(K!==C){var J=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw J.name="Invariant Violation",J}}function M(){return S}S.isRequired=S;var I={array:S,bigint:S,bool:S,func:S,number:S,object:S,string:S,symbol:S,any:S,arrayOf:M,element:S,elementType:S,instanceOf:M,node:S,objectOf:M,oneOf:M,oneOfType:M,shape:M,exact:M,checkPropTypes:A,resetWarningCache:_};return I.PropTypes=I,I}},697:(b,m,v)=>{b.exports=v(703)()},414:b=>{b.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:b=>{b.exports=i}},d={};function h(b){var m=d[b];if(m!==void 0)return m.exports;var v=d[b]={exports:{}};return l[b](v,v.exports,h),v.exports}h.n=b=>{var m=b&&b.__esModule?()=>b.default:()=>b;return h.d(m,{a:m}),m},h.d=(b,m)=>{for(var v in m)h.o(m,v)&&!h.o(b,v)&&Object.defineProperty(b,v,{enumerable:!0,get:m[v]})},h.o=(b,m)=>Object.prototype.hasOwnProperty.call(b,m),h.r=b=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})};var f={};return(()=>{h.r(f),h.d(f,{CKEditor:()=>hi,CKEditorContext:()=>gl});var b=h(787),m=h.n(b),v=h(697),C=h.n(v);const _=new Array(256).fill("").map(($,V)=>("0"+V.toString(16)).slice(-2));class A{constructor(V){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof V.crashNumberLimit=="number"?V.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof V.minimumNonErrorTimePeriod=="number"?V.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=Z=>{const ie="error"in Z?Z.error:Z.reason;ie instanceof Error&&this._handleError(ie,Z)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(V,Z){this._listeners[V]||(this._listeners[V]=[]),this._listeners[V].push(Z)}off(V,Z){this._listeners[V]=this._listeners[V].filter(ie=>ie!==Z)}_fire(V,...Z){const ie=this._listeners[V]||[];for(const Ne of ie)Ne.apply(this,[null,...Z])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(V,Z){if(this._shouldReactToError(V)){this.crashes.push({message:V.message,stack:V.stack,filename:Z instanceof ErrorEvent?Z.filename:void 0,lineno:Z instanceof ErrorEvent?Z.lineno:void 0,colno:Z instanceof ErrorEvent?Z.colno:void 0,date:this._now()});const ie=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:V,causesRestart:ie}),ie?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(V){return V.is&&V.is("CKEditorError")&&V.context!==void 0&&V.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(V)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function S($,V=new Set){const Z=[$],ie=new Set;let Ne=0;for(;Z.length>Ne;){const Fe=Z[Ne++];if(!ie.has(Fe)&&M(Fe)&&!V.has(Fe))if(ie.add(Fe),Symbol.iterator in Fe)try{for(const qe of Fe)Z.push(qe)}catch{}else for(const qe in Fe)qe!=="defaultValue"&&Z.push(Fe[qe])}return ie}function M($){const V=Object.prototype.toString.call($),Z=typeof $;return!(Z==="number"||Z==="boolean"||Z==="string"||Z==="symbol"||Z==="function"||V==="[object Date]"||V==="[object RegExp]"||V==="[object Module]"||$==null||$._watchdogExcluded||$ instanceof EventTarget||$ instanceof Event)}function I($,V,Z=new Set){if($===V&&typeof(ie=$)=="object"&&ie!==null)return!0;var ie;const Ne=S($,Z),Fe=S(V,Z);for(const qe of Ne)if(Fe.has(qe))return!0;return!1}const U=function($){var V=typeof $;return $!=null&&(V=="object"||V=="function")},N=typeof en=="object"&&en&&en.Object===Object&&en;var O=typeof self=="object"&&self&&self.Object===Object&&self;const L=N||O||Function("return this")(),q=function(){return L.Date.now()};var K=/\s/;const J=function($){for(var V=$.length;V--&&K.test($.charAt(V)););return V};var H=/^\s+/;const F=function($){return $&&$.slice(0,J($)+1).replace(H,"")},X=L.Symbol;var ee=Object.prototype,ce=ee.hasOwnProperty,ke=ee.toString,ge=X?X.toStringTag:void 0;const fe=function($){var V=ce.call($,ge),Z=$[ge];try{$[ge]=void 0;var ie=!0}catch{}var Ne=ke.call($);return ie&&(V?$[ge]=Z:delete $[ge]),Ne};var he=Object.prototype.toString;const ve=function($){return he.call($)};var De=X?X.toStringTag:void 0;const oe=function($){return $==null?$===void 0?"[object Undefined]":"[object Null]":De&&De in Object($)?fe($):ve($)},se=function($){return $!=null&&typeof $=="object"},re=function($){return typeof $=="symbol"||se($)&&oe($)=="[object Symbol]"};var _e=/^[-+]0x[0-9a-f]+$/i,Re=/^0b[01]+$/i,Ee=/^0o[0-7]+$/i,Le=parseInt;const tt=function($){if(typeof $=="number")return $;if(re($))return NaN;if(U($)){var V=typeof $.valueOf=="function"?$.valueOf():$;$=U(V)?V+"":V}if(typeof $!="string")return $===0?$:+$;$=F($);var Z=Re.test($);return Z||Ee.test($)?Le($.slice(2),Z?2:8):_e.test($)?NaN:+$};var Xe=Math.max,We=Math.min;const Gt=function($,V,Z){var ie,Ne,Fe,qe,Qe,Jt,Kt=0,Fs=!1,Ko=!1,To=!0;if(typeof $!="function")throw new TypeError("Expected a function");function Pr(jn){var Wn=ie,fr=Ne;return ie=Ne=void 0,Kt=jn,qe=$.apply(fr,Wn)}function pi(jn){var Wn=jn-Jt;return Jt===void 0||Wn>=V||Wn<0||Ko&&jn-Kt>=Fe}function pr(){var jn=q();if(pi(jn))return ot(jn);Qe=setTimeout(pr,function(Wn){var fr=V-(Wn-Jt);return Ko?We(fr,Fe-(Wn-Kt)):fr}(jn))}function ot(jn){return Qe=void 0,To&&ie?Pr(jn):(ie=Ne=void 0,qe)}function ao(){var jn=q(),Wn=pi(jn);if(ie=arguments,Ne=this,Jt=jn,Wn){if(Qe===void 0)return function(fr){return Kt=fr,Qe=setTimeout(pr,V),Fs?Pr(fr):qe}(Jt);if(Ko)return clearTimeout(Qe),Qe=setTimeout(pr,V),Pr(Jt)}return Qe===void 0&&(Qe=setTimeout(pr,V)),qe}return V=tt(V)||0,U(Z)&&(Fs=!!Z.leading,Fe=(Ko="maxWait"in Z)?Xe(tt(Z.maxWait)||0,V):Fe,To="trailing"in Z?!!Z.trailing:To),ao.cancel=function(){Qe!==void 0&&clearTimeout(Qe),Kt=0,ie=Jt=Ne=Qe=void 0},ao.flush=function(){return Qe===void 0?qe:ot(q())},ao},Ye=function($,V,Z){var ie=!0,Ne=!0;if(typeof $!="function")throw new TypeError("Expected a function");return U(Z)&&(ie="leading"in Z?!!Z.leading:ie,Ne="trailing"in Z?!!Z.trailing:Ne),Gt($,V,{leading:ie,maxWait:V,trailing:Ne})},wt=function(){this.__data__=[],this.size=0},je=function($,V){return $===V||$!=$&&V!=V},et=function($,V){for(var Z=$.length;Z--;)if(je($[Z][0],V))return Z;return-1};var xn=Array.prototype.splice;const Ze=function($){var V=this.__data__,Z=et(V,$);return!(Z<0)&&(Z==V.length-1?V.pop():xn.call(V,Z,1),--this.size,!0)},mn=function($){var V=this.__data__,Z=et(V,$);return Z<0?void 0:V[Z][1]},Ke=function($){return et(this.__data__,$)>-1},st=function($,V){var Z=this.__data__,ie=et(Z,$);return ie<0?(++this.size,Z.push([$,V])):Z[ie][1]=V,this};function an($){var V=-1,Z=$==null?0:$.length;for(this.clear();++V<Z;){var ie=$[V];this.set(ie[0],ie[1])}}an.prototype.clear=wt,an.prototype.delete=Ze,an.prototype.get=mn,an.prototype.has=Ke,an.prototype.set=st;const nn=an,vt=function(){this.__data__=new nn,this.size=0},nt=function($){var V=this.__data__,Z=V.delete($);return this.size=V.size,Z},Nt=function($){return this.__data__.get($)},Bt=function($){return this.__data__.has($)},Et=function($){if(!U($))return!1;var V=oe($);return V=="[object Function]"||V=="[object GeneratorFunction]"||V=="[object AsyncFunction]"||V=="[object Proxy]"},Mn=L["__core-js_shared__"];var Qt=function(){var $=/[^.]+$/.exec(Mn&&Mn.keys&&Mn.keys.IE_PROTO||"");return $?"Symbol(src)_1."+$:""}();const Zt=function($){return!!Qt&&Qt in $};var ct=Function.prototype.toString;const me=function($){if($!=null){try{return ct.call($)}catch{}try{return $+""}catch{}}return""};var dt=/^\[object .+?Constructor\]$/,Me=Function.prototype,Xn=Object.prototype,Ui=Me.toString,hc=Xn.hasOwnProperty,pc=RegExp("^"+Ui.call(hc).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const ur=function($){return!(!U($)||Zt($))&&(Et($)?pc:dt).test(me($))},on=function($,V){return $==null?void 0:$[V]},bn=function($,V){var Z=on($,V);return ur(Z)?Z:void 0},Jr=bn(L,"Map"),Xr=bn(Object,"create"),fc=function(){this.__data__=Xr?Xr(null):{},this.size=0},ja=function($){var V=this.has($)&&delete this.__data__[$];return this.size-=V?1:0,V};var Fa=Object.prototype.hasOwnProperty;const ku=function($){var V=this.__data__;if(Xr){var Z=V[$];return Z==="__lodash_hash_undefined__"?void 0:Z}return Fa.call(V,$)?V[$]:void 0};var gc=Object.prototype.hasOwnProperty;const Hi=function($){var V=this.__data__;return Xr?V[$]!==void 0:gc.call(V,$)},wu=function($,V){var Z=this.__data__;return this.size+=this.has($)?0:1,Z[$]=Xr&&V===void 0?"__lodash_hash_undefined__":V,this};function kn($){var V=-1,Z=$==null?0:$.length;for(this.clear();++V<Z;){var ie=$[V];this.set(ie[0],ie[1])}}kn.prototype.clear=fc,kn.prototype.delete=ja,kn.prototype.get=ku,kn.prototype.has=Hi,kn.prototype.set=wu;const mc=kn,Wi=function(){this.size=0,this.__data__={hash:new mc,map:new(Jr||nn),string:new mc}},ei=function($){var V=typeof $;return V=="string"||V=="number"||V=="symbol"||V=="boolean"?$!=="__proto__":$===null},_s=function($,V){var Z=$.__data__;return ei(V)?Z[typeof V=="string"?"string":"hash"]:Z.map},vu=function($){var V=_s(this,$).delete($);return this.size-=V?1:0,V},yu=function($){return _s(this,$).get($)},Cu=function($){return _s(this,$).has($)},Au=function($,V){var Z=_s(this,$),ie=Z.size;return Z.set($,V),this.size+=Z.size==ie?0:1,this};function wo($){var V=-1,Z=$==null?0:$.length;for(this.clear();++V<Z;){var ie=$[V];this.set(ie[0],ie[1])}}wo.prototype.clear=Wi,wo.prototype.delete=vu,wo.prototype.get=yu,wo.prototype.has=Cu,wo.prototype.set=Au;const xs=wo,_u=function($,V){var Z=this.__data__;if(Z instanceof nn){var ie=Z.__data__;if(!Jr||ie.length<199)return ie.push([$,V]),this.size=++Z.size,this;Z=this.__data__=new xs(ie)}return Z.set($,V),this.size=Z.size,this};function ti($){var V=this.__data__=new nn($);this.size=V.size}ti.prototype.clear=vt,ti.prototype.delete=nt,ti.prototype.get=Nt,ti.prototype.has=Bt,ti.prototype.set=_u;const xu=ti,Eu=function($,V){for(var Z=-1,ie=$==null?0:$.length;++Z<ie&&V($[Z],Z,$)!==!1;);return $},So=function(){try{var $=bn(Object,"defineProperty");return $({},"",{}),$}catch{}}(),hr=function($,V,Z){V=="__proto__"&&So?So($,V,{configurable:!0,enumerable:!0,value:Z,writable:!0}):$[V]=Z};var $a=Object.prototype.hasOwnProperty;const qi=function($,V,Z){var ie=$[V];$a.call($,V)&&je(ie,Z)&&(Z!==void 0||V in $)||hr($,V,Z)},En=function($,V,Z,ie){var Ne=!Z;Z||(Z={});for(var Fe=-1,qe=V.length;++Fe<qe;){var Qe=V[Fe],Jt=ie?ie(Z[Qe],$[Qe],Qe,Z,$):void 0;Jt===void 0&&(Jt=$[Qe]),Ne?hr(Z,Qe,Jt):qi(Z,Qe,Jt)}return Z},Tr=function($,V){for(var Z=-1,ie=Array($);++Z<$;)ie[Z]=V(Z);return ie},bc=function($){return se($)&&oe($)=="[object Arguments]"};var kc=Object.prototype,wc=kc.hasOwnProperty,Su=kc.propertyIsEnumerable;const Du=bc(function(){return arguments}())?bc:function($){return se($)&&wc.call($,"callee")&&!Su.call($,"callee")},Va=Array.isArray,vc=function(){return!1};var yc=o&&!o.nodeType&&o,Vo=yc&&!0&&t&&!t.nodeType&&t,ni=Vo&&Vo.exports===yc?L.Buffer:void 0;const oi=(ni?ni.isBuffer:void 0)||vc;var Tu=/^(?:0|[1-9]\d*)$/;const Iu=function($,V){var Z=typeof $;return!!(V=V??9007199254740991)&&(Z=="number"||Z!="symbol"&&Tu.test($))&&$>-1&&$%1==0&&$<V},Cc=function($){return typeof $=="number"&&$>-1&&$%1==0&&$<=9007199254740991};var Rt={};Rt["[object Float32Array]"]=Rt["[object Float64Array]"]=Rt["[object Int8Array]"]=Rt["[object Int16Array]"]=Rt["[object Int32Array]"]=Rt["[object Uint8Array]"]=Rt["[object Uint8ClampedArray]"]=Rt["[object Uint16Array]"]=Rt["[object Uint32Array]"]=!0,Rt["[object Arguments]"]=Rt["[object Array]"]=Rt["[object ArrayBuffer]"]=Rt["[object Boolean]"]=Rt["[object DataView]"]=Rt["[object Date]"]=Rt["[object Error]"]=Rt["[object Function]"]=Rt["[object Map]"]=Rt["[object Number]"]=Rt["[object Object]"]=Rt["[object RegExp]"]=Rt["[object Set]"]=Rt["[object String]"]=Rt["[object WeakMap]"]=!1;const Mu=function($){return se($)&&Cc($.length)&&!!Rt[oe($)]},Es=function($){return function(V){return $(V)}};var Ua=o&&!o.nodeType&&o,Do=Ua&&!0&&t&&!t.nodeType&&t,Ss=Do&&Do.exports===Ua&&N.process;const ri=function(){try{var $=Do&&Do.require&&Do.require("util").types;return $||Ss&&Ss.binding&&Ss.binding("util")}catch{}}();var Ha=ri&&ri.isTypedArray;const Ds=Ha?Es(Ha):Mu;var Pu=Object.prototype.hasOwnProperty;const Ir=function($,V){var Z=Va($),ie=!Z&&Du($),Ne=!Z&&!ie&&oi($),Fe=!Z&&!ie&&!Ne&&Ds($),qe=Z||ie||Ne||Fe,Qe=qe?Tr($.length,String):[],Jt=Qe.length;for(var Kt in $)!V&&!Pu.call($,Kt)||qe&&(Kt=="length"||Ne&&(Kt=="offset"||Kt=="parent")||Fe&&(Kt=="buffer"||Kt=="byteLength"||Kt=="byteOffset")||Iu(Kt,Jt))||Qe.push(Kt);return Qe};var Ac=Object.prototype;const Wa=function($){var V=$&&$.constructor;return $===(typeof V=="function"&&V.prototype||Ac)},Uo=function($,V){return function(Z){return $(V(Z))}},Gi=Uo(Object.keys,Object);var Nu=Object.prototype.hasOwnProperty;const ii=function($){if(!Wa($))return Gi($);var V=[];for(var Z in Object($))Nu.call($,Z)&&Z!="constructor"&&V.push(Z);return V},si=function($){return $!=null&&Cc($.length)&&!Et($)},qa=function($){return si($)?Ir($):ii($)},Ts=function($,V){return $&&En(V,qa(V),$)},Ga=function($){var V=[];if($!=null)for(var Z in Object($))V.push(Z);return V};var Ki=Object.prototype.hasOwnProperty;const Ka=function($){if(!U($))return Ga($);var V=Wa($),Z=[];for(var ie in $)(ie!="constructor"||!V&&Ki.call($,ie))&&Z.push(ie);return Z},Ho=function($){return si($)?Ir($,!0):Ka($)},Bu=function($,V){return $&&En(V,Ho(V),$)};var Ya=o&&!o.nodeType&&o,Qa=Ya&&!0&&t&&!t.nodeType&&t,_c=Qa&&Qa.exports===Ya?L.Buffer:void 0,xc=_c?_c.allocUnsafe:void 0;const Za=function($,V){if(V)return $.slice();var Z=$.length,ie=xc?xc(Z):new $.constructor(Z);return $.copy(ie),ie},Ru=function($,V){var Z=-1,ie=$.length;for(V||(V=Array(ie));++Z<ie;)V[Z]=$[Z];return V},Ec=function($,V){for(var Z=-1,ie=$==null?0:$.length,Ne=0,Fe=[];++Z<ie;){var qe=$[Z];V(qe,Z,$)&&(Fe[Ne++]=qe)}return Fe},Ja=function(){return[]};var Xa=Object.prototype.propertyIsEnumerable,ai=Object.getOwnPropertySymbols;const li=ai?function($){return $==null?[]:($=Object($),Ec(ai($),function(V){return Xa.call($,V)}))}:Ja,el=function($,V){return En($,li($),V)},tl=function($,V){for(var Z=-1,ie=V.length,Ne=$.length;++Z<ie;)$[Ne+Z]=V[Z];return $},Ct=Uo(Object.getPrototypeOf,Object),ci=Object.getOwnPropertySymbols?function($){for(var V=[];$;)tl(V,li($)),$=Ct($);return V}:Ja,nl=function($,V){return En($,ci($),V)},ol=function($,V,Z){var ie=V($);return Va($)?ie:tl(ie,Z($))},Yi=function($){return ol($,qa,li)},Is=function($){return ol($,Ho,ci)},Wo=bn(L,"DataView"),Qi=bn(L,"Promise"),Zi=bn(L,"Set"),rl=bn(L,"WeakMap");var il="[object Map]",Sc="[object Promise]",Ms="[object Set]",Dc="[object WeakMap]",Mr="[object DataView]",Ou=me(Wo),Ps=me(Jr),sl=me(Qi),Tc=me(Zi),Ic=me(rl),qo=oe;(Wo&&qo(new Wo(new ArrayBuffer(1)))!=Mr||Jr&&qo(new Jr)!=il||Qi&&qo(Qi.resolve())!=Sc||Zi&&qo(new Zi)!=Ms||rl&&qo(new rl)!=Dc)&&(qo=function($){var V=oe($),Z=V=="[object Object]"?$.constructor:void 0,ie=Z?me(Z):"";if(ie)switch(ie){case Ou:return Mr;case Ps:return il;case sl:return Sc;case Tc:return Ms;case Ic:return Dc}return V});const al=qo;var di=Object.prototype.hasOwnProperty;const Lu=function($){var V=$.length,Z=new $.constructor(V);return V&&typeof $[0]=="string"&&di.call($,"index")&&(Z.index=$.index,Z.input=$.input),Z},ll=L.Uint8Array,Ns=function($){var V=new $.constructor($.byteLength);return new ll(V).set(new ll($)),V},Mc=function($,V){var Z=V?Ns($.buffer):$.buffer;return new $.constructor(Z,$.byteOffset,$.byteLength)};var Pc=/\w*$/;const Nc=function($){var V=new $.constructor($.source,Pc.exec($));return V.lastIndex=$.lastIndex,V};var Bs=X?X.prototype:void 0,Rs=Bs?Bs.valueOf:void 0;const cl=function($){return Rs?Object(Rs.call($)):{}},ui=function($,V){var Z=V?Ns($.buffer):$.buffer;return new $.constructor(Z,$.byteOffset,$.length)},Bc=function($,V,Z){var ie=$.constructor;switch(V){case"[object ArrayBuffer]":return Ns($);case"[object Boolean]":case"[object Date]":return new ie(+$);case"[object DataView]":return Mc($,Z);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return ui($,Z);case"[object Map]":case"[object Set]":return new ie;case"[object Number]":case"[object String]":return new ie($);case"[object RegExp]":return Nc($);case"[object Symbol]":return cl($)}};var Os=Object.create;const zu=function(){function $(){}return function(V){if(!U(V))return{};if(Os)return Os(V);$.prototype=V;var Z=new $;return $.prototype=void 0,Z}}(),Rc=function($){return typeof $.constructor!="function"||Wa($)?{}:zu(Ct($))},Oc=function($){return se($)&&al($)=="[object Map]"};var Lc=ri&&ri.isMap;const zc=Lc?Es(Lc):Oc,dl=function($){return se($)&&al($)=="[object Set]"};var jc=ri&&ri.isSet;const Ji=jc?Es(jc):dl;var Xi="[object Arguments]",Ls="[object Function]",zs="[object Object]",At={};At[Xi]=At["[object Array]"]=At["[object ArrayBuffer]"]=At["[object DataView]"]=At["[object Boolean]"]=At["[object Date]"]=At["[object Float32Array]"]=At["[object Float64Array]"]=At["[object Int8Array]"]=At["[object Int16Array]"]=At["[object Int32Array]"]=At["[object Map]"]=At["[object Number]"]=At[zs]=At["[object RegExp]"]=At["[object Set]"]=At["[object String]"]=At["[object Symbol]"]=At["[object Uint8Array]"]=At["[object Uint8ClampedArray]"]=At["[object Uint16Array]"]=At["[object Uint32Array]"]=!0,At["[object Error]"]=At[Ls]=At["[object WeakMap]"]=!1;const ul=function $(V,Z,ie,Ne,Fe,qe){var Qe,Jt=1&Z,Kt=2&Z,Fs=4&Z;if(ie&&(Qe=Fe?ie(V,Ne,Fe,qe):ie(V)),Qe!==void 0)return Qe;if(!U(V))return V;var Ko=Va(V);if(Ko){if(Qe=Lu(V),!Jt)return Ru(V,Qe)}else{var To=al(V),Pr=To==Ls||To=="[object GeneratorFunction]";if(oi(V))return Za(V,Jt);if(To==zs||To==Xi||Pr&&!Fe){if(Qe=Kt||Pr?{}:Rc(V),!Jt)return Kt?nl(V,Bu(Qe,V)):el(V,Ts(Qe,V))}else{if(!At[To])return Fe?V:{};Qe=Bc(V,To,Jt)}}qe||(qe=new xu);var pi=qe.get(V);if(pi)return pi;qe.set(V,Qe),Ji(V)?V.forEach(function(ot){Qe.add($(ot,Z,ie,ot,V,qe))}):zc(V)&&V.forEach(function(ot,ao){Qe.set(ao,$(ot,Z,ie,ao,V,qe))});var pr=Ko?void 0:(Fs?Kt?Is:Yi:Kt?Ho:qa)(V);return Eu(pr||V,function(ot,ao){pr&&(ot=V[ao=ot]),qi(Qe,ao,$(ot,Z,ie,ao,V,qe))}),Qe},Fc=function($,V){return ul($,5,V=typeof V=="function"?V:void 0)};var js=Function.prototype,hl=Object.prototype,pl=js.toString,fl=hl.hasOwnProperty,ju=pl.call(Object);const Fu=function($){if(!se($)||oe($)!="[object Object]")return!1;var V=Ct($);if(V===null)return!0;var Z=fl.call(V,"constructor")&&V.constructor;return typeof Z=="function"&&Z instanceof Z&&pl.call(Z)==ju},$u=function($){return se($)&&$.nodeType===1&&!Fu($)};class vo extends A{constructor(V,Z={}){super(Z),this._editor=null,this._throttledSave=Ye(this._save.bind(this),typeof Z.saveInterval=="number"?Z.saveInterval:5e3),V&&(this._creator=(ie,Ne)=>V.create(ie,Ne)),this._destructor=ie=>ie.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(V){this._creator=V}setDestructor(V){this._destructor=V}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(V=>{console.error("An error happened during the editor destroying.",V)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const V=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,V,V.context)}}).then(()=>{this._fire("restart")})}create(V=this._elementOrData,Z=this._config,ie){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=V,this._config=this._cloneEditorConfiguration(Z)||{},this._config.context=ie,this._creator(V,this._config))).then(Ne=>{this._editor=Ne,Ne.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=Ne.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const V=this._editor;return this._editor=null,V.model.document.off("change:data",this._throttledSave),this._destructor(V)})}_save(){const V=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=V}catch(Z){console.error(Z,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(V){this._excludedProps=V}_getData(){const V={};for(const Z of this._editor.model.document.getRootNames())V[Z]=this._editor.data.get({rootName:Z});return V}_isErrorComingFromThisItem(V){return I(this._editor,V.context,this._excludedProps)}_cloneEditorConfiguration(V){return Fc(V,(Z,ie)=>$u(Z)||ie==="context"?Z:void 0)}}const Go=Symbol("MainQueueId");class $c extends A{constructor(V,Z={}){super(Z),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new Vu,this._watchdogConfig=Z,this._creator=ie=>V.create(ie),this._destructor=ie=>ie.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(V){this._creator=V}setDestructor(V){this._destructor=V}get context(){return this._context}create(V={}){return this._actionQueues.enqueue(Go,()=>(this._contextConfig=V,this._create()))}getItem(V){return this._getWatchdog(V)._item}getItemState(V){return this._getWatchdog(V).state}add(V){const Z=es(V);return Promise.all(Z.map(ie=>this._actionQueues.enqueue(ie.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let Ne;if(this._watchdogs.has(ie.id))throw new Error(`Item with the given id is already added: '${ie.id}'.`);if(ie.type==="editor")return Ne=new vo(null,this._watchdogConfig),Ne.setCreator(ie.creator),Ne._setExcludedProperties(this._contextProps),ie.destructor&&Ne.setDestructor(ie.destructor),this._watchdogs.set(ie.id,Ne),Ne.on("error",(Fe,{error:qe,causesRestart:Qe})=>{this._fire("itemError",{itemId:ie.id,error:qe}),Qe&&this._actionQueues.enqueue(ie.id,()=>new Promise(Jt=>{const Kt=()=>{Ne.off("restart",Kt),this._fire("itemRestart",{itemId:ie.id}),Jt()};Ne.on("restart",Kt)}))}),Ne.create(ie.sourceElementOrData,ie.config,this._context);throw new Error(`Not supported item type: '${ie.type}'.`)})))}remove(V){const Z=es(V);return Promise.all(Z.map(ie=>this._actionQueues.enqueue(ie,()=>{const Ne=this._getWatchdog(ie);return this._watchdogs.delete(ie),Ne.destroy()})))}destroy(){return this._actionQueues.enqueue(Go,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Go,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(V=>{console.error("An error happened during destroying the context or items.",V)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(V=>(this._context=V,this._contextProps=S(this._context),Promise.all(Array.from(this._watchdogs.values()).map(Z=>(Z._setExcludedProperties(this._contextProps),Z.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const V=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(Z=>Z.destroy())).then(()=>this._destructor(V))})}_getWatchdog(V){const Z=this._watchdogs.get(V);if(!Z)throw new Error(`Item with the given id was not registered: ${V}.`);return Z}_isErrorComingFromThisItem(V){for(const Z of this._watchdogs.values())if(Z._isErrorComingFromThisItem(V))return!1;return I(this._context,V.context)}}class Vu{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(V){this._onEmptyCallbacks.push(V)}enqueue(V,Z){const ie=V===Go;this._activeActions++,this._queues.get(V)||this._queues.set(V,Promise.resolve());const Ne=(ie?Promise.all(this._queues.values()):Promise.all([this._queues.get(Go),this._queues.get(V)])).then(Z),Fe=Ne.catch(()=>{});return this._queues.set(V,Fe),Ne.finally(()=>{this._activeActions--,this._queues.get(V)===Fe&&this._activeActions===0&&this._onEmptyCallbacks.forEach(qe=>qe())})}}function es($){return Array.isArray($)?$:[$]}const ts=m().createContext("contextWatchdog");class gl extends m().Component{constructor(V,Z){super(V,Z),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(V){return this._shouldComponentUpdate(V)}async _shouldComponentUpdate(V){return V.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(V.config)),V.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(V.config),!0):this.props.children!==V.children}render(){return m().createElement(ts.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(V){this.contextWatchdog=new $c(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(Z,ie)=>{this.props.onError(ie.error,{phase:"runtime",willContextRestart:ie.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(V).catch(Z=>{this.props.onError(Z,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}gl.defaultProps={isLayoutReady:!0,onError:($,V)=>console.error($,V)},gl.propTypes={id:C().string,isLayoutReady:C().bool,context:C().func,watchdogConfig:C().object,config:C().object,onReady:C().func,onError:C().func};const ml="Lock from React integration (@ckeditor/ckeditor5-react)";class hi extends m().Component{constructor(V){super(V),this.editorDestructionInProgress=null,this.domContainer=m().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:Z}=window;if(Z){const[ie]=Z.split(".").map(Number);ie<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(V){return!!this.editor&&(V.id!==this.props.id||(this._shouldUpdateEditor(V)&&this.editor.data.set(V.data),"disabled"in V&&(V.disabled?this.editor.enableReadOnlyMode(ml):this.editor.disableReadOnlyMode(ml)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return m().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.watchdog||(this.context instanceof $c?this.watchdog=new Vc(this.context):this.watchdog=new hi._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((V,Z)=>this._createEditor(V,Z)),this.watchdog.on("error",(V,{error:Z,causesRestart:ie})=>{(this.props.onError||console.error)(Z,{phase:"runtime",willEditorRestart:ie})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(V=>{(this.props.onError||console.error)(V,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(V,Z){return this.props.editor.create(V,Z).then(ie=>{"disabled"in this.props&&this.props.disabled&&ie.enableReadOnlyMode(ml);const Ne=ie.model.document,Fe=ie.editing.view.document;return Ne.on("change:data",qe=>{this.props.onChange&&this.props.onChange(qe,ie)}),Fe.on("focus",qe=>{this.props.onFocus&&this.props.onFocus(qe,ie)}),Fe.on("blur",qe=>{this.props.onBlur&&this.props.onBlur(qe,ie)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(ie)}),ie})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(V=>{setTimeout(()=>{this.watchdog?this.watchdog.destroy().then(()=>{this.watchdog=null,V()}):V()})})}_shouldUpdateEditor(V){return this.props.data!==V.data&&this.editor.data.get()!==V.data}_getConfig(){const V=this.props.config||{};return this.props.data&&V.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...V,initialData:V.initialData||this.props.data||""}}}hi.contextType=ts,hi.propTypes={editor:C().func.isRequired,data:C().string,config:C().object,watchdogConfig:C().object,onChange:C().func,onReady:C().func,onFocus:C().func,onBlur:C().func,onError:C().func,disabled:C().bool,id:C().any},hi._EditorWatchdog=vo;class Vc{constructor(V){this._contextWatchdog=V,this._id=function(){const Z=4294967296*Math.random()>>>0,ie=4294967296*Math.random()>>>0,Ne=4294967296*Math.random()>>>0,Fe=4294967296*Math.random()>>>0;return"e"+_[Z>>0&255]+_[Z>>8&255]+_[Z>>16&255]+_[Z>>24&255]+_[ie>>0&255]+_[ie>>8&255]+_[ie>>16&255]+_[ie>>24&255]+_[Ne>>0&255]+_[Ne>>8&255]+_[Ne>>16&255]+_[Ne>>24&255]+_[Fe>>0&255]+_[Fe>>8&255]+_[Fe>>16&255]+_[Fe>>24&255]}()}setCreator(V){this._creator=V}create(V,Z){return this._contextWatchdog.add({sourceElementOrData:V,config:Z,creator:this._creator,id:this._id,type:"editor"})}on(V,Z){this._contextWatchdog.on("itemError",(ie,{itemId:Ne,error:Fe})=>{Ne===this._id&&Z(null,{error:Fe,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}})(),f})())})(Rre,su);var mm={},Ore={get exports(){return mm},set exports(t){mm=t}};(function(t,o){(function(i){const l=i.en=i.en||{};l.dictionary=Object.assign(l.dictionary||{},{"%0 of %1":"%0 of %1","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Inset:"Inset",Italic:"Italic","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(i,l){t.exports=l()}(self,()=>(()=>{var i={8603:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const S=A},3062:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const S=A},903:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const S=A},3143:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},4717:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const S=A},9315:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const S=A},8733:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const S=A},3508:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const S=A},2640:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const S=A},3535:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]);const S=A},1568:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const S=A},6270:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const S=A},5083:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},4036:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const S=A},3773:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const S=A},3689:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const S=A},1905:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},9773:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const S=A},2347:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},7754:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},111:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const S=A},4721:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const S=A},5730:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const S=A},4564:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},6082:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const S=A},2417:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const S=A},1199:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable .todo-list .todo-list__label>input{cursor:pointer}.ck-editor__editable .todo-list .todo-list__label>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAEA,uBACC,eA0ED,CAxEC,0BACC,iBAKD,CAHC,qCACC,cACD,CAIA,+CACC,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqDD,CAxCC,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,0FAAgG,CAJhG,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAIF,wEACC,qBACD,CAKF,6CACC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAED,CAMA,wDACC,cAKD,CAHC,qEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

.ck-content .todo-list {
	list-style: none;

	& li {
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			-webkit-appearance: none;
			display: inline-block;
			position: relative;
			width: var(--ck-todo-list-checkmark-size);
			height: var(--ck-todo-list-checkmark-size);
			vertical-align: middle;

			/* Needed on iOS */
			border: 0;

			/* LTR styles */
			left: -25px;
			margin-right: -15px;
			right: 0;
			margin-left: 0;

			&::before {
				display: block;
				position: absolute;
				box-sizing: border-box;
				content: '';
				width: 100%;
				height: 100%;
				border: 1px solid hsl(0, 0%, 20%);
				border-radius: 2px;
				transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;
			}

			&::after {
				display: block;
				position: absolute;
				box-sizing: content-box;
				pointer-events: none;
				content: '';

				/* Calculate tick position, size and border-width proportional to the checkmark size. */
				left: calc( var(--ck-todo-list-checkmark-size) / 3 );
				top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
				border-style: solid;
				border-color: transparent;
				border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
				transform: rotate(45deg);
			}

			&[checked] {
				&::before {
					background: hsl(126, 64%, 41%);
					border-color: hsl(126, 64%, 41%);
				}

				&::after {
					border-color: hsl(0, 0%, 100%);
				}
			}
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}
	}
}

/* RTL styles */
[dir="rtl"] .todo-list .todo-list__label > input {
	left: 0;
	margin-right: 0;
	right: -25px;
	margin-left: -15px;
}

/*
 * To-do list should be interactive only during the editing
 * (https://github.com/ckeditor/ckeditor5/issues/2090).
 */
.ck-editor__editable .todo-list .todo-list__label > input {
	cursor: pointer;

	&:hover::before {
		box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
	}
}
`],sourceRoot:""}]);const S=A},4652:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const S=A},7442:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},9292:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},7368:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},4070:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},9247:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const S=A},1613:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const S=A},6306:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const S=A},2128:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,":root{--ck-color-table-caption-background:#f7f7f7;--ck-color-table-caption-text:#333;--ck-color-table-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-table-caption-background);caption-side:top;color:var(--ck-color-table-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-table-caption-highlighted-background)}to{background-color:var(--ck-color-table-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAMC,yDAA0D,CAJ1D,gBAAiB,CAGjB,wCAAyC,CAJzC,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-caption-background: hsl(0, 0%, 97%);
	--ck-color-table-caption-text: hsl(0, 0%, 20%);
	--ck-color-table-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-table-caption-text);
	background-color: var(--ck-color-table-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-table-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-table-caption-background);
	}
}
`],sourceRoot:""}]);const S=A},5087:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},4101:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,":root{--ck-color-table-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:-999999px;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:-999999px;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-table-column-resizer-hover);opacity:.25}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,iEAAkE,CAClE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAEC,iBACD,CAEA,wDAOC,gBAAiB,CAGjB,iBAAkB,CATlB,iBAAkB,CAOlB,oDAAqD,CAFrD,aAAc,CAKd,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,2DAA4D,CAC5D,WACD,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-table-column-resizer-hover);
	opacity: 0.25;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const S=A},3881:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const S=A},6237:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},7341:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},6945:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},4906:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=A},5332:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=A},6781:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const S=A},5485:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},3949:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},7686:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},7339:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const S=A},9688:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},8847:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const S=A},6574:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},4879:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},3662:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const S=A},2577:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},1046:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},8793:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},4650:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const S=A},7676:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},5868:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},6764:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const S=A},9695:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const S=A},5542:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=A},3332:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const S=A},4793:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const S=A},3488:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=A},8506:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const S=A},4921:(f,b,m)=>{m.d(b,{Z:()=>S});var v=m(1799),C=m.n(v),_=m(2609),A=m.n(_)()(C());A.push([f.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const S=A},2609:f=>{f.exports=function(b){var m=[];return m.toString=function(){return this.map(function(v){var C=b(v);return v[2]?"@media ".concat(v[2]," {").concat(C,"}"):C}).join("")},m.i=function(v,C,_){typeof v=="string"&&(v=[[null,v,""]]);var A={};if(_)for(var S=0;S<this.length;S++){var M=this[S][0];M!=null&&(A[M]=!0)}for(var I=0;I<v.length;I++){var U=[].concat(v[I]);_&&A[U[0]]||(C&&(U[2]?U[2]="".concat(C," and ").concat(U[2]):U[2]=C),m.push(U))}},m}},1799:f=>{function b(v,C){return function(_){if(Array.isArray(_))return _}(v)||function(_,A){var S=_&&(typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"]);if(S!=null){var M,I,U=[],N=!0,O=!1;try{for(S=S.call(_);!(N=(M=S.next()).done)&&(U.push(M.value),!A||U.length!==A);N=!0);}catch(L){O=!0,I=L}finally{try{N||S.return==null||S.return()}finally{if(O)throw I}}return U}}(v,C)||function(_,A){if(_){if(typeof _=="string")return m(_,A);var S=Object.prototype.toString.call(_).slice(8,-1);if(S==="Object"&&_.constructor&&(S=_.constructor.name),S==="Map"||S==="Set")return Array.from(_);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return m(_,A)}}(v,C)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function m(v,C){(C==null||C>v.length)&&(C=v.length);for(var _=0,A=new Array(C);_<C;_++)A[_]=v[_];return A}f.exports=function(v){var C=b(v,4),_=C[1],A=C[3];if(!A)return _;if(typeof btoa=="function"){var S=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),M="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(S),I="/*# ".concat(M," */"),U=A.sources.map(function(N){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(N," */")});return[_].concat(U).concat([I]).join(`
`)}return[_].join(`
`)}},6062:(f,b,m)=>{var v,C=function(){return v===void 0&&(v=!!(window&&document&&document.all&&!window.atob)),v},_=function(){var H={};return function(F){if(H[F]===void 0){var X=document.querySelector(F);if(window.HTMLIFrameElement&&X instanceof window.HTMLIFrameElement)try{X=X.contentDocument.head}catch{X=null}H[F]=X}return H[F]}}(),A=[];function S(H){for(var F=-1,X=0;X<A.length;X++)if(A[X].identifier===H){F=X;break}return F}function M(H,F){for(var X={},ee=[],ce=0;ce<H.length;ce++){var ke=H[ce],ge=F.base?ke[0]+F.base:ke[0],fe=X[ge]||0,he="".concat(ge," ").concat(fe);X[ge]=fe+1;var ve=S(he),De={css:ke[1],media:ke[2],sourceMap:ke[3]};ve!==-1?(A[ve].references++,A[ve].updater(De)):A.push({identifier:he,updater:J(De,F),references:1}),ee.push(he)}return ee}function I(H){var F=document.createElement("style"),X=H.attributes||{};if(X.nonce===void 0){var ee=m.nc;ee&&(X.nonce=ee)}if(Object.keys(X).forEach(function(ke){F.setAttribute(ke,X[ke])}),typeof H.insert=="function")H.insert(F);else{var ce=_(H.insert||"head");if(!ce)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");ce.appendChild(F)}return F}var U,N=(U=[],function(H,F){return U[H]=F,U.filter(Boolean).join(`
`)});function O(H,F,X,ee){var ce=X?"":ee.media?"@media ".concat(ee.media," {").concat(ee.css,"}"):ee.css;if(H.styleSheet)H.styleSheet.cssText=N(F,ce);else{var ke=document.createTextNode(ce),ge=H.childNodes;ge[F]&&H.removeChild(ge[F]),ge.length?H.insertBefore(ke,ge[F]):H.appendChild(ke)}}function L(H,F,X){var ee=X.css,ce=X.media,ke=X.sourceMap;if(ce?H.setAttribute("media",ce):H.removeAttribute("media"),ke&&typeof btoa<"u"&&(ee+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ke))))," */")),H.styleSheet)H.styleSheet.cssText=ee;else{for(;H.firstChild;)H.removeChild(H.firstChild);H.appendChild(document.createTextNode(ee))}}var q=null,K=0;function J(H,F){var X,ee,ce;if(F.singleton){var ke=K++;X=q||(q=I(F)),ee=O.bind(null,X,ke,!1),ce=O.bind(null,X,ke,!0)}else X=I(F),ee=L.bind(null,X,F),ce=function(){(function(ge){if(ge.parentNode===null)return!1;ge.parentNode.removeChild(ge)})(X)};return ee(H),function(ge){if(ge){if(ge.css===H.css&&ge.media===H.media&&ge.sourceMap===H.sourceMap)return;ee(H=ge)}else ce()}}f.exports=function(H,F){(F=F||{}).singleton||typeof F.singleton=="boolean"||(F.singleton=C());var X=M(H=H||[],F);return function(ee){if(ee=ee||[],Object.prototype.toString.call(ee)==="[object Array]"){for(var ce=0;ce<X.length;ce++){var ke=S(X[ce]);A[ke].references--}for(var ge=M(ee,F),fe=0;fe<X.length;fe++){var he=S(X[fe]);A[he].references===0&&(A[he].updater(),A.splice(he,1))}X=ge}}}}},l={};function d(f){var b=l[f];if(b!==void 0)return b.exports;var m=l[f]={id:f,exports:{}};return i[f](m,m.exports,d),m.exports}d.n=f=>{var b=f&&f.__esModule?()=>f.default:()=>f;return d.d(b,{a:b}),b},d.d=(f,b)=>{for(var m in b)d.o(b,m)&&!d.o(f,m)&&Object.defineProperty(f,m,{enumerable:!0,get:b[m]})},d.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),d.o=(f,b)=>Object.prototype.hasOwnProperty.call(f,b),d.nc=void 0;var h={};return(()=>{function f({emitter:a,activator:e,callback:n,contextElements:r}){a.listenTo(document,"mousedown",(s,c)=>{if(!e())return;const u=typeof c.composedPath=="function"?c.composedPath():[],p=typeof r=="function"?r():r;for(const g of p)if(g.contains(c.target)||u.includes(g))return;n()})}function b(a){return class extends a{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function m({view:a}){a.listenTo(a.element,"submit",(e,n)=>{n.preventDefault(),a.fire("submit")},{useCapture:!0})}d.d(h,{default:()=>hw});const v=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),C={isMac:A(v),isWindows:function(a){return a.indexOf("windows")>-1}(v),isGecko:function(a){return!!a.match(/gecko\/\d+/)}(v),isSafari:function(a){return a.indexOf(" applewebkit/")>-1&&a.indexOf("chrome")===-1}(v),isiOS:function(a){return!!a.match(/iphone|ipad/i)||A(a)&&navigator.maxTouchPoints>0}(v),isAndroid:function(a){return a.indexOf("android")>-1}(v),isBlink:function(a){return a.indexOf("chrome/")>-1&&a.indexOf("edge/")<0}(v),features:{isRegExpUnicodePropertySupported:function(){let a=!1;try{a="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return a}()}},_=C;function A(a){return a.indexOf("macintosh")>-1}function S(a,e,n,r){n=n||function(g,k){return g===k};const s=Array.isArray(a)?a:Array.prototype.slice.call(a),c=Array.isArray(e)?e:Array.prototype.slice.call(e),u=function(g,k,w){const y=M(g,k,w);if(y===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const x=I(g,y),P=I(k,y),B=M(x,P,w),j=g.length-B,W=k.length-B;return{firstIndex:y,lastIndexOld:j,lastIndexNew:W}}(s,c,n);return r?function(g,k){const{firstIndex:w,lastIndexOld:y,lastIndexNew:x}=g;if(w===-1)return Array(k).fill("equal");let P=[];return w>0&&(P=P.concat(Array(w).fill("equal"))),x-w>0&&(P=P.concat(Array(x-w).fill("insert"))),y-w>0&&(P=P.concat(Array(y-w).fill("delete"))),x<k&&(P=P.concat(Array(k-x).fill("equal"))),P}(u,c.length):function(g,k){const w=[],{firstIndex:y,lastIndexOld:x,lastIndexNew:P}=k;return P-y>0&&w.push({index:y,type:"insert",values:g.slice(y,P)}),x-y>0&&w.push({index:y+(P-y),type:"delete",howMany:x-y}),w}(c,u)}function M(a,e,n){for(let r=0;r<Math.max(a.length,e.length);r++)if(a[r]===void 0||e[r]===void 0||!n(a[r],e[r]))return r;return-1}function I(a,e){return a.slice(e).reverse()}function U(a,e,n){n=n||function(j,W){return j===W};const r=a.length,s=e.length;if(r>200||s>200||r+s>300)return U.fastDiff(a,e,n,!0);let c,u;if(s<r){const j=a;a=e,e=j,c="delete",u="insert"}else c="insert",u="delete";const p=a.length,g=e.length,k=g-p,w={},y={};function x(j){const W=(y[j-1]!==void 0?y[j-1]:-1)+1,Y=y[j+1]!==void 0?y[j+1]:-1,te=W>Y?-1:1;w[j+te]&&(w[j]=w[j+te].slice(0)),w[j]||(w[j]=[]),w[j].push(W>Y?c:u);let de=Math.max(W,Y),xe=de-j;for(;xe<p&&de<g&&n(a[xe],e[de]);)xe++,de++,w[j].push("equal");return de}let P,B=0;do{for(P=-B;P<k;P++)y[P]=x(P);for(P=k+B;P>k;P--)y[P]=x(P);y[k]=x(k),B++}while(y[k]!==g);return w[k].slice(1)}U.fastDiff=S;const N=function(){return function a(){a.called=!0}};class O{constructor(e,n){this.source=e,this.name=n,this.path=[],this.stop=N(),this.off=N()}}const L=new Array(256).fill("").map((a,e)=>("0"+e.toString(16)).slice(-2));function q(){const a=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0;return"e"+L[a>>0&255]+L[a>>8&255]+L[a>>16&255]+L[a>>24&255]+L[e>>0&255]+L[e>>8&255]+L[e>>16&255]+L[e>>24&255]+L[n>>0&255]+L[n>>8&255]+L[n>>16&255]+L[n>>24&255]+L[r>>0&255]+L[r>>8&255]+L[r>>16&255]+L[r>>24&255]}const K={get(a="normal"){return typeof a!="number"?this[a]||this.normal:a},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function J(a,e){const n=K.get(e.priority);for(let r=0;r<a.length;r++)if(K.get(a[r].priority)<n)return void a.splice(r,0,e);a.push(e)}const H="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class F extends Error{constructor(e,n,r){super(function(s,c){const u=new WeakSet,p=(w,y)=>{if(typeof y=="object"&&y!==null){if(u.has(y))return`[object ${y.constructor.name}]`;u.add(y)}return y},g=c?` ${JSON.stringify(c,p)}`:"",k=ce(s);return s+g+k}(e,r)),this.name="CKEditorError",this.context=n,this.data=r}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,n){if(e.is&&e.is("CKEditorError"))throw e;const r=new F(e.message,n);throw r.stack=e.stack,r}}function X(a,e){console.warn(...ke(a,e))}function ee(a,e){console.error(...ke(a,e))}function ce(a){return`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[r.createRange(p[0].end)]});else if(e.inputType=="insertText"&&u&&u.includes(`
`;else{let n=null;for(const r of a.getChildren()){const s=gx(r);n&&(n.is("containerElement")||r.is("containerElement"))&&(fx.includes(n.name)||fx.includes(r.name)?e+=`
`:e+=`

Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Kv=function(t,o){return Kv=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,l){i.__proto__=l}||function(i,l){for(var d in l)l.hasOwnProperty(d)&&(i[d]=l[d])},Kv(t,o)};function Jre(t,o){Kv(t,o);function i(){this.constructor=t}t.prototype=o===null?Object.create(o):(i.prototype=o.prototype,new i)}var Qh=function(){return Qh=Object.assign||function(o){for(var i,l=1,d=arguments.length;l<d;l++){i=arguments[l];for(var h in i)Object.prototype.hasOwnProperty.call(i,h)&&(o[h]=i[h])}return o},Qh.apply(this,arguments)};function Xre(t,o,i,l){var d,h=!1,f=0;function b(){d&&clearTimeout(d)}function m(){b(),h=!0}typeof o!="boolean"&&(l=i,i=o,o=void 0);function v(){var C=this,_=Date.now()-f,A=arguments;if(h)return;function S(){f=Date.now(),i.apply(C,A)}function M(){d=void 0}l&&!d&&S(),b(),l===void 0&&_>t?S():o!==!0&&(d=setTimeout(l?M:S,l===void 0?t-_:t))}return v.cancel=m,v}var Hd={Pixel:"Pixel",Percent:"Percent"},uM={unit:Hd.Percent,value:.8};function hM(t){return typeof t=="number"?{unit:Hd.Percent,value:t*100}:typeof t=="string"?t.match(/^(\d*(\.\d+)?)px$/)?{unit:Hd.Pixel,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:Hd.Percent,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),uM):(console.warn("scrollThreshold should be string or number"),uM)}var eie=function(t){Jre(o,t);function o(i){var l=t.call(this,i)||this;return l.lastScrollTop=0,l.actionTriggered=!1,l.startY=0,l.currentY=0,l.dragging=!1,l.maxPullDownDistance=0,l.getScrollableTarget=function(){return l.props.scrollableTarget instanceof HTMLElement?l.props.scrollableTarget:typeof l.props.scrollableTarget=="string"?document.getElementById(l.props.scrollableTarget):(l.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},l.onStart=function(d){l.lastScrollTop||(l.dragging=!0,d instanceof MouseEvent?l.startY=d.pageY:d instanceof TouchEvent&&(l.startY=d.touches[0].pageY),l.currentY=l.startY,l._infScroll&&(l._infScroll.style.willChange="transform",l._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},l.onMove=function(d){l.dragging&&(d instanceof MouseEvent?l.currentY=d.pageY:d instanceof TouchEvent&&(l.currentY=d.touches[0].pageY),!(l.currentY<l.startY)&&(l.currentY-l.startY>=Number(l.props.pullDownToRefreshThreshold)&&l.setState({pullToRefreshThresholdBreached:!0}),!(l.currentY-l.startY>l.maxPullDownDistance*1.5)&&l._infScroll&&(l._infScroll.style.overflow="visible",l._infScroll.style.transform="translate3d(0px, "+(l.currentY-l.startY)+"px, 0px)")))},l.onEnd=function(){l.startY=0,l.currentY=0,l.dragging=!1,l.state.pullToRefreshThresholdBreached&&(l.props.refreshFunction&&l.props.refreshFunction(),l.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){l._infScroll&&(l._infScroll.style.overflow="auto",l._infScroll.style.transform="none",l._infScroll.style.willChange="unset")})},l.onScrollListener=function(d){typeof l.props.onScroll=="function"&&setTimeout(function(){return l.props.onScroll&&l.props.onScroll(d)},0);var h=l.props.height||l._scrollableNode?d.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!l.actionTriggered){var f=l.props.inverse?l.isElementAtTop(h,l.props.scrollThreshold):l.isElementAtBottom(h,l.props.scrollThreshold);f&&l.props.hasMore&&(l.actionTriggered=!0,l.setState({showLoader:!0}),l.props.next&&l.props.next()),l.lastScrollTop=h.scrollTop}},l.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:i.dataLength},l.throttledOnScrollListener=Xre(150,l.onScrollListener).bind(l),l.onStart=l.onStart.bind(l),l.onMove=l.onMove.bind(l),l.onEnd=l.onEnd.bind(l),l}return o.prototype.componentDidMount=function(){if(typeof this.props.dataLength>"u")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},o.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},o.prototype.componentDidUpdate=function(i){this.props.dataLength!==i.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},o.getDerivedStateFromProps=function(i,l){var d=i.dataLength!==l.prevDataLength;return d?Qh(Qh({},l),{prevDataLength:i.dataLength}):null},o.prototype.isElementAtTop=function(i,l){l===void 0&&(l=.8);var d=i===document.body||i===document.documentElement?window.screen.availHeight:i.clientHeight,h=hM(l);return h.unit===Hd.Pixel?i.scrollTop<=h.value+d-i.scrollHeight+1:i.scrollTop<=h.value/100+d-i.scrollHeight+1},o.prototype.isElementAtBottom=function(i,l){l===void 0&&(l=.8);var d=i===document.body||i===document.documentElement?window.screen.availHeight:i.clientHeight,h=hM(l);return h.unit===Hd.Pixel?i.scrollTop+d>=i.scrollHeight-h.value:i.scrollTop+d>=h.value/100*i.scrollHeight},o.prototype.render=function(){var i=this,l=Qh({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),d=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),h=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return mo.createElement("div",{style:h,className:"infinite-scroll-component__outerdiv"},mo.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(f){return i._infScroll=f},style:l},this.props.pullDownToRefresh&&mo.createElement("div",{style:{position:"relative"},ref:function(f){return i._pullDown=f}},mo.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!d&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},o}(R.Component);const tie=({message:t})=>T(ne,{container:!0,sx:{display:"flex",width:"100%",marginY:2,justifyContent:t.receiverId==localStorage.getItem("userId")?"start":"end"},children:ue(ne,{item:!0,sx:{display:"flex",width:"50%",marginY:2,borderRadius:"15px",backgroundColor:"#f28395",color:"white",flexWrap:"wrap",padding:2},children:[T(ne,{sx:{width:"100%"},children:t.message}),T(ne,{sx:{width:"100%",color:"#F7F7F7"},children:ic(t.createdAt)})]})}),nie=()=>{const{conversationId:t}=cc(),o=ko(),{startLoadingMessageConversation:i,startClearingMessages:l,startReplyMessage:d}=pA(),[h,f]=R.useState(0);R.useEffect(()=>{i(h,t)},[h]);const{totalPages:b,conversationMessages:m,loadConversationFailedMsg:v,totalElements:C,status:_,successSendMessage:A,failedSendMessage:S}=it(q=>q.messages);R.useEffect(()=>{v!=null&&(l(),o("/"))},[v]);const M=()=>{b>h&&f(h+1)},[I,U]=R.useState(""),N=q=>{U(q.target.value)};let O;for(let q=0;q<m.length;q++){const K=m[q];if(K.receiverId!=localStorage.getItem("userId")){O=K.receiverId;break}}const L=()=>{I!=""?(d(I,O),U(""),f(0),i(h,t)):Tt.fire("Empty Reply","You cannot send empty messages","warning")};return R.useEffect(()=>{S!=null&&(Tt.fire("Message sent failed",S,"success"),l())},[S]),T(zn,{children:m!=null?ue(ne,{container:!0,sx:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[ue(ne,{item:!0,sx:{display:"flex",justifyContent:"center",margin:2,padding:2,width:"100%"},children:[T(Ft,{variant:"outlined",type:"text",placeholder:"Reply",sx:{marginRight:1},onChange:N,value:I}),T(It,{variant:"contained",onClick:L,disabled:_=="searching",children:"Send"})]}),T(ne,{container:!0,sx:{display:"flex",maxWidth:750,marginX:"auto",boxShadow:3,borderRadius:"10px",padding:2,justifyContent:"center"},children:T(eie,{dataLength:m.length,next:M,hasMore:m.length!=C,loader:T(ne,{sx:{display:"flex",justifyContent:"center",marginY:1},children:T(Fp,{})}),endMessage:T(Mt,{}),height:800,children:m.map(q=>T(tie,{message:q},q.id))})})]}):T($o,{})})},oie=()=>ue(dc,{children:[T(xt,{path:"my-conversations",element:T(Zre,{})}),T(xt,{path:"conversation/:conversationId",element:T(nie,{})}),T(xt,{path:"*",element:T(hA,{})})]}),rie=()=>{const{status:t}=it(i=>i.auth),{startCheckingToken:o}=uc();return R.useEffect(()=>{o()},[]),ue(dc,{children:[T(xt,{path:"/*",element:T(aoe,{})}),T(xt,{path:"/vacancy/*",element:T(Vre,{})}),T(xt,{path:"/categories/*",element:T(Yre,{})}),t=="authenticated"?ue(Mt,{children:[T(xt,{path:"/my-profile",element:T(Bre,{})}),T(xt,{path:"/update-information",element:T(Ure,{})}),T(xt,{path:"/application/*",element:T(Gre,{})}),T(xt,{path:"/messages/*",element:T(oie,{})})]}):T(xt,{path:"/auth/*",element:T(Kne,{})})]})},iie=TC({palette:{primary:{main:"#5958af"},secondary:{main:"#9b91fa"},error:{main:jl.A400}}}),sie=({children:t})=>ue(JW,{theme:iie,children:[T(tB,{}),t]}),aie=()=>T(sie,{children:T(rie,{})});m0.createRoot(document.getElementById("root")).render(T(mo.StrictMode,{children:T(SV,{store:xU,children:T(O9,{children:T(aie,{})})})}));