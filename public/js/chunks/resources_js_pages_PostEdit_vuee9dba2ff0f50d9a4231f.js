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
            formData.append('post_photos[' + i + ']', photo, photo.name);
          });
          formData.append('_method', 'PUT');

          try {
            window.axios.post('/post/' + _this3.post.id, formData);
          } catch (e) {
            _this3.$root.$children[0].snackbarText = "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438";
            _this3.$root.$children[0].snackbar = true;
          }
        }

        _this3.$router.push({
          name: "posts"
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.description .v-text-field__slot textarea {\n    display: none !important;\n}\n.description.v-text-field>.v-input__control>.v-input__slot:after ,\n.description.v-text-field>.v-input__control>.v-input__slot:before{\n    display: none !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/PostEdit.vue"],"names":[],"mappings":";AAoIA;IACA,wBAAA;AACA;AACA;;IAEA,wBAAA;AACA","sourcesContent":["<template>\r\n    <v-container\r\n            class=\"cover\">\r\n        <v-toolbar-title align=\"center\" justify=\"center\" class=\"mb-2\"\r\n        v-text=\"$route.params.id  == 0 ? 'Добавление новости' :  'Редактирование новости'\">\r\n        </v-toolbar-title>\r\n        <v-text-field\r\n            type=\"text\"\r\n            name=\"title\"\r\n            label=\"Заголовок\"\r\n            v-model=\"post.title\"\r\n            :error-messages=\"messages.title\"\r\n            >\r\n        </v-text-field>\r\n        <v-textarea\r\n                name=\"description\"\r\n                label=\"Описание\"\r\n                hint=\"Hint text\"\r\n                :value=\"' '\"\r\n                class=\"description \"\r\n                :error-messages=\"messages.description\"\r\n        ></v-textarea>\r\n        <editor\r\n                api-key=\"kapr0kh0v3vscnkppsxgig98vf6mgitaii8auw3p2pin1c5t\"\r\n                class=\"mt-2\"\r\n                v-model=\"post.description\"\r\n        >\r\n        </editor>\r\n        <v-spacer/>\r\n        <photo-loader ref=\"loader\" :photos=\"post.photos\"/>\r\n        <v-btn class=\"save-btn\"\r\n               v-if=\"$route.params.id == 0\"\r\n               color=\"success\"\r\n               fab\r\n               @click=\"create\"\r\n               :disabled=\"!(post.description && post.title)\"\r\n               dark>\r\n            <v-icon>mdi-plus</v-icon>\r\n        </v-btn>\r\n        <v-btn class=\"save-btn\"\r\n               v-else\r\n               @click=\"update\"\r\n               color=\"success\"\r\n               fab\r\n               dark>\r\n            <v-icon>mdi-check-outline</v-icon>\r\n        </v-btn>\r\n    </v-container>\r\n</template>\r\n\r\n<script>\r\n    import Editor from '@tinymce/tinymce-vue';\r\n    import PhotoLoader from '@/components/photo-loader'\r\n    export default {\r\n        name: \"PostAdd\",\r\n        components: {\r\n            Editor,\r\n            PhotoLoader\r\n        },\r\n        data: (vm) => {\r\n            return {\r\n                post: {\r\n                    id: vm.$route.params.id,\r\n                    title: '',\r\n                    description: '',\r\n                },\r\n                messages: {\r\n                    title: '',\r\n                    description: '',\r\n                }\r\n            }\r\n        },\r\n        mounted() {\r\n            let modelId = this.$route.params.id;\r\n            if (modelId != 0) {\r\n                window.axios.get('/post/'+ modelId).then((response) => {\r\n                    this.post = response.data.data;\r\n                }).catch((e) => {\r\n                    console.log(e);\r\n                    this.$root.$children[0].snackbarText = e?.response?.error || 'Произошла ошибка';\r\n                    this.$root.$children[0].snackbar = true;\r\n                });\r\n            }\r\n        },\r\n        methods: {\r\n            create() {\r\n                window.axios.post('/post', this.post)\r\n                    .then((r) => {\r\n                        this.post.id = r.data.data.id;\r\n                        this.update();\r\n                    }).catch((e) => {\r\n                    if (e.response && e.response.status === 422) {\r\n                        let errors = e.response.data.errors\r\n                        Object.keys(this.messages).forEach((k)=> {\r\n                            this.messages[k] = errors[k]?.[0] || '';\r\n                        });\r\n                    }\r\n                })\r\n            },\r\n             update() {\r\n                window.axios.put('/post/'+ this.post.id, this.post)\r\n                    .then((r) => {\r\n                        let newPhotos = this.$refs.loader.getPhotos();\r\n                        if (newPhotos.length) {\r\n                            const formData = new FormData()\r\n                            newPhotos.forEach((photo, i) => {\r\n                                formData.append('post_photos['+i+']', photo, photo.name)\r\n                            })\r\n                            formData.append('_method', 'PUT')\r\n                            try {\r\n                                window.axios.post('/post/'+this.post.id, formData)\r\n                            } catch (e) {\r\n                                this.$root.$children[0].snackbarText =  `Ошибка сохранения фотографии`\r\n                                this.$root.$children[0].snackbar = true\r\n                            }\r\n                        }\r\n                        this.$router.push({name: \"posts\"});\r\n                    }).catch((e) => {\r\n                    console.log(e);\r\n                    if (e.response && e.response.status === 422) {\r\n                        let errors = e.response.data.errors\r\n                        Object.keys(this.messages).forEach((k)=> {\r\n                            this.messages[k] = errors[k]?.[0] || '';\r\n                        });\r\n                    }\r\n                })\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style>\r\n    .description .v-text-field__slot textarea {\r\n        display: none !important;\r\n    }\r\n    .description.v-text-field>.v-input__control>.v-input__slot:after ,\r\n    .description.v-text-field>.v-input__control>.v-input__slot:before{\r\n        display: none !important;\r\n    }\r\n</style>"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1NjcmlwdExvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL1RpbnlNQ0UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2Nqcy9tYWluL3RzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGlueW1jZS90aW55bWNlLXZ1ZS9saWIvY2pzL21haW4vdHMvY29tcG9uZW50cy9FZGl0b3JQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9janMvbWFpbi90cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZT9jYzM4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0VkaXRQaG90b0NhcmQudnVlP2IwMTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIudnVlPzQwNzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZT82NmEwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qb3N0RWRpdC52dWU/ODdmNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdEVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0VkaXRQaG90b0NhcmQudnVlPzU4MWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIudnVlP2JiNTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZT8yNmVhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qb3N0RWRpdC52dWU/OGQ0MiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZT84M2M3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZT9iYWQ1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWU/MjE3NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdEVkaXQudnVlPzI2NzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWU/YmJmNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZT9hNDJmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZT83NzU5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWU/NzU1NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdEVkaXQudnVlPzA4N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxjQUFjLG1CQUFPLENBQUMsNkVBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxhQUFhLEVBQUU7QUFDMUU7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7Ozs7Ozs7Ozs7OztBQzFEUDtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELDZCQUE2QixrREFBa0QscUJBQU0sRUFBRTtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7Ozs7Ozs7Ozs7O0FDZEw7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7O0FDWGY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsaXJCQUEyVjtBQUNqWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkpBQWlGO0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19wYWdlc19Qb3N0RWRpdF92dWVlOWRiYTJmZjBmNTBkOWE0MjMxZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFV0aWxzXzEgPSByZXF1aXJlKFwiLi9VdGlsc1wiKTtcbnZhciBjcmVhdGVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0ZW5lcnM6IFtdLFxuICAgICAgICBzY3JpcHRJZDogVXRpbHNfMS51dWlkKCd0aW55LXNjcmlwdCcpLFxuICAgICAgICBzY3JpcHRMb2FkZWQ6IGZhbHNlXG4gICAgfTtcbn07XG52YXIgQ3JlYXRlU2NyaXB0TG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0ZSA9IGNyZWF0ZVN0YXRlKCk7XG4gICAgdmFyIGluamVjdFNjcmlwdFRhZyA9IGZ1bmN0aW9uIChzY3JpcHRJZCwgZG9jLCB1cmwsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzY3JpcHRUYWcgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdFRhZy5yZWZlcnJlclBvbGljeSA9ICdvcmlnaW4nO1xuICAgICAgICBzY3JpcHRUYWcudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0VGFnLmlkID0gc2NyaXB0SWQ7XG4gICAgICAgIHNjcmlwdFRhZy5zcmMgPSB1cmw7XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2NyaXB0VGFnLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH07XG4gICAgICAgIHNjcmlwdFRhZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaGFuZGxlcik7XG4gICAgICAgIGlmIChkb2MuaGVhZCkge1xuICAgICAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0VGFnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGxvYWQgPSBmdW5jdGlvbiAoZG9jLCB1cmwsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChzdGF0ZS5zY3JpcHRMb2FkZWQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZS5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoIWRvYy5nZXRFbGVtZW50QnlJZChzdGF0ZS5zY3JpcHRJZCkpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTY3JpcHRUYWcoc3RhdGUuc2NyaXB0SWQsIGRvYywgdXJsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4oKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnNjcmlwdExvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIE9ubHkgdG8gYmUgdXNlZCBieSB0ZXN0cy5cbiAgICB2YXIgcmVpbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGF0ZSA9IGNyZWF0ZVN0YXRlKCk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkOiBsb2FkLFxuICAgICAgICByZWluaXRpYWxpemU6IHJlaW5pdGlhbGl6ZVxuICAgIH07XG59O1xudmFyIFNjcmlwdExvYWRlciA9IENyZWF0ZVNjcmlwdExvYWRlcigpO1xuZXhwb3J0cy5TY3JpcHRMb2FkZXIgPSBTY3JpcHRMb2FkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpOyB9O1xudmFyIGdldFRpbnltY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdsb2JhbCA9IGdldEdsb2JhbCgpO1xuICAgIHJldHVybiBnbG9iYWwgJiYgZ2xvYmFsLnRpbnltY2UgPyBnbG9iYWwudGlueW1jZSA6IG51bGw7XG59O1xuZXhwb3J0cy5nZXRUaW55bWNlID0gZ2V0VGlueW1jZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHZhbGlkRXZlbnRzID0gW1xuICAgICdvbkFjdGl2YXRlJyxcbiAgICAnb25BZGRVbmRvJyxcbiAgICAnb25CZWZvcmVBZGRVbmRvJyxcbiAgICAnb25CZWZvcmVFeGVjQ29tbWFuZCcsXG4gICAgJ29uQmVmb3JlR2V0Q29udGVudCcsXG4gICAgJ29uQmVmb3JlUmVuZGVyVUknLFxuICAgICdvbkJlZm9yZVNldENvbnRlbnQnLFxuICAgICdvbkJlZm9yZVBhc3RlJyxcbiAgICAnb25CbHVyJyxcbiAgICAnb25DaGFuZ2UnLFxuICAgICdvbkNsZWFyVW5kb3MnLFxuICAgICdvbkNsaWNrJyxcbiAgICAnb25Db250ZXh0TWVudScsXG4gICAgJ29uQ29weScsXG4gICAgJ29uQ3V0JyxcbiAgICAnb25EYmxjbGljaycsXG4gICAgJ29uRGVhY3RpdmF0ZScsXG4gICAgJ29uRGlydHknLFxuICAgICdvbkRyYWcnLFxuICAgICdvbkRyYWdEcm9wJyxcbiAgICAnb25EcmFnRW5kJyxcbiAgICAnb25EcmFnR2VzdHVyZScsXG4gICAgJ29uRHJhZ092ZXInLFxuICAgICdvbkRyb3AnLFxuICAgICdvbkV4ZWNDb21tYW5kJyxcbiAgICAnb25Gb2N1cycsXG4gICAgJ29uRm9jdXNJbicsXG4gICAgJ29uRm9jdXNPdXQnLFxuICAgICdvbkdldENvbnRlbnQnLFxuICAgICdvbkhpZGUnLFxuICAgICdvbkluaXQnLFxuICAgICdvbktleURvd24nLFxuICAgICdvbktleVByZXNzJyxcbiAgICAnb25LZXlVcCcsXG4gICAgJ29uTG9hZENvbnRlbnQnLFxuICAgICdvbk1vdXNlRG93bicsXG4gICAgJ29uTW91c2VFbnRlcicsXG4gICAgJ29uTW91c2VMZWF2ZScsXG4gICAgJ29uTW91c2VNb3ZlJyxcbiAgICAnb25Nb3VzZU91dCcsXG4gICAgJ29uTW91c2VPdmVyJyxcbiAgICAnb25Nb3VzZVVwJyxcbiAgICAnb25Ob2RlQ2hhbmdlJyxcbiAgICAnb25PYmplY3RSZXNpemVTdGFydCcsXG4gICAgJ29uT2JqZWN0UmVzaXplZCcsXG4gICAgJ29uT2JqZWN0U2VsZWN0ZWQnLFxuICAgICdvblBhc3RlJyxcbiAgICAnb25Qb3N0UHJvY2VzcycsXG4gICAgJ29uUG9zdFJlbmRlcicsXG4gICAgJ29uUHJlUHJvY2VzcycsXG4gICAgJ29uUHJvZ3Jlc3NTdGF0ZScsXG4gICAgJ29uUmVkbycsXG4gICAgJ29uUmVtb3ZlJyxcbiAgICAnb25SZXNldCcsXG4gICAgJ29uU2F2ZUNvbnRlbnQnLFxuICAgICdvblNlbGVjdGlvbkNoYW5nZScsXG4gICAgJ29uU2V0QXR0cmliJyxcbiAgICAnb25TZXRDb250ZW50JyxcbiAgICAnb25TaG93JyxcbiAgICAnb25TdWJtaXQnLFxuICAgICdvblVuZG8nLFxuICAgICdvblZpc3VhbEFpZCdcbl07XG52YXIgaXNWYWxpZEtleSA9IGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHZhbGlkRXZlbnRzLm1hcChmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIGV2ZW50LnRvTG93ZXJDYXNlKCk7IH0pLmluZGV4T2Yoa2V5LnRvTG93ZXJDYXNlKCkpICE9PSAtMTsgfTtcbmV4cG9ydHMuaXNWYWxpZEtleSA9IGlzVmFsaWRLZXk7XG52YXIgYmluZEhhbmRsZXJzID0gZnVuY3Rpb24gKGluaXRFdmVudCwgbGlzdGVuZXJzLCBlZGl0b3IpIHtcbiAgICBPYmplY3Qua2V5cyhsaXN0ZW5lcnMpXG4gICAgICAgIC5maWx0ZXIoaXNWYWxpZEtleSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgaGFuZGxlciA9IGxpc3RlbmVyc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdvbkluaXQnKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihpbml0RXZlbnQsIGVkaXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlZGl0b3Iub24oa2V5LnN1YnN0cmluZygyKSwgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGhhbmRsZXIoZSwgZWRpdG9yKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnRzLmJpbmRIYW5kbGVycyA9IGJpbmRIYW5kbGVycztcbnZhciBiaW5kTW9kZWxIYW5kbGVycyA9IGZ1bmN0aW9uIChjdHgsIGVkaXRvcikge1xuICAgIHZhciBtb2RlbEV2ZW50cyA9IGN0eC4kcHJvcHMubW9kZWxFdmVudHMgPyBjdHguJHByb3BzLm1vZGVsRXZlbnRzIDogbnVsbDtcbiAgICB2YXIgbm9ybWFsaXplZEV2ZW50cyA9IEFycmF5LmlzQXJyYXkobW9kZWxFdmVudHMpID8gbW9kZWxFdmVudHMuam9pbignICcpIDogbW9kZWxFdmVudHM7XG4gICAgZWRpdG9yLm9uKG5vcm1hbGl6ZWRFdmVudHMgPyBub3JtYWxpemVkRXZlbnRzIDogJ2NoYW5nZSBpbnB1dCB1bmRvIHJlZG8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN0eC4kZW1pdCgnaW5wdXQnLCBlZGl0b3IuZ2V0Q29udGVudCh7IGZvcm1hdDogY3R4LiRwcm9wcy5vdXRwdXRGb3JtYXQgfSkpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuYmluZE1vZGVsSGFuZGxlcnMgPSBiaW5kTW9kZWxIYW5kbGVycztcbnZhciBpbml0RWRpdG9yID0gZnVuY3Rpb24gKGluaXRFdmVudCwgY3R4LCBlZGl0b3IpIHtcbiAgICB2YXIgdmFsdWUgPSBjdHguJHByb3BzLnZhbHVlID8gY3R4LiRwcm9wcy52YWx1ZSA6ICcnO1xuICAgIHZhciBpbml0aWFsVmFsdWUgPSBjdHguJHByb3BzLmluaXRpYWxWYWx1ZSA/IGN0eC4kcHJvcHMuaW5pdGlhbFZhbHVlIDogJyc7XG4gICAgZWRpdG9yLnNldENvbnRlbnQodmFsdWUgfHwgKGN0eC5pbml0aWFsaXplZCA/IGN0eC5jYWNoZSA6IGluaXRpYWxWYWx1ZSkpO1xuICAgIC8vIEFsd2F5cyBiaW5kIHRoZSB2YWx1ZSBsaXN0ZW5lciBpbiBjYXNlIHVzZXJzIHVzZSA6dmFsdWUgaW5zdGVhZCBvZiB2LW1vZGVsXG4gICAgY3R4LiR3YXRjaCgndmFsdWUnLCBmdW5jdGlvbiAodmFsLCBwcmV2VmFsKSB7XG4gICAgICAgIGlmIChlZGl0b3IgJiYgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgdmFsICE9PSBwcmV2VmFsICYmIHZhbCAhPT0gZWRpdG9yLmdldENvbnRlbnQoeyBmb3JtYXQ6IGN0eC4kcHJvcHMub3V0cHV0Rm9ybWF0IH0pKSB7XG4gICAgICAgICAgICBlZGl0b3Iuc2V0Q29udGVudCh2YWwpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gY2hlY2tzIGlmIHRoZSB2LW1vZGVsIHNob3J0aGFuZCBpcyB1c2VkICh3aGljaCBzZXRzIGFuIHYtb246aW5wdXQgbGlzdGVuZXIpIGFuZCB0aGVuIGJpbmRzIGVpdGhlclxuICAgIC8vIHNwZWNpZmllZCB0aGUgZXZlbnRzIG9yIGRlZmF1bHRzIHRvIFwiY2hhbmdlIGtleXVwXCIgZXZlbnQgYW5kIGVtaXRzIHRoZSBlZGl0b3IgY29udGVudCBvbiB0aGF0IGV2ZW50XG4gICAgaWYgKGN0eC4kbGlzdGVuZXJzLmlucHV0KSB7XG4gICAgICAgIGJpbmRNb2RlbEhhbmRsZXJzKGN0eCwgZWRpdG9yKTtcbiAgICB9XG4gICAgYmluZEhhbmRsZXJzKGluaXRFdmVudCwgY3R4LiRsaXN0ZW5lcnMsIGVkaXRvcik7XG4gICAgY3R4LmluaXRpYWxpemVkID0gdHJ1ZTtcbn07XG5leHBvcnRzLmluaXRFZGl0b3IgPSBpbml0RWRpdG9yO1xudmFyIHVuaXF1ZSA9IDA7XG52YXIgdXVpZCA9IGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDApO1xuICAgIHVuaXF1ZSsrO1xuICAgIHJldHVybiBwcmVmaXggKyAnXycgKyByYW5kb20gKyB1bmlxdWUgKyBTdHJpbmcodGltZSk7XG59O1xuZXhwb3J0cy51dWlkID0gdXVpZDtcbnZhciBpc1RleHRhcmVhID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RleHRhcmVhJztcbn07XG5leHBvcnRzLmlzVGV4dGFyZWEgPSBpc1RleHRhcmVhO1xudmFyIG5vcm1hbGl6ZVBsdWdpbkFycmF5ID0gZnVuY3Rpb24gKHBsdWdpbnMpIHtcbiAgICBpZiAodHlwZW9mIHBsdWdpbnMgPT09ICd1bmRlZmluZWQnIHx8IHBsdWdpbnMgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGx1Z2lucykgPyBwbHVnaW5zIDogcGx1Z2lucy5zcGxpdCgnICcpO1xufTtcbnZhciBtZXJnZVBsdWdpbnMgPSBmdW5jdGlvbiAoaW5pdFBsdWdpbnMsIGlucHV0UGx1Z2lucykge1xuICAgIHJldHVybiBub3JtYWxpemVQbHVnaW5BcnJheShpbml0UGx1Z2lucykuY29uY2F0KG5vcm1hbGl6ZVBsdWdpbkFycmF5KGlucHV0UGx1Z2lucykpO1xufTtcbmV4cG9ydHMubWVyZ2VQbHVnaW5zID0gbWVyZ2VQbHVnaW5zO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkOyB9O1xuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNjcmlwdExvYWRlcl8xID0gcmVxdWlyZShcIi4uL1NjcmlwdExvYWRlclwiKTtcbnZhciBUaW55TUNFXzEgPSByZXF1aXJlKFwiLi4vVGlueU1DRVwiKTtcbnZhciBVdGlsc18xID0gcmVxdWlyZShcIi4uL1V0aWxzXCIpO1xudmFyIEVkaXRvclByb3BUeXBlc18xID0gcmVxdWlyZShcIi4vRWRpdG9yUHJvcFR5cGVzXCIpO1xudmFyIHJlbmRlcklubGluZSA9IGZ1bmN0aW9uIChoLCBpZCwgdGFnTmFtZSkge1xuICAgIHJldHVybiBoKHRhZ05hbWUgPyB0YWdOYW1lIDogJ2RpdicsIHtcbiAgICAgICAgYXR0cnM6IHsgaWQ6IGlkIH1cbiAgICB9KTtcbn07XG52YXIgcmVuZGVySWZyYW1lID0gZnVuY3Rpb24gKGgsIGlkKSB7XG4gICAgcmV0dXJuIGgoJ3RleHRhcmVhJywge1xuICAgICAgICBhdHRyczogeyBpZDogaWQgfSxcbiAgICAgICAgc3R5bGU6IHsgdmlzaWJpbGl0eTogJ2hpZGRlbicgfVxuICAgIH0pO1xufTtcbnZhciBpbml0aWFsaXNlID0gZnVuY3Rpb24gKGN0eCkgeyByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmaW5hbEluaXQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY3R4LiRwcm9wcy5pbml0KSwgeyByZWFkb25seTogY3R4LiRwcm9wcy5kaXNhYmxlZCwgc2VsZWN0b3I6IFwiI1wiICsgY3R4LmVsZW1lbnRJZCwgcGx1Z2luczogVXRpbHNfMS5tZXJnZVBsdWdpbnMoY3R4LiRwcm9wcy5pbml0ICYmIGN0eC4kcHJvcHMuaW5pdC5wbHVnaW5zLCBjdHguJHByb3BzLnBsdWdpbnMpLCB0b29sYmFyOiBjdHguJHByb3BzLnRvb2xiYXIgfHwgKGN0eC4kcHJvcHMuaW5pdCAmJiBjdHguJHByb3BzLmluaXQudG9vbGJhciksIGlubGluZTogY3R4LmlubGluZUVkaXRvciwgc2V0dXA6IGZ1bmN0aW9uIChlZGl0b3IpIHtcbiAgICAgICAgICAgIGN0eC5lZGl0b3IgPSBlZGl0b3I7XG4gICAgICAgICAgICBlZGl0b3Iub24oJ2luaXQnLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gVXRpbHNfMS5pbml0RWRpdG9yKGUsIGN0eCwgZWRpdG9yKTsgfSk7XG4gICAgICAgICAgICBpZiAoY3R4LiRwcm9wcy5pbml0ICYmIHR5cGVvZiBjdHguJHByb3BzLmluaXQuc2V0dXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjdHguJHByb3BzLmluaXQuc2V0dXAoZWRpdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB9KTtcbiAgICBpZiAoVXRpbHNfMS5pc1RleHRhcmVhKGN0eC5lbGVtZW50KSkge1xuICAgICAgICBjdHguZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XG4gICAgICAgIGN0eC5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9XG4gICAgVGlueU1DRV8xLmdldFRpbnltY2UoKS5pbml0KGZpbmFsSW5pdCk7XG59OyB9O1xuZXhwb3J0cy5FZGl0b3IgPSB7XG4gICAgcHJvcHM6IEVkaXRvclByb3BUeXBlc18xLmVkaXRvclByb3BzLFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50SWQgPSB0aGlzLiRwcm9wcy5pZCB8fCBVdGlsc18xLnV1aWQoJ3RpbnktdnVlJyk7XG4gICAgICAgIHRoaXMuaW5saW5lRWRpdG9yID0gKHRoaXMuJHByb3BzLmluaXQgJiYgdGhpcy4kcHJvcHMuaW5pdC5pbmxpbmUpIHx8IHRoaXMuJHByb3BzLmlubGluZTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLnNldE1vZGUodGhpcy5kaXNhYmxlZCA/ICdyZWFkb25seScgOiAnZGVzaWduJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy4kZWw7XG4gICAgICAgIGlmIChUaW55TUNFXzEuZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpbml0aWFsaXNlKHRoaXMpKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgICB2YXIgY2hhbm5lbCA9IHRoaXMuJHByb3BzLmNsb3VkQ2hhbm5lbCA/IHRoaXMuJHByb3BzLmNsb3VkQ2hhbm5lbCA6ICc1JztcbiAgICAgICAgICAgIHZhciBhcGlLZXkgPSB0aGlzLiRwcm9wcy5hcGlLZXkgPyB0aGlzLiRwcm9wcy5hcGlLZXkgOiAnbm8tYXBpLWtleSc7XG4gICAgICAgICAgICB2YXIgc2NyaXB0U3JjID0gVXRpbHNfMS5pc051bGxPclVuZGVmaW5lZCh0aGlzLiRwcm9wcy50aW55bWNlU2NyaXB0U3JjKSA/XG4gICAgICAgICAgICAgICAgXCJodHRwczovL2Nkbi50aW55LmNsb3VkLzEvXCIgKyBhcGlLZXkgKyBcIi90aW55bWNlL1wiICsgY2hhbm5lbCArIFwiL3RpbnltY2UubWluLmpzXCIgOlxuICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLnRpbnltY2VTY3JpcHRTcmM7XG4gICAgICAgICAgICBTY3JpcHRMb2FkZXJfMS5TY3JpcHRMb2FkZXIubG9hZCh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudCwgc2NyaXB0U3JjLCBpbml0aWFsaXNlKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoVGlueU1DRV8xLmdldFRpbnltY2UoKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgVGlueU1DRV8xLmdldFRpbnltY2UoKS5yZW1vdmUodGhpcy5lZGl0b3IpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkZWFjdGl2YXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5pbmxpbmVFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUgPSB0aGlzLmVkaXRvci5nZXRDb250ZW50KCk7XG4gICAgICAgICAgICAoX2EgPSBUaW55TUNFXzEuZ2V0VGlueW1jZSgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlKHRoaXMuZWRpdG9yKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWN0aXZhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbmxpbmVFZGl0b3IgJiYgdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgaW5pdGlhbGlzZSh0aGlzKSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlubGluZUVkaXRvciA/IHJlbmRlcklubGluZShoLCB0aGlzLmVsZW1lbnRJZCwgdGhpcy4kcHJvcHMudGFnTmFtZSkgOiByZW5kZXJJZnJhbWUoaCwgdGhpcy5lbGVtZW50SWQpO1xuICAgIH1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZWRpdG9yUHJvcHMgPSB7XG4gICAgYXBpS2V5OiBTdHJpbmcsXG4gICAgY2xvdWRDaGFubmVsOiBTdHJpbmcsXG4gICAgaWQ6IFN0cmluZyxcbiAgICBpbml0OiBPYmplY3QsXG4gICAgaW5pdGlhbFZhbHVlOiBTdHJpbmcsXG4gICAgaW5saW5lOiBCb29sZWFuLFxuICAgIG1vZGVsRXZlbnRzOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgcGx1Z2luczogW1N0cmluZywgQXJyYXldLFxuICAgIHRhZ05hbWU6IFN0cmluZyxcbiAgICB0b29sYmFyOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgdmFsdWU6IFN0cmluZyxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICB0aW55bWNlU2NyaXB0U3JjOiBTdHJpbmcsXG4gICAgb3V0cHV0Rm9ybWF0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gcHJvcCA9PT0gJ2h0bWwnIHx8IHByb3AgPT09ICd0ZXh0JzsgfVxuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRWRpdG9yXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL0VkaXRvclwiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEVkaXRvcl8xLkVkaXRvcjtcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJzaXRlLXBob3RvLWNhcmRcIlxyXG4gICAgICAgICA6Y2xhc3M9XCJ7Zm9jdXNlZDogZm9jdXMsIGZpbGxlZH1cIlxyXG4gICAgICAgICBAY2xpY2s9XCIkZW1pdCgnY2xpY2snLCAkYXR0cnNbJ3ZhbHVlJ10pOyBvcGVuPXRydWVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1waG90by1jYXJkLWNvbnRlbnRcIiBzdHlsZT1cInotaW5kZXg6IDE7XCI+XHJcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICA8di1pbWcgdi1pZj1cImxvYWRlZCAmJiBzcmNcIiA6c3JjPVwic3JjXCIgY292ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCIvPlxyXG4gICAgICAgICAgICAgICAgPHYtcm93IHYtZWxzZS1pZj1cIiFsb2FkZWQgJiYgIWVycm9yXCIgeHM9XCIxMlwiIGNsYXNzPVwicGEtOFwiIHN0eWxlPVwiYWxpZ24taXRlbXM6IGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwcm9ncmVzcy1iYXIgOnByb2dyZXNzPVwicHJvZ3Jlc3NcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxyXG4gICAgICAgICAgICA8L3Nsb3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtcGhvdG8tY2FyZC1hY3Rpb25zXCIgc3R5bGU9XCJ6LWluZGV4OiAyO1wiPlxyXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPHYtcm93IHhzPVwiMTJcIiBjbGFzcz1cInBsLTUgcHItNSBwdC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxyXG4gICAgICAgICAgICA8L3Nsb3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJvcGVuXCIgdi1pZj1cIm9wZW5cIiBjb250ZW50LWNsYXNzPVwic20tcGhvdG8tZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgICAgOmZ1bGxzY3JlZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDx2LWltZyB2LWlmPVwibG9hZGVkICYmIHNyY1wiIDpzcmM9XCJzcmNcIiBtYXgtaGVpZ2h0PVwiOTB2aFwiIGNvbnRhaW4vPlxyXG4gICAgICAgICAgICAgICAgPHYtYnRuIGljb24gQGNsaWNrPVwiJGVtaXQoJ2ZvY3VzT3V0Jyk7IG9wZW49ZmFsc2U7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xvc2UtYnRuXCIgPjx2LWljb24+bWRpLWNsb3NlPC92LWljb24+PC92LWJ0bj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC92LWRpYWxvZz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7YjY0VG9CbG9iLCBjb21wcmVzc30gZnJvbSBcIi4uLy4uL2ltYWdlXCI7XHJcbiAgICBpbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJFZGl0UGhvdG9DYXJkXCIsXHJcbiAgICAgICAgY29tcG9uZW50czoge1Byb2dyZXNzQmFyfSxcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBmb2N1czoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlLH0sXHJcbiAgICAgICAgICAgIHByZWxvYWQ6IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlLH0sXHJcbiAgICAgICAgICAgIGNvdmVyOiB7dHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwifSxcclxuICAgICAgICAgICAgZmlsbGVkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2V9LFxyXG4gICAgICAgICAgICBmaWxlOiB7dHlwZTogRmlsZSB8IFN0cmluZ31cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6ICh2bSkgPT4gKHtcclxuICAgICAgICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvY3VzZWQ6ICEhdm0uJGF0dHJzWydmb2N1cyddLFxyXG4gICAgICAgICAgICBzcmM6ICcnLFxyXG4gICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAwLFxyXG4gICAgICAgICAgICByb3RhdGVUaW1lb3V0OiBudWxsLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkKHRoaXMuZmlsZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIGlzQ292ZXIoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb3ZlciAmJiB0aGlzLnNyYy5pbmRleE9mKHRoaXMuY292ZXIpICE9PSAtMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIHJvdGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvdGF0ZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yb3RhdGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29tcHJlc3NVcmwgPSBjb21wcmVzcyhpbWcsIChjdHgsIGNhbnZhcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSg5MCAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIC1pbWcud2lkdGggLyAyLCAtaW1nLndpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBiNjRUb0Jsb2IoY29tcHJlc3NVcmwuc3BsaXQoJywnKVsxXSwgJ2ltYWdlL2pwZWcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWQoYmxvYiwgdGhpcy5zcmMuc3BsaXQoJy8nKS5yZXZlcnNlKClbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMuc3JjO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVhZExvY2FsU3JjKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGUgaW5zdGFuY2VvZiBCbG9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcmMgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLnNyYylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgdGhpcy5zcmMgPSBmaWxlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cGxvYWQoZmlsZSwgY2FudmFzRmlsZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcmVsb2FkIHx8ICEoZmlsZSBpbnN0YW5jZW9mIEJsb2IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkTG9jYWxTcmMoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXHJcbiAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGNhbnZhc0ZpbGVOYW1lIHx8IGZpbGUubmFtZSlcclxuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgJy9waG90by91cGxvYWQnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gKGUubG9hZGVkICogMTAwLjAgLyBlLnRvdGFsKSB8fCAxMDA7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gZS50YXJnZXQucmVzcG9uc2UudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBlLnRhcmdldC5yZXNwb25zZS51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDQwMCAmJiAhY2FudmFzRmlsZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v0JTQu9GPINGE0LDQudC70L7QsiDRgSDQsdC40YLRi9C8INC80LDQudC80YLQuNC/0L7QvCDRgNC40YHRg9C10Lwg0L3QsCDQutCw0L3QstC1INC4INC+0YLQv9GA0LDQstC70Y/QtdC8INGA0LXQt9GD0LvRjNGC0LDRglxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29tcHJlc3NVcmwgPSBjb21wcmVzcyhpbWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBibG9iID0gYjY0VG9CbG9iKGNvbXByZXNzVXJsLnNwbGl0KCcsJylbMV0sICdpbWFnZS9qcGVnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWQoYmxvYiwgZmlsZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRMb2NhbFNyYyhmaWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgIGZpbGUobnYpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbnYgPT09ICdzdHJpbmcnKSB0aGlzLnNyYyA9IG52O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuc2l0ZS1waG90by1jYXJkIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAvKiBHcmV5IDgwMCAqL1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1waG90by1jYXJkLmZpbGxlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1waG90by1jYXJkLmZvY3VzZWQsIC5zaXRlLXBob3RvLWNhcmQ6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IHJnYmEoMTQwLCAxNDAsIDE0MCwgMC40OSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXRlLXBob3RvLWNhcmQ6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDU2JTsgLyogMTYvOSAqL1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXRlLXBob3RvLWNhcmQtYWN0aW9ucyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpdGUtcGhvdG8tY2FyZC1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdC1waG90by1pY29uIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c3R5bGU+XHJcblxyXG4gICAgLnNtLXBob3RvLWRpYWxvZyAucGhvdG8tY292ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDMycHg7XHJcbiAgICAgICAgbGVmdDogMzJweDtcclxuICAgICAgICB6LWluZGV4OiAxMDE7XHJcbiAgICB9XHJcblxyXG4gICAgLnNtLXBob3RvLWRpYWxvZyAuY2xvc2UtYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzMnB4O1xyXG4gICAgICAgIHJpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zbS1waG90by1kaWFsb2cgLmJvdHRvbSB7XHJcbiAgICAgICAgcmlnaHQ6IDMycHg7XHJcbiAgICAgICAgYm90dG9tOiAzMnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG5cclxuICAgIC5zbS1waG90by1kaWFsb2cge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMDUsIDEwOSwgMTE2LCAwLjYpO1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaWFsb2ctaW1hZ2UgLnYtaW1hZ2V7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgfVxyXG4gICAgLmRpYWxvZy1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8di1yb3cgY2xhc3M9XCJtYS0wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGl2ZVwiIDpzdHlsZT1cInt3aWR0aDogcHJvZ3Jlc3MrJyUnfVwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvdi1yb3c+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIHByb3BzOiBbJ3Byb2dyZXNzJ10sXHJcbiAgICAgICAgbmFtZTogXCJQcm9ncmVzc0JhclwiXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5mdWxse1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTFFMUUxO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuICAgIC5hY3RpdmV7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzJlM2U0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8di1jYXJkIGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uXCIganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIGVsZXZhdGlvbj1cIjBcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZmlsZXNcIlxyXG4gICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJhZGRQaG90b1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBob3RvLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYXphelwiXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9qcGVnLGltYWdlL3BuZyxpbWFnZS9qcGdcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cImJ0biBteS0yXCIgQGNsaWNrPVwiY2xpY2tPbklucHV0XCIgdi1pZj1cIiFvbmUgfHwgIWNhcm91c2VsUGhvdG9zLmxlbmd0aFwiPtCU0L7QsdCw0LLQuNGC0Ywg0YTQvtGC0L7Qs9GA0LDRhNC40Y48L3YtYnRuPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cIm9uZSAmJiBsb2FkZWRQaG90b3MubGVuZ3RoXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7bG9hZGVkUGhvdG9zWzBdLm5hbWV9fTwvZGl2PlxyXG4gICAgICAgIDx2LXJvdyB2LWlmPVwiIW9uZSAmJiBjYXJvdXNlbFBob3Rvcy5sZW5ndGhcIiBjbGFzcz1cInVzZXItcGhvdG8tbW9kdWxlXCI+XHJcbiAgICAgICAgICAgIDx2LWNvbCB4cz1cIjZcIiBtZD1cIjNcIiBzbT1cIjZcIiB2LWZvcj1cIihwaG90bywgaSkgaW4gY2Fyb3VzZWxQaG90b3NcIiA6a2V5PVwiaVwiPlxyXG4gICAgICAgICAgICAgICAgPGVkaXQtcGhvdG8tY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6cHJlbG9hZD1cInByZWxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmlsbGVkPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmaWxlPVwicGhvdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L2VkaXQtcGhvdG8tY2FyZD5cclxuICAgICAgICAgICAgPC92LWNvbD5cclxuICAgICAgICA8L3Ytcm93PlxyXG4gICAgPC92LWNhcmQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuICAgIGltcG9ydCBFZGl0UGhvdG9DYXJkIGZyb20gXCIuL0VkaXRQaG90b0NhcmRcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogJ3Bob3RvLWxvYWRlcicsXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcmFkaXVzOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwaG90b3M6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gKFtdKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJlbG9hZDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wb25lbnRzOiB7RWRpdFBob3RvQ2FyZH0sXHJcbiAgICAgICAgZGF0YTogKHZtKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgbjogMCxcclxuICAgICAgICAgICAgICAgIHBob3RvOiAnJyxcclxuICAgICAgICAgICAgICAgIGxvYWRlZFBob3RvczogW10sXHJcbiAgICAgICAgICAgICAgICBjYXJvdXNlbFBob3Rvczogdm0ucGhvdG9zLFxyXG4gICAgICAgICAgICAgICAgZmlsZUltZzogbnVsbCxcclxuICAgICAgICB9KSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGdldFBob3RvcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRlZFBob3RvcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0Rmlyc3QoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkZWRQaG90b3NbMF07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJldHVybkZvcm1EYXRhKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2F2ZS1waG90bycsIHZhbClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBkYXRlUGhvdG8odmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBob3RvID0gdmFsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDcm9wcGVyRGlhbG9nID0gZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xpY2tPbklucHV0KCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVzJykuZmlsZXMgPSAobmV3IERhdGFUcmFuc2ZlcigpKS5maWxlcztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmNsaWNrKClcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFkZFBob3RvKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBbLi4uZXZlbnQudGFyZ2V0LmZpbGVzXS5mb3JFYWNoKChwaG90bykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IHBob3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVJbWcuc2l6ZSA+IDUwMjQwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gJ9Cg0LDQt9C80LXRgCDRhNCw0LnQu9CwINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQsdC+0LvRjNGI0LUgNdCc0JEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRlZFBob3Rvcy5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0JLRiyDQvdC1INC80L7QttC10YLQtSDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LHQvtC70YzRiNC1IDEwINGE0L7RgtC+0LPRgNCw0YTQuNC5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcm91c2VsUGhvdG9zLnB1c2godGhpcy5wcmVsb2FkID8gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLmZpbGVJbWcpIDogdGhpcy5maWxlSW1nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkUGhvdG9zLnB1c2godGhpcy5maWxlSW1nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubiA9IHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbWcgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgIHBob3Rvcyhudikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJvdXNlbFBob3RvcyA9IG52Lm1hcCgoZmlsZSkgPT4gZmlsZS5maWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLnBob3RvLWlucHV0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLXBob3RvIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMWFlZmU7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDx2LWNvbnRhaW5lclxyXG4gICAgICAgICAgICBjbGFzcz1cImNvdmVyXCI+XHJcbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxyXG4gICAgICAgIHYtdGV4dD1cIiRyb3V0ZS5wYXJhbXMuaWQgID09IDAgPyAn0JTQvtCx0LDQstC70LXQvdC40LUg0L3QvtCy0L7RgdGC0LgnIDogICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC90L7QstC+0YHRgtC4J1wiPlxyXG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxyXG4gICAgICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cItCX0LDQs9C+0LvQvtCy0L7QulwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJwb3N0LnRpdGxlXCJcclxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMudGl0bGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgPC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgPHYtdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCe0L/QuNGB0LDQvdC40LVcIlxyXG4gICAgICAgICAgICAgICAgaGludD1cIkhpbnQgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCInICdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGlvbiBcIlxyXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMuZGVzY3JpcHRpb25cIlxyXG4gICAgICAgID48L3YtdGV4dGFyZWE+XHJcbiAgICAgICAgPGVkaXRvclxyXG4gICAgICAgICAgICAgICAgYXBpLWtleT1cImthcHIwa2gwdjN2c2Nua3Bwc3hnaWc5OHZmNm1naXRhaWk4YXV3M3AycGluMWM1dFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm10LTJcIlxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInBvc3QuZGVzY3JpcHRpb25cIlxyXG4gICAgICAgID5cclxuICAgICAgICA8L2VkaXRvcj5cclxuICAgICAgICA8di1zcGFjZXIvPlxyXG4gICAgICAgIDxwaG90by1sb2FkZXIgcmVmPVwibG9hZGVyXCIgOnBob3Rvcz1cInBvc3QucGhvdG9zXCIvPlxyXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cInNhdmUtYnRuXCJcclxuICAgICAgICAgICAgICAgdi1pZj1cIiRyb3V0ZS5wYXJhbXMuaWQgPT0gMFwiXHJcbiAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgIGZhYlxyXG4gICAgICAgICAgICAgICBAY2xpY2s9XCJjcmVhdGVcIlxyXG4gICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhKHBvc3QuZGVzY3JpcHRpb24gJiYgcG9zdC50aXRsZSlcIlxyXG4gICAgICAgICAgICAgICBkYXJrPlxyXG4gICAgICAgICAgICA8di1pY29uPm1kaS1wbHVzPC92LWljb24+XHJcbiAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICA8di1idG4gY2xhc3M9XCJzYXZlLWJ0blwiXHJcbiAgICAgICAgICAgICAgIHYtZWxzZVxyXG4gICAgICAgICAgICAgICBAY2xpY2s9XCJ1cGRhdGVcIlxyXG4gICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgZGFyaz5cclxuICAgICAgICAgICAgPHYtaWNvbj5tZGktY2hlY2stb3V0bGluZTwvdi1pY29uPlxyXG4gICAgICAgIDwvdi1idG4+XHJcbiAgICA8L3YtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBFZGl0b3IgZnJvbSAnQHRpbnltY2UvdGlueW1jZS12dWUnO1xyXG4gICAgaW1wb3J0IFBob3RvTG9hZGVyIGZyb20gJ0AvY29tcG9uZW50cy9waG90by1sb2FkZXInXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJQb3N0QWRkXCIsXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBFZGl0b3IsXHJcbiAgICAgICAgICAgIFBob3RvTG9hZGVyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiAodm0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBvc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdm0uJHJvdXRlLnBhcmFtcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgbGV0IG1vZGVsSWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgIGlmIChtb2RlbElkICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy9wb3N0LycrIG1vZGVsSWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSBlPy5yZXNwb25zZT8uZXJyb3IgfHwgJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvcG9zdCcsIHRoaXMucG9zdClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QuaWQgPSByLmRhdGEuZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnJlc3BvbnNlICYmIGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2tdID0gZXJyb3JzW2tdPy5bMF0gfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucHV0KCcvcG9zdC8nKyB0aGlzLnBvc3QuaWQsIHRoaXMucG9zdClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGhvdG9zID0gdGhpcy4kcmVmcy5sb2FkZXIuZ2V0UGhvdG9zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQaG90b3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQaG90b3MuZm9yRWFjaCgocGhvdG8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bvc3RfcGhvdG9zWycraSsnXScsIHBob3RvLCBwaG90by5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnX21ldGhvZCcsICdQVVQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL3Bvc3QvJyt0aGlzLnBvc3QuaWQsIGZvcm1EYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9ICBg0J7RiNC40LHQutCwINGB0L7RhdGA0LDQvdC10L3QuNGPINGE0L7RgtC+0LPRgNCw0YTQuNC4YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiBcInBvc3RzXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnJlc3BvbnNlICYmIGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2tdID0gZXJyb3JzW2tdPy5bMF0gfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmRlc2NyaXB0aW9uIC52LXRleHQtZmllbGRfX3Nsb3QgdGV4dGFyZWEge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YWZ0ZXIgLFxyXG4gICAgLmRlc2NyaXB0aW9uLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDpiZWZvcmV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG48L3N0eWxlPiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNpdGUtcGhvdG8tY2FyZFtkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gICAgLyogR3JleSA4MDAgKi9cXG5cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc2l0ZS1waG90by1jYXJkLmZpbGxlZFtkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcXG59XFxuLnNpdGUtcGhvdG8tY2FyZC5mb2N1c2VkW2RhdGEtdi00YWJlNDExZF0sIC5zaXRlLXBob3RvLWNhcmRbZGF0YS12LTRhYmU0MTFkXTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IHJnYmEoMTQwLCAxNDAsIDE0MCwgMC40OSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnNpdGUtcGhvdG8tY2FyZFtkYXRhLXYtNGFiZTQxMWRdOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYlOyAvKiAxNi85ICovXFxufVxcbi5zaXRlLXBob3RvLWNhcmQtYWN0aW9uc1tkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaXRlLXBob3RvLWNhcmQtY29udGVudFtkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmVkaXQtcGhvdG8taWNvbltkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQStJQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTs7SUFFQSxrQkFBQTtJQUNBLGdCQUFBO0FBQ0E7QUFFQTtJQUNBLHlCQUFBO0FBQ0E7QUFFQTtJQUNBLGlEQUFBO0lBQ0Esa0JBQUE7QUFDQTtBQUVBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQSxFQUFBLFNBQUE7QUFDQTtBQUVBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7QUFDQTtBQUVBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0FBQ0E7QUFFQTtJQUNBLGdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaXRlLXBob3RvLWNhcmRcXFwiXFxyXFxuICAgICAgICAgOmNsYXNzPVxcXCJ7Zm9jdXNlZDogZm9jdXMsIGZpbGxlZH1cXFwiXFxyXFxuICAgICAgICAgQGNsaWNrPVxcXCIkZW1pdCgnY2xpY2snLCAkYXR0cnNbJ3ZhbHVlJ10pOyBvcGVuPXRydWVcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1waG90by1jYXJkLWNvbnRlbnRcXFwiIHN0eWxlPVxcXCJ6LWluZGV4OiAxO1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWltZyB2LWlmPVxcXCJsb2FkZWQgJiYgc3JjXFxcIiA6c3JjPVxcXCJzcmNcXFwiIGNvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjEwMCVcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtcm93IHYtZWxzZS1pZj1cXFwiIWxvYWRlZCAmJiAhZXJyb3JcXFwiIHhzPVxcXCIxMlxcXCIgY2xhc3M9XFxcInBhLThcXFwiIHN0eWxlPVxcXCJhbGlnbi1pdGVtczogY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwcm9ncmVzcy1iYXIgOnByb2dyZXNzPVxcXCJwcm9ncmVzc1xcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgICAgIDwvc2xvdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1waG90by1jYXJkLWFjdGlvbnNcXFwiIHN0eWxlPVxcXCJ6LWluZGV4OiAyO1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiYWN0aW9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx2LXJvdyB4cz1cXFwiMTJcXFwiIGNsYXNzPVxcXCJwbC01IHByLTUgcHQtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvdi1yb3c+XFxyXFxuICAgICAgICAgICAgPC9zbG90PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwib3BlblxcXCIgdi1pZj1cXFwib3BlblxcXCIgY29udGVudC1jbGFzcz1cXFwic20tcGhvdG8tZGlhbG9nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaWFsb2ctaW1hZ2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8di1pbWcgdi1pZj1cXFwibG9hZGVkICYmIHNyY1xcXCIgOnNyYz1cXFwic3JjXFxcIiBtYXgtaGVpZ2h0PVxcXCI5MHZoXFxcIiBjb250YWluLz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIGljb24gQGNsaWNrPVxcXCIkZW1pdCgnZm9jdXNPdXQnKTsgb3Blbj1mYWxzZTtcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiZ3JheVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjbG9zZS1idG5cXFwiID48di1pY29uPm1kaS1jbG9zZTwvdi1pY29uPjwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L3YtZGlhbG9nPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCB7YjY0VG9CbG9iLCBjb21wcmVzc30gZnJvbSBcXFwiLi4vLi4vaW1hZ2VcXFwiO1xcclxcbiAgICBpbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcXFwiLi9Qcm9ncmVzc0JhclxcXCI7XFxyXFxuXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG5hbWU6IFxcXCJFZGl0UGhvdG9DYXJkXFxcIixcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHtQcm9ncmVzc0Jhcn0sXFxyXFxuICAgICAgICBwcm9wczoge1xcclxcbiAgICAgICAgICAgIGZvY3VzOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UsfSxcXHJcXG4gICAgICAgICAgICBwcmVsb2FkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSx9LFxcclxcbiAgICAgICAgICAgIGNvdmVyOiB7dHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcXFwiXFxcIn0sXFxyXFxuICAgICAgICAgICAgZmlsbGVkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2V9LFxcclxcbiAgICAgICAgICAgIGZpbGU6IHt0eXBlOiBGaWxlIHwgU3RyaW5nfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGRhdGE6ICh2bSkgPT4gKHtcXHJcXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICBmb2N1c2VkOiAhIXZtLiRhdHRyc1snZm9jdXMnXSxcXHJcXG4gICAgICAgICAgICBzcmM6ICcnLFxcclxcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXFxyXFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIHByb2dyZXNzOiAwLFxcclxcbiAgICAgICAgICAgIHJvdGF0ZVRpbWVvdXQ6IG51bGwsXFxyXFxuICAgICAgICB9KSxcXHJcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy51cGxvYWQodGhpcy5maWxlKVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgICAgICAgaXNDb3ZlcigpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY292ZXIgJiYgdGhpcy5zcmMuaW5kZXhPZih0aGlzLmNvdmVyKSAhPT0gLTFcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIHJvdGF0ZSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm90YXRlVGltZW91dCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucm90YXRlVGltZW91dCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVRpbWVvdXQgPSBudWxsO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gXFxcImFub255bW91c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXByZXNzVXJsID0gY29tcHJlc3MoaW1nLCAoY3R4LCBjYW52YXMpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoOTAgKiBNYXRoLlBJIC8gMTgwKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIC1pbWcud2lkdGggLyAyLCAtaW1nLndpZHRoIC8gMik7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBiNjRUb0Jsb2IoY29tcHJlc3NVcmwuc3BsaXQoJywnKVsxXSwgJ2ltYWdlL2pwZWcnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZChibG9iLCB0aGlzLnNyYy5zcGxpdCgnLycpLnJldmVyc2UoKVswXSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9O1xcclxcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMuc3JjO1xcclxcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgcmVhZExvY2FsU3JjKGZpbGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZSBpbnN0YW5jZW9mIEJsb2IpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gcmVhZGVyLnJlc3VsdDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLnNyYylcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuc3JjID0gZmlsZTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgdXBsb2FkKGZpbGUsIGNhbnZhc0ZpbGVOYW1lKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcmVsb2FkIHx8ICEoZmlsZSBpbnN0YW5jZW9mIEJsb2IpKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRMb2NhbFNyYyhmaWxlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcXHJcXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcXHJcXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgY2FudmFzRmlsZU5hbWUgfHwgZmlsZS5uYW1lKVxcclxcbiAgICAgICAgICAgICAgICB4aHIub3BlbignUE9TVCcsICcvcGhvdG8vdXBsb2FkJywgdHJ1ZSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFxcXCJwcm9ncmVzc1xcXCIsIChlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gKGUubG9hZGVkICogMTAwLjAgLyBlLnRvdGFsKSB8fCAxMDA7XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcmMgPSBlLnRhcmdldC5yZXNwb25zZS51cmw7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZS50YXJnZXQucmVzcG9uc2UudXJsKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyAhPSAyMDApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSA0MDAgJiYgIWNhbnZhc0ZpbGVOYW1lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v0JTQu9GPINGE0LDQudC70L7QsiDRgSDQsdC40YLRi9C8INC80LDQudC80YLQuNC/0L7QvCDRgNC40YHRg9C10Lwg0L3QsCDQutCw0L3QstC1INC4INC+0YLQv9GA0LDQstC70Y/QtdC8INGA0LXQt9GD0LvRjNGC0LDRglxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29tcHJlc3NVcmwgPSBjb21wcmVzcyhpbWcpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBiNjRUb0Jsb2IoY29tcHJlc3NVcmwuc3BsaXQoJywnKVsxXSwgJ2ltYWdlL2pwZWcnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkKGJsb2IsIGZpbGUubmFtZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZExvY2FsU3JjKGZpbGUpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMubG9hZGVkID0gdHJ1ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHdhdGNoOiB7XFxyXFxuICAgICAgICAgICAgZmlsZShudikge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG52ID09PSAnc3RyaW5nJykgdGhpcy5zcmMgPSBudjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4gICAgICAgIC8qIEdyZXkgODAwICovXFxyXFxuXFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQuZmlsbGVkIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZC5mb2N1c2VkLCAuc2l0ZS1waG90by1jYXJkOmhvdmVyIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IHJnYmEoMTQwLCAxNDAsIDE0MCwgMC40OSk7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZDphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDU2JTsgLyogMTYvOSAqL1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQtYWN0aW9ucyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkLWNvbnRlbnQge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5lZGl0LXBob3RvLWljb24ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPHN0eWxlPlxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5waG90by1jb3ZlciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDMycHg7XFxyXFxuICAgICAgICBsZWZ0OiAzMnB4O1xcclxcbiAgICAgICAgei1pbmRleDogMTAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbS1waG90by1kaWFsb2cgLmNsb3NlLWJ0biB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDMycHg7XFxyXFxuICAgICAgICByaWdodDogMzJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5ib3R0b20ge1xcclxcbiAgICAgICAgcmlnaHQ6IDMycHg7XFxyXFxuICAgICAgICBib3R0b206IDMycHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgMTA5LCAxMTYsIDAuNik7XFxyXFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRpYWxvZy1pbWFnZSAudi1pbWFnZXtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZGlhbG9nLWltYWdlIHtcXHJcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNtLXBob3RvLWRpYWxvZyAucGhvdG8tY292ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzJweDtcXG4gICAgbGVmdDogMzJweDtcXG4gICAgei1pbmRleDogMTAxO1xcbn1cXG4uc20tcGhvdG8tZGlhbG9nIC5jbG9zZS1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzJweDtcXG4gICAgcmlnaHQ6IDMycHg7XFxufVxcbi5zbS1waG90by1kaWFsb2cgLmJvdHRvbSB7XFxuICAgIHJpZ2h0OiAzMnB4O1xcbiAgICBib3R0b206IDMycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5zbS1waG90by1kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgMTA5LCAxMTYsIDAuNik7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5kaWFsb2ctaW1hZ2UgLnYtaW1hZ2V7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLmRpYWxvZy1pbWFnZSB7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogLW1vei1maXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQThMQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0FBQ0E7QUFFQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7QUFDQTtBQUVBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLDBCQUFBO0lBQUEsdUJBQUE7SUFBQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtBQUNBO0FBRUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxvQ0FBQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0FBQ0E7QUFFQTtJQUNBLGtCQUFBO0FBQ0E7QUFDQTtJQUNBLDBCQUFBO0lBQUEsdUJBQUE7SUFBQSxrQkFBQTtJQUNBLDJCQUFBO0lBQUEsd0JBQUE7SUFBQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaXRlLXBob3RvLWNhcmRcXFwiXFxyXFxuICAgICAgICAgOmNsYXNzPVxcXCJ7Zm9jdXNlZDogZm9jdXMsIGZpbGxlZH1cXFwiXFxyXFxuICAgICAgICAgQGNsaWNrPVxcXCIkZW1pdCgnY2xpY2snLCAkYXR0cnNbJ3ZhbHVlJ10pOyBvcGVuPXRydWVcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1waG90by1jYXJkLWNvbnRlbnRcXFwiIHN0eWxlPVxcXCJ6LWluZGV4OiAxO1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWltZyB2LWlmPVxcXCJsb2FkZWQgJiYgc3JjXFxcIiA6c3JjPVxcXCJzcmNcXFwiIGNvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjEwMCVcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtcm93IHYtZWxzZS1pZj1cXFwiIWxvYWRlZCAmJiAhZXJyb3JcXFwiIHhzPVxcXCIxMlxcXCIgY2xhc3M9XFxcInBhLThcXFwiIHN0eWxlPVxcXCJhbGlnbi1pdGVtczogY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwcm9ncmVzcy1iYXIgOnByb2dyZXNzPVxcXCJwcm9ncmVzc1xcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgICAgIDwvc2xvdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1waG90by1jYXJkLWFjdGlvbnNcXFwiIHN0eWxlPVxcXCJ6LWluZGV4OiAyO1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiYWN0aW9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx2LXJvdyB4cz1cXFwiMTJcXFwiIGNsYXNzPVxcXCJwbC01IHByLTUgcHQtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvdi1yb3c+XFxyXFxuICAgICAgICAgICAgPC9zbG90PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwib3BlblxcXCIgdi1pZj1cXFwib3BlblxcXCIgY29udGVudC1jbGFzcz1cXFwic20tcGhvdG8tZGlhbG9nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaWFsb2ctaW1hZ2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8di1pbWcgdi1pZj1cXFwibG9hZGVkICYmIHNyY1xcXCIgOnNyYz1cXFwic3JjXFxcIiBtYXgtaGVpZ2h0PVxcXCI5MHZoXFxcIiBjb250YWluLz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIGljb24gQGNsaWNrPVxcXCIkZW1pdCgnZm9jdXNPdXQnKTsgb3Blbj1mYWxzZTtcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiZ3JheVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjbG9zZS1idG5cXFwiID48di1pY29uPm1kaS1jbG9zZTwvdi1pY29uPjwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L3YtZGlhbG9nPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCB7YjY0VG9CbG9iLCBjb21wcmVzc30gZnJvbSBcXFwiLi4vLi4vaW1hZ2VcXFwiO1xcclxcbiAgICBpbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcXFwiLi9Qcm9ncmVzc0JhclxcXCI7XFxyXFxuXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG5hbWU6IFxcXCJFZGl0UGhvdG9DYXJkXFxcIixcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHtQcm9ncmVzc0Jhcn0sXFxyXFxuICAgICAgICBwcm9wczoge1xcclxcbiAgICAgICAgICAgIGZvY3VzOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UsfSxcXHJcXG4gICAgICAgICAgICBwcmVsb2FkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSx9LFxcclxcbiAgICAgICAgICAgIGNvdmVyOiB7dHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcXFwiXFxcIn0sXFxyXFxuICAgICAgICAgICAgZmlsbGVkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2V9LFxcclxcbiAgICAgICAgICAgIGZpbGU6IHt0eXBlOiBGaWxlIHwgU3RyaW5nfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGRhdGE6ICh2bSkgPT4gKHtcXHJcXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICBmb2N1c2VkOiAhIXZtLiRhdHRyc1snZm9jdXMnXSxcXHJcXG4gICAgICAgICAgICBzcmM6ICcnLFxcclxcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXFxyXFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIHByb2dyZXNzOiAwLFxcclxcbiAgICAgICAgICAgIHJvdGF0ZVRpbWVvdXQ6IG51bGwsXFxyXFxuICAgICAgICB9KSxcXHJcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy51cGxvYWQodGhpcy5maWxlKVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgICAgICAgaXNDb3ZlcigpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY292ZXIgJiYgdGhpcy5zcmMuaW5kZXhPZih0aGlzLmNvdmVyKSAhPT0gLTFcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIHJvdGF0ZSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm90YXRlVGltZW91dCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucm90YXRlVGltZW91dCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVRpbWVvdXQgPSBudWxsO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gXFxcImFub255bW91c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXByZXNzVXJsID0gY29tcHJlc3MoaW1nLCAoY3R4LCBjYW52YXMpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoOTAgKiBNYXRoLlBJIC8gMTgwKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIC1pbWcud2lkdGggLyAyLCAtaW1nLndpZHRoIC8gMik7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBiNjRUb0Jsb2IoY29tcHJlc3NVcmwuc3BsaXQoJywnKVsxXSwgJ2ltYWdlL2pwZWcnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZChibG9iLCB0aGlzLnNyYy5zcGxpdCgnLycpLnJldmVyc2UoKVswXSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9O1xcclxcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMuc3JjO1xcclxcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgcmVhZExvY2FsU3JjKGZpbGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZSBpbnN0YW5jZW9mIEJsb2IpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gcmVhZGVyLnJlc3VsdDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLnNyYylcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuc3JjID0gZmlsZTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgdXBsb2FkKGZpbGUsIGNhbnZhc0ZpbGVOYW1lKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcmVsb2FkIHx8ICEoZmlsZSBpbnN0YW5jZW9mIEJsb2IpKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRMb2NhbFNyYyhmaWxlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcXHJcXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcXHJcXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgY2FudmFzRmlsZU5hbWUgfHwgZmlsZS5uYW1lKVxcclxcbiAgICAgICAgICAgICAgICB4aHIub3BlbignUE9TVCcsICcvcGhvdG8vdXBsb2FkJywgdHJ1ZSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFxcXCJwcm9ncmVzc1xcXCIsIChlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gKGUubG9hZGVkICogMTAwLjAgLyBlLnRvdGFsKSB8fCAxMDA7XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcmMgPSBlLnRhcmdldC5yZXNwb25zZS51cmw7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZS50YXJnZXQucmVzcG9uc2UudXJsKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyAhPSAyMDApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSA0MDAgJiYgIWNhbnZhc0ZpbGVOYW1lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v0JTQu9GPINGE0LDQudC70L7QsiDRgSDQsdC40YLRi9C8INC80LDQudC80YLQuNC/0L7QvCDRgNC40YHRg9C10Lwg0L3QsCDQutCw0L3QstC1INC4INC+0YLQv9GA0LDQstC70Y/QtdC8INGA0LXQt9GD0LvRjNGC0LDRglxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29tcHJlc3NVcmwgPSBjb21wcmVzcyhpbWcpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBiNjRUb0Jsb2IoY29tcHJlc3NVcmwuc3BsaXQoJywnKVsxXSwgJ2ltYWdlL2pwZWcnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkKGJsb2IsIGZpbGUubmFtZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZExvY2FsU3JjKGZpbGUpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMubG9hZGVkID0gdHJ1ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHdhdGNoOiB7XFxyXFxuICAgICAgICAgICAgZmlsZShudikge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG52ID09PSAnc3RyaW5nJykgdGhpcy5zcmMgPSBudjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4gICAgICAgIC8qIEdyZXkgODAwICovXFxyXFxuXFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQuZmlsbGVkIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZC5mb2N1c2VkLCAuc2l0ZS1waG90by1jYXJkOmhvdmVyIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IHJnYmEoMTQwLCAxNDAsIDE0MCwgMC40OSk7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZDphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDU2JTsgLyogMTYvOSAqL1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQtYWN0aW9ucyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkLWNvbnRlbnQge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5lZGl0LXBob3RvLWljb24ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPHN0eWxlPlxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5waG90by1jb3ZlciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDMycHg7XFxyXFxuICAgICAgICBsZWZ0OiAzMnB4O1xcclxcbiAgICAgICAgei1pbmRleDogMTAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbS1waG90by1kaWFsb2cgLmNsb3NlLWJ0biB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDMycHg7XFxyXFxuICAgICAgICByaWdodDogMzJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5ib3R0b20ge1xcclxcbiAgICAgICAgcmlnaHQ6IDMycHg7XFxyXFxuICAgICAgICBib3R0b206IDMycHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgMTA5LCAxMTYsIDAuNik7XFxyXFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRpYWxvZy1pbWFnZSAudi1pbWFnZXtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZGlhbG9nLWltYWdlIHtcXHJcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZ1bGxbZGF0YS12LWQ0YTZhMmVhXXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIGJhY2tncm91bmQ6ICNFMUUxRTE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLmFjdGl2ZVtkYXRhLXYtZDRhNmEyZWFde1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYmFja2dyb3VuZDogIzJlM2U0ZSAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ0JBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7QUFDQTtBQUNBO0lBQ0EsV0FBQTtJQUNBLDhCQUFBO0lBQ0Esa0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx2LXJvdyBjbGFzcz1cXFwibWEtMFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmdWxsXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY3RpdmVcXFwiIDpzdHlsZT1cXFwie3dpZHRoOiBwcm9ncmVzcysnJSd9XFxcIi8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC92LXJvdz5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIHByb3BzOiBbJ3Byb2dyZXNzJ10sXFxyXFxuICAgICAgICBuYW1lOiBcXFwiUHJvZ3Jlc3NCYXJcXFwiXFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgICAuZnVsbHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTFFMUUxO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hY3RpdmV7XFxyXFxuICAgICAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICMyZTNlNGUgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBob3RvLWlucHV0W2RhdGEtdi02NDZmZDhkOV0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnVzZXItcGhvdG9bZGF0YS12LTY0NmZkOGQ5XSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMWFlZmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTJHQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7QUFDQTtBQUVBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx2LWNhcmQgY2xhc3M9XFxcImQtZmxleCBmbGV4LWNvbHVtblxcXCIganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIGVsZXZhdGlvbj1cXFwiMFxcXCI+XFxyXFxuICAgICAgICA8aW5wdXRcXHJcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwiZmlsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImZpbGVzXFxcIlxcclxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZVxcclxcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVxcXCJhZGRQaG90b1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcInBob3RvLWlucHV0XFxcIlxcclxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiYXphelxcXCJcXHJcXG4gICAgICAgICAgICAgICAgYWNjZXB0PVxcXCJpbWFnZS9qcGVnLGltYWdlL3BuZyxpbWFnZS9qcGdcXFwiXFxyXFxuICAgICAgICAvPlxcclxcblxcclxcbiAgICAgICAgPHYtYnRuIGNsYXNzPVxcXCJidG4gbXktMlxcXCIgQGNsaWNrPVxcXCJjbGlja09uSW5wdXRcXFwiIHYtaWY9XFxcIiFvbmUgfHwgIWNhcm91c2VsUGhvdG9zLmxlbmd0aFxcXCI+0JTQvtCx0LDQstC40YLRjCDRhNC+0YLQvtCz0YDQsNGE0LjRjjwvdi1idG4+XFxyXFxuICAgICAgICA8ZGl2IHYtaWY9XFxcIm9uZSAmJiBsb2FkZWRQaG90b3MubGVuZ3RoXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPnt7bG9hZGVkUGhvdG9zWzBdLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcIiFvbmUgJiYgY2Fyb3VzZWxQaG90b3MubGVuZ3RoXFxcIiBjbGFzcz1cXFwidXNlci1waG90by1tb2R1bGVcXFwiPlxcclxcbiAgICAgICAgICAgIDx2LWNvbCB4cz1cXFwiNlxcXCIgbWQ9XFxcIjNcXFwiIHNtPVxcXCI2XFxcIiB2LWZvcj1cXFwiKHBob3RvLCBpKSBpbiBjYXJvdXNlbFBob3Rvc1xcXCIgOmtleT1cXFwiaVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxlZGl0LXBob3RvLWNhcmRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6cHJlbG9hZD1cXFwicHJlbG9hZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmlsbGVkPVxcXCJ0cnVlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmaWxlPVxcXCJwaG90b1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXFxyXFxuICAgICAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICAgICAgPC9lZGl0LXBob3RvLWNhcmQ+XFxyXFxuICAgICAgICAgICAgPC92LWNvbD5cXHJcXG4gICAgICAgIDwvdi1yb3c+XFxyXFxuICAgIDwvdi1jYXJkPlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG5cXHJcXG4gICAgaW1wb3J0IEVkaXRQaG90b0NhcmQgZnJvbSBcXFwiLi9FZGl0UGhvdG9DYXJkXFxcIjtcXHJcXG5cXHJcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICAgICAgbmFtZTogJ3Bob3RvLWxvYWRlcicsXFxyXFxuICAgICAgICBwcm9wczoge1xcclxcbiAgICAgICAgICAgIHJhZGl1czoge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBvbmU6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBwaG90b3M6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IChbXSksXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBwcmVsb2FkOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjb21wb25lbnRzOiB7RWRpdFBob3RvQ2FyZH0sXFxyXFxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XFxyXFxuICAgICAgICAgICAgICAgIG46IDAsXFxyXFxuICAgICAgICAgICAgICAgIHBob3RvOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgbG9hZGVkUGhvdG9zOiBbXSxcXHJcXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxQaG90b3M6IHZtLnBob3RvcyxcXHJcXG4gICAgICAgICAgICAgICAgZmlsZUltZzogbnVsbCxcXHJcXG4gICAgICAgIH0pLFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIGdldFBob3RvcygpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVkUGhvdG9zO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZ2V0Rmlyc3QoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRlZFBob3Rvc1swXTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHJldHVybkZvcm1EYXRhKHZhbCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzYXZlLXBob3RvJywgdmFsKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgdXBkYXRlUGhvdG8odmFsKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucGhvdG8gPSB2YWxcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q3JvcHBlckRpYWxvZyA9IGZhbHNlXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBjbGlja09uSW5wdXQoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmZpbGVzID0gKG5ldyBEYXRhVHJhbnNmZXIoKSkuZmlsZXM7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmNsaWNrKClcXHJcXG5cXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGFkZFBob3RvKGV2ZW50KSB7XFxyXFxuICAgICAgICAgICAgICAgIFsuLi5ldmVudC50YXJnZXQuZmlsZXNdLmZvckVhY2goKHBob3RvKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbWcgPSBwaG90bztcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVJbWcuc2l6ZSA+IDUwMjQwMDApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0KDQsNC30LzQtdGAINGE0LDQudC70LAg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINCx0L7Qu9GM0YjQtSA10JzQkSdcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkZWRQaG90b3MubGVuZ3RoID4gMTApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0JLRiyDQvdC1INC80L7QttC10YLQtSDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LHQvtC70YzRiNC1IDEwINGE0L7RgtC+0LPRgNCw0YTQuNC5J1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxQaG90b3MucHVzaCh0aGlzLnByZWxvYWQgPyBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZUltZykgOiB0aGlzLmZpbGVJbWcpXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZFBob3Rvcy5wdXNoKHRoaXMuZmlsZUltZylcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubiA9IHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aCAtIDFcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IG51bGw7XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB3YXRjaDoge1xcclxcbiAgICAgICAgICAgIHBob3Rvcyhudikge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmNhcm91c2VsUGhvdG9zID0gbnYubWFwKChmaWxlKSA9PiBmaWxlLmZpbGUpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAgIC5waG90by1pbnB1dCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnVzZXItcGhvdG8ge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjAwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMWFlZmU7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kZXNjcmlwdGlvbiAudi10ZXh0LWZpZWxkX19zbG90IHRleHRhcmVhIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uZGVzY3JpcHRpb24udi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmFmdGVyICxcXG4uZGVzY3JpcHRpb24udi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmJlZm9yZXtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdEVkaXQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFvSUE7SUFDQSx3QkFBQTtBQUNBO0FBQ0E7O0lBRUEsd0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx2LWNvbnRhaW5lclxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJjb3ZlclxcXCI+XFxyXFxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVxcXCJjZW50ZXJcXFwiIGp1c3RpZnk9XFxcImNlbnRlclxcXCIgY2xhc3M9XFxcIm1iLTJcXFwiXFxyXFxuICAgICAgICB2LXRleHQ9XFxcIiRyb3V0ZS5wYXJhbXMuaWQgID09IDAgPyAn0JTQvtCx0LDQstC70LXQvdC40LUg0L3QvtCy0L7RgdGC0LgnIDogICfQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC90L7QstC+0YHRgtC4J1xcXCI+XFxyXFxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cXHJcXG4gICAgICAgIDx2LXRleHQtZmllbGRcXHJcXG4gICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcclxcbiAgICAgICAgICAgIG5hbWU9XFxcInRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgIGxhYmVsPVxcXCLQl9Cw0LPQvtC70L7QstC+0LpcXFwiXFxyXFxuICAgICAgICAgICAgdi1tb2RlbD1cXFwicG9zdC50aXRsZVxcXCJcXHJcXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XFxcIm1lc3NhZ2VzLnRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgID5cXHJcXG4gICAgICAgIDwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgICAgPHYtdGV4dGFyZWFcXHJcXG4gICAgICAgICAgICAgICAgbmFtZT1cXFwiZGVzY3JpcHRpb25cXFwiXFxyXFxuICAgICAgICAgICAgICAgIGxhYmVsPVxcXCLQntC/0LjRgdCw0L3QuNC1XFxcIlxcclxcbiAgICAgICAgICAgICAgICBoaW50PVxcXCJIaW50IHRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgIDp2YWx1ZT1cXFwiJyAnXFxcIlxcclxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZGVzY3JpcHRpb24gXFxcIlxcclxcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XFxcIm1lc3NhZ2VzLmRlc2NyaXB0aW9uXFxcIlxcclxcbiAgICAgICAgPjwvdi10ZXh0YXJlYT5cXHJcXG4gICAgICAgIDxlZGl0b3JcXHJcXG4gICAgICAgICAgICAgICAgYXBpLWtleT1cXFwia2FwcjBraDB2M3ZzY25rcHBzeGdpZzk4dmY2bWdpdGFpaThhdXczcDJwaW4xYzV0XFxcIlxcclxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwibXQtMlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicG9zdC5kZXNjcmlwdGlvblxcXCJcXHJcXG4gICAgICAgID5cXHJcXG4gICAgICAgIDwvZWRpdG9yPlxcclxcbiAgICAgICAgPHYtc3BhY2VyLz5cXHJcXG4gICAgICAgIDxwaG90by1sb2FkZXIgcmVmPVxcXCJsb2FkZXJcXFwiIDpwaG90b3M9XFxcInBvc3QucGhvdG9zXFxcIi8+XFxyXFxuICAgICAgICA8di1idG4gY2xhc3M9XFxcInNhdmUtYnRuXFxcIlxcclxcbiAgICAgICAgICAgICAgIHYtaWY9XFxcIiRyb3V0ZS5wYXJhbXMuaWQgPT0gMFxcXCJcXHJcXG4gICAgICAgICAgICAgICBjb2xvcj1cXFwic3VjY2Vzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICBmYWJcXHJcXG4gICAgICAgICAgICAgICBAY2xpY2s9XFxcImNyZWF0ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcIiEocG9zdC5kZXNjcmlwdGlvbiAmJiBwb3N0LnRpdGxlKVxcXCJcXHJcXG4gICAgICAgICAgICAgICBkYXJrPlxcclxcbiAgICAgICAgICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cXHJcXG4gICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICA8di1idG4gY2xhc3M9XFxcInNhdmUtYnRuXFxcIlxcclxcbiAgICAgICAgICAgICAgIHYtZWxzZVxcclxcbiAgICAgICAgICAgICAgIEBjbGljaz1cXFwidXBkYXRlXFxcIlxcclxcbiAgICAgICAgICAgICAgIGNvbG9yPVxcXCJzdWNjZXNzXFxcIlxcclxcbiAgICAgICAgICAgICAgIGZhYlxcclxcbiAgICAgICAgICAgICAgIGRhcms+XFxyXFxuICAgICAgICAgICAgPHYtaWNvbj5tZGktY2hlY2stb3V0bGluZTwvdi1pY29uPlxcclxcbiAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgPC92LWNvbnRhaW5lcj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCBFZGl0b3IgZnJvbSAnQHRpbnltY2UvdGlueW1jZS12dWUnO1xcclxcbiAgICBpbXBvcnQgUGhvdG9Mb2FkZXIgZnJvbSAnQC9jb21wb25lbnRzL3Bob3RvLWxvYWRlcidcXHJcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICAgICAgbmFtZTogXFxcIlBvc3RBZGRcXFwiLFxcclxcbiAgICAgICAgY29tcG9uZW50czoge1xcclxcbiAgICAgICAgICAgIEVkaXRvcixcXHJcXG4gICAgICAgICAgICBQaG90b0xvYWRlclxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIHBvc3Q6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlkOiB2bS4kcm91dGUucGFyYW1zLmlkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxyXFxuICAgICAgICAgICAgbGV0IG1vZGVsSWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XFxyXFxuICAgICAgICAgICAgaWYgKG1vZGVsSWQgIT0gMCkge1xcclxcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvcG9zdC8nKyBtb2RlbElkKS50aGVuKChyZXNwb25zZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xcclxcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSBlPy5yZXNwb25zZT8uZXJyb3IgfHwgJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAnO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlO1xcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIGNyZWF0ZSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy9wb3N0JywgdGhpcy5wb3N0KVxcclxcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QuaWQgPSByLmRhdGEuZGF0YS5pZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnJlc3BvbnNlICYmIGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JzID0gZS5yZXNwb25zZS5kYXRhLmVycm9yc1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWVzc2FnZXMpLmZvckVhY2goKGspPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2tdID0gZXJyb3JzW2tdPy5bMF0gfHwgJyc7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgdXBkYXRlKCkge1xcclxcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucHV0KCcvcG9zdC8nKyB0aGlzLnBvc3QuaWQsIHRoaXMucG9zdClcXHJcXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Bob3RvcyA9IHRoaXMuJHJlZnMubG9hZGVyLmdldFBob3RvcygpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQaG90b3MubGVuZ3RoKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGhvdG9zLmZvckVhY2goKHBob3RvLCBpKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bvc3RfcGhvdG9zWycraSsnXScsIHBob3RvLCBwaG90by5uYW1lKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ19tZXRob2QnLCAnUFVUJylcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvcG9zdC8nK3RoaXMucG9zdC5pZCwgZm9ybURhdGEpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9ICBg0J7RiNC40LHQutCwINGB0L7RhdGA0LDQvdC10L3QuNGPINGE0L7RgtC+0LPRgNCw0YTQuNC4YFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6IFxcXCJwb3N0c1xcXCJ9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnJlc3BvbnNlICYmIGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JzID0gZS5yZXNwb25zZS5kYXRhLmVycm9yc1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWVzc2FnZXMpLmZvckVhY2goKGspPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2tdID0gZXJyb3JzW2tdPy5bMF0gfHwgJyc7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcbiAgICAuZGVzY3JpcHRpb24gLnYtdGV4dC1maWVsZF9fc2xvdCB0ZXh0YXJlYSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRlc2NyaXB0aW9uLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDphZnRlciAsXFxyXFxuICAgIC5kZXNjcmlwdGlvbi52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YmVmb3Jle1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWJlNDExZCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YWJlNDExZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0YWJlNDExZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRhYmU0MTFkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRhYmU0MTFkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRhYmU0MTFkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWJlNDExZCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YWJlNDExZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNGE2YTJlYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kNGE2YTJlYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZDRhNmEyZWFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkNGE2YTJlYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkNGE2YTJlYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkNGE2YTJlYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ0YTZhMmVhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Q0YTZhMmVhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjQ2ZmQ4ZDkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjQ2ZmQ4ZDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjY0NmZkOGQ5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjQ2ZmQ4ZDknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjQ2ZmQ4ZDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjQ2ZmQ4ZDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjQ2ZmQ4ZDkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjQ2ZmQ4ZDknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Bvc3RFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZjY0N2Y1YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qb3N0RWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Bvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Qb3N0RWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGY2NDdmNWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGY2NDdmNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGY2NDdmNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Bvc3RFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZjY0N2Y1YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZjY0N2Y1YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RFZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0RWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0RWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS1waG90by1jYXJkXCIsXG4gICAgICBjbGFzczogeyBmb2N1c2VkOiBfdm0uZm9jdXMsIGZpbGxlZDogX3ZtLmZpbGxlZCB9LFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS4kZW1pdChcImNsaWNrXCIsIF92bS4kYXR0cnNbXCJ2YWx1ZVwiXSlcbiAgICAgICAgICBfdm0ub3BlbiA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaXRlLXBob3RvLWNhcmQtY29udGVudFwiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiei1pbmRleFwiOiBcIjFcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3QoXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgX3ZtLmxvYWRlZCAmJiBfdm0uc3JjXG4gICAgICAgICAgICAgICAgPyBfYyhcInYtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uc3JjLCBjb3ZlcjogXCJcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogIV92bS5sb2FkZWQgJiYgIV92bS5lcnJvclxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhLThcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czogXCIxMlwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwicHJvZ3Jlc3MtYmFyXCIsIHsgYXR0cnM6IHsgcHJvZ3Jlc3M6IF92bS5wcm9ncmVzcyB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS1waG90by1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInotaW5kZXhcIjogXCIyXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl90KFwiYWN0aW9uc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIF9jKFwidi1yb3dcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBsLTUgcHItNSBwdC0yXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgeHM6IFwiMTJcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ub3BlblxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBcImNvbnRlbnQtY2xhc3NcIjogXCJzbS1waG90by1kaWFsb2dcIiwgZnVsbHNjcmVlbjogdHJ1ZSB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3BlbixcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0ub3BlbiA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcGVuXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpYWxvZy1pbWFnZVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRlZCAmJiBfdm0uc3JjXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5zcmMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4LWhlaWdodFwiOiBcIjkwdmhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIsIGNvbG9yOiBcImdyYXlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcImZvY3VzT3V0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLWNsb3NlXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ2LXJvd1wiLCB7IHN0YXRpY0NsYXNzOiBcIm1hLTBcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiwgc3R5bGU6IHsgd2lkdGg6IF92bS5wcm9ncmVzcyArIFwiJVwiIH0gfSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNhcmRcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW5cIixcbiAgICAgIGF0dHJzOiB7IFwianVzdGlmeS1jZW50ZXJcIjogXCJcIiwgXCJhbGlnbi1jZW50ZXJcIjogXCJcIiwgZWxldmF0aW9uOiBcIjBcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwicGhvdG8taW5wdXRcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgICBpZDogXCJmaWxlc1wiLFxuICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImF6YXpcIixcbiAgICAgICAgICBhY2NlcHQ6IFwiaW1hZ2UvanBlZyxpbWFnZS9wbmcsaW1hZ2UvanBnXCJcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uYWRkUGhvdG8gfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS5vbmUgfHwgIV92bS5jYXJvdXNlbFBob3Rvcy5sZW5ndGhcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIG15LTJcIiwgb246IHsgY2xpY2s6IF92bS5jbGlja09uSW5wdXQgfSB9LFxuICAgICAgICAgICAgW192bS5fdihcItCU0L7QsdCw0LLQuNGC0Ywg0YTQvtGC0L7Qs9GA0LDRhNC40Y5cIildXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5vbmUgJiYgX3ZtLmxvYWRlZFBob3Rvcy5sZW5ndGhcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubG9hZGVkUGhvdG9zWzBdLm5hbWUpKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS5vbmUgJiYgX3ZtLmNhcm91c2VsUGhvdG9zLmxlbmd0aFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ1c2VyLXBob3RvLW1vZHVsZVwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmNhcm91c2VsUGhvdG9zLCBmdW5jdGlvbihwaG90bywgaSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsga2V5OiBpLCBhdHRyczogeyB4czogXCI2XCIsIG1kOiBcIjNcIiwgc206IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImVkaXQtcGhvdG8tY2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZDogX3ZtLnByZWxvYWQsXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IHBob3RvLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW46IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvdmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIsIGp1c3RpZnk6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgX3ZtLiRyb3V0ZS5wYXJhbXMuaWQgPT0gMFxuICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC70LXQvdC40LUg0L3QvtCy0L7RgdGC0LhcIlxuICAgICAgICAgICAgICA6IFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQvdC+0LLQvtGB0YLQuFwiXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgICAgIGxhYmVsOiBcItCX0LDQs9C+0LvQvtCy0L7QulwiLFxuICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLnRpdGxlXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5wb3N0LnRpdGxlLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5wb3N0LCBcInRpdGxlXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwicG9zdC50aXRsZVwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0YXJlYVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uIFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICBsYWJlbDogXCLQntC/0LjRgdCw0L3QuNC1XCIsXG4gICAgICAgICAgaGludDogXCJIaW50IHRleHRcIixcbiAgICAgICAgICB2YWx1ZTogXCIgXCIsXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMuZGVzY3JpcHRpb25cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJlZGl0b3JcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtdC0yXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJhcGkta2V5XCI6IFwia2FwcjBraDB2M3ZzY25rcHBzeGdpZzk4dmY2bWdpdGFpaThhdXczcDJwaW4xYzV0XCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnBvc3QuZGVzY3JpcHRpb24sXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBvc3QsIFwiZGVzY3JpcHRpb25cIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJwb3N0LmRlc2NyaXB0aW9uXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBob3RvLWxvYWRlclwiLCB7IHJlZjogXCJsb2FkZXJcIiwgYXR0cnM6IHsgcGhvdG9zOiBfdm0ucG9zdC5waG90b3MgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uJHJvdXRlLnBhcmFtcy5pZCA9PSAwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNhdmUtYnRuXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIShfdm0ucG9zdC5kZXNjcmlwdGlvbiAmJiBfdm0ucG9zdC50aXRsZSksXG4gICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNyZWF0ZSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktcGx1c1wiKV0pXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNhdmUtYnRuXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcInN1Y2Nlc3NcIiwgZmFiOiBcIlwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udXBkYXRlIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcIm1kaS1jaGVjay1vdXRsaW5lXCIpXSldLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YWJlNDExZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjAwOGY4ZWFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhYmU0MTFkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YWJlNDExZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwOGMyNzc4Y1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ0YTZhMmVhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyOGYzZTM3Y1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ0YTZhMmVhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDRhNmEyZWEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0NmZkOGQ5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2MTg1ZGQyYVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0RWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMTlhNGQ1NDZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0RWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9