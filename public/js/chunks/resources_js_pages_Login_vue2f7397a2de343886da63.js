(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Login.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Login',
  data: function data(vm) {
    return {
      account: {
        email: '',
        password: ''
      },
      resetDialogShow: false,
      resetResult: false,
      resultMessage: '',
      show: false,
      responseMessage: false
    };
  },
  mounted: function mounted() {
    this.$store.dispatch('auth/toggleLoggingOut', false);
  },
  computed: {
    isFormValid: function isFormValid() {
      return this.account.password && this.account.email;
    }
  },
  methods: {
    validate: function validate() {
      this.$refs.form.validate();
      this.responseMessage = false;
    },
    attemptLogin: function attemptLogin() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var vm;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                vm = _this;
                _context.next = 3;
                return _this.$store.dispatch('auth/login', _this.account).then(function () {
                  return _this.$router.replace('/');
                })["catch"](function (err) {
                  if (err.response.data.message) vm.responseMessage = err.response.data.message;
                  vm.validate();
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    attemptReset: function attemptReset() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var vm;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                vm = _this2;
                vm.resetDialogShow = false;
                _context2.next = 4;
                return _this2.$store.dispatch('auth/reset', _this2.account).then(function (res) {
                  vm.resultMessage = res.data.message;
                  vm.resetResult = true;
                })["catch"](function (err) {
                  var emailErrs;
                  if (err.response.status === 403) vm.resultMessage = err.response.data.message;else if (err.response.status === 422 && (emailErrs = err.response.data.errors) !== undefined && emailErrs.email[0]) vm.resultMessage = emailErrs.email[0];else vm.resultMessage = 'Произошла ошибка, пожалуйста проверьте введенный адрес и потворите попытку.';
                  vm.validate();
                  vm.resetResult = true;
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/Login.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Login.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_3b6adb30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=3b6adb30&scoped=true& */ "./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/pages/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Login_vue_vue_type_template_id_3b6adb30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_3b6adb30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3b6adb30",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&scoped=true& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3b6adb30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3b6adb30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3b6adb30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=3b6adb30&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "fill-height", attrs: { fluid: "" } },
    [
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "8", md: "4" } },
            [
              _c("v-img", {
                attrs: {
                  "max-height": "100",
                  "max-width": "100%",
                  src: "/img/logo.png"
                }
              }),
              _vm._v(" "),
              _c(
                "v-toolbar-title",
                {
                  staticStyle: { "margin-bottom": "60px" },
                  attrs: { align: "center", justify: "center" }
                },
                [_vm._v(_vm._s(_vm.$store.state.appName) + "\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-toolbar-title",
                { attrs: { align: "center", justify: "center" } },
                [_vm._v("Авторизация")]
              ),
              _vm._v(" "),
              _c(
                "v-form",
                {
                  ref: "form",
                  nativeOn: {
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.attemptLogin.apply(null, arguments)
                    }
                  }
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Введите ваш E-mail",
                      name: "email",
                      type: "email"
                    },
                    model: {
                      value: _vm.account.email,
                      callback: function($$v) {
                        _vm.$set(_vm.account, "email", $$v)
                      },
                      expression: "account.email"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-tooltip",
                    {
                      attrs: { bottom: "" },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-text-field",
                                _vm._g(
                                  _vm._b(
                                    {
                                      attrs: {
                                        "append-icon": _vm.show
                                          ? "mdi-eye"
                                          : "mdi-eye-off",
                                        type: _vm.show ? "text" : "password",
                                        name: "password",
                                        label: "Пароль"
                                      },
                                      on: {
                                        "click:append": function($event) {
                                          _vm.show = !_vm.show
                                        }
                                      },
                                      model: {
                                        value: _vm.account.password,
                                        callback: function($$v) {
                                          _vm.$set(_vm.account, "password", $$v)
                                        },
                                        expression: "account.password"
                                      }
                                    },
                                    "v-text-field",
                                    attrs,
                                    false
                                  ),
                                  on
                                )
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          _vm._s(
                            "Не меньше " +
                              _vm.$store.state.passwordLength +
                              " символов"
                          )
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    {
                      staticClass: "d-flex justify-center align-center mb-6",
                      attrs: { flat: "", height: "auto", tile: "" }
                    },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "primary",
                            disabled: !_vm.isFormValid
                          },
                          on: { click: _vm.attemptLogin }
                        },
                        [
                          _vm._v(
                            "\n                        Войти\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    {
                      staticClass: "d-flex justify-center align-center mb-6",
                      attrs: { flat: "", height: "auto", tile: "" }
                    },
                    [
                      _c("v-dialog", {
                        ref: "resetDialog",
                        attrs: {
                          transition: "dialog-top-transition",
                          "max-width": "600",
                          fullscreen: _vm.$vuetify.breakpoint.mobile
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              var attrs = ref.attrs
                              return [
                                _c(
                                  "a",
                                  _vm._g(
                                    _vm._b(
                                      {
                                        on: {
                                          click: function($event) {
                                            _vm.resetDialogShow = true
                                          }
                                        }
                                      },
                                      "a",
                                      attrs,
                                      false
                                    ),
                                    on
                                  ),
                                  [_vm._v("Забыли пароль?")]
                                )
                              ]
                            }
                          },
                          {
                            key: "default",
                            fn: function(dialog) {
                              return [
                                _c(
                                  "v-card",
                                  [
                                    _c(
                                      "v-toolbar",
                                      {
                                        staticClass:
                                          "container py-1 my-0 justify-space-between"
                                      },
                                      [
                                        _c("v-toolbar-title", [
                                          _c(
                                            "span",
                                            { staticClass: "headline" },
                                            [_vm._v("Забыли пароль?")]
                                          )
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
                                                on: {
                                                  click: function($event) {
                                                    dialog.value = false
                                                  }
                                                }
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
                                                    "\n                                                Введите Email, который Вы использовали для входа, Вам будет направлена ссылка для восстановления пароля.\n                                            "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "v-form",
                                                  {
                                                    nativeOn: {
                                                      keyup: function($event) {
                                                        if (
                                                          !$event.type.indexOf(
                                                            "key"
                                                          ) &&
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
                                                        return _vm.attemptReset.apply(
                                                          null,
                                                          arguments
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        label:
                                                          "Введите ваш E-mail",
                                                        name: "email",
                                                        type: "email",
                                                        required: ""
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.account.email,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.account,
                                                            "email",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "account.email"
                                                      }
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
                                                              disabled:
                                                                _vm.account.email.toString() !=
                                                                ""
                                                            },
                                                            on: {
                                                              click:
                                                                _vm.attemptReset
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                        Отправить ссылку\n                                                    "
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
                            }
                          }
                        ]),
                        model: {
                          value: _vm.resetDialogShow,
                          callback: function($$v) {
                            _vm.resetDialogShow = $$v
                          },
                          expression: "resetDialogShow"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-dialog", {
                        ref: "resetResultDialog",
                        attrs: {
                          transition: "dialog-top-transition",
                          "max-width": "600",
                          fullscreen: _vm.$vuetify.breakpoint.mobile
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(resultDialog) {
                              return [
                                _c(
                                  "v-card",
                                  [
                                    _c(
                                      "v-toolbar",
                                      [
                                        _c(
                                          "v-row",
                                          {
                                            staticStyle: {
                                              "flex-wrap": "nowrap"
                                            },
                                            attrs: { "no-gutters": "" }
                                          },
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                staticClass:
                                                  "flex-grow-1 flex-shrink-0",
                                                staticStyle: {
                                                  "min-width": "100px",
                                                  "max-width": "100%"
                                                },
                                                attrs: { cols: "1" }
                                              },
                                              [
                                                _c(
                                                  "v-list-item",
                                                  {
                                                    staticClass:
                                                      " justify-center",
                                                    attrs: {
                                                      outlined: "",
                                                      tile: ""
                                                    }
                                                  },
                                                  [
                                                    _c("v-card-title", [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "headline"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Проверьте почту"
                                                          )
                                                        ]
                                                      )
                                                    ])
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
                                                    "\n                                                " +
                                                      _vm._s(
                                                        _vm.resultMessage
                                                      ) +
                                                      "\n                                            "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("v-divider"),
                                                _vm._v(" "),
                                                _c(
                                                  "v-card-actions",
                                                  {
                                                    attrs: { justify: "center" }
                                                  },
                                                  [
                                                    _c("v-spacer"),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          color: "dark"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            _vm.resetResult = false
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("Закрыть")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("v-spacer")
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
                            }
                          }
                        ]),
                        model: {
                          value: _vm.resetResult,
                          callback: function($$v) {
                            _vm.resetResult = $$v
                          },
                          expression: "resetResult"
                        }
                      })
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Mb2dpbi52dWU/OTgxNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTG9naW4udnVlP2RmZjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvTEE7QUFDQSxlQURBO0FBRUE7QUFBQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBLE9BREE7QUFLQSw0QkFMQTtBQU1BLHdCQU5BO0FBT0EsdUJBUEE7QUFRQSxpQkFSQTtBQVNBO0FBVEE7QUFBQSxHQUZBO0FBY0EsU0FkQSxxQkFjQTtBQUNBO0FBQ0EsR0FoQkE7QUFpQkE7QUFFQTtBQUNBO0FBQ0E7QUFKQSxHQWpCQTtBQXVCQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQTtBQUtBLGdCQUxBLDBCQUtBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Esa0JBREEsR0FDQSxLQURBO0FBQUE7QUFBQSx1QkFFQSxtREFDQSxJQURBLENBQ0E7QUFBQTtBQUFBLGlCQURBLFdBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBTEEsQ0FGQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBLEtBYkE7QUFjQSxnQkFkQSwwQkFjQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19wYWdlc19Mb2dpbl92dWUyZjczOTdhMmRlMzQzODg2ZGE2My5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250YWluZXIgY2xhc3M9XCJmaWxsLWhlaWdodFwiIGZsdWlkPlxuICAgICAgICA8di1yb3cgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8di1jb2wgY29scz1cIjEyXCIgc209XCI4XCIgbWQ9XCI0XCI+XG4gICAgICAgICAgICAgICAgPHYtaW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICAgPjwvdi1pbWc+XG4gICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206NjBweFwiPnt7JHN0b3JlLnN0YXRlLmFwcE5hbWV9fVxuICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+0JDQstGC0L7RgNC40LfQsNGG0LjRjzwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICAgICAgICAgIDx2LWZvcm0gQGtleXVwLm5hdGl2ZS5lbnRlcj1cImF0dGVtcHRMb2dpblwiIHJlZj1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhY2NvdW50LmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCS0LLQtdC00LjRgtC1INCy0LDRiCBFLW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbHRpcCBib3R0b20+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cInsgb24sIGF0dHJzIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYWNjb3VudC5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YXBwZW5kLWljb249XCJzaG93ID8gJ21kaS1leWUnIDogJ21kaS1leWUtb2ZmJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dHlwZT1cInNob3cgPyAndGV4dCcgOiAncGFzc3dvcmQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCf0LDRgNC+0LvRjFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJhdHRyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uPVwib25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrOmFwcGVuZD1cInNob3cgPSAhc2hvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7J9Cd0LUg0LzQtdC90YzRiNC1ICcgKyAkc3RvcmUuc3RhdGUucGFzc3dvcmRMZW5ndGggKyAnINGB0LjQvNCy0L7Qu9C+0LInfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdi10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIG1iLTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJhdHRlbXB0TG9naW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpc0Zvcm1WYWxpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0L7QudGC0LhcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIG1iLTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWRpYWxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicmVzZXREaWFsb2dTaG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj1cImRpYWxvZy10b3AtdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aD1cIjYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJyZXNldERpYWxvZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XCJ7IG9uLCBhdHRycyB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiYXR0cnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb249XCJvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVzZXREaWFsb2dTaG93ID0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID7Ql9Cw0LHRi9C70Lgg0L/QsNGA0L7Qu9GMPzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6ZGVmYXVsdD1cImRpYWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyICBjbGFzcz1cImNvbnRhaW5lciBweS0xIG15LTAganVzdGlmeS1zcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkbGluZVwiPtCX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw/PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT48di1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXgtZ3Jvdy0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRpYWxvZy52YWx1ZSA9IGZhbHNlXCI+WDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jb2w+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSBFbWFpbCwg0LrQvtGC0L7RgNGL0Lkg0JLRiyDQuNGB0L/QvtC70YzQt9C+0LLQsNC70Lgg0LTQu9GPINCy0YXQvtC00LAsINCS0LDQvCDQsdGD0LTQtdGCINC90LDQv9GA0LDQstC70LXQvdCwINGB0YHRi9C70LrQsCDQtNC70Y8g0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjyDQv9Cw0YDQvtC70Y8uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZm9ybSBAa2V5dXAubmF0aXZlLmVudGVyPVwiYXR0ZW1wdFJlc2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImFjY291bnQuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQktCy0LXQtNC40YLQtSDQstCw0YggRS1tYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImRhcmtcIiBAY2xpY2s9XCJhdHRlbXB0UmVzZXRcIiA6ZGlzYWJsZWQ9XCJhY2NvdW50LmVtYWlsLnRvU3RyaW5nKCkgIT0gJydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0YLQv9GA0LDQstC40YLRjCDRgdGB0YvQu9C60YNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWRpYWxvZz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtZGlhbG9nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249XCJkaWFsb2ctdG9wLXRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg9XCI2MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJyZXNldFJlc3VsdERpYWxvZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicmVzZXRSZXN1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpkZWZhdWx0PVwicmVzdWx0RGlhbG9nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1yb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vLWd1dHRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZmxleC13cmFwOiBub3dyYXA7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1pbi13aWR0aDogMTAwcHg7IG1heC13aWR0aDogMTAwJTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleC1ncm93LTEgZmxleC1zaHJpbmstMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIiBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+0J/RgNC+0LLQtdGA0YzRgtC1INC/0L7Rh9GC0YM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1yb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc3VsdE1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucyAganVzdGlmeT1cImNlbnRlclwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZXNldFJlc3VsdCA9IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+0JfQsNC60YDRi9GC0Yw8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1kaWFsb2c+XG5cblxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICA8L3YtZm9ybT5cbiAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgPC92LWNvbnRhaW5lcj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdMb2dpbicsXG4gICAgICAgIGRhdGE6ICh2bSkgPT4gKHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNldERpYWxvZ1Nob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc2V0UmVzdWx0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXN1bHRNZXNzYWdlOiAnJyxcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXNwb25zZU1lc3NhZ2U6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvdG9nZ2xlTG9nZ2luZ091dCcsIGZhbHNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICAgICAgaXNGb3JtVmFsaWQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50LnBhc3N3b3JkICYmIHRoaXMuYWNjb3VudC5lbWFpbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHZhbGlkYXRlICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZvcm0udmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlTWVzc2FnZSAgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc3luYyBhdHRlbXB0TG9naW4oKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZtID0gdGhpcztcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9sb2dpbicsIHRoaXMuYWNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy4kcm91dGVyLnJlcGxhY2UoJy8nKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSkgdm0ucmVzcG9uc2VNZXNzYWdlID0gZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnZhbGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzeW5jIGF0dGVtcHRSZXNldCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZtLnJlc2V0RGlhbG9nU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3Jlc2V0JywgdGhpcy5hY2NvdW50KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5yZXN1bHRNZXNzYWdlID0gcmVzLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnJlc2V0UmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbWFpbEVycnM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlcnIucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0ucmVzdWx0TWVzc2FnZSA9IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnIucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIgICYmIChlbWFpbEVycnMgPSBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMpICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBlbWFpbEVycnMuZW1haWxbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0ucmVzdWx0TWVzc2FnZSA9IGVtYWlsRXJycy5lbWFpbFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5yZXN1bHRNZXNzYWdlID0gJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAsINC/0L7QttCw0LvRg9C50YHRgtCwINC/0YDQvtCy0LXRgNGM0YLQtSDQstCy0LXQtNC10L3QvdGL0Lkg0LDQtNGA0LXRgSDQuCDQv9C+0YLQstC+0YDQuNGC0LUg0L/QvtC/0YvRgtC60YMuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnZhbGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5yZXNldFJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2I2YWRiMzAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNiNmFkYjMwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvanVyYTEyMDU5Ni9QaHBzdG9ybVByb2plY3RzL3NrYXN5L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNiNmFkYjMwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNiNmFkYjMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNiNmFkYjMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2I2YWRiMzAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2I2YWRiMzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Mb2dpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJmaWxsLWhlaWdodFwiLCBhdHRyczogeyBmbHVpZDogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sczogXCIxMlwiLCBzbTogXCI4XCIsIG1kOiBcIjRcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1pbWdcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcIm1heC1oZWlnaHRcIjogXCIxMDBcIixcbiAgICAgICAgICAgICAgICAgIFwibWF4LXdpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWcvbG9nby5wbmdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tYm90dG9tXCI6IFwiNjBweFwiIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHN0b3JlLnN0YXRlLmFwcE5hbWUpICsgXCJcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcItCQ0LLRgtC+0YDQuNC30LDRhtC40Y9cIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mb3JtXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmF0dGVtcHRMb2dpbi5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQktCy0LXQtNC40YLQtSDQstCw0YggRS1tYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWNjb3VudC5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uYWNjb3VudCwgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjY291bnQuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGJvdHRvbTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb24gPSByZWYub25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cnMgPSByZWYuYXR0cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi10ZXh0LWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBlbmQtaWNvblwiOiBfdm0uc2hvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1kaS1leWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm1kaS1leWUtb2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogX3ZtLnNob3cgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0J/QsNGA0L7Qu9GMXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrOmFwcGVuZFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gIV92bS5zaG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWNjb3VudC5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uYWNjb3VudCwgXCJwYXNzd29yZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjY291bnQucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRleHQtZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQndC1INC80LXQvdGM0YjQtSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHN0b3JlLnN0YXRlLnBhc3N3b3JkTGVuZ3RoICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiINGB0LjQvNCy0L7Qu9C+0LJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXIgbWItNlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGhlaWdodDogXCJhdXRvXCIsIHRpbGU6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmlzRm9ybVZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYXR0ZW1wdExvZ2luIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgINCS0L7QudGC0LhcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIG1iLTZcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBoZWlnaHQ6IFwiYXV0b1wiLCB0aWxlOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1kaWFsb2dcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInJlc2V0RGlhbG9nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImRpYWxvZy10b3AtdHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBfdm0uJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb24gPSByZWYub25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRycyA9IHJlZi5hdHRyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9iKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlc2V0RGlhbG9nU2hvdyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw/XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oZGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRhaW5lciBweS0xIG15LTAganVzdGlmeS1zcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQl9Cw0LHRi9C70Lgg0L/QsNGA0L7Qu9GMP1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleC1ncm93LTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cudmFsdWUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiWFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1IEVtYWlsLCDQutC+0YLQvtGA0YvQuSDQktGLINC40YHQv9C+0LvRjNC30L7QstCw0LvQuCDQtNC70Y8g0LLRhdC+0LTQsCwg0JLQsNC8INCx0YPQtNC10YIg0L3QsNC/0YDQsNCy0LvQtdC90LAg0YHRgdGL0LvQutCwINC00LvRjyDQstC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNGPINC/0LDRgNC+0LvRjy5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmF0dGVtcHRSZXNldC5hcHBseShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQktCy0LXQtNC40YLQtSDQstCw0YggRS1tYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hY2NvdW50LmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NvdW50LmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGU6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImRhcmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFjY291bnQuZW1haWwudG9TdHJpbmcoKSAhPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYXR0ZW1wdFJlc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGC0L/RgNCw0LLQuNGC0Ywg0YHRgdGL0LvQutGDXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVzZXREaWFsb2dTaG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlc2V0RGlhbG9nU2hvdyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJlc2V0RGlhbG9nU2hvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtZGlhbG9nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJyZXNldFJlc3VsdERpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJkaWFsb2ctdG9wLXRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCI2MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogX3ZtLiR2dWV0aWZ5LmJyZWFrcG9pbnQubW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZXN1bHREaWFsb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsZXgtd3JhcFwiOiBcIm5vd3JhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tZ3V0dGVyc1wiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGV4LWdyb3ctMSBmbGV4LXNocmluay0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbi13aWR0aFwiOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4LXdpZHRoXCI6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sczogXCIxXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIganVzdGlmeS1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi0J/RgNC+0LLQtdGA0YzRgtC1INC/0L7Rh9GC0YNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlc3VsdE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBqdXN0aWZ5OiBcImNlbnRlclwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJkYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXNldFJlc3VsdCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCX0LDQutGA0YvRgtGMXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJlc2V0UmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlc2V0UmVzdWx0ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVzZXRSZXN1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=