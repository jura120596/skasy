(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_UserEdit_vue"],{

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
  updated: function updated() {
    console.log(JSON.stringify(this.district));
  },
  data: function data(vm) {
    console.log({
      id: vm.$attrs.value
    });
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
    value: function value(id) {
      this.district = {
        id: id
      };
    },
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UserEdit",
  components: {
    DistrictAutocomplete: _components_DistrictAutocomplete__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data(vm) {
    return {
      user: {},
      messages: {
        name: '',
        second_name: '',
        last_name: '',
        address: '',
        email: '',
        phone: '',
        points: '',
        card_id: '',
        village_id: '',
        district_id: ''
      }
    };
  },
  computed: {
    isAdmin: function isAdmin() {
      return this.$store.state.auth.user.role >= 1024;
    }
  },
  mounted: function mounted() {
    var _this = this;

    var modelId = this.$route.params.id;

    if (modelId != 0) {
      window.axios.get('/user/' + modelId).then(function (response) {
        _this.user = _objectSpread({}, response.data.data);
      })["catch"](function (e) {
        var _e$response;

        console.log(e);
        _this.$root.$children[0].snackbarText = (e === null || e === void 0 ? void 0 : (_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.error) || 'Произошла ошибка';
        _this.$root.$children[0].snackbar = true;
      });
    }
  },
  methods: {
    save: function save() {
      var _this2 = this;

      (this.user.id ? window.axios.put('/user/' + this.user.id, this.user) : window.axios.post('/user/', this.user)).then(function (r) {
        _this2.$router.push({
          name: "users"
        });
      })["catch"](function (e) {
        if (e.response && e.response.status === 422) {
          var errors = e.response.data.errors;
          Object.keys(_this2.messages).forEach(function (k) {
            var _errors$k;

            _this2.messages[k] = ((_errors$k = errors[k]) === null || _errors$k === void 0 ? void 0 : _errors$k[0]) || '';
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

/***/ "./resources/js/pages/UserEdit.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/UserEdit.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserEdit_vue_vue_type_template_id_64688f04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=template&id=64688f04& */ "./resources/js/pages/UserEdit.vue?vue&type=template&id=64688f04&");
/* harmony import */ var _UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=script&lang=js& */ "./resources/js/pages/UserEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserEdit_vue_vue_type_template_id_64688f04___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserEdit_vue_vue_type_template_id_64688f04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/UserEdit.vue"
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

/***/ "./resources/js/pages/UserEdit.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/UserEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/pages/UserEdit.vue?vue&type=template&id=64688f04&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/UserEdit.vue?vue&type=template&id=64688f04& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_64688f04___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_64688f04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_64688f04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserEdit.vue?vue&type=template&id=64688f04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserEdit.vue?vue&type=template&id=64688f04&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserEdit.vue?vue&type=template&id=64688f04&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserEdit.vue?vue&type=template&id=64688f04& ***!
  \***************************************************************************************************************************************************************************************************************/
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
        domProps: { textContent: _vm._s("Редактирование пользователя") }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: "Имя",
          disabled: !_vm.isAdmin,
          "error-messages": _vm.messages.name
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
          label: "Фамилия",
          disabled: !_vm.isAdmin,
          "error-messages": _vm.messages.second_name
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
          label: "Отчество",
          disabled: !_vm.isAdmin,
          "error-messages": _vm.messages.last_name
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
          label: "Почта",
          disabled: !_vm.isAdmin,
          "error-messages": _vm.messages.email
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
          label: "Телефон",
          counter: "10",
          disabled: !_vm.isAdmin,
          "error-messages": _vm.messages.phone
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
        attrs: { label: "Баллы", "error-messages": _vm.messages.points },
        model: {
          value: _vm.user.points,
          callback: function($$v) {
            _vm.$set(_vm.user, "points", $$v)
          },
          expression: "user.points"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: "Номер карты",
          disabled: !_vm.isAdmin,
          "error-messages": _vm.messages.card_id
        },
        model: {
          value: _vm.user.card_id,
          callback: function($$v) {
            _vm.$set(_vm.user, "card_id", $$v)
          },
          expression: "user.card_id"
        }
      }),
      _vm._v(" "),
      _vm.user.id != _vm.$store.state.auth.user.id
        ? _c("DistrictAutocomplete", {
            attrs: {
              "error-messages": _vm.messages.district_id,
              value: _vm.user.district_id,
              disabled: !_vm.isAdmin,
              label: "Район",
              placeholder: "Введите название района"
            },
            on: {
              input: function(val) {
                return (_vm.user.district_id = val)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.user.district_id && _vm.user.id != _vm.$store.state.auth.user.id
        ? _c("DistrictAutocomplete", {
            attrs: {
              district_id: _vm.user.district_id,
              "error-messages": _vm.messages.village_id,
              value: _vm.user.village_id,
              disabled: !_vm.isAdmin,
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
      _c("v-text-field", {
        attrs: {
          disabled: !_vm.user.village_id || !_vm.isAdmin,
          label: "Улица, дом",
          "error-messages": _vm.messages.address
        },
        model: {
          value: _vm.user.address,
          callback: function($$v) {
            _vm.$set(_vm.user, "address", $$v)
          },
          expression: "user.address"
        }
      }),
      _vm._v(" "),
      _vm.isAdmin && _vm.user.id && (_vm.user.role & 1) > 0
        ? _c("v-checkbox", {
            attrs: { label: "Староста" },
            on: {
              change: function() {
                _vm.user.admin = false
                _vm.user.librarian = false
              }
            },
            model: {
              value: _vm.user.curator,
              callback: function($$v) {
                _vm.$set(_vm.user, "curator", $$v)
              },
              expression: "user.curator"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.isAdmin && !_vm.user.id
        ? _c("v-checkbox", {
            attrs: { label: "Администратор" },
            on: {
              change: function() {
                _vm.user.curator = false
                _vm.user.librarian = false
              }
            },
            model: {
              value: _vm.user.admin,
              callback: function($$v) {
                _vm.$set(_vm.user, "admin", $$v)
              },
              expression: "user.admin"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.isAdmin && !_vm.user.id
        ? _c("v-checkbox", {
            attrs: { label: "Библиотекарь" },
            on: {
              change: function() {
                _vm.user.curator = false
                _vm.user.admin = false
              }
            },
            model: {
              value: _vm.user.librarian,
              callback: function($$v) {
                _vm.$set(_vm.user, "librarian", $$v)
              },
              expression: "user.librarian"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "save-btn-text",
          attrs: {
            color: "success",
            disabled:
              !_vm.isAdmin ||
              !(
                _vm.user.name &&
                _vm.user.second_name &&
                _vm.user.email &&
                _vm.user.phone
              )
          },
          on: { click: _vm.save }
        },
        [_vm._v("\n        Сохранить\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGlzdHJpY3RBdXRvY29tcGxldGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvVXNlckVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rpc3RyaWN0QXV0b2NvbXBsZXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlckVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rpc3RyaWN0QXV0b2NvbXBsZXRlLnZ1ZT82MDJjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Vc2VyRWRpdC52dWU/NGM5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWU/ZTQ0ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlckVkaXQudnVlPzJkOGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBLDhCQURBO0FBRUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBS0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFMQSxHQUZBO0FBWUEsU0FaQSxxQkFZQTtBQUNBO0FBQ0EsR0FkQTtBQWVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHNCQUZBO0FBR0E7QUFBQTtBQUFBLE9BSEE7QUFJQSxnQkFKQTtBQUtBLGNBTEE7QUFNQTtBQU5BO0FBUUEsR0F6QkE7QUEwQkE7QUFDQSxTQURBLGlCQUNBLEVBREEsRUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEtBSEE7QUFJQSxlQUpBLHlCQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLFVBVEEsa0JBU0EsR0FUQSxFQVNBO0FB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TztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsZUFBZTtBQUNmLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfVXNlckVkaXRfdnVlYmVlOGUzZTAwZWE0ZDhhYzZjNzguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbiAgICA8di1hdXRvY29tcGxldGVcbiAgICAgICAgdi1tb2RlbD1cImRpc3RyaWN0XCJcbiAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50ID8gJGV2ZW50LmlkIDogJGV2ZW50KVwiXG4gICAgICAgIDppdGVtcz1cImVudHJpZXNcIlxuICAgICAgICA6bG9hZGluZz1cImlzTG9hZGluZ1wiXG4gICAgICAgIDpzZWFyY2gtaW5wdXQuc3luYz1cInNlYXJjaFwiXG4gICAgICAgIGhpZGUtbm8tZGF0YVxuICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgaXRlbS10ZXh0PVwibmFtZVwiXG4gICAgICAgIGl0ZW0tdmFsdWU9XCJpZFwiXG4gICAgICAgIHJldHVybi1vYmplY3RcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwiY2hyb21lLW9mZlwiXG4gICAgICAgIHYtYmluZD1cIiRhdHRyc1wiXG4gICAgPjwvdi1hdXRvY29tcGxldGU+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJEaXN0cmljdEF1dG9jb21wbGV0ZVwiLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgbGV2ZWw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJzEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc3RyaWN0X2lkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVkKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5kaXN0cmljdCkpXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coe2lkOiB2bS4kYXR0cnMudmFsdWV9KVxuICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgZW50cmllczogW10sXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXN0cmljdDoge2lkOiB2bS4kYXR0cnMudmFsdWV9LFxuICAgICAgICAgICAgICAgIHNlYXJjaDogJycsXG4gICAgICAgICAgICAgICAgbGFzdDogJycsXG4gICAgICAgICAgICAgICAgdDogbnVsbCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICB2YWx1ZShpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzdHJpY3QgPSB7aWR9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzdHJpY3RfaWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzdHJpY3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgbnVsbClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWFyY2godmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW50cmllcy5sZW5ndGggPiAwICYmIHRoaXMubGFzdCAmJiB2YWwgPT09IHRoaXMubGFzdCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnQgIT0gbnVsbCkgY2xlYXJUaW1lb3V0KHRoaXMudCk7XG4gICAgICAgICAgICAgICAgdGhpcy50ID0gc2V0VGltZW91dCgoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy9kaXN0cmljdD8nICsgKG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXJnc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyX3BhZ2U6IC0xLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHRoaXMuZGlzdHJpY3RfaWQgPyB7cGFyZW50X2Rpc3RyaWN0X2lkOiB0aGlzLmRpc3RyaWN0X2lkfSA6IHt9KVxuICAgICAgICAgICAgICAgICAgICB9KS50b1N0cmluZygpKSwpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSByZXMuZGF0YS50b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVudHJpZXMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdCA9IG5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+ICh0aGlzLmlzTG9hZGluZyA9IGZhbHNlKSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwLCBbdmFsICsgJyddKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250YWluZXJcbiAgICAgICAgICAgIGNsYXNzPVwiY292ZXJcIj5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cIifQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjydcIj5cbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCY0LzRj1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIubmFtZVwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzQWRtaW5cIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLm5hbWVcIlxuICAgICAgICAvPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQpNCw0LzQuNC70LjRj1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuc2Vjb25kX25hbWVcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpc0FkbWluXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5zZWNvbmRfbmFtZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCe0YLRh9C10YHRgtCy0L5cIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzQWRtaW5cIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmxhc3RfbmFtZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCf0L7Rh9GC0LBcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaXNBZG1pblwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMuZW1haWxcIlxuICAgICAgICAvPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQotC10LvQtdGE0L7QvVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIucGhvbmVcIlxuICAgICAgICAgICAgICAgIGNvdW50ZXI9XCIxMFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzQWRtaW5cIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLnBob25lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0JHQsNC70LvRi1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIucG9pbnRzXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5wb2ludHNcIlxuICAgICAgICAvPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQndC+0LzQtdGAINC60LDRgNGC0YtcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmNhcmRfaWRcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpc0FkbWluXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5jYXJkX2lkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPERpc3RyaWN0QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICB2LWlmPVwidXNlci5pZCAhPSAkc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkXCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmRpc3RyaWN0X2lkXCJcbiAgICAgICAgICAgIEBpbnB1dD1cIih2YWwpID0+IHVzZXIuZGlzdHJpY3RfaWQgPSB2YWxcIlxuICAgICAgICAgICAgOnZhbHVlPVwidXNlci5kaXN0cmljdF9pZFwiXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaXNBZG1pblwiXG4gICAgICAgICAgICBsYWJlbD1cItCg0LDQudC+0L1cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQvdCw0LfQstCw0L3QuNC1INGA0LDQudC+0L3QsFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxEaXN0cmljdEF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgdi1pZj1cInVzZXIuZGlzdHJpY3RfaWQgJiYgdXNlci5pZCAhPSAkc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkXCJcbiAgICAgICAgICAgIDpkaXN0cmljdF9pZD1cInVzZXIuZGlzdHJpY3RfaWRcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMudmlsbGFnZV9pZFwiXG4gICAgICAgICAgICBAaW5wdXQ9XCIodmFsKSA9PiB1c2VyLnZpbGxhZ2VfaWQgPSB2YWxcIlxuICAgICAgICAgICAgOnZhbHVlPVwidXNlci52aWxsYWdlX2lkXCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpc0FkbWluXCJcbiAgICAgICAgICAgIGxldmVsPVwiMlwiXG4gICAgICAgICAgICBsYWJlbD1cItCd0LDRgdC10LvQtdC90L3Ri9C5INC/0YPQvdC60YJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQvdCw0LfQstCw0L3QuNC1INGA0LDQudC+0L3QsFwiXG4gICAgICAgIC8+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cIiF1c2VyLnZpbGxhZ2VfaWQgfHwgIWlzQWRtaW5cIlxuICAgICAgICAgICAgbGFiZWw9XCLQo9C70LjRhtCwLCDQtNC+0LxcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuYWRkcmVzc1wiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5hZGRyZXNzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHYtY2hlY2tib3hcbiAgICAgICAgICAgICAgICB2LWlmPVwiaXNBZG1pbiAmJiB1c2VyLmlkICYmICh1c2VyLnJvbGUgJiAxKT4wXCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVwiKCkgPT4ge3VzZXIuYWRtaW4gPSBmYWxzZTsgdXNlci5saWJyYXJpYW4gPSBmYWxzZX1cIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0KHRgtCw0YDQvtGB0YLQsFwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuY3VyYXRvclwiXG4gICAgICAgIC8+XG4gICAgICAgIDx2LWNoZWNrYm94XG4gICAgICAgICAgICAgICAgdi1pZj1cImlzQWRtaW4gJiYgIXVzZXIuaWRcIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCIoKSA9PiB7dXNlci5jdXJhdG9yID0gZmFsc2U7IHVzZXIubGlicmFyaWFuID0gZmFsc2V9XCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5hZG1pblwiXG4gICAgICAgIC8+XG4gICAgICAgIDx2LWNoZWNrYm94XG4gICAgICAgICAgICAgICAgdi1pZj1cImlzQWRtaW4gJiYgIXVzZXIuaWRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0JHQuNCx0LvQuNC+0YLQtdC60LDRgNGMXCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVwiKCkgPT4ge3VzZXIuY3VyYXRvciA9IGZhbHNlOyB1c2VyLmFkbWluID0gZmFsc2V9XCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5saWJyYXJpYW5cIlxuICAgICAgICAvPlxuICAgICAgICA8di1zcGFjZXIvPlxuICAgICAgICA8di1idG4gY2xhc3M9XCJzYXZlLWJ0bi10ZXh0XCJcbiAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICBAY2xpY2s9XCJzYXZlXCJcbiAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpc0FkbWluIHx8ICEodXNlci5uYW1lICYmIHVzZXIuc2Vjb25kX25hbWUgJiYgdXNlci5lbWFpbCYmIHVzZXIucGhvbmUpXCI+XG4gICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcbiAgICAgICAgPC92LWJ0bj5cbiAgICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRGlzdHJpY3RBdXRvY29tcGxldGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGlzdHJpY3RBdXRvY29tcGxldGVcIjtcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiVXNlckVkaXRcIixcbiAgICAgICAgY29tcG9uZW50czoge0Rpc3RyaWN0QXV0b2NvbXBsZXRlfSxcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVzZXI6IHt9LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY2FyZF9pZDogJycsXG4gICAgICAgICAgICAgICAgICAgIHZpbGxhZ2VfaWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkaXN0cmljdF9pZDogJycsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaXNBZG1pbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPj0gMTAyNDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWxJZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcbiAgICAgICAgICAgIGlmIChtb2RlbElkICE9IDApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvdXNlci8nICsgbW9kZWxJZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gey4uLnJlc3BvbnNlLmRhdGEuZGF0YX07XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9IGU/LnJlc3BvbnNlPy5lcnJvciB8fCAn0J/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2F2ZSgpIHtcbiAgICAgICAgICAgICAgICAodGhpcy51c2VyLmlkXG4gICAgICAgICAgICAgICAgICAgID8gd2luZG93LmF4aW9zLnB1dCgnL3VzZXIvJyArICh0aGlzLnVzZXIuaWQpLCB0aGlzLnVzZXIpXG4gICAgICAgICAgICAgICAgICAgIDogd2luZG93LmF4aW9zLnBvc3QoJy91c2VyLycsIHRoaXMudXNlcikpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogXCJ1c2Vyc1wifSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnJlc3BvbnNlICYmIGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1lc3NhZ2VzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1trXSA9IGVycm9yc1trXT8uWzBdIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTBmMjZlZmUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGlzdHJpY3RBdXRvY29tcGxldGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImUwZjI2ZWZlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZTBmMjZlZmUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZTBmMjZlZmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZTBmMjZlZmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Rpc3RyaWN0QXV0b2NvbXBsZXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMGYyNmVmZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlMGYyNmVmZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGlzdHJpY3RBdXRvY29tcGxldGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VyRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjQ2ODhmMDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlckVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VyRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY0Njg4ZjA0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY0Njg4ZjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY0Njg4ZjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Vc2VyRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjQ2ODhmMDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjQ2ODhmMDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Vc2VyRWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGlzdHJpY3RBdXRvY29tcGxldGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGlzdHJpY3RBdXRvY29tcGxldGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWF1dG9jb21wbGV0ZVwiLFxuICAgIF92bS5fYihcbiAgICAgIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpdGVtczogX3ZtLmVudHJpZXMsXG4gICAgICAgICAgbG9hZGluZzogX3ZtLmlzTG9hZGluZyxcbiAgICAgICAgICBcInNlYXJjaC1pbnB1dFwiOiBfdm0uc2VhcmNoLFxuICAgICAgICAgIFwiaGlkZS1uby1kYXRhXCI6IFwiXCIsXG4gICAgICAgICAgY2xlYXJhYmxlOiBcIlwiLFxuICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwibmFtZVwiLFxuICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcImlkXCIsXG4gICAgICAgICAgXCJyZXR1cm4tb2JqZWN0XCI6IFwiXCIsXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiBcImNocm9tZS1vZmZcIlxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJpbnB1dFwiLCAkZXZlbnQgPyAkZXZlbnQuaWQgOiAkZXZlbnQpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZTpzZWFyY2hJbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnRcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlOnNlYXJjaC1pbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5kaXN0cmljdCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uZGlzdHJpY3QgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlzdHJpY3RcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ2LWF1dG9jb21wbGV0ZVwiLFxuICAgICAgX3ZtLiRhdHRycyxcbiAgICAgIGZhbHNlXG4gICAgKVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb3ZlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgIGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiKSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IFwi0JjQvNGPXCIsXG4gICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uaXNBZG1pbixcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5uYW1lXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS51c2VyLm5hbWUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIubmFtZVwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogXCLQpNCw0LzQuNC70LjRj1wiLFxuICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmlzQWRtaW4sXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMuc2Vjb25kX25hbWVcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuc2Vjb25kX25hbWUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwic2Vjb25kX25hbWVcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnNlY29uZF9uYW1lXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBcItCe0YLRh9C10YHRgtCy0L5cIixcbiAgICAgICAgICBkaXNhYmxlZDogIV92bS5pc0FkbWluLFxuICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLmxhc3RfbmFtZVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5sYXN0X25hbWUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwibGFzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5sYXN0X25hbWVcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IFwi0J/QvtGH0YLQsFwiLFxuICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmlzQWRtaW4sXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMuZW1haWxcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuZW1haWwsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwiZW1haWxcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBcItCi0LXQu9C10YTQvtC9XCIsXG4gICAgICAgICAgY291bnRlcjogXCIxMFwiLFxuICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmlzQWRtaW4sXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMucGhvbmVcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIucGhvbmUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwicGhvbmVcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnBob25lXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQkdCw0LvQu9GLXCIsIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLnBvaW50cyB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5wb2ludHMsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwicG9pbnRzXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5wb2ludHNcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IFwi0J3QvtC80LXRgCDQutCw0YDRgtGLXCIsXG4gICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uaXNBZG1pbixcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5jYXJkX2lkXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS51c2VyLmNhcmRfaWQsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwiY2FyZF9pZFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuY2FyZF9pZFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS51c2VyLmlkICE9IF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkXG4gICAgICAgID8gX2MoXCJEaXN0cmljdEF1dG9jb21wbGV0ZVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5kaXN0cmljdF9pZCxcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLmRpc3RyaWN0X2lkLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS5pc0FkbWluLFxuICAgICAgICAgICAgICBsYWJlbDogXCLQoNCw0LnQvtC9XCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcItCS0LLQtdC00LjRgtC1INC90LDQt9Cy0LDQvdC40LUg0YDQsNC50L7QvdCwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfdm0udXNlci5kaXN0cmljdF9pZCA9IHZhbClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnVzZXIuZGlzdHJpY3RfaWQgJiYgX3ZtLnVzZXIuaWQgIT0gX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWRcbiAgICAgICAgPyBfYyhcIkRpc3RyaWN0QXV0b2NvbXBsZXRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGRpc3RyaWN0X2lkOiBfdm0udXNlci5kaXN0cmljdF9pZCxcbiAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMudmlsbGFnZV9pZCxcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLnZpbGxhZ2VfaWQsXG4gICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmlzQWRtaW4sXG4gICAgICAgICAgICAgIGxldmVsOiBcIjJcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwi0J3QsNGB0LXQu9C10L3QvdGL0Lkg0L/Rg9C90LrRglwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQktCy0LXQtNC40YLQtSDQvdCw0LfQstCw0L3QuNC1INGA0LDQudC+0L3QsFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoX3ZtLnVzZXIudmlsbGFnZV9pZCA9IHZhbClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLnVzZXIudmlsbGFnZV9pZCB8fCAhX3ZtLmlzQWRtaW4sXG4gICAgICAgICAgbGFiZWw6IFwi0KPQu9C40YbQsCwg0LTQvtC8XCIsXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMuYWRkcmVzc1xuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5hZGRyZXNzLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcImFkZHJlc3NcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmFkZHJlc3NcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaXNBZG1pbiAmJiBfdm0udXNlci5pZCAmJiAoX3ZtLnVzZXIucm9sZSAmIDEpID4gMFxuICAgICAgICA/IF9jKFwidi1jaGVja2JveFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQodGC0LDRgNC+0YHRgtCwXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3ZtLnVzZXIuYWRtaW4gPSBmYWxzZVxuICAgICAgICAgICAgICAgIF92bS51c2VyLmxpYnJhcmlhbiA9IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuY3VyYXRvcixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcImN1cmF0b3JcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuY3VyYXRvclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaXNBZG1pbiAmJiAhX3ZtLnVzZXIuaWRcbiAgICAgICAgPyBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi0JDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YBcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfdm0udXNlci5jdXJhdG9yID0gZmFsc2VcbiAgICAgICAgICAgICAgICBfdm0udXNlci5saWJyYXJpYW4gPSBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLmFkbWluLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwiYWRtaW5cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuYWRtaW5cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmlzQWRtaW4gJiYgIV92bS51c2VyLmlkXG4gICAgICAgID8gX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcItCR0LjQsdC70LjQvtGC0LXQutCw0YDRjFwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF92bS51c2VyLmN1cmF0b3IgPSBmYWxzZVxuICAgICAgICAgICAgICAgIF92bS51c2VyLmFkbWluID0gZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5saWJyYXJpYW4sXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJsaWJyYXJpYW5cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIubGlicmFyaWFuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1idG5cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNhdmUtYnRuLXRleHRcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICFfdm0uaXNBZG1pbiB8fFxuICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgIF92bS51c2VyLm5hbWUgJiZcbiAgICAgICAgICAgICAgICBfdm0udXNlci5zZWNvbmRfbmFtZSAmJlxuICAgICAgICAgICAgICAgIF92bS51c2VyLmVtYWlsICYmXG4gICAgICAgICAgICAgICAgX3ZtLnVzZXIucGhvbmVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXFxuICAgIFwiKV1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=