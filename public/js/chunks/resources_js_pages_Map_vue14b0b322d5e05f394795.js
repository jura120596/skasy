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
            lat: p.lat,
            lng: p.lng
          }, JSON.stringify(p));
          L.marker({
            lat: p.lat,
            lng: p.lng
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#mapid[data-v-405bff63] {\n    min-height: calc(100vh - 64px);\n    position:absolute;\n    height: calc(100vh - 64px);\n    width: 100%;\n}\n.map-top-dialog[data-v-405bff63]{\n    z-index: 10001 !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/Map.vue"],"names":[],"mappings":";AAgMA;IACA,8BAAA;IACA,iBAAA;IACA,0BAAA;IACA,WAAA;AACA;AACA;IACA,yBAAA;AACA","sourcesContent":["<template>\n    <div class=\"ma-0 pa-0\" style=\"position: relative; display: flex;\">\n        <div id=\"mapid\"></div>\n        <v-dialog v-model=\"show\">\n            <v-container map-top-dialog>\n                <v-card elevation=\"0\">\n                    <v-card-title>Создание зоны</v-card-title>\n                    <v-card-text>\n                        <v-text-field\n                                v-model=\"place.name\"\n                                label=\"Название\"/>\n                        <v-text-field\n                                v-model=\"place.points\"\n                                type=\"number\"\n                                label=\"Баллы благодарности\"/>\n                        <v-color-picker\n                                dot-size=\"32\"\n                                hide-canvas\n                                hide-mode-switch\n                                mode=\"hexa\"\n                                v-model=\"place.color\"\n                                swatches-max-height=\"200\"\n                        ></v-color-picker>\n                        <v-btn color=\"dark\" @click=\"save\" :disabled=\"place.name == ''\">\n                            Сохранить\n                        </v-btn>\n                    </v-card-text>\n                </v-card>\n            </v-container>\n        </v-dialog>\n    </div>\n</template>\n\n<script>\n    export default {\n        name: \"Map\",\n        data: (vm) => ({\n            mymap : null,\n            markers: [\n                [[55.530648, 47.505122], 'Дом культуры<br> Администрация послеления'],\n            ],\n            editableLayers:new L.FeatureGroup(),\n            places: [],\n            place: {},\n            show: false,\n            drawControl: null,\n        }),\n        mounted() {\n            this.mymap = L.map('mapid', {drawControl: false}).setView([55.536446, 47.498600], 13);\n            let osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVyYTk2IiwiYSI6ImNrcGw1MWVzODFkazQyd284bjY0ZWIxbmIifQ.CWG9L2rMStLO3i3AOgrnyQ', {\n                attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n                maxZoom: 18,\n                id: 'mapbox/streets-v11',\n                tileSize: 512,\n                zoomOffset: -1,\n                accessToken: 'your.mapbox.access.token'\n            })\n            osm.addTo(this.mymap)\n            this.markers.forEach((v)=> {\n                L.marker(v[0]).addTo(this.mymap)\n                    .bindPopup(v[1])\n                    .openPopup()\n            });\n            var options = {\n                position: 'topright',\n                draw: {\n                    polyline: false,\n                    polygon: {\n                        allowIntersection: true, // Restricts shapes to simple polygons\n                        drawError: {\n                            color: '#e1e100', // Color the shape will turn when intersects\n                            message: 'Вы не может поставить тут точку' // Message that will show when intersect\n                        },\n                        shapeOptions: {\n                            color: '#bada55'\n                        }\n                    },\n                    circle: false, // Turns off this drawing tool\n                    circlemarker: false, // Turns off this drawing tool\n                    rectangle: false,\n                    marker: true,\n                },\n                edit: {\n                    featureGroup: this.editableLayers, //REQUIRED!!\n                    remove: true,\n                    edit: true,\n                }\n            };\n            this.mymap.addLayer(this.editableLayers);\n\n            this.drawControl = new L.Control.Draw(options);\n            if (this.$store.state.auth.user.role === 1024) this.mymap.addControl(this.drawControl);\n            this.mymap.on(L.Draw.Event.CREATED,  (e) => {\n                var type = e.layerType,\n                    layer = e.layer;\n                this.place = {\n                    coords: e.layerType === 'point' ? layer._latlngs : layer._latlng,\n                    layer,\n                    type,\n                };\n                console.log(this.place.coords);\n                this.show = true;\n            });\n            this.mymap.on(L.Draw.Event.EDITED,  (e) => {\n                if (Object.values(e.layers._layers).length !== 1) {\n                    if (Object.values(e.layers._layers).length>1) {\n                        alert('Редактировать можно только 1 объект');\n                        window.location.reload();\n                    }\n                    return;\n                }\n                Object.values(e.layers._layers).forEach((l) => {\n                    this.place = {\n                        ...l.place,\n                        coords: l._latlngs,\n                        layer:l,\n                    };\n                    this.show = true;\n                });\n            });\n            this.mymap.on(L.Draw.Event.DELETED,  (e) => {\n                Object.values(e.layers._layers).forEach((l) => {\n                    this.delete(l.place);\n                })\n            });\n\n            this.getPlaces();\n        },\n        methods: {\n            getPlaces() {\n                window.axios.get('/mapObject/', {params: {}}).then((response) => {\n                    this.places = response.data.data;\n                    this.places.filter((v) => v.type === 'polygon').forEach((p,i) => {\n                        let polygon = L.polygon(p.coords, {color: p.color});\n                        polygon.addTo(this.mymap)\n                            .bindPopup(p.name+'<br/>'+(p.points > 0  ? 'Требуются баллы: ' + p.points : ''));\n                        this.places[i].polygon = polygon;\n                        polygon.place = p;\n                        this.editableLayers.addLayer(polygon);\n                    })\n                    this.places.filter((v) => v.type === 'marker').forEach((p,i) => {\n                        const myCustomColour = p.color;\n                        const markerHtmlStyles = `background-color: ${myCustomColour}; width: 2rem;height: 2rem;display: block;\n                          left: -1rem;top: -1rem;position: relative;border-radius: 2rem 2rem 0;transform: rotate(45deg);border: 1px solid #FFFFFF`\n                        const icon = L.divIcon({\n                            className: \"my-custom-pin\",\n                            iconAnchor: [0, 24],\n                            labelAnchor: [-6, 0],\n                            popupAnchor: [0, -36],\n                            html: `<span style=\"${markerHtmlStyles}\" />`\n                        })\n                        console.log({lat:p.lat, lng:p.lng}, JSON.stringify(p));\n                        L.marker({lat:p.lat, lng:p.lng}, {icon})\n                            .addTo(this.mymap)\n                            .bindPopup(p.name+'<br/>'+(p.points > 0  ? 'Требуются баллы: ' + p.points : ''));\n                    })\n                }).catch((e) => {\n                    console.log(e);\n                });\n            },\n            save() {\n                let data = {\n                    id: this.place.id,\n                    color: this.place.color,\n                    coords: this.place.coords,\n                    name: this.place.name,\n                    points: this.place.points,\n                    type: this.place.type,\n                };\n                data.color = data.color.hexa || data.color;\n                window.axios[data.id ?'put' : 'post']('/mapObject/'+(data.id||''), data).then((response) => {\n                    this.getPlaces();\n                    this.place = {};\n                    this.show = false;\n                    // this.mymap.addLayer(this.place.layer);\n                }).catch((e) => {\n                    alert('Ошибка. Проверьте данные.');\n                    console.log(e);\n                });\n            },\n            delete(place){\n                window.axios.delete('/mapObject/'+place.id).then((response) => {\n                    this.getPlaces();\n                }).catch((e) => {\n                    console.log(e);\n                });\n            }\n        }\n    }\n</script>\n\n<style scoped>\n    #mapid {\n        min-height: calc(100vh - 64px);\n        position:absolute;\n        height: calc(100vh - 64px);\n        width: 100%;\n    }\n    .map-top-dialog{\n        z-index: 10001 !important;\n    }\n</style>\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWU/MGQ3MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWFwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWFwLnZ1ZT85YTNkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXAudnVlP2EyZTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWU/M2FhZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0EsYUFEQTtBQUVBO0FBQUE7QUFDQSxpQkFEQTtBQUVBLGdCQUNBLHFFQURBLENBRkE7QUFLQSwwQ0FMQTtBQU1BLGdCQU5BO0FBT0EsZUFQQTtBQVFBLGlCQVJBO0FBU0E7QUFUQTtBQUFBLEdBRkE7QUFhQSxTQWJBLHFCQWFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSw2S0FEQTtBQUVBLGlCQUZBO0FBR0EsOEJBSEE7QUFJQSxtQkFKQTtBQUtBLG9CQUxBO0FBTUE7QUFOQTtBQVFBO0FBQ0E7QUFDQSx3Q0FDQSxTQURBLENBQ0EsSUFEQSxFQUVBLFNBRkE7QUFHQSxLQUpBO0FBS0E7QUFDQSwwQkFEQTtBQUVBO0FBQ0EsdUJBREE7QUFFQTtBQUNBLGlDQURBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBQ0E7QUFDQSxzREFGQSxDQUVBOztBQUZBLFdBRkE7QUFNQTtBQUNBO0FBREE7QUFOQSxTQUZBO0FBWUEscUJBWkE7QUFZQTtBQUNBLDJCQWJBO0FBYUE7QUFDQSx3QkFkQTtBQWVBO0FBZkEsT0FGQTtBQW1CQTtBQUNBLHlDQURBO0FBQ0E7QUFDQSxvQkFGQTtBQUdBO0FBSEE7QUFuQkE7QUF5QkE7QUFFQTtB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QTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsZ0NBQWdDLCtDQUErQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQiwrQkFBK0I7QUFDL0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0dBOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHV0QkFBOFc7QUFDcFk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJKQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImpzL2NodW5rcy9yZXNvdXJjZXNfanNfcGFnZXNfTWFwX3Z1ZTE0YjBiMzIyZDVlMDVmMzk0Nzk1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtYS0wIHBhLTBcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogZmxleDtcIj5cbiAgICAgICAgPGRpdiBpZD1cIm1hcGlkXCI+PC9kaXY+XG4gICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwic2hvd1wiPlxuICAgICAgICAgICAgPHYtY29udGFpbmVyIG1hcC10b3AtZGlhbG9nPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQgZWxldmF0aW9uPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPtCh0L7Qt9C00LDQvdC40LUg0LfQvtC90Ys8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGxhY2UubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J3QsNC30LLQsNC90LjQtVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBsYWNlLnBvaW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCR0LDQu9C70Ysg0LHQu9Cw0LPQvtC00LDRgNC90L7RgdGC0LhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb2xvci1waWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90LXNpemU9XCIzMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtY2FudmFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtbW9kZS1zd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImhleGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGxhY2UuY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hlcy1tYXgtaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3YtY29sb3ItcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZGFya1wiIEBjbGljaz1cInNhdmVcIiA6ZGlzYWJsZWQ9XCJwbGFjZS5uYW1lID09ICcnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgPC92LWRpYWxvZz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk1hcFwiLFxuICAgICAgICBkYXRhOiAodm0pID0+ICh7XG4gICAgICAgICAgICBteW1hcCA6IG51bGwsXG4gICAgICAgICAgICBtYXJrZXJzOiBbXG4gICAgICAgICAgICAgICAgW1s1NS41MzA2NDgsIDQ3LjUwNTEyMl0sICfQlNC+0Lwg0LrRg9C70YzRgtGD0YDRizxicj4g0JDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0L/QvtGB0LvQtdC70LXQvdC40Y8nXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBlZGl0YWJsZUxheWVyczpuZXcgTC5GZWF0dXJlR3JvdXAoKSxcbiAgICAgICAgICAgIHBsYWNlczogW10sXG4gICAgICAgICAgICBwbGFjZToge30sXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIGRyYXdDb250cm9sOiBudWxsLFxuICAgICAgICB9KSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMubXltYXAgPSBMLm1hcCgnbWFwaWQnLCB7ZHJhd0NvbnRyb2w6IGZhbHNlfSkuc2V0VmlldyhbNTUuNTM2NDQ2LCA0Ny40OTg2MDBdLCAxMyk7XG4gICAgICAgICAgICBsZXQgb3NtID0gTC50aWxlTGF5ZXIoJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL3tpZH0vdGlsZXMve3p9L3t4fS97eX0/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pYW5WeVlUazJJaXdpWVNJNkltTnJjR3cxTVdWek9ERmthelF5ZDI4NGJqWTBaV0l4Ym1JaWZRLkNXRzlMMnJNU3RMTzNpM0FPZ3JueVEnLCB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRpb246ICdNYXAgZGF0YSAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycywgSW1hZ2VyeSDCqSA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9cIj5NYXBib3g8L2E+JyxcbiAgICAgICAgICAgICAgICBtYXhab29tOiAxOCxcbiAgICAgICAgICAgICAgICBpZDogJ21hcGJveC9zdHJlZXRzLXYxMScsXG4gICAgICAgICAgICAgICAgdGlsZVNpemU6IDUxMixcbiAgICAgICAgICAgICAgICB6b29tT2Zmc2V0OiAtMSxcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogJ3lvdXIubWFwYm94LmFjY2Vzcy50b2tlbidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBvc20uYWRkVG8odGhpcy5teW1hcClcbiAgICAgICAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKCh2KT0+IHtcbiAgICAgICAgICAgICAgICBMLm1hcmtlcih2WzBdKS5hZGRUbyh0aGlzLm15bWFwKVxuICAgICAgICAgICAgICAgICAgICAuYmluZFBvcHVwKHZbMV0pXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuUG9wdXAoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcHJpZ2h0JyxcbiAgICAgICAgICAgICAgICBkcmF3OiB7XG4gICAgICAgICAgICAgICAgICAgIHBvbHlsaW5lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcG9seWdvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dJbnRlcnNlY3Rpb246IHRydWUsIC8vIFJlc3RyaWN0cyBzaGFwZXMgdG8gc2ltcGxlIHBvbHlnb25zXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmF3RXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNlMWUxMDAnLCAvLyBDb2xvciB0aGUgc2hhcGUgd2lsbCB0dXJuIHdoZW4gaW50ZXJzZWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfQktGLINC90LUg0LzQvtC20LXRgiDQv9C+0YHRgtCw0LLQuNGC0Ywg0YLRg9GCINGC0L7Rh9C60YMnIC8vIE1lc3NhZ2UgdGhhdCB3aWxsIHNob3cgd2hlbiBpbnRlcnNlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZU9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNiYWRhNTUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZTogZmFsc2UsIC8vIFR1cm5zIG9mZiB0aGlzIGRyYXdpbmcgdG9vbFxuICAgICAgICAgICAgICAgICAgICBjaXJjbGVtYXJrZXI6IGZhbHNlLCAvLyBUdXJucyBvZmYgdGhpcyBkcmF3aW5nIHRvb2xcbiAgICAgICAgICAgICAgICAgICAgcmVjdGFuZ2xlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlR3JvdXA6IHRoaXMuZWRpdGFibGVMYXllcnMsIC8vUkVRVUlSRUQhIVxuICAgICAgICAgICAgICAgICAgICByZW1vdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGVkaXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubXltYXAuYWRkTGF5ZXIodGhpcy5lZGl0YWJsZUxheWVycyk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhd0NvbnRyb2wgPSBuZXcgTC5Db250cm9sLkRyYXcob3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjQpIHRoaXMubXltYXAuYWRkQ29udHJvbCh0aGlzLmRyYXdDb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMubXltYXAub24oTC5EcmF3LkV2ZW50LkNSRUFURUQsICAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gZS5sYXllclR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGxheWVyID0gZS5sYXllcjtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlID0ge1xuICAgICAgICAgICAgICAgICAgICBjb29yZHM6IGUubGF5ZXJUeXBlID09PSAncG9pbnQnID8gbGF5ZXIuX2xhdGxuZ3MgOiBsYXllci5fbGF0bG5nLFxuICAgICAgICAgICAgICAgICAgICBsYXllcixcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxhY2UuY29vcmRzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm15bWFwLm9uKEwuRHJhdy5FdmVudC5FRElURUQsICAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhlLmxheWVycy5fbGF5ZXJzKS5sZW5ndGg+MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC80L7QttC90L4g0YLQvtC70YzQutC+IDEg0L7QsdGK0LXQutGCJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmZvckVhY2goKGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmwucGxhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZHM6IGwuX2xhdGxuZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcjpsLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm15bWFwLm9uKEwuRHJhdy5FdmVudC5ERUxFVEVELCAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmZvckVhY2goKGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUobC5wbGFjZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmdldFBsYWNlcygpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRQbGFjZXMoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL21hcE9iamVjdC8nLCB7cGFyYW1zOiB7fX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlcy5maWx0ZXIoKHYpID0+IHYudHlwZSA9PT0gJ3BvbHlnb24nKS5mb3JFYWNoKChwLGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb2x5Z29uID0gTC5wb2x5Z29uKHAuY29vcmRzLCB7Y29sb3I6IHAuY29sb3J9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbHlnb24uYWRkVG8odGhpcy5teW1hcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmluZFBvcHVwKHAubmFtZSsnPGJyLz4nKyhwLnBvaW50cyA+IDAgID8gJ9Ci0YDQtdCx0YPRjtGC0YHRjyDQsdCw0LvQu9GLOiAnICsgcC5wb2ludHMgOiAnJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZXNbaV0ucG9seWdvbiA9IHBvbHlnb247XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2x5Z29uLnBsYWNlID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdGFibGVMYXllcnMuYWRkTGF5ZXIocG9seWdvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VzLmZpbHRlcigodikgPT4gdi50eXBlID09PSAnbWFya2VyJykuZm9yRWFjaCgocCxpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBteUN1c3RvbUNvbG91ciA9IHAuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJIdG1sU3R5bGVzID0gYGJhY2tncm91bmQtY29sb3I6ICR7bXlDdXN0b21Db2xvdXJ9OyB3aWR0aDogMnJlbTtoZWlnaHQ6IDJyZW07ZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xcmVtO3RvcDogLTFyZW07cG9zaXRpb246IHJlbGF0aXZlO2JvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwO3RyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGYFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IEwuZGl2SWNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm15LWN1c3RvbS1waW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQW5jaG9yOiBbMCwgMjRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQW5jaG9yOiBbLTYsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwQW5jaG9yOiBbMCwgLTM2XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiBgPHNwYW4gc3R5bGU9XCIke21hcmtlckh0bWxTdHlsZXN9XCIgLz5gXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coe2xhdDpwLmxhdCwgbG5nOnAubG5nfSwgSlNPTi5zdHJpbmdpZnkocCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTC5tYXJrZXIoe2xhdDpwLmxhdCwgbG5nOnAubG5nfSwge2ljb259KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUbyh0aGlzLm15bWFwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAocC5uYW1lKyc8YnIvPicrKHAucG9pbnRzID4gMCAgPyAn0KLRgNC10LHRg9GO0YLRgdGPINCx0LDQu9C70Ys6ICcgKyBwLnBvaW50cyA6ICcnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2F2ZSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucGxhY2UuaWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnBsYWNlLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBjb29yZHM6IHRoaXMucGxhY2UuY29vcmRzLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnBsYWNlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogdGhpcy5wbGFjZS5wb2ludHMsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMucGxhY2UudHlwZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGRhdGEuY29sb3IgPSBkYXRhLmNvbG9yLmhleGEgfHwgZGF0YS5jb2xvcjtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3NbZGF0YS5pZCA/J3B1dCcgOiAncG9zdCddKCcvbWFwT2JqZWN0LycrKGRhdGEuaWR8fCcnKSwgZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGFjZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5teW1hcC5hZGRMYXllcih0aGlzLnBsYWNlLmxheWVyKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgn0J7RiNC40LHQutCwLiDQn9GA0L7QstC10YDRjNGC0LUg0LTQsNC90L3Ri9C1LicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGUocGxhY2Upe1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5kZWxldGUoJy9tYXBPYmplY3QvJytwbGFjZS5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGFjZXMoKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgICNtYXBpZCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLm1hcC10b3AtZGlhbG9ne1xuICAgICAgICB6LWluZGV4OiAxMDAwMSAhaW1wb3J0YW50O1xuICAgIH1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbiNtYXBpZFtkYXRhLXYtNDA1YmZmNjNdIHtcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWFwLXRvcC1kaWFsb2dbZGF0YS12LTQwNWJmZjYzXXtcXG4gICAgei1pbmRleDogMTAwMDEgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWdNQTtJQUNBLDhCQUFBO0lBQ0EsaUJBQUE7SUFDQSwwQkFBQTtJQUNBLFdBQUE7QUFDQTtBQUNBO0lBQ0EseUJBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1hLTAgcGEtMFxcXCIgc3R5bGU9XFxcInBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogZmxleDtcXFwiPlxcbiAgICAgICAgPGRpdiBpZD1cXFwibWFwaWRcXFwiPjwvZGl2PlxcbiAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XFxcInNob3dcXFwiPlxcbiAgICAgICAgICAgIDx2LWNvbnRhaW5lciBtYXAtdG9wLWRpYWxvZz5cXG4gICAgICAgICAgICAgICAgPHYtY2FyZCBlbGV2YXRpb249XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT7QodC+0LfQtNCw0L3QuNC1INC30L7QvdGLPC92LWNhcmQtdGl0bGU+XFxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicGxhY2UubmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCLQndCw0LfQstCw0L3QuNC1XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicGxhY2UucG9pbnRzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcItCR0LDQu9C70Ysg0LHQu9Cw0LPQvtC00LDRgNC90L7RgdGC0LhcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb2xvci1waWNrZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdC1zaXplPVxcXCIzMlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUtY2FudmFzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLW1vZGUtc3dpdGNoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPVxcXCJoZXhhXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicGxhY2UuY29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2F0Y2hlcy1tYXgtaGVpZ2h0PVxcXCIyMDBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvdi1jb2xvci1waWNrZXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJkYXJrXFxcIiBAY2xpY2s9XFxcInNhdmVcXFwiIDpkaXNhYmxlZD1cXFwicGxhY2UubmFtZSA9PSAnJ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cXG4gICAgICAgICAgICA8L3YtY29udGFpbmVyPlxcbiAgICAgICAgPC92LWRpYWxvZz5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICBuYW1lOiBcXFwiTWFwXFxcIixcXG4gICAgICAgIGRhdGE6ICh2bSkgPT4gKHtcXG4gICAgICAgICAgICBteW1hcCA6IG51bGwsXFxuICAgICAgICAgICAgbWFya2VyczogW1xcbiAgICAgICAgICAgICAgICBbWzU1LjUzMDY0OCwgNDcuNTA1MTIyXSwgJ9CU0L7QvCDQutGD0LvRjNGC0YPRgNGLPGJyPiDQkNC00LzQuNC90LjRgdGC0YDQsNGG0LjRjyDQv9C+0YHQu9C10LvQtdC90LjRjyddLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgZWRpdGFibGVMYXllcnM6bmV3IEwuRmVhdHVyZUdyb3VwKCksXFxuICAgICAgICAgICAgcGxhY2VzOiBbXSxcXG4gICAgICAgICAgICBwbGFjZToge30sXFxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXFxuICAgICAgICAgICAgZHJhd0NvbnRyb2w6IG51bGwsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICAgICAgdGhpcy5teW1hcCA9IEwubWFwKCdtYXBpZCcsIHtkcmF3Q29udHJvbDogZmFsc2V9KS5zZXRWaWV3KFs1NS41MzY0NDYsIDQ3LjQ5ODYwMF0sIDEzKTtcXG4gICAgICAgICAgICBsZXQgb3NtID0gTC50aWxlTGF5ZXIoJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL3tpZH0vdGlsZXMve3p9L3t4fS97eX0/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pYW5WeVlUazJJaXdpWVNJNkltTnJjR3cxTVdWek9ERmthelF5ZDI4NGJqWTBaV0l4Ym1JaWZRLkNXRzlMMnJNU3RMTzNpM0FPZ3JueVEnLCB7XFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uOiAnTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFxcXCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzLCBJbWFnZXJ5IMKpIDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vXFxcIj5NYXBib3g8L2E+JyxcXG4gICAgICAgICAgICAgICAgbWF4Wm9vbTogMTgsXFxuICAgICAgICAgICAgICAgIGlkOiAnbWFwYm94L3N0cmVldHMtdjExJyxcXG4gICAgICAgICAgICAgICAgdGlsZVNpemU6IDUxMixcXG4gICAgICAgICAgICAgICAgem9vbU9mZnNldDogLTEsXFxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiAneW91ci5tYXBib3guYWNjZXNzLnRva2VuJ1xcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgb3NtLmFkZFRvKHRoaXMubXltYXApXFxuICAgICAgICAgICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKHYpPT4ge1xcbiAgICAgICAgICAgICAgICBMLm1hcmtlcih2WzBdKS5hZGRUbyh0aGlzLm15bWFwKVxcbiAgICAgICAgICAgICAgICAgICAgLmJpbmRQb3B1cCh2WzFdKVxcbiAgICAgICAgICAgICAgICAgICAgLm9wZW5Qb3B1cCgpXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wcmlnaHQnLFxcbiAgICAgICAgICAgICAgICBkcmF3OiB7XFxuICAgICAgICAgICAgICAgICAgICBwb2x5bGluZTogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICBwb2x5Z29uOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dJbnRlcnNlY3Rpb246IHRydWUsIC8vIFJlc3RyaWN0cyBzaGFwZXMgdG8gc2ltcGxlIHBvbHlnb25zXFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0Vycm9yOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2UxZTEwMCcsIC8vIENvbG9yIHRoZSBzaGFwZSB3aWxsIHR1cm4gd2hlbiBpbnRlcnNlY3RzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfQktGLINC90LUg0LzQvtC20LXRgiDQv9C+0YHRgtCw0LLQuNGC0Ywg0YLRg9GCINGC0L7Rh9C60YMnIC8vIE1lc3NhZ2UgdGhhdCB3aWxsIHNob3cgd2hlbiBpbnRlcnNlY3RcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlT3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNiYWRhNTUnXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZTogZmFsc2UsIC8vIFR1cm5zIG9mZiB0aGlzIGRyYXdpbmcgdG9vbFxcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlbWFya2VyOiBmYWxzZSwgLy8gVHVybnMgb2ZmIHRoaXMgZHJhd2luZyB0b29sXFxuICAgICAgICAgICAgICAgICAgICByZWN0YW5nbGU6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyOiB0cnVlLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBlZGl0OiB7XFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlR3JvdXA6IHRoaXMuZWRpdGFibGVMYXllcnMsIC8vUkVRVUlSRUQhIVxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgZWRpdDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH07XFxuICAgICAgICAgICAgdGhpcy5teW1hcC5hZGRMYXllcih0aGlzLmVkaXRhYmxlTGF5ZXJzKTtcXG5cXG4gICAgICAgICAgICB0aGlzLmRyYXdDb250cm9sID0gbmV3IEwuQ29udHJvbC5EcmF3KG9wdGlvbnMpO1xcbiAgICAgICAgICAgIGlmICh0aGlzLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNCkgdGhpcy5teW1hcC5hZGRDb250cm9sKHRoaXMuZHJhd0NvbnRyb2wpO1xcbiAgICAgICAgICAgIHRoaXMubXltYXAub24oTC5EcmF3LkV2ZW50LkNSRUFURUQsICAoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IGUubGF5ZXJUeXBlLFxcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIgPSBlLmxheWVyO1xcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlID0ge1xcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzOiBlLmxheWVyVHlwZSA9PT0gJ3BvaW50JyA/IGxheWVyLl9sYXRsbmdzIDogbGF5ZXIuX2xhdGxuZyxcXG4gICAgICAgICAgICAgICAgICAgIGxheWVyLFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcXG4gICAgICAgICAgICAgICAgfTtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGFjZS5jb29yZHMpO1xcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIHRoaXMubXltYXAub24oTC5EcmF3LkV2ZW50LkVESVRFRCwgIChlKSA9PiB7XFxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QudmFsdWVzKGUubGF5ZXJzLl9sYXllcnMpLmxlbmd0aCAhPT0gMSkge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoZS5sYXllcnMuX2xheWVycykubGVuZ3RoPjEpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgn0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0LzQvtC20L3QviDRgtC+0LvRjNC60L4gMSDQvtCx0YrQtdC60YInKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhlLmxheWVycy5fbGF5ZXJzKS5mb3JFYWNoKChsKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlID0ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmwucGxhY2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzOiBsLl9sYXRsbmdzLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyOmwsXFxuICAgICAgICAgICAgICAgICAgICB9O1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgdGhpcy5teW1hcC5vbihMLkRyYXcuRXZlbnQuREVMRVRFRCwgIChlKSA9PiB7XFxuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZS5sYXllcnMuX2xheWVycykuZm9yRWFjaCgobCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUobC5wbGFjZSk7XFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgdGhpcy5nZXRQbGFjZXMoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgZ2V0UGxhY2VzKCkge1xcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvbWFwT2JqZWN0LycsIHtwYXJhbXM6IHt9fSkudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZXMuZmlsdGVyKCh2KSA9PiB2LnR5cGUgPT09ICdwb2x5Z29uJykuZm9yRWFjaCgocCxpKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvbHlnb24gPSBMLnBvbHlnb24ocC5jb29yZHMsIHtjb2xvcjogcC5jb2xvcn0pO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbHlnb24uYWRkVG8odGhpcy5teW1hcClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJpbmRQb3B1cChwLm5hbWUrJzxici8+JysocC5wb2ludHMgPiAwICA/ICfQotGA0LXQsdGD0Y7RgtGB0Y8g0LHQsNC70LvRizogJyArIHAucG9pbnRzIDogJycpKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlc1tpXS5wb2x5Z29uID0gcG9seWdvbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2x5Z29uLnBsYWNlID0gcDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRhYmxlTGF5ZXJzLmFkZExheWVyKHBvbHlnb24pO1xcbiAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VzLmZpbHRlcigodikgPT4gdi50eXBlID09PSAnbWFya2VyJykuZm9yRWFjaCgocCxpKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbXlDdXN0b21Db2xvdXIgPSBwLmNvbG9yO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlckh0bWxTdHlsZXMgPSBgYmFja2dyb3VuZC1jb2xvcjogJHtteUN1c3RvbUNvbG91cn07IHdpZHRoOiAycmVtO2hlaWdodDogMnJlbTtkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xcmVtO3RvcDogLTFyZW07cG9zaXRpb246IHJlbGF0aXZlO2JvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwO3RyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGYFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBMLmRpdkljb24oe1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFxcXCJteS1jdXN0b20tcGluXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkFuY2hvcjogWzAsIDI0XSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxBbmNob3I6IFstNiwgMF0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwQW5jaG9yOiBbMCwgLTM2XSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogYDxzcGFuIHN0eWxlPVxcXCIke21hcmtlckh0bWxTdHlsZXN9XFxcIiAvPmBcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtsYXQ6cC5sYXQsIGxuZzpwLmxuZ30sIEpTT04uc3RyaW5naWZ5KHApKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBMLm1hcmtlcih7bGF0OnAubGF0LCBsbmc6cC5sbmd9LCB7aWNvbn0pXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUbyh0aGlzLm15bWFwKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmluZFBvcHVwKHAubmFtZSsnPGJyLz4nKyhwLnBvaW50cyA+IDAgID8gJ9Ci0YDQtdCx0YPRjtGC0YHRjyDQsdCw0LvQu9GLOiAnICsgcC5wb2ludHMgOiAnJykpO1xcbiAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHNhdmUoKSB7XFxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucGxhY2UuaWQsXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5wbGFjZS5jb2xvcixcXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkczogdGhpcy5wbGFjZS5jb29yZHMsXFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnBsYWNlLm5hbWUsXFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IHRoaXMucGxhY2UucG9pbnRzLFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy5wbGFjZS50eXBlLFxcbiAgICAgICAgICAgICAgICB9O1xcbiAgICAgICAgICAgICAgICBkYXRhLmNvbG9yID0gZGF0YS5jb2xvci5oZXhhIHx8IGRhdGEuY29sb3I7XFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvc1tkYXRhLmlkID8ncHV0JyA6ICdwb3N0J10oJy9tYXBPYmplY3QvJysoZGF0YS5pZHx8JycpLCBkYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGFjZXMoKTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2UgPSB7fTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5teW1hcC5hZGRMYXllcih0aGlzLnBsYWNlLmxheWVyKTtcXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfQntGI0LjQsdC60LAuINCf0YDQvtCy0LXRgNGM0YLQtSDQtNCw0L3QvdGL0LUuJyk7XFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkZWxldGUocGxhY2Upe1xcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZGVsZXRlKCcvbWFwT2JqZWN0LycrcGxhY2UuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYWNlcygpO1xcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuICAgICNtYXBpZCB7XFxuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XFxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgLm1hcC10b3AtZGlhbG9ne1xcbiAgICAgICAgei1pbmRleDogMTAwMDEgIWltcG9ydGFudDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MDViZmY2MyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL01hcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MDViZmY2MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDA1YmZmNjNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0MDViZmY2MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MDViZmY2MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MDViZmY2MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MDViZmY2MyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MDViZmY2MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWEtMCBwYS0wXCIsXG4gICAgICBzdGF0aWNTdHlsZTogeyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBkaXNwbGF5OiBcImZsZXhcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcIm1hcGlkXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvdyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBcIm1hcC10b3AtZGlhbG9nXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZWxldmF0aW9uOiBcIjBcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW192bS5fdihcItCh0L7Qt9C00LDQvdC40LUg0LfQvtC90YtcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi0J3QsNC30LLQsNC90LjQtVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBsYWNlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGxhY2UsIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGxhY2UubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcIm51bWJlclwiLCBsYWJlbDogXCLQkdCw0LvQu9GLINCx0LvQsNCz0L7QtNCw0YDQvdC+0YHRgtC4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGxhY2UucG9pbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBsYWNlLCBcInBvaW50c1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGxhY2UucG9pbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jb2xvci1waWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3Qtc2l6ZVwiOiBcIjMyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGlkZS1jYW52YXNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLW1vZGUtc3dpdGNoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwiaGV4YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN3YXRjaGVzLW1heC1oZWlnaHRcIjogXCIyMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGxhY2UuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucGxhY2UsIFwiY29sb3JcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBsYWNlLmNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImRhcmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLnBsYWNlLm5hbWUgPT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNhdmUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MDViZmY2MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2UyZTBkNTRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDA1YmZmNjMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDA1YmZmNjMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=