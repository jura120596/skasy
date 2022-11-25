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
          id: 'code'
        }, {
          value: 'created_at',
          text: 'Дата создания'
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
        name: this.item_route_name,
        params: {
          code: id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1JlZ2lvbnMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FwcERhdGFUYWJsZS52dWU/NjIzNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9BcHBEYXRhVGFibGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9SZWdpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9BcHBEYXRhVGFibGUudnVlP2I0YjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1JlZ2lvbnMudnVlP2Y2NDEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZT8yMzE0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9SZWdpb25zLnZ1ZT84M2Y2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FwcERhdGFUYWJsZS52dWU/MDRiMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkhBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFDQSxrQkFEQTtBQUVBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBRkE7QUFNQTtBQUNBLGlCQURBO0FBRUE7QUFDQTtBQUNBO0FBSkEsS0FOQTtBQVlBLHVCQVpBO0FBYUEscUJBYkE7QUFjQSxrQkFkQTtBQWVB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QUFDQSxrQ0FBa0MsdUJBQXVCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEVBOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLDhyQkFBK1Y7QUFDclg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJKQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfUmVnaW9uc192dWU4ZWU2NzYyZDU5YjU1Yjc2MWYxYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250YWluZXIgPlxuICAgICAgICA8c2xvdCBuYW1lPVwiYm9keS5wcmVwZW5kXCIvPlxuICAgICAgICA8di1yb3dcbiAgICAgICAgICAgIHN0eWxlPVwiZmxleC13cmFwOiBub3dyYXA7XCI+XG4gICAgICAgICAgICA8di1jb2wgdi1pZj1cIndpdGhGaXhlZCAmJiBnZXRGaXhlZEhlYWRlcnMoZmFsc2UpLmxlbmd0aD4wXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpeGVkQ29sdW1uIGZsZXgtZ3Jvdy0wIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICA8di1kYXRhLXRhYmxlIDpoZWFkZXJzPVwiZ2V0Rml4ZWRIZWFkZXJzKGZhbHNlKVwiIDppdGVtcz1cInRhYmxlSXRlbXNcIiBpdGVtLWtleT1cImlkXCIgdi1tb2RlbD1cInNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwYWdlLnN5bmM9XCJ0YWJsZUZpbHRlci5wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcy1wZXItcGFnZT1cInRhYmxlRmlsdGVyLnBlcl9wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwYWdlLWNvdW50PVwicGFnZUNvdW50ID0gJGV2ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzZXJ2ZXItaXRlbXMtbGVuZ3RoPVwidG90YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZS1kZWZhdWx0LWZvb3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbjppbnB1dD1cIiRlbWl0KCdpbnB1dCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zLnN5bmM9XCJ0YWJsZU9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNob3ctc2VsZWN0PVwid2l0aFNlbGVjdFwiIHN0eWxlPVwid2lkdGg6IG1heC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuby1kYXRhLXRleHQ9XCIn0J3QtdGCINC00LDQvdC90YvRhSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5vLXJlc3VsdHMtdGV4dD1cIifQndC10YIg0LTQsNC90L3Ri9GFJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJmaXhlZFRhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLXRleHQ9XCLQl9Cw0LPRgNGD0LfQutCwLi4uINCf0L7QttCw0LvRg9C50YHRgtCwLCDQv9C+0LTQvtC20LTQuNGC0LVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpoZWFkZXIuc2V0dGluZ3M9XCJ7aGVhZGVyfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGNsYXNzPVwiZC1mbGV4IGFsaWduLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJoZWFkZXItc2V0dGluZ3MtbWVudVwiIHYtYmluZDpoZWFkZXI9XCJoZWFkZXJcIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0uc2V0dGluZ3M9XCJ7aXRlbX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LW1lbnUgb2Zmc2V0LXk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XCJ7IG9uLCBhdHRycyB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dCAgOnJlZj1cIidzZXR0aW5nc3JvdycraXRlbS5pZFwiIGNsYXNzPVwibWEtMCBwYS0wIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNlbnRlclwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFya1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImF0dHJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uPVwib25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBzbWFsbD5tZGktbWVudTwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJpdGVtLXNldHRpbmdzLW1lbnVcIiB2LWJpbmQ6aXRlbT1cIml0ZW1cIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtLm1hcms9XCJ7aXRlbX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRvb2x0aXAgYm90dG9tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVwieyBvbiwgYXR0cnMgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaXRlbS5jb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJhdHRyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uPVwib25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cIntjb2xvcjogaXRlbS5jb2xvci5jb2xvcn1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+bWRpLWNoZWNrYm94LWJsYW5rLWNpcmNsZTwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tpdGVtLmNvbG9yLnRleHR9fSAo0J/QvtGB0LvQtdC00L3QtdC1INC+0LHQvdC+0LLQu9C10L3QuNC1Ont7aXRlbS5maW5pc2hlZF9hdH19KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtLm1hcmt9fVxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdi1kYXRhLXRhYmxlPlxuXG4gICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgPHYtY29sIHN0eWxlPVwib3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6IGJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlOyBcIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleC1ncm93LTEgZmxleC1zaHJpbmstMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInRhYmxlSXRlbXMgJiYgdGFibGVJdGVtcy5sZW5ndGggPiAwICYmIHNob3dTY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2hpcCBjbGFzcz1cImFwcC10YWJsZS1zY3JvbGwtbGVmdFwiIEBtb3VzZW92ZXI9XCJvblNjcm9sbExlZnRcIiBAbW91c2VvdXQ9XCJzY3JvbGxSdW4gPSBmYWxzZTtcIi8+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNoaXAgY2xhc3M9XCJhcHAtdGFibGUtc2Nyb2xsLWxlZnQgYXBwLXRhYmxlLXNjcm9sbC1yaWdodFwiICBAbW91c2VvdmVyPVwib25TY3JvbGxSaWdodFwiICBAbW91c2VvdXQ9XCJzY3JvbGxSdW4gPSBmYWxzZTtcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHYtZGF0YS10YWJsZSA6aGVhZGVycz1cIndpdGhGaXhlZCA/IGdldEZpeGVkSGVhZGVycyh0cnVlKSA6IHRhYmxlSGVhZGVyc1wiIDppdGVtcz1cInRhYmxlSXRlbXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBhZ2Uuc3luYz1cInRhYmxlRmlsdGVyLnBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zLXBlci1wYWdlPVwidGFibGVGaWx0ZXIucGVyX3BhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHBhZ2UtY291bnQ9XCJwYWdlQ291bnQgPSAkZXZlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnMuc3luYz1cInRhYmxlT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2VydmVyLWl0ZW1zLWxlbmd0aD1cInRvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuby1kYXRhLXRleHQ9XCJ3aXRoU2VsZWN0ID8gJycgOiAn0J3QtdGCINC00LDQvdC90YvRhSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5vLXJlc3VsdHMtdGV4dD1cIndpdGhTZWxlY3QgPyAnJyA6ICfQndC10YIg0LTQsNC90L3Ri9GFJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ0YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy10ZXh0PVwi0JfQsNCz0YDRg9C30LrQsC4uLiDQn9C+0LbQsNC70YPQudGB0YLQsCwg0L/QvtC00L7QttC00LjRgtC1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtZGVmYXVsdC1mb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiaXRlbVwiIHNsb3Qtc2NvcGU9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIDpyZWY9XCIncm93Jytwcm9wcy5pdGVtLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwcm9wcy5oZWFkZXJzXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDUwMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIml0ZW0ubGluayA9PT0gdHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImxpbmtfaXRlbVwiIHYtYmluZD1cIntwcm9wcywgaXRlbX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XCJ0YWJsZUVkaXRJdGVtKHByb3BzLml0ZW1baXRlbS5pZCA9PT0gdW5kZWZpbmVkID8gJ2lkJyA6IGl0ZW0uaWRdLCBwcm9wcy5pdGVtLCBpdGVtLnZhbHVlKVwiID57e3Byb3BzLml0ZW1baXRlbS52YWx1ZV19fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwiaXRlbS5oaWRkZW4gPT09IHRydWUgJiYgKHByb3BzLml0ZW1baXRlbS52YWx1ZV0gfHwgcHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJwcm9wcy5pdGVtLmhpZGRlbl9wcmVwZW5kXCI+e3twcm9wcy5pdGVtLmhpZGRlbl9wcmVwZW5kfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiIXByb3BzLml0ZW0uaGlkZGVuXCI+e3twcm9wcy5pdGVtW2l0ZW0udmFsdWVdfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB2LWlmPVwicHJvcHMuaXRlbVtpdGVtLnZhbHVlXVwiIEBjbGljaz1cInByb3BzLml0ZW0uaGlkZGVuID0gIXByb3BzLml0ZW0uaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twcm9wcy5pdGVtLmhpZGRlbiA/ICfQn9C+0LrQsNC30LDRgtGMINGC0LXQutGB0YInIDogJ9Ch0LrRgNGL0YLRjCDRgtC10LrRgdGCJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cHJvcHMuaXRlbVtpdGVtLnZhbHVlXSAhPT0gdW5kZWZpbmVkICYmIHByb3BzLml0ZW1baXRlbS52YWx1ZV0gIT09IG51bGwgPyBwcm9wcy5pdGVtW2l0ZW0udmFsdWVdIDogZW1wdHlUZXh0fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC92LWRhdGEtdGFibGU+XG4gICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICA8L3Ytcm93PlxuICAgICAgICA8c2xvdCBuYW1lPVwiYm9keS5hcHBlbmRcIi8+XG4gICAgICAgIDxzbG90IG5hbWU9XCJib2R5LnBhZ2luYXRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgZC1mbGV4IHB0LTJcIj5cbiAgICAgICAgICAgICAgICA8di1wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0YWJsZUZpbHRlci5wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cInBhZ2VDb3VudFwiXG4gICAgICAgICAgICAgICAgICAgIDp0b3RhbC12aXNpYmxlPVwiN1wiXG4gICAgICAgICAgICAgICAgPjwvdi1wYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICAgIDx2LXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJ0YWJsZUZpbHRlci5wZXJfcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJ0YWJsZUZpbHRlci5wZXJfcGFnZSA9IHBhcnNlSW50KCRldmVudCwgMTApID8gcGFyc2VJbnQoJGV2ZW50LCAxMCkgOiAxXCJcbiAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwiWzIwLDQwLDYwLDgwLDEwMF1cIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCf0L7QutCw0LfRi9Cy0LDRgtGMINC/0L46XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDE1MHB4XCJcbiAgICAgICAgICAgICAgICA+PC92LXNlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG4gICAgaW1wb3J0IEF4aW9zIGZyb20gJ0AvdXRpbHMvYXhpb3MnO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ0FwcERhdGFUYWJsZScsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBoZWFkZXJzOiBBcnJheSxcbiAgICAgICAgICAgIGl0ZW1zVXJsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93U2VsZWN0OiBCb29sZWFuLFxuICAgICAgICAgICAgZml4ZWRDb2w6IEJvb2xlYW4sXG4gICAgICAgICAgICBmaWx0ZXI6IE9iamVjdCxcbiAgICAgICAgICAgIHNlcnZpY2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOk9iamVjdCxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiAoe30pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9JdGVtOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogIChpdGVtKSA9PiB7cmV0dXJuIGl0ZW07fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlZGl0SXRlbToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IChpZCkgPT4ge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW1wdHlJdGVtVGV4dDoge1xuICAgICAgICAgICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlQ291bnQ6IDAsXG4gICAgICAgICAgICAgICAgdGFibGVJdGVtczogdGhpcy5pdGVtcyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogW10sXG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgd2l0aFNlbGVjdCA6IHRoaXMuc2hvd1NlbGVjdCxcbiAgICAgICAgICAgICAgICB3aXRoRml4ZWQ6IHRoaXMuZml4ZWRDb2wsXG4gICAgICAgICAgICAgICAgdGFibGVGaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5maWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgICAgIHBlcl9wYWdlOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgc29ydEJ5OiAnaWQnLFxuICAgICAgICAgICAgICAgICAgICBzb3J0RGVzYyA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2Nyb2xsUnVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93U2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0YWJsZU9wdGlvbnM6IHt9LFxuICAgICAgICAgICAgICAgIHRhYmxlRWRpdEl0ZW06IHRoaXMuZWRpdEl0ZW0sXG4gICAgICAgICAgICAgICAgZW1wdHlUZXh0OiB0aGlzLmVtcHR5SXRlbVRleHQsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRGaXhlZENvbHVtbkxlZnQgKGluZHggPSB0aGlzLmhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyc1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChoZWFkZXIsIGkpID0+IGkgPCBpbmR4ICYmIGhlYWRlci5maXhlZCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoY3VycmVudFZhbHVlLCBoZWFkZXIpID0+IGN1cnJlbnRWYWx1ZSArIChwYXJzZUludChoZWFkZXIud2lkdGgpIHx8IDApLCAwKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldEZpeGVkSGVhZGVycyhyZXZlcnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyc1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChoZWFkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhcmV2ZXJzZSA/IGhlYWRlci5maXhlZCA9PT0gdHJ1ZSA6ICEoaGVhZGVyLmZpeGVkICE9PSB1bmRlZmluZWQgJiYgaGVhZGVyLmZpeGVkICE9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgbG9hZEl0ZW1zKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IE1hdGguZmxvb3IodGhpcy50b3RhbCAvIHRoaXMudGFibGVGaWx0ZXIucGVyX3BhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICArICh0aGlzLnRvdGFsID09PSB0aGlzLnRhYmxlRmlsdGVyLnBlcl9wYWdlID8gMCA6IDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlVmlld05vcm1hbGl6ZSgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgICh0aGlzLml0ZW1zVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB0aGlzLnNlcnZpY2UgJiYgdGhpcy5zZXJ2aWNlLnByZXBhcmVQYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zZXJ2aWNlLnByZXBhcmVQYXJhbXModGhpcy50YWJsZUZpbHRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy50YWJsZUZpbHRlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWRpbmcnKVxuICAgICAgICAgICAgICAgICAgICBBeGlvcy5nZXQodGhpcy5pdGVtc1VybCwge3BhcmFtc30pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlSXRlbXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFwKHRoaXMudG9JdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzcG9uc2UuZGF0YS50b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IHJlc3BvbnNlLmRhdGEubGFzdF9wYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVWaWV3Tm9ybWFsaXplKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcsIHJlc3BvbnNlLmRhdGEuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkaW5nJylcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UuZ2V0QWxsKHRoaXMudGFibGVGaWx0ZXIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUl0ZW1zID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hcCh0aGlzLnRvSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzcG9uc2UuZGF0YS50b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNvdW50ID0gcmVzcG9uc2UuZGF0YS5sYXN0X3BhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlVmlld05vcm1hbGl6ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkJywgcmVzcG9uc2UuZGF0YS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbFRvKGVsZW1lbnQsIHNjcm9sbFBpeGVscywgZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxQb3MgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgLy8gQ29uZGl0aW9uIHRvIGNoZWNrIGlmIHNjcm9sbGluZyBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGlmICggISggKHNjcm9sbFBvcyA9PT0gMCB8fCBzY3JvbGxQaXhlbHMgPiAwKSAmJiAoZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbFBvcyA9PT0gZWxlbWVudC5zY3JvbGxXaWR0aCB8fCBzY3JvbGxQaXhlbHMgPCAwKSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHN0YXJ0IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub3dcIiBpbiB3aW5kb3cucGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbCA9ICh0aW1lc3RhbXApICA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NhbGN1bGF0ZSB0aGUgdGltZWVsYXBzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVFbGFwc2VkID0gdGltZXN0YW1wIC0gc3RhcnRUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9DYWxjdWxhdGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gZHVyYXRpb24gPyBNYXRoLm1pbih0aW1lRWxhcHNlZCAvIGR1cmF0aW9uLCAxKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1NldCB0aGUgc2Nyb2xsZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAocHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNjcm9sbFBvcyArIHNjcm9sbFBpeGVscyAqIHByb2dyZXNzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgKyAxMCAqIHNjcm9sbFBpeGVscyAvKE1hdGguYWJzKHNjcm9sbFBpeGVscykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgZWxhcHNlZCB0aW1lIGlzIGxlc3MgdGhlbiBkdXJhdGlvbiB0aGVuIGNhbGwgdGhlIHJlcXVlc3RBbmltYXRpb24sIG90aGVyd2lzZSBleGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxSdW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1JlcXVlc3QgZm9yIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vQ2FsbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgb24gc2Nyb2xsIGZ1bmN0aW9uIGZpcnN0IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblNjcm9sbExlZnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxSdW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXSwgLXRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0uc2Nyb2xsV2lkdGgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU2Nyb2xsUmlnaHQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxSdW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXSwgdGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXS5zY3JvbGxXaWR0aCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGVWaWV3Tm9ybWFsaXplKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmZpeGVkVGFibGUpIE9iamVjdC5rZXlzKHRoaXMuJHJlZnMpLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYuc2VhcmNoKCdyb3cnKSA9PT0gMCAmJiB0aGlzLiRyZWZzWydzZXR0aW5ncycrIHZdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzWydzZXR0aW5ncycrIHZdLnN0eWxlLmhlaWdodCA9ICh0aGlzLiRyZWZzW3ZdLmNsaWVudEhlaWdodCAtIDEpKydweCc7IC8vYm9vdG9tIGJvcmRlciBvbiBldmVyeSB0YWJsZSByb3dcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRMb2FkSXRlbXMgPSBfLmRlYm91bmNlKHRoaXMubG9hZEl0ZW1zLCA1MDApXG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICB0YWJsZUZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlZExvYWRJdGVtcygpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGVPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFibGVPcHRpb25zLnNvcnRCeS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIuc29ydEJ5ID0gdGhpcy50YWJsZU9wdGlvbnMuc29ydEJ5WzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlT3B0aW9ucy5zb3J0RGVzYy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIuc29ydERlc2MgPSB0aGlzLnRhYmxlT3B0aW9ucy5zb3J0RGVzY1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHNvcnRCeSwgc29ydERlc2MgfSA9IHRoaXMudGFibGVGaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Tb3J0JywgeyBzb3J0QnksIHNvcnREZXNjIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYmxlSXRlbXM6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTY3JvbGwgPSB0aGlzLiRyZWZzLnRhYmxlLiRlbC5jaGlsZE5vZGVzWzBdLnNjcm9sbFdpZHRoID4gdGhpcy4kcmVmcy50YWJsZS4kZWwuc2Nyb2xsV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWVwOnRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIgPSB7Li4udGhpcy50YWJsZUZpbHRlciwgLi4udGhpcy5maWx0ZXJ9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUZpbHRlci5wYWdlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVlcDp0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVJdGVtcyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEl0ZW1zKClcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMudGFibGUuaXRlbXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVZpZXdOb3JtYWxpemUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHRoLmZpeGVkQ29sdW1uLCB0ZC5maXhlZENvbHVtbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuZml4ZWRDb2x1bW4gICB0aDpsYXN0LWNoaWxke1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbiAgICB9XG4gICAgZGl2ID4gLmZpeGVkQ29sdW1uOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuICAgIGRpdiA+IC5jb2w6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVwiY292ZXJcIj5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cIifQodC/0LjRgdC+0Log0YDQsNC50L7QvdC+0LInXCI+XG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICA8di1jYXJkIGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktc3BhY2UtYmV0d2VlbiBtYi02XCIgZmxhdCB0aWxlPlxuICAgICAgICAgICAgPEFwcERhdGFUYWJsZVxuICAgICAgICAgICAgICAgIHYtc2hvdz1cIiFzaG93Q291cnRzVGFibGUgJiYgIW5vdEZvdW5kXCJcbiAgICAgICAgICAgICAgICA6aGVhZGVycz1cImhlYWRlcnMucmVnaW9uc1wiXG4gICAgICAgICAgICAgICAgOnNob3dTZWxlY3Q9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgOmZpeGVkQ29sPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIDplZGl0SXRlbT1cInNob3dJdGVtXCJcbiAgICAgICAgICAgICAgICA6ZW1wdHlJdGVtVGV4dD1cIictJ1wiXG4gICAgICAgICAgICAgICAgOml0ZW1zVXJsPVwicmVnaW9uc0l0ZW1zVXJsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvQXBwRGF0YVRhYmxlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJub3RGb3VuZFwiPlxuICAgICAgICAgICAgICAgIDx2LWFsZXJ0IHN0eWxlPVwibWFyZ2luLXRvcDogMjBweFwiIGNvbG9yZWQtYm9yZGVyIHR5cGU9XCJpbmZvXCIgZWxldmF0aW9uPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICDQn9C+INCS0LDRiNC10LzRgyDQt9Cw0L/RgNC+0YHRgyDQvdC40YfQtdCz0L4g0L3QtSDQvdCw0LnQtNC10L3Qvi4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0LjQt9C80LXQvdC40YLRjCDQv9Cw0YDQsNC80LXRgtGA0Ysg0L/QvtC40YHQutCwLlxuICAgICAgICAgICAgICAgIDwvdi1hbGVydD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdi1jYXJkPlxuICAgIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEFwcERhdGFUYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBEYXRhVGFibGVcIjtcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdSZWdpb25zJyxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgQXBwRGF0YVRhYmxlXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBub3RGb3VuZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICByZWdpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnY29kZScsIHRleHQ6ICfQmtC+0LQg0YDQtdCz0LjQvtC90LAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnbmFtZScsIHRleHQ6ICfQoNC10LPQuNC+0L0nLCBsaW5rOiB0cnVlLCBpZDogJ2NvZGUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnY3JlYXRlZF9hdCcsIHRleHQ6ICfQlNCw0YLQsCDRgdC+0LfQtNCw0L3QuNGPJyB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaXRlbV9yb3V0ZV9uYW1lOiAncmVnaW9uLWNvdXJ0cycsXG4gICAgICAgICAgICAgICAgdm0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBsb2FkaW5nKGEsIGIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWEgJiYgYikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXIubmFtZS5sZW5ndGggPiAwICYmIHRoaXMuY291cnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdEZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBjcmVhdGVkKCkge1xuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgcmVnaW9uc0l0ZW1zVXJsKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnL2Rpc3RyaWN0L3JlZ2lvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNob3dJdGVtKGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiB0aGlzLml0ZW1fcm91dGVfbmFtZSwgcGFyYW1zOiB7IGNvZGU6IGlkIH0gfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxudGFibGUge1xcbiAgICB3aWR0aDogLXdlYmtpdC1tYXgtY29udGVudCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogLW1vei1tYXgtY29udGVudCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcXG59XFxudGguZml4ZWRDb2x1bW4sIHRkLmZpeGVkQ29sdW1uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5maXhlZENvbHVtbiAgIHRoOmxhc3QtY2hpbGR7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xcbn1cXG5kaXYgPiAuZml4ZWRDb2x1bW46bnRoLWNoaWxkKDEpIHtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG59XFxuZGl2ID4gLmNvbDpudGgtY2hpbGQoMikge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FwcERhdGFUYWJsZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWlXQTtJQUNBLHFDQUFBO0lBQUEsa0NBQUE7SUFBQSw2QkFBQTtBQUNBO0FBQ0E7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtBQUNBO0FBQ0E7SUFDQSx1QkFBQTtBQUNBO0FBQ0E7SUFDQSxnQkFBQTtBQUNBO0FBQ0E7SUFDQSxlQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8di1jb250YWluZXIgPlxcbiAgICAgICAgPHNsb3QgbmFtZT1cXFwiYm9keS5wcmVwZW5kXFxcIi8+XFxuICAgICAgICA8di1yb3dcXG4gICAgICAgICAgICBzdHlsZT1cXFwiZmxleC13cmFwOiBub3dyYXA7XFxcIj5cXG4gICAgICAgICAgICA8di1jb2wgdi1pZj1cXFwid2l0aEZpeGVkICYmIGdldEZpeGVkSGVhZGVycyhmYWxzZSkubGVuZ3RoPjBcXFwiXFxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmaXhlZENvbHVtbiBmbGV4LWdyb3ctMCBmbGV4LXNocmluay0wXFxcIj5cXG4gICAgICAgICAgICAgICAgPHYtZGF0YS10YWJsZSA6aGVhZGVycz1cXFwiZ2V0Rml4ZWRIZWFkZXJzKGZhbHNlKVxcXCIgOml0ZW1zPVxcXCJ0YWJsZUl0ZW1zXFxcIiBpdGVtLWtleT1cXFwiaWRcXFwiIHYtbW9kZWw9XFxcInNlbGVjdGVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwYWdlLnN5bmM9XFxcInRhYmxlRmlsdGVyLnBhZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zLXBlci1wYWdlPVxcXCJ0YWJsZUZpbHRlci5wZXJfcGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcGFnZS1jb3VudD1cXFwicGFnZUNvdW50ID0gJGV2ZW50XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzZXJ2ZXItaXRlbXMtbGVuZ3RoPVxcXCJ0b3RhbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWRlZmF1bHQtZm9vdGVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbjppbnB1dD1cXFwiJGVtaXQoJ2lucHV0JylcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnMuc3luYz1cXFwidGFibGVPcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzaG93LXNlbGVjdD1cXFwid2l0aFNlbGVjdFxcXCIgc3R5bGU9XFxcIndpZHRoOiBtYXgtY29udGVudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bm8tZGF0YS10ZXh0PVxcXCIn0J3QtdGCINC00LDQvdC90YvRhSdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5vLXJlc3VsdHMtdGV4dD1cXFwiJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cXFwiZml4ZWRUYWJsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cXFwibG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLXRleHQ9XFxcItCX0LDQs9GA0YPQt9C60LAuLi4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINC/0L7QtNC+0LbQtNC40YLQtVxcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpoZWFkZXIuc2V0dGluZ3M9XFxcIntoZWFkZXJ9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgY2xhc3M9XFxcImQtZmxleCBhbGlnbi1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJoZWFkZXItc2V0dGluZ3MtbWVudVxcXCIgdi1iaW5kOmhlYWRlcj1cXFwiaGVhZGVyXFxcIj48L3Nsb3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0uc2V0dGluZ3M9XFxcIntpdGVtfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbWVudSBvZmZzZXQteT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XFxcInsgb24sIGF0dHJzIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0ICA6cmVmPVxcXCInc2V0dGluZ3Nyb3cnK2l0ZW0uaWRcXFwiIGNsYXNzPVxcXCJtYS0wIHBhLTAgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY2VudGVyXFxcIiA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cXFwiYXR0cnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb249XFxcIm9uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIHNtYWxsPm1kaS1tZW51PC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcIml0ZW0tc2V0dGluZ3MtbWVudVxcXCIgdi1iaW5kOml0ZW09XFxcIml0ZW1cXFwiPjwvc2xvdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbWVudT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0ubWFyaz1cXFwie2l0ZW19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di10b29sdGlwIGJvdHRvbT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XFxcInsgb24sIGF0dHJzIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcIml0ZW0uY29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVxcXCJhdHRyc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uPVxcXCJvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwie2NvbG9yOiBpdGVtLmNvbG9yLmNvbG9yfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5tZGktY2hlY2tib3gtYmxhbmstY2lyY2xlPC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5jb2xvci50ZXh0fX0gKNCf0L7RgdC70LXQtNC90LXQtSDQvtCx0L3QvtCy0LvQtdC90LjQtTp7e2l0ZW0uZmluaXNoZWRfYXR9fSk8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRvb2x0aXA+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtLm1hcmt9fVxcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPC92LWRhdGEtdGFibGU+XFxuXFxuICAgICAgICAgICAgPC92LWNvbD5cXG4gICAgICAgICAgICA8di1jb2wgc3R5bGU9XFxcIm92ZXJmbG93OmhpZGRlbjtkaXNwbGF5OiBibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTsgXFxcIlxcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZmxleC1ncm93LTEgZmxleC1zaHJpbmstMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwidGFibGVJdGVtcyAmJiB0YWJsZUl0ZW1zLmxlbmd0aCA+IDAgJiYgc2hvd1Njcm9sbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8di1jaGlwIGNsYXNzPVxcXCJhcHAtdGFibGUtc2Nyb2xsLWxlZnRcXFwiIEBtb3VzZW92ZXI9XFxcIm9uU2Nyb2xsTGVmdFxcXCIgQG1vdXNlb3V0PVxcXCJzY3JvbGxSdW4gPSBmYWxzZTtcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWNoaXAgY2xhc3M9XFxcImFwcC10YWJsZS1zY3JvbGwtbGVmdCBhcHAtdGFibGUtc2Nyb2xsLXJpZ2h0XFxcIiAgQG1vdXNlb3Zlcj1cXFwib25TY3JvbGxSaWdodFxcXCIgIEBtb3VzZW91dD1cXFwic2Nyb2xsUnVuID0gZmFsc2U7XFxcIi8+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8di1kYXRhLXRhYmxlIDpoZWFkZXJzPVxcXCJ3aXRoRml4ZWQgPyBnZXRGaXhlZEhlYWRlcnModHJ1ZSkgOiB0YWJsZUhlYWRlcnNcXFwiIDppdGVtcz1cXFwidGFibGVJdGVtc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGFnZS5zeW5jPVxcXCJ0YWJsZUZpbHRlci5wYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcy1wZXItcGFnZT1cXFwidGFibGVGaWx0ZXIucGVyX3BhZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHBhZ2UtY291bnQ9XFxcInBhZ2VDb3VudCA9ICRldmVudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucy5zeW5jPVxcXCJ0YWJsZU9wdGlvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcnZlci1pdGVtcy1sZW5ndGg9XFxcInRvdGFsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuby1kYXRhLXRleHQ9XFxcIndpdGhTZWxlY3QgPyAnJyA6ICfQndC10YIg0LTQsNC90L3Ri9GFJ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bm8tcmVzdWx0cy10ZXh0PVxcXCJ3aXRoU2VsZWN0ID8gJycgOiAn0J3QtdGCINC00LDQvdC90YvRhSdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVxcXCJ0YWJsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cXFwibG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLXRleHQ9XFxcItCX0LDQs9GA0YPQt9C60LAuLi4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINC/0L7QtNC+0LbQtNC40YLQtVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWRlZmF1bHQtZm9vdGVyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIml0ZW1cXFwiIHNsb3Qtc2NvcGU9XFxcInByb3BzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgOnJlZj1cXFwiJ3JvdycrcHJvcHMuaXRlbS5pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2LWZvcj1cXFwiKGl0ZW0sIGluZGV4KSBpbiBwcm9wcy5oZWFkZXJzXFxcIiBzdHlsZT1cXFwibWF4LXdpZHRoOiA1MDBweFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcIml0ZW0ubGluayA9PT0gdHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwibGlua19pdGVtXFxcIiB2LWJpbmQ9XFxcIntwcm9wcywgaXRlbX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XFxcInRhYmxlRWRpdEl0ZW0ocHJvcHMuaXRlbVtpdGVtLmlkID09PSB1bmRlZmluZWQgPyAnaWQnIDogaXRlbS5pZF0sIHByb3BzLml0ZW0sIGl0ZW0udmFsdWUpXFxcIiA+e3twcm9wcy5pdGVtW2l0ZW0udmFsdWVdfX08L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cXFwiaXRlbS5oaWRkZW4gPT09IHRydWUgJiYgKHByb3BzLml0ZW1baXRlbS52YWx1ZV0gfHwgcHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XFxcInByb3BzLml0ZW0uaGlkZGVuX3ByZXBlbmRcXFwiPnt7cHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XFxcIiFwcm9wcy5pdGVtLmhpZGRlblxcXCI+e3twcm9wcy5pdGVtW2l0ZW0udmFsdWVdfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdi1pZj1cXFwicHJvcHMuaXRlbVtpdGVtLnZhbHVlXVxcXCIgQGNsaWNrPVxcXCJwcm9wcy5pdGVtLmhpZGRlbiA9ICFwcm9wcy5pdGVtLmhpZGRlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cHJvcHMuaXRlbS5oaWRkZW4gPyAn0J/QvtC60LDQt9Cw0YLRjCDRgtC10LrRgdGCJyA6ICfQodC60YDRi9GC0Ywg0YLQtdC60YHRgid9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twcm9wcy5pdGVtW2l0ZW0udmFsdWVdICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuaXRlbVtpdGVtLnZhbHVlXSAhPT0gbnVsbCA/IHByb3BzLml0ZW1baXRlbS52YWx1ZV0gOiBlbXB0eVRleHR9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgIDwvdi1kYXRhLXRhYmxlPlxcbiAgICAgICAgICAgIDwvdi1jb2w+XFxuICAgICAgICA8L3Ytcm93PlxcbiAgICAgICAgPHNsb3QgbmFtZT1cXFwiYm9keS5hcHBlbmRcXFwiLz5cXG4gICAgICAgIDxzbG90IG5hbWU9XFxcImJvZHkucGFnaW5hdGlvblxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiIGQtZmxleCBwdC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgPHYtcGFnaW5hdGlvblxcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidGFibGVGaWx0ZXIucGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XFxcInBhZ2VDb3VudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDp0b3RhbC12aXNpYmxlPVxcXCI3XFxcIlxcbiAgICAgICAgICAgICAgICA+PC92LXBhZ2luYXRpb24+XFxuICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcbiAgICAgICAgICAgICAgICA8di1zZWxlY3RcXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cXFwidGFibGVGaWx0ZXIucGVyX3BhZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVxcXCJ0YWJsZUZpbHRlci5wZXJfcGFnZSA9IHBhcnNlSW50KCRldmVudCwgMTApID8gcGFyc2VJbnQoJGV2ZW50LCAxMCkgOiAxXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVxcXCJbMjAsNDAsNjAsODAsMTAwXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCLQn9C+0LrQsNC30YvQstCw0YLRjCDQv9C+OlxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtYXgtd2lkdGg6IDE1MHB4XFxcIlxcbiAgICAgICAgICAgICAgICA+PC92LXNlbGVjdD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvc2xvdD5cXG4gICAgPC92LWNvbnRhaW5lcj5cXG48L3RlbXBsYXRlPlxcbjxzY3JpcHQ+XFxuICAgIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XFxuICAgIGltcG9ydCBBeGlvcyBmcm9tICdAL3V0aWxzL2F4aW9zJztcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgbmFtZTogJ0FwcERhdGFUYWJsZScsXFxuICAgICAgICBwcm9wczoge1xcbiAgICAgICAgICAgIGhlYWRlcnM6IEFycmF5LFxcbiAgICAgICAgICAgIGl0ZW1zVXJsOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6U3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgaXRlbXM6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgc2hvd1NlbGVjdDogQm9vbGVhbixcXG4gICAgICAgICAgICBmaXhlZENvbDogQm9vbGVhbixcXG4gICAgICAgICAgICBmaWx0ZXI6IE9iamVjdCxcXG4gICAgICAgICAgICBzZXJ2aWNlOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6T2JqZWN0LFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiAoe30pXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB0b0l0ZW06IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICAoaXRlbSkgPT4ge3JldHVybiBpdGVtO30sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBlZGl0SXRlbToge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKGlkKSA9PiB7fSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGVtcHR5SXRlbVRleHQ6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTpTdHJpbmcsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIHBhZ2VDb3VudDogMCxcXG4gICAgICAgICAgICAgICAgdGFibGVJdGVtczogdGhpcy5pdGVtcyxcXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IFtdLFxcbiAgICAgICAgICAgICAgICB0b3RhbDogMCxcXG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXJzOiB0aGlzLmhlYWRlcnMsXFxuICAgICAgICAgICAgICAgIHdpdGhTZWxlY3QgOiB0aGlzLnNob3dTZWxlY3QsXFxuICAgICAgICAgICAgICAgIHdpdGhGaXhlZDogdGhpcy5maXhlZENvbCxcXG4gICAgICAgICAgICAgICAgdGFibGVGaWx0ZXI6IHtcXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZmlsdGVyLFxcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogMSxcXG4gICAgICAgICAgICAgICAgICAgIHBlcl9wYWdlOiAyMCxcXG4gICAgICAgICAgICAgICAgICAgIHNvcnRCeTogJ2lkJyxcXG4gICAgICAgICAgICAgICAgICAgIHNvcnREZXNjIDogZmFsc2UsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHNjcm9sbFJ1bjogZmFsc2UsXFxuICAgICAgICAgICAgICAgIHNob3dTY3JvbGw6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICB0YWJsZU9wdGlvbnM6IHt9LFxcbiAgICAgICAgICAgICAgICB0YWJsZUVkaXRJdGVtOiB0aGlzLmVkaXRJdGVtLFxcbiAgICAgICAgICAgICAgICBlbXB0eVRleHQ6IHRoaXMuZW1wdHlJdGVtVGV4dCxcXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXFxuICAgICAgICAgICAgfTtcXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgZ2V0Rml4ZWRDb2x1bW5MZWZ0IChpbmR4ID0gdGhpcy5oZWFkZXJzLmxlbmd0aCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJzXFxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChoZWFkZXIsIGkpID0+IGkgPCBpbmR4ICYmIGhlYWRlci5maXhlZCA9PT0gdHJ1ZSlcXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGN1cnJlbnRWYWx1ZSwgaGVhZGVyKSA9PiBjdXJyZW50VmFsdWUgKyAocGFyc2VJbnQoaGVhZGVyLndpZHRoKSB8fCAwKSwgMClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGdldEZpeGVkSGVhZGVycyhyZXZlcnNlKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhlYWRlcnNcXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGhlYWRlcikgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhcmV2ZXJzZSA/IGhlYWRlci5maXhlZCA9PT0gdHJ1ZSA6ICEoaGVhZGVyLmZpeGVkICE9PSB1bmRlZmluZWQgJiYgaGVhZGVyLmZpeGVkICE9PSBmYWxzZSlcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgYXN5bmMgbG9hZEl0ZW1zKCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtcyAhPT0gdW5kZWZpbmVkKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5pdGVtcy5sZW5ndGg7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IE1hdGguZmxvb3IodGhpcy50b3RhbCAvIHRoaXMudGFibGVGaWx0ZXIucGVyX3BhZ2UpXFxuICAgICAgICAgICAgICAgICAgICAgICAgKyAodGhpcy50b3RhbCA9PT0gdGhpcy50YWJsZUZpbHRlci5wZXJfcGFnZSA/IDAgOiAxKTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVWaWV3Tm9ybWFsaXplKClcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBpZiAgKHRoaXMuaXRlbXNVcmwpIHtcXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB0aGlzLnNlcnZpY2UgJiYgdGhpcy5zZXJ2aWNlLnByZXBhcmVQYXJhbXNcXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc2VydmljZS5wcmVwYXJlUGFyYW1zKHRoaXMudGFibGVGaWx0ZXIpXFxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnRhYmxlRmlsdGVyO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkaW5nJylcXG4gICAgICAgICAgICAgICAgICAgIEF4aW9zLmdldCh0aGlzLml0ZW1zVXJsLCB7cGFyYW1zfSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUl0ZW1zID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hcCh0aGlzLnRvSXRlbSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWwgPSByZXNwb25zZS5kYXRhLnRvdGFsO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IHJlc3BvbnNlLmRhdGEubGFzdF9wYWdlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlVmlld05vcm1hbGl6ZSgpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcsIHJlc3BvbnNlLmRhdGEuZGF0YSlcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkJylcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZGluZycpXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5nZXRBbGwodGhpcy50YWJsZUZpbHRlcilcXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVJdGVtcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYXAodGhpcy50b0l0ZW0pO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWwgPSByZXNwb25zZS5kYXRhLnRvdGFsO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNvdW50ID0gcmVzcG9uc2UuZGF0YS5sYXN0X3BhZ2U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVZpZXdOb3JtYWxpemUoKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkJywgcmVzcG9uc2UuZGF0YS5kYXRhKVxcbiAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkJylcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgc2Nyb2xsVG8oZWxlbWVudCwgc2Nyb2xsUGl4ZWxzLCBkdXJhdGlvbikge1xcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxQb3MgPSBlbGVtZW50LnNjcm9sbExlZnQ7XFxuICAgICAgICAgICAgICAgIC8vIENvbmRpdGlvbiB0byBjaGVjayBpZiBzY3JvbGxpbmcgaXMgcmVxdWlyZWRcXG4gICAgICAgICAgICAgICAgaWYgKCAhKCAoc2Nyb2xsUG9zID09PSAwIHx8IHNjcm9sbFBpeGVscyA+IDApICYmIChlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsUG9zID09PSBlbGVtZW50LnNjcm9sbFdpZHRoIHx8IHNjcm9sbFBpeGVscyA8IDApKSlcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBzdGFydCB0aW1lc3RhbXBcXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9XFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5vd1xcXCIgaW4gd2luZG93LnBlcmZvcm1hbmNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcGVyZm9ybWFuY2Uubm93KClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGwgPSAodGltZXN0YW1wKSAgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2FsY3VsYXRlIHRoZSB0aW1lZWxhcHNlZFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVFbGFwc2VkID0gdGltZXN0YW1wIC0gc3RhcnRUaW1lO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2FsY3VsYXRlIHByb2dyZXNzXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBkdXJhdGlvbiA/IE1hdGgubWluKHRpbWVFbGFwc2VkIC8gZHVyYXRpb24sIDEpIDogbnVsbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1NldCB0aGUgc2Nyb2xsZWZ0XFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gKHByb2dyZXNzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2Nyb2xsUG9zICsgc2Nyb2xsUGl4ZWxzICogcHJvZ3Jlc3MgOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgKyAxMCAqIHNjcm9sbFBpeGVscyAvKE1hdGguYWJzKHNjcm9sbFBpeGVscykpKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIGVsYXBzZWQgdGltZSBpcyBsZXNzIHRoZW4gZHVyYXRpb24gdGhlbiBjYWxsIHRoZSByZXF1ZXN0QW5pbWF0aW9uLCBvdGhlcndpc2UgZXhpdFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFJ1bikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1JlcXVlc3QgZm9yIGFuaW1hdGlvblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC8vQ2FsbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgb24gc2Nyb2xsIGZ1bmN0aW9uIGZpcnN0IHRpbWVcXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgb25TY3JvbGxMZWZ0KCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFJ1biA9IHRydWU7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXSwgLXRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0uc2Nyb2xsV2lkdGgpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgb25TY3JvbGxSaWdodCgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxSdW4gPSB0cnVlO1xcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0sIHRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0uc2Nyb2xsV2lkdGgpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdGFibGVWaWV3Tm9ybWFsaXplKCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcmVmcy5maXhlZFRhYmxlKSBPYmplY3Qua2V5cyh0aGlzLiRyZWZzKS5mb3JFYWNoKCh2KSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodi5zZWFyY2goJ3JvdycpID09PSAwICYmIHRoaXMuJHJlZnNbJ3NldHRpbmdzJysgdl0pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzWydzZXR0aW5ncycrIHZdLnN0eWxlLmhlaWdodCA9ICh0aGlzLiRyZWZzW3ZdLmNsaWVudEhlaWdodCAtIDEpKydweCc7IC8vYm9vdG9tIGJvcmRlciBvbiBldmVyeSB0YWJsZSByb3dcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XFxuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRMb2FkSXRlbXMgPSBfLmRlYm91bmNlKHRoaXMubG9hZEl0ZW1zLCA1MDApXFxuICAgICAgICB9LFxcbiAgICAgICAgd2F0Y2g6IHtcXG4gICAgICAgICAgICB0YWJsZUZpbHRlcjoge1xcbiAgICAgICAgICAgICAgICBoYW5kbGVyICgpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkTG9hZEl0ZW1zKClcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZGVlcDogdHJ1ZVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdGFibGVPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgIGhhbmRsZXIoKSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJsZU9wdGlvbnMuc29ydEJ5Lmxlbmd0aCA9PT0gMSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIuc29ydEJ5ID0gdGhpcy50YWJsZU9wdGlvbnMuc29ydEJ5WzBdO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFibGVPcHRpb25zLnNvcnREZXNjLmxlbmd0aCA9PT0gMSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIuc29ydERlc2MgPSB0aGlzLnRhYmxlT3B0aW9ucy5zb3J0RGVzY1swXTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc29ydEJ5LCBzb3J0RGVzYyB9ID0gdGhpcy50YWJsZUZpbHRlclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Tb3J0JywgeyBzb3J0QnksIHNvcnREZXNjIH0pXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB0YWJsZUl0ZW1zOiB7XFxuICAgICAgICAgICAgICAgIGhhbmRsZXIoKSB7XFxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2Nyb2xsID0gdGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXS5zY3JvbGxXaWR0aCA+IHRoaXMuJHJlZnMudGFibGUuJGVsLnNjcm9sbFdpZHRoO1xcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZGVlcDp0cnVlLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZmlsdGVyOiB7XFxuICAgICAgICAgICAgICAgIGhhbmRsZXIodmFsdWUpIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIgPSB7Li4udGhpcy50YWJsZUZpbHRlciwgLi4udGhpcy5maWx0ZXJ9O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIucGFnZSA9IDE7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGRlZXA6dHJ1ZVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgaXRlbXM6IHtcXG4gICAgICAgICAgICAgICAgaGFuZGxlcih2YWx1ZSkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUl0ZW1zID0gdmFsdWU7XFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICAgICAgdGhpcy5sb2FkSXRlbXMoKVxcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKFxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy50YWJsZS5pdGVtc1xcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAodmFsKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlVmlld05vcm1hbGl6ZSgpXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICApXFxuICAgICAgICB9LFxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbiAgICB0YWJsZSB7XFxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICB0aC5maXhlZENvbHVtbiwgdGQuZml4ZWRDb2x1bW4ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuZml4ZWRDb2x1bW4gICB0aDpsYXN0LWNoaWxke1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XFxuICAgIH1cXG4gICAgZGl2ID4gLmZpeGVkQ29sdW1uOm50aC1jaGlsZCgxKSB7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICB9XFxuICAgIGRpdiA+IC5jb2w6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTk1M2I4ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTE5NTNiOGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTE5NTNiOGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTE5NTNiOGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTE5NTNiOGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTE5NTNiOGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0FwcERhdGFUYWJsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlZ2lvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJmMWU4ZGY0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1JlZ2lvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZWdpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYmYxZThkZjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiZjFlOGRmNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiZjFlOGRmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiZjFlOGRmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVnaW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmYxZThkZjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYmYxZThkZjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9SZWdpb25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZ2lvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgW1xuICAgICAgX3ZtLl90KFwiYm9keS5wcmVwZW5kXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtcm93XCIsXG4gICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJmbGV4LXdyYXBcIjogXCJub3dyYXBcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0ud2l0aEZpeGVkICYmIF92bS5nZXRGaXhlZEhlYWRlcnMoZmFsc2UpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZml4ZWRDb2x1bW4gZmxleC1ncm93LTAgZmxleC1zaHJpbmstMFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWRhdGEtdGFibGVcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwiZml4ZWRUYWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCJtYXgtY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmdldEZpeGVkSGVhZGVycyhmYWxzZSksXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS50YWJsZUl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IF92bS50YWJsZUZpbHRlci5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbXMtcGVyLXBhZ2VcIjogX3ZtLnRhYmxlRmlsdGVyLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgIFwic2VydmVyLWl0ZW1zLWxlbmd0aFwiOiBfdm0udG90YWwsXG4gICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLWRlZmF1bHQtZm9vdGVyXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3ctc2VsZWN0XCI6IF92bS53aXRoU2VsZWN0LFxuICAgICAgICAgICAgICAgICAgICAgIFwibm8tZGF0YS10ZXh0XCI6IFwi0J3QtdGCINC00LDQvdC90YvRhVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibm8tcmVzdWx0cy10ZXh0XCI6IFwi0J3QtdGCINC00LDQvdC90YvRhVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9hZGluZy10ZXh0XCI6IFwi0JfQsNCz0YDRg9C30LrQsC4uLiDQn9C+0LbQsNC70YPQudGB0YLQsCwg0L/QvtC00L7QttC00LjRgtC1XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpwYWdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KF92bS50YWJsZUZpbHRlciwgXCJwYWdlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwicGFnZS1jb3VudFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlQ291bnQgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJpbnB1dFwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6b3B0aW9uc1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWJsZU9wdGlvbnMgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaGVhZGVyLnNldHRpbmdzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGVhZGVyID0gcmVmLmhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBhbGlnbi1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl90KFwiaGVhZGVyLXNldHRpbmdzLW1lbnVcIiwgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbS5zZXR0aW5nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LW1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwib2Zmc2V0LXlcIjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uID0gcmVmLm9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cnMgPSByZWYuYXR0cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwic2V0dGluZ3Nyb3dcIiArIGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYS0wIHBhLTAgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc21hbGw6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIm1kaS1tZW51XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcIml0ZW0tc2V0dGluZ3MtbWVudVwiLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW0ubWFya1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGJvdHRvbTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uID0gcmVmLm9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cnMgPSByZWYuYXR0cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9iKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb2xvci5jb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzbWFsbDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kaS1jaGVja2JveC1ibGFuay1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0uY29sb3IudGV4dCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICjQn9C+0YHQu9C10LTQvdC10LUg0L7QsdC90L7QstC70LXQvdC40LU6XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLmZpbmlzaGVkX2F0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLm1hcmspICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsZXgtZ3Jvdy0xIGZsZXgtc2hyaW5rLTFcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0udGFibGVJdGVtcyAmJiBfdm0udGFibGVJdGVtcy5sZW5ndGggPiAwICYmIF92bS5zaG93U2Nyb2xsXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jaGlwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFwcC10YWJsZS1zY3JvbGwtbGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdmVyOiBfdm0ub25TY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZW91dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNjcm9sbFJ1biA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jaGlwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwcC10YWJsZS1zY3JvbGwtbGVmdCBhcHAtdGFibGUtc2Nyb2xsLXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZW92ZXI6IF92bS5vblNjcm9sbFJpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZW91dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNjcm9sbFJ1biA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LWRhdGEtdGFibGVcIiwge1xuICAgICAgICAgICAgICAgIHJlZjogXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiBfdm0ud2l0aEZpeGVkXG4gICAgICAgICAgICAgICAgICAgID8gX3ZtLmdldEZpeGVkSGVhZGVycyh0cnVlKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS50YWJsZUhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnRhYmxlSXRlbXMsXG4gICAgICAgICAgICAgICAgICBwYWdlOiBfdm0udGFibGVGaWx0ZXIucGFnZSxcbiAgICAgICAgICAgICAgICAgIFwiaXRlbXMtcGVyLXBhZ2VcIjogX3ZtLnRhYmxlRmlsdGVyLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgIFwic2VydmVyLWl0ZW1zLWxlbmd0aFwiOiBfdm0udG90YWwsXG4gICAgICAgICAgICAgICAgICBcIm5vLWRhdGEtdGV4dFwiOiBfdm0ud2l0aFNlbGVjdCA/IFwiXCIgOiBcItCd0LXRgiDQtNCw0L3QvdGL0YVcIixcbiAgICAgICAgICAgICAgICAgIFwibm8tcmVzdWx0cy10ZXh0XCI6IF92bS53aXRoU2VsZWN0ID8gXCJcIiA6IFwi0J3QtdGCINC00LDQvdC90YvRhVwiLFxuICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICBcImxvYWRpbmctdGV4dFwiOiBcItCX0LDQs9GA0YPQt9C60LAuLi4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINC/0L7QtNC+0LbQtNC40YLQtVwiLFxuICAgICAgICAgICAgICAgICAgXCJoaWRlLWRlZmF1bHQtZm9vdGVyXCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBcInVwZGF0ZTpwYWdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLnRhYmxlRmlsdGVyLCBcInBhZ2VcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwicGFnZS1jb3VudFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2VDb3VudCA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwidXBkYXRlOm9wdGlvbnNcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS50YWJsZU9wdGlvbnMgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVmOiBcInJvd1wiICsgcHJvcHMuaXRlbS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChwcm9wcy5oZWFkZXJzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCI1MDBweFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGluayA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rX2l0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udGFibGVFZGl0SXRlbShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pZCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtW2l0ZW0udmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzOiBwcm9wcywgaXRlbTogaXRlbSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5oaWRkZW4gPT09IHRydWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLml0ZW1baXRlbS52YWx1ZV0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLmhpZGRlbl9wcmVwZW5kKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcHJvcHMuaXRlbS5oaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbVtpdGVtLnZhbHVlXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbVtpdGVtLnZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5oaWRkZW4gPSAhcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtLmhpZGRlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uaGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLQn9C+0LrQsNC30LDRgtGMINGC0LXQutGB0YJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0KHQutGA0YvRgtGMINGC0LXQutGB0YJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW1baXRlbS52YWx1ZV0gIT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW1baXRlbS52YWx1ZV0gIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvcHMuaXRlbVtpdGVtLnZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uZW1wdHlUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFwiYm9keS5hcHBlbmRcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFwiYm9keS5wYWdpbmF0aW9uXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiIGQtZmxleCBwdC0yXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxlbmd0aDogX3ZtLnBhZ2VDb3VudCwgXCJ0b3RhbC12aXNpYmxlXCI6IDcgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWJsZUZpbHRlci5wYWdlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udGFibGVGaWx0ZXIsIFwicGFnZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWJsZUZpbHRlci5wYWdlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1heC13aWR0aFwiOiBcIjE1MHB4XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWJsZUZpbHRlci5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbMjAsIDQwLCA2MCwgODAsIDEwMF0sXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCLQn9C+0LrQsNC30YvQstCw0YLRjCDQv9C+OlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnRhYmxlRmlsdGVyLnBlcl9wYWdlID0gcGFyc2VJbnQoJGV2ZW50LCAxMClcbiAgICAgICAgICAgICAgICAgICAgICA/IHBhcnNlSW50KCRldmVudCwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgOiAxXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvdmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIsIGp1c3RpZnk6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhcItCh0L/QuNGB0L7QuiDRgNCw0LnQvtC90L7QslwiKSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LXNwYWNlLWJldHdlZW4gbWItNlwiLFxuICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIHRpbGU6IFwiXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJBcHBEYXRhVGFibGVcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5zaG93Q291cnRzVGFibGUgJiYgIV92bS5ub3RGb3VuZCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFzaG93Q291cnRzVGFibGUgJiYgIW5vdEZvdW5kXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLnJlZ2lvbnMsXG4gICAgICAgICAgICAgIHNob3dTZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICBmaXhlZENvbDogZmFsc2UsXG4gICAgICAgICAgICAgIGVkaXRJdGVtOiBfdm0uc2hvd0l0ZW0sXG4gICAgICAgICAgICAgIGVtcHR5SXRlbVRleHQ6IFwiLVwiLFxuICAgICAgICAgICAgICBpdGVtc1VybDogX3ZtLnJlZ2lvbnNJdGVtc1VybFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLm5vdEZvdW5kXG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIyMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yZWQtYm9yZGVyXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uOiBcIjJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAg0J/QviDQktCw0YjQtdC80YMg0LfQsNC/0YDQvtGB0YMg0L3QuNGH0LXQs9C+INC90LUg0L3QsNC50LTQtdC90L4uINCf0L7Qv9GA0L7QsdGD0LnRgtC1INC40LfQvNC10L3QuNGC0Ywg0L/QsNGA0LDQvNC10YLRgNGLINC/0L7QuNGB0LrQsC5cXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0MDFiMGNjNlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==