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
      console.log(_this.place.coords);
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
          var myCustomColour = p.color;
          var markerHtmlStyles = "background-color: ".concat(myCustomColour, "; width: 2rem;height: 2rem;display: block;\n                      left: -1rem;top: -1rem;position: relative;border-radius: 2rem 2rem 0;transform: rotate(45deg);border: 1px solid #FFFFFF");
          var icon = L.divIcon({
            className: "my-custom-pin",
            iconAnchor: [0, 24],
            labelAnchor: [-6, 0],
            popupAnchor: [0, -36],
            html: "<span style=\"".concat(markerHtmlStyles, "\" />")
          });
          console.log({
            lat: p.coords.lat,
            lng: p.coords.lng
          }, JSON.stringify(p));
          L.marker({
            lat: p.coords.lat,
            lng: p.coords.lng
          }, {
            icon: icon
          }).addTo(_this2.mymap).bindPopup(p.name + '<br/>' + (p.points > 0 ? 'Требуются баллы: ' + p.points : ''));
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#mapid[data-v-405bff63] {\n    min-height: calc(100vh - 64px);\n    position:absolute;\n    height: calc(100vh - 64px);\n    width: 100%;\n}\n.map-top-dialog[data-v-405bff63]{\n    z-index: 10001 !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/Map.vue"],"names":[],"mappings":";AAgMA;IACA,8BAAA;IACA,iBAAA;IACA,0BAAA;IACA,WAAA;AACA;AACA;IACA,yBAAA;AACA","sourcesContent":["<template>\n    <div class=\"ma-0 pa-0\" style=\"position: relative; display: flex;\">\n        <div id=\"mapid\"></div>\n        <v-dialog v-model=\"show\">\n            <v-container map-top-dialog>\n                <v-card elevation=\"0\">\n                    <v-card-title>Создание зоны</v-card-title>\n                    <v-card-text>\n                        <v-text-field\n                                v-model=\"place.name\"\n                                label=\"Название\"/>\n                        <v-text-field\n                                v-model=\"place.points\"\n                                type=\"number\"\n                                label=\"Баллы благодарности\"/>\n                        <v-color-picker\n                                dot-size=\"32\"\n                                hide-canvas\n                                hide-mode-switch\n                                mode=\"hexa\"\n                                v-model=\"place.color\"\n                                swatches-max-height=\"200\"\n                        ></v-color-picker>\n                        <v-btn color=\"dark\" @click=\"save\" :disabled=\"place.name == ''\">\n                            Сохранить\n                        </v-btn>\n                    </v-card-text>\n                </v-card>\n            </v-container>\n        </v-dialog>\n    </div>\n</template>\n\n<script>\n    export default {\n        name: \"Map\",\n        data: (vm) => ({\n            mymap : null,\n            markers: [\n                [[55.530648, 47.505122], 'Дом культуры<br> Администрация послеления'],\n            ],\n            editableLayers:new L.FeatureGroup(),\n            places: [],\n            place: {},\n            show: false,\n            drawControl: null,\n        }),\n        mounted() {\n            this.mymap = L.map('mapid', {drawControl: false}).setView([55.536446, 47.498600], 13);\n            let osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVyYTk2IiwiYSI6ImNrcGw1MWVzODFkazQyd284bjY0ZWIxbmIifQ.CWG9L2rMStLO3i3AOgrnyQ', {\n                attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n                maxZoom: 18,\n                id: 'mapbox/streets-v11',\n                tileSize: 512,\n                zoomOffset: -1,\n                accessToken: 'your.mapbox.access.token'\n            })\n            osm.addTo(this.mymap)\n            this.markers.forEach((v)=> {\n                L.marker(v[0]).addTo(this.mymap)\n                    .bindPopup(v[1])\n                    .openPopup()\n            });\n            var options = {\n                position: 'topright',\n                draw: {\n                    polyline: false,\n                    polygon: {\n                        allowIntersection: true, // Restricts shapes to simple polygons\n                        drawError: {\n                            color: '#e1e100', // Color the shape will turn when intersects\n                            message: 'Вы не может поставить тут точку' // Message that will show when intersect\n                        },\n                        shapeOptions: {\n                            color: '#bada55'\n                        }\n                    },\n                    circle: false, // Turns off this drawing tool\n                    circlemarker: false, // Turns off this drawing tool\n                    rectangle: false,\n                    marker: true,\n                },\n                edit: {\n                    featureGroup: this.editableLayers, //REQUIRED!!\n                    remove: true,\n                    edit: true,\n                }\n            };\n            this.mymap.addLayer(this.editableLayers);\n\n            this.drawControl = new L.Control.Draw(options);\n            if (this.$store.state.auth.user.role === 1024) this.mymap.addControl(this.drawControl);\n            this.mymap.on(L.Draw.Event.CREATED,  (e) => {\n                var type = e.layerType,\n                    layer = e.layer;\n                this.place = {\n                    coords: e.layerType === 'point' ? layer._latlngs : layer._latlng,\n                    layer,\n                    type,\n                };\n                console.log(this.place.coords);\n                this.show = true;\n            });\n            this.mymap.on(L.Draw.Event.EDITED,  (e) => {\n                if (Object.values(e.layers._layers).length !== 1) {\n                    if (Object.values(e.layers._layers).length>1) {\n                        alert('Редактировать можно только 1 объект');\n                        window.location.reload();\n                    }\n                    return;\n                }\n                Object.values(e.layers._layers).forEach((l) => {\n                    this.place = {\n                        ...l.place,\n                        coords: l._latlngs,\n                        layer:l,\n                    };\n                    this.show = true;\n                });\n            });\n            this.mymap.on(L.Draw.Event.DELETED,  (e) => {\n                Object.values(e.layers._layers).forEach((l) => {\n                    this.delete(l.place);\n                })\n            });\n\n            this.getPlaces();\n        },\n        methods: {\n            getPlaces() {\n                window.axios.get('/mapObject/', {params: {}}).then((response) => {\n                    this.places = response.data.data;\n                    this.places.filter((v) => v.type === 'polygon').forEach((p,i) => {\n                        let polygon = L.polygon(p.coords, {color: p.color});\n                        polygon.addTo(this.mymap)\n                            .bindPopup(p.name+'<br/>'+(p.points > 0  ? 'Требуются баллы: ' + p.points : ''));\n                        this.places[i].polygon = polygon;\n                        polygon.place = p;\n                        this.editableLayers.addLayer(polygon);\n                    })\n                    this.places.filter((v) => v.type === 'marker').forEach((p,i) => {\n                        const myCustomColour = p.color;\n                        const markerHtmlStyles = `background-color: ${myCustomColour}; width: 2rem;height: 2rem;display: block;\n                          left: -1rem;top: -1rem;position: relative;border-radius: 2rem 2rem 0;transform: rotate(45deg);border: 1px solid #FFFFFF`\n                        const icon = L.divIcon({\n                            className: \"my-custom-pin\",\n                            iconAnchor: [0, 24],\n                            labelAnchor: [-6, 0],\n                            popupAnchor: [0, -36],\n                            html: `<span style=\"${markerHtmlStyles}\" />`\n                        })\n                        console.log({lat:p.coords.lat, lng:p.coords.lng}, JSON.stringify(p));\n                        L.marker({lat:p.coords.lat, lng:p.coords.lng}, {icon})\n                            .addTo(this.mymap)\n                            .bindPopup(p.name+'<br/>'+(p.points > 0  ? 'Требуются баллы: ' + p.points : ''));\n                    })\n                }).catch((e) => {\n                    console.log(e);\n                });\n            },\n            save() {\n                let data = {\n                    id: this.place.id,\n                    color: this.place.color,\n                    coords: this.place.coords,\n                    name: this.place.name,\n                    points: this.place.points,\n                    type: this.place.type,\n                };\n                data.color = data.color.hexa || data.color;\n                window.axios[data.id ?'put' : 'post']('/mapObject/'+(data.id||''), data).then((response) => {\n                    this.getPlaces();\n                    this.place = {};\n                    this.show = false;\n                    // this.mymap.addLayer(this.place.layer);\n                }).catch((e) => {\n                    alert('Ошибка. Проверьте данные.');\n                    console.log(e);\n                });\n            },\n            delete(place){\n                window.axios.delete('/mapObject/'+place.id).then((response) => {\n                    this.getPlaces();\n                }).catch((e) => {\n                    console.log(e);\n                });\n            }\n        }\n    }\n</script>\n\n<style scoped>\n    #mapid {\n        min-height: calc(100vh - 64px);\n        position:absolute;\n        height: calc(100vh - 64px);\n        width: 100%;\n    }\n    .map-top-dialog{\n        z-index: 10001 !important;\n    }\n</style>\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWU/MGQ3MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWFwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWFwLnZ1ZT85YTNkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXAudnVlP2EyZTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWU/M2FhZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0EsYUFEQTtBQUVBO0FBQUE7QUFDQSxpQkFEQTtBQUVBLGdCQUNBLHFFQURBLENBRkE7QUFLQSwwQ0FMQTtBQU1BLGdCQU5BO0FBT0EsZUFQQTtBQVFBLGlCQVJBO0FBU0E7QUFUQTtBQUFBLEdBRkE7QUFhQSxTQWJBLHFCQWFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSw2S0FEQTtBQUVBLGlCQUZBO0FBR0EsOEJBSEE7QUFJQSxtQkFKQTtBQUtBLG9CQUxBO0FBTUE7QUFOQTtBQVFBO0FBQ0E7QUFDQSx3Q0FDQSxTQURBLENBQ0EsSUFEQSxFQUVBLFNBRkE7QUFHQSxLQUpBO0FBS0E7QUFDQSwwQkFEQTtBQUVBO0FBQ0EsdUJBREE7QUFFQTtBQUNBLGlDQURBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBQ0E7QUFDQSxzREFGQSxDQUVBOztBQUZBLFdBRkE7QUFNQTtBQUNBO0FBREE7QUFOQSxTQUZBO0FBWUEscUJBWkE7QUFZQTtBQUNBLDJCQWJBO0FBYUE7QUFDQSx3QkFkQTtBQWVBO0FBZkEsT0FGQTtBQW1CQTtBQUNBLHlDQURBO0FBQ0E7QUFDQSxvQkFGQTtBQUdBO0FBSEE7QUFuQkE7QUF5QkE7QUFFQTtB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QTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsZ0NBQWdDLCtDQUErQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQiwrQkFBK0I7QUFDL0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0dBOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHV0QkFBOFc7QUFDcFk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJKQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfTWFwX3Z1ZTZiNGFhNzViODQ0NjFlMzliZGMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtYS0wIHBhLTBcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogZmxleDtcIj5cbiAgICAgICAgPGRpdiBpZD1cIm1hcGlkXCI+PC9kaXY+XG4gICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwic2hvd1wiPlxuICAgICAgICAgICAgPHYtY29udGFpbmVyIG1hcC10b3AtZGlhbG9nPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQgZWxldmF0aW9uPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPtCh0L7Qt9C00LDQvdC40LUg0LfQvtC90Ys8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGxhY2UubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J3QsNC30LLQsNC90LjQtVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBsYWNlLnBvaW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCR0LDQu9C70Ysg0LHQu9Cw0LPQvtC00LDRgNC90L7RgdGC0LhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb2xvci1waWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90LXNpemU9XCIzMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtY2FudmFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtbW9kZS1zd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImhleGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGxhY2UuY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hlcy1tYXgtaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3YtY29sb3ItcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZGFya1wiIEBjbGljaz1cInNhdmVcIiA6ZGlzYWJsZWQ9XCJwbGFjZS5uYW1lID09ICcnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgPC92LWRpYWxvZz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk1hcFwiLFxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XG4gICAgICAgICAgICBteW1hcCA6IG51bGwsXG4gICAgICAgICAgICBtYXJrZXJzOiBbXG4gICAgICAgICAgICAgICAgW1s1NS41MzA2NDgsIDQ3LjUwNTEyMl0sICfQlNC+0Lwg0LrRg9C70YzRgtGD0YDRizxicj4g0JDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0L/QvtGB0LvQtdC70LXQvdC40Y8nXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBlZGl0YWJsZUxheWVyczpuZXcgTC5GZWF0dXJlR3JvdXAoKSxcbiAgICAgICAgICAgIHBsYWNlczogW10sXG4gICAgICAgICAgICBwbGFjZToge30sXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIGRyYXdDb250cm9sOiBudWxsLFxuICAgICAgICB9KSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMubXltYXAgPSBMLm1hcCgnbWFwaWQnLCB7ZHJhd0NvbnRyb2w6IGZhbHNlfSkuc2V0VmlldyhbNTUuNTM2NDQ2LCA0Ny40OTg2MDBdLCAxMyk7XG4gICAgICAgICAgICBsZXQgb3NtID0gTC50aWxlTGF5ZXIoJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL3tpZH0vdGlsZXMve3p9L3t4fS97eX0/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pYW5WeVlUazJJaXdpWVNJNkltTnJjR3cxTVdWek9ERmthelF5ZDI4NGJqWTBaV0l4Ym1JaWZRLkNXRzlMMnJNU3RMTzNpM0FPZ3JueVEnLCB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRpb246ICdNYXAgZGF0YSAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycywgSW1hZ2VyeSDCqSA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9cIj5NYXBib3g8L2E+JyxcbiAgICAgICAgICAgICAgICBtYXhab29tOiAxOCxcbiAgICAgICAgICAgICAgICBpZDogJ21hcGJveC9zdHJlZXRzLXYxMScsXG4gICAgICAgICAgICAgICAgdGlsZVNpemU6IDUxMixcbiAgICAgICAgICAgICAgICB6b29tT2Zmc2V0OiAtMSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogJ3lvdXIubWFwYm94LmFjY2Vzcy50b2tlbidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBvc20uYWRkVG8odGhpcy5teW1hcClcbiAgICAgICAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKCh2KT0+IHtcbiAgICAgICAgICAgICAgICBMLm1hcmtlcih2WzBdKS5hZGRUbyh0aGlzLm15bWFwKVxuICAgICAgICAgICAgICAgICAgICAuYmluZFBvcHVwKHZbMV0pXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuUG9wdXAoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcHJpZ2h0JyxcbiAgICAgICAgICAgICAgICBkcmF3OiB7XG4gICAgICAgICAgICAgICAgICAgIHBvbHlsaW5lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcG9seWdvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dJbnRlcnNlY3Rpb246IHRydWUsIC8vIFJlc3RyaWN0cyBzaGFwZXMgdG8gc2ltcGxlIHBvbHlnb25zXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmF3RXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNlMWUxMDAnLCAvLyBDb2xvciB0aGUgc2hhcGUgd2lsbCB0dXJuIHdoZW4gaW50ZXJzZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfQktGLINC90LUg0LzQvtC20LXRgiDQv9C+0YHRgtCw0LLQuNGC0Ywg0YLRg9GCINGC0L7Rh9C60YMnIC8vIE1lc3NhZ2UgdGhhdCB3aWxsIHNob3cgd2hlbiBpbnRlcnNlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZU9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNiYWRhNTUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZTogZmFsc2UsIC8vIFR1cm5zIG9mZiB0aGlzIGRyYXdpbmcgdG9vbFxuICAgICAgICAgICAgICAgICAgICBjaXJjbGVtYXJrZXI6IGZhbHNlLCAvLyBUdXJucyBvZmYgdGhpcyBkcmF3aW5nIHRvb2xcbiAgICAgICAgICAgICAgICAgICAgcmVjdGFuZ2xlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlR3JvdXA6IHRoaXMuZWRpdGFibGVMYXllcnMsIC8vUkVRVUlSRUQhIVxuICAgICAgICAgICAgICAgICAgICByZW1vdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGVkaXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubXltYXAuYWRkTGF5ZXIodGhpcy5lZGl0YWJsZUxheWVycyk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhd0NvbnRyb2wgPSBuZXcgTC5Db250cm9sLkRyYXcob3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjQpIHRoaXMubXltYXAuYWRkQ29udHJvbCh0aGlzLmRyYXdDb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMubXltYXAub24oTC5EcmF3LkV2ZW50LkNSRUFURUQsICAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gZS5sYXllclR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGxheWVyID0gZS5sYXllcjtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlID0ge1xuICAgICAgICAgICAgICAgICAgICBjb29yZHM6IGUubGF5ZXJUeXBlID09PSAncG9pbnQnID8gbGF5ZXIuX2xhdGxuZ3MgOiBsYXllci5fbGF0bG5nLFxuICAgICAgICAgICAgICAgICAgICBsYXllcixcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxhY2UuY29vcmRzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm15bWFwLm9uKEwuRHJhdy5FdmVudC5FRElURUQsICAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhlLmxheWVycy5fbGF5ZXJzKS5sZW5ndGg+MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC80L7QttC90L4g0YLQvtC70YzQutC+IDEg0L7QsdGK0LXQutGCJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmZvckVhY2goKGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmwucGxhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZHM6IGwuX2xhdGxuZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcjpsLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm15bWFwLm9uKEwuRHJhdy5FdmVudC5ERUxFVEVELCAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmZvckVhY2goKGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUobC5wbGFjZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmdldFBsYWNlcygpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRQbGFjZXMoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL21hcE9iamVjdC8nLCB7cGFyYW1zOiB7fX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlcy5maWx0ZXIoKHYpID0+IHYudHlwZSA9PT0gJ3BvbHlnb24nKS5mb3JFYWNoKChwLGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb2x5Z29uID0gTC5wb2x5Z29uKHAuY29vcmRzLCB7Y29sb3I6IHAuY29sb3J9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbHlnb24uYWRkVG8odGhpcy5teW1hcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmluZFBvcHVwKHAubmFtZSsnPGJyLz4nKyhwLnBvaW50cyA+IDAgID8gJ9Ci0YDQtdCx0YPRjtGC0YHRjyDQsdCw0LvQu9GLOiAnICsgcC5wb2ludHMgOiAnJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZXNbaV0ucG9seWdvbiA9IHBvbHlnb247XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2x5Z29uLnBsYWNlID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdGFibGVMYXllcnMuYWRkTGF5ZXIocG9seWdvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VzLmZpbHRlcigodikgPT4gdi50eXBlID09PSAnbWFya2VyJykuZm9yRWFjaCgocCxpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBteUN1c3RvbUNvbG91ciA9IHAuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJIdG1sU3R5bGVzID0gYGJhY2tncm91bmQtY29sb3I6ICR7bXlDdXN0b21Db2xvdXJ9OyB3aWR0aDogMnJlbTtoZWlnaHQ6IDJyZW07ZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xcmVtO3RvcDogLTFyZW07cG9zaXRpb246IHJlbGF0aXZlO2JvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwO3RyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGYFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IEwuZGl2SWNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm15LWN1c3RvbS1waW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQW5jaG9yOiBbMCwgMjRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQW5jaG9yOiBbLTYsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwQW5jaG9yOiBbMCwgLTM2XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiBgPHNwYW4gc3R5bGU9XCIke21hcmtlckh0bWxTdHlsZXN9XCIgLz5gXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coe2xhdDpwLmNvb3Jkcy5sYXQsIGxuZzpwLmNvb3Jkcy5sbmd9LCBKU09OLnN0cmluZ2lmeShwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBMLm1hcmtlcih7bGF0OnAuY29vcmRzLmxhdCwgbG5nOnAuY29vcmRzLmxuZ30sIHtpY29ufSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVG8odGhpcy5teW1hcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmluZFBvcHVwKHAubmFtZSsnPGJyLz4nKyhwLnBvaW50cyA+IDAgID8gJ9Ci0YDQtdCx0YPRjtGC0YHRjyDQsdCw0LvQu9GLOiAnICsgcC5wb2ludHMgOiAnJykpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhdmUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnBsYWNlLmlkLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5wbGFjZS5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzOiB0aGlzLnBsYWNlLmNvb3JkcyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wbGFjZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IHRoaXMucGxhY2UucG9pbnRzLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnBsYWNlLnR5cGUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBkYXRhLmNvbG9yID0gZGF0YS5jb2xvci5oZXhhIHx8IGRhdGEuY29sb3I7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zW2RhdGEuaWQgPydwdXQnIDogJ3Bvc3QnXSgnL21hcE9iamVjdC8nKyhkYXRhLmlkfHwnJyksIGRhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2UgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubXltYXAuYWRkTGF5ZXIodGhpcy5wbGFjZS5sYXllcik7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Ce0YjQuNCx0LrQsC4g0J/RgNC+0LLQtdGA0YzRgtC1INC00LDQvdC90YvQtS4nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlKHBsYWNlKXtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZGVsZXRlKCcvbWFwT2JqZWN0LycrcGxhY2UuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2VzKCk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAjbWFwaWQge1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5tYXAtdG9wLWRpYWxvZ3tcbiAgICAgICAgei1pbmRleDogMTAwMDEgIWltcG9ydGFudDtcbiAgICB9XG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jbWFwaWRbZGF0YS12LTQwNWJmZjYzXSB7XFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLm1hcC10b3AtZGlhbG9nW2RhdGEtdi00MDViZmY2M117XFxuICAgIHotaW5kZXg6IDEwMDAxICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXAudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFnTUE7SUFDQSw4QkFBQTtJQUNBLGlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxXQUFBO0FBQ0E7QUFDQTtJQUNBLHlCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYS0wIHBhLTBcXFwiIHN0eWxlPVxcXCJwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7XFxcIj5cXG4gICAgICAgIDxkaXYgaWQ9XFxcIm1hcGlkXFxcIj48L2Rpdj5cXG4gICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVxcXCJzaG93XFxcIj5cXG4gICAgICAgICAgICA8di1jb250YWluZXIgbWFwLXRvcC1kaWFsb2c+XFxuICAgICAgICAgICAgICAgIDx2LWNhcmQgZWxldmF0aW9uPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+0KHQvtC30LTQsNC90LjQtSDQt9C+0L3Rizwvdi1jYXJkLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInBsYWNlLm5hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwi0J3QsNC30LLQsNC90LjQtVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInBsYWNlLnBvaW50c1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCLQkdCw0LvQu9GLINCx0LvQsNCz0L7QtNCw0YDQvdC+0YHRgtC4XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29sb3ItcGlja2VyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3Qtc2l6ZT1cXFwiMzJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWNhbnZhc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZS1tb2RlLXN3aXRjaFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cXFwiaGV4YVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInBsYWNlLmNvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhdGNoZXMtbWF4LWhlaWdodD1cXFwiMjAwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3YtY29sb3ItcGlja2VyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cXFwiZGFya1xcXCIgQGNsaWNrPVxcXCJzYXZlXFxcIiA6ZGlzYWJsZWQ9XFxcInBsYWNlLm5hbWUgPT0gJydcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cXG4gICAgICAgICAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cXG4gICAgICAgIDwvdi1kaWFsb2c+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgbmFtZTogXFxcIk1hcFxcXCIsXFxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XFxuICAgICAgICAgICAgbXltYXAgOiBudWxsLFxcbiAgICAgICAgICAgIG1hcmtlcnM6IFtcXG4gICAgICAgICAgICAgICAgW1s1NS41MzA2NDgsIDQ3LjUwNTEyMl0sICfQlNC+0Lwg0LrRg9C70YzRgtGD0YDRizxicj4g0JDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0L/QvtGB0LvQtdC70LXQvdC40Y8nXSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIGVkaXRhYmxlTGF5ZXJzOm5ldyBMLkZlYXR1cmVHcm91cCgpLFxcbiAgICAgICAgICAgIHBsYWNlczogW10sXFxuICAgICAgICAgICAgcGxhY2U6IHt9LFxcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxcbiAgICAgICAgICAgIGRyYXdDb250cm9sOiBudWxsLFxcbiAgICAgICAgfSksXFxuICAgICAgICBtb3VudGVkKCkge1xcbiAgICAgICAgICAgIHRoaXMubXltYXAgPSBMLm1hcCgnbWFwaWQnLCB7ZHJhd0NvbnRyb2w6IGZhbHNlfSkuc2V0VmlldyhbNTUuNTM2NDQ2LCA0Ny40OTg2MDBdLCAxMyk7XFxuICAgICAgICAgICAgbGV0IG9zbSA9IEwudGlsZUxheWVyKCdodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS97aWR9L3RpbGVzL3t6fS97eH0ve3l9P2FjY2Vzc190b2tlbj1way5leUoxSWpvaWFuVnlZVGsySWl3aVlTSTZJbU5yY0d3MU1XVnpPREZrYXpReWQyODRialkwWldJeGJtSWlmUS5DV0c5TDJyTVN0TE8zaTNBT2dybnlRJywge1xcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbjogJ01hcCBkYXRhICZjb3B5OyA8YSBocmVmPVxcXCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcXFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycywgSW1hZ2VyeSDCqSA8YSBocmVmPVxcXCJodHRwczovL3d3dy5tYXBib3guY29tL1xcXCI+TWFwYm94PC9hPicsXFxuICAgICAgICAgICAgICAgIG1heFpvb206IDE4LFxcbiAgICAgICAgICAgICAgICBpZDogJ21hcGJveC9zdHJlZXRzLXYxMScsXFxuICAgICAgICAgICAgICAgIHRpbGVTaXplOiA1MTIsXFxuICAgICAgICAgICAgICAgIHpvb21PZmZzZXQ6IC0xLFxcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogJ3lvdXIubWFwYm94LmFjY2Vzcy50b2tlbidcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIG9zbS5hZGRUbyh0aGlzLm15bWFwKVxcbiAgICAgICAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKCh2KT0+IHtcXG4gICAgICAgICAgICAgICAgTC5tYXJrZXIodlswXSkuYWRkVG8odGhpcy5teW1hcClcXG4gICAgICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAodlsxXSlcXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuUG9wdXAoKVxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcHJpZ2h0JyxcXG4gICAgICAgICAgICAgICAgZHJhdzoge1xcbiAgICAgICAgICAgICAgICAgICAgcG9seWxpbmU6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgcG9seWdvbjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93SW50ZXJzZWN0aW9uOiB0cnVlLCAvLyBSZXN0cmljdHMgc2hhcGVzIHRvIHNpbXBsZSBwb2x5Z29uc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdFcnJvcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNlMWUxMDAnLCAvLyBDb2xvciB0aGUgc2hhcGUgd2lsbCB0dXJuIHdoZW4gaW50ZXJzZWN0c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn0JLRiyDQvdC1INC80L7QttC10YIg0L/QvtGB0YLQsNCy0LjRgtGMINGC0YPRgiDRgtC+0YfQutGDJyAvLyBNZXNzYWdlIHRoYXQgd2lsbCBzaG93IHdoZW4gaW50ZXJzZWN0XFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZU9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYmFkYTU1J1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBjaXJjbGU6IGZhbHNlLCAvLyBUdXJucyBvZmYgdGhpcyBkcmF3aW5nIHRvb2xcXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZW1hcmtlcjogZmFsc2UsIC8vIFR1cm5zIG9mZiB0aGlzIGRyYXdpbmcgdG9vbFxcbiAgICAgICAgICAgICAgICAgICAgcmVjdGFuZ2xlOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcjogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZWRpdDoge1xcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUdyb3VwOiB0aGlzLmVkaXRhYmxlTGF5ZXJzLCAvL1JFUVVJUkVEISFcXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZTogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgIGVkaXQ6IHRydWUsXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgICAgIHRoaXMubXltYXAuYWRkTGF5ZXIodGhpcy5lZGl0YWJsZUxheWVycyk7XFxuXFxuICAgICAgICAgICAgdGhpcy5kcmF3Q29udHJvbCA9IG5ldyBMLkNvbnRyb2wuRHJhdyhvcHRpb25zKTtcXG4gICAgICAgICAgICBpZiAodGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjQpIHRoaXMubXltYXAuYWRkQ29udHJvbCh0aGlzLmRyYXdDb250cm9sKTtcXG4gICAgICAgICAgICB0aGlzLm15bWFwLm9uKEwuRHJhdy5FdmVudC5DUkVBVEVELCAgKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBlLmxheWVyVHlwZSxcXG4gICAgICAgICAgICAgICAgICAgIGxheWVyID0gZS5sYXllcjtcXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZSA9IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkczogZS5sYXllclR5cGUgPT09ICdwb2ludCcgPyBsYXllci5fbGF0bG5ncyA6IGxheWVyLl9sYXRsbmcsXFxuICAgICAgICAgICAgICAgICAgICBsYXllcixcXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXFxuICAgICAgICAgICAgICAgIH07XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxhY2UuY29vcmRzKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB0aGlzLm15bWFwLm9uKEwuRHJhdy5FdmVudC5FRElURUQsICAoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhlLmxheWVycy5fbGF5ZXJzKS5sZW5ndGggIT09IDEpIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmxlbmd0aD4xKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC80L7QttC90L4g0YLQvtC70YzQutC+IDEg0L7QsdGK0LXQutGCJyk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZS5sYXllcnMuX2xheWVycykuZm9yRWFjaCgobCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZSA9IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5sLnBsYWNlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkczogbC5fbGF0bG5ncyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcjpsLFxcbiAgICAgICAgICAgICAgICAgICAgfTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIHRoaXMubXltYXAub24oTC5EcmF3LkV2ZW50LkRFTEVURUQsICAoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmZvckVhY2goKGwpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKGwucGxhY2UpO1xcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2VzKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGdldFBsYWNlcygpIHtcXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL21hcE9iamVjdC8nLCB7cGFyYW1zOiB7fX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VzLmZpbHRlcigodikgPT4gdi50eXBlID09PSAncG9seWdvbicpLmZvckVhY2goKHAsaSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb2x5Z29uID0gTC5wb2x5Z29uKHAuY29vcmRzLCB7Y29sb3I6IHAuY29sb3J9KTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2x5Z29uLmFkZFRvKHRoaXMubXltYXApXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAocC5uYW1lKyc8YnIvPicrKHAucG9pbnRzID4gMCAgPyAn0KLRgNC10LHRg9GO0YLRgdGPINCx0LDQu9C70Ys6ICcgKyBwLnBvaW50cyA6ICcnKSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZXNbaV0ucG9seWdvbiA9IHBvbHlnb247XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9seWdvbi5wbGFjZSA9IHA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YWJsZUxheWVycy5hZGRMYXllcihwb2x5Z29uKTtcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlcy5maWx0ZXIoKHYpID0+IHYudHlwZSA9PT0gJ21hcmtlcicpLmZvckVhY2goKHAsaSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG15Q3VzdG9tQ29sb3VyID0gcC5jb2xvcjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJIdG1sU3R5bGVzID0gYGJhY2tncm91bmQtY29sb3I6ICR7bXlDdXN0b21Db2xvdXJ9OyB3aWR0aDogMnJlbTtoZWlnaHQ6IDJyZW07ZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMXJlbTt0b3A6IC0xcmVtO3Bvc2l0aW9uOiByZWxhdGl2ZTtib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMDt0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7Ym9yZGVyOiAxcHggc29saWQgI0ZGRkZGRmBcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gTC5kaXZJY29uKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcXFwibXktY3VzdG9tLXBpblxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25BbmNob3I6IFswLCAyNF0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQW5jaG9yOiBbLTYsIDBdLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cEFuY2hvcjogWzAsIC0zNl0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IGA8c3BhbiBzdHlsZT1cXFwiJHttYXJrZXJIdG1sU3R5bGVzfVxcXCIgLz5gXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7bGF0OnAuY29vcmRzLmxhdCwgbG5nOnAuY29vcmRzLmxuZ30sIEpTT04uc3RyaW5naWZ5KHApKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBMLm1hcmtlcih7bGF0OnAuY29vcmRzLmxhdCwgbG5nOnAuY29vcmRzLmxuZ30sIHtpY29ufSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRvKHRoaXMubXltYXApXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAocC5uYW1lKyc8YnIvPicrKHAucG9pbnRzID4gMCAgPyAn0KLRgNC10LHRg9GO0YLRgdGPINCx0LDQu9C70Ys6ICcgKyBwLnBvaW50cyA6ICcnKSk7XFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgc2F2ZSgpIHtcXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XFxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wbGFjZS5pZCxcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnBsYWNlLmNvbG9yLFxcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzOiB0aGlzLnBsYWNlLmNvb3JkcyxcXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucGxhY2UubmFtZSxcXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogdGhpcy5wbGFjZS5wb2ludHMsXFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnBsYWNlLnR5cGUsXFxuICAgICAgICAgICAgICAgIH07XFxuICAgICAgICAgICAgICAgIGRhdGEuY29sb3IgPSBkYXRhLmNvbG9yLmhleGEgfHwgZGF0YS5jb2xvcjtcXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zW2RhdGEuaWQgPydwdXQnIDogJ3Bvc3QnXSgnL21hcE9iamVjdC8nKyhkYXRhLmlkfHwnJyksIGRhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYWNlcygpO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZSA9IHt9O1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm15bWFwLmFkZExheWVyKHRoaXMucGxhY2UubGF5ZXIpO1xcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Ce0YjQuNCx0LrQsC4g0J/RgNC+0LLQtdGA0YzRgtC1INC00LDQvdC90YvQtS4nKTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlbGV0ZShwbGFjZSl7XFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5kZWxldGUoJy9tYXBPYmplY3QvJytwbGFjZS5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2VzKCk7XFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4gICAgI21hcGlkIHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAubWFwLXRvcC1kaWFsb2d7XFxuICAgICAgICB6LWluZGV4OiAxMDAwMSAhaW1wb3J0YW50O1xcbiAgICB9XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQwNWJmZjYzJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTWFwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQwNWJmZjYzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0MDViZmY2M1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQwNWJmZjYzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQwNWJmZjYzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQwNWJmZjYzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQwNWJmZjYzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQwNWJmZjYzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvTWFwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtYS0wIHBhLTBcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGRpc3BsYXk6IFwiZmxleFwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwibWFwaWRcIiB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uc2hvdyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IFwibWFwLXRvcC1kaWFsb2dcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBlbGV2YXRpb246IFwiMFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbX3ZtLl92KFwi0KHQvtC30LTQsNC90LjQtSDQt9C+0L3Ri1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQndCw0LfQstCw0L3QuNC1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGxhY2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wbGFjZSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwbGFjZS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwibnVtYmVyXCIsIGxhYmVsOiBcItCR0LDQu9C70Ysg0LHQu9Cw0LPQvtC00LDRgNC90L7RgdGC0LhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wbGFjZS5wb2ludHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGxhY2UsIFwicG9pbnRzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwbGFjZS5wb2ludHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNvbG9yLXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRvdC1zaXplXCI6IFwiMzJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLWNhbnZhc1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtbW9kZS1zd2l0Y2hcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJoZXhhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3dhdGNoZXMtbWF4LWhlaWdodFwiOiBcIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wbGFjZS5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wbGFjZSwgXCJjb2xvclwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGxhY2UuY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZGFya1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0ucGxhY2UubmFtZSA9PSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2F2ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQwNWJmZjYzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzZTJlMGQ1NFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MDViZmY2MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MDViZmY2MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==