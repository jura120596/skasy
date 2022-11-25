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
        description: '',
        photos: []
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

      window.axios.put('/user/post/' + this.post.id, this.post).then(function (r) {
        var newPhotos = _this3.$refs.loader.getPhotos();

        if (newPhotos.length) {
          var formData = new FormData();
          newPhotos.forEach(function (photo, i) {
            if (photo.name) formData.append('post_photos[' + i + ']', photo, photo.name);else formData.append('delete_photos[' + i + ']', photo);
          });
          formData.append('_method', 'PUT');

          try {
            window.axios.post('/user/post/' + _this3.post.id, formData).then(function () {
              _this3.$router.push({
                name: "uposts"
              });
            });
          } catch (e) {
            _this3.$root.$children[0].snackbarText = "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438";
            _this3.$root.$children[0].snackbar = true;

            _this3.$router.push({
              name: "uposts"
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.description .v-text-field__slot textarea {\n    display: none !important;\n}\n.description.v-text-field>.v-input__control>.v-input__slot:after ,\n.description.v-text-field>.v-input__control>.v-input__slot:before{\n    display: none !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/UserPostEdit.vue"],"names":[],"mappings":";AA6HA;IACA,wBAAA;AACA;AACA;;IAEA,wBAAA;AACA","sourcesContent":["<template>\r\n    <v-container\r\n            class=\"cover\">\r\n        <v-toolbar-title align=\"center\" justify=\"center\" class=\"mb-2\"\r\n        v-text=\"$route.params.id  == 0 ? 'Добавление обращения' :  'Редактирование обращения'\">\r\n        </v-toolbar-title>\r\n        <v-text-field\r\n            type=\"text\"\r\n            name=\"title\"\r\n            label=\"Заголовок\"\r\n            v-model=\"post.title\"\r\n            :error-messages=\"messages.title\"\r\n            >\r\n        </v-text-field>\r\n        <v-textarea\r\n                name=\"description\"\r\n                label=\"Описание\"\r\n                hint=\"Hint text\"\r\n                :value=\"' '\"\r\n                class=\"description \"\r\n                :error-messages=\"messages.description\"\r\n        ></v-textarea>\r\n        <editor\r\n                api-key=\"kapr0kh0v3vscnkppsxgig98vf6mgitaii8auw3p2pin1c5t\"\r\n                class=\"mt-2\"\r\n                v-model=\"post.description\"\r\n        >\r\n        </editor>\r\n        <v-spacer/>\r\n        <photo-loader ref=\"loader\"  :photos=\"post.photos\"/>\r\n        <v-btn class=\"save-btn-text\"\r\n               @click=\"() => post.id>0 ? update() : create()\"\r\n               color=\"success\"\r\n               :disabled=\"!(post.id> 0) && (!post.description || !post.title)\">\r\n            Сохранить\r\n        </v-btn>\r\n    </v-container>\r\n</template>\r\n\r\n<script>\r\n    import Editor from '@tinymce/tinymce-vue';\r\n    import PhotoLoader from '@/components/photo-loader'\r\n    export default {\r\n        name: \"UserPostEdit\",\r\n        components: {\r\n            Editor,\r\n            PhotoLoader\r\n        },\r\n        data: (vm) => {\r\n            return {\r\n                post: {\r\n                    id: vm.$route.params.id,\r\n                    title: '',\r\n                    description: '',\r\n                    photos: [],\r\n                },\r\n                messages: {\r\n                    title: '',\r\n                    description: '',\r\n                }\r\n            }\r\n        },\r\n        mounted() {\r\n            let modelId = this.$route.params.id;\r\n            if (modelId != 0) {\r\n                window.axios.get('/user/post/'+ modelId).then((response) => {\r\n                    this.post = response.data.data;\r\n                }).catch((e) => {\r\n                    console.log(e);\r\n                    this.$root.$children[0].snackbarText = e?.response?.error || 'Произошла ошибка';\r\n                    this.$root.$children[0].snackbar = true;\r\n                });\r\n            }\r\n        },\r\n        methods: {\r\n            create() {\r\n                window.axios.post('/user/post', this.post)\r\n                    .then((r) => {\r\n                        this.post.id = r.data.data.id;\r\n                        this.update();\r\n                    }).catch((e) => {\r\n                    if (e.response && e.response.status === 422) {\r\n                        let errors = e.response.data.errors\r\n                        Object.keys(this.messages).forEach((k)=> {\r\n                            this.messages[k] = errors[k]?.[0] || '';\r\n                        });\r\n                    }\r\n                })\r\n            },\r\n             update() {\r\n                window.axios.put('/user/post/'+ this.post.id, this.post)\r\n                    .then((r) => {\r\n                        let newPhotos = this.$refs.loader.getPhotos();\r\n                        if (newPhotos.length) {\r\n                            const formData = new FormData();\r\n                            newPhotos.forEach((photo, i) => {\r\n                                if (photo.name) formData.append('post_photos['+i+']', photo, photo.name);\r\n                                else formData.append('delete_photos['+i+']', photo)\r\n                            });\r\n                            formData.append('_method', 'PUT');\r\n                            try {\r\n                                window.axios.post('/user/post/'+this.post.id, formData).then(() => {\r\n                                    this.$router.push({name: \"uposts\"});\r\n                                });\r\n                            } catch (e) {\r\n                                this.$root.$children[0].snackbarText =  `Ошибка сохранения фотографии`;\r\n                                this.$root.$children[0].snackbar = true;\r\n                                this.$router.push({name: \"uposts\"});\r\n                            }\r\n                        }\r\n                    }).catch((e) => {\r\n                    console.log(e);\r\n                    if (e.response && e.response.status === 422) {\r\n                        let errors = e.response.data.errors;\r\n                        Object.keys(this.messages).forEach((k)=> {\r\n                            this.messages[k] = errors[k]?.[0] || '';\r\n                        });\r\n                    }\r\n                })\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style>\r\n    .description .v-text-field__slot textarea {\r\n        display: none !important;\r\n    }\r\n    .description.v-text-field>.v-input__control>.v-input__slot:after ,\r\n    .description.v-text-field>.v-input__control>.v-input__slot:before{\r\n        display: none !important;\r\n    }\r\n</style>"],"sourceRoot":""}]);
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
              return _vm.post.id > 0 ? _vm.update() : _vm.create()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1NjcmlwdExvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1RpbnlNQ0UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGlueW1jZS90aW55bWNlLXZ1ZS9saWIvY2pzL21haW4vdHMvY29tcG9uZW50cy9FZGl0b3JQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRHJvcEFyZWEudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRHJvcEFyZWEudnVlPzZjYTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWU/Y2MzOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZT9iMDE0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZT80MDc2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWU/NjZhMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RFZGl0LnZ1ZT9lZDhhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Ryb3BBcmVhLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ecm9wQXJlYS52dWU/OGFiNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZT81ODFmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZT9iYjU4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWU/MjZlYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RFZGl0LnZ1ZT9hNGM1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Ryb3BBcmVhLnZ1ZT80NTc3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0VkaXRQaG90b0NhcmQudnVlPzgzYzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIudnVlP2JhZDUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZT8yMTc3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Vc2VyUG9zdEVkaXQudnVlPzQwYWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRHJvcEFyZWEudnVlPzg4M2MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWU/YmJmNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZT9hNDJmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZT83NzU5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWU/NzU1NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RFZGl0LnZ1ZT8xYTY1Il0sIm5hbWVzIjpbImNvbXByZXNzIiwiaW1nIiwibW9kaWZ5Q29udGV4dCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsImJhc2U2NERhdGEiLCJ0b0RhdGFVUkwiLCJiNjRUb0Jsb2IiLCJiNjREYXRhIiwiY29udGVudFR5cGUiLCJieXRlQ2hhcmFjdGVycyIsImF0b2IiLCJidWZmZXIiLCJhQnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJsZW5ndGgiLCJ1QnVmZmVyIiwiVWludDhBcnJheSIsImkiLCJjaGFyQ29k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O0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7QUNYZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyw4dUJBQXVYO0FBQzdZO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwySkFBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7OztBQ1hmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHlyQkFBK1Y7QUFDclg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJKQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfVXNlclBvc3RFZGl0X3Z1ZTg0YTcyMDY2ZmFiOTIyY2QxMGY5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVXRpbHNfMSA9IHJlcXVpcmUoXCIuL1V0aWxzXCIpO1xudmFyIGNyZWF0ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxpc3RlbmVyczogW10sXG4gICAgICAgIHNjcmlwdElkOiBVdGlsc18xLnV1aWQoJ3Rpbnktc2NyaXB0JyksXG4gICAgICAgIHNjcmlwdExvYWRlZDogZmFsc2VcbiAgICB9O1xufTtcbnZhciBDcmVhdGVTY3JpcHRMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXRlID0gY3JlYXRlU3RhdGUoKTtcbiAgICB2YXIgaW5qZWN0U2NyaXB0VGFnID0gZnVuY3Rpb24gKHNjcmlwdElkLCBkb2MsIHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNjcmlwdFRhZyA9IGRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0VGFnLnJlZmVycmVyUG9saWN5ID0gJ29yaWdpbic7XG4gICAgICAgIHNjcmlwdFRhZy50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHRUYWcuaWQgPSBzY3JpcHRJZDtcbiAgICAgICAgc2NyaXB0VGFnLnNyYyA9IHVybDtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzY3JpcHRUYWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZXIpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NyaXB0VGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVyKTtcbiAgICAgICAgaWYgKGRvYy5oZWFkKSB7XG4gICAgICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHRUYWcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgbG9hZCA9IGZ1bmN0aW9uIChkb2MsIHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHN0YXRlLnNjcmlwdExvYWRlZCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmICghZG9jLmdldEVsZW1lbnRCeUlkKHN0YXRlLnNjcmlwdElkKSkge1xuICAgICAgICAgICAgICAgIGluamVjdFNjcmlwdFRhZyhzdGF0ZS5zY3JpcHRJZCwgZG9jLCB1cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbigpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc2NyaXB0TG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gT25seSB0byBiZSB1c2VkIGJ5IHRlc3RzLlxuICAgIHZhciByZWluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YXRlID0gY3JlYXRlU3RhdGUoKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWQ6IGxvYWQsXG4gICAgICAgIHJlaW5pdGlhbGl6ZTogcmVpbml0aWFsaXplXG4gICAgfTtcbn07XG52YXIgU2NyaXB0TG9hZGVyID0gQ3JlYXRlU2NyaXB0TG9hZGVyKCk7XG5leHBvcnRzLlNjcmlwdExvYWRlciA9IFNjcmlwdExvYWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCk7IH07XG52YXIgZ2V0VGlueW1jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2xvYmFsID0gZ2V0R2xvYmFsKCk7XG4gICAgcmV0dXJuIGdsb2JhbCAmJiBnbG9iYWwudGlueW1jZSA/IGdsb2JhbC50aW55bWNlIDogbnVsbDtcbn07XG5leHBvcnRzLmdldFRpbnltY2UgPSBnZXRUaW55bWNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdmFsaWRFdmVudHMgPSBbXG4gICAgJ29uQWN0aXZhdGUnLFxuICAgICdvbkFkZFVuZG8nLFxuICAgICdvbkJlZm9yZUFkZFVuZG8nLFxuICAgICdvbkJlZm9yZUV4ZWNDb21tYW5kJyxcbiAgICAnb25CZWZvcmVHZXRDb250ZW50JyxcbiAgICAnb25CZWZvcmVSZW5kZXJVSScsXG4gICAgJ29uQmVmb3JlU2V0Q29udGVudCcsXG4gICAgJ29uQmVmb3JlUGFzdGUnLFxuICAgICdvbkJsdXInLFxuICAgICdvbkNoYW5nZScsXG4gICAgJ29uQ2xlYXJVbmRvcycsXG4gICAgJ29uQ2xpY2snLFxuICAgICdvbkNvbnRleHRNZW51JyxcbiAgICAnb25Db3B5JyxcbiAgICAnb25DdXQnLFxuICAgICdvbkRibGNsaWNrJyxcbiAgICAnb25EZWFjdGl2YXRlJyxcbiAgICAnb25EaXJ0eScsXG4gICAgJ29uRHJhZycsXG4gICAgJ29uRHJhZ0Ryb3AnLFxuICAgICdvbkRyYWdFbmQnLFxuICAgICdvbkRyYWdHZXN0dXJlJyxcbiAgICAnb25EcmFnT3ZlcicsXG4gICAgJ29uRHJvcCcsXG4gICAgJ29uRXhlY0NvbW1hbmQnLFxuICAgICdvbkZvY3VzJyxcbiAgICAnb25Gb2N1c0luJyxcbiAgICAnb25Gb2N1c091dCcsXG4gICAgJ29uR2V0Q29udGVudCcsXG4gICAgJ29uSGlkZScsXG4gICAgJ29uSW5pdCcsXG4gICAgJ29uS2V5RG93bicsXG4gICAgJ29uS2V5UHJlc3MnLFxuICAgICdvbktleVVwJyxcbiAgICAnb25Mb2FkQ29udGVudCcsXG4gICAgJ29uTW91c2VEb3duJyxcbiAgICAnb25Nb3VzZUVudGVyJyxcbiAgICAnb25Nb3VzZUxlYXZlJyxcbiAgICAnb25Nb3VzZU1vdmUnLFxuICAgICdvbk1vdXNlT3V0JyxcbiAgICAnb25Nb3VzZU92ZXInLFxuICAgICdvbk1vdXNlVXAnLFxuICAgICdvbk5vZGVDaGFuZ2UnLFxuICAgICdvbk9iamVjdFJlc2l6ZVN0YXJ0JyxcbiAgICAnb25PYmplY3RSZXNpemVkJyxcbiAgICAnb25PYmplY3RTZWxlY3RlZCcsXG4gICAgJ29uUGFzdGUnLFxuICAgICdvblBvc3RQcm9jZXNzJyxcbiAgICAnb25Qb3N0UmVuZGVyJyxcbiAgICAnb25QcmVQcm9jZXNzJyxcbiAgICAnb25Qcm9ncmVzc1N0YXRlJyxcbiAgICAnb25SZWRvJyxcbiAgICAnb25SZW1vdmUnLFxuICAgICdvblJlc2V0JyxcbiAgICAnb25TYXZlQ29udGVudCcsXG4gICAgJ29uU2VsZWN0aW9uQ2hhbmdlJyxcbiAgICAnb25TZXRBdHRyaWInLFxuICAgICdvblNldENvbnRlbnQnLFxuICAgICdvblNob3cnLFxuICAgICdvblN1Ym1pdCcsXG4gICAgJ29uVW5kbycsXG4gICAgJ29uVmlzdWFsQWlkJ1xuXTtcbnZhciBpc1ZhbGlkS2V5ID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdmFsaWRFdmVudHMubWFwKGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gZXZlbnQudG9Mb3dlckNhc2UoKTsgfSkuaW5kZXhPZihrZXkudG9Mb3dlckNhc2UoKSkgIT09IC0xOyB9O1xuZXhwb3J0cy5pc1ZhbGlkS2V5ID0gaXNWYWxpZEtleTtcbnZhciBiaW5kSGFuZGxlcnMgPSBmdW5jdGlvbiAoaW5pdEV2ZW50LCBsaXN0ZW5lcnMsIGVkaXRvcikge1xuICAgIE9iamVjdC5rZXlzKGxpc3RlbmVycylcbiAgICAgICAgLmZpbHRlcihpc1ZhbGlkS2V5KVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gbGlzdGVuZXJzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ29uSW5pdCcpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGluaXRFdmVudCwgZWRpdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVkaXRvci5vbihrZXkuc3Vic3RyaW5nKDIpLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gaGFuZGxlcihlLCBlZGl0b3IpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmV4cG9ydHMuYmluZEhhbmRsZXJzID0gYmluZEhhbmRsZXJzO1xudmFyIGJpbmRNb2RlbEhhbmRsZXJzID0gZnVuY3Rpb24gKGN0eCwgZWRpdG9yKSB7XG4gICAgdmFyIG1vZGVsRXZlbnRzID0gY3R4LiRwcm9wcy5tb2RlbEV2ZW50cyA/IGN0eC4kcHJvcHMubW9kZWxFdmVudHMgOiBudWxsO1xuICAgIHZhciBub3JtYWxpemVkRXZlbnRzID0gQXJyYXkuaXNBcnJheShtb2RlbEV2ZW50cykgPyBtb2RlbEV2ZW50cy5qb2luKCcgJykgOiBtb2RlbEV2ZW50cztcbiAgICBlZGl0b3Iub24obm9ybWFsaXplZEV2ZW50cyA/IG5vcm1hbGl6ZWRFdmVudHMgOiAnY2hhbmdlIGlucHV0IHVuZG8gcmVkbycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3R4LiRlbWl0KCdpbnB1dCcsIGVkaXRvci5nZXRDb250ZW50KHsgZm9ybWF0OiBjdHguJHByb3BzLm91dHB1dEZvcm1hdCB9KSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5iaW5kTW9kZWxIYW5kbGVycyA9IGJpbmRNb2RlbEhhbmRsZXJzO1xudmFyIGluaXRFZGl0b3IgPSBmdW5jdGlvbiAoaW5pdEV2ZW50LCBjdHgsIGVkaXRvcikge1xuICAgIHZhciB2YWx1ZSA9IGN0eC4kcHJvcHMudmFsdWUgPyBjdHguJHByb3BzLnZhbHVlIDogJyc7XG4gICAgdmFyIGluaXRpYWxWYWx1ZSA9IGN0eC4kcHJvcHMuaW5pdGlhbFZhbHVlID8gY3R4LiRwcm9wcy5pbml0aWFsVmFsdWUgOiAnJztcbiAgICBlZGl0b3Iuc2V0Q29udGVudCh2YWx1ZSB8fCAoY3R4LmluaXRpYWxpemVkID8gY3R4LmNhY2hlIDogaW5pdGlhbFZhbHVlKSk7XG4gICAgLy8gQWx3YXlzIGJpbmQgdGhlIHZhbHVlIGxpc3RlbmVyIGluIGNhc2UgdXNlcnMgdXNlIDp2YWx1ZSBpbnN0ZWFkIG9mIHYtbW9kZWxcbiAgICBjdHguJHdhdGNoKCd2YWx1ZScsIGZ1bmN0aW9uICh2YWwsIHByZXZWYWwpIHtcbiAgICAgICAgaWYgKGVkaXRvciAmJiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiB2YWwgIT09IHByZXZWYWwgJiYgdmFsICE9PSBlZGl0b3IuZ2V0Q29udGVudCh7IGZvcm1hdDogY3R4LiRwcm9wcy5vdXRwdXRGb3JtYXQgfSkpIHtcbiAgICAgICAgICAgIGVkaXRvci5zZXRDb250ZW50KHZhbCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBjaGVja3MgaWYgdGhlIHYtbW9kZWwgc2hvcnRoYW5kIGlzIHVzZWQgKHdoaWNoIHNldHMgYW4gdi1vbjppbnB1dCBsaXN0ZW5lcikgYW5kIHRoZW4gYmluZHMgZWl0aGVyXG4gICAgLy8gc3BlY2lmaWVkIHRoZSBldmVudHMgb3IgZGVmYXVsdHMgdG8gXCJjaGFuZ2Uga2V5dXBcIiBldmVudCBhbmQgZW1pdHMgdGhlIGVkaXRvciBjb250ZW50IG9uIHRoYXQgZXZlbnRcbiAgICBpZiAoY3R4LiRsaXN0ZW5lcnMuaW5wdXQpIHtcbiAgICAgICAgYmluZE1vZGVsSGFuZGxlcnMoY3R4LCBlZGl0b3IpO1xuICAgIH1cbiAgICBiaW5kSGFuZGxlcnMoaW5pdEV2ZW50LCBjdHguJGxpc3RlbmVycywgZWRpdG9yKTtcbiAgICBjdHguaW5pdGlhbGl6ZWQgPSB0cnVlO1xufTtcbmV4cG9ydHMuaW5pdEVkaXRvciA9IGluaXRFZGl0b3I7XG52YXIgdW5pcXVlID0gMDtcbnZhciB1dWlkID0gZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCk7XG4gICAgdW5pcXVlKys7XG4gICAgcmV0dXJuIHByZWZpeCArICdfJyArIHJhbmRvbSArIHVuaXF1ZSArIFN0cmluZyh0aW1lKTtcbn07XG5leHBvcnRzLnV1aWQgPSB1dWlkO1xudmFyIGlzVGV4dGFyZWEgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnO1xufTtcbmV4cG9ydHMuaXNUZXh0YXJlYSA9IGlzVGV4dGFyZWE7XG52YXIgbm9ybWFsaXplUGx1Z2luQXJyYXkgPSBmdW5jdGlvbiAocGx1Z2lucykge1xuICAgIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ3VuZGVmaW5lZCcgfHwgcGx1Z2lucyA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwbHVnaW5zKSA/IHBsdWdpbnMgOiBwbHVnaW5zLnNwbGl0KCcgJyk7XG59O1xudmFyIG1lcmdlUGx1Z2lucyA9IGZ1bmN0aW9uIChpbml0UGx1Z2lucywgaW5wdXRQbHVnaW5zKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVBsdWdpbkFycmF5KGluaXRQbHVnaW5zKS5jb25jYXQobm9ybWFsaXplUGx1Z2luQXJyYXkoaW5wdXRQbHVnaW5zKSk7XG59O1xuZXhwb3J0cy5tZXJnZVBsdWdpbnMgPSBtZXJnZVBsdWdpbnM7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7IH07XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2NyaXB0TG9hZGVyXzEgPSByZXF1aXJlKFwiLi4vU2NyaXB0TG9hZGVyXCIpO1xudmFyIFRpbnlNQ0VfMSA9IHJlcXVpcmUoXCIuLi9UaW55TUNFXCIpO1xudmFyIFV0aWxzXzEgPSByZXF1aXJlKFwiLi4vVXRpbHNcIik7XG52YXIgRWRpdG9yUHJvcFR5cGVzXzEgPSByZXF1aXJlKFwiLi9FZGl0b3JQcm9wVHlwZXNcIik7XG52YXIgcmVuZGVySW5saW5lID0gZnVuY3Rpb24gKGgsIGlkLCB0YWdOYW1lKSB7XG4gICAgcmV0dXJuIGgodGFnTmFtZSA/IHRhZ05hbWUgOiAnZGl2Jywge1xuICAgICAgICBhdHRyczogeyBpZDogaWQgfVxuICAgIH0pO1xufTtcbnZhciByZW5kZXJJZnJhbWUgPSBmdW5jdGlvbiAoaCwgaWQpIHtcbiAgICByZXR1cm4gaCgndGV4dGFyZWEnLCB7XG4gICAgICAgIGF0dHJzOiB7IGlkOiBpZCB9LFxuICAgICAgICBzdHlsZTogeyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9XG4gICAgfSk7XG59O1xudmFyIGluaXRpYWxpc2UgPSBmdW5jdGlvbiAoY3R4KSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpbmFsSW5pdCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjdHguJHByb3BzLmluaXQpLCB7IHJlYWRvbmx5OiBjdHguJHByb3BzLmRpc2FibGVkLCBzZWxlY3RvcjogXCIjXCIgKyBjdHguZWxlbWVudElkLCBwbHVnaW5zOiBVdGlsc18xLm1lcmdlUGx1Z2lucyhjdHguJHByb3BzLmluaXQgJiYgY3R4LiRwcm9wcy5pbml0LnBsdWdpbnMsIGN0eC4kcHJvcHMucGx1Z2lucyksIHRvb2xiYXI6IGN0eC4kcHJvcHMudG9vbGJhciB8fCAoY3R4LiRwcm9wcy5pbml0ICYmIGN0eC4kcHJvcHMuaW5pdC50b29sYmFyKSwgaW5saW5lOiBjdHguaW5saW5lRWRpdG9yLCBzZXR1cDogZnVuY3Rpb24gKGVkaXRvcikge1xuICAgICAgICAgICAgY3R4LmVkaXRvciA9IGVkaXRvcjtcbiAgICAgICAgICAgIGVkaXRvci5vbignaW5pdCcsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBVdGlsc18xLmluaXRFZGl0b3IoZSwgY3R4LCBlZGl0b3IpOyB9KTtcbiAgICAgICAgICAgIGlmIChjdHguJHByb3BzLmluaXQgJiYgdHlwZW9mIGN0eC4kcHJvcHMuaW5pdC5zZXR1cCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGN0eC4kcHJvcHMuaW5pdC5zZXR1cChlZGl0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IH0pO1xuICAgIGlmIChVdGlsc18xLmlzVGV4dGFyZWEoY3R4LmVsZW1lbnQpKSB7XG4gICAgICAgIGN0eC5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICAgICAgY3R4LmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cbiAgICBUaW55TUNFXzEuZ2V0VGlueW1jZSgpLmluaXQoZmluYWxJbml0KTtcbn07IH07XG5leHBvcnRzLkVkaXRvciA9IHtcbiAgICBwcm9wczogRWRpdG9yUHJvcFR5cGVzXzEuZWRpdG9yUHJvcHMsXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IHRoaXMuJHByb3BzLmlkIHx8IFV0aWxzXzEudXVpZCgndGlueS12dWUnKTtcbiAgICAgICAgdGhpcy5pbmxpbmVFZGl0b3IgPSAodGhpcy4kcHJvcHMuaW5pdCAmJiB0aGlzLiRwcm9wcy5pbml0LmlubGluZSkgfHwgdGhpcy4kcHJvcHMuaW5saW5lO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBkaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5lZGl0b3Iuc2V0TW9kZSh0aGlzLmRpc2FibGVkID8gJ3JlYWRvbmx5JyA6ICdkZXNpZ24nKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLiRlbDtcbiAgICAgICAgaWYgKFRpbnlNQ0VfMS5nZXRUaW55bWNlKCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGluaXRpYWxpc2UodGhpcykoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBjaGFubmVsID0gdGhpcy4kcHJvcHMuY2xvdWRDaGFubmVsID8gdGhpcy4kcHJvcHMuY2xvdWRDaGFubmVsIDogJzUnO1xuICAgICAgICAgICAgdmFyIGFwaUtleSA9IHRoaXMuJHByb3BzLmFwaUtleSA/IHRoaXMuJHByb3BzLmFwaUtleSA6ICduby1hcGkta2V5JztcbiAgICAgICAgICAgIHZhciBzY3JpcHRTcmMgPSBVdGlsc18xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuJHByb3BzLnRpbnltY2VTY3JpcHRTcmMpID9cbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vY2RuLnRpbnkuY2xvdWQvMS9cIiArIGFwaUtleSArIFwiL3RpbnltY2UvXCIgKyBjaGFubmVsICsgXCIvdGlueW1jZS5taW4uanNcIiA6XG4gICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMudGlueW1jZVNjcmlwdFNyYztcbiAgICAgICAgICAgIFNjcmlwdExvYWRlcl8xLlNjcmlwdExvYWRlci5sb2FkKHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LCBzY3JpcHRTcmMsIGluaXRpYWxpc2UodGhpcykpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChUaW55TUNFXzEuZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBUaW55TUNFXzEuZ2V0VGlueW1jZSgpLnJlbW92ZSh0aGlzLmVkaXRvcik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRlYWN0aXZhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKCF0aGlzLmlubGluZUVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5jYWNoZSA9IHRoaXMuZWRpdG9yLmdldENvbnRlbnQoKTtcbiAgICAgICAgICAgIChfYSA9IFRpbnlNQ0VfMS5nZXRUaW55bWNlKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUodGhpcy5lZGl0b3IpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlubGluZUVkaXRvciAmJiB0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBpbml0aWFsaXNlKHRoaXMpKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5saW5lRWRpdG9yID8gcmVuZGVySW5saW5lKGgsIHRoaXMuZWxlbWVudElkLCB0aGlzLiRwcm9wcy50YWdOYW1lKSA6IHJlbmRlcklmcmFtZShoLCB0aGlzLmVsZW1lbnRJZCk7XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lZGl0b3JQcm9wcyA9IHtcbiAgICBhcGlLZXk6IFN0cmluZyxcbiAgICBjbG91ZENoYW5uZWw6IFN0cmluZyxcbiAgICBpZDogU3RyaW5nLFxuICAgIGluaXQ6IE9iamVjdCxcbiAgICBpbml0aWFsVmFsdWU6IFN0cmluZyxcbiAgICBpbmxpbmU6IEJvb2xlYW4sXG4gICAgbW9kZWxFdmVudHM6IFtTdHJpbmcsIEFycmF5XSxcbiAgICBwbHVnaW5zOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgdGFnTmFtZTogU3RyaW5nLFxuICAgIHRvb2xiYXI6IFtTdHJpbmcsIEFycmF5XSxcbiAgICB2YWx1ZTogU3RyaW5nLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHRpbnltY2VTY3JpcHRTcmM6IFN0cmluZyxcbiAgICBvdXRwdXRGb3JtYXQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBwcm9wID09PSAnaHRtbCcgfHwgcHJvcCA9PT0gJ3RleHQnOyB9XG4gICAgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFZGl0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvRWRpdG9yXCIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRWRpdG9yXzEuRWRpdG9yO1xuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBpZD1cImRyb3AtYXJlYVwiIGNsYXNzPVwiZHJvcC1hcmVhXCIgOmNsYXNzPVwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5zbUFuZERvd24gPyBbJ2Ryb3Atc20nXSA6IFtdXCI+XHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJkcm9wLWZvcm1cIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlRWxlbVwiIG11bHRpcGxlIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cIihlKSA9PiAkZW1pdCgnY2hhbmdlJywgZSlcIiBjbGFzcz1cImhpZGVcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZHJvcC1idG5cIiBmb3I9XCJmaWxlRWxlbVwiPnt7IXlldCA/ICfQl9Cw0LPRgNGD0LfQuNGC0Ywg0YTQvtGC0L4nIDogJ9CX0LDQs9GA0YPQt9C40YLRjCDQtdGJ0LUnfX08L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcm1hdC1maWxlLWRlc2NcIj7QpNC+0YDQvNCw0YIg4oCTIGpwZywgcG5nPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImZpbGUtZGVzYyBob3ZlclwiPtCe0YLQv9GD0YHRgtC40YLQtSDRhNC+0YLQvtCz0YDQsNGE0LjRjiDRgdGO0LTQsDwvcD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJEcm9wQXJlYVwiLFxyXG4gICAgICAgIGRhdGE6ICh2bSkgPT4gKHt2bX0pLFxyXG4gICAgICAgIHByb3BzOiBbJ3lldCddLFxyXG4gICAgICAgIG1vdW50ZWQodm0pIHtcclxuICAgICAgICAgICAgbGV0IGRyb3BBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3AtYXJlYScpO1xyXG4gICAgICAgICAgICBbJ2RyYWdlbnRlcicsICdkcmFnb3ZlcicsICdkcmFnbGVhdmUnLCAnZHJvcCddLmZvckVhY2goZXZlbnROYW1lID0+IHtcclxuICAgICAgICAgICAgICAgIGRyb3BBcmVhLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBwcmV2ZW50RGVmYXVsdHMsIGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcHJldmVudERlZmF1bHRzKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbJ2RyYWdlbnRlcicsICdkcmFnb3ZlciddLmZvckVhY2goZXZlbnROYW1lID0+IHtcclxuICAgICAgICAgICAgICAgIGRyb3BBcmVhLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmb2N1cywgZmFsc2UpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBbJ2RyYWdsZWF2ZScsICdkcm9wJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHVuZm9jdXMsIGZhbHNlKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZvY3VzKGUpIHtcclxuICAgICAgICAgICAgICAgIGRyb3BBcmVhLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gdW5mb2N1cyhlKSB7XHJcbiAgICAgICAgICAgICAgICBkcm9wQXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZURyb3AgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGR0ID0gZS5kYXRhVHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGxldCBmaWxlcyA9IGR0LmZpbGVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUZpbGVzKGZpbGVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRyb3BBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBoYW5kbGVEcm9wLCBmYWxzZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGhhbmRsZUZpbGVzKGZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7dGFyZ2V0OntmaWxlc319KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmRyb3AtYXJlYTpub3QoLmRyb3Atc20pIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI0FGQUZBRjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAjZHJvcC1hcmVhLmZvY3VzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3ZlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZm9jdXMgLmhpZGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9jdXMgLmhvdmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3AtYXJlYTpub3QoLmRyb3Atc20pIC5kcm9wLWZvcm0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogNTA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5kcm9wLWJ0biB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kcm9wLXNtIC5kcm9wLWJ0bntcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgI2ZpbGVFbGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWxlLWRlc2Mge1xyXG5cclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgY29sb3I6ICM0QTRBNEE7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Atc20gLmZpbGUtZGVzYyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgfVxyXG4gICAgLmZvcm1hdC1maWxlLWRlc2Mge1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNBRkFGQUY7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJzaXRlLXBob3RvLWNhcmRcIlxyXG4gICAgICAgICA6Y2xhc3M9XCJ7Zm9jdXNlZDogZm9jdXMsIGZpbGxlZH1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1waG90by1jYXJkLWNvbnRlbnRcIiBzdHlsZT1cInotaW5kZXg6IDE7XCI+XHJcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICA8di1pbWcgdi1pZj1cImxvYWRlZCAmJiBzcmNcIiA6c3JjPVwic3JjXCIgY292ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCIgQGNsaWNrPVwiJGVtaXQoJ2NsaWNrJywgJGF0dHJzWyd2YWx1ZSddKTsgb3Blbj10cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgPHYtcm93IHYtZWxzZS1pZj1cIiFsb2FkZWQgJiYgIWVycm9yXCIgeHM9XCIxMlwiIGNsYXNzPVwicGEtOFwiIHN0eWxlPVwiYWxpZ24taXRlbXM6IGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwcm9ncmVzcy1iYXIgOnByb2dyZXNzPVwicHJvZ3Jlc3NcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxyXG4gICAgICAgICAgICA8L3Nsb3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtcGhvdG8tY2FyZC1hY3Rpb25zXCIgc3R5bGU9XCJ6LWluZGV4OiAyO1wiPlxyXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPHYtcm93IHhzPVwiMTJcIiBjbGFzcz1cInBsLTUgcHItNSBwdC0yIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGZhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkZW1pdCgnZGVsZXRlJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgICAgIDwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cIm9wZW5cIiB2LWlmPVwib3BlblwiIGNvbnRlbnQtY2xhc3M9XCJzbS1waG90by1kaWFsb2dcIlxyXG4gICAgICAgICAgICAgICAgICA6ZnVsbHNjcmVlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZy1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPHYtaW1nIHYtaWY9XCJsb2FkZWQgJiYgc3JjXCIgOnNyYz1cInNyY1wiIG1heC1oZWlnaHQ9XCI5MHZoXCIgY29udGFpbi8+XHJcbiAgICAgICAgICAgICAgICA8di1idG4gaWNvbiBAY2xpY2s9XCIkZW1pdCgnZm9jdXNPdXQnKTsgb3Blbj1mYWxzZTtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbG9zZS1idG5cIiA+PHYtaWNvbj5tZGktY2xvc2U8L3YtaWNvbj48L3YtYnRuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3YtZGlhbG9nPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtiNjRUb0Jsb2IsIGNvbXByZXNzfSBmcm9tIFwiLi4vLi4vaW1hZ2VcIjtcclxuICAgIGltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIkVkaXRQaG90b0NhcmRcIixcclxuICAgICAgICBjb21wb25lbnRzOiB7UHJvZ3Jlc3NCYXJ9LFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGZvY3VzOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UsfSxcclxuICAgICAgICAgICAgcHJlbG9hZDoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUsfSxcclxuICAgICAgICAgICAgY292ZXI6IHt0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCJ9LFxyXG4gICAgICAgICAgICBmaWxsZWQ6IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZX0sXHJcbiAgICAgICAgICAgIGZpbGU6IHt0eXBlOiBGaWxlIHwgU3RyaW5nfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogKHZtKSA9PiAoe1xyXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9jdXNlZDogISF2bS4kYXR0cnNbJ2ZvY3VzJ10sXHJcbiAgICAgICAgICAgIHNyYzogJycsXHJcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXHJcbiAgICAgICAgICAgIHJvdGF0ZVRpbWVvdXQ6IG51bGwsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy51cGxvYWQodGhpcy5maWxlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgaXNDb3ZlcigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdmVyICYmIHRoaXMuc3JjLmluZGV4T2YodGhpcy5jb3ZlcikgIT09IC0xXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgcm90YXRlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm90YXRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJvdGF0ZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb21wcmVzc1VybCA9IGNvbXByZXNzKGltZywgKGN0eCwgY2FudmFzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgucm90YXRlKDkwICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgLWltZy53aWR0aCAvIDIsIC1pbWcud2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxvYiA9IGI2NFRvQmxvYihjb21wcmVzc1VybC5zcGxpdCgnLCcpWzFdLCAnaW1hZ2UvanBlZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZChibG9iLCB0aGlzLnNyYy5zcGxpdCgnLycpLnJldmVyc2UoKVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gdGhpcy5zcmM7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWFkTG9jYWxTcmMoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZSBpbnN0YW5jZW9mIEJsb2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNyYyA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLnNyYyA9IGZpbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwbG9hZChmaWxlLCBjYW52YXNGaWxlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByZWxvYWQgfHwgIShmaWxlIGluc3RhbmNlb2YgQmxvYikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRMb2NhbFNyYyhmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcclxuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XHJcbiAgICAgICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgY2FudmFzRmlsZU5hbWUgfHwgZmlsZS5uYW1lKVxyXG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAnL3Bob3RvL3VwbG9hZCcsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAoZS5sb2FkZWQgKiAxMDAuMCAvIGUudG90YWwpIHx8IDEwMDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcmMgPSBlLnRhcmdldC5yZXNwb25zZS51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGUudGFyZ2V0LnJlc3BvbnNlLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gNDAwICYmICFjYW52YXNGaWxlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/QlNC70Y8g0YTQsNC50LvQvtCyINGBINCx0LjRgtGL0Lwg0LzQsNC50LzRgtC40L/QvtC8INGA0LjRgdGD0LXQvCDQvdCwINC60LDQvdCy0LUg0Lgg0L7RgtC/0YDQsNCy0LvRj9C10Lwg0YDQtdC30YPQu9GM0YLQsNGCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb21wcmVzc1VybCA9IGNvbXByZXNzKGltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBiNjRUb0Jsb2IoY29tcHJlc3NVcmwuc3BsaXQoJywnKVsxXSwgJ2ltYWdlL2pwZWcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZChibG9iLCBmaWxlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZExvY2FsU3JjKGZpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgZmlsZShudikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBudiA9PT0gJ3N0cmluZycpIHRoaXMuc3JjID0gbnY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5zaXRlLXBob3RvLWNhcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIC8qIEdyZXkgODAwICovXHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXRlLXBob3RvLWNhcmQuZmlsbGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXRlLXBob3RvLWNhcmQuZm9jdXNlZCwgLnNpdGUtcGhvdG8tY2FyZDpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggcmdiYSgxNDAsIDE0MCwgMTQwLCAwLjQ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpdGUtcGhvdG8tY2FyZDphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTYlOyAvKiAxNi85ICovXHJcbiAgICB9XHJcblxyXG4gICAgLnNpdGUtcGhvdG8tY2FyZC1hY3Rpb25zIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXRlLXBob3RvLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0LXBob3RvLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzdHlsZT5cclxuXHJcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5waG90by1jb3ZlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMzJweDtcclxuICAgICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICAgIHotaW5kZXg6IDEwMTtcclxuICAgIH1cclxuXHJcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5jbG9zZS1idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDMycHg7XHJcbiAgICAgICAgcmlnaHQ6IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNtLXBob3RvLWRpYWxvZyAuYm90dG9tIHtcclxuICAgICAgICByaWdodDogMzJweDtcclxuICAgICAgICBib3R0b206IDMycHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLnNtLXBob3RvLWRpYWxvZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgMTA5LCAxMTYsIDAuNik7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZy1pbWFnZSAudi1pbWFnZXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcbiAgICAuZGlhbG9nLWltYWdlIHtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDx2LXJvdyBjbGFzcz1cIm1hLTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aXZlXCIgOnN0eWxlPVwie3dpZHRoOiBwcm9ncmVzcysnJSd9XCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC92LXJvdz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFsncHJvZ3Jlc3MnXSxcclxuICAgICAgICBuYW1lOiBcIlByb2dyZXNzQmFyXCJcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmZ1bGx7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNFMUUxRTE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgfVxyXG4gICAgLmFjdGl2ZXtcclxuICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMmUzZTRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDx2LWNhcmQgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gcHQtNCBwYi00XCIganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIGVsZXZhdGlvbj1cIjBcIj5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJvbmUgJiYgbG9hZGVkUGhvdG9zLmxlbmd0aFwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57e2xvYWRlZFBob3Rvc1swXS5uYW1lfX08L2Rpdj5cclxuICAgICAgICA8di1yb3cgdi1pZj1cIiFvbmVcIiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICA8di1jb2wgeHM9XCI2XCIgbWQ9XCIzXCIgc209XCI2XCIgdi1mb3I9XCIocGhvdG8sIGkpIGluIGNhcm91c2VsUGhvdG9zXCIgOmtleT1cImlcIiB2LWlmPVwiISFjYXJvdXNlbFBob3Rvc1tpXVwiPlxyXG4gICAgICAgICAgICAgICAgPGVkaXQtcGhvdG8tY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6cHJlbG9hZD1cInByZWxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmlsbGVkPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmaWxlPVwicGhvdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZGVsZXRlPVwiKCkgPT4gZGVsZXRlUGhvdG8ocGhvdG8sIGkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC92LWNvbD5cclxuICAgICAgICAgICAgPHYtY29sIHhzPVwiNlwiIG1kPVwiM1wiIHNtPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgPGVkaXQtcGhvdG8tY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIigpID0+ICRyZWZzLmJ0bi5jbGljaygpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRyb3AtYXJlYSBAY2hhbmdlPVwiYWRkUGhvdG9cIiA6eWV0PVwiY2Fyb3VzZWxQaG90b3MubGVuZ3RoXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L2VkaXQtcGhvdG8tY2FyZD5cclxuICAgICAgICAgICAgPC92LWNvbD5cclxuICAgICAgICA8L3Ytcm93PlxyXG4gICAgPC92LWNhcmQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuICAgIGltcG9ydCBFZGl0UGhvdG9DYXJkIGZyb20gXCIuL0VkaXRQaG90b0NhcmRcIjtcclxuICAgIGltcG9ydCBEcm9wQXJlYSBmcm9tIFwiLi9Ecm9wQXJlYVwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiAncGhvdG8tbG9hZGVyJyxcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICByYWRpdXM6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25lOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBob3Rvczoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiAoW10pLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmVsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtEcm9wQXJlYSwgRWRpdFBob3RvQ2FyZH0sXHJcbiAgICAgICAgZGF0YTogKHZtKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgbjogMCxcclxuICAgICAgICAgICAgICAgIHBob3RvOiAnJyxcclxuICAgICAgICAgICAgICAgIGxvYWRlZFBob3RvczogW10sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVkOiBbXSxcclxuICAgICAgICAgICAgICAgIGNhcm91c2VsUGhvdG9zOiB2bS5waG90b3MsXHJcbiAgICAgICAgICAgICAgICBmaWxlSW1nOiBudWxsLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHVwZGF0ZWQoKSB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZVBob3RvKHBob3RvLCBjcGkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwaG90by5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRQaG90b3MuZm9yRWFjaCgoZmlsZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZS5uYW1lID09PSBwaG90by5uYW1lKSBkZWxldGUgdGhpcy5sb2FkZWRQaG90b3NbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlZC5wdXNoKHRoaXMucGhvdG9zW2NwaV0uaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2Fyb3VzZWxQaG90b3NbY3BpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxQaG90b3MgPSBbLi4udGhpcy5jYXJvdXNlbFBob3Rvc107XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFBob3RvcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRlZFBob3Rvcy5jb25jYXQodGhpcy5kZWxldGVkKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0Rmlyc3QoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkZWRQaG90b3NbMF07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJldHVybkZvcm1EYXRhKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2F2ZS1waG90bycsIHZhbClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBkYXRlUGhvdG8odmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBob3RvID0gdmFsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDcm9wcGVyRGlhbG9nID0gZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xpY2tPbklucHV0KCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVzJykuZmlsZXMgPSAobmV3IERhdGFUcmFuc2ZlcigpKS5maWxlcztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmNsaWNrKClcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFkZFBob3RvKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBbLi4uZXZlbnQudGFyZ2V0LmZpbGVzXS5mb3JFYWNoKChwaG90bykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IHBob3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVJbWcuc2l6ZSA+IDUwMjQwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gJ9Cg0LDQt9C80LXRgCDRhNCw0LnQu9CwINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQsdC+0LvRjNGI0LUgNdCc0JEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRlZFBob3Rvcy5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0JLRiyDQvdC1INC80L7QttC10YLQtSDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LHQvtC70YzRiNC1IDEwINGE0L7RgtC+0LPRgNCw0YTQuNC5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcm91c2VsUGhvdG9zID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmNhcm91c2VsUGhvdG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWxvYWQgPyBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZUltZykgOiB0aGlzLmZpbGVJbWdcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkUGhvdG9zLnB1c2godGhpcy5maWxlSW1nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubiA9IHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbWcgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgIHBob3Rvcyhudikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJvdXNlbFBob3RvcyA9IG52Lm1hcCgoZmlsZSkgPT4gZmlsZS5maWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLnBob3RvLWlucHV0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8di1jb250YWluZXJcclxuICAgICAgICAgICAgY2xhc3M9XCJjb3ZlclwiPlxyXG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3M9XCJtYi0yXCJcclxuICAgICAgICB2LXRleHQ9XCIkcm91dGUucGFyYW1zLmlkICA9PSAwID8gJ9CU0L7QsdCw0LLQu9C10L3QuNC1INC+0LHRgNCw0YnQtdC90LjRjycgOiAgJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L7QsdGA0LDRidC10L3QuNGPJ1wiPlxyXG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxyXG4gICAgICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cItCX0LDQs9C+0LvQvtCy0L7QulwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJwb3N0LnRpdGxlXCJcclxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMudGl0bGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgPC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgPHYtdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCe0L/QuNGB0LDQvdC40LVcIlxyXG4gICAgICAgICAgICAgICAgaGludD1cIkhpbnQgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCInICdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGlvbiBcIlxyXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMuZGVzY3JpcHRpb25cIlxyXG4gICAgICAgID48L3YtdGV4dGFyZWE+XHJcbiAgICAgICAgPGVkaXRvclxyXG4gICAgICAgICAgICAgICAgYXBpLWtleT1cImthcHIwa2gwdjN2c2Nua3Bwc3hnaWc5OHZmNm1naXRhaWk4YXV3M3AycGluMWM1dFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm10LTJcIlxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInBvc3QuZGVzY3JpcHRpb25cIlxyXG4gICAgICAgID5cclxuICAgICAgICA8L2VkaXRvcj5cclxuICAgICAgICA8di1zcGFjZXIvPlxyXG4gICAgICAgIDxwaG90by1sb2FkZXIgcmVmPVwibG9hZGVyXCIgIDpwaG90b3M9XCJwb3N0LnBob3Rvc1wiLz5cclxuICAgICAgICA8di1idG4gY2xhc3M9XCJzYXZlLWJ0bi10ZXh0XCJcclxuICAgICAgICAgICAgICAgQGNsaWNrPVwiKCkgPT4gcG9zdC5pZD4wID8gdXBkYXRlKCkgOiBjcmVhdGUoKVwiXHJcbiAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiEocG9zdC5pZD4gMCkgJiYgKCFwb3N0LmRlc2NyaXB0aW9uIHx8ICFwb3N0LnRpdGxlKVwiPlxyXG4gICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcclxuICAgICAgICA8L3YtYnRuPlxyXG4gICAgPC92LWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgRWRpdG9yIGZyb20gJ0B0aW55bWNlL3RpbnltY2UtdnVlJztcclxuICAgIGltcG9ydCBQaG90b0xvYWRlciBmcm9tICdAL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiVXNlclBvc3RFZGl0XCIsXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBFZGl0b3IsXHJcbiAgICAgICAgICAgIFBob3RvTG9hZGVyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiAodm0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBvc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdm0uJHJvdXRlLnBhcmFtcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICBsZXQgbW9kZWxJZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcclxuICAgICAgICAgICAgaWYgKG1vZGVsSWQgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL3VzZXIvcG9zdC8nKyBtb2RlbElkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdCA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gZT8ucmVzcG9uc2U/LmVycm9yIHx8ICfQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL3VzZXIvcG9zdCcsIHRoaXMucG9zdClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QuaWQgPSByLmRhdGEuZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnJlc3BvbnNlICYmIGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2tdID0gZXJyb3JzW2tdPy5bMF0gfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucHV0KCcvdXNlci9wb3N0LycrIHRoaXMucG9zdC5pZCwgdGhpcy5wb3N0KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdQaG90b3MgPSB0aGlzLiRyZWZzLmxvYWRlci5nZXRQaG90b3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Bob3Rvcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQaG90b3MuZm9yRWFjaCgocGhvdG8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGhvdG8ubmFtZSkgZm9ybURhdGEuYXBwZW5kKCdwb3N0X3Bob3Rvc1snK2krJ10nLCBwaG90bywgcGhvdG8ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBmb3JtRGF0YS5hcHBlbmQoJ2RlbGV0ZV9waG90b3NbJytpKyddJywgcGhvdG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnX21ldGhvZCcsICdQVVQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy91c2VyL3Bvc3QvJyt0aGlzLnBvc3QuaWQsIGZvcm1EYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6IFwidXBvc3RzXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAgYNCe0YjQuNCx0LrQsCDRgdC+0YXRgNCw0L3QtdC90LjRjyDRhNC+0YLQvtCz0YDQsNGE0LjQuGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiBcInVwb3N0c1wifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnJlc3BvbnNlICYmIGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWVzc2FnZXMpLmZvckVhY2goKGspPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1trXSA9IGVycm9yc1trXT8uWzBdIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5kZXNjcmlwdGlvbiAudi10ZXh0LWZpZWxkX19zbG90IHRleHRhcmVhIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZGVzY3JpcHRpb24udi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmFmdGVyICxcclxuICAgIC5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YmVmb3Jle1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuPC9zdHlsZT4iLCJcclxuZXhwb3J0IGNvbnN0IGNvbXByZXNzID0gKGltZywgbW9kaWZ5Q29udGV4dCkgPT4ge1xyXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcbiAgICBsZXQgd2lkdGggPSBpbWcud2lkdGhcclxuICAgIGxldCBoZWlnaHQgPSBpbWcuaGVpZ2h0XHJcbiAgICAvLyBsb2coaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxyXG4gICAgLy8gbG9nKHdpZHRoLCBoZWlnaHQpXHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aFxyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodFxyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2ZmZidcclxuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxyXG4gICAgaWYgKG1vZGlmeUNvbnRleHQpIG1vZGlmeUNvbnRleHQoY29udGV4dCwgY2FudmFzKTtcclxuICAgIGVsc2UgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXHJcbiAgICBsZXQgYmFzZTY0RGF0YSA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnLCAwLjQpXHJcbiAgICBjYW52YXMgPSBjb250ZXh0ID0gbnVsbFxyXG4gICAgLy8gbG9nKGJhc2U2NERhdGEubGVuZ3RoKVxyXG4gICAgaW1nID0gbnVsbFxyXG4gICAgcmV0dXJuIGJhc2U2NERhdGFcclxufVxyXG5cclxuLy8gYmFzZTY0IGlzIGNvbnZlcnRlZCB0byBiaW5hcnkgZmlsZVxyXG5leHBvcnQgY29uc3QgYjY0VG9CbG9iID0gKGI2NERhdGEsIGNvbnRlbnRUeXBlKSA9PiB7XHJcbiAgICBjb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlIHx8ICcnXHJcblxyXG4gICAgbGV0IGJ5dGVDaGFyYWN0ZXJzID0gYXRvYihiNjREYXRhKSAvLyBEZWNvZGUgYmFzZTY0IGRhdGEgYXMgYSBiaW5hcnkgc3RyaW5nXHJcbiAgICBsZXQgYnVmZmVyID0gW10gLy8gTm90ZSB0aGF0IHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgYmxvYiBtdXN0IGJlIGFuIGFycmF5XHJcblxyXG4gICAgLy8gdHlwZSBhcnJheSBpcyB1c2VkIHRvIHByb2Nlc3MgYmluYXJ5IGZpbGVzXHJcbiAgICBsZXQgYUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlQ2hhcmFjdGVycy5sZW5ndGgpXHJcbiAgICBsZXQgdUJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGFCdWZmZXIpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVDaGFyYWN0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdUJ1ZmZlcltpXSA9IGJ5dGVDaGFyYWN0ZXJzLmNoYXJDb2RlQXQoaSkgLy8gZ2V0IFVuaWNvZGUgZW5jb2RpbmcsIHN0b3JlIGluIHR5cGUgYXJyYXlcclxuICAgIH1cclxuICAgIGJ1ZmZlci5wdXNoKHVCdWZmZXIpXHJcbiAgICAvLyBPcmRpbmFyeSBhcnJheSBpcyB1bmFibGUgdG8gZ2VuZXJhdGUgYmluYXJ5IGZpbGVzXHJcbiAgICByZXR1cm4gbmV3IEJsb2IoYnVmZmVyLCB7IC8vIGdlbmVyYXRlIGEgYmluYXJ5IGZpbGVcclxuICAgICAgICB0eXBlOiBjb250ZW50VHlwZVxyXG4gICAgfSlcclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kcm9wLWFyZWFbZGF0YS12LTU4ODFlOGYyXTpub3QoLmRyb3Atc20pIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjQUZBRkFGO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbiNkcm9wLWFyZWEuZm9jdXNbZGF0YS12LTU4ODFlOGYyXSB7XFxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxufVxcbi5ob3ZlcltkYXRhLXYtNTg4MWU4ZjJdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmZvY3VzIC5oaWRlW2RhdGEtdi01ODgxZThmMl0ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5mb2N1cyAuaG92ZXJbZGF0YS12LTU4ODFlOGYyXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcbnBbZGF0YS12LTU4ODFlOGYyXSB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5kcm9wLWFyZWE6bm90KC5kcm9wLXNtKSAuZHJvcC1mb3JtW2RhdGEtdi01ODgxZThmMl0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiA1MDtcXG59XFxuLmRyb3AtYnRuW2RhdGEtdi01ODgxZThmMl0ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZHJvcC1zbSAuZHJvcC1idG5bZGF0YS12LTU4ODFlOGYyXXtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbn1cXG4jZmlsZUVsZW1bZGF0YS12LTU4ODFlOGYyXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5maWxlLWRlc2NbZGF0YS12LTU4ODFlOGYyXSB7XFxuXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjJweDtcXG4gICAgY29sb3I6ICM0QTRBNEE7XFxufVxcbi5kcm9wLXNtIC5maWxlLWRlc2NbZGF0YS12LTU4ODFlOGYyXSB7XFxuICAgIGRpc3BsYXk6IG5vbmVcXG59XFxuLmZvcm1hdC1maWxlLWRlc2NbZGF0YS12LTU4ODFlOGYyXSB7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTlweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0FGQUZBRjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRHJvcEFyZWEudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEyREE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDBCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtBQUNBO0FBRUE7SUFDQSxtQkFBQTtBQUNBO0FBRUE7SUFDQSxhQUFBO0FBQ0E7QUFFQTtJQUNBLHdCQUFBO0FBQ0E7QUFFQTtJQUNBLHlCQUFBO0FBQ0E7QUFFQTtJQUNBLGFBQUE7QUFDQTtBQUVBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0FBQ0E7QUFHQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7QUFDQTtBQUNBO0lBQ0EsZUFBQTtBQUNBO0FBRUE7SUFDQSxhQUFBO0FBQ0E7QUFFQTs7SUFFQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtBQUNBO0FBRUE7SUFDQTtBQUNBO0FBQ0E7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGlkPVxcXCJkcm9wLWFyZWFcXFwiIGNsYXNzPVxcXCJkcm9wLWFyZWFcXFwiIDpjbGFzcz1cXFwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5zbUFuZERvd24gPyBbJ2Ryb3Atc20nXSA6IFtdXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJkcm9wLWZvcm1cXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBpZD1cXFwiZmlsZUVsZW1cXFwiIG11bHRpcGxlIGFjY2VwdD1cXFwiaW1hZ2UvKlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cXFwiKGUpID0+ICRlbWl0KCdjaGFuZ2UnLCBlKVxcXCIgY2xhc3M9XFxcImhpZGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZHJvcC1idG5cXFwiIGZvcj1cXFwiZmlsZUVsZW1cXFwiPnt7IXlldCA/ICfQl9Cw0LPRgNGD0LfQuNGC0Ywg0YTQvtGC0L4nIDogJ9CX0LDQs9GA0YPQt9C40YLRjCDQtdGJ0LUnfX08L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJmb3JtYXQtZmlsZS1kZXNjXFxcIj7QpNC+0YDQvNCw0YIg4oCTIGpwZywgcG5nPC9wPlxcclxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJmaWxlLWRlc2MgaG92ZXJcXFwiPtCe0YLQv9GD0YHRgtC40YLQtSDRhNC+0YLQvtCz0YDQsNGE0LjRjiDRgdGO0LTQsDwvcD5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBuYW1lOiBcXFwiRHJvcEFyZWFcXFwiLFxcclxcbiAgICAgICAgZGF0YTogKHZtKSA9PiAoe3ZtfSksXFxyXFxuICAgICAgICBwcm9wczogWyd5ZXQnXSxcXHJcXG4gICAgICAgIG1vdW50ZWQodm0pIHtcXHJcXG4gICAgICAgICAgICBsZXQgZHJvcEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcC1hcmVhJyk7XFxyXFxuICAgICAgICAgICAgWydkcmFnZW50ZXInLCAnZHJhZ292ZXInLCAnZHJhZ2xlYXZlJywgJ2Ryb3AnXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgIGRyb3BBcmVhLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBwcmV2ZW50RGVmYXVsdHMsIGZhbHNlKVxcclxcbiAgICAgICAgICAgIH0pXFxyXFxuXFxyXFxuICAgICAgICAgICAgZnVuY3Rpb24gcHJldmVudERlZmF1bHRzKGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXFxyXFxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgWydkcmFnZW50ZXInLCAnZHJhZ292ZXInXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgIGRyb3BBcmVhLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmb2N1cywgZmFsc2UpXFxyXFxuICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgWydkcmFnbGVhdmUnLCAnZHJvcCddLmZvckVhY2goZXZlbnROYW1lID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHVuZm9jdXMsIGZhbHNlKVxcclxcbiAgICAgICAgICAgIH0pO1xcclxcblxcclxcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZvY3VzKGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgZHJvcEFyZWEuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBmdW5jdGlvbiB1bmZvY3VzKGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgZHJvcEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVEcm9wID0gKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgbGV0IGR0ID0gZS5kYXRhVHJhbnNmZXJcXHJcXG4gICAgICAgICAgICAgICAgbGV0IGZpbGVzID0gZHQuZmlsZXNcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVGaWxlcyhmaWxlcylcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZURyb3AsIGZhbHNlKTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgaGFuZGxlRmlsZXMoZmlsZXMpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywge3RhcmdldDp7ZmlsZXN9fSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gICAgLmRyb3AtYXJlYTpub3QoLmRyb3Atc20pIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICNBRkFGQUY7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNkcm9wLWFyZWEuZm9jdXMge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI0Y4RjhGODtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaG92ZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9jdXMgLmhpZGUge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb2N1cyAuaG92ZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBwIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRyb3AtYXJlYTpub3QoLmRyb3Atc20pIC5kcm9wLWZvcm0ge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDUwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5kcm9wLWJ0biB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5kcm9wLXNtIC5kcm9wLWJ0bntcXHJcXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjZmlsZUVsZW0ge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmlsZS1kZXNjIHtcXHJcXG5cXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjNEE0QTRBO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kcm9wLXNtIC5maWxlLWRlc2Mge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZVxcclxcbiAgICB9XFxyXFxuICAgIC5mb3JtYXQtZmlsZS1kZXNjIHtcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGNvbG9yOiAjQUZBRkFGO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2l0ZS1waG90by1jYXJkW2RhdGEtdi00YWJlNDExZF0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgICAvKiBHcmV5IDgwMCAqL1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zaXRlLXBob3RvLWNhcmQuZmlsbGVkW2RhdGEtdi00YWJlNDExZF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xcbn1cXG4uc2l0ZS1waG90by1jYXJkLmZvY3VzZWRbZGF0YS12LTRhYmU0MTFkXSwgLnNpdGUtcGhvdG8tY2FyZFtkYXRhLXYtNGFiZTQxMWRdOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggcmdiYSgxNDAsIDE0MCwgMTQwLCAwLjQ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4uc2l0ZS1waG90by1jYXJkW2RhdGEtdi00YWJlNDExZF06YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1NiU7IC8qIDE2LzkgKi9cXG59XFxuLnNpdGUtcGhvdG8tY2FyZC1hY3Rpb25zW2RhdGEtdi00YWJlNDExZF0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaXRlLXBob3RvLWNhcmQtY29udGVudFtkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZWRpdC1waG90by1pY29uW2RhdGEtdi00YWJlNDExZF0ge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBb0pBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBOztJQUVBLGtCQUFBO0lBQ0EsZ0JBQUE7QUFDQTtBQUVBO0lBQ0EseUJBQUE7QUFDQTtBQUVBO0lBQ0EsaURBQUE7SUFDQSxrQkFBQTtBQUNBO0FBRUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBLEVBQUEsU0FBQTtBQUNBO0FBRUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxlQUFBO0FBQ0E7QUFFQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7QUFDQTtBQUVBO0lBQ0EsZ0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInNpdGUtcGhvdG8tY2FyZFxcXCJcXHJcXG4gICAgICAgICA6Y2xhc3M9XFxcIntmb2N1c2VkOiBmb2N1cywgZmlsbGVkfVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaXRlLXBob3RvLWNhcmQtY29udGVudFxcXCIgc3R5bGU9XFxcInotaW5kZXg6IDE7XFxcIj5cXHJcXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJkZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtaW1nIHYtaWY9XFxcImxvYWRlZCAmJiBzcmNcXFwiIDpzcmM9XFxcInNyY1xcXCIgY292ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cXFwiMTAwJVxcXCIgQGNsaWNrPVxcXCIkZW1pdCgnY2xpY2snLCAkYXR0cnNbJ3ZhbHVlJ10pOyBvcGVuPXRydWVcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtcm93IHYtZWxzZS1pZj1cXFwiIWxvYWRlZCAmJiAhZXJyb3JcXFwiIHhzPVxcXCIxMlxcXCIgY2xhc3M9XFxcInBhLThcXFwiIHN0eWxlPVxcXCJhbGlnbi1pdGVtczogY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwcm9ncmVzcy1iYXIgOnByb2dyZXNzPVxcXCJwcm9ncmVzc1xcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgICAgIDwvc2xvdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1waG90by1jYXJkLWFjdGlvbnNcXFwiIHN0eWxlPVxcXCJ6LWluZGV4OiAyO1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiYWN0aW9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx2LXJvdyB4cz1cXFwiMTJcXFwiIGNsYXNzPVxcXCJwbC01IHByLTUgcHQtMiBqdXN0aWZ5LWVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8di1idG4gZmFiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIiRlbWl0KCdkZWxldGUnKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibXItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgICAgIDwvc2xvdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XFxcIm9wZW5cXFwiIHYtaWY9XFxcIm9wZW5cXFwiIGNvbnRlbnQtY2xhc3M9XFxcInNtLXBob3RvLWRpYWxvZ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6ZnVsbHNjcmVlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGlhbG9nLWltYWdlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtaW1nIHYtaWY9XFxcImxvYWRlZCAmJiBzcmNcXFwiIDpzcmM9XFxcInNyY1xcXCIgbWF4LWhlaWdodD1cXFwiOTB2aFxcXCIgY29udGFpbi8+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIEBjbGljaz1cXFwiJGVtaXQoJ2ZvY3VzT3V0Jyk7IG9wZW49ZmFsc2U7XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcImdyYXlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY2xvc2UtYnRuXFxcIiA+PHYtaWNvbj5tZGktY2xvc2U8L3YtaWNvbj48L3YtYnRuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC92LWRpYWxvZz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBpbXBvcnQge2I2NFRvQmxvYiwgY29tcHJlc3N9IGZyb20gXFxcIi4uLy4uL2ltYWdlXFxcIjtcXHJcXG4gICAgaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXFxcIi4vUHJvZ3Jlc3NCYXJcXFwiO1xcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBuYW1lOiBcXFwiRWRpdFBob3RvQ2FyZFxcXCIsXFxyXFxuICAgICAgICBjb21wb25lbnRzOiB7UHJvZ3Jlc3NCYXJ9LFxcclxcbiAgICAgICAgcHJvcHM6IHtcXHJcXG4gICAgICAgICAgICBmb2N1czoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlLH0sXFxyXFxuICAgICAgICAgICAgcHJlbG9hZDoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUsfSxcXHJcXG4gICAgICAgICAgICBjb3Zlcjoge3R5cGU6IFN0cmluZywgZGVmYXVsdDogXFxcIlxcXCJ9LFxcclxcbiAgICAgICAgICAgIGZpbGxlZDoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlfSxcXHJcXG4gICAgICAgICAgICBmaWxlOiB7dHlwZTogRmlsZSB8IFN0cmluZ31cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XFxyXFxuICAgICAgICAgICAgb3BlbjogZmFsc2UsXFxyXFxuICAgICAgICAgICAgZm9jdXNlZDogISF2bS4kYXR0cnNbJ2ZvY3VzJ10sXFxyXFxuICAgICAgICAgICAgc3JjOiAnJyxcXHJcXG4gICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICBwcm9ncmVzczogMCxcXHJcXG4gICAgICAgICAgICByb3RhdGVUaW1lb3V0OiBudWxsLFxcclxcbiAgICAgICAgfSksXFxyXFxuICAgICAgICBtb3VudGVkKCkge1xcclxcbiAgICAgICAgICAgIHRoaXMudXBsb2FkKHRoaXMuZmlsZSlcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjb21wdXRlZDoge1xcclxcbiAgICAgICAgICAgIGlzQ292ZXIoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdmVyICYmIHRoaXMuc3JjLmluZGV4T2YodGhpcy5jb3ZlcikgIT09IC0xXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICAgICAgICByb3RhdGUoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvdGF0ZVRpbWVvdXQpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJvdGF0ZVRpbWVvdXQpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVUaW1lb3V0ID0gbnVsbDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGltZy5jcm9zc09yaWdpbiA9IFxcXCJhbm9ueW1vdXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb21wcmVzc1VybCA9IGNvbXByZXNzKGltZywgKGN0eCwgY2FudmFzKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgucm90YXRlKDkwICogTWF0aC5QSSAvIDE4MCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAtaW1nLndpZHRoIC8gMiwgLWltZy53aWR0aCAvIDIpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBibG9iID0gYjY0VG9CbG9iKGNvbXByZXNzVXJsLnNwbGl0KCcsJylbMV0sICdpbWFnZS9qcGVnJyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWQoYmxvYiwgdGhpcy5zcmMuc3BsaXQoJy8nKS5yZXZlcnNlKClbMF0pO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSB0aGlzLnNyYztcXHJcXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHJlYWRMb2NhbFNyYyhmaWxlKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGUgaW5zdGFuY2VvZiBCbG9iKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNyYyA9IHJlYWRlci5yZXN1bHQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5zcmMpXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLnNyYyA9IGZpbGU7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHVwbG9hZChmaWxlLCBjYW52YXNGaWxlTmFtZSkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJlbG9hZCB8fCAhKGZpbGUgaW5zdGFuY2VvZiBCbG9iKSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkTG9jYWxTcmMoZmlsZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXFxyXFxuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XFxyXFxuICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXFxyXFxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGNhbnZhc0ZpbGVOYW1lIHx8IGZpbGUubmFtZSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAnL3Bob3RvL3VwbG9hZCcsIHRydWUpXFxyXFxuICAgICAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcXFwicHJvZ3Jlc3NcXFwiLCAoZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IChlLmxvYWRlZCAqIDEwMC4wIC8gZS50b3RhbCkgfHwgMTAwO1xcclxcbiAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIChlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gZS50YXJnZXQucmVzcG9uc2UudXJsO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGUudGFyZ2V0LnJlc3BvbnNlLnVybCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgIT0gMjAwKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gNDAwICYmICFjYW52YXNGaWxlTmFtZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL9CU0LvRjyDRhNCw0LnQu9C+0LIg0YEg0LHQuNGC0YvQvCDQvNCw0LnQvNGC0LjQv9C+0Lwg0YDQuNGB0YPQtdC8INC90LAg0LrQsNC90LLQtSDQuCDQvtGC0L/RgNCw0LLQu9GP0LXQvCDRgNC10LfRg9C70YzRgtCw0YJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXByZXNzVXJsID0gY29tcHJlc3MoaW1nKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBibG9iID0gYjY0VG9CbG9iKGNvbXByZXNzVXJsLnNwbGl0KCcsJylbMV0sICdpbWFnZS9qcGVnJyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZChibG9iLCBmaWxlLm5hbWUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRMb2NhbFNyYyhmaWxlKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmxvYWRlZCA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB3YXRjaDoge1xcclxcbiAgICAgICAgICAgIGZpbGUobnYpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBudiA9PT0gJ3N0cmluZycpIHRoaXMuc3JjID0gbnY7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuICAgICAgICAvKiBHcmV5IDgwMCAqL1xcclxcblxcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkLmZpbGxlZCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQuZm9jdXNlZCwgLnNpdGUtcGhvdG8tY2FyZDpob3ZlciB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDlweCByZ2JhKDE0MCwgMTQwLCAxNDAsIDAuNDkpO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQ6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1NiU7IC8qIDE2LzkgKi9cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkLWFjdGlvbnMge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZC1jb250ZW50IHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZWRpdC1waG90by1pY29uIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcbjxzdHlsZT5cXHJcXG5cXHJcXG4gICAgLnNtLXBob3RvLWRpYWxvZyAucGhvdG8tY292ZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAzMnB4O1xcclxcbiAgICAgICAgbGVmdDogMzJweDtcXHJcXG4gICAgICAgIHotaW5kZXg6IDEwMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5jbG9zZS1idG4ge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAzMnB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDMycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNtLXBob3RvLWRpYWxvZyAuYm90dG9tIHtcXHJcXG4gICAgICAgIHJpZ2h0OiAzMnB4O1xcclxcbiAgICAgICAgYm90dG9tOiAzMnB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNtLXBob3RvLWRpYWxvZyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMDUsIDEwOSwgMTE2LCAwLjYpO1xcclxcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kaWFsb2ctaW1hZ2UgLnYtaW1hZ2V7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRpYWxvZy1pbWFnZSB7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zbS1waG90by1kaWFsb2cgLnBob3RvLWNvdmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMycHg7XFxuICAgIGxlZnQ6IDMycHg7XFxuICAgIHotaW5kZXg6IDEwMTtcXG59XFxuLnNtLXBob3RvLWRpYWxvZyAuY2xvc2UtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMycHg7XFxuICAgIHJpZ2h0OiAzMnB4O1xcbn1cXG4uc20tcGhvdG8tZGlhbG9nIC5ib3R0b20ge1xcbiAgICByaWdodDogMzJweDtcXG4gICAgYm90dG9tOiAzMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4uc20tcGhvdG8tZGlhbG9nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDUsIDEwOSwgMTE2LCAwLjYpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZGlhbG9nLWltYWdlIC52LWltYWdle1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5kaWFsb2ctaW1hZ2Uge1xcbiAgICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcXG4gICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0VkaXRQaG90b0NhcmQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFtTUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtBQUNBO0FBRUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0FBQ0E7QUFFQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSwwQkFBQTtJQUFBLHVCQUFBO0lBQUEsa0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7QUFDQTtBQUVBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0NBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtBQUNBO0FBRUE7SUFDQSxrQkFBQTtBQUNBO0FBQ0E7SUFDQSwwQkFBQTtJQUFBLHVCQUFBO0lBQUEsa0JBQUE7SUFDQSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1waG90by1jYXJkXFxcIlxcclxcbiAgICAgICAgIDpjbGFzcz1cXFwie2ZvY3VzZWQ6IGZvY3VzLCBmaWxsZWR9XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNpdGUtcGhvdG8tY2FyZC1jb250ZW50XFxcIiBzdHlsZT1cXFwiei1pbmRleDogMTtcXFwiPlxcclxcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8di1pbWcgdi1pZj1cXFwibG9hZGVkICYmIHNyY1xcXCIgOnNyYz1cXFwic3JjXFxcIiBjb3ZlclxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVxcXCIxMDAlXFxcIiBAY2xpY2s9XFxcIiRlbWl0KCdjbGljaycsICRhdHRyc1sndmFsdWUnXSk7IG9wZW49dHJ1ZVxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8di1yb3cgdi1lbHNlLWlmPVxcXCIhbG9hZGVkICYmICFlcnJvclxcXCIgeHM9XFxcIjEyXFxcIiBjbGFzcz1cXFwicGEtOFxcXCIgc3R5bGU9XFxcImFsaWduLWl0ZW1zOiBjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHByb2dyZXNzLWJhciA6cHJvZ3Jlc3M9XFxcInByb2dyZXNzXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgIDwvdi1yb3c+XFxyXFxuICAgICAgICAgICAgPC9zbG90PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaXRlLXBob3RvLWNhcmQtYWN0aW9uc1xcXCIgc3R5bGU9XFxcInotaW5kZXg6IDI7XFxcIj5cXHJcXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJhY3Rpb25zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtcm93IHhzPVxcXCIxMlxcXCIgY2xhc3M9XFxcInBsLTUgcHItNSBwdC0yIGp1c3RpZnktZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBmYWJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ2RlbGV0ZScpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtci0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1kZWxldGU8L3YtaWNvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICAgICAgICAgIDwvdi1yb3c+XFxyXFxuICAgICAgICAgICAgPC9zbG90PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwib3BlblxcXCIgdi1pZj1cXFwib3BlblxcXCIgY29udGVudC1jbGFzcz1cXFwic20tcGhvdG8tZGlhbG9nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaWFsb2ctaW1hZ2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8di1pbWcgdi1pZj1cXFwibG9hZGVkICYmIHNyY1xcXCIgOnNyYz1cXFwic3JjXFxcIiBtYXgtaGVpZ2h0PVxcXCI5MHZoXFxcIiBjb250YWluLz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIGljb24gQGNsaWNrPVxcXCIkZW1pdCgnZm9jdXNPdXQnKTsgb3Blbj1mYWxzZTtcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiZ3JheVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjbG9zZS1idG5cXFwiID48di1pY29uPm1kaS1jbG9zZTwvdi1pY29uPjwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L3YtZGlhbG9nPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCB7YjY0VG9CbG9iLCBjb21wcmVzc30gZnJvbSBcXFwiLi4vLi4vaW1hZ2VcXFwiO1xcclxcbiAgICBpbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcXFwiLi9Qcm9ncmVzc0JhclxcXCI7XFxyXFxuXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG5hbWU6IFxcXCJFZGl0UGhvdG9DYXJkXFxcIixcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHtQcm9ncmVzc0Jhcn0sXFxyXFxuICAgICAgICBwcm9wczoge1xcclxcbiAgICAgICAgICAgIGZvY3VzOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UsfSxcXHJcXG4gICAgICAgICAgICBwcmVsb2FkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSx9LFxcclxcbiAgICAgICAgICAgIGNvdmVyOiB7dHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcXFwiXFxcIn0sXFxyXFxuICAgICAgICAgICAgZmlsbGVkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2V9LFxcclxcbiAgICAgICAgICAgIGZpbGU6IHt0eXBlOiBGaWxlIHwgU3RyaW5nfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGRhdGE6ICh2bSkgPT4gKHtcXHJcXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICBmb2N1c2VkOiAhIXZtLiRhdHRyc1snZm9jdXMnXSxcXHJcXG4gICAgICAgICAgICBzcmM6ICcnLFxcclxcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXFxyXFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIHByb2dyZXNzOiAwLFxcclxcbiAgICAgICAgICAgIHJvdGF0ZVRpbWVvdXQ6IG51bGwsXFxyXFxuICAgICAgICB9KSxcXHJcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy51cGxvYWQodGhpcy5maWxlKVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgICAgICAgaXNDb3ZlcigpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY292ZXIgJiYgdGhpcy5zcmMuaW5kZXhPZih0aGlzLmNvdmVyKSAhPT0gLTFcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIHJvdGF0ZSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm90YXRlVGltZW91dCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucm90YXRlVGltZW91dCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVRpbWVvdXQgPSBudWxsO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gXFxcImFub255bW91c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXByZXNzVXJsID0gY29tcHJlc3MoaW1nLCAoY3R4LCBjYW52YXMpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoOTAgKiBNYXRoLlBJIC8gMTgwKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIC1pbWcud2lkdGggLyAyLCAtaW1nLndpZHRoIC8gMik7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBiNjRUb0Jsb2IoY29tcHJlc3NVcmwuc3BsaXQoJywnKVsxXSwgJ2ltYWdlL2pwZWcnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZChibG9iLCB0aGlzLnNyYy5zcGxpdCgnLycpLnJldmVyc2UoKVswXSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9O1xcclxcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMuc3JjO1xcclxcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgcmVhZExvY2FsU3JjKGZpbGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZSBpbnN0YW5jZW9mIEJsb2IpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gcmVhZGVyLnJlc3VsdDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLnNyYylcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuc3JjID0gZmlsZTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgdXBsb2FkKGZpbGUsIGNhbnZhc0ZpbGVOYW1lKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcmVsb2FkIHx8ICEoZmlsZSBpbnN0YW5jZW9mIEJsb2IpKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRMb2NhbFNyYyhmaWxlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcXHJcXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcXHJcXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgY2FudmFzRmlsZU5hbWUgfHwgZmlsZS5uYW1lKVxcclxcbiAgICAgICAgICAgICAgICB4aHIub3BlbignUE9TVCcsICcvcGhvdG8vdXBsb2FkJywgdHJ1ZSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFxcXCJwcm9ncmVzc1xcXCIsIChlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gKGUubG9hZGVkICogMTAwLjAgLyBlLnRvdGFsKSB8fCAxMDA7XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcmMgPSBlLnRhcmdldC5yZXNwb25zZS51cmw7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZS50YXJnZXQucmVzcG9uc2UudXJsKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyAhPSAyMDApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSA0MDAgJiYgIWNhbnZhc0ZpbGVOYW1lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v0JTQu9GPINGE0LDQudC70L7QsiDRgSDQsdC40YLRi9C8INC80LDQudC80YLQuNC/0L7QvCDRgNC40YHRg9C10Lwg0L3QsCDQutCw0L3QstC1INC4INC+0YLQv9GA0LDQstC70Y/QtdC8INGA0LXQt9GD0LvRjNGC0LDRglxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29tcHJlc3NVcmwgPSBjb21wcmVzcyhpbWcpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBiNjRUb0Jsb2IoY29tcHJlc3NVcmwuc3BsaXQoJywnKVsxXSwgJ2ltYWdlL2pwZWcnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkKGJsb2IsIGZpbGUubmFtZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZExvY2FsU3JjKGZpbGUpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMubG9hZGVkID0gdHJ1ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHdhdGNoOiB7XFxyXFxuICAgICAgICAgICAgZmlsZShudikge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG52ID09PSAnc3RyaW5nJykgdGhpcy5zcmMgPSBudjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4gICAgICAgIC8qIEdyZXkgODAwICovXFxyXFxuXFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQuZmlsbGVkIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZC5mb2N1c2VkLCAuc2l0ZS1waG90by1jYXJkOmhvdmVyIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IHJnYmEoMTQwLCAxNDAsIDE0MCwgMC40OSk7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZDphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDU2JTsgLyogMTYvOSAqL1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQtYWN0aW9ucyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkLWNvbnRlbnQge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5lZGl0LXBob3RvLWljb24ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPHN0eWxlPlxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5waG90by1jb3ZlciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDMycHg7XFxyXFxuICAgICAgICBsZWZ0OiAzMnB4O1xcclxcbiAgICAgICAgei1pbmRleDogMTAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbS1waG90by1kaWFsb2cgLmNsb3NlLWJ0biB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDMycHg7XFxyXFxuICAgICAgICByaWdodDogMzJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5ib3R0b20ge1xcclxcbiAgICAgICAgcmlnaHQ6IDMycHg7XFxyXFxuICAgICAgICBib3R0b206IDMycHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgMTA5LCAxMTYsIDAuNik7XFxyXFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRpYWxvZy1pbWFnZSAudi1pbWFnZXtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZGlhbG9nLWltYWdlIHtcXHJcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZ1bGxbZGF0YS12LWQ0YTZhMmVhXXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIGJhY2tncm91bmQ6ICNFMUUxRTE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLmFjdGl2ZVtkYXRhLXYtZDRhNmEyZWFde1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYmFja2dyb3VuZDogIzJlM2U0ZSAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ0JBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7QUFDQTtBQUNBO0lBQ0EsV0FBQTtJQUNBLDhCQUFBO0lBQ0Esa0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx2LXJvdyBjbGFzcz1cXFwibWEtMFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmdWxsXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY3RpdmVcXFwiIDpzdHlsZT1cXFwie3dpZHRoOiBwcm9ncmVzcysnJSd9XFxcIi8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC92LXJvdz5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIHByb3BzOiBbJ3Byb2dyZXNzJ10sXFxyXFxuICAgICAgICBuYW1lOiBcXFwiUHJvZ3Jlc3NCYXJcXFwiXFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgICAuZnVsbHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTFFMUUxO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hY3RpdmV7XFxyXFxuICAgICAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICMyZTNlNGUgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBob3RvLWlucHV0W2RhdGEtdi02NDZmZDhkOV0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMkhBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHYtY2FyZCBjbGFzcz1cXFwiZC1mbGV4IGZsZXgtY29sdW1uIHB0LTQgcGItNFxcXCIganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIGVsZXZhdGlvbj1cXFwiMFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IHYtaWY9XFxcIm9uZSAmJiBsb2FkZWRQaG90b3MubGVuZ3RoXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPnt7bG9hZGVkUGhvdG9zWzBdLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcIiFvbmVcXFwiIGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgIDx2LWNvbCB4cz1cXFwiNlxcXCIgbWQ9XFxcIjNcXFwiIHNtPVxcXCI2XFxcIiB2LWZvcj1cXFwiKHBob3RvLCBpKSBpbiBjYXJvdXNlbFBob3Rvc1xcXCIgOmtleT1cXFwiaVxcXCIgdi1pZj1cXFwiISFjYXJvdXNlbFBob3Rvc1tpXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxlZGl0LXBob3RvLWNhcmRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6cHJlbG9hZD1cXFwicHJlbG9hZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmlsbGVkPVxcXCJ0cnVlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmaWxlPVxcXCJwaG90b1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBAZGVsZXRlPVxcXCIoKSA9PiBkZWxldGVQaG90byhwaG90bywgaSlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxcclxcbiAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgIDwvdi1jb2w+XFxyXFxuICAgICAgICAgICAgPHYtY29sIHhzPVxcXCI2XFxcIiBtZD1cXFwiM1xcXCIgc209XFxcIjZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZWRpdC1waG90by1jYXJkXFxyXFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIigpID0+ICRyZWZzLmJ0bi5jbGljaygpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkcm9wLWFyZWEgQGNoYW5nZT1cXFwiYWRkUGhvdG9cXFwiIDp5ZXQ9XFxcImNhcm91c2VsUGhvdG9zLmxlbmd0aFxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3Rpb25zPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhpZGRlblxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICA8L2VkaXQtcGhvdG8tY2FyZD5cXHJcXG4gICAgICAgICAgICA8L3YtY29sPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgPC92LWNhcmQ+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcblxcclxcbiAgICBpbXBvcnQgRWRpdFBob3RvQ2FyZCBmcm9tIFxcXCIuL0VkaXRQaG90b0NhcmRcXFwiO1xcclxcbiAgICBpbXBvcnQgRHJvcEFyZWEgZnJvbSBcXFwiLi9Ecm9wQXJlYVxcXCI7XFxyXFxuXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG5hbWU6ICdwaG90by1sb2FkZXInLFxcclxcbiAgICAgICAgcHJvcHM6IHtcXHJcXG4gICAgICAgICAgICByYWRpdXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgb25lOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgcGhvdG9zOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiAoW10pLFxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgcHJlbG9hZDoge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY29tcG9uZW50czoge0Ryb3BBcmVhLCBFZGl0UGhvdG9DYXJkfSxcXHJcXG4gICAgICAgIGRhdGE6ICh2bSkgPT4gKHtcXHJcXG4gICAgICAgICAgICAgICAgbjogMCxcXHJcXG4gICAgICAgICAgICAgICAgcGhvdG86ICcnLFxcclxcbiAgICAgICAgICAgICAgICBsb2FkZWRQaG90b3M6IFtdLFxcclxcbiAgICAgICAgICAgICAgICBkZWxldGVkOiBbXSxcXHJcXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxQaG90b3M6IHZtLnBob3RvcyxcXHJcXG4gICAgICAgICAgICAgICAgZmlsZUltZzogbnVsbCxcXHJcXG4gICAgICAgIH0pLFxcclxcbiAgICAgICAgdXBkYXRlZCgpIHtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgZGVsZXRlUGhvdG8ocGhvdG8sIGNwaSkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAocGhvdG8ubmFtZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRQaG90b3MuZm9yRWFjaCgoZmlsZSwgaSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlLm5hbWUgPT09IHBob3RvLm5hbWUpIGRlbGV0ZSB0aGlzLmxvYWRlZFBob3Rvc1tpXTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVkLnB1c2godGhpcy5waG90b3NbY3BpXS5pZCk7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2Fyb3VzZWxQaG90b3NbY3BpXTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJvdXNlbFBob3RvcyA9IFsuLi50aGlzLmNhcm91c2VsUGhvdG9zXTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGdldFBob3RvcygpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVkUGhvdG9zLmNvbmNhdCh0aGlzLmRlbGV0ZWQpO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZ2V0Rmlyc3QoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRlZFBob3Rvc1swXTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHJldHVybkZvcm1EYXRhKHZhbCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzYXZlLXBob3RvJywgdmFsKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgdXBkYXRlUGhvdG8odmFsKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucGhvdG8gPSB2YWxcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q3JvcHBlckRpYWxvZyA9IGZhbHNlXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBjbGlja09uSW5wdXQoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmZpbGVzID0gKG5ldyBEYXRhVHJhbnNmZXIoKSkuZmlsZXM7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmNsaWNrKClcXHJcXG5cXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGFkZFBob3RvKGV2ZW50KSB7XFxyXFxuICAgICAgICAgICAgICAgIFsuLi5ldmVudC50YXJnZXQuZmlsZXNdLmZvckVhY2goKHBob3RvKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbWcgPSBwaG90bztcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVJbWcuc2l6ZSA+IDUwMjQwMDApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0KDQsNC30LzQtdGAINGE0LDQudC70LAg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINCx0L7Qu9GM0YjQtSA10JzQkSdcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkZWRQaG90b3MubGVuZ3RoID4gMTApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0JLRiyDQvdC1INC80L7QttC10YLQtSDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LHQvtC70YzRiNC1IDEwINGE0L7RgtC+0LPRgNCw0YTQuNC5J1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxQaG90b3MgPSBbXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5jYXJvdXNlbFBob3RvcyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWxvYWQgPyBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZUltZykgOiB0aGlzLmZpbGVJbWdcXHJcXG4gICAgICAgICAgICAgICAgICAgIF07XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZFBob3Rvcy5wdXNoKHRoaXMuZmlsZUltZylcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubiA9IHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aCAtIDFcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IG51bGw7XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB3YXRjaDoge1xcclxcbiAgICAgICAgICAgIHBob3Rvcyhudikge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmNhcm91c2VsUGhvdG9zID0gbnYubWFwKChmaWxlKSA9PiBmaWxlLmZpbGUpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAgIC5waG90by1pbnB1dCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kZXNjcmlwdGlvbiAudi10ZXh0LWZpZWxkX19zbG90IHRleHRhcmVhIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uZGVzY3JpcHRpb24udi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmFmdGVyICxcXG4uZGVzY3JpcHRpb24udi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmJlZm9yZXtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RFZGl0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBNkhBO0lBQ0Esd0JBQUE7QUFDQTtBQUNBOztJQUVBLHdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8di1jb250YWluZXJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiY292ZXJcXFwiPlxcclxcbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cXFwiY2VudGVyXFxcIiBqdXN0aWZ5PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJtYi0yXFxcIlxcclxcbiAgICAgICAgdi10ZXh0PVxcXCIkcm91dGUucGFyYW1zLmlkICA9PSAwID8gJ9CU0L7QsdCw0LLQu9C10L3QuNC1INC+0LHRgNCw0YnQtdC90LjRjycgOiAgJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L7QsdGA0LDRidC10L3QuNGPJ1xcXCI+XFxyXFxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cXHJcXG4gICAgICAgIDx2LXRleHQtZmllbGRcXHJcXG4gICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcclxcbiAgICAgICAgICAgIG5hbWU9XFxcInRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgIGxhYmVsPVxcXCLQl9Cw0LPQvtC70L7QstC+0LpcXFwiXFxyXFxuICAgICAgICAgICAgdi1tb2RlbD1cXFwicG9zdC50aXRsZVxcXCJcXHJcXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XFxcIm1lc3NhZ2VzLnRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgID5cXHJcXG4gICAgICAgIDwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgICAgPHYtdGV4dGFyZWFcXHJcXG4gICAgICAgICAgICAgICAgbmFtZT1cXFwiZGVzY3JpcHRpb25cXFwiXFxyXFxuICAgICAgICAgICAgICAgIGxhYmVsPVxcXCLQntC/0LjRgdCw0L3QuNC1XFxcIlxcclxcbiAgICAgICAgICAgICAgICBoaW50PVxcXCJIaW50IHRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgIDp2YWx1ZT1cXFwiJyAnXFxcIlxcclxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZGVzY3JpcHRpb24gXFxcIlxcclxcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XFxcIm1lc3NhZ2VzLmRlc2NyaXB0aW9uXFxcIlxcclxcbiAgICAgICAgPjwvdi10ZXh0YXJlYT5cXHJcXG4gICAgICAgIDxlZGl0b3JcXHJcXG4gICAgICAgICAgICAgICAgYXBpLWtleT1cXFwia2FwcjBraDB2M3ZzY25rcHBzeGdpZzk4dmY2bWdpdGFpaThhdXczcDJwaW4xYzV0XFxcIlxcclxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwibXQtMlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicG9zdC5kZXNjcmlwdGlvblxcXCJcXHJcXG4gICAgICAgID5cXHJcXG4gICAgICAgIDwvZWRpdG9yPlxcclxcbiAgICAgICAgPHYtc3BhY2VyLz5cXHJcXG4gICAgICAgIDxwaG90by1sb2FkZXIgcmVmPVxcXCJsb2FkZXJcXFwiICA6cGhvdG9zPVxcXCJwb3N0LnBob3Rvc1xcXCIvPlxcclxcbiAgICAgICAgPHYtYnRuIGNsYXNzPVxcXCJzYXZlLWJ0bi10ZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgIEBjbGljaz1cXFwiKCkgPT4gcG9zdC5pZD4wID8gdXBkYXRlKCkgOiBjcmVhdGUoKVxcXCJcXHJcXG4gICAgICAgICAgICAgICBjb2xvcj1cXFwic3VjY2Vzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcIiEocG9zdC5pZD4gMCkgJiYgKCFwb3N0LmRlc2NyaXB0aW9uIHx8ICFwb3N0LnRpdGxlKVxcXCI+XFxyXFxuICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXFxyXFxuICAgICAgICA8L3YtYnRuPlxcclxcbiAgICA8L3YtY29udGFpbmVyPlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gICAgaW1wb3J0IEVkaXRvciBmcm9tICdAdGlueW1jZS90aW55bWNlLXZ1ZSc7XFxyXFxuICAgIGltcG9ydCBQaG90b0xvYWRlciBmcm9tICdAL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyJ1xcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBuYW1lOiBcXFwiVXNlclBvc3RFZGl0XFxcIixcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICAgICAgICBFZGl0b3IsXFxyXFxuICAgICAgICAgICAgUGhvdG9Mb2FkZXJcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICBwb3N0OiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZDogdm0uJHJvdXRlLnBhcmFtcy5pZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBob3RvczogW10sXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXFxyXFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbW91bnRlZCgpIHtcXHJcXG4gICAgICAgICAgICBsZXQgbW9kZWxJZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcXHJcXG4gICAgICAgICAgICBpZiAobW9kZWxJZCAhPSAwKSB7XFxyXFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy91c2VyL3Bvc3QvJysgbW9kZWxJZCkudGhlbigocmVzcG9uc2UpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdCA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gZT8ucmVzcG9uc2U/LmVycm9yIHx8ICfQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwJztcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZTtcXHJcXG4gICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICAgICAgICBjcmVhdGUoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvdXNlci9wb3N0JywgdGhpcy5wb3N0KVxcclxcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QuaWQgPSByLmRhdGEuZGF0YS5pZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnJlc3BvbnNlICYmIGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JzID0gZS5yZXNwb25zZS5kYXRhLmVycm9yc1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWVzc2FnZXMpLmZvckVhY2goKGspPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2tdID0gZXJyb3JzW2tdPy5bMF0gfHwgJyc7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgdXBkYXRlKCkge1xcclxcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucHV0KCcvdXNlci9wb3N0LycrIHRoaXMucG9zdC5pZCwgdGhpcy5wb3N0KVxcclxcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGhvdG9zID0gdGhpcy4kcmVmcy5sb2FkZXIuZ2V0UGhvdG9zKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Bob3Rvcy5sZW5ndGgpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGhvdG9zLmZvckVhY2goKHBob3RvLCBpKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGhvdG8ubmFtZSkgZm9ybURhdGEuYXBwZW5kKCdwb3N0X3Bob3Rvc1snK2krJ10nLCBwaG90bywgcGhvdG8ubmFtZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGZvcm1EYXRhLmFwcGVuZCgnZGVsZXRlX3Bob3Rvc1snK2krJ10nLCBwaG90bylcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnX21ldGhvZCcsICdQVVQnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvdXNlci9wb3N0LycrdGhpcy5wb3N0LmlkLCBmb3JtRGF0YSkudGhlbigoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6IFxcXCJ1cG9zdHNcXFwifSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gIGDQntGI0LjQsdC60LAg0YHQvtGF0YDQsNC90LXQvdC40Y8g0YTQvtGC0L7Qs9GA0LDRhNC40LhgO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6IFxcXCJ1cG9zdHNcXFwifSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5yZXNwb25zZSAmJiBlLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnM7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuICAgIC5kZXNjcmlwdGlvbiAudi10ZXh0LWZpZWxkX19zbG90IHRleHRhcmVhIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgICAuZGVzY3JpcHRpb24udi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmFmdGVyICxcXHJcXG4gICAgLmRlc2NyaXB0aW9uLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDpiZWZvcmV7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ODgxZThmMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ecm9wQXJlYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ecm9wQXJlYS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ODgxZThmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTg4MWU4ZjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1ODgxZThmMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1ODgxZThmMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1ODgxZThmMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRHJvcEFyZWEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU4ODFlOGYyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU4ODFlOGYyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ecm9wQXJlYS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhYmU0MTFkJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhYmU0MTFkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjRhYmU0MTFkXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGFiZTQxMWQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGFiZTQxMWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGFiZTQxMWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhYmU0MTFkJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRhYmU0MTFkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ0YTZhMmVhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ0YTZhMmVhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJkNGE2YTJlYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Q0YTZhMmVhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Q0YTZhMmVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Q0YTZhMmVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDRhNmEyZWEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDRhNmEyZWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjQ2ZmQ4ZDlcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NDZmZDhkOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NDZmZDhkOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NDZmZDhkOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NDZmZDhkOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlclBvc3RFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMjIzNzE4NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VyUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VyUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1VzZXJQb3N0RWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzIyMzcxODQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzIyMzcxODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzIyMzcxODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXJQb3N0RWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzIyMzcxODQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzIyMzcxODQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Vc2VyUG9zdEVkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclBvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJkcm9wLWFyZWFcIixcbiAgICAgIGNsYXNzOiBfdm0uJHZ1ZXRpZnkuYnJlYWtwb2ludC5zbUFuZERvd24gPyBbXCJkcm9wLXNtXCJdIDogW10sXG4gICAgICBhdHRyczogeyBpZDogXCJkcm9wLWFyZWFcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImZvcm1cIiwgeyBzdGF0aWNDbGFzczogXCJkcm9wLWZvcm1cIiB9LCBbXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhpZGVcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgICBpZDogXCJmaWxlRWxlbVwiLFxuICAgICAgICAgICAgbXVsdGlwbGU6IFwiXCIsXG4gICAgICAgICAgICBhY2NlcHQ6IFwiaW1hZ2UvKlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjaGFuZ2VcIiwgZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZHJvcC1idG5cIiwgYXR0cnM6IHsgZm9yOiBcImZpbGVFbGVtXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyghX3ZtLnlldCA/IFwi0JfQsNCz0YDRg9C30LjRgtGMINGE0L7RgtC+XCIgOiBcItCX0LDQs9GA0YPQt9C40YLRjCDQtdGJ0LVcIikpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtYXQtZmlsZS1kZXNjXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcItCk0L7RgNC80LDRgiDigJMganBnLCBwbmdcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtZGVzYyBob3ZlclwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLQntGC0L/Rg9GB0YLQuNGC0LUg0YTQvtGC0L7Qs9GA0LDRhNC40Y4g0YHRjtC00LBcIilcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtcGhvdG8tY2FyZFwiLFxuICAgICAgY2xhc3M6IHsgZm9jdXNlZDogX3ZtLmZvY3VzLCBmaWxsZWQ6IF92bS5maWxsZWQgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaXRlLXBob3RvLWNhcmQtY29udGVudFwiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiei1pbmRleFwiOiBcIjFcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3QoXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgX3ZtLmxvYWRlZCAmJiBfdm0uc3JjXG4gICAgICAgICAgICAgICAgPyBfYyhcInYtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uc3JjLCBjb3ZlcjogXCJcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcImNsaWNrXCIsIF92bS4kYXR0cnNbXCJ2YWx1ZVwiXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6ICFfdm0ubG9hZGVkICYmICFfdm0uZXJyb3JcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYS04XCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgeHM6IFwiMTJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInByb2dyZXNzLWJhclwiLCB7IGF0dHJzOiB7IHByb2dyZXNzOiBfdm0ucHJvZ3Jlc3MgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtcGhvdG8tY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ6LWluZGV4XCI6IFwiMlwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdChcImFjdGlvbnNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGwtNSBwci01IHB0LTIganVzdGlmeS1lbmRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHhzOiBcIjEyXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmYWI6IFwiXCIsIHNtYWxsOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImRlbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktZGVsZXRlXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5vcGVuXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IFwiY29udGVudC1jbGFzc1wiOiBcInNtLXBob3RvLWRpYWxvZ1wiLCBmdWxsc2NyZWVuOiB0cnVlIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcGVuLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5vcGVuID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm9wZW5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGlhbG9nLWltYWdlXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0ubG9hZGVkICYmIF92bS5zcmNcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInYtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnNyYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtaGVpZ2h0XCI6IFwiOTB2aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2UtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiwgY29sb3I6IFwiZ3JheVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiZm9jdXNPdXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wZW4gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktY2xvc2VcIildKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInYtcm93XCIsIHsgc3RhdGljQ2xhc3M6IFwibWEtMFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFjdGl2ZVwiLCBzdHlsZTogeyB3aWR0aDogX3ZtLnByb2dyZXNzICsgXCIlXCIgfSB9KVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY2FyZFwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtbiBwdC00IHBiLTRcIixcbiAgICAgIGF0dHJzOiB7IFwianVzdGlmeS1jZW50ZXJcIjogXCJcIiwgXCJhbGlnbi1jZW50ZXJcIjogXCJcIiwgZWxldmF0aW9uOiBcIjBcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0ub25lICYmIF92bS5sb2FkZWRQaG90b3MubGVuZ3RoXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxvYWRlZFBob3Rvc1swXS5uYW1lKSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0ub25lXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jYXJvdXNlbFBob3RvcywgZnVuY3Rpb24ocGhvdG8sIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISFfdm0uY2Fyb3VzZWxQaG90b3NbaV1cbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpLCBhdHRyczogeyB4czogXCI2XCIsIG1kOiBcIjNcIiwgc206IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImVkaXQtcGhvdG8tY2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZDogX3ZtLnByZWxvYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IHBob3RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW46IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVQaG90byhwaG90bywgaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzOiBcIjZcIiwgbWQ6IFwiM1wiLCBzbTogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImVkaXQtcGhvdG8tY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcmVmcy5idG4uY2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhpZGRlblwiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDgxMDAyMTE3MFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZHJvcC1hcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHlldDogX3ZtLmNhcm91c2VsUGhvdG9zLmxlbmd0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uYWRkUGhvdG8gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY292ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9LFxuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICBfdm0uJHJvdXRlLnBhcmFtcy5pZCA9PSAwXG4gICAgICAgICAgICAgID8gXCLQlNC+0LHQsNCy0LvQtdC90LjQtSDQvtCx0YDQsNGJ0LXQvdC40Y9cIlxuICAgICAgICAgICAgICA6IFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQvtCx0YDQsNGJ0LXQvdC40Y9cIlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIG5hbWU6IFwidGl0bGVcIixcbiAgICAgICAgICBsYWJlbDogXCLQl9Cw0LPQvtC70L7QstC+0LpcIixcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy50aXRsZVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0ucG9zdC50aXRsZSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0ucG9zdCwgXCJ0aXRsZVwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInBvc3QudGl0bGVcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dGFyZWFcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbiBcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgbGFiZWw6IFwi0J7Qv9C40YHQsNC90LjQtVwiLFxuICAgICAgICAgIGhpbnQ6IFwiSGludCB0ZXh0XCIsXG4gICAgICAgICAgdmFsdWU6IFwiIFwiLFxuICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLmRlc2NyaXB0aW9uXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZWRpdG9yXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibXQtMlwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwiYXBpLWtleVwiOiBcImthcHIwa2gwdjN2c2Nua3Bwc3hnaWc5OHZmNm1naXRhaWk4YXV3M3AycGluMWM1dFwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5wb3N0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5wb3N0LCBcImRlc2NyaXB0aW9uXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwicG9zdC5kZXNjcmlwdGlvblwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwaG90by1sb2FkZXJcIiwgeyByZWY6IFwibG9hZGVyXCIsIGF0dHJzOiB7IHBob3RvczogX3ZtLnBvc3QucGhvdG9zIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1idG5cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNhdmUtYnRuLXRleHRcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICEoX3ZtLnBvc3QuaWQgPiAwKSAmJiAoIV92bS5wb3N0LmRlc2NyaXB0aW9uIHx8ICFfdm0ucG9zdC50aXRsZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0ucG9zdC5pZCA+IDAgPyBfdm0udXBkYXRlKCkgOiBfdm0uY3JlYXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxcbiAgICBcIildXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU4ODFlOGYyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI5ZTg1ZTBmYVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU4ODFlOGYyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRHJvcEFyZWEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTg4MWU4ZjImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YWJlNDExZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjAwOGY4ZWFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhYmU0MTFkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YWJlNDExZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwOGMyNzc4Y1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ0YTZhMmVhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyOGYzZTM3Y1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ0YTZhMmVhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDRhNmEyZWEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0NmZkOGQ5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2MTg1ZGQyYVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyUG9zdEVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjczNjEyNmZkXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclBvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclBvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9