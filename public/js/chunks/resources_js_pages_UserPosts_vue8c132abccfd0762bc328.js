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
___CSS_LOADER_EXPORT___.push([module.id, "\n.user-photo-module{\n    height: 300px;\n    max-height: 300px;\n    overflow-y: hidden;\n}\n.user-post-description{\n    height: 300px;\n    max-height: 300px;\n    overflow-y: scroll;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/UserPosts.vue"],"names":[],"mappings":";AAgUA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;AACA","sourcesContent":["<template>\n    <v-container class=\"cover\">\n        <v-toolbar-title align=\"center\" justify=\"center\" class=\"mb-2\"\n                         v-text=\"$route.query.mode !== 'me' ? 'Обращения пользователей' : 'Ваши обращения'\">\n        </v-toolbar-title>\n        <div v-if=\"posts.length > 0\">\n            <v-layout class=\"d-flex flex-row flex-wrap\">\n\n                <v-flex\n                        xs12\n                        sm6\n                        md6\n                        lg4\n                        v-for=\"(post, y) in posts\" :key=\"y\">\n\n                    <v-card\n                            elevation=\"0\"\n                            outlined\n                            style=\"position: relative;\"\n                            class=\"ma-1\"\n                    >\n                        <div\n                             class=\"d-flex crud\" style=\"position:absolute; right: 5px; top: -10px; font-size: 10px\">\n\n                            <v-btn\n                                    color=\"primary\"\n                                    fab\n                                    small\n                                    class=\"mr-3\"\n                                    @click=\"\n                                        post.user_like = post.user_like == 0 ? 1: 0\n                                        post.likes += post.user_like === 1 ? 1 : -1\n                                        like(post)\n                                        \"\n                                    dark>\n                                <v-icon>mdi-heart</v-icon>\n                            </v-btn>\n                            <v-btn\n                                    color=\"primary\"\n                                    fab\n                                    small\n                                    class=\"mr-3\"\n                                    dark>\n                                {{post.likes}}\n                            </v-btn>\n                            <v-btn v-if=\"$store.state.auth.user.id === post.user_id || $store.state.auth.user.role ===1024\"\n                                   color=\"red\"\n                                   fab\n                                   small\n                                   @click=\"delete_id = post.id\"\n                                   class=\"mr-3\"\n                                   dark>\n                                <v-icon>mdi-delete</v-icon>\n                            </v-btn>\n                            <v-btn v-if=\"$store.state.auth.user.id === post.user_id\"\n                                   color=\"yellow\"\n                                    fab\n                                    small\n                                    class=\"mr-3\"\n                                    @click=\"$router.push('/user/post/'+post.id)\"\n                                    dark>\n                                <v-icon>mdi-pencil</v-icon>\n                            </v-btn>\n                            <v-btn v-if=\"$store.state.auth.user.role == 1024 && post.state !== 8\"\n                                   color=\"primary\"\n                                   fab\n                                   small\n                                   @click=\"postToAction = post\"\n                                   dark>\n                                <v-icon>mdi-check-outline</v-icon>\n                            </v-btn>\n                            <v-btn v-if=\"$store.state.auth.user.role != 1024 && post.state == 8 && $store.state.auth.user.id === post.user_id\"\n                                   color=\"success\"\n                                   fab\n                                   small\n                                   @click=\"postToAction = post\"\n                                   dark>\n                                <v-icon>mdi-check-outline</v-icon>\n                            </v-btn>\n                        </div>\n\n                        <v-container style=\"position:relative\">\n                            <div v-text=\"'Опубликовано: '+post.date\"\n                                 style=\"position:absolute; left: 5px; bottom: 35px; font-size: 10px\"></div>\n                            <div v-text=\"'Пользователь: '+(post.user_id == $store.state.auth.user.id ? 'Вы' : post.author.full_name)\"\n                                 style=\"position:absolute; left: 5px; bottom: 20px; font-size: 10px\"></div>\n                            <div v-text=\"'Статус: '+(statuses[post.state])\"\n                                 style=\"position:absolute; left: 5px; bottom: 5px; font-size: 10px\"></div>\n                            <v-toolbar-title\n                                class=\"text-center mt-2 mb-9\"\n                                @click=\"\n                                    dialogPost = post\n                                    show =  true\n                            \">{{post.title}}</v-toolbar-title>\n                            <v-spacer></v-spacer>\n                        </v-container>\n\n                        <v-container class=\"ma-0 pa-0\"\n                             @click=\"\n                                dialogPost = post\n                                show =  true\n                        \">\n                            <div v-if=\"post.photos.length\" class=\"user-photo-module\">\n                                <v-carousel>\n                                    <v-carousel-item\n                                            v-for=\"(photo, i) in post.photos\"\n                                            :key=\"i\"\n                                            :src=\"photo.file\"\n                                            contain\n                                            min-heigth=\"300px\"\n                                            max-heigth=\"300px\"\n                                    >\n                                    </v-carousel-item>\n                                </v-carousel>\n                            </div>\n                            <div v-else class=\"user-post-description\">\n                                <v-container v-html=\"post.description\"></v-container>\n                            </div>\n                        </v-container>\n                    </v-card>\n                </v-flex>\n            </v-layout>\n            <div class=\"text-center xs-12\" v-if=\"l > 1\">\n                <v-pagination\n                        :length=\"l\"\n                        :total-visible=\"3\"\n                        v-model=\"page\"\n                ></v-pagination>\n            </div>\n        </div>\n        <div v-else>\n            <div class=\"text-center my-3\">Обращений пока нет</div>\n        </div>\n\n        <v-btn class=\"save-btn\"\n               color=\"success\"\n               fab\n               @click=\"$router.push('/user/post/0')\"\n               dark>\n            <v-icon>mdi-plus</v-icon>\n        </v-btn>\n        <v-dialog\n                v-if=\"!!dialogPost\"\n                v-model=\"show\"\n                @close=\"\n                    show = false\n                    dialogPost = null\n                \"\n                :fullscreen=\"$vuetify.breakpoint.mobile\"\n        >\n            <template slot:default>\n                <v-container class=\"px-0 mx-0 pt-0 mt-0 cover\" style=\"background-color: white !important; max-width: 100% !important;\">\n                    <v-toolbar-title class=\"text-center my-3\">{{dialogPost.title}}</v-toolbar-title>\n\n                    <div v-if=\"dialogPost.photos && dialogPost.photos.length > 0\" class=\"my-2 container\">\n                        <v-carousel>\n                            <v-carousel-item\n                                    v-for=\"(photo, i) in dialogPost.photos\"\n                                    :key=\"i\"\n                                    :src=\"photo.file\"\n                                    contain\n                                    max-height=\"500px\"\n                                    min-height=\"500px\"\n                            >\n                            </v-carousel-item>\n                        </v-carousel>\n                    </div>\n                    <div v-if=\"dialogPost.comment\" v-text=\"'Комментарий от администрации: ' + dialogPost.comment\"\n                         class=\"text-center\"></div>\n                    <v-container v-html=\"dialogPost.description\"></v-container>\n\n                    <v-toolbar-title class=\"text-center my-3\">\n                        <v-btn color=\"primary\" @click=\"\n                            show = false\n                            dialogPost = null\n                        \">Закрыть\n                        </v-btn>\n                    </v-toolbar-title>\n\n                </v-container>\n            </template>\n        </v-dialog>\n        <v-dialog\n                v-if=\"!!postToAction\"\n                v-model=\"postToAction\"\n                @close=\"\n                    postToAction = null\n                \"\n                :fullscreen=\"$vuetify.breakpoint.mobile\"\n        >\n            <template slot:default>\n                <v-card>\n\n                    <v-toolbar  class=\"container py-1 my-0 justify-space-between\">\n                        <v-toolbar-title>\n                            <span class=\"headline\">Подтверждение</span>\n                        </v-toolbar-title>\n                        <v-spacer/>\n                        <v-toolbar-title><v-icon\n                                class=\"flex-grow-0\"\n                                text\n                                @click=\"postToAction = null\">X</v-icon>\n                        </v-toolbar-title>\n                    </v-toolbar>\n                    <v-card-text>\n                        <v-container>\n                            <v-col>\n\n                                <v-card-text v-if=\"postToAction.state === 0\">\n                                    Введите коментарий, поясняющий выполнение обращения.\n                                </v-card-text>\n                                <v-card-text v-else>\n                                    Вы действительно хотите подтвердить рассмотрение вашего обращения?\n                                </v-card-text>\n                                <v-form @keyup.native.enter=\"attemptReset\">\n                                    <v-text-field v-if=\"postToAction.state === 0\"\n                                            v-model=\"comment\"\n                                            label=\"Комментарий\"\n                                            :error-messages=\"commentError\"\n                                            name=\"comment\"\n                                            type=\"text\"\n                                            required\n                                    />\n                                    <v-card\n                                            class=\"d-flex justify-center align-center\"\n                                            flat\n                                            height=\"auto\"\n                                            tile\n                                    >\n                                        <v-btn color=\"dark\" @click=\"accept(postToAction)\" :disabled=\"postToAction.state == 0 && comment == ''\">\n                                            Подтвердить\n                                        </v-btn>\n                                    </v-card>\n                                </v-form>\n                            </v-col>\n                        </v-container>\n                    </v-card-text>\n                </v-card>\n            </template>\n        </v-dialog>\n    </v-container>\n</template>\n\n<script>\n    export default {\n        name: \"UserPosts\",\n        data: (vm) => {\n            return {\n                l: 1,\n                posts: [],\n                page: 1,\n                dialogPost: null,\n                delete_id: 0,\n                show: false,\n                postToAction: null,\n                commentDialogShow: false,\n                comment: '',\n                commentError: '',\n                statuses: {\n                    0: 'Ожидает подтверждения администрацией',\n                    8: 'Ожидает подтверждения пользователя',\n                    32: 'Закрыто',\n                }\n            }\n        },\n        mounted() {\n            this.getPage();\n        },\n        methods: {\n            getPage() {\n                window.axios.get('/user/post/', {params: {page: this.page, per_page: 10, mode: this.$route.query.mode}}).then((response) => {\n                    this.posts = [...response.data.data];\n                    this.l = response.data.last_page\n                }).catch((e) => {\n                    console.log(e);\n                });\n            },\n            delete() {\n                if (this.delete_id > 0)\n                    window.axios.delete('/user/post/' + this.delete_id).then((response) => {\n                        this.getPage()\n                        this.delete_id = 0\n                    }).catch((e) => {\n                        console.log(e);\n                    });\n            },\n            accept(post) {\n                let action =  this.postToAction.state == 0 ? 'accept' : 'confirm'\n                window.axios.post('/user/post/' + post.id+'/'+action, {comment: this.comment}).then((response) => {\n                    this.comment  = '';\n                    post.comment = response.data.data.comment;\n                    post.state = response.data.data.state\n                }).catch((e) => {\n                    console.log(e);\n                    if (e?.response?.status=== 422) {\n                        this.commentError = e.response.data.errors.comment;\n                        this.postToAction = post;\n                    }\n                });\n                this.postToAction= null;\n            },\n            like(post) {\n                window.axios.post('/user/post/' + post.id+(post.user_like ? '/like' : '/dislike')).then((response) => {\n                }).catch((e) => {\n                    console.log(e);\n                });\n            }\n        },\n        watch: {\n            page() {\n                this.getPage();\n            },\n            delete_id(nv) {\n                if (nv > 0) this.delete()\n            }\n        }\n    }\n</script>\n\n<style>\n    .user-photo-module{\n        height: 300px;\n        max-height: 300px;\n        overflow-y: hidden;\n    }\n    .user-post-description{\n        height: 300px;\n        max-height: 300px;\n        overflow-y: scroll;\n    }\n</style>\n"],"sourceRoot":""}]);
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
                          staticStyle: { position: "relative" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWU/ZDJkZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RzLnZ1ZT85ZDRiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Vc2VyUG9zdHMudnVlPzczODYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWU/MzkyZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb1BBO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBQ0EsVUFEQTtBQUVBLGVBRkE7QUFHQSxhQUhBO0FBSUEsc0JBSkE7QUFLQSxrQkFMQTtBQU1BLGlCQU5BO0FBT0Esd0JBUEE7QUFRQSw4QkFSQTtBQVNBLGlCQVRBO0FBVUEsc0JBVkE7QUFXQTtBQUNBLGlEQURBO0FBRUEsK0NBRkE7QUFHQTtBQUhBO0FBWEE7QUFpQkEsR0FwQkE7QUFxQkEsU0FyQkEscUJBcUJBO0FBQ0E7QUFDQSxHQXZCQTtBQXdCQTtBQUNBLFdBREEscUJBQ0E7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDenBCQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxtckJBQTRWO0FBQ2xYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwySkFBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJqcy9jaHVua3MvcmVzb3VyY2VzX2pzX3BhZ2VzX1VzZXJQb3N0c192dWU4YzEzMmFiY2NmZDA3NjJiYzMyOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250YWluZXIgY2xhc3M9XCJjb3ZlclwiPlxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVwiJHJvdXRlLnF1ZXJ5Lm1vZGUgIT09ICdtZScgPyAn0J7QsdGA0LDRidC10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5JyA6ICfQktCw0YjQuCDQvtCx0YDQsNGJ0LXQvdC40Y8nXCI+XG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICA8ZGl2IHYtaWY9XCJwb3N0cy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICA8di1sYXlvdXQgY2xhc3M9XCJkLWZsZXggZmxleC1yb3cgZmxleC13cmFwXCI+XG5cbiAgICAgICAgICAgICAgICA8di1mbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICB4czEyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTZcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kNlxuICAgICAgICAgICAgICAgICAgICAgICAgbGc0XG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihwb3N0LCB5KSBpbiBwb3N0c1wiIDprZXk9XCJ5XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hLTFcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGNydWRcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyByaWdodDogNXB4OyB0b3A6IC0xMHB4OyBmb250LXNpemU6IDEwcHhcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnVzZXJfbGlrZSA9IHBvc3QudXNlcl9saWtlID09IDAgPyAxOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5saWtlcyArPSBwb3N0LnVzZXJfbGlrZSA9PT0gMSA/IDEgOiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2UocG9zdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktaGVhcnQ8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Bvc3QubGlrZXN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID09PSBwb3N0LnVzZXJfaWQgfHwgJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PTEwMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxldGVfaWQgPSBwb3N0LmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gdi1pZj1cIiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWQgPT09IHBvc3QudXNlcl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwieWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLnB1c2goJy91c2VyL3Bvc3QvJytwb3N0LmlkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1wZW5jaWw8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09IDEwMjQgJiYgcG9zdC5zdGF0ZSAhPT0gOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJwb3N0VG9BY3Rpb24gPSBwb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktY2hlY2stb3V0bGluZTwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgIT0gMTAyNCAmJiBwb3N0LnN0YXRlID09IDggJiYgJHN0b3JlLnN0YXRlLmF1dGgudXNlci5pZCA9PT0gcG9zdC51c2VyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInBvc3RUb0FjdGlvbiA9IHBvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1jaGVjay1vdXRsaW5lPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi10ZXh0PVwiJ9Ce0L/Rg9Cx0LvQuNC60L7QstCw0L3QvjogJytwb3N0LmRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDogNXB4OyBib3R0b206IDM1cHg7IGZvbnQtc2l6ZTogMTBweFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi10ZXh0PVwiJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjDogJysocG9zdC51c2VyX2lkID09ICRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWQgPyAn0JLRiycgOiBwb3N0LmF1dGhvci5mdWxsX25hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6IDVweDsgYm90dG9tOiAyMHB4OyBmb250LXNpemU6IDEwcHhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtdGV4dD1cIifQodGC0LDRgtGD0YE6ICcrKHN0YXR1c2VzW3Bvc3Quc3RhdGVdKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OiA1cHg7IGJvdHRvbTogNXB4OyBmb250LXNpemU6IDEwcHhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtMiBtYi05XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gcG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyA9ICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI+e3twb3N0LnRpdGxlfX08L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cIm1hLTAgcGEtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gcG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInBvc3QucGhvdG9zLmxlbmd0aFwiIGNsYXNzPVwidXNlci1waG90by1tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHBob3RvLCBpKSBpbiBwb3N0LnBob3Rvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cInBob3RvLmZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlndGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlndGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwidXNlci1wb3N0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciB2LWh0bWw9XCJwb3N0LmRlc2NyaXB0aW9uXCI+PC92LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB4cy0xMlwiIHYtaWY9XCJsID4gMVwiPlxuICAgICAgICAgICAgICAgIDx2LXBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0b3RhbC12aXNpYmxlPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGFnZVwiXG4gICAgICAgICAgICAgICAgPjwvdi1wYWdpbmF0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS0zXCI+0J7QsdGA0LDRidC10L3QuNC5INC/0L7QutCwINC90LXRgjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8di1idG4gY2xhc3M9XCJzYXZlLWJ0blwiXG4gICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLnB1c2goJy91c2VyL3Bvc3QvMCcpXCJcbiAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICA8di1pY29uPm1kaS1wbHVzPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICAgIDx2LWRpYWxvZ1xuICAgICAgICAgICAgICAgIHYtaWY9XCIhIWRpYWxvZ1Bvc3RcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzaG93XCJcbiAgICAgICAgICAgICAgICBAY2xvc2U9XCJcbiAgICAgICAgICAgICAgICAgICAgc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBudWxsXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA6ZnVsbHNjcmVlbj1cIiR2dWV0aWZ5LmJyZWFrcG9pbnQubW9iaWxlXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q6ZGVmYXVsdD5cbiAgICAgICAgICAgICAgICA8di1jb250YWluZXIgY2xhc3M9XCJweC0wIG14LTAgcHQtMCBtdC0wIGNvdmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj57e2RpYWxvZ1Bvc3QudGl0bGV9fTwvdi10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImRpYWxvZ1Bvc3QucGhvdG9zICYmIGRpYWxvZ1Bvc3QucGhvdG9zLmxlbmd0aCA+IDBcIiBjbGFzcz1cIm15LTIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihwaG90bywgaSkgaW4gZGlhbG9nUG9zdC5waG90b3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cInBob3RvLmZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodD1cIjUwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ9XCI1MDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZGlhbG9nUG9zdC5jb21tZW50XCIgdi10ZXh0PVwiJ9Ca0L7QvNC80LXQvdGC0LDRgNC40Lkg0L7RgiDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQuDogJyArIGRpYWxvZ1Bvc3QuY29tbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgdi1odG1sPVwiZGlhbG9nUG9zdC5kZXNjcmlwdGlvblwiPjwvdi1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgXCI+0JfQsNC60YDRi9GC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgIDx2LWRpYWxvZ1xuICAgICAgICAgICAgICAgIHYtaWY9XCIhIXBvc3RUb0FjdGlvblwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInBvc3RUb0FjdGlvblwiXG4gICAgICAgICAgICAgICAgQGNsb3NlPVwiXG4gICAgICAgICAgICAgICAgICAgIHBvc3RUb0FjdGlvbiA9IG51bGxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdDpkZWZhdWx0PlxuICAgICAgICAgICAgICAgIDx2LWNhcmQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhciAgY2xhc3M9XCJjb250YWluZXIgcHktMSBteS0wIGp1c3RpZnktc3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+0J/QvtC00YLQstC10YDQttC00LXQvdC40LU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlPjx2LWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4LWdyb3ctMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicG9zdFRvQWN0aW9uID0gbnVsbFwiPlg8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQgdi1pZj1cInBvc3RUb0FjdGlvbi5zdGF0ZSA9PT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLQstC10LTQuNGC0LUg0LrQvtC80LXQvdGC0LDRgNC40LksINC/0L7Rj9GB0L3Rj9GO0YnQuNC5INCy0YvQv9C+0LvQvdC10L3QuNC1INC+0LHRgNCw0YnQtdC90LjRjy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0IHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INC/0L7QtNGC0LLQtdGA0LTQuNGC0Ywg0YDQsNGB0YHQvNC+0YLRgNC10L3QuNC1INCy0LDRiNC10LPQviDQvtCx0YDQsNGJ0LXQvdC40Y8/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZvcm0gQGtleXVwLm5hdGl2ZS5lbnRlcj1cImF0dGVtcHRSZXNldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCB2LWlmPVwicG9zdFRvQWN0aW9uLnN0YXRlID09PSAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvbW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCa0L7QvNC80LXQvdGC0LDRgNC40LlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJjb21tZW50RXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29tbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJkYXJrXCIgQGNsaWNrPVwiYWNjZXB0KHBvc3RUb0FjdGlvbilcIiA6ZGlzYWJsZWQ9XCJwb3N0VG9BY3Rpb24uc3RhdGUgPT0gMCAmJiBjb21tZW50ID09ICcnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7QtNGC0LLQtdGA0LTQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC92LWRpYWxvZz5cbiAgICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiVXNlclBvc3RzXCIsXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsOiAxLFxuICAgICAgICAgICAgICAgIHBvc3RzOiBbXSxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgZGVsZXRlX2lkOiAwLFxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBvc3RUb0FjdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBjb21tZW50RGlhbG9nU2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29tbWVudDogJycsXG4gICAgICAgICAgICAgICAgY29tbWVudEVycm9yOiAnJyxcbiAgICAgICAgICAgICAgICBzdGF0dXNlczoge1xuICAgICAgICAgICAgICAgICAgICAwOiAn0J7QttC40LTQsNC10YIg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40LXQuScsXG4gICAgICAgICAgICAgICAgICAgIDg6ICfQntC20LjQtNCw0LXRgiDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8nLFxuICAgICAgICAgICAgICAgICAgICAzMjogJ9CX0LDQutGA0YvRgtC+JyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0UGFnZSgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvdXNlci9wb3N0LycsIHtwYXJhbXM6IHtwYWdlOiB0aGlzLnBhZ2UsIHBlcl9wYWdlOiAxMCwgbW9kZTogdGhpcy4kcm91dGUucXVlcnkubW9kZX19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RzID0gWy4uLnJlc3BvbnNlLmRhdGEuZGF0YV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubCA9IHJlc3BvbnNlLmRhdGEubGFzdF9wYWdlXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlbGV0ZV9pZCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5kZWxldGUoJy91c2VyL3Bvc3QvJyArIHRoaXMuZGVsZXRlX2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlX2lkID0gMFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjY2VwdChwb3N0KSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbiA9ICB0aGlzLnBvc3RUb0FjdGlvbi5zdGF0ZSA9PSAwID8gJ2FjY2VwdCcgOiAnY29uZmlybSdcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL3VzZXIvcG9zdC8nICsgcG9zdC5pZCsnLycrYWN0aW9uLCB7Y29tbWVudDogdGhpcy5jb21tZW50fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50ICA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBwb3N0LmNvbW1lbnQgPSByZXNwb25zZS5kYXRhLmRhdGEuY29tbWVudDtcbiAgICAgICAgICAgICAgICAgICAgcG9zdC5zdGF0ZSA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zdGF0ZVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZT8ucmVzcG9uc2U/LnN0YXR1cz09PSA0MjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudEVycm9yID0gZS5yZXNwb25zZS5kYXRhLmVycm9ycy5jb21tZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0VG9BY3Rpb24gPSBwb3N0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0VG9BY3Rpb249IG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlrZShwb3N0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy91c2VyL3Bvc3QvJyArIHBvc3QuaWQrKHBvc3QudXNlcl9saWtlID8gJy9saWtlJyA6ICcvZGlzbGlrZScpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgcGFnZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVfaWQobnYpIHtcbiAgICAgICAgICAgICAgICBpZiAobnYgPiAwKSB0aGlzLmRlbGV0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC51c2VyLXBob3RvLW1vZHVsZXtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB9XG4gICAgLnVzZXItcG9zdC1kZXNjcmlwdGlvbntcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB9XG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udXNlci1waG90by1tb2R1bGV7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcbi51c2VyLXBvc3QtZGVzY3JpcHRpb257XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9wYWdlcy9Vc2VyUG9zdHMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFnVUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtBQUNBO0FBQ0E7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVxcXCJjb3ZlclxcXCI+XFxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVxcXCJjZW50ZXJcXFwiIGp1c3RpZnk9XFxcImNlbnRlclxcXCIgY2xhc3M9XFxcIm1iLTJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cXFwiJHJvdXRlLnF1ZXJ5Lm1vZGUgIT09ICdtZScgPyAn0J7QsdGA0LDRidC10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5JyA6ICfQktCw0YjQuCDQvtCx0YDQsNGJ0LXQvdC40Y8nXFxcIj5cXG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxcbiAgICAgICAgPGRpdiB2LWlmPVxcXCJwb3N0cy5sZW5ndGggPiAwXFxcIj5cXG4gICAgICAgICAgICA8di1sYXlvdXQgY2xhc3M9XFxcImQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcXFwiPlxcblxcbiAgICAgICAgICAgICAgICA8di1mbGV4XFxuICAgICAgICAgICAgICAgICAgICAgICAgeHMxMlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtNlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kNlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxnNFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCIocG9zdCwgeSkgaW4gcG9zdHNcXFwiIDprZXk9XFxcInlcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249XFxcIjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJwb3NpdGlvbjogcmVsYXRpdmU7XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWEtMVxcXCJcXG4gICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZC1mbGV4IGNydWRcXFwiIHN0eWxlPVxcXCJwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiAtMTBweDsgZm9udC1zaXplOiAxMHB4XFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInByaW1hcnlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibXItM1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnVzZXJfbGlrZSA9IHBvc3QudXNlcl9saWtlID09IDAgPyAxOiAwXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QubGlrZXMgKz0gcG9zdC51c2VyX2xpa2UgPT09IDEgPyAxIDogLTFcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZShwb3N0KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWhlYXJ0PC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1yLTNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cG9zdC5saWtlc319XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVxcXCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID09PSBwb3N0LnVzZXJfaWQgfHwgJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PTEwMjRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicmVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJkZWxldGVfaWQgPSBwb3N0LmlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1yLTNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVxcXCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID09PSBwb3N0LnVzZXJfaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwieWVsbG93XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1yLTNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCIkcm91dGVyLnB1c2goJy91c2VyL3Bvc3QvJytwb3N0LmlkKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktcGVuY2lsPC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVxcXCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT0gMTAyNCAmJiBwb3N0LnN0YXRlICE9PSA4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInByaW1hcnlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInBvc3RUb0FjdGlvbiA9IHBvc3RcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktY2hlY2stb3V0bGluZTwvdi1pY29uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gdi1pZj1cXFwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlICE9IDEwMjQgJiYgcG9zdC5zdGF0ZSA9PSA4ICYmICRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWQgPT09IHBvc3QudXNlcl9pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJzdWNjZXNzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJwb3N0VG9BY3Rpb24gPSBwb3N0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWNoZWNrLW91dGxpbmU8L3YtaWNvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgc3R5bGU9XFxcInBvc2l0aW9uOnJlbGF0aXZlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LXRleHQ9XFxcIifQntC/0YPQsdC70LjQutC+0LLQsNC90L46ICcrcG9zdC5kYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDogNXB4OyBib3R0b206IDM1cHg7IGZvbnQtc2l6ZTogMTBweFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi10ZXh0PVxcXCIn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMOiAnKyhwb3N0LnVzZXJfaWQgPT0gJHN0b3JlLnN0YXRlLmF1dGgudXNlci5pZCA/ICfQktGLJyA6IHBvc3QuYXV0aG9yLmZ1bGxfbmFtZSlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcInBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OiA1cHg7IGJvdHRvbTogMjBweDsgZm9udC1zaXplOiAxMHB4XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LXRleHQ9XFxcIifQodGC0LDRgtGD0YE6ICcrKHN0YXR1c2VzW3Bvc3Quc3RhdGVdKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwicG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6IDVweDsgYm90dG9tOiA1cHg7IGZvbnQtc2l6ZTogMTBweFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBtdC0yIG1iLTlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBwb3N0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyA9ICB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCI+e3twb3N0LnRpdGxlfX08L3YtdG9vbGJhci10aXRsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgY2xhc3M9XFxcIm1hLTAgcGEtMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gcG9zdFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyA9ICB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJwb3N0LnBob3Rvcy5sZW5ndGhcXFwiIGNsYXNzPVxcXCJ1c2VyLXBob3RvLW1vZHVsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKHBob3RvLCBpKSBpbiBwb3N0LnBob3Rvc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVxcXCJwaG90by5maWxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWd0aD1cXFwiMzAwcHhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ3RoPVxcXCIzMDBweFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsLWl0ZW0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cXFwidXNlci1wb3N0LWRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciB2LWh0bWw9XFxcInBvc3QuZGVzY3JpcHRpb25cXFwiPjwvdi1jb250YWluZXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cXG4gICAgICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgICAgPC92LWxheW91dD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciB4cy0xMlxcXCIgdi1pZj1cXFwibCA+IDFcXFwiPlxcbiAgICAgICAgICAgICAgICA8di1wYWdpbmF0aW9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cXFwibFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6dG90YWwtdmlzaWJsZT1cXFwiM1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJwYWdlXFxcIlxcbiAgICAgICAgICAgICAgICA+PC92LXBhZ2luYXRpb24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgdi1lbHNlPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyIG15LTNcXFwiPtCe0LHRgNCw0YnQtdC90LjQuSDQv9C+0LrQsCDQvdC10YI8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPHYtYnRuIGNsYXNzPVxcXCJzYXZlLWJ0blxcXCJcXG4gICAgICAgICAgICAgICBjb2xvcj1cXFwic3VjY2Vzc1xcXCJcXG4gICAgICAgICAgICAgICBmYWJcXG4gICAgICAgICAgICAgICBAY2xpY2s9XFxcIiRyb3V0ZXIucHVzaCgnL3VzZXIvcG9zdC8wJylcXFwiXFxuICAgICAgICAgICAgICAgZGFyaz5cXG4gICAgICAgICAgICA8di1pY29uPm1kaS1wbHVzPC92LWljb24+XFxuICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgPHYtZGlhbG9nXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcIiEhZGlhbG9nUG9zdFxcXCJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2hvd1xcXCJcXG4gICAgICAgICAgICAgICAgQGNsb3NlPVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHNob3cgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IG51bGxcXG4gICAgICAgICAgICAgICAgXFxcIlxcbiAgICAgICAgICAgICAgICA6ZnVsbHNjcmVlbj1cXFwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q6ZGVmYXVsdD5cXG4gICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGNsYXNzPVxcXCJweC0wIG14LTAgcHQtMCBtdC0wIGNvdmVyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDsgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XFxcInRleHQtY2VudGVyIG15LTNcXFwiPnt7ZGlhbG9nUG9zdC50aXRsZX19PC92LXRvb2xiYXItdGl0bGU+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcImRpYWxvZ1Bvc3QucGhvdG9zICYmIGRpYWxvZ1Bvc3QucGhvdG9zLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJteS0yIGNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsLWl0ZW1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKHBob3RvLCBpKSBpbiBkaWFsb2dQb3N0LnBob3Rvc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XFxcInBob3RvLmZpbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ9XFxcIjUwMHB4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ9XFxcIjUwMHB4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbC1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJkaWFsb2dQb3N0LmNvbW1lbnRcXFwiIHYtdGV4dD1cXFwiJ9Ca0L7QvNC80LXQvdGC0LDRgNC40Lkg0L7RgiDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQuDogJyArIGRpYWxvZ1Bvc3QuY29tbWVudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciB2LWh0bWw9XFxcImRpYWxvZ1Bvc3QuZGVzY3JpcHRpb25cXFwiPjwvdi1jb250YWluZXI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBteS0zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XFxcInByaW1hcnlcXFwiIEBjbGljaz1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gbnVsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCI+0JfQsNC60YDRi9GC0YxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XFxuXFxuICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgIDwvdi1kaWFsb2c+XFxuICAgICAgICA8di1kaWFsb2dcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiISFwb3N0VG9BY3Rpb25cXFwiXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInBvc3RUb0FjdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgQGNsb3NlPVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHBvc3RUb0FjdGlvbiA9IG51bGxcXG4gICAgICAgICAgICAgICAgXFxcIlxcbiAgICAgICAgICAgICAgICA6ZnVsbHNjcmVlbj1cXFwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q6ZGVmYXVsdD5cXG4gICAgICAgICAgICAgICAgPHYtY2FyZD5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXIgIGNsYXNzPVxcXCJjb250YWluZXIgcHktMSBteS0wIGp1c3RpZnktc3BhY2UtYmV0d2VlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRsaW5lXFxcIj7Qn9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGU+PHYtaWNvblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZsZXgtZ3Jvdy0wXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJwb3N0VG9BY3Rpb24gPSBudWxsXFxcIj5YPC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtdG9vbGJhcj5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNvbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dCB2LWlmPVxcXCJwb3N0VG9BY3Rpb24uc3RhdGUgPT09IDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INC60L7QvNC10L3RgtCw0YDQuNC5LCDQv9C+0Y/RgdC90Y/RjtGJ0LjQuSDQstGL0L/QvtC70L3QtdC90LjQtSDQvtCx0YDQsNGJ0LXQvdC40Y8uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0IHYtZWxzZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDQv9C+0LTRgtCy0LXRgNC00LjRgtGMINGA0LDRgdGB0LzQvtGC0YDQtdC90LjQtSDQstCw0YjQtdCz0L4g0L7QsdGA0LDRidC10L3QuNGPP1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZvcm0gQGtleXVwLm5hdGl2ZS5lbnRlcj1cXFwiYXR0ZW1wdFJlc2V0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIHYtaWY9XFxcInBvc3RUb0FjdGlvbi5zdGF0ZSA9PT0gMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImNvbW1lbnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwi0JrQvtC80LzQtdC90YLQsNGA0LjQuVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cXFwiY29tbWVudEVycm9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiY29tbWVudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImQtZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcImF1dG9cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XFxcImRhcmtcXFwiIEBjbGljaz1cXFwiYWNjZXB0KHBvc3RUb0FjdGlvbilcXFwiIDpkaXNhYmxlZD1cXFwicG9zdFRvQWN0aW9uLnN0YXRlID09IDAgJiYgY29tbWVudCA9PSAnJ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LTRgtCy0LXRgNC00LjRgtGMXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZm9ybT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cXG4gICAgICAgICAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgIDwvdi1kaWFsb2c+XFxuICAgIDwvdi1jb250YWluZXI+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICBuYW1lOiBcXFwiVXNlclBvc3RzXFxcIixcXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGw6IDEsXFxuICAgICAgICAgICAgICAgIHBvc3RzOiBbXSxcXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcXG4gICAgICAgICAgICAgICAgZGlhbG9nUG9zdDogbnVsbCxcXG4gICAgICAgICAgICAgICAgZGVsZXRlX2lkOiAwLFxcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgcG9zdFRvQWN0aW9uOiBudWxsLFxcbiAgICAgICAgICAgICAgICBjb21tZW50RGlhbG9nU2hvdzogZmFsc2UsXFxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6ICcnLFxcbiAgICAgICAgICAgICAgICBjb21tZW50RXJyb3I6ICcnLFxcbiAgICAgICAgICAgICAgICBzdGF0dXNlczoge1xcbiAgICAgICAgICAgICAgICAgICAgMDogJ9Ce0LbQuNC00LDQtdGCINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC10LknLFxcbiAgICAgICAgICAgICAgICAgICAgODogJ9Ce0LbQuNC00LDQtdGCINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjycsXFxuICAgICAgICAgICAgICAgICAgICAzMjogJ9CX0LDQutGA0YvRgtC+JyxcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtb3VudGVkKCkge1xcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICBnZXRQYWdlKCkge1xcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvdXNlci9wb3N0LycsIHtwYXJhbXM6IHtwYWdlOiB0aGlzLnBhZ2UsIHBlcl9wYWdlOiAxMCwgbW9kZTogdGhpcy4kcm91dGUucXVlcnkubW9kZX19KS50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0cyA9IFsuLi5yZXNwb25zZS5kYXRhLmRhdGFdO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sID0gcmVzcG9uc2UuZGF0YS5sYXN0X3BhZ2VcXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlbGV0ZSgpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsZXRlX2lkID4gMClcXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5kZWxldGUoJy91c2VyL3Bvc3QvJyArIHRoaXMuZGVsZXRlX2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVfaWQgPSAwXFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBhY2NlcHQocG9zdCkge1xcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uID0gIHRoaXMucG9zdFRvQWN0aW9uLnN0YXRlID09IDAgPyAnYWNjZXB0JyA6ICdjb25maXJtJ1xcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL3VzZXIvcG9zdC8nICsgcG9zdC5pZCsnLycrYWN0aW9uLCB7Y29tbWVudDogdGhpcy5jb21tZW50fSkudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudCAgPSAnJztcXG4gICAgICAgICAgICAgICAgICAgIHBvc3QuY29tbWVudCA9IHJlc3BvbnNlLmRhdGEuZGF0YS5jb21tZW50O1xcbiAgICAgICAgICAgICAgICAgICAgcG9zdC5zdGF0ZSA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zdGF0ZVxcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxuICAgICAgICAgICAgICAgICAgICBpZiAoZT8ucmVzcG9uc2U/LnN0YXR1cz09PSA0MjIpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRFcnJvciA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnMuY29tbWVudDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RUb0FjdGlvbiA9IHBvc3Q7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RUb0FjdGlvbj0gbnVsbDtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGxpa2UocG9zdCkge1xcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL3VzZXIvcG9zdC8nICsgcG9zdC5pZCsocG9zdC51c2VyX2xpa2UgPyAnL2xpa2UnIDogJy9kaXNsaWtlJykpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIHdhdGNoOiB7XFxuICAgICAgICAgICAgcGFnZSgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkZWxldGVfaWQobnYpIHtcXG4gICAgICAgICAgICAgICAgaWYgKG52ID4gMCkgdGhpcy5kZWxldGUoKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4gICAgLnVzZXItcGhvdG8tbW9kdWxle1xcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICB9XFxuICAgIC51c2VyLXBvc3QtZGVzY3JpcHRpb257XFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIH1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQxYTA4ZTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Vc2VyUG9zdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFl1cml5TWlyb25vdlxcXFxQaHBzdG9ybVByb2plY3RzXFxcXHNrYXN5XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU0MWEwOGUyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU0MWEwOGUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU0MWEwOGUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Vc2VyUG9zdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0MWEwOGUyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU0MWEwOGUyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyUG9zdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY292ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9LFxuICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICBfdm0uJHJvdXRlLnF1ZXJ5Lm1vZGUgIT09IFwibWVcIlxuICAgICAgICAgICAgICA/IFwi0J7QsdGA0LDRidC10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XCJcbiAgICAgICAgICAgICAgOiBcItCS0LDRiNC4INC+0LHRgNCw0YnQtdC90LjRj1wiXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucG9zdHMubGVuZ3RoID4gMFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcFwiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wb3N0cywgZnVuY3Rpb24ocG9zdCwgeSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogeSwgYXR0cnM6IHsgeHMxMjogXCJcIiwgc202OiBcIlwiLCBtZDY6IFwiXCIsIGxnNDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1hLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBlbGV2YXRpb246IFwiMFwiLCBvdXRsaW5lZDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBjcnVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIi0xMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QudXNlcl9saWtlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnVzZXJfbGlrZSA9PSAwID8gMSA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5saWtlcyArPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QudXNlcl9saWtlID09PSAxID8gMSA6IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5saWtlKHBvc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcIm1kaS1oZWFydFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwb3N0Lmxpa2VzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWQgPT09IHBvc3QudXNlcl9pZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlX2lkID0gcG9zdC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLWRlbGV0ZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWQgPT09IHBvc3QudXNlcl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwieWVsbG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdXNlci9wb3N0L1wiICsgcG9zdC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLXBlbmNpbFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PSAxMDI0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnN0YXRlICE9PSA4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvc3RUb0FjdGlvbiA9IHBvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZGktY2hlY2stb3V0bGluZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSAhPSAxMDI0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnN0YXRlID09IDggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID09PSBwb3N0LnVzZXJfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9zdFRvQWN0aW9uID0gcG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1kaS1jaGVjay1vdXRsaW5lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogXCIzNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQntC/0YPQsdC70LjQutC+0LLQsNC90L46IFwiICsgcG9zdC5kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQn9C+0LvRjNC30L7QstCw0YLQtdC70Yw6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBvc3QudXNlcl9pZCA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLQktGLXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBvc3QuYXV0aG9yLmZ1bGxfbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi0KHRgtCw0YLRg9GBOiBcIiArIF92bS5zdGF0dXNlc1twb3N0LnN0YXRlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtdC0yIG1iLTlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdCA9IHBvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhwb3N0LnRpdGxlKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1hLTAgcGEtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2dQb3N0ID0gcG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnBob3Rvcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInVzZXItcGhvdG8tbW9kdWxlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcm91c2VsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHBvc3QucGhvdG9zLCBmdW5jdGlvbihwaG90bywgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidi1jYXJvdXNlbC1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcGhvdG8uZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluLWhlaWd0aFwiOiBcIjMwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtaGVpZ3RoXCI6IFwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ1c2VyLXBvc3QtZGVzY3JpcHRpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY29udGFpbmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MocG9zdC5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubCA+IDFcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHhzLTEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxlbmd0aDogX3ZtLmwsIFwidG90YWwtdmlzaWJsZVwiOiAzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG15LTNcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcItCe0LHRgNCw0YnQtdC90LjQuSDQv9C+0LrQsCDQvdC10YJcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1idG5cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNhdmUtYnRuXCIsXG4gICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwic3VjY2Vzc1wiLCBmYWI6IFwiXCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIucHVzaChcIi91c2VyL3Bvc3QvMFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktcGx1c1wiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhIV92bS5kaWFsb2dQb3N0XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGZ1bGxzY3JlZW46IF92bS4kdnVldGlmeS5icmVha3BvaW50Lm1vYmlsZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2dQb3N0ID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3csXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHgtMCBteC0wIHB0LTAgbXQtMCBjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIndoaXRlICFpbXBvcnRhbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjEwMCUgIWltcG9ydGFudFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXktM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kaWFsb2dQb3N0LnRpdGxlKSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2dQb3N0LnBob3RvcyAmJiBfdm0uZGlhbG9nUG9zdC5waG90b3MubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXktMiBjb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2Fyb3VzZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGlhbG9nUG9zdC5waG90b3MsIGZ1bmN0aW9uKHBob3RvLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInYtY2Fyb3VzZWwtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHBob3RvLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtaGVpZ2h0XCI6IFwiNTAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluLWhlaWdodFwiOiBcIjUwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdC5jb21tZW50XG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi0JrQvtC80LzQtdC90YLQsNGA0LjQuSDQvtGCINCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNC4OiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2dQb3N0LmNvbW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNvbnRhaW5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5kaWFsb2dQb3N0LmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBteS0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQl9Cw0LrRgNGL0YLRjFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgISFfdm0ucG9zdFRvQWN0aW9uXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGZ1bGxzY3JlZW46IF92bS4kdnVldGlmeS5icmVha3BvaW50Lm1vYmlsZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5wb3N0VG9BY3Rpb24gPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucG9zdFRvQWN0aW9uLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5wb3N0VG9BY3Rpb24gPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicG9zdFRvQWN0aW9uXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXIgcHktMSBteS0wIGp1c3RpZnktc3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcItCf0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhci10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4LWdyb3ctMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvc3RUb0FjdGlvbiA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiWFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvc3RUb0FjdGlvbi5zdGF0ZSA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLQstC10LTQuNGC0LUg0LrQvtC80LXQvdGC0LDRgNC40LksINC/0L7Rj9GB0L3Rj9GO0YnQuNC5INCy0YvQv9C+0LvQvdC10L3QuNC1INC+0LHRgNCw0YnQtdC90LjRjy5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwidi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INC/0L7QtNGC0LLQtdGA0LTQuNGC0Ywg0YDQsNGB0YHQvNC+0YLRgNC10L3QuNC1INCy0LDRiNC10LPQviDQvtCx0YDQsNGJ0LXQvdC40Y8/XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmF0dGVtcHRSZXNldC5hcHBseShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3N0VG9BY3Rpb24uc3RhdGUgPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQmtC+0LzQvNC10L3RgtCw0YDQuNC5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZXNcIjogX3ZtLmNvbW1lbnRFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjb21tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29tbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb21tZW50ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29tbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImRhcmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3N0VG9BY3Rpb24uc3RhdGUgPT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbW1lbnQgPT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWNjZXB0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9zdFRvQWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC00YLQstC10YDQtNC40YLRjFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMTQxMWE5ZmFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyUG9zdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyUG9zdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=