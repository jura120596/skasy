(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_EventEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/EventEdit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/EventEdit.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PostAdd",
  components: {},
  data: function data(vm) {
    return {
      event: {
        id: vm.$route.params.id,
        title: '',
        place: '',
        date: ''
      },
      messages: {
        title: '',
        place: '',
        date: ''
      }
    };
  },
  mounted: function mounted() {},
  methods: {
    create: function create() {
      var _this = this;

      window.axios.post('/event', this.event).then(function (r) {
        _this.$router.push({
          name: "events"
        });
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/EventEdit.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/EventEdit.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.place .v-text-field__slot textarea {\n    display: none !important;\n}\n.place.v-text-field>.v-input__control>.v-input__slot:after ,\n.place.v-text-field>.v-input__control>.v-input__slot:before{\n    display: none !important;\n}\n", "",{"version":3,"sources":["webpack://./EventEdit.vue"],"names":[],"mappings":";AA+EA;IACA,wBAAA;AACA;AACA;;IAEA,wBAAA;AACA","sourcesContent":["<template>\n    <v-container\n            class=\"cover\">\n        <v-toolbar-title align=\"center\" justify=\"center\" class=\"mb-2\"\n        v-text=\"'Добавление мероприятия'\">\n        </v-toolbar-title>\n        <v-text-field\n            type=\"text\"\n            name=\"title\"\n            label=\"Заголовок\"\n            v-model=\"event.title\"\n            :error-messages=\"messages.title\"\n            >\n        </v-text-field>\n        <v-text-field\n                name=\"place\"\n                label=\"Место проведения\"\n                v-model=\"event.place\"\n                :error-messages=\"messages.place\"\n        ></v-text-field>\n        <v-text-field\n                name=\"date\"\n                label=\"Дата проведения\"\n                v-model=\"event.date\"\n                :error-messages=\"messages.date\"\n        ></v-text-field>\n        <v-spacer/>\n        <v-btn class=\"save-btn\"\n               color=\"success\"\n               fab\n               @click=\"create\"\n               :disabled=\"!(event.place && event.title && event.date)\"\n               dark>\n            <v-icon>mdi-plus</v-icon>\n        </v-btn>\n    </v-container>\n</template>\n\n<script>\n    export default {\n        name: \"PostAdd\",\n        components: {\n        },\n        data: (vm) => {\n            return {\n                event: {\n                    id: vm.$route.params.id,\n                    title: '',\n                    place: '',\n                    date: '',\n                },\n                messages: {\n                    title: '',\n                    place: '',\n                    date:'',\n                }\n            }\n        },\n        mounted() {\n        },\n        methods: {\n            create() {\n                window.axios.post('/event', this.event)\n                    .then((r) => {\n                        this.$router.push({name: \"events\"});\n                    }).catch((e) => {\n                    if (e.response && e.response.status === 422) {\n                        let errors = e.response.data.errors\n                        Object.keys(this.messages).forEach((k)=> {\n                            this.messages[k] = errors[k]?.[0] || '';\n                        });\n                    }\n                })\n            },\n        }\n    }\n</script>\n\n<style>\n    .place .v-text-field__slot textarea {\n        display: none !important;\n    }\n    .place.v-text-field>.v-input__control>.v-input__slot:after ,\n    .place.v-text-field>.v-input__control>.v-input__slot:before{\n        display: none !important;\n    }\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/pages/EventEdit.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/EventEdit.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EventEdit_vue_vue_type_template_id_53a962ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEdit.vue?vue&type=template&id=53a962ea& */ "./resources/js/pages/EventEdit.vue?vue&type=template&id=53a962ea&");
/* harmony import */ var _EventEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventEdit.vue?vue&type=script&lang=js& */ "./resources/js/pages/EventEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _EventEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventEdit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/EventEdit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _EventEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EventEdit_vue_vue_type_template_id_53a962ea___WEBPACK_IMPORTED_MODULE_0__.render,
  _EventEdit_vue_vue_type_template_id_53a962ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/EventEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/EventEdit.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/EventEdit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EventEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/EventEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/EventEdit.vue?vue&type=template&id=53a962ea&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/EventEdit.vue?vue&type=template&id=53a962ea& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventEdit_vue_vue_type_template_id_53a962ea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventEdit_vue_vue_type_template_id_53a962ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventEdit_vue_vue_type_template_id_53a962ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EventEdit.vue?vue&type=template&id=53a962ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/EventEdit.vue?vue&type=template&id=53a962ea&");


/***/ }),

/***/ "./resources/js/pages/EventEdit.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/EventEdit.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EventEdit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/EventEdit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventEdit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/EventEdit.vue?vue&type=template&id=53a962ea&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/EventEdit.vue?vue&type=template&id=53a962ea& ***!
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
        domProps: { textContent: _vm._s("Добавление мероприятия") }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          type: "text",
          name: "title",
          label: "Заголовок",
          "error-messages": _vm.messages.title
        },
        model: {
          value: _vm.event.title,
          callback: function($$v) {
            _vm.$set(_vm.event, "title", $$v)
          },
          expression: "event.title"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          name: "place",
          label: "Место проведения",
          "error-messages": _vm.messages.place
        },
        model: {
          value: _vm.event.place,
          callback: function($$v) {
            _vm.$set(_vm.event, "place", $$v)
          },
          expression: "event.place"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          name: "date",
          label: "Дата проведения",
          "error-messages": _vm.messages.date
        },
        model: {
          value: _vm.event.date,
          callback: function($$v) {
            _vm.$set(_vm.event, "date", $$v)
          },
          expression: "event.date"
        }
      }),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "save-btn",
          attrs: {
            color: "success",
            fab: "",
            disabled: !(_vm.event.place && _vm.event.title && _vm.event.date),
            dark: ""
          },
          on: { click: _vm.create }
        },
        [_c("v-icon", [_vm._v("mdi-plus")])],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/EventEdit.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/EventEdit.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EventEdit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/EventEdit.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3e1d34fb", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0V2ZW50RWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0V2ZW50RWRpdC52dWU/Y2IxZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRXZlbnRFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRXZlbnRFZGl0LnZ1ZT9jM2JhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9FdmVudEVkaXQudnVlPzYxMWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0V2ZW50RWRpdC52dWU/MTFkYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7QUFDQSxpQkFEQTtBQUVBLGdCQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSxpQkFGQTtBQUdBLGlCQUhBO0FBSUE7QUFKQSxPQURBO0FBT0E7QUFDQSxpQkFEQTtBQUVBLGlCQUZBO0FBR0E7QUFIQTtBQVBBO0FBYUEsR0FsQkE7QUFtQkEsU0FuQkEscUJBbUJBLENBQ0EsQ0FwQkE7QUFxQkE7QUFDQSxVQURBLG9CQUNBO0FBQUE7O0FBQ0EsOENBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsT0FIQSxXQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQSxXQUZBO0FBR0E7QUFDQSxPQVZBO0FBV0E7QUFiQTtBQXJCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxpRkFBaUYsK0JBQStCLEdBQUcsNEhBQTRILCtCQUErQixHQUFHLFNBQVMsNEVBQTRFLE1BQU0sV0FBVyxLQUFLLE1BQU0sV0FBVyxrdkNBQWt2QyxtREFBbUQsV0FBVywwQkFBMEIsc0JBQXNCLDBCQUEwQixnS0FBZ0ssOEJBQThCLGlIQUFpSCxlQUFlLFdBQVcsc0JBQXNCLFdBQVcscUJBQXFCLHdCQUF3Qiw2RkFBNkYsNkNBQTZDLGlCQUFpQixFQUFFLHVCQUF1QixnQkFBZ0Isb0VBQW9FLGlJQUFpSSxzRUFBc0UsMkJBQTJCLEVBQUUsdUJBQXVCLG1CQUFtQixnQkFBZ0IsWUFBWSxPQUFPLGlFQUFpRSxtQ0FBbUMsT0FBTyxvSUFBb0ksbUNBQW1DLE9BQU8sNkJBQTZCO0FBQzdnRztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BpRDtBQUMzQjtBQUNMO0FBQ3hELENBQXFFOzs7QUFHckU7QUFDNkY7QUFDN0YsZ0JBQWdCLG9HQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZSxpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDb00sQ0FBQyxpRUFBZSwyTUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXZPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUJBQXVCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxQ0FBcUM7QUFDckQsbUJBQW1CO0FBQ25CLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxlQUFlO0FBQ2YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLG1yQkFBNFY7QUFDbFg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJKQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfRXZlbnRFZGl0X3Z1ZWJiNGRmMDgyNDcwMGFiM2FiM2M1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDx2LWNvbnRhaW5lclxuICAgICAgICAgICAgY2xhc3M9XCJjb3ZlclwiPlxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXG4gICAgICAgIHYtdGV4dD1cIifQlNC+0LHQsNCy0LvQtdC90LjQtSDQvNC10YDQvtC/0YDQuNGP0YLQuNGPJ1wiPlxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJldmVudC50aXRsZVwiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy50aXRsZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgIDwvdi10ZXh0LWZpZWxkPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cInBsYWNlXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCc0LXRgdGC0L4g0L/RgNC+0LLQtdC00LXQvdC40Y9cIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJldmVudC5wbGFjZVwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMucGxhY2VcIlxuICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQlNCw0YLQsCDQv9GA0L7QstC10LTQtdC90LjRj1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImV2ZW50LmRhdGVcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmRhdGVcIlxuICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgIDx2LWJ0biBjbGFzcz1cInNhdmUtYnRuXCJcbiAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgIEBjbGljaz1cImNyZWF0ZVwiXG4gICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhKGV2ZW50LnBsYWNlICYmIGV2ZW50LnRpdGxlICYmIGV2ZW50LmRhdGUpXCJcbiAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICA8di1pY29uPm1kaS1wbHVzPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIlBvc3RBZGRcIixcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICB9LFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHZtLiRyb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkYXRlOicnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgY3JlYXRlKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvZXZlbnQnLCB0aGlzLmV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6IFwiZXZlbnRzXCJ9KTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWVzc2FnZXMpLmZvckVhY2goKGspPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC5wbGFjZSAudi10ZXh0LWZpZWxkX19zbG90IHRleHRhcmVhIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucGxhY2Uudi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmFmdGVyICxcbiAgICAucGxhY2Uudi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmJlZm9yZXtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbjwvc3R5bGU+IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucGxhY2UgLnYtdGV4dC1maWVsZF9fc2xvdCB0ZXh0YXJlYSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLnBsYWNlLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDphZnRlciAsXFxuLnBsYWNlLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDpiZWZvcmV7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vRXZlbnRFZGl0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBK0VBO0lBQ0Esd0JBQUE7QUFDQTtBQUNBOztJQUVBLHdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8di1jb250YWluZXJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiY292ZXJcXFwiPlxcbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cXFwiY2VudGVyXFxcIiBqdXN0aWZ5PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJtYi0yXFxcIlxcbiAgICAgICAgdi10ZXh0PVxcXCIn0JTQvtCx0LDQstC70LXQvdC40LUg0LzQtdGA0L7Qv9GA0LjRj9GC0LjRjydcXFwiPlxcbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XFxuICAgICAgICA8di10ZXh0LWZpZWxkXFxuICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICBuYW1lPVxcXCJ0aXRsZVxcXCJcXG4gICAgICAgICAgICBsYWJlbD1cXFwi0JfQsNCz0L7Qu9C+0LLQvtC6XFxcIlxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcImV2ZW50LnRpdGxlXFxcIlxcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cXFwibWVzc2FnZXMudGl0bGVcXFwiXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgPC92LXRleHQtZmllbGQ+XFxuICAgICAgICA8di10ZXh0LWZpZWxkXFxuICAgICAgICAgICAgICAgIG5hbWU9XFxcInBsYWNlXFxcIlxcbiAgICAgICAgICAgICAgICBsYWJlbD1cXFwi0JzQtdGB0YLQviDQv9GA0L7QstC10LTQtdC90LjRj1xcXCJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZXZlbnQucGxhY2VcXFwiXFxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cXFwibWVzc2FnZXMucGxhY2VcXFwiXFxuICAgICAgICA+PC92LXRleHQtZmllbGQ+XFxuICAgICAgICA8di10ZXh0LWZpZWxkXFxuICAgICAgICAgICAgICAgIG5hbWU9XFxcImRhdGVcXFwiXFxuICAgICAgICAgICAgICAgIGxhYmVsPVxcXCLQlNCw0YLQsCDQv9GA0L7QstC10LTQtdC90LjRj1xcXCJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZXZlbnQuZGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVxcXCJtZXNzYWdlcy5kYXRlXFxcIlxcbiAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxcbiAgICAgICAgPHYtc3BhY2VyLz5cXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cXFwic2F2ZS1idG5cXFwiXFxuICAgICAgICAgICAgICAgY29sb3I9XFxcInN1Y2Nlc3NcXFwiXFxuICAgICAgICAgICAgICAgZmFiXFxuICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJjcmVhdGVcXFwiXFxuICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCIhKGV2ZW50LnBsYWNlICYmIGV2ZW50LnRpdGxlICYmIGV2ZW50LmRhdGUpXFxcIlxcbiAgICAgICAgICAgICAgIGRhcms+XFxuICAgICAgICAgICAgPHYtaWNvbj5tZGktcGx1czwvdi1pY29uPlxcbiAgICAgICAgPC92LWJ0bj5cXG4gICAgPC92LWNvbnRhaW5lcj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIG5hbWU6IFxcXCJQb3N0QWRkXFxcIixcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBldmVudDoge1xcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHZtLiRyb3V0ZS5wYXJhbXMuaWQsXFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXFxuICAgICAgICAgICAgICAgICAgICBwbGFjZTogJycsXFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnJyxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlOiAnJyxcXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6JycsXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgbW91bnRlZCgpIHtcXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgY3JlYXRlKCkge1xcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL2V2ZW50JywgdGhpcy5ldmVudClcXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6IFxcXCJldmVudHNcXFwifSk7XFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbiAgICAucGxhY2UgLnYtdGV4dC1maWVsZF9fc2xvdCB0ZXh0YXJlYSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLnBsYWNlLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDphZnRlciAsXFxuICAgIC5wbGFjZS52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YmVmb3Jle1xcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FdmVudEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzYTk2MmVhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0V2ZW50RWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0V2ZW50RWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRXZlbnRFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9qdXJhMTIwNTk2L1BocHN0b3JtUHJvamVjdHMvc2thc3kvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTNhOTYyZWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTNhOTYyZWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTNhOTYyZWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0V2ZW50RWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTNhOTYyZWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTNhOTYyZWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9FdmVudEVkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V2ZW50RWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FdmVudEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb3ZlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgIGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoXCLQlNC+0LHQsNCy0LvQtdC90LjQtSDQvNC10YDQvtC/0YDQuNGP0YLQuNGPXCIpIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBuYW1lOiBcInRpdGxlXCIsXG4gICAgICAgICAgbGFiZWw6IFwi0JfQsNCz0L7Qu9C+0LLQvtC6XCIsXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMudGl0bGVcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmV2ZW50LnRpdGxlLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5ldmVudCwgXCJ0aXRsZVwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImV2ZW50LnRpdGxlXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6IFwicGxhY2VcIixcbiAgICAgICAgICBsYWJlbDogXCLQnNC10YHRgtC+INC/0YDQvtCy0LXQtNC10L3QuNGPXCIsXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMucGxhY2VcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmV2ZW50LnBsYWNlLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5ldmVudCwgXCJwbGFjZVwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImV2ZW50LnBsYWNlXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6IFwiZGF0ZVwiLFxuICAgICAgICAgIGxhYmVsOiBcItCU0LDRgtCwINC/0YDQvtCy0LXQtNC10L3QuNGPXCIsXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMuZGF0ZVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZXZlbnQuZGF0ZSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uZXZlbnQsIFwiZGF0ZVwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImV2ZW50LmRhdGVcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlLWJ0blwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBjb2xvcjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogIShfdm0uZXZlbnQucGxhY2UgJiYgX3ZtLmV2ZW50LnRpdGxlICYmIF92bS5ldmVudC5kYXRlKSxcbiAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY3JlYXRlIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktcGx1c1wiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FdmVudEVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjNlMWQzNGZiXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXZlbnRFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXZlbnRFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9