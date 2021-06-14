<template>
    <v-container class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
                         v-text="$route.query.mode !== 'me' ? 'Обращения пользователей' : 'Ваши обращения'">
        </v-toolbar-title>
        <div v-if="posts.length > 0">
            <v-layout class="d-flex flex-row flex-wrap">

                <v-flex
                        xs12
                        sm6
                        md6
                        lg4
                        v-for="(post, y) in posts" :key="y">

                    <v-card
                            elevation="0"
                            outlined
                            style="position: relative;"
                            class="ma-1"
                    >
                        <div
                             class="d-flex crud" style="position:absolute; right: 5px; top: -10px; font-size: 10px">

                            <v-btn
                                    color="primary"
                                    fab
                                    small
                                    class="mr-3"
                                    @click="
                                        post.user_like = post.user_like == 0 ? 1: 0
                                        post.likes += post.user_like === 1 ? 1 : -1
                                        like(post)
                                        "
                                    dark>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            <v-btn
                                    color="primary"
                                    fab
                                    small
                                    class="mr-3"
                                    dark>
                                {{post.likes}}
                            </v-btn>
                            <v-btn v-if="$store.state.auth.user.id === post.user_id || $store.state.auth.user.role ===1024"
                                   color="red"
                                   fab
                                   small
                                   @click="delete_id = post.id"
                                   class="mr-3"
                                   dark>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <v-btn v-if="$store.state.auth.user.id === post.user_id"
                                   color="yellow"
                                    fab
                                    small
                                    class="mr-3"
                                    @click="$router.push('/user/post/'+post.id)"
                                    dark>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn v-if="$store.state.auth.user.role == 1024 && post.state !== 8"
                                   color="primary"
                                   fab
                                   small
                                   @click="postToAction = post"
                                   dark>
                                <v-icon>mdi-check-outline</v-icon>
                            </v-btn>
                            <v-btn v-if="$store.state.auth.user.role != 1024 && post.state == 8 && $store.state.auth.user.id === post.user_id"
                                   color="success"
                                   fab
                                   small
                                   @click="postToAction = post"
                                   dark>
                                <v-icon>mdi-check-outline</v-icon>
                            </v-btn>
                        </div>

                        <v-container >
                            <div v-text="'Опубликовано: '+post.date"
                                 style="position:absolute; left: 5px; bottom: 35px; font-size: 10px"></div>
                            <div v-text="'Пользователь: '+(post.user_id == $store.state.auth.user.id ? 'Вы' : post.author.full_name)"
                                 style="position:absolute; left: 5px; bottom: 20px; font-size: 10px"></div>
                            <div v-text="'Статус: '+(statuses[post.state])"
                                 style="position:absolute; left: 5px; bottom: 5px; font-size: 10px"></div>
                            <v-spacer></v-spacer>
                            <v-toolbar-title
                                class="text-center mt-2 mb-9"
                                @click="
                                    dialogPost = post
                                    show =  true
                            ">{{post.title}}</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-container>

                        <v-container class="ma-0 pa-0"
                             @click="
                                dialogPost = post
                                show =  true
                        ">
                            <div v-if="post.photos.length" class="user-photo-module">
                                <v-carousel>
                                    <v-carousel-item
                                            v-for="(photo, i) in post.photos"
                                            :key="i"
                                            :src="photo.file"
                                            contain
                                            min-heigth="100px"
                                    >
                                    </v-carousel-item>
                                </v-carousel>
                            </div>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
            <div class="text-center xs-12" v-if="l > 1">
                <v-pagination
                        :length="l"
                        :total-visible="3"
                        v-model="page"
                ></v-pagination>
            </div>
        </div>
        <div v-else>
            <div class="text-center my-3">Обращений пока нет</div>
        </div>

        <v-btn class="save-btn"
               color="success"
               fab
               @click="$router.push('/user/post/0')"
               dark>
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-dialog
                v-if="!!dialogPost"
                v-model="show"
                @close="
                    show = false
                    dialogPost = null
                "
                :fullscreen="$vuetify.breakpoint.mobile"
        >
            <template slot:default>
                <v-container class="px-0 mx-0 pt-0 mt-0 cover" style="background-color: white !important;">
                    <v-toolbar-title class="text-center my-3">{{dialogPost.title}}</v-toolbar-title>

                    <div v-if="dialogPost.photos && dialogPost.photos.length > 0" class="user-photo-module my-2">
                        <v-carousel>
                            <v-carousel-item
                                    v-for="(photo, i) in dialogPost.photos"
                                    :key="i"
                                    :src="photo.file"
                                    contain
                            >
                            </v-carousel-item>
                        </v-carousel>
                    </div>
                    <div v-if="dialogPost.comment" v-text="'Комментарий от администрации: ' + dialogPost.comment"
                         class="text-center"></div>
                    <v-container v-html="dialogPost.description"></v-container>

                    <v-toolbar-title class="text-center my-3">
                        <v-btn color="primary" @click="
                            show = false
                            dialogPost = null
                        ">Закрыть
                        </v-btn>
                    </v-toolbar-title>

                </v-container>
            </template>
        </v-dialog>
        <v-dialog
                v-if="!!postToAction"
                v-model="postToAction"
                @close="
                    postToAction = null
                "
                :fullscreen="$vuetify.breakpoint.mobile"
        >
            <template slot:default>
                <v-card>

                    <v-toolbar  class="container py-1 my-0 justify-space-between">
                        <v-toolbar-title>
                            <span class="headline">Подтверждение</span>
                        </v-toolbar-title>
                        <v-spacer/>
                        <v-toolbar-title><v-icon
                                class="flex-grow-0"
                                text
                                @click="postToAction = null">X</v-icon>
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-col>

                                <v-card-text v-if="postToAction.state === 0">
                                    Введите коментарий, поясняющий выполнение обращения.
                                </v-card-text>
                                <v-card-text v-else>
                                    Вы действительно хотите подтвердить рассмотрение вашего обращения?
                                </v-card-text>
                                <v-form @keyup.native.enter="attemptReset">
                                    <v-text-field v-if="postToAction.state === 0"
                                            v-model="comment"
                                            label="Комментарий"
                                            :error-messages="commentError"
                                            name="comment"
                                            type="text"
                                            required
                                    />
                                    <v-card
                                            class="d-flex justify-center align-center"
                                            flat
                                            height="auto"
                                            tile
                                    >
                                        <v-btn color="dark" @click="accept(postToAction)" :disabled="postToAction.state == 0 && comment == ''">
                                            Подтвердить
                                        </v-btn>
                                    </v-card>
                                </v-form>
                            </v-col>
                        </v-container>
                    </v-card-text>
                </v-card>
            </template>
        </v-dialog>
    </v-container>
