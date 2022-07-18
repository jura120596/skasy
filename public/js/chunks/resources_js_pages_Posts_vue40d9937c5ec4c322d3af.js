(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Posts_vue"],{

/***/ "./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/ScriptLoader.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/ScriptLoader.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Utils_1 = __webpack_require__(/*! ./Utils */ "./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/Utils.js");
var createState = function () {
    return {
        listeners: [],
        scriptId: Utils_1.uuid('tiny-script'),
        scriptLoaded: false
    };
};
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, callback) {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, function () {
                    state.listeners.forEach(function (fn) { return fn(); });
                    state.scriptLoaded = true;
                });
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ScriptLoader = CreateScriptLoader();
exports.ScriptLoader = ScriptLoader;


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/TinyMCE.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/TinyMCE.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var getGlobal = function () { return (typeof window !== 'undefined' ? window : __webpack_require__.g); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};
exports.getTinymce = getTinymce;


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/Utils.js":
/*!********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/Utils.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
var isValidKey = function (key) { return validEvents.map(function (event) { return event.toLowerCase(); }).indexOf(key.toLowerCase()) !== -1; };
exports.isValidKey = isValidKey;
var bindHandlers = function (initEvent, listeners, editor) {
    Object.keys(listeners)
        .filter(isValidKey)
        .forEach(function (key) {
        var handler = listeners[key];
        if (typeof handler === 'function') {
            if (key === 'onInit') {
                handler(initEvent, editor);
            }
            else {
                editor.on(key.substring(2), function (e) { return handler(e, editor); });
            }
        }
    });
};
exports.bindHandlers = bindHandlers;
var bindModelHandlers = function (ctx, editor) {
    var modelEvents = ctx.$props.modelEvents ? ctx.$props.modelEvents : null;
    var normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents;
    editor.on(normalizedEvents ? normalizedEvents : 'change input undo redo', function () {
        ctx.$emit('input', editor.getContent({ format: ctx.$props.outputFormat }));
    });
};
exports.bindModelHandlers = bindModelHandlers;
var initEditor = function (initEvent, ctx, editor) {
    var value = ctx.$props.value ? ctx.$props.value : '';
    var initialValue = ctx.$props.initialValue ? ctx.$props.initialValue : '';
    editor.setContent(value || (ctx.initialized ? ctx.cache : initialValue));
    // Always bind the value listener in case users use :value instead of v-model
    ctx.$watch('value', function (val, prevVal) {
        if (editor && typeof val === 'string' && val !== prevVal && val !== editor.getContent({ format: ctx.$props.outputFormat })) {
            editor.setContent(val);
        }
    });
    // checks if the v-model shorthand is used (which sets an v-on:input listener) and then binds either
    // specified the events or defaults to "change keyup" event and emits the editor content on that event
    if (ctx.$listeners.input) {
        bindModelHandlers(ctx, editor);
    }
    bindHandlers(initEvent, ctx.$listeners, editor);
    ctx.initialized = true;
};
exports.initEditor = initEditor;
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
exports.uuid = uuid;
var isTextarea = function (element) {
    return element !== null && element.tagName.toLowerCase() === 'textarea';
};
exports.isTextarea = isTextarea;
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
exports.mergePlugins = mergePlugins;
var isNullOrUndefined = function (value) { return value === null || value === undefined; };
exports.isNullOrUndefined = isNullOrUndefined;


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/components/Editor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/components/Editor.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ScriptLoader_1 = __webpack_require__(/*! ../ScriptLoader */ "./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/ScriptLoader.js");
var TinyMCE_1 = __webpack_require__(/*! ../TinyMCE */ "./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/TinyMCE.js");
var Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/Utils.js");
var EditorPropTypes_1 = __webpack_require__(/*! ./EditorPropTypes */ "./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/components/EditorPropTypes.js");
var renderInline = function (h, id, tagName) {
    return h(tagName ? tagName : 'div', {
        attrs: { id: id }
    });
};
var renderIframe = function (h, id) {
    return h('textarea', {
        attrs: { id: id },
        style: { visibility: 'hidden' }
    });
};
var initialise = function (ctx) { return function () {
    var finalInit = __assign(__assign({}, ctx.$props.init), { readonly: ctx.$props.disabled, selector: "#" + ctx.elementId, plugins: Utils_1.mergePlugins(ctx.$props.init && ctx.$props.init.plugins, ctx.$props.plugins), toolbar: ctx.$props.toolbar || (ctx.$props.init && ctx.$props.init.toolbar), inline: ctx.inlineEditor, setup: function (editor) {
            ctx.editor = editor;
            editor.on('init', function (e) { return Utils_1.initEditor(e, ctx, editor); });
            if (ctx.$props.init && typeof ctx.$props.init.setup === 'function') {
                ctx.$props.init.setup(editor);
            }
        } });
    if (Utils_1.isTextarea(ctx.element)) {
        ctx.element.style.visibility = '';
        ctx.element.style.display = '';
    }
    TinyMCE_1.getTinymce().init(finalInit);
}; };
exports.Editor = {
    props: EditorPropTypes_1.editorProps,
    created: function () {
        this.elementId = this.$props.id || Utils_1.uuid('tiny-vue');
        this.inlineEditor = (this.$props.init && this.$props.init.inline) || this.$props.inline;
        this.initialized = false;
    },
    watch: {
        disabled: function () {
            this.editor.setMode(this.disabled ? 'readonly' : 'design');
        }
    },
    mounted: function () {
        this.element = this.$el;
        if (TinyMCE_1.getTinymce() !== null) {
            initialise(this)();
        }
        else if (this.element && this.element.ownerDocument) {
            var channel = this.$props.cloudChannel ? this.$props.cloudChannel : '5';
            var apiKey = this.$props.apiKey ? this.$props.apiKey : 'no-api-key';
            var scriptSrc = Utils_1.isNullOrUndefined(this.$props.tinymceScriptSrc) ?
                "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js" :
                this.$props.tinymceScriptSrc;
            ScriptLoader_1.ScriptLoader.load(this.element.ownerDocument, scriptSrc, initialise(this));
        }
    },
    beforeDestroy: function () {
        if (TinyMCE_1.getTinymce() !== null) {
            TinyMCE_1.getTinymce().remove(this.editor);
        }
    },
    deactivated: function () {
        var _a;
        if (!this.inlineEditor) {
            this.cache = this.editor.getContent();
            (_a = TinyMCE_1.getTinymce()) === null || _a === void 0 ? void 0 : _a.remove(this.editor);
        }
    },
    activated: function () {
        if (!this.inlineEditor && this.initialized) {
            initialise(this)();
        }
    },
    render: function (h) {
        return this.inlineEditor ? renderInline(h, this.elementId, this.$props.tagName) : renderIframe(h, this.elementId);
    }
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/components/EditorPropTypes.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/components/EditorPropTypes.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.editorProps = {
    apiKey: String,
    cloudChannel: String,
    id: String,
    init: Object,
    initialValue: String,
    inline: Boolean,
    modelEvents: [String, Array],
    plugins: [String, Array],
    tagName: String,
    toolbar: [String, Array],
    value: String,
    disabled: Boolean,
    tinymceScriptSrc: String,
    outputFormat: {
        type: String,
        validator: function (prop) { return prop === 'html' || prop === 'text'; }
    },
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Editor_1 = __webpack_require__(/*! ./components/Editor */ "./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/components/Editor.js");
exports.default = Editor_1.Editor;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Posts.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Posts.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/index.js");
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Posts",
  components: {
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data(vm) {
    return {
      text: ''
    };
  }
});

/***/ }),

