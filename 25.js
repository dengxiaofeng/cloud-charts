(window.webpackJsonp=window.webpackJsonp||[]).push([[25,11,33,37,51,89,98],{112:function(t,e,n){},120:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e),n.d(e,"ThemeSwitchControl",(function(){return g})),n.d(e,"default",(function(){return b}));var r=n(0),o=n.n(r),a=n(106),i=n.n(a),c=n(107),u=n.n(c),l=n(9),s=n(112),d=n.n(s);function m(t,e){return v(t)||y(t,e)||p(t,e)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i=t[Symbol.iterator](),c;!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}function v(t){if(Array.isArray(t))return t}function g(t){var e=t.className,n=t.data,r=void 0===n?l.THEME_LIST:n,i=t.value,c=t.onChange;return o.a.createElement("div",{className:"theme-switch ".concat(e||"")},r.map((function(t){var e=t.label,n=t.value,r=t.color;return o.a.createElement("div",{key:e,className:"theme-item",onClick:function e(){c&&c(n,t)}},o.a.createElement(a.Balloon,{align:"t",trigger:o.a.createElement("div",{className:"theme-color ".concat(i===n?"active":""),style:{background:r}},i===n&&o.a.createElement(a.Icon,{type:"select"})),closable:!1},e))})))}function b(t){var e=t.className,n=t.data,i=void 0===n?l.THEME_LIST:n,u=t.onClick,s=t.onChange,d=t.refresh,f=void 0!==d&&d,p,h=m(Object(r.useState)(0),2),y=h[0],v=h[1];return o.a.createElement("div",{className:"theme-switch ".concat(e||"")},i.map((function(t,e){var n=t.label,r=t.value,i=t.color;return o.a.createElement("div",{key:n,"data-index":e,className:y==e?"theme-item theme-item-active":"theme-item",onClick:function e(n){var o=n.currentTarget.getAttribute("data-index"),a;if((v(o),u)&&!1===u(r,t))return;c.themes&&c.themes.setTheme&&c.themes.setTheme(r,f),s&&s(r,t)}},o.a.createElement(a.Balloon,{align:"t",trigger:o.a.createElement("div",{className:"theme-color",style:{background:i}}),closable:!1},n))})))}},31:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(39),i=n.n(a),c=n(61),u=n(49);function l(t,e){return p(t)||f(t,e)||d(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i=t[Symbol.iterator](),c;!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}function p(t){if(Array.isArray(t))return t}function h(){var t={};return location.search&&location.search.slice(1).split("&").forEach((function(e){var n,r=l(e.split("="),2),o=r[0],a=r[1];t[o]=a})),t}var y=h();function v(){return Object(r.useEffect)((function(){u.default.fetch({api:"fetchAll",params:{module:"exampleInstance"},data:{page:1,size:999}}).then((function(t){if(t&&0===t.status&&Array.isArray(t.data)){var e=t.data.find((function(t){return t._id===y.id||t.name===y.name}));e&&e.content&&Object(c.loadDependencies)(JSON.parse(e.dependencies||"[]")).then((function(){Object(c.runCode)(e.content)}))}}))}),[]),o.a.createElement("div",{id:"mountNode",style:{width:Number(y.width||640),height:Number(y.height||360)}})}i.a.render(o.a.createElement(v,null),document.getElementById("container"))},49:function(t,e,n){"use strict";n.r(e);var r=n(272),o=n.n(r),a=n(277),i=n.n(a),c=n(8);function u(t,e){return f(t)||m(t,e)||s(t,e)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i=t[Symbol.iterator](),c;!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}function f(t){if(Array.isArray(t))return t}var p=new o.a({csrf:!1,ENV:"production"});p.interceptors.request.push((function(t){t.headers={withCredentials:!0,"x-csrf-token":window.csrf}}));var h=[{name:"\u83b7\u53d6\u67d0\u4e2a\u4e1a\u52a1\u6a21\u5757\u7684\u5168\u90e8\u6570\u636e",id:"fetchAll",method:"GET",urls:{production:"/api/{{module}}"}},{name:"\u83b7\u53d6\u67d0\u4e2a\u4e1a\u52a1\u6a21\u5757\u7684\u5355\u6761\u6570\u636e",id:"fetchOne",method:"GET",urls:{production:"/api/{{module}}/{{name}}"}},{name:"\u67e5\u8be2\u67d0\u4e2a\u5927\u7c7b\u7684\u5168\u90e8\u56fe\u8868",id:"listChartByClass",method:"GET",urls:{production:"/api/listChartByClass/{{className}}"}},{name:"\u67e5\u8be2\u67d0\u56fe\u8868\u4e0b\u5168\u90e8\u793a\u4f8b",id:"listInstanceOfChart",method:"GET",urls:{production:"/api/listInstanceOfChart/{{chart}}"}},{name:"\u67e5\u8be2\u67d0\u793a\u4f8b\u76f8\u5173\u7684\u5168\u90e8\u914d\u7f6e\u9879",id:"listApiByInstance",method:"GET",urls:{production:"/api/listApiByInstance/{{instance}}"}},{name:"\u67e5\u8be2\u67d0\u5b9e\u4f53\u4e0b\u7684\u5168\u90e8\u914d\u7f6e\u9879",id:"listApiOfEntity",method:"GET",urls:{production:"/api/listApiOfEntity/{{entity}}"}},{name:"\u67e5\u8be2\u67d0\u914d\u7f6e\u9879\u76f8\u5173\u7684\u5168\u90e8\u56fe\u8868\u793a\u4f8b",id:"listInstanceByApi",method:"GET",urls:{production:"/api/listInstanceByApi/{{name}}"}},{name:"\u67e5\u8be2\u67d0Entity\u9879\u76f8\u5173\u7684\u5168\u90e8\u56fe\u8868\u793a\u4f8b",id:"listInstanceByEntity",method:"GET",urls:{production:"/api/listInstanceByEntity/{{entity}}"}},{name:"\u67e5\u8be2\u67d0\u56fe\u8868\u793a\u4f8b\u7684\u53ef\u89c6\u5316\u7f16\u8f91\u5b9e\u4f8b",id:"getStudioByChart",method:"GET",urls:{production:"/api/getStudioByChart/{{chart}}"}},{name:"\u6761\u4ef6\u67e5\u8be2\u591a\u4e2a\u4e3b\u9898",id:"findTheme",method:"GET",urls:{production:"/api/customTheme"}},{name:"\u67e5\u8be2\u5355\u4e2a\u4e3b\u9898",id:"findOneTheme",method:"GET",urls:{production:"/api/customTheme/{{id}}"}},{name:"\u521b\u5efa\u5355\u4e2a\u4e3b\u9898",id:"createOneTheme",contentType:"application/json",method:"POST",urls:{production:"/api/customTheme"}},{name:"\u66f4\u65b0\u5355\u4e2a\u4e3b\u9898",id:"updateOneTheme",method:"PUT",contentType:"application/json",urls:{production:"/api/customTheme/{{id}}"}},{name:"\u79fb\u9664\u5355\u4e2a\u4e3b\u9898",id:"deleteOneTheme",method:"DELETE",urls:{production:"/api/customTheme/{{id}}"}},{name:"\u6839\u636e\u5de5\u53f7\u67e5\u8be2\u7528\u6237\u4fe1\u606f",id:"fetchUserByEmpId",method:"GET",urls:{production:"/api/user/{{empId}}"}},{name:"\u6839\u636e\u5173\u952e\u5b57\u641c\u7d22\u7528\u6237",id:"searchUserByKeyword",method:"GET",urls:{production:"/api/user"}}],y;if(p.use(h),Object(c.isStaticSite)()){var v={apply:function t(e,n,r){var o,i=u(r,1)[0],c=btoa(JSON.stringify(Object.entries(i).sort())),l;return window.staticGlobalData[c]?Promise.resolve(Object(a.cloneDeep)(window.staticGlobalData[c])):Promise.reject()}};p.fetch=new Proxy(p.fetch,v)}e.default=p},53:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(503),i=n(8);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n=l(t,e),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function l(t,e){if(null==t)return{};var n={},r=Object.keys(t),o,a;for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}Object(i.isStaticSite)()||(window.MonacoEnvironment={getWorkerUrl:function t(e,n){return"data:text/javascript;charset=utf-8,".concat("typescript"===n||"javascript"===n?encodeURIComponent("\n        importScripts('".concat("/","typescript.worker.js');\n      ")):"json"===n?encodeURIComponent("\n        importScripts('".concat("/","json.worker.js');\n      ")):"markdown"===n?encodeURIComponent("\n        importScripts('".concat("/","markdown.worker.js');\n      ")):encodeURIComponent("\n      importScripts('".concat("/","editor.worker.js');\n    ")))}});var s={selectOnLineNumbers:!0,automaticLayout:!0};function d(t){var e=t.value,n=t.onChange,r=u(t,["value","onChange"]);return o.a.createElement(a.default,c({height:"300",language:"javascript",theme:"vs",value:e,options:s,onChange:n},r))}e.default=d},61:function(t,e,n){"use strict";n.r(e),n.d(e,"runCode",(function(){return U})),n.d(e,"loadDependencies",(function(){return M})),n.d(e,"default",(function(){return R}));var r=n(0),o=n.n(r),a=n(39),i=n.n(a),c=n(1181),u=n(1182),l=n.n(u),s=n(106),d=n.n(s),m=n(107),f=n.n(m),p=n(492),h=n.n(p),y=n(314),v=n.n(y),g=n(53),b=n(14),w=n(8),E=n(120),S=n.n(E);function O(t,e){return A(t)||C(t,e)||T(t,e)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function T(t,e){if(t){if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function C(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i=t[Symbol.iterator](),c;!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}function A(t){if(Array.isArray(t))return t}function _(t,e,n){return(_=N()?Reflect.construct:function t(e,n,r){var o=[null];o.push.apply(o,n);var a,i=new(Function.bind.apply(e,o));return r&&x(i,r.prototype),i}).apply(null,arguments)}function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function x(t,e){return(x=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var G={plugins:["transform-object-rest-spread","transform-class-properties"],presets:["react","es2016"]},D=s.Feedback,B=s.Icon,P=k({react:o.a,"react-dom":i.a,"@alife/aisc":s},Object(w.isStaticSite)()?"@alicloud/cloud-charts":"@alife/aisc-widgets",m);function U(t){var e=u.transform(t,G),n=document.querySelector("#mountNode"),r=["mountNode"],o=[n];e.ast.program.body.forEach((function(t){if("ImportDeclaration"===t.type){var e=t.source.value;if(!P[e])return;t.specifiers.forEach((function(t){"ImportDefaultSpecifier"===t.type?(r.push(t.local.name),o.push(P[e])):"ImportSpecifier"===t.type&&(r.push(t.local.name),o.push(P[e][t.local.name]))}))}}));var a,i=e.code.split("\n").filter((function(t){return!(!t||0===t.trim().indexOf("import"))})).join("\n"),c;_(Function,r.concat([i])).apply(void 0,o)}function M(t){return new Promise((function(e){var n=0;t.length>0?t.forEach((function(r){var o=r.packageName,a=r.namespace,i=r.source,c=r.extraCSS;if(window[a])(n+=1)===t.length&&e();else{var u=document.createElement("script");u.src=i,u.onload=function(){P[o]=window[a],(n+=1)===t.length&&e()},document.body.appendChild(u),c&&c.length&&c.forEach((function(t){var e=document.createElement("link");e.rel="stylesheet",e.href=t,document.head.appendChild(e)}))}})):e()}))}function R(t){var e=t.name,n=t.code,a=t.dependencies,i,u=O(Object(r.useState)(n),2),l=u[0],s=u[1],d,m=O(Object(r.useState)(0),2),f=m[0],p=m[1];return Object(r.useEffect)((function(){var t=[];try{t=JSON.parse(a)}catch(t){}M(t).then((function(){s(n),U(n)}))}),[n,a]),o.a.createElement("div",{className:"example-wrapper"},o.a.createElement(c.b,{split:"vertical",className:"example-detail-code",defaultSize:"64%",paneStyle:{maxWidth:"calc(80% - 1px)",minWidth:"20%"},pane2Style:{width:"calc(100% - ".concat(f,"px - 1px)")},onDragFinished:function t(){window.dispatchEvent(new Event("resize"))},onChange:p},o.a.createElement(c.a,{className:"pane-left"},o.a.createElement("div",{id:"mountNode",className:"".concat(Object(w.isStaticSite)()?"cloud-charts":"aisc-widgets")}),o.a.createElement(b.default,{className:"example-theme-switch",onChange:function t(){U(l),Object(y.track)("page-event-track",{position:"\u56fe\u8868\u793a\u4f8b-\u8be6\u60c5.\u793a\u4f8b.\u5207\u6362\u4e3b\u9898"})}})),o.a.createElement(c.a,{className:"pane-right"},o.a.createElement("div",{className:"example-detail-run-title"},"\u6e90\u7801",o.a.createElement("div",{className:"example-detail-btn"},o.a.createElement(h.a,{text:l,onCopy:function t(){D.toast.success("\u590d\u5236\u6210\u529f\uff01"),Object(y.track)("page-event-track",{position:"\u56fe\u8868\u793a\u4f8b-\u8be6\u60c5.\u6e90\u7801.\u590d\u5236"})}},o.a.createElement("button",{className:"example-detail-copy-btn"},o.a.createElement(B,{type:"copy",size:"small"}),"\u590d\u5236")),o.a.createElement("button",{onClick:function t(){U(l),Object(y.track)("page-event-track",{position:"\u56fe\u8868\u793a\u4f8b-\u8be6\u60c5.\u6e90\u7801.\u8fd0\u884c"})}},o.a.createElement(B,{type:"play",size:"small"}),"\u8fd0\u884c"))),o.a.createElement(g.default,{height:"560",value:l,onChange:function t(e){return s(e)}}))))}},8:function(t,e,n){"use strict";n.r(e),n.d(e,"calcImgSize",(function(){return s})),n.d(e,"getUserByEmpId",(function(){return m})),n.d(e,"getMultiUserByEmpIds",(function(){return f})),n.d(e,"isStaticSite",(function(){return p})),n.d(e,"isThirdPartComp",(function(){return h})),n.d(e,"isInternelDemo",(function(){return y}));var r=n(49);function o(t,e){return l(t)||u(t,e)||i(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i=t[Symbol.iterator](),c;!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}function l(t){if(Array.isArray(t))return t}function s(t){var e={width:250,height:"auto"};if(!t)return e;var n=250,r="auto",a=(t.match(/(\d+-\d+)\.(jpg|png)$/)||[])[1];if(!a)return e;var i,c=o(a.split("-").map((function(t){return Number(t)})),2);return n=c[0],r=c[1],r*=250/n,{width:n=250,height:r}}var d={};function m(t){return new Promise((function(e,n){d[t]?"done"===d[t].status?e(d[t].result):setTimeout((function(){m(t).then(e).catch(n)}),100):(d[t]={status:"pending",result:null},r.default.fetch({api:"fetchUserByEmpId",params:{empId:t}}).then((function(r){0===r.status?(d[t].status="done",d[t].result=r.data,e(r.data)):n(r.message)})).catch(n))}))}function f(t){return Promise.all(t.map((function(t){return m(t)})))}function p(){return"static"===window.globalSiteType}function h(t){return(window.siteOptionMapping.third_party_component_list||[]).includes(t)}function y(t){return(window.siteOptionMapping.example_internal_list||[]).includes(t)}},9:function(t,e,n){"use strict";n.r(e),n.d(e,"WIDGETS_VERSION",(function(){return y})),n.d(e,"LOGO_SRC",(function(){return v})),n.d(e,"LOGO_CONTENT_SRC",(function(){return g})),n.d(e,"LOGO_HOME_MAIN",(function(){return b})),n.d(e,"NAV_LIST",(function(){return w})),n.d(e,"FOOTER_INFO",(function(){return E})),n.d(e,"THEME_LIST",(function(){return S})),n.d(e,"baseDocumentTitle",(function(){return O})),n.d(e,"VIDEO_SOURCE_MAPPING",(function(){return j}));var r=window.siteOptionMapping||{},o=r.header_logo,a=r.header_logo_content,i=r.logo_home_main,c=r.header_nav_list,u=r.footer_description,l=r.footer_link_community,s=r.footer_link_resource,d=r.footer_extra_text,m=r.footer_copyright,f=r.theme_list,p=r.aisc_widgets_lib_version,h=r.video_source,y=p,v=o,g=a,b=i,w=c?JSON.parse(c.toString()):[],E={teamIntro:u||"TXD\uff08Technology Experience Design \u6280\u672f\u4f53\u9a8c\u8bbe\u8ba1\uff09 \u4f5c\u4e3a\u963f\u91cc\u4e91\u667a\u80fd\u4e8b\u4e1a\u7fa4-\u57fa\u7840\u4ea7\u54c1\u4e8b\u4e1a\u90e8\u7684\u6838\u5fc3\u56e2\u961f\u4e4b\u4e00\uff0c\u4ee5\u201c\u5f15\u9886\u672a\u6765\u79d1\u6280\u4f53\u9a8c\u6f6e\u6d41\u201d\u4e3a\u613f\u666f\uff0c\u4e3a\u5927\u963f\u91cc\u96c6\u56e2\u521b\u9020\u9ad8\u54c1\u8d28\u8fd0\u7ef4\u5de5\u5177\u3001\u6253\u9020\u4f01\u4e1a\u7ea7\u6570\u636e\u53ef\u89c6\u5316\u4ea7\u54c1\u3001\u8bbe\u8ba1\u6570\u636e\u4e2d\u5fc3\u65e0\u4eba\u503c\u5b88\u673a\u5668\u4eba\u3002",community:l?JSON.parse(l.toString()):null,resource:s?JSON.parse(s.toString()):null,extra_text:d||"TXD \u56e2\u961f\u7279\u522b\u611f\u8c22 AntV \u56e2\u961f\u5de5\u7a0b\u5e08\u4e0e\u8bbe\u8ba1\u5e08\u5bf9 G2 \u7684\u652f\u6301",copyright:m||"Copyright \xa9 2020 TXD"},S=f?JSON.parse(f):[{label:"\u9ed8\u8ba4",value:"normal"},{label:"\u6697\u8272",value:"dark"}],O="static"===window.globalSiteType?"Cloud Charts \u56fe\u8868\u5e93":"TXD-Widgets \u56fe\u8868\u5e93",j=h||{sloganBg:"//doa-resource.cn-hangzhou.oss-cdn.aliyun-inc.com/video/widgets_home.mp4",featLeft:"//doa-resource.cn-hangzhou.oss-cdn.aliyun-inc.com/video/widgets/home-s-1.mp4",featCenter:"//doa-resource.cn-hangzhou.oss-cdn.aliyun-inc.com/video/widgets/home-s-2.mp4",featRight:"//doa-resource.cn-hangzhou.oss-cdn.aliyun-inc.com/video/widgets/home-s-3.mp4"}}}]);