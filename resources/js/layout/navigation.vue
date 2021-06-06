<template>
    <v-navigation-drawer v-model="drawers.navigate" app clipped>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    Навигация
                    <v-divider></v-divider>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list dense>
            <v-list-item to="/" link>
                <v-list-item-action>
                    <v-avatar size="30">
                        <img
                                src="/img/dashboard_icon.png"
                                alt="John"
                        >
                    </v-avatar>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Рабочий стол</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <div v-if="$store.state.auth.user.companies && $store.state.auth.user.companies.length"
                 v-for="company in $store.state.auth.user.companies" :key="company.id">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">{{company.name}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                        :to="'/company/'+company.id +'/case/'" link>
                    <v-list-item-action>
                        <v-avatar size="30">
                            <img
                                    src="/img/case_icon.png"
                                    alt="John"
                            >
                        </v-avatar>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Портфели</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </div>
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
            <div v-if="$vuetify.breakpoint.mobile && $store.state.auth.token" >
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

</style>
