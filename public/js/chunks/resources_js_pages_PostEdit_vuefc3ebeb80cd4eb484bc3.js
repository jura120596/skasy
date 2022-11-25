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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DropArea.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DropArea.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DropArea",
  data: function data(vm) {
    return {
      vm: vm
    };
  },
  props: ['yet'],
  mounted: function mounted(vm) {
    var _this = this;

    var dropArea = document.getElementById('drop-area');
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
      dropArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(function (eventName) {
      dropArea.addEventListener(eventName, focus, false);
    });
    ['dragleave', 'drop'].forEach(function (eventName) {
      dropArea.addEventListener(eventName, unfocus, false);
    });

    function focus(e) {
      dropArea.classList.add('focus');
    }

    function unfocus(e) {
      dropArea.classList.remove('focus');
    }

    var handleDrop = function handleDrop(e) {
      var dt = e.dataTransfer;
      var files = dt.files;

      _this.handleFiles(files);
    };

    dropArea.addEventListener('drop', handleDrop, false);
  },
  methods: {
    handleFiles: function handleFiles(files) {
      this.$emit('change', {
        target: {
          files: files
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../image */ "./resources/image.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBar */ "./resources/js/components/ProgressBar.vue");
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
  name: "EditPhotoCard",
  components: {
    ProgressBar: _ProgressBar__WEBPACK_IMPORTED_MODULE_1__.default
  },
  props: {
    focus: {
      type: Boolean,
      "default": false
    },
    preload: {
      type: Boolean,
      "default": true
    },
    cover: {
      type: String,
      "default": ""
    },
    filled: {
      type: Boolean,
      "default": false
    },
    file: {
      type: File | String
    }
  },
  data: function data(vm) {
    return {
      open: false,
      focused: !!vm.$attrs['focus'],
      src: '',
      loaded: false,
      error: false,
      progress: 0,
      rotateTimeout: null
    };
  },
  mounted: function mounted() {
    this.upload(this.file);
  },
  computed: {
    isCover: function isCover() {
      return this.cover && this.src.indexOf(this.cover) !== -1;
    }
  },
  methods: {
    rotate: function rotate() {
      var _this = this;

      if (this.rotateTimeout) {
        clearTimeout(this.rotateTimeout);
        this.rotateTimeout = null;
      }

      this.rotateTimeout = setTimeout(function () {
        var img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = function () {
          var compressUrl = (0,_image__WEBPACK_IMPORTED_MODULE_0__.compress)(img, function (ctx, canvas) {
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(90 * Math.PI / 180);
            ctx.drawImage(img, -img.width / 2, -img.width / 2);
            ctx.restore();
          });
          var blob = (0,_image__WEBPACK_IMPORTED_MODULE_0__.b64ToBlob)(compressUrl.split(',')[1], 'image/jpeg');

          _this.upload(blob, _this.src.split('/').reverse()[0]);
        };

        img.src = _this.src;
      }, 1000);
    },
    readLocalSrc: function readLocalSrc(file) {
      var _this2 = this;

      if (this.file instanceof Blob) {
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function () {
          _this2.src = reader.result;

          _this2.$emit('change', _this2.src);
        };
      } else this.src = file;

      this.loaded = true;
    },
    upload: function upload(file, canvasFileName) {
      var _this3 = this;

      if (!this.preload || !(file instanceof Blob)) {
        this.readLocalSrc(file);
        return;
      }

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      var formData = new FormData();
      formData.append('file', file, canvasFileName || file.name);
      xhr.open('POST', '/photo/upload', true);
      xhr.upload.addEventListener("progress", function (e) {
        _this3.progress = e.loaded * 100.0 / e.total || 100;
      });
      xhr.addEventListener('readystatechange', function (e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
          _this3.src = e.target.response.url;

          _this3.$emit('change', e.target.response.url);

          _this3.loaded = true;
        } else if (xhr.readyState == 4 && xhr.status != 200) {
          if (xhr.status == 400 && !canvasFileName) {
            //Для файлов с битым маймтипом рисуем на канве и отправляем результат
            var img = new Image();

            img.onload = function () {
              var compressUrl = (0,_image__WEBPACK_IMPORTED_MODULE_0__.compress)(img);
              var blob = (0,_image__WEBPACK_IMPORTED_MODULE_0__.b64ToBlob)(compressUrl.split(',')[1], 'image/jpeg');

              _this3.upload(blob, file.name);
            };

            img.src = URL.createObjectURL(file);
            return;
          }

          _this3.readLocalSrc(file);

          _this3.error = _this3.loaded = true;
        }
      });
      xhr.send(formData);
    }
  },
  watch: {
    file: function file(nv) {
      if (typeof nv === 'string') this.src = nv;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['progress'],
  name: "ProgressBar"
});

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
/* harmony import */ var _EditPhotoCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditPhotoCard */ "./resources/js/components/EditPhotoCard.vue");
/* harmony import */ var _DropArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropArea */ "./resources/js/components/DropArea.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    },
    photos: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    preload: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    DropArea: _DropArea__WEBPACK_IMPORTED_MODULE_1__.default,
    EditPhotoCard: _EditPhotoCard__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data(vm) {
    return {
      n: 0,
      photo: '',
      loadedPhotos: [],
      deleted: [],
      carouselPhotos: vm.photos,
      fileImg: null
    };
  },
  updated: function updated() {},
  methods: {
    deletePhoto: function deletePhoto(photo, cpi) {
      var _this = this;

      if (photo.name) {
        this.loadedPhotos.forEach(function (file, i) {
          if (file.name === photo.name) delete _this.loadedPhotos[i];
        });
      } else {
        this.deleted.push(this.photos[cpi].id);
      }

      delete this.carouselPhotos[cpi];
      this.carouselPhotos = _toConsumableArray(this.carouselPhotos);
    },
    getPhotos: function getPhotos() {
      return this.loadedPhotos.concat(this.deleted);
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
      var _this2 = this;

      _toConsumableArray(event.target.files).forEach(function (photo) {
        _this2.fileImg = photo;

        if (_this2.fileImg.size > 5024000) {
          _this2.$root.$children[0].snackbarText = 'Размер файла не может быть больше 5МБ';
          _this2.$root.$children[0].snackbar = true;
          return;
        }

        if (_this2.loadedPhotos.length > 10) {
          _this2.$root.$children[0].snackbarText = 'Вы не можете загрузить больше 10 фотографий';
          _this2.$root.$children[0].snackbar = true;
          return;
        }

        _this2.carouselPhotos = [].concat(_toConsumableArray(_this2.carouselPhotos), [_this2.preload ? URL.createObjectURL(_this2.fileImg) : _this2.fileImg]);

        _this2.loadedPhotos.push(_this2.fileImg);

        _this2.n = _this2.loadedPhotos.length - 1;
        _this2.fileImg = null;
      });
    }
  },
  watch: {
    photos: function photos(nv) {
      this.carouselPhotos = nv.map(function (file) {
        return file.file;
      });
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PostAdd",
  components: {
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    PhotoLoader: _components_photo_loader__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data(vm) {
    return {
      post: {
        id: Number.parseInt(vm.$route.params.id),
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
        _this2.post.id = r.data.data.id;

        _this2.update();
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

      window.axios.put('/post/' + this.post.id, this.post).then(function (r) {
        var newPhotos = _this3.$refs.loader.getPhotos();

        if (newPhotos.length) {
          var formData = new FormData();
          newPhotos.forEach(function (photo, i) {
            if (photo.name) formData.append('post_photos[' + i + ']', photo, photo.name);else formData.append('delete_photos[' + i + ']', photo);
          });
          formData.append('_method', 'PUT');

          try {
            window.axios.post('/post/' + _this3.post.id, formData).then(function () {
              _this3.$router.push({
                name: "posts"
              });
            });
          } catch (e) {
            _this3.$root.$children[0].snackbarText = "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438";
            _this3.$root.$children[0].snackbar = true;

            _this3.$router.push({
              name: "posts"
            });
          }
        }
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

/***/ "./resources/image.js":
/*!****************************!*\
  !*** ./resources/image.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compress": () => (/* binding */ compress),
/* harmony export */   "b64ToBlob": () => (/* binding */ b64ToBlob)
/* harmony export */ });
var compress = function compress(img, modifyContext) {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var width = img.width;
  var height = img.height; // log(img.width, img.height)
  // log(width, height)

  canvas.width = width;
  canvas.height = height;
  context.fillStyle = '#fff';
  context.fillRect(0, 0, canvas.width, canvas.height);
  if (modifyContext) modifyContext(context, canvas);else context.drawImage(img, 0, 0, canvas.width, canvas.height);
  var base64Data = canvas.toDataURL('image/jpeg', 0.4);
  canvas = context = null; // log(base64Data.length)

  img = null;
  return base64Data;
}; // base64 is converted to binary file

var b64ToBlob = function b64ToBlob(b64Data, contentType) {
  contentType = contentType || '';
  var byteCharacters = atob(b64Data); // Decode base64 data as a binary string

  var buffer = []; // Note that the first argument to the blob must be an array
  // type array is used to process binary files

  var aBuffer = new ArrayBuffer(byteCharacters.length);
  var uBuffer = new Uint8Array(aBuffer);

  for (var i = 0; i < byteCharacters.length; i++) {
    uBuffer[i] = byteCharacters.charCodeAt(i); // get Unicode encoding, store in type array
  }

  buffer.push(uBuffer); // Ordinary array is unable to generate binary files

  return new Blob(buffer, {
    // generate a binary file
    type: contentType
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DropArea.vue?vue&type=style&index=0&id=5881e8f2&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DropArea.vue?vue&type=style&index=0&id=5881e8f2&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.drop-area[data-v-5881e8f2]:not(.drop-sm) {\n    position: relative;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 200px;\n    background: #FFFFFF;\n    border: 1px dashed #AFAFAF;\n    border-radius: 8px;\n    overflow: hidden;\n}\n#drop-area.focus[data-v-5881e8f2] {\n    background: #F8F8F8;\n}\n.hover[data-v-5881e8f2] {\n    display: none;\n}\n.focus .hide[data-v-5881e8f2] {\n    display: none !important;\n}\n.focus .hover[data-v-5881e8f2] {\n    display: block !important;\n}\np[data-v-5881e8f2] {\n    margin-top: 0;\n}\n.drop-area:not(.drop-sm) .drop-form[data-v-5881e8f2] {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    z-index: 50;\n}\n.drop-btn[data-v-5881e8f2] {\n    display: inline-block;\n    cursor: pointer;\n    min-width: 150px;\n    border-radius: 4px;\n    height: 35px;\n    padding: 10px;\n    background: #F8F8F8;\n    font-weight: 400;\n    font-style: normal;\n    line-height: 17px;\n    font-size: 18px;\n    margin-bottom: 10px;\n    text-align: center;\n}\n.drop-sm .drop-btn[data-v-5881e8f2]{\n    min-width: 100%;\n}\n#fileElem[data-v-5881e8f2] {\n    display: none;\n}\n.file-desc[data-v-5881e8f2] {\n\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 22px;\n    color: #4A4A4A;\n}\n.drop-sm .file-desc[data-v-5881e8f2] {\n    display: none\n}\n.format-file-desc[data-v-5881e8f2] {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 19px;\n    text-align: center;\n    color: #AFAFAF;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/DropArea.vue"],"names":[],"mappings":";AA2DA;IACA,kBAAA;IACA,WAAA;IACA,aAAA;IACA,uBAAA;IACA,mBAAA;IACA,aAAA;IACA,mBAAA;IACA,0BAAA;IACA,kBAAA;IACA,gBAAA;AACA;AAEA;IACA,mBAAA;AACA;AAEA;IACA,aAAA;AACA;AAEA;IACA,wBAAA;AACA;AAEA;IACA,yBAAA;AACA;AAEA;IACA,aAAA;AACA;AAEA;IACA,kBAAA;IACA,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;IACA,WAAA;AACA;AAGA;IACA,qBAAA;IACA,eAAA;IACA,gBAAA;IACA,kBAAA;IACA,YAAA;IACA,aAAA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;IACA,iBAAA;IACA,eAAA;IACA,mBAAA;IACA,kBAAA;AACA;AACA;IACA,eAAA;AACA;AAEA;IACA,aAAA;AACA;AAEA;;IAEA,kBAAA;IACA,gBAAA;IACA,eAAA;IACA,iBAAA;IACA,cAAA;AACA;AAEA;IACA;AACA;AACA;IACA,kBAAA;IACA,gBAAA;IACA,eAAA;IACA,iBAAA;IACA,kBAAA;IACA,cAAA;AACA","sourcesContent":["<template>\r\n    <div id=\"drop-area\" class=\"drop-area\" :class=\"$vuetify.breakpoint.smAndDown ? ['drop-sm'] : []\">\r\n        <form class=\"drop-form\">\r\n            <input type=\"file\" id=\"fileElem\" multiple accept=\"image/*\"\r\n                   @change=\"(e) => $emit('change', e)\" class=\"hide\">\r\n            <label class=\"drop-btn\" for=\"fileElem\">{{!yet ? 'Загрузить фото' : 'Загрузить еще'}}</label>\r\n            <p class=\"format-file-desc\">Формат – jpg, png</p>\r\n            <p class=\"file-desc hover\">Отпустите фотографию сюда</p>\r\n        </form>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        name: \"DropArea\",\r\n        data: (vm) => ({vm}),\r\n        props: ['yet'],\r\n        mounted(vm) {\r\n            let dropArea = document.getElementById('drop-area');\r\n            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {\r\n                dropArea.addEventListener(eventName, preventDefaults, false)\r\n            })\r\n\r\n            function preventDefaults(e) {\r\n                e.preventDefault()\r\n                e.stopPropagation()\r\n            }\r\n\r\n            ['dragenter', 'dragover'].forEach(eventName => {\r\n                dropArea.addEventListener(eventName, focus, false)\r\n            });\r\n            ['dragleave', 'drop'].forEach(eventName => {\r\n                dropArea.addEventListener(eventName, unfocus, false)\r\n            });\r\n\r\n            function focus(e) {\r\n                dropArea.classList.add('focus')\r\n            }\r\n\r\n            function unfocus(e) {\r\n                dropArea.classList.remove('focus')\r\n            }\r\n\r\n            const handleDrop = (e) => {\r\n                let dt = e.dataTransfer\r\n                let files = dt.files\r\n                this.handleFiles(files)\r\n            }\r\n            dropArea.addEventListener('drop', handleDrop, false);\r\n        },\r\n        methods: {\r\n            handleFiles(files) {\r\n                this.$emit('change', {target:{files}});\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style scoped>\r\n    .drop-area:not(.drop-sm) {\r\n        position: relative;\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        height: 200px;\r\n        background: #FFFFFF;\r\n        border: 1px dashed #AFAFAF;\r\n        border-radius: 8px;\r\n        overflow: hidden;\r\n    }\r\n\r\n    #drop-area.focus {\r\n        background: #F8F8F8;\r\n    }\r\n\r\n    .hover {\r\n        display: none;\r\n    }\r\n\r\n    .focus .hide {\r\n        display: none !important;\r\n    }\r\n\r\n    .focus .hover {\r\n        display: block !important;\r\n    }\r\n\r\n    p {\r\n        margin-top: 0;\r\n    }\r\n\r\n    .drop-area:not(.drop-sm) .drop-form {\r\n        position: absolute;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        width: 100%;\r\n        height: 100%;\r\n        z-index: 50;\r\n    }\r\n\r\n\r\n    .drop-btn {\r\n        display: inline-block;\r\n        cursor: pointer;\r\n        min-width: 150px;\r\n        border-radius: 4px;\r\n        height: 35px;\r\n        padding: 10px;\r\n        background: #F8F8F8;\r\n        font-weight: 400;\r\n        font-style: normal;\r\n        line-height: 17px;\r\n        font-size: 18px;\r\n        margin-bottom: 10px;\r\n        text-align: center;\r\n    }\r\n    .drop-sm .drop-btn{\r\n        min-width: 100%;\r\n    }\r\n\r\n    #fileElem {\r\n        display: none;\r\n    }\r\n\r\n    .file-desc {\r\n\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 16px;\r\n        line-height: 22px;\r\n        color: #4A4A4A;\r\n    }\r\n\r\n    .drop-sm .file-desc {\r\n        display: none\r\n    }\r\n    .format-file-desc {\r\n        font-style: normal;\r\n        font-weight: 500;\r\n        font-size: 14px;\r\n        line-height: 19px;\r\n        text-align: center;\r\n        color: #AFAFAF;\r\n    }\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=style&index=0&id=4abe411d&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=style&index=0&id=4abe411d&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.site-photo-card[data-v-4abe411d] {\n    position: relative;\n    width: 100%;\n    background: #FFFFFF;\n    /* Grey 800 */\n\n    border-radius: 8px;\n    overflow: hidden;\n}\n.site-photo-card.filled[data-v-4abe411d] {\n    background-color: #F8F8F8;\n}\n.site-photo-card.focused[data-v-4abe411d], .site-photo-card[data-v-4abe411d]:hover {\n    box-shadow: 0px 0px 9px rgba(140, 140, 140, 0.49);\n    border-radius: 8px;\n}\n.site-photo-card[data-v-4abe411d]:after {\n    content: \"\";\n    display: block;\n    padding-bottom: 56%; /* 16/9 */\n}\n.site-photo-card-actions[data-v-4abe411d] {\n    position: absolute;\n    right: 0;\n    cursor: pointer;\n}\n.site-photo-card-content[data-v-4abe411d] {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    cursor: pointer;\n}\n.edit-photo-icon[data-v-4abe411d] {\n    margin-left: 8px;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/EditPhotoCard.vue"],"names":[],"mappings":";AAoJA;IACA,kBAAA;IACA,WAAA;IACA,mBAAA;IACA,aAAA;;IAEA,kBAAA;IACA,gBAAA;AACA;AAEA;IACA,yBAAA;AACA;AAEA;IACA,iDAAA;IACA,kBAAA;AACA;AAEA;IACA,WAAA;IACA,cAAA;IACA,mBAAA,EAAA,SAAA;AACA;AAEA;IACA,kBAAA;IACA,QAAA;IACA,eAAA;AACA;AAEA;IACA,kBAAA;IACA,WAAA;IACA,YAAA;IACA,aAAA;IACA,uBAAA;IACA,sBAAA;IACA,eAAA;AACA;AAEA;IACA,gBAAA;AACA","sourcesContent":["<template>\r\n    <div class=\"site-photo-card\"\r\n         :class=\"{focused: focus, filled}\">\r\n        <div class=\"site-photo-card-content\" style=\"z-index: 1;\">\r\n            <slot name=\"default\">\r\n                <v-img v-if=\"loaded && src\" :src=\"src\" cover\r\n                       height=\"100%\" @click=\"$emit('click', $attrs['value']); open=true\"/>\r\n                <v-row v-else-if=\"!loaded && !error\" xs=\"12\" class=\"pa-8\" style=\"align-items: center\">\r\n                    <progress-bar :progress=\"progress\"/>\r\n                </v-row>\r\n            </slot>\r\n        </div>\r\n        <div class=\"site-photo-card-actions\" style=\"z-index: 2;\">\r\n            <slot name=\"actions\">\r\n                <v-row xs=\"12\" class=\"pl-5 pr-5 pt-2 justify-end\">\r\n                    <v-btn fab\r\n                           small\r\n                           @click=\"$emit('delete')\"\r\n                           class=\"mr-3\">\r\n                        <v-icon>mdi-delete</v-icon>\r\n                    </v-btn>\r\n                </v-row>\r\n            </slot>\r\n        </div>\r\n        <v-dialog v-model=\"open\" v-if=\"open\" content-class=\"sm-photo-dialog\"\r\n                  :fullscreen=\"true\">\r\n            <div class=\"dialog-image\">\r\n                <v-img v-if=\"loaded && src\" :src=\"src\" max-height=\"90vh\" contain/>\r\n                <v-btn icon @click=\"$emit('focusOut'); open=false;\"\r\n                       color=\"gray\"\r\n                       class=\"close-btn\" ><v-icon>mdi-close</v-icon></v-btn>\r\n            </div>\r\n        </v-dialog>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    import {b64ToBlob, compress} from \"../../image\";\r\n    import ProgressBar from \"./ProgressBar\";\r\n\r\n    export default {\r\n        name: \"EditPhotoCard\",\r\n        components: {ProgressBar},\r\n        props: {\r\n            focus: {type: Boolean, default: false,},\r\n            preload: {type: Boolean, default: true,},\r\n            cover: {type: String, default: \"\"},\r\n            filled: {type: Boolean, default: false},\r\n            file: {type: File | String}\r\n        },\r\n        data: (vm) => ({\r\n            open: false,\r\n            focused: !!vm.$attrs['focus'],\r\n            src: '',\r\n            loaded: false,\r\n            error: false,\r\n            progress: 0,\r\n            rotateTimeout: null,\r\n        }),\r\n        mounted() {\r\n            this.upload(this.file)\r\n        },\r\n        computed: {\r\n            isCover() {\r\n                return this.cover && this.src.indexOf(this.cover) !== -1\r\n            }\r\n        },\r\n        methods: {\r\n            rotate() {\r\n                if (this.rotateTimeout) {\r\n                    clearTimeout(this.rotateTimeout);\r\n                    this.rotateTimeout = null;\r\n                }\r\n                this.rotateTimeout = setTimeout(() => {\r\n                    let img = new Image();\r\n                    img.crossOrigin = \"anonymous\"\r\n                    img.onload = () => {\r\n                        let compressUrl = compress(img, (ctx, canvas) => {\r\n                            ctx.save();\r\n                            ctx.translate(canvas.width / 2, canvas.height / 2);\r\n                            ctx.rotate(90 * Math.PI / 180);\r\n                            ctx.drawImage(img, -img.width / 2, -img.width / 2);\r\n                            ctx.restore();\r\n                        });\r\n                        let blob = b64ToBlob(compressUrl.split(',')[1], 'image/jpeg');\r\n                        this.upload(blob, this.src.split('/').reverse()[0]);\r\n                    };\r\n                    img.src = this.src;\r\n                }, 1000)\r\n            },\r\n            readLocalSrc(file) {\r\n                if (this.file instanceof Blob) {\r\n                    let reader = new FileReader();\r\n                    reader.readAsDataURL(file);\r\n                    reader.onloadend = () => {\r\n                        this.src = reader.result;\r\n                        this.$emit('change', this.src)\r\n                    }\r\n                } else this.src = file;\r\n                this.loaded = true;\r\n            },\r\n            upload(file, canvasFileName) {\r\n                if (!this.preload || !(file instanceof Blob)) {\r\n                    this.readLocalSrc(file);\r\n                    return;\r\n                }\r\n                var xhr = new XMLHttpRequest()\r\n                xhr.responseType = 'json';\r\n                var formData = new FormData()\r\n                formData.append('file', file, canvasFileName || file.name)\r\n                xhr.open('POST', '/photo/upload', true)\r\n                xhr.upload.addEventListener(\"progress\", (e) => {\r\n                    this.progress = (e.loaded * 100.0 / e.total) || 100;\r\n                })\r\n                xhr.addEventListener('readystatechange', (e) => {\r\n                    if (xhr.readyState == 4 && xhr.status == 200) {\r\n                        this.src = e.target.response.url;\r\n                        this.$emit('change', e.target.response.url);\r\n                        this.loaded = true;\r\n                    } else if (xhr.readyState == 4 && xhr.status != 200) {\r\n                        if (xhr.status == 400 && !canvasFileName) {\r\n                            //Для файлов с битым маймтипом рисуем на канве и отправляем результат\r\n                            let img = new Image();\r\n                            img.onload = () => {\r\n                                let compressUrl = compress(img);\r\n                                let blob = b64ToBlob(compressUrl.split(',')[1], 'image/jpeg');\r\n                                this.upload(blob, file.name);\r\n                            };\r\n                            img.src = URL.createObjectURL(file);\r\n                            return;\r\n                        }\r\n                        this.readLocalSrc(file)\r\n                        this.error = this.loaded = true;\r\n                    }\r\n\r\n                })\r\n                xhr.send(formData)\r\n            }\r\n        },\r\n        watch: {\r\n            file(nv) {\r\n                if (typeof nv === 'string') this.src = nv;\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style scoped>\r\n    .site-photo-card {\r\n        position: relative;\r\n        width: 100%;\r\n        background: #FFFFFF;\r\n        /* Grey 800 */\r\n\r\n        border-radius: 8px;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .site-photo-card.filled {\r\n        background-color: #F8F8F8;\r\n    }\r\n\r\n    .site-photo-card.focused, .site-photo-card:hover {\r\n        box-shadow: 0px 0px 9px rgba(140, 140, 140, 0.49);\r\n        border-radius: 8px;\r\n    }\r\n\r\n    .site-photo-card:after {\r\n        content: \"\";\r\n        display: block;\r\n        padding-bottom: 56%; /* 16/9 */\r\n    }\r\n\r\n    .site-photo-card-actions {\r\n        position: absolute;\r\n        right: 0;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .site-photo-card-content {\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        display: flex;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .edit-photo-icon {\r\n        margin-left: 8px;\r\n    }\r\n</style>\r\n<style>\r\n\r\n    .sm-photo-dialog .photo-cover {\r\n        position: absolute;\r\n        top: 32px;\r\n        left: 32px;\r\n        z-index: 101;\r\n    }\r\n\r\n    .sm-photo-dialog .close-btn {\r\n        position: absolute;\r\n        top: 32px;\r\n        right: 32px;\r\n    }\r\n\r\n    .sm-photo-dialog .bottom {\r\n        right: 32px;\r\n        bottom: 32px;\r\n        position: absolute;\r\n        width: fit-content;\r\n        display: flex;\r\n        flex-direction: row;\r\n    }\r\n\r\n    .sm-photo-dialog {\r\n        position: absolute;\r\n        z-index: 100;\r\n        display: flex;\r\n        box-shadow: none !important;\r\n        background: rgba(105, 109, 116, 0.6);\r\n        backdrop-filter: blur(10px);\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .dialog-image .v-image{\r\n        border-radius: 8px;\r\n    }\r\n    .dialog-image {\r\n        width: fit-content;\r\n        height: fit-content;\r\n        max-width: 100%;\r\n        position: relative;\r\n        padding: 16px;\r\n        border-radius: 8px;\r\n        overflow: hidden;\r\n    }\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=style&index=1&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=style&index=1&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.sm-photo-dialog .photo-cover {\n    position: absolute;\n    top: 32px;\n    left: 32px;\n    z-index: 101;\n}\n.sm-photo-dialog .close-btn {\n    position: absolute;\n    top: 32px;\n    right: 32px;\n}\n.sm-photo-dialog .bottom {\n    right: 32px;\n    bottom: 32px;\n    position: absolute;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    display: flex;\n    flex-direction: row;\n}\n.sm-photo-dialog {\n    position: absolute;\n    z-index: 100;\n    display: flex;\n    box-shadow: none !important;\n    background: rgba(105, 109, 116, 0.6);\n    -webkit-backdrop-filter: blur(10px);\n            backdrop-filter: blur(10px);\n    align-items: center;\n    justify-content: center;\n}\n.dialog-image .v-image{\n    border-radius: 8px;\n}\n.dialog-image {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    max-width: 100%;\n    position: relative;\n    padding: 16px;\n    border-radius: 8px;\n    overflow: hidden;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/EditPhotoCard.vue"],"names":[],"mappings":";AAmMA;IACA,kBAAA;IACA,SAAA;IACA,UAAA;IACA,YAAA;AACA;AAEA;IACA,kBAAA;IACA,SAAA;IACA,WAAA;AACA;AAEA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;IACA,0BAAA;IAAA,uBAAA;IAAA,kBAAA;IACA,aAAA;IACA,mBAAA;AACA;AAEA;IACA,kBAAA;IACA,YAAA;IACA,aAAA;IACA,2BAAA;IACA,oCAAA;IACA,mCAAA;YAAA,2BAAA;IACA,mBAAA;IACA,uBAAA;AACA;AAEA;IACA,kBAAA;AACA;AACA;IACA,0BAAA;IAAA,uBAAA;IAAA,kBAAA;IACA,2BAAA;IAAA,wBAAA;IAAA,mBAAA;IACA,eAAA;IACA,kBAAA;IACA,aAAA;IACA,kBAAA;IACA,gBAAA;AACA","sourcesContent":["<template>\r\n    <div class=\"site-photo-card\"\r\n         :class=\"{focused: focus, filled}\">\r\n        <div class=\"site-photo-card-content\" style=\"z-index: 1;\">\r\n            <slot name=\"default\">\r\n                <v-img v-if=\"loaded && src\" :src=\"src\" cover\r\n                       height=\"100%\" @click=\"$emit('click', $attrs['value']); open=true\"/>\r\n                <v-row v-else-if=\"!loaded && !error\" xs=\"12\" class=\"pa-8\" style=\"align-items: center\">\r\n                    <progress-bar :progress=\"progress\"/>\r\n                </v-row>\r\n            </slot>\r\n        </div>\r\n        <div class=\"site-photo-card-actions\" style=\"z-index: 2;\">\r\n            <slot name=\"actions\">\r\n                <v-row xs=\"12\" class=\"pl-5 pr-5 pt-2 justify-end\">\r\n                    <v-btn fab\r\n                           small\r\n                           @click=\"$emit('delete')\"\r\n                           class=\"mr-3\">\r\n                        <v-icon>mdi-delete</v-icon>\r\n                    </v-btn>\r\n                </v-row>\r\n            </slot>\r\n        </div>\r\n        <v-dialog v-model=\"open\" v-if=\"open\" content-class=\"sm-photo-dialog\"\r\n                  :fullscreen=\"true\">\r\n            <div class=\"dialog-image\">\r\n                <v-img v-if=\"loaded && src\" :src=\"src\" max-height=\"90vh\" contain/>\r\n                <v-btn icon @click=\"$emit('focusOut'); open=false;\"\r\n                       color=\"gray\"\r\n                       class=\"close-btn\" ><v-icon>mdi-close</v-icon></v-btn>\r\n            </div>\r\n        </v-dialog>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    import {b64ToBlob, compress} from \"../../image\";\r\n    import ProgressBar from \"./ProgressBar\";\r\n\r\n    export default {\r\n        name: \"EditPhotoCard\",\r\n        components: {ProgressBar},\r\n        props: {\r\n            focus: {type: Boolean, default: false,},\r\n            preload: {type: Boolean, default: true,},\r\n            cover: {type: String, default: \"\"},\r\n            filled: {type: Boolean, default: false},\r\n            file: {type: File | String}\r\n        },\r\n        data: (vm) => ({\r\n            open: false,\r\n            focused: !!vm.$attrs['focus'],\r\n            src: '',\r\n            loaded: false,\r\n            error: false,\r\n            progress: 0,\r\n            rotateTimeout: null,\r\n        }),\r\n        mounted() {\r\n            this.upload(this.file)\r\n        },\r\n        computed: {\r\n            isCover() {\r\n                return this.cover && this.src.indexOf(this.cover) !== -1\r\n            }\r\n        },\r\n        methods: {\r\n            rotate() {\r\n                if (this.rotateTimeout) {\r\n                    clearTimeout(this.rotateTimeout);\r\n                    this.rotateTimeout = null;\r\n                }\r\n                this.rotateTimeout = setTimeout(() => {\r\n                    let img = new Image();\r\n                    img.crossOrigin = \"anonymous\"\r\n                    img.onload = () => {\r\n                        let compressUrl = compress(img, (ctx, canvas) => {\r\n                            ctx.save();\r\n                            ctx.translate(canvas.width / 2, canvas.height / 2);\r\n                            ctx.rotate(90 * Math.PI / 180);\r\n                            ctx.drawImage(img, -img.width / 2, -img.width / 2);\r\n                            ctx.restore();\r\n                        });\r\n                        let blob = b64ToBlob(compressUrl.split(',')[1], 'image/jpeg');\r\n                        this.upload(blob, this.src.split('/').reverse()[0]);\r\n                    };\r\n                    img.src = this.src;\r\n                }, 1000)\r\n            },\r\n            readLocalSrc(file) {\r\n                if (this.file instanceof Blob) {\r\n                    let reader = new FileReader();\r\n                    reader.readAsDataURL(file);\r\n                    reader.onloadend = () => {\r\n                        this.src = reader.result;\r\n                        this.$emit('change', this.src)\r\n                    }\r\n                } else this.src = file;\r\n                this.loaded = true;\r\n            },\r\n            upload(file, canvasFileName) {\r\n                if (!this.preload || !(file instanceof Blob)) {\r\n                    this.readLocalSrc(file);\r\n                    return;\r\n                }\r\n                var xhr = new XMLHttpRequest()\r\n                xhr.responseType = 'json';\r\n                var formData = new FormData()\r\n                formData.append('file', file, canvasFileName || file.name)\r\n                xhr.open('POST', '/photo/upload', true)\r\n                xhr.upload.addEventListener(\"progress\", (e) => {\r\n                    this.progress = (e.loaded * 100.0 / e.total) || 100;\r\n                })\r\n                xhr.addEventListener('readystatechange', (e) => {\r\n                    if (xhr.readyState == 4 && xhr.status == 200) {\r\n                        this.src = e.target.response.url;\r\n                        this.$emit('change', e.target.response.url);\r\n                        this.loaded = true;\r\n                    } else if (xhr.readyState == 4 && xhr.status != 200) {\r\n                        if (xhr.status == 400 && !canvasFileName) {\r\n                            //Для файлов с битым маймтипом рисуем на канве и отправляем результат\r\n                            let img = new Image();\r\n                            img.onload = () => {\r\n                                let compressUrl = compress(img);\r\n                                let blob = b64ToBlob(compressUrl.split(',')[1], 'image/jpeg');\r\n                                this.upload(blob, file.name);\r\n                            };\r\n                            img.src = URL.createObjectURL(file);\r\n                            return;\r\n                        }\r\n                        this.readLocalSrc(file)\r\n                        this.error = this.loaded = true;\r\n                    }\r\n\r\n                })\r\n                xhr.send(formData)\r\n            }\r\n        },\r\n        watch: {\r\n            file(nv) {\r\n                if (typeof nv === 'string') this.src = nv;\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style scoped>\r\n    .site-photo-card {\r\n        position: relative;\r\n        width: 100%;\r\n        background: #FFFFFF;\r\n        /* Grey 800 */\r\n\r\n        border-radius: 8px;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .site-photo-card.filled {\r\n        background-color: #F8F8F8;\r\n    }\r\n\r\n    .site-photo-card.focused, .site-photo-card:hover {\r\n        box-shadow: 0px 0px 9px rgba(140, 140, 140, 0.49);\r\n        border-radius: 8px;\r\n    }\r\n\r\n    .site-photo-card:after {\r\n        content: \"\";\r\n        display: block;\r\n        padding-bottom: 56%; /* 16/9 */\r\n    }\r\n\r\n    .site-photo-card-actions {\r\n        position: absolute;\r\n        right: 0;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .site-photo-card-content {\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        display: flex;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .edit-photo-icon {\r\n        margin-left: 8px;\r\n    }\r\n</style>\r\n<style>\r\n\r\n    .sm-photo-dialog .photo-cover {\r\n        position: absolute;\r\n        top: 32px;\r\n        left: 32px;\r\n        z-index: 101;\r\n    }\r\n\r\n    .sm-photo-dialog .close-btn {\r\n        position: absolute;\r\n        top: 32px;\r\n        right: 32px;\r\n    }\r\n\r\n    .sm-photo-dialog .bottom {\r\n        right: 32px;\r\n        bottom: 32px;\r\n        position: absolute;\r\n        width: fit-content;\r\n        display: flex;\r\n        flex-direction: row;\r\n    }\r\n\r\n    .sm-photo-dialog {\r\n        position: absolute;\r\n        z-index: 100;\r\n        display: flex;\r\n        box-shadow: none !important;\r\n        background: rgba(105, 109, 116, 0.6);\r\n        backdrop-filter: blur(10px);\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .dialog-image .v-image{\r\n        border-radius: 8px;\r\n    }\r\n    .dialog-image {\r\n        width: fit-content;\r\n        height: fit-content;\r\n        max-width: 100%;\r\n        position: relative;\r\n        padding: 16px;\r\n        border-radius: 8px;\r\n        overflow: hidden;\r\n    }\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.full[data-v-d4a6a2ea]{\n    width: 100%;\n    position: relative;\n    height: 4px;\n    background: #E1E1E1;\n    border-radius: 2px;\n}\n.active[data-v-d4a6a2ea]{\n    height: 4px;\n    background: #2e3e4e !important;\n    border-radius: 2px;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/ProgressBar.vue"],"names":[],"mappings":";AAgBA;IACA,WAAA;IACA,kBAAA;IACA,WAAA;IACA,mBAAA;IACA,kBAAA;AACA;AACA;IACA,WAAA;IACA,8BAAA;IACA,kBAAA;AACA","sourcesContent":["<template>\r\n    <v-row class=\"ma-0\">\r\n        <div class=\"full\">\r\n            <div class=\"active\" :style=\"{width: progress+'%'}\"/>\r\n        </div>\r\n    </v-row>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        props: ['progress'],\r\n        name: \"ProgressBar\"\r\n    }\r\n</script>\r\n\r\n<style scoped>\r\n    .full{\r\n        width: 100%;\r\n        position: relative;\r\n        height: 4px;\r\n        background: #E1E1E1;\r\n        border-radius: 2px;\r\n    }\r\n    .active{\r\n        height: 4px;\r\n        background: #2e3e4e !important;\r\n        border-radius: 2px;\r\n    }\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, "\n.photo-input[data-v-646fd8d9] {\n    position: absolute;\n    visibility: hidden;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/photo-loader.vue"],"names":[],"mappings":";AA2HA;IACA,kBAAA;IACA,kBAAA;AACA","sourcesContent":["<template>\r\n    <v-card class=\"d-flex flex-column pt-4 pb-4\" justify-center align-center elevation=\"0\">\r\n        <div v-if=\"one && loadedPhotos.length\" class=\"text-center\">{{loadedPhotos[0].name}}</div>\r\n        <v-row v-if=\"!one\" class=\"\">\r\n            <v-col xs=\"6\" md=\"3\" sm=\"6\" v-for=\"(photo, i) in carouselPhotos\" :key=\"i\" v-if=\"!!carouselPhotos[i]\">\r\n                <edit-photo-card\r\n                        :preload=\"preload\"\r\n                        :filled=\"true\"\r\n                        :file=\"photo\"\r\n                        @delete=\"() => deletePhoto(photo, i)\"\r\n                        contain\r\n                />\r\n            </v-col>\r\n            <v-col xs=\"6\" md=\"3\" sm=\"6\">\r\n                <edit-photo-card\r\n                    @click=\"() => $refs.btn.click()\">\r\n                    <drop-area @change=\"addPhoto\" :yet=\"carouselPhotos.length\"/>\r\n                    <template v-slot:actions>\r\n                        <div class=\"hidden\"></div>\r\n                    </template>\r\n                </edit-photo-card>\r\n            </v-col>\r\n        </v-row>\r\n    </v-card>\r\n</template>\r\n\r\n<script>\r\n\r\n    import EditPhotoCard from \"./EditPhotoCard\";\r\n    import DropArea from \"./DropArea\";\r\n\r\n    export default {\r\n        name: 'photo-loader',\r\n        props: {\r\n            radius: {\r\n                type: Number,\r\n            },\r\n            one: {\r\n                type: Boolean,\r\n                default: false,\r\n            },\r\n            photos: {\r\n                type: Array,\r\n                default: () => ([]),\r\n            },\r\n            preload: {\r\n                type: Boolean,\r\n                default: false,\r\n            }\r\n        },\r\n        components: {DropArea, EditPhotoCard},\r\n        data: (vm) => ({\r\n                n: 0,\r\n                photo: '',\r\n                loadedPhotos: [],\r\n                deleted: [],\r\n                carouselPhotos: vm.photos,\r\n                fileImg: null,\r\n        }),\r\n        updated() {\r\n        },\r\n        methods: {\r\n            deletePhoto(photo, cpi) {\r\n                if (photo.name) {\r\n                    this.loadedPhotos.forEach((file, i) => {\r\n                        if (file.name === photo.name) delete this.loadedPhotos[i];\r\n                    });\r\n                } else {\r\n                    this.deleted.push(this.photos[cpi].id);\r\n                }\r\n                delete this.carouselPhotos[cpi];\r\n                this.carouselPhotos = [...this.carouselPhotos];\r\n            },\r\n            getPhotos() {\r\n                return this.loadedPhotos.concat(this.deleted);\r\n            },\r\n            getFirst() {\r\n                return this.loadedPhotos[0];\r\n            },\r\n            returnFormData(val) {\r\n                this.$emit('save-photo', val)\r\n            },\r\n            updatePhoto(val) {\r\n                this.photo = val\r\n                this.showCropperDialog = false\r\n            },\r\n            clickOnInput() {\r\n                document.getElementById('files').files = (new DataTransfer()).files;\r\n                document.getElementById('files').click()\r\n\r\n            },\r\n            addPhoto(event) {\r\n                [...event.target.files].forEach((photo) => {\r\n                    this.fileImg = photo;\r\n                    if (this.fileImg.size > 5024000) {\r\n                        this.$root.$children[0].snackbarText = 'Размер файла не может быть больше 5МБ'\r\n                        this.$root.$children[0].snackbar = true\r\n                        return;\r\n                    }\r\n                    if (this.loadedPhotos.length > 10) {\r\n                        this.$root.$children[0].snackbarText = 'Вы не можете загрузить больше 10 фотографий'\r\n                        this.$root.$children[0].snackbar = true\r\n                        return;\r\n                    }\r\n                    this.carouselPhotos = [\r\n                        ...this.carouselPhotos,\r\n                        this.preload ? URL.createObjectURL(this.fileImg) : this.fileImg\r\n                    ];\r\n                    this.loadedPhotos.push(this.fileImg)\r\n                    this.n = this.loadedPhotos.length - 1\r\n                    this.fileImg = null;\r\n                })\r\n            },\r\n        },\r\n        watch: {\r\n            photos(nv) {\r\n                this.carouselPhotos = nv.map((file) => file.file);\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style scoped>\r\n    .photo-input {\r\n        position: absolute;\r\n        visibility: hidden;\r\n    }\r\n</style>\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.description .v-text-field__slot textarea {\n    display: none !important;\n}\n.description.v-text-field>.v-input__control>.v-input__slot:after ,\n.description.v-text-field>.v-input__control>.v-input__slot:before{\n    display: none !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/PostEdit.vue"],"names":[],"mappings":";AA4HA;IACA,wBAAA;AACA;AACA;;IAEA,wBAAA;AACA","sourcesContent":["<template>\r\n    <v-container\r\n            class=\"cover\">\r\n        <v-toolbar-title align=\"center\" justify=\"center\" class=\"mb-2\"\r\n        v-text=\"$route.params.id  == 0 ? 'Добавление новости' :  'Редактирование новости'\">\r\n        </v-toolbar-title>\r\n        <v-text-field\r\n            type=\"text\"\r\n            name=\"title\"\r\n            label=\"Заголовок\"\r\n            v-model=\"post.title\"\r\n            :error-messages=\"messages.title\"\r\n            >\r\n        </v-text-field>\r\n        <v-textarea\r\n                name=\"description\"\r\n                label=\"Описание\"\r\n                hint=\"Hint text\"\r\n                :value=\"' '\"\r\n                class=\"description \"\r\n                :error-messages=\"messages.description\"\r\n        ></v-textarea>\r\n        <editor\r\n                api-key=\"kapr0kh0v3vscnkppsxgig98vf6mgitaii8auw3p2pin1c5t\"\r\n                class=\"mt-2\"\r\n                v-model=\"post.description\"\r\n        >\r\n        </editor>\r\n        <v-spacer/>\r\n        <photo-loader ref=\"loader\" :photos=\"post.photos\"/>\r\n        <v-btn class=\"save-btn-text\"\r\n               @click=\"() => post.id ? update() : create()\"\r\n               color=\"success\"\r\n               :disabled=\"!(post.id> 0) && (!post.description || !post.title)\">\r\n            Сохранить\r\n        </v-btn>\r\n    </v-container>\r\n</template>\r\n\r\n<script>\r\n    import Editor from '@tinymce/tinymce-vue';\r\n    import PhotoLoader from '@/components/photo-loader'\r\n    export default {\r\n        name: \"PostAdd\",\r\n        components: {\r\n            Editor,\r\n            PhotoLoader\r\n        },\r\n        data: (vm) => {\r\n            return {\r\n                post: {\r\n                    id: Number.parseInt(vm.$route.params.id),\r\n                    title: '',\r\n                    description: '',\r\n                },\r\n                messages: {\r\n                    title: '',\r\n                    description: '',\r\n                }\r\n            }\r\n        },\r\n        mounted() {\r\n            let modelId = this.$route.params.id;\r\n            if (modelId != 0) {\r\n                window.axios.get('/post/'+ modelId).then((response) => {\r\n                    this.post = response.data.data;\r\n                }).catch((e) => {\r\n                    console.log(e);\r\n                    this.$root.$children[0].snackbarText = e?.response?.error || 'Произошла ошибка';\r\n                    this.$root.$children[0].snackbar = true;\r\n                });\r\n            }\r\n        },\r\n        methods: {\r\n            create() {\r\n                window.axios.post('/post', this.post)\r\n                    .then((r) => {\r\n                        this.post.id = r.data.data.id;\r\n                        this.update();\r\n                    }).catch((e) => {\r\n                    if (e.response && e.response.status === 422) {\r\n                        let errors = e.response.data.errors\r\n                        Object.keys(this.messages).forEach((k)=> {\r\n                            this.messages[k] = errors[k]?.[0] || '';\r\n                        });\r\n                    }\r\n                })\r\n            },\r\n             update() {\r\n                window.axios.put('/post/'+ this.post.id, this.post)\r\n                    .then((r) => {\r\n                        let newPhotos = this.$refs.loader.getPhotos();\r\n                        if (newPhotos.length) {\r\n                            const formData = new FormData()\r\n                            newPhotos.forEach((photo, i) => {\r\n                                if (photo.name) formData.append('post_photos['+i+']', photo, photo.name)\r\n                                else formData.append('delete_photos['+i+']', photo)\r\n                            })\r\n                            formData.append('_method', 'PUT')\r\n                            try {\r\n                                window.axios.post('/post/'+this.post.id, formData).then(() => {\r\n                                    this.$router.push({name: \"posts\"});\r\n                                })\r\n                            } catch (e) {\r\n                                this.$root.$children[0].snackbarText =  `Ошибка сохранения фотографии`\r\n                                this.$root.$children[0].snackbar = true\r\n                                this.$router.push({name: \"posts\"});\r\n                            }\r\n                        }\r\n                    }).catch((e) => {\r\n                    console.log(e);\r\n                    if (e.response && e.response.status === 422) {\r\n                        let errors = e.response.data.errors\r\n                        Object.keys(this.messages).forEach((k)=> {\r\n                            this.messages[k] = errors[k]?.[0] || '';\r\n                        });\r\n                    }\r\n                })\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style>\r\n    .description .v-text-field__slot textarea {\r\n        display: none !important;\r\n    }\r\n    .description.v-text-field>.v-input__control>.v-input__slot:after ,\r\n    .description.v-text-field>.v-input__control>.v-input__slot:before{\r\n        display: none !important;\r\n    }\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/DropArea.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/DropArea.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DropArea_vue_vue_type_template_id_5881e8f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropArea.vue?vue&type=template&id=5881e8f2&scoped=true& */ "./resources/js/components/DropArea.vue?vue&type=template&id=5881e8f2&scoped=true&");
/* harmony import */ var _DropArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropArea.vue?vue&type=script&lang=js& */ "./resources/js/components/DropArea.vue?vue&type=script&lang=js&");
/* harmony import */ var _DropArea_vue_vue_type_style_index_0_id_5881e8f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropArea.vue?vue&type=style&index=0&id=5881e8f2&scoped=true&lang=css& */ "./resources/js/components/DropArea.vue?vue&type=style&index=0&id=5881e8f2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _DropArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DropArea_vue_vue_type_template_id_5881e8f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DropArea_vue_vue_type_template_id_5881e8f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5881e8f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DropArea.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditPhotoCard.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/EditPhotoCard.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditPhotoCard_vue_vue_type_template_id_4abe411d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditPhotoCard.vue?vue&type=template&id=4abe411d&scoped=true& */ "./resources/js/components/EditPhotoCard.vue?vue&type=template&id=4abe411d&scoped=true&");
/* harmony import */ var _EditPhotoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditPhotoCard.vue?vue&type=script&lang=js& */ "./resources/js/components/EditPhotoCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _EditPhotoCard_vue_vue_type_style_index_0_id_4abe411d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditPhotoCard.vue?vue&type=style&index=0&id=4abe411d&scoped=true&lang=css& */ "./resources/js/components/EditPhotoCard.vue?vue&type=style&index=0&id=4abe411d&scoped=true&lang=css&");
/* harmony import */ var _EditPhotoCard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditPhotoCard.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/EditPhotoCard.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__.default)(
  _EditPhotoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EditPhotoCard_vue_vue_type_template_id_4abe411d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditPhotoCard_vue_vue_type_template_id_4abe411d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4abe411d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditPhotoCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProgressBar.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ProgressBar.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProgressBar_vue_vue_type_template_id_d4a6a2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true& */ "./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true&");
/* harmony import */ var _ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=script&lang=js& */ "./resources/js/components/ProgressBar.vue?vue&type=script&lang=js&");
/* harmony import */ var _ProgressBar_vue_vue_type_style_index_0_id_d4a6a2ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css& */ "./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProgressBar_vue_vue_type_template_id_d4a6a2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProgressBar_vue_vue_type_template_id_d4a6a2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d4a6a2ea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProgressBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/DropArea.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/DropArea.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropArea.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DropArea.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/EditPhotoCard.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/EditPhotoCard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPhotoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditPhotoCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPhotoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/ProgressBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ProgressBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProgressBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/DropArea.vue?vue&type=template&id=5881e8f2&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/DropArea.vue?vue&type=template&id=5881e8f2&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropArea_vue_vue_type_template_id_5881e8f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropArea_vue_vue_type_template_id_5881e8f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropArea_vue_vue_type_template_id_5881e8f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropArea.vue?vue&type=template&id=5881e8f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DropArea.vue?vue&type=template&id=5881e8f2&scoped=true&");


/***/ }),

/***/ "./resources/js/components/EditPhotoCard.vue?vue&type=template&id=4abe411d&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/EditPhotoCard.vue?vue&type=template&id=4abe411d&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPhotoCard_vue_vue_type_template_id_4abe411d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPhotoCard_vue_vue_type_template_id_4abe411d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPhotoCard_vue_vue_type_template_id_4abe411d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditPhotoCard.vue?vue&type=template&id=4abe411d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=template&id=4abe411d&scoped=true&");


/***/ }),

/***/ "./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_d4a6a2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_d4a6a2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_d4a6a2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true&");


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

/***/ "./resources/js/components/DropArea.vue?vue&type=style&index=0&id=5881e8f2&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/DropArea.vue?vue&type=style&index=0&id=5881e8f2&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DropArea_vue_vue_type_style_index_0_id_5881e8f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropArea.vue?vue&type=style&index=0&id=5881e8f2&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DropArea.vue?vue&type=style&index=0&id=5881e8f2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DropArea_vue_vue_type_style_index_0_id_5881e8f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DropArea_vue_vue_type_style_index_0_id_5881e8f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DropArea_vue_vue_type_style_index_0_id_5881e8f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DropArea_vue_vue_type_style_index_0_id_5881e8f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/EditPhotoCard.vue?vue&type=style&index=0&id=4abe411d&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/EditPhotoCard.vue?vue&type=style&index=0&id=4abe411d&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPhotoCard_vue_vue_type_style_index_0_id_4abe411d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditPhotoCard.vue?vue&type=style&index=0&id=4abe411d&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=style&index=0&id=4abe411d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPhotoCard_vue_vue_type_style_index_0_id_4abe411d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPhotoCard_vue_vue_type_style_index_0_id_4abe411d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPhotoCard_vue_vue_type_style_index_0_id_4abe411d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPhotoCard_vue_vue_type_style_index_0_id_4abe411d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/EditPhotoCard.vue?vue&type=style&index=1&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/EditPhotoCard.vue?vue&type=style&index=1&lang=css& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPhotoCard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditPhotoCard.vue?vue&type=style&index=1&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPhotoCard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPhotoCard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPhotoCard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPhotoCard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_d4a6a2ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_d4a6a2ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_d4a6a2ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_d4a6a2ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_d4a6a2ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DropArea.vue?vue&type=template&id=5881e8f2&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DropArea.vue?vue&type=template&id=5881e8f2&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      staticClass: "drop-area",
      class: _vm.$vuetify.breakpoint.smAndDown ? ["drop-sm"] : [],
      attrs: { id: "drop-area" }
    },
    [
      _c("form", { staticClass: "drop-form" }, [
        _c("input", {
          staticClass: "hide",
          attrs: {
            type: "file",
            id: "fileElem",
            multiple: "",
            accept: "image/*"
          },
          on: {
            change: function(e) {
              return _vm.$emit("change", e)
            }
          }
        }),
        _vm._v(" "),
        _c("label", { staticClass: "drop-btn", attrs: { for: "fileElem" } }, [
          _vm._v(_vm._s(!_vm.yet ? "Загрузить фото" : "Загрузить еще"))
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "format-file-desc" }, [
          _vm._v("Формат – jpg, png")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "file-desc hover" }, [
          _vm._v("Отпустите фотографию сюда")
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=template&id=4abe411d&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=template&id=4abe411d&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      staticClass: "site-photo-card",
      class: { focused: _vm.focus, filled: _vm.filled }
    },
    [
      _c(
        "div",
        {
          staticClass: "site-photo-card-content",
          staticStyle: { "z-index": "1" }
        },
        [
          _vm._t("default", function() {
            return [
              _vm.loaded && _vm.src
                ? _c("v-img", {
                    attrs: { src: _vm.src, cover: "", height: "100%" },
                    on: {
                      click: function($event) {
                        _vm.$emit("click", _vm.$attrs["value"])
                        _vm.open = true
                      }
                    }
                  })
                : !_vm.loaded && !_vm.error
                ? _c(
                    "v-row",
                    {
                      staticClass: "pa-8",
                      staticStyle: { "align-items": "center" },
                      attrs: { xs: "12" }
                    },
                    [_c("progress-bar", { attrs: { progress: _vm.progress } })],
                    1
                  )
                : _vm._e()
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "site-photo-card-actions",
          staticStyle: { "z-index": "2" }
        },
        [
          _vm._t("actions", function() {
            return [
              _c(
                "v-row",
                {
                  staticClass: "pl-5 pr-5 pt-2 justify-end",
                  attrs: { xs: "12" }
                },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "mr-3",
                      attrs: { fab: "", small: "" },
                      on: {
                        click: function($event) {
                          return _vm.$emit("delete")
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-delete")])],
                    1
                  )
                ],
                1
              )
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _vm.open
        ? _c(
            "v-dialog",
            {
              attrs: { "content-class": "sm-photo-dialog", fullscreen: true },
              model: {
                value: _vm.open,
                callback: function($$v) {
                  _vm.open = $$v
                },
                expression: "open"
              }
            },
            [
              _c(
                "div",
                { staticClass: "dialog-image" },
                [
                  _vm.loaded && _vm.src
                    ? _c("v-img", {
                        attrs: {
                          src: _vm.src,
                          "max-height": "90vh",
                          contain: ""
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "close-btn",
                      attrs: { icon: "", color: "gray" },
                      on: {
                        click: function($event) {
                          _vm.$emit("focusOut")
                          _vm.open = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  )
                ],
                1
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("v-row", { staticClass: "ma-0" }, [
    _c("div", { staticClass: "full" }, [
      _c("div", { staticClass: "active", style: { width: _vm.progress + "%" } })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



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
      staticClass: "d-flex flex-column pt-4 pb-4",
      attrs: { "justify-center": "", "align-center": "", elevation: "0" }
    },
    [
      _vm.one && _vm.loadedPhotos.length
        ? _c("div", { staticClass: "text-center" }, [
            _vm._v(_vm._s(_vm.loadedPhotos[0].name))
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.one
        ? _c(
            "v-row",
            {},
            [
              _vm._l(_vm.carouselPhotos, function(photo, i) {
                return !!_vm.carouselPhotos[i]
                  ? _c(
                      "v-col",
                      { key: i, attrs: { xs: "6", md: "3", sm: "6" } },
                      [
                        _c("edit-photo-card", {
                          attrs: {
                            preload: _vm.preload,
                            filled: true,
                            file: photo,
                            contain: ""
                          },
                          on: {
                            delete: function() {
                              return _vm.deletePhoto(photo, i)
                            }
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              }),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { xs: "6", md: "3", sm: "6" } },
                [
                  _c(
                    "edit-photo-card",
                    {
                      on: {
                        click: function() {
                          return _vm.$refs.btn.click()
                        }
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "actions",
                            fn: function() {
                              return [_c("div", { staticClass: "hidden" })]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        false,
                        810021170
                      )
                    },
                    [
                      _c("drop-area", {
                        attrs: { yet: _vm.carouselPhotos.length },
                        on: { change: _vm.addPhoto }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            2
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
      _c("photo-loader", { ref: "loader", attrs: { photos: _vm.post.photos } }),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "save-btn-text",
          attrs: {
            color: "success",
            disabled:
              !(_vm.post.id > 0) && (!_vm.post.description || !_vm.post.title)
          },
          on: {
            click: function() {
              return _vm.post.id ? _vm.update() : _vm.create()
            }
          }
        },
        [_vm._v("\n        Сохранить\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DropArea.vue?vue&type=style&index=0&id=5881e8f2&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DropArea.vue?vue&type=style&index=0&id=5881e8f2&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropArea.vue?vue&type=style&index=0&id=5881e8f2&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DropArea.vue?vue&type=style&index=0&id=5881e8f2&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("9e85e0fa", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=style&index=0&id=4abe411d&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=style&index=0&id=4abe411d&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditPhotoCard.vue?vue&type=style&index=0&id=4abe411d&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=style&index=0&id=4abe411d&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2008f8ea", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=style&index=1&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditPhotoCard.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditPhotoCard.vue?vue&type=style&index=1&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("08c2778c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("28f3e37c", content, false, {});
// Hot Module Replacement
if(false) {}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1NjcmlwdExvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1RpbnlNQ0UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGlueW1jZS90aW55bWNlLXZ1ZS9saWIvY2pzL21haW4vdHMvY29tcG9uZW50cy9FZGl0b3JQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRHJvcEFyZWEudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdEVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ecm9wQXJlYS52dWU/NmNhNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZT9jYzM4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0VkaXRQaG90b0NhcmQudnVlP2IwMTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIudnVlPzQwNzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZT82NmEwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qb3N0RWRpdC52dWU/ODdmNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ecm9wQXJlYS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ecm9wQXJlYS52dWU/OGFiNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZT81ODFmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZT9iYjU4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWU/MjZlYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdEVkaXQudnVlPzhkNDIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRHJvcEFyZWEudnVlPzQ1NzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWU/ODNjNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci52dWU/YmFkNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlPzIxNzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RFZGl0LnZ1ZT8yNjcyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Ryb3BBcmVhLnZ1ZT84ODNjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0VkaXRQaG90b0NhcmQudnVlP2JiZjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWU/YTQyZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci52dWU/Nzc1OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlPzc1NTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RFZGl0LnZ1ZT8wODdhIl0sIm5hbWVzIjpbImNvbXByZXNzIiwiaW1nIiwibW9kaWZ5Q29udGV4dCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsImJhc2U2NERhdGEiLCJ0b0RhdGFVUkwiLCJiNjRUb0Jsb2IiLCJiNjREYXRhIiwiY29udGVudFR5cGUiLCJieXRlQ2hhcmFjdGVycyIsImF0b2IiLCJidWZmZXIiLCJhQnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJsZW5ndGgiLCJ1QnVmZmVyIiwiVWludDhBcnJheSIsImkiLCJjaGFyQ29kZUF0IiwicHVzaCIsIkJsb2IiLCJ0eXBl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QXVYO0FBQzdZO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwySkFBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7OztBQ1hmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGlyQkFBMlY7QUFDalg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJKQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfUG9zdEVkaXRfdnVlZmMzZWJlYjgwY2Q0ZWI0ODRiYzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBVdGlsc18xID0gcmVxdWlyZShcIi4vVXRpbHNcIik7XG52YXIgY3JlYXRlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGlzdGVuZXJzOiBbXSxcbiAgICAgICAgc2NyaXB0SWQ6IFV0aWxzXzEudXVpZCgndGlueS1zY3JpcHQnKSxcbiAgICAgICAgc2NyaXB0TG9hZGVkOiBmYWxzZVxuICAgIH07XG59O1xudmFyIENyZWF0ZVNjcmlwdExvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdGUgPSBjcmVhdGVTdGF0ZSgpO1xuICAgIHZhciBpbmplY3RTY3JpcHRUYWcgPSBmdW5jdGlvbiAoc2NyaXB0SWQsIGRvYywgdXJsLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2NyaXB0VGFnID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHRUYWcucmVmZXJyZXJQb2xpY3kgPSAnb3JpZ2luJztcbiAgICAgICAgc2NyaXB0VGFnLnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdFRhZy5pZCA9IHNjcmlwdElkO1xuICAgICAgICBzY3JpcHRUYWcuc3JjID0gdXJsO1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNjcmlwdFRhZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgaGFuZGxlcik7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9O1xuICAgICAgICBzY3JpcHRUYWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZXIpO1xuICAgICAgICBpZiAoZG9jLmhlYWQpIHtcbiAgICAgICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdFRhZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBsb2FkID0gZnVuY3Rpb24gKGRvYywgdXJsLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoc3RhdGUuc2NyaXB0TG9hZGVkKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKCFkb2MuZ2V0RWxlbWVudEJ5SWQoc3RhdGUuc2NyaXB0SWQpKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U2NyaXB0VGFnKHN0YXRlLnNjcmlwdElkLCBkb2MsIHVybCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zY3JpcHRMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBPbmx5IHRvIGJlIHVzZWQgYnkgdGVzdHMuXG4gICAgdmFyIHJlaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RhdGUgPSBjcmVhdGVTdGF0ZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZDogbG9hZCxcbiAgICAgICAgcmVpbml0aWFsaXplOiByZWluaXRpYWxpemVcbiAgICB9O1xufTtcbnZhciBTY3JpcHRMb2FkZXIgPSBDcmVhdGVTY3JpcHRMb2FkZXIoKTtcbmV4cG9ydHMuU2NyaXB0TG9hZGVyID0gU2NyaXB0TG9hZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ2V0R2xvYmFsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKTsgfTtcbnZhciBnZXRUaW55bWNlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnbG9iYWwgPSBnZXRHbG9iYWwoKTtcbiAgICByZXR1cm4gZ2xvYmFsICYmIGdsb2JhbC50aW55bWNlID8gZ2xvYmFsLnRpbnltY2UgOiBudWxsO1xufTtcbmV4cG9ydHMuZ2V0VGlueW1jZSA9IGdldFRpbnltY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB2YWxpZEV2ZW50cyA9IFtcbiAgICAnb25BY3RpdmF0ZScsXG4gICAgJ29uQWRkVW5kbycsXG4gICAgJ29uQmVmb3JlQWRkVW5kbycsXG4gICAgJ29uQmVmb3JlRXhlY0NvbW1hbmQnLFxuICAgICdvbkJlZm9yZUdldENvbnRlbnQnLFxuICAgICdvbkJlZm9yZVJlbmRlclVJJyxcbiAgICAnb25CZWZvcmVTZXRDb250ZW50JyxcbiAgICAnb25CZWZvcmVQYXN0ZScsXG4gICAgJ29uQmx1cicsXG4gICAgJ29uQ2hhbmdlJyxcbiAgICAnb25DbGVhclVuZG9zJyxcbiAgICAnb25DbGljaycsXG4gICAgJ29uQ29udGV4dE1lbnUnLFxuICAgICdvbkNvcHknLFxuICAgICdvbkN1dCcsXG4gICAgJ29uRGJsY2xpY2snLFxuICAgICdvbkRlYWN0aXZhdGUnLFxuICAgICdvbkRpcnR5JyxcbiAgICAnb25EcmFnJyxcbiAgICAnb25EcmFnRHJvcCcsXG4gICAgJ29uRHJhZ0VuZCcsXG4gICAgJ29uRHJhZ0dlc3R1cmUnLFxuICAgICdvbkRyYWdPdmVyJyxcbiAgICAnb25Ecm9wJyxcbiAgICAnb25FeGVjQ29tbWFuZCcsXG4gICAgJ29uRm9jdXMnLFxuICAgICdvbkZvY3VzSW4nLFxuICAgICdvbkZvY3VzT3V0JyxcbiAgICAnb25HZXRDb250ZW50JyxcbiAgICAnb25IaWRlJyxcbiAgICAnb25Jbml0JyxcbiAgICAnb25LZXlEb3duJyxcbiAgICAnb25LZXlQcmVzcycsXG4gICAgJ29uS2V5VXAnLFxuICAgICdvbkxvYWRDb250ZW50JyxcbiAgICAnb25Nb3VzZURvd24nLFxuICAgICdvbk1vdXNlRW50ZXInLFxuICAgICdvbk1vdXNlTGVhdmUnLFxuICAgICdvbk1vdXNlTW92ZScsXG4gICAgJ29uTW91c2VPdXQnLFxuICAgICdvbk1vdXNlT3ZlcicsXG4gICAgJ29uTW91c2VVcCcsXG4gICAgJ29uTm9kZUNoYW5nZScsXG4gICAgJ29uT2JqZWN0UmVzaXplU3RhcnQnLFxuICAgICdvbk9iamVjdFJlc2l6ZWQnLFxuICAgICdvbk9iamVjdFNlbGVjdGVkJyxcbiAgICAnb25QYXN0ZScsXG4gICAgJ29uUG9zdFByb2Nlc3MnLFxuICAgICdvblBvc3RSZW5kZXInLFxuICAgICdvblByZVByb2Nlc3MnLFxuICAgICdvblByb2dyZXNzU3RhdGUnLFxuICAgICdvblJlZG8nLFxuICAgICdvblJlbW92ZScsXG4gICAgJ29uUmVzZXQnLFxuICAgICdvblNhdmVDb250ZW50JyxcbiAgICAnb25TZWxlY3Rpb25DaGFuZ2UnLFxuICAgICdvblNldEF0dHJpYicsXG4gICAgJ29uU2V0Q29udGVudCcsXG4gICAgJ29uU2hvdycsXG4gICAgJ29uU3VibWl0JyxcbiAgICAnb25VbmRvJyxcbiAgICAnb25WaXN1YWxBaWQnXG5dO1xudmFyIGlzVmFsaWRLZXkgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB2YWxpZEV2ZW50cy5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBldmVudC50b0xvd2VyQ2FzZSgpOyB9KS5pbmRleE9mKGtleS50b0xvd2VyQ2FzZSgpKSAhPT0gLTE7IH07XG5leHBvcnRzLmlzVmFsaWRLZXkgPSBpc1ZhbGlkS2V5O1xudmFyIGJpbmRIYW5kbGVycyA9IGZ1bmN0aW9uIChpbml0RXZlbnQsIGxpc3RlbmVycywgZWRpdG9yKSB7XG4gICAgT2JqZWN0LmtleXMobGlzdGVuZXJzKVxuICAgICAgICAuZmlsdGVyKGlzVmFsaWRLZXkpXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBsaXN0ZW5lcnNba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnb25Jbml0Jykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoaW5pdEV2ZW50LCBlZGl0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWRpdG9yLm9uKGtleS5zdWJzdHJpbmcoMiksIGZ1bmN0aW9uIChlKSB7IHJldHVybiBoYW5kbGVyKGUsIGVkaXRvcik7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0cy5iaW5kSGFuZGxlcnMgPSBiaW5kSGFuZGxlcnM7XG52YXIgYmluZE1vZGVsSGFuZGxlcnMgPSBmdW5jdGlvbiAoY3R4LCBlZGl0b3IpIHtcbiAgICB2YXIgbW9kZWxFdmVudHMgPSBjdHguJHByb3BzLm1vZGVsRXZlbnRzID8gY3R4LiRwcm9wcy5tb2RlbEV2ZW50cyA6IG51bGw7XG4gICAgdmFyIG5vcm1hbGl6ZWRFdmVudHMgPSBBcnJheS5pc0FycmF5KG1vZGVsRXZlbnRzKSA/IG1vZGVsRXZlbnRzLmpvaW4oJyAnKSA6IG1vZGVsRXZlbnRzO1xuICAgIGVkaXRvci5vbihub3JtYWxpemVkRXZlbnRzID8gbm9ybWFsaXplZEV2ZW50cyA6ICdjaGFuZ2UgaW5wdXQgdW5kbyByZWRvJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjdHguJGVtaXQoJ2lucHV0JywgZWRpdG9yLmdldENvbnRlbnQoeyBmb3JtYXQ6IGN0eC4kcHJvcHMub3V0cHV0Rm9ybWF0IH0pKTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmJpbmRNb2RlbEhhbmRsZXJzID0gYmluZE1vZGVsSGFuZGxlcnM7XG52YXIgaW5pdEVkaXRvciA9IGZ1bmN0aW9uIChpbml0RXZlbnQsIGN0eCwgZWRpdG9yKSB7XG4gICAgdmFyIHZhbHVlID0gY3R4LiRwcm9wcy52YWx1ZSA/IGN0eC4kcHJvcHMudmFsdWUgOiAnJztcbiAgICB2YXIgaW5pdGlhbFZhbHVlID0gY3R4LiRwcm9wcy5pbml0aWFsVmFsdWUgPyBjdHguJHByb3BzLmluaXRpYWxWYWx1ZSA6ICcnO1xuICAgIGVkaXRvci5zZXRDb250ZW50KHZhbHVlIHx8IChjdHguaW5pdGlhbGl6ZWQgPyBjdHguY2FjaGUgOiBpbml0aWFsVmFsdWUpKTtcbiAgICAvLyBBbHdheXMgYmluZCB0aGUgdmFsdWUgbGlzdGVuZXIgaW4gY2FzZSB1c2VycyB1c2UgOnZhbHVlIGluc3RlYWQgb2Ygdi1tb2RlbFxuICAgIGN0eC4kd2F0Y2goJ3ZhbHVlJywgZnVuY3Rpb24gKHZhbCwgcHJldlZhbCkge1xuICAgICAgICBpZiAoZWRpdG9yICYmIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZhbCAhPT0gcHJldlZhbCAmJiB2YWwgIT09IGVkaXRvci5nZXRDb250ZW50KHsgZm9ybWF0OiBjdHguJHByb3BzLm91dHB1dEZvcm1hdCB9KSkge1xuICAgICAgICAgICAgZWRpdG9yLnNldENvbnRlbnQodmFsKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGNoZWNrcyBpZiB0aGUgdi1tb2RlbCBzaG9ydGhhbmQgaXMgdXNlZCAod2hpY2ggc2V0cyBhbiB2LW9uOmlucHV0IGxpc3RlbmVyKSBhbmQgdGhlbiBiaW5kcyBlaXRoZXJcbiAgICAvLyBzcGVjaWZpZWQgdGhlIGV2ZW50cyBvciBkZWZhdWx0cyB0byBcImNoYW5nZSBrZXl1cFwiIGV2ZW50IGFuZCBlbWl0cyB0aGUgZWRpdG9yIGNvbnRlbnQgb24gdGhhdCBldmVudFxuICAgIGlmIChjdHguJGxpc3RlbmVycy5pbnB1dCkge1xuICAgICAgICBiaW5kTW9kZWxIYW5kbGVycyhjdHgsIGVkaXRvcik7XG4gICAgfVxuICAgIGJpbmRIYW5kbGVycyhpbml0RXZlbnQsIGN0eC4kbGlzdGVuZXJzLCBlZGl0b3IpO1xuICAgIGN0eC5pbml0aWFsaXplZCA9IHRydWU7XG59O1xuZXhwb3J0cy5pbml0RWRpdG9yID0gaW5pdEVkaXRvcjtcbnZhciB1bmlxdWUgPSAwO1xudmFyIHV1aWQgPSBmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKTtcbiAgICB1bmlxdWUrKztcbiAgICByZXR1cm4gcHJlZml4ICsgJ18nICsgcmFuZG9tICsgdW5pcXVlICsgU3RyaW5nKHRpbWUpO1xufTtcbmV4cG9ydHMudXVpZCA9IHV1aWQ7XG52YXIgaXNUZXh0YXJlYSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYSc7XG59O1xuZXhwb3J0cy5pc1RleHRhcmVhID0gaXNUZXh0YXJlYTtcbnZhciBub3JtYWxpemVQbHVnaW5BcnJheSA9IGZ1bmN0aW9uIChwbHVnaW5zKSB7XG4gICAgaWYgKHR5cGVvZiBwbHVnaW5zID09PSAndW5kZWZpbmVkJyB8fCBwbHVnaW5zID09PSAnJykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBsdWdpbnMpID8gcGx1Z2lucyA6IHBsdWdpbnMuc3BsaXQoJyAnKTtcbn07XG52YXIgbWVyZ2VQbHVnaW5zID0gZnVuY3Rpb24gKGluaXRQbHVnaW5zLCBpbnB1dFBsdWdpbnMpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplUGx1Z2luQXJyYXkoaW5pdFBsdWdpbnMpLmNvbmNhdChub3JtYWxpemVQbHVnaW5BcnJheShpbnB1dFBsdWdpbnMpKTtcbn07XG5leHBvcnRzLm1lcmdlUGx1Z2lucyA9IG1lcmdlUGx1Z2lucztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDsgfTtcbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTY3JpcHRMb2FkZXJfMSA9IHJlcXVpcmUoXCIuLi9TY3JpcHRMb2FkZXJcIik7XG52YXIgVGlueU1DRV8xID0gcmVxdWlyZShcIi4uL1RpbnlNQ0VcIik7XG52YXIgVXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9VdGlsc1wiKTtcbnZhciBFZGl0b3JQcm9wVHlwZXNfMSA9IHJlcXVpcmUoXCIuL0VkaXRvclByb3BUeXBlc1wiKTtcbnZhciByZW5kZXJJbmxpbmUgPSBmdW5jdGlvbiAoaCwgaWQsIHRhZ05hbWUpIHtcbiAgICByZXR1cm4gaCh0YWdOYW1lID8gdGFnTmFtZSA6ICdkaXYnLCB7XG4gICAgICAgIGF0dHJzOiB7IGlkOiBpZCB9XG4gICAgfSk7XG59O1xudmFyIHJlbmRlcklmcmFtZSA9IGZ1bmN0aW9uIChoLCBpZCkge1xuICAgIHJldHVybiBoKCd0ZXh0YXJlYScsIHtcbiAgICAgICAgYXR0cnM6IHsgaWQ6IGlkIH0sXG4gICAgICAgIHN0eWxlOiB7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH1cbiAgICB9KTtcbn07XG52YXIgaW5pdGlhbGlzZSA9IGZ1bmN0aW9uIChjdHgpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmluYWxJbml0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGN0eC4kcHJvcHMuaW5pdCksIHsgcmVhZG9ubHk6IGN0eC4kcHJvcHMuZGlzYWJsZWQsIHNlbGVjdG9yOiBcIiNcIiArIGN0eC5lbGVtZW50SWQsIHBsdWdpbnM6IFV0aWxzXzEubWVyZ2VQbHVnaW5zKGN0eC4kcHJvcHMuaW5pdCAmJiBjdHguJHByb3BzLmluaXQucGx1Z2lucywgY3R4LiRwcm9wcy5wbHVnaW5zKSwgdG9vbGJhcjogY3R4LiRwcm9wcy50b29sYmFyIHx8IChjdHguJHByb3BzLmluaXQgJiYgY3R4LiRwcm9wcy5pbml0LnRvb2xiYXIpLCBpbmxpbmU6IGN0eC5pbmxpbmVFZGl0b3IsIHNldHVwOiBmdW5jdGlvbiAoZWRpdG9yKSB7XG4gICAgICAgICAgICBjdHguZWRpdG9yID0gZWRpdG9yO1xuICAgICAgICAgICAgZWRpdG9yLm9uKCdpbml0JywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIFV0aWxzXzEuaW5pdEVkaXRvcihlLCBjdHgsIGVkaXRvcik7IH0pO1xuICAgICAgICAgICAgaWYgKGN0eC4kcHJvcHMuaW5pdCAmJiB0eXBlb2YgY3R4LiRwcm9wcy5pbml0LnNldHVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY3R4LiRwcm9wcy5pbml0LnNldHVwKGVkaXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gfSk7XG4gICAgaWYgKFV0aWxzXzEuaXNUZXh0YXJlYShjdHguZWxlbWVudCkpIHtcbiAgICAgICAgY3R4LmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuICAgICAgICBjdHguZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfVxuICAgIFRpbnlNQ0VfMS5nZXRUaW55bWNlKCkuaW5pdChmaW5hbEluaXQpO1xufTsgfTtcbmV4cG9ydHMuRWRpdG9yID0ge1xuICAgIHByb3BzOiBFZGl0b3JQcm9wVHlwZXNfMS5lZGl0b3JQcm9wcyxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gdGhpcy4kcHJvcHMuaWQgfHwgVXRpbHNfMS51dWlkKCd0aW55LXZ1ZScpO1xuICAgICAgICB0aGlzLmlubGluZUVkaXRvciA9ICh0aGlzLiRwcm9wcy5pbml0ICYmIHRoaXMuJHByb3BzLmluaXQuaW5saW5lKSB8fCB0aGlzLiRwcm9wcy5pbmxpbmU7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGRpc2FibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5zZXRNb2RlKHRoaXMuZGlzYWJsZWQgPyAncmVhZG9ubHknIDogJ2Rlc2lnbicpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuJGVsO1xuICAgICAgICBpZiAoVGlueU1DRV8xLmdldFRpbnltY2UoKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaW5pdGlhbGlzZSh0aGlzKSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudCkge1xuICAgICAgICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLiRwcm9wcy5jbG91ZENoYW5uZWwgPyB0aGlzLiRwcm9wcy5jbG91ZENoYW5uZWwgOiAnNSc7XG4gICAgICAgICAgICB2YXIgYXBpS2V5ID0gdGhpcy4kcHJvcHMuYXBpS2V5ID8gdGhpcy4kcHJvcHMuYXBpS2V5IDogJ25vLWFwaS1rZXknO1xuICAgICAgICAgICAgdmFyIHNjcmlwdFNyYyA9IFV0aWxzXzEuaXNOdWxsT3JVbmRlZmluZWQodGhpcy4kcHJvcHMudGlueW1jZVNjcmlwdFNyYykgP1xuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4udGlueS5jbG91ZC8xL1wiICsgYXBpS2V5ICsgXCIvdGlueW1jZS9cIiArIGNoYW5uZWwgKyBcIi90aW55bWNlLm1pbi5qc1wiIDpcbiAgICAgICAgICAgICAgICB0aGlzLiRwcm9wcy50aW55bWNlU2NyaXB0U3JjO1xuICAgICAgICAgICAgU2NyaXB0TG9hZGVyXzEuU2NyaXB0TG9hZGVyLmxvYWQodGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQsIHNjcmlwdFNyYywgaW5pdGlhbGlzZSh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKFRpbnlNQ0VfMS5nZXRUaW55bWNlKCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIFRpbnlNQ0VfMS5nZXRUaW55bWNlKCkucmVtb3ZlKHRoaXMuZWRpdG9yKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGVhY3RpdmF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXRoaXMuaW5saW5lRWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlID0gdGhpcy5lZGl0b3IuZ2V0Q29udGVudCgpO1xuICAgICAgICAgICAgKF9hID0gVGlueU1DRV8xLmdldFRpbnltY2UoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZSh0aGlzLmVkaXRvcik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFjdGl2YXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5saW5lRWRpdG9yICYmIHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIGluaXRpYWxpc2UodGhpcykoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmxpbmVFZGl0b3IgPyByZW5kZXJJbmxpbmUoaCwgdGhpcy5lbGVtZW50SWQsIHRoaXMuJHByb3BzLnRhZ05hbWUpIDogcmVuZGVySWZyYW1lKGgsIHRoaXMuZWxlbWVudElkKTtcbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmVkaXRvclByb3BzID0ge1xuICAgIGFwaUtleTogU3RyaW5nLFxuICAgIGNsb3VkQ2hhbm5lbDogU3RyaW5nLFxuICAgIGlkOiBTdHJpbmcsXG4gICAgaW5pdDogT2JqZWN0LFxuICAgIGluaXRpYWxWYWx1ZTogU3RyaW5nLFxuICAgIGlubGluZTogQm9vbGVhbixcbiAgICBtb2RlbEV2ZW50czogW1N0cmluZywgQXJyYXldLFxuICAgIHBsdWdpbnM6IFtTdHJpbmcsIEFycmF5XSxcbiAgICB0YWdOYW1lOiBTdHJpbmcsXG4gICAgdG9vbGJhcjogW1N0cmluZywgQXJyYXldLFxuICAgIHZhbHVlOiBTdHJpbmcsXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgdGlueW1jZVNjcmlwdFNyYzogU3RyaW5nLFxuICAgIG91dHB1dEZvcm1hdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuIHByb3AgPT09ICdodG1sJyB8fCBwcm9wID09PSAndGV4dCc7IH1cbiAgICB9LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEVkaXRvcl8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9FZGl0b3JcIik7XG5leHBvcnRzLmRlZmF1bHQgPSBFZGl0b3JfMS5FZGl0b3I7XG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGlkPVwiZHJvcC1hcmVhXCIgY2xhc3M9XCJkcm9wLWFyZWFcIiA6Y2xhc3M9XCIkdnVldGlmeS5icmVha3BvaW50LnNtQW5kRG93biA/IFsnZHJvcC1zbSddIDogW11cIj5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cImRyb3AtZm9ybVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImZpbGVFbGVtXCIgbXVsdGlwbGUgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiKGUpID0+ICRlbWl0KCdjaGFuZ2UnLCBlKVwiIGNsYXNzPVwiaGlkZVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkcm9wLWJ0blwiIGZvcj1cImZpbGVFbGVtXCI+e3sheWV0ID8gJ9CX0LDQs9GA0YPQt9C40YLRjCDRhNC+0YLQvicgOiAn0JfQsNCz0YDRg9C30LjRgtGMINC10YnQtSd9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9ybWF0LWZpbGUtZGVzY1wiPtCk0L7RgNC80LDRgiDigJMganBnLCBwbmc8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZmlsZS1kZXNjIGhvdmVyXCI+0J7RgtC/0YPRgdGC0LjRgtC1INGE0L7RgtC+0LPRgNCw0YTQuNGOINGB0Y7QtNCwPC9wPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIkRyb3BBcmVhXCIsXHJcbiAgICAgICAgZGF0YTogKHZtKSA9PiAoe3ZtfSksXHJcbiAgICAgICAgcHJvcHM6IFsneWV0J10sXHJcbiAgICAgICAgbW91bnRlZCh2bSkge1xyXG4gICAgICAgICAgICBsZXQgZHJvcEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcC1hcmVhJyk7XHJcbiAgICAgICAgICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJywgJ2RyYWdsZWF2ZScsICdkcm9wJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHByZXZlbnREZWZhdWx0cywgZmFsc2UpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdHMoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZvY3VzLCBmYWxzZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFsnZHJhZ2xlYXZlJywgJ2Ryb3AnXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkcm9wQXJlYS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdW5mb2N1cywgZmFsc2UpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZm9jdXMoZSkge1xyXG4gICAgICAgICAgICAgICAgZHJvcEFyZWEuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB1bmZvY3VzKGUpIHtcclxuICAgICAgICAgICAgICAgIGRyb3BBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzJylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlRHJvcCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHQgPSBlLmRhdGFUcmFuc2ZlclxyXG4gICAgICAgICAgICAgICAgbGV0IGZpbGVzID0gZHQuZmlsZXNcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRmlsZXMoZmlsZXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZURyb3AsIGZhbHNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgaGFuZGxlRmlsZXMoZmlsZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHt0YXJnZXQ6e2ZpbGVzfX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuZHJvcC1hcmVhOm5vdCguZHJvcC1zbSkge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjQUZBRkFGO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICNkcm9wLWFyZWEuZm9jdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvdmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb2N1cyAuaGlkZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb2N1cyAuaG92ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZHJvcC1hcmVhOm5vdCguZHJvcC1zbSkgLmRyb3AtZm9ybSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiA1MDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmRyb3AtYnRuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRyb3Atc20gLmRyb3AtYnRue1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAjZmlsZUVsZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbGUtZGVzYyB7XHJcblxyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBjb2xvcjogIzRBNEE0QTtcclxuICAgIH1cclxuXHJcbiAgICAuZHJvcC1zbSAuZmlsZS1kZXNjIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICB9XHJcbiAgICAuZm9ybWF0LWZpbGUtZGVzYyB7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI0FGQUZBRjtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cInNpdGUtcGhvdG8tY2FyZFwiXHJcbiAgICAgICAgIDpjbGFzcz1cIntmb2N1c2VkOiBmb2N1cywgZmlsbGVkfVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLXBob3RvLWNhcmQtY29udGVudFwiIHN0eWxlPVwiei1pbmRleDogMTtcIj5cclxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgIDx2LWltZyB2LWlmPVwibG9hZGVkICYmIHNyY1wiIDpzcmM9XCJzcmNcIiBjb3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIiBAY2xpY2s9XCIkZW1pdCgnY2xpY2snLCAkYXR0cnNbJ3ZhbHVlJ10pOyBvcGVuPXRydWVcIi8+XHJcbiAgICAgICAgICAgICAgICA8di1yb3cgdi1lbHNlLWlmPVwiIWxvYWRlZCAmJiAhZXJyb3JcIiB4cz1cIjEyXCIgY2xhc3M9XCJwYS04XCIgc3R5bGU9XCJhbGlnbi1pdGVtczogY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHByb2dyZXNzLWJhciA6cHJvZ3Jlc3M9XCJwcm9ncmVzc1wiLz5cclxuICAgICAgICAgICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgICAgIDwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1waG90by1jYXJkLWFjdGlvbnNcIiBzdHlsZT1cInotaW5kZXg6IDI7XCI+XHJcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8di1yb3cgeHM9XCIxMlwiIGNsYXNzPVwicGwtNSBwci01IHB0LTIganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8di1idG4gZmFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdkZWxldGUnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1kZWxldGU8L3YtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgPC92LXJvdz5cclxuICAgICAgICAgICAgPC9zbG90PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwib3BlblwiIHYtaWY9XCJvcGVuXCIgY29udGVudC1jbGFzcz1cInNtLXBob3RvLWRpYWxvZ1wiXHJcbiAgICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8di1pbWcgdi1pZj1cImxvYWRlZCAmJiBzcmNcIiA6c3JjPVwic3JjXCIgbWF4LWhlaWdodD1cIjkwdmhcIiBjb250YWluLz5cclxuICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIEBjbGljaz1cIiRlbWl0KCdmb2N1c091dCcpOyBvcGVuPWZhbHNlO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsb3NlLWJ0blwiID48di1pY29uPm1kaS1jbG9zZTwvdi1pY29uPjwvdi1idG4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdi1kaWFsb2c+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge2I2NFRvQmxvYiwgY29tcHJlc3N9IGZyb20gXCIuLi8uLi9pbWFnZVwiO1xyXG4gICAgaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiRWRpdFBob3RvQ2FyZFwiLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtQcm9ncmVzc0Jhcn0sXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZm9jdXM6IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSx9LFxyXG4gICAgICAgICAgICBwcmVsb2FkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSx9LFxyXG4gICAgICAgICAgICBjb3Zlcjoge3R5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIn0sXHJcbiAgICAgICAgICAgIGZpbGxlZDoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlfSxcclxuICAgICAgICAgICAgZmlsZToge3R5cGU6IEZpbGUgfCBTdHJpbmd9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XHJcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBmb2N1c2VkOiAhIXZtLiRhdHRyc1snZm9jdXMnXSxcclxuICAgICAgICAgICAgc3JjOiAnJyxcclxuICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMCxcclxuICAgICAgICAgICAgcm90YXRlVGltZW91dDogbnVsbCxcclxuICAgICAgICB9KSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwbG9hZCh0aGlzLmZpbGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBpc0NvdmVyKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY292ZXIgJiYgdGhpcy5zcmMuaW5kZXhPZih0aGlzLmNvdmVyKSAhPT0gLTFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICByb3RhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3RhdGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucm90YXRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXByZXNzVXJsID0gY29tcHJlc3MoaW1nLCAoY3R4LCBjYW52YXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoOTAgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAtaW1nLndpZHRoIC8gMiwgLWltZy53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBibG9iID0gYjY0VG9CbG9iKGNvbXByZXNzVXJsLnNwbGl0KCcsJylbMV0sICdpbWFnZS9qcGVnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkKGJsb2IsIHRoaXMuc3JjLnNwbGl0KCcvJykucmV2ZXJzZSgpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSB0aGlzLnNyYztcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlYWRMb2NhbFNyYyhmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlIGluc3RhbmNlb2YgQmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuc3JjID0gZmlsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBsb2FkKGZpbGUsIGNhbnZhc0ZpbGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJlbG9hZCB8fCAhKGZpbGUgaW5zdGFuY2VvZiBCbG9iKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZExvY2FsU3JjKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxyXG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBjYW52YXNGaWxlTmFtZSB8fCBmaWxlLm5hbWUpXHJcbiAgICAgICAgICAgICAgICB4aHIub3BlbignUE9TVCcsICcvcGhvdG8vdXBsb2FkJywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IChlLmxvYWRlZCAqIDEwMC4wIC8gZS50b3RhbCkgfHwgMTAwO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNyYyA9IGUudGFyZ2V0LnJlc3BvbnNlLnVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZS50YXJnZXQucmVzcG9uc2UudXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSA0MDAgJiYgIWNhbnZhc0ZpbGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL9CU0LvRjyDRhNCw0LnQu9C+0LIg0YEg0LHQuNGC0YvQvCDQvNCw0LnQvNGC0LjQv9C+0Lwg0YDQuNGB0YPQtdC8INC90LAg0LrQsNC90LLQtSDQuCDQvtGC0L/RgNCw0LLQu9GP0LXQvCDRgNC10LfRg9C70YzRgtCw0YJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXByZXNzVXJsID0gY29tcHJlc3MoaW1nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxvYiA9IGI2NFRvQmxvYihjb21wcmVzc1VybC5zcGxpdCgnLCcpWzFdLCAnaW1hZ2UvanBlZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkKGJsb2IsIGZpbGUubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkTG9jYWxTcmMoZmlsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICBmaWxlKG52KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG52ID09PSAnc3RyaW5nJykgdGhpcy5zcmMgPSBudjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLnNpdGUtcGhvdG8tY2FyZCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgLyogR3JleSA4MDAgKi9cclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLnNpdGUtcGhvdG8tY2FyZC5maWxsZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpdGUtcGhvdG8tY2FyZC5mb2N1c2VkLCAuc2l0ZS1waG90by1jYXJkOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDlweCByZ2JhKDE0MCwgMTQwLCAxNDAsIDAuNDkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1waG90by1jYXJkOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1NiU7IC8qIDE2LzkgKi9cclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1waG90by1jYXJkLWFjdGlvbnMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpdGUtcGhvdG8tY2FyZC1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXQtcGhvdG8taWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHN0eWxlPlxyXG5cclxuICAgIC5zbS1waG90by1kaWFsb2cgLnBob3RvLWNvdmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzMnB4O1xyXG4gICAgICAgIGxlZnQ6IDMycHg7XHJcbiAgICAgICAgei1pbmRleDogMTAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbS1waG90by1kaWFsb2cgLmNsb3NlLWJ0biB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMzJweDtcclxuICAgICAgICByaWdodDogMzJweDtcclxuICAgIH1cclxuXHJcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5ib3R0b20ge1xyXG4gICAgICAgIHJpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGJvdHRvbTogMzJweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAuc20tcGhvdG8tZGlhbG9nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTA1LCAxMDksIDExNiwgMC42KTtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZGlhbG9nLWltYWdlIC52LWltYWdle1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuICAgIC5kaWFsb2ctaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPHYtcm93IGNsYXNzPVwibWEtMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3RpdmVcIiA6c3R5bGU9XCJ7d2lkdGg6IHByb2dyZXNzKyclJ31cIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3Ytcm93PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogWydwcm9ncmVzcyddLFxyXG4gICAgICAgIG5hbWU6IFwiUHJvZ3Jlc3NCYXJcIlxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuZnVsbHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0UxRTFFMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZle1xyXG4gICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyZTNlNGUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPHYtY2FyZCBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBwdC00IHBiLTRcIiBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXIgZWxldmF0aW9uPVwiMFwiPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cIm9uZSAmJiBsb2FkZWRQaG90b3MubGVuZ3RoXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7bG9hZGVkUGhvdG9zWzBdLm5hbWV9fTwvZGl2PlxyXG4gICAgICAgIDx2LXJvdyB2LWlmPVwiIW9uZVwiIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgIDx2LWNvbCB4cz1cIjZcIiBtZD1cIjNcIiBzbT1cIjZcIiB2LWZvcj1cIihwaG90bywgaSkgaW4gY2Fyb3VzZWxQaG90b3NcIiA6a2V5PVwiaVwiIHYtaWY9XCIhIWNhcm91c2VsUGhvdG9zW2ldXCI+XHJcbiAgICAgICAgICAgICAgICA8ZWRpdC1waG90by1jYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwcmVsb2FkPVwicHJlbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmaWxsZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmZpbGU9XCJwaG90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBkZWxldGU9XCIoKSA9PiBkZWxldGVQaG90byhwaG90bywgaSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3YtY29sPlxyXG4gICAgICAgICAgICA8di1jb2wgeHM9XCI2XCIgbWQ9XCIzXCIgc209XCI2XCI+XHJcbiAgICAgICAgICAgICAgICA8ZWRpdC1waG90by1jYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiKCkgPT4gJHJlZnMuYnRuLmNsaWNrKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZHJvcC1hcmVhIEBjaGFuZ2U9XCJhZGRQaG90b1wiIDp5ZXQ9XCJjYXJvdXNlbFBob3Rvcy5sZW5ndGhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvZWRpdC1waG90by1jYXJkPlxyXG4gICAgICAgICAgICA8L3YtY29sPlxyXG4gICAgICAgIDwvdi1yb3c+XHJcbiAgICA8L3YtY2FyZD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gICAgaW1wb3J0IEVkaXRQaG90b0NhcmQgZnJvbSBcIi4vRWRpdFBob3RvQ2FyZFwiO1xyXG4gICAgaW1wb3J0IERyb3BBcmVhIGZyb20gXCIuL0Ryb3BBcmVhXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6ICdwaG90by1sb2FkZXInLFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHJhZGl1czoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbmU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGhvdG9zOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IChbXSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByZWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcG9uZW50czoge0Ryb3BBcmVhLCBFZGl0UGhvdG9DYXJkfSxcclxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICBuOiAwLFxyXG4gICAgICAgICAgICAgICAgcGhvdG86ICcnLFxyXG4gICAgICAgICAgICAgICAgbG9hZGVkUGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxQaG90b3M6IHZtLnBob3RvcyxcclxuICAgICAgICAgICAgICAgIGZpbGVJbWc6IG51bGwsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdXBkYXRlZCgpIHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZGVsZXRlUGhvdG8ocGhvdG8sIGNwaSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBob3RvLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZFBob3Rvcy5mb3JFYWNoKChmaWxlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlLm5hbWUgPT09IHBob3RvLm5hbWUpIGRlbGV0ZSB0aGlzLmxvYWRlZFBob3Rvc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVkLnB1c2godGhpcy5waG90b3NbY3BpXS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5jYXJvdXNlbFBob3Rvc1tjcGldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJvdXNlbFBob3RvcyA9IFsuLi50aGlzLmNhcm91c2VsUGhvdG9zXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0UGhvdG9zKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVkUGhvdG9zLmNvbmNhdCh0aGlzLmRlbGV0ZWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRGaXJzdCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRlZFBob3Rvc1swXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmV0dXJuRm9ybURhdGEodmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzYXZlLXBob3RvJywgdmFsKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cGRhdGVQaG90byh2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGhvdG8gPSB2YWxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Nyb3BwZXJEaWFsb2cgPSBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGlja09uSW5wdXQoKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZXMnKS5maWxlcyA9IChuZXcgRGF0YVRyYW5zZmVyKCkpLmZpbGVzO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVzJykuY2xpY2soKVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWRkUGhvdG8oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIFsuLi5ldmVudC50YXJnZXQuZmlsZXNdLmZvckVhY2goKHBob3RvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlSW1nID0gcGhvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZUltZy5zaXplID4gNTAyNDAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0KDQsNC30LzQtdGAINGE0LDQudC70LAg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINCx0L7Qu9GM0YjQtSA10JzQkSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9ICfQktGLINC90LUg0LzQvtC20LXRgtC1INC30LDQs9GA0YPQt9C40YLRjCDQsdC+0LvRjNGI0LUgMTAg0YTQvtGC0L7Qs9GA0LDRhNC40LknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxQaG90b3MgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuY2Fyb3VzZWxQaG90b3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlbG9hZCA/IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5maWxlSW1nKSA6IHRoaXMuZmlsZUltZ1xyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRQaG90b3MucHVzaCh0aGlzLmZpbGVJbWcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uID0gdGhpcy5sb2FkZWRQaG90b3MubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgcGhvdG9zKG52KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcm91c2VsUGhvdG9zID0gbnYubWFwKChmaWxlKSA9PiBmaWxlLmZpbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAucGhvdG8taW5wdXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDx2LWNvbnRhaW5lclxyXG4gICAgICAgICAgICBjbGFzcz1cImNvdmVyXCI+XHJcbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxyXG4gICAgICAgIHYtdGV4dD1cIiRyb3V0ZS5wYXJhbXMuaWQgID09IDAgPyAn0JTQvtCx0LDQstC70LXQvdC40LUg0L3QvtCy0L7RgdGC0LgnIDogICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC90L7QstC+0YHRgtC4J1wiPlxyXG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxyXG4gICAgICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cItCX0LDQs9C+0LvQvtCy0L7QulwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJwb3N0LnRpdGxlXCJcclxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMudGl0bGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgPC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgPHYtdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCe0L/QuNGB0LDQvdC40LVcIlxyXG4gICAgICAgICAgICAgICAgaGludD1cIkhpbnQgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCInICdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGlvbiBcIlxyXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMuZGVzY3JpcHRpb25cIlxyXG4gICAgICAgID48L3YtdGV4dGFyZWE+XHJcbiAgICAgICAgPGVkaXRvclxyXG4gICAgICAgICAgICAgICAgYXBpLWtleT1cImthcHIwa2gwdjN2c2Nua3Bwc3hnaWc5OHZmNm1naXRhaWk4YXV3M3AycGluMWM1dFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm10LTJcIlxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInBvc3QuZGVzY3JpcHRpb25cIlxyXG4gICAgICAgID5cclxuICAgICAgICA8L2VkaXRvcj5cclxuICAgICAgICA8di1zcGFjZXIvPlxyXG4gICAgICAgIDxwaG90by1sb2FkZXIgcmVmPVwibG9hZGVyXCIgOnBob3Rvcz1cInBvc3QucGhvdG9zXCIvPlxyXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cInNhdmUtYnRuLXRleHRcIlxyXG4gICAgICAgICAgICAgICBAY2xpY2s9XCIoKSA9PiBwb3N0LmlkID8gdXBkYXRlKCkgOiBjcmVhdGUoKVwiXHJcbiAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiEocG9zdC5pZD4gMCkgJiYgKCFwb3N0LmRlc2NyaXB0aW9uIHx8ICFwb3N0LnRpdGxlKVwiPlxyXG4gICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcclxuICAgICAgICA8L3YtYnRuPlxyXG4gICAgPC92LWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgRWRpdG9yIGZyb20gJ0B0aW55bWNlL3RpbnltY2UtdnVlJztcclxuICAgIGltcG9ydCBQaG90b0xvYWRlciBmcm9tICdAL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiUG9zdEFkZFwiLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgRWRpdG9yLFxyXG4gICAgICAgICAgICBQaG90b0xvYWRlclxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwb3N0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IE51bWJlci5wYXJzZUludCh2bS4kcm91dGUucGFyYW1zLmlkKSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgbGV0IG1vZGVsSWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgIGlmIChtb2RlbElkICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy9wb3N0LycrIG1vZGVsSWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSBlPy5yZXNwb25zZT8uZXJyb3IgfHwgJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvcG9zdCcsIHRoaXMucG9zdClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QuaWQgPSByLmRhdGEuZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnJlc3BvbnNlICYmIGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2tdID0gZXJyb3JzW2tdPy5bMF0gfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucHV0KCcvcG9zdC8nKyB0aGlzLnBvc3QuaWQsIHRoaXMucG9zdClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGhvdG9zID0gdGhpcy4kcmVmcy5sb2FkZXIuZ2V0UGhvdG9zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQaG90b3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQaG90b3MuZm9yRWFjaCgocGhvdG8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGhvdG8ubmFtZSkgZm9ybURhdGEuYXBwZW5kKCdwb3N0X3Bob3Rvc1snK2krJ10nLCBwaG90bywgcGhvdG8ubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGZvcm1EYXRhLmFwcGVuZCgnZGVsZXRlX3Bob3Rvc1snK2krJ10nLCBwaG90bylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ19tZXRob2QnLCAnUFVUJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy9wb3N0LycrdGhpcy5wb3N0LmlkLCBmb3JtRGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiBcInBvc3RzXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9ICBg0J7RiNC40LHQutCwINGB0L7RhdGA0LDQvdC10L3QuNGPINGE0L7RgtC+0LPRgNCw0YTQuNC4YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiBcInBvc3RzXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JzID0gZS5yZXNwb25zZS5kYXRhLmVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1lc3NhZ2VzKS5mb3JFYWNoKChrKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAuZGVzY3JpcHRpb24gLnYtdGV4dC1maWVsZF9fc2xvdCB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9uLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDphZnRlciAsXHJcbiAgICAuZGVzY3JpcHRpb24udi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmJlZm9yZXtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiXHJcbmV4cG9ydCBjb25zdCBjb21wcmVzcyA9IChpbWcsIG1vZGlmeUNvbnRleHQpID0+IHtcclxuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxyXG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG4gICAgbGV0IHdpZHRoID0gaW1nLndpZHRoXHJcbiAgICBsZXQgaGVpZ2h0ID0gaW1nLmhlaWdodFxyXG4gICAgLy8gbG9nKGltZy53aWR0aCwgaW1nLmhlaWdodClcclxuICAgIC8vIGxvZyh3aWR0aCwgaGVpZ2h0KVxyXG4gICAgY2FudmFzLndpZHRoID0gd2lkdGhcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHRcclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNmZmYnXHJcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcclxuICAgIGlmIChtb2RpZnlDb250ZXh0KSBtb2RpZnlDb250ZXh0KGNvbnRleHQsIGNhbnZhcyk7XHJcbiAgICBlbHNlIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxyXG4gICAgbGV0IGJhc2U2NERhdGEgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJywgMC40KVxyXG4gICAgY2FudmFzID0gY29udGV4dCA9IG51bGxcclxuICAgIC8vIGxvZyhiYXNlNjREYXRhLmxlbmd0aClcclxuICAgIGltZyA9IG51bGxcclxuICAgIHJldHVybiBiYXNlNjREYXRhXHJcbn1cclxuXHJcbi8vIGJhc2U2NCBpcyBjb252ZXJ0ZWQgdG8gYmluYXJ5IGZpbGVcclxuZXhwb3J0IGNvbnN0IGI2NFRvQmxvYiA9IChiNjREYXRhLCBjb250ZW50VHlwZSkgPT4ge1xyXG4gICAgY29udGVudFR5cGUgPSBjb250ZW50VHlwZSB8fCAnJ1xyXG5cclxuICAgIGxldCBieXRlQ2hhcmFjdGVycyA9IGF0b2IoYjY0RGF0YSkgLy8gRGVjb2RlIGJhc2U2NCBkYXRhIGFzIGEgYmluYXJ5IHN0cmluZ1xyXG4gICAgbGV0IGJ1ZmZlciA9IFtdIC8vIE5vdGUgdGhhdCB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGJsb2IgbXVzdCBiZSBhbiBhcnJheVxyXG5cclxuICAgIC8vIHR5cGUgYXJyYXkgaXMgdXNlZCB0byBwcm9jZXNzIGJpbmFyeSBmaWxlc1xyXG4gICAgbGV0IGFCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZUNoYXJhY3RlcnMubGVuZ3RoKVxyXG4gICAgbGV0IHVCdWZmZXIgPSBuZXcgVWludDhBcnJheShhQnVmZmVyKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlQ2hhcmFjdGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHVCdWZmZXJbaV0gPSBieXRlQ2hhcmFjdGVycy5jaGFyQ29kZUF0KGkpIC8vIGdldCBVbmljb2RlIGVuY29kaW5nLCBzdG9yZSBpbiB0eXBlIGFycmF5XHJcbiAgICB9XHJcbiAgICBidWZmZXIucHVzaCh1QnVmZmVyKVxyXG4gICAgLy8gT3JkaW5hcnkgYXJyYXkgaXMgdW5hYmxlIHRvIGdlbmVyYXRlIGJpbmFyeSBmaWxlc1xyXG4gICAgcmV0dXJuIG5ldyBCbG9iKGJ1ZmZlciwgeyAvLyBnZW5lcmF0ZSBhIGJpbmFyeSBmaWxlXHJcbiAgICAgICAgdHlwZTogY29udGVudFR5cGVcclxuICAgIH0pXHJcbn1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZHJvcC1hcmVhW2RhdGEtdi01ODgxZThmMl06bm90KC5kcm9wLXNtKSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI0FGQUZBRjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4jZHJvcC1hcmVhLmZvY3VzW2RhdGEtdi01ODgxZThmMl0ge1xcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xcbn1cXG4uaG92ZXJbZGF0YS12LTU4ODFlOGYyXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5mb2N1cyAuaGlkZVtkYXRhLXYtNTg4MWU4ZjJdIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uZm9jdXMgLmhvdmVyW2RhdGEtdi01ODgxZThmMl0ge1xcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbn1cXG5wW2RhdGEtdi01ODgxZThmMl0ge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4uZHJvcC1hcmVhOm5vdCguZHJvcC1zbSkgLmRyb3AtZm9ybVtkYXRhLXYtNTg4MWU4ZjJdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogNTA7XFxufVxcbi5kcm9wLWJ0bltkYXRhLXYtNTg4MWU4ZjJdIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1pbi13aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmRyb3Atc20gLmRyb3AtYnRuW2RhdGEtdi01ODgxZThmMl17XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG59XFxuI2ZpbGVFbGVtW2RhdGEtdi01ODgxZThmMl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZmlsZS1kZXNjW2RhdGEtdi01ODgxZThmMl0ge1xcblxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICAgIGNvbG9yOiAjNEE0QTRBO1xcbn1cXG4uZHJvcC1zbSAuZmlsZS1kZXNjW2RhdGEtdi01ODgxZThmMl0ge1xcbiAgICBkaXNwbGF5OiBub25lXFxufVxcbi5mb3JtYXQtZmlsZS1kZXNjW2RhdGEtdi01ODgxZThmMl0ge1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNBRkFGQUY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Ryb3BBcmVhLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMkRBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSwwQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7QUFDQTtBQUVBO0lBQ0EsbUJBQUE7QUFDQTtBQUVBO0lBQ0EsYUFBQTtBQUNBO0FBRUE7SUFDQSx3QkFBQTtBQUNBO0FBRUE7SUFDQSx5QkFBQTtBQUNBO0FBRUE7SUFDQSxhQUFBO0FBQ0E7QUFFQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtBQUNBO0FBR0E7SUFDQSxxQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0FBQ0E7QUFDQTtJQUNBLGVBQUE7QUFDQTtBQUVBO0lBQ0EsYUFBQTtBQUNBO0FBRUE7O0lBRUEsa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7QUFDQTtBQUVBO0lBQ0E7QUFDQTtBQUNBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdiBpZD1cXFwiZHJvcC1hcmVhXFxcIiBjbGFzcz1cXFwiZHJvcC1hcmVhXFxcIiA6Y2xhc3M9XFxcIiR2dWV0aWZ5LmJyZWFrcG9pbnQuc21BbmREb3duID8gWydkcm9wLXNtJ10gOiBbXVxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZHJvcC1mb3JtXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgaWQ9XFxcImZpbGVFbGVtXFxcIiBtdWx0aXBsZSBhY2NlcHQ9XFxcImltYWdlLypcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XFxcIihlKSA9PiAkZW1pdCgnY2hhbmdlJywgZSlcXFwiIGNsYXNzPVxcXCJoaWRlXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImRyb3AtYnRuXFxcIiBmb3I9XFxcImZpbGVFbGVtXFxcIj57eyF5ZXQgPyAn0JfQsNCz0YDRg9C30LjRgtGMINGE0L7RgtC+JyA6ICfQl9Cw0LPRgNGD0LfQuNGC0Ywg0LXRidC1J319PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiZm9ybWF0LWZpbGUtZGVzY1xcXCI+0KTQvtGA0LzQsNGCIOKAkyBqcGcsIHBuZzwvcD5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiZmlsZS1kZXNjIGhvdmVyXFxcIj7QntGC0L/Rg9GB0YLQuNGC0LUg0YTQvtGC0L7Qs9GA0LDRhNC40Y4g0YHRjtC00LA8L3A+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICAgICAgbmFtZTogXFxcIkRyb3BBcmVhXFxcIixcXHJcXG4gICAgICAgIGRhdGE6ICh2bSkgPT4gKHt2bX0pLFxcclxcbiAgICAgICAgcHJvcHM6IFsneWV0J10sXFxyXFxuICAgICAgICBtb3VudGVkKHZtKSB7XFxyXFxuICAgICAgICAgICAgbGV0IGRyb3BBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3AtYXJlYScpO1xcclxcbiAgICAgICAgICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJywgJ2RyYWdsZWF2ZScsICdkcm9wJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xcclxcbiAgICAgICAgICAgICAgICBkcm9wQXJlYS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgcHJldmVudERlZmF1bHRzLCBmYWxzZSlcXHJcXG4gICAgICAgICAgICB9KVxcclxcblxcclxcbiAgICAgICAgICAgIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0cyhlKSB7XFxyXFxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxcclxcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xcclxcbiAgICAgICAgICAgICAgICBkcm9wQXJlYS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm9jdXMsIGZhbHNlKVxcclxcbiAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgIFsnZHJhZ2xlYXZlJywgJ2Ryb3AnXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgIGRyb3BBcmVhLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB1bmZvY3VzLCBmYWxzZSlcXHJcXG4gICAgICAgICAgICB9KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBmdW5jdGlvbiBmb2N1cyhlKSB7XFxyXFxuICAgICAgICAgICAgICAgIGRyb3BBcmVhLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJylcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgZnVuY3Rpb24gdW5mb2N1cyhlKSB7XFxyXFxuICAgICAgICAgICAgICAgIGRyb3BBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzJylcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgY29uc3QgaGFuZGxlRHJvcCA9IChlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgIGxldCBkdCA9IGUuZGF0YVRyYW5zZmVyXFxyXFxuICAgICAgICAgICAgICAgIGxldCBmaWxlcyA9IGR0LmZpbGVzXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRmlsZXMoZmlsZXMpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIGRyb3BBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBoYW5kbGVEcm9wLCBmYWxzZSk7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIGhhbmRsZUZpbGVzKGZpbGVzKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHt0YXJnZXQ6e2ZpbGVzfX0pO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAgIC5kcm9wLWFyZWE6bm90KC5kcm9wLXNtKSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjQUZBRkFGO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjZHJvcC1hcmVhLmZvY3VzIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhvdmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvY3VzIC5oaWRlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9jdXMgLmhvdmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kcm9wLWFyZWE6bm90KC5kcm9wLXNtKSAuZHJvcC1mb3JtIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB6LWluZGV4OiA1MDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuZHJvcC1idG4ge1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAuZHJvcC1zbSAuZHJvcC1idG57XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2ZpbGVFbGVtIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZpbGUtZGVzYyB7XFxyXFxuXFxyXFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICAgICAgICBjb2xvcjogIzRBNEE0QTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZHJvcC1zbSAuZmlsZS1kZXNjIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcXHJcXG4gICAgfVxcclxcbiAgICAuZm9ybWF0LWZpbGUtZGVzYyB7XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBjb2xvcjogI0FGQUZBRjtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNpdGUtcGhvdG8tY2FyZFtkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gICAgLyogR3JleSA4MDAgKi9cXG5cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc2l0ZS1waG90by1jYXJkLmZpbGxlZFtkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcXG59XFxuLnNpdGUtcGhvdG8tY2FyZC5mb2N1c2VkW2RhdGEtdi00YWJlNDExZF0sIC5zaXRlLXBob3RvLWNhcmRbZGF0YS12LTRhYmU0MTFkXTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IHJnYmEoMTQwLCAxNDAsIDE0MCwgMC40OSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnNpdGUtcGhvdG8tY2FyZFtkYXRhLXYtNGFiZTQxMWRdOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYlOyAvKiAxNi85ICovXFxufVxcbi5zaXRlLXBob3RvLWNhcmQtYWN0aW9uc1tkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2l0ZS1waG90by1jYXJkLWNvbnRlbnRbZGF0YS12LTRhYmU0MTFkXSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmVkaXQtcGhvdG8taWNvbltkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW9KQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTs7SUFFQSxrQkFBQTtJQUNBLGdCQUFBO0FBQ0E7QUFFQTtJQUNBLHlCQUFBO0FBQ0E7QUFFQTtJQUNBLGlEQUFBO0lBQ0Esa0JBQUE7QUFDQTtBQUVBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQSxFQUFBLFNBQUE7QUFDQTtBQUVBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsZUFBQTtBQUNBO0FBRUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0FBQ0E7QUFFQTtJQUNBLGdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaXRlLXBob3RvLWNhcmRcXFwiXFxyXFxuICAgICAgICAgOmNsYXNzPVxcXCJ7Zm9jdXNlZDogZm9jdXMsIGZpbGxlZH1cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1waG90by1jYXJkLWNvbnRlbnRcXFwiIHN0eWxlPVxcXCJ6LWluZGV4OiAxO1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWltZyB2LWlmPVxcXCJsb2FkZWQgJiYgc3JjXFxcIiA6c3JjPVxcXCJzcmNcXFwiIGNvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjEwMCVcXFwiIEBjbGljaz1cXFwiJGVtaXQoJ2NsaWNrJywgJGF0dHJzWyd2YWx1ZSddKTsgb3Blbj10cnVlXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgIDx2LXJvdyB2LWVsc2UtaWY9XFxcIiFsb2FkZWQgJiYgIWVycm9yXFxcIiB4cz1cXFwiMTJcXFwiIGNsYXNzPVxcXCJwYS04XFxcIiBzdHlsZT1cXFwiYWxpZ24taXRlbXM6IGNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cHJvZ3Jlc3MtYmFyIDpwcm9ncmVzcz1cXFwicHJvZ3Jlc3NcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgICAgICA8L3Nsb3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNpdGUtcGhvdG8tY2FyZC1hY3Rpb25zXFxcIiBzdHlsZT1cXFwiei1pbmRleDogMjtcXFwiPlxcclxcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImFjdGlvbnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8di1yb3cgeHM9XFxcIjEyXFxcIiBjbGFzcz1cXFwicGwtNSBwci01IHB0LTIganVzdGlmeS1lbmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGZhYlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCIkZW1pdCgnZGVsZXRlJylcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1yLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWRlbGV0ZTwvdi1pY29uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgICAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgICAgICA8L3Nsb3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVxcXCJvcGVuXFxcIiB2LWlmPVxcXCJvcGVuXFxcIiBjb250ZW50LWNsYXNzPVxcXCJzbS1waG90by1kaWFsb2dcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOmZ1bGxzY3JlZW49XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRpYWxvZy1pbWFnZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWltZyB2LWlmPVxcXCJsb2FkZWQgJiYgc3JjXFxcIiA6c3JjPVxcXCJzcmNcXFwiIG1heC1oZWlnaHQ9XFxcIjkwdmhcXFwiIGNvbnRhaW4vPlxcclxcbiAgICAgICAgICAgICAgICA8di1idG4gaWNvbiBAY2xpY2s9XFxcIiRlbWl0KCdmb2N1c091dCcpOyBvcGVuPWZhbHNlO1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJncmF5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImNsb3NlLWJ0blxcXCIgPjx2LWljb24+bWRpLWNsb3NlPC92LWljb24+PC92LWJ0bj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvdi1kaWFsb2c+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gICAgaW1wb3J0IHtiNjRUb0Jsb2IsIGNvbXByZXNzfSBmcm9tIFxcXCIuLi8uLi9pbWFnZVxcXCI7XFxyXFxuICAgIGltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFxcXCIuL1Byb2dyZXNzQmFyXFxcIjtcXHJcXG5cXHJcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICAgICAgbmFtZTogXFxcIkVkaXRQaG90b0NhcmRcXFwiLFxcclxcbiAgICAgICAgY29tcG9uZW50czoge1Byb2dyZXNzQmFyfSxcXHJcXG4gICAgICAgIHByb3BzOiB7XFxyXFxuICAgICAgICAgICAgZm9jdXM6IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSx9LFxcclxcbiAgICAgICAgICAgIHByZWxvYWQ6IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlLH0sXFxyXFxuICAgICAgICAgICAgY292ZXI6IHt0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFxcXCJcXFwifSxcXHJcXG4gICAgICAgICAgICBmaWxsZWQ6IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZX0sXFxyXFxuICAgICAgICAgICAgZmlsZToge3R5cGU6IEZpbGUgfCBTdHJpbmd9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZGF0YTogKHZtKSA9PiAoe1xcclxcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxcclxcbiAgICAgICAgICAgIGZvY3VzZWQ6ICEhdm0uJGF0dHJzWydmb2N1cyddLFxcclxcbiAgICAgICAgICAgIHNyYzogJycsXFxyXFxuICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXFxyXFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXFxyXFxuICAgICAgICAgICAgcm90YXRlVGltZW91dDogbnVsbCxcXHJcXG4gICAgICAgIH0pLFxcclxcbiAgICAgICAgbW91bnRlZCgpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLnVwbG9hZCh0aGlzLmZpbGUpXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXHJcXG4gICAgICAgICAgICBpc0NvdmVyKCkge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb3ZlciAmJiB0aGlzLnNyYy5pbmRleE9mKHRoaXMuY292ZXIpICE9PSAtMVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgcm90YXRlKCkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3RhdGVUaW1lb3V0KSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yb3RhdGVUaW1lb3V0KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlVGltZW91dCA9IG51bGw7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSBcXFwiYW5vbnltb3VzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29tcHJlc3NVcmwgPSBjb21wcmVzcyhpbWcsIChjdHgsIGNhbnZhcykgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSg5MCAqIE1hdGguUEkgLyAxODApO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgLWltZy53aWR0aCAvIDIsIC1pbWcud2lkdGggLyAyKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxvYiA9IGI2NFRvQmxvYihjb21wcmVzc1VybC5zcGxpdCgnLCcpWzFdLCAnaW1hZ2UvanBlZycpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkKGJsb2IsIHRoaXMuc3JjLnNwbGl0KCcvJykucmV2ZXJzZSgpWzBdKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH07XFxyXFxuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gdGhpcy5zcmM7XFxyXFxuICAgICAgICAgICAgICAgIH0sIDEwMDApXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICByZWFkTG9jYWxTcmMoZmlsZSkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlIGluc3RhbmNlb2YgQmxvYikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcmMgPSByZWFkZXIucmVzdWx0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuc3JjKVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9IGVsc2UgdGhpcy5zcmMgPSBmaWxlO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICB1cGxvYWQoZmlsZSwgY2FudmFzRmlsZU5hbWUpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByZWxvYWQgfHwgIShmaWxlIGluc3RhbmNlb2YgQmxvYikpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZExvY2FsU3JjKGZpbGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxcclxcbiAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xcclxcbiAgICAgICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxcclxcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBjYW52YXNGaWxlTmFtZSB8fCBmaWxlLm5hbWUpXFxyXFxuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgJy9waG90by91cGxvYWQnLCB0cnVlKVxcclxcbiAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXFxcInByb2dyZXNzXFxcIiwgKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAoZS5sb2FkZWQgKiAxMDAuMCAvIGUudG90YWwpIHx8IDEwMDtcXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCAoZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNyYyA9IGUudGFyZ2V0LnJlc3BvbnNlLnVybDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBlLnRhcmdldC5yZXNwb25zZS51cmwpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzICE9IDIwMCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDQwMCAmJiAhY2FudmFzRmlsZU5hbWUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/QlNC70Y8g0YTQsNC50LvQvtCyINGBINCx0LjRgtGL0Lwg0LzQsNC50LzRgtC40L/QvtC8INGA0LjRgdGD0LXQvCDQvdCwINC60LDQvdCy0LUg0Lgg0L7RgtC/0YDQsNCy0LvRj9C10Lwg0YDQtdC30YPQu9GM0YLQsNGCXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb21wcmVzc1VybCA9IGNvbXByZXNzKGltZyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxvYiA9IGI2NFRvQmxvYihjb21wcmVzc1VybC5zcGxpdCgnLCcpWzFdLCAnaW1hZ2UvanBlZycpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWQoYmxvYiwgZmlsZS5uYW1lKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkTG9jYWxTcmMoZmlsZSlcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5sb2FkZWQgPSB0cnVlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSlcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgd2F0Y2g6IHtcXHJcXG4gICAgICAgICAgICBmaWxlKG52KSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbnYgPT09ICdzdHJpbmcnKSB0aGlzLnNyYyA9IG52O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcclxcbiAgICAgICAgLyogR3JleSA4MDAgKi9cXHJcXG5cXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZC5maWxsZWQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkLmZvY3VzZWQsIC5zaXRlLXBob3RvLWNhcmQ6aG92ZXIge1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggcmdiYSgxNDAsIDE0MCwgMTQwLCAwLjQ5KTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkOmFmdGVyIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTYlOyAvKiAxNi85ICovXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZC1hY3Rpb25zIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQtY29udGVudCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmVkaXQtcGhvdG8taWNvbiB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG48c3R5bGU+XFxyXFxuXFxyXFxuICAgIC5zbS1waG90by1kaWFsb2cgLnBob3RvLWNvdmVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMzJweDtcXHJcXG4gICAgICAgIGxlZnQ6IDMycHg7XFxyXFxuICAgICAgICB6LWluZGV4OiAxMDE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNtLXBob3RvLWRpYWxvZyAuY2xvc2UtYnRuIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMzJweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAzMnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbS1waG90by1kaWFsb2cgLmJvdHRvbSB7XFxyXFxuICAgICAgICByaWdodDogMzJweDtcXHJcXG4gICAgICAgIGJvdHRvbTogMzJweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbS1waG90by1kaWFsb2cge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgei1pbmRleDogMTAwO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTA1LCAxMDksIDExNiwgMC42KTtcXHJcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGlhbG9nLWltYWdlIC52LWltYWdle1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5kaWFsb2ctaW1hZ2Uge1xcclxcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc20tcGhvdG8tZGlhbG9nIC5waG90by1jb3ZlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMnB4O1xcbiAgICBsZWZ0OiAzMnB4O1xcbiAgICB6LWluZGV4OiAxMDE7XFxufVxcbi5zbS1waG90by1kaWFsb2cgLmNsb3NlLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMnB4O1xcbiAgICByaWdodDogMzJweDtcXG59XFxuLnNtLXBob3RvLWRpYWxvZyAuYm90dG9tIHtcXG4gICAgcmlnaHQ6IDMycHg7XFxuICAgIGJvdHRvbTogMzJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcXG4gICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLnNtLXBob3RvLWRpYWxvZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTA1LCAxMDksIDExNiwgMC42KTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmRpYWxvZy1pbWFnZSAudi1pbWFnZXtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4uZGlhbG9nLWltYWdlIHtcXG4gICAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogLXdlYmtpdC1maXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBbU1BO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7QUFDQTtBQUVBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtBQUNBO0FBRUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsMEJBQUE7SUFBQSx1QkFBQTtJQUFBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0FBQ0E7QUFFQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9DQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7QUFDQTtBQUVBO0lBQ0Esa0JBQUE7QUFDQTtBQUNBO0lBQ0EsMEJBQUE7SUFBQSx1QkFBQTtJQUFBLGtCQUFBO0lBQ0EsMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInNpdGUtcGhvdG8tY2FyZFxcXCJcXHJcXG4gICAgICAgICA6Y2xhc3M9XFxcIntmb2N1c2VkOiBmb2N1cywgZmlsbGVkfVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaXRlLXBob3RvLWNhcmQtY29udGVudFxcXCIgc3R5bGU9XFxcInotaW5kZXg6IDE7XFxcIj5cXHJcXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJkZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtaW1nIHYtaWY9XFxcImxvYWRlZCAmJiBzcmNcXFwiIDpzcmM9XFxcInNyY1xcXCIgY292ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cXFwiMTAwJVxcXCIgQGNsaWNrPVxcXCIkZW1pdCgnY2xpY2snLCAkYXR0cnNbJ3ZhbHVlJ10pOyBvcGVuPXRydWVcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtcm93IHYtZWxzZS1pZj1cXFwiIWxvYWRlZCAmJiAhZXJyb3JcXFwiIHhzPVxcXCIxMlxcXCIgY2xhc3M9XFxcInBhLThcXFwiIHN0eWxlPVxcXCJhbGlnbi1pdGVtczogY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwcm9ncmVzcy1iYXIgOnByb2dyZXNzPVxcXCJwcm9ncmVzc1xcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgICAgIDwvc2xvdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1waG90by1jYXJkLWFjdGlvbnNcXFwiIHN0eWxlPVxcXCJ6LWluZGV4OiAyO1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiYWN0aW9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx2LXJvdyB4cz1cXFwiMTJcXFwiIGNsYXNzPVxcXCJwbC01IHByLTUgcHQtMiBqdXN0aWZ5LWVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8di1idG4gZmFiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIiRlbWl0KCdkZWxldGUnKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibXItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgICAgIDwvc2xvdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XFxcIm9wZW5cXFwiIHYtaWY9XFxcIm9wZW5cXFwiIGNvbnRlbnQtY2xhc3M9XFxcInNtLXBob3RvLWRpYWxvZ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6ZnVsbHNjcmVlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGlhbG9nLWltYWdlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtaW1nIHYtaWY9XFxcImxvYWRlZCAmJiBzcmNcXFwiIDpzcmM9XFxcInNyY1xcXCIgbWF4LWhlaWdodD1cXFwiOTB2aFxcXCIgY29udGFpbi8+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIEBjbGljaz1cXFwiJGVtaXQoJ2ZvY3VzT3V0Jyk7IG9wZW49ZmFsc2U7XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcImdyYXlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY2xvc2UtYnRuXFxcIiA+PHYtaWNvbj5tZGktY2xvc2U8L3YtaWNvbj48L3YtYnRuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC92LWRpYWxvZz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBpbXBvcnQge2I2NFRvQmxvYiwgY29tcHJlc3N9IGZyb20gXFxcIi4uLy4uL2ltYWdlXFxcIjtcXHJcXG4gICAgaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXFxcIi4vUHJvZ3Jlc3NCYXJcXFwiO1xcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBuYW1lOiBcXFwiRWRpdFBob3RvQ2FyZFxcXCIsXFxyXFxuICAgICAgICBjb21wb25lbnRzOiB7UHJvZ3Jlc3NCYXJ9LFxcclxcbiAgICAgICAgcHJvcHM6IHtcXHJcXG4gICAgICAgICAgICBmb2N1czoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlLH0sXFxyXFxuICAgICAgICAgICAgcHJlbG9hZDoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUsfSxcXHJcXG4gICAgICAgICAgICBjb3Zlcjoge3R5cGU6IFN0cmluZywgZGVmYXVsdDogXFxcIlxcXCJ9LFxcclxcbiAgICAgICAgICAgIGZpbGxlZDoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlfSxcXHJcXG4gICAgICAgICAgICBmaWxlOiB7dHlwZTogRmlsZSB8IFN0cmluZ31cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XFxyXFxuICAgICAgICAgICAgb3BlbjogZmFsc2UsXFxyXFxuICAgICAgICAgICAgZm9jdXNlZDogISF2bS4kYXR0cnNbJ2ZvY3VzJ10sXFxyXFxuICAgICAgICAgICAgc3JjOiAnJyxcXHJcXG4gICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICBwcm9ncmVzczogMCxcXHJcXG4gICAgICAgICAgICByb3RhdGVUaW1lb3V0OiBudWxsLFxcclxcbiAgICAgICAgfSksXFxyXFxuICAgICAgICBtb3VudGVkKCkge1xcclxcbiAgICAgICAgICAgIHRoaXMudXBsb2FkKHRoaXMuZmlsZSlcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjb21wdXRlZDoge1xcclxcbiAgICAgICAgICAgIGlzQ292ZXIoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdmVyICYmIHRoaXMuc3JjLmluZGV4T2YodGhpcy5jb3ZlcikgIT09IC0xXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICAgICAgICByb3RhdGUoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvdGF0ZVRpbWVvdXQpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJvdGF0ZVRpbWVvdXQpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVUaW1lb3V0ID0gbnVsbDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGltZy5jcm9zc09yaWdpbiA9IFxcXCJhbm9ueW1vdXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb21wcmVzc1VybCA9IGNvbXByZXNzKGltZywgKGN0eCwgY2FudmFzKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgucm90YXRlKDkwICogTWF0aC5QSSAvIDE4MCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAtaW1nLndpZHRoIC8gMiwgLWltZy53aWR0aCAvIDIpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBibG9iID0gYjY0VG9CbG9iKGNvbXByZXNzVXJsLnNwbGl0KCcsJylbMV0sICdpbWFnZS9qcGVnJyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWQoYmxvYiwgdGhpcy5zcmMuc3BsaXQoJy8nKS5yZXZlcnNlKClbMF0pO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSB0aGlzLnNyYztcXHJcXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHJlYWRMb2NhbFNyYyhmaWxlKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGUgaW5zdGFuY2VvZiBCbG9iKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNyYyA9IHJlYWRlci5yZXN1bHQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5zcmMpXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLnNyYyA9IGZpbGU7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHVwbG9hZChmaWxlLCBjYW52YXNGaWxlTmFtZSkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJlbG9hZCB8fCAhKGZpbGUgaW5zdGFuY2VvZiBCbG9iKSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkTG9jYWxTcmMoZmlsZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXFxyXFxuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XFxyXFxuICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXFxyXFxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGNhbnZhc0ZpbGVOYW1lIHx8IGZpbGUubmFtZSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAnL3Bob3RvL3VwbG9hZCcsIHRydWUpXFxyXFxuICAgICAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcXFwicHJvZ3Jlc3NcXFwiLCAoZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IChlLmxvYWRlZCAqIDEwMC4wIC8gZS50b3RhbCkgfHwgMTAwO1xcclxcbiAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIChlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gZS50YXJnZXQucmVzcG9uc2UudXJsO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGUudGFyZ2V0LnJlc3BvbnNlLnVybCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgIT0gMjAwKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gNDAwICYmICFjYW52YXNGaWxlTmFtZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL9CU0LvRjyDRhNCw0LnQu9C+0LIg0YEg0LHQuNGC0YvQvCDQvNCw0LnQvNGC0LjQv9C+0Lwg0YDQuNGB0YPQtdC8INC90LAg0LrQsNC90LLQtSDQuCDQvtGC0L/RgNCw0LLQu9GP0LXQvCDRgNC10LfRg9C70YzRgtCw0YJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXByZXNzVXJsID0gY29tcHJlc3MoaW1nKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBibG9iID0gYjY0VG9CbG9iKGNvbXByZXNzVXJsLnNwbGl0KCcsJylbMV0sICdpbWFnZS9qcGVnJyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZChibG9iLCBmaWxlLm5hbWUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRMb2NhbFNyYyhmaWxlKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmxvYWRlZCA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB3YXRjaDoge1xcclxcbiAgICAgICAgICAgIGZpbGUobnYpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBudiA9PT0gJ3N0cmluZycpIHRoaXMuc3JjID0gbnY7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuICAgICAgICAvKiBHcmV5IDgwMCAqL1xcclxcblxcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkLmZpbGxlZCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQuZm9jdXNlZCwgLnNpdGUtcGhvdG8tY2FyZDpob3ZlciB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDlweCByZ2JhKDE0MCwgMTQwLCAxNDAsIDAuNDkpO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQ6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1NiU7IC8qIDE2LzkgKi9cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkLWFjdGlvbnMge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZC1jb250ZW50IHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZWRpdC1waG90by1pY29uIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcbjxzdHlsZT5cXHJcXG5cXHJcXG4gICAgLnNtLXBob3RvLWRpYWxvZyAucGhvdG8tY292ZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAzMnB4O1xcclxcbiAgICAgICAgbGVmdDogMzJweDtcXHJcXG4gICAgICAgIHotaW5kZXg6IDEwMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5jbG9zZS1idG4ge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAzMnB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDMycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNtLXBob3RvLWRpYWxvZyAuYm90dG9tIHtcXHJcXG4gICAgICAgIHJpZ2h0OiAzMnB4O1xcclxcbiAgICAgICAgYm90dG9tOiAzMnB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNtLXBob3RvLWRpYWxvZyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMDUsIDEwOSwgMTE2LCAwLjYpO1xcclxcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kaWFsb2ctaW1hZ2UgLnYtaW1hZ2V7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRpYWxvZy1pbWFnZSB7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5mdWxsW2RhdGEtdi1kNGE2YTJlYV17XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjRTFFMUUxO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi5hY3RpdmVbZGF0YS12LWQ0YTZhMmVhXXtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIGJhY2tncm91bmQ6ICMyZTNlNGUgIWltcG9ydGFudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWdCQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0FBQ0E7QUFDQTtJQUNBLFdBQUE7SUFDQSw4QkFBQTtJQUNBLGtCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8di1yb3cgY2xhc3M9XFxcIm1hLTBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZnVsbFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWN0aXZlXFxcIiA6c3R5bGU9XFxcInt3aWR0aDogcHJvZ3Jlc3MrJyUnfVxcXCIvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvdi1yb3c+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBwcm9wczogWydwcm9ncmVzcyddLFxcclxcbiAgICAgICAgbmFtZTogXFxcIlByb2dyZXNzQmFyXFxcIlxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gICAgLmZ1bGx7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGhlaWdodDogNHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI0UxRTFFMTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYWN0aXZle1xcclxcbiAgICAgICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMmUzZTRlICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5waG90by1pbnB1dFtkYXRhLXYtNjQ2ZmQ4ZDldIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTJIQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx2LWNhcmQgY2xhc3M9XFxcImQtZmxleCBmbGV4LWNvbHVtbiBwdC00IHBiLTRcXFwiIGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciBlbGV2YXRpb249XFxcIjBcXFwiPlxcclxcbiAgICAgICAgPGRpdiB2LWlmPVxcXCJvbmUgJiYgbG9hZGVkUGhvdG9zLmxlbmd0aFxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj57e2xvYWRlZFBob3Rvc1swXS5uYW1lfX08L2Rpdj5cXHJcXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCIhb25lXFxcIiBjbGFzcz1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICA8di1jb2wgeHM9XFxcIjZcXFwiIG1kPVxcXCIzXFxcIiBzbT1cXFwiNlxcXCIgdi1mb3I9XFxcIihwaG90bywgaSkgaW4gY2Fyb3VzZWxQaG90b3NcXFwiIDprZXk9XFxcImlcXFwiIHYtaWY9XFxcIiEhY2Fyb3VzZWxQaG90b3NbaV1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZWRpdC1waG90by1jYXJkXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgOnByZWxvYWQ9XFxcInByZWxvYWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmZpbGxlZD1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmlsZT1cXFwicGhvdG9cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgQGRlbGV0ZT1cXFwiKCkgPT4gZGVsZXRlUGhvdG8ocGhvdG8sIGkpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5cXHJcXG4gICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICA8L3YtY29sPlxcclxcbiAgICAgICAgICAgIDx2LWNvbCB4cz1cXFwiNlxcXCIgbWQ9XFxcIjNcXFwiIHNtPVxcXCI2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGVkaXQtcGhvdG8tY2FyZFxcclxcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCIoKSA9PiAkcmVmcy5idG4uY2xpY2soKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZHJvcC1hcmVhIEBjaGFuZ2U9XFxcImFkZFBob3RvXFxcIiA6eWV0PVxcXCJjYXJvdXNlbFBob3Rvcy5sZW5ndGhcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aW9ucz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoaWRkZW5cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICAgICAgPC9lZGl0LXBob3RvLWNhcmQ+XFxyXFxuICAgICAgICAgICAgPC92LWNvbD5cXHJcXG4gICAgICAgIDwvdi1yb3c+XFxyXFxuICAgIDwvdi1jYXJkPlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG5cXHJcXG4gICAgaW1wb3J0IEVkaXRQaG90b0NhcmQgZnJvbSBcXFwiLi9FZGl0UGhvdG9DYXJkXFxcIjtcXHJcXG4gICAgaW1wb3J0IERyb3BBcmVhIGZyb20gXFxcIi4vRHJvcEFyZWFcXFwiO1xcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBuYW1lOiAncGhvdG8tbG9hZGVyJyxcXHJcXG4gICAgICAgIHByb3BzOiB7XFxyXFxuICAgICAgICAgICAgcmFkaXVzOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIG9uZToge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHBob3Rvczoge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gKFtdKSxcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHByZWxvYWQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHtEcm9wQXJlYSwgRWRpdFBob3RvQ2FyZH0sXFxyXFxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XFxyXFxuICAgICAgICAgICAgICAgIG46IDAsXFxyXFxuICAgICAgICAgICAgICAgIHBob3RvOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgbG9hZGVkUGhvdG9zOiBbXSxcXHJcXG4gICAgICAgICAgICAgICAgZGVsZXRlZDogW10sXFxyXFxuICAgICAgICAgICAgICAgIGNhcm91c2VsUGhvdG9zOiB2bS5waG90b3MsXFxyXFxuICAgICAgICAgICAgICAgIGZpbGVJbWc6IG51bGwsXFxyXFxuICAgICAgICB9KSxcXHJcXG4gICAgICAgIHVwZGF0ZWQoKSB7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIGRlbGV0ZVBob3RvKHBob3RvLCBjcGkpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHBob3RvLm5hbWUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkUGhvdG9zLmZvckVhY2goKGZpbGUsIGkpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZS5uYW1lID09PSBwaG90by5uYW1lKSBkZWxldGUgdGhpcy5sb2FkZWRQaG90b3NbaV07XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlZC5wdXNoKHRoaXMucGhvdG9zW2NwaV0uaWQpO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNhcm91c2VsUGhvdG9zW2NwaV07XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxQaG90b3MgPSBbLi4udGhpcy5jYXJvdXNlbFBob3Rvc107XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBnZXRQaG90b3MoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRlZFBob3Rvcy5jb25jYXQodGhpcy5kZWxldGVkKTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGdldEZpcnN0KCkge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkZWRQaG90b3NbMF07XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICByZXR1cm5Gb3JtRGF0YSh2YWwpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2F2ZS1waG90bycsIHZhbClcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHVwZGF0ZVBob3RvKHZhbCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnBob3RvID0gdmFsXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Nyb3BwZXJEaWFsb2cgPSBmYWxzZVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgY2xpY2tPbklucHV0KCkge1xcclxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZXMnKS5maWxlcyA9IChuZXcgRGF0YVRyYW5zZmVyKCkpLmZpbGVzO1xcclxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZXMnKS5jbGljaygpXFxyXFxuXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBhZGRQaG90byhldmVudCkge1xcclxcbiAgICAgICAgICAgICAgICBbLi4uZXZlbnQudGFyZ2V0LmZpbGVzXS5mb3JFYWNoKChwaG90bykgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlSW1nID0gcGhvdG87XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlSW1nLnNpemUgPiA1MDI0MDAwKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gJ9Cg0LDQt9C80LXRgCDRhNCw0LnQu9CwINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQsdC+0LvRjNGI0LUgNdCc0JEnXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aCA+IDEwKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gJ9CS0Ysg0L3QtSDQvNC+0LbQtdGC0LUg0LfQsNCz0YDRg9C30LjRgtGMINCx0L7Qu9GM0YjQtSAxMCDRhNC+0YLQvtCz0YDQsNGE0LjQuSdcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcm91c2VsUGhvdG9zID0gW1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuY2Fyb3VzZWxQaG90b3MsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVsb2FkID8gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLmZpbGVJbWcpIDogdGhpcy5maWxlSW1nXFxyXFxuICAgICAgICAgICAgICAgICAgICBdO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRQaG90b3MucHVzaCh0aGlzLmZpbGVJbWcpXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm4gPSB0aGlzLmxvYWRlZFBob3Rvcy5sZW5ndGggLSAxXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbWcgPSBudWxsO1xcclxcbiAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgd2F0Y2g6IHtcXHJcXG4gICAgICAgICAgICBwaG90b3MobnYpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJvdXNlbFBob3RvcyA9IG52Lm1hcCgoZmlsZSkgPT4gZmlsZS5maWxlKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgICAucGhvdG8taW5wdXQge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZGVzY3JpcHRpb24gLnYtdGV4dC1maWVsZF9fc2xvdCB0ZXh0YXJlYSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmRlc2NyaXB0aW9uLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDphZnRlciAsXFxuLmRlc2NyaXB0aW9uLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDpiZWZvcmV7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RFZGl0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBNEhBO0lBQ0Esd0JBQUE7QUFDQTtBQUNBOztJQUVBLHdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8di1jb250YWluZXJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiY292ZXJcXFwiPlxcclxcbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cXFwiY2VudGVyXFxcIiBqdXN0aWZ5PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJtYi0yXFxcIlxcclxcbiAgICAgICAgdi10ZXh0PVxcXCIkcm91dGUucGFyYW1zLmlkICA9PSAwID8gJ9CU0L7QsdCw0LLQu9C10L3QuNC1INC90L7QstC+0YHRgtC4JyA6ICAn0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQvdC+0LLQvtGB0YLQuCdcXFwiPlxcclxcbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XFxyXFxuICAgICAgICA8di10ZXh0LWZpZWxkXFxyXFxuICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXHJcXG4gICAgICAgICAgICBuYW1lPVxcXCJ0aXRsZVxcXCJcXHJcXG4gICAgICAgICAgICBsYWJlbD1cXFwi0JfQsNCz0L7Qu9C+0LLQvtC6XFxcIlxcclxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcInBvc3QudGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVxcXCJtZXNzYWdlcy50aXRsZVxcXCJcXHJcXG4gICAgICAgICAgICA+XFxyXFxuICAgICAgICA8L3YtdGV4dC1maWVsZD5cXHJcXG4gICAgICAgIDx2LXRleHRhcmVhXFxyXFxuICAgICAgICAgICAgICAgIG5hbWU9XFxcImRlc2NyaXB0aW9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICBsYWJlbD1cXFwi0J7Qv9C40YHQsNC90LjQtVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgaGludD1cXFwiSGludCB0ZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICA6dmFsdWU9XFxcIicgJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImRlc2NyaXB0aW9uIFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVxcXCJtZXNzYWdlcy5kZXNjcmlwdGlvblxcXCJcXHJcXG4gICAgICAgID48L3YtdGV4dGFyZWE+XFxyXFxuICAgICAgICA8ZWRpdG9yXFxyXFxuICAgICAgICAgICAgICAgIGFwaS1rZXk9XFxcImthcHIwa2gwdjN2c2Nua3Bwc3hnaWc5OHZmNm1naXRhaWk4YXV3M3AycGluMWM1dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcIm10LTJcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInBvc3QuZGVzY3JpcHRpb25cXFwiXFxyXFxuICAgICAgICA+XFxyXFxuICAgICAgICA8L2VkaXRvcj5cXHJcXG4gICAgICAgIDx2LXNwYWNlci8+XFxyXFxuICAgICAgICA8cGhvdG8tbG9hZGVyIHJlZj1cXFwibG9hZGVyXFxcIiA6cGhvdG9zPVxcXCJwb3N0LnBob3Rvc1xcXCIvPlxcclxcbiAgICAgICAgPHYtYnRuIGNsYXNzPVxcXCJzYXZlLWJ0bi10ZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgIEBjbGljaz1cXFwiKCkgPT4gcG9zdC5pZCA/IHVwZGF0ZSgpIDogY3JlYXRlKClcXFwiXFxyXFxuICAgICAgICAgICAgICAgY29sb3I9XFxcInN1Y2Nlc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCIhKHBvc3QuaWQ+IDApICYmICghcG9zdC5kZXNjcmlwdGlvbiB8fCAhcG9zdC50aXRsZSlcXFwiPlxcclxcbiAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxcclxcbiAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgPC92LWNvbnRhaW5lcj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCBFZGl0b3IgZnJvbSAnQHRpbnltY2UvdGlueW1jZS12dWUnO1xcclxcbiAgICBpbXBvcnQgUGhvdG9Mb2FkZXIgZnJvbSAnQC9jb21wb25lbnRzL3Bob3RvLWxvYWRlcidcXHJcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICAgICAgbmFtZTogXFxcIlBvc3RBZGRcXFwiLFxcclxcbiAgICAgICAgY29tcG9uZW50czoge1xcclxcbiAgICAgICAgICAgIEVkaXRvcixcXHJcXG4gICAgICAgICAgICBQaG90b0xvYWRlclxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIHBvc3Q6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlkOiBOdW1iZXIucGFyc2VJbnQodm0uJHJvdXRlLnBhcmFtcy5pZCksXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXFxyXFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXFxyXFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbW91bnRlZCgpIHtcXHJcXG4gICAgICAgICAgICBsZXQgbW9kZWxJZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcXHJcXG4gICAgICAgICAgICBpZiAobW9kZWxJZCAhPSAwKSB7XFxyXFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy9wb3N0LycrIG1vZGVsSWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QgPSByZXNwb25zZS5kYXRhLmRhdGE7XFxyXFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9IGU/LnJlc3BvbnNlPy5lcnJvciB8fCAn0J/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCc7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgY3JlYXRlKCkge1xcclxcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL3Bvc3QnLCB0aGlzLnBvc3QpXFxyXFxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdC5pZCA9IHIuZGF0YS5kYXRhLmlkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICB1cGRhdGUoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wdXQoJy9wb3N0LycrIHRoaXMucG9zdC5pZCwgdGhpcy5wb3N0KVxcclxcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGhvdG9zID0gdGhpcy4kcmVmcy5sb2FkZXIuZ2V0UGhvdG9zKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Bob3Rvcy5sZW5ndGgpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQaG90b3MuZm9yRWFjaCgocGhvdG8sIGkpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaG90by5uYW1lKSBmb3JtRGF0YS5hcHBlbmQoJ3Bvc3RfcGhvdG9zWycraSsnXScsIHBob3RvLCBwaG90by5uYW1lKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBmb3JtRGF0YS5hcHBlbmQoJ2RlbGV0ZV9waG90b3NbJytpKyddJywgcGhvdG8pXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnX21ldGhvZCcsICdQVVQnKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy9wb3N0LycrdGhpcy5wb3N0LmlkLCBmb3JtRGF0YSkudGhlbigoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6IFxcXCJwb3N0c1xcXCJ9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9ICBg0J7RiNC40LHQutCwINGB0L7RhdGA0LDQvdC10L3QuNGPINGE0L7RgtC+0LPRgNCw0YTQuNC4YFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogXFxcInBvc3RzXFxcIn0pO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuICAgIC5kZXNjcmlwdGlvbiAudi10ZXh0LWZpZWxkX19zbG90IHRleHRhcmVhIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgICAuZGVzY3JpcHRpb24udi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmFmdGVyICxcXHJcXG4gICAgLmRlc2NyaXB0aW9uLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDpiZWZvcmV7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ODgxZThmMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ecm9wQXJlYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ecm9wQXJlYS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ODgxZThmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTg4MWU4ZjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1ODgxZThmMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1ODgxZThmMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1ODgxZThmMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRHJvcEFyZWEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU4ODFlOGYyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU4ODFlOGYyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ecm9wQXJlYS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhYmU0MTFkJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhYmU0MTFkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjRhYmU0MTFkXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGFiZTQxMWQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGFiZTQxMWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGFiZTQxMWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhYmU0MTFkJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRhYmU0MTFkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ0YTZhMmVhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ0YTZhMmVhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJkNGE2YTJlYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Q0YTZhMmVhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Q0YTZhMmVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Q0YTZhMmVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDRhNmEyZWEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDRhNmEyZWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjQ2ZmQ4ZDlcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NDZmZDhkOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NDZmZDhkOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NDZmZDhkOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NDZmZDhkOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRmNjQ3ZjVhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Bvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Bvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ZjY0N2Y1YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ZjY0N2Y1YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ZjY0N2Y1YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRmNjQ3ZjVhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRmNjQ3ZjVhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvUG9zdEVkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0RWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0RWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcC1hcmVhXCIsXG4gICAgICBjbGFzczogX3ZtLiR2dWV0aWZ5LmJyZWFrcG9pbnQuc21BbmREb3duID8gW1wiZHJvcC1zbVwiXSA6IFtdLFxuICAgICAgYXR0cnM6IHsgaWQ6IFwiZHJvcC1hcmVhXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJmb3JtXCIsIHsgc3RhdGljQ2xhc3M6IFwiZHJvcC1mb3JtXCIgfSwgW1xuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJoaWRlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgaWQ6IFwiZmlsZUVsZW1cIixcbiAgICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgICAgYWNjZXB0OiBcImltYWdlLypcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY2hhbmdlXCIsIGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImRyb3AtYnRuXCIsIGF0dHJzOiB7IGZvcjogXCJmaWxlRWxlbVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoIV92bS55ZXQgPyBcItCX0LDQs9GA0YPQt9C40YLRjCDRhNC+0YLQvlwiIDogXCLQl9Cw0LPRgNGD0LfQuNGC0Ywg0LXRidC1XCIpKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybWF0LWZpbGUtZGVzY1wiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLQpNC+0YDQvNCw0YIg4oCTIGpwZywgcG5nXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLWRlc2MgaG92ZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi0J7RgtC/0YPRgdGC0LjRgtC1INGE0L7RgtC+0LPRgNCw0YTQuNGOINGB0Y7QtNCwXCIpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJzaXRlLXBob3RvLWNhcmRcIixcbiAgICAgIGNsYXNzOiB7IGZvY3VzZWQ6IF92bS5mb2N1cywgZmlsbGVkOiBfdm0uZmlsbGVkIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS1waG90by1jYXJkLWNvbnRlbnRcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInotaW5kZXhcIjogXCIxXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIF92bS5sb2FkZWQgJiYgX3ZtLnNyY1xuICAgICAgICAgICAgICAgID8gX2MoXCJ2LWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnNyYywgY292ZXI6IFwiXCIsIGhlaWdodDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJjbGlja1wiLCBfdm0uJGF0dHJzW1widmFsdWVcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3BlbiA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiAhX3ZtLmxvYWRlZCAmJiAhX3ZtLmVycm9yXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGEtOFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiYWxpZ24taXRlbXNcIjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHhzOiBcIjEyXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJwcm9ncmVzcy1iYXJcIiwgeyBhdHRyczogeyBwcm9ncmVzczogX3ZtLnByb2dyZXNzIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaXRlLXBob3RvLWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiei1pbmRleFwiOiBcIjJcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3QoXCJhY3Rpb25zXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBsLTUgcHItNSBwdC0yIGp1c3RpZnktZW5kXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB4czogXCIxMlwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmFiOiBcIlwiLCBzbWFsbDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJkZWxldGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLWRlbGV0ZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ub3BlblxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBcImNvbnRlbnQtY2xhc3NcIjogXCJzbS1waG90by1kaWFsb2dcIiwgZnVsbHNjcmVlbjogdHJ1ZSB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3BlbixcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0ub3BlbiA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcGVuXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpYWxvZy1pbWFnZVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRlZCAmJiBfdm0uc3JjXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5zcmMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4LWhlaWdodFwiOiBcIjkwdmhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIsIGNvbG9yOiBcImdyYXlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcImZvY3VzT3V0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLWNsb3NlXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ2LXJvd1wiLCB7IHN0YXRpY0NsYXNzOiBcIm1hLTBcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiwgc3R5bGU6IHsgd2lkdGg6IF92bS5wcm9ncmVzcyArIFwiJVwiIH0gfSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNhcmRcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4gcHQtNCBwYi00XCIsXG4gICAgICBhdHRyczogeyBcImp1c3RpZnktY2VudGVyXCI6IFwiXCIsIFwiYWxpZ24tY2VudGVyXCI6IFwiXCIsIGVsZXZhdGlvbjogXCIwXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLm9uZSAmJiBfdm0ubG9hZGVkUGhvdG9zLmxlbmd0aFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sb2FkZWRQaG90b3NbMF0ubmFtZSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhX3ZtLm9uZVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uY2Fyb3VzZWxQaG90b3MsIGZ1bmN0aW9uKHBob3RvLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhX3ZtLmNhcm91c2VsUGhvdG9zW2ldXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaSwgYXR0cnM6IHsgeHM6IFwiNlwiLCBtZDogXCIzXCIsIHNtOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJlZGl0LXBob3RvLWNhcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWQ6IF92bS5wcmVsb2FkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiBwaG90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlUGhvdG8ocGhvdG8sIGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czogXCI2XCIsIG1kOiBcIjNcIiwgc206IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJlZGl0LXBob3RvLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJlZnMuYnRuLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoaWRkZW5cIiB9KV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICA4MTAwMjExNzBcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRyb3AtYXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB5ZXQ6IF92bS5jYXJvdXNlbFBob3Rvcy5sZW5ndGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmFkZFBob3RvIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvdmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIsIGp1c3RpZnk6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgX3ZtLiRyb3V0ZS5wYXJhbXMuaWQgPT0gMFxuICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC70LXQvdC40LUg0L3QvtCy0L7RgdGC0LhcIlxuICAgICAgICAgICAgICA6IFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQvdC+0LLQvtGB0YLQuFwiXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgICAgIGxhYmVsOiBcItCX0LDQs9C+0LvQvtCy0L7QulwiLFxuICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLnRpdGxlXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5wb3N0LnRpdGxlLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5wb3N0LCBcInRpdGxlXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwicG9zdC50aXRsZVwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0YXJlYVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uIFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICBsYWJlbDogXCLQntC/0LjRgdCw0L3QuNC1XCIsXG4gICAgICAgICAgaGludDogXCJIaW50IHRleHRcIixcbiAgICAgICAgICB2YWx1ZTogXCIgXCIsXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMuZGVzY3JpcHRpb25cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJlZGl0b3JcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtdC0yXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJhcGkta2V5XCI6IFwia2FwcjBraDB2M3ZzY25rcHBzeGdpZzk4dmY2bWdpdGFpaThhdXczcDJwaW4xYzV0XCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnBvc3QuZGVzY3JpcHRpb24sXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBvc3QsIFwiZGVzY3JpcHRpb25cIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJwb3N0LmRlc2NyaXB0aW9uXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBob3RvLWxvYWRlclwiLCB7IHJlZjogXCJsb2FkZXJcIiwgYXR0cnM6IHsgcGhvdG9zOiBfdm0ucG9zdC5waG90b3MgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2F2ZS1idG4tdGV4dFwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBjb2xvcjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgIShfdm0ucG9zdC5pZCA+IDApICYmICghX3ZtLnBvc3QuZGVzY3JpcHRpb24gfHwgIV92bS5wb3N0LnRpdGxlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5wb3N0LmlkID8gX3ZtLnVwZGF0ZSgpIDogX3ZtLmNyZWF0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcXG4gICAgXCIpXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ecm9wQXJlYS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ODgxZThmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiOWU4NWUwZmFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ecm9wQXJlYS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ODgxZThmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU4ODFlOGYyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGFiZTQxMWQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjIwMDhmOGVhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YWJlNDExZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGFiZTQxMWQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMDhjMjc3OGNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kNGE2YTJlYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjhmM2UzN2NcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kNGE2YTJlYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ0YTZhMmVhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjE4NWRkMmFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjQ2ZmQ4ZDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjQ2ZmQ4ZDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjE5YTRkNTQ2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0RWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==