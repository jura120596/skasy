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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UserPosts",
  data: function data(vm) {
    return {
      l: 1,
      posts: [],
      page: 1,
      dialogPost: null,
      delete_id: 0,
      show: false,
      commentDialogShow: false,
      comment: '',
      commentError: ''
    };
  },
  mounted: function mounted() {
    this.getPage();
  },
  methods: {
    getPage: function getPage() {
      var _this = this;

      console.log(this.$route);
      window.axios.get('/user/post/', {
        params: {
          page: this.page,
          per_page: 10,
          mode: this.$route.query.mode
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
    accept: function accept(id) {
      window.axios.post('/user/post/' + post.id + '/accept').then(function (response) {})["catch"](function (e) {
        console.log(e);
      });
    },
    like: function like(post) {
      window.axios.post('/user/post/' + post.id + (post.user_like ? '/like' : '/dislike')).then(function (response) {})["catch"](function (e) {
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
            _vm.$route.query.mode !== "me"
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
                                      _vm.like(post)
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
                                    "\n                            " +
                                      _vm._s(post.likes) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm.$store.state.auth.user.id === post.user_id
                                ? _c(
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
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.$store.state.auth.user.id === post.user_id
                                ? _c(
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
                                : _vm._e(),
                              _vm._v(" "),
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
                                      on: {
                                        click: function($event) {
                                          return _vm.accept(post)
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-check-outline")
                                      ])
                                    ],
                                    1
                                  )
                                : _vm._e()
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
                                    "Пользователь: " +
                                      (post.user_id ==
                                      _vm.$store.state.auth.user.id
                                        ? "Вы"
                                        : post.author.full_name)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWU/OWQ0YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RzLnZ1ZT83Mzg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdLQTtBQUNBLG1CQURBO0FBRUE7QUFDQTtBQUNBLFVBREE7QUFFQSxlQUZBO0FBR0EsYUFIQTtBQUlBLHNCQUpBO0FBS0Esa0JBTEE7QUFNQSxpQkFOQTtBQU9BLDhCQVBBO0FBUUEsaUJBUkE7QUFTQTtBQVRBO0FBV0EsR0FkQTtBQWVBLFNBZkEscUJBZUE7QUFDQTtBQUNBLEdBakJBO0FBa0JBO0FBQ0EsV0FEQSxxQkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsT0FIQSxXQUdBO0FBQ0E7QUFDQSxPQUxBO0FBTUEsS0FUQTtBQUFBLGlDQVVBO0FBQUE7O0FBQ0EsOEJBQ0E7QUFDQTs7QUFDQTtBQUNBLE9BSEEsV0FHQTtBQUNBO0FBQ0EsT0FMQTtBQU1BLEtBbEJBO0FBbUJBLFVBbkJBLGtCQW1CQSxFQW5CQSxFQW1CQTtBQUNBLHVGQUNBLENBREEsV0FDQTtBQUNBO0FBQ0EsT0FIQTtBQUlBLEtBeEJBO0FBeUJBLFFBekJBLGdCQXlCQSxJQXpCQSxFQXlCQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0NBQWtDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19wYWdlc19Vc2VyUG9zdHNfdnVlNzcxM2FiNTA5NmM1MWQzNzI4MDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVwiY292ZXJcIj5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cIiRyb3V0ZS5xdWVyeS5tb2RlICE9PSAnbWUnID8gJ9Ce0LHRgNCw0YnQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuScgOiAn0JLQsNGI0Lgg0L7QsdGA0LDRidC10L3QuNGPJ1wiPlxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPGRpdiB2LWlmPVwicG9zdHMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPHYtbGF5b3V0IGNsYXNzPVwiZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcFwiPlxuXG4gICAgICAgICAgICAgICAgPHYtZmxleFxuICAgICAgICAgICAgICAgICAgICAgICAgeHMxMlxuICAgICAgICAgICAgICAgICAgICAgICAgc202XG4gICAgICAgICAgICAgICAgICAgICAgICBtZDZcbiAgICAgICAgICAgICAgICAgICAgICAgIGxnNFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIocG9zdCwgeSkgaW4gcG9zdHNcIiA6a2V5PVwieVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYS0xXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBjcnVkXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiAtMTBweDsgZm9udC1zaXplOiAxMHB4XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC51c2VyX2xpa2UgPSBwb3N0LnVzZXJfbGlrZSA9PSAwID8gMTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QubGlrZXMgKz0gcG9zdC51c2VyX2xpa2UgPT09IDEgPyAxIDogLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlKHBvc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWhlYXJ0PC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twb3N0Lmxpa2VzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5pZCA9PT0gcG9zdC51c2VyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVsZXRlX2lkID0gcG9zdC5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWRlbGV0ZTwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID09PSBwb3N0LnVzZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInllbGxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLnB1c2goJy91c2VyL3Bvc3QvJytwb3N0LmlkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1wZW5jaWw8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09IDEwMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiYWNjZXB0KHBvc3QpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktY2hlY2stb3V0bGluZTwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtdGV4dD1cIifQntC/0YPQsdC70LjQutC+0LLQsNC90L46ICcrcG9zdC5kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6IDVweDsgYm90dG9tOiAyMHB4OyBmb250LXNpemU6IDEwcHhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtdGV4dD1cIifQn9C+0LvRjNC30L7QstCw0YLQtdC70Yw6ICcrKHBvc3QudXNlcl9pZCA9PSAkc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID8gJ9CS0YsnIDogcG9zdC5hdXRob3IuZnVsbF9uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OiA1cHg7IGJvdHRvbTogNXB4OyBmb250LXNpemU6IDEwcHhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtMiBtYi01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gcG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyA9ICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI+e3twb3N0LnRpdGxlfX08L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cIm1hLTAgcGEtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gcG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInBvc3QucGhvdG9zLmxlbmd0aFwiIGNsYXNzPVwidXNlci1waG90by1tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHBob3RvLCBpKSBpbiBwb3N0LnBob3Rvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cInBob3RvLmZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHhzLTEyXCIgdi1pZj1cImwgPiAxXCI+XG4gICAgICAgICAgICAgICAgPHYtcGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cImxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRvdGFsLXZpc2libGU9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYWdlXCJcbiAgICAgICAgICAgICAgICA+PC92LXBhZ2luYXRpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj7QntCx0YDQsNGJ0LXQvdC40Lkg0L/QvtC60LAg0L3QtdGCPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cInNhdmUtYnRuXCJcbiAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL3VzZXIvcG9zdC8wJylcIlxuICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgPHYtZGlhbG9nXG4gICAgICAgICAgICAgICAgdi1pZj1cIiEhZGlhbG9nUG9zdFwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInNob3dcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cIlxuICAgICAgICAgICAgICAgICAgICBzaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IG51bGxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdDpkZWZhdWx0PlxuICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cInB4LTAgbXgtMCBwdC0wIG10LTAgY292ZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS0zXCI+e3tkaWFsb2dQb3N0LnRpdGxlfX08L3YtdG9vbGJhci10aXRsZT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJkaWFsb2dQb3N0LnBob3RvcyAmJiBkaWFsb2dQb3N0LnBob3Rvcy5sZW5ndGggPiAwXCIgY2xhc3M9XCJ1c2VyLXBob3RvLW1vZHVsZSBteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihwaG90bywgaSkgaW4gZGlhbG9nUG9zdC5waG90b3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cInBob3RvLmZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciB2LWh0bWw9XCJkaWFsb2dQb3N0LmRlc2NyaXB0aW9uXCI+PC92LWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC1jZW50ZXIgbXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIj7Ql9Cw0LrRgNGL0YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG5cbiAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC92LWRpYWxvZz5cbiAgICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiVXNlclBvc3RzXCIsXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsOiAxLFxuICAgICAgICAgICAgICAgIHBvc3RzOiBbXSxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgZGVsZXRlX2lkOiAwLFxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbW1lbnREaWFsb2dTaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb21tZW50OiAnJyxcbiAgICAgICAgICAgICAgICBjb21tZW50RXJyb3I6ICcnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldFBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4kcm91dGUpXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL3VzZXIvcG9zdC8nLCB7cGFyYW1zOiB7cGFnZTogdGhpcy5wYWdlLCBwZXJfcGFnZTogMTAsIG1vZGU6IHRoaXMuJHJvdXRlLnF1ZXJ5Lm1vZGV9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0cyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sID0gcmVzcG9uc2UuZGF0YS5sYXN0X3BhZ2VcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsZXRlX2lkID4gMClcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmRlbGV0ZSgnL3VzZXIvcG9zdC8nICsgdGhpcy5kZWxldGVfaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVfaWQgPSAwXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWNjZXB0KGlkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy91c2VyL3Bvc3QvJyArIHBvc3QuaWQrJy9hY2NlcHQnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpa2UocG9zdCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvdXNlci9wb3N0LycgKyBwb3N0LmlkKyhwb3N0LnVzZXJfbGlrZSA/ICcvbGlrZScgOiAnL2Rpc2xpa2UnKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlX2lkKG52KSB7XG4gICAgICAgICAgICAgICAgaWYgKG52ID4gMCkgdGhpcy5kZWxldGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VyUG9zdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0MWEwOGUyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2p1cmExMjA1OTYvUGhwc3Rvcm1Qcm9qZWN0cy9za2FzeS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NDFhMDhlMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NDFhMDhlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NDFhMDhlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDFhMDhlMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NDFhMDhlMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvdmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIsIGp1c3RpZnk6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgX3ZtLiRyb3V0ZS5xdWVyeS5tb2RlICE9PSBcIm1lXCJcbiAgICAgICAgICAgICAgPyBcItCe0LHRgNCw0YnQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuVwiXG4gICAgICAgICAgICAgIDogXCLQktCw0YjQuCDQvtCx0YDQsNGJ0LXQvdC40Y9cIlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnBvc3RzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucG9zdHMsIGZ1bmN0aW9uKHBvc3QsIHkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHksIGF0dHJzOiB7IHhzMTI6IFwiXCIsIHNtNjogXCJcIiwgbWQ2OiBcIlwiLCBsZzQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYS0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZWxldmF0aW9uOiBcIjBcIiwgb3V0bGluZWQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXggY3J1ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCItMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnVzZXJfbGlrZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC51c2VyX2xpa2UgPT0gMCA/IDEgOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QubGlrZXMgKz1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnVzZXJfbGlrZSA9PT0gMSA/IDEgOiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGlrZShwb3N0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktaGVhcnRcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocG9zdC5saWtlcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID09PSBwb3N0LnVzZXJfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZV9pZCA9IHBvc3QuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcIm1kaS1kZWxldGVcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID09PSBwb3N0LnVzZXJfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi91c2VyL3Bvc3QvXCIgKyBwb3N0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktcGVuY2lsXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09IDEwMjRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWNjZXB0KHBvc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWRpLWNoZWNrLW91dGxpbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQntC/0YPQsdC70LjQutC+0LLQsNC90L46IFwiICsgcG9zdC5kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcItCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zdC51c2VyX2lkID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCS0YtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcG9zdC5hdXRob3IuZnVsbF9uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG10LTIgbWItNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2dQb3N0ID0gcG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHBvc3QudGl0bGUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWEtMCBwYS0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QgPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QucGhvdG9zLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidXNlci1waG90by1tb2R1bGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2Fyb3VzZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wocG9zdC5waG90b3MsIGZ1bmN0aW9uKHBob3RvLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2LWNhcm91c2VsLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBwaG90by5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW46IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmwgPiAxXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciB4cy0xMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtcGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsZW5ndGg6IF92bS5sLCBcInRvdGFsLXZpc2libGVcIjogMyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2UgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBteS0zXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCLQntCx0YDQsNGJ0LXQvdC40Lkg0L/QvtC60LAg0L3QtdGCXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlLWJ0blwiLFxuICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcInN1Y2Nlc3NcIiwgZmFiOiBcIlwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLnB1c2goXCIvdXNlci9wb3N0LzBcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLXBsdXNcIildKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgISFfdm0uZGlhbG9nUG9zdFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBmdWxsc2NyZWVuOiBfdm0uJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdCA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInB4LTAgbXgtMCBwdC0wIG10LTAgY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwid2hpdGUgIWltcG9ydGFudFwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXktM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kaWFsb2dQb3N0LnRpdGxlKSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2dQb3N0LnBob3RvcyAmJiBfdm0uZGlhbG9nUG9zdC5waG90b3MubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidXNlci1waG90by1tb2R1bGUgbXktMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJvdXNlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kaWFsb2dQb3N0LnBob3RvcywgZnVuY3Rpb24ocGhvdG8sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidi1jYXJvdXNlbC1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBwaG90by5maWxlLCBjb250YWluOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1jb250YWluZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0uZGlhbG9nUG9zdC5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhci10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXktM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0JfQsNC60YDRi9GC0YxcXG4gICAgICAgICAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9