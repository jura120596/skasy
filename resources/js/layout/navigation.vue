<template>
    <v-navigation-drawer v-model="drawers.navigate" app clipped class="app-navigation">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    Навигация
                    <v-divider></v-divider>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list dense>
            <v-list-item to="/map" link>
                <v-list-item-action>
                    <v-avatar size="30">
                        <img
                                src="/img/dashboard_icon.png"
                                alt="John"
                        >
                    </v-avatar>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Карта поселения</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item
                    :to="'/posts'" link>
                <v-list-item-action>
                    <v-avatar size="30">
                        <img
                                src="/img/case_icon.png"
                                alt="John"
                        >
                    </v-avatar>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Новости</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <div v-if="$store.state.auth.user.user_group >= 64">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">Компании</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item to="/company" :exact="true" link>
                    <v-list-item-action>
                        <v-avatar size="30">
                            <img
                                    src="/img/companies_icon.png"
                                    alt="John"
                            >
                        </v-avatar>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Компании</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/plan" link v-if="$store.state.auth.user.user_group > 256">
                    <v-list-item-action>
                        <v-avatar size="30">
                            <img
                                    src="/img/plans_icon.png"
                                    alt="John"
                            >
                        </v-avatar>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Тарифы</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </div>

            <div v-if="$store.state.auth.user.user_group >= 64">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">Каталоги</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/region" link>
                    <v-list-item-action>
                        <v-avatar size="30">
                            <img
                                    src="/img/companies_icon.png"
                            >
                        </v-avatar>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Суды</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </div>
            <div v-if="$store.state.auth.user.user_group >= 256">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">Пользователи</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/user/company" link>
                    <v-list-item-action>
                        <v-avatar size="30">
                            <img
                                    src="/img/users_icon.png"
                                    alt="John"
                            >
                        </v-avatar>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Пользователи</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </div>
            <div v-if="$store.state.auth.token" >

                <v-list-item  to="/profile" link>
                    <v-list-item-action>
                        <v-avatar size="30">
                            <img
                                    src="/img/users_icon.png"
                                    alt="John"
                            >
                        </v-avatar>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Профиль</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item  @click="$emit('logout')" link>
                    <v-list-item-action>
                        <v-avatar size="30">
                            <img
                                    src="/img/users_icon.png"
                                    alt="John"
                            >
                        </v-avatar>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Выход</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </div>


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
