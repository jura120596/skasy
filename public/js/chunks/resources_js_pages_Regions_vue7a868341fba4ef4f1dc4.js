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
                )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1JlZ2lvbnMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9SZWdpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUmVnaW9ucy52dWU/ZjY0MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUmVnaW9ucy52dWU/ODNmNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxrS0FGQTtBQUdBO0FBQ0Esc0tBREE7QUFFQTtBQUZBLEdBSEE7QUFPQSxTQVBBLHFCQU9BO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQSxHQVZBO0FBV0E7QUFDQSxZQURBLG9CQUNBLFlBREEsRUFDQTtBQUFBOztBQUNBO0FBQ0EsMEtBREE7QUFFQSxzQkFGQTtBQUdBO0FBSEE7QUFLQTtBQVBBO0FBWEEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJrRztBQUN2QztBQUNMOzs7QUFHdEQ7QUFDQSxDQUE2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENrTSxDQUFDLGlFQUFlLHlNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXJPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsdUJBQXVCO0FBQ3pELDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EiLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19wYWdlc19SZWdpb25zX3Z1ZTdhODY4MzQxZmJhNGVmNGYxZGM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxyZWdpb25zLXBhZ2UgcmVmPVwicm9vdFwiPlxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmZpbHRlcj1cInsgdm0gfVwiPlxuICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LXNwYWNlLWJldHdlZW4gbWItNiBuby1zaGFkb3dcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudFwiIGZsYXQgdGlsZT5cbiAgICAgICAgICAgICAgICA8di1jYXJkIHRpbGUgY2xhc3M9XCJwYS0yIGZsZXgtZ3Jvdy0xIGZsZXgtc2hyaW5rLTAgbm8tc2hhZG93XCIgc3R5bGU9XCJtYXgtd2lkdGg6IDIwMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbWJvYm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCg0LXQs9C40L7QvVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXM9XCJ2bS5yZWdpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ2bS5maWx0ZXIucmVnaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29tYm9ib3g+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3JlZ2lvbnMtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFJlZ2lvbnNQYWdlIGZyb20gJ0Avdmlld3MvY291cnRzL3JlZ2lvbnMnXG4gICAgaW1wb3J0IERvd25sb2FkQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9Eb3dubG9hZEJ1dHRvbidcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdyZWdpb25zJyxcbiAgICAgICAgZXh0ZW5kczogUmVnaW9uc1BhZ2UsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIFJlZ2lvbnNQYWdlLFxuICAgICAgICAgICAgRG93bmxvYWRCdXR0b24sXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnJvb3QuaXRlbV9yb3V0ZV9uYW1lID0gJ3JlZ2lvbi1iYWlsaWZmcydcbiAgICAgICAgICAgIHRoaXMuJHJlZnMucm9vdC50aXRsZSA9ICfQodGD0LTQtdCx0L3Ri9C1INC/0YDQuNGB0YLQsNCy0YsnXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGRvd25sb2FkKGV4cG9ydEZvcm1hdCkge1xuICAgICAgICAgICAgICAgIEZpbGVMb2FkZXIuZG93bmxvYWQoJy9iYWlsaWZmJywge1xuICAgICAgICAgICAgICAgICAgICByZWdpb25fY29kZTogdGhpcy4kcmVmcy5yb290LmZpbHRlci5yZWdpb24/LnZhbHVlIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0Rm9ybWF0LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlZ2lvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJmMWU4ZGY0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1JlZ2lvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZWdpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYmYxZThkZjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiZjFlOGRmNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiZjFlOGRmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiZjFlOGRmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVnaW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmYxZThkZjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYmYxZThkZjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9SZWdpb25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZ2lvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInJlZ2lvbnMtcGFnZVwiLCB7XG4gICAgcmVmOiBcInJvb3RcIixcbiAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImZpbHRlclwiLFxuICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgdmFyIHZtID0gcmVmLnZtXG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktc3BhY2UtYmV0d2VlbiBtYi02IG5vLXNoYWRvd1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWJvdHRvbVwiOiBcIjAgIWltcG9ydGFudFwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgdGlsZTogXCJcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhLTIgZmxleC1ncm93LTEgZmxleC1zaHJpbmstMCBuby1zaGFkb3dcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCIyMDBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpbGU6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNvbWJvYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLXNlbGVjdGVkXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCg0LXQs9C40L7QvVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHZtLnJlZ2lvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtZGV0YWlsc1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2U6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdm0uZmlsdGVyLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQodm0uZmlsdGVyLCBcInJlZ2lvblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2bS5maWx0ZXIucmVnaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0pXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==