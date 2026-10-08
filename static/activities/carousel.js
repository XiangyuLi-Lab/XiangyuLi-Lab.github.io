var w1=Object.create;var r_=Object.defineProperty;var C1=Object.getOwnPropertyDescriptor;var R1=Object.getOwnPropertyNames;var N1=Object.getPrototypeOf,D1=Object.prototype.hasOwnProperty;var es=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var U1=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of R1(t))!D1.call(e,s)&&s!==n&&r_(e,s,{get:()=>t[s],enumerable:!(i=C1(t,s))||i.enumerable});return e};var Ir=(e,t,n)=>(n=e!=null?w1(N1(e)):{},U1(t||!e||!e.__esModule?r_(n,"default",{value:e,enumerable:!0}):n,e));var g_=es(Ge=>{"use strict";function zd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<jc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function ns(e){return e.length===0?null:e[0]}function tu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>jc(o,n))l<s&&0>jc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>jc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function jc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ge.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(o_=performance,Ge.unstable_now=function(){return o_.now()}):(Od=Date,l_=Od.now(),Ge.unstable_now=function(){return Od.now()-l_});var o_,Od,l_,ws=[],$s=[],L1=1,Mi=null,wn=3,Fd=!1,dl=!1,pl=!1,Hd=!1,h_=typeof setTimeout=="function"?setTimeout:null,f_=typeof clearTimeout=="function"?clearTimeout:null,c_=typeof setImmediate<"u"?setImmediate:null;function $c(e){for(var t=ns($s);t!==null;){if(t.callback===null)tu($s);else if(t.startTime<=e)tu($s),t.sortIndex=t.expirationTime,zd(ws,t);else break;t=ns($s)}}function Vd(e){if(pl=!1,$c(e),!dl)if(ns(ws)!==null)dl=!0,Pr||(Pr=!0,Or());else{var t=ns($s);t!==null&&Gd(Vd,t.startTime-e)}}var Pr=!1,ml=-1,d_=5,p_=-1;function m_(){return Hd?!0:!(Ge.unstable_now()-p_<d_)}function Pd(){if(Hd=!1,Pr){var e=Ge.unstable_now();p_=e;var t=!0;try{t:{dl=!1,pl&&(pl=!1,f_(ml),ml=-1),Fd=!0;var n=wn;try{e:{for($c(e),Mi=ns(ws);Mi!==null&&!(Mi.expirationTime>e&&m_());){var i=Mi.callback;if(typeof i=="function"){Mi.callback=null,wn=Mi.priorityLevel;var s=i(Mi.expirationTime<=e);if(e=Ge.unstable_now(),typeof s=="function"){Mi.callback=s,$c(e),t=!0;break e}Mi===ns(ws)&&tu(ws),$c(e)}else tu(ws);Mi=ns(ws)}if(Mi!==null)t=!0;else{var a=ns($s);a!==null&&Gd(Vd,a.startTime-e),t=!1}}break t}finally{Mi=null,wn=n,Fd=!1}t=void 0}}finally{t?Or():Pr=!1}}}var Or;typeof c_=="function"?Or=function(){c_(Pd)}:typeof MessageChannel<"u"?(Bd=new MessageChannel,u_=Bd.port2,Bd.port1.onmessage=Pd,Or=function(){u_.postMessage(null)}):Or=function(){h_(Pd,0)};var Bd,u_;function Gd(e,t){ml=h_(function(){e(Ge.unstable_now())},t)}Ge.unstable_IdlePriority=5;Ge.unstable_ImmediatePriority=1;Ge.unstable_LowPriority=4;Ge.unstable_NormalPriority=3;Ge.unstable_Profiling=null;Ge.unstable_UserBlockingPriority=2;Ge.unstable_cancelCallback=function(e){e.callback=null};Ge.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):d_=0<e?Math.floor(1e3/e):5};Ge.unstable_getCurrentPriorityLevel=function(){return wn};Ge.unstable_next=function(e){switch(wn){case 1:case 2:case 3:var t=3;break;default:t=wn}var n=wn;wn=t;try{return e()}finally{wn=n}};Ge.unstable_requestPaint=function(){Hd=!0};Ge.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=wn;wn=e;try{return t()}finally{wn=n}};Ge.unstable_scheduleCallback=function(e,t,n){var i=Ge.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:L1++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,zd($s,e),ns(ws)===null&&e===ns($s)&&(pl?(f_(ml),ml=-1):pl=!0,Gd(Vd,n-i))):(e.sortIndex=s,zd(ws,e),dl||Fd||(dl=!0,Pr||(Pr=!0,Or()))),e};Ge.unstable_shouldYield=m_;Ge.unstable_wrapCallback=function(e){var t=wn;return function(){var n=wn;wn=t;try{return e.apply(this,arguments)}finally{wn=n}}}});var v_=es((qN,__)=>{"use strict";__.exports=g_()});var D_=es(Wt=>{"use strict";var Wd=Symbol.for("react.transitional.element"),I1=Symbol.for("react.portal"),O1=Symbol.for("react.fragment"),P1=Symbol.for("react.strict_mode"),B1=Symbol.for("react.profiler"),z1=Symbol.for("react.consumer"),F1=Symbol.for("react.context"),H1=Symbol.for("react.forward_ref"),V1=Symbol.for("react.suspense"),G1=Symbol.for("react.memo"),b_=Symbol.for("react.lazy"),k1=Symbol.for("react.activity"),X1=Symbol.for("react.view_transition"),y_=Symbol.iterator;function W1(e){return e===null||typeof e!="object"?null:(e=y_&&e[y_]||e["@@iterator"],typeof e=="function"?e:null)}var T_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E_=Object.assign,A_={};function zr(e,t,n){this.props=e,this.context=t,this.refs=A_,this.updater=n||T_}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function w_(){}w_.prototype=zr.prototype;function qd(e,t,n){this.props=e,this.context=t,this.refs=A_,this.updater=n||T_}var Yd=qd.prototype=new w_;Yd.constructor=qd;E_(Yd,zr.prototype);Yd.isPureReactComponent=!0;var x_=Array.isArray;function Xd(){}var Oe={H:null,A:null,T:null,S:null},C_=Object.prototype.hasOwnProperty;function Zd(e,t,n){var i=n.ref;return{$$typeof:Wd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function q1(e,t){return Zd(e.type,t,e.props)}function Jd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wd}function Y1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var S_=/\/+/g;function kd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Y1(""+e.key):t.toString(36)}function Z1(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Xd,Xd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Br(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Wd:case I1:r=!0;break;case b_:return r=e._init,Br(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+kd(e,0):i,x_(s)?(n="",r!=null&&(n=r.replace(S_,"$&/")+"/"),Br(s,t,n,"",function(c){return c})):s!=null&&(Jd(s)&&(s=q1(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(S_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(x_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+kd(i,l),r+=Br(i,t,n,a,s);else if(l=W1(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+kd(i,l++),r+=Br(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Br(Z1(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function eu(e,t,n){if(e==null)return e;var i=[],s=0;return Br(e,i,"","",function(a){return t.call(n,a,s++)}),i}function J1(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var M_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function R_(e){var t=Oe.T,n={};n.types=t!==null?t.types:null,Oe.T=n;try{var i=e(),s=Oe.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Xd,M_)}catch(a){M_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Oe.T=t}}function N_(e){var t=Oe.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else R_(N_.bind(null,e))}var K1={map:eu,forEach:function(e,t,n){eu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return eu(e,function(){t++}),t},toArray:function(e){return eu(e,function(t){return t})||[]},only:function(e){if(!Jd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Wt.Activity=k1;Wt.Children=K1;Wt.Component=zr;Wt.Fragment=O1;Wt.Profiler=B1;Wt.PureComponent=qd;Wt.StrictMode=P1;Wt.Suspense=V1;Wt.ViewTransition=X1;Wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Oe;Wt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Oe.H.useMemoCache(e)}};Wt.addTransitionType=N_;Wt.cache=function(e){return function(){return e.apply(null,arguments)}};Wt.cacheSignal=function(){return null};Wt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=E_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!C_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Zd(e.type,s,i)};Wt.createContext=function(e){return e={$$typeof:F1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:z1,_context:e},e};Wt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)C_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Zd(e,a,s)};Wt.createRef=function(){return{current:null}};Wt.forwardRef=function(e){return{$$typeof:H1,render:e}};Wt.isValidElement=Jd;Wt.lazy=function(e){return{$$typeof:b_,_payload:{_status:-1,_result:e},_init:J1}};Wt.memo=function(e,t){return{$$typeof:G1,type:e,compare:t===void 0?null:t}};Wt.startTransition=R_;Wt.unstable_useCacheRefresh=function(){return Oe.H.useCacheRefresh()};Wt.use=function(e){return Oe.H.use(e)};Wt.useActionState=function(e,t,n){return Oe.H.useActionState(e,t,n)};Wt.useCallback=function(e,t){return Oe.H.useCallback(e,t)};Wt.useContext=function(e){return Oe.H.useContext(e)};Wt.useDebugValue=function(){};Wt.useDeferredValue=function(e,t){return Oe.H.useDeferredValue(e,t)};Wt.useEffect=function(e,t){return Oe.H.useEffect(e,t)};Wt.useEffectEvent=function(e){return Oe.H.useEffectEvent(e)};Wt.useId=function(){return Oe.H.useId()};Wt.useImperativeHandle=function(e,t,n){return Oe.H.useImperativeHandle(e,t,n)};Wt.useInsertionEffect=function(e,t){return Oe.H.useInsertionEffect(e,t)};Wt.useLayoutEffect=function(e,t){return Oe.H.useLayoutEffect(e,t)};Wt.useMemo=function(e,t){return Oe.H.useMemo(e,t)};Wt.useOptimistic=function(e,t){return Oe.H.useOptimistic(e,t)};Wt.useReducer=function(e,t,n){return Oe.H.useReducer(e,t,n)};Wt.useRef=function(e){return Oe.H.useRef(e)};Wt.useState=function(e){return Oe.H.useState(e)};Wt.useSyncExternalStore=function(e,t,n){return Oe.H.useSyncExternalStore(e,t,n)};Wt.useTransition=function(){return Oe.H.useTransition()};Wt.version="19.3.0"});var nu=es((ZN,U_)=>{"use strict";U_.exports=D_()});var O_=es(Cn=>{"use strict";var Q1=nu();function I_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ta(){}var Fn={d:{f:ta,r:function(){throw Error(I_(522))},D:ta,C:ta,L:ta,m:ta,X:ta,S:ta,M:ta},p:0,findDOMNode:null},j1=Symbol.for("react.portal"),$1=Symbol.for("react.recoverable"),L_=Symbol.for("react.optimistic_key");function tT(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j1,key:i==null?null:i===L_?L_:""+i,children:e,containerInfo:t,implementation:n}}var gl=Q1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function iu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Fn;Cn.browser=function(e){return{$$typeof:$1,_reason:e}};Cn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(I_(299));return tT(e,t,null,n)};Cn.flushSync=function(e){var t=gl.T,n=Fn.p;try{if(gl.T=null,Fn.p=2,e)return e()}finally{gl.T=t,Fn.p=n,Fn.d.f()}};Cn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Fn.d.C(e,t))};Cn.prefetchDNS=function(e){typeof e=="string"&&Fn.d.D(e)};Cn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=iu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Fn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Fn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Cn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=iu(t.as,t.crossOrigin);Fn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Fn.d.M(e)};Cn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=iu(n,t.crossOrigin);Fn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Cn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=iu(t.as,t.crossOrigin);Fn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Fn.d.m(e)};Cn.requestFormReset=function(e){Fn.d.r(e)};Cn.unstable_batchedUpdates=function(e,t){return e(t)};Cn.useFormState=function(e,t,n){return gl.H.useFormState(e,t,n)};Cn.useFormStatus=function(){return gl.H.useHostTransitionStatus()};Cn.version="19.3.0"});var z_=es((KN,B_)=>{"use strict";function P_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P_)}catch(e){console.error(e)}}P_(),B_.exports=O_()});var TM=es(zh=>{"use strict";var ln=v_(),by=nu(),eT=z_();function et(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ty(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ic(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Ey(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ay(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function F_(e){if(ic(e)!==e)throw Error(et(188))}function nT(e){var t=e.alternate;if(!t){if(t=ic(e),t===null)throw Error(et(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return F_(s),e;if(a===i)return F_(s),t;a=a.sibling}throw Error(et(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(et(189))}}if(n.alternate!==i)throw Error(et(190))}if(n.tag!==3)throw Error(et(188));return n.stateNode.current===n?e:t}function wy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=wy(e),t!==null)return t;e=e.sibling}return null}function jn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&jn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function dr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function H_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Cy(e){var t=[null,null],n=dr(e);return n===null||Ry(t,e,n.child,{foundSelf:!1}),t}function Ry(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Ry(e,t,n.child,i))return!0;n=n.sibling}return!1}function on(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(et(559))}}var Wr=null,wp=null;function iT(e,t,n){return e===n?!0:e===t?(Wr=e,!0):!1}function sT(e,t,n){return e===n?(wp=e,!1):e===t?(wp!==null&&(Wr=e),!0):!1}function V_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Cp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var De=Object.assign,aT=Symbol.for("react.element"),su=Symbol.for("react.transitional.element"),bl=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),Ny=Symbol.for("react.strict_mode"),Rp=Symbol.for("react.profiler"),Dy=Symbol.for("react.consumer"),ls=Symbol.for("react.context"),zm=Symbol.for("react.forward_ref"),Np=Symbol.for("react.suspense"),Dp=Symbol.for("react.suspense_list"),Fm=Symbol.for("react.memo"),sa=Symbol.for("react.lazy"),Up=Symbol.for("react.activity"),rT=Symbol.for("react.legacy_hidden"),oT=Symbol.for("react.memo_cache_sentinel"),Lp=Symbol.for("react.view_transition"),lT=Symbol.for("react.recoverable"),G_=Symbol.iterator;function _l(e){return e===null||typeof e!="object"?null:(e=G_&&e[G_]||e["@@iterator"],typeof e=="function"?e:null)}var cT=Symbol.for("react.client.reference");function Ip(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===cT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qr:return"Fragment";case Rp:return"Profiler";case Ny:return"StrictMode";case Np:return"Suspense";case Dp:return"SuspenseList";case Up:return"Activity";case Lp:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case bl:return"Portal";case ls:return e.displayName||"Context";case Dy:return(e._context.displayName||"Context")+".Consumer";case zm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fm:return t=e.displayName||null,t!==null?t:Ip(e.type)||"Memo";case sa:t=e._payload,e=e._init;try{return Ip(e(t))}catch{}}return null}var Tl=Array.isArray,Ft=by.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e=eT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tr={pending:!1,data:null,method:null,action:null},Op=[],Yr=-1;function ms(e){return{current:e}}function Sn(e){0>Yr||(e.current=Op[Yr],Op[Yr]=null,Yr--)}function ze(e,t){Yr++,Op[Yr]=e.current,e.current=t}var fs=ms(null),Vl=ms(null),da=ms(null),Xu=ms(null);function Wu(e,t){switch(ze(da,t),ze(Vl,e),ze(fs,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ny(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ny(t),e=$S(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Sn(fs),ze(fs,e)}function po(){Sn(fs),Sn(Vl),Sn(da)}function Pp(e){var t=e.memoizedState;t!==null&&(To._currentValue=t.memoizedState,ze(Xu,e)),t=fs.current;var n=$S(t,e.type);t!==n&&(ze(Vl,e),ze(fs,n))}function qu(e){Vl.current===e&&(Sn(fs),Sn(Vl)),Xu.current===e&&(Sn(Xu),To._currentValue=tr)}var Kd,k_;function na(e){if(Kd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Kd=t&&t[1]||"",k_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kd+e+k_}var Qd=!1;function jd(e,t){if(!e||Qd)return"";Qd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(v){var u=v}Reflect.construct(e,[],p)}else{try{p.call()}catch(v){u=v}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(v){u=v}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(v){if(v&&u&&typeof v.stack=="string")return[v.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{Qd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?na(n):""}function uT(e,t){switch(e.tag){case 26:case 27:case 5:return na(e.type);case 16:return na("Lazy");case 13:return e.child!==t&&t!==null?na("Suspense Fallback"):na("Suspense");case 19:return na("SuspenseList");case 0:case 15:return jd(e.type,!1);case 11:return jd(e.type.render,!1);case 1:return jd(e.type,!0);case 31:return na("Activity");case 30:return na("ViewTransition");default:return""}}function X_(e){try{var t="",n=null;do t+=uT(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Bp=Object.prototype.hasOwnProperty,Hm=ln.unstable_scheduleCallback,$d=ln.unstable_cancelCallback,hT=ln.unstable_shouldYield,fT=ln.unstable_requestPaint,li=ln.unstable_now,dT=ln.unstable_getCurrentPriorityLevel,Uy=ln.unstable_ImmediatePriority,Ly=ln.unstable_UserBlockingPriority,Yu=ln.unstable_NormalPriority,pT=ln.unstable_LowPriority,Iy=ln.unstable_IdlePriority,mT=ln.log,gT=ln.unstable_setDisableYieldValue,sc=null,ci=null;function oa(e){if(typeof mT=="function"&&gT(e),ci&&typeof ci.setStrictMode=="function")try{ci.setStrictMode(sc,e)}catch{}}var ui=Math.clz32?Math.clz32:yT,_T=Math.log,vT=Math.LN2;function yT(e){return e>>>=0,e===0?32:31-(_T(e)/vT|0)|0}var au=256,ru=262144,ou=4194304;function Ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Ja(i):(r&=o,r!==0?s=Ja(r):n||(n=o&~e,n!==0&&(s=Ja(n))))):(o=i&~a,o!==0?s=Ja(o):r!==0?s=Ja(r):n||(n=i&~e,n!==0&&(s=Ja(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function ac(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Oy(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ui(n),s=1<<i;t|=e[i],n&=~s}return t}function xT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Py(){var e=ou;return ou<<=1,(ou&62914560)===0&&(ou=4194304),e}function tp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ST(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-ui(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&By(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function By(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ui(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function zy(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ui(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Fy(e,t){var n=t&-t;return n=(n&42)!==0?1:Vm(n),(n&(e.suspendedLanes|t))!==0?0:n}function Vm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hy(){var e=_e.p;return e!==0?e:(e=window.event,e===void 0?32:SM(e.type))}function W_(e,t){var n=_e.p;try{return _e.p=e,t()}finally{_e.p=n}}var Hs=Math.random().toString(36).slice(2),yn="__reactFiber$"+Hs,$n="__reactProps$"+Hs,wo="__reactContainer$"+Hs,q_="__reactEvents$"+Hs,MT="__reactListeners$"+Hs,bT="__reactHandles$"+Hs,Y_="__reactResources$"+Hs,oc="__reactMarker$"+Hs,Zu="__reactLoad$"+Hs;function xh(e){delete e[yn],delete e[$n],delete e[MT],delete e[bT]}function ja(e){var t;if(t=e[yn])return t;for(var n=e.parentNode;n;){if(t=n[wo]||n[yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uy(e);e!==null;){if(n=e[yn])return n;e=uy(e)}return t}e=n,n=e.parentNode}return null}function Co(e){if(e=e[yn]||e[wo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function El(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(et(33))}function io(e){var t=e[Y_];return t||(t=e[Y_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pn(e){e[oc]=!0}function Vy(e){e[Zu]=void 0}var Gy=new Set,ky={};function pr(e,t){mo(e,t),mo(e+"Capture",t)}function mo(e,t){for(ky[e]=t,e=0;e<t.length;e++)Gy.add(t[e])}var TT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Z_={},J_={};function ET(e){return Bp.call(J_,e)?!0:Bp.call(Z_,e)?!1:TT.test(e)?J_[e]=!0:(Z_[e]=!0,!1)}var pe=!1;function K_(){var e=pe;return pe=!1,e}function Eu(e,t,n){if(ET(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function lu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Cs(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function si(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function AT(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zp(e){if(!e._valueTracker){var t=Xy(e)?"checked":"value";e._valueTracker=AT(e,t,""+e[t])}}function Wy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Xy(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var wT=/[\n"\\]/g;function wi(e){return e.replace(wT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+si(t)):e.value!==""+si(t)&&(e.value=""+si(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?ep(e,si(e.value)):ep(e,si(t)):n!=null?ep(e,si(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+si(o):e.removeAttribute("name")}function qy(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){zp(e);return}n=n!=null?""+si(n):"",t=t!=null?""+si(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),zp(e)}function ep(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function so(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+si(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Yy(e,t,n){if(t!=null&&(t=""+si(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+si(n):""}function Zy(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(et(92));if(Tl(i)){if(1<i.length)throw Error(et(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=si(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),zp(e)}function go(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var CT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Q_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||CT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Jy(e,t,n){if(t!=null&&typeof t!="object")throw Error(et(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",pe=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(Q_(e,s,i),pe=!0)}else for(var a in t)t.hasOwnProperty(a)&&Q_(e,a,t[a])}function km(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var RT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),NT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Au(e){return NT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function cs(){}var Hp=null;function Xm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zr=null,ao=null;function j_(e){var t=Co(e);if(t&&(e=t.stateNode)){var n=e[$n]||null;t:switch(e=t.stateNode,t.type){case"input":if(Fp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+wi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[$n]||null;if(!s)throw Error(et(90));Fp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Wy(i)}break t;case"textarea":Yy(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&so(e,!!n.multiple,t,!1)}}}var np=!1;function Ky(e,t,n){if(np)return e(t,n);np=!0;try{var i=e(t);return i}finally{if(np=!1,(Zr!==null||ao!==null)&&(Ih(),Zr&&(t=Zr,e=ao,ao=Zr=null,j_(t),e)))for(t=0;t<e.length;t++)j_(e[t])}}function Gl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[$n]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(et(231,t,typeof n));return n}var Is=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vp=!1;if(Is)try{Fr={},Object.defineProperty(Fr,"passive",{get:function(){Vp=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{Vp=!1}var Fr,la=null,Wm=null,wu=null;function Qy(){if(wu)return wu;var e,t=Wm,n=t.length,i,s="value"in la?la.value:la.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return wu=s.slice(e,1<i?1-i:void 0)}function Cu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cu(){return!0}function $_(){return!1}function kn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?cu:$_,this.isPropagationStopped=$_,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cu)},persist:function(){},isPersistent:cu}),t}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sh=kn(Ca),lc=De({},Ca,{view:0,detail:0}),DT=kn(lc),ip,sp,vl,Mh=De({},lc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vl&&(vl&&e.type==="mousemove"?(ip=e.screenX-vl.screenX,sp=e.screenY-vl.screenY):sp=ip=0,vl=e),ip)},movementY:function(e){return"movementY"in e?e.movementY:sp}}),tv=kn(Mh),UT=De({},Mh,{dataTransfer:0}),LT=kn(UT),IT=De({},lc,{relatedTarget:0}),ap=kn(IT),OT=De({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),PT=kn(OT),BT=De({},Ca,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zT=kn(BT),FT=De({},Ca,{data:0}),ev=kn(FT),HT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=GT[e])?!!t[e]:!1}function qm(){return kT}var XT=De({},lc,{key:function(e){if(e.key){var t=HT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?VT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qm,charCode:function(e){return e.type==="keypress"?Cu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),WT=kn(XT),qT=De({},Mh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nv=kn(qT),YT=De({},Ca,{submitter:0}),ZT=kn(YT),JT=De({},lc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qm}),KT=kn(JT),QT=De({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),jT=kn(QT),$T=De({},Mh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tE=kn($T),eE=De({},Ca,{newState:0,oldState:0,source:0}),nE=kn(eE),iE=[9,13,27,32],Ym=Is&&"CompositionEvent"in window,Cl=null;Is&&"documentMode"in document&&(Cl=document.documentMode);var sE=Is&&"TextEvent"in window&&!Cl,jy=Is&&(!Ym||Cl&&8<Cl&&11>=Cl),iv=" ",sv=!1;function $y(e,t){switch(e){case"keyup":return iE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function aE(e,t){switch(e){case"compositionend":return tx(t);case"keypress":return t.which!==32?null:(sv=!0,iv);case"textInput":return e=t.data,e===iv&&sv?null:e;default:return null}}function rE(e,t){if(Jr)return e==="compositionend"||!Ym&&$y(e,t)?(e=Qy(),wu=Wm=la=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jy&&t.locale!=="ko"?null:t.data;default:return null}}var oE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function av(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!oE[e.type]:t==="textarea"}function ex(e,t,n,i){Zr?ao?ao.push(i):ao=[i]:Zr=i,t=gh(t,"onChange"),0<t.length&&(n=new Sh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Rl=null,kl=null;function lE(e){KS(e,0)}function bh(e){var t=El(e);if(Wy(t))return e}function rv(e,t){if(e==="change")return t}var nx=!1;Is&&(Is?(hu="oninput"in document,hu||(rp=document.createElement("div"),rp.setAttribute("oninput","return;"),hu=typeof rp.oninput=="function"),uu=hu):uu=!1,nx=uu&&(!document.documentMode||9<document.documentMode));var uu,hu,rp;function ov(){Rl&&(Rl.detachEvent("onpropertychange",ix),kl=Rl=null)}function ix(e){if(e.propertyName==="value"&&bh(kl)){var t=[];ex(t,kl,e,Xm(e)),Ky(lE,t)}}function cE(e,t,n){e==="focusin"?(ov(),Rl=t,kl=n,Rl.attachEvent("onpropertychange",ix)):e==="focusout"&&ov()}function uE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bh(kl)}function hE(e,t){if(e==="click")return bh(t)}function fE(e,t){if(e==="input"||e==="change")return bh(t)}function dE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fi=typeof Object.is=="function"?Object.is:dE;function Xl(e,t){if(fi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Bp.call(t,s)||!fi(e[s],t[s]))return!1}return!0}function Gp(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cv(e,t){var n=lv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=lv(n)}}function sx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ax(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gp(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gp(e.document)}return t}function Zm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var pE=Is&&"documentMode"in document&&11>=document.documentMode,Kr=null,kp=null,Nl=null,Xp=!1;function uv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xp||Kr==null||Kr!==Gp(i)||(i=Kr,"selectionStart"in i&&Zm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Nl&&Xl(Nl,i)||(Nl=i,i=gh(kp,"onSelect"),0<i.length&&(t=new Sh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Kr)))}function Ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qr={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},op={},rx={};Is&&(rx=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function mr(e){if(op[e])return op[e];if(!Qr[e])return e;var t=Qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rx)return op[e]=t[n];return e}var ox=mr("animationend"),lx=mr("animationiteration"),cx=mr("animationstart"),mE=mr("transitionrun"),gE=mr("transitionstart"),_E=mr("transitioncancel"),ux=mr("transitionend"),hx=new Map,Wp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wp.push("scrollEnd");function Xi(e,t){hx.set(e,t),pr(t,[e])}var vE=0;function Os(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=ki.identifierPrefix;var n=vE++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function hv(e){if(e==null||typeof e=="string")return e;var t=null,n=fo;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Vs(e,t){return e=hv(e),t=hv(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Ju=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ti=[],jr=0,Jm=0;function Th(){for(var e=jr,t=Jm=jr=0;t<e;){var n=Ti[t];Ti[t++]=null;var i=Ti[t];Ti[t++]=null;var s=Ti[t];Ti[t++]=null;var a=Ti[t];if(Ti[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&fx(n,s,a)}}function Eh(e,t,n,i){Ti[jr++]=e,Ti[jr++]=t,Ti[jr++]=n,Ti[jr++]=i,Jm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Km(e,t,n,i){return Eh(e,t,n,i),Ku(e)}function gr(e,t){return Eh(e,null,null,t),Ku(e)}function fx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-ui(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Ku(e){if(50<Hl)throw Hl=0,zu=null,Error(et(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var $r={};function yE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,t,n,i){return new yE(e,t,n,i)}function Qm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Us(e,t){var n=e.alternate;return n===null?(n=Kn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function dx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ru(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")Qm(i)&&(r=1);else if(typeof i=="string")r=WA(e,n,fs.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Up:return e=Kn(31,n,t,s),e.elementType=Up,e.lanes=a,e;case qr:return er(n.children,s,a,t);case Ny:r=8,s|=24;break;case Rp:return e=Kn(12,n,t,s|2),e.elementType=Rp,e.lanes=a,e;case Np:return e=Kn(13,n,t,s),e.elementType=Np,e.lanes=a,e;case Dp:return e=Kn(19,n,t,s),e.elementType=Dp,e.lanes=a,e;case rT:case Lp:return e=s|32,e=Kn(30,n,t,e),e.elementType=Lp,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ls:r=10;break t;case Dy:r=9;break t;case zm:r=11;break t;case Fm:r=14;break t;case sa:r=16,i=null;break t}r=29,n=Error(et(130,e===null?"null":typeof e,"")),i=null}return t=Kn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function er(e,t,n,i){return e=Kn(7,e,i,t),e.lanes=n,e}function lp(e,t,n){return e=Kn(6,e,null,t),e.lanes=n,e}function px(e){var t=Kn(18,null,null,0);return t.stateNode=e,t}function cp(e,t,n){return t=Kn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var fv=new WeakMap;function Ci(e,t){if(typeof e=="object"&&e!==null){var n=fv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:X_(t)},fv.set(e,t),t)}return{value:e,source:t,stack:X_(t)}}var to=[],eo=0,Qu=null,Wl=0,Ei=[],Ai=0,ba=null,us=1,hs="";function Ns(e,t){to[eo++]=Wl,to[eo++]=Qu,Qu=e,Wl=t}function mx(e,t,n){Ei[Ai++]=us,Ei[Ai++]=hs,Ei[Ai++]=ba,ba=e;var i=us;e=hs;var s=32-ui(i)-1;i&=~(1<<s),n+=1;var a=32-ui(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,us=1<<32-ui(t)+s|n<<s|i,hs=a+e}else us=1<<a|n<<s|i,hs=e}function Ah(e){e.return!==null&&(Ns(e,1),mx(e,1,0))}function jm(e){for(;e===Qu;)Qu=to[--eo],to[eo]=null,Wl=to[--eo],to[eo]=null;for(;e===ba;)ba=Ei[--Ai],Ei[Ai]=null,hs=Ei[--Ai],Ei[Ai]=null,us=Ei[--Ai],Ei[Ai]=null}function gx(e,t){Ei[Ai++]=us,Ei[Ai++]=hs,Ei[Ai++]=ba,us=t.id,hs=t.overflow,ba=e}var mn=null,Be=null,ee=!1,pa=null,Ri=!1,qp=Error(et(519));function Ta(e){var t=Error(et(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ql(Ci(t,e)),qp}function dv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[yn]=e,t[$n]=i,n){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(n=0;n<Kl.length;n++)ie(Kl[n],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),qy(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),Zy(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||jS(t.textContent,n)?(i.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),i.onScroll!=null&&ie("scroll",t),i.onScrollEnd!=null&&ie("scrollend",t),i.onClick!=null&&(t.onclick=cs),t=!0):t=!1,t||Ta(e,!0)}function ju(e){for(mn=e.return;mn;)switch(mn.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:mn=mn.return}}function Hr(e){if(e!==mn)return!1;if(!ee)return ju(e),ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Nm(e.type,e.memoizedProps)),n=!n),n&&Be&&Ta(e),ju(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));Be=cy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));Be=cy(e)}else t===27?(t=Be,Ra(e.type)?(e=Im,Im=null,Be=e):Be=t):Be=mn?Ni(e.stateNode.nextSibling):null;return!0}function ar(){Be=mn=null,ee=!1}function up(){var e=pa;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),pa=null),e}function ql(e){pa===null?pa=[e]:pa.push(e)}var Yp=ms(null),_r=null,Ds=null;function ca(e,t,n){ze(Yp,t._currentValue),t._currentValue=n}function Ls(e){e._currentValue=Yp.current,Sn(Yp)}function Nu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Zp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Nu(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(et(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Nu(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Nu(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function rr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(et(387));if(r=r.memoizedProps,r!==null){var o=s.type;fi(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Xu.current){if(r=s.alternate,r===null)throw Error(et(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}s=s.return}return e!==null&&Zp(t,e,n,i),t.flags|=262144,e!==null}function $u(e){for(e=e.firstContext;e!==null;){if(!fi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function or(e){_r=e,Ds=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xn(e){return _x(_r,e)}function fu(e,t){return _r===null&&or(e),_x(e,t)}function _x(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ds===null){if(e===null)throw Error(et(308));Ds=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ds=Ds.next=t;return n}var xE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},SE=ln.unstable_scheduleCallback,ME=ln.unstable_NormalPriority,tn={$$typeof:ls,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $m(){return{controller:new xE,data:new Map,refCount:0}}function cc(e){e.refCount--,e.refCount===0&&SE(ME,function(){e.controller.abort()})}function pv(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Al=null;function bE(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Dl=null,Jp=0,lr=0,ro=null;function TE(e,t){if(Dl===null){var n=Dl=[];Jp=0,lr=wg(),ro={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Jp++,t.then(mv,mv),t}function mv(){if(--Jp===0&&(Al=null,Dl!==null)){ro!==null&&(ro.status="fulfilled");var e=Dl;Dl=null,lr=0,ro=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function EE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var gv=Ft.S;Ft.S=function(e,t){if(OS=li(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&TE(e,t),Al!==null)for(var n=So;n!==null;)pv(n,Al),n=n.next;if(n=e.types,n!==null){for(var i=So;i!==null;)pv(i,n),i=i.next;if(lr!==0){i=Al,i===null&&(i=Al=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}gv!==null&&gv(e,t)};var nr=ms(null);function tg(){var e=nr.current;return e!==null?e:Ne.pooledCache}function Du(e,t){t===null?ze(nr,nr.current):ze(nr,t.pool)}function vx(){var e=tg();return e===null?null:{parent:tn._currentValue,pool:e}}var Ro=Error(et(460)),eg=Error(et(474)),wh=Error(et(542)),th={then:function(){}};function _v(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cs,cs),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,yv(e),e===void 0&&!("reason"in t)?Error(et(600)):e;default:if(typeof t.status=="string")t.then(cs,cs);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(et(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,yv(e),e}throw ir=t,Ro}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ir=n,Ro):n}}var ir=null;function vv(){if(ir===null)throw Error(et(459));var e=ir;return ir=null,e}function yv(e){if(e===Ro||e===wh)throw Error(et(483))}var oo=null,Yl=0;function du(e){var t=Yl;return Yl+=1,oo===null&&(oo=[]),yx(oo,e,t)}function ea(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function pu(e,t){throw t.$$typeof===aT?Error(et(525)):(e=Object.prototype.toString.call(t),Error(et(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xx(e){function t(h,g){if(e){var M=h.deletions;M===null?(h.deletions=[g],h.flags|=16):M.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function i(h){for(var g=new Map;h!==null;)h.key===null?g.set(h.index,h):g.set(h.key,h),h=h.sibling;return g}function s(h,g){return h=Us(h,g),h.index=0,h.sibling=null,h}function a(h,g,M){return h.index=M,e?(M=h.alternate,M!==null?(M=M.index,M<g?(h.flags|=2,g):M):(h.flags|=134217730,g)):(h.flags|=1048576,g)}function r(h){return e&&h.alternate===null&&(h.flags|=134217730),h}function o(h,g,M,y){return g===null||g.tag!==6?(g=lp(M,h.mode,y),g.return=h,g):(g=s(g,M),g.return=h,g)}function l(h,g,M,y){var T=M.type;return T===qr?(h=f(h,g,M.props.children,y,M.key),ea(h,M),h):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sa&&Ka(T)===g.type)?(g=s(g,M.props),ea(g,M),g.return=h,g):(g=Ru(M.type,M.key,M.props,null,h.mode,y),ea(g,M),g.return=h,g)}function c(h,g,M,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==M.containerInfo||g.stateNode.implementation!==M.implementation?(g=cp(M,h.mode,y),g.return=h,g):(g=s(g,M.children||[]),g.return=h,g)}function f(h,g,M,y,T){return g===null||g.tag!==7?(g=er(M,h.mode,y,T),g.return=h,g):(g=s(g,M),g.return=h,g)}function p(h,g,M){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=lp(""+g,h.mode,M),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case su:return M=Ru(g.type,g.key,g.props,null,h.mode,M),ea(M,g),M.return=h,M;case bl:return g=cp(g,h.mode,M),g.return=h,g;case sa:return g=Ka(g),p(h,g,M)}if(Tl(g)||_l(g))return g=er(g,h.mode,M,null),g.return=h,g;if(typeof g.then=="function")return p(h,du(g),M);if(g.$$typeof===ls)return p(h,fu(h,g),M);pu(h,g)}return null}function u(h,g,M,y){var T=g!==null?g.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return T!==null?null:o(h,g,""+M,y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case su:return M.key===T?l(h,g,M,y):null;case bl:return M.key===T?c(h,g,M,y):null;case sa:return M=Ka(M),u(h,g,M,y)}if(Tl(M)||_l(M))return T!==null?null:f(h,g,M,y,null);if(typeof M.then=="function")return u(h,g,du(M),y);if(M.$$typeof===ls)return u(h,g,fu(h,M),y);pu(h,M)}return null}function d(h,g,M,y,T){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(M)||null,o(g,h,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case su:return h=h.get(y.key===null?M:y.key)||null,l(g,h,y,T);case bl:return h=h.get(y.key===null?M:y.key)||null,c(g,h,y,T);case sa:return y=Ka(y),d(h,g,M,y,T)}if(Tl(y)||_l(y))return h=h.get(M)||null,f(g,h,y,T,null);if(typeof y.then=="function")return d(h,g,M,du(y),T);if(y.$$typeof===ls)return d(h,g,M,fu(g,y),T);pu(g,y)}return null}function v(h,g,M,y){for(var T=null,E=null,A=g,x=g=0,w=null;A!==null&&x<M.length;x++){A.index>x?(w=A,A=null):w=A.sibling;var R=u(h,A,M[x],y);if(R===null){A===null&&(A=w);break}e&&A&&R.alternate===null&&t(h,A),g=a(R,g,x),E===null?T=R:E.sibling=R,E=R,A=w}if(x===M.length)return n(h,A),ee&&Ns(h,x),T;if(A===null){for(;x<M.length;x++)A=p(h,M[x],y),A!==null&&(g=a(A,g,x),E===null?T=A:E.sibling=A,E=A);return ee&&Ns(h,x),T}for(A=i(A);x<M.length;x++)w=d(A,h,x,M[x],y),w!==null&&(e&&(R=w.alternate,R!==null&&A.delete(R.key===null?x:R.key)),g=a(w,g,x),E===null?T=w:E.sibling=w,E=w);return e&&A.forEach(function(I){return t(h,I)}),ee&&Ns(h,x),T}function b(h,g,M,y){if(M==null)throw Error(et(151));for(var T=null,E=null,A=g,x=g=0,w=null,R=M.next();A!==null&&!R.done;x++,R=M.next()){A.index>x?(w=A,A=null):w=A.sibling;var I=u(h,A,R.value,y);if(I===null){A===null&&(A=w);break}e&&A&&I.alternate===null&&t(h,A),g=a(I,g,x),E===null?T=I:E.sibling=I,E=I,A=w}if(R.done)return n(h,A),ee&&Ns(h,x),T;if(A===null){for(;!R.done;x++,R=M.next())R=p(h,R.value,y),R!==null&&(g=a(R,g,x),E===null?T=R:E.sibling=R,E=R);return ee&&Ns(h,x),T}for(A=i(A);!R.done;x++,R=M.next())R=d(A,h,x,R.value,y),R!==null&&(e&&(w=R.alternate,w!==null&&A.delete(w.key===null?x:w.key)),g=a(R,g,x),E===null?T=R:E.sibling=R,E=R);return e&&A.forEach(function(H){return t(h,H)}),ee&&Ns(h,x),T}function m(h,g,M,y){if(typeof M=="object"&&M!==null&&M.type===qr&&M.key===null&&M.props.ref===void 0&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case su:t:{for(var T=M.key;g!==null;){if(g.key===T){if(T=M.type,T===qr){if(g.tag===7){n(h,g.sibling),y=s(g,M.props.children),ea(y,M),y.return=h,h=y;break t}}else if(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sa&&Ka(T)===g.type){n(h,g.sibling),y=s(g,M.props),ea(y,M),y.return=h,h=y;break t}n(h,g);break}else t(h,g);g=g.sibling}M.type===qr?(y=er(M.props.children,h.mode,y,M.key),ea(y,M),y.return=h,h=y):(y=Ru(M.type,M.key,M.props,null,h.mode,y),ea(y,M),y.return=h,h=y)}return r(h);case bl:t:{for(T=M.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===M.containerInfo&&g.stateNode.implementation===M.implementation){n(h,g.sibling),y=s(g,M.children||[]),y.return=h,h=y;break t}else{n(h,g);break}else t(h,g);g=g.sibling}y=cp(M,h.mode,y),y.return=h,h=y}return r(h);case sa:return M=Ka(M),m(h,g,M,y)}if(Tl(M))return v(h,g,M,y);if(_l(M)){if(T=_l(M),typeof T!="function")throw Error(et(150));return M=T.call(M),b(h,g,M,y)}if(typeof M.then=="function")return m(h,g,du(M),y);if(M.$$typeof===ls)return m(h,g,fu(h,M),y);pu(h,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,g!==null&&g.tag===6?(n(h,g.sibling),y=s(g,M),y.return=h,h=y):(n(h,g),y=lp(M,h.mode,y),y.return=h,h=y),r(h)):n(h,g)}return function(h,g,M,y){try{Yl=0;var T=m(h,g,M,y);return oo=null,T}catch(A){if(A===Ro||A===wh)throw A;var E=Kn(29,A,null,h.mode);return E.lanes=y,E.return=h,E}}}var cr=xx(!0),Sx=xx(!1),aa=!1;function ng(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ge&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Ku(e),fx(e,null,n),t}return Eh(e,i,t,n),Ku(e)}function Ul(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,zy(e,n)}}function hp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qp=!1;function Ll(){if(Qp){var e=ro;if(e!==null)throw e}}function Il(e,t,n,i){Qp=!1;var s=e.updateQueue;aa=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(ae&u)===u:(i&u)===u){u!==0&&u===lr&&(Qp=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,b=o;u=t;var m=n;switch(b.tag){case 1:if(v=b.payload,typeof v=="function"){p=v.call(m,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,u=typeof v=="function"?v.call(m,p,u):v,u==null)break t;p=De({},p,u);break t;case 2:aa=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),wa|=r,e.lanes=r,e.memoizedState=p}}function Mx(e,t){if(typeof e!="function")throw Error(et(191,e));e.call(t)}function bx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Mx(n[e],t)}var Ea=ms(null),eh=ms(0);function xv(e,t){e=Fs,ze(eh,e),ze(Ea,t),Fs=e|t.baseLanes}function jp(){ze(eh,Fs),ze(Ea,Ea.current)}function ig(){Fs=eh.current,Sn(Ea),Sn(eh)}var Tn=ms(null),Rn=null;function _a(e){var t=e.alternate;ze(Mn,Mn.current&1),ze(Tn,e),Rn===null&&(t===null||Ea.current!==null||t.memoizedState!==null)&&(Rn=e)}function $p(e){ze(Mn,Mn.current),ze(Tn,e),Rn===null&&(Rn=e)}function Tx(e){e.tag===22?(ze(Mn,Mn.current),ze(Tn,e),Rn===null&&(Rn=e)):va()}function va(){ze(Mn,Mn.current),ze(Tn,Tn.current)}function ai(e){Sn(Tn),Rn===e&&(Rn=null),Sn(Mn)}var Mn=ms(0);function Zl(e,t){ze(Tn,Tn.current),ze(Mn,t)}function sg(e){Sn(Mn),Sn(Tn),Rn===e&&(Rn=null)}function nh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Lm(n)||Dg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ps=0,Kt=null,Ce=null,$e=null,ih=!1,lo=!1,ur=!1,sh=0,Jl=0,co=null,AE=0;function Ye(){throw Error(et(321))}function ag(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!fi(e[n],t[n]))return!1;return!0}function rg(e,t,n,i,s,a){return Ps=a,Kt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ft.H=e===null||e.memoizedState===null?eS:nS,ur=!1,a=n(i,s),ur=!1,lo&&(a=Ax(t,n,i,s)),Ex(e),a}function Ex(e){Ft.H=ah;var t=Ce!==null&&Ce.next!==null;if(Ps=0,$e=Ce=Kt=null,ih=!1,Jl=0,co=null,t)throw Error(et(300));e===null||en||(e=e.dependencies,e!==null&&$u(e)&&(en=!0))}function Ax(e,t,n,i){Kt=e;var s=0;do{if(lo&&(co=null),Jl=0,lo=!1,25<=s)throw Error(et(301));if(s+=1,$e=Ce=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ft.H=IE,a=t(n,i)}while(lo);return a}function wE(){var e=Ft.H,t=e.useState()[0];return t=typeof t.then=="function"?uc(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(Kt.flags|=1024),t}function og(){var e=sh!==0;return sh=0,e}function lg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function cg(e){if(ih){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ih=!1}Ps=0,$e=Ce=Kt=null,lo=!1,Jl=sh=0,co=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Kt.memoizedState=$e=e:$e=$e.next=e,$e}function Qe(){if(Ce===null){var e=Kt.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=$e===null?Kt.memoizedState:$e.next;if(t!==null)$e=t,Ce=e;else{if(e===null)throw Kt.alternate===null?Error(et(467)):Error(et(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},$e===null?Kt.memoizedState=$e=e:$e=$e.next=e}return $e}function Ch(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uc(e){var t=Jl;return Jl+=1,co===null&&(co=[]),e=yx(co,e,t),t=Kt,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,Ft.H=t===null||t.memoizedState===null?eS:nS),e}function Rh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uc(e);if(e.$$typeof===lT)return;if(e.$$typeof===ls)return xn(e)}throw Error(et(438,String(e)))}function ug(e){var t=null,n=Kt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Kt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ch(),Kt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=oT;return t.index++,n}function Bs(e,t){return typeof t=="function"?t(e):t}function Uu(e){var t=Qe();return hg(t,Ce,e)}function hg(e,t,n){var i=e.queue;if(i===null)throw Error(et(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(ae&p)===p:(Ps&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===lr&&(f=!0);else if((Ps&u)===u){c=c.next,u===lr&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Kt.lanes|=u,wa|=u;p=c.action,ur&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Kt.lanes|=p,wa|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!fi(a,e.memoizedState)&&(en=!0,f&&(n=ro,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function fp(e){var t=Qe(),n=t.queue;if(n===null)throw Error(et(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);fi(a,t.memoizedState)||(en=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function wx(e,t,n){var i=Kt,s=Qe(),a=ee;if(a){if(n===void 0)throw Error(et(407));n=n()}else n=t();var r=!fi((Ce||s).memoizedState,n);if(r&&(s.memoizedState=n,en=!0),s=s.queue,fg(Nx.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||$e!==null&&($e.memoizedState.tag&1)!==0,_o(e?9:8,{destroy:void 0},Rx.bind(null,i,s,n,t),null),e){if(i.flags|=2048,Ne===null)throw Error(et(349));a||(Ps&127)!==0||Cx(i,t,n)}return n}function Cx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Kt.updateQueue,t===null?(t=Ch(),Kt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rx(e,t,n,i){t.value=n,t.getSnapshot=i,Dx(t)&&Ux(e)}function Nx(e,t,n){return n(function(){Dx(t)&&Ux(e)})}function Dx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fi(e,n)}catch{return!0}}function Ux(e){var t=gr(e,2);t!==null&&Qn(t,e,2)}function tm(e){var t=Gn();if(typeof e=="function"){var n=e;if(e=n(),ur){oa(!0);try{n()}finally{oa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:e},t}function Lx(e,t,n,i){return e.baseState=n,hg(e,Ce,typeof i=="function"?i:Bs)}function CE(e,t,n,i,s){if(Dh(e))throw Error(et(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ft.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Ix(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Ix(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ft.T,r={};r.types=a!==null?a.types:null,Ft.T=r;try{var o=n(s,i),l=Ft.S;l!==null&&l(r,o),Sv(e,t,o)}catch(c){em(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ft.T=a}}else try{a=n(s,i),Sv(e,t,a)}catch(c){em(e,t,c)}}function Sv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Mv(e,t,i)},function(i){return em(e,t,i)}):Mv(e,t,n)}function Mv(e,t,n){t.status="fulfilled",t.value=n,Ox(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ix(e,n)))}function em(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Ox(t),t=t.next;while(t!==i)}e.action=null}function Ox(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Px(e,t){return t}function bv(e,t){if(ee){var n=Ne.formState;if(n!==null){t:{var i=Kt;if(ee){if(Be){e:{for(var s=Be,a=Ri;s.nodeType!==8;){if(!a){s=null;break e}if(s=Ni(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Be=Ni(s.nextSibling),i=s.data==="F!";break t}}Ta(i)}i=!1}i&&(t=n[0])}}return n=Gn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Px,lastRenderedState:t},n.queue=i,n=jx.bind(null,Kt,i),i.dispatch=n,i=tm(!1),a=gg.bind(null,Kt,!1,i.queue),i=Gn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=CE.bind(null,Kt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Tv(e){var t=Qe();return Bx(t,Ce,e)}function Bx(e,t,n){if(t=hg(e,t,Px)[0],e=Uu(Bs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=uc(t)}catch(r){throw r===Ro?wh:r}else i=t;t=Qe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Kt.flags|=2048,_o(9,{destroy:void 0},RE.bind(null,s,n),null)),[i,a,e]}function RE(e,t){e.action=t}function Ev(e){var t=Qe(),n=Ce;if(n!==null)return Bx(t,n,e);Qe(),t=t.memoizedState,n=Qe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function _o(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Kt.updateQueue,t===null&&(t=Ch(),Kt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function zx(){return Qe().memoizedState}function Lu(e,t,n,i){var s=Gn();Kt.flags|=e,s.memoizedState=_o(1|t,{destroy:void 0},n,i===void 0?null:i)}function Nh(e,t,n,i){var s=Qe();i=i===void 0?null:i;var a=s.memoizedState.inst;Ce!==null&&i!==null&&ag(i,Ce.memoizedState.deps)?s.memoizedState=_o(t,a,n,i):(Kt.flags|=e,s.memoizedState=_o(1|t,a,n,i))}function Av(e,t){Lu(8390656,8,e,t)}function fg(e,t){Nh(2048,8,e,t)}function NE(e){Kt.flags|=4;var t=Kt.updateQueue;if(t===null)t=Ch(),Kt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Fx(e){var t=Qe().memoizedState;return NE({ref:t,nextImpl:e}),function(){if((ge&2)!==0)throw Error(et(440));return t.impl.apply(void 0,arguments)}}function Hx(e,t){return Nh(4,2,e,t)}function Vx(e,t){return Nh(4,4,e,t)}function Gx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kx(e,t,n){n=n!=null?n.concat([e]):null,Nh(4,4,Gx.bind(null,t,e),n)}function dg(){}function Xx(e,t){var n=Qe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ag(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Wx(e,t){var n=Qe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ag(t,i[1]))return i[0];if(i=e(),ur){oa(!0);try{e()}finally{oa(!1)}}return n.memoizedState=[i,t],i}function pg(e,t,n){return n===void 0||(Ps&1073741824)!==0&&(ae&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=BS(),Kt.lanes|=e,wa|=e,n)}function qx(e,t,n,i){return fi(n,t)?n:Ea.current!==null?(e=pg(e,n,i),fi(e,t)||(en=!0),e):(Ps&106)===0||(Ps&1073741824)!==0&&(ae&261930)===0?(en=!0,e.memoizedState=n):(e=BS(),Kt.lanes|=e,wa|=e,t)}function Yx(e,t,n,i,s){var a=_e.p;_e.p=a!==0&&8>a?a:8;var r=Ft.T,o={};o.types=r!==null?r.types:null,Ft.T=o,gg(e,!1,t,n);try{var l=s(),c=Ft.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=EE(l,i);Ol(e,t,f,hi(e))}else Ol(e,t,i,hi(e))}catch(p){Ol(e,t,{then:function(){},status:"rejected",reason:p},hi())}finally{_e.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ft.T=r}}function DE(){}function nm(e,t,n,i){if(e.tag!==5)throw Error(et(476));var s=Zx(e).queue;Yx(e,s,t,tr,n===null?DE:function(){return Jx(e),n(i)})}function Zx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:tr,baseState:tr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:tr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Jx(e){var t=Zx(e);t.next===null&&(t=e.alternate.memoizedState),Ol(e,t.next.queue,{},hi())}function mg(){return xn(To)}function Kx(){return Qe().memoizedState}function Qx(){return Qe().memoizedState}function UE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=hi();e=ma(n);var i=ga(t,e,n);i!==null&&(Qn(i,t,n),Ul(i,t,n)),t={cache:$m()},e.payload=t;return}t=t.return}}function LE(e,t,n){var i=hi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Dh(e)?$x(t,n):(n=Km(e,t,n,i),n!==null&&(Qn(n,e,i),tS(n,t,i)))}function jx(e,t,n){var i=hi();Ol(e,t,n,i)}function Ol(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dh(e))$x(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,fi(o,r))return Eh(e,t,s,0),Ne===null&&Th(),!1}catch{}if(n=Km(e,t,s,i),n!==null)return Qn(n,e,i),tS(n,t,i),!0}return!1}function gg(e,t,n,i){if(i={lane:2,revertLane:wg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Dh(e)){if(t)throw Error(et(479))}else t=Km(e,n,i,2),t!==null&&Qn(t,e,2)}function Dh(e){var t=e.alternate;return e===Kt||t!==null&&t===Kt}function $x(e,t){lo=ih=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,zy(e,n)}}var ah={readContext:xn,use:Rh,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye,useEffectEvent:Ye},eS={readContext:xn,use:Rh,useCallback:function(e,t){return Gn().memoizedState=[e,t===void 0?null:t],e},useContext:xn,useEffect:Av,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Lu(4194308,4,Gx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lu(4194308,4,e,t)},useInsertionEffect:function(e,t){Lu(4,2,e,t)},useMemo:function(e,t){var n=Gn();t=t===void 0?null:t;var i=e();if(ur){oa(!0);try{e()}finally{oa(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Gn();if(n!==void 0){var s=n(t);if(ur){oa(!0);try{n(t)}finally{oa(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=LE.bind(null,Kt,e),[i.memoizedState,e]},useRef:function(e){var t=Gn();return e={current:e},t.memoizedState=e},useState:function(e){e=tm(e);var t=e.queue,n=jx.bind(null,Kt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:dg,useDeferredValue:function(e,t){var n=Gn();return pg(n,e,t)},useTransition:function(){var e=tm(!1);return e=Yx.bind(null,Kt,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Kt,s=Gn();if(ee){if(n===void 0)throw Error(et(407));n=n()}else{if(n=t(),Ne===null)throw Error(et(349));(ae&127)!==0||Cx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Av(Nx.bind(null,i,a,e),[e]),i.flags|=2048,_o(9,{destroy:void 0},Rx.bind(null,i,a,n,t),null),n},useId:function(){var e=Gn(),t=Ne.identifierPrefix;if(ee){var n=hs,i=us;n=(i&~(1<<32-ui(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=sh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=AE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:mg,useFormState:bv,useActionState:bv,useOptimistic:function(e){var t=Gn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=gg.bind(null,Kt,!0,n),n.dispatch=t,[e,t]},useMemoCache:ug,useCacheRefresh:function(){return Gn().memoizedState=UE.bind(null,Kt)},useEffectEvent:function(e){var t=Gn(),n={impl:e};return t.memoizedState=n,function(){if((ge&2)!==0)throw Error(et(440));return n.impl.apply(void 0,arguments)}}},nS={readContext:xn,use:Rh,useCallback:Xx,useContext:xn,useEffect:fg,useImperativeHandle:kx,useInsertionEffect:Hx,useLayoutEffect:Vx,useMemo:Wx,useReducer:Uu,useRef:zx,useState:function(){return Uu(Bs)},useDebugValue:dg,useDeferredValue:function(e,t){var n=Qe();return qx(n,Ce.memoizedState,e,t)},useTransition:function(){var e=Uu(Bs)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:uc(e),t]},useSyncExternalStore:wx,useId:Kx,useHostTransitionStatus:mg,useFormState:Tv,useActionState:Tv,useOptimistic:function(e,t){var n=Qe();return Lx(n,Ce,e,t)},useMemoCache:ug,useCacheRefresh:Qx,useEffectEvent:Fx},IE={readContext:xn,use:Rh,useCallback:Xx,useContext:xn,useEffect:fg,useImperativeHandle:kx,useInsertionEffect:Hx,useLayoutEffect:Vx,useMemo:Wx,useReducer:fp,useRef:zx,useState:function(){return fp(Bs)},useDebugValue:dg,useDeferredValue:function(e,t){var n=Qe();return Ce===null?pg(n,e,t):qx(n,Ce.memoizedState,e,t)},useTransition:function(){var e=fp(Bs)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:uc(e),t]},useSyncExternalStore:wx,useId:Kx,useHostTransitionStatus:mg,useFormState:Ev,useActionState:Ev,useOptimistic:function(e,t){var n=Qe();return Ce!==null?Lx(n,Ce,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ug,useCacheRefresh:Qx,useEffectEvent:Fx};function dp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:De({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var im={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=hi(),s=ma(i);s.payload=t,n!=null&&(s.callback=n),t=ga(e,s,i),t!==null&&(Qn(t,e,i),Ul(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=hi(),s=ma(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ga(e,s,i),t!==null&&(Qn(t,e,i),Ul(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=hi(),i=ma(n);i.tag=2,t!=null&&(i.callback=t),t=ga(e,i,n),t!==null&&(Qn(t,e,n),Ul(t,e,n))}};function wv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Xl(n,i)||!Xl(s,a):!0}function Cv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&im.enqueueReplaceState(t,t.state,null)}function hr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=De({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function iS(e){Ju(e)}function sS(e){console.error(e)}function aS(e){Ju(e)}function rh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Rv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function sm(e,t,n){return n=ma(n),n.tag=3,n.payload={element:null},n.callback=function(){rh(e,t)},n}function rS(e){return e=ma(e),e.tag=3,e}function oS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){Rv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Rv(t,n,i),typeof s!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function OE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&rr(t,n,s,!0),n=Tn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Rn===null?ph():n.alternate===null&&Ze===0&&(Ze=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===th?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),xp(e,i,s)),!1;case 22:return n.flags|=65536,i===th?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),xp(e,i,s)),!1}throw Error(et(435,n.tag))}return xp(e,i,s),ph(),!1}if(ee)return t=Tn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==qp&&(e=Error(et(422),{cause:i}),ql(Ci(e,n)))):(i!==qp&&(t=Error(et(423),{cause:i}),ql(Ci(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Ci(i,n),s=sm(e.stateNode,i,s),hp(e,s),Ze!==4&&(Ze=2)),!1;var a=Error(et(520),{cause:i});if(a=Ci(a,n),Fl===null?Fl=[a]:Fl.push(a),Ze!==4&&(Ze=2),t===null)return!0;i=Ci(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=sm(n.stateNode,i,e),hp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ya===null||!ya.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=rS(s),oS(s,e,n,i),hp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var _g=Error(et(461)),en=!1;function rn(e,t,n,i){t.child=e===null?Sx(t,null,n,i):cr(t,e.child,n,i)}function Nv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return or(t),i=rg(e,t,n,r,a,s),o=og(),e!==null&&!en?(lg(e,t,s),zs(e,t,s)):(ee&&o&&Ah(t),t.flags|=1,rn(e,t,i,s),t.child)}function Dv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Qm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lS(e,t,a,i,s)):(e=Ru(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!yg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Xl,n(r,i)&&e.ref===t.ref)return zs(e,t,s)}return t.flags|=1,e=Us(a,i),e.ref=t.ref,e.return=t,t.child=e}function lS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Xl(a,i)&&e.ref===t.ref)if(en=!1,t.pendingProps=i=a,yg(e,s))(e.flags&131072)!==0&&(en=!0);else return t.lanes=e.lanes,zs(e,t,s)}return am(e,t,n,i,s)}function cS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Uv(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Du(t,a!==null?a.cachePool:null),a!==null?xv(t,a):jp(),Tx(t);else return i=t.lanes=536870912,Uv(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Du(t,a.cachePool),xv(t,a),va(),t.memoizedState=null):(e!==null&&Du(t,null),jp(),va());return rn(e,t,s,n),t.child}function Pl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uv(e,t,n,i,s){var a=tg();return a=a===null?null:{parent:tn._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Du(t,null),jp(),Tx(t),e!==null&&rr(e,t,i,!0),t.childLanes=s,null}function Iu(e,t){return t=Uh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Lv(e,t,n){return cr(t,e.child,null,n),e=Iu(t,t.pendingProps),e.flags|=2,ai(t),t.memoizedState=null,e}function PE(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(i.mode==="hidden")return e=Iu(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Pl(null,e);if($p(t),(e=Be)?(e=cM(e,Ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ba!==null?{id:us,overflow:hs}:null,retryLane:536870912,hydrationErrors:null},n=px(e),n.return=t,t.child=n,mn=t,Be=null)):e=null,e===null)throw Ta(t);return t.lanes=536870912,null}return Iu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if($p(t),s)if(t.flags&256)t.flags&=-257,t=Lv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(et(558));else if(en||rr(e,t,n,!1),s=(n&e.childLanes)!==0,en||s){if(Ea.current===null){if(i=Ne,i!==null&&(r=Fy(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,gr(e,r),Qn(i,e,r),_g;ph()}t=Lv(e,t,n)}else e=a.treeContext,Be=Ni(r.nextSibling),mn=t,ee=!0,pa=null,Ri=!1,e!==null&&gx(t,e),t=Iu(t,i),t.flags|=134221824;return t}return e=Us(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(et(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function am(e,t,n,i,s){return or(t),n=rg(e,t,n,i,void 0,s),i=og(),e!==null&&!en?(lg(e,t,s),zs(e,t,s)):(ee&&i&&Ah(t),t.flags|=1,rn(e,t,n,s),t.child)}function Iv(e,t,n,i,s,a){return or(t),t.updateQueue=null,n=Ax(t,i,n,s),Ex(e),i=og(),e!==null&&!en?(lg(e,t,a),zs(e,t,a)):(ee&&i&&Ah(t),t.flags|=1,rn(e,t,n,a),t.child)}function Ov(e,t,n,i,s){if(or(t),t.stateNode===null){var a=$r,r=n.contextType;typeof r=="object"&&r!==null&&(a=xn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=im,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},ng(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?xn(r):$r,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(dp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&im.enqueueReplaceState(a,a.state,null),Il(t,i,a,s),Ll(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=hr(n,o);a.props=l;var c=a.context,f=n.contextType;r=$r,typeof f=="object"&&f!==null&&(r=xn(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Cv(t,a,i,r),aa=!1;var u=t.memoizedState;a.state=u,Il(t,i,a,s),Ll(),c=t.memoizedState,o||u!==c||aa?(typeof p=="function"&&(dp(t,n,p,i),c=t.memoizedState),(l=aa||wv(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Kp(e,t),r=t.memoizedProps,f=hr(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=$r,typeof c=="object"&&c!==null&&(l=xn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Cv(t,a,i,l),aa=!1,u=t.memoizedState,a.state=u,Il(t,i,a,s),Ll();var d=t.memoizedState;r!==p||u!==d||aa||e!==null&&e.dependencies!==null&&$u(e.dependencies)?(typeof o=="function"&&(dp(t,n,o,i),d=t.memoizedState),(f=aa||wv(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&$u(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Gr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=cr(t,e.child,null,s),t.child=cr(t,null,n,s)):rn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=zs(e,t,s),e}function Pv(e,t,n,i){return ar(),t.flags|=256,rn(e,t,n,i),t.child}var rm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function om(e){return{baseLanes:e,cachePool:vx()}}function lm(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=oi),e}function uS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Mn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(s?_a(t):va(),(e=Be)?(e=cM(e,Ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ba!==null?{id:us,overflow:hs}:null,retryLane:536870912,hydrationErrors:null},n=px(e),n.return=t,t.child=n,mn=t,Be=null)):e=null,e===null)throw Ta(t);return Dg(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(va(),s=t.mode,a=Uh({mode:"hidden",children:a},s),i=er(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=om(n),i.childLanes=lm(e,r,n),t.memoizedState=rm,Pl(null,i)):(_a(t),vg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return BE(e,t,a,r,i,l,o,n)}return s?(va(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=Us(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=Us(l,s):(s=er(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Pl(null,i),i=t.child,s=e.child.memoizedState,s===null?s=om(n):(a=s.cachePool,a!==null?(o=tn._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=vx(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=lm(e,r,n),t.memoizedState=rm,Pl(e.child,i)):(_a(t),n=e.child,e=n.sibling,n=Us(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function vg(e,t){return t=Uh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Uh(e,t){return e=Kn(22,e,null,t),e.lanes=0,e}function mu(e,t,n){return cr(t,e.child,null,n),e=vg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function BE(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(_a(t),t.flags&=-257,mu(e,t,o)):t.memoizedState!==null?(va(),t.child=e.child,t.flags|=128,null):(va(),a=s.fallback,r=t.mode,s=Uh({mode:"visible",children:s.children},r),a=er(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,cr(t,e.child,null,o),s=t.child,s.memoizedState=om(o),s.childLanes=lm(e,i,o),t.memoizedState=rm,Pl(null,s));if(_a(t),Dg(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(et(419)),s.stack="",s.digest=i,ql({value:s,source:null,stack:null})),mu(e,t,o)}if(en||rr(e,t,o,!1),i=(o&e.childLanes)!==0,en||i){if(Ea.current!==null)return mu(e,t,o);if(i=Ne,i!==null&&(s=Fy(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,gr(e,s),Qn(i,e,s),_g;return Lm(a)||ph(),mu(e,t,o)}return Lm(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Be=Ni(a.nextSibling),mn=t,ee=!0,pa=null,Ri=!1,e!==null&&gx(t,e),t=vg(t,s.children),t.flags|=134221824,t)}function Bv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Nu(e.return,t,n)}function zv(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&nh(n)===null&&(t=e),e=e.sibling}return t}function gu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function pp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function cm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Mn.current;if(t.flags&128)return Zl(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Zl(t,r),s==="backwards"&&e!==null?(pp(e),rn(e,t,i,n),pp(e)):rn(e,t,i,n),i=ee?Wl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bv(e,n,t);else if(e.tag===19)Bv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=zv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,pp(t)),gu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&nh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}gu(t,!0,n,null,a,i);break;case"together":gu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=zv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),gu(t,!1,s,n,a,i)}return t.child}function Fv(e,t,n){var i=t.pendingProps;return ca(t,t.type,i.value),rn(e,t,i.children,n),t.child}function zs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(rr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(et(153));if(t.child!==null){for(e=t.child,n=Us(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Us(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&$u(e)))}function zE(e,t,n){switch(t.tag){case 3:Wu(t,t.stateNode.containerInfo),ca(t,tn,e.memoizedState.cache),ar();break;case 27:case 5:Pp(t);break;case 4:Wu(t,t.stateNode.containerInfo);break;case 10:ca(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,$p(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return _a(t),t.flags|=128,null;i=rr(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?uS(e,t,n):(_a(t),e=zs(e,t,n),e!==null?e.sibling:null)}_a(t);break;case 19:if(t.flags&128)return cm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(rr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return cm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Zl(t,Mn.current),i)break;return null;case 22:return t.lanes=0,cS(e,t,n,t.pendingProps);case 24:ca(t,tn,e.memoizedState.cache)}return zs(e,t,n)}function hS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)en=!0;else{if(!yg(e,n)&&(t.flags&128)===0)return en=!1,zE(e,t,n);en=(e.flags&131072)!==0}else en=!1,ee&&(t.flags&1048576)!==0&&mx(t,Wl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e=="function")Qm(e)?(i=hr(e,i),t.tag=1,t=Ov(null,t,e,i,n)):(t.tag=0,t=am(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===zm){t.tag=11,t=Nv(null,t,e,i,n);break t}else if(s===Fm){t.tag=14,t=Dv(null,t,e,i,n);break t}else if(s===ls){t.tag=10,t.type=e,t=Fv(null,t,n);break t}}throw t=Ip(e)||e,Error(et(306,t,""))}}return t;case 0:return am(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=hr(i,t.pendingProps),Ov(e,t,i,s,n);case 3:t:{if(Wu(t,t.stateNode.containerInfo),e===null)throw Error(et(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Kp(e,t),Il(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ca(t,tn,i),i!==a.cache&&Zp(t,[tn],n,!0),Ll(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Pv(e,t,i,n);break t}else if(i!==s){s=Ci(Error(et(424)),t),ql(s),t=Pv(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Be=Ni(e.firstChild),mn=t,ee=!0,pa=null,Ri=!0,n=Sx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(ar(),i===s){t=zs(e,t,n);break t}rn(e,t,i,n)}t=t.child}return t;case 26:return Gr(e,t),e===null?(n=fy(t.type,null,t.pendingProps,null))?t.memoizedState=n:ee||(t.stateNode=tM(t.type,t.pendingProps,da.current,t)):t.memoizedState=fy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pp(t),e===null&&ee&&(i=t.stateNode=uM(t.type,t.pendingProps,da.current),mn=t,Ri=!0,s=Be,Ra(t.type)?(Im=s,Be=Ni(i.firstChild)):Be=s),rn(e,t,t.pendingProps.children,n),Gr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((s=i=Be)&&(i=NA(i,t.type,t.pendingProps,Ri),i!==null?(t.stateNode=i,mn=t,Be=Ni(i.firstChild),Ri=!1,s=!0):s=!1),s||Ta(t)),Pp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Nm(s,a)?i=null:r!==null&&Nm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=rg(e,t,wE,null,null,n),To._currentValue=s),Gr(e,t),rn(e,t,i,n),t.child;case 6:return e===null&&ee&&((e=n=Be)&&(n=DA(n,t.pendingProps,Ri),n!==null?(t.stateNode=n,mn=t,Be=null,e=!0):e=!1),e||Ta(t)),null;case 13:return uS(e,t,n);case 4:return Wu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=cr(t,null,i,n):rn(e,t,i,n),t.child;case 11:return Nv(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Gr(e,t),rn(e,t,i,n),t.child;case 8:return rn(e,t,t.pendingProps.children,n),t.child;case 12:return rn(e,t,t.pendingProps.children,n),t.child;case 10:return Fv(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,or(t),s=xn(s),i=i(s),t.flags|=1,rn(e,t,i,n),t.child;case 14:return Dv(e,t,t.type,t.pendingProps,n);case 15:return lS(e,t,t.type,t.pendingProps,n);case 19:return cm(e,t,n);case 31:return PE(e,t,n);case 22:return cS(e,t,n,t.pendingProps);case 24:return or(t),i=xn(tn),e===null?(s=tg(),s===null&&(s=Ne,a=$m(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},ng(t),ca(t,tn,s)):((e.lanes&n)!==0&&(Kp(e,t),Il(t,null,null,n),Ll()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ca(t,tn,i)):(i=a.cache,ca(t,tn,i),i!==s.cache&&Zp(t,[tn],n,!0))),rn(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:ee&&Ah(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Gr(e,t),rn(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(et(156,t.tag))}function Rs(e){e.flags|=4}function mp(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?my(t,i):my(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(HS())e.flags|=8192;else throw ir=th,eg}else e.flags&=-16777217}function Hv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pM(t))if(HS())e.flags|=8192;else throw ir=th,eg}function _u(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Py():536870912,e.lanes|=t,vo|=t)}function yl(e,t){if(!ee)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function FE(e,t,n){var i=t.pendingProps;switch(jm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Pe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ls(tn),po(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hr(t)?Rs(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,up())),Pe(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Rs(t),a!==null?(Pe(t),Hv(t,a)):(Pe(t),mp(t,s,null,i,n))):a?a!==e.memoizedState?(Rs(t),Pe(t),Hv(t,a)):(Pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Rs(t),Pe(t),mp(t,s,e,i,n)),null;case 27:if(qu(t),n=da.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Rs(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Pe(t),t.subtreeFlags&=-33554433,null}e=fs.current,Hr(t)?dv(t,e):(e=uM(s,i,n),t.stateNode=e,Rs(t))}return Pe(t),t.subtreeFlags&=-33554433,null;case 5:if(qu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Rs(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Pe(t),t.subtreeFlags&=-33554433,null}if(a=fs.current,Hr(t))dv(t,a);else{var r=jl(da.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[yn]=t,a[$n]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(bn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Rs(t)}}return Pe(t),t.subtreeFlags&=-33554433,mp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Rs(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(et(166));if(e=da.current,Hr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=mn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[yn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||jS(e.nodeValue,n)),e||Ta(t,!0)}else e=jl(e).createTextNode(i),e[yn]=t,t.stateNode=e}return Pe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Hr(t),n!==null){if(e===null){if(!i)throw Error(et(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(557));e[yn]=t}else ar(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),e=!1}else n=up(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ai(t),t):(ai(t),null);if((t.flags&128)!==0)throw Error(et(558))}return Pe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Hr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(et(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(et(317));s[yn]=t}else ar(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),s=!1}else s=up(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(ai(t),t):(ai(t),null)}return ai(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),_u(t,t.updateQueue),Pe(t),null);case 4:return po(),e===null&&Cg(t.stateNode.containerInfo),t.flags|=67108864,Pe(t),null;case 10:return Ls(t.type),Pe(t),null;case 19:if(sg(t),i=t.memoizedState,i===null)return Pe(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)yl(i,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=nh(e),a!==null){for(t.flags|=128,yl(i,!1),e=a.updateQueue,t.updateQueue=e,_u(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)dx(n,e),n=n.sibling;return Zl(t,Mn.current&1|2),ee&&Ns(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&li()>fh&&(t.flags|=128,s=!0,yl(i,!1),t.lanes=4194304)}else{if(!s)if(e=nh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,_u(t,e),yl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!ee)return Pe(t),null}else 2*li()-i.renderingStartTime>fh&&n!==536870912&&(t.flags|=128,s=!0,yl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=li(),e.sibling=null,a=Mn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||ee?Zl(t,a):(n=a,ze(Tn,t),ze(Mn,n),Rn===null&&(Rn=t)),ee&&Ns(t,i.treeForkCount),e}return Pe(t),null;case 22:case 23:return ai(t),ig(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),n=t.updateQueue,n!==null&&_u(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Sn(nr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ls(tn),Pe(t),null;case 25:return null;case 30:return t.flags|=33554432,Pe(t),null}throw Error(et(156,t.tag))}function HE(e,t){switch(jm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ls(tn),po(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qu(t),null;case 31:if(t.memoizedState!==null){if(ai(t),t.alternate===null)throw Error(et(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ai(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(et(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return sg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return po(),null;case 10:return Ls(t.type),null;case 22:case 23:return ai(t),ig(),e!==null&&Sn(nr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ls(tn),null;case 25:return null;default:return null}}function fS(e,t){switch(jm(t),t.tag){case 3:Ls(tn),po();break;case 26:case 27:case 5:qu(t);break;case 4:po();break;case 31:t.memoizedState!==null&&ai(t);break;case 13:ai(t);break;case 19:sg(t);break;case 10:Ls(t.type);break;case 22:case 23:ai(t),ig(),e!==null&&Sn(nr);break;case 24:Ls(tn)}}function hc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){Ee(t,t.return,o)}}function Aa(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){Ee(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){Ee(t,t.return,f)}}function dS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{bx(t,n)}catch(i){Ee(e,e.return,i)}}}function pS(e,t,n){n.props=hr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ee(e,t,i)}}function rs(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=Os(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=sM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new di(e);jn(e.child,!1,CA,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){Ee(e,t,o)}}function vn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){Ee(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Ee(e,t,s)}else n.current=null}function oh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)lM(e.stateNode,t[n])}function Vv(e){for(var t=e.return;t!==null&&(Sg(t)&&lM(e.stateNode,t.stateNode),!xg(t));)t=t.return}function Bl(e){for(var t=e.return;t!==null&&(Sg(t)&&RA(e.stateNode,t.stateNode),!xg(t));)t=t.return}function xg(e){return e.tag===5||e.tag===3||e.tag===27}function Sg(e){return e&&e.tag===7&&e.stateNode!==null}function um(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){Ee(e,e.return,s)}}function gp(e,t,n){try{var i=e.stateNode;uA(i,e.type,n,t),i[$n]=t}catch(s){Ee(e,e.return,s)}}function mS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function _p(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||mS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cs)),oh(e,i),pe=!0;else if(s!==4&&(s===27&&(oh(e,i),i=null,Ra(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(hm(e,t,n,i),e=e.sibling;e!==null;)hm(e,t,n,i),e=e.sibling}function lh(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),oh(e,i),pe=!0;else if(s!==4&&(s===27&&(oh(e,i),i=null,Ra(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(lh(e,t,n,i),e=e.sibling;e!==null;)lh(e,t,n,i),e=e.sibling}function gS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);bn(t,i,n),t[yn]=e,t[$n]=n}catch(a){Ee(e,e.return,a)}}var ch=!1,ri=null;function Gv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(ch=!0)}var os=null;function kv(){var e=os;return os=null,e}var Jn=0;function No(e,t,n,i,s){return Jn=0,_S(e.child,t,n,i,s)}function _S(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Dm(r);i.push(o),o.view&&(a=!0)}else a||Dm(r).view&&(a=!0);ch=!0,eM(r,Jn===0?t:t+"_"+Jn,n),Jn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||_S(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function ps(e,t){for(;e!==null;)e.tag===5?nM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ps(e.child,t)),e=e.sibling}function Ou(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Ou(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(et(544));var n=t.name;t=Vs(t.default,t.share),t!=="none"&&(No(e,n,t,null,!1)||ps(e.child,!1))}e=e.sibling}}function fm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=Os(i,n),a=Vs(i.default,n.paired?i.share:i.enter);a!=="none"?No(e,s,a,null,!1)?(Ou(e),n.paired||t||yo(e,i.onEnter)):ps(e.child,!1):Ou(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)fm(e,t),e=e.sibling;else Ou(e)}function dm(e){if(ri!==null&&ri.size!==0){var t=ri;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=Vs(n.default,n.share);if(a!=="none"&&(No(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,yo(e,n.onShare)):ps(e.child,!1)),t.delete(i),t.size===0)break}}}dm(e)}e=e.sibling}}}function pm(e){if(e.tag===30){var t=e.memoizedProps,n=Os(t,e.stateNode),i=ri!==null?ri.get(n):void 0,s=Vs(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(No(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,ri.delete(n),yo(e,t.onShare)):yo(e,t.onExit):ps(e.child,!1)),ri!==null&&dm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)pm(e),e=e.sibling;else ri!==null&&dm(e)}function vS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Os(t,e.stateNode);t=Vs(t.default,t.update),e.flags&=-5,t!=="none"&&No(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&vS(e);e=e.sibling}}function mm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ps(e.child,!1))}mm(e)}e=e.sibling}}function Pu(e){if(e.tag===30)e.stateNode.paired=null,ps(e.child,!1),mm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Pu(e),e=e.sibling;else mm(e)}function yS(e){for(e=e.child;e!==null;)e.tag===30?ps(e.child,!1):(e.subtreeFlags&33554432)!==0&&yS(e),e=e.sibling}function Mg(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Jn<a.length){var c=a[Jn],f=Dm(l);(c.view||f.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(f.clip)p=!0;else{p=c.rect;var u=f.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&eM(l,Jn===0?n:n+"_"+Jn,s),o&&(e.flags&4)!==0||(os===null&&(os=[]),os.push(l,Jn===0?i:i+"_"+Jn,t.memoizedProps)),Jn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Mg(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function xS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=Os(n,i),a=Vs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(gA)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Jn=0,s=Mg(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||yo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&xS(e,t);e=e.sibling}}var fn=!1,ve=!1,is=!1,vp=!1,Xv=typeof WeakSet=="function"?WeakSet:Set,dn=null,ss=!1,wl=!1,uh=!1,gm=!1;function VE(e,t,n){if(e=e.containerInfo,Cm=Eo,e=ax(e),Zm(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,p=0,u=e,d=null;e:for(;;){for(var v;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)d=u,u=v;for(;;){if(u===e)break e;if(d===i&&++f===a&&(l=o),d===r&&++p===s&&(c=o),(v=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Rm={focusedElem:e,selectionRange:i},Eo=!1,n=(n&335544064)===n,dn=t,t=n?9270:1024;dn!==null;){if(e=dn,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&pm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&Gv(e),vu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&pm(i),vu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Gv(e),vu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,dn=i):(n&&vS(e),vu(n))}}ri=null}function vu(e){for(;dn!==null;){var t=dn,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=hr(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){Ee(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)Um(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Um(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Os(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Vs(s.default,s.update),s!=="none"&&No(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(et(163))}if(i=t.sibling,i!==null){i.return=t.return,dn=i;break}dn=t.return}}function SS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:as(e,n),i&4&&hc(5,n);break;case 1:if(as(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Ee(n,n.return,r)}else{var s=hr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ee(n,n.return,r)}}i&64&&dS(n),i&512&&rs(n,n.return);break;case 3:if(as(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{bx(e,t)}catch(r){Ee(n,n.return,r)}}break;case 27:t===null&&i&4&&gS(n);case 26:case 5:as(e,n),t===null&&i&4&&um(n),i&512&&rs(n,n.return);break;case 12:as(e,n);break;case 31:as(e,n),i&4&&ES(e,n);break;case 13:as(e,n),i&4&&AS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=$E.bind(null,n),UA(e,n))));break;case 22:if(i=n.memoizedState!==null||fn,!i){var a=t!==null&&t.memoizedState!==null||ve;t=fn,s=ve,fn=i,(ve=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Hi(e,n,i)):as(e,n),fn=t,ve=s}break;case 30:as(e,n),i&512&&rs(n,n.return);break;case 7:i&512&&rs(n,n.return);default:as(e,n)}}function _m(e,t){for(e=e.child;e!==null;)MS(e,t),e=e.sibling}function MS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){Ee(e,e.return,l)}vm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,pe=!0}catch(l){Ee(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?ry(o,!0):ry(e.stateNode,!1)}catch(l){Ee(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&_m(e,t);break;default:_m(e,t)}}function vm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:MS(n,i);break t;case 22:n.memoizedState===null&&vm(n,i);break t;default:vm(n,i)}}e=e.sibling}}function bS(e){var t=e.alternate;t!==null&&(e.alternate=null,bS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,Yn=!1;function Fi(e,t,n){for(n=n.child;n!==null;)TS(e,t,n),n=n.sibling}function TS(e,t,n){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(sc,n)}catch{}switch(n.tag){case 26:ve||vn(n,t),Fi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ve&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ve||vn(n,t),Bl(n);var i=ke,s=Yn;Ra(n.type)&&(ke=n.stateNode,Yn=!1),Fi(e,t,n),hM(n.stateNode,n.type,n.memoizedProps),ke=i,Yn=s;break;case 5:ve||vn(n,t),Bl(n);case 6:if(n.tag===6&&Bl(n),i=ke,s=Yn,ke=null,Fi(e,t,n),ke=i,Yn=s,ke!==null)if(Yn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(n.stateNode),pe=!0}catch(a){Ee(n,t,a)}else try{ke.removeChild(n.stateNode),pe=!0}catch(a){Ee(n,t,a)}break;case 18:ke!==null&&(Yn?(e=ke,ay(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ao(e)):ay(ke,n.stateNode));break;case 4:i=ke,s=Yn,ke=n.stateNode.containerInfo,Yn=!0,Fi(e,t,n),ke=i,Yn=s;break;case 0:case 11:case 14:case 15:Aa(2,n,t),ve||Aa(4,n,t),Fi(e,t,n);break;case 1:ve||(vn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&pS(n,t,i)),Fi(e,t,n);break;case 21:Fi(e,t,n);break;case 22:ve=(i=ve)||n.memoizedState!==null,Fi(e,t,n),ve=i;break;case 30:vn(n,t),Fi(e,t,n);break;case 7:ve||vn(n,t),Fi(e,t,n);break;default:Fi(e,t,n)}}function ES(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ao(e)}catch(n){Ee(t,t.return,n)}}}function AS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ao(e)}catch(n){Ee(t,t.return,n)}}function GE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xv),t;default:throw Error(et(435,e.tag))}}function yu(e,t){var n=GE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=tA.bind(null,e,i);i.then(s,s)}})}function Hn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Ra(l.type)){ke=l.stateNode,Yn=!1;break t}break;case 5:ke=l.stateNode,Yn=!1;break t;case 3:case 4:ke=l.stateNode.containerInfo,Yn=!0;break t}l=l.return}if(ke===null)throw Error(et(160));TS(r,o,a),ke=null,Yn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wS(t,e,n),t=t.sibling}var Vi=null;function wS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}Hn(t,e,n),Vn(e),s&4&&(Aa(3,e,e.return),hc(3,e),Aa(5,e,e.return));break;case 1:Hn(t,e,n),Vn(e),s&512&&(ve||i===null||vn(i,i.return)),s&64&&fn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Vi,Hn(t,e,n),Vn(e),s&512&&(ve||i===null||vn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(fn)e.stateNode=tM(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[oc]||i[yn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),bn(i,t,n),i[yn]=e,pn(i),t=i;break t;case"link":if(a=py("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),bn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=py("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),bn(i,t,n),s.head.appendChild(i);break;default:throw Error(et(468,t))}i[yn]=e,pn(i),t=i}e.stateNode=t}else fn||Om(a,e.type,e.stateNode);else e.stateNode=dy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||ve||t.parentNode.removeChild(t)):s.count--,n===null?fn||Om(a,e.type,e.stateNode):dy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&gp(e,e.memoizedProps,i.memoizedProps);break;case 27:Hn(t,e,n),Vn(e),s&512&&(ve||i===null||vn(i,i.return)),i!==null&&s&4&&gp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=is,is=!1,Hn(t,e,n),is=a,Vn(e),s&512&&(ve||i===null||vn(i,i.return)),e.flags&32){t=e.stateNode;try{go(t,""),pe=!0}catch(f){Ee(e,e.return,f)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,gp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(vp=!0);break;case 6:if(Hn(t,e,n),Vn(e),s&4){if(e.stateNode===null)throw Error(et(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,pe=!0}catch(f){Ee(e,e.return,f)}}break;case 3:if(pe=!1,Hu=null,a=Vi,Vi=$l(t.containerInfo),Hn(t,e,n),Vi=a,Vn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Ao(t.containerInfo)}catch(f){Ee(e,e.return,f)}vp&&(vp=!1,CS(e)),pe=!1;break;case 4:s=is,is=fn,i=K_(),a=Vi,Vi=$l(e.stateNode.containerInfo),Hn(t,e,n),Vn(e),Vi=a,pe&&wl&&(uh=!0),pe=i,is=s;break;case 12:Hn(t,e,n),Vn(e);break;case 31:Hn(t,e,n),Vn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,yu(e,t)));break;case 13:Hn(t,e,n),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Lh=li()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,yu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=fn,l=ve,c=is;fn=o||a,is=c||a,ve=l||r,Hn(t,e,n),ve=l,is=c,fn=o,Vn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||fn||ve||(t=r||ve,n=fn,i=ve,fn=a||fn,ve=t,ia(e,2),fn=n,ve=i),!a&&is||_m(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,yu(e,n))));break;case 19:Hn(t,e,n),Vn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,yu(e,t)));break;case 30:s&512&&(ve||i===null||vn(i,i.return)),s=K_(),a=wl,r=(n&335544064)===n,o=e.memoizedProps,wl=r&&Vs(o.default,o.update)!=="none",Hn(t,e,n),Vn(e),r&&i!==null&&pe&&(e.flags|=4),wl=a,pe=s;break;case 21:break;case 7:s&512&&(ve||i===null||vn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Hn(t,e,n),Vn(e)}}function Vn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(mS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Sg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(xg(s))break;s=s.return}var r=i;if(n==null)throw Error(et(160));switch(n.tag){case 27:var o=n.stateNode,l=_p(e);lh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(go(c,""),n.flags&=-33);var f=_p(e);lh(e,f,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=_p(e);hm(e,u,p,r);break;default:throw Error(et(161))}}catch(d){Ee(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function CS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;CS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Eo=!0,t.reset(),Eo=!1),e=e.sibling}}function Vr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)RS(t,e),t=t.sibling;else xS(t,!1)}function RS(e,t){var n=e.alternate;if(n===null)fm(e,!1);else switch(e.tag){case 3:if(gm=ss=!1,kv(),Vr(t,e),!ss&&!uh){if(e=os,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];nM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),gm=!0}os=null;break;case 5:Vr(t,e);break;case 4:i=ss,ss=!1,Vr(t,e),ss&&(uh=!0),ss=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?fm(e,!1):Vr(t,e));break;case 30:i=ss,s=kv(),ss=!1,Vr(t,e),ss&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=Os(a,r),r=Os(n.memoizedProps,r);var o=Vs(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Jn=0,t=Mg(e,n,t,r,o,a,!0),Jn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(yo(e,e.memoizedProps.onUpdate),os=s):s!==null&&(s.push.apply(s,os),os=s),ss=(e.flags&32)!==0?!0:i;break;default:Vr(t,e)}}function as(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)SS(e,t.alternate,t),t=t.sibling}function ia(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),ia(n,i);break;case 1:vn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&pS(n,n.return,s),ia(n,i);break;case 27:(i&2)!==0&&hM(n.stateNode,n.type,n.memoizedProps);case 5:vn(n,n.return),n.tag!==5&&n.tag!==27||Bl(n),ia(n,i);break;case 6:Bl(n);break;case 26:vn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||ve||s.parentNode.removeChild(s),ia(n,i);break;case 22:n.memoizedState===null&&ia(n,i);break;case 30:vn(n,n.return),ia(n,i);break;case 7:vn(n,n.return);default:ia(n,i)}e=e.sibling}}function Hi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Hi(s,a,n),hc(4,a);break;case 1:if(Hi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(f){Ee(i,i.return,f)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)Mx(c[s],l)}catch(f){Ee(i,i.return,f)}}o&&r&64&&dS(a),rs(a,a.return);break;case 27:(n&2)!==0&&gS(a);case 5:a.tag!==5&&a.tag!==27||Vv(a),Hi(s,a,n),o&&i===null&&r&4&&um(a),rs(a,a.return);break;case 6:Vv(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||fn||Om($l(l.ownerDocument),a.type,l),Hi(s,a,n),o&&i===null&&r&4&&um(a),rs(a,a.return);break;case 12:Hi(s,a,n);break;case 31:Hi(s,a,n),o&&r&4&&ES(s,a);break;case 13:Hi(s,a,n),o&&r&4&&AS(s,a);break;case 22:a.memoizedState===null&&Hi(s,a,n),rs(a,a.return);break;case 30:Hi(s,a,n),rs(a,a.return);break;case 7:rs(a,a.return);default:Hi(s,a,n)}t=t.sibling}}function bg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&cc(n))}function Tg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cc(e))}function bi(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)NS(e,t,n,i),t=t.sibling;else s&&yS(t)}function NS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Pu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:bi(e,t,n,i),a&2048&&hc(9,t);break;case 1:bi(e,t,n,i);break;case 3:bi(e,t,n,i),s&&gm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&cc(a)));break;case 12:if(a&2048){bi(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){Ee(t,t.return,c)}}else bi(e,t,n,i);break;case 31:bi(e,t,n,i);break;case 13:bi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&Pu(o),r._visibility&2?bi(e,t,n,i):zl(e,t)):(s&&o!==null&&o.memoizedState!==null&&Pu(t),r._visibility&2?bi(e,t,n,i):(r._visibility|=2,kr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&bg(o,t);break;case 24:bi(e,t,n,i),a&2048&&Tg(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(ps(a.child,!0),ps(t.child,!0))),bi(e,t,n,i);break;default:bi(e,t,n,i)}}function kr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:kr(a,r,o,l,s),hc(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?kr(a,r,o,l,s):zl(a,r):(f._visibility|=2,kr(a,r,o,l,s)),s&&c&2048&&bg(r.alternate,r);break;case 24:kr(a,r,o,l,s),s&&c&2048&&Tg(r.alternate,r);break;default:kr(a,r,o,l,s)}t=t.sibling}}function zl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:zl(n,i),s&2048&&bg(i.alternate,i);break;case 24:zl(n,i),s&2048&&Tg(i.alternate,i);break;default:zl(n,i)}t=t.sibling}}var Qa=8192;function Za(e,t,n){if(e.subtreeFlags&Qa)for(e=e.child;e!==null;)DS(e,t,n),e=e.sibling}function DS(e,t,n){switch(e.tag){case 26:Za(e,t,n),e.flags&Qa&&(e.memoizedState!==null?qA(n,Vi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&gy(n,e)));break;case 5:Za(e,t,n),e.flags&Qa&&(e=e.stateNode,(t&335544128)===t&&gy(n,e));break;case 3:case 4:var i=Vi;Vi=$l(e.stateNode.containerInfo),Za(e,t,n),Vi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Qa,Qa=16777216,Za(e,t,n),Qa=i):Za(e,t,n));break;case 30:if((e.flags&Qa)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,ri===null&&(ri=new Map),ri.set(i,s)}Za(e,t,n);break;default:Za(e,t,n)}}function US(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];dn=i,IS(i,e)}US(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)LS(e),e=e.sibling}function LS(e){switch(e.tag){case 0:case 11:case 15:xl(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:xl(e);break;case 12:xl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bu(e)):xl(e);break;default:xl(e)}}function Bu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];dn=i,IS(i,e)}US(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Aa(8,t,t.return),Bu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Bu(t));break;default:Bu(t)}e=e.sibling}}function IS(e,t){for(;dn!==null;){var n=dn;switch(n.tag){case 0:case 11:case 15:Aa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:cc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,dn=i;else t:for(n=e;dn!==null;){i=dn;var s=i.sibling,a=i.return;if(bS(i),i===n){dn=null;break t}if(s!==null){s.return=a,dn=s;break t}dn=a}}}var kE={getCacheForType:function(e){var t=xn(tn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return xn(tn).controller.signal}},XE=typeof WeakMap=="function"?WeakMap:Map,ge=0,Ne=null,se=null,ae=0,be=0,ii=null,ua=!1,Do=!1,Eg=!1,Fs=0,Ze=0,wa=0,sr=0,hh=0,oi=0,vo=0,Fl=null,Zn=null,ym=!1,Lh=0,OS=0,fh=1/0,dh=null,ya=null,Xe=0,ki=null,fr=null,ds=0,xm=0,Sm=null,PS=null,uo=null,ho=null,fo=null,Hl=0,zu=null;function hi(){return(ge&2)!==0&&ae!==0?ae&-ae:Ft.T!==null?wg():Hy()}function BS(){if(oi===0)if((ae&536870912)===0||ee){var e=ru;ru<<=1,(ru&3932160)===0&&(ru=262144),oi=e}else oi=536870912;return e=Tn.current,e!==null&&(e.flags|=32),oi}function yo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=sM(Os(e.memoizedProps,n))),ho===null&&(ho=[]),ho.push(t.bind(null,i))}}function Qn(e,t,n){(e===Ne&&(be===2||be===9)||e.cancelPendingCommit!==null)&&(xo(e,0),ha(e,ae,oi,!1)),rc(e,n),((ge&2)===0||e!==Ne)&&(e===Ne&&((ge&2)===0&&(sr|=n),Ze===4&&ha(e,ae,oi,!1)),gs(e))}function zS(e,t,n){if((ge&6)!==0)throw Error(et(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ac(e,t),s=i?YE(e,t):yp(e,t,!0),a=i;do{if(s===0){Do&&!i&&ha(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!WE(n)){s=yp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Fl;var l=o.current.memoizedState.isDehydrated;if(l&&(xo(o,r).flags|=256),r=yp(o,r,!1),r!==2&&r!==6){if(Eg&&!l){o.errorRecoveryDisabledLanes|=a,sr|=a,s=4;break t}a=Zn,Zn=s,a!==null&&(Zn===null?Zn=a:Zn.push.apply(Zn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){xo(e,0),ha(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(et(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ha(i,t,oi,!ua);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(et(329))}if((t&62914560)===t&&(s=Lh+300-li(),10<s)){if(ha(i,t,oi,!ua),yh(i,0,!0)!==0)break t;ds=t,i.timeoutHandle=Rg(Wv.bind(null,i,n,Zn,dh,ym,t,oi,sr,vo,ua,a,"Throttled",-0,0),s);break t}Wv(i,n,Zn,dh,ym,t,oi,sr,vo,ua,a,null,-0,0)}}break}while(!0);gs(e)}function Wv(e,t,n,i,s,a,r,o,l,c,f,p,u,d){e.timeoutHandle=-1;var v=t.subtreeFlags,b=(a&335544064)===a;if(p=null,(b||v&8192||(v&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cs},ri=null,DS(t,a,p),b&&(v=p,b=e.containerInfo,b=(b.nodeType===9?b:b.ownerDocument).__reactViewTransition,b!=null&&(v.count++,v.waitingForViewTransition=!0,v=tc.bind(v),b.finished.then(v,v))),v=(a&62914560)===a?Lh-li():(a&4194048)===a?OS-li():0,v=YA(p,v),v!==null)){ds=a,e.cancelPendingCommit=v(Yv.bind(null,e,t,a,n,i,s,r,o,l,c,f,p,null,u,d)),ha(e,a,r,!c);return}Yv(e,t,a,n,i,s,r,o,l,c,f,p)}function WE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!fi(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t,n,i){t=Oy(e,t),t&=~hh,t&=~sr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-ui(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&By(e,n,t)}function Ih(){return(ge&6)===0?(fc(0,!1),!1):!0}function Ag(){if(se!==null){if(be===0)var e=se.return;else e=se,Ds=_r=null,cg(e),oo=null,Yl=0,e=se;for(;e!==null;)fS(e.alternate,e),e=e.return;se=null}}function xo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,dA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ds=0,Ag(),Ne=e,se=n=Us(e.current,null),ae=t,be=0,ii=null,ua=!1,Do=ac(e,t),Eg=!1,vo=oi=hh=sr=wa=Ze=0,Zn=Fl=null,ym=!1,Fs=Oy(e,t),Th(),n}function FS(e,t){Kt=null,Ft.H=ah,t===Ro||t===wh?(t=vv(),be=3):t===eg?(t=vv(),be=4):be=t===_g?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ii=t,se===null&&(Ze=1,rh(e,Ci(t,e.current)))}function HS(){var e=Tn.current;return e===null?!0:(ae&4194048)===ae?Rn===null:(ae&62914560)===ae||(ae&536870912)!==0?e===Rn:!1}function VS(){var e=Ft.H;return Ft.H=ah,e===null?ah:e}function GS(){var e=Ft.A;return Ft.A=kE,e}function ph(){Ze=4,ua||(ae&4194048)!==ae&&Tn.current!==null||(Do=!0),(wa&134217727)===0&&(sr&134217727)===0||Ne===null||ha(Ne,ae,oi,!1)}function yp(e,t,n){var i=ge;ge|=2;var s=VS(),a=GS();(Ne!==e||ae!==t)&&(dh=null,xo(e,t)),t=!1;var r=Ze;t:do try{if(be!==0&&se!==null){var o=se,l=ii;switch(be){case 8:Ag(),r=6;break t;case 3:case 2:case 9:case 6:Tn.current===null&&(t=!0);var c=be;if(be=0,ii=null,no(e,o,l,c),n&&Do){r=0;break t}break;default:c=be,be=0,ii=null,no(e,o,l,c)}}qE(),r=Ze;break}catch(f){FS(e,f)}while(!0);return t&&e.shellSuspendCounter++,Ds=_r=null,ge=i,Ft.H=s,Ft.A=a,se===null&&(Ne=null,ae=0,Th()),r}function qE(){for(;se!==null;)kS(se)}function YE(e,t){var n=ge;ge|=2;var i=VS(),s=GS();Ne!==e||ae!==t?(dh=null,fh=li()+500,xo(e,t)):Do=ac(e,t);t:do try{if(be!==0&&se!==null){t=se;var a=ii;e:switch(be){case 1:be=0,ii=null,no(e,t,a,1);break;case 2:case 9:if(_v(a)){be=0,ii=null,qv(t);break}t=function(){be!==2&&be!==9||Ne!==e||(be=7),gs(e)},a.then(t,t);break t;case 3:be=7;break t;case 4:be=5;break t;case 7:_v(a)?(be=0,ii=null,qv(t)):(be=0,ii=null,no(e,t,a,7));break;case 5:var r=null;switch(se.tag){case 26:r=se.memoizedState;case 5:case 27:var o=se;if(r?pM(r):o.stateNode.complete){be=0,ii=null;var l=o.sibling;if(l!==null)se=l;else{var c=o.return;c!==null?(se=c,Oh(c)):se=null}break e}}be=0,ii=null,no(e,t,a,5);break;case 6:be=0,ii=null,no(e,t,a,6);break;case 8:Ag(),Ze=6;break t;default:throw Error(et(462))}}ZE();break}catch(f){FS(e,f)}while(!0);return Ds=_r=null,Ft.H=i,Ft.A=s,ge=n,se!==null?0:(Ne=null,ae=0,Th(),Ze)}function ZE(){for(;se!==null&&!hT();)kS(se)}function kS(e){var t=hS(e.alternate,e,Fs);e.memoizedProps=e.pendingProps,t===null?Oh(e):se=t}function qv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Iv(n,t,t.pendingProps,t.type,void 0,ae);break;case 11:t=Iv(n,t,t.pendingProps,t.type.render,t.ref,ae);break;case 5:cg(t);var i=t;i===mn&&(ee?(ju(i),i.tag===5&&i.stateNode!=null&&(Be=i.stateNode)):(ju(i),ee=!0));default:fS(n,t),t=se=dx(t,Fs),t=hS(n,t,Fs)}e.memoizedProps=e.pendingProps,t===null?Oh(e):se=t}function no(e,t,n,i){Ds=_r=null,cg(t),oo=null,Yl=0;var s=t.return;try{if(OE(e,s,t,n,ae)){Ze=1,rh(e,Ci(n,e.current)),se=null;return}}catch(a){if(s!==null)throw se=s,a;Ze=1,rh(e,Ci(n,e.current)),se=null;return}t.flags&32768?(ee||i===1?e=!0:Do||(ae&536870912)!==0?e=!1:(ua=e=!0,(i===2||i===9||i===3||i===6)&&(i=Tn.current,i!==null&&i.tag===13&&(i.flags|=16384))),XS(t,e)):Oh(t)}function Oh(e){var t=e;do{if((t.flags&32768)!==0){XS(t,ua);return}e=t.return;var n=FE(t.alternate,t,Fs);if(n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);Ze===0&&(Ze=5)}function XS(e,t){do{var n=HE(e.alternate,e);if(n!==null){n.flags&=32767,se=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=n}while(e!==null);Ze=6,se=null}function Yv(e,t,n,i,s,a,r,o,l,c,f,p){e.cancelPendingCommit=null;do Ph();while(Xe!==0);if((ge&6)!==0)throw Error(et(327));if(t!==null){if(t===e.current)throw Error(et(177));e===Ne&&(se=Ne=null,ae=0),fr=t,ki=e,ds=n,Sm=s,PS=i,JE(e,t,n,r,o,l,p)}}function JE(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(xm=o,o|=Jm,ST(e,n,o,i,s,a),ho=null,(n&335544064)===n?(fo=bE(e),i=10262):(fo=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,eA(Yu,function(){return Em(),null})):(e.callbackNode=null,e.callbackPriority=0),ch=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ft.T,Ft.T=null,s=_e.p,_e.p=2,a=ge,ge|=4;try{VE(e,t,n)}finally{ge=a,_e.p=s,Ft.T=i}}Xe=1,ch?uo=yA(r,e.containerInfo,fo,Mm,bm,QE,Tm,Em,KE,null,null):(Mm(),bm(),Tm())}function KE(e){if(Xe!==0){var t=ki.onRecoverableError;t(e,{componentStack:null})}}function QE(){Xe===3&&(Xe=0,RS(fr,ki),Xe=4)}function Mm(){if(Xe===1){Xe=0;var e=ki,t=fr,n=ds,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Ft.T,Ft.T=null;var s=_e.p;_e.p=2;var a=ge;ge|=4;try{wl=uh=!1,wS(t,e,n),n=Rm;var r=ax(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&sx(o.ownerDocument.documentElement,o)){if(l!==null&&Zm(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),v=o.textContent.length,b=Math.min(l.start,v),m=l.end===void 0?b:Math.min(l.end,v);!d.extend&&b>m&&(r=m,m=b,b=r);var h=cv(o,b),g=cv(o,m);if(h&&g&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==g.node||d.focusOffset!==g.offset)){var M=p.createRange();M.setStart(h.node,h.offset),d.removeAllRanges(),b>m?(d.addRange(M),d.extend(g.node,g.offset)):(M.setEnd(g.node,g.offset),d.addRange(M))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Eo=!!Cm,Rm=Cm=null}finally{ge=a,_e.p=s,Ft.T=i}}e.current=t,Xe=2}}function bm(){if(Xe===2){Xe=0;var e=ki,t=fr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ft.T,Ft.T=null;var i=_e.p;_e.p=2;var s=ge;ge|=4;try{SS(e,t.alternate,t)}finally{ge=s,_e.p=i,Ft.T=n}}Xe=3}}function Tm(){if(Xe===4||Xe===3){Xe=0;var e=uo;uo=null,fT();var t=ki,n=fr,i=ds,s=PS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Xe=5:(Xe=0,fr=ki=null,WS(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(ya=null),Gm(i),n=n.stateNode,ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(sc,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Ft.T,a=_e.p,_e.p=2,Ft.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Ft.T=n,_e.p=a}}if(s=ho,r=fo,fo=null,s!==null&&(ho=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(ds&3)!==0&&Ph(),gs(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===zu?Hl++:(Hl=0,zu=t):(Hl=0,zu=null),fc(0,!1)}}function WS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,cc(t)))}function Ph(){return uo!==null&&(uo.skipTransition(),uo=null),Mm(),bm(),Tm(),Em()}function Em(){if(Xe!==5)return!1;var e=ki,t=xm;xm=0;var n=Gm(ds),i=Ft.T,s=_e.p;try{_e.p=32>n?32:n,Ft.T=null,n=Sm,Sm=null;var a=ki,r=ds;if(Xe=0,fr=ki=null,ds=0,(ge&6)!==0)throw Error(et(331));var o=ge;if(ge|=4,LS(a.current),NS(a,a.current,r,n),ge=o,fc(0,!1),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(sc,a)}catch{}return!0}finally{_e.p=s,Ft.T=i,WS(e,t)}}function Zv(e,t,n){t=Ci(n,t),t=sm(e.stateNode,t,2),e=ga(e,t,2),e!==null&&(rc(e,2),gs(e))}function Ee(e,t,n){if(e.tag===3)Zv(e,e,n);else for(;t!==null;){if(t.tag===3){Zv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ya===null||!ya.has(i))){e=Ci(n,e),n=rS(2),i=ga(t,n,2),i!==null&&(oS(n,i,t,e),rc(i,2),gs(i));break}}t=t.return}}function xp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new XE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Eg=!0,s.add(n),e=jE.bind(null,e,t,n),t.then(e,e))}function jE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ne===e&&(ae&n)===n&&((Ze===4||Ze===3&&(ae&62914560)===ae&&300>li()-Lh)&&(ge&2)===0?xo(e,0):hh|=n,vo===ae&&(vo=0)),gs(e)}function qS(e,t){t===0&&(t=Py()),e=gr(e,t),e!==null&&(rc(e,t),gs(e))}function $E(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qS(e,n)}function tA(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(et(314))}i!==null&&i.delete(t),qS(e,n)}function eA(e,t){return Hm(e,t)}var So=null,Xr=null,Am=!1,mh=!1,Sp=!1,fa=0;function gs(e){e!==Xr&&e.next===null&&(Xr===null?So=Xr=e:Xr=Xr.next=e),mh=!0,Am||(Am=!0,iA())}function fc(e,t){if(!Sp&&mh){Sp=!0;do for(var n=!1,i=So;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-ui(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Jv(i,a))}else a=ae,a=yh(i,i===Ne?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||ac(i,a)||(n=!0,Jv(i,a));i=i.next}while(n);Sp=!1}}function nA(){YS()}function YS(){mh=Am=!1;var e=0;fa!==0&&fA()&&(e=fa);for(var t=li(),n=null,i=So;i!==null;){var s=i.next,a=ZS(i,t);a===0?(i.next=null,n===null?So=s:n.next=s,s===null&&(Xr=n)):(n=i,(e!==0||(a&3)!==0)&&(mh=!0)),i=s}Xe!==0&&Xe!==5||fc(e,!1),fa!==0&&(fa=0)}function ZS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-ui(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=xT(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Ne,n=ae,n=yh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(be===2||be===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&$d(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ac(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&$d(i),Gm(n)){case 2:case 8:n=Ly;break;case 32:n=Yu;break;case 268435456:n=Iy;break;default:n=Yu}return i=JS.bind(null,e),n=Hm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&$d(i),e.callbackPriority=2,e.callbackNode=null,2}function JS(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ph()&&e.callbackNode!==n)return null;var i=ae;return i=yh(e,e===Ne?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(zS(e,i,t),ZS(e,li()),e.callbackNode!=null&&e.callbackNode===n?JS.bind(null,e):null)}function Jv(e,t){if(Ph())return null;zS(e,t,!0)}function iA(){pA(function(){(ge&6)!==0?Hm(Uy,nA):YS()})}function wg(){if(fa===0){var e=lr;e===0&&(e=au,au<<=1,(au&261888)===0&&(au=256)),fa=e}return fa}function Kv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Au(e)}function sA(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Kv((s[$n]||null).action),r=i.submitter;r&&(t=(t=r[$n]||null)?Kv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Sh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(fa!==0){var l=new FormData(s,r);nm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),nm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(xu=0;xu<Wp.length;xu++)Su=Wp[xu],Qv=Su.toLowerCase(),jv=Su[0].toUpperCase()+Su.slice(1),Xi(Qv,"on"+jv);var Su,Qv,jv,xu;Xi(ox,"onAnimationEnd");Xi(lx,"onAnimationIteration");Xi(cx,"onAnimationStart");Xi("dblclick","onDoubleClick");Xi("focusin","onFocus");Xi("focusout","onBlur");Xi(mE,"onTransitionRun");Xi(gE,"onTransitionStart");Xi(_E,"onTransitionCancel");Xi(ux,"onTransitionEnd");mo("onMouseEnter",["mouseout","mouseover"]);mo("onMouseLeave",["mouseout","mouseover"]);mo("onPointerEnter",["pointerout","pointerover"]);mo("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kl));function KS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Ju(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Ju(f)}s.currentTarget=null,a=l}}}}function ie(e,t){var n=t[q_];n===void 0&&(n=t[q_]=new Set);var i=e+"__bubble";n.has(i)||(QS(t,e,2,!1),n.add(i))}function Mp(e,t,n){var i=0;t&&(i|=4),QS(n,e,i,t)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function Cg(e){if(!e[Mu]){e[Mu]=!0,Gy.forEach(function(n){n!=="selectionchange"&&(aA.has(n)||Mp(n,!1,e),Mp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mu]||(t[Mu]=!0,Mp("selectionchange",!1,t))}}function QS(e,t,n,i){switch(SM(t)){case 2:var s=QA;break;case 8:s=jA;break;default:s=Og}n=s.bind(null,t,n,e),s=void 0,!Vp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function bp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=ja(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Ky(function(){var c=a,f=Xm(n),p=[];t:{var u=hx.get(e);if(u!==void 0){var d=Sh,v=e;switch(e){case"keypress":if(Cu(n)===0)break t;case"keydown":case"keyup":d=WT;break;case"focusin":v="focus",d=ap;break;case"focusout":v="blur",d=ap;break;case"beforeblur":case"afterblur":d=ap;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=tv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=LT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=KT;break;case ox:case lx:case cx:d=PT;break;case ux:d=jT;break;case"scroll":case"scrollend":d=DT;break;case"wheel":d=tE;break;case"copy":case"cut":case"paste":d=zT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=nv;break;case"submit":d=ZT;break;case"toggle":case"beforetoggle":d=nE}var b=(t&4)!==0,m=!b&&(e==="scroll"||e==="scrollend"),h=b?u!==null?u+"Capture":null:u;b=[];for(var g=c,M;g!==null;){var y=g;if(M=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||M===null||h===null||(y=Gl(g,h),y!=null&&b.push(Ql(g,y,M))),m)break;g=g.return}0<b.length&&(u=new d(u,v,null,n,f),p.push({event:u,listeners:b}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==Hp&&(v=n.relatedTarget||n.fromElement)&&(ja(v)||v[wo]))break t;(u||d)&&(v=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?ja(d):null,d!==null&&(m=ic(d),b=d.tag,d!==m||b!==5&&b!==27&&b!==6)&&(d=null)):(u=null,d=c),u!==d&&(b=tv,y="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(b=nv,y="onPointerLeave",h="onPointerEnter",g="pointer"),m=u==null?v:El(u),M=d==null?v:El(d),v=new b(y,g+"leave",u,n,f),v.target=m,v.relatedTarget=M,y=null,ja(f)===c&&(b=new b(h,g+"enter",d,n,f),b.target=M,b.relatedTarget=m,y=b),m=y,b=u&&d?Cp(u,d,rA):null,u!==null&&$v(p,v,u,b,!1),d!==null&&m!==null&&$v(p,m,d,b,!0)))}t:{if(u=c?El(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var T=rv;else if(av(u))if(nx)T=fE;else{T=uE;var E=cE}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&km(c.elementType)&&(T=rv):T=hE;if(T&&(T=T(e,c))){ex(p,T,n,f);break t}E&&E(e,u,c)}switch(E=c?El(c):window,e){case"focusin":(av(E)||E.contentEditable==="true")&&(Kr=E,kp=c,Nl=null);break;case"focusout":Nl=kp=Kr=null;break;case"mousedown":Xp=!0;break;case"contextmenu":case"mouseup":case"dragend":Xp=!1,uv(p,n,f);break;case"selectionchange":if(pE)break;case"keydown":case"keyup":uv(p,n,f)}var A;if(Ym)t:{switch(e){case"compositionstart":var x="onCompositionStart";break t;case"compositionend":x="onCompositionEnd";break t;case"compositionupdate":x="onCompositionUpdate";break t}x=void 0}else Jr?$y(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(jy&&n.locale!=="ko"&&(Jr||x!=="onCompositionStart"?x==="onCompositionEnd"&&Jr&&(A=Qy()):(la=f,Wm="value"in la?la.value:la.textContent,Jr=!0)),E=gh(c,x),0<E.length&&(x=new ev(x,e,null,n,f),p.push({event:x,listeners:E}),A?x.data=A:(A=tx(n),A!==null&&(x.data=A)))),(A=sE?aE(e,n):rE(e,n))&&(x=gh(c,"onBeforeInput"),0<x.length&&(E=new ev("onBeforeInput","beforeinput",null,n,f),p.push({event:E,listeners:x}),E.data=A)),sA(p,e,c,n,f)}KS(p,t)})}function Ql(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Gl(e,n),s!=null&&i.unshift(Ql(e,s,a)),s=Gl(e,t),s!=null&&i.push(Ql(e,s,a))),e.tag===3)return i;e=e.return}return[]}function rA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $v(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Gl(n,a),c!=null&&r.unshift(Ql(n,c,l))):s||(c=Gl(n,a),c!=null&&r.push(Ql(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var oA=/\r\n?/g,lA=/\u0000|\uFFFD/g;function ty(e){return(typeof e=="string"?e:""+e).replace(oA,`
`).replace(lA,"")}function jS(e,t){return t=ty(t),ty(e)===t}function Te(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||go(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&go(e,""+i);else return;break;case"className":lu(e,"class",i);break;case"tabIndex":lu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":lu(e,n,i);break;case"style":Jy(e,i,a);return;case"data":if(t!=="object"){lu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Au(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&Te(e,t,"name",s.name,s,null),Te(e,t,"formEncType",s.formEncType,s,null),Te(e,t,"formMethod",s.formMethod,s,null),Te(e,t,"formTarget",s.formTarget,s,null)):(Te(e,t,"encType",s.encType,s,null),Te(e,t,"method",s.method,s,null),Te(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Au(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=cs);return;case"onScroll":i!=null&&ie("scroll",e);return;case"onScrollEnd":i!=null&&ie("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(et(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Au(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Eu(e,"popover",i);break;case"xlinkActuate":Cs(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Cs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Cs(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Cs(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Cs(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Cs(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Cs(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Cs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Cs(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Eu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=RT.get(n)||n,Eu(e,n,i);else return}pe=!0}function wm(e,t,n,i,s,a){switch(n){case"style":Jy(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(et(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")go(e,i);else if(typeof i=="number"||typeof i=="bigint")go(e,""+i);else return;break;case"onScroll":i!=null&&ie("scroll",e);return;case"onScrollEnd":i!=null&&ie("scrollend",e);return;case"onClick":i!=null&&(e.onclick=cs);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!ky.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[$n]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}pe=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Eu(e,n,i)}return}pe=!0}function bn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:Te(e,t,a,r,n,null)}}s&&Te(e,t,"srcSet",n.srcSet,n,null),i&&Te(e,t,"src",n.src,n,null);return;case"input":ie("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(et(137,t));break;default:Te(e,t,i,f,n,null)}}qy(e,a,o,l,c,r,s,!1);return;case"select":ie("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Te(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?so(e,!!i,t,!1):n!=null&&so(e,!!i,n,!0);return;case"textarea":ie("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(et(91));break;default:Te(e,t,r,o,n,null)}Zy(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Te(e,t,l,i,n,null));return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(i=0;i<Kl.length;i++)ie(Kl[i],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:Te(e,t,c,i,n,null)}return;default:if(km(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&wm(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Te(e,t,o,i,n,null))}var cA={};function uA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||Te(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(pe=!0),a=d;break;case"name":d!==p&&(pe=!0),s=d;break;case"checked":d!==p&&(pe=!0),c=d;break;case"defaultChecked":d!==p&&(pe=!0),f=d;break;case"value":d!==p&&(pe=!0),r=d;break;case"defaultValue":d!==p&&(pe=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(et(137,t));break;default:d!==p&&Te(e,t,u,d,i,p)}}Fp(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||Te(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(pe=!0),u=a;break;case"defaultValue":a!==l&&(pe=!0),o=a;break;case"multiple":a!==l&&(pe=!0),r=a;default:a!==l&&Te(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?so(e,!!n,u,!1):!!i!=!!n&&(t!=null?so(e,!!n,t,!0):so(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Te(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(pe=!0),u=s;break;case"defaultValue":s!==a&&(pe=!0),d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(et(91));break;default:s!==a&&Te(e,t,r,s,i,a)}Yy(e,u,d);return;case"option":for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:Te(e,t,v,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?(u!==d&&(pe=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):Te(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&Te(e,t,b,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(et(137,t));break;default:Te(e,t,c,u,i,d)}return;default:if(km(t)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&wm(e,t,m,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||wm(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&Te(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||Te(e,t,p,u,i,d)}function ey(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&ey(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&ey(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cm=null,Rm=null;function jl(e){return e.nodeType===9?e:e.ownerDocument}function ny(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $S(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function tM(e,t,n,i){return n=jl(n).createElement(e),n[yn]=i,n[$n]=t,bn(n,e,t),pn(n),n}function Nm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tp=null;function fA(){var e=window.event;return e&&e.type==="popstate"?e===Tp?!1:(Tp=e,!0):(Tp=null,!1)}var Rg=typeof setTimeout=="function"?setTimeout:void 0,dA=typeof clearTimeout=="function"?clearTimeout:void 0,iy=typeof Promise=="function"?Promise:void 0,sy=typeof requestAnimationFrame=="function"?requestAnimationFrame:Rg,pA=typeof queueMicrotask=="function"?queueMicrotask:typeof iy<"u"?function(e){return iy.resolve(null).then(e).catch(mA)}:Rg;function mA(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function ay(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Ao(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ap(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ap(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[oc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Ap(e.ownerDocument.body);n=s}while(n);Ao(t)}function ry(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function eM(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function nM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function iM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Dm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return iM(t,n,e)}function gA(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return iM(t,n,e)}function _A(e){return e.documentElement.clientHeight}function vA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function yA(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,v=c.fonts.status;i();var b=[];if(v==="loaded"&&(_A(c),c.fonts.status==="loading"&&b.push(c.fonts.ready)),v=b.length,e!==null)for(var m=e.suspenseyImages,h=0,g=0;g<m.length;g++){var M=m[g];if(!M.complete){var y=M.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<u.innerHeight&&y.left<u.innerWidth){if(h+=mM(M),h>Vu){b.length=v;break}M=new Promise(vA.bind(M)),b.push(M)}}}if(0<b.length)return u=Promise.race([Promise.all(b),new Promise(function(T){return setTimeout(T,500)})]).then(s,s),(d?Promise.allSettled([d.finished,u]):u).then(a,a);if(s(),d)return d.finished.then(a,a);a()},types:n});c.__reactViewTransition=f;var p=[];return f.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var v=u[d],b=v.effect,m=b.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){p.push(v),v=b.getKeyframes();for(var h=m=void 0,g=!0,M=0;M<v.length;M++){var y=v[M],T=y.width;if(m===void 0)m=T;else if(m!==T){g=!1;break}if(T=y.height,h===void 0)h=T;else if(h!==T){g=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}g&&m!==void 0&&h!==void 0&&(b.setKeyframes(v),g=getComputedStyle(b.target,b.pseudoElement),g.width!==m||g.height!==h)&&(g=v[0],g.width=m,g.height=h,g=v[v.length-1],g.width=m,g.height=h,b.setKeyframes(v))}}r()},function(u){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),f.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),s(),r(),null}}function $a(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}$a.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:De({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};$a.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};$a.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function sM(e){return{name:e,group:new $a("group",e),imagePair:new $a("image-pair",e),old:new $a("old",e),new:new $a("new",e)}}function di(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}di.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(aM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=Mo(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),jn(this._fragmentFiber.child,!1,xA,e,o,i)}this._eventListeners=a}};function xA(e,t,n,i){return on(e).addEventListener(t,n,i),!1}di.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=aM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=Mo(s.optionsOrUseCapture),jn(this._fragmentFiber.child,!1,SA,e,n,s),i.splice(t,1),a!==null&&a()}};function SA(e,t,n,i){return on(e).removeEventListener(t,n,i),!1}function Mo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function oy(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function aM(e,t,n,i){if(e.length===0)return-1;i=oy(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&oy(a.optionsOrUseCapture)===i)return s}return-1}di.prototype.dispatchEvent=function(e){var t=dr(this._fragmentFiber);if(t===null)return!0;t=on(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,Mo(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,Mo(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};di.prototype.focus=function(e){jn(this._fragmentFiber.child,!0,rM,e,void 0,void 0)};function rM(e,t){return e.tag===6?!1:(e=on(e),LA(e,t))}di.prototype.focusLast=function(e){var t=[];jn(this._fragmentFiber.child,!0,Ng,t,void 0,void 0);for(var n=t.length-1;0<=n&&!rM(t[n],e);n--);};function Ng(e,t){return t.push(e),!1}di.prototype.blur=function(){var e=dr(this._fragmentFiber);e!==null&&(e=on(e),e=jl(e).activeElement,e!==null&&jn(this._fragmentFiber.child,!1,MA,e,void 0,void 0))};function MA(e,t){return e.tag===6?!1:(e=on(e),e===t||e.contains(t)?(t.blur(),!0):!1)}di.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),jn(this._fragmentFiber.child,!1,bA,e,void 0,void 0)};function bA(e,t){return e.tag===6||(e=on(e),t.observe(e)),!1}di.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),jn(this._fragmentFiber.child,!1,TA,e,void 0,void 0);for(var n=t=0;n<Gi.length;n++){var i=Gi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Gi[t++]=i}Gi.length=t}};function TA(e,t){return e.tag===6||(e=on(e),t.unobserve(e)),!1}var Gi=[],Ep=!1;function EA(e,t,n){Gi.push({fragmentInstance:e,observer:t,instance:n}),Ep||(Ep=!0,IA(function(){Ep=!1;var i=Gi;Gi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}di.prototype.getClientRects=function(){var e=[];return jn(this._fragmentFiber.child,!1,AA,e,void 0,void 0),e};function AA(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=on(e),t.push.apply(t,e.getClientRects());return!1}di.prototype.getRootNode=function(e){var t=dr(this._fragmentFiber);return t===null?this:on(t).getRootNode(e)};di.prototype.compareDocumentPosition=function(e){var t=dr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];jn(this._fragmentFiber.child,!1,Ng,n,void 0,void 0);var i=on(t);if(n.length===0){if(n=i,H_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Cy(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=on(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=on(n[0]),s=on(n[n.length-1]);var a=H_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||wA(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function wA(e,t,n,i,s){var a=ja(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=dr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Cp(n,a,V_),t===null?t=!1:(jn(t,!0,iT,a,n),a=Wr,Wr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=Cp(i,a,V_),t===null?t=!1:(jn(t,!0,sT,a,i),a=Wr,wp=Wr=null,t=a!==null)),t):!1}function ly(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}di.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(et(566));var t=[];jn(this._fragmentFiber.child,!1,Ng,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Cy(this._fragmentFiber);if(i=n?i[1]||i[0]||dr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=on(i),ly(e,n);return}if(i=on(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=on(s),ly(s,n)):on(s).scrollIntoView(e),i+=n?-1:1}};function CA(e,t){return e=on(e),oM(e,t),!1}function oM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function lM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,Mo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Gi.length;o++){var l=Gi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Gi[r++]=l)}Gi.length=r,a.observe(e)}),oM(e,t))}function RA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,Mo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?EA(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Um(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Um(n),xh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function NA(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[oc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Ni(e.nextSibling),e===null)break}return null}function DA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ni(e.nextSibling),e===null))return null;return e}function cM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ni(e.nextSibling),e===null))return null;return e}function Lm(e){return e.data==="$?"||e.data==="$~"}function Dg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function UA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ni(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Im=null;function cy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ni(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function uy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function LA(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function IA(e){sy(function(){sy(function(t){return e(t)})})}function uM(e,t,n){switch(t=jl(n),e){case"html":if(e=t.documentElement,!e)throw Error(et(452));return e;case"head":if(e=t.head,!e)throw Error(et(453));return e;case"body":if(e=t.body,!e)throw Error(et(454));return e;default:throw Error(et(451))}}function hM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&Te(e,t,i,null,cA,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===cs&&(e.onclick=null),xh(e)}function Ap(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xh(e)}var Di=new Map,hy=new Set;function $l(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Gs=_e.d;_e.d={f:OA,r:PA,D:BA,C:zA,L:FA,m:HA,X:GA,S:VA,M:kA};function OA(){var e=Gs.f(),t=Ih();return e||t}function PA(e){var t=Co(e);t!==null&&t.tag===5&&t.type==="form"?Jx(t):Gs.r(e)}var Uo=typeof document>"u"?null:document;function fM(e,t,n){var i=Uo;if(i&&typeof t=="string"&&t){var s=wi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),hy.has(s)||(hy.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),bn(t,"link",e),pn(t),i.head.appendChild(t)))}}function BA(e){Gs.D(e),fM("dns-prefetch",e,null)}function zA(e,t){Gs.C(e,t),fM("preconnect",e,t)}function FA(e,t,n){Gs.L(e,t,n);var i=Uo;if(i&&e&&t){var s='link[rel="preload"][as="'+wi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+wi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+wi(n.imageSizes)+'"]')):s+='[href="'+wi(e)+'"]';var a=s;switch(t){case"style":a=bo(e);break;case"script":a=Lo(e)}if(!(Di.has(a)||(e=De({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Di.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(dc(a))||t==="script"&&i.querySelector(pc(a))))){var r=i.createElement("link");bn(r,"link",e),t==="style"&&(r[Zu]=!0,r.onload=r.onerror=function(){Vy(r)}),pn(r),i.head.appendChild(r)}}}function HA(e,t){Gs.m(e,t);var n=Uo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+wi(i)+'"][href="'+wi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Lo(e)}if(!Di.has(a)&&(e=De({rel:"modulepreload",href:e},t),Di.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(pc(a)))return}i=n.createElement("link"),bn(i,"link",e),pn(i),n.head.appendChild(i)}}}function VA(e,t,n){Gs.S(e,t,n);var i=Uo;if(i&&e){var s=io(i).hoistableStyles,a=bo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(dc(a)))o.loading=5;else{e=De({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Di.get(a))&&Ug(e,n);var l=r=i.createElement("link");pn(l),bn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Fu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function GA(e,t){Gs.X(e,t);var n=Uo;if(n&&e){var i=io(n).hoistableScripts,s=Lo(e),a=i.get(s);a||(a=n.querySelector(pc(s)),a||(e=De({src:e,async:!0},t),(t=Di.get(s))&&Lg(e,t),a=n.createElement("script"),pn(a),bn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function kA(e,t){Gs.M(e,t);var n=Uo;if(n&&e){var i=io(n).hoistableScripts,s=Lo(e),a=i.get(s);a||(a=n.querySelector(pc(s)),a||(e=De({src:e,async:!0,type:"module"},t),(t=Di.get(s))&&Lg(e,t),a=n.createElement("script"),pn(a),bn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function fy(e,t,n,i){var s=(s=da.current)?$l(s):null;if(!s)throw Error(et(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=bo(n.href),t=io(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=bo(n.href);var a=io(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(dc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=Di.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Di.set(e,a)),XA(s,e,a,r.state))),t&&i===null)throw Error(et(528,""));return r}if(t&&i!==null)throw Error(et(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Lo(n),t=io(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(et(444,e))}}function bo(e){return'href="'+wi(e)+'"'}function dc(e){return'link[rel="stylesheet"]['+e+"]"}function dM(e){return De({},e,{"data-precedence":e.precedence,precedence:null})}function XA(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Zu]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Zu]=!0,t.onload=t.onerror=Vy.bind(null,t),bn(t,"link",n),pn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Lo(e){return'[src="'+wi(e)+'"]'}function pc(e){return"script[async]"+e}function dy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+wi(n.href)+'"]');if(i)return t.instance=i,pn(i),i;var s=De({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),pn(i),bn(i,"style",s),Fu(i,n.precedence,e),t.instance=i;case"stylesheet":s=bo(n.href);var a=e.querySelector(dc(s));if(a)return t.state.loading|=4,t.instance=a,pn(a),a;i=dM(n),(s=Di.get(s))&&Ug(i,s),a=(e.ownerDocument||e).createElement("link"),pn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),bn(a,"link",i),t.state.loading|=4,Fu(a,n.precedence,e),t.instance=a;case"script":return a=Lo(n.src),(s=e.querySelector(pc(a)))?(t.instance=s,pn(s),s):(i=n,(s=Di.get(a))&&(i=De({},n),Lg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),pn(s),bn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(et(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Fu(i,n.precedence,e));return t.instance}function Fu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ug(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Lg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Hu=null;function py(e,t,n){if(Hu===null){var i=new Map,s=Hu=new Map;s.set(n,i)}else s=Hu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[oc]||a[yn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Om(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function WA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function my(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function pM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function mM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function gy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=mM(t),e.suspenseyImages.push(t)),e=ZA.bind(e),t.decode().then(e,e))}function qA(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=bo(i.href),a=t.querySelector(dc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=tc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,pn(a);return}a=t.ownerDocument||t,i=dM(i),(s=Di.get(s))&&Ug(i,s),a=a.createElement("link"),pn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),bn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=tc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Vu=0;function YA(e,t){return e.stylesheets&&e.count===0&&Gu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Gu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Vu===0&&(Vu=62500*hA());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Gu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Vu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function gM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Gu(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function tc(){this.count--,gM(this)}function ZA(){this.imgCount--,gM(this)}var _h=null;function Gu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_h=new Map,t.forEach(JA,e),_h=null,tc.call(e))}function JA(e,t){if(!(t.state.loading&4)){var n=_h.get(e);if(n)var i=n.get(null);else{n=new Map,_h.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=tc.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var To={$$typeof:ls,Provider:null,Consumer:null,_currentValue:tr,_currentValue2:tr,_threadCount:0};function KA(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tp(0),this.hiddenUpdates=tp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function _M(e,t,n,i,s,a,r,o,l,c,f,p){return e=new KA(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=Kn(3,null,null,t),e.current=a,a.stateNode=e,t=$m(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},ng(a),e}function vM(e){return e?(e=$r,e):$r}function yM(e,t,n,i,s,a){s=vM(s),i.context===null?i.context=s:i.pendingContext=s,i=ma(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=ga(e,i,t),n!==null&&(Qn(n,e,t),Ul(n,e,t))}function _y(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ig(e,t){_y(e,t),(e=e.alternate)&&_y(e,t)}function xM(e){if(e.tag===13||e.tag===31){var t=gr(e,67108864);t!==null&&Qn(t,e,67108864),Ig(e,67108864)}}function vy(e){if(e.tag===13||e.tag===31){var t=hi();t=Vm(t);var n=gr(e,t);n!==null&&Qn(n,e,t),Ig(e,t)}}var Eo=!0;function QA(e,t,n,i){var s=Ft.T;Ft.T=null;var a=_e.p;try{_e.p=2,Og(e,t,n,i)}finally{_e.p=a,Ft.T=s}}function jA(e,t,n,i){var s=Ft.T;Ft.T=null;var a=_e.p;try{_e.p=8,Og(e,t,n,i)}finally{_e.p=a,Ft.T=s}}function Og(e,t,n,i){if(Eo){var s=Pm(i);if(s===null)bp(e,t,i,vh,n),yy(e,i);else if(tw(s,e,t,n,i))i.stopPropagation();else if(yy(e,i),t&4&&-1<$A.indexOf(e)){for(;s!==null;){var a=Co(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Ja(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-ui(r);o.entanglements[1]|=l,r&=~l}gs(a),(ge&6)===0&&(fh=li()+500,fc(0,!1))}}break;case 31:case 13:o=gr(a,2),o!==null&&Qn(o,a,2),Ih(),Ig(a,2)}if(a=Pm(i),a===null&&bp(e,t,i,vh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else bp(e,t,i,null,n)}}function Pm(e){return e=Xm(e),Pg(e)}var vh=null;function Pg(e){if(vh=null,e=ja(e),e!==null){var t=ic(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Ey(t),e!==null)return e;e=null}else if(n===31){if(e=Ay(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return vh=e,null}function SM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dT()){case Uy:return 2;case Ly:return 8;case Yu:case pT:return 32;case Iy:return 268435456;default:return 32}default:return 32}}var Bm=!1,xa=null,Sa=null,Ma=null,ec=new Map,nc=new Map,ra=[],$A="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yy(e,t){switch(e){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":Sa=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":ec.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":nc.delete(t.pointerId)}}function Sl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Co(t),t!==null&&xM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function tw(e,t,n,i,s){switch(t){case"focusin":return xa=Sl(xa,e,t,n,i,s),!0;case"dragenter":return Sa=Sl(Sa,e,t,n,i,s),!0;case"mouseover":return Ma=Sl(Ma,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return ec.set(a,Sl(ec.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,nc.set(a,Sl(nc.get(a)||null,e,t,n,i,s)),!0}return!1}function MM(e){var t=ja(e.target);if(t!==null){var n=ic(t);if(n!==null){if(t=n.tag,t===13){if(t=Ey(n),t!==null){e.blockedOn=t,W_(e.priority,function(){vy(n)});return}}else if(t===31){if(t=Ay(n),t!==null){e.blockedOn=t,W_(e.priority,function(){vy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ku(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Hp=i,n.target.dispatchEvent(i),Hp=null}else return t=Co(n),t!==null&&xM(t),e.blockedOn=n,!1;t.shift()}return!0}function xy(e,t,n){ku(e)&&n.delete(t)}function ew(){Bm=!1,xa!==null&&ku(xa)&&(xa=null),Sa!==null&&ku(Sa)&&(Sa=null),Ma!==null&&ku(Ma)&&(Ma=null),ec.forEach(xy),nc.forEach(xy)}function bu(e,t){e.blockedOn===t&&(e.blockedOn=null,Bm||(Bm=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,ew)))}var Tu=null;function Sy(e){Tu!==e&&(Tu=e,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,function(){Tu===e&&(Tu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Pg(i||n)===null)continue;break}var a=Co(n);a!==null&&(e.splice(t,3),t-=3,nm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Ao(e){function t(l){return bu(l,e)}xa!==null&&bu(xa,e),Sa!==null&&bu(Sa,e),Ma!==null&&bu(Ma,e),ec.forEach(t),nc.forEach(t);for(var n=0;n<ra.length;n++){var i=ra[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ra.length&&(n=ra[0],n.blockedOn===null);)MM(n),n.blockedOn===null&&ra.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[$n]||null;if(typeof a=="function")r||Sy(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[$n]||null)o=r.formAction;else if(Pg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Sy(n)}}}function bM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Bg(e){this._internalRoot=e}Bh.prototype.render=Bg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(et(409));var n=t.current,i=hi();yM(n,i,e,t,null,null)};Bh.prototype.unmount=Bg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yM(e.current,2,null,e,null,null),Ih(),t[wo]=null}};function Bh(e){this._internalRoot=e}Bh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ra.length&&t!==0&&t<ra[n].priority;n++);ra.splice(n,0,e),n===0&&MM(e)}};var My=by.version;if(My!=="19.3.0")throw Error(et(527,My,"19.3.0"));_e.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(et(188)):(e=Object.keys(e).join(","),Error(et(268,e)));return e=nT(t),e=e!==null?wy(e):null,e=e===null?null:e.stateNode,e};var nw={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Ft,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ml.isDisabled&&Ml.supportsFiber))try{sc=Ml.inject(nw),ci=Ml}catch{}var Ml;zh.createRoot=function(e,t){if(!Ty(e))throw Error(et(299));var n=!1,i="",s=iS,a=sS,r=aS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=_M(e,1,!1,null,null,n,i,null,s,a,r,bM),e[wo]=t.current,Cg(e),new Bg(t)};zh.hydrateRoot=function(e,t,n){if(!Ty(e))throw Error(et(299));var i=!1,s="",a=iS,r=sS,o=aS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=_M(e,1,!0,t,n??null,i,s,l,a,r,o,bM),t.context=vM(null),n=t.current,i=hi(),i=Vm(i),s=ma(i),s.callback=null,ga(n,s,i),n=i,t.current.lanes=n,rc(t,n),gs(t),e[wo]=t.current,Cg(e),new Bh(t)};zh.version="19.3.0"});var wM=es((jN,AM)=>{"use strict";function EM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(EM)}catch(e){console.error(e)}}EM(),AM.exports=TM()});var p1=es(Dd=>{"use strict";var RN=Symbol.for("react.transitional.element"),NN=Symbol.for("react.fragment");function d1(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:RN,type:e,key:i,ref:t!==void 0?t:null,props:n}}Dd.Fragment=NN;Dd.jsx=d1;Dd.jsxs=d1});var Qc=es((WI,m1)=>{"use strict";m1.exports=p1()});var E1=Ir(wM());var qe=Ir(nu());var JM=0,d0=1,KM=2;var zc=1,QM=2,nl=3,Ga=0,qn=1,Pi=2,bs=0,il=1,p0=2,m0=3,g0=4,jM=5;var Ar=100,$M=101,tb=102,eb=103,nb=104,ib=200,sb=201,ab=202,rb=203,_0=204,v0=205,ob=206,lb=207,cb=208,ub=209,hb=210,fb=211,db=212,pb=213,mb=214,of=0,lf=1,cf=2,Zo=3,uf=4,hf=5,ff=6,df=7,y0=0,gb=1,_b=2,Ki=0,x0=1,S0=2,M0=3,b0=4,T0=5,E0=6,A0=7;var w0=300,ka=301,wr=302,Bf=303,zf=304,Fc=306,pf=1e3,vs=1001,mf=1002,_n=1003,vb=1004;var Hc=1005;var cn=1006,Ff=1007;var Ts=1008;var vi=1009,C0=1010,R0=1011,sl=1012,Hf=1013,Qi=1014,ji=1015,$i=1016,Vf=1017,Gf=1018,al=1020,N0=35902,D0=35899,U0=1021,L0=1022,Bi=1023,ys=1026,Xa=1027,I0=1028,kf=1029,Wa=1030,Xf=1031;var Wf=1033,Vc=33776,Gc=33777,kc=33778,Xc=33779,qf=35840,Yf=35841,Zf=35842,Jf=35843,Kf=36196,Qf=37492,jf=37496,$f=37488,td=37489,Wc=37490,ed=37491,nd=37808,id=37809,sd=37810,ad=37811,rd=37812,od=37813,ld=37814,cd=37815,ud=37816,hd=37817,fd=37818,dd=37819,pd=37820,md=37821,gd=36492,_d=36494,vd=36495,yd=36283,xd=36284,qc=36285,Sd=36286;var xc=2300,gf=2301,af=2302,r0=2303,o0=2400,l0=2401,c0=2402;var yb=3200;var O0=0,xb=1,zi="",gi="srgb",Sc="srgb-linear",Mc="linear",ye="srgb";var rf=7680;var Sb=519,Mb=512,bb=513,Tb=514,Md=515,Eb=516,Ab=517,bd=518,wb=519,Cb=35044;var P0="300 es",Ji=2e3,bc=2001;function iw(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function sw(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Tc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Rb(){let e=Tc("canvas");return e.style.display="block",e}var CM={},Jo=null;function B0(...e){let t="THREE."+e.shift();Jo?Jo("log",t,...e):console.log(t,...e)}function Nb(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function zt(...e){e=Nb(e);let t="THREE."+e.shift();if(Jo)Jo("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Bt(...e){e=Nb(e);let t="THREE."+e.shift();if(Jo)Jo("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function br(...e){let t=e.join(" ");t in CM||(CM[t]=!0,zt(...e))}function Db(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var Ub={[of]:lf,[cf]:ff,[uf]:df,[Zo]:hf,[lf]:of,[ff]:cf,[df]:uf,[hf]:Zo},xs=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zg=Math.PI/180,_f=180/Math.PI;function Yc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[e&255]+Nn[e>>8&255]+Nn[e>>16&255]+Nn[e>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function le(e,t,n){return Math.max(t,Math.min(n,e))}function aw(e,t){return(e%t+t)%t}function Fg(e,t,n){return(1-n)*e+n*t}function mc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ti(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ce=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=le(this.x,t.x,n.x),this.y=le(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=le(this.x,t,n),this.y=le(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ss=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],v=a[r+2],b=a[r+3];if(p!==b||l!==u||c!==d||f!==v){let m=l*u+c*d+f*v+p*b;m<0&&(u=-u,d=-d,v=-v,b=-b,m=-m);let h=1-o;if(m<.9995){let g=Math.acos(m),M=Math.sin(g);h=Math.sin(h*g)/M,o=Math.sin(o*g)/M,l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+b*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+b*o;let g=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=g,c*=g,f*=g,p*=g}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],v=a[r+3];return t[n]=o*v+f*p+l*d-c*u,t[n+1]=l*v+f*u+c*p-o*d,t[n+2]=c*v+f*d+o*u-l*p,t[n+3]=f*v-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"YXZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"ZXY":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"ZYX":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"YZX":this._x=u*f*p+c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p-u*d*v;break;case"XZY":this._x=u*f*p-c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p+u*d*v;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(RM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(RM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=le(this.x,t.x,n.x),this.y=le(this.y,t.y,n.y),this.z=le(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=le(this.x,t,n),this.y=le(this.y,t,n),this.z=le(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Hg.copy(this).projectOnVector(t),this.sub(Hg)}reflect(t){return this.sub(Hg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hg=new X,RM=new Ss,qt=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],v=i[8],b=s[0],m=s[3],h=s[6],g=s[1],M=s[4],y=s[7],T=s[2],E=s[5],A=s[8];return a[0]=r*b+o*g+l*T,a[3]=r*m+o*M+l*E,a[6]=r*h+o*y+l*A,a[1]=c*b+f*g+p*T,a[4]=c*m+f*M+p*E,a[7]=c*h+f*y+p*A,a[2]=u*b+d*g+v*T,a[5]=u*m+d*M+v*E,a[8]=u*h+d*y+v*A,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,v=n*p+i*u+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return t[0]=p*b,t[1]=(s*c-f*i)*b,t[2]=(o*i-s*r)*b,t[3]=u*b,t[4]=(f*n-s*l)*b,t[5]=(s*a-o*n)*b,t[6]=d*b,t[7]=(i*l-c*n)*b,t[8]=(r*n-i*a)*b,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vg.makeScale(t,n)),this}rotate(t){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vg.makeRotation(-t)),this}translate(t,n){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vg=new qt,NM=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),DM=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rw(){let e={enabled:!0,workingColorSpace:Sc,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ye&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ye&&(s.r=Yo(s.r),s.g=Yo(s.g),s.b=Yo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zi?Mc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Sc]:{primaries:t,whitePoint:i,transfer:Mc,toXYZ:NM,fromXYZ:DM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:NM,fromXYZ:DM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),e}var re=rw();function Zs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Yo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Io,vf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Io===void 0&&(Io=Tc("canvas")),Io.width=t.width,Io.height=t.height;let s=Io.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Io}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Tc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Zs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zs(n[i]/255)*255):n[i]=Zs(n[i]);return{data:n,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ow=0,Ko=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ow++}),this.uuid=Yc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Gg(s[r].image)):a.push(Gg(s[r]))}else a=Gg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Gg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?vf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var lw=0,kg=new X,Ln=class e extends xs{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=vs,s=vs,a=cn,r=Ts,o=Bi,l=vi,c=e.DEFAULT_ANISOTROPY,f=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lw++}),this.uuid=Yc(),this.name="",this.source=new Ko(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kg).x}get height(){return this.source.getSize(kg).y}get depth(){return this.source.getSize(kg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){zt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){zt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==w0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pf:t.x=t.x-Math.floor(t.x);break;case vs:t.x=t.x<0?0:1;break;case mf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pf:t.y=t.y-Math.floor(t.y);break;case vs:t.y=t.y<0?0:1;break;case mf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=w0;Ln.DEFAULT_ANISOTROPY=1;var We=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],v=l[9],b=l[2],m=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-b)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+b)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let M=(c+1)/2,y=(d+1)/2,T=(h+1)/2,E=(f+u)/4,A=(p+b)/4,x=(v+m)/4;return M>y&&M>T?M<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(M),s=E/i,a=A/i):y>T?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=E/s,a=x/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=A/a,s=x/a),this.set(i,s,a,n),this}let g=Math.sqrt((m-v)*(m-v)+(p-b)*(p-b)+(u-f)*(u-f));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(p-b)/g,this.z=(u-f)/g,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=le(this.x,t.x,n.x),this.y=le(this.y,t.y,n.y),this.z=le(this.z,t.z,n.z),this.w=le(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=le(this.x,t,n),this.y=le(this.y,t,n),this.z=le(this.z,t,n),this.w=le(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yf=class extends xs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new We(0,0,t,n),this.scissorTest=!1,this.viewport=new We(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new Ln(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Ko(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends yf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Ec=class extends Ln{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xf=class extends Ln{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Je=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,m)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,m){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=v,h[11]=b,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Oo.setFromMatrixColumn(t,0).length(),a=1/Oo.setFromMatrixColumn(t,1).length(),r=1/Oo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,v=o*f,b=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=v+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,v=c*f,b=c*p;n[0]=u+b*o,n[4]=v*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-v,n[6]=b+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,v=c*f,b=c*p;n[0]=u-b*o,n[4]=-r*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=r*f,n[9]=b-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,v=o*f,b=o*p;n[0]=l*f,n[4]=v*c-d,n[8]=u*c+b,n[1]=l*p,n[5]=b*c+u,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,v=o*l,b=o*c;n[0]=l*f,n[4]=b-u*p,n[8]=v*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+v,n[10]=u-b*p}else if(t.order==="XZY"){let u=r*l,d=r*c,v=o*l,b=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+b,n[5]=r*f,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*f,n[10]=b*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cw,t,uw)}lookAt(t,n,i){let s=this.elements;return pi.subVectors(t,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Na.crossVectors(i,pi),Na.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Na.crossVectors(i,pi)),Na.normalize(),Fh.crossVectors(pi,Na),s[0]=Na.x,s[4]=Fh.x,s[8]=pi.x,s[1]=Na.y,s[5]=Fh.y,s[9]=pi.y,s[2]=Na.z,s[6]=Fh.z,s[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],v=i[2],b=i[6],m=i[10],h=i[14],g=i[3],M=i[7],y=i[11],T=i[15],E=s[0],A=s[4],x=s[8],w=s[12],R=s[1],I=s[5],H=s[9],P=s[13],L=s[2],G=s[6],K=s[10],q=s[14],nt=s[3],W=s[7],$=s[11],it=s[15];return a[0]=r*E+o*R+l*L+c*nt,a[4]=r*A+o*I+l*G+c*W,a[8]=r*x+o*H+l*K+c*$,a[12]=r*w+o*P+l*q+c*it,a[1]=f*E+p*R+u*L+d*nt,a[5]=f*A+p*I+u*G+d*W,a[9]=f*x+p*H+u*K+d*$,a[13]=f*w+p*P+u*q+d*it,a[2]=v*E+b*R+m*L+h*nt,a[6]=v*A+b*I+m*G+h*W,a[10]=v*x+b*H+m*K+h*$,a[14]=v*w+b*P+m*q+h*it,a[3]=g*E+M*R+y*L+T*nt,a[7]=g*A+M*I+y*G+T*W,a[11]=g*x+M*H+y*K+T*$,a[15]=g*w+M*P+y*q+T*it,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],v=t[3],b=t[7],m=t[11],h=t[15],g=l*d-c*u,M=o*d-c*p,y=o*u-l*p,T=r*d-c*f,E=r*u-l*f,A=r*p-o*f;return n*(b*g-m*M+h*y)-i*(v*g-m*T+h*E)+s*(v*M-b*T+h*A)-a*(v*y-b*E+m*A)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(a*f-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],v=t[12],b=t[13],m=t[14],h=t[15],g=n*o-i*r,M=n*l-s*r,y=n*c-a*r,T=i*l-s*o,E=i*c-a*o,A=s*c-a*l,x=f*b-p*v,w=f*m-u*v,R=f*h-d*v,I=p*m-u*b,H=p*h-d*b,P=u*h-d*m,L=g*P-M*H+y*I+T*R-E*w+A*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/L;return t[0]=(o*P-l*H+c*I)*G,t[1]=(s*H-i*P-a*I)*G,t[2]=(b*A-m*E+h*T)*G,t[3]=(u*E-p*A-d*T)*G,t[4]=(l*R-r*P-c*w)*G,t[5]=(n*P-s*R+a*w)*G,t[6]=(m*y-v*A-h*M)*G,t[7]=(f*A-u*y+d*M)*G,t[8]=(r*H-o*R+c*x)*G,t[9]=(i*R-n*H-a*x)*G,t[10]=(v*E-b*y+h*g)*G,t[11]=(p*y-f*E-d*g)*G,t[12]=(o*w-r*I-l*x)*G,t[13]=(n*I-i*w+s*x)*G,t[14]=(b*M-v*T-m*g)*G,t[15]=(f*T-p*M+u*g)*G,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,v=a*p,b=r*f,m=r*p,h=o*p,g=l*c,M=l*f,y=l*p,T=i.x,E=i.y,A=i.z;return s[0]=(1-(b+h))*T,s[1]=(d+y)*T,s[2]=(v-M)*T,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(u+h))*E,s[6]=(m+g)*E,s[7]=0,s[8]=(v+M)*A,s[9]=(m-g)*A,s[10]=(1-(u+b))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Oo.set(s[0],s[1],s[2]).length(),o=Oo.set(s[4],s[5],s[6]).length(),l=Oo.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Wi.copy(this);let c=1/r,f=1/o,p=1/l;return Wi.elements[0]*=c,Wi.elements[1]*=c,Wi.elements[2]*=c,Wi.elements[4]*=f,Wi.elements[5]*=f,Wi.elements[6]*=f,Wi.elements[8]*=p,Wi.elements[9]*=p,Wi.elements[10]*=p,n.setFromRotationMatrix(Wi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Ji,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),v,b;if(l)v=a/(r-a),b=r*a/(r-a);else if(o===Ji)v=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===bc)v=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ji,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),v,b;if(l)v=1/(r-a),b=r/(r-a);else if(o===Ji)v=-2/(r-a),b=-(r+a)/(r-a);else if(o===bc)v=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Oo=new X,Wi=new Je,cw=new X(0,0,0),uw=new X(1,1,1),Na=new X,Fh=new X,pi=new X,UM=new Je,LM=new Ss,Pa=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-le(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-le(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return UM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(UM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return LM.setFromEuler(this),this.setFromQuaternion(LM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pa.DEFAULT_ORDER="XYZ";var Qo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hw=0,IM=new X,Po=new Ss,ks=new Je,Hh=new X,gc=new X,fw=new X,dw=new Ss,OM=new X(1,0,0),PM=new X(0,1,0),BM=new X(0,0,1),zM={type:"added"},pw={type:"removed"},Bo={type:"childadded",child:null},Xg={type:"childremoved",child:null},Oi=class e extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=Yc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new X,n=new Pa,i=new Ss,s=new X(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new qt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Po.setFromAxisAngle(t,n),this.quaternion.multiply(Po),this}rotateOnWorldAxis(t,n){return Po.setFromAxisAngle(t,n),this.quaternion.premultiply(Po),this}rotateX(t){return this.rotateOnAxis(OM,t)}rotateY(t){return this.rotateOnAxis(PM,t)}rotateZ(t){return this.rotateOnAxis(BM,t)}translateOnAxis(t,n){return IM.copy(t).applyQuaternion(this.quaternion),this.position.add(IM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(OM,t)}translateY(t){return this.translateOnAxis(PM,t)}translateZ(t){return this.translateOnAxis(BM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ks.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Hh.copy(t):Hh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),gc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ks.lookAt(gc,Hh,this.up):ks.lookAt(Hh,gc,this.up),this.quaternion.setFromRotationMatrix(ks),s&&(ks.extractRotation(s.matrixWorld),Po.setFromRotationMatrix(ks),this.quaternion.premultiply(Po.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zM),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(pw),Xg.child=t,this.dispatchEvent(Xg),Xg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ks.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ks.multiply(t.parent.matrixWorld)),t.applyMatrix4(ks),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zM),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gc,t,fw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gc,dw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oi.DEFAULT_UP=new X(0,1,0);Oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mr=class extends Oi{constructor(){super(),this.isGroup=!0,this.type="Group"}},mw={type:"move"},jo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let b of t.hand.values()){let m=n.getJointPose(b,i),h=this._getHandJoint(c,b);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mw)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Mr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},Lb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Da={h:0,s:0,l:0},Vh={h:0,s:0,l:0};function Wg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var ue=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=re.workingColorSpace){return this.r=t,this.g=n,this.b=i,re.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=re.workingColorSpace){if(t=aw(t,1),n=le(n,0,1),i=le(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Wg(r,a,t+1/3),this.g=Wg(r,a,t),this.b=Wg(r,a,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,n=gi){function i(a){a!==void 0&&parseFloat(a)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=gi){let i=Lb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}copyLinearToSRGB(t){return this.r=Yo(t.r),this.g=Yo(t.g),this.b=Yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return re.workingToColorSpace(Dn.copy(this),t),Math.round(le(Dn.r*255,0,255))*65536+Math.round(le(Dn.g*255,0,255))*256+Math.round(le(Dn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=re.workingColorSpace){re.workingToColorSpace(Dn.copy(this),n);let i=Dn.r,s=Dn.g,a=Dn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=re.workingColorSpace){return re.workingToColorSpace(Dn.copy(this),n),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=gi){re.workingToColorSpace(Dn.copy(this),t);let n=Dn.r,i=Dn.g,s=Dn.b;return t!==gi?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Da),this.setHSL(Da.h+t,Da.s+n,Da.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Da),t.getHSL(Vh);let i=Fg(Da.h,Vh.h,n),s=Fg(Da.s,Vh.s,n),a=Fg(Da.l,Vh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new ue;ue.NAMES=Lb;var Ac=class extends Oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pa,this.environmentIntensity=1,this.environmentRotation=new Pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},qi=new X,Xs=new X,qg=new X,Ws=new X,zo=new X,Fo=new X,FM=new X,Yg=new X,Zg=new X,Jg=new X,Kg=new We,Qg=new We,jg=new We,Oa=class e{constructor(t=new X,n=new X,i=new X){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),qi.subVectors(t,n),s.cross(qi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){qi.subVectors(s,n),Xs.subVectors(i,n),qg.subVectors(t,n);let r=qi.dot(qi),o=qi.dot(Xs),l=qi.dot(qg),c=Xs.dot(Xs),f=Xs.dot(qg),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,v=(r*f-o*l)*u;return a.set(1-d-v,v,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ws)===null?!1:Ws.x>=0&&Ws.y>=0&&Ws.x+Ws.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ws)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ws.x),l.addScaledVector(r,Ws.y),l.addScaledVector(o,Ws.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Kg.setScalar(0),Qg.setScalar(0),jg.setScalar(0),Kg.fromBufferAttribute(t,n),Qg.fromBufferAttribute(t,i),jg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Kg,a.x),r.addScaledVector(Qg,a.y),r.addScaledVector(jg,a.z),r}static isFrontFacing(t,n,i,s){return qi.subVectors(i,n),Xs.subVectors(t,n),qi.cross(Xs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qi.subVectors(this.c,this.b),Xs.subVectors(this.a,this.b),qi.cross(Xs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;zo.subVectors(s,i),Fo.subVectors(a,i),Yg.subVectors(t,i);let l=zo.dot(Yg),c=Fo.dot(Yg);if(l<=0&&c<=0)return n.copy(i);Zg.subVectors(t,s);let f=zo.dot(Zg),p=Fo.dot(Zg);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(zo,r);Jg.subVectors(t,a);let d=zo.dot(Jg),v=Fo.dot(Jg);if(v>=0&&d<=v)return n.copy(a);let b=d*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Fo,o);let m=f*v-d*p;if(m<=0&&p-f>=0&&d-v>=0)return FM.subVectors(a,s),o=(p-f)/(p-f+(d-v)),n.copy(s).addScaledVector(FM,o);let h=1/(m+b+u);return r=b*h,o=u*h,n.copy(i).addScaledVector(zo,r).addScaledVector(Fo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ba=class{constructor(t=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Yi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Yi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Yi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Yi):Yi.fromBufferAttribute(a,r),Yi.applyMatrix4(t.matrixWorld),this.expandByPoint(Yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gh.copy(i.boundingBox)),Gh.applyMatrix4(t.matrixWorld),this.union(Gh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yi),Yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_c),kh.subVectors(this.max,_c),Ho.subVectors(t.a,_c),Vo.subVectors(t.b,_c),Go.subVectors(t.c,_c),Ua.subVectors(Vo,Ho),La.subVectors(Go,Vo),vr.subVectors(Ho,Go);let n=[0,-Ua.z,Ua.y,0,-La.z,La.y,0,-vr.z,vr.y,Ua.z,0,-Ua.x,La.z,0,-La.x,vr.z,0,-vr.x,-Ua.y,Ua.x,0,-La.y,La.x,0,-vr.y,vr.x,0];return!$g(n,Ho,Vo,Go,kh)||(n=[1,0,0,0,1,0,0,0,1],!$g(n,Ho,Vo,Go,kh))?!1:(Xh.crossVectors(Ua,La),n=[Xh.x,Xh.y,Xh.z],$g(n,Ho,Vo,Go,kh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qs=[new X,new X,new X,new X,new X,new X,new X,new X],Yi=new X,Gh=new Ba,Ho=new X,Vo=new X,Go=new X,Ua=new X,La=new X,vr=new X,_c=new X,kh=new X,Xh=new X,yr=new X;function $g(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){yr.fromArray(e,a);let o=s.x*Math.abs(yr.x)+s.y*Math.abs(yr.y)+s.z*Math.abs(yr.z),l=t.dot(yr),c=n.dot(yr),f=i.dot(yr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var nn=new X,Wh=new ce,gw=0,Li=class extends xs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gw++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Cb,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wh.fromBufferAttribute(this,n),Wh.applyMatrix3(t),this.setXY(n,Wh.x,Wh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix3(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=mc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=mc(n,this.array)),n}setX(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=mc(n,this.array)),n}setY(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=mc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=mc(n,this.array)),n}setW(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),i=ti(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),i=ti(i,this.array),s=ti(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),i=ti(i,this.array),s=ti(s,this.array),a=ti(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var wc=class extends Li{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Cc=class extends Li{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Ii=class extends Li{constructor(t,n,i){super(new Float32Array(t),n,i)}},_w=new Ba,vc=new X,t0=new X,$o=class{constructor(t=new X,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):_w.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vc.subVectors(t,this.center);let n=vc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(vc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(t0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vc.copy(t.center).add(t0)),this.expandByPoint(vc.copy(t.center).sub(t0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vw=0,Ui=new Je,e0=new Oi,ko=new X,mi=new Ba,yc=new Ba,gn=new X,Ms=class e extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=Yc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iw(t)?Cc:wc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new qt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,n,i){return Ui.makeTranslation(t,n,i),this.applyMatrix4(Ui),this}scale(t,n,i){return Ui.makeScale(t,n,i),this.applyMatrix4(Ui),this}lookAt(t){return e0.lookAt(t),e0.updateMatrix(),this.applyMatrix4(e0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ko).negate(),this.translate(ko.x,ko.y,ko.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ii(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ba);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];mi.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let i=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];yc.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(mi.min,yc.min),mi.expandByPoint(gn),gn.addVectors(mi.max,yc.max),mi.expandByPoint(gn)):(mi.expandByPoint(yc.min),mi.expandByPoint(yc.max))}mi.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)gn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(gn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)gn.fromBufferAttribute(o,c),l&&(ko.fromBufferAttribute(t,c),gn.add(ko)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Li(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new X,l[x]=new X;let c=new X,f=new X,p=new X,u=new ce,d=new ce,v=new ce,b=new X,m=new X;function h(x,w,R){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,w),p.fromBufferAttribute(i,R),u.fromBufferAttribute(a,x),d.fromBufferAttribute(a,w),v.fromBufferAttribute(a,R),f.sub(c),p.sub(c),d.sub(u),v.sub(u);let I=1/(d.x*v.y-v.x*d.y);isFinite(I)&&(b.copy(f).multiplyScalar(v.y).addScaledVector(p,-d.y).multiplyScalar(I),m.copy(p).multiplyScalar(d.x).addScaledVector(f,-v.x).multiplyScalar(I),o[x].add(b),o[w].add(b),o[R].add(b),l[x].add(m),l[w].add(m),l[R].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let x=0,w=g.length;x<w;++x){let R=g[x],I=R.start,H=R.count;for(let P=I,L=I+H;P<L;P+=3)h(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let M=new X,y=new X,T=new X,E=new X;function A(x){T.fromBufferAttribute(s,x),E.copy(T);let w=o[x];M.copy(w),M.sub(T.multiplyScalar(T.dot(w))).normalize(),y.crossVectors(E,w);let I=y.dot(l[x])<0?-1:1;r.setXYZW(x,M.x,M.y,M.z,I)}for(let x=0,w=g.length;x<w;++x){let R=g[x],I=R.start,H=R.count;for(let P=I,L=I+H;P<L;P+=3)A(t.getX(P+0)),A(t.getX(P+1)),A(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new X,a=new X,r=new X,o=new X,l=new X,c=new X,f=new X,p=new X;if(t)for(let u=0,d=t.count;u<d;u+=3){let v=t.getX(u+0),b=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,b),r.fromBufferAttribute(n,m),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)gn.fromBufferAttribute(t,n),gn.normalize(),t.setXYZ(n,gn.x,gn.y,gn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,v=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*f;for(let h=0;h<f;h++)u[v++]=c[d++]}return new Li(u,f,p)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var n0=new X,yw=new X,xw=new qt,Zi=class{constructor(t=new X(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=n0.subVectors(i,n).cross(yw.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(n0),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||xw.getNormalMatrix(t),s=this.coplanarPoint(n0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Sw=0,Tr=class extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sw++}),this.uuid=Yc(),this.name="",this.type="Material",this.blending=il,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_0,this.blendDst=v0,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rf,this.stencilZFail=rf,this.stencilZPass=rf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){zt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){zt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Zi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ce().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ys=new X,i0=new X,qh=new X,Yh=new X,Rc=class{constructor(t=new X,n=new X(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ys)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ys.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ys.copy(this.origin).addScaledVector(this.direction,n),Ys.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){i0.copy(t).add(n).multiplyScalar(.5),qh.copy(n).sub(t).normalize(),Yh.copy(this.origin).sub(i0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(qh),o=Yh.dot(this.direction),l=-Yh.dot(qh),c=Yh.lengthSq(),f=Math.abs(1-r*r),p,u,d,v;if(f>0)if(p=r*l-o,u=r*o-l,v=a*f,p>=0)if(u>=-v)if(u<=v){let b=1/f;p*=b,u*=b,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(i0).addScaledVector(qh,u),d}intersectSphere(t,n){if(t.radius<0)return null;Ys.subVectors(t.center,this.origin);let i=Ys.dot(this.direction),s=Ys.dot(Ys)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ys)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,v=n.x-r.x,b=n.y-r.y,m=n.z-r.z,h=i.x-r.x,g=i.y-r.y,M=i.z-r.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(f),A,x,w,R,I,H,P,L,G,K,q,nt;if(y>=T&&y>=E?(w=l,H=p,G=v,nt=h,l>=0?(A=c,x=f,R=u,I=d,P=b,L=m,K=g,q=M):(A=f,x=c,R=d,I=u,P=m,L=b,K=M,q=g)):T>=E?(w=c,H=u,G=b,nt=g,c>=0?(A=f,x=l,R=d,I=p,P=m,L=v,K=M,q=h):(A=l,x=f,R=p,I=d,P=v,L=m,K=h,q=M)):(w=f,H=d,G=m,nt=M,f>=0?(A=l,x=c,R=p,I=u,P=v,L=b,K=h,q=g):(A=c,x=l,R=u,I=p,P=b,L=v,K=g,q=h)),w===0)return null;let W=A/w,$=x/w,it=1/w,Ct=R-W*H,St=I-$*H,Qt=P-W*G,Yt=L-$*G,ne=K-W*nt,Y=q-$*nt,tt=ne*Yt-Y*Qt,xt=Ct*Y-St*ne,Ot=Qt*St-Yt*Ct;if(s){if(tt<0||xt<0||Ot<0)return null}else if((tt<0||xt<0||Ot<0)&&(tt>0||xt>0||Ot>0))return null;let gt=tt+xt+Ot;if(gt===0)return null;let Ht=it*(tt*H+xt*G+Ot*nt);return(gt>0?Ht<0:Ht>0)?null:this.at(Ht/gt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nc=class extends Tr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.combine=y0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},HM=new Je,xr=new Rc,Zh=new $o,VM=new X,Jh=new X,Kh=new X,Qh=new X,s0=new X,jh=new X,GM=new X,$h=new X,Xn=class extends Oi{constructor(t=new Ms,n=new Nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){jh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(s0.fromBufferAttribute(p,t),r?jh.addScaledVector(s0,f):jh.addScaledVector(s0.sub(n),f))}n.add(jh)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zh.copy(i.boundingSphere),Zh.applyMatrix4(a),xr.copy(t.ray).recast(t.near),!(Zh.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Zh,VM)===null||xr.origin.distanceToSquared(VM)>(t.far-t.near)**2))&&(HM.copy(a).invert(),xr.copy(t.ray).applyMatrix4(HM),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,xr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let m=u[v],h=r[m.materialIndex],g=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=g,T=M;y<T;y+=3){let E=o.getX(y),A=o.getX(y+1),x=o.getX(y+2);s=tf(this,h,t,i,c,f,p,E,A,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let m=v,h=b;m<h;m+=3){let g=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);s=tf(this,r,t,i,c,f,p,g,M,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let m=u[v],h=r[m.materialIndex],g=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=g,T=M;y<T;y+=3){let E=y,A=y+1,x=y+2;s=tf(this,h,t,i,c,f,p,E,A,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=v,h=b;m<h;m+=3){let g=m,M=m+1,y=m+2;s=tf(this,r,t,i,c,f,p,g,M,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function Mw(e,t,n,i,s,a,r,o){let l;if(t.side===qn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Ga,o),l===null)return null;$h.copy(o),$h.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo($h);return c<n.near||c>n.far?null:{distance:c,point:$h.clone(),object:e}}function tf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Jh),e.getVertexPosition(l,Kh),e.getVertexPosition(c,Qh);let f=Mw(e,t,n,i,Jh,Kh,Qh,GM);if(f){let p=new X;Oa.getBarycoord(GM,Jh,Kh,Qh,p),s&&(f.uv=Oa.getInterpolatedAttribute(s,o,l,c,p,new ce)),a&&(f.uv1=Oa.getInterpolatedAttribute(a,o,l,c,p,new ce)),r&&(f.normal=Oa.getInterpolatedAttribute(r,o,l,c,p,new X),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new X,materialIndex:0};Oa.getNormal(Jh,Kh,Qh,u.normal),f.face=u,f.barycoord=p}return f}var tl=class extends Ln{constructor(t=null,n=1,i=1,s,a,r,o,l,c=_n,f=_n,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sr=new $o,bw=new ce(.5,.5),ef=new X,Dc=class{constructor(t=new Zi,n=new Zi,i=new Zi,s=new Zi,a=new Zi,r=new Zi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ji,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],v=a[8],b=a[9],m=a[10],h=a[11],g=a[12],M=a[13],y=a[14],T=a[15];if(s[0].setComponents(c-r,d-f,h-v,T-g).normalize(),s[1].setComponents(c+r,d+f,h+v,T+g).normalize(),s[2].setComponents(c+o,d+p,h+b,T+M).normalize(),s[3].setComponents(c-o,d-p,h-b,T-M).normalize(),i)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,d-u,h-m,T-y).normalize();else if(s[4].setComponents(c-l,d-u,h-m,T-y).normalize(),n===Ji)s[5].setComponents(c+l,d+u,h+m,T+y).normalize();else if(n===bc)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(t){Sr.center.set(0,0,0);let n=bw.distanceTo(t.center);return Sr.radius=.7071067811865476+n,Sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(ef.x=s.normal.x>0?t.max.x:t.min.x,ef.y=s.normal.y>0?t.max.y:t.min.y,ef.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ef)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Uc=class extends Ln{constructor(t=[],n=ka,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var za=class extends Ln{constructor(t,n,i=Qi,s,a,r,o=_n,l=_n,c,f=ys,p=1){if(f!==ys&&f!==Xa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ko(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},Sf=class extends za{constructor(t,n=Qi,i=ka,s,a,r=_n,o=_n,l,c=ys){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Lc=class extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},el=class e extends Ms{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(f,3)),this.setAttribute("uv",new Ii(p,2));function v(b,m,h,g,M,y,T,E,A,x,w){let R=y/A,I=T/x,H=y/2,P=T/2,L=E/2,G=A+1,K=x+1,q=0,nt=0,W=new X;for(let $=0;$<K;$++){let it=$*I-P;for(let Ct=0;Ct<G;Ct++){let St=Ct*R-H;W[b]=St*g,W[m]=it*M,W[h]=L,c.push(W.x,W.y,W.z),W[b]=0,W[m]=0,W[h]=E>0?1:-1,f.push(W.x,W.y,W.z),p.push(Ct/A),p.push(1-$/x),q+=1}}for(let $=0;$<x;$++)for(let it=0;it<A;it++){let Ct=u+it+G*$,St=u+it+G*($+1),Qt=u+(it+1)+G*($+1),Yt=u+(it+1)+G*$;l.push(Ct,St,Yt),l.push(St,Qt,Yt),nt+=6}o.addGroup(d,nt,w),d+=nt,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Er=class e extends Ms{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],v=[],b=[],m=[];for(let h=0;h<f;h++){let g=h*u-r;for(let M=0;M<c;M++){let y=M*p-a;v.push(y,-g,0),b.push(0,0,1),m.push(M/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){let M=g+c*h,y=g+c*(h+1),T=g+1+c*(h+1),E=g+1+c*h;d.push(M,y,E),d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new Ii(v,3)),this.setAttribute("normal",new Ii(b,3)),this.setAttribute("uv",new Ii(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Cr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(kM(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(kM(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function In(e){let t={};for(let n=0;n<e.length;n++){let i=Cr(e[n]);for(let s in i)t[s]=i[s]}return t}function kM(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Tw(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function z0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var Ib={clone:Cr,merge:In},Ew=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Aw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wn=class extends Tr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ew,this.fragmentShader=Aw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cr(t.uniforms),this.uniformsGroups=Tw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new ue().setHex(s.value);break;case"v2":this.uniforms[i].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new We().fromArray(s.value);break;case"m3":this.uniforms[i].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Je().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Mf=class extends Wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var bf=class extends Tr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Tf=class extends Tr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Xo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function a0(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Fa=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ef=class extends Fa{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:o0,endingEnd:o0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case l0:a=t,o=2*n-i;break;case c0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case l0:r=t,l=2*i-n;break;case c0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,v=(i-n)/(s-n),b=v*v,m=b*v,h=-u*m+2*u*b-u*v,g=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*v+1,M=(-1-d)*m+(1.5+d)*b+.5*v,y=d*m-d*b;for(let T=0;T!==o;++T)a[T]=h*r[f+T]+g*r[c+T]+M*r[l+T]+y*r[p+T];return a}},Af=class extends Fa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},wf=class extends Fa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Cf=class extends Fa{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let v=(i-n)/(s-n),b=1-v;for(let m=0;m!==o;++m)a[m]=r[c+m]*b+r[l+m]*v;return a}let u=o*2,d=t-1;for(let v=0;v!==o;++v){let b=r[c+v],m=r[l+v],h=d*u+v*2,g=p[h],M=p[h+1],y=t*u+v*2,T=f[y],E=f[y+1],A=Cw(i,n,g,T,s);a[v]=Ob(A,b,M,E,m)}return a}};function Ob(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function ww(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function Cw(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=Ob(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=ww(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var _i=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xo(n,this.TimeBufferType),this.values=Xo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Xo(t.times,Array),values:Xo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),a0(t.settings)&&(i.settings={inTangents:Xo(t.settings.inTangents,Array),outTangents:Xo(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new wf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Af(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ef(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Cf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case xc:n=this.InterpolantFactoryMethodDiscrete;break;case gf:n=this.InterpolantFactoryMethodLinear;break;case af:n=this.InterpolantFactoryMethodSmooth;break;case r0:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xc;case this.InterpolantFactoryMethodLinear:return gf;case this.InterpolantFactoryMethodSmooth:return af;case this.InterpolantFactoryMethodBezier:return r0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;a0(this.settings)&&(XM(this.settings.inTangents,t),XM(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Bt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Bt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&sw(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Bt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===af,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let v=0;v!==i;++v){let b=n[p+v];if(b!==n[u+v]||b!==n[d+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,a0(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function XM(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=gf;var Ha=class extends _i{constructor(t,n,i){super(t,n,i)}};Ha.prototype.ValueTypeName="bool";Ha.prototype.ValueBufferType=Array;Ha.prototype.DefaultInterpolation=xc;Ha.prototype.InterpolantFactoryMethodLinear=void 0;Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Rf=class extends _i{constructor(t,n,i,s){super(t,n,i,s)}};Rf.prototype.ValueTypeName="color";var Nf=class extends _i{constructor(t,n,i,s){super(t,n,i,s)}};Nf.prototype.ValueTypeName="number";var Df=class extends Fa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)Ss.slerpFlat(a,0,r,c-o,r,c,l);return a}},Ic=class extends _i{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Df(this.times,this.values,this.getValueSize(),t)}};Ic.prototype.ValueTypeName="quaternion";Ic.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends _i{constructor(t,n,i){super(t,n,i)}};Va.prototype.ValueTypeName="string";Va.prototype.ValueBufferType=Array;Va.prototype.DefaultInterpolation=xc;Va.prototype.InterpolantFactoryMethodLinear=void 0;Va.prototype.InterpolantFactoryMethodSmooth=void 0;var Uf=class extends _i{constructor(t,n,i,s){super(t,n,i,s)}};Uf.prototype.ValueTypeName="vector";var Lf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],v=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pb=new Lf,If=class{constructor(t){this.manager=t!==void 0?t:Pb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};If.DEFAULT_MATERIAL_NAME="__DEFAULT";var nf=new X,sf=new Ss,_s=new X,Oc=class extends Oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(nf,sf,_s),_s.x===1&&_s.y===1&&_s.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nf,sf,_s.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(nf,sf,_s),_s.x===1&&_s.y===1&&_s.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nf,sf,_s.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ia=new X,WM=new ce,qM=new ce,Un=class extends Oc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=_f*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _f*2*Math.atan(Math.tan(zg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-t/Ia.z)}getViewSize(t,n){return this.getViewBounds(t,WM,qM),n.subVectors(qM,WM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(zg*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Pc=class extends Oc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Wo=-90,qo=1,Of=class extends Oi{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Un(Wo,qo,t,n);s.layers=this.layers,this.add(s);let a=new Un(Wo,qo,t,n);a.layers=this.layers,this.add(a);let r=new Un(Wo,qo,t,n);r.layers=this.layers,this.add(r);let o=new Un(Wo,qo,t,n);o.layers=this.layers,this.add(o);let l=new Un(Wo,qo,t,n);l.layers=this.layers,this.add(l);let c=new Un(Wo,qo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Pf=class extends Un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var F0="\\[\\]\\.:\\/",Rw=new RegExp("["+F0+"]","g"),H0="[^"+F0+"]",Nw="[^"+F0.replace("\\.","")+"]",Dw=/((?:WC+[\/:])*)/.source.replace("WC",H0),Uw=/(WCOD+)?/.source.replace("WCOD",Nw),Lw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",H0),Iw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",H0),Ow=new RegExp("^"+Dw+Uw+Lw+Iw+"$"),Pw=["material","materials","bones","map"],u0=class{constructor(t,n,i){let s=i||Ve.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ve=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rw,"")}static parseTrackName(t){let n=Ow.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);Pw.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Bt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=u0;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $N=new Float32Array(1);var YM=new Je,Bc=class{constructor(t,n,i=0,s=1/0){this.ray=new Rc(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Bt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return YM.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(YM),this}intersectObject(t,n=!0,i=[]){return h0(t,this,i,n),i.sort(ZM),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)h0(t[s],this,i,n);return i.sort(ZM),i}};function ZM(e,t){return e.distance-t.distance}function h0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)h0(a[r],t,n,!0)}}var f0=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function V0(e,t,n,i){let s=Bw(i);switch(n){case U0:return e*t;case I0:return e*t/s.components*s.byteLength;case kf:return e*t/s.components*s.byteLength;case Wa:return e*t*2/s.components*s.byteLength;case Xf:return e*t*2/s.components*s.byteLength;case L0:return e*t*3/s.components*s.byteLength;case Bi:return e*t*4/s.components*s.byteLength;case Wf:return e*t*4/s.components*s.byteLength;case Vc:case Gc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case kc:case Xc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Yf:case Jf:return Math.max(e,16)*Math.max(t,8)/4;case qf:case Zf:return Math.max(e,8)*Math.max(t,8)/2;case Kf:case Qf:case $f:case td:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case jf:case Wc:case ed:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case nd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case id:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case sd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ad:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case rd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case od:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ld:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case cd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ud:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case hd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case fd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case dd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case pd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case md:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case gd:case _d:case vd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case yd:case xd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case qc:case Sd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Bw(e){switch(e){case vi:case C0:return{byteLength:1,components:1};case sl:case R0:case $i:return{byteLength:2,components:1};case Vf:case Gf:return{byteLength:2,components:4};case Qi:case Hf:case ji:return{byteLength:4,components:1};case N0:case D0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function s1(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function Fw(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){let v=p[u],b=p[d];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++u,p[u]=b)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){let b=p[d];e.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var Hw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ww=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$w=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gC="gl_FragColor = linearToOutputTexel( gl_FragColor );",_C=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,SC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,UC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,LC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GC=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,kC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$C=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_R=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ER=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,HR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,KR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$R=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,e3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Hw,alphahash_pars_fragment:Vw,alphamap_fragment:Gw,alphamap_pars_fragment:kw,alphatest_fragment:Xw,alphatest_pars_fragment:Ww,aomap_fragment:qw,aomap_pars_fragment:Yw,batching_pars_vertex:Zw,batching_vertex:Jw,begin_vertex:Kw,beginnormal_vertex:Qw,bsdfs:jw,iridescence_fragment:$w,bumpmap_pars_fragment:tC,clipping_planes_fragment:eC,clipping_planes_pars_fragment:nC,clipping_planes_pars_vertex:iC,clipping_planes_vertex:sC,color_fragment:aC,color_pars_fragment:rC,color_pars_vertex:oC,color_vertex:lC,common:cC,cube_uv_reflection_fragment:uC,defaultnormal_vertex:hC,displacementmap_pars_vertex:fC,displacementmap_vertex:dC,emissivemap_fragment:pC,emissivemap_pars_fragment:mC,colorspace_fragment:gC,colorspace_pars_fragment:_C,envmap_fragment:vC,envmap_common_pars_fragment:yC,envmap_pars_fragment:xC,envmap_pars_vertex:SC,envmap_physical_pars_fragment:UC,envmap_vertex:MC,fog_vertex:bC,fog_pars_vertex:TC,fog_fragment:EC,fog_pars_fragment:AC,gradientmap_pars_fragment:wC,lightmap_pars_fragment:CC,lights_lambert_fragment:RC,lights_lambert_pars_fragment:NC,lights_pars_begin:DC,lights_toon_fragment:LC,lights_toon_pars_fragment:IC,lights_phong_fragment:OC,lights_phong_pars_fragment:PC,lights_physical_fragment:BC,lights_physical_pars_fragment:zC,lights_fragment_begin:FC,lights_fragment_maps:HC,lights_fragment_end:VC,lightprobes_pars_fragment:GC,logdepthbuf_fragment:kC,logdepthbuf_pars_fragment:XC,logdepthbuf_pars_vertex:WC,logdepthbuf_vertex:qC,map_fragment:YC,map_pars_fragment:ZC,map_particle_fragment:JC,map_particle_pars_fragment:KC,metalnessmap_fragment:QC,metalnessmap_pars_fragment:jC,morphinstance_vertex:$C,morphcolor_vertex:tR,morphnormal_vertex:eR,morphtarget_pars_vertex:nR,morphtarget_vertex:iR,normal_fragment_begin:sR,normal_fragment_maps:aR,normal_pars_fragment:rR,normal_pars_vertex:oR,normal_vertex:lR,normalmap_pars_fragment:cR,clearcoat_normal_fragment_begin:uR,clearcoat_normal_fragment_maps:hR,clearcoat_pars_fragment:fR,iridescence_pars_fragment:dR,opaque_fragment:pR,packing:mR,premultiplied_alpha_fragment:gR,project_vertex:_R,dithering_fragment:vR,dithering_pars_fragment:yR,roughnessmap_fragment:xR,roughnessmap_pars_fragment:SR,shadowmap_pars_fragment:MR,shadowmap_pars_vertex:bR,shadowmap_vertex:TR,shadowmask_pars_fragment:ER,skinbase_vertex:AR,skinning_pars_vertex:wR,skinning_vertex:CR,skinnormal_vertex:RR,specularmap_fragment:NR,specularmap_pars_fragment:DR,tonemapping_fragment:UR,tonemapping_pars_fragment:LR,transmission_fragment:IR,transmission_pars_fragment:OR,uv_pars_fragment:PR,uv_pars_vertex:BR,uv_vertex:zR,worldpos_vertex:FR,background_vert:HR,background_frag:VR,backgroundCube_vert:GR,backgroundCube_frag:kR,cube_vert:XR,cube_frag:WR,depth_vert:qR,depth_frag:YR,distance_vert:ZR,distance_frag:JR,equirect_vert:KR,equirect_frag:QR,linedashed_vert:jR,linedashed_frag:$R,meshbasic_vert:t3,meshbasic_frag:e3,meshlambert_vert:n3,meshlambert_frag:i3,meshmatcap_vert:s3,meshmatcap_frag:a3,meshnormal_vert:r3,meshnormal_frag:o3,meshphong_vert:l3,meshphong_frag:c3,meshphysical_vert:u3,meshphysical_frag:h3,meshtoon_vert:f3,meshtoon_frag:d3,points_vert:p3,points_frag:m3,shadow_vert:g3,shadow_frag:_3,sprite_vert:v3,sprite_frag:y3},_t={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},As={basic:{uniforms:In([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:In([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:In([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:In([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:In([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ue(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:In([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:In([_t.points,_t.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:In([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:In([_t.common,_t.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:In([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:In([_t.sprite,_t.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:In([_t.common,_t.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:In([_t.lights,_t.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};As.physical={uniforms:In([As.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Td={r:0,b:0,g:0},x3=new Je,a1=new qt;a1.set(-1,0,0,0,1,0,0,0,1);function S3(e,t,n,i,s,a){let r=new ue(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(g){let M=g.isScene===!0?g.background:null;if(M&&M.isTexture){let y=g.backgroundBlurriness>0;M=t.get(M,y)}return M}function v(g){let M=!1,y=d(g);y===null?m(r,o):y&&y.isColor&&(m(y,1),M=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(g,M){let y=d(M);y&&(y.isCubeTexture||y.mapping===Fc)?(c===void 0&&(c=new Xn(new el(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Cr(As.backgroundCube.uniforms),vertexShader:As.backgroundCube.vertexShader,fragmentShader:As.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(x3.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(a1),c.material.toneMapped=re.getTransfer(y.colorSpace)!==ye,(f!==y||p!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Xn(new Er(2,2),new Wn({name:"BackgroundMaterial",uniforms:Cr(As.background.uniforms),vertexShader:As.background.vertexShader,fragmentShader:As.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=re.getTransfer(y.colorSpace)!==ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,M){g.getRGB(Td,z0(e)),n.buffers.color.setClear(Td.r,Td.g,Td.b,M,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(g,M=1){r.set(g),o=M,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(r,o)},render:v,addToRenderList:b,dispose:h}}function M3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(I,H,P,L,G){let K=!1,q=p(I,L,P,H);a!==q&&(a=q,c(a.object)),K=d(I,L,P,G),K&&v(I,L,P,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,y(I,H,P,L),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function f(I){return e.deleteVertexArray(I)}function p(I,H,P,L){let G=L.wireframe===!0,K=i[H.id];K===void 0&&(K={},i[H.id]=K);let q=I.isInstancedMesh===!0?I.id:0,nt=K[q];nt===void 0&&(nt={},K[q]=nt);let W=nt[P.id];W===void 0&&(W={},nt[P.id]=W);let $=W[G];return $===void 0&&($=u(l()),W[G]=$),$}function u(I){let H=[],P=[],L=[];for(let G=0;G<n;G++)H[G]=0,P[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:P,attributeDivisors:L,object:I,attributes:{},index:null}}function d(I,H,P,L){let G=a.attributes,K=H.attributes,q=0,nt=P.getAttributes();for(let W in nt)if(nt[W].location>=0){let it=G[W],Ct=K[W];if(Ct===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(Ct=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(Ct=I.instanceColor)),it===void 0||it.attribute!==Ct||Ct&&it.data!==Ct.data)return!0;q++}return a.attributesNum!==q||a.index!==L}function v(I,H,P,L){let G={},K=H.attributes,q=0,nt=P.getAttributes();for(let W in nt)if(nt[W].location>=0){let it=K[W];it===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(it=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(it=I.instanceColor));let Ct={};Ct.attribute=it,it&&it.data&&(Ct.data=it.data),G[W]=Ct,q++}a.attributes=G,a.attributesNum=q,a.index=L}function b(){let I=a.newAttributes;for(let H=0,P=I.length;H<P;H++)I[H]=0}function m(I){h(I,0)}function h(I,H){let P=a.newAttributes,L=a.enabledAttributes,G=a.attributeDivisors;P[I]=1,L[I]===0&&(e.enableVertexAttribArray(I),L[I]=1),G[I]!==H&&(e.vertexAttribDivisor(I,H),G[I]=H)}function g(){let I=a.newAttributes,H=a.enabledAttributes;for(let P=0,L=H.length;P<L;P++)H[P]!==I[P]&&(e.disableVertexAttribArray(P),H[P]=0)}function M(I,H,P,L,G,K,q){q===!0?e.vertexAttribIPointer(I,H,P,G,K):e.vertexAttribPointer(I,H,P,L,G,K)}function y(I,H,P,L){b();let G=L.attributes,K=P.getAttributes(),q=H.defaultAttributeValues;for(let nt in K){let W=K[nt];if(W.location>=0){let $=G[nt];if($===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){let it=$.normalized,Ct=$.itemSize,St=t.get($);if(St===void 0)continue;let Qt=St.buffer,Yt=St.type,ne=St.bytesPerElement,Y=Yt===e.INT||Yt===e.UNSIGNED_INT||$.gpuType===Hf;if($.isInterleavedBufferAttribute){let tt=$.data,xt=tt.stride,Ot=$.offset;if(tt.isInstancedInterleavedBuffer){for(let gt=0;gt<W.locationSize;gt++)h(W.location+gt,tt.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let gt=0;gt<W.locationSize;gt++)m(W.location+gt);e.bindBuffer(e.ARRAY_BUFFER,Qt);for(let gt=0;gt<W.locationSize;gt++)M(W.location+gt,Ct/W.locationSize,Yt,it,xt*ne,(Ot+Ct/W.locationSize*gt)*ne,Y)}else{if($.isInstancedBufferAttribute){for(let tt=0;tt<W.locationSize;tt++)h(W.location+tt,$.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let tt=0;tt<W.locationSize;tt++)m(W.location+tt);e.bindBuffer(e.ARRAY_BUFFER,Qt);for(let tt=0;tt<W.locationSize;tt++)M(W.location+tt,Ct/W.locationSize,Yt,it,Ct*ne,Ct/W.locationSize*tt*ne,Y)}}else if(q!==void 0){let it=q[nt];if(it!==void 0)switch(it.length){case 2:e.vertexAttrib2fv(W.location,it);break;case 3:e.vertexAttrib3fv(W.location,it);break;case 4:e.vertexAttrib4fv(W.location,it);break;default:e.vertexAttrib1fv(W.location,it)}}}}g()}function T(){w();for(let I in i){let H=i[I];for(let P in H){let L=H[P];for(let G in L){let K=L[G];for(let q in K)f(K[q].object),delete K[q];delete L[G]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;let H=i[I.id];for(let P in H){let L=H[P];for(let G in L){let K=L[G];for(let q in K)f(K[q].object),delete K[q];delete L[G]}}delete i[I.id]}function A(I){for(let H in i){let P=i[H];for(let L in P){let G=P[L];if(G[I.id]===void 0)continue;let K=G[I.id];for(let q in K)f(K[q].object),delete K[q];delete G[I.id]}}}function x(I){for(let H in i){let P=i[H],L=I.isInstancedMesh===!0?I.id:0,G=P[L];if(G!==void 0){for(let K in G){let q=G[K];for(let nt in q)f(q[nt].object),delete q[nt];delete G[K]}delete P[L],Object.keys(P).length===0&&delete i[H]}}}function w(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:m,disableUnusedAttributes:g}}function b3(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function T3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==Bi&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===$i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==vi&&A!==ji&&!x&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(zt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:M,maxFragmentUniforms:y,maxSamples:T,samples:E}}function E3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Zi,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let v=p.clippingPlanes,b=p.clipIntersection,m=p.clipShadows,h=e.get(p);if(!s||v===null||v.length===0||a&&!m)a?f(null):c();else{let g=a?0:i,M=g*4,y=h.clippingState||null;l.value=y,y=f(v,u,M,d);for(let T=0;T!==M;++T)y[T]=n[T];h.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,v){let b=p!==null?p.length:0,m=null;if(b!==0){if(m=l.value,v!==!0||m===null){let h=d+b*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,y=d;M!==b;++M,y+=4)r.copy(p[M]).applyMatrix4(g,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var ol=4,A3=6,w3=20,C3=256,Zc=new Pc,Bb=new ue,G0=null,k0=0,X0=0,W0=!1,R3=new X,Rr=new X,Ad=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=R3}=a;G0=this._renderer.getRenderTarget(),k0=this._renderer.getActiveCubeFace(),X0=this._renderer.getActiveMipmapLevel(),W0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(G0,k0,X0),this._renderer.xr.enabled=W0,t.scissorTest=!1,rl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ka||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),G0=this._renderer.getRenderTarget(),k0=this._renderer.getActiveCubeFace(),X0=this._renderer.getActiveMipmapLevel(),W0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:$i,format:Bi,colorSpace:Sc,depthBuffer:!1},s=zb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zb(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=N3(a)),this._blurMaterial=U3(a,t,n),this._ggxMaterial=D3(a,t,n)}return s}_compileMaterial(t){let n=new Xn(new Ms,t);this._renderer.compile(n,Zc)}_sceneToCubeUV(t,n,i,s,a){let l=new Un(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(Bb),p.toneMapping=Ki,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xn(new el,new Nc({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,h=!1,g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,h=!0):(m.color.copy(Bb),h=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[M],a.y,a.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[M],a.z)):(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[M]));let T=this._cubeSize;rl(s,y*T,M>2?T:0,T,T),p.setRenderTarget(s),h&&p.render(b,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===ka||t.mapping===wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;rl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Zc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=c*1.25,d=p*u,{_lodMax:v}=this,b=this._sizeLods[i],m=3*b*(i>v-ol?i-v+ol:0),h=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=v-n,rl(a,m,h,3*b,2*b),s.setRenderTarget(a),s.render(o,Zc),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-i,rl(t,m,h,3*b,2*b),s.setRenderTarget(t),s.render(o,Zc)}_blur(t,n,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,n,i,r),this._blurPass(a,t,i,i,r)}_blurPass(t,n,i,s,a){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;let f=this._sizeLods[s],p=3*f*(s>this._lodMax-ol?s-this._lodMax+ol:0),u=4*(this._cubeSize-f);rl(n,p,u,3*f,2*f),r.setRenderTarget(n),r.render(l,Zc)}};function N3(e){let t=[],n=[],i=e,s=e-ol+1+A3;for(let a=0;a<s;a++){let r=Math.pow(2,i);t.push(r);let o=1/(r-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,d=3,v=new Float32Array(d*u*p),b=new Float32Array(d*u*p);for(let h=0;h<p;h++){let g=h%3*2/3-1,M=h>2?0:-1,y=[g,M,0,g+2/3,M,0,g+2/3,M+1,0,g,M,0,g+2/3,M+1,0,g,M+1,0];v.set(y,d*u*h);for(let T=0;T<u;T++){let E=f[T*2]*2-1,A=f[T*2+1]*2-1;h===0?Rr.set(1,A,E):h===1?Rr.set(-E,1,-A):h===2?Rr.set(-E,A,1):h===3?Rr.set(-1,A,-E):h===4?Rr.set(-E,-1,A):Rr.set(E,A,-1),Rr.toArray(b,(h*u+T)*d)}}let m=new Ms;m.setAttribute("position",new Li(v,d)),m.setAttribute("outputDirection",new Li(b,d)),n.push(new Xn(m,null)),i>ol&&i--}return{lodMeshes:n,sizeLods:t}}function zb(e,t,n){let i=new ei(e,t,n);return i.texture.mapping=Fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function D3(e,t,n){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function U3(e,t,n){return new Wn({name:"SphericalGaussianBlur",defines:{SAMPLES:w3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function Fb(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function Hb(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function Rd(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var wd=class extends ei{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Uc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new el(5,5,5),a=new Wn({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qn,blending:bs});a.uniforms.tEquirect.value=n;let r=new Xn(s,a),o=n.minFilter;return n.minFilter===Ts&&(n.minFilter=cn),new Of(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function L3(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===Bf||d===zf)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let b=new wd(v.height);return b.fromEquirectangularTexture(e,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,v=d===Bf||d===zf,b=d===ka||d===wr;if(v||b){let m=n.get(u),h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Ad(e)),m=v?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let g=u.image;return v&&g&&g.height>0||b&&g&&l(g)?(i===null&&(i=new Ad(e)),m=v?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,d){return d===Bf?u.mapping=ka:d===zf&&(u.mapping=wr),u}function l(u){let d=0,v=6;for(let b=0;b<v;b++)u[b]!==void 0&&d++;return d===v}function c(u){let d=u.target;d.removeEventListener("dispose",c);let v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function I3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&br("WebGLRenderer: "+i+" extension not supported."),s}}}function O3(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(t.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,v=p.attributes.position,b=0;if(v===void 0)return;if(d!==null){let g=d.array;b=d.version;for(let M=0,y=g.length;M<y;M+=3){let T=g[M+0],E=g[M+1],A=g[M+2];u.push(T,E,E,A,A,T)}}else{let g=v.array;b=v.version;for(let M=0,y=g.length/3-1;M<y;M+=3){let T=M+0,E=M+1,A=M+2;u.push(T,E,E,A,A,T)}}let m=new(v.count>=65535?Cc:wc)(u,1);m.version=b;let h=a.get(p);h&&t.remove(h),a.set(p,m)}function f(p){let u=a.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function P3(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let b=0;for(let m=0;m<d;m++)b+=u[m];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function B3(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Bt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function z3(e,t,n){let i=new WeakMap,s=new We;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let w=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],M=0;d===!0&&(M=1),v===!0&&(M=2),b===!0&&(M=3);let y=o.attributes.position.count*M,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*p),A=new Ec(E,y,T,p);A.type=ji,A.needsUpdate=!0;let x=M*4;for(let R=0;R<p;R++){let I=m[R],H=h[R],P=g[R],L=y*T*4*R;for(let G=0;G<I.count;G++){let K=G*x;d===!0&&(s.fromBufferAttribute(I,G),E[L+K+0]=s.x,E[L+K+1]=s.y,E[L+K+2]=s.z,E[L+K+3]=0),v===!0&&(s.fromBufferAttribute(H,G),E[L+K+4]=s.x,E[L+K+5]=s.y,E[L+K+6]=s.z,E[L+K+7]=0),b===!0&&(s.fromBufferAttribute(P,G),E[L+K+8]=s.x,E[L+K+9]=s.y,E[L+K+10]=s.z,E[L+K+11]=P.itemSize===4?s.w:1)}}u={count:p,texture:A,size:new ce(y,T)},i.set(o,u),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function F3(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var H3={[x0]:"LINEAR_TONE_MAPPING",[S0]:"REINHARD_TONE_MAPPING",[M0]:"CINEON_TONE_MAPPING",[b0]:"ACES_FILMIC_TONE_MAPPING",[E0]:"AGX_TONE_MAPPING",[A0]:"NEUTRAL_TONE_MAPPING",[T0]:"CUSTOM_TONE_MAPPING"};function V3(e,t,n,i,s,a){let r=new ei(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ms;c.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ii([0,2,0,0,2,0],2));let f=new Mf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Xn(c,f),u=new Pc(-1,1,1,-1,0,1),d=null,v=null,b=!1,m,h=null,g=[],M=!1;this.setSize=function(y,T){r.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let E=0;E<g.length;E++){let A=g[E];A.setSize&&A.setSize(y,T)}},this.setEffects=function(y){g=y,M=g.length>0&&g[0].isRenderPass===!0;let T=r.width,E=r.height;g.length>0&&o===null&&(o=new ei(T,E,{type:$i,depthBuffer:!1,stencilBuffer:!1}),l=new ei(T,E,{type:$i,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<g.length;A++){let x=g[A];x.setSize&&x.setSize(T,E)}},this.begin=function(y,T){if(b||y.toneMapping===Ki&&g.length===0)return!1;if(h=T,T!==null){let E=T.width,A=T.height;(r.width!==E||r.height!==A)&&this.setSize(E,A)}return M===!1&&y.setRenderTarget(r),m=y.toneMapping,y.toneMapping=Ki,!0},this.hasRenderPass=function(){return M},this.end=function(y,T){y.toneMapping=m,b=!0;let E=r,A=o;for(let x=0;x<g.length;x++){let w=g[x];w.enabled!==!1&&(w.render(y,A,E,T),w.needsSwap!==!1&&(E=A,A=A===o?l:o))}if(d!==y.outputColorSpace||v!==y.toneMapping){d=y.outputColorSpace,v=y.toneMapping,f.defines={},re.getTransfer(d)===ye&&(f.defines.SRGB_TRANSFER="");let x=H3[v];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(h),y.render(p,u),h=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var r1=new Ln,Z0=new za(1,1),o1=new Ec,l1=new xf,c1=new Uc,Vb=[],Gb=[],kb=new Float32Array(16),Xb=new Float32Array(9),Wb=new Float32Array(4);function cl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Vb[s];if(a===void 0&&(a=new Float32Array(s),Vb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function un(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function hn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Nd(e,t){let n=Gb[t];n===void 0&&(n=new Int32Array(t),Gb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function G3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function k3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2fv(this.addr,t),hn(n,t)}}function X3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(un(n,t))return;e.uniform3fv(this.addr,t),hn(n,t)}}function W3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4fv(this.addr,t),hn(n,t)}}function q3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),hn(n,t)}else{if(un(n,i))return;Wb.set(i),e.uniformMatrix2fv(this.addr,!1,Wb),hn(n,i)}}function Y3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),hn(n,t)}else{if(un(n,i))return;Xb.set(i),e.uniformMatrix3fv(this.addr,!1,Xb),hn(n,i)}}function Z3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),hn(n,t)}else{if(un(n,i))return;kb.set(i),e.uniformMatrix4fv(this.addr,!1,kb),hn(n,i)}}function J3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function K3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2iv(this.addr,t),hn(n,t)}}function Q3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(un(n,t))return;e.uniform3iv(this.addr,t),hn(n,t)}}function j3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4iv(this.addr,t),hn(n,t)}}function $3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function t2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2uiv(this.addr,t),hn(n,t)}}function e2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(un(n,t))return;e.uniform3uiv(this.addr,t),hn(n,t)}}function n2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4uiv(this.addr,t),hn(n,t)}}function i2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Z0.compareFunction=n.isReversedDepthBuffer()?bd:Md,a=Z0):a=r1,n.setTexture2D(t||a,s)}function s2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||l1,s)}function a2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||c1,s)}function r2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||o1,s)}function o2(e){switch(e){case 5126:return G3;case 35664:return k3;case 35665:return X3;case 35666:return W3;case 35674:return q3;case 35675:return Y3;case 35676:return Z3;case 5124:case 35670:return J3;case 35667:case 35671:return K3;case 35668:case 35672:return Q3;case 35669:case 35673:return j3;case 5125:return $3;case 36294:return t2;case 36295:return e2;case 36296:return n2;case 35678:case 36198:case 36298:case 36306:case 35682:return i2;case 35679:case 36299:case 36307:return s2;case 35680:case 36300:case 36308:case 36293:return a2;case 36289:case 36303:case 36311:case 36292:return r2}}function l2(e,t){e.uniform1fv(this.addr,t)}function c2(e,t){let n=cl(t,this.size,2);e.uniform2fv(this.addr,n)}function u2(e,t){let n=cl(t,this.size,3);e.uniform3fv(this.addr,n)}function h2(e,t){let n=cl(t,this.size,4);e.uniform4fv(this.addr,n)}function f2(e,t){let n=cl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function d2(e,t){let n=cl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function p2(e,t){let n=cl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function m2(e,t){e.uniform1iv(this.addr,t)}function g2(e,t){e.uniform2iv(this.addr,t)}function _2(e,t){e.uniform3iv(this.addr,t)}function v2(e,t){e.uniform4iv(this.addr,t)}function y2(e,t){e.uniform1uiv(this.addr,t)}function x2(e,t){e.uniform2uiv(this.addr,t)}function S2(e,t){e.uniform3uiv(this.addr,t)}function M2(e,t){e.uniform4uiv(this.addr,t)}function b2(e,t,n){let i=this.cache,s=t.length,a=Nd(n,s);un(i,a)||(e.uniform1iv(this.addr,a),hn(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=Z0:r=r1;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function T2(e,t,n){let i=this.cache,s=t.length,a=Nd(n,s);un(i,a)||(e.uniform1iv(this.addr,a),hn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||l1,a[r])}function E2(e,t,n){let i=this.cache,s=t.length,a=Nd(n,s);un(i,a)||(e.uniform1iv(this.addr,a),hn(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||c1,a[r])}function A2(e,t,n){let i=this.cache,s=t.length,a=Nd(n,s);un(i,a)||(e.uniform1iv(this.addr,a),hn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||o1,a[r])}function w2(e){switch(e){case 5126:return l2;case 35664:return c2;case 35665:return u2;case 35666:return h2;case 35674:return f2;case 35675:return d2;case 35676:return p2;case 5124:case 35670:return m2;case 35667:case 35671:return g2;case 35668:case 35672:return _2;case 35669:case 35673:return v2;case 5125:return y2;case 36294:return x2;case 36295:return S2;case 36296:return M2;case 35678:case 36198:case 36298:case 36306:case 35682:return b2;case 35679:case 36299:case 36307:return T2;case 35680:case 36300:case 36308:case 36293:return E2;case 36289:case 36303:case 36311:case 36292:return A2}}var J0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=o2(n.type)}},K0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=w2(n.type)}},Q0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},q0=/(\w+)(\])?(\[|\.)?/g;function qb(e,t){e.seq.push(t),e.map[t.id]=t}function C2(e,t,n){let i=e.name,s=i.length;for(q0.lastIndex=0;;){let a=q0.exec(i),r=q0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){qb(n,c===void 0?new J0(o,e,t):new K0(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new Q0(o),qb(n,p)),n=p}}}var ll=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);C2(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Yb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var R2=37297,N2=0;function D2(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var Zb=new qt;function U2(e){re._getMatrix(Zb,re.workingColorSpace,e);let t=`mat3( ${Zb.elements.map(n=>n.toFixed(4))} )`;switch(re.getTransfer(e)){case Mc:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Jb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+D2(e.getShaderSource(t),o)}else return a}function L2(e,t){let n=U2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var I2={[x0]:"Linear",[S0]:"Reinhard",[M0]:"Cineon",[b0]:"ACESFilmic",[E0]:"AgX",[A0]:"Neutral",[T0]:"Custom"};function O2(e,t){let n=I2[t];return n===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Ed=new X;function P2(){re.getLuminanceCoefficients(Ed);let e=Ed.x.toFixed(4),t=Ed.y.toFixed(4),n=Ed.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kc).join(`
`)}function z2(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function F2(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Kc(e){return e!==""}function Kb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var H2=/^[ \t]*#include +<([\w\d./]+)>/gm;function j0(e){return e.replace(H2,G2)}var V2=new Map;function G2(e,t){let n=te[t];if(n===void 0){let i=V2.get(t);if(i!==void 0)n=te[i],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return j0(n)}var k2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jb(e){return e.replace(k2,X2)}function X2(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function $b(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var W2={[zc]:"SHADOWMAP_TYPE_PCF",[nl]:"SHADOWMAP_TYPE_VSM"};function q2(e){return W2[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Y2={[ka]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE",[Fc]:"ENVMAP_TYPE_CUBE_UV"};function Z2(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Y2[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var J2={[wr]:"ENVMAP_MODE_REFRACTION"};function K2(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":J2[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Q2={[y0]:"ENVMAP_BLENDING_MULTIPLY",[gb]:"ENVMAP_BLENDING_MIX",[_b]:"ENVMAP_BLENDING_ADD"};function j2(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Q2[e.combine]||"ENVMAP_BLENDING_NONE"}function $2(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function tN(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=q2(n),c=Z2(n),f=K2(n),p=j2(n),u=$2(n),d=B2(n),v=z2(a),b=s.createProgram(),m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Kc).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Kc).join(`
`),h.length>0&&(h+=`
`)):(m=[$b(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kc).join(`
`),h=[$b(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?te.tonemapping_pars_fragment:"",n.toneMapping!==Ki?O2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,L2("linearToOutputTexel",n.outputColorSpace),P2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Kc).join(`
`)),r=j0(r),r=Kb(r,n),r=Qb(r,n),o=j0(o),o=Kb(o,n),o=Qb(o,n),r=jb(r),o=jb(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===P0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===P0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let M=g+m+r,y=g+h+o,T=Yb(s,s.VERTEX_SHADER,M),E=Yb(s,s.FRAGMENT_SHADER,y);s.attachShader(b,T),s.attachShader(b,E),n.index0AttributeName!==void 0?s.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function A(I){if(e.debug.checkShaderErrors){let H=s.getProgramInfoLog(b)||"",P=s.getShaderInfoLog(T)||"",L=s.getShaderInfoLog(E)||"",G=H.trim(),K=P.trim(),q=L.trim(),nt=!0,W=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(nt=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,b,T,E);else{let $=Jb(s,T,"vertex"),it=Jb(s,E,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+$+`
`+it)}else G!==""?zt("WebGLProgram: Program Info Log:",G):(K===""||q==="")&&(W=!1);W&&(I.diagnostics={runnable:nt,programLog:G,vertexShader:{log:K,prefix:m},fragmentShader:{log:q,prefix:h}})}s.deleteShader(T),s.deleteShader(E),x=new ll(s,b),w=F2(s,b)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(b,R2)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=N2++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=E,this}var eN=0,$0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new t_(t),n.set(t,i)),i}},t_=class{constructor(t){this.id=eN++,this.code=t,this.usedTimes=0}};function nN(e){return e===Wa||e===Wc||e===qc}function iN(e,t,n,i,s,a){let r=new Qo,o=new $0,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,w,R,I,H,P){let L=I.fog,G=H.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||K,q),W=nt&&nt.mapping===Fc?nt.image.height:null,$=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let it=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ct=it!==void 0?it.length:0,St=0;G.morphAttributes.position!==void 0&&(St=1),G.morphAttributes.normal!==void 0&&(St=2),G.morphAttributes.color!==void 0&&(St=3);let Qt,Yt,ne,Y;if($){let Se=As[$];Qt=Se.vertexShader,Yt=Se.fragmentShader}else{Qt=x.vertexShader,Yt=x.fragmentShader;let Se=o.getVertexShaderStage(x),k=o.getFragmentShaderStage(x);o.update(x,Se,k),ne=Se.id,Y=k.id}let tt=e.getRenderTarget(),xt=e.state.buffers.depth.getReversed(),Ot=H.isInstancedMesh===!0,gt=H.isBatchedMesh===!0,Ht=!!x.map,Ue=!!x.matcap,Xt=!!nt,At=!!x.aoMap,Ut=!!x.lightMap,Gt=!!x.bumpMap&&x.wireframe===!1,jt=!!x.normalMap,kt=!!x.displacementMap,Ae=!!x.emissiveMap,de=!!x.metalnessMap,xe=!!x.roughnessMap,D=x.anisotropy>0,Fe=x.clearcoat>0,he=x.dispersion>0,C=x.retroreflectivity>0,_=x.iridescence>0,O=x.sheen>0,V=x.transmission>0,Z=D&&!!x.anisotropyMap,ot=Fe&&!!x.clearcoatMap,at=Fe&&!!x.clearcoatNormalMap,J=Fe&&!!x.clearcoatRoughnessMap,Q=_&&!!x.iridescenceMap,ct=_&&!!x.iridescenceThicknessMap,Rt=O&&!!x.sheenColorMap,pt=O&&!!x.sheenRoughnessMap,ft=!!x.specularMap,Dt=!!x.specularColorMap,It=!!x.specularIntensityMap,Vt=V&&!!x.transmissionMap,U=V&&!!x.thicknessMap,ut=!!x.gradientMap,j=!!x.alphaMap,ht=x.alphaTest>0,vt=!!x.alphaHash,st=!!x.extensions,Lt=Ki;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Lt=e.toneMapping);let wt={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:Qt,fragmentShader:Yt,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:gt,batchingColor:gt&&H._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&H.instanceColor!==null,instancingMorph:Ot&&H.morphTexture!==null,outputColorSpace:tt===null?e.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ht,matcap:Ue,envMap:Xt,envMapMode:Xt&&nt.mapping,envMapCubeUVHeight:W,aoMap:At,lightMap:Ut,bumpMap:Gt,normalMap:jt,displacementMap:kt,emissiveMap:Ae,normalMapObjectSpace:jt&&x.normalMapType===xb,normalMapTangentSpace:jt&&x.normalMapType===O0,packedNormalMap:jt&&x.normalMapType===O0&&nN(x.normalMap.format),metalnessMap:de,roughnessMap:xe,anisotropy:D,anisotropyMap:Z,clearcoat:Fe,clearcoatMap:ot,clearcoatNormalMap:at,clearcoatRoughnessMap:J,dispersion:he,retroreflection:C,iridescence:_,iridescenceMap:Q,iridescenceThicknessMap:ct,sheen:O,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:ft,specularColorMap:Dt,specularIntensityMap:It,transmission:V,transmissionMap:Vt,thicknessMap:U,gradientMap:ut,opaque:x.transparent===!1&&x.blending===il&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:vt,combine:x.combine,mapUv:Ht&&v(x.map.channel),aoMapUv:At&&v(x.aoMap.channel),lightMapUv:Ut&&v(x.lightMap.channel),bumpMapUv:Gt&&v(x.bumpMap.channel),normalMapUv:jt&&v(x.normalMap.channel),displacementMapUv:kt&&v(x.displacementMap.channel),emissiveMapUv:Ae&&v(x.emissiveMap.channel),metalnessMapUv:de&&v(x.metalnessMap.channel),roughnessMapUv:xe&&v(x.roughnessMap.channel),anisotropyMapUv:Z&&v(x.anisotropyMap.channel),clearcoatMapUv:ot&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:pt&&v(x.sheenRoughnessMap.channel),specularMapUv:ft&&v(x.specularMap.channel),specularColorMapUv:Dt&&v(x.specularColorMap.channel),specularIntensityMapUv:It&&v(x.specularIntensityMap.channel),transmissionMapUv:Vt&&v(x.transmissionMap.channel),thicknessMapUv:U&&v(x.thicknessMap.channel),alphaMapUv:j&&v(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(jt||D),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!G.attributes.uv&&(Ht||j),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&jt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:St,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Ht&&x.map.isVideoTexture===!0&&re.getTransfer(x.map.colorSpace)===ye,decodeVideoTextureEmissive:Ae&&x.emissiveMap.isVideoTexture===!0&&re.getTransfer(x.emissiveMap.colorSpace)===ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pi,flipSided:x.side===qn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(h(w,x),g(w,x),w.push(e.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function h(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function g(x,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function M(x){let w=d[x.type],R;if(w){let I=As[w];R=Ib.clone(I.uniforms)}else R=x.uniforms;return R}function y(x,w){let R=f.get(w);return R!==void 0?++R.usedTimes:(R=new tN(e,w,x,s),c.push(R),f.set(w,R)),R}function T(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function A(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:A}}function sN(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function aN(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function t1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function e1(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,b,m,h){let g=e[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:v,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:m,group:h},e[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=v,g.materialVariant=r(u),g.groupOrder=b,g.renderOrder=u.renderOrder,g.z=m,g.group=h),t++,g}function l(u,d,v,b,m,h,g){g.reversedDepth===!0&&(m=-m);let M=o(u,d,v,b,m,h);v.transmission>0?i.push(M):v.transparent===!0?s.push(M):n.push(M)}function c(u,d,v,b,m,h){let g=o(u,d,v,b,m,h);v.transmission>0?i.unshift(g):v.transparent===!0?s.unshift(g):n.unshift(g)}function f(u,d){n.length>1&&n.sort(u||aN),i.length>1&&i.sort(d||t1),s.length>1&&s.sort(d||t1)}function p(){for(let u=t,d=e.length;u<d;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function rN(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new e1,e.set(i,[r])):s>=a.length?(r=new e1,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function oN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new X,color:new ue};break;case"SpotLight":n={position:new X,direction:new X,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new ue,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":n={color:new ue,position:new X,halfWidth:new X,halfHeight:new X};break}return e[t.id]=n,n}}}function lN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var cN=0;function uN(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function hN(e){let t=new oN,n=lN(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);let s=new X,a=new Je,r=new Je;function o(c){let f=0,p=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let d=0,v=0,b=0,m=0,h=0,g=0,M=0,y=0,T=0,E=0,A=0,x=0,w=0,R=0;c.sort(uN);for(let H=0,P=c.length;H<P;H++){let L=c[H],G=L.color,K=L.intensity,q=L.distance,nt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Wa?nt=L.shadow.map.texture:nt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=G.r*K,p+=G.g*K,u+=G.b*K;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],K);R++}else if(L.isSunLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,it=n.get(L);it.shadowIntensity=$.intensity,it.shadowBias=$.bias,it.shadowNormalBias=$.normalBias,it.shadowRadius=$.radius,it.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[v]=it,i.sunShadowMap[v]=nt;let Ct=$.getViewportCount();for(let St=0;St<Ct;St++)i.sunShadowMatrix[b+St]=$.getMatrix(St),i.sunShadowCascade[b+St]=$._cascadeData[St];b+=Ct,v++}i.sun[d]=W,d++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,it=n.get(L);it.shadowIntensity=$.intensity,it.shadowBias=$.bias,it.shadowNormalBias=$.normalBias,it.shadowRadius=$.radius,it.shadowMapSize=$.mapSize,i.directionalShadow[m]=it,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=L.shadow.matrix,T++}i.directional[m]=W,m++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(G).multiplyScalar(K),W.distance=q,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[g]=W;let $=L.shadow;if(L.map&&(i.spotLightMap[x]=L.map,x++,$.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[g]=$.matrix,L.castShadow){let it=n.get(L);it.shadowIntensity=$.intensity,it.shadowBias=$.bias,it.shadowNormalBias=$.normalBias,it.shadowRadius=$.radius,it.shadowMapSize=$.mapSize,i.spotShadow[g]=it,i.spotShadowMap[g]=nt,A++}g++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(G).multiplyScalar(K),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=W,M++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let $=L.shadow,it=n.get(L);it.shadowIntensity=$.intensity,it.shadowBias=$.bias,it.shadowNormalBias=$.normalBias,it.shadowRadius=$.radius,it.shadowMapSize=$.mapSize,it.shadowCameraNear=$.camera.near,it.shadowCameraFar=$.camera.far,i.pointShadow[h]=it,i.pointShadowMap[h]=nt,i.pointShadowMatrix[h]=L.shadow.matrix,E++}i.point[h]=W,h++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(K),W.groundColor.copy(L.groundColor).multiplyScalar(K),i.hemi[y]=W,y++}}M>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let I=i.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==h||I.spotLength!==g||I.rectAreaLength!==M||I.hemiLength!==y||I.numSunShadows!==v||I.numDirectionalShadows!==T||I.numPointShadows!==E||I.numSpotShadows!==A||I.numSpotMaps!==x||I.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=m,i.spot.length=g,i.rectArea.length=M,i.point.length=h,i.hemi.length=y,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,I.sunLength=d,I.directionalLength=m,I.pointLength=h,I.spotLength=g,I.rectAreaLength=M,I.hemiLength=y,I.numSunShadows=v,I.numDirectionalShadows=T,I.numPointShadows=E,I.numSpotShadows=A,I.numSpotMaps=x,I.numLightProbes=R,i.version=cN++)}function l(c,f){let p=0,u=0,d=0,v=0,b=0,m=0,h=f.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){let y=c[g];if(y.isSunLight){let T=i.sun[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(h),p++}else if(y.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),u++}else if(y.isSpotLight){let T=i.spot[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),v++}else if(y.isRectAreaLight){let T=i.rectArea[b];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),r.identity(),a.copy(y.matrixWorld),a.premultiply(h),r.extractRotation(a),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),b++}else if(y.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),d++}else if(y.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(h),m++}}}return{setup:o,setupView:l,state:i}}function n1(e){let t=new hN(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function f(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function fN(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new n1(e),t.set(s,[o])):a>=r.length?(o=new n1(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var dN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mN=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],gN=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],i1=new Je,Jc=new X,Y0=new X;function _N(e,t,n){let i=new Dc,s=new ce,a=new ce,r=new We,o=new bf,l=new Tf,c={},f=n.maxTextureSize,p={[Ga]:qn,[qn]:Ga,[Pi]:Pi},u=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:dN,fragmentShader:pN}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let v=new Ms;v.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Xn(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let h=this.type;this.render=function(E,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===QM&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zc);let w=e.getRenderTarget(),R=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),H=e.state;H.setBlending(bs),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let P=h!==this.type;P&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=E.length;L<G;L++){let K=E[L],q=K.shadow;if(q===void 0){zt("WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let nt=q.getFrameExtents();s.multiply(nt),a.copy(q.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/nt.x),s.x=a.x*nt.x,q.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/nt.y),s.y=a.y*nt.y,q.mapSize.y=a.y));let W=e.state.buffers.depth.getReversed();if(q.camera._reversedDepth=W,q.map===null||P===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===nl){if(K.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ei(s.x,s.y,{format:Wa,type:$i,minFilter:cn,magFilter:cn,generateMipmaps:!1}),q.map.texture.name=K.name+".shadowMap",q.map.depthTexture=new za(s.x,s.y,ji),q.map.depthTexture.name=K.name+".shadowMapDepth",q.map.depthTexture.format=ys,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=_n,q.map.depthTexture.magFilter=_n}else K.isPointLight?(q.map=new wd(s.x),q.map.depthTexture=new Sf(s.x,Qi)):(q.map=new ei(s.x,s.y),q.map.depthTexture=new za(s.x,s.y,Qi)),q.map.depthTexture.name=K.name+".shadowMap",q.map.depthTexture.format=ys,this.type===zc?(q.map.depthTexture.compareFunction=W?bd:Md,q.map.depthTexture.minFilter=cn,q.map.depthTexture.magFilter=cn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=_n,q.map.depthTexture.magFilter=_n);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let $=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();K.isPointLight!==!0&&q.updateMatrices(K,x);for(let it=0;it<$;it++){let Ct=q.getCamera(it);if(K.isPointLight){let St=q.camera,Qt=q.matrix,Yt=K.distance||St.far;Yt!==St.far&&(St.far=Yt,St.updateProjectionMatrix()),Jc.setFromMatrixPosition(K.matrixWorld),St.position.copy(Jc),Y0.copy(St.position),Y0.add(mN[it]),St.up.copy(gN[it]),St.lookAt(Y0),St.updateMatrixWorld(),Qt.makeTranslation(-Jc.x,-Jc.y,-Jc.z),i1.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),q._frustum.setFromProjectionMatrix(i1,St.coordinateSystem,St.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)e.setRenderTarget(q.map,it),e.clear();else{it===0&&(e.setRenderTarget(q.map),e.clear());let St=q.getViewport(it);r.set(a.x*St.x,a.y*St.y,a.x*St.z,a.y*St.w),H.viewport(r)}i=q.getFrustum(it),y(A,x,Ct,K,this.type)}q.isPointLightShadow!==!0&&this.type===nl&&g(q,x),q.needsUpdate=!1}h=this.type,m.needsUpdate=!1,e.setRenderTarget(w,R,I)};function g(E,A){let x=t.update(b);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new ei(s.x,s.y,{format:Wa,type:$i}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(A,null,x,u,b,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(A,null,x,d,b,null)}function M(E,A,x,w){let R=null,I=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)R=I;else if(R=x.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let H=R.uuid,P=A.uuid,L=c[H];L===void 0&&(L={},c[H]=L);let G=L[P];G===void 0&&(G=R.clone(),L[P]=G,A.addEventListener("dispose",T)),R=G}if(R.visible=A.visible,R.wireframe=A.wireframe,w===nl?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:p[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let H=e.properties.get(R);H.light=x}return R}function y(E,A,x,w,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===nl)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let P=t.update(E),L=E.material;if(Array.isArray(L)){let G=P.groups;for(let K=0,q=G.length;K<q;K++){let nt=G[K],W=L[nt.materialIndex];if(W&&W.visible){let $=M(E,W,w,R);E.onBeforeShadow(e,E,A,x,P,$,nt),e.renderBufferDirect(x,null,P,$,E,nt),E.onAfterShadow(e,E,A,x,P,$,nt)}}}else if(L.visible){let G=M(E,L,w,R);E.onBeforeShadow(e,E,A,x,P,G,null),e.renderBufferDirect(x,null,P,G,E,null),E.onAfterShadow(e,E,A,x,P,G,null)}}let H=E.children;for(let P=0,L=H.length;P<L;P++)y(H[P],A,x,w,R)}function T(E){E.target.removeEventListener("dispose",T);for(let x in c){let w=c[x],R=E.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function vN(e,t){function n(){let U=!1,ut=new We,j=null,ht=new We(0,0,0,0);return{setMask:function(vt){j!==vt&&!U&&(e.colorMask(vt,vt,vt,vt),j=vt)},setLocked:function(vt){U=vt},setClear:function(vt,st,Lt,wt,Se){Se===!0&&(vt*=wt,st*=wt,Lt*=wt),ut.set(vt,st,Lt,wt),ht.equals(ut)===!1&&(e.clearColor(vt,st,Lt,wt),ht.copy(ut))},reset:function(){U=!1,j=null,ht.set(-1,0,0,0)}}}function i(){let U=!1,ut=!1,j=null,ht=null,vt=null;return{setReversed:function(st){if(ut!==st){let Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),ut=st;let wt=vt;vt=null,this.setClear(wt)}},getReversed:function(){return ut},setTest:function(st){st?tt(e.DEPTH_TEST):xt(e.DEPTH_TEST)},setMask:function(st){j!==st&&!U&&(e.depthMask(st),j=st)},setFunc:function(st){if(ut&&(st=Ub[st]),ht!==st){switch(st){case of:e.depthFunc(e.NEVER);break;case lf:e.depthFunc(e.ALWAYS);break;case cf:e.depthFunc(e.LESS);break;case Zo:e.depthFunc(e.LEQUAL);break;case uf:e.depthFunc(e.EQUAL);break;case hf:e.depthFunc(e.GEQUAL);break;case ff:e.depthFunc(e.GREATER);break;case df:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ht=st}},setLocked:function(st){U=st},setClear:function(st){vt!==st&&(vt=st,ut&&(st=1-st),e.clearDepth(st))},reset:function(){U=!1,j=null,ht=null,vt=null,ut=!1}}}function s(){let U=!1,ut=null,j=null,ht=null,vt=null,st=null,Lt=null,wt=null,Se=null;return{setTest:function(k){U||(k?tt(e.STENCIL_TEST):xt(e.STENCIL_TEST))},setMask:function(k){ut!==k&&!U&&(e.stencilMask(k),ut=k)},setFunc:function(k,rt,dt){(j!==k||ht!==rt||vt!==dt)&&(e.stencilFunc(k,rt,dt),j=k,ht=rt,vt=dt)},setOp:function(k,rt,dt){(st!==k||Lt!==rt||wt!==dt)&&(e.stencilOp(k,rt,dt),st=k,Lt=rt,wt=dt)},setLocked:function(k){U=k},setClear:function(k){Se!==k&&(e.clearStencil(k),Se=k)},reset:function(){U=!1,ut=null,j=null,ht=null,vt=null,st=null,Lt=null,wt=null,Se=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},p={},u={},d=new WeakMap,v=[],b=null,m=!1,h=null,g=null,M=null,y=null,T=null,E=null,A=null,x=new ue(0,0,0),w=0,R=!1,I=null,H=null,P=null,L=null,G=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,nt=0,W=e.getParameter(e.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=nt>=2);let $=null,it={},Ct=e.getParameter(e.SCISSOR_BOX),St=e.getParameter(e.VIEWPORT),Qt=new We().fromArray(Ct),Yt=new We().fromArray(St);function ne(U,ut,j,ht){let vt=new Uint8Array(4),st=e.createTexture();e.bindTexture(U,st),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Lt=0;Lt<j;Lt++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(ut,0,e.RGBA,1,1,ht,0,e.RGBA,e.UNSIGNED_BYTE,vt):e.texImage2D(ut+Lt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,vt);return st}let Y={};Y[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),Y[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Y[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),tt(e.DEPTH_TEST),r.setFunc(Zo),Gt(!1),jt(d0),tt(e.CULL_FACE),At(bs);function tt(U){f[U]!==!0&&(e.enable(U),f[U]=!0)}function xt(U){f[U]!==!1&&(e.disable(U),f[U]=!1)}function Ot(U,ut){return u[U]!==ut?(e.bindFramebuffer(U,ut),u[U]=ut,U===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ut),U===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ut),!0):!1}function gt(U,ut){let j=v,ht=!1;if(U){j=d.get(ut),j===void 0&&(j=[],d.set(ut,j));let vt=U.textures;if(j.length!==vt.length||j[0]!==e.COLOR_ATTACHMENT0){for(let st=0,Lt=vt.length;st<Lt;st++)j[st]=e.COLOR_ATTACHMENT0+st;j.length=vt.length,ht=!0}}else j[0]!==e.BACK&&(j[0]=e.BACK,ht=!0);ht&&e.drawBuffers(j)}function Ht(U){return b!==U?(e.useProgram(U),b=U,!0):!1}let Ue={[Ar]:e.FUNC_ADD,[$M]:e.FUNC_SUBTRACT,[tb]:e.FUNC_REVERSE_SUBTRACT};Ue[eb]=e.MIN,Ue[nb]=e.MAX;let Xt={[ib]:e.ZERO,[sb]:e.ONE,[ab]:e.SRC_COLOR,[_0]:e.SRC_ALPHA,[hb]:e.SRC_ALPHA_SATURATE,[cb]:e.DST_COLOR,[ob]:e.DST_ALPHA,[rb]:e.ONE_MINUS_SRC_COLOR,[v0]:e.ONE_MINUS_SRC_ALPHA,[ub]:e.ONE_MINUS_DST_COLOR,[lb]:e.ONE_MINUS_DST_ALPHA,[fb]:e.CONSTANT_COLOR,[db]:e.ONE_MINUS_CONSTANT_COLOR,[pb]:e.CONSTANT_ALPHA,[mb]:e.ONE_MINUS_CONSTANT_ALPHA};function At(U,ut,j,ht,vt,st,Lt,wt,Se,k){if(U===bs){m===!0&&(xt(e.BLEND),m=!1);return}if(m===!1&&(tt(e.BLEND),m=!0),U!==jM){if(U!==h||k!==R){if((g!==Ar||T!==Ar)&&(e.blendEquation(e.FUNC_ADD),g=Ar,T=Ar),k)switch(U){case il:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case p0:e.blendFunc(e.ONE,e.ONE);break;case m0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case g0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Bt("WebGLState: Invalid blending: ",U);break}else switch(U){case il:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case p0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case m0:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g0:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",U);break}M=null,y=null,E=null,A=null,x.set(0,0,0),w=0,h=U,R=k}return}vt=vt||ut,st=st||j,Lt=Lt||ht,(ut!==g||vt!==T)&&(e.blendEquationSeparate(Ue[ut],Ue[vt]),g=ut,T=vt),(j!==M||ht!==y||st!==E||Lt!==A)&&(e.blendFuncSeparate(Xt[j],Xt[ht],Xt[st],Xt[Lt]),M=j,y=ht,E=st,A=Lt),(wt.equals(x)===!1||Se!==w)&&(e.blendColor(wt.r,wt.g,wt.b,Se),x.copy(wt),w=Se),h=U,R=!1}function Ut(U,ut){U.side===Pi?xt(e.CULL_FACE):tt(e.CULL_FACE);let j=U.side===qn;ut&&(j=!j),Gt(j),U.blending===il&&U.transparent===!1?At(bs):At(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);let ht=U.stencilWrite;o.setTest(ht),ht&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?tt(e.SAMPLE_ALPHA_TO_COVERAGE):xt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(U){I!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),I=U)}function jt(U){U!==JM?(tt(e.CULL_FACE),U!==H&&(U===d0?e.cullFace(e.BACK):U===KM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):xt(e.CULL_FACE),H=U}function kt(U){U!==P&&(q&&e.lineWidth(U),P=U)}function Ae(U,ut,j){U?(tt(e.POLYGON_OFFSET_FILL),(L!==ut||G!==j)&&(L=ut,G=j,r.getReversed()&&(ut=-ut),e.polygonOffset(ut,j))):xt(e.POLYGON_OFFSET_FILL)}function de(U){U?tt(e.SCISSOR_TEST):xt(e.SCISSOR_TEST)}function xe(U){U===void 0&&(U=e.TEXTURE0+K-1),$!==U&&(e.activeTexture(U),$=U)}function D(U,ut,j){j===void 0&&($===null?j=e.TEXTURE0+K-1:j=$);let ht=it[j];ht===void 0&&(ht={type:void 0,texture:void 0},it[j]=ht),(ht.type!==U||ht.texture!==ut)&&($!==j&&(e.activeTexture(j),$=j),e.bindTexture(U,ut||Y[U]),ht.type=U,ht.texture=ut)}function Fe(){let U=it[$];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function he(){try{e.compressedTexImage2D(...arguments)}catch(U){Bt("WebGLState:",U)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(U){Bt("WebGLState:",U)}}function _(){try{e.texSubImage2D(...arguments)}catch(U){Bt("WebGLState:",U)}}function O(){try{e.texSubImage3D(...arguments)}catch(U){Bt("WebGLState:",U)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Bt("WebGLState:",U)}}function Z(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Bt("WebGLState:",U)}}function ot(){try{e.texStorage2D(...arguments)}catch(U){Bt("WebGLState:",U)}}function at(){try{e.texStorage3D(...arguments)}catch(U){Bt("WebGLState:",U)}}function J(){try{e.texImage2D(...arguments)}catch(U){Bt("WebGLState:",U)}}function Q(){try{e.texImage3D(...arguments)}catch(U){Bt("WebGLState:",U)}}function ct(U){return p[U]!==void 0?p[U]:e.getParameter(U)}function Rt(U,ut){p[U]!==ut&&(e.pixelStorei(U,ut),p[U]=ut)}function pt(U){Qt.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),Qt.copy(U))}function ft(U){Yt.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),Yt.copy(U))}function Dt(U,ut){let j=c.get(ut);j===void 0&&(j=new WeakMap,c.set(ut,j));let ht=j.get(U);ht===void 0&&(ht=e.getUniformBlockIndex(ut,U.name),j.set(U,ht))}function It(U,ut){let ht=c.get(ut).get(U);l.get(ut)!==ht&&(e.uniformBlockBinding(ut,ht,U.__bindingPointIndex),l.set(ut,ht))}function Vt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},$=null,it={},u={},d=new WeakMap,v=[],b=null,m=!1,h=null,g=null,M=null,y=null,T=null,E=null,A=null,x=new ue(0,0,0),w=0,R=!1,I=null,H=null,P=null,L=null,G=null,Qt.set(0,0,e.canvas.width,e.canvas.height),Yt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:tt,disable:xt,bindFramebuffer:Ot,drawBuffers:gt,useProgram:Ht,setBlending:At,setMaterial:Ut,setFlipSided:Gt,setCullFace:jt,setLineWidth:kt,setPolygonOffset:Ae,setScissorTest:de,activeTexture:xe,bindTexture:D,unbindTexture:Fe,compressedTexImage2D:he,compressedTexImage3D:C,texImage2D:J,texImage3D:Q,pixelStorei:Rt,getParameter:ct,updateUBOMapping:Dt,uniformBlockBinding:It,texStorage2D:ot,texStorage3D:at,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:Z,scissor:pt,viewport:ft,reset:Vt}}function yN(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,f=new WeakMap,p=new Set,u,d=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,_){return v?new OffscreenCanvas(C,_):Tc("canvas")}function m(C,_,O){let V=1,Z=he(C);if((Z.width>O||Z.height>O)&&(V=O/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ot=Math.floor(V*Z.width),at=Math.floor(V*Z.height);u===void 0&&(u=b(ot,at));let J=_?b(ot,at):u;return J.width=ot,J.height=at,J.getContext("2d").drawImage(C,0,0,ot,at),zt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ot+"x"+at+")."),J}else return"data"in C&&zt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function h(C){return C.generateMipmaps}function g(C){e.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(C,_,O,V,Z,ot=!1){if(C!==null){if(e[C]!==void 0)return e[C];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let at;V&&(at=t.get("EXT_texture_norm16"),at||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===e.RED&&(O===e.FLOAT&&(J=e.R32F),O===e.HALF_FLOAT&&(J=e.R16F),O===e.UNSIGNED_BYTE&&(J=e.R8),O===e.UNSIGNED_SHORT&&at&&(J=at.R16_EXT),O===e.SHORT&&at&&(J=at.R16_SNORM_EXT)),_===e.RED_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.R8UI),O===e.UNSIGNED_SHORT&&(J=e.R16UI),O===e.UNSIGNED_INT&&(J=e.R32UI),O===e.BYTE&&(J=e.R8I),O===e.SHORT&&(J=e.R16I),O===e.INT&&(J=e.R32I)),_===e.RG&&(O===e.FLOAT&&(J=e.RG32F),O===e.HALF_FLOAT&&(J=e.RG16F),O===e.UNSIGNED_BYTE&&(J=e.RG8),O===e.UNSIGNED_SHORT&&at&&(J=at.RG16_EXT),O===e.SHORT&&at&&(J=at.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.RG8UI),O===e.UNSIGNED_SHORT&&(J=e.RG16UI),O===e.UNSIGNED_INT&&(J=e.RG32UI),O===e.BYTE&&(J=e.RG8I),O===e.SHORT&&(J=e.RG16I),O===e.INT&&(J=e.RG32I)),_===e.RGB_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.RGB8UI),O===e.UNSIGNED_SHORT&&(J=e.RGB16UI),O===e.UNSIGNED_INT&&(J=e.RGB32UI),O===e.BYTE&&(J=e.RGB8I),O===e.SHORT&&(J=e.RGB16I),O===e.INT&&(J=e.RGB32I)),_===e.RGBA_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.RGBA8UI),O===e.UNSIGNED_SHORT&&(J=e.RGBA16UI),O===e.UNSIGNED_INT&&(J=e.RGBA32UI),O===e.BYTE&&(J=e.RGBA8I),O===e.SHORT&&(J=e.RGBA16I),O===e.INT&&(J=e.RGBA32I)),_===e.RGB&&(O===e.UNSIGNED_SHORT&&at&&(J=at.RGB16_EXT),O===e.SHORT&&at&&(J=at.RGB16_SNORM_EXT),O===e.UNSIGNED_INT_5_9_9_9_REV&&(J=e.RGB9_E5),O===e.UNSIGNED_INT_10F_11F_11F_REV&&(J=e.R11F_G11F_B10F)),_===e.RGBA){let Q=ot?Mc:re.getTransfer(Z);O===e.FLOAT&&(J=e.RGBA32F),O===e.HALF_FLOAT&&(J=e.RGBA16F),O===e.UNSIGNED_BYTE&&(J=Q===ye?e.SRGB8_ALPHA8:e.RGBA8),O===e.UNSIGNED_SHORT&&at&&(J=at.RGBA16_EXT),O===e.SHORT&&at&&(J=at.RGBA16_SNORM_EXT),O===e.UNSIGNED_SHORT_4_4_4_4&&(J=e.RGBA4),O===e.UNSIGNED_SHORT_5_5_5_1&&(J=e.RGB5_A1)}return(J===e.R16F||J===e.R32F||J===e.RG16F||J===e.RG32F||J===e.RGBA16F||J===e.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function T(C,_){let O;return C?_===null||_===Qi||_===al?O=e.DEPTH24_STENCIL8:_===ji?O=e.DEPTH32F_STENCIL8:_===sl&&(O=e.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Qi||_===al?O=e.DEPTH_COMPONENT24:_===ji?O=e.DEPTH_COMPONENT32F:_===sl&&(O=e.DEPTH_COMPONENT16),O}function E(C,_){return h(C)===!0||C.isFramebufferTexture&&C.minFilter!==_n&&C.minFilter!==cn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function A(C){let _=C.target;_.removeEventListener("dispose",A),w(_),_.isVideoTexture&&f.delete(_),_.isHTMLTexture&&p.delete(_)}function x(C){let _=C.target;_.removeEventListener("dispose",x),I(_)}function w(C){let _=i.get(C);if(_.__webglInit===void 0)return;let O=C.source,V=d.get(O);if(V){let Z=V[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(C),Object.keys(V).length===0&&d.delete(O)}i.remove(C)}function R(C){let _=i.get(C);e.deleteTexture(_.__webglTexture);let O=C.source,V=d.get(O);delete V[_.__cacheKey],r.memory.textures--}function I(C){let _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let Z=0;Z<_.__webglFramebuffer[V].length;Z++)e.deleteFramebuffer(_.__webglFramebuffer[V][Z]);else e.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)e.deleteFramebuffer(_.__webglFramebuffer[V]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=C.textures;for(let V=0,Z=O.length;V<Z;V++){let ot=i.get(O[V]);ot.__webglTexture&&(e.deleteTexture(ot.__webglTexture),r.memory.textures--),i.remove(O[V])}i.remove(C)}let H=0;function P(){H=0}function L(){return H}function G(C){H=C}function K(){let C=H;return C>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,C}function q(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function nt(C,_){let O=i.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let V=C.image;if(V===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(O,C,_);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,O.__webglTexture,e.TEXTURE0+_)}function W(C,_){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){xt(O,C,_);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,O.__webglTexture,e.TEXTURE0+_)}function $(C,_){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){xt(O,C,_);return}n.bindTexture(e.TEXTURE_3D,O.__webglTexture,e.TEXTURE0+_)}function it(C,_){let O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){Ot(O,C,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+_)}let Ct={[pf]:e.REPEAT,[vs]:e.CLAMP_TO_EDGE,[mf]:e.MIRRORED_REPEAT},St={[_n]:e.NEAREST,[vb]:e.NEAREST_MIPMAP_NEAREST,[Hc]:e.NEAREST_MIPMAP_LINEAR,[cn]:e.LINEAR,[Ff]:e.LINEAR_MIPMAP_NEAREST,[Ts]:e.LINEAR_MIPMAP_LINEAR},Qt={[Mb]:e.NEVER,[wb]:e.ALWAYS,[bb]:e.LESS,[Md]:e.LEQUAL,[Tb]:e.EQUAL,[bd]:e.GEQUAL,[Eb]:e.GREATER,[Ab]:e.NOTEQUAL};function Yt(C,_){if(_.type===ji&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===cn||_.magFilter===Ff||_.magFilter===Hc||_.magFilter===Ts||_.minFilter===cn||_.minFilter===Ff||_.minFilter===Hc||_.minFilter===Ts)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,Ct[_.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,Ct[_.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,Ct[_.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,St[_.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,St[_.minFilter]),_.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,Qt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===_n||_.minFilter!==Hc&&_.minFilter!==Ts||_.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ne(C,_){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",A));let V=_.source,Z=d.get(V);Z===void 0&&(Z={},d.set(V,Z));let ot=q(_);if(ot!==C.__cacheKey){Z[ot]===void 0&&(Z[ot]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,O=!0),Z[ot].usedTimes++;let at=Z[C.__cacheKey];at!==void 0&&(Z[C.__cacheKey].usedTimes--,at.usedTimes===0&&R(_)),C.__cacheKey=ot,C.__webglTexture=Z[ot].texture}return O}function Y(C,_,O){return Math.floor(Math.floor(C/O)/_)}function tt(C,_,O,V){let ot=C.updateRanges;if(ot.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,O,V,_.data);else{ot.sort((Rt,pt)=>Rt.start-pt.start);let at=0;for(let Rt=1;Rt<ot.length;Rt++){let pt=ot[at],ft=ot[Rt],Dt=pt.start+pt.count,It=Y(ft.start,_.width,4),Vt=Y(pt.start,_.width,4);ft.start<=Dt+1&&It===Vt&&Y(ft.start+ft.count-1,_.width,4)===It?pt.count=Math.max(pt.count,ft.start+ft.count-pt.start):(++at,ot[at]=ft)}ot.length=at+1;let J=n.getParameter(e.UNPACK_ROW_LENGTH),Q=n.getParameter(e.UNPACK_SKIP_PIXELS),ct=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let Rt=0,pt=ot.length;Rt<pt;Rt++){let ft=ot[Rt],Dt=Math.floor(ft.start/4),It=Math.ceil(ft.count/4),Vt=Dt%_.width,U=Math.floor(Dt/_.width),ut=It,j=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Vt),n.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,Vt,U,ut,j,O,V,_.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,J),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(e.UNPACK_SKIP_ROWS,ct)}}function xt(C,_,O){let V=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=e.TEXTURE_3D);let Z=ne(C,_),ot=_.source;n.bindTexture(V,C.__webglTexture,e.TEXTURE0+O);let at=i.get(ot);if(ot.version!==at.__version||Z===!0){if(n.activeTexture(e.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let j=re.getPrimaries(re.workingColorSpace),ht=_.colorSpace===zi?null:re.getPrimaries(_.colorSpace),vt=_.colorSpace===zi||j===ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=m(_.image,!1,s.maxTextureSize);Q=Fe(_,Q);let ct=a.convert(_.format,_.colorSpace),Rt=a.convert(_.type),pt=y(_.internalFormat,ct,Rt,_.normalized,_.colorSpace,_.isVideoTexture);Yt(V,_);let ft,Dt=_.mipmaps,It=_.isVideoTexture!==!0,Vt=at.__version===void 0||Z===!0,U=ot.dataReady,ut=E(_,Q);if(_.isDepthTexture)pt=T(_.format===Xa,_.type),Vt&&(It?n.texStorage2D(e.TEXTURE_2D,1,pt,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,pt,Q.width,Q.height,0,ct,Rt,null));else if(_.isDataTexture)if(Dt.length>0){It&&Vt&&n.texStorage2D(e.TEXTURE_2D,ut,pt,Dt[0].width,Dt[0].height);for(let j=0,ht=Dt.length;j<ht;j++)ft=Dt[j],It?U&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ft.width,ft.height,ct,Rt,ft.data):n.texImage2D(e.TEXTURE_2D,j,pt,ft.width,ft.height,0,ct,Rt,ft.data);_.generateMipmaps=!1}else It?(Vt&&n.texStorage2D(e.TEXTURE_2D,ut,pt,Q.width,Q.height),U&&tt(_,Q,ct,Rt)):n.texImage2D(e.TEXTURE_2D,0,pt,Q.width,Q.height,0,ct,Rt,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){It&&Vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ut,pt,Dt[0].width,Dt[0].height,Q.depth);for(let j=0,ht=Dt.length;j<ht;j++)if(ft=Dt[j],_.format!==Bi)if(ct!==null)if(It){if(U)if(_.layerUpdates.size>0){let vt=V0(ft.width,ft.height,_.format,_.type);for(let st of _.layerUpdates){let Lt=ft.data.subarray(st*vt/ft.data.BYTES_PER_ELEMENT,(st+1)*vt/ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,st,ft.width,ft.height,1,ct,Lt)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ft.width,ft.height,Q.depth,ct,ft.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,pt,ft.width,ft.height,Q.depth,0,ft.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?U&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ft.width,ft.height,Q.depth,ct,Rt,ft.data):n.texImage3D(e.TEXTURE_2D_ARRAY,j,pt,ft.width,ft.height,Q.depth,0,ct,Rt,ft.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{It&&Vt&&n.texStorage2D(e.TEXTURE_2D,ut,pt,Dt[0].width,Dt[0].height);for(let j=0,ht=Dt.length;j<ht;j++)ft=Dt[j],_.format!==Bi?ct!==null?It?U&&n.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,ft.width,ft.height,ct,ft.data):n.compressedTexImage2D(e.TEXTURE_2D,j,pt,ft.width,ft.height,0,ft.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?U&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ft.width,ft.height,ct,Rt,ft.data):n.texImage2D(e.TEXTURE_2D,j,pt,ft.width,ft.height,0,ct,Rt,ft.data)}else if(_.isDataArrayTexture)if(It){if(Vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ut,pt,Q.width,Q.height,Q.depth),U)if(_.layerUpdates.size>0){let j=V0(Q.width,Q.height,_.format,_.type);for(let ht of _.layerUpdates){let vt=Q.data.subarray(ht*j/Q.data.BYTES_PER_ELEMENT,(ht+1)*j/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ht,Q.width,Q.height,1,ct,Rt,vt)}_.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ct,Rt,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,pt,Q.width,Q.height,Q.depth,0,ct,Rt,Q.data);else if(_.isData3DTexture)It?(Vt&&n.texStorage3D(e.TEXTURE_3D,ut,pt,Q.width,Q.height,Q.depth),U&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ct,Rt,Q.data)):n.texImage3D(e.TEXTURE_3D,0,pt,Q.width,Q.height,Q.depth,0,ct,Rt,Q.data);else if(_.isFramebufferTexture){if(Vt)if(It)n.texStorage2D(e.TEXTURE_2D,ut,pt,Q.width,Q.height);else{let j=Q.width,ht=Q.height;for(let vt=0;vt<ut;vt++)n.texImage2D(e.TEXTURE_2D,vt,pt,j,ht,0,ct,Rt,null),j>>=1,ht>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let j=e.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),p.add(_),j.onpaint=ht=>{let vt=ht.changedElements;for(let st of p)vt.includes(st.image)&&(st.needsUpdate=!0)},j.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,Q);else{let vt=e.RGBA,st=e.RGBA,Lt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,vt,st,Lt,Q)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(It&&Vt){let j=he(Dt[0]);n.texStorage2D(e.TEXTURE_2D,ut,pt,j.width,j.height)}for(let j=0,ht=Dt.length;j<ht;j++)ft=Dt[j],It?U&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ct,Rt,ft):n.texImage2D(e.TEXTURE_2D,j,pt,ct,Rt,ft);_.generateMipmaps=!1}else if(It){if(Vt){let j=he(Q);n.texStorage2D(e.TEXTURE_2D,ut,pt,j.width,j.height)}U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ct,Rt,Q)}else n.texImage2D(e.TEXTURE_2D,0,pt,ct,Rt,Q);h(_)&&g(V),at.__version=ot.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Ot(C,_,O){if(_.image.length!==6)return;let V=ne(C,_),Z=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+O);let ot=i.get(Z);if(Z.version!==ot.__version||V===!0){n.activeTexture(e.TEXTURE0+O);let at=re.getPrimaries(re.workingColorSpace),J=_.colorSpace===zi?null:re.getPrimaries(_.colorSpace),Q=_.colorSpace===zi||at===J?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ct=_.isCompressedTexture||_.image[0].isCompressedTexture,Rt=_.image[0]&&_.image[0].isDataTexture,pt=[];for(let st=0;st<6;st++)!ct&&!Rt?pt[st]=m(_.image[st],!0,s.maxCubemapSize):pt[st]=Rt?_.image[st].image:_.image[st],pt[st]=Fe(_,pt[st]);let ft=pt[0],Dt=a.convert(_.format,_.colorSpace),It=a.convert(_.type),Vt=y(_.internalFormat,Dt,It,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,ut=ot.__version===void 0||V===!0,j=Z.dataReady,ht=E(_,ft);Yt(e.TEXTURE_CUBE_MAP,_);let vt;if(ct){U&&ut&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,Vt,ft.width,ft.height);for(let st=0;st<6;st++){vt=pt[st].mipmaps;for(let Lt=0;Lt<vt.length;Lt++){let wt=vt[Lt];_.format!==Bi?Dt!==null?U?j&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,0,0,wt.width,wt.height,Dt,wt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,Vt,wt.width,wt.height,0,wt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,0,0,wt.width,wt.height,Dt,It,wt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,Vt,wt.width,wt.height,0,Dt,It,wt.data)}}}else{if(vt=_.mipmaps,U&&ut){vt.length>0&&ht++;let st=he(pt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,Vt,st.width,st.height)}for(let st=0;st<6;st++)if(Rt){U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,pt[st].width,pt[st].height,Dt,It,pt[st].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Vt,pt[st].width,pt[st].height,0,Dt,It,pt[st].data);for(let Lt=0;Lt<vt.length;Lt++){let Se=vt[Lt].image[st].image;U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,0,0,Se.width,Se.height,Dt,It,Se.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,Vt,Se.width,Se.height,0,Dt,It,Se.data)}}else{U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt,It,pt[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Vt,Dt,It,pt[st]);for(let Lt=0;Lt<vt.length;Lt++){let wt=vt[Lt];U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,0,0,Dt,It,wt.image[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,Vt,Dt,It,wt.image[st])}}}h(_)&&g(e.TEXTURE_CUBE_MAP),ot.__version=Z.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function gt(C,_,O,V,Z,ot){let at=a.convert(O.format,O.colorSpace),J=a.convert(O.type),Q=y(O.internalFormat,at,J,O.normalized,O.colorSpace),ct=i.get(_),Rt=i.get(O);if(Rt.__renderTarget=_,!ct.__hasExternalTextures){let pt=Math.max(1,_.width>>ot),ft=Math.max(1,_.height>>ot);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?n.texImage3D(Z,ot,Q,pt,ft,_.depth,0,at,J,null):n.texImage2D(Z,ot,Q,pt,ft,0,at,J,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),xe(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,V,Z,Rt.__webglTexture,0,de(_)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,V,Z,Rt.__webglTexture,ot),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ht(C,_,O){if(e.bindRenderbuffer(e.RENDERBUFFER,C),_.depthBuffer){let V=_.depthTexture,Z=V&&V.isDepthTexture?V.type:null,ot=T(_.stencilBuffer,Z),at=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;xe(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(_),ot,_.width,_.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,de(_),ot,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,ot,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,at,e.RENDERBUFFER,C)}else{let V=_.textures;for(let Z=0;Z<V.length;Z++){let ot=V[Z],at=a.convert(ot.format,ot.colorSpace),J=a.convert(ot.type),Q=y(ot.internalFormat,at,J,ot.normalized,ot.colorSpace);xe(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(_),Q,_.width,_.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,de(_),Q,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,Q,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ue(C,_,O){let V=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),Yt(e.TEXTURE_CUBE_MAP,_.depthTexture);let ct=a.convert(_.depthTexture.format),Rt=a.convert(_.depthTexture.type),pt;_.depthTexture.format===ys?pt=e.DEPTH_COMPONENT24:_.depthTexture.format===Xa&&(pt=e.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,pt,_.width,_.height,0,ct,Rt,null)}}else nt(_.depthTexture,0);let ot=Z.__webglTexture,at=de(_),J=V?e.TEXTURE_CUBE_MAP_POSITIVE_X+O:e.TEXTURE_2D,Q=_.depthTexture.format===Xa?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===ys)xe(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,J,ot,0,at):e.framebufferTexture2D(e.FRAMEBUFFER,Q,J,ot,0);else if(_.depthTexture.format===Xa)xe(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,J,ot,0,at):e.framebufferTexture2D(e.FRAMEBUFFER,Q,J,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xt(C){let _=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let V=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=V}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)Ue(_.__webglFramebuffer[V],C,V);else{let V=C.texture.mipmaps;V&&V.length>0?Ue(_.__webglFramebuffer[0],C,0):Ue(_.__webglFramebuffer,C,0)}else if(O){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=e.createRenderbuffer(),Ht(_.__webglDepthbuffer[V],C,!1);else{let Z=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer[V];e.bindRenderbuffer(e.RENDERBUFFER,ot),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,ot)}}else{let V=C.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Ht(_.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ot),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,ot)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function At(C,_,O){let V=i.get(C);_!==void 0&&gt(V.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),O!==void 0&&Xt(C)}function Ut(C){let _=C.texture,O=i.get(C),V=i.get(_);C.addEventListener("dispose",x);let Z=C.textures,ot=C.isWebGLCubeRenderTarget===!0,at=Z.length>1;if(at||(V.__webglTexture===void 0&&(V.__webglTexture=e.createTexture()),V.__version=_.version,r.memory.textures++),ot){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let Q=0;Q<_.mipmaps.length;Q++)O.__webglFramebuffer[J][Q]=e.createFramebuffer()}else O.__webglFramebuffer[J]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)O.__webglFramebuffer[J]=e.createFramebuffer()}else O.__webglFramebuffer=e.createFramebuffer();if(at)for(let J=0,Q=Z.length;J<Q;J++){let ct=i.get(Z[J]);ct.__webglTexture===void 0&&(ct.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&xe(C)===!1){O.__webglMultisampledFramebuffer=e.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let Q=Z[J];O.__webglColorRenderbuffer[J]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,O.__webglColorRenderbuffer[J]);let ct=a.convert(Q.format,Q.colorSpace),Rt=a.convert(Q.type),pt=y(Q.internalFormat,ct,Rt,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),ft=de(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,ft,pt,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.RENDERBUFFER,O.__webglColorRenderbuffer[J])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=e.createRenderbuffer(),Ht(O.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ot){n.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture),Yt(e.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)gt(O.__webglFramebuffer[J][Q],C,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else gt(O.__webglFramebuffer[J],C,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);h(_)&&g(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(at){for(let J=0,Q=Z.length;J<Q;J++){let ct=Z[J],Rt=i.get(ct),pt=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(pt,Rt.__webglTexture),Yt(pt,ct),gt(O.__webglFramebuffer,C,ct,e.COLOR_ATTACHMENT0+J,pt,0),h(ct)&&g(pt)}n.unbindTexture()}else{let J=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(J,V.__webglTexture),Yt(J,_),_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)gt(O.__webglFramebuffer[Q],C,_,e.COLOR_ATTACHMENT0,J,Q);else gt(O.__webglFramebuffer,C,_,e.COLOR_ATTACHMENT0,J,0);h(_)&&g(J),n.unbindTexture()}C.depthBuffer&&Xt(C)}function Gt(C){let _=C.textures;for(let O=0,V=_.length;O<V;O++){let Z=_[O];if(h(Z)){let ot=M(C),at=i.get(Z).__webglTexture;n.bindTexture(ot,at),g(ot),n.unbindTexture()}}}let jt=[],kt=[];function Ae(C){if(C.samples>0){if(xe(C)===!1){let _=C.textures,O=C.width,V=C.height,Z=e.COLOR_BUFFER_BIT,ot=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=i.get(C),J=_.length>1;if(J)for(let ct=0;ct<_.length;ct++)n.bindFramebuffer(e.FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,at.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let Q=C.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ct=0;ct<_.length;ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),J){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,at.__webglColorRenderbuffer[ct]);let Rt=i.get(_[ct]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Rt,0)}e.blitFramebuffer(0,0,O,V,0,0,O,V,Z,e.NEAREST),l===!0&&(jt.length=0,kt.length=0,jt.push(e.COLOR_ATTACHMENT0+ct),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(jt.push(ot),kt.push(ot),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,kt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,jt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),J)for(let ct=0;ct<_.length;ct++){n.bindFramebuffer(e.FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.RENDERBUFFER,at.__webglColorRenderbuffer[ct]);let Rt=i.get(_[ct]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,at.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.TEXTURE_2D,Rt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let _=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function de(C){return Math.min(s.maxSamples,C.samples)}function xe(C){let _=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(C){let _=r.render.frame;f.get(C)!==_&&(f.set(C,_),C.update())}function Fe(C,_){let O=C.colorSpace,V=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Sc&&O!==zi&&(re.getTransfer(O)===ye?(V!==Bi||Z!==vi)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",O)),_}function he(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=P,this.getTextureUnits=L,this.setTextureUnits=G,this.setTexture2D=nt,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=it,this.rebindTextures=At,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function xN(e,t){function n(i,s=zi){let a,r=re.getTransfer(s);if(i===vi)return e.UNSIGNED_BYTE;if(i===Vf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Gf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===N0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===D0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===C0)return e.BYTE;if(i===R0)return e.SHORT;if(i===sl)return e.UNSIGNED_SHORT;if(i===Hf)return e.INT;if(i===Qi)return e.UNSIGNED_INT;if(i===ji)return e.FLOAT;if(i===$i)return e.HALF_FLOAT;if(i===U0)return e.ALPHA;if(i===L0)return e.RGB;if(i===Bi)return e.RGBA;if(i===ys)return e.DEPTH_COMPONENT;if(i===Xa)return e.DEPTH_STENCIL;if(i===I0)return e.RED;if(i===kf)return e.RED_INTEGER;if(i===Wa)return e.RG;if(i===Xf)return e.RG_INTEGER;if(i===Wf)return e.RGBA_INTEGER;if(i===Vc||i===Gc||i===kc||i===Xc)if(r===ye)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Vc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Vc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qf||i===Yf||i===Zf||i===Jf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===qf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kf||i===Qf||i===jf||i===$f||i===td||i===Wc||i===ed)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Kf||i===Qf)return r===ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===jf)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===$f)return a.COMPRESSED_R11_EAC;if(i===td)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Wc)return a.COMPRESSED_RG11_EAC;if(i===ed)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===nd||i===id||i===sd||i===ad||i===rd||i===od||i===ld||i===cd||i===ud||i===hd||i===fd||i===dd||i===pd||i===md)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===nd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===id)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ad)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===od)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ld)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ud)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pd)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===md)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gd||i===_d||i===vd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===gd)return r===ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_d)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yd||i===xd||i===qc||i===Sd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===yd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===xd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===al?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var SN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,e_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Lc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Wn({vertexShader:SN,fragmentShader:MN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xn(new Er(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},n_=class extends xs{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,v=null,b=typeof XRWebGLBinding<"u",m=new e_,h={},g=n.getContextAttributes(),M=null,y=null,T=[],E=[],A=new ce,x=null,w=null,R=new Un;R.viewport=new We;let I=new Un;I.viewport=new We;let H=[R,I],P=new Pf,L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=T[Y];return tt===void 0&&(tt=new jo,T[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=T[Y];return tt===void 0&&(tt=new jo,T[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=T[Y];return tt===void 0&&(tt=new jo,T[Y]=tt),tt.getHandSpace()};function K(Y){let tt=E.indexOf(Y.inputSource);if(tt===-1)return;let xt=T[tt];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,c||r),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",nt);for(let Y=0;Y<T.length;Y++){let tt=E[Y];tt!==null&&(E[Y]=null,T[Y].disconnect(tt))}L=null,G=null,m.reset();for(let Y in h)delete h[Y];if(t.setRenderTarget(M),d=null,u=null,p=null,s=null,y=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),w!==null){let Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",q),s.addEventListener("inputsourceschange",nt),g.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ot=null,gt=null;g.depth&&(gt=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xt=g.stencil?Xa:ys,Ot=g.stencil?al:Qi);let Ht={colorFormat:n.RGBA8,depthFormat:gt,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Ht),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ei(u.textureWidth,u.textureHeight,{format:Bi,type:vi,depthTexture:new za(u.textureWidth,u.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,xt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ei(d.framebufferWidth,d.framebufferHeight,{format:Bi,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Y){for(let tt=0;tt<Y.removed.length;tt++){let xt=Y.removed[tt],Ot=E.indexOf(xt);Ot>=0&&(E[Ot]=null,T[Ot].disconnect(xt))}for(let tt=0;tt<Y.added.length;tt++){let xt=Y.added[tt],Ot=E.indexOf(xt);if(Ot===-1){for(let Ht=0;Ht<T.length;Ht++)if(Ht>=E.length){E.push(xt),Ot=Ht;break}else if(E[Ht]===null){E[Ht]=xt,Ot=Ht;break}if(Ot===-1)break}let gt=T[Ot];gt&&gt.connect(xt)}}let W=new X,$=new X;function it(Y,tt,xt){W.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(xt.matrixWorld);let Ot=W.distanceTo($),gt=tt.projectionMatrix.elements,Ht=xt.projectionMatrix.elements,Ue=gt[14]/(gt[10]-1),Xt=gt[14]/(gt[10]+1),At=(gt[9]+1)/gt[5],Ut=(gt[9]-1)/gt[5],Gt=(gt[8]-1)/gt[0],jt=(Ht[8]+1)/Ht[0],kt=Ue*Gt,Ae=Ue*jt,de=Ot/(-Gt+jt),xe=de*-Gt;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(xe),Y.translateZ(de),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),gt[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let D=Ue+de,Fe=Xt+de,he=kt-xe,C=Ae+(Ot-xe),_=At*Xt/Fe*D,O=Ut*Xt/Fe*D;Y.projectionMatrix.makePerspective(he,C,_,O,D,Fe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ct(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let tt=Y.near,xt=Y.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),P.near=I.near=R.near=tt,P.far=I.far=R.far=xt,(L!==P.near||G!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),L=P.near,G=P.far),P.layers.mask=Y.layers.mask|6,R.layers.mask=P.layers.mask&-5,I.layers.mask=P.layers.mask&-3;let Ot=Y.parent,gt=P.cameras;Ct(P,Ot);for(let Ht=0;Ht<gt.length;Ht++)Ct(gt[Ht],Ot);gt.length===2?it(P,R,I):P.projectionMatrix.copy(R.projectionMatrix),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),St(Y,P,Ot)};function St(Y,tt,xt){xt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=_f*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(Y){return h[Y]};let Qt=null;function Yt(Y,tt){if(f=tt.getViewerPose(c||r),v=tt,f!==null){let xt=f.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Ot=!1;xt.length!==P.cameras.length&&(P.cameras.length=0,Ot=!0);for(let Xt=0;Xt<xt.length;Xt++){let At=xt[Xt],Ut=null;if(d!==null)Ut=d.getViewport(At);else{let jt=p.getViewSubImage(u,At);Ut=jt.viewport,Xt===0&&(t.setRenderTargetTextures(y,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(y))}let Gt=H[Xt];Gt===void 0&&(Gt=new Un,Gt.layers.enable(Xt),Gt.viewport=new We,H[Xt]=Gt),Gt.matrix.fromArray(At.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(At.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),Xt===0&&(P.matrix.copy(Gt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ot===!0&&P.cameras.push(Gt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=i.getBinding();let Xt=p.getDepthInformation(xt[0]);Xt&&Xt.isValid&&Xt.texture&&m.init(Xt,s.renderState)}if(gt&&gt.includes("camera-access")&&b){t.state.unbindTexture(),p=i.getBinding();for(let Xt=0;Xt<xt.length;Xt++){let At=xt[Xt].camera;if(At){let Ut=h[At];Ut||(Ut=new Lc,h[At]=Ut);let Gt=p.getCameraImage(At);Ut.sourceTexture=Gt}}}}for(let xt=0;xt<T.length;xt++){let Ot=E[xt],gt=T[xt];Ot!==null&&gt!==void 0&&gt.update(Ot,tt,c||r)}Qt&&Qt(Y,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),v=null}let ne=new s1;ne.setAnimationLoop(Yt),this.setAnimationLoop=function(Y){Qt=Y},this.dispose=function(){}}},bN=new Je,u1=new qt;u1.set(-1,0,0,0,1,0,0,0,1);function TN(e,t){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,z0(e)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,g,M,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(m,h):h.isMeshLambertMaterial?(a(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(m,h),p(m,h)):h.isMeshPhongMaterial?(a(m,h),f(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(m,h),u(m,h),h.isMeshPhysicalMaterial&&d(m,h,y)):h.isMeshMatcapMaterial?(a(m,h),v(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),b(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,g,M):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===qn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===qn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let g=t.get(h),M=g.envMap,y=g.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(bN.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(u1),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=M*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function d(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===qn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function b(m,h){let g=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function EN(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let E=T.program;i.uniformBlockBinding(y,E)}function c(y,T){let E=s[y.id];E===void 0&&(m(y),E=f(y),s[y.id]=E,y.addEventListener("dispose",g));let A=T.program;i.updateUBOMapping(y,A);let x=t.render.frame;a[y.id]!==x&&(u(y),a[y.id]=x)}function f(y){let T=p();y.__bindingPointIndex=T;let E=e.createBuffer(),A=y.__size,x=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,A,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,E),E}function p(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let T=s[y.id],E=y.uniforms,A=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let x=0,w=E.length;x<w;x++){let R=E[x];if(Array.isArray(R))for(let I=0,H=R.length;I<H;I++)d(R[I],x,I,A);else d(R,x,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(y,T,E,A){if(b(y,T,E,A)===!0){let x=y.__offset,w=y.value;if(Array.isArray(w)){let R=0;for(let I=0;I<w.length;I++){let H=w[I],P=h(H);v(H,y.__data,R),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(R+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(w,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,y.__data)}}function v(y,T,E){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,E)}function b(y,T,E,A){let x=y.value,w=T+"_"+E;if(A[w]===void 0)return typeof x=="number"||typeof x=="boolean"?A[w]=x:ArrayBuffer.isView(x)?A[w]=x.slice():A[w]=x.clone(),!0;{let R=A[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(y){let T=y.uniforms,E=0,A=16;for(let w=0,R=T.length;w<R;w++){let I=Array.isArray(T[w])?T[w]:[T[w]];for(let H=0,P=I.length;H<P;H++){let L=I[H],G=Array.isArray(L.value)?L.value:[L.value];for(let K=0,q=G.length;K<q;K++){let nt=G[K],W=h(nt),$=E%A,it=$%W.boundary,Ct=$+it;E+=it,Ct!==0&&A-Ct<W.storage&&(E+=A-Ct),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=W.storage}}}let x=E%A;return x>0&&(E+=A-x),y.__size=E,y.__cache={},this}function h(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",y),T}function g(y){let T=y.target;T.removeEventListener("dispose",g);let E=r.indexOf(T.__bindingPointIndex);r.splice(E,1),e.deleteBuffer(s[T.id]),delete s[T.id],delete a[T.id]}function M(){for(let y in s)e.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:l,update:c,dispose:M}}var AN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Es=null;function wN(){return Es===null&&(Es=new tl(AN,16,16,Wa,$i),Es.name="DFG_LUT",Es.minFilter=cn,Es.magFilter=cn,Es.wrapS=vs,Es.wrapT=vs,Es.generateMipmaps=!1,Es.needsUpdate=!0),Es}var Cd=class{constructor(t={}){let{canvas:n=Rb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=vi}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let b=d,m=new Set([Wf,Xf,kf]),h=new Set([vi,Qi,sl,al,Vf,Gf]),g=new Uint32Array(4),M=new Int32Array(4),y=new X,T=null,E=null,A=[],x=[],w=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,H=null,P=null,L=null,G=null;this._outputColorSpace=gi;let K=0,q=0,nt=null,W=-1,$=null,it=new We,Ct=new We,St=null,Qt=new ue(0),Yt=0,ne=n.width,Y=n.height,tt=1,xt=null,Ot=null,gt=new We(0,0,ne,Y),Ht=new We(0,0,ne,Y),Ue=!1,Xt=new Dc,At=!1,Ut=!1,Gt=new Je,jt=new X,kt=new We,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function xe(){return nt===null?tt:1}let D=i;function Fe(S,N){return n.getContext(S,N)}let he,C,_,O,V,Z,ot,at,J,Q,ct,Rt,pt,ft,Dt,It,Vt,U,ut,j,ht,vt,st;try{let S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",k,!1),n.addEventListener("webglcontextcreationerror",rt,!1),D===null){let N="webgl2";if(D=Fe(N,S),D===null)throw Fe(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(S){throw n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",k,!1),n.removeEventListener("webglcontextcreationerror",rt,!1),Bt("WebGLRenderer: "+S.message),S}function Lt(){he=new I3(D),he.init(),ht=new xN(D,he),C=new T3(D,he,t,ht),_=new vN(D,he),C.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),P=D.createFramebuffer(),L=D.createFramebuffer(),G=D.createFramebuffer(),O=new B3(D),V=new sN,Z=new yN(D,he,_,V,C,ht,O),ot=new L3(R),at=new Fw(D),vt=new M3(D,at),J=new O3(D,at,O,vt),Q=new F3(D,J,at,vt,O),U=new z3(D,C,Z),Dt=new E3(V),ct=new iN(R,ot,he,C,vt,Dt),Rt=new TN(R,V),pt=new rN,ft=new fN(he),Vt=new S3(R,ot,_,Q,v,l),It=new _N(R,Q,C),st=new EN(D,O,C,_),ut=new b3(D,he,O),j=new P3(D,he,O),O.programs=ct.programs,R.capabilities=C,R.extensions=he,R.properties=V,R.renderLists=pt,R.shadowMap=It,R.state=_,R.info=O}b!==vi&&(w=new V3(b,n.width,n.height,o,s,a));let wt=new n_(R,D);this.xr=wt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let S=he.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=he.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(ne,Y,!1))},this.getSize=function(S){return S.set(ne,Y)},this.setSize=function(S,N,B=!0){if(wt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=S,Y=N,n.width=Math.floor(S*tt),n.height=Math.floor(N*tt),B===!0&&(n.style.width=S+"px",n.style.height=N+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(ne*tt,Y*tt).floor()},this.setDrawingBufferSize=function(S,N,B){ne=S,Y=N,tt=B,n.width=Math.floor(S*B),n.height=Math.floor(N*B),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(b===vi){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(it)},this.getViewport=function(S){return S.copy(gt)},this.setViewport=function(S,N,B,F){S.isVector4?gt.set(S.x,S.y,S.z,S.w):gt.set(S,N,B,F),_.viewport(it.copy(gt).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(Ht)},this.setScissor=function(S,N,B,F){S.isVector4?Ht.set(S.x,S.y,S.z,S.w):Ht.set(S,N,B,F),_.scissor(Ct.copy(Ht).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(S){_.setScissorTest(Ue=S)},this.setOpaqueSort=function(S){xt=S},this.setTransparentSort=function(S){Ot=S},this.getClearColor=function(S){return S.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,B=!0){let F=0;if(S){let z=!1;if(nt!==null){let mt=nt.texture.format;z=m.has(mt)}if(z){let mt=nt.texture.type,yt=h.has(mt),lt=Vt.getClearColor(),bt=Vt.getClearAlpha(),Mt=lt.r,Pt=lt.g,$t=lt.b;yt?(g[0]=Mt,g[1]=Pt,g[2]=$t,g[3]=bt,D.clearBufferuiv(D.COLOR,0,g)):(M[0]=Mt,M[1]=Pt,M[2]=$t,M[3]=bt,D.clearBufferiv(D.COLOR,0,M))}else F|=D.COLOR_BUFFER_BIT}N&&(F|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),B&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),H=S},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",k,!1),n.removeEventListener("webglcontextcreationerror",rt,!1),Vt.dispose(),pt.dispose(),ft.dispose(),V.dispose(),ot.dispose(),Q.dispose(),vt.dispose(),st.dispose(),ct.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Le),wt.removeEventListener("sessionend",an),On.stop()};function Se(S){S.preventDefault(),B0("WebGLRenderer: Context Lost."),I=!0}function k(){B0("WebGLRenderer: Context Restored."),I=!1;let S=O.autoReset,N=It.enabled,B=It.autoUpdate,F=It.needsUpdate,z=It.type;Lt(),O.autoReset=S,It.enabled=N,It.autoUpdate=B,It.needsUpdate=F,It.type=z}function rt(S){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function dt(S){let N=S.target;N.removeEventListener("dispose",dt),Nt(N)}function Nt(S){Zt(S),V.remove(S)}function Zt(S){let N=V.get(S).programs;N!==void 0&&(N.forEach(function(B){ct.releaseProgram(B)}),S.isShaderMaterial&&ct.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,B,F,z,mt){N===null&&(N=Ae);let yt=z.isMesh&&z.matrixWorld.determinantAffine()<0,lt=fl(S,N,B,F,z);_.setMaterial(F,yt);let bt=B.index,Mt=1;if(F.wireframe===!0){if(bt=J.getWireframeAttribute(B),bt===void 0)return;Mt=2}let Pt=B.drawRange,$t=B.attributes.position,Et=Pt.start*Mt,Jt=(Pt.start+Pt.count)*Mt;mt!==null&&(Et=Math.max(Et,mt.start*Mt),Jt=Math.min(Jt,(mt.start+mt.count)*Mt)),bt!==null?(Et=Math.max(Et,0),Jt=Math.min(Jt,bt.count)):$t!=null&&(Et=Math.max(Et,0),Jt=Math.min(Jt,$t.count));let je=Jt-Et;if(je<0||je===1/0)return;vt.setup(z,F,lt,B,bt);let He,Re=ut;if(bt!==null&&(He=at.get(bt),Re=j,Re.setIndex(He)),z.isMesh)F.wireframe===!0?(_.setLineWidth(F.wireframeLinewidth*xe()),Re.setMode(D.LINES)):Re.setMode(D.TRIANGLES);else if(z.isLine){let An=F.linewidth;An===void 0&&(An=1),_.setLineWidth(An*xe()),z.isLineSegments?Re.setMode(D.LINES):z.isLineLoop?Re.setMode(D.LINE_LOOP):Re.setMode(D.LINE_STRIP)}else z.isPoints?Re.setMode(D.POINTS):z.isSprite&&Re.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Re.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let An=z._multiDrawStarts,Tt=z._multiDrawCounts,zn=z._multiDrawCount,fe=bt?at.get(bt).bytesPerElement:1,Si=V.get(F).currentProgram.getUniforms();for(let ts=0;ts<zn;ts++)Si.setValue(D,"_gl_DrawID",ts),Re.render(An[ts]/fe,Tt[ts])}else if(z.isInstancedMesh)Re.renderInstances(Et,je,z.count);else if(B.isInstancedBufferGeometry){let An=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Tt=Math.min(B.instanceCount,An);Re.renderInstances(Et,je,Tt)}else Re.render(Et,je)};function oe(S,N,B,F){H!==null&&S.isNodeMaterial&&H.setObject(F,S),At===!0&&Dt.setState(S,B,!1),S.transparent===!0&&S.side===Pi&&S.forceSinglePass===!1?(S.side=qn,S.needsUpdate=!0,Bn(S,N,F),S.side=Ga,S.needsUpdate=!0,Bn(S,N,F),S.side=Pi):Bn(S,N,F)}this.compile=function(S,N,B=null){B===null&&(B=S),H!==null&&H.renderStart(S,N,B),E=ft.get(B),E.init(N),x.push(E),B.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),S!==B&&S.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),H!==null&&H.updateLights(E.state.lightsArray),Ut=this.localClippingEnabled,At=Dt.init(this.clippingPlanes,Ut),At===!0&&Dt.setGlobalState(this.clippingPlanes,N),H!==null&&It.render(E.state.shadowsArray,B,N);let F=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let mt=z.material;if(mt)if(Array.isArray(mt))for(let yt=0;yt<mt.length;yt++){let lt=mt[yt];oe(lt,B,N,z),F.add(lt)}else oe(mt,B,N,z),F.add(mt)}),E=x.pop(),H!==null&&H.renderEnd(),F},this.compileAsync=function(S,N,B=null){let F=this.compile(S,N,B);return new Promise(z=>{function mt(){if(F.forEach(function(yt){let bt=V.get(yt).currentProgram;(bt===void 0||bt.isReady())&&F.delete(yt)}),F.size===0){z(S);return}setTimeout(mt,10)}he.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Me=null;function me(S){Me&&Me(S)}function Le(){On.stop()}function an(){On.start()}let On=new s1;On.setAnimationLoop(me),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(S){Me=S,wt.setAnimationLoop(S),S===null?On.stop():On.start()},wt.addEventListener("sessionstart",Le),wt.addEventListener("sessionend",an),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;H!==null&&H.renderStart(S,N);let B=wt.enabled===!0&&wt.isPresenting===!0,F=w!==null&&(nt===null||B)&&w.begin(R,nt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(N),N=wt.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,N,nt),E=ft.get(S,x.length),E.init(N),E.state.textureUnits=Z.getTextureUnits(),x.push(E),Gt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Xt.setFromProjectionMatrix(Gt,Ji,N.reversedDepth),Ut=this.localClippingEnabled,At=Dt.init(this.clippingPlanes,Ut),T=pt.get(S,A.length),T.init(),A.push(T),wt.enabled===!0&&wt.isPresenting===!0){let yt=R.xr.getDepthSensingMesh();yt!==null&&yi(yt,N,-1/0,R.sortObjects)}yi(S,N,0,R.sortObjects),T.finish(),H!==null&&H.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(xt,Ot),de=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,de&&Vt.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),At===!0&&Dt.beginShadows();let z=E.state.shadowsArray;if(It.render(z,S,N),At===!0&&Dt.endShadows(),(F&&w.hasRenderPass())===!1){let yt=T.opaque,lt=T.transmissive;if(E.setupLights(),N.isArrayCamera){let bt=N.cameras;if(lt.length>0)for(let Mt=0,Pt=bt.length;Mt<Pt;Mt++){let $t=bt[Mt];Js(yt,lt,S,$t)}de&&Vt.render(S);for(let Mt=0,Pt=bt.length;Mt<Pt;Mt++){let $t=bt[Mt];Pn(T,S,$t,$t.viewport)}}else lt.length>0&&Js(yt,lt,S,N),de&&Vt.render(S),Pn(T,S,N)}nt!==null&&q===0&&(Z.updateMultisampleRenderTarget(nt),Z.updateRenderTargetMipmap(nt)),F&&w.end(R),S.isScene===!0&&S.onAfterRender(R,S,N),vt.resetDefaultState(),W=-1,$=null,x.pop(),x.length>0?(E=x[x.length-1],Z.setTextureUnits(E.state.textureUnits),At===!0&&Dt.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,H!==null&&H.renderEnd()};function yi(S,N,B,F){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Xt)){F&&kt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Gt);let yt=Q.update(S),lt=S.material;lt.visible&&T.push(S,yt,lt,B,kt.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Xt))){let yt=Q.update(S),lt=S.material;if(F&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),kt.copy(S.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),kt.copy(yt.boundingSphere.center)),kt.applyMatrix4(S.matrixWorld).applyMatrix4(Gt)),Array.isArray(lt)){let bt=yt.groups;for(let Mt=0,Pt=bt.length;Mt<Pt;Mt++){let $t=bt[Mt],Et=lt[$t.materialIndex];Et&&Et.visible&&T.push(S,yt,Et,B,kt.z,$t,N)}}else lt.visible&&T.push(S,yt,lt,B,kt.z,null,N)}}let mt=S.children;for(let yt=0,lt=mt.length;yt<lt;yt++)yi(mt[yt],N,B,F)}function Pn(S,N,B,F){let{opaque:z,transmissive:mt,transparent:yt}=S;E.setupLightsView(B),At===!0&&Dt.setGlobalState(R.clippingPlanes,B),F&&_.viewport(it.copy(F)),z.length>0&&xi(z,N,B),mt.length>0&&xi(mt,N,B),yt.length>0&&xi(yt,N,B),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Js(S,N,B,F){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[F.id]===void 0){let Et=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[F.id]=new ei(1,1,{generateMipmaps:!0,type:Et?$i:vi,minFilter:Ts,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let mt=E.state.transmissionRenderTarget[F.id],yt=F.viewport||it;mt.setSize(yt.z*R.transmissionResolutionScale,yt.w*R.transmissionResolutionScale);let lt=R.getRenderTarget(),bt=R.getActiveCubeFace(),Mt=R.getActiveMipmapLevel();R.setRenderTarget(mt),R.getClearColor(Qt),Yt=R.getClearAlpha(),Yt<1&&R.setClearColor(16777215,.5),R.clear(),de&&Vt.render(B);let Pt=R.toneMapping;R.toneMapping=Ki;let $t=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),E.setupLightsView(F),At===!0&&Dt.setGlobalState(R.clippingPlanes,F),xi(S,B,F),Z.updateMultisampleRenderTarget(mt),Z.updateRenderTargetMipmap(mt),he.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let Jt=0,je=N.length;Jt<je;Jt++){let He=N[Jt],{object:Re,geometry:An,material:Tt,group:zn}=He;if(Tt.side===Pi&&Re.layers.test(F.layers)){let fe=Tt.side;Tt.side=qn,Tt.needsUpdate=!0,ni(Re,B,F,An,Tt,zn),Tt.side=fe,Tt.needsUpdate=!0,Et=!0}}Et===!0&&(Z.updateMultisampleRenderTarget(mt),Z.updateRenderTargetMipmap(mt))}R.setRenderTarget(lt,bt,Mt),R.setClearColor(Qt,Yt),$t!==void 0&&(F.viewport=$t),R.toneMapping=Pt}function xi(S,N,B){let F=N.isScene===!0?N.overrideMaterial:null;for(let z=0,mt=S.length;z<mt;z++){let yt=S[z],{object:lt,geometry:bt,group:Mt}=yt,Pt=yt.material;Pt.allowOverride===!0&&F!==null&&(Pt=F),lt.layers.test(B.layers)&&ni(lt,N,B,bt,Pt,Mt)}}function ni(S,N,B,F,z,mt){H!==null&&z.isNodeMaterial&&H.setObject(S,z),S.onBeforeRender(R,N,B,F,z,mt),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(R,N,B,F,S,mt),z.transparent===!0&&z.side===Pi&&z.forceSinglePass===!1?(z.side=qn,z.needsUpdate=!0,R.renderBufferDirect(B,N,F,z,S,mt),z.side=Ga,z.needsUpdate=!0,R.renderBufferDirect(B,N,F,z,S,mt),z.side=Pi):R.renderBufferDirect(B,N,F,z,S,mt),S.onAfterRender(R,N,B,F,z,mt)}function Bn(S,N,B){N.isScene!==!0&&(N=Ae);let F=V.get(S),z=E.state.lights,mt=E.state.shadowsArray,yt=z.state.version,lt=ct.getParameters(S,z.state,mt,N,B,E.state.lightProbeGridArray),bt=ct.getProgramCacheKey(lt),Mt=F.programs;F.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,F.fog=N.fog;let Pt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;F.envMap=ot.get(S.envMap||F.environment,Pt),F.envMapRotation=F.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Mt===void 0&&(S.addEventListener("dispose",dt),Mt=new Map,F.programs=Mt);let $t=Mt.get(bt);if($t!==void 0){if(F.currentProgram===$t&&F.lightsStateVersion===yt)return qa(S,lt),$t}else lt.uniforms=ct.getUniforms(S),H!==null&&S.isNodeMaterial&&H.build(S,B,lt),S.onBeforeCompile(lt,R),$t=ct.acquireProgram(lt,bt),Mt.set(bt,$t),F.uniforms=lt.uniforms;let Et=F.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=Dt.uniform),qa(S,lt),F.needsLights=Id(S),F.lightsStateVersion=yt,F.needsLights&&(Et.ambientLightColor.value=z.state.ambient,Et.lightProbe.value=z.state.probe,Et.sunLights.value=z.state.sun,Et.sunLightShadows.value=z.state.sunShadow,Et.directionalLights.value=z.state.directional,Et.directionalLightShadows.value=z.state.directionalShadow,Et.spotLights.value=z.state.spot,Et.spotLightShadows.value=z.state.spotShadow,Et.rectAreaLights.value=z.state.rectArea,Et.ltc_1.value=z.state.rectAreaLTC1,Et.ltc_2.value=z.state.rectAreaLTC2,Et.pointLights.value=z.state.point,Et.pointLightShadows.value=z.state.pointShadow,Et.hemisphereLights.value=z.state.hemi,Et.sunShadowMatrix.value=z.state.sunShadowMatrix,Et.sunShadowCascade.value=z.state.sunShadowCascade,Et.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Et.spotLightMatrix.value=z.state.spotLightMatrix,Et.spotLightMap.value=z.state.spotLightMap,Et.pointShadowMatrix.value=z.state.pointShadowMatrix),F.lightProbeGrid=E.state.lightProbeGridArray.length>0,F.currentProgram=$t,F.uniformsList=null,$t}function Nr(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=ll.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function qa(S,N){let B=V.get(S);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function hl(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let B=0,F=S.length;B<F;B++){let z=S[B];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function fl(S,N,B,F,z){N.isScene!==!0&&(N=Ae),Z.resetTextureUnits();let mt=N.fog,yt=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?N.environment:null,lt=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:re.workingColorSpace,bt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Mt=ot.get(F.envMap||yt,bt),Pt=F.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,$t=!!B.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Et=!!B.morphAttributes.position,Jt=!!B.morphAttributes.normal,je=!!B.morphAttributes.color,He=Ki;F.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(He=R.toneMapping);let Re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,An=Re!==void 0?Re.length:0,Tt=V.get(F),zn=E.state.lights;if(At===!0&&(Ut===!0||S!==$)){let Ie=S===$&&F.id===W;Dt.setState(F,S,Ie)}let fe=!1;F.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==zn.state.version||Tt.outputColorSpace!==lt||z.isBatchedMesh&&Tt.batching===!1||!z.isBatchedMesh&&Tt.batching===!0||z.isBatchedMesh&&Tt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Tt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Tt.instancing===!1||!z.isInstancedMesh&&Tt.instancing===!0||z.isSkinnedMesh&&Tt.skinning===!1||!z.isSkinnedMesh&&Tt.skinning===!0||z.isInstancedMesh&&Tt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Tt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Tt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Tt.instancingMorph===!1&&z.morphTexture!==null||Tt.envMap!==Mt||F.fog===!0&&Tt.fog!==mt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Dt.numPlanes||Tt.numIntersection!==Dt.numIntersection)||Tt.vertexAlphas!==Pt||Tt.vertexTangents!==$t||Tt.morphTargets!==Et||Tt.morphNormals!==Jt||Tt.morphColors!==je||Tt.toneMapping!==He||Tt.morphTargetsCount!==An||!!Tt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,Tt.__version=F.version);let Si=Tt.currentProgram;fe===!0&&(Si=Bn(F,N,z),H&&F.isNodeMaterial&&H.onUpdateProgram(F,Si,Tt));let ts=!1,Ks=!1,Ur=!1,we=Si.getUniforms(),Ke=Tt.uniforms;if(_.useProgram(Si.program)&&(ts=!0,Ks=!0,Ur=!0),F.id!==W&&(W=F.id,Ks=!0),Tt.needsLights){let Ie=hl(E.state.lightProbeGridArray,z);Tt.lightProbeGrid!==Ie&&(Tt.lightProbeGrid=Ie,Ks=!0)}if(ts||$!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),we.setValue(D,"projectionMatrix",S.projectionMatrix),we.setValue(D,"viewMatrix",S.matrixWorldInverse);let js=we.map.cameraPosition;js!==void 0&&js.setValue(D,jt.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&we.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&we.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),$!==S&&($=S,Ks=!0,Ur=!0)}if(Tt.needsLights&&(zn.state.sunShadowMap.length>0&&we.setValue(D,"sunShadowMap",zn.state.sunShadowMap,Z),zn.state.directionalShadowMap.length>0&&we.setValue(D,"directionalShadowMap",zn.state.directionalShadowMap,Z),zn.state.spotShadowMap.length>0&&we.setValue(D,"spotShadowMap",zn.state.spotShadowMap,Z),zn.state.pointShadowMap.length>0&&we.setValue(D,"pointShadowMap",zn.state.pointShadowMap,Z)),z.isSkinnedMesh){we.setOptional(D,z,"bindMatrix"),we.setOptional(D,z,"bindMatrixInverse");let Ie=z.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),we.setValue(D,"boneTexture",Ie.boneTexture,Z))}z.isBatchedMesh&&(we.setOptional(D,z,"batchingTexture"),we.setValue(D,"batchingTexture",z._matricesTexture,Z),we.setOptional(D,z,"batchingIdTexture"),we.setValue(D,"batchingIdTexture",z._indirectTexture,Z),we.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&we.setValue(D,"batchingColorTexture",z._colorsTexture,Z));let Qs=B.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0)&&U.update(z,B,Si),(Ks||Tt.receiveShadow!==z.receiveShadow)&&(Tt.receiveShadow=z.receiveShadow,we.setValue(D,"receiveShadow",z.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&N.environment!==null&&(Ke.envMapIntensity.value=N.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=wN()),Ks){if(we.setValue(D,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&Ld(Ke,Ur),mt&&F.fog===!0&&Rt.refreshFogUniforms(Ke,mt),Rt.refreshMaterialUniforms(Ke,F,tt,Y,E.state.transmissionRenderTarget[S.id]),Tt.needsLights&&Tt.lightProbeGrid){let Ie=Tt.lightProbeGrid;Ke.probesSH.value=Ie.texture,Ke.probesMin.value.copy(Ie.boundingBox.min),Ke.probesMax.value.copy(Ie.boundingBox.max),Ke.probesResolution.value.copy(Ie.resolution)}ll.upload(D,Nr(Tt),Ke,Z)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ll.upload(D,Nr(Tt),Ke,Z),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&we.setValue(D,"center",z.center),we.setValue(D,"modelViewMatrix",z.modelViewMatrix),we.setValue(D,"normalMatrix",z.normalMatrix),we.setValue(D,"modelMatrix",z.matrixWorld),F.uniformsGroups!==void 0){let Ie=F.uniformsGroups;for(let js=0,Lr=Ie.length;js<Lr;js++){let a_=Ie[js];st.update(a_,Si),st.bind(a_,Si)}}return Si}function Ld(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Id(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(S,N,B){let F=V.get(S);F.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),V.get(S.texture).__webglTexture=N,V.get(S.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:B,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let B=V.get(S);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,B=0){nt=S,K=N,q=B;let F=null,z=!1,mt=!1;if(S){let lt=V.get(S);if(lt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,lt.__webglFramebuffer),it.copy(S.viewport),Ct.copy(S.scissor),St=S.scissorTest,_.viewport(it),_.scissor(Ct),_.setScissorTest(St),W=-1;return}else if(lt.__webglFramebuffer===void 0)Z.setupRenderTarget(S);else if(lt.__hasExternalTextures)Z.rebindTextures(S,V.get(S.texture).__webglTexture,V.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Pt=S.depthTexture;if(lt.__boundDepthTexture!==Pt){if(Pt!==null&&V.has(Pt)&&(S.width!==Pt.image.width||S.height!==Pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(S)}}let bt=S.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(mt=!0);let Mt=V.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Mt[N])?F=Mt[N][B]:F=Mt[N],z=!0):S.samples>0&&Z.useMultisampledRTT(S)===!1?F=V.get(S).__webglMultisampledFramebuffer:Array.isArray(Mt)?F=Mt[B]:F=Mt,it.copy(S.viewport),Ct.copy(S.scissor),St=S.scissorTest}else it.copy(gt).multiplyScalar(tt).floor(),Ct.copy(Ht).multiplyScalar(tt).floor(),St=Ue;if(B!==0&&(F=P),_.bindFramebuffer(D.FRAMEBUFFER,F)&&_.drawBuffers(S,F),_.viewport(it),_.scissor(Ct),_.setScissorTest(St),z){let lt=V.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,lt.__webglTexture,B)}else if(mt){let lt=N;for(let bt=0;bt<S.textures.length;bt++){let Mt=V.get(S.textures[bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+bt,Mt.__webglTexture,B,lt)}}else if(S!==null&&B!==0){let lt=V.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,lt.__webglTexture,B)}W=-1};function Dr(S){let N=V.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=C.textureFormatReadable(S.format),N.__typeReadable=C.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,B,F,z,mt,yt,lt=0){if(!(S&&S.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt]),bt){_.bindFramebuffer(D.FRAMEBUFFER,bt);try{let Mt=S.textures[lt],Pt=Mt.format,$t=Mt.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+lt);let Et=Dr(Mt);if(Et.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-F&&B>=0&&B<=S.height-z&&D.readPixels(N,B,F,z,ht.convert(Pt),ht.convert($t),mt)}finally{let Mt=nt!==null?V.get(nt).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(S,N,B,F,z,mt,yt,lt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt]),bt)if(N>=0&&N<=S.width-F&&B>=0&&B<=S.height-z){_.bindFramebuffer(D.FRAMEBUFFER,bt);let Mt=S.textures[lt],Pt=Mt.format,$t=Mt.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+lt);let Et=Dr(Mt);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Jt),D.bufferData(D.PIXEL_PACK_BUFFER,mt.byteLength,D.STREAM_READ),D.readPixels(N,B,F,z,ht.convert(Pt),ht.convert($t),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let je=nt!==null?V.get(nt).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,je);let He=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Db(D,He,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Jt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,mt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Jt),D.deleteSync(He),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,B=0){let F=Math.pow(2,-B),z=Math.floor(S.image.width*F),mt=Math.floor(S.image.height*F),yt=N!==null?N.x:0,lt=N!==null?N.y:0;Z.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,yt,lt,z,mt),_.unbindTexture()},this.copyTextureToTexture=function(S,N,B=null,F=null,z=0,mt=0){let yt,lt,bt,Mt,Pt,$t,Et,Jt,je,He=S.isCompressedTexture?S.mipmaps[mt]:S.image;if(B!==null)yt=B.max.x-B.min.x,lt=B.max.y-B.min.y,bt=B.isBox3?B.max.z-B.min.z:1,Mt=B.min.x,Pt=B.min.y,$t=B.isBox3?B.min.z:0;else{let Ke=Math.pow(2,-z);yt=Math.floor(He.width*Ke),lt=Math.floor(He.height*Ke),S.isDataArrayTexture?bt=He.depth:S.isData3DTexture?bt=Math.floor(He.depth*Ke):bt=1,Mt=0,Pt=0,$t=0}F!==null?(Et=F.x,Jt=F.y,je=F.z):(Et=0,Jt=0,je=0);let Re=ht.convert(N.format),An=ht.convert(N.type),Tt;N.isData3DTexture?(Z.setTexture3D(N,0),Tt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),Tt=D.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),Tt=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let zn=_.getParameter(D.UNPACK_ROW_LENGTH),fe=_.getParameter(D.UNPACK_IMAGE_HEIGHT),Si=_.getParameter(D.UNPACK_SKIP_PIXELS),ts=_.getParameter(D.UNPACK_SKIP_ROWS),Ks=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,He.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,He.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Mt),_.pixelStorei(D.UNPACK_SKIP_ROWS,Pt),_.pixelStorei(D.UNPACK_SKIP_IMAGES,$t);let Ur=S.isDataArrayTexture||S.isData3DTexture,we=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let Ke=V.get(S),Qs=V.get(N),Ie=V.get(Ke.__renderTarget),js=V.get(Qs.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,Ie.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,js.__webglFramebuffer);for(let Lr=0;Lr<bt;Lr++)Ur&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(S).__webglTexture,z,$t+Lr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(N).__webglTexture,mt,je+Lr)),D.blitFramebuffer(Mt,Pt,yt,lt,Et,Jt,yt,lt,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||V.has(S)){let Ke=V.get(S),Qs=V.get(N);_.bindFramebuffer(D.READ_FRAMEBUFFER,L),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let Ie=0;Ie<bt;Ie++)Ur?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ke.__webglTexture,z,$t+Ie):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ke.__webglTexture,z),we?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Qs.__webglTexture,mt,je+Ie):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Qs.__webglTexture,mt),z!==0?D.blitFramebuffer(Mt,Pt,yt,lt,Et,Jt,yt,lt,D.COLOR_BUFFER_BIT,D.NEAREST):we?D.copyTexSubImage3D(Tt,mt,Et,Jt,je+Ie,Mt,Pt,yt,lt):D.copyTexSubImage2D(Tt,mt,Et,Jt,Mt,Pt,yt,lt);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else we?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Tt,mt,Et,Jt,je,yt,lt,bt,Re,An,He.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,mt,Et,Jt,je,yt,lt,bt,Re,He.data):D.texSubImage3D(Tt,mt,Et,Jt,je,yt,lt,bt,Re,An,He):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,mt,Et,Jt,yt,lt,Re,An,He.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,mt,Et,Jt,He.width,He.height,Re,He.data):D.texSubImage2D(D.TEXTURE_2D,mt,Et,Jt,yt,lt,Re,An,He);_.pixelStorei(D.UNPACK_ROW_LENGTH,zn),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Si),_.pixelStorei(D.UNPACK_SKIP_ROWS,ts),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Ks),mt===0&&N.generateMipmaps&&D.generateMipmap(Tt),_.unbindTexture()},this.initRenderTarget=function(S){V.get(S).__webglFramebuffer===void 0&&Z.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Z.setTextureCube(S,0):S.isData3DTexture?Z.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Z.setTexture2DArray(S,0):Z.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){K=0,q=0,nt=null,_.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),n.unpackColorSpace=re._getUnpackColorSpace()}};function h1(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=h1(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function f1(){for(var e,t,n=0,i="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=h1(e))&&(i&&(i+=" "),i+=t);return i}var sn=Ir(Qc()),ul=28,Ud=5,DN=52*Math.PI/180,UN=.035,i_=28,g1=42,LN=34,IN=32,ON=Math.PI*2,_1=[["https://pro.reactbits.dev/demo-media/abstract-iris-window.webp","Iris window","An opening into color"],["https://pro.reactbits.dev/demo-media/abstract-citrus-signal.webp","Citrus signal","A sharp citrus accent"],["https://pro.reactbits.dev/demo-media/abstract-rose-petal.webp","Rose petal","Three curves in conversation"],["https://pro.reactbits.dev/demo-media/abstract-spectrum.webp","Spectrum","A study in pink and violet"],["https://pro.reactbits.dev/demo-media/abstract-spectrum-shift.webp","Spectrum shift","A shift toward coral"],["https://pro.reactbits.dev/demo-media/abstract-rose-balance.webp","Rose balance","A bright point of balance"],["https://pro.reactbits.dev/demo-media/abstract-amber-loop.webp","Amber loop","Warmth around an open center"],["https://pro.reactbits.dev/demo-media/abstract-coral-fold.webp","Coral fold","A bold change of direction"]].map(([e,t,n])=>({src:e,alt:`${t}, ${n.toLowerCase()}`,title:t,subtitle:n})),En=(e,t,n)=>Math.min(n,Math.max(t,e)),PN=e=>{let t=window.matchMedia("(prefers-reduced-motion: reduce)");return t.addEventListener("change",e),()=>t.removeEventListener("change",e)},BN=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,S1=e=>{let t=e.trim().replace("#","");if(!/^[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(t))return null;let n=t.length===3?t.replace(/./g,i=>i+i):t;return[0,2,4].map(i=>Number.parseInt(n.slice(i,i+2),16)/255)},M1=e=>{let t=S1(e);return t?.2126*t[0]+.7152*t[1]+.0722*t[2]>.6:!1},zN=(e,t,n,i,s,a)=>{let r=ON/Math.max(s,.02),o=Math.max(1,Math.ceil(i/(1/240))),l=i/o,c=t,f=e;for(let p=0;p<o;p++)c+=(r*r*(n-f)-2*a*r*c)*l,f+=c*l;return[f,c]},v1={position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},FN={position:"absolute",inset:0,touchAction:"pan-y",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none"},s_="color-mix(in oklch, currentColor 10%, transparent)",y1="color-mix(in oklch, currentColor 17%, transparent)",HN={position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},x1={width:32,height:32,display:"grid",placeItems:"center",padding:0,borderRadius:999,border:0,background:s_,color:"inherit",cursor:"pointer",pointerEvents:"auto",transition:"background-color 160ms ease"},VN=`
uniform float uCenter;
uniform float uWidth;
uniform float uK;
uniform float uFloor;
uniform float uMirror;
varying vec2 vUv;
varying float vLift;

void main() {
  vUv = uv;
  float s = uCenter + (uv.x - 0.5) * uWidth;
  float y = uv.y - 0.5;
  float x = s;
  float z = 0.0;
  if (uK > 1e-5) {
    float a = s * uK;
    float h = sin(a * 0.5);
    x = sin(a) / uK;
    z = 2.0 * h * h / uK;
  }
  vLift = y - uFloor;
  if (uMirror > 0.5) y = 2.0 * uFloor - y;
  gl_Position = projectionMatrix * viewMatrix * vec4(x, y, z, 1.0);
}
`,GN=`
precision highp float;

uniform sampler2D uImage;
uniform float uImageAspect;
uniform float uWidth;
uniform float uRadius;
uniform float uLoaded;
uniform float uAlpha;
uniform float uMirror;
uniform float uReflect;
uniform float uDim;
uniform float uHover;
uniform vec2 uResolution;
uniform vec3 uPlaceholder;
varying vec2 vUv;
varying float vLift;

float roundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  vec2 size = vec2(uWidth, 1.0);
  vec2 p = (vUv - 0.5) * size;
  float lift = max(vLift, 0.0);
  float mirror = step(0.5, uMirror);
  float soft = 1.0 + mirror * lift * 26.0;
  float d = roundBox(p, size * 0.5, min(uRadius, 0.5 * min(size.x, size.y)));
  float aa = max(fwidth(d), 1e-5) * 0.7 * soft;
  float mask = 1.0 - smoothstep(-aa, aa, d);

  float fade = mix(1.0, uReflect * pow(1.0 - clamp(lift / 0.62, 0.0, 1.0), 2.2), mirror);
  float edge = abs(gl_FragCoord.x / uResolution.x * 2.0 - 1.0);
  float vignette = 1.0 - uDim * smoothstep(0.18, 1.05, edge) * (1.0 - 0.85 * uHover);
  float alpha = mask * fade * vignette * uAlpha;
  if (alpha < 0.002) discard;

  float panelAspect = size.x / size.y;
  vec2 uv = vUv - 0.5;
  if (panelAspect > uImageAspect) {
    uv.y *= uImageAspect / panelAspect;
  } else {
    uv.x *= panelAspect / uImageAspect;
  }
  uv += 0.5;
  float blur = 1.0 + mirror * lift * 30.0;
  vec3 color = textureGrad(uImage, uv, dFdx(uv) * blur, dFdy(uv) * blur).rgb;

  float loaded = clamp(uLoaded, 0.0, 1.0);
  vec3 rgb = mix(uPlaceholder, color, loaded);
  alpha *= mix(0.08, 1.0, loaded);
  gl_FragColor = vec4(rgb * alpha, alpha);
}
`,kN=(e,t,n,i,s,a,r)=>{let o=e.ownerDocument,l=o.createElement("canvas");l.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block";let c;try{c=new Cd({canvas:l,alpha:!0,antialias:!0,premultipliedAlpha:!0,powerPreference:"high-performance"})}catch{return null}t.appendChild(l),c.setClearColor(0,0);let f=new Ac,p=new Un(40,1,.02,400),u=new Er(1,1,72,1),d=new tl(new Uint8Array([128,128,128,255]),1,1);d.needsUpdate=!0;let v=new ce(1,1),b=new ue(1,1,1),m=Math.min(8,c.capabilities.getMaxAnisotropy()),h=k=>new Wn({uniforms:{uImage:{value:d},uImageAspect:{value:1.5},uCenter:{value:0},uWidth:{value:1.3},uK:{value:.3},uFloor:{value:-.5-UN},uMirror:{value:k?1:0},uRadius:{value:.04},uLoaded:{value:0},uAlpha:{value:1},uReflect:{value:0},uDim:{value:0},uHover:{value:0},uResolution:{value:v},uPlaceholder:{value:b}},vertexShader:VN,fragmentShader:GN,transparent:!0,premultipliedAlpha:!0,depthTest:!1,depthWrite:!1,side:Pi}),g=Array.from({length:ul},()=>{let k=new Xn(u,h(!0)),rt=new Xn(u,h(!1));return k.frustumCulled=!1,rt.frustumCulled=!1,k.visible=!1,rt.visible=!1,k.renderOrder=0,rt.renderOrder=1,f.add(k),f.add(rt),{mesh:rt,mirror:k}}),M=Array.from({length:Ud},()=>{let k=o.createElement("div");k.setAttribute("aria-hidden","true"),k.style.cssText="position:absolute;left:0;top:0;display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center;white-space:nowrap;opacity:0;pointer-events:none;will-change:transform,opacity";let rt=o.createElement("span");rt.style.cssText="font-size:15px;font-weight:600;line-height:1.3;letter-spacing:-0.01em";let dt=o.createElement("span");return dt.style.cssText="font-size:13px;opacity:0.55;line-height:1.4",k.append(rt,dt),n.appendChild(k),{node:k,title:rt,subtitle:dt,index:Number.NaN,opacity:-1,x:Number.NaN,y:Number.NaN}}),y=[],T="",E=0,A=0,x=1,w=!1,R=a,I=0,H=0,P=a,L=1,G=0,K=0,q=!1,nt=0,W=0,$=0,it=!1,Ct=0,St=0,Qt=0,Yt=0,ne=!1,Y=!1,tt=!1,xt=!1,Ot=!1,gt=null,Ht=new Map,Ue=Number.NaN,Xt=Number.NaN,At=null,Ut={labelGap:i_,controlsTop:i_,unit:1,pitch:1.3,width:1.25,k:.3,distance:2.2,lift:0,radius:.04},Gt=()=>Math.max(s.current.length,1),jt=k=>(k%Gt()+Gt())%Gt(),kt=()=>{let k=s.current,rt=k.map(Zt=>Zt.src).join("\0");if(rt===T)return;T=rt,M.forEach(Zt=>{Zt.index=Number.NaN}),y.forEach(Zt=>{Zt.image.onload=null,Zt.texture.dispose()});let dt=Math.max(k.length,1),Nt=jt(Math.round(R));y=k.map((Zt,oe)=>{let Me=new Image;Me.crossOrigin="anonymous",Me.decoding="async";let me=Math.abs(oe-Nt)%dt;Me.fetchPriority=Math.min(me,dt-me)<=2?"high":"low";let Le=new Ln(Me);Le.colorSpace=zi,Le.minFilter=Ts,Le.magFilter=cn,Le.generateMipmaps=!0,Le.anisotropy=m;let an={image:Me,texture:Le,aspect:1.5,ready:!1,uploaded:!1,fade:0};return Me.onload=()=>{Y||(an.aspect=Me.naturalWidth/Math.max(Me.naturalHeight,1),an.ready=!0,Le.needsUpdate=!0,at())},Me.src=Zt.src,an})},Ae=()=>{let k=i.current,rt=Math.round(e.clientWidth),dt=Math.round(e.clientHeight);if(rt<2||dt<2)return w=!1,!1;let Nt=Math.min(window.devicePixelRatio||1,Math.max(k.dpr,.5));return w&&rt===E&&dt===A&&Nt===x?!1:(w=!0,E=rt,A=dt,x=Nt,c.setPixelRatio(x),c.setSize(E,A,!1),v.set(E*x,A*x),!0)},de=()=>{let k=i.current,rt=En(A/620,.72,1.15),dt=i_*rt,Nt=k.captions?dt+g1+LN*rt:dt,Zt=k.controls?Nt+IN:k.captions?dt+g1:0;Ut.labelGap=dt,Ut.controlsTop=Nt;let oe=Math.max(A-Zt,A*.55),Me=En(k.aspect,.4,3.5),me=En(k.size,.15,.95)*oe,Le=En(k.distance,.9,12),an=Math.tan(62*Math.PI/180);(hl=>E/hl/2/Le)(me)>an&&(me=E/2/Le/an);let yi=Math.max(0,k.gap)/me;Ut.unit=me,Ut.width=Me,Ut.pitch=Me+yi,Ut.k=En(k.curvature,0,1)*DN/Ut.pitch,Ut.distance=Le,Ut.radius=Math.max(0,k.radius)/me;let Pn=En(k.tilt,-30,30)*Math.PI/180,Js=2*Math.atan(A/2/me/Le);p.fov=Js*180/Math.PI,p.aspect=E/A,p.near=Math.max(.01,Le*.02),p.far=Le+200,p.position.set(0,Math.tan(Pn)*Le,Le),p.lookAt(0,0,0),p.clearViewOffset(),p.updateMatrixWorld();let xi=C(0,.5),ni=C(0,-.5),Bn=Z(.75,0),Nr=Bn?Math.min(C(Bn.s,.5),xi):xi,qa=Zt>0?ni+Zt:Bn?C(Bn.s,-.5):ni;Ut.lift=En((Nr-(A-qa))/2,-A*.25,A*.25),p.setViewOffset(E,A,0,Ut.lift,E,A),p.updateProjectionMatrix(),p.updateMatrixWorld()},xe=(k,rt,dt)=>{let Nt=Ut.k;if(Nt>1e-5){let Zt=k*Nt,oe=Math.sin(Zt/2);dt.set(Math.sin(Zt)/Nt,rt,2*oe*oe/Nt)}else dt.set(k,rt,0);return dt},D=new X,Fe=k=>{let rt=Ut.k;if(rt<=1e-5)return!0;let dt=1/rt;return dt+(Ut.distance-dt)*Math.cos(k*rt)>.02*dt},he=k=>(xe(k,0,D).project(p),D.z>1?Number.NaN:D.x),C=(k,rt)=>(xe(k,rt,D).project(p),(1-D.y)/2*A),_=new Bc,O=new ce,V=(k,rt)=>{let dt=e.getBoundingClientRect();return Z((k-dt.left)/Math.max(dt.width,1)*2-1,1-(rt-dt.top)/Math.max(dt.height,1)*2)},Z=(k,rt)=>{O.set(k,rt),_.setFromCamera(O,p);let dt=_.ray.origin,Nt=_.ray.direction,Zt=Ut.k;if(Zt<=1e-5){if(Math.abs(Nt.z)<1e-6)return null;let ni=-dt.z/Nt.z;return ni<=0?null:{s:dt.x+ni*Nt.x,y:dt.y+ni*Nt.y}}let oe=1/Zt,Me=dt.x,me=dt.z-oe,Le=Nt.x*Nt.x+Nt.z*Nt.z;if(Le<1e-9)return null;let an=2*(Me*Nt.x+me*Nt.z),On=Me*Me+me*me-oe*oe,yi=an*an-4*Le*On;if(yi<0)return null;let Pn=(-an+Math.sqrt(yi))/(2*Le);if(Pn<=0)return null;let Js=dt.x+Pn*Nt.x,xi=dt.z+Pn*Nt.z;return{s:Math.atan2(Js,oe-xi)*oe,y:dt.y+Pn*Nt.y}},ot=(k,rt)=>{let dt=V(k,rt);if(!dt)return null;let Nt=Math.round(dt.s/Ut.pitch+R),Zt=dt.s-(Nt-R)*Ut.pitch;return Math.abs(Zt)>Ut.width/2||Math.abs(dt.y)>.5||!Fe(dt.s)?null:Nt},at=()=>{Y||tt||!ne||St||(Qt&&(window.clearTimeout(Qt),Qt=0),St=requestAnimationFrame(ft))},J=()=>performance.now()/1e3,Q=(k=2.4)=>{let rt=J();G=Math.max(G,rt+k),nt=Math.max(nt,rt+Math.max(i.current.interval,k))},ct=k=>{let rt=Gt(),dt=Math.round(P??R),Nt=((k-jt(dt))%rt+rt+Math.floor(rt/2))%rt-Math.floor(rt/2);P=dt+Nt,Q(),at()},Rt=k=>{P=Math.round(P??R)+k,Q(),at()},pt=()=>{let k=y.length,rt=jt(Math.round(R)),dt=null,Nt=1/0;for(let Zt=0;Zt<k;Zt++){let oe=y[Zt];if(!oe.ready||oe.uploaded)continue;let Me=Math.abs(Zt-rt)%k,me=Math.min(Me,k-Me);me<Nt&&(Nt=me,dt=oe)}return dt?(c.initTexture(dt.texture),dt.uploaded=!0,!0):!1};function ft(k){if(St=0,Y||tt)return;if(!w){if(Ae(),!w)return;de()}let rt=i.current,dt=Yt&&k-Yt<100?Math.min(Math.max((k-Yt)/1e3,0),.05):1/60;Yt=k;let Nt=J(),Zt=rt.reduced,oe=!1;if(!it){Ct||(Ct=Nt);let S=!0;for(let N=-2;N<=2;N++){let B=y[jt(Math.round(R)+N)];B&&!B.uploaded&&(S=!1)}S||Zt||Nt-Ct>1.6?(it=!0,$=Zt?0:-1.6,W=Zt?1:0):oe=!0}it&&W<1&&(W=Math.min(1,W+dt/2.2),oe=!0);let Me=1-Math.pow(1-W,4);pt()&&(oe=!0);for(let S of y)S.uploaded&&S.fade<1&&(S.fade=Zt||!it?1:Math.min(1,S.fade+dt/.5),oe=!0);let me=rt.autoplay,Le=Math.max(rt.interval,.8),an=rt.paused||rt.held||Zt||me==="off",On=!!At||rt.pauseOnHover&&Ot,yi=On||Nt<G,Pn=an||yi||me!=="drift"?0:1,Js=Pn>L?.9:.32;L+=(Pn-L)*(1-Math.exp(-dt/Js)),Math.abs(Pn-L)>.001?oe=!0:L=Pn,me==="step"&&!an&&Gt()>1?On||nt===0?nt=Math.max(nt,Nt+Le*.6):Nt>=nt&&!yi&&(nt=Nt+Le,P=Math.round(P??R)+(rt.speed<0?-1:1)):nt=0,q&&Nt-K>.14&&(q=!1,rt.snap&&P!==null&&(P=Math.round(P)));let xi=rt.speed*L;if(At&&At.moved)oe=!0;else if(P!==null)[R,I]=zN(R,I,P,dt,Zt?.08:q?.6:.85,.82),Math.abs(R-P)<1e-4&&Math.abs(I)<1e-4?(R=P,I=0,me==="drift"&&!an&&!yi&&(P=null)):oe=!0,me==="drift"&&Pn>0&&P!==null&&Math.abs(R-P)<.02&&(P=null),P===null&&(H=I-xi);else{let S=En(rt.inertia,0,1);H*=Math.exp(-dt/(.25+1.6*S)),Math.abs(H)<1e-4?H=0:oe=!0,I=xi+H,R+=I*dt}let ni=jt(Math.round(R));ni!==Ue&&(Ue=ni,r.onActive(ni)),Ae(),de();let Bn=R+$*(1-Me),Nr=En(rt.dim,0,1),qa=En(rt.reflection,0,1),hl=Math.round(Bn),fl=0;for(let S=-Math.floor(ul/2);S<Math.ceil(ul/2)&&fl<ul;S++){let N=hl+S,B=(N-Bn)*Ut.pitch;if(Ut.k>1e-5&&Math.abs(B*Ut.k)>Math.PI*.98||!Fe(B))continue;let F=he(B-Ut.width/2),z=he(B+Ut.width/2),mt=he(B);if(Number.isNaN(mt)||Number.isNaN(F)||Number.isNaN(z)||Math.max(F,z)<-1.15||Math.min(F,z)>1.15)continue;let yt=g[fl++],lt=y[jt(N)],bt=it?Zt?1:En((Me*1.6-Math.abs(S)*.12)/.6,0,1):0,Mt=Ht.get(N)??0,Pt=gt===N?1:0;Mt+=(Pt-Mt)*(1-Math.exp(-dt/.18)),Math.abs(Mt-Pt)>.001?oe=!0:Mt=Pt,Ht.set(N,Mt);for(let $t of[yt.mesh,yt.mirror]){let Et=$t===yt.mirror;$t.visible=!Et||qa>.001;let Jt=$t.material.uniforms;Jt.uCenter.value=B,Jt.uWidth.value=Ut.width,Jt.uK.value=Ut.k,Jt.uRadius.value=Ut.radius,Jt.uAlpha.value=bt,Jt.uReflect.value=qa,Jt.uDim.value=Nr,Jt.uHover.value=Mt,lt&&(Jt.uImage.value=lt.uploaded?lt.texture:d,Jt.uImageAspect.value=lt.aspect,Jt.uLoaded.value=lt.uploaded?lt.fade:0)}}for(let S=fl;S<ul;S++)g[S].mesh.visible=!1,g[S].mirror.visible=!1;for(let S of Array.from(Ht.keys()))Math.abs(S-R)>ul&&Ht.delete(S);let Ld=s.current,Id=Math.round(Bn);for(let S=-2;S<=2;S++){let N=Id+S,B=M[(N%Ud+Ud)%Ud],F=(N-Bn)*Ut.pitch,z=0;if(rt.captions&&Fe(F)){if(B.index!==N){B.index=N;let Pt=Ld[jt(N)];B.title.textContent=Pt?Pt.title??Pt.alt:"",B.subtitle.textContent=Pt?.subtitle??"",B.subtitle.style.display=Pt?.subtitle?"":"none"}let mt=Math.abs(N-Bn),yt=En((mt-.45)/.4,0,1),lt=it?Zt?1:En((Me-.55)/.4,0,1):0;z=(1-yt*yt*(3-2*yt))*lt,xe(F,-.5,D).project(p);let bt=(D.x+1)/2*E,Mt=(1-D.y)/2*A+Ut.labelGap;(Number.isNaN(B.x)||Math.abs(bt-B.x)>.05||Math.abs(Mt-B.y)>.05)&&(B.x=bt,B.y=Mt,B.node.style.transform=`translate(${bt.toFixed(2)}px, ${Mt.toFixed(2)}px) translateX(-50%)`)}Math.abs(z-B.opacity)>.002&&(B.opacity=z,B.node.style.opacity=z.toFixed(3))}xe(0,-.5,D).project(p);let Dr=(1-D.y)/2*A+Ut.controlsTop;(Number.isNaN(Xt)||Math.abs(Dr-Xt)>.5)&&(Xt=Dr,r.onLayout(Dr)),c.render(f,p),oe||At||me==="drift"&&L>.001?at():me==="step"&&!an&&!On&&Gt()>1?Qt=window.setTimeout(()=>{Qt=0,Yt=0,at()},Math.max(Math.max(nt,G)-Nt,.02)*1e3+16):me==="drift"&&!an&&!On&&Nt<G&&(Qt=window.setTimeout(()=>{Qt=0,Yt=0,at()},(G-Nt)*1e3+16))}let Dt=k=>{if(k.pointerType!=="touch"&&(Ot=!0,!At)){let rt=ot(k.clientX,k.clientY);rt!==gt&&(gt=rt),e.style.cursor=rt!==null?"pointer":i.current.draggable?"grab":""}if(At&&At.id===k.pointerId){if(!At.moved&&Math.hypot(k.clientX-At.x,k.clientY-At.y)>6){At.moved=!0,gt=null,P=null,I=0,H=0,e.style.cursor="grabbing";try{t.setPointerCapture(k.pointerId)}catch{}}if(At.moved){let rt=V(k.clientX,k.clientY);if(rt){R=At.origin+(At.grab-rt.s)/Ut.pitch;let dt=performance.now();for(At.samples.push({t:dt,p:R});At.samples.length>2&&dt-At.samples[0].t>110;)At.samples.shift()}}}at()},It=k=>{if(!k.isPrimary||k.button>0)return;if(!i.current.draggable){At=null,xt=!1;return}let rt=V(k.clientX,k.clientY);At={id:k.pointerId,x:k.clientX,y:k.clientY,grab:rt?rt.s:0,origin:R,moved:!1,samples:[{t:performance.now(),p:R}]},xt=!1,Q(),at()},Vt=k=>{if(!At||At.id!==k.pointerId)return;let rt=At;At=null;try{t.hasPointerCapture(k.pointerId)&&t.releasePointerCapture(k.pointerId)}catch{}if(rt.moved){xt=!0;let dt=performance.now(),Nt=rt.samples.filter(me=>dt-me.t<110),Zt=0;if(Nt.length>1&&dt-Nt[Nt.length-1].t<60){let me=Math.max((Nt[Nt.length-1].t-Nt[0].t)/1e3,.008333333333333333);Zt=(Nt[Nt.length-1].p-Nt[0].p)/me}let oe=i.current;Zt=oe.reduced?0:En(Zt,-14,14),I=Zt,H=Zt;let Me=En(oe.inertia,0,1);oe.snap?P=Math.round(R+Zt*(.14+.46*Me)):P=null,Q(),e.style.cursor=oe.draggable?"grab":""}at()},U=k=>{if(xt){xt=!1;return}let rt=ot(k.clientX,k.clientY);rt!==null&&(rt===Math.round(P??R)&&Math.abs(R-Math.round(R))<.2?r.onSelect(jt(rt)):(P=rt,Q(),at()))},ut=k=>{At&&At.id===k.pointerId||(Ot=!1,gt=null,e.style.cursor="",Q(.6),at())},j=k=>{if(!i.current.wheel)return;k.preventDefault();let rt=k.deltaMode===1?16:k.deltaMode===2?A:1,dt=En((Math.abs(k.deltaX)>Math.abs(k.deltaY)?k.deltaX:k.deltaY)*rt,-240,240),Nt=P??(i.current.snap?Math.round(R):R);P=(q?Nt:i.current.snap?Math.round(Nt):Nt)+dt/100,q=!0,K=J(),Q(),at()},ht=k=>{k.key==="ArrowRight"?(k.preventDefault(),Rt(1)):k.key==="ArrowLeft"?(k.preventDefault(),Rt(-1)):k.key==="Home"?(k.preventDefault(),ct(0)):k.key==="End"?(k.preventDefault(),ct(Gt()-1)):k.key==="Enter"&&k.target===e&&(k.preventDefault(),r.onSelect(jt(Math.round(P??R))))};t.addEventListener("pointerdown",It),t.addEventListener("pointermove",Dt),t.addEventListener("pointerup",Vt),t.addEventListener("pointercancel",Vt),t.addEventListener("pointerleave",ut),t.addEventListener("click",U),t.addEventListener("wheel",j,{passive:!1}),e.addEventListener("keydown",ht);let vt=new ResizeObserver(()=>{Ae()&&(de(),at())});vt.observe(e);let st=typeof IntersectionObserver>"u"?null:new IntersectionObserver(([k])=>{ne=k.isIntersecting,ne?(Yt=0,at()):(St&&cancelAnimationFrame(St),St=0,Qt&&window.clearTimeout(Qt),Qt=0)},{rootMargin:"80px"});st?st.observe(e):ne=!0;let Lt=k=>{k.preventDefault(),tt=!0,St&&cancelAnimationFrame(St),St=0},wt=()=>{tt=!1,T="",kt(),at()};l.addEventListener("webglcontextlost",Lt),l.addEventListener("webglcontextrestored",wt);let Se=()=>{let k=i.current.backgroundColor;if(S1(k)){b.set(M1(k)?0:16777215);return}let rt=window.getComputedStyle(e).color;rt&&b.setStyle(rt,zi)};return Ae(),w&&de(),Se(),kt(),at(),{sync:()=>{(Ae()||w)&&de(),Se(),kt(),at()},step:Rt,goTo:ct,destroy:()=>{Y=!0,St&&cancelAnimationFrame(St),Qt&&window.clearTimeout(Qt),st?.disconnect(),vt.disconnect(),t.removeEventListener("pointerdown",It),t.removeEventListener("pointermove",Dt),t.removeEventListener("pointerup",Vt),t.removeEventListener("pointercancel",Vt),t.removeEventListener("pointerleave",ut),t.removeEventListener("click",U),t.removeEventListener("wheel",j),e.removeEventListener("keydown",ht),e.style.cursor="",l.removeEventListener("webglcontextlost",Lt),l.removeEventListener("webglcontextrestored",wt),y.forEach(k=>{k.image.onload=null,k.texture.dispose()}),g.forEach(k=>{k.mesh.material.dispose(),k.mirror.material.dispose()}),Ht.clear(),M.forEach(k=>k.node.remove()),d.dispose(),u.dispose(),c.dispose(),c.getContext().isContextLost()||c.forceContextLoss(),l.remove()}}},b1=(0,qe.forwardRef)(function({items:t=_1,startIndex:n=0,aspect:i=1.25,size:s=.46,curvature:a=.72,distance:r=4,tilt:o=0,gap:l=16,radius:c=14,reflection:f=.06,dim:p=.35,autoplay:u="drift",speed:d=.16,interval:v=4,snap:b=!0,inertia:m=.5,pauseOnHover:h=!0,draggable:g=!0,wheel:M=!0,captions:y=!0,controls:T=!0,backgroundColor:E="transparent",paused:A=!1,dpr:x=2,ariaLabel:w="Concave carousel. Drag, scroll or use the arrow keys to turn the wall. Space pauses the motion.",onIndexChange:R,onSelect:I,className:H,style:P},L){let G=(0,qe.useRef)(null),K=(0,qe.useRef)(null),q=(0,qe.useRef)(null),nt=(0,qe.useRef)(null),W=(0,qe.useSyncExternalStore)(PN,BN,()=>!1),$=t.length?t:_1,it=(0,qe.useRef)($),[Ct]=(0,qe.useState)(()=>En(Math.round(n),0,Math.max($.length-1,0))),[St,Qt]=(0,qe.useState)(Ct),[Yt,ne]=(0,qe.useState)(!1),[Y,tt]=(0,qe.useState)(!1),[xt,Ot]=(0,qe.useState)(null),gt={aspect:i,size:s,curvature:a,distance:r,tilt:o,gap:l,radius:c,reflection:f,dim:p,autoplay:u,speed:d,interval:v,snap:b,inertia:m,pauseOnHover:h,draggable:g,wheel:M,captions:y,controls:T,backgroundColor:E,paused:A,dpr:x,reduced:W,held:Yt},Ht=(0,qe.useRef)(gt),Ue=(0,qe.useRef)({onIndexChange:R,onSelect:I});(0,qe.useEffect)(()=>{Ht.current=gt,it.current=$,Ue.current={onIndexChange:R,onSelect:I},nt.current?.sync()}),(0,qe.useEffect)(()=>{let kt=G.current,Ae=K.current,de=q.current;if(!kt||!Ae||!de)return;let xe=kN(kt,Ae,de,Ht,it,Ct,{onActive:D=>{Qt(D),Ue.current.onIndexChange?.(D)},onSelect:D=>{let Fe=it.current[D];Fe&&(Ue.current.onSelect?.(Fe,D),Fe.href&&window.location.assign(Fe.href))},onLayout:D=>Ot(D)});if(!xe){let D=requestAnimationFrame(()=>tt(!0));return()=>cancelAnimationFrame(D)}return nt.current=xe,()=>{xe.destroy(),nt.current=null}},[Ct]),(0,qe.useImperativeHandle)(L,()=>({next:()=>nt.current?.step(1),previous:()=>nt.current?.step(-1),goTo:kt=>nt.current?.goTo(kt)}),[]);let Xt=E.trim().toLowerCase(),At=Xt==="transparent"||Xt==="",Ut=!At&&M1(Xt),Gt=At?"currentColor":Ut?"#0a0a0a":"#fafafa",jt=$[St]??$[0];return(0,sn.jsxs)("div",{ref:G,className:f1("xylab-concave-carousel",H),style:{backgroundColor:At?void 0:E,color:Gt,...P},role:"region","aria-roledescription":"carousel","aria-label":w,tabIndex:0,onKeyDown:kt=>{kt.key===" "&&kt.target===kt.currentTarget&&(kt.preventDefault(),ne(Ae=>!Ae))},children:[(0,sn.jsx)("div",{ref:K,style:FN}),(0,sn.jsx)("div",{ref:q,style:HN}),Y&&jt?(0,sn.jsx)("div",{style:{position:"absolute",inset:"14%",display:"grid",placeItems:"center"},children:(0,sn.jsx)("img",{src:jt.src,alt:jt.alt,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"cover",borderRadius:c}})}):null,(0,sn.jsx)("ul",{style:v1,children:$.map((kt,Ae)=>(0,sn.jsx)("li",{"aria-current":Ae===St?"true":void 0,children:kt.title?`${kt.title}: ${kt.alt}`:kt.alt},`${kt.src}-${Ae}`))}),(0,sn.jsx)("div",{"aria-live":"polite",style:v1,children:jt?jt.title??jt.alt:""}),T?(0,sn.jsxs)("div",{style:{position:"absolute",left:0,right:0,top:xt??"82%",display:"flex",justifyContent:"center",alignItems:"center",gap:18,pointerEvents:"none",fontSize:12,fontVariantNumeric:"tabular-nums",opacity:xt===null?0:1,transition:"opacity 400ms ease"},children:[(0,sn.jsx)("button",{type:"button","aria-label":"Previous",onClick:()=>nt.current?.step(-1),onPointerEnter:kt=>{kt.currentTarget.style.background=y1},onPointerLeave:kt=>{kt.currentTarget.style.background=s_},style:x1,children:(0,sn.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,sn.jsx)("path",{d:"m15 18-6-6 6-6"})})}),(0,sn.jsxs)("span",{style:{minWidth:56,textAlign:"center",letterSpacing:"0.02em"},children:[(0,sn.jsx)("span",{style:{opacity:.85},children:String(St+1).padStart(2,"0")}),(0,sn.jsxs)("span",{style:{opacity:.4},children:[" / ",String($.length).padStart(2,"0")]})]}),(0,sn.jsx)("button",{type:"button","aria-label":"Next",onClick:()=>nt.current?.step(1),onPointerEnter:kt=>{kt.currentTarget.style.background=y1},onPointerLeave:kt=>{kt.currentTarget.style.background=s_},style:x1,children:(0,sn.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,sn.jsx)("path",{d:"m9 18 6-6-6-6"})})})]}):null]})});b1.displayName="ConcaveCarousel";var T1=b1;var A1=Ir(Qc());function JI(e,t,n){let i=(0,E1.createRoot)(e),s=t.map((o,l)=>({src:o,alt:`Lab activity photo ${l+1}`})),a=getComputedStyle(e).getPropertyValue("--xylab-blue-soft").trim()||"#eef1f7",r=o=>i.render((0,A1.jsx)(T1,{items:s,backgroundColor:a,aspect:1.5,autoplay:"step",interval:5,captions:!1,wheel:!1,dpr:1.5,paused:o,ariaLabel:`Lab activities: ${s.length} photos. Drag or use arrow keys to browse. Enter enlarges a photo. Space pauses autoplay.`,onSelect:l=>n(l.src)}));return r(!1),{setPaused:r,unmount:()=>i.unmount()}}export{JI as mount};
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
