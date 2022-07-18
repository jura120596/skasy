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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Posts",
  data: function data(vm) {
    return {
      l: 1,
      posts: [],
      page: 1,
      dialogPost: null,
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-dialog{\n    background-color: white !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/Posts.vue"],"names":[],"mappings":";AAsIA;IACA,kCAAA;AACA","sourcesContent":["<template>\n    <v-container class=\"cover\">\n        <v-toolbar-title align=\"center\" justify=\"center\" class=\"mb-2\"\n                         v-text=\"'Последние новости'\">\n        </v-toolbar-title>\n        <div v-if=\"posts.length > 0\" >\n            <v-layout class=\"d-flex flex-row flex-wrap\">\n\n                <v-flex\n                        xs12\n                        sm6\n                        md6\n                        lg4\n                        v-for=\"(post, y) in posts\" :key=\"y\" >\n\n                    <v-card\n                            elevation=\"0\"\n                            outlined\n                            style=\"position: relative;\"\n                            class=\"ma-1\"\n                            @click=\"\n                                dialogPost = post\n                                show =  true\n                            \"\n                    >\n                        <div v-text=\"post.date\" style=\"position:absolute; right: 5px; top: 5px; font-size: 10px\"></div>\n                        <v-container>\n                            <v-spacer></v-spacer>\n                            <v-toolbar-title class=\"text-center\">{{post.title}}</v-toolbar-title>\n                            <v-spacer></v-spacer>\n                        </v-container>\n\n                        <v-container>\n                            <div v-if=\"post.photos.length\" class=\"user-photo-module\">\n                                <v-carousel>\n                                    <v-carousel-item\n                                            v-for=\"(photo, i) in post.photos\"\n                                            :key=\"i\"\n                                            :src=\"photo.file\"\n                                            contain\n                                    >\n                                    </v-carousel-item>\n                                </v-carousel>\n                            </div>\n                        </v-container>\n                    </v-card>\n                </v-flex>\n            </v-layout>\n            <div class=\"text-center xs-12\">\n                <v-pagination\n                        :length=\"l\"\n                        :total-visible=\"3\"\n                        v-model=\"page\"\n                ></v-pagination>\n            </div>\n        </div>\n        <div v-else>\n\n            <div class=\"text-center my-3\">{{dialogPost.title}}</div>\n        </div>\n        <v-dialog\n                v-if=\"!!dialogPost\"\n                v-model=\"show\"\n                @close=\"\n                    show = false\n                    dialogPost = null\n                \"\n                :fullscreen=\"$vuetify.breakpoint.mobileBreakpoint\"\n        >\n            <template slot:default>\n                <v-container class=\"px-0 mx-0 pt-0 mt-0 cover\" style=\"background-color: white !important;\">\n                    <v-toolbar-title class=\"text-center my-3\">{{dialogPost.title}}</v-toolbar-title>\n\n                    <div v-if=\"dialogPost.photos && dialogPost.photos.length > 0\" class=\"user-photo-module my-2\">\n                        <v-carousel>\n                            <v-carousel-item\n                                    v-for=\"(photo, i) in dialogPost.photos\"\n                                    :key=\"i\"\n                                    :src=\"photo.file\"\n                                    contain\n                            >\n                            </v-carousel-item>\n                        </v-carousel>\n                    </div>\n                    <v-container v-html=\"dialogPost.description\"></v-container>\n\n                    <v-toolbar-title class=\"text-center my-3\">\n                        <v-btn color=\"primary\" @click=\"\n                            show = false\n                            dialogPost = null\n                        \">Закрыть</v-btn>\n                    </v-toolbar-title>\n\n                </v-container>\n            </template>\n        </v-dialog>\n    </v-container>\n</template>\n\n<script>\n    export default {\n        name: \"Posts\",\n        data: (vm) => {\n            return {\n                l: 1,\n                posts: [],\n                page: 1,\n                dialogPost: null,\n                show: false\n            }\n        },\n        mounted() {\n            this.getPage();\n        },\n        methods: {\n            getPage() {\n                window.axios.get('/post/', {params: {page:this.page, per_page: 10}}).then((response) => {\n                    this.posts = response.data.data;\n                    this.l = response.data.last_page\n                }).catch((e) => {\n                    console.log(e);\n                });\n            }\n        },\n        watch: {\n            page() {\n                    console.log(this.page)\n                    this.getPage();\n            }\n        }\n    }\n</script>\n\n<style>\n    .v-dialog{\n        background-color: white !important;\n    }\n</style>"],"sourceRoot":""}]);
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
                          _c("div", {
                            staticStyle: {
                              position: "absolute",
                              right: "5px",
                              top: "5px",
                              "font-size": "10px"
                            },
                            domProps: { textContent: _vm._s(post.date) }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-toolbar-title",
                                { staticClass: "text-center" },
                                [_vm._v(_vm._s(post.title))]
                              ),
                              _vm._v(" "),
                              _c("v-spacer")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-container", [
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
              _vm._v(_vm._s(_vm.dialogPost.title))
            ])
          ]),
      _vm._v(" "),
      !!_vm.dialogPost
        ? _c(
            "v-dialog",
            {
              attrs: { fullscreen: _vm.$vuetify.breakpoint.mobileBreakpoint },
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
                          [_vm._v("Закрыть")]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdHMudnVlP2U0YzAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdHMudnVlP2Y4Y2MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RzLnZ1ZT80MGViIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qb3N0cy52dWU/ODkzMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0dBO0FBQ0EsZUFEQTtBQUVBO0FBQ0E7QUFDQSxVQURBO0FBRUEsZUFGQTtBQUdBLGFBSEE7QUFJQSxzQkFKQTtBQUtBO0FBTEE7QUFPQSxHQVZBO0FBV0EsU0FYQSxxQkFXQTtBQUNBO0FBQ0EsR0FiQTtBQWNBO0FBQ0EsV0FEQSxxQkFDQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLFdBR0E7QUFDQTtBQUNBLE9BTEE7QUFNQTtBQVJBLEdBZEE7QUF3QkE7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF4QkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esc0RBQXNELHlDQUF5QyxHQUFHLFNBQVMsMkZBQTJGLE1BQU0sV0FBVyw2c0JBQTZzQiwyVEFBMlQsWUFBWSxVQUFVLDBMQUEwTCxZQUFZLDR0Q0FBNHRDLGtCQUFrQiw4Y0FBOGMsdUVBQXVFLGtCQUFrQix5bUNBQXltQyxtREFBbUQsc0JBQXNCLDRKQUE0SixXQUFXLHNCQUFzQiw2QkFBNkIsV0FBVyxxQkFBcUIseUJBQXlCLDhDQUE4QyxTQUFTLDhCQUE4QixzQkFBc0Isc0RBQXNELHlFQUF5RSxnQkFBZ0IscUNBQXFDLG1CQUFtQixFQUFFLGVBQWUsV0FBVyxtQkFBbUIsc0JBQXNCLGlGQUFpRixlQUFlLFdBQVcsT0FBTyxzQ0FBc0MsNkNBQTZDLE9BQU8sNkJBQTZCO0FBQ3J2SztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A2QztBQUMzQjtBQUNMO0FBQ3BELENBQWlFOzs7QUFHakU7QUFDNkY7QUFDN0YsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsd0VBQU07QUFDUixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxzRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDZ00sQ0FBQyxpRUFBZSx1TUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW5PO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUJBQXVCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxQ0FBcUM7QUFDckQsbUJBQW1CO0FBQ25CLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyQ0FBMkM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQixzQ0FBc0MsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHVCQUF1QjtBQUMvRCxrQ0FBa0MsK0JBQStCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix1Q0FBdUM7QUFDdkMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNkJBQTZCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxtQ0FBbUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BEO0FBQ0E7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0NBQWtDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdURBQXVEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsbUJBQW1CO0FBQ25CO0FBQ0EsMkNBQTJDLGtDQUFrQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0NBQXdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQyxpQ0FBaUM7QUFDakMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtDQUFrQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBbUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6TkE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsMnFCQUF3VjtBQUM5VztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkpBQWlGO0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19wYWdlc19Qb3N0c192dWU1OTE0ODRjYTU3MWQwYmZiNWU5NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250YWluZXIgY2xhc3M9XCJjb3ZlclwiPlxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVwiJ9Cf0L7RgdC70LXQtNC90LjQtSDQvdC+0LLQvtGB0YLQuCdcIj5cbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDxkaXYgdi1pZj1cInBvc3RzLmxlbmd0aCA+IDBcIiA+XG4gICAgICAgICAgICA8di1sYXlvdXQgY2xhc3M9XCJkLWZsZXggZmxleC1yb3cgZmxleC13cmFwXCI+XG5cbiAgICAgICAgICAgICAgICA8di1mbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICB4czEyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTZcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kNlxuICAgICAgICAgICAgICAgICAgICAgICAgbGc0XG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihwb3N0LCB5KSBpbiBwb3N0c1wiIDprZXk9XCJ5XCIgPlxuXG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYS0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IHBvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyA9ICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LXRleHQ9XCJwb3N0LmRhdGVcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyByaWdodDogNXB4OyB0b3A6IDVweDsgZm9udC1zaXplOiAxMHB4XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtY2VudGVyXCI+e3twb3N0LnRpdGxlfX08L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJwb3N0LnBob3Rvcy5sZW5ndGhcIiBjbGFzcz1cInVzZXItcGhvdG8tbW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWwtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihwaG90bywgaSkgaW4gcG9zdC5waG90b3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJwaG90by5maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB4cy0xMlwiPlxuICAgICAgICAgICAgICAgIDx2LXBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0b3RhbC12aXNpYmxlPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGFnZVwiXG4gICAgICAgICAgICAgICAgPjwvdi1wYWdpbmF0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtZWxzZT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj57e2RpYWxvZ1Bvc3QudGl0bGV9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHYtZGlhbG9nXG4gICAgICAgICAgICAgICAgdi1pZj1cIiEhZGlhbG9nUG9zdFwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInNob3dcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cIlxuICAgICAgICAgICAgICAgICAgICBzaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IG51bGxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVCcmVha3BvaW50XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q6ZGVmYXVsdD5cbiAgICAgICAgICAgICAgICA8di1jb250YWluZXIgY2xhc3M9XCJweC0wIG14LTAgcHQtMCBtdC0wIGNvdmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1wiPlxuICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC1jZW50ZXIgbXktM1wiPnt7ZGlhbG9nUG9zdC50aXRsZX19PC92LXRvb2xiYXItdGl0bGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZGlhbG9nUG9zdC5waG90b3MgJiYgZGlhbG9nUG9zdC5waG90b3MubGVuZ3RoID4gMFwiIGNsYXNzPVwidXNlci1waG90by1tb2R1bGUgbXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWwtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIocGhvdG8sIGkpIGluIGRpYWxvZ1Bvc3QucGhvdG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJwaG90by5maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgdi1odG1sPVwiZGlhbG9nUG9zdC5kZXNjcmlwdGlvblwiPjwvdi1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgXCI+0JfQsNC60YDRi9GC0Yw8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cblxuICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3YtZGlhbG9nPlxuICAgIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJQb3N0c1wiLFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbDogMSxcbiAgICAgICAgICAgICAgICBwb3N0czogW10sXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgICAgICBkaWFsb2dQb3N0OiBudWxsLFxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0UGFnZSgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvcG9zdC8nLCB7cGFyYW1zOiB7cGFnZTp0aGlzLnBhZ2UsIHBlcl9wYWdlOiAxMH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmwgPSByZXNwb25zZS5kYXRhLmxhc3RfcGFnZVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgcGFnZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wYWdlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgLnYtZGlhbG9ne1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbjwvc3R5bGU+IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1kaWFsb2d7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qb3N0cy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXNJQTtJQUNBLGtDQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8di1jb250YWluZXIgY2xhc3M9XFxcImNvdmVyXFxcIj5cXG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XFxcImNlbnRlclxcXCIganVzdGlmeT1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwibWItMlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVxcXCIn0J/QvtGB0LvQtdC00L3QuNC1INC90L7QstC+0YHRgtC4J1xcXCI+XFxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cXG4gICAgICAgIDxkaXYgdi1pZj1cXFwicG9zdHMubGVuZ3RoID4gMFxcXCIgPlxcbiAgICAgICAgICAgIDx2LWxheW91dCBjbGFzcz1cXFwiZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcFxcXCI+XFxuXFxuICAgICAgICAgICAgICAgIDx2LWZsZXhcXG4gICAgICAgICAgICAgICAgICAgICAgICB4czEyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc202XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWQ2XFxuICAgICAgICAgICAgICAgICAgICAgICAgbGc0XFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihwb3N0LCB5KSBpbiBwb3N0c1xcXCIgOmtleT1cXFwieVxcXCIgPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249XFxcIjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJwb3NpdGlvbjogcmVsYXRpdmU7XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWEtMVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBwb3N0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gIHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi10ZXh0PVxcXCJwb3N0LmRhdGVcXFwiIHN0eWxlPVxcXCJwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiA1cHg7IGZvbnQtc2l6ZTogMTBweFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPnt7cG9zdC50aXRsZX19PC92LXRvb2xiYXItdGl0bGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInBvc3QucGhvdG9zLmxlbmd0aFxcXCIgY2xhc3M9XFxcInVzZXItcGhvdG8tbW9kdWxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsLWl0ZW1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCIocGhvdG8sIGkpIGluIHBvc3QucGhvdG9zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XFxcInBob3RvLmZpbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbC1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgIDwvdi1sYXlvdXQ+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgeHMtMTJcXFwiPlxcbiAgICAgICAgICAgICAgICA8di1wYWdpbmF0aW9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cXFwibFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6dG90YWwtdmlzaWJsZT1cXFwiM1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJwYWdlXFxcIlxcbiAgICAgICAgICAgICAgICA+PC92LXBhZ2luYXRpb24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgdi1lbHNlPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyIG15LTNcXFwiPnt7ZGlhbG9nUG9zdC50aXRsZX19PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDx2LWRpYWxvZ1xcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCIhIWRpYWxvZ1Bvc3RcXFwiXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInNob3dcXFwiXFxuICAgICAgICAgICAgICAgIEBjbG9zZT1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBzaG93ID0gZmFsc2VcXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBudWxsXFxuICAgICAgICAgICAgICAgIFxcXCJcXG4gICAgICAgICAgICAgICAgOmZ1bGxzY3JlZW49XFxcIiR2dWV0aWZ5LmJyZWFrcG9pbnQubW9iaWxlQnJlYWtwb2ludFxcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdDpkZWZhdWx0PlxcbiAgICAgICAgICAgICAgICA8di1jb250YWluZXIgY2xhc3M9XFxcInB4LTAgbXgtMCBwdC0wIG10LTAgY292ZXJcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBteS0zXFxcIj57e2RpYWxvZ1Bvc3QudGl0bGV9fTwvdi10b29sYmFyLXRpdGxlPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJkaWFsb2dQb3N0LnBob3RvcyAmJiBkaWFsb2dQb3N0LnBob3Rvcy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwidXNlci1waG90by1tb2R1bGUgbXktMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsLWl0ZW1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKHBob3RvLCBpKSBpbiBkaWFsb2dQb3N0LnBob3Rvc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XFxcInBob3RvLmZpbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbC1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIHYtaHRtbD1cXFwiZGlhbG9nUG9zdC5kZXNjcmlwdGlvblxcXCI+PC92LWNvbnRhaW5lcj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XFxcInRleHQtY2VudGVyIG15LTNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cXFwicHJpbWFyeVxcXCIgQGNsaWNrPVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBudWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIj7Ql9Cw0LrRgNGL0YLRjDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cXG5cXG4gICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgPC92LWRpYWxvZz5cXG4gICAgPC92LWNvbnRhaW5lcj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIG5hbWU6IFxcXCJQb3N0c1xcXCIsXFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBsOiAxLFxcbiAgICAgICAgICAgICAgICBwb3N0czogW10sXFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXFxuICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3Q6IG51bGwsXFxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGdldFBhZ2UoKSB7XFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy9wb3N0LycsIHtwYXJhbXM6IHtwYWdlOnRoaXMucGFnZSwgcGVyX3BhZ2U6IDEwfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sID0gcmVzcG9uc2UuZGF0YS5sYXN0X3BhZ2VcXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgd2F0Y2g6IHtcXG4gICAgICAgICAgICBwYWdlKCkge1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wYWdlKVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbiAgICAudi1kaWFsb2d7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qb3N0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWE1MzIyOWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2p1cmExMjA1OTYvUGhwc3Rvcm1Qcm9qZWN0cy9za2FzeS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYTUzMjI5YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYTUzMjI5YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYTUzMjI5YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhNTMyMjlhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFhNTMyMjlhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvUG9zdHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY292ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9LFxuICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKFwi0J/QvtGB0LvQtdC00L3QuNC1INC90L7QstC+0YHRgtC4XCIpIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wb3N0cy5sZW5ndGggPiAwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1yb3cgZmxleC13cmFwXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBvc3RzLCBmdW5jdGlvbihwb3N0LCB5KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiB5LCBhdHRyczogeyB4czEyOiBcIlwiLCBzbTY6IFwiXCIsIG1kNjogXCJcIiwgbGc0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWEtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGVsZXZhdGlvbjogXCIwXCIsIG91dGxpbmVkOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QgPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MocG9zdC5kYXRlKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHBvc3QudGl0bGUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY29udGFpbmVyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnBob3Rvcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInVzZXItcGhvdG8tbW9kdWxlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcm91c2VsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChwb3N0LnBob3RvcywgZnVuY3Rpb24ocGhvdG8sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2LWNhcm91c2VsLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBwaG90by5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciB4cy0xMlwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsZW5ndGg6IF92bS5sLCBcInRvdGFsLXZpc2libGVcIjogMyB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBteS0zXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kaWFsb2dQb3N0LnRpdGxlKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgISFfdm0uZGlhbG9nUG9zdFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBmdWxsc2NyZWVuOiBfdm0uJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVCcmVha3BvaW50IH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QgPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvdyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJweC0wIG14LTAgcHQtMCBtdC0wIGNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIndoaXRlICFpbXBvcnRhbnRcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG15LTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGlhbG9nUG9zdC50aXRsZSkpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdC5waG90b3MgJiYgX3ZtLmRpYWxvZ1Bvc3QucGhvdG9zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInVzZXItcGhvdG8tbW9kdWxlIG15LTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2Fyb3VzZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGlhbG9nUG9zdC5waG90b3MsIGZ1bmN0aW9uKHBob3RvLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInYtY2Fyb3VzZWwtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcGhvdG8uZmlsZSwgY29udGFpbjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInYtY29udGFpbmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmRpYWxvZ1Bvc3QuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG15LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2dQb3N0ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCX0LDQutGA0YvRgtGMXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjFlMjk0M2NlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==