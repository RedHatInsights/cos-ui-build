(self.webpackChunkcos_ui=self.webpackChunkcos_ui||[]).push([[5538],{54098:function(t,e){var o="undefined"!=typeof self?self:this,n=function(){function t(){this.fetch=!1,this.DOMException=o.DOMException}return t.prototype=o,new t}();!function(t){!function(e){var o="URLSearchParams"in t,n="Symbol"in t&&"iterator"in Symbol,r="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in t,s="ArrayBuffer"in t;if(s)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1};function f(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function c(t){return"string"!=typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n&&(e[Symbol.iterator]=function(){return e}),e}function l(t){this.map={},t instanceof l?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function h(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(t){return new Promise((function(e,o){t.onload=function(){e(t.result)},t.onerror=function(){o(t.error)}}))}function y(t){var e=new FileReader,o=p(e);return e.readAsArrayBuffer(t),o}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:r&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&r&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||u(t))?this._bodyArrayBuffer=b(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r&&(this.blob=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var t,e,o,n=h(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,o=p(e),e.readAsText(t),o;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),o=new Array(e.length),n=0;n<e.length;n++)o[n]=String.fromCharCode(e[n]);return o.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,e){t=f(t),e=c(e);var o=this.map[t];this.map[t]=o?o+", "+e:e},l.prototype.delete=function(t){delete this.map[f(t)]},l.prototype.get=function(t){return t=f(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(f(t))},l.prototype.set=function(t,e){this.map[f(t)]=c(e)},l.prototype.forEach=function(t,e){for(var o in this.map)this.map.hasOwnProperty(o)&&t.call(e,this.map[o],o,this)},l.prototype.keys=function(){var t=[];return this.forEach((function(e,o){t.push(o)})),d(t)},l.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),d(t)},l.prototype.entries=function(){var t=[];return this.forEach((function(e,o){t.push([o,e])})),d(t)},n&&(l.prototype[Symbol.iterator]=l.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function w(t,e){var o,n,r=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(o=e.method||this.method||"GET",n=o.toUpperCase(),m.indexOf(n)>-1?n:o),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function g(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var o=t.split("="),n=o.shift().replace(/\+/g," "),r=o.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(r))}})),e}function O(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},v.call(w.prototype),v.call(O.prototype),O.prototype.clone=function(){return new O(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},O.error=function(){var t=new O(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];O.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new O(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(t,e){this.message=t,this.name=e;var o=Error(t);this.stack=o.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function A(t,o){return new Promise((function(n,i){var s=new w(t,o);if(s.signal&&s.signal.aborted)return i(new e.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function u(){a.abort()}a.onload=function(){var t,e,o={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new l,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var o=t.split(":"),n=o.shift().trim();if(n){var r=o.join(":").trim();e.append(n,r)}})),e)};o.url="responseURL"in a?a.responseURL:o.headers.get("X-Request-URL");var r="response"in a?a.response:a.responseText;n(new O(r,o))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.onabort=function(){i(new e.DOMException("Aborted","AbortError"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&r&&(a.responseType="blob"),s.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),s.signal&&(s.signal.addEventListener("abort",u),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",u)}),a.send(void 0===s._bodyInit?null:s._bodyInit)}))}A.polyfill=!0,t.fetch||(t.fetch=A,t.Headers=l,t.Request=w,t.Response=O),e.Headers=l,e.Request=w,e.Response=O,e.fetch=A,Object.defineProperty(e,"__esModule",{value:!0})}({})}(n),n.fetch.ponyfill=!0,delete n.fetch.polyfill;var r=n;(e=r.fetch).default=r.fetch,e.fetch=r.fetch,e.Headers=r.Headers,e.Request=r.Request,e.Response=r.Response,t.exports=e},83154:(t,e,o)=>{var n;if("function"==typeof fetch&&(void 0!==o.g&&o.g.fetch?n=o.g.fetch:"undefined"!=typeof window&&window.fetch&&(n=window.fetch)),"undefined"==typeof window||void 0===window.document){var r=n||o(54098);r.default&&(r=r.default),e.default=r,t.exports=e.default}},65538:(t,e,o)=>{"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}o.r(e),o.d(e,{default:()=>O});var r=[],i=r.forEach,s=r.slice;function a(t){return i.call(s.call(arguments,1),(function(e){if(e)for(var o in e)void 0===t[o]&&(t[o]=e[o])})),t}function u(){return"function"==typeof XMLHttpRequest||"object"===("undefined"==typeof XMLHttpRequest?"undefined":n(XMLHttpRequest))}var f,c,d,l=o(83154),h=o.t(l,2);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}"function"==typeof fetch&&("undefined"!=typeof global&&global.fetch?f=global.fetch:"undefined"!=typeof window&&window.fetch&&(f=window.fetch)),u&&("undefined"!=typeof global&&global.XMLHttpRequest?c=global.XMLHttpRequest:"undefined"!=typeof window&&window.XMLHttpRequest&&(c=window.XMLHttpRequest)),"function"==typeof ActiveXObject&&("undefined"!=typeof global&&global.ActiveXObject?d=global.ActiveXObject:"undefined"!=typeof window&&window.ActiveXObject&&(d=window.ActiveXObject)),f||!h||c||d||(f=l||h),"function"!=typeof f&&(f=void 0);var y=function(t,e){if(e&&"object"===p(e)){var o="";for(var n in e)o+="&"+encodeURIComponent(n)+"="+encodeURIComponent(e[n]);if(!o)return t;t=t+(-1!==t.indexOf("?")?"&":"?")+o.slice(1)}return t};const b=function(t,e,o,n){return"function"==typeof o&&(n=o,o=void 0),n=n||function(){},f?function(t,e,o,n){t.queryStringParams&&(e=y(e,t.queryStringParams));var r=a({},"function"==typeof t.customHeaders?t.customHeaders():t.customHeaders);o&&(r["Content-Type"]="application/json"),f(e,a({method:o?"POST":"GET",body:o?t.stringify(o):void 0,headers:r},"function"==typeof t.requestOptions?t.requestOptions(o):t.requestOptions)).then((function(t){if(!t.ok)return n(t.statusText||"Error",{status:t.status});t.text().then((function(e){n(null,{status:t.status,data:e})})).catch(n)})).catch(n)}(t,e,o,n):u||"function"==typeof ActiveXObject?function(t,e,o,n){o&&"object"===p(o)&&(o=y("",o).slice(1)),t.queryStringParams&&(e=y(e,t.queryStringParams));try{var r;(r=c?new c:new d("MSXML2.XMLHTTP.3.0")).open(o?"POST":"GET",e,1),t.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!t.withCredentials,o&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");var i=t.customHeaders;if(i="function"==typeof i?i():i)for(var s in i)r.setRequestHeader(s,i[s]);r.onreadystatechange=function(){r.readyState>3&&n(r.status>=400?r.statusText:null,{status:r.status,data:r.responseText})},r.send(o)}catch(t){console&&console.log(t)}}(t,e,o,n):void 0};function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var w=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:function(t){return JSON.parse(t)},stringify:JSON.stringify,parsePayload:function(t,e,o){return function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}({},e,o||"")},request:b,reloadInterval:"undefined"==typeof window&&36e5,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},g=function(){function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};v(this,t),this.services=e,this.options=o,this.allOptions=n,this.type="backend",this.init(e,o,n)}var e,o,n;return e=t,o=[{key:"init",value:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=t,this.options=a(o,this.options||{},w()),this.allOptions=n,this.services&&this.options.reloadInterval&&setInterval((function(){return e.reload()}),this.options.reloadInterval)}},{key:"readMulti",value:function(t,e,o){this._readAny(t,t,e,e,o)}},{key:"read",value:function(t,e,o){this._readAny([t],t,[e],e,o)}},{key:"_readAny",value:function(t,e,o,n,r){var i,s=this,a=this.options.loadPath;"function"==typeof this.options.loadPath&&(a=this.options.loadPath(t,o)),(a=function(t){return!!t&&"function"==typeof t.then}(i=a)?i:Promise.resolve(i)).then((function(i){var a=s.services.interpolator.interpolate(i,{lng:t.join("+"),ns:o.join("+")});s.loadUrl(a,r,e,n)}))}},{key:"loadUrl",value:function(t,e,o,n){var r=this;this.options.request(this.options,t,void 0,(function(i,s){if(s&&(s.status>=500&&s.status<600||!s.status))return e("failed loading "+t+"; status code: "+s.status,!0);if(s&&s.status>=400&&s.status<500)return e("failed loading "+t+"; status code: "+s.status,!1);if(!s&&i&&i.message&&i.message.indexOf("Failed to fetch")>-1)return e("failed loading "+t+": "+i.message,!0);if(i)return e(i,!1);var a,u;try{a="string"==typeof s.data?r.options.parse(s.data,o,n):s.data}catch(e){u="failed parsing "+t+" to json"}if(u)return e(u,!1);e(null,a)}))}},{key:"create",value:function(t,e,o,n,r){var i=this;if(this.options.addPath){"string"==typeof t&&(t=[t]);var s=this.options.parsePayload(e,o,n),a=0,u=[],f=[];t.forEach((function(o){var n=i.options.addPath;"function"==typeof i.options.addPath&&(n=i.options.addPath(o,e));var c=i.services.interpolator.interpolate(n,{lng:o,ns:e});i.options.request(i.options,c,s,(function(e,o){a+=1,u.push(e),f.push(o),a===t.length&&r&&r(u,f)}))}))}}},{key:"reload",value:function(){var t=this,e=this.services,o=e.backendConnector,n=e.languageUtils,r=e.logger,i=o.language;if(!i||"cimode"!==i.toLowerCase()){var s=[],a=function(t){n.toResolveHierarchy(t).forEach((function(t){s.indexOf(t)<0&&s.push(t)}))};a(i),this.allOptions.preload&&this.allOptions.preload.forEach((function(t){return a(t)})),s.forEach((function(e){t.allOptions.ns.forEach((function(t){o.read(e,t,"read",null,null,(function(n,i){n&&r.warn("loading namespace ".concat(t," for language ").concat(e," failed"),n),!n&&i&&r.log("loaded namespace ".concat(t," for language ").concat(e),i),o.loaded("".concat(e,"|").concat(t),n,i)}))}))}))}}}],o&&m(e.prototype,o),n&&m(e,n),t}();g.type="backend";const O=g}}]);
//# sourceMappingURL=5538.f5a8f0d4.js.map