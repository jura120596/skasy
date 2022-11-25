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
___CSS_LOADER_EXPORT___.push([module.id, "\n.user-photo-module{\n    height: 300px;\n    max-height: 300px;\n    overflow-y: scroll;\n}\n.user-post-description{\n    height: 300px;\n    max-height: 300px;\n    overflow-y: scroll;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/UserPosts.vue"],"names":[],"mappings":";AAgUA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;AACA","sourcesContent":["<template>\r\n    <v-container class=\"cover\">\r\n        <v-toolbar-title align=\"center\" justify=\"center\" class=\"mb-2\"\r\n                         v-text=\"$route.query.mode !== 'me' ? 'Обращения пользователей' : 'Ваши обращения'\">\r\n        </v-toolbar-title>\r\n        <div v-if=\"posts.length > 0\">\r\n            <v-layout class=\"d-flex flex-row flex-wrap\">\r\n\r\n                <v-flex\r\n                        xs12\r\n                        sm6\r\n                        md6\r\n                        lg4\r\n                        v-for=\"(post, y) in posts\" :key=\"y\">\r\n\r\n                    <v-card\r\n                            elevation=\"0\"\r\n                            outlined\r\n                            style=\"position: relative;\"\r\n                            class=\"ma-1\"\r\n                    >\r\n                        <div\r\n                             class=\"d-flex crud\" style=\"position:absolute; right: 5px; top: -10px; font-size: 10px\">\r\n\r\n                            <v-btn\r\n                                    color=\"primary\"\r\n                                    fab\r\n                                    small\r\n                                    class=\"mr-3\"\r\n                                    @click=\"\r\n                                        post.user_like = post.user_like == 0 ? 1: 0\r\n                                        post.likes += post.user_like === 1 ? 1 : -1\r\n                                        like(post)\r\n                                        \"\r\n                                    dark>\r\n                                <v-icon>mdi-heart</v-icon>\r\n                            </v-btn>\r\n                            <v-btn\r\n                                    color=\"primary\"\r\n                                    fab\r\n                                    small\r\n                                    class=\"mr-3\"\r\n                                    dark>\r\n                                {{post.likes}}\r\n                            </v-btn>\r\n                            <v-btn v-if=\"$store.state.auth.user.id === post.user_id || $store.state.auth.user.role ===1024\"\r\n                                   color=\"red\"\r\n                                   fab\r\n                                   small\r\n                                   @click=\"delete_id = post.id\"\r\n                                   class=\"mr-3\"\r\n                                   dark>\r\n                                <v-icon>mdi-delete</v-icon>\r\n                            </v-btn>\r\n                            <v-btn v-if=\"$store.state.auth.user.id === post.user_id\"\r\n                                   color=\"yellow\"\r\n                                    fab\r\n                                    small\r\n                                    class=\"mr-3\"\r\n                                    @click=\"$router.push('/user/post/'+post.id)\"\r\n                                    dark>\r\n                                <v-icon>mdi-pencil</v-icon>\r\n                            </v-btn>\r\n                            <v-btn v-if=\"$store.state.auth.user.role == 1024 && post.state !== 8\"\r\n                                   color=\"primary\"\r\n                                   fab\r\n                                   small\r\n                                   @click=\"postToAction = post\"\r\n                                   dark>\r\n                                <v-icon>mdi-check-outline</v-icon>\r\n                            </v-btn>\r\n                            <v-btn v-if=\"$store.state.auth.user.role != 1024 && post.state == 8 && $store.state.auth.user.id === post.user_id\"\r\n                                   color=\"success\"\r\n                                   fab\r\n                                   small\r\n                                   @click=\"postToAction = post\"\r\n                                   dark>\r\n                                <v-icon>mdi-check-outline</v-icon>\r\n                            </v-btn>\r\n                        </div>\r\n\r\n                        <v-container style=\"position:relative\">\r\n                            <div v-text=\"'Опубликовано: '+post.date\"\r\n                                 style=\"position:absolute; left: 5px; bottom: 35px; font-size: 10px\"></div>\r\n                            <div v-text=\"'Пользователь: '+(post.user_id == $store.state.auth.user.id ? 'Вы' : post.author.full_name)\"\r\n                                 style=\"position:absolute; left: 5px; bottom: 20px; font-size: 10px\"></div>\r\n                            <div v-text=\"'Статус: '+(statuses[post.state])\"\r\n                                 style=\"position:absolute; left: 5px; bottom: 5px; font-size: 10px\"></div>\r\n                            <v-toolbar-title\r\n                                class=\"text-center mt-2 mb-9\"\r\n                                @click=\"\r\n                                    dialogPost = post\r\n                                    show =  true\r\n                            \">{{post.title}}</v-toolbar-title>\r\n                            <v-spacer></v-spacer>\r\n                        </v-container>\r\n\r\n                        <v-container class=\"ma-0 pa-0\"\r\n                             @click=\"\r\n                                dialogPost = post\r\n                                show =  true\r\n                        \">\r\n                            <div v-if=\"post.photos.length\" class=\"user-photo-module\">\r\n                                <v-carousel>\r\n                                    <v-carousel-item\r\n                                            v-for=\"(photo, i) in post.photos\"\r\n                                            :key=\"i\"\r\n                                            :src=\"photo.file\"\r\n                                            contain\r\n                                            min-heigth=\"300px\"\r\n                                            max-heigth=\"300px\"\r\n                                    >\r\n                                    </v-carousel-item>\r\n                                </v-carousel>\r\n                            </div>\r\n                            <div v-else class=\"user-post-description\">\r\n                                <v-container v-html=\"post.description\"></v-container>\r\n                            </div>\r\n                        </v-container>\r\n                    </v-card>\r\n                </v-flex>\r\n            </v-layout>\r\n            <div class=\"text-center xs-12\" v-if=\"l > 1\">\r\n                <v-pagination\r\n                        :length=\"l\"\r\n                        :total-visible=\"3\"\r\n                        v-model=\"page\"\r\n                ></v-pagination>\r\n            </div>\r\n        </div>\r\n        <div v-else>\r\n            <div class=\"text-center my-3\">Обращений пока нет</div>\r\n        </div>\r\n\r\n        <v-btn class=\"save-btn\"\r\n               color=\"success\"\r\n               fab\r\n               @click=\"$router.push('/user/post/0')\"\r\n               dark>\r\n            <v-icon>mdi-plus</v-icon>\r\n        </v-btn>\r\n        <v-dialog\r\n                v-if=\"!!dialogPost\"\r\n                v-model=\"show\"\r\n                @close=\"\r\n                    show = false\r\n                    dialogPost = null\r\n                \"\r\n                :fullscreen=\"$vuetify.breakpoint.mobile\"\r\n        >\r\n            <template slot:default>\r\n                <v-container class=\"px-0 mx-0 pt-0 mt-0 cover\" style=\"background-color: white !important; max-width: 100% !important;\">\r\n                    <v-toolbar-title class=\"text-center my-3\">{{dialogPost.title}}</v-toolbar-title>\r\n\r\n                    <div v-if=\"dialogPost.photos && dialogPost.photos.length > 0\" class=\"my-2 container\">\r\n                        <v-carousel>\r\n                            <v-carousel-item\r\n                                    v-for=\"(photo, i) in dialogPost.photos\"\r\n                                    :key=\"i\"\r\n                                    :src=\"photo.file\"\r\n                                    contain\r\n                                    max-height=\"500px\"\r\n                                    min-height=\"500px\"\r\n                            >\r\n                            </v-carousel-item>\r\n                        </v-carousel>\r\n                    </div>\r\n                    <div v-if=\"dialogPost.comment\" v-text=\"'Комментарий от администрации: ' + dialogPost.comment\"\r\n                         class=\"text-center\"></div>\r\n                    <v-container v-html=\"dialogPost.description\"></v-container>\r\n\r\n                    <v-toolbar-title class=\"text-center my-3\">\r\n                        <v-btn color=\"primary\" @click=\"\r\n                            show = false\r\n                            dialogPost = null\r\n                        \">Закрыть\r\n                        </v-btn>\r\n                    </v-toolbar-title>\r\n\r\n                </v-container>\r\n            </template>\r\n        </v-dialog>\r\n        <v-dialog\r\n                v-if=\"!!postToAction\"\r\n                v-model=\"postToAction\"\r\n                @close=\"\r\n                    postToAction = null\r\n                \"\r\n                :fullscreen=\"$vuetify.breakpoint.mobile\"\r\n        >\r\n            <template slot:default>\r\n                <v-card>\r\n\r\n                    <v-toolbar  class=\"container py-1 my-0 justify-space-between\">\r\n                        <v-toolbar-title>\r\n                            <span class=\"headline\">Подтверждение</span>\r\n                        </v-toolbar-title>\r\n                        <v-spacer/>\r\n                        <v-toolbar-title><v-icon\r\n                                class=\"flex-grow-0\"\r\n                                text\r\n                                @click=\"postToAction = null\">X</v-icon>\r\n                        </v-toolbar-title>\r\n                    </v-toolbar>\r\n                    <v-card-text>\r\n                        <v-container>\r\n                            <v-col>\r\n\r\n                                <v-card-text v-if=\"postToAction.state === 0\">\r\n                                    Введите коментарий, поясняющий выполнение обращения.\r\n                                </v-card-text>\r\n                                <v-card-text v-else>\r\n                                    Вы действительно хотите подтвердить рассмотрение вашего обращения?\r\n                                </v-card-text>\r\n                                <v-form @keyup.native.enter=\"attemptReset\">\r\n                                    <v-text-field v-if=\"postToAction.state === 0\"\r\n                                            v-model=\"comment\"\r\n                                            label=\"Комментарий\"\r\n                                            :error-messages=\"commentError\"\r\n                                            name=\"comment\"\r\n                                            type=\"text\"\r\n                                            required\r\n                                    />\r\n                                    <v-card\r\n                                            class=\"d-flex justify-center align-center\"\r\n                                            flat\r\n                                            height=\"auto\"\r\n                                            tile\r\n                                    >\r\n                                        <v-btn color=\"dark\" @click=\"accept(postToAction)\" :disabled=\"postToAction.state == 0 && comment == ''\">\r\n                                            Подтвердить\r\n                                        </v-btn>\r\n                                    </v-card>\r\n                                </v-form>\r\n                            </v-col>\r\n                        </v-container>\r\n                    </v-card-text>\r\n                </v-card>\r\n            </template>\r\n        </v-dialog>\r\n    </v-container>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        name: \"UserPosts\",\r\n        data: (vm) => {\r\n            return {\r\n                l: 1,\r\n                posts: [],\r\n                page: 1,\r\n                dialogPost: null,\r\n                delete_id: 0,\r\n                show: false,\r\n                postToAction: null,\r\n                commentDialogShow: false,\r\n                comment: '',\r\n                commentError: '',\r\n                statuses: {\r\n                    0: 'Ожидает подтверждения администрацией',\r\n                    8: 'Ожидает подтверждения пользователя',\r\n                    32: 'Закрыто',\r\n                }\r\n            }\r\n        },\r\n        mounted() {\r\n            this.getPage();\r\n        },\r\n        methods: {\r\n            getPage() {\r\n                window.axios.get('/user/post/', {params: {page: this.page, per_page: 10, mode: this.$route.query.mode}}).then((response) => {\r\n                    this.posts = [...response.data.data];\r\n                    this.l = response.data.last_page\r\n                }).catch((e) => {\r\n                    console.log(e);\r\n                });\r\n            },\r\n            delete() {\r\n                if (this.delete_id > 0)\r\n                    window.axios.delete('/user/post/' + this.delete_id).then((response) => {\r\n                        this.getPage()\r\n                        this.delete_id = 0\r\n                    }).catch((e) => {\r\n                        console.log(e);\r\n                    });\r\n            },\r\n            accept(post) {\r\n                let action =  this.postToAction.state == 0 ? 'accept' : 'confirm'\r\n                window.axios.post('/user/post/' + post.id+'/'+action, {comment: this.comment}).then((response) => {\r\n                    this.comment  = '';\r\n                    post.comment = response.data.data.comment;\r\n                    post.state = response.data.data.state\r\n                }).catch((e) => {\r\n                    console.log(e);\r\n                    if (e?.response?.status=== 422) {\r\n                        this.commentError = e.response.data.errors.comment;\r\n                        this.postToAction = post;\r\n                    }\r\n                });\r\n                this.postToAction= null;\r\n            },\r\n            like(post) {\r\n                window.axios.post('/user/post/' + post.id+(post.user_like ? '/like' : '/dislike')).then((response) => {\r\n                }).catch((e) => {\r\n                    console.log(e);\r\n                });\r\n            }\r\n        },\r\n        watch: {\r\n            page() {\r\n                this.getPage();\r\n            },\r\n            delete_id(nv) {\r\n                if (nv > 0) this.delete()\r\n            }\r\n        }\r\n    }\r\n</script>\r\n\r\n<style>\r\n    .user-photo-module{\r\n        height: 300px;\r\n        max-height: 300px;\r\n        overflow-y: scroll;\r\n    }\r\n    .user-post-description{\r\n        height: 300px;\r\n        max-height: 300px;\r\n        overflow-y: scroll;\r\n    }\r\n</style>"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWU/ZDJkZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RzLnZ1ZT85ZDRiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Vc2VyUG9zdHMudnVlPzczODYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWU/MzkyZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb1BBO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBQ0EsVUFEQTtBQUVBLGVBRkE7QUFHQSxhQUhBO0FBSUEsc0JBSkE7QUFLQSxrQkFMQTtBQU1BLGlCQU5BO0FBT0Esd0JBUEE7QUFRQSw4QkFSQTtBQVNBLGlCQVRBO0FBVUEsc0JBVkE7QUFXQTtBQUNBLGlEQURBO0FBRUEsK0NBRkE7QUFHQTtBQUhBO0FBWEE7QUFpQkEsR0FwQkE7QUFxQkEsU0FyQkEscUJBcUJBO0FBQ0E7QUFDQSxHQXZCQTtBQXdCQTtBQUNBLFdBREEscUJBQ0E7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDenBCQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxtckJBQTRWO0FBQ2xYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwySkFBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJqcy9jaHVua3MvcmVzb3VyY2VzX2pzX3BhZ2VzX1VzZXJQb3N0c192dWUwMjQ3ZWZlNDJjMmQzOTUyZmY3Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cImNvdmVyXCI+XHJcbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVwiJHJvdXRlLnF1ZXJ5Lm1vZGUgIT09ICdtZScgPyAn0J7QsdGA0LDRidC10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5JyA6ICfQktCw0YjQuCDQvtCx0YDQsNGJ0LXQvdC40Y8nXCI+XHJcbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwicG9zdHMubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgICA8di1sYXlvdXQgY2xhc3M9XCJkLWZsZXggZmxleC1yb3cgZmxleC13cmFwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHYtZmxleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4czEyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGc0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHBvc3QsIHkpIGluIHBvc3RzXCIgOmtleT1cInlcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWEtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXggY3J1ZFwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OiA1cHg7IHRvcDogLTEwcHg7IGZvbnQtc2l6ZTogMTBweFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnVzZXJfbGlrZSA9IHBvc3QudXNlcl9saWtlID09IDAgPyAxOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Lmxpa2VzICs9IHBvc3QudXNlcl9saWtlID09PSAxID8gMSA6IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlKHBvc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWhlYXJ0PC92LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cG9zdC5saWtlc319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID09PSBwb3N0LnVzZXJfaWQgfHwgJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PTEwMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRlbGV0ZV9pZCA9IHBvc3QuaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1kZWxldGU8L3YtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gdi1pZj1cIiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWQgPT09IHBvc3QudXNlcl9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ5ZWxsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvdXNlci9wb3N0LycrcG9zdC5pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLXBlbmNpbDwvdi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09IDEwMjQgJiYgcG9zdC5zdGF0ZSAhPT0gOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInBvc3RUb0FjdGlvbiA9IHBvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktY2hlY2stb3V0bGluZTwvdi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlICE9IDEwMjQgJiYgcG9zdC5zdGF0ZSA9PSA4ICYmICRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWQgPT09IHBvc3QudXNlcl9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInBvc3RUb0FjdGlvbiA9IHBvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktY2hlY2stb3V0bGluZTwvdi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LXRleHQ9XCIn0J7Qv9GD0LHQu9C40LrQvtCy0LDQvdC+OiAnK3Bvc3QuZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6IDVweDsgYm90dG9tOiAzNXB4OyBmb250LXNpemU6IDEwcHhcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi10ZXh0PVwiJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjDogJysocG9zdC51c2VyX2lkID09ICRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWQgPyAn0JLRiycgOiBwb3N0LmF1dGhvci5mdWxsX25hbWUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDogNXB4OyBib3R0b206IDIwcHg7IGZvbnQtc2l6ZTogMTBweFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LXRleHQ9XCIn0KHRgtCw0YLRg9GBOiAnKyhzdGF0dXNlc1twb3N0LnN0YXRlXSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OiA1cHg7IGJvdHRvbTogNXB4OyBmb250LXNpemU6IDEwcHhcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtY2VudGVyIG10LTIgbWItOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBwb3N0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgPSAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI+e3twb3N0LnRpdGxlfX08L3YtdG9vbGJhci10aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGNsYXNzPVwibWEtMCBwYS0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gcG9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgPSAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInBvc3QucGhvdG9zLmxlbmd0aFwiIGNsYXNzPVwidXNlci1waG90by1tb2R1bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWwtaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHBob3RvLCBpKSBpbiBwb3N0LnBob3Rvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJwaG90by5maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWd0aD1cIjMwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ3RoPVwiMzAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbC1pdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJ1c2VyLXBvc3QtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgdi1odG1sPVwicG9zdC5kZXNjcmlwdGlvblwiPjwvdi1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cclxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxyXG4gICAgICAgICAgICA8L3YtbGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgeHMtMTJcIiB2LWlmPVwibCA+IDFcIj5cclxuICAgICAgICAgICAgICAgIDx2LXBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cImxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dG90YWwtdmlzaWJsZT1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICA+PC92LXBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1lbHNlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXktM1wiPtCe0LHRgNCw0YnQtdC90LjQuSDQv9C+0LrQsCDQvdC10YI8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHYtYnRuIGNsYXNzPVwic2F2ZS1idG5cIlxyXG4gICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvdXNlci9wb3N0LzAnKVwiXHJcbiAgICAgICAgICAgICAgIGRhcms+XHJcbiAgICAgICAgICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cclxuICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgIDx2LWRpYWxvZ1xyXG4gICAgICAgICAgICAgICAgdi1pZj1cIiEhZGlhbG9nUG9zdFwiXHJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2hvd1wiXHJcbiAgICAgICAgICAgICAgICBAY2xvc2U9XCJcclxuICAgICAgICAgICAgICAgICAgICBzaG93ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q6ZGVmYXVsdD5cclxuICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cInB4LTAgbXgtMCBwdC0wIG10LTAgY292ZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7IG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS0zXCI+e3tkaWFsb2dQb3N0LnRpdGxlfX08L3YtdG9vbGJhci10aXRsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZGlhbG9nUG9zdC5waG90b3MgJiYgZGlhbG9nUG9zdC5waG90b3MubGVuZ3RoID4gMFwiIGNsYXNzPVwibXktMiBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHBob3RvLCBpKSBpbiBkaWFsb2dQb3N0LnBob3Rvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cInBob3RvLmZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ9XCI1MDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ9XCI1MDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImRpYWxvZ1Bvc3QuY29tbWVudFwiIHYtdGV4dD1cIifQmtC+0LzQvNC10L3RgtCw0YDQuNC5INC+0YIg0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40Lg6ICcgKyBkaWFsb2dQb3N0LmNvbW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciB2LWh0bWw9XCJkaWFsb2dQb3N0LmRlc2NyaXB0aW9uXCI+PC92LWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIj7Ql9Cw0LrRgNGL0YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC92LWRpYWxvZz5cclxuICAgICAgICA8di1kaWFsb2dcclxuICAgICAgICAgICAgICAgIHYtaWY9XCIhIXBvc3RUb0FjdGlvblwiXHJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwicG9zdFRvQWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIEBjbG9zZT1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RUb0FjdGlvbiA9IG51bGxcclxuICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICA6ZnVsbHNjcmVlbj1cIiR2dWV0aWZ5LmJyZWFrcG9pbnQubW9iaWxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90OmRlZmF1bHQ+XHJcbiAgICAgICAgICAgICAgICA8di1jYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyICBjbGFzcz1cImNvbnRhaW5lciBweS0xIG15LTAganVzdGlmeS1zcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+0J/QvtC00YLQstC10YDQttC00LXQvdC40LU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlPjx2LWljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXgtZ3Jvdy0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicG9zdFRvQWN0aW9uID0gbnVsbFwiPlg8L3YtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92LXRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jb2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dCB2LWlmPVwicG9zdFRvQWN0aW9uLnN0YXRlID09PSAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INC60L7QvNC10L3RgtCw0YDQuNC5LCDQv9C+0Y/RgdC90Y/RjtGJ0LjQuSDQstGL0L/QvtC70L3QtdC90LjQtSDQvtCx0YDQsNGJ0LXQvdC40Y8uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDQv9C+0LTRgtCy0LXRgNC00LjRgtGMINGA0LDRgdGB0LzQvtGC0YDQtdC90LjQtSDQstCw0YjQtdCz0L4g0L7QsdGA0LDRidC10L3QuNGPP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZm9ybSBAa2V5dXAubmF0aXZlLmVudGVyPVwiYXR0ZW1wdFJlc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgdi1pZj1cInBvc3RUb0FjdGlvbi5zdGF0ZSA9PT0gMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvbW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0JrQvtC80LzQtdC90YLQsNGA0LjQuVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwiY29tbWVudEVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29tbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImRhcmtcIiBAY2xpY2s9XCJhY2NlcHQocG9zdFRvQWN0aW9uKVwiIDpkaXNhYmxlZD1cInBvc3RUb0FjdGlvbi5zdGF0ZSA9PSAwICYmIGNvbW1lbnQgPT0gJydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LTRgtCy0LXRgNC00LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvdi1kaWFsb2c+XHJcbiAgICA8L3YtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIlVzZXJQb3N0c1wiLFxyXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbDogMSxcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBbXSxcclxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgICAgICBkaWFsb2dQb3N0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlX2lkOiAwLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwb3N0VG9BY3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50RGlhbG9nU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50OiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRFcnJvcjogJycsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIDA6ICfQntC20LjQtNCw0LXRgiDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQtdC5JyxcclxuICAgICAgICAgICAgICAgICAgICA4OiAn0J7QttC40LTQsNC10YIg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPJyxcclxuICAgICAgICAgICAgICAgICAgICAzMjogJ9CX0LDQutGA0YvRgtC+JyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGdldFBhZ2UoKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvdXNlci9wb3N0LycsIHtwYXJhbXM6IHtwYWdlOiB0aGlzLnBhZ2UsIHBlcl9wYWdlOiAxMCwgbW9kZTogdGhpcy4kcm91dGUucXVlcnkubW9kZX19KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdHMgPSBbLi4ucmVzcG9uc2UuZGF0YS5kYXRhXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmwgPSByZXNwb25zZS5kYXRhLmxhc3RfcGFnZVxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWxldGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWxldGVfaWQgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5kZWxldGUoJy91c2VyL3Bvc3QvJyArIHRoaXMuZGVsZXRlX2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZV9pZCA9IDBcclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWNjZXB0KHBvc3QpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb24gPSAgdGhpcy5wb3N0VG9BY3Rpb24uc3RhdGUgPT0gMCA/ICdhY2NlcHQnIDogJ2NvbmZpcm0nXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL3VzZXIvcG9zdC8nICsgcG9zdC5pZCsnLycrYWN0aW9uLCB7Y29tbWVudDogdGhpcy5jb21tZW50fSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnQgID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdC5jb21tZW50ID0gcmVzcG9uc2UuZGF0YS5kYXRhLmNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdC5zdGF0ZSA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zdGF0ZVxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZT8ucmVzcG9uc2U/LnN0YXR1cz09PSA0MjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50RXJyb3IgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzLmNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdFRvQWN0aW9uID0gcG9zdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdFRvQWN0aW9uPSBudWxsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWtlKHBvc3QpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvdXNlci9wb3N0LycgKyBwb3N0LmlkKyhwb3N0LnVzZXJfbGlrZSA/ICcvbGlrZScgOiAnL2Rpc2xpa2UnKSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgcGFnZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWxldGVfaWQobnYpIHtcclxuICAgICAgICAgICAgICAgIGlmIChudiA+IDApIHRoaXMuZGVsZXRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAudXNlci1waG90by1tb2R1bGV7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICB9XHJcbiAgICAudXNlci1wb3N0LWRlc2NyaXB0aW9ue1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgfVxyXG48L3N0eWxlPiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnVzZXItcGhvdG8tbW9kdWxle1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG4udXNlci1wb3N0LWRlc2NyaXB0aW9ue1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvc3RzLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ1VBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7QUFDQTtBQUNBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cXFwiY292ZXJcXFwiPlxcclxcbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cXFwiY2VudGVyXFxcIiBqdXN0aWZ5PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJtYi0yXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LXRleHQ9XFxcIiRyb3V0ZS5xdWVyeS5tb2RlICE9PSAnbWUnID8gJ9Ce0LHRgNCw0YnQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuScgOiAn0JLQsNGI0Lgg0L7QsdGA0LDRidC10L3QuNGPJ1xcXCI+XFxyXFxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cXHJcXG4gICAgICAgIDxkaXYgdi1pZj1cXFwicG9zdHMubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgICAgICAgICAgPHYtbGF5b3V0IGNsYXNzPVxcXCJkLWZsZXggZmxleC1yb3cgZmxleC13cmFwXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPHYtZmxleFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHhzMTJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTZcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBtZDZcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZzRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKHBvc3QsIHkpIGluIHBvc3RzXFxcIiA6a2V5PVxcXCJ5XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uPVxcXCIwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwicG9zaXRpb246IHJlbGF0aXZlO1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1hLTFcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImQtZmxleCBjcnVkXFxcIiBzdHlsZT1cXFwicG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OiA1cHg7IHRvcDogLTEwcHg7IGZvbnQtc2l6ZTogMTBweFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1yLTNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC51c2VyX2xpa2UgPSBwb3N0LnVzZXJfbGlrZSA9PSAwID8gMTogMFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Lmxpa2VzICs9IHBvc3QudXNlcl9saWtlID09PSAxID8gMSA6IC0xXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2UocG9zdClcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1oZWFydDwvdi1pY29uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicHJpbWFyeVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtci0zXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Bvc3QubGlrZXN9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gdi1pZj1cXFwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5pZCA9PT0gcG9zdC51c2VyX2lkIHx8ICRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0xMDI0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInJlZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZGVsZXRlX2lkID0gcG9zdC5pZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtci0zXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWRlbGV0ZTwvdi1pY29uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gdi1pZj1cXFwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5pZCA9PT0gcG9zdC51c2VyX2lkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInllbGxvd1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtci0zXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJHJvdXRlci5wdXNoKCcvdXNlci9wb3N0LycrcG9zdC5pZClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLXBlbmNpbDwvdi1pY29uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gdi1pZj1cXFwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09IDEwMjQgJiYgcG9zdC5zdGF0ZSAhPT0gOFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJwb3N0VG9BY3Rpb24gPSBwb3N0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWNoZWNrLW91dGxpbmU8L3YtaWNvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIHYtaWY9XFxcIiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSAhPSAxMDI0ICYmIHBvc3Quc3RhdGUgPT0gOCAmJiAkc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID09PSBwb3N0LnVzZXJfaWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwic3VjY2Vzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwicG9zdFRvQWN0aW9uID0gcG9zdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1jaGVjay1vdXRsaW5lPC92LWljb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIHN0eWxlPVxcXCJwb3NpdGlvbjpyZWxhdGl2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi10ZXh0PVxcXCIn0J7Qv9GD0LHQu9C40LrQvtCy0LDQvdC+OiAnK3Bvc3QuZGF0ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwicG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6IDVweDsgYm90dG9tOiAzNXB4OyBmb250LXNpemU6IDEwcHhcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtdGV4dD1cXFwiJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjDogJysocG9zdC51c2VyX2lkID09ICRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWQgPyAn0JLRiycgOiBwb3N0LmF1dGhvci5mdWxsX25hbWUpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDogNXB4OyBib3R0b206IDIwcHg7IGZvbnQtc2l6ZTogMTBweFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi10ZXh0PVxcXCIn0KHRgtCw0YLRg9GBOiAnKyhzdGF0dXNlc1twb3N0LnN0YXRlXSlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcInBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OiA1cHg7IGJvdHRvbTogNXB4OyBmb250LXNpemU6IDEwcHhcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXIgbXQtMiBtYi05XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dQb3N0ID0gcG9zdFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgPSAgdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiPnt7cG9zdC50aXRsZX19PC92LXRvb2xiYXItdGl0bGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGNsYXNzPVxcXCJtYS0wIHBhLTBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IHBvc3RcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgPSAgdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwicG9zdC5waG90b3MubGVuZ3RoXFxcIiBjbGFzcz1cXFwidXNlci1waG90by1tb2R1bGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2Fyb3VzZWwtaXRlbVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihwaG90bywgaSkgaW4gcG9zdC5waG90b3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cXFwicGhvdG8uZmlsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlndGg9XFxcIjMwMHB4XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWd0aD1cXFwiMzAwcHhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcm91c2VsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XFxcInVzZXItcG9zdC1kZXNjcmlwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgdi1odG1sPVxcXCJwb3N0LmRlc2NyaXB0aW9uXFxcIj48L3YtY29udGFpbmVyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcclxcbiAgICAgICAgICAgIDwvdi1sYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgeHMtMTJcXFwiIHYtaWY9XFxcImwgPiAxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtcGFnaW5hdGlvblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XFxcImxcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgOnRvdGFsLXZpc2libGU9XFxcIjNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicGFnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgPjwvdi1wYWdpbmF0aW9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IHYtZWxzZT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBteS0zXFxcIj7QntCx0YDQsNGJ0LXQvdC40Lkg0L/QvtC60LAg0L3QtdGCPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cXFwic2F2ZS1idG5cXFwiXFxyXFxuICAgICAgICAgICAgICAgY29sb3I9XFxcInN1Y2Nlc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgZmFiXFxyXFxuICAgICAgICAgICAgICAgQGNsaWNrPVxcXCIkcm91dGVyLnB1c2goJy91c2VyL3Bvc3QvMCcpXFxcIlxcclxcbiAgICAgICAgICAgICAgIGRhcms+XFxyXFxuICAgICAgICAgICAgPHYtaWNvbj5tZGktcGx1czwvdi1pY29uPlxcclxcbiAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgIDx2LWRpYWxvZ1xcclxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCIhIWRpYWxvZ1Bvc3RcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInNob3dcXFwiXFxyXFxuICAgICAgICAgICAgICAgIEBjbG9zZT1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBzaG93ID0gZmFsc2VcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBudWxsXFxyXFxuICAgICAgICAgICAgICAgIFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgOmZ1bGxzY3JlZW49XFxcIiR2dWV0aWZ5LmJyZWFrcG9pbnQubW9iaWxlXFxcIlxcclxcbiAgICAgICAgPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90OmRlZmF1bHQ+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cXFwicHgtMCBteC0wIHB0LTAgbXQtMCBjb3ZlclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7IG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBteS0zXFxcIj57e2RpYWxvZ1Bvc3QudGl0bGV9fTwvdi10b29sYmFyLXRpdGxlPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJkaWFsb2dQb3N0LnBob3RvcyAmJiBkaWFsb2dQb3N0LnBob3Rvcy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwibXktMiBjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihwaG90bywgaSkgaW4gZGlhbG9nUG9zdC5waG90b3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVxcXCJwaG90by5maWxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0PVxcXCI1MDBweFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0PVxcXCI1MDBweFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZGlhbG9nUG9zdC5jb21tZW50XFxcIiB2LXRleHQ9XFxcIifQmtC+0LzQvNC10L3RgtCw0YDQuNC5INC+0YIg0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40Lg6ICcgKyBkaWFsb2dQb3N0LmNvbW1lbnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8di1jb250YWluZXIgdi1odG1sPVxcXCJkaWFsb2dQb3N0LmRlc2NyaXB0aW9uXFxcIj48L3YtY29udGFpbmVyPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZSBjbGFzcz1cXFwidGV4dC1jZW50ZXIgbXktM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBAY2xpY2s9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gZmFsc2VcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IG51bGxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiPtCX0LDQutGA0YvRgtGMXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8L3YtZGlhbG9nPlxcclxcbiAgICAgICAgPHYtZGlhbG9nXFxyXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcIiEhcG9zdFRvQWN0aW9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJwb3N0VG9BY3Rpb25cXFwiXFxyXFxuICAgICAgICAgICAgICAgIEBjbG9zZT1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBwb3N0VG9BY3Rpb24gPSBudWxsXFxyXFxuICAgICAgICAgICAgICAgIFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgOmZ1bGxzY3JlZW49XFxcIiR2dWV0aWZ5LmJyZWFrcG9pbnQubW9iaWxlXFxcIlxcclxcbiAgICAgICAgPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90OmRlZmF1bHQ+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWNhcmQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyICBjbGFzcz1cXFwiY29udGFpbmVyIHB5LTEgbXktMCBqdXN0aWZ5LXNwYWNlLWJldHdlZW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkbGluZVxcXCI+0J/QvtC00YLQstC10YDQttC00LXQvdC40LU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlPjx2LWljb25cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmbGV4LWdyb3ctMFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwicG9zdFRvQWN0aW9uID0gbnVsbFxcXCI+WDwvdi1pY29uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC92LXRvb2xiYXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jb2w+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQgdi1pZj1cXFwicG9zdFRvQWN0aW9uLnN0YXRlID09PSAwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDQutC+0LzQtdC90YLQsNGA0LjQuSwg0L/QvtGP0YHQvdGP0Y7RidC40Lkg0LLRi9C/0L7Qu9C90LXQvdC40LUg0L7QsdGA0LDRidC10L3QuNGPLlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dCB2LWVsc2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0L/QvtC00YLQstC10YDQtNC40YLRjCDRgNCw0YHRgdC80L7RgtGA0LXQvdC40LUg0LLQsNGI0LXQs9C+INC+0LHRgNCw0YnQtdC90LjRjz9cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mb3JtIEBrZXl1cC5uYXRpdmUuZW50ZXI9XFxcImF0dGVtcHRSZXNldFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCB2LWlmPVxcXCJwb3N0VG9BY3Rpb24uc3RhdGUgPT09IDBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJjb21tZW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcItCa0L7QvNC80LXQvdGC0LDRgNC40LlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XFxcImNvbW1lbnRFcnJvclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImNvbW1lbnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVxcXCJhdXRvXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJkYXJrXFxcIiBAY2xpY2s9XFxcImFjY2VwdChwb3N0VG9BY3Rpb24pXFxcIiA6ZGlzYWJsZWQ9XFxcInBvc3RUb0FjdGlvbi5zdGF0ZSA9PSAwICYmIGNvbW1lbnQgPT0gJydcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC00YLQstC10YDQtNC40YLRjFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZvcm0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8L3YtZGlhbG9nPlxcclxcbiAgICA8L3YtY29udGFpbmVyPlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICAgICAgbmFtZTogXFxcIlVzZXJQb3N0c1xcXCIsXFxyXFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICBsOiAxLFxcclxcbiAgICAgICAgICAgICAgICBwb3N0czogW10sXFxyXFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXFxyXFxuICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3Q6IG51bGwsXFxyXFxuICAgICAgICAgICAgICAgIGRlbGV0ZV9pZDogMCxcXHJcXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXFxyXFxuICAgICAgICAgICAgICAgIHBvc3RUb0FjdGlvbjogbnVsbCxcXHJcXG4gICAgICAgICAgICAgICAgY29tbWVudERpYWxvZ1Nob3c6IGZhbHNlLFxcclxcbiAgICAgICAgICAgICAgICBjb21tZW50OiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgY29tbWVudEVycm9yOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgc3RhdHVzZXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIDA6ICfQntC20LjQtNCw0LXRgiDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQtdC5JyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIDg6ICfQntC20LjQtNCw0LXRgiDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8nLFxcclxcbiAgICAgICAgICAgICAgICAgICAgMzI6ICfQl9Cw0LrRgNGL0YLQvicsXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbW91bnRlZCgpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgZ2V0UGFnZSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL3VzZXIvcG9zdC8nLCB7cGFyYW1zOiB7cGFnZTogdGhpcy5wYWdlLCBwZXJfcGFnZTogMTAsIG1vZGU6IHRoaXMuJHJvdXRlLnF1ZXJ5Lm1vZGV9fSkudGhlbigocmVzcG9uc2UpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdHMgPSBbLi4ucmVzcG9uc2UuZGF0YS5kYXRhXTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubCA9IHJlc3BvbnNlLmRhdGEubGFzdF9wYWdlXFxyXFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXHJcXG4gICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBkZWxldGUoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlbGV0ZV9pZCA+IDApXFxyXFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZGVsZXRlKCcvdXNlci9wb3N0LycgKyB0aGlzLmRlbGV0ZV9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlX2lkID0gMFxcclxcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgYWNjZXB0KHBvc3QpIHtcXHJcXG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbiA9ICB0aGlzLnBvc3RUb0FjdGlvbi5zdGF0ZSA9PSAwID8gJ2FjY2VwdCcgOiAnY29uZmlybSdcXHJcXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy91c2VyL3Bvc3QvJyArIHBvc3QuaWQrJy8nK2FjdGlvbiwge2NvbW1lbnQ6IHRoaXMuY29tbWVudH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnQgID0gJyc7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwb3N0LmNvbW1lbnQgPSByZXNwb25zZS5kYXRhLmRhdGEuY29tbWVudDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBvc3Quc3RhdGUgPSByZXNwb25zZS5kYXRhLmRhdGEuc3RhdGVcXHJcXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGU/LnJlc3BvbnNlPy5zdGF0dXM9PT0gNDIyKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50RXJyb3IgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzLmNvbW1lbnQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0VG9BY3Rpb24gPSBwb3N0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0VG9BY3Rpb249IG51bGw7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBsaWtlKHBvc3QpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy91c2VyL3Bvc3QvJyArIHBvc3QuaWQrKHBvc3QudXNlcl9saWtlID8gJy9saWtlJyA6ICcvZGlzbGlrZScpKS50aGVuKChyZXNwb25zZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB3YXRjaDoge1xcclxcbiAgICAgICAgICAgIHBhZ2UoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZGVsZXRlX2lkKG52KSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmIChudiA+IDApIHRoaXMuZGVsZXRlKClcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuICAgIC51c2VyLXBob3RvLW1vZHVsZXtcXHJcXG4gICAgICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgfVxcclxcbiAgICAudXNlci1wb3N0LWRlc2NyaXB0aW9ue1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VyUG9zdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0MWEwOGUyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxZdXJpeU1pcm9ub3ZcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxza2FzeVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NDFhMDhlMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NDFhMDhlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NDFhMDhlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDFhMDhlMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NDFhMDhlMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb3N0cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJQb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250YWluZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvdmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIsIGp1c3RpZnk6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgX3ZtLiRyb3V0ZS5xdWVyeS5tb2RlICE9PSBcIm1lXCJcbiAgICAgICAgICAgICAgPyBcItCe0LHRgNCw0YnQtdC90LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuVwiXG4gICAgICAgICAgICAgIDogXCLQktCw0YjQuCDQvtCx0YDQsNGJ0LXQvdC40Y9cIlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnBvc3RzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucG9zdHMsIGZ1bmN0aW9uKHBvc3QsIHkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHksIGF0dHJzOiB7IHhzMTI6IFwiXCIsIHNtNjogXCJcIiwgbWQ2OiBcIlwiLCBsZzQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYS0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZWxldmF0aW9uOiBcIjBcIiwgb3V0bGluZWQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXggY3J1ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCItMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnVzZXJfbGlrZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC51c2VyX2xpa2UgPT0gMCA/IDEgOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QubGlrZXMgKz1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnVzZXJfbGlrZSA9PT0gMSA/IDEgOiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGlrZShwb3N0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJtZGktaGVhcnRcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocG9zdC5saWtlcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID09PSBwb3N0LnVzZXJfaWQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZV9pZCA9IHBvc3QuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcIm1kaS1kZWxldGVcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLmlkID09PSBwb3N0LnVzZXJfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInllbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3VzZXIvcG9zdC9cIiArIHBvc3QuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcIm1kaS1wZW5jaWxcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT0gMTAyNCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5zdGF0ZSAhPT0gOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3N0VG9BY3Rpb24gPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWRpLWNoZWNrLW91dGxpbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgIT0gMTAyNCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5zdGF0ZSA9PSA4ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5pZCA9PT0gcG9zdC51c2VyX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvc3RUb0FjdGlvbiA9IHBvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZGktY2hlY2stb3V0bGluZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiMzVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi0J7Qv9GD0LHQu9C40LrQvtCy0LDQvdC+OiBcIiArIHBvc3QuZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb3N0LnVzZXJfaWQgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JLRi1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwb3N0LmF1dGhvci5mdWxsX25hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcItCh0YLQsNGC0YPRgTogXCIgKyBfdm0uc3RhdHVzZXNbcG9zdC5zdGF0ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhci10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXQtMiBtYi05XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QgPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MocG9zdC50aXRsZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYS0wIHBhLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdCA9IHBvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5waG90b3MubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ1c2VyLXBob3RvLW1vZHVsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJvdXNlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChwb3N0LnBob3RvcywgZnVuY3Rpb24ocGhvdG8sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInYtY2Fyb3VzZWwtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHBob3RvLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbi1oZWlndGhcIjogXCIzMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4LWhlaWd0aFwiOiBcIjMwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidXNlci1wb3N0LWRlc2NyaXB0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNvbnRhaW5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKHBvc3QuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmwgPiAxXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciB4cy0xMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtcGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsZW5ndGg6IF92bS5sLCBcInRvdGFsLXZpc2libGVcIjogMyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2UgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBteS0zXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCLQntCx0YDQsNGJ0LXQvdC40Lkg0L/QvtC60LAg0L3QtdGCXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlLWJ0blwiLFxuICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcInN1Y2Nlc3NcIiwgZmFiOiBcIlwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLnB1c2goXCIvdXNlci9wb3N0LzBcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwibWRpLXBsdXNcIildKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgISFfdm0uZGlhbG9nUG9zdFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBmdWxsc2NyZWVuOiBfdm0uJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdCA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInB4LTAgbXgtMCBwdC0wIG10LTAgY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZSAhaW1wb3J0YW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCIxMDAlICFpbXBvcnRhbnRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG15LTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGlhbG9nUG9zdC50aXRsZSkpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdC5waG90b3MgJiYgX3ZtLmRpYWxvZ1Bvc3QucGhvdG9zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm15LTIgY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcm91c2VsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRpYWxvZ1Bvc3QucGhvdG9zLCBmdW5jdGlvbihwaG90bywgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2LWNhcm91c2VsLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBwaG90by5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4LWhlaWdodFwiOiBcIjUwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbi1oZWlnaHRcIjogXCI1MDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QuY29tbWVudFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcItCa0L7QvNC80LXQvdGC0LDRgNC40Lkg0L7RgiDQsNC00LzQuNC90LjRgdGC0YDQsNGG0LjQuDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdC5jb21tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1jb250YWluZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0uZGlhbG9nUG9zdC5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhci10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXktM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ1Bvc3QgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0JfQsNC60YDRi9GC0YxcXG4gICAgICAgICAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICEhX3ZtLnBvc3RUb0FjdGlvblxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBmdWxsc2NyZWVuOiBfdm0uJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0ucG9zdFRvQWN0aW9uID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBvc3RUb0FjdGlvbixcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0ucG9zdFRvQWN0aW9uID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBvc3RUb0FjdGlvblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIHB5LTEgbXktMCBqdXN0aWZ5LXNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLQn9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXItdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleC1ncm93LTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3N0VG9BY3Rpb24gPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlhcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wb3N0VG9BY3Rpb24uc3RhdGUgPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INC60L7QvNC10L3RgtCw0YDQuNC5LCDQv9C+0Y/RgdC90Y/RjtGJ0LjQuSDQstGL0L/QvtC70L3QtdC90LjQtSDQvtCx0YDQsNGJ0LXQvdC40Y8uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInYtY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDQv9C+0LTRgtCy0LXRgNC00LjRgtGMINGA0LDRgdGB0LzQvtGC0YDQtdC90LjQtSDQstCw0YjQtdCz0L4g0L7QsdGA0LDRidC10L3QuNGPP1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hdHRlbXB0UmVzZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9zdFRvQWN0aW9uLnN0YXRlID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0JrQvtC80LzQtdC90YLQsNGA0LjQuVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VzXCI6IF92bS5jb21tZW50RXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY29tbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29tbWVudCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGU6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJkYXJrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucG9zdFRvQWN0aW9uLnN0YXRlID09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb21tZW50ID09IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFjY2VwdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvc3RUb0FjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7QtNGC0LLQtdGA0LTQuNGC0YxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyUG9zdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjE0MTFhOWZhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclBvc3RzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9