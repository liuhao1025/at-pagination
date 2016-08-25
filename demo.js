webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _App = __webpack_require__(1);

	var _App2 = _interopRequireDefault(_App);

	var _vue = __webpack_require__(13);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _vue2.default({
	  el: 'body',
	  components: {
	    App: _App2.default
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] demo\\App.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7863de02/App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.23.1@css-loader/index.js!./../node_modules/.8.5.3@vue-loader/lib/style-rewriter.js!./../node_modules/.8.5.3@vue-loader/lib/selector.js?type=style&index=0!./App.vue", function() {
				var newContent = require("!!./../node_modules/.0.23.1@css-loader/index.js!./../node_modules/.8.5.3@vue-loader/lib/style-rewriter.js!./../node_modules/.8.5.3@vue-loader/lib/selector.js?type=style&index=0!./App.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: #f0f0f0;\n}\n.wrapper {\n  width: 960px;\n  margin: 0 auto;\n}\n.wrapper > section {\n  margin-top: 20px;\n  padding: 15px;\n  background-color: #fff;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .3)\n}\n.wrapper > section > h3 {\n  margin: 0;\n  padding: 10px 0;\n  border-bottom: 1px solid #e0e0e0;\n  font-weight: normal;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Pagination = __webpack_require__(7);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var service = {
	  get: function get() {}
	};
	var Pager = {
	  data: function data() {
	    return {
	      query: {
	        page: 1,
	        pageSize: 10,
	        totalItems: 0
	      }
	    };
	  },

	  methods: {
	    changePage: function changePage(page) {
	      this.query.page = page;
	      typeof this.getData === 'function' && this.getData();
	    },
	    changeSize: function changeSize(size) {
	      this.query.pageSize = size;
	      typeof this.resetData === 'function' && this.resetData();
	    }
	  }
	};
	exports.default = {
	  mixins: [Pager],
	  data: function data() {
	    return {
	      name: 'PAGINATION',
	      items: []
	    };
	  },

	  methods: {
	    getData: function getData() {
	      this.items = [1, 2, 3, 4, 5];
	      this.query.totalItems = 70;
	    },
	    resetData: function resetData() {
	      this.query.page = 1;
	      this.getData();
	    }
	  },
	  components: {
	    AtPagination: _Pagination2.default
	  },
	  ready: function ready() {
	    this.getData();
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(8)
	__vue_script__ = __webpack_require__(10)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\Pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-dff7c8a8/Pagination.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.23.1@css-loader/index.js!./../node_modules/.8.5.3@vue-loader/lib/style-rewriter.js?id=_v-dff7c8a8&scoped=true!./../node_modules/.8.5.3@vue-loader/lib/selector.js?type=style&index=0!./Pagination.vue", function() {
				var newContent = require("!!./../node_modules/.0.23.1@css-loader/index.js!./../node_modules/.8.5.3@vue-loader/lib/style-rewriter.js?id=_v-dff7c8a8&scoped=true!./../node_modules/.8.5.3@vue-loader/lib/selector.js?type=style&index=0!./Pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nselect[_v-dff7c8a8], input[_v-dff7c8a8], button[_v-dff7c8a8] {\n  padding: 5px 12px;\n  border: 1px solid #e0e0e0;\n  outline: none;\n  background: #fff;\n}\ninput[_v-dff7c8a8] {\n  width: 30px;\n}\nbutton[_v-dff7c8a8] {\n  cursor: pointer;\n}\nbutton[_v-dff7c8a8]:hover {\n  background-color: #e0e0e0;\n}\nbutton[_v-dff7c8a8]:active {\n  background-color: #ccc;\n}\n.pagination-wrapper[_v-dff7c8a8] {\n  text-align: center;\n}\n.sizer[_v-dff7c8a8], .pagination[_v-dff7c8a8], .ladder[_v-dff7c8a8] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.pagination > ul[_v-dff7c8a8] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow: hidden;\n}\n.pagination > ul > li[_v-dff7c8a8] {\n  float: left;\n  padding: 5px 12px;\n  background-color: #fff;\n  border: 1px solid #e0e0e0;\n  border-left: none;\n  cursor: pointer;\n  -webkit-user-select: none;\n}\n.pagination > ul > li[_v-dff7c8a8]:first-child {\n  border-left: 1px solid #e0e0e0;\n}\n.pagination > ul > li.active[_v-dff7c8a8] {\n  background-color: #d31027;\n  border-color: #d31027;\n  color: #fff;\n}\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var SIZES = [10, 20, 50];
	exports.default = {
	  props: {
	    page: {
	      type: Number,
	      default: 1
	    },
	    pageSize: {
	      type: Number,
	      default: 10,
	      validator: function validator(value) {
	        return value > 0;
	      }
	    },
	    totalItems: {
	      type: Number,
	      default: 0,
	      validator: function validator(value) {
	        return value >= 0;
	      }
	    },
	    sizer: {
	      type: Boolean,
	      default: true
	    },
	    ladder: {
	      type: Boolean,
	      default: true
	    }
	  },
	  computed: {
	    items: function items() {
	      var items = [];
	      var curr = this.page,
	          limit = this.limit,
	          total = this.totalPage;
	      var start = 1,
	          end = this.totalPage;
	      var isOutOfLimit = typeof limit !== 'undefined' && limit < total;
	      if (isOutOfLimit) {
	        start = Math.max(1, curr - Math.floor(limit / 2));
	        end = start + limit - 1;
	      }
	      if (end > total) {
	        end = total;
	        start = end - limit + 1;
	      }
	      for (var i = start; i <= end; i++) {
	        items.push(i);
	      }
	      return items;
	    },
	    totalPage: function totalPage() {
	      return Math.ceil(this.totalItems / this.pageSize);
	    }
	  },
	  data: function data() {
	    return {
	      sizes: SIZES,

	      limit: 5,
	      ladderPage: ""
	    };
	  },

	  methods: {
	    prev: function prev() {
	      this.goPage(this.page - 1);
	    },
	    next: function next() {
	      this.goPage(this.page + 1);
	    },
	    ladderTo: function ladderTo() {
	      var page = Number(this.ladderPage);
	      page = isNaN(page) ? 1 : page;
	      page = Math.min(this.totalPage, Math.max(1, page));
	      this.goPage(page);
	      this.ladderPage = "";
	    },
	    goPage: function goPage(page) {
	      page = Number(page);
	      if (isNaN(page) || page < 1 || page > this.totalPage || page === this.page) {
	        console.log('Not a valid page number.');
	        return;
	      }
	      this.page = page;
	      this.$dispatch('change-page', this.page);
	    },
	    changeSize: function changeSize() {
	      this.$dispatch('change-size', this.pageSize);
	    }
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"pagination-wrapper\" _v-dff7c8a8=\"\">\n  <div class=\"sizer\" v-if=\"sizer\" _v-dff7c8a8=\"\">\n    <span _v-dff7c8a8=\"\">每页显示</span>\n    <select v-model=\"pageSize\" @change=\"changeSize\" _v-dff7c8a8=\"\">\n      <option v-for=\"item in sizes\" :value=\"item\" _v-dff7c8a8=\"\">{{ item }}</option>\n    </select>\n  </div>\n  <div class=\"pagination\" _v-dff7c8a8=\"\">\n    <ul _v-dff7c8a8=\"\">\n      <li @click=\"prev\" :disabled=\"item === 1\" _v-dff7c8a8=\"\">&lt;</li>\n      <li v-for=\"item in items\" :class=\"{active: item === page}\" @click=\"goPage(item)\" _v-dff7c8a8=\"\">{{ item }}</li>\n      <li @click=\"next\" :disabled=\"item === totalPage\" _v-dff7c8a8=\"\">&gt;</li>\n    </ul>\n  </div>\n  <div class=\"ladder\" v-if=\"ladder\" _v-dff7c8a8=\"\">\n    <input type=\"text\" v-model=\"ladderPage\" _v-dff7c8a8=\"\">\n    <button type=\"button\" @click=\"ladderTo\" _v-dff7c8a8=\"\">Go</button>\n  </div>\n</div>\n";

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"wrapper\">\n  <section>\n    <h3>DEMO FOR : {{ name }}</h3>\n    <ul>\n      <li v-for=\"item in items\">{{ item }}</li>\n    </ul>\n    <p>\n      <p>PAGEINFO: </p>\n      <p>{{ query | json }}</p>\n    </p>\n    <div>\n      <at-pagination :page=\"query.page\" :page-size=\"query.pageSize\" :total-items=\"query.totalItems\" @change-page=\"changePage\" @change-size=\"changeSize\"></at-pagination>\n    </div>\n  </section>\n</div>\n";

/***/ }
]);