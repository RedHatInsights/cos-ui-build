"use strict";(self.webpackChunkcos_ui=self.webpackChunkcos_ui||[]).push([[9159,5764],{73942:(t,n,e)=>{e.r(n),e.d(n,{AppFederated:()=>v,default:()=>y});var r=e(70655),o=e(91031),a=e(78800),i=e(75418),c=e.n(i),u=e(31521),s=e(98068),f=e(9980),l=e(20787);const v=()=>{const t=(0,f.useConfig)(),n=(0,f.useAuth)(),e=(0,f.useBasename)();return c().createElement(u.I18nextProvider,{i18n:a.Z},c().createElement(c().Suspense,{fallback:c().createElement(o.g,null)},c().createElement(s.BrowserRouter,{basename:null==e?void 0:e.getBasename()},c().createElement(l.e,{getToken:()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){return(yield null==n?void 0:n.kas.getToken())||""})),connectorsApiBasePath:(null==t?void 0:t.cos.apiBasePath)||"",kafkaManagementApiBasePath:"https://api.openshift.com"}))))},y=v},50509:(t,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0});var r,o=e(80552),a=e(39448),i=e(29660);function c(t){return Object.keys(t)}function u(t,n){try{return _(t)?t:t.toString().split(n)}catch(n){throw new Error("'".concat(t,"' is not a valid state path."))}}function s(t){return"object"==typeof t&&"value"in t&&"context"in t&&"event"in t&&"_event"in t}function f(t,n){return s(t)?t.value:_(t)?l(t):"string"!=typeof t?t:l(u(t,n))}function l(t){if(1===t.length)return t[0];for(var n={},e=n,r=0;r<t.length-1;r++)r===t.length-2?e[t[r]]=t[r+1]:(e[t[r]]={},e=e[t[r]]);return n}function v(t,n){for(var e={},r=c(t),o=0;o<r.length;o++){var a=r[o];e[a]=n(t[a],a,t,o)}return e}function y(t){var n;return(n=[]).concat.apply(n,o.__spreadArray([],o.__read(t),!1))}function p(t){return _(t)?t:[t]}function d(t){return void 0===t?[]:p(t)}function h(t,n){return v(t.states,(function(t,e){if(t){var r=(g(n)?void 0:n[e])||(t?t.current:void 0);if(r)return{current:r,states:h(t,r)}}}))}function _(t){return Array.isArray(t)}function m(t){return"function"==typeof t}function g(t){return"string"==typeof t}n.warn=function(){},i.IS_PRODUCTION||(n.warn=function(t,n){var e=t instanceof Error?t:void 0;if((e||!t)&&void 0!==console){var r=["Warning: ".concat(n)];e&&r.push(e),console.warn.apply(console,r)}});var b=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}(),E=((r={})[b]=function(){return this},r);function S(t){try{return"__xstatenode"in t}catch(t){return!1}}var k=function(){var t=0;return function(){return(++t).toString(16)}}();function w(t,n){return g(t)||"number"==typeof t?o.__assign({type:t},n):t}n.createInvokeId=function(t,n){return"".concat(t,":invocation[").concat(n,"]")},n.evaluateGuard=function(t,n,e,r,o){var i=t.options.guards,c={state:o,cond:n,_event:r};if(n.type===a.DEFAULT_GUARD_TYPE)return((null==i?void 0:i[n.name])||n.predicate)(e,r.data,c);var u=i[n.type];if(!u)throw new Error("Guard '".concat(n.type,"' is not implemented on machine '").concat(t.id,"'."));return u(e,r.data,c)},n.flatten=y,n.getEventType=function(t){try{return g(t)||"number"==typeof t?"".concat(t):t.type}catch(t){throw new Error("Events must be strings or objects with a string event.type property.")}},n.interopSymbols=E,n.isActor=function(t){return!!t&&"function"==typeof t.send},n.isArray=_,n.isBehavior=function(t){return null!==t&&"object"==typeof t&&"transition"in t&&"function"==typeof t.transition},n.isBuiltInEvent=function(t){return/^(done|error)\./.test(t)},n.isFunction=m,n.isMachine=S,n.isObservable=function(t){try{return"subscribe"in t&&m(t.subscribe)}catch(t){return!1}},n.isPromiseLike=function(t){return t instanceof Promise||!(null===t||!m(t)&&"object"!=typeof t||!m(t.then))},n.isStateLike=s,n.isString=g,n.keys=c,n.mapContext=function(t,n,e){var r,a;if(m(t))return t(n,e.data);var i={};try{for(var c=o.__values(Object.keys(t)),u=c.next();!u.done;u=c.next()){var s=u.value,f=t[s];m(f)?i[s]=f(n,e.data):i[s]=f}}catch(t){r={error:t}}finally{try{u&&!u.done&&(a=c.return)&&a.call(c)}finally{if(r)throw r.error}}return i},n.mapFilterValues=function(t,n,e){var r,a,i={};try{for(var u=o.__values(c(t)),s=u.next();!s.done;s=u.next()){var f=s.value,l=t[f];e(l)&&(i[f]=n(l,f,t))}}catch(t){r={error:t}}finally{try{s&&!s.done&&(a=u.return)&&a.call(u)}finally{if(r)throw r.error}}return i},n.mapValues=v,n.matchesState=function t(n,e,r){void 0===r&&(r=a.STATE_DELIMITER);var o=f(n,r),i=f(e,r);return g(i)?!!g(o)&&i===o:g(o)?o in i:c(o).every((function(n){return n in i&&t(o[n],i[n])}))},n.nestedPath=function(t,n){return function(e){var r,a,i=e;try{for(var c=o.__values(t),u=c.next();!u.done;u=c.next()){var s=u.value;i=i[n][s]}}catch(t){r={error:t}}finally{try{u&&!u.done&&(a=c.return)&&a.call(c)}finally{if(r)throw r.error}}return i}},n.normalizeTarget=function(t){if(void 0!==t&&t!==a.TARGETLESS_KEY)return d(t)},n.partition=function(t,n){var e,r,a=o.__read([[],[]],2),i=a[0],c=a[1];try{for(var u=o.__values(t),s=u.next();!s.done;s=u.next()){var f=s.value;n(f)?i.push(f):c.push(f)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(r=u.return)&&r.call(u)}finally{if(e)throw e.error}}return[i,c]},n.path=function(t){return function(n){var e,r,a=n;try{for(var i=o.__values(t),c=i.next();!c.done;c=i.next()){a=a[c.value]}}catch(t){e={error:t}}finally{try{c&&!c.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}return a}},n.pathToStateValue=l,n.reportUnhandledExceptionOnInvocation=function(t,n,e){if(!i.IS_PRODUCTION){var r=t.stack?" Stacktrace was '".concat(t.stack,"'"):"";if(t===n)console.error("Missing onError handler for invocation '".concat(e,"', error was '").concat(t,"'.").concat(r));else{var o=n.stack?" Stacktrace was '".concat(n.stack,"'"):"";console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(e,"'. ")+"Original error: '".concat(t,"'. ").concat(r," Current error is '").concat(n,"'.").concat(o))}}},n.symbolObservable=b,n.toArray=d,n.toArrayStrict=p,n.toEventObject=w,n.toGuard=function(t,n){if(t)return g(t)?{type:a.DEFAULT_GUARD_TYPE,name:t,predicate:n?n[t]:void 0}:m(t)?{type:a.DEFAULT_GUARD_TYPE,name:t.name,predicate:t}:t},n.toInvokeSource=function(t){return"string"==typeof t?{type:t}:t},n.toObserver=function(t,n,e){if("object"==typeof t)return t;var r=function(){};return{next:t,error:n||r,complete:e||r}},n.toSCXMLEvent=function(t,n){if(!g(t)&&"$$type"in t&&"scxml"===t.$$type)return t;var e=w(t);return o.__assign({name:e.type,data:e,$$type:"scxml",type:"external"},n)},n.toStatePath=u,n.toStatePaths=function t(n){return n?g(n)?[[n]]:y(c(n).map((function(e){var r=n[e];return"string"==typeof r||r&&Object.keys(r).length?t(n[e]).map((function(t){return[e].concat(t)})):[[e]]}))):[[]]},n.toStateValue=f,n.toTransitionConfigArray=function(t,n){return p(n).map((function(n){return void 0===n||"string"==typeof n||S(n)?{target:n,event:t}:o.__assign(o.__assign({},n),{event:t})}))},n.uniqueId=k,n.updateContext=function(t,e,r,a){i.IS_PRODUCTION||n.warn(!!t,"Attempting to update undefined context");var u=t?r.reduce((function(t,n){var r,i,u=n.assignment,s={state:a,action:n,_event:e},f={};if(m(u))f=u(t,e.data,s);else try{for(var l=o.__values(c(u)),v=l.next();!v.done;v=l.next()){var y=v.value,p=u[y];f[y]=m(p)?p(t,e.data,s):p}}catch(t){r={error:t}}finally{try{v&&!v.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}return Object.assign({},t,f)}),t):t;return u},n.updateHistoryStates=h,n.updateHistoryValue=function(t,n){return{current:n,states:h(t,n)}}}}]);
