(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Registration",
  data: function data(vm) {
    return {
      user: {},
      messages: {
        email: '',
        name: '',
        second_name: '',
        last_name: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  beforeMount: function beforeMount() {
    // this.$store.dispatch('auth/attempt').then(() => {
    this.user = _objectSpread(_objectSpread({}, this.$store.state.auth.user), {}, {
      password: '',
      password_confirmation: ''
    }); // });
  },
  computed: {
    isFormValid: function isFormValid() {
      return this.user.email !== this.$store.state.auth.user.email || this.user.second_name !== this.$store.state.auth.user.second_name || this.user.name !== this.$store.state.auth.user.name || this.user.last_name !== this.$store.state.auth.user.last_name || this.user.password && this.user.password_confirmation;
    }
  },
  methods: {
    update: function update() {
      var _this = this;

      this.$store.dispatch('auth/updateProfile', this.account).then(function (r) {
        _this.$root.children[0].snackbarText = 'Данные профиля успешно обновлены';
        _this.$root.children[0].snackbar = true;

        var clear = _this.data(_this);

        _this.messages = clear.messages;
        _this.account = _objectSpread(_objectSpread({}, r.data.data), {}, {
          password: '',
          password_confirmation: ''
        });
      })["catch"](function (err) {
        if (err.response.data.message) {
          _this.$root.children[0].snackbarText = err.response.data.message;
          _this.$root.children[0].snackbar = true;
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/Profile.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/Profile.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_074da5b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=074da5b0&scoped=true& */ "./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/pages/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Profile_vue_vue_type_template_id_074da5b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_074da5b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "074da5b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_074da5b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_074da5b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_074da5b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=074da5b0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Profile.vue?vue&type=template&id=074da5b0&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
              _c(
                "v-toolbar-title",
                { attrs: { align: "center", justify: "center" } },
                [_vm._v("Редактирование профиля")]
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
                      return _vm.signUp.apply(null, arguments)
                    }
                  }
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.messages.email,
                      label: "Введите ваш E-mail",
                      name: "email",
                      type: "email"
                    },
                    model: {
                      value: _vm.user.email,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "email", $$v)
                      },
                      expression: "user.email"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.messages.second_name,
                      label: "Фамилия",
                      name: "second_name",
                      type: "text"
                    },
                    model: {
                      value: _vm.user.second_name,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "second_name", $$v)
                      },
                      expression: "user.second_name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.messages.name,
                      label: "Имя",
                      name: "name",
                      type: "text"
                    },
                    model: {
                      value: _vm.user.name,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "name", $$v)
                      },
                      expression: "user.name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.messages.last_name,
                      label: "Отчество",
                      name: "last_name",
                      type: "text"
                    },
                    model: {
                      value: _vm.user.last_name,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "last_name", $$v)
                      },
                      expression: "user.last_name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.messages.password,
                      label: "Пароль",
                      name: "password",
                      type: "password"
                    },
                    model: {
                      value: _vm.user.password,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "password", $$v)
                      },
                      expression: "user.password"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.messages.password_confirmation,
                      label: "Подтвердите пароль",
                      name: "password",
                      type: "password"
                    },
                    model: {
                      value: _vm.user.password_confirmation,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "password_confirmation", $$v)
                      },
                      expression: "user.password_confirmation"
                    }
                  }),
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
                          on: { click: _vm.update }
                        },
                        [
                          _vm._v(
                            "\n                        Сохранить\n                    "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1Byb2ZpbGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUHJvZmlsZS52dWU/MzA5MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUHJvZmlsZS52dWU/OTZhZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FQTtBQUNBLHNCQURBO0FBRUE7QUFDQTtBQUNBLGNBREE7QUFFQTtBQUNBLGlCQURBO0FBRUEsZ0JBRkE7QUFHQSx1QkFIQTtBQUlBLHFCQUpBO0FBS0Esb0JBTEE7QUFNQTtBQU5BO0FBRkE7QUFXQSxHQWRBO0FBZUEsYUFmQSx5QkFlQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsT0FGQSxDQU1BO0FBQ0EsR0F0QkE7QUF1QkE7QUFDQTtBQUNBLHNFQUNBLGlFQURBLElBRUEsbURBRkEsSUFHQSw2REFIQSxJQUlBLHFEQUpBO0FBS0E7QUFQQSxHQXZCQTtBQWdDQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQSwrREFDQSxJQURBLENBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0Esd0RBQ0EsV0FEQTtBQUVBLHNCQUZBO0FBR0E7QUFIQTtBQUtBLE9BWEEsV0FZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FqQkE7QUFrQkE7QUFwQkE7QUFoQ0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVrRztBQUN2QztBQUNMOzs7QUFHdEQ7QUFDQSxDQUE2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENrTSxDQUFDLGlFQUFlLHlNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXJPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUsscUNBQXFDLFlBQVksRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMscUNBQXFDLEVBQUU7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLCtCQUErQixFQUFFO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLHFDQUFxQyxFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQiwrQkFBK0I7QUFDL0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9jaHVua3MvcmVzb3VyY2VzX2pzX3BhZ2VzX1Byb2ZpbGVfdnVlNTdmYmEyY2Q4N2U0NDgyMTgzN2IuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbiAgICA8di1jb250YWluZXIgY2xhc3M9XCJmaWxsLWhlaWdodFwiIGZsdWlkPlxuICAgICAgICA8di1yb3cgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8di1jb2wgY29scz1cIjEyXCIgc209XCI4XCIgbWQ9XCI0XCI+XG4gICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj7QoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC/0YDQvtGE0LjQu9GPPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgICAgICAgPHYtZm9ybSAgQGtleXVwLm5hdGl2ZS5lbnRlcj1cInNpZ25VcFwiIHJlZj1cImZvcm1cIj5cblxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCS0LLQtdC00LjRgtC1INCy0LDRiCBFLW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnNlY29uZF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5zZWNvbmRfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQpNCw0LzQuNC70LjRj1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlY29uZF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCY0LzRj1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMubGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCe0YLRh9C10YHRgtCy0L5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQn9Cw0YDQvtC70YxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMucGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCf0L7QtNGC0LLQtdGA0LTQuNGC0LUg0L/QsNGA0L7Qu9GMXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXIgbWItNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cInVwZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzRm9ybVZhbGlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICA8L3YtZm9ybT5cbiAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIlJlZ2lzdHJhdGlvblwiLFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgICAgIHVzZXI6IHt9LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZF9uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbGFzdF9uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVNb3VudCgpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL2F0dGVtcHQnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB7IC4uLnRoaXMuJHN0b3JlLnN0YXRlLmF1dGgudXNlcixcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaXNGb3JtVmFsaWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlci5lbWFpbCAhPT0gdGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgIHx8IHRoaXMudXNlci5zZWNvbmRfbmFtZSAhPT0gdGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnNlY29uZF9uYW1lXG4gICAgICAgICAgICAgICAgICAgIHx8IHRoaXMudXNlci5uYW1lICE9PSB0aGlzLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIubmFtZVxuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLnVzZXIubGFzdF9uYW1lICE9PSB0aGlzLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIubGFzdF9uYW1lXG4gICAgICAgICAgICAgICAgICAgIHx8IHRoaXMudXNlci5wYXNzd29yZCAmJiB0aGlzLnVzZXIucGFzc3dvcmRfY29uZmlybWF0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzIDp7XG4gICAgICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvdXBkYXRlUHJvZmlsZScsIHRoaXMuYWNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gJ9CU0LDQvdC90YvQtSDQv9GA0L7RhNC40LvRjyDRg9GB0L/QtdGI0L3QviDQvtCx0L3QvtCy0LvQtdC90YsnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC5jaGlsZHJlblswXS5zbmFja2JhciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xlYXIgPSB0aGlzLmRhdGEodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzID0gY2xlYXIubWVzc2FnZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uci5kYXRhLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC5jaGlsZHJlblswXS5zbmFja2JhclRleHQgID0gZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LmNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzRkYTViMCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA3NGRhNWIwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvanVyYTEyMDU5Ni9QaHBzdG9ybVByb2plY3RzL3NrYXN5L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA3NGRhNWIwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA3NGRhNWIwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA3NGRhNWIwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzRkYTViMCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNzRkYTViMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1Byb2ZpbGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImZpbGwtaGVpZ2h0XCIsIGF0dHJzOiB7IGZsdWlkOiBcIlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBjb2xzOiBcIjEyXCIsIHNtOiBcIjhcIiwgbWQ6IFwiNFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQv9GA0L7RhNC40LvRj1wiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZvcm1cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2lnblVwLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCS0LLQtdC00LjRgtC1INCy0LDRiCBFLW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcImVtYWlsXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5zZWNvbmRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQpNCw0LzQuNC70LjRj1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2Vjb25kX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5zZWNvbmRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJzZWNvbmRfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuc2Vjb25kX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQmNC80Y9cIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMubGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCe0YLRh9C10YHRgtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxhc3RfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJsYXN0X25hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQn9Cw0YDQvtC70YxcIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcInBhc3N3b3JkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5wYXNzd29yZF9jb25maXJtYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0J/QvtC00YLQstC10YDQtNC40YLQtSDQv9Cw0YDQvtC70YxcIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLnBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciBtYi02XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgaGVpZ2h0OiBcImF1dG9cIiwgdGlsZTogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uaXNGb3JtVmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS51cGRhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9