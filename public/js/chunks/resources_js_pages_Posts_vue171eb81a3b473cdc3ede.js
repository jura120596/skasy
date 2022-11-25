(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Posts_vue"],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data(vm) {
    return {
      l: 1,
      posts: [],
      page: 1,
      dialogPost: null,
      delete_id: 0,
      show: false
    };
  },
  mounted: function mounted() {
    this.getPage();
  },
  methods: {
    getPage: function getPage() {
      var _this = this;

      window.axios.get('/post/', {
        params: {
          page: this.page,
          per_page: 10
        }
      }).then(function (response) {
        _this.posts = response.data.data;
        _this.l = response.data.last_page;
      })["catch"](function (e) {
        console.log(e);
      });
    },
    "delete": function _delete() {
      var _this2 = this;

      if (this.delete_id > 0) window.axios["delete"]('/post/' + this.delete_id).then(function (response) {
        _this2.getPage();

        _this2.delete_id = 0;
      })["catch"](function (e) {
        console.log(e);
      });
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Posts.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Posts.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.user-photo-module{\n    height: 300px;\n    max-height: 300px;\n    overflow-y: scroll;\n}\n.user-post-description{\n    height: 300px;\n    max-height: 300px;\n    overflow-y: scroll;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/Posts.vue"],"names":[],"mappings":";AA8LA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;AACA","sourcesContent":["<template>\r\n    <v-container class=\"cover\">\r\n        <v-toolbar-title align=\"center\" justify=\"center\" class=\"mb-2\"\r\n                         v-text=\"'Последние новости'\">\r\n        </v-toolbar-title>\r\n        <div v-if=\"posts.length > 0\">\r\n            <v-layout class=\"d-flex flex-row flex-wrap\">\r\n\r\n                <v-flex\r\n                        xs12\r\n                        sm6\r\n                        md6\r\n                        lg4\r\n                        v-for=\"(post, y) in posts\" :key=\"y\">\r\n\r\n                    <v-card\r\n                            elevation=\"0\"\r\n                            outlined\r\n                            style=\"position: relative;\"\r\n                            class=\"ma-1\"\r\n                    >\r\n                        <div v-if=\"$store.state.auth.user.role === 1024\"\r\n                             class=\"d-flex crud\" style=\"position:absolute; right: 5px; top: -10px; font-size: 10px\">\r\n                            <v-btn color=\"red\"\r\n                                   fab\r\n                                   small\r\n                                   @click=\"delete_id = post.id\"\r\n                                   class=\"mr-3\"\r\n                                   dark>\r\n                                <v-icon>mdi-delete</v-icon>\r\n                            </v-btn>\r\n                            <v-btn\r\n                                    color=\"yellow\"\r\n                                    fab\r\n                                    small\r\n                                    @click=\"$router.push('/post/'+post.id)\"\r\n                                    dark>\r\n                                <v-icon>mdi-pencil</v-icon>\r\n                            </v-btn>\r\n                        </div>\r\n\r\n                        <div\r\n                                v-else\r\n                                v-text=\"'Опубликовано: '+post.date\"\r\n                                style=\"position:absolute; right: 5px; top: 5px; font-size: 10px\"></div>\r\n                        <v-container>\r\n                            <v-spacer></v-spacer>\r\n                            <v-toolbar-title\r\n                                class=\"text-center mt-3 mb-2\"\r\n                                @click=\"\r\n                                    dialogPost = post\r\n                                    show =  true\r\n                            \">{{post.title}}</v-toolbar-title>\r\n                            <v-spacer></v-spacer>\r\n                        </v-container>\r\n\r\n                        <v-container class=\"ma-0 pa-0\"\r\n                             @click=\"\r\n                                dialogPost = post\r\n                                show =  true\r\n                        \">\r\n                            <div v-if=\"post.photos.length\" class=\"user-photo-module\">\r\n                                <v-carousel>\r\n                                    <v-carousel-item\r\n                                            v-for=\"(photo, i) in post.photos\"\r\n                                            :key=\"i\"\r\n                                            :src=\"photo.file\"\r\n                                            contain\r\n                                            min-height=\"300px\"\r\n                                            max-height=\"300px\"\r\n                                    >\r\n                                    </v-carousel-item>\r\n                                </v-carousel>\r\n                            </div>\r\n                            <div v-else class=\"user-post-description\">\r\n                                <v-container v-html=\"post.description\"></v-container>\r\n                            </div>\r\n                        </v-container>\r\n                    </v-card>\r\n                </v-flex>\r\n            </v-layout>\r\n            <div class=\"text-center xs-12\" v-if=\"l > 1\">\r\n                <v-pagination\r\n                        :length=\"l\"\r\n                        :total-visible=\"3\"\r\n                        v-model=\"page\"\r\n                ></v-pagination>\r\n            </div>\r\n        </div>\r\n        <div v-else>\r\n            <div class=\"text-center my-3\">Новостей пока нет</div>\r\n        </div>\r\n\r\n        <v-btn class=\"save-btn\"\r\n               v-if=\"$store.state.auth.user.role === 1024\"\r\n               color=\"success\"\r\n               fab\r\n               @click=\"$router.push('/post/0')\"\r\n               dark>\r\n            <v-icon>mdi-plus</v-icon>\r\n        </v-btn>\r\n        <v-dialog\r\n                v-if=\"!!dialogPost\"\r\n                v-model=\"show\"\r\n                @close=\"\r\n                    show = false\r\n                    dialogPost = null\r\n                \"\r\n                :fullscreen=\"$vuetify.breakpoint.mobile\"\r\n        >\r\n            <template slot:default>\r\n                <v-container class=\"px-0 mx-0 pt-0 mt-0 cover\" style=\"background-color: white !important; max-width: 100% !important;\">\r\n                    <v-toolbar-title class=\"text-center my-3\">{{dialogPost.title}}</v-toolbar-title>\r\n\r\n                    <div v-if=\"dialogPost.photos && dialogPost.photos.length > 0\" class=\"container my-2\">\r\n                        <v-carousel>\r\n                            <v-carousel-item\r\n                                    v-for=\"(photo, i) in dialogPost.photos\"\r\n                                    :key=\"i\"\r\n                                    :src=\"photo.file\"\r\n                                    contain\r\n                                    max-height=\"500px\"\r\n                                    min-height=\"500px\"\r\n                            >\r\n                            </v-carousel-item>\r\n                        </v-carousel>\r\n                    </div>\r\n                    <v-container v-html=\"dialogPost.description\"></v-container>\r\n\r\n                    <v-toolbar-title class=\"text-center my-3\">\r\n                        <v-btn color=\"primary\" @click=\"\r\n                            show = false\r\n                            dialogPost = null\r\n                        \">Закрыть\r\n                        </v-btn>\r\n                    </v-toolbar-title>\r\n\r\n                </v-container>\r\n            </template>\r\n        </v-dialog>\r\n    </v-container>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        name: \"Posts\",\r\n        data: (vm) => {\r\n            return {\r\n                l: 1,\r\n                posts: [],\r\n                page: 1,\r\n                dialogPost: null,\r\n                delete_id: 0,\r\n                show: false\r\n            }\r\n        },\r\n        mounted() {\r\n            this.getPage();\r\n        },\r\n        methods: {\r\n            getPage() {\r\n                window.axios.get('/post/', {params: {page: this.page, per_page: 10}}).then((response) => {\r\n                    this.posts = response.data.data;\r\n                    this.l = response.data.last_page\r\n                }).catch((e) => {\r\n                    console.log(e);\r\n                });\r\n            },\r\n            delete() {\r\n                if (this.delete_id > 0)\r\n                    window.axios.delete('/post/' + this.delete_id).then((response) => {\r\n                        this.getPage()\r\n                        this.delete_id = 0\r\n                    }).catch((e) => {\r\n                        console.log(e);\r\n                    });\r\n            }\r\n        },\r\n        watch: {\r\n            page() {\r\n                this.getPage();\r\n            },\r\n            delete_id(nv) {\r\n                if (nv > 0) this.delete()\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style>\r\n    .user-photo-module{\r\n        height: 300px;\r\n        max-height: 300px;\r\n        overflow-y: scroll;\r\n    }\r\n    .user-post-description{\r\n        height: 300px;\r\n        max-height: 300px;\r\n        overflow-y: scroll;\r\n    }\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
/* harmony import */ var _Posts_vue_vue_type_template_id_1a53229a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Posts.vue?vue&type=template&id=1a53229a& */ "./resources/js/pages/Posts.vue?vue&type=template&id=1a53229a&");
/* harmony import */ var _Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Posts.vue?vue&type=script&lang=js& */ "./resources/js/pages/Posts.vue?vue&type=script&lang=js&");
/* harmony import */ var _Posts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Posts.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/Posts.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Posts_vue_vue_type_template_id_1a53229a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Posts_vue_vue_type_template_id_1a53229a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
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

/***/ "./resources/js/pages/Posts.vue?vue&type=template&id=1a53229a&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Posts.vue?vue&type=template&id=1a53229a& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_template_id_1a53229a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_template_id_1a53229a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_template_id_1a53229a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Posts.vue?vue&type=template&id=1a53229a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Posts.vue?vue&type=template&id=1a53229a&");


