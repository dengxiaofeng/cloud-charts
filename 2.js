(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{530:function(e,t){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.INDEX_MODES=void 0;var r,a=o(n(1)),i=n(2);function o(e){return e&&e.__esModule?e:{default:e}}t.default=a.default,t.INDEX_MODES=i.INDEX_MODES},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a,i=o(n(6));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c=function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.caseSensitive,o=n.indexMode,c=n.matchAnyToken,u=n.tokenizePattern;s(this,e),this.indexDocument=function(e,n){return t._search.indexDocument(e,n),t},this.search=function(e){return t._search.search(e)},this.terminate=function(){t._search.terminate()},"undefined"!=typeof window&&window.Worker?this._search=new i.default({indexMode:o,matchAnyToken:c,tokenizePattern:u,caseSensitive:a}):this._search=new r.SearchUtility({indexMode:o,matchAnyToken:c,tokenizePattern:u,caseSensitive:a})};t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SearchUtility=t.INDEX_MODES=void 0;var r,a=o(n(3)),i=n(4);function o(e){return e&&e.__esModule?e:{default:e}}t.default=a.default,t.INDEX_MODES=i.INDEX_MODES,t.SearchUtility=a.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(4),i,o=s(n(5));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.caseSensitive,i=void 0!==r&&r,s=n.indexMode,u=void 0===s?a.INDEX_MODES.ALL_SUBSTRINGS:s,d=n.matchAnyToken,l=void 0!==d&&d,h=n.tokenizePattern,f=void 0===h?/\s+/:h;c(this,e),this.indexDocument=function(e,n){var r;return t._uids[e]=!0,t._tokenize(t._sanitize(n)).forEach((function(n){var r;t._expandToken(n).forEach((function(n){t._searchIndex.indexDocument(n,e)}))})),t},this.search=function(e){if(e){var n=t._tokenize(t._sanitize(e));return t._searchIndex.search(n,t._matchAnyToken)}return Object.keys(t._uids)},this.terminate=function(){},this._caseSensitive=i,this._indexMode=u,this._matchAnyToken=l,this._tokenizePattern=f,this._searchIndex=new o.default,this._uids={}}return r(e,[{key:"getCaseSensitive",value:function e(){return this._caseSensitive}},{key:"getIndexMode",value:function e(){return this._indexMode}},{key:"getMatchAnyToken",value:function e(){return this._matchAnyToken}},{key:"getTokenizePattern",value:function e(){return this._tokenizePattern}},{key:"setCaseSensitive",value:function e(t){this._caseSensitive=t}},{key:"setIndexMode",value:function e(t){if(Object.keys(this._uids).length>0)throw Error("indexMode cannot be changed once documents have been indexed");this._indexMode=t}},{key:"setMatchAnyToken",value:function e(t){this._matchAnyToken=t}},{key:"setTokenizePattern",value:function e(t){this._tokenizePattern=t}},{key:"_expandToken",value:function e(t){switch(this._indexMode){case a.INDEX_MODES.EXACT_WORDS:return[t];case a.INDEX_MODES.PREFIXES:return this._expandPrefixTokens(t);case a.INDEX_MODES.ALL_SUBSTRINGS:default:return this._expandAllSubstringTokens(t)}}},{key:"_expandAllSubstringTokens",value:function e(t){var n=[];try{for(var r=0,a=t.length;r<a;++r)for(var i="",o=r;o<a;++o)i+=t.charAt(o),n.push(i)}catch(e){console.error('Unable to parse token "'+t+'" '+e)}return n}},{key:"_expandPrefixTokens",value:function e(t){var n=[];try{for(var r=0,a=t.length;r<a;++r)n.push(t.substr(0,r+1))}catch(e){console.error('Unable to parse token "'+t+'" '+e)}return n}},{key:"_sanitize",value:function e(t){return this._caseSensitive?t.trim():t.trim().toLocaleLowerCase()}},{key:"_tokenize",value:function e(t){return t.split(this._tokenizePattern).filter((function(e){return e}))}}]),e}();t.default=u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.INDEX_MODES={ALL_SUBSTRINGS:"ALL_SUBSTRINGS",EXACT_WORDS:"EXACT_WORDS",PREFIXES:"PREFIXES"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(){r(this,e),this.tokenToUidMap={}}return n(e,[{key:"indexDocument",value:function e(t,n){this.tokenToUidMap[t]||(this.tokenToUidMap[t]={}),this.tokenToUidMap[t][n]=n}},{key:"search",value:function e(t,n){var r=this,a={},i={},o=!1;t.forEach((function(e){var t=r.tokenToUidMap[e]||{};if(o)if(n)for(var s in t)a[s]=t[s],i[s]=(i[s]||0)+1;else for(var c in a)t[c]||delete a[c];else for(var u in o=!0,t)a[u]=t[u],i[u]=1}));var s=[];for(var c in a)s.push(a[c]);return n&&s.sort((function(e,t){return i[t]-i[e]})),s}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}t.default=a.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a,i=o(n(8));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=r.caseSensitive,o=r.indexMode,c=r.matchAnyToken,u=r.tokenizePattern,d=r.WorkerClass;s(this,e),this.indexDocument=function(e,n){return t._worker.postMessage({method:"indexDocument",text:n,uid:e}),t},this.search=function(e){return new Promise((function(n,r){var a=i.default.v4(),o={callbackId:a,complete:!1,error:null,reject:r,resolve:n,results:null};t._worker.postMessage({method:"search",query:e,callbackId:a}),t._callbackQueue.push(o),t._callbackIdMap[a]=o}))},this.terminate=function(){t._worker.terminate()},d||(d=n(10)),this._callbackQueue=[],this._callbackIdMap={},this._worker=new d,this._worker.onerror=function(e){if(e.data){var n=e.data,r=n.callbackId,a=n.error;t._updateQueue({callbackId:r,error:a})}else console.error(e)},this._worker.onmessage=function(e){var n=e.data,r=n.callbackId,a=n.results;t._updateQueue({callbackId:r,results:a})},a&&this._worker.postMessage({method:"setCaseSensitive",caseSensitive:a}),o&&this._worker.postMessage({method:"setIndexMode",indexMode:o}),c&&this._worker.postMessage({method:"setMatchAnyToken",matchAnyToken:c}),u&&this._worker.postMessage({method:"setTokenizePattern",tokenizePattern:u})}return r(e,[{key:"_updateQueue",value:function e(t){var n=t.callbackId,r=t.error,a=t.results,i=this._callbackIdMap[n];for(i.complete=!0,i.error=r,i.results=a;this._callbackQueue.length;){var o=this._callbackQueue[0];if(!o.complete)break;this._callbackQueue.shift(),delete this._callbackIdMap[o.callbackId],o.error?o.reject(o.error):o.resolve(o.results)}}}]),e}();t.default=c},function(e,t,n){for(var r=n(9),a=[],i={},o=0;o<256;o++)a[o]=(o+256).toString(16).substr(1),i[a[o]]=o;function s(e,t,n){var r=t&&n||0,a=0;for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,(function(e){a<16&&(t[r+a++]=i[e])}));a<16;)t[r+a++]=0;return t}function c(e,t){var n=t||0,r=a;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}var u=r(),d=[1|u[0],u[1],u[2],u[3],u[4],u[5]],l=16383&(u[6]<<8|u[7]),h=0,f=0;function _(e,t,n){var r=t&&n||0,a=t||[],i=void 0!==(e=e||{}).clockseq?e.clockseq:l,o=void 0!==e.msecs?e.msecs:(new Date).getTime(),s=void 0!==e.nsecs?e.nsecs:f+1,u=o-h+(s-f)/1e4;if(u<0&&void 0===e.clockseq&&(i=i+1&16383),(u<0||o>h)&&void 0===e.nsecs&&(s=0),s>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");h=o,f=s,l=i;var _=(1e4*(268435455&(o+=122192928e5))+s)%4294967296;a[r++]=_>>>24&255,a[r++]=_>>>16&255,a[r++]=_>>>8&255,a[r++]=255&_;var p=o/4294967296*1e4&268435455;a[r++]=p>>>8&255,a[r++]=255&p,a[r++]=p>>>24&15|16,a[r++]=p>>>16&255,a[r++]=i>>>8|128,a[r++]=255&i;for(var k=e.node||d,v=0;v<6;v++)a[r+v]=k[v];return t||c(a)}function p(e,t,n){var a=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var o=0;o<16;o++)t[a+o]=i[o];return t||c(i)}var k=p;k.v1=_,k.v4=p,k.parse=s,k.unparse=c,e.exports=k},function(e,t){(function(t){var n,r=t.crypto||t.msCrypto;if(r&&r.getRandomValues){var a=new Uint8Array(16);n=function e(){return r.getRandomValues(a),a}}if(!n){var i=new Array(16);n=function(){for(var e=0,t;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),i[e]=t>>>((3&e)<<3)&255;return i}}e.exports=n}).call(t,function(){return this}())},function(e,t,n){e.exports=function(){return n(11)('/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId])\n/******/ \t\t\treturn installedModules[moduleId].exports;\n\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\texports: {},\n/******/ \t\t\tid: moduleId,\n/******/ \t\t\tloaded: false\n/******/ \t\t};\n\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.loaded = true;\n\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n\n\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = "";\n\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(0);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ function(module, exports, __webpack_require__) {\n\n\t"use strict";\n\n\tvar _util = __webpack_require__(1);\n\n\t/**\n\t * Search entry point to web worker.\n\t * Builds search index and performs searches on separate thread from the ui.\n\t */\n\n\tvar searchUtility = new _util.SearchUtility();\n\n\tself.addEventListener("message", function (event) {\n\t  var data = event.data;\n\t  var method = data.method;\n\n\n\t  switch (method) {\n\t    case "indexDocument":\n\t      var uid = data.uid,\n\t          text = data.text;\n\n\n\t      searchUtility.indexDocument(uid, text);\n\t      break;\n\t    case "search":\n\t      var callbackId = data.callbackId,\n\t          query = data.query;\n\n\n\t      var results = searchUtility.search(query);\n\n\t      self.postMessage({ callbackId: callbackId, results: results });\n\t      break;\n\t    case "setCaseSensitive":\n\t      var caseSensitive = data.caseSensitive;\n\n\n\t      searchUtility.setCaseSensitive(caseSensitive);\n\t      break;\n\t    case "setIndexMode":\n\t      var indexMode = data.indexMode;\n\n\n\t      searchUtility.setIndexMode(indexMode);\n\t      break;\n\t    case "setMatchAnyToken":\n\t      var matchAnyToken = data.matchAnyToken;\n\n\n\t      searchUtility.setMatchAnyToken(matchAnyToken);\n\t      break;\n\t    case "setTokenizePattern":\n\t      var tokenizePattern = data.tokenizePattern;\n\n\n\t      searchUtility.setTokenizePattern(tokenizePattern);\n\t      break;\n\t  }\n\t}, false);\n\n/***/ },\n/* 1 */\n/***/ function(module, exports, __webpack_require__) {\n\n\t"use strict";\n\n\tObject.defineProperty(exports, "__esModule", {\n\t  value: true\n\t});\n\texports.SearchUtility = exports.INDEX_MODES = undefined;\n\n\tvar _SearchUtility = __webpack_require__(2);\n\n\tvar _SearchUtility2 = _interopRequireDefault(_SearchUtility);\n\n\tvar _constants = __webpack_require__(3);\n\n\tfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n\texports.default = _SearchUtility2.default;\n\texports.INDEX_MODES = _constants.INDEX_MODES;\n\texports.SearchUtility = _SearchUtility2.default;\n\n/***/ },\n/* 2 */\n/***/ function(module, exports, __webpack_require__) {\n\n\t"use strict";\n\n\tObject.defineProperty(exports, "__esModule", {\n\t  value: true\n\t});\n\n\tvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n\tvar _constants = __webpack_require__(3);\n\n\tvar _SearchIndex = __webpack_require__(4);\n\n\tvar _SearchIndex2 = _interopRequireDefault(_SearchIndex);\n\n\tfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n\tfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\n\t/**\n\t * Synchronous client-side full-text search utility.\n\t * Forked from JS search (github.com/bvaughn/js-search).\n\t */\n\tvar SearchUtility = function () {\n\n\t  /**\n\t   * Constructor.\n\t   *\n\t   * @param indexMode See #setIndexMode\n\t   * @param tokenizePattern See #setTokenizePattern\n\t   * @param caseSensitive See #setCaseSensitive\n\t   * @param matchAnyToken See #setMatchAnyToken\n\t   */\n\t  function SearchUtility() {\n\t    var _this = this;\n\n\t    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n\t        _ref$caseSensitive = _ref.caseSensitive,\n\t        caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,\n\t        _ref$indexMode = _ref.indexMode,\n\t        indexMode = _ref$indexMode === undefined ? _constants.INDEX_MODES.ALL_SUBSTRINGS : _ref$indexMode,\n\t        _ref$matchAnyToken = _ref.matchAnyToken,\n\t        matchAnyToken = _ref$matchAnyToken === undefined ? false : _ref$matchAnyToken,\n\t        _ref$tokenizePattern = _ref.tokenizePattern,\n\t        tokenizePattern = _ref$tokenizePattern === undefined ? /\\s+/ : _ref$tokenizePattern;\n\n\t    _classCallCheck(this, SearchUtility);\n\n\t    this.indexDocument = function (uid, text) {\n\t      _this._uids[uid] = true;\n\n\t      var fieldTokens = _this._tokenize(_this._sanitize(text));\n\n\t      fieldTokens.forEach(function (fieldToken) {\n\t        var expandedTokens = _this._expandToken(fieldToken);\n\n\t        expandedTokens.forEach(function (expandedToken) {\n\t          _this._searchIndex.indexDocument(expandedToken, uid);\n\t        });\n\t      });\n\n\t      return _this;\n\t    };\n\n\t    this.search = function (query) {\n\t      if (!query) {\n\t        return Object.keys(_this._uids);\n\t      } else {\n\t        var tokens = _this._tokenize(_this._sanitize(query));\n\n\t        return _this._searchIndex.search(tokens, _this._matchAnyToken);\n\t      }\n\t    };\n\n\t    this.terminate = function () {};\n\n\t    this._caseSensitive = caseSensitive;\n\t    this._indexMode = indexMode;\n\t    this._matchAnyToken = matchAnyToken;\n\t    this._tokenizePattern = tokenizePattern;\n\n\t    this._searchIndex = new _SearchIndex2.default();\n\t    this._uids = {};\n\t  }\n\n\t  /**\n\t   * Returns a constant representing the current case-sensitive bit.\n\t   */\n\n\n\t  _createClass(SearchUtility, [{\n\t    key: "getCaseSensitive",\n\t    value: function getCaseSensitive() {\n\t      return this._caseSensitive;\n\t    }\n\n\t    /**\n\t     * Returns a constant representing the current index mode.\n\t     */\n\n\t  }, {\n\t    key: "getIndexMode",\n\t    value: function getIndexMode() {\n\t      return this._indexMode;\n\t    }\n\n\t    /**\n\t     * Returns a constant representing the current match-any-token bit.\n\t     */\n\n\t  }, {\n\t    key: "getMatchAnyToken",\n\t    value: function getMatchAnyToken() {\n\t      return this._matchAnyToken;\n\t    }\n\n\t    /**\n\t     * Returns a constant representing the current tokenize pattern.\n\t     */\n\n\t  }, {\n\t    key: "getTokenizePattern",\n\t    value: function getTokenizePattern() {\n\t      return this._tokenizePattern;\n\t    }\n\n\t    /**\n\t     * Adds or updates a uid in the search index and associates it with the specified text.\n\t     * Note that at this time uids can only be added or updated in the index, not removed.\n\t     *\n\t     * @param uid Uniquely identifies a searchable object\n\t     * @param text Text to associate with uid\n\t     */\n\n\n\t    /**\n\t     * Searches the current index for the specified query text.\n\t     * Only uids matching all of the words within the text will be accepted,\n\t     * unless matchAny is set to true.\n\t     * If an empty query string is provided all indexed uids will be returned.\n\t     *\n\t     * Document searches are case-insensitive by default (e.g. "search" will match "Search").\n\t     * Document searches use substring matching by default (e.g. "na" and "me" will both match "name").\n\t     *\n\t     * @param query Searchable query text\n\t     * @return Array of uids\n\t     */\n\n\t  }, {\n\t    key: "setCaseSensitive",\n\n\n\t    /**\n\t     * Sets a new case-sensitive bit\n\t     */\n\t    value: function setCaseSensitive(caseSensitive) {\n\t      this._caseSensitive = caseSensitive;\n\t    }\n\n\t    /**\n\t     * Sets a new index mode.\n\t     * See util/constants/INDEX_MODES\n\t     */\n\n\t  }, {\n\t    key: "setIndexMode",\n\t    value: function setIndexMode(indexMode) {\n\t      if (Object.keys(this._uids).length > 0) {\n\t        throw Error("indexMode cannot be changed once documents have been indexed");\n\t      }\n\n\t      this._indexMode = indexMode;\n\t    }\n\n\t    /**\n\t     * Sets a new match-any-token bit\n\t     */\n\n\t  }, {\n\t    key: "setMatchAnyToken",\n\t    value: function setMatchAnyToken(matchAnyToken) {\n\t      this._matchAnyToken = matchAnyToken;\n\t    }\n\n\t    /**\n\t     * Sets a new tokenize pattern (regular expression)\n\t     */\n\n\t  }, {\n\t    key: "setTokenizePattern",\n\t    value: function setTokenizePattern(pattern) {\n\t      this._tokenizePattern = pattern;\n\t    }\n\n\t    /**\n\t     *  Added to make class adhere to interface. Add cleanup code as needed.\n\t     */\n\n\t  }, {\n\t    key: "_expandToken",\n\n\n\t    /**\n\t     * Index strategy based on \'all-substrings-index-strategy.ts\' in github.com/bvaughn/js-search/\n\t     *\n\t     * @private\n\t     */\n\t    value: function _expandToken(token) {\n\t      switch (this._indexMode) {\n\t        case _constants.INDEX_MODES.EXACT_WORDS:\n\t          return [token];\n\t        case _constants.INDEX_MODES.PREFIXES:\n\t          return this._expandPrefixTokens(token);\n\t        case _constants.INDEX_MODES.ALL_SUBSTRINGS:\n\t        default:\n\t          return this._expandAllSubstringTokens(token);\n\t      }\n\t    }\n\t  }, {\n\t    key: "_expandAllSubstringTokens",\n\t    value: function _expandAllSubstringTokens(token) {\n\t      var expandedTokens = [];\n\n\t      // String.prototype.charAt() may return surrogate halves instead of whole characters.\n\t      // When this happens in the context of a web-worker it can cause Chrome to crash.\n\t      // Catching the error is a simple solution for now; in the future I may try to better support non-BMP characters.\n\t      // Resources:\n\t      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt\n\t      // https://mathiasbynens.be/notes/javascript-unicode\n\t      try {\n\t        for (var i = 0, length = token.length; i < length; ++i) {\n\t          var substring = "";\n\n\t          for (var j = i; j < length; ++j) {\n\t            substring += token.charAt(j);\n\t            expandedTokens.push(substring);\n\t          }\n\t        }\n\t      } catch (error) {\n\t        console.error("Unable to parse token \\"" + token + "\\" " + error);\n\t      }\n\n\t      return expandedTokens;\n\t    }\n\t  }, {\n\t    key: "_expandPrefixTokens",\n\t    value: function _expandPrefixTokens(token) {\n\t      var expandedTokens = [];\n\n\t      // String.prototype.charAt() may return surrogate halves instead of whole characters.\n\t      // When this happens in the context of a web-worker it can cause Chrome to crash.\n\t      // Catching the error is a simple solution for now; in the future I may try to better support non-BMP characters.\n\t      // Resources:\n\t      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt\n\t      // https://mathiasbynens.be/notes/javascript-unicode\n\t      try {\n\t        for (var i = 0, length = token.length; i < length; ++i) {\n\t          expandedTokens.push(token.substr(0, i + 1));\n\t        }\n\t      } catch (error) {\n\t        console.error("Unable to parse token \\"" + token + "\\" " + error);\n\t      }\n\n\t      return expandedTokens;\n\t    }\n\n\t    /**\n\t     * @private\n\t     */\n\n\t  }, {\n\t    key: "_sanitize",\n\t    value: function _sanitize(string) {\n\t      return this._caseSensitive ? string.trim() : string.trim().toLocaleLowerCase();\n\t    }\n\n\t    /**\n\t     * @private\n\t     */\n\n\t  }, {\n\t    key: "_tokenize",\n\t    value: function _tokenize(text) {\n\t      return text.split(this._tokenizePattern).filter(function (text) {\n\t        return text;\n\t      }); // Remove empty tokens\n\t    }\n\t  }]);\n\n\t  return SearchUtility;\n\t}();\n\n\texports.default = SearchUtility;\n\n/***/ },\n/* 3 */\n/***/ function(module, exports) {\n\n\t"use strict";\n\n\tObject.defineProperty(exports, "__esModule", {\n\t  value: true\n\t});\n\tvar INDEX_MODES = exports.INDEX_MODES = {\n\t  // Indexes for all substring searches (e.g. the term "cat" is indexed as "c", "ca", "cat", "a", "at", and "t").\n\t  // Based on \'all-substrings-index-strategy\' from js-search;\n\t  // github.com/bvaughn/js-search/blob/master/source/index-strategy/all-substrings-index-strategy.ts\n\t  ALL_SUBSTRINGS: "ALL_SUBSTRINGS",\n\n\t  // Indexes for exact word matches only.\n\t  // Based on \'exact-word-index-strategy\' from js-search;\n\t  // github.com/bvaughn/js-search/blob/master/source/index-strategy/exact-word-index-strategy.ts\n\t  EXACT_WORDS: "EXACT_WORDS",\n\n\t  // Indexes for prefix searches (e.g. the term "cat" is indexed as "c", "ca", and "cat" allowing prefix search lookups).\n\t  // Based on \'prefix-index-strategy\' from js-search;\n\t  // github.com/bvaughn/js-search/blob/master/source/index-strategy/prefix-index-strategy.ts\n\t  PREFIXES: "PREFIXES"\n\t};\n\n/***/ },\n/* 4 */\n/***/ function(module, exports) {\n\n\t"use strict";\n\n\tObject.defineProperty(exports, "__esModule", {\n\t  value: true\n\t});\n\n\tvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n\tfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\n\t/**\n\t * Maps search tokens to uids using a trie structure.\n\t */\n\tvar SearchIndex = function () {\n\t  function SearchIndex() {\n\t    _classCallCheck(this, SearchIndex);\n\n\t    this.tokenToUidMap = {};\n\t  }\n\n\t  /**\n\t   * Maps the specified token to a uid.\n\t   *\n\t   * @param token Searchable token (e.g. "road")\n\t   * @param uid Identifies a document within the searchable corpus\n\t   */\n\n\n\t  _createClass(SearchIndex, [{\n\t    key: "indexDocument",\n\t    value: function indexDocument(token, uid) {\n\t      if (!this.tokenToUidMap[token]) {\n\t        this.tokenToUidMap[token] = {};\n\t      }\n\n\t      this.tokenToUidMap[token][uid] = uid;\n\t    }\n\n\t    /**\n\t     * Finds uids that have been mapped to the set of tokens specified.\n\t     * Only uids that have been mapped to all tokens will be returned.\n\t     *\n\t     * @param tokens Array of searchable tokens (e.g. ["long", "road"])\n\t     * @param matchAnyToken Whether to match any token. Default is false.\n\t     * @return Array of uids that have been associated with the set of search tokens\n\t     */\n\n\t  }, {\n\t    key: "search",\n\t    value: function search(tokens, matchAnyToken) {\n\t      var _this = this;\n\n\t      var uidMap = {};\n\t      var uidMatches = {};\n\t      var initialized = false;\n\n\t      tokens.forEach(function (token) {\n\t        var currentUidMap = _this.tokenToUidMap[token] || {};\n\n\t        if (!initialized) {\n\t          initialized = true;\n\n\t          for (var _uid in currentUidMap) {\n\t            uidMap[_uid] = currentUidMap[_uid];\n\t            uidMatches[_uid] = 1;\n\t          }\n\t        } else {\n\t          // Delete existing matches if using and AND query (the default)\n\t          // Otherwise add new results to the matches\n\t          if (!matchAnyToken) {\n\t            for (var _uid2 in uidMap) {\n\t              if (!currentUidMap[_uid2]) {\n\t                delete uidMap[_uid2];\n\t              }\n\t            }\n\t          } else {\n\t            for (var _uid3 in currentUidMap) {\n\t              uidMap[_uid3] = currentUidMap[_uid3];\n\t              uidMatches[_uid3] = (uidMatches[_uid3] || 0) + 1;\n\t            }\n\t          }\n\t        }\n\t      });\n\n\t      var uids = [];\n\t      for (var _uid4 in uidMap) {\n\t        uids.push(uidMap[_uid4]);\n\t      }\n\n\t      // Sort according to most matches, if match any token is set.\n\t      if (matchAnyToken) {\n\t        uids.sort(function (a, b) {\n\t          return uidMatches[b] - uidMatches[a];\n\t        });\n\t      }\n\n\t      return uids;\n\t    }\n\t  }]);\n\n\t  return SearchIndex;\n\t}();\n\n\texports.default = SearchIndex;\n\n/***/ }\n/******/ ]);',n.p+"5cafaba60d6eb1f43c8f.worker.js")}},function(e,t){var n=window.URL||window.webkitURL;e.exports=function(e,t){try{try{var r;try{var a;(r=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)).append(e),r=r.getBlob()}catch(t){r=new Blob([e])}return new Worker(n.createObjectURL(r))}catch(t){return new Worker("data:application/javascript,"+encodeURIComponent(e))}}catch(e){if(!t)throw Error("Inline worker is not supported");return new Worker(t)}}}])}}]);