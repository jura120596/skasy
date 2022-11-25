(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Districts_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Districts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Districts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  name: 'Districts',
  components: {
    AppDataTable: _components_AppDataTable__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data(vm) {
    return {
      loading: false,
      notFound: false,
      headers: {
        regions: [{
          value: 'name',
          text: 'Район',
          link: true,
          id: 'code'
        }]
      },
      filter: {},
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
    districtsItemsUrl: function districtsItemsUrl() {
      return '/district';
    },
    label: function label() {
      switch (this.$route.query.level) {
        case 1:
          return 'Сельское поселение';

        case 0:
        default:
          return 'Район';
      }
    }
  },
  methods: {
    showItem: function showItem(id) {
      this.$router.push({
        name: 'region-districts',
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

/***/ "./resources/js/pages/Districts.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Districts.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Districts_vue_vue_type_template_id_9a608628_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Districts.vue?vue&type=template&id=9a608628&scoped=true& */ "./resources/js/pages/Districts.vue?vue&type=template&id=9a608628&scoped=true&");
/* harmony import */ var _Districts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Districts.vue?vue&type=script&lang=js& */ "./resources/js/pages/Districts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Districts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Districts_vue_vue_type_template_id_9a608628_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Districts_vue_vue_type_template_id_9a608628_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9a608628",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Districts.vue"
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

/***/ "./resources/js/pages/Districts.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Districts.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Districts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Districts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Districts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Districts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/pages/Districts.vue?vue&type=template&id=9a608628&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/Districts.vue?vue&type=template&id=9a608628&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Districts_vue_vue_type_template_id_9a608628_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Districts_vue_vue_type_template_id_9a608628_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Districts_vue_vue_type_template_id_9a608628_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Districts.vue?vue&type=template&id=9a608628&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Districts.vue?vue&type=template&id=9a608628&scoped=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Districts.vue?vue&type=template&id=9a608628&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Districts.vue?vue&type=template&id=9a608628&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
              itemsUrl: _vm.districtsItemsUrl
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0Rpc3RyaWN0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZT82MjM2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FwcERhdGFUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Rpc3RyaWN0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZT9iNGI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9EaXN0cmljdHMudnVlP2NhNGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZT8yMzE0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9EaXN0cmljdHMudnVlPzFhM2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZT8wNGIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2SEE7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUNBLGtCQURBO0FBRUE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FGQTtBQU1BO0FBQ0EsaUJBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQSxLQU5BO0FBWUEsdUJBWkE7QUFhQSxxQkFiQTtBQWNBLGtC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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx1QkFBdUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwRUE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsOHJCQUErVjtBQUNyWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkpBQWlGO0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19wYWdlc19EaXN0cmljdHNfdnVlMDI4ODgxYjY5ZTFlODgwN2QwYzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHYtY29udGFpbmVyID5cbiAgICAgICAgPHNsb3QgbmFtZT1cImJvZHkucHJlcGVuZFwiLz5cbiAgICAgICAgPHYtcm93XG4gICAgICAgICAgICBzdHlsZT1cImZsZXgtd3JhcDogbm93cmFwO1wiPlxuICAgICAgICAgICAgPHYtY29sIHYtaWY9XCJ3aXRoRml4ZWQgJiYgZ2V0Rml4ZWRIZWFkZXJzKGZhbHNlKS5sZW5ndGg+MFwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaXhlZENvbHVtbiBmbGV4LWdyb3ctMCBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgPHYtZGF0YS10YWJsZSA6aGVhZGVycz1cImdldEZpeGVkSGVhZGVycyhmYWxzZSlcIiA6aXRlbXM9XCJ0YWJsZUl0ZW1zXCIgaXRlbS1rZXk9XCJpZFwiIHYtbW9kZWw9XCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGFnZS5zeW5jPVwidGFibGVGaWx0ZXIucGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXMtcGVyLXBhZ2U9XCJ0YWJsZUZpbHRlci5wZXJfcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcGFnZS1jb3VudD1cInBhZ2VDb3VudCA9ICRldmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2VydmVyLWl0ZW1zLWxlbmd0aD1cInRvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtZGVmYXVsdC1mb290ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb246aW5wdXQ9XCIkZW1pdCgnaW5wdXQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucy5zeW5jPVwidGFibGVPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzaG93LXNlbGVjdD1cIndpdGhTZWxlY3RcIiBzdHlsZT1cIndpZHRoOiBtYXgtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bm8tZGF0YS10ZXh0PVwiJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XCIn0J3QtdGCINC00LDQvdC90YvRhSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiZml4ZWRUYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy10ZXh0PVwi0JfQsNCz0YDRg9C30LrQsC4uLiDQn9C+0LbQsNC70YPQudGB0YLQsCwg0L/QvtC00L7QttC00LjRgtC1XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aGVhZGVyLnNldHRpbmdzPVwie2hlYWRlcn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cImQtZmxleCBhbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyLXNldHRpbmdzLW1lbnVcIiB2LWJpbmQ6aGVhZGVyPVwiaGVhZGVyXCI+PC9zbG90PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtLnNldHRpbmdzPVwie2l0ZW19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1tZW51IG9mZnNldC15PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVwieyBvbiwgYXR0cnMgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQgIDpyZWY9XCInc2V0dGluZ3Nyb3cnK2l0ZW0uaWRcIiBjbGFzcz1cIm1hLTAgcGEtMCBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jZW50ZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJhdHRyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbj1cIm9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gc21hbGw+bWRpLW1lbnU8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaXRlbS1zZXR0aW5ncy1tZW51XCIgdi1iaW5kOml0ZW09XCJpdGVtXCI+PC9zbG90PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LW1lbnU+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5tYXJrPVwie2l0ZW19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10b29sdGlwIGJvdHRvbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cInsgb24sIGF0dHJzIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIml0ZW0uY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiYXR0cnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbj1cIm9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7Y29sb3I6IGl0ZW0uY29sb3IuY29sb3J9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPm1kaS1jaGVja2JveC1ibGFuay1jaXJjbGU8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5jb2xvci50ZXh0fX0gKNCf0L7RgdC70LXQtNC90LXQtSDQvtCx0L3QvtCy0LvQtdC90LjQtTp7e2l0ZW0uZmluaXNoZWRfYXR9fSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5tYXJrfX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3YtZGF0YS10YWJsZT5cblxuICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgIDx2LWNvbCBzdHlsZT1cIm92ZXJmbG93OmhpZGRlbjtkaXNwbGF5OiBibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTsgXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXgtZ3Jvdy0xIGZsZXgtc2hyaW5rLTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ0YWJsZUl0ZW1zICYmIHRhYmxlSXRlbXMubGVuZ3RoID4gMCAmJiBzaG93U2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNoaXAgY2xhc3M9XCJhcHAtdGFibGUtc2Nyb2xsLWxlZnRcIiBAbW91c2VvdmVyPVwib25TY3JvbGxMZWZ0XCIgQG1vdXNlb3V0PVwic2Nyb2xsUnVuID0gZmFsc2U7XCIvPlxuICAgICAgICAgICAgICAgICAgICA8di1jaGlwIGNsYXNzPVwiYXBwLXRhYmxlLXNjcm9sbC1sZWZ0IGFwcC10YWJsZS1zY3JvbGwtcmlnaHRcIiAgQG1vdXNlb3Zlcj1cIm9uU2Nyb2xsUmlnaHRcIiAgQG1vdXNlb3V0PVwic2Nyb2xsUnVuID0gZmFsc2U7XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx2LWRhdGEtdGFibGUgOmhlYWRlcnM9XCJ3aXRoRml4ZWQgPyBnZXRGaXhlZEhlYWRlcnModHJ1ZSkgOiB0YWJsZUhlYWRlcnNcIiA6aXRlbXM9XCJ0YWJsZUl0ZW1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwYWdlLnN5bmM9XCJ0YWJsZUZpbHRlci5wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcy1wZXItcGFnZT1cInRhYmxlRmlsdGVyLnBlcl9wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwYWdlLWNvdW50PVwicGFnZUNvdW50ID0gJGV2ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zLnN5bmM9XCJ0YWJsZU9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcnZlci1pdGVtcy1sZW5ndGg9XCJ0b3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bm8tZGF0YS10ZXh0PVwid2l0aFNlbGVjdCA/ICcnIDogJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XCJ3aXRoU2VsZWN0ID8gJycgOiAn0J3QtdGCINC00LDQvdC90YvRhSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwidGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmctdGV4dD1cItCX0LDQs9GA0YPQt9C60LAuLi4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINC/0L7QtNC+0LbQtNC40YLQtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWRlZmF1bHQtZm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1cIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciA6cmVmPVwiJ3JvdycrcHJvcHMuaXRlbS5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcHJvcHMuaGVhZGVyc1wiIHN0eWxlPVwibWF4LXdpZHRoOiA1MDBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJpdGVtLmxpbmsgPT09IHRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJsaW5rX2l0ZW1cIiB2LWJpbmQ9XCJ7cHJvcHMsIGl0ZW19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrPVwidGFibGVFZGl0SXRlbShwcm9wcy5pdGVtW2l0ZW0uaWQgPT09IHVuZGVmaW5lZCA/ICdpZCcgOiBpdGVtLmlkXSwgcHJvcHMuaXRlbSwgaXRlbS52YWx1ZSlcIiA+e3twcm9wcy5pdGVtW2l0ZW0udmFsdWVdfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cIml0ZW0uaGlkZGVuID09PSB0cnVlICYmIChwcm9wcy5pdGVtW2l0ZW0udmFsdWVdIHx8IHByb3BzLml0ZW0uaGlkZGVuX3ByZXBlbmQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwicHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZFwiPnt7cHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cIiFwcm9wcy5pdGVtLmhpZGRlblwiPnt7cHJvcHMuaXRlbVtpdGVtLnZhbHVlXX19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdi1pZj1cInByb3BzLml0ZW1baXRlbS52YWx1ZV1cIiBAY2xpY2s9XCJwcm9wcy5pdGVtLmhpZGRlbiA9ICFwcm9wcy5pdGVtLmhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cHJvcHMuaXRlbS5oaWRkZW4gPyAn0J/QvtC60LDQt9Cw0YLRjCDRgtC10LrRgdGCJyA6ICfQodC60YDRi9GC0Ywg0YLQtdC60YHRgid9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Byb3BzLml0ZW1baXRlbS52YWx1ZV0gIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5pdGVtW2l0ZW0udmFsdWVdICE9PSBudWxsID8gcHJvcHMuaXRlbVtpdGVtLnZhbHVlXSA6IGVtcHR5VGV4dH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdi1kYXRhLXRhYmxlPlxuICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgPC92LXJvdz5cbiAgICAgICAgPHNsb3QgbmFtZT1cImJvZHkuYXBwZW5kXCIvPlxuICAgICAgICA8c2xvdCBuYW1lPVwiYm9keS5wYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGQtZmxleCBwdC0yXCI+XG4gICAgICAgICAgICAgICAgPHYtcGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidGFibGVGaWx0ZXIucGFnZVwiXG4gICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJwYWdlQ291bnRcIlxuICAgICAgICAgICAgICAgICAgICA6dG90YWwtdmlzaWJsZT1cIjdcIlxuICAgICAgICAgICAgICAgID48L3YtcGFnaW5hdGlvbj5cbiAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICA8di1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidGFibGVGaWx0ZXIucGVyX3BhZ2VcIlxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwidGFibGVGaWx0ZXIucGVyX3BhZ2UgPSBwYXJzZUludCgkZXZlbnQsIDEwKSA/IHBhcnNlSW50KCRldmVudCwgMTApIDogMVwiXG4gICAgICAgICAgICAgICAgICAgIDppdGVtcz1cIlsyMCw0MCw2MCw4MCwxMDBdXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQn9C+0LrQsNC30YvQstCw0YLRjCDQv9C+OlwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAxNTBweFwiXG4gICAgICAgICAgICAgICAgPjwvdi1zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zbG90PlxuICAgIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuICAgIGltcG9ydCBBeGlvcyBmcm9tICdAL3V0aWxzL2F4aW9zJztcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdBcHBEYXRhVGFibGUnLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaGVhZGVyczogQXJyYXksXG4gICAgICAgICAgICBpdGVtc1VybDoge1xuICAgICAgICAgICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1NlbGVjdDogQm9vbGVhbixcbiAgICAgICAgICAgIGZpeGVkQ29sOiBCb29sZWFuLFxuICAgICAgICAgICAgZmlsdGVyOiBPYmplY3QsXG4gICAgICAgICAgICBzZXJ2aWNlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTpPYmplY3QsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvSXRlbToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICAoaXRlbSkgPT4ge3JldHVybiBpdGVtO30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWRpdEl0ZW06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoaWQpID0+IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVtcHR5SXRlbVRleHQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZUNvdW50OiAwLFxuICAgICAgICAgICAgICAgIHRhYmxlSXRlbXM6IHRoaXMuaXRlbXMsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IFtdLFxuICAgICAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIHdpdGhTZWxlY3QgOiB0aGlzLnNob3dTZWxlY3QsXG4gICAgICAgICAgICAgICAgd2l0aEZpeGVkOiB0aGlzLmZpeGVkQ29sLFxuICAgICAgICAgICAgICAgIHRhYmxlRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgICAgICBwZXJfcGFnZTogMjAsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRCeTogJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgc29ydERlc2MgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjcm9sbFJ1bjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1Njcm9sbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdGFibGVPcHRpb25zOiB7fSxcbiAgICAgICAgICAgICAgICB0YWJsZUVkaXRJdGVtOiB0aGlzLmVkaXRJdGVtLFxuICAgICAgICAgICAgICAgIGVtcHR5VGV4dDogdGhpcy5lbXB0eUl0ZW1UZXh0LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0Rml4ZWRDb2x1bW5MZWZ0IChpbmR4ID0gdGhpcy5oZWFkZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhlYWRlcnNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoaGVhZGVyLCBpKSA9PiBpIDwgaW5keCAmJiBoZWFkZXIuZml4ZWQgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGN1cnJlbnRWYWx1ZSwgaGVhZGVyKSA9PiBjdXJyZW50VmFsdWUgKyAocGFyc2VJbnQoaGVhZGVyLndpZHRoKSB8fCAwKSwgMClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRGaXhlZEhlYWRlcnMocmV2ZXJzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhlYWRlcnNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoaGVhZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXJldmVyc2UgPyBoZWFkZXIuZml4ZWQgPT09IHRydWUgOiAhKGhlYWRlci5maXhlZCAhPT0gdW5kZWZpbmVkICYmIGhlYWRlci5maXhlZCAhPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzeW5jIGxvYWRJdGVtcygpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWwgPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLmZsb29yKHRoaXMudG90YWwgLyB0aGlzLnRhYmxlRmlsdGVyLnBlcl9wYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgKyAodGhpcy50b3RhbCA9PT0gdGhpcy50YWJsZUZpbHRlci5wZXJfcGFnZSA/IDAgOiAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVZpZXdOb3JtYWxpemUoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICAodGhpcy5pdGVtc1VybCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5zZXJ2aWNlICYmIHRoaXMuc2VydmljZS5wcmVwYXJlUGFyYW1zXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc2VydmljZS5wcmVwYXJlUGFyYW1zKHRoaXMudGFibGVGaWx0ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMudGFibGVGaWx0ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkaW5nJylcbiAgICAgICAgICAgICAgICAgICAgQXhpb3MuZ2V0KHRoaXMuaXRlbXNVcmwsIHtwYXJhbXN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUl0ZW1zID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hcCh0aGlzLnRvSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbCA9IHJlc3BvbnNlLmRhdGEudG90YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ291bnQgPSByZXNwb25zZS5kYXRhLmxhc3RfcGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlVmlld05vcm1hbGl6ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWQnLCByZXNwb25zZS5kYXRhLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZGluZycpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmdldEFsbCh0aGlzLnRhYmxlRmlsdGVyKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVJdGVtcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYXAodGhpcy50b0l0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbCA9IHJlc3BvbnNlLmRhdGEudG90YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IHJlc3BvbnNlLmRhdGEubGFzdF9wYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVZpZXdOb3JtYWxpemUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcsIHJlc3BvbnNlLmRhdGEuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWQnKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxUbyhlbGVtZW50LCBzY3JvbGxQaXhlbHMsIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsUG9zID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIC8vIENvbmRpdGlvbiB0byBjaGVjayBpZiBzY3JvbGxpbmcgaXMgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBpZiAoICEoIChzY3JvbGxQb3MgPT09IDAgfHwgc2Nyb2xsUGl4ZWxzID4gMCkgJiYgKGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxQb3MgPT09IGVsZW1lbnQuc2Nyb2xsV2lkdGggfHwgc2Nyb2xsUGl4ZWxzIDwgMCkpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBzdGFydCB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm93XCIgaW4gd2luZG93LnBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwZXJmb3JtYW5jZS5ub3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGwgPSAodGltZXN0YW1wKSAgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9DYWxjdWxhdGUgdGhlIHRpbWVlbGFwc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lRWxhcHNlZCA9IHRpbWVzdGFtcCAtIHN0YXJ0VGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2FsY3VsYXRlIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGR1cmF0aW9uID8gTWF0aC5taW4odGltZUVsYXBzZWQgLyBkdXJhdGlvbiwgMSkgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXQgdGhlIHNjcm9sbGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gKHByb2dyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzY3JvbGxQb3MgKyBzY3JvbGxQaXhlbHMgKiBwcm9ncmVzcyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICsgMTAgKiBzY3JvbGxQaXhlbHMgLyhNYXRoLmFicyhzY3JvbGxQaXhlbHMpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIGVsYXBzZWQgdGltZSBpcyBsZXNzIHRoZW4gZHVyYXRpb24gdGhlbiBjYWxsIHRoZSByZXF1ZXN0QW5pbWF0aW9uLCBvdGhlcndpc2UgZXhpdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsUnVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9SZXF1ZXN0IGZvciBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL0NhbGwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIG9uIHNjcm9sbCBmdW5jdGlvbiBmaXJzdCB0aW1lXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25TY3JvbGxMZWZ0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0sIC10aGlzLiRyZWZzLnRhYmxlLiRlbC5jaGlsZE5vZGVzWzBdLnNjcm9sbFdpZHRoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblNjcm9sbFJpZ2h0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0sIHRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0uc2Nyb2xsV2lkdGgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYmxlVmlld05vcm1hbGl6ZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcmVmcy5maXhlZFRhYmxlKSBPYmplY3Qua2V5cyh0aGlzLiRyZWZzKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2LnNlYXJjaCgncm93JykgPT09IDAgJiYgdGhpcy4kcmVmc1snc2V0dGluZ3MnKyB2XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmc1snc2V0dGluZ3MnKyB2XS5zdHlsZS5oZWlnaHQgPSAodGhpcy4kcmVmc1t2XS5jbGllbnRIZWlnaHQgLSAxKSsncHgnOyAvL2Jvb3RvbSBib3JkZXIgb24gZXZlcnkgdGFibGUgcm93XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkTG9hZEl0ZW1zID0gXy5kZWJvdW5jZSh0aGlzLmxvYWRJdGVtcywgNTAwKVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgdGFibGVGaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRMb2FkSXRlbXMoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVlcDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYmxlT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlT3B0aW9ucy5zb3J0QnkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLnNvcnRCeSA9IHRoaXMudGFibGVPcHRpb25zLnNvcnRCeVswXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJsZU9wdGlvbnMuc29ydERlc2MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLnNvcnREZXNjID0gdGhpcy50YWJsZU9wdGlvbnMuc29ydERlc2NbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzb3J0QnksIHNvcnREZXNjIH0gPSB0aGlzLnRhYmxlRmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uU29ydCcsIHsgc29ydEJ5LCBzb3J0RGVzYyB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJsZUl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2Nyb2xsID0gdGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXS5zY3JvbGxXaWR0aCA+IHRoaXMuJHJlZnMudGFibGUuJGVsLnNjcm9sbFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVlcDp0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyID0gey4uLnRoaXMudGFibGVGaWx0ZXIsIC4uLnRoaXMuZmlsdGVyfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIucGFnZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZXA6dHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlSXRlbXMgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRJdGVtcygpXG4gICAgICAgICAgICB0aGlzLiR3YXRjaChcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLnRhYmxlLml0ZW1zXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVWaWV3Tm9ybWFsaXplKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICB0aC5maXhlZENvbHVtbiwgdGQuZml4ZWRDb2x1bW4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmZpeGVkQ29sdW1uICAgdGg6bGFzdC1jaGlsZHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XG4gICAgfVxuICAgIGRpdiA+IC5maXhlZENvbHVtbjpudGgtY2hpbGQoMSkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cbiAgICBkaXYgPiAuY29sOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cImNvdmVyXCI+XG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LXRleHQ9XCIn0KHQv9C40YHQvtC6INGA0LDQudC+0L3QvtCyJ1wiPlxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPHYtY2FyZCBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LXNwYWNlLWJldHdlZW4gbWItNlwiIGZsYXQgdGlsZT5cbiAgICAgICAgICAgIDxBcHBEYXRhVGFibGVcbiAgICAgICAgICAgICAgICB2LXNob3c9XCIgIW5vdEZvdW5kXCJcbiAgICAgICAgICAgICAgICA6aGVhZGVycz1cImhlYWRlcnMucmVnaW9uc1wiXG4gICAgICAgICAgICAgICAgOnNob3dTZWxlY3Q9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgOmZpeGVkQ29sPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIDplZGl0SXRlbT1cInNob3dJdGVtXCJcbiAgICAgICAgICAgICAgICA6ZW1wdHlJdGVtVGV4dD1cIictJ1wiXG4gICAgICAgICAgICAgICAgOml0ZW1zVXJsPVwiZGlzdHJpY3RzSXRlbXNVcmxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9BcHBEYXRhVGFibGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIm5vdEZvdW5kXCI+XG4gICAgICAgICAgICAgICAgPHYtYWxlcnQgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4XCIgY29sb3JlZC1ib3JkZXIgdHlwZT1cImluZm9cIiBlbGV2YXRpb249XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgINCf0L4g0JLQsNGI0LXQvNGDINC30LDQv9GA0L7RgdGDINC90LjRh9C10LPQviDQvdC1INC90LDQudC00LXQvdC+LiDQn9C+0L/RgNC+0LHRg9C50YLQtSDQuNC30LzQtdC90LjRgtGMINC/0LDRgNCw0LzQtdGC0YDRiyDQv9C+0LjRgdC60LAuXG4gICAgICAgICAgICAgICAgPC92LWFsZXJ0PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgQXBwRGF0YVRhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcERhdGFUYWJsZVwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ0Rpc3RyaWN0cycsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIEFwcERhdGFUYWJsZVxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbm90Rm91bmQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ25hbWUnLCB0ZXh0OiAn0KDQsNC50L7QvScsIGxpbms6IHRydWUsIGlkOiAnY29kZScgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2bSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGxvYWRpbmcoYSwgYikge1xuICAgICAgICAgICAgICAgIGlmICghYSAmJiBiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlci5uYW1lLmxlbmd0aCA+IDAgJiYgdGhpcy5jb3VydHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90Rm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdEZvdW5kID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGNyZWF0ZWQoKSB7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBkaXN0cmljdHNJdGVtc1VybCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJy9kaXN0cmljdCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYWJlbCgpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2godGhpcy4kcm91dGUucXVlcnkubGV2ZWwpe1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiAn0KHQtdC70YzRgdC60L7QtSDQv9C+0YHQtdC70LXQvdC40LUnXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICfQoNCw0LnQvtC9JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNob3dJdGVtKGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAncmVnaW9uLWRpc3RyaWN0cycsIHBhcmFtczogeyBjb2RlOiBpZCB9IH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbnRhYmxlIHtcXG4gICAgd2lkdGg6IC13ZWJraXQtbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IC1tb3otbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50ICFpbXBvcnRhbnQ7XFxufVxcbnRoLmZpeGVkQ29sdW1uLCB0ZC5maXhlZENvbHVtbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZml4ZWRDb2x1bW4gICB0aDpsYXN0LWNoaWxke1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXG59XFxuZGl2ID4gLmZpeGVkQ29sdW1uOm50aC1jaGlsZCgxKSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxufVxcbmRpdiA+IC5jb2w6bnRoLWNoaWxkKDIpIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9BcHBEYXRhVGFibGUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFpV0E7SUFDQSxxQ0FBQTtJQUFBLGtDQUFBO0lBQUEsNkJBQUE7QUFDQTtBQUNBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7QUFDQTtBQUNBO0lBQ0EsdUJBQUE7QUFDQTtBQUNBO0lBQ0EsZ0JBQUE7QUFDQTtBQUNBO0lBQ0EsZUFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPHYtY29udGFpbmVyID5cXG4gICAgICAgIDxzbG90IG5hbWU9XFxcImJvZHkucHJlcGVuZFxcXCIvPlxcbiAgICAgICAgPHYtcm93XFxuICAgICAgICAgICAgc3R5bGU9XFxcImZsZXgtd3JhcDogbm93cmFwO1xcXCI+XFxuICAgICAgICAgICAgPHYtY29sIHYtaWY9XFxcIndpdGhGaXhlZCAmJiBnZXRGaXhlZEhlYWRlcnMoZmFsc2UpLmxlbmd0aD4wXFxcIlxcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZml4ZWRDb2x1bW4gZmxleC1ncm93LTAgZmxleC1zaHJpbmstMFxcXCI+XFxuICAgICAgICAgICAgICAgIDx2LWRhdGEtdGFibGUgOmhlYWRlcnM9XFxcImdldEZpeGVkSGVhZGVycyhmYWxzZSlcXFwiIDppdGVtcz1cXFwidGFibGVJdGVtc1xcXCIgaXRlbS1rZXk9XFxcImlkXFxcIiB2LW1vZGVsPVxcXCJzZWxlY3RlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGFnZS5zeW5jPVxcXCJ0YWJsZUZpbHRlci5wYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcy1wZXItcGFnZT1cXFwidGFibGVGaWx0ZXIucGVyX3BhZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHBhZ2UtY291bnQ9XFxcInBhZ2VDb3VudCA9ICRldmVudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2VydmVyLWl0ZW1zLWxlbmd0aD1cXFwidG90YWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZS1kZWZhdWx0LWZvb3RlclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb246aW5wdXQ9XFxcIiRlbWl0KCdpbnB1dCcpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zLnN5bmM9XFxcInRhYmxlT3B0aW9uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2hvdy1zZWxlY3Q9XFxcIndpdGhTZWxlY3RcXFwiIHN0eWxlPVxcXCJ3aWR0aDogbWF4LWNvbnRlbnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5vLWRhdGEtdGV4dD1cXFwiJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XFxcIifQndC10YIg0LTQsNC90L3Ri9GFJ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XFxcImZpeGVkVGFibGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XFxcImxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy10ZXh0PVxcXCLQl9Cw0LPRgNGD0LfQutCwLi4uINCf0L7QttCw0LvRg9C50YHRgtCwLCDQv9C+0LTQvtC20LTQuNGC0LVcXFwiXFxuICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aGVhZGVyLnNldHRpbmdzPVxcXCJ7aGVhZGVyfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGNsYXNzPVxcXCJkLWZsZXggYWxpZ24tY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiaGVhZGVyLXNldHRpbmdzLW1lbnVcXFwiIHYtYmluZDpoZWFkZXI9XFxcImhlYWRlclxcXCI+PC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XFxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtLnNldHRpbmdzPVxcXCJ7aXRlbX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LW1lbnUgb2Zmc2V0LXk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVxcXCJ7IG9uLCBhdHRycyB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dCAgOnJlZj1cXFwiJ3NldHRpbmdzcm93JytpdGVtLmlkXFxcIiBjbGFzcz1cXFwibWEtMCBwYS0wIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNlbnRlclxcXCIgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicHJpbWFyeVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFya1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XFxcImF0dHJzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uPVxcXCJvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBzbWFsbD5tZGktbWVudTwvdi1pY29uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJpdGVtLXNldHRpbmdzLW1lbnVcXFwiIHYtYmluZDppdGVtPVxcXCJpdGVtXFxcIj48L3Nsb3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LW1lbnU+XFxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtLm1hcms9XFxcIntpdGVtfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbHRpcCBib3R0b20+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVxcXCJ7IG9uLCBhdHRycyB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb25cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJpdGVtLmNvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cXFwiYXR0cnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbj1cXFwib25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XFxcIntjb2xvcjogaXRlbS5jb2xvci5jb2xvcn1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+bWRpLWNoZWNrYm94LWJsYW5rLWNpcmNsZTwvdi1pY29uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0uY29sb3IudGV4dH19ICjQn9C+0YHQu9C10LTQvdC10LUg0L7QsdC90L7QstC70LXQvdC40LU6e3tpdGVtLmZpbmlzaGVkX2F0fX0pPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10b29sdGlwPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5tYXJrfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgIDwvdi1kYXRhLXRhYmxlPlxcblxcbiAgICAgICAgICAgIDwvdi1jb2w+XFxuICAgICAgICAgICAgPHYtY29sIHN0eWxlPVxcXCJvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTogYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7IFxcXCJcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZsZXgtZ3Jvdy0xIGZsZXgtc2hyaW5rLTFcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInRhYmxlSXRlbXMgJiYgdGFibGVJdGVtcy5sZW5ndGggPiAwICYmIHNob3dTY3JvbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtY2hpcCBjbGFzcz1cXFwiYXBwLXRhYmxlLXNjcm9sbC1sZWZ0XFxcIiBAbW91c2VvdmVyPVxcXCJvblNjcm9sbExlZnRcXFwiIEBtb3VzZW91dD1cXFwic2Nyb2xsUnVuID0gZmFsc2U7XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8di1jaGlwIGNsYXNzPVxcXCJhcHAtdGFibGUtc2Nyb2xsLWxlZnQgYXBwLXRhYmxlLXNjcm9sbC1yaWdodFxcXCIgIEBtb3VzZW92ZXI9XFxcIm9uU2Nyb2xsUmlnaHRcXFwiICBAbW91c2VvdXQ9XFxcInNjcm9sbFJ1biA9IGZhbHNlO1xcXCIvPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPHYtZGF0YS10YWJsZSA6aGVhZGVycz1cXFwid2l0aEZpeGVkID8gZ2V0Rml4ZWRIZWFkZXJzKHRydWUpIDogdGFibGVIZWFkZXJzXFxcIiA6aXRlbXM9XFxcInRhYmxlSXRlbXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBhZ2Uuc3luYz1cXFwidGFibGVGaWx0ZXIucGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXMtcGVyLXBhZ2U9XFxcInRhYmxlRmlsdGVyLnBlcl9wYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwYWdlLWNvdW50PVxcXCJwYWdlQ291bnQgPSAkZXZlbnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnMuc3luYz1cXFwidGFibGVPcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzZXJ2ZXItaXRlbXMtbGVuZ3RoPVxcXCJ0b3RhbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bm8tZGF0YS10ZXh0PVxcXCJ3aXRoU2VsZWN0ID8gJycgOiAn0J3QtdGCINC00LDQvdC90YvRhSdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5vLXJlc3VsdHMtdGV4dD1cXFwid2l0aFNlbGVjdCA/ICcnIDogJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cXFwidGFibGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XFxcImxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy10ZXh0PVxcXCLQl9Cw0LPRgNGD0LfQutCwLi4uINCf0L7QttCw0LvRg9C50YHRgtCwLCDQv9C+0LTQvtC20LTQuNGC0LVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZS1kZWZhdWx0LWZvb3Rlcj5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJpdGVtXFxcIiBzbG90LXNjb3BlPVxcXCJwcm9wc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIDpyZWY9XFxcIidyb3cnK3Byb3BzLml0ZW0uaWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgdi1mb3I9XFxcIihpdGVtLCBpbmRleCkgaW4gcHJvcHMuaGVhZGVyc1xcXCIgc3R5bGU9XFxcIm1heC13aWR0aDogNTAwcHhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJpdGVtLmxpbmsgPT09IHRydWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImxpbmtfaXRlbVxcXCIgdi1iaW5kPVxcXCJ7cHJvcHMsIGl0ZW19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrPVxcXCJ0YWJsZUVkaXRJdGVtKHByb3BzLml0ZW1baXRlbS5pZCA9PT0gdW5kZWZpbmVkID8gJ2lkJyA6IGl0ZW0uaWRdLCBwcm9wcy5pdGVtLCBpdGVtLnZhbHVlKVxcXCIgPnt7cHJvcHMuaXRlbVtpdGVtLnZhbHVlXX19PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UtaWY9XFxcIml0ZW0uaGlkZGVuID09PSB0cnVlICYmIChwcm9wcy5pdGVtW2l0ZW0udmFsdWVdIHx8IHByb3BzLml0ZW0uaGlkZGVuX3ByZXBlbmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVxcXCJwcm9wcy5pdGVtLmhpZGRlbl9wcmVwZW5kXFxcIj57e3Byb3BzLml0ZW0uaGlkZGVuX3ByZXBlbmR9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVxcXCIhcHJvcHMuaXRlbS5oaWRkZW5cXFwiPnt7cHJvcHMuaXRlbVtpdGVtLnZhbHVlXX19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHYtaWY9XFxcInByb3BzLml0ZW1baXRlbS52YWx1ZV1cXFwiIEBjbGljaz1cXFwicHJvcHMuaXRlbS5oaWRkZW4gPSAhcHJvcHMuaXRlbS5oaWRkZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Byb3BzLml0ZW0uaGlkZGVuID8gJ9Cf0L7QutCw0LfQsNGC0Ywg0YLQtdC60YHRgicgOiAn0KHQutGA0YvRgtGMINGC0LXQutGB0YInfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cHJvcHMuaXRlbVtpdGVtLnZhbHVlXSAhPT0gdW5kZWZpbmVkICYmIHByb3BzLml0ZW1baXRlbS52YWx1ZV0gIT09IG51bGwgPyBwcm9wcy5pdGVtW2l0ZW0udmFsdWVdIDogZW1wdHlUZXh0fX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICA8L3YtZGF0YS10YWJsZT5cXG4gICAgICAgICAgICA8L3YtY29sPlxcbiAgICAgICAgPC92LXJvdz5cXG4gICAgICAgIDxzbG90IG5hbWU9XFxcImJvZHkuYXBwZW5kXFxcIi8+XFxuICAgICAgICA8c2xvdCBuYW1lPVxcXCJib2R5LnBhZ2luYXRpb25cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIiBkLWZsZXggcHQtMlxcXCI+XFxuICAgICAgICAgICAgICAgIDx2LXBhZ2luYXRpb25cXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInRhYmxlRmlsdGVyLnBhZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6bGVuZ3RoPVxcXCJwYWdlQ291bnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6dG90YWwtdmlzaWJsZT1cXFwiN1xcXCJcXG4gICAgICAgICAgICAgICAgPjwvdi1wYWdpbmF0aW9uPlxcbiAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cXG4gICAgICAgICAgICAgICAgPHYtc2VsZWN0XFxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XFxcInRhYmxlRmlsdGVyLnBlcl9wYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cXFwidGFibGVGaWx0ZXIucGVyX3BhZ2UgPSBwYXJzZUludCgkZXZlbnQsIDEwKSA/IHBhcnNlSW50KCRldmVudCwgMTApIDogMVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDppdGVtcz1cXFwiWzIwLDQwLDYwLDgwLDEwMF1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwi0J/QvtC60LDQt9GL0LLQsNGC0Ywg0L/QvjpcXFwiXFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWF4LXdpZHRoOiAxNTBweFxcXCJcXG4gICAgICAgICAgICAgICAgPjwvdi1zZWxlY3Q+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3Nsb3Q+XFxuICAgIDwvdi1jb250YWluZXI+XFxuPC90ZW1wbGF0ZT5cXG48c2NyaXB0PlxcbiAgICBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xcbiAgICBpbXBvcnQgQXhpb3MgZnJvbSAnQC91dGlscy9heGlvcyc7XFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIG5hbWU6ICdBcHBEYXRhVGFibGUnLFxcbiAgICAgICAgcHJvcHM6IHtcXG4gICAgICAgICAgICBoZWFkZXJzOiBBcnJheSxcXG4gICAgICAgICAgICBpdGVtc1VybDoge1xcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGl0ZW1zOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHNob3dTZWxlY3Q6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZml4ZWRDb2w6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZmlsdGVyOiBPYmplY3QsXFxuICAgICAgICAgICAgc2VydmljZToge1xcbiAgICAgICAgICAgICAgICB0eXBlOk9iamVjdCxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdG9JdGVtOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAgKGl0ZW0pID0+IHtyZXR1cm4gaXRlbTt9LFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZWRpdEl0ZW06IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IChpZCkgPT4ge30sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBlbXB0eUl0ZW1UZXh0OiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6U3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBwYWdlQ291bnQ6IDAsXFxuICAgICAgICAgICAgICAgIHRhYmxlSXRlbXM6IHRoaXMuaXRlbXMsXFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBbXSxcXG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXFxuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyczogdGhpcy5oZWFkZXJzLFxcbiAgICAgICAgICAgICAgICB3aXRoU2VsZWN0IDogdGhpcy5zaG93U2VsZWN0LFxcbiAgICAgICAgICAgICAgICB3aXRoRml4ZWQ6IHRoaXMuZml4ZWRDb2wsXFxuICAgICAgICAgICAgICAgIHRhYmxlRmlsdGVyOiB7XFxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmZpbHRlcixcXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IDEsXFxuICAgICAgICAgICAgICAgICAgICBwZXJfcGFnZTogMjAsXFxuICAgICAgICAgICAgICAgICAgICBzb3J0Qnk6ICdpZCcsXFxuICAgICAgICAgICAgICAgICAgICBzb3J0RGVzYyA6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBzY3JvbGxSdW46IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBzaG93U2Nyb2xsOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgdGFibGVPcHRpb25zOiB7fSxcXG4gICAgICAgICAgICAgICAgdGFibGVFZGl0SXRlbTogdGhpcy5lZGl0SXRlbSxcXG4gICAgICAgICAgICAgICAgZW1wdHlUZXh0OiB0aGlzLmVtcHR5SXRlbVRleHQsXFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxcbiAgICAgICAgICAgIH07XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGdldEZpeGVkQ29sdW1uTGVmdCAoaW5keCA9IHRoaXMuaGVhZGVycy5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyc1xcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoaGVhZGVyLCBpKSA9PiBpIDwgaW5keCAmJiBoZWFkZXIuZml4ZWQgPT09IHRydWUpXFxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChjdXJyZW50VmFsdWUsIGhlYWRlcikgPT4gY3VycmVudFZhbHVlICsgKHBhcnNlSW50KGhlYWRlci53aWR0aCkgfHwgMCksIDApXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBnZXRGaXhlZEhlYWRlcnMocmV2ZXJzZSkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJzXFxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChoZWFkZXIpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXJldmVyc2UgPyBoZWFkZXIuZml4ZWQgPT09IHRydWUgOiAhKGhlYWRlci5maXhlZCAhPT0gdW5kZWZpbmVkICYmIGhlYWRlci5maXhlZCAhPT0gZmFsc2UpXFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGFzeW5jIGxvYWRJdGVtcygpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMgIT09IHVuZGVmaW5lZCkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLmZsb29yKHRoaXMudG90YWwgLyB0aGlzLnRhYmxlRmlsdGVyLnBlcl9wYWdlKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICsgKHRoaXMudG90YWwgPT09IHRoaXMudGFibGVGaWx0ZXIucGVyX3BhZ2UgPyAwIDogMSk7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlVmlld05vcm1hbGl6ZSgpXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgaWYgICh0aGlzLml0ZW1zVXJsKSB7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5zZXJ2aWNlICYmIHRoaXMuc2VydmljZS5wcmVwYXJlUGFyYW1zXFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnNlcnZpY2UucHJlcGFyZVBhcmFtcyh0aGlzLnRhYmxlRmlsdGVyKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy50YWJsZUZpbHRlcjtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZGluZycpXFxuICAgICAgICAgICAgICAgICAgICBBeGlvcy5nZXQodGhpcy5pdGVtc1VybCwge3BhcmFtc30pXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVJdGVtcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYXAodGhpcy50b0l0ZW0pO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzcG9uc2UuZGF0YS50b3RhbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ291bnQgPSByZXNwb25zZS5kYXRhLmxhc3RfcGFnZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVZpZXdOb3JtYWxpemUoKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWQnLCByZXNwb25zZS5kYXRhLmRhdGEpXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcpXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWRpbmcnKVxcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UuZ2V0QWxsKHRoaXMudGFibGVGaWx0ZXIpXFxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlSXRlbXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFwKHRoaXMudG9JdGVtKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzcG9uc2UuZGF0YS50b3RhbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IHJlc3BvbnNlLmRhdGEubGFzdF9wYWdlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVWaWV3Tm9ybWFsaXplKClcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcsIHJlc3BvbnNlLmRhdGEuZGF0YSlcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcpXFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHNjcm9sbFRvKGVsZW1lbnQsIHNjcm9sbFBpeGVscywgZHVyYXRpb24pIHtcXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsUG9zID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xcbiAgICAgICAgICAgICAgICAvLyBDb25kaXRpb24gdG8gY2hlY2sgaWYgc2Nyb2xsaW5nIGlzIHJlcXVpcmVkXFxuICAgICAgICAgICAgICAgIGlmICggISggKHNjcm9sbFBvcyA9PT0gMCB8fCBzY3JvbGxQaXhlbHMgPiAwKSAmJiAoZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbFBvcyA9PT0gZWxlbWVudC5zY3JvbGxXaWR0aCB8fCBzY3JvbGxQaXhlbHMgPCAwKSkpXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgc3RhcnQgdGltZXN0YW1wXFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJub3dcXFwiIGluIHdpbmRvdy5wZXJmb3JtYW5jZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBlcmZvcm1hbmNlLm5vdygpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsID0gKHRpbWVzdGFtcCkgID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NhbGN1bGF0ZSB0aGUgdGltZWVsYXBzZWRcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lRWxhcHNlZCA9IHRpbWVzdGFtcCAtIHN0YXJ0VGltZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NhbGN1bGF0ZSBwcm9ncmVzc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gZHVyYXRpb24gPyBNYXRoLm1pbih0aW1lRWxhcHNlZCAvIGR1cmF0aW9uLCAxKSA6IG51bGw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXQgdGhlIHNjcm9sbGVmdFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IChwcm9ncmVzc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNjcm9sbFBvcyArIHNjcm9sbFBpeGVscyAqIHByb2dyZXNzIDpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICsgMTAgKiBzY3JvbGxQaXhlbHMgLyhNYXRoLmFicyhzY3JvbGxQaXhlbHMpKSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBpZiBlbGFwc2VkIHRpbWUgaXMgbGVzcyB0aGVuIGR1cmF0aW9uIHRoZW4gY2FsbCB0aGUgcmVxdWVzdEFuaW1hdGlvbiwgb3RoZXJ3aXNlIGV4aXRcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxSdW4pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9SZXF1ZXN0IGZvciBhbmltYXRpb25cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGwpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAvL0NhbGwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIG9uIHNjcm9sbCBmdW5jdGlvbiBmaXJzdCB0aW1lXFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9uU2Nyb2xsTGVmdCgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxSdW4gPSB0cnVlO1xcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0sIC10aGlzLiRyZWZzLnRhYmxlLiRlbC5jaGlsZE5vZGVzWzBdLnNjcm9sbFdpZHRoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9uU2Nyb2xsUmlnaHQoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUnVuID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh0aGlzLiRyZWZzLnRhYmxlLiRlbC5jaGlsZE5vZGVzWzBdLCB0aGlzLiRyZWZzLnRhYmxlLiRlbC5jaGlsZE5vZGVzWzBdLnNjcm9sbFdpZHRoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHRhYmxlVmlld05vcm1hbGl6ZSgpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnMuZml4ZWRUYWJsZSkgT2JqZWN0LmtleXModGhpcy4kcmVmcykuZm9yRWFjaCgodikgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYuc2VhcmNoKCdyb3cnKSA9PT0gMCAmJiB0aGlzLiRyZWZzWydzZXR0aW5ncycrIHZdKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmc1snc2V0dGluZ3MnKyB2XS5zdHlsZS5oZWlnaHQgPSAodGhpcy4kcmVmc1t2XS5jbGllbnRIZWlnaHQgLSAxKSsncHgnOyAvL2Jvb3RvbSBib3JkZXIgb24gZXZlcnkgdGFibGUgcm93XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkTG9hZEl0ZW1zID0gXy5kZWJvdW5jZSh0aGlzLmxvYWRJdGVtcywgNTAwKVxcbiAgICAgICAgfSxcXG4gICAgICAgIHdhdGNoOiB7XFxuICAgICAgICAgICAgdGFibGVGaWx0ZXI6IHtcXG4gICAgICAgICAgICAgICAgaGFuZGxlciAoKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlZExvYWRJdGVtcygpXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWVcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHRhYmxlT3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICBoYW5kbGVyKCkge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFibGVPcHRpb25zLnNvcnRCeS5sZW5ndGggPT09IDEpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLnNvcnRCeSA9IHRoaXMudGFibGVPcHRpb25zLnNvcnRCeVswXTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlT3B0aW9ucy5zb3J0RGVzYy5sZW5ndGggPT09IDEpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLnNvcnREZXNjID0gdGhpcy50YWJsZU9wdGlvbnMuc29ydERlc2NbMF07XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHNvcnRCeSwgc29ydERlc2MgfSA9IHRoaXMudGFibGVGaWx0ZXJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uU29ydCcsIHsgc29ydEJ5LCBzb3J0RGVzYyB9KVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdGFibGVJdGVtczoge1xcbiAgICAgICAgICAgICAgICBoYW5kbGVyKCkge1xcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Njcm9sbCA9IHRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0uc2Nyb2xsV2lkdGggPiB0aGlzLiRyZWZzLnRhYmxlLiRlbC5zY3JvbGxXaWR0aDtcXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGRlZXA6dHJ1ZSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGZpbHRlcjoge1xcbiAgICAgICAgICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyID0gey4uLnRoaXMudGFibGVGaWx0ZXIsIC4uLnRoaXMuZmlsdGVyfTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLnBhZ2UgPSAxO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBkZWVwOnRydWVcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGl0ZW1zOiB7XFxuICAgICAgICAgICAgICAgIGhhbmRsZXIodmFsdWUpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVJdGVtcyA9IHZhbHVlO1xcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlLFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtb3VudGVkKCkge1xcbiAgICAgICAgICAgIHRoaXMubG9hZEl0ZW1zKClcXG4gICAgICAgICAgICB0aGlzLiR3YXRjaChcXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMudGFibGUuaXRlbXNcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgKHZhbCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVZpZXdOb3JtYWxpemUoKVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgKVxcbiAgICAgICAgfSxcXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4gICAgdGFibGUge1xcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50ICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgdGguZml4ZWRDb2x1bW4sIHRkLmZpeGVkQ29sdW1uIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmZpeGVkQ29sdW1uICAgdGg6bGFzdC1jaGlsZHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xcbiAgICB9XFxuICAgIGRpdiA+IC5maXhlZENvbHVtbjpudGgtY2hpbGQoMSkge1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcXG4gICAgfVxcbiAgICBkaXYgPiAuY29sOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIH1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTE5NTNiOGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUxOTUzYjhlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUxOTUzYjhlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUxOTUzYjhlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxOTUzYjhlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUxOTUzYjhlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9BcHBEYXRhVGFibGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EaXN0cmljdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhNjA4NjI4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Rpc3RyaWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Rpc3RyaWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjlhNjA4NjI4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOWE2MDg2MjgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOWE2MDg2MjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOWE2MDg2MjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Rpc3RyaWN0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWE2MDg2Mjgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOWE2MDg2MjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9EaXN0cmljdHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Rpc3RyaWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXN0cmljdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgW1xuICAgICAgX3ZtLl90KFwiYm9keS5wcmVwZW5kXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtcm93XCIsXG4gICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJmbGV4LXdyYXBcIjogXCJub3dyYXBcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0ud2l0aEZpeGVkICYmIF92bS5nZXRGaXhlZEhlYWRlcnMoZmFsc2UpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZml4ZWRDb2x1bW4gZmxleC1ncm93LTAgZmxleC1zaHJpbmstMFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWRhdGEtdGFibGVcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwiZml4ZWRUYWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCJtYXgtY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmdldEZpeGVkSGVhZGVycyhmYWxzZSksXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS50YWJsZUl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IF92bS50YWJsZUZpbHRlci5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbXMtcGVyLXBhZ2VcIjogX3ZtLnRhYmxlRmlsdGVyLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgIFwic2VydmVyLWl0ZW1zLWxlbmd0aFwiOiBfdm0udG90YWwsXG4gICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLWRlZmF1bHQtZm9vdGVyXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3ctc2VsZWN0XCI6IF92bS53aXRoU2VsZWN0LFxuICAgICAgICAgICAgICAgICAgICAgIFwibm8tZGF0YS10ZXh0XCI6IFwi0J3QtdGCINC00LDQvdC90YvRhVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibm8tcmVzdWx0cy10ZXh0XCI6IFwi0J3QtdGCINC00LDQvdC90YvRhVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIFwibG9hZGluZy10ZXh0XCI6IFwi0JfQsNCz0YDRg9C30LrQsC4uLiDQn9C+0LbQsNC70YPQudGB0YLQsCwg0L/QvtC00L7QttC00LjRgtC1XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpwYWdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KF92bS50YWJsZUZpbHRlciwgXCJwYWdlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwicGFnZS1jb3VudFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlQ291bnQgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJpbnB1dFwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6b3B0aW9uc1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWJsZU9wdGlvbnMgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaGVhZGVyLnNldHRpbmdzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGVhZGVyID0gcmVmLmhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBhbGlnbi1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl90KFwiaGVhZGVyLXNldHRpbmdzLW1lbnVcIiwgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbS5zZXR0aW5nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LW1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwib2Zmc2V0LXlcIjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uID0gcmVmLm9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cnMgPSByZWYuYXR0cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwic2V0dGluZ3Nyb3dcIiArIGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYS0wIHBhLTAgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc21hbGw6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIm1kaS1tZW51XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcIml0ZW0tc2V0dGluZ3MtbWVudVwiLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW0ubWFya1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGJvdHRvbTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uID0gcmVmLm9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cnMgPSByZWYuYXR0cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9iKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb2xvci5jb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzbWFsbDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kaS1jaGVja2JveC1ibGFuay1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0uY29sb3IudGV4dCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICjQn9C+0YHQu9C10LTQvdC10LUg0L7QsdC90L7QstC70LXQvdC40LU6XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLmZpbmlzaGVkX2F0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLm1hcmspICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsZXgtZ3Jvdy0xIGZsZXgtc2hyaW5rLTFcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0udGFibGVJdGVtcyAmJiBfdm0udGFibGVJdGVtcy5sZW5ndGggPiAwICYmIF92bS5zaG93U2Nyb2xsXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jaGlwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFwcC10YWJsZS1zY3JvbGwtbGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdmVyOiBfdm0ub25TY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZW91dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNjcm9sbFJ1biA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jaGlwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwcC10YWJsZS1zY3JvbGwtbGVmdCBhcHAtdGFibGUtc2Nyb2xsLXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZW92ZXI6IF92bS5vblNjcm9sbFJpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZW91dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNjcm9sbFJ1biA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LWRhdGEtdGFibGVcIiwge1xuICAgICAgICAgICAgICAgIHJlZjogXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiBfdm0ud2l0aEZpeGVkXG4gICAgICAgICAgICAgICAgICAgID8gX3ZtLmdldEZpeGVkSGVhZGVycyh0cnVlKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS50YWJsZUhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnRhYmxlSXRlbXMsXG4gICAgICAgICAgICAgICAgICBwYWdlOiBfdm0udGFibGVGaWx0ZXIucGFnZSxcbiAgICAgICAgICAgICAgICAgIFwiaXRlbXMtcGVyLXBhZ2VcIjogX3ZtLnRhYmxlRmlsdGVyLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgIFwic2VydmVyLWl0ZW1zLWxlbmd0aFwiOiBfdm0udG90YWwsXG4gICAgICAgICAgICAgICAgICBcIm5vLWRhdGEtdGV4dFwiOiBfdm0ud2l0aFNlbGVjdCA/IFwiXCIgOiBcItCd0LXRgiDQtNCw0L3QvdGL0YVcIixcbiAgICAgICAgICAgICAgICAgIFwibm8tcmVzdWx0cy10ZXh0XCI6IF92bS53aXRoU2VsZWN0ID8gXCJcIiA6IFwi0J3QtdGCINC00LDQvdC90YvRhVwiLFxuICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICBcImxvYWRpbmctdGV4dFwiOiBcItCX0LDQs9GA0YPQt9C60LAuLi4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINC/0L7QtNC+0LbQtNC40YLQtVwiLFxuICAgICAgICAgICAgICAgICAgXCJoaWRlLWRlZmF1bHQtZm9vdGVyXCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBcInVwZGF0ZTpwYWdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLnRhYmxlRmlsdGVyLCBcInBhZ2VcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwicGFnZS1jb3VudFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2VDb3VudCA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwidXBkYXRlOm9wdGlvbnNcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS50YWJsZU9wdGlvbnMgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVmOiBcInJvd1wiICsgcHJvcHMuaXRlbS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChwcm9wcy5oZWFkZXJzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCI1MDBweFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGluayA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rX2l0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udGFibGVFZGl0SXRlbShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pZCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtW2l0ZW0udmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzOiBwcm9wcywgaXRlbTogaXRlbSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5oaWRkZW4gPT09IHRydWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLml0ZW1baXRlbS52YWx1ZV0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLmhpZGRlbl9wcmVwZW5kKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcHJvcHMuaXRlbS5oaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbVtpdGVtLnZhbHVlXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbVtpdGVtLnZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5oaWRkZW4gPSAhcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtLmhpZGRlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uaGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLQn9C+0LrQsNC30LDRgtGMINGC0LXQutGB0YJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0KHQutGA0YvRgtGMINGC0LXQutGB0YJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW1baXRlbS52YWx1ZV0gIT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW1baXRlbS52YWx1ZV0gIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvcHMuaXRlbVtpdGVtLnZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uZW1wdHlUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFwiYm9keS5hcHBlbmRcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFwiYm9keS5wYWdpbmF0aW9uXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiIGQtZmxleCBwdC0yXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxlbmd0aDogX3ZtLnBhZ2VDb3VudCwgXCJ0b3RhbC12aXNpYmxlXCI6IDcgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWJsZUZpbHRlci5wYWdlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udGFibGVGaWx0ZXIsIFwicGFnZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWJsZUZpbHRlci5wYWdlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1heC13aWR0aFwiOiBcIjE1MHB4XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWJsZUZpbHRlci5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbMjAsIDQwLCA2MCwgODAsIDEwMF0sXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCLQn9C+0LrQsNC30YvQstCw0YLRjCDQv9C+OlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnRhYmxlRmlsdGVyLnBlcl9wYWdlID0gcGFyc2VJbnQoJGV2ZW50LCAxMClcbiAgICAgICAgICAgICAgICAgICAgICA/IHBhcnNlSW50KCRldmVudCwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgOiAxXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvdmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIsIGp1c3RpZnk6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhcItCh0L/QuNGB0L7QuiDRgNCw0LnQvtC90L7QslwiKSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LXNwYWNlLWJldHdlZW4gbWItNlwiLFxuICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIHRpbGU6IFwiXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJBcHBEYXRhVGFibGVcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5ub3RGb3VuZCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiAhbm90Rm91bmRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMucmVnaW9ucyxcbiAgICAgICAgICAgICAgc2hvd1NlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICAgIGZpeGVkQ29sOiBmYWxzZSxcbiAgICAgICAgICAgICAgZWRpdEl0ZW06IF92bS5zaG93SXRlbSxcbiAgICAgICAgICAgICAgZW1wdHlJdGVtVGV4dDogXCItXCIsXG4gICAgICAgICAgICAgIGl0ZW1zVXJsOiBfdm0uZGlzdHJpY3RzSXRlbXNVcmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5ub3RGb3VuZFxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tdG9wXCI6IFwiMjBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xvcmVkLWJvcmRlclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbjogXCIyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgINCf0L4g0JLQsNGI0LXQvNGDINC30LDQv9GA0L7RgdGDINC90LjRh9C10LPQviDQvdC1INC90LDQudC00LXQvdC+LiDQn9C+0L/RgNC+0LHRg9C50YLQtSDQuNC30LzQtdC90LjRgtGMINC/0LDRgNCw0LzQtdGC0YDRiyDQv9C+0LjRgdC60LAuXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNDAxYjBjYzZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=