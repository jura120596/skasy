<template>
    <v-app  mobile-breakpoint="600">
        <navigation :initDrawers="drawers"
                    @logout="logout"/>
        <template v-if="$store.state.auth.token">
            <layout-header  v-if="!$vuetify.breakpoint.mobile" :initDrawers="drawers"
                            @logout="logout"
                           @toggleDrawer="drawers.navigate = !drawers.navigate" />
            <v-main v-if="!$store.state.auth.loggingOut">
                <router-view :key="$route.fullPath"/>
            </v-main>
        </template>
        <template v-else>
            <v-main v-if="!$store.state.auth.loggingOut">
                <router-view />
            </v-main>
        </template>
        <layout-footer v-if="$vuetify.breakpoint.mobile"
                       @toggleDrawer="drawers.navigate = !drawers.navigate"/>
        <v-snackbar
                v-model="snackbar"
                :timeout="timeout"
        >
            {{ snackbarText }}

            <template v-slot:action="{ attrs }">
                <v-btn
                        color="blue"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                >
                    Закрыть
                </v-btn>
            </template>
        </v-snackbar>
    </v-app>
</template>

<script>
    import Navigation from '@/layout/navigation';
    import LayoutHeader from '@/layout/layout-header';
    import LayoutFooter from '@/layout/layout-footer';

    export default {
        name: 'App',

        components: {
            'navigation' : Navigation,
            'layout-header': LayoutHeader,
            'layout-footer': LayoutFooter,
        },

        data: function() {
            return {
                snackbar: false,
                snackbarText: '',
                isMobile: false,
                timeout: 3000,
                drawers:{
                    navigate:true
                }
            }
        },
        beforeDestroy () {
            if (typeof window === 'undefined') return

            window.removeEventListener('resize', this.onResize, { passive: true })
        },

        mounted () {
            this.onResize()
            window.addEventListener('resize', this.onResize, { passive: true })
            window.axios.get('type').then((r) => {
                r.data.data.forEach((v) => {
                    this.$store.state.types.push({
                        value: v.id,
                        text: v.name,
                    })
                })
            })
        },

        methods: {
            onResize () {
                this.isMobile = window.innerWidth < 600
            },
            logout() {

                this.$store.dispatch('auth/toggleLoggingOut', true);
                this.$store.dispatch('auth/logout')
                    .catch(err => console.log(err));
            },
        },

    };
</script>
<style>
    .cover {
        min-height: 92vh !important;
        padding-bottom: 8vh !important;
    }
    .tox {

        height: 1px;
        min-height: 80vh;
    }
    .save-btn {
        position: fixed;
        bottom: calc(8vh + 10px);
        right: 10px;
    }
    .v-btn--has-bg.save-btn{
        background-color: gray !important;
    }

    .v-dialog {
        background-color: white !important;
    }

    .crud .v-btn--fab.v-size--small {
        height: 30px;
        width: 30px;
        z-index: 100
    }
    .v-carousel, .v-carousel .v-carousel__item {
        height:auto !important;
    }
    .v-dialog__content {
        z-index: 1001!important;
    }
</style>
