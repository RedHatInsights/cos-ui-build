/*! For license information please see 342.10051f46.js.LICENSE.txt */
"use strict";(self.webpackChunkcos_ui=self.webpackChunkcos_ui||[]).push([[342],{28342:(t,r,n)=>{n.r(r),n.d(r,{asEffect:()=>m,asLayoutEffect:()=>x,useActor:()=>V,useInterpret:()=>h,useMachine:()=>O,useSelector:()=>I,useService:()=>k,useSpawn:()=>Y});var e,u=n(75418),o=n(92464);!function(t){t[t.Effect=1]="Effect",t[t.LayoutEffect=2]="LayoutEffect"}(e||(e={}));const i=u.useLayoutEffect;function c(t){var r=u.useRef();return r.current||(r.current={v:t()}),r.current.v}var a=function(t,r){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var e,u,o=n.call(t),i=[];try{for(;(void 0===r||r-- >0)&&!(e=o.next()).done;)i.push(e.value)}catch(t){u={error:t}}finally{try{e&&!e.done&&(n=o.return)&&n.call(o)}finally{if(u)throw u.error}}return i},f=function(t){var r="function"==typeof Symbol&&Symbol.iterator,n=r&&t[r],e=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};var s=function(t,r){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var e,u,o=n.call(t),i=[];try{for(;(void 0===r||r-- >0)&&!(e=o.next()).done;)i.push(e.value)}catch(t){u={error:t}}finally{try{e&&!e.done&&(n=o.return)&&n.call(o)}finally{if(u)throw u.error}}return i},l=function(t,r){for(var n=0,e=r.length,u=t.length;n<e;n++,u++)t[u]=r[n];return t};function v(t,r){(0,t.exec)(r.context,r._event.data,{action:t,state:r,_event:r._event})()}function y(t){var r=(0,u.useRef)([]),n=(0,u.useRef)([]);i((function(){var u=t.subscribe((function(t){var u,o;if(t.actions.length){var i=t.actions.filter((function(t){return"function"==typeof t.exec&&"__effect"in t.exec})),c=s(function(t,r){var n,e,u=a([[],[]],2),o=u[0],i=u[1];try{for(var c=f(t),s=c.next();!s.done;s=c.next()){var l=s.value;r(l)?o.push(l):i.push(l)}}catch(t){n={error:t}}finally{try{s&&!s.done&&(e=c.return)&&e.call(c)}finally{if(n)throw n.error}}return[o,i]}(i,(function(t){return t.exec.__effect===e.Effect})),2),v=c[0],y=c[1];(u=r.current).push.apply(u,l([],s(v.map((function(r){return[r,t]}))))),(o=n.current).push.apply(o,l([],s(y.map((function(r){return[r,t]})))))}}));return function(){u.unsubscribe()}}),[]),i((function(){for(;n.current.length;){var t=s(n.current.shift(),2);v(t[0],t[1])}})),(0,u.useEffect)((function(){for(;r.current.length;){var t=s(r.current.shift(),2);v(t[0],t[1])}}))}var b=function(){return b=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var u in r=arguments[n])Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u]);return t},b.apply(this,arguments)},p=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var u=0;for(e=Object.getOwnPropertySymbols(t);u<e.length;u++)r.indexOf(e[u])<0&&Object.prototype.propertyIsEnumerable.call(t,e[u])&&(n[e[u]]=t[e[u]])}return n};function h(t,r,n){void 0===r&&(r={});var e=c((function(){return"function"==typeof t?t():t})),u=r.context,a=r.guards,f=r.actions,s=r.activities,l=r.services,v=r.delays,h=r.state,d=p(r,["context","guards","actions","activities","services","delays","state"]),g=c((function(){var t={context:u,guards:a,actions:f,activities:s,services:l,delays:v},r=e.withConfig(t,(function(){return b(b({},e.context),u)}));return(0,o.interpret)(r,b({deferEvents:!0},d))}));return i((function(){var t;return n&&(t=g.subscribe(function(t,r,n){if("object"==typeof t)return t;var e=function(){};return{next:t,error:r||e,complete:n||e}}(n))),function(){null==t||t.unsubscribe()}}),[n]),i((function(){return g.start(h?o.State.create(h):void 0),function(){g.stop()}}),[]),i((function(){Object.assign(g.machine.options.actions,f),Object.assign(g.machine.options.guards,a),Object.assign(g.machine.options.activities,s),Object.assign(g.machine.options.services,l),Object.assign(g.machine.options.delays,v)}),[f,a,s,l,v]),y(g),g}var d=function(t,r){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var e,u,o=n.call(t),i=[];try{for(;(void 0===r||r-- >0)&&!(e=o.next()).done;)i.push(e.value)}catch(t){u={error:t}}finally{try{e&&!e.done&&(n=o.return)&&n.call(o)}finally{if(u)throw u.error}}return i},g=function(t,r){for(var n=0,e=r.length,u=t.length;n<e;n++,u++)t[u]=r[n];return t};function S(t,r){var n=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return function(){return t.apply(void 0,g([],d(r)))}};return Object.defineProperties(n,{name:{value:"effect:"+t.name},__effect:{value:r}}),n}function m(t){return S(t,e.Effect)}function x(t){return S(t,e.LayoutEffect)}function O(t,r){void 0===r&&(r={});var n=(0,u.useCallback)((function(t){var r=void 0===t.changed&&Object.keys(t.children).length;(t.changed||r)&&a(t)}),[]),e=h(t,r,n),i=d((0,u.useState)((function(){var t=e.machine.initialState;return r.state?o.State.create(r.state):t})),2),c=i[0],a=i[1];return[c,e.send,e]}var w=function(t,r){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var e,u,o=n.call(t),i=[];try{for(;(void 0===r||r-- >0)&&!(e=o.next()).done;)i.push(e.value)}catch(t){u={error:t}}finally{try{e&&!e.done&&(n=o.return)&&n.call(o)}finally{if(u)throw u.error}}return i};function E(t){return"state"in t}function j(t){return"deferred"in t}var C=function(){};function _(t){return"getSnapshot"in t?t.getSnapshot():E(t)?t.state:void 0}function V(t,r){void 0===r&&(r=_);var n=(0,u.useRef)(t),e=(0,u.useRef)([]),o=w((0,u.useState)((function(){return r(t)})),2),a=o[0],f=o[1],s=c((function(){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var u=t[0];var o=n.current;j(o)&&o.deferred?e.current.push(u):o.send(u)}}));return i((function(){n.current=t,f(r(t));for(var u=t.subscribe({next:function(t){return f(t)},error:C,complete:C});e.current.length>0;){var o=e.current.shift();t.send(o)}return function(){u.unsubscribe()}}),[t]),[a,s]}var R=function(t,r){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var e,u,o=n.call(t),i=[];try{for(;(void 0===r||r-- >0)&&!(e=o.next()).done;)i.push(e.value)}catch(t){u={error:t}}finally{try{e&&!e.done&&(n=o.return)&&n.call(o)}finally{if(u)throw u.error}}return i};function k(t){return[R(V(t),1)[0],t.send]}var L=n(67161);var P=function(t,r){return t===r},A=function(t){return"state"in(n=t)&&"machine"in n?0!==("status"in(r=t)?r.status:r._status)?r.state:r.machine.initialState:E(t)?t.state:void 0;var r,n};function I(t,r,n,e){void 0===n&&(n=P),void 0===e&&(e=A);var o=(0,u.useRef)(r),c=(0,u.useMemo)((function(){var u,i=e(t),c=r(i);return{getSnapshot:function(){return i},getCurrentValue:function(){return c},setCurrentValue:function(t){c=t,null==u||u()},subscribe:function(r){u=r;var e=t.subscribe((function(t){i=t;var e=o.current(t);n(c,e)||(c=e,r())}));return function(){e.unsubscribe()}}}}),[t]),a=(0,L.useSubscription)(c);if(o.current!==r){var f=r(c.getSnapshot());n(a,f)||(a=f)}return i((function(){o.current=r,c.setCurrentValue(a)})),a}var M=n(76590);function Y(t){return c((function(){return(0,M.Y)(t)}))}},68217:(t,r,n)=>{var e=n(27418),u=n(75418);r.useSubscription=function(t){var r=t.getCurrentValue,n=t.subscribe,o=u.useState((function(){return{getCurrentValue:r,subscribe:n,value:r()}}));t=o[0];var i=o[1];return o=t.value,t.getCurrentValue===r&&t.subscribe===n||(o=r(),i({getCurrentValue:r,subscribe:n,value:o})),u.useDebugValue(o),u.useEffect((function(){function t(){if(!u){var t=r();i((function(u){return u.getCurrentValue!==r||u.subscribe!==n||u.value===t?u:e({},u,{value:t})}))}}var u=!1,o=n(t);return t(),function(){u=!0,o()}}),[r,n]),o}},67161:(t,r,n)=>{t.exports=n(68217)},76590:(t,r,n)=>{n(29660);var e=n(50509);n(27108),n(73487);var u=n(70880);r.Y=function(t,r){void 0===r&&(r={});var n=t.initialState,o=new Set,i=[],c=!1,a=u.toActorRef({id:r.id,send:function(r){i.push(r),function(){if(!c){for(c=!0;i.length>0;){var r=i.shift();n=t.transition(n,r,f),o.forEach((function(t){return t.next(n)}))}c=!1}}()},getSnapshot:function(){return n},subscribe:function(t,r,u){var i=e.toObserver(t,r,u);return o.add(i),i.next(n),{unsubscribe:function(){o.delete(i)}}}}),f={parent:r.parent,self:a,id:r.id||"anonymous",observers:o};return n=t.start?t.start(f):n,a}}}]);
//# sourceMappingURL=342.10051f46.js.map