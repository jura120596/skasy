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
      console.log(layer);
      _this.place = {
        coords: layer._latlngs !== undefined,
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#mapid[data-v-405bff63] {\n    min-height: calc(100vh - 64px);\n    position:absolute;\n    height: calc(100vh - 64px);\n    width: 100%;\n}\n.map-top-dialog[data-v-405bff63]{\n    z-index: 10001 !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/Map.vue"],"names":[],"mappings":";AAgLA;IACA,8BAAA;IACA,iBAAA;IACA,0BAAA;IACA,WAAA;AACA;AACA;IACA,yBAAA;AACA","sourcesContent":["<template>\n    <div class=\"ma-0 pa-0\" style=\"position: relative; display: flex;\">\n        <div id=\"mapid\"></div>\n        <v-dialog v-model=\"show\">\n            <v-container map-top-dialog>\n                <v-card elevation=\"0\">\n                    <v-card-title>Создание зоны</v-card-title>\n                    <v-card-text>\n                        <v-text-field\n                                v-model=\"place.name\"\n                                label=\"Название\"/>\n                        <v-text-field\n                                v-model=\"place.points\"\n                                type=\"number\"\n                                label=\"Баллы благодарности\"/>\n                        <v-color-picker\n                                dot-size=\"32\"\n                                hide-canvas\n                                hide-mode-switch\n                                mode=\"hexa\"\n                                v-model=\"place.color\"\n                                swatches-max-height=\"200\"\n                        ></v-color-picker>\n                        <v-btn color=\"dark\" @click=\"save\" :disabled=\"place.name == ''\">\n                            Сохранить\n                        </v-btn>\n                    </v-card-text>\n                </v-card>\n            </v-container>\n        </v-dialog>\n    </div>\n</template>\n\n<script>\n    export default {\n        name: \"Map\",\n        data: (vm) => ({\n            mymap : null,\n            markers: [\n                [[55.530648, 47.505122], 'Дом культуры<br> Администрация послеления'],\n            ],\n            editableLayers:new L.FeatureGroup(),\n            places: [],\n            place: {},\n            show: false,\n            drawControl: null,\n        }),\n        mounted() {\n            this.mymap = L.map('mapid', {drawControl: false}).setView([55.536446, 47.498600], 13);\n            let osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVyYTk2IiwiYSI6ImNrcGw1MWVzODFkazQyd284bjY0ZWIxbmIifQ.CWG9L2rMStLO3i3AOgrnyQ', {\n                attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n                maxZoom: 18,\n                id: 'mapbox/streets-v11',\n                tileSize: 512,\n                zoomOffset: -1,\n                accessToken: 'your.mapbox.access.token'\n            })\n            osm.addTo(this.mymap)\n            this.markers.forEach((v)=> {\n                L.marker(v[0]).addTo(this.mymap)\n                    .bindPopup(v[1])\n                    .openPopup()\n            });\n            var options = {\n                position: 'topright',\n                draw: {\n                    polyline: false,\n                    polygon: {\n                        allowIntersection: true, // Restricts shapes to simple polygons\n                        drawError: {\n                            color: '#e1e100', // Color the shape will turn when intersects\n                            message: 'Вы не может поставить тут точку' // Message that will show when intersect\n                        },\n                        shapeOptions: {\n                            color: '#bada55'\n                        }\n                    },\n                    circle: false, // Turns off this drawing tool\n                    circlemarker: false, // Turns off this drawing tool\n                    rectangle: false,\n                    marker: true,\n                },\n                edit: {\n                    featureGroup: this.editableLayers, //REQUIRED!!\n                    remove: true,\n                    edit: true,\n                }\n            };\n            this.mymap.addLayer(this.editableLayers);\n\n            this.drawControl = new L.Control.Draw(options);\n            if (this.$store.state.auth.user.role === 1024) this.mymap.addControl(this.drawControl);\n            this.mymap.on(L.Draw.Event.CREATED,  (e) => {\n                var type = e.layerType,\n                    layer = e.layer;\n                console.log(layer)\n                this.place = {\n                    coords: layer._latlngs !== undefined,\n                    layer,\n                    type,\n                };\n                this.show = true;\n            });\n            this.mymap.on(L.Draw.Event.EDITED,  (e) => {\n                if (Object.values(e.layers._layers).length !== 1) {\n                    if (Object.values(e.layers._layers).length>1) {\n                        alert('Редактировать можно только 1 объект');\n                        window.location.reload();\n                    }\n                    return;\n                }\n                Object.values(e.layers._layers).forEach((l) => {\n                    this.place = {\n                        ...l.place,\n                        coords: l._latlngs,\n                        layer:l,\n                    };\n                    this.show = true;\n                });\n            });\n            this.mymap.on(L.Draw.Event.DELETED,  (e) => {\n                Object.values(e.layers._layers).forEach((l) => {\n                    this.delete(l.place);\n                })\n            });\n\n            this.getPlaces();\n        },\n        methods: {\n            getPlaces() {\n                window.axios.get('/mapObject/', {params: {}}).then((response) => {\n                    this.places = response.data.data;\n                    this.places.forEach((p,i) => {\n                        let polygon = L.polygon(p.coords, {color: p.color});\n                        polygon.addTo(this.mymap)\n                            .bindPopup(p.name+'<br/>'+'Требуются баллы: ' + p.points);\n                        this.places[i].polygon = polygon;\n                        polygon.place = p;\n                        this.editableLayers.addLayer(polygon);\n                    })\n                }).catch((e) => {\n                    console.log(e);\n                });\n            },\n            save() {\n                let data = {\n                    id: this.place.id,\n                    color: this.place.color,\n                    coords: this.place.coords,\n                    name: this.place.name,\n                    points: this.place.points,\n                    type: this.place.type,\n                };\n                data.color = data.color.hexa || data.color;\n                window.axios[data.id ?'put' : 'post']('/mapObject/'+(data.id||''), data).then((response) => {\n                    this.getPlaces();\n                    this.place = {};\n                    this.show = false;\n                    // this.mymap.addLayer(this.place.layer);\n                }).catch((e) => {\n                    alert('Ошибка. Проверьте данные.');\n                    console.log(e);\n                });\n            },\n            delete(place){\n                window.axios.delete('/mapObject/'+place.id).then((response) => {\n                    this.getPlaces();\n                }).catch((e) => {\n                    console.log(e);\n                });\n            }\n        }\n    }\n</script>\n\n<style scoped>\n    #mapid {\n        min-height: calc(100vh - 64px);\n        position:absolute;\n        height: calc(100vh - 64px);\n        width: 100%;\n    }\n    .map-top-dialog{\n        z-index: 10001 !important;\n    }\n</style>\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWU/MGQ3MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWFwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWFwLnZ1ZT85YTNkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXAudnVlP2EyZTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWU/M2FhZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0EsYUFEQTtBQUVBO0FBQUE7QUFDQSxpQkFEQTtBQUVBLGdCQUNBLHFFQURBLENBRkE7QUFLQSwwQ0FMQTtBQU1BLGdCQU5BO0FBT0EsZUFQQTtBQVFBLGlCQVJBO0FBU0E7QUFUQTtBQUFBLEdBRkE7QUFhQSxTQWJBLHFCQWFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSw2S0FEQTtBQUVBLGlCQUZBO0FBR0EsOEJBSEE7QUFJQSxtQkFKQTtBQUtBLG9CQUxBO0FBTUE7QUFOQTtBQVFBO0FBQ0E7QUFDQSx3Q0FDQSxTQURBLENBQ0EsSUFEQSxFQUVBLFNBRkE7QUFHQSxLQUpBO0FBS0E7QUFDQSwwQkFEQTtBQUVBO0FBQ0EsdUJBREE7QUFFQTtBQUNBLGlDQURBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBQ0E7QUFDQSxzREFGQSxDQUVBOztBQUZBLFdBRkE7QUFNQTtBQUNBO0FBREE7QUFOQSxTQUZBO0FBWUEscUJBWkE7QUFZQTtBQUNBLDJCQWJBO0FBYUE7QUFDQSx3QkFkQTtBQWVBO0FBZkEsT0FGQTtBQW1CQTtBQUNBLHlDQURBO0FBQ0E7QUFDQSxvQkFGQTtBQUdBO0FBSEE7QUFuQkE7QUF5QkE7QUFFQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0dBOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHV0QkFBOFc7QUFDcFk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJKQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfTWFwX3Z1ZTIyMjkzMWRjNzAwY2IyNjI5MTBhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtYS0wIHBhLTBcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogZmxleDtcIj5cbiAgICAgICAgPGRpdiBpZD1cIm1hcGlkXCI+PC9kaXY+XG4gICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwic2hvd1wiPlxuICAgICAgICAgICAgPHYtY29udGFpbmVyIG1hcC10b3AtZGlhbG9nPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQgZWxldmF0aW9uPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPtCh0L7Qt9C00LDQvdC40LUg0LfQvtC90Ys8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGxhY2UubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J3QsNC30LLQsNC90LjQtVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBsYWNlLnBvaW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCR0LDQu9C70Ysg0LHQu9Cw0LPQvtC00LDRgNC90L7RgdGC0LhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb2xvci1waWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90LXNpemU9XCIzMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtY2FudmFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtbW9kZS1zd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImhleGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGxhY2UuY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hlcy1tYXgtaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3YtY29sb3ItcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZGFya1wiIEBjbGljaz1cInNhdmVcIiA6ZGlzYWJsZWQ9XCJwbGFjZS5uYW1lID09ICcnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgPC92LWRpYWxvZz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk1hcFwiLFxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XG4gICAgICAgICAgICBteW1hcCA6IG51bGwsXG4gICAgICAgICAgICBtYXJrZXJzOiBbXG4gICAgICAgICAgICAgICAgW1s1NS41MzA2NDgsIDQ3LjUwNTEyMl0sICfQlNC+0Lwg0LrRg9C70YzRgtGD0YDRizxicj4g0JDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0L/QvtGB0LvQtdC70LXQvdC40Y8nXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBlZGl0YWJsZUxheWVyczpuZXcgTC5GZWF0dXJlR3JvdXAoKSxcbiAgICAgICAgICAgIHBsYWNlczogW10sXG4gICAgICAgICAgICBwbGFjZToge30sXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIGRyYXdDb250cm9sOiBudWxsLFxuICAgICAgICB9KSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMubXltYXAgPSBMLm1hcCgnbWFwaWQnLCB7ZHJhd0NvbnRyb2w6IGZhbHNlfSkuc2V0VmlldyhbNTUuNTM2NDQ2LCA0Ny40OTg2MDBdLCAxMyk7XG4gICAgICAgICAgICBsZXQgb3NtID0gTC50aWxlTGF5ZXIoJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL3tpZH0vdGlsZXMve3p9L3t4fS97eX0/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pYW5WeVlUazJJaXdpWVNJNkltTnJjR3cxTVdWek9ERmthelF5ZDI4NGJqWTBaV0l4Ym1JaWZRLkNXRzlMMnJNU3RMTzNpM0FPZ3JueVEnLCB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRpb246ICdNYXAgZGF0YSAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycywgSW1hZ2VyeSDCqSA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9cIj5NYXBib3g8L2E+JyxcbiAgICAgICAgICAgICAgICBtYXhab29tOiAxOCxcbiAgICAgICAgICAgICAgICBpZDogJ21hcGJveC9zdHJlZXRzLXYxMScsXG4gICAgICAgICAgICAgICAgdGlsZVNpemU6IDUxMixcbiAgICAgICAgICAgICAgICB6b29tT2Zmc2V0OiAtMSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogJ3lvdXIubWFwYm94LmFjY2Vzcy50b2tlbidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBvc20uYWRkVG8odGhpcy5teW1hcClcbiAgICAgICAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKCh2KT0+IHtcbiAgICAgICAgICAgICAgICBMLm1hcmtlcih2WzBdKS5hZGRUbyh0aGlzLm15bWFwKVxuICAgICAgICAgICAgICAgICAgICAuYmluZFBvcHVwKHZbMV0pXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuUG9wdXAoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcHJpZ2h0JyxcbiAgICAgICAgICAgICAgICBkcmF3OiB7XG4gICAgICAgICAgICAgICAgICAgIHBvbHlsaW5lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcG9seWdvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dJbnRlcnNlY3Rpb246IHRydWUsIC8vIFJlc3RyaWN0cyBzaGFwZXMgdG8gc2ltcGxlIHBvbHlnb25zXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmF3RXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNlMWUxMDAnLCAvLyBDb2xvciB0aGUgc2hhcGUgd2lsbCB0dXJuIHdoZW4gaW50ZXJzZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfQktGLINC90LUg0LzQvtC20LXRgiDQv9C+0YHRgtCw0LLQuNGC0Ywg0YLRg9GCINGC0L7Rh9C60YMnIC8vIE1lc3NhZ2UgdGhhdCB3aWxsIHNob3cgd2hlbiBpbnRlcnNlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZU9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNiYWRhNTUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZTogZmFsc2UsIC8vIFR1cm5zIG9mZiB0aGlzIGRyYXdpbmcgdG9vbFxuICAgICAgICAgICAgICAgICAgICBjaXJjbGVtYXJrZXI6IGZhbHNlLCAvLyBUdXJucyBvZmYgdGhpcyBkcmF3aW5nIHRvb2xcbiAgICAgICAgICAgICAgICAgICAgcmVjdGFuZ2xlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlR3JvdXA6IHRoaXMuZWRpdGFibGVMYXllcnMsIC8vUkVRVUlSRUQhIVxuICAgICAgICAgICAgICAgICAgICByZW1vdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGVkaXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubXltYXAuYWRkTGF5ZXIodGhpcy5lZGl0YWJsZUxheWVycyk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhd0NvbnRyb2wgPSBuZXcgTC5Db250cm9sLkRyYXcob3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjQpIHRoaXMubXltYXAuYWRkQ29udHJvbCh0aGlzLmRyYXdDb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMubXltYXAub24oTC5EcmF3LkV2ZW50LkNSRUFURUQsICAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gZS5sYXllclR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGxheWVyID0gZS5sYXllcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsYXllcilcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlID0ge1xuICAgICAgICAgICAgICAgICAgICBjb29yZHM6IGxheWVyLl9sYXRsbmdzICE9PSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIGxheWVyLFxuICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5teW1hcC5vbihMLkRyYXcuRXZlbnQuRURJVEVELCAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhlLmxheWVycy5fbGF5ZXJzKS5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoZS5sYXllcnMuX2xheWVycykubGVuZ3RoPjEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCDQvNC+0LbQvdC+INGC0L7Qu9GM0LrQviAxINC+0LHRitC10LrRgicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhlLmxheWVycy5fbGF5ZXJzKS5mb3JFYWNoKChsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5sLnBsYWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzOiBsLl9sYXRsbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI6bCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5teW1hcC5vbihMLkRyYXcuRXZlbnQuREVMRVRFRCwgIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhlLmxheWVycy5fbGF5ZXJzKS5mb3JFYWNoKChsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKGwucGxhY2UpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5nZXRQbGFjZXMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0UGxhY2VzKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy9tYXBPYmplY3QvJywge3BhcmFtczoge319KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZXMuZm9yRWFjaCgocCxpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9seWdvbiA9IEwucG9seWdvbihwLmNvb3Jkcywge2NvbG9yOiBwLmNvbG9yfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2x5Z29uLmFkZFRvKHRoaXMubXltYXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJpbmRQb3B1cChwLm5hbWUrJzxici8+Jysn0KLRgNC10LHRg9GO0YLRgdGPINCx0LDQu9C70Ys6ICcgKyBwLnBvaW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlc1tpXS5wb2x5Z29uID0gcG9seWdvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbHlnb24ucGxhY2UgPSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YWJsZUxheWVycy5hZGRMYXllcihwb2x5Z29uKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYXZlKCkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wbGFjZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMucGxhY2UuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkczogdGhpcy5wbGFjZS5jb29yZHMsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucGxhY2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiB0aGlzLnBsYWNlLnBvaW50cyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy5wbGFjZS50eXBlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZGF0YS5jb2xvciA9IGRhdGEuY29sb3IuaGV4YSB8fCBkYXRhLmNvbG9yO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvc1tkYXRhLmlkID8ncHV0JyA6ICdwb3N0J10oJy9tYXBPYmplY3QvJysoZGF0YS5pZHx8JycpLCBkYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYWNlcygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlID0ge307XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm15bWFwLmFkZExheWVyKHRoaXMucGxhY2UubGF5ZXIpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfQntGI0LjQsdC60LAuINCf0YDQvtCy0LXRgNGM0YLQtSDQtNCw0L3QvdGL0LUuJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZShwbGFjZSl7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmRlbGV0ZSgnL21hcE9iamVjdC8nK3BsYWNlLmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYWNlcygpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgI21hcGlkIHtcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAubWFwLXRvcC1kaWFsb2d7XG4gICAgICAgIHotaW5kZXg6IDEwMDAxICFpbXBvcnRhbnQ7XG4gICAgfVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI21hcGlkW2RhdGEtdi00MDViZmY2M10ge1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5tYXAtdG9wLWRpYWxvZ1tkYXRhLXYtNDA1YmZmNjNde1xcbiAgICB6LWluZGV4OiAxMDAwMSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWFwLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ0xBO0lBQ0EsOEJBQUE7SUFDQSxpQkFBQTtJQUNBLDBCQUFBO0lBQ0EsV0FBQTtBQUNBO0FBQ0E7SUFDQSx5QkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwibWEtMCBwYS0wXFxcIiBzdHlsZT1cXFwicG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBmbGV4O1xcXCI+XFxuICAgICAgICA8ZGl2IGlkPVxcXCJtYXBpZFxcXCI+PC9kaXY+XFxuICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwic2hvd1xcXCI+XFxuICAgICAgICAgICAgPHYtY29udGFpbmVyIG1hcC10b3AtZGlhbG9nPlxcbiAgICAgICAgICAgICAgICA8di1jYXJkIGVsZXZhdGlvbj1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPtCh0L7Qt9C00LDQvdC40LUg0LfQvtC90Ys8L3YtY2FyZC10aXRsZT5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJwbGFjZS5uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcItCd0LDQt9Cy0LDQvdC40LVcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJwbGFjZS5wb2ludHNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwi0JHQsNC70LvRiyDQsdC70LDQs9C+0LTQsNGA0L3QvtGB0YLQuFxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbG9yLXBpY2tlclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90LXNpemU9XFxcIjMyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZS1jYW52YXNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtbW9kZS1zd2l0Y2hcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XFxcImhleGFcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJwbGFjZS5jb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3YXRjaGVzLW1heC1oZWlnaHQ9XFxcIjIwMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC92LWNvbG9yLXBpY2tlcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XFxcImRhcmtcXFwiIEBjbGljaz1cXFwic2F2ZVxcXCIgOmRpc2FibGVkPVxcXCJwbGFjZS5uYW1lID09ICcnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XFxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxcbiAgICAgICAgICAgIDwvdi1jb250YWluZXI+XFxuICAgICAgICA8L3YtZGlhbG9nPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIG5hbWU6IFxcXCJNYXBcXFwiLFxcbiAgICAgICAgZGF0YTogKHZtKSA9PiAoe1xcbiAgICAgICAgICAgIG15bWFwIDogbnVsbCxcXG4gICAgICAgICAgICBtYXJrZXJzOiBbXFxuICAgICAgICAgICAgICAgIFtbNTUuNTMwNjQ4LCA0Ny41MDUxMjJdLCAn0JTQvtC8INC60YPQu9GM0YLRg9GA0Ys8YnI+INCQ0LTQvNC40L3QuNGB0YLRgNCw0YbQuNGPINC/0L7RgdC70LXQu9C10L3QuNGPJ10sXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICBlZGl0YWJsZUxheWVyczpuZXcgTC5GZWF0dXJlR3JvdXAoKSxcXG4gICAgICAgICAgICBwbGFjZXM6IFtdLFxcbiAgICAgICAgICAgIHBsYWNlOiB7fSxcXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcXG4gICAgICAgICAgICBkcmF3Q29udHJvbDogbnVsbCxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbW91bnRlZCgpIHtcXG4gICAgICAgICAgICB0aGlzLm15bWFwID0gTC5tYXAoJ21hcGlkJywge2RyYXdDb250cm9sOiBmYWxzZX0pLnNldFZpZXcoWzU1LjUzNjQ0NiwgNDcuNDk4NjAwXSwgMTMpO1xcbiAgICAgICAgICAgIGxldCBvc20gPSBMLnRpbGVMYXllcignaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEve2lkfS90aWxlcy97en0ve3h9L3t5fT9hY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2lhblZ5WVRrMklpd2lZU0k2SW1OcmNHdzFNV1Z6T0RGa2F6UXlkMjg0YmpZMFpXSXhibUlpZlEuQ1dHOUwyck1TdExPM2kzQU9ncm55UScsIHtcXG4gICAgICAgICAgICAgICAgYXR0cmlidXRpb246ICdNYXAgZGF0YSAmY29weTsgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XFxcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMsIEltYWdlcnkgwqkgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9cXFwiPk1hcGJveDwvYT4nLFxcbiAgICAgICAgICAgICAgICBtYXhab29tOiAxOCxcXG4gICAgICAgICAgICAgICAgaWQ6ICdtYXBib3gvc3RyZWV0cy12MTEnLFxcbiAgICAgICAgICAgICAgICB0aWxlU2l6ZTogNTEyLFxcbiAgICAgICAgICAgICAgICB6b29tT2Zmc2V0OiAtMSxcXG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46ICd5b3VyLm1hcGJveC5hY2Nlc3MudG9rZW4nXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICBvc20uYWRkVG8odGhpcy5teW1hcClcXG4gICAgICAgICAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgodik9PiB7XFxuICAgICAgICAgICAgICAgIEwubWFya2VyKHZbMF0pLmFkZFRvKHRoaXMubXltYXApXFxuICAgICAgICAgICAgICAgICAgICAuYmluZFBvcHVwKHZbMV0pXFxuICAgICAgICAgICAgICAgICAgICAub3BlblBvcHVwKClcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3ByaWdodCcsXFxuICAgICAgICAgICAgICAgIGRyYXc6IHtcXG4gICAgICAgICAgICAgICAgICAgIHBvbHlsaW5lOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgICAgIHBvbHlnb246IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0ludGVyc2VjdGlvbjogdHJ1ZSwgLy8gUmVzdHJpY3RzIHNoYXBlcyB0byBzaW1wbGUgcG9seWdvbnNcXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmF3RXJyb3I6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZTFlMTAwJywgLy8gQ29sb3IgdGhlIHNoYXBlIHdpbGwgdHVybiB3aGVuIGludGVyc2VjdHNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ9CS0Ysg0L3QtSDQvNC+0LbQtdGCINC/0L7RgdGC0LDQstC40YLRjCDRgtGD0YIg0YLQvtGH0LrRgycgLy8gTWVzc2FnZSB0aGF0IHdpbGwgc2hvdyB3aGVuIGludGVyc2VjdFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGVPcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2JhZGE1NSdcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlOiBmYWxzZSwgLy8gVHVybnMgb2ZmIHRoaXMgZHJhd2luZyB0b29sXFxuICAgICAgICAgICAgICAgICAgICBjaXJjbGVtYXJrZXI6IGZhbHNlLCAvLyBUdXJucyBvZmYgdGhpcyBkcmF3aW5nIHRvb2xcXG4gICAgICAgICAgICAgICAgICAgIHJlY3RhbmdsZTogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICBtYXJrZXI6IHRydWUsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGVkaXQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVHcm91cDogdGhpcy5lZGl0YWJsZUxheWVycywgLy9SRVFVSVJFRCEhXFxuICAgICAgICAgICAgICAgICAgICByZW1vdmU6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICBlZGl0OiB0cnVlLFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfTtcXG4gICAgICAgICAgICB0aGlzLm15bWFwLmFkZExheWVyKHRoaXMuZWRpdGFibGVMYXllcnMpO1xcblxcbiAgICAgICAgICAgIHRoaXMuZHJhd0NvbnRyb2wgPSBuZXcgTC5Db250cm9sLkRyYXcob3B0aW9ucyk7XFxuICAgICAgICAgICAgaWYgKHRoaXMuJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0KSB0aGlzLm15bWFwLmFkZENvbnRyb2wodGhpcy5kcmF3Q29udHJvbCk7XFxuICAgICAgICAgICAgdGhpcy5teW1hcC5vbihMLkRyYXcuRXZlbnQuQ1JFQVRFRCwgIChlKSA9PiB7XFxuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gZS5sYXllclR5cGUsXFxuICAgICAgICAgICAgICAgICAgICBsYXllciA9IGUubGF5ZXI7XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxheWVyKVxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlID0ge1xcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzOiBsYXllci5fbGF0bG5ncyAhPT0gdW5kZWZpbmVkLFxcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIsXFxuICAgICAgICAgICAgICAgICAgICB0eXBlLFxcbiAgICAgICAgICAgICAgICB9O1xcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIHRoaXMubXltYXAub24oTC5EcmF3LkV2ZW50LkVESVRFRCwgIChlKSA9PiB7XFxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmxlbmd0aCAhPT0gMSkge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoZS5sYXllcnMuX2xheWVycykubGVuZ3RoPjEpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgn0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0LzQvtC20L3QviDRgtC+0LvRjNC60L4gMSDQvtCx0YrQtdC60YInKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhlLmxheWVycy5fbGF5ZXJzKS5mb3JFYWNoKChsKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlID0ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmwucGxhY2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzOiBsLl9sYXRsbmdzLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyOmwsXFxuICAgICAgICAgICAgICAgICAgICB9O1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgdGhpcy5teW1hcC5vbihMLkRyYXcuRXZlbnQuREVMRVRFRCwgIChlKSA9PiB7XFxuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZS5sYXllcnMuX2xheWVycykuZm9yRWFjaCgobCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUobC5wbGFjZSk7XFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgdGhpcy5nZXRQbGFjZXMoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgZ2V0UGxhY2VzKCkge1xcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvbWFwT2JqZWN0LycsIHtwYXJhbXM6IHt9fSkudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZXMuZm9yRWFjaCgocCxpKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvbHlnb24gPSBMLnBvbHlnb24ocC5jb29yZHMsIHtjb2xvcjogcC5jb2xvcn0pO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbHlnb24uYWRkVG8odGhpcy5teW1hcClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJpbmRQb3B1cChwLm5hbWUrJzxici8+Jysn0KLRgNC10LHRg9GO0YLRgdGPINCx0LDQu9C70Ys6ICcgKyBwLnBvaW50cyk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZXNbaV0ucG9seWdvbiA9IHBvbHlnb247XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9seWdvbi5wbGFjZSA9IHA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YWJsZUxheWVycy5hZGRMYXllcihwb2x5Z29uKTtcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBzYXZlKCkge1xcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnBsYWNlLmlkLFxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMucGxhY2UuY29sb3IsXFxuICAgICAgICAgICAgICAgICAgICBjb29yZHM6IHRoaXMucGxhY2UuY29vcmRzLFxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wbGFjZS5uYW1lLFxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiB0aGlzLnBsYWNlLnBvaW50cyxcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMucGxhY2UudHlwZSxcXG4gICAgICAgICAgICAgICAgfTtcXG4gICAgICAgICAgICAgICAgZGF0YS5jb2xvciA9IGRhdGEuY29sb3IuaGV4YSB8fCBkYXRhLmNvbG9yO1xcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3NbZGF0YS5pZCA/J3B1dCcgOiAncG9zdCddKCcvbWFwT2JqZWN0LycrKGRhdGEuaWR8fCcnKSwgZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2VzKCk7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlID0ge307XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubXltYXAuYWRkTGF5ZXIodGhpcy5wbGFjZS5sYXllcik7XFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBhbGVydCgn0J7RiNC40LHQutCwLiDQn9GA0L7QstC10YDRjNGC0LUg0LTQsNC90L3Ri9C1LicpO1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZGVsZXRlKHBsYWNlKXtcXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmRlbGV0ZSgnL21hcE9iamVjdC8nK3BsYWNlLmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGFjZXMoKTtcXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbiAgICAjbWFwaWQge1xcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIC5tYXAtdG9wLWRpYWxvZ3tcXG4gICAgICAgIHotaW5kZXg6IDEwMDAxICFpbXBvcnRhbnQ7XFxuICAgIH1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDA1YmZmNjMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9NYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDA1YmZmNjMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQwNWJmZjYzXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDA1YmZmNjMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDA1YmZmNjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDA1YmZmNjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDA1YmZmNjMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDA1YmZmNjMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9NYXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1hLTAgcGEtMFwiLFxuICAgICAgc3RhdGljU3R5bGU6IHsgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgZGlzcGxheTogXCJmbGV4XCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJtYXBpZFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5zaG93ID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJtYXAtdG9wLWRpYWxvZ1wiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGVsZXZhdGlvbjogXCIwXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtfdm0uX3YoXCLQodC+0LfQtNCw0L3QuNC1INC30L7QvdGLXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcItCd0LDQt9Cy0LDQvdC40LVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wbGFjZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBsYWNlLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBsYWNlLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJudW1iZXJcIiwgbGFiZWw6IFwi0JHQsNC70LvRiyDQsdC70LDQs9C+0LTQsNGA0L3QvtGB0YLQuFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBsYWNlLnBvaW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wbGFjZSwgXCJwb2ludHNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBsYWNlLnBvaW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY29sb3ItcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZG90LXNpemVcIjogXCIzMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtY2FudmFzXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGlkZS1tb2RlLXN3aXRjaFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcImhleGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzd2F0Y2hlcy1tYXgtaGVpZ2h0XCI6IFwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBsYWNlLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBsYWNlLCBcImNvbG9yXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwbGFjZS5jb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJkYXJrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5wbGFjZS5uYW1lID09IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDA1YmZmNjMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjNlMmUwZDU0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQwNWJmZjYzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQwNWJmZjYzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9