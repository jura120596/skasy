(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Regions_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppDataTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppDataTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/axios */ "./resources/js/utils/axios.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AppDataTable',
  props: {
    headers: Array,
    itemsUrl: {
      type: String,
      "default": null
    },
    items: {
      type: Array,
      "default": function _default() {
        return undefined;
      }
    },
    showSelect: Boolean,
    fixedCol: Boolean,
    filter: Object,
    service: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    toItem: {
      type: Function,
      "default": function _default(item) {
        return item;
      }
    },
    editItem: {
      type: Function,
      "default": function _default(id) {}
    },
    emptyItemText: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      pageCount: 0,
      tableItems: this.items,
      selected: [],
      total: 0,
      tableHeaders: this.headers,
      withSelect: this.showSelect,
      withFixed: this.fixedCol,
      tableFilter: _objectSpread(_objectSpread({}, this.filter), {}, {
        page: 1,
        per_page: 20,
        sortBy: 'id',
        sortDesc: false
      }),
      scrollRun: false,
      showScroll: false,
      tableOptions: {},
      tableEditItem: this.editItem,
      emptyText: this.emptyItemText,
      loading: false
    };
  },
  methods: {
    getFixedColumnLeft: function getFixedColumnLeft() {
      var indx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.headers.length;
      return this.headers.filter(function (header, i) {
        return i < indx && header.fixed === true;
      }).reduce(function (currentValue, header) {
        return currentValue + (parseInt(header.width) || 0);
      }, 0);
    },
    getFixedHeaders: function getFixedHeaders(reverse) {
      return this.headers.filter(function (header) {
        return !reverse ? header.fixed === true : !(header.fixed !== undefined && header.fixed !== false);
      });
    },
    loadItems: function loadItems() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.items !== undefined)) {
                  _context.next = 5;
                  break;
                }

                _this.total = _this.items.length;
                _this.pageCount = Math.floor(_this.total / _this.tableFilter.per_page) + (_this.total === _this.tableFilter.per_page ? 0 : 1);

                _this.tableViewNormalize();

                return _context.abrupt("return");

              case 5:
                if (!_this.itemsUrl) {
                  _context.next = 11;
                  break;
                }

                params = _this.service && _this.service.prepareParams ? _this.service.prepareParams(_this.tableFilter) : _this.tableFilter;
                _this.loading = true;

                _this.$emit('onLoading');

                _utils_axios__WEBPACK_IMPORTED_MODULE_2__.default.get(_this.itemsUrl, {
                  params: params
                }).then(function (response) {
                  _this.tableItems = response.data.data.map(_this.toItem);
                  _this.total = response.data.total;
                  _this.pageCount = response.data.last_page;

                  _this.tableViewNormalize();

                  _this.loading = false;

                  _this.$emit('onLoad', response.data.data);
                })["catch"](function (e) {
                  console.log(e);
                  _this.loading = false;

                  _this.$emit('onLoad');
                });
                return _context.abrupt("return");

              case 11:
                _this.loading = true;

                _this.$emit('onLoading');

                _this.service.getAll(_this.tableFilter).then(function (response) {
                  _this.tableItems = response.data.data.map(_this.toItem);
                  _this.total = response.data.total;
                  _this.pageCount = response.data.last_page;

                  _this.tableViewNormalize();

                  _this.loading = false;

                  _this.$emit('onLoad', response.data.data);
                })["catch"](function (e) {
                  console.log(e);
                  _this.loading = false;

                  _this.$emit('onLoad');
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    scrollTo: function scrollTo(element, scrollPixels, duration) {
      var _this2 = this;

      var scrollPos = element.scrollLeft; // Condition to check if scrolling is required

      if (!((scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0))) {
        // Get the start timestamp
        var startTime = "now" in window.performance ? performance.now() : new Date().getTime();

        var scroll = function scroll(timestamp) {
          //Calculate the timeelapsed
          var timeElapsed = timestamp - startTime; //Calculate progress

          var progress = duration ? Math.min(timeElapsed / duration, 1) : null; //Set the scrolleft

          element.scrollLeft = progress ? scrollPos + scrollPixels * progress : element.scrollLeft + 10 * scrollPixels / Math.abs(scrollPixels); //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit

          if (_this2.scrollRun) {
            //Request for animation
            window.requestAnimationFrame(scroll);
          } else {
            return;
          }
        }; //Call requestAnimationFrame on scroll function first time


        window.requestAnimationFrame(scroll);
      }
    },
    onScrollLeft: function onScrollLeft() {
      this.scrollRun = true;
      this.scrollTo(this.$refs.table.$el.childNodes[0], -this.$refs.table.$el.childNodes[0].scrollWidth);
    },
    onScrollRight: function onScrollRight() {
      this.scrollRun = true;
      this.scrollTo(this.$refs.table.$el.childNodes[0], this.$refs.table.$el.childNodes[0].scrollWidth);
    },
    tableViewNormalize: function tableViewNormalize() {
      var _this3 = this;

      if (this.$refs.fixedTable) Object.keys(this.$refs).forEach(function (v) {
        if (v.search('row') === 0 && _this3.$refs['settings' + v]) {
          _this3.$refs['settings' + v].style.height = _this3.$refs[v].clientHeight - 1 + 'px'; //bootom border on every table row
        }
      });
    }
  },
  created: function created() {
    this.debouncedLoadItems = lodash__WEBPACK_IMPORTED_MODULE_1___default().debounce(this.loadItems, 500);
  },
  watch: {
    tableFilter: {
      handler: function handler() {
        this.debouncedLoadItems();
      },
      deep: true
    },
    tableOptions: {
      handler: function handler() {
        if (this.tableOptions.sortBy.length === 1) {
          this.tableFilter.sortBy = this.tableOptions.sortBy[0];
        }

        if (this.tableOptions.sortDesc.length === 1) {
          this.tableFilter.sortDesc = this.tableOptions.sortDesc[0];
        }

        var _this$tableFilter = this.tableFilter,
            sortBy = _this$tableFilter.sortBy,
            sortDesc = _this$tableFilter.sortDesc;
        this.$emit('onSort', {
          sortBy: sortBy,
          sortDesc: sortDesc
        });
      },
      deep: true
    },
    tableItems: {
      handler: function handler() {
        var _this4 = this;

        setTimeout(function () {
          _this4.showScroll = _this4.$refs.table.$el.childNodes[0].scrollWidth > _this4.$refs.table.$el.scrollWidth;
        }, 500);
      },
      deep: true
    },
    filter: {
      handler: function handler(value) {
        if (value) {
          this.tableFilter = _objectSpread(_objectSpread({}, this.tableFilter), this.filter);
          this.tableFilter.page = 1;
        }
      },
      deep: true
    },
    items: {
      handler: function handler(value) {
        this.tableItems = value;
      },
      deep: true
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    this.loadItems();
    this.$watch(function () {
      return _this5.$refs.table.items;
    }, function (val) {
      _this5.tableViewNormalize();
    });
  }
});

