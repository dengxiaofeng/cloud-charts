(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{50:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n(0),a=n.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){return s(e)||m(e,t)||l(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c=e[Symbol.iterator](),i;!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}function s(e){if(Array.isArray(e))return e}var f=null;function d(e){var t=e.text,n=e.children,i,l=c(Object(r.useState)(!1),2),u=l[0],m=l[1],s=n.map((function(e){return e.category})),d=s.filter((function(e,t){return s.indexOf(e)===t}));return a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:"header-nav-item nav-item-drop-down ".concat(u?"mouseover":""),onMouseEnter:function e(){f&&clearTimeout(f),m(!0)},onMouseLeave:function e(){f&&clearTimeout(f),f=setTimeout((function(){m(!1)}),500)}},t),a.a.createElement("div",{className:"nav-drop-panel",onMouseEnter:function e(){f&&(clearTimeout(f),f=null),m(!0)},onMouseLeave:function e(){f&&clearTimeout(f),f=setTimeout((function(){m(!1)}),500)}},a.a.createElement("div",{className:"inner"},d.map((function(e){return a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:"cate-title",key:"drop-cate-title-".concat(e)},e),a.a.createElement("div",{className:"drop-cate",key:"drop-cate-".concat(e)},n.filter((function(t){return t.category===e})).map((function(t){var n=t.icon,r=t.name,c=t.href,i=t.external,l=t.description,u=t.link;return a.a.createElement("div",{className:"drop-item",key:"drop-item-".concat(e,"-").concat(r),style:{backgroundImage:"url(".concat(n,")")}},c?a.a.createElement("a",o({className:"prod-name",href:c},i?{target:"_blank",rel:"noopener noreferrer nofollow"}:{}),r):a.a.createElement("div",{className:"prod-name"},r),a.a.createElement("div",{className:"prod-desc"},l),a.a.createElement("div",{className:"prod-link"},u.map((function(e){var t=e.text,n=e.href,r=e.external;return a.a.createElement("a",o({key:"prod-link-item-".concat(t),href:n},r?{target:"_blank",rel:"noopener noreferrer nofollow"}:{}),t)}))))}))))})))))}}}]);