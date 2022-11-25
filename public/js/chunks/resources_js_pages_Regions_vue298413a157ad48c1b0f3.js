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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/services/file_loader'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

      console.log({
        exportFormat: exportFormat
      });
      Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/services/file_loader'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('/bailiff', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1JlZ2lvbnMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9SZWdpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUmVnaW9ucy52dWU/ZjY0MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUmVnaW9ucy52dWU/ODNmNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLGtLQUZBO0FBR0E7QUFDQSxzS0FEQTtBQUVBO0FBRkEsR0FIQTtBQU9BLFNBUEEscUJBT0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBLEdBVkE7QUFXQTtBQUNBLFlBREEsb0JBQ0EsWUFEQSxFQUNBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSwwS0FEQTtBQUVBLHNCQUZBO0FBR0E7QUFIQTtBQUtBO0FBUkE7QUFYQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmtHO0FBQ3ZDO0FBQ0w7OztBQUd0RDtBQUNBLENBQTZGO0FBQzdGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2tNLENBQUMsaUVBQWUseU1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBck87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx1QkFBdUI7QUFDekQsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEUsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfUmVnaW9uc192dWUyOTg0MTNhMTU3YWQ0OGMxYjBmMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8cmVnaW9ucy1wYWdlIHJlZj1cInJvb3RcIj5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpmaWx0ZXI9XCJ7IHZtIH1cIj5cbiAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1zcGFjZS1iZXR3ZWVuIG1iLTYgbm8tc2hhZG93XCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnRcIiBmbGF0IHRpbGU+XG4gICAgICAgICAgICAgICAgPHYtY2FyZCB0aWxlIGNsYXNzPVwicGEtMiBmbGV4LWdyb3ctMSBmbGV4LXNocmluay0wIG5vLXNoYWRvd1wiIHN0eWxlPVwibWF4LXdpZHRoOiAyMDBweFwiPlxuICAgICAgICAgICAgICAgICAgICA8di1jb21ib2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlLXNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQoNC10LPQuNC+0L1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwidm0ucmVnaW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidm0uZmlsdGVyLnJlZ2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWRldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbWJvYm94PlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XCJwYS0yIGQtZmxleCBmbGV4LWdyb3ctMCBmbGV4LXNocmluay0wIG5vLXNoYWRvd1wiIHRpbGU+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjbGFzcz1cIm1yLTRcIiBAY2xpY2s9XCJjbGVhckZpbHRlclwiIDpkaXNhYmxlZD1cIiFjYW5DbGVhckZpbHRlcigpXCI+0KHQsdGA0L7RgdC40YLRjCA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8ZG93bmxvYWQtYnV0dG9uIGNsYXNzPVwibXItNFwiIEBjbGljaz1cImRvd25sb2FkXCIgLz5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICA8di1zcGFjZXIgLz5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcmVnaW9ucy1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRmlsZUxvYWRlciBmcm9tICdAL3NlcnZpY2VzL2ZpbGVfbG9hZGVyJ1xuICAgIGltcG9ydCBSZWdpb25zUGFnZSBmcm9tICdAL3ZpZXdzL2NvdXJ0cy9yZWdpb25zJ1xuICAgIGltcG9ydCBEb3dubG9hZEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvRG93bmxvYWRCdXR0b24nXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAncmVnaW9ucycsXG4gICAgICAgIGV4dGVuZHM6IFJlZ2lvbnNQYWdlLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBSZWdpb25zUGFnZSxcbiAgICAgICAgICAgIERvd25sb2FkQnV0dG9uLFxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5yb290Lml0ZW1fcm91dGVfbmFtZSA9ICdyZWdpb24tYmFpbGlmZnMnXG4gICAgICAgICAgICB0aGlzLiRyZWZzLnJvb3QudGl0bGUgPSAn0KHRg9C00LXQsdC90YvQtSDQv9GA0LjRgdGC0LDQstGLJ1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBkb3dubG9hZChleHBvcnRGb3JtYXQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7ZXhwb3J0Rm9ybWF0fSlcbiAgICAgICAgICAgICAgICBGaWxlTG9hZGVyLmRvd25sb2FkKCcvYmFpbGlmZicsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uX2NvZGU6IHRoaXMuJHJlZnMucm9vdC5maWx0ZXIucmVnaW9uPy52YWx1ZSB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydEZvcm1hdCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZWdpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZjFlOGRmNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SZWdpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmVnaW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImJmMWU4ZGY0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYmYxZThkZjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYmYxZThkZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYmYxZThkZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1JlZ2lvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJmMWU4ZGY0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JmMWU4ZGY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvUmVnaW9ucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJyZWdpb25zLXBhZ2VcIiwge1xuICAgIHJlZjogXCJyb290XCIsXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJmaWx0ZXJcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgIHZhciB2bSA9IHJlZi52bVxuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LXNwYWNlLWJldHdlZW4gbWItNiBuby1zaGFkb3dcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1ib3R0b21cIjogXCIwICFpbXBvcnRhbnRcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIHRpbGU6IFwiXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYS0yIGZsZXgtZ3Jvdy0xIGZsZXgtc2hyaW5rLTAgbm8tc2hhZG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWF4LXdpZHRoXCI6IFwiMjAwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aWxlOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1jb21ib2JveFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGlkZS1zZWxlY3RlZFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQoNC10LPQuNC+0L1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB2bS5yZWdpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLWRldGFpbHNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZtLmZpbHRlci5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KHZtLmZpbHRlciwgXCJyZWdpb25cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidm0uZmlsdGVyLnJlZ2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcInBhLTIgZC1mbGV4IGZsZXgtZ3Jvdy0wIGZsZXgtc2hyaW5rLTAgbm8tc2hhZG93XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpbGU6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLmNhbkNsZWFyRmlsdGVyKCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xlYXJGaWx0ZXIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCh0LHRgNC+0YHQuNGC0YwgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRvd25sb2FkLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItNFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZG93bmxvYWQgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSlcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9