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

        var container = _this.$el.querySelector("div.v-timeline-item[autofocus]");

        console.log(container);
        container.scrollTop = container.scrollHeight;
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
                              attrs: {
                                small: "",
                                autofocus: entry.color != "gray",
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
                                    _vm._v("Остановка: " + _vm._s(entry.place))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0J1c0V2ZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0J1c0V2ZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0J1c0V2ZW50cy52dWU/NTY4YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQnVzRXZlbnRzLnZ1ZT83NTEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQTtBQUNBLG1CQURBO0FBRUE7QUFDQTtBQUNBLFVBREE7QUFFQSxnQkFGQTtBQUdBLGFBSEE7QUFJQSxzQkFKQTtBQUtBLGtCQUxBO0FBTUE7QUFOQTtBQVFBLEdBWEE7QUFZQSxTQVpBLHFCQVlBO0FBQ0E7QUFFQSxHQWZBO0FBZ0JBO0FBQ0EsV0FEQSxxQkFDQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQSxPQUxBLFdBS0E7QUFDQTtBQUNBLE9BUEE7QUFRQSxLQVZBO0FBQUEsaUNBV0E7QUFBQTs7QUFDQSw4QkFDQTtBQUNBOztBQUNBO0FBQ0EsT0FIQSxXQUdBO0FBQ0E7QUFDQSxPQUxBO0FBTUE7QUFuQkEsR0FoQkE7QUFxQ0E7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsYUFKQSxxQkFJQSxFQUpBLEVBSUE7QUFDQTtBQUNBO0FBTkE7QUFyQ0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekR3RjtBQUMzQjtBQUNMOzs7QUFHeEQ7QUFDQSxDQUE2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENvTSxDQUFDLGlFQUFlLDJNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXZPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUJBQXVCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxQ0FBcUM7QUFDckQsbUJBQW1CO0FBQ25CLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLFlBQVksRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkJBQTJCLHVCQUF1QixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0NBQWtDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQ0FBc0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9jaHVua3MvcmVzb3VyY2VzX2pzX3BhZ2VzX0J1c0V2ZW50c192dWViM2RmMjVmY2Q0Yzc0N2RlZGM1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250YWluZXIgY2xhc3M9XCJjb3ZlclwiPlxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVwiJ9Cg0LDRgdC/0LjRgdCw0L3QuNC1INCw0LLRgtC+0LHRg9GB0LAnXCI+XG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICA8ZGl2IHYtaWY9XCJldmVudHMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPHYtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDx2LXRpbWVsaW5lIGRlbnNlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKGVudHJ5LCBpbmRleCkgaW4gZXZlbnRzXCIgOmtleT1cImluZGV4XCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXggY3J1ZFwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OiA1cHg7IHRvcDogLTEwcHg7IGZvbnQtc2l6ZTogMTBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxldGVfaWQgPSBlbnRyeS5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWRlbGV0ZTwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRpbWVsaW5lLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmF1dG9mb2N1cz1cImVudHJ5LmNvbG9yICE9ICdncmF5J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cImVudHJ5LmNvbG9yIHx8ICcjMTFhNTA2J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZCBlbGV2YXRpb249XCIwXCIgY2xhc3M9XCJjb250YWluZXIgbWEtMCBwYS0wIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBlbnRyeS50aW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3sgZW50cnkudGl0bGUgfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QntGB0YLQsNC90L7QstC60LA6IHt7IGVudHJ5LnBsYWNlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1yaWdodCBoaXN0b3J5LXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0aXRsZT1cImVudHJ5LnRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRpbWVsaW5lLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdi10aW1lbGluZT5cbiAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS0zXCI+0KDQsNGB0L/QuNGB0LDQvdC40LUg0LXRidC1INC90LUg0YHQvtC30LTQsNC90L48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHYtYnRuIGNsYXNzPVwic2F2ZS1idG5cIlxuICAgICAgICAgICAgICAgdi1pZj1cIiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNFwiXG4gICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLnB1c2goJy9idXMvZXZlbnQvMCcpXCJcbiAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICA8di1pY29uPm1kaS1wbHVzPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIkJ1c0V2ZW50c1wiLFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbDogMSxcbiAgICAgICAgICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgZGlhbG9nUG9zdDogbnVsbCxcbiAgICAgICAgICAgICAgICBkZWxldGVfaWQ6IDAsXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xuXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldFBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL2J1cy9ldmVudC8nLCB7cGFyYW1zOiB7cGFnZTogdGhpcy5wYWdlLCBwZXJfcGFnZTogMTB9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKFwiZGl2LnYtdGltZWxpbmUtaXRlbVthdXRvZm9jdXNdXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gY29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsZXRlX2lkID4gMClcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmRlbGV0ZSgnL2J1cy9ldmVudC8nICsgdGhpcy5kZWxldGVfaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVfaWQgPSAwXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBwYWdlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZV9pZChudikge1xuICAgICAgICAgICAgICAgIGlmIChudiA+IDApIHRoaXMuZGVsZXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQnVzRXZlbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDEzNDAwMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9qdXJhMTIwNTk2L1BocHN0b3JtUHJvamVjdHMvc2thc3kvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTAxMzQwMDAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTAxMzQwMDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTAxMzQwMDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0J1c0V2ZW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTAxMzQwMDAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTAxMzQwMDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9CdXNFdmVudHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1c0V2ZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb3ZlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgIGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoXCLQoNCw0YHQv9C40YHQsNC90LjQtSDQsNCy0YLQvtCx0YPRgdCwXCIpIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5ldmVudHMubGVuZ3RoID4gMFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtdGltZWxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBkZW5zZTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZXZlbnRzLCBmdW5jdGlvbihlbnRyeSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBzdGF0aWNTdHlsZTogeyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXggY3J1ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiLTEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVfaWQgPSBlbnRyeS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLWRlbGV0ZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdGltZWxpbmUtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXM6IGVudHJ5LmNvbG9yICE9IFwiZ3JheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZW50cnkuY29sb3IgfHwgXCIjMTFhNTA2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRhaW5lciBtYS0wIHBhLTAgZC1mbGV4IGZsZXgtY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZWxldmF0aW9uOiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoZW50cnkudGltZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoX3ZtLl9zKGVudHJ5LnRpdGxlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLQntGB0YLQsNC90L7QstC60LA6IFwiICsgX3ZtLl9zKGVudHJ5LnBsYWNlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGhpc3RvcnktdGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IGVudHJ5LnRpbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXktM1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi0KDQsNGB0L/QuNGB0LDQvdC40LUg0LXRidC1INC90LUg0YHQvtC30LTQsNC90L5cIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlLWJ0blwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJzdWNjZXNzXCIsIGZhYjogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5wdXNoKFwiL2J1cy9ldmVudC8wXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktcGx1c1wiKV0pXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=