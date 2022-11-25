(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Registration_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DistrictAutocomplete.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DistrictAutocomplete.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DistrictAutocomplete",
  props: {
    level: {
      type: Number,
      "default": 1
    }
  },
  data: function data(vm) {
    return {
      entries: [],
      isLoading: false,
      district: null,
      search: '',
      last: '',
      t: null
    };
  },
  watch: {
    search: function search(val) {
      var _this = this;

      if (this.entries.length > 0 && val === this.last) return;
      if (this.t != null) clearTimeout(this.t);
      this.t = setTimeout(function () {
        _this.isLoading = true;
        window.axios.get('/district?' + new URLSearchParams({
          name: arguments.length <= 0 ? undefined : arguments[0],
          level: _this.level,
          per_page: -1
        }).toString()).then(function (res) {
          _this.count = res.data.total;
          _this.entries = res.data.data;
          _this.last = name;
        })["catch"](function (err) {
          console.log(err);
        })["finally"](function () {
          return _this.isLoading = false;
        });
      }, 1000, [val + '']);
    }
  }
});

/***/ }),

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
/* harmony import */ var _components_DistrictAutocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DistrictAutocomplete */ "./resources/js/components/DistrictAutocomplete.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    DistrictAutocomplete: _components_DistrictAutocomplete__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data(vm) {
    return {
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
        district_id: null,
        village_id: null
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
        accept: '',
        district_id: '',
        village_id: ''
      }
    };
  },
  computed: {
    isFormValid: function isFormValid() {
      return this.account.email && this.account.second_name && this.account.name && this.account.accept && this.account.phone && this.account.district_id;
    }
  },
  methods: {
    signUp: function signUp() {
      var _this = this;

      this.isFormValid && window.axios.post('/auth/signup', this.account).then(function (r) {
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
  }
});

/***/ }),

