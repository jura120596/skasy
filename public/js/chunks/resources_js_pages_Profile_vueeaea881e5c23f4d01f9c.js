(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Profile_vue"],{

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DistrictAutocomplete",
  props: {
    level: {
      type: String,
      "default": '1'
    },
    district_id: {
      type: Number,
      "default": 0
    }
  },
  mounted: function mounted() {
    console.log(this.value);
  },
  data: function data(vm) {
    return {
      entries: [],
      isLoading: false,
      district: {
        id: vm.$attrs.value
      },
      search: '',
      last: '',
      t: null
    };
  },
  watch: {
    district_id: function district_id() {
      this.search = null;
      this.district = null;
      this.$emit('input', null);
    },
    search: function search(val) {
      var _this = this;

      if (this.entries.length > 0 && this.last && val === this.last) return;
      if (this.t != null) clearTimeout(this.t);
      this.t = setTimeout(function () {
        _this.isLoading = true;
        window.axios.get('/district?' + new URLSearchParams(_objectSpread({
          name: arguments.length <= 0 ? undefined : arguments[0],
          level: _this.level,
          per_page: -1
        }, _this.district_id ? {
          parent_district_id: _this.district_id
        } : {})).toString()).then(function (res) {
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
/* harmony import */ var _components_DistrictAutocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DistrictAutocomplete */ "./resources/js/components/DistrictAutocomplete.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      user: {},
      messages: {
        email: '',
        name: '',
        second_name: '',
        address: '',
        last_name: '',
        password: '',
        password_confirmation: '',
        village_id: '',
        district_id: ''
      },
      show: false
    };
  },
  beforeMount: function beforeMount() {
    this.user = _objectSpread(_objectSpread({}, this.$store.state.auth.user), {}, {
      password: '',
      password_confirmation: ''
    });

    if (this.user.email) {
      this.$store.dispatch('auth/attempt', {});
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('auth/updateProfile', this.$store.state.auth.user);
  },
  computed: {
    isFormValid: function isFormValid() {
      return this.user.email !== this.$store.state.auth.user.email || this.user.second_name !== this.$store.state.auth.user.second_name || this.user.name !== this.$store.state.auth.user.name || this.user.last_name !== this.$store.state.auth.user.last_name || this.user.address !== this.$store.state.auth.user.address || this.user.password && this.user.password_confirmation || this.user.village_id !== this.$store.state.auth.user.village_id || this.user.district_id !== this.$store.state.auth.user.district_id;
    }
  },
  methods: {
    update: function update() {
      var _this = this;

      this.$store.dispatch('auth/updateProfile', this.user).then(function (r) {
        console.log(r);
        Object.keys(_this.messages).forEach(function (k) {
          _this.messages[k] = '';
        });
        _this.user = _objectSpread(_objectSpread({}, r.data.data), {}, {
          password: '',
          password_confirmation: ''
        });
        _this.$root.$children[0].snackbarText = 'Данные профиля успешно обновлены';
        _this.$root.$children[0].snackbar = true;
      })["catch"](function (e) {
        var _e$response, _e$response$data;

        console.log(e);

        if (e !== null && e !== void 0 && (_e$response = e.response) !== null && _e$response !== void 0 && (_e$response$data = _e$response.data) !== null && _e$response$data !== void 0 && _e$response$data.message || false) {
          _this.$root.$children[0].snackbarText = e.response.data.message;
          _this.$root.$children[0].snackbar = true;
        }

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
          "return-object": "",
          autocomplete: "chrome-off"
        },
        on: {
          input: function($event) {
            return _vm.$emit("input", $event ? $event.id : $event)
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
              _vm.user.points
                ? _c(
                    "v-toolbar-title",
                    { staticClass: "pl-0 pb-3 ml-0", attrs: { align: "left" } },
                    [
                      _vm._v(
                        "Вы заслужили " + _vm._s(_vm.user.points) + " балл(ов)"
                      )
                    ]
                  )
                : _c(
                    "v-toolbar-title",
                    {
                      staticClass: "pa-3",
                      attrs: { align: "center", justify: "center" }
                    },
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
                      disabled: true,
                      "error-messages": _vm.messages.email,
                      label: "Ваш E-mail",
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
                      disabled: true,
                      "error-messages": _vm.messages.phone,
                      label: "Ваш телефон",
                      type: "phone"
                    },
                    model: {
                      value: _vm.user.phone,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "phone", $$v)
                      },
                      expression: "user.phone"
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
                  _c("DistrictAutocomplete", {
                    attrs: {
                      "error-messages": _vm.messages.district_id,
                      value: _vm.user.district_id,
                      label: "Район",
                      placeholder: "Введите название района"
                    },
                    on: {
                      input: function(val) {
                        return (_vm.user.district_id = val)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.user.district_id > 0
                    ? _c("DistrictAutocomplete", {
                        attrs: {
                          district_id: _vm.user.district_id,
                          "error-messages": _vm.messages.village_id,
                          value: _vm.user.village_id,
                          level: "2",
                          label: "Населенный пункт",
                          placeholder: "Введите название района"
                        },
                        on: {
                          input: function(val) {
                            return (_vm.user.village_id = val)
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.user.district_id > 0
                    ? _c("v-text-field", {
                        attrs: {
                          disabled: !_vm.user.village_id,
                          label: "Улица, дом",
                          type: "text",
                          "error-messages": _vm.messages.address
                        },
                        model: {
                          value: _vm.user.address,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "address", $$v)
                          },
                          expression: "user.address"
                        }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-form",
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.messages.password,
                      "append-icon": _vm.show ? "mdi-eye" : "mdi-eye-off",
                      type: _vm.show ? "text" : "password",
                      label: "Пароль",
                      name: "password"
                    },
                    on: {
                      "click:append": function($event) {
                        _vm.show = !_vm.show
                      }
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
                      "append-icon": _vm.show ? "mdi-eye" : "mdi-eye-off",
                      type: _vm.show ? "text" : "password",
                      label: "Подтвердите пароль",
                      name: "password"
                    },
                    on: {
                      "click:append": function($event) {
                        _vm.show = !_vm.show
                      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGlzdHJpY3RBdXRvY29tcGxldGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvUHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGlzdHJpY3RBdXRvY29tcGxldGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWU/NjAyYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUHJvZmlsZS52dWU/MzA5MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWU/ZTQ0ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUHJvZmlsZS52dWU/OTZhZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0EsOEJBREE7QUFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFLQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQUxBLEdBRkE7QUFZQSxTQVpBLHFCQVlBO0FBQ0E7QUFDQSxHQWRBO0FBZUE7QUFBQTtBQUNBLGlCQURBO0FBRUEsc0JBRkE7QUFHQTtBQUFBO0FBQUEsT0FIQTtBQUlBLGdCQUpBO0FBS0EsY0FMQTtBQU1BO0FBTkE7QUFBQSxHQWZBO0FBdUJBO0FBQ0EsZUFEQSx5QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEE7QUFNQSxVQU5BLGtCQU1BLEdBTkEsRUFNQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFEQTtBQUVBLDRCQUZBO0FBR0E7QUFIQSxXQUlBO0FBQUE7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Q3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsK0JBQStCO0FBQy9CLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19wYWdlc19Qcm9maWxlX3Z1ZWVhZWE4ODFlNWMyM2Y0ZDAxZjljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG4gICAgPHYtYXV0b2NvbXBsZXRlXG4gICAgICAgIHYtbW9kZWw9XCJkaXN0cmljdFwiXG4gICAgICAgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dCcsICRldmVudCA/ICRldmVudC5pZCA6ICRldmVudClcIlxuICAgICAgICA6aXRlbXM9XCJlbnRyaWVzXCJcbiAgICAgICAgOmxvYWRpbmc9XCJpc0xvYWRpbmdcIlxuICAgICAgICA6c2VhcmNoLWlucHV0LnN5bmM9XCJzZWFyY2hcIlxuICAgICAgICBoaWRlLW5vLWRhdGFcbiAgICAgICAgY2xlYXJhYmxlXG4gICAgICAgIGl0ZW0tdGV4dD1cIm5hbWVcIlxuICAgICAgICBpdGVtLXZhbHVlPVwiaWRcIlxuICAgICAgICByZXR1cm4tb2JqZWN0XG4gICAgICAgIGF1dG9jb21wbGV0ZT1cImNocm9tZS1vZmZcIlxuICAgICAgICB2LWJpbmQ9XCIkYXR0cnNcIlxuICAgID48L3YtYXV0b2NvbXBsZXRlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiRGlzdHJpY3RBdXRvY29tcGxldGVcIixcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGxldmVsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcxJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXN0cmljdF9pZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWUpXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6ICh2bSkgPT4gKHtcbiAgICAgICAgICAgIGVudHJpZXM6IFtdLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc3RyaWN0OiB7aWQ6dm0uJGF0dHJzLnZhbHVlfSxcbiAgICAgICAgICAgIHNlYXJjaDogJycsXG4gICAgICAgICAgICBsYXN0OiAnJyxcbiAgICAgICAgICAgIHQ6IG51bGwsXG4gICAgICAgIH0pLFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgZGlzdHJpY3RfaWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzdHJpY3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgbnVsbClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWFyY2godmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW50cmllcy5sZW5ndGggPiAwICYmIHRoaXMubGFzdCAmJiB2YWwgPT09IHRoaXMubGFzdCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnQgIT0gbnVsbCkgY2xlYXJUaW1lb3V0KHRoaXMudCk7XG4gICAgICAgICAgICAgICAgdGhpcy50ID0gc2V0VGltZW91dCgoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy9kaXN0cmljdD8nICsgKG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXJnc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyX3BhZ2U6IC0xLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHRoaXMuZGlzdHJpY3RfaWQ/IHtwYXJlbnRfZGlzdHJpY3RfaWQ6dGhpcy5kaXN0cmljdF9pZH0gOiB7fSlcbiAgICAgICAgICAgICAgICAgICAgfSkudG9TdHJpbmcoKSksKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gcmVzLmRhdGEudG90YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRyaWVzID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3QgPSBuYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiAodGhpcy5pc0xvYWRpbmcgPSBmYWxzZSkpXG4gICAgICAgICAgICAgICAgfSwgMTAwMCwgW3ZhbCArICcnXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8di1jb250YWluZXIgY2xhc3M9XCJmaWxsLWhlaWdodFwiIGZsdWlkPlxuICAgICAgICA8di1yb3cgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8di1jb2wgY29scz1cIjEyXCIgc209XCI4XCIgbWQ9XCI0XCI+XG4gICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSB2LWlmPVwidXNlci5wb2ludHNcIiBhbGlnbj1cImxlZnRcIiBjbGFzcz1cInBsLTAgcGItMyBtbC0wXCI+0JLRiyDQt9Cw0YHQu9GD0LbQuNC70Lgge3t1c2VyLnBvaW50c319INCx0LDQu9C7KNC+0LIpPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSB2LWVsc2UgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3M9XCJwYS0zXCI+0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQv9GA0L7RhNC40LvRjzwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICAgICAgICAgIDx2LWZvcm0gIEBrZXl1cC5uYXRpdmUuZW50ZXI9XCJzaWduVXBcIiByZWY9XCJmb3JtXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQktCw0YggRS1tYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5waG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMucGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0JLQsNGIINGC0LXQu9C10YTQvtC9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuc2Vjb25kX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLnNlY29uZF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCk0LDQvNC40LvQuNGPXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2Vjb25kX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0JjQvNGPXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIubGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5sYXN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J7RgtGH0LXRgdGC0LLQvlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8RGlzdHJpY3RBdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmRpc3RyaWN0X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cIih2YWwpID0+IHVzZXIuZGlzdHJpY3RfaWQgPSB2YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidXNlci5kaXN0cmljdF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCg0LDQudC+0L1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQvdCw0LfQstCw0L3QuNC1INGA0LDQudC+0L3QsFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxEaXN0cmljdEF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInVzZXIuZGlzdHJpY3RfaWQgPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpkaXN0cmljdF9pZD1cInVzZXIuZGlzdHJpY3RfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMudmlsbGFnZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIodmFsKSA9PiB1c2VyLnZpbGxhZ2VfaWQgPSB2YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidXNlci52aWxsYWdlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCd0LDRgdC10LvQtdC90L3Ri9C5INC/0YPQvdC60YJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQvdCw0LfQstCw0L3QuNC1INGA0LDQudC+0L3QsFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ1c2VyLmRpc3RyaWN0X2lkID4gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhdXNlci52aWxsYWdlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0KPQu9C40YbQsCwg0LTQvtC8XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMuYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC92LWZvcm0+XG4gICAgICAgICAgICAgICAgPHYtZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFwcGVuZC1pY29uPVwic2hvdyA/ICdtZGktZXllJyA6ICdtZGktZXllLW9mZidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljazphcHBlbmQ9XCJzaG93ID0gIXNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0eXBlPVwic2hvdyA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J/QsNGA0L7Qu9GMXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIucGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5wYXNzd29yZF9jb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphcHBlbmQtaWNvbj1cInNob3cgPyAnbWRpLWV5ZScgOiAnbWRpLWV5ZS1vZmYnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s6YXBwZW5kPVwic2hvdyA9ICFzaG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dHlwZT1cInNob3cgPyAndGV4dCcgOiAncGFzc3dvcmQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCf0L7QtNGC0LLQtdGA0LTQuNGC0LUg0L/QsNGA0L7Qu9GMXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIG1iLTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJ1cGRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpc0Zvcm1WYWxpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgPC92LWZvcm0+XG4gICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICA8L3Ytcm93PlxuICAgIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBEaXN0cmljdEF1dG9jb21wbGV0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9EaXN0cmljdEF1dG9jb21wbGV0ZVwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJSZWdpc3RyYXRpb25cIixcbiAgICAgICAgY29tcG9uZW50czoge0Rpc3RyaWN0QXV0b2NvbXBsZXRlfSxcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICB1c2VyOiB7fSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICBsYXN0X25hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJycsXG4gICAgICAgICAgICAgICAgICAgIHZpbGxhZ2VfaWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkaXN0cmljdF9pZDogJycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZU1vdW50KCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHsgLi4udGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJycsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIuZW1haWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvYXR0ZW1wdCcsIHt9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC91cGRhdGVQcm9maWxlJywgdGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyKVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaXNGb3JtVmFsaWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlci5lbWFpbCAhPT0gdGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgIHx8IHRoaXMudXNlci5zZWNvbmRfbmFtZSAhPT0gdGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnNlY29uZF9uYW1lXG4gICAgICAgICAgICAgICAgICAgIHx8IHRoaXMudXNlci5uYW1lICE9PSB0aGlzLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIubmFtZVxuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLnVzZXIubGFzdF9uYW1lICE9PSB0aGlzLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIubGFzdF9uYW1lXG4gICAgICAgICAgICAgICAgICAgIHx8IHRoaXMudXNlci5hZGRyZXNzICE9PSB0aGlzLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLnVzZXIucGFzc3dvcmQgJiYgdGhpcy51c2VyLnBhc3N3b3JkX2NvbmZpcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLnVzZXIudmlsbGFnZV9pZCAhPT0gdGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnZpbGxhZ2VfaWRcbiAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy51c2VyLmRpc3RyaWN0X2lkICE9PSB0aGlzLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuZGlzdHJpY3RfaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHMgOntcbiAgICAgICAgICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC91cGRhdGVQcm9maWxlJywgdGhpcy51c2VyKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocik7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1lc3NhZ2VzKS5mb3JFYWNoKChrKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2tdID0gICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uci5kYXRhLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gJ9CU0LDQvdC90YvQtSDQv9GA0L7RhNC40LvRjyDRg9GB0L/QtdGI0L3QviDQvtCx0L3QvtCy0LvQtdC90YsnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGU/LnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ICA9IGUucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Rpc3RyaWN0QXV0b2NvbXBsZXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMGYyNmVmZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Rpc3RyaWN0QXV0b2NvbXBsZXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTBmMjZlZmVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlMGYyNmVmZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlMGYyNmVmZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlMGYyNmVmZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRGlzdHJpY3RBdXRvY29tcGxldGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUwZjI2ZWZlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2UwZjI2ZWZlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3NGRhNWIwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDc0ZGE1YjBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNzRkYTViMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNzRkYTViMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNzRkYTViMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJvZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDc0ZGE1YjAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDc0ZGE1YjAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Qcm9maWxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWF1dG9jb21wbGV0ZVwiLFxuICAgIF92bS5fYihcbiAgICAgIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpdGVtczogX3ZtLmVudHJpZXMsXG4gICAgICAgICAgbG9hZGluZzogX3ZtLmlzTG9hZGluZyxcbiAgICAgICAgICBcInNlYXJjaC1pbnB1dFwiOiBfdm0uc2VhcmNoLFxuICAgICAgICAgIFwiaGlkZS1uby1kYXRhXCI6IFwiXCIsXG4gICAgICAgICAgY2xlYXJhYmxlOiBcIlwiLFxuICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwibmFtZVwiLFxuICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcImlkXCIsXG4gICAgICAgICAgXCJyZXR1cm4tb2JqZWN0XCI6IFwiXCIsXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiBcImNocm9tZS1vZmZcIlxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJpbnB1dFwiLCAkZXZlbnQgPyAkZXZlbnQuaWQgOiAkZXZlbnQpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZTpzZWFyY2hJbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnRcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlOnNlYXJjaC1pbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5kaXN0cmljdCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uZGlzdHJpY3QgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlzdHJpY3RcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ2LWF1dG9jb21wbGV0ZVwiLFxuICAgICAgX3ZtLiRhdHRycyxcbiAgICAgIGZhbHNlXG4gICAgKVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJmaWxsLWhlaWdodFwiLCBhdHRyczogeyBmbHVpZDogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sczogXCIxMlwiLCBzbTogXCI4XCIsIG1kOiBcIjRcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS51c2VyLnBvaW50c1xuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGwtMCBwYi0zIG1sLTBcIiwgYXR0cnM6IHsgYWxpZ246IFwibGVmdFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwi0JLRiyDQt9Cw0YHQu9GD0LbQuNC70LggXCIgKyBfdm0uX3MoX3ZtLnVzZXIucG9pbnRzKSArIFwiINCx0LDQu9C7KNC+0LIpXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhci10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGEtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L/RgNC+0YTQuNC70Y9cIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaWduVXAuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0JLQsNGIIEUtbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwiZW1haWxcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCS0LDRiCDRgtC10LvQtdGE0L7QvVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJwaG9uZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIucGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMuc2Vjb25kX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0KTQsNC80LjQu9C40Y9cIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNlY29uZF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuc2Vjb25kX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwic2Vjb25kX25hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnNlY29uZF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0JjQvNGPXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQntGC0YfQtdGB0YLQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsYXN0X25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5sYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwibGFzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5sYXN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcIkRpc3RyaWN0QXV0b2NvbXBsZXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5kaXN0cmljdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuZGlzdHJpY3RfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0KDQsNC50L7QvVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcItCS0LLQtdC00LjRgtC1INC90LDQt9Cy0LDQvdC40LUg0YDQsNC50L7QvdCwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF92bS51c2VyLmRpc3RyaWN0X2lkID0gdmFsKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIuZGlzdHJpY3RfaWQgPiAwXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJEaXN0cmljdEF1dG9jb21wbGV0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0cmljdF9pZDogX3ZtLnVzZXIuZGlzdHJpY3RfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLnZpbGxhZ2VfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci52aWxsYWdlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCd0LDRgdC10LvQtdC90L3Ri9C5INC/0YPQvdC60YJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0JLQstC10LTQuNGC0LUg0L3QsNC30LLQsNC90LjQtSDRgNCw0LnQvtC90LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF92bS51c2VyLnZpbGxhZ2VfaWQgPSB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS51c2VyLmRpc3RyaWN0X2lkID4gMFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLnVzZXIudmlsbGFnZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0KPQu9C40YbQsCwg0LTQvtC8XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5hZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJhZGRyZXNzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZvcm1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhcHBlbmQtaWNvblwiOiBfdm0uc2hvdyA/IFwibWRpLWV5ZVwiIDogXCJtZGktZXllLW9mZlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IF92bS5zaG93ID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0J/QsNGA0L7Qu9GMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGljazphcHBlbmRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9ICFfdm0uc2hvd1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwicGFzc3dvcmRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IF92bS5zaG93ID8gXCJtZGktZXllXCIgOiBcIm1kaS1leWUtb2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogX3ZtLnNob3cgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQn9C+0LTRgtCy0LXRgNC00LjRgtC1INC/0LDRgNC+0LvRjFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2s6YXBwZW5kXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSAhX3ZtLnNob3dcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLnBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciBtYi02XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgaGVpZ2h0OiBcImF1dG9cIiwgdGlsZTogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uaXNGb3JtVmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS51cGRhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9