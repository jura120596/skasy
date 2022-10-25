<template>
    <v-navigation-drawer v-model="drawers.navigate" app clipped class="app-navigation">
        <v-list-item v-if="$vuetify.breakpoint.mobile">
            <v-list-item-content>
                <v-list-item-title class="title">
                    {{$store.state.appName}}
                    <v-divider></v-divider>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list dense>
            <v-list-item to="/map" link>
                <v-list-item-action>
                    <v-icon>mdi-google-maps</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Карта поселения</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item
                    :to="'/posts'" link>
                <v-list-item-action>
                    <v-icon>mdi-newspaper</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Новости</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item
                    :to="'/schedule'" link>
                <v-list-item-action>
                    <v-icon>mdi-clock-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Расписание автобуса</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item
                    :to="'/events'" link>
                <v-list-item-action>
                    <v-icon>mdi-calendar-star</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Мероприятия</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item
                    :to="'/user/posts'" link>
                <v-list-item-action>
                    <v-icon>mdi-file-document-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Обращения</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <div v-if="$store.state.auth.token" >
                <v-list-item v-if="$store.state.auth.user.role < 128"
                        :to="'/user/posts?mode=me'" link>
                    <v-list-item-action>
                            <v-icon>mdi-file-document-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Мои обращения</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item  v-if="$store.state.auth.user.role === 1024"
                              :to="'/types'" link>
                    <v-list-item-action>
                        <v-icon>mdi-file-document-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Типы запросов</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item  v-if="$store.state.auth.user.role === 1024 && $store.state.auth.user.region_id == null"
                              :to="'/regions'" link>
                    <v-list-item-action>
                        <v-icon>mdi-google-maps</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Районы</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item  v-if="$store.state.auth.user.role === 1024 || !!($store.state.auth.user.role & 32)"
                              :to="'/users'" link>
                    <v-list-item-action>
                        <v-icon>mdi-account-box-multiple</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Список пользователей</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item  v-if="$store.state.auth.user.role < 128"
                              :to="'/files'" link>
                        <v-list-item-action>
                            <v-icon>mdi-file-document-multiple</v-icon>
                        </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Мои файлы</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                        v-if="$store.state.auth.user.role >= 1024 || $store.state.auth.user.role < 128"
                        :to="'/requests'" link>
                    <v-list-item-action>
                        <v-icon>mdi-file-document-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Запросы в администрацию</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                        :to="'/requests-lib'" link>
                    <v-list-item-action>
                        <v-icon>mdi-file-document-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Запросы в библиотеку</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </div>



            <v-list-item  to="/profile" link>
                <v-list-item-action>
                    <v-icon>mdi-account</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Профиль</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item  to="/points-history" link>
                <v-list-item-action>
                    <v-icon>mdi-clock-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>История баллов</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item  @click="$emit('logout')" link  v-if="$store.state.auth.token" >
                <v-list-item-action>
                    <v-icon>mdi-account-arrow-left-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Выход</v-list-item-title>
                </v-list-item-content>
            </v-list-item>


        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: 'Navigation',
        props: {
            initDrawers: Object,
        },
        data: function () {
            return {
                drawers: this.initDrawers
            }
        },
    };
</script>

<style scoped>
    .app-navigation {
        z-index:1001;
    }
</style>
