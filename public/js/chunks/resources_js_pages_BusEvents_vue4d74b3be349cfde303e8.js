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
                { staticClass: "px-0", attrs: { fluid: "" } },
                [
                  _c("v-checkbox", {
                    attrs: { label: "" },
                    model: {
                      value: _vm.skip,
                      callback: function($$v) {
                        _vm.skip = $$v
                      },
                      expression: "skip"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
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
                          !entry.skip || _vm.skip
                            ? _c(
                                "v-timeline-item",
                                {
                                  attrs: {
                                    small: "",
                                    color: entry.color || "#11a506"
                                  }
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
                                      _c("span", [_vm._v(_vm._s(entry.time))]),
                                      _vm._v(" "),
                                      _c("h4", [_vm._v(_vm._s(entry.title))]),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          "Остановка: " + _vm._s(entry.place)
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("span", {
                                        staticClass: "text-right history-time",
                                        attrs: { title: entry.time }
                                      })
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    }),
                    0
                  )
                ],
                1
              )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0J1c0V2ZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0J1c0V2ZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0J1c0V2ZW50cy52dWU/NTY4YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQnVzRXZlbnRzLnZ1ZT83NTEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRUE7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxVQURBO0FBRUEsZ0JBRkE7QUFHQSxhQUhBO0FBSUEsc0JBSkE7QUFLQSxrQkFMQTtBQU1BO0FBTkE7QUFRQSxHQVhBO0FBWUEsU0FaQSxxQkFZQTtBQUNBO0FBRUEsR0FmQTtBQWdCQTtBQUNBLFdBREEscUJBQ0E7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLE9BRkEsV0FFQTtBQUNBO0FBQ0EsT0FKQTtBQUtBLEtBUEE7QUFBQSxpQ0FRQTtBQUFBOztBQUNBLDhCQUNBO0FBQ0E7O0FBQ0E7QUFDQSxPQUhBLFdBR0E7QUFDQTtBQUNBLE9BTEE7QUFNQTtBQWhCQSxHQWhCQTtBQWtDQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxhQUpBLHFCQUlBLEVBSkEsRUFJQTtBQUNBO0FBQ0E7QUFOQTtBQWxDQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRXdGO0FBQzNCO0FBQ0w7OztBQUd4RDtBQUNBLENBQTZGO0FBQzdGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q29NLENBQUMsaUVBQWUsMk1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdk87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1QkFBdUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFDQUFxQztBQUNyRCxtQkFBbUI7QUFDbkIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhCQUE4QixZQUFZLEVBQUU7QUFDN0Q7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsWUFBWSxFQUFFO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkIsdUJBQXVCLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQ0FBa0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNDQUFzQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfQnVzRXZlbnRzX3Z1ZTRkNzRiM2JlMzQ5Y2ZkZTMwM2U4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cImNvdmVyXCI+XG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LXRleHQ9XCIn0KDQsNGB0L/QuNGB0LDQvdC40LUg0LDQstGC0L7QsdGD0YHQsCdcIj5cbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDxkaXYgdi1pZj1cImV2ZW50cy5sZW5ndGggPiAwXCI+XG5cbiAgICAgICAgICAgIDx2LWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInB4LTBcIlxuICAgICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx2LWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2tpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJgYFwiXG4gICAgICAgICAgICAgICAgPjwvdi1jaGVja2JveD5cbiAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgICAgICA8di1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPHYtdGltZWxpbmUgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoZW50cnksIGluZGV4KSBpbiBldmVudHNcIiA6a2V5PVwiaW5kZXhcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBjcnVkXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiAtMTBweDsgZm9udC1zaXplOiAxMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRlbGV0ZV9pZCA9IGVudHJ5LmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGltZWxpbmUtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWVudHJ5LnNraXAgfHwgc2tpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cImVudHJ5LmNvbG9yIHx8ICcjMTFhNTA2J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZCBlbGV2YXRpb249XCIwXCIgY2xhc3M9XCJjb250YWluZXIgbWEtMCBwYS0wIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBlbnRyeS50aW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3sgZW50cnkudGl0bGUgfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QntGB0YLQsNC90L7QstC60LA6IHt7IGVudHJ5LnBsYWNlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1yaWdodCBoaXN0b3J5LXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0aXRsZT1cImVudHJ5LnRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRpbWVsaW5lLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdi10aW1lbGluZT5cbiAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS0zXCI+0KDQsNGB0L/QuNGB0LDQvdC40LUg0LXRidC1INC90LUg0YHQvtC30LTQsNC90L48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHYtYnRuIGNsYXNzPVwic2F2ZS1idG5cIlxuICAgICAgICAgICAgICAgdi1pZj1cIiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNFwiXG4gICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLnB1c2goJy9idXMvZXZlbnQvMCcpXCJcbiAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICA8di1pY29uPm1kaS1wbHVzPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIkJ1c0V2ZW50c1wiLFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbDogMSxcbiAgICAgICAgICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgZGlhbG9nUG9zdDogbnVsbCxcbiAgICAgICAgICAgICAgICBkZWxldGVfaWQ6IDAsXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xuXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldFBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL2J1cy9ldmVudC8nLCB7cGFyYW1zOiB7cGFnZTogdGhpcy5wYWdlLCBwZXJfcGFnZTogMTB9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlbGV0ZV9pZCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5kZWxldGUoJy9idXMvZXZlbnQvJyArIHRoaXMuZGVsZXRlX2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlX2lkID0gMFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgcGFnZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVfaWQobnYpIHtcbiAgICAgICAgICAgICAgICBpZiAobnYgPiAwKSB0aGlzLmRlbGV0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0J1c0V2ZW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTAxMzQwMDAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQnVzRXZlbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQnVzRXZlbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvanVyYTEyMDU5Ni9QaHBzdG9ybVByb2plY3RzL3NrYXN5L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUwMTM0MDAwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUwMTM0MDAwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUwMTM0MDAwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwMTM0MDAwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUwMTM0MDAwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvQnVzRXZlbnRzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVzRXZlbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY292ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9LFxuICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKFwi0KDQsNGB0L/QuNGB0LDQvdC40LUg0LDQstGC0L7QsdGD0YHQsFwiKSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZXZlbnRzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInB4LTBcIiwgYXR0cnM6IHsgZmx1aWQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1jaGVja2JveFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5za2lwLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5za2lwID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNraXBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi10aW1lbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGRlbnNlOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5ldmVudHMsIGZ1bmN0aW9uKGVudHJ5LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY1N0eWxlOiB7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBjcnVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCItMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZV9pZCA9IGVudHJ5LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktZGVsZXRlXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFlbnRyeS5za2lwIHx8IF92bS5za2lwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRpbWVsaW5lLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBlbnRyeS5jb2xvciB8fCBcIiMxMWE1MDZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250YWluZXIgbWEtMCBwYS0wIGQtZmxleCBmbGV4LWNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBlbGV2YXRpb246IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhlbnRyeS50aW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KF92bS5fcyhlbnRyeS50aXRsZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQntGB0YLQsNC90L7QstC60LA6IFwiICsgX3ZtLl9zKGVudHJ5LnBsYWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBoaXN0b3J5LXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogZW50cnkudGltZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXktM1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi0KDQsNGB0L/QuNGB0LDQvdC40LUg0LXRidC1INC90LUg0YHQvtC30LTQsNC90L5cIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlLWJ0blwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJzdWNjZXNzXCIsIGZhYjogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5wdXNoKFwiL2J1cy9ldmVudC8wXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktcGx1c1wiKV0pXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=