(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Files_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Files.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Files.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_photo_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/photo-loader */ "./resources/js/components/photo-loader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Files",
  components: {
    PhotoLoader: _components_photo_loader__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data(vm) {
    return {
      l: 1,
      file: {
        title: '',
        file: null
      },
      files: [],
      page: 1,
      delete_id: 0,
      show: false,
      titleError: ''
    };
  },
  mounted: function mounted() {
    this.getPage();
  },
  methods: {
    openDialog: function openDialog() {
      this.show = true;
    },
    closeDialog: function closeDialog() {
      this.show = false;
    },
    getPage: function getPage() {
      var _this = this;

      window.axios.get('file?', {
        params: {
          page: this.page,
          user_id: this.$route.params.user_id > 0 ? this.$route.params.user_id : null
        }
      }).then(function (r) {
        _this.files = r.data.data;
        _this.l = r.data.last_page;
      });
    },
    upload: function upload() {
      var _this2 = this;

      var newPhotos = [this.$refs.loader.getFirst()];

      if (newPhotos.length) {
        var formData = new FormData();
        newPhotos.forEach(function (photo, i) {
          formData.append('file', photo, photo.name);
        });
        formData.append('title', this.file.title);

        try {
          window.axios.post('/file/', formData).then(function (r) {
            _this2.getPage();
          });
        } catch (e) {
          console.log(e);
          this.$root.$children[0].snackbarText = "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438";
          this.$root.$children[0].snackbar = true;
        }
      }

      this.closeDialog();
    },
    download: function download(id) {
      window.axios.get('file/' + id, {
        method: 'GET',
        responseType: 'blob'
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', decodeURIComponent(response.headers['content-disposition'].split(';')[2].split("utf-8''")[1]));
        document.body.appendChild(link);
        link.click();
      });
    },
    "delete": function _delete() {
      var _this3 = this;

      try {
        window.axios["delete"]('/file/' + this.delete_id).then(function (r) {
          _this3.getPage();
        });
      } catch (e) {
        console.log(e);
        this.$root.$children[0].snackbarText = "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438";
        this.$root.$children[0].snackbar = true;
      }
    }
  },
  watch: {
    page: function page() {
      this.getPage();
    },
    delete_id: function delete_id(nv) {
      if (nv > 0) this["delete"]();
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

/***/ "./resources/js/pages/Files.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Files.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Files_vue_vue_type_template_id_547b6f3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Files.vue?vue&type=template&id=547b6f3e& */ "./resources/js/pages/Files.vue?vue&type=template&id=547b6f3e&");
/* harmony import */ var _Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Files.vue?vue&type=script&lang=js& */ "./resources/js/pages/Files.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Files_vue_vue_type_template_id_547b6f3e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Files_vue_vue_type_template_id_547b6f3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Files.vue"
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

/***/ "./resources/js/pages/Files.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Files.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Files.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Files.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/pages/Files.vue?vue&type=template&id=547b6f3e&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Files.vue?vue&type=template&id=547b6f3e& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_template_id_547b6f3e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_template_id_547b6f3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_template_id_547b6f3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Files.vue?vue&type=template&id=547b6f3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Files.vue?vue&type=template&id=547b6f3e&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Files.vue?vue&type=template&id=547b6f3e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Files.vue?vue&type=template&id=547b6f3e& ***!
  \************************************************************************************************************************************************************************************************************/
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
            _vm.$route.params.user_id > 0 ? "Файлы пользователя" : "Мои файлы"
          )
        }
      }),
      _vm._v(" "),
      _vm.files.length > 0
        ? _c(
            "div",
            [
              _c(
                "v-container",
                [
                  _vm._l(_vm.files, function(entry, index) {
                    return _c(
                      "v-card",
                      {
                        key: index,
                        staticClass: "ma-2",
                        staticStyle: { position: "relative" },
                        attrs: { elevation: "0" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex crud",
                            staticStyle: {
                              position: "absolute",
                              right: "5px",
                              top: "-10px",
                              "font-size": "10px"
                            }
                          },
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "mr-3",
                                attrs: {
                                  color: "red",
                                  fab: "",
                                  small: "",
                                  dark: ""
                                },
                                on: {
                                  click: function($event) {
                                    _vm.delete_id = entry.id
                                  }
                                }
                              },
                              [_c("v-icon", [_vm._v("mdi-delete")])],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  color: "green",
                                  fab: "",
                                  small: "",
                                  dark: ""
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.download(entry.id)
                                  }
                                }
                              },
                              [_c("v-icon", [_vm._v("mdi-download")])],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("h4", { staticStyle: { "max-width": "60%" } }, [
                          _vm._v(_vm._s(entry.title))
                        ])
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _vm.l > 1
                    ? _c(
                        "div",
                        { staticClass: "text-center xs-12" },
                        [
                          _c("v-pagination", {
                            attrs: { length: _vm.l, "total-visible": 3 },
                            model: {
                              value: _vm.page,
                              callback: function($$v) {
                                _vm.page = $$v
                              },
                              expression: "page"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ],
                2
              )
            ],
            1
          )
        : _c("div", [
            _c("div", { staticClass: "text-center my-3" }, [
              _vm._v("Файлов пока нет")
            ])
          ]),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "save-btn",
          attrs: { color: "success", fab: "", dark: "" },
          on: { click: _vm.openDialog }
        },
        [_c("v-icon", [_vm._v("mdi-paperclip")])],
        1
      ),
      _vm._v(" "),
      _vm.show
        ? _c(
            "v-dialog",
            {
              attrs: {
                value: _vm.show,
                fullscreen: _vm.$vuetify.breakpoint.mobile
              },
              on: { close: _vm.closeDialog }
            },
            [
              [
                _c(
                  "v-card",
                  [
                    _c(
                      "v-toolbar",
                      {
                        staticClass:
                          "container py-1 my-0 justify-space-between",
                        attrs: { elevation: "1" }
                      },
                      [
                        _c("v-toolbar-title", [
                          _c("span", { staticClass: "headline" }, [
                            _vm._v("Загрузка файла")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-toolbar-title",
                          [
                            _c(
                              "v-icon",
                              {
                                staticClass: "flex-grow-0",
                                attrs: { text: "" },
                                on: { click: _vm.closeDialog }
                              },
                              [_vm._v("X")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-container",
                          [
                            _c(
                              "v-col",
                              [
                                _c("v-card-text", [
                                  _vm._v(
                                    "\n                                Выберите файл для загрузки, и обозначте его\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-form",
                                  {
                                    nativeOn: {
                                      keyup: function($event) {
                                        if (
                                          !$event.type.indexOf("key") &&
                                          _vm._k(
                                            $event.keyCode,
                                            "enter",
                                            13,
                                            $event.key,
                                            "Enter"
                                          )
                                        ) {
                                          return null
                                        }
                                        return _vm.upload.apply(null, arguments)
                                      }
                                    }
                                  },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Обозначение(Инн, паспорт)",
                                        "error-messages": _vm.titleError,
                                        name: "title",
                                        type: "text",
                                        required: ""
                                      },
                                      model: {
                                        value: _vm.file.title,
                                        callback: function($$v) {
                                          _vm.$set(_vm.file, "title", $$v)
                                        },
                                        expression: "file.title"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("photo-loader", {
                                      ref: "loader",
                                      attrs: { one: true }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "v-card",
                                      {
                                        staticClass:
                                          "d-flex justify-center align-center",
                                        attrs: {
                                          flat: "",
                                          height: "auto",
                                          tile: ""
                                        }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              color: "dark",
                                              disabled: _vm.file.title == ""
                                            },
                                            on: { click: _vm.upload }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Подтвердить\n                                    "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRHJvcEFyZWEudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvRmlsZXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ecm9wQXJlYS52dWU/NmNhNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZT9jYzM4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0VkaXRQaG90b0NhcmQudnVlP2IwMTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIudnVlPzQwNzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZT82NmEwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Ryb3BBcmVhLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRmlsZXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Ryb3BBcmVhLnZ1ZT84YWI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0VkaXRQaG90b0NhcmQudnVlPzU4MWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIudnVlP2JiNTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZT8yNmVhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9GaWxlcy52dWU/OGQ4ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ecm9wQXJlYS52dWU/NDU3NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZT84M2M3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZT9iYWQ1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWU/MjE3NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRmlsZXMudnVlPzFlZGIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRHJvcEFyZWEudnVlPzg4M2MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRWRpdFBob3RvQ2FyZC52dWU/YmJmNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZT9hNDJmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZT83NzU5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWU/NzU1NyJdLCJuYW1lcyI6WyJjb21wcmVzcyIsImltZyIsIm1vZGlmeUNvbnRleHQiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3SW1hZ2UiLCJiYXNlNjREYXRhIiwidG9EYXRhVVJMIiwiYjY0VG9CbG9iIiwiYjY0RGF0YSIsImNvbnRlbnRUeXBlIiwiYnl0ZUNoYXJhY3RlcnMiLCJhdG9iIiwiYnVmZmVyIiwiYUJ1ZmZlciIsIkFycmF5QnVmZmVyIiwibGVuZ3RoIiwidUJ1ZmZlciIsIlVpbnQ4QXJyYXkiLCJpIiwiY2hhckNvZGVBdCIsInB1c2giLCJCbG9iIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0Esa0JBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRkE7QUFHQSxnQkFIQTtBQUlBLFNBSkEsbUJBSUEsRUFKQSxFQUlBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBQ0E7QUFDQSxLQUZBOztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0EsS0FKQTs7QUFLQTtBQUNBLEdBcENBO0FBcUNBO0FBQ0EsZUFEQSx1QkFDQSxLQURBLEVBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQXJDQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3dCQTtBQUNBO0FBRUE7QUFDQSx1QkFEQTtBQUVBO0FBQUE7QUFBQSxHQUZBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQSxLQURBO0FBRUE7QUFBQTtBQUFBO0FBQUEsS0FGQTtBQUdBO0FBQUE7QUFBQTtBQUFBLEtBSEE7QUFJQTtBQUFBO0FBQUE7QUFBQSxLQUpBO0FBS0E7QUFBQTtBQUFBO0FBTEEsR0FIQTtBQVVBO0FBQUE7QUFDQSxpQkFEQTtBQUVBLG1DQUZBO0FBR0EsYUFIQTtBQUlBLG1CQUpBO0FBS0Esa0JBTEE7QUFNQSxpQkFOQTtBQU9BO0FBUEE7QUFBQSxHQVZBO0FBbUJBLFNBbkJBLHFCQW1CQTtBQUNBO0FBQ0EsR0FyQkE7QUFzQkE7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFDQTtBQUhBLEdBdEJBO0FBMkJBO0FBQ0EsVUFEQSxvQkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBTkE7QUFPQTs7QUFDQTtBQUNBLFNBVkE7O0FBV0E7QUFDQSxPQWZBLEVBZUEsSUFmQTtBQWdCQSxLQXRCQTtBQXVCQSxnQkF2QkEsd0JBdUJBLElBdkJBLEVBdUJBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxTQUhBO0FBSUEsT0FQQSxNQU9BOztBQUNBO0FBQ0EsS0FqQ0E7QUFrQ0EsVUFsQ0Esa0JBa0NBLElBbENBLEVBa0NBLGNBbENBLEVBa0NBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0EsU0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLGFBSkE7O0FBS0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFFQSxPQXJCQTtBQXNCQTtBQUNBO0FBdEVBLEdBM0JBO0FBbUdBO0FBQ0EsUUFEQSxnQkFDQSxFQURBLEVBQ0E7QUFDQTtBQUNBO0FBSEE7QUFuR0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQSxxQkFEQTtBQUVBO0FBRkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ21CQTtBQUNBO0FBRUE7QUFDQSxzQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQURBLEtBREE7QUFJQTtBQUNBLG1CQURBO0FBRUE7QUFGQSxLQUpBO0FBUUE7QUFDQSxpQkFEQTtBQUVBO0FBQUE7QUFBQTtBQUZBLEtBUkE7QUFZQTtBQUNBLG1CQURBO0FBRUE7QUFGQTtBQVpBLEdBRkE7QUFtQkE7QUFBQTtBQUFBO0FBQUEsR0FuQkE7QUFvQkE7QUFBQTtBQUNBLFVBREE7QUFFQSxlQUZBO0FBR0Esc0JBSEE7QUFJQSxpQkFKQTtBQUtBLCtCQUxBO0FBTUE7QUFOQTtBQUFBLEdBcEJBO0FBNEJBLFNBNUJBLHFCQTRCQSxDQUNBLENBN0JBO0FBOEJBO0FBQ0EsZUFEQSx1QkFDQSxLQURBLEVBQ0EsR0FEQSxFQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBLE9BSkEsTUFJQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLEtBWEE7QUFZQSxhQVpBLHVCQVlBO0FBQ0E7QUFDQSxLQWRBO0FBZUEsWUFmQSxzQkFlQTtBQUNBO0FBQ0EsS0FqQkE7QUFrQkEsa0JBbEJBLDBCQWtCQSxHQWxCQSxFQWtCQTtBQUNBO0FBQ0EsS0FwQkE7QUFxQkEsZUFyQkEsdUJBcUJBLEdBckJBLEVBcUJBO0FBQ0E7QUFDQTtBQUNBLEtBeEJBO0FBeUJBLGdCQXpCQSwwQkF5QkE7QUFDQTtBQUNBO0FBRUEsS0E3QkE7QUE4QkEsWUE5QkEsb0JBOEJBLEtBOUJBLEVBOEJBO0FBQUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsNkRBQ0EscUJBREEsSUFFQSxxRUFGQTs7QUFJQTs7QUFDQTtBQUNBO0FBQ0EsT0FuQkE7QUFvQkE7QUFuREEsR0E5QkE7QUFtRkE7QUFDQSxVQURBLGtCQUNBLEVBREEsRUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFuRkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMrRUE7QUFDQTtBQUNBLGVBREE7QUFFQTtBQUFBO0FBQUEsR0FGQTtBQUdBO0FBQ0E7QUFDQSxVQURBO0FBRUE7QUFDQSxpQkFEQTtBQUVBO0FBRkEsT0FGQTtBQU1BLGVBTkE7QUFPQSxhQVBBO0FBUUEsa0JBUkE7QUFTQSxpQkFUQTtBQVVBO0FBVkE7QUFZQSxHQWhCQTtBQWlCQSxTQWpCQSxxQkFpQkE7QUFDQTtBQUNBLEdBbkJBO0FBb0JBO0FBQ0EsY0FEQSx3QkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGVBSkEseUJBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxXQVBBLHFCQU9BO0FBQUE7O0FBQ0E7QUFBQTtBQUNBLHlCQURBO0FBRUE7QUFGQTtBQUFBLFNBR0EsSUFIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBLE9BTkE7QUFPQSxLQWZBO0FBZ0JBLFVBaEJBLG9CQWdCQTtBQUFBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUVBLFdBSEE7QUFJQSxTQUxBLENBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsS0FwQ0E7QUFxQ0EsWUFyQ0Esb0JBcUNBLEVBckNBLEVBcUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBRkEsU0FHQSxJQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVZBO0FBV0EsS0FqREE7QUFBQSxpQ0FrREE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0FKQSxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVEQSxHQXBCQTtBQWtGQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxhQUpBLHFCQUlBLEVBSkEsRUFJQTtBQUNBO0FBQ0E7QUFOQTtBQWxGQSxHOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUdPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEdBQUQsRUFBTUMsYUFBTixFQUF3QjtBQUM1QyxNQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0EsTUFBSUMsT0FBTyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBZDtBQUNBLE1BQUlDLEtBQUssR0FBR1AsR0FBRyxDQUFDTyxLQUFoQjtBQUNBLE1BQUlDLE1BQU0sR0FBR1IsR0FBRyxDQUFDUSxNQUFqQixDQUo0QyxDQUs1QztBQUNBOztBQUNBTixRQUFNLENBQUNLLEtBQVAsR0FBZUEsS0FBZjtBQUNBTCxRQUFNLENBQUNNLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0FILFNBQU8sQ0FBQ0ksU0FBUixHQUFvQixNQUFwQjtBQUNBSixTQUFPLENBQUNLLFFBQVIsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUJSLE1BQU0sQ0FBQ0ssS0FBOUIsRUFBcUNMLE1BQU0sQ0FBQ00sTUFBNUM7QUFDQSxNQUFJUCxhQUFKLEVBQW1CQSxhQUFhLENBQUNJLE9BQUQsRUFBVUgsTUFBVixDQUFiLENBQW5CLEtBQ0tHLE9BQU8sQ0FBQ00sU0FBUixDQUFrQlgsR0FBbEIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkJFLE1BQU0sQ0FBQ0ssS0FBcEMsRUFBMkNMLE1BQU0sQ0FBQ00sTUFBbEQ7QUFDTCxNQUFJSSxVQUFVLEdBQUdWLE1BQU0sQ0FBQ1csU0FBUCxDQUFpQixZQUFqQixFQUErQixHQUEvQixDQUFqQjtBQUNBWCxRQUFNLEdBQUdHLE9BQU8sR0FBRyxJQUFuQixDQWQ0QyxDQWU1Qzs7QUFDQUwsS0FBRyxHQUFHLElBQU47QUFDQSxTQUFPWSxVQUFQO0FBQ0gsQ0FsQk0sQyxDQW9CUDs7QUFDTyxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxPQUFELEVBQVVDLFdBQVYsRUFBMEI7QUFDL0NBLGFBQVcsR0FBR0EsV0FBVyxJQUFJLEVBQTdCO0FBRUEsTUFBSUMsY0FBYyxHQUFHQyxJQUFJLENBQUNILE9BQUQsQ0FBekIsQ0FIK0MsQ0FHWjs7QUFDbkMsTUFBSUksTUFBTSxHQUFHLEVBQWIsQ0FKK0MsQ0FJL0I7QUFFaEI7O0FBQ0EsTUFBSUMsT0FBTyxHQUFHLElBQUlDLFdBQUosQ0FBZ0JKLGNBQWMsQ0FBQ0ssTUFBL0IsQ0FBZDtBQUNBLE1BQUlDLE9BQU8sR0FBRyxJQUFJQyxVQUFKLENBQWVKLE9BQWYsQ0FBZDs7QUFDQSxPQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdSLGNBQWMsQ0FBQ0ssTUFBbkMsRUFBMkNHLENBQUMsRUFBNUMsRUFBZ0Q7QUFDNUNGLFdBQU8sQ0FBQ0UsQ0FBRCxDQUFQLEdBQWFSLGNBQWMsQ0FBQ1MsVUFBZixDQUEwQkQsQ0FBMUIsQ0FBYixDQUQ0QyxDQUNGO0FBQzdDOztBQUNETixRQUFNLENBQUNRLElBQVAsQ0FBWUosT0FBWixFQVorQyxDQWEvQzs7QUFDQSxTQUFPLElBQUlLLElBQUosQ0FBU1QsTUFBVCxFQUFpQjtBQUFFO0FBQ3RCVSxRQUFJLEVBQUViO0FBRGMsR0FBakIsQ0FBUDtBQUdILENBakJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QlA7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHVGQUF1Rix5QkFBeUIsa0JBQWtCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG9CQUFvQiwwQkFBMEIsaUNBQWlDLHlCQUF5Qix1QkFBdUIsR0FBRyxxQ0FBcUMsMEJBQTBCLEdBQUcsMkJBQTJCLG9CQUFvQixHQUFHLGlDQUFpQywrQkFBK0IsR0FBRyxrQ0FBa0MsZ0NBQWdDLEdBQUcsc0JBQXNCLG9CQUFvQixHQUFHLHdEQUF3RCx5QkFBeUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGtCQUFrQixtQkFBbUIsa0JBQWtCLEdBQUcsOEJBQThCLDRCQUE0QixzQkFBc0IsdUJBQXVCLHlCQUF5QixtQkFBbUIsb0JBQW9CLDBCQUEwQix1QkFBdUIseUJBQXlCLHdCQUF3QixzQkFBc0IsMEJBQTBCLHlCQUF5QixHQUFHLHNDQUFzQyxzQkFBc0IsR0FBRyw4QkFBOEIsb0JBQW9CLEdBQUcsK0JBQStCLDJCQUEyQix1QkFBdUIsc0JBQXNCLHdCQUF3QixxQkFBcUIsR0FBRyx3Q0FBd0Msc0JBQXNCLHNDQUFzQyx5QkFBeUIsdUJBQXVCLHNCQUFzQix3QkFBd0IseUJBQXlCLHFCQUFxQixHQUFHLFNBQVMsbUdBQW1HLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLGdaQUFnWiwyQ0FBMkMsNk9BQTZPLDJEQUEyRCxHQUFHLHNEQUFzRCxvRUFBb0UscUZBQXFGLGlHQUFpRyxrREFBa0QsOEZBQThGLG9FQUFvRSx1RkFBdUYsRUFBRSw0REFBNEQseUZBQXlGLEVBQUUsdUNBQXVDLG9FQUFvRSx5Q0FBeUMsdUVBQXVFLCtDQUErQywrSUFBK0kscUVBQXFFLGFBQWEsdUJBQXVCLG9DQUFvQywwQ0FBMEMsUUFBUSxPQUFPLEVBQUUsaUJBQWlCLGFBQWEsU0FBUyxxRUFBcUUsK0JBQStCLHdCQUF3QiwwQkFBMEIsb0NBQW9DLGdDQUFnQywwQkFBMEIsZ0NBQWdDLHVDQUF1QywrQkFBK0IsNkJBQTZCLFNBQVMsOEJBQThCLGdDQUFnQyxTQUFTLG9CQUFvQiwwQkFBMEIsU0FBUywwQkFBMEIscUNBQXFDLFNBQVMsMkJBQTJCLHNDQUFzQyxTQUFTLGVBQWUsMEJBQTBCLFNBQVMsaURBQWlELCtCQUErQiwwQkFBMEIsbUNBQW1DLG9DQUFvQyxnQ0FBZ0Msd0JBQXdCLHlCQUF5Qix3QkFBd0IsU0FBUywyQkFBMkIsa0NBQWtDLDRCQUE0Qiw2QkFBNkIsK0JBQStCLHlCQUF5QiwwQkFBMEIsZ0NBQWdDLDZCQUE2QiwrQkFBK0IsOEJBQThCLDRCQUE0QixnQ0FBZ0MsK0JBQStCLFNBQVMsMkJBQTJCLDRCQUE0QixTQUFTLHVCQUF1QiwwQkFBMEIsU0FBUyx3QkFBd0IsbUNBQW1DLDZCQUE2Qiw0QkFBNEIsOEJBQThCLDJCQUEyQixTQUFTLGlDQUFpQyxrQ0FBa0MsMkJBQTJCLCtCQUErQiw2QkFBNkIsNEJBQTRCLDhCQUE4QiwrQkFBK0IsMkJBQTJCLFNBQVMsbUNBQW1DO0FBQy9nTjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsK0VBQStFLHlCQUF5QixrQkFBa0IsMEJBQTBCLCtDQUErQyx1QkFBdUIsR0FBRyw0Q0FBNEMsZ0NBQWdDLEdBQUcsc0ZBQXNGLHdEQUF3RCx5QkFBeUIsR0FBRywyQ0FBMkMsb0JBQW9CLHFCQUFxQiwwQkFBMEIsY0FBYyw2Q0FBNkMseUJBQXlCLGVBQWUsc0JBQXNCLEdBQUcsNkNBQTZDLHlCQUF5QixrQkFBa0IsbUJBQW1CLG9CQUFvQiw4QkFBOEIsNkJBQTZCLHNCQUFzQixHQUFHLHFDQUFxQyx1QkFBdUIsR0FBRyxTQUFTLHdHQUF3RyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxxQkFBcUIsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLGdHQUFnRyx1QkFBdUIseUVBQXlFLGtNQUFrTSx5VUFBeVUsaXdCQUFpd0IsWUFBWSx1T0FBdU8sb0JBQW9CLHNCQUFzQixrREFBa0QsNEJBQTRCLDZEQUE2RCxZQUFZLHFCQUFxQix3QkFBd0IsK0JBQStCLDJCQUEyQiw4QkFBOEIseUJBQXlCLDRCQUE0QiwwQkFBMEIsOEJBQThCLHdCQUF3QixvQkFBb0IsYUFBYSw2QkFBNkIsME9BQTBPLHlCQUF5QixtREFBbUQsd0JBQXdCLDJCQUEyQiw2RkFBNkYsYUFBYSx1QkFBdUIsMEJBQTBCLDZDQUE2Qyx5REFBeUQsa0RBQWtELHFCQUFxQiwyREFBMkQsOENBQThDLG1HQUFtRyw4RUFBOEUsMkNBQTJDLG1GQUFtRiwrREFBK0QsbUZBQW1GLDhDQUE4Qyw2QkFBNkIsRUFBRSwwRkFBMEYsZ0ZBQWdGLDBCQUEwQiwyQ0FBMkMscUJBQXFCLHdCQUF3QixxQ0FBcUMsb0RBQW9ELHNEQUFzRCxtREFBbUQsa0RBQWtELHFEQUFxRCxtRkFBbUYscUJBQXFCLHNCQUFzQix1Q0FBdUMsaUJBQWlCLCtDQUErQyxtRUFBbUUsZ0RBQWdELCtCQUErQixxQkFBcUIsZ0dBQWdHLGdRQUFnUSw0RUFBNEUscUJBQXFCLHNFQUFzRSx1RUFBdUUsNkRBQTZELHdFQUF3RSwrQ0FBK0MseUJBQXlCLHFEQUFxRCx1RUFBdUUsMkpBQTJKLG9EQUFvRCxvRUFBb0Usa0dBQWtHLGlFQUFpRSxrQ0FBa0Msb0VBQW9FLHVDQUF1Qyw2QkFBNkIsK0dBQStHLHlCQUF5Qix5QkFBeUIsd0RBQXdELGFBQWEscUJBQXFCLDBCQUEwQiw4REFBOEQsaUJBQWlCLGFBQWEsU0FBUyw2REFBNkQsK0JBQStCLHdCQUF3QixnQ0FBZ0MsNkRBQTZELDZCQUE2QixTQUFTLHFDQUFxQyxzQ0FBc0MsU0FBUyw4REFBOEQsOERBQThELCtCQUErQixTQUFTLG9DQUFvQywwQkFBMEIsMkJBQTJCLGdDQUFnQyxvQkFBb0Isc0NBQXNDLCtCQUErQixxQkFBcUIsNEJBQTRCLFNBQVMsc0NBQXNDLCtCQUErQix3QkFBd0IseUJBQXlCLDBCQUEwQixvQ0FBb0MsbUNBQW1DLDRCQUE0QixTQUFTLDhCQUE4Qiw2QkFBNkIsU0FBUyxrRUFBa0UsK0JBQStCLHNCQUFzQix1QkFBdUIseUJBQXlCLFNBQVMseUNBQXlDLCtCQUErQixzQkFBc0Isd0JBQXdCLFNBQVMsc0NBQXNDLHdCQUF3Qix5QkFBeUIsK0JBQStCLCtCQUErQiwwQkFBMEIsZ0NBQWdDLFNBQVMsOEJBQThCLCtCQUErQix5QkFBeUIsMEJBQTBCLHdDQUF3QyxpREFBaUQsd0NBQXdDLGdDQUFnQyxvQ0FBb0MsU0FBUyxtQ0FBbUMsK0JBQStCLFNBQVMsdUJBQXVCLCtCQUErQixnQ0FBZ0MsNEJBQTRCLCtCQUErQiwwQkFBMEIsK0JBQStCLDZCQUE2QixTQUFTLG1DQUFtQztBQUNuNVQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDJFQUEyRSx5QkFBeUIsZ0JBQWdCLGlCQUFpQixtQkFBbUIsR0FBRywrQkFBK0IseUJBQXlCLGdCQUFnQixrQkFBa0IsR0FBRyw0QkFBNEIsa0JBQWtCLG1CQUFtQix5QkFBeUIsaUNBQWlDLDhCQUE4Qix5QkFBeUIsb0JBQW9CLDBCQUEwQixHQUFHLG9CQUFvQix5QkFBeUIsbUJBQW1CLG9CQUFvQixrQ0FBa0MsMkNBQTJDLDBDQUEwQywwQ0FBMEMsMEJBQTBCLDhCQUE4QixHQUFHLHlCQUF5Qix5QkFBeUIsR0FBRyxpQkFBaUIsaUNBQWlDLDhCQUE4Qix5QkFBeUIsa0NBQWtDLCtCQUErQiwwQkFBMEIsc0JBQXNCLHlCQUF5QixvQkFBb0IseUJBQXlCLHVCQUF1QixHQUFHLFNBQVMsd0dBQXdHLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxnR0FBZ0csdUJBQXVCLHlFQUF5RSxrTUFBa00seVVBQXlVLGl3QkFBaXdCLFlBQVksdU9BQXVPLG9CQUFvQixzQkFBc0Isa0RBQWtELDRCQUE0Qiw2REFBNkQsWUFBWSxxQkFBcUIsd0JBQXdCLCtCQUErQiwyQkFBMkIsOEJBQThCLHlCQUF5Qiw0QkFBNEIsMEJBQTBCLDhCQUE4Qix3QkFBd0Isb0JBQW9CLGFBQWEsNkJBQTZCLDBPQUEwTyx5QkFBeUIsbURBQW1ELHdCQUF3QiwyQkFBMkIsNkZBQTZGLGFBQWEsdUJBQXVCLDBCQUEwQiw2Q0FBNkMseURBQXlELGtEQUFrRCxxQkFBcUIsMkRBQTJELDhDQUE4QyxtR0FBbUcsOEVBQThFLDJDQUEyQyxtRkFBbUYsK0RBQStELG1GQUFtRiw4Q0FBOEMsNkJBQTZCLEVBQUUsMEZBQTBGLGdGQUFnRiwwQkFBMEIsMkNBQTJDLHFCQUFxQix3QkFBd0IscUNBQXFDLG9EQUFvRCxzREFBc0QsbURBQW1ELGtEQUFrRCxxREFBcUQsbUZBQW1GLHFCQUFxQixzQkFBc0IsdUNBQXVDLGlCQUFpQiwrQ0FBK0MsbUVBQW1FLGdEQUFnRCwrQkFBK0IscUJBQXFCLGdHQUFnRyxnUUFBZ1EsNEVBQTRFLHFCQUFxQixzRUFBc0UsdUVBQXVFLDZEQUE2RCx3RUFBd0UsK0NBQStDLHlCQUF5QixxREFBcUQsdUVBQXVFLDJKQUEySixvREFBb0Qsb0VBQW9FLGtHQUFrRyxpRUFBaUUsa0NBQWtDLG9FQUFvRSx1Q0FBdUMsNkJBQTZCLCtHQUErRyx5QkFBeUIseUJBQXlCLHdEQUF3RCxhQUFhLHFCQUFxQiwwQkFBMEIsOERBQThELGlCQUFpQixhQUFhLFNBQVMsNkRBQTZELCtCQUErQix3QkFBd0IsZ0NBQWdDLDZEQUE2RCw2QkFBNkIsU0FBUyxxQ0FBcUMsc0NBQXNDLFNBQVMsOERBQThELDhEQUE4RCwrQkFBK0IsU0FBUyxvQ0FBb0MsMEJBQTBCLDJCQUEyQixnQ0FBZ0Msb0JBQW9CLHNDQUFzQywrQkFBK0IscUJBQXFCLDRCQUE0QixTQUFTLHNDQUFzQywrQkFBK0Isd0JBQXdCLHlCQUF5QiwwQkFBMEIsb0NBQW9DLG1DQUFtQyw0QkFBNEIsU0FBUyw4QkFBOEIsNkJBQTZCLFNBQVMsa0VBQWtFLCtCQUErQixzQkFBc0IsdUJBQXVCLHlCQUF5QixTQUFTLHlDQUF5QywrQkFBK0Isc0JBQXNCLHdCQUF3QixTQUFTLHNDQUFzQyx3QkFBd0IseUJBQXlCLCtCQUErQiwrQkFBK0IsMEJBQTBCLGdDQUFnQyxTQUFTLDhCQUE4QiwrQkFBK0IseUJBQXlCLDBCQUEwQix3Q0FBd0MsaURBQWlELHdDQUF3QyxnQ0FBZ0Msb0NBQW9DLFNBQVMsbUNBQW1DLCtCQUErQixTQUFTLHVCQUF1QiwrQkFBK0IsZ0NBQWdDLDRCQUE0QiwrQkFBK0IsMEJBQTBCLCtCQUErQiw2QkFBNkIsU0FBUyxtQ0FBbUM7QUFDbnJVO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxtRUFBbUUsa0JBQWtCLHlCQUF5QixrQkFBa0IsMEJBQTBCLHlCQUF5QixHQUFHLDJCQUEyQixrQkFBa0IscUNBQXFDLHlCQUF5QixHQUFHLFNBQVMsc0dBQXNHLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxpSkFBaUosb0JBQW9CLDZGQUE2RiwwRUFBMEUsaURBQWlELHdCQUF3QiwrQkFBK0Isd0JBQXdCLGdDQUFnQywrQkFBK0IsU0FBUyxnQkFBZ0Isd0JBQXdCLDJDQUEyQywrQkFBK0IsU0FBUywrQkFBK0I7QUFDdHFDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSwyRUFBMkUseUJBQXlCLHlCQUF5QixHQUFHLFNBQVMsdUdBQXVHLE1BQU0sV0FBVyxXQUFXLG1OQUFtTixzQkFBc0IsbWlDQUFtaUMsNENBQTRDLDRCQUE0QixxREFBcUQseUJBQXlCLGtEQUFrRCx1QkFBdUIsc0ZBQXNGLDBCQUEwQix5RkFBeUYsMkJBQTJCLHNGQUFzRixhQUFhLDBCQUEwQix3QkFBd0IsNkJBQTZCLHlOQUF5Tix5QkFBeUIsYUFBYSx1QkFBdUIseUNBQXlDLHFDQUFxQyxnRUFBZ0Usc0ZBQXNGLHlCQUF5QixFQUFFLHFCQUFxQixPQUFPLCtEQUErRCxxQkFBcUIsb0RBQW9ELG1FQUFtRSxpQkFBaUIsOEJBQThCLGtFQUFrRSxpQkFBaUIsNkJBQTZCLGdEQUFnRCxpQkFBaUIsc0NBQXNDLGtFQUFrRSxtQ0FBbUMsdUdBQXVHLGlDQUFpQyx3RkFBd0YsaUZBQWlGLGtDQUFrQyxnRUFBZ0UsNkNBQTZDLDBEQUEwRCxnTkFBZ04seUJBQXlCLDREQUE0RCxzTkFBc04seUJBQXlCLHVOQUF1TixxS0FBcUsscUJBQXFCLGtCQUFrQixjQUFjLHFCQUFxQiw0QkFBNEIsc0VBQXNFLGlCQUFpQixhQUFhLFNBQVMseURBQXlELCtCQUErQiwrQkFBK0IsU0FBUyxtQ0FBbUM7QUFDcC9KO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDREO0FBQ3ZDO0FBQ0w7QUFDdkQsQ0FBNEY7OztBQUc1RjtBQUM2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDeUY7QUFDdkM7QUFDTDtBQUM1RCxDQUFpRztBQUN4Qjs7O0FBR3pFO0FBQzZGO0FBQzdGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q3VGO0FBQ3ZDO0FBQ0w7QUFDMUQsQ0FBK0Y7OztBQUcvRjtBQUM2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsK0ZBQU07QUFDUixFQUFFLHdHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkN3RjtBQUN2QztBQUNMO0FBQzNELENBQWdHOzs7QUFHaEc7QUFDNkY7QUFDN0YsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLGdHQUFNO0FBQ1IsRUFBRSx5R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNxRTtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDQSxDQUE2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSx3RUFBTTtBQUNSLEVBQUUsNkVBQU07QUFDUixFQUFFLHNGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENtTSxDQUFDLGlFQUFlLDBNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FmLENBQUMsaUVBQWUsK01BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXRCLENBQUMsaUVBQWUsNk1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQW5CLENBQUMsaUVBQWUsOE1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTNCLENBQUMsaUVBQWUsdU1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbk87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBLGtCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHFCQUFxQixrQ0FBa0Msa0JBQWtCLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtDQUFrQztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUNBQWlDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywwQkFBMEI7QUFDOUQsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQix5Q0FBeUMsU0FBUyx5QkFBeUIsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxQkFBcUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVEQUF1RDtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMEJBQTBCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUMsZUFBZSxzQkFBc0I7QUFDckMsaUJBQWlCLGdDQUFnQyw0QkFBNEIsRUFBRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQiw0QkFBNEIsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLDRCQUE0QixFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCx3QkFBd0I7QUFDekUsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxnQ0FBZ0MsaUNBQWlDO0FBQ2pFLDZCQUE2QjtBQUM3Qix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVCQUF1QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUNBQXFDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx1QkFBdUI7QUFDN0QsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZUFBZSxxQkFBcUIsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBLG9DQUFvQyxvQ0FBb0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtDQUFrQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNDQUFzQztBQUN4RCxlQUFlO0FBQ2YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHNDQUFzQywwQkFBMEI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRCxxQ0FBcUM7QUFDckMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxpREFBaUQ7QUFDakQsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlTQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxzdUJBQW1YO0FBQ3pZO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwySkFBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7OztBQ1hmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGd2QkFBd1g7QUFDOVk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJKQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7O0FDWGY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsZ3NCQUFnVztBQUN0WDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkpBQWlGO0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7QUNYZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyw0dUJBQXNYO0FBQzVZO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwySkFBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7OztBQ1hmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLDh1QkFBdVg7QUFDN1k7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJKQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfRmlsZXNfdnVlMmFmYzYzYmU1OGI4MWQ2OGYzZDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGlkPVwiZHJvcC1hcmVhXCIgY2xhc3M9XCJkcm9wLWFyZWFcIiA6Y2xhc3M9XCIkdnVldGlmeS5icmVha3BvaW50LnNtQW5kRG93biA/IFsnZHJvcC1zbSddIDogW11cIj5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cImRyb3AtZm9ybVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImZpbGVFbGVtXCIgbXVsdGlwbGUgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiKGUpID0+ICRlbWl0KCdjaGFuZ2UnLCBlKVwiIGNsYXNzPVwiaGlkZVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkcm9wLWJ0blwiIGZvcj1cImZpbGVFbGVtXCI+e3sheWV0ID8gJ9CX0LDQs9GA0YPQt9C40YLRjCDRhNC+0YLQvicgOiAn0JfQsNCz0YDRg9C30LjRgtGMINC10YnQtSd9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9ybWF0LWZpbGUtZGVzY1wiPtCk0L7RgNC80LDRgiDigJMganBnLCBwbmc8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZmlsZS1kZXNjIGhvdmVyXCI+0J7RgtC/0YPRgdGC0LjRgtC1INGE0L7RgtC+0LPRgNCw0YTQuNGOINGB0Y7QtNCwPC9wPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIkRyb3BBcmVhXCIsXHJcbiAgICAgICAgZGF0YTogKHZtKSA9PiAoe3ZtfSksXHJcbiAgICAgICAgcHJvcHM6IFsneWV0J10sXHJcbiAgICAgICAgbW91bnRlZCh2bSkge1xyXG4gICAgICAgICAgICBsZXQgZHJvcEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcC1hcmVhJyk7XHJcbiAgICAgICAgICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJywgJ2RyYWdsZWF2ZScsICdkcm9wJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHByZXZlbnREZWZhdWx0cywgZmFsc2UpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdHMoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZvY3VzLCBmYWxzZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFsnZHJhZ2xlYXZlJywgJ2Ryb3AnXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkcm9wQXJlYS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdW5mb2N1cywgZmFsc2UpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZm9jdXMoZSkge1xyXG4gICAgICAgICAgICAgICAgZHJvcEFyZWEuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB1bmZvY3VzKGUpIHtcclxuICAgICAgICAgICAgICAgIGRyb3BBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzJylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlRHJvcCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHQgPSBlLmRhdGFUcmFuc2ZlclxyXG4gICAgICAgICAgICAgICAgbGV0IGZpbGVzID0gZHQuZmlsZXNcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRmlsZXMoZmlsZXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZURyb3AsIGZhbHNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgaGFuZGxlRmlsZXMoZmlsZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHt0YXJnZXQ6e2ZpbGVzfX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuZHJvcC1hcmVhOm5vdCguZHJvcC1zbSkge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjQUZBRkFGO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICNkcm9wLWFyZWEuZm9jdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvdmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb2N1cyAuaGlkZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb2N1cyAuaG92ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZHJvcC1hcmVhOm5vdCguZHJvcC1zbSkgLmRyb3AtZm9ybSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiA1MDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmRyb3AtYnRuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRyb3Atc20gLmRyb3AtYnRue1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAjZmlsZUVsZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbGUtZGVzYyB7XHJcblxyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBjb2xvcjogIzRBNEE0QTtcclxuICAgIH1cclxuXHJcbiAgICAuZHJvcC1zbSAuZmlsZS1kZXNjIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICB9XHJcbiAgICAuZm9ybWF0LWZpbGUtZGVzYyB7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI0FGQUZBRjtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cInNpdGUtcGhvdG8tY2FyZFwiXHJcbiAgICAgICAgIDpjbGFzcz1cIntmb2N1c2VkOiBmb2N1cywgZmlsbGVkfVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLXBob3RvLWNhcmQtY29udGVudFwiIHN0eWxlPVwiei1pbmRleDogMTtcIj5cclxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgIDx2LWltZyB2LWlmPVwibG9hZGVkICYmIHNyY1wiIDpzcmM9XCJzcmNcIiBjb3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIiBAY2xpY2s9XCIkZW1pdCgnY2xpY2snLCAkYXR0cnNbJ3ZhbHVlJ10pOyBvcGVuPXRydWVcIi8+XHJcbiAgICAgICAgICAgICAgICA8di1yb3cgdi1lbHNlLWlmPVwiIWxvYWRlZCAmJiAhZXJyb3JcIiB4cz1cIjEyXCIgY2xhc3M9XCJwYS04XCIgc3R5bGU9XCJhbGlnbi1pdGVtczogY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHByb2dyZXNzLWJhciA6cHJvZ3Jlc3M9XCJwcm9ncmVzc1wiLz5cclxuICAgICAgICAgICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgICAgIDwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1waG90by1jYXJkLWFjdGlvbnNcIiBzdHlsZT1cInotaW5kZXg6IDI7XCI+XHJcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8di1yb3cgeHM9XCIxMlwiIGNsYXNzPVwicGwtNSBwci01IHB0LTIganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8di1idG4gZmFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdkZWxldGUnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1kZWxldGU8L3YtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgPC92LXJvdz5cclxuICAgICAgICAgICAgPC9zbG90PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwib3BlblwiIHYtaWY9XCJvcGVuXCIgY29udGVudC1jbGFzcz1cInNtLXBob3RvLWRpYWxvZ1wiXHJcbiAgICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8di1pbWcgdi1pZj1cImxvYWRlZCAmJiBzcmNcIiA6c3JjPVwic3JjXCIgbWF4LWhlaWdodD1cIjkwdmhcIiBjb250YWluLz5cclxuICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIEBjbGljaz1cIiRlbWl0KCdmb2N1c091dCcpOyBvcGVuPWZhbHNlO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsb3NlLWJ0blwiID48di1pY29uPm1kaS1jbG9zZTwvdi1pY29uPjwvdi1idG4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdi1kaWFsb2c+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge2I2NFRvQmxvYiwgY29tcHJlc3N9IGZyb20gXCIuLi8uLi9pbWFnZVwiO1xyXG4gICAgaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiRWRpdFBob3RvQ2FyZFwiLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtQcm9ncmVzc0Jhcn0sXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZm9jdXM6IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSx9LFxyXG4gICAgICAgICAgICBwcmVsb2FkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSx9LFxyXG4gICAgICAgICAgICBjb3Zlcjoge3R5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIn0sXHJcbiAgICAgICAgICAgIGZpbGxlZDoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlfSxcclxuICAgICAgICAgICAgZmlsZToge3R5cGU6IEZpbGUgfCBTdHJpbmd9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XHJcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBmb2N1c2VkOiAhIXZtLiRhdHRyc1snZm9jdXMnXSxcclxuICAgICAgICAgICAgc3JjOiAnJyxcclxuICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMCxcclxuICAgICAgICAgICAgcm90YXRlVGltZW91dDogbnVsbCxcclxuICAgICAgICB9KSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwbG9hZCh0aGlzLmZpbGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBpc0NvdmVyKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY292ZXIgJiYgdGhpcy5zcmMuaW5kZXhPZih0aGlzLmNvdmVyKSAhPT0gLTFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICByb3RhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3RhdGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucm90YXRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXByZXNzVXJsID0gY29tcHJlc3MoaW1nLCAoY3R4LCBjYW52YXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoOTAgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAtaW1nLndpZHRoIC8gMiwgLWltZy53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBibG9iID0gYjY0VG9CbG9iKGNvbXByZXNzVXJsLnNwbGl0KCcsJylbMV0sICdpbWFnZS9qcGVnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkKGJsb2IsIHRoaXMuc3JjLnNwbGl0KCcvJykucmV2ZXJzZSgpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSB0aGlzLnNyYztcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlYWRMb2NhbFNyYyhmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlIGluc3RhbmNlb2YgQmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5zcmMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuc3JjID0gZmlsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBsb2FkKGZpbGUsIGNhbnZhc0ZpbGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJlbG9hZCB8fCAhKGZpbGUgaW5zdGFuY2VvZiBCbG9iKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZExvY2FsU3JjKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxyXG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBjYW52YXNGaWxlTmFtZSB8fCBmaWxlLm5hbWUpXHJcbiAgICAgICAgICAgICAgICB4aHIub3BlbignUE9TVCcsICcvcGhvdG8vdXBsb2FkJywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IChlLmxvYWRlZCAqIDEwMC4wIC8gZS50b3RhbCkgfHwgMTAwO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNyYyA9IGUudGFyZ2V0LnJlc3BvbnNlLnVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZS50YXJnZXQucmVzcG9uc2UudXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSA0MDAgJiYgIWNhbnZhc0ZpbGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL9CU0LvRjyDRhNCw0LnQu9C+0LIg0YEg0LHQuNGC0YvQvCDQvNCw0LnQvNGC0LjQv9C+0Lwg0YDQuNGB0YPQtdC8INC90LAg0LrQsNC90LLQtSDQuCDQvtGC0L/RgNCw0LLQu9GP0LXQvCDRgNC10LfRg9C70YzRgtCw0YJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXByZXNzVXJsID0gY29tcHJlc3MoaW1nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxvYiA9IGI2NFRvQmxvYihjb21wcmVzc1VybC5zcGxpdCgnLCcpWzFdLCAnaW1hZ2UvanBlZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkKGJsb2IsIGZpbGUubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkTG9jYWxTcmMoZmlsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICBmaWxlKG52KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG52ID09PSAnc3RyaW5nJykgdGhpcy5zcmMgPSBudjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLnNpdGUtcGhvdG8tY2FyZCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgLyogR3JleSA4MDAgKi9cclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLnNpdGUtcGhvdG8tY2FyZC5maWxsZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpdGUtcGhvdG8tY2FyZC5mb2N1c2VkLCAuc2l0ZS1waG90by1jYXJkOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDlweCByZ2JhKDE0MCwgMTQwLCAxNDAsIDAuNDkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1waG90by1jYXJkOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1NiU7IC8qIDE2LzkgKi9cclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1waG90by1jYXJkLWFjdGlvbnMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpdGUtcGhvdG8tY2FyZC1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXQtcGhvdG8taWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHN0eWxlPlxyXG5cclxuICAgIC5zbS1waG90by1kaWFsb2cgLnBob3RvLWNvdmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzMnB4O1xyXG4gICAgICAgIGxlZnQ6IDMycHg7XHJcbiAgICAgICAgei1pbmRleDogMTAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbS1waG90by1kaWFsb2cgLmNsb3NlLWJ0biB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMzJweDtcclxuICAgICAgICByaWdodDogMzJweDtcclxuICAgIH1cclxuXHJcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5ib3R0b20ge1xyXG4gICAgICAgIHJpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGJvdHRvbTogMzJweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAuc20tcGhvdG8tZGlhbG9nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTA1LCAxMDksIDExNiwgMC42KTtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZGlhbG9nLWltYWdlIC52LWltYWdle1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuICAgIC5kaWFsb2ctaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPHYtcm93IGNsYXNzPVwibWEtMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3RpdmVcIiA6c3R5bGU9XCJ7d2lkdGg6IHByb2dyZXNzKyclJ31cIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3Ytcm93PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogWydwcm9ncmVzcyddLFxyXG4gICAgICAgIG5hbWU6IFwiUHJvZ3Jlc3NCYXJcIlxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuZnVsbHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0UxRTFFMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZle1xyXG4gICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyZTNlNGUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPHYtY2FyZCBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBwdC00IHBiLTRcIiBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXIgZWxldmF0aW9uPVwiMFwiPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cIm9uZSAmJiBsb2FkZWRQaG90b3MubGVuZ3RoXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7bG9hZGVkUGhvdG9zWzBdLm5hbWV9fTwvZGl2PlxyXG4gICAgICAgIDx2LXJvdyB2LWlmPVwiIW9uZVwiIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgIDx2LWNvbCB4cz1cIjZcIiBtZD1cIjNcIiBzbT1cIjZcIiB2LWZvcj1cIihwaG90bywgaSkgaW4gY2Fyb3VzZWxQaG90b3NcIiA6a2V5PVwiaVwiIHYtaWY9XCIhIWNhcm91c2VsUGhvdG9zW2ldXCI+XHJcbiAgICAgICAgICAgICAgICA8ZWRpdC1waG90by1jYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwcmVsb2FkPVwicHJlbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmaWxsZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmZpbGU9XCJwaG90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBkZWxldGU9XCIoKSA9PiBkZWxldGVQaG90byhwaG90bywgaSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3YtY29sPlxyXG4gICAgICAgICAgICA8di1jb2wgeHM9XCI2XCIgbWQ9XCIzXCIgc209XCI2XCI+XHJcbiAgICAgICAgICAgICAgICA8ZWRpdC1waG90by1jYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiKCkgPT4gJHJlZnMuYnRuLmNsaWNrKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZHJvcC1hcmVhIEBjaGFuZ2U9XCJhZGRQaG90b1wiIDp5ZXQ9XCJjYXJvdXNlbFBob3Rvcy5sZW5ndGhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvZWRpdC1waG90by1jYXJkPlxyXG4gICAgICAgICAgICA8L3YtY29sPlxyXG4gICAgICAgIDwvdi1yb3c+XHJcbiAgICA8L3YtY2FyZD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gICAgaW1wb3J0IEVkaXRQaG90b0NhcmQgZnJvbSBcIi4vRWRpdFBob3RvQ2FyZFwiO1xyXG4gICAgaW1wb3J0IERyb3BBcmVhIGZyb20gXCIuL0Ryb3BBcmVhXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6ICdwaG90by1sb2FkZXInLFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHJhZGl1czoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbmU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGhvdG9zOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IChbXSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByZWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcG9uZW50czoge0Ryb3BBcmVhLCBFZGl0UGhvdG9DYXJkfSxcclxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICBuOiAwLFxyXG4gICAgICAgICAgICAgICAgcGhvdG86ICcnLFxyXG4gICAgICAgICAgICAgICAgbG9hZGVkUGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxQaG90b3M6IHZtLnBob3RvcyxcclxuICAgICAgICAgICAgICAgIGZpbGVJbWc6IG51bGwsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdXBkYXRlZCgpIHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZGVsZXRlUGhvdG8ocGhvdG8sIGNwaSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBob3RvLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZFBob3Rvcy5mb3JFYWNoKChmaWxlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlLm5hbWUgPT09IHBob3RvLm5hbWUpIGRlbGV0ZSB0aGlzLmxvYWRlZFBob3Rvc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVkLnB1c2godGhpcy5waG90b3NbY3BpXS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5jYXJvdXNlbFBob3Rvc1tjcGldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJvdXNlbFBob3RvcyA9IFsuLi50aGlzLmNhcm91c2VsUGhvdG9zXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0UGhvdG9zKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVkUGhvdG9zLmNvbmNhdCh0aGlzLmRlbGV0ZWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRGaXJzdCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRlZFBob3Rvc1swXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmV0dXJuRm9ybURhdGEodmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzYXZlLXBob3RvJywgdmFsKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cGRhdGVQaG90byh2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGhvdG8gPSB2YWxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Nyb3BwZXJEaWFsb2cgPSBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGlja09uSW5wdXQoKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZXMnKS5maWxlcyA9IChuZXcgRGF0YVRyYW5zZmVyKCkpLmZpbGVzO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVzJykuY2xpY2soKVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWRkUGhvdG8oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIFsuLi5ldmVudC50YXJnZXQuZmlsZXNdLmZvckVhY2goKHBob3RvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlSW1nID0gcGhvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZUltZy5zaXplID4gNTAyNDAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0KDQsNC30LzQtdGAINGE0LDQudC70LAg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINCx0L7Qu9GM0YjQtSA10JzQkSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9ICfQktGLINC90LUg0LzQvtC20LXRgtC1INC30LDQs9GA0YPQt9C40YLRjCDQsdC+0LvRjNGI0LUgMTAg0YTQvtGC0L7Qs9GA0LDRhNC40LknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxQaG90b3MgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuY2Fyb3VzZWxQaG90b3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlbG9hZCA/IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5maWxlSW1nKSA6IHRoaXMuZmlsZUltZ1xyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRQaG90b3MucHVzaCh0aGlzLmZpbGVJbWcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uID0gdGhpcy5sb2FkZWRQaG90b3MubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgcGhvdG9zKG52KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcm91c2VsUGhvdG9zID0gbnYubWFwKChmaWxlKSA9PiBmaWxlLmZpbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAucGhvdG8taW5wdXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cImNvdmVyXCI+XHJcbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVwiJHJvdXRlLnBhcmFtcy51c2VyX2lkID4gMCA/ICfQpNCw0LnQu9GLINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjycgOiAn0JzQvtC4INGE0LDQudC70YsnXCI+XHJcbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiZmlsZXMubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgICA8di1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8di1jYXJkICB2LWZvcj1cIihlbnRyeSwgaW5kZXgpIGluIGZpbGVzXCIgOmtleT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246cmVsYXRpdmU7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWEtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBjcnVkXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiAtMTBweDsgZm9udC1zaXplOiAxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxldGVfaWQgPSBlbnRyeS5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWRlbGV0ZTwvdi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkb3dubG9hZChlbnRyeS5pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWRvd25sb2FkPC92LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPVwibWF4LXdpZHRoOiA2MCVcIj57eyBlbnRyeS50aXRsZSB9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB4cy0xMlwiIHYtaWY9XCJsID4gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LXBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0b3RhbC12aXNpYmxlPVwiM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdi1wYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdi1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS0zXCI+0KTQsNC50LvQvtCyINC/0L7QutCwINC90LXRgjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8di1idG4gY2xhc3M9XCJzYXZlLWJ0blwiXHJcbiAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgIGZhYlxyXG4gICAgICAgICAgICAgICBAY2xpY2s9XCJvcGVuRGlhbG9nXCJcclxuICAgICAgICAgICAgICAgZGFyaz5cclxuICAgICAgICAgICAgPHYtaWNvbj5tZGktcGFwZXJjbGlwPC92LWljb24+XHJcbiAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICA8di1kaWFsb2dcclxuICAgICAgICAgICAgICAgIHYtaWY9XCJzaG93XCJcclxuICAgICAgICAgICAgICAgIDp2YWx1ZT1cInNob3dcIlxyXG4gICAgICAgICAgICAgICAgQGNsb3NlPVwiY2xvc2VEaWFsb2dcIlxyXG4gICAgICAgICAgICAgICAgOmZ1bGxzY3JlZW49XCIkdnVldGlmeS5icmVha3BvaW50Lm1vYmlsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdDpkZWZhdWx0PlxyXG4gICAgICAgICAgICAgICAgPHYtY2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhciAgY2xhc3M9XCJjb250YWluZXIgcHktMSBteS0wIGp1c3RpZnktc3BhY2UtYmV0d2VlblwiIGVsZXZhdGlvbj1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj7Ql9Cw0LPRgNGD0LfQutCwINGE0LDQudC70LA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlPjx2LWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXgtZ3Jvdy0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2xvc2VEaWFsb2dcIj5YPC92LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0YvQsdC10YDQuNGC0LUg0YTQsNC50Lsg0LTQu9GPINC30LDQs9GA0YPQt9C60LgsINC4INC+0LHQvtC30L3QsNGH0YLQtSDQtdCz0L5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZvcm0gQGtleXVwLm5hdGl2ZS5lbnRlcj1cInVwbG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbGUudGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J7QsdC+0LfQvdCw0YfQtdC90LjQtSjQmNC90L0sINC/0LDRgdC/0L7RgNGCKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwidGl0bGVFcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwaG90by1sb2FkZXIgOm9uZT1cInRydWVcIiByZWY9XCJsb2FkZXJcIj48L3Bob3RvLWxvYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZGFya1wiIEBjbGljaz1cInVwbG9hZFwiIDpkaXNhYmxlZD1cImZpbGUudGl0bGUgPT0gJydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LTRgtCy0LXRgNC00LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvdi1kaWFsb2c+XHJcbiAgICA8L3YtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBQaG90b0xvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9waG90by1sb2FkZXJcIjtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIkZpbGVzXCIsXHJcbiAgICAgICAgY29tcG9uZW50czoge1Bob3RvTG9hZGVyfSxcclxuICAgICAgICBkYXRhOiAodm0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGw6IDEsXHJcbiAgICAgICAgICAgICAgICBmaWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZV9pZDogMCxcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdGl0bGVFcnJvcjogJycsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvcGVuRGlhbG9nKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbG9zZURpYWxvZygpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRQYWdlKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnZmlsZT8nLCB7cGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogKHRoaXMuJHJvdXRlLnBhcmFtcy51c2VyX2lkID4gMCA/IHRoaXMuJHJvdXRlLnBhcmFtcy51c2VyX2lkIDogbnVsbClcclxuICAgICAgICAgICAgICAgIH19KS50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlcyA9IHIuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubCA9IHIuZGF0YS5sYXN0X3BhZ2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwbG9hZCgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdQaG90b3MgPSBbdGhpcy4kcmVmcy5sb2FkZXIuZ2V0Rmlyc3QoKV07XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3UGhvdG9zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICAgICAgICAgICAgICBuZXdQaG90b3MuZm9yRWFjaCgocGhvdG8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgcGhvdG8sIHBob3RvLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgdGhpcy5maWxlLnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvZmlsZS8nLCBmb3JtRGF0YSkudGhlbigocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAgYNCe0YjQuNCx0LrQsCDRgdC+0YXRgNCw0L3QtdC90LjRjyDRhNC+0YLQvtCz0YDQsNGE0LjQuGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZURpYWxvZygpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvd25sb2FkKGlkKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCdmaWxlLycraWQsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0pKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmsuaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBkZWNvZGVVUklDb21wb25lbnQocmVzcG9uc2UuaGVhZGVyc1snY29udGVudC1kaXNwb3NpdGlvbiddLnNwbGl0KCc7JylbMl0uc3BsaXQoXCJ1dGYtOCcnXCIpWzFdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlKCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZGVsZXRlKCcvZmlsZS8nK3RoaXMuZGVsZXRlX2lkKS50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9ICBg0J7RiNC40LHQutCwINGB0L7RhdGA0LDQvdC10L3QuNGPINGE0L7RgtC+0LPRgNCw0YTQuNC4YFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICBwYWdlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlbGV0ZV9pZChudikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG52ID4gMCkgdGhpcy5kZWxldGUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD4iLCJcclxuZXhwb3J0IGNvbnN0IGNvbXByZXNzID0gKGltZywgbW9kaWZ5Q29udGV4dCkgPT4ge1xyXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcbiAgICBsZXQgd2lkdGggPSBpbWcud2lkdGhcclxuICAgIGxldCBoZWlnaHQgPSBpbWcuaGVpZ2h0XHJcbiAgICAvLyBsb2coaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxyXG4gICAgLy8gbG9nKHdpZHRoLCBoZWlnaHQpXHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aFxyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodFxyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2ZmZidcclxuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxyXG4gICAgaWYgKG1vZGlmeUNvbnRleHQpIG1vZGlmeUNvbnRleHQoY29udGV4dCwgY2FudmFzKTtcclxuICAgIGVsc2UgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXHJcbiAgICBsZXQgYmFzZTY0RGF0YSA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnLCAwLjQpXHJcbiAgICBjYW52YXMgPSBjb250ZXh0ID0gbnVsbFxyXG4gICAgLy8gbG9nKGJhc2U2NERhdGEubGVuZ3RoKVxyXG4gICAgaW1nID0gbnVsbFxyXG4gICAgcmV0dXJuIGJhc2U2NERhdGFcclxufVxyXG5cclxuLy8gYmFzZTY0IGlzIGNvbnZlcnRlZCB0byBiaW5hcnkgZmlsZVxyXG5leHBvcnQgY29uc3QgYjY0VG9CbG9iID0gKGI2NERhdGEsIGNvbnRlbnRUeXBlKSA9PiB7XHJcbiAgICBjb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlIHx8ICcnXHJcblxyXG4gICAgbGV0IGJ5dGVDaGFyYWN0ZXJzID0gYXRvYihiNjREYXRhKSAvLyBEZWNvZGUgYmFzZTY0IGRhdGEgYXMgYSBiaW5hcnkgc3RyaW5nXHJcbiAgICBsZXQgYnVmZmVyID0gW10gLy8gTm90ZSB0aGF0IHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgYmxvYiBtdXN0IGJlIGFuIGFycmF5XHJcblxyXG4gICAgLy8gdHlwZSBhcnJheSBpcyB1c2VkIHRvIHByb2Nlc3MgYmluYXJ5IGZpbGVzXHJcbiAgICBsZXQgYUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlQ2hhcmFjdGVycy5sZW5ndGgpXHJcbiAgICBsZXQgdUJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGFCdWZmZXIpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVDaGFyYWN0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdUJ1ZmZlcltpXSA9IGJ5dGVDaGFyYWN0ZXJzLmNoYXJDb2RlQXQoaSkgLy8gZ2V0IFVuaWNvZGUgZW5jb2RpbmcsIHN0b3JlIGluIHR5cGUgYXJyYXlcclxuICAgIH1cclxuICAgIGJ1ZmZlci5wdXNoKHVCdWZmZXIpXHJcbiAgICAvLyBPcmRpbmFyeSBhcnJheSBpcyB1bmFibGUgdG8gZ2VuZXJhdGUgYmluYXJ5IGZpbGVzXHJcbiAgICByZXR1cm4gbmV3IEJsb2IoYnVmZmVyLCB7IC8vIGdlbmVyYXRlIGEgYmluYXJ5IGZpbGVcclxuICAgICAgICB0eXBlOiBjb250ZW50VHlwZVxyXG4gICAgfSlcclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kcm9wLWFyZWFbZGF0YS12LTU4ODFlOGYyXTpub3QoLmRyb3Atc20pIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjQUZBRkFGO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbiNkcm9wLWFyZWEuZm9jdXNbZGF0YS12LTU4ODFlOGYyXSB7XFxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxufVxcbi5ob3ZlcltkYXRhLXYtNTg4MWU4ZjJdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmZvY3VzIC5oaWRlW2RhdGEtdi01ODgxZThmMl0ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5mb2N1cyAuaG92ZXJbZGF0YS12LTU4ODFlOGYyXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcbnBbZGF0YS12LTU4ODFlOGYyXSB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5kcm9wLWFyZWE6bm90KC5kcm9wLXNtKSAuZHJvcC1mb3JtW2RhdGEtdi01ODgxZThmMl0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiA1MDtcXG59XFxuLmRyb3AtYnRuW2RhdGEtdi01ODgxZThmMl0ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZHJvcC1zbSAuZHJvcC1idG5bZGF0YS12LTU4ODFlOGYyXXtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbn1cXG4jZmlsZUVsZW1bZGF0YS12LTU4ODFlOGYyXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5maWxlLWRlc2NbZGF0YS12LTU4ODFlOGYyXSB7XFxuXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjJweDtcXG4gICAgY29sb3I6ICM0QTRBNEE7XFxufVxcbi5kcm9wLXNtIC5maWxlLWRlc2NbZGF0YS12LTU4ODFlOGYyXSB7XFxuICAgIGRpc3BsYXk6IG5vbmVcXG59XFxuLmZvcm1hdC1maWxlLWRlc2NbZGF0YS12LTU4ODFlOGYyXSB7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTlweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0FGQUZBRjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRHJvcEFyZWEudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEyREE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDBCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtBQUNBO0FBRUE7SUFDQSxtQkFBQTtBQUNBO0FBRUE7SUFDQSxhQUFBO0FBQ0E7QUFFQTtJQUNBLHdCQUFBO0FBQ0E7QUFFQTtJQUNBLHlCQUFBO0FBQ0E7QUFFQTtJQUNBLGFBQUE7QUFDQTtBQUVBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0FBQ0E7QUFHQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7QUFDQTtBQUNBO0lBQ0EsZUFBQTtBQUNBO0FBRUE7SUFDQSxhQUFBO0FBQ0E7QUFFQTs7SUFFQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtBQUNBO0FBRUE7SUFDQTtBQUNBO0FBQ0E7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGlkPVxcXCJkcm9wLWFyZWFcXFwiIGNsYXNzPVxcXCJkcm9wLWFyZWFcXFwiIDpjbGFzcz1cXFwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5zbUFuZERvd24gPyBbJ2Ryb3Atc20nXSA6IFtdXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJkcm9wLWZvcm1cXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBpZD1cXFwiZmlsZUVsZW1cXFwiIG11bHRpcGxlIGFjY2VwdD1cXFwiaW1hZ2UvKlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cXFwiKGUpID0+ICRlbWl0KCdjaGFuZ2UnLCBlKVxcXCIgY2xhc3M9XFxcImhpZGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZHJvcC1idG5cXFwiIGZvcj1cXFwiZmlsZUVsZW1cXFwiPnt7IXlldCA/ICfQl9Cw0LPRgNGD0LfQuNGC0Ywg0YTQvtGC0L4nIDogJ9CX0LDQs9GA0YPQt9C40YLRjCDQtdGJ0LUnfX08L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJmb3JtYXQtZmlsZS1kZXNjXFxcIj7QpNC+0YDQvNCw0YIg4oCTIGpwZywgcG5nPC9wPlxcclxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJmaWxlLWRlc2MgaG92ZXJcXFwiPtCe0YLQv9GD0YHRgtC40YLQtSDRhNC+0YLQvtCz0YDQsNGE0LjRjiDRgdGO0LTQsDwvcD5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBuYW1lOiBcXFwiRHJvcEFyZWFcXFwiLFxcclxcbiAgICAgICAgZGF0YTogKHZtKSA9PiAoe3ZtfSksXFxyXFxuICAgICAgICBwcm9wczogWyd5ZXQnXSxcXHJcXG4gICAgICAgIG1vdW50ZWQodm0pIHtcXHJcXG4gICAgICAgICAgICBsZXQgZHJvcEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcC1hcmVhJyk7XFxyXFxuICAgICAgICAgICAgWydkcmFnZW50ZXInLCAnZHJhZ292ZXInLCAnZHJhZ2xlYXZlJywgJ2Ryb3AnXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgIGRyb3BBcmVhLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBwcmV2ZW50RGVmYXVsdHMsIGZhbHNlKVxcclxcbiAgICAgICAgICAgIH0pXFxyXFxuXFxyXFxuICAgICAgICAgICAgZnVuY3Rpb24gcHJldmVudERlZmF1bHRzKGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXFxyXFxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgWydkcmFnZW50ZXInLCAnZHJhZ292ZXInXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgIGRyb3BBcmVhLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmb2N1cywgZmFsc2UpXFxyXFxuICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgWydkcmFnbGVhdmUnLCAnZHJvcCddLmZvckVhY2goZXZlbnROYW1lID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHVuZm9jdXMsIGZhbHNlKVxcclxcbiAgICAgICAgICAgIH0pO1xcclxcblxcclxcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZvY3VzKGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgZHJvcEFyZWEuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBmdW5jdGlvbiB1bmZvY3VzKGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgZHJvcEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVEcm9wID0gKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgbGV0IGR0ID0gZS5kYXRhVHJhbnNmZXJcXHJcXG4gICAgICAgICAgICAgICAgbGV0IGZpbGVzID0gZHQuZmlsZXNcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVGaWxlcyhmaWxlcylcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZURyb3AsIGZhbHNlKTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgaGFuZGxlRmlsZXMoZmlsZXMpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywge3RhcmdldDp7ZmlsZXN9fSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gICAgLmRyb3AtYXJlYTpub3QoLmRyb3Atc20pIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICNBRkFGQUY7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNkcm9wLWFyZWEuZm9jdXMge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI0Y4RjhGODtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaG92ZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9jdXMgLmhpZGUge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb2N1cyAuaG92ZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBwIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRyb3AtYXJlYTpub3QoLmRyb3Atc20pIC5kcm9wLWZvcm0ge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDUwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5kcm9wLWJ0biB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5kcm9wLXNtIC5kcm9wLWJ0bntcXHJcXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjZmlsZUVsZW0ge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmlsZS1kZXNjIHtcXHJcXG5cXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjNEE0QTRBO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kcm9wLXNtIC5maWxlLWRlc2Mge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZVxcclxcbiAgICB9XFxyXFxuICAgIC5mb3JtYXQtZmlsZS1kZXNjIHtcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGNvbG9yOiAjQUZBRkFGO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2l0ZS1waG90by1jYXJkW2RhdGEtdi00YWJlNDExZF0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgICAvKiBHcmV5IDgwMCAqL1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zaXRlLXBob3RvLWNhcmQuZmlsbGVkW2RhdGEtdi00YWJlNDExZF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xcbn1cXG4uc2l0ZS1waG90by1jYXJkLmZvY3VzZWRbZGF0YS12LTRhYmU0MTFkXSwgLnNpdGUtcGhvdG8tY2FyZFtkYXRhLXYtNGFiZTQxMWRdOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggcmdiYSgxNDAsIDE0MCwgMTQwLCAwLjQ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4uc2l0ZS1waG90by1jYXJkW2RhdGEtdi00YWJlNDExZF06YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1NiU7IC8qIDE2LzkgKi9cXG59XFxuLnNpdGUtcGhvdG8tY2FyZC1hY3Rpb25zW2RhdGEtdi00YWJlNDExZF0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaXRlLXBob3RvLWNhcmQtY29udGVudFtkYXRhLXYtNGFiZTQxMWRdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZWRpdC1waG90by1pY29uW2RhdGEtdi00YWJlNDExZF0ge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBb0pBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBOztJQUVBLGtCQUFBO0lBQ0EsZ0JBQUE7QUFDQTtBQUVBO0lBQ0EseUJBQUE7QUFDQTtBQUVBO0lBQ0EsaURBQUE7SUFDQSxrQkFBQTtBQUNBO0FBRUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBLEVBQUEsU0FBQTtBQUNBO0FBRUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxlQUFBO0FBQ0E7QUFFQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7QUFDQTtBQUVBO0lBQ0EsZ0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInNpdGUtcGhvdG8tY2FyZFxcXCJcXHJcXG4gICAgICAgICA6Y2xhc3M9XFxcIntmb2N1c2VkOiBmb2N1cywgZmlsbGVkfVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaXRlLXBob3RvLWNhcmQtY29udGVudFxcXCIgc3R5bGU9XFxcInotaW5kZXg6IDE7XFxcIj5cXHJcXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJkZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtaW1nIHYtaWY9XFxcImxvYWRlZCAmJiBzcmNcXFwiIDpzcmM9XFxcInNyY1xcXCIgY292ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cXFwiMTAwJVxcXCIgQGNsaWNrPVxcXCIkZW1pdCgnY2xpY2snLCAkYXR0cnNbJ3ZhbHVlJ10pOyBvcGVuPXRydWVcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtcm93IHYtZWxzZS1pZj1cXFwiIWxvYWRlZCAmJiAhZXJyb3JcXFwiIHhzPVxcXCIxMlxcXCIgY2xhc3M9XFxcInBhLThcXFwiIHN0eWxlPVxcXCJhbGlnbi1pdGVtczogY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwcm9ncmVzcy1iYXIgOnByb2dyZXNzPVxcXCJwcm9ncmVzc1xcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgICAgIDwvc2xvdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1waG90by1jYXJkLWFjdGlvbnNcXFwiIHN0eWxlPVxcXCJ6LWluZGV4OiAyO1xcXCI+XFxyXFxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiYWN0aW9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx2LXJvdyB4cz1cXFwiMTJcXFwiIGNsYXNzPVxcXCJwbC01IHByLTUgcHQtMiBqdXN0aWZ5LWVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8di1idG4gZmFiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIiRlbWl0KCdkZWxldGUnKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibXItM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgICAgIDwvc2xvdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XFxcIm9wZW5cXFwiIHYtaWY9XFxcIm9wZW5cXFwiIGNvbnRlbnQtY2xhc3M9XFxcInNtLXBob3RvLWRpYWxvZ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6ZnVsbHNjcmVlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGlhbG9nLWltYWdlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtaW1nIHYtaWY9XFxcImxvYWRlZCAmJiBzcmNcXFwiIDpzcmM9XFxcInNyY1xcXCIgbWF4LWhlaWdodD1cXFwiOTB2aFxcXCIgY29udGFpbi8+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIEBjbGljaz1cXFwiJGVtaXQoJ2ZvY3VzT3V0Jyk7IG9wZW49ZmFsc2U7XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcImdyYXlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY2xvc2UtYnRuXFxcIiA+PHYtaWNvbj5tZGktY2xvc2U8L3YtaWNvbj48L3YtYnRuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC92LWRpYWxvZz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBpbXBvcnQge2I2NFRvQmxvYiwgY29tcHJlc3N9IGZyb20gXFxcIi4uLy4uL2ltYWdlXFxcIjtcXHJcXG4gICAgaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXFxcIi4vUHJvZ3Jlc3NCYXJcXFwiO1xcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBuYW1lOiBcXFwiRWRpdFBob3RvQ2FyZFxcXCIsXFxyXFxuICAgICAgICBjb21wb25lbnRzOiB7UHJvZ3Jlc3NCYXJ9LFxcclxcbiAgICAgICAgcHJvcHM6IHtcXHJcXG4gICAgICAgICAgICBmb2N1czoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlLH0sXFxyXFxuICAgICAgICAgICAgcHJlbG9hZDoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUsfSxcXHJcXG4gICAgICAgICAgICBjb3Zlcjoge3R5cGU6IFN0cmluZywgZGVmYXVsdDogXFxcIlxcXCJ9LFxcclxcbiAgICAgICAgICAgIGZpbGxlZDoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlfSxcXHJcXG4gICAgICAgICAgICBmaWxlOiB7dHlwZTogRmlsZSB8IFN0cmluZ31cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XFxyXFxuICAgICAgICAgICAgb3BlbjogZmFsc2UsXFxyXFxuICAgICAgICAgICAgZm9jdXNlZDogISF2bS4kYXR0cnNbJ2ZvY3VzJ10sXFxyXFxuICAgICAgICAgICAgc3JjOiAnJyxcXHJcXG4gICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICBwcm9ncmVzczogMCxcXHJcXG4gICAgICAgICAgICByb3RhdGVUaW1lb3V0OiBudWxsLFxcclxcbiAgICAgICAgfSksXFxyXFxuICAgICAgICBtb3VudGVkKCkge1xcclxcbiAgICAgICAgICAgIHRoaXMudXBsb2FkKHRoaXMuZmlsZSlcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjb21wdXRlZDoge1xcclxcbiAgICAgICAgICAgIGlzQ292ZXIoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdmVyICYmIHRoaXMuc3JjLmluZGV4T2YodGhpcy5jb3ZlcikgIT09IC0xXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICAgICAgICByb3RhdGUoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvdGF0ZVRpbWVvdXQpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJvdGF0ZVRpbWVvdXQpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVUaW1lb3V0ID0gbnVsbDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGltZy5jcm9zc09yaWdpbiA9IFxcXCJhbm9ueW1vdXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb21wcmVzc1VybCA9IGNvbXByZXNzKGltZywgKGN0eCwgY2FudmFzKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgucm90YXRlKDkwICogTWF0aC5QSSAvIDE4MCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAtaW1nLndpZHRoIC8gMiwgLWltZy53aWR0aCAvIDIpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBibG9iID0gYjY0VG9CbG9iKGNvbXByZXNzVXJsLnNwbGl0KCcsJylbMV0sICdpbWFnZS9qcGVnJyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWQoYmxvYiwgdGhpcy5zcmMuc3BsaXQoJy8nKS5yZXZlcnNlKClbMF0pO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSB0aGlzLnNyYztcXHJcXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHJlYWRMb2NhbFNyYyhmaWxlKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGUgaW5zdGFuY2VvZiBCbG9iKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNyYyA9IHJlYWRlci5yZXN1bHQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5zcmMpXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLnNyYyA9IGZpbGU7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHVwbG9hZChmaWxlLCBjYW52YXNGaWxlTmFtZSkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJlbG9hZCB8fCAhKGZpbGUgaW5zdGFuY2VvZiBCbG9iKSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkTG9jYWxTcmMoZmlsZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXFxyXFxuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XFxyXFxuICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXFxyXFxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGNhbnZhc0ZpbGVOYW1lIHx8IGZpbGUubmFtZSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAnL3Bob3RvL3VwbG9hZCcsIHRydWUpXFxyXFxuICAgICAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcXFwicHJvZ3Jlc3NcXFwiLCAoZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IChlLmxvYWRlZCAqIDEwMC4wIC8gZS50b3RhbCkgfHwgMTAwO1xcclxcbiAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIChlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gZS50YXJnZXQucmVzcG9uc2UudXJsO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGUudGFyZ2V0LnJlc3BvbnNlLnVybCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgIT0gMjAwKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gNDAwICYmICFjYW52YXNGaWxlTmFtZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL9CU0LvRjyDRhNCw0LnQu9C+0LIg0YEg0LHQuNGC0YvQvCDQvNCw0LnQvNGC0LjQv9C+0Lwg0YDQuNGB0YPQtdC8INC90LAg0LrQsNC90LLQtSDQuCDQvtGC0L/RgNCw0LLQu9GP0LXQvCDRgNC10LfRg9C70YzRgtCw0YJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXByZXNzVXJsID0gY29tcHJlc3MoaW1nKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBibG9iID0gYjY0VG9CbG9iKGNvbXByZXNzVXJsLnNwbGl0KCcsJylbMV0sICdpbWFnZS9qcGVnJyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZChibG9iLCBmaWxlLm5hbWUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRMb2NhbFNyYyhmaWxlKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmxvYWRlZCA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB3YXRjaDoge1xcclxcbiAgICAgICAgICAgIGZpbGUobnYpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBudiA9PT0gJ3N0cmluZycpIHRoaXMuc3JjID0gbnY7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuICAgICAgICAvKiBHcmV5IDgwMCAqL1xcclxcblxcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkLmZpbGxlZCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQuZm9jdXNlZCwgLnNpdGUtcGhvdG8tY2FyZDpob3ZlciB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDlweCByZ2JhKDE0MCwgMTQwLCAxNDAsIDAuNDkpO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQ6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1NiU7IC8qIDE2LzkgKi9cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkLWFjdGlvbnMge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZC1jb250ZW50IHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZWRpdC1waG90by1pY29uIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcbjxzdHlsZT5cXHJcXG5cXHJcXG4gICAgLnNtLXBob3RvLWRpYWxvZyAucGhvdG8tY292ZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAzMnB4O1xcclxcbiAgICAgICAgbGVmdDogMzJweDtcXHJcXG4gICAgICAgIHotaW5kZXg6IDEwMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5jbG9zZS1idG4ge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAzMnB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDMycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNtLXBob3RvLWRpYWxvZyAuYm90dG9tIHtcXHJcXG4gICAgICAgIHJpZ2h0OiAzMnB4O1xcclxcbiAgICAgICAgYm90dG9tOiAzMnB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNtLXBob3RvLWRpYWxvZyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMDUsIDEwOSwgMTE2LCAwLjYpO1xcclxcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kaWFsb2ctaW1hZ2UgLnYtaW1hZ2V7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRpYWxvZy1pbWFnZSB7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zbS1waG90by1kaWFsb2cgLnBob3RvLWNvdmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMycHg7XFxuICAgIGxlZnQ6IDMycHg7XFxuICAgIHotaW5kZXg6IDEwMTtcXG59XFxuLnNtLXBob3RvLWRpYWxvZyAuY2xvc2UtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMycHg7XFxuICAgIHJpZ2h0OiAzMnB4O1xcbn1cXG4uc20tcGhvdG8tZGlhbG9nIC5ib3R0b20ge1xcbiAgICByaWdodDogMzJweDtcXG4gICAgYm90dG9tOiAzMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4uc20tcGhvdG8tZGlhbG9nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDUsIDEwOSwgMTE2LCAwLjYpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZGlhbG9nLWltYWdlIC52LWltYWdle1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5kaWFsb2ctaW1hZ2Uge1xcbiAgICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcXG4gICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0VkaXRQaG90b0NhcmQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFtTUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtBQUNBO0FBRUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0FBQ0E7QUFFQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSwwQkFBQTtJQUFBLHVCQUFBO0lBQUEsa0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7QUFDQTtBQUVBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0NBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtBQUNBO0FBRUE7SUFDQSxrQkFBQTtBQUNBO0FBQ0E7SUFDQSwwQkFBQTtJQUFBLHVCQUFBO0lBQUEsa0JBQUE7SUFDQSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1waG90by1jYXJkXFxcIlxcclxcbiAgICAgICAgIDpjbGFzcz1cXFwie2ZvY3VzZWQ6IGZvY3VzLCBmaWxsZWR9XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNpdGUtcGhvdG8tY2FyZC1jb250ZW50XFxcIiBzdHlsZT1cXFwiei1pbmRleDogMTtcXFwiPlxcclxcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8di1pbWcgdi1pZj1cXFwibG9hZGVkICYmIHNyY1xcXCIgOnNyYz1cXFwic3JjXFxcIiBjb3ZlclxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVxcXCIxMDAlXFxcIiBAY2xpY2s9XFxcIiRlbWl0KCdjbGljaycsICRhdHRyc1sndmFsdWUnXSk7IG9wZW49dHJ1ZVxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8di1yb3cgdi1lbHNlLWlmPVxcXCIhbG9hZGVkICYmICFlcnJvclxcXCIgeHM9XFxcIjEyXFxcIiBjbGFzcz1cXFwicGEtOFxcXCIgc3R5bGU9XFxcImFsaWduLWl0ZW1zOiBjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHByb2dyZXNzLWJhciA6cHJvZ3Jlc3M9XFxcInByb2dyZXNzXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgIDwvdi1yb3c+XFxyXFxuICAgICAgICAgICAgPC9zbG90PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaXRlLXBob3RvLWNhcmQtYWN0aW9uc1xcXCIgc3R5bGU9XFxcInotaW5kZXg6IDI7XFxcIj5cXHJcXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJhY3Rpb25zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtcm93IHhzPVxcXCIxMlxcXCIgY2xhc3M9XFxcInBsLTUgcHItNSBwdC0yIGp1c3RpZnktZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBmYWJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ2RlbGV0ZScpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtci0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1kZWxldGU8L3YtaWNvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICAgICAgICAgIDwvdi1yb3c+XFxyXFxuICAgICAgICAgICAgPC9zbG90PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwib3BlblxcXCIgdi1pZj1cXFwib3BlblxcXCIgY29udGVudC1jbGFzcz1cXFwic20tcGhvdG8tZGlhbG9nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaWFsb2ctaW1hZ2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8di1pbWcgdi1pZj1cXFwibG9hZGVkICYmIHNyY1xcXCIgOnNyYz1cXFwic3JjXFxcIiBtYXgtaGVpZ2h0PVxcXCI5MHZoXFxcIiBjb250YWluLz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIGljb24gQGNsaWNrPVxcXCIkZW1pdCgnZm9jdXNPdXQnKTsgb3Blbj1mYWxzZTtcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiZ3JheVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjbG9zZS1idG5cXFwiID48di1pY29uPm1kaS1jbG9zZTwvdi1pY29uPjwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L3YtZGlhbG9nPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCB7YjY0VG9CbG9iLCBjb21wcmVzc30gZnJvbSBcXFwiLi4vLi4vaW1hZ2VcXFwiO1xcclxcbiAgICBpbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcXFwiLi9Qcm9ncmVzc0JhclxcXCI7XFxyXFxuXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG5hbWU6IFxcXCJFZGl0UGhvdG9DYXJkXFxcIixcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHtQcm9ncmVzc0Jhcn0sXFxyXFxuICAgICAgICBwcm9wczoge1xcclxcbiAgICAgICAgICAgIGZvY3VzOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UsfSxcXHJcXG4gICAgICAgICAgICBwcmVsb2FkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSx9LFxcclxcbiAgICAgICAgICAgIGNvdmVyOiB7dHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcXFwiXFxcIn0sXFxyXFxuICAgICAgICAgICAgZmlsbGVkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2V9LFxcclxcbiAgICAgICAgICAgIGZpbGU6IHt0eXBlOiBGaWxlIHwgU3RyaW5nfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGRhdGE6ICh2bSkgPT4gKHtcXHJcXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICBmb2N1c2VkOiAhIXZtLiRhdHRyc1snZm9jdXMnXSxcXHJcXG4gICAgICAgICAgICBzcmM6ICcnLFxcclxcbiAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXFxyXFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIHByb2dyZXNzOiAwLFxcclxcbiAgICAgICAgICAgIHJvdGF0ZVRpbWVvdXQ6IG51bGwsXFxyXFxuICAgICAgICB9KSxcXHJcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy51cGxvYWQodGhpcy5maWxlKVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgICAgICAgaXNDb3ZlcigpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY292ZXIgJiYgdGhpcy5zcmMuaW5kZXhPZih0aGlzLmNvdmVyKSAhPT0gLTFcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIHJvdGF0ZSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm90YXRlVGltZW91dCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucm90YXRlVGltZW91dCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVRpbWVvdXQgPSBudWxsO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gXFxcImFub255bW91c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXByZXNzVXJsID0gY29tcHJlc3MoaW1nLCAoY3R4LCBjYW52YXMpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoOTAgKiBNYXRoLlBJIC8gMTgwKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIC1pbWcud2lkdGggLyAyLCAtaW1nLndpZHRoIC8gMik7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBiNjRUb0Jsb2IoY29tcHJlc3NVcmwuc3BsaXQoJywnKVsxXSwgJ2ltYWdlL2pwZWcnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZChibG9iLCB0aGlzLnNyYy5zcGxpdCgnLycpLnJldmVyc2UoKVswXSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9O1xcclxcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMuc3JjO1xcclxcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgcmVhZExvY2FsU3JjKGZpbGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZSBpbnN0YW5jZW9mIEJsb2IpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gcmVhZGVyLnJlc3VsdDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLnNyYylcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHRoaXMuc3JjID0gZmlsZTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgdXBsb2FkKGZpbGUsIGNhbnZhc0ZpbGVOYW1lKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcmVsb2FkIHx8ICEoZmlsZSBpbnN0YW5jZW9mIEJsb2IpKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRMb2NhbFNyYyhmaWxlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcXHJcXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcXHJcXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgY2FudmFzRmlsZU5hbWUgfHwgZmlsZS5uYW1lKVxcclxcbiAgICAgICAgICAgICAgICB4aHIub3BlbignUE9TVCcsICcvcGhvdG8vdXBsb2FkJywgdHJ1ZSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFxcXCJwcm9ncmVzc1xcXCIsIChlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gKGUubG9hZGVkICogMTAwLjAgLyBlLnRvdGFsKSB8fCAxMDA7XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcmMgPSBlLnRhcmdldC5yZXNwb25zZS51cmw7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZS50YXJnZXQucmVzcG9uc2UudXJsKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyAhPSAyMDApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSA0MDAgJiYgIWNhbnZhc0ZpbGVOYW1lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v0JTQu9GPINGE0LDQudC70L7QsiDRgSDQsdC40YLRi9C8INC80LDQudC80YLQuNC/0L7QvCDRgNC40YHRg9C10Lwg0L3QsCDQutCw0L3QstC1INC4INC+0YLQv9GA0LDQstC70Y/QtdC8INGA0LXQt9GD0LvRjNGC0LDRglxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29tcHJlc3NVcmwgPSBjb21wcmVzcyhpbWcpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBiNjRUb0Jsb2IoY29tcHJlc3NVcmwuc3BsaXQoJywnKVsxXSwgJ2ltYWdlL2pwZWcnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkKGJsb2IsIGZpbGUubmFtZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZExvY2FsU3JjKGZpbGUpXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMubG9hZGVkID0gdHJ1ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHdhdGNoOiB7XFxyXFxuICAgICAgICAgICAgZmlsZShudikge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG52ID09PSAnc3RyaW5nJykgdGhpcy5zcmMgPSBudjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4gICAgICAgIC8qIEdyZXkgODAwICovXFxyXFxuXFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQuZmlsbGVkIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZC5mb2N1c2VkLCAuc2l0ZS1waG90by1jYXJkOmhvdmVyIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IHJnYmEoMTQwLCAxNDAsIDE0MCwgMC40OSk7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtcGhvdG8tY2FyZDphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDU2JTsgLyogMTYvOSAqL1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXBob3RvLWNhcmQtYWN0aW9ucyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS1waG90by1jYXJkLWNvbnRlbnQge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5lZGl0LXBob3RvLWljb24ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPHN0eWxlPlxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5waG90by1jb3ZlciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDMycHg7XFxyXFxuICAgICAgICBsZWZ0OiAzMnB4O1xcclxcbiAgICAgICAgei1pbmRleDogMTAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbS1waG90by1kaWFsb2cgLmNsb3NlLWJ0biB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDMycHg7XFxyXFxuICAgICAgICByaWdodDogMzJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIC5ib3R0b20ge1xcclxcbiAgICAgICAgcmlnaHQ6IDMycHg7XFxyXFxuICAgICAgICBib3R0b206IDMycHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc20tcGhvdG8tZGlhbG9nIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgMTA5LCAxMTYsIDAuNik7XFxyXFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRpYWxvZy1pbWFnZSAudi1pbWFnZXtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZGlhbG9nLWltYWdlIHtcXHJcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZ1bGxbZGF0YS12LWQ0YTZhMmVhXXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIGJhY2tncm91bmQ6ICNFMUUxRTE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLmFjdGl2ZVtkYXRhLXYtZDRhNmEyZWFde1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYmFja2dyb3VuZDogIzJlM2U0ZSAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ0JBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7QUFDQTtBQUNBO0lBQ0EsV0FBQTtJQUNBLDhCQUFBO0lBQ0Esa0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx2LXJvdyBjbGFzcz1cXFwibWEtMFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmdWxsXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY3RpdmVcXFwiIDpzdHlsZT1cXFwie3dpZHRoOiBwcm9ncmVzcysnJSd9XFxcIi8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC92LXJvdz5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIHByb3BzOiBbJ3Byb2dyZXNzJ10sXFxyXFxuICAgICAgICBuYW1lOiBcXFwiUHJvZ3Jlc3NCYXJcXFwiXFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgICAuZnVsbHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTFFMUUxO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hY3RpdmV7XFxyXFxuICAgICAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICMyZTNlNGUgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBob3RvLWlucHV0W2RhdGEtdi02NDZmZDhkOV0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMkhBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHYtY2FyZCBjbGFzcz1cXFwiZC1mbGV4IGZsZXgtY29sdW1uIHB0LTQgcGItNFxcXCIganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIGVsZXZhdGlvbj1cXFwiMFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IHYtaWY9XFxcIm9uZSAmJiBsb2FkZWRQaG90b3MubGVuZ3RoXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPnt7bG9hZGVkUGhvdG9zWzBdLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcIiFvbmVcXFwiIGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgIDx2LWNvbCB4cz1cXFwiNlxcXCIgbWQ9XFxcIjNcXFwiIHNtPVxcXCI2XFxcIiB2LWZvcj1cXFwiKHBob3RvLCBpKSBpbiBjYXJvdXNlbFBob3Rvc1xcXCIgOmtleT1cXFwiaVxcXCIgdi1pZj1cXFwiISFjYXJvdXNlbFBob3Rvc1tpXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxlZGl0LXBob3RvLWNhcmRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6cHJlbG9hZD1cXFwicHJlbG9hZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmlsbGVkPVxcXCJ0cnVlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmaWxlPVxcXCJwaG90b1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBAZGVsZXRlPVxcXCIoKSA9PiBkZWxldGVQaG90byhwaG90bywgaSlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxcclxcbiAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgIDwvdi1jb2w+XFxyXFxuICAgICAgICAgICAgPHYtY29sIHhzPVxcXCI2XFxcIiBtZD1cXFwiM1xcXCIgc209XFxcIjZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZWRpdC1waG90by1jYXJkXFxyXFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIigpID0+ICRyZWZzLmJ0bi5jbGljaygpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkcm9wLWFyZWEgQGNoYW5nZT1cXFwiYWRkUGhvdG9cXFwiIDp5ZXQ9XFxcImNhcm91c2VsUGhvdG9zLmxlbmd0aFxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3Rpb25zPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhpZGRlblxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICA8L2VkaXQtcGhvdG8tY2FyZD5cXHJcXG4gICAgICAgICAgICA8L3YtY29sPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgPC92LWNhcmQ+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcblxcclxcbiAgICBpbXBvcnQgRWRpdFBob3RvQ2FyZCBmcm9tIFxcXCIuL0VkaXRQaG90b0NhcmRcXFwiO1xcclxcbiAgICBpbXBvcnQgRHJvcEFyZWEgZnJvbSBcXFwiLi9Ecm9wQXJlYVxcXCI7XFxyXFxuXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG5hbWU6ICdwaG90by1sb2FkZXInLFxcclxcbiAgICAgICAgcHJvcHM6IHtcXHJcXG4gICAgICAgICAgICByYWRpdXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgb25lOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgcGhvdG9zOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiAoW10pLFxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgcHJlbG9hZDoge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY29tcG9uZW50czoge0Ryb3BBcmVhLCBFZGl0UGhvdG9DYXJkfSxcXHJcXG4gICAgICAgIGRhdGE6ICh2bSkgPT4gKHtcXHJcXG4gICAgICAgICAgICAgICAgbjogMCxcXHJcXG4gICAgICAgICAgICAgICAgcGhvdG86ICcnLFxcclxcbiAgICAgICAgICAgICAgICBsb2FkZWRQaG90b3M6IFtdLFxcclxcbiAgICAgICAgICAgICAgICBkZWxldGVkOiBbXSxcXHJcXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxQaG90b3M6IHZtLnBob3RvcyxcXHJcXG4gICAgICAgICAgICAgICAgZmlsZUltZzogbnVsbCxcXHJcXG4gICAgICAgIH0pLFxcclxcbiAgICAgICAgdXBkYXRlZCgpIHtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgZGVsZXRlUGhvdG8ocGhvdG8sIGNwaSkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAocGhvdG8ubmFtZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRQaG90b3MuZm9yRWFjaCgoZmlsZSwgaSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlLm5hbWUgPT09IHBob3RvLm5hbWUpIGRlbGV0ZSB0aGlzLmxvYWRlZFBob3Rvc1tpXTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVkLnB1c2godGhpcy5waG90b3NbY3BpXS5pZCk7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2Fyb3VzZWxQaG90b3NbY3BpXTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJvdXNlbFBob3RvcyA9IFsuLi50aGlzLmNhcm91c2VsUGhvdG9zXTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGdldFBob3RvcygpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVkUGhvdG9zLmNvbmNhdCh0aGlzLmRlbGV0ZWQpO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZ2V0Rmlyc3QoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRlZFBob3Rvc1swXTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHJldHVybkZvcm1EYXRhKHZhbCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzYXZlLXBob3RvJywgdmFsKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgdXBkYXRlUGhvdG8odmFsKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucGhvdG8gPSB2YWxcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q3JvcHBlckRpYWxvZyA9IGZhbHNlXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBjbGlja09uSW5wdXQoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmZpbGVzID0gKG5ldyBEYXRhVHJhbnNmZXIoKSkuZmlsZXM7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmNsaWNrKClcXHJcXG5cXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGFkZFBob3RvKGV2ZW50KSB7XFxyXFxuICAgICAgICAgICAgICAgIFsuLi5ldmVudC50YXJnZXQuZmlsZXNdLmZvckVhY2goKHBob3RvKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbWcgPSBwaG90bztcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVJbWcuc2l6ZSA+IDUwMjQwMDApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0KDQsNC30LzQtdGAINGE0LDQudC70LAg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINCx0L7Qu9GM0YjQtSA10JzQkSdcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkZWRQaG90b3MubGVuZ3RoID4gMTApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0JLRiyDQvdC1INC80L7QttC10YLQtSDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LHQvtC70YzRiNC1IDEwINGE0L7RgtC+0LPRgNCw0YTQuNC5J1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxQaG90b3MgPSBbXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5jYXJvdXNlbFBob3RvcyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWxvYWQgPyBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZUltZykgOiB0aGlzLmZpbGVJbWdcXHJcXG4gICAgICAgICAgICAgICAgICAgIF07XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZFBob3Rvcy5wdXNoKHRoaXMuZmlsZUltZylcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubiA9IHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aCAtIDFcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IG51bGw7XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB3YXRjaDoge1xcclxcbiAgICAgICAgICAgIHBob3Rvcyhudikge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmNhcm91c2VsUGhvdG9zID0gbnYubWFwKChmaWxlKSA9PiBmaWxlLmZpbGUpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAgIC5waG90by1pbnB1dCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ODgxZThmMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ecm9wQXJlYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ecm9wQXJlYS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ODgxZThmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTg4MWU4ZjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1ODgxZThmMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1ODgxZThmMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1ODgxZThmMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRHJvcEFyZWEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU4ODFlOGYyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU4ODFlOGYyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ecm9wQXJlYS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhYmU0MTFkJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhYmU0MTFkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjRhYmU0MTFkXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGFiZTQxMWQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGFiZTQxMWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGFiZTQxMWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhYmU0MTFkJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRhYmU0MTFkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9FZGl0UGhvdG9DYXJkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ0YTZhMmVhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ0YTZhMmVhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJkNGE2YTJlYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Q0YTZhMmVhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Q0YTZhMmVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Q0YTZhMmVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDRhNmEyZWEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDRhNmEyZWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjQ2ZmQ4ZDlcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NDZmZDhkOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NDZmZDhkOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NDZmZDhkOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NDZmZDhkOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmlsZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0N2I2ZjNlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpbGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlsZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NDdiNmYzZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NDdiNmYzZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NDdiNmYzZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmlsZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0N2I2ZjNlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU0N2I2ZjNlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvRmlsZXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcC1hcmVhXCIsXG4gICAgICBjbGFzczogX3ZtLiR2dWV0aWZ5LmJyZWFrcG9pbnQuc21BbmREb3duID8gW1wiZHJvcC1zbVwiXSA6IFtdLFxuICAgICAgYXR0cnM6IHsgaWQ6IFwiZHJvcC1hcmVhXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJmb3JtXCIsIHsgc3RhdGljQ2xhc3M6IFwiZHJvcC1mb3JtXCIgfSwgW1xuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJoaWRlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgaWQ6IFwiZmlsZUVsZW1cIixcbiAgICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgICAgYWNjZXB0OiBcImltYWdlLypcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY2hhbmdlXCIsIGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImRyb3AtYnRuXCIsIGF0dHJzOiB7IGZvcjogXCJmaWxlRWxlbVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoIV92bS55ZXQgPyBcItCX0LDQs9GA0YPQt9C40YLRjCDRhNC+0YLQvlwiIDogXCLQl9Cw0LPRgNGD0LfQuNGC0Ywg0LXRidC1XCIpKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybWF0LWZpbGUtZGVzY1wiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLQpNC+0YDQvNCw0YIg4oCTIGpwZywgcG5nXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLWRlc2MgaG92ZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi0J7RgtC/0YPRgdGC0LjRgtC1INGE0L7RgtC+0LPRgNCw0YTQuNGOINGB0Y7QtNCwXCIpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJzaXRlLXBob3RvLWNhcmRcIixcbiAgICAgIGNsYXNzOiB7IGZvY3VzZWQ6IF92bS5mb2N1cywgZmlsbGVkOiBfdm0uZmlsbGVkIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS1waG90by1jYXJkLWNvbnRlbnRcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInotaW5kZXhcIjogXCIxXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIF92bS5sb2FkZWQgJiYgX3ZtLnNyY1xuICAgICAgICAgICAgICAgID8gX2MoXCJ2LWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnNyYywgY292ZXI6IFwiXCIsIGhlaWdodDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJjbGlja1wiLCBfdm0uJGF0dHJzW1widmFsdWVcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3BlbiA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiAhX3ZtLmxvYWRlZCAmJiAhX3ZtLmVycm9yXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGEtOFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiYWxpZ24taXRlbXNcIjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHhzOiBcIjEyXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJwcm9ncmVzcy1iYXJcIiwgeyBhdHRyczogeyBwcm9ncmVzczogX3ZtLnByb2dyZXNzIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaXRlLXBob3RvLWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiei1pbmRleFwiOiBcIjJcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3QoXCJhY3Rpb25zXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBsLTUgcHItNSBwdC0yIGp1c3RpZnktZW5kXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB4czogXCIxMlwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmFiOiBcIlwiLCBzbWFsbDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJkZWxldGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLWRlbGV0ZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ub3BlblxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBcImNvbnRlbnQtY2xhc3NcIjogXCJzbS1waG90by1kaWFsb2dcIiwgZnVsbHNjcmVlbjogdHJ1ZSB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3BlbixcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0ub3BlbiA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcGVuXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpYWxvZy1pbWFnZVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRlZCAmJiBfdm0uc3JjXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5zcmMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4LWhlaWdodFwiOiBcIjkwdmhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIsIGNvbG9yOiBcImdyYXlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcImZvY3VzT3V0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLWNsb3NlXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ2LXJvd1wiLCB7IHN0YXRpY0NsYXNzOiBcIm1hLTBcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiwgc3R5bGU6IHsgd2lkdGg6IF92bS5wcm9ncmVzcyArIFwiJVwiIH0gfSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNhcmRcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4gcHQtNCBwYi00XCIsXG4gICAgICBhdHRyczogeyBcImp1c3RpZnktY2VudGVyXCI6IFwiXCIsIFwiYWxpZ24tY2VudGVyXCI6IFwiXCIsIGVsZXZhdGlvbjogXCIwXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLm9uZSAmJiBfdm0ubG9hZGVkUGhvdG9zLmxlbmd0aFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sb2FkZWRQaG90b3NbMF0ubmFtZSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhX3ZtLm9uZVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uY2Fyb3VzZWxQaG90b3MsIGZ1bmN0aW9uKHBob3RvLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhX3ZtLmNhcm91c2VsUGhvdG9zW2ldXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaSwgYXR0cnM6IHsgeHM6IFwiNlwiLCBtZDogXCIzXCIsIHNtOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJlZGl0LXBob3RvLWNhcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWQ6IF92bS5wcmVsb2FkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiBwaG90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlUGhvdG8ocGhvdG8sIGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czogXCI2XCIsIG1kOiBcIjNcIiwgc206IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJlZGl0LXBob3RvLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJlZnMuYnRuLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoaWRkZW5cIiB9KV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICA4MTAwMjExNzBcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRyb3AtYXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB5ZXQ6IF92bS5jYXJvdXNlbFBob3Rvcy5sZW5ndGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmFkZFBob3RvIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvdmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIsIGp1c3RpZnk6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgX3ZtLiRyb3V0ZS5wYXJhbXMudXNlcl9pZCA+IDAgPyBcItCk0LDQudC70Ysg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIgOiBcItCc0L7QuCDRhNCw0LnQu9GLXCJcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5maWxlcy5sZW5ndGggPiAwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5maWxlcywgZnVuY3Rpb24oZW50cnksIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYS0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBlbGV2YXRpb246IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGNydWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIi0xMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlX2lkID0gZW50cnkuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcIm1kaS1kZWxldGVcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRvd25sb2FkKGVudHJ5LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLWRvd25sb2FkXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCI2MCVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhlbnRyeS50aXRsZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmwgPiAxXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciB4cy0xMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsZW5ndGg6IF92bS5sLCBcInRvdGFsLXZpc2libGVcIjogMyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG15LTNcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcItCk0LDQudC70L7QsiDQv9C+0LrQsCDQvdC10YJcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1idG5cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNhdmUtYnRuXCIsXG4gICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwic3VjY2Vzc1wiLCBmYWI6IFwiXCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9wZW5EaWFsb2cgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcIm1kaS1wYXBlcmNsaXBcIildKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnNob3dcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3csXG4gICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogX3ZtLiR2dWV0aWZ5LmJyZWFrcG9pbnQubW9iaWxlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsb3NlOiBfdm0uY2xvc2VEaWFsb2cgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250YWluZXIgcHktMSBteS0wIGp1c3RpZnktc3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZWxldmF0aW9uOiBcIjFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcItCX0LDQs9GA0YPQt9C60LAg0YTQsNC50LvQsFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleC1ncm93LTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlRGlhbG9nIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiWFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0YvQsdC10YDQuNGC0LUg0YTQsNC50Lsg0LTQu9GPINC30LDQs9GA0YPQt9C60LgsINC4INC+0LHQvtC30L3QsNGH0YLQtSDQtdCz0L5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwbG9hZC5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQntCx0L7Qt9C90LDRh9C10L3QuNC1KNCY0L3QvSwg0L/QsNGB0L/QvtGA0YIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0udGl0bGVFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbGUudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpbGUsIFwidGl0bGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWxlLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwaG90by1sb2FkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwibG9hZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9uZTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImRhcmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmZpbGUudGl0bGUgPT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnVwbG9hZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC00YLQstC10YDQtNC40YLRjFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU4ODFlOGYyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI5ZTg1ZTBmYVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3BBcmVhLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU4ODFlOGYyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRHJvcEFyZWEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTg4MWU4ZjImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YWJlNDExZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjAwOGY4ZWFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhYmU0MTFkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFBob3RvQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YWJlNDExZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwOGMyNzc4Y1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRQaG90b0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0UGhvdG9DYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ0YTZhMmVhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyOGYzZTM3Y1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ0YTZhMmVhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDRhNmEyZWEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0NmZkOGQ5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2MTg1ZGQyYVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==