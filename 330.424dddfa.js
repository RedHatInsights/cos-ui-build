/*! For license information please see 330.424dddfa.js.LICENSE.txt */
(self.webpackChunkcos_ui=self.webpackChunkcos_ui||[]).push([[330,655,230,512,66,331,210],{62663:e=>{e.exports=function(e,t,r,n){var u=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++u]);++u<i;)r=t(r,e[u],u,e);return r}},44286:e=>{e.exports=function(e){return e.split("")}},49029:e=>{var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},18674:e=>{e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},40180:(e,t,r)=>{var n=r(14259);e.exports=function(e,t,r){var u=e.length;return r=void 0===r?u:r,!t&&r>=u?e:n(e,t,r)}},98805:(e,t,r)=>{var n=r(40180),u=r(62689),i=r(83140),o=r(79833);e.exports=function(e){return function(t){t=o(t);var r=u(t)?i(t):void 0,a=r?r[0]:t.charAt(0),f=r?n(r,1).join(""):t.slice(1);return a[e]()+f}}},35393:(e,t,r)=>{var n=r(62663),u=r(53816),i=r(58748),o=RegExp("['’]","g");e.exports=function(e){return function(t){return n(i(u(t).replace(o,"")),e,"")}}},69389:(e,t,r)=>{var n=r(18674)({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});e.exports=n},62689:e=>{var t=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return t.test(e)}},93157:e=>{var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},83140:(e,t,r)=>{var n=r(44286),u=r(62689),i=r(676);e.exports=function(e){return u(e)?i(e):n(e)}},676:e=>{var t="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",n="\\ud83c[\\udffb-\\udfff]",u="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",o="[\\ud800-\\udbff][\\udc00-\\udfff]",a="(?:"+r+"|"+n+")"+"?",f="[\\ufe0e\\ufe0f]?",s=f+a+("(?:\\u200d(?:"+[u,i,o].join("|")+")"+f+a+")*"),l="(?:"+[u+r+"?",r,i,o,t].join("|")+")",c=RegExp(n+"(?="+n+")|"+l+s,"g");e.exports=function(e){return e.match(c)||[]}},2757:e=>{var t="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",n="A-Z\\xc0-\\xd6\\xd8-\\xde",u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+u+"]",o="\\d+",a="[\\u2700-\\u27bf]",f="["+r+"]",s="[^\\ud800-\\udfff"+u+o+t+r+n+"]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+n+"]",p="(?:"+f+"|"+s+")",h="(?:"+d+"|"+s+")",m="(?:['’](?:d|ll|m|re|s|t|ve))?",y="(?:['’](?:D|LL|M|RE|S|T|VE))?",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",g="[\\ufe0e\\ufe0f]?",b=g+v+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,c].join("|")+")"+g+v+")*"),x="(?:"+[a,l,c].join("|")+")"+b,j=RegExp([d+"?"+f+"+"+m+"(?="+[i,d,"$"].join("|")+")",h+"+"+y+"(?="+[i,d+p,"$"].join("|")+")",d+"?"+p+"+"+m,d+"+"+y,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,x].join("|"),"g");e.exports=function(e){return e.match(j)||[]}},53816:(e,t,r)=>{var n=r(69389),u=r(79833),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=u(e))&&e.replace(i,n).replace(o,"")}},41609:(e,t,r)=>{var n=r(280),u=r(64160),i=r(35694),o=r(1469),a=r(98612),f=r(44144),s=r(25726),l=r(36719),c=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(a(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||f(e)||l(e)||i(e)))return!e.length;var t=u(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(s(e))return!n(e).length;for(var r in e)if(c.call(e,r))return!1;return!0}},45021:(e,t,r)=>{var n=r(35393)((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()}));e.exports=n},11700:(e,t,r)=>{var n=r(98805)("toUpperCase");e.exports=n},58748:(e,t,r)=>{var n=r(49029),u=r(93157),i=r(79833),o=r(2757);e.exports=function(e,t,r){return e=i(e),void 0===(t=r?void 0:t)?u(e)?o(e):n(e):e.match(t)||[]}},70655:(e,t,r)=>{"use strict";r.d(t,{ZT:()=>u,pi:()=>i,_T:()=>o,mG:()=>a,Jh:()=>f,fl:()=>l,pr:()=>c});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var u in t=arguments[r])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e},i.apply(this,arguments)};function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var u=0;for(n=Object.getOwnPropertySymbols(e);u<n.length;u++)t.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(e,n[u])&&(r[n[u]]=e[n[u]])}return r}function a(e,t,r,n){return new(r||(r=Promise))((function(u,i){function o(e){try{f(n.next(e))}catch(e){i(e)}}function a(e){try{f(n.throw(e))}catch(e){i(e)}}function f(e){var t;e.done?u(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}f((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,u,i,o={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(u=2&i[0]?n.return:i[0]?n.throw||((u=n.return)&&u.call(n),0):n.next)&&!(u=u.call(n,i[1])).done)return u;switch(n=0,u&&(i=[2&i[0],u.value]),i[0]){case 0:case 1:u=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(u=o.trys,(u=u.length>0&&u[u.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!u||i[1]>u[0]&&i[1]<u[3])){o.label=i[1];break}if(6===i[0]&&o.label<u[1]){o.label=u[1],u=i;break}if(u&&o.label<u[2]){o.label=u[2],o.ops.push(i);break}u[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=u=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}Object.create;function s(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,u,i=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)o.push(n.value)}catch(e){u={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(u)throw u.error}}return o}function l(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e}function c(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),u=0;for(t=0;t<r;t++)for(var i=arguments[t],o=0,a=i.length;o<a;o++,u++)n[u]=i[o];return n}Object.create},63330:(e,t,r)=>{"use strict";r.r(t),r.d(t,{JSONSchemaBridge:()=>E,default:()=>E});var n=r(39443);n.filterDOMProps.register("minCount","maxCount");var u=r(70655),i=r(41143),o=r.n(i),a=r(50361),f=r.n(a),s=r(27361),l=r.n(s),c=r(41609),d=r.n(c),p=r(45021),h=r.n(p),m=r(88306),y=r.n(m),v=r(11700),g=r.n(v);function b(e,t){o()(t,'Field not found in schema: "%s"',e)}function x(e,t){if(!("$ref"in e))return e;const{$ref:r}=e,n=(0,u._T)(e,["$ref"]);return x(Object.assign({},n,function(e,t){o()(e.startsWith("#"),'Reference is not an internal reference, and only such are allowed: "%s"',e);const r=e.split("/").filter((e=>e&&"#"!==e)).reduce(((e,t)=>e[t]),t);return o()(r,'Reference not found in schema: "%s"',e),r}(r,t)),t)}const j=["allOf","anyOf","oneOf"],O=["default","enum","format","isRequired","title","uniforms"],A=[["maxItems","maxCount"],["maximum","max"],["minItems","minCount"],["minimum","min"],["multipleOf","step"]];class E extends n.Bridge{constructor(e,t){super(),this.validator=t,this.schema=x(e,e),this._compiledSchema={"":this.schema},this.getField=y()(this.getField.bind(this)),this.getSubfields=y()(this.getSubfields.bind(this)),this.getType=y()(this.getType.bind(this))}getError(e,t){const r=null==t?void 0:t.details;if(!Array.isArray(r))return null;const u=(0,n.joinName)(null,e),i=(0,n.joinName)(u.slice(0,-1)),o=u[u.length-1],a=r.find((t=>{var r;const n=function(e){return(e=e.startsWith("/")?e.replace(/\//g,".").replace(/~0/g,"~").replace(/~1/g,"/"):e.replace(/\[('|")(.+?)\1\]/g,".$2").replace(/\[(.+?)\]/g,".$1").replace(/\\'/g,"'")).slice(1)}(null!==(r=t.instancePath)&&void 0!==r?r:t.dataPath);return e===n||i===n&&o===t.params.missingProperty}));return a||null}getErrorMessage(e,t){const r=this.getError(e,t);return(null==r?void 0:r.message)||""}getErrorMessages(e){if(!e)return[];const{details:t}=e;return Array.isArray(t)?t.map((e=>e.message)):[e.message||e]}getField(e){return(0,n.joinName)(null,e).reduce(((t,r,u,i)=>{var o,a,f,s;const l=(0,n.joinName)(i.slice(0,u)),c=(0,n.joinName)(l,r),p=null!==(o=(s=this._compiledSchema)[c])&&void 0!==o?o:s[c]={};if(p.isRequired=!(!(null===(a=t.required)||void 0===a?void 0:a.includes(r))&&!(null===(f=this._compiledSchema[l].required)||void 0===f?void 0:f.includes(r))),"$"===r||r===""+parseInt(r,10))b(e,"array"===t.type),t=Array.isArray(t.items)?t.items[parseInt(r,10)]:t.items,b(e,!!t);else if("object"===t.type)b(e,!!t.properties),t=t.properties[n.joinName.unescape(r)],b(e,!!t);else{let n=!1;j.forEach((e=>{var u;null===(u=t[e])||void 0===u||u.forEach((e=>{n||(e=x(e,this.schema),r in e.properties&&(t=e.properties[r],n=!0))}))})),b(e,n)}const h=(t=x(t,this.schema)).required?t.required.slice():[],m=t.properties?Object.assign({},t.properties):{};return j.forEach((e=>{var r;null===(r=t[e])||void 0===r||r.forEach((e=>{(e=x(e,this.schema)).required&&h.push(...e.required),Object.assign(m,e.properties),!p.type&&e.type&&(p.type=e.type)}))})),h.length>0&&(p.required=h),d()(m)||(p.properties=m),t}),this.schema)}getInitialValue(e,t){var r;const u=this.getField(e),{default:i=(null!==(r=u.default)&&void 0!==r?r:l()(this.schema.default,e)),type:o=u.type}=this._compiledSchema[e];if(void 0!==i)return f()(i);if("array"===o){const r=this.getInitialValue((0,n.joinName)(e,"0")),u=(null==t?void 0:t.initialCount)||0;return Array.from({length:u},(()=>r))}return"object"===o?{}:void 0}getProps(e,t){var r,u,i;const o=this.getField(e),a=Object.assign({},o,o.uniforms,this._compiledSchema[e]);null!==(r=a.label)&&void 0!==r||(a.label=null!==(u=a.title)&&void 0!==u?u:g()(h()((0,n.joinName)(null,e).slice(-1)[0]))),"number"===o.type&&(a.decimal=!0),void 0!==(null===(i=o.uniforms)||void 0===i?void 0:i.type)&&(a.type=o.uniforms.type),void 0===a.required&&(a.required=a.isRequired),a.type===o.type&&delete a.type;const f=(null==t?void 0:t.options)||a.options;return f?Array.isArray(f)?(a.allowedValues=f.map((e=>e.value)),a.transform=e=>f.find((t=>t.value===e)).label):(a.allowedValues=Object.keys(f),a.transform=e=>f[e]):a.enum&&(a.allowedValues=a.enum),A.forEach((([e,t])=>{e in a&&(a[t]=a[e],delete a[e])})),O.forEach((e=>{e in a&&delete a[e]})),a}getSubfields(e=""){const t=this.getField(e),{properties:r=t.properties,type:u=t.type}=this._compiledSchema[e];return"object"===u&&r?Object.keys(r).map(n.joinName.escape):[]}getType(e){const{type:t,format:r}=this.getField(e),{type:n=t}=this._compiledSchema[e];return"date-time"===r?Date:"string"===n?String:"number"===n||"integer"===n?Number:"object"===n?Object:"array"===n?Array:"boolean"===n?Boolean:(o()("null"!==n,'Field "%s" can not be represented as a type null',e),n)}getValidator(){return this.validator}}}}]);
//# sourceMappingURL=330.424dddfa.js.map