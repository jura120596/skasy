(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Regions_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Regions.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Regions.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/views/courts/regions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/DownloadButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'regions',
  "extends": Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/views/courts/regions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  components: {
    RegionsPage: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/views/courts/regions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    DownloadButton: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/DownloadButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.$refs.root.item_route_name = 'region-bailiffs';
              _this.$refs.root.title = 'Судебные приставы';

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    download: function download(exportFormat) {
      var _this$$refs$root$filt;

      FileLoader.download('/bailiff', {
        region_code: ((_this$$refs$root$filt = this.$refs.root.filter.region) === null || _this$$refs$root$filt === void 0 ? void 0 : _this$$refs$root$filt.value) || null,
        "export": true,
        exportFormat: exportFormat
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/Regions.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/Regions.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Regions_vue_vue_type_template_id_bf1e8df4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Regions.vue?vue&type=template&id=bf1e8df4&scoped=true& */ "./resources/js/pages/Regions.vue?vue&type=template&id=bf1e8df4&scoped=true&");
/* harmony import */ var _Regions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Regions.vue?vue&type=script&lang=js& */ "./resources/js/pages/Regions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Regions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Regions_vue_vue_type_template_id_bf1e8df4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Regions_vue_vue_type_template_id_bf1e8df4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bf1e8df4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Regions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Regions.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/Regions.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Regions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Regions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Regions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Regions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Regions.vue?vue&type=template&id=bf1e8df4&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Regions.vue?vue&type=template&id=bf1e8df4&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Regions_vue_vue_type_template_id_bf1e8df4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Regions_vue_vue_type_template_id_bf1e8df4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Regions_vue_vue_type_template_id_bf1e8df4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Regions.vue?vue&type=template&id=bf1e8df4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Regions.vue?vue&type=template&id=bf1e8df4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Regions.vue?vue&type=template&id=bf1e8df4&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Regions.vue?vue&type=template&id=bf1e8df4&scoped=true& ***!
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
  return _c("regions-page", {
    ref: "root",
    scopedSlots: _vm._u([
      {
        key: "filter",
        fn: function(ref) {
          var vm = ref.vm
          return [
            _c(
              "v-card",
              {
                staticClass: "d-flex justify-space-between mb-6 no-shadow",
                staticStyle: { "margin-bottom": "0 !important" },
                attrs: { flat: "", tile: "" }
              },
              [
                _c(
                  "v-card",
                  {
                    staticClass: "pa-2 flex-grow-1 flex-shrink-0 no-shadow",
                    staticStyle: { "max-width": "200px" },
                    attrs: { tile: "" }
                  },
                  [
                    _c("v-combobox", {
                      attrs: {
                        clearable: "",
                        "hide-selected": "",
                        outlined: "",
                        label: "Регион",
                        items: vm.regions,
                        "hide-details": "",
                        dense: ""
                      },
                      model: {
                        value: vm.filter.region,
                        callback: function($$v) {
                          _vm.$set(vm.filter, "region", $$v)
                        },
                        expression: "vm.filter.region"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-card",
                  {
                    staticClass:
                      "pa-2 d-flex flex-grow-0 flex-shrink-0 no-shadow",
                    attrs: { tile: "" }
                  },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "mr-4",
                        attrs: { disabled: !_vm.canClearFilter() },
                        on: { click: _vm.clearFilter }
                      },
                      [_vm._v("Сбросить ")]
                    ),
                    _vm._v(" "),
                    _c("download-button", {
                      staticClass: "mr-4",
                      on: { click: _vm.download }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-spacer")
              ],
              1
            )
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1JlZ2lvbnMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9SZWdpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUmVnaW9ucy52dWU/ZjY0MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUmVnaW9ucy52dWU/ODNmNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLGtLQUZBO0FBR0E7QUFDQSxzS0FEQTtBQUVBO0FBRkEsR0FIQTtBQU9BLFNBUEEscUJBT0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBLEdBVkE7QUFXQTtBQUNBLFlBREEsb0JBQ0EsWUFEQSxFQUNBO0FBQUE7O0FBQ0E7QUFDQSwwS0FEQTtBQUVBLHNCQUZBO0FBR0E7QUFIQTtBQUtBO0FBUEE7QUFYQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmtHO0FBQ3ZDO0FBQ0w7OztBQUd0RDtBQUNBLENBQTZGO0FBQzdGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2tNLENBQUMsaUVBQWUseU1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBck87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx1QkFBdUI7QUFDekQsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEUsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfUmVnaW9uc192dWUzNzBhZDA4MWEzZjAwMjc1MmFhMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8cmVnaW9ucy1wYWdlIHJlZj1cInJvb3RcIj5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpmaWx0ZXI9XCJ7IHZtIH1cIj5cbiAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1zcGFjZS1iZXR3ZWVuIG1iLTYgbm8tc2hhZG93XCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnRcIiBmbGF0IHRpbGU+XG4gICAgICAgICAgICAgICAgPHYtY2FyZCB0aWxlIGNsYXNzPVwicGEtMiBmbGV4LWdyb3ctMSBmbGV4LXNocmluay0wIG5vLXNoYWRvd1wiIHN0eWxlPVwibWF4LXdpZHRoOiAyMDBweFwiPlxuICAgICAgICAgICAgICAgICAgICA8di1jb21ib2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlLXNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQoNC10LPQuNC+0L1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwidm0ucmVnaW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidm0uZmlsdGVyLnJlZ2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWRldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbWJvYm94PlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XCJwYS0yIGQtZmxleCBmbGV4LWdyb3ctMCBmbGV4LXNocmluay0wIG5vLXNoYWRvd1wiIHRpbGU+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjbGFzcz1cIm1yLTRcIiBAY2xpY2s9XCJjbGVhckZpbHRlclwiIDpkaXNhYmxlZD1cIiFjYW5DbGVhckZpbHRlcigpXCI+0KHQsdGA0L7RgdC40YLRjCA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8ZG93bmxvYWQtYnV0dG9uIGNsYXNzPVwibXItNFwiIEBjbGljaz1cImRvd25sb2FkXCIgLz5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICA8di1zcGFjZXIgLz5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcmVnaW9ucy1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgUmVnaW9uc1BhZ2UgZnJvbSAnQC92aWV3cy9jb3VydHMvcmVnaW9ucydcbiAgICBpbXBvcnQgRG93bmxvYWRCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL0Rvd25sb2FkQnV0dG9uJ1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ3JlZ2lvbnMnLFxuICAgICAgICBleHRlbmRzOiBSZWdpb25zUGFnZSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgUmVnaW9uc1BhZ2UsXG4gICAgICAgICAgICBEb3dubG9hZEJ1dHRvbixcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMucm9vdC5pdGVtX3JvdXRlX25hbWUgPSAncmVnaW9uLWJhaWxpZmZzJ1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5yb290LnRpdGxlID0gJ9Ch0YPQtNC10LHQvdGL0LUg0L/RgNC40YHRgtCw0LLRiydcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZG93bmxvYWQoZXhwb3J0Rm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgRmlsZUxvYWRlci5kb3dubG9hZCgnL2JhaWxpZmYnLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbl9jb2RlOiB0aGlzLiRyZWZzLnJvb3QuZmlsdGVyLnJlZ2lvbj8udmFsdWUgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRGb3JtYXQsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUmVnaW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmYxZThkZjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVnaW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1JlZ2lvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJiZjFlOGRmNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2JmMWU4ZGY0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2JmMWU4ZGY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2JmMWU4ZGY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZWdpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZjFlOGRmNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiZjFlOGRmNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1JlZ2lvbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZ2lvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwicmVnaW9ucy1wYWdlXCIsIHtcbiAgICByZWY6IFwicm9vdFwiLFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwiZmlsdGVyXCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICB2YXIgdm0gPSByZWYudm1cbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1zcGFjZS1iZXR3ZWVuIG1iLTYgbm8tc2hhZG93XCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tYm90dG9tXCI6IFwiMCAhaW1wb3J0YW50XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCB0aWxlOiBcIlwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGEtMiBmbGV4LWdyb3ctMSBmbGV4LXNocmluay0wIG5vLXNoYWRvd1wiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1heC13aWR0aFwiOiBcIjIwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGlsZTogXCJcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtY29tYm9ib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtc2VsZWN0ZWRcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0KDQtdCz0LjQvtC9XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogdm0ucmVnaW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZW5zZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2bS5maWx0ZXIucmVnaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldCh2bS5maWx0ZXIsIFwicmVnaW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZtLmZpbHRlci5yZWdpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJwYS0yIGQtZmxleCBmbGV4LWdyb3ctMCBmbGV4LXNocmluay0wIG5vLXNoYWRvd1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aWxlOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIV92bS5jYW5DbGVhckZpbHRlcigpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsZWFyRmlsdGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQodCx0YDQvtGB0LjRgtGMIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkb3dubG9hZC1idXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTRcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmRvd25sb2FkIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIilcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0pXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==