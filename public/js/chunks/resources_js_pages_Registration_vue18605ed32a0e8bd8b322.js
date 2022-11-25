(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Registration_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Registration.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Registration.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Registration",
  data: function data(vm) {
    return {
      entries: [],
      isLoading: false,
      district: null,
      search: '',
      last: '',
      t: null,
      descriptionLimit: 60,
      account: {
        email: '',
        name: '',
        second_name: '',
        last_name: '',
        password: '',
        password_confirmation: '',
        phone: '',
        address: '',
        accept: false,
        district_id: null
      },
      messages: {
        phone: '',
        email: '',
        name: '',
        second_name: '',
        last_name: '',
        address: '',
        password: '',
        password_confirmation: '',
        accept: ''
      }
    };
  },
  computed: {
    isFormValid: function isFormValid() {
      return this.account.email && this.account.second_name && this.account.name && this.account.accept && this.account.phone;
    }
  },
  methods: {
    signUp: function signUp() {
      var _this = this;

      window.axios.post('/auth/signup', this.account).then(function (r) {
        _this.$root.$children[0].snackbarText = r.data.message;
        _this.$root.$children[0].snackbar = true;

        _this.$router.push('/login');
      })["catch"](function (e) {
        if (e.response && e.response.status === 422) {
          var errors = e.response.data.errors;
          Object.keys(_this.messages).forEach(function (k) {
            var _errors$k;

            _this.messages[k] = ((_errors$k = errors[k]) === null || _errors$k === void 0 ? void 0 : _errors$k[0]) || '';
          });
        }
      });
    }
  },
  watch: {
    search: function search(val) {
      var _this2 = this;

      if (this.entries.length > 0 && val === this.last) return;
      if (this.t != null) clearTimeout(this.t);
      this.t = setTimeout(function () {
        _this2.isLoading = true;
        window.axios.get('/district?' + new URLSearchParams({
          name: arguments.length <= 0 ? undefined : arguments[0],
          level: 1,
          per_page: -1
        }).toString()).then(function (res) {
          _this2.count = res.data.total;
          _this2.entries = res.data.data.map(function (entry) {
            return {
              value: entry,
              Description: entry.name
            };
          });
          _this2.last = name;
        })["catch"](function (err) {
          console.log(err);
        })["finally"](function () {
          return _this2.isLoading = false;
        });
      }, 1000, [val + '']);
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/Registration.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/Registration.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Registration_vue_vue_type_template_id_4308e37c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration.vue?vue&type=template&id=4308e37c&scoped=true& */ "./resources/js/pages/Registration.vue?vue&type=template&id=4308e37c&scoped=true&");
/* harmony import */ var _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration.vue?vue&type=script&lang=js& */ "./resources/js/pages/Registration.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Registration_vue_vue_type_template_id_4308e37c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Registration_vue_vue_type_template_id_4308e37c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4308e37c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Registration.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Registration.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Registration.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Registration.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Registration.vue?vue&type=template&id=4308e37c&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/Registration.vue?vue&type=template&id=4308e37c&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_4308e37c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_4308e37c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_4308e37c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registration.vue?vue&type=template&id=4308e37c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Registration.vue?vue&type=template&id=4308e37c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Registration.vue?vue&type=template&id=4308e37c&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Registration.vue?vue&type=template&id=4308e37c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                [_vm._v(_vm._s(_vm.$store.state.appName) + "\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-toolbar-title",
                { attrs: { align: "center", justify: "center" } },
                [_vm._v("Регистрация")]
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
                      value: _vm.account.email,
                      callback: function($$v) {
                        _vm.$set(_vm.account, "email", $$v)
                      },
                      expression: "account.email"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.messages.phone,
                      label: "Введите ваш телефон",
                      prefix: "+7",
                      name: "phone",
                      type: "number"
                    },
                    model: {
                      value: _vm.account.phone,
                      callback: function($$v) {
                        _vm.$set(_vm.account, "phone", $$v)
                      },
                      expression: "account.phone"
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
                      value: _vm.account.second_name,
                      callback: function($$v) {
                        _vm.$set(_vm.account, "second_name", $$v)
                      },
                      expression: "account.second_name"
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
                      value: _vm.account.name,
                      callback: function($$v) {
                        _vm.$set(_vm.account, "name", $$v)
                      },
                      expression: "account.name"
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
                      value: _vm.account.last_name,
                      callback: function($$v) {
                        _vm.$set(_vm.account, "last_name", $$v)
                      },
                      expression: "account.last_name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "Адрес",
                      type: "text",
                      "error-messages": _vm.messages.address
                    },
                    model: {
                      value: _vm.account.address,
                      callback: function($$v) {
                        _vm.$set(_vm.account, "address", $$v)
                      },
                      expression: "account.address"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-autocomplete", {
                    attrs: {
                      items: _vm.entries,
                      loading: _vm.isLoading,
                      "search-input": _vm.search,
                      "hide-no-data": "",
                      clearable: "",
                      "item-text": "Description",
                      "item-value": "API",
                      label: "Район",
                      placeholder: "Введите название района",
                      "return-object": ""
                    },
                    on: {
                      input: function(v) {
                        _vm.account.district_id = v.id
                      },
                      "update:searchInput": function($event) {
                        _vm.search = $event
                      },
                      "update:search-input": function($event) {
                        _vm.search = $event
                      }
                    },
                    model: {
                      value: _vm.district,
                      callback: function($$v) {
                        _vm.district = $$v
                      },
                      expression: "district"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-checkbox", {
                    attrs: {
                      "error-messages": _vm.messages.accept,
                      label: "Я принимаю, пользовательское соглашение",
                      color: "success",
                      value: "1",
                      name: "accept",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.account.accept,
                      callback: function($$v) {
                        _vm.$set(_vm.account, "accept", $$v)
                      },
                      expression: "account.accept"
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
                          on: { click: _vm.signUp }
                        },
                        [
                          _vm._v(
                            "\n                        Зарегистрироваться\n                    "
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1JlZ2lzdHJhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1JlZ2lzdHJhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1JlZ2lzdHJhdGlvbi52dWU/ZmY0MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUmVnaXN0cmF0aW9uLnZ1ZT81ZmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZGQTtBQUNBLHNCQURBO0FBRUE7QUFBQTtBQUNBLGlCQURBO0FBRUEsc0JBRkE7QUFHQSxvQkFIQTtBQUlBLGdCQUpBO0FBS0EsY0FMQTtBQU1BLGFBTkE7QUFPQSwwQkFQQTtBQVFBO0FBQ0EsaUJBREE7QUFFQSxnQkFGQTtBQUdBLHVCQUhBO0FBSUEscUJBSkE7QUFLQSxvQkFMQTtBQU1BLGlDQU5BO0FBT0EsaUJBUEE7QUFRQSxtQkFSQTtBQVNBLHFCQVRBO0FBVUE7QUFWQSxPQVJBO0FBb0JBO0FBQ0EsaUJBREE7QUFFQSxpQkFGQTtBQUdBLGdCQUhBO0FBSUEsdUJBSkE7QUFLQSxxQkFMQTtBQU1BLG1CQU5BO0FBT0Esb0JBUEE7QUFRQSxpQ0FSQTtBQVNBO0FBVEE7QUFwQkE7QUFBQSxHQUZBO0FBa0NBO0FBQ0E7QUFDQSxtQ0FDQSx3QkFEQSxJQUVBLGlCQUZBLElBR0EsbUJBSEEsSUFJQSxrQkFKQTtBQUtBO0FBUEEsR0FsQ0E7QUEyQ0E7QUFDQSxVQURBLG9CQUNBO0FBQUE7O0FBQ0Esc0RBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLE9BTEEsV0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0EsV0FGQTtBQUdBO0FBQ0EsT0FaQTtBQWFBO0FBZkEsR0EzQ0E7QUE0REE7QUFDQSxVQURBLGtCQUNBLEdBREEsRUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxXQUZBO0FBR0E7QUFDQSxTQVBBLFdBUUE7QUFDQTtBQUNBLFNBVkEsYUFXQTtBQUFBO0FBQUEsU0FYQTtBQVlBLE9BZEEsRUFjQSxJQWRBLEVBY0EsVUFkQTtBQWVBO0FBbkJBO0FBNURBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGdUc7QUFDdkM7QUFDTDs7O0FBRzNEO0FBQ0EsQ0FBNkY7QUFDN0YsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLGdHQUFNO0FBQ1IsRUFBRSx5R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDdU0sQ0FBQyxpRUFBZSw4TUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ExTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHFDQUFxQyxZQUFZLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLHFDQUFxQyxFQUFFO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUywrQkFBK0IsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxxQ0FBcUMsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMscUNBQXFDLEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLCtCQUErQjtBQUMvQix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfUmVnaXN0cmF0aW9uX3Z1ZTE4NjA1ZWQzMmEwZThiZDhiMzIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVwiZmlsbC1oZWlnaHRcIiBmbHVpZD5cbiAgICAgICAgPHYtcm93IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiOFwiIG1kPVwiNFwiPlxuICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+e3skc3RvcmUuc3RhdGUuYXBwTmFtZX19XG4gICAgICAgICAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgICAgICAgPHYtZm9ybSAgQGtleXVwLm5hdGl2ZS5lbnRlcj1cInNpZ25VcFwiIHJlZj1cImZvcm1cIj5cblxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImFjY291bnQuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCS0LLQtdC00LjRgtC1INCy0LDRiCBFLW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhY2NvdW50LnBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5waG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQktCy0LXQtNC40YLQtSDQstCw0Ygg0YLQtdC70LXRhNC+0L1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIis3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImFjY291bnQuc2Vjb25kX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLnNlY29uZF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCk0LDQvNC40LvQuNGPXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2Vjb25kX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhY2NvdW50Lm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0JjQvNGPXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImFjY291bnQubGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5sYXN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J7RgtGH0LXRgdGC0LLQvlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCQ0LTRgNC10YFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImFjY291bnQuYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGlzdHJpY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiKHYpID0+IHthY2NvdW50LmRpc3RyaWN0X2lkID0gdi5pZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwiZW50cmllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cImlzTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6c2VhcmNoLWlucHV0LnN5bmM9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZS1uby1kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0tdGV4dD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0tdmFsdWU9XCJBUElcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQoNCw0LnQvtC9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0L3QsNC30LLQsNC90LjQtSDRgNCw0LnQvtC90LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuLW9iamVjdFxuICAgICAgICAgICAgICAgICAgICA+PC92LWF1dG9jb21wbGV0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYWNjb3VudC5hY2NlcHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmFjY2VwdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQryDQv9GA0LjQvdC40LzQsNGOLCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60L7QtSDRgdC+0LPQu9Cw0YjQtdC90LjQtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY2NlcHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICA+PC92LWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIG1iLTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJzaWduVXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpc0Zvcm1WYWxpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRj1xuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgPC92LWZvcm0+XG4gICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICA8L3Ytcm93PlxuICAgIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJSZWdpc3RyYXRpb25cIixcbiAgICAgICAgZGF0YTogKHZtKSA9PiAoe1xuICAgICAgICAgICAgZW50cmllczogW10sXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGlzdHJpY3Q6IG51bGwsXG4gICAgICAgICAgICBzZWFyY2g6ICcnLFxuICAgICAgICAgICAgbGFzdDogJycsXG4gICAgICAgICAgICB0OiBudWxsLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25MaW1pdDogNjAsXG4gICAgICAgICAgICBhY2NvdW50OiB7XG4gICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIHNlY29uZF9uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBsYXN0X25hbWU6ICcnLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnLFxuICAgICAgICAgICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICBhY2NlcHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpc3RyaWN0X2lkOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgcGhvbmU6ICcnLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBzZWNvbmRfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICBhY2NlcHQ6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBpc0Zvcm1WYWxpZCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY291bnQuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5hY2NvdW50LnNlY29uZF9uYW1lXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuYWNjb3VudC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuYWNjb3VudC5hY2NlcHRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5hY2NvdW50LnBob25lXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzIDp7XG4gICAgICAgICAgICBzaWduVXAoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy9hdXRoL3NpZ251cCcsIHRoaXMuYWNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9IHIuZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5yZXNwb25zZSAmJiBlLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1lc3NhZ2VzKS5mb3JFYWNoKChrKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1trXSA9IGVycm9yc1trXT8uWzBdIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgc2VhcmNoICh2YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbnRyaWVzLmxlbmd0aCA+IDAgJiYgdmFsID09PSB0aGlzLmxhc3QpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ICE9IG51bGwpIGNsZWFyVGltZW91dCh0aGlzLnQpO1xuICAgICAgICAgICAgICAgIHRoaXMudCA9IHNldFRpbWVvdXQoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvZGlzdHJpY3Q/JysobmV3IFVSTFNlYXJjaFBhcmFtcyh7bmFtZTphcmdzWzBdLCBsZXZlbDoxLCBwZXJfcGFnZTotMX0pLnRvU3RyaW5nKCkpLCApXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSByZXMuZGF0YS50b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVudHJpZXMgPSByZXMuZGF0YS5kYXRhLm1hcChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7dmFsdWU6IGVudHJ5LCBEZXNjcmlwdGlvbjogZW50cnkubmFtZX07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0ID0gbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4gKHRoaXMuaXNMb2FkaW5nID0gZmFsc2UpKVxuICAgICAgICAgICAgICAgIH0sIDEwMDAsIFt2YWwrJyddKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUmVnaXN0cmF0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MzA4ZTM3YyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SZWdpc3RyYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZWdpc3RyYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0MzA4ZTM3Y1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQzMDhlMzdjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQzMDhlMzdjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQzMDhlMzdjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZWdpc3RyYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzMDhlMzdjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQzMDhlMzdjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvUmVnaXN0cmF0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpc3RyYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0cmF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsbC1oZWlnaHRcIiwgYXR0cnM6IHsgZmx1aWQ6IFwiXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtcm93XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIsIGp1c3RpZnk6IFwiY2VudGVyXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHM6IFwiMTJcIiwgc206IFwiOFwiLCBtZDogXCI0XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtdG9vbGJhci10aXRsZVwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIsIGp1c3RpZnk6IFwiY2VudGVyXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kc3RvcmUuc3RhdGUuYXBwTmFtZSkgKyBcIlxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1wiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZvcm1cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2lnblVwLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCS0LLQtdC00LjRgtC1INCy0LDRiCBFLW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hY2NvdW50LmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5hY2NvdW50LCBcImVtYWlsXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWNjb3VudC5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQktCy0LXQtNC40YLQtSDQstCw0Ygg0YLQtdC70LXRhNC+0L1cIixcbiAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiKzdcIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWNjb3VudC5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uYWNjb3VudCwgXCJwaG9uZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjY291bnQucGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMuc2Vjb25kX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0KTQsNC80LjQu9C40Y9cIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNlY29uZF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjY291bnQuc2Vjb25kX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmFjY291bnQsIFwic2Vjb25kX25hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhY2NvdW50LnNlY29uZF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0JjQvNGPXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjY291bnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uYWNjb3VudCwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWNjb3VudC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQntGC0YfQtdGB0YLQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsYXN0X25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWNjb3VudC5sYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmFjY291bnQsIFwibGFzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWNjb3VudC5sYXN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0JDQtNGA0LXRgVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLmFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjY291bnQuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uYWNjb3VudCwgXCJhZGRyZXNzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWNjb3VudC5hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWF1dG9jb21wbGV0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5lbnRyaWVzLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5pc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgXCJzZWFyY2gtaW5wdXRcIjogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtbm8tZGF0YVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiQVBJXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0KDQsNC50L7QvVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcItCS0LLQtdC00LjRgtC1INC90LDQt9Cy0LDQvdC40LUg0YDQsNC50L7QvdCwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm4tb2JqZWN0XCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFjY291bnQuZGlzdHJpY3RfaWQgPSB2LmlkXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpzZWFyY2hJbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnNlYXJjaC1pbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kaXN0cmljdCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzdHJpY3QgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlzdHJpY3RcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLmFjY2VwdCxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQryDQv9GA0LjQvdC40LzQsNGOLCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60L7QtSDRgdC+0LPQu9Cw0YjQtdC90LjQtVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhY2NlcHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtZGV0YWlsc1wiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hY2NvdW50LmFjY2VwdCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uYWNjb3VudCwgXCJhY2NlcHRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhY2NvdW50LmFjY2VwdFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciBtYi02XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgaGVpZ2h0OiBcImF1dG9cIiwgdGlsZTogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uaXNGb3JtVmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zaWduVXAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9