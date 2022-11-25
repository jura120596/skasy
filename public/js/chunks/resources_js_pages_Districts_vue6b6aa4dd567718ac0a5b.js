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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0Rpc3RyaWN0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZT82MjM2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0FwcERhdGFUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Rpc3RyaWN0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZT9iNGI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9EaXN0cmljdHMudnVlP2NhNGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZT8yMzE0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9EaXN0cmljdHMudnVlPzFhM2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZT8wNGIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2SEE7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUNBLGtCQURBO0FBRUE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FGQTtBQU1BO0FBQ0EsaUJBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQSxLQU5BO0FBWUEsdUJBWkE7QUFhQSxxQkFiQTtBQWNBLGtC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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsdUJBQXVCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0VBOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLDhyQkFBK1Y7QUFDclg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJKQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfRGlzdHJpY3RzX3Z1ZTZiNmFhNGRkNTY3NzE4YWMwYTViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDx2LWNvbnRhaW5lciA+XG4gICAgICAgIDxzbG90IG5hbWU9XCJib2R5LnByZXBlbmRcIi8+XG4gICAgICAgIDx2LXJvd1xuICAgICAgICAgICAgc3R5bGU9XCJmbGV4LXdyYXA6IG5vd3JhcDtcIj5cbiAgICAgICAgICAgIDx2LWNvbCB2LWlmPVwid2l0aEZpeGVkICYmIGdldEZpeGVkSGVhZGVycyhmYWxzZSkubGVuZ3RoPjBcIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZml4ZWRDb2x1bW4gZmxleC1ncm93LTAgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgIDx2LWRhdGEtdGFibGUgOmhlYWRlcnM9XCJnZXRGaXhlZEhlYWRlcnMoZmFsc2UpXCIgOml0ZW1zPVwidGFibGVJdGVtc1wiIGl0ZW0ta2V5PVwiaWRcIiB2LW1vZGVsPVwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBhZ2Uuc3luYz1cInRhYmxlRmlsdGVyLnBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zLXBlci1wYWdlPVwidGFibGVGaWx0ZXIucGVyX3BhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHBhZ2UtY291bnQ9XCJwYWdlQ291bnQgPSAkZXZlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcnZlci1pdGVtcy1sZW5ndGg9XCJ0b3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWRlZmF1bHQtZm9vdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uOmlucHV0PVwiJGVtaXQoJ2lucHV0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnMuc3luYz1cInRhYmxlT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2hvdy1zZWxlY3Q9XCJ3aXRoU2VsZWN0XCIgc3R5bGU9XCJ3aWR0aDogbWF4LWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5vLWRhdGEtdGV4dD1cIifQndC10YIg0LTQsNC90L3Ri9GFJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bm8tcmVzdWx0cy10ZXh0PVwiJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImZpeGVkVGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmctdGV4dD1cItCX0LDQs9GA0YPQt9C60LAuLi4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINC/0L7QtNC+0LbQtNC40YLQtVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmhlYWRlci5zZXR0aW5ncz1cIntoZWFkZXJ9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgY2xhc3M9XCJkLWZsZXggYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImhlYWRlci1zZXR0aW5ncy1tZW51XCIgdi1iaW5kOmhlYWRlcj1cImhlYWRlclwiPjwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5zZXR0aW5ncz1cIntpdGVtfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtbWVudSBvZmZzZXQteT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cInsgb24sIGF0dHJzIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0ICA6cmVmPVwiJ3NldHRpbmdzcm93JytpdGVtLmlkXCIgY2xhc3M9XCJtYS0wIHBhLTAgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY2VudGVyXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiYXR0cnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb249XCJvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIHNtYWxsPm1kaS1tZW51PC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cIml0ZW0tc2V0dGluZ3MtbWVudVwiIHYtYmluZDppdGVtPVwiaXRlbVwiPjwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1tZW51PlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0ubWFyaz1cIntpdGVtfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbHRpcCBib3R0b20+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XCJ7IG9uLCBhdHRycyB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpdGVtLmNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImF0dHJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb249XCJvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwie2NvbG9yOiBpdGVtLmNvbG9yLmNvbG9yfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5tZGktY2hlY2tib3gtYmxhbmstY2lyY2xlPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0uY29sb3IudGV4dH19ICjQn9C+0YHQu9C10LTQvdC10LUg0L7QsdC90L7QstC70LXQvdC40LU6e3tpdGVtLmZpbmlzaGVkX2F0fX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0ubWFya319XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC92LWRhdGEtdGFibGU+XG5cbiAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICA8di1jb2wgc3R5bGU9XCJvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTogYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7IFwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4LWdyb3ctMSBmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidGFibGVJdGVtcyAmJiB0YWJsZUl0ZW1zLmxlbmd0aCA+IDAgJiYgc2hvd1Njcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICA8di1jaGlwIGNsYXNzPVwiYXBwLXRhYmxlLXNjcm9sbC1sZWZ0XCIgQG1vdXNlb3Zlcj1cIm9uU2Nyb2xsTGVmdFwiIEBtb3VzZW91dD1cInNjcm9sbFJ1biA9IGZhbHNlO1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2hpcCBjbGFzcz1cImFwcC10YWJsZS1zY3JvbGwtbGVmdCBhcHAtdGFibGUtc2Nyb2xsLXJpZ2h0XCIgIEBtb3VzZW92ZXI9XCJvblNjcm9sbFJpZ2h0XCIgIEBtb3VzZW91dD1cInNjcm9sbFJ1biA9IGZhbHNlO1wiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8di1kYXRhLXRhYmxlIDpoZWFkZXJzPVwid2l0aEZpeGVkID8gZ2V0Rml4ZWRIZWFkZXJzKHRydWUpIDogdGFibGVIZWFkZXJzXCIgOml0ZW1zPVwidGFibGVJdGVtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGFnZS5zeW5jPVwidGFibGVGaWx0ZXIucGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXMtcGVyLXBhZ2U9XCJ0YWJsZUZpbHRlci5wZXJfcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcGFnZS1jb3VudD1cInBhZ2VDb3VudCA9ICRldmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucy5zeW5jPVwidGFibGVPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzZXJ2ZXItaXRlbXMtbGVuZ3RoPVwidG90YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5vLWRhdGEtdGV4dD1cIndpdGhTZWxlY3QgPyAnJyA6ICfQndC10YIg0LTQsNC90L3Ri9GFJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bm8tcmVzdWx0cy10ZXh0PVwid2l0aFNlbGVjdCA/ICcnIDogJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cInRhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLXRleHQ9XCLQl9Cw0LPRgNGD0LfQutCwLi4uINCf0L7QttCw0LvRg9C50YHRgtCwLCDQv9C+0LTQvtC20LTQuNGC0LVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZS1kZWZhdWx0LWZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJpdGVtXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgOnJlZj1cIidyb3cnK3Byb3BzLml0ZW0uaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHByb3BzLmhlYWRlcnNcIiBzdHlsZT1cIm1heC13aWR0aDogNTAwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiaXRlbS5saW5rID09PSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwibGlua19pdGVtXCIgdi1iaW5kPVwie3Byb3BzLCBpdGVtfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIEBjbGljaz1cInRhYmxlRWRpdEl0ZW0ocHJvcHMuaXRlbVtpdGVtLmlkID09PSB1bmRlZmluZWQgPyAnaWQnIDogaXRlbS5pZF0sIHByb3BzLml0ZW0sIGl0ZW0udmFsdWUpXCIgPnt7cHJvcHMuaXRlbVtpdGVtLnZhbHVlXX19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UtaWY9XCJpdGVtLmhpZGRlbiA9PT0gdHJ1ZSAmJiAocHJvcHMuaXRlbVtpdGVtLnZhbHVlXSB8fCBwcm9wcy5pdGVtLmhpZGRlbl9wcmVwZW5kKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cInByb3BzLml0ZW0uaGlkZGVuX3ByZXBlbmRcIj57e3Byb3BzLml0ZW0uaGlkZGVuX3ByZXBlbmR9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCIhcHJvcHMuaXRlbS5oaWRkZW5cIj57e3Byb3BzLml0ZW1baXRlbS52YWx1ZV19fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHYtaWY9XCJwcm9wcy5pdGVtW2l0ZW0udmFsdWVdXCIgQGNsaWNrPVwicHJvcHMuaXRlbS5oaWRkZW4gPSAhcHJvcHMuaXRlbS5oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Byb3BzLml0ZW0uaGlkZGVuID8gJ9Cf0L7QutCw0LfQsNGC0Ywg0YLQtdC60YHRgicgOiAn0KHQutGA0YvRgtGMINGC0LXQutGB0YInfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twcm9wcy5pdGVtW2l0ZW0udmFsdWVdICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuaXRlbVtpdGVtLnZhbHVlXSAhPT0gbnVsbCA/IHByb3BzLml0ZW1baXRlbS52YWx1ZV0gOiBlbXB0eVRleHR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3YtZGF0YS10YWJsZT5cbiAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDxzbG90IG5hbWU9XCJib2R5LmFwcGVuZFwiLz5cbiAgICAgICAgPHNsb3QgbmFtZT1cImJvZHkucGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiBkLWZsZXggcHQtMlwiPlxuICAgICAgICAgICAgICAgIDx2LXBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRhYmxlRmlsdGVyLnBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICA6bGVuZ3RoPVwicGFnZUNvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgOnRvdGFsLXZpc2libGU9XCI3XCJcbiAgICAgICAgICAgICAgICA+PC92LXBhZ2luYXRpb24+XG4gICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgICAgICAgPHYtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInRhYmxlRmlsdGVyLnBlcl9wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cInRhYmxlRmlsdGVyLnBlcl9wYWdlID0gcGFyc2VJbnQoJGV2ZW50LCAxMCkgPyBwYXJzZUludCgkZXZlbnQsIDEwKSA6IDFcIlxuICAgICAgICAgICAgICAgICAgICA6aXRlbXM9XCJbMjAsNDAsNjAsODAsMTAwXVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J/QvtC60LDQt9GL0LLQsNGC0Ywg0L/QvjpcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMTUwcHhcIlxuICAgICAgICAgICAgICAgID48L3Ytc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2xvdD5cbiAgICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbiAgICBpbXBvcnQgQXhpb3MgZnJvbSAnQC91dGlscy9heGlvcyc7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnQXBwRGF0YVRhYmxlJyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IEFycmF5LFxuICAgICAgICAgICAgaXRlbXNVcmw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dTZWxlY3Q6IEJvb2xlYW4sXG4gICAgICAgICAgICBmaXhlZENvbDogQm9vbGVhbixcbiAgICAgICAgICAgIGZpbHRlcjogT2JqZWN0LFxuICAgICAgICAgICAgc2VydmljZToge1xuICAgICAgICAgICAgICAgIHR5cGU6T2JqZWN0LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+ICh7fSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b0l0ZW06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAgKGl0ZW0pID0+IHtyZXR1cm4gaXRlbTt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVkaXRJdGVtOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKGlkKSA9PiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbXB0eUl0ZW1UZXh0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VDb3VudDogMCxcbiAgICAgICAgICAgICAgICB0YWJsZUl0ZW1zOiB0aGlzLml0ZW1zLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBbXSxcbiAgICAgICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgICAgICAgICB3aXRoU2VsZWN0IDogdGhpcy5zaG93U2VsZWN0LFxuICAgICAgICAgICAgICAgIHdpdGhGaXhlZDogdGhpcy5maXhlZENvbCxcbiAgICAgICAgICAgICAgICB0YWJsZUZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgICAgICAgICAgcGVyX3BhZ2U6IDIwLFxuICAgICAgICAgICAgICAgICAgICBzb3J0Qnk6ICdpZCcsXG4gICAgICAgICAgICAgICAgICAgIHNvcnREZXNjIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY3JvbGxSdW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dTY3JvbGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRhYmxlT3B0aW9uczoge30sXG4gICAgICAgICAgICAgICAgdGFibGVFZGl0SXRlbTogdGhpcy5lZGl0SXRlbSxcbiAgICAgICAgICAgICAgICBlbXB0eVRleHQ6IHRoaXMuZW1wdHlJdGVtVGV4dCxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldEZpeGVkQ29sdW1uTGVmdCAoaW5keCA9IHRoaXMuaGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJzXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGhlYWRlciwgaSkgPT4gaSA8IGluZHggJiYgaGVhZGVyLmZpeGVkID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChjdXJyZW50VmFsdWUsIGhlYWRlcikgPT4gY3VycmVudFZhbHVlICsgKHBhcnNlSW50KGhlYWRlci53aWR0aCkgfHwgMCksIDApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0Rml4ZWRIZWFkZXJzKHJldmVyc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJzXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGhlYWRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFyZXZlcnNlID8gaGVhZGVyLmZpeGVkID09PSB0cnVlIDogIShoZWFkZXIuZml4ZWQgIT09IHVuZGVmaW5lZCAmJiBoZWFkZXIuZml4ZWQgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc3luYyBsb2FkSXRlbXMoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5pdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNvdW50ID0gTWF0aC5mbG9vcih0aGlzLnRvdGFsIC8gdGhpcy50YWJsZUZpbHRlci5wZXJfcGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICsgKHRoaXMudG90YWwgPT09IHRoaXMudGFibGVGaWx0ZXIucGVyX3BhZ2UgPyAwIDogMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVWaWV3Tm9ybWFsaXplKClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAgKHRoaXMuaXRlbXNVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuc2VydmljZSAmJiB0aGlzLnNlcnZpY2UucHJlcGFyZVBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnNlcnZpY2UucHJlcGFyZVBhcmFtcyh0aGlzLnRhYmxlRmlsdGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnRhYmxlRmlsdGVyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uTG9hZGluZycpXG4gICAgICAgICAgICAgICAgICAgIEF4aW9zLmdldCh0aGlzLml0ZW1zVXJsLCB7cGFyYW1zfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVJdGVtcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYXAodGhpcy50b0l0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWwgPSByZXNwb25zZS5kYXRhLnRvdGFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNvdW50ID0gcmVzcG9uc2UuZGF0YS5sYXN0X3BhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVZpZXdOb3JtYWxpemUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkJywgcmVzcG9uc2UuZGF0YS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWRpbmcnKVxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5nZXRBbGwodGhpcy50YWJsZUZpbHRlcilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlSXRlbXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFwKHRoaXMudG9JdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWwgPSByZXNwb25zZS5kYXRhLnRvdGFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ291bnQgPSByZXNwb25zZS5kYXRhLmxhc3RfcGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVWaWV3Tm9ybWFsaXplKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWQnLCByZXNwb25zZS5kYXRhLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkJylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsVG8oZWxlbWVudCwgc2Nyb2xsUGl4ZWxzLCBkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFBvcyA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICAvLyBDb25kaXRpb24gdG8gY2hlY2sgaWYgc2Nyb2xsaW5nIGlzIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgaWYgKCAhKCAoc2Nyb2xsUG9zID09PSAwIHx8IHNjcm9sbFBpeGVscyA+IDApICYmIChlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsUG9zID09PSBlbGVtZW50LnNjcm9sbFdpZHRoIHx8IHNjcm9sbFBpeGVscyA8IDApKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgc3RhcnQgdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vd1wiIGluIHdpbmRvdy5wZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcGVyZm9ybWFuY2Uubm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsID0gKHRpbWVzdGFtcCkgID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2FsY3VsYXRlIHRoZSB0aW1lZWxhcHNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZUVsYXBzZWQgPSB0aW1lc3RhbXAgLSBzdGFydFRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NhbGN1bGF0ZSBwcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBkdXJhdGlvbiA/IE1hdGgubWluKHRpbWVFbGFwc2VkIC8gZHVyYXRpb24sIDEpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vU2V0IHRoZSBzY3JvbGxlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IChwcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2Nyb2xsUG9zICsgc2Nyb2xsUGl4ZWxzICogcHJvZ3Jlc3MgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArIDEwICogc2Nyb2xsUGl4ZWxzIC8oTWF0aC5hYnMoc2Nyb2xsUGl4ZWxzKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBpZiBlbGFwc2VkIHRpbWUgaXMgbGVzcyB0aGVuIGR1cmF0aW9uIHRoZW4gY2FsbCB0aGUgcmVxdWVzdEFuaW1hdGlvbiwgb3RoZXJ3aXNlIGV4aXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFJ1bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vUmVxdWVzdCBmb3IgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9DYWxsIHJlcXVlc3RBbmltYXRpb25GcmFtZSBvbiBzY3JvbGwgZnVuY3Rpb24gZmlyc3QgdGltZVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU2Nyb2xsTGVmdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFJ1biA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh0aGlzLiRyZWZzLnRhYmxlLiRlbC5jaGlsZE5vZGVzWzBdLCAtdGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXS5zY3JvbGxXaWR0aCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25TY3JvbGxSaWdodCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFJ1biA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh0aGlzLiRyZWZzLnRhYmxlLiRlbC5jaGlsZE5vZGVzWzBdLCB0aGlzLiRyZWZzLnRhYmxlLiRlbC5jaGlsZE5vZGVzWzBdLnNjcm9sbFdpZHRoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJsZVZpZXdOb3JtYWxpemUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnMuZml4ZWRUYWJsZSkgT2JqZWN0LmtleXModGhpcy4kcmVmcykuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodi5zZWFyY2goJ3JvdycpID09PSAwICYmIHRoaXMuJHJlZnNbJ3NldHRpbmdzJysgdl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnNbJ3NldHRpbmdzJysgdl0uc3R5bGUuaGVpZ2h0ID0gKHRoaXMuJHJlZnNbdl0uY2xpZW50SGVpZ2h0IC0gMSkrJ3B4JzsgLy9ib290b20gYm9yZGVyIG9uIGV2ZXJ5IHRhYmxlIHJvd1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmRlYm91bmNlZExvYWRJdGVtcyA9IF8uZGVib3VuY2UodGhpcy5sb2FkSXRlbXMsIDUwMClcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHRhYmxlRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkTG9hZEl0ZW1zKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJsZU9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJsZU9wdGlvbnMuc29ydEJ5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUZpbHRlci5zb3J0QnkgPSB0aGlzLnRhYmxlT3B0aW9ucy5zb3J0QnlbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFibGVPcHRpb25zLnNvcnREZXNjLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUZpbHRlci5zb3J0RGVzYyA9IHRoaXMudGFibGVPcHRpb25zLnNvcnREZXNjWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc29ydEJ5LCBzb3J0RGVzYyB9ID0gdGhpcy50YWJsZUZpbHRlclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvblNvcnQnLCB7IHNvcnRCeSwgc29ydERlc2MgfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGVJdGVtczoge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Njcm9sbCA9IHRoaXMuJHJlZnMudGFibGUuJGVsLmNoaWxkTm9kZXNbMF0uc2Nyb2xsV2lkdGggPiB0aGlzLiRyZWZzLnRhYmxlLiRlbC5zY3JvbGxXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZXA6dHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUZpbHRlciA9IHsuLi50aGlzLnRhYmxlRmlsdGVyLCAuLi50aGlzLmZpbHRlcn07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLnBhZ2UgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWVwOnRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUl0ZW1zID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkSXRlbXMoKVxuICAgICAgICAgICAgdGhpcy4kd2F0Y2goXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy50YWJsZS5pdGVtc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlVmlld05vcm1hbGl6ZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgdGFibGUge1xuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgdGguZml4ZWRDb2x1bW4sIHRkLmZpeGVkQ29sdW1uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5maXhlZENvbHVtbiAgIHRoOmxhc3QtY2hpbGR7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xuICAgIH1cbiAgICBkaXYgPiAuZml4ZWRDb2x1bW46bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG4gICAgZGl2ID4gLmNvbDpudGgtY2hpbGQoMikge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250YWluZXIgY2xhc3M9XCJjb3ZlclwiPlxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVwiJ9Ch0L/QuNGB0L7QuiDRgNCw0LnQvtC90L7QsidcIj5cbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDxyb3V0ZXItbGluayA6dG89XCInL3JlZ2lvbnMvJyArICRyb3V0ZS5wYXJhbXMucmVnaW9uICsgJy8wP2xldmVsPScgKyBsZXZlbFwiIGNsYXNzPVwibWwtNFwiPtCU0L7QsdCw0LLQuNGC0YwgKzwvcm91dGVyLWxpbms+XG4gICAgICAgIDx2LWNhcmQgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1zcGFjZS1iZXR3ZWVuIG1iLTZcIiBmbGF0IHRpbGU+XG4gICAgICAgICAgICA8QXBwRGF0YVRhYmxlXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiICFub3RGb3VuZFwiXG4gICAgICAgICAgICAgICAgOmhlYWRlcnM9XCJoZWFkZXJzLnJlZ2lvbnNcIlxuICAgICAgICAgICAgICAgIDpzaG93U2VsZWN0PVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIDpmaXhlZENvbD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICA6ZWRpdEl0ZW09XCJzaG93SXRlbVwiXG4gICAgICAgICAgICAgICAgOmVtcHR5SXRlbVRleHQ9XCInLSdcIlxuICAgICAgICAgICAgICAgIDppdGVtc1VybD1cImRpc3RyaWN0c0l0ZW1zVXJsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvQXBwRGF0YVRhYmxlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJub3RGb3VuZFwiPlxuICAgICAgICAgICAgICAgIDx2LWFsZXJ0IHN0eWxlPVwibWFyZ2luLXRvcDogMjBweFwiIGNvbG9yZWQtYm9yZGVyIHR5cGU9XCJpbmZvXCIgZWxldmF0aW9uPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICDQn9C+INCS0LDRiNC10LzRgyDQt9Cw0L/RgNC+0YHRgyDQvdC40YfQtdCz0L4g0L3QtSDQvdCw0LnQtNC10L3Qvi4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0LjQt9C80LXQvdC40YLRjCDQv9Cw0YDQsNC80LXRgtGA0Ysg0L/QvtC40YHQutCwLlxuICAgICAgICAgICAgICAgIDwvdi1hbGVydD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdi1jYXJkPlxuICAgIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEFwcERhdGFUYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBEYXRhVGFibGVcIjtcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdEaXN0cmljdHMnLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBBcHBEYXRhVGFibGVcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICduYW1lJywgdGV4dDogJ9Cg0LDQudC+0L0nLCBsaW5rOiB0cnVlLCBpZDogJ2NvZGUnIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdm0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBsb2FkaW5nKGEsIGIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWEgJiYgYikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXIubmFtZS5sZW5ndGggPiAwICYmIHRoaXMuY291cnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdEZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBjcmVhdGVkKCkge1xuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgZGlzdHJpY3RzSXRlbXNVcmwoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcvZGlzdHJpY3Q/bGV2ZWw9JyArIHRoaXMubGV2ZWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZXZlbCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kcm91dGUucXVlcnkubGV2ZWwpIHJldHVybiAgdGhpcy4kcm91dGUucXVlcnkubGV2ZWw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFiZWwoKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKHRoaXMuJHJvdXRlLnF1ZXJ5LmxldmVsKXtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gJ9Ch0LXQu9GM0YHQutC+0LUg0L/QvtGB0LXQu9C10L3QuNC1J1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAn0KDQsNC50L7QvSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzaG93SXRlbShpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ3JlZ2lvbi1kaXN0cmljdHMnLCBwYXJhbXM6IHsgY29kZTogaWQgfSB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG50YWJsZSB7XFxuICAgIHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50ICFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiAtbW96LW1heC1jb250ZW50ICFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudCAhaW1wb3J0YW50O1xcbn1cXG50aC5maXhlZENvbHVtbiwgdGQuZml4ZWRDb2x1bW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZpeGVkQ29sdW1uICAgdGg6bGFzdC1jaGlsZHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XFxufVxcbmRpdiA+IC5maXhlZENvbHVtbjpudGgtY2hpbGQoMSkge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXG5kaXYgPiAuY29sOm50aC1jaGlsZCgyKSB7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBaVdBO0lBQ0EscUNBQUE7SUFBQSxrQ0FBQTtJQUFBLDZCQUFBO0FBQ0E7QUFDQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0FBQ0E7QUFDQTtJQUNBLHVCQUFBO0FBQ0E7QUFDQTtJQUNBLGdCQUFBO0FBQ0E7QUFDQTtJQUNBLGVBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDx2LWNvbnRhaW5lciA+XFxuICAgICAgICA8c2xvdCBuYW1lPVxcXCJib2R5LnByZXBlbmRcXFwiLz5cXG4gICAgICAgIDx2LXJvd1xcbiAgICAgICAgICAgIHN0eWxlPVxcXCJmbGV4LXdyYXA6IG5vd3JhcDtcXFwiPlxcbiAgICAgICAgICAgIDx2LWNvbCB2LWlmPVxcXCJ3aXRoRml4ZWQgJiYgZ2V0Rml4ZWRIZWFkZXJzKGZhbHNlKS5sZW5ndGg+MFxcXCJcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZpeGVkQ29sdW1uIGZsZXgtZ3Jvdy0wIGZsZXgtc2hyaW5rLTBcXFwiPlxcbiAgICAgICAgICAgICAgICA8di1kYXRhLXRhYmxlIDpoZWFkZXJzPVxcXCJnZXRGaXhlZEhlYWRlcnMoZmFsc2UpXFxcIiA6aXRlbXM9XFxcInRhYmxlSXRlbXNcXFwiIGl0ZW0ta2V5PVxcXCJpZFxcXCIgdi1tb2RlbD1cXFwic2VsZWN0ZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBhZ2Uuc3luYz1cXFwidGFibGVGaWx0ZXIucGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXMtcGVyLXBhZ2U9XFxcInRhYmxlRmlsdGVyLnBlcl9wYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwYWdlLWNvdW50PVxcXCJwYWdlQ291bnQgPSAkZXZlbnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlcnZlci1pdGVtcy1sZW5ndGg9XFxcInRvdGFsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtZGVmYXVsdC1mb290ZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uOmlucHV0PVxcXCIkZW1pdCgnaW5wdXQnKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucy5zeW5jPVxcXCJ0YWJsZU9wdGlvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNob3ctc2VsZWN0PVxcXCJ3aXRoU2VsZWN0XFxcIiBzdHlsZT1cXFwid2lkdGg6IG1heC1jb250ZW50XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuby1kYXRhLXRleHQ9XFxcIifQndC10YIg0LTQsNC90L3Ri9GFJ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bm8tcmVzdWx0cy10ZXh0PVxcXCIn0J3QtdGCINC00LDQvdC90YvRhSdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVxcXCJmaXhlZFRhYmxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nPVxcXCJsb2FkaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmctdGV4dD1cXFwi0JfQsNCz0YDRg9C30LrQsC4uLiDQn9C+0LbQsNC70YPQudGB0YLQsCwg0L/QvtC00L7QttC00LjRgtC1XFxcIlxcbiAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmhlYWRlci5zZXR0aW5ncz1cXFwie2hlYWRlcn1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cXFwiZC1mbGV4IGFsaWduLWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImhlYWRlci1zZXR0aW5ncy1tZW51XFxcIiB2LWJpbmQ6aGVhZGVyPVxcXCJoZWFkZXJcXFwiPjwvc2xvdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5zZXR0aW5ncz1cXFwie2l0ZW19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1tZW51IG9mZnNldC15PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cXFwieyBvbiwgYXR0cnMgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQgIDpyZWY9XFxcIidzZXR0aW5nc3JvdycraXRlbS5pZFxcXCIgY2xhc3M9XFxcIm1hLTAgcGEtMCBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jZW50ZXJcXFwiID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInByaW1hcnlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVxcXCJhdHRyc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbj1cXFwib25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gc21hbGw+bWRpLW1lbnU8L3YtaWNvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiaXRlbS1zZXR0aW5ncy1tZW51XFxcIiB2LWJpbmQ6aXRlbT1cXFwiaXRlbVxcXCI+PC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1tZW51PlxcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5tYXJrPVxcXCJ7aXRlbX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRvb2x0aXAgYm90dG9tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cXFwieyBvbiwgYXR0cnMgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaXRlbS5jb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XFxcImF0dHJzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb249XFxcIm9uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVxcXCJ7Y29sb3I6IGl0ZW0uY29sb3IuY29sb3J9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPm1kaS1jaGVja2JveC1ibGFuay1jaXJjbGU8L3YtaWNvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tpdGVtLmNvbG9yLnRleHR9fSAo0J/QvtGB0LvQtdC00L3QtdC1INC+0LHQvdC+0LLQu9C10L3QuNC1Ont7aXRlbS5maW5pc2hlZF9hdH19KTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbHRpcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0ubWFya319XFxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICA8L3YtZGF0YS10YWJsZT5cXG5cXG4gICAgICAgICAgICA8L3YtY29sPlxcbiAgICAgICAgICAgIDx2LWNvbCBzdHlsZT1cXFwib3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6IGJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlOyBcXFwiXFxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmbGV4LWdyb3ctMSBmbGV4LXNocmluay0xXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJ0YWJsZUl0ZW1zICYmIHRhYmxlSXRlbXMubGVuZ3RoID4gMCAmJiBzaG93U2Nyb2xsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWNoaXAgY2xhc3M9XFxcImFwcC10YWJsZS1zY3JvbGwtbGVmdFxcXCIgQG1vdXNlb3Zlcj1cXFwib25TY3JvbGxMZWZ0XFxcIiBAbW91c2VvdXQ9XFxcInNjcm9sbFJ1biA9IGZhbHNlO1xcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtY2hpcCBjbGFzcz1cXFwiYXBwLXRhYmxlLXNjcm9sbC1sZWZ0IGFwcC10YWJsZS1zY3JvbGwtcmlnaHRcXFwiICBAbW91c2VvdmVyPVxcXCJvblNjcm9sbFJpZ2h0XFxcIiAgQG1vdXNlb3V0PVxcXCJzY3JvbGxSdW4gPSBmYWxzZTtcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDx2LWRhdGEtdGFibGUgOmhlYWRlcnM9XFxcIndpdGhGaXhlZCA/IGdldEZpeGVkSGVhZGVycyh0cnVlKSA6IHRhYmxlSGVhZGVyc1xcXCIgOml0ZW1zPVxcXCJ0YWJsZUl0ZW1zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwYWdlLnN5bmM9XFxcInRhYmxlRmlsdGVyLnBhZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zLXBlci1wYWdlPVxcXCJ0YWJsZUZpbHRlci5wZXJfcGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcGFnZS1jb3VudD1cXFwicGFnZUNvdW50ID0gJGV2ZW50XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zLnN5bmM9XFxcInRhYmxlT3B0aW9uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2VydmVyLWl0ZW1zLWxlbmd0aD1cXFwidG90YWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5vLWRhdGEtdGV4dD1cXFwid2l0aFNlbGVjdCA/ICcnIDogJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XFxcIndpdGhTZWxlY3QgPyAnJyA6ICfQndC10YIg0LTQsNC90L3Ri9GFJ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XFxcInRhYmxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nPVxcXCJsb2FkaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmctdGV4dD1cXFwi0JfQsNCz0YDRg9C30LrQsC4uLiDQn9C+0LbQsNC70YPQudGB0YLQsCwg0L/QvtC00L7QttC00LjRgtC1XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtZGVmYXVsdC1mb290ZXI+XFxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiaXRlbVxcXCIgc2xvdC1zY29wZT1cXFwicHJvcHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciA6cmVmPVxcXCIncm93Jytwcm9wcy5pdGVtLmlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHYtZm9yPVxcXCIoaXRlbSwgaW5kZXgpIGluIHByb3BzLmhlYWRlcnNcXFwiIHN0eWxlPVxcXCJtYXgtd2lkdGg6IDUwMHB4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiaXRlbS5saW5rID09PSB0cnVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJsaW5rX2l0ZW1cXFwiIHYtYmluZD1cXFwie3Byb3BzLCBpdGVtfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIEBjbGljaz1cXFwidGFibGVFZGl0SXRlbShwcm9wcy5pdGVtW2l0ZW0uaWQgPT09IHVuZGVmaW5lZCA/ICdpZCcgOiBpdGVtLmlkXSwgcHJvcHMuaXRlbSwgaXRlbS52YWx1ZSlcXFwiID57e3Byb3BzLml0ZW1baXRlbS52YWx1ZV19fTwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVxcXCJpdGVtLmhpZGRlbiA9PT0gdHJ1ZSAmJiAocHJvcHMuaXRlbVtpdGVtLnZhbHVlXSB8fCBwcm9wcy5pdGVtLmhpZGRlbl9wcmVwZW5kKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cXFwicHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZFxcXCI+e3twcm9wcy5pdGVtLmhpZGRlbl9wcmVwZW5kfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cXFwiIXByb3BzLml0ZW0uaGlkZGVuXFxcIj57e3Byb3BzLml0ZW1baXRlbS52YWx1ZV19fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB2LWlmPVxcXCJwcm9wcy5pdGVtW2l0ZW0udmFsdWVdXFxcIiBAY2xpY2s9XFxcInByb3BzLml0ZW0uaGlkZGVuID0gIXByb3BzLml0ZW0uaGlkZGVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twcm9wcy5pdGVtLmhpZGRlbiA/ICfQn9C+0LrQsNC30LDRgtGMINGC0LXQutGB0YInIDogJ9Ch0LrRgNGL0YLRjCDRgtC10LrRgdGCJ319XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Byb3BzLml0ZW1baXRlbS52YWx1ZV0gIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5pdGVtW2l0ZW0udmFsdWVdICE9PSBudWxsID8gcHJvcHMuaXRlbVtpdGVtLnZhbHVlXSA6IGVtcHR5VGV4dH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPC92LWRhdGEtdGFibGU+XFxuICAgICAgICAgICAgPC92LWNvbD5cXG4gICAgICAgIDwvdi1yb3c+XFxuICAgICAgICA8c2xvdCBuYW1lPVxcXCJib2R5LmFwcGVuZFxcXCIvPlxcbiAgICAgICAgPHNsb3QgbmFtZT1cXFwiYm9keS5wYWdpbmF0aW9uXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCIgZC1mbGV4IHB0LTJcXFwiPlxcbiAgICAgICAgICAgICAgICA8di1wYWdpbmF0aW9uXFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0YWJsZUZpbHRlci5wYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cXFwicGFnZUNvdW50XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOnRvdGFsLXZpc2libGU9XFxcIjdcXFwiXFxuICAgICAgICAgICAgICAgID48L3YtcGFnaW5hdGlvbj5cXG4gICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxuICAgICAgICAgICAgICAgIDx2LXNlbGVjdFxcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVxcXCJ0YWJsZUZpbHRlci5wZXJfcGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XFxcInRhYmxlRmlsdGVyLnBlcl9wYWdlID0gcGFyc2VJbnQoJGV2ZW50LCAxMCkgPyBwYXJzZUludCgkZXZlbnQsIDEwKSA6IDFcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6aXRlbXM9XFxcIlsyMCw0MCw2MCw4MCwxMDBdXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcItCf0L7QutCw0LfRi9Cy0LDRgtGMINC/0L46XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1heC13aWR0aDogMTUwcHhcXFwiXFxuICAgICAgICAgICAgICAgID48L3Ytc2VsZWN0PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9zbG90PlxcbiAgICA8L3YtY29udGFpbmVyPlxcbjwvdGVtcGxhdGU+XFxuPHNjcmlwdD5cXG4gICAgaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcXG4gICAgaW1wb3J0IEF4aW9zIGZyb20gJ0AvdXRpbHMvYXhpb3MnO1xcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICBuYW1lOiAnQXBwRGF0YVRhYmxlJyxcXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgaGVhZGVyczogQXJyYXksXFxuICAgICAgICAgICAgaXRlbXNVcmw6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTpTdHJpbmcsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBpdGVtczoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBzaG93U2VsZWN0OiBCb29sZWFuLFxcbiAgICAgICAgICAgIGZpeGVkQ29sOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGZpbHRlcjogT2JqZWN0LFxcbiAgICAgICAgICAgIHNlcnZpY2U6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTpPYmplY3QsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+ICh7fSlcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHRvSXRlbToge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogIChpdGVtKSA9PiB7cmV0dXJuIGl0ZW07fSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGVkaXRJdGVtOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoaWQpID0+IHt9LFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZW1wdHlJdGVtVGV4dDoge1xcbiAgICAgICAgICAgICAgICB0eXBlOlN0cmluZyxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJycsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgcGFnZUNvdW50OiAwLFxcbiAgICAgICAgICAgICAgICB0YWJsZUl0ZW1zOiB0aGlzLml0ZW1zLFxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogW10sXFxuICAgICAgICAgICAgICAgIHRvdGFsOiAwLFxcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlcnM6IHRoaXMuaGVhZGVycyxcXG4gICAgICAgICAgICAgICAgd2l0aFNlbGVjdCA6IHRoaXMuc2hvd1NlbGVjdCxcXG4gICAgICAgICAgICAgICAgd2l0aEZpeGVkOiB0aGlzLmZpeGVkQ29sLFxcbiAgICAgICAgICAgICAgICB0YWJsZUZpbHRlcjoge1xcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5maWx0ZXIsXFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiAxLFxcbiAgICAgICAgICAgICAgICAgICAgcGVyX3BhZ2U6IDIwLFxcbiAgICAgICAgICAgICAgICAgICAgc29ydEJ5OiAnaWQnLFxcbiAgICAgICAgICAgICAgICAgICAgc29ydERlc2MgOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc2Nyb2xsUnVuOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgc2hvd1Njcm9sbDogZmFsc2UsXFxuICAgICAgICAgICAgICAgIHRhYmxlT3B0aW9uczoge30sXFxuICAgICAgICAgICAgICAgIHRhYmxlRWRpdEl0ZW06IHRoaXMuZWRpdEl0ZW0sXFxuICAgICAgICAgICAgICAgIGVtcHR5VGV4dDogdGhpcy5lbXB0eUl0ZW1UZXh0LFxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgfSxcXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICBnZXRGaXhlZENvbHVtbkxlZnQgKGluZHggPSB0aGlzLmhlYWRlcnMubGVuZ3RoKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhlYWRlcnNcXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGhlYWRlciwgaSkgPT4gaSA8IGluZHggJiYgaGVhZGVyLmZpeGVkID09PSB0cnVlKVxcbiAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoY3VycmVudFZhbHVlLCBoZWFkZXIpID0+IGN1cnJlbnRWYWx1ZSArIChwYXJzZUludChoZWFkZXIud2lkdGgpIHx8IDApLCAwKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZ2V0Rml4ZWRIZWFkZXJzKHJldmVyc2UpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyc1xcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoaGVhZGVyKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFyZXZlcnNlID8gaGVhZGVyLmZpeGVkID09PSB0cnVlIDogIShoZWFkZXIuZml4ZWQgIT09IHVuZGVmaW5lZCAmJiBoZWFkZXIuZml4ZWQgIT09IGZhbHNlKVxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBhc3luYyBsb2FkSXRlbXMoKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zICE9PSB1bmRlZmluZWQpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWwgPSB0aGlzLml0ZW1zLmxlbmd0aDtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNvdW50ID0gTWF0aC5mbG9vcih0aGlzLnRvdGFsIC8gdGhpcy50YWJsZUZpbHRlci5wZXJfcGFnZSlcXG4gICAgICAgICAgICAgICAgICAgICAgICArICh0aGlzLnRvdGFsID09PSB0aGlzLnRhYmxlRmlsdGVyLnBlcl9wYWdlID8gMCA6IDEpO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZVZpZXdOb3JtYWxpemUoKVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGlmICAodGhpcy5pdGVtc1VybCkge1xcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuc2VydmljZSAmJiB0aGlzLnNlcnZpY2UucHJlcGFyZVBhcmFtc1xcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zZXJ2aWNlLnByZXBhcmVQYXJhbXModGhpcy50YWJsZUZpbHRlcilcXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMudGFibGVGaWx0ZXI7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWRpbmcnKVxcbiAgICAgICAgICAgICAgICAgICAgQXhpb3MuZ2V0KHRoaXMuaXRlbXNVcmwsIHtwYXJhbXN9KVxcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlSXRlbXMgPSByZXNwb25zZS5kYXRhLmRhdGEubWFwKHRoaXMudG9JdGVtKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbCA9IHJlc3BvbnNlLmRhdGEudG90YWw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNvdW50ID0gcmVzcG9uc2UuZGF0YS5sYXN0X3BhZ2U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVWaWV3Tm9ybWFsaXplKClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkJywgcmVzcG9uc2UuZGF0YS5kYXRhKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWQnKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25Mb2FkaW5nJylcXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmdldEFsbCh0aGlzLnRhYmxlRmlsdGVyKVxcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUl0ZW1zID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hcCh0aGlzLnRvSXRlbSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbCA9IHJlc3BvbnNlLmRhdGEudG90YWw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ291bnQgPSByZXNwb25zZS5kYXRhLmxhc3RfcGFnZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlVmlld05vcm1hbGl6ZSgpXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWQnLCByZXNwb25zZS5kYXRhLmRhdGEpXFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbkxvYWQnKVxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBzY3JvbGxUbyhlbGVtZW50LCBzY3JvbGxQaXhlbHMsIGR1cmF0aW9uKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFBvcyA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcXG4gICAgICAgICAgICAgICAgLy8gQ29uZGl0aW9uIHRvIGNoZWNrIGlmIHNjcm9sbGluZyBpcyByZXF1aXJlZFxcbiAgICAgICAgICAgICAgICBpZiAoICEoIChzY3JvbGxQb3MgPT09IDAgfHwgc2Nyb2xsUGl4ZWxzID4gMCkgJiYgKGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxQb3MgPT09IGVsZW1lbnQuc2Nyb2xsV2lkdGggfHwgc2Nyb2xsUGl4ZWxzIDwgMCkpKVxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHN0YXJ0IHRpbWVzdGFtcFxcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID1cXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwibm93XFxcIiBpbiB3aW5kb3cucGVyZm9ybWFuY2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwZXJmb3JtYW5jZS5ub3coKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbCA9ICh0aW1lc3RhbXApICA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9DYWxjdWxhdGUgdGhlIHRpbWVlbGFwc2VkXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZUVsYXBzZWQgPSB0aW1lc3RhbXAgLSBzdGFydFRpbWU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9DYWxjdWxhdGUgcHJvZ3Jlc3NcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGR1cmF0aW9uID8gTWF0aC5taW4odGltZUVsYXBzZWQgLyBkdXJhdGlvbiwgMSkgOiBudWxsO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vU2V0IHRoZSBzY3JvbGxlZnRcXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAocHJvZ3Jlc3NcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzY3JvbGxQb3MgKyBzY3JvbGxQaXhlbHMgKiBwcm9ncmVzcyA6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArIDEwICogc2Nyb2xsUGl4ZWxzIC8oTWF0aC5hYnMoc2Nyb2xsUGl4ZWxzKSkpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgZWxhcHNlZCB0aW1lIGlzIGxlc3MgdGhlbiBkdXJhdGlvbiB0aGVuIGNhbGwgdGhlIHJlcXVlc3RBbmltYXRpb24sIG90aGVyd2lzZSBleGl0XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsUnVuKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vUmVxdWVzdCBmb3IgYW5pbWF0aW9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgLy9DYWxsIHJlcXVlc3RBbmltYXRpb25GcmFtZSBvbiBzY3JvbGwgZnVuY3Rpb24gZmlyc3QgdGltZVxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGwpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBvblNjcm9sbExlZnQoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUnVuID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh0aGlzLiRyZWZzLnRhYmxlLiRlbC5jaGlsZE5vZGVzWzBdLCAtdGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXS5zY3JvbGxXaWR0aCk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBvblNjcm9sbFJpZ2h0KCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFJ1biA9IHRydWU7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXSwgdGhpcy4kcmVmcy50YWJsZS4kZWwuY2hpbGROb2Rlc1swXS5zY3JvbGxXaWR0aCk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB0YWJsZVZpZXdOb3JtYWxpemUoKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmZpeGVkVGFibGUpIE9iamVjdC5rZXlzKHRoaXMuJHJlZnMpLmZvckVhY2goKHYpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh2LnNlYXJjaCgncm93JykgPT09IDAgJiYgdGhpcy4kcmVmc1snc2V0dGluZ3MnKyB2XSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnNbJ3NldHRpbmdzJysgdl0uc3R5bGUuaGVpZ2h0ID0gKHRoaXMuJHJlZnNbdl0uY2xpZW50SGVpZ2h0IC0gMSkrJ3B4JzsgLy9ib290b20gYm9yZGVyIG9uIGV2ZXJ5IHRhYmxlIHJvd1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcXG4gICAgICAgICAgICB0aGlzLmRlYm91bmNlZExvYWRJdGVtcyA9IF8uZGVib3VuY2UodGhpcy5sb2FkSXRlbXMsIDUwMClcXG4gICAgICAgIH0sXFxuICAgICAgICB3YXRjaDoge1xcbiAgICAgICAgICAgIHRhYmxlRmlsdGVyOiB7XFxuICAgICAgICAgICAgICAgIGhhbmRsZXIgKCkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRMb2FkSXRlbXMoKVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB0YWJsZU9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgaGFuZGxlcigpIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlT3B0aW9ucy5zb3J0QnkubGVuZ3RoID09PSAxKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUZpbHRlci5zb3J0QnkgPSB0aGlzLnRhYmxlT3B0aW9ucy5zb3J0QnlbMF07XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJsZU9wdGlvbnMuc29ydERlc2MubGVuZ3RoID09PSAxKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUZpbHRlci5zb3J0RGVzYyA9IHRoaXMudGFibGVPcHRpb25zLnNvcnREZXNjWzBdO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzb3J0QnksIHNvcnREZXNjIH0gPSB0aGlzLnRhYmxlRmlsdGVyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvblNvcnQnLCB7IHNvcnRCeSwgc29ydERlc2MgfSlcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZGVlcDogdHJ1ZSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHRhYmxlSXRlbXM6IHtcXG4gICAgICAgICAgICAgICAgaGFuZGxlcigpIHtcXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTY3JvbGwgPSB0aGlzLiRyZWZzLnRhYmxlLiRlbC5jaGlsZE5vZGVzWzBdLnNjcm9sbFdpZHRoID4gdGhpcy4kcmVmcy50YWJsZS4kZWwuc2Nyb2xsV2lkdGg7XFxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBkZWVwOnRydWUsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBmaWx0ZXI6IHtcXG4gICAgICAgICAgICAgICAgaGFuZGxlcih2YWx1ZSkge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUZpbHRlciA9IHsuLi50aGlzLnRhYmxlRmlsdGVyLCAuLi50aGlzLmZpbHRlcn07XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUZpbHRlci5wYWdlID0gMTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZGVlcDp0cnVlXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBpdGVtczoge1xcbiAgICAgICAgICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlSXRlbXMgPSB2YWx1ZTtcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZGVlcDogdHJ1ZSxcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgbW91bnRlZCgpIHtcXG4gICAgICAgICAgICB0aGlzLmxvYWRJdGVtcygpXFxuICAgICAgICAgICAgdGhpcy4kd2F0Y2goXFxuICAgICAgICAgICAgICAgICgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLnRhYmxlLml0ZW1zXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICh2YWwpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVWaWV3Tm9ybWFsaXplKClcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIClcXG4gICAgICAgIH0sXFxuICAgIH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuICAgIHRhYmxlIHtcXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudCAhaW1wb3J0YW50O1xcbiAgICB9XFxuICAgIHRoLmZpeGVkQ29sdW1uLCB0ZC5maXhlZENvbHVtbiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5maXhlZENvbHVtbiAgIHRoOmxhc3QtY2hpbGR7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXG4gICAgfVxcbiAgICBkaXYgPiAuZml4ZWRDb2x1bW46bnRoLWNoaWxkKDEpIHtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIH1cXG4gICAgZGl2ID4gLmNvbDpudGgtY2hpbGQoMikge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICB9XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxOTUzYjhlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1MTk1M2I4ZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MTk1M2I4ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MTk1M2I4ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTk1M2I4ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MTk1M2I4ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXBwRGF0YVRhYmxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGlzdHJpY3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05YTYwODYyOCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EaXN0cmljdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EaXN0cmljdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5YTYwODYyOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzlhNjA4NjI4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzlhNjA4NjI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzlhNjA4NjI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EaXN0cmljdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhNjA4NjI4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzlhNjA4NjI4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvRGlzdHJpY3RzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXN0cmljdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGlzdHJpY3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIFtcbiAgICAgIF92bS5fdChcImJvZHkucHJlcGVuZFwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwiZmxleC13cmFwXCI6IFwibm93cmFwXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLndpdGhGaXhlZCAmJiBfdm0uZ2V0Rml4ZWRIZWFkZXJzKGZhbHNlKS5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZpeGVkQ29sdW1uIGZsZXgtZ3Jvdy0wIGZsZXgtc2hyaW5rLTBcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1kYXRhLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcImZpeGVkVGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwibWF4LWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5nZXRGaXhlZEhlYWRlcnMoZmFsc2UpLFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0udGFibGVJdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0ta2V5XCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWdlOiBfdm0udGFibGVGaWx0ZXIucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zLXBlci1wYWdlXCI6IF92bS50YWJsZUZpbHRlci5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNlcnZlci1pdGVtcy1sZW5ndGhcIjogX3ZtLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaGlkZS1kZWZhdWx0LWZvb3RlclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS50YWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaG93LXNlbGVjdFwiOiBfdm0ud2l0aFNlbGVjdCxcbiAgICAgICAgICAgICAgICAgICAgICBcIm5vLWRhdGEtdGV4dFwiOiBcItCd0LXRgiDQtNCw0L3QvdGL0YVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIm5vLXJlc3VsdHMtdGV4dFwiOiBcItCd0LXRgiDQtNCw0L3QvdGL0YVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICBcImxvYWRpbmctdGV4dFwiOiBcItCX0LDQs9GA0YPQt9C60LAuLi4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINC/0L7QtNC+0LbQtNC40YLQtVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cGFnZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0udGFibGVGaWx0ZXIsIFwicGFnZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcInBhZ2UtY291bnRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZUNvdW50ID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOm9wdGlvbnNcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFibGVPcHRpb25zID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImhlYWRlci5zZXR0aW5nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhlYWRlciA9IHJlZi5oZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggYWxpZ24tY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcImhlYWRlci1zZXR0aW5ncy1tZW51XCIsIG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW0uc2V0dGluZ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm9mZnNldC15XCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbiA9IHJlZi5vblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJzID0gcmVmLmF0dHJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInNldHRpbmdzcm93XCIgKyBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWEtMCBwYS0wIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9iKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtYWxsOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJtZGktbWVudVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXCJpdGVtLXNldHRpbmdzLW1lbnVcIiwgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpdGVtLm1hcmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBib3R0b206IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbiA9IHJlZi5vblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJzID0gcmVmLmF0dHJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fYihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY29sb3IuY29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc21hbGw6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZGktY2hlY2tib3gtYmxhbmstY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLmNvbG9yLnRleHQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAo0J/QvtGB0LvQtdC00L3QtdC1INC+0LHQvdC+0LLQu9C10L3QuNC1OlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5maW5pc2hlZF9hdCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5tYXJrKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4LWdyb3ctMSBmbGV4LXNocmluay0xXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLnRhYmxlSXRlbXMgJiYgX3ZtLnRhYmxlSXRlbXMubGVuZ3RoID4gMCAmJiBfdm0uc2hvd1Njcm9sbFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hpcFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhcHAtdGFibGUtc2Nyb2xsLWxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlb3ZlcjogX3ZtLm9uU2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zY3JvbGxSdW4gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hpcFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHAtdGFibGUtc2Nyb2xsLWxlZnQgYXBwLXRhYmxlLXNjcm9sbC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdmVyOiBfdm0ub25TY3JvbGxSaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zY3JvbGxSdW4gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1kYXRhLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICByZWY6IFwidGFibGVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLndpdGhGaXhlZFxuICAgICAgICAgICAgICAgICAgICA/IF92bS5nZXRGaXhlZEhlYWRlcnModHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0udGFibGVIZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS50YWJsZUl0ZW1zLFxuICAgICAgICAgICAgICAgICAgcGFnZTogX3ZtLnRhYmxlRmlsdGVyLnBhZ2UsXG4gICAgICAgICAgICAgICAgICBcIml0ZW1zLXBlci1wYWdlXCI6IF92bS50YWJsZUZpbHRlci5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS50YWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICBcInNlcnZlci1pdGVtcy1sZW5ndGhcIjogX3ZtLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgXCJuby1kYXRhLXRleHRcIjogX3ZtLndpdGhTZWxlY3QgPyBcIlwiIDogXCLQndC10YIg0LTQsNC90L3Ri9GFXCIsXG4gICAgICAgICAgICAgICAgICBcIm5vLXJlc3VsdHMtdGV4dFwiOiBfdm0ud2l0aFNlbGVjdCA/IFwiXCIgOiBcItCd0LXRgiDQtNCw0L3QvdGL0YVcIixcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgXCJsb2FkaW5nLXRleHRcIjogXCLQl9Cw0LPRgNGD0LfQutCwLi4uINCf0L7QttCw0LvRg9C50YHRgtCwLCDQv9C+0LTQvtC20LTQuNGC0LVcIixcbiAgICAgICAgICAgICAgICAgIFwiaGlkZS1kZWZhdWx0LWZvb3RlclwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cGFnZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KF92bS50YWJsZUZpbHRlciwgXCJwYWdlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcInBhZ2UtY291bnRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5wYWdlQ291bnQgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcInVwZGF0ZTpvcHRpb25zXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0udGFibGVPcHRpb25zID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHJlZjogXCJyb3dcIiArIHByb3BzLml0ZW0uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wocHJvcHMuaGVhZGVycywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwibWF4LXdpZHRoXCI6IFwiNTAwcHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxpbmsgPT09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua19pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRhYmxlRWRpdEl0ZW0oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaWQgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbVtpdGVtLnZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wczogcHJvcHMsIGl0ZW06IGl0ZW0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0uaGlkZGVuID09PSB0cnVlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy5pdGVtW2l0ZW0udmFsdWVdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5oaWRkZW5fcHJlcGVuZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uaGlkZGVuX3ByZXBlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uaGlkZGVuX3ByZXBlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXByb3BzLml0ZW0uaGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW1baXRlbS52YWx1ZV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW1baXRlbS52YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uaGlkZGVuID0gIXByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbS5oaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLmhpZGRlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0J/QvtC60LDQt9Cw0YLRjCDRgtC10LrRgdGCXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCh0LrRgNGL0YLRjCDRgtC10LrRgdGCXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtW2l0ZW0udmFsdWVdICE9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtW2l0ZW0udmFsdWVdICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb3BzLml0ZW1baXRlbS52YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmVtcHR5VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fdChcImJvZHkuYXBwZW5kXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fdChcImJvZHkucGFnaW5hdGlvblwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIiBkLWZsZXggcHQtMlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBsZW5ndGg6IF92bS5wYWdlQ291bnQsIFwidG90YWwtdmlzaWJsZVwiOiA3IH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFibGVGaWx0ZXIucGFnZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnRhYmxlRmlsdGVyLCBcInBhZ2VcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFibGVGaWx0ZXIucGFnZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCIxNTBweFwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFibGVGaWx0ZXIucGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICBpdGVtczogWzIwLCA0MCwgNjAsIDgwLCAxMDBdLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0J/QvtC60LDQt9GL0LLQsNGC0Ywg0L/QvjpcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS50YWJsZUZpbHRlci5wZXJfcGFnZSA9IHBhcnNlSW50KCRldmVudCwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgPyBwYXJzZUludCgkZXZlbnQsIDEwKVxuICAgICAgICAgICAgICAgICAgICAgIDogMVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb3ZlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgIGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoXCLQodC/0LjRgdC+0Log0YDQsNC50L7QvdC+0LJcIikgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTRcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdG86IFwiL3JlZ2lvbnMvXCIgKyBfdm0uJHJvdXRlLnBhcmFtcy5yZWdpb24gKyBcIi8wP2xldmVsPVwiICsgX3ZtLmxldmVsXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwi0JTQvtCx0LDQstC40YLRjCArXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LXNwYWNlLWJldHdlZW4gbWItNlwiLFxuICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIHRpbGU6IFwiXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJBcHBEYXRhVGFibGVcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5ub3RGb3VuZCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiAhbm90Rm91bmRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMucmVnaW9ucyxcbiAgICAgICAgICAgICAgc2hvd1NlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICAgIGZpeGVkQ29sOiBmYWxzZSxcbiAgICAgICAgICAgICAgZWRpdEl0ZW06IF92bS5zaG93SXRlbSxcbiAgICAgICAgICAgICAgZW1wdHlJdGVtVGV4dDogXCItXCIsXG4gICAgICAgICAgICAgIGl0ZW1zVXJsOiBfdm0uZGlzdHJpY3RzSXRlbXNVcmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5ub3RGb3VuZFxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tdG9wXCI6IFwiMjBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xvcmVkLWJvcmRlclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbjogXCIyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgINCf0L4g0JLQsNGI0LXQvNGDINC30LDQv9GA0L7RgdGDINC90LjRh9C10LPQviDQvdC1INC90LDQudC00LXQvdC+LiDQn9C+0L/RgNC+0LHRg9C50YLQtSDQuNC30LzQtdC90LjRgtGMINC/0LDRgNCw0LzQtdGC0YDRiyDQv9C+0LjRgdC60LAuXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcERhdGFUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNDAxYjBjYzZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHBEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=