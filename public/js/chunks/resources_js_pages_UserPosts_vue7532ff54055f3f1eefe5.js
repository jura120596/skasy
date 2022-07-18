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
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
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
                                                post.user_like === 1 ? 1 : -1
                                              _vm.accept(1)
                                            }
                                          }
                                        },
                                        [_c("v-icon", [_vm._v("mdi-heart")])],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWU/OWQ0YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RzLnZ1ZT83Mzg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEtBO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBQ0EsVUFEQTtBQUVBLGVBRkE7QUFHQSxhQUhBO0FBSUEsc0JBSkE7QUFLQSxrQkFMQTtBQU1BO0FBTkE7QUFRQSxHQVhBO0FBWUEsU0FaQSxxQkFZQTtBQUNBO0FBQ0EsR0FkQTtBQWVBO0FBQ0EsV0FEQSxxQkFDQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLFdBR0E7QUFDQTtBQUNBLE9BTEE7QUFNQSxLQVJBO0FBQUEsaUNBU0E7QUFBQTs7QUFDQSw4QkFDQTtBQUNBOztBQUNBO0FBQ0EsT0FIQSxXQUdBO0FBQ0E7QUFDQSxPQUxBO0FBTUEsS0FqQkE7QUFrQkEsVUFsQkEsb0JBa0JBLENBRUE7QUFwQkEsR0FmQTtBQXFDQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxhQUpBLHFCQUlBLEVBSkEsRUFJQTtBQUNBO0FBQ0E7QUFOQTtBQXJDQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxS3dGO0FBQzNCO0FB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bUJBQW1CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9jaHVua3MvcmVzb3VyY2VzX2pzX3BhZ2VzX1VzZXJQb3N0c192dWU3NTMyZmY1NDA1NWYzZjFlZWZlNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250YWluZXIgY2xhc3M9XCJjb3ZlclwiPlxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0ID8gJ9Ce0LHRgNCw0YnQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuScgOiAn0JLQsNGI0Lgg0L7QsdGA0LDRidC10L3QuNGPJ1wiPlxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPGRpdiB2LWlmPVwicG9zdHMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPHYtbGF5b3V0IGNsYXNzPVwiZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcFwiPlxuXG4gICAgICAgICAgICAgICAgPHYtZmxleFxuICAgICAgICAgICAgICAgICAgICAgICAgeHMxMlxuICAgICAgICAgICAgICAgICAgICAgICAgc202XG4gICAgICAgICAgICAgICAgICAgICAgICBtZDZcbiAgICAgICAgICAgICAgICAgICAgICAgIGxnNFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIocG9zdCwgeSkgaW4gcG9zdHNcIiA6a2V5PVwieVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYS0xXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5pZCA9PT0gcG9zdC51c2VyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXggY3J1ZFwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OiA1cHg7IHRvcDogLTEwcHg7IGZvbnQtc2l6ZTogMTBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxldGVfaWQgPSBwb3N0LmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwieWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL3VzZXIvcG9zdC8nK3Bvc3QuaWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLXBlbmNpbDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGNydWRcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyByaWdodDogNXB4OyB0b3A6IC0xMHB4OyBmb250LXNpemU6IDEwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gdi1pZj1cIiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PSAxMDI0XCIgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImFjY2VwdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWNoZWNrLW91dGxpbmU8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnVzZXJfbGlrZSA9IHBvc3QudXNlcl9saWtlID09IDAgPyAxOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5saWtlcyArPSBwb3N0LnVzZXJfbGlrZSA9PT0gMSA/IDEgOiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdCgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWhlYXJ0PC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Bvc3QubGlrZXN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LXRleHQ9XCIn0J7Qv9GD0LHQu9C40LrQvtCy0LDQvdC+OiAnK3Bvc3QuZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OiA1cHg7IGJvdHRvbTogMjBweDsgZm9udC1zaXplOiAxMHB4XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LXRleHQ9XCIn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMOiAnK3Bvc3QuYXV0aG9yLmZ1bGxfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OiA1cHg7IGJvdHRvbTogNXB4OyBmb250LXNpemU6IDEwcHhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtMiBtYi01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gcG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyA9ICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI+e3twb3N0LnRpdGxlfX08L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cIm1hLTAgcGEtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gcG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInBvc3QucGhvdG9zLmxlbmd0aFwiIGNsYXNzPVwidXNlci1waG90by1tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHBob3RvLCBpKSBpbiBwb3N0LnBob3Rvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cInBob3RvLmZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHhzLTEyXCIgdi1pZj1cImwgPiAxXCI+XG4gICAgICAgICAgICAgICAgPHYtcGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cImxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRvdGFsLXZpc2libGU9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYWdlXCJcbiAgICAgICAgICAgICAgICA+PC92LXBhZ2luYXRpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj7QntCx0YDQsNGJ0LXQvdC40Lkg0L/QvtC60LAg0L3QtdGCPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cInNhdmUtYnRuXCJcbiAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL3VzZXIvcG9zdC8wJylcIlxuICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgPHYtZGlhbG9nXG4gICAgICAgICAgICAgICAgdi1pZj1cIiEhZGlhbG9nUG9zdFwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInNob3dcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cIlxuICAgICAgICAgICAgICAgICAgICBzaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IG51bGxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdDpkZWZhdWx0PlxuICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cInB4LTAgbXgtMCBwdC0wIG10LTAgY292ZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS0zXCI+e3tkaWFsb2dQb3N0LnRpdGxlfX08L3YtdG9vbGJhci10aXRsZT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJkaWFsb2dQb3N0LnBob3RvcyAmJiBkaWFsb2dQb3N0LnBob3Rvcy5sZW5ndGggPiAwXCIgY2xhc3M9XCJ1c2VyLXBob3RvLW1vZHVsZSBteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihwaG90bywgaSkgaW4gZGlhbG9nUG9zdC5waG90b3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cInBob3RvLmZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciB2LWh0bWw9XCJkaWFsb2dQb3N0LmRlc2NyaXB0aW9uXCI+PC92LWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC1jZW50ZXIgbXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIj7Ql9Cw0LrRgNGL0YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG5cbiAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC92LWRpYWxvZz5cbiAgICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiVXNlclBvc3RzXCIsXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsOiAxLFxuICAgICAgICAgICAgICAgIHBvc3RzOiBbXSxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgZGVsZXRlX2lkOiAwLFxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0UGFnZSgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvdXNlci9wb3N0LycsIHtwYXJhbXM6IHtwYWdlOiB0aGlzLnBhZ2UsIHBlcl9wYWdlOiAxMH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmwgPSByZXNwb25zZS5kYXRhLmxhc3RfcGFnZVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWxldGVfaWQgPiAwKVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZGVsZXRlKCcvdXNlci9wb3N0LycgKyB0aGlzLmRlbGV0ZV9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZV9pZCA9IDBcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY2NlcHQoKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlX2lkKG52KSB7XG4gICAgICAgICAgICAgICAgaWYgKG52ID4gMCkgdGhpcy5kZWxldGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VyUG9zdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0MWEwOGUyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2p1cmExMjA1OTYvUGhwc3Rvcm1Qcm9qZWN0cy9za2FzeS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NDFhMDhlMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NDFhMDhlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NDFhMDhlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDFhMDhlMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NDFhMDhlMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvdmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIsIGp1c3RpZnk6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNFxuICAgICAgICAgICAgICA/IFwi0J7QsdGA0LDRidC10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XCJcbiAgICAgICAgICAgICAgOiBcItCS0LDRiNC4INC+0LHRgNCw0YnQtdC90LjRj1wiXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucG9zdHMubGVuZ3RoID4gMFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcFwiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wb3N0cywgZnVuY3Rpb24ocG9zdCwgeSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogeSwgYXR0cnM6IHsgeHMxMjogXCJcIiwgc202OiBcIlwiLCBtZDY6IFwiXCIsIGxnNDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1hLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBlbGV2YXRpb246IFwiMFwiLCBvdXRsaW5lZDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5pZCA9PT0gcG9zdC51c2VyX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBjcnVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCItMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZV9pZCA9IHBvc3QuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcIm1kaS1kZWxldGVcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInllbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3VzZXIvcG9zdC9cIiArIHBvc3QuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcIm1kaS1wZW5jaWxcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBjcnVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCItMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09IDEwMjRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYWNjZXB0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWRpLWNoZWNrLW91dGxpbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC51c2VyX2xpa2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC51c2VyX2xpa2UgPT0gMCA/IDEgOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5saWtlcyArPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC51c2VyX2xpa2UgPT09IDEgPyAxIDogLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWNjZXB0KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLWhlYXJ0XCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwb3N0Lmxpa2VzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi0J7Qv9GD0LHQu9C40LrQvtCy0LDQvdC+OiBcIiArIHBvc3QuZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQn9C+0LvRjNC30L7QstCw0YLQtdC70Yw6IFwiICsgcG9zdC5hdXRob3IuZnVsbF9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhci10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXQtMiBtYi01XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QgPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MocG9zdC50aXRsZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYS0wIHBhLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdCA9IHBvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5waG90b3MubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ1c2VyLXBob3RvLW1vZHVsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJvdXNlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChwb3N0LnBob3RvcywgZnVuY3Rpb24ocGhvdG8sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInYtY2Fyb3VzZWwtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHBob3RvLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubCA+IDFcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHhzLTEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxlbmd0aDogX3ZtLmwsIFwidG90YWwtdmlzaWJsZVwiOiAzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG15LTNcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcItCe0LHRgNCw0YnQtdC90LjQuSDQv9C+0LrQsCDQvdC10YJcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1idG5cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNhdmUtYnRuXCIsXG4gICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwic3VjY2Vzc1wiLCBmYWI6IFwiXCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIucHVzaChcIi91c2VyL3Bvc3QvMFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktcGx1c1wiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhIV92bS5kaWFsb2dQb3N0XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGZ1bGxzY3JlZW46IF92bS4kdnVldGlmeS5icmVha3BvaW50Lm1vYmlsZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2dQb3N0ID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3csXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHgtMCBteC0wIHB0LTAgbXQtMCBjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZSAhaW1wb3J0YW50XCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBteS0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRpYWxvZ1Bvc3QudGl0bGUpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QucGhvdG9zICYmIF92bS5kaWFsb2dQb3N0LnBob3Rvcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ1c2VyLXBob3RvLW1vZHVsZSBteS0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcm91c2VsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRpYWxvZ1Bvc3QucGhvdG9zLCBmdW5jdGlvbihwaG90bywgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2LWNhcm91c2VsLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHBob3RvLmZpbGUsIGNvbnRhaW46IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNvbnRhaW5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5kaWFsb2dQb3N0LmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBteS0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQl9Cw0LrRgNGL0YLRjFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=