(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_UserPosts_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UserPosts",
  data: function data(vm) {
    return {
      l: 1,
      posts: [],
      page: 1,
      dialogPost: null,
      delete_id: 0,
      show: false,
      postToAction: null,
      commentDialogShow: false,
      comment: '',
      commentError: '',
      statuses: {
        0: 'Ожидает подтверждения администрацией',
        8: 'Ожидает подтверждения пользователя',
        32: 'Закрыто'
      }
    };
  },
  mounted: function mounted() {
    this.getPage();
  },
  methods: {
    getPage: function getPage() {
      var _this = this;

      window.axios.get('/user/post/', {
        params: {
          page: this.page,
          per_page: 10,
          mode: this.$route.query.mode
        }
      }).then(function (response) {
        _this.posts = _toConsumableArray(response.data.data);
        _this.l = response.data.last_page;
      })["catch"](function (e) {
        console.log(e);
      });
    },
    "delete": function _delete() {
      var _this2 = this;

      if (this.delete_id > 0) window.axios["delete"]('/user/post/' + this.delete_id).then(function (response) {
        _this2.getPage();

        _this2.delete_id = 0;
      })["catch"](function (e) {
        console.log(e);
      });
    },
    accept: function accept(post) {
      var _this3 = this;

      var action = this.postToAction.state == 0 ? 'accept' : 'confirm';
      window.axios.post('/user/post/' + post.id + '/' + action, {
        comment: this.comment
      }).then(function (response) {
        _this3.comment = '';
        post.comment = response.data.data.comment;
        post.state = response.data.data.state;
      })["catch"](function (e) {
        var _e$response;

        console.log(e);

        if ((e === null || e === void 0 ? void 0 : (_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 422) {
          _this3.commentError = e.response.data.errors.comment;
          _this3.postToAction = post;
        }
      });
      this.postToAction = null;
    },
    like: function like(post) {
      window.axios.post('/user/post/' + post.id + (post.user_like ? '/like' : '/dislike')).then(function (response) {})["catch"](function (e) {
        console.log(e);
      });
    }
  },
  watch: {
    page: function page() {
      this.getPage();
    },
    delete_id: function delete_id(nv) {
      if (nv > 0) this["delete"]();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.user-photo-module{\n    height: 300px;\n    max-height: 300px;\n    overflow-y: hidden;\n}\n.user-post-description{\n    height: 300px;\n    max-height: 300px;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/UserPosts.vue"],"names":[],"mappings":";AAgUA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;IACA,aAAA;IACA,iBAAA;AACA","sourcesContent":["<template>\n    <v-container class=\"cover\">\n        <v-toolbar-title align=\"center\" justify=\"center\" class=\"mb-2\"\n                         v-text=\"$route.query.mode !== 'me' ? 'Обращения пользователей' : 'Ваши обращения'\">\n        </v-toolbar-title>\n        <div v-if=\"posts.length > 0\">\n            <v-layout class=\"d-flex flex-row flex-wrap\">\n\n                <v-flex\n                        xs12\n                        sm6\n                        md6\n                        lg4\n                        v-for=\"(post, y) in posts\" :key=\"y\">\n\n                    <v-card\n                            elevation=\"0\"\n                            outlined\n                            style=\"position: relative;border: thin solid rgb(57 133 165 / 34%);border-radius:16px\"\n                            class=\"ma-1\"\n                    >\n                        <div\n                             class=\"d-flex crud\" style=\"position:absolute; right: 5px; top: -10px; font-size: 10px\">\n\n                            <v-btn\n                                    color=\"primary\"\n                                    fab\n                                    small\n                                    class=\"mr-3\"\n                                    @click=\"\n                                        post.user_like = post.user_like == 0 ? 1: 0\n                                        post.likes += post.user_like === 1 ? 1 : -1\n                                        like(post)\n                                        \"\n                                    dark>\n                                <v-icon>mdi-heart</v-icon>\n                            </v-btn>\n                            <v-btn\n                                    color=\"primary\"\n                                    fab\n                                    small\n                                    class=\"mr-3\"\n                                    dark>\n                                {{post.likes}}\n                            </v-btn>\n                            <v-btn v-if=\"$store.state.auth.user.id === post.user_id || $store.state.auth.user.role ===1024\"\n                                   color=\"red\"\n                                   fab\n                                   small\n                                   @click=\"delete_id = post.id\"\n                                   class=\"mr-3\"\n                                   dark>\n                                <v-icon>mdi-delete</v-icon>\n                            </v-btn>\n                            <v-btn v-if=\"$store.state.auth.user.id === post.user_id\"\n                                   color=\"yellow\"\n                                    fab\n                                    small\n                                    class=\"mr-3\"\n                                    @click=\"$router.push('/user/post/'+post.id)\"\n                                    dark>\n                                <v-icon>mdi-pencil</v-icon>\n                            </v-btn>\n                            <v-btn v-if=\"$store.state.auth.user.role == 1024 && post.state !== 8\"\n                                   color=\"primary\"\n                                   fab\n                                   small\n                                   @click=\"postToAction = post\"\n                                   dark>\n                                <v-icon>mdi-check-outline</v-icon>\n                            </v-btn>\n                            <v-btn v-if=\"$store.state.auth.user.role != 1024 && post.state == 8 && $store.state.auth.user.id === post.user_id\"\n                                   color=\"success\"\n                                   fab\n                                   small\n                                   @click=\"postToAction = post\"\n                                   dark>\n                                <v-icon>mdi-check-outline</v-icon>\n                            </v-btn>\n                        </div>\n\n                        <v-container style=\"position:relative\">\n                            <div v-text=\"'Опубликовано: '+post.date\"\n                                 style=\"position:absolute; left: 5px; bottom: 35px; font-size: 10px\"></div>\n                            <div v-text=\"'Пользователь: '+(post.user_id == $store.state.auth.user.id ? 'Вы' : post.author.full_name)\"\n                                 style=\"position:absolute; left: 5px; bottom: 20px; font-size: 10px\"></div>\n                            <div v-text=\"'Статус: '+(statuses[post.state])\"\n                                 style=\"position:absolute; left: 5px; bottom: 5px; font-size: 10px\"></div>\n                            <v-toolbar-title\n                                class=\"text-center mt-2 mb-9\"\n                                @click=\"\n                                    dialogPost = post\n                                    show =  true\n                            \">{{post.title}}</v-toolbar-title>\n                            <v-spacer></v-spacer>\n                        </v-container>\n\n                        <v-container class=\"ma-0 pa-0\"\n                             @click=\"\n                                dialogPost = post\n                                show =  true\n                        \">\n                            <div v-if=\"post.photos.length\" class=\"user-photo-module\">\n                                <v-carousel>\n                                    <v-carousel-item\n                                            v-for=\"(photo, i) in post.photos\"\n                                            :key=\"i\"\n                                            :src=\"photo.file\"\n                                            contain\n                                            min-heigth=\"300px\"\n                                            max-heigth=\"300px\"\n                                    >\n                                    </v-carousel-item>\n                                </v-carousel>\n                            </div>\n                            <div v-else class=\"user-post-description\">\n                                <v-container v-html=\"post.description\"></v-container>\n                            </div>\n                        </v-container>\n                    </v-card>\n                </v-flex>\n            </v-layout>\n            <div class=\"text-center xs-12\" v-if=\"l > 1\">\n                <v-pagination\n                        :length=\"l\"\n                        :total-visible=\"3\"\n                        v-model=\"page\"\n                ></v-pagination>\n            </div>\n        </div>\n        <div v-else>\n            <div class=\"text-center my-3\">Обращений пока нет</div>\n        </div>\n\n        <v-btn class=\"save-btn\"\n               color=\"success\"\n               fab\n               @click=\"$router.push('/user/post/0')\"\n               dark>\n            <v-icon>mdi-plus</v-icon>\n        </v-btn>\n        <v-dialog\n                v-if=\"!!dialogPost\"\n                v-model=\"show\"\n                @close=\"\n                    show = false\n                    dialogPost = null\n                \"\n                :fullscreen=\"$vuetify.breakpoint.mobile\"\n        >\n            <template slot:default>\n                <v-container class=\"px-0 mx-0 pt-0 mt-0 cover\" style=\"background-color: white !important; max-width: 100% !important;\">\n                    <v-toolbar-title class=\"text-center my-3\">{{dialogPost.title}}</v-toolbar-title>\n\n                    <div v-if=\"dialogPost.photos && dialogPost.photos.length > 0\" class=\"my-2 container\">\n                        <v-carousel>\n                            <v-carousel-item\n                                    v-for=\"(photo, i) in dialogPost.photos\"\n                                    :key=\"i\"\n                                    :src=\"photo.file\"\n                                    contain\n                                    max-height=\"500px\"\n                                    min-height=\"500px\"\n                            >\n                            </v-carousel-item>\n                        </v-carousel>\n                    </div>\n                    <div v-if=\"dialogPost.comment\" v-text=\"'Комментарий от администрации: ' + dialogPost.comment\"\n                         class=\"text-center\"></div>\n                    <v-container v-html=\"dialogPost.description\"></v-container>\n\n                    <v-toolbar-title class=\"text-center my-3\">\n                        <v-btn color=\"primary\" @click=\"\n                            show = false\n                            dialogPost = null\n                        \">Закрыть\n                        </v-btn>\n                    </v-toolbar-title>\n\n                </v-container>\n            </template>\n        </v-dialog>\n        <v-dialog\n                v-if=\"!!postToAction\"\n                v-model=\"postToAction\"\n                @close=\"\n                    postToAction = null\n                \"\n                :fullscreen=\"$vuetify.breakpoint.mobile\"\n        >\n            <template slot:default>\n                <v-card>\n\n                    <v-toolbar  class=\"container py-1 my-0 justify-space-between\">\n                        <v-toolbar-title>\n                            <span class=\"headline\">Подтверждение</span>\n                        </v-toolbar-title>\n                        <v-spacer/>\n                        <v-toolbar-title><v-icon\n                                class=\"flex-grow-0\"\n                                text\n                                @click=\"postToAction = null\">X</v-icon>\n                        </v-toolbar-title>\n                    </v-toolbar>\n                    <v-card-text>\n                        <v-container>\n                            <v-col>\n\n                                <v-card-text v-if=\"postToAction.state === 0\">\n                                    Введите коментарий, поясняющий выполнение обращения.\n                                </v-card-text>\n                                <v-card-text v-else>\n                                    Вы действительно хотите подтвердить рассмотрение вашего обращения?\n                                </v-card-text>\n                                <v-form @keyup.native.enter=\"attemptReset\">\n                                    <v-text-field v-if=\"postToAction.state === 0\"\n                                            v-model=\"comment\"\n                                            label=\"Комментарий\"\n                                            :error-messages=\"commentError\"\n                                            name=\"comment\"\n                                            type=\"text\"\n                                            required\n                                    />\n                                    <v-card\n                                            class=\"d-flex justify-center align-center\"\n                                            flat\n                                            height=\"auto\"\n                                            tile\n                                    >\n                                        <v-btn color=\"dark\" @click=\"accept(postToAction)\" :disabled=\"postToAction.state == 0 && comment == ''\">\n                                            Подтвердить\n                                        </v-btn>\n                                    </v-card>\n                                </v-form>\n                            </v-col>\n                        </v-container>\n                    </v-card-text>\n                </v-card>\n            </template>\n        </v-dialog>\n    </v-container>\n</template>\n\n<script>\n    export default {\n        name: \"UserPosts\",\n        data: (vm) => {\n            return {\n                l: 1,\n                posts: [],\n                page: 1,\n                dialogPost: null,\n                delete_id: 0,\n                show: false,\n                postToAction: null,\n                commentDialogShow: false,\n                comment: '',\n                commentError: '',\n                statuses: {\n                    0: 'Ожидает подтверждения администрацией',\n                    8: 'Ожидает подтверждения пользователя',\n                    32: 'Закрыто',\n                }\n            }\n        },\n        mounted() {\n            this.getPage();\n        },\n        methods: {\n            getPage() {\n                window.axios.get('/user/post/', {params: {page: this.page, per_page: 10, mode: this.$route.query.mode}}).then((response) => {\n                    this.posts = [...response.data.data];\n                    this.l = response.data.last_page\n                }).catch((e) => {\n                    console.log(e);\n                });\n            },\n            delete() {\n                if (this.delete_id > 0)\n                    window.axios.delete('/user/post/' + this.delete_id).then((response) => {\n                        this.getPage()\n                        this.delete_id = 0\n                    }).catch((e) => {\n                        console.log(e);\n                    });\n            },\n            accept(post) {\n                let action =  this.postToAction.state == 0 ? 'accept' : 'confirm'\n                window.axios.post('/user/post/' + post.id+'/'+action, {comment: this.comment}).then((response) => {\n                    this.comment  = '';\n                    post.comment = response.data.data.comment;\n                    post.state = response.data.data.state\n                }).catch((e) => {\n                    console.log(e);\n                    if (e?.response?.status=== 422) {\n                        this.commentError = e.response.data.errors.comment;\n                        this.postToAction = post;\n                    }\n                });\n                this.postToAction= null;\n            },\n            like(post) {\n                window.axios.post('/user/post/' + post.id+(post.user_like ? '/like' : '/dislike')).then((response) => {\n                }).catch((e) => {\n                    console.log(e);\n                });\n            }\n        },\n        watch: {\n            page() {\n                this.getPage();\n            },\n            delete_id(nv) {\n                if (nv > 0) this.delete()\n            }\n        }\n    }\n</script>\n\n<style>\n    .user-photo-module{\n        height: 300px;\n        max-height: 300px;\n        overflow-y: hidden;\n    }\n    .user-post-description{\n        height: 300px;\n        max-height: 300px;\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/pages/UserPosts.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/UserPosts.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserPosts_vue_vue_type_template_id_541a08e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserPosts.vue?vue&type=template&id=541a08e2& */ "./resources/js/pages/UserPosts.vue?vue&type=template&id=541a08e2&");
/* harmony import */ var _UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPosts.vue?vue&type=script&lang=js& */ "./resources/js/pages/UserPosts.vue?vue&type=script&lang=js&");
/* harmony import */ var _UserPosts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserPosts.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/UserPosts.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserPosts_vue_vue_type_template_id_541a08e2___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserPosts_vue_vue_type_template_id_541a08e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/UserPosts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/UserPosts.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/UserPosts.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPosts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/UserPosts.vue?vue&type=template&id=541a08e2&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/UserPosts.vue?vue&type=template&id=541a08e2& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_template_id_541a08e2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_template_id_541a08e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_template_id_541a08e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPosts.vue?vue&type=template&id=541a08e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=template&id=541a08e2&");


/***/ }),

/***/ "./resources/js/pages/UserPosts.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/UserPosts.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPosts.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPosts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=template&id=541a08e2&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=template&id=541a08e2& ***!
  \****************************************************************************************************************************************************************************************************************/
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
        domProps: {
          textContent: _vm._s(
            _vm.$route.query.mode !== "me"
              ? "Обращения пользователей"
              : "Ваши обращения"
          )
        }
      }),
      _vm._v(" "),
      _vm.posts.length > 0
        ? _c(
            "div",
            [
              _c(
                "v-layout",
                { staticClass: "d-flex flex-row flex-wrap" },
                _vm._l(_vm.posts, function(post, y) {
                  return _c(
                    "v-flex",
                    { key: y, attrs: { xs12: "", sm6: "", md6: "", lg4: "" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "ma-1",
                          staticStyle: {
                            position: "relative",
                            border: "thin solid rgb(57 133 165 / 34%)",
                            "border-radius": "16px"
                          },
                          attrs: { elevation: "0", outlined: "" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "d-flex crud",
                              staticStyle: {
                                position: "absolute",
                                right: "5px",
                                top: "-10px",
                                "font-size": "10px"
                              }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mr-3",
                                  attrs: {
                                    color: "primary",
                                    fab: "",
                                    small: "",
                                    dark: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      post.user_like =
                                        post.user_like == 0 ? 1 : 0
                                      post.likes +=
                                        post.user_like === 1 ? 1 : -1
                                      _vm.like(post)
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("mdi-heart")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mr-3",
                                  attrs: {
                                    color: "primary",
                                    fab: "",
                                    small: "",
                                    dark: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(post.likes) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm.$store.state.auth.user.id === post.user_id ||
                              _vm.$store.state.auth.user.role === 1024
                                ? _c(
                                    "v-btn",
                                    {
                                      staticClass: "mr-3",
                                      attrs: {
                                        color: "red",
                                        fab: "",
                                        small: "",
                                        dark: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.delete_id = post.id
                                        }
                                      }
                                    },
                                    [_c("v-icon", [_vm._v("mdi-delete")])],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.$store.state.auth.user.id === post.user_id
                                ? _c(
                                    "v-btn",
                                    {
                                      staticClass: "mr-3",
                                      attrs: {
                                        color: "yellow",
                                        fab: "",
                                        small: "",
                                        dark: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.$router.push(
                                            "/user/post/" + post.id
                                          )
                                        }
                                      }
                                    },
                                    [_c("v-icon", [_vm._v("mdi-pencil")])],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.$store.state.auth.user.role == 1024 &&
                              post.state !== 8
                                ? _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "primary",
                                        fab: "",
                                        small: "",
                                        dark: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.postToAction = post
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-check-outline")
                                      ])
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.$store.state.auth.user.role != 1024 &&
                              post.state == 8 &&
                              _vm.$store.state.auth.user.id === post.user_id
                                ? _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "success",
                                        fab: "",
                                        small: "",
                                        dark: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.postToAction = post
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-check-outline")
                                      ])
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            { staticStyle: { position: "relative" } },
                            [
                              _c("div", {
                                staticStyle: {
                                  position: "absolute",
                                  left: "5px",
                                  bottom: "35px",
                                  "font-size": "10px"
                                },
                                domProps: {
                                  textContent: _vm._s(
                                    "Опубликовано: " + post.date
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c("div", {
                                staticStyle: {
                                  position: "absolute",
                                  left: "5px",
                                  bottom: "20px",
                                  "font-size": "10px"
                                },
                                domProps: {
                                  textContent: _vm._s(
                                    "Пользователь: " +
                                      (post.user_id ==
                                      _vm.$store.state.auth.user.id
                                        ? "Вы"
                                        : post.author.full_name)
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c("div", {
                                staticStyle: {
                                  position: "absolute",
                                  left: "5px",
                                  bottom: "5px",
                                  "font-size": "10px"
                                },
                                domProps: {
                                  textContent: _vm._s(
                                    "Статус: " + _vm.statuses[post.state]
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-toolbar-title",
                                {
                                  staticClass: "text-center mt-2 mb-9",
                                  on: {
                                    click: function($event) {
                                      _vm.dialogPost = post
                                      _vm.show = true
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(post.title))]
                              ),
                              _vm._v(" "),
                              _c("v-spacer")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            {
                              staticClass: "ma-0 pa-0",
                              on: {
                                click: function($event) {
                                  _vm.dialogPost = post
                                  _vm.show = true
                                }
                              }
                            },
                            [
                              post.photos.length
                                ? _c(
                                    "div",
                                    { staticClass: "user-photo-module" },
                                    [
                                      _c(
                                        "v-carousel",
                                        _vm._l(post.photos, function(photo, i) {
                                          return _c("v-carousel-item", {
                                            key: i,
                                            attrs: {
                                              src: photo.file,
                                              contain: "",
                                              "min-heigth": "300px",
                                              "max-heigth": "300px"
                                            }
                                          })
                                        }),
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _c(
                                    "div",
                                    { staticClass: "user-post-description" },
                                    [
                                      _c("v-container", {
                                        domProps: {
                                          innerHTML: _vm._s(post.description)
                                        }
                                      })
                                    ],
                                    1
                                  )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              ),
              _vm._v(" "),
              _vm.l > 1
                ? _c(
                    "div",
                    { staticClass: "text-center xs-12" },
                    [
                      _c("v-pagination", {
                        attrs: { length: _vm.l, "total-visible": 3 },
                        model: {
                          value: _vm.page,
                          callback: function($$v) {
                            _vm.page = $$v
                          },
                          expression: "page"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        : _c("div", [
            _c("div", { staticClass: "text-center my-3" }, [
              _vm._v("Обращений пока нет")
            ])
          ]),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "save-btn",
          attrs: { color: "success", fab: "", dark: "" },
          on: {
            click: function($event) {
              return _vm.$router.push("/user/post/0")
            }
          }
        },
        [_c("v-icon", [_vm._v("mdi-plus")])],
        1
      ),
      _vm._v(" "),
      !!_vm.dialogPost
        ? _c(
            "v-dialog",
            {
              attrs: { fullscreen: _vm.$vuetify.breakpoint.mobile },
              on: {
                close: function($event) {
                  _vm.show = false
                  _vm.dialogPost = null
                }
              },
              model: {
                value: _vm.show,
                callback: function($$v) {
                  _vm.show = $$v
                },
                expression: "show"
              }
            },
            [
              [
                _c(
                  "v-container",
                  {
                    staticClass: "px-0 mx-0 pt-0 mt-0 cover",
                    staticStyle: {
                      "background-color": "white !important",
                      "max-width": "100% !important"
                    }
                  },
                  [
                    _c("v-toolbar-title", { staticClass: "text-center my-3" }, [
                      _vm._v(_vm._s(_vm.dialogPost.title))
                    ]),
                    _vm._v(" "),
                    _vm.dialogPost.photos && _vm.dialogPost.photos.length > 0
                      ? _c(
                          "div",
                          { staticClass: "my-2 container" },
                          [
                            _c(
                              "v-carousel",
                              _vm._l(_vm.dialogPost.photos, function(photo, i) {
                                return _c("v-carousel-item", {
                                  key: i,
                                  attrs: {
                                    src: photo.file,
                                    contain: "",
                                    "max-height": "500px",
                                    "min-height": "500px"
                                  }
                                })
                              }),
                              1
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.dialogPost.comment
                      ? _c("div", {
                          staticClass: "text-center",
                          domProps: {
                            textContent: _vm._s(
                              "Комментарий от администрации: " +
                                _vm.dialogPost.comment
                            )
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("v-container", {
                      domProps: {
                        innerHTML: _vm._s(_vm.dialogPost.description)
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "v-toolbar-title",
                      { staticClass: "text-center my-3" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
                            on: {
                              click: function($event) {
                                _vm.show = false
                                _vm.dialogPost = null
                              }
                            }
                          },
                          [_vm._v("Закрыть\n                    ")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      !!_vm.postToAction
        ? _c(
            "v-dialog",
            {
              attrs: { fullscreen: _vm.$vuetify.breakpoint.mobile },
              on: {
                close: function($event) {
                  _vm.postToAction = null
                }
              },
              model: {
                value: _vm.postToAction,
                callback: function($$v) {
                  _vm.postToAction = $$v
                },
                expression: "postToAction"
              }
            },
            [
              [
                _c(
                  "v-card",
                  [
                    _c(
                      "v-toolbar",
                      {
                        staticClass: "container py-1 my-0 justify-space-between"
                      },
                      [
                        _c("v-toolbar-title", [
                          _c("span", { staticClass: "headline" }, [
                            _vm._v("Подтверждение")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-toolbar-title",
                          [
                            _c(
                              "v-icon",
                              {
                                staticClass: "flex-grow-0",
                                attrs: { text: "" },
                                on: {
                                  click: function($event) {
                                    _vm.postToAction = null
                                  }
                                }
                              },
                              [_vm._v("X")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-container",
                          [
                            _c(
                              "v-col",
                              [
                                _vm.postToAction.state === 0
                                  ? _c("v-card-text", [
                                      _vm._v(
                                        "\n                                Введите коментарий, поясняющий выполнение обращения.\n                            "
                                      )
                                    ])
                                  : _c("v-card-text", [
                                      _vm._v(
                                        "\n                                Вы действительно хотите подтвердить рассмотрение вашего обращения?\n                            "
                                      )
                                    ]),
                                _vm._v(" "),
                                _c(
                                  "v-form",
                                  {
                                    nativeOn: {
                                      keyup: function($event) {
                                        if (
                                          !$event.type.indexOf("key") &&
                                          _vm._k(
                                            $event.keyCode,
                                            "enter",
                                            13,
                                            $event.key,
                                            "Enter"
                                          )
                                        ) {
                                          return null
                                        }
                                        return _vm.attemptReset.apply(
                                          null,
                                          arguments
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm.postToAction.state === 0
                                      ? _c("v-text-field", {
                                          attrs: {
                                            label: "Комментарий",
                                            "error-messages": _vm.commentError,
                                            name: "comment",
                                            type: "text",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.comment,
                                            callback: function($$v) {
                                              _vm.comment = $$v
                                            },
                                            expression: "comment"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "v-card",
                                      {
                                        staticClass:
                                          "d-flex justify-center align-center",
                                        attrs: {
                                          flat: "",
                                          height: "auto",
                                          tile: ""
                                        }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              color: "dark",
                                              disabled:
                                                _vm.postToAction.state == 0 &&
                                                _vm.comment == ""
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.accept(
                                                  _vm.postToAction
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Подтвердить\n                                    "
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
                  ],
                  1
                )
              ]
            ],
            2
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPosts.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/UserPosts.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1411a9fa", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWU/ZDJkZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RzLnZ1ZT85ZDRiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Vc2VyUG9zdHMudnVlPzczODYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWU/MzkyZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb1BBO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBQ0EsVUFEQTtBQUVBLGVBRkE7QUFHQSxhQUhBO0FBSUEsc0JBSkE7QUFLQSxrQkFMQTtBQU1BLGlCQU5BO0FBT0Esd0JBUEE7QUFRQSw4QkFSQTtBQVNBLGlCQVRBO0FBVUEsc0JBVkE7QUFXQTtBQUNBLGlEQURBO0FBRUEsK0NBRkE7QUFHQTtBQUhBO0FBWEE7QUFpQkEsR0FwQkE7QUFxQkEsU0FyQkEscUJBcUJBO0FBQ0E7QUFDQSxHQXZCQTtBQXdCQTtBQUNBLFdBREEscUJBQ0E7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdwQkE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsbXJCQUE0VjtBQUNsWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkpBQWlGO0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19wYWdlc19Vc2VyUG9zdHNfdnVlZGFiYzE1NmYxNjQxMjAyODgyYzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVwiY292ZXJcIj5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cIiRyb3V0ZS5xdWVyeS5tb2RlICE9PSAnbWUnID8gJ9Ce0LHRgNCw0YnQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuScgOiAn0JLQsNGI0Lgg0L7QsdGA0LDRidC10L3QuNGPJ1wiPlxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPGRpdiB2LWlmPVwicG9zdHMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPHYtbGF5b3V0IGNsYXNzPVwiZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcFwiPlxuXG4gICAgICAgICAgICAgICAgPHYtZmxleFxuICAgICAgICAgICAgICAgICAgICAgICAgeHMxMlxuICAgICAgICAgICAgICAgICAgICAgICAgc202XG4gICAgICAgICAgICAgICAgICAgICAgICBtZDZcbiAgICAgICAgICAgICAgICAgICAgICAgIGxnNFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIocG9zdCwgeSkgaW4gcG9zdHNcIiA6a2V5PVwieVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO2JvcmRlcjogdGhpbiBzb2xpZCByZ2IoNTcgMTMzIDE2NSAvIDM0JSk7Ym9yZGVyLXJhZGl1czoxNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hLTFcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGNydWRcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyByaWdodDogNXB4OyB0b3A6IC0xMHB4OyBmb250LXNpemU6IDEwcHhcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnVzZXJfbGlrZSA9IHBvc3QudXNlcl9saWtlID09IDAgPyAxOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5saWtlcyArPSBwb3N0LnVzZXJfbGlrZSA9PT0gMSA/IDEgOiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2UocG9zdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktaGVhcnQ8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Bvc3QubGlrZXN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID09PSBwb3N0LnVzZXJfaWQgfHwgJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PTEwMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxldGVfaWQgPSBwb3N0LmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gdi1pZj1cIiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWQgPT09IHBvc3QudXNlcl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwieWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLnB1c2goJy91c2VyL3Bvc3QvJytwb3N0LmlkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1wZW5jaWw8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09IDEwMjQgJiYgcG9zdC5zdGF0ZSAhPT0gOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJwb3N0VG9BY3Rpb24gPSBwb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktY2hlY2stb3V0bGluZTwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgIT0gMTAyNCAmJiBwb3N0LnN0YXRlID09IDggJiYgJHN0b3JlLnN0YXRlLmF1dGgudXNlci5pZCA9PT0gcG9zdC51c2VyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInBvc3RUb0FjdGlvbiA9IHBvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1jaGVjay1vdXRsaW5lPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi10ZXh0PVwiJ9Ce0L/Rg9Cx0LvQuNC60L7QstCw0L3QvjogJytwb3N0LmRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDogNXB4OyBib3R0b206IDM1cHg7IGZvbnQtc2l6ZTogMTBweFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi10ZXh0PVwiJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjDogJysocG9zdC51c2VyX2lkID09ICRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWQgPyAn0JLRiycgOiBwb3N0LmF1dGhvci5mdWxsX25hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6IDVweDsgYm90dG9tOiAyMHB4OyBmb250LXNpemU6IDEwcHhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtdGV4dD1cIifQodGC0LDRgtGD0YE6ICcrKHN0YXR1c2VzW3Bvc3Quc3RhdGVdKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OiA1cHg7IGJvdHRvbTogNXB4OyBmb250LXNpemU6IDEwcHhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtMiBtYi05XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gcG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyA9ICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI+e3twb3N0LnRpdGxlfX08L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cIm1hLTAgcGEtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gcG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInBvc3QucGhvdG9zLmxlbmd0aFwiIGNsYXNzPVwidXNlci1waG90by1tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHBob3RvLCBpKSBpbiBwb3N0LnBob3Rvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cInBob3RvLmZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlndGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlndGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwidXNlci1wb3N0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciB2LWh0bWw9XCJwb3N0LmRlc2NyaXB0aW9uXCI+PC92LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB4cy0xMlwiIHYtaWY9XCJsID4gMVwiPlxuICAgICAgICAgICAgICAgIDx2LXBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0b3RhbC12aXNpYmxlPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGFnZVwiXG4gICAgICAgICAgICAgICAgPjwvdi1wYWdpbmF0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS0zXCI+0J7QsdGA0LDRidC10L3QuNC5INC/0L7QutCwINC90LXRgjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8di1idG4gY2xhc3M9XCJzYXZlLWJ0blwiXG4gICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLnB1c2goJy91c2VyL3Bvc3QvMCcpXCJcbiAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICA8di1pY29uPm1kaS1wbHVzPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICAgIDx2LWRpYWxvZ1xuICAgICAgICAgICAgICAgIHYtaWY9XCIhIWRpYWxvZ1Bvc3RcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzaG93XCJcbiAgICAgICAgICAgICAgICBAY2xvc2U9XCJcbiAgICAgICAgICAgICAgICAgICAgc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBudWxsXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA6ZnVsbHNjcmVlbj1cIiR2dWV0aWZ5LmJyZWFrcG9pbnQubW9iaWxlXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q6ZGVmYXVsdD5cbiAgICAgICAgICAgICAgICA8di1jb250YWluZXIgY2xhc3M9XCJweC0wIG14LTAgcHQtMCBtdC0wIGNvdmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj57e2RpYWxvZ1Bvc3QudGl0bGV9fTwvdi10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImRpYWxvZ1Bvc3QucGhvdG9zICYmIGRpYWxvZ1Bvc3QucGhvdG9zLmxlbmd0aCA+IDBcIiBjbGFzcz1cIm15LTIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihwaG90bywgaSkgaW4gZGlhbG9nUG9zdC5waG90b3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cInBob3RvLmZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodD1cIjUwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ9XCI1MDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZGlhbG9nUG9zdC5jb21tZW50XCIgdi10ZXh0PVwiJ9Ca0L7QvNC80LXQvdGC0LDRgNC40Lkg0L7RgiDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQuDogJyArIGRpYWxvZ1Bvc3QuY29tbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgdi1odG1sPVwiZGlhbG9nUG9zdC5kZXNjcmlwdGlvblwiPjwvdi1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgXCI+0JfQsNC60YDRi9GC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgIDx2LWRpYWxvZ1xuICAgICAgICAgICAgICAgIHYtaWY9XCIhIXBvc3RUb0FjdGlvblwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInBvc3RUb0FjdGlvblwiXG4gICAgICAgICAgICAgICAgQGNsb3NlPVwiXG4gICAgICAgICAgICAgICAgICAgIHBvc3RUb0FjdGlvbiA9IG51bGxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdDpkZWZhdWx0PlxuICAgICAgICAgICAgICAgIDx2LWNhcmQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhciAgY2xhc3M9XCJjb250YWluZXIgcHktMSBteS0wIGp1c3RpZnktc3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+0J/QvtC00YLQstC10YDQttC00LXQvdC40LU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlPjx2LWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4LWdyb3ctMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicG9zdFRvQWN0aW9uID0gbnVsbFwiPlg8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQgdi1pZj1cInBvc3RUb0FjdGlvbi5zdGF0ZSA9PT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLQstC10LTQuNGC0LUg0LrQvtC80LXQvdGC0LDRgNC40LksINC/0L7Rj9GB0L3Rj9GO0YnQuNC5INCy0YvQv9C+0LvQvdC10L3QuNC1INC+0LHRgNCw0YnQtdC90LjRjy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0IHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INC/0L7QtNGC0LLQtdGA0LTQuNGC0Ywg0YDQsNGB0YHQvNC+0YLRgNC10L3QuNC1INCy0LDRiNC10LPQviDQvtCx0YDQsNGJ0LXQvdC40Y8/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZvcm0gQGtleXVwLm5hdGl2ZS5lbnRlcj1cImF0dGVtcHRSZXNldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCB2LWlmPVwicG9zdFRvQWN0aW9uLnN0YXRlID09PSAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvbW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCa0L7QvNC80LXQvdGC0LDRgNC40LlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJjb21tZW50RXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29tbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJkYXJrXCIgQGNsaWNrPVwiYWNjZXB0KHBvc3RUb0FjdGlvbilcIiA6ZGlzYWJsZWQ9XCJwb3N0VG9BY3Rpb24uc3RhdGUgPT0gMCAmJiBjb21tZW50ID09ICcnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7QtNGC0LLQtdGA0LTQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC92LWRpYWxvZz5cbiAgICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiVXNlclBvc3RzXCIsXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsOiAxLFxuICAgICAgICAgICAgICAgIHBvc3RzOiBbXSxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgZGVsZXRlX2lkOiAwLFxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBvc3RUb0FjdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBjb21tZW50RGlhbG9nU2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29tbWVudDogJycsXG4gICAgICAgICAgICAgICAgY29tbWVudEVycm9yOiAnJyxcbiAgICAgICAgICAgICAgICBzdGF0dXNlczoge1xuICAgICAgICAgICAgICAgICAgICAwOiAn0J7QttC40LTQsNC10YIg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40LXQuScsXG4gICAgICAgICAgICAgICAgICAgIDg6ICfQntC20LjQtNCw0LXRgiDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8nLFxuICAgICAgICAgICAgICAgICAgICAzMjogJ9CX0LDQutGA0YvRgtC+JyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0UGFnZSgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvdXNlci9wb3N0LycsIHtwYXJhbXM6IHtwYWdlOiB0aGlzLnBhZ2UsIHBlcl9wYWdlOiAxMCwgbW9kZTogdGhpcy4kcm91dGUucXVlcnkubW9kZX19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RzID0gWy4uLnJlc3BvbnNlLmRhdGEuZGF0YV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubCA9IHJlc3BvbnNlLmRhdGEubGFzdF9wYWdlXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlbGV0ZV9pZCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5kZWxldGUoJy91c2VyL3Bvc3QvJyArIHRoaXMuZGVsZXRlX2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlX2lkID0gMFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjY2VwdChwb3N0KSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbiA9ICB0aGlzLnBvc3RUb0FjdGlvbi5zdGF0ZSA9PSAwID8gJ2FjY2VwdCcgOiAnY29uZmlybSdcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL3VzZXIvcG9zdC8nICsgcG9zdC5pZCsnLycrYWN0aW9uLCB7Y29tbWVudDogdGhpcy5jb21tZW50fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50ICA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBwb3N0LmNvbW1lbnQgPSByZXNwb25zZS5kYXRhLmRhdGEuY29tbWVudDtcbiAgICAgICAgICAgICAgICAgICAgcG9zdC5zdGF0ZSA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zdGF0ZVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZT8ucmVzcG9uc2U/LnN0YXR1cz09PSA0MjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudEVycm9yID0gZS5yZXNwb25zZS5kYXRhLmVycm9ycy5jb21tZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0VG9BY3Rpb24gPSBwb3N0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0VG9BY3Rpb249IG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlrZShwb3N0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy91c2VyL3Bvc3QvJyArIHBvc3QuaWQrKHBvc3QudXNlcl9saWtlID8gJy9saWtlJyA6ICcvZGlzbGlrZScpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgcGFnZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVfaWQobnYpIHtcbiAgICAgICAgICAgICAgICBpZiAobnYgPiAwKSB0aGlzLmRlbGV0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC51c2VyLXBob3RvLW1vZHVsZXtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB9XG4gICAgLnVzZXItcG9zdC1kZXNjcmlwdGlvbntcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgfVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnVzZXItcGhvdG8tbW9kdWxle1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG4udXNlci1wb3N0LWRlc2NyaXB0aW9ue1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWdVQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0FBQ0E7QUFDQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVxcXCJjb3ZlclxcXCI+XFxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVxcXCJjZW50ZXJcXFwiIGp1c3RpZnk9XFxcImNlbnRlclxcXCIgY2xhc3M9XFxcIm1iLTJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cXFwiJHJvdXRlLnF1ZXJ5Lm1vZGUgIT09ICdtZScgPyAn0J7QsdGA0LDRidC10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5JyA6ICfQktCw0YjQuCDQvtCx0YDQsNGJ0LXQvdC40Y8nXFxcIj5cXG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxcbiAgICAgICAgPGRpdiB2LWlmPVxcXCJwb3N0cy5sZW5ndGggPiAwXFxcIj5cXG4gICAgICAgICAgICA8di1sYXlvdXQgY2xhc3M9XFxcImQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcXFwiPlxcblxcbiAgICAgICAgICAgICAgICA8di1mbGV4XFxuICAgICAgICAgICAgICAgICAgICAgICAgeHMxMlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtNlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kNlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxnNFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCIocG9zdCwgeSkgaW4gcG9zdHNcXFwiIDprZXk9XFxcInlcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249XFxcIjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJwb3NpdGlvbjogcmVsYXRpdmU7Ym9yZGVyOiB0aGluIHNvbGlkIHJnYig1NyAxMzMgMTY1IC8gMzQlKTtib3JkZXItcmFkaXVzOjE2cHhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtYS0xXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJkLWZsZXggY3J1ZFxcXCIgc3R5bGU9XFxcInBvc2l0aW9uOmFic29sdXRlOyByaWdodDogNXB4OyB0b3A6IC0xMHB4OyBmb250LXNpemU6IDEwcHhcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicHJpbWFyeVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtci0zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QudXNlcl9saWtlID0gcG9zdC51c2VyX2xpa2UgPT0gMCA/IDE6IDBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5saWtlcyArPSBwb3N0LnVzZXJfbGlrZSA9PT0gMSA/IDEgOiAtMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlKHBvc3QpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktaGVhcnQ8L3YtaWNvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInByaW1hcnlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibXItM1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twb3N0Lmxpa2VzfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHYtaWY9XFxcIiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWQgPT09IHBvc3QudXNlcl9pZCB8fCAkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09MTAyNFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJyZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImRlbGV0ZV9pZCA9IHBvc3QuaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibXItM1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1kZWxldGU8L3YtaWNvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHYtaWY9XFxcIiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWQgPT09IHBvc3QudXNlcl9pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ5ZWxsb3dcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibXItM1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIiRyb3V0ZXIucHVzaCgnL3VzZXIvcG9zdC8nK3Bvc3QuaWQpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1wZW5jaWw8L3YtaWNvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHYtaWY9XFxcIiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PSAxMDI0ICYmIHBvc3Quc3RhdGUgIT09IDhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicHJpbWFyeVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwicG9zdFRvQWN0aW9uID0gcG9zdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1jaGVjay1vdXRsaW5lPC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVxcXCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgIT0gMTAyNCAmJiBwb3N0LnN0YXRlID09IDggJiYgJHN0b3JlLnN0YXRlLmF1dGgudXNlci5pZCA9PT0gcG9zdC51c2VyX2lkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInN1Y2Nlc3NcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInBvc3RUb0FjdGlvbiA9IHBvc3RcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktY2hlY2stb3V0bGluZTwvdi1pY29uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBzdHlsZT1cXFwicG9zaXRpb246cmVsYXRpdmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtdGV4dD1cXFwiJ9Ce0L/Rg9Cx0LvQuNC60L7QstCw0L3QvjogJytwb3N0LmRhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcInBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OiA1cHg7IGJvdHRvbTogMzVweDsgZm9udC1zaXplOiAxMHB4XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LXRleHQ9XFxcIifQn9C+0LvRjNC30L7QstCw0YLQtdC70Yw6ICcrKHBvc3QudXNlcl9pZCA9PSAkc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID8gJ9CS0YsnIDogcG9zdC5hdXRob3IuZnVsbF9uYW1lKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwicG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6IDVweDsgYm90dG9tOiAyMHB4OyBmb250LXNpemU6IDEwcHhcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtdGV4dD1cXFwiJ9Ch0YLQsNGC0YPRgTogJysoc3RhdHVzZXNbcG9zdC5zdGF0ZV0pXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDogNXB4OyBib3R0b206IDVweDsgZm9udC1zaXplOiAxMHB4XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtY2VudGVyIG10LTIgbWItOVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IHBvc3RcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gIHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIj57e3Bvc3QudGl0bGV9fTwvdi10b29sYmFyLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cXFwibWEtMCBwYS0wXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBwb3N0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gIHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInBvc3QucGhvdG9zLmxlbmd0aFxcXCIgY2xhc3M9XFxcInVzZXItcGhvdG8tbW9kdWxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsLWl0ZW1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCIocGhvdG8sIGkpIGluIHBvc3QucGhvdG9zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XFxcInBob3RvLmZpbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ3RoPVxcXCIzMDBweFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlndGg9XFxcIjMwMHB4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVxcXCJ1c2VyLXBvc3QtZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIHYtaHRtbD1cXFwicG9zdC5kZXNjcmlwdGlvblxcXCI+PC92LWNvbnRhaW5lcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxcbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICA8L3YtbGF5b3V0PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyIHhzLTEyXFxcIiB2LWlmPVxcXCJsID4gMVxcXCI+XFxuICAgICAgICAgICAgICAgIDx2LXBhZ2luYXRpb25cXG4gICAgICAgICAgICAgICAgICAgICAgICA6bGVuZ3RoPVxcXCJsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0b3RhbC12aXNpYmxlPVxcXCIzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInBhZ2VcXFwiXFxuICAgICAgICAgICAgICAgID48L3YtcGFnaW5hdGlvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiB2LWVsc2U+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgbXktM1xcXCI+0J7QsdGA0LDRidC10L3QuNC5INC/0L7QutCwINC90LXRgjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8di1idG4gY2xhc3M9XFxcInNhdmUtYnRuXFxcIlxcbiAgICAgICAgICAgICAgIGNvbG9yPVxcXCJzdWNjZXNzXFxcIlxcbiAgICAgICAgICAgICAgIGZhYlxcbiAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJHJvdXRlci5wdXNoKCcvdXNlci9wb3N0LzAnKVxcXCJcXG4gICAgICAgICAgICAgICBkYXJrPlxcbiAgICAgICAgICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cXG4gICAgICAgIDwvdi1idG4+XFxuICAgICAgICA8di1kaWFsb2dcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiISFkaWFsb2dQb3N0XFxcIlxcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzaG93XFxcIlxcbiAgICAgICAgICAgICAgICBAY2xvc2U9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgc2hvdyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gbnVsbFxcbiAgICAgICAgICAgICAgICBcXFwiXFxuICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVxcXCIkdnVldGlmeS5icmVha3BvaW50Lm1vYmlsZVxcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdDpkZWZhdWx0PlxcbiAgICAgICAgICAgICAgICA8di1jb250YWluZXIgY2xhc3M9XFxcInB4LTAgbXgtMCBwdC0wIG10LTAgY292ZXJcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cXFwidGV4dC1jZW50ZXIgbXktM1xcXCI+e3tkaWFsb2dQb3N0LnRpdGxlfX08L3YtdG9vbGJhci10aXRsZT5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZGlhbG9nUG9zdC5waG90b3MgJiYgZGlhbG9nUG9zdC5waG90b3MubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcIm15LTIgY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWwtaXRlbVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCIocGhvdG8sIGkpIGluIGRpYWxvZ1Bvc3QucGhvdG9zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cXFwicGhvdG8uZmlsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodD1cXFwiNTAwcHhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodD1cXFwiNTAwcHhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsLWl0ZW0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcImRpYWxvZ1Bvc3QuY29tbWVudFxcXCIgdi10ZXh0PVxcXCIn0JrQvtC80LzQtdC90YLQsNGA0LjQuSDQvtGCINCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC4OiAnICsgZGlhbG9nUG9zdC5jb21tZW50XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIHYtaHRtbD1cXFwiZGlhbG9nUG9zdC5kZXNjcmlwdGlvblxcXCI+PC92LWNvbnRhaW5lcj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XFxcInRleHQtY2VudGVyIG15LTNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cXFwicHJpbWFyeVxcXCIgQGNsaWNrPVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBudWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIj7Ql9Cw0LrRgNGL0YLRjFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cXG5cXG4gICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgPC92LWRpYWxvZz5cXG4gICAgICAgIDx2LWRpYWxvZ1xcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCIhIXBvc3RUb0FjdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicG9zdFRvQWN0aW9uXFxcIlxcbiAgICAgICAgICAgICAgICBAY2xvc2U9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcG9zdFRvQWN0aW9uID0gbnVsbFxcbiAgICAgICAgICAgICAgICBcXFwiXFxuICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVxcXCIkdnVldGlmeS5icmVha3BvaW50Lm1vYmlsZVxcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdDpkZWZhdWx0PlxcbiAgICAgICAgICAgICAgICA8di1jYXJkPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhciAgY2xhc3M9XFxcImNvbnRhaW5lciBweS0xIG15LTAganVzdGlmeS1zcGFjZS1iZXR3ZWVuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGxpbmVcXFwiPtCf0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlci8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT48di1pY29uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZmxleC1ncm93LTBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInBvc3RUb0FjdGlvbiA9IG51bGxcXFwiPlg8L3YtaWNvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29sPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0IHYtaWY9XFxcInBvc3RUb0FjdGlvbi5zdGF0ZSA9PT0gMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLQstC10LTQuNGC0LUg0LrQvtC80LXQvdGC0LDRgNC40LksINC/0L7Rj9GB0L3Rj9GO0YnQuNC5INCy0YvQv9C+0LvQvdC10L3QuNC1INC+0LHRgNCw0YnQtdC90LjRjy5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQgdi1lbHNlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INC/0L7QtNGC0LLQtdGA0LTQuNGC0Ywg0YDQsNGB0YHQvNC+0YLRgNC10L3QuNC1INCy0LDRiNC10LPQviDQvtCx0YDQsNGJ0LXQvdC40Y8/XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZm9ybSBAa2V5dXAubmF0aXZlLmVudGVyPVxcXCJhdHRlbXB0UmVzZXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgdi1pZj1cXFwicG9zdFRvQWN0aW9uLnN0YXRlID09PSAwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiY29tbWVudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCLQmtC+0LzQvNC10L3RgtCw0YDQuNC5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVxcXCJjb21tZW50RXJyb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJjb21tZW50XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cXFwiYXV0b1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cXFwiZGFya1xcXCIgQGNsaWNrPVxcXCJhY2NlcHQocG9zdFRvQWN0aW9uKVxcXCIgOmRpc2FibGVkPVxcXCJwb3N0VG9BY3Rpb24uc3RhdGUgPT0gMCAmJiBjb21tZW50ID09ICcnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7QtNGC0LLQtdGA0LTQuNGC0YxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1mb3JtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgPC92LWRpYWxvZz5cXG4gICAgPC92LWNvbnRhaW5lcj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIG5hbWU6IFxcXCJVc2VyUG9zdHNcXFwiLFxcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgbDogMSxcXG4gICAgICAgICAgICAgICAgcG9zdHM6IFtdLFxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxcbiAgICAgICAgICAgICAgICBkaWFsb2dQb3N0OiBudWxsLFxcbiAgICAgICAgICAgICAgICBkZWxldGVfaWQ6IDAsXFxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBwb3N0VG9BY3Rpb246IG51bGwsXFxuICAgICAgICAgICAgICAgIGNvbW1lbnREaWFsb2dTaG93OiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgY29tbWVudDogJycsXFxuICAgICAgICAgICAgICAgIGNvbW1lbnRFcnJvcjogJycsXFxuICAgICAgICAgICAgICAgIHN0YXR1c2VzOiB7XFxuICAgICAgICAgICAgICAgICAgICAwOiAn0J7QttC40LTQsNC10YIg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40LXQuScsXFxuICAgICAgICAgICAgICAgICAgICA4OiAn0J7QttC40LTQsNC10YIg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPJyxcXG4gICAgICAgICAgICAgICAgICAgIDMyOiAn0JfQsNC60YDRi9GC0L4nLFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGdldFBhZ2UoKSB7XFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy91c2VyL3Bvc3QvJywge3BhcmFtczoge3BhZ2U6IHRoaXMucGFnZSwgcGVyX3BhZ2U6IDEwLCBtb2RlOiB0aGlzLiRyb3V0ZS5xdWVyeS5tb2RlfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RzID0gWy4uLnJlc3BvbnNlLmRhdGEuZGF0YV07XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmwgPSByZXNwb25zZS5kYXRhLmxhc3RfcGFnZVxcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZGVsZXRlKCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWxldGVfaWQgPiAwKVxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmRlbGV0ZSgnL3VzZXIvcG9zdC8nICsgdGhpcy5kZWxldGVfaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKClcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZV9pZCA9IDBcXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGFjY2VwdChwb3N0KSB7XFxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb24gPSAgdGhpcy5wb3N0VG9BY3Rpb24uc3RhdGUgPT0gMCA/ICdhY2NlcHQnIDogJ2NvbmZpcm0nXFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvdXNlci9wb3N0LycgKyBwb3N0LmlkKycvJythY3Rpb24sIHtjb21tZW50OiB0aGlzLmNvbW1lbnR9KS50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50ICA9ICcnO1xcbiAgICAgICAgICAgICAgICAgICAgcG9zdC5jb21tZW50ID0gcmVzcG9uc2UuZGF0YS5kYXRhLmNvbW1lbnQ7XFxuICAgICAgICAgICAgICAgICAgICBwb3N0LnN0YXRlID0gcmVzcG9uc2UuZGF0YS5kYXRhLnN0YXRlXFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXG4gICAgICAgICAgICAgICAgICAgIGlmIChlPy5yZXNwb25zZT8uc3RhdHVzPT09IDQyMikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudEVycm9yID0gZS5yZXNwb25zZS5kYXRhLmVycm9ycy5jb21tZW50O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdFRvQWN0aW9uID0gcG9zdDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgIHRoaXMucG9zdFRvQWN0aW9uPSBudWxsO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgbGlrZShwb3N0KSB7XFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvdXNlci9wb3N0LycgKyBwb3N0LmlkKyhwb3N0LnVzZXJfbGlrZSA/ICcvbGlrZScgOiAnL2Rpc2xpa2UnKSkudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgd2F0Y2g6IHtcXG4gICAgICAgICAgICBwYWdlKCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlbGV0ZV9pZChudikge1xcbiAgICAgICAgICAgICAgICBpZiAobnYgPiAwKSB0aGlzLmRlbGV0ZSgpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbiAgICAudXNlci1waG90by1tb2R1bGV7XFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XFxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIH1cXG4gICAgLnVzZXItcG9zdC1kZXNjcmlwdGlvbntcXG4gICAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDFhMDhlMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VyUG9zdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VyUG9zdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcWXVyaXlNaXJvbm92XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcc2thc3lcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTQxYTA4ZTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTQxYTA4ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTQxYTA4ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQxYTA4ZTImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTQxYTA4ZTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy9Vc2VyUG9zdHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyUG9zdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb3ZlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgIGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgIF92bS4kcm91dGUucXVlcnkubW9kZSAhPT0gXCJtZVwiXG4gICAgICAgICAgICAgID8gXCLQntCx0YDQsNGJ0LXQvdC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcIlxuICAgICAgICAgICAgICA6IFwi0JLQsNGI0Lgg0L7QsdGA0LDRidC10L3QuNGPXCJcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wb3N0cy5sZW5ndGggPiAwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1yb3cgZmxleC13cmFwXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBvc3RzLCBmdW5jdGlvbihwb3N0LCB5KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiB5LCBhdHRyczogeyB4czEyOiBcIlwiLCBzbTY6IFwiXCIsIG1kNjogXCJcIiwgbGc0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWEtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcInRoaW4gc29saWQgcmdiKDU3IDEzMyAxNjUgLyAzNCUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiMTZweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGVsZXZhdGlvbjogXCIwXCIsIG91dGxpbmVkOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGNydWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiLTEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC51c2VyX2xpa2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QudXNlcl9saWtlID09IDAgPyAxIDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Lmxpa2VzICs9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC51c2VyX2xpa2UgPT09IDEgPyAxIDogLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxpa2UocG9zdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLWhlYXJ0XCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHBvc3QubGlrZXMpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5pZCA9PT0gcG9zdC51c2VyX2lkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVfaWQgPSBwb3N0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktZGVsZXRlXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5pZCA9PT0gcG9zdC51c2VyX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi91c2VyL3Bvc3QvXCIgKyBwb3N0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktcGVuY2lsXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09IDEwMjQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3Quc3RhdGUgIT09IDhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9zdFRvQWN0aW9uID0gcG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1kaS1jaGVjay1vdXRsaW5lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlICE9IDEwMjQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3Quc3RhdGUgPT0gOCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWQgPT09IHBvc3QudXNlcl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3N0VG9BY3Rpb24gPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWRpLWNoZWNrLW91dGxpbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBcIjM1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcItCe0L/Rg9Cx0LvQuNC60L7QstCw0L3QvjogXCIgKyBwb3N0LmRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcItCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zdC51c2VyX2lkID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCS0YtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcG9zdC5hdXRob3IuZnVsbF9uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQodGC0LDRgtGD0YE6IFwiICsgX3ZtLnN0YXR1c2VzW3Bvc3Quc3RhdGVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG10LTIgbWItOVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2dQb3N0ID0gcG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHBvc3QudGl0bGUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWEtMCBwYS0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QgPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QucGhvdG9zLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidXNlci1waG90by1tb2R1bGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2Fyb3VzZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wocG9zdC5waG90b3MsIGZ1bmN0aW9uKHBob3RvLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2LWNhcm91c2VsLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBwaG90by5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW46IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW4taGVpZ3RoXCI6IFwiMzAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC1oZWlndGhcIjogXCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInVzZXItcG9zdC1kZXNjcmlwdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jb250YWluZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhwb3N0LmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5sID4gMVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgeHMtMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGVuZ3RoOiBfdm0ubCwgXCJ0b3RhbC12aXNpYmxlXCI6IDMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXktM1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi0J7QsdGA0LDRidC10L3QuNC5INC/0L7QutCwINC90LXRglwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2F2ZS1idG5cIixcbiAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJzdWNjZXNzXCIsIGZhYjogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5wdXNoKFwiL3VzZXIvcG9zdC8wXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcIm1kaS1wbHVzXCIpXSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICEhX3ZtLmRpYWxvZ1Bvc3RcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZnVsbHNjcmVlbjogX3ZtLiR2dWV0aWZ5LmJyZWFrcG9pbnQubW9iaWxlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QgPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvdyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJweC0wIG14LTAgcHQtMCBtdC0wIGNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwid2hpdGUgIWltcG9ydGFudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibWF4LXdpZHRoXCI6IFwiMTAwJSAhaW1wb3J0YW50XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBteS0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRpYWxvZ1Bvc3QudGl0bGUpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QucGhvdG9zICYmIF92bS5kaWFsb2dQb3N0LnBob3Rvcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJteS0yIGNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJvdXNlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kaWFsb2dQb3N0LnBob3RvcywgZnVuY3Rpb24ocGhvdG8sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidi1jYXJvdXNlbC1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcGhvdG8uZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW46IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC1oZWlnaHRcIjogXCI1MDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW4taGVpZ2h0XCI6IFwiNTAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2dQb3N0LmNvbW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQmtC+0LzQvNC10L3RgtCw0YDQuNC5INC+0YIg0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40Lg6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QuY29tbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInYtY29udGFpbmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmRpYWxvZ1Bvc3QuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG15LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2dQb3N0ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCX0LDQutGA0YvRgtGMXFxuICAgICAgICAgICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhIV92bS5wb3N0VG9BY3Rpb25cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZnVsbHNjcmVlbjogX3ZtLiR2dWV0aWZ5LmJyZWFrcG9pbnQubW9iaWxlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnBvc3RUb0FjdGlvbiA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wb3N0VG9BY3Rpb24sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnBvc3RUb0FjdGlvbiA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwb3N0VG9BY3Rpb25cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBweS0xIG15LTAganVzdGlmeS1zcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0J/QvtC00YLQstC10YDQttC00LXQvdC40LVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsZXgtZ3Jvdy0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9zdFRvQWN0aW9uID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJYXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9zdFRvQWN0aW9uLnN0YXRlID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInYtY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDQutC+0LzQtdC90YLQsNGA0LjQuSwg0L/QvtGP0YHQvdGP0Y7RidC40Lkg0LLRi9C/0L7Qu9C90LXQvdC40LUg0L7QsdGA0LDRidC10L3QuNGPLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0L/QvtC00YLQstC10YDQtNC40YLRjCDRgNCw0YHRgdC80L7RgtGA0LXQvdC40LUg0LLQsNGI0LXQs9C+INC+0LHRgNCw0YnQtdC90LjRjz9cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYXR0ZW1wdFJlc2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvc3RUb0FjdGlvbi5zdGF0ZSA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCa0L7QvNC80LXQvdGC0LDRgNC40LlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlc1wiOiBfdm0uY29tbWVudEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNvbW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb21tZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbW1lbnQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb21tZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZGFya1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvc3RUb0FjdGlvbi5zdGF0ZSA9PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29tbWVudCA9PSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hY2NlcHQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3N0VG9BY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LTRgtCy0LXRgNC00LjRgtGMXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxNDExYTlmYVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==