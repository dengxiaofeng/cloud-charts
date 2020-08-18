(window.webpackJsonp=window.webpackJsonp||[]).push([[32,20,39],{331:function(t,n,e){"use strict";e.r(n),e.d(n,"fetchDocList",(function(){return f})),e.d(n,"getEntityApi",(function(){return s})),e.d(n,"getEntityInstance",(function(){return l}));var a=e(245),r=e.n(a),c=e(247),i=e(76),o=function t(n){return a.Feedback.toast.success(n)},u=function t(n,e){return a.Feedback.toast.error("".concat(n,": ").concat(e.toString()))};function f(t){return c.default.fetch({api:"fetchAll",params:{module:"referenceEntity"},data:{page:1,size:0}}).then((function(n){if(n&&0===n.status&&Array.isArray(n.data)){var e=n.data.map((function(t){var n=t.name,e=t.category,a=t.alias,r=t.note,c=t.api_enable;return{name:a,category:e,subName:"".concat(n.substring(0,1).toUpperCase()).concat(n.substring(1)),entity:n,href:"/documentation/".concat(n),note:r,apiList:c?String(c).trim().split(","):[]}}));Object(i.isStaticSite)()&&(e=e.filter((function(t){return!Object(i.isThirdPartComp)(t.entity)}))),t({type:"UPDATE_LIST",data:{nav:e}})}else u("\u83b7\u53d6\u6587\u6863\u5927\u7c7b\u5f02\u5e38")})).catch((function(t){return u("\u83b7\u53d6\u6587\u6863\u5927\u7c7b\u5f02\u5e38")}))}function s(t,n){return c.default.fetch({api:"listApiOfEntity",params:{entity:n},data:{page:1,size:0}}).then((function(n){n&&0===n.status&&Array.isArray(n.data)?t({type:"UPDATE_LIST",data:{list:n.data}}):u("\u83b7\u53d6\u6587\u6863Api\u5f02\u5e38")})).catch((function(t){return u("\u83b7\u53d6\u6587\u6863Api\u5f02\u5e38")}))}function l(t,n){return c.default.fetch({api:"listInstanceByEntity",params:{entity:n},data:{page:1,size:0}}).then((function(n){if(n&&0===n.status&&Array.isArray(n.data)){var e=n.data;Object(i.isStaticSite)()&&(e=e.filter((function(t){return!Object(i.isThirdPartComp)(t.chart)&&!Object(i.isInternelDemo)(t.name)}))),t({type:"UPDATE_LIST",data:{instance:e}})}else u("\u83b7\u53d6\u6587\u6863\u76f8\u5173\u793a\u4f8b\u5f02\u5e38")})).catch((function(t){return u("\u83b7\u53d6\u6587\u6863\u76f8\u5173\u793a\u4f8b\u5f02\u5e38")}))}},421:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return v}));var a=e(0),r=e.n(a),c=e(572),i=e.n(c),o=e(78),u=e(331),f=e(104);function s(t,n){return y(t)||m(t,n)||d(t,n)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t,n){if(t){if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?p(t,n):void 0}}function p(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function m(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],a=!0,r=!1,c=void 0;try{for(var i=t[Symbol.iterator](),o;!(a=(o=i.next()).done)&&(e.push(o.value),!n||e.length!==n);a=!0);}catch(t){r=!0,c=t}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return e}}function y(t){if(Array.isArray(t))return t}var h=function t(n,e){var a=e.find((function(t){return t.includes(n)}))||"";if(!a.trim())return"";for(;a.includes(n);)a=a.replace(n,"");return"\n\n".concat(a,"\n\n")},b=function t(n){var e=n.data,a=n.instance,r=n.nav,c=n.entity,i=r.find((function(t){return t.entity===c}))||{},o=i.note||"",u=/(\{\{%[^%]*?%\}\})\n*?.*?\n*?\1/g,f=String(o).replace(u,"").trim(),s=String(o).match(u),l=i.apiList,d,p,m=(void 0===l?[]:l).map((function(t){return/\{\{%[^%]*?%\}\}/.test(t)?{markdown:h(t,s)}:e.find((function(n){return n.name===t}))})).filter((function(t){return!!t})).map((function(t){if(t.markdown)return t.markdown;var n=a.filter((function(n){return n.config_option.includes("".concat(c,"/").concat(t.name))})),e="";if(n.length>0){var r=n.map((function(t){return'<a class="document-detail-example" href="/example/'.concat(t.chart,"/").concat(t.name,'" target="_blank" rel="noopener noreferrer" title="').concat(t.alias,'">\n          <span>').concat(t.alias,'</span>\n          <img src="').concat(t.thumbnail,'" alt="').concat(t.alias,'" />\n        </a>')})).join("");e="\n\n**\u76f8\u5173\u793a\u4f8b**\n\n".concat(r,"\n")}return"### ".concat(t.path,"\n\n**\u6570\u636e\u7c7b\u578b** - `").concat(t.data_type,"`\n\n**\u9ed8\u8ba4\u503c** - `").concat(t.default_value,"`\n\n").concat(t.note).concat(e)})).join("\n");return f&&(m="".concat(f,"\n\n").concat(m)),m};function v(t){var n=t.match,e=t.dispatch,c=t.nav,l=t.data,d=t.instance,p=n.params.entity;Object(a.useEffect)((function(){u.getEntityApi(e,p),u.getEntityInstance(e,p)}),[p]);var m,y=s(Object(a.useMemo)((function(){var t=c.find((function(t){return t.entity===p}));return t?["".concat(t.name," ").concat(t.entity),t.name]:[p,p]}),[c,p]),2),h=y[0],v=y[1],g=Object(a.useMemo)((function(){return b({data:l,instance:d,nav:c,entity:p})}),[l,d,c,p]);return r.a.createElement("div",{className:"reference-api-docs"},r.a.createElement(i.a,{title:"".concat(v," - API\u6587\u6863 | ").concat(o.baseDocumentTitle)}),r.a.createElement(f.default,{title:h,source:g}))}},585:function(t,n){}}]);