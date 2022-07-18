(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_UserPostEdit_vue"],{

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
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'photo-loader',
  props: {
    radius: {
      type: Number
    },
    one: {
      type: Boolean,
      "default": false
    }
  },
  components: {},
  data: function data() {
    return {
      n: 0,
      photo: '',
      loadedPhotos: [],
      carouselPhotos: [],
      fileImg: null
    };
  },
  methods: {
    getPhotos: function getPhotos() {
      return this.loadedPhotos;
    },
    getFirst: function getFirst() {
      return this.loadedPhotos[0];
    },
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

      this.carouselPhotos.push(URL.createObjectURL(this.fileImg));
      this.loadedPhotos.push(this.fileImg);
      this.n = this.loadedPhotos.length - 1;
      this.fileImg = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPostEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPostEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UserPostEdit",
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
      window.axios.get('/user/post/' + modelId).then(function (response) {
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

      window.axios.post('/user/post', this.post).then(function (r) {
        _this2.$router.push({
          name: "upost",
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
    },
    update: function update() {
      var _this3 = this;

      window.axios.put('/user/post/' + this.post.id, this.post).then(function (r) {
        var newPhotos = _this3.$refs.loader.getPhotos();

        if (newPhotos.length) {
          var formData = new FormData();
          newPhotos.forEach(function (photo, i) {
            formData.append('post_photos[' + i + ']', photo, photo.name);
          });
          formData.append('_method', 'PUT');

          try {
            window.axios.post('/user/post/' + _this3.post.id, formData);
          } catch (e) {
            _this3.$root.$children[0].snackbarText = "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438";
            _this3.$root.$children[0].snackbar = true;
          }
        }

        _this3.$router.push({
          name: "uposts"
        });
      })["catch"](function (e) {
        console.log(e);

        if (e.response && e.response.status === 422) {
          var errors = e.response.data.errors;
          Object.keys(_this3.messages).forEach(function (k) {
            var _errors$k2;

            _this3.messages[k] = ((_errors$k2 = errors[k]) === null || _errors$k2 === void 0 ? void 0 : _errors$k2[0]) || '';
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.photo-input[data-v-646fd8d9] {\n    position: absolute;\n    visibility: hidden;\n}\n.user-photo[data-v-646fd8d9] {\n    border-radius: 200px;\n    width: 300px;\n    height: auto;\n    max-height: 500px;\n    border: 1px solid #01aefe;\n}\n.user-photo-module[data-v-646fd8d9] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/photo-loader.vue"],"names":[],"mappings":";AA2FA;IACA,kBAAA;IACA,kBAAA;AACA;AAEA;IACA,oBAAA;IACA,YAAA;IACA,YAAA;IACA,iBAAA;IACA,yBAAA;AACA;AAEA;IACA,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;AACA","sourcesContent":["<template>\n    <v-card class=\"d-flex flex-column\" justify-center align-center elevation=\"0\">\n        <input\n                type=\"file\"\n                id=\"files\"\n                @change=\"addPhoto\"\n                class=\"photo-input\"\n                placeholder=\"azaz\"\n                accept=\"image/jpeg,image/png,image/jpg\"\n        />\n\n        <v-btn class=\"btn my-2\" @click=\"clickOnInput\" v-if=\"!one || !carouselPhotos.length\">Добавить фотографию</v-btn>\n        <div v-if=\"one\" class=\"text-center\">{{loadedPhotos[0].name}}</div>\n        <div v-if=\"!one && carouselPhotos.length\" class=\"user-photo-module\">\n            <v-carousel v-model=\"n\">\n                <v-carousel-item\n                        v-for=\"(photo, i) in carouselPhotos\"\n                        :key=\"i\"\n                        :src=\"photo\"\n                        contain\n                >\n                </v-carousel-item>\n            </v-carousel>\n        </div>\n    </v-card>\n</template>\n\n<script>\n\n    export default {\n        name: 'photo-loader',\n        props: {\n            radius: {\n                type: Number,\n            },\n            one: {\n                type: Boolean,\n                default: false,\n            }\n        },\n        components: {},\n        data() {\n            return {\n                n: 0,\n                photo: '',\n                loadedPhotos: [],\n                carouselPhotos:[],\n                fileImg: null,\n            }\n        },\n        methods: {\n            getPhotos() {\n                return this.loadedPhotos;\n            },\n            getFirst() {\n                return this.loadedPhotos[0];\n            },\n            returnFormData(val) {\n                this.$emit('save-photo', val)\n            },\n            updatePhoto(val) {\n                this.photo = val\n                this.showCropperDialog = false\n            },\n            clickOnInput() {\n                document.getElementById('files').files = (new DataTransfer()).files;\n                document.getElementById('files').click()\n\n            },\n            addPhoto(event) {\n                this.fileImg = event.target.files[0]\n                if (this.fileImg.size > 5024000) {\n                    this.$root.$children[0].snackbarText = 'Размер файла не может быть больше 5МБ'\n                    this.$root.$children[0].snackbar = true\n                    return;\n                }\n                if(this.loadedPhotos.length > 10) {\n                    this.$root.$children[0].snackbarText = 'Вы не можете загрузить больше 10 фотографий'\n                    this.$root.$children[0].snackbar = true\n                    return;\n                }\n                this.carouselPhotos.push(URL.createObjectURL(this.fileImg))\n                this.loadedPhotos.push(this.fileImg)\n                this.n = this.loadedPhotos.length-1\n                this.fileImg = null;\n            },\n        },\n    }\n</script>\n\n<style scoped>\n    .photo-input {\n        position: absolute;\n        visibility: hidden;\n    }\n\n    .user-photo {\n        border-radius: 200px;\n        width: 300px;\n        height: auto;\n        max-height: 500px;\n        border: 1px solid #01aefe;\n    }\n\n    .user-photo-module {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPostEdit.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPostEdit.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.description .v-text-field__slot textarea {\n    display: none !important;\n}\n.description.v-text-field>.v-input__control>.v-input__slot:after ,\n.description.v-text-field>.v-input__control>.v-input__slot:before{\n    display: none !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/UserPostEdit.vue"],"names":[],"mappings":";AAmIA;IACA,wBAAA;AACA;AACA;;IAEA,wBAAA;AACA","sourcesContent":["<template>\n    <v-container\n            class=\"cover\">\n        <v-toolbar-title align=\"center\" justify=\"center\" class=\"mb-2\"\n        v-text=\"$route.params.id  == 0 ? 'Добавление обращения' :  'Редактирование обращения'\">\n        </v-toolbar-title>\n        <v-text-field\n            type=\"text\"\n            name=\"title\"\n            label=\"Заголовок\"\n            v-model=\"post.title\"\n            :error-messages=\"messages.title\"\n            >\n        </v-text-field>\n        <v-textarea\n                name=\"description\"\n                label=\"Описание\"\n                hint=\"Hint text\"\n                :value=\"' '\"\n                class=\"description \"\n                :error-messages=\"messages.description\"\n        ></v-textarea>\n        <editor\n                api-key=\"kapr0kh0v3vscnkppsxgig98vf6mgitaii8auw3p2pin1c5t\"\n                class=\"mt-2\"\n                v-model=\"post.description\"\n        >\n        </editor>\n        <v-spacer/>\n        <photo-loader v-if=\"$route.params.id > 0\" ref=\"loader\"></photo-loader>\n        <v-btn class=\"save-btn\"\n               v-if=\"$route.params.id == 0\"\n               color=\"success\"\n               fab\n               @click=\"create\"\n               :disabled=\"!(post.description && post.title)\"\n               dark>\n            <v-icon>mdi-plus</v-icon>\n        </v-btn>\n        <v-btn class=\"save-btn\"\n               v-else\n               @click=\"update\"\n               color=\"success\"\n               fab\n               dark>\n            <v-icon>mdi-check-outline</v-icon>\n        </v-btn>\n    </v-container>\n</template>\n\n<script>\n    import Editor from '@tinymce/tinymce-vue';\n    import PhotoLoader from '@/components/photo-loader'\n    export default {\n        name: \"UserPostEdit\",\n        components: {\n            Editor,\n            PhotoLoader\n        },\n        data: (vm) => {\n            return {\n                post: {\n                    id: vm.$route.params.id,\n                    title: '',\n                    description: '',\n                },\n                messages: {\n                    title: '',\n                    description: '',\n                }\n            }\n        },\n        mounted() {\n            let modelId = this.$route.params.id;\n            if (modelId != 0) {\n                window.axios.get('/user/post/'+ modelId).then((response) => {\n                    this.post = response.data.data;\n                }).catch((e) => {\n                    console.log(e);\n                    this.$root.$children[0].snackbarText = e?.response?.error || 'Произошла ошибка';\n                    this.$root.$children[0].snackbar = true;\n                });\n            }\n        },\n        methods: {\n            create() {\n                window.axios.post('/user/post', this.post)\n                    .then((r) => {\n                        this.$router.push({name: \"upost\", params: {id: r.data.data.id}});\n                    }).catch((e) => {\n                    if (e.response && e.response.status === 422) {\n                        let errors = e.response.data.errors\n                        Object.keys(this.messages).forEach((k)=> {\n                            this.messages[k] = errors[k]?.[0] || '';\n                        });\n                    }\n                })\n            },\n             update() {\n                window.axios.put('/user/post/'+ this.post.id, this.post)\n                    .then((r) => {\n                        let newPhotos = this.$refs.loader.getPhotos();\n                        if (newPhotos.length) {\n                            const formData = new FormData()\n                            newPhotos.forEach((photo, i) => {\n                                formData.append('post_photos['+i+']', photo, photo.name)\n                            })\n                            formData.append('_method', 'PUT')\n                            try {\n                                window.axios.post('/user/post/'+this.post.id, formData)\n                            } catch (e) {\n                                this.$root.$children[0].snackbarText =  `Ошибка сохранения фотографии`\n                                this.$root.$children[0].snackbar = true\n                            }\n                        }\n                        this.$router.push({name: \"uposts\"});\n                    }).catch((e) => {\n                    console.log(e);\n                    if (e.response && e.response.status === 422) {\n                        let errors = e.response.data.errors\n                        Object.keys(this.messages).forEach((k)=> {\n                            this.messages[k] = errors[k]?.[0] || '';\n                        });\n                    }\n                })\n            }\n        }\n    }\n</script>\n\n<style>\n    .description .v-text-field__slot textarea {\n        display: none !important;\n    }\n    .description.v-text-field>.v-input__control>.v-input__slot:after ,\n    .description.v-text-field>.v-input__control>.v-input__slot:before{\n        display: none !important;\n    }\n</style>"],"sourceRoot":""}]);
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

/***/ "./resources/js/pages/UserPostEdit.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/UserPostEdit.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserPostEdit_vue_vue_type_template_id_32237184___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserPostEdit.vue?vue&type=template&id=32237184& */ "./resources/js/pages/UserPostEdit.vue?vue&type=template&id=32237184&");
/* harmony import */ var _UserPostEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPostEdit.vue?vue&type=script&lang=js& */ "./resources/js/pages/UserPostEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _UserPostEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserPostEdit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/UserPostEdit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _UserPostEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserPostEdit_vue_vue_type_template_id_32237184___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserPostEdit_vue_vue_type_template_id_32237184___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/UserPostEdit.vue"
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

/***/ "./resources/js/pages/UserPostEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/UserPostEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPostEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPostEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPostEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPostEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/pages/UserPostEdit.vue?vue&type=template&id=32237184&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/UserPostEdit.vue?vue&type=template&id=32237184& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPostEdit_vue_vue_type_template_id_32237184___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPostEdit_vue_vue_type_template_id_32237184___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPostEdit_vue_vue_type_template_id_32237184___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPostEdit.vue?vue&type=template&id=32237184& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPostEdit.vue?vue&type=template&id=32237184&");


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

/***/ "./resources/js/pages/UserPostEdit.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/UserPostEdit.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPostEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPostEdit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPostEdit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPostEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPostEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPostEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPostEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
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
      !_vm.one || !_vm.carouselPhotos.length
        ? _c(
            "v-btn",
            { staticClass: "btn my-2", on: { click: _vm.clickOnInput } },
            [_vm._v("Добавить фотографию")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.one
        ? _c("div", { staticClass: "text-center" }, [
            _vm._v(_vm._s(_vm.loadedPhotos[0].name))
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.one && _vm.carouselPhotos.length
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
                _vm._l(_vm.carouselPhotos, function(photo, i) {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPostEdit.vue?vue&type=template&id=32237184&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPostEdit.vue?vue&type=template&id=32237184& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
              ? "Добавление обращения"
              : "Редактирование обращения"
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
      _vm.$route.params.id > 0
        ? _c("photo-loader", { ref: "loader" })
        : _vm._e(),
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
              attrs: { color: "success", fab: "", dark: "" },
              on: { click: _vm.update }
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPostEdit.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPostEdit.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPostEdit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPostEdit.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("736126fd", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1NjcmlwdExvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1RpbnlNQ0UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGlueW1jZS90aW55bWNlLXZ1ZS9saWIvY2pzL21haW4vdHMvY29tcG9uZW50cy9FZGl0b3JQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0RWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZT82NmEwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Vc2VyUG9zdEVkaXQudnVlP2VkOGEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlPzI2ZWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0RWRpdC52dWU/YTRjNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlPzIxNzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0RWRpdC52dWU/NDBhZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlPzc1NTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0RWRpdC52dWU/MWE2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELGNBQWMsbUJBQU8sQ0FBQyw2RUFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGFBQWEsRUFBRTtBQUMxRTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7Ozs7Ozs7Ozs7O0FDMURQO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsNkJBQTZCLGtEQUFrRCxxQkFBTSxFQUFFO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOzs7Ozs7Ozs7Ozs7QUNkTDtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDBDQUEwQyw0QkFBNEIsRUFBRSxvQ0FBb0M7QUFDN0ksa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELDJCQUEyQixFQUFFO0FBQ3ZGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsa0NBQWtDO0FBQ2hGLEtBQUs7QUFDTDtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRkFBK0Ysa0NBQWtDO0FBQ2pJO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLDBDQUEwQyw4Q0FBOEM7QUFDeEYseUJBQXlCOzs7Ozs7Ozs7Ozs7QUM3SVo7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELHFCQUFxQixtQkFBTyxDQUFDLDRGQUFpQjtBQUM5QyxnQkFBZ0IsbUJBQU8sQ0FBQyxrRkFBWTtBQUNwQyxjQUFjLG1CQUFPLENBQUMsOEVBQVU7QUFDaEMsd0JBQXdCLG1CQUFPLENBQUMsNEdBQW1CO0FBQ25EO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0w7QUFDQSxpQ0FBaUM7QUFDakMsd0NBQXdDLHFCQUFxQjtBQUM3RDtBQUNBLDRDQUE0QywyQ0FBMkMsRUFBRTtBQUN6RjtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywyQ0FBMkM7QUFDL0UsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7QUMzQmE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMscUdBQXFCO0FBQzVDLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNtQmY7QUFDQSxzQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQURBLEtBREE7QUFJQTtBQUNBLG1CQURBO0FBRUE7QUFGQTtBQUpBLEdBRkE7QUFXQSxnQkFYQTtBQVlBLE1BWkEsa0JBWUE7QUFDQTtBQUNBLFVBREE7QUFFQSxlQUZBO0FBR0Esc0JBSEE7QUFJQSx3QkFKQTtBQUtBO0FBTEE7QUFPQSxHQXBCQTtBQXFCQTtBQUNBLGFBREEsdUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxZQUpBLHNCQUlBO0FBQ0E7QUFDQSxLQU5BO0FBT0Esa0JBUEEsMEJBT0EsR0FQQSxFQU9BO0FBQ0E7QUFDQSxLQVRBO0FBVUEsZUFWQSx1QkFVQSxHQVZBLEVBVUE7QUFDQTtBQUNBO0FBQ0EsS0FiQTtBQWNBLGdCQWRBLDBCQWNBO0FBQ0E7QUFDQTtBQUVBLEtBbEJBO0FBbUJBLFlBbkJBLG9CQW1CQSxLQW5CQSxFQW1CQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkNBO0FBckJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNzQkE7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUNBLHFFQURBO0FBRUE7QUFGQSxHQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSxpQkFGQTtBQUdBO0FBSEEsT0FEQTtBQU1BO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBTkE7QUFXQSxHQWxCQTtBQW1CQSxTQW5CQSxxQkFtQkE7QUFBQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLFdBRUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQU5BO0FBT0E7QUFDQSxHQTlCQTtBQStCQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQSxpREFDQSxJQURBLENBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxPQUhBLFdBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBLFdBRkE7QUFHQTtBQUNBLE9BVkE7QUFXQSxLQWJBO0FBY0EsVUFkQSxvQkFjQTtBQUFBOztBQUNBLGdFQUNBLElBREEsQ0FDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQTtBQUdBOztBQUNBO0FBQ0E7QUFDQSxXQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQSxPQWpCQSxXQWlCQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0EsV0FGQTtBQUdBO0FBQ0EsT0F6QkE7QUEwQkE7QUF6Q0E7QUEvQkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsMkVBQTJFLHlCQUF5Qix5QkFBeUIsR0FBRyxnQ0FBZ0MsMkJBQTJCLG1CQUFtQixtQkFBbUIsd0JBQXdCLGdDQUFnQyxHQUFHLHVDQUF1QyxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsR0FBRyxTQUFTLHVHQUF1RyxNQUFNLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLHNqQkFBc2pCLHNCQUFzQixpZkFBaWYsaURBQWlELHVCQUF1Qiw4Q0FBOEMscUJBQXFCLGdGQUFnRixXQUFXLHlCQUF5QixtQkFBbUIsc0JBQXNCLHlLQUF5SyxXQUFXLHFCQUFxQiwyQkFBMkIsMkNBQTJDLGVBQWUsMkJBQTJCLDhDQUE4QyxlQUFlLG9DQUFvQyw4REFBOEQsaUNBQWlDLGlHQUFpRywrQkFBK0Isc0ZBQXNGLDJFQUEyRSxnQ0FBZ0MsMEdBQTBHLDhMQUE4TCxtQkFBbUIscURBQXFELG9NQUFvTSxtQkFBbUIsOE5BQThOLGVBQWUsWUFBWSxRQUFRLGlEQUFpRCw2QkFBNkIsNkJBQTZCLE9BQU8scUJBQXFCLCtCQUErQix1QkFBdUIsdUJBQXVCLDRCQUE0QixvQ0FBb0MsT0FBTyw0QkFBNEIsd0JBQXdCLGlDQUFpQyxrQ0FBa0MsOEJBQThCLE9BQU8sK0JBQStCO0FBQzVtSTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsdUZBQXVGLCtCQUErQixHQUFHLHdJQUF3SSwrQkFBK0IsR0FBRyxTQUFTLGtHQUFrRyxNQUFNLFdBQVcsS0FBSyxNQUFNLFdBQVcsMnREQUEydEQsK0VBQStFLHdEQUF3RCx5REFBeUQsMEJBQTBCLHNCQUFzQix5QkFBeUIsdUlBQXVJLDhCQUE4Qix5RkFBeUYsZUFBZSxXQUFXLHNCQUFzQixrREFBa0QsaUNBQWlDLCtFQUErRSxxREFBcUQsbUJBQW1CLGdCQUFnQixxQ0FBcUMsc0dBQXNHLDhEQUE4RCxtQkFBbUIsRUFBRSxlQUFlLFdBQVcscUJBQXFCLHdCQUF3QixnR0FBZ0csNkNBQTZDLDBCQUEwQixvQkFBb0IsRUFBRSx1QkFBdUIsZ0JBQWdCLG9FQUFvRSxpSUFBaUksc0VBQXNFLDJCQUEyQixFQUFFLHVCQUF1QixtQkFBbUIsZ0JBQWdCLDBCQUEwQiw4R0FBOEcsd0VBQXdFLGlEQUFpRCw0SEFBNEgseUhBQXlILG1HQUFtRyx3SEFBd0gsWUFBWSxnTkFBZ04sMkJBQTJCLDZDQUE2QyxpQkFBaUIsRUFBRSx1QkFBdUIsZ0JBQWdCLHFDQUFxQyxvRUFBb0UsaUlBQWlJLHNFQUFzRSwyQkFBMkIsRUFBRSx1QkFBdUIsbUJBQW1CLGdCQUFnQixXQUFXLE9BQU8sdUVBQXVFLG1DQUFtQyxPQUFPLGdKQUFnSixtQ0FBbUMsT0FBTyw2QkFBNkI7QUFDNWpMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGdFO0FBQ3ZDO0FBQ0w7QUFDM0QsQ0FBZ0c7OztBQUdoRztBQUM2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsZ0dBQU07QUFDUixFQUFFLHlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkM0RTtBQUMzQjtBQUNMO0FBQzNELENBQXdFOzs7QUFHeEU7QUFDNkY7QUFDN0YsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLG9GQUFNO0FBQ1IsRUFBRSw2RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDdU0sQ0FBQyxpRUFBZSw4TUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcEIsQ0FBQyxpRUFBZSw4TUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ExTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGFBQWE7QUFDYixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtCQUErQiwwQkFBMEIsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVCQUF1QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUNBQXFDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdCQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQ0FBc0M7QUFDNUQsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xHQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyw4dUJBQXVYO0FBQzdZO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwySkFBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7OztBQ1hmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHlyQkFBK1Y7QUFDclg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJKQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfVXNlclBvc3RFZGl0X3Z1ZTUwMzg3MjkyMGE3YzFlYmNmNTFmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVXRpbHNfMSA9IHJlcXVpcmUoXCIuL1V0aWxzXCIpO1xudmFyIGNyZWF0ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxpc3RlbmVyczogW10sXG4gICAgICAgIHNjcmlwdElkOiBVdGlsc18xLnV1aWQoJ3Rpbnktc2NyaXB0JyksXG4gICAgICAgIHNjcmlwdExvYWRlZDogZmFsc2VcbiAgICB9O1xufTtcbnZhciBDcmVhdGVTY3JpcHRMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXRlID0gY3JlYXRlU3RhdGUoKTtcbiAgICB2YXIgaW5qZWN0U2NyaXB0VGFnID0gZnVuY3Rpb24gKHNjcmlwdElkLCBkb2MsIHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNjcmlwdFRhZyA9IGRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0VGFnLnJlZmVycmVyUG9saWN5ID0gJ29yaWdpbic7XG4gICAgICAgIHNjcmlwdFRhZy50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHRUYWcuaWQgPSBzY3JpcHRJZDtcbiAgICAgICAgc2NyaXB0VGFnLnNyYyA9IHVybDtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzY3JpcHRUYWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZXIpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NyaXB0VGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVyKTtcbiAgICAgICAgaWYgKGRvYy5oZWFkKSB7XG4gICAgICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHRUYWcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgbG9hZCA9IGZ1bmN0aW9uIChkb2MsIHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHN0YXRlLnNjcmlwdExvYWRlZCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmICghZG9jLmdldEVsZW1lbnRCeUlkKHN0YXRlLnNjcmlwdElkKSkge1xuICAgICAgICAgICAgICAgIGluamVjdFNjcmlwdFRhZyhzdGF0ZS5zY3JpcHRJZCwgZG9jLCB1cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbigpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc2NyaXB0TG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gT25seSB0byBiZSB1c2VkIGJ5IHRlc3RzLlxuICAgIHZhciByZWluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YXRlID0gY3JlYXRlU3RhdGUoKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWQ6IGxvYWQsXG4gICAgICAgIHJlaW5pdGlhbGl6ZTogcmVpbml0aWFsaXplXG4gICAgfTtcbn07XG52YXIgU2NyaXB0TG9hZGVyID0gQ3JlYXRlU2NyaXB0TG9hZGVyKCk7XG5leHBvcnRzLlNjcmlwdExvYWRlciA9IFNjcmlwdExvYWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCk7IH07XG52YXIgZ2V0VGlueW1jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2xvYmFsID0gZ2V0R2xvYmFsKCk7XG4gICAgcmV0dXJuIGdsb2JhbCAmJiBnbG9iYWwudGlueW1jZSA/IGdsb2JhbC50aW55bWNlIDogbnVsbDtcbn07XG5leHBvcnRzLmdldFRpbnltY2UgPSBnZXRUaW55bWNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdmFsaWRFdmVudHMgPSBbXG4gICAgJ29uQWN0aXZhdGUnLFxuICAgICdvbkFkZFVuZG8nLFxuICAgICdvbkJlZm9yZUFkZFVuZG8nLFxuICAgICdvbkJlZm9yZUV4ZWNDb21tYW5kJyxcbiAgICAnb25CZWZvcmVHZXRDb250ZW50JyxcbiAgICAnb25CZWZvcmVSZW5kZXJVSScsXG4gICAgJ29uQmVmb3JlU2V0Q29udGVudCcsXG4gICAgJ29uQmVmb3JlUGFzdGUnLFxuICAgICdvbkJsdXInLFxuICAgICdvbkNoYW5nZScsXG4gICAgJ29uQ2xlYXJVbmRvcycsXG4gICAgJ29uQ2xpY2snLFxuICAgICdvbkNvbnRleHRNZW51JyxcbiAgICAnb25Db3B5JyxcbiAgICAnb25DdXQnLFxuICAgICdvbkRibGNsaWNrJyxcbiAgICAnb25EZWFjdGl2YXRlJyxcbiAgICAnb25EaXJ0eScsXG4gICAgJ29uRHJhZycsXG4gICAgJ29uRHJhZ0Ryb3AnLFxuICAgICdvbkRyYWdFbmQnLFxuICAgICdvbkRyYWdHZXN0dXJlJyxcbiAgICAnb25EcmFnT3ZlcicsXG4gICAgJ29uRHJvcCcsXG4gICAgJ29uRXhlY0NvbW1hbmQnLFxuICAgICdvbkZvY3VzJyxcbiAgICAnb25Gb2N1c0luJyxcbiAgICAnb25Gb2N1c091dCcsXG4gICAgJ29uR2V0Q29udGVudCcsXG4gICAgJ29uSGlkZScsXG4gICAgJ29uSW5pdCcsXG4gICAgJ29uS2V5RG93bicsXG4gICAgJ29uS2V5UHJlc3MnLFxuICAgICdvbktleVVwJyxcbiAgICAnb25Mb2FkQ29udGVudCcsXG4gICAgJ29uTW91c2VEb3duJyxcbiAgICAnb25Nb3VzZUVudGVyJyxcbiAgICAnb25Nb3VzZUxlYXZlJyxcbiAgICAnb25Nb3VzZU1vdmUnLFxuICAgICdvbk1vdXNlT3V0JyxcbiAgICAnb25Nb3VzZU92ZXInLFxuICAgICdvbk1vdXNlVXAnLFxuICAgICdvbk5vZGVDaGFuZ2UnLFxuICAgICdvbk9iamVjdFJlc2l6ZVN0YXJ0JyxcbiAgICAnb25PYmplY3RSZXNpemVkJyxcbiAgICAnb25PYmplY3RTZWxlY3RlZCcsXG4gICAgJ29uUGFzdGUnLFxuICAgICdvblBvc3RQcm9jZXNzJyxcbiAgICAnb25Qb3N0UmVuZGVyJyxcbiAgICAnb25QcmVQcm9jZXNzJyxcbiAgICAnb25Qcm9ncmVzc1N0YXRlJyxcbiAgICAnb25SZWRvJyxcbiAgICAnb25SZW1vdmUnLFxuICAgICdvblJlc2V0JyxcbiAgICAnb25TYXZlQ29udGVudCcsXG4gICAgJ29uU2VsZWN0aW9uQ2hhbmdlJyxcbiAgICAnb25TZXRBdHRyaWInLFxuICAgICdvblNldENvbnRlbnQnLFxuICAgICdvblNob3cnLFxuICAgICdvblN1Ym1pdCcsXG4gICAgJ29uVW5kbycsXG4gICAgJ29uVmlzdWFsQWlkJ1xuXTtcbnZhciBpc1ZhbGlkS2V5ID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdmFsaWRFdmVudHMubWFwKGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gZXZlbnQudG9Mb3dlckNhc2UoKTsgfSkuaW5kZXhPZihrZXkudG9Mb3dlckNhc2UoKSkgIT09IC0xOyB9O1xuZXhwb3J0cy5pc1ZhbGlkS2V5ID0gaXNWYWxpZEtleTtcbnZhciBiaW5kSGFuZGxlcnMgPSBmdW5jdGlvbiAoaW5pdEV2ZW50LCBsaXN0ZW5lcnMsIGVkaXRvcikge1xuICAgIE9iamVjdC5rZXlzKGxpc3RlbmVycylcbiAgICAgICAgLmZpbHRlcihpc1ZhbGlkS2V5KVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gbGlzdGVuZXJzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ29uSW5pdCcpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGluaXRFdmVudCwgZWRpdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVkaXRvci5vbihrZXkuc3Vic3RyaW5nKDIpLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gaGFuZGxlcihlLCBlZGl0b3IpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmV4cG9ydHMuYmluZEhhbmRsZXJzID0gYmluZEhhbmRsZXJzO1xudmFyIGJpbmRNb2RlbEhhbmRsZXJzID0gZnVuY3Rpb24gKGN0eCwgZWRpdG9yKSB7XG4gICAgdmFyIG1vZGVsRXZlbnRzID0gY3R4LiRwcm9wcy5tb2RlbEV2ZW50cyA/IGN0eC4kcHJvcHMubW9kZWxFdmVudHMgOiBudWxsO1xuICAgIHZhciBub3JtYWxpemVkRXZlbnRzID0gQXJyYXkuaXNBcnJheShtb2RlbEV2ZW50cykgPyBtb2RlbEV2ZW50cy5qb2luKCcgJykgOiBtb2RlbEV2ZW50cztcbiAgICBlZGl0b3Iub24obm9ybWFsaXplZEV2ZW50cyA/IG5vcm1hbGl6ZWRFdmVudHMgOiAnY2hhbmdlIGlucHV0IHVuZG8gcmVkbycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3R4LiRlbWl0KCdpbnB1dCcsIGVkaXRvci5nZXRDb250ZW50KHsgZm9ybWF0OiBjdHguJHByb3BzLm91dHB1dEZvcm1hdCB9KSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5iaW5kTW9kZWxIYW5kbGVycyA9IGJpbmRNb2RlbEhhbmRsZXJzO1xudmFyIGluaXRFZGl0b3IgPSBmdW5jdGlvbiAoaW5pdEV2ZW50LCBjdHgsIGVkaXRvcikge1xuICAgIHZhciB2YWx1ZSA9IGN0eC4kcHJvcHMudmFsdWUgPyBjdHguJHByb3BzLnZhbHVlIDogJyc7XG4gICAgdmFyIGluaXRpYWxWYWx1ZSA9IGN0eC4kcHJvcHMuaW5pdGlhbFZhbHVlID8gY3R4LiRwcm9wcy5pbml0aWFsVmFsdWUgOiAnJztcbiAgICBlZGl0b3Iuc2V0Q29udGVudCh2YWx1ZSB8fCAoY3R4LmluaXRpYWxpemVkID8gY3R4LmNhY2hlIDogaW5pdGlhbFZhbHVlKSk7XG4gICAgLy8gQWx3YXlzIGJpbmQgdGhlIHZhbHVlIGxpc3RlbmVyIGluIGNhc2UgdXNlcnMgdXNlIDp2YWx1ZSBpbnN0ZWFkIG9mIHYtbW9kZWxcbiAgICBjdHguJHdhdGNoKCd2YWx1ZScsIGZ1bmN0aW9uICh2YWwsIHByZXZWYWwpIHtcbiAgICAgICAgaWYgKGVkaXRvciAmJiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiB2YWwgIT09IHByZXZWYWwgJiYgdmFsICE9PSBlZGl0b3IuZ2V0Q29udGVudCh7IGZvcm1hdDogY3R4LiRwcm9wcy5vdXRwdXRGb3JtYXQgfSkpIHtcbiAgICAgICAgICAgIGVkaXRvci5zZXRDb250ZW50KHZhbCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBjaGVja3MgaWYgdGhlIHYtbW9kZWwgc2hvcnRoYW5kIGlzIHVzZWQgKHdoaWNoIHNldHMgYW4gdi1vbjppbnB1dCBsaXN0ZW5lcikgYW5kIHRoZW4gYmluZHMgZWl0aGVyXG4gICAgLy8gc3BlY2lmaWVkIHRoZSBldmVudHMgb3IgZGVmYXVsdHMgdG8gXCJjaGFuZ2Uga2V5dXBcIiBldmVudCBhbmQgZW1pdHMgdGhlIGVkaXRvciBjb250ZW50IG9uIHRoYXQgZXZlbnRcbiAgICBpZiAoY3R4LiRsaXN0ZW5lcnMuaW5wdXQpIHtcbiAgICAgICAgYmluZE1vZGVsSGFuZGxlcnMoY3R4LCBlZGl0b3IpO1xuICAgIH1cbiAgICBiaW5kSGFuZGxlcnMoaW5pdEV2ZW50LCBjdHguJGxpc3RlbmVycywgZWRpdG9yKTtcbiAgICBjdHguaW5pdGlhbGl6ZWQgPSB0cnVlO1xufTtcbmV4cG9ydHMuaW5pdEVkaXRvciA9IGluaXRFZGl0b3I7XG52YXIgdW5pcXVlID0gMDtcbnZhciB1dWlkID0gZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCk7XG4gICAgdW5pcXVlKys7XG4gICAgcmV0dXJuIHByZWZpeCArICdfJyArIHJhbmRvbSArIHVuaXF1ZSArIFN0cmluZyh0aW1lKTtcbn07XG5leHBvcnRzLnV1aWQgPSB1dWlkO1xudmFyIGlzVGV4dGFyZWEgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnO1xufTtcbmV4cG9ydHMuaXNUZXh0YXJlYSA9IGlzVGV4dGFyZWE7XG52YXIgbm9ybWFsaXplUGx1Z2luQXJyYXkgPSBmdW5jdGlvbiAocGx1Z2lucykge1xuICAgIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ3VuZGVmaW5lZCcgfHwgcGx1Z2lucyA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwbHVnaW5zKSA/IHBsdWdpbnMgOiBwbHVnaW5zLnNwbGl0KCcgJyk7XG59O1xudmFyIG1lcmdlUGx1Z2lucyA9IGZ1bmN0aW9uIChpbml0UGx1Z2lucywgaW5wdXRQbHVnaW5zKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVBsdWdpbkFycmF5KGluaXRQbHVnaW5zKS5jb25jYXQobm9ybWFsaXplUGx1Z2luQXJyYXkoaW5wdXRQbHVnaW5zKSk7XG59O1xuZXhwb3J0cy5tZXJnZVBsdWdpbnMgPSBtZXJnZVBsdWdpbnM7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7IH07XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2NyaXB0TG9hZGVyXzEgPSByZXF1aXJlKFwiLi4vU2NyaXB0TG9hZGVyXCIpO1xudmFyIFRpbnlNQ0VfMSA9IHJlcXVpcmUoXCIuLi9UaW55TUNFXCIpO1xudmFyIFV0aWxzXzEgPSByZXF1aXJlKFwiLi4vVXRpbHNcIik7XG52YXIgRWRpdG9yUHJvcFR5cGVzXzEgPSByZXF1aXJlKFwiLi9FZGl0b3JQcm9wVHlwZXNcIik7XG52YXIgcmVuZGVySW5saW5lID0gZnVuY3Rpb24gKGgsIGlkLCB0YWdOYW1lKSB7XG4gICAgcmV0dXJuIGgodGFnTmFtZSA/IHRhZ05hbWUgOiAnZGl2Jywge1xuICAgICAgICBhdHRyczogeyBpZDogaWQgfVxuICAgIH0pO1xufTtcbnZhciByZW5kZXJJZnJhbWUgPSBmdW5jdGlvbiAoaCwgaWQpIHtcbiAgICByZXR1cm4gaCgndGV4dGFyZWEnLCB7XG4gICAgICAgIGF0dHJzOiB7IGlkOiBpZCB9LFxuICAgICAgICBzdHlsZTogeyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9XG4gICAgfSk7XG59O1xudmFyIGluaXRpYWxpc2UgPSBmdW5jdGlvbiAoY3R4KSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpbmFsSW5pdCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjdHguJHByb3BzLmluaXQpLCB7IHJlYWRvbmx5OiBjdHguJHByb3BzLmRpc2FibGVkLCBzZWxlY3RvcjogXCIjXCIgKyBjdHguZWxlbWVudElkLCBwbHVnaW5zOiBVdGlsc18xLm1lcmdlUGx1Z2lucyhjdHguJHByb3BzLmluaXQgJiYgY3R4LiRwcm9wcy5pbml0LnBsdWdpbnMsIGN0eC4kcHJvcHMucGx1Z2lucyksIHRvb2xiYXI6IGN0eC4kcHJvcHMudG9vbGJhciB8fCAoY3R4LiRwcm9wcy5pbml0ICYmIGN0eC4kcHJvcHMuaW5pdC50b29sYmFyKSwgaW5saW5lOiBjdHguaW5saW5lRWRpdG9yLCBzZXR1cDogZnVuY3Rpb24gKGVkaXRvcikge1xuICAgICAgICAgICAgY3R4LmVkaXRvciA9IGVkaXRvcjtcbiAgICAgICAgICAgIGVkaXRvci5vbignaW5pdCcsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBVdGlsc18xLmluaXRFZGl0b3IoZSwgY3R4LCBlZGl0b3IpOyB9KTtcbiAgICAgICAgICAgIGlmIChjdHguJHByb3BzLmluaXQgJiYgdHlwZW9mIGN0eC4kcHJvcHMuaW5pdC5zZXR1cCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGN0eC4kcHJvcHMuaW5pdC5zZXR1cChlZGl0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IH0pO1xuICAgIGlmIChVdGlsc18xLmlzVGV4dGFyZWEoY3R4LmVsZW1lbnQpKSB7XG4gICAgICAgIGN0eC5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICAgICAgY3R4LmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cbiAgICBUaW55TUNFXzEuZ2V0VGlueW1jZSgpLmluaXQoZmluYWxJbml0KTtcbn07IH07XG5leHBvcnRzLkVkaXRvciA9IHtcbiAgICBwcm9wczogRWRpdG9yUHJvcFR5cGVzXzEuZWRpdG9yUHJvcHMsXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IHRoaXMuJHByb3BzLmlkIHx8IFV0aWxzXzEudXVpZCgndGlueS12dWUnKTtcbiAgICAgICAgdGhpcy5pbmxpbmVFZGl0b3IgPSAodGhpcy4kcHJvcHMuaW5pdCAmJiB0aGlzLiRwcm9wcy5pbml0LmlubGluZSkgfHwgdGhpcy4kcHJvcHMuaW5saW5lO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBkaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5lZGl0b3Iuc2V0TW9kZSh0aGlzLmRpc2FibGVkID8gJ3JlYWRvbmx5JyA6ICdkZXNpZ24nKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLiRlbDtcbiAgICAgICAgaWYgKFRpbnlNQ0VfMS5nZXRUaW55bWNlKCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGluaXRpYWxpc2UodGhpcykoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBjaGFubmVsID0gdGhpcy4kcHJvcHMuY2xvdWRDaGFubmVsID8gdGhpcy4kcHJvcHMuY2xvdWRDaGFubmVsIDogJzUnO1xuICAgICAgICAgICAgdmFyIGFwaUtleSA9IHRoaXMuJHByb3BzLmFwaUtleSA/IHRoaXMuJHByb3BzLmFwaUtleSA6ICduby1hcGkta2V5JztcbiAgICAgICAgICAgIHZhciBzY3JpcHRTcmMgPSBVdGlsc18xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuJHByb3BzLnRpbnltY2VTY3JpcHRTcmMpID9cbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vY2RuLnRpbnkuY2xvdWQvMS9cIiArIGFwaUtleSArIFwiL3RpbnltY2UvXCIgKyBjaGFubmVsICsgXCIvdGlueW1jZS5taW4uanNcIiA6XG4gICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMudGlueW1jZVNjcmlwdFNyYztcbiAgICAgICAgICAgIFNjcmlwdExvYWRlcl8xLlNjcmlwdExvYWRlci5sb2FkKHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LCBzY3JpcHRTcmMsIGluaXRpYWxpc2UodGhpcykpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChUaW55TUNFXzEuZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBUaW55TUNFXzEuZ2V0VGlueW1jZSgpLnJlbW92ZSh0aGlzLmVkaXRvcik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRlYWN0aXZhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKCF0aGlzLmlubGluZUVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5jYWNoZSA9IHRoaXMuZWRpdG9yLmdldENvbnRlbnQoKTtcbiAgICAgICAgICAgIChfYSA9IFRpbnlNQ0VfMS5nZXRUaW55bWNlKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUodGhpcy5lZGl0b3IpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlubGluZUVkaXRvciAmJiB0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBpbml0aWFsaXNlKHRoaXMpKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5saW5lRWRpdG9yID8gcmVuZGVySW5saW5lKGgsIHRoaXMuZWxlbWVudElkLCB0aGlzLiRwcm9wcy50YWdOYW1lKSA6IHJlbmRlcklmcmFtZShoLCB0aGlzLmVsZW1lbnRJZCk7XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lZGl0b3JQcm9wcyA9IHtcbiAgICBhcGlLZXk6IFN0cmluZyxcbiAgICBjbG91ZENoYW5uZWw6IFN0cmluZyxcbiAgICBpZDogU3RyaW5nLFxuICAgIGluaXQ6IE9iamVjdCxcbiAgICBpbml0aWFsVmFsdWU6IFN0cmluZyxcbiAgICBpbmxpbmU6IEJvb2xlYW4sXG4gICAgbW9kZWxFdmVudHM6IFtTdHJpbmcsIEFycmF5XSxcbiAgICBwbHVnaW5zOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgdGFnTmFtZTogU3RyaW5nLFxuICAgIHRvb2xiYXI6IFtTdHJpbmcsIEFycmF5XSxcbiAgICB2YWx1ZTogU3RyaW5nLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHRpbnltY2VTY3JpcHRTcmM6IFN0cmluZyxcbiAgICBvdXRwdXRGb3JtYXQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBwcm9wID09PSAnaHRtbCcgfHwgcHJvcCA9PT0gJ3RleHQnOyB9XG4gICAgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFZGl0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvRWRpdG9yXCIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRWRpdG9yXzEuRWRpdG9yO1xuIiwiPHRlbXBsYXRlPlxuICAgIDx2LWNhcmQgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW5cIiBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXIgZWxldmF0aW9uPVwiMFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJmaWxlc1wiXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cImFkZFBob3RvXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBob3RvLWlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImF6YXpcIlxuICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlL2pwZWcsaW1hZ2UvcG5nLGltYWdlL2pwZ1wiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHYtYnRuIGNsYXNzPVwiYnRuIG15LTJcIiBAY2xpY2s9XCJjbGlja09uSW5wdXRcIiB2LWlmPVwiIW9uZSB8fCAhY2Fyb3VzZWxQaG90b3MubGVuZ3RoXCI+0JTQvtCx0LDQstC40YLRjCDRhNC+0YLQvtCz0YDQsNGE0LjRjjwvdi1idG4+XG4gICAgICAgIDxkaXYgdi1pZj1cIm9uZVwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57e2xvYWRlZFBob3Rvc1swXS5uYW1lfX08L2Rpdj5cbiAgICAgICAgPGRpdiB2LWlmPVwiIW9uZSAmJiBjYXJvdXNlbFBob3Rvcy5sZW5ndGhcIiBjbGFzcz1cInVzZXItcGhvdG8tbW9kdWxlXCI+XG4gICAgICAgICAgICA8di1jYXJvdXNlbCB2LW1vZGVsPVwiblwiPlxuICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHBob3RvLCBpKSBpbiBjYXJvdXNlbFBob3Rvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwicGhvdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cbiAgICAgICAgICAgIDwvdi1jYXJvdXNlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC92LWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAncGhvdG8tbG9hZGVyJyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHJhZGl1czoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbjogMCxcbiAgICAgICAgICAgICAgICBwaG90bzogJycsXG4gICAgICAgICAgICAgICAgbG9hZGVkUGhvdG9zOiBbXSxcbiAgICAgICAgICAgICAgICBjYXJvdXNlbFBob3RvczpbXSxcbiAgICAgICAgICAgICAgICBmaWxlSW1nOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRQaG90b3MoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVkUGhvdG9zO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldEZpcnN0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRlZFBob3Rvc1swXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXR1cm5Gb3JtRGF0YSh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzYXZlLXBob3RvJywgdmFsKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZVBob3RvKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGhvdG8gPSB2YWxcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDcm9wcGVyRGlhbG9nID0gZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGlja09uSW5wdXQoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVzJykuZmlsZXMgPSAobmV3IERhdGFUcmFuc2ZlcigpKS5maWxlcztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZXMnKS5jbGljaygpXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRQaG90byhldmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVJbWcuc2l6ZSA+IDUwMjQwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gJ9Cg0LDQt9C80LXRgCDRhNCw0LnQu9CwINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQsdC+0LvRjNGI0LUgNdCc0JEnXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9ICfQktGLINC90LUg0LzQvtC20LXRgtC1INC30LDQs9GA0YPQt9C40YLRjCDQsdC+0LvRjNGI0LUgMTAg0YTQvtGC0L7Qs9GA0LDRhNC40LknXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxQaG90b3MucHVzaChVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZUltZykpXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRQaG90b3MucHVzaCh0aGlzLmZpbGVJbWcpXG4gICAgICAgICAgICAgICAgdGhpcy5uID0gdGhpcy5sb2FkZWRQaG90b3MubGVuZ3RoLTFcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbWcgPSBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAucGhvdG8taW5wdXQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAudXNlci1waG90byB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMWFlZmU7XG4gICAgfVxuXG4gICAgLnVzZXItcGhvdG8tbW9kdWxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250YWluZXJcbiAgICAgICAgICAgIGNsYXNzPVwiY292ZXJcIj5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxuICAgICAgICB2LXRleHQ9XCIkcm91dGUucGFyYW1zLmlkICA9PSAwID8gJ9CU0L7QsdCw0LLQu9C10L3QuNC1INC+0LHRgNCw0YnQtdC90LjRjycgOiAgJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L7QsdGA0LDRidC10L3QuNGPJ1wiPlxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJwb3N0LnRpdGxlXCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLnRpdGxlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgPC92LXRleHQtZmllbGQ+XG4gICAgICAgIDx2LXRleHRhcmVhXG4gICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCe0L/QuNGB0LDQvdC40LVcIlxuICAgICAgICAgICAgICAgIGhpbnQ9XCJIaW50IHRleHRcIlxuICAgICAgICAgICAgICAgIDp2YWx1ZT1cIicgJ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGlvbiBcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgPjwvdi10ZXh0YXJlYT5cbiAgICAgICAgPGVkaXRvclxuICAgICAgICAgICAgICAgIGFwaS1rZXk9XCJrYXByMGtoMHYzdnNjbmtwcHN4Z2lnOTh2ZjZtZ2l0YWlpOGF1dzNwMnBpbjFjNXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtMlwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInBvc3QuZGVzY3JpcHRpb25cIlxuICAgICAgICA+XG4gICAgICAgIDwvZWRpdG9yPlxuICAgICAgICA8di1zcGFjZXIvPlxuICAgICAgICA8cGhvdG8tbG9hZGVyIHYtaWY9XCIkcm91dGUucGFyYW1zLmlkID4gMFwiIHJlZj1cImxvYWRlclwiPjwvcGhvdG8tbG9hZGVyPlxuICAgICAgICA8di1idG4gY2xhc3M9XCJzYXZlLWJ0blwiXG4gICAgICAgICAgICAgICB2LWlmPVwiJHJvdXRlLnBhcmFtcy5pZCA9PSAwXCJcbiAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgIEBjbGljaz1cImNyZWF0ZVwiXG4gICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhKHBvc3QuZGVzY3JpcHRpb24gJiYgcG9zdC50aXRsZSlcIlxuICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgPHYtYnRuIGNsYXNzPVwic2F2ZS1idG5cIlxuICAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgICBAY2xpY2s9XCJ1cGRhdGVcIlxuICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgIDx2LWljb24+bWRpLWNoZWNrLW91dGxpbmU8L3YtaWNvbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRWRpdG9yIGZyb20gJ0B0aW55bWNlL3RpbnltY2UtdnVlJztcbiAgICBpbXBvcnQgUGhvdG9Mb2FkZXIgZnJvbSAnQC9jb21wb25lbnRzL3Bob3RvLWxvYWRlcidcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiVXNlclBvc3RFZGl0XCIsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIEVkaXRvcixcbiAgICAgICAgICAgIFBob3RvTG9hZGVyXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwb3N0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB2bS4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGxldCBtb2RlbElkID0gdGhpcy4kcm91dGUucGFyYW1zLmlkO1xuICAgICAgICAgICAgaWYgKG1vZGVsSWQgIT0gMCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy91c2VyL3Bvc3QvJysgbW9kZWxJZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSBlPy5yZXNwb25zZT8uZXJyb3IgfHwgJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL3VzZXIvcG9zdCcsIHRoaXMucG9zdClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiBcInVwb3N0XCIsIHBhcmFtczoge2lkOiByLmRhdGEuZGF0YS5pZH19KTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWVzc2FnZXMpLmZvckVhY2goKGspPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wdXQoJy91c2VyL3Bvc3QvJysgdGhpcy5wb3N0LmlkLCB0aGlzLnBvc3QpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGhvdG9zID0gdGhpcy4kcmVmcy5sb2FkZXIuZ2V0UGhvdG9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UGhvdG9zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQaG90b3MuZm9yRWFjaCgocGhvdG8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwb3N0X3Bob3Rvc1snK2krJ10nLCBwaG90bywgcGhvdG8ubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnX21ldGhvZCcsICdQVVQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvdXNlci9wb3N0LycrdGhpcy5wb3N0LmlkLCBmb3JtRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9ICBg0J7RiNC40LHQutCwINGB0L7RhdGA0LDQvdC10L3QuNGPINGE0L7RgtC+0LPRgNCw0YTQuNC4YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogXCJ1cG9zdHNcIn0pO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWVzc2FnZXMpLmZvckVhY2goKGspPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgLmRlc2NyaXB0aW9uIC52LXRleHQtZmllbGRfX3Nsb3QgdGV4dGFyZWEge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YWZ0ZXIgLFxuICAgIC5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YmVmb3Jle1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuPC9zdHlsZT4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5waG90by1pbnB1dFtkYXRhLXYtNjQ2ZmQ4ZDldIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi51c2VyLXBob3RvW2RhdGEtdi02NDZmZDhkOV0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDFhZWZlO1xcbn1cXG4udXNlci1waG90by1tb2R1bGVbZGF0YS12LTY0NmZkOGQ5XSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEyRkE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0FBQ0E7QUFFQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0FBQ0E7QUFFQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDx2LWNhcmQgY2xhc3M9XFxcImQtZmxleCBmbGV4LWNvbHVtblxcXCIganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIGVsZXZhdGlvbj1cXFwiMFxcXCI+XFxuICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwiZmlsZVxcXCJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImZpbGVzXFxcIlxcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVxcXCJhZGRQaG90b1xcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcInBob3RvLWlucHV0XFxcIlxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiYXphelxcXCJcXG4gICAgICAgICAgICAgICAgYWNjZXB0PVxcXCJpbWFnZS9qcGVnLGltYWdlL3BuZyxpbWFnZS9qcGdcXFwiXFxuICAgICAgICAvPlxcblxcbiAgICAgICAgPHYtYnRuIGNsYXNzPVxcXCJidG4gbXktMlxcXCIgQGNsaWNrPVxcXCJjbGlja09uSW5wdXRcXFwiIHYtaWY9XFxcIiFvbmUgfHwgIWNhcm91c2VsUGhvdG9zLmxlbmd0aFxcXCI+0JTQvtCx0LDQstC40YLRjCDRhNC+0YLQvtCz0YDQsNGE0LjRjjwvdi1idG4+XFxuICAgICAgICA8ZGl2IHYtaWY9XFxcIm9uZVxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj57e2xvYWRlZFBob3Rvc1swXS5uYW1lfX08L2Rpdj5cXG4gICAgICAgIDxkaXYgdi1pZj1cXFwiIW9uZSAmJiBjYXJvdXNlbFBob3Rvcy5sZW5ndGhcXFwiIGNsYXNzPVxcXCJ1c2VyLXBob3RvLW1vZHVsZVxcXCI+XFxuICAgICAgICAgICAgPHYtY2Fyb3VzZWwgdi1tb2RlbD1cXFwiblxcXCI+XFxuICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsLWl0ZW1cXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKHBob3RvLCBpKSBpbiBjYXJvdXNlbFBob3Rvc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XFxcInBob3RvXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5cXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cXG4gICAgICAgICAgICA8L3YtY2Fyb3VzZWw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC92LWNhcmQ+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICBuYW1lOiAncGhvdG8tbG9hZGVyJyxcXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgcmFkaXVzOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9uZToge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcG9uZW50czoge30sXFxuICAgICAgICBkYXRhKCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIG46IDAsXFxuICAgICAgICAgICAgICAgIHBob3RvOiAnJyxcXG4gICAgICAgICAgICAgICAgbG9hZGVkUGhvdG9zOiBbXSxcXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxQaG90b3M6W10sXFxuICAgICAgICAgICAgICAgIGZpbGVJbWc6IG51bGwsXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICBnZXRQaG90b3MoKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRlZFBob3RvcztcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGdldEZpcnN0KCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkZWRQaG90b3NbMF07XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICByZXR1cm5Gb3JtRGF0YSh2YWwpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2F2ZS1waG90bycsIHZhbClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHVwZGF0ZVBob3RvKHZhbCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnBob3RvID0gdmFsXFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Nyb3BwZXJEaWFsb2cgPSBmYWxzZVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgY2xpY2tPbklucHV0KCkge1xcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZXMnKS5maWxlcyA9IChuZXcgRGF0YVRyYW5zZmVyKCkpLmZpbGVzO1xcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZXMnKS5jbGljaygpXFxuXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBhZGRQaG90byhldmVudCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbWcgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZUltZy5zaXplID4gNTAyNDAwMCkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gJ9Cg0LDQt9C80LXRgCDRhNCw0LnQu9CwINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQsdC+0LvRjNGI0LUgNdCc0JEnXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWVcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBpZih0aGlzLmxvYWRlZFBob3Rvcy5sZW5ndGggPiAxMCkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gJ9CS0Ysg0L3QtSDQvNC+0LbQtdGC0LUg0LfQsNCz0YDRg9C30LjRgtGMINCx0L7Qu9GM0YjQtSAxMCDRhNC+0YLQvtCz0YDQsNGE0LjQuSdcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxQaG90b3MucHVzaChVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZUltZykpXFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkUGhvdG9zLnB1c2godGhpcy5maWxlSW1nKVxcbiAgICAgICAgICAgICAgICB0aGlzLm4gPSB0aGlzLmxvYWRlZFBob3Rvcy5sZW5ndGgtMVxcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbWcgPSBudWxsO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4gICAgLnBob3RvLWlucHV0IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAudXNlci1waG90byB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAxYWVmZTtcXG4gICAgfVxcblxcbiAgICAudXNlci1waG90by1tb2R1bGUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kZXNjcmlwdGlvbiAudi10ZXh0LWZpZWxkX19zbG90IHRleHRhcmVhIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uZGVzY3JpcHRpb24udi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmFmdGVyICxcXG4uZGVzY3JpcHRpb24udi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmJlZm9yZXtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RFZGl0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBbUlBO0lBQ0Esd0JBQUE7QUFDQTtBQUNBOztJQUVBLHdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8di1jb250YWluZXJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiY292ZXJcXFwiPlxcbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cXFwiY2VudGVyXFxcIiBqdXN0aWZ5PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJtYi0yXFxcIlxcbiAgICAgICAgdi10ZXh0PVxcXCIkcm91dGUucGFyYW1zLmlkICA9PSAwID8gJ9CU0L7QsdCw0LLQu9C10L3QuNC1INC+0LHRgNCw0YnQtdC90LjRjycgOiAgJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L7QsdGA0LDRidC10L3QuNGPJ1xcXCI+XFxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cXG4gICAgICAgIDx2LXRleHQtZmllbGRcXG4gICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgIG5hbWU9XFxcInRpdGxlXFxcIlxcbiAgICAgICAgICAgIGxhYmVsPVxcXCLQl9Cw0LPQvtC70L7QstC+0LpcXFwiXFxuICAgICAgICAgICAgdi1tb2RlbD1cXFwicG9zdC50aXRsZVxcXCJcXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XFxcIm1lc3NhZ2VzLnRpdGxlXFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgIDwvdi10ZXh0LWZpZWxkPlxcbiAgICAgICAgPHYtdGV4dGFyZWFcXG4gICAgICAgICAgICAgICAgbmFtZT1cXFwiZGVzY3JpcHRpb25cXFwiXFxuICAgICAgICAgICAgICAgIGxhYmVsPVxcXCLQntC/0LjRgdCw0L3QuNC1XFxcIlxcbiAgICAgICAgICAgICAgICBoaW50PVxcXCJIaW50IHRleHRcXFwiXFxuICAgICAgICAgICAgICAgIDp2YWx1ZT1cXFwiJyAnXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZGVzY3JpcHRpb24gXFxcIlxcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XFxcIm1lc3NhZ2VzLmRlc2NyaXB0aW9uXFxcIlxcbiAgICAgICAgPjwvdi10ZXh0YXJlYT5cXG4gICAgICAgIDxlZGl0b3JcXG4gICAgICAgICAgICAgICAgYXBpLWtleT1cXFwia2FwcjBraDB2M3ZzY25rcHBzeGdpZzk4dmY2bWdpdGFpaThhdXczcDJwaW4xYzV0XFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwibXQtMlxcXCJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicG9zdC5kZXNjcmlwdGlvblxcXCJcXG4gICAgICAgID5cXG4gICAgICAgIDwvZWRpdG9yPlxcbiAgICAgICAgPHYtc3BhY2VyLz5cXG4gICAgICAgIDxwaG90by1sb2FkZXIgdi1pZj1cXFwiJHJvdXRlLnBhcmFtcy5pZCA+IDBcXFwiIHJlZj1cXFwibG9hZGVyXFxcIj48L3Bob3RvLWxvYWRlcj5cXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cXFwic2F2ZS1idG5cXFwiXFxuICAgICAgICAgICAgICAgdi1pZj1cXFwiJHJvdXRlLnBhcmFtcy5pZCA9PSAwXFxcIlxcbiAgICAgICAgICAgICAgIGNvbG9yPVxcXCJzdWNjZXNzXFxcIlxcbiAgICAgICAgICAgICAgIGZhYlxcbiAgICAgICAgICAgICAgIEBjbGljaz1cXFwiY3JlYXRlXFxcIlxcbiAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiIShwb3N0LmRlc2NyaXB0aW9uICYmIHBvc3QudGl0bGUpXFxcIlxcbiAgICAgICAgICAgICAgIGRhcms+XFxuICAgICAgICAgICAgPHYtaWNvbj5tZGktcGx1czwvdi1pY29uPlxcbiAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cXFwic2F2ZS1idG5cXFwiXFxuICAgICAgICAgICAgICAgdi1lbHNlXFxuICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJ1cGRhdGVcXFwiXFxuICAgICAgICAgICAgICAgY29sb3I9XFxcInN1Y2Nlc3NcXFwiXFxuICAgICAgICAgICAgICAgZmFiXFxuICAgICAgICAgICAgICAgZGFyaz5cXG4gICAgICAgICAgICA8di1pY29uPm1kaS1jaGVjay1vdXRsaW5lPC92LWljb24+XFxuICAgICAgICA8L3YtYnRuPlxcbiAgICA8L3YtY29udGFpbmVyPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gICAgaW1wb3J0IEVkaXRvciBmcm9tICdAdGlueW1jZS90aW55bWNlLXZ1ZSc7XFxuICAgIGltcG9ydCBQaG90b0xvYWRlciBmcm9tICdAL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyJ1xcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICBuYW1lOiBcXFwiVXNlclBvc3RFZGl0XFxcIixcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICAgICAgICBFZGl0b3IsXFxuICAgICAgICAgICAgUGhvdG9Mb2FkZXJcXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBwb3N0OiB7XFxuICAgICAgICAgICAgICAgICAgICBpZDogdm0uJHJvdXRlLnBhcmFtcy5pZCxcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtb3VudGVkKCkge1xcbiAgICAgICAgICAgIGxldCBtb2RlbElkID0gdGhpcy4kcm91dGUucGFyYW1zLmlkO1xcbiAgICAgICAgICAgIGlmIChtb2RlbElkICE9IDApIHtcXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL3VzZXIvcG9zdC8nKyBtb2RlbElkKS50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSBlPy5yZXNwb25zZT8uZXJyb3IgfHwgJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAnO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGNyZWF0ZSgpIHtcXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy91c2VyL3Bvc3QnLCB0aGlzLnBvc3QpXFxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiBcXFwidXBvc3RcXFwiLCBwYXJhbXM6IHtpZDogci5kYXRhLmRhdGEuaWR9fSk7XFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICB1cGRhdGUoKSB7XFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wdXQoJy91c2VyL3Bvc3QvJysgdGhpcy5wb3N0LmlkLCB0aGlzLnBvc3QpXFxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdQaG90b3MgPSB0aGlzLiRyZWZzLmxvYWRlci5nZXRQaG90b3MoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UGhvdG9zLmxlbmd0aCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bob3Rvcy5mb3JFYWNoKChwaG90bywgaSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwb3N0X3Bob3Rvc1snK2krJ10nLCBwaG90bywgcGhvdG8ubmFtZSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdfbWV0aG9kJywgJ1BVVCcpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL3VzZXIvcG9zdC8nK3RoaXMucG9zdC5pZCwgZm9ybURhdGEpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9ICBg0J7RiNC40LHQutCwINGB0L7RhdGA0LDQvdC10L3QuNGPINGE0L7RgtC+0LPRgNCw0YTQuNC4YFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6IFxcXCJ1cG9zdHNcXFwifSk7XFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5yZXNwb25zZSAmJiBlLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnNcXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1lc3NhZ2VzKS5mb3JFYWNoKChrKT0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1trXSA9IGVycm9yc1trXT8uWzBdIHx8ICcnO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4gICAgLmRlc2NyaXB0aW9uIC52LXRleHQtZmllbGRfX3Nsb3QgdGV4dGFyZWEge1xcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgIC5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YWZ0ZXIgLFxcbiAgICAuZGVzY3JpcHRpb24udi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmJlZm9yZXtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjQ2ZmQ4ZDlcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9qdXJhMTIwNTk2L1BocHN0b3JtUHJvamVjdHMvc2thc3kvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjQ2ZmQ4ZDknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjQ2ZmQ4ZDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjQ2ZmQ4ZDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjQ2ZmQ4ZDkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjQ2ZmQ4ZDknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1VzZXJQb3N0RWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzIyMzcxODQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlclBvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlclBvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Vc2VyUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2p1cmExMjA1OTYvUGhwc3Rvcm1Qcm9qZWN0cy9za2FzeS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczMjIzNzE4NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczMjIzNzE4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczMjIzNzE4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVXNlclBvc3RFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMjIzNzE4NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMjIzNzE4NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0RWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclBvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJQb3N0RWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jYXJkXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtY29sdW1uXCIsXG4gICAgICBhdHRyczogeyBcImp1c3RpZnktY2VudGVyXCI6IFwiXCIsIFwiYWxpZ24tY2VudGVyXCI6IFwiXCIsIGVsZXZhdGlvbjogXCIwXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInBob3RvLWlucHV0XCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgaWQ6IFwiZmlsZXNcIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJhemF6XCIsXG4gICAgICAgICAgYWNjZXB0OiBcImltYWdlL2pwZWcsaW1hZ2UvcG5nLGltYWdlL2pwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmFkZFBob3RvIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0ub25lIHx8ICFfdm0uY2Fyb3VzZWxQaG90b3MubGVuZ3RoXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBteS0yXCIsIG9uOiB7IGNsaWNrOiBfdm0uY2xpY2tPbklucHV0IH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQlNC+0LHQsNCy0LjRgtGMINGE0L7RgtC+0LPRgNCw0YTQuNGOXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ub25lXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxvYWRlZFBob3Rvc1swXS5uYW1lKSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0ub25lICYmIF92bS5jYXJvdXNlbFBob3Rvcy5sZW5ndGhcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInVzZXItcGhvdG8tbW9kdWxlXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcm91c2VsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm4gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY2Fyb3VzZWxQaG90b3MsIGZ1bmN0aW9uKHBob3RvLCBpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2LWNhcm91c2VsLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcGhvdG8sIGNvbnRhaW46IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvdmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIsIGp1c3RpZnk6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgX3ZtLiRyb3V0ZS5wYXJhbXMuaWQgPT0gMFxuICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC70LXQvdC40LUg0L7QsdGA0LDRidC10L3QuNGPXCJcbiAgICAgICAgICAgICAgOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L7QsdGA0LDRidC10L3QuNGPXCJcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBuYW1lOiBcInRpdGxlXCIsXG4gICAgICAgICAgbGFiZWw6IFwi0JfQsNCz0L7Qu9C+0LLQvtC6XCIsXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMudGl0bGVcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnBvc3QudGl0bGUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBvc3QsIFwidGl0bGVcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJwb3N0LnRpdGxlXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHRhcmVhXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24gXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgIGxhYmVsOiBcItCe0L/QuNGB0LDQvdC40LVcIixcbiAgICAgICAgICBoaW50OiBcIkhpbnQgdGV4dFwiLFxuICAgICAgICAgIHZhbHVlOiBcIiBcIixcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5kZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImVkaXRvclwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm10LTJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcImFwaS1rZXlcIjogXCJrYXByMGtoMHYzdnNjbmtwcHN4Z2lnOTh2ZjZtZ2l0YWlpOGF1dzNwMnBpbjFjNXRcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0ucG9zdC5kZXNjcmlwdGlvbixcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0ucG9zdCwgXCJkZXNjcmlwdGlvblwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInBvc3QuZGVzY3JpcHRpb25cIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS4kcm91dGUucGFyYW1zLmlkID4gMFxuICAgICAgICA/IF9jKFwicGhvdG8tbG9hZGVyXCIsIHsgcmVmOiBcImxvYWRlclwiIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLiRyb3V0ZS5wYXJhbXMuaWQgPT0gMFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlLWJ0blwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICEoX3ZtLnBvc3QuZGVzY3JpcHRpb24gJiYgX3ZtLnBvc3QudGl0bGUpLFxuICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jcmVhdGUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLXBsdXNcIildKV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlLWJ0blwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJzdWNjZXNzXCIsIGZhYjogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnVwZGF0ZSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktY2hlY2stb3V0bGluZVwiKV0pXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjE4NWRkMmFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjQ2ZmQ4ZDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjQ2ZmQ4ZDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclBvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3MzYxMjZmZFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJQb3N0RWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJQb3N0RWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==