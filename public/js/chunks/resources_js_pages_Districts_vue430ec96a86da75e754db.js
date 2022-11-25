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
      return '/district?level=' + this.level;
    },
    level: function level() {
      if (this.$route.query.level) return this.$route.query.level;
      return 0;
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
        name: 'districts',
        params: {
          region: this.$route.params.region,
          id: 0
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
        "router-link",
        {
          staticClass: "ml-4",
          attrs: {
            to: "/regions/" + _vm.$route.params.region + "/0?level=" + _vm.level
          }
        },
        [_vm._v("Добавить +")]
      ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0Rpc3RyaWN0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZT82MjM2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FwcERhdGFUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Rpc3RyaWN0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZT9iNGI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9EaXN0cmljdHMudnVlP2NhNGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZT8yMzE0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9EaXN0cmljdHMudnVlPzFhM2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZT8wNGIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2SEE7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUNBLGtCQURBO0FBRUE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FGQTtBQU1BO0FBQ0EsaUJBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQSxLQU5BO0FBWUEsdUJBWkE7QUFhQSxxQkFiQTtBQWNBLGtC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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx1QkFBdUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvRUE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsOHJCQUErVjtBQUNyWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkpBQWlGO0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19wYWdlc19EaXN0cmljdHNfdnVlNDMwZWM5NmE4NmRhNzVlNzU0ZGIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHYtY29udGFpbmVyID5cbiAgICAgICAgPHNsb3QgbmFtZT1cImJvZHkucHJlcGVuZFwiLz5cbiAgICAgICAgPHYtcm93XG4gICAgICAgICAgICBzdHlsZT1cImZsZXgtd3JhcDogbm93cmFwO1wiPlxuICAgICAgICAgICAgPHYtY29sIHYtaWY9XCJ3aXRoRml4ZWQgJiYgZ2V0Rml4ZWRIZWFkZXJzKGZhbHNlKS5sZW5ndGg+MFwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaXhlZENvbHVtbiBmbGV4LWdyb3ctMCBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgPHYtZGF0YS10YWJsZSA6aGVhZGVycz1cImdldEZpeGVkSGVhZGVycyhmYWxzZSlcIiA6aXRlbXM9XCJ0YWJsZUl0ZW1zXCIgaXRlbS1rZXk9XCJpZFwiIHYtbW9kZWw9XCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGFnZS5zeW5jPVwidGFibGVGaWx0ZXIucGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXMtcGVyLXBhZ2U9XCJ0YWJsZUZpbHRlci5wZXJfcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcGFnZS1jb3VudD1cInBhZ2VDb3VudCA9ICRldmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2VydmVyLWl0ZW1zLWxlbmd0aD1cInRvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtZGVmYXVsdC1mb290ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb246aW5wdXQ9XCIkZW1pdCgnaW5wdXQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucy5zeW5jPVwidGFibGVPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzaG93LXNlbGVjdD1cIndpdGhTZWxlY3RcIiBzdHlsZT1cIndpZHRoOiBtYXgtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bm8tZGF0YS10ZXh0PVwiJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XCIn0J3QtdGCINC00LDQvdC90YvRhSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiZml4ZWRUYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy10ZXh0PVwi0JfQsNCz0YDRg9C30LrQsC4uLiDQn9C+0LbQsNC70YPQudGB0YLQsCwg0L/QvtC00L7QttC00LjRgtC1XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aGVhZGVyLnNldHRpbmdzPVwie2hlYWRlcn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cImQtZmxleCBhbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyLXNldHRpbmdzLW1lbnVcIiB2LWJpbmQ6aGVhZGVyPVwiaGVhZGVyXCI+PC9zbG90PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtLnNldHRpbmdzPVwie2l0ZW19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1tZW51IG9mZnNldC15PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVwieyBvbiwgYXR0cnMgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQgIDpyZWY9XCInc2V0dGluZ3Nyb3cnK2l0ZW0uaWRcIiBjbGFzcz1cIm1hLTAgcGEtMCBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jZW50ZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJhdHRyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbj1cIm9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gc21hbGw+bWRpLW1lbnU8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaXRlbS1zZXR0aW5ncy1tZW51XCIgdi1iaW5kOml0ZW09XCJpdGVtXCI+PC9zbG90PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LW1lbnU+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5tYXJrPVwie2l0ZW19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10b29sdGlwIGJvdHRvbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cInsgb24sIGF0dHJzIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIml0ZW0uY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiYXR0cnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbj1cIm9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7Y29sb3I6IGl0ZW0uY29sb3IuY29sb3J9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPm1kaS1jaGVja2JveC1ibGFuay1jaXJjbGU8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5jb2xvci50ZXh0fX0gKNCf0L7RgdC70LXQtNC90LXQtSDQvtCx0L3QvtCy0LvQtdC90LjQtTp7e2l0ZW0uZmluaXNoZWRfYXR9fSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5tYXJrfX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3YtZGF0YS10YWJsZT5cblxuICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgIDx2LWNvbCBzdHlsZT1cIm92ZXJmbG93OmhpZGRlbjtkaXNwbGF5OiBibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTsgXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXgtZ3Jvdy0xIGZsZXgtc2hyaW5rLTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ0YWJsZUl0ZW1zICYmIHRhYmxlSXRlbXMubGVuZ3RoID4gMCAmJiBzaG93U2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNoaXAgY2xhc3M9XCJhcHAtdGFibGUtc2Nyb2xsLWxlZnRcIiBAbW91c2VvdmVyPVwib25TY3JvbGxMZWZ0XCIgQG1vdXNlb3V0PVwic2Nyb2xsUnVuID0gZmFsc2U7XCIvPlxuICAgICAgICAgICAgICAgICAgICA8di1jaGlwIGNsYXNzPVwiYXBwLXRhYmxlLXNjcm9sbC1sZWZ0IGFwcC10YWJsZS1zY3JvbGwtcmlnaHRcIiAgQG1vdXNlb3Zlcj1cIm9uU2Nyb2xsUmlnaHRcIiAgQG1vdXNlb3V0PVwic2Nyb2xsUnVuID0gZmFsc2U7XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx2LWRhdGEtdGFibGUgOmhlYWRlcnM9XCJ3aXRoRml4ZWQgPyBnZXRGaXhlZEhlYWRlcnModHJ1ZSkgOiB0YWJsZUhlYWRlcnNcIiA6aXRlbXM9XCJ0YWJsZUl0ZW1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwYWdlLnN5bmM9XCJ0YWJsZUZpbHRlci5wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcy1wZXItcGFnZT1cInRhYmxlRmlsdGVyLnBlcl9wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwYWdlLWNvdW50PVwicGFnZUNvdW50ID0gJGV2ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zLnN5bmM9XCJ0YWJsZU9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcnZlci1pdGVtcy1sZW5ndGg9XCJ0b3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bm8tZGF0YS10ZXh0PVwid2l0aFNlbGVjdCA/ICcnIDogJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XCJ3aXRoU2VsZWN0ID8gJycgOiAn0J3QtdGCINC00LDQvdC90YvRhSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwidGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmctdGV4dD1cItCX0LDQs9GA0YPQt9C60LAuLi4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINC/0L7QtNC+0LbQtNC40YLQtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWRlZmF1bHQtZm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1cIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciA6cmVmPVwiJ3JvdycrcHJvcHMuaXRlbS5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcHJvcHMuaGVhZGVyc1wiIHN0eWxlPVwibWF4LXdpZHRoOiA1MDBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJpdGVtLmxpbmsgPT09IHRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJsaW5rX2l0ZW1cIiB2LWJpbmQ9XCJ7cHJvcHMsIGl0ZW19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrPVwidGFibGVFZGl0SXRlbShwcm9wcy5pdGVtW2l0ZW0uaWQgPT09IHVuZGVmaW5lZCA/ICdpZCcgOiBpdGVtLmlkXSwgcHJvcHMuaXRlbSwgaXRlbS52YWx1ZSlcIiA+e3twcm9wcy5pdGVtW2l0ZW0udmFsdWVdfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cIml0ZW0uaGlkZGVuID09PSB0cnVlICYmIChwcm9wcy5pdGVtW2l0ZW0udmFsdWVdIHx8IHByb3BzLml0ZW0uaGlkZGVuX3ByZXBlbmQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwicHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZFwiPnt7cHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cIiFwcm9wcy5pdGVtLmhpZGRlblwiPnt7cHJvcHMuaXRlbVtpdGVtLnZhbHVlXX19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdi1pZj1cInByb3BzLml0ZW1baXRlbS52YWx1ZV1cIiBAY2xpY2s9XCJwcm9wcy5pdGVtLmhpZGRlbiA9ICFwcm9wcy5pdGVtLmhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cHJvcHMuaXRlbS5oaWRkZW4gPyAn0J/QvtC60LDQt9Cw0YLRjCDRgtC10LrRgdGCJyA6ICfQodC60YDRi9GC0Ywg0YLQtdC60YHRgid9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Byb3BzLml0ZW1baXRlbS52YWx1ZV0gIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5pdGVtW2l0ZW0udmFsdWVdICE9PSBudWxsID8gcHJvcHMuaXRlbVtpdGVtLnZhbHVlXSA6IGVtcHR5VGV4dH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdi1kYXRhLXRhYmxlPlxuICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgPC92LXJvdz5cbiAgICAgICAgPHNsb3QgbmFtZT1cImJvZHkuYXBwZW5kXCIvPlxuICAgICAgICA8c2xvdCBuYW1lPVwiYm9keS5wYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGQtZmxleCBwdC0yXCI+XG4gICAgICAgICAgICAgICAgPHYtcGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidGFibGVGaWx0ZXIucGFnZVwiXG4gICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJwYWdlQ291bnRcIlxuICAgICAgICAgICAgICAgICAgICA6dG90YWwtdmlzaWJsZT1cIjdcIlxuICAgICAgICAgICAgICAgID48L3YtcGFnaW5hdGlvbj5cbiAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICA8di1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidGFibGVGaWx0ZXIucGVyX3BhZ2VcIlxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwidGFibGVGaWx0ZXIucGVyX3BhZ2UgPSBwYXJzZUludCgkZXZlbnQsIDEwKSA/IHBhcnNlSW50KCRldmVudCwgMTApIDogMVwiXG4gICAgICAgICAgICAgICAgICAgIDppdGVtcz1cIlsyMCw0MCw2MCw4MCwxMDBdXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQn9C+0LrQsNC30YvQstCw0YLRjCDQv9C+OlwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAxNTBweFwiXG4gICAgICAgICAgICAgICAgPjwvdi1zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zbG90PlxuICAgIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuICAgIGltcG9ydCBBeGlvcyBmcm9tICdAL3V0aWxzL2F4aW9zJztcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdBcHBEYXRhVGFibGUnLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaGVhZGVyczogQXJyYXksXG4gICAgICAgICAgICBpdGVtc1VybDoge1xuICAgICAgICAgICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1NlbGVjdDogQm9vbGVhbixcbiAgICAgICAgICAgIGZpeGVkQ29sOiBCb29sZWFuLFxuICAgICAgICAgICAgZmlsdGVyOiBPYmplY3QsXG4gICAgICAgICAgICBzZXJ2aWNlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTpPYmplY3QsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvSXRlbToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICAoaXRlbSkgPT4ge3JldHVybiBpdGVtO30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWRpdEl0ZW06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoaWQpID0+IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVtcHR5SXRlbVRleHQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZUNvdW50OiAwLFxuICAgICAgICAgICAgICAgIHRhYmxlSXRlbXM6IHRoaXMuaXRlbXMsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IFtdLFxuICAgICAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIHdpdGhTZWxlY3QgOiB0aGlzLnNob3dTZWxlY3QsXG4gICAgICAgICAgICAgICAgd2l0aEZpeGVkOiB0aGlzLmZpeGVkQ29sLFxuICAgICAgICAgICAgICAgIHRhYmxlRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgICAgICBwZXJfcGFnZTogMjAsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRCeTogJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgc29ydERlc2MgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjcm9sbFJ1bjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1Njcm9sbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdGFibGVPcHRpb25zOiB7fSxcbiAgICAgICAgICAgICAgICB0YWJsZUVkaXRJdGVtOiB0aGlzLmVkaXRJdGVtLFxuICAgICAgICAgICAgICAgIGVtcHR5VGV4dDogdGhpcy5lbXB0eUl0ZW1UZXh0LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0Rml4ZWRDb2x1bW5MZWZ0IChpbmR4ID0gdGhpcy5oZWFkZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhlYWRlcnNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoaGVhZGVyLCBpKSA9PiBpIDwgaW5keCAmJiBoZWFkZXIuZml4ZWQgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGN1cnJlbnRWYWx1ZSwgaGVhZGVyKSA9PiBjdXJyZW50VmFsdWUgKyAocGFyc2VJbnQoaGVhZGVyLndpZHRoKSB8fCAwKSwgMClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRGaXhlZEhlYWRlcnMocmV2ZXJzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhlYWRlcnNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoaGVhZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXJldmVyc2UgPyBoZWFkZXIuZml4ZWQgPT09IHRydWUgOiAhKGhlYWRlci5maXhlZCAhPT0gdW5kZWZpbmVkICYmIGhlYWRlci5maXhlZCAhPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzeW5jIGxvYWRJdGVtcygpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWwgPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLmZsb29yKHRoaXMudG90YWwgLyB0aGlzLnRhYmxlRmlsdGVyLnBlcl9wYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgKyAodGhpcy50b3RhbCA9PT0gdGhpcy50YWJsZUZpbHRlci5wZXJfcGFnZSA/IDAgOiAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVZpZXdOb3JtYWxpemUoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICAodGhpcy5pdGVtc1VybCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5zZXJ2aWNlICYmIHRoaXMuc2VydmljZS5wcmVwYXJlUGFyYW1zXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc2VydmljZS5wcmVwYXJlUGFyYW1zKHRoaXMudGFibGVGaWx0ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMudGFibGVGaWx0ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkaW5nJylcbiAgICAgICAgICAgICAgICAgICAgQXhpb3MuZ2V0KHRoaXMuaXRlbXNVcmwsIHtwYXJhbXN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUl0ZW1zID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hcCh0aGlzLnRvSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbCA9IHJlc3BvbnNlLmRhdGEudG90YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ291bnQgPSByZXNwb25zZS5kYXRhLmxhc3RfcGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlVmlld05vcm1hbGl6ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWQnLCByZXNwb25zZS5kYXRhLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZGluZycpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmdldEFsbCh0aGlzLnRhYmxlRmlsdGVyKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVJdGVtcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYXAodGhpcy50b0l0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbCA9IHJlc3BvbnNlLmRhdGEudG90YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IHJlc3BvbnNlLmRhdGEubGFzdF9wYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVZpZXdOb3JtYWxpemUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcsIHJlc3BvbnNlLmRhdGEuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWQnKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxUbyhlbGVtZW50LCBzY3JvbGxQaXhlbHMsIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsUG9zID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIC8vIENvbmRpdGlvbiB0byBjaGVjayBpZiBzY3JvbGxpbmcgaXMgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBpZiAoICEoIChzY3JvbGxQb3MgPT09IDAgfHwgc2Nyb2xsUGl4ZWxzID4gMCkgJiYgKGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxQb3MgPT09IGVsZW1lbnQuc2Nyb2xsV2lkdGggfHwgc2Nyb2xsUGl4ZWxzIDwgMCkpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBzdGFydCB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm93XCIgaW4gd2luZG93LnBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwZXJmb3JtYW5jZS5ub3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGwgPSAodGltZXN0YW1wKSAgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9DYWxjdWxhdGUgdGhlIHRpbWVlbGFwc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lRWxhcHNlZCA9IHRpbWVzdGFtcCAtIHN0YXJ0VGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2FsY3VsYXRlIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGR1cmF0aW9uID8gTWF0aC5taW4odGltZUVsYXBzZWQgLyBkdXJhdGlvbiwgMSkgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXQgdGhlIHNjcm9sbGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gKHByb2dyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzY3JvbGxQb3MgKyBzY3JvbGxQaXhlbHMgKiBwcm9ncmVzcyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICsgMTAgKiBzY3JvbGxQaXhlbHMgLyhNYXRoLmFicyhzY3JvbGxQaXhlbHMpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIGVsYXBzZWQgdGltZSBpcyBsZXNzIHRoZW4gZHVyYXRpb24gdGhlbiBjYWxsIHRoZSByZXF1ZXN0QW5pbWF0aW9uLCBvdGhlcndpc2UgZXhpdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsUnVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9SZXF1ZXN0IGZvciBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL0NhbGwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIG9uIHNjcm9sbCBmdW5jdGlvbiBmaXJzdCB0aW1lXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25TY3JvbGxMZWZ0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0sIC10aGlzLiRyZWZzLnRhYmxlLiRlbC5jaGlsZE5vZGVzWzBdLnNjcm9sbFdpZHRoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblNjcm9sbFJpZ2h0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0sIHRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0uc2Nyb2xsV2lkdGgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYmxlVmlld05vcm1hbGl6ZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcmVmcy5maXhlZFRhYmxlKSBPYmplY3Qua2V5cyh0aGlzLiRyZWZzKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2LnNlYXJjaCgncm93JykgPT09IDAgJiYgdGhpcy4kcmVmc1snc2V0dGluZ3MnKyB2XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmc1snc2V0dGluZ3MnKyB2XS5zdHlsZS5oZWlnaHQgPSAodGhpcy4kcmVmc1t2XS5jbGllbnRIZWlnaHQgLSAxKSsncHgnOyAvL2Jvb3RvbSBib3JkZXIgb24gZXZlcnkgdGFibGUgcm93XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkTG9hZEl0ZW1zID0gXy5kZWJvdW5jZSh0aGlzLmxvYWRJdGVtcywgNTAwKVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgdGFibGVGaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRMb2FkSXRlbXMoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVlcDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYmxlT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlT3B0aW9ucy5zb3J0QnkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLnNvcnRCeSA9IHRoaXMudGFibGVPcHRpb25zLnNvcnRCeVswXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJsZU9wdGlvbnMuc29ydERlc2MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLnNvcnREZXNjID0gdGhpcy50YWJsZU9wdGlvbnMuc29ydERlc2NbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzb3J0QnksIHNvcnREZXNjIH0gPSB0aGlzLnRhYmxlRmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uU29ydCcsIHsgc29ydEJ5LCBzb3J0RGVzYyB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJsZUl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2Nyb2xsID0gdGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXS5zY3JvbGxXaWR0aCA+IHRoaXMuJHJlZnMudGFibGUuJGVsLnNjcm9sbFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVlcDp0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyID0gey4uLnRoaXMudGFibGVGaWx0ZXIsIC4uLnRoaXMuZmlsdGVyfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIucGFnZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZXA6dHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlSXRlbXMgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRJdGVtcygpXG4gICAgICAgICAgICB0aGlzLiR3YXRjaChcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLnRhYmxlLml0ZW1zXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVWaWV3Tm9ybWFsaXplKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICB0aC5maXhlZENvbHVtbiwgdGQuZml4ZWRDb2x1bW4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmZpeGVkQ29sdW1uICAgdGg6bGFzdC1jaGlsZHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XG4gICAgfVxuICAgIGRpdiA+IC5maXhlZENvbHVtbjpudGgtY2hpbGQoMSkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cbiAgICBkaXYgPiAuY29sOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cImNvdmVyXCI+XG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LXRleHQ9XCIn0KHQv9C40YHQvtC6INGA0LDQudC+0L3QvtCyJ1wiPlxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cIicvcmVnaW9ucy8nICsgJHJvdXRlLnBhcmFtcy5yZWdpb24gKyAnLzA/bGV2ZWw9JyArIGxldmVsXCIgY2xhc3M9XCJtbC00XCI+0JTQvtCx0LDQstC40YLRjCArPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPHYtY2FyZCBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LXNwYWNlLWJldHdlZW4gbWItNlwiIGZsYXQgdGlsZT5cbiAgICAgICAgICAgIDxBcHBEYXRhVGFibGVcbiAgICAgICAgICAgICAgICB2LXNob3c9XCIgIW5vdEZvdW5kXCJcbiAgICAgICAgICAgICAgICA6aGVhZGVycz1cImhlYWRlcnMucmVnaW9uc1wiXG4gICAgICAgICAgICAgICAgOnNob3dTZWxlY3Q9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgOmZpeGVkQ29sPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIDplZGl0SXRlbT1cInNob3dJdGVtXCJcbiAgICAgICAgICAgICAgICA6ZW1wdHlJdGVtVGV4dD1cIictJ1wiXG4gICAgICAgICAgICAgICAgOml0ZW1zVXJsPVwiZGlzdHJpY3RzSXRlbXNVcmxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9BcHBEYXRhVGFibGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIm5vdEZvdW5kXCI+XG4gICAgICAgICAgICAgICAgPHYtYWxlcnQgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4XCIgY29sb3JlZC1ib3JkZXIgdHlwZT1cImluZm9cIiBlbGV2YXRpb249XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgINCf0L4g0JLQsNGI0LXQvNGDINC30LDQv9GA0L7RgdGDINC90LjRh9C10LPQviDQvdC1INC90LDQudC00LXQvdC+LiDQn9C+0L/RgNC+0LHRg9C50YLQtSDQuNC30LzQtdC90LjRgtGMINC/0LDRgNCw0LzQtdGC0YDRiyDQv9C+0LjRgdC60LAuXG4gICAgICAgICAgICAgICAgPC92LWFsZXJ0PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgQXBwRGF0YVRhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcERhdGFUYWJsZVwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ0Rpc3RyaWN0cycsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIEFwcERhdGFUYWJsZVxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbm90Rm91bmQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ25hbWUnLCB0ZXh0OiAn0KDQsNC50L7QvScsIGxpbms6IHRydWUsIGlkOiAnY29kZScgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2bSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGxvYWRpbmcoYSwgYikge1xuICAgICAgICAgICAgICAgIGlmICghYSAmJiBiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlci5uYW1lLmxlbmd0aCA+IDAgJiYgdGhpcy5jb3VydHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90Rm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdEZvdW5kID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGNyZWF0ZWQoKSB7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBkaXN0cmljdHNJdGVtc1VybCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJy9kaXN0cmljdD9sZXZlbD0nICsgdGhpcy5sZXZlbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxldmVsKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRyb3V0ZS5xdWVyeS5sZXZlbCkgcmV0dXJuICB0aGlzLiRyb3V0ZS5xdWVyeS5sZXZlbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYWJlbCgpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2godGhpcy4kcm91dGUucXVlcnkubGV2ZWwpe1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiAn0KHQtdC70YzRgdC60L7QtSDQv9C+0YHQtdC70LXQvdC40LUnXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICfQoNCw0LnQvtC9JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNob3dJdGVtKGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnZGlzdHJpY3RzJywgcGFyYW1zOiB7IHJlZ2lvbjp0aGlzLiRyb3V0ZS5wYXJhbXMucmVnaW9uLCBpZDogMH0gfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxudGFibGUge1xcbiAgICB3aWR0aDogLXdlYmtpdC1tYXgtY29udGVudCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogLW1vei1tYXgtY29udGVudCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcXG59XFxudGguZml4ZWRDb2x1bW4sIHRkLmZpeGVkQ29sdW1uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5maXhlZENvbHVtbiAgIHRoOmxhc3QtY2hpbGR7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xcbn1cXG5kaXYgPiAuZml4ZWRDb2x1bW46bnRoLWNoaWxkKDEpIHtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG59XFxuZGl2ID4gLmNvbDpudGgtY2hpbGQoMikge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FwcERhdGFUYWJsZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWlXQTtJQUNBLHFDQUFBO0lBQUEsa0NBQUE7SUFBQSw2QkFBQTtBQUNBO0FBQ0E7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtBQUNBO0FBQ0E7SUFDQSx1QkFBQTtBQUNBO0FBQ0E7SUFDQSxnQkFBQTtBQUNBO0FBQ0E7SUFDQSxlQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8di1jb250YWluZXIgPlxcbiAgICAgICAgPHNsb3QgbmFtZT1cXFwiYm9keS5wcmVwZW5kXFxcIi8+XFxuICAgICAgICA8di1yb3dcXG4gICAgICAgICAgICBzdHlsZT1cXFwiZmxleC13cmFwOiBub3dyYXA7XFxcIj5cXG4gICAgICAgICAgICA8di1jb2wgdi1pZj1cXFwid2l0aEZpeGVkICYmIGdldEZpeGVkSGVhZGVycyhmYWxzZSkubGVuZ3RoPjBcXFwiXFxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmaXhlZENvbHVtbiBmbGV4LWdyb3ctMCBmbGV4LXNocmluay0wXFxcIj5cXG4gICAgICAgICAgICAgICAgPHYtZGF0YS10YWJsZSA6aGVhZGVycz1cXFwiZ2V0Rml4ZWRIZWFkZXJzKGZhbHNlKVxcXCIgOml0ZW1zPVxcXCJ0YWJsZUl0ZW1zXFxcIiBpdGVtLWtleT1cXFwiaWRcXFwiIHYtbW9kZWw9XFxcInNlbGVjdGVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwYWdlLnN5bmM9XFxcInRhYmxlRmlsdGVyLnBhZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zLXBlci1wYWdlPVxcXCJ0YWJsZUZpbHRlci5wZXJfcGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcGFnZS1jb3VudD1cXFwicGFnZUNvdW50ID0gJGV2ZW50XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzZXJ2ZXItaXRlbXMtbGVuZ3RoPVxcXCJ0b3RhbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWRlZmF1bHQtZm9vdGVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbjppbnB1dD1cXFwiJGVtaXQoJ2lucHV0JylcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnMuc3luYz1cXFwidGFibGVPcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzaG93LXNlbGVjdD1cXFwid2l0aFNlbGVjdFxcXCIgc3R5bGU9XFxcIndpZHRoOiBtYXgtY29udGVudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bm8tZGF0YS10ZXh0PVxcXCIn0J3QtdGCINC00LDQvdC90YvRhSdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5vLXJlc3VsdHMtdGV4dD1cXFwiJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cXFwiZml4ZWRUYWJsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cXFwibG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLXRleHQ9XFxcItCX0LDQs9GA0YPQt9C60LAuLi4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINC/0L7QtNC+0LbQtNC40YLQtVxcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpoZWFkZXIuc2V0dGluZ3M9XFxcIntoZWFkZXJ9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgY2xhc3M9XFxcImQtZmxleCBhbGlnbi1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJoZWFkZXItc2V0dGluZ3MtbWVudVxcXCIgdi1iaW5kOmhlYWRlcj1cXFwiaGVhZGVyXFxcIj48L3Nsb3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0uc2V0dGluZ3M9XFxcIntpdGVtfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbWVudSBvZmZzZXQteT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XFxcInsgb24sIGF0dHJzIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0ICA6cmVmPVxcXCInc2V0dGluZ3Nyb3cnK2l0ZW0uaWRcXFwiIGNsYXNzPVxcXCJtYS0wIHBhLTAgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY2VudGVyXFxcIiA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cXFwiYXR0cnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb249XFxcIm9uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIHNtYWxsPm1kaS1tZW51PC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcIml0ZW0tc2V0dGluZ3MtbWVudVxcXCIgdi1iaW5kOml0ZW09XFxcIml0ZW1cXFwiPjwvc2xvdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtbWVudT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0ubWFyaz1cXFwie2l0ZW19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di10b29sdGlwIGJvdHRvbT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XFxcInsgb24sIGF0dHJzIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcIml0ZW0uY29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVxcXCJhdHRyc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uPVxcXCJvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwie2NvbG9yOiBpdGVtLmNvbG9yLmNvbG9yfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5tZGktY2hlY2tib3gtYmxhbmstY2lyY2xlPC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5jb2xvci50ZXh0fX0gKNCf0L7RgdC70LXQtNC90LXQtSDQvtCx0L3QvtCy0LvQtdC90LjQtTp7e2l0ZW0uZmluaXNoZWRfYXR9fSk8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRvb2x0aXA+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtLm1hcmt9fVxcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPC92LWRhdGEtdGFibGU+XFxuXFxuICAgICAgICAgICAgPC92LWNvbD5cXG4gICAgICAgICAgICA8di1jb2wgc3R5bGU9XFxcIm92ZXJmbG93OmhpZGRlbjtkaXNwbGF5OiBibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTsgXFxcIlxcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZmxleC1ncm93LTEgZmxleC1zaHJpbmstMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwidGFibGVJdGVtcyAmJiB0YWJsZUl0ZW1zLmxlbmd0aCA+IDAgJiYgc2hvd1Njcm9sbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8di1jaGlwIGNsYXNzPVxcXCJhcHAtdGFibGUtc2Nyb2xsLWxlZnRcXFwiIEBtb3VzZW92ZXI9XFxcIm9uU2Nyb2xsTGVmdFxcXCIgQG1vdXNlb3V0PVxcXCJzY3JvbGxSdW4gPSBmYWxzZTtcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWNoaXAgY2xhc3M9XFxcImFwcC10YWJsZS1zY3JvbGwtbGVmdCBhcHAtdGFibGUtc2Nyb2xsLXJpZ2h0XFxcIiAgQG1vdXNlb3Zlcj1cXFwib25TY3JvbGxSaWdodFxcXCIgIEBtb3VzZW91dD1cXFwic2Nyb2xsUnVuID0gZmFsc2U7XFxcIi8+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8di1kYXRhLXRhYmxlIDpoZWFkZXJzPVxcXCJ3aXRoRml4ZWQgPyBnZXRGaXhlZEhlYWRlcnModHJ1ZSkgOiB0YWJsZUhlYWRlcnNcXFwiIDppdGVtcz1cXFwidGFibGVJdGVtc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGFnZS5zeW5jPVxcXCJ0YWJsZUZpbHRlci5wYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcy1wZXItcGFnZT1cXFwidGFibGVGaWx0ZXIucGVyX3BhZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHBhZ2UtY291bnQ9XFxcInBhZ2VDb3VudCA9ICRldmVudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucy5zeW5jPVxcXCJ0YWJsZU9wdGlvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcnZlci1pdGVtcy1sZW5ndGg9XFxcInRvdGFsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuby1kYXRhLXRleHQ9XFxcIndpdGhTZWxlY3QgPyAnJyA6ICfQndC10YIg0LTQsNC90L3Ri9GFJ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bm8tcmVzdWx0cy10ZXh0PVxcXCJ3aXRoU2VsZWN0ID8gJycgOiAn0J3QtdGCINC00LDQvdC90YvRhSdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVxcXCJ0YWJsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cXFwibG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLXRleHQ9XFxcItCX0LDQs9GA0YPQt9C60LAuLi4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINC/0L7QtNC+0LbQtNC40YLQtVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWRlZmF1bHQtZm9vdGVyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIml0ZW1cXFwiIHNsb3Qtc2NvcGU9XFxcInByb3BzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgOnJlZj1cXFwiJ3JvdycrcHJvcHMuaXRlbS5pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2LWZvcj1cXFwiKGl0ZW0sIGluZGV4KSBpbiBwcm9wcy5oZWFkZXJzXFxcIiBzdHlsZT1cXFwibWF4LXdpZHRoOiA1MDBweFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcIml0ZW0ubGluayA9PT0gdHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwibGlua19pdGVtXFxcIiB2LWJpbmQ9XFxcIntwcm9wcywgaXRlbX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XFxcInRhYmxlRWRpdEl0ZW0ocHJvcHMuaXRlbVtpdGVtLmlkID09PSB1bmRlZmluZWQgPyAnaWQnIDogaXRlbS5pZF0sIHByb3BzLml0ZW0sIGl0ZW0udmFsdWUpXFxcIiA+e3twcm9wcy5pdGVtW2l0ZW0udmFsdWVdfX08L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cXFwiaXRlbS5oaWRkZW4gPT09IHRydWUgJiYgKHByb3BzLml0ZW1baXRlbS52YWx1ZV0gfHwgcHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XFxcInByb3BzLml0ZW0uaGlkZGVuX3ByZXBlbmRcXFwiPnt7cHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XFxcIiFwcm9wcy5pdGVtLmhpZGRlblxcXCI+e3twcm9wcy5pdGVtW2l0ZW0udmFsdWVdfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdi1pZj1cXFwicHJvcHMuaXRlbVtpdGVtLnZhbHVlXVxcXCIgQGNsaWNrPVxcXCJwcm9wcy5pdGVtLmhpZGRlbiA9ICFwcm9wcy5pdGVtLmhpZGRlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cHJvcHMuaXRlbS5oaWRkZW4gPyAn0J/QvtC60LDQt9Cw0YLRjCDRgtC10LrRgdGCJyA6ICfQodC60YDRi9GC0Ywg0YLQtdC60YHRgid9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twcm9wcy5pdGVtW2l0ZW0udmFsdWVdICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuaXRlbVtpdGVtLnZhbHVlXSAhPT0gbnVsbCA/IHByb3BzLml0ZW1baXRlbS52YWx1ZV0gOiBlbXB0eVRleHR9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgIDwvdi1kYXRhLXRhYmxlPlxcbiAgICAgICAgICAgIDwvdi1jb2w+XFxuICAgICAgICA8L3Ytcm93PlxcbiAgICAgICAgPHNsb3QgbmFtZT1cXFwiYm9keS5hcHBlbmRcXFwiLz5cXG4gICAgICAgIDxzbG90IG5hbWU9XFxcImJvZHkucGFnaW5hdGlvblxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiIGQtZmxleCBwdC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgPHYtcGFnaW5hdGlvblxcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidGFibGVGaWx0ZXIucGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XFxcInBhZ2VDb3VudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDp0b3RhbC12aXNpYmxlPVxcXCI3XFxcIlxcbiAgICAgICAgICAgICAgICA+PC92LXBhZ2luYXRpb24+XFxuICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcbiAgICAgICAgICAgICAgICA8di1zZWxlY3RcXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cXFwidGFibGVGaWx0ZXIucGVyX3BhZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVxcXCJ0YWJsZUZpbHRlci5wZXJfcGFnZSA9IHBhcnNlSW50KCRldmVudCwgMTApID8gcGFyc2VJbnQoJGV2ZW50LCAxMCkgOiAxXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVxcXCJbMjAsNDAsNjAsODAsMTAwXVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCLQn9C+0LrQsNC30YvQstCw0YLRjCDQv9C+OlxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtYXgtd2lkdGg6IDE1MHB4XFxcIlxcbiAgICAgICAgICAgICAgICA+PC92LXNlbGVjdD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvc2xvdD5cXG4gICAgPC92LWNvbnRhaW5lcj5cXG48L3RlbXBsYXRlPlxcbjxzY3JpcHQ+XFxuICAgIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XFxuICAgIGltcG9ydCBBeGlvcyBmcm9tICdAL3V0aWxzL2F4aW9zJztcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgbmFtZTogJ0FwcERhdGFUYWJsZScsXFxuICAgICAgICBwcm9wczoge1xcbiAgICAgICAgICAgIGhlYWRlcnM6IEFycmF5LFxcbiAgICAgICAgICAgIGl0ZW1zVXJsOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6U3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgaXRlbXM6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgc2hvd1NlbGVjdDogQm9vbGVhbixcXG4gICAgICAgICAgICBmaXhlZENvbDogQm9vbGVhbixcXG4gICAgICAgICAgICBmaWx0ZXI6IE9iamVjdCxcXG4gICAgICAgICAgICBzZXJ2aWNlOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6T2JqZWN0LFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiAoe30pXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB0b0l0ZW06IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICAoaXRlbSkgPT4ge3JldHVybiBpdGVtO30sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBlZGl0SXRlbToge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKGlkKSA9PiB7fSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGVtcHR5SXRlbVRleHQ6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTpTdHJpbmcsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIHBhZ2VDb3VudDogMCxcXG4gICAgICAgICAgICAgICAgdGFibGVJdGVtczogdGhpcy5pdGVtcyxcXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IFtdLFxcbiAgICAgICAgICAgICAgICB0b3RhbDogMCxcXG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXJzOiB0aGlzLmhlYWRlcnMsXFxuICAgICAgICAgICAgICAgIHdpdGhTZWxlY3QgOiB0aGlzLnNob3dTZWxlY3QsXFxuICAgICAgICAgICAgICAgIHdpdGhGaXhlZDogdGhpcy5maXhlZENvbCxcXG4gICAgICAgICAgICAgICAgdGFibGVGaWx0ZXI6IHtcXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZmlsdGVyLFxcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogMSxcXG4gICAgICAgICAgICAgICAgICAgIHBlcl9wYWdlOiAyMCxcXG4gICAgICAgICAgICAgICAgICAgIHNvcnRCeTogJ2lkJyxcXG4gICAgICAgICAgICAgICAgICAgIHNvcnREZXNjIDogZmFsc2UsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHNjcm9sbFJ1bjogZmFsc2UsXFxuICAgICAgICAgICAgICAgIHNob3dTY3JvbGw6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICB0YWJsZU9wdGlvbnM6IHt9LFxcbiAgICAgICAgICAgICAgICB0YWJsZUVkaXRJdGVtOiB0aGlzLmVkaXRJdGVtLFxcbiAgICAgICAgICAgICAgICBlbXB0eVRleHQ6IHRoaXMuZW1wdHlJdGVtVGV4dCxcXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXFxuICAgICAgICAgICAgfTtcXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgZ2V0Rml4ZWRDb2x1bW5MZWZ0IChpbmR4ID0gdGhpcy5oZWFkZXJzLmxlbmd0aCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJzXFxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChoZWFkZXIsIGkpID0+IGkgPCBpbmR4ICYmIGhlYWRlci5maXhlZCA9PT0gdHJ1ZSlcXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGN1cnJlbnRWYWx1ZSwgaGVhZGVyKSA9PiBjdXJyZW50VmFsdWUgKyAocGFyc2VJbnQoaGVhZGVyLndpZHRoKSB8fCAwKSwgMClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGdldEZpeGVkSGVhZGVycyhyZXZlcnNlKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhlYWRlcnNcXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGhlYWRlcikgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhcmV2ZXJzZSA/IGhlYWRlci5maXhlZCA9PT0gdHJ1ZSA6ICEoaGVhZGVyLmZpeGVkICE9PSB1bmRlZmluZWQgJiYgaGVhZGVyLmZpeGVkICE9PSBmYWxzZSlcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgYXN5bmMgbG9hZEl0ZW1zKCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtcyAhPT0gdW5kZWZpbmVkKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5pdGVtcy5sZW5ndGg7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IE1hdGguZmxvb3IodGhpcy50b3RhbCAvIHRoaXMudGFibGVGaWx0ZXIucGVyX3BhZ2UpXFxuICAgICAgICAgICAgICAgICAgICAgICAgKyAodGhpcy50b3RhbCA9PT0gdGhpcy50YWJsZUZpbHRlci5wZXJfcGFnZSA/IDAgOiAxKTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVWaWV3Tm9ybWFsaXplKClcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBpZiAgKHRoaXMuaXRlbXNVcmwpIHtcXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB0aGlzLnNlcnZpY2UgJiYgdGhpcy5zZXJ2aWNlLnByZXBhcmVQYXJhbXNcXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc2VydmljZS5wcmVwYXJlUGFyYW1zKHRoaXMudGFibGVGaWx0ZXIpXFxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnRhYmxlRmlsdGVyO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkaW5nJylcXG4gICAgICAgICAgICAgICAgICAgIEF4aW9zLmdldCh0aGlzLml0ZW1zVXJsLCB7cGFyYW1zfSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUl0ZW1zID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hcCh0aGlzLnRvSXRlbSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWwgPSByZXNwb25zZS5kYXRhLnRvdGFsO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IHJlc3BvbnNlLmRhdGEubGFzdF9wYWdlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlVmlld05vcm1hbGl6ZSgpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZCcsIHJlc3BvbnNlLmRhdGEuZGF0YSlcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkJylcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZGluZycpXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5nZXRBbGwodGhpcy50YWJsZUZpbHRlcilcXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVJdGVtcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYXAodGhpcy50b0l0ZW0pO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWwgPSByZXNwb25zZS5kYXRhLnRvdGFsO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNvdW50ID0gcmVzcG9uc2UuZGF0YS5sYXN0X3BhZ2U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVZpZXdOb3JtYWxpemUoKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkJywgcmVzcG9uc2UuZGF0YS5kYXRhKVxcbiAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkJylcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgc2Nyb2xsVG8oZWxlbWVudCwgc2Nyb2xsUGl4ZWxzLCBkdXJhdGlvbikge1xcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxQb3MgPSBlbGVtZW50LnNjcm9sbExlZnQ7XFxuICAgICAgICAgICAgICAgIC8vIENvbmRpdGlvbiB0byBjaGVjayBpZiBzY3JvbGxpbmcgaXMgcmVxdWlyZWRcXG4gICAgICAgICAgICAgICAgaWYgKCAhKCAoc2Nyb2xsUG9zID09PSAwIHx8IHNjcm9sbFBpeGVscyA+IDApICYmIChlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsUG9zID09PSBlbGVtZW50LnNjcm9sbFdpZHRoIHx8IHNjcm9sbFBpeGVscyA8IDApKSlcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBzdGFydCB0aW1lc3RhbXBcXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9XFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5vd1xcXCIgaW4gd2luZG93LnBlcmZvcm1hbmNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcGVyZm9ybWFuY2Uubm93KClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGwgPSAodGltZXN0YW1wKSAgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2FsY3VsYXRlIHRoZSB0aW1lZWxhcHNlZFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVFbGFwc2VkID0gdGltZXN0YW1wIC0gc3RhcnRUaW1lO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2FsY3VsYXRlIHByb2dyZXNzXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBkdXJhdGlvbiA/IE1hdGgubWluKHRpbWVFbGFwc2VkIC8gZHVyYXRpb24sIDEpIDogbnVsbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1NldCB0aGUgc2Nyb2xsZWZ0XFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gKHByb2dyZXNzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2Nyb2xsUG9zICsgc2Nyb2xsUGl4ZWxzICogcHJvZ3Jlc3MgOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgKyAxMCAqIHNjcm9sbFBpeGVscyAvKE1hdGguYWJzKHNjcm9sbFBpeGVscykpKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIGVsYXBzZWQgdGltZSBpcyBsZXNzIHRoZW4gZHVyYXRpb24gdGhlbiBjYWxsIHRoZSByZXF1ZXN0QW5pbWF0aW9uLCBvdGhlcndpc2UgZXhpdFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFJ1bikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1JlcXVlc3QgZm9yIGFuaW1hdGlvblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC8vQ2FsbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgb24gc2Nyb2xsIGZ1bmN0aW9uIGZpcnN0IHRpbWVcXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgb25TY3JvbGxMZWZ0KCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFJ1biA9IHRydWU7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXSwgLXRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0uc2Nyb2xsV2lkdGgpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgb25TY3JvbGxSaWdodCgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxSdW4gPSB0cnVlO1xcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0sIHRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0uc2Nyb2xsV2lkdGgpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdGFibGVWaWV3Tm9ybWFsaXplKCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcmVmcy5maXhlZFRhYmxlKSBPYmplY3Qua2V5cyh0aGlzLiRyZWZzKS5mb3JFYWNoKCh2KSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodi5zZWFyY2goJ3JvdycpID09PSAwICYmIHRoaXMuJHJlZnNbJ3NldHRpbmdzJysgdl0pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzWydzZXR0aW5ncycrIHZdLnN0eWxlLmhlaWdodCA9ICh0aGlzLiRyZWZzW3ZdLmNsaWVudEhlaWdodCAtIDEpKydweCc7IC8vYm9vdG9tIGJvcmRlciBvbiBldmVyeSB0YWJsZSByb3dcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XFxuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRMb2FkSXRlbXMgPSBfLmRlYm91bmNlKHRoaXMubG9hZEl0ZW1zLCA1MDApXFxuICAgICAgICB9LFxcbiAgICAgICAgd2F0Y2g6IHtcXG4gICAgICAgICAgICB0YWJsZUZpbHRlcjoge1xcbiAgICAgICAgICAgICAgICBoYW5kbGVyICgpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkTG9hZEl0ZW1zKClcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZGVlcDogdHJ1ZVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdGFibGVPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgIGhhbmRsZXIoKSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJsZU9wdGlvbnMuc29ydEJ5Lmxlbmd0aCA9PT0gMSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIuc29ydEJ5ID0gdGhpcy50YWJsZU9wdGlvbnMuc29ydEJ5WzBdO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFibGVPcHRpb25zLnNvcnREZXNjLmxlbmd0aCA9PT0gMSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIuc29ydERlc2MgPSB0aGlzLnRhYmxlT3B0aW9ucy5zb3J0RGVzY1swXTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc29ydEJ5LCBzb3J0RGVzYyB9ID0gdGhpcy50YWJsZUZpbHRlclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Tb3J0JywgeyBzb3J0QnksIHNvcnREZXNjIH0pXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB0YWJsZUl0ZW1zOiB7XFxuICAgICAgICAgICAgICAgIGhhbmRsZXIoKSB7XFxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2Nyb2xsID0gdGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXS5zY3JvbGxXaWR0aCA+IHRoaXMuJHJlZnMudGFibGUuJGVsLnNjcm9sbFdpZHRoO1xcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZGVlcDp0cnVlLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZmlsdGVyOiB7XFxuICAgICAgICAgICAgICAgIGhhbmRsZXIodmFsdWUpIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIgPSB7Li4udGhpcy50YWJsZUZpbHRlciwgLi4udGhpcy5maWx0ZXJ9O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIucGFnZSA9IDE7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGRlZXA6dHJ1ZVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgaXRlbXM6IHtcXG4gICAgICAgICAgICAgICAgaGFuZGxlcih2YWx1ZSkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUl0ZW1zID0gdmFsdWU7XFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICAgICAgdGhpcy5sb2FkSXRlbXMoKVxcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKFxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy50YWJsZS5pdGVtc1xcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAodmFsKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlVmlld05vcm1hbGl6ZSgpXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICApXFxuICAgICAgICB9LFxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbiAgICB0YWJsZSB7XFxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICB0aC5maXhlZENvbHVtbiwgdGQuZml4ZWRDb2x1bW4ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuZml4ZWRDb2x1bW4gICB0aDpsYXN0LWNoaWxke1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XFxuICAgIH1cXG4gICAgZGl2ID4gLmZpeGVkQ29sdW1uOm50aC1jaGlsZCgxKSB7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICB9XFxuICAgIGRpdiA+IC5jb2w6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTk1M2I4ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTE5NTNiOGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTE5NTNiOGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTE5NTNiOGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTE5NTNiOGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTE5NTNiOGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0FwcERhdGFUYWJsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Rpc3RyaWN0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWE2MDg2Mjgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGlzdHJpY3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGlzdHJpY3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOWE2MDg2MjhcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5YTYwODYyOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5YTYwODYyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5YTYwODYyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRGlzdHJpY3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05YTYwODYyOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5YTYwODYyOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL0Rpc3RyaWN0cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGlzdHJpY3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Rpc3RyaWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250YWluZXJcIixcbiAgICBbXG4gICAgICBfdm0uX3QoXCJib2R5LnByZXBlbmRcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBcImZsZXgtd3JhcFwiOiBcIm5vd3JhcFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS53aXRoRml4ZWQgJiYgX3ZtLmdldEZpeGVkSGVhZGVycyhmYWxzZSkubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaXhlZENvbHVtbiBmbGV4LWdyb3ctMCBmbGV4LXNocmluay0wXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtZGF0YS10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJmaXhlZFRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIm1heC1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBfdm0uZ2V0Rml4ZWRIZWFkZXJzKGZhbHNlKSxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnRhYmxlSXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLWtleVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFnZTogX3ZtLnRhYmxlRmlsdGVyLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtcy1wZXItcGFnZVwiOiBfdm0udGFibGVGaWx0ZXIucGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgXCJzZXJ2ZXItaXRlbXMtbGVuZ3RoXCI6IF92bS50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtZGVmYXVsdC1mb290ZXJcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0udGFibGVPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgIFwic2hvdy1zZWxlY3RcIjogX3ZtLndpdGhTZWxlY3QsXG4gICAgICAgICAgICAgICAgICAgICAgXCJuby1kYXRhLXRleHRcIjogXCLQndC10YIg0LTQsNC90L3Ri9GFXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJuby1yZXN1bHRzLXRleHRcIjogXCLQndC10YIg0LTQsNC90L3Ri9GFXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsb2FkaW5nLXRleHRcIjogXCLQl9Cw0LPRgNGD0LfQutCwLi4uINCf0L7QttCw0LvRg9C50YHRgtCwLCDQv9C+0LTQvtC20LTQuNGC0LVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnBhZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLnRhYmxlRmlsdGVyLCBcInBhZ2VcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJwYWdlLWNvdW50XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2VDb3VudCA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImlucHV0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpvcHRpb25zXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhYmxlT3B0aW9ucyA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJoZWFkZXIuc2V0dGluZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoZWFkZXIgPSByZWYuaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGFsaWduLWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXCJoZWFkZXItc2V0dGluZ3MtbWVudVwiLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpdGVtLnNldHRpbmdzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbWVudVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJvZmZzZXQteVwiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb24gPSByZWYub25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRycyA9IHJlZi5hdHRyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJzZXR0aW5nc3Jvd1wiICsgaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hLTAgcGEtMCBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fYihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbWFsbDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwibWRpLW1lbnVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl90KFwiaXRlbS1zZXR0aW5ncy1tZW51XCIsIG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbS5tYXJrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYm90dG9tOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb24gPSByZWYub25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRycyA9IHJlZi5hdHRyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbG9yLmNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNtYWxsOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWRpLWNoZWNrYm94LWJsYW5rLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5jb2xvci50ZXh0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKNCf0L7RgdC70LXQtNC90LXQtSDQvtCx0L3QvtCy0LvQtdC90LjQtTpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0uZmluaXNoZWRfYXQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0ubWFyaykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleC1ncm93LTEgZmxleC1zaHJpbmstMVwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS50YWJsZUl0ZW1zICYmIF92bS50YWJsZUl0ZW1zLmxlbmd0aCA+IDAgJiYgX3ZtLnNob3dTY3JvbGxcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNoaXBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXBwLXRhYmxlLXNjcm9sbC1sZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZW92ZXI6IF92bS5vblNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlb3V0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2Nyb2xsUnVuID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNoaXBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBwLXRhYmxlLXNjcm9sbC1sZWZ0IGFwcC10YWJsZS1zY3JvbGwtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlb3ZlcjogX3ZtLm9uU2Nyb2xsUmlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlb3V0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2Nyb2xsUnVuID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtZGF0YS10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS53aXRoRml4ZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfdm0uZ2V0Rml4ZWRIZWFkZXJzKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLnRhYmxlSGVhZGVycyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0udGFibGVJdGVtcyxcbiAgICAgICAgICAgICAgICAgIHBhZ2U6IF92bS50YWJsZUZpbHRlci5wYWdlLFxuICAgICAgICAgICAgICAgICAgXCJpdGVtcy1wZXItcGFnZVwiOiBfdm0udGFibGVGaWx0ZXIucGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0udGFibGVPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgXCJzZXJ2ZXItaXRlbXMtbGVuZ3RoXCI6IF92bS50b3RhbCxcbiAgICAgICAgICAgICAgICAgIFwibm8tZGF0YS10ZXh0XCI6IF92bS53aXRoU2VsZWN0ID8gXCJcIiA6IFwi0J3QtdGCINC00LDQvdC90YvRhVwiLFxuICAgICAgICAgICAgICAgICAgXCJuby1yZXN1bHRzLXRleHRcIjogX3ZtLndpdGhTZWxlY3QgPyBcIlwiIDogXCLQndC10YIg0LTQsNC90L3Ri9GFXCIsXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubG9hZGluZyxcbiAgICAgICAgICAgICAgICAgIFwibG9hZGluZy10ZXh0XCI6IFwi0JfQsNCz0YDRg9C30LrQsC4uLiDQn9C+0LbQsNC70YPQudGB0YLQsCwg0L/QvtC00L7QttC00LjRgtC1XCIsXG4gICAgICAgICAgICAgICAgICBcImhpZGUtZGVmYXVsdC1mb290ZXJcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnBhZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0udGFibGVGaWx0ZXIsIFwicGFnZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJwYWdlLWNvdW50XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZUNvdW50ID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6b3B0aW9uc1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnRhYmxlT3B0aW9ucyA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByZWY6IFwicm93XCIgKyBwcm9wcy5pdGVtLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHByb3BzLmhlYWRlcnMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5saW5rID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl90KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtfaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50YWJsZUVkaXRJdGVtKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlkID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW1baXRlbS52YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHM6IHByb3BzLCBpdGVtOiBpdGVtIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLmhpZGRlbiA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvcHMuaXRlbVtpdGVtLnZhbHVlXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uaGlkZGVuX3ByZXBlbmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLmhpZGRlbl9wcmVwZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLmhpZGRlbl9wcmVwZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy5pdGVtLmhpZGRlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwcm9wcy5pdGVtW2l0ZW0udmFsdWVdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtW2l0ZW0udmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLmhpZGRlbiA9ICFwcm9wc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW0uaGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5oaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCf0L7QutCw0LfQsNGC0Ywg0YLQtdC60YHRglwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLQodC60YDRi9GC0Ywg0YLQtdC60YHRglwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbVtpdGVtLnZhbHVlXSAhPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbVtpdGVtLnZhbHVlXSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9wcy5pdGVtW2l0ZW0udmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5lbXB0eVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXCJib2R5LmFwcGVuZFwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXCJib2R5LnBhZ2luYXRpb25cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCIgZC1mbGV4IHB0LTJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtcGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbGVuZ3RoOiBfdm0ucGFnZUNvdW50LCBcInRvdGFsLXZpc2libGVcIjogNyB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRhYmxlRmlsdGVyLnBhZ2UsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS50YWJsZUZpbHRlciwgXCJwYWdlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYmxlRmlsdGVyLnBhZ2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWF4LXdpZHRoXCI6IFwiMTUwcHhcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRhYmxlRmlsdGVyLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IFsyMCwgNDAsIDYwLCA4MCwgMTAwXSxcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCf0L7QutCw0LfRi9Cy0LDRgtGMINC/0L46XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0udGFibGVGaWx0ZXIucGVyX3BhZ2UgPSBwYXJzZUludCgkZXZlbnQsIDEwKVxuICAgICAgICAgICAgICAgICAgICAgID8gcGFyc2VJbnQoJGV2ZW50LCAxMClcbiAgICAgICAgICAgICAgICAgICAgICA6IDFcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY292ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9LFxuICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKFwi0KHQv9C40YHQvtC6INGA0LDQudC+0L3QvtCyXCIpIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC00XCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRvOiBcIi9yZWdpb25zL1wiICsgX3ZtLiRyb3V0ZS5wYXJhbXMucmVnaW9uICsgXCIvMD9sZXZlbD1cIiArIF92bS5sZXZlbFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcItCU0L7QsdCw0LLQuNGC0YwgK1wiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1zcGFjZS1iZXR3ZWVuIG1iLTZcIixcbiAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCB0aWxlOiBcIlwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiQXBwRGF0YVRhYmxlXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0ubm90Rm91bmQsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIgIW5vdEZvdW5kXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLnJlZ2lvbnMsXG4gICAgICAgICAgICAgIHNob3dTZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICBmaXhlZENvbDogZmFsc2UsXG4gICAgICAgICAgICAgIGVkaXRJdGVtOiBfdm0uc2hvd0l0ZW0sXG4gICAgICAgICAgICAgIGVtcHR5SXRlbVRleHQ6IFwiLVwiLFxuICAgICAgICAgICAgICBpdGVtc1VybDogX3ZtLmRpc3RyaWN0c0l0ZW1zVXJsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ubm90Rm91bmRcbiAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjIwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JlZC1ib3JkZXJcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb246IFwiMlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICDQn9C+INCS0LDRiNC10LzRgyDQt9Cw0L/RgNC+0YHRgyDQvdC40YfQtdCz0L4g0L3QtSDQvdCw0LnQtNC10L3Qvi4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0LjQt9C80LXQvdC40YLRjCDQv9Cw0YDQsNC80LXRgtGA0Ysg0L/QvtC40YHQutCwLlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQwMWIwY2M2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9