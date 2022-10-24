<template>
    <v-container class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
                         v-text="'Последние новости'">
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
                            style="position: relative;border: thin solid rgb(57 133 165 / 34%);border-radius:16px;overflow:hidden"
                            class="ma-1"
                    >
                        <div v-if="$store.state.auth.user.role === 1024"
                             class="d-flex crud" style="position:absolute; right: 5px; top: -10px; font-size: 10px">
                            <v-btn color="red"
                                   fab
                                   small
                                   @click="delete_id = post.id"
                                   class="mr-3"
                                   dark>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <v-btn
                                    color="yellow"
                                    fab
                                    small
                                    @click="$router.push('/post/'+post.id)"
                                    dark>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </div>

                        <div
                                v-else
                                v-text="'Опубликовано: '+post.date"
                                style="position:absolute; right: 15px; top: 5px; font-size: 10px"></div>
                        <v-container>
                            <v-spacer></v-spacer>
                            <v-toolbar-title
                                class="text-center mt-3 mb-2"
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
                                            min-height="300px"
                                            max-height="300px"
                                    >
                                    </v-carousel-item>
                                </v-carousel>
                            </div>
                            <div v-else class="user-post-description">
                                <v-container v-html="post.description"></v-container>
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
            <div class="text-center my-3">Новостей пока нет</div>
        </div>

        <v-btn class="save-btn"
               v-if="$store.state.auth.user.role === 1024"
               color="success"
               fab
               @click="$router.push('/post/0')"
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
                <v-container class="px-0 mx-0 pt-0 mt-0 cover" style="background-color: white !important; max-width: 100% !important;">
                    <v-toolbar-title class="text-center my-3">{{dialogPost.title}}</v-toolbar-title>

                    <div v-if="dialogPost.photos && dialogPost.photos.length > 0" class="container my-2">
                        <v-carousel>
                            <v-carousel-item
                                    v-for="(photo, i) in dialogPost.photos"
                                    :key="i"
                                    :src="photo.file"
                                    contain
                                    max-height="500px"
                                    min-height="500px"
                            >
                            </v-carousel-item>
                        </v-carousel>
                    </div>
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
    </v-container>
</template>

<script>
    export default {
        name: "Posts",
        data: (vm) => {
            return {
                l: 1,
                posts: [],
                page: 1,
                dialogPost: null,
                delete_id: 0,
                show: false
            }
        },
        mounted() {
            this.getPage();
        },
        methods: {
            getPage() {
                window.axios.get('/post/', {params: {page: this.page, per_page: 10}}).then((response) => {
                    this.posts = response.data.data;
                    this.l = response.data.last_page
                }).catch((e) => {
                    console.log(e);
                });
            },
            delete() {
                if (this.delete_id > 0)
                    window.axios.delete('/post/' + this.delete_id).then((response) => {
                        this.getPage()
                        this.delete_id = 0
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
    .user-photo-module{
        height: 300px;
        max-height: 300px;
        overflow-y: hidden;
    }
    .user-post-description{
        height: 300px;
        max-height: 300px;
        overflow-y: hidden;
    }
</style>
