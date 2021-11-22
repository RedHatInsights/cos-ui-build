"use strict";(self.webpackChunkcos_ui=self.webpackChunkcos_ui||[]).push([[225,84],{73942:(t,n,e)=>{e.r(n),e.d(n,{AppFederated:()=>v,default:()=>y});var r=e(70655),o=e(75418),a=e.n(o),i=e(75205),u=e(98068),c=e(46332),s=e(60130),f=e(97513),l=e(80027);const v=()=>{const t=(0,c.useConfig)(),n=(0,c.useAuth)(),e=(0,c.useBasename)();return a().createElement(i.I18nextProvider,{i18n:l.Z},a().createElement(a().Suspense,{fallback:a().createElement(f.g,null)},a().createElement(u.BrowserRouter,{basename:null==e?void 0:e.getBasename()},a().createElement(s.e,{getToken:()=>(0,r.__awaiter)(void 0,void 0,void 0,(function*(){return(yield null==n?void 0:n.kas.getToken())||""})),connectorsApiBasePath:(null==t?void 0:t.cos.apiBasePath)||"",kafkaManagementApiBasePath:"https://api.openshift.com"}))))},y=v},50509:(t,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0});var r=e(80552),o=e(39448),a=e(29660);function i(t){return Object.keys(t)}function u(t,n){try{return h(t)?t:t.toString().split(n)}catch(n){throw new Error("'".concat(t,"' is not a valid state path."))}}function c(t){return"object"==typeof t&&"value"in t&&"context"in t&&"event"in t&&"_event"in t}function s(t,n){return c(t)?t.value:h(t)?f(t):"string"!=typeof t?t:f(u(t,n))}function f(t){if(1===t.length)return t[0];for(var n={},e=n,r=0;r<t.length-1;r++)r===t.length-2?e[t[r]]=t[r+1]:(e[t[r]]={},e=e[t[r]]);return n}function l(t,n){for(var e={},r=i(t),o=0;o<r.length;o++){var a=r[o];e[a]=n(t[a],a,t,o)}return e}function v(t){var n;return(n=[]).concat.apply(n,r.__spreadArray([],r.__read(t),!1))}function y(t){return h(t)?t:[t]}function p(t){return void 0===t?[]:y(t)}function d(t,n){return l(t.states,(function(t,e){if(t){var r=(m(n)?void 0:n[e])||(t?t.current:void 0);if(r)return{current:r,states:d(t,r)}}}))}function h(t){return Array.isArray(t)}function _(t){return"function"==typeof t}function m(t){return"string"==typeof t}n.warn=function(){},a.IS_PRODUCTION||(n.warn=function(t,n){var e=t instanceof Error?t:void 0;if((e||!t)&&void 0!==console){var r=["Warning: ".concat(n)];e&&r.push(e),console.warn.apply(console,r)}});var g=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function b(t){try{return"__xstatenode"in t}catch(t){return!1}}var E=function(){var t=0;return function(){return(++t).toString(16)}}();function w(t,n){return m(t)||"number"==typeof t?r.__assign({type:t},n):t}n.evaluateGuard=function(t,n,e,r,a){var i=t.options.guards,u={state:a,cond:n,_event:r};if(n.type===o.DEFAULT_GUARD_TYPE)return((null==i?void 0:i[n.name])||n.predicate)(e,r.data,u);var c=i[n.type];if(!c)throw new Error("Guard '".concat(n.type,"' is not implemented on machine '").concat(t.id,"'."));return c(e,r.data,u)},n.flatten=v,n.getEventType=function(t){try{return m(t)||"number"==typeof t?"".concat(t):t.type}catch(t){throw new Error("Events must be strings or objects with a string event.type property.")}},n.isActor=function(t){return!!t&&"function"==typeof t.send},n.isArray=h,n.isBehavior=function(t){return null!==t&&"object"==typeof t&&"transition"in t&&"function"==typeof t.transition},n.isBuiltInEvent=function(t){return/^(done|error)\./.test(t)},n.isFunction=_,n.isMachine=b,n.isObservable=function(t){try{return"subscribe"in t&&_(t.subscribe)}catch(t){return!1}},n.isPromiseLike=function(t){return t instanceof Promise||!(null===t||!_(t)&&"object"!=typeof t||!_(t.then))},n.isStateLike=c,n.isString=m,n.keys=i,n.mapContext=function(t,n,e){var o,a;if(_(t))return t(n,e.data);var i={};try{for(var u=r.__values(Object.keys(t)),c=u.next();!c.done;c=u.next()){var s=c.value,f=t[s];_(f)?i[s]=f(n,e.data):i[s]=f}}catch(t){o={error:t}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(o)throw o.error}}return i},n.mapFilterValues=function(t,n,e){var o,a,u={};try{for(var c=r.__values(i(t)),s=c.next();!s.done;s=c.next()){var f=s.value,l=t[f];e(l)&&(u[f]=n(l,f,t))}}catch(t){o={error:t}}finally{try{s&&!s.done&&(a=c.return)&&a.call(c)}finally{if(o)throw o.error}}return u},n.mapValues=l,n.matchesState=function t(n,e,r){void 0===r&&(r=o.STATE_DELIMITER);var a=s(n,r),u=s(e,r);return m(u)?!!m(a)&&u===a:m(a)?a in u:i(a).every((function(n){return n in u&&t(a[n],u[n])}))},n.nestedPath=function(t,n){return function(e){var o,a,i=e;try{for(var u=r.__values(t),c=u.next();!c.done;c=u.next()){var s=c.value;i=i[n][s]}}catch(t){o={error:t}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(o)throw o.error}}return i}},n.normalizeTarget=function(t){if(void 0!==t&&t!==o.TARGETLESS_KEY)return p(t)},n.partition=function(t,n){var e,o,a=r.__read([[],[]],2),i=a[0],u=a[1];try{for(var c=r.__values(t),s=c.next();!s.done;s=c.next()){var f=s.value;n(f)?i.push(f):u.push(f)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(o=c.return)&&o.call(c)}finally{if(e)throw e.error}}return[i,u]},n.path=function(t){return function(n){var e,o,a=n;try{for(var i=r.__values(t),u=i.next();!u.done;u=i.next()){a=a[u.value]}}catch(t){e={error:t}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(e)throw e.error}}return a}},n.pathToStateValue=f,n.reportUnhandledExceptionOnInvocation=function(t,n,e){if(!a.IS_PRODUCTION){var r=t.stack?" Stacktrace was '".concat(t.stack,"'"):"";if(t===n)console.error("Missing onError handler for invocation '".concat(e,"', error was '").concat(t,"'.").concat(r));else{var o=n.stack?" Stacktrace was '".concat(n.stack,"'"):"";console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(e,"'. ")+"Original error: '".concat(t,"'. ").concat(r," Current error is '").concat(n,"'.").concat(o))}}},n.symbolObservable=g,n.toArray=p,n.toArrayStrict=y,n.toEventObject=w,n.toGuard=function(t,n){if(t)return m(t)?{type:o.DEFAULT_GUARD_TYPE,name:t,predicate:n?n[t]:void 0}:_(t)?{type:o.DEFAULT_GUARD_TYPE,name:t.name,predicate:t}:t},n.toInvokeSource=function(t){return"string"==typeof t?{type:t}:t},n.toObserver=function(t,n,e){if("object"==typeof t)return t;var r=function(){};return{next:t,error:n||r,complete:e||r}},n.toSCXMLEvent=function(t,n){if(!m(t)&&"$$type"in t&&"scxml"===t.$$type)return t;var e=w(t);return r.__assign({name:e.type,data:e,$$type:"scxml",type:"external"},n)},n.toStatePath=u,n.toStatePaths=function t(n){return n?m(n)?[[n]]:v(i(n).map((function(e){var r=n[e];return"string"==typeof r||r&&Object.keys(r).length?t(n[e]).map((function(t){return[e].concat(t)})):[[e]]}))):[[]]},n.toStateValue=s,n.toTransitionConfigArray=function(t,n){return y(n).map((function(n){return void 0===n||"string"==typeof n||b(n)?{target:n,event:t}:r.__assign(r.__assign({},n),{event:t})}))},n.uniqueId=E,n.updateContext=function(t,e,o,u){return a.IS_PRODUCTION||n.warn(!!t,"Attempting to update undefined context"),t?o.reduce((function(t,n){var o,a,c=n.assignment,s={state:u,action:n,_event:e},f={};if(_(c))f=c(t,e.data,s);else try{for(var l=r.__values(i(c)),v=l.next();!v.done;v=l.next()){var y=v.value,p=c[y];f[y]=_(p)?p(t,e.data,s):p}}catch(t){o={error:t}}finally{try{v&&!v.done&&(a=l.return)&&a.call(l)}finally{if(o)throw o.error}}return Object.assign({},t,f)}),t):t},n.updateHistoryStates=d,n.updateHistoryValue=function(t,n){return{current:n,states:d(t,n)}}}}]);
//# sourceMappingURL=225.6f30c8cf.js.map