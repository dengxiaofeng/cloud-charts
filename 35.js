(window.webpackJsonp=window.webpackJsonp||[]).push([[35,104],{122:function(t,n,e){},21:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return y}));var r=e(0),o=e.n(r),a=e(122),c=e.n(a);function i(t,n){return d(t)||s(t,n)||f(t,n)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,n){if(t){if("string"==typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,n):void 0}}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function s(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,a=void 0;try{for(var c=t[Symbol.iterator](),i;!(r=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return e}}function d(t){if(Array.isArray(t))return t}function y(t){var n=t.source,e=void 0===n?[]:n,a=t.defaultValue,c=void 0===a?"":a,u=t.value,f=t.onChange,l=void 0===f?function(){}:f,s,d=i(Object(r.useState)(c||e[0]),2),y=d[0],v=d[1];return Object(r.useEffect)((function(){l(y)}),[y]),Object(r.useEffect)((function(){v(u)}),[u]),o.a.createElement("div",{className:"tag-select"},e.map((function(t){return o.a.createElement("div",{className:"tag-item ".concat(y===t?"active":""),onClick:function n(){return v(t)},key:"tag_".concat(t)},t)})))}}}]);