(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_RequestEdit_vue"],{

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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../image'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
          var compressUrl = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../image'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(img, function (ctx, canvas) {
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(90 * Math.PI / 180);
            ctx.drawImage(img, -img.width / 2, -img.width / 2);
            ctx.restore();
          });
          var blob = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../image'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(compressUrl.split(',')[1], 'image/jpeg');

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
              var compressUrl = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../image'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(img);
              var blob = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../image'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(compressUrl.split(',')[1], 'image/jpeg');

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
    EditPhotoCard: _EditPhotoCard__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data(vm) {
    return {
      n: 0,
      photo: '',
      loadedPhotos: [],
      carouselPhotos: vm.photos,
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
      var _this = this;

      _toConsumableArray(event.target.files).forEach(function (photo) {
        _this.fileImg = photo;

        if (_this.fileImg.size > 5024000) {
          _this.$root.$children[0].snackbarText = 'Размер файла не может быть больше 5МБ';
          _this.$root.$children[0].snackbar = true;
          return;
        }

        if (_this.loadedPhotos.length > 10) {
          _this.$root.$children[0].snackbarText = 'Вы не можете загрузить больше 10 фотографий';
          _this.$root.$children[0].snackbar = true;
          return;
        }

        _this.carouselPhotos.push(_this.preload ? URL.createObjectURL(_this.fileImg) : _this.fileImg);

        _this.loadedPhotos.push(_this.fileImg);

        _this.n = _this.loadedPhotos.length - 1;
        _this.fileImg = null;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RequestEdit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RequestEdit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  name: "RequestEdit",
  components: {
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    PhotoLoader: _components_photo_loader__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data(vm) {
    return {
      request: {
        id: vm.$route.params.id,
        type: null,
        role: {
          value: vm.$route.query.role
        },
        text: ''
      },
      roles: [{
        value: 128,
        text: 'В библиотеку'
      }, {
        value: 1024,
        text: 'В администрацию'
      }],
      types: vm.$store.state.types,
      messages: {
        type: '',
        text: '',
        role: ''
      }
    };
  },
  mounted: function mounted() {},
  methods: {
    create: function create() {
      var _this$request$role,
          _this$request$type,
          _this = this;

      if (!(this.request.id > 0)) window.axios.post('/request', {
        text: this.request.text,
        role: ((_this$request$role = this.request.role) === null || _this$request$role === void 0 ? void 0 : _this$request$role.value) || null,
        type: ((_this$request$type = this.request.type) === null || _this$request$type === void 0 ? void 0 : _this$request$type.value) || null
      }).then(function (r) {
        _this.$router.push({
          name: "requests"
        });
      })["catch"](function (e) {
        if (e.response && e.response.status === 422) {
          var errors = e.response.data.errors;
          Object.keys(_this.messages).forEach(function (k) {
            var _errors$k;

            _this.messages[k] = ((_errors$k = errors[k]) === null || _errors$k === void 0 ? void 0 : _errors$k[0]) || '';
          });
        }
      });
    }
  }
});

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
___CSS_LOADER_EXPORT___.push([module.id, "\n.site-photo-card[data-v-4abe411d] {\n    position: relative;\n    width: 100%;\n    background: #FFFFFF;\n    /* Grey 800 */\n\n    border-radius: 8px;\n    overflow: hidden;\n}\n.site-photo-card.filled[data-v-4abe411d] {\n    background-color: #F8F8F8;\n}\n.site-photo-card.focused[data-v-4abe411d], .site-photo-card[data-v-4abe411d]:hover {\n    box-shadow: 0px 0px 9px rgba(140, 140, 140, 0.49);\n    border-radius: 8px;\n}\n.site-photo-card[data-v-4abe411d]:after {\n    content: \"\";\n    display: block;\n    padding-bottom: 56%; /* 16/9 */\n}\n.site-photo-card-actions[data-v-4abe411d] {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n}\n.site-photo-card-content[data-v-4abe411d] {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n.edit-photo-icon[data-v-4abe411d] {\n    margin-left: 8px;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/EditPhotoCard.vue"],"names":[],"mappings":";AA+IA;IACA,kBAAA;IACA,WAAA;IACA,mBAAA;IACA,aAAA;;IAEA,kBAAA;IACA,gBAAA;AACA;AAEA;IACA,yBAAA;AACA;AAEA;IACA,iDAAA;IACA,kBAAA;AACA;AAEA;IACA,WAAA;IACA,cAAA;IACA,mBAAA,EAAA,SAAA;AACA;AAEA;IACA,kBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;AACA;AAEA;IACA,kBAAA;IACA,WAAA;IACA,YAAA;IACA,aAAA;IACA,uBAAA;IACA,sBAAA;AACA;AAEA;IACA,gBAAA;AACA","sourcesContent":["<template>\r\n    <div class=\"site-photo-card\"\r\n         :class=\"{focused: focus, filled}\"\r\n         @click=\"$emit('click', $attrs['value']); open=true\">\r\n        <div class=\"site-photo-card-content\" style=\"z-index: 1;\">\r\n            <slot name=\"default\">\r\n                <v-img v-if=\"loaded && src\" :src=\"src\" cover\r\n                       height=\"100%\"/>\r\n                <v-row v-else-if=\"!loaded && !error\" xs=\"12\" class=\"pa-8\" style=\"align-items: center\">\r\n                    <progress-bar :progress=\"progress\"/>\r\n                </v-row>\r\n            </slot>\r\n        </div>\r\n        <div class=\"site-photo-card-actions\" style=\"z-index: 2;\">\r\n            <slot name=\"actions\">\r\n                <v-row xs=\"12\" class=\"pl-5 pr-5 pt-2\">\r\n                </v-row>\r\n            </slot>\r\n        </div>\r\n        <v-dialog v-model=\"open\" v-if=\"open\" content-class=\"sm-photo-dialog\"\r\n                  :fullscreen=\"true\">\r\n            <div class=\"dialog-image\">\r\n                <v-img v-if=\"loaded && src\" :src=\"src\" max-height=\"90vh\" contain/>\r\n                <v-btn icon @click=\"$emit('focusOut'); open=false;\"\r\n                       color=\"gray\"\r\n                       class=\"close-btn\" ><v-icon>mdi-close</v-icon></v-btn>\r\n            </div>\r\n        </v-dialog>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    import {b64ToBlob, compress} from \"../../image\";\r\n    import ProgressBar from \"./ProgressBar\";\r\n\r\n    export default {\r\n        name: \"EditPhotoCard\",\r\n        components: {ProgressBar},\r\n        props: {\r\n            focus: {type: Boolean, default: false,},\r\n            preload: {type: Boolean, default: true,},\r\n            cover: {type: String, default: \"\"},\r\n            filled: {type: Boolean, default: false},\r\n            file: {type: File | String}\r\n        },\r\n        data: (vm) => ({\r\n            open: false,\r\n            focused: !!vm.$attrs['focus'],\r\n            src: '',\r\n            loaded: false,\r\n            error: false,\r\n            progress: 0,\r\n            rotateTimeout: null,\r\n        }),\r\n        mounted() {\r\n            this.upload(this.file)\r\n        },\r\n        computed: {\r\n            isCover() {\r\n                return this.cover && this.src.indexOf(this.cover) !== -1\r\n            }\r\n        },\r\n        methods: {\r\n            rotate() {\r\n                if (this.rotateTimeout) {\r\n                    clearTimeout(this.rotateTimeout);\r\n                    this.rotateTimeout = null;\r\n                }\r\n                this.rotateTimeout = setTimeout(() => {\r\n                    let img = new Image();\r\n                    img.crossOrigin = \"anonymous\"\r\n                    img.onload = () => {\r\n                        let compressUrl = compress(img, (ctx, canvas) => {\r\n                            ctx.save();\r\n                            ctx.translate(canvas.width / 2, canvas.height / 2);\r\n                            ctx.rotate(90 * Math.PI / 180);\r\n                            ctx.drawImage(img, -img.width / 2, -img.width / 2);\r\n                            ctx.restore();\r\n                        });\r\n                        let blob = b64ToBlob(compressUrl.split(',')[1], 'image/jpeg');\r\n                        this.upload(blob, this.src.split('/').reverse()[0]);\r\n                    };\r\n                    img.src = this.src;\r\n                }, 1000)\r\n            },\r\n            readLocalSrc(file) {\r\n                if (this.file instanceof Blob) {\r\n                    let reader = new FileReader();\r\n                    reader.readAsDataURL(file);\r\n                    reader.onloadend = () => {\r\n                        this.src = reader.result;\r\n                        this.$emit('change', this.src)\r\n                    }\r\n                } else this.src = file;\r\n                this.loaded = true;\r\n            },\r\n            upload(file, canvasFileName) {\r\n                if (!this.preload || !(file instanceof Blob)) {\r\n                    this.readLocalSrc(file);\r\n                    return;\r\n                }\r\n                var xhr = new XMLHttpRequest()\r\n                xhr.responseType = 'json';\r\n                var formData = new FormData()\r\n                formData.append('file', file, canvasFileName || file.name)\r\n                xhr.open('POST', '/photo/upload', true)\r\n                xhr.upload.addEventListener(\"progress\", (e) => {\r\n                    this.progress = (e.loaded * 100.0 / e.total) || 100;\r\n                })\r\n                xhr.addEventListener('readystatechange', (e) => {\r\n                    if (xhr.readyState == 4 && xhr.status == 200) {\r\n                        this.src = e.target.response.url;\r\n                        this.$emit('change', e.target.response.url);\r\n                        this.loaded = true;\r\n                    } else if (xhr.readyState == 4 && xhr.status != 200) {\r\n                        if (xhr.status == 400 && !canvasFileName) {\r\n                            //Для файлов с битым маймтипом рисуем на канве и отправляем результат\r\n                            let img = new Image();\r\n                            img.onload = () => {\r\n                                let compressUrl = compress(img);\r\n                                let blob = b64ToBlob(compressUrl.split(',')[1], 'image/jpeg');\r\n                                this.upload(blob, file.name);\r\n                            };\r\n                            img.src = URL.createObjectURL(file);\r\n                            return;\r\n                        }\r\n                        this.readLocalSrc(file)\r\n                        this.error = this.loaded = true;\r\n                    }\r\n\r\n                })\r\n                xhr.send(formData)\r\n            }\r\n        },\r\n        watch: {\r\n            file(nv) {\r\n                if (typeof nv === 'string') this.src = nv;\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style scoped>\r\n    .site-photo-card {\r\n        position: relative;\r\n        width: 100%;\r\n        background: #FFFFFF;\r\n        /* Grey 800 */\r\n\r\n        border-radius: 8px;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .site-photo-card.filled {\r\n        background-color: #F8F8F8;\r\n    }\r\n\r\n    .site-photo-card.focused, .site-photo-card:hover {\r\n        box-shadow: 0px 0px 9px rgba(140, 140, 140, 0.49);\r\n        border-radius: 8px;\r\n    }\r\n\r\n    .site-photo-card:after {\r\n        content: \"\";\r\n        display: block;\r\n        padding-bottom: 56%; /* 16/9 */\r\n    }\r\n\r\n    .site-photo-card-actions {\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .site-photo-card-content {\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        display: flex;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .edit-photo-icon {\r\n        margin-left: 8px;\r\n    }\r\n</style>\r\n<style>\r\n\r\n    .sm-photo-dialog .photo-cover {\r\n        position: absolute;\r\n        top: 32px;\r\n        left: 32px;\r\n        z-index: 101;\r\n    }\r\n\r\n    .sm-photo-dialog .close-btn {\r\n        position: absolute;\r\n        top: 32px;\r\n        right: 32px;\r\n    }\r\n\r\n    .sm-photo-dialog .bottom {\r\n        right: 32px;\r\n        bottom: 32px;\r\n        position: absolute;\r\n        width: fit-content;\r\n        display: flex;\r\n        flex-direction: row;\r\n    }\r\n\r\n    .sm-photo-dialog {\r\n        position: absolute;\r\n        z-index: 100;\r\n        display: flex;\r\n        box-shadow: none !important;\r\n        background: rgba(105, 109, 116, 0.6);\r\n        backdrop-filter: blur(10px);\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .dialog-image .v-image{\r\n        border-radius: 8px;\r\n    }\r\n    .dialog-image {\r\n        width: fit-content;\r\n        height: fit-content;\r\n        max-width: 100%;\r\n        position: relative;\r\n        padding: 16px;\r\n        border-radius: 8px;\r\n        overflow: hidden;\r\n    }\r\n</style>\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.sm-photo-dialog .photo-cover {\n    position: absolute;\n    top: 32px;\n    left: 32px;\n    z-index: 101;\n}\n.sm-photo-dialog .close-btn {\n    position: absolute;\n    top: 32px;\n    right: 32px;\n}\n.sm-photo-dialog .bottom {\n    right: 32px;\n    bottom: 32px;\n    position: absolute;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    display: flex;\n    flex-direction: row;\n}\n.sm-photo-dialog {\n    position: absolute;\n    z-index: 100;\n    display: flex;\n    box-shadow: none !important;\n    background: rgba(105, 109, 116, 0.6);\n    -webkit-backdrop-filter: blur(10px);\n            backdrop-filter: blur(10px);\n    align-items: center;\n    justify-content: center;\n}\n.dialog-image .v-image{\n    border-radius: 8px;\n}\n.dialog-image {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    max-width: 100%;\n    position: relative;\n    padding: 16px;\n    border-radius: 8px;\n    overflow: hidden;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/EditPhotoCard.vue"],"names":[],"mappings":";AA8LA;IACA,kBAAA;IACA,SAAA;IACA,UAAA;IACA,YAAA;AACA;AAEA;IACA,kBAAA;IACA,SAAA;IACA,WAAA;AACA;AAEA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;IACA,0BAAA;IAAA,uBAAA;IAAA,kBAAA;IACA,aAAA;IACA,mBAAA;AACA;AAEA;IACA,kBAAA;IACA,YAAA;IACA,aAAA;IACA,2BAAA;IACA,oCAAA;IACA,mCAAA;YAAA,2BAAA;IACA,mBAAA;IACA,uBAAA;AACA;AAEA;IACA,kBAAA;AACA;AACA;IACA,0BAAA;IAAA,uBAAA;IAAA,kBAAA;IACA,2BAAA;IAAA,wBAAA;IAAA,mBAAA;IACA,eAAA;IACA,kBAAA;IACA,aAAA;IACA,kBAAA;IACA,gBAAA;AACA","sourcesContent":["<template>\r\n    <div class=\"site-photo-card\"\r\n         :class=\"{focused: focus, filled}\"\r\n         @click=\"$emit('click', $attrs['value']); open=true\">\r\n        <div class=\"site-photo-card-content\" style=\"z-index: 1;\">\r\n            <slot name=\"default\">\r\n                <v-img v-if=\"loaded && src\" :src=\"src\" cover\r\n                       height=\"100%\"/>\r\n                <v-row v-else-if=\"!loaded && !error\" xs=\"12\" class=\"pa-8\" style=\"align-items: center\">\r\n                    <progress-bar :progress=\"progress\"/>\r\n                </v-row>\r\n            </slot>\r\n        </div>\r\n        <div class=\"site-photo-card-actions\" style=\"z-index: 2;\">\r\n            <slot name=\"actions\">\r\n                <v-row xs=\"12\" class=\"pl-5 pr-5 pt-2\">\r\n                </v-row>\r\n            </slot>\r\n        </div>\r\n        <v-dialog v-model=\"open\" v-if=\"open\" content-class=\"sm-photo-dialog\"\r\n                  :fullscreen=\"true\">\r\n            <div class=\"dialog-image\">\r\n                <v-img v-if=\"loaded && src\" :src=\"src\" max-height=\"90vh\" contain/>\r\n                <v-btn icon @click=\"$emit('focusOut'); open=false;\"\r\n                       color=\"gray\"\r\n                       class=\"close-btn\" ><v-icon>mdi-close</v-icon></v-btn>\r\n            </div>\r\n        </v-dialog>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    import {b64ToBlob, compress} from \"../../image\";\r\n    import ProgressBar from \"./ProgressBar\";\r\n\r\n    export default {\r\n        name: \"EditPhotoCard\",\r\n        components: {ProgressBar},\r\n        props: {\r\n            focus: {type: Boolean, default: false,},\r\n            preload: {type: Boolean, default: true,},\r\n            cover: {type: String, default: \"\"},\r\n            filled: {type: Boolean, default: false},\r\n            file: {type: File | String}\r\n        },\r\n        data: (vm) => ({\r\n            open: false,\r\n            focused: !!vm.$attrs['focus'],\r\n            src: '',\r\n            loaded: false,\r\n            error: false,\r\n            progress: 0,\r\n            rotateTimeout: null,\r\n        }),\r\n        mounted() {\r\n            this.upload(this.file)\r\n        },\r\n        computed: {\r\n            isCover() {\r\n                return this.cover && this.src.indexOf(this.cover) !== -1\r\n            }\r\n        },\r\n        methods: {\r\n            rotate() {\r\n                if (this.rotateTimeout) {\r\n                    clearTimeout(this.rotateTimeout);\r\n                    this.rotateTimeout = null;\r\n                }\r\n                this.rotateTimeout = setTimeout(() => {\r\n                    let img = new Image();\r\n                    img.crossOrigin = \"anonymous\"\r\n                    img.onload = () => {\r\n                        let compressUrl = compress(img, (ctx, canvas) => {\r\n                            ctx.save();\r\n                            ctx.translate(canvas.width / 2, canvas.height / 2);\r\n                            ctx.rotate(90 * Math.PI / 180);\r\n                            ctx.drawImage(img, -img.width / 2, -img.width / 2);\r\n                            ctx.restore();\r\n                        });\r\n                        let blob = b64ToBlob(compressUrl.split(',')[1], 'image/jpeg');\r\n                        this.upload(blob, this.src.split('/').reverse()[0]);\r\n                    };\r\n                    img.src = this.src;\r\n                }, 1000)\r\n            },\r\n            readLocalSrc(file) {\r\n                if (this.file instanceof Blob) {\r\n                    let reader = new FileReader();\r\n                    reader.readAsDataURL(file);\r\n                    reader.onloadend = () => {\r\n                        this.src = reader.result;\r\n                        this.$emit('change', this.src)\r\n                    }\r\n                } else this.src = file;\r\n                this.loaded = true;\r\n            },\r\n            upload(file, canvasFileName) {\r\n                if (!this.preload || !(file instanceof Blob)) {\r\n                    this.readLocalSrc(file);\r\n                    return;\r\n                }\r\n                var xhr = new XMLHttpRequest()\r\n                xhr.responseType = 'json';\r\n                var formData = new FormData()\r\n                formData.append('file', file, canvasFileName || file.name)\r\n                xhr.open('POST', '/photo/upload', true)\r\n                xhr.upload.addEventListener(\"progress\", (e) => {\r\n                    this.progress = (e.loaded * 100.0 / e.total) || 100;\r\n                })\r\n                xhr.addEventListener('readystatechange', (e) => {\r\n                    if (xhr.readyState == 4 && xhr.status == 200) {\r\n                        this.src = e.target.response.url;\r\n                        this.$emit('change', e.target.response.url);\r\n                        this.loaded = true;\r\n                    } else if (xhr.readyState == 4 && xhr.status != 200) {\r\n                        if (xhr.status == 400 && !canvasFileName) {\r\n                            //Для файлов с битым маймтипом рисуем на канве и отправляем результат\r\n                            let img = new Image();\r\n                            img.onload = () => {\r\n                                let compressUrl = compress(img);\r\n                                let blob = b64ToBlob(compressUrl.split(',')[1], 'image/jpeg');\r\n                                this.upload(blob, file.name);\r\n                            };\r\n                            img.src = URL.createObjectURL(file);\r\n                            return;\r\n                        }\r\n                        this.readLocalSrc(file)\r\n                        this.error = this.loaded = true;\r\n                    }\r\n\r\n                })\r\n                xhr.send(formData)\r\n            }\r\n        },\r\n        watch: {\r\n            file(nv) {\r\n                if (typeof nv === 'string') this.src = nv;\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style scoped>\r\n    .site-photo-card {\r\n        position: relative;\r\n        width: 100%;\r\n        background: #FFFFFF;\r\n        /* Grey 800 */\r\n\r\n        border-radius: 8px;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .site-photo-card.filled {\r\n        background-color: #F8F8F8;\r\n    }\r\n\r\n    .site-photo-card.focused, .site-photo-card:hover {\r\n        box-shadow: 0px 0px 9px rgba(140, 140, 140, 0.49);\r\n        border-radius: 8px;\r\n    }\r\n\r\n    .site-photo-card:after {\r\n        content: \"\";\r\n        display: block;\r\n        padding-bottom: 56%; /* 16/9 */\r\n    }\r\n\r\n    .site-photo-card-actions {\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .site-photo-card-content {\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        display: flex;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .edit-photo-icon {\r\n        margin-left: 8px;\r\n    }\r\n</style>\r\n<style>\r\n\r\n    .sm-photo-dialog .photo-cover {\r\n        position: absolute;\r\n        top: 32px;\r\n        left: 32px;\r\n        z-index: 101;\r\n    }\r\n\r\n    .sm-photo-dialog .close-btn {\r\n        position: absolute;\r\n        top: 32px;\r\n        right: 32px;\r\n    }\r\n\r\n    .sm-photo-dialog .bottom {\r\n        right: 32px;\r\n        bottom: 32px;\r\n        position: absolute;\r\n        width: fit-content;\r\n        display: flex;\r\n        flex-direction: row;\r\n    }\r\n\r\n    .sm-photo-dialog {\r\n        position: absolute;\r\n        z-index: 100;\r\n        display: flex;\r\n        box-shadow: none !important;\r\n        background: rgba(105, 109, 116, 0.6);\r\n        backdrop-filter: blur(10px);\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .dialog-image .v-image{\r\n        border-radius: 8px;\r\n    }\r\n    .dialog-image {\r\n        width: fit-content;\r\n        height: fit-content;\r\n        max-width: 100%;\r\n        position: relative;\r\n        padding: 16px;\r\n        border-radius: 8px;\r\n        overflow: hidden;\r\n    }\r\n</style>\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.photo-input[data-v-646fd8d9] {\n    position: absolute;\n    visibility: hidden;\n}\n.user-photo[data-v-646fd8d9] {\n    border-radius: 200px;\n    width: 300px;\n    height: auto;\n    max-height: 500px;\n    border: 1px solid #01aefe;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/photo-loader.vue"],"names":[],"mappings":";AA2GA;IACA,kBAAA;IACA,kBAAA;AACA;AAEA;IACA,oBAAA;IACA,YAAA;IACA,YAAA;IACA,iBAAA;IACA,yBAAA;AACA","sourcesContent":["<template>\r\n    <v-card class=\"d-flex flex-column\" justify-center align-center elevation=\"0\">\r\n        <input\r\n                type=\"file\"\r\n                id=\"files\"\r\n                multiple\r\n                @change=\"addPhoto\"\r\n                class=\"photo-input\"\r\n                placeholder=\"azaz\"\r\n                accept=\"image/jpeg,image/png,image/jpg\"\r\n        />\r\n\r\n        <v-btn class=\"btn my-2\" @click=\"clickOnInput\" v-if=\"!one || !carouselPhotos.length\">Добавить фотографию</v-btn>\r\n        <div v-if=\"one && loadedPhotos.length\" class=\"text-center\">{{loadedPhotos[0].name}}</div>\r\n        <v-row v-if=\"!one && carouselPhotos.length\" class=\"user-photo-module\">\r\n            <v-col xs=\"6\" md=\"3\" sm=\"6\" v-for=\"(photo, i) in carouselPhotos\" :key=\"i\">\r\n                <edit-photo-card\r\n                        :preload=\"preload\"\r\n                        :filled=\"true\"\r\n                        :file=\"photo\"\r\n                        contain\r\n                >\r\n                </edit-photo-card>\r\n            </v-col>\r\n        </v-row>\r\n    </v-card>\r\n</template>\r\n\r\n<script>\r\n\r\n    import EditPhotoCard from \"./EditPhotoCard\";\r\n\r\n    export default {\r\n        name: 'photo-loader',\r\n        props: {\r\n            radius: {\r\n                type: Number,\r\n            },\r\n            one: {\r\n                type: Boolean,\r\n                default: false,\r\n            },\r\n            photos: {\r\n                type: Array,\r\n                default: () => ([]),\r\n            },\r\n            preload: {\r\n                type: Boolean,\r\n                default: false,\r\n            }\r\n        },\r\n        components: {EditPhotoCard},\r\n        data: (vm) => ({\r\n                n: 0,\r\n                photo: '',\r\n                loadedPhotos: [],\r\n                carouselPhotos: vm.photos,\r\n                fileImg: null,\r\n        }),\r\n        methods: {\r\n            getPhotos() {\r\n                return this.loadedPhotos;\r\n            },\r\n            getFirst() {\r\n                return this.loadedPhotos[0];\r\n            },\r\n            returnFormData(val) {\r\n                this.$emit('save-photo', val)\r\n            },\r\n            updatePhoto(val) {\r\n                this.photo = val\r\n                this.showCropperDialog = false\r\n            },\r\n            clickOnInput() {\r\n                document.getElementById('files').files = (new DataTransfer()).files;\r\n                document.getElementById('files').click()\r\n\r\n            },\r\n            addPhoto(event) {\r\n                [...event.target.files].forEach((photo) => {\r\n                    this.fileImg = photo;\r\n                    if (this.fileImg.size > 5024000) {\r\n                        this.$root.$children[0].snackbarText = 'Размер файла не может быть больше 5МБ'\r\n                        this.$root.$children[0].snackbar = true\r\n                        return;\r\n                    }\r\n                    if (this.loadedPhotos.length > 10) {\r\n                        this.$root.$children[0].snackbarText = 'Вы не можете загрузить больше 10 фотографий'\r\n                        this.$root.$children[0].snackbar = true\r\n                        return;\r\n                    }\r\n                    this.carouselPhotos.push(this.preload ? URL.createObjectURL(this.fileImg) : this.fileImg)\r\n                    this.loadedPhotos.push(this.fileImg)\r\n                    this.n = this.loadedPhotos.length - 1\r\n                    this.fileImg = null;\r\n                })\r\n            },\r\n        },\r\n        watch: {\r\n            photos(nv) {\r\n                this.carouselPhotos = nv.map((file) => file.file);\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style scoped>\r\n    .photo-input {\r\n        position: absolute;\r\n        visibility: hidden;\r\n    }\r\n\r\n    .user-photo {\r\n        border-radius: 200px;\r\n        width: 300px;\r\n        height: auto;\r\n        max-height: 500px;\r\n        border: 1px solid #01aefe;\r\n    }\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RequestEdit.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RequestEdit.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.description .v-text-field__slot textarea {\n    display: none !important;\n}\n.description.v-text-field>.v-input__control>.v-input__slot:after ,\n.description.v-text-field>.v-input__control>.v-input__slot:before{\n    display: none !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/RequestEdit.vue"],"names":[],"mappings":";AAuGA;IACA,wBAAA;AACA;AACA;;IAEA,wBAAA;AACA","sourcesContent":["<template>\r\n    <v-container\r\n            class=\"cover\">\r\n        <v-toolbar-title align=\"center\" justify=\"center\" class=\"mb-2\"\r\n        v-text=\"'Новый запрос' \">\r\n        </v-toolbar-title>\r\n        <v-combobox\r\n                v-if=\"!request.role\"\r\n                v-model=\"request.role\"\r\n                :erro-messages=\"messages.role\"\r\n                :items=\"roles\"\r\n                label=\"Куда\"\r\n                dense\r\n        ></v-combobox>\r\n        <v-combobox\r\n                v-model=\"request.type\"\r\n                :error-messages=\"messages.type\"\r\n                :items=\"types\"\r\n                label=\"Тип заявления\"\r\n                dense\r\n        ></v-combobox>\r\n        <v-textarea\r\n            type=\"text\"\r\n            name=\"title\"\r\n            label=\"Текст заявления\"\r\n            v-model=\"request.text\"\r\n            :error-messages=\"messages.text\"\r\n            >\r\n        </v-textarea>\r\n\r\n        <v-btn class=\"save-btn\"\r\n               v-if=\"$route.params.id == 0\"\r\n               color=\"success\"\r\n               fab\r\n               @click=\"create\"\r\n               :disabled=\"!(request.role && request.type && request.text)\"\r\n               dark>\r\n            <v-icon>mdi-check-outline</v-icon>\r\n        </v-btn>\r\n    </v-container>\r\n</template>\r\n\r\n<script>\r\n    import Editor from '@tinymce/tinymce-vue';\r\n    import PhotoLoader from '@/components/photo-loader'\r\n    export default {\r\n        name: \"RequestEdit\",\r\n        components: {\r\n            Editor,\r\n            PhotoLoader\r\n        },\r\n        data: (vm) => {\r\n            return {\r\n                request: {\r\n                    id: vm.$route.params.id,\r\n                    type: null,\r\n                    role: { value:vm.$route.query.role},\r\n                    text: '',\r\n                },\r\n                roles: [\r\n                    {\r\n                        value: 128,\r\n                        text: 'В библиотеку'\r\n                    },\r\n                    {\r\n                        value: 1024,\r\n                        text: 'В администрацию'\r\n                    },\r\n                ],\r\n                types : vm.$store.state.types,\r\n                messages: {\r\n                    type: '',\r\n                    text: '',\r\n                    role: '',\r\n                }\r\n            }\r\n        },\r\n        mounted() {\r\n        },\r\n        methods: {\r\n            create() {\r\n                if (!(this.request.id > 0))\r\n                    window.axios.post('/request', {\r\n                        text: this.request.text,\r\n                        role: this.request.role?.value || null,\r\n                        type: this.request.type?.value || null,\r\n                    })\r\n                    .then((r) => {\r\n                        this.$router.push({name: \"requests\"});\r\n                    }).catch((e) => {\r\n                        if (e.response && e.response.status === 422) {\r\n                            let errors = e.response.data.errors\r\n                            Object.keys(this.messages).forEach((k)=> {\r\n                                this.messages[k] = errors[k]?.[0] || '';\r\n                            });\r\n                    }\r\n                })\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style>\r\n    .description .v-text-field__slot textarea {\r\n        display: none !important;\r\n    }\r\n    .description.v-text-field>.v-input__control>.v-input__slot:after ,\r\n    .description.v-text-field>.v-input__control>.v-input__slot:before{\r\n        display: none !important;\r\n    }\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./resources/js/pages/RequestEdit.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/RequestEdit.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RequestEdit_vue_vue_type_template_id_511b8c80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestEdit.vue?vue&type=template&id=511b8c80& */ "./resources/js/pages/RequestEdit.vue?vue&type=template&id=511b8c80&");
/* harmony import */ var _RequestEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestEdit.vue?vue&type=script&lang=js& */ "./resources/js/pages/RequestEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _RequestEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RequestEdit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/RequestEdit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _RequestEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _RequestEdit_vue_vue_type_template_id_511b8c80___WEBPACK_IMPORTED_MODULE_0__.render,
  _RequestEdit_vue_vue_type_template_id_511b8c80___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/RequestEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/pages/RequestEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/RequestEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RequestEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RequestEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/pages/RequestEdit.vue?vue&type=template&id=511b8c80&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/RequestEdit.vue?vue&type=template&id=511b8c80& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestEdit_vue_vue_type_template_id_511b8c80___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestEdit_vue_vue_type_template_id_511b8c80___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestEdit_vue_vue_type_template_id_511b8c80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RequestEdit.vue?vue&type=template&id=511b8c80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RequestEdit.vue?vue&type=template&id=511b8c80&");


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

/***/ "./resources/js/pages/RequestEdit.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/RequestEdit.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RequestEdit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RequestEdit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


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
      class: { focused: _vm.focus, filled: _vm.filled },
      on: {
        click: function($event) {
          _vm.$emit("click", _vm.$attrs["value"])
          _vm.open = true
        }
      }
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
                    attrs: { src: _vm.src, cover: "", height: "100%" }
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
              _c("v-row", {
                staticClass: "pl-5 pr-5 pt-2",
                attrs: { xs: "12" }
              })
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
      staticClass: "d-flex flex-column",
      attrs: { "justify-center": "", "align-center": "", elevation: "0" }
    },
    [
      _c("input", {
        staticClass: "photo-input",
        attrs: {
          type: "file",
          id: "files",
          multiple: "",
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
      _vm.one && _vm.loadedPhotos.length
        ? _c("div", { staticClass: "text-center" }, [
            _vm._v(_vm._s(_vm.loadedPhotos[0].name))
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.one && _vm.carouselPhotos.length
        ? _c(
            "v-row",
            { staticClass: "user-photo-module" },
            _vm._l(_vm.carouselPhotos, function(photo, i) {
              return _c(
                "v-col",
                { key: i, attrs: { xs: "6", md: "3", sm: "6" } },
                [
                  _c("edit-photo-card", {
                    attrs: {
                      preload: _vm.preload,
                      filled: true,
                      file: photo,
                      contain: ""
                    }
                  })
                ],
                1
              )
            }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RequestEdit.vue?vue&type=template&id=511b8c80&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RequestEdit.vue?vue&type=template&id=511b8c80& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        domProps: { textContent: _vm._s("Новый запрос") }
      }),
      _vm._v(" "),
      !_vm.request.role
        ? _c("v-combobox", {
            attrs: {
              "erro-messages": _vm.messages.role,
              items: _vm.roles,
              label: "Куда",
              dense: ""
            },
            model: {
              value: _vm.request.role,
              callback: function($$v) {
                _vm.$set(_vm.request, "role", $$v)
              },
              expression: "request.role"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("v-combobox", {
        attrs: {
          "error-messages": _vm.messages.type,
          items: _vm.types,
          label: "Тип заявления",
          dense: ""
        },
        model: {
          value: _vm.request.type,
          callback: function($$v) {
            _vm.$set(_vm.request, "type", $$v)
          },
          expression: "request.type"
        }
      }),
      _vm._v(" "),
      _c("v-textarea", {
        attrs: {
          type: "text",
          name: "title",
          label: "Текст заявления",
          "error-messages": _vm.messages.text
        },
        model: {
          value: _vm.request.text,
          callback: function($$v) {
            _vm.$set(_vm.request, "text", $$v)
          },
          expression: "request.text"
        }
      }),
      _vm._v(" "),
      _vm.$route.params.id == 0
        ? _c(
            "v-btn",
            {
              staticClass: "save-btn",
              attrs: {
                color: "success",
                fab: "",
                disabled: !(
                  _vm.request.role &&
                  _vm.request.type &&
                  _vm.request.text
                ),
                dark: ""
              },
              on: { click: _vm.create }
            },
            [_c("v-icon", [_vm._v("mdi-check-outline")])],
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RequestEdit.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RequestEdit.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RequestEdit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RequestEdit.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7f44e0e5", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1NjcmlwdExvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1RpbnlNQ0UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGlueW1jZS90aW55bWNlLXZ1ZS9saWIvY2pzL21haW4vdHMvY29tcG9uZW50cy9FZGl0b3JQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1JlcXVlc3RFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZT9jYzM4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0VkaXRQaG90b0NhcmQudnVlP2IwMTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIudnVlPzQwNzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZT82NmEwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9SZXF1ZXN0RWRpdC52dWU/YzAyOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUmVxdWVzdEVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0VkaXRQaG90b0NhcmQudnVlPzU4MWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIudnVlP2JiNTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZT8yNmVhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9SZXF1ZXN0RWRpdC52dWU/YzA4YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZT84M2M3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZT9iYWQ1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWU/MjE3NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUmVxdWVzdEVkaXQudnVlPzZlMTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWU/YmJmNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZT9hNDJmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZT83NzU5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWU/NzU1NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUmVxdWVzdEVkaXQudnVlP2IxN2MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxjQUFjLG1CQUFPLENBQUMsNkVBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxhQUFhLEVBQUU7QUFDMUU7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7Ozs7Ozs7Ozs7OztBQzFEUDtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELDZCQUE2QixrREFBa0QscUJBQU0sRUFBRTtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7Ozs7Ozs7Ozs7O0FDZEw7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxRkE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsZ3ZCQUF3WDtBQUM5WTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkpBQWlGO0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7QUNYZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxnc0JBQWdXO0FBQ3RYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwySkFBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7OztBQ1hmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLDR1QkFBc1g7QUFDNVk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJKQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7O0FDWGY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsOHVCQUF1WDtBQUM3WTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkpBQWlGO0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7QUNYZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyx1ckJBQThWO0FBQ3BYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwySkFBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJqcy9jaHVua3MvcmVzb3VyY2VzX2pzX3BhZ2VzX1JlcXVlc3RFZGl0X3Z1ZTc1ZjgxZjIzNmI4YzczMjc5MjM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVXRpbHNfMSA9IHJlcXVpcmUoXCIuL1V0aWxzXCIpO1xudmFyIGNyZWF0ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxpc3RlbmVyczogW10sXG4gICAgICAgIHNjcmlwdElkOiBVdGlsc18xLnV1aWQoJ3Rpbnktc2NyaXB0JyksXG4gICAgICAgIHNjcmlwdExvYWRlZDogZmFsc2VcbiAgICB9O1xufTtcbnZhciBDcmVhdGVTY3JpcHRMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXRlID0gY3JlYXRlU3RhdGUoKTtcbiAgICB2YXIgaW5qZWN0U2NyaXB0VGFnID0gZnVuY3Rpb24gKHNjcmlwdElkLCBkb2MsIHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNjcmlwdFRhZyA9IGRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0VGFnLnJlZmVycmVyUG9saWN5ID0gJ29yaWdpbic7XG4gICAgICAgIHNjcmlwdFRhZy50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHRUYWcuaWQgPSBzY3JpcHRJZDtcbiAgICAgICAgc2NyaXB0VGFnLnNyYyA9IHVybDtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzY3JpcHRUYWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZXIpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NyaXB0VGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVyKTtcbiAgICAgICAgaWYgKGRvYy5oZWFkKSB7XG4gICAgICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHRUYWcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgbG9hZCA9IGZ1bmN0aW9uIChkb2MsIHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHN0YXRlLnNjcmlwdExvYWRlZCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmICghZG9jLmdldEVsZW1lbnRCeUlkKHN0YXRlLnNjcmlwdElkKSkge1xuICAgICAgICAgICAgICAgIGluamVjdFNjcmlwdFRhZyhzdGF0ZS5zY3JpcHRJZCwgZG9jLCB1cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbigpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc2NyaXB0TG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gT25seSB0byBiZSB1c2VkIGJ5IHRlc3RzLlxuICAgIHZhciByZWluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YXRlID0gY3JlYXRlU3RhdGUoKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWQ6IGxvYWQsXG4gICAgICAgIHJlaW5pdGlhbGl6ZTogcmVpbml0aWFsaXplXG4gICAgfTtcbn07XG52YXIgU2NyaXB0TG9hZGVyID0gQ3JlYXRlU2NyaXB0TG9hZGVyKCk7XG5leHBvcnRzLlNjcmlwdExvYWRlciA9IFNjcmlwdExvYWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCk7IH07XG52YXIgZ2V0VGlueW1jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2xvYmFsID0gZ2V0R2xvYmFsKCk7XG4gICAgcmV0dXJuIGdsb2JhbCAmJiBnbG9iYWwudGlueW1jZSA/IGdsb2JhbC50aW55bWNlIDogbnVsbDtcbn07XG5leHBvcnRzLmdldFRpbnltY2UgPSBnZXRUaW55bWNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdmFsaWRFdmVudHMgPSBbXG4gICAgJ29uQWN0aXZhdGUnLFxuICAgICdvbkFkZFVuZG8nLFxuICAgICdvbkJlZm9yZUFkZFVuZG8nLFxuICAgICdvbkJlZm9yZUV4ZWNDb21tYW5kJyxcbiAgICAnb25CZWZvcmVHZXRDb250ZW50JyxcbiAgICAnb25CZWZvcmVSZW5kZXJVSScsXG4gICAgJ29uQmVmb3JlU2V0Q29udGVudCcsXG4gICAgJ29uQmVmb3JlUGFzdGUnLFxuICAgICdvbkJsdXInLFxuICAgICdvbkNoYW5nZScsXG4gICAgJ29uQ2xlYXJVbmRvcycsXG4gICAgJ29uQ2xpY2snLFxuICAgICdvbkNvbnRleHRNZW51JyxcbiAgICAnb25Db3B5JyxcbiAgICAnb25DdXQnLFxuICAgICdvbkRibGNsaWNrJyxcbiAgICAnb25EZWFjdGl2YXRlJyxcbiAgICAnb25EaXJ0eScsXG4gICAgJ29uRHJhZycsXG4gICAgJ29uRHJhZ0Ryb3AnLFxuICAgICdvbkRyYWdFbmQnLFxuICAgICdvbkRyYWdHZXN0dXJlJyxcbiAgICAnb25EcmFnT3ZlcicsXG4gICAgJ29uRHJvcCcsXG4gICAgJ29uRXhlY0NvbW1hbmQnLFxuICAgICdvbkZvY3VzJyxcbiAgICAnb25Gb2N1c0luJyxcbiAgICAnb25Gb2N1c091dCcsXG4gICAgJ29uR2V0Q29udGVudCcsXG4gICAgJ29uSGlkZScsXG4gICAgJ29uSW5pdCcsXG4gICAgJ29uS2V5RG93bicsXG4gICAgJ29uS2V5UHJlc3MnLFxuICAgICdvbktleVVwJyxcbiAgICAnb25Mb2FkQ29udGVudCcsXG4gICAgJ29uTW91c2VEb3duJyxcbiAgICAnb25Nb3VzZUVudGVyJyxcbiAgICAnb25Nb3VzZUxlYXZlJyxcbiAgICAnb25Nb3VzZU1vdmUnLFxuICAgICdvbk1vdXNlT3V0JyxcbiAgICAnb25Nb3VzZU92ZXInLFxuICAgICdvbk1vdXNlVXAnLFxuICAgICdvbk5vZGVDaGFuZ2UnLFxuICAgICdvbk9iamVjdFJlc2l6ZVN0YXJ0JyxcbiAgICAnb25PYmplY3RSZXNpemVkJyxcbiAgICAnb25PYmplY3RTZWxlY3RlZCcsXG4gICAgJ29uUGFzdGUnLFxuICAgICdvblBvc3RQcm9jZXNzJyxcbiAgICAnb25Qb3N0UmVuZGVyJyxcbiAgICAnb25QcmVQcm9jZXNzJyxcbiAgICAnb25Qcm9ncmVzc1N0YXRlJyxcbiAgICAnb25SZWRvJyxcbiAgICAnb25SZW1vdmUnLFxuICAgICdvblJlc2V0JyxcbiAgICAnb25TYXZlQ29udGVudCcsXG4gICAgJ29uU2VsZWN0aW9uQ2hhbmdlJyxcbiAgICAnb25TZXRBdHRyaWInLFxuICAgICdvblNldENvbnRlbnQnLFxuICAgICdvblNob3cnLFxuICAgICdvblN1Ym1pdCcsXG4gICAgJ29uVW5kbycsXG4gICAgJ29uVmlzdWFsQWlkJ1xuXTtcbnZhciBpc1ZhbGlkS2V5ID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdmFsaWRFdmVudHMubWFwKGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gZXZlbnQudG9Mb3dlckNhc2UoKTsgfSkuaW5kZXhPZihrZXkudG9Mb3dlckNhc2UoKSkgIT09IC0xOyB9O1xuZXhwb3J0cy5pc1ZhbGlkS2V5ID0gaXNWYWxpZEtleTtcbnZhciBiaW5kSGFuZGxlcnMgPSBmdW5jdGlvbiAoaW5pdEV2ZW50LCBsaXN0ZW5lcnMsIGVkaXRvcikge1xuICAgIE9iamVjdC5rZXlzKGxpc3RlbmVycylcbiAgICAgICAgLmZpbHRlcihpc1ZhbGlkS2V5KVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gbGlzdGVuZXJzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ29uSW5pdCcpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGluaXRFdmVudCwgZWRpdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVkaXRvci5vbihrZXkuc3Vic3RyaW5nKDIpLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gaGFuZGxlcihlLCBlZGl0b3IpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmV4cG9ydHMuYmluZEhhbmRsZXJzID0gYmluZEhhbmRsZXJzO1xudmFyIGJpbmRNb2RlbEhhbmRsZXJzID0gZnVuY3Rpb24gKGN0eCwgZWRpdG9yKSB7XG4gICAgdmFyIG1vZGVsRXZlbnRzID0gY3R4LiRwcm9wcy5tb2RlbEV2ZW50cyA/IGN0eC4kcHJvcHMubW9kZWxFdmVudHMgOiBudWxsO1xuICAgIHZhciBub3JtYWxpemVkRXZlbnRzID0gQXJyYXkuaXNBcnJheShtb2RlbEV2ZW50cykgPyBtb2RlbEV2ZW50cy5qb2luKCcgJykgOiBtb2RlbEV2ZW50cztcbiAgICBlZGl0b3Iub24obm9ybWFsaXplZEV2ZW50cyA/IG5vcm1hbGl6ZWRFdmVudHMgOiAnY2hhbmdlIGlucHV0IHVuZG8gcmVkbycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3R4LiRlbWl0KCdpbnB1dCcsIGVkaXRvci5nZXRDb250ZW50KHsgZm9ybWF0OiBjdHguJHByb3BzLm91dHB1dEZvcm1hdCB9KSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5iaW5kTW9kZWxIYW5kbGVycyA9IGJpbmRNb2RlbEhhbmRsZXJzO1xudmFyIGluaXRFZGl0b3IgPSBmdW5jdGlvbiAoaW5pdEV2ZW50LCBjdHgsIGVkaXRvcikge1xuICAgIHZhciB2YWx1ZSA9IGN0eC4kcHJvcHMudmFsdWUgPyBjdHguJHByb3BzLnZhbHVlIDogJyc7XG4gICAgdmFyIGluaXRpYWxWYWx1ZSA9IGN0eC4kcHJvcHMuaW5pdGlhbFZhbHVlID8gY3R4LiRwcm9wcy5pbml0aWFsVmFsdWUgOiAnJztcbiAgICBlZGl0b3Iuc2V0Q29udGVudCh2YWx1ZSB8fCAoY3R4LmluaXRpYWxpemVkID8gY3R4LmNhY2hlIDogaW5pdGlhbFZhbHVlKSk7XG4gICAgLy8gQWx3YXlzIGJpbmQgdGhlIHZhbHVlIGxpc3RlbmVyIGluIGNhc2UgdXNlcnMgdXNlIDp2YWx1ZSBpbnN0ZWFkIG9mIHYtbW9kZWxcbiAgICBjdHguJHdhdGNoKCd2YWx1ZScsIGZ1bmN0aW9uICh2YWwsIHByZXZWYWwpIHtcbiAgICAgICAgaWYgKGVkaXRvciAmJiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiB2YWwgIT09IHByZXZWYWwgJiYgdmFsICE9PSBlZGl0b3IuZ2V0Q29udGVudCh7IGZvcm1hdDogY3R4LiRwcm9wcy5vdXRwdXRGb3JtYXQgfSkpIHtcbiAgICAgICAgICAgIGVkaXRvci5zZXRDb250ZW50KHZhbCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBjaGVja3MgaWYgdGhlIHYtbW9kZWwgc2hvcnRoYW5kIGlzIHVzZWQgKHdoaWNoIHNldHMgYW4gdi1vbjppbnB1dCBsaXN0ZW5lcikgYW5kIHRoZW4gYmluZHMgZWl0aGVyXG4gICAgLy8gc3BlY2lmaWVkIHRoZSBldmVudHMgb3IgZGVmYXVsdHMgdG8gXCJjaGFuZ2Uga2V5dXBcIiBldmVudCBhbmQgZW1pdHMgdGhlIGVkaXRvciBjb250ZW50IG9uIHRoYXQgZXZlbnRcbiAgICBpZiAoY3R4LiRsaXN0ZW5lcnMuaW5wdXQpIHtcbiAgICAgICAgYmluZE1vZGVsSGFuZGxlcnMoY3R4LCBlZGl0b3IpO1xuICAgIH1cbiAgICBiaW5kSGFuZGxlcnMoaW5pdEV2ZW50LCBjdHguJGxpc3RlbmVycywgZWRpdG9yKTtcbiAgICBjdHguaW5pdGlhbGl6ZWQgPSB0cnVlO1xufTtcbmV4cG9ydHMuaW5pdEVkaXRvciA9IGluaXRFZGl0b3I7XG52YXIgdW5pcXVlID0gMDtcbnZhciB1dWlkID0gZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCk7XG4gICAgdW5pcXVlKys7XG4gICAgcmV0dXJuIHByZWZpeCArICdfJyArIHJhbmRvbSArIHVuaXF1ZSArIFN0cmluZyh0aW1lKTtcbn07XG5leHBvcnRzLnV1aWQgPSB1dWlkO1xudmFyIGlzVGV4dGFyZWEgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnO1xufTtcbmV4cG9ydHMuaXNUZXh0YXJlYSA9IGlzVGV4dGFyZWE7XG52YXIgbm9ybWFsaXplUGx1Z2luQXJyYXkgPSBmdW5jdGlvbiAocGx1Z2lucykge1xuICAgIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ3VuZGVmaW5lZCcgfHwgcGx1Z2lucyA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwbHVnaW5zKSA/IHBsdWdpbnMgOiBwbHVnaW5zLnNwbGl0KCcgJyk7XG59O1xudmFyIG1lcmdlUGx1Z2lucyA9IGZ1bmN0aW9uIChpbml0UGx1Z2lucywgaW5wdXRQbHVnaW5zKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVBsdWdpbkFycmF5KGluaXRQbHVnaW5zKS5jb25jYXQobm9ybWFsaXplUGx1Z2luQXJyYXkoaW5wdXRQbHVnaW5zKSk7XG59O1xuZXhwb3J0cy5tZXJnZVBsdWdpbnMgPSBtZXJnZVBsdWdpbnM7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7IH07XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2NyaXB0TG9hZGVyXzEgPSByZXF1aXJlKFwiLi4vU2NyaXB0TG9hZGVyXCIpO1xudmFyIFRpbnlNQ0VfMSA9IHJlcXVpcmUoXCIuLi9UaW55TUNFXCIpO1xudmFyIFV0aWxzXzEgPSByZXF1aXJlKFwiLi4vVXRpbHNcIik7XG52YXIgRWRpdG9yUHJvcFR5cGVzXzEgPSByZXF1aXJlKFwiLi9FZGl0b3JQcm9wVHlwZXNcIik7XG52YXIgcmVuZGVySW5saW5lID0gZnVuY3Rpb24gKGgsIGlkLCB0YWdOYW1lKSB7XG4gICAgcmV0dXJuIGgodGFnTmFtZSA/IHRhZ05hbWUgOiAnZGl2Jywge1xuICAgICAgICBhdHRyczogeyBpZDogaWQgfVxuICAgIH0pO1xufTtcbnZhciByZW5kZXJJZnJhbWUgPSBmdW5jdGlvbiAoaCwgaWQpIHtcbiAgICByZXR1cm4gaCgndGV4dGFyZWEnLCB7XG4gICAgICAgIGF0dHJzOiB7IGlkOiBpZCB9LFxuICAgICAgICBzdHlsZTogeyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9XG4gICAgfSk7XG59O1xudmFyIGluaXRpYWxpc2UgPSBmdW5jdGlvbiAoY3R4KSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpbmFsSW5pdCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjdHguJHByb3BzLmluaXQpLCB7IHJlYWRvbmx5OiBjdHguJHByb3BzLmRpc2FibGVkLCBzZWxlY3RvcjogXCIjXCIgKyBjdHguZWxlbWVudElkLCBwbHVnaW5zOiBVdGlsc18xLm1lcmdlUGx1Z2lucyhjdHguJHByb3BzLmluaXQgJiYgY3R4LiRwcm9wcy5pbml0LnBsdWdpbnMsIGN0eC4kcHJvcHMucGx1Z2lucyksIHRvb2xiYXI6IGN0eC4kcHJvcHMudG9vbGJhciB8fCAoY3R4LiRwcm9wcy5pbml0ICYmIGN0eC4kcHJvcHMuaW5pdC50b29sYmFyKSwgaW5saW5lOiBjdHguaW5saW5lRWRpdG9yLCBzZXR1cDogZnVuY3Rpb24gKGVkaXRvcikge1xuICAgICAgICAgICAgY3R4LmVkaXRvciA9IGVkaXRvcjtcbiAgICAgICAgICAgIGVkaXRvci5vbignaW5pdCcsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBVdGlsc18xLmluaXRFZGl0b3IoZSwgY3R4LCBlZGl0b3IpOyB9KTtcbiAgICAgICAgICAgIGlmIChjdHguJHByb3BzLmluaXQgJiYgdHlwZW9mIGN0eC4kcHJvcHMuaW5pdC5zZXR1cCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGN0eC4kcHJvcHMuaW5pdC5zZXR1cChlZGl0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IH0pO1xuICAgIGlmIChVdGlsc18xLmlzVGV4dGFyZWEoY3R4LmVsZW1lbnQpKSB7XG4gICAgICAgIGN0eC5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICAgICAgY3R4LmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cbiAgICBUaW55TUNFXzEuZ2V0VGlueW1jZSgpLmluaXQoZmluYWxJbml0KTtcbn07IH07XG5leHBvcnRzLkVkaXRvciA9IHtcbiAgICBwcm9wczogRWRpdG9yUHJvcFR5cGVzXzEuZWRpdG9yUHJvcHMsXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IHRoaXMuJHByb3BzLmlkIHx8IFV0aWxzXzEudXVpZCgndGlueS12dWUnKTtcbiAgICAgICAgdGhpcy5pbmxpbmVFZGl0b3IgPSAodGhpcy4kcHJvcHMuaW5pdCAmJiB0aGlzLiRwcm9wcy5pbml0LmlubGluZSkgfHwgdGhpcy4kcHJvcHMuaW5saW5lO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBkaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5lZGl0b3Iuc2V0TW9kZSh0aGlzLmRpc2FibGVkID8gJ3JlYWRvbmx5JyA6ICdkZXNpZ24nKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLiRlbDtcbiAgICAgICAgaWYgKFRpbnlNQ0VfMS5nZXRUaW55bWNlKCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGluaXRpYWxpc2UodGhpcykoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBjaGFubmVsID0gdGhpcy4kcHJvcHMuY2xvdWRDaGFubmVsID8gdGhpcy4kcHJvcHMuY2xvdWRDaGFubmVsIDogJzUnO1xuICAgICAgICAgICAgdmFyIGFwaUtleSA9IHRoaXMuJHByb3BzLmFwaUtleSA/IHRoaXMuJHByb3BzLmFwaUtleSA6ICduby1hcGkta2V5JztcbiAgICAgICAgICAgIHZhciBzY3JpcHRTcmMgPSBVdGlsc18xLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuJHByb3BzLnRpbnltY2VTY3JpcHRTcmMpID9cbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vY2RuLnRpbnkuY2xvdWQvMS9cIiArIGFwaUtleSArIFwiL3RpbnltY2UvXCIgKyBjaGFubmVsICsgXCIvdGlueW1jZS5taW4uanNcIiA6XG4gICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMudGlueW1jZVNjcmlwdFNyYztcbiAgICAgICAgICAgIFNjcmlwdExvYWRlcl8xLlNjcmlwdExvYWRlci5sb2FkKHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LCBzY3JpcHRTcmMsIGluaXRpYWxpc2UodGhpcykpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChUaW55TUNFXzEuZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBUaW55TUNFXzEuZ2V0VGlueW1jZSgpLnJlbW92ZSh0aGlzLmVkaXRvcik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRlYWN0aXZhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKCF0aGlzLmlubGluZUVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5jYWNoZSA9IHRoaXMuZWRpdG9yLmdldENvbnRlbnQoKTtcbiAgICAgICAgICAgIChfYSA9IFRpbnlNQ0VfMS5nZXRUaW55bWNlKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUodGhpcy5lZGl0b3IpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlubGluZUVkaXRvciAmJiB0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBpbml0aWFsaXNlKHRoaXMpKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5saW5lRWRpdG9yID8gcmVuZGVySW5saW5lKGgsIHRoaXMuZWxlbWVudElkLCB0aGlzLiRwcm9wcy50YWdOYW1lKSA6IHJlbmRlcklmcmFtZShoLCB0aGlzLmVsZW1lbnRJZCk7XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lZGl0b3JQcm9wcyA9IHtcbiAgICBhcGlLZXk6IFN0cmluZyxcbiAgICBjbG91ZENoYW5uZWw6IFN0cmluZyxcbiAgICBpZDogU3RyaW5nLFxuICAgIGluaXQ6IE9iamVjdCxcbiAgICBpbml0aWFsVmFsdWU6IFN0cmluZyxcbiAgICBpbmxpbmU6IEJvb2xlYW4sXG4gICAgbW9kZWxFdmVudHM6IFtTdHJpbmcsIEFycmF5XSxcbiAgICBwbHVnaW5zOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgdGFnTmFtZTogU3RyaW5nLFxuICAgIHRvb2xiYXI6IFtTdHJpbmcsIEFycmF5XSxcbiAgICB2YWx1ZTogU3RyaW5nLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHRpbnltY2VTY3JpcHRTcmM6IFN0cmluZyxcbiAgICBvdXRwdXRGb3JtYXQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBwcm9wID09PSAnaHRtbCcgfHwgcHJvcCA9PT0gJ3RleHQnOyB9XG4gICAgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFZGl0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvRWRpdG9yXCIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRWRpdG9yXzEuRWRpdG9yO1xuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cInNpdGUtcGhvdG8tY2FyZFwiXHJcbiAgICAgICAgIDpjbGFzcz1cIntmb2N1c2VkOiBmb2N1cywgZmlsbGVkfVwiXHJcbiAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdjbGljaycsICRhdHRyc1sndmFsdWUnXSk7IG9wZW49dHJ1ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLXBob3RvLWNhcmQtY29udGVudFwiIHN0eWxlPVwiei1pbmRleDogMTtcIj5cclxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgIDx2LWltZyB2LWlmPVwibG9hZGVkICYmIHNyY1wiIDpzcmM9XCJzcmNcIiBjb3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIi8+XHJcbiAgICAgICAgICAgICAgICA8di1yb3cgdi1lbHNlLWlmPVwiIWxvYWRlZCAmJiAhZXJyb3JcIiB4cz1cIjEyXCIgY2xhc3M9XCJwYS04XCIgc3R5bGU9XCJhbGlnbi1pdGVtczogY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHByb2dyZXNzLWJhciA6cHJvZ3Jlc3M9XCJwcm9ncmVzc1wiLz5cclxuICAgICAgICAgICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgICAgIDwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1waG90by1jYXJkLWFjdGlvbnNcIiBzdHlsZT1cInotaW5kZXg6IDI7XCI+XHJcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8di1yb3cgeHM9XCIxMlwiIGNsYXNzPVwicGwtNSBwci01IHB0LTJcIj5cclxuICAgICAgICAgICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgICAgIDwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cIm9wZW5cIiB2LWlmPVwib3BlblwiIGNvbnRlbnQtY2xhc3M9XCJzbS1waG90by1kaWFsb2dcIlxyXG4gICAgICAgICAgICAgICAgICA6ZnVsbHNjcmVlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZy1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPHYtaW1nIHYtaWY9XCJsb2FkZWQgJiYgc3JjXCIgOnNyYz1cInNyY1wiIG1heC1oZWlnaHQ9XCI5MHZoXCIgY29udGFpbi8+XHJcbiAgICAgICAgICAgICAgICA8di1idG4gaWNvbiBAY2xpY2s9XCIkZW1pdCgnZm9jdXNPdXQnKTsgb3Blbj1mYWxzZTtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbG9zZS1idG5cIiA+PHYtaWNvbj5tZGktY2xvc2U8L3YtaWNvbj48L3YtYnRuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3YtZGlhbG9nPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtiNjRUb0Jsb2IsIGNvbXByZXNzfSBmcm9tIFwiLi4vLi4vaW1hZ2VcIjtcclxuICAgIGltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIkVkaXRQaG90b0NhcmRcIixcclxuICAgICAgICBjb21wb25lbnRzOiB7UHJvZ3Jlc3NCYXJ9LFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGZvY3VzOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UsfSxcclxuICAgICAgICAgICAgcHJlbG9hZDoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUsfSxcclxuICAgICAgICAgICAgY292ZXI6IHt0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCJ9LFxyXG4gICAgICAgICAgICBmaWxsZWQ6IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZX0sXHJcbiAgICAgICAgICAgIGZpbGU6IHt0eXBlOiBGaWxlIHwgU3RyaW5nfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogKHZtKSA9PiAoe1xyXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9jdXNlZDogISF2bS4kYXR0cnNbJ2ZvY3VzJ10sXHJcbiAgICAgICAgICAgIHNyYzogJycsXHJcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXHJcbiAgICAgICAgICAgIHJvdGF0ZVRpbWVvdXQ6IG51bGwsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy51cGxvYWQodGhpcy5maWxlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgaXNDb3ZlcigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdmVyICYmIHRoaXMuc3JjLmluZGV4T2YodGhpcy5jb3ZlcikgIT09IC0xXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgcm90YXRlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm90YXRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJvdGF0ZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb21wcmVzc1VybCA9IGNvbXByZXNzKGltZywgKGN0eCwgY2FudmFzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgucm90YXRlKDkwICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgLWltZy53aWR0aCAvIDIsIC1pbWcud2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxvYiA9IGI2NFRvQmxvYihjb21wcmVzc1VybC5zcGxpdCgnLCcpWzFdLCAnaW1hZ2UvanBlZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZChibG9iLCB0aGlzLnNyYy5zcGxpdCgnLycpLnJldmVyc2UoKVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gdGhpcy5zcmM7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWFkTG9jYWxTcmMoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZSBpbnN0YW5jZW9mIEJsb2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNyYyA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuc3JjKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLnNyYyA9IGZpbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwbG9hZChmaWxlLCBjYW52YXNGaWxlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByZWxvYWQgfHwgIShmaWxlIGluc3RhbmNlb2YgQmxvYikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRMb2NhbFNyYyhmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcclxuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XHJcbiAgICAgICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgY2FudmFzRmlsZU5hbWUgfHwgZmlsZS5uYW1lKVxyXG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAnL3Bob3RvL3VwbG9hZCcsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAoZS5sb2FkZWQgKiAxMDAuMCAvIGUudG90YWwpIHx8IDEwMDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcmMgPSBlLnRhcmdldC5yZXNwb25zZS51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGUudGFyZ2V0LnJlc3BvbnNlLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gNDAwICYmICFjYW52YXNGaWxlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/QlNC70Y8g0YTQsNC50LvQvtCyINGBINCx0LjRgtGL0Lwg0LzQsNC50LzRgtC40L/QvtC8INGA0LjRgdGD0LXQvCDQvdCwINC60LDQvdCy0LUg0Lgg0L7RgtC/0YDQsNCy0LvRj9C10Lwg0YDQtdC30YPQu9GM0YLQsNGCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb21wcmVzc1VybCA9IGNvbXByZXNzKGltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBiNjRUb0Jsb2IoY29tcHJlc3NVcmwuc3BsaXQoJywnKVsxXSwgJ2ltYWdlL2pwZWcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZChibG9iLCBmaWxlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZExvY2FsU3JjKGZpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgZmlsZShudikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBudiA9PT0gJ3N0cmluZycpIHRoaXMuc3JjID0gbnY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5zaXRlLXBob3RvLWNhcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIC8qIEdyZXkgODAwICovXHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXRlLXBob3RvLWNhcmQuZmlsbGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXRlLXBob3RvLWNhcmQuZm9jdXNlZCwgLnNpdGUtcGhvdG8tY2FyZDpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggcmdiYSgxNDAsIDE0MCwgMTQwLCAwLjQ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpdGUtcGhvdG8tY2FyZDphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTYlOyAvKiAxNi85ICovXHJcbiAgICB9XHJcblxyXG4gICAgLnNpdGUtcGhvdG8tY2FyZC1hY3Rpb25zIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1waG90by1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0LXBob3RvLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzdHlsZT5cclxuXHJcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5waG90by1jb3ZlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMzJweDtcclxuICAgICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICAgIHotaW5kZXg6IDEwMTtcclxuICAgIH1cclxuXHJcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5jbG9zZS1idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDMycHg7XHJcbiAgICAgICAgcmlnaHQ6IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNtLXBob3RvLWRpYWxvZyAuYm90dG9tIHtcclxuICAgICAgICByaWdodDogMzJweDtcclxuICAgICAgICBib3R0b206IDMycHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLnNtLXBob3RvLWRpYWxvZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgMTA5LCAxMTYsIDAuNik7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZy1pbWFnZSAudi1pbWFnZXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcbiAgICAuZGlhbG9nLWltYWdlIHtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDx2LXJvdyBjbGFzcz1cIm1hLTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aXZlXCIgOnN0eWxlPVwie3dpZHRoOiBwcm9ncmVzcysnJSd9XCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC92LXJvdz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFsncHJvZ3Jlc3MnXSxcclxuICAgICAgICBuYW1lOiBcIlByb2dyZXNzQmFyXCJcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmZ1bGx7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNFMUUxRTE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgfVxyXG4gICAgLmFjdGl2ZXtcclxuICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMmUzZTRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDx2LWNhcmQgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW5cIiBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXIgZWxldmF0aW9uPVwiMFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJmaWxlc1wiXHJcbiAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cImFkZFBob3RvXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwicGhvdG8taW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhemF6XCJcclxuICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlL2pwZWcsaW1hZ2UvcG5nLGltYWdlL2pwZ1wiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPHYtYnRuIGNsYXNzPVwiYnRuIG15LTJcIiBAY2xpY2s9XCJjbGlja09uSW5wdXRcIiB2LWlmPVwiIW9uZSB8fCAhY2Fyb3VzZWxQaG90b3MubGVuZ3RoXCI+0JTQvtCx0LDQstC40YLRjCDRhNC+0YLQvtCz0YDQsNGE0LjRjjwvdi1idG4+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwib25lICYmIGxvYWRlZFBob3Rvcy5sZW5ndGhcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+e3tsb2FkZWRQaG90b3NbMF0ubmFtZX19PC9kaXY+XHJcbiAgICAgICAgPHYtcm93IHYtaWY9XCIhb25lICYmIGNhcm91c2VsUGhvdG9zLmxlbmd0aFwiIGNsYXNzPVwidXNlci1waG90by1tb2R1bGVcIj5cclxuICAgICAgICAgICAgPHYtY29sIHhzPVwiNlwiIG1kPVwiM1wiIHNtPVwiNlwiIHYtZm9yPVwiKHBob3RvLCBpKSBpbiBjYXJvdXNlbFBob3Rvc1wiIDprZXk9XCJpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZWRpdC1waG90by1jYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwcmVsb2FkPVwicHJlbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmaWxsZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmZpbGU9XCJwaG90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvZWRpdC1waG90by1jYXJkPlxyXG4gICAgICAgICAgICA8L3YtY29sPlxyXG4gICAgICAgIDwvdi1yb3c+XHJcbiAgICA8L3YtY2FyZD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gICAgaW1wb3J0IEVkaXRQaG90b0NhcmQgZnJvbSBcIi4vRWRpdFBob3RvQ2FyZFwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiAncGhvdG8tbG9hZGVyJyxcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICByYWRpdXM6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25lOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBob3Rvczoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiAoW10pLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmVsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtFZGl0UGhvdG9DYXJkfSxcclxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICBuOiAwLFxyXG4gICAgICAgICAgICAgICAgcGhvdG86ICcnLFxyXG4gICAgICAgICAgICAgICAgbG9hZGVkUGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgICAgIGNhcm91c2VsUGhvdG9zOiB2bS5waG90b3MsXHJcbiAgICAgICAgICAgICAgICBmaWxlSW1nOiBudWxsLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZ2V0UGhvdG9zKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVkUGhvdG9zO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRGaXJzdCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRlZFBob3Rvc1swXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmV0dXJuRm9ybURhdGEodmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzYXZlLXBob3RvJywgdmFsKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cGRhdGVQaG90byh2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGhvdG8gPSB2YWxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Nyb3BwZXJEaWFsb2cgPSBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGlja09uSW5wdXQoKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZXMnKS5maWxlcyA9IChuZXcgRGF0YVRyYW5zZmVyKCkpLmZpbGVzO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVzJykuY2xpY2soKVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWRkUGhvdG8oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIFsuLi5ldmVudC50YXJnZXQuZmlsZXNdLmZvckVhY2goKHBob3RvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlSW1nID0gcGhvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZUltZy5zaXplID4gNTAyNDAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0KDQsNC30LzQtdGAINGE0LDQudC70LAg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINCx0L7Qu9GM0YjQtSA10JzQkSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9ICfQktGLINC90LUg0LzQvtC20LXRgtC1INC30LDQs9GA0YPQt9C40YLRjCDQsdC+0LvRjNGI0LUgMTAg0YTQvtGC0L7Qs9GA0LDRhNC40LknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxQaG90b3MucHVzaCh0aGlzLnByZWxvYWQgPyBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZUltZykgOiB0aGlzLmZpbGVJbWcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRQaG90b3MucHVzaCh0aGlzLmZpbGVJbWcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uID0gdGhpcy5sb2FkZWRQaG90b3MubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgcGhvdG9zKG52KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcm91c2VsUGhvdG9zID0gbnYubWFwKChmaWxlKSA9PiBmaWxlLmZpbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAucGhvdG8taW5wdXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItcGhvdG8ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAxYWVmZTtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPHYtY29udGFpbmVyXHJcbiAgICAgICAgICAgIGNsYXNzPVwiY292ZXJcIj5cclxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXHJcbiAgICAgICAgdi10ZXh0PVwiJ9Cd0L7QstGL0Lkg0LfQsNC/0YDQvtGBJyBcIj5cclxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cclxuICAgICAgICA8di1jb21ib2JveFxyXG4gICAgICAgICAgICAgICAgdi1pZj1cIiFyZXF1ZXN0LnJvbGVcIlxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInJlcXVlc3Qucm9sZVwiXHJcbiAgICAgICAgICAgICAgICA6ZXJyby1tZXNzYWdlcz1cIm1lc3NhZ2VzLnJvbGVcIlxyXG4gICAgICAgICAgICAgICAgOml0ZW1zPVwicm9sZXNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQmtGD0LTQsFwiXHJcbiAgICAgICAgICAgICAgICBkZW5zZVxyXG4gICAgICAgID48L3YtY29tYm9ib3g+XHJcbiAgICAgICAgPHYtY29tYm9ib3hcclxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJyZXF1ZXN0LnR5cGVcIlxyXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMudHlwZVwiXHJcbiAgICAgICAgICAgICAgICA6aXRlbXM9XCJ0eXBlc1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCi0LjQvyDQt9Cw0Y/QstC70LXQvdC40Y9cIlxyXG4gICAgICAgICAgICAgICAgZGVuc2VcclxuICAgICAgICA+PC92LWNvbWJvYm94PlxyXG4gICAgICAgIDx2LXRleHRhcmVhXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCLQotC10LrRgdGCINC30LDRj9Cy0LvQtdC90LjRj1wiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJyZXF1ZXN0LnRleHRcIlxyXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy50ZXh0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgIDwvdi10ZXh0YXJlYT5cclxuXHJcbiAgICAgICAgPHYtYnRuIGNsYXNzPVwic2F2ZS1idG5cIlxyXG4gICAgICAgICAgICAgICB2LWlmPVwiJHJvdXRlLnBhcmFtcy5pZCA9PSAwXCJcclxuICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgZmFiXHJcbiAgICAgICAgICAgICAgIEBjbGljaz1cImNyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiEocmVxdWVzdC5yb2xlICYmIHJlcXVlc3QudHlwZSAmJiByZXF1ZXN0LnRleHQpXCJcclxuICAgICAgICAgICAgICAgZGFyaz5cclxuICAgICAgICAgICAgPHYtaWNvbj5tZGktY2hlY2stb3V0bGluZTwvdi1pY29uPlxyXG4gICAgICAgIDwvdi1idG4+XHJcbiAgICA8L3YtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBFZGl0b3IgZnJvbSAnQHRpbnltY2UvdGlueW1jZS12dWUnO1xyXG4gICAgaW1wb3J0IFBob3RvTG9hZGVyIGZyb20gJ0AvY29tcG9uZW50cy9waG90by1sb2FkZXInXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJSZXF1ZXN0RWRpdFwiLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgRWRpdG9yLFxyXG4gICAgICAgICAgICBQaG90b0xvYWRlclxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHZtLiRyb3V0ZS5wYXJhbXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByb2xlOiB7IHZhbHVlOnZtLiRyb3V0ZS5xdWVyeS5yb2xlfSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByb2xlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEyOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ9CSINCx0LjQsdC70LjQvtGC0LXQutGDJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ9CSINCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNGOJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdHlwZXMgOiB2bS4kc3RvcmUuc3RhdGUudHlwZXMsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISh0aGlzLnJlcXVlc3QuaWQgPiAwKSlcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL3JlcXVlc3QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVxdWVzdC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlOiB0aGlzLnJlcXVlc3Qucm9sZT8udmFsdWUgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy5yZXF1ZXN0LnR5cGU/LnZhbHVlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogXCJyZXF1ZXN0c1wifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWVzc2FnZXMpLmZvckVhY2goKGspPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmRlc2NyaXB0aW9uIC52LXRleHQtZmllbGRfX3Nsb3QgdGV4dGFyZWEge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YWZ0ZXIgLFxyXG4gICAgLmRlc2NyaXB0aW9uLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDpiZWZvcmV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG48L3N0eWxlPiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNpdGUtcGhvdG8tY2FyZFtkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gICAgLyogR3JleSA4MDAgKi9cXG5cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc2l0ZS1waG90by1jYXJkLmZpbGxlZFtkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcXG59XFxuLnNpdGUtcGhvdG8tY2FyZC5mb2N1c2VkW2RhdGEtdi00YWJlNDExZF0sIC5zaXRlLXBob3RvLWNhcmRbZGF0YS12LTRhYmU0MTFkXTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IHJnYmEoMTQwLCAxNDAsIDE0MCwgMC40OSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnNpdGUtcGhvdG8tY2FyZFtkYXRhLXYtNGFiZTQxMWRdOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYlOyAvKiAxNi85ICovXFxufVxcbi5zaXRlLXBob3RvLWNhcmQtYWN0aW9uc1tkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaXRlLXBob3RvLWNhcmQtY29udGVudFtkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmVkaXQtcGhvdG8taWNvbltkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQStJQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTs7SUFFQSxrQkFBQTtJQUNBLGdCQUFBO0FBQ0E7QUFFQTtJQUNBLHlCQUFBO0FBQ0E7QUFFQTtJQUNBLGlEQUFBO0lBQ0Esa0JBQUE7QUFDQTtBQUVBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQSxFQUFBLFNBQUE7QUFDQTtBQUVBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7QUFDQTtBQUVBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0FBQ0E7QUFFQTtJQUNBLGdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaXRlLXBob3RvLWNhcmRcXFwiXFxyXFxuICAgICAgICAgOmNsYXNzPVxcXCJ7Zm9jdXNlZDogZm9jdXMsIGZpbGxlZH1cXFwiXFxyXFxuICAgICAgICAgQGNsaWNrPVxcXCIkZW1pdCgnY2xpY2snLCAkYXR0cnNbJ3ZhbHVlJ10pOyBvcGVuPXRydWVcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1waG90by1jYXJkLWNvbnRlbnRcXFwiIHN0eWxlPVxcXCJ6LWluZGV4OiAxO1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWltZyB2LWlmPVxcXCJsb2FkZWQgJiYgc3JjXFxcIiA6c3JjPVxcXCJzcmNcXFwiIGNvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjEwMCVcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtcm93IHYtZWxzZS1pZj1cXFwiIWxvYWRlZCAmJiAhZXJyb3JcXFwiIHhzPVxcXCIxMlxcXCIgY2xhc3M9XFxcInBhLThcXFwiIHN0eWxlPVxcXCJhbGlnbi1pdGVtczogY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwcm9ncmVzcy1iYXIgOnByb2dyZXNzPVxcXCJwcm9ncmVzc1xcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgICAgIDwvc2xvdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1waG90by1jYXJkLWFjdGlvbnNcXFwiIHN0eWxlPVxcXCJ6LWluZGV4OiAyO1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiYWN0aW9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx2LXJvdyB4cz1cXFwiMTJcXFwiIGNsYXNzPVxcXCJwbC01IHByLTUgcHQtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvdi1yb3c+XFxyXFxuICAgICAgICAgICAgPC9zbG90PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwib3BlblxcXCIgdi1pZj1cXFwib3BlblxcXCIgY29udGVudC1jbGFzcz1cXFwic20tcGhvdG8tZGlhbG9nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaWFsb2ctaW1hZ2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8di1pbWcgdi1pZj1cXFwibG9hZGVkICYmIHNyY1xcXCIgOnNyYz1cXFwic3JjXFxcIiBtYXgtaGVpZ2h0PVxcXCI5MHZoXFxcIiBjb250YWluLz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIGljb24gQGNsaWNrPVxcXCIkZW1pdCgnZm9jdXNPdXQnKTsgb3Blbj1mYWxzZTtcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiZ3JheVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjbG9zZS1idG5cXFwiID48di1pY29uPm1kaS1jbG9zZTwvdi1pY29uPjwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L3YtZGlhbG9nPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCB7YjY0VG9CbG9iLCBjb21wcmVzc30gZnJvbSBcXFwiLi4vLi4vaW1hZ2VcXFwiO1xcclxcbiAgICBpbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcXFwiLi9Qcm9ncmVzc0JhclxcXCI7XFxyXFxuXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG5hbWU6IFxcXCJFZGl0UGhvdG9DYXJkXFxcIixcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHtQcm9ncmVzc0Jhcn0sXFxyXFxuICAgICAgICBwcm9wczoge1xcclxcbiAgICAgICAgICAgIGZvY3VzOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UsfSxcXHJcXG4gICAgICAgICAgICBwcmVsb2FkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSx9LFxcclxcbiAgICAgICAgICAgIGNvdmVyOiB7dHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcXFwiXFxcIn0sXFxyXFxuICAgICAgICAgICAgZmlsbGVkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2V9LFxcclxcbiAgICAgICAgICAgIGZpbGU6IHt0eXBlOiBGaWxlIHwgU3RyaW5nfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGRhdGE6ICh2bSkgPT4gKHtcXHJcXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICBmb2N1c2VkOiAhIXZtLiRhdHRyc1snZm9jdXMnXSxcXHJcXG4gICAgICAgICAgICBzcmM6ICcnLFxcclxcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXFxyXFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIHByb2dyZXNzOiAwLFxcclxcbiAgICAgICAgICAgIHJvdGF0ZVRpbWVvdXQ6IG51bGwsXFxyXFxuICAgICAgICB9KSxcXHJcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy51cGxvYWQodGhpcy5maWxlKVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgICAgICAgaXNDb3ZlcigpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY292ZXIgJiYgdGhpcy5zcmMuaW5kZXhPZih0aGlzLmNvdmVyKSAhPT0gLTFcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIHJvdGF0ZSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm90YXRlVGltZW91dCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucm90YXRlVGltZW91dCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVRpbWVvdXQgPSBudWxsO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gXFxcImFub255bW91c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXByZXNzVXJsID0gY29tcHJlc3MoaW1nLCAoY3R4LCBjYW52YXMpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoOTAgKiBNYXRoLlBJIC8gMTgwKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIC1pbWcud2lkdGggLyAyLCAtaW1nLndpZHRoIC8gMik7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBiNjRUb0Jsb2IoY29tcHJlc3NVcmwuc3BsaXQoJywnKVsxXSwgJ2ltYWdlL2pwZWcnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZChibG9iLCB0aGlzLnNyYy5zcGxpdCgnLycpLnJldmVyc2UoKVswXSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9O1xcclxcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMuc3JjO1xcclxcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgcmVhZExvY2FsU3JjKGZpbGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZSBpbnN0YW5jZW9mIEJsb2IpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gcmVhZGVyLnJlc3VsdDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLnNyYylcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuc3JjID0gZmlsZTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgdXBsb2FkKGZpbGUsIGNhbnZhc0ZpbGVOYW1lKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcmVsb2FkIHx8ICEoZmlsZSBpbnN0YW5jZW9mIEJsb2IpKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRMb2NhbFNyYyhmaWxlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcXHJcXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcXHJcXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgY2FudmFzRmlsZU5hbWUgfHwgZmlsZS5uYW1lKVxcclxcbiAgICAgICAgICAgICAgICB4aHIub3BlbignUE9TVCcsICcvcGhvdG8vdXBsb2FkJywgdHJ1ZSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFxcXCJwcm9ncmVzc1xcXCIsIChlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gKGUubG9hZGVkICogMTAwLjAgLyBlLnRvdGFsKSB8fCAxMDA7XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcmMgPSBlLnRhcmdldC5yZXNwb25zZS51cmw7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZS50YXJnZXQucmVzcG9uc2UudXJsKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyAhPSAyMDApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSA0MDAgJiYgIWNhbnZhc0ZpbGVOYW1lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v0JTQu9GPINGE0LDQudC70L7QsiDRgSDQsdC40YLRi9C8INC80LDQudC80YLQuNC/0L7QvCDRgNC40YHRg9C10Lwg0L3QsCDQutCw0L3QstC1INC4INC+0YLQv9GA0LDQstC70Y/QtdC8INGA0LXQt9GD0LvRjNGC0LDRglxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29tcHJlc3NVcmwgPSBjb21wcmVzcyhpbWcpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBiNjRUb0Jsb2IoY29tcHJlc3NVcmwuc3BsaXQoJywnKVsxXSwgJ2ltYWdlL2pwZWcnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkKGJsb2IsIGZpbGUubmFtZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZExvY2FsU3JjKGZpbGUpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMubG9hZGVkID0gdHJ1ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHdhdGNoOiB7XFxyXFxuICAgICAgICAgICAgZmlsZShudikge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG52ID09PSAnc3RyaW5nJykgdGhpcy5zcmMgPSBudjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4gICAgICAgIC8qIEdyZXkgODAwICovXFxyXFxuXFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQuZmlsbGVkIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZC5mb2N1c2VkLCAuc2l0ZS1waG90by1jYXJkOmhvdmVyIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IHJnYmEoMTQwLCAxNDAsIDE0MCwgMC40OSk7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZDphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDU2JTsgLyogMTYvOSAqL1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQtYWN0aW9ucyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkLWNvbnRlbnQge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5lZGl0LXBob3RvLWljb24ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPHN0eWxlPlxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5waG90by1jb3ZlciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDMycHg7XFxyXFxuICAgICAgICBsZWZ0OiAzMnB4O1xcclxcbiAgICAgICAgei1pbmRleDogMTAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbS1waG90by1kaWFsb2cgLmNsb3NlLWJ0biB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDMycHg7XFxyXFxuICAgICAgICByaWdodDogMzJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5ib3R0b20ge1xcclxcbiAgICAgICAgcmlnaHQ6IDMycHg7XFxyXFxuICAgICAgICBib3R0b206IDMycHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgMTA5LCAxMTYsIDAuNik7XFxyXFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRpYWxvZy1pbWFnZSAudi1pbWFnZXtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZGlhbG9nLWltYWdlIHtcXHJcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNtLXBob3RvLWRpYWxvZyAucGhvdG8tY292ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzJweDtcXG4gICAgbGVmdDogMzJweDtcXG4gICAgei1pbmRleDogMTAxO1xcbn1cXG4uc20tcGhvdG8tZGlhbG9nIC5jbG9zZS1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzJweDtcXG4gICAgcmlnaHQ6IDMycHg7XFxufVxcbi5zbS1waG90by1kaWFsb2cgLmJvdHRvbSB7XFxuICAgIHJpZ2h0OiAzMnB4O1xcbiAgICBib3R0b206IDMycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5zbS1waG90by1kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgMTA5LCAxMTYsIDAuNik7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5kaWFsb2ctaW1hZ2UgLnYtaW1hZ2V7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLmRpYWxvZy1pbWFnZSB7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogLW1vei1maXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQThMQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0FBQ0E7QUFFQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7QUFDQTtBQUVBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLDBCQUFBO0lBQUEsdUJBQUE7SUFBQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtBQUNBO0FBRUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxvQ0FBQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0FBQ0E7QUFFQTtJQUNBLGtCQUFBO0FBQ0E7QUFDQTtJQUNBLDBCQUFBO0lBQUEsdUJBQUE7SUFBQSxrQkFBQTtJQUNBLDJCQUFBO0lBQUEsd0JBQUE7SUFBQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaXRlLXBob3RvLWNhcmRcXFwiXFxyXFxuICAgICAgICAgOmNsYXNzPVxcXCJ7Zm9jdXNlZDogZm9jdXMsIGZpbGxlZH1cXFwiXFxyXFxuICAgICAgICAgQGNsaWNrPVxcXCIkZW1pdCgnY2xpY2snLCAkYXR0cnNbJ3ZhbHVlJ10pOyBvcGVuPXRydWVcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1waG90by1jYXJkLWNvbnRlbnRcXFwiIHN0eWxlPVxcXCJ6LWluZGV4OiAxO1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWltZyB2LWlmPVxcXCJsb2FkZWQgJiYgc3JjXFxcIiA6c3JjPVxcXCJzcmNcXFwiIGNvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjEwMCVcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtcm93IHYtZWxzZS1pZj1cXFwiIWxvYWRlZCAmJiAhZXJyb3JcXFwiIHhzPVxcXCIxMlxcXCIgY2xhc3M9XFxcInBhLThcXFwiIHN0eWxlPVxcXCJhbGlnbi1pdGVtczogY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwcm9ncmVzcy1iYXIgOnByb2dyZXNzPVxcXCJwcm9ncmVzc1xcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgICAgIDwvc2xvdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1waG90by1jYXJkLWFjdGlvbnNcXFwiIHN0eWxlPVxcXCJ6LWluZGV4OiAyO1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiYWN0aW9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx2LXJvdyB4cz1cXFwiMTJcXFwiIGNsYXNzPVxcXCJwbC01IHByLTUgcHQtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvdi1yb3c+XFxyXFxuICAgICAgICAgICAgPC9zbG90PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwib3BlblxcXCIgdi1pZj1cXFwib3BlblxcXCIgY29udGVudC1jbGFzcz1cXFwic20tcGhvdG8tZGlhbG9nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaWFsb2ctaW1hZ2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8di1pbWcgdi1pZj1cXFwibG9hZGVkICYmIHNyY1xcXCIgOnNyYz1cXFwic3JjXFxcIiBtYXgtaGVpZ2h0PVxcXCI5MHZoXFxcIiBjb250YWluLz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIGljb24gQGNsaWNrPVxcXCIkZW1pdCgnZm9jdXNPdXQnKTsgb3Blbj1mYWxzZTtcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiZ3JheVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjbG9zZS1idG5cXFwiID48di1pY29uPm1kaS1jbG9zZTwvdi1pY29uPjwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L3YtZGlhbG9nPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCB7YjY0VG9CbG9iLCBjb21wcmVzc30gZnJvbSBcXFwiLi4vLi4vaW1hZ2VcXFwiO1xcclxcbiAgICBpbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcXFwiLi9Qcm9ncmVzc0JhclxcXCI7XFxyXFxuXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG5hbWU6IFxcXCJFZGl0UGhvdG9DYXJkXFxcIixcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHtQcm9ncmVzc0Jhcn0sXFxyXFxuICAgICAgICBwcm9wczoge1xcclxcbiAgICAgICAgICAgIGZvY3VzOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UsfSxcXHJcXG4gICAgICAgICAgICBwcmVsb2FkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSx9LFxcclxcbiAgICAgICAgICAgIGNvdmVyOiB7dHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcXFwiXFxcIn0sXFxyXFxuICAgICAgICAgICAgZmlsbGVkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2V9LFxcclxcbiAgICAgICAgICAgIGZpbGU6IHt0eXBlOiBGaWxlIHwgU3RyaW5nfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGRhdGE6ICh2bSkgPT4gKHtcXHJcXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICBmb2N1c2VkOiAhIXZtLiRhdHRyc1snZm9jdXMnXSxcXHJcXG4gICAgICAgICAgICBzcmM6ICcnLFxcclxcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXFxyXFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIHByb2dyZXNzOiAwLFxcclxcbiAgICAgICAgICAgIHJvdGF0ZVRpbWVvdXQ6IG51bGwsXFxyXFxuICAgICAgICB9KSxcXHJcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy51cGxvYWQodGhpcy5maWxlKVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgICAgICAgaXNDb3ZlcigpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY292ZXIgJiYgdGhpcy5zcmMuaW5kZXhPZih0aGlzLmNvdmVyKSAhPT0gLTFcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIHJvdGF0ZSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm90YXRlVGltZW91dCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucm90YXRlVGltZW91dCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVRpbWVvdXQgPSBudWxsO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gXFxcImFub255bW91c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXByZXNzVXJsID0gY29tcHJlc3MoaW1nLCAoY3R4LCBjYW52YXMpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoOTAgKiBNYXRoLlBJIC8gMTgwKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIC1pbWcud2lkdGggLyAyLCAtaW1nLndpZHRoIC8gMik7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBiNjRUb0Jsb2IoY29tcHJlc3NVcmwuc3BsaXQoJywnKVsxXSwgJ2ltYWdlL2pwZWcnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZChibG9iLCB0aGlzLnNyYy5zcGxpdCgnLycpLnJldmVyc2UoKVswXSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9O1xcclxcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMuc3JjO1xcclxcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgcmVhZExvY2FsU3JjKGZpbGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZSBpbnN0YW5jZW9mIEJsb2IpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gcmVhZGVyLnJlc3VsdDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLnNyYylcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuc3JjID0gZmlsZTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgdXBsb2FkKGZpbGUsIGNhbnZhc0ZpbGVOYW1lKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcmVsb2FkIHx8ICEoZmlsZSBpbnN0YW5jZW9mIEJsb2IpKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRMb2NhbFNyYyhmaWxlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcXHJcXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcXHJcXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgY2FudmFzRmlsZU5hbWUgfHwgZmlsZS5uYW1lKVxcclxcbiAgICAgICAgICAgICAgICB4aHIub3BlbignUE9TVCcsICcvcGhvdG8vdXBsb2FkJywgdHJ1ZSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFxcXCJwcm9ncmVzc1xcXCIsIChlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gKGUubG9hZGVkICogMTAwLjAgLyBlLnRvdGFsKSB8fCAxMDA7XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcmMgPSBlLnRhcmdldC5yZXNwb25zZS51cmw7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZS50YXJnZXQucmVzcG9uc2UudXJsKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyAhPSAyMDApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSA0MDAgJiYgIWNhbnZhc0ZpbGVOYW1lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v0JTQu9GPINGE0LDQudC70L7QsiDRgSDQsdC40YLRi9C8INC80LDQudC80YLQuNC/0L7QvCDRgNC40YHRg9C10Lwg0L3QsCDQutCw0L3QstC1INC4INC+0YLQv9GA0LDQstC70Y/QtdC8INGA0LXQt9GD0LvRjNGC0LDRglxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29tcHJlc3NVcmwgPSBjb21wcmVzcyhpbWcpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBiNjRUb0Jsb2IoY29tcHJlc3NVcmwuc3BsaXQoJywnKVsxXSwgJ2ltYWdlL2pwZWcnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkKGJsb2IsIGZpbGUubmFtZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZExvY2FsU3JjKGZpbGUpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMubG9hZGVkID0gdHJ1ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHdhdGNoOiB7XFxyXFxuICAgICAgICAgICAgZmlsZShudikge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG52ID09PSAnc3RyaW5nJykgdGhpcy5zcmMgPSBudjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4gICAgICAgIC8qIEdyZXkgODAwICovXFxyXFxuXFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQuZmlsbGVkIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZC5mb2N1c2VkLCAuc2l0ZS1waG90by1jYXJkOmhvdmVyIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IHJnYmEoMTQwLCAxNDAsIDE0MCwgMC40OSk7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZDphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDU2JTsgLyogMTYvOSAqL1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQtYWN0aW9ucyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkLWNvbnRlbnQge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5lZGl0LXBob3RvLWljb24ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPHN0eWxlPlxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5waG90by1jb3ZlciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDMycHg7XFxyXFxuICAgICAgICBsZWZ0OiAzMnB4O1xcclxcbiAgICAgICAgei1pbmRleDogMTAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbS1waG90by1kaWFsb2cgLmNsb3NlLWJ0biB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDMycHg7XFxyXFxuICAgICAgICByaWdodDogMzJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5ib3R0b20ge1xcclxcbiAgICAgICAgcmlnaHQ6IDMycHg7XFxyXFxuICAgICAgICBib3R0b206IDMycHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgMTA5LCAxMTYsIDAuNik7XFxyXFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRpYWxvZy1pbWFnZSAudi1pbWFnZXtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZGlhbG9nLWltYWdlIHtcXHJcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZ1bGxbZGF0YS12LWQ0YTZhMmVhXXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIGJhY2tncm91bmQ6ICNFMUUxRTE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLmFjdGl2ZVtkYXRhLXYtZDRhNmEyZWFde1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYmFja2dyb3VuZDogIzJlM2U0ZSAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ0JBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7QUFDQTtBQUNBO0lBQ0EsV0FBQTtJQUNBLDhCQUFBO0lBQ0Esa0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx2LXJvdyBjbGFzcz1cXFwibWEtMFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmdWxsXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY3RpdmVcXFwiIDpzdHlsZT1cXFwie3dpZHRoOiBwcm9ncmVzcysnJSd9XFxcIi8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC92LXJvdz5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIHByb3BzOiBbJ3Byb2dyZXNzJ10sXFxyXFxuICAgICAgICBuYW1lOiBcXFwiUHJvZ3Jlc3NCYXJcXFwiXFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgICAuZnVsbHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTFFMUUxO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hY3RpdmV7XFxyXFxuICAgICAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICMyZTNlNGUgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBob3RvLWlucHV0W2RhdGEtdi02NDZmZDhkOV0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnVzZXItcGhvdG9bZGF0YS12LTY0NmZkOGQ5XSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMWFlZmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTJHQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7QUFDQTtBQUVBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx2LWNhcmQgY2xhc3M9XFxcImQtZmxleCBmbGV4LWNvbHVtblxcXCIganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIGVsZXZhdGlvbj1cXFwiMFxcXCI+XFxyXFxuICAgICAgICA8aW5wdXRcXHJcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwiZmlsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImZpbGVzXFxcIlxcclxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZVxcclxcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVxcXCJhZGRQaG90b1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcInBob3RvLWlucHV0XFxcIlxcclxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiYXphelxcXCJcXHJcXG4gICAgICAgICAgICAgICAgYWNjZXB0PVxcXCJpbWFnZS9qcGVnLGltYWdlL3BuZyxpbWFnZS9qcGdcXFwiXFxyXFxuICAgICAgICAvPlxcclxcblxcclxcbiAgICAgICAgPHYtYnRuIGNsYXNzPVxcXCJidG4gbXktMlxcXCIgQGNsaWNrPVxcXCJjbGlja09uSW5wdXRcXFwiIHYtaWY9XFxcIiFvbmUgfHwgIWNhcm91c2VsUGhvdG9zLmxlbmd0aFxcXCI+0JTQvtCx0LDQstC40YLRjCDRhNC+0YLQvtCz0YDQsNGE0LjRjjwvdi1idG4+XFxyXFxuICAgICAgICA8ZGl2IHYtaWY9XFxcIm9uZSAmJiBsb2FkZWRQaG90b3MubGVuZ3RoXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPnt7bG9hZGVkUGhvdG9zWzBdLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcIiFvbmUgJiYgY2Fyb3VzZWxQaG90b3MubGVuZ3RoXFxcIiBjbGFzcz1cXFwidXNlci1waG90by1tb2R1bGVcXFwiPlxcclxcbiAgICAgICAgICAgIDx2LWNvbCB4cz1cXFwiNlxcXCIgbWQ9XFxcIjNcXFwiIHNtPVxcXCI2XFxcIiB2LWZvcj1cXFwiKHBob3RvLCBpKSBpbiBjYXJvdXNlbFBob3Rvc1xcXCIgOmtleT1cXFwiaVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxlZGl0LXBob3RvLWNhcmRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6cHJlbG9hZD1cXFwicHJlbG9hZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmlsbGVkPVxcXCJ0cnVlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmaWxlPVxcXCJwaG90b1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXFxyXFxuICAgICAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICAgICAgPC9lZGl0LXBob3RvLWNhcmQ+XFxyXFxuICAgICAgICAgICAgPC92LWNvbD5cXHJcXG4gICAgICAgIDwvdi1yb3c+XFxyXFxuICAgIDwvdi1jYXJkPlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG5cXHJcXG4gICAgaW1wb3J0IEVkaXRQaG90b0NhcmQgZnJvbSBcXFwiLi9FZGl0UGhvdG9DYXJkXFxcIjtcXHJcXG5cXHJcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICAgICAgbmFtZTogJ3Bob3RvLWxvYWRlcicsXFxyXFxuICAgICAgICBwcm9wczoge1xcclxcbiAgICAgICAgICAgIHJhZGl1czoge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBvbmU6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBwaG90b3M6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IChbXSksXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBwcmVsb2FkOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjb21wb25lbnRzOiB7RWRpdFBob3RvQ2FyZH0sXFxyXFxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XFxyXFxuICAgICAgICAgICAgICAgIG46IDAsXFxyXFxuICAgICAgICAgICAgICAgIHBob3RvOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgbG9hZGVkUGhvdG9zOiBbXSxcXHJcXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxQaG90b3M6IHZtLnBob3RvcyxcXHJcXG4gICAgICAgICAgICAgICAgZmlsZUltZzogbnVsbCxcXHJcXG4gICAgICAgIH0pLFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIGdldFBob3RvcygpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVkUGhvdG9zO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZ2V0Rmlyc3QoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRlZFBob3Rvc1swXTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHJldHVybkZvcm1EYXRhKHZhbCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzYXZlLXBob3RvJywgdmFsKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgdXBkYXRlUGhvdG8odmFsKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucGhvdG8gPSB2YWxcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q3JvcHBlckRpYWxvZyA9IGZhbHNlXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBjbGlja09uSW5wdXQoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmZpbGVzID0gKG5ldyBEYXRhVHJhbnNmZXIoKSkuZmlsZXM7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmNsaWNrKClcXHJcXG5cXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGFkZFBob3RvKGV2ZW50KSB7XFxyXFxuICAgICAgICAgICAgICAgIFsuLi5ldmVudC50YXJnZXQuZmlsZXNdLmZvckVhY2goKHBob3RvKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbWcgPSBwaG90bztcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVJbWcuc2l6ZSA+IDUwMjQwMDApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0KDQsNC30LzQtdGAINGE0LDQudC70LAg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINCx0L7Qu9GM0YjQtSA10JzQkSdcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkZWRQaG90b3MubGVuZ3RoID4gMTApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0JLRiyDQvdC1INC80L7QttC10YLQtSDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LHQvtC70YzRiNC1IDEwINGE0L7RgtC+0LPRgNCw0YTQuNC5J1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxQaG90b3MucHVzaCh0aGlzLnByZWxvYWQgPyBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZUltZykgOiB0aGlzLmZpbGVJbWcpXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZFBob3Rvcy5wdXNoKHRoaXMuZmlsZUltZylcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubiA9IHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aCAtIDFcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IG51bGw7XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB3YXRjaDoge1xcclxcbiAgICAgICAgICAgIHBob3Rvcyhudikge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmNhcm91c2VsUGhvdG9zID0gbnYubWFwKChmaWxlKSA9PiBmaWxlLmZpbGUpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAgIC5waG90by1pbnB1dCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnVzZXItcGhvdG8ge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjAwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMWFlZmU7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kZXNjcmlwdGlvbiAudi10ZXh0LWZpZWxkX19zbG90IHRleHRhcmVhIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uZGVzY3JpcHRpb24udi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmFmdGVyICxcXG4uZGVzY3JpcHRpb24udi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmJlZm9yZXtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUmVxdWVzdEVkaXQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF1R0E7SUFDQSx3QkFBQTtBQUNBO0FBQ0E7O0lBRUEsd0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx2LWNvbnRhaW5lclxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJjb3ZlclxcXCI+XFxyXFxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVxcXCJjZW50ZXJcXFwiIGp1c3RpZnk9XFxcImNlbnRlclxcXCIgY2xhc3M9XFxcIm1iLTJcXFwiXFxyXFxuICAgICAgICB2LXRleHQ9XFxcIifQndC+0LLRi9C5INC30LDQv9GA0L7RgScgXFxcIj5cXHJcXG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxcclxcbiAgICAgICAgPHYtY29tYm9ib3hcXHJcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiIXJlcXVlc3Qucm9sZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicmVxdWVzdC5yb2xlXFxcIlxcclxcbiAgICAgICAgICAgICAgICA6ZXJyby1tZXNzYWdlcz1cXFwibWVzc2FnZXMucm9sZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgOml0ZW1zPVxcXCJyb2xlc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgbGFiZWw9XFxcItCa0YPQtNCwXFxcIlxcclxcbiAgICAgICAgICAgICAgICBkZW5zZVxcclxcbiAgICAgICAgPjwvdi1jb21ib2JveD5cXHJcXG4gICAgICAgIDx2LWNvbWJvYm94XFxyXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInJlcXVlc3QudHlwZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVxcXCJtZXNzYWdlcy50eXBlXFxcIlxcclxcbiAgICAgICAgICAgICAgICA6aXRlbXM9XFxcInR5cGVzXFxcIlxcclxcbiAgICAgICAgICAgICAgICBsYWJlbD1cXFwi0KLQuNC/INC30LDRj9Cy0LvQtdC90LjRj1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgZGVuc2VcXHJcXG4gICAgICAgID48L3YtY29tYm9ib3g+XFxyXFxuICAgICAgICA8di10ZXh0YXJlYVxcclxcbiAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxyXFxuICAgICAgICAgICAgbmFtZT1cXFwidGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgbGFiZWw9XFxcItCi0LXQutGB0YIg0LfQsNGP0LLQu9C10L3QuNGPXFxcIlxcclxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcInJlcXVlc3QudGV4dFxcXCJcXHJcXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XFxcIm1lc3NhZ2VzLnRleHRcXFwiXFxyXFxuICAgICAgICAgICAgPlxcclxcbiAgICAgICAgPC92LXRleHRhcmVhPlxcclxcblxcclxcbiAgICAgICAgPHYtYnRuIGNsYXNzPVxcXCJzYXZlLWJ0blxcXCJcXHJcXG4gICAgICAgICAgICAgICB2LWlmPVxcXCIkcm91dGUucGFyYW1zLmlkID09IDBcXFwiXFxyXFxuICAgICAgICAgICAgICAgY29sb3I9XFxcInN1Y2Nlc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgZmFiXFxyXFxuICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJjcmVhdGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCIhKHJlcXVlc3Qucm9sZSAmJiByZXF1ZXN0LnR5cGUgJiYgcmVxdWVzdC50ZXh0KVxcXCJcXHJcXG4gICAgICAgICAgICAgICBkYXJrPlxcclxcbiAgICAgICAgICAgIDx2LWljb24+bWRpLWNoZWNrLW91dGxpbmU8L3YtaWNvbj5cXHJcXG4gICAgICAgIDwvdi1idG4+XFxyXFxuICAgIDwvdi1jb250YWluZXI+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBpbXBvcnQgRWRpdG9yIGZyb20gJ0B0aW55bWNlL3RpbnltY2UtdnVlJztcXHJcXG4gICAgaW1wb3J0IFBob3RvTG9hZGVyIGZyb20gJ0AvY29tcG9uZW50cy9waG90by1sb2FkZXInXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG5hbWU6IFxcXCJSZXF1ZXN0RWRpdFxcXCIsXFxyXFxuICAgICAgICBjb21wb25lbnRzOiB7XFxyXFxuICAgICAgICAgICAgRWRpdG9yLFxcclxcbiAgICAgICAgICAgIFBob3RvTG9hZGVyXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgcmVxdWVzdDoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHZtLiRyb3V0ZS5wYXJhbXMuaWQsXFxyXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxcclxcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogeyB2YWx1ZTp2bS4kcm91dGUucXVlcnkucm9sZX0sXFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgcm9sZXM6IFtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTI4LFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQkiDQsdC40LHQu9C40L7RgtC10LrRgydcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEwMjQsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ9CSINCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNGOJ1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgXSxcXHJcXG4gICAgICAgICAgICAgICAgdHlwZXMgOiB2bS4kc3RvcmUuc3RhdGUudHlwZXMsXFxyXFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogJycsXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbW91bnRlZCgpIHtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgY3JlYXRlKCkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoISh0aGlzLnJlcXVlc3QuaWQgPiAwKSlcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvcmVxdWVzdCcsIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlcXVlc3QudGV4dCxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlOiB0aGlzLnJlcXVlc3Qucm9sZT8udmFsdWUgfHwgbnVsbCxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnJlcXVlc3QudHlwZT8udmFsdWUgfHwgbnVsbCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiBcXFwicmVxdWVzdHNcXFwifSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnJlc3BvbnNlICYmIGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnNcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2tdID0gZXJyb3JzW2tdPy5bMF0gfHwgJyc7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG4gICAgLmRlc2NyaXB0aW9uIC52LXRleHQtZmllbGRfX3Nsb3QgdGV4dGFyZWEge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgIC5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YWZ0ZXIgLFxcclxcbiAgICAuZGVzY3JpcHRpb24udi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmJlZm9yZXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGFiZTQxMWQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGFiZTQxMWQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNGFiZTQxMWRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0YWJlNDExZCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YWJlNDExZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YWJlNDExZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGFiZTQxMWQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGFiZTQxMWQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0VkaXRQaG90b0NhcmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDRhNmEyZWEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDRhNmEyZWEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImQ0YTZhMmVhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDRhNmEyZWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDRhNmEyZWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDRhNmEyZWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNGE2YTJlYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkNGE2YTJlYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0NmZkOGQ5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0NmZkOGQ5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2NDZmZDhkOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY0NmZkOGQ5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY0NmZkOGQ5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY0NmZkOGQ5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0NmZkOGQ5JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY0NmZkOGQ5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZXF1ZXN0RWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTExYjhjODAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVxdWVzdEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZXF1ZXN0RWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUmVxdWVzdEVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUxMWI4YzgwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUxMWI4YzgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUxMWI4YzgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZXF1ZXN0RWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTExYjhjODAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTExYjhjODAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9SZXF1ZXN0RWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVxdWVzdEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVxdWVzdEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtcGhvdG8tY2FyZFwiLFxuICAgICAgY2xhc3M6IHsgZm9jdXNlZDogX3ZtLmZvY3VzLCBmaWxsZWQ6IF92bS5maWxsZWQgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uJGVtaXQoXCJjbGlja1wiLCBfdm0uJGF0dHJzW1widmFsdWVcIl0pXG4gICAgICAgICAgX3ZtLm9wZW4gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS1waG90by1jYXJkLWNvbnRlbnRcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInotaW5kZXhcIjogXCIxXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIF92bS5sb2FkZWQgJiYgX3ZtLnNyY1xuICAgICAgICAgICAgICAgID8gX2MoXCJ2LWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnNyYywgY292ZXI6IFwiXCIsIGhlaWdodDogXCIxMDAlXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6ICFfdm0ubG9hZGVkICYmICFfdm0uZXJyb3JcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYS04XCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgeHM6IFwiMTJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInByb2dyZXNzLWJhclwiLCB7IGF0dHJzOiB7IHByb2dyZXNzOiBfdm0ucHJvZ3Jlc3MgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtcGhvdG8tY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ6LWluZGV4XCI6IFwiMlwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdChcImFjdGlvbnNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBfYyhcInYtcm93XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwbC01IHByLTUgcHQtMlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHhzOiBcIjEyXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLm9wZW5cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgXCJjb250ZW50LWNsYXNzXCI6IFwic20tcGhvdG8tZGlhbG9nXCIsIGZ1bGxzY3JlZW46IHRydWUgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm9wZW4sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLm9wZW4gPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3BlblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkaWFsb2ctaW1hZ2VcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5sb2FkZWQgJiYgX3ZtLnNyY1xuICAgICAgICAgICAgICAgICAgICA/IF9jKFwidi1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uc3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC1oZWlnaHRcIjogXCI5MHZoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW46IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiLCBjb2xvcjogXCJncmF5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJmb2N1c091dFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3BlbiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcIm1kaS1jbG9zZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidi1yb3dcIiwgeyBzdGF0aWNDbGFzczogXCJtYS0wXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWN0aXZlXCIsIHN0eWxlOiB7IHdpZHRoOiBfdm0ucHJvZ3Jlc3MgKyBcIiVcIiB9IH0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jYXJkXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtY29sdW1uXCIsXG4gICAgICBhdHRyczogeyBcImp1c3RpZnktY2VudGVyXCI6IFwiXCIsIFwiYWxpZ24tY2VudGVyXCI6IFwiXCIsIGVsZXZhdGlvbjogXCIwXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInBob3RvLWlucHV0XCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgaWQ6IFwiZmlsZXNcIixcbiAgICAgICAgICBtdWx0aXBsZTogXCJcIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJhemF6XCIsXG4gICAgICAgICAgYWNjZXB0OiBcImltYWdlL2pwZWcsaW1hZ2UvcG5nLGltYWdlL2pwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmFkZFBob3RvIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0ub25lIHx8ICFfdm0uY2Fyb3VzZWxQaG90b3MubGVuZ3RoXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBteS0yXCIsIG9uOiB7IGNsaWNrOiBfdm0uY2xpY2tPbklucHV0IH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQlNC+0LHQsNCy0LjRgtGMINGE0L7RgtC+0LPRgNCw0YTQuNGOXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ub25lICYmIF92bS5sb2FkZWRQaG90b3MubGVuZ3RoXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxvYWRlZFBob3Rvc1swXS5uYW1lKSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0ub25lICYmIF92bS5jYXJvdXNlbFBob3Rvcy5sZW5ndGhcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidXNlci1waG90by1tb2R1bGVcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5jYXJvdXNlbFBob3RvcywgZnVuY3Rpb24ocGhvdG8sIGkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICB7IGtleTogaSwgYXR0cnM6IHsgeHM6IFwiNlwiLCBtZDogXCIzXCIsIHNtOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJlZGl0LXBob3RvLWNhcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWQ6IF92bS5wcmVsb2FkLFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlOiBwaG90byxcbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb3ZlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgIGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoXCLQndC+0LLRi9C5INC30LDQv9GA0L7RgVwiKSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhX3ZtLnJlcXVlc3Qucm9sZVxuICAgICAgICA/IF9jKFwidi1jb21ib2JveFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImVycm8tbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLnJvbGUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBfdm0ucm9sZXMsXG4gICAgICAgICAgICAgIGxhYmVsOiBcItCa0YPQtNCwXCIsXG4gICAgICAgICAgICAgIGRlbnNlOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZXF1ZXN0LnJvbGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucmVxdWVzdCwgXCJyb2xlXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZXF1ZXN0LnJvbGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWNvbWJvYm94XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy50eXBlLFxuICAgICAgICAgIGl0ZW1zOiBfdm0udHlwZXMsXG4gICAgICAgICAgbGFiZWw6IFwi0KLQuNC/INC30LDRj9Cy0LvQtdC90LjRj1wiLFxuICAgICAgICAgIGRlbnNlOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5yZXF1ZXN0LnR5cGUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnJlcXVlc3QsIFwidHlwZVwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInJlcXVlc3QudHlwZVwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0YXJlYVwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgICAgIGxhYmVsOiBcItCi0LXQutGB0YIg0LfQsNGP0LLQu9C10L3QuNGPXCIsXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMudGV4dFxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0ucmVxdWVzdC50ZXh0LFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5yZXF1ZXN0LCBcInRleHRcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJyZXF1ZXN0LnRleHRcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uJHJvdXRlLnBhcmFtcy5pZCA9PSAwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNhdmUtYnRuXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIShcbiAgICAgICAgICAgICAgICAgIF92bS5yZXF1ZXN0LnJvbGUgJiZcbiAgICAgICAgICAgICAgICAgIF92bS5yZXF1ZXN0LnR5cGUgJiZcbiAgICAgICAgICAgICAgICAgIF92bS5yZXF1ZXN0LnRleHRcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jcmVhdGUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLWNoZWNrLW91dGxpbmVcIildKV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGFiZTQxMWQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjIwMDhmOGVhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YWJlNDExZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGFiZTQxMWQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMDhjMjc3OGNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kNGE2YTJlYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjhmM2UzN2NcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kNGE2YTJlYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ0YTZhMmVhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjE4NWRkMmFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjQ2ZmQ4ZDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjQ2ZmQ4ZDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVxdWVzdEVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjdmNDRlMGU1XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVxdWVzdEVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXF1ZXN0RWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==