/***/ "./resources/js/pages/Posts.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Posts.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Posts_vue_vue_type_template_id_1a53229a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Posts.vue?vue&type=template&id=1a53229a&scoped=true& */ "./resources/js/pages/Posts.vue?vue&type=template&id=1a53229a&scoped=true&");
/* harmony import */ var _Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Posts.vue?vue&type=script&lang=js& */ "./resources/js/pages/Posts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Posts_vue_vue_type_template_id_1a53229a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Posts_vue_vue_type_template_id_1a53229a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1a53229a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Posts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Posts.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Posts.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Posts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Posts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Posts.vue?vue&type=template&id=1a53229a&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Posts.vue?vue&type=template&id=1a53229a&scoped=true& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_template_id_1a53229a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_template_id_1a53229a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_template_id_1a53229a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Posts.vue?vue&type=template&id=1a53229a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Posts.vue?vue&type=template&id=1a53229a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Posts.vue?vue&type=template&id=1a53229a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Posts.vue?vue&type=template&id=1a53229a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "container",
    [
      _c("editor", {
        attrs: {
          "api-key": "kapr0kh0v3vscnkppsxgig98vf6mgitaii8auw3p2pin1c5t",
          "v-model": _vm.text
        }
      }),
      _vm._v("\n    " + _vm._s(_vm.text) + "\n\n")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1NjcmlwdExvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1RpbnlNQ0UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGlueW1jZS90aW55bWNlLXZ1ZS9saWIvY2pzL21haW4vdHMvY29tcG9uZW50cy9FZGl0b3JQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdHMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qb3N0cy52dWU/ZjhjYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdHMudnVlPzljMjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxjQUFjLG1CQUFPLENBQUMsNkVBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW5PO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9jaHVua3MvcmVzb3VyY2VzX2pzX3BhZ2VzX1Bvc3RzX3Z1ZTQwZDk5MzdjNWVjNGMzMjJkM2FmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVXRpbHNfMSA9IHJlcXVpcmUoXCIuL1V0aWxzXCIpO1xudmFyIGNyZWF0ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxpc3RlbmVyczogW10sXG4gICAgICAgIHNjcmlwdElkOiBVdGlsc18xLnV1aWQoJ3Rpbnktc2NyaXB0JyksXG4gICAgICAgIHNjcmlwdExvYWRlZDogZmFsc2VcbiAgICB9O1xufTtcbnZhciBDcmVhdGVTY3JpcHRMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXRlID0gY3JlYXRlU3RhdGUoKTtcbiAgICB2YXIgaW5qZWN0U2NyaXB0VGFnID0gZnVuY3Rpb24gKHNjcmlwdElkLCBkb2MsIHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNjcmlwdFRhZyA9IGRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0VGFnLnJlZmVycmVyUG9saWN5ID0gJ29yaWdpbic7XG4gICAgICAgIHNjcmlwdFRhZy50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHRUYWcuaWQgPSBzY3JpcHRJZDtcbiAgICAgICAgc2NyaXB0VGFnLnNyYyA9IHVybDtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzY3JpcHRUYWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZXIpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NyaXB0VGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVyKTtcbiAgICAgICAgaWYgKGRvYy5oZWFkKSB7XG4gICAgICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHRUYWcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgbG9hZCA9IGZ1bmN0aW9uIChkb2MsIHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHN0YXRlLnNjcmlwdExvYWRlZCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmICghZG9jLmdldEVsZW1lbnRCeUlkKHN0YXRlLnNjcmlwdElkKSkge1xuICAgICAgICAgICAgICAgIGluamVjdFNjcmlwdFRhZyhzdGF0ZS5zY3JpcHRJZCwgZG9jLCB1cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbigpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc2NyaXB0TG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gT25seSB0byBiZSB1c2VkIGJ5IHRlc3RzLlxuICAgIHZhciByZWluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YXRlID0gY3JlYXRlU3RhdGUoKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWQ6IGxvYWQsXG4gICAgICAgIHJlaW5pdGlhbGl6ZTogcmVpbml0aWFsaXplXG4gICAgfTtcbn07XG52YXIgU2NyaXB0TG9hZGVyID0gQ3JlYXRlU2NyaXB0TG9hZGVyKCk7XG5leHBvcnRzLlNjcmlwdExvYWRlciA9IFNjcmlwdExvYWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCk7IH07XG52YXIgZ2V0VGlueW1jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2xvYmFsID0gZ2V0R2xvYmFsKCk7XG4gICAgcmV0dXJuIGdsb2JhbCAmJiBnbG9iYWwudGlueW1jZSA/IGdsb2JhbC50aW55bWNlIDogbnVsbDtcbn07XG5leHBvcnRzLmdldFRpbnltY2UgPSBnZXRUaW55bWNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdmFsaWRFdmVudHMgPSBbXG4gICAgJ29uQWN0aXZhdGUnLFxuICAgICdvbkFkZFVuZG8nLFxuICAgICdvbkJlZm9yZUFkZFVuZG8nLFxuICAgICdvbkJlZm9yZUV4ZWNDb21tYW5kJyxcbiAgICAnb25CZWZvcmVHZXRDb250ZW50JyxcbiAgICAnb25CZWZvcmVSZW5kZXJVSScsXG4gICAgJ29uQmVmb3JlU2V0Q29udGVudCcsXG4gICAgJ29uQmVmb3JlUGFzdGUnLFxuICAgICdvbkJsdXInLFxuICAgICdvbkNoYW5nZScsXG4gICAgJ29uQ2xlYXJVbmRvcycsXG4gICAgJ29uQ2xpY2snLFxuICAgICdvbkNvbnRleHRNZW51JyxcbiAgICAnb25Db3B5JyxcbiAgICAnb25DdXQnLFxuICAgICdvbkRibGNsaWNrJyxcbiAgICAnb25EZWFjdGl2YXRlJyxcbiAgICAnb25EaXJ0eScsXG4gICAgJ29uRHJhZycsXG4gICAgJ29uRHJhZ0Ryb3AnLFxuICAgICdvbkRyYWdFbmQnLFxuICAgICdvbkRyYWdHZXN0dXJlJyxcbiAgICAnb25EcmFnT3ZlcicsXG4gICAgJ29uRHJvcCcsXG4gICAgJ29uRXhlY0NvbW1hbmQnLFxuICAgICdvbkZvY3VzJyxcbiAgICAnb25Gb2N1c0luJyxcbiAgICAnb25Gb2N1c091dCcsXG4gICAgJ29uR2V0Q29udGVudCcsXG4gICAgJ29uSGlkZScsXG4gICAgJ29uSW5pdCcsXG4gICAgJ29uS2V5RG93bicsXG4gICAgJ29uS2V5UHJlc3MnLFxuICAgICdvbktleVVwJyxcbiAgICAnb25Mb2FkQ29udGVudCcsXG4gICAgJ29uTW91c2VEb3duJyxcbiAgICAnb25Nb3VzZUVudGVyJyxcbiAgICAnb25Nb3VzZUxlYXZlJyxcbiAgICAnb25Nb3VzZU1vdmUnLFxuICAgICdvbk1vdXNlT3V0JyxcbiAgICAnb25Nb3VzZU92ZXInLFxuICAgICdvbk1vdXNlVXAnLFxuICAgICdvbk5vZGVDaGFuZ2UnLFxuICAgICdvbk9iamVjdFJlc2l6ZVN0YXJ0JyxcbiAgICAnb25PYmplY3RSZXNpemVkJyxcbiAgICAnb25PYmplY3RTZWxlY3RlZCcsXG4gICAgJ29uUGFzdGUnLFxuICAgICdvblBvc3RQcm9jZXNzJyxcbiAgICAnb25Qb3N0UmVuZGVyJyxcbiAgICAnb25QcmVQcm9jZXNzJyxcbiAgICAnb25Qcm9ncmVzc1N0YXRlJyxcbiAgICAnb25SZWRvJyxcbiAgICAnb25SZW1vdmUnLFxuICAgICdvblJlc2V0JyxcbiAgICAnb25TYXZlQ29udGVudCcsXG4gICAgJ29uU2VsZWN0aW9uQ2hhbmdlJyxcbiAgICAnb25TZXRBdHRyaWInLFxuICAgICdvblNldENvbnRlbnQnLFxuICAgICdvblNob3cnLFxuICAgICdvblN1Ym1pdCcsXG4gICAgJ29uVW5kbycsXG4gICAgJ29uVmlzdWFsQWlkJ1xuXTtcbnZhciBpc1ZhbGlkS2V5ID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdmFsaWRFdmVudHMubWFwKGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gZXZlbnQudG9Mb3dlckNhc2UoKTsgfSkuaW5kZXhPZihrZXkudG9Mb3dlckNhc2UoKSkgIT09IC0xOyB9O1xuZXhwb3J0cy5pc1ZhbGlkS2V5ID0gaXNWYWxpZEtleTtcbnZhciBiaW5kSGFuZGxlcnMgPSBmdW5jdGlvbiAoaW5pdEV2ZW50LCBsaXN0ZW5lcnMsIGVkaXRvcikge1xuICAgIE9iamVjdC5rZXlzKGxpc3RlbmVycylcbiAgICAgICAgLmZpbHRlcihpc1ZhbGlkS2V5KVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gbGlzdGVuZXJzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ29uSW5pdCcpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGluaXRFdmVudCwgZWRpdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVkaXRvci5vbihrZXkuc3Vic3RyaW5nKDIpLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gaGFuZGxlcihlLCBlZGl0b3IpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmV4cG9ydHMuYmluZEhhbmRsZXJzID0gYmluZEhhbmRsZXJzO1xudmFyIGJpbmRNb2RlbEhhbmRsZXJzID0gZnVuY3Rpb24gKGN0eCwgZWRpdG9yKSB7XG4gICAgdmFyIG1vZGVsRXZlbnRzID0gY3R4LiRwcm9wcy5tb2RlbEV2ZW50cyA/IGN0eC4kcHJvcHMubW9kZWxFdmVudHMgOiBudWxsO1xuICAgIHZhciBub3JtYWxpemVkRXZlbnRzID0gQXJyYXkuaXNBcnJheShtb2RlbEV2ZW50cykgPyBtb2RlbEV2ZW50cy5qb2luKCcgJykgOiBtb2RlbEV2ZW50cztcbiAgICBlZGl0b3Iub24obm9ybWFsaXplZEV2ZW50cyA/IG5vcm1hbGl6ZWRFdmVudHMgOiAnY2hhbmdlIGlucHV0IHVuZG8gcmVkbycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3R4LiRlbWl0KCdpbnB1dCcsIGVkaXRvci5nZXRDb250ZW50KHsgZm9ybWF0OiBjdHguJHByb3BzLm91dHB1dEZvcm1hdCB9KSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5iaW5kTW9kZWxIYW5kbGVycyA9IGJpbmRNb2RlbEhhbmRsZXJzO1xudmFyIGluaXRFZGl0b3IgPSBmdW5jdGlvbiAoaW5pdEV2ZW50LCBjdHgsIGVkaXRvcikge1xuICAgIHZhciB2YWx1ZSA9IGN0eC4kcHJvcHMudmFsdWUgPyBjdHguJHByb3BzLnZhbHVlIDogJyc7XG4gICAgdmFyIGluaXRpYWxWYWx1ZSA9IGN0eC4kcHJvcHMuaW5pdGlhbFZhbHVlID8gY3R4LiRwcm9wcy5pbml0aWFsVmFsdWUgOiAnJztcbiAgICBlZGl0b3Iuc2V0Q29udGVudCh2YWx1ZSB8fCAoY3R4LmluaXRpYWxpemVkID8gY3R4LmNhY2hlIDogaW5pdGlhbFZhbHVlKSk7XG4gICAgLy8gQWx3YXlzIGJpbmQgdGhlIHZhbHVlIGxpc3RlbmVyIGluIGNhc2UgdXNlcnMgdXNlIDp2YWx1ZSBpbnN0ZWFkIG9mIHYtbW9kZWxcbiAgICBjdHguJHdhdGNoKCd2YWx1ZScsIGZ1bmN0aW9uICh2YWwsIHByZXZWYWwpIHtcbiAgICAgICAgaWYgKGVkaXRvciAmJiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiB2YWwgIT09IHByZXZWYWwgJiYgdmFsICE9PSBlZGl0b3IuZ2V0Q29udGVudCh7IGZvcm1hdDogY3R4LiRwcm9wcy5vdXRwdXRGb3JtYXQgfSkpIHtcbiAgICAgICAgICAgIGVkaXRvci5zZXRDb250ZW50KHZhbCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBjaGVja3MgaWYgdGhlIHYtbW9kZWwgc2hvcnRoYW5kIGlzIHVzZWQgKHdoaWNoIHNldHMgYW4gdi1vbjppbnB1dCBsaXN0ZW5lcikgYW5kIHRoZW4gYmluZHMgZWl0aGVyXG4gICAgLy8gc3BlY2lmaWVkIHRoZSBldmVudHMgb3IgZGVmYXVsdHMgdG8gXCJjaGFuZ2Uga2V5dXBcIiBldmVudCBhbmQgZW1pdHMgdGhlIGVkaXRvciBjb250ZW50IG9uIHRoYXQgZXZlbnRcbiAgICBpZiAoY3R4LiRsaXN0ZW5lcnMuaW5wdXQpIHtcbiAgICAgICAgYmluZE1vZGVsSGFuZGxlcnMoY3R4LCBlZGl0b3IpO1xuICAgIH1cbiAgICBiaW5kSGFuZGxlcnMoaW5pdEV2ZW50LCBjdHguJGxpc3RlbmVycywgZWRpdG9yKTtcbiAgICBjdHguaW5pdGlhbGl6ZWQgPSB0cnVlO1xufTtcbmV4cG9ydHMuaW5pdEVkaXRvciA9IGluaXRFZGl0b3I7XG52YXIgdW5pcXVlID0gMDtcbnZhciB1dWlkID0gZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCk7XG4gICAgdW5pcXVlKys7XG4gICAgcmV0dXJuIHByZWZpeCArICdfJyArIHJhbmRvbSArIHVuaXF1ZSArIFN0cmluZyh0aW1lKTtcbn07XG5leHBvcnRzLnV1aWQgPSB1dWlkO1xudmFyIGlzVGV4dGFyZWEgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnO1xufTtcbmV4cG9ydHMuaXNUZXh0YXJlYSA9IGlzVGV4dGFyZWE7XG52YXIgbm9ybWFsaXplUGx1Z2luQXJyYXkgPSBmdW5jdGlvbiAocGx1Z2lucykge1xuICAgIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ3VuZGVmaW5lZCcgfHwgcGx1Z2lucyA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwbHVnaW5zKSA/IHBsdWdpbnMgOiBwbHVnaW5zLnNwbGl0KCcgJyk7XG59O1xudmFyIG1lcmdlUGx1Z2lucyA9IGZ1bmN0aW9uIChpbml0UGx1Z2lucywgaW5wdXRQbHVnaW5zKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVBsdWdpbkFycmF5KGluaXRQbHVnaW5zKS5jb25jYXQobm9ybWFsaXplUGx1Z2luQXJyYXkoaW5wdXRQbHVnaW5zKSk7XG59O1xuZXhwb3J0cy5tZXJnZVBsdWdpbnMgPSBtZXJnZVBsdWdpbnM7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7IH07XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2NyaXB0TG9hZGVyXzEgPSByZXF1aXJlKFwiLi4vU2NyaXB0TG9hZGVyXCIpO1xudmFyIFRpbnlNQ0VfMSA9IHJlcXVpcmUoXCIuLi9UaW55TUNFXCIpO1xudmFyIFV0aWxzXzEgPSByZXF1aXJlKFwiLi4vVXRpbHNcIik7XG52YXIgRWRpdG9yUHJvcFR5cGVzXzEgPSByZXF1aXJlKFwiLi9FZGl0b3JQcm9wVHlwZXNcIik7XG52YXIgcmVuZGVySW5saW5lID0gZnVuY3Rpb24gKGgsIGlkLCB0YWdOYW1lKSB7XG4gICAgcmV0dXJuIGgodGFnTmFtZSA/IHRhZ05hbWUgOiAnZGl2Jywge1xuICAgICAgICBhdHRyczogeyBpZDogaWQgfVxuICAgIH0pO1xufTtcbnZhciByZW5kZXJJZnJhbWUgPSBmdW5jdGlvbiAoaCwgaWQpIHtcbiAgICByZXR1cm4gaCgndGV4dGFyZWEnLCB7XG4gICAgICAgIGF0dHJzOiB7IGlkOiBpZCB9LFxuICAgICAgICBzdHlsZTogeyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9XG4gICAgfSk7XG59O1xudmFyIGluaXRpYWxpc2UgPSBmdW5jdGlvbiAoY3R4KSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpbmFsSW5pdCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjdHguJHByb3BzLmluaXQpLCB7IHJlYWRvbmx5OiBjdHguJHByb3BzLmRpc2FibGVkLCBzZWxlY3RvcjogXCIjXCIgKyBjdHguZWxlbWVudElkLCBwbHVnaW5zOiBVdGlsc18xLm1lcmdlUGx1Z2lucyhjdHguJHByb3BzLmluaXQgJiYgY3R4LiRwcm9wcy5pbml0LnBsdWdpbnMsIGN0eC4kcHJvcHMucGx1Z2lucyksIHRvb2xiYXI6IGN0eC4kcHJvcHMudG9vbGJhciB8fCAoY3R4LiRwcm9wcy5pbml0ICYmIGN0eC4kcHJvcHMuaW5pdC50b29sYmFyKSwgaW5saW5lOiBjdHguaW5saW5lRWRpdG9yLCBzZXR1cDogZnVuY3Rpb24gKGVkaXRvcikge1xuICAgICAgICAgICAgY3R4LmVkaXRvciA9IGVkaXRvcjtcbiAgICAgICAgICAgIGVkaXRvci5vbignaW5pdCcsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBVdGlsc18xLmluaXRFZGl0b3IoZSwgY3R4LCBlZGl0b3IpOyB9KTtcbiAgICAgICAgICAgIGlmIChjdHguJHByb3BzLmluaXQgJiYgdHlwZW9mIGN0eC4kcHJvcHMuaW5pdC5zZXR1cCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGN0eC4kcHJvcHMuaW5pdC5zZXR1cChlZGl0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IH0pO1xuICAgIGlmIChVdGlsc18xLmlzVGV4dGFyZWEoY3R4LmVsZW1lbnQpKSB7XG4gICAgICAgIGN0eC5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICAgICAgY3R4LmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cbiAgICBUaW55TUNFXzEuZ2V0VGlueW1jZSgpLmluaXQoZmluYWxJbml0KTtcbn07IH07XG5leHBvcnRzLkVkaXRvciA9IHtcbiAgICBwcm9wczogRWRpdG9yUHJvcFR5cGVzXzEuZWRpdG9yUHJvcHMsXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IHRoaXMuJHByb3BzLmlkIHx8IFV0aWxzXzEudXVpZCgndGlueS12dWUnKTtcbiAgICAgICAgdGhpcy5pbmxpbmVFZGl0b3IgPSAodGhpcy4kcHJvcHMuaW5pdCAmJiB0aGlzLiRwcm9wcy5pbml0LmlubGluZSkgfHwgdGhpcy4kcHJvcHMuaW5saW5lO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBkaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5lZGl0b3Iuc2V0TW9kZSh0aGlzLmRpc2FibGVkID8gJ3JlYWRvbmx5JyA6ICdkZXNpZ24nKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLiRlbDtcbiAgICAgICAgaWYgKFRpbnlNQ0VfMS5nZXRUaW55bWNlKCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGluaXRpYWxpc2UodGhpcykoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBjaGFubmVsID0gdGhpcy4kcHJvcHMuY2xvdWRDaGFubmVsID8gdGhpcy4kcHJvcHMuY2xvdWRDaGFubmVsIDogJzUnO1xuICAgICAgICAgICAgdmFyIGFwaUtleSA9IHRoaXMuJHByb3BzLmFwaUtleSA/IHRoaXMuJHByb3BzLmFwaUtleSA6ICduby1hcGkta2V5JztcbiAgICAgICAgICAgIHZhciBzY3JpcHRTcmMgPSBVdGlsc18xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuJHByb3BzLnRpbnltY2VTY3JpcHRTcmMpID9cbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vY2RuLnRpbnkuY2xvdWQvMS9cIiArIGFwaUtleSArIFwiL3RpbnltY2UvXCIgKyBjaGFubmVsICsgXCIvdGlueW1jZS5taW4uanNcIiA6XG4gICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMudGlueW1jZVNjcmlwdFNyYztcbiAgICAgICAgICAgIFNjcmlwdExvYWRlcl8xLlNjcmlwdExvYWRlci5sb2FkKHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LCBzY3JpcHRTcmMsIGluaXRpYWxpc2UodGhpcykpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChUaW55TUNFXzEuZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBUaW55TUNFXzEuZ2V0VGlueW1jZSgpLnJlbW92ZSh0aGlzLmVkaXRvcik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRlYWN0aXZhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKCF0aGlzLmlubGluZUVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5jYWNoZSA9IHRoaXMuZWRpdG9yLmdldENvbnRlbnQoKTtcbiAgICAgICAgICAgIChfYSA9IFRpbnlNQ0VfMS5nZXRUaW55bWNlKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUodGhpcy5lZGl0b3IpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlubGluZUVkaXRvciAmJiB0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBpbml0aWFsaXNlKHRoaXMpKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5saW5lRWRpdG9yID8gcmVuZGVySW5saW5lKGgsIHRoaXMuZWxlbWVudElkLCB0aGlzLiRwcm9wcy50YWdOYW1lKSA6IHJlbmRlcklmcmFtZShoLCB0aGlzLmVsZW1lbnRJZCk7XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lZGl0b3JQcm9wcyA9IHtcbiAgICBhcGlLZXk6IFN0cmluZyxcbiAgICBjbG91ZENoYW5uZWw6IFN0cmluZyxcbiAgICBpZDogU3RyaW5nLFxuICAgIGluaXQ6IE9iamVjdCxcbiAgICBpbml0aWFsVmFsdWU6IFN0cmluZyxcbiAgICBpbmxpbmU6IEJvb2xlYW4sXG4gICAgbW9kZWxFdmVudHM6IFtTdHJpbmcsIEFycmF5XSxcbiAgICBwbHVnaW5zOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgdGFnTmFtZTogU3RyaW5nLFxuICAgIHRvb2xiYXI6IFtTdHJpbmcsIEFycmF5XSxcbiAgICB2YWx1ZTogU3RyaW5nLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHRpbnltY2VTY3JpcHRTcmM6IFN0cmluZyxcbiAgICBvdXRwdXRGb3JtYXQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBwcm9wID09PSAnaHRtbCcgfHwgcHJvcCA9PT0gJ3RleHQnOyB9XG4gICAgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFZGl0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvRWRpdG9yXCIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRWRpdG9yXzEuRWRpdG9yO1xuIiwiPHRlbXBsYXRlPlxuICAgIDxjb250YWluZXI+XG4gICAgICAgIDxlZGl0b3IgYXBpLWtleT1cImthcHIwa2gwdjN2c2Nua3Bwc3hnaWc5OHZmNm1naXRhaWk4YXV3M3AycGluMWM1dFwiIDp2LW1vZGVsPVwidGV4dFwiPlxuXG4gICAgICAgIDwvZWRpdG9yPlxuICAgICAgICB7e3RleHR9fVxuXG4gICAgPC9jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBFZGl0b3IgZnJvbSAnQHRpbnltY2UvdGlueW1jZS12dWUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIlBvc3RzXCIsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIEVkaXRvclxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Bvc3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYTUzMjI5YSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Bvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWE1MzIyOWFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9qdXJhMTIwNTk2L1BocHN0b3JtUHJvamVjdHMvc2thc3kvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWE1MzIyOWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWE1MzIyOWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWE1MzIyOWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Bvc3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYTUzMjI5YSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYTUzMjI5YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiY29udGFpbmVyXCIsXG4gICAgW1xuICAgICAgX2MoXCJlZGl0b3JcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwiYXBpLWtleVwiOiBcImthcHIwa2gwdjN2c2Nua3Bwc3hnaWc5OHZmNm1naXRhaWk4YXV3M3AycGluMWM1dFwiLFxuICAgICAgICAgIFwidi1tb2RlbFwiOiBfdm0udGV4dFxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0udGV4dCkgKyBcIlxcblxcblwiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==