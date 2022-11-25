(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Files_vue"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "\n.photo-input[data-v-646fd8d9] {\n    position: absolute;\n    visibility: hidden;\n}\n.user-photo[data-v-646fd8d9] {\n    border-radius: 200px;\n    width: 300px;\n    height: auto;\n    max-height: 500px;\n    border: 1px solid #01aefe;\n}\n.user-photo-module[data-v-646fd8d9] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/photo-loader.vue"],"names":[],"mappings":";AA2FA;IACA,kBAAA;IACA,kBAAA;AACA;AAEA;IACA,oBAAA;IACA,YAAA;IACA,YAAA;IACA,iBAAA;IACA,yBAAA;AACA;AAEA;IACA,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;AACA","sourcesContent":["<template>\r\n    <v-card class=\"d-flex flex-column\" justify-center align-center elevation=\"0\">\r\n        <input\r\n                type=\"file\"\r\n                id=\"files\"\r\n                @change=\"addPhoto\"\r\n                class=\"photo-input\"\r\n                placeholder=\"azaz\"\r\n                accept=\"image/jpeg,image/png,image/jpg\"\r\n        />\r\n\r\n        <v-btn class=\"btn my-2\" @click=\"clickOnInput\" v-if=\"!one || !carouselPhotos.length\">Добавить фотографию</v-btn>\r\n        <div v-if=\"one && loadedPhotos.length\" class=\"text-center\">{{loadedPhotos[0].name}}</div>\r\n        <div v-if=\"!one && carouselPhotos.length\" class=\"user-photo-module\">\r\n            <v-carousel v-model=\"n\">\r\n                <v-carousel-item\r\n                        v-for=\"(photo, i) in carouselPhotos\"\r\n                        :key=\"i\"\r\n                        :src=\"photo\"\r\n                        contain\r\n                >\r\n                </v-carousel-item>\r\n            </v-carousel>\r\n        </div>\r\n    </v-card>\r\n</template>\r\n\r\n<script>\r\n\r\n    export default {\r\n        name: 'photo-loader',\r\n        props: {\r\n            radius: {\r\n                type: Number,\r\n            },\r\n            one: {\r\n                type: Boolean,\r\n                default: false,\r\n            }\r\n        },\r\n        components: {},\r\n        data() {\r\n            return {\r\n                n: 0,\r\n                photo: '',\r\n                loadedPhotos: [],\r\n                carouselPhotos:[],\r\n                fileImg: null,\r\n            }\r\n        },\r\n        methods: {\r\n            getPhotos() {\r\n                return this.loadedPhotos;\r\n            },\r\n            getFirst() {\r\n                return this.loadedPhotos[0];\r\n            },\r\n            returnFormData(val) {\r\n                this.$emit('save-photo', val)\r\n            },\r\n            updatePhoto(val) {\r\n                this.photo = val\r\n                this.showCropperDialog = false\r\n            },\r\n            clickOnInput() {\r\n                document.getElementById('files').files = (new DataTransfer()).files;\r\n                document.getElementById('files').click()\r\n\r\n            },\r\n            addPhoto(event) {\r\n                this.fileImg = event.target.files[0]\r\n                if (this.fileImg.size > 5024000) {\r\n                    this.$root.$children[0].snackbarText = 'Размер файла не может быть больше 5МБ'\r\n                    this.$root.$children[0].snackbar = true\r\n                    return;\r\n                }\r\n                if(this.loadedPhotos.length > 10) {\r\n                    this.$root.$children[0].snackbarText = 'Вы не можете загрузить больше 10 фотографий'\r\n                    this.$root.$children[0].snackbar = true\r\n                    return;\r\n                }\r\n                this.carouselPhotos.push(URL.createObjectURL(this.fileImg))\r\n                this.loadedPhotos.push(this.fileImg)\r\n                this.n = this.loadedPhotos.length-1\r\n                this.fileImg = null;\r\n            },\r\n        },\r\n    }\r\n</script>\r\n\r\n<style scoped>\r\n    .photo-input {\r\n        position: absolute;\r\n        visibility: hidden;\r\n    }\r\n\r\n    .user-photo {\r\n        border-radius: 200px;\r\n        width: 300px;\r\n        height: auto;\r\n        max-height: 500px;\r\n        border: 1px solid #01aefe;\r\n    }\r\n\r\n    .user-photo-module {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n</style>\r\n"],"sourceRoot":""}]);
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
      _vm.one && _vm.loadedPhotos.length
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0ZpbGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlPzY2YTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRmlsZXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3Bob3RvLWxvYWRlci52dWU/MjZlYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRmlsZXMudnVlPzhkOGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZT8yMTc3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9GaWxlcy52dWU/MWVkYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlPzc1NTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQTtBQUNBLHNCQURBO0FBRUE7QUFDQTtBQUNBO0FBREEsS0FEQTtBQUlBO0FBQ0EsbUJBREE7QUFFQTtBQUZBO0FBSkEsR0FGQTtBQVdBLGdCQVhBO0FBWUEsTUFaQSxrQkFZQTtBQUNBO0FBQ0EsVUFEQTtBQUVBLGVBRkE7QUFHQSxzQkFIQTtBQUlBLHdCQUpBO0FBS0E7QUFMQTtBQU9BLEdBcEJBO0FBcUJBO0FBQ0EsYUFEQSx1QkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFlBSkEsc0JBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxrQkFQQSwwQkFPQSxHQVBBLEVBT0E7QUFDQTtBQUNBLEtBVEE7QUFVQSxlQVZBLHVCQVVBLEdBVkEsRUFVQTtBQUNBO0FBQ0E7QUFDQSxLQWJBO0FBY0EsZ0JBZEEsMEJBY0E7QUFDQTtBQUNBO0FBRUEsS0FsQkE7QUFtQkEsWUFuQkEsb0JBbUJBLEtBbkJBLEVBbUJBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQ0E7QUFyQkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNpRkE7QUFDQTtBQUNBLGVBREE7QUFFQTtBQUFBO0FBQUEsR0FGQTtBQUdBO0FBQ0E7QUFDQSxVQURBO0FBRUE7QUFDQSxpQkFEQTtBQUVBO0FBRkEsT0FGQTtBQU1BLGVBTkE7QUFPQSxhQVBBO0FBUUEsa0JBUkE7QUFTQSxpQkFUQTtBQVVBO0FBVkE7QUFZQSxHQWhCQTtBQWlCQSxTQWpCQSxxQkFpQkE7QUFDQTtBQUNBLEdBbkJBO0FBb0JBO0FBQ0EsY0FEQSx3QkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGVBSkEseUJBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxXQVBBLHFCQU9BO0FBQUE7O0FBQ0E7QUFBQTtBQUNBLHlCQURBO0FBRUE7QUFGQTtBQUFBLFNBR0EsSUFIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBLE9BTkE7QUFPQSxLQWZBO0FBZ0JBLFVBaEJBLG9CQWdCQTtBQUFBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUVBLFdBSEE7QUFJQSxTQUxBLENBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsS0FwQ0E7QUFxQ0EsWUFyQ0Esb0JBcUNBLEVBckNBLEVBcUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBRkEsU0FHQSxJQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVZBO0FBV0EsS0FqREE7QUFBQSxpQ0FrREE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0FKQSxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVEQSxHQXBCQTtBQWtGQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxhQUpBLHFCQUlBLEVBSkEsRUFJQTtBQUNBO0FBQ0E7QUFOQTtBQWxGQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSwyRUFBMkUseUJBQXlCLHlCQUF5QixHQUFHLGdDQUFnQywyQkFBMkIsbUJBQW1CLG1CQUFtQix3QkFBd0IsZ0NBQWdDLEdBQUcsdUNBQXVDLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixHQUFHLFNBQVMsdUdBQXVHLE1BQU0sV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcscW1CQUFxbUIsc0JBQXNCLG1oQkFBbWhCLHFEQUFxRCx5QkFBeUIsa0RBQWtELHVCQUF1QixzRkFBc0YsYUFBYSwyQkFBMkIscUJBQXFCLHdCQUF3QixxTEFBcUwsYUFBYSx1QkFBdUIsNkJBQTZCLDZDQUE2QyxpQkFBaUIsNkJBQTZCLGdEQUFnRCxpQkFBaUIsc0NBQXNDLGtFQUFrRSxtQ0FBbUMsdUdBQXVHLGlDQUFpQyx3RkFBd0YsaUZBQWlGLGtDQUFrQyw4R0FBOEcsb01BQW9NLHFCQUFxQix1REFBdUQsME1BQTBNLHFCQUFxQixzT0FBc08saUJBQWlCLGNBQWMsVUFBVSx5REFBeUQsK0JBQStCLCtCQUErQixTQUFTLHlCQUF5QixpQ0FBaUMseUJBQXlCLHlCQUF5Qiw4QkFBOEIsc0NBQXNDLFNBQVMsZ0NBQWdDLDBCQUEwQixtQ0FBbUMsb0NBQW9DLGdDQUFnQyxTQUFTLG1DQUFtQztBQUNqMkk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQZ0U7QUFDdkM7QUFDTDtBQUMzRCxDQUFnRzs7O0FBR2hHO0FBQzZGO0FBQzdGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDcUU7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ0EsQ0FBNkY7QUFDN0YsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsd0VBQU07QUFDUixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxzRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDdU0sQ0FBQyxpRUFBZSw4TUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBM0IsQ0FBQyxpRUFBZSx1TUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbk87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxhQUFhO0FBQ2IsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrQkFBK0IsMEJBQTBCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1QkFBdUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFDQUFxQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsdUJBQXVCO0FBQzdELGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGVBQWUscUJBQXFCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUNBQW1DO0FBQzVEO0FBQ0E7QUFDQSxvQ0FBb0Msb0NBQW9DO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQ0FBa0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQ0FBc0M7QUFDeEQsZUFBZTtBQUNmLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxzQ0FBc0MsMEJBQTBCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQscUNBQXFDO0FBQ3JDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsaURBQWlEO0FBQ2pELDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5U0E7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsOHVCQUF1WDtBQUM3WTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkpBQWlGO0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19wYWdlc19GaWxlc192dWUzM2M2NjAzZGM4NDgyZmFhZTMwNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDx2LWNhcmQgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW5cIiBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXIgZWxldmF0aW9uPVwiMFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJmaWxlc1wiXHJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVwiYWRkUGhvdG9cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwaG90by1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImF6YXpcIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvanBlZyxpbWFnZS9wbmcsaW1hZ2UvanBnXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8di1idG4gY2xhc3M9XCJidG4gbXktMlwiIEBjbGljaz1cImNsaWNrT25JbnB1dFwiIHYtaWY9XCIhb25lIHx8ICFjYXJvdXNlbFBob3Rvcy5sZW5ndGhcIj7QlNC+0LHQsNCy0LjRgtGMINGE0L7RgtC+0LPRgNCw0YTQuNGOPC92LWJ0bj5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJvbmUgJiYgbG9hZGVkUGhvdG9zLmxlbmd0aFwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57e2xvYWRlZFBob3Rvc1swXS5uYW1lfX08L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtaWY9XCIhb25lICYmIGNhcm91c2VsUGhvdG9zLmxlbmd0aFwiIGNsYXNzPVwidXNlci1waG90by1tb2R1bGVcIj5cclxuICAgICAgICAgICAgPHYtY2Fyb3VzZWwgdi1tb2RlbD1cIm5cIj5cclxuICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsLWl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIocGhvdG8sIGkpIGluIGNhcm91c2VsUGhvdG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwicGhvdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cclxuICAgICAgICAgICAgPC92LWNhcm91c2VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC92LWNhcmQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiAncGhvdG8tbG9hZGVyJyxcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICByYWRpdXM6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25lOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBuOiAwLFxyXG4gICAgICAgICAgICAgICAgcGhvdG86ICcnLFxyXG4gICAgICAgICAgICAgICAgbG9hZGVkUGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgICAgIGNhcm91c2VsUGhvdG9zOltdLFxyXG4gICAgICAgICAgICAgICAgZmlsZUltZzogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBnZXRQaG90b3MoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkZWRQaG90b3M7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldEZpcnN0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVkUGhvdG9zWzBdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXR1cm5Gb3JtRGF0YSh2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NhdmUtcGhvdG8nLCB2YWwpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwZGF0ZVBob3RvKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waG90byA9IHZhbFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q3JvcHBlckRpYWxvZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsaWNrT25JbnB1dCgpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmZpbGVzID0gKG5ldyBEYXRhVHJhbnNmZXIoKSkuZmlsZXM7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZXMnKS5jbGljaygpXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhZGRQaG90byhldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlSW1nID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlSW1nLnNpemUgPiA1MDI0MDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gJ9Cg0LDQt9C80LXRgCDRhNCw0LnQu9CwINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQsdC+0LvRjNGI0LUgNdCc0JEnXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5sb2FkZWRQaG90b3MubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0JLRiyDQvdC1INC80L7QttC10YLQtSDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LHQvtC70YzRiNC1IDEwINGE0L7RgtC+0LPRgNCw0YTQuNC5J1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxQaG90b3MucHVzaChVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZUltZykpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZFBob3Rvcy5wdXNoKHRoaXMuZmlsZUltZylcclxuICAgICAgICAgICAgICAgIHRoaXMubiA9IHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aC0xXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbWcgPSBudWxsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5waG90by1pbnB1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAudXNlci1waG90byB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDFhZWZlO1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLXBob3RvLW1vZHVsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cImNvdmVyXCI+XHJcbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVwiJHJvdXRlLnBhcmFtcy51c2VyX2lkID4gMCA/ICfQpNCw0LnQu9GLINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjycgOiAn0JzQvtC4INGE0LDQudC70YsnXCI+XHJcbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiZmlsZXMubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgICA8di1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8di1jYXJkICB2LWZvcj1cIihlbnRyeSwgaW5kZXgpIGluIGZpbGVzXCIgOmtleT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246cmVsYXRpdmU7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWEtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBjcnVkXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiAtMTBweDsgZm9udC1zaXplOiAxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxldGVfaWQgPSBlbnRyeS5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWRlbGV0ZTwvdi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkb3dubG9hZChlbnRyeS5pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWRvd25sb2FkPC92LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPVwibWF4LXdpZHRoOiA2MCVcIj57eyBlbnRyeS50aXRsZSB9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB4cy0xMlwiIHYtaWY9XCJsID4gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LXBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0b3RhbC12aXNpYmxlPVwiM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdi1wYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdi1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS0zXCI+0KTQsNC50LvQvtCyINC/0L7QutCwINC90LXRgjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8di1idG4gY2xhc3M9XCJzYXZlLWJ0blwiXHJcbiAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgIGZhYlxyXG4gICAgICAgICAgICAgICBAY2xpY2s9XCJvcGVuRGlhbG9nXCJcclxuICAgICAgICAgICAgICAgZGFyaz5cclxuICAgICAgICAgICAgPHYtaWNvbj5tZGktcGFwZXJjbGlwPC92LWljb24+XHJcbiAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICA8di1kaWFsb2dcclxuICAgICAgICAgICAgICAgIHYtaWY9XCJzaG93XCJcclxuICAgICAgICAgICAgICAgIDp2YWx1ZT1cInNob3dcIlxyXG4gICAgICAgICAgICAgICAgQGNsb3NlPVwiY2xvc2VEaWFsb2dcIlxyXG4gICAgICAgICAgICAgICAgOmZ1bGxzY3JlZW49XCIkdnVldGlmeS5icmVha3BvaW50Lm1vYmlsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdDpkZWZhdWx0PlxyXG4gICAgICAgICAgICAgICAgPHYtY2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhciAgY2xhc3M9XCJjb250YWluZXIgcHktMSBteS0wIGp1c3RpZnktc3BhY2UtYmV0d2VlblwiIGVsZXZhdGlvbj1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj7Ql9Cw0LPRgNGD0LfQutCwINGE0LDQudC70LA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlPjx2LWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXgtZ3Jvdy0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2xvc2VEaWFsb2dcIj5YPC92LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0YvQsdC10YDQuNGC0LUg0YTQsNC50Lsg0LTQu9GPINC30LDQs9GA0YPQt9C60LgsINC4INC+0LHQvtC30L3QsNGH0YLQtSDQtdCz0L5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZvcm0gQGtleXVwLm5hdGl2ZS5lbnRlcj1cInVwbG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbGUudGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J7QsdC+0LfQvdCw0YfQtdC90LjQtSjQmNC90L0sINC/0LDRgdC/0L7RgNGCKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwidGl0bGVFcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwaG90by1sb2FkZXIgOm9uZT1cInRydWVcIiByZWY9XCJsb2FkZXJcIj48L3Bob3RvLWxvYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZGFya1wiIEBjbGljaz1cInVwbG9hZFwiIDpkaXNhYmxlZD1cImZpbGUudGl0bGUgPT0gJydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LTRgtCy0LXRgNC00LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvdi1kaWFsb2c+XHJcbiAgICA8L3YtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBQaG90b0xvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9waG90by1sb2FkZXJcIjtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIkZpbGVzXCIsXHJcbiAgICAgICAgY29tcG9uZW50czoge1Bob3RvTG9hZGVyfSxcclxuICAgICAgICBkYXRhOiAodm0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGw6IDEsXHJcbiAgICAgICAgICAgICAgICBmaWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZV9pZDogMCxcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdGl0bGVFcnJvcjogJycsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvcGVuRGlhbG9nKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbG9zZURpYWxvZygpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRQYWdlKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnZmlsZT8nLCB7cGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogKHRoaXMuJHJvdXRlLnBhcmFtcy51c2VyX2lkID4gMCA/IHRoaXMuJHJvdXRlLnBhcmFtcy51c2VyX2lkIDogbnVsbClcclxuICAgICAgICAgICAgICAgIH19KS50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlcyA9IHIuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubCA9IHIuZGF0YS5sYXN0X3BhZ2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwbG9hZCgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdQaG90b3MgPSBbdGhpcy4kcmVmcy5sb2FkZXIuZ2V0Rmlyc3QoKV07XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3UGhvdG9zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICAgICAgICAgICAgICBuZXdQaG90b3MuZm9yRWFjaCgocGhvdG8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgcGhvdG8sIHBob3RvLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgdGhpcy5maWxlLnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvZmlsZS8nLCBmb3JtRGF0YSkudGhlbigocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAgYNCe0YjQuNCx0LrQsCDRgdC+0YXRgNCw0L3QtdC90LjRjyDRhNC+0YLQvtCz0YDQsNGE0LjQuGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZURpYWxvZygpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvd25sb2FkKGlkKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCdmaWxlLycraWQsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0pKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmsuaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBkZWNvZGVVUklDb21wb25lbnQocmVzcG9uc2UuaGVhZGVyc1snY29udGVudC1kaXNwb3NpdGlvbiddLnNwbGl0KCc7JylbMl0uc3BsaXQoXCJ1dGYtOCcnXCIpWzFdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlKCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZGVsZXRlKCcvZmlsZS8nK3RoaXMuZGVsZXRlX2lkKS50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9ICBg0J7RiNC40LHQutCwINGB0L7RhdGA0LDQvdC10L3QuNGPINGE0L7RgtC+0LPRgNCw0YTQuNC4YFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICBwYWdlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlbGV0ZV9pZChudikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG52ID4gMCkgdGhpcy5kZWxldGUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5waG90by1pbnB1dFtkYXRhLXYtNjQ2ZmQ4ZDldIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi51c2VyLXBob3RvW2RhdGEtdi02NDZmZDhkOV0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDFhZWZlO1xcbn1cXG4udXNlci1waG90by1tb2R1bGVbZGF0YS12LTY0NmZkOGQ5XSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9waG90by1sb2FkZXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEyRkE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0FBQ0E7QUFFQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0FBQ0E7QUFFQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx2LWNhcmQgY2xhc3M9XFxcImQtZmxleCBmbGV4LWNvbHVtblxcXCIganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIGVsZXZhdGlvbj1cXFwiMFxcXCI+XFxyXFxuICAgICAgICA8aW5wdXRcXHJcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwiZmlsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImZpbGVzXFxcIlxcclxcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVxcXCJhZGRQaG90b1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcInBob3RvLWlucHV0XFxcIlxcclxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiYXphelxcXCJcXHJcXG4gICAgICAgICAgICAgICAgYWNjZXB0PVxcXCJpbWFnZS9qcGVnLGltYWdlL3BuZyxpbWFnZS9qcGdcXFwiXFxyXFxuICAgICAgICAvPlxcclxcblxcclxcbiAgICAgICAgPHYtYnRuIGNsYXNzPVxcXCJidG4gbXktMlxcXCIgQGNsaWNrPVxcXCJjbGlja09uSW5wdXRcXFwiIHYtaWY9XFxcIiFvbmUgfHwgIWNhcm91c2VsUGhvdG9zLmxlbmd0aFxcXCI+0JTQvtCx0LDQstC40YLRjCDRhNC+0YLQvtCz0YDQsNGE0LjRjjwvdi1idG4+XFxyXFxuICAgICAgICA8ZGl2IHYtaWY9XFxcIm9uZSAmJiBsb2FkZWRQaG90b3MubGVuZ3RoXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPnt7bG9hZGVkUGhvdG9zWzBdLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgPGRpdiB2LWlmPVxcXCIhb25lICYmIGNhcm91c2VsUGhvdG9zLmxlbmd0aFxcXCIgY2xhc3M9XFxcInVzZXItcGhvdG8tbW9kdWxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8di1jYXJvdXNlbCB2LW1vZGVsPVxcXCJuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWwtaXRlbVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCIocGhvdG8sIGkpIGluIGNhcm91c2VsUGhvdG9zXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cXFwicGhvdG9cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxcclxcbiAgICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbC1pdGVtPlxcclxcbiAgICAgICAgICAgIDwvdi1jYXJvdXNlbD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L3YtY2FyZD5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG5hbWU6ICdwaG90by1sb2FkZXInLFxcclxcbiAgICAgICAgcHJvcHM6IHtcXHJcXG4gICAgICAgICAgICByYWRpdXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgb25lOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcXHJcXG4gICAgICAgIGRhdGEoKSB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgbjogMCxcXHJcXG4gICAgICAgICAgICAgICAgcGhvdG86ICcnLFxcclxcbiAgICAgICAgICAgICAgICBsb2FkZWRQaG90b3M6IFtdLFxcclxcbiAgICAgICAgICAgICAgICBjYXJvdXNlbFBob3RvczpbXSxcXHJcXG4gICAgICAgICAgICAgICAgZmlsZUltZzogbnVsbCxcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIGdldFBob3RvcygpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVkUGhvdG9zO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZ2V0Rmlyc3QoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRlZFBob3Rvc1swXTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHJldHVybkZvcm1EYXRhKHZhbCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzYXZlLXBob3RvJywgdmFsKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgdXBkYXRlUGhvdG8odmFsKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucGhvdG8gPSB2YWxcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q3JvcHBlckRpYWxvZyA9IGZhbHNlXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBjbGlja09uSW5wdXQoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmZpbGVzID0gKG5ldyBEYXRhVHJhbnNmZXIoKSkuZmlsZXM7XFxyXFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlcycpLmNsaWNrKClcXHJcXG5cXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGFkZFBob3RvKGV2ZW50KSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlSW1nLnNpemUgPiA1MDI0MDAwKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0KDQsNC30LzQtdGAINGE0LDQudC70LAg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINCx0L7Qu9GM0YjQtSA10JzQkSdcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIGlmKHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aCA+IDEwKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0JLRiyDQvdC1INC80L7QttC10YLQtSDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LHQvtC70YzRiNC1IDEwINGE0L7RgtC+0LPRgNCw0YTQuNC5J1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJvdXNlbFBob3Rvcy5wdXNoKFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5maWxlSW1nKSlcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRQaG90b3MucHVzaCh0aGlzLmZpbGVJbWcpXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMubiA9IHRoaXMubG9hZGVkUGhvdG9zLmxlbmd0aC0xXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltZyA9IG51bGw7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgICAucGhvdG8taW5wdXQge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC51c2VyLXBob3RvIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDFhZWZlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC51c2VyLXBob3RvLW1vZHVsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjQ2ZmQ4ZDlcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NDZmZDhkOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NDZmZDhkOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NDZmZDhkOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NDZmZDhkOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGhvdG8tbG9hZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmlsZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0N2I2ZjNlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpbGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlsZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NDdiNmYzZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NDdiNmYzZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NDdiNmYzZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmlsZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0N2I2ZjNlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU0N2I2ZjNlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvRmlsZXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waG90by1sb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNhcmRcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW5cIixcbiAgICAgIGF0dHJzOiB7IFwianVzdGlmeS1jZW50ZXJcIjogXCJcIiwgXCJhbGlnbi1jZW50ZXJcIjogXCJcIiwgZWxldmF0aW9uOiBcIjBcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwicGhvdG8taW5wdXRcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgICBpZDogXCJmaWxlc1wiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImF6YXpcIixcbiAgICAgICAgICBhY2NlcHQ6IFwiaW1hZ2UvanBlZyxpbWFnZS9wbmcsaW1hZ2UvanBnXCJcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uYWRkUGhvdG8gfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS5vbmUgfHwgIV92bS5jYXJvdXNlbFBob3Rvcy5sZW5ndGhcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIG15LTJcIiwgb246IHsgY2xpY2s6IF92bS5jbGlja09uSW5wdXQgfSB9LFxuICAgICAgICAgICAgW192bS5fdihcItCU0L7QsdCw0LLQuNGC0Ywg0YTQvtGC0L7Qs9GA0LDRhNC40Y5cIildXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5vbmUgJiYgX3ZtLmxvYWRlZFBob3Rvcy5sZW5ndGhcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubG9hZGVkUGhvdG9zWzBdLm5hbWUpKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS5vbmUgJiYgX3ZtLmNhcm91c2VsUGhvdG9zLmxlbmd0aFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidXNlci1waG90by1tb2R1bGVcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2Fyb3VzZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm4sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubiA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jYXJvdXNlbFBob3RvcywgZnVuY3Rpb24ocGhvdG8sIGkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInYtY2Fyb3VzZWwtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBwaG90bywgY29udGFpbjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY292ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9LFxuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICBfdm0uJHJvdXRlLnBhcmFtcy51c2VyX2lkID4gMCA/IFwi0KTQsNC50LvRiyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIiA6IFwi0JzQvtC4INGE0LDQudC70YtcIlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmZpbGVzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmZpbGVzLCBmdW5jdGlvbihlbnRyeSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1hLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGVsZXZhdGlvbjogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXggY3J1ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiLTEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVfaWQgPSBlbnRyeS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLWRlbGV0ZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZG93bmxvYWQoZW50cnkuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktZG93bmxvYWRcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNTdHlsZTogeyBcIm1heC13aWR0aFwiOiBcIjYwJVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGVudHJ5LnRpdGxlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ubCA+IDFcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHhzLTEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxlbmd0aDogX3ZtLmwsIFwidG90YWwtdmlzaWJsZVwiOiAzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2UgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXktM1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi0KTQsNC50LvQvtCyINC/0L7QutCwINC90LXRglwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2F2ZS1idG5cIixcbiAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJzdWNjZXNzXCIsIGZhYjogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub3BlbkRpYWxvZyB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLXBhcGVyY2xpcFwiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uc2hvd1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvdyxcbiAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBfdm0uJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xvc2U6IF92bS5jbG9zZURpYWxvZyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRhaW5lciBweS0xIG15LTAganVzdGlmeS1zcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBlbGV2YXRpb246IFwiMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0JfQsNCz0YDRg9C30LrQsCDRhNCw0LnQu9CwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhci10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4LWdyb3ctMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VEaWFsb2cgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJYXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLRi9Cx0LXRgNC40YLQtSDRhNCw0LnQuyDQtNC70Y8g0LfQsNCz0YDRg9C30LrQuCwg0Lgg0L7QsdC+0LfQvdCw0YfRgtC1INC10LPQvlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBsb2FkLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCe0LHQvtC30L3QsNGH0LXQvdC40LUo0JjQvdC9LCDQv9Cw0YHQv9C+0YDRgilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS50aXRsZUVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZmlsZSwgXCJ0aXRsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbGUudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBob3RvLWxvYWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJsb2FkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb25lOiB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZGFya1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZmlsZS50aXRsZSA9PSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udXBsb2FkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LTRgtCy0LXRgNC00LjRgtGMXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGhvdG8tbG9hZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0NmZkOGQ5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2MTg1ZGQyYVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bob3RvLWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NDZmZDhkOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==