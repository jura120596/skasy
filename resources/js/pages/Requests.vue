<template>
    <v-container class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
                         v-text="$store.state.auth.user.role === 1024 ? 'Запросы пользователей' : 'Ваши запросы'">
        </v-toolbar-title>
        <div v-if="requests.length > 0">
            <v-layout class="d-flex flex-row flex-wrap">

                <v-flex
                        xs12
                        sm6
                        md6
                        lg4
                        v-for="(req, y) in requests" :key="y">

                    <v-card
                            elevation="0"
                            outlined
                            style="position: relative;border: thin solid rgb(57 133 165 / 34%);border-radius:16px"
                            class="ma-1"
                    >
                        <div v-if="$store.state.auth.user.id === req.user_id || $store.state.auth.user.role === 1024"
                             class="d-flex crud" style="position:absolute; right: 5px; top: -10px; font-size: 10px">
                            <v-btn color="red"
                                   fab
                                   small
                                   @click="delete_id = req.id"
                                   class="mr-3"
                                   dark>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </div>

                        <v-container>
                            <div v-text="'Опубликовано: '+req.date"
                                 style="position:absolute; left: 5px; bottom: 20px; font-size: 10px"></div>
                            <div v-text="'Пользователь: '+(req.user_id == $store.state.auth.user.id ? 'Вы' : req.user.full_name)"
                                 style="position:absolute; left: 5px; bottom: 5px; font-size: 10px"></div>
                            <v-spacer></v-spacer>
                            <v-toolbar-title
                                    class="text-center mt-2 mb-7"
                                    @click="
                                    dialogModel = req
                                    show =  true
                            ">{{req.type && req.type.name}}
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
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
            <div class="text-center my-3">Запросов пока нет</div>
        </div>

        <v-btn class="save-btn"
               v-if="$store.state.auth.user.role & 1 > 0"
               color="success"
               fab
               @click="$router.push('/request/0?role=' + ($route.fullPath === '/requests' ? 1024 : 128))"
               dark>
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-dialog
                v-if="!!dialogModel"
                v-model="show"
                @close="
                    show = false
                    dialogModel = null
                "
                :fullscreen="$vuetify.breakpoint.mobile"
        >
            <template slot:default>
                <div class="px-0 mx-0 pt-0 mt-0 cover" style="background-color: white !important;">

                    <v-toolbar class="container py-1 my-0 justify-space-between elevation-0">
                        <v-toolbar-title>
                            <span class="headline">{{dialogModel.type && dialogModel.type.name}}</span>
                        </v-toolbar-title>
                        <v-spacer/>
                        <v-toolbar-title>
                            <v-icon
                                    class="flex-grow-0"
                                    text
                                    @click="
                                show = false
                                dialogModel = null
                    ">mdi-close</v-icon>
                        </v-toolbar-title>
                    </v-toolbar>

                    <v-container style="position:relative;">
                        <div
                             style="font-size: 10px">
                            {{'От гражданина: '+(dialogModel.user_id == $store.state.auth.user.id ? 'Вы ' : dialogModel.user.full_name + '  ')}}
                            <div  v-if="$store.state.auth.user.role >= 1024">
                                (<router-link :to="'/files/'+ dialogModel.user_id">Файлы пользователя</router-link>)
                            </div>
                        </div>
                        <div v-text="'Требование:'"
                             style="font-size: 10px"></div>
                        <div>
                            {{dialogModel.text}}
                        </div>
                    </v-container>
                    <v-container
                            v-if="dialogModel.messages && dialogModel.messages.length || $store.state.auth.user.role >= 128">
                        <v-container class="ma-0 pa-0" v-if="dialogModel.messages && dialogModel.messages.length>0">
                            <div>

                                <v-card elevation="0">

                                    <v-card-text>

                                        <div
                                                v-for="message in dialogModel.messages"
                                                class="d-flex"
                                                :class="message.user_id === $store.state.auth.user.id ? 'text-right flex-row-reverse' : ''">
                                            <div class="rounded pa-1 ma-1"
                                                 style="background-color: lightgray; width: 60%"
                                                 :key="message.id">
                                                <div class="font-weight-normal">
                                                    <strong style="font-size: 9px">{{ message.date }}</strong>
                                                </div>
                                                <div class="font-weight-normal">
                                                    <strong>{{ message.user.full_name }}</strong>
                                                </div>
                                                <div>{{ message.text }}</div>
                                            </div>
                                        </div>

                                        <div class="text-center xs-12" v-if="ml > 1">
                                            <v-pagination
                                                    :length="ml"
                                                    :total-visible="3"
                                                    v-model="mpage"
                                            ></v-pagination>
                                        </div>
                                    </v-card-text>
                                </v-card>

                            </div>
                        </v-container>

                        <v-toolbar class="container pa-0 ma-0 justify-space-between elevation-0">
                                <v-text-field
                                        type="text"
                                        name="title"
                                        label="Сообщение"
                                        class="mt-4"
                                        v-model="message"
                                        :error-messages="messageText"
                                >
                                </v-text-field>
                                <v-btn
                                        class="rounded"
                                        :disabled="!message"
                                        color="primary">
                                    <v-icon
                                            text
                                            @click="
                                            send
                                     ">mdi-check-outline
                                    </v-icon>
                                </v-btn>
                        </v-toolbar>

                    </v-container>

                </div>
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
                ml: 1,
                requests: [],
                page: 1,
                mpage: 1,
                dialogModel: null,
                delete_id: 0,
                show: false,
                message: '',
                messageText: '',
            }
        },
        mounted() {
            this.getPage();
        },
        methods: {
            getPage() {
                window.axios.get('/request', {params: {
                    page: this.page,
                    per_page: 10,
                    role: this.$route.fullPath === '/requests' ? 1024 : 128,
                }}).then((response) => {
                    this.requests = response.data.data;
                    this.l = response.data.last_page
                }).catch((e) => {
                    console.log(e);
                });
            },
            delete() {
                if (this.delete_id > 0)
                    window.axios.delete('/request/' + this.delete_id).then((response) => {
                        this.getPage()
                        this.delete_id = 0
                    }).catch((e) => {
                        console.log(e);
                    });
            },
            getMessages() {
                window.axios.get('/request/' + this.dialogModel.id + '/messages', {
                    params: {
                        page: this.mpage,
                        per_page: 10,
                    }
                }).then((r) => {
                    this.dialogModel.messages = r.data.data
                    this.ml = r.data.last_page
                }).catch((e) => {
                    console.log(e)
                })
            },
            send() {
                window.axios.post('/request/' + this.dialogModel.id + '/messages?per_page=10', {
                    text: this.message,
                }).then((r) => {
                    this.dialogModel.messages = r.data.data
                    this.ml = r.data.last_page
                    this.message = '';
                }).catch((e) => {
                    if (e.response && e.response.status === 422) {
                        this.messageText = e.response.data.errors.text;
                    }
                    if (e.response && e.response.status === 500) {
                        this.messageText =  e.response.data.message;
                    }
                })
            }
        },
        watch: {
            page() {
                this.getPage();
            },
            mpage() {
                this.getMessages();
            },
            delete_id(nv) {
                if (nv > 0) this.delete()
            },
            show(nv) {
                if (nv) {
                    this.getMessages();
                }
            }
        }
    }
</script>

<style>
</style>