</template>

<script>
    export default {
        name: "UserPosts",
        data: (vm) => {
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
                    32: 'Закрыто',
                }
            }
        },
        mounted() {
            this.getPage();
        },
        methods: {
            getPage() {
                console.log(this.$route)
                window.axios.get('/user/post/', {params: {page: this.page, per_page: 10, mode: this.$route.query.mode}}).then((response) => {
                    this.posts = response.data.data;
                    this.l = response.data.last_page
                }).catch((e) => {
                    console.log(e);
                });
            },
            delete() {
                if (this.delete_id > 0)
                    window.axios.delete('/user/post/' + this.delete_id).then((response) => {
                        this.getPage()
                        this.delete_id = 0
                    }).catch((e) => {
                        console.log(e);
                    });
            },
            accept(post) {
                let action =  this.postToAction.state == 0 ? 'accept' : 'confirm'
                window.axios.post('/user/post/' + post.id+'/'+action, {comment: this.comment}).then((response) => {
                    this.comment  = '';
                    post.comment = response.data.data.comment;
                    post.state = response.data.data.state
                }).catch((e) => {
                    console.log(e);
                    if (e?.response?.status=== 422) {
                        this.commentError = e.response.data.errors.comment;
                        this.postToAction = post;
                    }
                });
                this.postToAction= null;
            },
            like(post) {
                window.axios.post('/user/post/' + post.id+(post.user_like ? '/like' : '/dislike')).then((response) => {
                }).catch((e) => {
                    console.log(e);
                });
            }
        },
        watch: {
            page() {
                this.getPage();
            },
            delete_id(nv) {
                if (nv > 0) this.delete()
            }
        }
    }
</script>

<style>
</style>