/***/ "./resources/js/components/DistrictAutocomplete.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/DistrictAutocomplete.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DistrictAutocomplete_vue_vue_type_template_id_e0f26efe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DistrictAutocomplete.vue?vue&type=template&id=e0f26efe&scoped=true& */ "./resources/js/components/DistrictAutocomplete.vue?vue&type=template&id=e0f26efe&scoped=true&");
/* harmony import */ var _DistrictAutocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DistrictAutocomplete.vue?vue&type=script&lang=js& */ "./resources/js/components/DistrictAutocomplete.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DistrictAutocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DistrictAutocomplete_vue_vue_type_template_id_e0f26efe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DistrictAutocomplete_vue_vue_type_template_id_e0f26efe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e0f26efe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DistrictAutocomplete.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/DistrictAutocomplete.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/DistrictAutocomplete.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictAutocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DistrictAutocomplete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DistrictAutocomplete.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictAutocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/DistrictAutocomplete.vue?vue&type=template&id=e0f26efe&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/DistrictAutocomplete.vue?vue&type=template&id=e0f26efe&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictAutocomplete_vue_vue_type_template_id_e0f26efe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictAutocomplete_vue_vue_type_template_id_e0f26efe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictAutocomplete_vue_vue_type_template_id_e0f26efe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DistrictAutocomplete.vue?vue&type=template&id=e0f26efe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DistrictAutocomplete.vue?vue&type=template&id=e0f26efe&scoped=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DistrictAutocomplete.vue?vue&type=template&id=e0f26efe&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DistrictAutocomplete.vue?vue&type=template&id=e0f26efe&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    "v-autocomplete",
    _vm._b(
      {
        attrs: {
          items: _vm.entries,
          loading: _vm.isLoading,
          "search-input": _vm.search,
          "hide-no-data": "",
          clearable: "",
          "item-text": "name",
          "item-value": "id",
          "return-object": ""
        },
        on: {
          input: function($event) {
            return _vm.$emit("input", $event)
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
      },
      "v-autocomplete",
      _vm.$attrs,
      false
    )
  )
}
var staticRenderFns = []
render._withStripped = true



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
                  _c("DistrictAutocomplete", {
                    attrs: {
                      "error-messages": _vm.messages.district_id,
                      label: "Район",
                      placeholder: "Введите название района"
                    },
                    on: {
                      input: function(val) {
                        return (_vm.account.district_id = val.id)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.account.district_id > 0
                    ? _c("DistrictAutocomplete", {
                        attrs: {
                          "error-messages": _vm.messages.village_id,
                          level: "2",
                          label: "Населенный пункт",
                          placeholder: "Введите название района"
                        },
                        on: {
                          input: function(val) {
                            return (_vm.account.village_id = val.id)
                          }
                        }
                      })
                    : _vm._e(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGlzdHJpY3RBdXRvY29tcGxldGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvUmVnaXN0cmF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1JlZ2lzdHJhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGlzdHJpY3RBdXRvY29tcGxldGUudnVlPzYwMmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1JlZ2lzdHJhdGlvbi52dWU/ZmY0MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWU/ZTQ0ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUmVnaXN0cmF0aW9uLnZ1ZT81ZmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBLDhCQURBO0FBRUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQURBLEdBRkE7QUFRQTtBQUFBO0FBQ0EsaUJBREE7QUFFQSxzQkFGQTtBQUdBLG9CQUhBO0FBSUEsZ0JBSkE7QUFLQSxjQUxBO0FBTUE7QUFOQTtBQUFBLEdBUkE7QUFnQkE7QUFDQSxVQURBLGtCQUNBLEdBREEsRUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFEQTtBQUVBLDRCQUZBO0FBR0E7QUFIQSxXQUlBLFFBSkEsSUFLQSxJQUxBLENBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVRBLFdBVUE7QUFDQTtBQUNBLFNBWkEsYUFhQTtBQUFBO0FBQUEsU0FiQTtBQWNBLE9BaEJBLEVBZ0JBLElB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QUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQiwrQkFBK0I7QUFDL0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9jaHVua3MvcmVzb3VyY2VzX2pzX3BhZ2VzX1JlZ2lzdHJhdGlvbl92dWUzZWZjNDk2NDFiOTU4ZTE4YmU4OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblxuICAgIDx2LWF1dG9jb21wbGV0ZVxuICAgICAgICB2LW1vZGVsPVwiZGlzdHJpY3RcIlxuICAgICAgICBAaW5wdXQ9XCIkZW1pdCgnaW5wdXQnLCAkZXZlbnQpXCJcbiAgICAgICAgOml0ZW1zPVwiZW50cmllc1wiXG4gICAgICAgIDpsb2FkaW5nPVwiaXNMb2FkaW5nXCJcbiAgICAgICAgOnNlYXJjaC1pbnB1dC5zeW5jPVwic2VhcmNoXCJcbiAgICAgICAgaGlkZS1uby1kYXRhXG4gICAgICAgIGNsZWFyYWJsZVxuICAgICAgICBpdGVtLXRleHQ9XCJuYW1lXCJcbiAgICAgICAgaXRlbS12YWx1ZT1cImlkXCJcbiAgICAgICAgcmV0dXJuLW9iamVjdFxuICAgICAgICB2LWJpbmQ9XCIkYXR0cnNcIlxuICAgID48L3YtYXV0b2NvbXBsZXRlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiRGlzdHJpY3RBdXRvY29tcGxldGVcIixcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGxldmVsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XG4gICAgICAgICAgICBlbnRyaWVzOiBbXSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBkaXN0cmljdDogbnVsbCxcbiAgICAgICAgICAgIHNlYXJjaDogJycsXG4gICAgICAgICAgICBsYXN0OiAnJyxcbiAgICAgICAgICAgIHQ6IG51bGwsXG4gICAgICAgIH0pLFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgc2VhcmNoKHZhbCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVudHJpZXMubGVuZ3RoID4gMCAmJiB2YWwgPT09IHRoaXMubGFzdCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnQgIT0gbnVsbCkgY2xlYXJUaW1lb3V0KHRoaXMudCk7XG4gICAgICAgICAgICAgICAgdGhpcy50ID0gc2V0VGltZW91dCgoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy9kaXN0cmljdD8nICsgKG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXJnc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyX3BhZ2U6IC0xXG4gICAgICAgICAgICAgICAgICAgIH0pLnRvU3RyaW5nKCkpLClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudCA9IHJlcy5kYXRhLnRvdGFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW50cmllcyA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0ID0gbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4gKHRoaXMuaXNMb2FkaW5nID0gZmFsc2UpKVxuICAgICAgICAgICAgICAgIH0sIDEwMDAsIFt2YWwgKyAnJ10pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVwiZmlsbC1oZWlnaHRcIiBmbHVpZD5cbiAgICAgICAgPHYtcm93IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiOFwiIG1kPVwiNFwiPlxuICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+e3skc3RvcmUuc3RhdGUuYXBwTmFtZX19XG4gICAgICAgICAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgICAgICAgPHYtZm9ybSAgQGtleXVwLm5hdGl2ZS5lbnRlcj1cInNpZ25VcFwiIHJlZj1cImZvcm1cIj5cblxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImFjY291bnQuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCS0LLQtdC00LjRgtC1INCy0LDRiCBFLW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhY2NvdW50LnBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5waG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQktCy0LXQtNC40YLQtSDQstCw0Ygg0YLQtdC70LXRhNC+0L1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIis3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImFjY291bnQuc2Vjb25kX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLnNlY29uZF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCk0LDQvNC40LvQuNGPXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2Vjb25kX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhY2NvdW50Lm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0JjQvNGPXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImFjY291bnQubGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5sYXN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J7RgtGH0LXRgdGC0LLQvlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCQ0LTRgNC10YFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImFjY291bnQuYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPERpc3RyaWN0QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5kaXN0cmljdF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIodmFsKSA9PiBhY2NvdW50LmRpc3RyaWN0X2lkID0gdmFsLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0KDQsNC50L7QvVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC90LDQt9Cy0LDQvdC40LUg0YDQsNC50L7QvdCwXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPERpc3RyaWN0QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiYWNjb3VudC5kaXN0cmljdF9pZCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMudmlsbGFnZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIodmFsKSA9PiBhY2NvdW50LnZpbGxhZ2VfaWQgPSB2YWwuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J3QsNGB0LXQu9C10L3QvdGL0Lkg0L/Rg9C90LrRglwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC90LDQt9Cy0LDQvdC40LUg0YDQsNC50L7QvdCwXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYWNjb3VudC5hY2NlcHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmFjY2VwdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQryDQv9GA0LjQvdC40LzQsNGOLCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60L7QtSDRgdC+0LPQu9Cw0YjQtdC90LjQtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY2NlcHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICA+PC92LWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIG1iLTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJzaWduVXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpc0Zvcm1WYWxpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRj1xuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgPC92LWZvcm0+XG4gICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICA8L3Ytcm93PlxuICAgIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBEaXN0cmljdEF1dG9jb21wbGV0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9EaXN0cmljdEF1dG9jb21wbGV0ZVwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJSZWdpc3RyYXRpb25cIixcbiAgICAgICAgY29tcG9uZW50czoge0Rpc3RyaWN0QXV0b2NvbXBsZXRlfSxcbiAgICAgICAgZGF0YTogKHZtKSA9PiAoe1xuICAgICAgICAgICAgYWNjb3VudDoge1xuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBzZWNvbmRfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICBwaG9uZTogJycsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogJycsXG4gICAgICAgICAgICAgICAgYWNjZXB0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXN0cmljdF9pZDogbnVsbCxcbiAgICAgICAgICAgICAgICB2aWxsYWdlX2lkOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgcGhvbmU6ICcnLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBzZWNvbmRfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICBhY2NlcHQ6ICcnLFxuICAgICAgICAgICAgICAgIGRpc3RyaWN0X2lkOiAnJyxcbiAgICAgICAgICAgICAgICB2aWxsYWdlX2lkOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaXNGb3JtVmFsaWQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50LmVtYWlsXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuYWNjb3VudC5zZWNvbmRfbmFtZVxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmFjY291bnQubmFtZVxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmFjY291bnQuYWNjZXB0XG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuYWNjb3VudC5waG9uZVxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmFjY291bnQuZGlzdHJpY3RfaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHMgOntcbiAgICAgICAgICAgIHNpZ25VcCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRm9ybVZhbGlkICYmIHdpbmRvdy5heGlvcy5wb3N0KCcvYXV0aC9zaWdudXAnLCB0aGlzLmFjY291bnQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSByLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGlzdHJpY3RBdXRvY29tcGxldGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUwZjI2ZWZlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Rpc3RyaWN0QXV0b2NvbXBsZXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGlzdHJpY3RBdXRvY29tcGxldGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlMGYyNmVmZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2UwZjI2ZWZlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2UwZjI2ZWZlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2UwZjI2ZWZlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTBmMjZlZmUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTBmMjZlZmUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0Rpc3RyaWN0QXV0b2NvbXBsZXRlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUmVnaXN0cmF0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MzA4ZTM3YyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SZWdpc3RyYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZWdpc3RyYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0MzA4ZTM3Y1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQzMDhlMzdjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQzMDhlMzdjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQzMDhlMzdjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZWdpc3RyYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzMDhlMzdjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQzMDhlMzdjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvUmVnaXN0cmF0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0cmF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZ2lzdHJhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1hdXRvY29tcGxldGVcIixcbiAgICBfdm0uX2IoXG4gICAgICB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaXRlbXM6IF92bS5lbnRyaWVzLFxuICAgICAgICAgIGxvYWRpbmc6IF92bS5pc0xvYWRpbmcsXG4gICAgICAgICAgXCJzZWFyY2gtaW5wdXRcIjogX3ZtLnNlYXJjaCxcbiAgICAgICAgICBcImhpZGUtbm8tZGF0YVwiOiBcIlwiLFxuICAgICAgICAgIGNsZWFyYWJsZTogXCJcIixcbiAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBcIm5hbWVcIixcbiAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJpZFwiLFxuICAgICAgICAgIFwicmV0dXJuLW9iamVjdFwiOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImlucHV0XCIsICRldmVudClcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlOnNlYXJjaElucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICRldmVudFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGU6c2VhcmNoLWlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICRldmVudFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmRpc3RyaWN0LFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS5kaXN0cmljdCA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJkaXN0cmljdFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInYtYXV0b2NvbXBsZXRlXCIsXG4gICAgICBfdm0uJGF0dHJzLFxuICAgICAgZmFsc2VcbiAgICApXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImZpbGwtaGVpZ2h0XCIsIGF0dHJzOiB7IGZsdWlkOiBcIlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBjb2xzOiBcIjEyXCIsIHNtOiBcIjhcIiwgbWQ6IFwiNFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHN0b3JlLnN0YXRlLmFwcE5hbWUpICsgXCJcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcItCg0LXQs9C40YHRgtGA0LDRhtC40Y9cIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mb3JtXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNpZ25VcC5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQktCy0LXQtNC40YLQtSDQstCw0YggRS1tYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWNjb3VudC5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uYWNjb3VudCwgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjY291bnQuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0JLQstC10LTQuNGC0LUg0LLQsNGIINGC0LXQu9C10YTQvtC9XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIis3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwaG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjY291bnQucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmFjY291bnQsIFwicGhvbmVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhY2NvdW50LnBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLnNlY29uZF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCk0LDQvNC40LvQuNGPXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzZWNvbmRfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hY2NvdW50LnNlY29uZF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5hY2NvdW50LCBcInNlY29uZF9uYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWNjb3VudC5zZWNvbmRfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCY0LzRj1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hY2NvdW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmFjY291bnQsIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjY291bnQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5sYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0J7RgtGH0LXRgdGC0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGFzdF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjY291bnQubGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5hY2NvdW50LCBcImxhc3RfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjY291bnQubGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCQ0LTRgNC10YFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5hZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hY2NvdW50LmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmFjY291bnQsIFwiYWRkcmVzc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjY291bnQuYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiRGlzdHJpY3RBdXRvY29tcGxldGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLmRpc3RyaWN0X2lkLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCg0LDQudC+0L1cIixcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQktCy0LXQtNC40YLQtSDQvdCw0LfQstCw0L3QuNC1INGA0LDQudC+0L3QsFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfdm0uYWNjb3VudC5kaXN0cmljdF9pZCA9IHZhbC5pZClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5hY2NvdW50LmRpc3RyaWN0X2lkID4gMFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiRGlzdHJpY3RBdXRvY29tcGxldGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMudmlsbGFnZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQndCw0YHQtdC70LXQvdC90YvQuSDQv9GD0L3QutGCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcItCS0LLQtdC00LjRgtC1INC90LDQt9Cy0LDQvdC40LUg0YDQsNC50L7QvdCwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfdm0uYWNjb3VudC52aWxsYWdlX2lkID0gdmFsLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLmFjY2VwdCxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQryDQv9GA0LjQvdC40LzQsNGOLCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60L7QtSDRgdC+0LPQu9Cw0YjQtdC90LjQtVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhY2NlcHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtZGV0YWlsc1wiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hY2NvdW50LmFjY2VwdCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uYWNjb3VudCwgXCJhY2NlcHRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhY2NvdW50LmFjY2VwdFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciBtYi02XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgaGVpZ2h0OiBcImF1dG9cIiwgdGlsZTogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uaXNGb3JtVmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zaWduVXAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9