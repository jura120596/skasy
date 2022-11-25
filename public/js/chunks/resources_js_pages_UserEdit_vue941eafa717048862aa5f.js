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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        _this.user = response.data.data;
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

      window.axios.put('/user/' + this.user.id, this.user).then(function (r) {
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
      _c("DistrictAutocomplete", {
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
      }),
      _vm._v(" "),
      _c("DistrictAutocomplete", {
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
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          disabled: !_vm.user.village_id && !_vm.isAdmin,
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
      _vm.isAdmin
        ? _c("v-checkbox", {
            attrs: { label: "Староста" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRGlzdHJpY3RBdXRvY29tcGxldGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvVXNlckVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rpc3RyaWN0QXV0b2NvbXBsZXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlckVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0Rpc3RyaWN0QXV0b2NvbXBsZXRlLnZ1ZT82MDJjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Vc2VyRWRpdC52dWU/NGM5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWU/ZTQ0ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlckVkaXQudnVlPzJkOGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBLDhCQURBO0FBRUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBS0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFMQSxHQUZBO0FBWUEsU0FaQSxxQkFZQTtBQUNBO0FBQ0EsR0FkQTtBQWVBO0FBQUE7QUFDQSxpQkFEQTtBQUVBLHNCQUZBO0FBR0E7QUFBQTtBQUFBLE9BSEE7QUFJQSxnQkFKQTtBQUtBLGNBTEE7QUFNQTtBQU5BO0FBQUEsR0FmQTtBQXVCQTtBQUNBLGVBREEseUJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBO0FBTUEsVUFOQSxrQkFNQSxHQU5BLEVBTUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBREE7QUFFQSw0QkFGQTtBQUdBO0FBSEEsV0FJQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsZUFBZTtBQUNmLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfVXNlckVkaXRfdnVlOTQxZWFmYTcxNzA0ODg2MmFhNWYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbiAgICA8di1hdXRvY29tcGxldGVcbiAgICAgICAgdi1tb2RlbD1cImRpc3RyaWN0XCJcbiAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50ID8gJGV2ZW50LmlkIDogJGV2ZW50KVwiXG4gICAgICAgIDppdGVtcz1cImVudHJpZXNcIlxuICAgICAgICA6bG9hZGluZz1cImlzTG9hZGluZ1wiXG4gICAgICAgIDpzZWFyY2gtaW5wdXQuc3luYz1cInNlYXJjaFwiXG4gICAgICAgIGhpZGUtbm8tZGF0YVxuICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgaXRlbS10ZXh0PVwibmFtZVwiXG4gICAgICAgIGl0ZW0tdmFsdWU9XCJpZFwiXG4gICAgICAgIHJldHVybi1vYmplY3RcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwiY2hyb21lLW9mZlwiXG4gICAgICAgIHYtYmluZD1cIiRhdHRyc1wiXG4gICAgPjwvdi1hdXRvY29tcGxldGU+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJEaXN0cmljdEF1dG9jb21wbGV0ZVwiLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgbGV2ZWw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJzEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc3RyaWN0X2lkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy52YWx1ZSlcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogKHZtKSA9PiAoe1xuICAgICAgICAgICAgZW50cmllczogW10sXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGlzdHJpY3Q6IHtpZDp2bS4kYXR0cnMudmFsdWV9LFxuICAgICAgICAgICAgc2VhcmNoOiAnJyxcbiAgICAgICAgICAgIGxhc3Q6ICcnLFxuICAgICAgICAgICAgdDogbnVsbCxcbiAgICAgICAgfSksXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBkaXN0cmljdF9pZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0cmljdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBudWxsKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlYXJjaCh2YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbnRyaWVzLmxlbmd0aCA+IDAgJiYgdGhpcy5sYXN0ICYmIHZhbCA9PT0gdGhpcy5sYXN0KSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudCAhPSBudWxsKSBjbGVhclRpbWVvdXQodGhpcy50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnQgPSBzZXRUaW1lb3V0KCguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL2Rpc3RyaWN0PycgKyAobmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcmdzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJfcGFnZTogLTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4odGhpcy5kaXN0cmljdF9pZD8ge3BhcmVudF9kaXN0cmljdF9pZDp0aGlzLmRpc3RyaWN0X2lkfSA6IHt9KVxuICAgICAgICAgICAgICAgICAgICB9KS50b1N0cmluZygpKSwpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSByZXMuZGF0YS50b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVudHJpZXMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdCA9IG5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+ICh0aGlzLmlzTG9hZGluZyA9IGZhbHNlKSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwLCBbdmFsICsgJyddKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250YWluZXJcbiAgICAgICAgICAgIGNsYXNzPVwiY292ZXJcIj5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cIifQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjydcIj5cbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCY0LzRj1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIubmFtZVwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzQWRtaW5cIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLm5hbWVcIlxuICAgICAgICAvPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQpNCw0LzQuNC70LjRj1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuc2Vjb25kX25hbWVcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpc0FkbWluXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5zZWNvbmRfbmFtZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCe0YLRh9C10YHRgtCy0L5cIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzQWRtaW5cIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmxhc3RfbmFtZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCf0L7Rh9GC0LBcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaXNBZG1pblwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMuZW1haWxcIlxuICAgICAgICAvPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQotC10LvQtdGE0L7QvVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIucGhvbmVcIlxuICAgICAgICAgICAgICAgIGNvdW50ZXI9XCIxMFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzQWRtaW5cIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLnBob25lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0JHQsNC70LvRi1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIucG9pbnRzXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5wb2ludHNcIlxuICAgICAgICAvPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQndC+0LzQtdGAINC60LDRgNGC0YtcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmNhcmRfaWRcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpc0FkbWluXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5jYXJkX2lkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPERpc3RyaWN0QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5kaXN0cmljdF9pZFwiXG4gICAgICAgICAgICBAaW5wdXQ9XCIodmFsKSA9PiB1c2VyLmRpc3RyaWN0X2lkID0gdmFsXCJcbiAgICAgICAgICAgIDp2YWx1ZT1cInVzZXIuZGlzdHJpY3RfaWRcIlxuICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzQWRtaW5cIlxuICAgICAgICAgICAgbGFiZWw9XCLQoNCw0LnQvtC9XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0L3QsNC30LLQsNC90LjQtSDRgNCw0LnQvtC90LBcIlxuICAgICAgICAvPlxuICAgICAgICA8RGlzdHJpY3RBdXRvY29tcGxldGVcbiAgICAgICAgICAgIDpkaXN0cmljdF9pZD1cInVzZXIuZGlzdHJpY3RfaWRcIlxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMudmlsbGFnZV9pZFwiXG4gICAgICAgICAgICBAaW5wdXQ9XCIodmFsKSA9PiB1c2VyLnZpbGxhZ2VfaWQgPSB2YWxcIlxuICAgICAgICAgICAgOnZhbHVlPVwidXNlci52aWxsYWdlX2lkXCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpc0FkbWluXCJcbiAgICAgICAgICAgIGxldmVsPVwiMlwiXG4gICAgICAgICAgICBsYWJlbD1cItCd0LDRgdC10LvQtdC90L3Ri9C5INC/0YPQvdC60YJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQvdCw0LfQstCw0L3QuNC1INGA0LDQudC+0L3QsFwiXG4gICAgICAgIC8+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cIiF1c2VyLnZpbGxhZ2VfaWQgJiYgIWlzQWRtaW5cIlxuICAgICAgICAgICAgbGFiZWw9XCLQo9C70LjRhtCwLCDQtNC+0LxcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuYWRkcmVzc1wiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5hZGRyZXNzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHYtY2hlY2tib3hcbiAgICAgICAgICAgICAgICB2LWlmPVwiaXNBZG1pblwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQodGC0LDRgNC+0YHRgtCwXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5jdXJhdG9yXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgICAgPHYtYnRuIGNsYXNzPVwic2F2ZS1idG4tdGV4dFwiXG4gICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgQGNsaWNrPVwic2F2ZVwiXG4gICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaXNBZG1pbiB8fCAhKHVzZXIubmFtZSAmJiB1c2VyLnNlY29uZF9uYW1lICYmIHVzZXIuZW1haWwmJiB1c2VyLnBob25lKVwiPlxuICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXG4gICAgICAgIDwvdi1idG4+XG4gICAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IERpc3RyaWN0QXV0b2NvbXBsZXRlIGZyb20gXCIuLi9jb21wb25lbnRzL0Rpc3RyaWN0QXV0b2NvbXBsZXRlXCI7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIlVzZXJFZGl0XCIsXG4gICAgICAgIGNvbXBvbmVudHM6IHtEaXN0cmljdEF1dG9jb21wbGV0ZX0sXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kX25hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBsYXN0X25hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogJycsXG4gICAgICAgICAgICAgICAgICAgIGNhcmRfaWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICB2aWxsYWdlX2lkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzdHJpY3RfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGlzQWRtaW4oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID49IDEwMjQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgbGV0IG1vZGVsSWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XG4gICAgICAgICAgICBpZiAobW9kZWxJZCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL3VzZXIvJyArIG1vZGVsSWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXJUZXh0ID0gZT8ucmVzcG9uc2U/LmVycm9yIHx8ICfQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kY2hpbGRyZW5bMF0uc25hY2tiYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzYXZlKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wdXQoJy91c2VyLycgKyAodGhpcy51c2VyLmlkKSwgdGhpcy51c2VyKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6IFwidXNlcnNcIn0pO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5yZXNwb25zZSAmJiBlLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JzID0gZS5yZXNwb25zZS5kYXRhLmVycm9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGlzdHJpY3RBdXRvY29tcGxldGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUwZjI2ZWZlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Rpc3RyaWN0QXV0b2NvbXBsZXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGlzdHJpY3RBdXRvY29tcGxldGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlMGYyNmVmZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2UwZjI2ZWZlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2UwZjI2ZWZlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2UwZjI2ZWZlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EaXN0cmljdEF1dG9jb21wbGV0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTBmMjZlZmUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTBmMjZlZmUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0Rpc3RyaWN0QXV0b2NvbXBsZXRlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlckVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0Njg4ZjA0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXJFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlckVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NDY4OGYwNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NDY4OGYwNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NDY4OGYwNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVXNlckVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0Njg4ZjA0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY0Njg4ZjA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvVXNlckVkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Rpc3RyaWN0QXV0b2NvbXBsZXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Rpc3RyaWN0QXV0b2NvbXBsZXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1hdXRvY29tcGxldGVcIixcbiAgICBfdm0uX2IoXG4gICAgICB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaXRlbXM6IF92bS5lbnRyaWVzLFxuICAgICAgICAgIGxvYWRpbmc6IF92bS5pc0xvYWRpbmcsXG4gICAgICAgICAgXCJzZWFyY2gtaW5wdXRcIjogX3ZtLnNlYXJjaCxcbiAgICAgICAgICBcImhpZGUtbm8tZGF0YVwiOiBcIlwiLFxuICAgICAgICAgIGNsZWFyYWJsZTogXCJcIixcbiAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBcIm5hbWVcIixcbiAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJpZFwiLFxuICAgICAgICAgIFwicmV0dXJuLW9iamVjdFwiOiBcIlwiLFxuICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJjaHJvbWUtb2ZmXCJcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRcIiwgJGV2ZW50ID8gJGV2ZW50LmlkIDogJGV2ZW50KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGU6c2VhcmNoSW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0uc2VhcmNoID0gJGV2ZW50XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZTpzZWFyY2gtaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0uc2VhcmNoID0gJGV2ZW50XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZGlzdHJpY3QsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLmRpc3RyaWN0ID0gJCR2XG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImRpc3RyaWN0XCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidi1hdXRvY29tcGxldGVcIixcbiAgICAgIF92bS4kYXR0cnMsXG4gICAgICBmYWxzZVxuICAgIClcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY292ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9LFxuICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cIikgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBcItCY0LzRj1wiLFxuICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmlzQWRtaW4sXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMubmFtZVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5uYW1lLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLm5hbWVcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IFwi0KTQsNC80LjQu9C40Y9cIixcbiAgICAgICAgICBkaXNhYmxlZDogIV92bS5pc0FkbWluLFxuICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLnNlY29uZF9uYW1lXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS51c2VyLnNlY29uZF9uYW1lLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcInNlY29uZF9uYW1lXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5zZWNvbmRfbmFtZVwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogXCLQntGC0YfQtdGB0YLQstC+XCIsXG4gICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uaXNBZG1pbixcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5sYXN0X25hbWVcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIubGFzdF9uYW1lLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcImxhc3RfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIubGFzdF9uYW1lXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBcItCf0L7Rh9GC0LBcIixcbiAgICAgICAgICBkaXNhYmxlZDogIV92bS5pc0FkbWluLFxuICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLmVtYWlsXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS51c2VyLmVtYWlsLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcImVtYWlsXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5lbWFpbFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogXCLQotC10LvQtdGE0L7QvVwiLFxuICAgICAgICAgIGNvdW50ZXI6IFwiMTBcIixcbiAgICAgICAgICBkaXNhYmxlZDogIV92bS5pc0FkbWluLFxuICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLnBob25lXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS51c2VyLnBob25lLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcInBob25lXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5waG9uZVwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi0JHQsNC70LvRi1wiLCBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5wb2ludHMgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIucG9pbnRzLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcInBvaW50c1wiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIucG9pbnRzXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBcItCd0L7QvNC10YAg0LrQsNGA0YLRi1wiLFxuICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmlzQWRtaW4sXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMuY2FyZF9pZFxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5jYXJkX2lkLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcImNhcmRfaWRcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmNhcmRfaWRcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIkRpc3RyaWN0QXV0b2NvbXBsZXRlXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5kaXN0cmljdF9pZCxcbiAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuZGlzdHJpY3RfaWQsXG4gICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uaXNBZG1pbixcbiAgICAgICAgICBsYWJlbDogXCLQoNCw0LnQvtC9XCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0JLQstC10LTQuNGC0LUg0L3QsNC30LLQsNC90LjQtSDRgNCw0LnQvtC90LBcIlxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiAoX3ZtLnVzZXIuZGlzdHJpY3RfaWQgPSB2YWwpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIkRpc3RyaWN0QXV0b2NvbXBsZXRlXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBkaXN0cmljdF9pZDogX3ZtLnVzZXIuZGlzdHJpY3RfaWQsXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMudmlsbGFnZV9pZCxcbiAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIudmlsbGFnZV9pZCxcbiAgICAgICAgICBkaXNhYmxlZDogIV92bS5pc0FkbWluLFxuICAgICAgICAgIGxldmVsOiBcIjJcIixcbiAgICAgICAgICBsYWJlbDogXCLQndCw0YHQtdC70LXQvdC90YvQuSDQv9GD0L3QutGCXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0JLQstC10LTQuNGC0LUg0L3QsNC30LLQsNC90LjQtSDRgNCw0LnQvtC90LBcIlxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiAoX3ZtLnVzZXIudmlsbGFnZV9pZCA9IHZhbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBkaXNhYmxlZDogIV92bS51c2VyLnZpbGxhZ2VfaWQgJiYgIV92bS5pc0FkbWluLFxuICAgICAgICAgIGxhYmVsOiBcItCj0LvQuNGG0LAsINC00L7QvFwiLFxuICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLmFkZHJlc3NcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuYWRkcmVzcyxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJhZGRyZXNzXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5hZGRyZXNzXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmlzQWRtaW5cbiAgICAgICAgPyBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi0KHRgtCw0YDQvtGB0YLQsFwiIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuY3VyYXRvcixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c2VyLCBcImN1cmF0b3JcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuY3VyYXRvclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlLWJ0bi10ZXh0XCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAhX3ZtLmlzQWRtaW4gfHxcbiAgICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICBfdm0udXNlci5uYW1lICYmXG4gICAgICAgICAgICAgICAgX3ZtLnVzZXIuc2Vjb25kX25hbWUgJiZcbiAgICAgICAgICAgICAgICBfdm0udXNlci5lbWFpbCAmJlxuICAgICAgICAgICAgICAgIF92bS51c2VyLnBob25lXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2F2ZSB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxcbiAgICBcIildXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9