/***/ }),

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
/* harmony import */ var _components_AppDataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppDataTable */ "./resources/js/components/AppDataTable.vue");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Regions',
  components: {
    AppDataTable: _components_AppDataTable__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data(vm) {
    return {
      loading: false,
      notFound: false,
      headers: {
        regions: [{
          value: 'code',
          text: 'Код региона'
        }, {
          value: 'name',
          text: 'Регион',
          link: true,
          id: 'id'
        }, {
          value: 'districts_count',
          text: 'Активных районов'
        }]
      },
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
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    regionsItemsUrl: function regionsItemsUrl() {
      return '/district/region';
    }
  },
  methods: {
    showItem: function showItem(id) {
      this.$router.push({
        name: 'districts',
        params: {
          region: id,
          id: 0
        },
        query: {
          level: 0
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppDataTable.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppDataTable.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ntable {\n    width: -webkit-max-content !important;\n    width: -moz-max-content !important;\n    width: max-content !important;\n}\nth.fixedColumn, td.fixedColumn {\n    position: absolute;\n    display: flex;\n    text-align: center;\n}\n.fixedColumn   th:last-child{\n    border-right: 1px solid;\n}\ndiv > .fixedColumn:nth-child(1) {\n    padding-right: 0;\n}\ndiv > .col:nth-child(2) {\n    padding-left: 0;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/AppDataTable.vue"],"names":[],"mappings":";AAiWA;IACA,qCAAA;IAAA,kCAAA;IAAA,6BAAA;AACA;AACA;IACA,kBAAA;IACA,aAAA;IACA,kBAAA;AACA;AACA;IACA,uBAAA;AACA;AACA;IACA,gBAAA;AACA;AACA;IACA,eAAA;AACA","sourcesContent":["<template>\n    <v-container >\n        <slot name=\"body.prepend\"/>\n        <v-row\n            style=\"flex-wrap: nowrap;\">\n            <v-col v-if=\"withFixed && getFixedHeaders(false).length>0\"\n                   class=\"fixedColumn flex-grow-0 flex-shrink-0\">\n                <v-data-table :headers=\"getFixedHeaders(false)\" :items=\"tableItems\" item-key=\"id\" v-model=\"selected\"\n                              :page.sync=\"tableFilter.page\"\n                              :items-per-page=\"tableFilter.per_page\"\n                              @page-count=\"pageCount = $event\"\n                              :server-items-length=\"total\"\n                              hide-default-footer\n                              v-on:input=\"$emit('input')\"\n                              :options.sync=\"tableOptions\"\n                              :show-select=\"withSelect\" style=\"width: max-content\"\n                              :no-data-text=\"'Нет данных'\"\n                              :no-results-text=\"'Нет данных'\"\n                              ref=\"fixedTable\"\n                              :loading=\"loading\"\n                              loading-text=\"Загрузка... Пожалуйста, подождите\"\n                >\n                    <template v-slot:header.settings=\"{header}\">\n                        <v-container class=\"d-flex align-center\">\n                            <slot name=\"header-settings-menu\" v-bind:header=\"header\"></slot>\n                        </v-container>\n                    </template>\n                    <template v-slot:item.settings=\"{item}\">\n                        <v-menu offset-y>\n                            <template v-slot:activator=\"{ on, attrs }\">\n                                <v-card-text  :ref=\"'settingsrow'+item.id\" class=\"ma-0 pa-0 d-flex flex-column justify-center\" >\n                                    <v-btn\n                                        color=\"primary\"\n                                        dark\n                                        v-bind=\"attrs\"\n                                        v-on=\"on\"\n                                        icon>\n                                        <v-icon small>mdi-menu</v-icon>\n                                    </v-btn>\n                                </v-card-text>\n                            </template>\n                            <slot name=\"item-settings-menu\" v-bind:item=\"item\"></slot>\n                        </v-menu>\n                    </template>\n                    <template v-slot:item.mark=\"{item}\">\n                        <v-tooltip bottom>\n                            <template v-slot:activator=\"{ on, attrs }\">\n                                <v-icon\n                                    v-if=\"item.color\"\n                                    v-bind=\"attrs\"\n                                    v-on=\"on\"\n                                    small\n                                    :style=\"{color: item.color.color}\"\n                                >mdi-checkbox-blank-circle</v-icon>\n                            </template>\n                            <span>{{item.color.text}} (Последнее обновление:{{item.finished_at}})</span>\n                        </v-tooltip>\n                        {{item.mark}}\n                    </template>\n                </v-data-table>\n\n            </v-col>\n            <v-col style=\"overflow:hidden;display: block;position:relative; \"\n                   class=\"flex-grow-1 flex-shrink-1\">\n                <div v-if=\"tableItems && tableItems.length > 0 && showScroll\">\n                    <v-chip class=\"app-table-scroll-left\" @mouseover=\"onScrollLeft\" @mouseout=\"scrollRun = false;\"/>\n                    <v-chip class=\"app-table-scroll-left app-table-scroll-right\"  @mouseover=\"onScrollRight\"  @mouseout=\"scrollRun = false;\"/>\n                </div>\n                <v-data-table :headers=\"withFixed ? getFixedHeaders(true) : tableHeaders\" :items=\"tableItems\"\n                              :page.sync=\"tableFilter.page\"\n                              :items-per-page=\"tableFilter.per_page\"\n                              @page-count=\"pageCount = $event\"\n                              :options.sync=\"tableOptions\"\n                              :server-items-length=\"total\"\n                              :no-data-text=\"withSelect ? '' : 'Нет данных'\"\n                              :no-results-text=\"withSelect ? '' : 'Нет данных'\"\n                              ref=\"table\"\n                              :loading=\"loading\"\n                              loading-text=\"Загрузка... Пожалуйста, подождите\"\n                              hide-default-footer>\n                    <template slot=\"item\" slot-scope=\"props\">\n                        <tr :ref=\"'row'+props.item.id\">\n                            <td v-for=\"(item, index) in props.headers\" style=\"max-width: 500px\">\n                                <div v-if=\"item.link === true\">\n                                    <slot name=\"link_item\" v-bind=\"{props, item}\">\n                                        <a @click=\"tableEditItem(props.item[item.id === undefined ? 'id' : item.id], props.item, item.value)\" >{{props.item[item.value]}}</a>\n                                    </slot>\n                                </div>\n                                <div v-else-if=\"item.hidden === true && (props.item[item.value] || props.item.hidden_prepend)\">\n                                    <p v-if=\"props.item.hidden_prepend\">{{props.item.hidden_prepend}}</p>\n                                    <p v-if=\"!props.item.hidden\">{{props.item[item.value]}}</p>\n                                    <a v-if=\"props.item[item.value]\" @click=\"props.item.hidden = !props.item.hidden\">\n                                        {{props.item.hidden ? 'Показать текст' : 'Скрыть текст'}}\n                                    </a>\n                                </div>\n                                <div v-else>\n                                    {{props.item[item.value] !== undefined && props.item[item.value] !== null ? props.item[item.value] : emptyText}}\n                                </div>\n                            </td>\n                        </tr>\n                    </template>\n                </v-data-table>\n            </v-col>\n        </v-row>\n        <slot name=\"body.append\"/>\n        <slot name=\"body.pagination\">\n            <div class=\" d-flex pt-2\">\n                <v-pagination\n                    v-model=\"tableFilter.page\"\n                    :length=\"pageCount\"\n                    :total-visible=\"7\"\n                ></v-pagination>\n                <v-spacer></v-spacer>\n                <v-select\n                    :value=\"tableFilter.per_page\"\n                    @change=\"tableFilter.per_page = parseInt($event, 10) ? parseInt($event, 10) : 1\"\n                    :items=\"[20,40,60,80,100]\"\n                    label=\"Показывать по:\"\n                    style=\"max-width: 150px\"\n                ></v-select>\n            </div>\n        </slot>\n    </v-container>\n</template>\n<script>\n    import _ from 'lodash';\n    import Axios from '@/utils/axios';\n    export default {\n        name: 'AppDataTable',\n        props: {\n            headers: Array,\n            itemsUrl: {\n                type:String,\n                default: null,\n            },\n            items: {\n                type: Array,\n                default: function() {\n                    return undefined;\n                }\n            },\n            showSelect: Boolean,\n            fixedCol: Boolean,\n            filter: Object,\n            service: {\n                type:Object,\n                default: () => ({})\n            },\n            toItem: {\n                type: Function,\n                default:  (item) => {return item;},\n            },\n            editItem: {\n                type: Function,\n                default: (id) => {},\n            },\n            emptyItemText: {\n                type:String,\n                default: '',\n            },\n        },\n        data: function () {\n            return {\n                pageCount: 0,\n                tableItems: this.items,\n                selected: [],\n                total: 0,\n                tableHeaders: this.headers,\n                withSelect : this.showSelect,\n                withFixed: this.fixedCol,\n                tableFilter: {\n                    ...this.filter,\n                    page: 1,\n                    per_page: 20,\n                    sortBy: 'id',\n                    sortDesc : false,\n                },\n                scrollRun: false,\n                showScroll: false,\n                tableOptions: {},\n                tableEditItem: this.editItem,\n                emptyText: this.emptyItemText,\n                loading: false,\n            };\n        },\n        methods: {\n            getFixedColumnLeft (indx = this.headers.length) {\n                return this.headers\n                    .filter((header, i) => i < indx && header.fixed === true)\n                    .reduce((currentValue, header) => currentValue + (parseInt(header.width) || 0), 0)\n            },\n            getFixedHeaders(reverse) {\n                return this.headers\n                    .filter((header) => {\n                        return !reverse ? header.fixed === true : !(header.fixed !== undefined && header.fixed !== false)\n                    });\n            },\n            async loadItems() {\n                if (this.items !== undefined) {\n                    this.total = this.items.length;\n                    this.pageCount = Math.floor(this.total / this.tableFilter.per_page)\n                        + (this.total === this.tableFilter.per_page ? 0 : 1);\n                    this.tableViewNormalize()\n                    return;\n                }\n                if  (this.itemsUrl) {\n                    let params = this.service && this.service.prepareParams\n                        ? this.service.prepareParams(this.tableFilter)\n                        : this.tableFilter;\n                    this.loading = true\n                    this.$emit('onLoading')\n                    Axios.get(this.itemsUrl, {params})\n                        .then((response) => {\n                            this.tableItems = response.data.data.map(this.toItem);\n                            this.total = response.data.total;\n                            this.pageCount = response.data.last_page;\n                            this.tableViewNormalize()\n                            this.loading = false\n                            this.$emit('onLoad', response.data.data)\n                        })\n                        .catch((e) => {\n                            console.log(e);\n                            this.loading = false\n                            this.$emit('onLoad')\n                        });\n                    return;\n                }\n                this.loading = true\n                this.$emit('onLoading')\n                this.service.getAll(this.tableFilter)\n                    .then((response) => {\n                        this.tableItems = response.data.data.map(this.toItem);\n                        this.total = response.data.total;\n                        this.pageCount = response.data.last_page;\n                        this.tableViewNormalize()\n                        this.loading = false\n                        this.$emit('onLoad', response.data.data)\n                    })\n                    .catch((e) => {\n                        console.log(e);\n                        this.loading = false\n                        this.$emit('onLoad')\n                    });\n            },\n            scrollTo(element, scrollPixels, duration) {\n                const scrollPos = element.scrollLeft;\n                // Condition to check if scrolling is required\n                if ( !( (scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0)))\n                {\n                    // Get the start timestamp\n                    const startTime =\n                        \"now\" in window.performance\n                            ? performance.now()\n                            : new Date().getTime();\n                    let scroll = (timestamp)  => {\n                        //Calculate the timeelapsed\n                        const timeElapsed = timestamp - startTime;\n                        //Calculate progress\n                        const progress = duration ? Math.min(timeElapsed / duration, 1) : null;\n                        //Set the scrolleft\n                        element.scrollLeft = (progress\n                            ? scrollPos + scrollPixels * progress :\n                            element.scrollLeft + 10 * scrollPixels /(Math.abs(scrollPixels)));\n                        //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit\n                        if (this.scrollRun) {\n                            //Request for animation\n                            window.requestAnimationFrame(scroll);\n                        } else {\n                            return;\n                        }\n                    }\n                    //Call requestAnimationFrame on scroll function first time\n                    window.requestAnimationFrame(scroll);\n                }\n            },\n            onScrollLeft() {\n                this.scrollRun = true;\n                this.scrollTo(this.$refs.table.$el.childNodes[0], -this.$refs.table.$el.childNodes[0].scrollWidth);\n            },\n            onScrollRight() {\n                this.scrollRun = true;\n                this.scrollTo(this.$refs.table.$el.childNodes[0], this.$refs.table.$el.childNodes[0].scrollWidth);\n            },\n            tableViewNormalize() {\n                if (this.$refs.fixedTable) Object.keys(this.$refs).forEach((v) => {\n                    if (v.search('row') === 0 && this.$refs['settings'+ v]) {\n                        this.$refs['settings'+ v].style.height = (this.$refs[v].clientHeight - 1)+'px'; //bootom border on every table row\n                    }\n                })\n            }\n        },\n        created: function() {\n            this.debouncedLoadItems = _.debounce(this.loadItems, 500)\n        },\n        watch: {\n            tableFilter: {\n                handler () {\n                    this.debouncedLoadItems()\n                },\n                deep: true\n            },\n            tableOptions: {\n                handler() {\n                    if (this.tableOptions.sortBy.length === 1) {\n                        this.tableFilter.sortBy = this.tableOptions.sortBy[0];\n                    }\n                    if (this.tableOptions.sortDesc.length === 1) {\n                        this.tableFilter.sortDesc = this.tableOptions.sortDesc[0];\n                    }\n                    const { sortBy, sortDesc } = this.tableFilter\n                    this.$emit('onSort', { sortBy, sortDesc })\n                },\n                deep: true,\n            },\n            tableItems: {\n                handler() {\n                    setTimeout(() =>  {\n                        this.showScroll = this.$refs.table.$el.childNodes[0].scrollWidth > this.$refs.table.$el.scrollWidth;\n                    }, 500);\n                },\n                deep:true,\n            },\n            filter: {\n                handler(value) {\n                    if (value) {\n                        this.tableFilter = {...this.tableFilter, ...this.filter};\n                        this.tableFilter.page = 1;\n                    }\n                },\n                deep:true\n            },\n            items: {\n                handler(value) {\n                    this.tableItems = value;\n                },\n                deep: true,\n            }\n        },\n        mounted() {\n            this.loadItems()\n            this.$watch(\n                () => {\n                    return this.$refs.table.items\n                },\n                (val) => {\n                    this.tableViewNormalize()\n                }\n            )\n        },\n    }\n</script>\n\n<style>\n    table {\n        width: max-content !important;\n    }\n    th.fixedColumn, td.fixedColumn {\n        position: absolute;\n        display: flex;\n        text-align: center;\n    }\n    .fixedColumn   th:last-child{\n        border-right: 1px solid;\n    }\n    div > .fixedColumn:nth-child(1) {\n        padding-right: 0;\n    }\n    div > .col:nth-child(2) {\n        padding-left: 0;\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/AppDataTable.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/AppDataTable.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppDataTable_vue_vue_type_template_id_51953b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppDataTable.vue?vue&type=template&id=51953b8e& */ "./resources/js/components/AppDataTable.vue?vue&type=template&id=51953b8e&");
/* harmony import */ var _AppDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppDataTable.vue?vue&type=script&lang=js& */ "./resources/js/components/AppDataTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _AppDataTable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppDataTable.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/AppDataTable.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AppDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AppDataTable_vue_vue_type_template_id_51953b8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppDataTable_vue_vue_type_template_id_51953b8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppDataTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/AppDataTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/AppDataTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppDataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppDataTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/AppDataTable.vue?vue&type=template&id=51953b8e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/AppDataTable.vue?vue&type=template&id=51953b8e& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppDataTable_vue_vue_type_template_id_51953b8e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppDataTable_vue_vue_type_template_id_51953b8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppDataTable_vue_vue_type_template_id_51953b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppDataTable.vue?vue&type=template&id=51953b8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppDataTable.vue?vue&type=template&id=51953b8e&");


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

/***/ "./resources/js/components/AppDataTable.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/AppDataTable.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppDataTable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppDataTable.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppDataTable.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppDataTable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppDataTable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppDataTable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppDataTable_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppDataTable.vue?vue&type=template&id=51953b8e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppDataTable.vue?vue&type=template&id=51953b8e& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _vm._t("body.prepend"),
      _vm._v(" "),
      _c(
        "v-row",
        { staticStyle: { "flex-wrap": "nowrap" } },
        [
          _vm.withFixed && _vm.getFixedHeaders(false).length > 0
            ? _c(
                "v-col",
                { staticClass: "fixedColumn flex-grow-0 flex-shrink-0" },
                [
                  _c("v-data-table", {
                    ref: "fixedTable",
                    staticStyle: { width: "max-content" },
                    attrs: {
                      headers: _vm.getFixedHeaders(false),
                      items: _vm.tableItems,
                      "item-key": "id",
                      page: _vm.tableFilter.page,
                      "items-per-page": _vm.tableFilter.per_page,
                      "server-items-length": _vm.total,
                      "hide-default-footer": "",
                      options: _vm.tableOptions,
                      "show-select": _vm.withSelect,
                      "no-data-text": "Нет данных",
                      "no-results-text": "Нет данных",
                      loading: _vm.loading,
                      "loading-text": "Загрузка... Пожалуйста, подождите"
                    },
                    on: {
                      "update:page": function($event) {
                        return _vm.$set(_vm.tableFilter, "page", $event)
                      },
                      "page-count": function($event) {
                        _vm.pageCount = $event
                      },
                      input: function($event) {
                        return _vm.$emit("input")
                      },
                      "update:options": function($event) {
                        _vm.tableOptions = $event
                      }
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "header.settings",
                          fn: function(ref) {
                            var header = ref.header
                            return [
                              _c(
                                "v-container",
                                { staticClass: "d-flex align-center" },
                                [
                                  _vm._t("header-settings-menu", null, {
                                    header: header
                                  })
                                ],
                                2
                              )
                            ]
                          }
                        },
                        {
                          key: "item.settings",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "v-menu",
                                {
                                  attrs: { "offset-y": "" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          var attrs = ref.attrs
                                          return [
                                            _c(
                                              "v-card-text",
                                              {
                                                ref: "settingsrow" + item.id,
                                                staticClass:
                                                  "ma-0 pa-0 d-flex flex-column justify-center"
                                              },
                                              [
                                                _c(
                                                  "v-btn",
                                                  _vm._g(
                                                    _vm._b(
                                                      {
                                                        attrs: {
                                                          color: "primary",
                                                          dark: "",
                                                          icon: ""
                                                        }
                                                      },
                                                      "v-btn",
                                                      attrs,
                                                      false
                                                    ),
                                                    on
                                                  ),
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      { attrs: { small: "" } },
                                                      [_vm._v("mdi-menu")]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                },
                                [
                                  _vm._v(" "),
                                  _vm._t("item-settings-menu", null, {
                                    item: item
                                  })
                                ],
                                2
                              )
                            ]
                          }
                        },
                        {
                          key: "item.mark",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          var attrs = ref.attrs
                                          return [
                                            item.color
                                              ? _c(
                                                  "v-icon",
                                                  _vm._g(
                                                    _vm._b(
                                                      {
                                                        style: {
                                                          color:
                                                            item.color.color
                                                        },
                                                        attrs: { small: "" }
                                                      },
                                                      "v-icon",
                                                      attrs,
                                                      false
                                                    ),
                                                    on
                                                  ),
                                                  [
                                                    _vm._v(
                                                      "mdi-checkbox-blank-circle"
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                },
                                [
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(item.color.text) +
                                        " (Последнее обновление:" +
                                        _vm._s(item.finished_at) +
                                        ")"
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(
                                "\n                    " +
                                  _vm._s(item.mark) +
                                  "\n                "
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    ),
                    model: {
                      value: _vm.selected,
                      callback: function($$v) {
                        _vm.selected = $$v
                      },
                      expression: "selected"
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "flex-grow-1 flex-shrink-1",
              staticStyle: {
                overflow: "hidden",
                display: "block",
                position: "relative"
              }
            },
            [
              _vm.tableItems && _vm.tableItems.length > 0 && _vm.showScroll
                ? _c(
                    "div",
                    [
                      _c("v-chip", {
                        staticClass: "app-table-scroll-left",
                        on: {
                          mouseover: _vm.onScrollLeft,
                          mouseout: function($event) {
                            _vm.scrollRun = false
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("v-chip", {
                        staticClass:
                          "app-table-scroll-left app-table-scroll-right",
                        on: {
                          mouseover: _vm.onScrollRight,
                          mouseout: function($event) {
                            _vm.scrollRun = false
                          }
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("v-data-table", {
                ref: "table",
                attrs: {
                  headers: _vm.withFixed
                    ? _vm.getFixedHeaders(true)
                    : _vm.tableHeaders,
                  items: _vm.tableItems,
                  page: _vm.tableFilter.page,
                  "items-per-page": _vm.tableFilter.per_page,
                  options: _vm.tableOptions,
                  "server-items-length": _vm.total,
                  "no-data-text": _vm.withSelect ? "" : "Нет данных",
                  "no-results-text": _vm.withSelect ? "" : "Нет данных",
                  loading: _vm.loading,
                  "loading-text": "Загрузка... Пожалуйста, подождите",
                  "hide-default-footer": ""
                },
                on: {
                  "update:page": function($event) {
                    return _vm.$set(_vm.tableFilter, "page", $event)
                  },
                  "page-count": function($event) {
                    _vm.pageCount = $event
                  },
                  "update:options": function($event) {
                    _vm.tableOptions = $event
                  }
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "item",
                      fn: function(props) {
                        return [
                          _c(
                            "tr",
                            { ref: "row" + props.item.id },
                            _vm._l(props.headers, function(item, index) {
                              return _c(
                                "td",
                                { staticStyle: { "max-width": "500px" } },
                                [
                                  item.link === true
                                    ? _c(
                                        "div",
                                        [
                                          _vm._t(
                                            "link_item",
                                            function() {
                                              return [
                                                _c(
                                                  "a",
                                                  {
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.tableEditItem(
                                                          props.item[
                                                            item.id ===
                                                            undefined
                                                              ? "id"
                                                              : item.id
                                                          ],
                                                          props.item,
                                                          item.value
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        props.item[item.value]
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            },
                                            null,
                                            { props: props, item: item }
                                          )
                                        ],
                                        2
                                      )
                                    : item.hidden === true &&
                                      (props.item[item.value] ||
                                        props.item.hidden_prepend)
                                    ? _c("div", [
                                        props.item.hidden_prepend
                                          ? _c("p", [
                                              _vm._v(
                                                _vm._s(
                                                  props.item.hidden_prepend
                                                )
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        !props.item.hidden
                                          ? _c("p", [
                                              _vm._v(
                                                _vm._s(props.item[item.value])
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        props.item[item.value]
                                          ? _c(
                                              "a",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    props.item.hidden = !props
                                                      .item.hidden
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                    " +
                                                    _vm._s(
                                                      props.item.hidden
                                                        ? "Показать текст"
                                                        : "Скрыть текст"
                                                    ) +
                                                    "\n                                "
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ])
                                    : _c("div", [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(
                                              props.item[item.value] !==
                                                undefined &&
                                                props.item[item.value] !== null
                                                ? props.item[item.value]
                                                : _vm.emptyText
                                            ) +
                                            "\n                            "
                                        )
                                      ])
                                ]
                              )
                            }),
                            0
                          )
                        ]
                      }
                    }
                  ],
                  null,
                  true
                )
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._t("body.append"),
      _vm._v(" "),
      _vm._t("body.pagination", function() {
        return [
          _c(
            "div",
            { staticClass: " d-flex pt-2" },
            [
              _c("v-pagination", {
                attrs: { length: _vm.pageCount, "total-visible": 7 },
                model: {
                  value: _vm.tableFilter.page,
                  callback: function($$v) {
                    _vm.$set(_vm.tableFilter, "page", $$v)
                  },
                  expression: "tableFilter.page"
                }
              }),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-select", {
                staticStyle: { "max-width": "150px" },
                attrs: {
                  value: _vm.tableFilter.per_page,
                  items: [20, 40, 60, 80, 100],
                  label: "Показывать по:"
                },
                on: {
                  change: function($event) {
                    _vm.tableFilter.per_page = parseInt($event, 10)
                      ? parseInt($event, 10)
                      : 1
                  }
                }
              })
            ],
            1
          )
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



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
    { staticClass: "cover" },
    [
      _c("v-toolbar-title", {
        staticClass: "mb-2",
        attrs: { align: "center", justify: "center" },
        domProps: { textContent: _vm._s("Список районов") }
      }),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "d-flex flex-column justify-space-between mb-6",
          attrs: { flat: "", tile: "" }
        },
        [
          _c("AppDataTable", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.notFound,
                expression: " !notFound"
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



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppDataTable.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppDataTable.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppDataTable.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppDataTable.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("401b0cc6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1JlZ2lvbnMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FwcERhdGFUYWJsZS52dWU/NjIzNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9BcHBEYXRhVGFibGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9SZWdpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9BcHBEYXRhVGFibGUudnVlP2I0YjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1JlZ2lvbnMudnVlP2Y2NDEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZT8yMzE0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9SZWdpb25zLnZ1ZT84M2Y2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FwcERhdGFUYWJsZS52dWU/MDRiMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkhBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFDQSxrQkFEQTtBQUVBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBRkE7QUFNQTtBQUNBLGlCQURBO0FBRUE7QUFDQTtBQUNBO0FBSkEsS0FOQTtBQVlBLHVCQVpBO0FBYUEscUJBYkE7QUFjQSxrQkFkQTtBQWVB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QUNBO0FBQ0E7QUFDQSxrQ0FBa0MsdUJBQXVCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEVBOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLDhyQkFBK1Y7QUFDclg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJKQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfUmVnaW9uc192dWVlNWMzYzQ1MTY0MTE5ZWFhOWE2Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250YWluZXIgPlxuICAgICAgICA8c2xvdCBuYW1lPVwiYm9keS5wcmVwZW5kXCIvPlxuICAgICAgICA8di1yb3dcbiAgICAgICAgICAgIHN0eWxlPVwiZmxleC13cmFwOiBub3dyYXA7XCI+XG4gICAgICAgICAgICA8di1jb2wgdi1pZj1cIndpdGhGaXhlZCAmJiBnZXRGaXhlZEhlYWRlcnMoZmFsc2UpLmxlbmd0aD4wXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpeGVkQ29sdW1uIGZsZXgtZ3Jvdy0wIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICA8di1kYXRhLXRhYmxlIDpoZWFkZXJzPVwiZ2V0Rml4ZWRIZWFkZXJzKGZhbHNlKVwiIDppdGVtcz1cInRhYmxlSXRlbXNcIiBpdGVtLWtleT1cImlkXCIgdi1tb2RlbD1cInNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwYWdlLnN5bmM9XCJ0YWJsZUZpbHRlci5wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcy1wZXItcGFnZT1cInRhYmxlRmlsdGVyLnBlcl9wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwYWdlLWNvdW50PVwicGFnZUNvdW50ID0gJGV2ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzZXJ2ZXItaXRlbXMtbGVuZ3RoPVwidG90YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZS1kZWZhdWx0LWZvb3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbjppbnB1dD1cIiRlbWl0KCdpbnB1dCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zLnN5bmM9XCJ0YWJsZU9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNob3ctc2VsZWN0PVwid2l0aFNlbGVjdFwiIHN0eWxlPVwid2lkdGg6IG1heC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuby1kYXRhLXRleHQ9XCIn0J3QtdGCINC00LDQvdC90YvRhSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5vLXJlc3VsdHMtdGV4dD1cIifQndC10YIg0LTQsNC90L3Ri9GFJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJmaXhlZFRhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLXRleHQ9XCLQl9Cw0LPRgNGD0LfQutCwLi4uINCf0L7QttCw0LvRg9C50YHRgtCwLCDQv9C+0LTQvtC20LTQuNGC0LVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpoZWFkZXIuc2V0dGluZ3M9XCJ7aGVhZGVyfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGNsYXNzPVwiZC1mbGV4IGFsaWduLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJoZWFkZXItc2V0dGluZ3MtbWVudVwiIHYtYmluZDpoZWFkZXI9XCJoZWFkZXJcIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0uc2V0dGluZ3M9XCJ7aXRlbX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LW1lbnUgb2Zmc2V0LXk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XCJ7IG9uLCBhdHRycyB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dCAgOnJlZj1cIidzZXR0aW5nc3JvdycraXRlbS5pZFwiIGNsYXNzPVwibWEtMCBwYS0wIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNlbnRlclwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFya1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImF0dHJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uPVwib25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBzbWFsbD5tZGktbWVudTwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJpdGVtLXNldHRpbmdzLW1lbnVcIiB2LWJpbmQ6aXRlbT1cIml0ZW1cIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtLm1hcms9XCJ7aXRlbX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRvb2x0aXAgYm90dG9tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVwieyBvbiwgYXR0cnMgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaXRlbS5jb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJhdHRyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uPVwib25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cIntjb2xvcjogaXRlbS5jb2xvci5jb2xvcn1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+bWRpLWNoZWNrYm94LWJsYW5rLWNpcmNsZTwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tpdGVtLmNvbG9yLnRleHR9fSAo0J/QvtGB0LvQtdC00L3QtdC1INC+0LHQvdC+0LLQu9C10L3QuNC1Ont7aXRlbS5maW5pc2hlZF9hdH19KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtLm1hcmt9fVxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdi1kYXRhLXRhYmxlPlxuXG4gICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgPHYtY29sIHN0eWxlPVwib3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6IGJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlOyBcIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleC1ncm93LTEgZmxleC1zaHJpbmstMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInRhYmxlSXRlbXMgJiYgdGFibGVJdGVtcy5sZW5ndGggPiAwICYmIHNob3dTY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2hpcCBjbGFzcz1cImFwcC10YWJsZS1zY3JvbGwtbGVmdFwiIEBtb3VzZW92ZXI9XCJvblNjcm9sbExlZnRcIiBAbW91c2VvdXQ9XCJzY3JvbGxSdW4gPSBmYWxzZTtcIi8+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNoaXAgY2xhc3M9XCJhcHAtdGFibGUtc2Nyb2xsLWxlZnQgYXBwLXRhYmxlLXNjcm9sbC1yaWdodFwiICBAbW91c2VvdmVyPVwib25TY3JvbGxSaWdodFwiICBAbW91c2VvdXQ9XCJzY3JvbGxSdW4gPSBmYWxzZTtcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHYtZGF0YS10YWJsZSA6aGVhZGVycz1cIndpdGhGaXhlZCA/IGdldEZpeGVkSGVhZGVycyh0cnVlKSA6IHRhYmxlSGVhZGVyc1wiIDppdGVtcz1cInRhYmxlSXRlbXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBhZ2Uuc3luYz1cInRhYmxlRmlsdGVyLnBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zLXBlci1wYWdlPVwidGFibGVGaWx0ZXIucGVyX3BhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHBhZ2UtY291bnQ9XCJwYWdlQ291bnQgPSAkZXZlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnMuc3luYz1cInRhYmxlT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2VydmVyLWl0ZW1zLWxlbmd0aD1cInRvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuby1kYXRhLXRleHQ9XCJ3aXRoU2VsZWN0ID8gJycgOiAn0J3QtdGCINC00LDQvdC90YvRhSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5vLXJlc3VsdHMtdGV4dD1cIndpdGhTZWxlY3QgPyAnJyA6ICfQndC10YIg0LTQsNC90L3Ri9GFJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ0YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy10ZXh0PVwi0JfQsNCz0YDRg9C30LrQsC4uLiDQn9C+0LbQsNC70YPQudGB0YLQsCwg0L/QvtC00L7QttC00LjRgtC1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtZGVmYXVsdC1mb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiaXRlbVwiIHNsb3Qtc2NvcGU9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIDpyZWY9XCIncm93Jytwcm9wcy5pdGVtLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwcm9wcy5oZWFkZXJzXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDUwMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIml0ZW0ubGluayA9PT0gdHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImxpbmtfaXRlbVwiIHYtYmluZD1cIntwcm9wcywgaXRlbX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XCJ0YWJsZUVkaXRJdGVtKHByb3BzLml0ZW1baXRlbS5pZCA9PT0gdW5kZWZpbmVkID8gJ2lkJyA6IGl0ZW0uaWRdLCBwcm9wcy5pdGVtLCBpdGVtLnZhbHVlKVwiID57e3Byb3BzLml0ZW1baXRlbS52YWx1ZV19fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwiaXRlbS5oaWRkZW4gPT09IHRydWUgJiYgKHByb3BzLml0ZW1baXRlbS52YWx1ZV0gfHwgcHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJwcm9wcy5pdGVtLmhpZGRlbl9wcmVwZW5kXCI+e3twcm9wcy5pdGVtLmhpZGRlbl9wcmVwZW5kfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiIXByb3BzLml0ZW0uaGlkZGVuXCI+e3twcm9wcy5pdGVtW2l0ZW0udmFsdWVdfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB2LWlmPVwicHJvcHMuaXRlbVtpdGVtLnZhbHVlXVwiIEBjbGljaz1cInByb3BzLml0ZW0uaGlkZGVuID0gIXByb3BzLml0ZW0uaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twcm9wcy5pdGVtLmhpZGRlbiA/ICfQn9C+0LrQsNC30LDRgtGMINGC0LXQutGB0YInIDogJ9Ch0LrRgNGL0YLRjCDRgtC10LrRgdGCJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cHJvcHMuaXRlbVtpdGVtLnZhbHVlXSAhPT0gdW5kZWZpbmVkICYmIHByb3BzLml0ZW1baXRlbS52YWx1ZV0gIT09IG51bGwgPyBwcm9wcy5pdGVtW2l0ZW0udmFsdWVdIDogZW1wdHlUZXh0fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC92LWRhdGEtdGFibGU+XG4gICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICA8L3Ytcm93PlxuICAgICAgICA8c2xvdCBuYW1lPVwiYm9keS5hcHBlbmRcIi8+XG4gICAgICAgIDxzbG90IG5hbWU9XCJib2R5LnBhZ2luYXRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgZC1mbGV4IHB0LTJcIj5cbiAgICAgICAgICAgICAgICA8di1wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0YWJsZUZpbHRlci5wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cInBhZ2VDb3VudFwiXG4gICAgICAgICAgICAgICAgICAgIDp0b3RhbC12aXNpYmxlPVwiN1wiXG4gICAgICAgICAgICAgICAgPjwvdi1wYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICAgIDx2LXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJ0YWJsZUZpbHRlci5wZXJfcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJ0YWJsZUZpbHRlci5wZXJfcGFnZSA9IHBhcnNlSW50KCRldmVudCwgMTApID8gcGFyc2VJbnQoJGV2ZW50LCAxMCkgOiAxXCJcbiAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwiWzIwLDQwLDYwLDgwLDEwMF1cIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCf0L7QutCw0LfRi9Cy0LDRgtGMINC/0L46XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDE1MHB4XCJcbiAgICAgICAgICAgICAgICA+PC92LXNlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG4gICAgaW1wb3J0IEF4aW9zIGZyb20gJ0AvdXRpbHMvYXhpb3MnO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ0FwcERhdGFUYWJsZScsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBoZWFkZXJzOiBBcnJheSxcbiAgICAgICAgICAgIGl0ZW1zVXJsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93U2VsZWN0OiBCb29sZWFuLFxuICAgICAgICAgICAgZml4ZWRDb2w6IEJvb2xlYW4sXG4gICAgICAgICAgICBmaWx0ZXI6IE9iamVjdCxcbiAgICAgICAgICAgIHNlcnZpY2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOk9iamVjdCxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiAoe30pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9JdGVtOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogIChpdGVtKSA9PiB7cmV0dXJuIGl0ZW07fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlZGl0SXRlbToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IChpZCkgPT4ge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW1wdHlJdGVtVGV4dDoge1xuICAgICAgICAgICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlQ291bnQ6IDAsXG4gICAgICAgICAgICAgICAgdGFibGVJdGVtczogdGhpcy5pdGVtcyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogW10sXG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgd2l0aFNlbGVjdCA6IHRoaXMuc2hvd1NlbGVjdCxcbiAgICAgICAgICAgICAgICB3aXRoRml4ZWQ6IHRoaXMuZml4ZWRDb2wsXG4gICAgICAgICAgICAgICAgdGFibGVGaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5maWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgICAgIHBlcl9wYWdlOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgc29ydEJ5OiAnaWQnLFxuICAgICAgICAgICAgICAgICAgICBzb3J0RGVzYyA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2Nyb2xsUnVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93U2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0YWJsZU9wdGlvbnM6IHt9LFxuICAgICAgICAgICAgICAgIHRhYmxlRWRpdEl0ZW06IHRoaXMuZWRpdEl0ZW0sXG4gICAgICAgICAgICAgICAgZW1wdHlUZXh0OiB0aGlzLmVtcHR5SXRlbVRleHQsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRGaXhlZENvbHVtbkxlZnQgKGluZHggPSB0aGlzLmhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyc1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChoZWFkZXIsIGkpID0+IGkgPCBpbmR4ICYmIGhlYWRlci5maXhlZCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoY3VycmVudFZhbHVlLCBoZWFkZXIpID0+IGN1cnJlbnRWYWx1ZSArIChwYXJzZUludChoZWFkZXIud2lkdGgpIHx8IDApLCAwKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldEZpeGVkSGVhZGVycyhyZXZlcnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyc1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChoZWFkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhcmV2ZXJzZSA/IGhlYWRlci5maXhlZCA9PT0gdHJ1ZSA6ICEoaGVhZGVyLmZpeGVkICE9PSB1bmRlZmluZWQgJiYgaGVhZGVyLmZpeGVkICE9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgbG9hZEl0ZW1zKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IE1hdGguZmxvb3IodGhpcy50b3RhbCAvIHRoaXMudGFibGVGaWx0ZXIucGVyX3BhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICArICh0aGlzLnRvdGFsID09PSB0aGlzLnRhYmxlRmlsdGVyLnBlcl9wYWdlID8gMCA6IDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlVmlld05vcm1hbGl6ZSgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgICh0aGlzLml0ZW1zVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB0aGlzLnNlcnZpY2UgJiYgdGhpcy5zZXJ2aWNlLnByZXBhcmVQYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zZXJ2aWNlLnByZXBhcmVQYXJhbXModGhpcy50YWJsZUZpbHRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy50YWJsZUZpbHRlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWRpbmcnKVxuICAgICAgICAgICAgICAgICAgICBBeGlvcy5nZXQodGhpcy5pdGVtc1VybCwge3BhcmFtc30pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlSXRlbXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFwKHRoaXMudG9JdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzcG9uc2UuZGF0YS50b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IHJlc3BvbnNlLmRhdGEubGFzdF9wYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVWaWV3Tm9ybWFsaXplKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcsIHJlc3BvbnNlLmRhdGEuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkaW5nJylcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UuZ2V0QWxsKHRoaXMudGFibGVGaWx0ZXIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUl0ZW1zID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hcCh0aGlzLnRvSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzcG9uc2UuZGF0YS50b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNvdW50ID0gcmVzcG9uc2UuZGF0YS5sYXN0X3BhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlVmlld05vcm1hbGl6ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkJywgcmVzcG9uc2UuZGF0YS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbFRvKGVsZW1lbnQsIHNjcm9sbFBpeGVscywgZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxQb3MgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgLy8gQ29uZGl0aW9uIHRvIGNoZWNrIGlmIHNjcm9sbGluZyBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGlmICggISggKHNjcm9sbFBvcyA9PT0gMCB8fCBzY3JvbGxQaXhlbHMgPiAwKSAmJiAoZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbFBvcyA9PT0gZWxlbWVudC5zY3JvbGxXaWR0aCB8fCBzY3JvbGxQaXhlbHMgPCAwKSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHN0YXJ0IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub3dcIiBpbiB3aW5kb3cucGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbCA9ICh0aW1lc3RhbXApICA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NhbGN1bGF0ZSB0aGUgdGltZWVsYXBzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVFbGFwc2VkID0gdGltZXN0YW1wIC0gc3RhcnRUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9DYWxjdWxhdGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gZHVyYXRpb24gPyBNYXRoLm1pbih0aW1lRWxhcHNlZCAvIGR1cmF0aW9uLCAxKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1NldCB0aGUgc2Nyb2xsZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAocHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNjcm9sbFBvcyArIHNjcm9sbFBpeGVscyAqIHByb2dyZXNzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgKyAxMCAqIHNjcm9sbFBpeGVscyAvKE1hdGguYWJzKHNjcm9sbFBpeGVscykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgZWxhcHNlZCB0aW1lIGlzIGxlc3MgdGhlbiBkdXJhdGlvbiB0aGVuIGNhbGwgdGhlIHJlcXVlc3RBbmltYXRpb24sIG90aGVyd2lzZSBleGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxSdW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1JlcXVlc3QgZm9yIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vQ2FsbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgb24gc2Nyb2xsIGZ1bmN0aW9uIGZpcnN0IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblNjcm9sbExlZnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxSdW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXSwgLXRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0uc2Nyb2xsV2lkdGgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU2Nyb2xsUmlnaHQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxSdW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXSwgdGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXS5zY3JvbGxXaWR0aCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGVWaWV3Tm9ybWFsaXplKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmZpeGVkVGFibGUpIE9iamVjdC5rZXlzKHRoaXMuJHJlZnMpLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYuc2VhcmNoKCdyb3cnKSA9PT0gMCAmJiB0aGlzLiRyZWZzWydzZXR0aW5ncycrIHZdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzWydzZXR0aW5ncycrIHZdLnN0eWxlLmhlaWdodCA9ICh0aGlzLiRyZWZzW3ZdLmNsaWVudEhlaWdodCAtIDEpKydweCc7IC8vYm9vdG9tIGJvcmRlciBvbiBldmVyeSB0YWJsZSByb3dcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRMb2FkSXRlbXMgPSBfLmRlYm91bmNlKHRoaXMubG9hZEl0ZW1zLCA1MDApXG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICB0YWJsZUZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlZExvYWRJdGVtcygpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGVPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFibGVPcHRpb25zLnNvcnRCeS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIuc29ydEJ5ID0gdGhpcy50YWJsZU9wdGlvbnMuc29ydEJ5WzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlT3B0aW9ucy5zb3J0RGVzYy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIuc29ydERlc2MgPSB0aGlzLnRhYmxlT3B0aW9ucy5zb3J0RGVzY1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHNvcnRCeSwgc29ydERlc2MgfSA9IHRoaXMudGFibGVGaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Tb3J0JywgeyBzb3J0QnksIHNvcnREZXNjIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYmxlSXRlbXM6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTY3JvbGwgPSB0aGlzLiRyZWZzLnRhYmxlLiRlbC5jaGlsZE5vZGVzWzBdLnNjcm9sbFdpZHRoID4gdGhpcy4kcmVmcy50YWJsZS4kZWwuc2Nyb2xsV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWVwOnRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIgPSB7Li4udGhpcy50YWJsZUZpbHRlciwgLi4udGhpcy5maWx0ZXJ9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUZpbHRlci5wYWdlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVlcDp0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVJdGVtcyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEl0ZW1zKClcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMudGFibGUuaXRlbXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVZpZXdOb3JtYWxpemUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHRoLmZpeGVkQ29sdW1uLCB0ZC5maXhlZENvbHVtbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuZml4ZWRDb2x1bW4gICB0aDpsYXN0LWNoaWxke1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbiAgICB9XG4gICAgZGl2ID4gLmZpeGVkQ29sdW1uOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuICAgIGRpdiA+IC5jb2w6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVwiY292ZXJcIj5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cIifQodC/0LjRgdC+0Log0YDQsNC50L7QvdC+0LInXCI+XG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICA8di1jYXJkIGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktc3BhY2UtYmV0d2VlbiBtYi02XCIgZmxhdCB0aWxlPlxuICAgICAgICAgICAgPEFwcERhdGFUYWJsZVxuICAgICAgICAgICAgICAgIHYtc2hvdz1cIiAhbm90Rm91bmRcIlxuICAgICAgICAgICAgICAgIDpoZWFkZXJzPVwiaGVhZGVycy5yZWdpb25zXCJcbiAgICAgICAgICAgICAgICA6c2hvd1NlbGVjdD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICA6Zml4ZWRDb2w9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgOmVkaXRJdGVtPVwic2hvd0l0ZW1cIlxuICAgICAgICAgICAgICAgIDplbXB0eUl0ZW1UZXh0PVwiJy0nXCJcbiAgICAgICAgICAgICAgICA6aXRlbXNVcmw9XCJyZWdpb25zSXRlbXNVcmxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9BcHBEYXRhVGFibGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIm5vdEZvdW5kXCI+XG4gICAgICAgICAgICAgICAgPHYtYWxlcnQgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4XCIgY29sb3JlZC1ib3JkZXIgdHlwZT1cImluZm9cIiBlbGV2YXRpb249XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgINCf0L4g0JLQsNGI0LXQvNGDINC30LDQv9GA0L7RgdGDINC90LjRh9C10LPQviDQvdC1INC90LDQudC00LXQvdC+LiDQn9C+0L/RgNC+0LHRg9C50YLQtSDQuNC30LzQtdC90LjRgtGMINC/0LDRgNCw0LzQtdGC0YDRiyDQv9C+0LjRgdC60LAuXG4gICAgICAgICAgICAgICAgPC92LWFsZXJ0PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgQXBwRGF0YVRhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcERhdGFUYWJsZVwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ1JlZ2lvbnMnLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBBcHBEYXRhVGFibGVcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdjb2RlJywgdGV4dDogJ9Ca0L7QtCDRgNC10LPQuNC+0L3QsCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICduYW1lJywgdGV4dDogJ9Cg0LXQs9C40L7QvScsIGxpbms6IHRydWUsIGlkOiAnaWQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnZGlzdHJpY3RzX2NvdW50JywgdGV4dDogJ9CQ0LrRgtC40LLQvdGL0YUg0YDQsNC50L7QvdC+0LInfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZtLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgbG9hZGluZyhhLCBiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhICYmIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyLm5hbWUubGVuZ3RoID4gMCAmJiB0aGlzLmNvdXJ0cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RGb3VuZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90Rm91bmQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgY3JlYXRlZCgpIHtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHJlZ2lvbnNJdGVtc1VybCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJy9kaXN0cmljdC9yZWdpb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzaG93SXRlbShpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2Rpc3RyaWN0cycsIHBhcmFtczogeyByZWdpb246IGlkLGlkOjAgfSwgcXVlcnk6e2xldmVsOjB9IH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbnRhYmxlIHtcXG4gICAgd2lkdGg6IC13ZWJraXQtbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IC1tb3otbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50ICFpbXBvcnRhbnQ7XFxufVxcbnRoLmZpeGVkQ29sdW1uLCB0ZC5maXhlZENvbHVtbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZml4ZWRDb2x1bW4gICB0aDpsYXN0LWNoaWxke1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXG59XFxuZGl2ID4gLmZpeGVkQ29sdW1uOm50aC1jaGlsZCgxKSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxufVxcbmRpdiA+IC5jb2w6bnRoLWNoaWxkKDIpIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9BcHBEYXRhVGFibGUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFpV0E7SUFDQSxxQ0FBQTtJQUFBLGtDQUFBO0lBQUEsNkJBQUE7QUFDQTtBQUNBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7QUFDQTtBQUNBO0lBQ0EsdUJBQUE7QUFDQTtBQUNBO0lBQ0EsZ0JBQUE7QUFDQTtBQUNBO0lBQ0EsZUFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPHYtY29udGFpbmVyID5cXG4gICAgICAgIDxzbG90IG5hbWU9XFxcImJvZHkucHJlcGVuZFxcXCIvPlxcbiAgICAgICAgPHYtcm93XFxuICAgICAgICAgICAgc3R5bGU9XFxcImZsZXgtd3JhcDogbm93cmFwO1xcXCI+XFxuICAgICAgICAgICAgPHYtY29sIHYtaWY9XFxcIndpdGhGaXhlZCAmJiBnZXRGaXhlZEhlYWRlcnMoZmFsc2UpLmxlbmd0aD4wXFxcIlxcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZml4ZWRDb2x1bW4gZmxleC1ncm93LTAgZmxleC1zaHJpbmstMFxcXCI+XFxuICAgICAgICAgICAgICAgIDx2LWRhdGEtdGFibGUgOmhlYWRlcnM9XFxcImdldEZpeGVkSGVhZGVycyhmYWxzZSlcXFwiIDppdGVtcz1cXFwidGFibGVJdGVtc1xcXCIgaXRlbS1rZXk9XFxcImlkXFxcIiB2LW1vZGVsPVxcXCJzZWxlY3RlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGFnZS5zeW5jPVxcXCJ0YWJsZUZpbHRlci5wYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcy1wZXItcGFnZT1cXFwidGFibGVGaWx0ZXIucGVyX3BhZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHBhZ2UtY291bnQ9XFxcInBhZ2VDb3VudCA9ICRldmVudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2VydmVyLWl0ZW1zLWxlbmd0aD1cXFwidG90YWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZS1kZWZhdWx0LWZvb3RlclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb246aW5wdXQ9XFxcIiRlbWl0KCdpbnB1dCcpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zLnN5bmM9XFxcInRhYmxlT3B0aW9uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2hvdy1zZWxlY3Q9XFxcIndpdGhTZWxlY3RcXFwiIHN0eWxlPVxcXCJ3aWR0aDogbWF4LWNvbnRlbnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5vLWRhdGEtdGV4dD1cXFwiJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XFxcIifQndC10YIg0LTQsNC90L3Ri9GFJ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XFxcImZpeGVkVGFibGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XFxcImxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy10ZXh0PVxcXCLQl9Cw0LPRgNGD0LfQutCwLi4uINCf0L7QttCw0LvRg9C50YHRgtCwLCDQv9C+0LTQvtC20LTQuNGC0LVcXFwiXFxuICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aGVhZGVyLnNldHRpbmdzPVxcXCJ7aGVhZGVyfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGNsYXNzPVxcXCJkLWZsZXggYWxpZ24tY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiaGVhZGVyLXNldHRpbmdzLW1lbnVcXFwiIHYtYmluZDpoZWFkZXI9XFxcImhlYWRlclxcXCI+PC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XFxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtLnNldHRpbmdzPVxcXCJ7aXRlbX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LW1lbnUgb2Zmc2V0LXk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVxcXCJ7IG9uLCBhdHRycyB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dCAgOnJlZj1cXFwiJ3NldHRpbmdzcm93JytpdGVtLmlkXFxcIiBjbGFzcz1cXFwibWEtMCBwYS0wIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNlbnRlclxcXCIgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicHJpbWFyeVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFya1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XFxcImF0dHJzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uPVxcXCJvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBzbWFsbD5tZGktbWVudTwvdi1pY29uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJpdGVtLXNldHRpbmdzLW1lbnVcXFwiIHYtYmluZDppdGVtPVxcXCJpdGVtXFxcIj48L3Nsb3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LW1lbnU+XFxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtLm1hcms9XFxcIntpdGVtfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbHRpcCBib3R0b20+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVxcXCJ7IG9uLCBhdHRycyB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb25cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJpdGVtLmNvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cXFwiYXR0cnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbj1cXFwib25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XFxcIntjb2xvcjogaXRlbS5jb2xvci5jb2xvcn1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+bWRpLWNoZWNrYm94LWJsYW5rLWNpcmNsZTwvdi1pY29uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0uY29sb3IudGV4dH19ICjQn9C+0YHQu9C10LTQvdC10LUg0L7QsdC90L7QstC70LXQvdC40LU6e3tpdGVtLmZpbmlzaGVkX2F0fX0pPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10b29sdGlwPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5tYXJrfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgIDwvdi1kYXRhLXRhYmxlPlxcblxcbiAgICAgICAgICAgIDwvdi1jb2w+XFxuICAgICAgICAgICAgPHYtY29sIHN0eWxlPVxcXCJvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTogYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7IFxcXCJcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZsZXgtZ3Jvdy0xIGZsZXgtc2hyaW5rLTFcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInRhYmxlSXRlbXMgJiYgdGFibGVJdGVtcy5sZW5ndGggPiAwICYmIHNob3dTY3JvbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtY2hpcCBjbGFzcz1cXFwiYXBwLXRhYmxlLXNjcm9sbC1sZWZ0XFxcIiBAbW91c2VvdmVyPVxcXCJvblNjcm9sbExlZnRcXFwiIEBtb3VzZW91dD1cXFwic2Nyb2xsUnVuID0gZmFsc2U7XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8di1jaGlwIGNsYXNzPVxcXCJhcHAtdGFibGUtc2Nyb2xsLWxlZnQgYXBwLXRhYmxlLXNjcm9sbC1yaWdodFxcXCIgIEBtb3VzZW92ZXI9XFxcIm9uU2Nyb2xsUmlnaHRcXFwiICBAbW91c2VvdXQ9XFxcInNjcm9sbFJ1biA9IGZhbHNlO1xcXCIvPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPHYtZGF0YS10YWJsZSA6aGVhZGVycz1cXFwid2l0aEZpeGVkID8gZ2V0Rml4ZWRIZWFkZXJzKHRydWUpIDogdGFibGVIZWFkZXJzXFxcIiA6aXRlbXM9XFxcInRhYmxlSXRlbXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBhZ2Uuc3luYz1cXFwidGFibGVGaWx0ZXIucGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXMtcGVyLXBhZ2U9XFxcInRhYmxlRmlsdGVyLnBlcl9wYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwYWdlLWNvdW50PVxcXCJwYWdlQ291bnQgPSAkZXZlbnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnMuc3luYz1cXFwidGFibGVPcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzZXJ2ZXItaXRlbXMtbGVuZ3RoPVxcXCJ0b3RhbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bm8tZGF0YS10ZXh0PVxcXCJ3aXRoU2VsZWN0ID8gJycgOiAn0J3QtdGCINC00LDQvdC90YvRhSdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5vLXJlc3VsdHMtdGV4dD1cXFwid2l0aFNlbGVjdCA/ICcnIDogJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cXFwidGFibGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XFxcImxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy10ZXh0PVxcXCLQl9Cw0LPRgNGD0LfQutCwLi4uINCf0L7QttCw0LvRg9C50YHRgtCwLCDQv9C+0LTQvtC20LTQuNGC0LVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZS1kZWZhdWx0LWZvb3Rlcj5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJpdGVtXFxcIiBzbG90LXNjb3BlPVxcXCJwcm9wc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIDpyZWY9XFxcIidyb3cnK3Byb3BzLml0ZW0uaWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgdi1mb3I9XFxcIihpdGVtLCBpbmRleCkgaW4gcHJvcHMuaGVhZGVyc1xcXCIgc3R5bGU9XFxcIm1heC13aWR0aDogNTAwcHhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJpdGVtLmxpbmsgPT09IHRydWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImxpbmtfaXRlbVxcXCIgdi1iaW5kPVxcXCJ7cHJvcHMsIGl0ZW19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrPVxcXCJ0YWJsZUVkaXRJdGVtKHByb3BzLml0ZW1baXRlbS5pZCA9PT0gdW5kZWZpbmVkID8gJ2lkJyA6IGl0ZW0uaWRdLCBwcm9wcy5pdGVtLCBpdGVtLnZhbHVlKVxcXCIgPnt7cHJvcHMuaXRlbVtpdGVtLnZhbHVlXX19PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UtaWY9XFxcIml0ZW0uaGlkZGVuID09PSB0cnVlICYmIChwcm9wcy5pdGVtW2l0ZW0udmFsdWVdIHx8IHByb3BzLml0ZW0uaGlkZGVuX3ByZXBlbmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVxcXCJwcm9wcy5pdGVtLmhpZGRlbl9wcmVwZW5kXFxcIj57e3Byb3BzLml0ZW0uaGlkZGVuX3ByZXBlbmR9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVxcXCIhcHJvcHMuaXRlbS5oaWRkZW5cXFwiPnt7cHJvcHMuaXRlbVtpdGVtLnZhbHVlXX19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHYtaWY9XFxcInByb3BzLml0ZW1baXRlbS52YWx1ZV1cXFwiIEBjbGljaz1cXFwicHJvcHMuaXRlbS5oaWRkZW4gPSAhcHJvcHMuaXRlbS5oaWRkZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Byb3BzLml0ZW0uaGlkZGVuID8gJ9Cf0L7QutCw0LfQsNGC0Ywg0YLQtdC60YHRgicgOiAn0KHQutGA0YvRgtGMINGC0LXQutGB0YInfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cHJvcHMuaXRlbVtpdGVtLnZhbHVlXSAhPT0gdW5kZWZpbmVkICYmIHByb3BzLml0ZW1baXRlbS52YWx1ZV0gIT09IG51bGwgPyBwcm9wcy5pdGVtW2l0ZW0udmFsdWVdIDogZW1wdHlUZXh0fX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICA8L3YtZGF0YS10YWJsZT5cXG4gICAgICAgICAgICA8L3YtY29sPlxcbiAgICAgICAgPC92LXJvdz5cXG4gICAgICAgIDxzbG90IG5hbWU9XFxcImJvZHkuYXBwZW5kXFxcIi8+XFxuICAgICAgICA8c2xvdCBuYW1lPVxcXCJib2R5LnBhZ2luYXRpb25cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIiBkLWZsZXggcHQtMlxcXCI+XFxuICAgICAgICAgICAgICAgIDx2LXBhZ2luYXRpb25cXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInRhYmxlRmlsdGVyLnBhZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6bGVuZ3RoPVxcXCJwYWdlQ291bnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6dG90YWwtdmlzaWJsZT1cXFwiN1xcXCJcXG4gICAgICAgICAgICAgICAgPjwvdi1wYWdpbmF0aW9uPlxcbiAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cXG4gICAgICAgICAgICAgICAgPHYtc2VsZWN0XFxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XFxcInRhYmxlRmlsdGVyLnBlcl9wYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cXFwidGFibGVGaWx0ZXIucGVyX3BhZ2UgPSBwYXJzZUludCgkZXZlbnQsIDEwKSA/IHBhcnNlSW50KCRldmVudCwgMTApIDogMVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDppdGVtcz1cXFwiWzIwLDQwLDYwLDgwLDEwMF1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwi0J/QvtC60LDQt9GL0LLQsNGC0Ywg0L/QvjpcXFwiXFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWF4LXdpZHRoOiAxNTBweFxcXCJcXG4gICAgICAgICAgICAgICAgPjwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3Nsb3Q+XFxuICAgIDwvdi1jb250YWluZXI+XFxuPC90ZW1wbGF0ZT5cXG48c2NyaXB0PlxcbiAgICBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xcbiAgICBpbXBvcnQgQXhpb3MgZnJvbSAnQC91dGlscy9heGlvcyc7XFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIG5hbWU6ICdBcHBEYXRhVGFibGUnLFxcbiAgICAgICAgcHJvcHM6IHtcXG4gICAgICAgICAgICBoZWFkZXJzOiBBcnJheSxcXG4gICAgICAgICAgICBpdGVtc1VybDoge1xcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGl0ZW1zOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHNob3dTZWxlY3Q6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZml4ZWRDb2w6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZmlsdGVyOiBPYmplY3QsXFxuICAgICAgICAgICAgc2VydmljZToge1xcbiAgICAgICAgICAgICAgICB0eXBlOk9iamVjdCxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdG9JdGVtOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAgKGl0ZW0pID0+IHtyZXR1cm4gaXRlbTt9LFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZWRpdEl0ZW06IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IChpZCkgPT4ge30sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBlbXB0eUl0ZW1UZXh0OiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6U3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBwYWdlQ291bnQ6IDAsXFxuICAgICAgICAgICAgICAgIHRhYmxlSXRlbXM6IHRoaXMuaXRlbXMsXFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBbXSxcXG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXFxuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyczogdGhpcy5oZWFkZXJzLFxcbiAgICAgICAgICAgICAgICB3aXRoU2VsZWN0IDogdGhpcy5zaG93U2VsZWN0LFxcbiAgICAgICAgICAgICAgICB3aXRoRml4ZWQ6IHRoaXMuZml4ZWRDb2wsXFxuICAgICAgICAgICAgICAgIHRhYmxlRmlsdGVyOiB7XFxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmZpbHRlcixcXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IDEsXFxuICAgICAgICAgICAgICAgICAgICBwZXJfcGFnZTogMjAsXFxuICAgICAgICAgICAgICAgICAgICBzb3J0Qnk6ICdpZCcsXFxuICAgICAgICAgICAgICAgICAgICBzb3J0RGVzYyA6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBzY3JvbGxSdW46IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBzaG93U2Nyb2xsOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgdGFibGVPcHRpb25zOiB7fSxcXG4gICAgICAgICAgICAgICAgdGFibGVFZGl0SXRlbTogdGhpcy5lZGl0SXRlbSxcXG4gICAgICAgICAgICAgICAgZW1wdHlUZXh0OiB0aGlzLmVtcHR5SXRlbVRleHQsXFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxcbiAgICAgICAgICAgIH07XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGdldEZpeGVkQ29sdW1uTGVmdCAoaW5keCA9IHRoaXMuaGVhZGVycy5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyc1xcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoaGVhZGVyLCBpKSA9PiBpIDwgaW5keCAmJiBoZWFkZXIuZml4ZWQgPT09IHRydWUpXFxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChjdXJyZW50VmFsdWUsIGhlYWRlcikgPT4gY3VycmVudFZhbHVlICsgKHBhcnNlSW50KGhlYWRlci53aWR0aCkgfHwgMCksIDApXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBnZXRGaXhlZEhlYWRlcnMocmV2ZXJzZSkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJzXFxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChoZWFkZXIpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXJldmVyc2UgPyBoZWFkZXIuZml4ZWQgPT09IHRydWUgOiAhKGhlYWRlci5maXhlZCAhPT0gdW5kZWZpbmVkICYmIGhlYWRlci5maXhlZCAhPT0gZmFsc2UpXFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGFzeW5jIGxvYWRJdGVtcygpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMgIT09IHVuZGVmaW5lZCkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLmZsb29yKHRoaXMudG90YWwgLyB0aGlzLnRhYmxlRmlsdGVyLnBlcl9wYWdlKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICsgKHRoaXMudG90YWwgPT09IHRoaXMudGFibGVGaWx0ZXIucGVyX3BhZ2UgPyAwIDogMSk7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlVmlld05vcm1hbGl6ZSgpXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgaWYgICh0aGlzLml0ZW1zVXJsKSB7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5zZXJ2aWNlICYmIHRoaXMuc2VydmljZS5wcmVwYXJlUGFyYW1zXFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnNlcnZpY2UucHJlcGFyZVBhcmFtcyh0aGlzLnRhYmxlRmlsdGVyKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy50YWJsZUZpbHRlcjtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZGluZycpXFxuICAgICAgICAgICAgICAgICAgICBBeGlvcy5nZXQodGhpcy5pdGVtc1VybCwge3BhcmFtc30pXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVJdGVtcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYXAodGhpcy50b0l0ZW0pO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzcG9uc2UuZGF0YS50b3RhbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ291bnQgPSByZXNwb25zZS5kYXRhLmxhc3RfcGFnZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVZpZXdOb3JtYWxpemUoKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWQnLCByZXNwb25zZS5kYXRhLmRhdGEpXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcpXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWRpbmcnKVxcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UuZ2V0QWxsKHRoaXMudGFibGVGaWx0ZXIpXFxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlSXRlbXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFwKHRoaXMudG9JdGVtKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzcG9uc2UuZGF0YS50b3RhbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IHJlc3BvbnNlLmRhdGEubGFzdF9wYWdlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVWaWV3Tm9ybWFsaXplKClcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcsIHJlc3BvbnNlLmRhdGEuZGF0YSlcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcpXFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHNjcm9sbFRvKGVsZW1lbnQsIHNjcm9sbFBpeGVscywgZHVyYXRpb24pIHtcXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsUG9zID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xcbiAgICAgICAgICAgICAgICAvLyBDb25kaXRpb24gdG8gY2hlY2sgaWYgc2Nyb2xsaW5nIGlzIHJlcXVpcmVkXFxuICAgICAgICAgICAgICAgIGlmICggISggKHNjcm9sbFBvcyA9PT0gMCB8fCBzY3JvbGxQaXhlbHMgPiAwKSAmJiAoZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbFBvcyA9PT0gZWxlbWVudC5zY3JvbGxXaWR0aCB8fCBzY3JvbGxQaXhlbHMgPCAwKSkpXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgc3RhcnQgdGltZXN0YW1wXFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJub3dcXFwiIGluIHdpbmRvdy5wZXJmb3JtYW5jZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBlcmZvcm1hbmNlLm5vdygpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsID0gKHRpbWVzdGFtcCkgID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NhbGN1bGF0ZSB0aGUgdGltZWVsYXBzZWRcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lRWxhcHNlZCA9IHRpbWVzdGFtcCAtIHN0YXJ0VGltZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NhbGN1bGF0ZSBwcm9ncmVzc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gZHVyYXRpb24gPyBNYXRoLm1pbih0aW1lRWxhcHNlZCAvIGR1cmF0aW9uLCAxKSA6IG51bGw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXQgdGhlIHNjcm9sbGVmdFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IChwcm9ncmVzc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNjcm9sbFBvcyArIHNjcm9sbFBpeGVscyAqIHByb2dyZXNzIDpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICsgMTAgKiBzY3JvbGxQaXhlbHMgLyhNYXRoLmFicyhzY3JvbGxQaXhlbHMpKSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBpZiBlbGFwc2VkIHRpbWUgaXMgbGVzcyB0aGVuIGR1cmF0aW9uIHRoZW4gY2FsbCB0aGUgcmVxdWVzdEFuaW1hdGlvbiwgb3RoZXJ3aXNlIGV4aXRcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxSdW4pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9SZXF1ZXN0IGZvciBhbmltYXRpb25cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGwpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAvL0NhbGwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIG9uIHNjcm9sbCBmdW5jdGlvbiBmaXJzdCB0aW1lXFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9uU2Nyb2xsTGVmdCgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxSdW4gPSB0cnVlO1xcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0sIC10aGlzLiRyZWZzLnRhYmxlLiRlbC5jaGlsZE5vZGVzWzBdLnNjcm9sbFdpZHRoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9uU2Nyb2xsUmlnaHQoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUnVuID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh0aGlzLiRyZWZzLnRhYmxlLiRlbC5jaGlsZE5vZGVzWzBdLCB0aGlzLiRyZWZzLnRhYmxlLiRlbC5jaGlsZE5vZGVzWzBdLnNjcm9sbFdpZHRoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHRhYmxlVmlld05vcm1hbGl6ZSgpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnMuZml4ZWRUYWJsZSkgT2JqZWN0LmtleXModGhpcy4kcmVmcykuZm9yRWFjaCgodikgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYuc2VhcmNoKCdyb3cnKSA9PT0gMCAmJiB0aGlzLiRyZWZzWydzZXR0aW5ncycrIHZdKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmc1snc2V0dGluZ3MnKyB2XS5zdHlsZS5oZWlnaHQgPSAodGhpcy4kcmVmc1t2XS5jbGllbnRIZWlnaHQgLSAxKSsncHgnOyAvL2Jvb3RvbSBib3JkZXIgb24gZXZlcnkgdGFibGUgcm93XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkTG9hZEl0ZW1zID0gXy5kZWJvdW5jZSh0aGlzLmxvYWRJdGVtcywgNTAwKVxcbiAgICAgICAgfSxcXG4gICAgICAgIHdhdGNoOiB7XFxuICAgICAgICAgICAgdGFibGVGaWx0ZXI6IHtcXG4gICAgICAgICAgICAgICAgaGFuZGxlciAoKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlZExvYWRJdGVtcygpXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWVcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHRhYmxlT3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICBoYW5kbGVyKCkge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFibGVPcHRpb25zLnNvcnRCeS5sZW5ndGggPT09IDEpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLnNvcnRCeSA9IHRoaXMudGFibGVPcHRpb25zLnNvcnRCeVswXTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlT3B0aW9ucy5zb3J0RGVzYy5sZW5ndGggPT09IDEpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLnNvcnREZXNjID0gdGhpcy50YWJsZU9wdGlvbnMuc29ydERlc2NbMF07XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHNvcnRCeSwgc29ydERlc2MgfSA9IHRoaXMudGFibGVGaWx0ZXJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uU29ydCcsIHsgc29ydEJ5LCBzb3J0RGVzYyB9KVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdGFibGVJdGVtczoge1xcbiAgICAgICAgICAgICAgICBoYW5kbGVyKCkge1xcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Njcm9sbCA9IHRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0uc2Nyb2xsV2lkdGggPiB0aGlzLiRyZWZzLnRhYmxlLiRlbC5zY3JvbGxXaWR0aDtcXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGRlZXA6dHJ1ZSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGZpbHRlcjoge1xcbiAgICAgICAgICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyID0gey4uLnRoaXMudGFibGVGaWx0ZXIsIC4uLnRoaXMuZmlsdGVyfTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLnBhZ2UgPSAxO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBkZWVwOnRydWVcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGl0ZW1zOiB7XFxuICAgICAgICAgICAgICAgIGhhbmRsZXIodmFsdWUpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVJdGVtcyA9IHZhbHVlO1xcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlLFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtb3VudGVkKCkge1xcbiAgICAgICAgICAgIHRoaXMubG9hZEl0ZW1zKClcXG4gICAgICAgICAgICB0aGlzLiR3YXRjaChcXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMudGFibGUuaXRlbXNcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgKHZhbCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVZpZXdOb3JtYWxpemUoKVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgKVxcbiAgICAgICAgfSxcXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4gICAgdGFibGUge1xcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50ICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgdGguZml4ZWRDb2x1bW4sIHRkLmZpeGVkQ29sdW1uIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmZpeGVkQ29sdW1uICAgdGg6bGFzdC1jaGlsZHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xcbiAgICB9XFxuICAgIGRpdiA+IC5maXhlZENvbHVtbjpudGgtY2hpbGQoMSkge1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcXG4gICAgfVxcbiAgICBkaXYgPiAuY29sOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIH1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTE5NTNiOGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUxOTUzYjhlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUxOTUzYjhlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUxOTUzYjhlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxOTUzYjhlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUxOTUzYjhlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9BcHBEYXRhVGFibGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZWdpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZjFlOGRmNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SZWdpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmVnaW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImJmMWU4ZGY0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYmYxZThkZjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYmYxZThkZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYmYxZThkZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1JlZ2lvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJmMWU4ZGY0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JmMWU4ZGY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvUmVnaW9ucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIFtcbiAgICAgIF92bS5fdChcImJvZHkucHJlcGVuZFwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwiZmxleC13cmFwXCI6IFwibm93cmFwXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLndpdGhGaXhlZCAmJiBfdm0uZ2V0Rml4ZWRIZWFkZXJzKGZhbHNlKS5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZpeGVkQ29sdW1uIGZsZXgtZ3Jvdy0wIGZsZXgtc2hyaW5rLTBcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1kYXRhLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcImZpeGVkVGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwibWF4LWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5nZXRGaXhlZEhlYWRlcnMoZmFsc2UpLFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0udGFibGVJdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0ta2V5XCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWdlOiBfdm0udGFibGVGaWx0ZXIucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zLXBlci1wYWdlXCI6IF92bS50YWJsZUZpbHRlci5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNlcnZlci1pdGVtcy1sZW5ndGhcIjogX3ZtLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaGlkZS1kZWZhdWx0LWZvb3RlclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS50YWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaG93LXNlbGVjdFwiOiBfdm0ud2l0aFNlbGVjdCxcbiAgICAgICAgICAgICAgICAgICAgICBcIm5vLWRhdGEtdGV4dFwiOiBcItCd0LXRgiDQtNCw0L3QvdGL0YVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIm5vLXJlc3VsdHMtdGV4dFwiOiBcItCd0LXRgiDQtNCw0L3QvdGL0YVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICBcImxvYWRpbmctdGV4dFwiOiBcItCX0LDQs9GA0YPQt9C60LAuLi4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINC/0L7QtNC+0LbQtNC40YLQtVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cGFnZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0udGFibGVGaWx0ZXIsIFwicGFnZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcInBhZ2UtY291bnRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZUNvdW50ID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOm9wdGlvbnNcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFibGVPcHRpb25zID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImhlYWRlci5zZXR0aW5nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhlYWRlciA9IHJlZi5oZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggYWxpZ24tY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcImhlYWRlci1zZXR0aW5ncy1tZW51XCIsIG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW0uc2V0dGluZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm9mZnNldC15XCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbiA9IHJlZi5vblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJzID0gcmVmLmF0dHJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInNldHRpbmdzcm93XCIgKyBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWEtMCBwYS0wIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9iKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtYWxsOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJtZGktbWVudVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXCJpdGVtLXNldHRpbmdzLW1lbnVcIiwgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpdGVtLm1hcmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBib3R0b206IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbiA9IHJlZi5vblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJzID0gcmVmLmF0dHJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fYihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY29sb3IuY29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc21hbGw6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZGktY2hlY2tib3gtYmxhbmstY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLmNvbG9yLnRleHQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAo0J/QvtGB0LvQtdC00L3QtdC1INC+0LHQvdC+0LLQu9C10L3QuNC1OlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5maW5pc2hlZF9hdCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5tYXJrKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4LWdyb3ctMSBmbGV4LXNocmluay0xXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLnRhYmxlSXRlbXMgJiYgX3ZtLnRhYmxlSXRlbXMubGVuZ3RoID4gMCAmJiBfdm0uc2hvd1Njcm9sbFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hpcFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhcHAtdGFibGUtc2Nyb2xsLWxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlb3ZlcjogX3ZtLm9uU2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zY3JvbGxSdW4gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hpcFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHAtdGFibGUtc2Nyb2xsLWxlZnQgYXBwLXRhYmxlLXNjcm9sbC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdmVyOiBfdm0ub25TY3JvbGxSaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zY3JvbGxSdW4gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1kYXRhLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICByZWY6IFwidGFibGVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLndpdGhGaXhlZFxuICAgICAgICAgICAgICAgICAgICA/IF92bS5nZXRGaXhlZEhlYWRlcnModHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0udGFibGVIZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS50YWJsZUl0ZW1zLFxuICAgICAgICAgICAgICAgICAgcGFnZTogX3ZtLnRhYmxlRmlsdGVyLnBhZ2UsXG4gICAgICAgICAgICAgICAgICBcIml0ZW1zLXBlci1wYWdlXCI6IF92bS50YWJsZUZpbHRlci5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS50YWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICBcInNlcnZlci1pdGVtcy1sZW5ndGhcIjogX3ZtLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgXCJuby1kYXRhLXRleHRcIjogX3ZtLndpdGhTZWxlY3QgPyBcIlwiIDogXCLQndC10YIg0LTQsNC90L3Ri9GFXCIsXG4gICAgICAgICAgICAgICAgICBcIm5vLXJlc3VsdHMtdGV4dFwiOiBfdm0ud2l0aFNlbGVjdCA/IFwiXCIgOiBcItCd0LXRgiDQtNCw0L3QvdGL0YVcIixcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgXCJsb2FkaW5nLXRleHRcIjogXCLQl9Cw0LPRgNGD0LfQutCwLi4uINCf0L7QttCw0LvRg9C50YHRgtCwLCDQv9C+0LTQvtC20LTQuNGC0LVcIixcbiAgICAgICAgICAgICAgICAgIFwiaGlkZS1kZWZhdWx0LWZvb3RlclwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cGFnZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KF92bS50YWJsZUZpbHRlciwgXCJwYWdlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcInBhZ2UtY291bnRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5wYWdlQ291bnQgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcInVwZGF0ZTpvcHRpb25zXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0udGFibGVPcHRpb25zID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHJlZjogXCJyb3dcIiArIHByb3BzLml0ZW0uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wocHJvcHMuaGVhZGVycywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwibWF4LXdpZHRoXCI6IFwiNTAwcHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxpbmsgPT09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua19pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRhYmxlRWRpdEl0ZW0oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaWQgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbVtpdGVtLnZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wczogcHJvcHMsIGl0ZW06IGl0ZW0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0uaGlkZGVuID09PSB0cnVlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy5pdGVtW2l0ZW0udmFsdWVdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uaGlkZGVuX3ByZXBlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uaGlkZGVuX3ByZXBlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXByb3BzLml0ZW0uaGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW1baXRlbS52YWx1ZV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW1baXRlbS52YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uaGlkZGVuID0gIXByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbS5oaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLmhpZGRlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0J/QvtC60LDQt9Cw0YLRjCDRgtC10LrRgdGCXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCh0LrRgNGL0YLRjCDRgtC10LrRgdGCXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtW2l0ZW0udmFsdWVdICE9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtW2l0ZW0udmFsdWVdICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb3BzLml0ZW1baXRlbS52YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmVtcHR5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fdChcImJvZHkuYXBwZW5kXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fdChcImJvZHkucGFnaW5hdGlvblwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIiBkLWZsZXggcHQtMlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBsZW5ndGg6IF92bS5wYWdlQ291bnQsIFwidG90YWwtdmlzaWJsZVwiOiA3IH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFibGVGaWx0ZXIucGFnZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnRhYmxlRmlsdGVyLCBcInBhZ2VcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFibGVGaWx0ZXIucGFnZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCIxNTBweFwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFibGVGaWx0ZXIucGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICBpdGVtczogWzIwLCA0MCwgNjAsIDgwLCAxMDBdLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0J/QvtC60LDQt9GL0LLQsNGC0Ywg0L/QvjpcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS50YWJsZUZpbHRlci5wZXJfcGFnZSA9IHBhcnNlSW50KCRldmVudCwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgPyBwYXJzZUludCgkZXZlbnQsIDEwKVxuICAgICAgICAgICAgICAgICAgICAgIDogMVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb3ZlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgIGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoXCLQodC/0LjRgdC+0Log0YDQsNC50L7QvdC+0LJcIikgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1zcGFjZS1iZXR3ZWVuIG1iLTZcIixcbiAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCB0aWxlOiBcIlwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiQXBwRGF0YVRhYmxlXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0ubm90Rm91bmQsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIgIW5vdEZvdW5kXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLnJlZ2lvbnMsXG4gICAgICAgICAgICAgIHNob3dTZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICBmaXhlZENvbDogZmFsc2UsXG4gICAgICAgICAgICAgIGVkaXRJdGVtOiBfdm0uc2hvd0l0ZW0sXG4gICAgICAgICAgICAgIGVtcHR5SXRlbVRleHQ6IFwiLVwiLFxuICAgICAgICAgICAgICBpdGVtc1VybDogX3ZtLnJlZ2lvbnNJdGVtc1VybFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLm5vdEZvdW5kXG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIyMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yZWQtYm9yZGVyXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uOiBcIjJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAg0J/QviDQktCw0YjQtdC80YMg0LfQsNC/0YDQvtGB0YMg0L3QuNGH0LXQs9C+INC90LUg0L3QsNC50LTQtdC90L4uINCf0L7Qv9GA0L7QsdGD0LnRgtC1INC40LfQvNC10L3QuNGC0Ywg0L/QsNGA0LDQvNC10YLRgNGLINC/0L7QuNGB0LrQsC5cXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0MDFiMGNjNlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==