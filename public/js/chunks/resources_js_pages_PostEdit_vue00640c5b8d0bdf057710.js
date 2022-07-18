(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_PostEdit_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo-loader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo-loader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'photo-loader',
  props: {
    radius: {
      type: Number
    }
  },
  components: {},
  data: function data() {
    return {
      photo: '',
      loadedPhotos: [],
      fileImg: null
    };
  },
  methods: {
    returnFormData: function returnFormData(val) {
      this.$emit('save-photo', val);
    },
    updatePhoto: function updatePhoto(val) {
      this.photo = val;
      this.showCropperDialog = false;
    },
    clickOnInput: function clickOnInput() {
      document.getElementById('files').files = new DataTransfer().files;
      document.getElementById('files').click();
    },
    addPhoto: function addPhoto(event) {
      this.fileImg = event.target.files[0];

      if (this.fileImg.size > 5024000) {
        this.$root.$children[0].snackbarText = 'Размер файла не может быть больше 5МБ';
        this.$root.$children[0].snackbar = true;
        return;
      }

      if (this.loadedPhotos.length > 10) {
        this.$root.$children[0].snackbarText = 'Вы не можете загрузить больше 10 фотографий';
        this.$root.$children[0].snackbar = true;
        return;
      }

      this.loadedPhotos.push(URL.createObjectURL(this.fileImg));
      console.log(this.loadedPhotos);
      this.fileImg = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PostEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PostEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/cjs/main/ts/index.js");
/* harmony import */ var _components_photo_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/photo-loader */ "./resources/js/components/photo-loader.vue");
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
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PostAdd",
  components: {
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    PhotoLoader: _components_photo_loader__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data(vm) {
    return {
      post: {
        id: vm.$route.params.id,
        title: '',
        description: ''
      },
      messages: {
        title: '',
        description: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    var modelId = this.$route.params.id;

    if (modelId != 0) {
      window.axios.get('/post/' + modelId).then(function (response) {
        _this.post = r.data.data;
      })["catch"](function (e) {
        console.log(e);
        _this.$root.$children[0].snackbarText = (e === null || e === void 0 ? void 0 : e.response.error) || 'Произошла ошибка';
        _this.$root.$children[0].snackbar = true;
      });
    }
  },
  methods: {
    create: function create() {
      var _this2 = this;

      window.axios.post('/post', this.post).then(function (r) {
        _this2.$root.$children[0].snackbarText = r.data.message;
        _this2.$root.$children[0].snackbar = true;

        _this2.$router.push({
          name: "post",
          params: {
            id: r.data.data.id
          }
        });
      })["catch"](function (e) {
        if (e.response && e.response.status === 422) {
          var errors = e.response.data.errors;
          Object.keys(_this2.messages).forEach(function (k) {
            var _errors$k;

            _this2.messages[k] = ((_errors$k = errors[k]) === null || _errors$k === void 0 ? void 0 : _errors$k[0]) || '';
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo-loader.vue?vue&type=style&index=0&id=646fd8d9&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo-loader.vue?vue&type=style&index=0&id=646fd8d9&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.photo-input[data-v-646fd8d9] {\n    position: absolute;\n    visibility: hidden;\n}\n.user-photo[data-v-646fd8d9] {\n    border-radius: 200px;\n    width: 300px;\n    height: auto;\n    max-height: 500px;\n    border: 1px solid #01aefe;\n}\n.user-photo-module[data-v-646fd8d9] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/photo-loader.vue"],"names":[],"mappings":";AA4EA;IACA,kBAAA;IACA,kBAAA;AACA;AAEA;IACA,oBAAA;IACA,YAAA;IACA,YAAA;IACA,iBAAA;IACA,yBAAA;AACA;AAEA;IACA,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;AACA","sourcesContent":["<template>\n    <div class=\"mb-3\">\n        <input\n                type=\"file\"\n                id=\"files\"\n                @change=\"addPhoto\"\n                class=\"photo-input\"\n                placeholder=\"azaz\"\n                accept=\"image/jpeg,image/png,image/jpg\"\n        />\n\n        <div v-if=\"$route.params.id > 0\">\n            <v-btn class=\"btn\" @click=\"clickOnInput\">Добавить фотографию</v-btn>\n        </div>\n        <div v-if=\"loadedPhotos.length\" class=\"user-photo-module\">\n            <img\n                    class=\"user-photo\"\n                    :style=\"{ width: radius + 'px' }\"\n                    :src=\"photo\"\n                    @click=\"clickOnInput\"\n            />\n        </div>\n    </div>\n</template>\n\n<script>\n\n    export default {\n        name: 'photo-loader',\n        props: {\n            radius: {\n                type: Number,\n            },\n        },\n        components: {},\n        data() {\n            return {\n                photo: '',\n                loadedPhotos: [],\n                fileImg: null,\n            }\n        },\n        methods: {\n            returnFormData(val) {\n                this.$emit('save-photo', val)\n            },\n            updatePhoto(val) {\n                this.photo = val\n                this.showCropperDialog = false\n            },\n            clickOnInput() {\n                document.getElementById('files').files = (new DataTransfer()).files;\n                document.getElementById('files').click()\n\n            },\n            addPhoto(event) {\n                this.fileImg = event.target.files[0]\n                if (this.fileImg.size > 5024000) {\n                    this.$root.$children[0].snackbarText = 'Размер файла не может быть больше 5МБ'\n                    this.$root.$children[0].snackbar = true\n                    return;\n                }\n                if(this.loadedPhotos.length > 10) {\n                    this.$root.$children[0].snackbarText = 'Вы не можете загрузить больше 10 фотографий'\n                    this.$root.$children[0].snackbar = true\n                    return;\n                }\n                this.loadedPhotos.push(URL.createObjectURL(this.fileImg))\n                console.log(this.loadedPhotos)\n                this.fileImg = null;\n            },\n        },\n    }\n</script>\n\n<style scoped>\n    .photo-input {\n        position: absolute;\n        visibility: hidden;\n    }\n\n    .user-photo {\n        border-radius: 200px;\n        width: 300px;\n        height: auto;\n        max-height: 500px;\n        border: 1px solid #01aefe;\n    }\n\n    .user-photo-module {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PostEdit.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PostEdit.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.description .v-text-field__slot textarea {\n    display: none !important;\n}\n.description.v-text-field>.v-input__control>.v-input__slot:after ,\n.description.v-text-field>.v-input__control>.v-input__slot:before{\n    display: none !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/PostEdit.vue"],"names":[],"mappings":";AAiGA;IACA,wBAAA;AACA;AACA;;IAEA,wBAAA;AACA","sourcesContent":["<template>\n    <v-container\n            class=\"cover\">\n        <v-toolbar-title align=\"center\" justify=\"center\" class=\"mb-2\"\n        v-text=\"$route.params.id  > 0 ? 'Добавление новости' :  'Редактирование новости'\">\n        </v-toolbar-title>\n        <v-text-field\n            type=\"text\"\n            name=\"title\"\n            label=\"Заголовок\"\n            v-model=\"post.title\"\n            :error-messages=\"messages.title\"\n            >\n        </v-text-field>\n        <v-textarea\n                name=\"description\"\n                label=\"Описание\"\n                hint=\"Hint text\"\n                :value=\"' '\"\n                class=\"description \"\n                :error-messages=\"messages.description\"\n        ></v-textarea>\n        <editor\n                api-key=\"kapr0kh0v3vscnkppsxgig98vf6mgitaii8auw3p2pin1c5t\"\n                class=\"mt-2\"\n                v-model=\"post.description\"\n        >\n        </editor>\n        <v-spacer/>\n        <photo-loader v-if=\"$route\"></photo-loader>\n        {{post}}\n        <v-btn class=\"save-btn\"\n               color=\"success\"\n               fab\n               @click=\"create\"\n               :disabled=\"!(post.description && post.title)\"\n               dark>\n            <v-icon>mdi-plus</v-icon>\n        </v-btn>\n    </v-container>\n</template>\n\n<script>\n    import Editor from '@tinymce/tinymce-vue';\n    import PhotoLoader from '@/components/photo-loader'\n    export default {\n        name: \"PostAdd\",\n        components: {\n            Editor,\n            PhotoLoader\n        },\n        data: (vm) => {\n            return {\n                post: {\n                    id: vm.$route.params.id,\n                    title: '',\n                    description: '',\n                },\n                messages: {\n                    title: '',\n                    description: '',\n                }\n            }\n        },\n        mounted() {\n            let modelId = this.$route.params.id;\n            if (modelId != 0) {\n                window.axios.get('/post/'+ modelId).then((response) => {\n                    this.post = r.data.data;\n                }).catch((e) => {\n                    console.log(e);\n                    this.$root.$children[0].snackbarText = e?.response.error || 'Произошла ошибка';\n                    this.$root.$children[0].snackbar = true;\n                });\n            }\n        },\n        methods: {\n            create() {\n                window.axios.post('/post', this.post)\n                    .then((r) => {\n                        this.$root.$children[0].snackbarText = r.data.message;\n                        this.$root.$children[0].snackbar = true;\n                        this.$router.push({name: \"post\", params: {id: r.data.data.id}});\n                    }).catch((e) => {\n                        if (e.response && e.response.status === 422) {\n                            let errors = e.response.data.errors\n                            Object.keys(this.messages).forEach((k)=> {\n                                this.messages[k] = errors[k]?.[0] || '';\n                            });\n                        }\n                    })\n            }\n        }\n    }\n</script>\n\n<style>\n    .description .v-text-field__slot textarea {\n        display: none !important;\n    }\n    .description.v-text-field>.v-input__control>.v-input__slot:after ,\n    .description.v-text-field>.v-input__control>.v-input__slot:before{\n        display: none !important;\n    }\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/photo-loader.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/photo-loader.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _photo_loader_vue_vue_type_template_id_646fd8d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-loader.vue?vue&type=template&id=646fd8d9&scoped=true& */ "./resources/js/components/photo-loader.vue?vue&type=template&id=646fd8d9&scoped=true&");
/* harmony import */ var _photo_loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-loader.vue?vue&type=script&lang=js& */ "./resources/js/components/photo-loader.vue?vue&type=script&lang=js&");
/* harmony import */ var _photo_loader_vue_vue_type_style_index_0_id_646fd8d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo-loader.vue?vue&type=style&index=0&id=646fd8d9&scoped=true&lang=css& */ "./resources/js/components/photo-loader.vue?vue&type=style&index=0&id=646fd8d9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _photo_loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _photo_loader_vue_vue_type_template_id_646fd8d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _photo_loader_vue_vue_type_template_id_646fd8d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "646fd8d9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/photo-loader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/PostEdit.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/PostEdit.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PostEdit_vue_vue_type_template_id_4f647f5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostEdit.vue?vue&type=template&id=4f647f5a& */ "./resources/js/pages/PostEdit.vue?vue&type=template&id=4f647f5a&");
/* harmony import */ var _PostEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostEdit.vue?vue&type=script&lang=js& */ "./resources/js/pages/PostEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _PostEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostEdit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/PostEdit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _PostEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PostEdit_vue_vue_type_template_id_4f647f5a___WEBPACK_IMPORTED_MODULE_0__.render,
  _PostEdit_vue_vue_type_template_id_4f647f5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/PostEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/photo-loader.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/photo-loader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./photo-loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo-loader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/PostEdit.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/PostEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PostEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/photo-loader.vue?vue&type=template&id=646fd8d9&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/photo-loader.vue?vue&type=template&id=646fd8d9&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_loader_vue_vue_type_template_id_646fd8d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_loader_vue_vue_type_template_id_646fd8d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_loader_vue_vue_type_template_id_646fd8d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./photo-loader.vue?vue&type=template&id=646fd8d9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo-loader.vue?vue&type=template&id=646fd8d9&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/PostEdit.vue?vue&type=template&id=4f647f5a&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/PostEdit.vue?vue&type=template&id=4f647f5a& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostEdit_vue_vue_type_template_id_4f647f5a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostEdit_vue_vue_type_template_id_4f647f5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostEdit_vue_vue_type_template_id_4f647f5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostEdit.vue?vue&type=template&id=4f647f5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PostEdit.vue?vue&type=template&id=4f647f5a&");


/***/ }),

/***/ "./resources/js/components/photo-loader.vue?vue&type=style&index=0&id=646fd8d9&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/photo-loader.vue?vue&type=style&index=0&id=646fd8d9&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_loader_vue_vue_type_style_index_0_id_646fd8d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./photo-loader.vue?vue&type=style&index=0&id=646fd8d9&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo-loader.vue?vue&type=style&index=0&id=646fd8d9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_loader_vue_vue_type_style_index_0_id_646fd8d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_loader_vue_vue_type_style_index_0_id_646fd8d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_loader_vue_vue_type_style_index_0_id_646fd8d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_photo_loader_vue_vue_type_style_index_0_id_646fd8d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/pages/PostEdit.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/PostEdit.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostEdit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PostEdit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo-loader.vue?vue&type=template&id=646fd8d9&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo-loader.vue?vue&type=template&id=646fd8d9&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mb-3" }, [
    _c("input", {
      staticClass: "photo-input",
      attrs: {
        type: "file",
        id: "files",
        placeholder: "azaz",
        accept: "image/jpeg,image/png,image/jpg"
      },
      on: { change: _vm.addPhoto }
    }),
    _vm._v(" "),
    _vm.$route.params.id > 0
      ? _c(
          "div",
          [
            _c(
              "v-btn",
              { staticClass: "btn", on: { click: _vm.clickOnInput } },
              [_vm._v("Добавить фотографию")]
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.loadedPhotos.length
      ? _c("div", { staticClass: "user-photo-module" }, [
          _c("img", {
            staticClass: "user-photo",
            style: { width: _vm.radius + "px" },
            attrs: { src: _vm.photo },
            on: { click: _vm.clickOnInput }
          })
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PostEdit.vue?vue&type=template&id=4f647f5a&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PostEdit.vue?vue&type=template&id=4f647f5a& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { staticClass: "cover" },
    [
      _c("v-toolbar-title", {
        staticClass: "mb-2",
        attrs: { align: "center", justify: "center" },
        domProps: {
          textContent: _vm._s(
            _vm.$route.params.id > 0
              ? "Добавление новости"
              : "Редактирование новости"
          )
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          type: "text",
          name: "title",
          label: "Заголовок",
          "error-messages": _vm.messages.title
        },
        model: {
          value: _vm.post.title,
          callback: function($$v) {
            _vm.$set(_vm.post, "title", $$v)
          },
          expression: "post.title"
        }
      }),
      _vm._v(" "),
      _c("v-textarea", {
        staticClass: "description ",
        attrs: {
          name: "description",
          label: "Описание",
          hint: "Hint text",
          value: " ",
          "error-messages": _vm.messages.description
        }
      }),
      _vm._v(" "),
      _c("editor", {
        staticClass: "mt-2",
        attrs: {
          "api-key": "kapr0kh0v3vscnkppsxgig98vf6mgitaii8auw3p2pin1c5t"
        },
        model: {
          value: _vm.post.description,
          callback: function($$v) {
            _vm.$set(_vm.post, "description", $$v)
          },
          expression: "post.description"
        }
      }),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _vm.$route ? _c("photo-loader") : _vm._e(),
      _vm._v("\n    " + _vm._s(_vm.post) + "\n    "),
      _c(
        "v-btn",
        {
          staticClass: "save-btn",
          attrs: {
            color: "success",
            fab: "",
            disabled: !(_vm.post.description && _vm.post.title),
            dark: ""
          },
          on: { click: _vm.create }
        },
        [_c("v-icon", [_vm._v("mdi-plus")])],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo-loader.vue?vue&type=style&index=0&id=646fd8d9&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo-loader.vue?vue&type=style&index=0&id=646fd8d9&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./photo-loader.vue?vue&type=style&index=0&id=646fd8d9&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo-loader.vue?vue&type=style&index=0&id=646fd8d9&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6185dd2a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PostEdit.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PostEdit.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostEdit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PostEdit.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("19a4d546", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1NjcmlwdExvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1RpbnlNQ0UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGlueW1jZS90aW55bWNlLXZ1ZS9saWIvY2pzL21haW4vdHMvY29tcG9uZW50cy9FZGl0b3JQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlPzY2YTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RFZGl0LnZ1ZT84N2Y3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlPzI2ZWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RFZGl0LnZ1ZT84ZDQyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWU/MjE3NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdEVkaXQudnVlPzI2NzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZT83NTU3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qb3N0RWRpdC52dWU/MDg3YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELGNBQWMsbUJBQU8sQ0FBQyw2RUFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGFBQWEsRUFBRTtBQUMxRTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7Ozs7Ozs7Ozs7O0FDMURQO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsNkJBQTZCLGtEQUFrRCxxQkFBTSxFQUFFO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOzs7Ozs7Ozs7Ozs7QUNkTDtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDBDQUEwQyw0QkFBNEIsRUFBRSxvQ0FBb0M7QUFDN0ksa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELDJCQUEyQixFQUFFO0FBQ3ZGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsa0NBQWtDO0FBQ2hGLEtBQUs7QUFDTDtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRkFBK0Ysa0NBQWtDO0FBQ2pJO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLDBDQUEwQyw4Q0FBOEM7QUFDeEYseUJBQXlCOzs7Ozs7Ozs7Ozs7QUM3SVo7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELHFCQUFxQixtQkFBTyxDQUFDLDRGQUFpQjtBQUM5QyxnQkFBZ0IsbUJBQU8sQ0FBQyxrRkFBWTtBQUNwQyxjQUFjLG1CQUFPLENBQUMsOEVBQVU7QUFDaEMsd0JBQXdCLG1CQUFPLENBQUMsNEdBQW1CO0FBQ25EO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0w7QUFDQSxpQ0FBaUM7QUFDakMsd0NBQXdDLHFCQUFxQjtBQUM3RDtBQUNBLDRDQUE0QywyQ0FBMkMsRUFBRTtBQUN6RjtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywyQ0FBMkM7QUFDL0UsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7QUMzQmE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMscUdBQXFCO0FBQzVDLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaUJmO0FBQ0Esc0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQURBLEdBRkE7QUFPQSxnQkFQQTtBQVFBLE1BUkEsa0JBUUE7QUFDQTtBQUNBLGVBREE7QUFFQSxzQkFGQTtBQUdBO0FBSEE7QUFLQSxHQWRBO0FBZUE7QUFDQSxrQkFEQSwwQkFDQSxHQURBLEVBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxlQUpBLHVCQUlBLEdBSkEsRUFJQTtBQUNBO0FBQ0E7QUFDQSxLQVBBO0FBUUEsZ0JBUkEsMEJBUUE7QUFDQTtBQUNBO0FBRUEsS0FaQTtBQWFBLFlBYkEsb0JBYUEsS0FiQSxFQWFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUJBO0FBZkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNnQkE7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUNBLHFFQURBO0FBRUE7QUFGQSxHQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSxpQkFGQTtBQUdBO0FBSEEsT0FEQTtBQU1BO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBTkE7QUFXQSxHQWxCQTtBQW1CQSxTQW5CQSxxQkFtQkE7QUFBQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLFdBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQU5BO0FBT0E7QUFDQSxHQTlCQTtBQStCQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQSw0Q0FDQSxJQURBLENBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLE9BTEEsV0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0EsV0FGQTtBQUdBO0FBQ0EsT0FaQTtBQWFBO0FBZkE7QUEvQkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsMkVBQTJFLHlCQUF5Qix5QkFBeUIsR0FBRyxnQ0FBZ0MsMkJBQTJCLG1CQUFtQixtQkFBbUIsd0JBQXdCLGdDQUFnQyxHQUFHLHVDQUF1QyxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsR0FBRyxTQUFTLHVHQUF1RyxNQUFNLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLDZuQkFBNm5CLHVCQUF1QixnTEFBZ0wsaURBQWlELHVCQUF1Qiw4Q0FBOEMsWUFBWSx5QkFBeUIsbUJBQW1CLHNCQUFzQiw4R0FBOEcsV0FBVyxxQkFBcUIsbUNBQW1DLDhEQUE4RCxpQ0FBaUMsaUdBQWlHLCtCQUErQixzRkFBc0YsMkVBQTJFLGdDQUFnQywwR0FBMEcsOExBQThMLG1CQUFtQixxREFBcUQsb01BQW9NLG1CQUFtQixpS0FBaUssZUFBZSxZQUFZLFFBQVEsaURBQWlELDZCQUE2Qiw2QkFBNkIsT0FBTyxxQkFBcUIsK0JBQStCLHVCQUF1Qix1QkFBdUIsNEJBQTRCLG9DQUFvQyxPQUFPLDRCQUE0Qix3QkFBd0IsaUNBQWlDLGtDQUFrQyw4QkFBOEIsT0FBTywrQkFBK0I7QUFDeitHO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSx1RkFBdUYsK0JBQStCLEdBQUcsd0lBQXdJLCtCQUErQixHQUFHLFNBQVMsOEZBQThGLE1BQU0sV0FBVyxLQUFLLE1BQU0sV0FBVyxxa0NBQXFrQyxNQUFNLHVXQUF1VywrRUFBK0UsbURBQW1ELHlEQUF5RCwwQkFBMEIsc0JBQXNCLHlCQUF5Qix1SUFBdUksOEJBQThCLHlGQUF5RixlQUFlLFdBQVcsc0JBQXNCLGtEQUFrRCxpQ0FBaUMsMEVBQTBFLDhDQUE4QyxtQkFBbUIsZ0JBQWdCLHFDQUFxQyxxR0FBcUcsOERBQThELG1CQUFtQixFQUFFLGVBQWUsV0FBVyxxQkFBcUIsd0JBQXdCLDJGQUEyRixnRkFBZ0Ysa0VBQWtFLDZDQUE2Qyx5QkFBeUIsb0JBQW9CLEVBQUUsdUJBQXVCLGdCQUFnQix3RUFBd0UseUlBQXlJLDBFQUEwRSwrQkFBK0IsRUFBRSwyQkFBMkIsdUJBQXVCLGdCQUFnQixXQUFXLE9BQU8sdUVBQXVFLG1DQUFtQyxPQUFPLGdKQUFnSixtQ0FBbUMsT0FBTyw2QkFBNkI7QUFDLytIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGdFO0FBQ3ZDO0FBQ0w7QUFDM0QsQ0FBZ0c7OztBQUdoRztBQUM2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsZ0dBQU07QUFDUixFQUFFLHlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkN3RTtBQUMzQjtBQUNMO0FBQ3ZELENBQW9FOzs7QUFHcEU7QUFDNkY7QUFDN0YsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDdU0sQ0FBQyxpRUFBZSw4TUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeEIsQ0FBQyxpRUFBZSwwTUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F0TztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsV0FBVztBQUNYLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMEJBQTBCLDBCQUEwQixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DLG9CQUFvQixpQkFBaUI7QUFDckMsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVCQUF1QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUNBQXFDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsZUFBZTtBQUNmLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JGQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyw4dUJBQXVYO0FBQzdZO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwySkFBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7OztBQ1hmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGlyQkFBMlY7QUFDalg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJKQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfUG9zdEVkaXRfdnVlMDA2NDBjNWI4ZDBiZGYwNTc3MTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBVdGlsc18xID0gcmVxdWlyZShcIi4vVXRpbHNcIik7XG52YXIgY3JlYXRlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGlzdGVuZXJzOiBbXSxcbiAgICAgICAgc2NyaXB0SWQ6IFV0aWxzXzEudXVpZCgndGlueS1zY3JpcHQnKSxcbiAgICAgICAgc2NyaXB0TG9hZGVkOiBmYWxzZVxuICAgIH07XG59O1xudmFyIENyZWF0ZVNjcmlwdExvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdGUgPSBjcmVhdGVTdGF0ZSgpO1xuICAgIHZhciBpbmplY3RTY3JpcHRUYWcgPSBmdW5jdGlvbiAoc2NyaXB0SWQsIGRvYywgdXJsLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2NyaXB0VGFnID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHRUYWcucmVmZXJyZXJQb2xpY3kgPSAnb3JpZ2luJztcbiAgICAgICAgc2NyaXB0VGFnLnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdFRhZy5pZCA9IHNjcmlwdElkO1xuICAgICAgICBzY3JpcHRUYWcuc3JjID0gdXJsO1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNjcmlwdFRhZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgaGFuZGxlcik7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9O1xuICAgICAgICBzY3JpcHRUYWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZXIpO1xuICAgICAgICBpZiAoZG9jLmhlYWQpIHtcbiAgICAgICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdFRhZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBsb2FkID0gZnVuY3Rpb24gKGRvYywgdXJsLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoc3RhdGUuc2NyaXB0TG9hZGVkKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKCFkb2MuZ2V0RWxlbWVudEJ5SWQoc3RhdGUuc2NyaXB0SWQpKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U2NyaXB0VGFnKHN0YXRlLnNjcmlwdElkLCBkb2MsIHVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zY3JpcHRMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBPbmx5IHRvIGJlIHVzZWQgYnkgdGVzdHMuXG4gICAgdmFyIHJlaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RhdGUgPSBjcmVhdGVTdGF0ZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZDogbG9hZCxcbiAgICAgICAgcmVpbml0aWFsaXplOiByZWluaXRpYWxpemVcbiAgICB9O1xufTtcbnZhciBTY3JpcHRMb2FkZXIgPSBDcmVhdGVTY3JpcHRMb2FkZXIoKTtcbmV4cG9ydHMuU2NyaXB0TG9hZGVyID0gU2NyaXB0TG9hZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ2V0R2xvYmFsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKTsgfTtcbnZhciBnZXRUaW55bWNlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnbG9iYWwgPSBnZXRHbG9iYWwoKTtcbiAgICByZXR1cm4gZ2xvYmFsICYmIGdsb2JhbC50aW55bWNlID8gZ2xvYmFsLnRpbnltY2UgOiBudWxsO1xufTtcbmV4cG9ydHMuZ2V0VGlueW1jZSA9IGdldFRpbnltY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB2YWxpZEV2ZW50cyA9IFtcbiAgICAnb25BY3RpdmF0ZScsXG4gICAgJ29uQWRkVW5kbycsXG4gICAgJ29uQmVmb3JlQWRkVW5kbycsXG4gICAgJ29uQmVmb3JlRXhlY0NvbW1hbmQnLFxuICAgICdvbkJlZm9yZUdldENvbnRlbnQnLFxuICAgICdvbkJlZm9yZVJlbmRlclVJJyxcbiAgICAnb25CZWZvcmVTZXRDb250ZW50JyxcbiAgICAnb25CZWZvcmVQYXN0ZScsXG4gICAgJ29uQmx1cicsXG4gICAgJ29uQ2hhbmdlJyxcbiAgICAnb25DbGVhclVuZG9zJyxcbiAgICAnb25DbGljaycsXG4gICAgJ29uQ29udGV4dE1lbnUnLFxuICAgICdvbkNvcHknLFxuICAgICdvbkN1dCcsXG4gICAgJ29uRGJsY2xpY2snLFxuICAgICdvbkRlYWN0aXZhdGUnLFxuICAgICdvbkRpcnR5JyxcbiAgICAnb25EcmFnJyxcbiAgICAnb25EcmFnRHJvcCcsXG4gICAgJ29uRHJhZ0VuZCcsXG4gICAgJ29uRHJhZ0dlc3R1cmUnLFxuICAgICdvbkRyYWdPdmVyJyxcbiAgICAnb25Ecm9wJyxcbiAgICAnb25FeGVjQ29tbWFuZCcsXG4gICAgJ29uRm9jdXMnLFxuICAgICdvbkZvY3VzSW4nLFxuICAgICdvbkZvY3VzT3V0JyxcbiAgICAnb25HZXRDb250ZW50JyxcbiAgICAnb25IaWRlJyxcbiAgICAnb25Jbml0JyxcbiAgICAnb25LZXlEb3duJyxcbiAgICAnb25LZXlQcmVzcycsXG4gICAgJ29uS2V5VXAnLFxuICAgICdvbkxvYWRDb250ZW50JyxcbiAgICAnb25Nb3VzZURvd24nLFxuICAgICdvbk1vdXNlRW50ZXInLFxuICAgICdvbk1vdXNlTGVhdmUnLFxuICAgICdvbk1vdXNlTW92ZScsXG4gICAgJ29uTW91c2VPdXQnLFxuICAgICdvbk1vdXNlT3ZlcicsXG4gICAgJ29uTW91c2VVcCcsXG4gICAgJ29uTm9kZUNoYW5nZScsXG4gICAgJ29uT2JqZWN0UmVzaXplU3RhcnQnLFxuICAgICdvbk9iamVjdFJlc2l6ZWQnLFxuICAgICdvbk9iamVjdFNlbGVjdGVkJyxcbiAgICAnb25QYXN0ZScsXG4gICAgJ29uUG9zdFByb2Nlc3MnLFxuICAgICdvblBvc3RSZW5kZXInLFxuICAgICdvblByZVByb2Nlc3MnLFxuICAgICdvblByb2dyZXNzU3RhdGUnLFxuICAgICdvblJlZG8nLFxuICAgICdvblJlbW92ZScsXG4gICAgJ29uUmVzZXQnLFxuICAgICdvblNhdmVDb250ZW50JyxcbiAgICAnb25TZWxlY3Rpb25DaGFuZ2UnLFxuICAgICdvblNldEF0dHJpYicsXG4gICAgJ29uU2V0Q29udGVudCcsXG4gICAgJ29uU2hvdycsXG4gICAgJ29uU3VibWl0JyxcbiAgICAnb25VbmRvJyxcbiAgICAnb25WaXN1YWxBaWQnXG5dO1xudmFyIGlzVmFsaWRLZXkgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB2YWxpZEV2ZW50cy5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBldmVudC50b0xvd2VyQ2FzZSgpOyB9KS5pbmRleE9mKGtleS50b0xvd2VyQ2FzZSgpKSAhPT0gLTE7IH07XG5leHBvcnRzLmlzVmFsaWRLZXkgPSBpc1ZhbGlkS2V5O1xudmFyIGJpbmRIYW5kbGVycyA9IGZ1bmN0aW9uIChpbml0RXZlbnQsIGxpc3RlbmVycywgZWRpdG9yKSB7XG4gICAgT2JqZWN0LmtleXMobGlzdGVuZXJzKVxuICAgICAgICAuZmlsdGVyKGlzVmFsaWRLZXkpXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBsaXN0ZW5lcnNba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnb25Jbml0Jykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoaW5pdEV2ZW50LCBlZGl0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWRpdG9yLm9uKGtleS5zdWJzdHJpbmcoMiksIGZ1bmN0aW9uIChlKSB7IHJldHVybiBoYW5kbGVyKGUsIGVkaXRvcik7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0cy5iaW5kSGFuZGxlcnMgPSBiaW5kSGFuZGxlcnM7XG52YXIgYmluZE1vZGVsSGFuZGxlcnMgPSBmdW5jdGlvbiAoY3R4LCBlZGl0b3IpIHtcbiAgICB2YXIgbW9kZWxFdmVudHMgPSBjdHguJHByb3BzLm1vZGVsRXZlbnRzID8gY3R4LiRwcm9wcy5tb2RlbEV2ZW50cyA6IG51bGw7XG4gICAgdmFyIG5vcm1hbGl6ZWRFdmVudHMgPSBBcnJheS5pc0FycmF5KG1vZGVsRXZlbnRzKSA/IG1vZGVsRXZlbnRzLmpvaW4oJyAnKSA6IG1vZGVsRXZlbnRzO1xuICAgIGVkaXRvci5vbihub3JtYWxpemVkRXZlbnRzID8gbm9ybWFsaXplZEV2ZW50cyA6ICdjaGFuZ2UgaW5wdXQgdW5kbyByZWRvJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjdHguJGVtaXQoJ2lucHV0JywgZWRpdG9yLmdldENvbnRlbnQoeyBmb3JtYXQ6IGN0eC4kcHJvcHMub3V0cHV0Rm9ybWF0IH0pKTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmJpbmRNb2RlbEhhbmRsZXJzID0gYmluZE1vZGVsSGFuZGxlcnM7XG52YXIgaW5pdEVkaXRvciA9IGZ1bmN0aW9uIChpbml0RXZlbnQsIGN0eCwgZWRpdG9yKSB7XG4gICAgdmFyIHZhbHVlID0gY3R4LiRwcm9wcy52YWx1ZSA/IGN0eC4kcHJvcHMudmFsdWUgOiAnJztcbiAgICB2YXIgaW5pdGlhbFZhbHVlID0gY3R4LiRwcm9wcy5pbml0aWFsVmFsdWUgPyBjdHguJHByb3BzLmluaXRpYWxWYWx1ZSA6ICcnO1xuICAgIGVkaXRvci5zZXRDb250ZW50KHZhbHVlIHx8IChjdHguaW5pdGlhbGl6ZWQgPyBjdHguY2FjaGUgOiBpbml0aWFsVmFsdWUpKTtcbiAgICAvLyBBbHdheXMgYmluZCB0aGUgdmFsdWUgbGlzdGVuZXIgaW4gY2FzZSB1c2VycyB1c2UgOnZhbHVlIGluc3RlYWQgb2Ygdi1tb2RlbFxuICAgIGN0eC4kd2F0Y2goJ3ZhbHVlJywgZnVuY3Rpb24gKHZhbCwgcHJldlZhbCkge1xuICAgICAgICBpZiAoZWRpdG9yICYmIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZhbCAhPT0gcHJldlZhbCAmJiB2YWwgIT09IGVkaXRvci5nZXRDb250ZW50KHsgZm9ybWF0OiBjdHguJHByb3BzLm91dHB1dEZvcm1hdCB9KSkge1xuICAgICAgICAgICAgZWRpdG9yLnNldENvbnRlbnQodmFsKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGNoZWNrcyBpZiB0aGUgdi1tb2RlbCBzaG9ydGhhbmQgaXMgdXNlZCAod2hpY2ggc2V0cyBhbiB2LW9uOmlucHV0IGxpc3RlbmVyKSBhbmQgdGhlbiBiaW5kcyBlaXRoZXJcbiAgICAvLyBzcGVjaWZpZWQgdGhlIGV2ZW50cyBvciBkZWZhdWx0cyB0byBcImNoYW5nZSBrZXl1cFwiIGV2ZW50IGFuZCBlbWl0cyB0aGUgZWRpdG9yIGNvbnRlbnQgb24gdGhhdCBldmVudFxuICAgIGlmIChjdHguJGxpc3RlbmVycy5pbnB1dCkge1xuICAgICAgICBiaW5kTW9kZWxIYW5kbGVycyhjdHgsIGVkaXRvcik7XG4gICAgfVxuICAgIGJpbmRIYW5kbGVycyhpbml0RXZlbnQsIGN0eC4kbGlzdGVuZXJzLCBlZGl0b3IpO1xuICAgIGN0eC5pbml0aWFsaXplZCA9IHRydWU7XG59O1xuZXhwb3J0cy5pbml0RWRpdG9yID0gaW5pdEVkaXRvcjtcbnZhciB1bmlxdWUgPSAwO1xudmFyIHV1aWQgPSBmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKTtcbiAgICB1bmlxdWUrKztcbiAgICByZXR1cm4gcHJlZml4ICsgJ18nICsgcmFuZG9tICsgdW5pcXVlICsgU3RyaW5nKHRpbWUpO1xufTtcbmV4cG9ydHMudXVpZCA9IHV1aWQ7XG52YXIgaXNUZXh0YXJlYSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYSc7XG59O1xuZXhwb3J0cy5pc1RleHRhcmVhID0gaXNUZXh0YXJlYTtcbnZhciBub3JtYWxpemVQbHVnaW5BcnJheSA9IGZ1bmN0aW9uIChwbHVnaW5zKSB7XG4gICAgaWYgKHR5cGVvZiBwbHVnaW5zID09PSAndW5kZWZpbmVkJyB8fCBwbHVnaW5zID09PSAnJykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBsdWdpbnMpID8gcGx1Z2lucyA6IHBsdWdpbnMuc3BsaXQoJyAnKTtcbn07XG52YXIgbWVyZ2VQbHVnaW5zID0gZnVuY3Rpb24gKGluaXRQbHVnaW5zLCBpbnB1dFBsdWdpbnMpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplUGx1Z2luQXJyYXkoaW5pdFBsdWdpbnMpLmNvbmNhdChub3JtYWxpemVQbHVnaW5BcnJheShpbnB1dFBsdWdpbnMpKTtcbn07XG5leHBvcnRzLm1lcmdlUGx1Z2lucyA9IG1lcmdlUGx1Z2lucztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDsgfTtcbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTY3JpcHRMb2FkZXJfMSA9IHJlcXVpcmUoXCIuLi9TY3JpcHRMb2FkZXJcIik7XG52YXIgVGlueU1DRV8xID0gcmVxdWlyZShcIi4uL1RpbnlNQ0VcIik7XG52YXIgVXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9VdGlsc1wiKTtcbnZhciBFZGl0b3JQcm9wVHlwZXNfMSA9IHJlcXVpcmUoXCIuL0VkaXRvclByb3BUeXBlc1wiKTtcbnZhciByZW5kZXJJbmxpbmUgPSBmdW5jdGlvbiAoaCwgaWQsIHRhZ05hbWUpIHtcbiAgICByZXR1cm4gaCh0YWdOYW1lID8gdGFnTmFtZSA6ICdkaXYnLCB7XG4gICAgICAgIGF0dHJzOiB7IGlkOiBpZCB9XG4gICAgfSk7XG59O1xudmFyIHJlbmRlcklmcmFtZSA9IGZ1bmN0aW9uIChoLCBpZCkge1xuICAgIHJldHVybiBoKCd0ZXh0YXJlYScsIHtcbiAgICAgICAgYXR0cnM6IHsgaWQ6IGlkIH0sXG4gICAgICAgIHN0eWxlOiB7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH1cbiAgICB9KTtcbn07XG52YXIgaW5pdGlhbGlzZSA9IGZ1bmN0aW9uIChjdHgpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmluYWxJbml0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGN0eC4kcHJvcHMuaW5pdCksIHsgcmVhZG9ubHk6IGN0eC4kcHJvcHMuZGlzYWJsZWQsIHNlbGVjdG9yOiBcIiNcIiArIGN0eC5lbGVtZW50SWQsIHBsdWdpbnM6IFV0aWxzXzEubWVyZ2VQbHVnaW5zKGN0eC4kcHJvcHMuaW5pdCAmJiBjdHguJHByb3BzLmluaXQucGx1Z2lucywgY3R4LiRwcm9wcy5wbHVnaW5zKSwgdG9vbGJhcjogY3R4LiRwcm9wcy50b29sYmFyIHx8IChjdHguJHByb3BzLmluaXQgJiYgY3R4LiRwcm9wcy5pbml0LnRvb2xiYXIpLCBpbmxpbmU6IGN0eC5pbmxpbmVFZGl0b3IsIHNldHVwOiBmdW5jdGlvbiAoZWRpdG9yKSB7XG4gICAgICAgICAgICBjdHguZWRpdG9yID0gZWRpdG9yO1xuICAgICAgICAgICAgZWRpdG9yLm9uKCdpbml0JywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIFV0aWxzXzEuaW5pdEVkaXRvcihlLCBjdHgsIGVkaXRvcik7IH0pO1xuICAgICAgICAgICAgaWYgKGN0eC4kcHJvcHMuaW5pdCAmJiB0eXBlb2YgY3R4LiRwcm9wcy5pbml0LnNldHVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY3R4LiRwcm9wcy5pbml0LnNldHVwKGVkaXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gfSk7XG4gICAgaWYgKFV0aWxzXzEuaXNUZXh0YXJlYShjdHguZWxlbWVudCkpIHtcbiAgICAgICAgY3R4LmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuICAgICAgICBjdHguZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfVxuICAgIFRpbnlNQ0VfMS5nZXRUaW55bWNlKCkuaW5pdChmaW5hbEluaXQpO1xufTsgfTtcbmV4cG9ydHMuRWRpdG9yID0ge1xuICAgIHByb3BzOiBFZGl0b3JQcm9wVHlwZXNfMS5lZGl0b3JQcm9wcyxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gdGhpcy4kcHJvcHMuaWQgfHwgVXRpbHNfMS51dWlkKCd0aW55LXZ1ZScpO1xuICAgICAgICB0aGlzLmlubGluZUVkaXRvciA9ICh0aGlzLiRwcm9wcy5pbml0ICYmIHRoaXMuJHByb3BzLmluaXQuaW5saW5lKSB8fCB0aGlzLiRwcm9wcy5pbmxpbmU7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGRpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5zZXRNb2RlKHRoaXMuZGlzYWJsZWQgPyAncmVhZG9ubHknIDogJ2Rlc2lnbicpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuJGVsO1xuICAgICAgICBpZiAoVGlueU1DRV8xLmdldFRpbnltY2UoKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaW5pdGlhbGlzZSh0aGlzKSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudCkge1xuICAgICAgICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLiRwcm9wcy5jbG91ZENoYW5uZWwgPyB0aGlzLiRwcm9wcy5jbG91ZENoYW5uZWwgOiAnNSc7XG4gICAgICAgICAgICB2YXIgYXBpS2V5ID0gdGhpcy4kcHJvcHMuYXBpS2V5ID8gdGhpcy4kcHJvcHMuYXBpS2V5IDogJ25vLWFwaS1rZXknO1xuICAgICAgICAgICAgdmFyIHNjcmlwdFNyYyA9IFV0aWxzXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy4kcHJvcHMudGlueW1jZVNjcmlwdFNyYykgP1xuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4udGlueS5jbG91ZC8xL1wiICsgYXBpS2V5ICsgXCIvdGlueW1jZS9cIiArIGNoYW5uZWwgKyBcIi90aW55bWNlLm1pbi5qc1wiIDpcbiAgICAgICAgICAgICAgICB0aGlzLiRwcm9wcy50aW55bWNlU2NyaXB0U3JjO1xuICAgICAgICAgICAgU2NyaXB0TG9hZGVyXzEuU2NyaXB0TG9hZGVyLmxvYWQodGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQsIHNjcmlwdFNyYywgaW5pdGlhbGlzZSh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKFRpbnlNQ0VfMS5nZXRUaW55bWNlKCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIFRpbnlNQ0VfMS5nZXRUaW55bWNlKCkucmVtb3ZlKHRoaXMuZWRpdG9yKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGVhY3RpdmF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXRoaXMuaW5saW5lRWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlID0gdGhpcy5lZGl0b3IuZ2V0Q29udGVudCgpO1xuICAgICAgICAgICAgKF9hID0gVGlueU1DRV8xLmdldFRpbnltY2UoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZSh0aGlzLmVkaXRvcik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFjdGl2YXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5saW5lRWRpdG9yICYmIHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIGluaXRpYWxpc2UodGhpcykoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmxpbmVFZGl0b3IgPyByZW5kZXJJbmxpbmUoaCwgdGhpcy5lbGVtZW50SWQsIHRoaXMuJHByb3BzLnRhZ05hbWUpIDogcmVuZGVySWZyYW1lKGgsIHRoaXMuZWxlbWVudElkKTtcbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmVkaXRvclByb3BzID0ge1xuICAgIGFwaUtleTogU3RyaW5nLFxuICAgIGNsb3VkQ2hhbm5lbDogU3RyaW5nLFxuICAgIGlkOiBTdHJpbmcsXG4gICAgaW5pdDogT2JqZWN0LFxuICAgIGluaXRpYWxWYWx1ZTogU3RyaW5nLFxuICAgIGlubGluZTogQm9vbGVhbixcbiAgICBtb2RlbEV2ZW50czogW1N0cmluZywgQXJyYXldLFxuICAgIHBsdWdpbnM6IFtTdHJpbmcsIEFycmF5XSxcbiAgICB0YWdOYW1lOiBTdHJpbmcsXG4gICAgdG9vbGJhcjogW1N0cmluZywgQXJyYXldLFxuICAgIHZhbHVlOiBTdHJpbmcsXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgdGlueW1jZVNjcmlwdFNyYzogU3RyaW5nLFxuICAgIG91dHB1dEZvcm1hdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuIHByb3AgPT09ICdodG1sJyB8fCBwcm9wID09PSAndGV4dCc7IH1cbiAgICB9LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEVkaXRvcl8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9FZGl0b3JcIik7XG5leHBvcnRzLmRlZmF1bHQgPSBFZGl0b3JfMS5FZGl0b3I7XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIGlkPVwiZmlsZXNcIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJhZGRQaG90b1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwaG90by1pbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhemF6XCJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9qcGVnLGltYWdlL3BuZyxpbWFnZS9qcGdcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgdi1pZj1cIiRyb3V0ZS5wYXJhbXMuaWQgPiAwXCI+XG4gICAgICAgICAgICA8di1idG4gY2xhc3M9XCJidG5cIiBAY2xpY2s9XCJjbGlja09uSW5wdXRcIj7QlNC+0LHQsNCy0LjRgtGMINGE0L7RgtC+0LPRgNCw0YTQuNGOPC92LWJ0bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1pZj1cImxvYWRlZFBob3Rvcy5sZW5ndGhcIiBjbGFzcz1cInVzZXItcGhvdG8tbW9kdWxlXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidXNlci1waG90b1wiXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInsgd2lkdGg6IHJhZGl1cyArICdweCcgfVwiXG4gICAgICAgICAgICAgICAgICAgIDpzcmM9XCJwaG90b1wiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNsaWNrT25JbnB1dFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdwaG90by1sb2FkZXInLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcmFkaXVzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBob3RvOiAnJyxcbiAgICAgICAgICAgICAgICBsb2FkZWRQaG90b3M6IFtdLFxuICAgICAgICAgICAgICAgIGZpbGVJbWc6IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHJldHVybkZvcm1EYXRhKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NhdmUtcGhvdG8nLCB2YWwpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlUGhvdG8odmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5waG90byA9IHZhbFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Nyb3BwZXJEaWFsb2cgPSBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWNrT25JbnB1dCgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZXMnKS5maWxlcyA9IChuZXcgRGF0YVRyYW5zZmVyKCkpLmZpbGVzO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmNsaWNrKClcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZFBob3RvKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlSW1nID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZUltZy5zaXplID4gNTAyNDAwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0KDQsNC30LzQtdGAINGE0LDQudC70LAg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINCx0L7Qu9GM0YjQtSA10JzQkSdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5sb2FkZWRQaG90b3MubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gJ9CS0Ysg0L3QtSDQvNC+0LbQtdGC0LUg0LfQsNCz0YDRg9C30LjRgtGMINCx0L7Qu9GM0YjQtSAxMCDRhNC+0YLQvtCz0YDQsNGE0LjQuSdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRQaG90b3MucHVzaChVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZUltZykpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2FkZWRQaG90b3MpXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlSW1nID0gbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLnBob3RvLWlucHV0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLnVzZXItcGhvdG8ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDFhZWZlO1xuICAgIH1cblxuICAgIC51c2VyLXBob3RvLW1vZHVsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPHYtY29udGFpbmVyXG4gICAgICAgICAgICBjbGFzcz1cImNvdmVyXCI+XG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgdi10ZXh0PVwiJHJvdXRlLnBhcmFtcy5pZCAgPiAwID8gJ9CU0L7QsdCw0LLQu9C10L3QuNC1INC90L7QstC+0YHRgtC4JyA6ICAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQvdC+0LLQvtGB0YLQuCdcIj5cbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICBsYWJlbD1cItCX0LDQs9C+0LvQvtCy0L7QulwiXG4gICAgICAgICAgICB2LW1vZGVsPVwicG9zdC50aXRsZVwiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy50aXRsZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgIDwvdi10ZXh0LWZpZWxkPlxuICAgICAgICA8di10ZXh0YXJlYVxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQntC/0LjRgdCw0L3QuNC1XCJcbiAgICAgICAgICAgICAgICBoaW50PVwiSGludCB0ZXh0XCJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCInICdcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZGVzY3JpcHRpb24gXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5kZXNjcmlwdGlvblwiXG4gICAgICAgID48L3YtdGV4dGFyZWE+XG4gICAgICAgIDxlZGl0b3JcbiAgICAgICAgICAgICAgICBhcGkta2V5PVwia2FwcjBraDB2M3ZzY25rcHBzeGdpZzk4dmY2bWdpdGFpaThhdXczcDJwaW4xYzV0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm10LTJcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwb3N0LmRlc2NyaXB0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICA8L2VkaXRvcj5cbiAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgICAgPHBob3RvLWxvYWRlciB2LWlmPVwiJHJvdXRlXCI+PC9waG90by1sb2FkZXI+XG4gICAgICAgIHt7cG9zdH19XG4gICAgICAgIDx2LWJ0biBjbGFzcz1cInNhdmUtYnRuXCJcbiAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgIEBjbGljaz1cImNyZWF0ZVwiXG4gICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhKHBvc3QuZGVzY3JpcHRpb24gJiYgcG9zdC50aXRsZSlcIlxuICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRWRpdG9yIGZyb20gJ0B0aW55bWNlL3RpbnltY2UtdnVlJztcbiAgICBpbXBvcnQgUGhvdG9Mb2FkZXIgZnJvbSAnQC9jb21wb25lbnRzL3Bob3RvLWxvYWRlcidcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiUG9zdEFkZFwiLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBFZGl0b3IsXG4gICAgICAgICAgICBQaG90b0xvYWRlclxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcG9zdDoge1xuICAgICAgICAgICAgICAgICAgICBpZDogdm0uJHJvdXRlLnBhcmFtcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWxJZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcbiAgICAgICAgICAgIGlmIChtb2RlbElkICE9IDApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvcG9zdC8nKyBtb2RlbElkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QgPSByLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gZT8ucmVzcG9uc2UuZXJyb3IgfHwgJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL3Bvc3QnLCB0aGlzLnBvc3QpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSByLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiBcInBvc3RcIiwgcGFyYW1zOiB7aWQ6IHIuZGF0YS5kYXRhLmlkfX0pO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgLmRlc2NyaXB0aW9uIC52LXRleHQtZmllbGRfX3Nsb3QgdGV4dGFyZWEge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YWZ0ZXIgLFxuICAgIC5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YmVmb3Jle1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuPC9zdHlsZT4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5waG90by1pbnB1dFtkYXRhLXYtNjQ2ZmQ4ZDldIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi51c2VyLXBob3RvW2RhdGEtdi02NDZmZDhkOV0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDFhZWZlO1xcbn1cXG4udXNlci1waG90by1tb2R1bGVbZGF0YS12LTY0NmZkOGQ5XSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE0RUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0FBQ0E7QUFFQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0FBQ0E7QUFFQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1iLTNcXFwiPlxcbiAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcImZpbGVcXFwiXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJmaWxlc1xcXCJcXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cXFwiYWRkUGhvdG9cXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJwaG90by1pbnB1dFxcXCJcXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcImF6YXpcXFwiXFxuICAgICAgICAgICAgICAgIGFjY2VwdD1cXFwiaW1hZ2UvanBlZyxpbWFnZS9wbmcsaW1hZ2UvanBnXFxcIlxcbiAgICAgICAgLz5cXG5cXG4gICAgICAgIDxkaXYgdi1pZj1cXFwiJHJvdXRlLnBhcmFtcy5pZCA+IDBcXFwiPlxcbiAgICAgICAgICAgIDx2LWJ0biBjbGFzcz1cXFwiYnRuXFxcIiBAY2xpY2s9XFxcImNsaWNrT25JbnB1dFxcXCI+0JTQvtCx0LDQstC40YLRjCDRhNC+0YLQvtCz0YDQsNGE0LjRjjwvdi1idG4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgdi1pZj1cXFwibG9hZGVkUGhvdG9zLmxlbmd0aFxcXCIgY2xhc3M9XFxcInVzZXItcGhvdG8tbW9kdWxlXFxcIj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidXNlci1waG90b1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwieyB3aWR0aDogcmFkaXVzICsgJ3B4JyB9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOnNyYz1cXFwicGhvdG9cXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImNsaWNrT25JbnB1dFxcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgbmFtZTogJ3Bob3RvLWxvYWRlcicsXFxuICAgICAgICBwcm9wczoge1xcbiAgICAgICAgICAgIHJhZGl1czoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcXG4gICAgICAgIGRhdGEoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgcGhvdG86ICcnLFxcbiAgICAgICAgICAgICAgICBsb2FkZWRQaG90b3M6IFtdLFxcbiAgICAgICAgICAgICAgICBmaWxlSW1nOiBudWxsLFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgcmV0dXJuRm9ybURhdGEodmFsKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NhdmUtcGhvdG8nLCB2YWwpXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB1cGRhdGVQaG90byh2YWwpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5waG90byA9IHZhbFxcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDcm9wcGVyRGlhbG9nID0gZmFsc2VcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGNsaWNrT25JbnB1dCgpIHtcXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVzJykuZmlsZXMgPSAobmV3IERhdGFUcmFuc2ZlcigpKS5maWxlcztcXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVzJykuY2xpY2soKVxcblxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgYWRkUGhvdG8oZXZlbnQpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlSW1nID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVJbWcuc2l6ZSA+IDUwMjQwMDApIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9ICfQoNCw0LfQvNC10YAg0YTQsNC50LvQsCDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0LHQvtC70YzRiNC1IDXQnNCRJ1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgaWYodGhpcy5sb2FkZWRQaG90b3MubGVuZ3RoID4gMTApIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9ICfQktGLINC90LUg0LzQvtC20LXRgtC1INC30LDQs9GA0YPQt9C40YLRjCDQsdC+0LvRjNGI0LUgMTAg0YTQvtGC0L7Qs9GA0LDRhNC40LknXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWVcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZFBob3Rvcy5wdXNoKFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5maWxlSW1nKSlcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2FkZWRQaG90b3MpXFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IG51bGw7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgIH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbiAgICAucGhvdG8taW5wdXQge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIC51c2VyLXBob3RvIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDFhZWZlO1xcbiAgICB9XFxuXFxuICAgIC51c2VyLXBob3RvLW1vZHVsZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRlc2NyaXB0aW9uIC52LXRleHQtZmllbGRfX3Nsb3QgdGV4dGFyZWEge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YWZ0ZXIgLFxcbi5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YmVmb3Jle1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qb3N0RWRpdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWlHQTtJQUNBLHdCQUFBO0FBQ0E7QUFDQTs7SUFFQSx3QkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPHYtY29udGFpbmVyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImNvdmVyXFxcIj5cXG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XFxcImNlbnRlclxcXCIganVzdGlmeT1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwibWItMlxcXCJcXG4gICAgICAgIHYtdGV4dD1cXFwiJHJvdXRlLnBhcmFtcy5pZCAgPiAwID8gJ9CU0L7QsdCw0LLQu9C10L3QuNC1INC90L7QstC+0YHRgtC4JyA6ICAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQvdC+0LLQvtGB0YLQuCdcXFwiPlxcbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XFxuICAgICAgICA8di10ZXh0LWZpZWxkXFxuICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICBuYW1lPVxcXCJ0aXRsZVxcXCJcXG4gICAgICAgICAgICBsYWJlbD1cXFwi0JfQsNCz0L7Qu9C+0LLQvtC6XFxcIlxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcInBvc3QudGl0bGVcXFwiXFxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVxcXCJtZXNzYWdlcy50aXRsZVxcXCJcXG4gICAgICAgICAgICA+XFxuICAgICAgICA8L3YtdGV4dC1maWVsZD5cXG4gICAgICAgIDx2LXRleHRhcmVhXFxuICAgICAgICAgICAgICAgIG5hbWU9XFxcImRlc2NyaXB0aW9uXFxcIlxcbiAgICAgICAgICAgICAgICBsYWJlbD1cXFwi0J7Qv9C40YHQsNC90LjQtVxcXCJcXG4gICAgICAgICAgICAgICAgaGludD1cXFwiSGludCB0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICA6dmFsdWU9XFxcIicgJ1xcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImRlc2NyaXB0aW9uIFxcXCJcXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVxcXCJtZXNzYWdlcy5kZXNjcmlwdGlvblxcXCJcXG4gICAgICAgID48L3YtdGV4dGFyZWE+XFxuICAgICAgICA8ZWRpdG9yXFxuICAgICAgICAgICAgICAgIGFwaS1rZXk9XFxcImthcHIwa2gwdjN2c2Nua3Bwc3hnaWc5OHZmNm1naXRhaWk4YXV3M3AycGluMWM1dFxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcIm10LTJcXFwiXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInBvc3QuZGVzY3JpcHRpb25cXFwiXFxuICAgICAgICA+XFxuICAgICAgICA8L2VkaXRvcj5cXG4gICAgICAgIDx2LXNwYWNlci8+XFxuICAgICAgICA8cGhvdG8tbG9hZGVyIHYtaWY9XFxcIiRyb3V0ZVxcXCI+PC9waG90by1sb2FkZXI+XFxuICAgICAgICB7e3Bvc3R9fVxcbiAgICAgICAgPHYtYnRuIGNsYXNzPVxcXCJzYXZlLWJ0blxcXCJcXG4gICAgICAgICAgICAgICBjb2xvcj1cXFwic3VjY2Vzc1xcXCJcXG4gICAgICAgICAgICAgICBmYWJcXG4gICAgICAgICAgICAgICBAY2xpY2s9XFxcImNyZWF0ZVxcXCJcXG4gICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcIiEocG9zdC5kZXNjcmlwdGlvbiAmJiBwb3N0LnRpdGxlKVxcXCJcXG4gICAgICAgICAgICAgICBkYXJrPlxcbiAgICAgICAgICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cXG4gICAgICAgIDwvdi1idG4+XFxuICAgIDwvdi1jb250YWluZXI+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgICBpbXBvcnQgRWRpdG9yIGZyb20gJ0B0aW55bWNlL3RpbnltY2UtdnVlJztcXG4gICAgaW1wb3J0IFBob3RvTG9hZGVyIGZyb20gJ0AvY29tcG9uZW50cy9waG90by1sb2FkZXInXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIG5hbWU6IFxcXCJQb3N0QWRkXFxcIixcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICAgICAgICBFZGl0b3IsXFxuICAgICAgICAgICAgUGhvdG9Mb2FkZXJcXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBwb3N0OiB7XFxuICAgICAgICAgICAgICAgICAgICBpZDogdm0uJHJvdXRlLnBhcmFtcy5pZCxcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtb3VudGVkKCkge1xcbiAgICAgICAgICAgIGxldCBtb2RlbElkID0gdGhpcy4kcm91dGUucGFyYW1zLmlkO1xcbiAgICAgICAgICAgIGlmIChtb2RlbElkICE9IDApIHtcXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL3Bvc3QvJysgbW9kZWxJZCkudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdCA9IHIuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSBlPy5yZXNwb25zZS5lcnJvciB8fCAn0J/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCc7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWU7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgY3JlYXRlKCkge1xcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL3Bvc3QnLCB0aGlzLnBvc3QpXFxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9IHIuZGF0YS5tZXNzYWdlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogXFxcInBvc3RcXFwiLCBwYXJhbXM6IHtpZDogci5kYXRhLmRhdGEuaWR9fSk7XFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnJlc3BvbnNlICYmIGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2tdID0gZXJyb3JzW2tdPy5bMF0gfHwgJyc7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbiAgICAuZGVzY3JpcHRpb24gLnYtdGV4dC1maWVsZF9fc2xvdCB0ZXh0YXJlYSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLmRlc2NyaXB0aW9uLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDphZnRlciAsXFxuICAgIC5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YmVmb3Jle1xcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0NmZkOGQ5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0NmZkOGQ5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2NDZmZDhkOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2p1cmExMjA1OTYvUGhwc3Rvcm1Qcm9qZWN0cy9za2FzeS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NDZmZDhkOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NDZmZDhkOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NDZmZDhkOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NDZmZDhkOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRmNjQ3ZjVhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Bvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Bvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9qdXJhMTIwNTk2L1BocHN0b3JtUHJvamVjdHMvc2thc3kvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGY2NDdmNWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGY2NDdmNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGY2NDdmNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Bvc3RFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZjY0N2Y1YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZjY0N2Y1YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RFZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0RWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0RWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sIFtcbiAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBob3RvLWlucHV0XCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgaWQ6IFwiZmlsZXNcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiYXphelwiLFxuICAgICAgICBhY2NlcHQ6IFwiaW1hZ2UvanBlZyxpbWFnZS9wbmcsaW1hZ2UvanBnXCJcbiAgICAgIH0sXG4gICAgICBvbjogeyBjaGFuZ2U6IF92bS5hZGRQaG90byB9XG4gICAgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uJHJvdXRlLnBhcmFtcy5pZCA+IDBcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0blwiLCBvbjogeyBjbGljazogX3ZtLmNsaWNrT25JbnB1dCB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCLQlNC+0LHQsNCy0LjRgtGMINGE0L7RgtC+0LPRgNCw0YTQuNGOXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmxvYWRlZFBob3Rvcy5sZW5ndGhcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1c2VyLXBob3RvLW1vZHVsZVwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1c2VyLXBob3RvXCIsXG4gICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogX3ZtLnJhZGl1cyArIFwicHhcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0ucGhvdG8gfSxcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xpY2tPbklucHV0IH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY292ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9LFxuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICBfdm0uJHJvdXRlLnBhcmFtcy5pZCA+IDBcbiAgICAgICAgICAgICAgPyBcItCU0L7QsdCw0LLQu9C10L3QuNC1INC90L7QstC+0YHRgtC4XCJcbiAgICAgICAgICAgICAgOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L3QvtCy0L7RgdGC0LhcIlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIG5hbWU6IFwidGl0bGVcIixcbiAgICAgICAgICBsYWJlbDogXCLQl9Cw0LPQvtC70L7QstC+0LpcIixcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy50aXRsZVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0ucG9zdC50aXRsZSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0ucG9zdCwgXCJ0aXRsZVwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInBvc3QudGl0bGVcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dGFyZWFcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbiBcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgbGFiZWw6IFwi0J7Qv9C40YHQsNC90LjQtVwiLFxuICAgICAgICAgIGhpbnQ6IFwiSGludCB0ZXh0XCIsXG4gICAgICAgICAgdmFsdWU6IFwiIFwiLFxuICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLmRlc2NyaXB0aW9uXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZWRpdG9yXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibXQtMlwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwiYXBpLWtleVwiOiBcImthcHIwa2gwdjN2c2Nua3Bwc3hnaWc5OHZmNm1naXRhaWk4YXV3M3AycGluMWM1dFwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5wb3N0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5wb3N0LCBcImRlc2NyaXB0aW9uXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwicG9zdC5kZXNjcmlwdGlvblwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLiRyb3V0ZSA/IF9jKFwicGhvdG8tbG9hZGVyXCIpIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLnBvc3QpICsgXCJcXG4gICAgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1idG5cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNhdmUtYnRuXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiAhKF92bS5wb3N0LmRlc2NyaXB0aW9uICYmIF92bS5wb3N0LnRpdGxlKSxcbiAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY3JlYXRlIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktcGx1c1wiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjQ2ZmQ4ZDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjYxODVkZDJhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0NmZkOGQ5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0NmZkOGQ5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxOWE0ZDU0NlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=