/***/ }),

/***/ "./resources/js/pages/Posts.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Posts.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Posts.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Posts.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Posts.vue?vue&type=template&id=1a53229a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Posts.vue?vue&type=template&id=1a53229a& ***!
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
        domProps: { textContent: _vm._s("Последние новости") }
      }),
      _vm._v(" "),
      _vm.posts.length > 0
        ? _c(
            "div",
            [
              _c(
                "v-layout",
                { staticClass: "d-flex flex-row flex-wrap" },
                _vm._l(_vm.posts, function(post, y) {
                  return _c(
                    "v-flex",
                    { key: y, attrs: { xs12: "", sm6: "", md6: "", lg4: "" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "ma-1",
                          staticStyle: { position: "relative" },
                          attrs: { elevation: "0", outlined: "" }
                        },
                        [
                          _vm.$store.state.auth.user.role === 1024
                            ? _c(
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
                                          _vm.delete_id = post.id
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
                                        color: "yellow",
                                        fab: "",
                                        small: "",
                                        dark: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.$router.push(
                                            "/post/" + post.id
                                          )
                                        }
                                      }
                                    },
                                    [_c("v-icon", [_vm._v("mdi-pencil")])],
                                    1
                                  )
                                ],
                                1
                              )
                            : _c("div", {
                                staticStyle: {
                                  position: "absolute",
                                  right: "5px",
                                  top: "5px",
                                  "font-size": "10px"
                                },
                                domProps: {
                                  textContent: _vm._s(
                                    "Опубликовано: " + post.date
                                  )
                                }
                              }),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-toolbar-title",
                                {
                                  staticClass: "text-center mt-3 mb-2",
                                  on: {
                                    click: function($event) {
                                      _vm.dialogPost = post
                                      _vm.show = true
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(post.title))]
                              ),
                              _vm._v(" "),
                              _c("v-spacer")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            {
                              staticClass: "ma-0 pa-0",
                              on: {
                                click: function($event) {
                                  _vm.dialogPost = post
                                  _vm.show = true
                                }
                              }
                            },
                            [
                              post.photos.length
                                ? _c(
                                    "div",
                                    { staticClass: "user-photo-module" },
                                    [
                                      _c(
                                        "v-carousel",
                                        _vm._l(post.photos, function(photo, i) {
                                          return _c("v-carousel-item", {
                                            key: i,
                                            attrs: {
                                              src: photo.file,
                                              contain: "",
                                              "min-height": "300px",
                                              "max-height": "300px"
                                            }
                                          })
                                        }),
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _c(
                                    "div",
                                    { staticClass: "user-post-description" },
                                    [
                                      _c("v-container", {
                                        domProps: {
                                          innerHTML: _vm._s(post.description)
                                        }
                                      })
                                    ],
                                    1
                                  )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              ),
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
            1
          )
        : _c("div", [
            _c("div", { staticClass: "text-center my-3" }, [
              _vm._v("Новостей пока нет")
            ])
          ]),
      _vm._v(" "),
      _vm.$store.state.auth.user.role === 1024
        ? _c(
            "v-btn",
            {
              staticClass: "save-btn",
              attrs: { color: "success", fab: "", dark: "" },
              on: {
                click: function($event) {
                  return _vm.$router.push("/post/0")
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-plus")])],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !!_vm.dialogPost
        ? _c(
            "v-dialog",
            {
              attrs: { fullscreen: _vm.$vuetify.breakpoint.mobile },
              on: {
                close: function($event) {
                  _vm.show = false
                  _vm.dialogPost = null
                }
              },
              model: {
                value: _vm.show,
                callback: function($$v) {
                  _vm.show = $$v
                },
                expression: "show"
              }
            },
            [
              [
                _c(
                  "v-container",
                  {
                    staticClass: "px-0 mx-0 pt-0 mt-0 cover",
                    staticStyle: {
                      "background-color": "white !important",
                      "max-width": "100% !important"
                    }
                  },
                  [
                    _c("v-toolbar-title", { staticClass: "text-center my-3" }, [
                      _vm._v(_vm._s(_vm.dialogPost.title))
                    ]),
                    _vm._v(" "),
                    _vm.dialogPost.photos && _vm.dialogPost.photos.length > 0
                      ? _c(
                          "div",
                          { staticClass: "container my-2" },
                          [
                            _c(
                              "v-carousel",
                              _vm._l(_vm.dialogPost.photos, function(photo, i) {
                                return _c("v-carousel-item", {
                                  key: i,
                                  attrs: {
                                    src: photo.file,
                                    contain: "",
                                    "max-height": "500px",
                                    "min-height": "500px"
                                  }
                                })
                              }),
                              1
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("v-container", {
                      domProps: {
                        innerHTML: _vm._s(_vm.dialogPost.description)
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "v-toolbar-title",
                      { staticClass: "text-center my-3" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
                            on: {
                              click: function($event) {
                                _vm.show = false
                                _vm.dialogPost = null
                              }
                            }
                          },
                          [_vm._v("Закрыть\n                    ")]
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Posts.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Posts.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Posts.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Posts.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1e2943ce", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdHMudnVlP2U0YzAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdHMudnVlP2Y4Y2MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RzLnZ1ZT80MGViIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qb3N0cy52dWU/ODkzMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnSkE7QUFDQSxlQURBO0FBRUE7QUFDQTtBQUNBLFVBREE7QUFFQSxlQUZBO0FBR0EsYUFIQTtBQUlBLHNCQUpBO0FBS0Esa0JBTEE7QUFNQTtBQU5BO0FBUUEsR0FYQTtBQVlBLFNBWkEscUJBWUE7QUFDQTtBQUNBLEdBZEE7QUFlQTtBQUNBLFdBREEscUJBQ0E7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsT0FIQSxXQUdBO0FBQ0E7QUFDQSxPQUxBO0FBTUEsS0FSQTtBQUFBLGlDQVNBO0FBQUE7O0FBQ0EsOEJBQ0E7QUFDQTs7QUFDQTtBQUNBLE9BSEEsV0FHQTtBQUNBO0FBQ0EsT0FMQTtBQU1BO0FBakJBLEdBZkE7QUFrQ0E7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsYUFKQSxxQkFJQSxFQUpBLEVBSUE7QUFDQTtBQUNBO0FBTkE7QUFsQ0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hKQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsK0RBQStELG9CQUFvQix3QkFBd0IseUJBQXlCLEdBQUcseUJBQXlCLG9CQUFvQix3QkFBd0IseUJBQXlCLEdBQUcsU0FBUywyRkFBMkYsTUFBTSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsK3VCQUErdUIsd09BQXdPLFlBQVksWUFBWSw0akNBQTRqQyxZQUFZLFVBQVUseWFBQXlhLFlBQVksaWxGQUFpbEYsNEJBQTRCLHlFQUF5RSxrQkFBa0IsK3lDQUEreUMsdURBQXVELHdCQUF3Qix5TUFBeU0sYUFBYSx3QkFBd0IsK0JBQStCLGFBQWEsdUJBQXVCLDJCQUEyQixnREFBZ0QsU0FBUywrQkFBK0Isc0JBQXNCLHdEQUF3RCw2RUFBNkUsZ0JBQWdCLHVDQUF1QyxxQkFBcUIsRUFBRSxpQkFBaUIsMkJBQTJCLHNJQUFzSSxpSEFBaUgsZ0JBQWdCLDJDQUEyQyx5QkFBeUIsRUFBRSxpQkFBaUIsYUFBYSxxQkFBcUIsd0JBQXdCLG1DQUFtQyxpQkFBaUIsZ0NBQWdDLDhEQUE4RCxhQUFhLFNBQVMsdURBQXVELDBCQUEwQiw4QkFBOEIsK0JBQStCLFNBQVMsK0JBQStCLDBCQUEwQiw4QkFBOEIsK0JBQStCLFNBQVMsK0JBQStCO0FBQ3RnUjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A2QztBQUMzQjtBQUNMO0FBQ3BELENBQWlFOzs7QUFHakU7QUFDNkY7QUFDN0YsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsd0VBQU07QUFDUixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxzRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDZ00sQ0FBQyxpRUFBZSx1TUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW5PO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUJBQXVCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxQ0FBcUM7QUFDckQsbUJBQW1CO0FBQ25CLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyQ0FBMkM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQixzQ0FBc0MsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHVCQUF1QjtBQUMvRCxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsbUNBQW1DO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsdUNBQXVDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DO0FBQ3hEO0FBQ0E7QUFDQSxnQ0FBZ0Msb0NBQW9DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQ0FBa0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNDQUFzQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBNkM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsMkNBQTJDLGtDQUFrQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0NBQWdDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0NBQWtDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNVQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQywycUJBQXdWO0FBQzlXO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwySkFBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJqcy9jaHVua3MvcmVzb3VyY2VzX2pzX3BhZ2VzX1Bvc3RzX3Z1ZTE3MWViODFhM2I0NzNjZGMzZWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVwiY292ZXJcIj5cclxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LXRleHQ9XCIn0J/QvtGB0LvQtdC00L3QuNC1INC90L7QstC+0YHRgtC4J1wiPlxyXG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cInBvc3RzLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgPHYtbGF5b3V0IGNsYXNzPVwiZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDx2LWZsZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgeHMxMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWQ2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxnNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihwb3N0LCB5KSBpbiBwb3N0c1wiIDprZXk9XCJ5XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBjcnVkXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiAtMTBweDsgZm9udC1zaXplOiAxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVsZXRlX2lkID0gcG9zdC5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWRlbGV0ZTwvdi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInllbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLnB1c2goJy9wb3N0LycrcG9zdC5pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLXBlbmNpbDwvdi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVwiJ9Ce0L/Rg9Cx0LvQuNC60L7QstCw0L3QvjogJytwb3N0LmRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OiA1cHg7IHRvcDogNXB4OyBmb250LXNpemU6IDEwcHhcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC0zIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gcG9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPnt7cG9zdC50aXRsZX19PC92LXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cIm1hLTAgcGEtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IHBvc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJwb3N0LnBob3Rvcy5sZW5ndGhcIiBjbGFzcz1cInVzZXItcGhvdG8tbW9kdWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsLWl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihwaG90bywgaSkgaW4gcG9zdC5waG90b3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwicGhvdG8uZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ9XCIzMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodD1cIjMwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwidXNlci1wb3N0LWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIHYtaHRtbD1cInBvc3QuZGVzY3JpcHRpb25cIj48L3YtY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cclxuICAgICAgICAgICAgPC92LWxheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHhzLTEyXCIgdi1pZj1cImwgPiAxXCI+XHJcbiAgICAgICAgICAgICAgICA8di1wYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnRvdGFsLXZpc2libGU9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBhZ2VcIlxyXG4gICAgICAgICAgICAgICAgPjwvdi1wYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj7QndC+0LLQvtGB0YLQtdC5INC/0L7QutCwINC90LXRgjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8di1idG4gY2xhc3M9XCJzYXZlLWJ0blwiXHJcbiAgICAgICAgICAgICAgIHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcIlxyXG4gICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvcG9zdC8wJylcIlxyXG4gICAgICAgICAgICAgICBkYXJrPlxyXG4gICAgICAgICAgICA8di1pY29uPm1kaS1wbHVzPC92LWljb24+XHJcbiAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICA8di1kaWFsb2dcclxuICAgICAgICAgICAgICAgIHYtaWY9XCIhIWRpYWxvZ1Bvc3RcIlxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInNob3dcIlxyXG4gICAgICAgICAgICAgICAgQGNsb3NlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IG51bGxcclxuICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICA6ZnVsbHNjcmVlbj1cIiR2dWV0aWZ5LmJyZWFrcG9pbnQubW9iaWxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90OmRlZmF1bHQ+XHJcbiAgICAgICAgICAgICAgICA8di1jb250YWluZXIgY2xhc3M9XCJweC0wIG14LTAgcHQtMCBtdC0wIGNvdmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC1jZW50ZXIgbXktM1wiPnt7ZGlhbG9nUG9zdC50aXRsZX19PC92LXRvb2xiYXItdGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImRpYWxvZ1Bvc3QucGhvdG9zICYmIGRpYWxvZ1Bvc3QucGhvdG9zLmxlbmd0aCA+IDBcIiBjbGFzcz1cImNvbnRhaW5lciBteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWwtaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihwaG90bywgaSkgaW4gZGlhbG9nUG9zdC5waG90b3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJwaG90by5maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0PVwiNTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0PVwiNTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsLWl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgdi1odG1sPVwiZGlhbG9nUG9zdC5kZXNjcmlwdGlvblwiPjwvdi1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI+0JfQsNC60YDRi9GC0YxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvdi1kaWFsb2c+XHJcbiAgICA8L3YtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIlBvc3RzXCIsXHJcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsOiAxLFxyXG4gICAgICAgICAgICAgICAgcG9zdHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3Q6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBkZWxldGVfaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZ2V0UGFnZSgpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy9wb3N0LycsIHtwYXJhbXM6IHtwYWdlOiB0aGlzLnBhZ2UsIHBlcl9wYWdlOiAxMH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdHMgPSByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sID0gcmVzcG9uc2UuZGF0YS5sYXN0X3BhZ2VcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsZXRlX2lkID4gMClcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZGVsZXRlKCcvcG9zdC8nICsgdGhpcy5kZWxldGVfaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlX2lkID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICBwYWdlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlbGV0ZV9pZChudikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG52ID4gMCkgdGhpcy5kZWxldGUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAgIC51c2VyLXBob3RvLW1vZHVsZXtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIH1cclxuICAgIC51c2VyLXBvc3QtZGVzY3JpcHRpb257XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udXNlci1waG90by1tb2R1bGV7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcbi51c2VyLXBvc3QtZGVzY3JpcHRpb257XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qb3N0cy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQThMQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0FBQ0E7QUFDQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8di1jb250YWluZXIgY2xhc3M9XFxcImNvdmVyXFxcIj5cXHJcXG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XFxcImNlbnRlclxcXCIganVzdGlmeT1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwibWItMlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVxcXCIn0J/QvtGB0LvQtdC00L3QuNC1INC90L7QstC+0YHRgtC4J1xcXCI+XFxyXFxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cXHJcXG4gICAgICAgIDxkaXYgdi1pZj1cXFwicG9zdHMubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgICAgICAgICAgPHYtbGF5b3V0IGNsYXNzPVxcXCJkLWZsZXggZmxleC1yb3cgZmxleC13cmFwXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPHYtZmxleFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHhzMTJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTZcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBtZDZcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZzRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKHBvc3QsIHkpIGluIHBvc3RzXFxcIiA6a2V5PVxcXCJ5XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uPVxcXCIwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwicG9zaXRpb246IHJlbGF0aXZlO1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1hLTFcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZC1mbGV4IGNydWRcXFwiIHN0eWxlPVxcXCJwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiAtMTBweDsgZm9udC1zaXplOiAxMHB4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJyZWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImRlbGV0ZV9pZCA9IHBvc3QuaWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibXItM1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1kZWxldGU8L3YtaWNvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInllbGxvd1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJHJvdXRlci5wdXNoKCcvcG9zdC8nK3Bvc3QuaWQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1wZW5jaWw8L3YtaWNvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWVsc2VcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cXFwiJ9Ce0L/Rg9Cx0LvQuNC60L7QstCw0L3QvjogJytwb3N0LmRhdGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwicG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OiA1cHg7IHRvcDogNXB4OyBmb250LXNpemU6IDEwcHhcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBtdC0zIG1iLTJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBwb3N0XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyA9ICB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCI+e3twb3N0LnRpdGxlfX08L3YtdG9vbGJhci10aXRsZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgY2xhc3M9XFxcIm1hLTAgcGEtMFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gcG9zdFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyA9ICB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJwb3N0LnBob3Rvcy5sZW5ndGhcXFwiIGNsYXNzPVxcXCJ1c2VyLXBob3RvLW1vZHVsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKHBob3RvLCBpKSBpbiBwb3N0LnBob3Rvc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVxcXCJwaG90by5maWxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodD1cXFwiMzAwcHhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0PVxcXCIzMDBweFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsLWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cXFwidXNlci1wb3N0LWRlc2NyaXB0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciB2LWh0bWw9XFxcInBvc3QuZGVzY3JpcHRpb25cXFwiPjwvdi1jb250YWluZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cXHJcXG4gICAgICAgICAgICAgICAgPC92LWZsZXg+XFxyXFxuICAgICAgICAgICAgPC92LWxheW91dD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciB4cy0xMlxcXCIgdi1pZj1cXFwibCA+IDFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8di1wYWdpbmF0aW9uXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cXFwibFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6dG90YWwtdmlzaWJsZT1cXFwiM1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJwYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICA+PC92LXBhZ2luYXRpb24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgdi1lbHNlPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyIG15LTNcXFwiPtCd0L7QstC+0YHRgtC10Lkg0L/QvtC60LAg0L3QtdGCPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cXFwic2F2ZS1idG5cXFwiXFxyXFxuICAgICAgICAgICAgICAgdi1pZj1cXFwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0XFxcIlxcclxcbiAgICAgICAgICAgICAgIGNvbG9yPVxcXCJzdWNjZXNzXFxcIlxcclxcbiAgICAgICAgICAgICAgIGZhYlxcclxcbiAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJHJvdXRlci5wdXNoKCcvcG9zdC8wJylcXFwiXFxyXFxuICAgICAgICAgICAgICAgZGFyaz5cXHJcXG4gICAgICAgICAgICA8di1pY29uPm1kaS1wbHVzPC92LWljb24+XFxyXFxuICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgPHYtZGlhbG9nXFxyXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcIiEhZGlhbG9nUG9zdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2hvd1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgQGNsb3NlPVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHNob3cgPSBmYWxzZVxcclxcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IG51bGxcXHJcXG4gICAgICAgICAgICAgICAgXFxcIlxcclxcbiAgICAgICAgICAgICAgICA6ZnVsbHNjcmVlbj1cXFwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVcXFwiXFxyXFxuICAgICAgICA+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q6ZGVmYXVsdD5cXHJcXG4gICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGNsYXNzPVxcXCJweC0wIG14LTAgcHQtMCBtdC0wIGNvdmVyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDsgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XFxcInRleHQtY2VudGVyIG15LTNcXFwiPnt7ZGlhbG9nUG9zdC50aXRsZX19PC92LXRvb2xiYXItdGl0bGU+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcImRpYWxvZ1Bvc3QucGhvdG9zICYmIGRpYWxvZ1Bvc3QucGhvdG9zLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJjb250YWluZXIgbXktMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsLWl0ZW1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKHBob3RvLCBpKSBpbiBkaWFsb2dQb3N0LnBob3Rvc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XFxcInBob3RvLmZpbGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ9XFxcIjUwMHB4XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ9XFxcIjUwMHB4XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIHYtaHRtbD1cXFwiZGlhbG9nUG9zdC5kZXNjcmlwdGlvblxcXCI+PC92LWNvbnRhaW5lcj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XFxcInRleHQtY2VudGVyIG15LTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cXFwicHJpbWFyeVxcXCIgQGNsaWNrPVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyA9IGZhbHNlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBudWxsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIj7Ql9Cw0LrRgNGL0YLRjFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgPC92LWRpYWxvZz5cXHJcXG4gICAgPC92LWNvbnRhaW5lcj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG5hbWU6IFxcXCJQb3N0c1xcXCIsXFxyXFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICBsOiAxLFxcclxcbiAgICAgICAgICAgICAgICBwb3N0czogW10sXFxyXFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXFxyXFxuICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3Q6IG51bGwsXFxyXFxuICAgICAgICAgICAgICAgIGRlbGV0ZV9pZDogMCxcXHJcXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbW91bnRlZCgpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgZ2V0UGFnZSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL3Bvc3QvJywge3BhcmFtczoge3BhZ2U6IHRoaXMucGFnZSwgcGVyX3BhZ2U6IDEwfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sID0gcmVzcG9uc2UuZGF0YS5sYXN0X3BhZ2VcXHJcXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGRlbGV0ZSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsZXRlX2lkID4gMClcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5kZWxldGUoJy9wb3N0LycgKyB0aGlzLmRlbGV0ZV9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlX2lkID0gMFxcclxcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB3YXRjaDoge1xcclxcbiAgICAgICAgICAgIHBhZ2UoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZGVsZXRlX2lkKG52KSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmIChudiA+IDApIHRoaXMuZGVsZXRlKClcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuICAgIC51c2VyLXBob3RvLW1vZHVsZXtcXHJcXG4gICAgICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgfVxcclxcbiAgICAudXNlci1wb3N0LWRlc2NyaXB0aW9ue1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qb3N0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWE1MzIyOWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFhNTMyMjlhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFhNTMyMjlhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFhNTMyMjlhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qb3N0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWE1MzIyOWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWE1MzIyOWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Qb3N0cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb3ZlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgIGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoXCLQn9C+0YHQu9C10LTQvdC40LUg0L3QvtCy0L7RgdGC0LhcIikgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnBvc3RzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucG9zdHMsIGZ1bmN0aW9uKHBvc3QsIHkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHksIGF0dHJzOiB7IHhzMTI6IFwiXCIsIHNtNjogXCJcIiwgbWQ2OiBcIlwiLCBsZzQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYS0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZWxldmF0aW9uOiBcIjBcIiwgb3V0bGluZWQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXggY3J1ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiLTEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVfaWQgPSBwb3N0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktZGVsZXRlXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9wb3N0L1wiICsgcG9zdC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLXBlbmNpbFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcItCe0L/Rg9Cx0LvQuNC60L7QstCw0L3QvjogXCIgKyBwb3N0LmRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG10LTMgbWItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2dQb3N0ID0gcG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHBvc3QudGl0bGUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWEtMCBwYS0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QgPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QucGhvdG9zLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidXNlci1waG90by1tb2R1bGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2Fyb3VzZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wocG9zdC5waG90b3MsIGZ1bmN0aW9uKHBob3RvLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2LWNhcm91c2VsLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBwaG90by5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW46IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW4taGVpZ2h0XCI6IFwiMzAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC1oZWlnaHRcIjogXCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInVzZXItcG9zdC1kZXNjcmlwdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jb250YWluZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhwb3N0LmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5sID4gMVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgeHMtMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGVuZ3RoOiBfdm0ubCwgXCJ0b3RhbC12aXNpYmxlXCI6IDMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXktM1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi0J3QvtCy0L7RgdGC0LXQuSDQv9C+0LrQsCDQvdC10YJcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlLWJ0blwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJzdWNjZXNzXCIsIGZhYjogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5wdXNoKFwiL3Bvc3QvMFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLXBsdXNcIildKV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICEhX3ZtLmRpYWxvZ1Bvc3RcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZnVsbHNjcmVlbjogX3ZtLiR2dWV0aWZ5LmJyZWFrcG9pbnQubW9iaWxlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QgPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvdyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJweC0wIG14LTAgcHQtMCBtdC0wIGNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwid2hpdGUgIWltcG9ydGFudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibWF4LXdpZHRoXCI6IFwiMTAwJSAhaW1wb3J0YW50XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBteS0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRpYWxvZ1Bvc3QudGl0bGUpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QucGhvdG9zICYmIF92bS5kaWFsb2dQb3N0LnBob3Rvcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXktMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJvdXNlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kaWFsb2dQb3N0LnBob3RvcywgZnVuY3Rpb24ocGhvdG8sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidi1jYXJvdXNlbC1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcGhvdG8uZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW46IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC1oZWlnaHRcIjogXCI1MDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW4taGVpZ2h0XCI6IFwiNTAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1jb250YWluZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0uZGlhbG9nUG9zdC5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhci10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXktM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0JfQsNC60YDRi9GC0YxcXG4gICAgICAgICAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxZTI5NDNjZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=