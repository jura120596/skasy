(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_UserEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UserEdit",
  components: {},
  data: function data(vm) {
    return {
      user: {
        id: vm.$route.params.id,
        name: '',
        second_name: '',
        email: '',
        address: '',
        phone: '',
        points: 0,
        card_id: ''
      },
      messages: {
        name: '',
        second_name: '',
        last_name: '',
        address: '',
        email: '',
        phone: '',
        points: '',
        card_id: ''
      }
    };
  },
  computed: {
    isAdmin: function isAdmin() {
      return this.$store.state.auth.user.role >= 1024;
    }
  },
  mounted: function mounted() {
    var _this = this;

    var modelId = this.$route.params.id;

    if (modelId != 0) {
      window.axios.get('/user/' + modelId).then(function (response) {
        _this.user = response.data.data;
      })["catch"](function (e) {
        var _e$response;

        console.log(e);
        _this.$root.$children[0].snackbarText = (e === null || e === void 0 ? void 0 : (_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.error) || 'Произошла ошибка';
        _this.$root.$children[0].snackbar = true;
      });
    }
  },
  methods: {
    save: function save() {
      var _this2 = this;

      window.axios.put('/user/' + this.user.id, this.user).then(function (r) {
        _this2.$router.push({
          name: "users"
        });
      })["catch"](function (e) {
        if (e.response && e.response.status === 422) {
          var errors = e.response.data.errors;
          Object.keys(_this2.messages).forEach(function (k) {
            var _errors$k;

            _this2.messages[k] = ((_errors$k = errors[k]) === null || _errors$k === void 0 ? void 0 : _errors$k[0]) || '';
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/UserEdit.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/UserEdit.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserEdit_vue_vue_type_template_id_64688f04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=template&id=64688f04& */ "./resources/js/pages/UserEdit.vue?vue&type=template&id=64688f04&");
/* harmony import */ var _UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=script&lang=js& */ "./resources/js/pages/UserEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserEdit_vue_vue_type_template_id_64688f04___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserEdit_vue_vue_type_template_id_64688f04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/UserEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/UserEdit.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/UserEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/UserEdit.vue?vue&type=template&id=64688f04&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/UserEdit.vue?vue&type=template&id=64688f04& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_64688f04___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_64688f04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_64688f04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserEdit.vue?vue&type=template&id=64688f04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserEdit.vue?vue&type=template&id=64688f04&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserEdit.vue?vue&type=template&id=64688f04&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserEdit.vue?vue&type=template&id=64688f04& ***!
  \***************************************************************************************************************************************************************************************************************/
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
        domProps: { textContent: _vm._s("Редактирование пользователя") }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: "Имя",
          disabled: !_vm.isAdmin,
          "error-messages": _vm.messages.name
        },
        model: {
          value: _vm.user.name,
          callback: function($$v) {
            _vm.$set(_vm.user, "name", $$v)
          },
          expression: "user.name"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: "Фамилия",
          disabled: !_vm.isAdmin,
          "error-messages": _vm.messages.second_name
        },
        model: {
          value: _vm.user.second_name,
          callback: function($$v) {
            _vm.$set(_vm.user, "second_name", $$v)
          },
          expression: "user.second_name"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: "Отчество",
          disabled: !_vm.isAdmin,
          "error-messages": _vm.messages.last_name
        },
        model: {
          value: _vm.user.last_name,
          callback: function($$v) {
            _vm.$set(_vm.user, "last_name", $$v)
          },
          expression: "user.last_name"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: "Почта",
          disabled: !_vm.isAdmin,
          "error-messages": _vm.messages.email
        },
        model: {
          value: _vm.user.email,
          callback: function($$v) {
            _vm.$set(_vm.user, "email", $$v)
          },
          expression: "user.email"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: "Телефон",
          counter: "10",
          disabled: !_vm.isAdmin,
          "error-messages": _vm.messages.phone
        },
        model: {
          value: _vm.user.phone,
          callback: function($$v) {
            _vm.$set(_vm.user, "phone", $$v)
          },
          expression: "user.phone"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: { label: "Баллы", "error-messages": _vm.messages.points },
        model: {
          value: _vm.user.points,
          callback: function($$v) {
            _vm.$set(_vm.user, "points", $$v)
          },
          expression: "user.points"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: "Номер карты",
          disabled: !_vm.isAdmin,
          "error-messages": _vm.messages.card_id
        },
        model: {
          value: _vm.user.card_id,
          callback: function($$v) {
            _vm.$set(_vm.user, "card_id", $$v)
          },
          expression: "user.card_id"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: "Адрес",
          disabled: !_vm.isAdmin,
          "error-messages": _vm.messages.address
        },
        model: {
          value: _vm.user.address,
          callback: function($$v) {
            _vm.$set(_vm.user, "address", $$v)
          },
          expression: "user.address"
        }
      }),
      _vm._v(" "),
      _vm.isAdmin
        ? _c("v-checkbox", {
            attrs: { label: "Староста" },
            model: {
              value: _vm.user.curator,
              callback: function($$v) {
                _vm.$set(_vm.user, "curator", $$v)
              },
              expression: "user.curator"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "save-btn-text",
          attrs: {
            color: "success",
            disabled:
              !_vm.isAdmin ||
              !(
                _vm.user.name &&
                _vm.user.second_name &&
                _vm.user.email &&
                _vm.user.phone
              )
          },
          on: { click: _vm.save }
        },
        [_vm._v("\n        Сохранить\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlckVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Vc2VyRWRpdC52dWU/NGM5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlckVkaXQudnVlPzJkOGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNFQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLGdCQUZBO0FBR0EsdUJBSEE7QUFJQSxpQkFKQTtBQUtBLG1CQUxBO0FBTUEsaUJBTkE7QUFPQSxpQkFQQTtBQVFBO0FBUkEsT0FEQTtBQVdBO0FBQ0EsZ0JBREE7QUFFQSx1QkFGQTtBQUdBLHFCQUhBO0FBSUEsbUJBSkE7QUFLQSxpQkFMQTtBQU1BLGlCQU5BO0FBT0Esa0JBUEE7QUFRQTtBQVJBO0FBWEE7QUFzQkEsR0ExQkE7QUEyQkE7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFDQTtBQUhBLEdBM0JBO0FBZ0NBLFNBaENBLHFCQWdDQTtBQUFBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsV0FFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTkE7QUFPQTtBQUNBLEdBM0NBO0FBNENBO0FBQ0EsUUFEQSxrQkFDQTtBQUFBOztBQUNBLDJEQUNBLElBREEsQ0FDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLE9BSEEsV0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0EsV0FGQTtBQUdBO0FBQ0EsT0FWQTtBQVdBO0FBYkE7QUE1Q0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEV1RjtBQUMzQjtBQUNMOzs7QUFHdkQ7QUFDQSxDQUE2RjtBQUM3RixnQkFBZ0Isb0dBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlLGlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENtTSxDQUFDLGlFQUFlLDBNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXRPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUJBQXVCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxQ0FBcUM7QUFDckQsbUJBQW1CO0FBQ25CLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQXdEO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxlQUFlO0FBQ2YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19wYWdlc19Vc2VyRWRpdF92dWUzNjkxNDRjYTMzMWRhNzc2MzE2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250YWluZXJcbiAgICAgICAgICAgIGNsYXNzPVwiY292ZXJcIj5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cIifQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjydcIj5cbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCY0LzRj1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIubmFtZVwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzQWRtaW5cIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLm5hbWVcIlxuICAgICAgICAvPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQpNCw0LzQuNC70LjRj1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuc2Vjb25kX25hbWVcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpc0FkbWluXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5zZWNvbmRfbmFtZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCe0YLRh9C10YHRgtCy0L5cIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzQWRtaW5cIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmxhc3RfbmFtZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCf0L7Rh9GC0LBcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaXNBZG1pblwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMuZW1haWxcIlxuICAgICAgICAvPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQotC10LvQtdGE0L7QvVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIucGhvbmVcIlxuICAgICAgICAgICAgICAgIGNvdW50ZXI9XCIxMFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzQWRtaW5cIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLnBob25lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0JHQsNC70LvRi1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIucG9pbnRzXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5wb2ludHNcIlxuICAgICAgICAvPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQndC+0LzQtdGAINC60LDRgNGC0YtcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmNhcmRfaWRcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpc0FkbWluXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5jYXJkX2lkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0JDQtNGA0LXRgVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzQWRtaW5cIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmFkZHJlc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8di1jaGVja2JveFxuICAgICAgICAgICAgICAgIHYtaWY9XCJpc0FkbWluXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCh0YLQsNGA0L7RgdGC0LBcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmN1cmF0b3JcIlxuICAgICAgICAvPlxuICAgICAgICA8di1zcGFjZXIvPlxuICAgICAgICA8di1idG4gY2xhc3M9XCJzYXZlLWJ0bi10ZXh0XCJcbiAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICBAY2xpY2s9XCJzYXZlXCJcbiAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpc0FkbWluIHx8ICEodXNlci5uYW1lICYmIHVzZXIuc2Vjb25kX25hbWUgJiYgdXNlci5lbWFpbCYmIHVzZXIucGhvbmUpXCI+XG4gICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcbiAgICAgICAgPC92LWJ0bj5cbiAgICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiVXNlckVkaXRcIixcbiAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB2bS4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kX25hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogMCxcbiAgICAgICAgICAgICAgICAgICAgY2FyZF9pZDogJycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kX25hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBsYXN0X25hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogJycsXG4gICAgICAgICAgICAgICAgICAgIGNhcmRfaWQ6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaXNBZG1pbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPj0gMTAyNDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWxJZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcbiAgICAgICAgICAgIGlmIChtb2RlbElkICE9IDApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvdXNlci8nICsgbW9kZWxJZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSBlPy5yZXNwb25zZT8uZXJyb3IgfHwgJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNhdmUoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnB1dCgnL3VzZXIvJyArICh0aGlzLnVzZXIuaWQpLCB0aGlzLnVzZXIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogXCJ1c2Vyc1wifSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnJlc3BvbnNlICYmIGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1lc3NhZ2VzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1trXSA9IGVycm9yc1trXT8uWzBdIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VyRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjQ2ODhmMDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlckVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VyRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY0Njg4ZjA0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY0Njg4ZjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY0Njg4ZjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Vc2VyRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjQ2ODhmMDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjQ2ODhmMDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Vc2VyRWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb3ZlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgIGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiKSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IFwi0JjQvNGPXCIsXG4gICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uaXNBZG1pbixcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5uYW1lXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS51c2VyLm5hbWUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIubmFtZVwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogXCLQpNCw0LzQuNC70LjRj1wiLFxuICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmlzQWRtaW4sXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMuc2Vjb25kX25hbWVcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuc2Vjb25kX25hbWUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwic2Vjb25kX25hbWVcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnNlY29uZF9uYW1lXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBcItCe0YLRh9C10YHRgtCy0L5cIixcbiAgICAgICAgICBkaXNhYmxlZDogIV92bS5pc0FkbWluLFxuICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLmxhc3RfbmFtZVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5sYXN0X25hbWUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwibGFzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5sYXN0X25hbWVcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IFwi0J/QvtGH0YLQsFwiLFxuICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmlzQWRtaW4sXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMuZW1haWxcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuZW1haWwsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwiZW1haWxcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBcItCi0LXQu9C10YTQvtC9XCIsXG4gICAgICAgICAgY291bnRlcjogXCIxMFwiLFxuICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmlzQWRtaW4sXG4gICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0ubWVzc2FnZXMucGhvbmVcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIucGhvbmUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwicGhvbmVcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnBob25lXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQkdCw0LvQu9GLXCIsIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLm1lc3NhZ2VzLnBvaW50cyB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5wb2ludHMsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwicG9pbnRzXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5wb2ludHNcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IFwi0J3QvtC80LXRgCDQutCw0YDRgtGLXCIsXG4gICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uaXNBZG1pbixcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5jYXJkX2lkXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS51c2VyLmNhcmRfaWQsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwiY2FyZF9pZFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuY2FyZF9pZFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogXCLQkNC00YDQtdGBXCIsXG4gICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uaXNBZG1pbixcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5tZXNzYWdlcy5hZGRyZXNzXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS51c2VyLmFkZHJlc3MsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwiYWRkcmVzc1wiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuYWRkcmVzc1wiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pc0FkbWluXG4gICAgICAgID8gX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcItCh0YLQsNGA0L7RgdGC0LBcIiB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLmN1cmF0b3IsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJjdXJhdG9yXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmN1cmF0b3JcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2F2ZS1idG4tdGV4dFwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBjb2xvcjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgIV92bS5pc0FkbWluIHx8XG4gICAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgX3ZtLnVzZXIubmFtZSAmJlxuICAgICAgICAgICAgICAgIF92bS51c2VyLnNlY29uZF9uYW1lICYmXG4gICAgICAgICAgICAgICAgX3ZtLnVzZXIuZW1haWwgJiZcbiAgICAgICAgICAgICAgICBfdm0udXNlci5waG9uZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNhdmUgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcXG4gICAgXCIpXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==