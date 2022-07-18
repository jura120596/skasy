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
      n: 0,
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
      this.n = this.loadedPhotos.length - 1;
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
        _this.post = response.data.data;
      })["catch"](function (e) {
        var _e$response;

        console.log(e);
        _this.$root.$children[0].snackbarText = (e === null || e === void 0 ? void 0 : (_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.error) || 'Произошла ошибка';
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.photo-input[data-v-646fd8d9] {\n    position: absolute;\n    visibility: hidden;\n}\n.user-photo[data-v-646fd8d9] {\n    border-radius: 200px;\n    width: 300px;\n    height: auto;\n    max-height: 500px;\n    border: 1px solid #01aefe;\n}\n.user-photo-module[data-v-646fd8d9] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/photo-loader.vue"],"names":[],"mappings":";AA8EA;IACA,kBAAA;IACA,kBAAA;AACA;AAEA;IACA,oBAAA;IACA,YAAA;IACA,YAAA;IACA,iBAAA;IACA,yBAAA;AACA;AAEA;IACA,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;AACA","sourcesContent":["<template>\n    <v-card class=\"d-flex flex-column\" justify-center align-center elevation=\"0\">\n        <input\n                type=\"file\"\n                id=\"files\"\n                @change=\"addPhoto\"\n                class=\"photo-input\"\n                placeholder=\"azaz\"\n                accept=\"image/jpeg,image/png,image/jpg\"\n        />\n\n        <v-btn class=\"btn my-2\" @click=\"clickOnInput\">Добавить фотографию</v-btn>\n        <div v-if=\"loadedPhotos.length\" class=\"user-photo-module\">\n            <v-carousel v-model=\"n\">\n                <v-carousel-item\n                        v-for=\"(photo, i) in loadedPhotos\"\n                        :key=\"i\"\n                        :src=\"photo\"\n                        contain\n                >\n                </v-carousel-item>\n            </v-carousel>\n        </div>\n    </v-card>\n</template>\n\n<script>\n\n    export default {\n        name: 'photo-loader',\n        props: {\n            radius: {\n                type: Number,\n            },\n        },\n        components: {},\n        data() {\n            return {\n                n: 0,\n                photo: '',\n                loadedPhotos: [],\n                fileImg: null,\n            }\n        },\n        methods: {\n            returnFormData(val) {\n                this.$emit('save-photo', val)\n            },\n            updatePhoto(val) {\n                this.photo = val\n                this.showCropperDialog = false\n            },\n            clickOnInput() {\n                document.getElementById('files').files = (new DataTransfer()).files;\n                document.getElementById('files').click()\n\n            },\n            addPhoto(event) {\n                this.fileImg = event.target.files[0]\n                if (this.fileImg.size > 5024000) {\n                    this.$root.$children[0].snackbarText = 'Размер файла не может быть больше 5МБ'\n                    this.$root.$children[0].snackbar = true\n                    return;\n                }\n                if(this.loadedPhotos.length > 10) {\n                    this.$root.$children[0].snackbarText = 'Вы не можете загрузить больше 10 фотографий'\n                    this.$root.$children[0].snackbar = true\n                    return;\n                }\n                this.loadedPhotos.push(URL.createObjectURL(this.fileImg))\n                this.n = this.loadedPhotos.length-1\n                this.fileImg = null;\n            },\n        },\n    }\n</script>\n\n<style scoped>\n    .photo-input {\n        position: absolute;\n        visibility: hidden;\n    }\n\n    .user-photo {\n        border-radius: 200px;\n        width: 300px;\n        height: auto;\n        max-height: 500px;\n        border: 1px solid #01aefe;\n    }\n\n    .user-photo-module {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n</style>\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.description .v-text-field__slot textarea {\n    display: none !important;\n}\n.description.v-text-field>.v-input__control>.v-input__slot:after ,\n.description.v-text-field>.v-input__control>.v-input__slot:before{\n    display: none !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/PostEdit.vue"],"names":[],"mappings":";AAwGA;IACA,wBAAA;AACA;AACA;;IAEA,wBAAA;AACA","sourcesContent":["<template>\n    <v-container\n            class=\"cover\">\n        <v-toolbar-title align=\"center\" justify=\"center\" class=\"mb-2\"\n        v-text=\"$route.params.id  == 0 ? 'Добавление новости' :  'Редактирование новости'\">\n        </v-toolbar-title>\n        <v-text-field\n            type=\"text\"\n            name=\"title\"\n            label=\"Заголовок\"\n            v-model=\"post.title\"\n            :error-messages=\"messages.title\"\n            >\n        </v-text-field>\n        <v-textarea\n                name=\"description\"\n                label=\"Описание\"\n                hint=\"Hint text\"\n                :value=\"' '\"\n                class=\"description \"\n                :error-messages=\"messages.description\"\n        ></v-textarea>\n        <editor\n                api-key=\"kapr0kh0v3vscnkppsxgig98vf6mgitaii8auw3p2pin1c5t\"\n                class=\"mt-2\"\n                v-model=\"post.description\"\n        >\n        </editor>\n        <v-spacer/>\n        <photo-loader v-if=\"$route.params.id > 0\"></photo-loader>\n        <v-btn class=\"save-btn\"\n               v-if=\"$route.params.id == 0\"\n               color=\"success\"\n               fab\n               @click=\"create\"\n               :disabled=\"!(post.description && post.title)\"\n               dark>\n            <v-icon>mdi-plus</v-icon>\n        </v-btn>\n        <v-btn class=\"save-btn\"\n               v-else\n               color=\"success\"\n               fab\n               dark>\n            <v-icon>mdi-check-outline</v-icon>\n        </v-btn>\n    </v-container>\n</template>\n\n<script>\n    import Editor from '@tinymce/tinymce-vue';\n    import PhotoLoader from '@/components/photo-loader'\n    export default {\n        name: \"PostAdd\",\n        components: {\n            Editor,\n            PhotoLoader\n        },\n        data: (vm) => {\n            return {\n                post: {\n                    id: vm.$route.params.id,\n                    title: '',\n                    description: '',\n                },\n                messages: {\n                    title: '',\n                    description: '',\n                }\n            }\n        },\n        mounted() {\n            let modelId = this.$route.params.id;\n            if (modelId != 0) {\n                window.axios.get('/post/'+ modelId).then((response) => {\n                    this.post = response.data.data;\n                }).catch((e) => {\n                    console.log(e);\n                    this.$root.$children[0].snackbarText = e?.response?.error || 'Произошла ошибка';\n                    this.$root.$children[0].snackbar = true;\n                });\n            }\n        },\n        methods: {\n            create() {\n                window.axios.post('/post', this.post)\n                    .then((r) => {\n                        this.$root.$children[0].snackbarText = r.data.message;\n                        this.$root.$children[0].snackbar = true;\n                        this.$router.push({name: \"post\", params: {id: r.data.data.id}});\n                    }).catch((e) => {\n                        if (e.response && e.response.status === 422) {\n                            let errors = e.response.data.errors\n                            Object.keys(this.messages).forEach((k)=> {\n                                this.messages[k] = errors[k]?.[0] || '';\n                            });\n                        }\n                    })\n            }\n        }\n    }\n</script>\n\n<style>\n    .description .v-text-field__slot textarea {\n        display: none !important;\n    }\n    .description.v-text-field>.v-input__control>.v-input__slot:after ,\n    .description.v-text-field>.v-input__control>.v-input__slot:before{\n        display: none !important;\n    }\n</style>"],"sourceRoot":""}]);
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
  return _c(
    "v-card",
    {
      staticClass: "d-flex flex-column",
      attrs: { "justify-center": "", "align-center": "", elevation: "0" }
    },
    [
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
      _c(
        "v-btn",
        { staticClass: "btn my-2", on: { click: _vm.clickOnInput } },
        [_vm._v("Добавить фотографию")]
      ),
      _vm._v(" "),
      _vm.loadedPhotos.length
        ? _c(
            "div",
            { staticClass: "user-photo-module" },
            [
              _c(
                "v-carousel",
                {
                  model: {
                    value: _vm.n,
                    callback: function($$v) {
                      _vm.n = $$v
                    },
                    expression: "n"
                  }
                },
                _vm._l(_vm.loadedPhotos, function(photo, i) {
                  return _c("v-carousel-item", {
                    key: i,
                    attrs: { src: photo, contain: "" }
                  })
                }),
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
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
            _vm.$route.params.id == 0
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
      _vm.$route.params.id > 0 ? _c("photo-loader") : _vm._e(),
      _vm._v(" "),
      _vm.$route.params.id == 0
        ? _c(
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
        : _c(
            "v-btn",
            {
              staticClass: "save-btn",
              attrs: { color: "success", fab: "", dark: "" }
            },
            [_c("v-icon", [_vm._v("mdi-check-outline")])],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1NjcmlwdExvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1RpbnlNQ0UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGlueW1jZS90aW55bWNlLXZ1ZS9saWIvY2pzL21haW4vdHMvY29tcG9uZW50cy9FZGl0b3JQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlPzY2YTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RFZGl0LnZ1ZT84N2Y3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlPzI2ZWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RFZGl0LnZ1ZT84ZDQyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWU/MjE3NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdEVkaXQudnVlPzI2NzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZT83NTU3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qb3N0RWRpdC52dWU/MDg3YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELGNBQWMsbUJBQU8sQ0FBQyw2RUFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGFBQWEsRUFBRTtBQUMxRTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7Ozs7Ozs7Ozs7O0FDMURQO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsNkJBQTZCLGtEQUFrRCxxQkFBTSxFQUFFO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOzs7Ozs7Ozs7Ozs7QUNkTDtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdEO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0ZBOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLDh1QkFBdVg7QUFDN1k7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJKQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7O0FDWGY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsaXJCQUEyVjtBQUNqWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkpBQWlGO0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19wYWdlc19Qb3N0RWRpdF92dWUwNTU2MTYxZjM5ZGZkNDMxMzczYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFV0aWxzXzEgPSByZXF1aXJlKFwiLi9VdGlsc1wiKTtcbnZhciBjcmVhdGVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0ZW5lcnM6IFtdLFxuICAgICAgICBzY3JpcHRJZDogVXRpbHNfMS51dWlkKCd0aW55LXNjcmlwdCcpLFxuICAgICAgICBzY3JpcHRMb2FkZWQ6IGZhbHNlXG4gICAgfTtcbn07XG52YXIgQ3JlYXRlU2NyaXB0TG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0ZSA9IGNyZWF0ZVN0YXRlKCk7XG4gICAgdmFyIGluamVjdFNjcmlwdFRhZyA9IGZ1bmN0aW9uIChzY3JpcHRJZCwgZG9jLCB1cmwsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzY3JpcHRUYWcgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdFRhZy5yZWZlcnJlclBvbGljeSA9ICdvcmlnaW4nO1xuICAgICAgICBzY3JpcHRUYWcudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0VGFnLmlkID0gc2NyaXB0SWQ7XG4gICAgICAgIHNjcmlwdFRhZy5zcmMgPSB1cmw7XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2NyaXB0VGFnLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH07XG4gICAgICAgIHNjcmlwdFRhZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaGFuZGxlcik7XG4gICAgICAgIGlmIChkb2MuaGVhZCkge1xuICAgICAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0VGFnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGxvYWQgPSBmdW5jdGlvbiAoZG9jLCB1cmwsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChzdGF0ZS5zY3JpcHRMb2FkZWQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZS5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoIWRvYy5nZXRFbGVtZW50QnlJZChzdGF0ZS5zY3JpcHRJZCkpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTY3JpcHRUYWcoc3RhdGUuc2NyaXB0SWQsIGRvYywgdXJsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4oKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnNjcmlwdExvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIE9ubHkgdG8gYmUgdXNlZCBieSB0ZXN0cy5cbiAgICB2YXIgcmVpbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGF0ZSA9IGNyZWF0ZVN0YXRlKCk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkOiBsb2FkLFxuICAgICAgICByZWluaXRpYWxpemU6IHJlaW5pdGlhbGl6ZVxuICAgIH07XG59O1xudmFyIFNjcmlwdExvYWRlciA9IENyZWF0ZVNjcmlwdExvYWRlcigpO1xuZXhwb3J0cy5TY3JpcHRMb2FkZXIgPSBTY3JpcHRMb2FkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpOyB9O1xudmFyIGdldFRpbnltY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdsb2JhbCA9IGdldEdsb2JhbCgpO1xuICAgIHJldHVybiBnbG9iYWwgJiYgZ2xvYmFsLnRpbnltY2UgPyBnbG9iYWwudGlueW1jZSA6IG51bGw7XG59O1xuZXhwb3J0cy5nZXRUaW55bWNlID0gZ2V0VGlueW1jZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHZhbGlkRXZlbnRzID0gW1xuICAgICdvbkFjdGl2YXRlJyxcbiAgICAnb25BZGRVbmRvJyxcbiAgICAnb25CZWZvcmVBZGRVbmRvJyxcbiAgICAnb25CZWZvcmVFeGVjQ29tbWFuZCcsXG4gICAgJ29uQmVmb3JlR2V0Q29udGVudCcsXG4gICAgJ29uQmVmb3JlUmVuZGVyVUknLFxuICAgICdvbkJlZm9yZVNldENvbnRlbnQnLFxuICAgICdvbkJlZm9yZVBhc3RlJyxcbiAgICAnb25CbHVyJyxcbiAgICAnb25DaGFuZ2UnLFxuICAgICdvbkNsZWFyVW5kb3MnLFxuICAgICdvbkNsaWNrJyxcbiAgICAnb25Db250ZXh0TWVudScsXG4gICAgJ29uQ29weScsXG4gICAgJ29uQ3V0JyxcbiAgICAnb25EYmxjbGljaycsXG4gICAgJ29uRGVhY3RpdmF0ZScsXG4gICAgJ29uRGlydHknLFxuICAgICdvbkRyYWcnLFxuICAgICdvbkRyYWdEcm9wJyxcbiAgICAnb25EcmFnRW5kJyxcbiAgICAnb25EcmFnR2VzdHVyZScsXG4gICAgJ29uRHJhZ092ZXInLFxuICAgICdvbkRyb3AnLFxuICAgICdvbkV4ZWNDb21tYW5kJyxcbiAgICAnb25Gb2N1cycsXG4gICAgJ29uRm9jdXNJbicsXG4gICAgJ29uRm9jdXNPdXQnLFxuICAgICdvbkdldENvbnRlbnQnLFxuICAgICdvbkhpZGUnLFxuICAgICdvbkluaXQnLFxuICAgICdvbktleURvd24nLFxuICAgICdvbktleVByZXNzJyxcbiAgICAnb25LZXlVcCcsXG4gICAgJ29uTG9hZENvbnRlbnQnLFxuICAgICdvbk1vdXNlRG93bicsXG4gICAgJ29uTW91c2VFbnRlcicsXG4gICAgJ29uTW91c2VMZWF2ZScsXG4gICAgJ29uTW91c2VNb3ZlJyxcbiAgICAnb25Nb3VzZU91dCcsXG4gICAgJ29uTW91c2VPdmVyJyxcbiAgICAnb25Nb3VzZVVwJyxcbiAgICAnb25Ob2RlQ2hhbmdlJyxcbiAgICAnb25PYmplY3RSZXNpemVTdGFydCcsXG4gICAgJ29uT2JqZWN0UmVzaXplZCcsXG4gICAgJ29uT2JqZWN0U2VsZWN0ZWQnLFxuICAgICdvblBhc3RlJyxcbiAgICAnb25Qb3N0UHJvY2VzcycsXG4gICAgJ29uUG9zdFJlbmRlcicsXG4gICAgJ29uUHJlUHJvY2VzcycsXG4gICAgJ29uUHJvZ3Jlc3NTdGF0ZScsXG4gICAgJ29uUmVkbycsXG4gICAgJ29uUmVtb3ZlJyxcbiAgICAnb25SZXNldCcsXG4gICAgJ29uU2F2ZUNvbnRlbnQnLFxuICAgICdvblNlbGVjdGlvbkNoYW5nZScsXG4gICAgJ29uU2V0QXR0cmliJyxcbiAgICAnb25TZXRDb250ZW50JyxcbiAgICAnb25TaG93JyxcbiAgICAnb25TdWJtaXQnLFxuICAgICdvblVuZG8nLFxuICAgICdvblZpc3VhbEFpZCdcbl07XG52YXIgaXNWYWxpZEtleSA9IGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHZhbGlkRXZlbnRzLm1hcChmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIGV2ZW50LnRvTG93ZXJDYXNlKCk7IH0pLmluZGV4T2Yoa2V5LnRvTG93ZXJDYXNlKCkpICE9PSAtMTsgfTtcbmV4cG9ydHMuaXNWYWxpZEtleSA9IGlzVmFsaWRLZXk7XG52YXIgYmluZEhhbmRsZXJzID0gZnVuY3Rpb24gKGluaXRFdmVudCwgbGlzdGVuZXJzLCBlZGl0b3IpIHtcbiAgICBPYmplY3Qua2V5cyhsaXN0ZW5lcnMpXG4gICAgICAgIC5maWx0ZXIoaXNWYWxpZEtleSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgaGFuZGxlciA9IGxpc3RlbmVyc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdvbkluaXQnKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihpbml0RXZlbnQsIGVkaXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlZGl0b3Iub24oa2V5LnN1YnN0cmluZygyKSwgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGhhbmRsZXIoZSwgZWRpdG9yKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnRzLmJpbmRIYW5kbGVycyA9IGJpbmRIYW5kbGVycztcbnZhciBiaW5kTW9kZWxIYW5kbGVycyA9IGZ1bmN0aW9uIChjdHgsIGVkaXRvcikge1xuICAgIHZhciBtb2RlbEV2ZW50cyA9IGN0eC4kcHJvcHMubW9kZWxFdmVudHMgPyBjdHguJHByb3BzLm1vZGVsRXZlbnRzIDogbnVsbDtcbiAgICB2YXIgbm9ybWFsaXplZEV2ZW50cyA9IEFycmF5LmlzQXJyYXkobW9kZWxFdmVudHMpID8gbW9kZWxFdmVudHMuam9pbignICcpIDogbW9kZWxFdmVudHM7XG4gICAgZWRpdG9yLm9uKG5vcm1hbGl6ZWRFdmVudHMgPyBub3JtYWxpemVkRXZlbnRzIDogJ2NoYW5nZSBpbnB1dCB1bmRvIHJlZG8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN0eC4kZW1pdCgnaW5wdXQnLCBlZGl0b3IuZ2V0Q29udGVudCh7IGZvcm1hdDogY3R4LiRwcm9wcy5vdXRwdXRGb3JtYXQgfSkpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuYmluZE1vZGVsSGFuZGxlcnMgPSBiaW5kTW9kZWxIYW5kbGVycztcbnZhciBpbml0RWRpdG9yID0gZnVuY3Rpb24gKGluaXRFdmVudCwgY3R4LCBlZGl0b3IpIHtcbiAgICB2YXIgdmFsdWUgPSBjdHguJHByb3BzLnZhbHVlID8gY3R4LiRwcm9wcy52YWx1ZSA6ICcnO1xuICAgIHZhciBpbml0aWFsVmFsdWUgPSBjdHguJHByb3BzLmluaXRpYWxWYWx1ZSA/IGN0eC4kcHJvcHMuaW5pdGlhbFZhbHVlIDogJyc7XG4gICAgZWRpdG9yLnNldENvbnRlbnQodmFsdWUgfHwgKGN0eC5pbml0aWFsaXplZCA/IGN0eC5jYWNoZSA6IGluaXRpYWxWYWx1ZSkpO1xuICAgIC8vIEFsd2F5cyBiaW5kIHRoZSB2YWx1ZSBsaXN0ZW5lciBpbiBjYXNlIHVzZXJzIHVzZSA6dmFsdWUgaW5zdGVhZCBvZiB2LW1vZGVsXG4gICAgY3R4LiR3YXRjaCgndmFsdWUnLCBmdW5jdGlvbiAodmFsLCBwcmV2VmFsKSB7XG4gICAgICAgIGlmIChlZGl0b3IgJiYgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgdmFsICE9PSBwcmV2VmFsICYmIHZhbCAhPT0gZWRpdG9yLmdldENvbnRlbnQoeyBmb3JtYXQ6IGN0eC4kcHJvcHMub3V0cHV0Rm9ybWF0IH0pKSB7XG4gICAgICAgICAgICBlZGl0b3Iuc2V0Q29udGVudCh2YWwpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gY2hlY2tzIGlmIHRoZSB2LW1vZGVsIHNob3J0aGFuZCBpcyB1c2VkICh3aGljaCBzZXRzIGFuIHYtb246aW5wdXQgbGlzdGVuZXIpIGFuZCB0aGVuIGJpbmRzIGVpdGhlclxuICAgIC8vIHNwZWNpZmllZCB0aGUgZXZlbnRzIG9yIGRlZmF1bHRzIHRvIFwiY2hhbmdlIGtleXVwXCIgZXZlbnQgYW5kIGVtaXRzIHRoZSBlZGl0b3IgY29udGVudCBvbiB0aGF0IGV2ZW50XG4gICAgaWYgKGN0eC4kbGlzdGVuZXJzLmlucHV0KSB7XG4gICAgICAgIGJpbmRNb2RlbEhhbmRsZXJzKGN0eCwgZWRpdG9yKTtcbiAgICB9XG4gICAgYmluZEhhbmRsZXJzKGluaXRFdmVudCwgY3R4LiRsaXN0ZW5lcnMsIGVkaXRvcik7XG4gICAgY3R4LmluaXRpYWxpemVkID0gdHJ1ZTtcbn07XG5leHBvcnRzLmluaXRFZGl0b3IgPSBpbml0RWRpdG9yO1xudmFyIHVuaXF1ZSA9IDA7XG52YXIgdXVpZCA9IGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDApO1xuICAgIHVuaXF1ZSsrO1xuICAgIHJldHVybiBwcmVmaXggKyAnXycgKyByYW5kb20gKyB1bmlxdWUgKyBTdHJpbmcodGltZSk7XG59O1xuZXhwb3J0cy51dWlkID0gdXVpZDtcbnZhciBpc1RleHRhcmVhID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RleHRhcmVhJztcbn07XG5leHBvcnRzLmlzVGV4dGFyZWEgPSBpc1RleHRhcmVhO1xudmFyIG5vcm1hbGl6ZVBsdWdpbkFycmF5ID0gZnVuY3Rpb24gKHBsdWdpbnMpIHtcbiAgICBpZiAodHlwZW9mIHBsdWdpbnMgPT09ICd1bmRlZmluZWQnIHx8IHBsdWdpbnMgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGx1Z2lucykgPyBwbHVnaW5zIDogcGx1Z2lucy5zcGxpdCgnICcpO1xufTtcbnZhciBtZXJnZVBsdWdpbnMgPSBmdW5jdGlvbiAoaW5pdFBsdWdpbnMsIGlucHV0UGx1Z2lucykge1xuICAgIHJldHVybiBub3JtYWxpemVQbHVnaW5BcnJheShpbml0UGx1Z2lucykuY29uY2F0KG5vcm1hbGl6ZVBsdWdpbkFycmF5KGlucHV0UGx1Z2lucykpO1xufTtcbmV4cG9ydHMubWVyZ2VQbHVnaW5zID0gbWVyZ2VQbHVnaW5zO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkOyB9O1xuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNjcmlwdExvYWRlcl8xID0gcmVxdWlyZShcIi4uL1NjcmlwdExvYWRlclwiKTtcbnZhciBUaW55TUNFXzEgPSByZXF1aXJlKFwiLi4vVGlueU1DRVwiKTtcbnZhciBVdGlsc18xID0gcmVxdWlyZShcIi4uL1V0aWxzXCIpO1xudmFyIEVkaXRvclByb3BUeXBlc18xID0gcmVxdWlyZShcIi4vRWRpdG9yUHJvcFR5cGVzXCIpO1xudmFyIHJlbmRlcklubGluZSA9IGZ1bmN0aW9uIChoLCBpZCwgdGFnTmFtZSkge1xuICAgIHJldHVybiBoKHRhZ05hbWUgPyB0YWdOYW1lIDogJ2RpdicsIHtcbiAgICAgICAgYXR0cnM6IHsgaWQ6IGlkIH1cbiAgICB9KTtcbn07XG52YXIgcmVuZGVySWZyYW1lID0gZnVuY3Rpb24gKGgsIGlkKSB7XG4gICAgcmV0dXJuIGgoJ3RleHRhcmVhJywge1xuICAgICAgICBhdHRyczogeyBpZDogaWQgfSxcbiAgICAgICAgc3R5bGU6IHsgdmlzaWJpbGl0eTogJ2hpZGRlbicgfVxuICAgIH0pO1xufTtcbnZhciBpbml0aWFsaXNlID0gZnVuY3Rpb24gKGN0eCkgeyByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmaW5hbEluaXQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY3R4LiRwcm9wcy5pbml0KSwgeyByZWFkb25seTogY3R4LiRwcm9wcy5kaXNhYmxlZCwgc2VsZWN0b3I6IFwiI1wiICsgY3R4LmVsZW1lbnRJZCwgcGx1Z2luczogVXRpbHNfMS5tZXJnZVBsdWdpbnMoY3R4LiRwcm9wcy5pbml0ICYmIGN0eC4kcHJvcHMuaW5pdC5wbHVnaW5zLCBjdHguJHByb3BzLnBsdWdpbnMpLCB0b29sYmFyOiBjdHguJHByb3BzLnRvb2xiYXIgfHwgKGN0eC4kcHJvcHMuaW5pdCAmJiBjdHguJHByb3BzLmluaXQudG9vbGJhciksIGlubGluZTogY3R4LmlubGluZUVkaXRvciwgc2V0dXA6IGZ1bmN0aW9uIChlZGl0b3IpIHtcbiAgICAgICAgICAgIGN0eC5lZGl0b3IgPSBlZGl0b3I7XG4gICAgICAgICAgICBlZGl0b3Iub24oJ2luaXQnLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gVXRpbHNfMS5pbml0RWRpdG9yKGUsIGN0eCwgZWRpdG9yKTsgfSk7XG4gICAgICAgICAgICBpZiAoY3R4LiRwcm9wcy5pbml0ICYmIHR5cGVvZiBjdHguJHByb3BzLmluaXQuc2V0dXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjdHguJHByb3BzLmluaXQuc2V0dXAoZWRpdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB9KTtcbiAgICBpZiAoVXRpbHNfMS5pc1RleHRhcmVhKGN0eC5lbGVtZW50KSkge1xuICAgICAgICBjdHguZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XG4gICAgICAgIGN0eC5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9XG4gICAgVGlueU1DRV8xLmdldFRpbnltY2UoKS5pbml0KGZpbmFsSW5pdCk7XG59OyB9O1xuZXhwb3J0cy5FZGl0b3IgPSB7XG4gICAgcHJvcHM6IEVkaXRvclByb3BUeXBlc18xLmVkaXRvclByb3BzLFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50SWQgPSB0aGlzLiRwcm9wcy5pZCB8fCBVdGlsc18xLnV1aWQoJ3RpbnktdnVlJyk7XG4gICAgICAgIHRoaXMuaW5saW5lRWRpdG9yID0gKHRoaXMuJHByb3BzLmluaXQgJiYgdGhpcy4kcHJvcHMuaW5pdC5pbmxpbmUpIHx8IHRoaXMuJHByb3BzLmlubGluZTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLnNldE1vZGUodGhpcy5kaXNhYmxlZCA/ICdyZWFkb25seScgOiAnZGVzaWduJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy4kZWw7XG4gICAgICAgIGlmIChUaW55TUNFXzEuZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpbml0aWFsaXNlKHRoaXMpKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgICB2YXIgY2hhbm5lbCA9IHRoaXMuJHByb3BzLmNsb3VkQ2hhbm5lbCA/IHRoaXMuJHByb3BzLmNsb3VkQ2hhbm5lbCA6ICc1JztcbiAgICAgICAgICAgIHZhciBhcGlLZXkgPSB0aGlzLiRwcm9wcy5hcGlLZXkgPyB0aGlzLiRwcm9wcy5hcGlLZXkgOiAnbm8tYXBpLWtleSc7XG4gICAgICAgICAgICB2YXIgc2NyaXB0U3JjID0gVXRpbHNfMS5pc051bGxPclVuZGVmaW5lZCh0aGlzLiRwcm9wcy50aW55bWNlU2NyaXB0U3JjKSA/XG4gICAgICAgICAgICAgICAgXCJodHRwczovL2Nkbi50aW55LmNsb3VkLzEvXCIgKyBhcGlLZXkgKyBcIi90aW55bWNlL1wiICsgY2hhbm5lbCArIFwiL3RpbnltY2UubWluLmpzXCIgOlxuICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLnRpbnltY2VTY3JpcHRTcmM7XG4gICAgICAgICAgICBTY3JpcHRMb2FkZXJfMS5TY3JpcHRMb2FkZXIubG9hZCh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudCwgc2NyaXB0U3JjLCBpbml0aWFsaXNlKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoVGlueU1DRV8xLmdldFRpbnltY2UoKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgVGlueU1DRV8xLmdldFRpbnltY2UoKS5yZW1vdmUodGhpcy5lZGl0b3IpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkZWFjdGl2YXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5pbmxpbmVFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUgPSB0aGlzLmVkaXRvci5nZXRDb250ZW50KCk7XG4gICAgICAgICAgICAoX2EgPSBUaW55TUNFXzEuZ2V0VGlueW1jZSgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlKHRoaXMuZWRpdG9yKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWN0aXZhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbmxpbmVFZGl0b3IgJiYgdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgaW5pdGlhbGlzZSh0aGlzKSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlubGluZUVkaXRvciA/IHJlbmRlcklubGluZShoLCB0aGlzLmVsZW1lbnRJZCwgdGhpcy4kcHJvcHMudGFnTmFtZSkgOiByZW5kZXJJZnJhbWUoaCwgdGhpcy5lbGVtZW50SWQpO1xuICAgIH1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZWRpdG9yUHJvcHMgPSB7XG4gICAgYXBpS2V5OiBTdHJpbmcsXG4gICAgY2xvdWRDaGFubmVsOiBTdHJpbmcsXG4gICAgaWQ6IFN0cmluZyxcbiAgICBpbml0OiBPYmplY3QsXG4gICAgaW5pdGlhbFZhbHVlOiBTdHJpbmcsXG4gICAgaW5saW5lOiBCb29sZWFuLFxuICAgIG1vZGVsRXZlbnRzOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgcGx1Z2luczogW1N0cmluZywgQXJyYXldLFxuICAgIHRhZ05hbWU6IFN0cmluZyxcbiAgICB0b29sYmFyOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgdmFsdWU6IFN0cmluZyxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICB0aW55bWNlU2NyaXB0U3JjOiBTdHJpbmcsXG4gICAgb3V0cHV0Rm9ybWF0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gcHJvcCA9PT0gJ2h0bWwnIHx8IHByb3AgPT09ICd0ZXh0JzsgfVxuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRWRpdG9yXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL0VkaXRvclwiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEVkaXRvcl8xLkVkaXRvcjtcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8di1jYXJkIGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uXCIganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIGVsZXZhdGlvbj1cIjBcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIGlkPVwiZmlsZXNcIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJhZGRQaG90b1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwaG90by1pbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhemF6XCJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9qcGVnLGltYWdlL3BuZyxpbWFnZS9qcGdcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cImJ0biBteS0yXCIgQGNsaWNrPVwiY2xpY2tPbklucHV0XCI+0JTQvtCx0LDQstC40YLRjCDRhNC+0YLQvtCz0YDQsNGE0LjRjjwvdi1idG4+XG4gICAgICAgIDxkaXYgdi1pZj1cImxvYWRlZFBob3Rvcy5sZW5ndGhcIiBjbGFzcz1cInVzZXItcGhvdG8tbW9kdWxlXCI+XG4gICAgICAgICAgICA8di1jYXJvdXNlbCB2LW1vZGVsPVwiblwiPlxuICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHBob3RvLCBpKSBpbiBsb2FkZWRQaG90b3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cInBob3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC92LWNhcm91c2VsLWl0ZW0+XG4gICAgICAgICAgICA8L3YtY2Fyb3VzZWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdi1jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ3Bob3RvLWxvYWRlcicsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICByYWRpdXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbjogMCxcbiAgICAgICAgICAgICAgICBwaG90bzogJycsXG4gICAgICAgICAgICAgICAgbG9hZGVkUGhvdG9zOiBbXSxcbiAgICAgICAgICAgICAgICBmaWxlSW1nOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICByZXR1cm5Gb3JtRGF0YSh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzYXZlLXBob3RvJywgdmFsKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZVBob3RvKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGhvdG8gPSB2YWxcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDcm9wcGVyRGlhbG9nID0gZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGlja09uSW5wdXQoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVzJykuZmlsZXMgPSAobmV3IERhdGFUcmFuc2ZlcigpKS5maWxlcztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZXMnKS5jbGljaygpXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRQaG90byhldmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVJbWcuc2l6ZSA+IDUwMjQwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gJ9Cg0LDQt9C80LXRgCDRhNCw0LnQu9CwINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQsdC+0LvRjNGI0LUgNdCc0JEnXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9ICfQktGLINC90LUg0LzQvtC20LXRgtC1INC30LDQs9GA0YPQt9C40YLRjCDQsdC+0LvRjNGI0LUgMTAg0YTQvtGC0L7Qs9GA0LDRhNC40LknXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkUGhvdG9zLnB1c2goVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLmZpbGVJbWcpKVxuICAgICAgICAgICAgICAgIHRoaXMubiA9IHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aC0xXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlSW1nID0gbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLnBob3RvLWlucHV0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLnVzZXItcGhvdG8ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDFhZWZlO1xuICAgIH1cblxuICAgIC51c2VyLXBob3RvLW1vZHVsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPHYtY29udGFpbmVyXG4gICAgICAgICAgICBjbGFzcz1cImNvdmVyXCI+XG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgdi10ZXh0PVwiJHJvdXRlLnBhcmFtcy5pZCAgPT0gMCA/ICfQlNC+0LHQsNCy0LvQtdC90LjQtSDQvdC+0LLQvtGB0YLQuCcgOiAgJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L3QvtCy0L7RgdGC0LgnXCI+XG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgbGFiZWw9XCLQl9Cw0LPQvtC70L7QstC+0LpcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInBvc3QudGl0bGVcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMudGl0bGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICA8L3YtdGV4dC1maWVsZD5cbiAgICAgICAgPHYtdGV4dGFyZWFcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0J7Qv9C40YHQsNC90LjQtVwiXG4gICAgICAgICAgICAgICAgaGludD1cIkhpbnQgdGV4dFwiXG4gICAgICAgICAgICAgICAgOnZhbHVlPVwiJyAnXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImRlc2NyaXB0aW9uIFwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMuZGVzY3JpcHRpb25cIlxuICAgICAgICA+PC92LXRleHRhcmVhPlxuICAgICAgICA8ZWRpdG9yXG4gICAgICAgICAgICAgICAgYXBpLWtleT1cImthcHIwa2gwdjN2c2Nua3Bwc3hnaWc5OHZmNm1naXRhaWk4YXV3M3AycGluMWM1dFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJtdC0yXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwicG9zdC5kZXNjcmlwdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgPC9lZGl0b3I+XG4gICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgIDxwaG90by1sb2FkZXIgdi1pZj1cIiRyb3V0ZS5wYXJhbXMuaWQgPiAwXCI+PC9waG90by1sb2FkZXI+XG4gICAgICAgIDx2LWJ0biBjbGFzcz1cInNhdmUtYnRuXCJcbiAgICAgICAgICAgICAgIHYtaWY9XCIkcm91dGUucGFyYW1zLmlkID09IDBcIlxuICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgQGNsaWNrPVwiY3JlYXRlXCJcbiAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiEocG9zdC5kZXNjcmlwdGlvbiAmJiBwb3N0LnRpdGxlKVwiXG4gICAgICAgICAgICAgICBkYXJrPlxuICAgICAgICAgICAgPHYtaWNvbj5tZGktcGx1czwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8di1idG4gY2xhc3M9XCJzYXZlLWJ0blwiXG4gICAgICAgICAgICAgICB2LWVsc2VcbiAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICA8di1pY29uPm1kaS1jaGVjay1vdXRsaW5lPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEVkaXRvciBmcm9tICdAdGlueW1jZS90aW55bWNlLXZ1ZSc7XG4gICAgaW1wb3J0IFBob3RvTG9hZGVyIGZyb20gJ0AvY29tcG9uZW50cy9waG90by1sb2FkZXInXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIlBvc3RBZGRcIixcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgRWRpdG9yLFxuICAgICAgICAgICAgUGhvdG9Mb2FkZXJcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBvc3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHZtLiRyb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgbGV0IG1vZGVsSWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XG4gICAgICAgICAgICBpZiAobW9kZWxJZCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL3Bvc3QvJysgbW9kZWxJZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSBlPy5yZXNwb25zZT8uZXJyb3IgfHwgJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL3Bvc3QnLCB0aGlzLnBvc3QpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSByLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiBcInBvc3RcIiwgcGFyYW1zOiB7aWQ6IHIuZGF0YS5kYXRhLmlkfX0pO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgLmRlc2NyaXB0aW9uIC52LXRleHQtZmllbGRfX3Nsb3QgdGV4dGFyZWEge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YWZ0ZXIgLFxuICAgIC5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YmVmb3Jle1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuPC9zdHlsZT4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5waG90by1pbnB1dFtkYXRhLXYtNjQ2ZmQ4ZDldIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi51c2VyLXBob3RvW2RhdGEtdi02NDZmZDhkOV0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDFhZWZlO1xcbn1cXG4udXNlci1waG90by1tb2R1bGVbZGF0YS12LTY0NmZkOGQ5XSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE4RUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0FBQ0E7QUFFQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0FBQ0E7QUFFQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDx2LWNhcmQgY2xhc3M9XFxcImQtZmxleCBmbGV4LWNvbHVtblxcXCIganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIGVsZXZhdGlvbj1cXFwiMFxcXCI+XFxuICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwiZmlsZVxcXCJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImZpbGVzXFxcIlxcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVxcXCJhZGRQaG90b1xcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcInBob3RvLWlucHV0XFxcIlxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiYXphelxcXCJcXG4gICAgICAgICAgICAgICAgYWNjZXB0PVxcXCJpbWFnZS9qcGVnLGltYWdlL3BuZyxpbWFnZS9qcGdcXFwiXFxuICAgICAgICAvPlxcblxcbiAgICAgICAgPHYtYnRuIGNsYXNzPVxcXCJidG4gbXktMlxcXCIgQGNsaWNrPVxcXCJjbGlja09uSW5wdXRcXFwiPtCU0L7QsdCw0LLQuNGC0Ywg0YTQvtGC0L7Qs9GA0LDRhNC40Y48L3YtYnRuPlxcbiAgICAgICAgPGRpdiB2LWlmPVxcXCJsb2FkZWRQaG90b3MubGVuZ3RoXFxcIiBjbGFzcz1cXFwidXNlci1waG90by1tb2R1bGVcXFwiPlxcbiAgICAgICAgICAgIDx2LWNhcm91c2VsIHYtbW9kZWw9XFxcIm5cXFwiPlxcbiAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihwaG90bywgaSkgaW4gbG9hZGVkUGhvdG9zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cXFwicGhvdG9cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxcbiAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbC1pdGVtPlxcbiAgICAgICAgICAgIDwvdi1jYXJvdXNlbD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L3YtY2FyZD5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIG5hbWU6ICdwaG90by1sb2FkZXInLFxcbiAgICAgICAgcHJvcHM6IHtcXG4gICAgICAgICAgICByYWRpdXM6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcG9uZW50czoge30sXFxuICAgICAgICBkYXRhKCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIG46IDAsXFxuICAgICAgICAgICAgICAgIHBob3RvOiAnJyxcXG4gICAgICAgICAgICAgICAgbG9hZGVkUGhvdG9zOiBbXSxcXG4gICAgICAgICAgICAgICAgZmlsZUltZzogbnVsbCxcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIHJldHVybkZvcm1EYXRhKHZhbCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzYXZlLXBob3RvJywgdmFsKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdXBkYXRlUGhvdG8odmFsKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMucGhvdG8gPSB2YWxcXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q3JvcHBlckRpYWxvZyA9IGZhbHNlXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBjbGlja09uSW5wdXQoKSB7XFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmZpbGVzID0gKG5ldyBEYXRhVHJhbnNmZXIoKSkuZmlsZXM7XFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmNsaWNrKClcXG5cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGFkZFBob3RvKGV2ZW50KSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlSW1nLnNpemUgPiA1MDI0MDAwKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0KDQsNC30LzQtdGAINGE0LDQudC70LAg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINCx0L7Qu9GM0YjQtSA10JzQkSdcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGlmKHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aCA+IDEwKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0JLRiyDQvdC1INC80L7QttC10YLQtSDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LHQvtC70YzRiNC1IDEwINGE0L7RgtC+0LPRgNCw0YTQuNC5J1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRQaG90b3MucHVzaChVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZUltZykpXFxuICAgICAgICAgICAgICAgIHRoaXMubiA9IHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aC0xXFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IG51bGw7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgIH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbiAgICAucGhvdG8taW5wdXQge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIC51c2VyLXBob3RvIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDFhZWZlO1xcbiAgICB9XFxuXFxuICAgIC51c2VyLXBob3RvLW1vZHVsZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRlc2NyaXB0aW9uIC52LXRleHQtZmllbGRfX3Nsb3QgdGV4dGFyZWEge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YWZ0ZXIgLFxcbi5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YmVmb3Jle1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qb3N0RWRpdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXdHQTtJQUNBLHdCQUFBO0FBQ0E7QUFDQTs7SUFFQSx3QkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPHYtY29udGFpbmVyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImNvdmVyXFxcIj5cXG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XFxcImNlbnRlclxcXCIganVzdGlmeT1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwibWItMlxcXCJcXG4gICAgICAgIHYtdGV4dD1cXFwiJHJvdXRlLnBhcmFtcy5pZCAgPT0gMCA/ICfQlNC+0LHQsNCy0LvQtdC90LjQtSDQvdC+0LLQvtGB0YLQuCcgOiAgJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L3QvtCy0L7RgdGC0LgnXFxcIj5cXG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxcbiAgICAgICAgPHYtdGV4dC1maWVsZFxcbiAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgbmFtZT1cXFwidGl0bGVcXFwiXFxuICAgICAgICAgICAgbGFiZWw9XFxcItCX0LDQs9C+0LvQvtCy0L7QulxcXCJcXG4gICAgICAgICAgICB2LW1vZGVsPVxcXCJwb3N0LnRpdGxlXFxcIlxcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cXFwibWVzc2FnZXMudGl0bGVcXFwiXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgPC92LXRleHQtZmllbGQ+XFxuICAgICAgICA8di10ZXh0YXJlYVxcbiAgICAgICAgICAgICAgICBuYW1lPVxcXCJkZXNjcmlwdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgbGFiZWw9XFxcItCe0L/QuNGB0LDQvdC40LVcXFwiXFxuICAgICAgICAgICAgICAgIGhpbnQ9XFxcIkhpbnQgdGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgOnZhbHVlPVxcXCInICdcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJkZXNjcmlwdGlvbiBcXFwiXFxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cXFwibWVzc2FnZXMuZGVzY3JpcHRpb25cXFwiXFxuICAgICAgICA+PC92LXRleHRhcmVhPlxcbiAgICAgICAgPGVkaXRvclxcbiAgICAgICAgICAgICAgICBhcGkta2V5PVxcXCJrYXByMGtoMHYzdnNjbmtwcHN4Z2lnOTh2ZjZtZ2l0YWlpOGF1dzNwMnBpbjFjNXRcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtdC0yXFxcIlxcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJwb3N0LmRlc2NyaXB0aW9uXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgPC9lZGl0b3I+XFxuICAgICAgICA8di1zcGFjZXIvPlxcbiAgICAgICAgPHBob3RvLWxvYWRlciB2LWlmPVxcXCIkcm91dGUucGFyYW1zLmlkID4gMFxcXCI+PC9waG90by1sb2FkZXI+XFxuICAgICAgICA8di1idG4gY2xhc3M9XFxcInNhdmUtYnRuXFxcIlxcbiAgICAgICAgICAgICAgIHYtaWY9XFxcIiRyb3V0ZS5wYXJhbXMuaWQgPT0gMFxcXCJcXG4gICAgICAgICAgICAgICBjb2xvcj1cXFwic3VjY2Vzc1xcXCJcXG4gICAgICAgICAgICAgICBmYWJcXG4gICAgICAgICAgICAgICBAY2xpY2s9XFxcImNyZWF0ZVxcXCJcXG4gICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcIiEocG9zdC5kZXNjcmlwdGlvbiAmJiBwb3N0LnRpdGxlKVxcXCJcXG4gICAgICAgICAgICAgICBkYXJrPlxcbiAgICAgICAgICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cXG4gICAgICAgIDwvdi1idG4+XFxuICAgICAgICA8di1idG4gY2xhc3M9XFxcInNhdmUtYnRuXFxcIlxcbiAgICAgICAgICAgICAgIHYtZWxzZVxcbiAgICAgICAgICAgICAgIGNvbG9yPVxcXCJzdWNjZXNzXFxcIlxcbiAgICAgICAgICAgICAgIGZhYlxcbiAgICAgICAgICAgICAgIGRhcms+XFxuICAgICAgICAgICAgPHYtaWNvbj5tZGktY2hlY2stb3V0bGluZTwvdi1pY29uPlxcbiAgICAgICAgPC92LWJ0bj5cXG4gICAgPC92LWNvbnRhaW5lcj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICAgIGltcG9ydCBFZGl0b3IgZnJvbSAnQHRpbnltY2UvdGlueW1jZS12dWUnO1xcbiAgICBpbXBvcnQgUGhvdG9Mb2FkZXIgZnJvbSAnQC9jb21wb25lbnRzL3Bob3RvLWxvYWRlcidcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgbmFtZTogXFxcIlBvc3RBZGRcXFwiLFxcbiAgICAgICAgY29tcG9uZW50czoge1xcbiAgICAgICAgICAgIEVkaXRvcixcXG4gICAgICAgICAgICBQaG90b0xvYWRlclxcbiAgICAgICAgfSxcXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIHBvc3Q6IHtcXG4gICAgICAgICAgICAgICAgICAgIGlkOiB2bS4kcm91dGUucGFyYW1zLmlkLFxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICAgICAgbGV0IG1vZGVsSWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XFxuICAgICAgICAgICAgaWYgKG1vZGVsSWQgIT0gMCkge1xcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvcG9zdC8nKyBtb2RlbElkKS50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSBlPy5yZXNwb25zZT8uZXJyb3IgfHwgJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAnO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGNyZWF0ZSgpIHtcXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy9wb3N0JywgdGhpcy5wb3N0KVxcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSByLmRhdGEubWVzc2FnZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6IFxcXCJwb3N0XFxcIiwgcGFyYW1zOiB7aWQ6IHIuZGF0YS5kYXRhLmlkfX0pO1xcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5yZXNwb25zZSAmJiBlLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWVzc2FnZXMpLmZvckVhY2goKGspPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1trXSA9IGVycm9yc1trXT8uWzBdIHx8ICcnO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4gICAgLmRlc2NyaXB0aW9uIC52LXRleHQtZmllbGRfX3Nsb3QgdGV4dGFyZWEge1xcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgIC5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YWZ0ZXIgLFxcbiAgICAuZGVzY3JpcHRpb24udi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmJlZm9yZXtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjQ2ZmQ4ZDlcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9qdXJhMTIwNTk2L1BocHN0b3JtUHJvamVjdHMvc2thc3kvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjQ2ZmQ4ZDknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjQ2ZmQ4ZDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjQ2ZmQ4ZDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjQ2ZmQ4ZDkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjQ2ZmQ4ZDknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Bvc3RFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZjY0N2Y1YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qb3N0RWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Bvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Qb3N0RWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvanVyYTEyMDU5Ni9QaHBzdG9ybVByb2plY3RzL3NrYXN5L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRmNjQ3ZjVhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRmNjQ3ZjVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRmNjQ3ZjVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qb3N0RWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGY2NDdmNWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGY2NDdmNWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Qb3N0RWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY2FyZFwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtblwiLFxuICAgICAgYXR0cnM6IHsgXCJqdXN0aWZ5LWNlbnRlclwiOiBcIlwiLCBcImFsaWduLWNlbnRlclwiOiBcIlwiLCBlbGV2YXRpb246IFwiMFwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJwaG90by1pbnB1dFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICAgIGlkOiBcImZpbGVzXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiYXphelwiLFxuICAgICAgICAgIGFjY2VwdDogXCJpbWFnZS9qcGVnLGltYWdlL3BuZyxpbWFnZS9qcGdcIlxuICAgICAgICB9LFxuICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5hZGRQaG90byB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBteS0yXCIsIG9uOiB7IGNsaWNrOiBfdm0uY2xpY2tPbklucHV0IH0gfSxcbiAgICAgICAgW192bS5fdihcItCU0L7QsdCw0LLQuNGC0Ywg0YTQvtGC0L7Qs9GA0LDRhNC40Y5cIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5sb2FkZWRQaG90b3MubGVuZ3RoXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ1c2VyLXBob3RvLW1vZHVsZVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJvdXNlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubixcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5uID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmxvYWRlZFBob3RvcywgZnVuY3Rpb24ocGhvdG8sIGkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInYtY2Fyb3VzZWwtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBwaG90bywgY29udGFpbjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY292ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9LFxuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICBfdm0uJHJvdXRlLnBhcmFtcy5pZCA9PSAwXG4gICAgICAgICAgICAgID8gXCLQlNC+0LHQsNCy0LvQtdC90LjQtSDQvdC+0LLQvtGB0YLQuFwiXG4gICAgICAgICAgICAgIDogXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC90L7QstC+0YHRgtC4XCJcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBuYW1lOiBcInRpdGxlXCIsXG4gICAgICAgICAgbGFiZWw6IFwi0JfQsNCz0L7Qu9C+0LLQvtC6XCIsXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMudGl0bGVcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnBvc3QudGl0bGUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBvc3QsIFwidGl0bGVcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJwb3N0LnRpdGxlXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHRhcmVhXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24gXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgIGxhYmVsOiBcItCe0L/QuNGB0LDQvdC40LVcIixcbiAgICAgICAgICBoaW50OiBcIkhpbnQgdGV4dFwiLFxuICAgICAgICAgIHZhbHVlOiBcIiBcIixcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5kZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImVkaXRvclwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm10LTJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcImFwaS1rZXlcIjogXCJrYXByMGtoMHYzdnNjbmtwcHN4Z2lnOTh2ZjZtZ2l0YWlpOGF1dzNwMnBpbjFjNXRcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0ucG9zdC5kZXNjcmlwdGlvbixcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0ucG9zdCwgXCJkZXNjcmlwdGlvblwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInBvc3QuZGVzY3JpcHRpb25cIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS4kcm91dGUucGFyYW1zLmlkID4gMCA/IF9jKFwicGhvdG8tbG9hZGVyXCIpIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLiRyb3V0ZS5wYXJhbXMuaWQgPT0gMFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlLWJ0blwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICEoX3ZtLnBvc3QuZGVzY3JpcHRpb24gJiYgX3ZtLnBvc3QudGl0bGUpLFxuICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jcmVhdGUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLXBsdXNcIildKV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlLWJ0blwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJzdWNjZXNzXCIsIGZhYjogXCJcIiwgZGFyazogXCJcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktY2hlY2stb3V0bGluZVwiKV0pXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjE4NWRkMmFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjQ2ZmQ4ZDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjQ2ZmQ4ZDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjE5YTRkNTQ2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0RWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==