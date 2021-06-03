<template>
    <v-app>
        <template v-if="$store.state.auth&& $store.state.auth.token">
            HelloWorld
            <!--<layout-footer />-->
        </template>
        <template v-else>
            <v-main>
                <router-view/>
                <b>sdlks</b>
            </v-main>
        </template>
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

    export default {
        name: 'App',

        components: {
        },

        data: function() {
            return {
                snackbar: false,
                snackbarText: '',
                timeout: 3000,
                drawers:{
                    navigate:true
                }
            }
        }

    };
</script>
