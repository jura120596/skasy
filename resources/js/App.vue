<template>
    <v-app  mobile-breakpoint="600">
        <navigation :initDrawers="drawers" />
        <template v-if="$store.state.auth.token">
            <layout-header :initDrawers="drawers"
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
        <layout-footer @toggleDrawer="drawers.navigate = !drawers.navigate"/>
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
        },

        methods: {
            onResize () {
                this.isMobile = window.innerWidth < 600
            },
        },

    };
</script>
