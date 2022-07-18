(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_UserPosts_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UserPosts",
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

      window.axios.get('/user/post/', {
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

      if (this.delete_id > 0) window.axios["delete"]('/user/post/' + this.delete_id).then(function (response) {
        _this2.getPage();

        _this2.delete_id = 0;
      })["catch"](function (e) {
        console.log(e);
      });
    },
    accept: function accept() {}
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

/***/ "./resources/js/pages/UserPosts.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/UserPosts.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserPosts_vue_vue_type_template_id_541a08e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserPosts.vue?vue&type=template&id=541a08e2& */ "./resources/js/pages/UserPosts.vue?vue&type=template&id=541a08e2&");
/* harmony import */ var _UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPosts.vue?vue&type=script&lang=js& */ "./resources/js/pages/UserPosts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserPosts_vue_vue_type_template_id_541a08e2___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserPosts_vue_vue_type_template_id_541a08e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/UserPosts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/UserPosts.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/UserPosts.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPosts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/UserPosts.vue?vue&type=template&id=541a08e2&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/UserPosts.vue?vue&type=template&id=541a08e2& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_template_id_541a08e2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_template_id_541a08e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_template_id_541a08e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPosts.vue?vue&type=template&id=541a08e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=template&id=541a08e2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=template&id=541a08e2&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=template&id=541a08e2& ***!
  \****************************************************************************************************************************************************************************************************************/
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
            _vm.$store.state.auth.user.role === 1024
              ? "Обращения пользователей"
              : "Ваши обращения"
          )
        }
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
                          _vm.$store.state.auth.user.id === post.user_id
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
                                            "/user/post/" + post.id
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
                            : _c(
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
                                  _vm.$store.state.auth.user.role == 1024
                                    ? _c(
                                        "v-btn",
                                        {
                                          staticClass: "mr-3",
                                          attrs: {
                                            color: "primary",
                                            fab: "",
                                            small: "",
                                            dark: ""
                                          },
                                          on: { click: _vm.accept }
                                        },
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-check-outline")
                                          ])
                                        ],
                                        1
                                      )
                                    : _c(
                                        "div",
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "mr-3",
                                              attrs: {
                                                color: "primary",
                                                fab: "",
                                                small: "",
                                                dark: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  post.user_like =
                                                    post.user_like == 0 ? 1 : 0
                                                  post.likes +=
                                                    post.user_like === 1
                                                      ? 1
                                                      : -1
                                                }
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-heart")
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "mr-3",
                                              attrs: {
                                                color: "primary",
                                                fab: "",
                                                small: "",
                                                dark: ""
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                " +
                                                  _vm._s(post.likes) +
                                                  "\n                            "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                ],
                                1
                              ),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            [
                              _c("div", {
                                staticStyle: {
                                  position: "absolute",
                                  left: "5px",
                                  bottom: "20px",
                                  "font-size": "10px"
                                },
                                domProps: {
                                  textContent: _vm._s(
                                    "Опубликовано: " + post.date
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c("div", {
                                staticStyle: {
                                  position: "absolute",
                                  left: "5px",
                                  bottom: "5px",
                                  "font-size": "10px"
                                },
                                domProps: {
                                  textContent: _vm._s(
                                    "Пользователь: " + post.author.full_name
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-toolbar-title",
                                {
                                  staticClass: "text-center mt-2 mb-5",
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
              _vm._v("Обращений пока нет")
            ])
          ]),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "save-btn",
          attrs: { color: "success", fab: "", dark: "" },
          on: {
            click: function($event) {
              return _vm.$router.push("/user/post/0")
            }
          }
        },
        [_c("v-icon", [_vm._v("mdi-plus")])],
        1
      ),
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWU/OWQ0YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RzLnZ1ZT83Mzg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5S0E7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxVQURBO0FBRUEsZUFGQTtBQUdBLGFBSEE7QUFJQSxzQkFKQTtBQUtBLGtCQUxBO0FBTUE7QUFOQTtBQVFBLEdBWEE7QUFZQSxTQVpBLHFCQVlBO0FBQ0E7QUFDQSxHQWRBO0FBZUE7QUFDQSxXQURBLHFCQUNBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsV0FHQTtBQUNBO0FBQ0EsT0FMQTtBQU1BLEtBUkE7QUFBQSxpQ0FTQTtBQUFBOztBQUNBLDhCQUNBO0FBQ0E7O0FBQ0E7QUFDQSxPQUhBLFdBR0E7QUFDQTtBQUNBLE9BTEE7QUFNQSxLQWpCQTtBQWtCQSxVQWxCQSxvQkFrQkEsQ0FFQTtBQXBCQSxHQWZBO0FBcUNBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGFBSkEscUJBSUEsRUFKQSxFQUlBO0FBQ0E7QUFDQTtBQU5BO0FBckNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pLd0Y7QUFDM0I7QUFD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QTtBQUNBLG9DQUFvQyxtQkFBbUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfVXNlclBvc3RzX3Z1ZTM2N2U2ZTBlMGY2ZjljNTEyMTU5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cImNvdmVyXCI+XG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LXRleHQ9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjQgPyAn0J7QsdGA0LDRidC10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5JyA6ICfQktCw0YjQuCDQvtCx0YDQsNGJ0LXQvdC40Y8nXCI+XG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICA8ZGl2IHYtaWY9XCJwb3N0cy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICA8di1sYXlvdXQgY2xhc3M9XCJkLWZsZXggZmxleC1yb3cgZmxleC13cmFwXCI+XG5cbiAgICAgICAgICAgICAgICA8di1mbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICB4czEyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTZcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kNlxuICAgICAgICAgICAgICAgICAgICAgICAgbGc0XG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihwb3N0LCB5KSBpbiBwb3N0c1wiIDprZXk9XCJ5XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hLTFcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID09PSBwb3N0LnVzZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBjcnVkXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiAtMTBweDsgZm9udC1zaXplOiAxMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRlbGV0ZV9pZCA9IHBvc3QuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1kZWxldGU8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ5ZWxsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvdXNlci9wb3N0LycrcG9zdC5pZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktcGVuY2lsPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXggY3J1ZFwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OiA1cHg7IHRvcDogLTEwcHg7IGZvbnQtc2l6ZTogMTBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09IDEwMjRcIiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiYWNjZXB0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktY2hlY2stb3V0bGluZTwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QudXNlcl9saWtlID0gcG9zdC51c2VyX2xpa2UgPT0gMCA/IDE6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Lmxpa2VzICs9IHBvc3QudXNlcl9saWtlID09PSAxID8gMSA6IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktaGVhcnQ8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cG9zdC5saWtlc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtdGV4dD1cIifQntC/0YPQsdC70LjQutC+0LLQsNC90L46ICcrcG9zdC5kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6IDVweDsgYm90dG9tOiAyMHB4OyBmb250LXNpemU6IDEwcHhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtdGV4dD1cIifQn9C+0LvRjNC30L7QstCw0YLQtdC70Yw6ICcrcG9zdC5hdXRob3IuZnVsbF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6IDVweDsgYm90dG9tOiA1cHg7IGZvbnQtc2l6ZTogMTBweFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC0yIG1iLTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIj57e3Bvc3QudGl0bGV9fTwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGNsYXNzPVwibWEtMCBwYS0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgPSAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwicG9zdC5waG90b3MubGVuZ3RoXCIgY2xhc3M9XCJ1c2VyLXBob3RvLW1vZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIocGhvdG8sIGkpIGluIHBvc3QucGhvdG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwicGhvdG8uZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgeHMtMTJcIiB2LWlmPVwibCA+IDFcIj5cbiAgICAgICAgICAgICAgICA8di1wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA6bGVuZ3RoPVwibFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dG90YWwtdmlzaWJsZT1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBhZ2VcIlxuICAgICAgICAgICAgICAgID48L3YtcGFnaW5hdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXktM1wiPtCe0LHRgNCw0YnQtdC90LjQuSDQv9C+0LrQsCDQvdC10YI8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHYtYnRuIGNsYXNzPVwic2F2ZS1idG5cIlxuICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvdXNlci9wb3N0LzAnKVwiXG4gICAgICAgICAgICAgICBkYXJrPlxuICAgICAgICAgICAgPHYtaWNvbj5tZGktcGx1czwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8di1kaWFsb2dcbiAgICAgICAgICAgICAgICB2LWlmPVwiISFkaWFsb2dQb3N0XCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2hvd1wiXG4gICAgICAgICAgICAgICAgQGNsb3NlPVwiXG4gICAgICAgICAgICAgICAgICAgIHNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gbnVsbFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgOmZ1bGxzY3JlZW49XCIkdnVldGlmeS5icmVha3BvaW50Lm1vYmlsZVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90OmRlZmF1bHQ+XG4gICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGNsYXNzPVwicHgtMCBteC0wIHB0LTAgbXQtMCBjb3ZlclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj57e2RpYWxvZ1Bvc3QudGl0bGV9fTwvdi10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImRpYWxvZ1Bvc3QucGhvdG9zICYmIGRpYWxvZ1Bvc3QucGhvdG9zLmxlbmd0aCA+IDBcIiBjbGFzcz1cInVzZXItcGhvdG8tbW9kdWxlIG15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHBob3RvLCBpKSBpbiBkaWFsb2dQb3N0LnBob3Rvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwicGhvdG8uZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIHYtaHRtbD1cImRpYWxvZ1Bvc3QuZGVzY3JpcHRpb25cIj48L3YtY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJwcmltYXJ5XCIgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPtCX0LDQutGA0YvRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cblxuICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3YtZGlhbG9nPlxuICAgIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJVc2VyUG9zdHNcIixcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGw6IDEsXG4gICAgICAgICAgICAgICAgcG9zdHM6IFtdLFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgZGlhbG9nUG9zdDogbnVsbCxcbiAgICAgICAgICAgICAgICBkZWxldGVfaWQ6IDAsXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRQYWdlKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy91c2VyL3Bvc3QvJywge3BhcmFtczoge3BhZ2U6IHRoaXMucGFnZSwgcGVyX3BhZ2U6IDEwfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdHMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubCA9IHJlc3BvbnNlLmRhdGEubGFzdF9wYWdlXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlbGV0ZV9pZCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5kZWxldGUoJy91c2VyL3Bvc3QvJyArIHRoaXMuZGVsZXRlX2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlX2lkID0gMFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjY2VwdCgpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgcGFnZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVfaWQobnYpIHtcbiAgICAgICAgICAgICAgICBpZiAobnYgPiAwKSB0aGlzLmRlbGV0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQxYTA4ZTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvanVyYTEyMDU5Ni9QaHBzdG9ybVByb2plY3RzL3NrYXN5L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU0MWEwOGUyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU0MWEwOGUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU0MWEwOGUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Vc2VyUG9zdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0MWEwOGUyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU0MWEwOGUyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyUG9zdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY292ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9LFxuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICBfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0XG4gICAgICAgICAgICAgID8gXCLQntCx0YDQsNGJ0LXQvdC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcIlxuICAgICAgICAgICAgICA6IFwi0JLQsNGI0Lgg0L7QsdGA0LDRidC10L3QuNGPXCJcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wb3N0cy5sZW5ndGggPiAwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1yb3cgZmxleC13cmFwXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBvc3RzLCBmdW5jdGlvbihwb3N0LCB5KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiB5LCBhdHRyczogeyB4czEyOiBcIlwiLCBzbTY6IFwiXCIsIG1kNjogXCJcIiwgbGc0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWEtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGVsZXZhdGlvbjogXCIwXCIsIG91dGxpbmVkOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID09PSBwb3N0LnVzZXJfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGNydWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIi0xMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlX2lkID0gcG9zdC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLWRlbGV0ZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwieWVsbG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdXNlci9wb3N0L1wiICsgcG9zdC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLXBlbmNpbFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGNydWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIi0xMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT0gMTAyNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hY2NlcHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZGktY2hlY2stb3V0bGluZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC51c2VyX2xpa2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QudXNlcl9saWtlID09IDAgPyAxIDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Lmxpa2VzICs9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC51c2VyX2xpa2UgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1kaS1oZWFydFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHBvc3QubGlrZXMpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi0J7Qv9GD0LHQu9C40LrQvtCy0LDQvdC+OiBcIiArIHBvc3QuZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQn9C+0LvRjNC30L7QstCw0YLQtdC70Yw6IFwiICsgcG9zdC5hdXRob3IuZnVsbF9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhci10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXQtMiBtYi01XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QgPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MocG9zdC50aXRsZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYS0wIHBhLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdCA9IHBvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5waG90b3MubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ1c2VyLXBob3RvLW1vZHVsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJvdXNlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChwb3N0LnBob3RvcywgZnVuY3Rpb24ocGhvdG8sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInYtY2Fyb3VzZWwtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHBob3RvLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubCA+IDFcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHhzLTEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxlbmd0aDogX3ZtLmwsIFwidG90YWwtdmlzaWJsZVwiOiAzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG15LTNcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcItCe0LHRgNCw0YnQtdC90LjQuSDQv9C+0LrQsCDQvdC10YJcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1idG5cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNhdmUtYnRuXCIsXG4gICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwic3VjY2Vzc1wiLCBmYWI6IFwiXCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIucHVzaChcIi91c2VyL3Bvc3QvMFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktcGx1c1wiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhIV92bS5kaWFsb2dQb3N0XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGZ1bGxzY3JlZW46IF92bS4kdnVldGlmeS5icmVha3BvaW50Lm1vYmlsZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2dQb3N0ID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3csXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHgtMCBteC0wIHB0LTAgbXQtMCBjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZSAhaW1wb3J0YW50XCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBteS0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRpYWxvZ1Bvc3QudGl0bGUpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QucGhvdG9zICYmIF92bS5kaWFsb2dQb3N0LnBob3Rvcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ1c2VyLXBob3RvLW1vZHVsZSBteS0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcm91c2VsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRpYWxvZ1Bvc3QucGhvdG9zLCBmdW5jdGlvbihwaG90bywgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2LWNhcm91c2VsLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHBob3RvLmZpbGUsIGNvbnRhaW46IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNvbnRhaW5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5kaWFsb2dQb3N0LmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBteS0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQl9Cw0LrRgNGL0YLRjFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=