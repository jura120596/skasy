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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/services/regions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/services/file_loader'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/DownloadButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Regions',
  components: {
    DownloadButton: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/DownloadButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data(vm) {
    return {
      filter: {
        name: '',
        region: null,
        court_type: null
      },
      loading: false,
      notFound: false,
      title: 'Суды',
      regions: [],
      courts: [],
      court_types: [],
      service: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/services/regions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      headers: {
        regions: [{
          value: 'code',
          text: 'Код региона'
        }, {
          value: 'region_number',
          text: 'ID региона'
        }, {
          value: 'name',
          text: 'Регион',
          link: true,
          id: 'code'
        }, {
          value: 'created_at',
          text: 'Дата создания'
        }],
        courts: [{
          value: 'name',
          text: 'Суд',
          link: true
        }, {
          value: 'address',
          text: 'Адрес'
        }, {
          value: 'phone',
          text: 'Телефон'
        }, {
          value: 'email',
          text: 'Электронная почта',
          link: true
        }, {
          value: 'url',
          text: 'Сайт',
          link: true
        }]
      },
      item_route_name: 'region-courts',
      vm: vm
    };
  },
  watch: {
    loading: function loading(a, b) {
      if (!a && b) {
        if (this.filter.name.length > 0 && this.courts.length == 0) {
          this.notFound = true;
        } else {
          this.notFound = false;
        }
      }
    }
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.service.loadMeta();

            case 2:
              _this.regions = _this.service.getRegions();
              _this.court_types = _this.service.getCourtTypes();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    showCourtsTable: function showCourtsTable() {
      return this.courts.length > 0;
    },
    regionsItemsUrl: function regionsItemsUrl() {
      return this.service.getPath() + '/regions';
    }
  },
  methods: {
    canClearFilter: function canClearFilter() {
      return this.filter.region || this.filter.court_type || this.filter.name;
    },
    clearFilter: function clearFilter() {
      this.filter.region = null;
      this.filter.court_type = null;
      this.filter.name = '';
    },
    showItem: function showItem(id) {
      this.$router.push({
        name: this.item_route_name,
        params: {
          code: id
        }
      });
    },
    showCourt: function showCourt(id) {
      var court = this.courts.find(function (c) {
        return c.id == id;
      });
      this.$router.push({
        name: 'court',
        params: {
          code: court.region_code,
          type: court.court_type,
          id: id
        }
      });
    },
    download: function download(exportFormat) {
      var filter = this.service.prepareParams(_objectSpread(_objectSpread({}, this.filter), {}, {
        "export": true,
        exportFormat: exportFormat
      }));
      Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/services/file_loader'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.service.getPath(), filter);
    },
    onLoadCourts: function onLoadCourts(data) {
      this.courts = data;
      this.loading = false;
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
  return _c(
    "v-container",
    [
      _c(
        "v-card",
        {
          staticClass: "d-flex justify-space-between mb-6",
          attrs: { flat: "", tile: "" }
        },
        [
          _c(
            "v-card",
            {
              staticClass: "pa-2 router-view-title no-shadow",
              attrs: { tile: "" }
            },
            [_c("v-toolbar-title", [_vm._v(_vm._s(_vm.title))])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            { staticClass: "pa-2 no-shadow", attrs: { tile: "" } },
            [
              _c("v-card-text", [
                _vm._v(
                  "Дата обновления: " + _vm._s(_vm.service.getLastUpdate())
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "filter" },
        [
          _vm._t(
            "filter",
            function() {
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
                            items: _vm.regions,
                            "hide-details": "",
                            dense: ""
                          },
                          model: {
                            value: _vm.filter.region,
                            callback: function($$v) {
                              _vm.$set(_vm.filter, "region", $$v)
                            },
                            expression: "filter.region"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
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
                            label: "Тип судов",
                            items: _vm.court_types,
                            "hide-details": "",
                            dense: ""
                          },
                          model: {
                            value: _vm.filter.court_type,
                            callback: function($$v) {
                              _vm.$set(_vm.filter, "court_type", $$v)
                            },
                            expression: "filter.court_type"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card",
                      {
                        staticClass: "pa-2 flex-grow-1 flex-shrink-1 no-shadow",
                        attrs: { tile: "" }
                      },
                      [
                        _c("v-text-field", {
                          attrs: {
                            name: "input-10-2",
                            placeholder: "Наименование суда",
                            outlined: "",
                            type: "text",
                            "hide-details": "",
                            dense: ""
                          },
                          model: {
                            value: _vm.filter.name,
                            callback: function($$v) {
                              _vm.$set(_vm.filter, "name", $$v)
                            },
                            expression: "filter.name"
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
            },
            { vm: _vm.vm }
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "d-flex flex-column justify-space-between mb-6",
          attrs: { flat: "", tile: "" }
        },
        [
          _c("app-data-table", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.showCourtsTable && !_vm.notFound,
                expression: "!showCourtsTable && !notFound"
              }
            ],
            attrs: {
              headers: _vm.headers.regions,
              showSelect: false,
              fixedCol: false,
              editItem: _vm.showItem,
              emptyItemText: "-",
              itemsUrl: _vm.regionsItemsUrl
            }
          }),
          _vm._v(" "),
          _c("app-data-table", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showCourtsTable,
                expression: "showCourtsTable"
              }
            ],
            ref: "courtsTable",
            attrs: {
              headers: _vm.headers.courts,
              showSelect: false,
              fixedCol: false,
              filter: _vm.filter,
              editItem: _vm.showCourt,
              emptyItemText: "-",
              service: _vm.service
            },
            on: {
              onLoad: _vm.onLoadCourts,
              onLoading: function($event) {
                _vm.loading = true
              }
            }
          }),
          _vm._v(" "),
          _vm.notFound
            ? [
                _c(
                  "v-alert",
                  {
                    staticStyle: { "margin-top": "20px" },
                    attrs: {
                      "colored-border": "",
                      type: "info",
                      elevation: "2"
                    }
                  },
                  [
                    _vm._v(
                      "\n                По Вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.\n            "
                    )
                  ]
                )
              ]
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1JlZ2lvbnMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9SZWdpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUmVnaW9ucy52dWU/ZjY0MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUmVnaW9ucy52dWU/ODNmNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUNBO0FBREEsR0FGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsb0JBRkE7QUFHQTtBQUhBLE9BREE7QUFNQSxvQkFOQTtBQU9BLHFCQVBBO0FBUUEsbUJBUkE7QUFTQSxpQkFUQTtBQVVBLGdCQVZBO0FBV0EscUJBWEE7QUFZQSxnS0FaQTtBQWFBO0FBQ0Esa0JBQ0E7QUFBQTtBQUFBO0FBQUEsU0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBLFNBRkEsRUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FIQSxFQUlBO0FBQUE7QUFBQTtBQUFBLFNBSkEsQ0FEQTtBQU9BLGlCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBLFNBRkEsRUFHQTtBQUFBO0FBQUE7QUFBQSxTQUhBLEVBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpBLEVBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUxBO0FBUEEsT0FiQTtBQTRCQSxzQ0E1QkE7QUE2QkE7QUE3QkE7QUErQkEsR0FyQ0E7QUFzQ0E7QUFDQSxXQURBLG1CQUNBLENBREEsRUFDQSxDQURB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QUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQ0FBa0M7QUFDdEUsaUNBQWlDO0FBQ2pDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsdUJBQXVCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9jaHVua3MvcmVzb3VyY2VzX2pzX3BhZ2VzX1JlZ2lvbnNfdnVlNDUxMTFlNzY3ZGRlNjNmZTA1OGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHYtY29udGFpbmVyPlxuICAgICAgICA8di1jYXJkIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktc3BhY2UtYmV0d2VlbiBtYi02XCIgZmxhdCB0aWxlPlxuICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cInBhLTIgcm91dGVyLXZpZXctdGl0bGUgbm8tc2hhZG93XCIgdGlsZT5cbiAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlPnt7IHRpdGxlIH19PC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgICA8L3YtY2FyZD5cblxuICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cInBhLTIgbm8tc2hhZG93XCIgdGlsZT5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+0JTQsNGC0LAg0L7QsdC90L7QstC70LXQvdC40Y86IHt7IHNlcnZpY2UuZ2V0TGFzdFVwZGF0ZSgpIH19PC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPHYtY2FyZCBjbGFzcz1cImZpbHRlclwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZpbHRlclwiIHYtYmluZDp2bT1cInZtXCI+XG4gICAgICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LXNwYWNlLWJldHdlZW4gbWItNiBuby1zaGFkb3dcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudFwiIGZsYXQgdGlsZT5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZCB0aWxlIGNsYXNzPVwicGEtMiBmbGV4LWdyb3ctMSBmbGV4LXNocmluay0wIG5vLXNoYWRvd1wiIHN0eWxlPVwibWF4LXdpZHRoOiAyMDBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29tYm9ib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLXNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCg0LXQs9C40L7QvVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwicmVnaW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbHRlci5yZWdpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29tYm9ib3g+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkIHRpbGUgY2xhc3M9XCJwYS0yIGZsZXgtZ3Jvdy0xIGZsZXgtc2hyaW5rLTAgbm8tc2hhZG93XCIgc3R5bGU9XCJtYXgtd2lkdGg6IDIwMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb21ib2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0KLQuNC/INGB0YPQtNC+0LJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcz1cImNvdXJ0X3R5cGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVyLmNvdXJ0X3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29tYm9ib3g+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkIGNsYXNzPVwicGEtMiBmbGV4LWdyb3ctMSBmbGV4LXNocmluay0xIG5vLXNoYWRvd1wiIHRpbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImlucHV0LTEwLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGB0YPQtNCwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVyLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cInBhLTIgZC1mbGV4IGZsZXgtZ3Jvdy0wIGZsZXgtc2hyaW5rLTAgbm8tc2hhZG93XCIgdGlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjbGFzcz1cIm1yLTRcIiBAY2xpY2s9XCJjbGVhckZpbHRlclwiIDpkaXNhYmxlZD1cIiFjYW5DbGVhckZpbHRlcigpXCI+0KHQsdGA0L7RgdC40YLRjCA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRvd25sb2FkLWJ1dHRvbiBjbGFzcz1cIm1yLTRcIiBAY2xpY2s9XCJkb3dubG9hZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlciAvPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPHYtY2FyZCBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LXNwYWNlLWJldHdlZW4gbWItNlwiIGZsYXQgdGlsZT5cbiAgICAgICAgICAgIDxhcHAtZGF0YS10YWJsZVxuICAgICAgICAgICAgICAgIHYtc2hvdz1cIiFzaG93Q291cnRzVGFibGUgJiYgIW5vdEZvdW5kXCJcbiAgICAgICAgICAgICAgICA6aGVhZGVycz1cImhlYWRlcnMucmVnaW9uc1wiXG4gICAgICAgICAgICAgICAgOnNob3dTZWxlY3Q9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgOmZpeGVkQ29sPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIDplZGl0SXRlbT1cInNob3dJdGVtXCJcbiAgICAgICAgICAgICAgICA6ZW1wdHlJdGVtVGV4dD1cIictJ1wiXG4gICAgICAgICAgICAgICAgOml0ZW1zVXJsPVwicmVnaW9uc0l0ZW1zVXJsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvYXBwLWRhdGEtdGFibGU+XG4gICAgICAgICAgICA8YXBwLWRhdGEtdGFibGVcbiAgICAgICAgICAgICAgICByZWY9XCJjb3VydHNUYWJsZVwiXG4gICAgICAgICAgICAgICAgdi1zaG93PVwic2hvd0NvdXJ0c1RhYmxlXCJcbiAgICAgICAgICAgICAgICA6aGVhZGVycz1cImhlYWRlcnMuY291cnRzXCJcbiAgICAgICAgICAgICAgICA6c2hvd1NlbGVjdD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICA6Zml4ZWRDb2w9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgOmZpbHRlcj1cImZpbHRlclwiXG4gICAgICAgICAgICAgICAgOmVkaXRJdGVtPVwic2hvd0NvdXJ0XCJcbiAgICAgICAgICAgICAgICA6ZW1wdHlJdGVtVGV4dD1cIictJ1wiXG4gICAgICAgICAgICAgICAgOnNlcnZpY2U9XCJzZXJ2aWNlXCJcbiAgICAgICAgICAgICAgICBAb25Mb2FkPVwib25Mb2FkQ291cnRzXCJcbiAgICAgICAgICAgICAgICBAb25Mb2FkaW5nPVwibG9hZGluZyA9IHRydWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9hcHAtZGF0YS10YWJsZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibm90Rm91bmRcIj5cbiAgICAgICAgICAgICAgICA8di1hbGVydCBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHhcIiBjb2xvcmVkLWJvcmRlciB0eXBlPVwiaW5mb1wiIGVsZXZhdGlvbj1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAg0J/QviDQktCw0YjQtdC80YMg0LfQsNC/0YDQvtGB0YMg0L3QuNGH0LXQs9C+INC90LUg0L3QsNC50LTQtdC90L4uINCf0L7Qv9GA0L7QsdGD0LnRgtC1INC40LfQvNC10L3QuNGC0Ywg0L/QsNGA0LDQvNC10YLRgNGLINC/0L7QuNGB0LrQsC5cbiAgICAgICAgICAgICAgICA8L3YtYWxlcnQ+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3YtY2FyZD5cbiAgICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBSZWdpb25TZXJ2aWNlIGZyb20gJ0Avc2VydmljZXMvcmVnaW9ucydcbiAgICBpbXBvcnQgRmlsZUxvYWRlciBmcm9tICdAL3NlcnZpY2VzL2ZpbGVfbG9hZGVyJ1xuICAgIGltcG9ydCBEb3dubG9hZEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvRG93bmxvYWRCdXR0b24nXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnUmVnaW9ucycsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIERvd25sb2FkQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY291cnRfdHlwZTogbnVsbCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ9Ch0YPQtNGLJyxcbiAgICAgICAgICAgICAgICByZWdpb25zOiBbXSxcbiAgICAgICAgICAgICAgICBjb3VydHM6IFtdLFxuICAgICAgICAgICAgICAgIGNvdXJ0X3R5cGVzOiBbXSxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiBSZWdpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ2NvZGUnLCB0ZXh0OiAn0JrQvtC0INGA0LXQs9C40L7QvdCwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ3JlZ2lvbl9udW1iZXInLCB0ZXh0OiAnSUQg0YDQtdCz0LjQvtC90LAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnbmFtZScsIHRleHQ6ICfQoNC10LPQuNC+0L0nLCBsaW5rOiB0cnVlLCBpZDogJ2NvZGUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnY3JlYXRlZF9hdCcsIHRleHQ6ICfQlNCw0YLQsCDRgdC+0LfQtNCw0L3QuNGPJyB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBjb3VydHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICduYW1lJywgdGV4dDogJ9Ch0YPQtCcsIGxpbms6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdhZGRyZXNzJywgdGV4dDogJ9CQ0LTRgNC10YEnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAncGhvbmUnLCB0ZXh0OiAn0KLQtdC70LXRhNC+0L0nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnZW1haWwnLCB0ZXh0OiAn0K3Qu9C10LrRgtGA0L7QvdC90LDRjyDQv9C+0YfRgtCwJywgbGluazogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ3VybCcsIHRleHQ6ICfQodCw0LnRgicsIGxpbms6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGl0ZW1fcm91dGVfbmFtZTogJ3JlZ2lvbi1jb3VydHMnLFxuICAgICAgICAgICAgICAgIHZtLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgbG9hZGluZyhhLCBiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhICYmIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyLm5hbWUubGVuZ3RoID4gMCAmJiB0aGlzLmNvdXJ0cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RGb3VuZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90Rm91bmQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VydmljZS5sb2FkTWV0YSgpXG4gICAgICAgICAgICB0aGlzLnJlZ2lvbnMgPSB0aGlzLnNlcnZpY2UuZ2V0UmVnaW9ucygpXG4gICAgICAgICAgICB0aGlzLmNvdXJ0X3R5cGVzID0gdGhpcy5zZXJ2aWNlLmdldENvdXJ0VHlwZXMoKVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc2hvd0NvdXJ0c1RhYmxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdXJ0cy5sZW5ndGggPiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaW9uc0l0ZW1zVXJsKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZ2V0UGF0aCgpICsgJy9yZWdpb25zJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgY2FuQ2xlYXJGaWx0ZXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyLnJlZ2lvbiB8fCB0aGlzLmZpbHRlci5jb3VydF90eXBlIHx8IHRoaXMuZmlsdGVyLm5hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckZpbHRlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlci5yZWdpb24gPSBudWxsXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXIuY291cnRfdHlwZSA9IG51bGxcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlci5uYW1lID0gJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93SXRlbShpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogdGhpcy5pdGVtX3JvdXRlX25hbWUsIHBhcmFtczogeyBjb2RlOiBpZCB9IH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0NvdXJ0KGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY291cnQgPSB0aGlzLmNvdXJ0cy5maW5kKChjKSA9PiBjLmlkID09IGlkKVxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvdXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBjb3VydC5yZWdpb25fY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGNvdXJ0LmNvdXJ0X3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd25sb2FkKGV4cG9ydEZvcm1hdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuc2VydmljZS5wcmVwYXJlUGFyYW1zKHsgLi4udGhpcy5maWx0ZXIsIGV4cG9ydDogdHJ1ZSwgZXhwb3J0Rm9ybWF0IH0pXG4gICAgICAgICAgICAgICAgRmlsZUxvYWRlci5kb3dubG9hZCh0aGlzLnNlcnZpY2UuZ2V0UGF0aCgpLCBmaWx0ZXIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Mb2FkQ291cnRzKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdXJ0cyA9IGRhdGFcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZWdpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZjFlOGRmNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SZWdpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmVnaW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImJmMWU4ZGY0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYmYxZThkZjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYmYxZThkZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYmYxZThkZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1JlZ2lvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJmMWU4ZGY0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JmMWU4ZGY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvUmVnaW9ucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktc3BhY2UtYmV0d2VlbiBtYi02XCIsXG4gICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgdGlsZTogXCJcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhLTIgcm91dGVyLXZpZXctdGl0bGUgbm8tc2hhZG93XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRpbGU6IFwiXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInYtdG9vbGJhci10aXRsZVwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYS0yIG5vLXNoYWRvd1wiLCBhdHRyczogeyB0aWxlOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCLQlNCw0YLQsCDQvtCx0L3QvtCy0LvQtdC90LjRjzogXCIgKyBfdm0uX3MoX3ZtLnNlcnZpY2UuZ2V0TGFzdFVwZGF0ZSgpKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZpbHRlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3QoXG4gICAgICAgICAgICBcImZpbHRlclwiLFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1zcGFjZS1iZXR3ZWVuIG1iLTYgbm8tc2hhZG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWJvdHRvbVwiOiBcIjAgIWltcG9ydGFudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIHRpbGU6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYS0yIGZsZXgtZ3Jvdy0xIGZsZXgtc2hyaW5rLTAgbm8tc2hhZG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1heC13aWR0aFwiOiBcIjIwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpbGU6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNvbWJvYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLXNlbGVjdGVkXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0KDQtdCz0LjQvtC9XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5yZWdpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2U6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbHRlci5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpbHRlciwgXCJyZWdpb25cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWx0ZXIucmVnaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYS0yIGZsZXgtZ3Jvdy0xIGZsZXgtc2hyaW5rLTAgbm8tc2hhZG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1heC13aWR0aFwiOiBcIjIwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpbGU6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNvbWJvYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLXNlbGVjdGVkXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0KLQuNC/INGB0YPQtNC+0LJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmNvdXJ0X3R5cGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2U6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbHRlci5jb3VydF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5maWx0ZXIsIFwiY291cnRfdHlwZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbHRlci5jb3VydF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYS0yIGZsZXgtZ3Jvdy0xIGZsZXgtc2hyaW5rLTEgbm8tc2hhZG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aWxlOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImlucHV0LTEwLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0YHRg9C00LBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtZGV0YWlsc1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWx0ZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZmlsdGVyLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWx0ZXIubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicGEtMiBkLWZsZXggZmxleC1ncm93LTAgZmxleC1zaHJpbmstMCBuby1zaGFkb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpbGU6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIV92bS5jYW5DbGVhckZpbHRlcigpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbGVhckZpbHRlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQodCx0YDQvtGB0LjRgtGMIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkb3dubG9hZC1idXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZG93bmxvYWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHZtOiBfdm0udm0gfVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LXNwYWNlLWJldHdlZW4gbWItNlwiLFxuICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIHRpbGU6IFwiXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJhcHAtZGF0YS10YWJsZVwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLnNob3dDb3VydHNUYWJsZSAmJiAhX3ZtLm5vdEZvdW5kLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIXNob3dDb3VydHNUYWJsZSAmJiAhbm90Rm91bmRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMucmVnaW9ucyxcbiAgICAgICAgICAgICAgc2hvd1NlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICAgIGZpeGVkQ29sOiBmYWxzZSxcbiAgICAgICAgICAgICAgZWRpdEl0ZW06IF92bS5zaG93SXRlbSxcbiAgICAgICAgICAgICAgZW1wdHlJdGVtVGV4dDogXCItXCIsXG4gICAgICAgICAgICAgIGl0ZW1zVXJsOiBfdm0ucmVnaW9uc0l0ZW1zVXJsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFwcC1kYXRhLXRhYmxlXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93Q291cnRzVGFibGUsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93Q291cnRzVGFibGVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVmOiBcImNvdXJ0c1RhYmxlXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBoZWFkZXJzOiBfdm0uaGVhZGVycy5jb3VydHMsXG4gICAgICAgICAgICAgIHNob3dTZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICBmaXhlZENvbDogZmFsc2UsXG4gICAgICAgICAgICAgIGZpbHRlcjogX3ZtLmZpbHRlcixcbiAgICAgICAgICAgICAgZWRpdEl0ZW06IF92bS5zaG93Q291cnQsXG4gICAgICAgICAgICAgIGVtcHR5SXRlbVRleHQ6IFwiLVwiLFxuICAgICAgICAgICAgICBzZXJ2aWNlOiBfdm0uc2VydmljZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIG9uTG9hZDogX3ZtLm9uTG9hZENvdXJ0cyxcbiAgICAgICAgICAgICAgb25Mb2FkaW5nOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0ubG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLm5vdEZvdW5kXG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIyMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yZWQtYm9yZGVyXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uOiBcIjJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAg0J/QviDQktCw0YjQtdC80YMg0LfQsNC/0YDQvtGB0YMg0L3QuNGH0LXQs9C+INC90LUg0L3QsNC50LTQtdC90L4uINCf0L7Qv9GA0L7QsdGD0LnRgtC1INC40LfQvNC10L3QuNGC0Ywg0L/QsNGA0LDQvNC10YLRgNGLINC/0L7QuNGB0LrQsC5cXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=