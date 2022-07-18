(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_BusEvents_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/BusEvents.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/BusEvents.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "BusEvents",
  data: function data(vm) {
    return {
      l: 1,
      events: [],
      page: 1,
      dialogPost: null,
      delete_id: 0,
      show: false
    };
  },
  mounted: function mounted() {
    this.getPage();
  },
  methods: {
    getPage: function getPage() {
      var _this = this;

      window.axios.get('/bus/event/', {
        params: {
          page: this.page,
          per_page: 10
        }
      }).then(function (response) {
        _this.events = response.data.data;
        _this.l = response.data.last_page;
      })["catch"](function (e) {
        console.log(e);
      });
    },
    "delete": function _delete() {
      var _this2 = this;

      if (this.delete_id > 0) window.axios["delete"]('/bus/event/' + this.delete_id).then(function (response) {
        _this2.getPage();

        _this2.delete_id = 0;
      })["catch"](function (e) {
        console.log(e);
      });
    }
  },
  watch: {
    page: function page() {
      this.getPage();
    },
    delete_id: function delete_id(nv) {
      if (nv > 0) this["delete"]();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/BusEvents.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/BusEvents.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BusEvents_vue_vue_type_template_id_50134000___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BusEvents.vue?vue&type=template&id=50134000& */ "./resources/js/pages/BusEvents.vue?vue&type=template&id=50134000&");
/* harmony import */ var _BusEvents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BusEvents.vue?vue&type=script&lang=js& */ "./resources/js/pages/BusEvents.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BusEvents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BusEvents_vue_vue_type_template_id_50134000___WEBPACK_IMPORTED_MODULE_0__.render,
  _BusEvents_vue_vue_type_template_id_50134000___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/BusEvents.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/BusEvents.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/BusEvents.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BusEvents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BusEvents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/BusEvents.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BusEvents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/BusEvents.vue?vue&type=template&id=50134000&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/BusEvents.vue?vue&type=template&id=50134000& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BusEvents_vue_vue_type_template_id_50134000___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BusEvents_vue_vue_type_template_id_50134000___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BusEvents_vue_vue_type_template_id_50134000___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BusEvents.vue?vue&type=template&id=50134000& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/BusEvents.vue?vue&type=template&id=50134000&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/BusEvents.vue?vue&type=template&id=50134000&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/BusEvents.vue?vue&type=template&id=50134000& ***!
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
        domProps: { textContent: _vm._s("Расписание автобуса") }
      }),
      _vm._v(" "),
      _vm.events.length > 0
        ? _c(
            "div",
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-timeline",
                    { attrs: { dense: "" } },
                    _vm._l(_vm.events, function(entry, index) {
                      return _c(
                        "div",
                        { key: index, staticStyle: { position: "relative" } },
                        [
                          _vm.$store.state.auth.user.role === 1024
                            ? _c(
                                "div",
                                {
                                  staticClass: "d-flex crud",
                                  staticStyle: {
                                    position: "absolute",
                                    right: "5px",
                                    top: "-10px",
                                    "font-size": "10px"
                                  }
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "mr-3",
                                      attrs: {
                                        color: "red",
                                        fab: "",
                                        small: "",
                                        dark: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.delete_id = entry.id
                                        }
                                      }
                                    },
                                    [_c("v-icon", [_vm._v("mdi-delete")])],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-timeline-item",
                            {
                              attrs: { small: "", left: "", color: "#11a506" }
                            },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass:
                                    "container ma-0 pa-0 d-flex flex-column",
                                  attrs: { elevation: "0" }
                                },
                                [
                                  _c("h4", [_vm._v(_vm._s(entry.title))]),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v("Остановка: " + _vm._s(entry.place))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "text-right history-time",
                                      attrs: { title: entry.time }
                                    },
                                    [_c("span", [_vm._v(_vm._s(entry.date))])]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    0
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.l > 1
                ? _c(
                    "div",
                    { staticClass: "text-center xs-12" },
                    [
                      _c("v-pagination", {
                        attrs: { length: _vm.l, "total-visible": 3 },
                        model: {
                          value: _vm.page,
                          callback: function($$v) {
                            _vm.page = $$v
                          },
                          expression: "page"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        : _c("div", [
            _c("div", { staticClass: "text-center my-3" }, [
              _vm._v("Расписание еще не создано")
            ])
          ]),
      _vm._v(" "),
      _vm.$store.state.auth.user.role === 1024
        ? _c(
            "v-btn",
            {
              staticClass: "save-btn",
              attrs: { color: "success", fab: "", dark: "" },
              on: {
                click: function($event) {
                  return _vm.$router.push("/bus/event/0")
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-plus")])],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0J1c0V2ZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0J1c0V2ZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0J1c0V2ZW50cy52dWU/NTY4YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQnVzRXZlbnRzLnZ1ZT83NTEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRUE7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxVQURBO0FBRUEsZ0JBRkE7QUFHQSxhQUhBO0FBSUEsc0JBSkE7QUFLQSxrQkFMQTtBQU1BO0FBTkE7QUFRQSxHQVhBO0FBWUEsU0FaQSxxQkFZQTtBQUNBO0FBQ0EsR0FkQTtBQWVBO0FBQ0EsV0FEQSxxQkFDQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLFdBR0E7QUFDQTtBQUNBLE9BTEE7QUFNQSxLQVJBO0FBQUEsaUNBU0E7QUFBQTs7QUFDQSw4QkFDQTtBQUNBOztBQUNBO0FBQ0EsT0FIQSxXQUdBO0FBQ0E7QUFDQSxPQUxBO0FBTUE7QUFqQkEsR0FmQTtBQWtDQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxhQUpBLHFCQUlBLEVBSkEsRUFJQTtBQUNBO0FBQ0E7QUFOQTtBQWxDQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRXdGO0FBQzNCO0FBQ0w7OztBQUd4RDtBQUNBLENBQTZGO0FBQzdGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q29NLENBQUMsaUVBQWUsMk1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdk87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1QkFBdUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFDQUFxQztBQUNyRCxtQkFBbUI7QUFDbkIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsWUFBWSxFQUFFO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkIsdUJBQXVCLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DO0FBQ3hEO0FBQ0E7QUFDQSxnQ0FBZ0Msb0NBQW9DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQ0FBa0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNDQUFzQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfQnVzRXZlbnRzX3Z1ZWUyODkzMTk0ODdhMWZiYzlkY2I1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cImNvdmVyXCI+XG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LXRleHQ9XCIn0KDQsNGB0L/QuNGB0LDQvdC40LUg0LDQstGC0L7QsdGD0YHQsCdcIj5cbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDxkaXYgdi1pZj1cImV2ZW50cy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICA8di1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPHYtdGltZWxpbmUgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoZW50cnksIGluZGV4KSBpbiBldmVudHNcIiA6a2V5PVwiaW5kZXhcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBjcnVkXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiAtMTBweDsgZm9udC1zaXplOiAxMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRlbGV0ZV9pZCA9IGVudHJ5LmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGltZWxpbmUtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cIicjMTFhNTA2J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZCBlbGV2YXRpb249XCIwXCIgY2xhc3M9XCJjb250YWluZXIgbWEtMCBwYS0wIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3sgZW50cnkudGl0bGUgfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QntGB0YLQsNC90L7QstC60LA6IHt7IGVudHJ5LnBsYWNlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1yaWdodCBoaXN0b3J5LXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0aXRsZT1cImVudHJ5LnRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGVudHJ5LmRhdGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRpbWVsaW5lLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdi10aW1lbGluZT5cbiAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgeHMtMTJcIiB2LWlmPVwibCA+IDFcIj5cbiAgICAgICAgICAgICAgICA8di1wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA6bGVuZ3RoPVwibFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dG90YWwtdmlzaWJsZT1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBhZ2VcIlxuICAgICAgICAgICAgICAgID48L3YtcGFnaW5hdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXktM1wiPtCg0LDRgdC/0LjRgdCw0L3QuNC1INC10YnQtSDQvdC1INGB0L7Qt9C00LDQvdC+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cInNhdmUtYnRuXCJcbiAgICAgICAgICAgICAgIHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcIlxuICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvYnVzL2V2ZW50LzAnKVwiXG4gICAgICAgICAgICAgICBkYXJrPlxuICAgICAgICAgICAgPHYtaWNvbj5tZGktcGx1czwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJCdXNFdmVudHNcIixcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGw6IDEsXG4gICAgICAgICAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgZGVsZXRlX2lkOiAwLFxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0UGFnZSgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvYnVzL2V2ZW50LycsIHtwYXJhbXM6IHtwYWdlOiB0aGlzLnBhZ2UsIHBlcl9wYWdlOiAxMH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sID0gcmVzcG9uc2UuZGF0YS5sYXN0X3BhZ2VcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsZXRlX2lkID4gMClcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmRlbGV0ZSgnL2J1cy9ldmVudC8nICsgdGhpcy5kZWxldGVfaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVfaWQgPSAwXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBwYWdlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZV9pZChudikge1xuICAgICAgICAgICAgICAgIGlmIChudiA+IDApIHRoaXMuZGVsZXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQnVzRXZlbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDEzNDAwMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9qdXJhMTIwNTk2L1BocHN0b3JtUHJvamVjdHMvc2thc3kvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTAxMzQwMDAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTAxMzQwMDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTAxMzQwMDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0J1c0V2ZW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTAxMzQwMDAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTAxMzQwMDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9CdXNFdmVudHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1c0V2ZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb3ZlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgIGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoXCLQoNCw0YHQv9C40YHQsNC90LjQtSDQsNCy0YLQvtCx0YPRgdCwXCIpIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5ldmVudHMubGVuZ3RoID4gMFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtdGltZWxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBkZW5zZTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZXZlbnRzLCBmdW5jdGlvbihlbnRyeSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBzdGF0aWNTdHlsZTogeyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXggY3J1ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiLTEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVfaWQgPSBlbnRyeS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLWRlbGV0ZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdGltZWxpbmUtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNtYWxsOiBcIlwiLCBsZWZ0OiBcIlwiLCBjb2xvcjogXCIjMTFhNTA2XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGFpbmVyIG1hLTAgcGEtMCBkLWZsZXggZmxleC1jb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBlbGV2YXRpb246IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihfdm0uX3MoZW50cnkudGl0bGUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcItCe0YHRgtCw0L3QvtCy0LrQsDogXCIgKyBfdm0uX3MoZW50cnkucGxhY2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBoaXN0b3J5LXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IGVudHJ5LnRpbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoZW50cnkuZGF0ZSkpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubCA+IDFcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHhzLTEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxlbmd0aDogX3ZtLmwsIFwidG90YWwtdmlzaWJsZVwiOiAzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG15LTNcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcItCg0LDRgdC/0LjRgdCw0L3QuNC1INC10YnQtSDQvdC1INGB0L7Qt9C00LDQvdC+XCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2F2ZS1idG5cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwic3VjY2Vzc1wiLCBmYWI6IFwiXCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIucHVzaChcIi9idXMvZXZlbnQvMFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLXBsdXNcIildKV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9