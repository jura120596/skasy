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
    "delete": function _delete(id) {
      var _this2 = this;

      if (this.delete_id > 0) window.axios["delete"]('/post/' + this.delete_id).then(function (response) {
        _this2.getPage();
      })["catch"](function (e) {
        console.log(e);
      });
    }
  },
  watch: {
    page: function page() {
      console.log(this.page);
      this.getPage();
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-dialog {\n    background-color: white !important;\n}\n.crud .v-btn--fab.v-size--small {\n    height: 30px;\n    width: 30px;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/Posts.vue"],"names":[],"mappings":";AA8KA;IACA,kCAAA;AACA;AAEA;IACA,YAAA;IACA,WAAA;AACA","sourcesContent":["<template>\n    <v-container class=\"cover\">\n        <v-toolbar-title align=\"center\" justify=\"center\" class=\"mb-2\"\n                         v-text=\"'Последние новости'\">\n        </v-toolbar-title>\n        <div v-if=\"posts.length > 0\">\n            <v-layout class=\"d-flex flex-row flex-wrap\">\n\n                <v-flex\n                        xs12\n                        sm6\n                        md6\n                        lg4\n                        v-for=\"(post, y) in posts\" :key=\"y\">\n\n                    <v-card\n                            elevation=\"0\"\n                            outlined\n                            style=\"position: relative;\"\n                            class=\"ma-1\"\n                            @click=\"\n                                dialogPost = post\n                                show =  true\n                            \"\n                    >\n                        <div v-if=\"$store.state.auth.user.role === 1024\"\n                             class=\"d-flex crud\" style=\"position:absolute; right: 5px; top: -10px; font-size: 10px\">\n                            <v-btn\n                                    color=\"yellow\"\n                                    fab\n                                    small\n                                    @click=\"$router.push('/post/'+post.id)\"\n                                    dark>\n                                <v-icon>mdi-pencil</v-icon>\n                            </v-btn>\n                            <v-btn color=\"red\"\n                                   fab\n                                   small\n                                   @click=\"delete_id = post.id\"\n                                   dark>\n                                <v-icon>mdi-delete</v-icon>\n                            </v-btn>\n                        </div>\n\n                        <div\n                                v-else\n                                v-text=\"'Опубликовано: '+post.date\"\n                                style=\"position:absolute; right: 5px; top: 5px; font-size: 10px\"></div>\n                        <v-container>\n                            <v-spacer></v-spacer>\n                            <v-toolbar-title class=\"text-center mt-3 mb-2\">{{post.title}}</v-toolbar-title>\n                            <v-spacer></v-spacer>\n                        </v-container>\n\n                        <v-container class=\"ma-0 pa-0\">\n                            <div v-if=\"post.photos.length\" class=\"user-photo-module\">\n                                <v-carousel>\n                                    <v-carousel-item\n                                            v-for=\"(photo, i) in post.photos\"\n                                            :key=\"i\"\n                                            :src=\"photo.file\"\n                                            contain\n                                    >\n                                    </v-carousel-item>\n                                </v-carousel>\n                            </div>\n                        </v-container>\n                    </v-card>\n                </v-flex>\n            </v-layout>\n            <div class=\"text-center xs-12\">\n                <v-pagination\n                        :length=\"l\"\n                        :total-visible=\"3\"\n                        v-model=\"page\"\n                ></v-pagination>\n            </div>\n        </div>\n        <div v-else>\n            <div class=\"text-center my-3\">Новостей пока нет</div>\n        </div>\n\n        <v-btn class=\"save-btn\"\n               v-if=\"$store.state.auth.user.role === 1024\"\n               color=\"success\"\n               fab\n               @click=\"$router.push('/post/0')\"\n               dark>\n            <v-icon>mdi-plus</v-icon>\n        </v-btn>\n        <v-dialog\n                v-if=\"!!dialogPost\"\n                v-model=\"show\"\n                @close=\"\n                    show = false\n                    dialogPost = null\n                \"\n                :fullscreen=\"$vuetify.breakpoint.mobile\"\n        >\n            <template slot:default>\n                <v-container class=\"px-0 mx-0 pt-0 mt-0 cover\" style=\"background-color: white !important;\">\n                    <v-toolbar-title class=\"text-center my-3\">{{dialogPost.title}}</v-toolbar-title>\n\n                    <div v-if=\"dialogPost.photos && dialogPost.photos.length > 0\" class=\"user-photo-module my-2\">\n                        <v-carousel>\n                            <v-carousel-item\n                                    v-for=\"(photo, i) in dialogPost.photos\"\n                                    :key=\"i\"\n                                    :src=\"photo.file\"\n                                    contain\n                            >\n                            </v-carousel-item>\n                        </v-carousel>\n                    </div>\n                    <v-container v-html=\"dialogPost.description\"></v-container>\n\n                    <v-toolbar-title class=\"text-center my-3\">\n                        <v-btn color=\"primary\" @click=\"\n                            show = false\n                            dialogPost = null\n                        \">Закрыть\n                        </v-btn>\n                    </v-toolbar-title>\n\n                </v-container>\n            </template>\n        </v-dialog>\n    </v-container>\n</template>\n\n<script>\n    export default {\n        name: \"Posts\",\n        data: (vm) => {\n            return {\n                l: 1,\n                posts: [],\n                page: 1,\n                dialogPost: null,\n                delete_id: 0,\n                show: false\n            }\n        },\n        mounted() {\n            this.getPage();\n        },\n        methods: {\n            getPage() {\n                window.axios.get('/post/', {params: {page: this.page, per_page: 10}}).then((response) => {\n                    this.posts = response.data.data;\n                    this.l = response.data.last_page\n                }).catch((e) => {\n                    console.log(e);\n                });\n            },\n            delete(id) {\n                if (this.delete_id > 0)\n                    window.axios.delete('/post/' + this.delete_id).then((response) => {\n                        this.getPage()\n                    }).catch((e) => {\n                        console.log(e);\n                    });\n            }\n        },\n        watch: {\n            page() {\n                console.log(this.page)\n                this.getPage();\n            }\n        }\n    }\n</script>\n\n<style>\n    .v-dialog {\n        background-color: white !important;\n    }\n\n    .crud .v-btn--fab.v-size--small {\n        height: 30px;\n        width: 30px;\n    }\n</style>"],"sourceRoot":""}]);
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
                          attrs: { elevation: "0", outlined: "" },
                          on: {
                            click: function($event) {
                              _vm.dialogPost = post
                              _vm.show = true
                            }
                          }
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
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
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
                                { staticClass: "text-center mt-3 mb-2" },
                                [_vm._v(_vm._s(post.title))]
                              ),
                              _vm._v(" "),
                              _c("v-spacer")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-container", { staticClass: "ma-0 pa-0" }, [
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
                                            contain: ""
                                          }
                                        })
                                      }),
                                      1
                                    )
                                  ],
                                  1
                                )
                              : _vm._e()
                          ])
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
              _c(
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
                    staticStyle: { "background-color": "white !important" }
                  },
                  [
                    _c("v-toolbar-title", { staticClass: "text-center my-3" }, [
                      _vm._v(_vm._s(_vm.dialogPost.title))
                    ]),
                    _vm._v(" "),
                    _vm.dialogPost.photos && _vm.dialogPost.photos.length > 0
                      ? _c(
                          "div",
                          { staticClass: "user-photo-module my-2" },
                          [
                            _c(
                              "v-carousel",
                              _vm._l(_vm.dialogPost.photos, function(photo, i) {
                                return _c("v-carousel-item", {
                                  key: i,
                                  attrs: { src: photo.file, contain: "" }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdHMudnVlP2U0YzAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdHMudnVlP2Y4Y2MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RzLnZ1ZT80MGViIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qb3N0cy52dWU/ODkzMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1JQTtBQUNBLGVBREE7QUFFQTtBQUNBO0FBQ0EsVUFEQTtBQUVBLGVBRkE7QUFHQSxhQUhBO0FBSUEsc0JBSkE7QUFLQSxrQkFMQTtBQU1BO0FBTkE7QUFRQSxHQVhBO0FBWUEsU0FaQSxxQkFZQTtBQUNBO0FBQ0EsR0FkQTtBQWVBO0FBQ0EsV0FEQSxxQkFDQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLFdBR0E7QUFDQTtBQUNBLE9BTEE7QUFNQSxLQVJBO0FBQUEsK0JBU0EsRUFUQSxFQVNBO0FBQUE7O0FBQ0EsOEJBQ0E7QUFDQTtBQUNBLE9BRkEsV0FFQTtBQUNBO0FBQ0EsT0FKQTtBQUtBO0FBaEJBLEdBZkE7QUFpQ0E7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFqQ0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyU0E7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsMnFCQUF3VjtBQUM5VztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkpBQWlGO0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19wYWdlc19Qb3N0c192dWU0ZDVjOWU4ZTFmMmUyODc2Y2ZjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250YWluZXIgY2xhc3M9XCJjb3ZlclwiPlxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVwiJ9Cf0L7RgdC70LXQtNC90LjQtSDQvdC+0LLQvtGB0YLQuCdcIj5cbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDxkaXYgdi1pZj1cInBvc3RzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDx2LWxheW91dCBjbGFzcz1cImQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcIj5cblxuICAgICAgICAgICAgICAgIDx2LWZsZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIHhzMTJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtNlxuICAgICAgICAgICAgICAgICAgICAgICAgbWQ2XG4gICAgICAgICAgICAgICAgICAgICAgICBsZzRcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHBvc3QsIHkpIGluIHBvc3RzXCIgOmtleT1cInlcIj5cblxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWEtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgPSAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGNydWRcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyByaWdodDogNXB4OyB0b3A6IC0xMHB4OyBmb250LXNpemU6IDEwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwieWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL3Bvc3QvJytwb3N0LmlkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1wZW5jaWw8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxldGVfaWQgPSBwb3N0LmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXRleHQ9XCIn0J7Qv9GD0LHQu9C40LrQvtCy0LDQvdC+OiAnK3Bvc3QuZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OiA1cHg7IHRvcDogNXB4OyBmb250LXNpemU6IDEwcHhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtMyBtYi0yXCI+e3twb3N0LnRpdGxlfX08L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cIm1hLTAgcGEtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInBvc3QucGhvdG9zLmxlbmd0aFwiIGNsYXNzPVwidXNlci1waG90by1tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHBob3RvLCBpKSBpbiBwb3N0LnBob3Rvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cInBob3RvLmZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHhzLTEyXCI+XG4gICAgICAgICAgICAgICAgPHYtcGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cImxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRvdGFsLXZpc2libGU9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYWdlXCJcbiAgICAgICAgICAgICAgICA+PC92LXBhZ2luYXRpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj7QndC+0LLQvtGB0YLQtdC5INC/0L7QutCwINC90LXRgjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8di1idG4gY2xhc3M9XCJzYXZlLWJ0blwiXG4gICAgICAgICAgICAgICB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0XCJcbiAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL3Bvc3QvMCcpXCJcbiAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICA8di1pY29uPm1kaS1wbHVzPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICAgIDx2LWRpYWxvZ1xuICAgICAgICAgICAgICAgIHYtaWY9XCIhIWRpYWxvZ1Bvc3RcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzaG93XCJcbiAgICAgICAgICAgICAgICBAY2xvc2U9XCJcbiAgICAgICAgICAgICAgICAgICAgc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBudWxsXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA6ZnVsbHNjcmVlbj1cIiR2dWV0aWZ5LmJyZWFrcG9pbnQubW9iaWxlXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q6ZGVmYXVsdD5cbiAgICAgICAgICAgICAgICA8di1jb250YWluZXIgY2xhc3M9XCJweC0wIG14LTAgcHQtMCBtdC0wIGNvdmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1wiPlxuICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC1jZW50ZXIgbXktM1wiPnt7ZGlhbG9nUG9zdC50aXRsZX19PC92LXRvb2xiYXItdGl0bGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZGlhbG9nUG9zdC5waG90b3MgJiYgZGlhbG9nUG9zdC5waG90b3MubGVuZ3RoID4gMFwiIGNsYXNzPVwidXNlci1waG90by1tb2R1bGUgbXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWwtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIocGhvdG8sIGkpIGluIGRpYWxvZ1Bvc3QucGhvdG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJwaG90by5maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgdi1odG1sPVwiZGlhbG9nUG9zdC5kZXNjcmlwdGlvblwiPjwvdi1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgXCI+0JfQsNC60YDRi9GC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdi1kaWFsb2c+XG4gICAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIlBvc3RzXCIsXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsOiAxLFxuICAgICAgICAgICAgICAgIHBvc3RzOiBbXSxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgZGVsZXRlX2lkOiAwLFxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0UGFnZSgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvcG9zdC8nLCB7cGFyYW1zOiB7cGFnZTogdGhpcy5wYWdlLCBwZXJfcGFnZTogMTB9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0cyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sID0gcmVzcG9uc2UuZGF0YS5sYXN0X3BhZ2VcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGUoaWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWxldGVfaWQgPiAwKVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZGVsZXRlKCcvcG9zdC8nICsgdGhpcy5kZWxldGVfaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKVxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgcGFnZSgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhZ2UpXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC52LWRpYWxvZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNydWQgLnYtYnRuLS1mYWIudi1zaXplLS1zbWFsbCB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxuPC9zdHlsZT4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LWRpYWxvZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcbi5jcnVkIC52LWJ0bi0tZmFiLnYtc2l6ZS0tc21hbGwge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdHMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE4S0E7SUFDQSxrQ0FBQTtBQUNBO0FBRUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVxcXCJjb3ZlclxcXCI+XFxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVxcXCJjZW50ZXJcXFwiIGp1c3RpZnk9XFxcImNlbnRlclxcXCIgY2xhc3M9XFxcIm1iLTJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cXFwiJ9Cf0L7RgdC70LXQtNC90LjQtSDQvdC+0LLQvtGB0YLQuCdcXFwiPlxcbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XFxuICAgICAgICA8ZGl2IHYtaWY9XFxcInBvc3RzLmxlbmd0aCA+IDBcXFwiPlxcbiAgICAgICAgICAgIDx2LWxheW91dCBjbGFzcz1cXFwiZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcFxcXCI+XFxuXFxuICAgICAgICAgICAgICAgIDx2LWZsZXhcXG4gICAgICAgICAgICAgICAgICAgICAgICB4czEyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc202XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWQ2XFxuICAgICAgICAgICAgICAgICAgICAgICAgbGc0XFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihwb3N0LCB5KSBpbiBwb3N0c1xcXCIgOmtleT1cXFwieVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcInBvc2l0aW9uOiByZWxhdGl2ZTtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtYS0xXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IHBvc3RcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgPSAgdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiXFxuICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZC1mbGV4IGNydWRcXFwiIHN0eWxlPVxcXCJwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiAtMTBweDsgZm9udC1zaXplOiAxMHB4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInllbGxvd1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJHJvdXRlci5wdXNoKCcvcG9zdC8nK3Bvc3QuaWQpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1wZW5jaWw8L3YtaWNvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJyZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImRlbGV0ZV9pZCA9IHBvc3QuaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXRleHQ9XFxcIifQntC/0YPQsdC70LjQutC+0LLQsNC90L46ICcrcG9zdC5kYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcInBvc2l0aW9uOmFic29sdXRlOyByaWdodDogNXB4OyB0b3A6IDVweDsgZm9udC1zaXplOiAxMHB4XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBtdC0zIG1iLTJcXFwiPnt7cG9zdC50aXRsZX19PC92LXRvb2xiYXItdGl0bGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGNsYXNzPVxcXCJtYS0wIHBhLTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInBvc3QucGhvdG9zLmxlbmd0aFxcXCIgY2xhc3M9XFxcInVzZXItcGhvdG8tbW9kdWxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsLWl0ZW1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCIocGhvdG8sIGkpIGluIHBvc3QucGhvdG9zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XFxcInBob3RvLmZpbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbC1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgIDwvdi1sYXlvdXQ+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgeHMtMTJcXFwiPlxcbiAgICAgICAgICAgICAgICA8di1wYWdpbmF0aW9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cXFwibFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6dG90YWwtdmlzaWJsZT1cXFwiM1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJwYWdlXFxcIlxcbiAgICAgICAgICAgICAgICA+PC92LXBhZ2luYXRpb24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgdi1lbHNlPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyIG15LTNcXFwiPtCd0L7QstC+0YHRgtC10Lkg0L/QvtC60LAg0L3QtdGCPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cXFwic2F2ZS1idG5cXFwiXFxuICAgICAgICAgICAgICAgdi1pZj1cXFwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0XFxcIlxcbiAgICAgICAgICAgICAgIGNvbG9yPVxcXCJzdWNjZXNzXFxcIlxcbiAgICAgICAgICAgICAgIGZhYlxcbiAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJHJvdXRlci5wdXNoKCcvcG9zdC8wJylcXFwiXFxuICAgICAgICAgICAgICAgZGFyaz5cXG4gICAgICAgICAgICA8di1pY29uPm1kaS1wbHVzPC92LWljb24+XFxuICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgPHYtZGlhbG9nXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcIiEhZGlhbG9nUG9zdFxcXCJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2hvd1xcXCJcXG4gICAgICAgICAgICAgICAgQGNsb3NlPVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHNob3cgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IG51bGxcXG4gICAgICAgICAgICAgICAgXFxcIlxcbiAgICAgICAgICAgICAgICA6ZnVsbHNjcmVlbj1cXFwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q6ZGVmYXVsdD5cXG4gICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGNsYXNzPVxcXCJweC0wIG14LTAgcHQtMCBtdC0wIGNvdmVyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cXFwidGV4dC1jZW50ZXIgbXktM1xcXCI+e3tkaWFsb2dQb3N0LnRpdGxlfX08L3YtdG9vbGJhci10aXRsZT5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZGlhbG9nUG9zdC5waG90b3MgJiYgZGlhbG9nUG9zdC5waG90b3MubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcInVzZXItcGhvdG8tbW9kdWxlIG15LTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihwaG90bywgaSkgaW4gZGlhbG9nUG9zdC5waG90b3NcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVxcXCJwaG90by5maWxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciB2LWh0bWw9XFxcImRpYWxvZ1Bvc3QuZGVzY3JpcHRpb25cXFwiPjwvdi1jb250YWluZXI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBteS0zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XFxcInByaW1hcnlcXFwiIEBjbGljaz1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gbnVsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCI+0JfQsNC60YDRi9GC0YxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XFxuXFxuICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgIDwvdi1kaWFsb2c+XFxuICAgIDwvdi1jb250YWluZXI+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICBuYW1lOiBcXFwiUG9zdHNcXFwiLFxcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgbDogMSxcXG4gICAgICAgICAgICAgICAgcG9zdHM6IFtdLFxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxcbiAgICAgICAgICAgICAgICBkaWFsb2dQb3N0OiBudWxsLFxcbiAgICAgICAgICAgICAgICBkZWxldGVfaWQ6IDAsXFxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGdldFBhZ2UoKSB7XFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy9wb3N0LycsIHtwYXJhbXM6IHtwYWdlOiB0aGlzLnBhZ2UsIHBlcl9wYWdlOiAxMH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0cyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubCA9IHJlc3BvbnNlLmRhdGEubGFzdF9wYWdlXFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkZWxldGUoaWQpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsZXRlX2lkID4gMClcXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5kZWxldGUoJy9wb3N0LycgKyB0aGlzLmRlbGV0ZV9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKVxcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICB3YXRjaDoge1xcbiAgICAgICAgICAgIHBhZ2UoKSB7XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFnZSlcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbiAgICAudi1kaWFsb2cge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG4gICAgfVxcblxcbiAgICAuY3J1ZCAudi1idG4tLWZhYi52LXNpemUtLXNtYWxsIHtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qb3N0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWE1MzIyOWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2p1cmExMjA1OTYvUGhwc3Rvcm1Qcm9qZWN0cy9za2FzeS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYTUzMjI5YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYTUzMjI5YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYTUzMjI5YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhNTMyMjlhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFhNTMyMjlhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvUG9zdHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY292ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9LFxuICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKFwi0J/QvtGB0LvQtdC00L3QuNC1INC90L7QstC+0YHRgtC4XCIpIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wb3N0cy5sZW5ndGggPiAwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1yb3cgZmxleC13cmFwXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBvc3RzLCBmdW5jdGlvbihwb3N0LCB5KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiB5LCBhdHRyczogeyB4czEyOiBcIlwiLCBzbTY6IFwiXCIsIG1kNjogXCJcIiwgbGc0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWEtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGVsZXZhdGlvbjogXCIwXCIsIG91dGxpbmVkOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QgPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGNydWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIi0xMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInllbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3Bvc3QvXCIgKyBwb3N0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktcGVuY2lsXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVfaWQgPSBwb3N0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktZGVsZXRlXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi0J7Qv9GD0LHQu9C40LrQvtCy0LDQvdC+OiBcIiArIHBvc3QuZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhci10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG10LTMgbWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHBvc3QudGl0bGUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY29udGFpbmVyXCIsIHsgc3RhdGljQ2xhc3M6IFwibWEtMCBwYS0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QucGhvdG9zLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidXNlci1waG90by1tb2R1bGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2Fyb3VzZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHBvc3QucGhvdG9zLCBmdW5jdGlvbihwaG90bywgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInYtY2Fyb3VzZWwtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHBob3RvLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW46IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHhzLTEyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtcGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxlbmd0aDogX3ZtLmwsIFwidG90YWwtdmlzaWJsZVwiOiAzIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG15LTNcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcItCd0L7QstC+0YHRgtC10Lkg0L/QvtC60LAg0L3QtdGCXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2F2ZS1idG5cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwic3VjY2Vzc1wiLCBmYWI6IFwiXCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIucHVzaChcIi9wb3N0LzBcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcIm1kaS1wbHVzXCIpXSldLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhIV92bS5kaWFsb2dQb3N0XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGZ1bGxzY3JlZW46IF92bS4kdnVldGlmeS5icmVha3BvaW50Lm1vYmlsZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2dQb3N0ID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3csXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHgtMCBteC0wIHB0LTAgbXQtMCBjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZSAhaW1wb3J0YW50XCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBteS0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRpYWxvZ1Bvc3QudGl0bGUpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QucGhvdG9zICYmIF92bS5kaWFsb2dQb3N0LnBob3Rvcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ1c2VyLXBob3RvLW1vZHVsZSBteS0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcm91c2VsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRpYWxvZ1Bvc3QucGhvdG9zLCBmdW5jdGlvbihwaG90bywgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2LWNhcm91c2VsLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHBob3RvLmZpbGUsIGNvbnRhaW46IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNvbnRhaW5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5kaWFsb2dQb3N0LmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBteS0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQl9Cw0LrRgNGL0YLRjFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjFlMjk0M2NlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==