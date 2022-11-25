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
        coords: e.layerType === 'point' ? layer._latlngs : layer._latlng,
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
    addDivMarker: function addDivMarker(coords, color) {
      var myCustomColour = color;
      var markerHtmlStyles = "background-color: ".concat(myCustomColour, "; width: 2rem;height: 2rem;display: block;\n                      left: -1rem;top: -1rem;position: relative;border-radius: 2rem 2rem 0;transform: rotate(45deg);border: 1px solid #FFFFFF");
      var icon = L.divIcon({
        className: "my-custom-pin",
        iconAnchor: [0, 24],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: "<span style=\"".concat(markerHtmlStyles, "\" />")
      });
      L.marker(coords, {
        icon: icon
      }).addTo(this.mymap).bindPopup(p.name + '<br/>' + (p.points > 0 ? 'Требуются баллы: ' + p.points : ''));
    },
    getPlaces: function getPlaces() {
      var _this2 = this;

      window.axios.get('/mapObject/', {
        params: {}
      }).then(function (response) {
        _this2.places = response.data.data;

        _this2.places.filter(function (v) {
          return v.type === 'polygon';
        }).forEach(function (p, i) {
          var polygon = L.polygon(p.coords, {
            color: p.color
          });
          polygon.addTo(_this2.mymap).bindPopup(p.name + '<br/>' + (p.points > 0 ? 'Требуются баллы: ' + p.points : ''));
          _this2.places[i].polygon = polygon;
          polygon.place = p;

          _this2.editableLayers.addLayer(polygon);
        });

        _this2.places.filter(function (v) {
          return v.type === 'marker';
        }).forEach(function (p, i) {
          _this2.addDivMarker({
            lat: p.lat,
            lng: p.lng
          }, p.color);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#mapid[data-v-405bff63] {\n    min-height: calc(100vh - 64px);\n    position:absolute;\n    height: calc(100vh - 64px);\n    width: 100%;\n}\n.map-top-dialog[data-v-405bff63]{\n    z-index: 10001 !important;\n}\n", "",{"version":3,"sources":["webpack://./Map.vue"],"names":[],"mappings":";AAiMA;IACA,8BAAA;IACA,iBAAA;IACA,0BAAA;IACA,WAAA;AACA;AACA;IACA,yBAAA;AACA","sourcesContent":["<template>\n    <div class=\"ma-0 pa-0\" style=\"position: relative; display: flex;\">\n        <div id=\"mapid\"></div>\n        <v-dialog v-model=\"show\">\n            <v-container map-top-dialog>\n                <v-card elevation=\"0\">\n                    <v-card-title>Создание зоны</v-card-title>\n                    <v-card-text>\n                        <v-text-field\n                                v-model=\"place.name\"\n                                label=\"Название\"/>\n                        <v-text-field\n                                v-model=\"place.points\"\n                                type=\"number\"\n                                label=\"Баллы благодарности\"/>\n                        <v-color-picker\n                                dot-size=\"32\"\n                                hide-canvas\n                                hide-mode-switch\n                                mode=\"hexa\"\n                                v-model=\"place.color\"\n                                swatches-max-height=\"200\"\n                        ></v-color-picker>\n                        <v-btn color=\"dark\" @click=\"save\" :disabled=\"place.name == ''\">\n                            Сохранить\n                        </v-btn>\n                    </v-card-text>\n                </v-card>\n            </v-container>\n        </v-dialog>\n    </div>\n</template>\n\n<script>\n    export default {\n        name: \"Map\",\n        data: (vm) => ({\n            mymap : null,\n            markers: [\n                [[55.530648, 47.505122], 'Дом культуры<br> Администрация послеления'],\n            ],\n            editableLayers:new L.FeatureGroup(),\n            places: [],\n            place: {},\n            show: false,\n            drawControl: null,\n        }),\n        mounted() {\n            this.mymap = L.map('mapid', {drawControl: false}).setView([55.536446, 47.498600], 13);\n            let osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVyYTk2IiwiYSI6ImNrcGw1MWVzODFkazQyd284bjY0ZWIxbmIifQ.CWG9L2rMStLO3i3AOgrnyQ', {\n                attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n                maxZoom: 18,\n                id: 'mapbox/streets-v11',\n                tileSize: 512,\n                zoomOffset: -1,\n                accessToken: 'your.mapbox.access.token'\n            })\n            osm.addTo(this.mymap)\n            this.markers.forEach((v)=> {\n                L.marker(v[0]).addTo(this.mymap)\n                    .bindPopup(v[1])\n                    .openPopup()\n            });\n            var options = {\n                position: 'topright',\n                draw: {\n                    polyline: false,\n                    polygon: {\n                        allowIntersection: true, // Restricts shapes to simple polygons\n                        drawError: {\n                            color: '#e1e100', // Color the shape will turn when intersects\n                            message: 'Вы не может поставить тут точку' // Message that will show when intersect\n                        },\n                        shapeOptions: {\n                            color: '#bada55'\n                        }\n                    },\n                    circle: false, // Turns off this drawing tool\n                    circlemarker: false, // Turns off this drawing tool\n                    rectangle: false,\n                    marker: true,\n                },\n                edit: {\n                    featureGroup: this.editableLayers, //REQUIRED!!\n                    remove: true,\n                    edit: true,\n                }\n            };\n            this.mymap.addLayer(this.editableLayers);\n\n            this.drawControl = new L.Control.Draw(options);\n            if (this.$store.state.auth.user.role === 1024) this.mymap.addControl(this.drawControl);\n            this.mymap.on(L.Draw.Event.CREATED,  (e) => {\n                var type = e.layerType,\n                    layer = e.layer;\n                this.place = {\n                    coords: e.layerType === 'point' ? layer._latlngs : layer._latlng,\n                    layer,\n                    type,\n                };\n                this.show = true;\n            });\n            this.mymap.on(L.Draw.Event.EDITED,  (e) => {\n                if (Object.values(e.layers._layers).length !== 1) {\n                    if (Object.values(e.layers._layers).length>1) {\n                        alert('Редактировать можно только 1 объект');\n                        window.location.reload();\n                    }\n                    return;\n                }\n                Object.values(e.layers._layers).forEach((l) => {\n                    this.place = {\n                        ...l.place,\n                        coords: l._latlngs,\n                        layer:l,\n                    };\n                    this.show = true;\n                });\n            });\n            this.mymap.on(L.Draw.Event.DELETED,  (e) => {\n                Object.values(e.layers._layers).forEach((l) => {\n                    this.delete(l.place);\n                })\n            });\n\n            this.getPlaces();\n        },\n        methods: {\n            addDivMarker(coords, color) {\n                const myCustomColour = color;\n                const markerHtmlStyles = `background-color: ${myCustomColour}; width: 2rem;height: 2rem;display: block;\n                          left: -1rem;top: -1rem;position: relative;border-radius: 2rem 2rem 0;transform: rotate(45deg);border: 1px solid #FFFFFF`\n                const icon = L.divIcon({\n                    className: \"my-custom-pin\",\n                    iconAnchor: [0, 24],\n                    labelAnchor: [-6, 0],\n                    popupAnchor: [0, -36],\n                    html: `<span style=\"${markerHtmlStyles}\" />`\n                });\n                L.marker(coords, {icon})\n                    .addTo(this.mymap)\n                    .bindPopup(p.name+'<br/>'+(p.points > 0  ? 'Требуются баллы: ' + p.points : ''));\n            },\n            getPlaces() {\n                window.axios.get('/mapObject/', {params: {}}).then((response) => {\n                    this.places = response.data.data;\n                    this.places.filter((v) => v.type === 'polygon').forEach((p,i) => {\n                        let polygon = L.polygon(p.coords, {color: p.color});\n                        polygon.addTo(this.mymap)\n                            .bindPopup(p.name+'<br/>'+(p.points > 0  ? 'Требуются баллы: ' + p.points : ''));\n                        this.places[i].polygon = polygon;\n                        polygon.place = p;\n                        this.editableLayers.addLayer(polygon);\n                    })\n                    this.places.filter((v) => v.type === 'marker').forEach((p,i) => {\n                       this.addDivMarker({lat:p.lat, lng:p.lng}, p.color);\n                    })\n                }).catch((e) => {\n                    console.log(e);\n                });\n            },\n            save() {\n                let data = {\n                    id: this.place.id,\n                    color: this.place.color,\n                    coords: this.place.coords,\n                    name: this.place.name,\n                    points: this.place.points,\n                    type: this.place.type,\n                };\n                data.color = data.color.hexa || data.color;\n                window.axios[data.id ?'put' : 'post']('/mapObject/'+(data.id||''), data).then((response) => {\n                    this.getPlaces();\n                    this.place = {};\n                    this.show = false;\n                    // this.mymap.addLayer(this.place.layer);\n                }).catch((e) => {\n                    alert('Ошибка. Проверьте данные.');\n                    console.log(e);\n                });\n            },\n            delete(place){\n                window.axios.delete('/mapObject/'+place.id).then((response) => {\n                    this.getPlaces();\n                }).catch((e) => {\n                    console.log(e);\n                });\n            }\n        }\n    }\n</script>\n\n<style scoped>\n    #mapid {\n        min-height: calc(100vh - 64px);\n        position:absolute;\n        height: calc(100vh - 64px);\n        width: 100%;\n    }\n    .map-top-dialog{\n        z-index: 10001 !important;\n    }\n</style>\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWU/MGQ3MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWFwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWFwLnZ1ZT85YTNkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXAudnVlP2EyZTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWU/M2FhZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0EsYUFEQTtBQUVBO0FBQUE7QUFDQSxpQkFEQTtBQUVBLGdCQUNBLHFFQURBLENBRkE7QUFLQSwwQ0FMQTtBQU1BLGdCQU5BO0FBT0EsZUFQQTtBQVFBLGlCQVJBO0FBU0E7QUFUQTtBQUFBLEdBRkE7QUFhQSxTQWJBLHFCQWFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSw2S0FEQTtBQUVBLGlCQUZBO0FBR0EsOEJBSEE7QUFJQSxtQkFKQTtBQUtBLG9CQUxBO0FBTUE7QUFOQTtBQVFBO0FBQ0E7QUFDQSx3Q0FDQSxTQURBLENBQ0EsSUFEQSxFQUVBLFNBRkE7QUFHQSxLQUpBO0FBS0E7QUFDQSwwQkFEQTtBQUVBO0FBQ0EsdUJBREE7QUFFQTtBQUNBLGlDQURBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBQ0E7QUFDQSxzREFGQSxDQUVBOztBQUZBLFdBRkE7QUFNQTtBQUNBO0FBREE7QUFOQSxTQUZBO0FBWUEscUJBWkE7QUFZQTtBQUNBLDJCQWJBO0FBYUE7QUFDQSx3QkFkQTtBQWVBO0FBZkEsT0FGQTtBQW1CQTtBQUNBLHlDQURBO0FBQ0E7QUFDQSxvQkFGQTtBQUdBO0FBSEE7QUFuQkE7QUF5QkE7QUFFQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGdDQUFnQywrQ0FBK0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsK0JBQStCO0FBQy9CLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdHQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyx1dEJBQThXO0FBQ3BZO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwySkFBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJqcy9jaHVua3MvcmVzb3VyY2VzX2pzX3BhZ2VzX01hcF92dWUyOWYwZmYxMjNlN2M3MGFjZTdiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWEtMCBwYS0wXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7XCI+XG4gICAgICAgIDxkaXYgaWQ9XCJtYXBpZFwiPjwvZGl2PlxuICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cInNob3dcIj5cbiAgICAgICAgICAgIDx2LWNvbnRhaW5lciBtYXAtdG9wLWRpYWxvZz5cbiAgICAgICAgICAgICAgICA8di1jYXJkIGVsZXZhdGlvbj1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT7QodC+0LfQtNCw0L3QuNC1INC30L7QvdGLPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBsYWNlLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCd0LDQt9Cy0LDQvdC40LVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwbGFjZS5wb2ludHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQkdCw0LvQu9GLINCx0LvQsNCz0L7QtNCw0YDQvdC+0YHRgtC4XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29sb3ItcGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdC1zaXplPVwiMzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWNhbnZhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLW1vZGUtc3dpdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJoZXhhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBsYWNlLmNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhdGNoZXMtbWF4LWhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC92LWNvbG9yLXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImRhcmtcIiBAY2xpY2s9XCJzYXZlXCIgOmRpc2FibGVkPVwicGxhY2UubmFtZSA9PSAnJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgIDwvdi1kaWFsb2c+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNYXBcIixcbiAgICAgICAgZGF0YTogKHZtKSA9PiAoe1xuICAgICAgICAgICAgbXltYXAgOiBudWxsLFxuICAgICAgICAgICAgbWFya2VyczogW1xuICAgICAgICAgICAgICAgIFtbNTUuNTMwNjQ4LCA0Ny41MDUxMjJdLCAn0JTQvtC8INC60YPQu9GM0YLRg9GA0Ys8YnI+INCQ0LTQvNC40L3QuNGB0YLRgNCw0YbQuNGPINC/0L7RgdC70LXQu9C10L3QuNGPJ10sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZWRpdGFibGVMYXllcnM6bmV3IEwuRmVhdHVyZUdyb3VwKCksXG4gICAgICAgICAgICBwbGFjZXM6IFtdLFxuICAgICAgICAgICAgcGxhY2U6IHt9LFxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICBkcmF3Q29udHJvbDogbnVsbCxcbiAgICAgICAgfSksXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLm15bWFwID0gTC5tYXAoJ21hcGlkJywge2RyYXdDb250cm9sOiBmYWxzZX0pLnNldFZpZXcoWzU1LjUzNjQ0NiwgNDcuNDk4NjAwXSwgMTMpO1xuICAgICAgICAgICAgbGV0IG9zbSA9IEwudGlsZUxheWVyKCdodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS97aWR9L3RpbGVzL3t6fS97eH0ve3l9P2FjY2Vzc190b2tlbj1way5leUoxSWpvaWFuVnlZVGsySWl3aVlTSTZJbU5yY0d3MU1XVnpPREZrYXpReWQyODRialkwWldJeGJtSWlmUS5DV0c5TDJyTVN0TE8zaTNBT2dybnlRJywge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uOiAnTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMsIEltYWdlcnkgwqkgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vXCI+TWFwYm94PC9hPicsXG4gICAgICAgICAgICAgICAgbWF4Wm9vbTogMTgsXG4gICAgICAgICAgICAgICAgaWQ6ICdtYXBib3gvc3RyZWV0cy12MTEnLFxuICAgICAgICAgICAgICAgIHRpbGVTaXplOiA1MTIsXG4gICAgICAgICAgICAgICAgem9vbU9mZnNldDogLTEsXG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46ICd5b3VyLm1hcGJveC5hY2Nlc3MudG9rZW4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgb3NtLmFkZFRvKHRoaXMubXltYXApXG4gICAgICAgICAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgodik9PiB7XG4gICAgICAgICAgICAgICAgTC5tYXJrZXIodlswXSkuYWRkVG8odGhpcy5teW1hcClcbiAgICAgICAgICAgICAgICAgICAgLmJpbmRQb3B1cCh2WzFdKVxuICAgICAgICAgICAgICAgICAgICAub3BlblBvcHVwKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3ByaWdodCcsXG4gICAgICAgICAgICAgICAgZHJhdzoge1xuICAgICAgICAgICAgICAgICAgICBwb2x5bGluZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHBvbHlnb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93SW50ZXJzZWN0aW9uOiB0cnVlLCAvLyBSZXN0cmljdHMgc2hhcGVzIHRvIHNpbXBsZSBwb2x5Z29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0Vycm9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZTFlMTAwJywgLy8gQ29sb3IgdGhlIHNoYXBlIHdpbGwgdHVybiB3aGVuIGludGVyc2VjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn0JLRiyDQvdC1INC80L7QttC10YIg0L/QvtGB0YLQsNCy0LjRgtGMINGC0YPRgiDRgtC+0YfQutGDJyAvLyBNZXNzYWdlIHRoYXQgd2lsbCBzaG93IHdoZW4gaW50ZXJzZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGVPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYmFkYTU1J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaXJjbGU6IGZhbHNlLCAvLyBUdXJucyBvZmYgdGhpcyBkcmF3aW5nIHRvb2xcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlbWFya2VyOiBmYWxzZSwgLy8gVHVybnMgb2ZmIHRoaXMgZHJhd2luZyB0b29sXG4gICAgICAgICAgICAgICAgICAgIHJlY3RhbmdsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVkaXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUdyb3VwOiB0aGlzLmVkaXRhYmxlTGF5ZXJzLCAvL1JFUVVJUkVEISFcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBlZGl0OiB0cnVlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm15bWFwLmFkZExheWVyKHRoaXMuZWRpdGFibGVMYXllcnMpO1xuXG4gICAgICAgICAgICB0aGlzLmRyYXdDb250cm9sID0gbmV3IEwuQ29udHJvbC5EcmF3KG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0KSB0aGlzLm15bWFwLmFkZENvbnRyb2wodGhpcy5kcmF3Q29udHJvbCk7XG4gICAgICAgICAgICB0aGlzLm15bWFwLm9uKEwuRHJhdy5FdmVudC5DUkVBVEVELCAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IGUubGF5ZXJUeXBlLFxuICAgICAgICAgICAgICAgICAgICBsYXllciA9IGUubGF5ZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzOiBlLmxheWVyVHlwZSA9PT0gJ3BvaW50JyA/IGxheWVyLl9sYXRsbmdzIDogbGF5ZXIuX2xhdGxuZyxcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm15bWFwLm9uKEwuRHJhdy5FdmVudC5FRElURUQsICAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhlLmxheWVycy5fbGF5ZXJzKS5sZW5ndGg+MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC80L7QttC90L4g0YLQvtC70YzQutC+IDEg0L7QsdGK0LXQutGCJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmZvckVhY2goKGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmwucGxhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZHM6IGwuX2xhdGxuZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcjpsLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm15bWFwLm9uKEwuRHJhdy5FdmVudC5ERUxFVEVELCAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmZvckVhY2goKGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUobC5wbGFjZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmdldFBsYWNlcygpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBhZGREaXZNYXJrZXIoY29vcmRzLCBjb2xvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG15Q3VzdG9tQ29sb3VyID0gY29sb3I7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2VySHRtbFN0eWxlcyA9IGBiYWNrZ3JvdW5kLWNvbG9yOiAke215Q3VzdG9tQ29sb3VyfTsgd2lkdGg6IDJyZW07aGVpZ2h0OiAycmVtO2Rpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMXJlbTt0b3A6IC0xcmVtO3Bvc2l0aW9uOiByZWxhdGl2ZTtib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMDt0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7Ym9yZGVyOiAxcHggc29saWQgI0ZGRkZGRmBcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gTC5kaXZJY29uKHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm15LWN1c3RvbS1waW5cIixcbiAgICAgICAgICAgICAgICAgICAgaWNvbkFuY2hvcjogWzAsIDI0XSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxBbmNob3I6IFstNiwgMF0sXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwQW5jaG9yOiBbMCwgLTM2XSxcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogYDxzcGFuIHN0eWxlPVwiJHttYXJrZXJIdG1sU3R5bGVzfVwiIC8+YFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIEwubWFya2VyKGNvb3Jkcywge2ljb259KVxuICAgICAgICAgICAgICAgICAgICAuYWRkVG8odGhpcy5teW1hcClcbiAgICAgICAgICAgICAgICAgICAgLmJpbmRQb3B1cChwLm5hbWUrJzxici8+JysocC5wb2ludHMgPiAwICA/ICfQotGA0LXQsdGD0Y7RgtGB0Y8g0LHQsNC70LvRizogJyArIHAucG9pbnRzIDogJycpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRQbGFjZXMoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL21hcE9iamVjdC8nLCB7cGFyYW1zOiB7fX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlcy5maWx0ZXIoKHYpID0+IHYudHlwZSA9PT0gJ3BvbHlnb24nKS5mb3JFYWNoKChwLGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb2x5Z29uID0gTC5wb2x5Z29uKHAuY29vcmRzLCB7Y29sb3I6IHAuY29sb3J9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbHlnb24uYWRkVG8odGhpcy5teW1hcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmluZFBvcHVwKHAubmFtZSsnPGJyLz4nKyhwLnBvaW50cyA+IDAgID8gJ9Ci0YDQtdCx0YPRjtGC0YHRjyDQsdCw0LvQu9GLOiAnICsgcC5wb2ludHMgOiAnJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZXNbaV0ucG9seWdvbiA9IHBvbHlnb247XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2x5Z29uLnBsYWNlID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdGFibGVMYXllcnMuYWRkTGF5ZXIocG9seWdvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VzLmZpbHRlcigodikgPT4gdi50eXBlID09PSAnbWFya2VyJykuZm9yRWFjaCgocCxpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRGl2TWFya2VyKHtsYXQ6cC5sYXQsIGxuZzpwLmxuZ30sIHAuY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhdmUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnBsYWNlLmlkLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5wbGFjZS5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzOiB0aGlzLnBsYWNlLmNvb3JkcyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wbGFjZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IHRoaXMucGxhY2UucG9pbnRzLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnBsYWNlLnR5cGUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBkYXRhLmNvbG9yID0gZGF0YS5jb2xvci5oZXhhIHx8IGRhdGEuY29sb3I7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zW2RhdGEuaWQgPydwdXQnIDogJ3Bvc3QnXSgnL21hcE9iamVjdC8nKyhkYXRhLmlkfHwnJyksIGRhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2UgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubXltYXAuYWRkTGF5ZXIodGhpcy5wbGFjZS5sYXllcik7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Ce0YjQuNCx0LrQsC4g0J/RgNC+0LLQtdGA0YzRgtC1INC00LDQvdC90YvQtS4nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlKHBsYWNlKXtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZGVsZXRlKCcvbWFwT2JqZWN0LycrcGxhY2UuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2VzKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAjbWFwaWQge1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5tYXAtdG9wLWRpYWxvZ3tcbiAgICAgICAgei1pbmRleDogMTAwMDEgIWltcG9ydGFudDtcbiAgICB9XG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jbWFwaWRbZGF0YS12LTQwNWJmZjYzXSB7XFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLm1hcC10b3AtZGlhbG9nW2RhdGEtdi00MDViZmY2M117XFxuICAgIHotaW5kZXg6IDEwMDAxICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL01hcC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWlNQTtJQUNBLDhCQUFBO0lBQ0EsaUJBQUE7SUFDQSwwQkFBQTtJQUNBLFdBQUE7QUFDQTtBQUNBO0lBQ0EseUJBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1hLTAgcGEtMFxcXCIgc3R5bGU9XFxcInBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogZmxleDtcXFwiPlxcbiAgICAgICAgPGRpdiBpZD1cXFwibWFwaWRcXFwiPjwvZGl2PlxcbiAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XFxcInNob3dcXFwiPlxcbiAgICAgICAgICAgIDx2LWNvbnRhaW5lciBtYXAtdG9wLWRpYWxvZz5cXG4gICAgICAgICAgICAgICAgPHYtY2FyZCBlbGV2YXRpb249XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT7QodC+0LfQtNCw0L3QuNC1INC30L7QvdGLPC92LWNhcmQtdGl0bGU+XFxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicGxhY2UubmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCLQndCw0LfQstCw0L3QuNC1XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicGxhY2UucG9pbnRzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcItCR0LDQu9C70Ysg0LHQu9Cw0LPQvtC00LDRgNC90L7RgdGC0LhcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb2xvci1waWNrZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdC1zaXplPVxcXCIzMlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtY2FudmFzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLW1vZGUtc3dpdGNoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPVxcXCJoZXhhXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicGxhY2UuY29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hlcy1tYXgtaGVpZ2h0PVxcXCIyMDBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvdi1jb2xvci1waWNrZXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJkYXJrXFxcIiBAY2xpY2s9XFxcInNhdmVcXFwiIDpkaXNhYmxlZD1cXFwicGxhY2UubmFtZSA9PSAnJ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cXG4gICAgICAgICAgICA8L3YtY29udGFpbmVyPlxcbiAgICAgICAgPC92LWRpYWxvZz5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICBuYW1lOiBcXFwiTWFwXFxcIixcXG4gICAgICAgIGRhdGE6ICh2bSkgPT4gKHtcXG4gICAgICAgICAgICBteW1hcCA6IG51bGwsXFxuICAgICAgICAgICAgbWFya2VyczogW1xcbiAgICAgICAgICAgICAgICBbWzU1LjUzMDY0OCwgNDcuNTA1MTIyXSwgJ9CU0L7QvCDQutGD0LvRjNGC0YPRgNGLPGJyPiDQkNC00LzQuNC90LjRgdGC0YDQsNGG0LjRjyDQv9C+0YHQu9C10LvQtdC90LjRjyddLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgZWRpdGFibGVMYXllcnM6bmV3IEwuRmVhdHVyZUdyb3VwKCksXFxuICAgICAgICAgICAgcGxhY2VzOiBbXSxcXG4gICAgICAgICAgICBwbGFjZToge30sXFxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXFxuICAgICAgICAgICAgZHJhd0NvbnRyb2w6IG51bGwsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICAgICAgdGhpcy5teW1hcCA9IEwubWFwKCdtYXBpZCcsIHtkcmF3Q29udHJvbDogZmFsc2V9KS5zZXRWaWV3KFs1NS41MzY0NDYsIDQ3LjQ5ODYwMF0sIDEzKTtcXG4gICAgICAgICAgICBsZXQgb3NtID0gTC50aWxlTGF5ZXIoJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL3tpZH0vdGlsZXMve3p9L3t4fS97eX0/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pYW5WeVlUazJJaXdpWVNJNkltTnJjR3cxTVdWek9ERmthelF5ZDI4NGJqWTBaV0l4Ym1JaWZRLkNXRzlMMnJNU3RMTzNpM0FPZ3JueVEnLCB7XFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uOiAnTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFxcXCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzLCBJbWFnZXJ5IMKpIDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vXFxcIj5NYXBib3g8L2E+JyxcXG4gICAgICAgICAgICAgICAgbWF4Wm9vbTogMTgsXFxuICAgICAgICAgICAgICAgIGlkOiAnbWFwYm94L3N0cmVldHMtdjExJyxcXG4gICAgICAgICAgICAgICAgdGlsZVNpemU6IDUxMixcXG4gICAgICAgICAgICAgICAgem9vbU9mZnNldDogLTEsXFxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiAneW91ci5tYXBib3guYWNjZXNzLnRva2VuJ1xcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgb3NtLmFkZFRvKHRoaXMubXltYXApXFxuICAgICAgICAgICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKHYpPT4ge1xcbiAgICAgICAgICAgICAgICBMLm1hcmtlcih2WzBdKS5hZGRUbyh0aGlzLm15bWFwKVxcbiAgICAgICAgICAgICAgICAgICAgLmJpbmRQb3B1cCh2WzFdKVxcbiAgICAgICAgICAgICAgICAgICAgLm9wZW5Qb3B1cCgpXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wcmlnaHQnLFxcbiAgICAgICAgICAgICAgICBkcmF3OiB7XFxuICAgICAgICAgICAgICAgICAgICBwb2x5bGluZTogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICBwb2x5Z29uOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dJbnRlcnNlY3Rpb246IHRydWUsIC8vIFJlc3RyaWN0cyBzaGFwZXMgdG8gc2ltcGxlIHBvbHlnb25zXFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0Vycm9yOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2UxZTEwMCcsIC8vIENvbG9yIHRoZSBzaGFwZSB3aWxsIHR1cm4gd2hlbiBpbnRlcnNlY3RzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfQktGLINC90LUg0LzQvtC20LXRgiDQv9C+0YHRgtCw0LLQuNGC0Ywg0YLRg9GCINGC0L7Rh9C60YMnIC8vIE1lc3NhZ2UgdGhhdCB3aWxsIHNob3cgd2hlbiBpbnRlcnNlY3RcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlT3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNiYWRhNTUnXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZTogZmFsc2UsIC8vIFR1cm5zIG9mZiB0aGlzIGRyYXdpbmcgdG9vbFxcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlbWFya2VyOiBmYWxzZSwgLy8gVHVybnMgb2ZmIHRoaXMgZHJhd2luZyB0b29sXFxuICAgICAgICAgICAgICAgICAgICByZWN0YW5nbGU6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyOiB0cnVlLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBlZGl0OiB7XFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlR3JvdXA6IHRoaXMuZWRpdGFibGVMYXllcnMsIC8vUkVRVUlSRUQhIVxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgZWRpdDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH07XFxuICAgICAgICAgICAgdGhpcy5teW1hcC5hZGRMYXllcih0aGlzLmVkaXRhYmxlTGF5ZXJzKTtcXG5cXG4gICAgICAgICAgICB0aGlzLmRyYXdDb250cm9sID0gbmV3IEwuQ29udHJvbC5EcmF3KG9wdGlvbnMpO1xcbiAgICAgICAgICAgIGlmICh0aGlzLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNCkgdGhpcy5teW1hcC5hZGRDb250cm9sKHRoaXMuZHJhd0NvbnRyb2wpO1xcbiAgICAgICAgICAgIHRoaXMubXltYXAub24oTC5EcmF3LkV2ZW50LkNSRUFURUQsICAoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IGUubGF5ZXJUeXBlLFxcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIgPSBlLmxheWVyO1xcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlID0ge1xcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzOiBlLmxheWVyVHlwZSA9PT0gJ3BvaW50JyA/IGxheWVyLl9sYXRsbmdzIDogbGF5ZXIuX2xhdGxuZyxcXG4gICAgICAgICAgICAgICAgICAgIGxheWVyLFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcXG4gICAgICAgICAgICAgICAgfTtcXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB0aGlzLm15bWFwLm9uKEwuRHJhdy5FdmVudC5FRElURUQsICAoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhlLmxheWVycy5fbGF5ZXJzKS5sZW5ndGggIT09IDEpIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmxlbmd0aD4xKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC80L7QttC90L4g0YLQvtC70YzQutC+IDEg0L7QsdGK0LXQutGCJyk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZS5sYXllcnMuX2xheWVycykuZm9yRWFjaCgobCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZSA9IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5sLnBsYWNlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkczogbC5fbGF0bG5ncyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcjpsLFxcbiAgICAgICAgICAgICAgICAgICAgfTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIHRoaXMubXltYXAub24oTC5EcmF3LkV2ZW50LkRFTEVURUQsICAoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmZvckVhY2goKGwpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKGwucGxhY2UpO1xcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2VzKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGFkZERpdk1hcmtlcihjb29yZHMsIGNvbG9yKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IG15Q3VzdG9tQ29sb3VyID0gY29sb3I7XFxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlckh0bWxTdHlsZXMgPSBgYmFja2dyb3VuZC1jb2xvcjogJHtteUN1c3RvbUNvbG91cn07IHdpZHRoOiAycmVtO2hlaWdodDogMnJlbTtkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xcmVtO3RvcDogLTFyZW07cG9zaXRpb246IHJlbGF0aXZlO2JvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwO3RyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGYFxcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gTC5kaXZJY29uKHtcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXFxcIm15LWN1c3RvbS1waW5cXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkFuY2hvcjogWzAsIDI0XSxcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQW5jaG9yOiBbLTYsIDBdLFxcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBBbmNob3I6IFswLCAtMzZdLFxcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogYDxzcGFuIHN0eWxlPVxcXCIke21hcmtlckh0bWxTdHlsZXN9XFxcIiAvPmBcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgIEwubWFya2VyKGNvb3Jkcywge2ljb259KVxcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRvKHRoaXMubXltYXApXFxuICAgICAgICAgICAgICAgICAgICAuYmluZFBvcHVwKHAubmFtZSsnPGJyLz4nKyhwLnBvaW50cyA+IDAgID8gJ9Ci0YDQtdCx0YPRjtGC0YHRjyDQsdCw0LvQu9GLOiAnICsgcC5wb2ludHMgOiAnJykpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZ2V0UGxhY2VzKCkge1xcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvbWFwT2JqZWN0LycsIHtwYXJhbXM6IHt9fSkudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZXMuZmlsdGVyKCh2KSA9PiB2LnR5cGUgPT09ICdwb2x5Z29uJykuZm9yRWFjaCgocCxpKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvbHlnb24gPSBMLnBvbHlnb24ocC5jb29yZHMsIHtjb2xvcjogcC5jb2xvcn0pO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbHlnb24uYWRkVG8odGhpcy5teW1hcClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJpbmRQb3B1cChwLm5hbWUrJzxici8+JysocC5wb2ludHMgPiAwICA/ICfQotGA0LXQsdGD0Y7RgtGB0Y8g0LHQsNC70LvRizogJyArIHAucG9pbnRzIDogJycpKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlc1tpXS5wb2x5Z29uID0gcG9seWdvbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2x5Z29uLnBsYWNlID0gcDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRhYmxlTGF5ZXJzLmFkZExheWVyKHBvbHlnb24pO1xcbiAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VzLmZpbHRlcigodikgPT4gdi50eXBlID09PSAnbWFya2VyJykuZm9yRWFjaCgocCxpKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZERpdk1hcmtlcih7bGF0OnAubGF0LCBsbmc6cC5sbmd9LCBwLmNvbG9yKTtcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBzYXZlKCkge1xcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnBsYWNlLmlkLFxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMucGxhY2UuY29sb3IsXFxuICAgICAgICAgICAgICAgICAgICBjb29yZHM6IHRoaXMucGxhY2UuY29vcmRzLFxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wbGFjZS5uYW1lLFxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiB0aGlzLnBsYWNlLnBvaW50cyxcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMucGxhY2UudHlwZSxcXG4gICAgICAgICAgICAgICAgfTtcXG4gICAgICAgICAgICAgICAgZGF0YS5jb2xvciA9IGRhdGEuY29sb3IuaGV4YSB8fCBkYXRhLmNvbG9yO1xcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3NbZGF0YS5pZCA/J3B1dCcgOiAncG9zdCddKCcvbWFwT2JqZWN0LycrKGRhdGEuaWR8fCcnKSwgZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2VzKCk7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlID0ge307XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubXltYXAuYWRkTGF5ZXIodGhpcy5wbGFjZS5sYXllcik7XFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBhbGVydCgn0J7RiNC40LHQutCwLiDQn9GA0L7QstC10YDRjNGC0LUg0LTQsNC90L3Ri9C1LicpO1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZGVsZXRlKHBsYWNlKXtcXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmRlbGV0ZSgnL21hcE9iamVjdC8nK3BsYWNlLmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGFjZXMoKTtcXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbiAgICAjbWFwaWQge1xcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIC5tYXAtdG9wLWRpYWxvZ3tcXG4gICAgICAgIHotaW5kZXg6IDEwMDAxICFpbXBvcnRhbnQ7XFxuICAgIH1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDA1YmZmNjMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9NYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDA1YmZmNjMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQwNWJmZjYzXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDA1YmZmNjMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDA1YmZmNjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDA1YmZmNjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDA1YmZmNjMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDA1YmZmNjMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9NYXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1hLTAgcGEtMFwiLFxuICAgICAgc3RhdGljU3R5bGU6IHsgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgZGlzcGxheTogXCJmbGV4XCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJtYXBpZFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5zaG93ID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJtYXAtdG9wLWRpYWxvZ1wiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGVsZXZhdGlvbjogXCIwXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtfdm0uX3YoXCLQodC+0LfQtNCw0L3QuNC1INC30L7QvdGLXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcItCd0LDQt9Cy0LDQvdC40LVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wbGFjZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBsYWNlLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBsYWNlLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJudW1iZXJcIiwgbGFiZWw6IFwi0JHQsNC70LvRiyDQsdC70LDQs9C+0LTQsNGA0L3QvtGB0YLQuFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBsYWNlLnBvaW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wbGFjZSwgXCJwb2ludHNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBsYWNlLnBvaW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY29sb3ItcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZG90LXNpemVcIjogXCIzMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtY2FudmFzXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGlkZS1tb2RlLXN3aXRjaFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcImhleGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzd2F0Y2hlcy1tYXgtaGVpZ2h0XCI6IFwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBsYWNlLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBsYWNlLCBcImNvbG9yXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwbGFjZS5jb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJkYXJrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5wbGFjZS5uYW1lID09IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDA1YmZmNjMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjNlMmUwZDU0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQwNWJmZjYzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQwNWJmZjYzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9