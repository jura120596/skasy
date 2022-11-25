<template>
    <v-container class="cover">
        <v-toolbar-title align="center" justify="center" class="mb-2"
                         v-text="'Список пользователей'">
        </v-toolbar-title>
        <v-text-field
                v-model="q"
                class="mx-4"
                label="Имя или фамилия или адрес"
                :append-outer-icon="'mdi-magnify'"
                @click:append-outer="getPage"
            />
        <div v-if="users.length > 0 && $vuetify.breakpoint.mobile">
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
                            style="position: relative;border: thin solid rgb(57 133 165 / 34%);border-radius:16px"
                            class="ma-1"
                    >
                        <div class="d-flex crud" style="position:absolute; right: 5px; top: -10px; font-size: 10px">
                            <v-btn color="red"
                                   v-if="$store.state.auth.user.role === 1024 && !user.blocked"
                                   fab
                                   small
                                   @click="block_user = user"
                                   class="mr-3"
                                   dark>
                                <v-icon>mdi-lock-outline</v-icon>
                            </v-btn>
                            <v-btn color="red"
                                   fab
                                   v-else-if="$store.state.auth.user.role === 1024"
                                   small
                                   @click="block_user = user"
                                   class="mr-3"
                                   dark>
                                <v-icon>mdi-lock-open-variant-outline</v-icon>
                            </v-btn>
                            <v-btn color="yellow"
                                   fab
                                   small
                                   @click="$router.push('/user/'+user.id)"
                                   class="mr-3"
                                   dark>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </div>

                        <v-card elevation="0" class="pa-1">
                            <div v-text="'Почта: '+user.email"></div>
                            <div v-text="'Телефон: '+(user.phone ? user.phone : ' не указан')"></div>
                            <div v-text="'ФИО: '+ user.full_name"></div>
                            <div v-text="'Баллы: '+ user.points"></div>
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
        <div v-else-if="users.length > 0">
            <app-data-table
                items-url="/user/"
                :show-select="false"
                :fixed-col="true"
                :filter="{name:q}"
                :headers="tableHeaders"
                :toItem="toItem"
                :editItem="editItem"
            />
        </div>
        <div v-else>
            <div class="text-center my-3">Пользователи не найдены</div>
        </div>

        <v-btn class="save-btn"
               v-if="$store.state.auth.user.role === 1024"
               color="success"
               fab
               @click="$router.push('/user/0')"
               dark>
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
    import AppDataTable from "../components/AppDataTable";
    export default {
        name: "Users",
        components: {AppDataTable},
        data: (vm) => {
            return {
                l: 1,
                users: [],
                page: 1,
                block_user: null,
                show: false,
                message: '',
                messageText: '',
                q: '',
                tableHeaders: [
                    {text:"ID", value:'id', fixed:false },
                    {text:"ФИО", value:'full_name', fixed:false, sortable:false, link:true },
                    {text:"Email", value:'email'},
                    {text:"Телефон", value:'phone' },
                    {text:"Баллы", value:'points' },
                    {text:"Блокировка", value:'block', sortable:false, link:true },
                    {text:"МО", value:'district_name' },
                    {text:"НП", value:'village_name' },
                    {text:"Адрес", value:'address' },
                ]
            }
        },
        mounted() {
            this.getPage();
        },
        methods: {
            toItem(item) {
                item.block = item.blocked === 1 ? 'Разблокировать' : 'Заблокировать'
                item.village_name = item.village ? item.village.name : '';
                item.district_name = item.district ? item.district.name : '';
                return item;
            },
            editItem(id, item, value) {
                if(value == 'block') this.block_user = item;
                if(value == 'full_name') this.$router.push('/user/'+item.id)
            },
            getPage() {
                window.axios.get('/user', {params: {
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
            block() {
                if (this.block_user.id > 0)
                    this.block_user.blocked = !this.block_user.blocked;
                    window.axios.put('/user/' + this.block_user.id, {blocked: this.block_user.blocked}).then((response) => {
                        this.getPage()
                        this.block_user = null
                    }).catch((e) => {
                        console.log(e);
                    });
            },
        },
        watch: {
            page() {
                this.getPage();
            },
            block_user(nv) {
                if (nv) this.block()
            },
        }
    }
</script>

<style>
</style>
