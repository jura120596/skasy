(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Map_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Map.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Map.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Map",
  data: function data(vm) {
    return {
      mymap: null,
      markers: [[[55.530648, 47.505122], 'Дом культуры<br> Администрация послеления']],
      editableLayers: new L.FeatureGroup(),
      places: [],
      place: {},
      show: false,
      drawControl: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.mymap = L.map('mapid', {
      drawControl: false
    }).setView([55.536446, 47.498600], 13);
    var osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVyYTk2IiwiYSI6ImNrcGw1MWVzODFkazQyd284bjY0ZWIxbmIifQ.CWG9L2rMStLO3i3AOgrnyQ', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
    });
    osm.addTo(this.mymap);
    this.markers.forEach(function (v) {
      L.marker(v[0]).addTo(_this.mymap).bindPopup(v[1]).openPopup();
    });
    var options = {
      position: 'topright',
      draw: {
        polyline: false,
        polygon: {
          allowIntersection: true,
          // Restricts shapes to simple polygons
          drawError: {
            color: '#e1e100',
            // Color the shape will turn when intersects
            message: 'Вы не может поставить тут точку' // Message that will show when intersect

          },
          shapeOptions: {
            color: '#bada55'
          }
        },
        circle: false,
        // Turns off this drawing tool
        circlemarker: false,
        // Turns off this drawing tool
        rectangle: false,
        marker: true
      },
      edit: {
        featureGroup: this.editableLayers,
        //REQUIRED!!
        remove: true,
        edit: true
      }
    };
    this.mymap.addLayer(this.editableLayers);
    this.drawControl = new L.Control.Draw(options);
    if (this.$store.state.auth.user.role === 1024) this.mymap.addControl(this.drawControl);
    this.mymap.on(L.Draw.Event.CREATED, function (e) {
      var type = e.layerType,
          layer = e.layer;
      _this.place = {
        coords: layer._latlngs,
        layer: layer,
        type: type
      };
      _this.show = true;
    });
    this.mymap.on(L.Draw.Event.EDITED, function (e) {
      if (Object.values(e.layers._layers).length !== 1) {
        if (Object.values(e.layers._layers).length > 1) {
          alert('Редактировать можно только 1 объект');
          window.location.reload();
        }

        return;
      }

      Object.values(e.layers._layers).forEach(function (l) {
        _this.place = _objectSpread(_objectSpread({}, l.place), {}, {
          coords: l._latlngs,
          layer: l
        });
        _this.show = true;
      });
    });
    this.mymap.on(L.Draw.Event.DELETED, function (e) {
      Object.values(e.layers._layers).forEach(function (l) {
        _this["delete"](l.place);
      });
    });
    this.getPlaces();
  },
  methods: {
    getPlaces: function getPlaces() {
      var _this2 = this;

      window.axios.get('/mapObject/', {
        params: {}
      }).then(function (response) {
        _this2.places = response.data.data;

        _this2.places.forEach(function (p, i) {
          var polygon = L.polygon(p.coords, {
            color: p.color
          });
          polygon.addTo(_this2.mymap).bindPopup(p.name + '<br/>' + 'Требуются баллы: ' + p.points);
          _this2.places[i].polygon = polygon;
          polygon.place = p;

          _this2.editableLayers.addLayer(polygon);
        });
      })["catch"](function (e) {
        console.log(e);
      });
    },
    save: function save() {
      var _this3 = this;

      var data = {
        id: this.place.id,
        color: this.place.color,
        coords: this.place.coords,
        name: this.place.name,
        points: this.place.points,
        type: this.place.type
      };
      data.color = data.color.hexa || data.color;
      window.axios[data.id ? 'put' : 'post']('/mapObject/' + (data.id || ''), data).then(function (response) {
        _this3.getPlaces();

        _this3.place = {};
        _this3.show = false; // this.mymap.addLayer(this.place.layer);
      })["catch"](function (e) {
        alert('Ошибка. Проверьте данные.');
        console.log(e);
      });
    },
    "delete": function _delete(place) {
      var _this4 = this;

      window.axios["delete"]('/mapObject/' + place.id).then(function (response) {
        _this4.getPlaces();
      })["catch"](function (e) {
        console.log(e);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Map.vue?vue&type=style&index=0&id=405bff63&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Map.vue?vue&type=style&index=0&id=405bff63&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#mapid[data-v-405bff63] {\n    min-height: calc(100vh - 64px);\n    position:absolute;\n    height: calc(100vh - 64px);\n    width: 100%;\n}\n.map-top-dialog[data-v-405bff63]{\n    z-index: 10001 !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/Map.vue"],"names":[],"mappings":";AA+KA;IACA,8BAAA;IACA,iBAAA;IACA,0BAAA;IACA,WAAA;AACA;AACA;IACA,yBAAA;AACA","sourcesContent":["<template>\n    <div class=\"ma-0 pa-0\" style=\"position: relative; display: flex;\">\n        <div id=\"mapid\"></div>\n        <v-dialog v-model=\"show\">\n            <v-container map-top-dialog>\n                <v-card elevation=\"0\">\n                    <v-card-title>Создание зоны</v-card-title>\n                    <v-card-text>\n                        <v-text-field\n                                v-model=\"place.name\"\n                                label=\"Название\"/>\n                        <v-text-field\n                                v-model=\"place.points\"\n                                type=\"number\"\n                                label=\"Баллы благодарности\"/>\n                        <v-color-picker\n                                dot-size=\"32\"\n                                hide-canvas\n                                hide-mode-switch\n                                mode=\"hexa\"\n                                v-model=\"place.color\"\n                                swatches-max-height=\"200\"\n                        ></v-color-picker>\n                        <v-btn color=\"dark\" @click=\"save\" :disabled=\"place.name == ''\">\n                            Сохранить\n                        </v-btn>\n                    </v-card-text>\n                </v-card>\n            </v-container>\n        </v-dialog>\n    </div>\n</template>\n\n<script>\n    export default {\n        name: \"Map\",\n        data: (vm) => ({\n            mymap : null,\n            markers: [\n                [[55.530648, 47.505122], 'Дом культуры<br> Администрация послеления'],\n            ],\n            editableLayers:new L.FeatureGroup(),\n            places: [],\n            place: {},\n            show: false,\n            drawControl: null,\n        }),\n        mounted() {\n            this.mymap = L.map('mapid', {drawControl: false}).setView([55.536446, 47.498600], 13);\n            let osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVyYTk2IiwiYSI6ImNrcGw1MWVzODFkazQyd284bjY0ZWIxbmIifQ.CWG9L2rMStLO3i3AOgrnyQ', {\n                attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n                maxZoom: 18,\n                id: 'mapbox/streets-v11',\n                tileSize: 512,\n                zoomOffset: -1,\n                accessToken: 'your.mapbox.access.token'\n            })\n            osm.addTo(this.mymap)\n            this.markers.forEach((v)=> {\n                L.marker(v[0]).addTo(this.mymap)\n                    .bindPopup(v[1])\n                    .openPopup()\n            });\n            var options = {\n                position: 'topright',\n                draw: {\n                    polyline: false,\n                    polygon: {\n                        allowIntersection: true, // Restricts shapes to simple polygons\n                        drawError: {\n                            color: '#e1e100', // Color the shape will turn when intersects\n                            message: 'Вы не может поставить тут точку' // Message that will show when intersect\n                        },\n                        shapeOptions: {\n                            color: '#bada55'\n                        }\n                    },\n                    circle: false, // Turns off this drawing tool\n                    circlemarker: false, // Turns off this drawing tool\n                    rectangle: false,\n                    marker: true,\n                },\n                edit: {\n                    featureGroup: this.editableLayers, //REQUIRED!!\n                    remove: true,\n                    edit: true,\n                }\n            };\n            this.mymap.addLayer(this.editableLayers);\n\n            this.drawControl = new L.Control.Draw(options);\n            if (this.$store.state.auth.user.role === 1024) this.mymap.addControl(this.drawControl);\n            this.mymap.on(L.Draw.Event.CREATED,  (e) => {\n                var type = e.layerType,\n                    layer = e.layer;\n                this.place = {\n                    coords: layer._latlngs,\n                    layer,\n                    type,\n                };\n                this.show = true;\n            });\n            this.mymap.on(L.Draw.Event.EDITED,  (e) => {\n                if (Object.values(e.layers._layers).length !== 1) {\n                    if (Object.values(e.layers._layers).length>1) {\n                        alert('Редактировать можно только 1 объект');\n                        window.location.reload();\n                    }\n                    return;\n                }\n                Object.values(e.layers._layers).forEach((l) => {\n                    this.place = {\n                        ...l.place,\n                        coords: l._latlngs,\n                        layer:l,\n                    };\n                    this.show = true;\n                });\n            });\n            this.mymap.on(L.Draw.Event.DELETED,  (e) => {\n                Object.values(e.layers._layers).forEach((l) => {\n                    this.delete(l.place);\n                })\n            });\n\n            this.getPlaces();\n        },\n        methods: {\n            getPlaces() {\n                window.axios.get('/mapObject/', {params: {}}).then((response) => {\n                    this.places = response.data.data;\n                    this.places.forEach((p,i) => {\n                        let polygon = L.polygon(p.coords, {color: p.color});\n                        polygon.addTo(this.mymap)\n                            .bindPopup(p.name+'<br/>'+'Требуются баллы: ' + p.points);\n                        this.places[i].polygon = polygon;\n                        polygon.place = p;\n                        this.editableLayers.addLayer(polygon);\n                    })\n                }).catch((e) => {\n                    console.log(e);\n                });\n            },\n            save() {\n                let data = {\n                    id: this.place.id,\n                    color: this.place.color,\n                    coords: this.place.coords,\n                    name: this.place.name,\n                    points: this.place.points,\n                    type: this.place.type,\n                };\n                data.color = data.color.hexa || data.color;\n                window.axios[data.id ?'put' : 'post']('/mapObject/'+(data.id||''), data).then((response) => {\n                    this.getPlaces();\n                    this.place = {};\n                    this.show = false;\n                    // this.mymap.addLayer(this.place.layer);\n                }).catch((e) => {\n                    alert('Ошибка. Проверьте данные.');\n                    console.log(e);\n                });\n            },\n            delete(place){\n                window.axios.delete('/mapObject/'+place.id).then((response) => {\n                    this.getPlaces();\n                }).catch((e) => {\n                    console.log(e);\n                });\n            }\n        }\n    }\n</script>\n\n<style scoped>\n    #mapid {\n        min-height: calc(100vh - 64px);\n        position:absolute;\n        height: calc(100vh - 64px);\n        width: 100%;\n    }\n    .map-top-dialog{\n        z-index: 10001 !important;\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/pages/Map.vue":
/*!************************************!*\
  !*** ./resources/js/pages/Map.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Map_vue_vue_type_template_id_405bff63_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map.vue?vue&type=template&id=405bff63&scoped=true& */ "./resources/js/pages/Map.vue?vue&type=template&id=405bff63&scoped=true&");
/* harmony import */ var _Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map.vue?vue&type=script&lang=js& */ "./resources/js/pages/Map.vue?vue&type=script&lang=js&");
/* harmony import */ var _Map_vue_vue_type_style_index_0_id_405bff63_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map.vue?vue&type=style&index=0&id=405bff63&scoped=true&lang=css& */ "./resources/js/pages/Map.vue?vue&type=style&index=0&id=405bff63&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Map_vue_vue_type_template_id_405bff63_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Map_vue_vue_type_template_id_405bff63_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "405bff63",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Map.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Map.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/pages/Map.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Map.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Map.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Map.vue?vue&type=template&id=405bff63&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/Map.vue?vue&type=template&id=405bff63&scoped=true& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_405bff63_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_405bff63_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_405bff63_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Map.vue?vue&type=template&id=405bff63&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Map.vue?vue&type=template&id=405bff63&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/Map.vue?vue&type=style&index=0&id=405bff63&scoped=true&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/Map.vue?vue&type=style&index=0&id=405bff63&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_405bff63_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Map.vue?vue&type=style&index=0&id=405bff63&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Map.vue?vue&type=style&index=0&id=405bff63&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_405bff63_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_405bff63_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_405bff63_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_405bff63_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Map.vue?vue&type=template&id=405bff63&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Map.vue?vue&type=template&id=405bff63&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      staticClass: "ma-0 pa-0",
      staticStyle: { position: "relative", display: "flex" }
    },
    [
      _c("div", { attrs: { id: "mapid" } }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          model: {
            value: _vm.show,
            callback: function($$v) {
              _vm.show = $$v
            },
            expression: "show"
          }
        },
        [
          _c(
            "v-container",
            { attrs: { "map-top-dialog": "" } },
            [
              _c(
                "v-card",
                { attrs: { elevation: "0" } },
                [
                  _c("v-card-title", [_vm._v("Создание зоны")]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-text-field", {
                        attrs: { label: "Название" },
                        model: {
                          value: _vm.place.name,
                          callback: function($$v) {
                            _vm.$set(_vm.place, "name", $$v)
                          },
                          expression: "place.name"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: { type: "number", label: "Баллы благодарности" },
                        model: {
                          value: _vm.place.points,
                          callback: function($$v) {
                            _vm.$set(_vm.place, "points", $$v)
                          },
                          expression: "place.points"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-color-picker", {
                        attrs: {
                          "dot-size": "32",
                          "hide-canvas": "",
                          "hide-mode-switch": "",
                          mode: "hexa",
                          "swatches-max-height": "200"
                        },
                        model: {
                          value: _vm.place.color,
                          callback: function($$v) {
                            _vm.$set(_vm.place, "color", $$v)
                          },
                          expression: "place.color"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "dark",
                            disabled: _vm.place.name == ""
                          },
                          on: { click: _vm.save }
                        },
                        [
                          _vm._v(
                            "\n                        Сохранить\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Map.vue?vue&type=style&index=0&id=405bff63&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Map.vue?vue&type=style&index=0&id=405bff63&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Map.vue?vue&type=style&index=0&id=405bff63&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Map.vue?vue&type=style&index=0&id=405bff63&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3e2e0d54", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWU/MGQ3MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWFwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWFwLnZ1ZT85YTNkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXAudnVlP2EyZTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWU/M2FhZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0EsYUFEQTtBQUVBO0FBQUE7QUFDQSxpQkFEQTtBQUVBLGdCQUNBLHFFQURBLENBRkE7QUFLQSwwQ0FMQTtBQU1BLGdCQU5BO0FBT0EsZUFQQTtBQVFBLGlCQVJBO0FBU0E7QUFUQTtBQUFBLEdBRkE7QUFhQSxTQWJBLHFCQWFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSw2S0FEQTtBQUVBLGlCQUZBO0FBR0EsOEJBSEE7QUFJQSxtQkFKQTtBQUtBLG9CQUxBO0FBTUE7QUFOQTtBQVFBO0FBQ0E7QUFDQSx3Q0FDQSxTQURBLENBQ0EsSUFEQSxFQUVBLFNBRkE7QUFHQSxLQUpBO0FBS0E7QUFDQSwwQkFEQTtBQUVBO0FBQ0EsdUJBREE7QUFFQTtBQUNBLGlDQURBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBQ0E7QUFDQSxzREFGQSxDQUVBOztBQUZBLFdBRkE7QUFNQTtBQUNBO0FBREE7QUFOQSxTQUZBO0FBWUEscUJBWkE7QUFZQTtBQUNBLDJCQWJBO0FBYUE7QUFDQSx3QkFkQTtBQWVBO0FBZkEsT0FGQTtBQW1CQTtBQUNBLHlDQURBO0FBQ0E7QUFDQSxvQkFGQTtBQUdBO0FBSEE7QUFuQkE7QUF5QkE7QUFFQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdHQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyx1dEJBQThXO0FBQ3BZO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwySkFBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJqcy9jaHVua3MvcmVzb3VyY2VzX2pzX3BhZ2VzX01hcF92dWUyOWI5ZGFiYzQ0YzIzNmNhOGMzYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWEtMCBwYS0wXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7XCI+XG4gICAgICAgIDxkaXYgaWQ9XCJtYXBpZFwiPjwvZGl2PlxuICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cInNob3dcIj5cbiAgICAgICAgICAgIDx2LWNvbnRhaW5lciBtYXAtdG9wLWRpYWxvZz5cbiAgICAgICAgICAgICAgICA8di1jYXJkIGVsZXZhdGlvbj1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT7QodC+0LfQtNCw0L3QuNC1INC30L7QvdGLPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBsYWNlLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCd0LDQt9Cy0LDQvdC40LVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwbGFjZS5wb2ludHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQkdCw0LvQu9GLINCx0LvQsNCz0L7QtNCw0YDQvdC+0YHRgtC4XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29sb3ItcGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdC1zaXplPVwiMzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWNhbnZhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLW1vZGUtc3dpdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJoZXhhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBsYWNlLmNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhdGNoZXMtbWF4LWhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC92LWNvbG9yLXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImRhcmtcIiBAY2xpY2s9XCJzYXZlXCIgOmRpc2FibGVkPVwicGxhY2UubmFtZSA9PSAnJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgIDwvdi1kaWFsb2c+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNYXBcIixcbiAgICAgICAgZGF0YTogKHZtKSA9PiAoe1xuICAgICAgICAgICAgbXltYXAgOiBudWxsLFxuICAgICAgICAgICAgbWFya2VyczogW1xuICAgICAgICAgICAgICAgIFtbNTUuNTMwNjQ4LCA0Ny41MDUxMjJdLCAn0JTQvtC8INC60YPQu9GM0YLRg9GA0Ys8YnI+INCQ0LTQvNC40L3QuNGB0YLRgNCw0YbQuNGPINC/0L7RgdC70LXQu9C10L3QuNGPJ10sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZWRpdGFibGVMYXllcnM6bmV3IEwuRmVhdHVyZUdyb3VwKCksXG4gICAgICAgICAgICBwbGFjZXM6IFtdLFxuICAgICAgICAgICAgcGxhY2U6IHt9LFxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICBkcmF3Q29udHJvbDogbnVsbCxcbiAgICAgICAgfSksXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLm15bWFwID0gTC5tYXAoJ21hcGlkJywge2RyYXdDb250cm9sOiBmYWxzZX0pLnNldFZpZXcoWzU1LjUzNjQ0NiwgNDcuNDk4NjAwXSwgMTMpO1xuICAgICAgICAgICAgbGV0IG9zbSA9IEwudGlsZUxheWVyKCdodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS97aWR9L3RpbGVzL3t6fS97eH0ve3l9P2FjY2Vzc190b2tlbj1way5leUoxSWpvaWFuVnlZVGsySWl3aVlTSTZJbU5yY0d3MU1XVnpPREZrYXpReWQyODRialkwWldJeGJtSWlmUS5DV0c5TDJyTVN0TE8zaTNBT2dybnlRJywge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uOiAnTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMsIEltYWdlcnkgwqkgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vXCI+TWFwYm94PC9hPicsXG4gICAgICAgICAgICAgICAgbWF4Wm9vbTogMTgsXG4gICAgICAgICAgICAgICAgaWQ6ICdtYXBib3gvc3RyZWV0cy12MTEnLFxuICAgICAgICAgICAgICAgIHRpbGVTaXplOiA1MTIsXG4gICAgICAgICAgICAgICAgem9vbU9mZnNldDogLTEsXG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46ICd5b3VyLm1hcGJveC5hY2Nlc3MudG9rZW4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgb3NtLmFkZFRvKHRoaXMubXltYXApXG4gICAgICAgICAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgodik9PiB7XG4gICAgICAgICAgICAgICAgTC5tYXJrZXIodlswXSkuYWRkVG8odGhpcy5teW1hcClcbiAgICAgICAgICAgICAgICAgICAgLmJpbmRQb3B1cCh2WzFdKVxuICAgICAgICAgICAgICAgICAgICAub3BlblBvcHVwKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3ByaWdodCcsXG4gICAgICAgICAgICAgICAgZHJhdzoge1xuICAgICAgICAgICAgICAgICAgICBwb2x5bGluZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHBvbHlnb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93SW50ZXJzZWN0aW9uOiB0cnVlLCAvLyBSZXN0cmljdHMgc2hhcGVzIHRvIHNpbXBsZSBwb2x5Z29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0Vycm9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZTFlMTAwJywgLy8gQ29sb3IgdGhlIHNoYXBlIHdpbGwgdHVybiB3aGVuIGludGVyc2VjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn0JLRiyDQvdC1INC80L7QttC10YIg0L/QvtGB0YLQsNCy0LjRgtGMINGC0YPRgiDRgtC+0YfQutGDJyAvLyBNZXNzYWdlIHRoYXQgd2lsbCBzaG93IHdoZW4gaW50ZXJzZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGVPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYmFkYTU1J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaXJjbGU6IGZhbHNlLCAvLyBUdXJucyBvZmYgdGhpcyBkcmF3aW5nIHRvb2xcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlbWFya2VyOiBmYWxzZSwgLy8gVHVybnMgb2ZmIHRoaXMgZHJhd2luZyB0b29sXG4gICAgICAgICAgICAgICAgICAgIHJlY3RhbmdsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVkaXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUdyb3VwOiB0aGlzLmVkaXRhYmxlTGF5ZXJzLCAvL1JFUVVJUkVEISFcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBlZGl0OiB0cnVlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm15bWFwLmFkZExheWVyKHRoaXMuZWRpdGFibGVMYXllcnMpO1xuXG4gICAgICAgICAgICB0aGlzLmRyYXdDb250cm9sID0gbmV3IEwuQ29udHJvbC5EcmF3KG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0KSB0aGlzLm15bWFwLmFkZENvbnRyb2wodGhpcy5kcmF3Q29udHJvbCk7XG4gICAgICAgICAgICB0aGlzLm15bWFwLm9uKEwuRHJhdy5FdmVudC5DUkVBVEVELCAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IGUubGF5ZXJUeXBlLFxuICAgICAgICAgICAgICAgICAgICBsYXllciA9IGUubGF5ZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzOiBsYXllci5fbGF0bG5ncyxcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm15bWFwLm9uKEwuRHJhdy5FdmVudC5FRElURUQsICAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhlLmxheWVycy5fbGF5ZXJzKS5sZW5ndGg+MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC80L7QttC90L4g0YLQvtC70YzQutC+IDEg0L7QsdGK0LXQutGCJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmZvckVhY2goKGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmwucGxhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZHM6IGwuX2xhdGxuZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcjpsLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm15bWFwLm9uKEwuRHJhdy5FdmVudC5ERUxFVEVELCAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmZvckVhY2goKGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUobC5wbGFjZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmdldFBsYWNlcygpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRQbGFjZXMoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL21hcE9iamVjdC8nLCB7cGFyYW1zOiB7fX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlcy5mb3JFYWNoKChwLGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb2x5Z29uID0gTC5wb2x5Z29uKHAuY29vcmRzLCB7Y29sb3I6IHAuY29sb3J9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbHlnb24uYWRkVG8odGhpcy5teW1hcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmluZFBvcHVwKHAubmFtZSsnPGJyLz4nKyfQotGA0LXQsdGD0Y7RgtGB0Y8g0LHQsNC70LvRizogJyArIHAucG9pbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VzW2ldLnBvbHlnb24gPSBwb2x5Z29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9seWdvbi5wbGFjZSA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRhYmxlTGF5ZXJzLmFkZExheWVyKHBvbHlnb24pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhdmUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnBsYWNlLmlkLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5wbGFjZS5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzOiB0aGlzLnBsYWNlLmNvb3JkcyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wbGFjZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IHRoaXMucGxhY2UucG9pbnRzLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnBsYWNlLnR5cGUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBkYXRhLmNvbG9yID0gZGF0YS5jb2xvci5oZXhhIHx8IGRhdGEuY29sb3I7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zW2RhdGEuaWQgPydwdXQnIDogJ3Bvc3QnXSgnL21hcE9iamVjdC8nKyhkYXRhLmlkfHwnJyksIGRhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2UgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubXltYXAuYWRkTGF5ZXIodGhpcy5wbGFjZS5sYXllcik7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Ce0YjQuNCx0LrQsC4g0J/RgNC+0LLQtdGA0YzRgtC1INC00LDQvdC90YvQtS4nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlKHBsYWNlKXtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZGVsZXRlKCcvbWFwT2JqZWN0LycrcGxhY2UuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2VzKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAjbWFwaWQge1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5tYXAtdG9wLWRpYWxvZ3tcbiAgICAgICAgei1pbmRleDogMTAwMDEgIWltcG9ydGFudDtcbiAgICB9XG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jbWFwaWRbZGF0YS12LTQwNWJmZjYzXSB7XFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLm1hcC10b3AtZGlhbG9nW2RhdGEtdi00MDViZmY2M117XFxuICAgIHotaW5kZXg6IDEwMDAxICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXAudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUErS0E7SUFDQSw4QkFBQTtJQUNBLGlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxXQUFBO0FBQ0E7QUFDQTtJQUNBLHlCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYS0wIHBhLTBcXFwiIHN0eWxlPVxcXCJwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7XFxcIj5cXG4gICAgICAgIDxkaXYgaWQ9XFxcIm1hcGlkXFxcIj48L2Rpdj5cXG4gICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVxcXCJzaG93XFxcIj5cXG4gICAgICAgICAgICA8di1jb250YWluZXIgbWFwLXRvcC1kaWFsb2c+XFxuICAgICAgICAgICAgICAgIDx2LWNhcmQgZWxldmF0aW9uPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+0KHQvtC30LTQsNC90LjQtSDQt9C+0L3Rizwvdi1jYXJkLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInBsYWNlLm5hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwi0J3QsNC30LLQsNC90LjQtVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInBsYWNlLnBvaW50c1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCLQkdCw0LvQu9GLINCx0LvQsNCz0L7QtNCw0YDQvdC+0YHRgtC4XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29sb3ItcGlja2VyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3Qtc2l6ZT1cXFwiMzJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWNhbnZhc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZS1tb2RlLXN3aXRjaFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cXFwiaGV4YVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInBsYWNlLmNvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhdGNoZXMtbWF4LWhlaWdodD1cXFwiMjAwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3YtY29sb3ItcGlja2VyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cXFwiZGFya1xcXCIgQGNsaWNrPVxcXCJzYXZlXFxcIiA6ZGlzYWJsZWQ9XFxcInBsYWNlLm5hbWUgPT0gJydcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cXG4gICAgICAgICAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cXG4gICAgICAgIDwvdi1kaWFsb2c+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgbmFtZTogXFxcIk1hcFxcXCIsXFxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XFxuICAgICAgICAgICAgbXltYXAgOiBudWxsLFxcbiAgICAgICAgICAgIG1hcmtlcnM6IFtcXG4gICAgICAgICAgICAgICAgW1s1NS41MzA2NDgsIDQ3LjUwNTEyMl0sICfQlNC+0Lwg0LrRg9C70YzRgtGD0YDRizxicj4g0JDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0L/QvtGB0LvQtdC70LXQvdC40Y8nXSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIGVkaXRhYmxlTGF5ZXJzOm5ldyBMLkZlYXR1cmVHcm91cCgpLFxcbiAgICAgICAgICAgIHBsYWNlczogW10sXFxuICAgICAgICAgICAgcGxhY2U6IHt9LFxcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxcbiAgICAgICAgICAgIGRyYXdDb250cm9sOiBudWxsLFxcbiAgICAgICAgfSksXFxuICAgICAgICBtb3VudGVkKCkge1xcbiAgICAgICAgICAgIHRoaXMubXltYXAgPSBMLm1hcCgnbWFwaWQnLCB7ZHJhd0NvbnRyb2w6IGZhbHNlfSkuc2V0VmlldyhbNTUuNTM2NDQ2LCA0Ny40OTg2MDBdLCAxMyk7XFxuICAgICAgICAgICAgbGV0IG9zbSA9IEwudGlsZUxheWVyKCdodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS97aWR9L3RpbGVzL3t6fS97eH0ve3l9P2FjY2Vzc190b2tlbj1way5leUoxSWpvaWFuVnlZVGsySWl3aVlTSTZJbU5yY0d3MU1XVnpPREZrYXpReWQyODRialkwWldJeGJtSWlmUS5DV0c5TDJyTVN0TE8zaTNBT2dybnlRJywge1xcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbjogJ01hcCBkYXRhICZjb3B5OyA8YSBocmVmPVxcXCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcXFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycywgSW1hZ2VyeSDCqSA8YSBocmVmPVxcXCJodHRwczovL3d3dy5tYXBib3guY29tL1xcXCI+TWFwYm94PC9hPicsXFxuICAgICAgICAgICAgICAgIG1heFpvb206IDE4LFxcbiAgICAgICAgICAgICAgICBpZDogJ21hcGJveC9zdHJlZXRzLXYxMScsXFxuICAgICAgICAgICAgICAgIHRpbGVTaXplOiA1MTIsXFxuICAgICAgICAgICAgICAgIHpvb21PZmZzZXQ6IC0xLFxcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogJ3lvdXIubWFwYm94LmFjY2Vzcy50b2tlbidcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIG9zbS5hZGRUbyh0aGlzLm15bWFwKVxcbiAgICAgICAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKCh2KT0+IHtcXG4gICAgICAgICAgICAgICAgTC5tYXJrZXIodlswXSkuYWRkVG8odGhpcy5teW1hcClcXG4gICAgICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAodlsxXSlcXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuUG9wdXAoKVxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcHJpZ2h0JyxcXG4gICAgICAgICAgICAgICAgZHJhdzoge1xcbiAgICAgICAgICAgICAgICAgICAgcG9seWxpbmU6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgcG9seWdvbjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93SW50ZXJzZWN0aW9uOiB0cnVlLCAvLyBSZXN0cmljdHMgc2hhcGVzIHRvIHNpbXBsZSBwb2x5Z29uc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdFcnJvcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNlMWUxMDAnLCAvLyBDb2xvciB0aGUgc2hhcGUgd2lsbCB0dXJuIHdoZW4gaW50ZXJzZWN0c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn0JLRiyDQvdC1INC80L7QttC10YIg0L/QvtGB0YLQsNCy0LjRgtGMINGC0YPRgiDRgtC+0YfQutGDJyAvLyBNZXNzYWdlIHRoYXQgd2lsbCBzaG93IHdoZW4gaW50ZXJzZWN0XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZU9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYmFkYTU1J1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBjaXJjbGU6IGZhbHNlLCAvLyBUdXJucyBvZmYgdGhpcyBkcmF3aW5nIHRvb2xcXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZW1hcmtlcjogZmFsc2UsIC8vIFR1cm5zIG9mZiB0aGlzIGRyYXdpbmcgdG9vbFxcbiAgICAgICAgICAgICAgICAgICAgcmVjdGFuZ2xlOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcjogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZWRpdDoge1xcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUdyb3VwOiB0aGlzLmVkaXRhYmxlTGF5ZXJzLCAvL1JFUVVJUkVEISFcXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZTogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgIGVkaXQ6IHRydWUsXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgICAgIHRoaXMubXltYXAuYWRkTGF5ZXIodGhpcy5lZGl0YWJsZUxheWVycyk7XFxuXFxuICAgICAgICAgICAgdGhpcy5kcmF3Q29udHJvbCA9IG5ldyBMLkNvbnRyb2wuRHJhdyhvcHRpb25zKTtcXG4gICAgICAgICAgICBpZiAodGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjQpIHRoaXMubXltYXAuYWRkQ29udHJvbCh0aGlzLmRyYXdDb250cm9sKTtcXG4gICAgICAgICAgICB0aGlzLm15bWFwLm9uKEwuRHJhdy5FdmVudC5DUkVBVEVELCAgKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBlLmxheWVyVHlwZSxcXG4gICAgICAgICAgICAgICAgICAgIGxheWVyID0gZS5sYXllcjtcXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZSA9IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkczogbGF5ZXIuX2xhdGxuZ3MsXFxuICAgICAgICAgICAgICAgICAgICBsYXllcixcXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXFxuICAgICAgICAgICAgICAgIH07XFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgdGhpcy5teW1hcC5vbihMLkRyYXcuRXZlbnQuRURJVEVELCAgKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoZS5sYXllcnMuX2xheWVycykubGVuZ3RoICE9PSAxKSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhlLmxheWVycy5fbGF5ZXJzKS5sZW5ndGg+MSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCDQvNC+0LbQvdC+INGC0L7Qu9GM0LrQviAxINC+0LHRitC10LrRgicpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmZvckVhY2goKGwpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2UgPSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ubC5wbGFjZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZHM6IGwuX2xhdGxuZ3MsXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI6bCxcXG4gICAgICAgICAgICAgICAgICAgIH07XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB0aGlzLm15bWFwLm9uKEwuRHJhdy5FdmVudC5ERUxFVEVELCAgKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhlLmxheWVycy5fbGF5ZXJzKS5mb3JFYWNoKChsKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZShsLnBsYWNlKTtcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICB0aGlzLmdldFBsYWNlcygpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICBnZXRQbGFjZXMoKSB7XFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy9tYXBPYmplY3QvJywge3BhcmFtczoge319KS50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZXMgPSByZXNwb25zZS5kYXRhLmRhdGE7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlcy5mb3JFYWNoKChwLGkpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9seWdvbiA9IEwucG9seWdvbihwLmNvb3Jkcywge2NvbG9yOiBwLmNvbG9yfSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9seWdvbi5hZGRUbyh0aGlzLm15bWFwKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmluZFBvcHVwKHAubmFtZSsnPGJyLz4nKyfQotGA0LXQsdGD0Y7RgtGB0Y8g0LHQsNC70LvRizogJyArIHAucG9pbnRzKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlc1tpXS5wb2x5Z29uID0gcG9seWdvbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2x5Z29uLnBsYWNlID0gcDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRhYmxlTGF5ZXJzLmFkZExheWVyKHBvbHlnb24pO1xcbiAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHNhdmUoKSB7XFxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucGxhY2UuaWQsXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5wbGFjZS5jb2xvcixcXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkczogdGhpcy5wbGFjZS5jb29yZHMsXFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnBsYWNlLm5hbWUsXFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IHRoaXMucGxhY2UucG9pbnRzLFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy5wbGFjZS50eXBlLFxcbiAgICAgICAgICAgICAgICB9O1xcbiAgICAgICAgICAgICAgICBkYXRhLmNvbG9yID0gZGF0YS5jb2xvci5oZXhhIHx8IGRhdGEuY29sb3I7XFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvc1tkYXRhLmlkID8ncHV0JyA6ICdwb3N0J10oJy9tYXBPYmplY3QvJysoZGF0YS5pZHx8JycpLCBkYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGFjZXMoKTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2UgPSB7fTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5teW1hcC5hZGRMYXllcih0aGlzLnBsYWNlLmxheWVyKTtcXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfQntGI0LjQsdC60LAuINCf0YDQvtCy0LXRgNGM0YLQtSDQtNCw0L3QvdGL0LUuJyk7XFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkZWxldGUocGxhY2Upe1xcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZGVsZXRlKCcvbWFwT2JqZWN0LycrcGxhY2UuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYWNlcygpO1xcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuICAgICNtYXBpZCB7XFxuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XFxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgLm1hcC10b3AtZGlhbG9ne1xcbiAgICAgICAgei1pbmRleDogMTAwMDEgIWltcG9ydGFudDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MDViZmY2MyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL01hcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MDViZmY2MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDA1YmZmNjNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0MDViZmY2MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MDViZmY2MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MDViZmY2MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MDViZmY2MyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MDViZmY2MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWEtMCBwYS0wXCIsXG4gICAgICBzdGF0aWNTdHlsZTogeyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBkaXNwbGF5OiBcImZsZXhcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcIm1hcGlkXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvdyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBcIm1hcC10b3AtZGlhbG9nXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZWxldmF0aW9uOiBcIjBcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW192bS5fdihcItCh0L7Qt9C00LDQvdC40LUg0LfQvtC90YtcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi0J3QsNC30LLQsNC90LjQtVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBsYWNlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGxhY2UsIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGxhY2UubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcIm51bWJlclwiLCBsYWJlbDogXCLQkdCw0LvQu9GLINCx0LvQsNCz0L7QtNCw0YDQvdC+0YHRgtC4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGxhY2UucG9pbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBsYWNlLCBcInBvaW50c1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGxhY2UucG9pbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jb2xvci1waWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3Qtc2l6ZVwiOiBcIjMyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGlkZS1jYW52YXNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLW1vZGUtc3dpdGNoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwiaGV4YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN3YXRjaGVzLW1heC1oZWlnaHRcIjogXCIyMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGxhY2UuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGxhY2UsIFwiY29sb3JcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBsYWNlLmNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImRhcmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLnBsYWNlLm5hbWUgPT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNhdmUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MDViZmY2MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2UyZTBkNTRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDA1YmZmNjMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDA1YmZmNjMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=