<template>
    <v-container class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
                         v-text="'Список пользователей'">
        </v-toolbar-title>
        <v-text-field
                v-model="q"
                label="ФИО"
                :append-outer-icon="'mdi-magnify'"
                @click:append-outer="getPage"
            />
        <div v-if="users.length > 0">
            <v-layout class="d-flex flex-row flex-wrap">
                <v-flex
                        xs12
                        sm6
                        md6
                        lg4
                        v-for="(user, y) in users" :key="y">

                    <v-card
                            elevation="0"
                            outlined
                            style="position: relative;"
                            class="ma-1"
                    >
                        <div v-if="$store.state.auth.user.role === 1024"
                             class="d-flex crud" style="position:absolute; right: 5px; top: -10px; font-size: 10px">
                            <v-btn color="red"
                                   v-if="!user.blocked"
                                   fab
                                   small
                                   @click="block_id = user.id"
                                   class="mr-3"
                                   dark>
                                <v-icon>mdi-lock-outline</v-icon>
                            </v-btn>
                            <v-btn color="red"
                                   fab
                                   v-else
                                   small
                                   @click="block_id = user.id"
                                   class="mr-3"
                                   dark>
                                <v-icon>mdi-lock-open-variant-outline</v-icon>
                            </v-btn>
                        </div>

                        <v-card elevation="0" class="pa-1">
                            <div v-text="'Почта: '+user.email"></div>
                            <div v-text="'Телефон: '+(user.phone ? user.phone : ' не указан')"></div>
                            <div v-text="'ФИО:'+ user.full_name"></div>
                            <div v-text="'Статус: '+ (user.blocked ? ' заблокирован' : ' разблокирован')"></div>
                        </v-card>
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
            <div class="text-center my-3">Пользователи не найдены</div>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: "Users",
        data: (vm) => {
            return {
                l: 1,
                users: [],
                page: 1,
                block_id: 0,
                show: false,
                message: '',
                messageText: '',
                q: '',
            }
        },
        mounted() {
            this.getPage();
        },
        methods: {
            getPage() {
                window.axios.get('/user/', {params: {
                    page: this.page,
                    per_page: 10,
                    name: this.q,
                }}).then((response) => {
                    this.users = response.data.data;
                    this.l = response.data.last_page
                }).catch((e) => {
                    console.log(e);
                });
            },
            delete() {
                if (this.block_id > 0)
                    window.axios.put('/user/' + this.block_id).then((response) => {
                        this.getPage()
                        this.block_id = 0
                    }).catch((e) => {
                        console.log(e);
                    });
            },
        },
        watch: {
            page() {
                this.getPage();
            },
            block_id(nv) {
                if (nv > 0) this.delete()
            },
        }
    }
</script>

<style>
</style>